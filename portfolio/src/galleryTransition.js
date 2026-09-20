const clamp=x=>Math.max(0,Math.min(1,x));
export function galleryTransition(progress){
 const p=clamp((progress-.25)/.5),t=p*p*(3-2*p),light=Math.sin(Math.PI*t);
 return {t,outX:-26*t,outScale:1-.045*t,outAngle:-4*t,inX:100*(1-t),shade:.18*light,beam:.23*light,beamX:-45+90*t,active:t<.5?0:1};
}
