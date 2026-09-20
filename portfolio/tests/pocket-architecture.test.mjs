import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createSceneClock} from '../src/pocket/sceneClock.js';
import {glassPatches,patchState} from '../src/pocket/glassSurface.js';
import {pickVisible} from '../src/pocket/scenePicking.js';
import {stepProps} from '../src/pocket/propPhysics.js';

function harness(){
 let time=0,id=0,urgent=false,active=true,keep=true;
 const jobs=new Map(),frames=[];
 const schedule=(fn,at)=>{jobs.set(++id,{fn,at});return id;};
 const clock=createSceneClock({render:(t,dt)=>{frames.push({t,dt});return keep;},fast:()=>urgent,running:()=>active,
  raf:fn=>schedule(fn,(Math.floor(time/(1000/60)+.00001)+1)*1000/60),cancel:i=>jobs.delete(i),
  now:()=>time,delay:(fn,ms)=>schedule(fn,time+ms),clear:i=>jobs.delete(i)});
 return {clock,frames,jobs,setUrgent(v){urgent=v;},setActive(v){active=v;},setKeep(v){keep=v;},
  advance(ms){const end=time+ms;let guard=0;while(jobs.size){if(++guard>10000)throw Error('runaway scheduler');const [i,j]=[...jobs].sort((a,b)=>a[1].at-b[1].at)[0];if(j.at>end)break;jobs.delete(i);time=j.at;j.fn(time);}time=end;}};
}
test('idle is 30Hz and elapsed time is preserved, not truncated to 33ms',()=>{
 const h=harness();h.clock.wake();h.advance(1000);
 assert.ok(h.frames.length>=29&&h.frames.length<=31);
 const elapsed=h.frames.reduce((sum,f)=>sum+f.dt,0);
 assert.ok(Math.abs(elapsed-(h.frames.at(-1).t-h.frames[0].t)/1000)<1e-8);
 h.clock.dispose();assert.equal(h.jobs.size,0);
});
test('ongoing motion promotes a pending idle timer to full rate',()=>{
 const h=harness();h.clock.wake();h.advance(20);h.setUrgent(true);h.clock.wake();
 h.advance(1000);assert.ok(h.frames.length>=60);assert.equal(h.jobs.size,1);h.clock.dispose();
});
test('pause cancels all work and resume does not catch up hidden time',()=>{
 const h=harness();h.clock.wake();h.advance(100);h.setActive(false);h.clock.stop();const n=h.frames.length;
 h.advance(60000);assert.equal(h.frames.length,n);assert.equal(h.jobs.size,0);
 h.setActive(true);h.clock.wake();h.advance(20);assert.equal(h.frames.at(-1).dt,0);
 h.setKeep(false);h.advance(100);assert.equal(h.jobs.size,0);
 h.clock.wake();h.advance(20);assert.equal(h.frames.at(-1).dt,0);h.clock.dispose();
});
test('six independent continuous light envelopes, no shared flash gate',()=>{
 assert.equal(glassPatches.length,6);
 const peaks=glassPatches.map(p=>{let peak={t:0,a:0};for(let t=0;t<30;t+=.1){const a=patchState(p,t).alpha;if(a>peak.a)peak={t,a};}return Math.round(peak.t);});
 assert.ok(new Set(peaks).size>=5);
 for(const p of glassPatches)for(let t=0;t<60;t+=.05){const a=patchState(p,t),b=patchState(p,t+.05);assert.ok(Math.abs(a.alpha-b.alpha)<.015);assert.ok(a.alpha<.49&&a.alpha>=0);}
 for(let t=0;t<60;t+=.1)assert.ok(glassPatches.filter(p=>patchState(p,t).alpha>.10).length>=2,'multiple places remain visible');
});
test('rotated raycast returns the actual mesh and exact local UV; holes stay empty',()=>{
 const camera=new THREE.PerspectiveCamera(40,1,.1,100);camera.position.z=5;camera.updateMatrixWorld();
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));
 mesh.rotation.z=.7;mesh.rotation.y=.25;mesh.scale.set(2,1.4,1);mesh.updateMatrixWorld();
 const object={mesh},ray=new THREE.Raycaster();
 const pointerFor=(x,y)=>{const v=new THREE.Vector3(x,y,0).applyMatrix4(mesh.matrixWorld).project(camera);return new THREE.Vector2(v.x,v.y);};
 const opaque=(_,uv)=>uv.x>.6;
 const hit=pickVisible(ray,pointerFor(.3,.1),camera,[object],opaque);
 assert.equal(hit.object,mesh);assert.ok(Math.abs(hit.uv.x-.8)<1e-6);assert.ok(Math.abs(hit.uv.y-.6)<1e-6);
 assert.equal(pickVisible(ray,pointerFor(-.2,.1),camera,[object],opaque),null);
 assert.equal(pickVisible(ray,pointerFor(.65,.1),camera,[object],()=>true),null);
 mesh.visible=false;assert.equal(pickVisible(ray,pointerFor(.3,.1),camera,[object],()=>true),null);
 mesh.geometry.dispose();mesh.material.dispose();
});
test('fixed physics gives the same fall at different render cadences',()=>{
 function run(hz){const o={home:{x:0,y:2},radius:.2,fall:{vx:1,vy:0,spin:.5}},options={floor:()=>0,bounds:()=>[-5,5]};let accumulator=0;
  for(let i=0;i<hz;i++){accumulator+=1/hz;while(accumulator+1e-12>=1/120){stepProps([o],1/120,options);accumulator-=1/120;}}return o;}
 assert.deepEqual(run(30),run(60));assert.deepEqual(run(20),run(60));
});
