const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const throws=[
 {name:'underhand',duration:.8,lift:.35,speed:2.8,up:2.4,spin:1.8},
 {name:'overhead',duration:1.05,lift:1.05,speed:3.7,up:3.6,spin:-3},
 {name:'sideways',duration:.65,lift:.5,speed:5,up:1.6,spin:4},
 {name:'double-take',duration:1.2,lift:.65,speed:2.1,up:3.1,spin:-1.5},
];
export function stepProps(props,dt,{floor,bounds,held}){
 const steps=Math.max(1,Math.ceil(dt/(1/120))),h=dt/steps;
 for(let k=0;k<steps;k++){
  for(const o of props){
   if(o===held||o.pull)continue;
   const f=o.fall??={vx:0,vy:0,spin:0};
   f.vy-=7*h;o.home.x+=f.vx*h;o.home.y+=f.vy*h;
   const [left,right]=bounds(o),r=o.radius;
   if(o.home.x<left+r||o.home.x>right-r){o.home.x=clamp(o.home.x,left+r,right-r);f.vx*=-.62;f.spin*=-.6;}
   const y=floor(o);
   if(o.home.y<y){o.home.y=y;f.vy=Math.abs(f.vy)>.45?-f.vy*.42:0;f.vx*=Math.exp(-3.2*h);f.spin*=Math.exp(-5*h);}
   f.vx*=Math.exp(-.15*h);o.angle=(o.angle||0)+(f.spin||0)*h;
  }
  for(let i=0;i<props.length;i++)for(let j=i+1;j<props.length;j++){
   const a=props[i],b=props[j];if(a.pull||b.pull)continue;
   const dx=b.home.x-a.home.x,dy=b.home.y-a.home.y,d=Math.hypot(dx,dy),r=a.radius+b.radius;
   if(d>=r)continue;
   const nx=d>.0001?dx/d:1,ny=d>.0001?dy/d:0,ia=a===held?0:1,ib=b===held?0:1,total=ia+ib;if(!total)continue;
   const overlap=r-d;a.home.x-=nx*overlap*ia/total;a.home.y-=ny*overlap*ia/total;b.home.x+=nx*overlap*ib/total;b.home.y+=ny*overlap*ib/total;
   const av=a.fall??={vx:0,vy:0,spin:0},bv=b.fall??={vx:0,vy:0,spin:0},speed=(bv.vx-av.vx)*nx+(bv.vy-av.vy)*ny;
   if(speed<0){const impulse=-1.5*speed/total;av.vx-=impulse*nx*ia;av.vy-=impulse*ny*ia;bv.vx+=impulse*nx*ib;bv.vy+=impulse*ny*ib;av.spin-=impulse*.35;bv.spin+=impulse*.35;}
  }
 }
}
