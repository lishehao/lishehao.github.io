// A new intent invalidates every earlier play promise, including cancellation.
export function createVideoPlayback(video,{allowed=()=>true,onState=()=>{}}={}){
 let generation=0,pending=false,wanted=false,disposed=false;
 const publish=()=>{if(!disposed)onState(wanted&&(pending||!video.paused));};
 function cancel(){generation++;pending=false;wanted=false;video.pause();publish();}
 async function toggle(){
  if(disposed)return;
  if(pending||!video.paused){cancel();return;}
  if(!allowed()){cancel();return;}
  const request=++generation;pending=true;wanted=true;publish();
  try{await video.play();if(request!==generation||disposed)return;pending=false;if(!allowed()){cancel();return;}publish();}
  catch{if(request!==generation||disposed)return;pending=false;wanted=false;publish();}
 }
 function play(){if(!wanted||disposed||!allowed()){cancel();return;}publish();}
 function pause(){if(video.paused){generation++;pending=false;wanted=false;publish();}}
 video.addEventListener('play',play);video.addEventListener('pause',pause);video.addEventListener('ended',pause);
 return {toggle,cancel,dispose(){disposed=true;cancel();video.removeEventListener('play',play);video.removeEventListener('pause',pause);video.removeEventListener('ended',pause);}};
}
