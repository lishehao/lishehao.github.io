import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';

const base='https://lishehao.github.io',folder='evidence',checks=[],errors=[],matrix=[];
await mkdir(folder,{recursive:true});
const browser=await chromium.launch({args:['--no-sandbox','--enable-unsafe-swiftshader']});
const check=(name,pass,detail)=>{checks.push({name,pass,detail});console.log(JSON.stringify({name,pass}));};
const settle=page=>page.waitForTimeout(1200);
try{
 for(const config of [{width:320,height:568},{width:390,height:844},{width:1440,height:900},{width:390,height:844,reduced:true}]){
  const mobile=config.width<900,label=`${config.width}x${config.height}${config.reduced?'-reduced':''}`;
  const context=await browser.newContext({viewport:{width:config.width,height:config.height},hasTouch:mobile,isMobile:mobile,reducedMotion:config.reduced?'reduce':'no-preference',extraHTTPHeaders:{'Cache-Control':'no-cache'}}),page=await context.newPage(),requests=[],responses=[];
  page.setDefaultTimeout(30000);page.on('pageerror',e=>errors.push({label,message:e.message}));page.on('request',r=>requests.push(r.url()));page.on('response',r=>{if(r.status()>=400&&r.url().startsWith(base))responses.push({url:r.url(),status:r.status()});});
  await page.addInitScript(()=>{window.glRecords=[];const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){const gl=get.call(this,type,...args);if(gl&&['webgl','webgl2'].includes(type)){const r={gl,draws:0};glRecords.push(r);for(const name of ['drawArrays','drawElements']){const original=gl[name].bind(gl);gl[name]=(...a)=>{r.draws++;return original(...a);};}}return gl;};});
  const cdp=await context.newCDPSession(page);await cdp.send('Network.enable');await cdp.send('Network.setCacheDisabled',{cacheDisabled:true});
  const response=await page.goto(base+'/',{waitUntil:'domcontentloaded'});await page.waitForSelector('.daybook');
  if(mobile)await page.waitForFunction(()=>document.querySelector('.planet-lite__character')?.complete&&document.querySelector('.planet-lite__character')?.naturalWidth===320);
  else await page.waitForFunction(()=>document.querySelector('.sky-play__canvas canvas')&&!document.querySelector('.sky-play__loading'));
  await settle(page);
  const initial=await page.evaluate(()=>{const a=document.querySelector('.daybook-github'),r=a.getBoundingClientRect(),image=document.querySelector('.planet-lite__character'),ir=image?.getBoundingClientRect();return {script:document.querySelector('script[type=module]').getAttribute('src'),github:{href:a.href,width:r.width,height:r.height,hit:!!document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.closest('.daybook-github')},avatar:image?{loaded:image.complete&&image.naturalWidth===320,visible:ir.top>=0&&ir.bottom<=innerHeight}:null,canvas:!!document.querySelector('.sky-play__canvas canvas'),glCount:glRecords.length,draws:glRecords.reduce((n,r)=>n+r.draws,0),width:innerWidth,documentWidth:document.documentElement.scrollWidth};});
  check(`published build and visible navigation ${label}`,response.status()===200&&initial.script==='/assets/index-CdOJTuc_.js'&&initial.github.href==='https://github.com/lishehao'&&initial.github.width>=44&&initial.github.height>=44&&initial.github.hit&&initial.documentWidth<=initial.width,initial);
  const heavy=requests.filter(s=>/PocketPlanet-|pocket-|sky-keepsakes|yellow-paper/.test(s));
  check(`correct default experience ${label}`,mobile?initial.avatar?.loaded&&initial.avatar?.visible&&!initial.canvas&&initial.glCount===0&&initial.draws===0&&heavy.length===0:initial.canvas&&!initial.avatar&&!requests.some(s=>s.includes('planet-character-preview')),{initial,heavy});
  await page.screenshot({path:`${folder}/live-${label}-top.png`});
  for(let i=0;i<8&&!await page.locator('.daybook-github').evaluate(e=>e===document.activeElement);i++)await page.keyboard.press('Tab');
  check(`GitHub keyboard focus ${label}`,await page.locator('.daybook-github').evaluate(e=>e===document.activeElement&&getComputedStyle(e).outlineStyle!=='none'));
  const destinations=[];context.on('request',r=>{if(r.isNavigationRequest()&&r.url().startsWith('https://github.com/'))destinations.push(r.url());});
  const popupPromise=page.waitForEvent('popup');if(mobile)await page.locator('.daybook-github').tap();else await page.keyboard.press('Enter');const popup=await popupPromise;await popup.waitForTimeout(1000);check(`actual GitHub activation ${label}`,destinations.includes('https://github.com/lishehao'),destinations);await popup.close();
  if(mobile){
   await page.waitForTimeout(1000);check(`default has zero background rendering ${label}`,await page.evaluate(()=>glRecords.length===0));
   await page.getByRole('button',{name:'Enable interaction',exact:true}).tap();await page.waitForFunction(()=>document.querySelector('.sky-play__canvas canvas')&&!document.querySelector('.sky-play__loading'));
   check(`optional interaction loads ${label}`,await page.evaluate(()=>glRecords.length===1)&&requests.some(s=>/PocketPlanet-.*\.js/.test(s)));
   await page.getByRole('button',{name:'Change outfit',exact:true}).tap();await settle(page);await page.screenshot({path:`${folder}/live-${label}-interaction.png`});
   await page.getByRole('button',{name:'Use static preview',exact:true}).tap();await settle(page);check(`exit releases WebGL and restores focus ${label}`,await page.locator('canvas').count()===0&&await page.evaluate(()=>glRecords.every(r=>r.gl.isContextLost()))&&await page.getByRole('button',{name:'Enable interaction',exact:true}).evaluate(e=>e===document.activeElement));
   const before=await page.evaluate(()=>glRecords.reduce((n,r)=>n+r.draws,0));await page.waitForTimeout(1000);check(`exit stops background drawing ${label}`,before===await page.evaluate(()=>glRecords.reduce((n,r)=>n+r.draws,0)));
  }
  await page.getByRole('button',{name:'Work',exact:true}).click();await settle(page);check(`Work URL and focus ${label}`,page.url().endsWith('#work')&&await page.evaluate(()=>document.activeElement.id==='title-tiny'&&!document.activeElement.closest('[inert]')));
  await page.locator('.gallery-room__next').first().click();await settle(page);check(`Next and browser Back ${label}`,page.url().endsWith('#project-auto'));await page.goBack();await settle(page);check(`Back restores gallery ${label}`,page.url().endsWith('#work')&&await page.evaluate(()=>!document.activeElement.closest('[inert]')));
  await page.locator('.daybook-language').click();await settle(page);await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('.gallery-room');await settle(page);check(`Chinese direct reload ${label}`,page.url().includes('/zh/')&&await page.evaluate(()=>document.documentElement.lang==='zh-CN')&&(mobile?await page.locator('.planet-lite__character').count()===1:true));
  await page.goto(base+'/en/',{waitUntil:'domcontentloaded'});await page.waitForSelector('.daybook');check(`English direct entry ${label}`,await page.evaluate(()=>document.documentElement.lang==='en'&&document.querySelector('script[type=module]').getAttribute('src')==='/assets/index-CdOJTuc_.js'));
  const resume=await page.goto(base+'/resume/',{waitUntil:'domcontentloaded'});check(`Resume remains available ${label}`,resume.status()===200);
  check(`no missing live assets ${label}`,responses.length===0,responses);matrix.push({config,initial,responses});await context.close();
 }
}catch(e){check('live suite completes',false,e.stack);}
check('no live page exceptions',errors.length===0,errors);
await writeFile(`${folder}/live-browser-results.json`,JSON.stringify({base,productionCommit:'59df2c6fec0e56d2ba5c4461ae7bb0dd74198c0d',browser:browser.version(),softwareWebGL:true,checks,matrix,errors},null,2));
await browser.close();console.log(JSON.stringify({passed:checks.filter(c=>c.pass).length,total:checks.length,failures:checks.filter(c=>!c.pass)}));if(checks.some(c=>!c.pass))process.exitCode=1;
