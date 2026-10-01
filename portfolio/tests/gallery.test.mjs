import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'vite';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {existsSync} from 'node:fs';
import {galleryProjects} from '../src/galleryProjects.js';

test('homepage renders both public galleries in both languages, without removed content',async()=>{
 const server=await createServer({root:new URL('../',import.meta.url).pathname,server:{middlewareMode:true},appType:'custom'});
 const original=globalThis.location;
 try{
  const {DaybookPortfolio}=await server.ssrLoadModule('/src/DaybookPortfolio.jsx');
  for(const pathname of ['/','/zh/']){
   globalThis.location={pathname};const html=renderToStaticMarkup(React.createElement(DaybookPortfolio));
   assert.equal((html.match(/class="gallery-room"/g)||[]).length,2);
   assert.equal((html.match(/<video/g)||[]).length,2);
   assert.match(html,/planet-lite--compact/);assert.doesNotMatch(html,/<canvas|sky-play__canvas/);
   assert.match(html,pathname==='/zh/'?/开启互动/:/Enable interaction/);
   assert.doesNotMatch(html,/sky-play__tip|daybook-notes|Things I keep noticing|Hold to drag|Inside: A350/);
   assert.match(html,/href="\/resume\/"/);assert.doesNotMatch(html,/autoplay/i);
   for(const project of galleryProjects){assert.ok(html.includes(project.title));assert.ok(html.includes(`${pathname==='/zh/'?'/zh':''}/projects/${project.slug}/`));}
  }
  for(const project of galleryProjects){
   assert.ok(existsSync(new URL(`../public${project.video}`,import.meta.url)));
   assert.ok(existsSync(new URL(`../public${project.poster}`,import.meta.url)));
  }
 }finally{globalThis.location=original;await server.close();}
});
