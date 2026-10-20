// One-shot entrances. Each target gets `is-entered` the first time its probe is
// substantially visible or anything inside it receives focus. Content is only
// hidden once `data-reveal="ready"` is set, which never happens under reduced
// motion or without IntersectionObserver, so nothing can stay invisible.
export function observeReveal(scope,pairs,{threshold=.3}={}){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const enter=target=>target.classList.add('is-entered');
 const enterAll=()=>pairs.forEach(([target])=>enter(target));
 if(reduced.matches||typeof IntersectionObserver==='undefined'){enterAll();return()=>{};}
 scope.dataset.reveal='ready';
 const owner=new Map(pairs.map(([target,probe])=>[probe,target]));
 const observer=new IntersectionObserver(entries=>{
  for(const entry of entries)if(entry.isIntersecting){enter(owner.get(entry.target));observer.unobserve(entry.target);}
 },{threshold});
 owner.forEach((target,probe)=>observer.observe(probe));
 const focus=event=>{const pair=pairs.find(([target])=>target.contains(event.target));if(pair)enter(pair[0]);};
 const preference=()=>{if(reduced.matches)enterAll();};
 scope.addEventListener('focusin',focus);reduced.addEventListener('change',preference);
 return()=>{observer.disconnect();scope.removeEventListener('focusin',focus);reduced.removeEventListener('change',preference);delete scope.dataset.reveal;pairs.forEach(([target])=>target.classList.remove('is-entered'));};
}
