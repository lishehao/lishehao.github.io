import cursors from './assets/pocket-cursors-v1.webp?url';
import extras from './assets/pocket-extras-v2.webp?url';
import hiddenSkyFull from './assets/pocket-hidden-lake-v1.webp?url';
import hiddenSkySmall from './assets/pocket-hidden-lake-v1-768.webp?url';
import terrainFull from './assets/pocket-moon-ground-v1.webp?url';
import terrainSmall from './assets/pocket-moon-ground-v1-768.webp?url';
import poses from './assets/pocket-person-frames-v1.webp?url';
import skyFull from './assets/pocket-planet-background-v1.webp?url';
import skySmall from './assets/pocket-planet-background-v1-768.webp?url';
import walk from './assets/pocket-walk-16-v2.webp?url';
import keepsakes from './assets/sky-keepsakes-v1.webp?url';
import paper from './assets/yellow-paper-v1.webp?url';

// Single current-scene asset manifest. Vite fingerprints these files in production.
// Full-screen backdrops come in a 768px version for narrow screens; sprite sheets
// keep their size because the scene reads them by exact pixel rectangles.
const narrow = typeof matchMedia === 'function' && matchMedia('(max-width: 760px)').matches;
export const pocketAssets = Object.freeze({cursors, extras, poses, walk, keepsakes, paper,
  hiddenSky: narrow ? hiddenSkySmall : hiddenSkyFull,
  terrain: narrow ? terrainSmall : terrainFull,
  sky: narrow ? skySmall : skyFull});
