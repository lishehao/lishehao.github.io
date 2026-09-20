// One owner for scene time. Render cadence never changes simulation speed.
export function createSceneClock({render, fast, running, raf=requestAnimationFrame,
 cancel=cancelAnimationFrame, now=()=>performance.now(), delay=setTimeout, clear=clearTimeout}) {
 let frame=0,timer=0,last=null,deadline=0,disposed=false;
 function stop(){cancel(frame);clear(timer);frame=timer=0;last=null;deadline=0;}
 function tick(time){
  frame=0;if(disposed||!running()){stop();return;}
  const dt=last===null?0:Math.min(.1,Math.max(0,(time-last)/1000));last=time;
  deadline=time+1000/30;
  if(render(time,dt)!==false)wake();else stop();
 }
 function wake(){
  if(disposed||!running())return;
  const urgent=fast();
  if(urgent&&timer){clear(timer);timer=0;}
  if(frame||timer)return;
  // Wake before the next display frame, not 33ms PLUS one display frame.
  const wait=urgent?0:Math.max(0,deadline-now()-8);
  if(wait>1)timer=delay(()=>{timer=0;if(!disposed&&running())frame=raf(tick);},wait);
  else frame=raf(tick);
 }
 return {wake,stop,dispose(){disposed=true;stop();}};
}
