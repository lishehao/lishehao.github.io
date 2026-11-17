import test from 'node:test';
import assert from 'node:assert/strict';
import {createEraseSurface} from '../src/pocket/eraseSurface.js';
import {createGlassSurface} from '../src/pocket/glassSurface.js';

// These are lifecycle/operation tests, not browser pixel or compositor tests.
function environment(t){
 const canvases=[],images=[];
 function canvas(){
  const operations=[],ctx={operations,createRadialGradient:()=>({addColorStop(){}})};
  for(const name of ['drawImage','clearRect','fillRect','save','restore','scale','translate'])ctx[name]=(...args)=>operations.push({name,args});
  const c={width:300,height:150,getContext:()=>ctx,getBoundingClientRect:()=>({left:0,top:0,width:c.width,height:c.height})};
  canvases.push(c);return c;
 }
 const originalDocument=globalThis.document,originalImage=globalThis.Image;
 globalThis.document={createElement:canvas};
 globalThis.Image=class{constructor(){this.width=1600;this.height=1000;this.naturalWidth=0;images.push(this);}};
 t.after(()=>{if(originalDocument===undefined)delete globalThis.document;else globalThis.document=originalDocument;if(originalImage===undefined)delete globalThis.Image;else globalThis.Image=originalImage;});
 return {canvas,canvases,images,load(i=0){images[i].naturalWidth=images[i].width;images[i].onload?.();}};
}
function titleSurface(){
 const painted=[];
 return {painted,invalidated:0,resets:0,disposed:false,invalidate(){this.invalidated++;},
  paint(mask,revision){painted.push({mask,revision});},reset(){this.resets++;},dispose(){this.disposed=true;}};
}
test('erase batches pointer events and paints the title from the same mask as the sky',t=>{
 const e=environment(t),c=e.canvas(),title=titleSurface(),root={dataset:{}};
 const surface=createEraseSurface(c,title,root,'sky',()=>{});surface.resize(900,600);e.load();surface.flush();
 for(let i=0;i<40;i++)surface.erase({clientX:100+i,clientY:150});
 assert.equal(title.painted.length,0);
 surface.flush();
 assert.deepEqual(title.painted,[{mask:surface.mask,revision:surface.revision}]);
 const lastDraw=c.getContext('2d').operations.filter(op=>op.name==='drawImage').at(-1);
 assert.equal(lastDraw.args[0],surface.mask);
 surface.erase({clientX:200,clientY:160});surface.flush();
 assert.equal(title.painted[1].revision,title.painted[0].revision+1);
 surface.dispose();
});
test('resize retains erasure and reset restores the title',t=>{
 const e=environment(t),c=e.canvas(),title=titleSurface(),root={dataset:{}};
 const s=createEraseSurface(c,title,root,'sky',()=>{});s.resize(900,600);e.load();s.flush();s.erase({clientX:150,clientY:150});s.flush();
 const mask=s.mask,revision=s.revision;s.resize(900,600);assert.equal(s.revision,revision);
 s.resize(600,400);assert.equal(root.dataset.revealed,'true');assert.equal(mask.width,600);
 const copy=mask.getContext('2d').operations.filter(op=>op.name==='drawImage').at(-1);
 assert.ok(copy,'mask restored from saved canvas');
 assert.equal(copy.args[0].width,900);assert.equal(copy.args[3],600);
 assert.equal(title.invalidated,2);
 s.flush();assert.equal(title.painted.at(-1).revision,s.revision);
 s.reset();s.flush();assert.equal(root.dataset.revealed,'false');assert.equal(title.resets,1);
 s.dispose();
});
test('dispose detaches the title renderer and ignores delayed image loads',t=>{
 const e=environment(t),c=e.canvas(),title=titleSurface(),root={dataset:{}};
 let wakes=0;
 const s=createEraseSurface(c,title,root,'sky',()=>wakes++);
 s.resize(900,600);s.erase({clientX:100,clientY:100});s.flush();
 const load=e.images[0].onload;
 s.dispose();load();s.flush();
 assert.equal(wakes,1);assert.equal(title.painted.length,1);
 assert.equal(title.disposed,true);assert.equal(e.images[0].onload,null);
});
test('glass caches small tiles, has no CSS animation, and reduced motion only redraws on mask changes',t=>{
 const e=environment(t),c=e.canvas(),s=createGlassSurface(c,'lake',()=>{});
 s.resize(1000,800);e.load();const created=e.canvases.length;
 assert.equal(created,13);assert.equal(c.width,650);assert.equal(c.height,390);
 s.render(1,true);const ctx=c.getContext('2d'),count=ctx.operations.length;
 s.render(2,true);assert.equal(ctx.operations.length,count);
 s.render(2,true,e.canvas(),1);assert.ok(ctx.operations.length>count);
 const createdAfterMask=e.canvases.length;
 s.resize(1000,800);for(let i=0;i<100;i++)s.render(i/30,false);
 assert.equal(e.canvases.length,createdAfterMask,'no per-frame canvas/image allocations');
 s.dispose();assert.equal(e.images[0].onload,null);
});
