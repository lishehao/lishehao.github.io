import {useEffect,useRef,useState} from 'react';
import {galleryProjects} from './galleryProjects.js';
import {galleryTransition} from './galleryTransition.js';
import {navigateTo} from './navigation.js';
import {createVideoPlayback} from './videoPlayback.js';
import './projectGallery.css';

function GalleryRoom({project,index,lang}){
 const section=useRef(null),video=useRef(null),playback=useRef(null),[playing,setPlaying]=useState(false);
 const zh=lang==='zh',l=zh?1:0;
 useEffect(()=>{
  const room=section.current,v=video.current;
  const allowed=()=>{const r=v.getBoundingClientRect();return !document.hidden&&!room.inert&&r.bottom>0&&r.top<innerHeight&&r.right>0&&r.left<innerWidth;};
  const controller=createVideoPlayback(v,{allowed,onState:setPlaying});playback.current=controller;
  const cancel=()=>controller.cancel(),check=()=>{if(!allowed())cancel();};
  const observer=new IntersectionObserver(check);observer.observe(v);
  const mutation=new MutationObserver(check);mutation.observe(room,{attributes:true,attributeFilter:['inert','aria-hidden']});
  room.addEventListener('portfolio:room-deactivate',cancel);document.addEventListener('visibilitychange',check);window.addEventListener('pagehide',cancel);
  return()=>{observer.disconnect();mutation.disconnect();room.removeEventListener('portfolio:room-deactivate',cancel);document.removeEventListener('visibilitychange',check);window.removeEventListener('pagehide',cancel);controller.dispose();playback.current=null;};
 },[]);
 const next=index+1<galleryProjects.length?`project-${galleryProjects[index+1].id}`:'about';
 return <article ref={section} id={`project-${project.id}`} className="gallery-room" style={{'--room-color':project.color,'--room-ink':project.ink}} aria-labelledby={`title-${project.id}`}>
  <div className="gallery-room__sticky">
   <div className="gallery-room__heading"><span>{String(index+1).padStart(2,'0')} / {String(galleryProjects.length).padStart(2,'0')}</span><span>{project.medium[l]}</span><span>{zh?'精选项目':'SELECTED WORK'}</span></div>
   <div className="gallery-room__exhibit">
    <div className="gallery-room__frame">
     <video ref={video} controls={playing} playsInline preload="none" poster={project.poster}><source src={project.video} type="video/mp4"/></video>
     <button className="gallery-room__play" aria-pressed={playing} onClick={()=>playback.current?.toggle()}>{playing?(zh?'暂停演示':'Pause film'):(zh?'播放演示 ↗':'Play film ↗')}</button>
     {project.note&&<small>{project.note[l]}</small>}
    </div>
    <div className="gallery-room__label"><p>{project.subtitle}</p><h2 id={`title-${project.id}`} tabIndex={-1}>{project.title}</h2><p className="gallery-room__summary">{project.summary[l]}</p>
     <ol className="gallery-room__steps">{project.steps.map((step,i)=><li key={step[0]}><span>0{i+1}</span>{step[l]}</li>)}</ol>
     <div className="gallery-room__links"><a href={`${zh?'/zh':''}/projects/${project.slug}/`}>{zh?'完整项目介绍 ↗':'Read case study ↗'}</a><a href={project.repository} target="_blank" rel="noopener noreferrer">GitHub ↗</a>{project.live&&<a href={project.live} target="_blank" rel="noopener noreferrer">{zh?'体验产品 ↗':'Try it ↗'}</a>}</div>
    </div>
   </div>
   <div className="gallery-room__details">{project.features.map(f=><details key={f[0]}><summary>{f[l]}</summary><p>{f[2+l]}</p></details>)}<small>{project.stack}</small></div>
   <a className="gallery-room__next" onClick={event=>{if(event.button===0&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey){event.preventDefault();navigateTo(next);}}} href={`#${next}`}>{index+1<galleryProjects.length?(zh?'下一间展厅':'Next gallery'):(zh?'关于我':'About me')} ↓</a>
  </div>
 </article>;
}
export function ProjectGallery({lang}){
 const root=useRef(null);
 useEffect(()=>{
  const el=root.current,rooms=[...el.querySelectorAll('.gallery-room')],contents=rooms.map(room=>room.querySelector('.gallery-room__sticky'));
  const media=matchMedia('(max-width: 760px), (max-height: 650px)'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const mediaKey=()=>`${media.matches}:${reduced.matches}`;
  let frame=0,mediaFrame=0,detailFrame=0,detailCorrection=null,active=0,enabled=false,pending=null,deferredNavigation=null,detailsAnchor=null,readingDetails=false,lastAnchor=null,mediaAnchor=null,disposed=false,lastMedia=mediaKey();
  const heading=i=>rooms[i].querySelector('h2');
  function setActive(index){
   const focused=document.activeElement;
   rooms[index].inert=false;rooms[index].removeAttribute('aria-hidden');rooms[index].style.visibility='visible';
   if(rooms.some((room,i)=>i!==index&&room.contains(focused)))heading(index).focus({preventScroll:true});
   active=index;rooms.forEach((room,i)=>{if(i!==index)room.dispatchEvent(new Event('portfolio:room-deactivate'));room.inert=i!==index;room.setAttribute('aria-hidden',String(i!==index));});
  }
  function snapshot(){
   if(mediaFrame||mediaKey()!==lastMedia)return;
   const r=el.getBoundingClientRect();
   const about=document.getElementById('about'),a=about.getBoundingClientRect();
   if(about.contains(document.activeElement)&&a.top<innerHeight&&a.bottom>0){lastAnchor={index:null,node:about,y:a.top};return;}
   if(r.top>=innerHeight||r.bottom<=0){const about=document.getElementById('about'),a=about.getBoundingClientRect();lastAnchor=r.bottom<=0&&a.top<innerHeight&&a.bottom>0?{index:null,node:about,y:a.top}:null;return;}
   const focused=document.activeElement,selected=rooms.findIndex(room=>room.contains(focused));
   const index=selected>=0?selected:enabled?active:Math.max(0,rooms.findIndex(room=>room.getBoundingClientRect().bottom>0));
   const node=focused?.matches('summary')&&el.contains(focused)?focused:contents[index];
   lastAnchor={index,node,y:node.getBoundingClientRect().top};
  }
  function reset(){
   enabled=false;el.classList.remove('project-gallery--motion');
   rooms.forEach(room=>{room.style.transform='';room.style.visibility='';room.inert=false;room.removeAttribute('aria-hidden');});
  }
  function paint(){
   frame=0;if(disposed||document.hidden)return;
   if(enabled){
    const r=el.getBoundingClientRect(),v=galleryTransition(-r.top/Math.max(1,r.height-innerHeight));
    rooms[0].style.transform=`translate3d(${v.outX}%,0,0) scale(${v.outScale}) rotateY(${v.outAngle}deg)`;
    rooms[1].style.transform=`translate3d(${v.inX}%,0,0)`;
    // Move focus before hiding/inerting its previous room.
    if(active!==v.active)setActive(v.active);
    rooms[0].style.visibility=v.t===1?'hidden':'visible';rooms[1].style.visibility=v.t===0?'hidden':'visible';
    el.style.setProperty('--handoff-shade',v.shade);el.style.setProperty('--handoff-light',v.beam);el.style.setProperty('--handoff-light-x',`${v.beamX}%`);
   }
   if(pending&&Math.abs(scrollY-pending.top)<3){if(pending.focus)heading(pending.index).focus({preventScroll:true});pending=null;}
   snapshot();
  }
  function request(){if(!frame&&!document.hidden)frame=requestAnimationFrame(paint);}
  function roomTop(index){return enabled?scrollY+el.getBoundingClientRect().top+(el.offsetHeight-innerHeight)*(index===1?.76:0):scrollY+rooms[index].getBoundingClientRect().top;}
  function mediaChange(){
   if(mediaFrame)return;
   mediaAnchor=lastAnchor;pending=null;cancelAnimationFrame(frame);frame=0;
   // Let CSS media rules and the scene's preference listener settle together.
   mediaFrame=requestAnimationFrame(()=>{mediaFrame=requestAnimationFrame(()=>{mediaFrame=0;if(disposed)return;lastMedia=mediaKey();detailsAnchor=mediaAnchor;mediaAnchor=null;measure();const next=deferredNavigation;deferredNavigation=null;if(next)navigateTo(next.id,{...next,history:false});});});
  }
  function measure(){
   if(disposed)return;
   if(mediaFrame)return;
   if(mediaKey()!==lastMedia){mediaChange();return;}
   const anchor=detailsAnchor||lastAnchor,detailChange=Boolean(detailsAnchor);detailsAnchor=null;
   el.classList.toggle('project-gallery--reading',readingDetails);
   const fits=contents.every(content=>{const bounds=content.getBoundingClientRect();return content.scrollHeight<=innerHeight+2&&bounds.height<=innerHeight+2;});
   const next=!media.matches&&!reduced.matches&&!readingDetails&&!el.querySelector('details[open]')&&fits&&rooms.length===2;
   if(next!==enabled){
    if(next){enabled=true;el.classList.add('project-gallery--motion');setActive(anchor?.index??0);}
    else reset();
    if(anchor){
     if(enabled&&anchor.index!==null){window.scrollTo({top:roomTop(anchor.index),behavior:'instant'});paint();}
     else window.scrollTo({top:scrollY+anchor.node.getBoundingClientRect().top-anchor.y,behavior:'instant'});
    }
   }else if(anchor&&!enabled&&(detailChange||media.matches||reduced.matches||mediaKey()!==lastMedia)){window.scrollTo({top:scrollY+anchor.node.getBoundingClientRect().top-anchor.y,behavior:'instant'});}
   if(pending)pending.top=roomTop(pending.index);
   lastMedia=mediaKey();
   paint();
   if(detailChange){
    cancelAnimationFrame(detailFrame);detailCorrection=anchor;
    // Native detail/focus scrolling can finish one frame after the toggle.
    detailFrame=requestAnimationFrame(()=>{detailFrame=0;finishDetails();});
   }
  }
  function finishDetails(){const anchor=detailCorrection;detailCorrection=null;if(anchor&&!disposed){window.scrollTo({top:scrollY+anchor.node.getBoundingClientRect().top-anchor.y,behavior:'instant'});paint();}}
  function navigation(event){
   cancelAnimationFrame(detailFrame);detailFrame=0;detailCorrection=null;
   if(mediaFrame){event.preventDefault();deferredNavigation=event.detail;mediaAnchor=null;return;}
   const {id,behavior,focus}=event.detail,index=id==='work'?0:rooms.findIndex(room=>room.id===id);
   pending=null;
   if(index<0){if(id==='top'&&!el.querySelector('details[open]')){readingDetails=false;measure();}return;}
   event.preventDefault();
   // Explicit navigation starts a fresh gallery read, but an open detail keeps normal flow.
   if(!el.querySelector('details[open]'))readingDetails=false;
   measure();const top=roomTop(index);pending={index,top,focus};window.scrollTo({top,behavior});if(behavior==='instant')paint();
  }
  function beforeDetails(event){const summary=event.target.closest?.('summary');if(!summary||event.type==='keydown'&&!['Enter',' '].includes(event.key))return;cancelAnimationFrame(detailFrame);detailFrame=0;finishDetails();if(detailsAnchor)measure();const index=rooms.findIndex(room=>room.contains(summary));detailsAnchor={index,node:summary,y:summary.getBoundingClientRect().top};readingDetails=true;pending=null;}
  function detailToggle(){measure();}
  function visibility(){if(document.hidden){cancelAnimationFrame(frame);frame=0;pending=null;rooms.forEach(room=>room.dispatchEvent(new Event('portfolio:room-deactivate')));}else request();}
  function cancelNavigation(){pending=null;cancelAnimationFrame(detailFrame);detailFrame=0;detailCorrection=null;}
  const size=new ResizeObserver(measure);contents.forEach(content=>size.observe(content));size.observe(document.querySelector('.sky-play'));
  addEventListener('scroll',request,{passive:true});addEventListener('scrollend',snapshot);addEventListener('resize',measure);addEventListener('portfolio:navigate',navigation);addEventListener('wheel',cancelNavigation,{passive:true});addEventListener('touchstart',cancelNavigation,{passive:true});
  media.addEventListener('change',mediaChange);reduced.addEventListener('change',mediaChange);document.addEventListener('visibilitychange',visibility);el.addEventListener('click',beforeDetails,true);el.addEventListener('keydown',beforeDetails,true);el.addEventListener('toggle',detailToggle,true);
  measure();
  const initial=requestAnimationFrame(()=>{if(location.hash)navigateTo(location.hash.slice(1),{history:false,behavior:'instant',focus:false});});
  return()=>{disposed=true;cancelAnimationFrame(frame);cancelAnimationFrame(mediaFrame);cancelAnimationFrame(detailFrame);cancelAnimationFrame(initial);size.disconnect();removeEventListener('scroll',request);removeEventListener('scrollend',snapshot);removeEventListener('resize',measure);removeEventListener('portfolio:navigate',navigation);removeEventListener('wheel',cancelNavigation);removeEventListener('touchstart',cancelNavigation);media.removeEventListener('change',mediaChange);reduced.removeEventListener('change',mediaChange);document.removeEventListener('visibilitychange',visibility);el.removeEventListener('click',beforeDetails,true);el.removeEventListener('keydown',beforeDetails,true);el.removeEventListener('toggle',detailToggle,true);reset();};
 },[]);
 return <section ref={root} id="work" className="project-gallery" tabIndex={-1} aria-label={lang==='zh'?'项目画廊':'Project gallery'}><div className="project-gallery__stage">{galleryProjects.map((project,index)=><GalleryRoom key={project.id} {...{project,index,lang}}/>)}<div className="gallery-handoff" aria-hidden="true"><div className="gallery-handoff__shade"/><div className="gallery-handoff__light"/></div></div></section>;
}
