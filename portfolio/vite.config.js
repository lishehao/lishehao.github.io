import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react(),{
 name:'preload-homepage-fonts',
 transformIndexHtml:{order:'post',handler(html,context){
  if(!context.bundle)return html;
  const fonts=Object.values(context.bundle).filter(asset=>/^assets\/(anton|figtree)-latin-400-normal-.*\.woff2$/.test(asset.fileName));
  return {html,tags:fonts.map(asset=>({tag:'link',attrs:{rel:'preload',as:'font',type:'font/woff2',href:`/${asset.fileName}`,crossorigin:'anonymous'},injectTo:'head'}))};
 }}
}],resolve:{dedupe:['react','react-dom','three']},build:{outDir:'dist'}});
