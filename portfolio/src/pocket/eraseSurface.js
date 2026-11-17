import {ERASER_RADIUS, normalizedPoint, skyCover} from './sceneCoordinates.js';

export function createEraseSurface(canvas, title, root, url, wake) {
  const mask = document.createElement('canvas');
  const context = mask.getContext('2d');
  const image = new Image();
  let cssWidth = 0;
  let cssHeight = 0;
  let lastPoint = null;
  let queue = [];
  let dirty = true;
  let disposed = false;
  let revision = 0;

  function resize(width, height) {
    const w = Math.max(1, Math.round(width));
    const h = Math.max(1, Math.round(height));
    const dpr = Math.min(globalThis.devicePixelRatio || 1, 1.25);
    const bufferWidth = Math.round(w * dpr);
    const bufferHeight = Math.round(h * dpr);
    if (cssWidth === w && cssHeight === h && canvas.width === bufferWidth && canvas.height === bufferHeight) return;

    canvas.width = bufferWidth;
    canvas.height = bufferHeight;
    dirty = true;
    if (cssWidth === w && cssHeight === h) return;

    const revealed = root.dataset.revealed === 'true';
    const saved = revealed ? document.createElement('canvas') : null;
    if (saved) {
      saved.width = mask.width;
      saved.height = mask.height;
      saved.getContext('2d').drawImage(mask, 0, 0);
    }
    cssWidth = mask.width = w;
    cssHeight = mask.height = h;
    context.globalCompositeOperation = 'source-over';
    if (saved) context.drawImage(saved, 0, 0, w, h);
    else {
      context.fillStyle = '#fff';
      context.fillRect(0, 0, w, h);
    }
    lastPoint = null;
    title.invalidate();
    revision++;
  }

  function reset() {
    queue = [];
    lastPoint = null;
    context.globalCompositeOperation = 'source-over';
    context.fillStyle = '#fff';
    context.fillRect(0, 0, mask.width, mask.height);
    title.reset();
    root.dataset.revealed = 'false';
    revision++;
    dirty = true;
    wake();
  }

  function flush() {
    if (disposed) return;
    if (queue.length) {
      context.globalCompositeOperation = 'destination-out';
      for (const point of queue) {
        context.save();
        context.translate(point.x * cssWidth, point.y * cssHeight);
        const brush = context.createRadialGradient(0, 0, ERASER_RADIUS * .55, 0, 0, ERASER_RADIUS);
        brush.addColorStop(0, '#000');
        brush.addColorStop(1, '#0000');
        context.fillStyle = brush;
        context.fillRect(-ERASER_RADIUS, -ERASER_RADIUS, ERASER_RADIUS * 2, ERASER_RADIUS * 2);
        context.restore();
      }
      queue = [];
      dirty = true;
      revision++;
      root.dataset.revealed = 'true';
    }
    if (dirty && image.naturalWidth) {
      const g = canvas.getContext('2d');
      g.globalCompositeOperation = 'source-over';
      g.clearRect(0, 0, canvas.width, canvas.height);
      const cover = skyCover(image.width, image.height, canvas.width, canvas.height);
      g.drawImage(image, 0, 0, image.width, cover.sourceHeight, cover.x, cover.y, cover.width, cover.height);
      g.globalCompositeOperation = 'destination-in';
      g.drawImage(mask, 0, 0, canvas.width, canvas.height);
      dirty = false;
    }
    if (root.dataset.revealed === 'true') title.paint(mask, revision);
  }

  image.onload = () => {
    if (disposed) return;
    dirty = true;
    wake();
  };
  image.src = url;

  return {
    resize, reset, flush,
    get mask() { return mask; },
    get revision() { return revision; },
    erase(event) {
      const rect = canvas.getBoundingClientRect();
      const point = normalizedPoint(event, rect);
      if (lastPoint) {
        const dx = point.x - lastPoint.x;
        const dy = point.y - lastPoint.y;
        const steps = Math.ceil(Math.hypot(dx * rect.width, dy * rect.height) / (ERASER_RADIUS * .4));
        for (let i = 1; i < steps; i++) {
          queue.push({x: lastPoint.x + dx * i / steps, y: lastPoint.y + dy * i / steps});
        }
      }
      queue.push(point);
      lastPoint = point;
      wake();
    },
    endStroke() { lastPoint = null; },
    reveal() {
      queue = [];
      lastPoint = null;
      context.clearRect(0, 0, mask.width, mask.height);
      root.dataset.revealed = 'true';
      revision++;
      dirty = true;
      wake();
    },
    dispose() {
      disposed = true;
      image.onload = null;
      title.dispose();
      queue = [];
    },
  };
}
