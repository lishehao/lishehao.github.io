import {useEffect,useState} from 'react';
import '@fontsource/anton';
import '@fontsource/figtree/400.css';
import '@fontsource/figtree/500.css';
import '@fontsource/figtree/600.css';
import '@fontsource/source-serif-4/400.css';
import '@fontsource/source-serif-4/500.css';
import './daybook.css';
import {PocketPlanet} from './pocket/PocketPlanet.jsx';
import {ProjectGallery} from './ProjectGallery.jsx';

export function DaybookPortfolio(){
 const [lang,setLang]=useState(()=>location.pathname.startsWith('/zh')?'zh':'en'),zh=lang==='zh';
 useEffect(()=>{document.documentElement.lang=zh?'zh-CN':'en';document.title='Shehao Li — Selected Work';},[zh]);
 const scrollTo=id=>document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
 return <main className="daybook">
  <header id="top" className="daybook-header">
   <button className="daybook-wordmark" type="button" onClick={()=>scrollTo('top')}>SHEHAO LI</button>
   <nav aria-label={zh?'主导航':'Primary navigation'}><button onClick={()=>scrollTo('work')}>{zh?'作品':'Work'}</button><a href="/resume/">{zh?'简历':'Resume'}</a><button onClick={()=>scrollTo('about')}>{zh?'关于':'About'}</button></nav>
   <button className="daybook-language" onClick={()=>setLang(zh?'en':'zh')} aria-label={zh?'Switch to English':'切换为中文'}>{zh?'EN':'中文'}</button>
  </header>
  <PocketPlanet lang={lang} onWork={()=>scrollTo('work')}/>
  <ProjectGallery lang={lang}/>
  <section id="about" className="daybook-about">
   <div><h2>{zh?'先好奇，再把它做出来。':'Curious, then concrete.'}</h2></div>
   <div className="daybook-about__body"><p>{zh?'加州大学圣地亚哥分校数学–计算机专业。我做 AI 产品、互动体验，以及让日常工程工作更可靠的工具。':'Math–CS at UC San Diego. I build AI products, interactive experiences, and tools for everyday engineering work.'}</p><a href="https://github.com/lishehao" target="_blank" rel="noreferrer">GitHub / lishehao ↗</a><a href="/resume/">{zh?'查看简历 ↗':'Resume ↗'}</a></div>
   <button className="daybook-top" onClick={()=>scrollTo('top')}>{zh?'回到顶部':'Back to top'}</button>
  </section>
  <footer className="daybook-footer"><span>© {new Date().getFullYear()} Shehao Li</span></footer>
 </main>;
}
