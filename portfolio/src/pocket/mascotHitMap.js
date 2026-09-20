// Per-frame semantic hit masks for the mascot.
//
// The scene renders a different CanvasTexture for idle, walk and pocket poses.
// A single rectangle or a single set of percentages cannot follow those poses
// without causing cursor flicker. We therefore derive a small indexed mask from
// the exact displayed frame and cache it by texture identity.

export const MASCOT_HIT = Object.freeze({
 NONE: 0,
 BODY: 1,
 HEAD: 2,
 POCKET: 3,
 LEFT: 4,
 RIGHT: 5,
});

const REGION_NAMES = Object.freeze({
 [MASCOT_HIT.HEAD]: 'head',
 [MASCOT_HIT.POCKET]: 'pocket',
 [MASCOT_HIT.LEFT]: 'left',
 [MASCOT_HIT.RIGHT]: 'right',
 [MASCOT_HIT.BODY]: 'body',
});

const cache = new WeakMap();
const ALPHA_THRESHOLD = 28;

const clamp01 = value => Math.max(0, Math.min(1, value));

function pixelIsOpaque(data, index) {
 return data[index + 3] >= ALPHA_THRESHOLD;
}

function isCoral(r, g, b, nx, ny) {
 // The pocket is coral/red. Restrict the test to the torso so the tongue and
 // small warm highlights cannot become a second pocket hit zone.
 return nx > .48 && nx < .94 && ny > .34 && ny < .82 &&
   r > 150 && r > g * 1.48 && g < 150 && b < 135;
}

function isBootGreen(r, g, b, ny) {
 // Boots are the dark olive-green lower components. The y gate keeps the
 // similarly green hood and tail out of the foot components. The lower gate
 // matters for walking frames where the tail sits beside the ankles.
 return ny > .74 && g > r * .9 && g > b * 1.18 && r < 180 && b < 145;
}

function isHeadInk(r, g, b, nx, ny) {
 if(ny > .5 || nx < .14 || nx > .88)return false;
 const hood = g > r * .84 && g > b * 1.12 && r < 205;
 const skin = r > g * 1.02 && g > b * 1.28 && r > 115;
 return hood || (skin && nx > .22 && nx < .82);
}

function splitFootComponent(members,width) {
 if(members.length<12)return null;
 let minX=width,maxX=-1;
 for(const index of members){const x=index%width;minX=Math.min(minX,x);maxX=Math.max(maxX,x);}
 // A single boot is usually a compact blob. Only split a component when it
 // is wide enough to plausibly contain both boots; this avoids turning a
 // hidden/occluded single boot into two fake hit zones.
 if(maxX-minX<70)return null;
 let left=minX+(maxX-minX)*.3,right=minX+(maxX-minX)*.7;
 for(let pass=0;pass<8;pass++){
  let leftSum=0,leftCount=0,rightSum=0,rightCount=0;
  for(const index of members){const x=index%width;if(Math.abs(x-left)<=Math.abs(x-right)){leftSum+=x;leftCount++;}else{rightSum+=x;rightCount++;}}
  if(!leftCount||!rightCount)return null;
  left=leftSum/leftCount;right=rightSum/rightCount;
 }
 if(Math.abs(right-left)<8)return null;
 const groups=[[],[]];
 for(const index of members){const x=index%width;groups[Math.abs(x-left)<=Math.abs(x-right)?0:1].push(index);}
 if(groups.some(group=>group.length<4))return null;
 return [{members:groups[0],cx:left},{members:groups[1],cx:right}];
}

function makeFrameData(texture) {
 const canvas = texture?.image;
 if(!canvas?.width || !canvas?.height || typeof canvas.getContext !== 'function')return null;
 const context = canvas.getContext('2d');
 if(!context?.getImageData)return null;
 const {width,height}=canvas;
 const data=context.getImageData(0,0,width,height).data;
 const pixels=width*height;
 let minX=width,minY=height,maxX=-1,maxY=-1;
 for(let i=0;i<pixels;i++){
  const k=i*4;
  if(!pixelIsOpaque(data,k))continue;
  const x=i%width,y=Math.floor(i/width);
  minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);
 }
 if(maxX<0)return {width,height,alpha:new Uint8Array(pixels),mask:new Uint8Array(pixels),bounds:null};

 const boxWidth=Math.max(1,maxX-minX+1),boxHeight=Math.max(1,maxY-minY+1);
 const alpha=new Uint8Array(pixels),mask=new Uint8Array(pixels),pocket=new Uint8Array(pixels),boots=new Uint8Array(pixels);
 for(let i=0;i<pixels;i++){
  const k=i*4;
  if(!pixelIsOpaque(data,k))continue;
  alpha[i]=data[k+3];
  const x=i%width,y=Math.floor(i/width);
  const nx=(x-minX)/boxWidth,ny=(y-minY)/boxHeight;
  const [r,g,b]=data.subarray(k,k+3);
  mask[i]=MASCOT_HIT.BODY;
  if(isHeadInk(r,g,b,nx,ny))mask[i]=MASCOT_HIT.HEAD;
  if(isCoral(r,g,b,nx,ny)){pocket[i]=1;mask[i]=MASCOT_HIT.POCKET;}
  if(isBootGreen(r,g,b,ny))boots[i]=1;
 }

 // Ink is only a seed, not a semantic boundary: white eyes, dark pupils and
 // highlights enclosed by hood/skin must not become little "body" islands.
 // Fill enclosed spans of the per-frame head seeds, intersected with alpha.
 for(let pass=0;pass<2;pass++){
  for(let y=minY;y<=maxY;y++){
   let left=width,right=-1;
   for(let x=minX;x<=maxX;x++)if(mask[y*width+x]===MASCOT_HIT.HEAD){left=Math.min(left,x);right=x;}
   for(let x=left;x<=right;x++){const i=y*width+x;if(alpha[i]&&mask[i]===MASCOT_HIT.BODY)mask[i]=MASCOT_HIT.HEAD;}
  }
  for(let x=minX;x<=maxX;x++){
   let top=height,bottom=-1;
   for(let y=minY;y<=maxY;y++)if(mask[y*width+x]===MASCOT_HIT.HEAD){top=Math.min(top,y);bottom=y;}
   for(let y=top;y<=bottom;y++){const i=y*width+x;if(alpha[i]&&mask[i]===MASCOT_HIT.BODY)mask[i]=MASCOT_HIT.HEAD;}
  }
 }

 // Label the two actual boot components instead of guessing from a global
 // x/y split. Eight-neighbour traversal follows each frame's pose, including
 // wide steps and crossed ankles.
 const visited=new Uint8Array(pixels),components=[];
 for(let start=0;start<pixels;start++){
  if(!boots[start]||visited[start])continue;
  const queue=[start];visited[start]=1;const members=[];let sumX=0,sumY=0;
  let componentMinX=width,componentMinY=height,componentMaxX=-1,componentMaxY=-1;
  for(let head=0;head<queue.length;head++){
   const index=queue[head],x=index%width,y=Math.floor(index/width);
   members.push(index);sumX+=x;sumY+=y;
   componentMinX=Math.min(componentMinX,x);componentMaxX=Math.max(componentMaxX,x);
   componentMinY=Math.min(componentMinY,y);componentMaxY=Math.max(componentMaxY,y);
   for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
    if(!dx&&!dy)continue;
    const xx=x+dx,yy=y+dy;
    if(xx<0||xx>=width||yy<0||yy>=height)continue;
    const next=yy*width+xx;
    if(boots[next]&&!visited[next]){visited[next]=1;queue.push(next);}
   }
  }
  if(members.length>=4)components.push({
   members,
   cx:sumX/members.length,
   cy:sumY/members.length,
   minX:componentMinX,
   minY:componentMinY,
   maxX:componentMaxX,
   maxY:componentMaxY,
  });
 }
 components.sort((a,b)=>b.members.length-a.members.length);
 // Tiny lower green islands are usually tail/ornament pixels in walk frames,
 // not feet. Filter them before deciding whether boots are separate or merged.
 const footCandidates=components.filter(component=>
  component.members.length>=200 && component.maxY-component.minY>=10
 );
 let feet=footCandidates.slice(0,2).sort((a,b)=>a.cx-b.cx);
 // In crossed/closed walking poses the two boots can touch and become one
 // connected component. Split that component along its two x-clusters before
 // assigning left/right, rather than painting the whole merged blob as one foot.
 if(feet.length===1){
  const split=splitFootComponent(feet[0].members,width);
  if(split)feet=split.sort((a,b)=>a.cx-b.cx);
 }
 if(feet.length===2){
  feet[0].members.forEach(index=>{mask[index]=MASCOT_HIT.LEFT;});
  feet[1].members.forEach(index=>{mask[index]=MASCOT_HIT.RIGHT;});
 }else if(feet.length===1){
  // A passing frame can hide one boot behind the other. Keep the visible boot
  // actionable, but do not invent a second zone in transparent space.
  const region=feet[0].cx<(minX+maxX)/2?MASCOT_HIT.LEFT:MASCOT_HIT.RIGHT;
  feet[0].members.forEach(index=>{mask[index]=region;});
 }
 return {width,height,alpha,mask,bounds:{minX,minY,maxX,maxY}};
}

export function getMascotHitMask(texture) {
 if(!texture)return null;
 let frame=cache.get(texture);
 if(!frame){frame=makeFrameData(texture);if(frame)cache.set(texture,frame);}
 return frame;
}

export function pickMascot(texture,uv,facing=1,preferred=null){
 const frame=getMascotHitMask(texture);
 if(!frame?.bounds||!uv||!Number.isFinite(uv.x)||!Number.isFinite(uv.y))return null;
 // The shader mirrors the texture in-place. Sample the same canonical pixel so
 // the mask stays attached to the character when it turns around.
 const u=clamp01(facing<0?1-uv.x:uv.x),v=clamp01(1-uv.y);
 const x=Math.min(frame.width-1,Math.max(0,Math.floor(u*frame.width)));
 const y=Math.min(frame.height-1,Math.max(0,Math.floor(v*frame.height)));
 const index=y*frame.width+x;
 if(frame.alpha[index]<ALPHA_THRESHOLD)return null;
 // Small spatial hysteresis around an actual semantic edge. It never extends
 // the silhouette, never bridges a transparent gap, and does not lock a whole
 // character to one action. Deliberate movement into another region switches.
 const preferredId=Object.entries(REGION_NAMES).find(([,name])=>name===preferred)?.[0];
 const radius=Math.max(1,Math.round(Math.min(frame.width,frame.height)*.009));
 if(preferredId&&frame.mask[index]!==Number(preferredId)){
  for(let dy=-radius;dy<=radius;dy++)for(let dx=-radius;dx<=radius;dx++){
   if(dx*dx+dy*dy>radius*radius)continue;
   const xx=x+dx,yy=y+dy;if(xx<0||yy<0||xx>=frame.width||yy>=frame.height)continue;
   if(frame.mask[yy*frame.width+xx]!==Number(preferredId))continue;
   let connected=true;const steps=Math.max(Math.abs(dx),Math.abs(dy));
   for(let step=1;step<=steps;step++)if(frame.alpha[(y+Math.round(dy*step/steps))*frame.width+x+Math.round(dx*step/steps)]<ALPHA_THRESHOLD){connected=false;break;}
   if(connected)return preferred;
  }
 }
 return REGION_NAMES[frame.mask[index]]||'body';
}
