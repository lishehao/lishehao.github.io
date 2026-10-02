import test from 'node:test';import assert from 'node:assert/strict';import {Vector3,PerspectiveCamera} from 'three';import {createSceneProjection} from '../src/pocket/sceneProjection.js';
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} != ${b}`);
// Differential reference is the pre-optimization projection formula. It checks
// that pooled storage does not alter hit coordinates or the CSS ground ellipse.
function reference(camera,r,e,z=.7){const ray=new Vector3((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1,.5).unproject(camera).sub(camera.position).normalize();return camera.position.clone().addScaledVector(ray,(z-camera.position.z)/ray.z);}
test('pooled ground and bounds match original projection across camera orbit and viewports',()=>{
 for(const [width,height] of [[320,568],[390,844],[1280,600],[1440,900]])for(const yaw of [-.16,0,.16])for(const pitch of [-.09,0,.09]){
  const r={left:31,top:77,width,height,right:31+width},camera=new PerspectiveCamera(40,width/height,.1,100),radius=width/height<.85?13:10;
  camera.position.set(Math.sin(yaw)*radius,Math.sin(pitch)*radius,Math.cos(yaw)*Math.cos(pitch)*radius);camera.lookAt(0,0,0);camera.updateMatrixWorld();const p=createSceneProjection(camera,.7,()=>r);
  for(const x of [-4,-1,0,1,4]){const v=new Vector3(x,0,.7).project(camera),u=Math.max(-1,Math.min(1,v.x/1.3)),y=r.top+r.height*(.75+.08*(1-Math.sqrt(1-u*u)));close(p.ground(x),reference(camera,r,{clientX:r.left+(v.x+1)*width/2,clientY:y}).y);}
  const margin=Math.max(24,width*.035),bounds=p.bounds();close(bounds[0],reference(camera,r,{clientX:r.left+margin,clientY:r.top+height*.75}).x);close(bounds[1],reference(camera,r,{clientX:r.right-margin,clientY:r.top+height*.75}).x);
  const first=p.worldPoint({clientX:100,clientY:150}),saved=first.clone();p.ground(1);p.bounds();p.worldPoint({clientX:250,clientY:300});assert.deepEqual(first.toArray(),saved.toArray(),'drag points must not share scratch storage');
 }
});
