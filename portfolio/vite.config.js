import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react(),{
 name:'preload-homepage-fonts',
 transformIndexHtml:{order:'post',handler(html,context){
  if(!context.bundle)return html;
  const fonts=Object.values(context.bundle).filter(asset=>/^assets\/(anton|figtree)-latin-400-normal-.*\.woff2$/.test(asset.fileName));
  // The hero's ground (paper + terrain) is the largest paint; announce it before the JS runs.
  const pick=re=>Object.values(context.bundle).find(asset=>re.test(asset.fileName))?.fileName;
  const hero=[[/^assets\/yellow-paper-v1-768-.*\.webp$/,'(max-width: 760px)'],[/^assets\/pocket-moon-ground-v1-768-.*\.webp$/,'(max-width: 760px)'],
   [/^assets\/yellow-paper-v1-[^7].*\.webp$/,'(min-width: 761px)'],[/^assets\/pocket-moon-ground-v1-[^7].*\.webp$/,'(min-width: 761px)']]
   .map(([re,media])=>({file:pick(re),media})).filter(x=>x.file);
  return {html,tags:[...fonts.map(asset=>({tag:'link',attrs:{rel:'preload',as:'font',type:'font/woff2',href:`/${asset.fileName}`,crossorigin:'anonymous'},injectTo:'head'})),
   ...hero.map(({file,media})=>({tag:'link',attrs:{rel:'preload',as:'image',type:'image/webp',href:`/${file}`,media,fetchpriority:'high'},injectTo:'head'}))]};
 }}
}],resolve:{dedupe:['react','react-dom','three']},build:{outDir:'dist'}});
