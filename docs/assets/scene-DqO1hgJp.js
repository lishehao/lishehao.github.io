/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kt="srgb",Qn="srgb-linear",tr="linear",dt="srgb";const $r="300 es";function ts(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ys(){const i=Mi("canvas");return i.style.display="block",i}const Zr={};function Jr(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ke(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Et(...i){const e="THREE."+i.shift();console.error(e,...i)}function Si(...i){const e=i.join(" ");e in Zr||(Zr[e]=!0,Ke(...i))}function Es(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qr=1234567;const _i=Math.PI/180,bi=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Vr(i,e){return(i%e+e)%e}function Ts(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function As(i,e,t){return i!==e?(t-i)/(e-i):0}function vi(i,e,t){return(1-t)*i+t*e}function ws(i,e,t,n){return vi(i,e,1-Math.exp(-t*n))}function Rs(i,e=1){return e-Math.abs(Vr(i,e*2)-e)}function Cs(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ps(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ds(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ls(i,e){return i+Math.random()*(e-i)}function Us(i){return i*(.5-Math.random())}function Is(i){i!==void 0&&(Qr=i);let e=Qr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fs(i){return i*_i}function Ns(i){return i*bi}function Os(i){return(i&i-1)===0&&i!==0}function Bs(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gs(i,e,t,n,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),h=s((e+n)/2),d=a((e-n)/2),f=s((e-n)/2),p=a((n-e)/2),x=s((n-e)/2);switch(r){case"XYX":i.set(o*h,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*x,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*x,o*l);break;case"ZYZ":i.set(c*x,c*p,o*h,o*l);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lt={DEG2RAD:_i,RAD2DEG:bi,generateUUID:ni,clamp:tt,euclideanModulo:Vr,mapLinear:Ts,inverseLerp:As,lerp:vi,damp:ws,pingpong:Rs,smoothstep:Cs,smootherstep:Ps,randInt:Ds,randFloat:Ls,randFloatSpread:Us,seededRandom:Is,degToRad:Fs,radToDeg:Ns,isPowerOfTwo:Os,ceilPowerOfTwo:Bs,floorPowerOfTwo:zs,setQuaternionFromProperEuler:Gs,normalize:zt,denormalize:Zn};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3],f=a[s+0],p=a[s+1],x=a[s+2],v=a[s+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(d!==v||c!==f||l!==p||h!==x){let m=c*f+l*p+h*x+d*v;m<0&&(f=-f,p=-p,x=-x,v=-v,m=-m);let u=1-o;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);u=Math.sin(u*y)/E,o=Math.sin(o*y)/E,c=c*u+f*o,l=l*u+p*o,h=h*u+x*o,d=d*u+v*o}else{c=c*u+f*o,l=l*u+p*o,h=h*u+x*o,d=d*u+v*o;const y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=a[s],f=a[s+1],p=a[s+2],x=a[s+3];return e[t]=o*x+h*d+c*p-l*f,e[t+1]=c*x+h*f+l*d-o*p,e[t+2]=l*x+h*p+o*f-c*d,e[t+3]=h*x-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(a/2),f=c(n/2),p=c(r/2),x=c(a/2);switch(s){case"XYZ":this._x=f*h*d+l*p*x,this._y=l*p*d-f*h*x,this._z=l*h*x+f*p*d,this._w=l*h*d-f*p*x;break;case"YXZ":this._x=f*h*d+l*p*x,this._y=l*p*d-f*h*x,this._z=l*h*x-f*p*d,this._w=l*h*d+f*p*x;break;case"ZXY":this._x=f*h*d-l*p*x,this._y=l*p*d+f*h*x,this._z=l*h*x+f*p*d,this._w=l*h*d-f*p*x;break;case"ZYX":this._x=f*h*d-l*p*x,this._y=l*p*d+f*h*x,this._z=l*h*x-f*p*d,this._w=l*h*d+f*p*x;break;case"YZX":this._x=f*h*d+l*p*x,this._y=l*p*d+f*h*x,this._z=l*h*x-f*p*d,this._w=l*h*d-f*p*x;break;case"XZY":this._x=f*h*d-l*p*x,this._y=l*p*d-f*h*x,this._z=l*h*x+f*p*d,this._w=l*h*d+f*p*x;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(s-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(a-l)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(s-r)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+s*o+r*l-a*c,this._y=r*h+s*c+a*o-n*l,this._z=a*h+s*l+n*c-r*o,this._w=s*h-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,a=-a,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ea.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ea.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),h=2*(o*t-a*r),d=2*(a*n-s*t);return this.x=t+c*l+s*d-o*h,this.y=n+c*h+o*l-a*d,this.z=r+c*d+a*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ar.copy(this).projectOnVector(e),this.sub(ar)}reflect(e){return this.sub(ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new H,ea=new yi;class $e{constructor(e,t,n,r,a,s,o,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],x=n[8],v=r[0],m=r[3],u=r[6],y=r[1],E=r[4],R=r[7],w=r[2],S=r[5],A=r[8];return a[0]=s*v+o*y+c*w,a[3]=s*m+o*E+c*S,a[6]=s*u+o*R+c*A,a[1]=l*v+h*y+d*w,a[4]=l*m+h*E+d*S,a[7]=l*u+h*R+d*A,a[2]=f*v+p*y+x*w,a[5]=f*m+p*E+x*S,a[8]=f*u+p*R+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-n*a*h+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*s-o*l,f=o*c-h*a,p=l*a-s*c,x=t*d+n*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(r*l-h*n)*v,e[2]=(o*n-r*s)*v,e[3]=f*v,e[4]=(h*t-r*c)*v,e[5]=(r*a-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(s*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sr.makeScale(e,t)),this}rotate(e){return this.premultiply(sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sr=new $e,ta=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),na=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ks(){const i={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===dt&&(r.r=pn(r.r),r.g=pn(r.g),r.b=pn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===dt&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?tr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Si("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Si("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qn]:{primaries:e,whitePoint:n,transfer:tr,toXYZ:ta,fromXYZ:na,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:ta,fromXYZ:na,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}const lt=ks();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let On;class Vs{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{On===void 0&&(On=Mi("canvas")),On.width=e.width,On.height=e.height;const r=On.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=On}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=pn(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hs=0;class Hr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hs++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(or(r[s].image)):a.push(or(r[s]))}else a=or(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let Ws=0;const lr=new H;class Ut extends ti{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=1001,r=1001,a=1006,s=1008,o=1023,c=1009,l=Ut.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ws++}),this.uuid=ni(),this.name="",this.source=new Hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lr).x}get height(){return this.source.getSize(lr).y}get depth(){return this.source.getSize(lr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=300;Ut.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],x=c[9],v=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,R=(p+1)/2,w=(u+1)/2,S=(h+f)/4,A=(d+v)/4,I=(x+m)/4;return E>R&&E>w?E<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(E),r=S/n,a=A/n):R>w?R<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(R),n=S/r,a=I/r):w<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),n=A/a,r=I/a),this.set(n,r,a,t),this}let y=Math.sqrt((m-x)*(m-x)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(d-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xs extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new Ut(r);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Hr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Xs{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ns extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qs extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zt):Zt.fromBufferAttribute(a,s),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Li.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Li.copy(n.boundingBox)),Li.applyMatrix4(e.matrixWorld),this.union(Li)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ui),Ui.subVectors(this.max,ui),Bn.subVectors(e.a,ui),zn.subVectors(e.b,ui),Gn.subVectors(e.c,ui),mn.subVectors(zn,Bn),xn.subVectors(Gn,zn),Tn.subVectors(Bn,Gn);let t=[0,-mn.z,mn.y,0,-xn.z,xn.y,0,-Tn.z,Tn.y,mn.z,0,-mn.x,xn.z,0,-xn.x,Tn.z,0,-Tn.x,-mn.y,mn.x,0,-xn.y,xn.x,0,-Tn.y,Tn.x,0];return!cr(t,Bn,zn,Gn,Ui)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Bn,zn,Gn,Ui))?!1:(Ii.crossVectors(mn,xn),t=[Ii.x,Ii.y,Ii.z],cr(t,Bn,zn,Gn,Ui))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new H,new H,new H,new H,new H,new H,new H,new H],Zt=new H,Li=new Ei,Bn=new H,zn=new H,Gn=new H,mn=new H,xn=new H,Tn=new H,ui=new H,Ui=new H,Ii=new H,An=new H;function cr(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){An.fromArray(i,a);const o=r.x*Math.abs(An.x)+r.y*Math.abs(An.y)+r.z*Math.abs(An.z),c=e.dot(An),l=t.dot(An),h=n.dot(An);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ys=new Ei,hi=new H,ur=new H;class nr{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ys.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hi.subVectors(e,this.center);const t=hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(hi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hi.copy(e.center).add(ur)),this.expandByPoint(hi.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cn=new H,hr=new H,Fi=new H,gn=new H,dr=new H,Ni=new H,fr=new H;class Wr{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hr.copy(e).add(t).multiplyScalar(.5),Fi.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(hr);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Fi),o=gn.dot(this.direction),c=-gn.dot(Fi),l=gn.lengthSq(),h=Math.abs(1-s*s);let d,f,p,x;if(h>0)if(d=s*c-o,f=s*o-c,x=a*h,d>=0)if(f>=-x)if(f<=x){const v=1/h;d*=v,f*=v,p=d*(d+s*f+2*o)+f*(s*d+f+2*c)+l}else f=a,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*c)+l;else f=-a,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-x?(d=Math.max(0,-(-s*a+o)),f=d>0?-a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+l):f<=x?(d=0,f=Math.min(Math.max(-a,-c),a),p=f*(f+2*c)+l):(d=Math.max(0,-(s*a+o)),f=d>0?a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+l);else f=s>0?-a:a,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hr).addScaledVector(Fi,f),p}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),r=cn.dot(cn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,r,a){dr.subVectors(t,e),Ni.subVectors(n,e),fr.crossVectors(dr,Ni);let s=this.direction.dot(fr),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;gn.subVectors(this.origin,e);const c=o*this.direction.dot(Ni.crossVectors(gn,Ni));if(c<0)return null;const l=o*this.direction.dot(dr.cross(gn));if(l<0||c+l>s)return null;const h=-o*gn.dot(fr);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,r,a,s,o,c,l,h,d,f,p,x,v,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,h,d,f,p,x,v,m)}set(e,t,n,r,a,s,o,c,l,h,d,f,p,x,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=a,u[5]=s,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=x,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/kn.setFromMatrixColumn(e,0).length(),a=1/kn.setFromMatrixColumn(e,1).length(),s=1/kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=s*h,p=s*d,x=o*h,v=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+x*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=x+p*l,t[10]=s*c}else if(e.order==="YXZ"){const f=c*h,p=c*d,x=l*h,v=l*d;t[0]=f+v*o,t[4]=x*o-p,t[8]=s*l,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=p*o-x,t[6]=v+f*o,t[10]=s*c}else if(e.order==="ZXY"){const f=c*h,p=c*d,x=l*h,v=l*d;t[0]=f-v*o,t[4]=-s*d,t[8]=x+p*o,t[1]=p+x*o,t[5]=s*h,t[9]=v-f*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const f=s*h,p=s*d,x=o*h,v=o*d;t[0]=c*h,t[4]=x*l-p,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const f=s*c,p=s*l,x=o*c,v=o*l;t[0]=c*h,t[4]=v-f*d,t[8]=x*d+p,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+x,t[10]=f-v*d}else if(e.order==="XZY"){const f=s*c,p=s*l,x=o*c,v=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+v,t[5]=s*h,t[9]=p*d-x,t[2]=x*d-p,t[6]=o*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ks,e,js)}lookAt(e,t,n){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),_n.crossVectors(n,Ht),_n.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),_n.crossVectors(n,Ht)),_n.normalize(),Oi.crossVectors(Ht,_n),r[0]=_n.x,r[4]=Oi.x,r[8]=Ht.x,r[1]=_n.y,r[5]=Oi.y,r[9]=Ht.y,r[2]=_n.z,r[6]=Oi.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],x=n[2],v=n[6],m=n[10],u=n[14],y=n[3],E=n[7],R=n[11],w=n[15],S=r[0],A=r[4],I=r[8],M=r[12],_=r[1],D=r[5],G=r[9],V=r[13],K=r[2],j=r[6],Z=r[10],ce=r[14],Y=r[3],ue=r[7],he=r[11],Re=r[15];return a[0]=s*S+o*_+c*K+l*Y,a[4]=s*A+o*D+c*j+l*ue,a[8]=s*I+o*G+c*Z+l*he,a[12]=s*M+o*V+c*ce+l*Re,a[1]=h*S+d*_+f*K+p*Y,a[5]=h*A+d*D+f*j+p*ue,a[9]=h*I+d*G+f*Z+p*he,a[13]=h*M+d*V+f*ce+p*Re,a[2]=x*S+v*_+m*K+u*Y,a[6]=x*A+v*D+m*j+u*ue,a[10]=x*I+v*G+m*Z+u*he,a[14]=x*M+v*V+m*ce+u*Re,a[3]=y*S+E*_+R*K+w*Y,a[7]=y*A+E*D+R*j+w*ue,a[11]=y*I+E*G+R*Z+w*he,a[15]=y*M+E*V+R*ce+w*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],x=e[3],v=e[7],m=e[11],u=e[15];return x*(+a*c*d-r*l*d-a*o*f+n*l*f+r*o*p-n*c*p)+v*(+t*c*p-t*l*f+a*s*f-r*s*p+r*l*h-a*c*h)+m*(+t*l*d-t*o*p-a*s*d+n*s*p+a*o*h-n*l*h)+u*(-r*o*h-t*c*d+t*o*f+r*s*d-n*s*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],x=e[12],v=e[13],m=e[14],u=e[15],y=d*m*l-v*f*l+v*c*p-o*m*p-d*c*u+o*f*u,E=x*f*l-h*m*l-x*c*p+s*m*p+h*c*u-s*f*u,R=h*v*l-x*d*l+x*o*p-s*v*p-h*o*u+s*d*u,w=x*d*c-h*v*c-x*o*f+s*v*f+h*o*m-s*d*m,S=t*y+n*E+r*R+a*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=y*A,e[1]=(v*f*a-d*m*a-v*r*p+n*m*p+d*r*u-n*f*u)*A,e[2]=(o*m*a-v*c*a+v*r*l-n*m*l-o*r*u+n*c*u)*A,e[3]=(d*c*a-o*f*a-d*r*l+n*f*l+o*r*p-n*c*p)*A,e[4]=E*A,e[5]=(h*m*a-x*f*a+x*r*p-t*m*p-h*r*u+t*f*u)*A,e[6]=(x*c*a-s*m*a-x*r*l+t*m*l+s*r*u-t*c*u)*A,e[7]=(s*f*a-h*c*a+h*r*l-t*f*l-s*r*p+t*c*p)*A,e[8]=R*A,e[9]=(x*d*a-h*v*a-x*n*p+t*v*p+h*n*u-t*d*u)*A,e[10]=(s*v*a-x*o*a+x*n*l-t*v*l-s*n*u+t*o*u)*A,e[11]=(h*o*a-s*d*a-h*n*l+t*d*l+s*n*p-t*o*p)*A,e[12]=w*A,e[13]=(h*v*r-x*d*r+x*n*f-t*v*f-h*n*m+t*d*m)*A,e[14]=(x*o*r-s*v*r-x*n*c+t*v*c+s*n*m-t*o*m)*A,e[15]=(s*d*r-h*o*r+h*n*c-t*d*c-s*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,h=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*s,0,l*c-r*o,h*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,h=s+s,d=o+o,f=a*l,p=a*h,x=a*d,v=s*h,m=s*d,u=o*d,y=c*l,E=c*h,R=c*d,w=n.x,S=n.y,A=n.z;return r[0]=(1-(v+u))*w,r[1]=(p+R)*w,r[2]=(x-E)*w,r[3]=0,r[4]=(p-R)*S,r[5]=(1-(f+u))*S,r[6]=(m+y)*S,r[7]=0,r[8]=(x+E)*A,r[9]=(m-y)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=kn.set(r[0],r[1],r[2]).length();const s=kn.set(r[4],r[5],r[6]).length(),o=kn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const l=1/a,h=1/s,d=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,t.setFromRotationMatrix(Jt),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=2e3,c=!1){const l=this.elements,h=2*a/(t-e),d=2*a/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let x,v;if(c)x=a/(s-a),v=s*a/(s-a);else if(o===2e3)x=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===2001)x=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=2e3,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,v;if(c)x=1/(s-a),v=s/(s-a);else if(o===2e3)x=-2/(s-a),v=-(s+a)/(s-a);else if(o===2001)x=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const kn=new H,Jt=new yt,Ks=new H(0,0,0),js=new H(1,1,1),_n=new H,Oi=new H,Ht=new H,ia=new yt,ra=new yi;class an{constructor(e=0,t=0,n=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ia,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ra.setFromEuler(this),this.setFromQuaternion(ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Xr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $s=0;const aa=new H,Vn=new yi,un=new yt,Bi=new H,di=new H,Zs=new H,Js=new yi,sa=new H(1,0,0),oa=new H(0,1,0),la=new H(0,0,1),ca={type:"added"},Qs={type:"removed"},Hn={type:"childadded",child:null},pr={type:"childremoved",child:null};class Dt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$s++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new H,t=new an,n=new yi,r=new H(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new $e}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(sa,e)}rotateY(e){return this.rotateOnAxis(oa,e)}rotateZ(e){return this.rotateOnAxis(la,e)}translateOnAxis(e,t){return aa.copy(e).applyQuaternion(this.quaternion),this.position.add(aa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sa,e)}translateY(e){return this.translateOnAxis(oa,e)}translateZ(e){return this.translateOnAxis(la,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bi.copy(e):Bi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(di,Bi,this.up):un.lookAt(Bi,di,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),Vn.setFromRotationMatrix(un),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ca),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qs),pr.child=e,this.dispatchEvent(pr),pr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ca),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,e,Zs),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,Js,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),d=s(e.shapes),f=s(e.skeletons),p=s(e.animations),x=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function s(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new H(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new H,hn=new H,mr=new H,dn=new H,Wn=new H,Xn=new H,ua=new H,xr=new H,gr=new H,_r=new H,vr=new bt,Mr=new bt,Sr=new bt;class en{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qt.subVectors(e,t),r.cross(Qt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Qt.subVectors(r,t),hn.subVectors(n,t),mr.subVectors(e,t);const s=Qt.dot(Qt),o=Qt.dot(hn),c=Qt.dot(mr),l=hn.dot(hn),h=hn.dot(mr),d=s*l-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,p=(l*c-o*h)*f,x=(s*h-o*c)*f;return a.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,dn.x),c.addScaledVector(s,dn.y),c.addScaledVector(o,dn.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return vr.setScalar(0),Mr.setScalar(0),Sr.setScalar(0),vr.fromBufferAttribute(e,t),Mr.fromBufferAttribute(e,n),Sr.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(vr,a.x),s.addScaledVector(Mr,a.y),s.addScaledVector(Sr,a.z),s}static isFrontFacing(e,t,n,r){return Qt.subVectors(n,t),hn.subVectors(e,t),Qt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;Wn.subVectors(r,n),Xn.subVectors(a,n),xr.subVectors(e,n);const c=Wn.dot(xr),l=Xn.dot(xr);if(c<=0&&l<=0)return t.copy(n);gr.subVectors(e,r);const h=Wn.dot(gr),d=Xn.dot(gr);if(h>=0&&d<=h)return t.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(n).addScaledVector(Wn,s);_r.subVectors(e,a);const p=Wn.dot(_r),x=Xn.dot(_r);if(x>=0&&p<=x)return t.copy(a);const v=p*l-c*x;if(v<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Xn,o);const m=h*x-p*d;if(m<=0&&d-h>=0&&p-x>=0)return ua.subVectors(a,r),o=(d-h)/(d-h+(p-x)),t.copy(r).addScaledVector(ua,o);const u=1/(m+v+f);return s=v*u,o=f*u,t.copy(n).addScaledVector(Wn,s).addScaledVector(Xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const is={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},zi={h:0,s:0,l:0};function br(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=Vr(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=br(s,a,e+1/3),this.g=br(s,a,e),this.b=br(s,a,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=Kt){function n(a){a!==void 0&&parseFloat(a)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=is[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return lt.workingToColorSpace(Nt.copy(this),e),Math.round(tt(Nt.r*255,0,255))*65536+Math.round(tt(Nt.g*255,0,255))*256+Math.round(tt(Nt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,r=Nt.g,a=Nt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const h=(o+s)/2;if(o===s)c=0,l=0;else{const d=s-o;switch(l=h<=.5?d/(s+o):d/(2-s-o),s){case n:c=(r-a)/d+(r<a?6:0);break;case r:c=(a-n)/d+2;break;case a:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Kt){lt.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,r=Nt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(zi);const n=vi(vn.h,zi.h,t),r=vi(vn.s,zi.s,t),a=vi(vn.l,zi.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new ot;ot.NAMES=is;let eo=0;class ii extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eo++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qr extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new H,Gi=new Ze;let to=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:to++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class rs extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class as extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let no=0;const Yt=new yt,yr=new Dt,qn=new H,Wt=new Ei,fi=new Ei,Ct=new H;class $t extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:no++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ts(e)?as:rs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new $e().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return yr.lookAt(e),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Wt.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];fi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Wt.min,fi.min),Wt.expandByPoint(Ct),Ct.addVectors(Wt.max,fi.max),Wt.expandByPoint(Ct)):(Wt.expandByPoint(fi.min),Wt.expandByPoint(fi.max))}Wt.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Ct.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Ct));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(qn.fromBufferAttribute(e,l),Ct.add(qn)),r=Math.max(r,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new H,c[I]=new H;const l=new H,h=new H,d=new H,f=new Ze,p=new Ze,x=new Ze,v=new H,m=new H;function u(I,M,_){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,_),f.fromBufferAttribute(a,I),p.fromBufferAttribute(a,M),x.fromBufferAttribute(a,_),h.sub(l),d.sub(l),p.sub(f),x.sub(f);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(D),o[I].add(v),o[M].add(v),o[_].add(v),c[I].add(m),c[M].add(m),c[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,M=y.length;I<M;++I){const _=y[I],D=_.start,G=_.count;for(let V=D,K=D+G;V<K;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new H,R=new H,w=new H,S=new H;function A(I){w.fromBufferAttribute(r,I),S.copy(w);const M=o[I];E.copy(M),E.sub(w.multiplyScalar(w.dot(M))).normalize(),R.crossVectors(S,M);const D=R.dot(c[I])<0?-1:1;s.setXYZW(I,E.x,E.y,E.z,D)}for(let I=0,M=y.length;I<M;++I){const _=y[I],D=_.start,G=_.count;for(let V=D,K=D+G;V<K;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new H,a=new H,s=new H,o=new H,c=new H,l=new H,h=new H,d=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),h.subVectors(s,a),d.subVectors(r,a),h.cross(d),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,a),d.subVectors(r,a),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let p=0,x=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let u=0;u<h;u++)f[x++]=l[p++]}return new rn(f,h,d)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],d=a[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,h=s.length;l<h;l++){const d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new yt,wn=new Wr,ki=new nr,da=new H,Vi=new H,Hi=new H,Wi=new H,Er=new H,Xi=new H,fa=new H,qi=new H;class Xt extends Dt{constructor(e=new $t,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Xi.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],d=a[c];h!==0&&(Er.fromBufferAttribute(d,e),s?Xi.addScaledVector(Er,h):Xi.addScaledVector(Er.sub(t),h))}t.add(Xi)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ki.copy(n.boundingSphere),ki.applyMatrix4(a),wn.copy(e.ray).recast(e.near),!(ki.containsPoint(wn.origin)===!1&&(wn.intersectSphere(ki,da)===null||wn.origin.distanceToSquared(da)>(e.far-e.near)**2))&&(ha.copy(a).invert(),wn.copy(e.ray).applyMatrix4(ha),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,v=f.length;x<v;x++){const m=f[x],u=s[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let R=y,w=E;R<w;R+=3){const S=o.getX(R),A=o.getX(R+1),I=o.getX(R+2);r=Yi(this,u,e,n,l,h,d,S,A,I),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=x,u=v;m<u;m+=3){const y=o.getX(m),E=o.getX(m+1),R=o.getX(m+2);r=Yi(this,s,e,n,l,h,d,y,E,R),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let x=0,v=f.length;x<v;x++){const m=f[x],u=s[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let R=y,w=E;R<w;R+=3){const S=R,A=R+1,I=R+2;r=Yi(this,u,e,n,l,h,d,S,A,I),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=x,u=v;m<u;m+=3){const y=m,E=m+1,R=m+2;r=Yi(this,s,e,n,l,h,d,y,E,R),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function io(i,e,t,n,r,a,s,o){let c;if(e.side===1?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===0,o),c===null)return null;qi.copy(o),qi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qi);return l<t.near||l>t.far?null:{distance:l,point:qi.clone(),object:i}}function Yi(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,Vi),i.getVertexPosition(c,Hi),i.getVertexPosition(l,Wi);const h=io(i,e,t,n,Vi,Hi,Wi,fa);if(h){const d=new H;en.getBarycoord(fa,Vi,Hi,Wi,d),r&&(h.uv=en.getInterpolatedAttribute(r,o,c,l,d,new Ze)),a&&(h.uv1=en.getInterpolatedAttribute(a,o,c,l,d,new Ze)),s&&(h.normal=en.getInterpolatedAttribute(s,o,c,l,d,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new H,materialIndex:0};en.getNormal(Vi,Hi,Wi,f.normal),h.face=f,h.barycoord=d}return h}class Ti extends $t{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],h=[],d=[];let f=0,p=0;x("z","y","x",-1,-1,n,t,e,s,a,0),x("z","y","x",1,-1,n,t,-e,s,a,1),x("x","z","y",1,1,e,n,t,r,s,2),x("x","z","y",1,-1,e,n,-t,r,s,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(d,2));function x(v,m,u,y,E,R,w,S,A,I,M){const _=R/A,D=w/I,G=R/2,V=w/2,K=S/2,j=A+1,Z=I+1;let ce=0,Y=0;const ue=new H;for(let he=0;he<Z;he++){const Re=he*D-V;for(let Xe=0;Xe<j;Xe++){const ct=Xe*_-G;ue[v]=ct*y,ue[m]=Re*E,ue[u]=K,l.push(ue.x,ue.y,ue.z),ue[v]=0,ue[m]=0,ue[u]=S>0?1:-1,h.push(ue.x,ue.y,ue.z),d.push(Xe/A),d.push(1-he/I),ce+=1}}for(let he=0;he<I;he++)for(let Re=0;Re<A;Re++){const Xe=f+Re+j*he,ct=f+Re+j*(he+1),Ce=f+(Re+1)+j*(he+1),nt=f+(Re+1)+j*he;c.push(Xe,ct,nt),c.push(ct,Ce,nt),Y+=6}o.addGroup(p,Y,M),p+=Y,f+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ei(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=ei(i[t]);for(const r in n)e[r]=n[r]}return e}function ro(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ss(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const ao={clone:ei,merge:Gt};var so=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=so,this.fragmentShader=oo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ei(e.uniforms),this.uniformsGroups=ro(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class os extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new H,pa=new Ze,ma=new Ze;class jt extends os{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bi*2*Math.atan(Math.tan(_i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,pa,ma),t.subVectors(ma,pa)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_i*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yn=-90,Kn=1;class lo extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(Yn,Kn,e,t);r.layers=this.layers,this.add(r);const a=new jt(Yn,Kn,e,t);a.layers=this.layers,this.add(a);const s=new jt(Yn,Kn,e,t);s.layers=this.layers,this.add(s);const o=new jt(Yn,Kn,e,t);o.layers=this.layers,this.add(o);const c=new jt(Yn,Kn,e,t);c.layers=this.layers,this.add(c);const l=new jt(Yn,Kn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ls extends Ut{constructor(e=[],t=301,n,r,a,s,o,c,l,h){super(e,t,n,r,a,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class co extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ls(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ti(5,5,5),a=new tn({name:"CubemapFromEquirect",uniforms:ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;const s=new Xt(r,a),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new lo(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}class Ki extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uo={type:"move"};class Tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),u=this._getHandJoint(l,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,x=.005;l.inputState.pinching&&f>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uo)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ho extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fo extends Ut{constructor(e=null,t=1,n=1,r,a,s,o,c,l=1003,h=1003,d,f){super(null,s,o,c,l,h,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ar=new H,po=new H,mo=new $e;class Ln{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ar.subVectors(n,t).cross(po.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ar),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mo.getNormalMatrix(e),r=this.coplanarPoint(Ar).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new nr,xo=new Ze(.5,.5),ji=new H;class Yr{constructor(e=new Ln,t=new Ln,n=new Ln,r=new Ln,a=new Ln,s=new Ln){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],h=a[4],d=a[5],f=a[6],p=a[7],x=a[8],v=a[9],m=a[10],u=a[11],y=a[12],E=a[13],R=a[14],w=a[15];if(r[0].setComponents(l-s,p-h,u-x,w-y).normalize(),r[1].setComponents(l+s,p+h,u+x,w+y).normalize(),r[2].setComponents(l+o,p+d,u+v,w+E).normalize(),r[3].setComponents(l-o,p-d,u-v,w-E).normalize(),n)r[4].setComponents(c,f,m,R).normalize(),r[5].setComponents(l-c,p-f,u-m,w-R).normalize();else if(r[4].setComponents(l-c,p-f,u-m,w-R).normalize(),t===2e3)r[5].setComponents(l+c,p+f,u+m,w+R).normalize();else if(t===2001)r[5].setComponents(c,f,m,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){Rn.center.set(0,0,0);const t=xo.distanceTo(e.center);return Rn.radius=.7071067811865476+t,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ji.x=r.normal.x>0?e.max.x:e.min.x,ji.y=r.normal.y>0?e.max.y:e.min.y,ji.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ji)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class go extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xa=new yt,Br=new Wr,$i=new nr,Zi=new H;class ga extends Dt{constructor(e=new $t,t=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),$i.radius+=a,e.ray.intersectsSphere($i)===!1)return;xa.copy(r).invert(),Br.copy(e.ray).applyMatrix4(xa);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,s.start),p=Math.min(l.count,s.start+s.count);for(let x=f,v=p;x<v;x++){const m=l.getX(x);Zi.fromBufferAttribute(d,m),_a(Zi,m,c,r,e,t,this)}}else{const f=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let x=f,v=p;x<v;x++)Zi.fromBufferAttribute(d,x),_a(Zi,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function _a(i,e,t,n,r,a,s){const o=Br.distanceSqToPoint(i);if(o<t){const c=new H;Br.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class pi extends Ut{constructor(e,t,n,r,a,s,o,c,l){super(e,t,n,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cs extends Ut{constructor(e,t,n=1014,r,a,s,o=1003,c=1003,l,h=1026,d=1){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,a,s,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class us extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class In extends $t{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=e/o,f=t/c,p=[],x=[],v=[],m=[];for(let u=0;u<h;u++){const y=u*f-s;for(let E=0;E<l;E++){const R=E*d-a;x.push(R,-y,0),v.push(0,0,1),m.push(E/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<o;y++){const E=y+l*u,R=y+l*(u+1),w=y+1+l*(u+1),S=y+1+l*u;p.push(E,R,S),p.push(R,w,S)}this.setIndex(p),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kr extends $t{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let l=0;const h=[],d=new H,f=new H,p=[],x=[],v=[],m=[];for(let u=0;u<=n;u++){const y=[],E=u/n;let R=0;u===0&&s===0?R=.5/t:u===n&&c===Math.PI&&(R=-.5/t);for(let w=0;w<=t;w++){const S=w/t;d.x=-e*Math.cos(r+S*a)*Math.sin(s+E*o),d.y=e*Math.cos(s+E*o),d.z=e*Math.sin(r+S*a)*Math.sin(s+E*o),x.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(S+R,1-E),y.push(l++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){const E=h[u][y+1],R=h[u][y],w=h[u+1][y],S=h[u+1][y+1];(u!==0||s>0)&&p.push(E,R,S),(u!==n-1||c<Math.PI)&&p.push(R,w,S)}this.setIndex(p),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _o extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vo extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mo extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class So{constructor(e,t,n){const r=this;let a=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,a===!1&&r.onStart!==void 0&&r.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){const p=l[d],x=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bo=new So;class jr{constructor(e){this.manager=e!==void 0?e:bo,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn=new WeakMap;class yo extends jr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=wr.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let d=jn.get(s);d===void 0&&(d=[],jn.set(s,d)),d.push({onLoad:t,onError:r})}return s}const o=Mi("img");function c(){h(),t&&t(this);const d=jn.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}jn.delete(this),a.manager.itemEnd(e)}function l(d){h(),r&&r(d),wr.remove(`image:${e}`);const f=jn.get(this)||[];for(let p=0;p<f.length;p++){const x=f[p];x.onError&&x.onError(d)}jn.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wr.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class Eo extends jr{constructor(e){super(e)}load(e,t,n,r){const a=new Ut,s=new yo(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class hs extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class To extends hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Rr=new yt,va=new H,Ma=new H;class Ao{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;va.setFromMatrixPosition(e.matrixWorld),t.position.copy(va),Ma.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ma),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ds extends os{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wo extends Ao{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ro extends hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new wo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Co extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sa=new yt;class Po{constructor(e,t,n=0,r=1/0){this.ray=new Wr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sa),this}intersectObject(e,t=!0,n=[]){return zr(e,this,n,t),n.sort(ba),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)zr(e[r],this,n,t);return n.sort(ba),n}}function ba(i,e){return i.distance-e.distance}function zr(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)zr(a[s],e,t,!0)}}function ya(i,e,t,n){const r=Do(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Do(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fs(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Lo(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){const x=d[f],v=d[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){const v=d[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}var Uo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Io=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,No=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Go=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ko=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ho=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xo=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ko=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$o=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,el=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,il=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,al=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ol=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ll=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cl="gl_FragColor = linearToOutputTexel( gl_FragColor );",ul=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ml=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_l=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ml=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,El=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Al=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dl=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ll=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ul=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Il=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ol=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vl=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ql=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$l=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ql=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ec=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ic=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ac=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_c=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ec=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ac=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ic=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$c=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ru=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,au=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,su=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ou=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Uo,alphahash_pars_fragment:Io,alphamap_fragment:Fo,alphamap_pars_fragment:No,alphatest_fragment:Oo,alphatest_pars_fragment:Bo,aomap_fragment:zo,aomap_pars_fragment:Go,batching_pars_vertex:ko,batching_vertex:Vo,begin_vertex:Ho,beginnormal_vertex:Wo,bsdfs:Xo,iridescence_fragment:qo,bumpmap_pars_fragment:Yo,clipping_planes_fragment:Ko,clipping_planes_pars_fragment:jo,clipping_planes_pars_vertex:$o,clipping_planes_vertex:Zo,color_fragment:Jo,color_pars_fragment:Qo,color_pars_vertex:el,color_vertex:tl,common:nl,cube_uv_reflection_fragment:il,defaultnormal_vertex:rl,displacementmap_pars_vertex:al,displacementmap_vertex:sl,emissivemap_fragment:ol,emissivemap_pars_fragment:ll,colorspace_fragment:cl,colorspace_pars_fragment:ul,envmap_fragment:hl,envmap_common_pars_fragment:dl,envmap_pars_fragment:fl,envmap_pars_vertex:pl,envmap_physical_pars_fragment:Tl,envmap_vertex:ml,fog_vertex:xl,fog_pars_vertex:gl,fog_fragment:_l,fog_pars_fragment:vl,gradientmap_pars_fragment:Ml,lightmap_pars_fragment:Sl,lights_lambert_fragment:bl,lights_lambert_pars_fragment:yl,lights_pars_begin:El,lights_toon_fragment:Al,lights_toon_pars_fragment:wl,lights_phong_fragment:Rl,lights_phong_pars_fragment:Cl,lights_physical_fragment:Pl,lights_physical_pars_fragment:Dl,lights_fragment_begin:Ll,lights_fragment_maps:Ul,lights_fragment_end:Il,logdepthbuf_fragment:Fl,logdepthbuf_pars_fragment:Nl,logdepthbuf_pars_vertex:Ol,logdepthbuf_vertex:Bl,map_fragment:zl,map_pars_fragment:Gl,map_particle_fragment:kl,map_particle_pars_fragment:Vl,metalnessmap_fragment:Hl,metalnessmap_pars_fragment:Wl,morphinstance_vertex:Xl,morphcolor_vertex:ql,morphnormal_vertex:Yl,morphtarget_pars_vertex:Kl,morphtarget_vertex:jl,normal_fragment_begin:$l,normal_fragment_maps:Zl,normal_pars_fragment:Jl,normal_pars_vertex:Ql,normal_vertex:ec,normalmap_pars_fragment:tc,clearcoat_normal_fragment_begin:nc,clearcoat_normal_fragment_maps:ic,clearcoat_pars_fragment:rc,iridescence_pars_fragment:ac,opaque_fragment:sc,packing:oc,premultiplied_alpha_fragment:lc,project_vertex:cc,dithering_fragment:uc,dithering_pars_fragment:hc,roughnessmap_fragment:dc,roughnessmap_pars_fragment:fc,shadowmap_pars_fragment:pc,shadowmap_pars_vertex:mc,shadowmap_vertex:xc,shadowmask_pars_fragment:gc,skinbase_vertex:_c,skinning_pars_vertex:vc,skinning_vertex:Mc,skinnormal_vertex:Sc,specularmap_fragment:bc,specularmap_pars_fragment:yc,tonemapping_fragment:Ec,tonemapping_pars_fragment:Tc,transmission_fragment:Ac,transmission_pars_fragment:wc,uv_pars_fragment:Rc,uv_pars_vertex:Cc,uv_vertex:Pc,worldpos_vertex:Dc,background_vert:Lc,background_frag:Uc,backgroundCube_vert:Ic,backgroundCube_frag:Fc,cube_vert:Nc,cube_frag:Oc,depth_vert:Bc,depth_frag:zc,distanceRGBA_vert:Gc,distanceRGBA_frag:kc,equirect_vert:Vc,equirect_frag:Hc,linedashed_vert:Wc,linedashed_frag:Xc,meshbasic_vert:qc,meshbasic_frag:Yc,meshlambert_vert:Kc,meshlambert_frag:jc,meshmatcap_vert:$c,meshmatcap_frag:Zc,meshnormal_vert:Jc,meshnormal_frag:Qc,meshphong_vert:eu,meshphong_frag:tu,meshphysical_vert:nu,meshphysical_frag:iu,meshtoon_vert:ru,meshtoon_frag:au,points_vert:su,points_frag:ou,shadow_vert:lu,shadow_frag:cu,sprite_vert:uu,sprite_frag:hu},Se={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},nn={basic:{uniforms:Gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ot(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Gt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Gt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ot(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Gt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Gt([Se.points,Se.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Gt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Gt([Se.common,Se.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Gt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Gt([Se.sprite,Se.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Gt([Se.common,Se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Gt([Se.lights,Se.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};nn.physical={uniforms:Gt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ji={r:0,b:0,g:0},Cn=new an,du=new yt;function fu(i,e,t,n,r,a,s){const o=new ot(0);let c=a===!0?0:1,l,h,d=null,f=0,p=null;function x(E){let R=E.isScene===!0?E.background:null;return R&&R.isTexture&&(R=(E.backgroundBlurriness>0?t:e).get(R)),R}function v(E){let R=!1;const w=x(E);w===null?u(o,c):w&&w.isColor&&(u(w,1),R=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,R){const w=x(R);w&&(w.isCubeTexture||w.mapping===306)?(h===void 0&&(h=new Xt(new Ti(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ei(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Cn.copy(R.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(du.makeRotationFromEuler(Cn)),h.material.toneMapped=lt.getTransfer(w.colorSpace)!==dt,(d!==w||f!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Xt(new In(2,2),new tn({name:"BackgroundMaterial",uniforms:ei(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=lt.getTransfer(w.colorSpace)!==dt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,R){E.getRGB(Ji,ss(i)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,R,s)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,R=1){o.set(E),c=R,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(o,c)},render:v,addToRenderList:m,dispose:y}}function pu(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,s=!1;function o(_,D,G,V,K){let j=!1;const Z=d(V,G,D);a!==Z&&(a=Z,l(a.object)),j=p(_,V,G,K),j&&x(_,V,G,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,R(_,D,G,V),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function d(_,D,G){const V=G.wireframe===!0;let K=n[_.id];K===void 0&&(K={},n[_.id]=K);let j=K[D.id];j===void 0&&(j={},K[D.id]=j);let Z=j[V];return Z===void 0&&(Z=f(c()),j[V]=Z),Z}function f(_){const D=[],G=[],V=[];for(let K=0;K<t;K++)D[K]=0,G[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:V,object:_,attributes:{},index:null}}function p(_,D,G,V){const K=a.attributes,j=D.attributes;let Z=0;const ce=G.getAttributes();for(const Y in ce)if(ce[Y].location>=0){const he=K[Y];let Re=j[Y];if(Re===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(Re=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(Re=_.instanceColor)),he===void 0||he.attribute!==Re||Re&&he.data!==Re.data)return!0;Z++}return a.attributesNum!==Z||a.index!==V}function x(_,D,G,V){const K={},j=D.attributes;let Z=0;const ce=G.getAttributes();for(const Y in ce)if(ce[Y].location>=0){let he=j[Y];he===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(he=_.instanceColor));const Re={};Re.attribute=he,he&&he.data&&(Re.data=he.data),K[Y]=Re,Z++}a.attributes=K,a.attributesNum=Z,a.index=V}function v(){const _=a.newAttributes;for(let D=0,G=_.length;D<G;D++)_[D]=0}function m(_){u(_,0)}function u(_,D){const G=a.newAttributes,V=a.enabledAttributes,K=a.attributeDivisors;G[_]=1,V[_]===0&&(i.enableVertexAttribArray(_),V[_]=1),K[_]!==D&&(i.vertexAttribDivisor(_,D),K[_]=D)}function y(){const _=a.newAttributes,D=a.enabledAttributes;for(let G=0,V=D.length;G<V;G++)D[G]!==_[G]&&(i.disableVertexAttribArray(G),D[G]=0)}function E(_,D,G,V,K,j,Z){Z===!0?i.vertexAttribIPointer(_,D,G,K,j):i.vertexAttribPointer(_,D,G,V,K,j)}function R(_,D,G,V){v();const K=V.attributes,j=G.getAttributes(),Z=D.defaultAttributeValues;for(const ce in j){const Y=j[ce];if(Y.location>=0){let ue=K[ce];if(ue===void 0&&(ce==="instanceMatrix"&&_.instanceMatrix&&(ue=_.instanceMatrix),ce==="instanceColor"&&_.instanceColor&&(ue=_.instanceColor)),ue!==void 0){const he=ue.normalized,Re=ue.itemSize,Xe=e.get(ue);if(Xe===void 0)continue;const ct=Xe.buffer,Ce=Xe.type,nt=Xe.bytesPerElement,Q=Ce===i.INT||Ce===i.UNSIGNED_INT||ue.gpuType===1013;if(ue.isInterleavedBufferAttribute){const ee=ue.data,be=ee.stride,We=ue.offset;if(ee.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Y.locationSize;Ie++)u(Y.location+Ie,ee.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)m(Y.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Ie=0;Ie<Y.locationSize;Ie++)E(Y.location+Ie,Re/Y.locationSize,Ce,he,be*nt,(We+Re/Y.locationSize*Ie)*nt,Q)}else{if(ue.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)u(Y.location+ee,ue.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ee=0;ee<Y.locationSize;ee++)m(Y.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let ee=0;ee<Y.locationSize;ee++)E(Y.location+ee,Re/Y.locationSize,Ce,he,Re*nt,Re/Y.locationSize*ee*nt,Q)}}else if(Z!==void 0){const he=Z[ce];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(Y.location,he);break;case 3:i.vertexAttrib3fv(Y.location,he);break;case 4:i.vertexAttrib4fv(Y.location,he);break;default:i.vertexAttrib1fv(Y.location,he)}}}}y()}function w(){I();for(const _ in n){const D=n[_];for(const G in D){const V=D[G];for(const K in V)h(V[K].object),delete V[K];delete D[G]}delete n[_]}}function S(_){if(n[_.id]===void 0)return;const D=n[_.id];for(const G in D){const V=D[G];for(const K in V)h(V[K].object),delete V[K];delete D[G]}delete n[_.id]}function A(_){for(const D in n){const G=n[D];if(G[_.id]===void 0)continue;const V=G[_.id];for(const K in V)h(V[K].object),delete V[K];delete G[_.id]}}function I(){M(),s=!0,a!==r&&(a=r,l(a.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function mu(i,e,t){let n;function r(l){n=l}function a(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function s(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x];t.update(p,n,1)}function c(l,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)s(l[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let x=0;for(let v=0;v<d;v++)x+=h[v]*f[v];t.update(x,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function xu(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==1023&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==1009&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==1015&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ke("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:R,vertexTextures:w,maxSamples:S}}function gu(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Ln,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const x=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||x===null||x.length===0||a&&!m)a?h(null):l();else{const y=a?0:n,E=y*4;let R=u.clippingState||null;c.value=R,R=h(x,f,E,p);for(let w=0;w!==E;++w)R[w]=t[w];u.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,x){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,x!==!0||m===null){const u=p+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,R=p;E!==v;++E,R+=4)s.copy(d[E]).applyMatrix4(y,o),s.normal.toArray(m,R),m[R+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function _u(i){let e=new WeakMap;function t(s,o){return o===303?s.mapping=301:o===304&&(s.mapping=302),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===303||o===304)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new co(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Sn=4,Ea=[.125,.215,.35,.446,.526,.582],Un=20,vu=256,mi=new ds,Ta=new ot;let Cr=null,Pr=0,Dr=0,Lr=!1;const Mu=new H;class Aa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=Mu}=a;Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ca(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ra(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cr,Pr,Dr),this._renderer.xr.enabled=Lr,e.scissorTest=!1,$n(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Qn,depthBuffer:!1},r=wa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wa(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Su(a)),this._blurMaterial=yu(a,e,t)}return r}_compileMaterial(e){const t=new Xt(new $t,e);this._renderer.compile(t,mi)}_sceneToCubeUV(e,t,n,r,a){const c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Ta),d.toneMapping=0,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new Ti,new qr({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let u=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,u=!0):(m.color.copy(Ta),u=!0);for(let E=0;E<6;E++){const R=E%3;R===0?(c.up.set(0,l[E],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+h[E],a.y,a.z)):R===1?(c.up.set(0,0,l[E]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+h[E],a.z)):(c.up.set(0,l[E],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+h[E]));const w=this._cubeSize;$n(r,R*w,E>2?w:0,w,w),d.setRenderTarget(r),u&&d.render(v,c),d.render(e,c)}d.toneMapping=p,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ca()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ra());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;$n(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,mi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget;if(this._ggxMaterial===null){const y=3*Math.max(this._cubeSize,16),E=4*this._cubeSize;this._ggxMaterial=bu(this._lodMax,y,E)}const s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const c=s.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),f=.05+l*.95,p=d*f,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-Sn?n-x+Sn:0),u=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,$n(a,m,u,3*v,2*v),r.setRenderTarget(a),r.render(o,mi),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=x-n,$n(e,m,u,3*v,2*v),r.setRenderTarget(e),r.render(o,mi)}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=l;const f=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Un-1),v=a/x,m=isFinite(a)?1+Math.floor(h*v):Un;m>Un&&Ke(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`);const u=[];let y=0;for(let A=0;A<Un;++A){const I=A/v,M=Math.exp(-I*I/2);u.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=x,f.mipInt.value=E-n;const R=this._sizeLods[r],w=3*R*(r>E-Sn?r-E+Sn:0),S=4*(this._cubeSize-R);$n(t,w,S,3*R,2*R),c.setRenderTarget(t),c.render(d,mi)}}function Su(i){const e=[],t=[],n=[];let r=i;const a=i-Sn+1+Ea.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let c=1/o;s>i-Sn?c=Ea[s-i+Sn-1]:s===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,v=3,m=2,u=1,y=new Float32Array(v*x*p),E=new Float32Array(m*x*p),R=new Float32Array(u*x*p);for(let S=0;S<p;S++){const A=S%3*2/3-1,I=S>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(M,v*x*S),E.set(f,m*x*S);const _=[S,S,S,S,S,S];R.set(_,u*x*S)}const w=new $t;w.setAttribute("position",new rn(y,v)),w.setAttribute("uv",new rn(E,m)),w.setAttribute("faceIndex",new rn(R,u)),n.push(new Xt(w,null)),r>Sn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function wa(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $n(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bu(i,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vu,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ir(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yu(i,e,t){const n=new Float32Array(Un),r=new H(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ra(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ca(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ir(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Eu(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Aa(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Aa(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Tu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Si("WebGLRenderer: "+n+" extension not supported."),r}}}function Au(i,e,t,n){const r={},a=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",s),delete r[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(d){const f=[],p=d.index,x=d.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let E=0,R=y.length;E<R;E+=3){const w=y[E+0],S=y[E+1],A=y[E+2];f.push(w,S,S,A,A,w)}}else if(x!==void 0){const y=x.array;v=x.version;for(let E=0,R=y.length/3-1;E<R;E+=3){const w=E+0,S=E+1,A=E+2;f.push(w,S,S,A,A,w)}}else return;const m=new(ts(f)?as:rs)(f,1);m.version=v;const u=a.get(d);u&&e.remove(u),a.set(d,m)}function h(d){const f=a.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function wu(i,e,t){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function c(f,p){i.drawElements(n,p,a,f*s),t.update(p,n,1)}function l(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,a,f*s,x),t.update(p,n,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,f,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];t.update(m,n,1)}function d(f,p,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/s,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,f,0,v,0,x);let u=0;for(let y=0;y<x;y++)u+=p[y]*v[y];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ru(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:Et("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Cu(i,e,t){const n=new WeakMap,r=new bt;function a(s,o,c){const l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),x===!0&&(E=2),v===!0&&(E=3);let R=o.attributes.position.count*E,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const S=new Float32Array(R*w*4*d),A=new ns(S,R,w,d);A.type=1015,A.needsUpdate=!0;const I=E*4;for(let _=0;_<d;_++){const D=m[_],G=u[_],V=y[_],K=R*w*4*_;for(let j=0;j<D.count;j++){const Z=j*I;p===!0&&(r.fromBufferAttribute(D,j),S[K+Z+0]=r.x,S[K+Z+1]=r.y,S[K+Z+2]=r.z,S[K+Z+3]=0),x===!0&&(r.fromBufferAttribute(G,j),S[K+Z+4]=r.x,S[K+Z+5]=r.y,S[K+Z+6]=r.z,S[K+Z+7]=0),v===!0&&(r.fromBufferAttribute(V,j),S[K+Z+8]=r.x,S[K+Z+9]=r.y,S[K+Z+10]=r.z,S[K+Z+11]=V.itemSize===4?r.w:1)}}f={count:d,texture:A,size:new Ze(R,w)},n.set(o,f),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Pu(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}const ps=new Ut,Pa=new cs(1,1),ms=new ns,xs=new qs,gs=new ls,Da=[],La=[],Ua=new Float32Array(16),Ia=new Float32Array(9),Fa=new Float32Array(4);function ri(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Da[r];if(a===void 0&&(a=new Float32Array(r),Da[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rr(i,e){let t=La[e];t===void 0&&(t=new Int32Array(e),La[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Du(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Uu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Iu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Fu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Fa.set(n),i.uniformMatrix2fv(this.addr,!1,Fa),Rt(t,n)}}function Nu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Ia.set(n),i.uniformMatrix3fv(this.addr,!1,Ia),Rt(t,n)}}function Ou(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Ua.set(n),i.uniformMatrix4fv(this.addr,!1,Ua),Rt(t,n)}}function Bu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function Gu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function ku(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function Vu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function Wu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function Xu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function qu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Pa.compareFunction=515,a=Pa):a=ps,t.setTexture2D(e||a,r)}function Yu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||xs,r)}function Ku(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gs,r)}function ju(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ms,r)}function $u(i){switch(i){case 5126:return Du;case 35664:return Lu;case 35665:return Uu;case 35666:return Iu;case 35674:return Fu;case 35675:return Nu;case 35676:return Ou;case 5124:case 35670:return Bu;case 35667:case 35671:return zu;case 35668:case 35672:return Gu;case 35669:case 35673:return ku;case 5125:return Vu;case 36294:return Hu;case 36295:return Wu;case 36296:return Xu;case 35678:case 36198:case 36298:case 36306:case 35682:return qu;case 35679:case 36299:case 36307:return Yu;case 35680:case 36300:case 36308:case 36293:return Ku;case 36289:case 36303:case 36311:case 36292:return ju}}function Zu(i,e){i.uniform1fv(this.addr,e)}function Ju(i,e){const t=ri(e,this.size,2);i.uniform2fv(this.addr,t)}function Qu(i,e){const t=ri(e,this.size,3);i.uniform3fv(this.addr,t)}function eh(i,e){const t=ri(e,this.size,4);i.uniform4fv(this.addr,t)}function th(i,e){const t=ri(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function nh(i,e){const t=ri(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ih(i,e){const t=ri(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rh(i,e){i.uniform1iv(this.addr,e)}function ah(i,e){i.uniform2iv(this.addr,e)}function sh(i,e){i.uniform3iv(this.addr,e)}function oh(i,e){i.uniform4iv(this.addr,e)}function lh(i,e){i.uniform1uiv(this.addr,e)}function ch(i,e){i.uniform2uiv(this.addr,e)}function uh(i,e){i.uniform3uiv(this.addr,e)}function hh(i,e){i.uniform4uiv(this.addr,e)}function dh(i,e,t){const n=this.cache,r=e.length,a=rr(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||ps,a[s])}function fh(i,e,t){const n=this.cache,r=e.length,a=rr(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||xs,a[s])}function ph(i,e,t){const n=this.cache,r=e.length,a=rr(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||gs,a[s])}function mh(i,e,t){const n=this.cache,r=e.length,a=rr(t,r);wt(n,a)||(i.uniform1iv(this.addr,a),Rt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||ms,a[s])}function xh(i){switch(i){case 5126:return Zu;case 35664:return Ju;case 35665:return Qu;case 35666:return eh;case 35674:return th;case 35675:return nh;case 35676:return ih;case 5124:case 35670:return rh;case 35667:case 35671:return ah;case 35668:case 35672:return sh;case 35669:case 35673:return oh;case 5125:return lh;case 36294:return ch;case 36295:return uh;case 36296:return hh;case 35678:case 36198:case 36298:case 36306:case 35682:return dh;case 35679:case 36299:case 36307:return fh;case 35680:case 36300:case 36308:case 36293:return ph;case 36289:case 36303:case 36311:case 36292:return mh}}class gh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$u(t.type)}}class _h{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xh(t.type)}}class vh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function Na(i,e){i.seq.push(e),i.map[e.id]=e}function Mh(i,e,t){const n=i.name,r=n.length;for(Ur.lastIndex=0;;){const a=Ur.exec(n),s=Ur.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){Na(t,l===void 0?new gh(o,i,e):new _h(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new vh(o),Na(t,d)),t=d}}}class er{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Mh(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Oa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sh=37297;let bh=0;function yh(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Ba=new $e;function Eh(i){lt._getMatrix(Ba,lt.workingColorSpace,i);const e=`mat3( ${Ba.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case tr:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function za(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+yh(i.getShaderSource(e),o)}else return a}function Th(i,e){const t=Eh(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ah(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:Ke("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qi=new H;function wh(){lt.getLuminanceCoefficients(Qi);const i=Qi.x.toFixed(4),e=Qi.y.toFixed(4),t=Qi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gi).join(`
`)}function Ch(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ph(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function gi(i){return i!==""}function Ga(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ka(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gr(i){return i.replace(Dh,Uh)}const Lh=new Map;function Uh(i,e){let t=Je[e];if(t===void 0){const n=Lh.get(e);if(n!==void 0)t=Je[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gr(t)}const Ih=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Va(i){return i.replace(Ih,Fh)}function Fh(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ha(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nh(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Oh(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bh(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function zh(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Gh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kh(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Nh(t),l=Oh(t),h=Bh(t),d=zh(t),f=Gh(t),p=Rh(t),x=Ch(a),v=r.createProgram();let m,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(gi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(gi).join(`
`),u.length>0&&(u+=`
`)):(m=[Ha(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),u=[Ha(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Je.tonemapping_pars_fragment:"",t.toneMapping!==0?Ah("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Th("linearToOutputTexel",t.outputColorSpace),wh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gi).join(`
`)),s=Gr(s),s=Ga(s,t),s=ka(s,t),o=Gr(o),o=Ga(o,t),o=ka(o,t),s=Va(s),o=Va(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===$r?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$r?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=y+m+s,R=y+u+o,w=Oa(r,r.VERTEX_SHADER,E),S=Oa(r,r.FRAGMENT_SHADER,R);r.attachShader(v,w),r.attachShader(v,S),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(D){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(w)||"",K=r.getShaderInfoLog(S)||"",j=G.trim(),Z=V.trim(),ce=K.trim();let Y=!0,ue=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,w,S);else{const he=za(r,w,"vertex"),Re=za(r,S,"fragment");Et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+he+`
`+Re)}else j!==""?Ke("WebGLProgram: Program Info Log:",j):(Z===""||ce==="")&&(ue=!1);ue&&(D.diagnostics={runnable:Y,programLog:j,vertexShader:{log:Z,prefix:m},fragmentShader:{log:ce,prefix:u}})}r.deleteShader(w),r.deleteShader(S),I=new er(r,v),M=Ph(r,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,Sh)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bh++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}let Vh=0;class Hh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wh(e),t.set(e,n)),n}}class Wh{constructor(e){this.id=Vh++,this.code=e,this.usedTimes=0}}function Xh(i,e,t,n,r,a,s){const o=new Xr,c=new Hh,l=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,_,D,G,V){const K=G.fog,j=V.geometry,Z=M.isMeshStandardMaterial?G.environment:null,ce=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),Y=ce&&ce.mapping===306?ce.image.height:null,ue=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&Ke("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Re=he!==void 0?he.length:0;let Xe=0;j.morphAttributes.position!==void 0&&(Xe=1),j.morphAttributes.normal!==void 0&&(Xe=2),j.morphAttributes.color!==void 0&&(Xe=3);let ct,Ce,nt,Q;if(ue){const Qe=nn[ue];ct=Qe.vertexShader,Ce=Qe.fragmentShader}else ct=M.vertexShader,Ce=M.fragmentShader,c.update(M),nt=c.getVertexShaderID(M),Q=c.getFragmentShaderID(M);const ee=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),We=V.isInstancedMesh===!0,Ie=V.isBatchedMesh===!0,q=!!M.map,St=!!M.matcap,Pe=!!ce,ft=!!M.aoMap,P=!!M.lightMap,ke=!!M.bumpMap,qe=!!M.normalMap,ut=!!M.displacementMap,Te=!!M.emissiveMap,Ge=!!M.metalnessMap,ve=!!M.roughnessMap,Oe=M.anisotropy>0,T=M.clearcoat>0,g=M.dispersion>0,O=M.iridescence>0,J=M.sheen>0,ne=M.transmission>0,X=Oe&&!!M.anisotropyMap,ye=T&&!!M.clearcoatMap,ge=T&&!!M.clearcoatNormalMap,De=T&&!!M.clearcoatRoughnessMap,we=O&&!!M.iridescenceMap,re=O&&!!M.iridescenceThicknessMap,fe=J&&!!M.sheenColorMap,Fe=J&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,Me=!!M.specularColorMap,Be=!!M.specularIntensityMap,L=ne&&!!M.transmissionMap,xe=ne&&!!M.thicknessMap,pe=!!M.gradientMap,me=!!M.alphaMap,oe=M.alphaTest>0,te=!!M.alphaHash,Ae=!!M.extensions;let He=0;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(He=i.toneMapping);const pt={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:ct,fragmentShader:Ce,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&V._colorsTexture!==null,instancing:We,instancingColor:We&&V.instanceColor!==null,instancingMorph:We&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Qn,alphaToCoverage:!!M.alphaToCoverage,map:q,matcap:St,envMap:Pe,envMapMode:Pe&&ce.mapping,envMapCubeUVHeight:Y,aoMap:ft,lightMap:P,bumpMap:ke,normalMap:qe,displacementMap:f&&ut,emissiveMap:Te,normalMapObjectSpace:qe&&M.normalMapType===1,normalMapTangentSpace:qe&&M.normalMapType===0,metalnessMap:Ge,roughnessMap:ve,anisotropy:Oe,anisotropyMap:X,clearcoat:T,clearcoatMap:ye,clearcoatNormalMap:ge,clearcoatRoughnessMap:De,dispersion:g,iridescence:O,iridescenceMap:we,iridescenceThicknessMap:re,sheen:J,sheenColorMap:fe,sheenRoughnessMap:Fe,specularMap:Ne,specularColorMap:Me,specularIntensityMap:Be,transmission:ne,transmissionMap:L,thicknessMap:xe,gradientMap:pe,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:oe,alphaHash:te,combine:M.combine,mapUv:q&&v(M.map.channel),aoMapUv:ft&&v(M.aoMap.channel),lightMapUv:P&&v(M.lightMap.channel),bumpMapUv:ke&&v(M.bumpMap.channel),normalMapUv:qe&&v(M.normalMap.channel),displacementMapUv:ut&&v(M.displacementMap.channel),emissiveMapUv:Te&&v(M.emissiveMap.channel),metalnessMapUv:Ge&&v(M.metalnessMap.channel),roughnessMapUv:ve&&v(M.roughnessMap.channel),anisotropyMapUv:X&&v(M.anisotropyMap.channel),clearcoatMapUv:ye&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ge&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(M.sheenRoughnessMap.channel),specularMapUv:Ne&&v(M.specularMap.channel),specularColorMapUv:Me&&v(M.specularColorMap.channel),specularIntensityMapUv:Be&&v(M.specularIntensityMap.channel),transmissionMapUv:L&&v(M.transmissionMap.channel),thicknessMapUv:xe&&v(M.thicknessMap.channel),alphaMapUv:me&&v(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(qe||Oe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(q||me),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Xe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:q&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:Te&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ae&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&M.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function u(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)_.push(D),_.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(y(_,M),E(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function E(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function R(M){const _=x[M.type];let D;if(_){const G=nn[_];D=ao.clone(G.uniforms)}else D=M.uniforms;return D}function w(M,_){let D;for(let G=0,V=h.length;G<V;G++){const K=h[G];if(K.cacheKey===_){D=K,++D.usedTimes;break}}return D===void 0&&(D=new kh(i,_,M,a),h.push(D)),D}function S(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:R,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:I}}function qh(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Yh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xa(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,p,x,v,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:v,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function o(d,f,p,x,v,m){const u=s(d,f,p,x,v,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(d,f,p,x,v,m){const u=s(d,f,p,x,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||Yh),n.length>1&&n.sort(f||Wa),r.length>1&&r.sort(f||Wa)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:h,sort:l}}function Kh(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Xa,i.set(n,[s])):r>=a.length?(s=new Xa,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function jh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ot};break;case"SpotLight":t={position:new H,direction:new H,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function $h(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zh=0;function Jh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qh(i){const e=new jh,t=$h(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const r=new H,a=new yt,s=new yt;function o(l){let h=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,x=0,v=0,m=0,u=0,y=0,E=0,R=0,w=0,S=0,A=0;l.sort(Jh);for(let M=0,_=l.length;M<_;M++){const D=l[M],G=D.color,V=D.intensity,K=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=G.r*V,d+=G.g*V,f+=G.b*V;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],V);A++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ce=D.shadow,Y=t.get(D);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=D.shadow.matrix,y++}n.directional[p]=Z,p++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(G).multiplyScalar(V),Z.distance=K,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[v]=Z;const ce=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,ce.updateMatrices(D),D.castShadow&&S++),n.spotLightMatrix[v]=ce.matrix,D.castShadow){const Y=t.get(D);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=j,R++}v++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(G).multiplyScalar(V),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const ce=D.shadow,Y=t.get(D);Y.shadowIntensity=ce.intensity,Y.shadowBias=ce.bias,Y.shadowNormalBias=ce.normalBias,Y.shadowRadius=ce.radius,Y.shadowMapSize=ce.mapSize,Y.shadowCameraNear=ce.camera.near,Y.shadowCameraFar=ce.camera.far,n.pointShadow[x]=Y,n.pointShadowMap[x]=j,n.pointShadowMatrix[x]=D.shadow.matrix,E++}n.point[x]=Z,x++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(V),Z.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[u]=Z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==x||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==u||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==R||I.numSpotMaps!==w||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=R+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,I.directionalLength=p,I.pointLength=x,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=u,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=R,I.numSpotMaps=w,I.numLightProbes=A,n.version=Zh++)}function c(l,h){let d=0,f=0,p=0,x=0,v=0;const m=h.matrixWorldInverse;for(let u=0,y=l.length;u<y;u++){const E=l[u];if(E.isDirectionalLight){const R=n.directional[d];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),d++}else if(E.isSpotLight){const R=n.spot[p];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const R=n.rectArea[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),s.identity(),a.copy(E.matrixWorld),a.premultiply(m),s.extractRotation(a),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(s),R.halfHeight.applyMatrix4(s),x++}else if(E.isPointLight){const R=n.point[f];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const R=n.hemi[v];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function qa(i){const e=new Qh(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function s(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function ed(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new qa(i),e.set(r,[o])):a>=s.length?(o=new qa(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const td=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function id(i,e,t){let n=new Yr;const r=new Ze,a=new Ze,s=new bt,o=new vo({depthPacking:3201}),c=new Mo,l={},h=t.maxTextureSize,d={0:1,1:0,2:2},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:td,fragmentShader:nd}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new $t;x.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let u=this.type;this.render=function(S,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),G=i.state;G.setBlending(0),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=u!==3&&this.type===3,K=u===3&&this.type!==3;for(let j=0,Z=S.length;j<Z;j++){const ce=S[j],Y=ce.shadow;if(Y===void 0){Ke("WebGLShadowMap:",ce,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const ue=Y.getFrameExtents();if(r.multiply(ue),a.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/ue.x),r.x=a.x*ue.x,Y.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/ue.y),r.y=a.y*ue.y,Y.mapSize.y=a.y)),Y.map===null||V===!0||K===!0){const Re=this.type!==3?{minFilter:1003,magFilter:1003}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Fn(r.x,r.y,Re),Y.map.texture.name=ce.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const he=Y.getViewportCount();for(let Re=0;Re<he;Re++){const Xe=Y.getViewport(Re);s.set(a.x*Xe.x,a.y*Xe.y,a.x*Xe.z,a.y*Xe.w),G.viewport(s),Y.updateMatrices(ce,Re),n=Y.getFrustum(),R(A,I,Y.camera,ce,this.type)}Y.isPointLightShadow!==!0&&this.type===3&&y(Y,I),Y.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,D)};function y(S,A){const I=e.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Fn(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,I,p,v,null)}function E(S,A,I,M){let _=null;const D=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)_=D;else if(_=I.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const G=_.uuid,V=A.uuid;let K=l[G];K===void 0&&(K={},l[G]=K);let j=K[V];j===void 0&&(j=_.clone(),K[V]=j,A.addEventListener("dispose",w)),_=j}if(_.visible=A.visible,_.wireframe=A.wireframe,M===3?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=i.properties.get(_);G.light=I}return _}function R(S,A,I,M,_){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===3)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);const V=e.update(S),K=S.material;if(Array.isArray(K)){const j=V.groups;for(let Z=0,ce=j.length;Z<ce;Z++){const Y=j[Z],ue=K[Y.materialIndex];if(ue&&ue.visible){const he=E(S,ue,M,_);S.onBeforeShadow(i,S,A,I,V,he,Y),i.renderBufferDirect(I,null,V,he,S,Y),S.onAfterShadow(i,S,A,I,V,he,Y)}}}else if(K.visible){const j=E(S,K,M,_);S.onBeforeShadow(i,S,A,I,V,j,null),i.renderBufferDirect(I,null,V,j,S,null),S.onAfterShadow(i,S,A,I,V,j,null)}}const G=S.children;for(let V=0,K=G.length;V<K;V++)R(G[V],A,I,M,_)}function w(S){S.target.removeEventListener("dispose",w);for(const I in l){const M=l[I],_=S.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const rd={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ad(i,e){function t(){let L=!1;const xe=new bt;let pe=null;const me=new bt(0,0,0,0);return{setMask:function(oe){pe!==oe&&!L&&(i.colorMask(oe,oe,oe,oe),pe=oe)},setLocked:function(oe){L=oe},setClear:function(oe,te,Ae,He,pt){pt===!0&&(oe*=He,te*=He,Ae*=He),xe.set(oe,te,Ae,He),me.equals(xe)===!1&&(i.clearColor(oe,te,Ae,He),me.copy(xe))},reset:function(){L=!1,pe=null,me.set(-1,0,0,0)}}}function n(){let L=!1,xe=!1,pe=null,me=null,oe=null;return{setReversed:function(te){if(xe!==te){const Ae=e.get("EXT_clip_control");te?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),xe=te;const He=oe;oe=null,this.setClear(He)}},getReversed:function(){return xe},setTest:function(te){te?ee(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(te){pe!==te&&!L&&(i.depthMask(te),pe=te)},setFunc:function(te){if(xe&&(te=rd[te]),me!==te){switch(te){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=te}},setLocked:function(te){L=te},setClear:function(te){oe!==te&&(xe&&(te=1-te),i.clearDepth(te),oe=te)},reset:function(){L=!1,pe=null,me=null,oe=null,xe=!1}}}function r(){let L=!1,xe=null,pe=null,me=null,oe=null,te=null,Ae=null,He=null,pt=null;return{setTest:function(Qe){L||(Qe?ee(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Qe){xe!==Qe&&!L&&(i.stencilMask(Qe),xe=Qe)},setFunc:function(Qe,Vt,kt){(pe!==Qe||me!==Vt||oe!==kt)&&(i.stencilFunc(Qe,Vt,kt),pe=Qe,me=Vt,oe=kt)},setOp:function(Qe,Vt,kt){(te!==Qe||Ae!==Vt||He!==kt)&&(i.stencilOp(Qe,Vt,kt),te=Qe,Ae=Vt,He=kt)},setLocked:function(Qe){L=Qe},setClear:function(Qe){pt!==Qe&&(i.clearStencil(Qe),pt=Qe)},reset:function(){L=!1,xe=null,pe=null,me=null,oe=null,te=null,Ae=null,He=null,pt=null}}}const a=new t,s=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,p=[],x=null,v=!1,m=null,u=null,y=null,E=null,R=null,w=null,S=null,A=new ot(0,0,0),I=0,M=!1,_=null,D=null,G=null,V=null,K=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ce=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=ce>=1):Y.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=ce>=2);let ue=null,he={};const Re=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),ct=new bt().fromArray(Re),Ce=new bt().fromArray(Xe);function nt(L,xe,pe,me){const oe=new Uint8Array(4),te=i.createTexture();i.bindTexture(L,te),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<pe;Ae++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(xe+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return te}const Q={};Q[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),s.setFunc(3),ke(!1),qe(1),ee(i.CULL_FACE),ft(0);function ee(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function be(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function We(L,xe){return d[L]!==xe?(i.bindFramebuffer(L,xe),d[L]=xe,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xe),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ie(L,xe){let pe=p,me=!1;if(L){pe=f.get(xe),pe===void 0&&(pe=[],f.set(xe,pe));const oe=L.textures;if(pe.length!==oe.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Ae=oe.length;te<Ae;te++)pe[te]=i.COLOR_ATTACHMENT0+te;pe.length=oe.length,me=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,me=!0);me&&i.drawBuffers(pe)}function q(L){return x!==L?(i.useProgram(L),x=L,!0):!1}const St={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};St[103]=i.MIN,St[104]=i.MAX;const Pe={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function ft(L,xe,pe,me,oe,te,Ae,He,pt,Qe){if(L===0){v===!0&&(be(i.BLEND),v=!1);return}if(v===!1&&(ee(i.BLEND),v=!0),L!==5){if(L!==m||Qe!==M){if((u!==100||R!==100)&&(i.blendEquation(i.FUNC_ADD),u=100,R=100),Qe)switch(L){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Et("WebGLState: Invalid blending: ",L);break}else switch(L){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",L);break}y=null,E=null,w=null,S=null,A.set(0,0,0),I=0,m=L,M=Qe}return}oe=oe||xe,te=te||pe,Ae=Ae||me,(xe!==u||oe!==R)&&(i.blendEquationSeparate(St[xe],St[oe]),u=xe,R=oe),(pe!==y||me!==E||te!==w||Ae!==S)&&(i.blendFuncSeparate(Pe[pe],Pe[me],Pe[te],Pe[Ae]),y=pe,E=me,w=te,S=Ae),(He.equals(A)===!1||pt!==I)&&(i.blendColor(He.r,He.g,He.b,pt),A.copy(He),I=pt),m=L,M=!1}function P(L,xe){L.side===2?be(i.CULL_FACE):ee(i.CULL_FACE);let pe=L.side===1;xe&&(pe=!pe),ke(pe),L.blending===1&&L.transparent===!1?ft(0):ft(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),a.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Te(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){_!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),_=L)}function qe(L){L!==0?(ee(i.CULL_FACE),L!==D&&(L===1?i.cullFace(i.BACK):L===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),D=L}function ut(L){L!==G&&(Z&&i.lineWidth(L),G=L)}function Te(L,xe,pe){L?(ee(i.POLYGON_OFFSET_FILL),(V!==xe||K!==pe)&&(i.polygonOffset(xe,pe),V=xe,K=pe)):be(i.POLYGON_OFFSET_FILL)}function Ge(L){L?ee(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function ve(L){L===void 0&&(L=i.TEXTURE0+j-1),ue!==L&&(i.activeTexture(L),ue=L)}function Oe(L,xe,pe){pe===void 0&&(ue===null?pe=i.TEXTURE0+j-1:pe=ue);let me=he[pe];me===void 0&&(me={type:void 0,texture:void 0},he[pe]=me),(me.type!==L||me.texture!==xe)&&(ue!==pe&&(i.activeTexture(pe),ue=pe),i.bindTexture(L,xe||Q[L]),me.type=L,me.texture=xe)}function T(){const L=he[ue];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function J(){try{i.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ne(){try{i.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ye(){try{i.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ge(){try{i.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function De(){try{i.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function we(){try{i.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function re(){try{i.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function fe(L){ct.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ct.copy(L))}function Fe(L){Ce.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ce.copy(L))}function Ne(L,xe){let pe=l.get(xe);pe===void 0&&(pe=new WeakMap,l.set(xe,pe));let me=pe.get(L);me===void 0&&(me=i.getUniformBlockIndex(xe,L.name),pe.set(L,me))}function Me(L,xe){const me=l.get(xe).get(L);c.get(xe)!==me&&(i.uniformBlockBinding(xe,me,L.__bindingPointIndex),c.set(xe,me))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,he={},d={},f=new WeakMap,p=[],x=null,v=!1,m=null,u=null,y=null,E=null,R=null,w=null,S=null,A=new ot(0,0,0),I=0,M=!1,_=null,D=null,G=null,V=null,K=null,ct.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ee,disable:be,bindFramebuffer:We,drawBuffers:Ie,useProgram:q,setBlending:ft,setMaterial:P,setFlipSided:ke,setCullFace:qe,setLineWidth:ut,setPolygonOffset:Te,setScissorTest:Ge,activeTexture:ve,bindTexture:Oe,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:we,texImage3D:re,updateUBOMapping:Ne,uniformBlockBinding:Me,texStorage2D:ge,texStorage3D:De,texSubImage2D:J,texSubImage3D:ne,compressedTexSubImage2D:X,compressedTexSubImage3D:ye,scissor:fe,viewport:Fe,reset:Be}}function sd(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,g){return p?new OffscreenCanvas(T,g):Mi("canvas")}function v(T,g,O){let J=1;const ne=Oe(T);if((ne.width>O||ne.height>O)&&(J=O/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(J*ne.width),ye=Math.floor(J*ne.height);d===void 0&&(d=x(X,ye));const ge=g?x(X,ye):d;return ge.width=X,ge.height=ye,ge.getContext("2d").drawImage(T,0,0,X,ye),Ke("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+X+"x"+ye+")."),ge}else return"data"in T&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,g,O,J,ne=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=g;if(g===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),g===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),g===i.RGBA){const ye=ne?tr:lt.getTransfer(J);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=ye===dt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function R(T,g){let O;return T?g===null||g===1014||g===1020?O=i.DEPTH24_STENCIL8:g===1015?O=i.DEPTH32F_STENCIL8:g===1012&&(O=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===1014||g===1020?O=i.DEPTH_COMPONENT24:g===1015?O=i.DEPTH_COMPONENT32F:g===1012&&(O=i.DEPTH_COMPONENT16),O}function w(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==1003&&T.minFilter!==1006?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function S(T){const g=T.target;g.removeEventListener("dispose",S),I(g),g.isVideoTexture&&h.delete(g)}function A(T){const g=T.target;g.removeEventListener("dispose",A),_(g)}function I(T){const g=n.get(T);if(g.__webglInit===void 0)return;const O=T.source,J=f.get(O);if(J){const ne=J[g.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(T),Object.keys(J).length===0&&f.delete(O)}n.remove(T)}function M(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const O=T.source,J=f.get(O);delete J[g.__cacheKey],s.memory.textures--}function _(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let ne=0;ne<g.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(g.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)i.deleteFramebuffer(g.__webglFramebuffer[J]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=T.textures;for(let J=0,ne=O.length;J<ne;J++){const X=n.get(O[J]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),s.memory.textures--),n.remove(O[J])}n.remove(T)}let D=0;function G(){D=0}function V(){const T=D;return T>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function K(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function j(T,g){const O=n.get(T);if(T.isVideoTexture&&Ge(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const J=T.image;if(J===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function Z(T,g){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Q(O,T,g);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function ce(T,g){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Q(O,T,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function Y(T,g){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ee(O,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const ue={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},he={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},Re={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Xe(T,g){if(g.type===1015&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===1006||g.magFilter===1007||g.magFilter===1005||g.magFilter===1008||g.minFilter===1006||g.minFilter===1007||g.minFilter===1005||g.minFilter===1008)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ue[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ue[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ue[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===1003||g.minFilter!==1005&&g.minFilter!==1008||g.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ct(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",S));const J=g.source;let ne=f.get(J);ne===void 0&&(ne={},f.set(J,ne));const X=K(g);if(X!==T.__cacheKey){ne[X]===void 0&&(ne[X]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,O=!0),ne[X].usedTimes++;const ye=ne[T.__cacheKey];ye!==void 0&&(ne[T.__cacheKey].usedTimes--,ye.usedTimes===0&&M(g)),T.__cacheKey=X,T.__webglTexture=ne[X].texture}return O}function Ce(T,g,O){return Math.floor(Math.floor(T/O)/g)}function nt(T,g,O,J){const X=T.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,J,g.data);else{X.sort((re,fe)=>re.start-fe.start);let ye=0;for(let re=1;re<X.length;re++){const fe=X[ye],Fe=X[re],Ne=fe.start+fe.count,Me=Ce(Fe.start,g.width,4),Be=Ce(fe.start,g.width,4);Fe.start<=Ne+1&&Me===Be&&Ce(Fe.start+Fe.count-1,g.width,4)===Me?fe.count=Math.max(fe.count,Fe.start+Fe.count-fe.start):(++ye,X[ye]=Fe)}X.length=ye+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),De=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let re=0,fe=X.length;re<fe;re++){const Fe=X[re],Ne=Math.floor(Fe.start/4),Me=Math.ceil(Fe.count/4),Be=Ne%g.width,L=Math.floor(Ne/g.width),xe=Me,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Be,L,xe,pe,O,J,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,De),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Q(T,g,O){let J=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=i.TEXTURE_3D);const ne=ct(T,g),X=g.source;t.bindTexture(J,T.__webglTexture,i.TEXTURE0+O);const ye=n.get(X);if(X.version!==ye.__version||ne===!0){t.activeTexture(i.TEXTURE0+O);const ge=lt.getPrimaries(lt.workingColorSpace),De=g.colorSpace===""?null:lt.getPrimaries(g.colorSpace),we=g.colorSpace===""||ge===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let re=v(g.image,!1,r.maxTextureSize);re=ve(g,re);const fe=a.convert(g.format,g.colorSpace),Fe=a.convert(g.type);let Ne=E(g.internalFormat,fe,Fe,g.colorSpace,g.isVideoTexture);Xe(J,g);let Me;const Be=g.mipmaps,L=g.isVideoTexture!==!0,xe=ye.__version===void 0||ne===!0,pe=X.dataReady,me=w(g,re);if(g.isDepthTexture)Ne=R(g.format===1027,g.type),xe&&(L?t.texStorage2D(i.TEXTURE_2D,1,Ne,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ne,re.width,re.height,0,fe,Fe,null));else if(g.isDataTexture)if(Be.length>0){L&&xe&&t.texStorage2D(i.TEXTURE_2D,me,Ne,Be[0].width,Be[0].height);for(let oe=0,te=Be.length;oe<te;oe++)Me=Be[oe],L?pe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Me.width,Me.height,fe,Fe,Me.data):t.texImage2D(i.TEXTURE_2D,oe,Ne,Me.width,Me.height,0,fe,Fe,Me.data);g.generateMipmaps=!1}else L?(xe&&t.texStorage2D(i.TEXTURE_2D,me,Ne,re.width,re.height),pe&&nt(g,re,fe,Fe)):t.texImage2D(i.TEXTURE_2D,0,Ne,re.width,re.height,0,fe,Fe,re.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Ne,Be[0].width,Be[0].height,re.depth);for(let oe=0,te=Be.length;oe<te;oe++)if(Me=Be[oe],g.format!==1023)if(fe!==null)if(L){if(pe)if(g.layerUpdates.size>0){const Ae=ya(Me.width,Me.height,g.format,g.type);for(const He of g.layerUpdates){const pt=Me.data.subarray(He*Ae/Me.data.BYTES_PER_ELEMENT,(He+1)*Ae/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,He,Me.width,Me.height,1,fe,pt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Me.width,Me.height,re.depth,fe,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Ne,Me.width,Me.height,re.depth,0,Me.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Me.width,Me.height,re.depth,fe,Fe,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Ne,Me.width,Me.height,re.depth,0,fe,Fe,Me.data)}else{L&&xe&&t.texStorage2D(i.TEXTURE_2D,me,Ne,Be[0].width,Be[0].height);for(let oe=0,te=Be.length;oe<te;oe++)Me=Be[oe],g.format!==1023?fe!==null?L?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Me.width,Me.height,fe,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Ne,Me.width,Me.height,0,Me.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?pe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Me.width,Me.height,fe,Fe,Me.data):t.texImage2D(i.TEXTURE_2D,oe,Ne,Me.width,Me.height,0,fe,Fe,Me.data)}else if(g.isDataArrayTexture)if(L){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Ne,re.width,re.height,re.depth),pe)if(g.layerUpdates.size>0){const oe=ya(re.width,re.height,g.format,g.type);for(const te of g.layerUpdates){const Ae=re.data.subarray(te*oe/re.data.BYTES_PER_ELEMENT,(te+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,fe,Fe,Ae)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Fe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,fe,Fe,re.data);else if(g.isData3DTexture)L?(xe&&t.texStorage3D(i.TEXTURE_3D,me,Ne,re.width,re.height,re.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Fe,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,fe,Fe,re.data);else if(g.isFramebufferTexture){if(xe)if(L)t.texStorage2D(i.TEXTURE_2D,me,Ne,re.width,re.height);else{let oe=re.width,te=re.height;for(let Ae=0;Ae<me;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Ne,oe,te,0,fe,Fe,null),oe>>=1,te>>=1}}else if(Be.length>0){if(L&&xe){const oe=Oe(Be[0]);t.texStorage2D(i.TEXTURE_2D,me,Ne,oe.width,oe.height)}for(let oe=0,te=Be.length;oe<te;oe++)Me=Be[oe],L?pe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,fe,Fe,Me):t.texImage2D(i.TEXTURE_2D,oe,Ne,fe,Fe,Me);g.generateMipmaps=!1}else if(L){if(xe){const oe=Oe(re);t.texStorage2D(i.TEXTURE_2D,me,Ne,oe.width,oe.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Fe,re)}else t.texImage2D(i.TEXTURE_2D,0,Ne,fe,Fe,re);m(g)&&u(J),ye.__version=X.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ee(T,g,O){if(g.image.length!==6)return;const J=ct(T,g),ne=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const X=n.get(ne);if(ne.version!==X.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const ye=lt.getPrimaries(lt.workingColorSpace),ge=g.colorSpace===""?null:lt.getPrimaries(g.colorSpace),De=g.colorSpace===""||ye===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const we=g.isCompressedTexture||g.image[0].isCompressedTexture,re=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let te=0;te<6;te++)!we&&!re?fe[te]=v(g.image[te],!0,r.maxCubemapSize):fe[te]=re?g.image[te].image:g.image[te],fe[te]=ve(g,fe[te]);const Fe=fe[0],Ne=a.convert(g.format,g.colorSpace),Me=a.convert(g.type),Be=E(g.internalFormat,Ne,Me,g.colorSpace),L=g.isVideoTexture!==!0,xe=X.__version===void 0||J===!0,pe=ne.dataReady;let me=w(g,Fe);Xe(i.TEXTURE_CUBE_MAP,g);let oe;if(we){L&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Be,Fe.width,Fe.height);for(let te=0;te<6;te++){oe=fe[te].mipmaps;for(let Ae=0;Ae<oe.length;Ae++){const He=oe[Ae];g.format!==1023?Ne!==null?L?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,He.width,He.height,Ne,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Be,He.width,He.height,0,He.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,He.width,He.height,Ne,Me,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Be,He.width,He.height,0,Ne,Me,He.data)}}}else{if(oe=g.mipmaps,L&&xe){oe.length>0&&me++;const te=Oe(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Be,te.width,te.height)}for(let te=0;te<6;te++)if(re){L?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,fe[te].width,fe[te].height,Ne,Me,fe[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,fe[te].width,fe[te].height,0,Ne,Me,fe[te].data);for(let Ae=0;Ae<oe.length;Ae++){const pt=oe[Ae].image[te].image;L?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,pt.width,pt.height,Ne,Me,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Be,pt.width,pt.height,0,Ne,Me,pt.data)}}else{L?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,Me,fe[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,Ne,Me,fe[te]);for(let Ae=0;Ae<oe.length;Ae++){const He=oe[Ae];L?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,Ne,Me,He.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Be,Ne,Me,He.image[te])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),X.__version=ne.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function be(T,g,O,J,ne,X){const ye=a.convert(O.format,O.colorSpace),ge=a.convert(O.type),De=E(O.internalFormat,ye,ge,O.colorSpace),we=n.get(g),re=n.get(O);if(re.__renderTarget=g,!we.__hasExternalTextures){const fe=Math.max(1,g.width>>X),Fe=Math.max(1,g.height>>X);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,X,De,fe,Fe,g.depth,0,ye,ge,null):t.texImage2D(ne,X,De,fe,Fe,0,ye,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Te(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,re.__webglTexture,0,ut(g)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,re.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(T,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const J=g.depthTexture,ne=J&&J.isDepthTexture?J.type:null,X=R(g.stencilBuffer,ne),ye=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=ut(g);Te(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,X,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,X,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,X,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,T)}else{const J=g.textures;for(let ne=0;ne<J.length;ne++){const X=J[ne],ye=a.convert(X.format,X.colorSpace),ge=a.convert(X.type),De=E(X.internalFormat,ye,ge,X.colorSpace),we=ut(g);O&&Te(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,De,g.width,g.height):Te(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,De,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,De,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(g.depthTexture);J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const ne=J.__webglTexture,X=ut(g);if(g.depthTexture.format===1026)Te(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(g.depthTexture.format===1027)Te(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function q(T){const g=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const ne=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),g.__depthDisposeCallback=ne}g.__boundDepthTexture=J}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const J=T.texture.mipmaps;J&&J.length>0?Ie(g.__webglFramebuffer[0],T):Ie(g.__webglFramebuffer,T)}else if(O){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=i.createRenderbuffer(),We(g.__webglDepthbuffer[J],T,!1);else{const ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,X)}}else{const J=T.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),We(g.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function St(T,g,O){const J=n.get(T);g!==void 0&&be(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&q(T)}function Pe(T){const g=T.texture,O=n.get(T),J=n.get(g);T.addEventListener("dispose",A);const ne=T.textures,X=T.isWebGLCubeRenderTarget===!0,ye=ne.length>1;if(ye||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=g.version,s.memory.textures++),X){O.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[ge]=[];for(let De=0;De<g.mipmaps.length;De++)O.__webglFramebuffer[ge][De]=i.createFramebuffer()}else O.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let ge=0;ge<g.mipmaps.length;ge++)O.__webglFramebuffer[ge]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ye)for(let ge=0,De=ne.length;ge<De;ge++){const we=n.get(ne[ge]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),s.memory.textures++)}if(T.samples>0&&Te(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ge=0;ge<ne.length;ge++){const De=ne[ge];O.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ge]);const we=a.convert(De.format,De.colorSpace),re=a.convert(De.type),fe=E(De.internalFormat,we,re,De.colorSpace,T.isXRRenderTarget===!0),Fe=ut(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,fe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,O.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),We(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,g);for(let ge=0;ge<6;ge++)if(g.mipmaps&&g.mipmaps.length>0)for(let De=0;De<g.mipmaps.length;De++)be(O.__webglFramebuffer[ge][De],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De);else be(O.__webglFramebuffer[ge],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ge=0,De=ne.length;ge<De;ge++){const we=ne[ge],re=n.get(we);let fe=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,re.__webglTexture),Xe(fe,we),be(O.__webglFramebuffer,T,we,i.COLOR_ATTACHMENT0+ge,fe,0),m(we)&&u(fe)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,J.__webglTexture),Xe(ge,g),g.mipmaps&&g.mipmaps.length>0)for(let De=0;De<g.mipmaps.length;De++)be(O.__webglFramebuffer[De],T,g,i.COLOR_ATTACHMENT0,ge,De);else be(O.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,ge,0);m(g)&&u(ge),t.unbindTexture()}T.depthBuffer&&q(T)}function ft(T){const g=T.textures;for(let O=0,J=g.length;O<J;O++){const ne=g[O];if(m(ne)){const X=y(T),ye=n.get(ne).__webglTexture;t.bindTexture(X,ye),u(X),t.unbindTexture()}}}const P=[],ke=[];function qe(T){if(T.samples>0){if(Te(T)===!1){const g=T.textures,O=T.width,J=T.height;let ne=i.COLOR_BUFFER_BIT;const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(T),ge=g.length>1;if(ge)for(let we=0;we<g.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const De=T.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<g.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const re=n.get(g[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,ne,i.NEAREST),c===!0&&(P.length=0,ke.length=0,P.push(i.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(P.push(X),ke.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let we=0;we<g.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const re=n.get(g[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ut(T){return Math.min(r.maxSamples,T.samples)}function Te(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ge(T){const g=s.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function ve(T,g){const O=T.colorSpace,J=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Qn&&O!==""&&(lt.getTransfer(O)===dt?(J!==1023||ne!==1009)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",O)),g}function Oe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=ce,this.setTextureCube=Y,this.rebindTextures=St,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Te}function od(i,e){function t(n,r=""){let a;const s=lt.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(s===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===36196||n===37492)return s===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===37808)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return s===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===36492)return s===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===36283)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const ld=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ud{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new us(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new tn({vertexShader:ld,fragmentShader:cd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hd extends ti{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,x=null;const v=typeof XRWebGLBinding<"u",m=new ud,u={},y=t.getContextAttributes();let E=null,R=null;const w=[],S=[],A=new Ze;let I=null;const M=new jt;M.viewport=new bt;const _=new jt;_.viewport=new bt;const D=[M,_],G=new Co;let V=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ee=w[Q];return ee===void 0&&(ee=new Tr,w[Q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Q){let ee=w[Q];return ee===void 0&&(ee=new Tr,w[Q]=ee),ee.getGripSpace()},this.getHand=function(Q){let ee=w[Q];return ee===void 0&&(ee=new Tr,w[Q]=ee),ee.getHandSpace()};function j(Q){const ee=S.indexOf(Q.inputSource);if(ee===-1)return;const be=w[ee];be!==void 0&&(be.update(Q.inputSource,Q.frame,l||s),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<w.length;Q++){const ee=S[Q];ee!==null&&(S[Q]=null,w[Q].disconnect(ee))}V=null,K=null,m.reset();for(const Q in u)delete u[Q];e.setRenderTarget(E),p=null,f=null,d=null,r=null,R=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,We=null,Ie=null;y.depth&&(Ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?1027:1026,We=y.stencil?1020:1014);const q={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(q),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new Fn(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new cs(f.textureWidth,f.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Fn(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(Q){for(let ee=0;ee<Q.removed.length;ee++){const be=Q.removed[ee],We=S.indexOf(be);We>=0&&(S[We]=null,w[We].disconnect(be))}for(let ee=0;ee<Q.added.length;ee++){const be=Q.added[ee];let We=S.indexOf(be);if(We===-1){for(let q=0;q<w.length;q++)if(q>=S.length){S.push(be),We=q;break}else if(S[q]===null){S[q]=be,We=q;break}if(We===-1)break}const Ie=w[We];Ie&&Ie.connect(be)}}const Y=new H,ue=new H;function he(Q,ee,be){Y.setFromMatrixPosition(ee.matrixWorld),ue.setFromMatrixPosition(be.matrixWorld);const We=Y.distanceTo(ue),Ie=ee.projectionMatrix.elements,q=be.projectionMatrix.elements,St=Ie[14]/(Ie[10]-1),Pe=Ie[14]/(Ie[10]+1),ft=(Ie[9]+1)/Ie[5],P=(Ie[9]-1)/Ie[5],ke=(Ie[8]-1)/Ie[0],qe=(q[8]+1)/q[0],ut=St*ke,Te=St*qe,Ge=We/(-ke+qe),ve=Ge*-ke;if(ee.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ve),Q.translateZ(Ge),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ie[10]===-1)Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Oe=St+Ge,T=Pe+Ge,g=ut-ve,O=Te+(We-ve),J=ft*Pe/T*Oe,ne=P*Pe/T*Oe;Q.projectionMatrix.makePerspective(g,O,J,ne,Oe,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Re(Q,ee){ee===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ee.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ee=Q.near,be=Q.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(be=m.depthFar)),G.near=_.near=M.near=ee,G.far=_.far=M.far=be,(V!==G.near||K!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),V=G.near,K=G.far),G.layers.mask=Q.layers.mask|6,M.layers.mask=G.layers.mask&3,_.layers.mask=G.layers.mask&5;const We=Q.parent,Ie=G.cameras;Re(G,We);for(let q=0;q<Ie.length;q++)Re(Ie[q],We);Ie.length===2?he(G,M,_):G.projectionMatrix.copy(M.projectionMatrix),Xe(Q,G,We)};function Xe(Q,ee,be){be===null?Q.matrix.copy(ee.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ee.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=bi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Q){return u[Q]};let ct=null;function Ce(Q,ee){if(h=ee.getViewerPose(l||s),x=ee,h!==null){const be=h.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let We=!1;be.length!==G.cameras.length&&(G.cameras.length=0,We=!0);for(let Pe=0;Pe<be.length;Pe++){const ft=be[Pe];let P=null;if(p!==null)P=p.getViewport(ft);else{const qe=d.getViewSubImage(f,ft);P=qe.viewport,Pe===0&&(e.setRenderTargetTextures(R,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(R))}let ke=D[Pe];ke===void 0&&(ke=new jt,ke.layers.enable(Pe),ke.viewport=new bt,D[Pe]=ke),ke.matrix.fromArray(ft.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ft.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(P.x,P.y,P.width,P.height),Pe===0&&(G.matrix.copy(ke.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),We===!0&&G.cameras.push(ke)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Pe=d.getDepthInformation(be[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,r.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Pe=0;Pe<be.length;Pe++){const ft=be[Pe].camera;if(ft){let P=u[ft];P||(P=new us,u[ft]=P);const ke=d.getCameraImage(ft);P.sourceTexture=ke}}}}for(let be=0;be<w.length;be++){const We=S[be],Ie=w[be];We!==null&&Ie!==void 0&&Ie.update(We,ee,l||s)}ct&&ct(Q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),x=null}const nt=new fs;nt.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){ct=Q},this.dispose=function(){}}}const Pn=new an,dd=new yt;function fd(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,ss(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,y,E,R){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,R)):u.isMeshMatcapMaterial?(a(m,u),x(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),v(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,y,E):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===1&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===1&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=e.get(u),E=y.envMap,R=y.envMapRotation;E&&(m.envMap.value=E,Pn.copy(R),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),m.envMapRotation.value.setFromMatrix4(dd.makeRotationFromEuler(Pn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,y,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=E*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===1&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const y=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pd(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const R=E.program;n.uniformBlockBinding(y,R)}function l(y,E){let R=r[y.id];R===void 0&&(x(y),R=h(y),r[y.id]=R,y.addEventListener("dispose",m));const w=E.program;n.updateUBOMapping(y,w);const S=e.render.frame;a[y.id]!==S&&(f(y),a[y.id]=S)}function h(y){const E=d();y.__bindingPointIndex=E;const R=i.createBuffer(),w=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,w,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,R),R}function d(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const E=r[y.id],R=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let S=0,A=R.length;S<A;S++){const I=Array.isArray(R[S])?R[S]:[R[S]];for(let M=0,_=I.length;M<_;M++){const D=I[M];if(p(D,S,M,w)===!0){const G=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let j=0;j<V.length;j++){const Z=V[j],ce=v(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,G+K,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,K),K+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,E,R,w){const S=y.value,A=E+"_"+R;if(w[A]===void 0)return typeof S=="number"||typeof S=="boolean"?w[A]=S:w[A]=S.clone(),!0;{const I=w[A];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return w[A]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function x(y){const E=y.uniforms;let R=0;const w=16;for(let A=0,I=E.length;A<I;A++){const M=Array.isArray(E[A])?E[A]:[E[A]];for(let _=0,D=M.length;_<D;_++){const G=M[_],V=Array.isArray(G.value)?G.value:[G.value];for(let K=0,j=V.length;K<j;K++){const Z=V[K],ce=v(Z),Y=R%w,ue=Y%ce.boundary,he=Y+ue;R+=ue,he!==0&&w-he<ce.storage&&(R+=w-he),G.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=R,R+=ce.storage}}}const S=R%w;return S>0&&(R+=w-S),y.__size=R,y.__cache={},this}function v(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ke("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const R=s.indexOf(E.__bindingPointIndex);s.splice(R,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete a[E.id]}function u(){for(const y in r)i.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:c,update:l,dispose:u}}const md=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let fn=null;function xd(){return fn===null&&(fn=new fo(md,32,32,1030,1016),fn.minFilter=1006,fn.magFilter=1006,fn.wrapS=1001,fn.wrapT=1001,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class gd{constructor(e={}){const{canvas:t=ys(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const x=new Set([1033,1031,1029]),v=new Set([1009,1014,1012,1020,1017,1018]),m=new Uint32Array(4),u=new Int32Array(4);let y=null,E=null;const R=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=Kt;let I=0,M=0,_=null,D=-1,G=null;const V=new bt,K=new bt;let j=null;const Z=new ot(0);let ce=0,Y=t.width,ue=t.height,he=1,Re=null,Xe=null;const ct=new bt(0,0,Y,ue),Ce=new bt(0,0,Y,ue);let nt=!1;const Q=new Yr;let ee=!1,be=!1;const We=new yt,Ie=new H,q=new bt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function ft(){return _===null?he:1}let P=n;function ke(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r181"),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),P===null){const F="webgl2";if(P=ke(F,b),P===null)throw ke(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let qe,ut,Te,Ge,ve,Oe,T,g,O,J,ne,X,ye,ge,De,we,re,fe,Fe,Ne,Me,Be,L,xe;function pe(){qe=new Tu(P),qe.init(),Be=new od(P,qe),ut=new xu(P,qe,e,Be),Te=new ad(P,qe),ut.reversedDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),Ge=new Ru(P),ve=new qh,Oe=new sd(P,qe,Te,ve,ut,Be,Ge),T=new _u(S),g=new Eu(S),O=new Lo(P),L=new pu(P,O),J=new Au(P,O,Ge,L),ne=new Pu(P,J,O,Ge),Fe=new Cu(P,ut,Oe),we=new gu(ve),X=new Xh(S,T,g,qe,ut,L,we),ye=new fd(S,ve),ge=new Kh,De=new ed(qe),fe=new fu(S,T,g,Te,ne,p,c),re=new id(S,ne,ut),xe=new pd(P,Ge,ut,Te),Ne=new mu(P,qe,Ge),Me=new wu(P,qe,Ge),Ge.programs=X.programs,S.capabilities=ut,S.extensions=qe,S.properties=ve,S.renderLists=ge,S.shadowMap=re,S.state=Te,S.info=Ge}pe();const me=new hd(S,P);this.xr=me,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(b){b!==void 0&&(he=b,this.setSize(Y,ue,!1))},this.getSize=function(b){return b.set(Y,ue)},this.setSize=function(b,F,W=!0){if(me.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,ue=F,t.width=Math.floor(b*he),t.height=Math.floor(F*he),W===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Y*he,ue*he).floor()},this.setDrawingBufferSize=function(b,F,W){Y=b,ue=F,he=W,t.width=Math.floor(b*W),t.height=Math.floor(F*W),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(ct)},this.setViewport=function(b,F,W,k){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,F,W,k),Te.viewport(V.copy(ct).multiplyScalar(he).round())},this.getScissor=function(b){return b.copy(Ce)},this.setScissor=function(b,F,W,k){b.isVector4?Ce.set(b.x,b.y,b.z,b.w):Ce.set(b,F,W,k),Te.scissor(K.copy(Ce).multiplyScalar(he).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(b){Te.setScissorTest(nt=b)},this.setOpaqueSort=function(b){Re=b},this.setTransparentSort=function(b){Xe=b},this.getClearColor=function(b){return b.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,W=!0){let k=0;if(b){let N=!1;if(_!==null){const de=_.texture.format;N=x.has(de)}if(N){const de=_.texture.type,C=v.has(de),B=fe.getClearColor(),z=fe.getClearAlpha(),ae=B.r,ie=B.g,$=B.b;C?(m[0]=ae,m[1]=ie,m[2]=$,m[3]=z,P.clearBufferuiv(P.COLOR,0,m)):(u[0]=ae,u[1]=ie,u[2]=$,u[3]=z,P.clearBufferiv(P.COLOR,0,u))}else k|=P.COLOR_BUFFER_BIT}F&&(k|=P.DEPTH_BUFFER_BIT),W&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),fe.dispose(),ge.dispose(),De.dispose(),ve.dispose(),T.dispose(),g.dispose(),ne.dispose(),L.dispose(),xe.dispose(),X.dispose(),me.dispose(),me.removeEventListener("sessionstart",bn),me.removeEventListener("sessionend",Ai),gt.stop()};function oe(b){b.preventDefault(),Jr("WebGLRenderer: Context Lost."),A=!0}function te(){Jr("WebGLRenderer: Context Restored."),A=!1;const b=Ge.autoReset,F=re.enabled,W=re.autoUpdate,k=re.needsUpdate,N=re.type;pe(),Ge.autoReset=b,re.enabled=F,re.autoUpdate=W,re.needsUpdate=k,re.type=N}function Ae(b){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function He(b){const F=b.target;F.removeEventListener("dispose",He),pt(F)}function pt(b){Qe(b),ve.remove(b)}function Qe(b){const F=ve.get(b).programs;F!==void 0&&(F.forEach(function(W){X.releaseProgram(W)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,W,k,N,de){F===null&&(F=St);const C=N.isMesh&&N.matrixWorld.determinant()<0,B=qt(b,F,W,k,N);Te.setMaterial(k,C);let z=W.index,ae=1;if(k.wireframe===!0){if(z=J.getWireframeAttribute(W),z===void 0)return;ae=2}const ie=W.drawRange,$=W.attributes.position;let se=ie.start*ae,le=(ie.start+ie.count)*ae;de!==null&&(se=Math.max(se,de.start*ae),le=Math.min(le,(de.start+de.count)*ae)),z!==null?(se=Math.max(se,0),le=Math.min(le,z.count)):$!=null&&(se=Math.max(se,0),le=Math.min(le,$.count));const Le=le-se;if(Le<0||Le===1/0)return;L.setup(N,k,B,W,z);let Ue,ze=Ne;if(z!==null&&(Ue=O.get(z),ze=Me,ze.setIndex(Ue)),N.isMesh)k.wireframe===!0?(Te.setLineWidth(k.wireframeLinewidth*ft()),ze.setMode(P.LINES)):ze.setMode(P.TRIANGLES);else if(N.isLine){let U=k.linewidth;U===void 0&&(U=1),Te.setLineWidth(U*ft()),N.isLineSegments?ze.setMode(P.LINES):N.isLineLoop?ze.setMode(P.LINE_LOOP):ze.setMode(P.LINE_STRIP)}else N.isPoints?ze.setMode(P.POINTS):N.isSprite&&ze.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Si("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const U=N._multiDrawStarts,_e=N._multiDrawCounts,Ee=N._multiDrawCount,it=z?O.get(z).bytesPerElement:1,rt=ve.get(k).currentProgram.getUniforms();for(let mt=0;mt<Ee;mt++)rt.setValue(P,"_gl_DrawID",mt),ze.render(U[mt]/it,_e[mt])}else if(N.isInstancedMesh)ze.renderInstances(se,Le,N.count);else if(W.isInstancedBufferGeometry){const U=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,U);ze.renderInstances(se,Le,_e)}else ze.render(se,Le)};function Vt(b,F,W){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=1,b.needsUpdate=!0,En(b,F,W),b.side=0,b.needsUpdate=!0,En(b,F,W),b.side=2):En(b,F,W)}this.compile=function(b,F,W=null){W===null&&(W=b),E=De.get(W),E.init(F),w.push(E),W.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(E.pushLight(N),N.castShadow&&E.pushShadow(N))}),b!==W&&b.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(E.pushLight(N),N.castShadow&&E.pushShadow(N))}),E.setupLights();const k=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const de=N.material;if(de)if(Array.isArray(de))for(let C=0;C<de.length;C++){const B=de[C];Vt(B,W,N),k.add(B)}else Vt(de,W,N),k.add(de)}),E=w.pop(),k},this.compileAsync=function(b,F,W=null){const k=this.compile(b,F,W);return new Promise(N=>{function de(){if(k.forEach(function(C){ve.get(C).currentProgram.isReady()&&k.delete(C)}),k.size===0){N(b);return}setTimeout(de,10)}qe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let kt=null;function sn(b){kt&&kt(b)}function bn(){gt.stop()}function Ai(){gt.start()}const gt=new fs;gt.setAnimationLoop(sn),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(b){kt=b,me.setAnimationLoop(b),b===null?gt.stop():gt.start()},me.addEventListener("sessionstart",bn),me.addEventListener("sessionend",Ai),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,F,_),E=De.get(b,w.length),E.init(F),w.push(E),We.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(We,2e3,F.reversedDepth),be=this.localClippingEnabled,ee=we.init(this.clippingPlanes,be),y=ge.get(b,R.length),y.init(),R.push(y),me.enabled===!0&&me.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&ai(de,F,-1/0,S.sortObjects)}ai(b,F,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Re,Xe),Pe=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Pe&&fe.addToRenderList(y,b),this.info.render.frame++,ee===!0&&we.beginShadows();const W=E.state.shadowsArray;re.render(W,b,F),ee===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=y.opaque,N=y.transmissive;if(E.setupLights(),F.isArrayCamera){const de=F.cameras;if(N.length>0)for(let C=0,B=de.length;C<B;C++){const z=de[C];wi(k,N,b,z)}Pe&&fe.render(b);for(let C=0,B=de.length;C<B;C++){const z=de[C];si(y,b,z,z.viewport)}}else N.length>0&&wi(k,N,b,F),Pe&&fe.render(b),si(y,b,F);_!==null&&M===0&&(Oe.updateMultisampleRenderTarget(_),Oe.updateRenderTargetMipmap(_)),b.isScene===!0&&b.onAfterRender(S,b,F),L.resetDefaultState(),D=-1,G=null,w.pop(),w.length>0?(E=w[w.length-1],ee===!0&&we.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function ai(b,F,W,k){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){k&&q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(We);const C=ne.update(b),B=b.material;B.visible&&y.push(b,C,B,W,q.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const C=ne.update(b),B=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),q.copy(b.boundingSphere.center)):(C.boundingSphere===null&&C.computeBoundingSphere(),q.copy(C.boundingSphere.center)),q.applyMatrix4(b.matrixWorld).applyMatrix4(We)),Array.isArray(B)){const z=C.groups;for(let ae=0,ie=z.length;ae<ie;ae++){const $=z[ae],se=B[$.materialIndex];se&&se.visible&&y.push(b,C,se,W,q.z,$)}}else B.visible&&y.push(b,C,B,W,q.z,null)}}const de=b.children;for(let C=0,B=de.length;C<B;C++)ai(de[C],F,W,k)}function si(b,F,W,k){const{opaque:N,transmissive:de,transparent:C}=b;E.setupLightsView(W),ee===!0&&we.setGlobalState(S.clippingPlanes,W),k&&Te.viewport(V.copy(k)),N.length>0&&yn(N,F,W),de.length>0&&yn(de,F,W),C.length>0&&yn(C,F,W),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function wi(b,F,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[k.id]===void 0&&(E.state.transmissionRenderTarget[k.id]=new Fn(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const de=E.state.transmissionRenderTarget[k.id],C=k.viewport||V;de.setSize(C.z*S.transmissionResolutionScale,C.w*S.transmissionResolutionScale);const B=S.getRenderTarget(),z=S.getActiveCubeFace(),ae=S.getActiveMipmapLevel();S.setRenderTarget(de),S.getClearColor(Z),ce=S.getClearAlpha(),ce<1&&S.setClearColor(16777215,.5),S.clear(),Pe&&fe.render(W);const ie=S.toneMapping;S.toneMapping=0;const $=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),ee===!0&&we.setGlobalState(S.clippingPlanes,k),yn(b,W,k),Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de),qe.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let le=0,Le=F.length;le<Le;le++){const Ue=F[le],{object:ze,geometry:U,material:_e,group:Ee}=Ue;if(_e.side===2&&ze.layers.test(k.layers)){const it=_e.side;_e.side=1,_e.needsUpdate=!0,oi(ze,W,k,U,_e,Ee),_e.side=it,_e.needsUpdate=!0,se=!0}}se===!0&&(Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de))}S.setRenderTarget(B,z,ae),S.setClearColor(Z,ce),$!==void 0&&(k.viewport=$),S.toneMapping=ie}function yn(b,F,W){const k=F.isScene===!0?F.overrideMaterial:null;for(let N=0,de=b.length;N<de;N++){const C=b[N],{object:B,geometry:z,group:ae}=C;let ie=C.material;ie.allowOverride===!0&&k!==null&&(ie=k),B.layers.test(W.layers)&&oi(B,F,W,z,ie,ae)}}function oi(b,F,W,k,N,de){b.onBeforeRender(S,F,W,k,N,de),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(S,F,W,k,b,de),N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=1,N.needsUpdate=!0,S.renderBufferDirect(W,F,k,N,b,de),N.side=0,N.needsUpdate=!0,S.renderBufferDirect(W,F,k,N,b,de),N.side=2):S.renderBufferDirect(W,F,k,N,b,de),b.onAfterRender(S,F,W,k,N,de)}function En(b,F,W){F.isScene!==!0&&(F=St);const k=ve.get(b),N=E.state.lights,de=E.state.shadowsArray,C=N.state.version,B=X.getParameters(b,N.state,de,F,W),z=X.getProgramCacheKey(B);let ae=k.programs;k.environment=b.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(b.isMeshStandardMaterial?g:T).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,ae===void 0&&(b.addEventListener("dispose",He),ae=new Map,k.programs=ae);let ie=ae.get(z);if(ie!==void 0){if(k.currentProgram===ie&&k.lightsStateVersion===C)return on(b,B),ie}else B.uniforms=X.getUniforms(b),b.onBeforeCompile(B,S),ie=X.acquireProgram(B,z),ae.set(z,ie),k.uniforms=B.uniforms;const $=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($.clippingPlanes=we.uniform),on(b,B),k.needsLights=Ri(b),k.lightsStateVersion=C,k.needsLights&&($.ambientLightColor.value=N.state.ambient,$.lightProbe.value=N.state.probe,$.directionalLights.value=N.state.directional,$.directionalLightShadows.value=N.state.directionalShadow,$.spotLights.value=N.state.spot,$.spotLightShadows.value=N.state.spotShadow,$.rectAreaLights.value=N.state.rectArea,$.ltc_1.value=N.state.rectAreaLTC1,$.ltc_2.value=N.state.rectAreaLTC2,$.pointLights.value=N.state.point,$.pointLightShadows.value=N.state.pointShadow,$.hemisphereLights.value=N.state.hemi,$.directionalShadowMap.value=N.state.directionalShadowMap,$.directionalShadowMatrix.value=N.state.directionalShadowMatrix,$.spotShadowMap.value=N.state.spotShadowMap,$.spotLightMatrix.value=N.state.spotLightMatrix,$.spotLightMap.value=N.state.spotLightMap,$.pointShadowMap.value=N.state.pointShadowMap,$.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=ie,k.uniformsList=null,ie}function li(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=er.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function on(b,F){const W=ve.get(b);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function qt(b,F,W,k,N){F.isScene!==!0&&(F=St),Oe.resetTextureUnits();const de=F.fog,C=k.isMeshStandardMaterial?F.environment:null,B=_===null?S.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Qn,z=(k.isMeshStandardMaterial?g:T).get(k.envMap||C),ae=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ie=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),$=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,le=!!W.morphAttributes.color;let Le=0;k.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Le=S.toneMapping);const Ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ze=Ue!==void 0?Ue.length:0,U=ve.get(k),_e=E.state.lights;if(ee===!0&&(be===!0||b!==G)){const Ye=b===G&&k.id===D;we.setState(k,b,Ye)}let Ee=!1;k.version===U.__version?(U.needsLights&&U.lightsStateVersion!==_e.state.version||U.outputColorSpace!==B||N.isBatchedMesh&&U.batching===!1||!N.isBatchedMesh&&U.batching===!0||N.isBatchedMesh&&U.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&U.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&U.instancing===!1||!N.isInstancedMesh&&U.instancing===!0||N.isSkinnedMesh&&U.skinning===!1||!N.isSkinnedMesh&&U.skinning===!0||N.isInstancedMesh&&U.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&U.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&U.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&U.instancingMorph===!1&&N.morphTexture!==null||U.envMap!==z||k.fog===!0&&U.fog!==de||U.numClippingPlanes!==void 0&&(U.numClippingPlanes!==we.numPlanes||U.numIntersection!==we.numIntersection)||U.vertexAlphas!==ae||U.vertexTangents!==ie||U.morphTargets!==$||U.morphNormals!==se||U.morphColors!==le||U.toneMapping!==Le||U.morphTargetsCount!==ze)&&(Ee=!0):(Ee=!0,U.__version=k.version);let it=U.currentProgram;Ee===!0&&(it=En(k,F,N));let rt=!1,mt=!1,ht=!1;const je=it.getUniforms(),_t=U.uniforms;if(Te.useProgram(it.program)&&(rt=!0,mt=!0,ht=!0),k.id!==D&&(D=k.id,mt=!0),rt||G!==b){Te.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),je.setValue(P,"projectionMatrix",b.projectionMatrix),je.setValue(P,"viewMatrix",b.matrixWorldInverse);const et=je.map.cameraPosition;et!==void 0&&et.setValue(P,Ie.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&je.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&je.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,mt=!0,ht=!0)}if(N.isSkinnedMesh){je.setOptional(P,N,"bindMatrix"),je.setOptional(P,N,"bindMatrixInverse");const Ye=N.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),je.setValue(P,"boneTexture",Ye.boneTexture,Oe))}N.isBatchedMesh&&(je.setOptional(P,N,"batchingTexture"),je.setValue(P,"batchingTexture",N._matricesTexture,Oe),je.setOptional(P,N,"batchingIdTexture"),je.setValue(P,"batchingIdTexture",N._indirectTexture,Oe),je.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&je.setValue(P,"batchingColorTexture",N._colorsTexture,Oe));const Mt=W.morphAttributes;if((Mt.position!==void 0||Mt.normal!==void 0||Mt.color!==void 0)&&Fe.update(N,W,it),(mt||U.receiveShadow!==N.receiveShadow)&&(U.receiveShadow=N.receiveShadow,je.setValue(P,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(_t.envMap.value=z,_t.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&F.environment!==null&&(_t.envMapIntensity.value=F.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=xd()),mt&&(je.setValue(P,"toneMappingExposure",S.toneMappingExposure),U.needsLights&&ci(_t,ht),de&&k.fog===!0&&ye.refreshFogUniforms(_t,de),ye.refreshMaterialUniforms(_t,k,he,ue,E.state.transmissionRenderTarget[b.id]),er.upload(P,li(U),_t,Oe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(er.upload(P,li(U),_t,Oe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&je.setValue(P,"center",N.center),je.setValue(P,"modelViewMatrix",N.modelViewMatrix),je.setValue(P,"normalMatrix",N.normalMatrix),je.setValue(P,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ye=k.uniformsGroups;for(let et=0,Tt=Ye.length;et<Tt;et++){const Ve=Ye[et];xe.update(Ve,it),xe.bind(Ve,it)}}return it}function ci(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Ri(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(b,F,W){const k=ve.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ve.get(b.texture).__webglTexture=F,ve.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const W=ve.get(b);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Ci=P.createFramebuffer();this.setRenderTarget=function(b,F=0,W=0){_=b,I=F,M=W;let k=!0,N=null,de=!1,C=!1;if(b){const z=ve.get(b);if(z.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(z.__webglFramebuffer===void 0)Oe.setupRenderTarget(b);else if(z.__hasExternalTextures)Oe.rebindTextures(b,ve.get(b.texture).__webglTexture,ve.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const $=b.depthTexture;if(z.__boundDepthTexture!==$){if($!==null&&ve.has($)&&(b.width!==$.image.width||b.height!==$.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(b)}}const ae=b.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(C=!0);const ie=ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ie[F])?N=ie[F][W]:N=ie[F],de=!0):b.samples>0&&Oe.useMultisampledRTT(b)===!1?N=ve.get(b).__webglMultisampledFramebuffer:Array.isArray(ie)?N=ie[W]:N=ie,V.copy(b.viewport),K.copy(b.scissor),j=b.scissorTest}else V.copy(ct).multiplyScalar(he).floor(),K.copy(Ce).multiplyScalar(he).floor(),j=nt;if(W!==0&&(N=Ci),Te.bindFramebuffer(P.FRAMEBUFFER,N)&&k&&Te.drawBuffers(b,N),Te.viewport(V),Te.scissor(K),Te.setScissorTest(j),de){const z=ve.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,z.__webglTexture,W)}else if(C){const z=F;for(let ae=0;ae<b.textures.length;ae++){const ie=ve.get(b.textures[ae]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ae,ie.__webglTexture,W,z)}}else if(b!==null&&W!==0){const z=ve.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,z.__webglTexture,W)}D=-1},this.readRenderTargetPixels=function(b,F,W,k,N,de,C,B=0){if(!(b&&b.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z=ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&C!==void 0&&(z=z[C]),z){Te.bindFramebuffer(P.FRAMEBUFFER,z);try{const ae=b.textures[B],ie=ae.format,$=ae.type;if(!ut.textureFormatReadable(ie)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable($)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-k&&W>=0&&W<=b.height-N&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+B),P.readPixels(F,W,k,N,Be.convert(ie),Be.convert($),de))}finally{const ae=_!==null?ve.get(_).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(b,F,W,k,N,de,C,B=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let z=ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&C!==void 0&&(z=z[C]),z)if(F>=0&&F<=b.width-k&&W>=0&&W<=b.height-N){Te.bindFramebuffer(P.FRAMEBUFFER,z);const ae=b.textures[B],ie=ae.format,$=ae.type;if(!ut.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,se),P.bufferData(P.PIXEL_PACK_BUFFER,de.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+B),P.readPixels(F,W,k,N,Be.convert(ie),Be.convert($),0);const le=_!==null?ve.get(_).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,le);const Le=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Es(P,Le,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,de),P.deleteBuffer(se),P.deleteSync(Le),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,W=0){const k=Math.pow(2,-W),N=Math.floor(b.image.width*k),de=Math.floor(b.image.height*k),C=F!==null?F.x:0,B=F!==null?F.y:0;Oe.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,C,B,N,de),Te.unbindTexture()};const Pi=P.createFramebuffer(),Nn=P.createFramebuffer();this.copyTextureToTexture=function(b,F,W=null,k=null,N=0,de=null){de===null&&(N!==0?(Si("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=N,N=0):de=0);let C,B,z,ae,ie,$,se,le,Le;const Ue=b.isCompressedTexture?b.mipmaps[de]:b.image;if(W!==null)C=W.max.x-W.min.x,B=W.max.y-W.min.y,z=W.isBox3?W.max.z-W.min.z:1,ae=W.min.x,ie=W.min.y,$=W.isBox3?W.min.z:0;else{const Mt=Math.pow(2,-N);C=Math.floor(Ue.width*Mt),B=Math.floor(Ue.height*Mt),b.isDataArrayTexture?z=Ue.depth:b.isData3DTexture?z=Math.floor(Ue.depth*Mt):z=1,ae=0,ie=0,$=0}k!==null?(se=k.x,le=k.y,Le=k.z):(se=0,le=0,Le=0);const ze=Be.convert(F.format),U=Be.convert(F.type);let _e;F.isData3DTexture?(Oe.setTexture3D(F,0),_e=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Oe.setTexture2DArray(F,0),_e=P.TEXTURE_2D_ARRAY):(Oe.setTexture2D(F,0),_e=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Ee=P.getParameter(P.UNPACK_ROW_LENGTH),it=P.getParameter(P.UNPACK_IMAGE_HEIGHT),rt=P.getParameter(P.UNPACK_SKIP_PIXELS),mt=P.getParameter(P.UNPACK_SKIP_ROWS),ht=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ue.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$);const je=b.isDataArrayTexture||b.isData3DTexture,_t=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Mt=ve.get(b),Ye=ve.get(F),et=ve.get(Mt.__renderTarget),Tt=ve.get(Ye.__renderTarget);Te.bindFramebuffer(P.READ_FRAMEBUFFER,et.__webglFramebuffer),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ve=0;Ve<z;Ve++)je&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(b).__webglTexture,N,$+Ve),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(F).__webglTexture,de,Le+Ve)),P.blitFramebuffer(ae,ie,C,B,se,le,C,B,P.DEPTH_BUFFER_BIT,P.NEAREST);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||ve.has(b)){const Mt=ve.get(b),Ye=ve.get(F);Te.bindFramebuffer(P.READ_FRAMEBUFFER,Pi),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,Nn);for(let et=0;et<z;et++)je?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.__webglTexture,N,$+et):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mt.__webglTexture,N),_t?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ye.__webglTexture,de,Le+et):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ye.__webglTexture,de),N!==0?P.blitFramebuffer(ae,ie,C,B,se,le,C,B,P.COLOR_BUFFER_BIT,P.NEAREST):_t?P.copyTexSubImage3D(_e,de,se,le,Le+et,ae,ie,C,B):P.copyTexSubImage2D(_e,de,se,le,ae,ie,C,B);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else _t?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(_e,de,se,le,Le,C,B,z,ze,U,Ue.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(_e,de,se,le,Le,C,B,z,ze,Ue.data):P.texSubImage3D(_e,de,se,le,Le,C,B,z,ze,U,Ue):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,de,se,le,C,B,ze,U,Ue.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,de,se,le,Ue.width,Ue.height,ze,Ue.data):P.texSubImage2D(P.TEXTURE_2D,de,se,le,C,B,ze,U,Ue);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ee),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it),P.pixelStorei(P.UNPACK_SKIP_PIXELS,rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,mt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ht),de===0&&F.generateMipmaps&&P.generateMipmap(_e),Te.unbindTexture()},this.initRenderTarget=function(b){ve.get(b).__webglFramebuffer===void 0&&Oe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Oe.setTextureCube(b,0):b.isData3DTexture?Oe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Oe.setTexture2DArray(b,0):Oe.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){I=0,M=0,_=null,Te.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const _d="/assets/pocket-cursors-v1-Bby4OIya.webp",vd="/assets/pocket-extras-v2-CLnR-LhA.webp",Md="/assets/pocket-hidden-lake-v1-BggBwD20.webp",Sd="/assets/pocket-hidden-lake-v1-768-lSo4VWYS.webp",bd="/assets/pocket-moon-ground-v1-U94vQhEJ.webp",yd="/assets/pocket-moon-ground-v1-768-CtUgGVTG.webp",Ed="/assets/pocket-person-frames-v1-BTtReCjc.webp",Td="/assets/pocket-planet-background-v1-C1Cp6sLT.webp",Ad="/assets/pocket-planet-background-v1-768-CsgnTwDB.webp",wd="/assets/pocket-walk-16-v2-B6msAL6p.webp",Rd="/assets/sky-keepsakes-v1-jEUDF8c-.webp",Cd="/assets/yellow-paper-v1-B_E0s3HP.webp",Ir=typeof matchMedia=="function"&&matchMedia("(max-width: 760px)").matches,Dn=Object.freeze({cursors:_d,extras:vd,poses:Ed,walk:wd,keepsakes:Rd,paper:Cd,hiddenSky:Ir?Sd:Md,terrain:Ir?yd:bd,sky:Ir?Ad:Td});function Ya(i=!1){const e=document.createElement("canvas");e.width=e.height=40;const t=e.getContext("2d");return t&&(t.save(),t.translate(20,20),t.rotate(-.12),t.fillStyle="#f6cd62",t.strokeStyle="#5e442f",t.lineWidth=2.25,t.lineJoin="round",t.lineCap="round",t.shadowColor="rgba(54,33,63,.24)",t.shadowBlur=1.6,t.shadowOffsetY=1,t.beginPath(),i?(t.moveTo(-12,11),t.quadraticCurveTo(-15,5,-14,0),t.lineTo(-9,-7),t.quadraticCurveTo(-8,-11,-4,-12),t.lineTo(8,-12),t.quadraticCurveTo(14,-11,14,-6),t.lineTo(14,7),t.quadraticCurveTo(13,16,5,19),t.lineTo(-5,19),t.quadraticCurveTo(-10,18,-12,11),t.closePath(),t.fill(),t.stroke(),t.beginPath(),t.moveTo(-12,1),t.quadraticCurveTo(-8,0,-5,4),t.lineTo(-1,9),t.quadraticCurveTo(1,12,4,10),t.lineTo(11,4),t.stroke()):(t.moveTo(-10,15),t.quadraticCurveTo(-14,5,-14,1),t.quadraticCurveTo(-14,-2,-11,-3),t.quadraticCurveTo(-9,-3,-7,0),t.lineTo(-7,-12),t.quadraticCurveTo(-7,-15,-4,-15),t.quadraticCurveTo(-1,-15,-1,-12),t.lineTo(-1,-3),t.lineTo(0,-17),t.quadraticCurveTo(0,-20,3,-20),t.quadraticCurveTo(6,-20,6,-17),t.lineTo(6,-3),t.lineTo(7,-14),t.quadraticCurveTo(7,-17,10,-17),t.quadraticCurveTo(13,-17,13,-14),t.lineTo(13,-3),t.lineTo(14,-9),t.quadraticCurveTo(14,-12,17,-11),t.quadraticCurveTo(20,-10,19,-6),t.lineTo(17,7),t.quadraticCurveTo(15,16,8,19),t.lineTo(-2,20),t.quadraticCurveTo(-8,20,-10,15),t.closePath(),t.fill(),t.stroke()),t.shadowColor="transparent",t.strokeStyle="rgba(255,247,190,.82)",t.lineWidth=1,t.beginPath(),i?(t.moveTo(-8,-7),t.quadraticCurveTo(-3,-10,7,-9)):(t.moveTo(-4,13),t.quadraticCurveTo(3,15,10,10)),t.stroke(),t.restore()),e}function Pd(i){const e=document.createElement("canvas");e.width=e.height=40;const t=e.getContext("2d");if(!t)return e;const n=["#6da7dd","#79a9a0","#ef9d72","#d98b72","#e9c15d","#8296d1","#b58cd2","#72b5b0","#c9845b","#d7849d","#dfae68"],r=n[(Math.max(1,i)-1)%n.length];t.save(),t.translate(20,20),t.rotate(-.08),t.fillStyle=r,t.strokeStyle="#5e442f",t.lineWidth=1.9,t.lineJoin="round",t.lineCap="round",t.shadowColor="rgba(54,33,63,.24)",t.shadowBlur=1.5,t.shadowOffsetY=1;const a=()=>{t.fill(),t.stroke()};switch(i){case 1:t.beginPath(),t.moveTo(-16,3),t.lineTo(15,-8),t.lineTo(3,5),t.lineTo(13,11),t.lineTo(1,9),t.lineTo(-5,16),t.lineTo(-4,7),t.closePath(),a();break;case 2:t.fillRect(-12,-11,24,18),t.strokeRect(-12,-11,24,18),t.beginPath(),t.moveTo(-16,10),t.lineTo(16,10),t.lineTo(12,14),t.lineTo(-12,14),t.closePath(),a();break;case 3:t.beginPath(),t.moveTo(-13,-5),t.lineTo(13,-5),t.lineTo(10,12),t.lineTo(-10,12),t.closePath(),a(),t.beginPath(),t.ellipse(0,-6,13,4,0,0,Math.PI*2),a(),t.fillStyle="#fff4bd",t.beginPath(),t.arc(6,-9,2,0,Math.PI*2),t.fill();break;case 4:t.beginPath(),t.arc(0,2,14,Math.PI,0),t.lineTo(13,8),t.lineTo(-13,8),t.closePath(),a(),t.beginPath(),t.moveTo(-8,2),t.lineTo(10,2),t.stroke();break;case 5:t.beginPath(),t.moveTo(-12,-10),t.lineTo(10,-1),t.lineTo(2,6),t.lineTo(-15,-2),t.closePath(),a(),t.beginPath(),t.ellipse(5,11,4,3,0,0,Math.PI*2),a();break;case 6:t.beginPath(),t.moveTo(-16,11),t.lineTo(-2,-9),t.lineTo(4,0),t.lineTo(11,-6),t.lineTo(17,11),t.closePath(),a(),t.beginPath(),t.moveTo(-6,-3),t.lineTo(-2,-9),t.lineTo(1,-4),t.moveTo(8,-2),t.lineTo(11,-6),t.lineTo(14,-1),t.stroke();break;case 7:t.beginPath(),t.rect(-14,-12,28,23),a(),t.beginPath(),t.moveTo(-8,-3),t.lineTo(-3,1),t.lineTo(-8,5),t.moveTo(0,5),t.lineTo(8,5),t.stroke();break;case 8:t.beginPath(),t.moveTo(-15,-5),t.quadraticCurveTo(-9,-11,-3,-5),t.quadraticCurveTo(3,1,9,-5),t.quadraticCurveTo(13,-8,16,-5),t.lineTo(13,10),t.lineTo(-13,10),t.closePath(),a(),t.beginPath(),t.moveTo(-12,3),t.quadraticCurveTo(-5,-1,1,3),t.quadraticCurveTo(7,7,13,3),t.stroke();break;case 9:t.beginPath(),t.moveTo(-13,4),t.lineTo(-8,-7),t.lineTo(7,-7),t.lineTo(14,4),t.lineTo(14,10),t.lineTo(-13,10),t.closePath(),a(),t.fillStyle="#5e442f",t.beginPath(),t.arc(-8,10,3,0,Math.PI*2),t.arc(9,10,3,0,Math.PI*2),t.fill();break;case 10:t.beginPath(),t.ellipse(-3,-5,10,13,-.2,0,Math.PI*2),a(),t.beginPath(),t.moveTo(4,5),t.lineTo(13,16),t.stroke();break;default:t.beginPath(),t.moveTo(-13,-3),t.lineTo(13,-3),t.lineTo(9,12),t.lineTo(-9,12),t.closePath(),a(),t.beginPath(),t.arc(-5,-8,4,Math.PI,0),t.arc(5,-8,4,Math.PI,0),t.stroke();break}return t.shadowColor="transparent",t.fillStyle="#fff5bd",t.beginPath(),t.arc(14,-13,1.7,0,Math.PI*2),t.fill(),t.restore(),e}function Dd(i,e){const t=document.createElement("canvas");t.width=t.height=40,t.className="scene-cursor",t.hidden=!0,t.setAttribute("aria-hidden","true"),document.body.appendChild(t);const n=t.getContext("2d"),r=new Map,a=new Image;let s=!1,o=null,c=null,l=!1,h=null,d="",f=null;function p(u){c={x:u.clientX,y:u.clientY};const y=`translate3d(${c.x-20}px,${c.y-20}px,0) scale(${l?.9:1})`;y!==d&&(t.style.transform=y,d=y)}function x(u){if(r.has(u))return r.get(u);const y=/^prop-(\d+)$/.exec(u||"");if(!y)return null;const E=Pd(Number(y[1]));return r.set(u,E),E}function v(){if(s||!o||!c)return;const u=x(o);if(!(f===o&&u&&h===o&&!t.hidden)){if(!u){t.hidden=!0,delete i.dataset.customCursor,i.style.cursor=o==="grab"?"grab":o==="grabbing"?"grabbing":"crosshair",delete document.documentElement.dataset.pocketCursor,i.closest(".sky-play").dataset.cursorState=o;return}h!==o&&(n.clearRect(0,0,40,40),n.drawImage(u,0,0),h=o),t.hidden=!1,document.documentElement.dataset.pocketCursor!=="active"&&(document.documentElement.dataset.pocketCursor="active"),i.dataset.customCursor=o,i.style.cursor="none",i.closest(".sky-play").dataset.cursorState=o,f=o}}function m(){!o&&t.hidden||(delete document.documentElement.dataset.pocketCursor,o=f=null,t.hidden=!0,delete i.dataset.customCursor,delete i.closest(".sky-play").dataset.cursorState,i.style.removeProperty("cursor"))}return a.onload=()=>{if(s)return;["eraser","head","body","pocket","left","right"].forEach((y,E)=>{const R=document.createElement("canvas");R.width=R.height=128;const w=R.getContext("2d");w.drawImage(a,E%3*a.width/3,Math.floor(E/3)*a.height/2,a.width/3,a.height/2,0,0,128,128);const S=w.getImageData(0,0,128,128);let A=128,I=128,M=-1,_=-1;for(let j=0;j<S.data.length;j+=4){if(S.data[j+3]<220){S.data[j+3]=0;continue}const Z=j/4%128,ce=Math.floor(j/4/128);A=Math.min(A,Z),M=Math.max(M,Z),I=Math.min(I,ce),_=Math.max(_,ce)}w.putImageData(S,0,0);const D=M-A+1,G=_-I+1;if(D<=0||G<=0)return;const V=document.createElement("canvas");V.width=V.height=40;const K=36/Math.max(D,G);V.getContext("2d").drawImage(R,A,I,D,G,(40-D*K)/2,(40-G*K)/2,D*K,G*K),r.set(y,V)}),r.set("grab",Ya(!1)),r.set("grabbing",Ya(!0));const u=["eraser","head","body","pocket","left","right","grab","grabbing"];i.closest(".sky-play").dataset.cursors=u.every(y=>r.has(y))?"ready":"failed",v()},a.onerror=()=>{s||(i.closest(".sky-play").dataset.cursors="failed")},a.src=e,{move:p,show(u,y,E=!1){o=u,l=E,p(y),v()},hide:m,dispose(){s=!0,a.onload=a.onerror=null,m(),t.remove(),r.clear()}}}const Pt=Object.freeze({NONE:0,BODY:1,HEAD:2,POCKET:3,LEFT:4,RIGHT:5}),Ka=Object.freeze({[Pt.HEAD]:"head",[Pt.POCKET]:"pocket",[Pt.LEFT]:"left",[Pt.RIGHT]:"right",[Pt.BODY]:"body"}),ja=new WeakMap,kr=28,$a=i=>Math.max(0,Math.min(1,i));function Za(i,e){return i[e+3]>=kr}function Ld(i,e,t,n,r){return n>.48&&n<.94&&r>.34&&r<.82&&i>150&&i>e*1.48&&e<150&&t<135}function Ud(i,e,t,n){return n>.74&&e>i*.9&&e>t*1.18&&i<180&&t<145}function Id(i,e,t,n,r){if(r>.5||n<.14||n>.88)return!1;const a=e>i*.84&&e>t*1.12&&i<205,s=i>e*1.02&&e>t*1.28&&i>115;return a||s&&n>.22&&n<.82}function Fd(i,e){if(i.length<12)return null;let t=e,n=-1;for(const o of i){const c=o%e;t=Math.min(t,c),n=Math.max(n,c)}if(n-t<70)return null;let r=t+(n-t)*.3,a=t+(n-t)*.7;for(let o=0;o<8;o++){let c=0,l=0,h=0,d=0;for(const f of i){const p=f%e;Math.abs(p-r)<=Math.abs(p-a)?(c+=p,l++):(h+=p,d++)}if(!l||!d)return null;r=c/l,a=h/d}if(Math.abs(a-r)<8)return null;const s=[[],[]];for(const o of i){const c=o%e;s[Math.abs(c-r)<=Math.abs(c-a)?0:1].push(o)}return s.some(o=>o.length<4)?null:[{members:s[0],cx:r},{members:s[1],cx:a}]}function Nd(i){const e=i==null?void 0:i.image;if(!(e!=null&&e.width)||!(e!=null&&e.height)||typeof e.getContext!="function")return null;const t=e.getContext("2d");if(!(t!=null&&t.getImageData))return null;const{width:n,height:r}=e,a=t.getImageData(0,0,n,r).data,s=n*r;let o=n,c=r,l=-1,h=-1;for(let w=0;w<s;w++){const S=w*4;if(!Za(a,S))continue;const A=w%n,I=Math.floor(w/n);o=Math.min(o,A),l=Math.max(l,A),c=Math.min(c,I),h=Math.max(h,I)}if(l<0)return{width:n,height:r,alpha:new Uint8Array(s),mask:new Uint8Array(s),bounds:null};const d=Math.max(1,l-o+1),f=Math.max(1,h-c+1),p=new Uint8Array(s),x=new Uint8Array(s),v=new Uint8Array(s),m=new Uint8Array(s);for(let w=0;w<s;w++){const S=w*4;if(!Za(a,S))continue;p[w]=a[S+3];const A=w%n,I=Math.floor(w/n),M=(A-o)/d,_=(I-c)/f,[D,G,V]=a.subarray(S,S+3);x[w]=Pt.BODY,Id(D,G,V,M,_)&&(x[w]=Pt.HEAD),Ld(D,G,V,M,_)&&(v[w]=1,x[w]=Pt.POCKET),Ud(D,G,V,_)&&(m[w]=1)}for(let w=0;w<2;w++){for(let S=c;S<=h;S++){let A=n,I=-1;for(let M=o;M<=l;M++)x[S*n+M]===Pt.HEAD&&(A=Math.min(A,M),I=M);for(let M=A;M<=I;M++){const _=S*n+M;p[_]&&x[_]===Pt.BODY&&(x[_]=Pt.HEAD)}}for(let S=o;S<=l;S++){let A=r,I=-1;for(let M=c;M<=h;M++)x[M*n+S]===Pt.HEAD&&(A=Math.min(A,M),I=M);for(let M=A;M<=I;M++){const _=M*n+S;p[_]&&x[_]===Pt.BODY&&(x[_]=Pt.HEAD)}}}const u=new Uint8Array(s),y=[];for(let w=0;w<s;w++){if(!m[w]||u[w])continue;const S=[w];u[w]=1;const A=[];let I=0,M=0,_=n,D=r,G=-1,V=-1;for(let K=0;K<S.length;K++){const j=S[K],Z=j%n,ce=Math.floor(j/n);A.push(j),I+=Z,M+=ce,_=Math.min(_,Z),G=Math.max(G,Z),D=Math.min(D,ce),V=Math.max(V,ce);for(let Y=-1;Y<=1;Y++)for(let ue=-1;ue<=1;ue++){if(!ue&&!Y)continue;const he=Z+ue,Re=ce+Y;if(he<0||he>=n||Re<0||Re>=r)continue;const Xe=Re*n+he;m[Xe]&&!u[Xe]&&(u[Xe]=1,S.push(Xe))}}A.length>=4&&y.push({members:A,cx:I/A.length,cy:M/A.length,minX:_,minY:D,maxX:G,maxY:V})}y.sort((w,S)=>S.members.length-w.members.length);let R=y.filter(w=>w.members.length>=200&&w.maxY-w.minY>=10).slice(0,2).sort((w,S)=>w.cx-S.cx);if(R.length===1){const w=Fd(R[0].members,n);w&&(R=w.sort((S,A)=>S.cx-A.cx))}if(R.length===2)R[0].members.forEach(w=>{x[w]=Pt.LEFT}),R[1].members.forEach(w=>{x[w]=Pt.RIGHT});else if(R.length===1){const w=R[0].cx<(o+l)/2?Pt.LEFT:Pt.RIGHT;R[0].members.forEach(S=>{x[S]=w})}return{width:n,height:r,alpha:p,mask:x,bounds:{minX:o,minY:c,maxX:l,maxY:h}}}function _s(i){if(!i)return null;let e=ja.get(i);return e||(e=Nd(i),e&&ja.set(i,e)),e}function Od(i,e,t=1,n=null){var f;const r=_s(i);if(!(r!=null&&r.bounds)||!e||!Number.isFinite(e.x)||!Number.isFinite(e.y))return null;const a=$a(t<0?1-e.x:e.x),s=$a(1-e.y),o=Math.min(r.width-1,Math.max(0,Math.floor(a*r.width))),c=Math.min(r.height-1,Math.max(0,Math.floor(s*r.height))),l=c*r.width+o;if(r.alpha[l]<kr)return null;const h=(f=Object.entries(Ka).find(([,p])=>p===n))==null?void 0:f[0],d=Math.max(1,Math.round(Math.min(r.width,r.height)*.009));if(h&&r.mask[l]!==Number(h))for(let p=-d;p<=d;p++)for(let x=-d;x<=d;x++){if(x*x+p*p>d*d)continue;const v=o+x,m=c+p;if(v<0||m<0||v>=r.width||m>=r.height||r.mask[m*r.width+v]!==Number(h))continue;let u=!0;const y=Math.max(Math.abs(x),Math.abs(p));for(let E=1;E<=y;E++)if(r.alpha[(c+Math.round(p*E/y))*r.width+o+Math.round(x*E/y)]<kr){u=!1;break}if(u)return n}return Ka[r.mask[l]]||"body"}const Fr=20;function vs(i,e){return{x:(i.clientX-e.left)/e.width,y:(i.clientY-e.top)/e.height}}function Bd(i,e,t,n){const r=e*.69,a=Math.max(t/i,n/r),s=i*a,o=r*a;return{sourceHeight:r,x:(t-s)*.93,y:0,width:s,height:o}}const zd=(i,e,t)=>Math.max(e,Math.min(t,i)),Nr=[{name:"underhand",duration:.8,lift:.35,speed:2.8,up:2.4,spin:1.8},{name:"overhead",duration:1.05,lift:1.05,speed:3.7,up:3.6,spin:-3},{name:"sideways",duration:.65,lift:.5,speed:5,up:1.6,spin:4},{name:"double-take",duration:1.2,lift:.65,speed:2.1,up:3.1,spin:-1.5}];function Gd(i,e,{floor:t,bounds:n,held:r}){const a=Math.max(1,Math.ceil(e/.008333333333333333)),s=e/a;for(let o=0;o<a;o++){for(const c of i){if(c===r||c.pull)continue;const l=c.fall??(c.fall={vx:0,vy:0,spin:0});l.vy-=7*s,c.home.x+=l.vx*s,c.home.y+=l.vy*s;const[h,d]=n(c),f=c.radius;(c.home.x<h+f||c.home.x>d-f)&&(c.home.x=zd(c.home.x,h+f,d-f),l.vx*=-.62,l.spin*=-.6);const p=t(c);c.home.y<p&&(c.home.y=p,l.vy=Math.abs(l.vy)>.45?-l.vy*.42:0,l.vx*=Math.exp(-3.2*s),l.spin*=Math.exp(-5*s)),l.vx*=Math.exp(-.15*s),c.angle=(c.angle||0)+(l.spin||0)*s}for(let c=0;c<i.length;c++)for(let l=c+1;l<i.length;l++){const h=i[c],d=i[l];if(h.pull||d.pull)continue;const f=d.home.x-h.home.x,p=d.home.y-h.home.y,x=Math.hypot(f,p),v=h.radius+d.radius;if(x>=v)continue;const m=x>1e-4?f/x:1,u=x>1e-4?p/x:0,y=h===r?0:1,E=d===r?0:1,R=y+E;if(!R)continue;const w=v-x;h.home.x-=m*w*y/R,h.home.y-=u*w*y/R,d.home.x+=m*w*E/R,d.home.y+=u*w*E/R;const S=h.fall??(h.fall={vx:0,vy:0,spin:0}),A=d.fall??(d.fall={vx:0,vy:0,spin:0}),I=(A.vx-S.vx)*m+(A.vy-S.vy)*u;if(I<0){const M=-1.5*I/R;S.vx-=M*m*y,S.vy-=M*u*y,A.vx+=M*m*E,A.vy+=M*u*E,S.spin-=M*.35,A.spin+=M*.35}}}}function kd({render:i,fast:e,running:t,raf:n=requestAnimationFrame,cancel:r=cancelAnimationFrame,now:a=()=>performance.now(),delay:s=setTimeout,clear:o=clearTimeout}){let c=0,l=0,h=null,d=0,f=!1;function p(){r(c),o(l),c=l=0,h=null,d=0}function x(m){if(c=0,f||!t()){p();return}const u=h===null?0:Math.min(.1,Math.max(0,(m-h)/1e3));h=m,d=m+1e3/30,i(m,u)!==!1?v():p()}function v(){if(f||!t())return;const m=e();if(m&&l&&(o(l),l=0),c||l)return;const u=m?0:Math.max(0,d-a()-8);u>1?l=s(()=>{l=0,!f&&t()&&(c=n(x))},u):c=n(x)}return{wake:v,stop:p,dispose(){f=!0,p()}}}const Ja=[[.22,.43,.16,.1,10,1.2,.43],[.46,.5,.13,.17,13,4.1,.4],[.75,.42,.16,.11,11,2.8,.44],[.32,.59,.12,.13,10,1.2+Math.PI,.38],[.57,.59,.15,.13,13,4.1+Math.PI,.4],[.8,.57,.12,.14,11,2.8+Math.PI,.37]];function Vd(i,e){const t=e*Math.PI*2/i[4]+i[5];return{alpha:.035+i[6]*Math.pow((1+Math.sin(t))/2,1.5),x:Math.sin(t*.71)*.018,y:Math.cos(t*.83)*.014}}function Hd(i,e,t){const n=i.getContext("2d"),r=new Image;let a=0,s=0,o=[],c=!1,l=-1,h=-1;function d(f,p){if(f===a&&p===s&&o.length)return;a=f,s=p;const x=Math.min(.65,800/f);if(i.width=Math.max(1,Math.round(f*x)),i.height=Math.max(1,Math.round(p*x*.75)),o=[],l=-1,!r.naturalWidth)return;const v=Math.max(f/r.width,p/r.height),m=r.width*v,u=r.height*v;for(const y of Ja){const E=Math.ceil(f*y[2]*2*x),R=Math.ceil(p*y[3]*2*x),w=document.createElement("canvas");w.width=E,w.height=R;const S=w.getContext("2d"),A=f*(y[0]-y[2]),I=p*(y[1]-y[3]);S.filter="blur(2px) saturate(.96)",S.drawImage(r,((f-m)/2-A)*x,((p-u)/2-I)*x,m*x,u*x),S.filter="none",S.globalCompositeOperation="destination-in";const M=document.createElement("canvas");M.width=E,M.height=R;const _=M.getContext("2d");for(const[D,G,V,K]of[[.45,.56,.49,.43],[.7,.31,.29,.31]]){_.save(),_.translate(E*D,R*G),_.scale(E*V,R*K);const j=_.createRadialGradient(0,0,.18,0,0,1);j.addColorStop(0,"#fff"),j.addColorStop(.55,"#fffd"),j.addColorStop(1,"#fff0"),_.fillStyle=j,_.fillRect(-1,-1,2,2),_.restore()}S.drawImage(M,0,0),o.push({tile:w,left:A*x,top:I*x})}}return r.onload=()=>{!c&&a&&s&&(d(a,s),t())},r.src=e,{resize:d,render(f,p=!1,x=null,v=0){f=p?0:f,!(f===l&&v===h)&&(l=f,h=v,n.clearRect(0,0,i.width,i.height),o.forEach(({tile:m,left:u,top:y},E)=>{const R=Vd(Ja[E],f);n.globalAlpha=R.alpha,n.drawImage(m,u+R.x*i.width,y+R.y*i.height)}),n.globalAlpha=1,x&&(n.globalCompositeOperation="destination-in",n.drawImage(x,0,0,x.width,x.height*.75,0,0,i.width,i.height),n.globalCompositeOperation="source-over"))},dispose(){c=!0,r.onload=null,o=[]}}}function Wd(i,e,t,n,r){const a=document.createElement("canvas"),s=new Image;let o=0,c=0,l=null,h=[],d=!0,f=!1,p=!1,x=!1,v=null,m=0,u=0;function y(S){const A=v;v=S,e.style.maskImage=S?`url("${S}")`:"none",A&&URL.revokeObjectURL(A)}function E(S,A){S=Math.max(1,Math.round(S)),A=Math.max(1,Math.round(A));const I=Math.min(globalThis.devicePixelRatio||1,1.25);if(o===S&&c===A&&i.width===Math.round(S*I))return;o=S,c=A,m++,l=null;const M=document.createElement("canvas");M.width=a.width,M.height=a.height,a.width&&a.height&&M.getContext("2d").drawImage(a,0,0),i.width=Math.round(S*I),i.height=Math.round(A*I),a.width=S,a.height=A;const _=a.getContext("2d");_.fillStyle="#fff",_.fillRect(0,0,a.width,a.height),t.dataset.revealed==="true"&&(_.clearRect(0,0,a.width,a.height),_.drawImage(M,0,0,a.width,a.height),f=!0),d=!0,u++}function R(){m++,u++,h=[],l=null;const S=a.getContext("2d");S.globalCompositeOperation="source-over",S.fillStyle="#fff",S.fillRect(0,0,a.width,a.height),y(null),t.dataset.revealed="false",d=!0,f=!1,r()}function w(){if(!x){if(h.length){const S=a.getContext("2d");S.globalCompositeOperation="destination-out";for(const A of h){S.save(),S.scale(a.width,a.height),S.translate(A.x,A.y),S.scale(Fr/o,Fr/c);const I=S.createRadialGradient(0,0,.55,0,0,1);I.addColorStop(0,"#000"),I.addColorStop(1,"#0000"),S.fillStyle=I,S.fillRect(-1,-1,2,2),S.restore()}h=[],d=f=!0,u++,t.dataset.revealed="true"}if(d&&s.naturalWidth){const S=i.getContext("2d");S.globalCompositeOperation="source-over",S.clearRect(0,0,i.width,i.height);const A=Bd(s.width,s.height,i.width,i.height);S.drawImage(s,0,0,s.width,A.sourceHeight,A.x,A.y,A.width,A.height),S.globalCompositeOperation="destination-in",S.drawImage(a,0,0,i.width,i.height),S.globalCompositeOperation="source-over",d=!1}if(f&&!p){p=!0,f=!1;const S=m;a.toBlob(A=>{p=!1,!x&&(A&&S===m&&y(URL.createObjectURL(A)),f&&r())})}}}return s.onload=()=>{x||(d=!0,r())},s.src=n,{resize:E,reset:R,flush:w,get mask(){return a},get revision(){return u},erase(S){const A=i.getBoundingClientRect(),I=vs(S,A);if(l){const M=Math.hypot((I.x-l.x)*A.width,(I.y-l.y)*A.height),_=Math.ceil(M/(Fr*.4));for(let D=1;D<_;D++)h.push({x:l.x+(I.x-l.x)*D/_,y:l.y+(I.y-l.y)*D/_})}h.push(I),l=I,r()},endStroke(){l=null},reveal(){m++,u++,h=[],l=null,a.getContext("2d").clearRect(0,0,a.width,a.height),t.dataset.revealed="true",d=f=!0,r()},dispose(){x=!0,s.onload=null,v&&URL.revokeObjectURL(v),h=[]}}}function Xd(i,e,t,n,r){i.setFromCamera(e,t);const a=n.filter(o=>o.mesh.visible),s=new Map(a.map(o=>[o.mesh,o]));for(const o of i.intersectObjects(a.map(c=>c.mesh),!1)){const c=s.get(o.object);if(c&&o.uv&&r(c,o.uv))return o}return null}function qd(i,e,t=[]){const n=new Set(t.filter(Boolean));function r(a){a&&(n.add(a),Object.values(a).forEach(s=>{s!=null&&s.isTexture&&n.add(s)}),Object.values(a.uniforms??{}).forEach(s=>{var o;(o=s.value)!=null&&o.isTexture&&n.add(s.value)}))}i.traverse(a=>{a.geometry&&n.add(a.geometry),(Array.isArray(a.material)?a.material:[a.material]).forEach(r)}),n.forEach(a=>a.dispose()),i.clear(),e.renderLists.dispose(),e.dispose(),e.forceContextLoss(),e.domElement.remove()}function Yd(i,e,t,n=()=>.75){const r=new H,a=new H,s=new H,o=new H,c=new H,l=[0,0];function h(x,v,m,u){const y=t();return r.set((x-y.left)/y.width*2-1,-(v-y.top)/y.height*2+1,.5).unproject(i),r.sub(i.position).normalize(),u.copy(i.position).addScaledVector(r,(m-i.position.z)/r.z)}function d(x,v=e){return h(x.clientX,x.clientY,v,new H)}function f(x){const v=t();a.set(x,0,e).project(i);const m=Lt.clamp(a.x/1.3,-1,1),u=v.top+v.height*(n()+.08*(1-Math.sqrt(1-m*m)));return h(v.left+(a.x+1)*v.width/2,u,e,s).y}function p(){const x=t(),v=Math.max(24,x.width*.035),m=x.top+x.height*n();return l[0]=h(x.left+v,m,e,o).x,l[1]=h(x.right-v,m,e,c).x,l}return{worldPoint:d,ground:f,bounds:p}}const Ms=1.25;function Kd(i,e,t,n,r=1.25){const a=e-i,s=Math.sign(a),o=7;if(Math.abs(a)<1e-6)return{x:e,speed:0,distance:0};const c=s*Math.min(r,Math.sqrt(2*o*Math.abs(a))),l=t+Math.max(-o*n,Math.min(o*n,c-t)),h=(t+l)*.5*n,d=Math.sign(h)===s&&Math.abs(h)>=Math.abs(a)?e:i+h;return{x:d,speed:d===e?0:l,distance:Math.abs(d-i)}}function Qa(i,e=16){return Math.floor(i/Ms*e)%e}function es(i,e,t){let n=t,r=-1,a=e,s=-1,o=e,c=-1;for(let l=0;l<e*t;l++){const h=l*4;if(i[h+3]<=12)continue;const d=l%e,f=Math.floor(l/e),p=i[h],x=i[h+1],v=i[h+2];n=Math.min(n,f),r=Math.max(r,f),a=Math.min(a,d),s=Math.max(s,d),f<t*.5&&x>p*.9&&x>v*1.25&&p<220&&(o=Math.min(o,d),c=Math.max(c,d))}return{top:n,bottom:r,left:a,right:s,height:Math.max(1,r-n+1),pivot:c>=o?(o+c)/2:e/2}}function jd(i){const e=i.map(n=>n.height).sort((n,r)=>n-r),t=315/((e[7]+e[8])/2);return i.map(n=>({scale:t,x:192-(n.pivot+.5)*t,y:327-(n.bottom+1)*t}))}function $d(i,e,t,n){const r=(.5-(t+1)/n)*i;return{x:-r*Math.sin(e),y:r*Math.cos(e)}}function Zd(i,e){return Math.abs(i)>1e-6?Math.sign(i):e}const Or=[{name:["Little snake","小蛇"],rect:[18,50,400,439],x:0,y:0,size:2.3,z:.5},{name:["A350","A350"],rect:[396,137,507,273],x:-3.4,y:1.6,size:2.5,z:-.5},{name:["Coding","写代码"],rect:[880,164,366,322],x:3.1,y:1.1,size:2,z:0},{name:["Basque cheesecake","巴斯克蛋糕"],rect:[45,548,357,299],x:-2.7,y:-1.6,size:1.45,z:.4},{name:["Formula 1","F1 赛车"],rect:[468,523,368,332],x:3,y:-1.7,size:1.5,z:.2},{name:["Badminton","羽毛球"],rect:[896,537,309,307],x:-4.1,y:-.25,size:1.15,z:1},{name:["Mount Fuji","富士山"],rect:[15,944,457,232],x:-1.7,y:2.35,size:1.3,z:-1},{name:["Terminal","终端"],rect:[514,935,265,249],x:3.95,y:2.35,size:.7,z:-.8},{name:["Lake days","湖边时光"],rect:[835,911,407,306],x:1.5,y:-2.2,size:1.2,z:-.6}],Ss=i=>Math.max(0,Math.min(1,i)),Ot=(i,e,t)=>{let n=Ss((t-i)/(e-i));return n*n*(3-2*n)},bs=`
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float field(vec2 p){return .12+(1.-p.y)*.46+sin(p.x*12.+p.y*8.)*.055+hash(floor(p*700.))*.18;}
`,Jd=`
varying vec2 vUv; uniform float time; uniform float snake;
void main(){vUv=uv;vec3 p=position;
p.x+=sin(uv.y*7.+time*1.8)*.055*snake*(1.-uv.y);
gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}
`,Qd=`
uniform float edgeDepth;uniform sampler2D map;uniform vec4 crop;uniform float dissolve;uniform float outfit;uniform float facing;
uniform vec2 outfitOffset;
varying vec2 vUv;
${bs}
void main(){
vec2 sampleUV=vec2(facing<0.?1.-vUv.x:vUv.x,vUv.y);
vec4 c=texture2D(map,crop.xy+sampleUV*crop.zw);
vec2 clothUV=vUv+vec2(facing*outfitOffset.x,outfitOffset.y);
if(outfit>0.5 && clothUV.y>.19 && clothUV.y<.54 && c.r>.35 && c.g>.22 && c.b<c.g*.55 && c.r>c.g*1.05){
 vec3 cloth=outfit<1.5?vec3(.23,.52,.78):vec3(.85,.36,.28);
 if(outfit>2.5)cloth=vec3(.48,.62,.43);
 if(outfit>3.5)cloth=vec3(.62,.47,.72);
 if(outfit>4.5)cloth=mix(vec3(.92,.85,.65),vec3(.28,.43,.59),step(.65,fract(clothUV.y*65.)));
 if(outfit>5.5)cloth=mix(vec3(.88,.53,.55),vec3(.98,.9,.72),1.-smoothstep(.08,.15,length(fract(clothUV*vec2(24.,32.))-.5)));
 c.rgb=cloth*(.55+c.g*.65);
}
float edge=field(vUv)-dissolve;
if(c.a<.05||edge<-.025)discard;
c.a*=smoothstep(-.025,.055,edge);
c.rgb=mix(c.rgb,c.rgb*.78+vec3(.08,.065,.045),dissolve);
c.rgb*=1.-edgeDepth*.34;gl_FragColor=c;
}
`,xi=()=>{var i,e;return((e=(i=globalThis.scheduler)==null?void 0:i.yield)==null?void 0:e.call(i))??new Promise(t=>setTimeout(t,0))};function ef({root:i,host:e,api:t,wipe:n,backlight:r,uiRef:a,setInventory:s,setFailed:o,setReady:c,setErasing:l,erasingRef:h,langRef:d}){let f=!1,p,x=null,v=null;const m=matchMedia("(prefers-reduced-motion: reduce)");let u=m.matches,y=0,E=!0,R=!0;const w=C=>{a.current.hint=C},S=s,A=e.current;let I=A.getBoundingClientRect();const M=Dd(A,Dn.cursors);try{p=new gd({alpha:!0,antialias:!0})}catch{M.dispose(),o(!0);return}p.setPixelRatio(Math.min(devicePixelRatio,1.25)),p.setClearColor(0,0),A.appendChild(p.domElement);const _=new ho,D=new jt(40,1,.1,100);_.add(new To(16775399,10193232,2.3));const G=new Ro(16773842,2);G.position.set(-4,7,5),_.add(G);const V=new Xt(new Kr(7,96,64),new _o({color:15391904,roughness:.95,transparent:!0}));V.position.set(0,-8.6,-1.6),V.visible=!1,_.add(V);const K=.7,{worldPoint:j,ground:Z,bounds:ce}=Yd(D,K,()=>I,()=>I.height<500?.65:.75),Y=C=>Z(C.home.x)+C.radius*.72-(C.lane||0);D.position.z=10;const ue=new Po,he=new Ze(9,9),Re=[],Xe={floor:Y,bounds:()=>ct,held:null};let ct;const Ce=[],nt=new Ze,Q=new Ze,ee=Wd(n.current,i.current.querySelector(".sky-play__editorial"),i.current,Dn.sky,gt),be=Hd(r.current,Dn.hiddenSky,gt),We=()=>ee.reset(),Ie=C=>ee.erase(C);let q=null,St=0,Pe=0,ft,P,ke,qe=0,ut=!0;const Te=kd({render:ai,fast:()=>!!q||performance.now()<St||Math.abs(Oe-ve)>.015||Fe<.999||Ce.some(C=>{var B,z,ae;return C.pull||Math.abs(((B=C.fall)==null?void 0:B.vx)||0)>.02||Math.abs(((z=C.fall)==null?void 0:z.vy)||0)>.02||Math.abs(((ae=C.fall)==null?void 0:ae.spin)||0)>.02}),running:()=>!f&&E&&R});let Ge={x:0,y:0,vx:0,vy:0,angle:0,angular:0},ve=0,Oe=0,T=0,g=0,O=1,J=-10,ne=0,X="idle",ye=Nr[0];const ge=[{name:"stroll",speed:1.25,sway:.012},{name:"bouncy",speed:1.4,sway:.035},{name:"tiptoe",speed:.95,sway:.025}];let De=0,we=0,re=0,fe=0,Fe=1,Ne=!1,Me=-1,Be=-1;const L=[],xe=[],pe={left:["Go left","向左走"],right:["Go right","向右走"],head:["Change mood","换个表情"],body:["Change outfit","换件衣服"],pocket:["A little surprise","掏出口袋里的惊喜"]};function me(C){var z;if(y>.1||!Ce.length||C==="pocket"&&X==="pocket"&&Pe-J<ye.duration&&!u)return;const B=D.aspect<.85?1.05:3.1;if((C==="left"||C==="right")&&(De=(De+1+Math.floor(Math.random()*2))%ge.length,i.current.dataset.walkStyle=ge[De].name,Oe=Lt.clamp(Oe+(C==="left"?-.85:.85),-B,B),(u||Math.abs(re)<.001)&&(O=C==="left"?-1:1),u&&(ve=Oe,re=0)),C==="head"&&(Me=Be=-1,T=(T+1)%4,X="mood",J=Pe),C==="body"&&(Me=Be=-1,g=(g+1)%7,X="outfit",J=Pe,g===0&&!u&&(Be=Pe+.85,i.current.dataset.egg="wardrobe-wink")),C==="pocket"){const ae=Ce.slice(1).filter(le=>!le.released);if(!ae.length){w(d.current==="zh"?"口袋空啦，试试把地上的小物件抛起来。":"All out! Pick up a keepsake and give it a toss.");return}Me=Be=-1,J=Pe,X="pocket";const ie=Nr.filter(le=>le!==ye);ye=ie[Math.floor(Math.random()*ie.length)]||Nr[0];const $=ae[0],se=ne%2?1:-1;if(ne++,$.released=!0,$.home.set(ve+se*.2,Z(ve)+1,K),$.lane=ne%3*.11,$.angle=0,$.fall=null,$.pull={start:Pe,side:se,style:ye},$.mesh.scale.setScalar($.baseScale*.08),$.offset.set(0,0),$.velocity.set(0,0),i.current.dataset.throwStyle=ye.name,u){const[le,Le]=ce($);$.pull=null,$.home.x=le+(Le-le)*(ne*.618%1),$.home.y=Y($),$.fall={vx:0,vy:0,spin:0}}}i.current.dataset.mood=String(T),i.current.dataset.outfit=String(g),i.current.dataset.drops=String(ne),w(((z=pe[C])==null?void 0:z[d.current==="zh"?1:0])||""),St=performance.now()+1200,gt()}const oe=document.createElement("canvas");oe.width=oe.height=64;const te=oe.getContext("2d"),Ae=te.createRadialGradient(32,32,0,32,32,32);Ae.addColorStop(0,"#342336"),Ae.addColorStop(1,"#34233600"),te.fillStyle=Ae,te.fillRect(0,0,64,64);const He=new pi(oe);function pt(C){if(!C.shadow){C.edges=[];for(let B=1;B<=4;B++){const z=C.mesh.material.clone();z.uniforms=C.mesh.material.uniforms,z.uniforms={...z.uniforms,edgeDepth:{value:1}};const ae=new Xt(C.mesh.geometry,z);ae.position.set(.006*B,-.004*B,-.015*B),ae.renderOrder=-B,C.mesh.add(ae),C.edges.push(ae)}C.shadow=new Xt(new In(1,1),new qr({map:He,transparent:!0,depthWrite:!1,opacity:.25})),_.add(C.shadow)}}const Qe=new Ze,Vt=new H;function kt(){const C=Math.min(devicePixelRatio,1.25);p.getPixelRatio()!==C&&(p.setPixelRatio(C),Qe.x&&Qe.y&&ee.resize(Qe.x,Qe.y))}const sn=()=>{const C=I=A.getBoundingClientRect();if(!C.width||!C.height)return;const B=Qe.x!==C.width||Qe.y!==C.height;Qe.set(C.width,C.height);const z=Math.min(devicePixelRatio,1.25);p.getPixelRatio()!==z&&p.setPixelRatio(z),B&&p.setSize(C.width,C.height,!1),D.aspect=C.width/C.height,D.updateProjectionMatrix(),ee.resize(C.width,C.height),be.resize(C.width,C.height);const ae=D.aspect<.85;D.position.z=ae?13:10,Ce.forEach((ie,$)=>{const se=ie.definition||Or[$];ie.released||ie.home.set(ae?se.x*.34:se.x,ae?se.y*1.25:se.y,se.z);const le=$===0?ae?2.8:3.4:se.size*(ae?.3:.43);ie.baseScale=le,ie.radius=le*Math.min(1,se.rect[3]/se.rect[2])*.4,ie.mesh.scale.set(le,le*se.rect[3]/se.rect[2],1)}),bn(),gt()},bn=()=>{ut=!0,gt()};function Ai(){ut=!1;const C=i.current.getBoundingClientRect();y=u?0:Ss(-C.top/Math.max(1,i.current.offsetHeight-innerHeight));const B=Ot(.18,.8,y);i.current.style.setProperty("--sky-fade",String(B)),i.current.style.setProperty("--sky-blur",`${Ot(.15,.75,y)*7}px`),i.current.style.setProperty("--type-exit",Ot(.08,.5,y)),i.current.style.setProperty("--work-show",String(Ot(.62,.94,y))),i.current.style.setProperty("--ground-rise",`${Ot(.04,.85,y)*110}svh`),i.current.style.setProperty("--ground-fade",String(Ot(.5,.86,y))),i.current.style.setProperty("--control-fade",String(Ot(.04,.28,y))),i.current.style.setProperty("--trail",String(Ot(.12,.5,y)));for(const z of i.current.querySelectorAll(".sky-play__actions,.sky-play__controls"))z.inert=y>.28;i.current.dataset.progress=y.toFixed(3),A.inert=y>.8,A.style.pointerEvents=y>.8?"none":"auto",y>.1&&(M.hide(),w(""),S(!1)),y>.1&&q&&qt()}function gt(){Te.wake()}function ai(C,B){if(f)return!1;I=A.getBoundingClientRect(),kt(),ut&&Ai(),u||(Pe+=B),ee.flush(),be.render(Pe,u,ee.mask,ee.revision),Q.lerp(nt,1-Math.exp(-B*5));const z=D.aspect<.85?13:10,ae=u?0:Q.x*.16*(1-Ot(.1,.65,y)),ie=u?0:Q.y*.09*(1-Ot(.1,.65,y));D.position.set(Math.sin(ae)*z,Math.sin(ie)*z,Math.cos(ae)*Math.cos(ie)*z),D.lookAt(0,0,0),D.updateMatrixWorld();const $=Ot(.04,.85,y),se=Ot(.12,.63,y);V.material.opacity=1-Ot(.22,.86,y);const le=(q==null?void 0:q.object)===Ce[0],Le=!le&&!u&&(Math.abs(Oe-ve)>1e-6||Math.abs(re)>.001),Ue=le||u?{x:ve,speed:0,distance:0}:Kd(ve,Oe,re,B,ge[De].speed);fe=Ue.x-ve,ve=Ue.x,re=Ue.speed,we+=Ue.distance,Fe=u?1:Lt.damp(Fe,Le?0:1,12,B),Le&&(O=Zd(fe,O)),Math.abs(ve)>.6&&(Ne=!0),Ne&&Math.abs(ve)<.02&&Math.abs(Oe)<.02&&!Le&&!le&&X!=="pocket"&&!u&&(Ne=!1,Me=Pe+1.1,i.current.dataset.egg="home-greeting");const ze=u?0:Math.max(0,1-(Pe-J)/.65);Re.length=0;for(let U=1;U<Ce.length;U++)Ce[U].released&&Re.push(Ce[U]);if(y<.1&&!u)for(ct=Re.length?ce():null,Xe.held=q==null?void 0:q.object,qe+=B;qe+1e-12>=1/120;)Gd(Re,1/120,Xe),qe-=1/120;else qe=0;return Ce.forEach((U,_e)=>{var et,Tt;if(U.mesh.visible=_e===0?L.length===12:!!U.released,_e>0&&!U.released){U.points.visible=!1;return}let Ee=1;if(U.pull){const{style:Ve,side:vt}=U.pull,at=(Pe-U.pull.start)/Ve.duration;Ee=.08+.92*Ot(.1,.82,at);const st=Ve.name==="double-take"?Math.sin(at*Math.PI*3)*.12:0;U.home.set(ve+vt*(.16+Ot(.18,1,at)*.5),Z(ve)+1+Ot(.1,.85,at)*Ve.lift+st,K),U.angle=vt*Math.sin(at*Math.PI)*.35,at>=1&&(U.fall={vx:vt*Ve.speed,vy:Ve.up,spin:vt*Ve.spin},U.pull=null)}if(_e===0&&(q==null?void 0:q.object)!==U&&!U.held&&(U.velocity.addScaledVector(U.offset,-90*B).multiplyScalar(Math.exp(-12*B)),U.offset.addScaledVector(U.velocity,B)),_e===0)if((q==null?void 0:q.object)===U){const Ve=D.aspect<.85?1.05:3.1;ve=Lt.clamp(Ge.x,-Ve,Ve),Oe=ve,re=0,U.home.x=Ge.x,U.home.y=Ge.y,U.home.z=.5}else U.home.x=ve,U.home.y=Z(ve)+U.baseScale*.9*.48,U.home.z=.5,Ge.y=U.home.y,Ge.angle=Lt.damp(Ge.angle,0,8,B);const it=0,rt=ge[De],mt=we/Ms*Math.PI*2,ht=_e===0&&!u&&!le?Fe*(Math.sin(Pe*2)*.012+Math.sin(ze*Math.PI)*.15):0,je=2*Math.tan(Lt.degToRad(20))*(z-U.home.z);if(U.mesh.position.set(U.home.x+U.offset.x+it,U.home.y+U.offset.y+ht+$*je*1.1,U.home.z),U.mesh.rotation.z=_e===0?(q==null?void 0:q.object)===U?Ge.angle:Fe*(-ve*.065+Math.sin(Pe*2)*.012):U.angle||0,_e===0){if(U.mesh.rotation.y=0,X==="pocket"){const Ve=(Pe-J)/ye.duration;U.mesh.rotation.z+=Math.sin(Math.min(1,Ve)*Math.PI)*(ye.name==="sideways"?.12:ye.name==="overhead"?-.09:.05)}if(U.mesh.material.uniforms.facing.value=O,U.mesh.material.uniforms.outfit.value=g,L.length===12){const Ve=u?T:X==="pocket"&&Pe-J<ye.duration+.25?8+Math.min(3,Math.floor((Pe-J)/ye.duration*4)):Le?4+Qa(we,4):!u&&Pe<Me?1:!u&&Pe<Be?3:T;U.mesh.material.uniforms.map.value=le?q.pose:Le&&xe.length===16&&!u&&X!=="pocket"?xe[Qa(we)]:L[Ve];const vt=U.mesh.material.uniforms.map.value.userData.outfitOffset;U.mesh.material.uniforms.outfitOffset.value.set((vt==null?void 0:vt.x)||0,(vt==null?void 0:vt.y)||0),Le&&(U.mesh.rotation.z+=(1-Fe)*Math.sin(mt)*rt.sway*.3),X==="pocket"&&Pe-J>ye.duration+.25&&(X="idle")}}const _t=_e===0&&!u&&!le?1+Math.sin(ze*Math.PI*2)*.035:1,Mt=U.baseScale*Ee*_t*((q==null?void 0:q.object)===U?1.035:1);if(U.mesh.scale.x=Lt.damp(U.mesh.scale.x,Mt,9,B),U.mesh.scale.y=U.mesh.scale.x*(_e===0?.9:U.rect[3]/U.rect[2]),_e===0&&!le){const Ve=U.mesh.material.uniforms.map.value,vt=(et=_s(Ve))==null?void 0:et.bounds;if(vt){const at=$d(U.mesh.scale.y,U.mesh.rotation.z,vt.maxY,Ve.image.height);U.mesh.position.y=Z(ve)+U.offset.y+ht+$*je*1.1-at.y,U.mesh.position.x=ve+U.offset.x-at.x}}if((q==null?void 0:q.object)===U&&q.localPoint){Vt.copy(q.localPoint).multiply(U.mesh.scale).applyEuler(U.mesh.rotation);const Ve=j(q.event,q.z).sub(Vt);if(_e===0)Ge.x=Ve.x,Ge.y=Ve.y;else{const[vt,at]=ce(U);Ve.x=Lt.clamp(Ve.x,vt+U.radius,at-U.radius),Ve.y=Math.max(Y(U),Math.min(3,Ve.y))}U.mesh.position.copy(Ve),U.home.copy(Ve)}if(_e>0){U.mesh.rotation.y=Lt.damp(U.mesh.rotation.y,(q==null?void 0:q.object)===U?-.18:(((Tt=U.fall)==null?void 0:Tt.vx)||0)*.035,8,B),pt(U);const Ve=Math.max(0,U.home.y-Y(U));U.shadow.visible=U.mesh.visible&&y<.8,U.shadow.position.set(U.home.x,Z(U.home.x)-(U.lane||0)+$*je*1.1,K-.12),U.shadow.scale.set(U.baseScale*(1+Ve*.25),U.baseScale*.17,1),U.shadow.material.opacity=(1-se)*.25/(1+Ve*1.8)}U.mesh.material.uniforms.time.value=Pe;const Ye=se;U.mesh.material.uniforms.dissolve.value=Ye,U.points.material.uniforms.dissolve.value=Ye,U.points.position.copy(U.mesh.position),U.points.scale.copy(U.mesh.scale),U.points.rotation.copy(U.mesh.rotation),U.points.visible=_e>0&&Ye>0&&Ye<1}),p.render(_,D),x&&!q&&y<.1&&on(x,!0),y<.8&&(!u||!!q||Q.distanceTo(nt)>.002)}function si(C){const B=I=p.domElement.getBoundingClientRect(),z=vs(C,B);he.set(z.x*2-1,1-z.y*2)}function wi(C,B){if(C===Ce[0])return oi(B)!==null;if(C.hitPixels){const $=Math.min(C.hitWidth-1,Math.floor(B.x*C.hitWidth)),se=Math.min(C.hitHeight-1,Math.floor((1-B.y)*C.hitHeight));return C.hitPixels[(se*C.hitWidth+$)*4+3]>90}const z=C.rect,ae=Math.min(1253,Math.floor(z[0]+B.x*z[2])),ie=Math.min(1253,Math.floor(z[1]+(1-B.y)*z[3]));return(P==null?void 0:P[(ie*1254+ae)*4+3])>90&&(ke==null?void 0:ke[ie*1254+ae])===C.owner}function yn(){return Xd(ue,he,D,Ce,wi)}function oi(C){var z;const B=(z=Ce[0])==null?void 0:z.mesh.material.uniforms;return Od(B==null?void 0:B.map.value,C,B==null?void 0:B.facing.value,(v==null?void 0:v.kind)==="mascot"?v.action:null)}function En(C){if(!C)return null;const B=Ce.find(ie=>ie.mesh===C.object),z=B?Ce.indexOf(B):-1;if(!B||z<0)return null;const ae=z===0?oi(C.uv):"grab";return z===0&&!ae?null:{object:B,index:z,kind:z===0?"mascot":"prop",action:ae,key:z===0?ae:`prop-${z}`,uv:C.uv}}function li(C){if(y>.1||C.button!==0)return;si(C);const B=C.pointerType==="touch"&&h.current,z=B?null:yn(),ie=En(z),$=(ie==null?void 0:ie.object)||null;if(q={binding:ie,object:$,x:C.clientX,y:C.clientY,ox:($==null?void 0:$.offset.x)||0,oy:($==null?void 0:$.offset.y)||0,id:C.pointerId,moved:!1,action:(ie==null?void 0:ie.kind)==="mascot"?ie.action:null,erasing:B||!$,event:C,localPoint:z?$.mesh.worldToLocal(z.point.clone()):null},ee.endStroke(),C.pointerType!=="touch"&&M.show(ie?"grabbing":"eraser",C,!0),!$&&(B||C.pointerType!=="touch")&&Ie(C),$&&$===Ce[0]){const se=j(C,$.mesh.position.z);Ge.x=$.mesh.position.x,Ge.y=$.mesh.position.y,Ge.vx=Ge.vy=Ge.angular=0,$.offset.set(0,0),$.velocity.set(0,0),q.pose=$.mesh.material.uniforms.map.value,nt.copy(Q),q.snakeGrab=se.sub($.mesh.position),q.z=$.mesh.position.z,q.last={x:$.home.x,y:$.home.y,t:C.timeStamp}}if($&&$!==Ce[0]){$.pull=null,$.fall={vx:0,vy:0,spin:0};const se=j(C,$.mesh.position.z);q.grab=se.sub($.mesh.position),q.z=$.mesh.position.z,q.last={x:$.home.x,y:$.home.y,t:C.timeStamp}}A.setPointerCapture(C.pointerId),St=performance.now()+1e3,gt()}function on(C,B=!1){if(x=C.pointerType==="touch"?null:C,si(C),q){q.event=C,M.move(C),St=performance.now()+120;const z=(C.clientX-q.x)/Qe.x,ae=(C.clientY-q.y)/Qe.y;if(Math.hypot(C.clientX-q.x,C.clientY-q.y)>6&&(q.moved=!0),q.object&&q.object===Ce[0]){const ie=j(C,q.z).sub(q.snakeGrab),$=Math.max(.008,(C.timeStamp-q.last.t)/1e3);Ge.vx=(ie.x-Ge.x)/$,Ge.vy=(ie.y-Ge.y)/$,Ge.x=ie.x,Ge.y=ie.y,Ge.angle=Lt.clamp(Ge.vx*.045,-.5,.5),q.last={x:ie.x,y:ie.y,t:C.timeStamp}}else if(q.object&&q.object!==Ce[0]){const ie=q.object,$=j(C,q.z).sub(q.grab),se=Math.max(.008,(C.timeStamp-q.last.t)/1e3),[le,Le]=ce(ie);ie.home.x=Lt.clamp($.x,le+ie.radius,Le-ie.radius),ie.home.y=Math.max(Y(ie),Math.min(3,$.y)),ie.fall.vx=Lt.clamp((ie.home.x-q.last.x)/se,-12,12),ie.fall.vy=Lt.clamp((ie.home.y-q.last.y)/se,-12,12),q.last={x:ie.home.x,y:ie.home.y,t:C.timeStamp}}else q.object?q.object.offset.set(Lt.clamp(q.ox+z*9,-3,3),Lt.clamp(q.oy-ae*7,-2.5,2.5)):q.erasing&&(C.pointerType!=="touch"||h.current)&&Ie(C)}else if(C.pointerType!=="touch"&&y<.1){const z=En(yn()),ae=(z==null?void 0:z.index)??-1,ie=(z==null?void 0:z.kind)==="mascot"?z.action:null;!u&&ae<0&&!B?nt.set(he.x,he.y):!u&&z&&nt.copy(Q);const $=(z==null?void 0:z.key)||"eraser";v=z;const se=z?`${z.kind}:${z.index}:${z.action}`:"none";i.current.dataset.cursor!==$&&(i.current.dataset.cursor=$),i.current.dataset.cursorBinding!==se&&(i.current.dataset.cursorBinding=se),Ce.forEach(le=>le.hover=le===(z==null?void 0:z.object)),M.show(z?z.key:"eraser",C),S(ie==="pocket"),w((z==null?void 0:z.kind)==="mascot"?pe[ie][d.current==="zh"?1:0]+(d.current==="zh"?" · 按住可拖动":" · Hold to drag"):ae>=0?(Ce[ae].definition||Or[ae]).name[d.current==="zh"?1:0]:"")}B||gt()}function qt(C){if(ee.endStroke(),q&&A.hasPointerCapture(q.id)&&A.releasePointerCapture(q.id),q!=null&&q.action&&!q.moved&&(C==null?void 0:C.type)==="pointerup"&&me(q.action),q!=null&&q.object&&q.object===Ce[0]){const B=q.object;q.moved&&!u&&B.offset.set(Ge.x-ve,Ge.y-(Z(ve)+B.baseScale*.9*.48)),Ge.angular=0,i.current.dataset.snakeThrowSpeed=String(Math.hypot(Ge.vx,Ge.vy).toFixed(2))}if(q!=null&&q.object&&q.object!==Ce[0]){const B=q.object.fall;((C==null?void 0:C.type)!=="pointerup"||!q.moved||C.timeStamp-q.last.t>100)&&(B.vx=B.vy=0),B.spin=B.vx*.45,i.current.dataset.lastThrowSpeed=String(Math.hypot(B.vx,B.vy).toFixed(2)),u&&(q.object.home.y=Y(q.object),B.vx=B.vy=B.spin=0)}if(q!=null&&q.object&&q.moved,q=null,v=null,St=performance.now()+400,delete i.current.dataset.cursorBinding,nt.set(0,0),(C==null?void 0:C.type)==="pointerup"&&C.pointerType!=="touch"){const B=I;C.clientX>=B.left&&C.clientX<B.right&&C.clientY>=B.top&&C.clientY<B.bottom?on(C):ci()}else x=null,M.hide();gt()}function ci(C){var ae;if(x=null,q)return;v=null,delete i.current.dataset.cursorBinding;const B=C==null?void 0:C.relatedTarget,z=(ae=B==null?void 0:B.closest)==null?void 0:ae.call(B,"button,a");y<.1&&(C==null?void 0:C.pointerType)!=="touch"&&z&&(i.current.contains(z)||z.closest(".daybook-header"))?M.show(z.dataset.sceneAction||"head",C):M.hide(),Ce.forEach(ie=>ie.hover=!1),w(""),S(!1),nt.set(0,0),gt()}function Ri(C){var z,ae;if(C.pointerType==="touch"){M.hide();return}const B=(ae=(z=C.target).closest)==null?void 0:ae.call(z,"button,a");if(y<.1&&B&&(i.current.contains(B)||B.closest(".daybook-header"))){x=null,M.show(B.dataset.sceneAction||"head",C);return}!A.contains(C.target)&&!q&&M.hide()}function Ci(C){C.relatedTarget||qt()}function Pi(){R=!document.hidden,Te.stop(),qe=0,R?gt():qt()}const Nn=new Eo;Nn.load(Dn.walk,async C=>{if(f){C.dispose();return}const B=C.image.width/4,z=C.image.height/4,ae=[],ie=[];for(let se=0;se<16;se++){if(se&&se%2===0&&(await xi(),f)){C.dispose();return}const le=document.createElement("canvas");le.width=Math.floor(B),le.height=Math.floor(z);const Le=le.getContext("2d");Le.drawImage(C.image,se%4*B,Math.floor(se/4)*z,B,z,0,0,le.width,le.height);const Ue=Le.getImageData(0,0,le.width,le.height),ze=new Uint8Array(le.width*le.height),U=[];for(let _e=0;_e<le.width;_e++)U.push(_e,(le.height-1)*le.width+_e);for(let _e=0;_e<le.height;_e++)U.push(_e*le.width,_e*le.width+le.width-1);for(let _e=0;_e<U.length;_e++){const Ee=U[_e];if(ze[Ee])continue;ze[Ee]=1;const it=Ee*4;if(Math.min(Ue.data[it],Ue.data[it+1],Ue.data[it+2])<=233)continue;Ue.data[it+3]=0;const rt=Ee%le.width,mt=Math.floor(Ee/le.width);rt&&U.push(Ee-1),rt<le.width-1&&U.push(Ee+1),mt&&U.push(Ee-le.width),mt<le.height-1&&U.push(Ee+le.width)}Le.putImageData(Ue,0,0),ae.push(le),ie.push(es(Ue.data,le.width,le.height))}const $=jd(ie);ae.forEach((se,le)=>{const Le=document.createElement("canvas");Le.width=384,Le.height=341;const{x:Ue,y:ze,scale:U}=$[le];Le.getContext("2d").drawImage(se,Ue,ze,se.width*U,se.height*U);const _e=new pi(Le);xe.push(_e)}),C.dispose(),i.current.dataset.walkFrames=String(xe.length),gt()}),ft=Nn.load(Dn.keepsakes,async C=>{if(f){C.dispose();return}const B=document.createElement("canvas");B.width=B.height=1254;const z=B.getContext("2d");z.drawImage(C.image,0,0),P=z.getImageData(0,0,1254,1254).data;const ae=1254*1254;ke=new Int32Array(ae);const ie=new Int32Array(ae);let $=0;for(let se=0;se<ae;se++){if(se&&se%(1254*48)===0&&(await xi(),f))return;if(ke[se]||P[se*4+3]<90)continue;$++;let le=0,Le=1;for(ie[0]=se,ke[se]=$;le<Le;){const Ue=ie[le++],ze=Ue%1254,U=[ze>0?Ue-1:-1,ze<1253?Ue+1:-1,Ue>=1254?Ue-1254:-1,Ue<ae-1254?Ue+1254:-1];for(const _e of U)_e>=0&&!ke[_e]&&P[_e*4+3]>=90&&(ke[_e]=$,ie[Le++]=_e)}}for(const[se,le]of Or.entries()){const[Le,Ue,ze,U]=le.rect,_e=new bt(0,0,1,1),Ee=new Map;for(let st=Ue;st<Ue+U;st++)for(let xt=Le;xt<Le+ze;xt++){const It=ke[st*1254+xt];It&&Ee.set(It,(Ee.get(It)||0)+1)}const it=[...Ee].sort((st,xt)=>xt[1]-st[1])[0][0],rt=document.createElement("canvas");rt.width=ze,rt.height=U;const mt=rt.getContext("2d"),ht=mt.createImageData(ze,U);for(let st=0;st<U;st++)for(let xt=0;xt<ze;xt++){const It=(Ue+st)*1254+Le+xt,Di=(st*ze+xt)*4;ke[It]===it&&ht.data.set(P.subarray(It*4,It*4+4),Di)}mt.putImageData(ht,0,0);const je=new pi(rt),_t=new tn({uniforms:{edgeDepth:{value:0},map:{value:je},crop:{value:_e},time:{value:0},snake:{value:0},outfit:{value:0},outfitOffset:{value:new Ze},facing:{value:1},dissolve:{value:0}},vertexShader:Jd,fragmentShader:Qd,transparent:!0,depthWrite:!1,side:2}),Mt=new Xt(new In(1,1,24,24),_t);_.add(Mt);const Ye=[],et=[],Tt=[];for(let st=1;st<U;st+=3)for(let xt=1;xt<ze;xt+=3){const It=((Ue+st)*1254+Le+xt)*4;P[It+3]<120||ke[It/4]!==it||(Ye.push(xt/ze-.5,.5-st/U,0),et.push(P[It]/255,P[It+1]/255,P[It+2]/255),Tt.push(xt/ze,1-st/U))}const Ve=new $t;Ve.setAttribute("position",new Bt(Ye,3)),Ve.setAttribute("color",new Bt(et,3)),Ve.setAttribute("seed",new Bt(Tt,2));const vt=new tn({transparent:!0,depthWrite:!1,uniforms:{dissolve:{value:0}},vertexShader:`
     attribute vec3 color;attribute vec2 seed;varying vec3 c;varying float alpha;uniform float dissolve;
     ${bs}
     void main(){float f=field(seed);float age=max(0.,dissolve-f);
      alpha=step(f,dissolve)*(1.-smoothstep(0.,.24,age));
      vec3 p=position+vec3(age*(hash(seed)*2.-1.)*.65,age*(1.5+hash(seed.yx)*2.),age*.2);
      c=color;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=1.25*(1.-age);}
    `,fragmentShader:"varying vec3 c;varying float alpha;void main(){float soft=1.-smoothstep(.15,.5,length(gl_PointCoord-.5));gl_FragColor=vec4(c,alpha*soft*.8);}"}),at=new ga(Ve,vt);if(_.add(at),Ce.push({mesh:Mt,points:at,owner:it,ownTexture:je,rect:le.rect,home:new H,offset:new Ze,velocity:new Ze,baseScale:1,hover:!1}),await xi(),f)return}Nn.load(Dn.extras,async se=>{if(f){se.dispose();return}const le=[{name:["RS7 model","RS7 车模"],rect:[0,380,575,400],size:2.8,x:0,y:0,z:.5},{name:["NF800 Pro racket","NF800 Pro 球拍"],rect:[575,75,350,875],size:1.15,x:0,y:0,z:.5},{name:["Chaoshan beef hotpot","潮汕牛肉火锅"],rect:[930,275,606,620],size:2.15,x:0,y:0,z:.5}];for(const Le of le){const[Ue,ze,U,_e]=Le.rect,Ee=document.createElement("canvas");Ee.width=U,Ee.height=_e;const it=Ee.getContext("2d");it.drawImage(se.image,Ue,ze,U,_e,0,0,U,_e);const rt=it.getImageData(0,0,U,_e),mt=new Uint8Array(U*_e),ht=[];for(let at=0;at<U;at++)ht.push(at,(_e-1)*U+at);for(let at=0;at<_e;at++)ht.push(at*U,at*U+U-1);for(let at=0;at<ht.length;at++){const st=ht[at];if(mt[st])continue;mt[st]=1;const xt=st*4;if(Math.min(rt.data[xt],rt.data[xt+1],rt.data[xt+2])<234)continue;rt.data[xt+3]=0;const It=st%U,Di=Math.floor(st/U);It&&ht.push(st-1),It<U-1&&ht.push(st+1),Di&&ht.push(st-U),Di<_e-1&&ht.push(st+U)}it.putImageData(rt,0,0);const je=new pi(Ee),_t=Ce[1].mesh.material.clone();_t.uniforms.map.value=je;const Mt=new Xt(new In(1,1),_t);Mt.visible=!1,_.add(Mt);const Ye=[],et=[],Tt=[];for(let at=1;at<_e;at+=3)for(let st=1;st<U;st+=3){const xt=(at*U+st)*4;rt.data[xt+3]<120||(Ye.push(st/U-.5,.5-at/_e,0),et.push(rt.data[xt]/255,rt.data[xt+1]/255,rt.data[xt+2]/255),Tt.push(st/U,1-at/_e))}const Ve=new $t;Ve.setAttribute("position",new Bt(Ye,3)),Ve.setAttribute("color",new Bt(et,3)),Ve.setAttribute("seed",new Bt(Tt,2));const vt=new ga(Ve,Ce[1].points.material.clone());if(vt.visible=!1,_.add(vt),Ce.push({definition:Le,mesh:Mt,points:vt,ownTexture:je,rect:[0,0,U,_e],hitWidth:U,hitHeight:_e,hitPixels:rt.data,home:new H,offset:new Ze,velocity:new Ze,baseScale:1,hover:!1}),await xi(),f){se.dispose();return}}se.dispose(),i.current.dataset.items=String(Ce.length-1),sn()},void 0,()=>{f||w(d.current==="zh"?"新增物件加载失败，请刷新":"Extra items could not load. Please refresh.")}),Nn.load(Dn.poses,async se=>{if(f){se.dispose();return}const le=se.image.width/4,Le=se.image.height/3;for(let Ue=0;Ue<3;Ue++)for(let ze=0;ze<4;ze++){if((Ue||ze)&&(await xi(),f)){se.dispose();return}const U=document.createElement("canvas");U.width=Math.floor(le),U.height=Math.floor(Le);const _e=U.getContext("2d");_e.drawImage(se.image,ze*le,Ue*Le,le,Le,0,0,U.width,U.height);const Ee=U.width,it=U.height,rt=_e.getImageData(0,0,Ee,it),mt=new Uint8Array(Ee*it),ht=[];for(let Ye=0;Ye<Ee;Ye++)ht.push(Ye,(it-1)*Ee+Ye);for(let Ye=0;Ye<it;Ye++)ht.push(Ye*Ee,Ye*Ee+Ee-1);for(let Ye=0;Ye<ht.length;Ye++){const et=ht[Ye];if(mt[et])continue;mt[et]=1;const Tt=et*4;if(Math.min(rt.data[Tt],rt.data[Tt+1],rt.data[Tt+2])<230)continue;rt.data[Tt+3]=0;const Ve=et%Ee,vt=Math.floor(et/Ee);Ve>0&&ht.push(et-1),Ve<Ee-1&&ht.push(et+1),vt>0&&ht.push(et-Ee),vt<it-1&&ht.push(et+Ee)}_e.putImageData(rt,0,0);let je=U,_t;if(Ue===0){const Ye=es(rt.data,U.width,U.height),et=192-(Ye.pivot+.5),Tt=327-(Ye.bottom+1);je=document.createElement("canvas"),je.width=384,je.height=341,je.getContext("2d").drawImage(U,et,Tt),_t=new Ze(-et/je.width,Tt/je.height)}const Mt=new pi(je);_t&&(Mt.userData.outfitOffset=_t),L.push(Mt)}se.dispose(),c(!0),sn()},void 0,()=>o(!0)),sn()},void 0,()=>{f||o(!0)});function b(){u=m.matches,u&&(ve=Oe,re=0,Me=Be=-1),i.current.classList.toggle("sky-play--still",u),bn(),gt()}const F=new IntersectionObserver(([C])=>{E=C.isIntersecting,Te.stop(),qe=0,E&&gt()});F.observe(i.current);const W=new ResizeObserver(sn);W.observe(A);let k;function N(){kt(),de(),gt()}function de(){k==null||k.removeEventListener("change",N),k=matchMedia(`(resolution: ${devicePixelRatio}dppx)`),k.addEventListener("change",N)}return de(),window.addEventListener("scroll",bn,{passive:!0}),window.addEventListener("resize",sn),m.addEventListener("change",b),document.addEventListener("visibilitychange",Pi),window.addEventListener("blur",qt),document.addEventListener("pointermove",Ri),document.addEventListener("pointerout",Ci),A.addEventListener("pointerenter",on),A.addEventListener("pointerdown",li),A.addEventListener("pointermove",on),A.addEventListener("pointerup",qt),A.addEventListener("pointercancel",qt),A.addEventListener("pointerleave",ci),t.current={act:me,setErasing:C=>{qt(),h.current=C,l(C),A.dataset.erasing=String(C),A.style.touchAction=C?"none":"pan-y"},reveal:()=>{i.current.dataset.revealed==="true"?We():ee.reveal()},reset:()=>{We(),Oe=0,ve=0,re=0,we=0,Fe=1,Ne=!1,Me=Be=-1,T=0,g=0,ne=0,Ce.forEach(C=>{C.offset.set(0,0),C.velocity.set(0,0),C.held=!1,C.released=!1}),nt.set(0,0),gt()},nudge:(C,B)=>{const z=Ce[C];z&&(z.held=!0,z.offset.x=Lt.clamp(z.offset.x+(B==="ArrowRight"?.2:B==="ArrowLeft"?-.2:0),-2,2),z.offset.y=Lt.clamp(z.offset.y+(B==="ArrowUp"?.2:B==="ArrowDown"?-.2:0),-2,2),gt())},release:()=>{Ce.forEach(C=>C.held=!1),gt()}},b(),sn(),()=>{f=!0,Te.dispose(),ee.dispose(),be.dispose(),F.disconnect(),W.disconnect(),k==null||k.removeEventListener("change",N),window.removeEventListener("scroll",bn),window.removeEventListener("resize",sn),i.current&&delete i.current.__pocketDebug,m.removeEventListener("change",b),document.removeEventListener("visibilitychange",Pi),window.removeEventListener("blur",qt),document.removeEventListener("pointermove",Ri),document.removeEventListener("pointerout",Ci),A.removeEventListener("pointerenter",on),A.removeEventListener("pointerdown",li),A.removeEventListener("pointermove",on),A.removeEventListener("pointerup",qt),A.removeEventListener("pointercancel",qt),A.removeEventListener("pointerleave",ci),M.dispose(),qd(_,p,[He,ft,...xe,...L,...Ce.map(C=>C.ownTexture)]),Re.length=0,Xe.held=null,Ce.length=0,xe.length=0,L.length=0,P=ke=null,t.current=null}}export{ef as mountPocketScene};
