// Ignore completions from a superseded play request.
export function createVideoPlayback(video, {allowed = () => true, onState = () => {}} = {}) {
  let generation = 0;
  let state = 'idle';
  let disposed = false;
  const lastSource = video.querySelector('source:last-of-type');

  function publish(next) {
    if (disposed || state === next) return;
    state = next;
    onState(next);
  }

  function cancel() {
    generation++;
    video.pause();
    // A navigation or visibility change must not clear a visible retry.
    if (state !== 'error') publish('idle');
  }

  function fail() {
    generation++;
    publish('error');
    video.pause();
  }

  async function toggle() {
    if (disposed) return;
    if (state === 'loading' || !video.paused) {
      cancel();
      return;
    }
    if (!allowed()) return;

    if (state === 'error') video.load();
    const request = ++generation;
    publish('loading');
    try {
      await video.play();
      if (request !== generation || disposed) return;
      if (allowed() && !video.paused) publish('playing');
      else cancel();
    } catch {
      if (request === generation && !disposed) fail();
    }
  }

  function play() {
    if (video.paused) return;
    if (!allowed()) cancel();
    else publish('loading');
  }

  function playing() {
    if (video.paused) return;
    if (allowed()) publish('playing');
    else cancel();
  }

  function pause() {
    if (video.paused || video.ended) cancel();
  }

  video.addEventListener('play', play);
  video.addEventListener('playing', playing);
  video.addEventListener('pause', pause);
  video.addEventListener('ended', pause);
  video.addEventListener('error', fail);
  // Browsers can leave play() pending if every nested source fails.
  lastSource?.addEventListener('error', fail);
  return {
    toggle,
    cancel,
    dispose() {
      disposed = true;
      cancel();
      video.removeEventListener('play', play);
      video.removeEventListener('playing', playing);
      video.removeEventListener('pause', pause);
      video.removeEventListener('ended', pause);
      video.removeEventListener('error', fail);
      lastSource?.removeEventListener('error', fail);
    },
  };
}
