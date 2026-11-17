// Use the heading's real font, letter positions and baseline. Once the title
// is erased, composite it with the same canvas mask as the background.
export function createTitleSurface(editorial, wake) {
  const heading = editorial.querySelector('h1');
  const baseline = heading.querySelector('.sky-play__title-baseline');
  const letters = [...heading.children].filter(child => child !== baseline);
  const canvas = editorial.querySelector('canvas');
  const context = canvas.getContext('2d');
  const source = document.createElement('canvas');
  const ink = source.getContext('2d');
  let top = 0;
  let ratio = 1;
  let prepared = false;
  let paintedRevision = -1;

  function invalidate() {
    prepared = false;
    paintedRevision = -1;
  }

  function fontChanged() {
    invalidate();
    wake();
  }
  document.fonts.addEventListener('loadingdone', fontChanged);

  function prepare(mask) {
    // End the introductory letter wave before measuring the resting title.
    editorial.dataset.titleSettled = '';
    const bounds = editorial.getBoundingClientRect();
    const line = heading.getBoundingClientRect();
    const style = getComputedStyle(heading);
    const scaleY = style.transform === 'none' ? 1 : new DOMMatrixReadOnly(style.transform).d;
    top = Math.floor(line.top - bounds.top) - 4;
    const height = Math.ceil(line.height) + 8;
    ratio = Math.min(devicePixelRatio, 2);
    source.width = canvas.width = Math.round(mask.width * ratio);
    source.height = canvas.height = Math.round(height * ratio);
    canvas.style.top = `${top}px`;
    canvas.style.height = `${height}px`;

    const baseY = (baseline.getBoundingClientRect().top - bounds.top - top) / scaleY;
    ink.setTransform(ratio, 0, 0, ratio * scaleY, 0, 0);
    ink.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    ink.fillStyle = style.color;
    for (const letter of letters) {
      if (!letter.textContent.trim()) continue;
      ink.fillText(letter.textContent, letter.getBoundingClientRect().left - bounds.left, baseY);
    }
    prepared = true;
  }

  return {
    invalidate,
    paint(mask, revision) {
      if (paintedRevision === revision) return;
      if (!prepared) prepare(mask);
      context.globalCompositeOperation = 'source-over';
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(source, 0, 0);
      context.globalCompositeOperation = 'destination-in';
      context.drawImage(mask, 0, -top * ratio, canvas.width, mask.height * ratio);
      editorial.dataset.titleCanvas = '';
      paintedRevision = revision;
    },
    reset() {
      delete editorial.dataset.titleCanvas;
      paintedRevision = -1;
    },
    dispose() {
      document.fonts.removeEventListener('loadingdone', fontChanged);
      delete editorial.dataset.titleCanvas;
      delete editorial.dataset.titleSettled;
    },
  };
}
