import test from 'node:test';
import assert from 'node:assert/strict';
import {stepWalk,walkFrame,walkRegistration,measureWalkFrame,footOffset,walkFacing} from '../src/pocket/walkMotion.js';
function route(dt,dir=1){let x=0,speed=0,distance=0,positions=[];for(let t=0;t<2;t+=dt){const step=stepWalk(x,dir*.85,speed,dt);x=step.x;speed=step.speed;distance+=step.distance;positions.push(x);}return {x,speed,distance,positions};}
test('routes settle exactly, mirror symmetrically, and use every display frame',()=>{
 const right=route(1/60),left=route(1/60,-1),slow=route(1/30);
 assert.equal(right.x,.85);assert.equal(right.speed,0);assert.equal(slow.x,.85);
 assert.ok(Math.abs(right.distance-.85)<1e-10);
 assert.deepEqual(left.positions,right.positions.map(x=>-x));
 assert.ok(new Set(right.positions).size>32);
 assert.ok(right.positions.every(x=>x>=0&&x<=.85));
});
test('reversal decelerates continuously and settles without overshoot',()=>{
 let x=.4,speed=1.25;
 const first=stepWalk(x,-.45,speed,1/60);assert.ok(first.speed>0&&first.speed<speed);
 for(let i=0;i<180;i++){const s=stepWalk(x,-.45,speed,1/60);x=s.x;speed=s.speed;assert.ok(x>=-.45);}
 assert.equal(x,-.45);assert.equal(speed,0);
});
test('pose phase depends on distance rather than elapsed time or button clicks',()=>{
 assert.equal(walkFrame(0),0);assert.equal(walkFrame(1.25),0);
 assert.equal(walkFrame(1.25/16*3),3);
 const step=stepWalk(.85,.85,0,1/30);assert.equal(walkFrame(.4+step.distance),walkFrame(.4));
});
test('registration uses one scale and pins every head axis and foot baseline',()=>{
 const metrics=Array.from({length:16},(_,i)=>({height:273+i%7,pivot:148+i%12,bottom:287+i%10}));
 const r=walkRegistration(metrics);
 assert.equal(new Set(r.map(x=>x.scale)).size,1);
 r.forEach((n,i)=>{assert.ok(Math.abs(n.x+(metrics[i].pivot+.5)*n.scale-192)<1e-10);assert.ok(Math.abs(n.y+(metrics[i].bottom+1)*n.scale-327)<1e-10);});
 const data=new Uint8ClampedArray(8*8*4);for(const [x,y] of [[2,1],[4,1],[1,7],[6,7]])data.set([100,120,60,255],(y*8+x)*4);
 assert.deepEqual(measureWalkFrame(data,8,8),{top:1,bottom:7,left:1,right:6,height:7,pivot:3});
});

test('the world foot baseline stays fixed under scale, tilt, and mirrored facing',()=>{
 for(const face of [-1,1])for(const scale of [1.8,2.07,2.3])for(const angle of [-.2,0,.2])for(const bottom of [326,339]){
  const a=footOffset(scale,angle,bottom,341),x=.85-a.x,y=-1.4-a.y;
  const localX=face*0,localY=(.5-(bottom+1)/341)*scale;
  const worldX=x+localX*Math.cos(angle)-localY*Math.sin(angle);
  const worldY=y+localX*Math.sin(angle)+localY*Math.cos(angle);
  assert.ok(Math.abs(worldX-.85)<1e-12);assert.ok(Math.abs(worldY+1.4)<1e-12);
 }
});

test('reversal facing follows actual displacement through the zero velocity crossing',()=>{
 let x=.4,speed=1.25,face=1,turned=false;
 for(let i=0;i<100;i++){
  const s=stepWalk(x,-.45,speed,1/60),delta=s.x-x;
  face=walkFacing(delta,face);
  if(Math.abs(delta)>1e-6)assert.equal(face,Math.sign(delta));
  if(i<10)assert.equal(face,1);
  if(face===-1)turned=true;
  x=s.x;speed=s.speed;
 }
 assert.ok(turned);assert.equal(x,-.45);
 assert.equal(walkFacing(0,-1),-1);
});
