// Six small cached image patches, ONE bounded canvas, no animated CSS masks.
// All patches use the scene clock and pause with it. The ground is not a child.
export const glassPatches=[
 [.22,.43,.16,.10,10,1.2,.43], [.46,.50,.13,.17,13,4.1,.40],
 [.75,.42,.16,.11,11,2.8,.44], [.32,.59,.12,.13,10,1.2+Math.PI,.38],
 [.57,.59,.15,.13,13,4.1+Math.PI,.40], [.80,.57,.12,.14,11,2.8+Math.PI,.37],
];
export function patchState(p,time){
 const phase=time*Math.PI*2/p[4]+p[5];
 return {alpha:.035+p[6]*Math.pow((1+Math.sin(phase))/2,1.5),
  x:Math.sin(phase*.71)*.018,y:Math.cos(phase*.83)*.014};
}
export function createGlassSurface(canvas,url,wake){
 const ctx=canvas.getContext('2d'),image=new Image();
 let width=0,height=0,tiles=[],disposed=false,lastTime=-1,lastRevision=-1;
 function resize(w,h){
  if(w===width&&h===height&&tiles.length)return;
  width=w;height=h;const scale=Math.min(.65,800/w);
  canvas.width=Math.max(1,Math.round(w*scale));canvas.height=Math.max(1,Math.round(h*scale*.75));
  tiles=[];lastTime=-1;if(!image.naturalWidth)return;
  const cover=Math.max(w/image.width,h/image.height),dw=image.width*cover,dh=image.height*cover;
  for(const p of glassPatches){
   const tw=Math.ceil(w*p[2]*2*scale),th=Math.ceil(h*p[3]*2*scale),tile=document.createElement('canvas');
   tile.width=tw;tile.height=th;const g=tile.getContext('2d');
   const left=w*(p[0]-p[2]),top=h*(p[1]-p[3]);
   g.filter='blur(2px) saturate(.96)';
   g.drawImage(image,((w-dw)/2-left)*scale,((h-dh)/2-top)*scale,dw*scale,dh*scale);
   g.filter='none';g.globalCompositeOperation='destination-in';
   // Asymmetric multi-lobed feather, baked once per viewport size.
   const mask=document.createElement('canvas');mask.width=tw;mask.height=th;const m=mask.getContext('2d');
   for(const [x,y,rx,ry] of [[.45,.56,.49,.43],[.70,.31,.29,.31]]){
    m.save();m.translate(tw*x,th*y);m.scale(tw*rx,th*ry);
    const gradient=m.createRadialGradient(0,0,.18,0,0,1);gradient.addColorStop(0,'#fff');gradient.addColorStop(.55,'#fffd');gradient.addColorStop(1,'#fff0');
    m.fillStyle=gradient;m.fillRect(-1,-1,2,2);m.restore();
   }
   g.drawImage(mask,0,0);tiles.push({tile,left:left*scale,top:top*scale});
  }
 }
 image.onload=()=>{if(!disposed){resize(width,height);wake();}};image.src=url;
 return {
  resize,
  render(time,reduced=false,mask=null,revision=0){
   time=reduced?0:time;if(time===lastTime&&revision===lastRevision)return;lastTime=time;lastRevision=revision;
   ctx.clearRect(0,0,canvas.width,canvas.height);
   tiles.forEach(({tile,left,top},i)=>{const s=patchState(glassPatches[i],time);ctx.globalAlpha=s.alpha;ctx.drawImage(tile,left+s.x*canvas.width,top+s.y*canvas.height);});
   ctx.globalAlpha=1;
   if(mask){ctx.globalCompositeOperation='destination-in';ctx.drawImage(mask,0,0,mask.width,mask.height*.75,0,0,canvas.width,canvas.height);ctx.globalCompositeOperation='source-over';}
  },
  dispose(){disposed=true;image.onload=null;tiles=[];},
 };
}
