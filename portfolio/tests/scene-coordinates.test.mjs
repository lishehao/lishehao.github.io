import test from 'node:test';import assert from 'node:assert/strict';
import {normalizedPoint,skyCover,ERASER_RADIUS} from '../src/pocket/sceneCoordinates.js';
import {Vector3,PerspectiveCamera} from 'three';import {createSceneProjection} from '../src/pocket/sceneProjection.js';
test('CSS coordinates round trip to the rendered plane after scroll, scale, orbit and facing changes',()=>{
 for(const [width,height] of [[320,568],[390,844],[844,390],[1440,900]])for(const yaw of [-.16,0,.16]){
  const rect={left:37,top:-85,width,height,right:37+width};const camera=new PerspectiveCamera(40,width/height,.1,100);
  camera.position.set(Math.sin(yaw)*10,.3,Math.cos(yaw)*10);camera.lookAt(0,0,0);camera.updateMatrixWorld();
  const projection=createSceneProjection(camera,.7,()=>rect);
  for(const z of [.2,.5,.7])for(const x of [-1,0,1]){const world=new Vector3(x,-.3,z),p=world.clone().project(camera),event={clientX:rect.left+(p.x+1)*width/2,clientY:rect.top+(1-p.y)*height/2};
   assert.ok(projection.worldPoint(event,z).distanceTo(world)<1e-10);const css=normalizedPoint(event,rect);assert.ok(Math.abs(css.x*2-1-p.x)<1e-10);
  }
 }
 assert.equal(ERASER_RADIUS*2,40);
});
test('sky always covers the stage with uniform scale and keeps upper-right planet visible',()=>{
 for(const [w,h] of [[320,568],[390,844],[430,932],[844,390],[1280,720],[1440,900]]){
  const c=skyCover(1536,1024,w,h);assert.ok(Math.abs(c.width/1536-c.height/c.sourceHeight)<1e-12);
  assert.ok(c.width>=w&&c.height>=h);assert.ok(c.x<=0&&c.x+c.width>=w);
  const sun=c.x+1421*c.width/1536;assert.ok(sun>w*.75&&sun<w-10);
 }
});
