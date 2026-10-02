// Walking advances by travelled distance. Frame artwork stays opaque; only the
// world transform is interpolated at the display cadence.
export const WALK_STRIDE=1.25;
export function stepWalk(x,target,speed,dt,maxSpeed=1.25){
 const gap=target-x,sign=Math.sign(gap),acceleration=7;
 if(Math.abs(gap)<1e-6)return {x:target,speed:0,distance:0};
 const desired=sign*Math.min(maxSpeed,Math.sqrt(2*acceleration*Math.abs(gap)));
 const nextSpeed=speed+Math.max(-acceleration*dt,Math.min(acceleration*dt,desired-speed));
 const move=(speed+nextSpeed)*.5*dt;
 const next=Math.sign(move)===sign&&Math.abs(move)>=Math.abs(gap)?target:x+move;
 return {x:next,speed:next===target?0:nextSpeed,distance:Math.abs(next-x)};
}
export function walkFrame(distance,count=16){return Math.floor(distance/WALK_STRIDE*count)%count;}

// Use one scale for the entire atlas and register the head axis + boot baseline.
// Per-frame height normalization otherwise changes the size of the same head.
export function measureWalkFrame(data,width,height){
 let top=height,bottom=-1,left=width,right=-1,headLeft=width,headRight=-1;
 for(let p=0;p<width*height;p++){
  const k=p*4;if(data[k+3]<=12)continue;
  const x=p%width,y=Math.floor(p/width),r=data[k],g=data[k+1],b=data[k+2];
  top=Math.min(top,y);bottom=Math.max(bottom,y);left=Math.min(left,x);right=Math.max(right,x);
  if(y<height*.5&&g>r*.9&&g>b*1.25&&r<220){headLeft=Math.min(headLeft,x);headRight=Math.max(headRight,x);}
 }
 return {top,bottom,left,right,height:Math.max(1,bottom-top+1),pivot:headRight>=headLeft?(headLeft+headRight)/2:width/2};
}
export function walkRegistration(metrics){
 const heights=metrics.map(m=>m.height).sort((a,b)=>a-b);
 const scale=315/((heights[7]+heights[8])/2);
 return metrics.map(m=>({scale,x:192-(m.pivot+.5)*scale,y:327-(m.bottom+1)*scale}));
}

// UV mirroring leaves the x=0 foot axis invariant. Rotate the scaled local
// baseline before translating the mesh; rotating about its centre alone drifts.
export function footOffset(scaleY,angle,bottom,height){
 const y=(.5-(bottom+1)/height)*scaleY;
 return {x:-y*Math.sin(angle),y:y*Math.cos(angle)};
}
export function walkFacing(displacement,facing){return Math.abs(displacement)>1e-6?Math.sign(displacement):facing;}
