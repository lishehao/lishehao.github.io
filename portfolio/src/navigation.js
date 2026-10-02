export const languageFromPath=path=>/^\/zh(?:\/|$)/.test(path)?'zh':'en';
export function languageURL(url,lang){
 const next=new URL(url);next.pathname=lang==='zh'?'/zh/':'/';return next;
}
let navigationVersion=0;
export function navigateTo(id,{history=true,behavior,focus=true}={}){
 const target=document.getElementById(id);if(!target)return;
 const version=++navigationVersion;
 // End an earlier smooth scroll before accepting the next navigation intent.
 window.scrollTo({top:scrollY,behavior:'instant'});
 const hash=id==='top'?'':`#${id}`;
 if(history&&location.hash!==hash)window.history.pushState(null,'',`${location.pathname}${location.search}${hash}`);
 const event=new CustomEvent('portfolio:navigate',{cancelable:true,detail:{id,behavior:behavior??(matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'),focus}});
 if(!window.dispatchEvent(event))return;
 if(id==='top'){
  window.scrollTo({top:0,behavior:'instant'});
  // A cancelled compositor scroll may deliver its final offset next frame.
  requestAnimationFrame(()=>{if(version===navigationVersion&&target.isConnected)window.scrollTo({top:0,behavior:'instant'});});
 }
 else target.scrollIntoView({behavior:event.detail.behavior,block:'start'});
 if(focus)target.focus({preventScroll:true});
}
