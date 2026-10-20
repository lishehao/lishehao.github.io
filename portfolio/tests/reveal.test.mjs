import test from 'node:test';
import assert from 'node:assert/strict';
import {observeReveal} from '../src/reveal.js';

function element(children=[]){
 const classes=new Set(),listeners={};
 return {dataset:{},classes,listeners,
  classList:{add:c=>classes.add(c),remove:c=>classes.delete(c)},
  contains:node=>children.includes(node),
  addEventListener:(type,fn)=>{listeners[type]=fn;},removeEventListener:type=>{delete listeners[type];}};
}
function preference(matches){
 const listeners=[];
 globalThis.matchMedia=()=>({get matches(){return matches;},addEventListener:(_,fn)=>listeners.push(fn),removeEventListener(){}});
 return {change(next){matches=next;listeners.forEach(fn=>fn());}};
}
function observer(){
 const state={observed:[],callback:null};
 globalThis.IntersectionObserver=class{constructor(cb){state.callback=cb;}observe(e){state.observed.push(e);}unobserve(e){state.observed=state.observed.filter(x=>x!==e);}disconnect(){state.observed=[];}};
 return state;
}

test('reduced motion enters everything at once and never marks the scope as hiding content',()=>{
 preference(true);
 globalThis.IntersectionObserver=class{constructor(){throw Error('must not observe under reduced motion');}};
 const scope=element(),target=element();
 observeReveal(scope,[[target,target]]);
 assert.equal(scope.dataset.reveal,undefined);
 assert.ok(target.classes.has('is-entered'));
});

test('each target enters once when its probe is visible; cleanup restores the static page',()=>{
 preference(false);const io=observer();
 const scope=element(),a=element(),probeA=element(),b=element(),probeB=element();
 const stop=observeReveal(scope,[[a,probeA],[b,probeB]]);
 assert.equal(scope.dataset.reveal,'ready');
 assert.deepEqual(io.observed,[probeA,probeB]);
 io.callback([{target:probeA,isIntersecting:true},{target:probeB,isIntersecting:false}]);
 assert.ok(a.classes.has('is-entered'));assert.ok(!b.classes.has('is-entered'));
 assert.deepEqual(io.observed,[probeB]);
 stop();
 assert.equal(scope.dataset.reveal,undefined);assert.ok(!a.classes.has('is-entered'));
});

test('keyboard focus inside a target reveals it, and switching to reduced motion reveals the rest',()=>{
 const media=preference(false);observer();
 const link={},scope=element(),a=element([link]),b=element();
 observeReveal(scope,[[a,a],[b,b]]);
 scope.listeners.focusin({target:link});
 assert.ok(a.classes.has('is-entered'));assert.ok(!b.classes.has('is-entered'));
 media.change(true);
 assert.ok(b.classes.has('is-entered'));
});
