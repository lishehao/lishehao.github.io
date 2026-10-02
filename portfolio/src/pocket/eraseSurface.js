import {ERASER_RADIUS,normalizedPoint,skyCover} from './sceneCoordinates.js';
// Pointer events only enqueue brushes. Paint and encode at most once per frame,
// with one asynchronous mask encoding in flight and explicit URL ownership.
export function createEraseSurface(canvas,editorial,root,url,wake){
 const mask=document.createElement('canvas'),image=new Image();
 let cssWidth=0,cssHeight=0,lastPoint=null;
 let queue=[],dirty=true,maskDirty=false,encoding=false,disposed=false,objectUrl=null,epoch=0,revision=0;
 function replaceUrl(next){const old=objectUrl;objectUrl=next;editorial.style.maskImage=next?`url("${next}")`:'none';if(old)URL.revokeObjectURL(old);}
 function resize(w,h){
  w=Math.max(1,Math.round(w));h=Math.max(1,Math.round(h));
  const dpr=Math.min(globalThis.devicePixelRatio||1,1.25);
  if(cssWidth===w&&cssHeight===h&&canvas.width===Math.round(w*dpr))return;
  cssWidth=w;cssHeight=h;epoch++;lastPoint=null;
  const saved=document.createElement('canvas');saved.width=mask.width;saved.height=mask.height;
  if(mask.width&&mask.height)saved.getContext('2d').drawImage(mask,0,0);
  canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);mask.width=w;mask.height=h;
  const g=mask.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,mask.width,mask.height);
  if(root.dataset.revealed==='true'){g.clearRect(0,0,mask.width,mask.height);g.drawImage(saved,0,0,mask.width,mask.height);maskDirty=true;}
  dirty=true;revision++;
 }
 function reset(){epoch++;revision++;queue=[];lastPoint=null;const g=mask.getContext('2d');g.globalCompositeOperation='source-over';g.fillStyle='#fff';g.fillRect(0,0,mask.width,mask.height);replaceUrl(null);root.dataset.revealed='false';dirty=true;maskDirty=false;wake();}
 function flush(){
  if(disposed)return;
  if(queue.length){
   const g=mask.getContext('2d');g.globalCompositeOperation='destination-out';
   for(const p of queue){
    g.save();g.scale(mask.width,mask.height);g.translate(p.x,p.y);g.scale(ERASER_RADIUS/cssWidth,ERASER_RADIUS/cssHeight);
    const brush=g.createRadialGradient(0,0,.55,0,0,1);brush.addColorStop(0,'#000');brush.addColorStop(1,'#0000');g.fillStyle=brush;g.fillRect(-1,-1,2,2);g.restore();
   }
   queue=[];dirty=maskDirty=true;revision++;root.dataset.revealed='true';
  }
  if(dirty&&image.naturalWidth){
   const g=canvas.getContext('2d');g.globalCompositeOperation='source-over';g.clearRect(0,0,canvas.width,canvas.height);
   const cover=skyCover(image.width,image.height,canvas.width,canvas.height);
   g.drawImage(image,0,0,image.width,cover.sourceHeight,cover.x,cover.y,cover.width,cover.height);
   g.globalCompositeOperation='destination-in';g.drawImage(mask,0,0,canvas.width,canvas.height);g.globalCompositeOperation='source-over';dirty=false;
  }
  if(maskDirty&&!encoding){
   encoding=true;maskDirty=false;const version=epoch;
   mask.toBlob(blob=>{encoding=false;if(disposed)return;if(blob&&version===epoch)replaceUrl(URL.createObjectURL(blob));if(maskDirty)wake();});
  }
 }
 image.onload=()=>{if(!disposed){dirty=true;wake();}};image.src=url;
 return {resize,reset,flush,get mask(){return mask;},get revision(){return revision;},
  erase(e){
   const r=canvas.getBoundingClientRect(),p=normalizedPoint(e,r);
   if(lastPoint){const distance=Math.hypot((p.x-lastPoint.x)*r.width,(p.y-lastPoint.y)*r.height),steps=Math.ceil(distance/(ERASER_RADIUS*.4));
    for(let i=1;i<steps;i++)queue.push({x:lastPoint.x+(p.x-lastPoint.x)*i/steps,y:lastPoint.y+(p.y-lastPoint.y)*i/steps});
   }
   queue.push(p);lastPoint=p;wake();
  },
  endStroke(){lastPoint=null;},
  reveal(){epoch++;revision++;queue=[];lastPoint=null;mask.getContext('2d').clearRect(0,0,mask.width,mask.height);root.dataset.revealed='true';dirty=maskDirty=true;wake();},
  dispose(){disposed=true;image.onload=null;if(objectUrl)URL.revokeObjectURL(objectUrl);queue=[];},
 };
}
