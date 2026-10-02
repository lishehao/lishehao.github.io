import {Vector3,MathUtils} from 'three';

// Scratch values belong to one scene. Pointer results remain independently owned;
// floor and bounds queries can reuse storage because callers consume scalars.
export function createSceneProjection(camera,planeZ,getRect,getGroundFraction=()=>.75){
 const ray=new Vector3(),projected=new Vector3(),floorPoint=new Vector3();
 const leftPoint=new Vector3(),rightPoint=new Vector3(),limits=[0,0];
 function worldAt(clientX,clientY,z,out){
  const r=getRect();
  ray.set((clientX-r.left)/r.width*2-1,-(clientY-r.top)/r.height*2+1,.5).unproject(camera);
  ray.sub(camera.position).normalize();
  return out.copy(camera.position).addScaledVector(ray,(z-camera.position.z)/ray.z);
 }
 function worldPoint(e,z=planeZ){return worldAt(e.clientX,e.clientY,z,new Vector3());}
 function ground(x){
  const r=getRect();projected.set(x,0,planeZ).project(camera);
  const u=MathUtils.clamp(projected.x/1.3,-1,1);
  const y=r.top+r.height*(getGroundFraction()+.08*(1-Math.sqrt(1-u*u)));
  return worldAt(r.left+(projected.x+1)*r.width/2,y,planeZ,floorPoint).y;
 }
 function bounds(){
  const r=getRect(),margin=Math.max(24,r.width*.035),y=r.top+r.height*getGroundFraction();
  limits[0]=worldAt(r.left+margin,y,planeZ,leftPoint).x;
  limits[1]=worldAt(r.right-margin,y,planeZ,rightPoint).x;
  return limits;
 }
 return {worldPoint,ground,bounds};
}
