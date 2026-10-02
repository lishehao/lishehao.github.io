export function disposeScene(scene,renderer,textures=[]){
 const resources=new Set(textures.filter(Boolean));
 function material(m){if(!m)return;resources.add(m);Object.values(m).forEach(v=>{if(v?.isTexture)resources.add(v)});Object.values(m.uniforms??{}).forEach(u=>{if(u.value?.isTexture)resources.add(u.value)});}
 scene.traverse(o=>{if(o.geometry)resources.add(o.geometry);(Array.isArray(o.material)?o.material:[o.material]).forEach(material);});
 resources.forEach(r=>r.dispose());scene.clear();renderer.renderLists.dispose();renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();
}
