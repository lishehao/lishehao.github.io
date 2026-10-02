import test from 'node:test';import assert from 'node:assert/strict';
import * as THREE from 'three';
import {languageFromPath,languageURL} from '../src/navigation.js';
import {createVideoPlayback} from '../src/videoPlayback.js';
import {disposeScene} from '../src/pocket/disposeScene.js';
class Video extends EventTarget{
 paused=true;requests=[];
 play(){this.paused=false;this.dispatchEvent(new Event('play'));return new Promise((resolve,reject)=>this.requests.push({resolve,reject}));}
 pause(){if(this.paused)return;this.paused=true;this.dispatchEvent(new Event('pause'));}
}
test('language URLs preserve hash/query and reject a zh-like prefix',()=>{
 assert.equal(languageFromPath('/zh/projects/'),'zh');assert.equal(languageFromPath('/zhang/'),'en');
 assert.equal(languageURL('https://lishehao.github.io/en/?x=1#project-auto','zh').href,'https://lishehao.github.io/zh/?x=1#project-auto');
 assert.equal(languageURL('https://lishehao.github.io/zh/#work','en').href,'https://lishehao.github.io/#work');
});
test('an old play rejection cannot overwrite a new play after rapid cancellation',async()=>{
 const video=new Video(),states=[],controller=createVideoPlayback(video,{onState:v=>states.push(v)});
 const old=controller.toggle();await controller.toggle();const current=controller.toggle();
 video.requests[1].resolve();await current;video.requests[0].reject(new Error('old abort'));await old;
 assert.equal(video.paused,false);assert.equal(states.at(-1),true);controller.dispose();assert.equal(video.paused,true);
});
test('cancelled, offscreen, and disposed play completions stay stopped',async()=>{
 let allowed=true;const video=new Video(),states=[],controller=createVideoPlayback(video,{allowed:()=>allowed,onState:v=>states.push(v)});
 const pending=controller.toggle();allowed=false;controller.cancel();video.requests[0].resolve();await pending;
 assert.equal(video.paused,true);assert.equal(states.at(-1),false);
 allowed=true;const late=controller.toggle();controller.dispose();const length=states.length;video.requests[1].resolve();await late;assert.equal(states.length,length);assert.equal(video.paused,true);
});
test('scene teardown disposes shared geometry/textures once and nested edge materials too',()=>{
 const scene=new THREE.Scene(),texture=new THREE.Texture(),geometry=new THREE.PlaneGeometry(),material=new THREE.ShaderMaterial({uniforms:{map:{value:texture}}});
 const mesh=new THREE.Mesh(geometry,material),edge=new THREE.Mesh(geometry,material.clone());mesh.add(edge);scene.add(mesh);
 const counts=new Map();for(const value of [geometry,material,edge.material,texture])value.addEventListener('dispose',()=>counts.set(value,(counts.get(value)||0)+1));
 const actions=[];const renderer={renderLists:{dispose:()=>actions.push('lists')},dispose:()=>actions.push('renderer'),forceContextLoss:()=>actions.push('context'),domElement:{remove:()=>actions.push('canvas')}};
 disposeScene(scene,renderer,[texture,texture]);assert.equal(counts.size,4);for(const n of counts.values())assert.equal(n,1);assert.deepEqual(actions,['lists','renderer','context','canvas']);assert.equal(scene.children.length,0);
});
