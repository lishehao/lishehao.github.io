import {useEffect,useRef,useState} from 'react';
import {galleryProjects} from './galleryProjects.js';
import {galleryTransition} from './galleryTransition.js';
import './projectGallery.css';

function GalleryRoom({project,index,lang,onNavigate}){
 const section=useRef(null),video=useRef(null),[playing,setPlaying]=useState(false);
 const zh=lang==='zh',l=zh?1:0;
 useEffect(()=>{
  const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)video.current?.pause();});observer.observe(section.current);
  return()=>observer.disconnect();
 },[]);
 async function toggle(){if(video.current.paused){try{await video.current.play();}catch{setPlaying(false);}}else video.current.pause();}
 return <article ref={section} id={`project-${project.id}`} className="gallery-room" style={{'--room-color':project.color,'--room-ink':project.ink}} aria-labelledby={`title-${project.id}`}>
  <div className="gallery-room__sticky">
   <div className="gallery-room__heading"><span>{String(index+1).padStart(2,'0')} / {String(galleryProjects.length).padStart(2,'0')}</span><span>{project.medium[l]}</span><span>{zh?'精选项目':'SELECTED WORK'}</span></div>
   <div className="gallery-room__exhibit">
    <div className="gallery-room__frame">
     <video ref={video} controls={playing} playsInline preload="none" poster={project.poster} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>setPlaying(false)}><source src={project.video} type="video/mp4"/></video>
     <button className="gallery-room__play" onClick={toggle}>{playing?(zh?'暂停演示':'Pause film'):(zh?'播放演示 ↗':'Play film ↗')}</button>
     {project.note&&<small>{project.note[l]}</small>}
    </div>
    <div className="gallery-room__label"><p>{project.subtitle}</p><h2 id={`title-${project.id}`}>{project.title}</h2><p className="gallery-room__summary">{project.summary[l]}</p>
     <ol className="gallery-room__steps">{project.steps.map((step,i)=><li key={step[0]}><span>0{i+1}</span>{step[l]}</li>)}</ol>
     <div className="gallery-room__links"><a href={`${zh?'/zh':''}/projects/${project.slug}/`}>{zh?'完整项目介绍 ↗':'Read case study ↗'}</a><a href={project.repository} target="_blank" rel="noreferrer">GitHub ↗</a>{project.live&&<a href={project.live} target="_blank" rel="noreferrer">{zh?'体验产品 ↗':'Try it ↗'}</a>}</div>
    </div>
   </div>
   <div className="gallery-room__details">{project.features.map(f=><details key={f[0]}><summary>{f[l]}</summary><p>{f[2+l]}</p></details>)}<small>{project.stack}</small></div>
   <a className="gallery-room__next" onClick={event=>{if(index===0)onNavigate(event,1)}} href={index+1<galleryProjects.length?`#project-${galleryProjects[index+1].id}`:'#about'}>{index+1<galleryProjects.length?(zh?'下一间展厅':'Next gallery'):(zh?'关于我':'About me')} ↓</a>
  </div>
 </article>;
}
export function ProjectGallery({lang}){
 const root=useRef(null),enabled=useRef(false);
 useEffect(()=>{
  const el=root.current,rooms=[...el.querySelectorAll('.gallery-room')],contents=rooms.map(room=>room.querySelector('.gallery-room__sticky'));
  const media=matchMedia('(prefers-reduced-motion: reduce), (max-width: 760px), (max-height: 650px)');let frame=0,active=-1;
  function reset(){el.classList.remove('project-gallery--motion');enabled.current=false;rooms.forEach(room=>{room.style.transform='';room.style.visibility='';room.inert=false;room.removeAttribute('aria-hidden')});}
  function paint(){frame=0;if(document.hidden||!enabled.current)return;const r=el.getBoundingClientRect(),p=-r.top/Math.max(1,r.height-innerHeight),v=galleryTransition(p);
   rooms[0].style.transform=`translate3d(${v.outX}%,0,0) scale(${v.outScale}) rotateY(${v.outAngle}deg)`;
   rooms[1].style.transform=`translate3d(${v.inX}%,0,0)`;
   rooms[0].style.visibility=v.t===1?'hidden':'visible';rooms[1].style.visibility=v.t===0?'hidden':'visible';
   el.style.setProperty('--handoff-shade',v.shade);el.style.setProperty('--handoff-light',v.beam);el.style.setProperty('--handoff-light-x',`${v.beamX}%`);
   if(active!==v.active){active=v.active;rooms.forEach((room,i)=>{room.inert=i!==active;room.setAttribute('aria-hidden',String(i!==active));if(i!==active)room.querySelector('video')?.pause()});}
  }
  function request(){if(!frame&&!document.hidden)frame=requestAnimationFrame(paint)}
  function measure(){const fits=contents.every(content=>content.scrollHeight<=innerHeight+2);if(media.matches||!fits||rooms.length!==2){reset();return;}el.classList.add('project-gallery--motion');enabled.current=true;active=-1;request();}
  const size=new ResizeObserver(measure);contents.forEach(content=>size.observe(content));
  function visibility(){if(document.hidden){cancelAnimationFrame(frame);frame=0;rooms.forEach(room=>room.querySelector('video')?.pause())}else request();}
  addEventListener('scroll',request,{passive:true});addEventListener('resize',measure);media.addEventListener('change',measure);document.addEventListener('visibilitychange',visibility);measure();
  return()=>{cancelAnimationFrame(frame);size.disconnect();removeEventListener('scroll',request);removeEventListener('resize',measure);media.removeEventListener('change',measure);document.removeEventListener('visibilitychange',visibility);reset();};
 },[]);
 function navigate(event,index){if(!enabled.current||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();const el=root.current,r=el.getBoundingClientRect();window.scrollTo({top:scrollY+r.top+(el.offsetHeight-innerHeight)*(index===1?.76:0),behavior:'smooth'});}
 return <section ref={root} id="work" className="project-gallery" aria-label={lang==='zh'?'项目画廊':'Project gallery'}><div className="project-gallery__stage">{galleryProjects.map((project,index)=><GalleryRoom key={project.id} {...{project,index,lang}} onNavigate={navigate}/>)}<div className="gallery-handoff" aria-hidden="true"><div className="gallery-handoff__shade"/><div className="gallery-handoff__light"/></div></div></section>;
}
