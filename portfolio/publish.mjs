import {cpSync,mkdirSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
// Overlay ONLY the homepage and its fingerprinted assets. Existing Hugo case
// studies, resume, verification files and stable URLs remain intact.
const root=fileURLToPath(new URL('../',import.meta.url));
const name=process.argv[2];
if(!['docs','public'].includes(name))throw Error('Expected docs or public');
const target=resolve(root,name),build=fileURLToPath(new URL('./dist/',import.meta.url));
mkdirSync(target,{recursive:true});cpSync(build,target,{recursive:true});
for(const locale of ['zh','en']){mkdirSync(resolve(target,locale),{recursive:true});cpSync(resolve(build,'index.html'),resolve(target,locale,'index.html'));}
writeFileSync(resolve(target,'.nojekyll'),'');
