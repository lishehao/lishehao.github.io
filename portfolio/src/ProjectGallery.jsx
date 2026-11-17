import {useEffect, useRef, useState} from 'react';
import {galleryProjects} from './galleryProjects.js';
import {followSection} from './navigation.js';
import {createVideoPlayback} from './videoPlayback.js';
import {observeReveal} from './reveal.js';
import './projectGallery.css';

function ProjectFilm({project, zh}) {
  const video = useRef(null);
  const playback = useRef(null);
  const [state, setState] = useState('idle');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = video.current;
    const allowed = () => {
      const rect = element.getBoundingClientRect();
      return !document.hidden && rect.bottom > 0 && rect.top < innerHeight;
    };
    const controller = createVideoPlayback(element, {
      allowed,
      onState: status => {
        setState(status);
        if (status === 'playing') setStarted(true);
      },
    });
    playback.current = controller;

    const check = () => { if (!allowed()) controller.cancel(); };
    const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(check) : null;
    observer?.observe(element);
    document.addEventListener('visibilitychange', check);
    window.addEventListener('pagehide', controller.cancel);
    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', check);
      window.removeEventListener('pagehide', controller.cancel);
      controller.dispose();
      playback.current = null;
    };
  }, []);

  const labels = zh
    ? {idle: '播放演示', loading: '取消加载', playing: '暂停演示', error: '重试播放'}
    : {idle: 'Play demo', loading: 'Cancel loading', playing: 'Pause demo', error: 'Retry video'};

  const showPreview = !started || state === 'error';
  function toggle() {
    const element = video.current;
    const rect = element.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= innerHeight) {
      element.scrollIntoView({behavior: 'instant', block: 'center'});
    }
    playback.current?.toggle();
  }

  return (
    <div className="gallery-room__frame">
      <div className="gallery-room__media" data-preview={showPreview || undefined}>
        <video ref={video} controls={started && state !== 'error'} playsInline muted preload="none"
          width="1920" height="1080" aria-label={`${project.title} ${zh ? '演示' : 'demo'}`}>
          {project.videoWebm && <source src={project.videoWebm} type="video/webm" />}
          <source src={project.video} type="video/mp4" />
        </video>
        {showPreview &&
          <img src={project.poster} width="1920" height="1080" alt="" loading="lazy" decoding="async" />}
      </div>
      <div className="gallery-room__playback">
        <button type="button" className="gallery-room__play" onClick={toggle}>
          {labels[state]}
        </button>
        {state === 'loading' && <span role="status">{zh ? '正在加载演示…' : 'Loading demo…'}</span>}
        {state === 'error' && <span role="status">{zh ? '演示加载失败。' : 'The demo could not play.'} <a href={project.video}>{zh ? '打开视频' : 'Open video'}</a></span>}
      </div>
      {project.note && <small>{project.note[zh ? 1 : 0]}</small>}
    </div>
  );
}

function GalleryRoom({project, index, lang}) {
  const zh = lang === 'zh';
  const languageIndex = zh ? 1 : 0;
  const next = galleryProjects[index + 1];
  return (
    <article id={`project-${project.id}`} className="gallery-room"
      style={{'--room-color': project.color, '--room-ink': project.ink}}
      aria-labelledby={`title-${project.id}`}>
      <div className="gallery-room__heading">{project.medium[languageIndex]}</div>
      <div className="gallery-room__exhibit">
        <div className="gallery-room__label">
          <h2 id={`title-${project.id}`} tabIndex={-1} data-section-heading>{project.title}</h2>
          <p className="gallery-room__subtitle">{project.subtitle}</p>
          <p className="gallery-room__summary">{project.summary[languageIndex]}</p>
          <div className="gallery-room__links">
            {project.caseStudy && <a href={`${zh ? '/zh' : ''}/projects/${project.slug}/`}>{zh ? '完整项目介绍 ↗' : 'Read case study ↗'}</a>}
            <a href={project.repository} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">{zh ? '体验产品 ↗' : 'Try it ↗'}</a>}
          </div>
          <ol className="gallery-room__steps">{project.steps.map((step, i) =>
            <li key={step[0]}><span aria-hidden="true">0{i + 1}</span>{step[languageIndex]}</li>
          )}</ol>
        </div>
        <ProjectFilm project={project} zh={zh} />
      </div>
      <div className="gallery-room__details">
        {project.features.map(feature =>
          <details key={feature[0]}><summary>{feature[languageIndex]}</summary><p>{feature[2 + languageIndex]}</p></details>
        )}
        <small>{project.stack}</small>
        {project.illustration && <img className="gallery-room__keeper" src={project.illustration.src}
          width={project.illustration.width} height={project.illustration.height} alt="" loading="lazy" decoding="async" />}
      </div>
      <div className="gallery-room__navigation">
        <a href="#work" onClick={followSection}>{zh ? '↑ 作品目录' : '↑ Work index'}</a>
        <a href={next ? `#project-${next.id}` : '#about'} onClick={followSection}>
          {next ? (zh ? `下一个 · ${next.title}` : `Next · ${next.title}`) : (zh ? '关于我' : 'About me')} ↓
        </a>
      </div>
    </article>
  );
}

export function ProjectGallery({lang}) {
  const scope = useRef(null);
  const zh = lang === 'zh';

  useEffect(() => {
    const el = scope.current;
    const rooms = [...el.querySelectorAll('.gallery-room')];
    return observeReveal(el, rooms.map(room => [room, room.querySelector('.gallery-room__exhibit')]), {threshold: .15});
  }, []);

  return (
    <section ref={scope} id="work" className="project-gallery" aria-labelledby="work-title">
      <header className="project-gallery__index">
        <h2 id="work-title" tabIndex={-1} data-section-heading>{zh ? '精选作品' : 'Selected work'}</h2>
        <nav aria-label={zh ? '跳转到项目' : 'Jump to a project'}>
          {galleryProjects.map(project =>
            <a key={project.id} href={`#project-${project.id}`} onClick={followSection}>{project.title}</a>
          )}
        </nav>
      </header>
      {galleryProjects.map((project, index) => <GalleryRoom key={project.id} {...{project, index, lang}} />)}
    </section>
  );
}
