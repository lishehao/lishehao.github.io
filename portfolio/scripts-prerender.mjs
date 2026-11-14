// After `vite build` and the SSR build, write the prerendered English and Chinese homepages.
import {readFileSync,writeFileSync} from 'node:fs';
const {render}=await import('./dist-ssr/entry-server.js');
const template=readFileSync('dist/index.html','utf8');
if(!template.includes('<div id="root"></div>'))throw Error('unexpected index.html');
const page=(path,lang)=>template.replace('<html lang="en">',`<html lang="${lang}">`).replace('<div id="root"></div>',`<div id="root">${render(path)}</div>`);
writeFileSync('dist/index.html',page('/','en'));
writeFileSync('dist/index.zh.html',page('/zh/','zh-CN'));
console.log('prerendered / and /zh/');
