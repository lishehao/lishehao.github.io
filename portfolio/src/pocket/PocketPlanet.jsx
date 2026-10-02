import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './pocketPlanet.css';
import {pocketAssets} from './assets.js';
import {createSceneCursor} from './sceneCursor.js';
import {pickMascot,getMascotHitMask} from './mascotHitMap.js';
import {normalizedPoint} from './sceneCoordinates.js';
import {throws,stepProps} from './propPhysics.js';
import {createSceneClock} from './sceneClock.js';
import {createGlassSurface} from './glassSurface.js';
import {createEraseSurface} from './eraseSurface.js';
import {pickVisible} from './scenePicking.js';
import {disposeScene} from './disposeScene.js';
import {createSceneProjection} from './sceneProjection.js';
import {stepWalk,walkFrame,measureWalkFrame,walkRegistration,footOffset,walkFacing,WALK_STRIDE} from './walkMotion.js';

const items=[
  {name:['Little snake','小蛇'],rect:[18,50,400,439],x:0,y:0,size:2.3,z:0.5},
  {name:['A350','A350'],rect:[396,137,507,273],x:-3.4,y:1.6,size:2.5,z:-0.5},
  {name:['Coding','写代码'],rect:[880,164,366,322],x:3.1,y:1.1,size:2,z:0},
  {name:['Basque cheesecake','巴斯克蛋糕'],rect:[45,548,357,299],x:-2.7,y:-1.6,size:1.45,z:0.4},
  {name:['Formula 1','F1 赛车'],rect:[468,523,368,332],x:3,y:-1.7,size:1.5,z:0.2},
  {name:['Badminton','羽毛球'],rect:[896,537,309,307],x:-4.1,y:-0.25,size:1.15,z:1},
  {name:['Mount Fuji','富士山'],rect:[15,944,457,232],x:-1.7,y:2.35,size:1.3,z:-1},
  {name:['Terminal','终端'],rect:[514,935,265,249],x:3.95,y:2.35,size:0.7,z:-0.8},
  {name:['Lake days','湖边时光'],rect:[835,911,407,306],x:1.5,y:-2.2,size:1.2,z:-0.6},
];
const clamp=x=>Math.max(0,Math.min(1,x));
const ease=(a,b,x)=>{let t=clamp((x-a)/(b-a));return t*t*(3-2*t);};
const noiseGLSL=`
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float field(vec2 p){return .12+(1.-p.y)*.46+sin(p.x*12.+p.y*8.)*.055+hash(floor(p*700.))*.18;}
`;
const vertex=`
varying vec2 vUv; uniform float time; uniform float snake;
void main(){vUv=uv;vec3 p=position;
p.x+=sin(uv.y*7.+time*1.8)*.055*snake*(1.-uv.y);
gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}
`;
const fragment=`
uniform float edgeDepth;uniform sampler2D map;uniform vec4 crop;uniform float dissolve;uniform float outfit;uniform float facing;
varying vec2 vUv;
${noiseGLSL}
void main(){
vec2 sampleUV=vec2(facing<0.?1.-vUv.x:vUv.x,vUv.y);
vec4 c=texture2D(map,crop.xy+sampleUV*crop.zw);
if(outfit>0.5 && vUv.y>.19 && vUv.y<.54 && c.r>.35 && c.g>.22 && c.b<c.g*.55 && c.r>c.g*1.05){
 vec3 cloth=outfit<1.5?vec3(.23,.52,.78):vec3(.85,.36,.28);
 if(outfit>2.5)cloth=vec3(.48,.62,.43);
 if(outfit>3.5)cloth=vec3(.62,.47,.72);
 if(outfit>4.5)cloth=mix(vec3(.92,.85,.65),vec3(.28,.43,.59),step(.65,fract(vUv.y*65.)));
 if(outfit>5.5)cloth=mix(vec3(.88,.53,.55),vec3(.98,.9,.72),1.-smoothstep(.08,.15,length(fract(vUv*vec2(24.,32.))-.5)));
 c.rgb=cloth*(.55+c.g*.65);
}
float edge=field(vUv)-dissolve;
if(c.a<.05||edge<-.025)discard;
c.a*=smoothstep(-.025,.055,edge);
c.rgb=mix(c.rgb,c.rgb*.78+vec3(.08,.065,.045),dissolve);
c.rgb*=1.-edgeDepth*.34;gl_FragColor=c;
}
`;

export function PocketPlanet({lang,onWork}){
 const root=useRef(null),host=useRef(null),api=useRef(null),wipe=useRef(null),backlight=useRef(null);
 const [failed,setFailed]=useState(false),[ready,setReady]=useState(false),[erasing,setErasing]=useState(false);
 const erasingRef=useRef(false);
 const langRef=useRef(lang);langRef.current=lang;
 // These transient snapshots have no rendered UI; refs avoid hover commits.
 const uiRef=useRef({hint:'',inventory:false});
 const setInventory=value=>{uiRef.current.inventory=value;};
 useEffect(()=>{
  let disposed=false,renderer;
  let hoverEvent=null;
  let hoverBinding=null;
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  let reduced=media.matches,progress=0,active=true,visible=true;
  const publishHint=value=>{uiRef.current.hint=value;};
  const publishInventory=setInventory;
  const el=host.current;
  let viewRect=el.getBoundingClientRect();
  const debug=import.meta.env.DEV&&new URLSearchParams(location.search).has('sceneDebug');
  const cursor=createSceneCursor(el,pocketAssets.cursors);
  try {renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});}
  catch {cursor.dispose();setFailed(true);return;}
  // Keep the transparent scene sharp enough on Retina without making every
  // full-screen glass composite pay for a 2x/3x backing store.
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));
  renderer.setClearColor(0x000000,0);
  el.appendChild(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(40,1,.1,100);
  scene.add(new THREE.HemisphereLight(0xfff8e7,0x9b8950,2.3));
  const sun=new THREE.DirectionalLight(0xfff2d2,2);sun.position.set(-4,7,5);scene.add(sun);
  const globe=new THREE.Mesh(new THREE.SphereGeometry(7,96,64),new THREE.MeshStandardMaterial({color:0xeadca0,roughness:.95,transparent:true}));
  globe.position.set(0,-8.6,-1.6);globe.visible=false;scene.add(globe);
  const planeZ=.7;
  const {worldPoint,ground,bounds:propBounds}=createSceneProjection(camera,planeZ,()=>viewRect,()=>viewRect.height<500?.65:.75);
  const propFloor=o=>ground(o.home.x)+o.radius*.72-(o.lane||0);

  camera.position.z=10;
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(9,9);
  const activeProps=[];
  const physics={floor:propFloor,bounds:()=>frameBounds,held:null};
  let frameBounds;
  const objects=[],target=new THREE.Vector2(),orbit=new THREE.Vector2();
  let audioContext,muted=true,lastSound=0;
  function play(kind='tap'){
   if(muted||document.hidden)return;
   try{audioContext??=new AudioContext();audioContext.resume().catch(()=>{});const t=audioContext.currentTime;if(t-lastSound<.08)return;lastSound=t;
    const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type=kind==='drop'?'sine':'triangle';osc.frequency.setValueAtTime(kind==='drop'?210:kind==='pocket'?720:450,t);osc.frequency.exponentialRampToValueAtTime(kind==='drop'?70:kind==='pocket'?1100:620,t+.12);gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(.035,t+.01);gain.gain.exponentialRampToValueAtTime(.0001,t+.18);osc.connect(gain);gain.connect(audioContext.destination);osc.start(t);osc.stop(t+.2);
   }catch{/* Audio is optional; visual interaction remains available. */}
  }
  const eraser=createEraseSurface(wipe.current,root.current.querySelector('.sky-play__editorial'),root.current,pocketAssets.sky,wake);
  const glass=createGlassSurface(backlight.current,pocketAssets.hiddenSky,wake);
  const paintSky=()=>eraser.reset(),erase=e=>eraser.erase(e);
  let drag=null,fastUntil=0,clock=0,texture,pixels,owners;
  let physicsRemainder=0,scrollDirty=true;
  const scheduler=createSceneClock({render,fast:()=>Boolean(drag)||performance.now()<fastUntil||
   Math.abs(walkTo-snakeX)>.015||objects.some(o=>o.pull||Math.abs(o.fall?.vx||0)>.02||Math.abs(o.fall?.vy||0)>.02||Math.abs(o.fall?.spin||0)>.02),
   running:()=>!disposed&&active&&visible});
  let snakeDrag={x:0,y:0,vx:0,vy:0,angle:0,angular:0};
  let snakeX=0,walkTo=0,mood=0,outfit=0,face=1,pocketAt=-10,dropIndex=0,poseAction='idle',pocketStyle=throws[0];
  const walks=[{name:'stroll',speed:1.25,sway:.012},{name:'bouncy',speed:1.4,sway:.035},{name:'tiptoe',speed:.95,sway:.025}];
  let walkStyle=0,walkDistance=0,walkSpeed=0,walkDelta=0,awayFromHome=false,greetingUntil=-1,winkUntil=-1;
  const snakeFrames=[],walkFrames=[];
  const actionNames={left:['Go left','向左走'],right:['Go right','向右走'],head:['Change mood','换个表情'],body:['Change outfit','换件衣服'],pocket:['A little surprise','掏出口袋里的惊喜']};
  function act(action){
   if(progress>.1||!objects.length)return;
   if(action==='pocket'&&poseAction==='pocket'&&clock-pocketAt<pocketStyle.duration&&!reduced)return;
   const limit=camera.aspect<.85?1.05:3.1;
   if(action==='left'||action==='right'){walkStyle=(walkStyle+1+Math.floor(Math.random()*2))%walks.length;root.current.dataset.walkStyle=walks[walkStyle].name;walkTo=THREE.MathUtils.clamp(walkTo+(action==='left'?-.85:.85),-limit,limit);if(reduced||Math.abs(walkSpeed)<.001)face=action==='left'?-1:1;if(reduced){snakeX=walkTo;walkSpeed=0;}}
   if(action==='head'){greetingUntil=winkUntil=-1;mood=(mood+1)%4;poseAction='mood';pocketAt=clock;}
   if(action==='body'){greetingUntil=winkUntil=-1;outfit=(outfit+1)%7;poseAction='outfit';pocketAt=clock;if(outfit===0&&!reduced){winkUntil=clock+.85;root.current.dataset.egg='wardrobe-wink';}}
   if(action==='pocket'){
    const available=objects.slice(1).filter(o=>!o.released);
    if(!available.length){publishHint(langRef.current==='zh'?'口袋空啦，试试把地上的小物件抛起来。':'All out! Pick up a keepsake and give it a toss.');return;}
    greetingUntil=winkUntil=-1;pocketAt=clock;poseAction='pocket';const alternatives=throws.filter(style=>style!==pocketStyle);pocketStyle=alternatives[Math.floor(Math.random()*alternatives.length)]||throws[0];
    const o=available[0],side=dropIndex%2?1:-1;dropIndex++;
    o.released=true;o.home.set(snakeX+side*.2,ground(snakeX)+1,planeZ);
    o.lane=(dropIndex%3)*.11;o.angle=0;o.fall=null;
    o.pull={start:clock,side,style:pocketStyle};o.mesh.scale.setScalar(o.baseScale*.08);o.offset.set(0,0);o.velocity.set(0,0);
    root.current.dataset.throwStyle=pocketStyle.name;
    if(reduced){const [l,r]=propBounds(o);o.pull=null;o.home.x=l+(r-l)*((dropIndex*.618)%1);o.home.y=propFloor(o);o.fall={vx:0,vy:0,spin:0};}

   }
   root.current.dataset.mood=String(mood);root.current.dataset.outfit=String(outfit);root.current.dataset.drops=String(dropIndex);
   play(action==='pocket'?'pocket':'tap');publishHint(actionNames[action]?.[langRef.current==='zh'?1:0]||'');fastUntil=performance.now()+1200;wake();
  }
  const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=64;
  const sg=shadowCanvas.getContext('2d'),gradient=sg.createRadialGradient(32,32,0,32,32,32);
  gradient.addColorStop(0,'#342336');gradient.addColorStop(1,'#34233600');sg.fillStyle=gradient;sg.fillRect(0,0,64,64);
  const shadowTexture=new THREE.CanvasTexture(shadowCanvas);
  function ensureVolume(o){
   if(o.shadow)return;
   o.edges=[];
   for(let j=1;j<=4;j++){
    const material=o.mesh.material.clone();material.uniforms=o.mesh.material.uniforms;
    material.uniforms={...material.uniforms,edgeDepth:{value:1}};
    const layer=new THREE.Mesh(o.mesh.geometry,material);layer.position.set(.006*j,-.004*j,-.015*j);layer.renderOrder=-j;
    o.mesh.add(layer);o.edges.push(layer);
   }
   o.shadow=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({map:shadowTexture,transparent:true,depthWrite:false,opacity:.25}));scene.add(o.shadow);
  }
  const screen=new THREE.Vector2(),grabOffset=new THREE.Vector3();
  function syncPixelRatio(){
   const dpr=Math.min(devicePixelRatio,1.25);
   if(renderer.getPixelRatio()===dpr)return;
   renderer.setPixelRatio(dpr);
   if(screen.x&&screen.y)eraser.resize(screen.x,screen.y);
  }
  const resize=()=>{
   const r=viewRect=el.getBoundingClientRect();if(!r.width||!r.height)return;
   const changed=screen.x!==r.width||screen.y!==r.height;screen.set(r.width,r.height);
   const dpr=Math.min(devicePixelRatio,1.25);
   if(renderer.getPixelRatio()!==dpr)renderer.setPixelRatio(dpr);
   if(changed)renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();
   eraser.resize(r.width,r.height);glass.resize(r.width,r.height);
   const narrow=camera.aspect<.85;
   camera.position.z=narrow?13:10;
   objects.forEach((o,i)=>{
    const d=o.definition||items[i];
    if(!o.released)o.home.set(narrow?d.x*.34:d.x,narrow?d.y*1.25:d.y,d.z);
    const s=i===0?(narrow?2.8:3.4):d.size*(narrow?.3:.43);
    o.baseScale=s;o.radius=s*Math.min(1,d.rect[3]/d.rect[2])*.4;o.mesh.scale.set(s,s*d.rect[3]/d.rect[2],1);
   });
   updateScroll();wake();
  };
  const updateScroll=()=>{scrollDirty=true;wake();};
  function applyScroll(){
   scrollDirty=false;
   const r=root.current.getBoundingClientRect();
   progress=reduced?0:clamp(-r.top/Math.max(1,root.current.offsetHeight-innerHeight));
   const fade=ease(.18,.8,progress);
   root.current.style.setProperty('--sky-fade',String(fade));
   root.current.style.setProperty('--sky-blur',`${ease(.15,.75,progress)*7}px`);
   root.current.style.setProperty('--type-exit',ease(.08,.5,progress));
   root.current.style.setProperty('--work-show',String(ease(.62,.94,progress)));
   root.current.style.setProperty('--ground-rise',`${ease(.04,.85,progress)*110}svh`);
   root.current.style.setProperty('--ground-fade',String(ease(.5,.86,progress)));
   root.current.style.setProperty('--control-fade',String(ease(.04,.28,progress)));
   for(const panel of root.current.querySelectorAll('.sky-play__actions,.sky-play__controls'))panel.inert=progress>.28;
   root.current.dataset.progress=progress.toFixed(3);
   el.inert=progress>.8;
   el.style.pointerEvents=progress>.8?'none':'auto';
   if(progress>.1){cursor.hide();publishHint('');publishInventory(false);}
   if(progress>.1&&drag){release();}
  }
  function wake(){scheduler.wake();}
  function render(now,dt){
   if(disposed)return false;
   viewRect=el.getBoundingClientRect();
   syncPixelRatio();
   if(scrollDirty)applyScroll();
   if(!reduced)clock+=dt;
   eraser.flush();glass.render(clock,reduced,eraser.mask,eraser.revision);
   orbit.lerp(target,1-Math.exp(-dt*5));
   const radius=camera.aspect<.85?13:10;
   const yaw=reduced?0:orbit.x*.16*(1-ease(.1,.65,progress));
   const pitch=reduced?0:orbit.y*.09*(1-ease(.1,.65,progress));
   camera.position.set(Math.sin(yaw)*radius,Math.sin(pitch)*radius,Math.cos(yaw)*Math.cos(pitch)*radius);
   camera.lookAt(0,0,0);camera.updateMatrixWorld();
   const gather=ease(.04,.85,progress);
   const out=ease(.12,.63,progress);
   globe.material.opacity=1-ease(.22,.86,progress);
   const holding=drag?.object===objects[0];
   const walking=!holding&&!reduced&&(Math.abs(walkTo-snakeX)>1e-6||Math.abs(walkSpeed)>.001);
   const walkStep=holding||reduced?{x:snakeX,speed:0,distance:0}:stepWalk(snakeX,walkTo,walkSpeed,dt,walks[walkStyle].speed);
   walkDelta=walkStep.x-snakeX;snakeX=walkStep.x;walkSpeed=walkStep.speed;walkDistance+=walkStep.distance;
   if(walking)face=walkFacing(walkDelta,face);
   if(Math.abs(snakeX)>.6)awayFromHome=true;
   if(awayFromHome&&Math.abs(snakeX)<.02&&Math.abs(walkTo)<.02&&!walking&&!holding&&poseAction!=='pocket'&&!reduced){awayFromHome=false;greetingUntil=clock+1.1;root.current.dataset.egg='home-greeting';}
   const kick=reduced?0:Math.max(0,1-(clock-pocketAt)/.65);
   activeProps.length=0;
   for(let i=1;i<objects.length;i++)if(objects[i].released)activeProps.push(objects[i]);
   if(progress<.1&&!reduced){
    // Camera and viewport stay fixed across every physics substep in this frame.
    // Bounds are independent of the prop; project them once, preserving 120Hz physics.
    frameBounds=activeProps.length?propBounds():null;physics.held=drag?.object;
    physicsRemainder+=dt;
    while(physicsRemainder+1e-12>=1/120){stepProps(activeProps,1/120,physics);physicsRemainder-=1/120;}
   }else physicsRemainder=0;
   objects.forEach((o,i)=>{
    o.mesh.visible=i===0?snakeFrames.length===12:Boolean(o.released);
    if(i>0&&!o.released){o.points.visible=false;return;}
    const floating=reduced?0:Math.sin(clock*.5+i)*.075;
    let pullScale=1;
    if(o.pull){
     const {style,side}=o.pull,t=(clock-o.pull.start)/style.duration;
     pullScale=.08+.92*ease(.1,.82,t);
     const tease=style.name==='double-take'?Math.sin(t*Math.PI*3)*.12:0;
     o.home.set(snakeX+side*(.16+ease(.18,1,t)*.5),ground(snakeX)+1+ease(.1,.85,t)*style.lift+tease,planeZ);
     o.angle=side*Math.sin(t*Math.PI)*.35;
     if(t>=1){o.fall={vx:side*style.speed,vy:style.up,spin:side*style.spin};o.pull=null;}
    }
    if(i===0&&drag?.object!==o&&!o.held){
     o.velocity.addScaledVector(o.offset,-90*dt).multiplyScalar(Math.exp(-12*dt));
     o.offset.addScaledVector(o.velocity,dt);
    }
    if(i===0){
     if(drag?.object===o){
      const limit=camera.aspect<.85?1.05:3.1;
      snakeX=THREE.MathUtils.clamp(snakeDrag.x,-limit,limit);walkTo=snakeX;walkSpeed=0;
      o.home.x=snakeDrag.x;o.home.y=snakeDrag.y;o.home.z=.5;
      // Pointer owns position while held. Physics must never integrate this state.
     }else{o.home.x=snakeX;o.home.y=ground(snakeX)+o.baseScale*.9*.48;o.home.z=.5;snakeDrag.y=o.home.y;snakeDrag.angle=THREE.MathUtils.damp(snakeDrag.angle,0,8,dt);}
    }
    const roam=0;
    const gait=walks[walkStyle],phase=walkDistance/WALK_STRIDE*Math.PI*2;
    const swim=i===0&&!reduced&&!holding?(walking?0:Math.sin(clock*2)*.012+Math.sin(kick*Math.PI)*.15):0;
    const viewHeight=2*Math.tan(THREE.MathUtils.degToRad(20))*(radius-o.home.z);
    o.mesh.position.set(o.home.x+o.offset.x+roam,o.home.y+o.offset.y+swim+gather*viewHeight*1.1,o.home.z);
    o.mesh.rotation.z=i===0?(drag?.object===o?snakeDrag.angle:walking?0:-snakeX*.065+Math.sin(clock*2)*.012): (o.angle||0);
    if(i===0){
     // The source walking artwork faces right; the shader mirrors its UVs
     // around the registered central axis for leftward movement.
     o.mesh.rotation.y=0;
     if(poseAction==='pocket'){const t=(clock-pocketAt)/pocketStyle.duration;o.mesh.rotation.z+=Math.sin(Math.min(1,t)*Math.PI)*(pocketStyle.name==='sideways'?.12:pocketStyle.name==='overhead'?-.09:.05);}
     o.mesh.material.uniforms.facing.value=face;
     o.mesh.material.uniforms.outfit.value=outfit;
     if(snakeFrames.length===12){
      const frameIndex=reduced?mood:poseAction==='pocket'&&clock-pocketAt<pocketStyle.duration+.25?8+Math.min(3,Math.floor((clock-pocketAt)/pocketStyle.duration*4)):walking?4+walkFrame(walkDistance,4):!reduced&&clock<greetingUntil?1:!reduced&&clock<winkUntil?3:mood;
      o.mesh.material.uniforms.map.value=holding?drag.pose:walking&&walkFrames.length===16&&!reduced&&poseAction!=='pocket'?walkFrames[walkFrame(walkDistance)]:snakeFrames[frameIndex];
      if(walking)o.mesh.rotation.z+=Math.sin(phase)*gait.sway*.3;
      if(poseAction==='pocket'&&clock-pocketAt>pocketStyle.duration+.25)poseAction='idle';
     }
    }
    // Scale is phase-locked to the same route: a near and a far side of a loop.
    const breathing=i===0&&!reduced&&!holding?1+Math.sin(kick*Math.PI*2)*.035:1;
    const s=o.baseScale*pullScale*breathing*(drag?.object===o?1.035:1);
    o.mesh.scale.x=THREE.MathUtils.damp(o.mesh.scale.x,s,9,dt);
    o.mesh.scale.y=o.mesh.scale.x*(i===0?.9:o.rect[3]/o.rect[2]);
    if(i===0&&!holding){
     const map=o.mesh.material.uniforms.map.value;
     const bounds=getMascotHitMask(map)?.bounds;
     if(bounds){
      const anchor=footOffset(o.mesh.scale.y,o.mesh.rotation.z,bounds.maxY,map.image.height);
      o.mesh.position.y=ground(snakeX)+o.offset.y+swim+gather*viewHeight*1.1-anchor.y;
      o.mesh.position.x=snakeX+o.offset.x-anchor.x;
     }
    }
    if(drag?.object===o&&drag.localPoint){
     // Keep the grabbed painted pixel under the pointer even as the held sprite
     // scales or tilts. Its current local transform owns the anchor.
     grabOffset.copy(drag.localPoint).multiply(o.mesh.scale).applyEuler(o.mesh.rotation);
     const p=worldPoint(drag.event,drag.z).sub(grabOffset);
     if(i===0){snakeDrag.x=p.x;snakeDrag.y=p.y;}
     else{const [l,r]=propBounds(o);p.x=THREE.MathUtils.clamp(p.x,l+o.radius,r-o.radius);p.y=Math.max(propFloor(o),Math.min(3,p.y));}
     o.mesh.position.copy(p);o.home.copy(p);
    }
    if(i>0){
     o.mesh.rotation.y=THREE.MathUtils.damp(o.mesh.rotation.y,drag?.object===o?-.18:(o.fall?.vx||0)*.035,8,dt);
     ensureVolume(o);
     const altitude=Math.max(0,o.home.y-propFloor(o));
     o.shadow.visible=o.mesh.visible&&progress<.8;
     o.shadow.position.set(o.home.x,ground(o.home.x)-(o.lane||0)+gather*viewHeight*1.1,planeZ-.12);
     o.shadow.scale.set(o.baseScale*(1+altitude*.25),o.baseScale*.17,1);
     o.shadow.material.opacity=(1-out)*.25/(1+altitude*1.8);
    }
    o.mesh.material.uniforms.time.value=clock;
    if(i===0&&debug){root.current.dataset.characterPosition=JSON.stringify([o.mesh.position.x,o.mesh.position.y]);root.current.dataset.characterFrame=o.mesh.material.uniforms.map.value?.uuid;}
    const d=out;
    o.mesh.material.uniforms.dissolve.value=d;
   o.points.material.uniforms.dissolve.value=d;
   o.points.position.copy(o.mesh.position);o.points.scale.copy(o.mesh.scale);o.points.rotation.copy(o.mesh.rotation);
   o.points.visible=i>0&&d>0&&d<1;
   });
   renderer.render(scene,camera);
   if(hoverEvent&&!drag&&progress<.1)move(hoverEvent,true);
   return progress<.8&&(!reduced||Boolean(drag)||orbit.distanceTo(target)>.002);
  }
  function getPointer(e){const r=viewRect=renderer.domElement.getBoundingClientRect(),p=normalizedPoint(e,r);pointer.set(p.x*2-1,1-p.y*2);}
  function alphaHit(o,uv){
    if(o===objects[0])return snakeAction(uv)!==null;
    if(o.hitPixels){const x=Math.min(o.hitWidth-1,Math.floor(uv.x*o.hitWidth)),y=Math.min(o.hitHeight-1,Math.floor((1-uv.y)*o.hitHeight));return o.hitPixels[(y*o.hitWidth+x)*4+3]>90;}
    const r=o.rect,x=Math.min(1253,Math.floor(r[0]+uv.x*r[2])),y=Math.min(1253,Math.floor(r[1]+(1-uv.y)*r[3]));
    return pixels?.[(y*1254+x)*4+3]>90&&owners?.[y*1254+x]===o.owner;
  }
  function hit(){return pickVisible(raycaster,pointer,camera,objects,alphaHit);}
  function snakeAction(uv){const uniforms=objects[0]?.mesh.material.uniforms;return pickMascot(uniforms?.map.value,uv,uniforms?.facing.value,hoverBinding?.kind==='mascot'?hoverBinding.action:null);}
  // Resolve the raycast once at the interaction boundary. The semantic action
  // drives both character behavior and the hover cursor; pointerdown switches
  // to the shared closed-hand state while preserving the binding metadata.
  function bindingFromHit(h){
   if(!h)return null;
   const object=objects.find(o=>o.mesh===h.object),index=object?objects.indexOf(object):-1;
   if(!object||index<0)return null;
   const action=index===0?snakeAction(h.uv):'grab';
   if(index===0&&!action)return null;
   return {object,index,kind:index===0?'mascot':'prop',action,key:index===0?action:`prop-${index}`,uv:h.uv};
  }
  function down(e){
   if(progress>.1||e.button!==0)return;
   getPointer(e);
   const touchErase=e.pointerType==='touch'&&erasingRef.current;
   const pointedHit=touchErase?null:hit();
   const pointedBinding=bindingFromHit(pointedHit);
   // Never reuse a stale binding after leaving the visible alpha silhouette.
   const binding=pointedBinding;
   const object=binding?.object||null;
   if(debug)root.current.dataset.lastDown=JSON.stringify({kind:binding?.kind||'background',action:binding?.action||'erase',key:binding?.key||'eraser'});
   // Touch keeps vertical page scrolling; horizontal drag is an optional extra.
   drag={binding,object,x:e.clientX,y:e.clientY,ox:object?.offset.x||0,oy:object?.offset.y||0,id:e.pointerId,moved:false,action:binding?.kind==='mascot'?binding.action:null,erasing:touchErase||!object,event:e,localPoint:pointedHit?object.mesh.worldToLocal(pointedHit.point.clone()):null};
   eraser.endStroke();
   if(e.pointerType!=='touch')cursor.show(binding?'grabbing':'eraser',e,true);
   if(!object&&(touchErase||e.pointerType!=='touch'))erase(e);
   if(object&&object===objects[0]){const point=worldPoint(e,object.mesh.position.z);snakeDrag.x=object.mesh.position.x;snakeDrag.y=object.mesh.position.y;snakeDrag.vx=snakeDrag.vy=snakeDrag.angular=0;object.offset.set(0,0);object.velocity.set(0,0);drag.pose=object.mesh.material.uniforms.map.value;target.copy(orbit);drag.snakeGrab=point.sub(object.mesh.position);drag.z=object.mesh.position.z;drag.last={x:object.home.x,y:object.home.y,t:e.timeStamp};}
   if(object&&object!==objects[0]){
    object.pull=null;object.fall={vx:0,vy:0,spin:0};
    const point=worldPoint(e,object.mesh.position.z);drag.grab=point.sub(object.mesh.position);drag.z=object.mesh.position.z;drag.last={x:object.home.x,y:object.home.y,t:e.timeStamp};
   }
   el.setPointerCapture(e.pointerId);fastUntil=performance.now()+1000;wake();
  }
  function move(e,refresh=false){
   hoverEvent=e.pointerType==='touch'?null:e;
   getPointer(e);
   if(drag){
    drag.event=e;cursor.move(e);fastUntil=performance.now()+120;
    const dx=(e.clientX-drag.x)/screen.x,dy=(e.clientY-drag.y)/screen.y;
    if(Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>6)drag.moved=true;
    if(drag.object&&drag.object===objects[0]){const p=worldPoint(e,drag.z).sub(drag.snakeGrab),elapsed=Math.max(.008,(e.timeStamp-drag.last.t)/1000);snakeDrag.vx=(p.x-snakeDrag.x)/elapsed;snakeDrag.vy=(p.y-snakeDrag.y)/elapsed;snakeDrag.x=p.x;snakeDrag.y=p.y;snakeDrag.angle=THREE.MathUtils.clamp(snakeDrag.vx*.045,-.5,.5);drag.last={x:p.x,y:p.y,t:e.timeStamp};}
    else if(drag.object&&drag.object!==objects[0]){
     const o=drag.object,p=worldPoint(e,drag.z).sub(drag.grab),elapsed=Math.max(.008,(e.timeStamp-drag.last.t)/1000);
     const [l,r]=propBounds(o);o.home.x=THREE.MathUtils.clamp(p.x,l+o.radius,r-o.radius);o.home.y=Math.max(propFloor(o),Math.min(3,p.y));
     o.fall.vx=THREE.MathUtils.clamp((o.home.x-drag.last.x)/elapsed,-12,12);o.fall.vy=THREE.MathUtils.clamp((o.home.y-drag.last.y)/elapsed,-12,12);
     drag.last={x:o.home.x,y:o.home.y,t:e.timeStamp};
    }else if(drag.object){drag.object.offset.set(THREE.MathUtils.clamp(drag.ox+dx*9,-3,3),THREE.MathUtils.clamp(drag.oy-dy*7,-2.5,2.5));}
    else if(drag.erasing&&(e.pointerType!=='touch'||erasingRef.current))erase(e);
   }else if(e.pointerType!=='touch'&&progress<.1){
    const binding=bindingFromHit(hit());
    const idx=binding?.index??-1;
    const action=binding?.kind==='mascot'?binding.action:null;
    // Keep camera and region stable while inspecting a character hotspot.
    if(!reduced&&idx<0&&!refresh)target.set(pointer.x,pointer.y);
    else if(!reduced&&binding)target.copy(orbit);
    const key=binding?.key||'eraser';
    // Leaving the visible target clears the binding immediately.
    hoverBinding=binding;
    // Semantic boundary hysteresis lives in the alpha mask, so the displayed
    // cursor and the click action always resolve to the same region.
    const bindingKey=binding?`${binding.kind}:${binding.index}:${binding.action}`:'none';
    if(root.current.dataset.cursor!==key)root.current.dataset.cursor=key;
    if(root.current.dataset.cursorBinding!==bindingKey)root.current.dataset.cursorBinding=bindingKey;
    objects.forEach(o=>o.hover=o===binding?.object);
    cursor.show(binding?binding.key:'eraser',e);
    publishInventory(action==='pocket');
    publishHint(binding?.kind==='mascot'?actionNames[action][langRef.current==='zh'?1:0]+(langRef.current==='zh'?' · 按住可拖动':' · Hold to drag'):idx>=0?(objects[idx].definition||items[idx]).name[langRef.current==='zh'?1:0]:'');
   }
   if(!refresh)wake();
  }
  function release(e){
   eraser.endStroke();
   if(drag&&el.hasPointerCapture(drag.id))el.releasePointerCapture(drag.id);
   if(drag?.action&&!drag.moved&&e?.type==='pointerup')act(drag.action);
   if(drag?.object&&drag.object===objects[0]){const o=drag.object;if(drag.moved&&!reduced)o.offset.set(snakeDrag.x-snakeX,snakeDrag.y-(ground(snakeX)+o.baseScale*.9*.48));snakeDrag.angular=0;root.current.dataset.snakeThrowSpeed=String(Math.hypot(snakeDrag.vx,snakeDrag.vy).toFixed(2));}
   if(drag?.object&&drag.object!==objects[0]){
    const f=drag.object.fall;
    if(e?.type!=='pointerup'||!drag.moved||e.timeStamp-drag.last.t>100){f.vx=f.vy=0;}
    f.spin=f.vx*.45;root.current.dataset.lastThrowSpeed=String(Math.hypot(f.vx,f.vy).toFixed(2));
    if(reduced){drag.object.home.y=propFloor(drag.object);f.vx=f.vy=f.spin=0;}
   }
   if(drag?.object&&drag.moved)play('drop');
   drag=null;hoverBinding=null;fastUntil=performance.now()+400;delete root.current.dataset.cursorBinding;target.set(0,0);
   if(e?.type==='pointerup'&&e.pointerType!=='touch'){
    const r=viewRect;
    if(e.clientX>=r.left&&e.clientX<r.right&&e.clientY>=r.top&&e.clientY<r.bottom)move(e);
    else leave();
   }else{hoverEvent=null;cursor.hide();}
   wake();
  }
  function leave(e){
   hoverEvent=null;if(drag)return;
   hoverBinding=null;delete root.current.dataset.cursorBinding;
   const next=e?.relatedTarget,control=next?.closest?.('button,a');
   // Transfer ownership synchronously: pointerleave precedes the next pointermove.
   if(progress<.1&&e?.pointerType!=='touch'&&control&&(root.current.contains(control)||control.closest('.daybook-header'))){
    cursor.show(control.dataset.sceneAction||'head',e);
   }else cursor.hide();
   objects.forEach(o=>o.hover=false);publishHint('');publishInventory(false);target.set(0,0);wake();
  }
  // Controls share the scene's cursor owner, without changing their click behavior.
  function controlPointer(e){
   if(e.pointerType==='touch'){cursor.hide();return;}
   const control=e.target.closest?.('button,a');
   if(progress<.1&&control&&(root.current.contains(control)||control.closest('.daybook-header'))){
    hoverEvent=null;cursor.show(control.dataset.sceneAction||'head',e);return;
   }
   if(!el.contains(e.target)&&!drag)cursor.hide();
  }
  function viewportLeave(e){if(!e.relatedTarget)release();}
  function visibility(){visible=!document.hidden;scheduler.stop();physicsRemainder=0;if(visible)wake();else release();}
  const loader=new THREE.TextureLoader();
  loader.load(pocketAssets.walk,sheet=>{
   if(disposed){sheet.dispose();return;}const fw=sheet.image.width/4,fh=sheet.image.height/4;
   const sourceFrames=[],metrics=[];
   for(let i=0;i<16;i++){
    const c=document.createElement('canvas');c.width=Math.floor(fw);c.height=Math.floor(fh);const g=c.getContext('2d');g.drawImage(sheet.image,(i%4)*fw,Math.floor(i/4)*fh,fw,fh,0,0,c.width,c.height);
    const im=g.getImageData(0,0,c.width,c.height);
    const seen=new Uint8Array(c.width*c.height),queue=[];
    for(let x=0;x<c.width;x++)queue.push(x,(c.height-1)*c.width+x);for(let y=0;y<c.height;y++)queue.push(y*c.width,y*c.width+c.width-1);
    for(let q=0;q<queue.length;q++){const p=queue[q];if(seen[p])continue;seen[p]=1;const k=p*4;if(Math.min(im.data[k],im.data[k+1],im.data[k+2])<=233)continue;im.data[k+3]=0;const x=p%c.width,y=Math.floor(p/c.width);if(x)queue.push(p-1);if(x<c.width-1)queue.push(p+1);if(y)queue.push(p-c.width);if(y<c.height-1)queue.push(p+c.width);}
    g.putImageData(im,0,0);sourceFrames.push(c);metrics.push(measureWalkFrame(im.data,c.width,c.height));
   }
   const registration=walkRegistration(metrics);
   sourceFrames.forEach((c,i)=>{
    const normalized=document.createElement('canvas');normalized.width=384;normalized.height=341;
    const {x,y,scale}=registration[i];normalized.getContext('2d').drawImage(c,x,y,c.width*scale,c.height*scale);
    const frameTexture=new THREE.CanvasTexture(normalized);if(debug)frameTexture.userData.registration={...registration[i],source:metrics[i],headAxis:192,bootBaseline:327};walkFrames.push(frameTexture);
   });
   if(debug)root.current.dataset.walkRegistration=JSON.stringify({metrics,registration});
   sheet.dispose();root.current.dataset.walkFrames=String(walkFrames.length);wake();
  });
  texture=loader.load(pocketAssets.keepsakes,tex=>{
   if(disposed){tex.dispose();return;}
   const canvas=document.createElement('canvas');canvas.width=canvas.height=1254;
   const ctx=canvas.getContext('2d');ctx.drawImage(tex.image,0,0);pixels=ctx.getImageData(0,0,1254,1254).data;
   // Separate connected alpha silhouettes so nearby objects cannot bleed into
   // rectangular atlas viewports. This preserves the original source asset.
   const n=1254*1254;owners=new Int32Array(n);const queue=new Int32Array(n);let label=0;
   for(let start=0;start<n;start++){
    if(owners[start]||pixels[start*4+3]<90)continue;
    label++;let head=0,tail=1;queue[0]=start;owners[start]=label;
    while(head<tail){const a=queue[head++],x=a%1254;
     const ns=[x>0?a-1:-1,x<1253?a+1:-1,a>=1254?a-1254:-1,a<n-1254?a+1254:-1];
     for(const v of ns)if(v>=0&&!owners[v]&&pixels[v*4+3]>=90){owners[v]=label;queue[tail++]=v;}
    }
   }
   items.forEach((d,i)=>{
    const [x,y,w,h]=d.rect,crop=new THREE.Vector4(0,0,1,1);
    const counts=new Map();
    for(let yy=y;yy<y+h;yy++)for(let xx=x;xx<x+w;xx++){const v=owners[yy*1254+xx];if(v)counts.set(v,(counts.get(v)||0)+1);}
    const owner=[...counts].sort((a,b)=>b[1]-a[1])[0][0];
    const cut=document.createElement('canvas');cut.width=w;cut.height=h;const cc=cut.getContext('2d'),data=cc.createImageData(w,h);
    for(let yy=0;yy<h;yy++)for(let xx=0;xx<w;xx++){const src=(y+yy)*1254+x+xx,dst=(yy*w+xx)*4;if(owners[src]!==owner)continue;data.data.set(pixels.subarray(src*4,src*4+4),dst);}
    cc.putImageData(data,0,0);const ownTexture=new THREE.CanvasTexture(cut);
    const mat=new THREE.ShaderMaterial({uniforms:{edgeDepth:{value:0},map:{value:ownTexture},crop:{value:crop},time:{value:0},snake:{value:0},outfit:{value:0},facing:{value:1},dissolve:{value:0}},vertexShader:vertex,fragmentShader:fragment,transparent:true,depthWrite:false,side:THREE.DoubleSide});
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(1,1,24,24),mat);scene.add(mesh);
    const pos=[],colors=[],seeds=[];
    for(let yy=1;yy<h;yy+=3)for(let xx=1;xx<w;xx+=3){
     const off=((y+yy)*1254+x+xx)*4;if(pixels[off+3]<120||owners[off/4]!==owner)continue;
     pos.push(xx/w-.5,.5-yy/h,0);colors.push(pixels[off]/255,pixels[off+1]/255,pixels[off+2]/255);seeds.push(xx/w,1-yy/h);
    }
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.setAttribute('seed',new THREE.Float32BufferAttribute(seeds,2));
    const pm=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{dissolve:{value:0}},vertexShader:`
     attribute vec3 color;attribute vec2 seed;varying vec3 c;varying float alpha;uniform float dissolve;
     ${noiseGLSL}
     void main(){float f=field(seed);float age=max(0.,dissolve-f);
      alpha=step(f,dissolve)*(1.-smoothstep(0.,.24,age));
      vec3 p=position+vec3(age*(hash(seed)*2.-1.)*.65,age*(1.5+hash(seed.yx)*2.),age*.2);
      c=color;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=1.25*(1.-age);}
    `,fragmentShader:`varying vec3 c;varying float alpha;void main(){float soft=1.-smoothstep(.15,.5,length(gl_PointCoord-.5));gl_FragColor=vec4(c,alpha*soft*.8);}`});
    const points=new THREE.Points(g,pm);scene.add(points);
    objects.push({mesh,points,owner,ownTexture,rect:d.rect,home:new THREE.Vector3(),offset:new THREE.Vector2(),velocity:new THREE.Vector2(),baseScale:1,hover:false});
   });
   loader.load(pocketAssets.extras,sheet=>{
    if(disposed){sheet.dispose();return;}
    const definitions=[
     {name:['RS7 model','RS7 车模'],rect:[0,380,575,400],size:2.8,x:0,y:0,z:.5},
     {name:['NF800 Pro racket','NF800 Pro 球拍'],rect:[575,75,350,875],size:1.15,x:0,y:0,z:.5},
     {name:['Chaoshan beef hotpot','潮汕牛肉火锅'],rect:[930,275,606,620],size:2.15,x:0,y:0,z:.5},
    ];
    definitions.forEach(definition=>{
     const [x,y,w,h]=definition.rect,c=document.createElement('canvas');c.width=w;c.height=h;const ctx=c.getContext('2d');ctx.drawImage(sheet.image,x,y,w,h,0,0,w,h);
     const im=ctx.getImageData(0,0,w,h),seen=new Uint8Array(w*h),queue=[];
     for(let xx=0;xx<w;xx++)queue.push(xx,(h-1)*w+xx);for(let yy=0;yy<h;yy++)queue.push(yy*w,yy*w+w-1);
     for(let k=0;k<queue.length;k++){const p=queue[k];if(seen[p])continue;seen[p]=1;const n=p*4;if(Math.min(im.data[n],im.data[n+1],im.data[n+2])<234)continue;im.data[n+3]=0;const xx=p%w,yy=Math.floor(p/w);if(xx)queue.push(p-1);if(xx<w-1)queue.push(p+1);if(yy)queue.push(p-w);if(yy<h-1)queue.push(p+w);}
     ctx.putImageData(im,0,0);const ownTexture=new THREE.CanvasTexture(c),mat=objects[1].mesh.material.clone();mat.uniforms.map.value=ownTexture;
     const mesh=new THREE.Mesh(new THREE.PlaneGeometry(1,1),mat);mesh.visible=false;scene.add(mesh);
     const positions=[],colors=[],seeds=[];
     for(let yy=1;yy<h;yy+=3)for(let xx=1;xx<w;xx+=3){
      const k=(yy*w+xx)*4;if(im.data[k+3]<120)continue;
      positions.push(xx/w-.5,.5-yy/h,0);colors.push(im.data[k]/255,im.data[k+1]/255,im.data[k+2]/255);seeds.push(xx/w,1-yy/h);
     }
     const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometry.setAttribute('seed',new THREE.Float32BufferAttribute(seeds,2));
     const points=new THREE.Points(geometry,objects[1].points.material.clone());points.visible=false;scene.add(points);
     objects.push({definition,mesh,points,ownTexture,rect:[0,0,w,h],hitWidth:w,hitHeight:h,hitPixels:im.data,home:new THREE.Vector3(),offset:new THREE.Vector2(),velocity:new THREE.Vector2(),baseScale:1,hover:false});
    });sheet.dispose();root.current.dataset.items=String(objects.length-1);resize();
   },undefined,()=>{if(!disposed)publishHint(langRef.current==='zh'?'新增物件加载失败，请刷新':'Extra items could not load. Please refresh.');});
   loader.load(pocketAssets.poses,sheet=>{
    if(disposed){sheet.dispose();return;}
    const fw=sheet.image.width/4,fh=sheet.image.height/3;
    for(let r=0;r<3;r++)for(let c=0;c<4;c++){
     const frameCanvas=document.createElement('canvas');frameCanvas.width=Math.floor(fw);frameCanvas.height=Math.floor(fh);
     const fc=frameCanvas.getContext('2d');fc.drawImage(sheet.image,c*fw,r*fh,fw,fh,0,0,frameCanvas.width,frameCanvas.height);
     // The generated atlas has an opaque backdrop. Flood its connected exterior
     // up to the character's ink contour; do not key out green character pixels.
     const W=frameCanvas.width,H=frameCanvas.height,im=fc.getImageData(0,0,W,H),seen=new Uint8Array(W*H),q=[];
     for(let x=0;x<W;x++){q.push(x,(H-1)*W+x);}for(let y=0;y<H;y++){q.push(y*W,y*W+W-1);}
     for(let k=0;k<q.length;k++){const p=q[k];if(seen[p])continue;seen[p]=1;const a=p*4;
      if(Math.min(im.data[a],im.data[a+1],im.data[a+2])<230)continue;
      im.data[a+3]=0;const x=p%W,y=Math.floor(p/W);if(x>0)q.push(p-1);if(x<W-1)q.push(p+1);if(y>0)q.push(p-W);if(y<H-1)q.push(p+W);
     }
     fc.putImageData(im,0,0);
     const ft=new THREE.CanvasTexture(frameCanvas);snakeFrames.push(ft);
    }
    sheet.dispose();setReady(true);resize();
   },undefined,()=>setFailed(true));resize();
  },undefined,()=>{if(!disposed)setFailed(true);});
  function reducedChange(){reduced=media.matches;if(reduced){snakeX=walkTo;walkSpeed=0;greetingUntil=winkUntil=-1;}root.current.classList.toggle('sky-play--still',reduced);updateScroll();wake();}
  const observer=new IntersectionObserver(([e])=>{active=e.isIntersecting;scheduler.stop();physicsRemainder=0;if(active)wake();});
  observer.observe(root.current);
  const ro=new ResizeObserver(resize);ro.observe(el);
  let dprMedia;
  function dprChange(){syncPixelRatio();watchDpr();wake();}
  function watchDpr(){dprMedia?.removeEventListener('change',dprChange);dprMedia=matchMedia(`(resolution: ${devicePixelRatio}dppx)`);dprMedia.addEventListener('change',dprChange);}
  watchDpr();
  window.addEventListener('scroll',updateScroll,{passive:true});window.addEventListener('resize',resize);
  media.addEventListener('change',reducedChange);document.addEventListener('visibilitychange',visibility);window.addEventListener('blur',release);
  document.addEventListener('pointermove',controlPointer);document.addEventListener('pointerout',viewportLeave);
  el.addEventListener('pointerenter',move);el.addEventListener('pointerdown',down);el.addEventListener('pointermove',move);el.addEventListener('pointerup',release);el.addEventListener('pointercancel',release);el.addEventListener('pointerleave',leave);
  api.current={
   act,
   setErasing:value=>{release();erasingRef.current=value;setErasing(value);el.dataset.erasing=String(value);el.style.touchAction=value?'none':'pan-y';},
   reveal:()=>{if(root.current.dataset.revealed==='true')paintSky();else eraser.reveal();},
   reset:()=>{paintSky();walkTo=0;snakeX=0;walkSpeed=0;walkDistance=0;awayFromHome=false;greetingUntil=winkUntil=-1;mood=0;outfit=0;dropIndex=0;objects.forEach(o=>{o.offset.set(0,0);o.velocity.set(0,0);o.held=false;o.released=false;});target.set(0,0);wake();},
   nudge:(i,key)=>{const o=objects[i];if(!o)return;o.held=true;o.offset.x=THREE.MathUtils.clamp(o.offset.x+(key==='ArrowRight'?.2:key==='ArrowLeft'?-.2:0),-2,2);o.offset.y=THREE.MathUtils.clamp(o.offset.y+(key==='ArrowUp'?.2:key==='ArrowDown'?-.2:0),-2,2);wake();},
   release:()=>{objects.forEach(o=>o.held=false);wake();}
  };
  if(debug)root.current.__pocketDebug={walkSnapshot(){
    const o=objects[0];if(!o)return null;
    const map=o.mesh.material.uniforms.map.value,frame=getMascotHitMask(map),r=renderer.domElement.getBoundingClientRect();
    if(!frame?.bounds)return null;
    const worldFoot=new THREE.Vector3(0,.5-(frame.bounds.maxY+1)/frame.height,0).applyMatrix4(o.mesh.matrixWorld);
    const groundTarget=new THREE.Vector3(snakeX+o.offset.x,ground(snakeX)+o.offset.y,o.mesh.position.z);
    const toClient=v=>{const p=v.clone().project(camera);return {x:r.left+(p.x+1)*r.width/2,y:r.top+(1-p.y)*r.height/2};};
    const foot=toClient(worldFoot),floor=toClient(groundTarget),index=walkFrames.indexOf(map);
    return {snakeX,walkTo,walkDistance,walkSpeed,walkDelta,walking:Math.abs(walkSpeed)>.001,holding:drag?.object===o,progress,frameIndex:index,poseFrame:snakeFrames.indexOf(map),activeEgg:clock<greetingUntil?'home-greeting':clock<winkUntil?'wardrobe-wink':null,mood,outfit,facing:o.mesh.material.uniforms.facing.value,
     foot,floor,groundDeltaPx:{x:foot.x-floor.x,y:foot.y-floor.y},worldFoot:worldFoot.toArray(),groundTarget:groundTarget.toArray(),
     scale:o.mesh.scale.toArray(),rotation:o.mesh.rotation.z,matrixWorld:o.mesh.matrixWorld.toArray(),
     registration:index>=0?map.userData.registration:null,headAxis:toClient(new THREE.Vector3(0,.25,0).applyMatrix4(o.mesh.matrixWorld))};
   },motion(){return this.walkSnapshot();},snapshot(){
    const o=objects[0];if(!o)return null;
    const frame=getMascotHitMask(o.mesh.material.uniforms.map.value),r=renderer.domElement.getBoundingClientRect(),facing=o.mesh.material.uniforms.facing.value;
    if(!frame?.bounds)return null;
    const groups=new Map();for(let i=0;i<frame.mask.length;i++){const id=frame.mask[i];if(id){let g=groups.get(id);if(!g)groups.set(id,g=[]);g.push(i);}}
    const names={1:'body',2:'head',3:'pocket',4:'left',5:'right'};
    const project=(x,y)=>{const u=(x+.5)/frame.width,v=1-(y+.5)/frame.height;const p=new THREE.Vector3((facing<0?1-u:u)-.5,v-.5,0).applyMatrix4(o.mesh.matrixWorld).project(camera);return {x:r.left+(p.x+1)*r.width/2,y:r.top+(1-p.y)*r.height/2};};
    const occluded=[];
    const samples=[...groups].map(([id,g])=>{
     const cx=g.reduce((a,i)=>a+i%frame.width,0)/g.length,cy=g.reduce((a,i)=>a+Math.floor(i/frame.width),0)/g.length;
     const distance=i=>Math.hypot(i%frame.width-cx,Math.floor(i/frame.width)-cy);
     let i=g.reduce((best,i)=>distance(i)<distance(best)?i:best,g[0]);
     const visible=i=>{const p=project(i%frame.width,Math.floor(i/frame.width)),v=new THREE.Vector2((p.x-r.left)/r.width*2-1,1-(p.y-r.top)/r.height*2);return pickVisible(raycaster,v,camera,objects,alphaHit)?.object===o.mesh;};
     if(!visible(i)){const point=project(i%frame.width,Math.floor(i/frame.width));const candidates=g.filter((_,k)=>k%32===0).sort((a,b)=>distance(a)-distance(b));i=candidates.find(visible);if(i===undefined){occluded.push({action:names[id],...point});return null;}}
     return {action:names[id],...project(i%frame.width,Math.floor(i/frame.width))};
    }).filter(Boolean);
    return {walk:this.walkSnapshot(),samples,occluded,settled:Math.abs(walkTo-snakeX)<=.015&&poseAction!=='pocket',gap:project(0,0),anchor:drag?.localPoint?(()=>{const p=drag.localPoint.clone().applyMatrix4(o.mesh.matrixWorld).project(camera);return {x:r.left+(p.x+1)*r.width/2,y:r.top+(1-p.y)*r.height/2};})():null,facing,dpr:renderer.getPixelRatio(),systemDpr:devicePixelRatio,rect:r.toJSON(),frame:o.mesh.material.uniforms.map.value.uuid};
   }};
  reducedChange();resize();
  return()=>{disposed=true;scheduler.dispose();eraser.dispose();glass.dispose();observer.disconnect();ro.disconnect();dprMedia?.removeEventListener('change',dprChange);window.removeEventListener('scroll',updateScroll);window.removeEventListener('resize',resize);if(root.current)delete root.current.__pocketDebug;media.removeEventListener('change',reducedChange);document.removeEventListener('visibilitychange',visibility);window.removeEventListener('blur',release);
   document.removeEventListener('pointermove',controlPointer);document.removeEventListener('pointerout',viewportLeave);
   el.removeEventListener('pointerenter',move);el.removeEventListener('pointerdown',down);el.removeEventListener('pointermove',move);el.removeEventListener('pointerup',release);el.removeEventListener('pointercancel',release);el.removeEventListener('pointerleave',leave);
   cursor.dispose();audioContext?.close().catch(()=>{});disposeScene(scene,renderer,[shadowTexture,texture,...walkFrames,...snakeFrames,...objects.map(o=>o.ownTexture)]);activeProps.length=0;physics.held=null;objects.length=0;walkFrames.length=0;snakeFrames.length=0;pixels=owners=null;api.current=null;};
 },[]);
 return <section className="sky-play" ref={root} aria-label={lang==='zh'?'我的兴趣空间':'A few things I love'} style={{'--pocket-hidden-sky':`url("${pocketAssets.hiddenSky}")`,'--pocket-terrain':`url("${pocketAssets.terrain}")`}}>
  <div className="sky-play__stage">
   <div className="sky-play__backdrop"/>
   <canvas className="sky-play__wipe" ref={wipe} aria-hidden="true"/>
   <canvas className="sky-play__backlight" ref={backlight} aria-hidden="true"/>
   <div className="sky-play__ground"/>
   <div className="sky-play__editorial"><h1>POCKET PLANET</h1></div>
   <div className="sky-play__canvas" ref={host} aria-hidden="true"/>
   {(!ready||failed)&&<p className="sky-play__loading" role="status">{failed?(lang==='zh'?'场景加载失败，请刷新重试。':'Scene could not load. Please refresh.'):(lang==='zh'?'正在打开口袋星球…':'Opening Pocket Planet…')}</p>}
   <div className="sky-play__actions" aria-label={lang==='zh'?'小蛇互动':'Meet the snake'}>{[['left','向左走','Walk left'],['head','换表情','Change mood'],['body','换装','Change outfit'],['pocket','掏口袋','Pocket surprise'],['right','向右走','Walk right']].map(([action,zh,en])=><button key={action} data-scene-action={action} aria-label={lang==='zh'?zh:en} onFocus={()=>setInventory(action==='pocket')} onBlur={()=>setInventory(false)} onMouseEnter={()=>setInventory(action==='pocket')} onMouseLeave={()=>setInventory(false)} onClick={()=>api.current?.act(action)}><span className="sky-play__action-full">{lang==='zh'?zh:en}</span><span className="sky-play__action-short" aria-hidden="true">{{left:'←',right:'→',head:lang==='zh'?'表情':'Mood',body:lang==='zh'?'换装':'Outfit',pocket:lang==='zh'?'口袋':'Pocket'}[action]}</span></button>)}</div>
   <div className="sky-play__controls"><button className="sky-play__eraser" data-scene-action="eraser" aria-pressed={erasing} aria-label={lang==='zh'?'橡皮擦：在背景上拖动擦除':'Eraser: drag on the background to erase'} onClick={()=>api.current?.setErasing(!erasing)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 14 9-10a2 2 0 0 1 3 0l5 5a2 2 0 0 1 0 3l-8 9H8l-4-4a2 2 0 0 1 0-3Z"/><path d="m9 9 8 8M12 21h10"/></svg>{lang==='zh'?'橡皮擦':'Eraser'}</button><button onClick={onWork}>{lang==='zh'?'查看作品':'Selected work'} ↓</button></div>
  </div>
 </section>;
}
