(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Dy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var eh={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax;function Uy(){if(Ax)return Vo;Ax=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=t,Vo.jsx=i,Vo.jsxs=i,Vo}var Rx;function Ly(){return Rx||(Rx=1,eh.exports=Uy()),eh.exports}var Gt=Ly(),nh={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx;function Ny(){if(Cx)return Ee;Cx=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function v(I,rt,tt){this.props=I,this.context=rt,this.refs=M,this.updater=tt||b}v.prototype.isReactComponent={},v.prototype.setState=function(I,rt){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,rt,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function N(){}N.prototype=v.prototype;function L(I,rt,tt){this.props=I,this.context=rt,this.refs=M,this.updater=tt||b}var O=L.prototype=new N;O.constructor=L,A(O,v.prototype),O.isPureReactComponent=!0;var P=Array.isArray;function T(){}var U={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function w(I,rt,tt){var St=tt.ref;return{$$typeof:s,type:I,key:rt,ref:St!==void 0?St:null,props:tt}}function C(I,rt){return w(I.type,rt,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function q(I){var rt={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(tt){return rt[tt]})}var it=/\/+/g;function ht(I,rt){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):rt.toString(36)}function ot(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(T,T):(I.status="pending",I.then(function(rt){I.status==="pending"&&(I.status="fulfilled",I.value=rt)},function(rt){I.status==="pending"&&(I.status="rejected",I.reason=rt)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,rt,tt,St,It){var J=typeof I;(J==="undefined"||J==="boolean")&&(I=null);var ft=!1;if(I===null)ft=!0;else switch(J){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(I.$$typeof){case s:case t:ft=!0;break;case g:return ft=I._init,F(ft(I._payload),rt,tt,St,It)}}if(ft)return It=It(I),ft=St===""?"."+ht(I,0):St,P(It)?(tt="",ft!=null&&(tt=ft.replace(it,"$&/")+"/"),F(It,rt,tt,"",function(jt){return jt})):It!=null&&(H(It)&&(It=C(It,tt+(It.key==null||I&&I.key===It.key?"":(""+It.key).replace(it,"$&/")+"/")+ft)),rt.push(It)),1;ft=0;var Nt=St===""?".":St+":";if(P(I))for(var Lt=0;Lt<I.length;Lt++)St=I[Lt],J=Nt+ht(St,Lt),ft+=F(St,rt,tt,J,It);else if(Lt=S(I),typeof Lt=="function")for(I=Lt.call(I),Lt=0;!(St=I.next()).done;)St=St.value,J=Nt+ht(St,Lt++),ft+=F(St,rt,tt,J,It);else if(J==="object"){if(typeof I.then=="function")return F(ot(I),rt,tt,St,It);throw rt=String(I),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return ft}function j(I,rt,tt){if(I==null)return I;var St=[],It=0;return F(I,St,"","",function(J){return rt.call(tt,J,It++)}),St}function Z(I){if(I._status===-1){var rt=I._result;rt=rt(),rt.then(function(tt){(I._status===0||I._status===-1)&&(I._status=1,I._result=tt)},function(tt){(I._status===0||I._status===-1)&&(I._status=2,I._result=tt)}),I._status===-1&&(I._status=0,I._result=rt)}if(I._status===1)return I._result.default;throw I._result}var yt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Mt={map:j,forEach:function(I,rt,tt){j(I,function(){rt.apply(this,arguments)},tt)},count:function(I){var rt=0;return j(I,function(){rt++}),rt},toArray:function(I){return j(I,function(rt){return rt})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Ee.Activity=x,Ee.Children=Mt,Ee.Component=v,Ee.Fragment=i,Ee.Profiler=l,Ee.PureComponent=L,Ee.StrictMode=r,Ee.Suspense=m,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(I){return U.H.useMemoCache(I)}},Ee.cache=function(I){return function(){return I.apply(null,arguments)}},Ee.cacheSignal=function(){return null},Ee.cloneElement=function(I,rt,tt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var St=A({},I.props),It=I.key;if(rt!=null)for(J in rt.key!==void 0&&(It=""+rt.key),rt)!W.call(rt,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&rt.ref===void 0||(St[J]=rt[J]);var J=arguments.length-2;if(J===1)St.children=tt;else if(1<J){for(var ft=Array(J),Nt=0;Nt<J;Nt++)ft[Nt]=arguments[Nt+2];St.children=ft}return w(I.type,It,St)},Ee.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Ee.createElement=function(I,rt,tt){var St,It={},J=null;if(rt!=null)for(St in rt.key!==void 0&&(J=""+rt.key),rt)W.call(rt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(It[St]=rt[St]);var ft=arguments.length-2;if(ft===1)It.children=tt;else if(1<ft){for(var Nt=Array(ft),Lt=0;Lt<ft;Lt++)Nt[Lt]=arguments[Lt+2];It.children=Nt}if(I&&I.defaultProps)for(St in ft=I.defaultProps,ft)It[St]===void 0&&(It[St]=ft[St]);return w(I,J,It)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(I){return{$$typeof:d,render:I}},Ee.isValidElement=H,Ee.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:Z}},Ee.memo=function(I,rt){return{$$typeof:p,type:I,compare:rt===void 0?null:rt}},Ee.startTransition=function(I){var rt=U.T,tt={};U.T=tt;try{var St=I(),It=U.S;It!==null&&It(tt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(T,yt)}catch(J){yt(J)}finally{rt!==null&&tt.types!==null&&(rt.types=tt.types),U.T=rt}},Ee.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},Ee.use=function(I){return U.H.use(I)},Ee.useActionState=function(I,rt,tt){return U.H.useActionState(I,rt,tt)},Ee.useCallback=function(I,rt){return U.H.useCallback(I,rt)},Ee.useContext=function(I){return U.H.useContext(I)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(I,rt){return U.H.useDeferredValue(I,rt)},Ee.useEffect=function(I,rt){return U.H.useEffect(I,rt)},Ee.useEffectEvent=function(I){return U.H.useEffectEvent(I)},Ee.useId=function(){return U.H.useId()},Ee.useImperativeHandle=function(I,rt,tt){return U.H.useImperativeHandle(I,rt,tt)},Ee.useInsertionEffect=function(I,rt){return U.H.useInsertionEffect(I,rt)},Ee.useLayoutEffect=function(I,rt){return U.H.useLayoutEffect(I,rt)},Ee.useMemo=function(I,rt){return U.H.useMemo(I,rt)},Ee.useOptimistic=function(I,rt){return U.H.useOptimistic(I,rt)},Ee.useReducer=function(I,rt,tt){return U.H.useReducer(I,rt,tt)},Ee.useRef=function(I){return U.H.useRef(I)},Ee.useState=function(I){return U.H.useState(I)},Ee.useSyncExternalStore=function(I,rt,tt){return U.H.useSyncExternalStore(I,rt,tt)},Ee.useTransition=function(){return U.H.useTransition()},Ee.version="19.2.0",Ee}var wx;function Ud(){return wx||(wx=1,nh.exports=Ny()),nh.exports}var dn=Ud();const Oy=Dy(dn);var ih={exports:{}},ko={},ah={exports:{}},rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx;function Py(){return Dx||(Dx=1,(function(s){function t(F,j){var Z=F.length;F.push(j);t:for(;0<Z;){var yt=Z-1>>>1,Mt=F[yt];if(0<l(Mt,j))F[yt]=j,F[Z]=Mt,Z=yt;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var j=F[0],Z=F.pop();if(Z!==j){F[0]=Z;t:for(var yt=0,Mt=F.length,I=Mt>>>1;yt<I;){var rt=2*(yt+1)-1,tt=F[rt],St=rt+1,It=F[St];if(0>l(tt,Z))St<Mt&&0>l(It,tt)?(F[yt]=It,F[St]=Z,yt=St):(F[yt]=tt,F[rt]=Z,yt=rt);else if(St<Mt&&0>l(It,Z))F[yt]=It,F[St]=Z,yt=St;else break t}}return j}function l(F,j){var Z=F.sortIndex-j.sortIndex;return Z!==0?Z:F.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,_=3,S=!1,b=!1,A=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function O(F){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=F)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function P(F){if(A=!1,O(F),!b)if(i(m)!==null)b=!0,T||(T=!0,q());else{var j=i(p);j!==null&&ot(P,j.startTime-F)}}var T=!1,U=-1,W=5,w=-1;function C(){return M?!0:!(s.unstable_now()-w<W)}function H(){if(M=!1,T){var F=s.unstable_now();w=F;var j=!0;try{t:{b=!1,A&&(A=!1,N(U),U=-1),S=!0;var Z=_;try{e:{for(O(F),x=i(m);x!==null&&!(x.expirationTime>F&&C());){var yt=x.callback;if(typeof yt=="function"){x.callback=null,_=x.priorityLevel;var Mt=yt(x.expirationTime<=F);if(F=s.unstable_now(),typeof Mt=="function"){x.callback=Mt,O(F),j=!0;break e}x===i(m)&&r(m),O(F)}else r(m);x=i(m)}if(x!==null)j=!0;else{var I=i(p);I!==null&&ot(P,I.startTime-F),j=!1}}break t}finally{x=null,_=Z,S=!1}j=void 0}}finally{j?q():T=!1}}}var q;if(typeof L=="function")q=function(){L(H)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ht=it.port2;it.port1.onmessage=H,q=function(){ht.postMessage(null)}}else q=function(){v(H,0)};function ot(F,j){U=v(function(){F(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(F){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var Z=_;_=j;try{return F()}finally{_=Z}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=_;_=F;try{return j()}finally{_=Z}},s.unstable_scheduleCallback=function(F,j,Z){var yt=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?yt+Z:yt):Z=yt,F){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=Z+Mt,F={id:g++,callback:j,priorityLevel:F,startTime:Z,expirationTime:Mt,sortIndex:-1},Z>yt?(F.sortIndex=Z,t(p,F),i(m)===null&&F===i(p)&&(A?(N(U),U=-1):A=!0,ot(P,Z-yt))):(F.sortIndex=Mt,t(m,F),b||S||(b=!0,T||(T=!0,q()))),F},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(F){var j=_;return function(){var Z=_;_=j;try{return F.apply(this,arguments)}finally{_=Z}}}})(rh)),rh}var Ux;function zy(){return Ux||(Ux=1,ah.exports=Py()),ah.exports}var sh={exports:{}},Wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx;function Iy(){if(Lx)return Wn;Lx=1;var s=Ud();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Wn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Wn.requestFormReset=function(m){r.d.r(m)},Wn.unstable_batchedUpdates=function(m,p){return m(p)},Wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Wn.version="19.2.0",Wn}var Nx;function Fy(){if(Nx)return sh.exports;Nx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),sh.exports=Iy(),sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox;function By(){if(Ox)return ko;Ox=1;var s=zy(),t=Ud(),i=Fy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=f;break}if(R===o){y=!0,o=u,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,o=u;break}if(R===o){y=!0,o=f,a=u;break}R=R.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case T:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var ot=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},yt=[],Mt=-1;function I(e){return{current:e}}function rt(e){0>Mt||(e.current=yt[Mt],yt[Mt]=null,Mt--)}function tt(e,n){Mt++,yt[Mt]=e.current,e.current=n}var St=I(null),It=I(null),J=I(null),ft=I(null);function Nt(e,n){switch(tt(J,n),tt(It,e),tt(St,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Zm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Zm(n),e=Km(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(St),tt(St,e)}function Lt(){rt(St),rt(It),rt(J)}function jt(e){e.memoizedState!==null&&tt(ft,e);var n=St.current,a=Km(n,e.type);n!==a&&(tt(It,e),tt(St,a))}function he(e){It.current===e&&(rt(St),rt(It)),ft.current===e&&(rt(ft),Fo._currentValue=Z)}var ke,_e;function Ge(e){if(ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ke=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+e+_e}var V=!1;function gt(e,n){if(!e||V)return"";V=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(xt){var ct=xt}Reflect.construct(e,[],Rt)}else{try{Rt.call()}catch(xt){ct=xt}e.call(Rt.prototype)}}else{try{throw Error()}catch(xt){ct=xt}(Rt=e())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(xt){if(xt&&ct&&typeof xt.stack=="string")return[xt.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var B=y.split(`
`),st=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===st.length)for(o=B.length-1,u=st.length-1;1<=o&&0<=u&&B[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==st[u]){var _t=`
`+B[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{V=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ge(a):""}function ye(e,n){switch(e.tag){case 26:case 27:case 5:return Ge(e.type);case 16:return Ge("Lazy");case 13:return e.child!==n&&n!==null?Ge("Suspense Fallback"):Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 15:return gt(e.type,!1);case 11:return gt(e.type.render,!1);case 1:return gt(e.type,!0);case 31:return Ge("Activity");default:return""}}function me(e){try{var n="",a=null;do n+=ye(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ee=Object.prototype.hasOwnProperty,De=s.unstable_scheduleCallback,$t=s.unstable_cancelCallback,de=s.unstable_shouldYield,z=s.unstable_requestPaint,E=s.unstable_now,Y=s.unstable_getCurrentPriorityLevel,pt=s.unstable_ImmediatePriority,Tt=s.unstable_UserBlockingPriority,mt=s.unstable_NormalPriority,ae=s.unstable_LowPriority,Vt=s.unstable_IdlePriority,re=s.log,ne=s.unstable_setDisableYieldValue,Ct=null,Dt=null;function oe(e){if(typeof re=="function"&&ne(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(Ct,e)}catch{}}var Qt=Math.clz32?Math.clz32:k,Yt=Math.log,ce=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Yt(e)/ce|0)|0}var Ht=256,Ot=262144,Pt=4194304;function Ut(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ut(o):(y&=R,y!==0?u=Ut(y):a||(a=R&~e,a!==0&&(u=Ut(a))))):(R=o&~f,R!==0?u=Ut(R):y!==0?u=Ut(y):a||(a=o&~e,a!==0&&(u=Ut(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function xe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Ie(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function bn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xn(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,st=e.hiddenUpdates;for(a=y&~a;0<a;){var _t=31-Qt(a),Rt=1<<_t;R[_t]=0,B[_t]=-1;var ct=st[_t];if(ct!==null)for(st[_t]=null,_t=0;_t<ct.length;_t++){var xt=ct[_t];xt!==null&&(xt.lane&=-536870913)}a&=~Rt}o!==0&&Yr(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Yr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Qt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Qn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Qt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function za(e,n){var a=n&-n;return a=(a&42)!==0?1:ai(a),(a&(e.suspendedLanes|n))!==0?0:a}function ai(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ki(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:_x(e.type))}function xr(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var Ke=Math.random().toString(36).slice(2),xn="__reactFiber$"+Ke,gn="__reactProps$"+Ke,Bi="__reactContainer$"+Ke,oa="__reactEvents$"+Ke,jr="__reactListeners$"+Ke,Zr="__reactHandles$"+Ke,gr="__reactResources$"+Ke,ri="__reactMarker$"+Ke;function qn(e){delete e[xn],delete e[gn],delete e[oa],delete e[jr],delete e[Zr]}function Ti(e){var n=e[xn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Bi]||a[xn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ix(e);e!==null;){if(a=e[xn])return a;e=ix(e)}return n}e=a,a=e.parentNode}return null}function D(e){if(e=e[xn]||e[Bi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function K(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ut(e){var n=e[gr];return n||(n=e[gr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(e){e[ri]=!0}var $=new Set,Ft={};function qt(e,n){Wt(e,n),Wt(e+"Capture",n)}function Wt(e,n){for(Ft[e]=n,e=0;e<n.length;e++)$.add(n[e])}var Kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},G={};function lt(e){return ee.call(G,e)?!0:ee.call(ue,e)?!1:Kt.test(e)?G[e]=!0:(ue[e]=!0,!1)}function vt(e,n,a){if(lt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function kt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function At(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function se(e){if(!e._valueTracker){var n=Bt(e)?"checked":"value";e._valueTracker=At(e,n,""+e[n])}}function te(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Bt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Se(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nt=/[\n"\\]/g;function Xt(e){return e.replace(nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Me(e,n,a,o,u,f,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+wt(n)):e.value!==""+wt(n)&&(e.value=""+wt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?ve(e,y,wt(n)):a!=null?ve(e,y,wt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+wt(R):e.removeAttribute("name")}function ge(e,n,a,o,u,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){se(e);return}a=a!=null?""+wt(a):"",n=n!=null?""+wt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),se(e)}function ve(e,n,a){n==="number"&&Se(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qe(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+wt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ae(e,n,a){if(n!=null&&(n=""+wt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+wt(a):""}function tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ot(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=wt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),se(e)}function Qe(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var an=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||an.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function si(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Nn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Nn(e,f,n[f])}function $n(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ne(e){return Fn.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function be(){}var $e=null;function En(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,Kr=null;function jd(e){var n=D(e);if(n&&(e=n.stateNode)){var a=e[gn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Me(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[gn]||null;if(!u)throw Error(r(90));Me(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&te(o)}break t;case"textarea":Ae(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&qe(e,!!a.multiple,n,!1)}}}var $c=!1;function Zd(e,n,a){if($c)return e(n,a);$c=!0;try{var o=e(n);return o}finally{if($c=!1,(Hi!==null||Kr!==null)&&(Ql(),Hi&&(n=Hi,e=Kr,Kr=Hi=null,jd(n),e)))for(n=0;n<e.length;n++)jd(e[n])}}function to(e,n){var a=e.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(la)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){tu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{tu=!1}var Ia=null,eu=null,fl=null;function Kd(){if(fl)return fl;var e,n=eu,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return fl=u.slice(e,1<o?1-o:void 0)}function hl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function dl(){return!0}function Qd(){return!1}function oi(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?dl:Qd,this.isPropagationStopped=Qd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=oi(vr),no=x({},vr,{view:0,detail:0}),Cv=oi(no),nu,iu,io,ml=x({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(nu=e.screenX-io.screenX,iu=e.screenY-io.screenY):iu=nu=0,io=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),Jd=oi(ml),wv=x({},ml,{dataTransfer:0}),Dv=oi(wv),Uv=x({},no,{relatedTarget:0}),au=oi(Uv),Lv=x({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=oi(Lv),Ov=x({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pv=oi(Ov),zv=x({},vr,{data:0}),$d=oi(zv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Bv[e])?!!n[e]:!1}function ru(){return Hv}var Gv=x({},no,{key:function(e){if(e.key){var n=Iv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vv=oi(Gv),kv=x({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=oi(kv),Xv=x({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),qv=oi(Xv),Wv=x({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=oi(Wv),jv=x({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=oi(jv),Kv=x({},vr,{newState:0,oldState:0}),Qv=oi(Kv),Jv=[9,13,27,32],su=la&&"CompositionEvent"in window,ao=null;la&&"documentMode"in document&&(ao=document.documentMode);var $v=la&&"TextEvent"in window&&!ao,ep=la&&(!su||ao&&8<ao&&11>=ao),np=" ",ip=!1;function ap(e,n){switch(e){case"keyup":return Jv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function t_(e,n){switch(e){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(ip=!0,np);case"textInput":return e=n.data,e===np&&ip?null:e;default:return null}}function e_(e,n){if(Qr)return e==="compositionend"||!su&&ap(e,n)?(e=Kd(),fl=eu=Ia=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ep&&n.locale!=="ko"?null:n.data;default:return null}}var n_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!n_[e.type]:n==="textarea"}function op(e,n,a,o){Hi?Kr?Kr.push(o):Kr=[o]:Hi=o,n=ac(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ro=null,so=null;function i_(e){km(e,0)}function xl(e){var n=K(e);if(te(n))return e}function lp(e,n){if(e==="change")return n}var cp=!1;if(la){var ou;if(la){var lu="oninput"in document;if(!lu){var up=document.createElement("div");up.setAttribute("oninput","return;"),lu=typeof up.oninput=="function"}ou=lu}else ou=!1;cp=ou&&(!document.documentMode||9<document.documentMode)}function fp(){ro&&(ro.detachEvent("onpropertychange",hp),so=ro=null)}function hp(e){if(e.propertyName==="value"&&xl(so)){var n=[];op(n,so,e,En(e)),Zd(i_,n)}}function a_(e,n,a){e==="focusin"?(fp(),ro=n,so=a,ro.attachEvent("onpropertychange",hp)):e==="focusout"&&fp()}function r_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(so)}function s_(e,n){if(e==="click")return xl(n)}function o_(e,n){if(e==="input"||e==="change")return xl(n)}function l_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pi=typeof Object.is=="function"?Object.is:l_;function oo(e,n){if(pi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ee.call(n,u)||!pi(e[u],n[u]))return!1}return!0}function dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pp(e,n){var a=dp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=dp(a)}}function mp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?mp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Se(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Se(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var c_=la&&"documentMode"in document&&11>=document.documentMode,Jr=null,uu=null,lo=null,fu=!1;function gp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Jr==null||Jr!==Se(o)||(o=Jr,"selectionStart"in o&&cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=ac(uu,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Jr)))}function _r(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var $r={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},hu={},vp={};la&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function yr(e){if(hu[e])return hu[e];if(!$r[e])return e;var n=$r[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in vp)return hu[e]=n[a];return e}var _p=yr("animationend"),yp=yr("animationiteration"),Sp=yr("animationstart"),u_=yr("transitionrun"),f_=yr("transitionstart"),h_=yr("transitioncancel"),Mp=yr("transitionend"),bp=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function Gi(e,n){bp.set(e,n),qt(n,[e])}var gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ai=[],ts=0,pu=0;function vl(){for(var e=ts,n=pu=ts=0;n<e;){var a=Ai[n];Ai[n++]=null;var o=Ai[n];Ai[n++]=null;var u=Ai[n];Ai[n++]=null;var f=Ai[n];if(Ai[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Ep(a,u,f)}}function _l(e,n,a,o){Ai[ts++]=e,Ai[ts++]=n,Ai[ts++]=a,Ai[ts++]=o,pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mu(e,n,a,o){return _l(e,n,a,o),yl(e)}function Sr(e,n){return _l(e,null,null,n),yl(e)}function Ep(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Qt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function yl(e){if(50<Uo)throw Uo=0,Tf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var es={};function d_(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,n,a,o){return new d_(e,n,a,o)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,n){var a=e.alternate;return a===null?(a=mi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Tp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Sl(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")xu(e)&&(y=1);else if(typeof e=="string")y=vy(e,a,St.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=mi(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return Mr(a.children,u,f,n);case M:y=8,u|=24;break;case v:return e=mi(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case P:return e=mi(13,a,n,u),e.elementType=P,e.lanes=f,e;case T:return e=mi(19,a,n,u),e.elementType=T,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break t;case N:y=9;break t;case O:y=11;break t;case U:y=14;break t;case W:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=mi(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Mr(e,n,a,o){return e=mi(7,e,o,n),e.lanes=a,e}function gu(e,n,a){return e=mi(6,e,null,n),e.lanes=a,e}function Ap(e){var n=mi(18,null,null,0);return n.stateNode=e,n}function vu(e,n,a){return n=mi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Rp=new WeakMap;function Ri(e,n){if(typeof e=="object"&&e!==null){var a=Rp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:me(n)},Rp.set(e,n),n)}return{value:e,source:n,stack:me(n)}}var ns=[],is=0,Ml=null,co=0,Ci=[],wi=0,Fa=null,Qi=1,Ji="";function ua(e,n){ns[is++]=co,ns[is++]=Ml,Ml=e,co=n}function Cp(e,n,a){Ci[wi++]=Qi,Ci[wi++]=Ji,Ci[wi++]=Fa,Fa=e;var o=Qi;e=Ji;var u=32-Qt(o)-1;o&=~(1<<u),a+=1;var f=32-Qt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Qi=1<<32-Qt(n)+u|a<<u|o,Ji=f+e}else Qi=1<<f|a<<u|o,Ji=e}function _u(e){e.return!==null&&(ua(e,1),Cp(e,1,0))}function yu(e){for(;e===Ml;)Ml=ns[--is],ns[is]=null,co=ns[--is],ns[is]=null;for(;e===Fa;)Fa=Ci[--wi],Ci[wi]=null,Ji=Ci[--wi],Ci[wi]=null,Qi=Ci[--wi],Ci[wi]=null}function wp(e,n){Ci[wi++]=Qi,Ci[wi++]=Ji,Ci[wi++]=Fa,Qi=n.id,Ji=n.overflow,Fa=e}var Bn=null,un=null,Ve=!1,Ba=null,Di=!1,Su=Error(r(519));function Ha(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(Ri(n,e)),Su}function Dp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[xn]=e,n[gn]=o,a){case"dialog":ze("cancel",n),ze("close",n);break;case"iframe":case"object":case"embed":ze("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)ze(No[a],n);break;case"source":ze("error",n);break;case"img":case"image":case"link":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"input":ze("invalid",n),ge(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ze("invalid",n);break;case"textarea":ze("invalid",n),tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ym(n.textContent,a)?(o.popover!=null&&(ze("beforetoggle",n),ze("toggle",n)),o.onScroll!=null&&ze("scroll",n),o.onScrollEnd!=null&&ze("scrollend",n),o.onClick!=null&&(n.onclick=be),n=!0):n=!1,n||Ha(e,!0)}function Up(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Bn=Bn.return}}function as(e){if(e!==Bn)return!1;if(!Ve)return Up(e),Ve=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&un&&Ha(e),Up(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));un=nx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));un=nx(e)}else n===27?(n=un,tr(e.type)?(e=qf,qf=null,un=e):un=n):un=Bn?Li(e.stateNode.nextSibling):null;return!0}function br(){un=Bn=null,Ve=!1}function Mu(){var e=Ba;return e!==null&&(fi===null?fi=e:fi.push.apply(fi,e),Ba=null),e}function uo(e){Ba===null?Ba=[e]:Ba.push(e)}var bu=I(null),Er=null,fa=null;function Ga(e,n,a){tt(bu,n._currentValue),n._currentValue=a}function ha(e){e._currentValue=bu.current,rt(bu)}function Eu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Tu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Eu(f.return,a,e),o||(y=null);break t}f=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Eu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function rs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=u.type;pi(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===ft.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&Tu(n,e,a,o),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!pi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Tr(e){Er=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return Lp(Er,e)}function El(e,n){return Er===null&&Tr(e),Lp(e,n)}function Lp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(r(308));fa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else fa=fa.next=n;return a}var p_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},m_=s.unstable_scheduleCallback,x_=s.unstable_NormalPriority,Tn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new p_,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&m_(x_,function(){e.controller.abort()})}var ho=null,Ru=0,ss=0,os=null;function g_(e,n){if(ho===null){var a=ho=[];Ru=0,ss=Uf(),os={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ru++,n.then(Np,Np),n}function Np(){if(--Ru===0&&ho!==null){os!==null&&(os.status="fulfilled");var e=ho;ho=null,ss=0,os=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function v_(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Op=F.S;F.S=function(e,n){gm=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&g_(e,n),Op!==null&&Op(e,n)};var Ar=I(null);function Cu(){var e=Ar.current;return e!==null?e:cn.pooledCache}function Tl(e,n){n===null?tt(Ar,Ar.current):tt(Ar,n.pool)}function Pp(){var e=Cu();return e===null?null:{parent:Tn._currentValue,pool:e}}var ls=Error(r(460)),wu=Error(r(474)),Al=Error(r(542)),Rl={then:function(){}};function zp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ip(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(be,be),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e;default:if(typeof n.status=="string")n.then(be,be);else{if(e=cn,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e}throw Cr=n,ls}}function Rr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cr=a,ls):a}}var Cr=null;function Fp(){if(Cr===null)throw Error(r(459));var e=Cr;return Cr=null,e}function Bp(e){if(e===ls||e===Al)throw Error(r(483))}var cs=null,po=0;function Cl(e){var n=po;return po+=1,cs===null&&(cs=[]),Ip(cs,e,n)}function mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function wl(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hp(e){function n(Q,X){if(e){var at=Q.deletions;at===null?(Q.deletions=[X],Q.flags|=16):at.push(X)}}function a(Q,X){if(!e)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=ca(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,at){return Q.index=at,e?(at=Q.alternate,at!==null?(at=at.index,at<X?(Q.flags|=67108866,X):at):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function y(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,X,at,Et){return X===null||X.tag!==6?(X=gu(at,Q.mode,Et),X.return=Q,X):(X=u(X,at),X.return=Q,X)}function B(Q,X,at,Et){var fe=at.type;return fe===A?_t(Q,X,at.props.children,Et,at.key):X!==null&&(X.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===W&&Rr(fe)===X.type)?(X=u(X,at.props),mo(X,at),X.return=Q,X):(X=Sl(at.type,at.key,at.props,null,Q.mode,Et),mo(X,at),X.return=Q,X)}function st(Q,X,at,Et){return X===null||X.tag!==4||X.stateNode.containerInfo!==at.containerInfo||X.stateNode.implementation!==at.implementation?(X=vu(at,Q.mode,Et),X.return=Q,X):(X=u(X,at.children||[]),X.return=Q,X)}function _t(Q,X,at,Et,fe){return X===null||X.tag!==7?(X=Mr(at,Q.mode,Et,fe),X.return=Q,X):(X=u(X,at),X.return=Q,X)}function Rt(Q,X,at){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=gu(""+X,Q.mode,at),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return at=Sl(X.type,X.key,X.props,null,Q.mode,at),mo(at,X),at.return=Q,at;case b:return X=vu(X,Q.mode,at),X.return=Q,X;case W:return X=Rr(X),Rt(Q,X,at)}if(ot(X)||q(X))return X=Mr(X,Q.mode,at,null),X.return=Q,X;if(typeof X.then=="function")return Rt(Q,Cl(X),at);if(X.$$typeof===L)return Rt(Q,El(Q,X),at);wl(Q,X)}return null}function ct(Q,X,at,Et){var fe=X!==null?X.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return fe!==null?null:R(Q,X,""+at,Et);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case S:return at.key===fe?B(Q,X,at,Et):null;case b:return at.key===fe?st(Q,X,at,Et):null;case W:return at=Rr(at),ct(Q,X,at,Et)}if(ot(at)||q(at))return fe!==null?null:_t(Q,X,at,Et,null);if(typeof at.then=="function")return ct(Q,X,Cl(at),Et);if(at.$$typeof===L)return ct(Q,X,El(Q,at),Et);wl(Q,at)}return null}function xt(Q,X,at,Et,fe){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return Q=Q.get(at)||null,R(X,Q,""+Et,fe);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case S:return Q=Q.get(Et.key===null?at:Et.key)||null,B(X,Q,Et,fe);case b:return Q=Q.get(Et.key===null?at:Et.key)||null,st(X,Q,Et,fe);case W:return Et=Rr(Et),xt(Q,X,at,Et,fe)}if(ot(Et)||q(Et))return Q=Q.get(at)||null,_t(X,Q,Et,fe,null);if(typeof Et.then=="function")return xt(Q,X,at,Cl(Et),fe);if(Et.$$typeof===L)return xt(Q,X,at,El(X,Et),fe);wl(X,Et)}return null}function ie(Q,X,at,Et){for(var fe=null,Ye=null,le=X,Ce=X=0,Be=null;le!==null&&Ce<at.length;Ce++){le.index>Ce?(Be=le,le=null):Be=le.sibling;var je=ct(Q,le,at[Ce],Et);if(je===null){le===null&&(le=Be);break}e&&le&&je.alternate===null&&n(Q,le),X=f(je,X,Ce),Ye===null?fe=je:Ye.sibling=je,Ye=je,le=Be}if(Ce===at.length)return a(Q,le),Ve&&ua(Q,Ce),fe;if(le===null){for(;Ce<at.length;Ce++)le=Rt(Q,at[Ce],Et),le!==null&&(X=f(le,X,Ce),Ye===null?fe=le:Ye.sibling=le,Ye=le);return Ve&&ua(Q,Ce),fe}for(le=o(le);Ce<at.length;Ce++)Be=xt(le,Q,Ce,at[Ce],Et),Be!==null&&(e&&Be.alternate!==null&&le.delete(Be.key===null?Ce:Be.key),X=f(Be,X,Ce),Ye===null?fe=Be:Ye.sibling=Be,Ye=Be);return e&&le.forEach(function(rr){return n(Q,rr)}),Ve&&ua(Q,Ce),fe}function pe(Q,X,at,Et){if(at==null)throw Error(r(151));for(var fe=null,Ye=null,le=X,Ce=X=0,Be=null,je=at.next();le!==null&&!je.done;Ce++,je=at.next()){le.index>Ce?(Be=le,le=null):Be=le.sibling;var rr=ct(Q,le,je.value,Et);if(rr===null){le===null&&(le=Be);break}e&&le&&rr.alternate===null&&n(Q,le),X=f(rr,X,Ce),Ye===null?fe=rr:Ye.sibling=rr,Ye=rr,le=Be}if(je.done)return a(Q,le),Ve&&ua(Q,Ce),fe;if(le===null){for(;!je.done;Ce++,je=at.next())je=Rt(Q,je.value,Et),je!==null&&(X=f(je,X,Ce),Ye===null?fe=je:Ye.sibling=je,Ye=je);return Ve&&ua(Q,Ce),fe}for(le=o(le);!je.done;Ce++,je=at.next())je=xt(le,Q,Ce,je.value,Et),je!==null&&(e&&je.alternate!==null&&le.delete(je.key===null?Ce:je.key),X=f(je,X,Ce),Ye===null?fe=je:Ye.sibling=je,Ye=je);return e&&le.forEach(function(wy){return n(Q,wy)}),Ve&&ua(Q,Ce),fe}function on(Q,X,at,Et){if(typeof at=="object"&&at!==null&&at.type===A&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case S:t:{for(var fe=at.key;X!==null;){if(X.key===fe){if(fe=at.type,fe===A){if(X.tag===7){a(Q,X.sibling),Et=u(X,at.props.children),Et.return=Q,Q=Et;break t}}else if(X.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===W&&Rr(fe)===X.type){a(Q,X.sibling),Et=u(X,at.props),mo(Et,at),Et.return=Q,Q=Et;break t}a(Q,X);break}else n(Q,X);X=X.sibling}at.type===A?(Et=Mr(at.props.children,Q.mode,Et,at.key),Et.return=Q,Q=Et):(Et=Sl(at.type,at.key,at.props,null,Q.mode,Et),mo(Et,at),Et.return=Q,Q=Et)}return y(Q);case b:t:{for(fe=at.key;X!==null;){if(X.key===fe)if(X.tag===4&&X.stateNode.containerInfo===at.containerInfo&&X.stateNode.implementation===at.implementation){a(Q,X.sibling),Et=u(X,at.children||[]),Et.return=Q,Q=Et;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}Et=vu(at,Q.mode,Et),Et.return=Q,Q=Et}return y(Q);case W:return at=Rr(at),on(Q,X,at,Et)}if(ot(at))return ie(Q,X,at,Et);if(q(at)){if(fe=q(at),typeof fe!="function")throw Error(r(150));return at=fe.call(at),pe(Q,X,at,Et)}if(typeof at.then=="function")return on(Q,X,Cl(at),Et);if(at.$$typeof===L)return on(Q,X,El(Q,at),Et);wl(Q,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,X!==null&&X.tag===6?(a(Q,X.sibling),Et=u(X,at),Et.return=Q,Q=Et):(a(Q,X),Et=gu(at,Q.mode,Et),Et.return=Q,Q=Et),y(Q)):a(Q,X)}return function(Q,X,at,Et){try{po=0;var fe=on(Q,X,at,Et);return cs=null,fe}catch(le){if(le===ls||le===Al)throw le;var Ye=mi(29,le,null,Q.mode);return Ye.lanes=Et,Ye.return=Q,Ye}finally{}}}var wr=Hp(!0),Gp=Hp(!1),Va=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(e),Ep(e,null,a),n}return _l(e,o,n,a),yl(e)}function xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Qn(e,a)}}function Lu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function go(){if(Nu){var e=os;if(e!==null)throw e}}function vo(e,n,a,o){Nu=!1;var u=e.updateQueue;Va=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,st=B.next;B.next=null,y===null?f=st:y.next=st,y=B;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,R=_t.lastBaseUpdate,R!==y&&(R===null?_t.firstBaseUpdate=st:R.next=st,_t.lastBaseUpdate=B))}if(f!==null){var Rt=u.baseState;y=0,_t=st=B=null,R=f;do{var ct=R.lane&-536870913,xt=ct!==R.lane;if(xt?(Fe&ct)===ct:(o&ct)===ct){ct!==0&&ct===ss&&(Nu=!0),_t!==null&&(_t=_t.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var ie=e,pe=R;ct=n;var on=a;switch(pe.tag){case 1:if(ie=pe.payload,typeof ie=="function"){Rt=ie.call(on,Rt,ct);break t}Rt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=pe.payload,ct=typeof ie=="function"?ie.call(on,Rt,ct):ie,ct==null)break t;Rt=x({},Rt,ct);break t;case 2:Va=!0}}ct=R.callback,ct!==null&&(e.flags|=64,xt&&(e.flags|=8192),xt=u.callbacks,xt===null?u.callbacks=[ct]:xt.push(ct))}else xt={lane:ct,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_t===null?(st=_t=xt,B=Rt):_t=_t.next=xt,y|=ct;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;xt=R,R=xt.next,xt.next=null,u.lastBaseUpdate=xt,u.shared.pending=null}}while(!0);_t===null&&(B=Rt),u.baseState=B,u.firstBaseUpdate=st,u.lastBaseUpdate=_t,f===null&&(u.shared.lanes=0),Za|=y,e.lanes=y,e.memoizedState=Rt}}function Vp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Vp(a[e],n)}var us=I(null),Dl=I(0);function Xp(e,n){e=Sa,tt(Dl,e),tt(us,n),Sa=e|n.baseLanes}function Ou(){tt(Dl,Sa),tt(us,us.current)}function Pu(){Sa=Dl.current,rt(us),rt(Dl)}var xi=I(null),Ui=null;function qa(e){var n=e.alternate;tt(Sn,Sn.current&1),tt(xi,e),Ui===null&&(n===null||us.current!==null||n.memoizedState!==null)&&(Ui=e)}function zu(e){tt(Sn,Sn.current),tt(xi,e),Ui===null&&(Ui=e)}function qp(e){e.tag===22?(tt(Sn,Sn.current),tt(xi,e),Ui===null&&(Ui=e)):Wa()}function Wa(){tt(Sn,Sn.current),tt(xi,xi.current)}function gi(e){rt(xi),Ui===e&&(Ui=null),rt(Sn)}var Sn=I(0);function Ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var da=0,Re=null,rn=null,An=null,Ll=!1,fs=!1,Dr=!1,Nl=0,_o=0,hs=null,__=0;function vn(){throw Error(r(321))}function Iu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!pi(e[a],n[a]))return!1;return!0}function Fu(e,n,a,o,u,f){return da=f,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?C0:$u,Dr=!1,f=a(o,u),Dr=!1,fs&&(f=Yp(n,a,o,u)),Wp(e),f}function Wp(e){F.H=Mo;var n=rn!==null&&rn.next!==null;if(da=0,An=rn=Re=null,Ll=!1,_o=0,hs=null,n)throw Error(r(300));e===null||Rn||(e=e.dependencies,e!==null&&bl(e)&&(Rn=!0))}function Yp(e,n,a,o){Re=e;var u=0;do{if(fs&&(hs=null),_o=0,fs=!1,25<=u)throw Error(r(301));if(u+=1,An=rn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=w0,f=n(a,o)}while(fs);return f}function y_(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(rn!==null?rn.memoizedState:null)!==e&&(Re.flags|=1024),n}function Bu(){var e=Nl!==0;return Nl=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(Ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ll=!1}da=0,An=rn=Re=null,fs=!1,_o=Nl=0,hs=null}function ti(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?Re.memoizedState=An=e:An=An.next=e,An}function Mn(){if(rn===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=rn.next;var n=An===null?Re.memoizedState:An.next;if(n!==null)An=n,rn=e;else{if(e===null)throw Re.alternate===null?Error(r(467)):Error(r(310));rn=e,e={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},An===null?Re.memoizedState=An=e:An=An.next=e}return An}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=_o;return _o+=1,hs===null&&(hs=[]),e=Ip(hs,e,n),n=Re,(An===null?n.memoizedState:An.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?C0:$u),e}function Pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===L)return Hn(e)}throw Error(r(438,String(e)))}function Vu(e){var n=null,a=Re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Re.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),Re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function pa(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=Mn();return ku(n,rn,e)}function ku(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=y=null,B=null,st=n,_t=!1;do{var Rt=st.lane&-536870913;if(Rt!==st.lane?(Fe&Rt)===Rt:(da&Rt)===Rt){var ct=st.revertLane;if(ct===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Rt===ss&&(_t=!0);else if((da&ct)===ct){st=st.next,ct===ss&&(_t=!0);continue}else Rt={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},B===null?(R=B=Rt,y=f):B=B.next=Rt,Re.lanes|=ct,Za|=ct;Rt=st.action,Dr&&a(f,Rt),f=st.hasEagerState?st.eagerState:a(f,Rt)}else ct={lane:Rt,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},B===null?(R=B=ct,y=f):B=B.next=ct,Re.lanes|=Rt,Za|=Rt;st=st.next}while(st!==null&&st!==n);if(B===null?y=f:B.next=R,!pi(f,e.memoizedState)&&(Rn=!0,_t&&(a=os,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Xu(e){var n=Mn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);pi(f,n.memoizedState)||(Rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function jp(e,n,a){var o=Re,u=Mn(),f=Ve;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!pi((rn||u).memoizedState,a);if(y&&(u.memoizedState=a,Rn=!0),u=u.queue,Yu(Qp.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||An!==null&&An.memoizedState.tag&1){if(o.flags|=2048,ds(9,{destroy:void 0},Kp.bind(null,o,u,a,n),null),cn===null)throw Error(r(349));f||(da&127)!==0||Zp(o,n,a)}return a}function Zp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Re.updateQueue,n===null?(n=Ol(),Re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Kp(e,n,a,o){n.value=a,n.getSnapshot=o,Jp(n)&&$p(e)}function Qp(e,n,a){return a(function(){Jp(n)&&$p(e)})}function Jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!pi(e,a)}catch{return!0}}function $p(e){var n=Sr(e,2);n!==null&&hi(n,e,2)}function qu(e){var n=ti();if(typeof e=="function"){var a=e;if(e=a(),Dr){oe(!0);try{a()}finally{oe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},n}function t0(e,n,a,o){return e.baseState=a,ku(e,rn,typeof o=="function"?o:pa)}function S_(e,n,a,o,u){if(Bl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,e0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function e0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=F.T,y={};F.T=y;try{var R=a(u,o),B=F.S;B!==null&&B(y,R),n0(e,n,R)}catch(st){Wu(e,n,st)}finally{f!==null&&y.types!==null&&(f.types=y.types),F.T=f}}else try{f=a(u,o),n0(e,n,f)}catch(st){Wu(e,n,st)}}function n0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){i0(e,n,o)},function(o){return Wu(e,n,o)}):i0(e,n,a)}function i0(e,n,a){n.status="fulfilled",n.value=a,a0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,e0(e,a)))}function Wu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,a0(n),n=n.next;while(n!==o)}e.action=null}function a0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function r0(e,n){return n}function s0(e,n){if(Ve){var a=cn.formState;if(a!==null){t:{var o=Re;if(Ve){if(un){e:{for(var u=un,f=Di;u.nodeType!==8;){if(!f){u=null;break e}if(u=Li(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){un=Li(u.nextSibling),o=u.data==="F!";break t}}Ha(o)}o=!1}o&&(n=a[0])}}return a=ti(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:n},a.queue=o,a=T0.bind(null,Re,o),o.dispatch=a,o=qu(!1),f=Ju.bind(null,Re,!1,o.queue),o=ti(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=S_.bind(null,Re,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function o0(e){var n=Mn();return l0(n,rn,e)}function l0(e,n,a){if(n=ku(e,n,r0)[0],e=zl(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(y){throw y===ls?Al:y}else o=n;n=Mn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Re.flags|=2048,ds(9,{destroy:void 0},M_.bind(null,u,a),null)),[o,f,e]}function M_(e,n){e.action=n}function c0(e){var n=Mn(),a=rn;if(a!==null)return l0(n,a,e);Mn(),n=n.memoizedState,a=Mn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ds(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Re.updateQueue,n===null&&(n=Ol(),Re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function u0(){return Mn().memoizedState}function Il(e,n,a,o){var u=ti();Re.flags|=e,u.memoizedState=ds(1|n,{destroy:void 0},a,o===void 0?null:o)}function Fl(e,n,a,o){var u=Mn();o=o===void 0?null:o;var f=u.memoizedState.inst;rn!==null&&o!==null&&Iu(o,rn.memoizedState.deps)?u.memoizedState=ds(n,f,a,o):(Re.flags|=e,u.memoizedState=ds(1|n,f,a,o))}function f0(e,n){Il(8390656,8,e,n)}function Yu(e,n){Fl(2048,8,e,n)}function b_(e){Re.flags|=4;var n=Re.updateQueue;if(n===null)n=Ol(),Re.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function h0(e){var n=Mn().memoizedState;return b_({ref:n,nextImpl:e}),function(){if((Je&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function d0(e,n){return Fl(4,2,e,n)}function p0(e,n){return Fl(4,4,e,n)}function m0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function x0(e,n,a){a=a!=null?a.concat([e]):null,Fl(4,4,m0.bind(null,n,e),a)}function ju(){}function g0(e,n){var a=Mn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Iu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function v0(e,n){var a=Mn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Iu(n,o[1]))return o[0];if(o=e(),Dr){oe(!0);try{e()}finally{oe(!1)}}return a.memoizedState=[o,n],o}function Zu(e,n,a){return a===void 0||(da&1073741824)!==0&&(Fe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=_m(),Re.lanes|=e,Za|=e,a)}function _0(e,n,a,o){return pi(a,n)?a:us.current!==null?(e=Zu(e,a,o),pi(e,n)||(Rn=!0),e):(da&42)===0||(da&1073741824)!==0&&(Fe&261930)===0?(Rn=!0,e.memoizedState=a):(e=_m(),Re.lanes|=e,Za|=e,n)}function y0(e,n,a,o,u){var f=j.p;j.p=f!==0&&8>f?f:8;var y=F.T,R={};F.T=R,Ju(e,!1,n,a);try{var B=u(),st=F.S;if(st!==null&&st(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var _t=v_(B,o);So(e,n,_t,yi(e))}else So(e,n,o,yi(e))}catch(Rt){So(e,n,{then:function(){},status:"rejected",reason:Rt},yi())}finally{j.p=f,y!==null&&R.types!==null&&(y.types=R.types),F.T=y}}function E_(){}function Ku(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=S0(e).queue;y0(e,u,n,Z,a===null?E_:function(){return M0(e),a(o)})}function S0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function M0(e){var n=S0(e);n.next===null&&(n=e.alternate.memoizedState),So(e,n.next.queue,{},yi())}function Qu(){return Hn(Fo)}function b0(){return Mn().memoizedState}function E0(){return Mn().memoizedState}function T_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=yi();e=ka(a);var o=Xa(n,e,a);o!==null&&(hi(o,n,a),xo(o,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function A_(e,n,a){var o=yi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bl(e)?A0(n,a):(a=mu(e,n,a,o),a!==null&&(hi(a,e,o),R0(a,n,o)))}function T0(e,n,a){var o=yi();So(e,n,a,o)}function So(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))A0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(u.hasEagerState=!0,u.eagerState=R,pi(R,y))return _l(e,n,u,0),cn===null&&vl(),!1}catch{}finally{}if(a=mu(e,n,u,o),a!==null)return hi(a,e,o),R0(a,n,o),!0}return!1}function Ju(e,n,a,o){if(o={lane:2,revertLane:Uf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(n)throw Error(r(479))}else n=mu(e,a,o,2),n!==null&&hi(n,e,2)}function Bl(e){var n=e.alternate;return e===Re||n!==null&&n===Re}function A0(e,n){fs=Ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function R0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Qn(e,a)}}var Mo={readContext:Hn,use:Pl,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn};Mo.useEffectEvent=vn;var C0={readContext:Hn,use:Pl,useCallback:function(e,n){return ti().memoizedState=[e,n===void 0?null:n],e},useContext:Hn,useEffect:f0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Il(4194308,4,m0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Il(4194308,4,e,n)},useInsertionEffect:function(e,n){Il(4,2,e,n)},useMemo:function(e,n){var a=ti();n=n===void 0?null:n;var o=e();if(Dr){oe(!0);try{e()}finally{oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ti();if(a!==void 0){var u=a(n);if(Dr){oe(!0);try{a(n)}finally{oe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=A_.bind(null,Re,e),[o.memoizedState,e]},useRef:function(e){var n=ti();return e={current:e},n.memoizedState=e},useState:function(e){e=qu(e);var n=e.queue,a=T0.bind(null,Re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,n){var a=ti();return Zu(a,e,n)},useTransition:function(){var e=qu(!1);return e=y0.bind(null,Re,e.queue,!0,!1),ti().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Re,u=ti();if(Ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),cn===null)throw Error(r(349));(Fe&127)!==0||Zp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,f0(Qp.bind(null,o,f,e),[e]),o.flags|=2048,ds(9,{destroy:void 0},Kp.bind(null,o,f,a,n),null),a},useId:function(){var e=ti(),n=cn.identifierPrefix;if(Ve){var a=Ji,o=Qi;a=(o&~(1<<32-Qt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=__++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:s0,useActionState:s0,useOptimistic:function(e){var n=ti();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,Re,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return ti().memoizedState=T_.bind(null,Re)},useEffectEvent:function(e){var n=ti(),a={impl:e};return n.memoizedState=a,function(){if((Je&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:Hn,use:Pl,useCallback:g0,useContext:Hn,useEffect:Yu,useImperativeHandle:x0,useInsertionEffect:d0,useLayoutEffect:p0,useMemo:v0,useReducer:zl,useRef:u0,useState:function(){return zl(pa)},useDebugValue:ju,useDeferredValue:function(e,n){var a=Mn();return _0(a,rn.memoizedState,e,n)},useTransition:function(){var e=zl(pa)[0],n=Mn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:jp,useId:b0,useHostTransitionStatus:Qu,useFormState:o0,useActionState:o0,useOptimistic:function(e,n){var a=Mn();return t0(a,rn,e,n)},useMemoCache:Vu,useCacheRefresh:E0};$u.useEffectEvent=h0;var w0={readContext:Hn,use:Pl,useCallback:g0,useContext:Hn,useEffect:Yu,useImperativeHandle:x0,useInsertionEffect:d0,useLayoutEffect:p0,useMemo:v0,useReducer:Xu,useRef:u0,useState:function(){return Xu(pa)},useDebugValue:ju,useDeferredValue:function(e,n){var a=Mn();return rn===null?Zu(a,e,n):_0(a,rn.memoizedState,e,n)},useTransition:function(){var e=Xu(pa)[0],n=Mn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:jp,useId:b0,useHostTransitionStatus:Qu,useFormState:c0,useActionState:c0,useOptimistic:function(e,n){var a=Mn();return rn!==null?t0(a,rn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:E0};w0.useEffectEvent=h0;function tf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=yi(),u=ka(o);u.payload=n,a!=null&&(u.callback=a),n=Xa(e,u,o),n!==null&&(hi(n,e,o),xo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=yi(),u=ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(e,u,o),n!==null&&(hi(n,e,o),xo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=yi(),o=ka(a);o.tag=2,n!=null&&(o.callback=n),n=Xa(e,o,a),n!==null&&(hi(n,e,a),xo(n,e,a))}};function D0(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,f):!0}function U0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ef.enqueueReplaceState(n,n.state,null)}function Ur(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function L0(e){gl(e)}function N0(e){console.error(e)}function O0(e){gl(e)}function Hl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function P0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,n)},a}function z0(e){return e=ka(e),e.tag=3,e}function I0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){P0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){P0(n,a,o),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function R_(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&rs(n,a,u,!0),a=xi.current,a!==null){switch(a.tag){case 31:case 13:return Ui===null?Jl():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Cf(e,o,u)),!1;case 22:return a.flags|=65536,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Cf(e,o,u)),!1}throw Error(r(435,a.tag))}return Cf(e,o,u),Jl(),!1}if(Ve)return n=xi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Su&&(e=Error(r(422),{cause:o}),uo(Ri(e,a)))):(o!==Su&&(n=Error(r(423),{cause:o}),uo(Ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ri(o,a),u=nf(e.stateNode,o,u),Lu(e,u),_n!==4&&(_n=2)),!1;var f=Error(r(520),{cause:o});if(f=Ri(f,a),Do===null?Do=[f]:Do.push(f),_n!==4&&(_n=2),n===null)return!0;o=Ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=nf(a.stateNode,o,e),Lu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ka===null||!Ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=z0(u),I0(u,e,a,o),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var af=Error(r(461)),Rn=!1;function Gn(e,n,a,o){n.child=e===null?Gp(n,null,a,o):wr(n,e.child,a,o)}function F0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Tr(n),o=Fu(e,n,a,y,f,u),R=Bu(),e!==null&&!Rn?(Hu(e,n,u),ma(e,n,u)):(Ve&&R&&_u(n),n.flags|=1,Gn(e,n,o,u),n.child)}function B0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,H0(e,n,f,o,u)):(e=Sl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!hf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(y,o)&&e.ref===n.ref)return ma(e,n,u)}return n.flags|=1,e=ca(f,o),e.ref=n.ref,e.return=n,n.child=e}function H0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(oo(f,o)&&e.ref===n.ref)if(Rn=!1,n.pendingProps=o=f,hf(e,u))(e.flags&131072)!==0&&(Rn=!0);else return n.lanes=e.lanes,ma(e,n,u)}return rf(e,n,a,o,u)}function G0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return V0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tl(n,f!==null?f.cachePool:null),f!==null?Xp(n,f):Ou(),qp(n);else return o=n.lanes=536870912,V0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Tl(n,f.cachePool),Xp(n,f),Wa(),n.memoizedState=null):(e!==null&&Tl(n,null),Ou(),Wa());return Gn(e,n,u,a),n.child}function bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function V0(e,n,a,o,u){var f=Cu();return f=f===null?null:{parent:Tn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Tl(n,null),Ou(),qp(n),e!==null&&rs(e,n,o,!0),n.childLanes=u,null}function Gl(e,n){return n=kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function k0(e,n,a){return wr(n,e.child,null,a),e=Gl(n,n.pendingProps),e.flags|=2,gi(n),n.memoizedState=null,e}function C_(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ve){if(o.mode==="hidden")return e=Gl(n,o),n.lanes=536870912,bo(null,e);if(zu(n),(e=un)?(e=ex(e,Di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=Ap(e),a.return=n,n.child=a,Bn=n,un=null)):e=null,e===null)throw Ha(n);return n.lanes=536870912,null}return Gl(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=k0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(Rn||rs(e,n,a,!1),u=(a&e.childLanes)!==0,Rn||u){if(o=cn,o!==null&&(y=za(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Sr(e,y),hi(o,e,y),af;Jl(),n=k0(e,n,a)}else e=f.treeContext,un=Li(y.nextSibling),Bn=n,Ve=!0,Ba=null,Di=!1,e!==null&&wp(n,e),n=Gl(n,o),n.flags|=4096;return n}return e=ca(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Vl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rf(e,n,a,o,u){return Tr(n),a=Fu(e,n,a,o,void 0,u),o=Bu(),e!==null&&!Rn?(Hu(e,n,u),ma(e,n,u)):(Ve&&o&&_u(n),n.flags|=1,Gn(e,n,a,u),n.child)}function X0(e,n,a,o,u,f){return Tr(n),n.updateQueue=null,a=Yp(n,o,a,u),Wp(e),o=Bu(),e!==null&&!Rn?(Hu(e,n,f),ma(e,n,f)):(Ve&&o&&_u(n),n.flags|=1,Gn(e,n,a,f),n.child)}function q0(e,n,a,o,u){if(Tr(n),n.stateNode===null){var f=es,y=a.contextType;typeof y=="object"&&y!==null&&(f=Hn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Du(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Hn(y):es,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(tf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&ef.enqueueReplaceState(f,f.state,null),vo(n,o,f,u),go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,B=Ur(a,R);f.props=B;var st=f.context,_t=a.contextType;y=es,typeof _t=="object"&&_t!==null&&(y=Hn(_t));var Rt=a.getDerivedStateFromProps;_t=typeof Rt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_t||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||st!==y)&&U0(n,f,o,y),Va=!1;var ct=n.memoizedState;f.state=ct,vo(n,o,f,u),go(),st=n.memoizedState,R||ct!==st||Va?(typeof Rt=="function"&&(tf(n,a,Rt,o),st=n.memoizedState),(B=Va||D0(n,a,B,o,ct,st,y))?(_t||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=y,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Uu(e,n),y=n.memoizedProps,_t=Ur(a,y),f.props=_t,Rt=n.pendingProps,ct=f.context,st=a.contextType,B=es,typeof st=="object"&&st!==null&&(B=Hn(st)),R=a.getDerivedStateFromProps,(st=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Rt||ct!==B)&&U0(n,f,o,B),Va=!1,ct=n.memoizedState,f.state=ct,vo(n,o,f,u),go();var xt=n.memoizedState;y!==Rt||ct!==xt||Va||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof R=="function"&&(tf(n,a,R,o),xt=n.memoizedState),(_t=Va||D0(n,a,_t,o,ct,xt,B)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(st||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,xt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,xt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=xt),f.props=o,f.state=xt,f.context=B,o=_t):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Vl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=wr(n,e.child,null,u),n.child=wr(n,null,a,u)):Gn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ma(e,n,u),e}function W0(e,n,a,o){return br(),n.flags|=256,Gn(e,n,a,o),n.child}var sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Pp()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=_i),e}function Y0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(Sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ve){if(u?qa(n):Wa(),(e=un)?(e=ex(e,Di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=Ap(e),a.return=n,n.child=a,Bn=n,un=null)):e=null,e===null)throw Ha(n);return Xf(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Wa(),u=n.mode,R=kl({mode:"hidden",children:R},u),o=Mr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,y,a),n.memoizedState=sf,bo(null,o)):(qa(n),cf(n,R))}var B=e.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(f)n.flags&256?(qa(n),n.flags&=-257,n=uf(e,n,a)):n.memoizedState!==null?(Wa(),n.child=e.child,n.flags|=128,n=null):(Wa(),R=o.fallback,u=n.mode,o=kl({mode:"visible",children:o.children},u),R=Mr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,wr(n,e.child,null,a),o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,y,a),n.memoizedState=sf,n=bo(null,o));else if(qa(n),Xf(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var st=y.dgst;y=st,o=Error(r(419)),o.stack="",o.digest=y,uo({value:o,source:null,stack:null}),n=uf(e,n,a)}else if(Rn||rs(e,n,a,!1),y=(a&e.childLanes)!==0,Rn||y){if(y=cn,y!==null&&(o=za(y,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,Sr(e,o),hi(y,e,o),af;kf(R)||Jl(),n=uf(e,n,a)}else kf(R)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,un=Li(R.nextSibling),Bn=n,Ve=!0,Ba=null,Di=!1,e!==null&&wp(n,e),n=cf(n,o.children),n.flags|=4096);return n}return u?(Wa(),R=o.fallback,u=n.mode,B=e.child,st=B.sibling,o=ca(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,st!==null?R=ca(st,R):(R=Mr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,bo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=of(a):(u=R.cachePool,u!==null?(B=Tn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Pp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=lf(e,y,a),n.memoizedState=sf,bo(e.child,o)):(qa(n),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function cf(e,n){return n=kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function kl(e,n){return e=mi(22,e,null,n),e.lanes=0,e}function uf(e,n,a){return wr(n,e.child,null,a),e=cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function j0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Eu(e.return,n,a)}function ff(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function Z0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=Sn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,tt(Sn,y),Gn(e,n,o,a),o=Ve?co:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&j0(e,a,n);else if(e.tag===19)j0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ul(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ff(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ul(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ff(n,!0,a,null,f,o);break;case"together":ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(rs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ca(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function w_(e,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),Ga(n,Tn,e.memoizedState.cache),br();break;case 27:case 5:jt(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Y0(e,n,a):(qa(n),e=ma(e,n,a),e!==null?e.sibling:null);qa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(rs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Z0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),tt(Sn,Sn.current),o)break;return null;case 22:return n.lanes=0,G0(e,n,a,n.pendingProps);case 24:Ga(n,Tn,e.memoizedState.cache)}return ma(e,n,a)}function K0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Rn=!0;else{if(!hf(e,a)&&(n.flags&128)===0)return Rn=!1,w_(e,n,a);Rn=(e.flags&131072)!==0}else Rn=!1,Ve&&(n.flags&1048576)!==0&&Cp(n,co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Rr(n.elementType),n.type=e,typeof e=="function")xu(e)?(o=Ur(e,o),n.tag=1,n=q0(null,n,e,o,a)):(n.tag=0,n=rf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===O){n.tag=11,n=F0(null,n,e,o,a);break t}else if(u===U){n.tag=14,n=B0(null,n,e,o,a);break t}}throw n=ht(e)||e,Error(r(306,n,""))}}return n;case 0:return rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ur(o,n.pendingProps),q0(e,n,o,u,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Uu(e,n),vo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ga(n,Tn,o),o!==f.cache&&Tu(n,[Tn],a,!0),go(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=W0(e,n,o,a);break t}else if(o!==u){u=Ri(Error(r(424)),n),uo(u),n=W0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(un=Li(e.firstChild),Bn=n,Ve=!0,Ba=null,Di=!0,a=Gp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(br(),o===u){n=ma(e,n,a);break t}Gn(e,n,o,a)}n=n.child}return n;case 26:return Vl(e,n),e===null?(a=ox(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ve||(a=n.type,e=n.pendingProps,o=rc(J.current).createElement(a),o[xn]=n,o[gn]=e,Vn(o,a,e),et(o),n.stateNode=o):n.memoizedState=ox(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&Ve&&(o=n.stateNode=ax(n.type,n.pendingProps,J.current),Bn=n,Di=!0,u=un,tr(n.type)?(qf=u,un=Li(o.firstChild)):un=u),Gn(e,n,n.pendingProps.children,a),Vl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ve&&((u=o=un)&&(o=ry(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,Bn=n,un=Li(o.firstChild),Di=!1,u=!0):u=!1),u||Ha(n)),jt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Hf(u,f)?o=null:y!==null&&Hf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Fu(e,n,y_,null,null,a),Fo._currentValue=u),Vl(e,n),Gn(e,n,o,a),n.child;case 6:return e===null&&Ve&&((e=a=un)&&(a=sy(a,n.pendingProps,Di),a!==null?(n.stateNode=a,Bn=n,un=null,e=!0):e=!1),e||Ha(n)),null;case 13:return Y0(e,n,a);case 4:return Nt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=wr(n,null,o,a):Gn(e,n,o,a),n.child;case 11:return F0(e,n,n.type,n.pendingProps,a);case 7:return Gn(e,n,n.pendingProps,a),n.child;case 8:return Gn(e,n,n.pendingProps.children,a),n.child;case 12:return Gn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),Gn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Tr(n),u=Hn(u),o=o(u),n.flags|=1,Gn(e,n,o,a),n.child;case 14:return B0(e,n,n.type,n.pendingProps,a);case 15:return H0(e,n,n.type,n.pendingProps,a);case 19:return Z0(e,n,a);case 31:return C_(e,n,a);case 22:return G0(e,n,a,n.pendingProps);case 24:return Tr(n),o=Hn(Tn),e===null?(u=Cu(),u===null&&(u=cn,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Du(n),Ga(n,Tn,u)):((e.lanes&a)!==0&&(Uu(e,n),vo(n,null,null,a),go()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,Tn,o)):(o=f.cache,Ga(n,Tn,o),o!==u.cache&&Tu(n,[Tn],a,!0))),Gn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function xa(e){e.flags|=4}function df(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(bm())e.flags|=8192;else throw Cr=Rl,wu}else e.flags&=-16777217}function Q0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hx(n))if(bm())e.flags|=8192;else throw Cr=Rl,wu}function Xl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Xe():536870912,e.lanes|=n,gs|=n)}function Eo(e,n){if(!Ve)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function fn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function D_(e,n,a){var o=n.pendingProps;switch(yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(n),null;case 1:return fn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ha(Tn),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(as(n)?xa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mu())),fn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(xa(n),f!==null?(fn(n),Q0(n,f)):(fn(n),df(n,u,null,o,a))):f?f!==e.memoizedState?(xa(n),fn(n),Q0(n,f)):(fn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&xa(n),fn(n),df(n,u,e,o,a)),null;case 27:if(he(n),a=J.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&xa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return fn(n),null}e=St.current,as(n)?Dp(n):(e=ax(u,o,a),n.stateNode=e,xa(n))}return fn(n),null;case 5:if(he(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&xa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return fn(n),null}if(f=St.current,as(n))Dp(n);else{var y=rc(J.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[xn]=n,f[gn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Vn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&xa(n)}}return fn(n),df(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&xa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=J.current,as(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[xn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ym(e.nodeValue,a)),e||Ha(n,!0)}else e=rc(e).createTextNode(o),e[xn]=n,n.stateNode=e}return fn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=as(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[xn]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;fn(n),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(gi(n),n):(gi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return fn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=as(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[xn]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;fn(n),u=!1}else u=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(gi(n),n):(gi(n),null)}return gi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),fn(n),null);case 4:return Lt(),e===null&&Pf(n.stateNode.containerInfo),fn(n),null;case 10:return ha(n.type),fn(n),null;case 19:if(rt(Sn),o=n.memoizedState,o===null)return fn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Eo(o,!1);else{if(_n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ul(e),f!==null){for(n.flags|=128,Eo(o,!1),e=f.updateQueue,n.updateQueue=e,Xl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Tp(a,e),a=a.sibling;return tt(Sn,Sn.current&1|2),Ve&&ua(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Zl&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ul(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Xl(n,e),Eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ve)return fn(n),null}else 2*E()-o.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=Sn.current,tt(Sn,u?a&1|2:a&1),Ve&&ua(n,o.treeForkCount),e):(fn(n),null);case 22:case 23:return gi(n),Pu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(fn(n),n.subtreeFlags&6&&(n.flags|=8192)):fn(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&rt(Ar),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(Tn),fn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function U_(e,n){switch(yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ha(Tn),Lt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(gi(n),n.alternate===null)throw Error(r(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return rt(Sn),null;case 4:return Lt(),null;case 10:return ha(n.type),null;case 22:case 23:return gi(n),Pu(),e!==null&&rt(Ar),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ha(Tn),null;case 25:return null;default:return null}}function J0(e,n){switch(yu(n),n.tag){case 3:ha(Tn),Lt();break;case 26:case 27:case 5:he(n);break;case 4:Lt();break;case 31:n.memoizedState!==null&&gi(n);break;case 13:gi(n);break;case 19:rt(Sn);break;case 10:ha(n.type);break;case 22:case 23:gi(n),Pu(),e!==null&&rt(Ar);break;case 24:ha(Tn)}}function To(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){nn(n,n.return,R)}}function Ya(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var B=a,st=R;try{st()}catch(_t){nn(u,B,_t)}}}o=o.next}while(o!==f)}}catch(_t){nn(n,n.return,_t)}}function $0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{kp(n,a)}catch(o){nn(e,e.return,o)}}}function tm(e,n,a){a.props=Ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){nn(e,n,o)}}function Ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){nn(e,n,u)}}function $i(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){nn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){nn(e,n,u)}else a.current=null}function em(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){nn(e,e.return,u)}}function pf(e,n,a){try{var o=e.stateNode;$_(o,e.type,a,n),o[gn]=n}catch(u){nn(e,e.return,u)}}function nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&tr(e.type)||e.tag===4}function mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&tr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=be));else if(o!==4&&(o===27&&tr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(xf(e,n,a),e=e.sibling;e!==null;)xf(e,n,a),e=e.sibling}function ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&tr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ql(e,n,a),e=e.sibling;e!==null;)ql(e,n,a),e=e.sibling}function im(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Vn(n,o,a),n[xn]=e,n[gn]=a}catch(f){nn(e,e.return,f)}}var ga=!1,Cn=!1,gf=!1,am=typeof WeakSet=="function"?WeakSet:Set,On=null;function L_(e,n){if(e=e.containerInfo,Ff=hc,e=xp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,R=-1,B=-1,st=0,_t=0,Rt=e,ct=null;e:for(;;){for(var xt;Rt!==a||u!==0&&Rt.nodeType!==3||(R=y+u),Rt!==f||o!==0&&Rt.nodeType!==3||(B=y+o),Rt.nodeType===3&&(y+=Rt.nodeValue.length),(xt=Rt.firstChild)!==null;)ct=Rt,Rt=xt;for(;;){if(Rt===e)break e;if(ct===a&&++st===u&&(R=y),ct===f&&++_t===o&&(B=y),(xt=Rt.nextSibling)!==null)break;Rt=ct,ct=Rt.parentNode}Rt=xt}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:e,selectionRange:a},hc=!1,On=n;On!==null;)if(n=On,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,On=e;else for(;On!==null;){switch(n=On,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ie=Ur(a.type,u);e=o.getSnapshotBeforeUpdate(ie,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(pe){nn(a,a.return,pe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,On=e;break}On=n.return}}function rm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_a(e,a),o&4&&To(5,a);break;case 1:if(_a(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){nn(a,a.return,y)}else{var u=Ur(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){nn(a,a.return,y)}}o&64&&$0(a),o&512&&Ao(a,a.return);break;case 3:if(_a(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kp(e,n)}catch(y){nn(a,a.return,y)}}break;case 27:n===null&&o&4&&im(a);case 26:case 5:_a(e,a),n===null&&o&4&&em(a),o&512&&Ao(a,a.return);break;case 12:_a(e,a);break;case 31:_a(e,a),o&4&&lm(e,a);break;case 13:_a(e,a),o&4&&cm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=G_.bind(null,a),oy(e,a))));break;case 22:if(o=a.memoizedState!==null||ga,!o){n=n!==null&&n.memoizedState!==null||Cn,u=ga;var f=Cn;ga=o,(Cn=n)&&!f?ya(e,a,(a.subtreeFlags&8772)!==0):_a(e,a),ga=u,Cn=f}break;case 30:break;default:_a(e,a)}}function sm(e){var n=e.alternate;n!==null&&(e.alternate=null,sm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hn=null,li=!1;function va(e,n,a){for(a=a.child;a!==null;)om(e,n,a),a=a.sibling}function om(e,n,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 26:Cn||$i(a,n),va(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Cn||$i(a,n);var o=hn,u=li;tr(a.type)&&(hn=a.stateNode,li=!1),va(e,n,a),Po(a.stateNode),hn=o,li=u;break;case 5:Cn||$i(a,n);case 6:if(o=hn,u=li,hn=null,va(e,n,a),hn=o,li=u,hn!==null)if(li)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(f){nn(a,n,f)}else try{hn.removeChild(a.stateNode)}catch(f){nn(a,n,f)}break;case 18:hn!==null&&(li?(e=hn,$m(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ts(e)):$m(hn,a.stateNode));break;case 4:o=hn,u=li,hn=a.stateNode.containerInfo,li=!0,va(e,n,a),hn=o,li=u;break;case 0:case 11:case 14:case 15:Ya(2,a,n),Cn||Ya(4,a,n),va(e,n,a);break;case 1:Cn||($i(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&tm(a,n,o)),va(e,n,a);break;case 21:va(e,n,a);break;case 22:Cn=(o=Cn)||a.memoizedState!==null,va(e,n,a),Cn=o;break;default:va(e,n,a)}}function lm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ts(e)}catch(a){nn(n,n.return,a)}}}function cm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ts(e)}catch(a){nn(n,n.return,a)}}function N_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new am),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new am),n;default:throw Error(r(435,e.tag))}}function Wl(e,n){var a=N_(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=V_.bind(null,e,o);o.then(u,u)}})}function ci(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,R=y;t:for(;R!==null;){switch(R.tag){case 27:if(tr(R.type)){hn=R.stateNode,li=!1;break t}break;case 5:hn=R.stateNode,li=!1;break t;case 3:case 4:hn=R.stateNode.containerInfo,li=!0;break t}R=R.return}if(hn===null)throw Error(r(160));om(f,y,u),hn=null,li=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)um(n,e),n=n.sibling}var Vi=null;function um(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ci(n,e),ui(e),o&4&&(Ya(3,e,e.return),To(3,e),Ya(5,e,e.return));break;case 1:ci(n,e),ui(e),o&512&&(Cn||a===null||$i(a,a.return)),o&64&&ga&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Vi;if(ci(n,e),ui(e),o&512&&(Cn||a===null||$i(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ri]||f[xn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Vn(f,o,a),f[xn]=e,et(f),o=f;break t;case"link":var y=ux("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(f=y[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break e}}f=u.createElement(o),Vn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=ux("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(f=y[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break e}}f=u.createElement(o),Vn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[xn]=e,et(f),o=f}e.stateNode=o}else fx(u,e.type,e.stateNode);else e.stateNode=cx(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?fx(u,e.type,e.stateNode):cx(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ci(n,e),ui(e),o&512&&(Cn||a===null||$i(a,a.return)),a!==null&&o&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ci(n,e),ui(e),o&512&&(Cn||a===null||$i(a,a.return)),e.flags&32){u=e.stateNode;try{Qe(u,"")}catch(ie){nn(e,e.return,ie)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(gf=!0);break;case 6:if(ci(n,e),ui(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ie){nn(e,e.return,ie)}}break;case 3:if(lc=null,u=Vi,Vi=sc(n.containerInfo),ci(n,e),Vi=u,ui(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ts(n.containerInfo)}catch(ie){nn(e,e.return,ie)}gf&&(gf=!1,fm(e));break;case 4:o=Vi,Vi=sc(e.stateNode.containerInfo),ci(n,e),ui(e),Vi=o;break;case 12:ci(n,e),ui(e);break;case 31:ci(n,e),ui(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wl(e,o)));break;case 13:ci(n,e),ui(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wl(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,st=ga,_t=Cn;if(ga=st||u,Cn=_t||B,ci(n,e),Cn=_t,ga=st,ui(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ga||Cn||Lr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=B.stateNode;var Rt=B.memoizedProps.style,ct=Rt!=null&&Rt.hasOwnProperty("display")?Rt.display:null;R.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(ie){nn(B,B.return,ie)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ie){nn(B,B.return,ie)}}}else if(n.tag===18){if(a===null){B=n;try{var xt=B.stateNode;u?tx(xt,!0):tx(B.stateNode,!1)}catch(ie){nn(B,B.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Wl(e,a))));break;case 19:ci(n,e),ui(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wl(e,o)));break;case 30:break;case 21:break;default:ci(n,e),ui(e)}}function ui(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(nm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(e);ql(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Qe(y,""),a.flags&=-33);var R=mf(e);ql(e,R,y);break;case 3:case 4:var B=a.stateNode.containerInfo,st=mf(e);xf(e,st,B);break;default:throw Error(r(161))}}catch(_t){nn(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;fm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rm(e,n.alternate,n),n=n.sibling}function Lr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ya(4,n,n.return),Lr(n);break;case 1:$i(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&tm(n,n.return,a),Lr(n);break;case 27:Po(n.stateNode);case 26:case 5:$i(n,n.return),Lr(n);break;case 22:n.memoizedState===null&&Lr(n);break;case 30:Lr(n);break;default:Lr(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ya(u,f,a),To(4,f);break;case 1:if(ya(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){nn(o,o.return,st)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Vp(B[u],R)}catch(st){nn(o,o.return,st)}}a&&y&64&&$0(f),Ao(f,f.return);break;case 27:im(f);case 26:case 5:ya(u,f,a),a&&o===null&&y&4&&em(f),Ao(f,f.return);break;case 12:ya(u,f,a);break;case 31:ya(u,f,a),a&&y&4&&lm(u,f);break;case 13:ya(u,f,a),a&&y&4&&cm(u,f);break;case 22:f.memoizedState===null&&ya(u,f,a),Ao(f,f.return);break;case 30:break;default:ya(u,f,a)}n=n.sibling}}function vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fo(a))}function _f(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e))}function ki(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)hm(e,n,a,o),n=n.sibling}function hm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ki(e,n,a,o),u&2048&&To(9,n);break;case 1:ki(e,n,a,o);break;case 3:ki(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e)));break;case 12:if(u&2048){ki(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,R=f.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){nn(n,n.return,B)}}else ki(e,n,a,o);break;case 31:ki(e,n,a,o);break;case 13:ki(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?ki(e,n,a,o):Ro(e,n):f._visibility&2?ki(e,n,a,o):(f._visibility|=2,ps(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&vf(y,n);break;case 24:ki(e,n,a,o),u&2048&&_f(n.alternate,n);break;default:ki(e,n,a,o)}}function ps(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,R=a,B=o,st=y.flags;switch(y.tag){case 0:case 11:case 15:ps(f,y,R,B,u),To(8,y);break;case 23:break;case 22:var _t=y.stateNode;y.memoizedState!==null?_t._visibility&2?ps(f,y,R,B,u):Ro(f,y):(_t._visibility|=2,ps(f,y,R,B,u)),u&&st&2048&&vf(y.alternate,y);break;case 24:ps(f,y,R,B,u),u&&st&2048&&_f(y.alternate,y);break;default:ps(f,y,R,B,u)}n=n.sibling}}function Ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&vf(o.alternate,o);break;case 24:Ro(a,o),u&2048&&_f(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Co=8192;function ms(e,n,a){if(e.subtreeFlags&Co)for(e=e.child;e!==null;)dm(e,n,a),e=e.sibling}function dm(e,n,a){switch(e.tag){case 26:ms(e,n,a),e.flags&Co&&e.memoizedState!==null&&_y(a,Vi,e.memoizedState,e.memoizedProps);break;case 5:ms(e,n,a);break;case 3:case 4:var o=Vi;Vi=sc(e.stateNode.containerInfo),ms(e,n,a),Vi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Co,Co=16777216,ms(e,n,a),Co=o):ms(e,n,a));break;default:ms(e,n,a)}}function pm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function wo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,xm(o,e)}pm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mm(e),e=e.sibling}function mm(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yl(e)):wo(e);break;default:wo(e)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,xm(o,e)}pm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ya(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}e=e.sibling}}function xm(e,n){for(;On!==null;){var a=On;switch(a.tag){case 0:case 11:case 15:Ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,On=o;else t:for(a=e;On!==null;){o=On;var u=o.sibling,f=o.return;if(sm(o),o===a){On=null;break t}if(u!==null){u.return=f,On=u;break t}On=f}}}var O_={getCacheForType:function(e){var n=Hn(Tn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Hn(Tn).controller.signal}},P_=typeof WeakMap=="function"?WeakMap:Map,Je=0,cn=null,Pe=null,Fe=0,en=0,vi=null,ja=!1,xs=!1,yf=!1,Sa=0,_n=0,Za=0,Nr=0,Sf=0,_i=0,gs=0,Do=null,fi=null,Mf=!1,jl=0,gm=0,Zl=1/0,Kl=null,Ka=null,Dn=0,Qa=null,vs=null,Ma=0,bf=0,Ef=null,vm=null,Uo=0,Tf=null;function yi(){return(Je&2)!==0&&Fe!==0?Fe&-Fe:F.T!==null?Uf():Ki()}function _m(){if(_i===0)if((Fe&536870912)===0||Ve){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),_i=e}else _i=536870912;return e=xi.current,e!==null&&(e.flags|=32),_i}function hi(e,n,a){(e===cn&&(en===2||en===9)||e.cancelPendingCommit!==null)&&(_s(e,0),Ja(e,Fe,_i,!1)),bn(e,a),((Je&2)===0||e!==cn)&&(e===cn&&((Je&2)===0&&(Nr|=a),_n===4&&Ja(e,Fe,_i,!1)),ta(e))}function ym(e,n,a){if((Je&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Jt(e,n),u=o?F_(e,n):Rf(e,n,!0),f=o;do{if(u===0){xs&&!o&&Ja(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!z_(a)){u=Rf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var R=e;u=Do;var B=R.current.memoizedState.isDehydrated;if(B&&(_s(R,y).flags|=256),y=Rf(R,y,!1),y!==2){if(yf&&!B){R.errorRecoveryDisabledLanes|=f,Nr|=f,u=4;break t}f=fi,fi=u,f!==null&&(fi===null?fi=f:fi.push.apply(fi,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){_s(e,0),Ja(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ja(o,n,_i,!ja);break t;case 2:fi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=jl+300-E(),10<u)){if(Ja(o,n,_i,!ja),bt(o,0,!0)!==0)break t;Ma=n,o.timeoutHandle=Qm(Sm.bind(null,o,a,fi,Kl,Mf,n,_i,Nr,gs,ja,f,"Throttled",-0,0),u);break t}Sm(o,a,fi,Kl,Mf,n,_i,Nr,gs,ja,f,null,-0,0)}}break}while(!0);ta(e)}function Sm(e,n,a,o,u,f,y,R,B,st,_t,Rt,ct,xt){if(e.timeoutHandle=-1,Rt=n.subtreeFlags,Rt&8192||(Rt&16785408)===16785408){Rt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:be},dm(n,f,Rt);var ie=(f&62914560)===f?jl-E():(f&4194048)===f?gm-E():0;if(ie=yy(Rt,ie),ie!==null){Ma=f,e.cancelPendingCommit=ie(wm.bind(null,e,n,f,a,o,u,y,R,B,_t,Rt,null,ct,xt)),Ja(e,f,y,!st);return}}wm(e,n,f,a,o,u,y,R,B)}function z_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!pi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(e,n,a,o){n&=~Sf,n&=~Nr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Qt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&Yr(e,a,n)}function Ql(){return(Je&6)===0?(Lo(0),!1):!0}function Af(){if(Pe!==null){if(en===0)var e=Pe.return;else e=Pe,fa=Er=null,Gu(e),cs=null,po=0,e=Pe;for(;e!==null;)J0(e.alternate,e),e=e.return;Pe=null}}function _s(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ny(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ma=0,Af(),cn=e,Pe=a=ca(e.current,null),Fe=n,en=0,vi=null,ja=!1,xs=Jt(e,n),yf=!1,gs=_i=Sf=Nr=Za=_n=0,fi=Do=null,Mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Qt(o),f=1<<u;n|=e[u],o&=~f}return Sa=n,vl(),a}function Mm(e,n){Re=null,F.H=Mo,n===ls||n===Al?(n=Fp(),en=3):n===wu?(n=Fp(),en=4):en=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,vi=n,Pe===null&&(_n=1,Hl(e,Ri(n,e.current)))}function bm(){var e=xi.current;return e===null?!0:(Fe&4194048)===Fe?Ui===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?e===Ui:!1}function Em(){var e=F.H;return F.H=Mo,e===null?Mo:e}function Tm(){var e=F.A;return F.A=O_,e}function Jl(){_n=4,ja||(Fe&4194048)!==Fe&&xi.current!==null||(xs=!0),(Za&134217727)===0&&(Nr&134217727)===0||cn===null||Ja(cn,Fe,_i,!1)}function Rf(e,n,a){var o=Je;Je|=2;var u=Em(),f=Tm();(cn!==e||Fe!==n)&&(Kl=null,_s(e,n)),n=!1;var y=_n;t:do try{if(en!==0&&Pe!==null){var R=Pe,B=vi;switch(en){case 8:Af(),y=6;break t;case 3:case 2:case 9:case 6:xi.current===null&&(n=!0);var st=en;if(en=0,vi=null,ys(e,R,B,st),a&&xs){y=0;break t}break;default:st=en,en=0,vi=null,ys(e,R,B,st)}}I_(),y=_n;break}catch(_t){Mm(e,_t)}while(!0);return n&&e.shellSuspendCounter++,fa=Er=null,Je=o,F.H=u,F.A=f,Pe===null&&(cn=null,Fe=0,vl()),y}function I_(){for(;Pe!==null;)Am(Pe)}function F_(e,n){var a=Je;Je|=2;var o=Em(),u=Tm();cn!==e||Fe!==n?(Kl=null,Zl=E()+500,_s(e,n)):xs=Jt(e,n);t:do try{if(en!==0&&Pe!==null){n=Pe;var f=vi;e:switch(en){case 1:en=0,vi=null,ys(e,n,f,1);break;case 2:case 9:if(zp(f)){en=0,vi=null,Rm(n);break}n=function(){en!==2&&en!==9||cn!==e||(en=7),ta(e)},f.then(n,n);break t;case 3:en=7;break t;case 4:en=5;break t;case 7:zp(f)?(en=0,vi=null,Rm(n)):(en=0,vi=null,ys(e,n,f,7));break;case 5:var y=null;switch(Pe.tag){case 26:y=Pe.memoizedState;case 5:case 27:var R=Pe;if(y?hx(y):R.stateNode.complete){en=0,vi=null;var B=R.sibling;if(B!==null)Pe=B;else{var st=R.return;st!==null?(Pe=st,$l(st)):Pe=null}break e}}en=0,vi=null,ys(e,n,f,5);break;case 6:en=0,vi=null,ys(e,n,f,6);break;case 8:Af(),_n=6;break t;default:throw Error(r(462))}}B_();break}catch(_t){Mm(e,_t)}while(!0);return fa=Er=null,F.H=o,F.A=u,Je=a,Pe!==null?0:(cn=null,Fe=0,vl(),_n)}function B_(){for(;Pe!==null&&!de();)Am(Pe)}function Am(e){var n=K0(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,n===null?$l(e):Pe=n}function Rm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=X0(a,n,n.pendingProps,n.type,void 0,Fe);break;case 11:n=X0(a,n,n.pendingProps,n.type.render,n.ref,Fe);break;case 5:Gu(n);default:J0(a,n),n=Pe=Tp(n,Sa),n=K0(a,n,Sa)}e.memoizedProps=e.pendingProps,n===null?$l(e):Pe=n}function ys(e,n,a,o){fa=Er=null,Gu(n),cs=null,po=0;var u=n.return;try{if(R_(e,u,n,a,Fe)){_n=1,Hl(e,Ri(a,e.current)),Pe=null;return}}catch(f){if(u!==null)throw Pe=u,f;_n=1,Hl(e,Ri(a,e.current)),Pe=null;return}n.flags&32768?(Ve||o===1?e=!0:xs||(Fe&536870912)!==0?e=!1:(ja=e=!0,(o===2||o===9||o===3||o===6)&&(o=xi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Cm(n,e)):$l(n)}function $l(e){var n=e;do{if((n.flags&32768)!==0){Cm(n,ja);return}e=n.return;var a=D_(n.alternate,n,Sa);if(a!==null){Pe=a;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);_n===0&&(_n=5)}function Cm(e,n){do{var a=U_(e.alternate,e);if(a!==null){a.flags&=32767,Pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=a}while(e!==null);_n=6,Pe=null}function wm(e,n,a,o,u,f,y,R,B){e.cancelPendingCommit=null;do tc();while(Dn!==0);if((Je&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pu,Xn(e,a,f,y,R,B),e===cn&&(Pe=cn=null,Fe=0),vs=n,Qa=e,Ma=a,bf=f,Ef=u,vm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,k_(mt,function(){return Om(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=j.p,j.p=2,y=Je,Je|=4;try{L_(e,n,a)}finally{Je=y,j.p=u,F.T=o}}Dn=1,Dm(),Um(),Lm()}}function Dm(){if(Dn===1){Dn=0;var e=Qa,n=vs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=j.p;j.p=2;var u=Je;Je|=4;try{um(n,e);var f=Bf,y=xp(e.containerInfo),R=f.focusedElem,B=f.selectionRange;if(y!==R&&R&&R.ownerDocument&&mp(R.ownerDocument.documentElement,R)){if(B!==null&&cu(R)){var st=B.start,_t=B.end;if(_t===void 0&&(_t=st),"selectionStart"in R)R.selectionStart=st,R.selectionEnd=Math.min(_t,R.value.length);else{var Rt=R.ownerDocument||document,ct=Rt&&Rt.defaultView||window;if(ct.getSelection){var xt=ct.getSelection(),ie=R.textContent.length,pe=Math.min(B.start,ie),on=B.end===void 0?pe:Math.min(B.end,ie);!xt.extend&&pe>on&&(y=on,on=pe,pe=y);var Q=pp(R,pe),X=pp(R,on);if(Q&&X&&(xt.rangeCount!==1||xt.anchorNode!==Q.node||xt.anchorOffset!==Q.offset||xt.focusNode!==X.node||xt.focusOffset!==X.offset)){var at=Rt.createRange();at.setStart(Q.node,Q.offset),xt.removeAllRanges(),pe>on?(xt.addRange(at),xt.extend(X.node,X.offset)):(at.setEnd(X.node,X.offset),xt.addRange(at))}}}}for(Rt=[],xt=R;xt=xt.parentNode;)xt.nodeType===1&&Rt.push({element:xt,left:xt.scrollLeft,top:xt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Rt.length;R++){var Et=Rt[R];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}hc=!!Ff,Bf=Ff=null}finally{Je=u,j.p=o,F.T=a}}e.current=n,Dn=2}}function Um(){if(Dn===2){Dn=0;var e=Qa,n=vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=j.p;j.p=2;var u=Je;Je|=4;try{rm(e,n.alternate,n)}finally{Je=u,j.p=o,F.T=a}}Dn=3}}function Lm(){if(Dn===4||Dn===3){Dn=0,z();var e=Qa,n=vs,a=Ma,o=vm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Dn=5:(Dn=0,vs=Qa=null,Nm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ka=null),Jn(a),n=n.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=j.p,j.p=2,F.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var R=o[y];f(R.value,{componentStack:R.stack})}}finally{F.T=n,j.p=u}}(Ma&3)!==0&&tc(),ta(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Tf?Uo++:(Uo=0,Tf=e):Uo=0,Lo(0)}}function Nm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fo(n)))}function tc(){return Dm(),Um(),Lm(),Om()}function Om(){if(Dn!==5)return!1;var e=Qa,n=bf;bf=0;var a=Jn(Ma),o=F.T,u=j.p;try{j.p=32>a?32:a,F.T=null,a=Ef,Ef=null;var f=Qa,y=Ma;if(Dn=0,vs=Qa=null,Ma=0,(Je&6)!==0)throw Error(r(331));var R=Je;if(Je|=4,mm(f.current),hm(f,f.current,y,a),Je=R,Lo(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Ct,f)}catch{}return!0}finally{j.p=u,F.T=o,Nm(e,n)}}function Pm(e,n,a){n=Ri(a,n),n=nf(e.stateNode,n,2),e=Xa(e,n,2),e!==null&&(bn(e,2),ta(e))}function nn(e,n,a){if(e.tag===3)Pm(e,e,a);else for(;n!==null;){if(n.tag===3){Pm(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ka===null||!Ka.has(o))){e=Ri(a,e),a=z0(2),o=Xa(n,a,2),o!==null&&(I0(a,o,n,e),bn(o,2),ta(o));break}}n=n.return}}function Cf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new P_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(yf=!0,u.add(a),e=H_.bind(null,e,n,a),n.then(e,e))}function H_(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,cn===e&&(Fe&a)===a&&(_n===4||_n===3&&(Fe&62914560)===Fe&&300>E()-jl?(Je&2)===0&&_s(e,0):Sf|=a,gs===Fe&&(gs=0)),ta(e)}function zm(e,n){n===0&&(n=Xe()),e=Sr(e,n),e!==null&&(bn(e,n),ta(e))}function G_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),zm(e,a)}function V_(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),zm(e,a)}function k_(e,n){return De(e,n)}var ec=null,Ss=null,wf=!1,nc=!1,Df=!1,$a=0;function ta(e){e!==Ss&&e.next===null&&(Ss===null?ec=Ss=e:Ss=Ss.next=e),nc=!0,wf||(wf=!0,q_())}function Lo(e,n){if(!Df&&nc){Df=!0;do for(var a=!1,o=ec;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Qt(42|e)+1)-1,f&=u&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Hm(o,f))}else f=Fe,f=bt(o,o===cn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Jt(o,f)||(a=!0,Hm(o,f));o=o.next}while(a);Df=!1}}function X_(){Im()}function Im(){nc=wf=!1;var e=0;$a!==0&&ey()&&(e=$a);for(var n=E(),a=null,o=ec;o!==null;){var u=o.next,f=Fm(o,n);f===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(Ss=a)):(a=o,(e!==0||(f&3)!==0)&&(nc=!0)),o=u}Dn!==0&&Dn!==5||Lo(e),$a!==0&&($a=0)}function Fm(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Qt(f),R=1<<y,B=u[y];B===-1?((R&a)===0||(R&o)!==0)&&(u[y]=xe(R,n)):B<=n&&(e.expiredLanes|=R),f&=~R}if(n=cn,a=Fe,a=bt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(en===2||en===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&$t(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&$t(o),Jn(a)){case 2:case 8:a=Tt;break;case 32:a=mt;break;case 268435456:a=Vt;break;default:a=mt}return o=Bm.bind(null,e),a=De(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&$t(o),e.callbackPriority=2,e.callbackNode=null,2}function Bm(e,n){if(Dn!==0&&Dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tc()&&e.callbackNode!==a)return null;var o=Fe;return o=bt(e,e===cn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ym(e,o,n),Fm(e,E()),e.callbackNode!=null&&e.callbackNode===a?Bm.bind(null,e):null)}function Hm(e,n){if(tc())return null;ym(e,n,!0)}function q_(){iy(function(){(Je&6)!==0?De(pt,X_):Im()})}function Uf(){if($a===0){var e=ss;e===0&&(e=Ht,Ht<<=1,(Ht&261888)===0&&(Ht=256)),$a=e}return $a}function Gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ne(""+e)}function Vm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function W_(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Gm((u[gn]||null).action),y=o.submitter;y&&(n=(n=y[gn]||null)?Gm(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new pl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var B=y?Vm(u,y):new FormData(u);Ku(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=y?Vm(u,y):new FormData(u),Ku(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Lf=0;Lf<du.length;Lf++){var Nf=du[Lf],Y_=Nf.toLowerCase(),j_=Nf[0].toUpperCase()+Nf.slice(1);Gi(Y_,"on"+j_)}Gi(_p,"onAnimationEnd"),Gi(yp,"onAnimationIteration"),Gi(Sp,"onAnimationStart"),Gi("dblclick","onDoubleClick"),Gi("focusin","onFocus"),Gi("focusout","onBlur"),Gi(u_,"onTransitionRun"),Gi(f_,"onTransitionStart"),Gi(h_,"onTransitionCancel"),Gi(Mp,"onTransitionEnd"),Wt("onMouseEnter",["mouseout","mouseover"]),Wt("onMouseLeave",["mouseout","mouseover"]),Wt("onPointerEnter",["pointerout","pointerover"]),Wt("onPointerLeave",["pointerout","pointerover"]),qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function km(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],B=R.instance,st=R.currentTarget;if(R=R.listener,B!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=st;try{f(u)}catch(_t){gl(_t)}u.currentTarget=null,f=B}else for(y=0;y<o.length;y++){if(R=o[y],B=R.instance,st=R.currentTarget,R=R.listener,B!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=st;try{f(u)}catch(_t){gl(_t)}u.currentTarget=null,f=B}}}}function ze(e,n){var a=n[oa];a===void 0&&(a=n[oa]=new Set);var o=e+"__bubble";a.has(o)||(Xm(n,e,2,!1),a.add(o))}function Of(e,n,a){var o=0;n&&(o|=4),Xm(a,e,o,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[ic]){e[ic]=!0,$.forEach(function(a){a!=="selectionchange"&&(Z_.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ic]||(n[ic]=!0,Of("selectionchange",!1,n))}}function Xm(e,n,a,o){switch(_x(n)){case 2:var u=by;break;case 8:u=Ey;break;default:u=Kf}a=u.bind(null,n,a,e),u=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function zf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Ti(R),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){o=f=y;continue t}R=R.parentNode}}o=o.return}Zd(function(){var st=f,_t=En(a),Rt=[];t:{var ct=bp.get(e);if(ct!==void 0){var xt=pl,ie=e;switch(e){case"keypress":if(hl(a)===0)break t;case"keydown":case"keyup":xt=Vv;break;case"focusin":ie="focus",xt=au;break;case"focusout":ie="blur",xt=au;break;case"beforeblur":case"afterblur":xt=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xt=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xt=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xt=qv;break;case _p:case yp:case Sp:xt=Nv;break;case Mp:xt=Yv;break;case"scroll":case"scrollend":xt=Cv;break;case"wheel":xt=Zv;break;case"copy":case"cut":case"paste":xt=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xt=tp;break;case"toggle":case"beforetoggle":xt=Qv}var pe=(n&4)!==0,on=!pe&&(e==="scroll"||e==="scrollend"),Q=pe?ct!==null?ct+"Capture":null:ct;pe=[];for(var X=st,at;X!==null;){var Et=X;if(at=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||at===null||Q===null||(Et=to(X,Q),Et!=null&&pe.push(Oo(X,Et,at))),on)break;X=X.return}0<pe.length&&(ct=new xt(ct,ie,null,a,_t),Rt.push({event:ct,listeners:pe}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",xt=e==="mouseout"||e==="pointerout",ct&&a!==$e&&(ie=a.relatedTarget||a.fromElement)&&(Ti(ie)||ie[Bi]))break t;if((xt||ct)&&(ct=_t.window===_t?_t:(ct=_t.ownerDocument)?ct.defaultView||ct.parentWindow:window,xt?(ie=a.relatedTarget||a.toElement,xt=st,ie=ie?Ti(ie):null,ie!==null&&(on=c(ie),pe=ie.tag,ie!==on||pe!==5&&pe!==27&&pe!==6)&&(ie=null)):(xt=null,ie=st),xt!==ie)){if(pe=Jd,Et="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(pe=tp,Et="onPointerLeave",Q="onPointerEnter",X="pointer"),on=xt==null?ct:K(xt),at=ie==null?ct:K(ie),ct=new pe(Et,X+"leave",xt,a,_t),ct.target=on,ct.relatedTarget=at,Et=null,Ti(_t)===st&&(pe=new pe(Q,X+"enter",ie,a,_t),pe.target=at,pe.relatedTarget=on,Et=pe),on=Et,xt&&ie)e:{for(pe=K_,Q=xt,X=ie,at=0,Et=Q;Et;Et=pe(Et))at++;Et=0;for(var fe=X;fe;fe=pe(fe))Et++;for(;0<at-Et;)Q=pe(Q),at--;for(;0<Et-at;)X=pe(X),Et--;for(;at--;){if(Q===X||X!==null&&Q===X.alternate){pe=Q;break e}Q=pe(Q),X=pe(X)}pe=null}else pe=null;xt!==null&&qm(Rt,ct,xt,pe,!1),ie!==null&&on!==null&&qm(Rt,on,ie,pe,!0)}}t:{if(ct=st?K(st):window,xt=ct.nodeName&&ct.nodeName.toLowerCase(),xt==="select"||xt==="input"&&ct.type==="file")var Ye=lp;else if(sp(ct))if(cp)Ye=o_;else{Ye=r_;var le=a_}else xt=ct.nodeName,!xt||xt.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?st&&$n(st.elementType)&&(Ye=lp):Ye=s_;if(Ye&&(Ye=Ye(e,st))){op(Rt,Ye,a,_t);break t}le&&le(e,ct,st),e==="focusout"&&st&&ct.type==="number"&&st.memoizedProps.value!=null&&ve(ct,"number",ct.value)}switch(le=st?K(st):window,e){case"focusin":(sp(le)||le.contentEditable==="true")&&(Jr=le,uu=st,lo=null);break;case"focusout":lo=uu=Jr=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,gp(Rt,a,_t);break;case"selectionchange":if(c_)break;case"keydown":case"keyup":gp(Rt,a,_t)}var Ce;if(su)t:{switch(e){case"compositionstart":var Be="onCompositionStart";break t;case"compositionend":Be="onCompositionEnd";break t;case"compositionupdate":Be="onCompositionUpdate";break t}Be=void 0}else Qr?ap(e,a)&&(Be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Be="onCompositionStart");Be&&(ep&&a.locale!=="ko"&&(Qr||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&Qr&&(Ce=Kd()):(Ia=_t,eu="value"in Ia?Ia.value:Ia.textContent,Qr=!0)),le=ac(st,Be),0<le.length&&(Be=new $d(Be,e,null,a,_t),Rt.push({event:Be,listeners:le}),Ce?Be.data=Ce:(Ce=rp(a),Ce!==null&&(Be.data=Ce)))),(Ce=$v?t_(e,a):e_(e,a))&&(Be=ac(st,"onBeforeInput"),0<Be.length&&(le=new $d("onBeforeInput","beforeinput",null,a,_t),Rt.push({event:le,listeners:Be}),le.data=Ce)),W_(Rt,e,st,a,_t)}km(Rt,n)})}function Oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ac(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=to(e,a),u!=null&&o.unshift(Oo(e,u,f)),u=to(e,n),u!=null&&o.push(Oo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function K_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qm(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var R=a,B=R.alternate,st=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||st===null||(B=st,u?(st=to(a,f),st!=null&&y.unshift(Oo(a,st,B))):u||(st=to(a,f),st!=null&&y.push(Oo(a,st,B)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Q_=/\r\n?/g,J_=/\u0000|\uFFFD/g;function Wm(e){return(typeof e=="string"?e:""+e).replace(Q_,`
`).replace(J_,"")}function Ym(e,n){return n=Wm(n),Wm(e)===n}function sn(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Qe(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Qe(e,""+o);break;case"className":kt(e,"class",o);break;case"tabIndex":kt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(e,a,o);break;case"style":si(e,o,f);break;case"data":if(n!=="object"){kt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ne(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&sn(e,n,"name",u.name,u,null),sn(e,n,"formEncType",u.formEncType,u,null),sn(e,n,"formMethod",u.formMethod,u,null),sn(e,n,"formTarget",u.formTarget,u,null)):(sn(e,n,"encType",u.encType,u,null),sn(e,n,"method",u.method,u,null),sn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ne(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=be);break;case"onScroll":o!=null&&ze("scroll",e);break;case"onScrollEnd":o!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ne(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ze("beforetoggle",e),ze("toggle",e),vt(e,"popover",o);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":vt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ue.get(a)||a,vt(e,a,o))}}function If(e,n,a,o,u,f){switch(a){case"style":si(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Qe(e,o):(typeof o=="number"||typeof o=="bigint")&&Qe(e,""+o);break;case"onScroll":o!=null&&ze("scroll",e);break;case"onScrollEnd":o!=null&&ze("scrollend",e);break;case"onClick":o!=null&&(e.onclick=be);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ft.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):vt(e,a,o)}}}function Vn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:sn(e,n,f,y,a,null)}}u&&sn(e,n,"srcSet",a.srcSet,a,null),o&&sn(e,n,"src",a.src,a,null);return;case"input":ze("invalid",e);var R=f=y=u=null,B=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":y=_t;break;case"checked":B=_t;break;case"defaultChecked":st=_t;break;case"value":f=_t;break;case"defaultValue":R=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(r(137,n));break;default:sn(e,n,o,_t,a,null)}}ge(e,f,R,B,st,y,u,!1);return;case"select":ze("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:sn(e,n,u,R,a,null)}n=f,a=y,e.multiple=!!o,n!=null?qe(e,!!o,n,!1):a!=null&&qe(e,!!o,a,!0);return;case"textarea":ze("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:sn(e,n,y,R,a,null)}tn(e,o,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:sn(e,n,B,o,a,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(o=0;o<No.length;o++)ze(No[o],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:sn(e,n,st,o,a,null)}return;default:if($n(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&If(e,n,_t,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&sn(e,n,R,o,a,null))}function $_(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,R=null,B=null,st=null,_t=null;for(xt in a){var Rt=a[xt];if(a.hasOwnProperty(xt)&&Rt!=null)switch(xt){case"checked":break;case"value":break;case"defaultValue":B=Rt;default:o.hasOwnProperty(xt)||sn(e,n,xt,null,o,Rt)}}for(var ct in o){var xt=o[ct];if(Rt=a[ct],o.hasOwnProperty(ct)&&(xt!=null||Rt!=null))switch(ct){case"type":f=xt;break;case"name":u=xt;break;case"checked":st=xt;break;case"defaultChecked":_t=xt;break;case"value":y=xt;break;case"defaultValue":R=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:xt!==Rt&&sn(e,n,ct,xt,o,Rt)}}Me(e,y,R,B,st,_t,f,u);return;case"select":xt=y=R=ct=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":xt=B;default:o.hasOwnProperty(f)||sn(e,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":ct=f;break;case"defaultValue":R=f;break;case"multiple":y=f;default:f!==B&&sn(e,n,u,f,o,B)}n=R,a=y,o=xt,ct!=null?qe(e,!!a,ct,!1):!!o!=!!a&&(n!=null?qe(e,!!a,n,!0):qe(e,!!a,a?[]:"",!1));return;case"textarea":xt=ct=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:sn(e,n,R,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ct=u;break;case"defaultValue":xt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&sn(e,n,y,u,o,f)}Ae(e,ct,xt);return;case"option":for(var ie in a)if(ct=a[ie],a.hasOwnProperty(ie)&&ct!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:sn(e,n,ie,null,o,ct)}for(B in o)if(ct=o[B],xt=a[B],o.hasOwnProperty(B)&&ct!==xt&&(ct!=null||xt!=null))switch(B){case"selected":e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol";break;default:sn(e,n,B,ct,o,xt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in a)ct=a[pe],a.hasOwnProperty(pe)&&ct!=null&&!o.hasOwnProperty(pe)&&sn(e,n,pe,null,o,ct);for(st in o)if(ct=o[st],xt=a[st],o.hasOwnProperty(st)&&ct!==xt&&(ct!=null||xt!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:sn(e,n,st,ct,o,xt)}return;default:if($n(n)){for(var on in a)ct=a[on],a.hasOwnProperty(on)&&ct!==void 0&&!o.hasOwnProperty(on)&&If(e,n,on,void 0,o,ct);for(_t in o)ct=o[_t],xt=a[_t],!o.hasOwnProperty(_t)||ct===xt||ct===void 0&&xt===void 0||If(e,n,_t,ct,o,xt);return}}for(var Q in a)ct=a[Q],a.hasOwnProperty(Q)&&ct!=null&&!o.hasOwnProperty(Q)&&sn(e,n,Q,null,o,ct);for(Rt in o)ct=o[Rt],xt=a[Rt],!o.hasOwnProperty(Rt)||ct===xt||ct==null&&xt==null||sn(e,n,Rt,ct,o,xt)}function jm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ty(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,R=u.duration;if(f&&R&&jm(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],st=B.startTime;if(st>R)break;var _t=B.transferSize,Rt=B.initiatorType;_t&&jm(Rt)&&(B=B.responseEnd,y+=_t*(B<R?1:(R-st)/(B-st)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ff=null,Bf=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function Zm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Km(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function ey(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var Qm=typeof setTimeout=="function"?setTimeout:void 0,ny=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,iy=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(e){return Jm.resolve(null).then(e).catch(ay)}:Qm;function ay(e){setTimeout(function(){throw e})}function tr(e){return e==="head"}function $m(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Ts(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[ri]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Po(e.ownerDocument.body);a=u}while(a);Ts(n)}function tx(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),qn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ry(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ri])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Li(e.nextSibling),e===null)break}return null}function sy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Li(e.nextSibling),e===null))return null;return e}function ex(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Li(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function oy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var qf=null;function nx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function ix(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function ax(e,n,a){switch(n=rc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qn(e)}var Ni=new Map,rx=new Set;function sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=j.d;j.d={f:ly,r:cy,D:uy,C:fy,L:hy,m:dy,X:my,S:py,M:xy};function ly(){var e=ba.f(),n=Ql();return e||n}function cy(e){var n=D(e);n!==null&&n.tag===5&&n.type==="form"?M0(n):ba.r(e)}var Ms=typeof document>"u"?null:document;function sx(e,n,a){var o=Ms;if(o&&typeof n=="string"&&n){var u=Xt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),rx.has(u)||(rx.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Vn(n,"link",e),et(n),o.head.appendChild(n)))}}function uy(e){ba.D(e),sx("dns-prefetch",e,null)}function fy(e,n){ba.C(e,n),sx("preconnect",e,n)}function hy(e,n,a){ba.L(e,n,a);var o=Ms;if(o&&e&&n){var u='link[rel="preload"][as="'+Xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xt(a.imageSizes)+'"]')):u+='[href="'+Xt(e)+'"]';var f=u;switch(n){case"style":f=bs(e);break;case"script":f=Es(e)}Ni.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ni.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(f))||n==="script"&&o.querySelector(Io(f))||(n=o.createElement("link"),Vn(n,"link",e),et(n),o.head.appendChild(n)))}}function dy(e,n){ba.m(e,n);var a=Ms;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xt(o)+'"][href="'+Xt(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Es(e)}if(!Ni.has(f)&&(e=x({rel:"modulepreload",href:e},n),Ni.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}o=a.createElement("link"),Vn(o,"link",e),et(o),a.head.appendChild(o)}}}function py(e,n,a){ba.S(e,n,a);var o=Ms;if(o&&e){var u=ut(o).hoistableStyles,f=bs(e);n=n||"default";var y=u.get(f);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(zo(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ni.get(f))&&Wf(e,a);var B=y=o.createElement("link");et(B),Vn(B,"link",e),B._p=new Promise(function(st,_t){B.onload=st,B.onerror=_t}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,oc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(f,y)}}}function my(e,n){ba.X(e,n);var a=Ms;if(a&&e){var o=ut(a).hoistableScripts,u=Es(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=x({src:e,async:!0},n),(n=Ni.get(u))&&Yf(e,n),f=a.createElement("script"),et(f),Vn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function xy(e,n){ba.M(e,n);var a=Ms;if(a&&e){var o=ut(a).hoistableScripts,u=Es(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=Ni.get(u))&&Yf(e,n),f=a.createElement("script"),et(f),Vn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ox(e,n,a,o){var u=(u=J.current)?sc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=bs(a.href),a=ut(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=bs(a.href);var f=ut(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(zo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),Ni.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ni.set(e,a),f||gy(u,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Es(a),a=ut(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function bs(e){return'href="'+Xt(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function lx(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function gy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Vn(n,"link",a),et(n),e.head.appendChild(n))}function Es(e){return'[src="'+Xt(e)+'"]'}function Io(e){return"script[async]"+e}function cx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xt(a.href)+'"]');if(o)return n.instance=o,et(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),et(o),Vn(o,"style",u),oc(o,a.precedence,e),n.instance=o;case"stylesheet":u=bs(a.href);var f=e.querySelector(zo(u));if(f)return n.state.loading|=4,n.instance=f,et(f),f;o=lx(a),(u=Ni.get(u))&&Wf(o,u),f=(e.ownerDocument||e).createElement("link"),et(f);var y=f;return y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),Vn(f,"link",o),n.state.loading|=4,oc(f,a.precedence,e),n.instance=f;case"script":return f=Es(a.src),(u=e.querySelector(Io(f)))?(n.instance=u,et(u),u):(o=a,(u=Ni.get(f))&&(o=x({},a),Yf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),et(u),Vn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,a.precedence,e));return n.instance}function oc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var lc=null;function ux(e,n,a){if(lc===null){var o=new Map,u=lc=new Map;u.set(a,o)}else u=lc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ri]||f[xn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var R=o.get(y);R?R.push(f):o.set(y,[f])}}return o}function fx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function vy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _y(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=bs(o.href),f=n.querySelector(zo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=cc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,et(f);return}f=n.ownerDocument||n,o=lx(o),(u=Ni.get(u))&&Wf(o,u),f=f.createElement("link"),et(f);var y=f;y._p=new Promise(function(R,B){y.onload=R,y.onerror=B}),Vn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=cc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function yy(e,n){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&jf===0&&(jf=62500*ty());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uc=null;function fc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,n.forEach(Sy,e),uc=null,cc.call(e))}function Sy(e,n){if(!(n.state.loading&4)){var a=uc.get(e);if(a)var o=a.get(null);else{a=new Map,uc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function My(e,n,a,o,u,f,y,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ie(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ie(0),this.hiddenUpdates=Ie(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function dx(e,n,a,o,u,f,y,R,B,st,_t,Rt){return e=new My(e,n,a,y,B,st,_t,Rt,R),n=1,f===!0&&(n|=24),f=mi(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Du(f),e}function px(e){return e?(e=es,e):es}function mx(e,n,a,o,u,f){u=px(u),o.context===null?o.context=u:o.pendingContext=u,o=ka(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Xa(e,o,n),a!==null&&(hi(a,e,n),xo(a,e,n))}function xx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zf(e,n){xx(e,n),(e=e.alternate)&&xx(e,n)}function gx(e){if(e.tag===13||e.tag===31){var n=Sr(e,67108864);n!==null&&hi(n,e,67108864),Zf(e,67108864)}}function vx(e){if(e.tag===13||e.tag===31){var n=yi();n=ai(n);var a=Sr(e,n);a!==null&&hi(a,e,n),Zf(e,n)}}var hc=!0;function by(e,n,a,o){var u=F.T;F.T=null;var f=j.p;try{j.p=2,Kf(e,n,a,o)}finally{j.p=f,F.T=u}}function Ey(e,n,a,o){var u=F.T;F.T=null;var f=j.p;try{j.p=8,Kf(e,n,a,o)}finally{j.p=f,F.T=u}}function Kf(e,n,a,o){if(hc){var u=Qf(o);if(u===null)zf(e,n,o,dc,a),yx(e,o);else if(Ay(u,e,n,a,o))o.stopPropagation();else if(yx(e,o),n&4&&-1<Ty.indexOf(e)){for(;u!==null;){var f=D(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ut(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var B=1<<31-Qt(y);R.entanglements[1]|=B,y&=~B}ta(f),(Je&6)===0&&(Zl=E()+500,Lo(0))}}break;case 31:case 13:R=Sr(f,2),R!==null&&hi(R,f,2),Ql(),Zf(f,2)}if(f=Qf(o),f===null&&zf(e,n,o,dc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else zf(e,n,o,null,a)}}function Qf(e){return e=En(e),Jf(e)}var dc=null;function Jf(e){if(dc=null,e=Ti(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return dc=e,null}function _x(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case pt:return 2;case Tt:return 8;case mt:case ae:return 32;case Vt:return 268435456;default:return 32}default:return 32}}var $f=!1,er=null,nr=null,ir=null,Bo=new Map,Ho=new Map,ar=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yx(e,n){switch(e){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=D(n),n!==null&&gx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ay(e,n,a,o,u){switch(n){case"focusin":return er=Go(er,e,n,a,o,u),!0;case"dragenter":return nr=Go(nr,e,n,a,o,u),!0;case"mouseover":return ir=Go(ir,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Bo.set(f,Go(Bo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ho.set(f,Go(Ho.get(f)||null,e,n,a,o,u)),!0}return!1}function Sx(e){var n=Ti(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,xr(e.priority,function(){vx(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,xr(e.priority,function(){vx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);$e=o,a.target.dispatchEvent(o),$e=null}else return n=D(a),n!==null&&gx(n),e.blockedOn=a,!1;n.shift()}return!0}function Mx(e,n,a){pc(e)&&a.delete(n)}function Ry(){$f=!1,er!==null&&pc(er)&&(er=null),nr!==null&&pc(nr)&&(nr=null),ir!==null&&pc(ir)&&(ir=null),Bo.forEach(Mx),Ho.forEach(Mx)}function mc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ry)))}var xc=null;function bx(e){xc!==e&&(xc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xc===e&&(xc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Jf(o||a)===null)continue;break}var f=D(a);f!==null&&(e.splice(n,3),n-=3,Ku(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ts(e){function n(B){return mc(B,e)}er!==null&&mc(er,e),nr!==null&&mc(nr,e),ir!==null&&mc(ir,e),Bo.forEach(n),Ho.forEach(n);for(var a=0;a<ar.length;a++){var o=ar[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)Sx(a),a.blockedOn===null&&ar.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[gn]||null;if(typeof f=="function")y||bx(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[gn]||null)R=y.formAction;else if(Jf(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),bx(a)}}}function Ex(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function th(e){this._internalRoot=e}gc.prototype.render=th.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=yi();mx(a,o,e,n,null,null)},gc.prototype.unmount=th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mx(e.current,2,null,e,null,null),Ql(),n[Bi]=null}};function gc(e){this._internalRoot=e}gc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ki();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ar.length&&n!==0&&n<ar[a].priority;a++);ar.splice(a,0,e),a===0&&Sx(e)}};var Tx=t.version;if(Tx!=="19.2.0")throw Error(r(527,Tx,"19.2.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Cy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Ct=vc.inject(Cy),Dt=vc}catch{}}return ko.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=L0,f=N0,y=O0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=dx(e,1,!1,null,null,a,o,null,u,f,y,Ex),e[Bi]=n.current,Pf(e),new th(n)},ko.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=L0,y=N0,R=O0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=dx(e,1,!0,n,a??null,o,u,B,f,y,R,Ex),n.context=px(null),a=n.current,o=yi(),o=ai(o),u=ka(o),u.callback=null,Xa(a,u,o),a=o,n.current.lanes=a,bn(n,a),ta(n),e[Bi]=n.current,Pf(e),new gc(n)},ko.version="19.2.0",ko}var Px;function Hy(){if(Px)return ih.exports;Px=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ih.exports=By(),ih.exports}var Gy=Hy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="181",Vy=0,zx=1,ky=2,jg=1,Xy=2,Ua=3,mr=0,di=1,na=2,Oa=0,Vs=1,Ix=2,Fx=3,Bx=4,qy=5,Gr=100,Wy=101,Yy=102,jy=103,Zy=104,Ky=200,Qy=201,Jy=202,$y=203,Hh=204,Gh=205,t1=206,e1=207,n1=208,i1=209,a1=210,r1=211,s1=212,o1=213,l1=214,Vh=0,kh=1,Xh=2,Xs=3,qh=4,Wh=5,Yh=6,jh=7,Zg=0,c1=1,u1=2,pr=0,f1=1,h1=2,d1=3,p1=4,m1=5,x1=6,g1=7,Kg=300,qs=301,Ws=302,Zh=303,Kh=304,Zc=306,Qh=1e3,La=1001,Jh=1002,Ei=1003,v1=1004,_c=1005,Ii=1006,oh=1007,kr=1008,ra=1009,Qg=1010,Jg=1011,tl=1012,Nd=1013,qr=1014,Na=1015,Zs=1016,Od=1017,Pd=1018,el=1020,$g=35902,tv=35899,ev=1021,nv=1022,ji=1023,nl=1026,il=1027,iv=1028,zd=1029,Id=1030,Fd=1031,Bd=1033,Vc=33776,kc=33777,Xc=33778,qc=33779,$h=35840,td=35841,ed=35842,nd=35843,id=36196,ad=37492,rd=37496,sd=37808,od=37809,ld=37810,cd=37811,ud=37812,fd=37813,hd=37814,dd=37815,pd=37816,md=37817,xd=37818,gd=37819,vd=37820,_d=37821,yd=36492,Sd=36494,Md=36495,bd=36283,Ed=36284,Td=36285,Ad=36286,_1=3200,y1=3201,av=0,S1=1,hr="",Pi="srgb",Ys="srgb-linear",Yc="linear",ln="srgb",As=7680,Hx=519,M1=512,b1=513,E1=514,rv=515,T1=516,A1=517,R1=518,C1=519,Gx=35044,Vx="300 es",ia=2e3,jc=2001;function sv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function al(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function w1(){const s=al("canvas");return s.style.display="block",s}const kx={};function Xx(...s){const t="THREE."+s.shift();console.log(t,...s)}function Te(...s){const t="THREE."+s.shift();console.warn(t,...s)}function yn(...s){const t="THREE."+s.shift();console.error(t,...s)}function rl(...s){const t=s.join(" ");t in kx||(kx[t]=!0,Te(...s))}function D1(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qx=1234567;const Jo=Math.PI/180,sl=180/Math.PI;function Qs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[i&63|128]+Yn[i>>8&255]+"-"+Yn[i>>16&255]+Yn[i>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function He(s,t,i){return Math.max(t,Math.min(i,s))}function Hd(s,t){return(s%t+t)%t}function U1(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function L1(s,t,i){return s!==t?(i-s)/(t-s):0}function $o(s,t,i){return(1-i)*s+i*t}function N1(s,t,i,r){return $o(s,t,1-Math.exp(-i*r))}function O1(s,t=1){return t-Math.abs(Hd(s,t*2)-t)}function P1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function z1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function I1(s,t){return s+Math.floor(Math.random()*(t-s+1))}function F1(s,t){return s+Math.random()*(t-s)}function B1(s){return s*(.5-Math.random())}function H1(s){s!==void 0&&(qx=s);let t=qx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function G1(s){return s*Jo}function V1(s){return s*sl}function k1(s){return(s&s-1)===0&&s!==0}function X1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function q1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function W1(s,t,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+r)/2),g=h((t+r)/2),x=c((t-r)/2),_=h((t-r)/2),S=c((r-t)/2),b=h((r-t)/2);switch(l){case"XYX":s.set(d*g,m*x,m*_,d*p);break;case"YZY":s.set(m*_,d*g,m*x,d*p);break;case"ZXZ":s.set(m*x,m*_,d*g,d*p);break;case"XZX":s.set(d*g,m*b,m*S,d*p);break;case"YXY":s.set(m*S,d*g,m*b,d*p);break;case"ZYZ":s.set(m*b,m*S,d*g,d*p);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Gs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Zn={DEG2RAD:Jo,RAD2DEG:sl,generateUUID:Qs,clamp:He,euclideanModulo:Hd,mapLinear:U1,inverseLerp:L1,lerp:$o,damp:N1,pingpong:O1,smoothstep:P1,smootherstep:z1,randInt:I1,randFloat:F1,randFloatSpread:B1,seededRandom:H1,degToRad:G1,radToDeg:V1,isPowerOfTwo:k1,ceilPowerOfTwo:X1,floorPowerOfTwo:q1,setQuaternionFromProperEuler:W1,normalize:ni,denormalize:Gs};class Oe{constructor(t=0,i=0){Oe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=He(this.x,t.x,i.x),this.y=He(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=He(this.x,t,i),this.y=He(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(He(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ll{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3],_=c[h+0],S=c[h+1],b=c[h+2],A=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d>=1){t[i+0]=_,t[i+1]=S,t[i+2]=b,t[i+3]=A;return}if(x!==A||m!==_||p!==S||g!==b){let M=m*_+p*S+g*b+x*A;M<0&&(_=-_,S=-S,b=-b,A=-A,M=-M);let v=1-d;if(M<.9995){const N=Math.acos(M),L=Math.sin(N);v=Math.sin(v*N)/L,d=Math.sin(d*N)/L,m=m*v+_*d,p=p*v+S*d,g=g*v+b*d,x=x*v+A*d}else{m=m*v+_*d,p=p*v+S*d,g=g*v+b*d,x=x*v+A*d;const N=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=N,p*=N,g*=N,x*=N}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=c[h],_=c[h+1],S=c[h+2],b=c[h+3];return t[i]=d*b+g*x+m*S-p*_,t[i+1]=m*b+g*_+p*x-d*S,t[i+2]=p*b+g*S+d*_-m*x,t[i+3]=g*b-d*x-m*_-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(c/2),_=m(r/2),S=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=_*g*x+p*S*b,this._y=p*S*x-_*g*b,this._z=p*g*b+_*S*x,this._w=p*g*x-_*S*b;break;case"YXZ":this._x=_*g*x+p*S*b,this._y=p*S*x-_*g*b,this._z=p*g*b-_*S*x,this._w=p*g*x+_*S*b;break;case"ZXY":this._x=_*g*x-p*S*b,this._y=p*S*x+_*g*b,this._z=p*g*b+_*S*x,this._w=p*g*x-_*S*b;break;case"ZYX":this._x=_*g*x-p*S*b,this._y=p*S*x+_*g*b,this._z=p*g*b-_*S*x,this._w=p*g*x+_*S*b;break;case"YZX":this._x=_*g*x+p*S*b,this._y=p*S*x+_*g*b,this._z=p*g*b-_*S*x,this._w=p*g*x-_*S*b;break;case"XZY":this._x=_*g*x-p*S*b,this._y=p*S*x-_*g*b,this._z=p*g*b+_*S*x,this._w=p*g*x+_*S*b;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],_=r+d+x;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class dt{constructor(t=0,i=0,r=0){dt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Wx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Wx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),x=2*(c*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-c*x,this.z=l+m*x+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=He(this.x,t.x,i.x),this.y=He(this.y,t.y,i.y),this.z=He(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=He(this.x,t,i),this.y=He(this.y,t,i),this.z=He(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(He(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new dt,Wx=new ll;class we{constructor(t,i,r,l,c,h,d,m,p){we.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],_=r[2],S=r[5],b=r[8],A=l[0],M=l[3],v=l[6],N=l[1],L=l[4],O=l[7],P=l[2],T=l[5],U=l[8];return c[0]=h*A+d*N+m*P,c[3]=h*M+d*L+m*T,c[6]=h*v+d*O+m*U,c[1]=p*A+g*N+x*P,c[4]=p*M+g*L+x*T,c[7]=p*v+g*O+x*U,c[2]=_*A+S*N+b*P,c[5]=_*M+S*L+b*T,c[8]=_*v+S*O+b*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,_=d*m-g*c,S=p*c-h*m,b=i*x+r*_+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=x*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*h)*A,t[3]=_*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=S*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ch.makeScale(t,i)),this}rotate(t){return this.premultiply(ch.makeRotation(-t)),this}translate(t,i){return this.premultiply(ch.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new we,Yx=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jx=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y1(){const s={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ln&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ln&&(l.r=ks(l.r),l.g=ks(l.g),l.b=ks(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===hr?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ys]:{primaries:t,whitePoint:r,transfer:Yc,toXYZ:Yx,fromXYZ:jx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:t,whitePoint:r,transfer:ln,toXYZ:Yx,fromXYZ:jx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),s}const Ze=Y1();function Pa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class j1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Rs===void 0&&(Rs=al("canvas")),Rs.width=t.width,Rs.height=t.height;const l=Rs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Rs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=al("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Pa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Pa(i[r]/255)*255):i[r]=Pa(i[r]);return{data:i,width:t.width,height:t.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Z1=0;class Gd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(uh(l[h].image)):c.push(uh(l[h]))}else c=uh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?j1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}let K1=0;const fh=new dt;class kn extends Ks{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=La,l=La,c=Ii,h=kr,d=ji,m=ra,p=kn.DEFAULT_ANISOTROPY,g=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Qs(),this.name="",this.source=new Gd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){Te(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Te(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qh:t.x=t.x-Math.floor(t.x);break;case La:t.x=t.x<0?0:1;break;case Jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qh:t.y=t.y-Math.floor(t.y);break;case La:t.y=t.y<0?0:1;break;case Jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Kg;kn.DEFAULT_ANISOTROPY=1;class pn{constructor(t=0,i=0,r=0,l=1){pn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],x=m[8],_=m[1],S=m[5],b=m[9],A=m[2],M=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,O=(S+1)/2,P=(v+1)/2,T=(g+_)/4,U=(x+A)/4,W=(b+M)/4;return L>O&&L>P?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=T/r,c=U/r):O>P?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=T/l,c=W/l):P<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),r=U/c,l=W/c),this.set(r,l,c,i),this}let N=Math.sqrt((M-b)*(M-b)+(x-A)*(x-A)+(_-g)*(_-g));return Math.abs(N)<.001&&(N=1),this.x=(M-b)/N,this.y=(x-A)/N,this.z=(_-g)/N,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=He(this.x,t.x,i.x),this.y=He(this.y,t.y,i.y),this.z=He(this.z,t.z,i.z),this.w=He(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=He(this.x,t,i),this.y=He(this.y,t,i),this.z=He(this.z,t,i),this.w=He(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(He(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Q1 extends Ks{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new pn(0,0,t,i),this.scissorTest=!1,this.viewport=new pn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new kn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Gd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends Q1{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class ov extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class J1 extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(t=new dt(1/0,1/0,1/0),i=new dt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Xi):Xi.fromBufferAttribute(c,h),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yc.copy(r.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xo),Sc.subVectors(this.max,Xo),Cs.subVectors(t.a,Xo),ws.subVectors(t.b,Xo),Ds.subVectors(t.c,Xo),sr.subVectors(ws,Cs),or.subVectors(Ds,ws),Or.subVectors(Cs,Ds);let i=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Or.z,Or.y,sr.z,0,-sr.x,or.z,0,-or.x,Or.z,0,-Or.x,-sr.y,sr.x,0,-or.y,or.x,0,-Or.y,Or.x,0];return!hh(i,Cs,ws,Ds,Sc)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,Cs,ws,Ds,Sc))?!1:(Mc.crossVectors(sr,or),i=[Mc.x,Mc.y,Mc.z],hh(i,Cs,ws,Ds,Sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ea=[new dt,new dt,new dt,new dt,new dt,new dt,new dt,new dt],Xi=new dt,yc=new cl,Cs=new dt,ws=new dt,Ds=new dt,sr=new dt,or=new dt,Or=new dt,Xo=new dt,Sc=new dt,Mc=new dt,Pr=new dt;function hh(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Pr.fromArray(s,c);const d=l.x*Math.abs(Pr.x)+l.y*Math.abs(Pr.y)+l.z*Math.abs(Pr.z),m=t.dot(Pr),p=i.dot(Pr),g=r.dot(Pr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const $1=new cl,qo=new dt,dh=new dt;class Kc{constructor(t=new dt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):$1.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(qo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(dh)),this.expandByPoint(qo.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ta=new dt,ph=new dt,bc=new dt,lr=new dt,mh=new dt,Ec=new dt,xh=new dt;class Vd{constructor(t=new dt,i=new dt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ph.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),lr.copy(this.origin).sub(ph);const c=t.distanceTo(i)*.5,h=-this.direction.dot(bc),d=lr.dot(this.direction),m=-lr.dot(bc),p=lr.lengthSq(),g=Math.abs(1-h*h);let x,_,S,b;if(g>0)if(x=h*m-d,_=h*d-m,b=c*g,x>=0)if(_>=-b)if(_<=b){const A=1/g;x*=A,_*=A,S=x*(x+h*_+2*d)+_*(h*x+_+2*m)+p}else _=c,x=Math.max(0,-(h*_+d)),S=-x*x+_*(_+2*m)+p;else _=-c,x=Math.max(0,-(h*_+d)),S=-x*x+_*(_+2*m)+p;else _<=-b?(x=Math.max(0,-(-h*c+d)),_=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+_*(_+2*m)+p):_<=b?(x=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(x=Math.max(0,-(h*c+d)),_=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+_*(_+2*m)+p);else _=h>0?-c:c,x=Math.max(0,-(h*_+d)),S=-x*x+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ph).addScaledVector(bc,_),S}intersectSphere(t,i){Ta.subVectors(t.center,this.origin);const r=Ta.dot(this.direction),l=Ta.dot(Ta)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(r=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(r=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,h=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,h=(t.min.y-_.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-_.z)*x,m=(t.max.z-_.z)*x):(d=(t.max.z-_.z)*x,m=(t.min.z-_.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ta)!==null}intersectTriangle(t,i,r,l,c){mh.subVectors(i,t),Ec.subVectors(r,t),xh.crossVectors(mh,Ec);let h=this.direction.dot(xh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;lr.subVectors(this.origin,t);const m=d*this.direction.dot(Ec.crossVectors(lr,Ec));if(m<0)return null;const p=d*this.direction.dot(mh.cross(lr));if(p<0||m+p>h)return null;const g=-d*lr.dot(xh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(t,i,r,l,c,h,d,m,p,g,x,_,S,b,A,M){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,x,_,S,b,A,M)}set(t,i,r,l,c,h,d,m,p,g,x,_,S,b,A,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=S,v[7]=b,v[11]=A,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Us.setFromMatrixColumn(t,0).length(),c=1/Us.setFromMatrixColumn(t,1).length(),h=1/Us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const _=h*g,S=h*x,b=d*g,A=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=S+b*p,i[5]=_-A*p,i[9]=-d*m,i[2]=A-_*p,i[6]=b+S*p,i[10]=h*m}else if(t.order==="YXZ"){const _=m*g,S=m*x,b=p*g,A=p*x;i[0]=_+A*d,i[4]=b*d-S,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=S*d-b,i[6]=A+_*d,i[10]=h*m}else if(t.order==="ZXY"){const _=m*g,S=m*x,b=p*g,A=p*x;i[0]=_-A*d,i[4]=-h*x,i[8]=b+S*d,i[1]=S+b*d,i[5]=h*g,i[9]=A-_*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const _=h*g,S=h*x,b=d*g,A=d*x;i[0]=m*g,i[4]=b*p-S,i[8]=_*p+A,i[1]=m*x,i[5]=A*p+_,i[9]=S*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,S=h*p,b=d*m,A=d*p;i[0]=m*g,i[4]=A-_*x,i[8]=b*x+S,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*x+b,i[10]=_-A*x}else if(t.order==="XZY"){const _=h*m,S=h*p,b=d*m,A=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=_*x+A,i[5]=h*g,i[9]=S*x-b,i[2]=b*x-S,i[6]=d*g,i[10]=A*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tS,t,eS)}lookAt(t,i,r){const l=this.elements;return Si.subVectors(t,i),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),cr.crossVectors(r,Si),cr.lengthSq()===0&&(Math.abs(r.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),cr.crossVectors(r,Si)),cr.normalize(),Tc.crossVectors(Si,cr),l[0]=cr.x,l[4]=Tc.x,l[8]=Si.x,l[1]=cr.y,l[5]=Tc.y,l[9]=Si.y,l[2]=cr.z,l[6]=Tc.z,l[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],_=r[9],S=r[13],b=r[2],A=r[6],M=r[10],v=r[14],N=r[3],L=r[7],O=r[11],P=r[15],T=l[0],U=l[4],W=l[8],w=l[12],C=l[1],H=l[5],q=l[9],it=l[13],ht=l[2],ot=l[6],F=l[10],j=l[14],Z=l[3],yt=l[7],Mt=l[11],I=l[15];return c[0]=h*T+d*C+m*ht+p*Z,c[4]=h*U+d*H+m*ot+p*yt,c[8]=h*W+d*q+m*F+p*Mt,c[12]=h*w+d*it+m*j+p*I,c[1]=g*T+x*C+_*ht+S*Z,c[5]=g*U+x*H+_*ot+S*yt,c[9]=g*W+x*q+_*F+S*Mt,c[13]=g*w+x*it+_*j+S*I,c[2]=b*T+A*C+M*ht+v*Z,c[6]=b*U+A*H+M*ot+v*yt,c[10]=b*W+A*q+M*F+v*Mt,c[14]=b*w+A*it+M*j+v*I,c[3]=N*T+L*C+O*ht+P*Z,c[7]=N*U+L*H+O*ot+P*yt,c[11]=N*W+L*q+O*F+P*Mt,c[15]=N*w+L*it+O*j+P*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],_=t[10],S=t[14],b=t[3],A=t[7],M=t[11],v=t[15];return b*(+c*m*x-l*p*x-c*d*_+r*p*_+l*d*S-r*m*S)+A*(+i*m*S-i*p*_+c*h*_-l*h*S+l*p*g-c*m*g)+M*(+i*p*x-i*d*S-c*h*x+r*h*S+c*d*g-r*p*g)+v*(-l*d*g-i*m*x+i*d*_+l*h*x-r*h*_+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],_=t[10],S=t[11],b=t[12],A=t[13],M=t[14],v=t[15],N=x*M*p-A*_*p+A*m*S-d*M*S-x*m*v+d*_*v,L=b*_*p-g*M*p-b*m*S+h*M*S+g*m*v-h*_*v,O=g*A*p-b*x*p+b*d*S-h*A*S-g*d*v+h*x*v,P=b*x*m-g*A*m-b*d*_+h*A*_+g*d*M-h*x*M,T=i*N+r*L+l*O+c*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/T;return t[0]=N*U,t[1]=(A*_*c-x*M*c-A*l*S+r*M*S+x*l*v-r*_*v)*U,t[2]=(d*M*c-A*m*c+A*l*p-r*M*p-d*l*v+r*m*v)*U,t[3]=(x*m*c-d*_*c-x*l*p+r*_*p+d*l*S-r*m*S)*U,t[4]=L*U,t[5]=(g*M*c-b*_*c+b*l*S-i*M*S-g*l*v+i*_*v)*U,t[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*v-i*m*v)*U,t[7]=(h*_*c-g*m*c+g*l*p-i*_*p-h*l*S+i*m*S)*U,t[8]=O*U,t[9]=(b*x*c-g*A*c-b*r*S+i*A*S+g*r*v-i*x*v)*U,t[10]=(h*A*c-b*d*c+b*r*p-i*A*p-h*r*v+i*d*v)*U,t[11]=(g*d*c-h*x*c-g*r*p+i*x*p+h*r*S-i*d*S)*U,t[12]=P*U,t[13]=(g*A*l-b*x*l+b*r*_-i*A*_-g*r*M+i*x*M)*U,t[14]=(b*d*l-h*A*l-b*r*m+i*A*m+h*r*M-i*d*M)*U,t[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*_+i*d*_)*U,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,x=d+d,_=c*p,S=c*g,b=c*x,A=h*g,M=h*x,v=d*x,N=m*p,L=m*g,O=m*x,P=r.x,T=r.y,U=r.z;return l[0]=(1-(A+v))*P,l[1]=(S+O)*P,l[2]=(b-L)*P,l[3]=0,l[4]=(S-O)*T,l[5]=(1-(_+v))*T,l[6]=(M+N)*T,l[7]=0,l[8]=(b+L)*U,l[9]=(M-N)*U,l[10]=(1-(_+A))*U,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Us.set(l[0],l[1],l[2]).length();const h=Us.set(l[4],l[5],l[6]).length(),d=Us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],qi.copy(this);const p=1/c,g=1/h,x=1/d;return qi.elements[0]*=p,qi.elements[1]*=p,qi.elements[2]*=p,qi.elements[4]*=g,qi.elements[5]*=g,qi.elements[6]*=g,qi.elements[8]*=x,qi.elements[9]*=x,qi.elements[10]*=x,i.setFromRotationMatrix(qi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=ia,m=!1){const p=this.elements,g=2*c/(i-t),x=2*c/(r-l),_=(i+t)/(i-t),S=(r+l)/(r-l);let b,A;if(m)b=c/(h-c),A=h*c/(h-c);else if(d===ia)b=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===jc)b=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=ia,m=!1){const p=this.elements,g=2/(i-t),x=2/(r-l),_=-(i+t)/(i-t),S=-(r+l)/(r-l);let b,A;if(m)b=1/(h-c),A=h/(h-c);else if(d===ia)b=-2/(h-c),A=-(h+c)/(h-c);else if(d===jc)b=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Us=new dt,qi=new mn,tS=new dt(0,0,0),eS=new dt(1,1,1),cr=new dt,Tc=new dt,Si=new dt,Zx=new mn,Kx=new ll;class sa{constructor(t=0,i=0,r=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-He(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(He(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-He(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(He(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Zx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Kx.setFromEuler(this),this.setFromQuaternion(Kx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class kd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nS=0;const Qx=new dt,Ls=new ll,Aa=new mn,Ac=new dt,Wo=new dt,iS=new dt,aS=new ll,Jx=new dt(1,0,0),$x=new dt(0,1,0),tg=new dt(0,0,1),eg={type:"added"},rS={type:"removed"},Ns={type:"childadded",child:null},gh={type:"childremoved",child:null};class In extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new dt,i=new sa,r=new ll,l=new dt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new we}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ls.setFromAxisAngle(t,i),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,i){return Ls.setFromAxisAngle(t,i),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Jx,t)}rotateY(t){return this.rotateOnAxis($x,t)}rotateZ(t){return this.rotateOnAxis(tg,t)}translateOnAxis(t,i){return Qx.copy(t).applyQuaternion(this.quaternion),this.position.add(Qx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Jx,t)}translateY(t){return this.translateOnAxis($x,t)}translateZ(t){return this.translateOnAxis(tg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ac.copy(t):Ac.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(Wo,Ac,this.up):Aa.lookAt(Ac,Wo,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Ls.setFromRotationMatrix(Aa),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(yn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eg),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):yn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(rS),gh.child=t,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eg),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,iS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,aS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),_=h(t.skeletons),S=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}In.DEFAULT_UP=new dt(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new dt,Ra=new dt,vh=new dt,Ca=new dt,Os=new dt,Ps=new dt,ng=new dt,_h=new dt,yh=new dt,Sh=new dt,Mh=new pn,bh=new pn,Eh=new pn;class Yi{constructor(t=new dt,i=new dt,r=new dt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Wi.subVectors(t,i),l.cross(Wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Wi.subVectors(l,i),Ra.subVectors(r,i),vh.subVectors(t,i);const h=Wi.dot(Wi),d=Wi.dot(Ra),m=Wi.dot(vh),p=Ra.dot(Ra),g=Ra.dot(vh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const _=1/x,S=(p*m-d*g)*_,b=(h*g-d*m)*_;return c.set(1-S-b,b,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(h,Ca.y),m.addScaledVector(d,Ca.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Mh.setScalar(0),bh.setScalar(0),Eh.setScalar(0),Mh.fromBufferAttribute(t,i),bh.fromBufferAttribute(t,r),Eh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Mh,c.x),h.addScaledVector(bh,c.y),h.addScaledVector(Eh,c.z),h}static isFrontFacing(t,i,r,l){return Wi.subVectors(r,i),Ra.subVectors(t,i),Wi.cross(Ra).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Wi.cross(Ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;Os.subVectors(l,r),Ps.subVectors(c,r),_h.subVectors(t,r);const m=Os.dot(_h),p=Ps.dot(_h);if(m<=0&&p<=0)return i.copy(r);yh.subVectors(t,l);const g=Os.dot(yh),x=Ps.dot(yh);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*p;if(_<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(Os,h);Sh.subVectors(t,c);const S=Os.dot(Sh),b=Ps.dot(Sh);if(b>=0&&S<=b)return i.copy(c);const A=S*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(Ps,d);const M=g*b-S*x;if(M<=0&&x-g>=0&&S-b>=0)return ng.subVectors(c,l),d=(x-g)/(x-g+(S-b)),i.copy(l).addScaledVector(ng,d);const v=1/(M+A+_);return h=A*v,d=_*v,i.copy(r).addScaledVector(Os,h).addScaledVector(Ps,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Th(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class We{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ze.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ze.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ze.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ze.workingColorSpace){if(t=Hd(t,1),i=He(i,0,1),r=He(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Th(h,c,t+1/3),this.g=Th(h,c,t),this.b=Th(h,c,t-1/3)}return Ze.colorSpaceToWorking(this,l),this}setStyle(t,i=Pi){function r(c){c!==void 0&&parseFloat(c)<1&&Te("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Te("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);Te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Pi){const r=lv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):Te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pi){return Ze.workingToColorSpace(jn.copy(this),t),Math.round(He(jn.r*255,0,255))*65536+Math.round(He(jn.g*255,0,255))*256+Math.round(He(jn.b*255,0,255))}getHexString(t=Pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ze.workingColorSpace){Ze.workingToColorSpace(jn.copy(this),i);const r=jn.r,l=jn.g,c=jn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ze.workingColorSpace){return Ze.workingToColorSpace(jn.copy(this),i),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=Pi){Ze.workingToColorSpace(jn.copy(this),t);const i=jn.r,r=jn.g,l=jn.b;return t!==Pi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+i,ur.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ur),t.getHSL(Rc);const r=$o(ur.h,Rc.h,i),l=$o(ur.s,Rc.s,i),c=$o(ur.l,Rc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new We;We.NAMES=lv;let sS=0;class Js extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Vs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){Te(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Te(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Hh&&(r.blendSrc=this.blendSrc),this.blendDst!==Gh&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xd extends Js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wn=new dt,Cc=new Oe;let oS=0;class aa{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Gx,this.updateRanges=[],this.gpuType=Na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(t),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix3(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Gs(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=ni(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Gs(i,this.array)),i}setX(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Gs(i,this.array)),i}setY(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Gs(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Gs(i,this.array)),i}setW(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array),l=ni(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array),l=ni(l,this.array),c=ni(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gx&&(t.usage=this.usage),t}}class cv extends aa{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class uv extends aa{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Kn extends aa{constructor(t,i,r){super(new Float32Array(t),i,r)}}let lS=0;const Oi=new mn,Ah=new In,zs=new dt,Mi=new cl,Yo=new cl,Pn=new dt;class Fi extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sv(t)?uv:cv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new we().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,i,r){return Oi.makeTranslation(t,i,r),this.applyMatrix4(Oi),this}scale(t,i,r){return Oi.makeScale(t,i,r),this.applyMatrix4(Oi),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Kn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){yn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new dt(-1/0,-1/0,-1/0),new dt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){yn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new dt,1/0);return}if(t){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Yo.setFromBufferAttribute(d),this.morphTargetsRelative?(Pn.addVectors(Mi.min,Yo.min),Mi.expandByPoint(Pn),Pn.addVectors(Mi.max,Yo.max),Mi.expandByPoint(Pn)):(Mi.expandByPoint(Yo.min),Mi.expandByPoint(Yo.max))}Mi.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)Pn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Pn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Pn.fromBufferAttribute(d,p),m&&(zs.fromBufferAttribute(t,p),Pn.add(zs)),l=Math.max(l,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&yn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){yn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new aa(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new dt,m[W]=new dt;const p=new dt,g=new dt,x=new dt,_=new Oe,S=new Oe,b=new Oe,A=new dt,M=new dt;function v(W,w,C){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,w),x.fromBufferAttribute(r,C),_.fromBufferAttribute(c,W),S.fromBufferAttribute(c,w),b.fromBufferAttribute(c,C),g.sub(p),x.sub(p),S.sub(_),b.sub(_);const H=1/(S.x*b.y-b.x*S.y);isFinite(H)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(x,-S.y).multiplyScalar(H),M.copy(x).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(H),d[W].add(A),d[w].add(A),d[C].add(A),m[W].add(M),m[w].add(M),m[C].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let W=0,w=N.length;W<w;++W){const C=N[W],H=C.start,q=C.count;for(let it=H,ht=H+q;it<ht;it+=3)v(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const L=new dt,O=new dt,P=new dt,T=new dt;function U(W){P.fromBufferAttribute(l,W),T.copy(P);const w=d[W];L.copy(w),L.sub(P.multiplyScalar(P.dot(w))).normalize(),O.crossVectors(T,w);const H=O.dot(m[W])<0?-1:1;h.setXYZW(W,L.x,L.y,L.z,H)}for(let W=0,w=N.length;W<w;++W){const C=N[W],H=C.start,q=C.count;for(let it=H,ht=H+q;it<ht;it+=3)U(t.getX(it+0)),U(t.getX(it+1)),U(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new aa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const l=new dt,c=new dt,h=new dt,d=new dt,m=new dt,p=new dt,g=new dt,x=new dt;if(t)for(let _=0,S=t.count;_<S;_+=3){const b=t.getX(_+0),A=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Pn.fromBufferAttribute(t,i),Pn.normalize(),t.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,_=new p.constructor(m.length*g);let S=0,b=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?S=m[A]*d.data.stride+d.offset:S=m[A]*g;for(let v=0;v<g;v++)_[b++]=p[S++]}return new aa(_,g,x)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,x=p.length;g<x;g++){const _=p[g],S=t(_,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,_=p.length;x<_;x++){const S=p[x];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],x=c[p];for(let _=0,S=x.length;_<S;_++)g.push(x[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ig=new mn,zr=new Vd,wc=new Kc,ag=new dt,Dc=new dt,Uc=new dt,Lc=new dt,Rh=new dt,Nc=new dt,rg=new dt,Oc=new dt;class bi extends In{constructor(t=new Fi,i=new Xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],x=c[m];g!==0&&(Rh.fromBufferAttribute(x,t),h?Nc.addScaledVector(Rh,g):Nc.addScaledVector(Rh.sub(i),g))}i.add(Nc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(c),zr.copy(t.ray).recast(t.near),!(wc.containsPoint(zr.origin)===!1&&(zr.intersectSphere(wc,ag)===null||zr.origin.distanceToSquared(ag)>(t.far-t.near)**2))&&(ig.copy(c).invert(),zr.copy(t.ray).applyMatrix4(ig),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,zr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=_.length;b<A;b++){const M=_[b],v=h[M.materialIndex],N=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let O=N,P=L;O<P;O+=3){const T=d.getX(O),U=d.getX(O+1),W=d.getX(O+2);l=Pc(this,v,t,r,p,g,x,T,U,W),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=b,v=A;M<v;M+=3){const N=d.getX(M),L=d.getX(M+1),O=d.getX(M+2);l=Pc(this,h,t,r,p,g,x,N,L,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=_.length;b<A;b++){const M=_[b],v=h[M.materialIndex],N=Math.max(M.start,S.start),L=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let O=N,P=L;O<P;O+=3){const T=O,U=O+1,W=O+2;l=Pc(this,v,t,r,p,g,x,T,U,W),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let M=b,v=A;M<v;M+=3){const N=M,L=M+1,O=M+2;l=Pc(this,h,t,r,p,g,x,N,L,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function cS(s,t,i,r,l,c,h,d){let m;if(t.side===di?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===mr,d),m===null)return null;Oc.copy(d),Oc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Oc);return p<i.near||p>i.far?null:{distance:p,point:Oc.clone(),object:s}}function Pc(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,Dc),s.getVertexPosition(m,Uc),s.getVertexPosition(p,Lc);const g=cS(s,t,i,r,Dc,Uc,Lc,rg);if(g){const x=new dt;Yi.getBarycoord(rg,Dc,Uc,Lc,x),l&&(g.uv=Yi.getInterpolatedAttribute(l,d,m,p,x,new Oe)),c&&(g.uv1=Yi.getInterpolatedAttribute(c,d,m,p,x,new Oe)),h&&(g.normal=Yi.getInterpolatedAttribute(h,d,m,p,x,new dt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new dt,materialIndex:0};Yi.getNormal(Dc,Uc,Lc,_.normal),g.face=_,g.barycoord=x}return g}class ul extends Fi{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],x=[];let _=0,S=0;b("z","y","x",-1,-1,r,i,t,h,c,0),b("z","y","x",1,-1,r,i,-t,h,c,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Kn(p,3)),this.setAttribute("normal",new Kn(g,3)),this.setAttribute("uv",new Kn(x,2));function b(A,M,v,N,L,O,P,T,U,W,w){const C=O/U,H=P/W,q=O/2,it=P/2,ht=T/2,ot=U+1,F=W+1;let j=0,Z=0;const yt=new dt;for(let Mt=0;Mt<F;Mt++){const I=Mt*H-it;for(let rt=0;rt<ot;rt++){const tt=rt*C-q;yt[A]=tt*N,yt[M]=I*L,yt[v]=ht,p.push(yt.x,yt.y,yt.z),yt[A]=0,yt[M]=0,yt[v]=T>0?1:-1,g.push(yt.x,yt.y,yt.z),x.push(rt/U),x.push(1-Mt/W),j+=1}}for(let Mt=0;Mt<W;Mt++)for(let I=0;I<U;I++){const rt=_+I+ot*Mt,tt=_+I+ot*(Mt+1),St=_+(I+1)+ot*(Mt+1),It=_+(I+1)+ot*Mt;m.push(rt,tt,It),m.push(tt,St,It),Z+=6}d.addGroup(S,Z,w),S+=Z,_+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function ii(s){const t={};for(let i=0;i<s.length;i++){const r=js(s[i]);for(const l in r)t[l]=r[l]}return t}function uS(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function fv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ze.workingColorSpace}const fS={clone:js,merge:ii};var hS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hS,this.fragmentShader=dS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=uS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class hv extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new dt,sg=new Oe,og=new Oe;class zi extends hv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-t/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-t/fr.z)}getViewSize(t,i){return this.getViewBounds(t,sg,og),i.subVectors(og,sg)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Jo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Is=-90,Fs=1;class pS extends In{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new zi(Is,Fs,t,i);l.layers=this.layers,this.add(l);const c=new zi(Is,Fs,t,i);c.layers=this.layers,this.add(c);const h=new zi(Is,Fs,t,i);h.layers=this.layers,this.add(h);const d=new zi(Is,Fs,t,i);d.layers=this.layers,this.add(d);const m=new zi(Is,Fs,t,i);m.layers=this.layers,this.add(m);const p=new zi(Is,Fs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,x=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,_,S),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class dv extends kn{constructor(t=[],i=qs,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mS extends Wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new dv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ul(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:di,blending:Oa});c.uniforms.tEquirect.value=i;const h=new bi(l,c),d=i.minFilter;return i.minFilter===kr&&(i.minFilter=Ii),new pS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class zc extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new dt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new dt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new dt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new dt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,r),v=this._getHandJoint(p,A);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),S=.02,b=.005;p.inputState.pinching&&_>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new zc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class gS extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class vS extends kn{constructor(t=null,i=1,r=1,l,c,h,d,m,p=Ei,g=Ei,x,_){super(null,h,d,m,p,g,l,c,x,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wh=new dt,_S=new dt,yS=new we;class Hr{constructor(t=new dt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=wh.subVectors(r,i).cross(_S.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(wh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||yS.getNormalMatrix(t),l=this.coplanarPoint(wh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Kc,SS=new Oe(.5,.5),Ic=new dt;class qd{constructor(t=new Hr,i=new Hr,r=new Hr,l=new Hr,c=new Hr,h=new Hr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ia,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],x=c[5],_=c[6],S=c[7],b=c[8],A=c[9],M=c[10],v=c[11],N=c[12],L=c[13],O=c[14],P=c[15];if(l[0].setComponents(p-h,S-g,v-b,P-N).normalize(),l[1].setComponents(p+h,S+g,v+b,P+N).normalize(),l[2].setComponents(p+d,S+x,v+A,P+L).normalize(),l[3].setComponents(p-d,S-x,v-A,P-L).normalize(),r)l[4].setComponents(m,_,M,O).normalize(),l[5].setComponents(p-m,S-_,v-M,P-O).normalize();else if(l[4].setComponents(p-m,S-_,v-M,P-O).normalize(),i===ia)l[5].setComponents(p+m,S+_,v+M,P+O).normalize();else if(i===jc)l[5].setComponents(m,_,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(t){Ir.center.set(0,0,0);const i=SS.distanceTo(t.center);return Ir.radius=.7071067811865476+i,Ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ic.x=l.normal.x>0?t.max.x:t.min.x,Ic.y=l.normal.y>0?t.max.y:t.min.y,Ic.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class MS extends Js{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lg=new mn,Rd=new Vd,Fc=new Kc,Bc=new dt;class cg extends In{constructor(t=new Fi,i=new MS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fc.copy(r.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,t.ray.intersectsSphere(Fc)===!1)return;lg.copy(l).invert(),Rd.copy(t.ray).applyMatrix4(lg);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,x=r.attributes.position;if(p!==null){const _=Math.max(0,h.start),S=Math.min(p.count,h.start+h.count);for(let b=_,A=S;b<A;b++){const M=p.getX(b);Bc.fromBufferAttribute(x,M),ug(Bc,M,m,l,t,i,this)}}else{const _=Math.max(0,h.start),S=Math.min(x.count,h.start+h.count);for(let b=_,A=S;b<A;b++)Bc.fromBufferAttribute(x,b),ug(Bc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function ug(s,t,i,r,l,c,h){const d=Rd.distanceSqToPoint(s);if(d<i){const m=new dt;Rd.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class jo extends kn{constructor(t,i,r,l,c,h,d,m,p){super(t,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pv extends kn{constructor(t,i,r=qr,l,c,h,d=Ei,m=Ei,p,g=nl,x=1){if(g!==nl&&g!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:x};super(_,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class mv extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xr extends Fi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,_=i/m,S=[],b=[],A=[],M=[];for(let v=0;v<g;v++){const N=v*_-h;for(let L=0;L<p;L++){const O=L*x-c;b.push(O,-N,0),A.push(0,0,1),M.push(L/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<d;N++){const L=N+p*v,O=N+p*(v+1),P=N+1+p*(v+1),T=N+1+p*v;S.push(L,O,T),S.push(O,P,T)}this.setIndex(S),this.setAttribute("position",new Kn(b,3)),this.setAttribute("normal",new Kn(A,3)),this.setAttribute("uv",new Kn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wd extends Fi{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],x=new dt,_=new dt,S=[],b=[],A=[],M=[];for(let v=0;v<=r;v++){const N=[],L=v/r;let O=0;v===0&&h===0?O=.5/i:v===r&&m===Math.PI&&(O=-.5/i);for(let P=0;P<=i;P++){const T=P/i;x.x=-t*Math.cos(l+T*c)*Math.sin(h+L*d),x.y=t*Math.cos(h+L*d),x.z=t*Math.sin(l+T*c)*Math.sin(h+L*d),b.push(x.x,x.y,x.z),_.copy(x).normalize(),A.push(_.x,_.y,_.z),M.push(T+O,1-L),N.push(p++)}g.push(N)}for(let v=0;v<r;v++)for(let N=0;N<i;N++){const L=g[v][N+1],O=g[v][N],P=g[v+1][N],T=g[v+1][N+1];(v!==0||h>0)&&S.push(L,O,T),(v!==r-1||m<Math.PI)&&S.push(O,P,T)}this.setIndex(S),this.setAttribute("position",new Kn(b,3)),this.setAttribute("normal",new Kn(A,3)),this.setAttribute("uv",new Kn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bS extends Js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=av,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ES extends Js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class TS extends Js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dh={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class AS{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=p.length;x<_;x+=2){const S=p[x],b=p[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const RS=new AS;class Yd{constructor(t){this.manager=t!==void 0?t:RS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Yd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bs=new WeakMap;class CS extends Yd{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=Dh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let x=Bs.get(h);x===void 0&&(x=[],Bs.set(h,x)),x.push({onLoad:i,onError:l})}return h}const d=al("img");function m(){g(),i&&i(this);const x=Bs.get(this)||[];for(let _=0;_<x.length;_++){const S=x[_];S.onLoad&&S.onLoad(this)}Bs.delete(this),c.manager.itemEnd(t)}function p(x){g(),l&&l(x),Dh.remove(`image:${t}`);const _=Bs.get(this)||[];for(let S=0;S<_.length;S++){const b=_[S];b.onError&&b.onError(x)}Bs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Dh.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class wS extends Yd{constructor(t){super(t)}load(t,i,r,l){const c=new kn,h=new CS(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class xv extends In{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new We(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class DS extends xv{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Uh=new mn,fg=new dt,hg=new dt;class US{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=ra,this.map=null,this.mapPass=null,this.matrix=new mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;fg.setFromMatrixPosition(t.matrixWorld),i.position.copy(fg),hg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(hg),i.updateMatrixWorld(),Uh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gv extends hv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class LS extends US{constructor(){super(new gv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class NS extends xv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new LS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class OS extends zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const dg=new mn;class PS{constructor(t,i,r=0,l=1/0){this.ray=new Vd(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new kd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):yn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return dg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dg),this}intersectObject(t,i=!0,r=[]){return Cd(t,this,r,i),r.sort(pg),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Cd(t[l],this,r,i);return r.sort(pg),r}}function pg(s,t){return s.distance-t.distance}function Cd(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,d=c.length;h<d;h++)Cd(c[h],t,i,!0)}}function mg(s,t,i,r){const l=zS(r);switch(i){case ev:return s*t;case iv:return s*t/l.components*l.byteLength;case zd:return s*t/l.components*l.byteLength;case Id:return s*t*2/l.components*l.byteLength;case Fd:return s*t*2/l.components*l.byteLength;case nv:return s*t*3/l.components*l.byteLength;case ji:return s*t*4/l.components*l.byteLength;case Bd:return s*t*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xc:case qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case td:case nd:return Math.max(s,16)*Math.max(t,8)/4;case $h:case ed:return Math.max(s,8)*Math.max(t,8)/2;case id:case ad:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case rd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case od:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ld:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case cd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ud:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case pd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case md:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case xd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case yd:case Sd:case Md:return Math.ceil(s/4)*Math.ceil(t/4)*16;case bd:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Td:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zS(s){switch(s){case ra:case Qg:return{byteLength:1,components:1};case tl:case Jg:case Zs:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case qr:case Nd:case Na:return{byteLength:4,components:1};case $g:case tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vv(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function IS(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((S,b)=>S.start-b.start);let _=0;for(let S=1;S<x.length;S++){const b=x[_],A=x[S];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++_,x[_]=A)}x.length=_+1;for(let S=0,b=x.length;S<b;S++){const A=x[S];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var FS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BS=`#ifdef USE_ALPHAHASH
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
#endif`,HS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
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
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WS=`#ifdef USE_BATCHING
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
#endif`,YS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QS=`#ifdef USE_IRIDESCENCE
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
#endif`,JS=`#ifdef USE_BUMPMAP
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
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oM=`#define PI 3.141592653589793
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
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TM=`#ifdef USE_GRADIENTMAP
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
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
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
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PM=`PhysicalMaterial material;
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
#endif`,zM=`uniform sampler2D dfgLUT;
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
}`,IM=`
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YM=`#if defined( USE_POINTS_UV )
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
#endif`,jM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
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
#endif`,tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sb=`#ifdef USE_NORMALMAP
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
#endif`,ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mb=`float getShadowMask() {
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
}`,bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eb=`#ifdef USE_SKINNING
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
#endif`,Tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ab=`#ifdef USE_SKINNING
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
#endif`,Rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Db=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ub=`#ifdef USE_TRANSMISSION
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
#endif`,Lb=`#ifdef USE_TRANSMISSION
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fb=`uniform sampler2D t2D;
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
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`#include <common>
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
}`,Xb=`#if DEPTH_PACKING == 3200
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
}`,qb=`#define DISTANCE
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
}`,Wb=`#define DISTANCE
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`uniform float scale;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,Qb=`#include <common>
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
}`,Jb=`uniform vec3 diffuse;
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
}`,$b=`#define LAMBERT
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
}`,t3=`#define LAMBERT
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
}`,e3=`#define MATCAP
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
}`,n3=`#define MATCAP
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
}`,i3=`#define NORMAL
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
}`,a3=`#define NORMAL
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
}`,r3=`#define PHONG
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
}`,s3=`#define PHONG
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
}`,o3=`#define STANDARD
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
}`,l3=`#define STANDARD
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
}`,c3=`#define TOON
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
}`,u3=`#define TOON
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
}`,f3=`uniform float size;
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
}`,h3=`uniform vec3 diffuse;
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
}`,d3=`#include <common>
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
}`,p3=`uniform vec3 color;
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
}`,m3=`uniform float rotation;
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
}`,x3=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:FS,alphahash_pars_fragment:BS,alphamap_fragment:HS,alphamap_pars_fragment:GS,alphatest_fragment:VS,alphatest_pars_fragment:kS,aomap_fragment:XS,aomap_pars_fragment:qS,batching_pars_vertex:WS,batching_vertex:YS,begin_vertex:jS,beginnormal_vertex:ZS,bsdfs:KS,iridescence_fragment:QS,bumpmap_pars_fragment:JS,clipping_planes_fragment:$S,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:eM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:aM,color_pars_vertex:rM,color_vertex:sM,common:oM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:fM,emissivemap_fragment:hM,emissivemap_pars_fragment:dM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:xM,envmap_common_pars_fragment:gM,envmap_pars_fragment:vM,envmap_pars_vertex:_M,envmap_physical_pars_fragment:DM,envmap_vertex:yM,fog_vertex:SM,fog_pars_vertex:MM,fog_fragment:bM,fog_pars_fragment:EM,gradientmap_pars_fragment:TM,lightmap_pars_fragment:AM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:CM,lights_pars_begin:wM,lights_toon_fragment:UM,lights_toon_pars_fragment:LM,lights_phong_fragment:NM,lights_phong_pars_fragment:OM,lights_physical_fragment:PM,lights_physical_pars_fragment:zM,lights_fragment_begin:IM,lights_fragment_maps:FM,lights_fragment_end:BM,logdepthbuf_fragment:HM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:VM,logdepthbuf_vertex:kM,map_fragment:XM,map_pars_fragment:qM,map_particle_fragment:WM,map_particle_pars_fragment:YM,metalnessmap_fragment:jM,metalnessmap_pars_fragment:ZM,morphinstance_vertex:KM,morphcolor_vertex:QM,morphnormal_vertex:JM,morphtarget_pars_vertex:$M,morphtarget_vertex:tb,normal_fragment_begin:eb,normal_fragment_maps:nb,normal_pars_fragment:ib,normal_pars_vertex:ab,normal_vertex:rb,normalmap_pars_fragment:sb,clearcoat_normal_fragment_begin:ob,clearcoat_normal_fragment_maps:lb,clearcoat_pars_fragment:cb,iridescence_pars_fragment:ub,opaque_fragment:fb,packing:hb,premultiplied_alpha_fragment:db,project_vertex:pb,dithering_fragment:mb,dithering_pars_fragment:xb,roughnessmap_fragment:gb,roughnessmap_pars_fragment:vb,shadowmap_pars_fragment:_b,shadowmap_pars_vertex:yb,shadowmap_vertex:Sb,shadowmask_pars_fragment:Mb,skinbase_vertex:bb,skinning_pars_vertex:Eb,skinning_vertex:Tb,skinnormal_vertex:Ab,specularmap_fragment:Rb,specularmap_pars_fragment:Cb,tonemapping_fragment:wb,tonemapping_pars_fragment:Db,transmission_fragment:Ub,transmission_pars_fragment:Lb,uv_pars_fragment:Nb,uv_pars_vertex:Ob,uv_vertex:Pb,worldpos_vertex:zb,background_vert:Ib,background_frag:Fb,backgroundCube_vert:Bb,backgroundCube_frag:Hb,cube_vert:Gb,cube_frag:Vb,depth_vert:kb,depth_frag:Xb,distanceRGBA_vert:qb,distanceRGBA_frag:Wb,equirect_vert:Yb,equirect_frag:jb,linedashed_vert:Zb,linedashed_frag:Kb,meshbasic_vert:Qb,meshbasic_frag:Jb,meshlambert_vert:$b,meshlambert_frag:t3,meshmatcap_vert:e3,meshmatcap_frag:n3,meshnormal_vert:i3,meshnormal_frag:a3,meshphong_vert:r3,meshphong_frag:s3,meshphysical_vert:o3,meshphysical_frag:l3,meshtoon_vert:c3,meshtoon_frag:u3,points_vert:f3,points_frag:h3,shadow_vert:d3,shadow_frag:p3,sprite_vert:m3,sprite_frag:x3},Zt={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},ea={basic:{uniforms:ii([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ii([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new We(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ii([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ii([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ii([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new We(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ii([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ii([Zt.points,Zt.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ii([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ii([Zt.common,Zt.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ii([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ii([Zt.sprite,Zt.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ii([Zt.common,Zt.displacementmap,{referencePosition:{value:new dt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ii([Zt.lights,Zt.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};ea.physical={uniforms:ii([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Hc={r:0,b:0,g:0},Fr=new sa,g3=new mn;function v3(s,t,i,r,l,c,h){const d=new We(0);let m=c===!0?0:1,p,g,x=null,_=0,S=null;function b(L){let O=L.isScene===!0?L.background:null;return O&&O.isTexture&&(O=(L.backgroundBlurriness>0?i:t).get(O)),O}function A(L){let O=!1;const P=b(L);P===null?v(d,m):P&&P.isColor&&(v(P,1),O=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?r.buffers.color.setClear(0,0,0,1,h):T==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,O){const P=b(O);P&&(P.isCubeTexture||P.mapping===Zc)?(g===void 0&&(g=new bi(new ul(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:js(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(T,U,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Fr.copy(O.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(g3.makeRotationFromEuler(Fr)),g.material.toneMapped=Ze.getTransfer(P.colorSpace)!==ln,(x!==P||_!==P.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=P,_=P.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new bi(new Xr(2,2),new Zi({name:"BackgroundMaterial",uniforms:js(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Ze.getTransfer(P.colorSpace)!==ln,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||_!==P.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,x=P,_=P.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,O){L.getRGB(Hc,fv(s)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,O,h)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,O=1){d.set(L),m=O,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:A,addToRenderList:M,dispose:N}}function _3(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,h=!1;function d(C,H,q,it,ht){let ot=!1;const F=x(it,q,H);c!==F&&(c=F,p(c.object)),ot=S(C,it,q,ht),ot&&b(C,it,q,ht),ht!==null&&t.update(ht,s.ELEMENT_ARRAY_BUFFER),(ot||h)&&(h=!1,O(C,H,q,it),ht!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,H,q){const it=q.wireframe===!0;let ht=r[C.id];ht===void 0&&(ht={},r[C.id]=ht);let ot=ht[H.id];ot===void 0&&(ot={},ht[H.id]=ot);let F=ot[it];return F===void 0&&(F=_(m()),ot[it]=F),F}function _(C){const H=[],q=[],it=[];for(let ht=0;ht<i;ht++)H[ht]=0,q[ht]=0,it[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:it,object:C,attributes:{},index:null}}function S(C,H,q,it){const ht=c.attributes,ot=H.attributes;let F=0;const j=q.getAttributes();for(const Z in j)if(j[Z].location>=0){const Mt=ht[Z];let I=ot[Z];if(I===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),Mt===void 0||Mt.attribute!==I||I&&Mt.data!==I.data)return!0;F++}return c.attributesNum!==F||c.index!==it}function b(C,H,q,it){const ht={},ot=H.attributes;let F=0;const j=q.getAttributes();for(const Z in j)if(j[Z].location>=0){let Mt=ot[Z];Mt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor));const I={};I.attribute=Mt,Mt&&Mt.data&&(I.data=Mt.data),ht[Z]=I,F++}c.attributes=ht,c.attributesNum=F,c.index=it}function A(){const C=c.newAttributes;for(let H=0,q=C.length;H<q;H++)C[H]=0}function M(C){v(C,0)}function v(C,H){const q=c.newAttributes,it=c.enabledAttributes,ht=c.attributeDivisors;q[C]=1,it[C]===0&&(s.enableVertexAttribArray(C),it[C]=1),ht[C]!==H&&(s.vertexAttribDivisor(C,H),ht[C]=H)}function N(){const C=c.newAttributes,H=c.enabledAttributes;for(let q=0,it=H.length;q<it;q++)H[q]!==C[q]&&(s.disableVertexAttribArray(q),H[q]=0)}function L(C,H,q,it,ht,ot,F){F===!0?s.vertexAttribIPointer(C,H,q,ht,ot):s.vertexAttribPointer(C,H,q,it,ht,ot)}function O(C,H,q,it){A();const ht=it.attributes,ot=q.getAttributes(),F=H.defaultAttributeValues;for(const j in ot){const Z=ot[j];if(Z.location>=0){let yt=ht[j];if(yt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),yt!==void 0){const Mt=yt.normalized,I=yt.itemSize,rt=t.get(yt);if(rt===void 0)continue;const tt=rt.buffer,St=rt.type,It=rt.bytesPerElement,J=St===s.INT||St===s.UNSIGNED_INT||yt.gpuType===Nd;if(yt.isInterleavedBufferAttribute){const ft=yt.data,Nt=ft.stride,Lt=yt.offset;if(ft.isInstancedInterleavedBuffer){for(let jt=0;jt<Z.locationSize;jt++)v(Z.location+jt,ft.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let jt=0;jt<Z.locationSize;jt++)M(Z.location+jt);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let jt=0;jt<Z.locationSize;jt++)L(Z.location+jt,I/Z.locationSize,St,Mt,Nt*It,(Lt+I/Z.locationSize*jt)*It,J)}else{if(yt.isInstancedBufferAttribute){for(let ft=0;ft<Z.locationSize;ft++)v(Z.location+ft,yt.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ft=0;ft<Z.locationSize;ft++)M(Z.location+ft);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ft=0;ft<Z.locationSize;ft++)L(Z.location+ft,I/Z.locationSize,St,Mt,I*It,I/Z.locationSize*ft*It,J)}}else if(F!==void 0){const Mt=F[j];if(Mt!==void 0)switch(Mt.length){case 2:s.vertexAttrib2fv(Z.location,Mt);break;case 3:s.vertexAttrib3fv(Z.location,Mt);break;case 4:s.vertexAttrib4fv(Z.location,Mt);break;default:s.vertexAttrib1fv(Z.location,Mt)}}}}N()}function P(){W();for(const C in r){const H=r[C];for(const q in H){const it=H[q];for(const ht in it)g(it[ht].object),delete it[ht];delete H[q]}delete r[C]}}function T(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const q in H){const it=H[q];for(const ht in it)g(it[ht].object),delete it[ht];delete H[q]}delete r[C.id]}function U(C){for(const H in r){const q=r[H];if(q[C.id]===void 0)continue;const it=q[C.id];for(const ht in it)g(it[ht].object),delete it[ht];delete q[C.id]}}function W(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:M,disableUnusedAttributes:N}}function y3(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let S=0;for(let b=0;b<x;b++)S+=g[b];i.update(S,r,1)}function m(p,g,x,_){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)h(p[b],g[b],_[b]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,x);let b=0;for(let A=0;A<x;A++)b+=g[A]*_[A];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function S3(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(U){return!(U!==ji&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const W=U===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==ra&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Na&&!W)}function m(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(Te("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=b>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:O,vertexTextures:P,maxSamples:T}}function M3(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Hr,d=new we,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const S=x.length!==0||_||r!==0||l;return l=_,r=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,S){const b=x.clippingPlanes,A=x.clipIntersection,M=x.clipShadows,v=s.get(x);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const N=c?0:r,L=N*4;let O=v.clippingState||null;m.value=O,O=g(b,_,L,S);for(let P=0;P!==L;++P)O[P]=i[P];v.clippingState=O,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,_,S,b){const A=x!==null?x.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const v=S+A*4,N=_.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,O=S;L!==A;++L,O+=4)h.copy(x[L]).applyMatrix4(N,d),h.normal.toArray(M,O),M[O+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function b3(s){let t=new WeakMap;function i(h,d){return d===Zh?h.mapping=qs:d===Kh&&(h.mapping=Ws),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zh||d===Kh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new mS(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const dr=4,xg=[.125,.215,.35,.446,.526,.582],Vr=20,E3=256,Zo=new gv,gg=new We;let Lh=null,Nh=0,Oh=0,Ph=!1;const T3=new dt;class vg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=T3}=c;Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lh,Nh,Oh),this._renderer.xr.enabled=Ph,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===qs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Zs,format:ji,colorSpace:Ys,depthBuffer:!1},l=_g(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A3(c)),this._blurMaterial=C3(c,t,i)}return l}_compileMaterial(t){const i=new bi(new Fi,t);this._renderer.compile(i,Zo)}_sceneToCubeUV(t,i,r,l,c){const m=new zi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,S=x.toneMapping;x.getClearColor(gg),x.toneMapping=pr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new ul,new Xd({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let v=!1;const N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,v=!0):(M.color.copy(gg),v=!0);for(let L=0;L<6;L++){const O=L%3;O===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):O===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const P=this._cubeSize;Hs(l,O*P,L>2?P:0,P,P),x.setRenderTarget(l),v&&x.render(A,m),x.render(t,m)}x.toneMapping=S,x.autoClear=_,t.background=N}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===qs||t.mapping===Ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yg());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Hs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Zo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const N=3*Math.max(this._cubeSize,16),L=4*this._cubeSize;this._ggxMaterial=R3(this._lodMax,N,L)}const h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),_=.05+p*.95,S=x*_,{_lodMax:b}=this,A=this._sizeLods[r],M=3*A*(r>b-dr?r-b+dr:0),v=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=b-i,Hs(c,M,v,3*A,2*A),l.setRenderTarget(c),l.render(d,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Hs(t,M,v,3*A,2*A),l.setRenderTarget(t),l.render(d,Zo)}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&yn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const _=p.uniforms,S=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),A=c/b,M=isFinite(c)?1+Math.floor(g*A):Vr;M>Vr&&Te(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Vr}`);const v=[];let N=0;for(let U=0;U<Vr;++U){const W=U/A,w=Math.exp(-W*W/2);v.push(w),U===0?N+=w:U<M&&(N+=2*w)}for(let U=0;U<v.length;U++)v[U]=v[U]/N;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:L}=this;_.dTheta.value=b,_.mipInt.value=L-r;const O=this._sizeLods[l],P=3*O*(l>L-dr?l-L+dr:0),T=4*(this._cubeSize-O);Hs(i,P,T,3*O,2*O),m.setRenderTarget(i),m.render(x,Zo)}}function A3(s){const t=[],i=[],r=[];let l=s;const c=s-dr+1+xg.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>s-dr?m=xg[h-s+dr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,b=6,A=3,M=2,v=1,N=new Float32Array(A*b*S),L=new Float32Array(M*b*S),O=new Float32Array(v*b*S);for(let T=0;T<S;T++){const U=T%3*2/3-1,W=T>2?0:-1,w=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];N.set(w,A*b*T),L.set(_,M*b*T);const C=[T,T,T,T,T,T];O.set(C,v*b*T)}const P=new Fi;P.setAttribute("position",new aa(N,A)),P.setAttribute("uv",new aa(L,M)),P.setAttribute("faceIndex",new aa(O,v)),r.push(new bi(P,null)),l>dr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function _g(s,t,i){const r=new Wr(s,t,i);return r.texture.mapping=Zc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hs(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function R3(s,t,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:E3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function C3(s,t,i){const r=new Float32Array(Vr),l=new dt(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function yg(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Sg(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function w3(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Zh||m===Kh,g=m===qs||m===Ws;if(p||g){let x=t.get(d);const _=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new vg(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new vg(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function D3(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&rl("WebGLRenderer: "+r+" extension not supported."),l}}}function U3(s,t,i,r){const l={},c=new WeakMap;function h(x){const _=x.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",h),delete l[_.id];const S=c.get(_);S&&(t.remove(S),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(x,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const S in _)t.update(_[S],s.ARRAY_BUFFER)}function p(x){const _=[],S=x.index,b=x.attributes.position;let A=0;if(S!==null){const N=S.array;A=S.version;for(let L=0,O=N.length;L<O;L+=3){const P=N[L+0],T=N[L+1],U=N[L+2];_.push(P,T,T,U,U,P)}}else if(b!==void 0){const N=b.array;A=b.version;for(let L=0,O=N.length/3-1;L<O;L+=3){const P=L+0,T=L+1,U=L+2;_.push(P,T,T,U,U,P)}}else return;const M=new(sv(_)?uv:cv)(_,1);M.version=A;const v=c.get(x);v&&t.remove(v),c.set(x,M)}function g(x){const _=c.get(x);if(_){const S=x.index;S!==null&&_.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function L3(s,t,i){let r;function l(_){r=_}let c,h;function d(_){c=_.type,h=_.bytesPerElement}function m(_,S){s.drawElements(r,S,c,_*h),i.update(S,r,1)}function p(_,S,b){b!==0&&(s.drawElementsInstanced(r,S,c,_*h,b),i.update(S,r,b))}function g(_,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,_,0,b);let M=0;for(let v=0;v<b;v++)M+=S[v];i.update(M,r,1)}function x(_,S,b,A){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<_.length;v++)p(_[v]/h,S[v],A[v]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,_,0,A,0,b);let v=0;for(let N=0;N<b;N++)v+=S[N]*A[N];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function N3(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:yn("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function O3(s,t,i){const r=new WeakMap,l=new pn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==x){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let O=0;b===!0&&(O=1),A===!0&&(O=2),M===!0&&(O=3);let P=d.attributes.position.count*O,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const U=new Float32Array(P*T*4*x),W=new ov(U,P,T,x);W.type=Na,W.needsUpdate=!0;const w=O*4;for(let H=0;H<x;H++){const q=v[H],it=N[H],ht=L[H],ot=P*T*4*H;for(let F=0;F<q.count;F++){const j=F*w;b===!0&&(l.fromBufferAttribute(q,F),U[ot+j+0]=l.x,U[ot+j+1]=l.y,U[ot+j+2]=l.z,U[ot+j+3]=0),A===!0&&(l.fromBufferAttribute(it,F),U[ot+j+4]=l.x,U[ot+j+5]=l.y,U[ot+j+6]=l.z,U[ot+j+7]=0),M===!0&&(l.fromBufferAttribute(ht,F),U[ot+j+8]=l.x,U[ot+j+9]=l.y,U[ot+j+10]=l.z,U[ot+j+11]=ht.itemSize===4?l.w:1)}}_={count:x,texture:W,size:new Oe(P,T)},r.set(d,_),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function P3(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const _v=new kn,Mg=new pv(1,1),yv=new ov,Sv=new J1,Mv=new dv,bg=[],Eg=[],Tg=new Float32Array(16),Ag=new Float32Array(9),Rg=new Float32Array(4);function $s(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=bg[l];if(c===void 0&&(c=new Float32Array(l),bg[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function Un(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Ln(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Jc(s,t){let i=Eg[t];i===void 0&&(i=new Int32Array(t),Eg[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function z3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function I3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;s.uniform2fv(this.addr,t),Ln(i,t)}}function F3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Un(i,t))return;s.uniform3fv(this.addr,t),Ln(i,t)}}function B3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;s.uniform4fv(this.addr,t),Ln(i,t)}}function H3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Un(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ln(i,t)}else{if(Un(i,r))return;Rg.set(r),s.uniformMatrix2fv(this.addr,!1,Rg),Ln(i,r)}}function G3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Un(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ln(i,t)}else{if(Un(i,r))return;Ag.set(r),s.uniformMatrix3fv(this.addr,!1,Ag),Ln(i,r)}}function V3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Un(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ln(i,t)}else{if(Un(i,r))return;Tg.set(r),s.uniformMatrix4fv(this.addr,!1,Tg),Ln(i,r)}}function k3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function X3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;s.uniform2iv(this.addr,t),Ln(i,t)}}function q3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Un(i,t))return;s.uniform3iv(this.addr,t),Ln(i,t)}}function W3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;s.uniform4iv(this.addr,t),Ln(i,t)}}function Y3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function j3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;s.uniform2uiv(this.addr,t),Ln(i,t)}}function Z3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Un(i,t))return;s.uniform3uiv(this.addr,t),Ln(i,t)}}function K3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;s.uniform4uiv(this.addr,t),Ln(i,t)}}function Q3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Mg.compareFunction=rv,c=Mg):c=_v,i.setTexture2D(t||c,l)}function J3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Sv,l)}function $3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Mv,l)}function tE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||yv,l)}function eE(s){switch(s){case 5126:return z3;case 35664:return I3;case 35665:return F3;case 35666:return B3;case 35674:return H3;case 35675:return G3;case 35676:return V3;case 5124:case 35670:return k3;case 35667:case 35671:return X3;case 35668:case 35672:return q3;case 35669:case 35673:return W3;case 5125:return Y3;case 36294:return j3;case 36295:return Z3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return Q3;case 35679:case 36299:case 36307:return J3;case 35680:case 36300:case 36308:case 36293:return $3;case 36289:case 36303:case 36311:case 36292:return tE}}function nE(s,t){s.uniform1fv(this.addr,t)}function iE(s,t){const i=$s(t,this.size,2);s.uniform2fv(this.addr,i)}function aE(s,t){const i=$s(t,this.size,3);s.uniform3fv(this.addr,i)}function rE(s,t){const i=$s(t,this.size,4);s.uniform4fv(this.addr,i)}function sE(s,t){const i=$s(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function oE(s,t){const i=$s(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function lE(s,t){const i=$s(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function cE(s,t){s.uniform1iv(this.addr,t)}function uE(s,t){s.uniform2iv(this.addr,t)}function fE(s,t){s.uniform3iv(this.addr,t)}function hE(s,t){s.uniform4iv(this.addr,t)}function dE(s,t){s.uniform1uiv(this.addr,t)}function pE(s,t){s.uniform2uiv(this.addr,t)}function mE(s,t){s.uniform3uiv(this.addr,t)}function xE(s,t){s.uniform4uiv(this.addr,t)}function gE(s,t,i){const r=this.cache,l=t.length,c=Jc(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Ln(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||_v,c[h])}function vE(s,t,i){const r=this.cache,l=t.length,c=Jc(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Ln(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Sv,c[h])}function _E(s,t,i){const r=this.cache,l=t.length,c=Jc(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Ln(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Mv,c[h])}function yE(s,t,i){const r=this.cache,l=t.length,c=Jc(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Ln(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||yv,c[h])}function SE(s){switch(s){case 5126:return nE;case 35664:return iE;case 35665:return aE;case 35666:return rE;case 35674:return sE;case 35675:return oE;case 35676:return lE;case 5124:case 35670:return cE;case 35667:case 35671:return uE;case 35668:case 35672:return fE;case 35669:case 35673:return hE;case 5125:return dE;case 36294:return pE;case 36295:return mE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return vE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return yE}}class ME{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=eE(i.type)}}class bE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=SE(i.type)}}class EE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function Cg(s,t){s.seq.push(t),s.map[t.id]=t}function TE(s,t,i){const r=s.name,l=r.length;for(zh.lastIndex=0;;){const c=zh.exec(r),h=zh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Cg(i,p===void 0?new ME(d,s,t):new bE(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new EE(d),Cg(i,x)),i=x}}}class Wc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);TE(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function wg(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const AE=37297;let RE=0;function CE(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Dg=new we;function wE(s){Ze._getMatrix(Dg,Ze.workingColorSpace,s);const t=`mat3( ${Dg.elements.map(i=>i.toFixed(4))} )`;switch(Ze.getTransfer(s)){case Yc:return[t,"LinearTransferOETF"];case ln:return[t,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ug(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+CE(s.getShaderSource(t),d)}else return c}function DE(s,t){const i=wE(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function UE(s,t){let i;switch(t){case f1:i="Linear";break;case h1:i="Reinhard";break;case d1:i="Cineon";break;case p1:i="ACESFilmic";break;case x1:i="AgX";break;case g1:i="Neutral";break;case m1:i="Custom";break;default:Te("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new dt;function LE(){Ze.getLuminanceCoefficients(Gc);const s=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function OE(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function PE(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Ko(s){return s!==""}function Lg(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ng(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(zE,FE)}const IE=new Map;function FE(s,t){let i=Le[t];if(i===void 0){const r=IE.get(t);if(r!==void 0)i=Le[r],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return wd(i)}const BE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(s){return s.replace(BE,HE)}function HE(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Pg(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function GE(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jg?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xy?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ua&&(t="SHADOWMAP_TYPE_VSM"),t}function VE(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kE(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function XE(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zg:t="ENVMAP_BLENDING_MULTIPLY";break;case c1:t="ENVMAP_BLENDING_MIX";break;case u1:t="ENVMAP_BLENDING_ADD";break}return t}function qE(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function WE(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=GE(i),p=VE(i),g=kE(i),x=XE(i),_=qE(i),S=NE(i),b=OE(c),A=l.createProgram();let M,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ko).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ko).join(`
`),v.length>0&&(v+=`
`)):(M=[Pg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),v=[Pg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==pr?"#define TONE_MAPPING":"",i.toneMapping!==pr?Le.tonemapping_pars_fragment:"",i.toneMapping!==pr?UE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,DE("linearToOutputTexel",i.outputColorSpace),LE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),h=wd(h),h=Lg(h,i),h=Ng(h,i),d=wd(d),d=Lg(d,i),d=Ng(d,i),h=Og(h),d=Og(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===Vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=N+M+h,O=N+v+d,P=wg(l,l.VERTEX_SHADER,L),T=wg(l,l.FRAGMENT_SHADER,O);l.attachShader(A,P),l.attachShader(A,T),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function U(H){if(s.debug.checkShaderErrors){const q=l.getProgramInfoLog(A)||"",it=l.getShaderInfoLog(P)||"",ht=l.getShaderInfoLog(T)||"",ot=q.trim(),F=it.trim(),j=ht.trim();let Z=!0,yt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,P,T);else{const Mt=Ug(l,P,"vertex"),I=Ug(l,T,"fragment");yn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ot+`
`+Mt+`
`+I)}else ot!==""?Te("WebGLProgram: Program Info Log:",ot):(F===""||j==="")&&(yt=!1);yt&&(H.diagnostics={runnable:Z,programLog:ot,vertexShader:{log:F,prefix:M},fragmentShader:{log:j,prefix:v}})}l.deleteShader(P),l.deleteShader(T),W=new Wc(l,A),w=PE(l,A)}let W;this.getUniforms=function(){return W===void 0&&U(this),W};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,AE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=RE++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=T,this}let YE=0;class jE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new ZE(t),i.set(t,r)),r}}class ZE{constructor(t){this.id=YE++,this.code=t,this.usedTimes=0}}function KE(s,t,i,r,l,c,h){const d=new kd,m=new jE,p=new Set,g=[],x=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,H,q,it){const ht=q.fog,ot=it.geometry,F=w.isMeshStandardMaterial?q.environment:null,j=(w.isMeshStandardMaterial?i:t).get(w.envMap||F),Z=j&&j.mapping===Zc?j.image.height:null,yt=b[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&Te("WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const Mt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,I=Mt!==void 0?Mt.length:0;let rt=0;ot.morphAttributes.position!==void 0&&(rt=1),ot.morphAttributes.normal!==void 0&&(rt=2),ot.morphAttributes.color!==void 0&&(rt=3);let tt,St,It,J;if(yt){const Ie=ea[yt];tt=Ie.vertexShader,St=Ie.fragmentShader}else tt=w.vertexShader,St=w.fragmentShader,m.update(w),It=m.getVertexShaderID(w),J=m.getFragmentShaderID(w);const ft=s.getRenderTarget(),Nt=s.state.buffers.depth.getReversed(),Lt=it.isInstancedMesh===!0,jt=it.isBatchedMesh===!0,he=!!w.map,ke=!!w.matcap,_e=!!j,Ge=!!w.aoMap,V=!!w.lightMap,gt=!!w.bumpMap,ye=!!w.normalMap,me=!!w.displacementMap,ee=!!w.emissiveMap,De=!!w.metalnessMap,$t=!!w.roughnessMap,de=w.anisotropy>0,z=w.clearcoat>0,E=w.dispersion>0,Y=w.iridescence>0,pt=w.sheen>0,Tt=w.transmission>0,mt=de&&!!w.anisotropyMap,ae=z&&!!w.clearcoatMap,Vt=z&&!!w.clearcoatNormalMap,re=z&&!!w.clearcoatRoughnessMap,ne=Y&&!!w.iridescenceMap,Ct=Y&&!!w.iridescenceThicknessMap,Dt=pt&&!!w.sheenColorMap,oe=pt&&!!w.sheenRoughnessMap,Qt=!!w.specularMap,Yt=!!w.specularColorMap,ce=!!w.specularIntensityMap,k=Tt&&!!w.transmissionMap,Ht=Tt&&!!w.thicknessMap,Ot=!!w.gradientMap,Pt=!!w.alphaMap,Ut=w.alphaTest>0,bt=!!w.alphaHash,Jt=!!w.extensions;let xe=pr;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(xe=s.toneMapping);const Xe={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:tt,fragmentShader:St,defines:w.defines,customVertexShaderID:It,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:jt,batchingColor:jt&&it._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&it.instanceColor!==null,instancingMorph:Lt&&it.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ys,alphaToCoverage:!!w.alphaToCoverage,map:he,matcap:ke,envMap:_e,envMapMode:_e&&j.mapping,envMapCubeUVHeight:Z,aoMap:Ge,lightMap:V,bumpMap:gt,normalMap:ye,displacementMap:_&&me,emissiveMap:ee,normalMapObjectSpace:ye&&w.normalMapType===S1,normalMapTangentSpace:ye&&w.normalMapType===av,metalnessMap:De,roughnessMap:$t,anisotropy:de,anisotropyMap:mt,clearcoat:z,clearcoatMap:ae,clearcoatNormalMap:Vt,clearcoatRoughnessMap:re,dispersion:E,iridescence:Y,iridescenceMap:ne,iridescenceThicknessMap:Ct,sheen:pt,sheenColorMap:Dt,sheenRoughnessMap:oe,specularMap:Qt,specularColorMap:Yt,specularIntensityMap:ce,transmission:Tt,transmissionMap:k,thicknessMap:Ht,gradientMap:Ot,opaque:w.transparent===!1&&w.blending===Vs&&w.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Ut,alphaHash:bt,combine:w.combine,mapUv:he&&A(w.map.channel),aoMapUv:Ge&&A(w.aoMap.channel),lightMapUv:V&&A(w.lightMap.channel),bumpMapUv:gt&&A(w.bumpMap.channel),normalMapUv:ye&&A(w.normalMap.channel),displacementMapUv:me&&A(w.displacementMap.channel),emissiveMapUv:ee&&A(w.emissiveMap.channel),metalnessMapUv:De&&A(w.metalnessMap.channel),roughnessMapUv:$t&&A(w.roughnessMap.channel),anisotropyMapUv:mt&&A(w.anisotropyMap.channel),clearcoatMapUv:ae&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:oe&&A(w.sheenRoughnessMap.channel),specularMapUv:Qt&&A(w.specularMap.channel),specularColorMapUv:Yt&&A(w.specularColorMap.channel),specularIntensityMapUv:ce&&A(w.specularIntensityMap.channel),transmissionMapUv:k&&A(w.transmissionMap.channel),thicknessMapUv:Ht&&A(w.thicknessMap.channel),alphaMapUv:Pt&&A(w.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(ye||de),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ot.attributes.uv&&(he||Pt),fog:!!ht,useFog:w.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Nt,skinning:it.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:rt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===ln,decodeVideoTextureEmissive:ee&&w.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(w.emissiveMap.colorSpace)===ln,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===na,flipSided:w.side===di,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)C.push(H),C.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(N(C,w),L(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function O(w){const C=b[w.type];let H;if(C){const q=ea[C];H=fS.clone(q.uniforms)}else H=w.uniforms;return H}function P(w,C){let H;for(let q=0,it=g.length;q<it;q++){const ht=g[q];if(ht.cacheKey===C){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new WE(s,C,w,c),g.push(H)),H}function T(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function U(w){m.remove(w)}function W(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:O,acquireProgram:P,releaseProgram:T,releaseShaderCache:U,programs:g,dispose:W}}function QE(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function JE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ig(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(x,_,S,b,A,M){let v=s[t];return v===void 0?(v={id:x.id,object:x,geometry:_,material:S,groupOrder:b,renderOrder:x.renderOrder,z:A,group:M},s[t]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=S,v.groupOrder=b,v.renderOrder=x.renderOrder,v.z=A,v.group=M),t++,v}function d(x,_,S,b,A,M){const v=h(x,_,S,b,A,M);S.transmission>0?r.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(x,_,S,b,A,M){const v=h(x,_,S,b,A,M);S.transmission>0?r.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,_){i.length>1&&i.sort(x||JE),r.length>1&&r.sort(_||zg),l.length>1&&l.sort(_||zg)}function g(){for(let x=t,_=s.length;x<_;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function $E(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new Ig,s.set(r,[h])):l>=c.length?(h=new Ig,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function t2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new dt,color:new We};break;case"SpotLight":i={position:new dt,direction:new dt,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new dt,color:new We,distance:0,decay:0};break;case"HemisphereLight":i={direction:new dt,skyColor:new We,groundColor:new We};break;case"RectAreaLight":i={color:new We,position:new dt,halfWidth:new dt,halfHeight:new dt};break}return s[t.id]=i,i}}}function e2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let n2=0;function i2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function a2(s){const t=new t2,i=e2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new dt);const l=new dt,c=new mn,h=new mn;function d(p){let g=0,x=0,_=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let S=0,b=0,A=0,M=0,v=0,N=0,L=0,O=0,P=0,T=0,U=0;p.sort(i2);for(let w=0,C=p.length;w<C;w++){const H=p[w],q=H.color,it=H.intensity,ht=H.distance,ot=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=q.r*it,x+=q.g*it,_+=q.b*it;else if(H.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(H.sh.coefficients[F],it);U++}else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const j=H.shadow,Z=i.get(H);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,r.directionalShadow[S]=Z,r.directionalShadowMap[S]=ot,r.directionalShadowMatrix[S]=H.shadow.matrix,N++}r.directional[S]=F,S++}else if(H.isSpotLight){const F=t.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(q).multiplyScalar(it),F.distance=ht,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,r.spot[A]=F;const j=H.shadow;if(H.map&&(r.spotLightMap[P]=H.map,P++,j.updateMatrices(H),H.castShadow&&T++),r.spotLightMatrix[A]=j.matrix,H.castShadow){const Z=i.get(H);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,r.spotShadow[A]=Z,r.spotShadowMap[A]=ot,O++}A++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(q).multiplyScalar(it),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=F,M++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const j=H.shadow,Z=i.get(H);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,r.pointShadow[b]=Z,r.pointShadowMap[b]=ot,r.pointShadowMatrix[b]=H.shadow.matrix,L++}r.point[b]=F,b++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar(it),F.groundColor.copy(H.groundColor).multiplyScalar(it),r.hemi[v]=F,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Zt.LTC_FLOAT_1,r.rectAreaLTC2=Zt.LTC_FLOAT_2):(r.rectAreaLTC1=Zt.LTC_HALF_1,r.rectAreaLTC2=Zt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==S||W.pointLength!==b||W.spotLength!==A||W.rectAreaLength!==M||W.hemiLength!==v||W.numDirectionalShadows!==N||W.numPointShadows!==L||W.numSpotShadows!==O||W.numSpotMaps!==P||W.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=M,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=O+P-T,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=U,W.directionalLength=S,W.pointLength=b,W.spotLength=A,W.rectAreaLength=M,W.hemiLength=v,W.numDirectionalShadows=N,W.numPointShadows=L,W.numSpotShadows=O,W.numSpotMaps=P,W.numLightProbes=U,r.version=n2++)}function m(p,g){let x=0,_=0,S=0,b=0,A=0;const M=g.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const L=p[v];if(L.isDirectionalLight){const O=r.directional[x];O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),x++}else if(L.isSpotLight){const O=r.spot[S];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const O=r.rectArea[b];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const O=r.point[_];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const O=r.hemi[A];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:r}}function Fg(s){const t=new a2(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function r2(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Fg(s),t.set(l,[d])):c>=h.length?(d=new Fg(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const s2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o2=`uniform sampler2D shadow_pass;
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
}`;function l2(s,t,i){let r=new qd;const l=new Oe,c=new Oe,h=new pn,d=new ES({depthPacking:y1}),m=new TS,p={},g=i.maxTextureSize,x={[mr]:di,[di]:mr,[na]:na},_=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:s2,fragmentShader:o2}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const b=new Fi;b.setAttribute("position",new aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new bi(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jg;let v=this.type;this.render=function(T,U,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Oa),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const it=v!==Ua&&this.type===Ua,ht=v===Ua&&this.type!==Ua;for(let ot=0,F=T.length;ot<F;ot++){const j=T[ot],Z=j.shadow;if(Z===void 0){Te("WebGLShadowMap:",j,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const yt=Z.getFrameExtents();if(l.multiply(yt),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,Z.mapSize.y=c.y)),Z.map===null||it===!0||ht===!0){const I=this.type!==Ua?{minFilter:Ei,magFilter:Ei}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Wr(l.x,l.y,I),Z.map.texture.name=j.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const Mt=Z.getViewportCount();for(let I=0;I<Mt;I++){const rt=Z.getViewport(I);h.set(c.x*rt.x,c.y*rt.y,c.x*rt.z,c.y*rt.w),q.viewport(h),Z.updateMatrices(j,I),r=Z.getFrustum(),O(U,W,Z.camera,j,this.type)}Z.isPointLightShadow!==!0&&this.type===Ua&&N(Z,W),Z.needsUpdate=!1}v=this.type,M.needsUpdate=!1,s.setRenderTarget(w,C,H)};function N(T,U){const W=t.update(A);_.defines.VSM_SAMPLES!==T.blurSamples&&(_.defines.VSM_SAMPLES=T.blurSamples,S.defines.VSM_SAMPLES=T.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wr(l.x,l.y)),_.uniforms.shadow_pass.value=T.map.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(U,null,W,_,A,null),S.uniforms.shadow_pass.value=T.mapPass.texture,S.uniforms.resolution.value=T.mapSize,S.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(U,null,W,S,A,null)}function L(T,U,W,w){let C=null;const H=W.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)C=H;else if(C=W.isPointLight===!0?m:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const q=C.uuid,it=U.uuid;let ht=p[q];ht===void 0&&(ht={},p[q]=ht);let ot=ht[it];ot===void 0&&(ot=C.clone(),ht[it]=ot,U.addEventListener("dispose",P)),C=ot}if(C.visible=U.visible,C.wireframe=U.wireframe,w===Ua?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:x[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const q=s.properties.get(C);q.light=W}return C}function O(T,U,W,w,C){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Ua)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld);const it=t.update(T),ht=T.material;if(Array.isArray(ht)){const ot=it.groups;for(let F=0,j=ot.length;F<j;F++){const Z=ot[F],yt=ht[Z.materialIndex];if(yt&&yt.visible){const Mt=L(T,yt,w,C);T.onBeforeShadow(s,T,U,W,it,Mt,Z),s.renderBufferDirect(W,null,it,Mt,T,Z),T.onAfterShadow(s,T,U,W,it,Mt,Z)}}}else if(ht.visible){const ot=L(T,ht,w,C);T.onBeforeShadow(s,T,U,W,it,ot,null),s.renderBufferDirect(W,null,it,ot,T,null),T.onAfterShadow(s,T,U,W,it,ot,null)}}const q=T.children;for(let it=0,ht=q.length;it<ht;it++)O(q[it],U,W,w,C)}function P(T){T.target.removeEventListener("dispose",P);for(const W in p){const w=p[W],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const c2={[Vh]:kh,[Xh]:Yh,[qh]:jh,[Xs]:Wh,[kh]:Vh,[Yh]:Xh,[jh]:qh,[Wh]:Xs};function u2(s,t){function i(){let k=!1;const Ht=new pn;let Ot=null;const Pt=new pn(0,0,0,0);return{setMask:function(Ut){Ot!==Ut&&!k&&(s.colorMask(Ut,Ut,Ut,Ut),Ot=Ut)},setLocked:function(Ut){k=Ut},setClear:function(Ut,bt,Jt,xe,Xe){Xe===!0&&(Ut*=xe,bt*=xe,Jt*=xe),Ht.set(Ut,bt,Jt,xe),Pt.equals(Ht)===!1&&(s.clearColor(Ut,bt,Jt,xe),Pt.copy(Ht))},reset:function(){k=!1,Ot=null,Pt.set(-1,0,0,0)}}}function r(){let k=!1,Ht=!1,Ot=null,Pt=null,Ut=null;return{setReversed:function(bt){if(Ht!==bt){const Jt=t.get("EXT_clip_control");bt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ht=bt;const xe=Ut;Ut=null,this.setClear(xe)}},getReversed:function(){return Ht},setTest:function(bt){bt?ft(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(bt){Ot!==bt&&!k&&(s.depthMask(bt),Ot=bt)},setFunc:function(bt){if(Ht&&(bt=c2[bt]),Pt!==bt){switch(bt){case Vh:s.depthFunc(s.NEVER);break;case kh:s.depthFunc(s.ALWAYS);break;case Xh:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case qh:s.depthFunc(s.EQUAL);break;case Wh:s.depthFunc(s.GEQUAL);break;case Yh:s.depthFunc(s.GREATER);break;case jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pt=bt}},setLocked:function(bt){k=bt},setClear:function(bt){Ut!==bt&&(Ht&&(bt=1-bt),s.clearDepth(bt),Ut=bt)},reset:function(){k=!1,Ot=null,Pt=null,Ut=null,Ht=!1}}}function l(){let k=!1,Ht=null,Ot=null,Pt=null,Ut=null,bt=null,Jt=null,xe=null,Xe=null;return{setTest:function(Ie){k||(Ie?ft(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(Ie){Ht!==Ie&&!k&&(s.stencilMask(Ie),Ht=Ie)},setFunc:function(Ie,bn,Xn){(Ot!==Ie||Pt!==bn||Ut!==Xn)&&(s.stencilFunc(Ie,bn,Xn),Ot=Ie,Pt=bn,Ut=Xn)},setOp:function(Ie,bn,Xn){(bt!==Ie||Jt!==bn||xe!==Xn)&&(s.stencilOp(Ie,bn,Xn),bt=Ie,Jt=bn,xe=Xn)},setLocked:function(Ie){k=Ie},setClear:function(Ie){Xe!==Ie&&(s.clearStencil(Ie),Xe=Ie)},reset:function(){k=!1,Ht=null,Ot=null,Pt=null,Ut=null,bt=null,Jt=null,xe=null,Xe=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,S=[],b=null,A=!1,M=null,v=null,N=null,L=null,O=null,P=null,T=null,U=new We(0,0,0),W=0,w=!1,C=null,H=null,q=null,it=null,ht=null;const ot=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=j>=2);let yt=null,Mt={};const I=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),tt=new pn().fromArray(I),St=new pn().fromArray(rt);function It(k,Ht,Ot,Pt){const Ut=new Uint8Array(4),bt=s.createTexture();s.bindTexture(k,bt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<Ot;Jt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ht,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,Ut):s.texImage2D(Ht+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ut);return bt}const J={};J[s.TEXTURE_2D]=It(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=It(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=It(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=It(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(s.DEPTH_TEST),h.setFunc(Xs),gt(!1),ye(zx),ft(s.CULL_FACE),Ge(Oa);function ft(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Nt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Lt(k,Ht){return x[k]!==Ht?(s.bindFramebuffer(k,Ht),x[k]=Ht,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ht),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ht),!0):!1}function jt(k,Ht){let Ot=S,Pt=!1;if(k){Ot=_.get(Ht),Ot===void 0&&(Ot=[],_.set(Ht,Ot));const Ut=k.textures;if(Ot.length!==Ut.length||Ot[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,Jt=Ut.length;bt<Jt;bt++)Ot[bt]=s.COLOR_ATTACHMENT0+bt;Ot.length=Ut.length,Pt=!0}}else Ot[0]!==s.BACK&&(Ot[0]=s.BACK,Pt=!0);Pt&&s.drawBuffers(Ot)}function he(k){return b!==k?(s.useProgram(k),b=k,!0):!1}const ke={[Gr]:s.FUNC_ADD,[Wy]:s.FUNC_SUBTRACT,[Yy]:s.FUNC_REVERSE_SUBTRACT};ke[jy]=s.MIN,ke[Zy]=s.MAX;const _e={[Ky]:s.ZERO,[Qy]:s.ONE,[Jy]:s.SRC_COLOR,[Hh]:s.SRC_ALPHA,[a1]:s.SRC_ALPHA_SATURATE,[n1]:s.DST_COLOR,[t1]:s.DST_ALPHA,[$y]:s.ONE_MINUS_SRC_COLOR,[Gh]:s.ONE_MINUS_SRC_ALPHA,[i1]:s.ONE_MINUS_DST_COLOR,[e1]:s.ONE_MINUS_DST_ALPHA,[r1]:s.CONSTANT_COLOR,[s1]:s.ONE_MINUS_CONSTANT_COLOR,[o1]:s.CONSTANT_ALPHA,[l1]:s.ONE_MINUS_CONSTANT_ALPHA};function Ge(k,Ht,Ot,Pt,Ut,bt,Jt,xe,Xe,Ie){if(k===Oa){A===!0&&(Nt(s.BLEND),A=!1);return}if(A===!1&&(ft(s.BLEND),A=!0),k!==qy){if(k!==M||Ie!==w){if((v!==Gr||O!==Gr)&&(s.blendEquation(s.FUNC_ADD),v=Gr,O=Gr),Ie)switch(k){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ix:s.blendFunc(s.ONE,s.ONE);break;case Fx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:yn("WebGLState: Invalid blending: ",k);break}else switch(k){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ix:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fx:yn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bx:yn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yn("WebGLState: Invalid blending: ",k);break}N=null,L=null,P=null,T=null,U.set(0,0,0),W=0,M=k,w=Ie}return}Ut=Ut||Ht,bt=bt||Ot,Jt=Jt||Pt,(Ht!==v||Ut!==O)&&(s.blendEquationSeparate(ke[Ht],ke[Ut]),v=Ht,O=Ut),(Ot!==N||Pt!==L||bt!==P||Jt!==T)&&(s.blendFuncSeparate(_e[Ot],_e[Pt],_e[bt],_e[Jt]),N=Ot,L=Pt,P=bt,T=Jt),(xe.equals(U)===!1||Xe!==W)&&(s.blendColor(xe.r,xe.g,xe.b,Xe),U.copy(xe),W=Xe),M=k,w=!1}function V(k,Ht){k.side===na?Nt(s.CULL_FACE):ft(s.CULL_FACE);let Ot=k.side===di;Ht&&(Ot=!Ot),gt(Ot),k.blending===Vs&&k.transparent===!1?Ge(Oa):Ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Pt=k.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ee(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function ye(k){k!==Vy?(ft(s.CULL_FACE),k!==H&&(k===zx?s.cullFace(s.BACK):k===ky?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),H=k}function me(k){k!==q&&(F&&s.lineWidth(k),q=k)}function ee(k,Ht,Ot){k?(ft(s.POLYGON_OFFSET_FILL),(it!==Ht||ht!==Ot)&&(s.polygonOffset(Ht,Ot),it=Ht,ht=Ot)):Nt(s.POLYGON_OFFSET_FILL)}function De(k){k?ft(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function $t(k){k===void 0&&(k=s.TEXTURE0+ot-1),yt!==k&&(s.activeTexture(k),yt=k)}function de(k,Ht,Ot){Ot===void 0&&(yt===null?Ot=s.TEXTURE0+ot-1:Ot=yt);let Pt=Mt[Ot];Pt===void 0&&(Pt={type:void 0,texture:void 0},Mt[Ot]=Pt),(Pt.type!==k||Pt.texture!==Ht)&&(yt!==Ot&&(s.activeTexture(Ot),yt=Ot),s.bindTexture(k,Ht||J[k]),Pt.type=k,Pt.texture=Ht)}function z(){const k=Mt[yt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function pt(){try{s.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Tt(){try{s.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function mt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ae(){try{s.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Vt(){try{s.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function re(){try{s.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ne(){try{s.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ct(){try{s.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Dt(k){tt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),tt.copy(k))}function oe(k){St.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),St.copy(k))}function Qt(k,Ht){let Ot=p.get(Ht);Ot===void 0&&(Ot=new WeakMap,p.set(Ht,Ot));let Pt=Ot.get(k);Pt===void 0&&(Pt=s.getUniformBlockIndex(Ht,k.name),Ot.set(k,Pt))}function Yt(k,Ht){const Pt=p.get(Ht).get(k);m.get(Ht)!==Pt&&(s.uniformBlockBinding(Ht,Pt,k.__bindingPointIndex),m.set(Ht,Pt))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},yt=null,Mt={},x={},_=new WeakMap,S=[],b=null,A=!1,M=null,v=null,N=null,L=null,O=null,P=null,T=null,U=new We(0,0,0),W=0,w=!1,C=null,H=null,q=null,it=null,ht=null,tt.set(0,0,s.canvas.width,s.canvas.height),St.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ft,disable:Nt,bindFramebuffer:Lt,drawBuffers:jt,useProgram:he,setBlending:Ge,setMaterial:V,setFlipSided:gt,setCullFace:ye,setLineWidth:me,setPolygonOffset:ee,setScissorTest:De,activeTexture:$t,bindTexture:de,unbindTexture:z,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:ne,texImage3D:Ct,updateUBOMapping:Qt,uniformBlockBinding:Yt,texStorage2D:Vt,texStorage3D:re,texSubImage2D:pt,texSubImage3D:Tt,compressedTexSubImage2D:mt,compressedTexSubImage3D:ae,scissor:Dt,viewport:oe,reset:ce}}function f2(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Oe,g=new WeakMap;let x;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,E){return S?new OffscreenCanvas(z,E):al("canvas")}function A(z,E,Y){let pt=1;const Tt=de(z);if((Tt.width>Y||Tt.height>Y)&&(pt=Y/Math.max(Tt.width,Tt.height)),pt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const mt=Math.floor(pt*Tt.width),ae=Math.floor(pt*Tt.height);x===void 0&&(x=b(mt,ae));const Vt=E?b(mt,ae):x;return Vt.width=mt,Vt.height=ae,Vt.getContext("2d").drawImage(z,0,0,mt,ae),Te("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+mt+"x"+ae+")."),Vt}else return"data"in z&&Te("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),z;return z}function M(z){return z.generateMipmaps}function v(z){s.generateMipmap(z)}function N(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(z,E,Y,pt,Tt=!1){if(z!==null){if(s[z]!==void 0)return s[z];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let mt=E;if(E===s.RED&&(Y===s.FLOAT&&(mt=s.R32F),Y===s.HALF_FLOAT&&(mt=s.R16F),Y===s.UNSIGNED_BYTE&&(mt=s.R8)),E===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(mt=s.R8UI),Y===s.UNSIGNED_SHORT&&(mt=s.R16UI),Y===s.UNSIGNED_INT&&(mt=s.R32UI),Y===s.BYTE&&(mt=s.R8I),Y===s.SHORT&&(mt=s.R16I),Y===s.INT&&(mt=s.R32I)),E===s.RG&&(Y===s.FLOAT&&(mt=s.RG32F),Y===s.HALF_FLOAT&&(mt=s.RG16F),Y===s.UNSIGNED_BYTE&&(mt=s.RG8)),E===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(mt=s.RG8UI),Y===s.UNSIGNED_SHORT&&(mt=s.RG16UI),Y===s.UNSIGNED_INT&&(mt=s.RG32UI),Y===s.BYTE&&(mt=s.RG8I),Y===s.SHORT&&(mt=s.RG16I),Y===s.INT&&(mt=s.RG32I)),E===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(mt=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(mt=s.RGB16UI),Y===s.UNSIGNED_INT&&(mt=s.RGB32UI),Y===s.BYTE&&(mt=s.RGB8I),Y===s.SHORT&&(mt=s.RGB16I),Y===s.INT&&(mt=s.RGB32I)),E===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(mt=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(mt=s.RGBA16UI),Y===s.UNSIGNED_INT&&(mt=s.RGBA32UI),Y===s.BYTE&&(mt=s.RGBA8I),Y===s.SHORT&&(mt=s.RGBA16I),Y===s.INT&&(mt=s.RGBA32I)),E===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(mt=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(mt=s.R11F_G11F_B10F)),E===s.RGBA){const ae=Tt?Yc:Ze.getTransfer(pt);Y===s.FLOAT&&(mt=s.RGBA32F),Y===s.HALF_FLOAT&&(mt=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(mt=ae===ln?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function O(z,E){let Y;return z?E===null||E===qr||E===el?Y=s.DEPTH24_STENCIL8:E===Na?Y=s.DEPTH32F_STENCIL8:E===tl&&(Y=s.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qr||E===el?Y=s.DEPTH_COMPONENT24:E===Na?Y=s.DEPTH_COMPONENT32F:E===tl&&(Y=s.DEPTH_COMPONENT16),Y}function P(z,E){return M(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ei&&z.minFilter!==Ii?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function T(z){const E=z.target;E.removeEventListener("dispose",T),W(E),E.isVideoTexture&&g.delete(E)}function U(z){const E=z.target;E.removeEventListener("dispose",U),C(E)}function W(z){const E=r.get(z);if(E.__webglInit===void 0)return;const Y=z.source,pt=_.get(Y);if(pt){const Tt=pt[E.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&w(z),Object.keys(pt).length===0&&_.delete(Y)}r.remove(z)}function w(z){const E=r.get(z);s.deleteTexture(E.__webglTexture);const Y=z.source,pt=_.get(Y);delete pt[E.__cacheKey],h.memory.textures--}function C(z){const E=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let Tt=0;Tt<E.__webglFramebuffer[pt].length;Tt++)s.deleteFramebuffer(E.__webglFramebuffer[pt][Tt]);else s.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)s.deleteFramebuffer(E.__webglFramebuffer[pt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=z.textures;for(let pt=0,Tt=Y.length;pt<Tt;pt++){const mt=r.get(Y[pt]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),h.memory.textures--),r.remove(Y[pt])}r.remove(z)}let H=0;function q(){H=0}function it(){const z=H;return z>=l.maxTextures&&Te("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),H+=1,z}function ht(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function ot(z,E){const Y=r.get(z);if(z.isVideoTexture&&De(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&Y.__version!==z.version){const pt=z.image;if(pt===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{J(Y,z,E);return}}else z.isExternalTexture&&(Y.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+E)}function F(z,E){const Y=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Y.__version!==z.version){J(Y,z,E);return}else z.isExternalTexture&&(Y.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+E)}function j(z,E){const Y=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Y.__version!==z.version){J(Y,z,E);return}i.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+E)}function Z(z,E){const Y=r.get(z);if(z.version>0&&Y.__version!==z.version){ft(Y,z,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+E)}const yt={[Qh]:s.REPEAT,[La]:s.CLAMP_TO_EDGE,[Jh]:s.MIRRORED_REPEAT},Mt={[Ei]:s.NEAREST,[v1]:s.NEAREST_MIPMAP_NEAREST,[_c]:s.NEAREST_MIPMAP_LINEAR,[Ii]:s.LINEAR,[oh]:s.LINEAR_MIPMAP_NEAREST,[kr]:s.LINEAR_MIPMAP_LINEAR},I={[M1]:s.NEVER,[C1]:s.ALWAYS,[b1]:s.LESS,[rv]:s.LEQUAL,[E1]:s.EQUAL,[R1]:s.GEQUAL,[T1]:s.GREATER,[A1]:s.NOTEQUAL};function rt(z,E){if(E.type===Na&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ii||E.magFilter===oh||E.magFilter===_c||E.magFilter===kr||E.minFilter===Ii||E.minFilter===oh||E.minFilter===_c||E.minFilter===kr)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,yt[E.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,yt[E.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,yt[E.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,Mt[E.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ei||E.minFilter!==_c&&E.minFilter!==kr||E.type===Na&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");s.texParameterf(z,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function tt(z,E){let Y=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",T));const pt=E.source;let Tt=_.get(pt);Tt===void 0&&(Tt={},_.set(pt,Tt));const mt=ht(E);if(mt!==z.__cacheKey){Tt[mt]===void 0&&(Tt[mt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),Tt[mt].usedTimes++;const ae=Tt[z.__cacheKey];ae!==void 0&&(Tt[z.__cacheKey].usedTimes--,ae.usedTimes===0&&w(E)),z.__cacheKey=mt,z.__webglTexture=Tt[mt].texture}return Y}function St(z,E,Y){return Math.floor(Math.floor(z/Y)/E)}function It(z,E,Y,pt){const mt=z.updateRanges;if(mt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Y,pt,E.data);else{mt.sort((Ct,Dt)=>Ct.start-Dt.start);let ae=0;for(let Ct=1;Ct<mt.length;Ct++){const Dt=mt[ae],oe=mt[Ct],Qt=Dt.start+Dt.count,Yt=St(oe.start,E.width,4),ce=St(Dt.start,E.width,4);oe.start<=Qt+1&&Yt===ce&&St(oe.start+oe.count-1,E.width,4)===Yt?Dt.count=Math.max(Dt.count,oe.start+oe.count-Dt.start):(++ae,mt[ae]=oe)}mt.length=ae+1;const Vt=s.getParameter(s.UNPACK_ROW_LENGTH),re=s.getParameter(s.UNPACK_SKIP_PIXELS),ne=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ct=0,Dt=mt.length;Ct<Dt;Ct++){const oe=mt[Ct],Qt=Math.floor(oe.start/4),Yt=Math.ceil(oe.count/4),ce=Qt%E.width,k=Math.floor(Qt/E.width),Ht=Yt,Ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,ce,k,Ht,Ot,Y,pt,E.data)}z.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Vt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,ne)}}function J(z,E,Y){let pt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=s.TEXTURE_3D);const Tt=tt(z,E),mt=E.source;i.bindTexture(pt,z.__webglTexture,s.TEXTURE0+Y);const ae=r.get(mt);if(mt.version!==ae.__version||Tt===!0){i.activeTexture(s.TEXTURE0+Y);const Vt=Ze.getPrimaries(Ze.workingColorSpace),re=E.colorSpace===hr?null:Ze.getPrimaries(E.colorSpace),ne=E.colorSpace===hr||Vt===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Ct=A(E.image,!1,l.maxTextureSize);Ct=$t(E,Ct);const Dt=c.convert(E.format,E.colorSpace),oe=c.convert(E.type);let Qt=L(E.internalFormat,Dt,oe,E.colorSpace,E.isVideoTexture);rt(pt,E);let Yt;const ce=E.mipmaps,k=E.isVideoTexture!==!0,Ht=ae.__version===void 0||Tt===!0,Ot=mt.dataReady,Pt=P(E,Ct);if(E.isDepthTexture)Qt=O(E.format===il,E.type),Ht&&(k?i.texStorage2D(s.TEXTURE_2D,1,Qt,Ct.width,Ct.height):i.texImage2D(s.TEXTURE_2D,0,Qt,Ct.width,Ct.height,0,Dt,oe,null));else if(E.isDataTexture)if(ce.length>0){k&&Ht&&i.texStorage2D(s.TEXTURE_2D,Pt,Qt,ce[0].width,ce[0].height);for(let Ut=0,bt=ce.length;Ut<bt;Ut++)Yt=ce[Ut],k?Ot&&i.texSubImage2D(s.TEXTURE_2D,Ut,0,0,Yt.width,Yt.height,Dt,oe,Yt.data):i.texImage2D(s.TEXTURE_2D,Ut,Qt,Yt.width,Yt.height,0,Dt,oe,Yt.data);E.generateMipmaps=!1}else k?(Ht&&i.texStorage2D(s.TEXTURE_2D,Pt,Qt,Ct.width,Ct.height),Ot&&It(E,Ct,Dt,oe)):i.texImage2D(s.TEXTURE_2D,0,Qt,Ct.width,Ct.height,0,Dt,oe,Ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ht&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Qt,ce[0].width,ce[0].height,Ct.depth);for(let Ut=0,bt=ce.length;Ut<bt;Ut++)if(Yt=ce[Ut],E.format!==ji)if(Dt!==null)if(k){if(Ot)if(E.layerUpdates.size>0){const Jt=mg(Yt.width,Yt.height,E.format,E.type);for(const xe of E.layerUpdates){const Xe=Yt.data.subarray(xe*Jt/Yt.data.BYTES_PER_ELEMENT,(xe+1)*Jt/Yt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ut,0,0,xe,Yt.width,Yt.height,1,Dt,Xe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ut,0,0,0,Yt.width,Yt.height,Ct.depth,Dt,Yt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ut,Qt,Yt.width,Yt.height,Ct.depth,0,Yt.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ot&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ut,0,0,0,Yt.width,Yt.height,Ct.depth,Dt,oe,Yt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ut,Qt,Yt.width,Yt.height,Ct.depth,0,Dt,oe,Yt.data)}else{k&&Ht&&i.texStorage2D(s.TEXTURE_2D,Pt,Qt,ce[0].width,ce[0].height);for(let Ut=0,bt=ce.length;Ut<bt;Ut++)Yt=ce[Ut],E.format!==ji?Dt!==null?k?Ot&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ut,0,0,Yt.width,Yt.height,Dt,Yt.data):i.compressedTexImage2D(s.TEXTURE_2D,Ut,Qt,Yt.width,Yt.height,0,Yt.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ot&&i.texSubImage2D(s.TEXTURE_2D,Ut,0,0,Yt.width,Yt.height,Dt,oe,Yt.data):i.texImage2D(s.TEXTURE_2D,Ut,Qt,Yt.width,Yt.height,0,Dt,oe,Yt.data)}else if(E.isDataArrayTexture)if(k){if(Ht&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Qt,Ct.width,Ct.height,Ct.depth),Ot)if(E.layerUpdates.size>0){const Ut=mg(Ct.width,Ct.height,E.format,E.type);for(const bt of E.layerUpdates){const Jt=Ct.data.subarray(bt*Ut/Ct.data.BYTES_PER_ELEMENT,(bt+1)*Ut/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,bt,Ct.width,Ct.height,1,Dt,oe,Jt)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Dt,oe,Ct.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,Ct.width,Ct.height,Ct.depth,0,Dt,oe,Ct.data);else if(E.isData3DTexture)k?(Ht&&i.texStorage3D(s.TEXTURE_3D,Pt,Qt,Ct.width,Ct.height,Ct.depth),Ot&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Dt,oe,Ct.data)):i.texImage3D(s.TEXTURE_3D,0,Qt,Ct.width,Ct.height,Ct.depth,0,Dt,oe,Ct.data);else if(E.isFramebufferTexture){if(Ht)if(k)i.texStorage2D(s.TEXTURE_2D,Pt,Qt,Ct.width,Ct.height);else{let Ut=Ct.width,bt=Ct.height;for(let Jt=0;Jt<Pt;Jt++)i.texImage2D(s.TEXTURE_2D,Jt,Qt,Ut,bt,0,Dt,oe,null),Ut>>=1,bt>>=1}}else if(ce.length>0){if(k&&Ht){const Ut=de(ce[0]);i.texStorage2D(s.TEXTURE_2D,Pt,Qt,Ut.width,Ut.height)}for(let Ut=0,bt=ce.length;Ut<bt;Ut++)Yt=ce[Ut],k?Ot&&i.texSubImage2D(s.TEXTURE_2D,Ut,0,0,Dt,oe,Yt):i.texImage2D(s.TEXTURE_2D,Ut,Qt,Dt,oe,Yt);E.generateMipmaps=!1}else if(k){if(Ht){const Ut=de(Ct);i.texStorage2D(s.TEXTURE_2D,Pt,Qt,Ut.width,Ut.height)}Ot&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Dt,oe,Ct)}else i.texImage2D(s.TEXTURE_2D,0,Qt,Dt,oe,Ct);M(E)&&v(pt),ae.__version=mt.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function ft(z,E,Y){if(E.image.length!==6)return;const pt=tt(z,E),Tt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+Y);const mt=r.get(Tt);if(Tt.version!==mt.__version||pt===!0){i.activeTexture(s.TEXTURE0+Y);const ae=Ze.getPrimaries(Ze.workingColorSpace),Vt=E.colorSpace===hr?null:Ze.getPrimaries(E.colorSpace),re=E.colorSpace===hr||ae===Vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ne=E.isCompressedTexture||E.image[0].isCompressedTexture,Ct=E.image[0]&&E.image[0].isDataTexture,Dt=[];for(let bt=0;bt<6;bt++)!ne&&!Ct?Dt[bt]=A(E.image[bt],!0,l.maxCubemapSize):Dt[bt]=Ct?E.image[bt].image:E.image[bt],Dt[bt]=$t(E,Dt[bt]);const oe=Dt[0],Qt=c.convert(E.format,E.colorSpace),Yt=c.convert(E.type),ce=L(E.internalFormat,Qt,Yt,E.colorSpace),k=E.isVideoTexture!==!0,Ht=mt.__version===void 0||pt===!0,Ot=Tt.dataReady;let Pt=P(E,oe);rt(s.TEXTURE_CUBE_MAP,E);let Ut;if(ne){k&&Ht&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,ce,oe.width,oe.height);for(let bt=0;bt<6;bt++){Ut=Dt[bt].mipmaps;for(let Jt=0;Jt<Ut.length;Jt++){const xe=Ut[Jt];E.format!==ji?Qt!==null?k?Ot&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,xe.width,xe.height,Qt,xe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,ce,xe.width,xe.height,0,xe.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ot&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,xe.width,xe.height,Qt,Yt,xe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,ce,xe.width,xe.height,0,Qt,Yt,xe.data)}}}else{if(Ut=E.mipmaps,k&&Ht){Ut.length>0&&Pt++;const bt=de(Dt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,ce,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Ct){k?Ot&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Dt[bt].width,Dt[bt].height,Qt,Yt,Dt[bt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ce,Dt[bt].width,Dt[bt].height,0,Qt,Yt,Dt[bt].data);for(let Jt=0;Jt<Ut.length;Jt++){const Xe=Ut[Jt].image[bt].image;k?Ot&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Xe.width,Xe.height,Qt,Yt,Xe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,ce,Xe.width,Xe.height,0,Qt,Yt,Xe.data)}}else{k?Ot&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Qt,Yt,Dt[bt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ce,Qt,Yt,Dt[bt]);for(let Jt=0;Jt<Ut.length;Jt++){const xe=Ut[Jt];k?Ot&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Qt,Yt,xe.image[bt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,ce,Qt,Yt,xe.image[bt])}}}M(E)&&v(s.TEXTURE_CUBE_MAP),mt.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Nt(z,E,Y,pt,Tt,mt){const ae=c.convert(Y.format,Y.colorSpace),Vt=c.convert(Y.type),re=L(Y.internalFormat,ae,Vt,Y.colorSpace),ne=r.get(E),Ct=r.get(Y);if(Ct.__renderTarget=E,!ne.__hasExternalTextures){const Dt=Math.max(1,E.width>>mt),oe=Math.max(1,E.height>>mt);Tt===s.TEXTURE_3D||Tt===s.TEXTURE_2D_ARRAY?i.texImage3D(Tt,mt,re,Dt,oe,E.depth,0,ae,Vt,null):i.texImage2D(Tt,mt,re,Dt,oe,0,ae,Vt,null)}i.bindFramebuffer(s.FRAMEBUFFER,z),ee(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,Tt,Ct.__webglTexture,0,me(E)):(Tt===s.TEXTURE_2D||Tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,Tt,Ct.__webglTexture,mt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(z,E,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,z),E.depthBuffer){const pt=E.depthTexture,Tt=pt&&pt.isDepthTexture?pt.type:null,mt=O(E.stencilBuffer,Tt),ae=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=me(E);ee(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,mt,E.width,E.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,mt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,mt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,z)}else{const pt=E.textures;for(let Tt=0;Tt<pt.length;Tt++){const mt=pt[Tt],ae=c.convert(mt.format,mt.colorSpace),Vt=c.convert(mt.type),re=L(mt.internalFormat,ae,Vt,mt.colorSpace),ne=me(E);Y&&ee(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,re,E.width,E.height):ee(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,re,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,re,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(z,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(E.depthTexture);pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ot(E.depthTexture,0);const Tt=pt.__webglTexture,mt=me(E);if(E.depthTexture.format===nl)ee(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0);else if(E.depthTexture.format===il)ee(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function he(z){const E=r.get(z),Y=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){const pt=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const Tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",Tt)};pt.addEventListener("dispose",Tt),E.__depthDisposeCallback=Tt}E.__boundDepthTexture=pt}if(z.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const pt=z.texture.mipmaps;pt&&pt.length>0?jt(E.__webglFramebuffer[0],z):jt(E.__webglFramebuffer,z)}else if(Y){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=s.createRenderbuffer(),Lt(E.__webglDepthbuffer[pt],z,!1);else{const Tt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,mt)}}else{const pt=z.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Lt(E.__webglDepthbuffer,z,!1);else{const Tt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,mt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(z,E,Y){const pt=r.get(z);E!==void 0&&Nt(pt.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&he(z)}function _e(z){const E=z.texture,Y=r.get(z),pt=r.get(E);z.addEventListener("dispose",U);const Tt=z.textures,mt=z.isWebGLCubeRenderTarget===!0,ae=Tt.length>1;if(ae||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=E.version,h.memory.textures++),mt){Y.__webglFramebuffer=[];for(let Vt=0;Vt<6;Vt++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Vt]=[];for(let re=0;re<E.mipmaps.length;re++)Y.__webglFramebuffer[Vt][re]=s.createFramebuffer()}else Y.__webglFramebuffer[Vt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Vt=0;Vt<E.mipmaps.length;Vt++)Y.__webglFramebuffer[Vt]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(ae)for(let Vt=0,re=Tt.length;Vt<re;Vt++){const ne=r.get(Tt[Vt]);ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture(),h.memory.textures++)}if(z.samples>0&&ee(z)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Vt=0;Vt<Tt.length;Vt++){const re=Tt[Vt];Y.__webglColorRenderbuffer[Vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Vt]);const ne=c.convert(re.format,re.colorSpace),Ct=c.convert(re.type),Dt=L(re.internalFormat,ne,Ct,re.colorSpace,z.isXRRenderTarget===!0),oe=me(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,Dt,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(Y.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),rt(s.TEXTURE_CUBE_MAP,E);for(let Vt=0;Vt<6;Vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)Nt(Y.__webglFramebuffer[Vt][re],z,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,re);else Nt(Y.__webglFramebuffer[Vt],z,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0);M(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ae){for(let Vt=0,re=Tt.length;Vt<re;Vt++){const ne=Tt[Vt],Ct=r.get(ne);let Dt=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Dt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,Ct.__webglTexture),rt(Dt,ne),Nt(Y.__webglFramebuffer,z,ne,s.COLOR_ATTACHMENT0+Vt,Dt,0),M(ne)&&v(Dt)}i.unbindTexture()}else{let Vt=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Vt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Vt,pt.__webglTexture),rt(Vt,E),E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)Nt(Y.__webglFramebuffer[re],z,E,s.COLOR_ATTACHMENT0,Vt,re);else Nt(Y.__webglFramebuffer,z,E,s.COLOR_ATTACHMENT0,Vt,0);M(E)&&v(Vt),i.unbindTexture()}z.depthBuffer&&he(z)}function Ge(z){const E=z.textures;for(let Y=0,pt=E.length;Y<pt;Y++){const Tt=E[Y];if(M(Tt)){const mt=N(z),ae=r.get(Tt).__webglTexture;i.bindTexture(mt,ae),v(mt),i.unbindTexture()}}}const V=[],gt=[];function ye(z){if(z.samples>0){if(ee(z)===!1){const E=z.textures,Y=z.width,pt=z.height;let Tt=s.COLOR_BUFFER_BIT;const mt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=r.get(z),Vt=E.length>1;if(Vt)for(let ne=0;ne<E.length;ne++)i.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const re=z.texture.mipmaps;re&&re.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ne=0;ne<E.length;ne++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Tt|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Tt|=s.STENCIL_BUFFER_BIT)),Vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[ne]);const Ct=r.get(E[ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ct,0)}s.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,Tt,s.NEAREST),m===!0&&(V.length=0,gt.length=0,V.push(s.COLOR_ATTACHMENT0+ne),z.depthBuffer&&z.resolveDepthBuffer===!1&&(V.push(mt),gt.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,V))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Vt)for(let ne=0;ne<E.length;ne++){i.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,ae.__webglColorRenderbuffer[ne]);const Ct=r.get(E[ne]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,Ct,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const E=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function me(z){return Math.min(l.maxSamples,z.samples)}function ee(z){const E=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function De(z){const E=h.render.frame;g.get(z)!==E&&(g.set(z,E),z.update())}function $t(z,E){const Y=z.colorSpace,pt=z.format,Tt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Y!==Ys&&Y!==hr&&(Ze.getTransfer(Y)===ln?(pt!==ji||Tt!==ra)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yn("WebGLTextures: Unsupported texture color space:",Y)),E}function de(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=q,this.setTexture2D=ot,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=ke,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=ee}function h2(s,t){function i(r,l=hr){let c;const h=Ze.getTransfer(l);if(r===ra)return s.UNSIGNED_BYTE;if(r===Od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===$g)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===tv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Qg)return s.BYTE;if(r===Jg)return s.SHORT;if(r===tl)return s.UNSIGNED_SHORT;if(r===Nd)return s.INT;if(r===qr)return s.UNSIGNED_INT;if(r===Na)return s.FLOAT;if(r===Zs)return s.HALF_FLOAT;if(r===ev)return s.ALPHA;if(r===nv)return s.RGB;if(r===ji)return s.RGBA;if(r===nl)return s.DEPTH_COMPONENT;if(r===il)return s.DEPTH_STENCIL;if(r===iv)return s.RED;if(r===zd)return s.RED_INTEGER;if(r===Id)return s.RG;if(r===Fd)return s.RG_INTEGER;if(r===Bd)return s.RGBA_INTEGER;if(r===Vc||r===kc||r===Xc||r===qc)if(h===ln)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$h||r===td||r===ed||r===nd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===$h)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===td)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ed)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===id||r===ad||r===rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===id||r===ad)return h===ln?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===rd)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===xd||r===gd||r===vd||r===_d)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===sd)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===od)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ld)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cd)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ud)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fd)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hd)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dd)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pd)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===md)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xd)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vd)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_d)return h===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yd||r===Sd||r===Md)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===yd)return h===ln?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Md)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bd||r===Ed||r===Td||r===Ad)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===bd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ed)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Td)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===el?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const d2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p2=`
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

}`;class m2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new mv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Zi({vertexShader:d2,fragmentShader:p2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bi(new Xr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x2 extends Ks{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,_=null,S=null,b=null;const A=typeof XRWebGLBinding<"u",M=new m2,v={},N=i.getContextAttributes();let L=null,O=null;const P=[],T=[],U=new Oe;let W=null;const w=new zi;w.viewport=new pn;const C=new zi;C.viewport=new pn;const H=[w,C],q=new OS;let it=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=P[J];return ft===void 0&&(ft=new Ch,P[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=P[J];return ft===void 0&&(ft=new Ch,P[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=P[J];return ft===void 0&&(ft=new Ch,P[J]=ft),ft.getHandSpace()};function ot(J){const ft=T.indexOf(J.inputSource);if(ft===-1)return;const Nt=P[ft];Nt!==void 0&&(Nt.update(J.inputSource,J.frame,p||h),Nt.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",j);for(let J=0;J<P.length;J++){const ft=T[J];ft!==null&&(T[J]=null,P[J].disconnect(ft))}it=null,ht=null,M.reset();for(const J in v)delete v[J];t.setRenderTarget(L),S=null,_=null,x=null,l=null,O=null,It.stop(),r.isPresenting=!1,t.setPixelRatio(W),t.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",F),l.addEventListener("inputsourceschange",j),N.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(U),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Lt=null,jt=null;N.depth&&(jt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Nt=N.stencil?il:nl,Lt=N.stencil?el:qr);const he={colorFormat:i.RGBA8,depthFormat:jt,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(he),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),O=new Wr(_.textureWidth,_.textureHeight,{format:ji,type:ra,depthTexture:new pv(_.textureWidth,_.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Nt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Nt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Wr(S.framebufferWidth,S.framebufferHeight,{format:ji,type:ra,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),It.setContext(l),It.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(J){for(let ft=0;ft<J.removed.length;ft++){const Nt=J.removed[ft],Lt=T.indexOf(Nt);Lt>=0&&(T[Lt]=null,P[Lt].disconnect(Nt))}for(let ft=0;ft<J.added.length;ft++){const Nt=J.added[ft];let Lt=T.indexOf(Nt);if(Lt===-1){for(let he=0;he<P.length;he++)if(he>=T.length){T.push(Nt),Lt=he;break}else if(T[he]===null){T[he]=Nt,Lt=he;break}if(Lt===-1)break}const jt=P[Lt];jt&&jt.connect(Nt)}}const Z=new dt,yt=new dt;function Mt(J,ft,Nt){Z.setFromMatrixPosition(ft.matrixWorld),yt.setFromMatrixPosition(Nt.matrixWorld);const Lt=Z.distanceTo(yt),jt=ft.projectionMatrix.elements,he=Nt.projectionMatrix.elements,ke=jt[14]/(jt[10]-1),_e=jt[14]/(jt[10]+1),Ge=(jt[9]+1)/jt[5],V=(jt[9]-1)/jt[5],gt=(jt[8]-1)/jt[0],ye=(he[8]+1)/he[0],me=ke*gt,ee=ke*ye,De=Lt/(-gt+ye),$t=De*-gt;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($t),J.translateZ(De),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),jt[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const de=ke+De,z=_e+De,E=me-$t,Y=ee+(Lt-$t),pt=Ge*_e/z*de,Tt=V*_e/z*de;J.projectionMatrix.makePerspective(E,Y,pt,Tt,de,z),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function I(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ft=J.near,Nt=J.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(Nt=M.depthFar)),q.near=C.near=w.near=ft,q.far=C.far=w.far=Nt,(it!==q.near||ht!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),it=q.near,ht=q.far),q.layers.mask=J.layers.mask|6,w.layers.mask=q.layers.mask&3,C.layers.mask=q.layers.mask&5;const Lt=J.parent,jt=q.cameras;I(q,Lt);for(let he=0;he<jt.length;he++)I(jt[he],Lt);jt.length===2?Mt(q,w,C):q.projectionMatrix.copy(w.projectionMatrix),rt(J,q,Lt)};function rt(J,ft,Nt){Nt===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(Nt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=sl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(J){m=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(J){return v[J]};let tt=null;function St(J,ft){if(g=ft.getViewerPose(p||h),b=ft,g!==null){const Nt=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let Lt=!1;Nt.length!==q.cameras.length&&(q.cameras.length=0,Lt=!0);for(let _e=0;_e<Nt.length;_e++){const Ge=Nt[_e];let V=null;if(S!==null)V=S.getViewport(Ge);else{const ye=x.getViewSubImage(_,Ge);V=ye.viewport,_e===0&&(t.setRenderTargetTextures(O,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(O))}let gt=H[_e];gt===void 0&&(gt=new zi,gt.layers.enable(_e),gt.viewport=new pn,H[_e]=gt),gt.matrix.fromArray(Ge.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Ge.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(V.x,V.y,V.width,V.height),_e===0&&(q.matrix.copy(gt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Lt===!0&&q.cameras.push(gt)}const jt=l.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const _e=x.getDepthInformation(Nt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,l.renderState)}if(jt&&jt.includes("camera-access")&&A){t.state.unbindTexture(),x=r.getBinding();for(let _e=0;_e<Nt.length;_e++){const Ge=Nt[_e].camera;if(Ge){let V=v[Ge];V||(V=new mv,v[Ge]=V);const gt=x.getCameraImage(Ge);V.sourceTexture=gt}}}}for(let Nt=0;Nt<P.length;Nt++){const Lt=T[Nt],jt=P[Nt];Lt!==null&&jt!==void 0&&jt.update(Lt,ft,p||h)}tt&&tt(J,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),b=null}const It=new vv;It.setAnimationLoop(St),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const Br=new sa,g2=new mn;function v2(s,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,fv(s)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,N,L,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),x(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),_(M,v),v.isMeshPhysicalMaterial&&S(M,v,O)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),A(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,N,L):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===di&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===di&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const N=t.get(v),L=N.envMap,O=N.envMapRotation;L&&(M.envMap.value=L,Br.copy(O),Br.x*=-1,Br.y*=-1,Br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),M.envMapRotation.value.setFromMatrix4(g2.makeRotationFromEuler(Br)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,N,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*N,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,N){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===di&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function A(M,v){const N=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function _2(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const O=L.program;r.uniformBlockBinding(N,O)}function p(N,L){let O=l[N.id];O===void 0&&(b(N),O=g(N),l[N.id]=O,N.addEventListener("dispose",M));const P=L.program;r.updateUBOMapping(N,P);const T=t.render.frame;c[N.id]!==T&&(_(N),c[N.id]=T)}function g(N){const L=x();N.__bindingPointIndex=L;const O=s.createBuffer(),P=N.__size,T=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,O),O}function x(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return yn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const L=l[N.id],O=N.uniforms,P=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let T=0,U=O.length;T<U;T++){const W=Array.isArray(O[T])?O[T]:[O[T]];for(let w=0,C=W.length;w<C;w++){const H=W[w];if(S(H,T,w,P)===!0){const q=H.__offset,it=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let ot=0;ot<it.length;ot++){const F=it[ot],j=A(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,q+ht,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ht),ht+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,L,O,P){const T=N.value,U=L+"_"+O;if(P[U]===void 0)return typeof T=="number"||typeof T=="boolean"?P[U]=T:P[U]=T.clone(),!0;{const W=P[U];if(typeof T=="number"||typeof T=="boolean"){if(W!==T)return P[U]=T,!0}else if(W.equals(T)===!1)return W.copy(T),!0}return!1}function b(N){const L=N.uniforms;let O=0;const P=16;for(let U=0,W=L.length;U<W;U++){const w=Array.isArray(L[U])?L[U]:[L[U]];for(let C=0,H=w.length;C<H;C++){const q=w[C],it=Array.isArray(q.value)?q.value:[q.value];for(let ht=0,ot=it.length;ht<ot;ht++){const F=it[ht],j=A(F),Z=O%P,yt=Z%j.boundary,Mt=Z+yt;O+=yt,Mt!==0&&P-Mt<j.storage&&(O+=P-Mt),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=O,O+=j.storage}}}const T=O%P;return T>0&&(O+=P-T),N.__size=O,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Te("WebGLRenderer: Unsupported uniform value type.",N),L}function M(N){const L=N.target;L.removeEventListener("dispose",M);const O=h.indexOf(L.__bindingPointIndex);h.splice(O,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const N in l)s.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const y2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let wa=null;function S2(){return wa===null&&(wa=new vS(y2,32,32,Id,Zs),wa.minFilter=Ii,wa.magFilter=Ii,wa.wrapS=La,wa.wrapT=La,wa.generateMipmaps=!1,wa.needsUpdate=!0),wa}class M2{constructor(t={}){const{canvas:i=w1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const b=new Set([Bd,Fd,zd]),A=new Set([ra,qr,tl,el,Od,Pd]),M=new Uint32Array(4),v=new Int32Array(4);let N=null,L=null;const O=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=Pi;let W=0,w=0,C=null,H=-1,q=null;const it=new pn,ht=new pn;let ot=null;const F=new We(0);let j=0,Z=i.width,yt=i.height,Mt=1,I=null,rt=null;const tt=new pn(0,0,Z,yt),St=new pn(0,0,Z,yt);let It=!1;const J=new qd;let ft=!1,Nt=!1;const Lt=new mn,jt=new dt,he=new pn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Ge(){return C===null?Mt:1}let V=r;function gt(D,K){return i.getContext(D,K)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ld}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",Jt,!1),V===null){const K="webgl2";if(V=gt(K,D),V===null)throw gt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw D("WebGLRenderer: "+D.message),D}let ye,me,ee,De,$t,de,z,E,Y,pt,Tt,mt,ae,Vt,re,ne,Ct,Dt,oe,Qt,Yt,ce,k,Ht;function Ot(){ye=new D3(V),ye.init(),ce=new h2(V,ye),me=new S3(V,ye,t,ce),ee=new u2(V,ye),me.reversedDepthBuffer&&_&&ee.buffers.depth.setReversed(!0),De=new N3(V),$t=new QE,de=new f2(V,ye,ee,$t,me,ce,De),z=new b3(T),E=new w3(T),Y=new IS(V),k=new _3(V,Y),pt=new U3(V,Y,De,k),Tt=new P3(V,pt,Y,De),oe=new O3(V,me,de),ne=new M3($t),mt=new KE(T,z,E,ye,me,k,ne),ae=new v2(T,$t),Vt=new $E,re=new r2(ye),Dt=new v3(T,z,E,ee,Tt,S,m),Ct=new l2(T,Tt,me),Ht=new _2(V,De,me,ee),Qt=new y3(V,ye,De),Yt=new L3(V,ye,De),De.programs=mt.programs,T.capabilities=me,T.extensions=ye,T.properties=$t,T.renderLists=Vt,T.shadowMap=Ct,T.state=ee,T.info=De}Ot();const Pt=new x2(T,V);this.xr=Pt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=ye.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ye.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(D){D!==void 0&&(Mt=D,this.setSize(Z,yt,!1))},this.getSize=function(D){return D.set(Z,yt)},this.setSize=function(D,K,ut=!0){if(Pt.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=D,yt=K,i.width=Math.floor(D*Mt),i.height=Math.floor(K*Mt),ut===!0&&(i.style.width=D+"px",i.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(Z*Mt,yt*Mt).floor()},this.setDrawingBufferSize=function(D,K,ut){Z=D,yt=K,Mt=ut,i.width=Math.floor(D*ut),i.height=Math.floor(K*ut),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(it)},this.getViewport=function(D){return D.copy(tt)},this.setViewport=function(D,K,ut,et){D.isVector4?tt.set(D.x,D.y,D.z,D.w):tt.set(D,K,ut,et),ee.viewport(it.copy(tt).multiplyScalar(Mt).round())},this.getScissor=function(D){return D.copy(St)},this.setScissor=function(D,K,ut,et){D.isVector4?St.set(D.x,D.y,D.z,D.w):St.set(D,K,ut,et),ee.scissor(ht.copy(St).multiplyScalar(Mt).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(D){ee.setScissorTest(It=D)},this.setOpaqueSort=function(D){I=D},this.setTransparentSort=function(D){rt=D},this.getClearColor=function(D){return D.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,ut=!0){let et=0;if(D){let $=!1;if(C!==null){const Ft=C.texture.format;$=b.has(Ft)}if($){const Ft=C.texture.type,qt=A.has(Ft),Wt=Dt.getClearColor(),Kt=Dt.getClearAlpha(),ue=Wt.r,G=Wt.g,lt=Wt.b;qt?(M[0]=ue,M[1]=G,M[2]=lt,M[3]=Kt,V.clearBufferuiv(V.COLOR,0,M)):(v[0]=ue,v[1]=G,v[2]=lt,v[3]=Kt,V.clearBufferiv(V.COLOR,0,v))}else et|=V.COLOR_BUFFER_BIT}K&&(et|=V.DEPTH_BUFFER_BIT),ut&&(et|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",Jt,!1),Dt.dispose(),Vt.dispose(),re.dispose(),$t.dispose(),z.dispose(),E.dispose(),Tt.dispose(),k.dispose(),Ht.dispose(),mt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Qn),Pt.removeEventListener("sessionend",za),ai.stop()};function Ut(D){D.preventDefault(),Xx("WebGLRenderer: Context Lost."),U=!0}function bt(){Xx("WebGLRenderer: Context Restored."),U=!1;const D=De.autoReset,K=Ct.enabled,ut=Ct.autoUpdate,et=Ct.needsUpdate,$=Ct.type;Ot(),De.autoReset=D,Ct.enabled=K,Ct.autoUpdate=ut,Ct.needsUpdate=et,Ct.type=$}function Jt(D){yn("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function xe(D){const K=D.target;K.removeEventListener("dispose",xe),Xe(K)}function Xe(D){Ie(D),$t.remove(D)}function Ie(D){const K=$t.get(D).programs;K!==void 0&&(K.forEach(function(ut){mt.releaseProgram(ut)}),D.isShaderMaterial&&mt.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ut,et,$,Ft){K===null&&(K=ke);const qt=$.isMesh&&$.matrixWorld.determinant()<0,Wt=jr(D,K,ut,et,$);ee.setMaterial(et,qt);let Kt=ut.index,ue=1;if(et.wireframe===!0){if(Kt=pt.getWireframeAttribute(ut),Kt===void 0)return;ue=2}const G=ut.drawRange,lt=ut.attributes.position;let vt=G.start*ue,kt=(G.start+G.count)*ue;Ft!==null&&(vt=Math.max(vt,Ft.start*ue),kt=Math.min(kt,(Ft.start+Ft.count)*ue)),Kt!==null?(vt=Math.max(vt,0),kt=Math.min(kt,Kt.count)):lt!=null&&(vt=Math.max(vt,0),kt=Math.min(kt,lt.count));const zt=kt-vt;if(zt<0||zt===1/0)return;k.setup($,et,Wt,ut,Kt);let wt,Bt=Qt;if(Kt!==null&&(wt=Y.get(Kt),Bt=Yt,Bt.setIndex(wt)),$.isMesh)et.wireframe===!0?(ee.setLineWidth(et.wireframeLinewidth*Ge()),Bt.setMode(V.LINES)):Bt.setMode(V.TRIANGLES);else if($.isLine){let At=et.linewidth;At===void 0&&(At=1),ee.setLineWidth(At*Ge()),$.isLineSegments?Bt.setMode(V.LINES):$.isLineLoop?Bt.setMode(V.LINE_LOOP):Bt.setMode(V.LINE_STRIP)}else $.isPoints?Bt.setMode(V.POINTS):$.isSprite&&Bt.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Bt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const At=$._multiDrawStarts,se=$._multiDrawCounts,te=$._multiDrawCount,Se=Kt?Y.get(Kt).bytesPerElement:1,nt=$t.get(et).currentProgram.getUniforms();for(let Xt=0;Xt<te;Xt++)nt.setValue(V,"_gl_DrawID",Xt),Bt.render(At[Xt]/Se,se[Xt])}else if($.isInstancedMesh)Bt.renderInstances(vt,zt,$.count);else if(ut.isInstancedBufferGeometry){const At=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,se=Math.min(ut.instanceCount,At);Bt.renderInstances(vt,zt,se)}else Bt.render(vt,zt)};function bn(D,K,ut){D.transparent===!0&&D.side===na&&D.forceSinglePass===!1?(D.side=di,D.needsUpdate=!0,gn(D,K,ut),D.side=mr,D.needsUpdate=!0,gn(D,K,ut),D.side=na):gn(D,K,ut)}this.compile=function(D,K,ut=null){ut===null&&(ut=D),L=re.get(ut),L.init(K),P.push(L),ut.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),D!==ut&&D.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),L.setupLights();const et=new Set;return D.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ft=$.material;if(Ft)if(Array.isArray(Ft))for(let qt=0;qt<Ft.length;qt++){const Wt=Ft[qt];bn(Wt,ut,$),et.add(Wt)}else bn(Ft,ut,$),et.add(Ft)}),L=P.pop(),et},this.compileAsync=function(D,K,ut=null){const et=this.compile(D,K,ut);return new Promise($=>{function Ft(){if(et.forEach(function(qt){$t.get(qt).currentProgram.isReady()&&et.delete(qt)}),et.size===0){$(D);return}setTimeout(Ft,10)}ye.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Xn=null;function Yr(D){Xn&&Xn(D)}function Qn(){ai.stop()}function za(){ai.start()}const ai=new vv;ai.setAnimationLoop(Yr),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(D){Xn=D,Pt.setAnimationLoop(D),D===null?ai.stop():ai.start()},Pt.addEventListener("sessionstart",Qn),Pt.addEventListener("sessionend",za),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){yn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(K),K=Pt.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,K,C),L=re.get(D,P.length),L.init(K),P.push(L),Lt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),J.setFromProjectionMatrix(Lt,ia,K.reversedDepth),Nt=this.localClippingEnabled,ft=ne.init(this.clippingPlanes,Nt),N=Vt.get(D,O.length),N.init(),O.push(N),Pt.enabled===!0&&Pt.isPresenting===!0){const Ft=T.xr.getDepthSensingMesh();Ft!==null&&Jn(Ft,K,-1/0,T.sortObjects)}Jn(D,K,0,T.sortObjects),N.finish(),T.sortObjects===!0&&N.sort(I,rt),_e=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,_e&&Dt.addToRenderList(N,D),this.info.render.frame++,ft===!0&&ne.beginShadows();const ut=L.state.shadowsArray;Ct.render(ut,D,K),ft===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=N.opaque,$=N.transmissive;if(L.setupLights(),K.isArrayCamera){const Ft=K.cameras;if($.length>0)for(let qt=0,Wt=Ft.length;qt<Wt;qt++){const Kt=Ft[qt];xr(et,$,D,Kt)}_e&&Dt.render(D);for(let qt=0,Wt=Ft.length;qt<Wt;qt++){const Kt=Ft[qt];Ki(N,D,Kt,Kt.viewport)}}else $.length>0&&xr(et,$,D,K),_e&&Dt.render(D),Ki(N,D,K);C!==null&&w===0&&(de.updateMultisampleRenderTarget(C),de.updateRenderTargetMipmap(C)),D.isScene===!0&&D.onAfterRender(T,D,K),k.resetDefaultState(),H=-1,q=null,P.pop(),P.length>0?(L=P[P.length-1],ft===!0&&ne.setGlobalState(T.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?N=O[O.length-1]:N=null};function Jn(D,K,ut,et){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ut=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)L.pushLight(D),D.castShadow&&L.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||J.intersectsSprite(D)){et&&he.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Lt);const qt=Tt.update(D),Wt=D.material;Wt.visible&&N.push(D,qt,Wt,ut,he.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||J.intersectsObject(D))){const qt=Tt.update(D),Wt=D.material;if(et&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),he.copy(D.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),he.copy(qt.boundingSphere.center)),he.applyMatrix4(D.matrixWorld).applyMatrix4(Lt)),Array.isArray(Wt)){const Kt=qt.groups;for(let ue=0,G=Kt.length;ue<G;ue++){const lt=Kt[ue],vt=Wt[lt.materialIndex];vt&&vt.visible&&N.push(D,qt,vt,ut,he.z,lt)}}else Wt.visible&&N.push(D,qt,Wt,ut,he.z,null)}}const Ft=D.children;for(let qt=0,Wt=Ft.length;qt<Wt;qt++)Jn(Ft[qt],K,ut,et)}function Ki(D,K,ut,et){const{opaque:$,transmissive:Ft,transparent:qt}=D;L.setupLightsView(ut),ft===!0&&ne.setGlobalState(T.clippingPlanes,ut),et&&ee.viewport(it.copy(et)),$.length>0&&Ke($,K,ut),Ft.length>0&&Ke(Ft,K,ut),qt.length>0&&Ke(qt,K,ut),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function xr(D,K,ut,et){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[et.id]===void 0&&(L.state.transmissionRenderTarget[et.id]=new Wr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Zs:ra,minFilter:kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const Ft=L.state.transmissionRenderTarget[et.id],qt=et.viewport||it;Ft.setSize(qt.z*T.transmissionResolutionScale,qt.w*T.transmissionResolutionScale);const Wt=T.getRenderTarget(),Kt=T.getActiveCubeFace(),ue=T.getActiveMipmapLevel();T.setRenderTarget(Ft),T.getClearColor(F),j=T.getClearAlpha(),j<1&&T.setClearColor(16777215,.5),T.clear(),_e&&Dt.render(ut);const G=T.toneMapping;T.toneMapping=pr;const lt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),L.setupLightsView(et),ft===!0&&ne.setGlobalState(T.clippingPlanes,et),Ke(D,ut,et),de.updateMultisampleRenderTarget(Ft),de.updateRenderTargetMipmap(Ft),ye.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let kt=0,zt=K.length;kt<zt;kt++){const wt=K[kt],{object:Bt,geometry:At,material:se,group:te}=wt;if(se.side===na&&Bt.layers.test(et.layers)){const Se=se.side;se.side=di,se.needsUpdate=!0,xn(Bt,ut,et,At,se,te),se.side=Se,se.needsUpdate=!0,vt=!0}}vt===!0&&(de.updateMultisampleRenderTarget(Ft),de.updateRenderTargetMipmap(Ft))}T.setRenderTarget(Wt,Kt,ue),T.setClearColor(F,j),lt!==void 0&&(et.viewport=lt),T.toneMapping=G}function Ke(D,K,ut){const et=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Ft=D.length;$<Ft;$++){const qt=D[$],{object:Wt,geometry:Kt,group:ue}=qt;let G=qt.material;G.allowOverride===!0&&et!==null&&(G=et),Wt.layers.test(ut.layers)&&xn(Wt,K,ut,Kt,G,ue)}}function xn(D,K,ut,et,$,Ft){D.onBeforeRender(T,K,ut,et,$,Ft),D.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(T,K,ut,et,D,Ft),$.transparent===!0&&$.side===na&&$.forceSinglePass===!1?($.side=di,$.needsUpdate=!0,T.renderBufferDirect(ut,K,et,$,D,Ft),$.side=mr,$.needsUpdate=!0,T.renderBufferDirect(ut,K,et,$,D,Ft),$.side=na):T.renderBufferDirect(ut,K,et,$,D,Ft),D.onAfterRender(T,K,ut,et,$,Ft)}function gn(D,K,ut){K.isScene!==!0&&(K=ke);const et=$t.get(D),$=L.state.lights,Ft=L.state.shadowsArray,qt=$.state.version,Wt=mt.getParameters(D,$.state,Ft,K,ut),Kt=mt.getProgramCacheKey(Wt);let ue=et.programs;et.environment=D.isMeshStandardMaterial?K.environment:null,et.fog=K.fog,et.envMap=(D.isMeshStandardMaterial?E:z).get(D.envMap||et.environment),et.envMapRotation=et.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,ue===void 0&&(D.addEventListener("dispose",xe),ue=new Map,et.programs=ue);let G=ue.get(Kt);if(G!==void 0){if(et.currentProgram===G&&et.lightsStateVersion===qt)return oa(D,Wt),G}else Wt.uniforms=mt.getUniforms(D),D.onBeforeCompile(Wt,T),G=mt.acquireProgram(Wt,Kt),ue.set(Kt,G),et.uniforms=Wt.uniforms;const lt=et.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(lt.clippingPlanes=ne.uniform),oa(D,Wt),et.needsLights=gr(D),et.lightsStateVersion=qt,et.needsLights&&(lt.ambientLightColor.value=$.state.ambient,lt.lightProbe.value=$.state.probe,lt.directionalLights.value=$.state.directional,lt.directionalLightShadows.value=$.state.directionalShadow,lt.spotLights.value=$.state.spot,lt.spotLightShadows.value=$.state.spotShadow,lt.rectAreaLights.value=$.state.rectArea,lt.ltc_1.value=$.state.rectAreaLTC1,lt.ltc_2.value=$.state.rectAreaLTC2,lt.pointLights.value=$.state.point,lt.pointLightShadows.value=$.state.pointShadow,lt.hemisphereLights.value=$.state.hemi,lt.directionalShadowMap.value=$.state.directionalShadowMap,lt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,lt.spotShadowMap.value=$.state.spotShadowMap,lt.spotLightMatrix.value=$.state.spotLightMatrix,lt.spotLightMap.value=$.state.spotLightMap,lt.pointShadowMap.value=$.state.pointShadowMap,lt.pointShadowMatrix.value=$.state.pointShadowMatrix),et.currentProgram=G,et.uniformsList=null,G}function Bi(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=Wc.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function oa(D,K){const ut=$t.get(D);ut.outputColorSpace=K.outputColorSpace,ut.batching=K.batching,ut.batchingColor=K.batchingColor,ut.instancing=K.instancing,ut.instancingColor=K.instancingColor,ut.instancingMorph=K.instancingMorph,ut.skinning=K.skinning,ut.morphTargets=K.morphTargets,ut.morphNormals=K.morphNormals,ut.morphColors=K.morphColors,ut.morphTargetsCount=K.morphTargetsCount,ut.numClippingPlanes=K.numClippingPlanes,ut.numIntersection=K.numClipIntersection,ut.vertexAlphas=K.vertexAlphas,ut.vertexTangents=K.vertexTangents,ut.toneMapping=K.toneMapping}function jr(D,K,ut,et,$){K.isScene!==!0&&(K=ke),de.resetTextureUnits();const Ft=K.fog,qt=et.isMeshStandardMaterial?K.environment:null,Wt=C===null?T.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ys,Kt=(et.isMeshStandardMaterial?E:z).get(et.envMap||qt),ue=et.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,G=!!ut.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),lt=!!ut.morphAttributes.position,vt=!!ut.morphAttributes.normal,kt=!!ut.morphAttributes.color;let zt=pr;et.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(zt=T.toneMapping);const wt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Bt=wt!==void 0?wt.length:0,At=$t.get(et),se=L.state.lights;if(ft===!0&&(Nt===!0||D!==q)){const Ae=D===q&&et.id===H;ne.setState(et,D,Ae)}let te=!1;et.version===At.__version?(At.needsLights&&At.lightsStateVersion!==se.state.version||At.outputColorSpace!==Wt||$.isBatchedMesh&&At.batching===!1||!$.isBatchedMesh&&At.batching===!0||$.isBatchedMesh&&At.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&At.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&At.instancing===!1||!$.isInstancedMesh&&At.instancing===!0||$.isSkinnedMesh&&At.skinning===!1||!$.isSkinnedMesh&&At.skinning===!0||$.isInstancedMesh&&At.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&At.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&At.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&At.instancingMorph===!1&&$.morphTexture!==null||At.envMap!==Kt||et.fog===!0&&At.fog!==Ft||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==ne.numPlanes||At.numIntersection!==ne.numIntersection)||At.vertexAlphas!==ue||At.vertexTangents!==G||At.morphTargets!==lt||At.morphNormals!==vt||At.morphColors!==kt||At.toneMapping!==zt||At.morphTargetsCount!==Bt)&&(te=!0):(te=!0,At.__version=et.version);let Se=At.currentProgram;te===!0&&(Se=gn(et,K,$));let nt=!1,Xt=!1,Me=!1;const ge=Se.getUniforms(),ve=At.uniforms;if(ee.useProgram(Se.program)&&(nt=!0,Xt=!0,Me=!0),et.id!==H&&(H=et.id,Xt=!0),nt||q!==D){ee.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ge.setValue(V,"projectionMatrix",D.projectionMatrix),ge.setValue(V,"viewMatrix",D.matrixWorldInverse);const tn=ge.map.cameraPosition;tn!==void 0&&tn.setValue(V,jt.setFromMatrixPosition(D.matrixWorld)),me.logarithmicDepthBuffer&&ge.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ge.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),q!==D&&(q=D,Xt=!0,Me=!0)}if($.isSkinnedMesh){ge.setOptional(V,$,"bindMatrix"),ge.setOptional(V,$,"bindMatrixInverse");const Ae=$.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ge.setValue(V,"boneTexture",Ae.boneTexture,de))}$.isBatchedMesh&&(ge.setOptional(V,$,"batchingTexture"),ge.setValue(V,"batchingTexture",$._matricesTexture,de),ge.setOptional(V,$,"batchingIdTexture"),ge.setValue(V,"batchingIdTexture",$._indirectTexture,de),ge.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&ge.setValue(V,"batchingColorTexture",$._colorsTexture,de));const qe=ut.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&oe.update($,ut,Se),(Xt||At.receiveShadow!==$.receiveShadow)&&(At.receiveShadow=$.receiveShadow,ge.setValue(V,"receiveShadow",$.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(ve.envMap.value=Kt,ve.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&K.environment!==null&&(ve.envMapIntensity.value=K.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=S2()),Xt&&(ge.setValue(V,"toneMappingExposure",T.toneMappingExposure),At.needsLights&&Zr(ve,Me),Ft&&et.fog===!0&&ae.refreshFogUniforms(ve,Ft),ae.refreshMaterialUniforms(ve,et,Mt,yt,L.state.transmissionRenderTarget[D.id]),Wc.upload(V,Bi(At),ve,de)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Wc.upload(V,Bi(At),ve,de),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ge.setValue(V,"center",$.center),ge.setValue(V,"modelViewMatrix",$.modelViewMatrix),ge.setValue(V,"normalMatrix",$.normalMatrix),ge.setValue(V,"modelMatrix",$.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Ae=et.uniformsGroups;for(let tn=0,Qe=Ae.length;tn<Qe;tn++){const an=Ae[tn];Ht.update(an,Se),Ht.bind(an,Se)}}return Se}function Zr(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function gr(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(D,K,ut){const et=$t.get(D);et.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),$t.get(D.texture).__webglTexture=K,$t.get(D.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:ut,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,K){const ut=$t.get(D);ut.__webglFramebuffer=K,ut.__useDefaultFramebuffer=K===void 0};const ri=V.createFramebuffer();this.setRenderTarget=function(D,K=0,ut=0){C=D,W=K,w=ut;let et=!0,$=null,Ft=!1,qt=!1;if(D){const Kt=$t.get(D);if(Kt.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(V.FRAMEBUFFER,null),et=!1;else if(Kt.__webglFramebuffer===void 0)de.setupRenderTarget(D);else if(Kt.__hasExternalTextures)de.rebindTextures(D,$t.get(D.texture).__webglTexture,$t.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const lt=D.depthTexture;if(Kt.__boundDepthTexture!==lt){if(lt!==null&&$t.has(lt)&&(D.width!==lt.image.width||D.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(D)}}const ue=D.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(qt=!0);const G=$t.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(G[K])?$=G[K][ut]:$=G[K],Ft=!0):D.samples>0&&de.useMultisampledRTT(D)===!1?$=$t.get(D).__webglMultisampledFramebuffer:Array.isArray(G)?$=G[ut]:$=G,it.copy(D.viewport),ht.copy(D.scissor),ot=D.scissorTest}else it.copy(tt).multiplyScalar(Mt).floor(),ht.copy(St).multiplyScalar(Mt).floor(),ot=It;if(ut!==0&&($=ri),ee.bindFramebuffer(V.FRAMEBUFFER,$)&&et&&ee.drawBuffers(D,$),ee.viewport(it),ee.scissor(ht),ee.setScissorTest(ot),Ft){const Kt=$t.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Kt.__webglTexture,ut)}else if(qt){const Kt=K;for(let ue=0;ue<D.textures.length;ue++){const G=$t.get(D.textures[ue]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ue,G.__webglTexture,ut,Kt)}}else if(D!==null&&ut!==0){const Kt=$t.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Kt.__webglTexture,ut)}H=-1},this.readRenderTargetPixels=function(D,K,ut,et,$,Ft,qt,Wt=0){if(!(D&&D.isWebGLRenderTarget)){yn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=$t.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt){ee.bindFramebuffer(V.FRAMEBUFFER,Kt);try{const ue=D.textures[Wt],G=ue.format,lt=ue.type;if(!me.textureFormatReadable(G)){yn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(lt)){yn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-et&&ut>=0&&ut<=D.height-$&&(D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Wt),V.readPixels(K,ut,et,$,ce.convert(G),ce.convert(lt),Ft))}finally{const ue=C!==null?$t.get(C).__webglFramebuffer:null;ee.bindFramebuffer(V.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(D,K,ut,et,$,Ft,qt,Wt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=$t.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt)if(K>=0&&K<=D.width-et&&ut>=0&&ut<=D.height-$){ee.bindFramebuffer(V.FRAMEBUFFER,Kt);const ue=D.textures[Wt],G=ue.format,lt=ue.type;if(!me.textureFormatReadable(G))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,vt),V.bufferData(V.PIXEL_PACK_BUFFER,Ft.byteLength,V.STREAM_READ),D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Wt),V.readPixels(K,ut,et,$,ce.convert(G),ce.convert(lt),0);const kt=C!==null?$t.get(C).__webglFramebuffer:null;ee.bindFramebuffer(V.FRAMEBUFFER,kt);const zt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await D1(V,zt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,vt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ft),V.deleteBuffer(vt),V.deleteSync(zt),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,K=null,ut=0){const et=Math.pow(2,-ut),$=Math.floor(D.image.width*et),Ft=Math.floor(D.image.height*et),qt=K!==null?K.x:0,Wt=K!==null?K.y:0;de.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,ut,0,0,qt,Wt,$,Ft),ee.unbindTexture()};const qn=V.createFramebuffer(),Ti=V.createFramebuffer();this.copyTextureToTexture=function(D,K,ut=null,et=null,$=0,Ft=null){Ft===null&&($!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ft=$,$=0):Ft=0);let qt,Wt,Kt,ue,G,lt,vt,kt,zt;const wt=D.isCompressedTexture?D.mipmaps[Ft]:D.image;if(ut!==null)qt=ut.max.x-ut.min.x,Wt=ut.max.y-ut.min.y,Kt=ut.isBox3?ut.max.z-ut.min.z:1,ue=ut.min.x,G=ut.min.y,lt=ut.isBox3?ut.min.z:0;else{const qe=Math.pow(2,-$);qt=Math.floor(wt.width*qe),Wt=Math.floor(wt.height*qe),D.isDataArrayTexture?Kt=wt.depth:D.isData3DTexture?Kt=Math.floor(wt.depth*qe):Kt=1,ue=0,G=0,lt=0}et!==null?(vt=et.x,kt=et.y,zt=et.z):(vt=0,kt=0,zt=0);const Bt=ce.convert(K.format),At=ce.convert(K.type);let se;K.isData3DTexture?(de.setTexture3D(K,0),se=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(de.setTexture2DArray(K,0),se=V.TEXTURE_2D_ARRAY):(de.setTexture2D(K,0),se=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const te=V.getParameter(V.UNPACK_ROW_LENGTH),Se=V.getParameter(V.UNPACK_IMAGE_HEIGHT),nt=V.getParameter(V.UNPACK_SKIP_PIXELS),Xt=V.getParameter(V.UNPACK_SKIP_ROWS),Me=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,wt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,wt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ue),V.pixelStorei(V.UNPACK_SKIP_ROWS,G),V.pixelStorei(V.UNPACK_SKIP_IMAGES,lt);const ge=D.isDataArrayTexture||D.isData3DTexture,ve=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const qe=$t.get(D),Ae=$t.get(K),tn=$t.get(qe.__renderTarget),Qe=$t.get(Ae.__renderTarget);ee.bindFramebuffer(V.READ_FRAMEBUFFER,tn.__webglFramebuffer),ee.bindFramebuffer(V.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let an=0;an<Kt;an++)ge&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$t.get(D).__webglTexture,$,lt+an),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$t.get(K).__webglTexture,Ft,zt+an)),V.blitFramebuffer(ue,G,qt,Wt,vt,kt,qt,Wt,V.DEPTH_BUFFER_BIT,V.NEAREST);ee.bindFramebuffer(V.READ_FRAMEBUFFER,null),ee.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||D.isRenderTargetTexture||$t.has(D)){const qe=$t.get(D),Ae=$t.get(K);ee.bindFramebuffer(V.READ_FRAMEBUFFER,qn),ee.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ti);for(let tn=0;tn<Kt;tn++)ge?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.__webglTexture,$,lt+tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,qe.__webglTexture,$),ve?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ae.__webglTexture,Ft,zt+tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,Ft),$!==0?V.blitFramebuffer(ue,G,qt,Wt,vt,kt,qt,Wt,V.COLOR_BUFFER_BIT,V.NEAREST):ve?V.copyTexSubImage3D(se,Ft,vt,kt,zt+tn,ue,G,qt,Wt):V.copyTexSubImage2D(se,Ft,vt,kt,ue,G,qt,Wt);ee.bindFramebuffer(V.READ_FRAMEBUFFER,null),ee.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ve?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(se,Ft,vt,kt,zt,qt,Wt,Kt,Bt,At,wt.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(se,Ft,vt,kt,zt,qt,Wt,Kt,Bt,wt.data):V.texSubImage3D(se,Ft,vt,kt,zt,qt,Wt,Kt,Bt,At,wt):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ft,vt,kt,qt,Wt,Bt,At,wt.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ft,vt,kt,wt.width,wt.height,Bt,wt.data):V.texSubImage2D(V.TEXTURE_2D,Ft,vt,kt,qt,Wt,Bt,At,wt);V.pixelStorei(V.UNPACK_ROW_LENGTH,te),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Se),V.pixelStorei(V.UNPACK_SKIP_PIXELS,nt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Xt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Me),Ft===0&&K.generateMipmaps&&V.generateMipmap(se),ee.unbindTexture()},this.initRenderTarget=function(D){$t.get(D).__webglFramebuffer===void 0&&de.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?de.setTextureCube(D,0):D.isData3DTexture?de.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?de.setTexture2DArray(D,0):de.setTexture2D(D,0),ee.unbindTexture()},this.resetState=function(){W=0,w=0,C=null,ee.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ze._getUnpackColorSpace()}}const b2="/assets/pocket-cursors-v1-B1Sz7Rnk.webp",E2="/assets/pocket-extras-v2-D7L4gYeN.webp",T2="/assets/pocket-hidden-lake-v1-mno8U5AX.webp",A2="/assets/pocket-moon-ground-v1-CfpURW-p.webp",R2="/assets/pocket-person-frames-v1-Dr4Rny-F.webp",C2="/assets/pocket-planet-background-v1-Ba89v4Vn.webp",w2="/assets/pocket-walk-16-v2-Czh7WAjV.webp",D2="/assets/sky-keepsakes-v1-Bdkon1T6.webp",U2="/assets/yellow-paper-v1-Cz84w2fj.webp",Da=Object.freeze({cursors:b2,extras:E2,hiddenSky:T2,terrain:A2,poses:R2,sky:C2,walk:w2,keepsakes:D2,paper:U2});function Bg(s=!1){const t=document.createElement("canvas");t.width=t.height=40;const i=t.getContext("2d");return i&&(i.save(),i.translate(20,20),i.rotate(-.12),i.fillStyle="#f6cd62",i.strokeStyle="#5e442f",i.lineWidth=2.25,i.lineJoin="round",i.lineCap="round",i.shadowColor="rgba(54,33,63,.24)",i.shadowBlur=1.6,i.shadowOffsetY=1,i.beginPath(),s?(i.moveTo(-12,11),i.quadraticCurveTo(-15,5,-14,0),i.lineTo(-9,-7),i.quadraticCurveTo(-8,-11,-4,-12),i.lineTo(8,-12),i.quadraticCurveTo(14,-11,14,-6),i.lineTo(14,7),i.quadraticCurveTo(13,16,5,19),i.lineTo(-5,19),i.quadraticCurveTo(-10,18,-12,11),i.closePath(),i.fill(),i.stroke(),i.beginPath(),i.moveTo(-12,1),i.quadraticCurveTo(-8,0,-5,4),i.lineTo(-1,9),i.quadraticCurveTo(1,12,4,10),i.lineTo(11,4),i.stroke()):(i.moveTo(-10,15),i.quadraticCurveTo(-14,5,-14,1),i.quadraticCurveTo(-14,-2,-11,-3),i.quadraticCurveTo(-9,-3,-7,0),i.lineTo(-7,-12),i.quadraticCurveTo(-7,-15,-4,-15),i.quadraticCurveTo(-1,-15,-1,-12),i.lineTo(-1,-3),i.lineTo(0,-17),i.quadraticCurveTo(0,-20,3,-20),i.quadraticCurveTo(6,-20,6,-17),i.lineTo(6,-3),i.lineTo(7,-14),i.quadraticCurveTo(7,-17,10,-17),i.quadraticCurveTo(13,-17,13,-14),i.lineTo(13,-3),i.lineTo(14,-9),i.quadraticCurveTo(14,-12,17,-11),i.quadraticCurveTo(20,-10,19,-6),i.lineTo(17,7),i.quadraticCurveTo(15,16,8,19),i.lineTo(-2,20),i.quadraticCurveTo(-8,20,-10,15),i.closePath(),i.fill(),i.stroke()),i.shadowColor="transparent",i.strokeStyle="rgba(255,247,190,.82)",i.lineWidth=1,i.beginPath(),s?(i.moveTo(-8,-7),i.quadraticCurveTo(-3,-10,7,-9)):(i.moveTo(-4,13),i.quadraticCurveTo(3,15,10,10)),i.stroke(),i.restore()),t}function L2(s){const t=document.createElement("canvas");t.width=t.height=40;const i=t.getContext("2d");if(!i)return t;const r=["#6da7dd","#79a9a0","#ef9d72","#d98b72","#e9c15d","#8296d1","#b58cd2","#72b5b0","#c9845b","#d7849d","#dfae68"],l=r[(Math.max(1,s)-1)%r.length];i.save(),i.translate(20,20),i.rotate(-.08),i.fillStyle=l,i.strokeStyle="#5e442f",i.lineWidth=1.9,i.lineJoin="round",i.lineCap="round",i.shadowColor="rgba(54,33,63,.24)",i.shadowBlur=1.5,i.shadowOffsetY=1;const c=()=>{i.fill(),i.stroke()};switch(s){case 1:i.beginPath(),i.moveTo(-16,3),i.lineTo(15,-8),i.lineTo(3,5),i.lineTo(13,11),i.lineTo(1,9),i.lineTo(-5,16),i.lineTo(-4,7),i.closePath(),c();break;case 2:i.fillRect(-12,-11,24,18),i.strokeRect(-12,-11,24,18),i.beginPath(),i.moveTo(-16,10),i.lineTo(16,10),i.lineTo(12,14),i.lineTo(-12,14),i.closePath(),c();break;case 3:i.beginPath(),i.moveTo(-13,-5),i.lineTo(13,-5),i.lineTo(10,12),i.lineTo(-10,12),i.closePath(),c(),i.beginPath(),i.ellipse(0,-6,13,4,0,0,Math.PI*2),c(),i.fillStyle="#fff4bd",i.beginPath(),i.arc(6,-9,2,0,Math.PI*2),i.fill();break;case 4:i.beginPath(),i.arc(0,2,14,Math.PI,0),i.lineTo(13,8),i.lineTo(-13,8),i.closePath(),c(),i.beginPath(),i.moveTo(-8,2),i.lineTo(10,2),i.stroke();break;case 5:i.beginPath(),i.moveTo(-12,-10),i.lineTo(10,-1),i.lineTo(2,6),i.lineTo(-15,-2),i.closePath(),c(),i.beginPath(),i.ellipse(5,11,4,3,0,0,Math.PI*2),c();break;case 6:i.beginPath(),i.moveTo(-16,11),i.lineTo(-2,-9),i.lineTo(4,0),i.lineTo(11,-6),i.lineTo(17,11),i.closePath(),c(),i.beginPath(),i.moveTo(-6,-3),i.lineTo(-2,-9),i.lineTo(1,-4),i.moveTo(8,-2),i.lineTo(11,-6),i.lineTo(14,-1),i.stroke();break;case 7:i.beginPath(),i.rect(-14,-12,28,23),c(),i.beginPath(),i.moveTo(-8,-3),i.lineTo(-3,1),i.lineTo(-8,5),i.moveTo(0,5),i.lineTo(8,5),i.stroke();break;case 8:i.beginPath(),i.moveTo(-15,-5),i.quadraticCurveTo(-9,-11,-3,-5),i.quadraticCurveTo(3,1,9,-5),i.quadraticCurveTo(13,-8,16,-5),i.lineTo(13,10),i.lineTo(-13,10),i.closePath(),c(),i.beginPath(),i.moveTo(-12,3),i.quadraticCurveTo(-5,-1,1,3),i.quadraticCurveTo(7,7,13,3),i.stroke();break;case 9:i.beginPath(),i.moveTo(-13,4),i.lineTo(-8,-7),i.lineTo(7,-7),i.lineTo(14,4),i.lineTo(14,10),i.lineTo(-13,10),i.closePath(),c(),i.fillStyle="#5e442f",i.beginPath(),i.arc(-8,10,3,0,Math.PI*2),i.arc(9,10,3,0,Math.PI*2),i.fill();break;case 10:i.beginPath(),i.ellipse(-3,-5,10,13,-.2,0,Math.PI*2),c(),i.beginPath(),i.moveTo(4,5),i.lineTo(13,16),i.stroke();break;default:i.beginPath(),i.moveTo(-13,-3),i.lineTo(13,-3),i.lineTo(9,12),i.lineTo(-9,12),i.closePath(),c(),i.beginPath(),i.arc(-5,-8,4,Math.PI,0),i.arc(5,-8,4,Math.PI,0),i.stroke();break}return i.shadowColor="transparent",i.fillStyle="#fff5bd",i.beginPath(),i.arc(14,-13,1.7,0,Math.PI*2),i.fill(),i.restore(),t}function N2(s,t){const i=document.createElement("canvas");i.width=i.height=40,i.className="scene-cursor",i.hidden=!0,i.setAttribute("aria-hidden","true"),document.body.appendChild(i);const r=i.getContext("2d"),l=new Map,c=new Image;let h=!1,d=null,m=null,p=!1,g=null,x="",_=null;function S(v){m={x:v.clientX,y:v.clientY};const N=`translate3d(${m.x-20}px,${m.y-20}px,0) scale(${p?.9:1})`;N!==x&&(i.style.transform=N,x=N)}function b(v){if(l.has(v))return l.get(v);const N=/^prop-(\d+)$/.exec(v||"");if(!N)return null;const L=L2(Number(N[1]));return l.set(v,L),L}function A(){if(h||!d||!m)return;const v=b(d);if(!(_===d&&v&&g===d&&!i.hidden)){if(!v){i.hidden=!0,delete s.dataset.customCursor,s.style.cursor=d==="grab"?"grab":d==="grabbing"?"grabbing":"crosshair",delete document.documentElement.dataset.pocketCursor,s.closest(".sky-play").dataset.cursorState=d;return}g!==d&&(r.clearRect(0,0,40,40),r.drawImage(v,0,0),g=d),i.hidden=!1,document.documentElement.dataset.pocketCursor!=="active"&&(document.documentElement.dataset.pocketCursor="active"),s.dataset.customCursor=d,s.style.cursor="none",s.closest(".sky-play").dataset.cursorState=d,_=d}}function M(){!d&&i.hidden||(delete document.documentElement.dataset.pocketCursor,d=_=null,i.hidden=!0,delete s.dataset.customCursor,delete s.closest(".sky-play").dataset.cursorState,s.style.removeProperty("cursor"))}return c.onload=()=>{if(h)return;["eraser","head","body","pocket","left","right"].forEach((N,L)=>{const O=document.createElement("canvas");O.width=O.height=128;const P=O.getContext("2d");P.drawImage(c,L%3*c.width/3,Math.floor(L/3)*c.height/2,c.width/3,c.height/2,0,0,128,128);const T=P.getImageData(0,0,128,128);let U=128,W=128,w=-1,C=-1;for(let ot=0;ot<T.data.length;ot+=4){if(T.data[ot+3]<220){T.data[ot+3]=0;continue}const F=ot/4%128,j=Math.floor(ot/4/128);U=Math.min(U,F),w=Math.max(w,F),W=Math.min(W,j),C=Math.max(C,j)}P.putImageData(T,0,0);const H=w-U+1,q=C-W+1;if(H<=0||q<=0)return;const it=document.createElement("canvas");it.width=it.height=40;const ht=36/Math.max(H,q);it.getContext("2d").drawImage(O,U,W,H,q,(40-H*ht)/2,(40-q*ht)/2,H*ht,q*ht),l.set(N,it)}),l.set("grab",Bg(!1)),l.set("grabbing",Bg(!0));const v=["eraser","head","body","pocket","left","right","grab","grabbing"];s.closest(".sky-play").dataset.cursors=v.every(N=>l.has(N))?"ready":"failed",A()},c.onerror=()=>{h||(s.closest(".sky-play").dataset.cursors="failed")},c.src=t,{move:S,show(v,N,L=!1){d=v,p=L,S(N),A()},hide:M,dispose(){h=!0,c.onload=c.onerror=null,M(),i.remove(),l.clear()}}}const zn=Object.freeze({NONE:0,BODY:1,HEAD:2,POCKET:3,LEFT:4,RIGHT:5}),Hg=Object.freeze({[zn.HEAD]:"head",[zn.POCKET]:"pocket",[zn.LEFT]:"left",[zn.RIGHT]:"right",[zn.BODY]:"body"}),Gg=new WeakMap,Dd=28,Vg=s=>Math.max(0,Math.min(1,s));function kg(s,t){return s[t+3]>=Dd}function O2(s,t,i,r,l){return r>.48&&r<.94&&l>.34&&l<.82&&s>150&&s>t*1.48&&t<150&&i<135}function P2(s,t,i,r){return r>.74&&t>s*.9&&t>i*1.18&&s<180&&i<145}function z2(s,t,i,r,l){if(l>.5||r<.14||r>.88)return!1;const c=t>s*.84&&t>i*1.12&&s<205,h=s>t*1.02&&t>i*1.28&&s>115;return c||h&&r>.22&&r<.82}function I2(s,t){if(s.length<12)return null;let i=t,r=-1;for(const d of s){const m=d%t;i=Math.min(i,m),r=Math.max(r,m)}if(r-i<70)return null;let l=i+(r-i)*.3,c=i+(r-i)*.7;for(let d=0;d<8;d++){let m=0,p=0,g=0,x=0;for(const _ of s){const S=_%t;Math.abs(S-l)<=Math.abs(S-c)?(m+=S,p++):(g+=S,x++)}if(!p||!x)return null;l=m/p,c=g/x}if(Math.abs(c-l)<8)return null;const h=[[],[]];for(const d of s){const m=d%t;h[Math.abs(m-l)<=Math.abs(m-c)?0:1].push(d)}return h.some(d=>d.length<4)?null:[{members:h[0],cx:l},{members:h[1],cx:c}]}function F2(s){const t=s==null?void 0:s.image;if(!(t!=null&&t.width)||!(t!=null&&t.height)||typeof t.getContext!="function")return null;const i=t.getContext("2d");if(!(i!=null&&i.getImageData))return null;const{width:r,height:l}=t,c=i.getImageData(0,0,r,l).data,h=r*l;let d=r,m=l,p=-1,g=-1;for(let P=0;P<h;P++){const T=P*4;if(!kg(c,T))continue;const U=P%r,W=Math.floor(P/r);d=Math.min(d,U),p=Math.max(p,U),m=Math.min(m,W),g=Math.max(g,W)}if(p<0)return{width:r,height:l,alpha:new Uint8Array(h),mask:new Uint8Array(h),bounds:null};const x=Math.max(1,p-d+1),_=Math.max(1,g-m+1),S=new Uint8Array(h),b=new Uint8Array(h),A=new Uint8Array(h),M=new Uint8Array(h);for(let P=0;P<h;P++){const T=P*4;if(!kg(c,T))continue;S[P]=c[T+3];const U=P%r,W=Math.floor(P/r),w=(U-d)/x,C=(W-m)/_,[H,q,it]=c.subarray(T,T+3);b[P]=zn.BODY,z2(H,q,it,w,C)&&(b[P]=zn.HEAD),O2(H,q,it,w,C)&&(A[P]=1,b[P]=zn.POCKET),P2(H,q,it,C)&&(M[P]=1)}for(let P=0;P<2;P++){for(let T=m;T<=g;T++){let U=r,W=-1;for(let w=d;w<=p;w++)b[T*r+w]===zn.HEAD&&(U=Math.min(U,w),W=w);for(let w=U;w<=W;w++){const C=T*r+w;S[C]&&b[C]===zn.BODY&&(b[C]=zn.HEAD)}}for(let T=d;T<=p;T++){let U=l,W=-1;for(let w=m;w<=g;w++)b[w*r+T]===zn.HEAD&&(U=Math.min(U,w),W=w);for(let w=U;w<=W;w++){const C=w*r+T;S[C]&&b[C]===zn.BODY&&(b[C]=zn.HEAD)}}}const v=new Uint8Array(h),N=[];for(let P=0;P<h;P++){if(!M[P]||v[P])continue;const T=[P];v[P]=1;const U=[];let W=0,w=0,C=r,H=l,q=-1,it=-1;for(let ht=0;ht<T.length;ht++){const ot=T[ht],F=ot%r,j=Math.floor(ot/r);U.push(ot),W+=F,w+=j,C=Math.min(C,F),q=Math.max(q,F),H=Math.min(H,j),it=Math.max(it,j);for(let Z=-1;Z<=1;Z++)for(let yt=-1;yt<=1;yt++){if(!yt&&!Z)continue;const Mt=F+yt,I=j+Z;if(Mt<0||Mt>=r||I<0||I>=l)continue;const rt=I*r+Mt;M[rt]&&!v[rt]&&(v[rt]=1,T.push(rt))}}U.length>=4&&N.push({members:U,cx:W/U.length,cy:w/U.length,minX:C,minY:H,maxX:q,maxY:it})}N.sort((P,T)=>T.members.length-P.members.length);let O=N.filter(P=>P.members.length>=200&&P.maxY-P.minY>=10).slice(0,2).sort((P,T)=>P.cx-T.cx);if(O.length===1){const P=I2(O[0].members,r);P&&(O=P.sort((T,U)=>T.cx-U.cx))}if(O.length===2)O[0].members.forEach(P=>{b[P]=zn.LEFT}),O[1].members.forEach(P=>{b[P]=zn.RIGHT});else if(O.length===1){const P=O[0].cx<(d+p)/2?zn.LEFT:zn.RIGHT;O[0].members.forEach(T=>{b[T]=P})}return{width:r,height:l,alpha:S,mask:b,bounds:{minX:d,minY:m,maxX:p,maxY:g}}}function bv(s){if(!s)return null;let t=Gg.get(s);return t||(t=F2(s),t&&Gg.set(s,t)),t}function B2(s,t,i=1,r=null){var _;const l=bv(s);if(!(l!=null&&l.bounds)||!t||!Number.isFinite(t.x)||!Number.isFinite(t.y))return null;const c=Vg(i<0?1-t.x:t.x),h=Vg(1-t.y),d=Math.min(l.width-1,Math.max(0,Math.floor(c*l.width))),m=Math.min(l.height-1,Math.max(0,Math.floor(h*l.height))),p=m*l.width+d;if(l.alpha[p]<Dd)return null;const g=(_=Object.entries(Hg).find(([,S])=>S===r))==null?void 0:_[0],x=Math.max(1,Math.round(Math.min(l.width,l.height)*.009));if(g&&l.mask[p]!==Number(g))for(let S=-x;S<=x;S++)for(let b=-x;b<=x;b++){if(b*b+S*S>x*x)continue;const A=d+b,M=m+S;if(A<0||M<0||A>=l.width||M>=l.height||l.mask[M*l.width+A]!==Number(g))continue;let v=!0;const N=Math.max(Math.abs(b),Math.abs(S));for(let L=1;L<=N;L++)if(l.alpha[(m+Math.round(S*L/N))*l.width+d+Math.round(b*L/N)]<Dd){v=!1;break}if(v)return r}return Hg[l.mask[p]]||"body"}const Ih=20;function Ev(s,t){return{x:(s.clientX-t.left)/t.width,y:(s.clientY-t.top)/t.height}}function H2(s,t,i,r){const l=t*.69,c=Math.max(i/s,r/l),h=s*c,d=l*c;return{sourceHeight:l,x:(i-h)*.93,y:0,width:h,height:d}}const G2=(s,t,i)=>Math.max(t,Math.min(i,s)),Fh=[{name:"underhand",duration:.8,lift:.35,speed:2.8,up:2.4,spin:1.8},{name:"overhead",duration:1.05,lift:1.05,speed:3.7,up:3.6,spin:-3},{name:"sideways",duration:.65,lift:.5,speed:5,up:1.6,spin:4},{name:"double-take",duration:1.2,lift:.65,speed:2.1,up:3.1,spin:-1.5}];function V2(s,t,{floor:i,bounds:r,held:l}){const c=Math.max(1,Math.ceil(t/.008333333333333333)),h=t/c;for(let d=0;d<c;d++){for(const m of s){if(m===l||m.pull)continue;const p=m.fall??(m.fall={vx:0,vy:0,spin:0});p.vy-=7*h,m.home.x+=p.vx*h,m.home.y+=p.vy*h;const[g,x]=r(m),_=m.radius;(m.home.x<g+_||m.home.x>x-_)&&(m.home.x=G2(m.home.x,g+_,x-_),p.vx*=-.62,p.spin*=-.6);const S=i(m);m.home.y<S&&(m.home.y=S,p.vy=Math.abs(p.vy)>.45?-p.vy*.42:0,p.vx*=Math.exp(-3.2*h),p.spin*=Math.exp(-5*h)),p.vx*=Math.exp(-.15*h),m.angle=(m.angle||0)+(p.spin||0)*h}for(let m=0;m<s.length;m++)for(let p=m+1;p<s.length;p++){const g=s[m],x=s[p];if(g.pull||x.pull)continue;const _=x.home.x-g.home.x,S=x.home.y-g.home.y,b=Math.hypot(_,S),A=g.radius+x.radius;if(b>=A)continue;const M=b>1e-4?_/b:1,v=b>1e-4?S/b:0,N=g===l?0:1,L=x===l?0:1,O=N+L;if(!O)continue;const P=A-b;g.home.x-=M*P*N/O,g.home.y-=v*P*N/O,x.home.x+=M*P*L/O,x.home.y+=v*P*L/O;const T=g.fall??(g.fall={vx:0,vy:0,spin:0}),U=x.fall??(x.fall={vx:0,vy:0,spin:0}),W=(U.vx-T.vx)*M+(U.vy-T.vy)*v;if(W<0){const w=-1.5*W/O;T.vx-=w*M*N,T.vy-=w*v*N,U.vx+=w*M*L,U.vy+=w*v*L,T.spin-=w*.35,U.spin+=w*.35}}}}function k2({render:s,fast:t,running:i,raf:r=requestAnimationFrame,cancel:l=cancelAnimationFrame,now:c=()=>performance.now(),delay:h=setTimeout,clear:d=clearTimeout}){let m=0,p=0,g=null,x=0,_=!1;function S(){l(m),d(p),m=p=0,g=null,x=0}function b(M){if(m=0,_||!i()){S();return}const v=g===null?0:Math.min(.1,Math.max(0,(M-g)/1e3));g=M,x=M+1e3/30,s(M,v)!==!1?A():S()}function A(){if(_||!i())return;const M=t();if(M&&p&&(d(p),p=0),m||p)return;const v=M?0:Math.max(0,x-c()-8);v>1?p=h(()=>{p=0,!_&&i()&&(m=r(b))},v):m=r(b)}return{wake:A,stop:S,dispose(){_=!0,S()}}}const Xg=[[.22,.43,.16,.1,10,1.2,.43],[.46,.5,.13,.17,13,4.1,.4],[.75,.42,.16,.11,11,2.8,.44],[.32,.59,.12,.13,10,1.2+Math.PI,.38],[.57,.59,.15,.13,13,4.1+Math.PI,.4],[.8,.57,.12,.14,11,2.8+Math.PI,.37]];function X2(s,t){const i=t*Math.PI*2/s[4]+s[5];return{alpha:.035+s[6]*Math.pow((1+Math.sin(i))/2,1.5),x:Math.sin(i*.71)*.018,y:Math.cos(i*.83)*.014}}function q2(s,t,i){const r=s.getContext("2d"),l=new Image;let c=0,h=0,d=[],m=!1,p=-1,g=-1;function x(_,S){if(_===c&&S===h&&d.length)return;c=_,h=S;const b=Math.min(.65,800/_);if(s.width=Math.max(1,Math.round(_*b)),s.height=Math.max(1,Math.round(S*b*.75)),d=[],p=-1,!l.naturalWidth)return;const A=Math.max(_/l.width,S/l.height),M=l.width*A,v=l.height*A;for(const N of Xg){const L=Math.ceil(_*N[2]*2*b),O=Math.ceil(S*N[3]*2*b),P=document.createElement("canvas");P.width=L,P.height=O;const T=P.getContext("2d"),U=_*(N[0]-N[2]),W=S*(N[1]-N[3]);T.filter="blur(2px) saturate(.96)",T.drawImage(l,((_-M)/2-U)*b,((S-v)/2-W)*b,M*b,v*b),T.filter="none",T.globalCompositeOperation="destination-in";const w=document.createElement("canvas");w.width=L,w.height=O;const C=w.getContext("2d");for(const[H,q,it,ht]of[[.45,.56,.49,.43],[.7,.31,.29,.31]]){C.save(),C.translate(L*H,O*q),C.scale(L*it,O*ht);const ot=C.createRadialGradient(0,0,.18,0,0,1);ot.addColorStop(0,"#fff"),ot.addColorStop(.55,"#fffd"),ot.addColorStop(1,"#fff0"),C.fillStyle=ot,C.fillRect(-1,-1,2,2),C.restore()}T.drawImage(w,0,0),d.push({tile:P,left:U*b,top:W*b})}}return l.onload=()=>{m||(x(c,h),i())},l.src=t,{resize:x,render(_,S=!1,b=null,A=0){_=S?0:_,!(_===p&&A===g)&&(p=_,g=A,r.clearRect(0,0,s.width,s.height),d.forEach(({tile:M,left:v,top:N},L)=>{const O=X2(Xg[L],_);r.globalAlpha=O.alpha,r.drawImage(M,v+O.x*s.width,N+O.y*s.height)}),r.globalAlpha=1,b&&(r.globalCompositeOperation="destination-in",r.drawImage(b,0,0,b.width,b.height*.75,0,0,s.width,s.height),r.globalCompositeOperation="source-over"))},dispose(){m=!0,l.onload=null,d=[]}}}function W2(s,t,i,r,l){const c=document.createElement("canvas"),h=new Image;let d=0,m=0,p=null,g=[],x=!0,_=!1,S=!1,b=!1,A=null,M=0,v=0;function N(T){const U=A;A=T,t.style.maskImage=T?`url("${T}")`:"none",U&&URL.revokeObjectURL(U)}function L(T,U){T=Math.max(1,Math.round(T)),U=Math.max(1,Math.round(U));const W=Math.min(globalThis.devicePixelRatio||1,1.25);if(d===T&&m===U&&s.width===Math.round(T*W))return;d=T,m=U,M++,p=null;const w=document.createElement("canvas");w.width=c.width,w.height=c.height,c.width&&c.height&&w.getContext("2d").drawImage(c,0,0),s.width=Math.round(T*W),s.height=Math.round(U*W),c.width=T,c.height=U;const C=c.getContext("2d");C.fillStyle="#fff",C.fillRect(0,0,c.width,c.height),i.dataset.revealed==="true"&&(C.clearRect(0,0,c.width,c.height),C.drawImage(w,0,0,c.width,c.height),_=!0),x=!0,v++}function O(){M++,v++,g=[],p=null;const T=c.getContext("2d");T.globalCompositeOperation="source-over",T.fillStyle="#fff",T.fillRect(0,0,c.width,c.height),N(null),i.dataset.revealed="false",x=!0,_=!1,l()}function P(){if(!b){if(g.length){const T=c.getContext("2d");T.globalCompositeOperation="destination-out";for(const U of g){T.save(),T.scale(c.width,c.height),T.translate(U.x,U.y),T.scale(Ih/d,Ih/m);const W=T.createRadialGradient(0,0,.55,0,0,1);W.addColorStop(0,"#000"),W.addColorStop(1,"#0000"),T.fillStyle=W,T.fillRect(-1,-1,2,2),T.restore()}g=[],x=_=!0,v++,i.dataset.revealed="true"}if(x&&h.naturalWidth){const T=s.getContext("2d");T.globalCompositeOperation="source-over",T.clearRect(0,0,s.width,s.height);const U=H2(h.width,h.height,s.width,s.height);T.drawImage(h,0,0,h.width,U.sourceHeight,U.x,U.y,U.width,U.height),T.globalCompositeOperation="destination-in",T.drawImage(c,0,0,s.width,s.height),T.globalCompositeOperation="source-over",x=!1}if(_&&!S){S=!0,_=!1;const T=M;c.toBlob(U=>{S=!1,!b&&(U&&T===M&&N(URL.createObjectURL(U)),_&&l())})}}}return h.onload=()=>{b||(x=!0,l())},h.src=r,{resize:L,reset:O,flush:P,get mask(){return c},get revision(){return v},erase(T){const U=s.getBoundingClientRect(),W=Ev(T,U);if(p){const w=Math.hypot((W.x-p.x)*U.width,(W.y-p.y)*U.height),C=Math.ceil(w/(Ih*.4));for(let H=1;H<C;H++)g.push({x:p.x+(W.x-p.x)*H/C,y:p.y+(W.y-p.y)*H/C})}g.push(W),p=W,l()},endStroke(){p=null},reveal(){M++,v++,g=[],p=null,c.getContext("2d").clearRect(0,0,c.width,c.height),i.dataset.revealed="true",x=_=!0,l()},dispose(){b=!0,h.onload=null,A&&URL.revokeObjectURL(A),g=[]}}}function Y2(s,t,i,r,l){s.setFromCamera(t,i);const c=r.filter(d=>d.mesh.visible),h=new Map(c.map(d=>[d.mesh,d]));for(const d of s.intersectObjects(c.map(m=>m.mesh),!1)){const m=h.get(d.object);if(m&&d.uv&&l(m,d.uv))return d}return null}function j2(s,t,i=[]){const r=new Set(i.filter(Boolean));function l(c){c&&(r.add(c),Object.values(c).forEach(h=>{h!=null&&h.isTexture&&r.add(h)}),Object.values(c.uniforms??{}).forEach(h=>{var d;(d=h.value)!=null&&d.isTexture&&r.add(h.value)}))}s.traverse(c=>{c.geometry&&r.add(c.geometry),(Array.isArray(c.material)?c.material:[c.material]).forEach(l)}),r.forEach(c=>c.dispose()),s.clear(),t.renderLists.dispose(),t.dispose(),t.forceContextLoss(),t.domElement.remove()}function Z2(s,t,i,r=()=>.75){const l=new dt,c=new dt,h=new dt,d=new dt,m=new dt,p=[0,0];function g(b,A,M,v){const N=i();return l.set((b-N.left)/N.width*2-1,-(A-N.top)/N.height*2+1,.5).unproject(s),l.sub(s.position).normalize(),v.copy(s.position).addScaledVector(l,(M-s.position.z)/l.z)}function x(b,A=t){return g(b.clientX,b.clientY,A,new dt)}function _(b){const A=i();c.set(b,0,t).project(s);const M=Zn.clamp(c.x/1.3,-1,1),v=A.top+A.height*(r()+.08*(1-Math.sqrt(1-M*M)));return g(A.left+(c.x+1)*A.width/2,v,t,h).y}function S(){const b=i(),A=Math.max(24,b.width*.035),M=b.top+b.height*r();return p[0]=g(b.left+A,M,t,d).x,p[1]=g(b.right-A,M,t,m).x,p}return{worldPoint:x,ground:_,bounds:S}}const Tv=1.25;function K2(s,t,i,r,l=1.25){const c=t-s,h=Math.sign(c),d=7;if(Math.abs(c)<1e-6)return{x:t,speed:0,distance:0};const m=h*Math.min(l,Math.sqrt(2*d*Math.abs(c))),p=i+Math.max(-d*r,Math.min(d*r,m-i)),g=(i+p)*.5*r,x=Math.sign(g)===h&&Math.abs(g)>=Math.abs(c)?t:s+g;return{x,speed:x===t?0:p,distance:Math.abs(x-s)}}function qg(s,t=16){return Math.floor(s/Tv*t)%t}function Q2(s,t,i){let r=i,l=-1,c=t,h=-1,d=t,m=-1;for(let p=0;p<t*i;p++){const g=p*4;if(s[g+3]<=12)continue;const x=p%t,_=Math.floor(p/t),S=s[g],b=s[g+1],A=s[g+2];r=Math.min(r,_),l=Math.max(l,_),c=Math.min(c,x),h=Math.max(h,x),_<i*.5&&b>S*.9&&b>A*1.25&&S<220&&(d=Math.min(d,x),m=Math.max(m,x))}return{top:r,bottom:l,left:c,right:h,height:Math.max(1,l-r+1),pivot:m>=d?(d+m)/2:t/2}}function J2(s){const t=s.map(r=>r.height).sort((r,l)=>r-l),i=315/((t[7]+t[8])/2);return s.map(r=>({scale:i,x:192-(r.pivot+.5)*i,y:327-(r.bottom+1)*i}))}function $2(s,t,i,r){const l=(.5-(i+1)/r)*s;return{x:-l*Math.sin(t),y:l*Math.cos(t)}}function tT(s,t){return Math.abs(s)>1e-6?Math.sign(s):t}const Bh=[{name:["Little snake","小蛇"],rect:[18,50,400,439],x:0,y:0,size:2.3,z:.5},{name:["A350","A350"],rect:[396,137,507,273],x:-3.4,y:1.6,size:2.5,z:-.5},{name:["Coding","写代码"],rect:[880,164,366,322],x:3.1,y:1.1,size:2,z:0},{name:["Basque cheesecake","巴斯克蛋糕"],rect:[45,548,357,299],x:-2.7,y:-1.6,size:1.45,z:.4},{name:["Formula 1","F1 赛车"],rect:[468,523,368,332],x:3,y:-1.7,size:1.5,z:.2},{name:["Badminton","羽毛球"],rect:[896,537,309,307],x:-4.1,y:-.25,size:1.15,z:1},{name:["Mount Fuji","富士山"],rect:[15,944,457,232],x:-1.7,y:2.35,size:1.3,z:-1},{name:["Terminal","终端"],rect:[514,935,265,249],x:3.95,y:2.35,size:.7,z:-.8},{name:["Lake days","湖边时光"],rect:[835,911,407,306],x:1.5,y:-2.2,size:1.2,z:-.6}],Av=s=>Math.max(0,Math.min(1,s)),ei=(s,t,i)=>{let r=Av((i-s)/(t-s));return r*r*(3-2*r)},Rv=`
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float field(vec2 p){return .12+(1.-p.y)*.46+sin(p.x*12.+p.y*8.)*.055+hash(floor(p*700.))*.18;}
`,eT=`
varying vec2 vUv; uniform float time; uniform float snake;
void main(){vUv=uv;vec3 p=position;
p.x+=sin(uv.y*7.+time*1.8)*.055*snake*(1.-uv.y);
gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}
`,nT=`
uniform float edgeDepth;uniform sampler2D map;uniform vec4 crop;uniform float dissolve;uniform float outfit;uniform float facing;
varying vec2 vUv;
${Rv}
void main(){
vec2 sampleUV=vec2(facing<0.?1.-vUv.x:vUv.x,vUv.y);
vec4 c=texture2D(map,crop.xy+sampleUV*crop.zw);
if(outfit>0.5 && vUv.y>.19 && vUv.y<.54 && c.r>.35 && c.g>.22 && c.b<c.g*.55 && c.r>c.g*1.05){
 vec3 cloth=outfit<1.5?vec3(.23,.52,.78):vec3(.85,.36,.28);
 if(outfit>2.5)cloth=vec3(.48,.62,.43);
 if(outfit>3.5)cloth=vec3(.62,.47,.72);
 if(outfit>4.5)cloth=mix(vec3(.92,.85,.65),vec3(.28,.43,.59),step(.65,fract(vUv.y*65.)));
 if(outfit>5.5)cloth=mix(vec3(.88,.53,.55),vec3(.98,.9,.72),1.-smoothstep(.08,.15,length(fract(vUv*vec2(24.,32.))-.5)));
 c.rgb=cloth*(.55+c.g*.65);
}
float edge=field(vUv)-dissolve;
if(c.a<.05||edge<-.025)discard;
c.a*=smoothstep(-.025,.055,edge);
c.rgb=mix(c.rgb,c.rgb*.78+vec3(.08,.065,.045),dissolve);
c.rgb*=1.-edgeDepth*.34;gl_FragColor=c;
}
`;function iT({lang:s,onWork:t}){const i=dn.useRef(null),r=dn.useRef(null),l=dn.useRef(null),c=dn.useRef(null),h=dn.useRef(null),[d,m]=dn.useState(!1),[p,g]=dn.useState(!1),[x,_]=dn.useState(!1),S=dn.useRef(!1),b=dn.useRef(s);b.current=s;const A=dn.useRef({hint:"",inventory:!1}),M=v=>{A.current.inventory=v};return dn.useEffect(()=>{let v=!1,N,L=null,O=null;const P=matchMedia("(prefers-reduced-motion: reduce)");let T=P.matches,U=0,W=!0,w=!0;const C=G=>{A.current.hint=G},H=M,q=r.current;let it=q.getBoundingClientRect();const ht=N2(q,Da.cursors);try{N=new M2({alpha:!0,antialias:!0})}catch{ht.dispose(),m(!0);return}N.setPixelRatio(Math.min(devicePixelRatio,1.25)),N.setClearColor(0,0),q.appendChild(N.domElement);const ot=new gS,F=new zi(40,1,.1,100);ot.add(new DS(16775399,10193232,2.3));const j=new NS(16773842,2);j.position.set(-4,7,5),ot.add(j);const Z=new bi(new Wd(7,96,64),new bS({color:15391904,roughness:.95,transparent:!0}));Z.position.set(0,-8.6,-1.6),Z.visible=!1,ot.add(Z);const yt=.7,{worldPoint:Mt,ground:I,bounds:rt}=Z2(F,yt,()=>it,()=>it.height<500?.65:.75),tt=G=>I(G.home.x)+G.radius*.72-(G.lane||0);F.position.z=10;const St=new PS,It=new Oe(9,9),J=[],ft={floor:tt,bounds:()=>Nt,held:null};let Nt;const Lt=[],jt=new Oe,he=new Oe,ke=W2(c.current,i.current.querySelector(".sky-play__editorial"),i.current,Da.sky,Ke),_e=q2(h.current,Da.hiddenSky,Ke),Ge=()=>ke.reset(),V=G=>ke.erase(G);let gt=null,ye=0,me=0,ee,De,$t,de=0,z=!0;const E=k2({render:xn,fast:()=>!!gt||performance.now()<ye||Math.abs(Tt-pt)>.015||Lt.some(G=>{var lt,vt,kt;return G.pull||Math.abs(((lt=G.fall)==null?void 0:lt.vx)||0)>.02||Math.abs(((vt=G.fall)==null?void 0:vt.vy)||0)>.02||Math.abs(((kt=G.fall)==null?void 0:kt.spin)||0)>.02}),running:()=>!v&&W&&w});let Y={x:0,y:0,vx:0,vy:0,angle:0,angular:0},pt=0,Tt=0,mt=0,ae=0,Vt=1,re=-10,ne=0,Ct="idle",Dt=Fh[0];const oe=[{name:"stroll",speed:1.25,sway:.012},{name:"bouncy",speed:1.4,sway:.035},{name:"tiptoe",speed:.95,sway:.025}];let Qt=0,Yt=0,ce=0,k=0,Ht=!1,Ot=-1,Pt=-1;const Ut=[],bt=[],Jt={left:["Go left","向左走"],right:["Go right","向右走"],head:["Change mood","换个表情"],body:["Change outfit","换件衣服"],pocket:["A little surprise","掏出口袋里的惊喜"]};function xe(G){var vt;if(U>.1||!Lt.length||G==="pocket"&&Ct==="pocket"&&me-re<Dt.duration&&!T)return;const lt=F.aspect<.85?1.05:3.1;if((G==="left"||G==="right")&&(Qt=(Qt+1+Math.floor(Math.random()*2))%oe.length,i.current.dataset.walkStyle=oe[Qt].name,Tt=Zn.clamp(Tt+(G==="left"?-.85:.85),-lt,lt),(T||Math.abs(ce)<.001)&&(Vt=G==="left"?-1:1),T&&(pt=Tt,ce=0)),G==="head"&&(Ot=Pt=-1,mt=(mt+1)%4,Ct="mood",re=me),G==="body"&&(Ot=Pt=-1,ae=(ae+1)%7,Ct="outfit",re=me,ae===0&&!T&&(Pt=me+.85,i.current.dataset.egg="wardrobe-wink")),G==="pocket"){const kt=Lt.slice(1).filter(At=>!At.released);if(!kt.length){C(b.current==="zh"?"口袋空啦，试试把地上的小物件抛起来。":"All out! Pick up a keepsake and give it a toss.");return}Ot=Pt=-1,re=me,Ct="pocket";const zt=Fh.filter(At=>At!==Dt);Dt=zt[Math.floor(Math.random()*zt.length)]||Fh[0];const wt=kt[0],Bt=ne%2?1:-1;if(ne++,wt.released=!0,wt.home.set(pt+Bt*.2,I(pt)+1,yt),wt.lane=ne%3*.11,wt.angle=0,wt.fall=null,wt.pull={start:me,side:Bt,style:Dt},wt.mesh.scale.setScalar(wt.baseScale*.08),wt.offset.set(0,0),wt.velocity.set(0,0),i.current.dataset.throwStyle=Dt.name,T){const[At,se]=rt(wt);wt.pull=null,wt.home.x=At+(se-At)*(ne*.618%1),wt.home.y=tt(wt),wt.fall={vx:0,vy:0,spin:0}}}i.current.dataset.mood=String(mt),i.current.dataset.outfit=String(ae),i.current.dataset.drops=String(ne),C(((vt=Jt[G])==null?void 0:vt[b.current==="zh"?1:0])||""),ye=performance.now()+1200,Ke()}const Xe=document.createElement("canvas");Xe.width=Xe.height=64;const Ie=Xe.getContext("2d"),bn=Ie.createRadialGradient(32,32,0,32,32,32);bn.addColorStop(0,"#342336"),bn.addColorStop(1,"#34233600"),Ie.fillStyle=bn,Ie.fillRect(0,0,64,64);const Xn=new jo(Xe);function Yr(G){if(!G.shadow){G.edges=[];for(let lt=1;lt<=4;lt++){const vt=G.mesh.material.clone();vt.uniforms=G.mesh.material.uniforms,vt.uniforms={...vt.uniforms,edgeDepth:{value:1}};const kt=new bi(G.mesh.geometry,vt);kt.position.set(.006*lt,-.004*lt,-.015*lt),kt.renderOrder=-lt,G.mesh.add(kt),G.edges.push(kt)}G.shadow=new bi(new Xr(1,1),new Xd({map:Xn,transparent:!0,depthWrite:!1,opacity:.25})),ot.add(G.shadow)}}const Qn=new Oe,za=new dt;function ai(){const G=Math.min(devicePixelRatio,1.25);N.getPixelRatio()!==G&&(N.setPixelRatio(G),Qn.x&&Qn.y&&ke.resize(Qn.x,Qn.y))}const Jn=()=>{const G=it=q.getBoundingClientRect();if(!G.width||!G.height)return;const lt=Qn.x!==G.width||Qn.y!==G.height;Qn.set(G.width,G.height);const vt=Math.min(devicePixelRatio,1.25);N.getPixelRatio()!==vt&&N.setPixelRatio(vt),lt&&N.setSize(G.width,G.height,!1),F.aspect=G.width/G.height,F.updateProjectionMatrix(),ke.resize(G.width,G.height),_e.resize(G.width,G.height);const kt=F.aspect<.85;F.position.z=kt?13:10,Lt.forEach((zt,wt)=>{const Bt=zt.definition||Bh[wt];zt.released||zt.home.set(kt?Bt.x*.34:Bt.x,kt?Bt.y*1.25:Bt.y,Bt.z);const At=wt===0?kt?2.8:3.4:Bt.size*(kt?.3:.43);zt.baseScale=At,zt.radius=At*Math.min(1,Bt.rect[3]/Bt.rect[2])*.4,zt.mesh.scale.set(At,At*Bt.rect[3]/Bt.rect[2],1)}),Ki(),Ke()},Ki=()=>{z=!0,Ke()};function xr(){z=!1;const G=i.current.getBoundingClientRect();U=T?0:Av(-G.top/Math.max(1,i.current.offsetHeight-innerHeight));const lt=ei(.18,.8,U);i.current.style.setProperty("--sky-fade",String(lt)),i.current.style.setProperty("--sky-blur",`${ei(.15,.75,U)*7}px`),i.current.style.setProperty("--type-exit",ei(.08,.5,U)),i.current.style.setProperty("--work-show",String(ei(.62,.94,U))),i.current.style.setProperty("--ground-rise",`${ei(.04,.85,U)*110}svh`),i.current.style.setProperty("--ground-fade",String(ei(.5,.86,U))),i.current.style.setProperty("--control-fade",String(ei(.04,.28,U)));for(const vt of i.current.querySelectorAll(".sky-play__actions,.sky-play__controls"))vt.inert=U>.28;i.current.dataset.progress=U.toFixed(3),q.inert=U>.8,q.style.pointerEvents=U>.8?"none":"auto",U>.1&&(ht.hide(),C(""),H(!1)),U>.1&&gt&&qn()}function Ke(){E.wake()}function xn(G,lt){if(v)return!1;it=q.getBoundingClientRect(),ai(),z&&xr(),T||(me+=lt),ke.flush(),_e.render(me,T,ke.mask,ke.revision),he.lerp(jt,1-Math.exp(-lt*5));const vt=F.aspect<.85?13:10,kt=T?0:he.x*.16*(1-ei(.1,.65,U)),zt=T?0:he.y*.09*(1-ei(.1,.65,U));F.position.set(Math.sin(kt)*vt,Math.sin(zt)*vt,Math.cos(kt)*Math.cos(zt)*vt),F.lookAt(0,0,0),F.updateMatrixWorld();const wt=ei(.04,.85,U),Bt=ei(.12,.63,U);Z.material.opacity=1-ei(.22,.86,U);const At=(gt==null?void 0:gt.object)===Lt[0],se=!At&&!T&&(Math.abs(Tt-pt)>1e-6||Math.abs(ce)>.001),te=At||T?{x:pt,speed:0,distance:0}:K2(pt,Tt,ce,lt,oe[Qt].speed);k=te.x-pt,pt=te.x,ce=te.speed,Yt+=te.distance,se&&(Vt=tT(k,Vt)),Math.abs(pt)>.6&&(Ht=!0),Ht&&Math.abs(pt)<.02&&Math.abs(Tt)<.02&&!se&&!At&&Ct!=="pocket"&&!T&&(Ht=!1,Ot=me+1.1,i.current.dataset.egg="home-greeting");const Se=T?0:Math.max(0,1-(me-re)/.65);J.length=0;for(let nt=1;nt<Lt.length;nt++)Lt[nt].released&&J.push(Lt[nt]);if(U<.1&&!T)for(Nt=J.length?rt():null,ft.held=gt==null?void 0:gt.object,de+=lt;de+1e-12>=1/120;)V2(J,1/120,ft),de-=1/120;else de=0;return Lt.forEach((nt,Xt)=>{var si,$n;if(nt.mesh.visible=Xt===0?Ut.length===12:!!nt.released,Xt>0&&!nt.released){nt.points.visible=!1;return}let Me=1;if(nt.pull){const{style:Ue,side:Fn}=nt.pull,Ne=(me-nt.pull.start)/Ue.duration;Me=.08+.92*ei(.1,.82,Ne);const be=Ue.name==="double-take"?Math.sin(Ne*Math.PI*3)*.12:0;nt.home.set(pt+Fn*(.16+ei(.18,1,Ne)*.5),I(pt)+1+ei(.1,.85,Ne)*Ue.lift+be,yt),nt.angle=Fn*Math.sin(Ne*Math.PI)*.35,Ne>=1&&(nt.fall={vx:Fn*Ue.speed,vy:Ue.up,spin:Fn*Ue.spin},nt.pull=null)}if(Xt===0&&(gt==null?void 0:gt.object)!==nt&&!nt.held&&(nt.velocity.addScaledVector(nt.offset,-90*lt).multiplyScalar(Math.exp(-12*lt)),nt.offset.addScaledVector(nt.velocity,lt)),Xt===0)if((gt==null?void 0:gt.object)===nt){const Ue=F.aspect<.85?1.05:3.1;pt=Zn.clamp(Y.x,-Ue,Ue),Tt=pt,ce=0,nt.home.x=Y.x,nt.home.y=Y.y,nt.home.z=.5}else nt.home.x=pt,nt.home.y=I(pt)+nt.baseScale*.9*.48,nt.home.z=.5,Y.y=nt.home.y,Y.angle=Zn.damp(Y.angle,0,8,lt);const ge=0,ve=oe[Qt],qe=Yt/Tv*Math.PI*2,Ae=Xt===0&&!T&&!At?se?0:Math.sin(me*2)*.012+Math.sin(Se*Math.PI)*.15:0,tn=2*Math.tan(Zn.degToRad(20))*(vt-nt.home.z);if(nt.mesh.position.set(nt.home.x+nt.offset.x+ge,nt.home.y+nt.offset.y+Ae+wt*tn*1.1,nt.home.z),nt.mesh.rotation.z=Xt===0?(gt==null?void 0:gt.object)===nt?Y.angle:se?0:-pt*.065+Math.sin(me*2)*.012:nt.angle||0,Xt===0){if(nt.mesh.rotation.y=0,Ct==="pocket"){const Ue=(me-re)/Dt.duration;nt.mesh.rotation.z+=Math.sin(Math.min(1,Ue)*Math.PI)*(Dt.name==="sideways"?.12:Dt.name==="overhead"?-.09:.05)}if(nt.mesh.material.uniforms.facing.value=Vt,nt.mesh.material.uniforms.outfit.value=ae,Ut.length===12){const Ue=T?mt:Ct==="pocket"&&me-re<Dt.duration+.25?8+Math.min(3,Math.floor((me-re)/Dt.duration*4)):se?4+qg(Yt,4):!T&&me<Ot?1:!T&&me<Pt?3:mt;nt.mesh.material.uniforms.map.value=At?gt.pose:se&&bt.length===16&&!T&&Ct!=="pocket"?bt[qg(Yt)]:Ut[Ue],se&&(nt.mesh.rotation.z+=Math.sin(qe)*ve.sway*.3),Ct==="pocket"&&me-re>Dt.duration+.25&&(Ct="idle")}}const Qe=Xt===0&&!T&&!At?1+Math.sin(Se*Math.PI*2)*.035:1,an=nt.baseScale*Me*Qe*((gt==null?void 0:gt.object)===nt?1.035:1);if(nt.mesh.scale.x=Zn.damp(nt.mesh.scale.x,an,9,lt),nt.mesh.scale.y=nt.mesh.scale.x*(Xt===0?.9:nt.rect[3]/nt.rect[2]),Xt===0&&!At){const Ue=nt.mesh.material.uniforms.map.value,Fn=(si=bv(Ue))==null?void 0:si.bounds;if(Fn){const Ne=$2(nt.mesh.scale.y,nt.mesh.rotation.z,Fn.maxY,Ue.image.height);nt.mesh.position.y=I(pt)+nt.offset.y+Ae+wt*tn*1.1-Ne.y,nt.mesh.position.x=pt+nt.offset.x-Ne.x}}if((gt==null?void 0:gt.object)===nt&&gt.localPoint){za.copy(gt.localPoint).multiply(nt.mesh.scale).applyEuler(nt.mesh.rotation);const Ue=Mt(gt.event,gt.z).sub(za);if(Xt===0)Y.x=Ue.x,Y.y=Ue.y;else{const[Fn,Ne]=rt(nt);Ue.x=Zn.clamp(Ue.x,Fn+nt.radius,Ne-nt.radius),Ue.y=Math.max(tt(nt),Math.min(3,Ue.y))}nt.mesh.position.copy(Ue),nt.home.copy(Ue)}if(Xt>0){nt.mesh.rotation.y=Zn.damp(nt.mesh.rotation.y,(gt==null?void 0:gt.object)===nt?-.18:((($n=nt.fall)==null?void 0:$n.vx)||0)*.035,8,lt),Yr(nt);const Ue=Math.max(0,nt.home.y-tt(nt));nt.shadow.visible=nt.mesh.visible&&U<.8,nt.shadow.position.set(nt.home.x,I(nt.home.x)-(nt.lane||0)+wt*tn*1.1,yt-.12),nt.shadow.scale.set(nt.baseScale*(1+Ue*.25),nt.baseScale*.17,1),nt.shadow.material.opacity=(1-Bt)*.25/(1+Ue*1.8)}nt.mesh.material.uniforms.time.value=me;const Nn=Bt;nt.mesh.material.uniforms.dissolve.value=Nn,nt.points.material.uniforms.dissolve.value=Nn,nt.points.position.copy(nt.mesh.position),nt.points.scale.copy(nt.mesh.scale),nt.points.rotation.copy(nt.mesh.rotation),nt.points.visible=Xt>0&&Nn>0&&Nn<1}),N.render(ot,F),L&&!gt&&U<.1&&ri(L,!0),U<.8&&(!T||!!gt||he.distanceTo(jt)>.002)}function gn(G){const lt=it=N.domElement.getBoundingClientRect(),vt=Ev(G,lt);It.set(vt.x*2-1,1-vt.y*2)}function Bi(G,lt){if(G===Lt[0])return jr(lt)!==null;if(G.hitPixels){const wt=Math.min(G.hitWidth-1,Math.floor(lt.x*G.hitWidth)),Bt=Math.min(G.hitHeight-1,Math.floor((1-lt.y)*G.hitHeight));return G.hitPixels[(Bt*G.hitWidth+wt)*4+3]>90}const vt=G.rect,kt=Math.min(1253,Math.floor(vt[0]+lt.x*vt[2])),zt=Math.min(1253,Math.floor(vt[1]+(1-lt.y)*vt[3]));return(De==null?void 0:De[(zt*1254+kt)*4+3])>90&&($t==null?void 0:$t[zt*1254+kt])===G.owner}function oa(){return Y2(St,It,F,Lt,Bi)}function jr(G){var vt;const lt=(vt=Lt[0])==null?void 0:vt.mesh.material.uniforms;return B2(lt==null?void 0:lt.map.value,G,lt==null?void 0:lt.facing.value,(O==null?void 0:O.kind)==="mascot"?O.action:null)}function Zr(G){if(!G)return null;const lt=Lt.find(zt=>zt.mesh===G.object),vt=lt?Lt.indexOf(lt):-1;if(!lt||vt<0)return null;const kt=vt===0?jr(G.uv):"grab";return vt===0&&!kt?null:{object:lt,index:vt,kind:vt===0?"mascot":"prop",action:kt,key:vt===0?kt:`prop-${vt}`,uv:G.uv}}function gr(G){if(U>.1||G.button!==0)return;gn(G);const lt=G.pointerType==="touch"&&S.current,vt=lt?null:oa(),zt=Zr(vt),wt=(zt==null?void 0:zt.object)||null;if(gt={binding:zt,object:wt,x:G.clientX,y:G.clientY,ox:(wt==null?void 0:wt.offset.x)||0,oy:(wt==null?void 0:wt.offset.y)||0,id:G.pointerId,moved:!1,action:(zt==null?void 0:zt.kind)==="mascot"?zt.action:null,erasing:lt||!wt,event:G,localPoint:vt?wt.mesh.worldToLocal(vt.point.clone()):null},ke.endStroke(),G.pointerType!=="touch"&&ht.show(zt?"grabbing":"eraser",G,!0),!wt&&(lt||G.pointerType!=="touch")&&V(G),wt&&wt===Lt[0]){const Bt=Mt(G,wt.mesh.position.z);Y.x=wt.mesh.position.x,Y.y=wt.mesh.position.y,Y.vx=Y.vy=Y.angular=0,wt.offset.set(0,0),wt.velocity.set(0,0),gt.pose=wt.mesh.material.uniforms.map.value,jt.copy(he),gt.snakeGrab=Bt.sub(wt.mesh.position),gt.z=wt.mesh.position.z,gt.last={x:wt.home.x,y:wt.home.y,t:G.timeStamp}}if(wt&&wt!==Lt[0]){wt.pull=null,wt.fall={vx:0,vy:0,spin:0};const Bt=Mt(G,wt.mesh.position.z);gt.grab=Bt.sub(wt.mesh.position),gt.z=wt.mesh.position.z,gt.last={x:wt.home.x,y:wt.home.y,t:G.timeStamp}}q.setPointerCapture(G.pointerId),ye=performance.now()+1e3,Ke()}function ri(G,lt=!1){if(L=G.pointerType==="touch"?null:G,gn(G),gt){gt.event=G,ht.move(G),ye=performance.now()+120;const vt=(G.clientX-gt.x)/Qn.x,kt=(G.clientY-gt.y)/Qn.y;if(Math.hypot(G.clientX-gt.x,G.clientY-gt.y)>6&&(gt.moved=!0),gt.object&&gt.object===Lt[0]){const zt=Mt(G,gt.z).sub(gt.snakeGrab),wt=Math.max(.008,(G.timeStamp-gt.last.t)/1e3);Y.vx=(zt.x-Y.x)/wt,Y.vy=(zt.y-Y.y)/wt,Y.x=zt.x,Y.y=zt.y,Y.angle=Zn.clamp(Y.vx*.045,-.5,.5),gt.last={x:zt.x,y:zt.y,t:G.timeStamp}}else if(gt.object&&gt.object!==Lt[0]){const zt=gt.object,wt=Mt(G,gt.z).sub(gt.grab),Bt=Math.max(.008,(G.timeStamp-gt.last.t)/1e3),[At,se]=rt(zt);zt.home.x=Zn.clamp(wt.x,At+zt.radius,se-zt.radius),zt.home.y=Math.max(tt(zt),Math.min(3,wt.y)),zt.fall.vx=Zn.clamp((zt.home.x-gt.last.x)/Bt,-12,12),zt.fall.vy=Zn.clamp((zt.home.y-gt.last.y)/Bt,-12,12),gt.last={x:zt.home.x,y:zt.home.y,t:G.timeStamp}}else gt.object?gt.object.offset.set(Zn.clamp(gt.ox+vt*9,-3,3),Zn.clamp(gt.oy-kt*7,-2.5,2.5)):gt.erasing&&(G.pointerType!=="touch"||S.current)&&V(G)}else if(G.pointerType!=="touch"&&U<.1){const vt=Zr(oa()),kt=(vt==null?void 0:vt.index)??-1,zt=(vt==null?void 0:vt.kind)==="mascot"?vt.action:null;!T&&kt<0&&!lt?jt.set(It.x,It.y):!T&&vt&&jt.copy(he);const wt=(vt==null?void 0:vt.key)||"eraser";O=vt;const Bt=vt?`${vt.kind}:${vt.index}:${vt.action}`:"none";i.current.dataset.cursor!==wt&&(i.current.dataset.cursor=wt),i.current.dataset.cursorBinding!==Bt&&(i.current.dataset.cursorBinding=Bt),Lt.forEach(At=>At.hover=At===(vt==null?void 0:vt.object)),ht.show(vt?vt.key:"eraser",G),H(zt==="pocket"),C((vt==null?void 0:vt.kind)==="mascot"?Jt[zt][b.current==="zh"?1:0]+(b.current==="zh"?" · 按住可拖动":" · Hold to drag"):kt>=0?(Lt[kt].definition||Bh[kt]).name[b.current==="zh"?1:0]:"")}lt||Ke()}function qn(G){if(ke.endStroke(),gt&&q.hasPointerCapture(gt.id)&&q.releasePointerCapture(gt.id),gt!=null&&gt.action&&!gt.moved&&(G==null?void 0:G.type)==="pointerup"&&xe(gt.action),gt!=null&&gt.object&&gt.object===Lt[0]){const lt=gt.object;gt.moved&&!T&&lt.offset.set(Y.x-pt,Y.y-(I(pt)+lt.baseScale*.9*.48)),Y.angular=0,i.current.dataset.snakeThrowSpeed=String(Math.hypot(Y.vx,Y.vy).toFixed(2))}if(gt!=null&&gt.object&&gt.object!==Lt[0]){const lt=gt.object.fall;((G==null?void 0:G.type)!=="pointerup"||!gt.moved||G.timeStamp-gt.last.t>100)&&(lt.vx=lt.vy=0),lt.spin=lt.vx*.45,i.current.dataset.lastThrowSpeed=String(Math.hypot(lt.vx,lt.vy).toFixed(2)),T&&(gt.object.home.y=tt(gt.object),lt.vx=lt.vy=lt.spin=0)}if(gt!=null&&gt.object&&gt.moved,gt=null,O=null,ye=performance.now()+400,delete i.current.dataset.cursorBinding,jt.set(0,0),(G==null?void 0:G.type)==="pointerup"&&G.pointerType!=="touch"){const lt=it;G.clientX>=lt.left&&G.clientX<lt.right&&G.clientY>=lt.top&&G.clientY<lt.bottom?ri(G):Ti()}else L=null,ht.hide();Ke()}function Ti(G){var kt;if(L=null,gt)return;O=null,delete i.current.dataset.cursorBinding;const lt=G==null?void 0:G.relatedTarget,vt=(kt=lt==null?void 0:lt.closest)==null?void 0:kt.call(lt,"button,a");U<.1&&(G==null?void 0:G.pointerType)!=="touch"&&vt&&(i.current.contains(vt)||vt.closest(".daybook-header"))?ht.show(vt.dataset.sceneAction||"head",G):ht.hide(),Lt.forEach(zt=>zt.hover=!1),C(""),H(!1),jt.set(0,0),Ke()}function D(G){var vt,kt;if(G.pointerType==="touch"){ht.hide();return}const lt=(kt=(vt=G.target).closest)==null?void 0:kt.call(vt,"button,a");if(U<.1&&lt&&(i.current.contains(lt)||lt.closest(".daybook-header"))){L=null,ht.show(lt.dataset.sceneAction||"head",G);return}!q.contains(G.target)&&!gt&&ht.hide()}function K(G){G.relatedTarget||qn()}function ut(){w=!document.hidden,E.stop(),de=0,w?Ke():qn()}const et=new wS;et.load(Da.walk,G=>{if(v){G.dispose();return}const lt=G.image.width/4,vt=G.image.height/4,kt=[],zt=[];for(let Bt=0;Bt<16;Bt++){const At=document.createElement("canvas");At.width=Math.floor(lt),At.height=Math.floor(vt);const se=At.getContext("2d");se.drawImage(G.image,Bt%4*lt,Math.floor(Bt/4)*vt,lt,vt,0,0,At.width,At.height);const te=se.getImageData(0,0,At.width,At.height),Se=new Uint8Array(At.width*At.height),nt=[];for(let Xt=0;Xt<At.width;Xt++)nt.push(Xt,(At.height-1)*At.width+Xt);for(let Xt=0;Xt<At.height;Xt++)nt.push(Xt*At.width,Xt*At.width+At.width-1);for(let Xt=0;Xt<nt.length;Xt++){const Me=nt[Xt];if(Se[Me])continue;Se[Me]=1;const ge=Me*4;if(Math.min(te.data[ge],te.data[ge+1],te.data[ge+2])<=233)continue;te.data[ge+3]=0;const ve=Me%At.width,qe=Math.floor(Me/At.width);ve&&nt.push(Me-1),ve<At.width-1&&nt.push(Me+1),qe&&nt.push(Me-At.width),qe<At.height-1&&nt.push(Me+At.width)}se.putImageData(te,0,0),kt.push(At),zt.push(Q2(te.data,At.width,At.height))}const wt=J2(zt);kt.forEach((Bt,At)=>{const se=document.createElement("canvas");se.width=384,se.height=341;const{x:te,y:Se,scale:nt}=wt[At];se.getContext("2d").drawImage(Bt,te,Se,Bt.width*nt,Bt.height*nt);const Xt=new jo(se);bt.push(Xt)}),G.dispose(),i.current.dataset.walkFrames=String(bt.length),Ke()}),ee=et.load(Da.keepsakes,G=>{if(v){G.dispose();return}const lt=document.createElement("canvas");lt.width=lt.height=1254;const vt=lt.getContext("2d");vt.drawImage(G.image,0,0),De=vt.getImageData(0,0,1254,1254).data;const kt=1254*1254;$t=new Int32Array(kt);const zt=new Int32Array(kt);let wt=0;for(let Bt=0;Bt<kt;Bt++){if($t[Bt]||De[Bt*4+3]<90)continue;wt++;let At=0,se=1;for(zt[0]=Bt,$t[Bt]=wt;At<se;){const te=zt[At++],Se=te%1254,nt=[Se>0?te-1:-1,Se<1253?te+1:-1,te>=1254?te-1254:-1,te<kt-1254?te+1254:-1];for(const Xt of nt)Xt>=0&&!$t[Xt]&&De[Xt*4+3]>=90&&($t[Xt]=wt,zt[se++]=Xt)}}Bh.forEach((Bt,At)=>{const[se,te,Se,nt]=Bt.rect,Xt=new pn(0,0,1,1),Me=new Map;for(let be=te;be<te+nt;be++)for(let $e=se;$e<se+Se;$e++){const En=$t[be*1254+$e];En&&Me.set(En,(Me.get(En)||0)+1)}const ge=[...Me].sort((be,$e)=>$e[1]-be[1])[0][0],ve=document.createElement("canvas");ve.width=Se,ve.height=nt;const qe=ve.getContext("2d"),Ae=qe.createImageData(Se,nt);for(let be=0;be<nt;be++)for(let $e=0;$e<Se;$e++){const En=(te+be)*1254+se+$e,Hi=(be*Se+$e)*4;$t[En]===ge&&Ae.data.set(De.subarray(En*4,En*4+4),Hi)}qe.putImageData(Ae,0,0);const tn=new jo(ve),Qe=new Zi({uniforms:{edgeDepth:{value:0},map:{value:tn},crop:{value:Xt},time:{value:0},snake:{value:0},outfit:{value:0},facing:{value:1},dissolve:{value:0}},vertexShader:eT,fragmentShader:nT,transparent:!0,depthWrite:!1,side:na}),an=new bi(new Xr(1,1,24,24),Qe);ot.add(an);const Nn=[],si=[],$n=[];for(let be=1;be<nt;be+=3)for(let $e=1;$e<Se;$e+=3){const En=((te+be)*1254+se+$e)*4;De[En+3]<120||$t[En/4]!==ge||(Nn.push($e/Se-.5,.5-be/nt,0),si.push(De[En]/255,De[En+1]/255,De[En+2]/255),$n.push($e/Se,1-be/nt))}const Ue=new Fi;Ue.setAttribute("position",new Kn(Nn,3)),Ue.setAttribute("color",new Kn(si,3)),Ue.setAttribute("seed",new Kn($n,2));const Fn=new Zi({transparent:!0,depthWrite:!1,uniforms:{dissolve:{value:0}},vertexShader:`
     attribute vec3 color;attribute vec2 seed;varying vec3 c;varying float alpha;uniform float dissolve;
     ${Rv}
     void main(){float f=field(seed);float age=max(0.,dissolve-f);
      alpha=step(f,dissolve)*(1.-smoothstep(0.,.24,age));
      vec3 p=position+vec3(age*(hash(seed)*2.-1.)*.65,age*(1.5+hash(seed.yx)*2.),age*.2);
      c=color;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=1.25*(1.-age);}
    `,fragmentShader:"varying vec3 c;varying float alpha;void main(){float soft=1.-smoothstep(.15,.5,length(gl_PointCoord-.5));gl_FragColor=vec4(c,alpha*soft*.8);}"}),Ne=new cg(Ue,Fn);ot.add(Ne),Lt.push({mesh:an,points:Ne,owner:ge,ownTexture:tn,rect:Bt.rect,home:new dt,offset:new Oe,velocity:new Oe,baseScale:1,hover:!1})}),et.load(Da.extras,Bt=>{if(v){Bt.dispose();return}[{name:["RS7 model","RS7 车模"],rect:[0,380,575,400],size:2.8,x:0,y:0,z:.5},{name:["NF800 Pro racket","NF800 Pro 球拍"],rect:[575,75,350,875],size:1.15,x:0,y:0,z:.5},{name:["Chaoshan beef hotpot","潮汕牛肉火锅"],rect:[930,275,606,620],size:2.15,x:0,y:0,z:.5}].forEach(se=>{const[te,Se,nt,Xt]=se.rect,Me=document.createElement("canvas");Me.width=nt,Me.height=Xt;const ge=Me.getContext("2d");ge.drawImage(Bt.image,te,Se,nt,Xt,0,0,nt,Xt);const ve=ge.getImageData(0,0,nt,Xt),qe=new Uint8Array(nt*Xt),Ae=[];for(let Ne=0;Ne<nt;Ne++)Ae.push(Ne,(Xt-1)*nt+Ne);for(let Ne=0;Ne<Xt;Ne++)Ae.push(Ne*nt,Ne*nt+nt-1);for(let Ne=0;Ne<Ae.length;Ne++){const be=Ae[Ne];if(qe[be])continue;qe[be]=1;const $e=be*4;if(Math.min(ve.data[$e],ve.data[$e+1],ve.data[$e+2])<234)continue;ve.data[$e+3]=0;const En=be%nt,Hi=Math.floor(be/nt);En&&Ae.push(be-1),En<nt-1&&Ae.push(be+1),Hi&&Ae.push(be-nt),Hi<Xt-1&&Ae.push(be+nt)}ge.putImageData(ve,0,0);const tn=new jo(Me),Qe=Lt[1].mesh.material.clone();Qe.uniforms.map.value=tn;const an=new bi(new Xr(1,1),Qe);an.visible=!1,ot.add(an);const Nn=[],si=[],$n=[];for(let Ne=1;Ne<Xt;Ne+=3)for(let be=1;be<nt;be+=3){const $e=(Ne*nt+be)*4;ve.data[$e+3]<120||(Nn.push(be/nt-.5,.5-Ne/Xt,0),si.push(ve.data[$e]/255,ve.data[$e+1]/255,ve.data[$e+2]/255),$n.push(be/nt,1-Ne/Xt))}const Ue=new Fi;Ue.setAttribute("position",new Kn(Nn,3)),Ue.setAttribute("color",new Kn(si,3)),Ue.setAttribute("seed",new Kn($n,2));const Fn=new cg(Ue,Lt[1].points.material.clone());Fn.visible=!1,ot.add(Fn),Lt.push({definition:se,mesh:an,points:Fn,ownTexture:tn,rect:[0,0,nt,Xt],hitWidth:nt,hitHeight:Xt,hitPixels:ve.data,home:new dt,offset:new Oe,velocity:new Oe,baseScale:1,hover:!1})}),Bt.dispose(),i.current.dataset.items=String(Lt.length-1),Jn()},void 0,()=>{v||C(b.current==="zh"?"新增物件加载失败，请刷新":"Extra items could not load. Please refresh.")}),et.load(Da.poses,Bt=>{if(v){Bt.dispose();return}const At=Bt.image.width/4,se=Bt.image.height/3;for(let te=0;te<3;te++)for(let Se=0;Se<4;Se++){const nt=document.createElement("canvas");nt.width=Math.floor(At),nt.height=Math.floor(se);const Xt=nt.getContext("2d");Xt.drawImage(Bt.image,Se*At,te*se,At,se,0,0,nt.width,nt.height);const Me=nt.width,ge=nt.height,ve=Xt.getImageData(0,0,Me,ge),qe=new Uint8Array(Me*ge),Ae=[];for(let Qe=0;Qe<Me;Qe++)Ae.push(Qe,(ge-1)*Me+Qe);for(let Qe=0;Qe<ge;Qe++)Ae.push(Qe*Me,Qe*Me+Me-1);for(let Qe=0;Qe<Ae.length;Qe++){const an=Ae[Qe];if(qe[an])continue;qe[an]=1;const Nn=an*4;if(Math.min(ve.data[Nn],ve.data[Nn+1],ve.data[Nn+2])<230)continue;ve.data[Nn+3]=0;const si=an%Me,$n=Math.floor(an/Me);si>0&&Ae.push(an-1),si<Me-1&&Ae.push(an+1),$n>0&&Ae.push(an-Me),$n<ge-1&&Ae.push(an+Me)}Xt.putImageData(ve,0,0);const tn=new jo(nt);Ut.push(tn)}Bt.dispose(),g(!0),Jn()},void 0,()=>m(!0)),Jn()},void 0,()=>{v||m(!0)});function $(){T=P.matches,T&&(pt=Tt,ce=0,Ot=Pt=-1),i.current.classList.toggle("sky-play--still",T),Ki(),Ke()}const Ft=new IntersectionObserver(([G])=>{W=G.isIntersecting,E.stop(),de=0,W&&Ke()});Ft.observe(i.current);const qt=new ResizeObserver(Jn);qt.observe(q);let Wt;function Kt(){ai(),ue(),Ke()}function ue(){Wt==null||Wt.removeEventListener("change",Kt),Wt=matchMedia(`(resolution: ${devicePixelRatio}dppx)`),Wt.addEventListener("change",Kt)}return ue(),window.addEventListener("scroll",Ki,{passive:!0}),window.addEventListener("resize",Jn),P.addEventListener("change",$),document.addEventListener("visibilitychange",ut),window.addEventListener("blur",qn),document.addEventListener("pointermove",D),document.addEventListener("pointerout",K),q.addEventListener("pointerenter",ri),q.addEventListener("pointerdown",gr),q.addEventListener("pointermove",ri),q.addEventListener("pointerup",qn),q.addEventListener("pointercancel",qn),q.addEventListener("pointerleave",Ti),l.current={act:xe,setErasing:G=>{qn(),S.current=G,_(G),q.dataset.erasing=String(G),q.style.touchAction=G?"none":"pan-y"},reveal:()=>{i.current.dataset.revealed==="true"?Ge():ke.reveal()},reset:()=>{Ge(),Tt=0,pt=0,ce=0,Yt=0,Ht=!1,Ot=Pt=-1,mt=0,ae=0,ne=0,Lt.forEach(G=>{G.offset.set(0,0),G.velocity.set(0,0),G.held=!1,G.released=!1}),jt.set(0,0),Ke()},nudge:(G,lt)=>{const vt=Lt[G];vt&&(vt.held=!0,vt.offset.x=Zn.clamp(vt.offset.x+(lt==="ArrowRight"?.2:lt==="ArrowLeft"?-.2:0),-2,2),vt.offset.y=Zn.clamp(vt.offset.y+(lt==="ArrowUp"?.2:lt==="ArrowDown"?-.2:0),-2,2),Ke())},release:()=>{Lt.forEach(G=>G.held=!1),Ke()}},$(),Jn(),()=>{v=!0,E.dispose(),ke.dispose(),_e.dispose(),Ft.disconnect(),qt.disconnect(),Wt==null||Wt.removeEventListener("change",Kt),window.removeEventListener("scroll",Ki),window.removeEventListener("resize",Jn),i.current&&delete i.current.__pocketDebug,P.removeEventListener("change",$),document.removeEventListener("visibilitychange",ut),window.removeEventListener("blur",qn),document.removeEventListener("pointermove",D),document.removeEventListener("pointerout",K),q.removeEventListener("pointerenter",ri),q.removeEventListener("pointerdown",gr),q.removeEventListener("pointermove",ri),q.removeEventListener("pointerup",qn),q.removeEventListener("pointercancel",qn),q.removeEventListener("pointerleave",Ti),ht.dispose(),j2(ot,N,[Xn,ee,...bt,...Ut,...Lt.map(G=>G.ownTexture)]),J.length=0,ft.held=null,Lt.length=0,bt.length=0,Ut.length=0,De=$t=null,l.current=null}},[]),Gt.jsx("section",{className:"sky-play",ref:i,"aria-label":s==="zh"?"我的兴趣空间":"A few things I love",style:{"--pocket-hidden-sky":`url("${Da.hiddenSky}")`,"--pocket-terrain":`url("${Da.terrain}")`},children:Gt.jsxs("div",{className:"sky-play__stage",children:[Gt.jsx("div",{className:"sky-play__backdrop"}),Gt.jsx("canvas",{className:"sky-play__wipe",ref:c,"aria-hidden":"true"}),Gt.jsx("canvas",{className:"sky-play__backlight",ref:h,"aria-hidden":"true"}),Gt.jsx("div",{className:"sky-play__ground"}),Gt.jsx("div",{className:"sky-play__editorial",children:Gt.jsx("h1",{children:"POCKET PLANET"})}),Gt.jsx("div",{className:"sky-play__canvas",ref:r,"aria-hidden":"true"}),(!p||d)&&Gt.jsx("p",{className:"sky-play__loading",role:"status",children:d?s==="zh"?"场景加载失败，请刷新重试。":"Scene could not load. Please refresh.":s==="zh"?"正在打开口袋星球…":"Opening Pocket Planet…"}),Gt.jsx("div",{className:"sky-play__actions","aria-label":s==="zh"?"小蛇互动":"Meet the snake",children:[["left","向左走","Walk left"],["head","换表情","Change mood"],["body","换装","Change outfit"],["pocket","掏口袋","Pocket surprise"],["right","向右走","Walk right"]].map(([v,N,L])=>Gt.jsxs("button",{"data-scene-action":v,"aria-label":s==="zh"?N:L,onFocus:()=>M(v==="pocket"),onBlur:()=>M(!1),onMouseEnter:()=>M(v==="pocket"),onMouseLeave:()=>M(!1),onClick:()=>{var O;return(O=l.current)==null?void 0:O.act(v)},children:[Gt.jsx("span",{className:"sky-play__action-full",children:s==="zh"?N:L}),Gt.jsx("span",{className:"sky-play__action-short","aria-hidden":"true",children:{left:"←",right:"→",head:s==="zh"?"表情":"Mood",body:s==="zh"?"换装":"Outfit",pocket:s==="zh"?"口袋":"Pocket"}[v]})]},v))}),Gt.jsxs("div",{className:"sky-play__controls",children:[Gt.jsxs("button",{className:"sky-play__eraser","data-scene-action":"eraser","aria-pressed":x,"aria-label":s==="zh"?"橡皮擦：在背景上拖动擦除":"Eraser: drag on the background to erase",onClick:()=>{var v;return(v=l.current)==null?void 0:v.setErasing(!x)},children:[Gt.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[Gt.jsx("path",{d:"m4 14 9-10a2 2 0 0 1 3 0l5 5a2 2 0 0 1 0 3l-8 9H8l-4-4a2 2 0 0 1 0-3Z"}),Gt.jsx("path",{d:"m9 9 8 8M12 21h10"})]}),s==="zh"?"橡皮擦":"Eraser"]}),Gt.jsxs("button",{onClick:t,children:[s==="zh"?"查看作品":"Selected work"," ↓"]})]})]})})}const Qo=[{id:"tiny",slug:"ai-narrative-platform",title:"Tiny Stories",subtitle:"RPG Demo",color:"#f5d78c",ink:"#36213f",medium:["AI · Interactive storytelling","AI · 互动叙事"],summary:["From a story seed to a world you can edit, publish and play.","从一个故事种子，到可以编辑、发布与游玩的世界。"],video:"/assets/tiny-stories-demo.mp4",poster:"/assets/tiny-stories-video-poster.jpg",repository:"https://github.com/lishehao/RPG_Demo",live:"https://rpg.shehao.app",steps:[["Seed","构思"],["Author","创作"],["Play","游玩"]],features:[["An editor, not a black box","不止生成，更能编辑","Author Copilot turns natural-language requests into proposed changes, with a preview diff and apply / undo workflow.","Author Copilot 将自然语言修改转成提案，经过差异预览，再应用或撤销。"],["State that survives the session","状态可保存，也可恢复","Author jobs, play sessions and checkpoints persist across restarts. Structured contracts separate the editor from the agent runtime.","创作任务、游玩会话与检查点支持持久化恢复；编辑器与智能体运行时通过结构化契约解耦。"],["A product loop you can evaluate","让产品流程可评测","Multi-stage authoring and play workflows connect structured validation, repair, telemetry and end-to-end benchmark runs.","多阶段创作与游玩流程连接结构化校验、修复、运行记录和端到端评测。"]],stack:"React · TypeScript · FastAPI · LangGraph · PostgreSQL"},{id:"auto",slug:"auto-load-off-test",title:"Auto Load-Off Test",subtitle:"Laboratory tools",color:"#cbd1ad",ink:"#253b31",medium:["Python · Instrument automation","Python · 仪器自动化"],summary:["Turn a repeated lab procedure into a run you can configure, inspect and reproduce.","把重复的实验室操作，变成可配置、可检查、可复现的测试流程。"],video:"/assets/hyperframe-replay.mp4",poster:"/assets/hyperframe-video-poster.jpg",repository:"https://github.com/lishehao/auto-load-off-test",note:["Illustrative Hyperframe replay · simulated measurements","Hyperframe 演示回放 · 测量数据为模拟值"],steps:[["Configure","配置"],["Measure","测量"],["Export","导出"]],features:[["One repeatable run","一套可重复执行的流程","Configure and orchestrate an arbitrary waveform generator and oscilloscope through a focused operator interface.","通过统一操作界面配置并控制任意波形发生器与示波器。"],["Failures are part of the workflow","把异常处理纳入流程","Validation, logging, retries and timeouts make failures visible instead of leaving them inside a one-off script.","通过校验、日志、重试与超时处理，让异常可见、可追踪。"],["Evidence you can take away","结果可以带走，也能比较","Structured logs and CSV / MAT exports support later inspection and comparison across validation runs.","结构化日志与 CSV / MAT 导出，支持测试后的检查和跨轮次比较。"]],stack:"Python · Tkinter · PyVISA · SCPI · CSV / MAT"}],aT=s=>Math.max(0,Math.min(1,s));function rT(s){const t=aT((s-.25)/.5),i=t*t*(3-2*t),r=Math.sin(Math.PI*i);return{t:i,outX:-26*i,outScale:1-.045*i,outAngle:-4*i,inX:100*(1-i),shade:.18*r,beam:.23*r,beamX:-45+90*i,active:i<.5?0:1}}const Wg=s=>/^\/zh(?:\/|$)/.test(s)?"zh":"en";function sT(s,t){const i=new URL(s);return i.pathname=t==="zh"?"/zh/":"/",i}let Yg=0;function ol(s,{history:t=!0,behavior:i,focus:r=!0}={}){const l=document.getElementById(s);if(!l)return;const c=++Yg;window.scrollTo({top:scrollY,behavior:"instant"});const h=s==="top"?"":`#${s}`;t&&location.hash!==h&&window.history.pushState(null,"",`${location.pathname}${location.search}${h}`);const d=new CustomEvent("portfolio:navigate",{cancelable:!0,detail:{id:s,behavior:i??(matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"),focus:r}});window.dispatchEvent(d)&&(s==="top"?(window.scrollTo({top:0,behavior:"instant"}),requestAnimationFrame(()=>{c===Yg&&l.isConnected&&window.scrollTo({top:0,behavior:"instant"})})):l.scrollIntoView({behavior:d.detail.behavior,block:"start"}),r&&l.focus({preventScroll:!0}))}function oT(s,{allowed:t=()=>!0,onState:i=()=>{}}={}){let r=0,l=!1,c=!1,h=!1;const d=()=>{h||i(c&&(l||!s.paused))};function m(){r++,l=!1,c=!1,s.pause(),d()}async function p(){if(h)return;if(l||!s.paused){m();return}if(!t()){m();return}const _=++r;l=!0,c=!0,d();try{if(await s.play(),_!==r||h)return;if(l=!1,!t()){m();return}d()}catch{if(_!==r||h)return;l=!1,c=!1,d()}}function g(){if(!c||h||!t()){m();return}d()}function x(){s.paused&&(r++,l=!1,c=!1,d())}return s.addEventListener("play",g),s.addEventListener("pause",x),s.addEventListener("ended",x),{toggle:p,cancel:m,dispose(){h=!0,m(),s.removeEventListener("play",g),s.removeEventListener("pause",x),s.removeEventListener("ended",x)}}}function lT({project:s,index:t,lang:i}){const r=dn.useRef(null),l=dn.useRef(null),c=dn.useRef(null),[h,d]=dn.useState(!1),m=i==="zh",p=m?1:0;dn.useEffect(()=>{const x=r.current,_=l.current,S=()=>{const L=_.getBoundingClientRect();return!document.hidden&&!x.inert&&L.bottom>0&&L.top<innerHeight&&L.right>0&&L.left<innerWidth},b=oT(_,{allowed:S,onState:d});c.current=b;const A=()=>b.cancel(),M=()=>{S()||A()},v=new IntersectionObserver(M);v.observe(_);const N=new MutationObserver(M);return N.observe(x,{attributes:!0,attributeFilter:["inert","aria-hidden"]}),x.addEventListener("portfolio:room-deactivate",A),document.addEventListener("visibilitychange",M),window.addEventListener("pagehide",A),()=>{v.disconnect(),N.disconnect(),x.removeEventListener("portfolio:room-deactivate",A),document.removeEventListener("visibilitychange",M),window.removeEventListener("pagehide",A),b.dispose(),c.current=null}},[]);const g=t+1<Qo.length?`project-${Qo[t+1].id}`:"about";return Gt.jsx("article",{ref:r,id:`project-${s.id}`,className:"gallery-room",style:{"--room-color":s.color,"--room-ink":s.ink},"aria-labelledby":`title-${s.id}`,children:Gt.jsxs("div",{className:"gallery-room__sticky",children:[Gt.jsxs("div",{className:"gallery-room__heading",children:[Gt.jsxs("span",{children:[String(t+1).padStart(2,"0")," / ",String(Qo.length).padStart(2,"0")]}),Gt.jsx("span",{children:s.medium[p]}),Gt.jsx("span",{children:m?"精选项目":"SELECTED WORK"})]}),Gt.jsxs("div",{className:"gallery-room__exhibit",children:[Gt.jsxs("div",{className:"gallery-room__frame",children:[Gt.jsx("video",{ref:l,controls:h,playsInline:!0,preload:"none",poster:s.poster,children:Gt.jsx("source",{src:s.video,type:"video/mp4"})}),Gt.jsx("button",{className:"gallery-room__play","aria-pressed":h,onClick:()=>{var x;return(x=c.current)==null?void 0:x.toggle()},children:h?m?"暂停演示":"Pause film":m?"播放演示 ↗":"Play film ↗"}),s.note&&Gt.jsx("small",{children:s.note[p]})]}),Gt.jsxs("div",{className:"gallery-room__label",children:[Gt.jsx("p",{children:s.subtitle}),Gt.jsx("h2",{id:`title-${s.id}`,tabIndex:-1,children:s.title}),Gt.jsx("p",{className:"gallery-room__summary",children:s.summary[p]}),Gt.jsx("ol",{className:"gallery-room__steps",children:s.steps.map((x,_)=>Gt.jsxs("li",{children:[Gt.jsxs("span",{children:["0",_+1]}),x[p]]},x[0]))}),Gt.jsxs("div",{className:"gallery-room__links",children:[Gt.jsx("a",{href:`${m?"/zh":""}/projects/${s.slug}/`,children:m?"完整项目介绍 ↗":"Read case study ↗"}),Gt.jsx("a",{href:s.repository,target:"_blank",rel:"noopener noreferrer",children:"GitHub ↗"}),s.live&&Gt.jsx("a",{href:s.live,target:"_blank",rel:"noopener noreferrer",children:m?"体验产品 ↗":"Try it ↗"})]})]})]}),Gt.jsxs("div",{className:"gallery-room__details",children:[s.features.map(x=>Gt.jsxs("details",{children:[Gt.jsx("summary",{children:x[p]}),Gt.jsx("p",{children:x[2+p]})]},x[0])),Gt.jsx("small",{children:s.stack})]}),Gt.jsxs("a",{className:"gallery-room__next",onClick:x=>{x.button===0&&!x.metaKey&&!x.ctrlKey&&!x.shiftKey&&!x.altKey&&(x.preventDefault(),ol(g))},href:`#${g}`,children:[t+1<Qo.length?m?"下一间展厅":"Next gallery":m?"关于我":"About me"," ↓"]})]})})}function cT({lang:s}){const t=dn.useRef(null);return dn.useEffect(()=>{const i=t.current,r=[...i.querySelectorAll(".gallery-room")],l=r.map(tt=>tt.querySelector(".gallery-room__sticky")),c=matchMedia("(max-width: 760px), (max-height: 650px)"),h=matchMedia("(prefers-reduced-motion: reduce)"),d=()=>`${c.matches}:${h.matches}`;let m=0,p=0,g=0,x=null,_=0,S=!1,b=null,A=null,M=null,v=!1,N=null,L=null,O=!1,P=d();const T=tt=>r[tt].querySelector("h2");function U(tt){const St=document.activeElement;r[tt].inert=!1,r[tt].removeAttribute("aria-hidden"),r[tt].style.visibility="visible",r.some((It,J)=>J!==tt&&It.contains(St))&&T(tt).focus({preventScroll:!0}),_=tt,r.forEach((It,J)=>{J!==tt&&It.dispatchEvent(new Event("portfolio:room-deactivate")),It.inert=J!==tt,It.setAttribute("aria-hidden",String(J!==tt))})}function W(){if(p||d()!==P)return;const tt=i.getBoundingClientRect(),St=document.getElementById("about"),It=St.getBoundingClientRect();if(St.contains(document.activeElement)&&It.top<innerHeight&&It.bottom>0){N={index:null,node:St,y:It.top};return}if(tt.top>=innerHeight||tt.bottom<=0){const jt=document.getElementById("about"),he=jt.getBoundingClientRect();N=tt.bottom<=0&&he.top<innerHeight&&he.bottom>0?{index:null,node:jt,y:he.top}:null;return}const J=document.activeElement,ft=r.findIndex(jt=>jt.contains(J)),Nt=ft>=0?ft:S?_:Math.max(0,r.findIndex(jt=>jt.getBoundingClientRect().bottom>0)),Lt=J!=null&&J.matches("summary")&&i.contains(J)?J:l[Nt];N={index:Nt,node:Lt,y:Lt.getBoundingClientRect().top}}function w(){S=!1,i.classList.remove("project-gallery--motion"),r.forEach(tt=>{tt.style.transform="",tt.style.visibility="",tt.inert=!1,tt.removeAttribute("aria-hidden")})}function C(){if(m=0,!(O||document.hidden)){if(S){const tt=i.getBoundingClientRect(),St=rT(-tt.top/Math.max(1,tt.height-innerHeight));r[0].style.transform=`translate3d(${St.outX}%,0,0) scale(${St.outScale}) rotateY(${St.outAngle}deg)`,r[1].style.transform=`translate3d(${St.inX}%,0,0)`,_!==St.active&&U(St.active),r[0].style.visibility=St.t===1?"hidden":"visible",r[1].style.visibility=St.t===0?"hidden":"visible",i.style.setProperty("--handoff-shade",St.shade),i.style.setProperty("--handoff-light",St.beam),i.style.setProperty("--handoff-light-x",`${St.beamX}%`)}b&&Math.abs(scrollY-b.top)<3&&(b.focus&&T(b.index).focus({preventScroll:!0}),b=null),W()}}function H(){!m&&!document.hidden&&(m=requestAnimationFrame(C))}function q(tt){return S?scrollY+i.getBoundingClientRect().top+(i.offsetHeight-innerHeight)*(tt===1?.76:0):scrollY+r[tt].getBoundingClientRect().top}function it(){p||(L=N,b=null,cancelAnimationFrame(m),m=0,p=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>{if(p=0,O)return;P=d(),M=L,L=null,ht();const tt=A;A=null,tt&&ol(tt.id,{...tt,history:!1})})}))}function ht(){if(O||p)return;if(d()!==P){it();return}const tt=M||N,St=!!M;M=null,i.classList.toggle("project-gallery--reading",v);const It=l.every(ft=>{const Nt=ft.getBoundingClientRect();return ft.scrollHeight<=innerHeight+2&&Nt.height<=innerHeight+2}),J=!c.matches&&!h.matches&&!v&&!i.querySelector("details[open]")&&It&&r.length===2;J!==S?(J?(S=!0,i.classList.add("project-gallery--motion"),U((tt==null?void 0:tt.index)??0)):w(),tt&&(S&&tt.index!==null?(window.scrollTo({top:q(tt.index),behavior:"instant"}),C()):window.scrollTo({top:scrollY+tt.node.getBoundingClientRect().top-tt.y,behavior:"instant"}))):tt&&!S&&(St||c.matches||h.matches||d()!==P)&&window.scrollTo({top:scrollY+tt.node.getBoundingClientRect().top-tt.y,behavior:"instant"}),b&&(b.top=q(b.index)),P=d(),C(),St&&(cancelAnimationFrame(g),x=tt,g=requestAnimationFrame(()=>{g=0,ot()}))}function ot(){const tt=x;x=null,tt&&!O&&(window.scrollTo({top:scrollY+tt.node.getBoundingClientRect().top-tt.y,behavior:"instant"}),C())}function F(tt){if(cancelAnimationFrame(g),g=0,x=null,p){tt.preventDefault(),A=tt.detail,L=null;return}const{id:St,behavior:It,focus:J}=tt.detail,ft=St==="work"?0:r.findIndex(Lt=>Lt.id===St);if(b=null,ft<0){St==="top"&&!i.querySelector("details[open]")&&(v=!1,ht());return}tt.preventDefault(),i.querySelector("details[open]")||(v=!1),ht();const Nt=q(ft);b={index:ft,top:Nt,focus:J},window.scrollTo({top:Nt,behavior:It}),It==="instant"&&C()}function j(tt){var J,ft;const St=(ft=(J=tt.target).closest)==null?void 0:ft.call(J,"summary");if(!St||tt.type==="keydown"&&!["Enter"," "].includes(tt.key))return;cancelAnimationFrame(g),g=0,ot(),M&&ht(),M={index:r.findIndex(Nt=>Nt.contains(St)),node:St,y:St.getBoundingClientRect().top},v=!0,b=null}function Z(){ht()}function yt(){document.hidden?(cancelAnimationFrame(m),m=0,b=null,r.forEach(tt=>tt.dispatchEvent(new Event("portfolio:room-deactivate")))):H()}function Mt(){b=null,cancelAnimationFrame(g),g=0,x=null}const I=new ResizeObserver(ht);l.forEach(tt=>I.observe(tt)),I.observe(document.querySelector(".sky-play")),addEventListener("scroll",H,{passive:!0}),addEventListener("scrollend",W),addEventListener("resize",ht),addEventListener("portfolio:navigate",F),addEventListener("wheel",Mt,{passive:!0}),addEventListener("touchstart",Mt,{passive:!0}),c.addEventListener("change",it),h.addEventListener("change",it),document.addEventListener("visibilitychange",yt),i.addEventListener("click",j,!0),i.addEventListener("keydown",j,!0),i.addEventListener("toggle",Z,!0),ht();const rt=requestAnimationFrame(()=>{location.hash&&ol(location.hash.slice(1),{history:!1,behavior:"instant",focus:!1})});return()=>{O=!0,cancelAnimationFrame(m),cancelAnimationFrame(p),cancelAnimationFrame(g),cancelAnimationFrame(rt),I.disconnect(),removeEventListener("scroll",H),removeEventListener("scrollend",W),removeEventListener("resize",ht),removeEventListener("portfolio:navigate",F),removeEventListener("wheel",Mt),removeEventListener("touchstart",Mt),c.removeEventListener("change",it),h.removeEventListener("change",it),document.removeEventListener("visibilitychange",yt),i.removeEventListener("click",j,!0),i.removeEventListener("keydown",j,!0),i.removeEventListener("toggle",Z,!0),w()}},[]),Gt.jsx("section",{ref:t,id:"work",className:"project-gallery",tabIndex:-1,"aria-label":s==="zh"?"项目画廊":"Project gallery",children:Gt.jsxs("div",{className:"project-gallery__stage",children:[Qo.map((i,r)=>Gt.jsx(lT,{project:i,index:r,lang:s},i.id)),Gt.jsxs("div",{className:"gallery-handoff","aria-hidden":"true",children:[Gt.jsx("div",{className:"gallery-handoff__shade"}),Gt.jsx("div",{className:"gallery-handoff__light"})]})]})})}function uT(){const[s,t]=dn.useState(()=>Wg(location.pathname)),i=s==="zh";dn.useEffect(()=>{document.documentElement.lang=i?"zh-CN":"en",document.title="Shehao Li — Selected Work"},[i]),dn.useEffect(()=>{const c=history.scrollRestoration,h=()=>{t(Wg(location.pathname)),ol(location.hash.slice(1)||"top",{history:!1,behavior:"instant"})};return history.scrollRestoration="manual",addEventListener("popstate",h),addEventListener("hashchange",h),()=>{removeEventListener("popstate",h),removeEventListener("hashchange",h),history.scrollRestoration=c}},[]);const r=c=>ol(c);function l(){const c=i?"en":"zh";history.pushState(null,"",sT(location.href,c)),t(c)}return Gt.jsxs("main",{className:"daybook",children:[Gt.jsxs("header",{id:"top",className:"daybook-header",tabIndex:-1,children:[Gt.jsx("button",{className:"daybook-wordmark",type:"button",onClick:()=>r("top"),children:"SHEHAO LI"}),Gt.jsxs("nav",{"aria-label":i?"主导航":"Primary navigation",children:[Gt.jsx("button",{onClick:()=>r("work"),children:i?"作品":"Work"}),Gt.jsx("a",{href:"/resume/",children:i?"简历":"Resume"}),Gt.jsx("button",{onClick:()=>r("about"),children:i?"关于":"About"})]}),Gt.jsxs("div",{className:"daybook-header__links",children:[Gt.jsxs("a",{className:"daybook-github",href:"https://github.com/lishehao",target:"_blank",rel:"noopener noreferrer",children:[Gt.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:Gt.jsx("path",{fill:"currentColor",d:"M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.65 1.23 3.29.94.1-.73.4-1.23.72-1.51-2.5-.29-5.13-1.25-5.13-5.55 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16A10.7 10.7 0 0 1 12 6.13c.95 0 1.9.13 2.8.38 2.14-1.45 3.08-1.16 3.08-1.16.61 1.55.23 2.69.11 2.98.72.79 1.15 1.8 1.15 3.03 0 4.32-2.64 5.26-5.15 5.54.4.35.76 1.04.76 2.1v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"})}),Gt.jsx("span",{children:"GitHub"})]}),Gt.jsx("button",{className:"daybook-language",onClick:l,"aria-label":i?"Switch to English":"切换为中文",children:i?"EN":"中文"})]})]}),Gt.jsx(iT,{lang:s,onWork:()=>r("work")}),Gt.jsx(cT,{lang:s}),Gt.jsxs("section",{id:"about",className:"daybook-about",tabIndex:-1,children:[Gt.jsx("div",{children:Gt.jsx("h2",{children:i?"先好奇，再把它做出来。":"Curious, then concrete."})}),Gt.jsxs("div",{className:"daybook-about__body",children:[Gt.jsx("p",{children:i?"加州大学圣地亚哥分校数学–计算机专业。我做 AI 产品、互动体验，以及让日常工程工作更可靠的工具。":"Math–CS at UC San Diego. I build AI products, interactive experiences, and tools for everyday engineering work."}),Gt.jsx("a",{href:"https://github.com/lishehao",target:"_blank",rel:"noreferrer",children:"GitHub / lishehao ↗"}),Gt.jsx("a",{href:"/resume/",children:i?"查看简历 ↗":"Resume ↗"})]}),Gt.jsx("button",{className:"daybook-top",onClick:()=>r("top"),children:i?"回到顶部":"Back to top"})]}),Gt.jsx("footer",{className:"daybook-footer",children:Gt.jsxs("span",{children:["© ",new Date().getFullYear()," Shehao Li"]})})]})}function fT(){return Gt.jsx(uT,{})}Gy.createRoot(document.getElementById("root")).render(Gt.jsx(Oy.StrictMode,{children:Gt.jsx(fT,{})}));
