import {useEffect,useRef,useState} from 'react';
import './pocketExperience.css';
import characterPreview from './planet-character-preview.webp';

const lightweightQuery='(max-width:900px), (max-height:500px), (pointer:coarse), (prefers-reduced-motion:reduce)';
const prefersLight=()=>typeof matchMedia==='undefined'||matchMedia(lightweightQuery).matches||Boolean(navigator.connection?.saveData);

export function PocketExperience({lang,onWork}){
 const [light,setLight]=useState(prefersLight),[enabled,setEnabled]=useState(()=>!prefersLight()),[Scene,setScene]=useState(null),[error,setError]=useState(false);
 const host=useRef(null),enable=useRef(null),returnFocus=useRef(false),zh=lang==='zh';
 useEffect(()=>{
  const media=matchMedia(lightweightQuery),reduced=matchMedia('(prefers-reduced-motion:reduce)');let previous=prefersLight();
  const preserveFocus=()=>{if(document.activeElement.closest('.sky-play'))returnFocus.current=true;};
  const update=()=>{const next=prefersLight();setLight(next);if(next!==previous){if(next)preserveFocus();setEnabled(!next);previous=next;}};
  const motion=()=>{update();if(reduced.matches){preserveFocus();setEnabled(false);}};
  media.addEventListener('change',update);reduced.addEventListener('change',motion);navigator.connection?.addEventListener('change',update);
  return()=>{media.removeEventListener('change',update);reduced.removeEventListener('change',motion);navigator.connection?.removeEventListener('change',update);};
 },[]);
 useEffect(()=>{
  if(!enabled||Scene)return;let cancelled=false;setError(false);
  import('./pocket/PocketPlanet.jsx').then(module=>{if(!cancelled)setScene(()=>module.PocketPlanet);}).catch(()=>{if(!cancelled){setError(true);setEnabled(false);}});
  return()=>{cancelled=true;};
 },[enabled,Scene]);
 useEffect(()=>{if(!enabled&&returnFocus.current){returnFocus.current=false;enable.current?.focus({preventScroll:true});}},[enabled]);
 // This class also wins over scene CSS after an optional scene has been closed.
 useEffect(()=>{const daybook=host.current.closest('.daybook');daybook.classList.toggle('daybook--compact',light);return()=>daybook.classList.remove('daybook--compact');},[light]);
 const close=()=>{returnFocus.current=true;setEnabled(false);};
 return <div className="pocket-experience" ref={host}>{enabled&&Scene?<Scene {...{lang,onWork}} compact={light} onClose={light?close:undefined}/>:<section className={`sky-play planet-lite ${light?'planet-lite--compact':'planet-lite--desktop'}`} aria-label={zh?'口袋星球静态预览':'Pocket Planet static preview'}>
  <div className="planet-lite__stage">
   <div className="planet-lite__orbit" aria-hidden="true"/>
   <h1>POCKET PLANET</h1>
   {light&&<img className="planet-lite__character" src={characterPreview} width="320" height="400" alt={zh?'口袋星球的黄色外套小蛇人物':'Pocket Planet character in a yellow coat'} decoding="async"/>}
   <div className="planet-lite__actions"><button onClick={onWork}>{zh?'查看作品':'Selected work'} ↓</button><button ref={enable} onClick={()=>enabled?close():setEnabled(true)}>{enabled?(zh?'取消加载':'Cancel loading'):(zh?'开启互动':'Enable interaction')}</button></div>
   <p className="planet-lite__note" role="status">{error?(zh?'互动暂时无法打开，仍可查看作品。':'Interaction could not load. Projects remain available.'):enabled?(zh?'正在打开互动…':'Opening interaction…'):(zh?'静态预览 · 互动需额外下载约 13MB':'Static preview · interaction downloads about 13MB')}</p>
  </div>
 </section>}</div>;
}
