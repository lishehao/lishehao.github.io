const reducedMotion = '(prefers-reduced-motion: reduce)';

export const languageFromPath = path => /^\/zh(?:\/|$)/.test(path) ? 'zh' : 'en';

export function languageURL(url, lang) {
  const next = new URL(url);
  next.pathname = lang === 'zh' ? '/zh/' : '/';
  return next;
}

export function isPlainClick(event) {
  return !event.defaultPrevented && event.button === 0 &&
    !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

export function followSection(event) {
  if (!isPlainClick(event)) return;
  const id = event.currentTarget.hash.slice(1);
  if (navigateTo(id)) event.preventDefault();
}

export function navigateTo(id, {history = true, behavior, focus = true} = {}) {
  const target = document.getElementById(id);
  if (!target) return false;

  const hash = id === 'top' ? '' : `#${id}`;
  if (history && location.hash !== hash) {
    window.history.pushState(null, '', `${location.pathname}${location.search}${hash}`);
  }

  const focusTarget = target.querySelector('[data-section-heading]') || target;
  const rect = target.getBoundingClientRect();
  const jump = matchMedia(reducedMotion).matches || Math.abs(rect.top) > 2 * innerHeight;
  const top = id === 'top' ? 0 : window.scrollY + rect.top;
  if (focus) focusTarget.focus({preventScroll: true});
  window.scrollTo({top, behavior: behavior ?? (jump ? 'instant' : 'smooth')});
  return true;
}
