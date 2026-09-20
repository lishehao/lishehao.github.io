// A single painted overlay avoids native CSS image-cursor reload/fallback gaps.
// It never participates in hit testing and is torn down with the scene.
// Grab feedback and semantic target icons are drawn locally so hover/press
// states do not depend on native cursor image loading or fallback behavior.
function makeHandIcon(closed=false) {
 const icon=document.createElement('canvas');icon.width=icon.height=40;
 const g=icon.getContext('2d');if(!g)return icon;
 g.save();g.translate(20,20);g.rotate(-.12);
 g.fillStyle='#f6cd62';g.strokeStyle='#5e442f';g.lineWidth=2.25;g.lineJoin='round';g.lineCap='round';
 g.shadowColor='rgba(54,33,63,.24)';g.shadowBlur=1.6;g.shadowOffsetY=1;
 g.beginPath();
 if(!closed){
  g.moveTo(-10,15);g.quadraticCurveTo(-14,5,-14,1);g.quadraticCurveTo(-14,-2,-11,-3);g.quadraticCurveTo(-9,-3,-7,0);
  g.lineTo(-7,-12);g.quadraticCurveTo(-7,-15,-4,-15);g.quadraticCurveTo(-1,-15,-1,-12);g.lineTo(-1,-3);
  g.lineTo(0,-17);g.quadraticCurveTo(0,-20,3,-20);g.quadraticCurveTo(6,-20,6,-17);g.lineTo(6,-3);
  g.lineTo(7,-14);g.quadraticCurveTo(7,-17,10,-17);g.quadraticCurveTo(13,-17,13,-14);g.lineTo(13,-3);
  g.lineTo(14,-9);g.quadraticCurveTo(14,-12,17,-11);g.quadraticCurveTo(20,-10,19,-6);g.lineTo(17,7);
  g.quadraticCurveTo(15,16,8,19);g.lineTo(-2,20);g.quadraticCurveTo(-8,20,-10,15);g.closePath();
  g.fill();g.stroke();
 }else{
  g.moveTo(-12,11);g.quadraticCurveTo(-15,5,-14,0);g.lineTo(-9,-7);g.quadraticCurveTo(-8,-11,-4,-12);
  g.lineTo(8,-12);g.quadraticCurveTo(14,-11,14,-6);g.lineTo(14,7);g.quadraticCurveTo(13,16,5,19);
  g.lineTo(-5,19);g.quadraticCurveTo(-10,18,-12,11);g.closePath();g.fill();g.stroke();
  g.beginPath();g.moveTo(-12,1);g.quadraticCurveTo(-8,0,-5,4);g.lineTo(-1,9);g.quadraticCurveTo(1,12,4,10);g.lineTo(11,4);g.stroke();
 }
 g.shadowColor='transparent';g.strokeStyle='rgba(255,247,190,.82)';g.lineWidth=1;g.beginPath();
 if(closed){g.moveTo(-8,-7);g.quadraticCurveTo(-3,-10,7,-9);}
 else{g.moveTo(-4,13);g.quadraticCurveTo(3,15,10,10);}
 g.stroke();g.restore();
 return icon;
}

function makePropIcon(index) {
 const icon=document.createElement('canvas');icon.width=icon.height=40;
 const g=icon.getContext('2d');if(!g)return icon;
 const fills=['#6da7dd','#79a9a0','#ef9d72','#d98b72','#e9c15d','#8296d1','#b58cd2','#72b5b0','#c9845b','#d7849d','#dfae68'];
 const fill=fills[(Math.max(1,index)-1)%fills.length];
 g.save();g.translate(20,20);g.rotate(-.08);g.fillStyle=fill;g.strokeStyle='#5e442f';g.lineWidth=1.9;g.lineJoin='round';g.lineCap='round';g.shadowColor='rgba(54,33,63,.24)';g.shadowBlur=1.5;g.shadowOffsetY=1;
 const stroke=()=>{g.fill();g.stroke();};
 switch(index){
  case 1: // plane
   g.beginPath();g.moveTo(-16,3);g.lineTo(15,-8);g.lineTo(3,5);g.lineTo(13,11);g.lineTo(1,9);g.lineTo(-5,16);g.lineTo(-4,7);g.closePath();stroke();break;
  case 2: // laptop
   g.fillRect(-12,-11,24,18);g.strokeRect(-12,-11,24,18);g.beginPath();g.moveTo(-16,10);g.lineTo(16,10);g.lineTo(12,14);g.lineTo(-12,14);g.closePath();stroke();break;
  case 3: // cake
   g.beginPath();g.moveTo(-13,-5);g.lineTo(13,-5);g.lineTo(10,12);g.lineTo(-10,12);g.closePath();stroke();g.beginPath();g.ellipse(0,-6,13,4,0,0,Math.PI*2);stroke();g.fillStyle='#fff4bd';g.beginPath();g.arc(6,-9,2,0,Math.PI*2);g.fill();break;
  case 4: // helmet
   g.beginPath();g.arc(0,2,14,Math.PI,0);g.lineTo(13,8);g.lineTo(-13,8);g.closePath();stroke();g.beginPath();g.moveTo(-8,2);g.lineTo(10,2);g.stroke();break;
  case 5: // shuttlecock
   g.beginPath();g.moveTo(-12,-10);g.lineTo(10,-1);g.lineTo(2,6);g.lineTo(-15,-2);g.closePath();stroke();g.beginPath();g.ellipse(5,11,4,3,0,0,Math.PI*2);stroke();break;
  case 6: // Fuji
   g.beginPath();g.moveTo(-16,11);g.lineTo(-2,-9);g.lineTo(4,0);g.lineTo(11,-6);g.lineTo(17,11);g.closePath();stroke();g.beginPath();g.moveTo(-6,-3);g.lineTo(-2,-9);g.lineTo(1,-4);g.moveTo(8,-2);g.lineTo(11,-6);g.lineTo(14,-1);g.stroke();break;
  case 7: // terminal
   g.beginPath();g.rect(-14,-12,28,23);stroke();g.beginPath();g.moveTo(-8,-3);g.lineTo(-3,1);g.lineTo(-8,5);g.moveTo(0,5);g.lineTo(8,5);g.stroke();break;
  case 8: // lake
   g.beginPath();g.moveTo(-15,-5);g.quadraticCurveTo(-9,-11,-3,-5);g.quadraticCurveTo(3,1,9,-5);g.quadraticCurveTo(13,-8,16,-5);g.lineTo(13,10);g.lineTo(-13,10);g.closePath();stroke();g.beginPath();g.moveTo(-12,3);g.quadraticCurveTo(-5,-1,1,3);g.quadraticCurveTo(7,7,13,3);g.stroke();break;
  case 9: // car
   g.beginPath();g.moveTo(-13,4);g.lineTo(-8,-7);g.lineTo(7,-7);g.lineTo(14,4);g.lineTo(14,10);g.lineTo(-13,10);g.closePath();stroke();g.fillStyle='#5e442f';g.beginPath();g.arc(-8,10,3,0,Math.PI*2);g.arc(9,10,3,0,Math.PI*2);g.fill();break;
  case 10: // racket
   g.beginPath();g.ellipse(-3,-5,10,13,-.2,0,Math.PI*2);stroke();g.beginPath();g.moveTo(4,5);g.lineTo(13,16);g.stroke();break;
  default: // hotpot
   g.beginPath();g.moveTo(-13,-3);g.lineTo(13,-3);g.lineTo(9,12);g.lineTo(-9,12);g.closePath();stroke();g.beginPath();g.arc(-5,-8,4,Math.PI,0);g.arc(5,-8,4,Math.PI,0);g.stroke();break;
 }
 g.shadowColor='transparent';g.fillStyle='#fff5bd';g.beginPath();g.arc(14,-13,1.7,0,Math.PI*2);g.fill();g.restore();
 return icon;
}

export function createSceneCursor(host, sheetUrl) {
 const overlay=document.createElement('canvas');
 overlay.width=overlay.height=40;overlay.className='scene-cursor';overlay.hidden=true;
 overlay.setAttribute('aria-hidden','true');document.body.appendChild(overlay);
 const ctx=overlay.getContext('2d'),icons=new Map(),sheet=new Image();
 let disposed=false,current=null,point=null,pressed=false,painted=null,lastTransform='',shown=null;
 function move(event){
  point={x:event.clientX,y:event.clientY};
  const transform=`translate3d(${point.x-20}px,${point.y-20}px,0) scale(${pressed?.9:1})`;
  if(transform!==lastTransform){overlay.style.transform=transform;lastTransform=transform;}
 }
 function iconFor(key){
  if(icons.has(key))return icons.get(key);
  const match=/^prop-(\d+)$/.exec(key||'');
  if(!match)return null;
  const icon=makePropIcon(Number(match[1]));icons.set(key,icon);return icon;
 }
 function paint(){
  if(disposed||!current||!point)return;
  const icon=iconFor(current);
  if(shown===current&&icon&&painted===current&&!overlay.hidden)return;
  if(!icon){overlay.hidden=true;delete host.dataset.customCursor;host.style.cursor=current==='grab'?'grab':current==='grabbing'?'grabbing':'crosshair';delete document.documentElement.dataset.pocketCursor;host.closest('.sky-play').dataset.cursorState=current;return;}
  if(painted!==current){ctx.clearRect(0,0,40,40);ctx.drawImage(icon,0,0);painted=current;}
  overlay.hidden=false;if(document.documentElement.dataset.pocketCursor!=='active')document.documentElement.dataset.pocketCursor='active';host.dataset.customCursor=current;host.style.cursor='none';host.closest('.sky-play').dataset.cursorState=current;shown=current;
 }
 function hide(){if(!current&&overlay.hidden)return;delete document.documentElement.dataset.pocketCursor;current=shown=null;overlay.hidden=true;delete host.dataset.customCursor;delete host.closest('.sky-play').dataset.cursorState;host.style.removeProperty('cursor');}
 sheet.onload=()=>{
  if(disposed)return;
  ['eraser','head','body','pocket','left','right'].forEach((key,i)=>{
   const tile=document.createElement('canvas');tile.width=tile.height=128;
   const g=tile.getContext('2d');g.drawImage(sheet,i%3*sheet.width/3,Math.floor(i/3)*sheet.height/2,sheet.width/3,sheet.height/2,0,0,128,128);
   const pixels=g.getImageData(0,0,128,128);let left=128,top=128,right=-1,bottom=-1;
   for(let k=0;k<pixels.data.length;k+=4){
    if(pixels.data[k+3]<220){pixels.data[k+3]=0;continue;}
    const x=k/4%128,y=Math.floor(k/4/128);left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);
   }
   g.putImageData(pixels,0,0);
   const w=right-left+1,h=bottom-top+1;if(w<=0||h<=0)return;
   const icon=document.createElement('canvas');icon.width=icon.height=40;
   const scale=36/Math.max(w,h);icon.getContext('2d').drawImage(tile,left,top,w,h,(40-w*scale)/2,(40-h*scale)/2,w*scale,h*scale);icons.set(key,icon);
  });
  icons.set('grab',makeHandIcon(false));
  icons.set('grabbing',makeHandIcon(true));
  const required=['eraser','head','body','pocket','left','right','grab','grabbing'];
  host.closest('.sky-play').dataset.cursors=required.every(key=>icons.has(key))?'ready':'failed';paint();
 };
 sheet.onerror=()=>{if(!disposed)host.closest('.sky-play').dataset.cursors='failed';};
 sheet.src=sheetUrl;
 return {
  move,
  show(key,event,dragging=false){current=key;pressed=dragging;move(event);paint();},
  hide,
  dispose(){disposed=true;sheet.onload=sheet.onerror=null;hide();overlay.remove();icons.clear();}
 };
}
