import test from 'node:test';
import assert from 'node:assert/strict';
import {claimReload,clearReload} from '../src/pocket/reloadOnce.js';

function memory(){const data=new Map();return {data,getItem:k=>data.has(k)?data.get(k):null,setItem:(k,v)=>{data.set(k,String(v));},removeItem:k=>{data.delete(k);}};}

test('working storage allows one reload per failure streak, then clears',()=>{
 const s=memory(),get=()=>s;
 assert.equal(claimReload(get),true);
 assert.equal(claimReload(get),false);
 clearReload(get);
 assert.equal(claimReload(get),true);
});

test('storage that reads but throws on write never reloads',()=>{
 const s={getItem:()=>null,setItem:()=>{throw new DOMException('full','QuotaExceededError');},removeItem(){}};
 for(let i=0;i<3;i++)assert.equal(claimReload(()=>s),false);
});

test('storage that reads but silently drops writes never reloads',()=>{
 const s={getItem:()=>null,setItem(){},removeItem(){}};
 for(let i=0;i<3;i++)assert.equal(claimReload(()=>s),false);
});

test('blocked storage never reloads and clearing does not throw',()=>{
 const get=()=>{throw new DOMException('denied','SecurityError');};
 assert.equal(claimReload(get),false);
 assert.doesNotThrow(()=>clearReload(get));
});

test('a read error after a successful write does not reload',()=>{
 let reads=0;const s={getItem:()=>{if(reads++)throw new Error('read');return null;},setItem(){},removeItem(){}};
 assert.equal(claimReload(()=>s),false);
});
