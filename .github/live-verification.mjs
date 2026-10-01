import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
const base='https://lishehao.github.io', folder='evidence', checks=[],matrix=[],errors=[];
await mkdir(folder,{recursive:true});
const browser=await chromium.launch({args:['--no-sandbox','--enable-unsafe-swiftshader']});
const check=(name,pass,detail)=>{checks.push({name,pass,detail});console.log(JSON.stringify({name,pass}));};
try {
 for(const viewport of [{width:320,height:568},{width:390,height:844},{width:1440,height:900}]){
  const label=`${viewport.width}x${viewport.height}`,mobile=viewport.width<900;
  const context=await browser.newContext({viewport,hasTouch:mobile,isMobile:mobile,reducedMotion:'no-preference',extraHTTPHeaders:{'Cache-Control':'no-cache'}});
  const page=await context.newPage(),missing=[];
  page.setDefaultTimeout(45000);page.on('pageerror',e=>errors.push({label,message:e.message}));page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)missing.push({url:r.url(),status:r.status()});});
  const cdp=await context.newCDPSession(page);await cdp.send('Network.enable');await cdp.send('Network.setCacheDisabled',{cacheDisabled:true});
  const response=await page.goto(base+'/',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>document.querySelector('.sky-play__canvas canvas')&&!document.querySelector('.sky-play__loading')&&Number(document.querySelector('.sky-play')?.dataset.items)>0&&document.querySelector('.sky-play')?.dataset.walkFrames==='16');
  await page.waitForTimeout(1500);
  const initial=await page.evaluate(()=>({script:document.querySelector('script[type=module]').getAttribute('src'),canvas:!!document.querySelector('.sky-play__canvas canvas'),staticPreview:!!document.querySelector('.planet-lite'),items:document.querySelector('.sky-play').dataset.items,walkFrames:document.querySelector('.sky-play').dataset.walkFrames}));
  check(`exact original published build ${label}`,response.status()===200&&initial.script==='/assets/index-19aaGaF-.js',initial);
  check(`full interaction loads by default ${label}`,initial.canvas&&!initial.staticPreview&&Number(initial.items)>0&&initial.walkFrames==='16',initial);
  await page.screenshot({path:`${folder}/rollback-${label}-top.png`});
  const click=async name=>{const button=page.getByRole('button',{name,exact:true});if(mobile)await button.tap();else await button.click();await page.waitForTimeout(500);};
  await click('Change mood');check(`mood works ${label}`,await page.locator('.sky-play').getAttribute('data-mood')==='1');
  await click('Change outfit');check(`outfit works ${label}`,await page.locator('.sky-play').getAttribute('data-outfit')==='1');
  await click('Walk left');check(`walk works ${label}`,!!await page.locator('.sky-play').getAttribute('data-walk-style'));
  await click('Pocket surprise');check(`pocket surprise works ${label}`,await page.locator('.sky-play').getAttribute('data-drops')==='1'&&!!await page.locator('.sky-play').getAttribute('data-throw-style'));
  await page.screenshot({path:`${folder}/rollback-${label}-interaction.png`});
  check(`no missing original assets ${label}`,missing.length===0,missing);
  matrix.push({viewport,initial,missing});await context.close();
 }
}catch(e){check('rollback live suite completes',false,e.stack);}
check('no live exceptions',errors.length===0,errors);
await writeFile(`${folder}/rollback-live-results.json`,JSON.stringify({base,rollbackCommit:'e32bca57ed69eb72f672237673943a920f281d6a',restoredBaseline:'db27ba63ad503860da1a3c2939ea3f34647fc222',browser:browser.version(),softwareWebGL:true,checks,matrix,errors},null,2));
await browser.close();console.log(JSON.stringify({passed:checks.filter(c=>c.pass).length,total:checks.length,failures:checks.filter(c=>!c.pass)}));if(checks.some(c=>!c.pass))process.exitCode=1;
