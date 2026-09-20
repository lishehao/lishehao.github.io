// Read the matrices last committed by renderer.render. No projected rectangle
// fallback: rotating a plane must rotate its alpha mask and transparent gaps.
export function pickVisible(raycaster,pointer,camera,objects,opaque){
 raycaster.setFromCamera(pointer,camera);
 const visible=objects.filter(o=>o.mesh.visible),byMesh=new Map(visible.map(o=>[o.mesh,o]));
 for(const hit of raycaster.intersectObjects(visible.map(o=>o.mesh),false)){
  const object=byMesh.get(hit.object);
  if(object&&hit.uv&&opaque(object,hit.uv))return hit;
 }
 return null;
}
