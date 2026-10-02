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
import {languageFromPath,languageURL,navigateTo} from './navigation.js';

export function DaybookPortfolio(){
 const [lang,setLang]=useState(()=>languageFromPath(location.pathname)),zh=lang==='zh';
 useEffect(()=>{document.documentElement.lang=zh?'zh-CN':'en';document.title='Shehao Li — Selected Work';},[zh]);
 useEffect(()=>{const previous=history.scrollRestoration;const restore=()=>{setLang(languageFromPath(location.pathname));navigateTo(location.hash.slice(1)||'top',{history:false,behavior:'instant'});};history.scrollRestoration='manual';addEventListener('popstate',restore);addEventListener('hashchange',restore);return()=>{removeEventListener('popstate',restore);removeEventListener('hashchange',restore);history.scrollRestoration=previous;};},[]);
 const scrollTo=id=>navigateTo(id);
 function switchLanguage(){const next=zh?'en':'zh';history.pushState(null,'',languageURL(location.href,next));setLang(next);}
 return <main className="daybook">
  <header id="top" className="daybook-header" tabIndex={-1}>
   <button className="daybook-wordmark" type="button" onClick={()=>scrollTo('top')}>SHEHAO LI</button>
   <nav aria-label={zh?'主导航':'Primary navigation'}><button onClick={()=>scrollTo('work')}>{zh?'作品':'Work'}</button><a href="/resume/">{zh?'简历':'Resume'}</a><button onClick={()=>scrollTo('about')}>{zh?'关于':'About'}</button></nav>
   <div className="daybook-header__links"><a className="daybook-github" href="https://github.com/lishehao" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.65 1.23 3.29.94.1-.73.4-1.23.72-1.51-2.5-.29-5.13-1.25-5.13-5.55 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16A10.7 10.7 0 0 1 12 6.13c.95 0 1.9.13 2.8.38 2.14-1.45 3.08-1.16 3.08-1.16.61 1.55.23 2.69.11 2.98.72.79 1.15 1.8 1.15 3.03 0 4.32-2.64 5.26-5.15 5.54.4.35.76 1.04.76 2.1v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"/></svg><span>GitHub</span></a><button className="daybook-language" onClick={switchLanguage} aria-label={zh?'Switch to English':'切换为中文'}>{zh?'EN':'中文'}</button></div>
  </header>
  <PocketPlanet lang={lang} onWork={()=>scrollTo('work')}/>
  <ProjectGallery lang={lang}/>
  <section id="about" className="daybook-about" tabIndex={-1}>
   <div><h2>{zh?'先好奇，再把它做出来。':'Curious, then concrete.'}</h2></div>
   <div className="daybook-about__body"><p>{zh?'加州大学圣地亚哥分校数学–计算机专业。我做 AI 产品、互动体验，以及让日常工程工作更可靠的工具。':'Math–CS at UC San Diego. I build AI products, interactive experiences, and tools for everyday engineering work.'}</p><a href="https://github.com/lishehao" target="_blank" rel="noreferrer">GitHub / lishehao ↗</a><a href="/resume/">{zh?'查看简历 ↗':'Resume ↗'}</a></div>
   <button className="daybook-top" onClick={()=>scrollTo('top')}>{zh?'回到顶部':'Back to top'}</button>
  </section>
  <footer className="daybook-footer"><span>© {new Date().getFullYear()} Shehao Li</span></footer>
 </main>;
}
