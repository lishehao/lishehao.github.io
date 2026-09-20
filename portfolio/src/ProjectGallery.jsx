import {useEffect,useRef,useState} from 'react';
import {galleryProjects} from './galleryProjects.js';
import './projectGallery.css';

function GalleryRoom({project,index,lang}){
 const section=useRef(null),stage=useRef(null),video=useRef(null),[playing,setPlaying]=useState(false);
 const zh=lang==='zh',l=zh?1:0;
 useEffect(()=>{
  const media=matchMedia('(prefers-reduced-motion: reduce)');let frame=0;
  function paint(){frame=0;const r=section.current.getBoundingClientRect();
   const progress=media.matches?0:Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-innerHeight)));
   const exit=Math.max(0,(progress-.55)/.45);
   stage.current.style.transform=`translate3d(0,${-exit*28}px,0) scale(${1-exit*.035})`;
  }
  const request=()=>{if(!frame)frame=requestAnimationFrame(paint);};
  const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)video.current?.pause();});observer.observe(section.current);
  addEventListener('scroll',request,{passive:true});addEventListener('resize',request);media.addEventListener('change',request);request();
  return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',request);removeEventListener('resize',request);media.removeEventListener('change',request);observer.disconnect();};
 },[]);
 async function toggle(){if(video.current.paused){try{await video.current.play();}catch{setPlaying(false);}}else video.current.pause();}
 return <article ref={section} id={`project-${project.id}`} className="gallery-room" style={{'--room-color':project.color,'--room-ink':project.ink}} aria-labelledby={`title-${project.id}`}>
  <div className="gallery-room__sticky">
   <div className="gallery-room__heading"><span>{String(index+1).padStart(2,'0')} / {String(galleryProjects.length).padStart(2,'0')}</span><span>{project.medium[l]}</span><span>{zh?'精选项目':'SELECTED WORK'}</span></div>
   <div className="gallery-room__exhibit" ref={stage}>
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
   <a className="gallery-room__next" href={index+1<galleryProjects.length?`#project-${galleryProjects[index+1].id}`:'#about'}>{index+1<galleryProjects.length?(zh?'下一间展厅':'Next gallery'):(zh?'关于我':'About me')} ↓</a>
  </div>
 </article>;
}
export function ProjectGallery({lang}){return <section id="work" className="project-gallery" aria-label={lang==='zh'?'项目画廊':'Project gallery'}>{galleryProjects.map((project,index)=><GalleryRoom key={project.id} {...{project,index,lang}}/>)}</section>;}
