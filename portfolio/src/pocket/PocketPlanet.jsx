import { useEffect, useRef, useState } from 'react';
import './pocketPlanet.css';

const TITLE='POCKET PLANET';
// Boot prints from the hero down to the chapter title: [x from centre, y below the ground's edge, heading].
const TRAIL=[['-1.4vw','10svh','170deg'],['3.6vw','14.9svh','165deg'],['2.5vw','19.7svh','168deg'],['6.3vw','24.6svh','175deg'],['3.5vw','29.4svh','185deg'],['5.3vw','34.3svh','192deg'],['0.8vw','39.1svh','195deg'],['1.4vw','44svh','190deg']];

export function PocketPlanet({lang,onWork}){
 const root=useRef(null),host=useRef(null),api=useRef(null),wipe=useRef(null),backlight=useRef(null);
 const [failed,setFailed]=useState(false),[ready,setReady]=useState(false),[erasing,setErasing]=useState(false);
 const erasingRef=useRef(false);
 const langRef=useRef(lang);langRef.current=lang;
 // These transient snapshots have no rendered UI; refs avoid hover commits.
 const uiRef=useRef({hint:'',inventory:false});
 const setInventory=value=>{uiRef.current.inventory=value;};
 useEffect(()=>{
  let cancelled=false,cleanup;
  // Start the WebGL scene once the page has loaded and the browser is idle (at most 1.2 s later),
  // so the hero's images are not competing with the 150 KB scene chunk.
  const ready=new Promise(resolve=>{const idle=()=>(window.requestIdleCallback||(f=>setTimeout(f,1)))(resolve,{timeout:1200});
   if(document.readyState==='complete')idle();else addEventListener('load',idle,{once:true});});
  ready.then(()=>cancelled?null:import('./scene.js')).then(module=>{
   if(!module||cancelled)return;const {mountPocketScene}=module;
   try{sessionStorage.removeItem('pocket-reload');}catch{}
   if(!cancelled)cleanup=mountPocketScene({root,host,api,wipe,backlight,uiRef,setInventory,setFailed,setReady,setErasing,erasingRef,langRef});
  },()=>{
   if(cancelled)return;
   let tried=true;try{tried=sessionStorage.getItem('pocket-reload')==='1';sessionStorage.setItem('pocket-reload','1');}catch{}
   if(tried)setFailed(true);else location.reload();
  });
  return()=>{cancelled=true;cleanup?.();};
 },[]);
 return <section className="sky-play" ref={root} data-ready={ready?'true':undefined} aria-label={lang==='zh'?'我的兴趣空间':'A few things I love'}>
  <div className="sky-play__stage">
   <div className="sky-play__backdrop"/>
   <canvas className="sky-play__wipe" ref={wipe} aria-hidden="true"/>
   <canvas className="sky-play__backlight" ref={backlight} aria-hidden="true"/>
   <div className="sky-play__ground"/>
   <div className="sky-play__chapter" aria-hidden="true"><ol className="sky-play__trail">{TRAIL.map((step,i)=><li key={i} style={{'--i':i,'--x':step[0],'--y':step[1],'--turn':step[2]}}/>)}</ol><p>SELECTED WORK</p></div>
   <div className="sky-play__editorial"><h1 aria-label={TITLE}>{[...TITLE].map((letter,i)=><span key={i} aria-hidden="true" style={{'--i':i}}>{letter===' '?' ':letter}</span>)}</h1></div>
   <div className="sky-play__canvas" ref={host} aria-hidden="true"/>
   {(!ready||failed)&&<p className="sky-play__loading" role="status">{failed?(lang==='zh'?'场景加载失败，请刷新重试。':'Scene could not load. Please refresh.'):(lang==='zh'?'正在打开口袋星球…':'Opening Pocket Planet…')}</p>}
   <div className="sky-play__actions" aria-label={lang==='zh'?'小蛇互动':'Meet the snake'}>{[['left','向左走','Walk left'],['head','换表情','Change mood'],['body','换装','Change outfit'],['pocket','掏口袋','Pocket surprise'],['right','向右走','Walk right']].map(([action,zh,en])=><button key={action} data-scene-action={action} aria-label={lang==='zh'?zh:en} onFocus={()=>setInventory(action==='pocket')} onBlur={()=>setInventory(false)} onMouseEnter={()=>setInventory(action==='pocket')} onMouseLeave={()=>setInventory(false)} onClick={()=>api.current?.act(action)}><span className="sky-play__action-full">{lang==='zh'?zh:en}</span><span className="sky-play__action-short" aria-hidden="true">{{left:'←',right:'→',head:lang==='zh'?'表情':'Mood',body:lang==='zh'?'换装':'Outfit',pocket:lang==='zh'?'口袋':'Pocket'}[action]}</span></button>)}</div>
   <div className="sky-play__controls"><button className="sky-play__eraser" data-scene-action="eraser" aria-pressed={erasing} aria-label={lang==='zh'?'橡皮擦：在背景上拖动擦除':'Eraser: drag on the background to erase'} onClick={()=>api.current?.setErasing(!erasing)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 14 9-10a2 2 0 0 1 3 0l5 5a2 2 0 0 1 0 3l-8 9H8l-4-4a2 2 0 0 1 0-3Z"/><path d="m9 9 8 8M12 21h10"/></svg>{lang==='zh'?'橡皮擦':'Eraser'}</button><button onClick={onWork}>{lang==='zh'?'查看作品':'Selected work'} ↓</button></div>
  </div>
 </section>;
}
