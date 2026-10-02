(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ry(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var eh={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax;function Cy(){if(Ax)return Fo;Ax=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=t,Fo.jsx=i,Fo.jsxs=i,Fo}var Rx;function wy(){return Rx||(Rx=1,eh.exports=Cy()),eh.exports}var Gt=wy(),nh={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx;function Dy(){if(Cx)return Se;Cx=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function v(I,st,et){this.props=I,this.context=st,this.refs=M,this.updater=et||b}v.prototype.isReactComponent={},v.prototype.setState=function(I,st){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,st,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function N(){}N.prototype=v.prototype;function L(I,st,et){this.props=I,this.context=st,this.refs=M,this.updater=et||b}var O=L.prototype=new N;O.constructor=L,A(O,v.prototype),O.isPureReactComponent=!0;var P=Array.isArray;function T(){}var U={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function w(I,st,et){var bt=et.ref;return{$$typeof:s,type:I,key:st,ref:bt!==void 0?bt:null,props:et}}function C(I,st){return w(I.type,st,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function q(I){var st={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(et){return st[et]})}var at=/\/+/g;function dt(I,st){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):st.toString(36)}function ut(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(T,T):(I.status="pending",I.then(function(st){I.status==="pending"&&(I.status="fulfilled",I.value=st)},function(st){I.status==="pending"&&(I.status="rejected",I.reason=st)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,st,et,bt,zt){var J=typeof I;(J==="undefined"||J==="boolean")&&(I=null);var ht=!1;if(I===null)ht=!0;else switch(J){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(I.$$typeof){case s:case t:ht=!0;break;case g:return ht=I._init,F(ht(I._payload),st,et,bt,zt)}}if(ht)return zt=zt(I),ht=bt===""?"."+dt(I,0):bt,P(zt)?(et="",ht!=null&&(et=ht.replace(at,"$&/")+"/"),F(zt,st,et,"",function(qt){return qt})):zt!=null&&(G(zt)&&(zt=C(zt,et+(zt.key==null||I&&I.key===zt.key?"":(""+zt.key).replace(at,"$&/")+"/")+ht)),st.push(zt)),1;ht=0;var Pt=bt===""?".":bt+":";if(P(I))for(var Nt=0;Nt<I.length;Nt++)bt=I[Nt],J=Pt+dt(bt,Nt),ht+=F(bt,st,et,J,zt);else if(Nt=S(I),typeof Nt=="function")for(I=Nt.call(I),Nt=0;!(bt=I.next()).done;)bt=bt.value,J=Pt+dt(bt,Nt++),ht+=F(bt,st,et,J,zt);else if(J==="object"){if(typeof I.then=="function")return F(ut(I),st,et,bt,zt);throw st=String(I),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return ht}function j(I,st,et){if(I==null)return I;var bt=[],zt=0;return F(I,bt,"","",function(J){return st.call(et,J,zt++)}),bt}function Z(I){if(I._status===-1){var st=I._result;st=st(),st.then(function(et){(I._status===0||I._status===-1)&&(I._status=1,I._result=et)},function(et){(I._status===0||I._status===-1)&&(I._status=2,I._result=et)}),I._status===-1&&(I._status=0,I._result=st)}if(I._status===1)return I._result.default;throw I._result}var Mt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Et={map:j,forEach:function(I,st,et){j(I,function(){st.apply(this,arguments)},et)},count:function(I){var st=0;return j(I,function(){st++}),st},toArray:function(I){return j(I,function(st){return st})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Se.Activity=x,Se.Children=Et,Se.Component=v,Se.Fragment=i,Se.Profiler=l,Se.PureComponent=L,Se.StrictMode=r,Se.Suspense=m,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,Se.__COMPILER_RUNTIME={__proto__:null,c:function(I){return U.H.useMemoCache(I)}},Se.cache=function(I){return function(){return I.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(I,st,et){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var bt=A({},I.props),zt=I.key;if(st!=null)for(J in st.key!==void 0&&(zt=""+st.key),st)!W.call(st,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&st.ref===void 0||(bt[J]=st[J]);var J=arguments.length-2;if(J===1)bt.children=et;else if(1<J){for(var ht=Array(J),Pt=0;Pt<J;Pt++)ht[Pt]=arguments[Pt+2];bt.children=ht}return w(I.type,zt,bt)},Se.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Se.createElement=function(I,st,et){var bt,zt={},J=null;if(st!=null)for(bt in st.key!==void 0&&(J=""+st.key),st)W.call(st,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(zt[bt]=st[bt]);var ht=arguments.length-2;if(ht===1)zt.children=et;else if(1<ht){for(var Pt=Array(ht),Nt=0;Nt<ht;Nt++)Pt[Nt]=arguments[Nt+2];zt.children=Pt}if(I&&I.defaultProps)for(bt in ht=I.defaultProps,ht)zt[bt]===void 0&&(zt[bt]=ht[bt]);return w(I,J,zt)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(I){return{$$typeof:d,render:I}},Se.isValidElement=G,Se.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:Z}},Se.memo=function(I,st){return{$$typeof:p,type:I,compare:st===void 0?null:st}},Se.startTransition=function(I){var st=U.T,et={};U.T=et;try{var bt=I(),zt=U.S;zt!==null&&zt(et,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(T,Mt)}catch(J){Mt(J)}finally{st!==null&&et.types!==null&&(st.types=et.types),U.T=st}},Se.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},Se.use=function(I){return U.H.use(I)},Se.useActionState=function(I,st,et){return U.H.useActionState(I,st,et)},Se.useCallback=function(I,st){return U.H.useCallback(I,st)},Se.useContext=function(I){return U.H.useContext(I)},Se.useDebugValue=function(){},Se.useDeferredValue=function(I,st){return U.H.useDeferredValue(I,st)},Se.useEffect=function(I,st){return U.H.useEffect(I,st)},Se.useEffectEvent=function(I){return U.H.useEffectEvent(I)},Se.useId=function(){return U.H.useId()},Se.useImperativeHandle=function(I,st,et){return U.H.useImperativeHandle(I,st,et)},Se.useInsertionEffect=function(I,st){return U.H.useInsertionEffect(I,st)},Se.useLayoutEffect=function(I,st){return U.H.useLayoutEffect(I,st)},Se.useMemo=function(I,st){return U.H.useMemo(I,st)},Se.useOptimistic=function(I,st){return U.H.useOptimistic(I,st)},Se.useReducer=function(I,st,et){return U.H.useReducer(I,st,et)},Se.useRef=function(I){return U.H.useRef(I)},Se.useState=function(I){return U.H.useState(I)},Se.useSyncExternalStore=function(I,st,et){return U.H.useSyncExternalStore(I,st,et)},Se.useTransition=function(){return U.H.useTransition()},Se.version="19.2.0",Se}var wx;function Ud(){return wx||(wx=1,nh.exports=Dy()),nh.exports}var fn=Ud();const Uy=Ry(fn);var ih={exports:{}},Ho={},ah={exports:{}},rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx;function Ly(){return Dx||(Dx=1,(function(s){function t(F,j){var Z=F.length;F.push(j);t:for(;0<Z;){var Mt=Z-1>>>1,Et=F[Mt];if(0<l(Et,j))F[Mt]=j,F[Z]=Et,Z=Mt;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var j=F[0],Z=F.pop();if(Z!==j){F[0]=Z;t:for(var Mt=0,Et=F.length,I=Et>>>1;Mt<I;){var st=2*(Mt+1)-1,et=F[st],bt=st+1,zt=F[bt];if(0>l(et,Z))bt<Et&&0>l(zt,et)?(F[Mt]=zt,F[bt]=Z,Mt=bt):(F[Mt]=et,F[st]=Z,Mt=st);else if(bt<Et&&0>l(zt,Z))F[Mt]=zt,F[bt]=Z,Mt=bt;else break t}}return j}function l(F,j){var Z=F.sortIndex-j.sortIndex;return Z!==0?Z:F.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,_=3,S=!1,b=!1,A=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function O(F){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=F)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function P(F){if(A=!1,O(F),!b)if(i(m)!==null)b=!0,T||(T=!0,q());else{var j=i(p);j!==null&&ut(P,j.startTime-F)}}var T=!1,U=-1,W=5,w=-1;function C(){return M?!0:!(s.unstable_now()-w<W)}function G(){if(M=!1,T){var F=s.unstable_now();w=F;var j=!0;try{t:{b=!1,A&&(A=!1,N(U),U=-1),S=!0;var Z=_;try{e:{for(O(F),x=i(m);x!==null&&!(x.expirationTime>F&&C());){var Mt=x.callback;if(typeof Mt=="function"){x.callback=null,_=x.priorityLevel;var Et=Mt(x.expirationTime<=F);if(F=s.unstable_now(),typeof Et=="function"){x.callback=Et,O(F),j=!0;break e}x===i(m)&&r(m),O(F)}else r(m);x=i(m)}if(x!==null)j=!0;else{var I=i(p);I!==null&&ut(P,I.startTime-F),j=!1}}break t}finally{x=null,_=Z,S=!1}j=void 0}}finally{j?q():T=!1}}}var q;if(typeof L=="function")q=function(){L(G)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,dt=at.port2;at.port1.onmessage=G,q=function(){dt.postMessage(null)}}else q=function(){v(G,0)};function ut(F,j){U=v(function(){F(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(F){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var Z=_;_=j;try{return F()}finally{_=Z}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=_;_=F;try{return j()}finally{_=Z}},s.unstable_scheduleCallback=function(F,j,Z){var Mt=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Mt+Z:Mt):Z=Mt,F){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Z+Et,F={id:g++,callback:j,priorityLevel:F,startTime:Z,expirationTime:Et,sortIndex:-1},Z>Mt?(F.sortIndex=Z,t(p,F),i(m)===null&&F===i(p)&&(A?(N(U),U=-1):A=!0,ut(P,Z-Mt))):(F.sortIndex=Et,t(m,F),b||S||(b=!0,T||(T=!0,q()))),F},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(F){var j=_;return function(){var Z=_;_=j;try{return F.apply(this,arguments)}finally{_=Z}}}})(rh)),rh}var Ux;function Ny(){return Ux||(Ux=1,ah.exports=Ly()),ah.exports}var sh={exports:{}},Wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx;function Oy(){if(Lx)return Wn;Lx=1;var s=Ud();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Wn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Wn.requestFormReset=function(m){r.d.r(m)},Wn.unstable_batchedUpdates=function(m,p){return m(p)},Wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Wn.version="19.2.0",Wn}var Nx;function Py(){if(Nx)return sh.exports;Nx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),sh.exports=Oy(),sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox;function zy(){if(Ox)return Ho;Ox=1;var s=Ny(),t=Ud(),i=Py();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=f;break}if(R===o){y=!0,o=u,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,o=u;break}if(R===o){y=!0,o=f,a=u;break}R=R.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case T:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Mt=[],Et=-1;function I(e){return{current:e}}function st(e){0>Et||(e.current=Mt[Et],Mt[Et]=null,Et--)}function et(e,n){Et++,Mt[Et]=e.current,e.current=n}var bt=I(null),zt=I(null),J=I(null),ht=I(null);function Pt(e,n){switch(et(J,n),et(zt,e),et(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Zm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Zm(n),e=Km(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}st(bt),et(bt,e)}function Nt(){st(bt),st(zt),st(J)}function qt(e){e.memoizedState!==null&&et(ht,e);var n=bt.current,a=Km(n,e.type);n!==a&&(et(zt,e),et(bt,a))}function de(e){zt.current===e&&(st(bt),st(zt)),ht.current===e&&(st(ht),Po._currentValue=Z)}var He,_e;function ze(e){if(He===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);He=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+He+e+_e}var V=!1;function gt(e,n){if(!e||V)return"";V=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(xt){var ft=xt}Reflect.construct(e,[],Ct)}else{try{Ct.call()}catch(xt){ft=xt}e.call(Ct.prototype)}}else{try{throw Error()}catch(xt){ft=xt}(Ct=e())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(xt){if(xt&&ft&&typeof xt.stack=="string")return[xt.stack,ft.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var H=y.split(`
`),ot=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ot.length)for(o=H.length-1,u=ot.length-1;1<=o&&0<=u&&H[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ot[u]){var yt=`
`+H[o].replace(" at new "," at ");return e.displayName&&yt.includes("<anonymous>")&&(yt=yt.replace("<anonymous>",e.displayName)),yt}while(1<=o&&0<=u);break}}}finally{V=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ze(a):""}function ye(e,n){switch(e.tag){case 26:case 27:case 5:return ze(e.type);case 16:return ze("Lazy");case 13:return e.child!==n&&n!==null?ze("Suspense Fallback"):ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return gt(e.type,!1);case 11:return gt(e.type.render,!1);case 1:return gt(e.type,!0);case 31:return ze("Activity");default:return""}}function xe(e){try{var n="",a=null;do n+=ye(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Jt=Object.prototype.hasOwnProperty,Ae=s.unstable_scheduleCallback,Kt=s.unstable_cancelCallback,pe=s.unstable_shouldYield,z=s.unstable_requestPaint,E=s.unstable_now,Y=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,wt=s.unstable_UserBlockingPriority,mt=s.unstable_NormalPriority,ee=s.unstable_LowPriority,kt=s.unstable_IdlePriority,ne=s.log,$t=s.unstable_setDisableYieldValue,Dt=null,Lt=null;function ie(e){if(typeof ne=="function"&&$t(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(Dt,e)}catch{}}var Qt=Math.clz32?Math.clz32:k,Yt=Math.log,le=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Yt(e)/le|0)|0}var Vt=256,Ft=262144,It=4194304;function Ot(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ot(o):(y&=R,y!==0?u=Ot(y):a||(a=R&~e,a!==0&&(u=Ot(a))))):(R=o&~f,R!==0?u=Ot(R):y!==0?u=Ot(y):a||(a=o&~e,a!==0&&(u=Ot(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ge(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function De(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Ie(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Rn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _n(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,ot=e.hiddenUpdates;for(a=y&~a;0<a;){var yt=31-Qt(a),Ct=1<<yt;R[yt]=0,H[yt]=-1;var ft=ot[yt];if(ft!==null)for(ot[yt]=null,yt=0;yt<ft.length;yt++){var xt=ft[yt];xt!==null&&(xt.lane&=-536870913)}a&=~Ct}o!==0&&ea(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function ea(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Qt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function fr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Qt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function cn(e,n){var a=n&-n;return a=(a&42)!==0?1:oi(a),(a&(e.suspendedLanes|n))!==0?0:a}function oi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hr(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:_x(e.type))}function Ua(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var Xn=Math.random().toString(36).slice(2),un="__reactFiber$"+Xn,pn="__reactProps$"+Xn,qn="__reactContainer$"+Xn,zn="__reactEvents$"+Xn,dr="__reactListeners$"+Xn,Xr="__reactHandles$"+Xn,pr="__reactResources$"+Xn,ki="__reactMarker$"+Xn;function Xi(e){delete e[un],delete e[pn],delete e[zn],delete e[dr],delete e[Xr]}function _i(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[qn]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ix(e);e!==null;){if(a=e[un])return a;e=ix(e)}return n}e=a,a=e.parentNode}return null}function D(e){if(e=e[un]||e[qn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function K(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function lt(e){var n=e[pr];return n||(n=e[pr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(e){e[ki]=!0}var $=new Set,B={};function tt(e,n){it(e,n),it(e+"Capture",n)}function it(e,n){for(B[e]=n,e=0;e<n.length;e++)$.add(n[e])}var At=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vt={},St={};function Ut(e){return Jt.call(St,e)?!0:Jt.call(vt,e)?!1:At.test(e)?St[e]=!0:(vt[e]=!0,!1)}function Xt(e,n,a){if(Ut(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ae(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function se(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ht(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ue(e){if(!e._valueTracker){var n=Bt(e)?"checked":"value";e._valueTracker=Ht(e,n,""+e[n])}}function jt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Bt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function oe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var on=/[\n"\\]/g;function fe(e){return e.replace(on,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function mn(e,n,a,o,u,f,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ct(n)):e.value!==""+ct(n)&&(e.value=""+ct(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Re(e,y,ct(n)):a!=null?Re(e,y,ct(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ct(R):e.removeAttribute("name")}function ve(e,n,a,o,u,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ue(e);return}a=a!=null?""+ct(a):"",n=n!=null?""+ct(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),ue(e)}function Re(e,n,a){n==="number"&&oe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ge(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ct(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function he(e,n,a){if(n!=null&&(n=""+ct(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ct(a):""}function Ve(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ut(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ct(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),ue(e)}function Ze(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var In=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||In.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Be(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&an(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&an(e,f,n[f])}function je(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Un=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return qr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wr=null,Yr=null;function jd(e){var n=D(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[pn]||null;if(!u)throw Error(r(90));mn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&jt(o)}break t;case"textarea":he(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ge(e,!!a.multiple,n,!1)}}}var $c=!1;function Zd(e,n,a){if($c)return e(n,a);$c=!0;try{var o=e(n);return o}finally{if($c=!1,(Wr!==null||Yr!==null)&&(Zl(),Wr&&(n=Wr,e=Yr,Yr=Wr=null,jd(n),e)))for(n=0;n<e.length;n++)jd(e[n])}}function Qs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(ia)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{tu=!1}var La=null,eu=null,cl=null;function Kd(){if(cl)return cl;var e,n=eu,a=n.length,o,u="value"in La?La.value:La.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function Qd(){return!1}function ti(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:Qd,this.isPropagationStopped=Qd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=ti(mr),$s=x({},mr,{view:0,detail:0}),Tv=ti($s),nu,iu,to,dl=x({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(nu=e.screenX-to.screenX,iu=e.screenY-to.screenY):iu=nu=0,to=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),Jd=ti(dl),Av=x({},dl,{dataTransfer:0}),Rv=ti(Av),Cv=x({},$s,{relatedTarget:0}),au=ti(Cv),wv=x({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=ti(wv),Uv=x({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lv=ti(Uv),Nv=x({},mr,{data:0}),$d=ti(Nv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zv[e])?!!n[e]:!1}function ru(){return Iv}var Bv=x({},$s,{key:function(e){if(e.key){var n=Ov[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fv=ti(Bv),Hv=x({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=ti(Hv),Gv=x({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Vv=ti(Gv),kv=x({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=ti(kv),qv=x({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=ti(qv),Yv=x({},mr,{newState:0,oldState:0}),jv=ti(Yv),Zv=[9,13,27,32],su=ia&&"CompositionEvent"in window,eo=null;ia&&"documentMode"in document&&(eo=document.documentMode);var Kv=ia&&"TextEvent"in window&&!eo,ep=ia&&(!su||eo&&8<eo&&11>=eo),np=" ",ip=!1;function ap(e,n){switch(e){case"keyup":return Zv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function Qv(e,n){switch(e){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(ip=!0,np);case"textInput":return e=n.data,e===np&&ip?null:e;default:return null}}function Jv(e,n){if(jr)return e==="compositionend"||!su&&ap(e,n)?(e=Kd(),cl=eu=La=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ep&&n.locale!=="ko"?null:n.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$v[e.type]:n==="textarea"}function op(e,n,a,o){Wr?Yr?Yr.push(o):Yr=[o]:Wr=o,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var no=null,io=null;function t_(e){km(e,0)}function pl(e){var n=K(e);if(jt(n))return e}function lp(e,n){if(e==="change")return n}var cp=!1;if(ia){var ou;if(ia){var lu="oninput"in document;if(!lu){var up=document.createElement("div");up.setAttribute("oninput","return;"),lu=typeof up.oninput=="function"}ou=lu}else ou=!1;cp=ou&&(!document.documentMode||9<document.documentMode)}function fp(){no&&(no.detachEvent("onpropertychange",hp),io=no=null)}function hp(e){if(e.propertyName==="value"&&pl(io)){var n=[];op(n,io,e,Jc(e)),Zd(t_,n)}}function e_(e,n,a){e==="focusin"?(fp(),no=n,io=a,no.attachEvent("onpropertychange",hp)):e==="focusout"&&fp()}function n_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(io)}function i_(e,n){if(e==="click")return pl(n)}function a_(e,n){if(e==="input"||e==="change")return pl(n)}function r_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var li=typeof Object.is=="function"?Object.is:r_;function ao(e,n){if(li(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Jt.call(n,u)||!li(e[u],n[u]))return!1}return!0}function dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pp(e,n){var a=dp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=dp(a)}}function mp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?mp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=oe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=oe(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var s_=ia&&"documentMode"in document&&11>=document.documentMode,Zr=null,uu=null,ro=null,fu=!1;function gp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Zr==null||Zr!==oe(o)||(o=Zr,"selectionStart"in o&&cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&ao(ro,o)||(ro=o,o=nc(uu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Zr)))}function xr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Kr={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},hu={},vp={};ia&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function gr(e){if(hu[e])return hu[e];if(!Kr[e])return e;var n=Kr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in vp)return hu[e]=n[a];return e}var _p=gr("animationend"),yp=gr("animationiteration"),Sp=gr("animationstart"),o_=gr("transitionrun"),l_=gr("transitionstart"),c_=gr("transitioncancel"),Mp=gr("transitionend"),bp=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function Ni(e,n){bp.set(e,n),tt(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],Qr=0,pu=0;function xl(){for(var e=Qr,n=pu=Qr=0;n<e;){var a=yi[n];yi[n++]=null;var o=yi[n];yi[n++]=null;var u=yi[n];yi[n++]=null;var f=yi[n];if(yi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Ep(a,u,f)}}function gl(e,n,a,o){yi[Qr++]=e,yi[Qr++]=n,yi[Qr++]=a,yi[Qr++]=o,pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mu(e,n,a,o){return gl(e,n,a,o),vl(e)}function vr(e,n){return gl(e,null,null,n),vl(e)}function Ep(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Qt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<Co)throw Co=0,Tf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Jr={};function u_(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,n,a,o){return new u_(e,n,a,o)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,n){var a=e.alternate;return a===null?(a=ci(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Tp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _l(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")xu(e)&&(y=1);else if(typeof e=="string")y=my(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=ci(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return _r(a.children,u,f,n);case M:y=8,u|=24;break;case v:return e=ci(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case P:return e=ci(13,a,n,u),e.elementType=P,e.lanes=f,e;case T:return e=ci(19,a,n,u),e.elementType=T,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break t;case N:y=9;break t;case O:y=11;break t;case U:y=14;break t;case W:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ci(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function _r(e,n,a,o){return e=ci(7,e,o,n),e.lanes=a,e}function gu(e,n,a){return e=ci(6,e,null,n),e.lanes=a,e}function Ap(e){var n=ci(18,null,null,0);return n.stateNode=e,n}function vu(e,n,a){return n=ci(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Rp=new WeakMap;function Si(e,n){if(typeof e=="object"&&e!==null){var a=Rp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:xe(n)},Rp.set(e,n),n)}return{value:e,source:n,stack:xe(n)}}var $r=[],ts=0,yl=null,so=0,Mi=[],bi=0,Na=null,qi=1,Wi="";function ra(e,n){$r[ts++]=so,$r[ts++]=yl,yl=e,so=n}function Cp(e,n,a){Mi[bi++]=qi,Mi[bi++]=Wi,Mi[bi++]=Na,Na=e;var o=qi;e=Wi;var u=32-Qt(o)-1;o&=~(1<<u),a+=1;var f=32-Qt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,qi=1<<32-Qt(n)+u|a<<u|o,Wi=f+e}else qi=1<<f|a<<u|o,Wi=e}function _u(e){e.return!==null&&(ra(e,1),Cp(e,1,0))}function yu(e){for(;e===yl;)yl=$r[--ts],$r[ts]=null,so=$r[--ts],$r[ts]=null;for(;e===Na;)Na=Mi[--bi],Mi[bi]=null,Wi=Mi[--bi],Mi[bi]=null,qi=Mi[--bi],Mi[bi]=null}function wp(e,n){Mi[bi++]=qi,Mi[bi++]=Wi,Mi[bi++]=Na,qi=n.id,Wi=n.overflow,Na=e}var Bn=null,rn=null,Fe=!1,Oa=null,Ei=!1,Su=Error(r(519));function Pa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(Si(n,e)),Su}function Dp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[pn]=o,a){case"dialog":Le("cancel",n),Le("close",n);break;case"iframe":case"object":case"embed":Le("load",n);break;case"video":case"audio":for(a=0;a<Do.length;a++)Le(Do[a],n);break;case"source":Le("error",n);break;case"img":case"image":case"link":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"input":Le("invalid",n),ve(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Le("invalid",n);break;case"textarea":Le("invalid",n),Ve(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ym(n.textContent,a)?(o.popover!=null&&(Le("beforetoggle",n),Le("toggle",n)),o.onScroll!=null&&Le("scroll",n),o.onScrollEnd!=null&&Le("scrollend",n),o.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||Pa(e,!0)}function Up(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Bn=Bn.return}}function es(e){if(e!==Bn)return!1;if(!Fe)return Up(e),Fe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&rn&&Pa(e),Up(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));rn=nx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));rn=nx(e)}else n===27?(n=rn,Za(e.type)?(e=qf,qf=null,rn=e):rn=n):rn=Bn?Ai(e.stateNode.nextSibling):null;return!0}function yr(){rn=Bn=null,Fe=!1}function Mu(){var e=Oa;return e!==null&&(ai===null?ai=e:ai.push.apply(ai,e),Oa=null),e}function oo(e){Oa===null?Oa=[e]:Oa.push(e)}var bu=I(null),Sr=null,sa=null;function za(e,n,a){et(bu,n._currentValue),n._currentValue=a}function oa(e){e._currentValue=bu.current,st(bu)}function Eu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Tu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Eu(f.return,a,e),o||(y=null);break t}f=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Eu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function ns(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=u.type;li(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===ht.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}u=u.return}e!==null&&Tu(n,e,a,o),n.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Mr(e){Sr=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fn(e){return Lp(Sr,e)}function Ml(e,n){return Sr===null&&Mr(e),Lp(e,n)}function Lp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(r(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var f_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},h_=s.unstable_scheduleCallback,d_=s.unstable_NormalPriority,Mn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new f_,data:new Map,refCount:0}}function lo(e){e.refCount--,e.refCount===0&&h_(d_,function(){e.controller.abort()})}var co=null,Ru=0,is=0,as=null;function p_(e,n){if(co===null){var a=co=[];Ru=0,is=Uf(),as={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ru++,n.then(Np,Np),n}function Np(){if(--Ru===0&&co!==null){as!==null&&(as.status="fulfilled");var e=co;co=null,is=0,as=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function m_(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Op=F.S;F.S=function(e,n){gm=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&p_(e,n),Op!==null&&Op(e,n)};var br=I(null);function Cu(){var e=br.current;return e!==null?e:nn.pooledCache}function bl(e,n){n===null?et(br,br.current):et(br,n.pool)}function Pp(){var e=Cu();return e===null?null:{parent:Mn._currentValue,pool:e}}var rs=Error(r(460)),wu=Error(r(474)),El=Error(r(542)),Tl={then:function(){}};function zp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ip(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(na,na),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Fp(e),e;default:if(typeof n.status=="string")n.then(na,na);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Fp(e),e}throw Tr=n,rs}}function Er(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Tr=a,rs):a}}var Tr=null;function Bp(){if(Tr===null)throw Error(r(459));var e=Tr;return Tr=null,e}function Fp(e){if(e===rs||e===El)throw Error(r(483))}var ss=null,uo=0;function Al(e){var n=uo;return uo+=1,ss===null&&(ss=[]),Ip(ss,e,n)}function fo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hp(e){function n(Q,X){if(e){var rt=Q.deletions;rt===null?(Q.deletions=[X],Q.flags|=16):rt.push(X)}}function a(Q,X){if(!e)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=aa(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,rt){return Q.index=rt,e?(rt=Q.alternate,rt!==null?(rt=rt.index,rt<X?(Q.flags|=67108866,X):rt):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function y(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,X,rt,Tt){return X===null||X.tag!==6?(X=gu(rt,Q.mode,Tt),X.return=Q,X):(X=u(X,rt),X.return=Q,X)}function H(Q,X,rt,Tt){var ce=rt.type;return ce===A?yt(Q,X,rt.props.children,Tt,rt.key):X!==null&&(X.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===W&&Er(ce)===X.type)?(X=u(X,rt.props),fo(X,rt),X.return=Q,X):(X=_l(rt.type,rt.key,rt.props,null,Q.mode,Tt),fo(X,rt),X.return=Q,X)}function ot(Q,X,rt,Tt){return X===null||X.tag!==4||X.stateNode.containerInfo!==rt.containerInfo||X.stateNode.implementation!==rt.implementation?(X=vu(rt,Q.mode,Tt),X.return=Q,X):(X=u(X,rt.children||[]),X.return=Q,X)}function yt(Q,X,rt,Tt,ce){return X===null||X.tag!==7?(X=_r(rt,Q.mode,Tt,ce),X.return=Q,X):(X=u(X,rt),X.return=Q,X)}function Ct(Q,X,rt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=gu(""+X,Q.mode,rt),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return rt=_l(X.type,X.key,X.props,null,Q.mode,rt),fo(rt,X),rt.return=Q,rt;case b:return X=vu(X,Q.mode,rt),X.return=Q,X;case W:return X=Er(X),Ct(Q,X,rt)}if(ut(X)||q(X))return X=_r(X,Q.mode,rt,null),X.return=Q,X;if(typeof X.then=="function")return Ct(Q,Al(X),rt);if(X.$$typeof===L)return Ct(Q,Ml(Q,X),rt);Rl(Q,X)}return null}function ft(Q,X,rt,Tt){var ce=X!==null?X.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return ce!==null?null:R(Q,X,""+rt,Tt);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case S:return rt.key===ce?H(Q,X,rt,Tt):null;case b:return rt.key===ce?ot(Q,X,rt,Tt):null;case W:return rt=Er(rt),ft(Q,X,rt,Tt)}if(ut(rt)||q(rt))return ce!==null?null:yt(Q,X,rt,Tt,null);if(typeof rt.then=="function")return ft(Q,X,Al(rt),Tt);if(rt.$$typeof===L)return ft(Q,X,Ml(Q,rt),Tt);Rl(Q,rt)}return null}function xt(Q,X,rt,Tt,ce){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return Q=Q.get(rt)||null,R(X,Q,""+Tt,ce);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case S:return Q=Q.get(Tt.key===null?rt:Tt.key)||null,H(X,Q,Tt,ce);case b:return Q=Q.get(Tt.key===null?rt:Tt.key)||null,ot(X,Q,Tt,ce);case W:return Tt=Er(Tt),xt(Q,X,rt,Tt,ce)}if(ut(Tt)||q(Tt))return Q=Q.get(rt)||null,yt(X,Q,Tt,ce,null);if(typeof Tt.then=="function")return xt(Q,X,rt,Al(Tt),ce);if(Tt.$$typeof===L)return xt(Q,X,rt,Ml(X,Tt),ce);Rl(X,Tt)}return null}function te(Q,X,rt,Tt){for(var ce=null,Xe=null,re=X,Ee=X=0,Oe=null;re!==null&&Ee<rt.length;Ee++){re.index>Ee?(Oe=re,re=null):Oe=re.sibling;var qe=ft(Q,re,rt[Ee],Tt);if(qe===null){re===null&&(re=Oe);break}e&&re&&qe.alternate===null&&n(Q,re),X=f(qe,X,Ee),Xe===null?ce=qe:Xe.sibling=qe,Xe=qe,re=Oe}if(Ee===rt.length)return a(Q,re),Fe&&ra(Q,Ee),ce;if(re===null){for(;Ee<rt.length;Ee++)re=Ct(Q,rt[Ee],Tt),re!==null&&(X=f(re,X,Ee),Xe===null?ce=re:Xe.sibling=re,Xe=re);return Fe&&ra(Q,Ee),ce}for(re=o(re);Ee<rt.length;Ee++)Oe=xt(re,Q,Ee,rt[Ee],Tt),Oe!==null&&(e&&Oe.alternate!==null&&re.delete(Oe.key===null?Ee:Oe.key),X=f(Oe,X,Ee),Xe===null?ce=Oe:Xe.sibling=Oe,Xe=Oe);return e&&re.forEach(function(tr){return n(Q,tr)}),Fe&&ra(Q,Ee),ce}function me(Q,X,rt,Tt){if(rt==null)throw Error(r(151));for(var ce=null,Xe=null,re=X,Ee=X=0,Oe=null,qe=rt.next();re!==null&&!qe.done;Ee++,qe=rt.next()){re.index>Ee?(Oe=re,re=null):Oe=re.sibling;var tr=ft(Q,re,qe.value,Tt);if(tr===null){re===null&&(re=Oe);break}e&&re&&tr.alternate===null&&n(Q,re),X=f(tr,X,Ee),Xe===null?ce=tr:Xe.sibling=tr,Xe=tr,re=Oe}if(qe.done)return a(Q,re),Fe&&ra(Q,Ee),ce;if(re===null){for(;!qe.done;Ee++,qe=rt.next())qe=Ct(Q,qe.value,Tt),qe!==null&&(X=f(qe,X,Ee),Xe===null?ce=qe:Xe.sibling=qe,Xe=qe);return Fe&&ra(Q,Ee),ce}for(re=o(re);!qe.done;Ee++,qe=rt.next())qe=xt(re,Q,Ee,qe.value,Tt),qe!==null&&(e&&qe.alternate!==null&&re.delete(qe.key===null?Ee:qe.key),X=f(qe,X,Ee),Xe===null?ce=qe:Xe.sibling=qe,Xe=qe);return e&&re.forEach(function(Ay){return n(Q,Ay)}),Fe&&ra(Q,Ee),ce}function tn(Q,X,rt,Tt){if(typeof rt=="object"&&rt!==null&&rt.type===A&&rt.key===null&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case S:t:{for(var ce=rt.key;X!==null;){if(X.key===ce){if(ce=rt.type,ce===A){if(X.tag===7){a(Q,X.sibling),Tt=u(X,rt.props.children),Tt.return=Q,Q=Tt;break t}}else if(X.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===W&&Er(ce)===X.type){a(Q,X.sibling),Tt=u(X,rt.props),fo(Tt,rt),Tt.return=Q,Q=Tt;break t}a(Q,X);break}else n(Q,X);X=X.sibling}rt.type===A?(Tt=_r(rt.props.children,Q.mode,Tt,rt.key),Tt.return=Q,Q=Tt):(Tt=_l(rt.type,rt.key,rt.props,null,Q.mode,Tt),fo(Tt,rt),Tt.return=Q,Q=Tt)}return y(Q);case b:t:{for(ce=rt.key;X!==null;){if(X.key===ce)if(X.tag===4&&X.stateNode.containerInfo===rt.containerInfo&&X.stateNode.implementation===rt.implementation){a(Q,X.sibling),Tt=u(X,rt.children||[]),Tt.return=Q,Q=Tt;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}Tt=vu(rt,Q.mode,Tt),Tt.return=Q,Q=Tt}return y(Q);case W:return rt=Er(rt),tn(Q,X,rt,Tt)}if(ut(rt))return te(Q,X,rt,Tt);if(q(rt)){if(ce=q(rt),typeof ce!="function")throw Error(r(150));return rt=ce.call(rt),me(Q,X,rt,Tt)}if(typeof rt.then=="function")return tn(Q,X,Al(rt),Tt);if(rt.$$typeof===L)return tn(Q,X,Ml(Q,rt),Tt);Rl(Q,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,X!==null&&X.tag===6?(a(Q,X.sibling),Tt=u(X,rt),Tt.return=Q,Q=Tt):(a(Q,X),Tt=gu(rt,Q.mode,Tt),Tt.return=Q,Q=Tt),y(Q)):a(Q,X)}return function(Q,X,rt,Tt){try{uo=0;var ce=tn(Q,X,rt,Tt);return ss=null,ce}catch(re){if(re===rs||re===El)throw re;var Xe=ci(29,re,null,Q.mode);return Xe.lanes=Tt,Xe.return=Q,Xe}finally{}}}var Ar=Hp(!0),Gp=Hp(!1),Ia=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ye&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),Ep(e,null,a),n}return gl(e,o,n,a),vl(e)}function ho(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,fr(e,a)}}function Lu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function po(){if(Nu){var e=as;if(e!==null)throw e}}function mo(e,n,a,o){Nu=!1;var u=e.updateQueue;Ia=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ot=H.next;H.next=null,y===null?f=ot:y.next=ot,y=H;var yt=e.alternate;yt!==null&&(yt=yt.updateQueue,R=yt.lastBaseUpdate,R!==y&&(R===null?yt.firstBaseUpdate=ot:R.next=ot,yt.lastBaseUpdate=H))}if(f!==null){var Ct=u.baseState;y=0,yt=ot=H=null,R=f;do{var ft=R.lane&-536870913,xt=ft!==R.lane;if(xt?(Ne&ft)===ft:(o&ft)===ft){ft!==0&&ft===is&&(Nu=!0),yt!==null&&(yt=yt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var te=e,me=R;ft=n;var tn=a;switch(me.tag){case 1:if(te=me.payload,typeof te=="function"){Ct=te.call(tn,Ct,ft);break t}Ct=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=me.payload,ft=typeof te=="function"?te.call(tn,Ct,ft):te,ft==null)break t;Ct=x({},Ct,ft);break t;case 2:Ia=!0}}ft=R.callback,ft!==null&&(e.flags|=64,xt&&(e.flags|=8192),xt=u.callbacks,xt===null?u.callbacks=[ft]:xt.push(ft))}else xt={lane:ft,tag:R.tag,payload:R.payload,callback:R.callback,next:null},yt===null?(ot=yt=xt,H=Ct):yt=yt.next=xt,y|=ft;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;xt=R,R=xt.next,xt.next=null,u.lastBaseUpdate=xt,u.shared.pending=null}}while(!0);yt===null&&(H=Ct),u.baseState=H,u.firstBaseUpdate=ot,u.lastBaseUpdate=yt,f===null&&(u.shared.lanes=0),Xa|=y,e.lanes=y,e.memoizedState=Ct}}function Vp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Vp(a[e],n)}var os=I(null),Cl=I(0);function Xp(e,n){e=xa,et(Cl,e),et(os,n),xa=e|n.baseLanes}function Ou(){et(Cl,xa),et(os,os.current)}function Pu(){xa=Cl.current,st(os),st(Cl)}var ui=I(null),Ti=null;function Ha(e){var n=e.alternate;et(yn,yn.current&1),et(ui,e),Ti===null&&(n===null||os.current!==null||n.memoizedState!==null)&&(Ti=e)}function zu(e){et(yn,yn.current),et(ui,e),Ti===null&&(Ti=e)}function qp(e){e.tag===22?(et(yn,yn.current),et(ui,e),Ti===null&&(Ti=e)):Ga()}function Ga(){et(yn,yn.current),et(ui,ui.current)}function fi(e){st(ui),Ti===e&&(Ti=null),st(yn)}var yn=I(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,be=null,Je=null,bn=null,Dl=!1,ls=!1,Rr=!1,Ul=0,xo=0,cs=null,x_=0;function xn(){throw Error(r(321))}function Iu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!li(e[a],n[a]))return!1;return!0}function Bu(e,n,a,o,u,f){return la=f,be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?C0:$u,Rr=!1,f=a(o,u),Rr=!1,ls&&(f=Yp(n,a,o,u)),Wp(e),f}function Wp(e){F.H=_o;var n=Je!==null&&Je.next!==null;if(la=0,bn=Je=be=null,Dl=!1,xo=0,cs=null,n)throw Error(r(300));e===null||En||(e=e.dependencies,e!==null&&Sl(e)&&(En=!0))}function Yp(e,n,a,o){be=e;var u=0;do{if(ls&&(cs=null),xo=0,ls=!1,25<=u)throw Error(r(301));if(u+=1,bn=Je=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=w0,f=n(a,o)}while(ls);return f}function g_(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?go(n):n,e=e.useState()[0],(Je!==null?Je.memoizedState:null)!==e&&(be.flags|=1024),n}function Fu(){var e=Ul!==0;return Ul=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}la=0,bn=Je=be=null,ls=!1,xo=Ul=0,cs=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?be.memoizedState=bn=e:bn=bn.next=e,bn}function Sn(){if(Je===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var n=bn===null?be.memoizedState:bn.next;if(n!==null)bn=n,Je=e;else{if(e===null)throw be.alternate===null?Error(r(467)):Error(r(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},bn===null?be.memoizedState=bn=e:bn=bn.next=e}return bn}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var n=xo;return xo+=1,cs===null&&(cs=[]),e=Ip(cs,e,n),n=be,(bn===null?n.memoizedState:bn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?C0:$u),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===L)return Fn(e)}throw Error(r(438,String(e)))}function Vu(e){var n=null,a=be.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=be.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),be.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function ca(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=Sn();return ku(n,Je,e)}function ku(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=y=null,H=null,ot=n,yt=!1;do{var Ct=ot.lane&-536870913;if(Ct!==ot.lane?(Ne&Ct)===Ct:(la&Ct)===Ct){var ft=ot.revertLane;if(ft===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),Ct===is&&(yt=!0);else if((la&ft)===ft){ot=ot.next,ft===is&&(yt=!0);continue}else Ct={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},H===null?(R=H=Ct,y=f):H=H.next=Ct,be.lanes|=ft,Xa|=ft;Ct=ot.action,Rr&&a(f,Ct),f=ot.hasEagerState?ot.eagerState:a(f,Ct)}else ft={lane:Ct,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},H===null?(R=H=ft,y=f):H=H.next=ft,be.lanes|=Ct,Xa|=Ct;ot=ot.next}while(ot!==null&&ot!==n);if(H===null?y=f:H.next=R,!li(f,e.memoizedState)&&(En=!0,yt&&(a=as,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Xu(e){var n=Sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);li(f,n.memoizedState)||(En=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function jp(e,n,a){var o=be,u=Sn(),f=Fe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!li((Je||u).memoizedState,a);if(y&&(u.memoizedState=a,En=!0),u=u.queue,Yu(Qp.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||bn!==null&&bn.memoizedState.tag&1){if(o.flags|=2048,us(9,{destroy:void 0},Kp.bind(null,o,u,a,n),null),nn===null)throw Error(r(349));f||(la&127)!==0||Zp(o,n,a)}return a}function Zp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=be.updateQueue,n===null?(n=Ll(),be.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Kp(e,n,a,o){n.value=a,n.getSnapshot=o,Jp(n)&&$p(e)}function Qp(e,n,a){return a(function(){Jp(n)&&$p(e)})}function Jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!li(e,a)}catch{return!0}}function $p(e){var n=vr(e,2);n!==null&&ri(n,e,2)}function qu(e){var n=Kn();if(typeof e=="function"){var a=e;if(e=a(),Rr){ie(!0);try{a()}finally{ie(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},n}function t0(e,n,a,o){return e.baseState=a,ku(e,Je,typeof o=="function"?o:ca)}function v_(e,n,a,o,u){if(Il(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,e0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function e0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=F.T,y={};F.T=y;try{var R=a(u,o),H=F.S;H!==null&&H(y,R),n0(e,n,R)}catch(ot){Wu(e,n,ot)}finally{f!==null&&y.types!==null&&(f.types=y.types),F.T=f}}else try{f=a(u,o),n0(e,n,f)}catch(ot){Wu(e,n,ot)}}function n0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){i0(e,n,o)},function(o){return Wu(e,n,o)}):i0(e,n,a)}function i0(e,n,a){n.status="fulfilled",n.value=a,a0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,e0(e,a)))}function Wu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,a0(n),n=n.next;while(n!==o)}e.action=null}function a0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function r0(e,n){return n}function s0(e,n){if(Fe){var a=nn.formState;if(a!==null){t:{var o=be;if(Fe){if(rn){e:{for(var u=rn,f=Ei;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ai(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){rn=Ai(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r0,lastRenderedState:n},a.queue=o,a=T0.bind(null,be,o),o.dispatch=a,o=qu(!1),f=Ju.bind(null,be,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=v_.bind(null,be,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function o0(e){var n=Sn();return l0(n,Je,e)}function l0(e,n,a){if(n=ku(e,n,r0)[0],e=Ol(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(y){throw y===rs?El:y}else o=n;n=Sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(be.flags|=2048,us(9,{destroy:void 0},__.bind(null,u,a),null)),[o,f,e]}function __(e,n){e.action=n}function c0(e){var n=Sn(),a=Je;if(a!==null)return l0(n,a,e);Sn(),n=n.memoizedState,a=Sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function us(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=be.updateQueue,n===null&&(n=Ll(),be.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function u0(){return Sn().memoizedState}function Pl(e,n,a,o){var u=Kn();be.flags|=e,u.memoizedState=us(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(e,n,a,o){var u=Sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Je!==null&&o!==null&&Iu(o,Je.memoizedState.deps)?u.memoizedState=us(n,f,a,o):(be.flags|=e,u.memoizedState=us(1|n,f,a,o))}function f0(e,n){Pl(8390656,8,e,n)}function Yu(e,n){zl(2048,8,e,n)}function y_(e){be.flags|=4;var n=be.updateQueue;if(n===null)n=Ll(),be.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function h0(e){var n=Sn().memoizedState;return y_({ref:n,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function d0(e,n){return zl(4,2,e,n)}function p0(e,n){return zl(4,4,e,n)}function m0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function x0(e,n,a){a=a!=null?a.concat([e]):null,zl(4,4,m0.bind(null,n,e),a)}function ju(){}function g0(e,n){var a=Sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Iu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function v0(e,n){var a=Sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Iu(n,o[1]))return o[0];if(o=e(),Rr){ie(!0);try{e()}finally{ie(!1)}}return a.memoizedState=[o,n],o}function Zu(e,n,a){return a===void 0||(la&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=_m(),be.lanes|=e,Xa|=e,a)}function _0(e,n,a,o){return li(a,n)?a:os.current!==null?(e=Zu(e,a,o),li(e,n)||(En=!0),e):(la&42)===0||(la&1073741824)!==0&&(Ne&261930)===0?(En=!0,e.memoizedState=a):(e=_m(),be.lanes|=e,Xa|=e,n)}function y0(e,n,a,o,u){var f=j.p;j.p=f!==0&&8>f?f:8;var y=F.T,R={};F.T=R,Ju(e,!1,n,a);try{var H=u(),ot=F.S;if(ot!==null&&ot(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var yt=m_(H,o);vo(e,n,yt,pi(e))}else vo(e,n,o,pi(e))}catch(Ct){vo(e,n,{then:function(){},status:"rejected",reason:Ct},pi())}finally{j.p=f,y!==null&&R.types!==null&&(y.types=R.types),F.T=y}}function S_(){}function Ku(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=S0(e).queue;y0(e,u,n,Z,a===null?S_:function(){return M0(e),a(o)})}function S0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function M0(e){var n=S0(e);n.next===null&&(n=e.alternate.memoizedState),vo(e,n.next.queue,{},pi())}function Qu(){return Fn(Po)}function b0(){return Sn().memoizedState}function E0(){return Sn().memoizedState}function M_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();e=Ba(a);var o=Fa(n,e,a);o!==null&&(ri(o,n,a),ho(o,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function b_(e,n,a){var o=pi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Il(e)?A0(n,a):(a=mu(e,n,a,o),a!==null&&(ri(a,e,o),R0(a,n,o)))}function T0(e,n,a){var o=pi();vo(e,n,a,o)}function vo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(e))A0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(u.hasEagerState=!0,u.eagerState=R,li(R,y))return gl(e,n,u,0),nn===null&&xl(),!1}catch{}finally{}if(a=mu(e,n,u,o),a!==null)return ri(a,e,o),R0(a,n,o),!0}return!1}function Ju(e,n,a,o){if(o={lane:2,revertLane:Uf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Il(e)){if(n)throw Error(r(479))}else n=mu(e,a,o,2),n!==null&&ri(n,e,2)}function Il(e){var n=e.alternate;return e===be||n!==null&&n===be}function A0(e,n){ls=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function R0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,fr(e,a)}}var _o={readContext:Fn,use:Nl,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};_o.useEffectEvent=xn;var C0={readContext:Fn,use:Nl,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:Fn,useEffect:f0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,m0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=Kn();n=n===void 0?null:n;var o=e();if(Rr){ie(!0);try{e()}finally{ie(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(Rr){ie(!0);try{a(n)}finally{ie(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=b_.bind(null,be,e),[o.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:function(e){e=qu(e);var n=e.queue,a=T0.bind(null,be,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,n){var a=Kn();return Zu(a,e,n)},useTransition:function(){var e=qu(!1);return e=y0.bind(null,be,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=be,u=Kn();if(Fe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),nn===null)throw Error(r(349));(Ne&127)!==0||Zp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,f0(Qp.bind(null,o,f,e),[e]),o.flags|=2048,us(9,{destroy:void 0},Kp.bind(null,o,f,a,n),null),a},useId:function(){var e=Kn(),n=nn.identifierPrefix;if(Fe){var a=Wi,o=qi;a=(o&~(1<<32-Qt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=x_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:s0,useActionState:s0,useOptimistic:function(e){var n=Kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,be,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return Kn().memoizedState=M_.bind(null,be)},useEffectEvent:function(e){var n=Kn(),a={impl:e};return n.memoizedState=a,function(){if((Ye&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:Fn,use:Nl,useCallback:g0,useContext:Fn,useEffect:Yu,useImperativeHandle:x0,useInsertionEffect:d0,useLayoutEffect:p0,useMemo:v0,useReducer:Ol,useRef:u0,useState:function(){return Ol(ca)},useDebugValue:ju,useDeferredValue:function(e,n){var a=Sn();return _0(a,Je.memoizedState,e,n)},useTransition:function(){var e=Ol(ca)[0],n=Sn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:jp,useId:b0,useHostTransitionStatus:Qu,useFormState:o0,useActionState:o0,useOptimistic:function(e,n){var a=Sn();return t0(a,Je,e,n)},useMemoCache:Vu,useCacheRefresh:E0};$u.useEffectEvent=h0;var w0={readContext:Fn,use:Nl,useCallback:g0,useContext:Fn,useEffect:Yu,useImperativeHandle:x0,useInsertionEffect:d0,useLayoutEffect:p0,useMemo:v0,useReducer:Xu,useRef:u0,useState:function(){return Xu(ca)},useDebugValue:ju,useDeferredValue:function(e,n){var a=Sn();return Je===null?Zu(a,e,n):_0(a,Je.memoizedState,e,n)},useTransition:function(){var e=Xu(ca)[0],n=Sn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:jp,useId:b0,useHostTransitionStatus:Qu,useFormState:c0,useActionState:c0,useOptimistic:function(e,n){var a=Sn();return Je!==null?t0(a,Je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:E0};w0.useEffectEvent=h0;function tf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=pi(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=Fa(e,u,o),n!==null&&(ri(n,e,o),ho(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=pi(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fa(e,u,o),n!==null&&(ri(n,e,o),ho(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pi(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=Fa(e,o,a),n!==null&&(ri(n,e,a),ho(n,e,a))}};function D0(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,f):!0}function U0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ef.enqueueReplaceState(n,n.state,null)}function Cr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function L0(e){ml(e)}function N0(e){console.error(e)}function O0(e){ml(e)}function Bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function P0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(e,n)},a}function z0(e){return e=Ba(e),e.tag=3,e}function I0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){P0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){P0(n,a,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function E_(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ns(n,a,u,!0),a=ui.current,a!==null){switch(a.tag){case 31:case 13:return Ti===null?Kl():a.alternate===null&&gn===0&&(gn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Cf(e,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Cf(e,o,u)),!1}throw Error(r(435,a.tag))}return Cf(e,o,u),Kl(),!1}if(Fe)return n=ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Su&&(e=Error(r(422),{cause:o}),oo(Si(e,a)))):(o!==Su&&(n=Error(r(423),{cause:o}),oo(Si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Si(o,a),u=nf(e.stateNode,o,u),Lu(e,u),gn!==4&&(gn=2)),!1;var f=Error(r(520),{cause:o});if(f=Si(f,a),Ro===null?Ro=[f]:Ro.push(f),gn!==4&&(gn=2),n===null)return!0;o=Si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=nf(a.stateNode,o,e),Lu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=z0(u),I0(u,e,a,o),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var af=Error(r(461)),En=!1;function Hn(e,n,a,o){n.child=e===null?Gp(n,null,a,o):Ar(n,e.child,a,o)}function B0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Mr(n),o=Bu(e,n,a,y,f,u),R=Fu(),e!==null&&!En?(Hu(e,n,u),ua(e,n,u)):(Fe&&R&&_u(n),n.flags|=1,Hn(e,n,o,u),n.child)}function F0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,H0(e,n,f,o,u)):(e=_l(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!hf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(y,o)&&e.ref===n.ref)return ua(e,n,u)}return n.flags|=1,e=aa(f,o),e.ref=n.ref,e.return=n,n.child=e}function H0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(ao(f,o)&&e.ref===n.ref)if(En=!1,n.pendingProps=o=f,hf(e,u))(e.flags&131072)!==0&&(En=!0);else return n.lanes=e.lanes,ua(e,n,u)}return rf(e,n,a,o,u)}function G0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return V0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,f!==null?f.cachePool:null),f!==null?Xp(n,f):Ou(),qp(n);else return o=n.lanes=536870912,V0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(bl(n,f.cachePool),Xp(n,f),Ga(),n.memoizedState=null):(e!==null&&bl(n,null),Ou(),Ga());return Hn(e,n,u,a),n.child}function yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function V0(e,n,a,o,u){var f=Cu();return f=f===null?null:{parent:Mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&bl(n,null),Ou(),qp(n),e!==null&&ns(e,n,o,!0),n.childLanes=u,null}function Fl(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function k0(e,n,a){return Ar(n,e.child,null,a),e=Fl(n,n.pendingProps),e.flags|=2,fi(n),n.memoizedState=null,e}function T_(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Fe){if(o.mode==="hidden")return e=Fl(n,o),n.lanes=536870912,yo(null,e);if(zu(n),(e=rn)?(e=ex(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:qi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Ap(e),a.return=n,n.child=a,Bn=n,rn=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return Fl(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=k0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(En||ns(e,n,a,!1),u=(a&e.childLanes)!==0,En||u){if(o=nn,o!==null&&(y=cn(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,vr(e,y),ri(o,e,y),af;Kl(),n=k0(e,n,a)}else e=f.treeContext,rn=Ai(y.nextSibling),Bn=n,Fe=!0,Oa=null,Ei=!1,e!==null&&wp(n,e),n=Fl(n,o),n.flags|=4096;return n}return e=aa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rf(e,n,a,o,u){return Mr(n),a=Bu(e,n,a,o,void 0,u),o=Fu(),e!==null&&!En?(Hu(e,n,u),ua(e,n,u)):(Fe&&o&&_u(n),n.flags|=1,Hn(e,n,a,u),n.child)}function X0(e,n,a,o,u,f){return Mr(n),n.updateQueue=null,a=Yp(n,o,a,u),Wp(e),o=Fu(),e!==null&&!En?(Hu(e,n,f),ua(e,n,f)):(Fe&&o&&_u(n),n.flags|=1,Hn(e,n,a,f),n.child)}function q0(e,n,a,o,u){if(Mr(n),n.stateNode===null){var f=Jr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Fn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Du(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Fn(y):Jr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(tf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&ef.enqueueReplaceState(f,f.state,null),mo(n,o,f,u),po(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,H=Cr(a,R);f.props=H;var ot=f.context,yt=a.contextType;y=Jr,typeof yt=="object"&&yt!==null&&(y=Fn(yt));var Ct=a.getDerivedStateFromProps;yt=typeof Ct=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,yt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ot!==y)&&U0(n,f,o,y),Ia=!1;var ft=n.memoizedState;f.state=ft,mo(n,o,f,u),po(),ot=n.memoizedState,R||ft!==ot||Ia?(typeof Ct=="function"&&(tf(n,a,Ct,o),ot=n.memoizedState),(H=Ia||D0(n,a,H,o,ft,ot,y))?(yt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=y,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Uu(e,n),y=n.memoizedProps,yt=Cr(a,y),f.props=yt,Ct=n.pendingProps,ft=f.context,ot=a.contextType,H=Jr,typeof ot=="object"&&ot!==null&&(H=Fn(ot)),R=a.getDerivedStateFromProps,(ot=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Ct||ft!==H)&&U0(n,f,o,H),Ia=!1,ft=n.memoizedState,f.state=ft,mo(n,o,f,u),po();var xt=n.memoizedState;y!==Ct||ft!==xt||Ia||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof R=="function"&&(tf(n,a,R,o),xt=n.memoizedState),(yt=Ia||D0(n,a,yt,o,ft,xt,H)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(ot||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,xt,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,xt,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=xt),f.props=o,f.state=xt,f.context=H,o=yt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Hl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ar(n,e.child,null,u),n.child=Ar(n,null,a,u)):Hn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ua(e,n,u),e}function W0(e,n,a,o){return yr(),n.flags|=256,Hn(e,n,a,o),n.child}var sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Pp()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function Y0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(yn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Fe){if(u?Ha(n):Ga(),(e=rn)?(e=ex(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:qi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Ap(e),a.return=n,n.child=a,Bn=n,rn=null)):e=null,e===null)throw Pa(n);return Xf(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ga(),u=n.mode,R=Gl({mode:"hidden",children:R},u),o=_r(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,y,a),n.memoizedState=sf,yo(null,o)):(Ha(n),cf(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Ha(n),n.flags&=-257,n=uf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),R=o.fallback,u=n.mode,o=Gl({mode:"visible",children:o.children},u),R=_r(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ar(n,e.child,null,a),o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,y,a),n.memoizedState=sf,n=yo(null,o));else if(Ha(n),Xf(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ot=y.dgst;y=ot,o=Error(r(419)),o.stack="",o.digest=y,oo({value:o,source:null,stack:null}),n=uf(e,n,a)}else if(En||ns(e,n,a,!1),y=(a&e.childLanes)!==0,En||y){if(y=nn,y!==null&&(o=cn(y,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,vr(e,o),ri(y,e,o),af;kf(R)||Kl(),n=uf(e,n,a)}else kf(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,rn=Ai(R.nextSibling),Bn=n,Fe=!0,Oa=null,Ei=!1,e!==null&&wp(n,e),n=cf(n,o.children),n.flags|=4096);return n}return u?(Ga(),R=o.fallback,u=n.mode,H=e.child,ot=H.sibling,o=aa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ot!==null?R=aa(ot,R):(R=_r(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,yo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=of(a):(u=R.cachePool,u!==null?(H=Mn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Pp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=lf(e,y,a),n.memoizedState=sf,yo(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function cf(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=ci(22,e,null,n),e.lanes=0,e}function uf(e,n,a){return Ar(n,e.child,null,a),e=cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function j0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Eu(e.return,n,a)}function ff(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function Z0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=yn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,et(yn,y),Hn(e,n,o,a),o=Fe?so:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&j0(e,a,n);else if(e.tag===19)j0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ff(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ff(n,!0,a,null,f,o);break;case"together":ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ua(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ns(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=aa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function A_(e,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),za(n,Mn,e.memoizedState.cache),yr();break;case 27:case 5:qt(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Y0(e,n,a):(Ha(n),e=ua(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ns(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Z0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),et(yn,yn.current),o)break;return null;case 22:return n.lanes=0,G0(e,n,a,n.pendingProps);case 24:za(n,Mn,e.memoizedState.cache)}return ua(e,n,a)}function K0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)En=!0;else{if(!hf(e,a)&&(n.flags&128)===0)return En=!1,A_(e,n,a);En=(e.flags&131072)!==0}else En=!1,Fe&&(n.flags&1048576)!==0&&Cp(n,so,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Er(n.elementType),n.type=e,typeof e=="function")xu(e)?(o=Cr(e,o),n.tag=1,n=q0(null,n,e,o,a)):(n.tag=0,n=rf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===O){n.tag=11,n=B0(null,n,e,o,a);break t}else if(u===U){n.tag=14,n=F0(null,n,e,o,a);break t}}throw n=dt(e)||e,Error(r(306,n,""))}}return n;case 0:return rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cr(o,n.pendingProps),q0(e,n,o,u,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Uu(e,n),mo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,za(n,Mn,o),o!==f.cache&&Tu(n,[Mn],a,!0),po(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=W0(e,n,o,a);break t}else if(o!==u){u=Si(Error(r(424)),n),oo(u),n=W0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rn=Ai(e.firstChild),Bn=n,Fe=!0,Oa=null,Ei=!0,a=Gp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(yr(),o===u){n=ua(e,n,a);break t}Hn(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=ox(n.type,null,n.pendingProps,null))?n.memoizedState=a:Fe||(a=n.type,e=n.pendingProps,o=ic(J.current).createElement(a),o[un]=n,o[pn]=e,Gn(o,a,e),nt(o),n.stateNode=o):n.memoizedState=ox(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qt(n),e===null&&Fe&&(o=n.stateNode=ax(n.type,n.pendingProps,J.current),Bn=n,Ei=!0,u=rn,Za(n.type)?(qf=u,rn=Ai(o.firstChild)):rn=u),Hn(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Fe&&((u=o=rn)&&(o=ny(o,n.type,n.pendingProps,Ei),o!==null?(n.stateNode=o,Bn=n,rn=Ai(o.firstChild),Ei=!1,u=!0):u=!1),u||Pa(n)),qt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Hf(u,f)?o=null:y!==null&&Hf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(e,n,g_,null,null,a),Po._currentValue=u),Hl(e,n),Hn(e,n,o,a),n.child;case 6:return e===null&&Fe&&((e=a=rn)&&(a=iy(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Bn=n,rn=null,e=!0):e=!1),e||Pa(n)),null;case 13:return Y0(e,n,a);case 4:return Pt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ar(n,null,o,a):Hn(e,n,o,a),n.child;case 11:return B0(e,n,n.type,n.pendingProps,a);case 7:return Hn(e,n,n.pendingProps,a),n.child;case 8:return Hn(e,n,n.pendingProps.children,a),n.child;case 12:return Hn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,za(n,n.type,o.value),Hn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Mr(n),u=Fn(u),o=o(u),n.flags|=1,Hn(e,n,o,a),n.child;case 14:return F0(e,n,n.type,n.pendingProps,a);case 15:return H0(e,n,n.type,n.pendingProps,a);case 19:return Z0(e,n,a);case 31:return T_(e,n,a);case 22:return G0(e,n,a,n.pendingProps);case 24:return Mr(n),o=Fn(Mn),e===null?(u=Cu(),u===null&&(u=nn,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Du(n),za(n,Mn,u)):((e.lanes&a)!==0&&(Uu(e,n),mo(n,null,null,a),po()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,Mn,o)):(o=f.cache,za(n,Mn,o),o!==u.cache&&Tu(n,[Mn],a,!0))),Hn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function fa(e){e.flags|=4}function df(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(bm())e.flags|=8192;else throw Tr=Tl,wu}else e.flags&=-16777217}function Q0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hx(n))if(bm())e.flags|=8192;else throw Tr=Tl,wu}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?De():536870912,e.lanes|=n,ps|=n)}function So(e,n){if(!Fe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function sn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function R_(e,n,a){var o=n.pendingProps;switch(yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(n),null;case 1:return sn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(Mn),Nt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(es(n)?fa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mu())),sn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(fa(n),f!==null?(sn(n),Q0(n,f)):(sn(n),df(n,u,null,o,a))):f?f!==e.memoizedState?(fa(n),sn(n),Q0(n,f)):(sn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&fa(n),sn(n),df(n,u,e,o,a)),null;case 27:if(de(n),a=J.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return sn(n),null}e=bt.current,es(n)?Dp(n):(e=ax(u,o,a),n.stateNode=e,fa(n))}return sn(n),null;case 5:if(de(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return sn(n),null}if(f=bt.current,es(n))Dp(n);else{var y=ic(J.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[un]=n,f[pn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Gn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&fa(n)}}return sn(n),df(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=J.current,es(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ym(e.nodeValue,a)),e||Pa(n,!0)}else e=ic(e).createTextNode(o),e[un]=n,n.stateNode=e}return sn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=es(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[un]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(fi(n),n):(fi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return sn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=es(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[un]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),u=!1}else u=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(fi(n),n):(fi(n),null)}return fi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),sn(n),null);case 4:return Nt(),e===null&&Pf(n.stateNode.containerInfo),sn(n),null;case 10:return oa(n.type),sn(n),null;case 19:if(st(yn),o=n.memoizedState,o===null)return sn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)So(o,!1);else{if(gn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,So(o,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Tp(a,e),a=a.sibling;return et(yn,yn.current&1|2),Fe&&ra(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Yl&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304)}else{if(!u)if(e=wl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Fe)return sn(n),null}else 2*E()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=yn.current,et(yn,u?a&1|2:a&1),Fe&&ra(n,o.treeForkCount),e):(sn(n),null);case 22:case 23:return fi(n),Pu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(sn(n),n.subtreeFlags&6&&(n.flags|=8192)):sn(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&st(br),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(Mn),sn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function C_(e,n){switch(yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return oa(Mn),Nt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(fi(n),n.alternate===null)throw Error(r(340));yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return st(yn),null;case 4:return Nt(),null;case 10:return oa(n.type),null;case 22:case 23:return fi(n),Pu(),e!==null&&st(br),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return oa(Mn),null;case 25:return null;default:return null}}function J0(e,n){switch(yu(n),n.tag){case 3:oa(Mn),Nt();break;case 26:case 27:case 5:de(n);break;case 4:Nt();break;case 31:n.memoizedState!==null&&fi(n);break;case 13:fi(n);break;case 19:st(yn);break;case 10:oa(n.type);break;case 22:case 23:fi(n),Pu(),e!==null&&st(br);break;case 24:oa(Mn)}}function Mo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Qe(n,n.return,R)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var H=a,ot=R;try{ot()}catch(yt){Qe(u,H,yt)}}}o=o.next}while(o!==f)}}catch(yt){Qe(n,n.return,yt)}}function $0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{kp(n,a)}catch(o){Qe(e,e.return,o)}}}function tm(e,n,a){a.props=Cr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Qe(e,n,o)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Qe(e,n,u)}}function Yi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Qe(e,n,u)}else a.current=null}function em(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Qe(e,e.return,u)}}function pf(e,n,a){try{var o=e.stateNode;K_(o,e.type,a,n),o[pn]=n}catch(u){Qe(e,e.return,u)}}function nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=na));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(xf(e,n,a),e=e.sibling;e!==null;)xf(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function im(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Gn(n,o,a),n[un]=e,n[pn]=a}catch(f){Qe(e,e.return,f)}}var ha=!1,Tn=!1,gf=!1,am=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function w_(e,n){if(e=e.containerInfo,Bf=uc,e=xp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,R=-1,H=-1,ot=0,yt=0,Ct=e,ft=null;e:for(;;){for(var xt;Ct!==a||u!==0&&Ct.nodeType!==3||(R=y+u),Ct!==f||o!==0&&Ct.nodeType!==3||(H=y+o),Ct.nodeType===3&&(y+=Ct.nodeValue.length),(xt=Ct.firstChild)!==null;)ft=Ct,Ct=xt;for(;;){if(Ct===e)break e;if(ft===a&&++ot===u&&(R=y),ft===f&&++yt===o&&(H=y),(xt=Ct.nextSibling)!==null)break;Ct=ft,ft=Ct.parentNode}Ct=xt}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:e,selectionRange:a},uc=!1,Ln=n;Ln!==null;)if(n=Ln,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ln=e;else for(;Ln!==null;){switch(n=Ln,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var te=Cr(a.type,u);e=o.getSnapshotBeforeUpdate(te,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(me){Qe(a,a.return,me)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Ln=e;break}Ln=n.return}}function rm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pa(e,a),o&4&&Mo(5,a);break;case 1:if(pa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Qe(a,a.return,y)}else{var u=Cr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Qe(a,a.return,y)}}o&64&&$0(a),o&512&&bo(a,a.return);break;case 3:if(pa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kp(e,n)}catch(y){Qe(a,a.return,y)}}break;case 27:n===null&&o&4&&im(a);case 26:case 5:pa(e,a),n===null&&o&4&&em(a),o&512&&bo(a,a.return);break;case 12:pa(e,a);break;case 31:pa(e,a),o&4&&lm(e,a);break;case 13:pa(e,a),o&4&&cm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=B_.bind(null,a),ay(e,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){n=n!==null&&n.memoizedState!==null||Tn,u=ha;var f=Tn;ha=o,(Tn=n)&&!f?ma(e,a,(a.subtreeFlags&8772)!==0):pa(e,a),ha=u,Tn=f}break;case 30:break;default:pa(e,a)}}function sm(e){var n=e.alternate;n!==null&&(e.alternate=null,sm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xi(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,ei=!1;function da(e,n,a){for(a=a.child;a!==null;)om(e,n,a),a=a.sibling}function om(e,n,a){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Dt,a)}catch{}switch(a.tag){case 26:Tn||Yi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Tn||Yi(a,n);var o=ln,u=ei;Za(a.type)&&(ln=a.stateNode,ei=!1),da(e,n,a),Lo(a.stateNode),ln=o,ei=u;break;case 5:Tn||Yi(a,n);case 6:if(o=ln,u=ei,ln=null,da(e,n,a),ln=o,ei=u,ln!==null)if(ei)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode)}catch(f){Qe(a,n,f)}else try{ln.removeChild(a.stateNode)}catch(f){Qe(a,n,f)}break;case 18:ln!==null&&(ei?(e=ln,$m(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ms(e)):$m(ln,a.stateNode));break;case 4:o=ln,u=ei,ln=a.stateNode.containerInfo,ei=!0,da(e,n,a),ln=o,ei=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),Tn||Va(4,a,n),da(e,n,a);break;case 1:Tn||(Yi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&tm(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:Tn=(o=Tn)||a.memoizedState!==null,da(e,n,a),Tn=o;break;default:da(e,n,a)}}function lm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ms(e)}catch(a){Qe(n,n.return,a)}}}function cm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ms(e)}catch(a){Qe(n,n.return,a)}}function D_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new am),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new am),n;default:throw Error(r(435,e.tag))}}function Xl(e,n){var a=D_(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=F_.bind(null,e,o);o.then(u,u)}})}function ni(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,R=y;t:for(;R!==null;){switch(R.tag){case 27:if(Za(R.type)){ln=R.stateNode,ei=!1;break t}break;case 5:ln=R.stateNode,ei=!1;break t;case 3:case 4:ln=R.stateNode.containerInfo,ei=!0;break t}R=R.return}if(ln===null)throw Error(r(160));om(f,y,u),ln=null,ei=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)um(n,e),n=n.sibling}var Oi=null;function um(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(n,e),ii(e),o&4&&(Va(3,e,e.return),Mo(3,e),Va(5,e,e.return));break;case 1:ni(n,e),ii(e),o&512&&(Tn||a===null||Yi(a,a.return)),o&64&&ha&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Oi;if(ni(n,e),ii(e),o&512&&(Tn||a===null||Yi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ki]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Gn(f,o,a),f[un]=e,nt(f),o=f;break t;case"link":var y=ux("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(f=y[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break e}}f=u.createElement(o),Gn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=ux("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(f=y[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break e}}f=u.createElement(o),Gn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[un]=e,nt(f),o=f}e.stateNode=o}else fx(u,e.type,e.stateNode);else e.stateNode=cx(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?fx(u,e.type,e.stateNode):cx(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ni(n,e),ii(e),o&512&&(Tn||a===null||Yi(a,a.return)),a!==null&&o&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ni(n,e),ii(e),o&512&&(Tn||a===null||Yi(a,a.return)),e.flags&32){u=e.stateNode;try{Ze(u,"")}catch(te){Qe(e,e.return,te)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(gf=!0);break;case 6:if(ni(n,e),ii(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(te){Qe(e,e.return,te)}}break;case 3:if(sc=null,u=Oi,Oi=ac(n.containerInfo),ni(n,e),Oi=u,ii(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ms(n.containerInfo)}catch(te){Qe(e,e.return,te)}gf&&(gf=!1,fm(e));break;case 4:o=Oi,Oi=ac(e.stateNode.containerInfo),ni(n,e),ii(e),Oi=o;break;case 12:ni(n,e),ii(e);break;case 31:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 13:ni(n,e),ii(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ot=ha,yt=Tn;if(ha=ot||u,Tn=yt||H,ni(n,e),Tn=yt,ha=ot,ii(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ha||Tn||wr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var Ct=H.memoizedProps.style,ft=Ct!=null&&Ct.hasOwnProperty("display")?Ct.display:null;R.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch(te){Qe(H,H.return,te)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(te){Qe(H,H.return,te)}}}else if(n.tag===18){if(a===null){H=n;try{var xt=H.stateNode;u?tx(xt,!0):tx(H.stateNode,!1)}catch(te){Qe(H,H.return,te)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(e,a))));break;case 19:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 30:break;case 21:break;default:ni(n,e),ii(e)}}function ii(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(nm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(e);kl(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Ze(y,""),a.flags&=-33);var R=mf(e);kl(e,R,y);break;case 3:case 4:var H=a.stateNode.containerInfo,ot=mf(e);xf(e,ot,H);break;default:throw Error(r(161))}}catch(yt){Qe(e,e.return,yt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;fm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function pa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rm(e,n.alternate,n),n=n.sibling}function wr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),wr(n);break;case 1:Yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&tm(n,n.return,a),wr(n);break;case 27:Lo(n.stateNode);case 26:case 5:Yi(n,n.return),wr(n);break;case 22:n.memoizedState===null&&wr(n);break;case 30:wr(n);break;default:wr(n)}e=e.sibling}}function ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ma(u,f,a),Mo(4,f);break;case 1:if(ma(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){Qe(o,o.return,ot)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Vp(H[u],R)}catch(ot){Qe(o,o.return,ot)}}a&&y&64&&$0(f),bo(f,f.return);break;case 27:im(f);case 26:case 5:ma(u,f,a),a&&o===null&&y&4&&em(f),bo(f,f.return);break;case 12:ma(u,f,a);break;case 31:ma(u,f,a),a&&y&4&&lm(u,f);break;case 13:ma(u,f,a),a&&y&4&&cm(u,f);break;case 22:f.memoizedState===null&&ma(u,f,a),bo(f,f.return);break;case 30:break;default:ma(u,f,a)}n=n.sibling}}function vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&lo(a))}function _f(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&lo(e))}function Pi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)hm(e,n,a,o),n=n.sibling}function hm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(e,n,a,o),u&2048&&Mo(9,n);break;case 1:Pi(e,n,a,o);break;case 3:Pi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&lo(e)));break;case 12:if(u&2048){Pi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,R=f.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Qe(n,n.return,H)}}else Pi(e,n,a,o);break;case 31:Pi(e,n,a,o);break;case 13:Pi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Pi(e,n,a,o):Eo(e,n):f._visibility&2?Pi(e,n,a,o):(f._visibility|=2,fs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&vf(y,n);break;case 24:Pi(e,n,a,o),u&2048&&_f(n.alternate,n);break;default:Pi(e,n,a,o)}}function fs(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,R=a,H=o,ot=y.flags;switch(y.tag){case 0:case 11:case 15:fs(f,y,R,H,u),Mo(8,y);break;case 23:break;case 22:var yt=y.stateNode;y.memoizedState!==null?yt._visibility&2?fs(f,y,R,H,u):Eo(f,y):(yt._visibility|=2,fs(f,y,R,H,u)),u&&ot&2048&&vf(y.alternate,y);break;case 24:fs(f,y,R,H,u),u&&ot&2048&&_f(y.alternate,y);break;default:fs(f,y,R,H,u)}n=n.sibling}}function Eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&vf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&_f(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var To=8192;function hs(e,n,a){if(e.subtreeFlags&To)for(e=e.child;e!==null;)dm(e,n,a),e=e.sibling}function dm(e,n,a){switch(e.tag){case 26:hs(e,n,a),e.flags&To&&e.memoizedState!==null&&xy(a,Oi,e.memoizedState,e.memoizedProps);break;case 5:hs(e,n,a);break;case 3:case 4:var o=Oi;Oi=ac(e.stateNode.containerInfo),hs(e,n,a),Oi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=To,To=16777216,hs(e,n,a),To=o):hs(e,n,a));break;default:hs(e,n,a)}}function pm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ao(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ln=o,xm(o,e)}pm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mm(e),e=e.sibling}function mm(e){switch(e.tag){case 0:case 11:case 15:Ao(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Ao(e);break;case 12:Ao(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ql(e)):Ao(e);break;default:Ao(e)}}function ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ln=o,xm(o,e)}pm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ql(n));break;default:ql(n)}e=e.sibling}}function xm(e,n){for(;Ln!==null;){var a=Ln;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ln=o;else t:for(a=e;Ln!==null;){o=Ln;var u=o.sibling,f=o.return;if(sm(o),o===a){Ln=null;break t}if(u!==null){u.return=f,Ln=u;break t}Ln=f}}}var U_={getCacheForType:function(e){var n=Fn(Mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Fn(Mn).controller.signal}},L_=typeof WeakMap=="function"?WeakMap:Map,Ye=0,nn=null,Ue=null,Ne=0,Ke=0,hi=null,ka=!1,ds=!1,yf=!1,xa=0,gn=0,Xa=0,Dr=0,Sf=0,di=0,ps=0,Ro=null,ai=null,Mf=!1,Wl=0,gm=0,Yl=1/0,jl=null,qa=null,Cn=0,Wa=null,ms=null,ga=0,bf=0,Ef=null,vm=null,Co=0,Tf=null;function pi(){return(Ye&2)!==0&&Ne!==0?Ne&-Ne:F.T!==null?Uf():hr()}function _m(){if(di===0)if((Ne&536870912)===0||Fe){var e=Ft;Ft<<=1,(Ft&3932160)===0&&(Ft=262144),di=e}else di=536870912;return e=ui.current,e!==null&&(e.flags|=32),di}function ri(e,n,a){(e===nn&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)&&(xs(e,0),Ya(e,Ne,di,!1)),Rn(e,a),((Ye&2)===0||e!==nn)&&(e===nn&&((Ye&2)===0&&(Dr|=a),gn===4&&Ya(e,Ne,di,!1)),ji(e))}function ym(e,n,a){if((Ye&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Zt(e,n),u=o?P_(e,n):Rf(e,n,!0),f=o;do{if(u===0){ds&&!o&&Ya(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!N_(a)){u=Rf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var R=e;u=Ro;var H=R.current.memoizedState.isDehydrated;if(H&&(xs(R,y).flags|=256),y=Rf(R,y,!1),y!==2){if(yf&&!H){R.errorRecoveryDisabledLanes|=f,Dr|=f,u=4;break t}f=ai,ai=u,f!==null&&(ai===null?ai=f:ai.push.apply(ai,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){xs(e,0),Ya(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,di,!ka);break t;case 2:ai=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wl+300-E(),10<u)){if(Ya(o,n,di,!ka),Rt(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=Qm(Sm.bind(null,o,a,ai,jl,Mf,n,di,Dr,ps,ka,f,"Throttled",-0,0),u);break t}Sm(o,a,ai,jl,Mf,n,di,Dr,ps,ka,f,null,-0,0)}}break}while(!0);ji(e)}function Sm(e,n,a,o,u,f,y,R,H,ot,yt,Ct,ft,xt){if(e.timeoutHandle=-1,Ct=n.subtreeFlags,Ct&8192||(Ct&16785408)===16785408){Ct={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},dm(n,f,Ct);var te=(f&62914560)===f?Wl-E():(f&4194048)===f?gm-E():0;if(te=gy(Ct,te),te!==null){ga=f,e.cancelPendingCommit=te(wm.bind(null,e,n,f,a,o,u,y,R,H,yt,Ct,null,ft,xt)),Ya(e,f,y,!ot);return}}wm(e,n,f,a,o,u,y,R,H)}function N_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!li(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(e,n,a,o){n&=~Sf,n&=~Dr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Qt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&ea(e,a,n)}function Zl(){return(Ye&6)===0?(wo(0),!1):!0}function Af(){if(Ue!==null){if(Ke===0)var e=Ue.return;else e=Ue,sa=Sr=null,Gu(e),ss=null,uo=0,e=Ue;for(;e!==null;)J0(e.alternate,e),e=e.return;Ue=null}}function xs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,Af(),nn=e,Ue=a=aa(e.current,null),Ne=n,Ke=0,hi=null,ka=!1,ds=Zt(e,n),yf=!1,ps=di=Sf=Dr=Xa=gn=0,ai=Ro=null,Mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Qt(o),f=1<<u;n|=e[u],o&=~f}return xa=n,xl(),a}function Mm(e,n){be=null,F.H=_o,n===rs||n===El?(n=Bp(),Ke=3):n===wu?(n=Bp(),Ke=4):Ke=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,Ue===null&&(gn=1,Bl(e,Si(n,e.current)))}function bm(){var e=ui.current;return e===null?!0:(Ne&4194048)===Ne?Ti===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Ti:!1}function Em(){var e=F.H;return F.H=_o,e===null?_o:e}function Tm(){var e=F.A;return F.A=U_,e}function Kl(){gn=4,ka||(Ne&4194048)!==Ne&&ui.current!==null||(ds=!0),(Xa&134217727)===0&&(Dr&134217727)===0||nn===null||Ya(nn,Ne,di,!1)}function Rf(e,n,a){var o=Ye;Ye|=2;var u=Em(),f=Tm();(nn!==e||Ne!==n)&&(jl=null,xs(e,n)),n=!1;var y=gn;t:do try{if(Ke!==0&&Ue!==null){var R=Ue,H=hi;switch(Ke){case 8:Af(),y=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(n=!0);var ot=Ke;if(Ke=0,hi=null,gs(e,R,H,ot),a&&ds){y=0;break t}break;default:ot=Ke,Ke=0,hi=null,gs(e,R,H,ot)}}O_(),y=gn;break}catch(yt){Mm(e,yt)}while(!0);return n&&e.shellSuspendCounter++,sa=Sr=null,Ye=o,F.H=u,F.A=f,Ue===null&&(nn=null,Ne=0,xl()),y}function O_(){for(;Ue!==null;)Am(Ue)}function P_(e,n){var a=Ye;Ye|=2;var o=Em(),u=Tm();nn!==e||Ne!==n?(jl=null,Yl=E()+500,xs(e,n)):ds=Zt(e,n);t:do try{if(Ke!==0&&Ue!==null){n=Ue;var f=hi;e:switch(Ke){case 1:Ke=0,hi=null,gs(e,n,f,1);break;case 2:case 9:if(zp(f)){Ke=0,hi=null,Rm(n);break}n=function(){Ke!==2&&Ke!==9||nn!==e||(Ke=7),ji(e)},f.then(n,n);break t;case 3:Ke=7;break t;case 4:Ke=5;break t;case 7:zp(f)?(Ke=0,hi=null,Rm(n)):(Ke=0,hi=null,gs(e,n,f,7));break;case 5:var y=null;switch(Ue.tag){case 26:y=Ue.memoizedState;case 5:case 27:var R=Ue;if(y?hx(y):R.stateNode.complete){Ke=0,hi=null;var H=R.sibling;if(H!==null)Ue=H;else{var ot=R.return;ot!==null?(Ue=ot,Ql(ot)):Ue=null}break e}}Ke=0,hi=null,gs(e,n,f,5);break;case 6:Ke=0,hi=null,gs(e,n,f,6);break;case 8:Af(),gn=6;break t;default:throw Error(r(462))}}z_();break}catch(yt){Mm(e,yt)}while(!0);return sa=Sr=null,F.H=o,F.A=u,Ye=a,Ue!==null?0:(nn=null,Ne=0,xl(),gn)}function z_(){for(;Ue!==null&&!pe();)Am(Ue)}function Am(e){var n=K0(e.alternate,e,xa);e.memoizedProps=e.pendingProps,n===null?Ql(e):Ue=n}function Rm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=X0(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=X0(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:Gu(n);default:J0(a,n),n=Ue=Tp(n,xa),n=K0(a,n,xa)}e.memoizedProps=e.pendingProps,n===null?Ql(e):Ue=n}function gs(e,n,a,o){sa=Sr=null,Gu(n),ss=null,uo=0;var u=n.return;try{if(E_(e,u,n,a,Ne)){gn=1,Bl(e,Si(a,e.current)),Ue=null;return}}catch(f){if(u!==null)throw Ue=u,f;gn=1,Bl(e,Si(a,e.current)),Ue=null;return}n.flags&32768?(Fe||o===1?e=!0:ds||(Ne&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ui.current,o!==null&&o.tag===13&&(o.flags|=16384))),Cm(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){Cm(n,ka);return}e=n.return;var a=R_(n.alternate,n,xa);if(a!==null){Ue=a;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=e}while(n!==null);gn===0&&(gn=5)}function Cm(e,n){do{var a=C_(e.alternate,e);if(a!==null){a.flags&=32767,Ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=a}while(e!==null);gn=6,Ue=null}function wm(e,n,a,o,u,f,y,R,H){e.cancelPendingCommit=null;do Jl();while(Cn!==0);if((Ye&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pu,_n(e,a,f,y,R,H),e===nn&&(Ue=nn=null,Ne=0),ms=n,Wa=e,ga=a,bf=f,Ef=u,vm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,H_(mt,function(){return Om(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=j.p,j.p=2,y=Ye,Ye|=4;try{w_(e,n,a)}finally{Ye=y,j.p=u,F.T=o}}Cn=1,Dm(),Um(),Lm()}}function Dm(){if(Cn===1){Cn=0;var e=Wa,n=ms,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=j.p;j.p=2;var u=Ye;Ye|=4;try{um(n,e);var f=Ff,y=xp(e.containerInfo),R=f.focusedElem,H=f.selectionRange;if(y!==R&&R&&R.ownerDocument&&mp(R.ownerDocument.documentElement,R)){if(H!==null&&cu(R)){var ot=H.start,yt=H.end;if(yt===void 0&&(yt=ot),"selectionStart"in R)R.selectionStart=ot,R.selectionEnd=Math.min(yt,R.value.length);else{var Ct=R.ownerDocument||document,ft=Ct&&Ct.defaultView||window;if(ft.getSelection){var xt=ft.getSelection(),te=R.textContent.length,me=Math.min(H.start,te),tn=H.end===void 0?me:Math.min(H.end,te);!xt.extend&&me>tn&&(y=tn,tn=me,me=y);var Q=pp(R,me),X=pp(R,tn);if(Q&&X&&(xt.rangeCount!==1||xt.anchorNode!==Q.node||xt.anchorOffset!==Q.offset||xt.focusNode!==X.node||xt.focusOffset!==X.offset)){var rt=Ct.createRange();rt.setStart(Q.node,Q.offset),xt.removeAllRanges(),me>tn?(xt.addRange(rt),xt.extend(X.node,X.offset)):(rt.setEnd(X.node,X.offset),xt.addRange(rt))}}}}for(Ct=[],xt=R;xt=xt.parentNode;)xt.nodeType===1&&Ct.push({element:xt,left:xt.scrollLeft,top:xt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ct.length;R++){var Tt=Ct[R];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}uc=!!Bf,Ff=Bf=null}finally{Ye=u,j.p=o,F.T=a}}e.current=n,Cn=2}}function Um(){if(Cn===2){Cn=0;var e=Wa,n=ms,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=j.p;j.p=2;var u=Ye;Ye|=4;try{rm(e,n.alternate,n)}finally{Ye=u,j.p=o,F.T=a}}Cn=3}}function Lm(){if(Cn===4||Cn===3){Cn=0,z();var e=Wa,n=ms,a=ga,o=vm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Cn=5:(Cn=0,ms=Wa=null,Nm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(qa=null),Vi(a),n=n.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=j.p,j.p=2,F.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var R=o[y];f(R.value,{componentStack:R.stack})}}finally{F.T=n,j.p=u}}(ga&3)!==0&&Jl(),ji(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Tf?Co++:(Co=0,Tf=e):Co=0,wo(0)}}function Nm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,lo(n)))}function Jl(){return Dm(),Um(),Lm(),Om()}function Om(){if(Cn!==5)return!1;var e=Wa,n=bf;bf=0;var a=Vi(ga),o=F.T,u=j.p;try{j.p=32>a?32:a,F.T=null,a=Ef,Ef=null;var f=Wa,y=ga;if(Cn=0,ms=Wa=null,ga=0,(Ye&6)!==0)throw Error(r(331));var R=Ye;if(Ye|=4,mm(f.current),hm(f,f.current,y,a),Ye=R,wo(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Dt,f)}catch{}return!0}finally{j.p=u,F.T=o,Nm(e,n)}}function Pm(e,n,a){n=Si(a,n),n=nf(e.stateNode,n,2),e=Fa(e,n,2),e!==null&&(Rn(e,2),ji(e))}function Qe(e,n,a){if(e.tag===3)Pm(e,e,a);else for(;n!==null;){if(n.tag===3){Pm(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){e=Si(a,e),a=z0(2),o=Fa(n,a,2),o!==null&&(I0(a,o,n,e),Rn(o,2),ji(o));break}}n=n.return}}function Cf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new L_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(yf=!0,u.add(a),e=I_.bind(null,e,n,a),n.then(e,e))}function I_(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,nn===e&&(Ne&a)===a&&(gn===4||gn===3&&(Ne&62914560)===Ne&&300>E()-Wl?(Ye&2)===0&&xs(e,0):Sf|=a,ps===Ne&&(ps=0)),ji(e)}function zm(e,n){n===0&&(n=De()),e=vr(e,n),e!==null&&(Rn(e,n),ji(e))}function B_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),zm(e,a)}function F_(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),zm(e,a)}function H_(e,n){return Ae(e,n)}var $l=null,vs=null,wf=!1,tc=!1,Df=!1,ja=0;function ji(e){e!==vs&&e.next===null&&(vs===null?$l=vs=e:vs=vs.next=e),tc=!0,wf||(wf=!0,V_())}function wo(e,n){if(!Df&&tc){Df=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Qt(42|e)+1)-1,f&=u&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Hm(o,f))}else f=Ne,f=Rt(o,o===nn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Zt(o,f)||(a=!0,Hm(o,f));o=o.next}while(a);Df=!1}}function G_(){Im()}function Im(){tc=wf=!1;var e=0;ja!==0&&J_()&&(e=ja);for(var n=E(),a=null,o=$l;o!==null;){var u=o.next,f=Bm(o,n);f===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(vs=a)):(a=o,(e!==0||(f&3)!==0)&&(tc=!0)),o=u}Cn!==0&&Cn!==5||wo(e),ja!==0&&(ja=0)}function Bm(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Qt(f),R=1<<y,H=u[y];H===-1?((R&a)===0||(R&o)!==0)&&(u[y]=ge(R,n)):H<=n&&(e.expiredLanes|=R),f&=~R}if(n=nn,a=Ne,a=Rt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Kt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Kt(o),Vi(a)){case 2:case 8:a=wt;break;case 32:a=mt;break;case 268435456:a=kt;break;default:a=mt}return o=Fm.bind(null,e),a=Ae(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Kt(o),e.callbackPriority=2,e.callbackNode=null,2}function Fm(e,n){if(Cn!==0&&Cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=Ne;return o=Rt(e,e===nn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ym(e,o,n),Bm(e,E()),e.callbackNode!=null&&e.callbackNode===a?Fm.bind(null,e):null)}function Hm(e,n){if(Jl())return null;ym(e,n,!0)}function V_(){ty(function(){(Ye&6)!==0?Ae(_t,G_):Im()})}function Uf(){if(ja===0){var e=is;e===0&&(e=Vt,Vt<<=1,(Vt&261888)===0&&(Vt=256)),ja=e}return ja}function Gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function Vm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function k_(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Gm((u[pn]||null).action),y=o.submitter;y&&(n=(n=y[pn]||null)?Gm(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new hl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var H=y?Vm(u,y):new FormData(u);Ku(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=y?Vm(u,y):new FormData(u),Ku(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Lf=0;Lf<du.length;Lf++){var Nf=du[Lf],X_=Nf.toLowerCase(),q_=Nf[0].toUpperCase()+Nf.slice(1);Ni(X_,"on"+q_)}Ni(_p,"onAnimationEnd"),Ni(yp,"onAnimationIteration"),Ni(Sp,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(o_,"onTransitionRun"),Ni(l_,"onTransitionStart"),Ni(c_,"onTransitionCancel"),Ni(Mp,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function km(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],H=R.instance,ot=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=ot;try{f(u)}catch(yt){ml(yt)}u.currentTarget=null,f=H}else for(y=0;y<o.length;y++){if(R=o[y],H=R.instance,ot=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=ot;try{f(u)}catch(yt){ml(yt)}u.currentTarget=null,f=H}}}}function Le(e,n){var a=n[zn];a===void 0&&(a=n[zn]=new Set);var o=e+"__bubble";a.has(o)||(Xm(n,e,2,!1),a.add(o))}function Of(e,n,a){var o=0;n&&(o|=4),Xm(a,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[ec]){e[ec]=!0,$.forEach(function(a){a!=="selectionchange"&&(W_.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,Of("selectionchange",!1,n))}}function Xm(e,n,a,o){switch(_x(n)){case 2:var u=yy;break;case 8:u=Sy;break;default:u=Kf}a=u.bind(null,n,a,e),u=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function zf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=_i(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=f=y;continue t}R=R.parentNode}}o=o.return}Zd(function(){var ot=f,yt=Jc(a),Ct=[];t:{var ft=bp.get(e);if(ft!==void 0){var xt=hl,te=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":xt=Fv;break;case"focusin":te="focus",xt=au;break;case"focusout":te="blur",xt=au;break;case"beforeblur":case"afterblur":xt=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xt=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xt=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xt=Vv;break;case _p:case yp:case Sp:xt=Dv;break;case Mp:xt=Xv;break;case"scroll":case"scrollend":xt=Tv;break;case"wheel":xt=Wv;break;case"copy":case"cut":case"paste":xt=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xt=tp;break;case"toggle":case"beforetoggle":xt=jv}var me=(n&4)!==0,tn=!me&&(e==="scroll"||e==="scrollend"),Q=me?ft!==null?ft+"Capture":null:ft;me=[];for(var X=ot,rt;X!==null;){var Tt=X;if(rt=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||rt===null||Q===null||(Tt=Qs(X,Q),Tt!=null&&me.push(Uo(X,Tt,rt))),tn)break;X=X.return}0<me.length&&(ft=new xt(ft,te,null,a,yt),Ct.push({event:ft,listeners:me}))}}if((n&7)===0){t:{if(ft=e==="mouseover"||e==="pointerover",xt=e==="mouseout"||e==="pointerout",ft&&a!==Qc&&(te=a.relatedTarget||a.fromElement)&&(_i(te)||te[qn]))break t;if((xt||ft)&&(ft=yt.window===yt?yt:(ft=yt.ownerDocument)?ft.defaultView||ft.parentWindow:window,xt?(te=a.relatedTarget||a.toElement,xt=ot,te=te?_i(te):null,te!==null&&(tn=c(te),me=te.tag,te!==tn||me!==5&&me!==27&&me!==6)&&(te=null)):(xt=null,te=ot),xt!==te)){if(me=Jd,Tt="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(me=tp,Tt="onPointerLeave",Q="onPointerEnter",X="pointer"),tn=xt==null?ft:K(xt),rt=te==null?ft:K(te),ft=new me(Tt,X+"leave",xt,a,yt),ft.target=tn,ft.relatedTarget=rt,Tt=null,_i(yt)===ot&&(me=new me(Q,X+"enter",te,a,yt),me.target=rt,me.relatedTarget=tn,Tt=me),tn=Tt,xt&&te)e:{for(me=Y_,Q=xt,X=te,rt=0,Tt=Q;Tt;Tt=me(Tt))rt++;Tt=0;for(var ce=X;ce;ce=me(ce))Tt++;for(;0<rt-Tt;)Q=me(Q),rt--;for(;0<Tt-rt;)X=me(X),Tt--;for(;rt--;){if(Q===X||X!==null&&Q===X.alternate){me=Q;break e}Q=me(Q),X=me(X)}me=null}else me=null;xt!==null&&qm(Ct,ft,xt,me,!1),te!==null&&tn!==null&&qm(Ct,tn,te,me,!0)}}t:{if(ft=ot?K(ot):window,xt=ft.nodeName&&ft.nodeName.toLowerCase(),xt==="select"||xt==="input"&&ft.type==="file")var Xe=lp;else if(sp(ft))if(cp)Xe=a_;else{Xe=n_;var re=e_}else xt=ft.nodeName,!xt||xt.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?ot&&je(ot.elementType)&&(Xe=lp):Xe=i_;if(Xe&&(Xe=Xe(e,ot))){op(Ct,Xe,a,yt);break t}re&&re(e,ft,ot),e==="focusout"&&ot&&ft.type==="number"&&ot.memoizedProps.value!=null&&Re(ft,"number",ft.value)}switch(re=ot?K(ot):window,e){case"focusin":(sp(re)||re.contentEditable==="true")&&(Zr=re,uu=ot,ro=null);break;case"focusout":ro=uu=Zr=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,gp(Ct,a,yt);break;case"selectionchange":if(s_)break;case"keydown":case"keyup":gp(Ct,a,yt)}var Ee;if(su)t:{switch(e){case"compositionstart":var Oe="onCompositionStart";break t;case"compositionend":Oe="onCompositionEnd";break t;case"compositionupdate":Oe="onCompositionUpdate";break t}Oe=void 0}else jr?ap(e,a)&&(Oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Oe="onCompositionStart");Oe&&(ep&&a.locale!=="ko"&&(jr||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&jr&&(Ee=Kd()):(La=yt,eu="value"in La?La.value:La.textContent,jr=!0)),re=nc(ot,Oe),0<re.length&&(Oe=new $d(Oe,e,null,a,yt),Ct.push({event:Oe,listeners:re}),Ee?Oe.data=Ee:(Ee=rp(a),Ee!==null&&(Oe.data=Ee)))),(Ee=Kv?Qv(e,a):Jv(e,a))&&(Oe=nc(ot,"onBeforeInput"),0<Oe.length&&(re=new $d("onBeforeInput","beforeinput",null,a,yt),Ct.push({event:re,listeners:Oe}),re.data=Ee)),k_(Ct,e,ot,a,yt)}km(Ct,n)})}function Uo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Qs(e,a),u!=null&&o.unshift(Uo(e,u,f)),u=Qs(e,n),u!=null&&o.push(Uo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Y_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qm(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var R=a,H=R.alternate,ot=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ot===null||(H=ot,u?(ot=Qs(a,f),ot!=null&&y.unshift(Uo(a,ot,H))):u||(ot=Qs(a,f),ot!=null&&y.push(Uo(a,ot,H)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var j_=/\r\n?/g,Z_=/\u0000|\uFFFD/g;function Wm(e){return(typeof e=="string"?e:""+e).replace(j_,`
`).replace(Z_,"")}function Ym(e,n){return n=Wm(n),Wm(e)===n}function $e(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ze(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ze(e,""+o);break;case"className":ae(e,"class",o);break;case"tabIndex":ae(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(e,a,o);break;case"style":Be(e,o,f);break;case"data":if(n!=="object"){ae(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&$e(e,n,"name",u.name,u,null),$e(e,n,"formEncType",u.formEncType,u,null),$e(e,n,"formMethod",u.formMethod,u,null),$e(e,n,"formTarget",u.formTarget,u,null)):($e(e,n,"encType",u.encType,u,null),$e(e,n,"method",u.method,u,null),$e(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=na);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Le("beforetoggle",e),Le("toggle",e),Xt(e,"popover",o);break;case"xlinkActuate":se(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":se(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":se(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":se(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":se(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":se(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":se(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":se(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":se(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Un.get(a)||a,Xt(e,a,o))}}function If(e,n,a,o,u,f){switch(a){case"style":Be(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ze(e,o):(typeof o=="number"||typeof o=="bigint")&&Ze(e,""+o);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"onClick":o!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!B.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Xt(e,a,o)}}}function Gn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:$e(e,n,f,y,a,null)}}u&&$e(e,n,"srcSet",a.srcSet,a,null),o&&$e(e,n,"src",a.src,a,null);return;case"input":Le("invalid",e);var R=f=y=u=null,H=null,ot=null;for(o in a)if(a.hasOwnProperty(o)){var yt=a[o];if(yt!=null)switch(o){case"name":u=yt;break;case"type":y=yt;break;case"checked":H=yt;break;case"defaultChecked":ot=yt;break;case"value":f=yt;break;case"defaultValue":R=yt;break;case"children":case"dangerouslySetInnerHTML":if(yt!=null)throw Error(r(137,n));break;default:$e(e,n,o,yt,a,null)}}ve(e,f,R,H,ot,y,u,!1);return;case"select":Le("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:$e(e,n,u,R,a,null)}n=f,a=y,e.multiple=!!o,n!=null?Ge(e,!!o,n,!1):a!=null&&Ge(e,!!o,a,!0);return;case"textarea":Le("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:$e(e,n,y,R,a,null)}Ve(e,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:$e(e,n,H,o,a,null)}return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(o=0;o<Do.length;o++)Le(Do[o],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(o=a[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:$e(e,n,ot,o,a,null)}return;default:if(je(n)){for(yt in a)a.hasOwnProperty(yt)&&(o=a[yt],o!==void 0&&If(e,n,yt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&$e(e,n,R,o,a,null))}function K_(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,R=null,H=null,ot=null,yt=null;for(xt in a){var Ct=a[xt];if(a.hasOwnProperty(xt)&&Ct!=null)switch(xt){case"checked":break;case"value":break;case"defaultValue":H=Ct;default:o.hasOwnProperty(xt)||$e(e,n,xt,null,o,Ct)}}for(var ft in o){var xt=o[ft];if(Ct=a[ft],o.hasOwnProperty(ft)&&(xt!=null||Ct!=null))switch(ft){case"type":f=xt;break;case"name":u=xt;break;case"checked":ot=xt;break;case"defaultChecked":yt=xt;break;case"value":y=xt;break;case"defaultValue":R=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:xt!==Ct&&$e(e,n,ft,xt,o,Ct)}}mn(e,y,R,H,ot,yt,f,u);return;case"select":xt=y=R=ft=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":xt=H;default:o.hasOwnProperty(f)||$e(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":ft=f;break;case"defaultValue":R=f;break;case"multiple":y=f;default:f!==H&&$e(e,n,u,f,o,H)}n=R,a=y,o=xt,ft!=null?Ge(e,!!a,ft,!1):!!o!=!!a&&(n!=null?Ge(e,!!a,n,!0):Ge(e,!!a,a?[]:"",!1));return;case"textarea":xt=ft=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:$e(e,n,R,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ft=u;break;case"defaultValue":xt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&$e(e,n,y,u,o,f)}he(e,ft,xt);return;case"option":for(var te in a)if(ft=a[te],a.hasOwnProperty(te)&&ft!=null&&!o.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:$e(e,n,te,null,o,ft)}for(H in o)if(ft=o[H],xt=a[H],o.hasOwnProperty(H)&&ft!==xt&&(ft!=null||xt!=null))switch(H){case"selected":e.selected=ft&&typeof ft!="function"&&typeof ft!="symbol";break;default:$e(e,n,H,ft,o,xt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)ft=a[me],a.hasOwnProperty(me)&&ft!=null&&!o.hasOwnProperty(me)&&$e(e,n,me,null,o,ft);for(ot in o)if(ft=o[ot],xt=a[ot],o.hasOwnProperty(ot)&&ft!==xt&&(ft!=null||xt!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:$e(e,n,ot,ft,o,xt)}return;default:if(je(n)){for(var tn in a)ft=a[tn],a.hasOwnProperty(tn)&&ft!==void 0&&!o.hasOwnProperty(tn)&&If(e,n,tn,void 0,o,ft);for(yt in o)ft=o[yt],xt=a[yt],!o.hasOwnProperty(yt)||ft===xt||ft===void 0&&xt===void 0||If(e,n,yt,ft,o,xt);return}}for(var Q in a)ft=a[Q],a.hasOwnProperty(Q)&&ft!=null&&!o.hasOwnProperty(Q)&&$e(e,n,Q,null,o,ft);for(Ct in o)ft=o[Ct],xt=a[Ct],!o.hasOwnProperty(Ct)||ft===xt||ft==null&&xt==null||$e(e,n,Ct,ft,o,xt)}function jm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Q_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,R=u.duration;if(f&&R&&jm(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ot=H.startTime;if(ot>R)break;var yt=H.transferSize,Ct=H.initiatorType;yt&&jm(Ct)&&(H=H.responseEnd,y+=yt*(H<R?1:(R-ot)/(H-ot)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bf=null,Ff=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function Zm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Km(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function J_(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var Qm=typeof setTimeout=="function"?setTimeout:void 0,$_=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(e){return Jm.resolve(null).then(e).catch(ey)}:Qm;function ey(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function $m(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Ms(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Lo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Lo(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[ki]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Lo(e.ownerDocument.body);a=u}while(a);Ms(n)}function tx(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Xi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ny(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ki])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function iy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ai(e.nextSibling),e===null))return null;return e}function ex(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ai(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ay(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ai(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var qf=null;function nx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function ix(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function ax(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xi(e)}var Ri=new Map,rx=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=j.d;j.d={f:ry,r:sy,D:oy,C:ly,L:cy,m:uy,X:hy,S:fy,M:dy};function ry(){var e=va.f(),n=Zl();return e||n}function sy(e){var n=D(e);n!==null&&n.tag===5&&n.type==="form"?M0(n):va.r(e)}var _s=typeof document>"u"?null:document;function sx(e,n,a){var o=_s;if(o&&typeof n=="string"&&n){var u=fe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),rx.has(u)||(rx.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Gn(n,"link",e),nt(n),o.head.appendChild(n)))}}function oy(e){va.D(e),sx("dns-prefetch",e,null)}function ly(e,n){va.C(e,n),sx("preconnect",e,n)}function cy(e,n,a){va.L(e,n,a);var o=_s;if(o&&e&&n){var u='link[rel="preload"][as="'+fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+fe(a.imageSizes)+'"]')):u+='[href="'+fe(e)+'"]';var f=u;switch(n){case"style":f=ys(e);break;case"script":f=Ss(e)}Ri.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ri.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(f))||n==="script"&&o.querySelector(Oo(f))||(n=o.createElement("link"),Gn(n,"link",e),nt(n),o.head.appendChild(n)))}}function uy(e,n){va.m(e,n);var a=_s;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+fe(o)+'"][href="'+fe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ss(e)}if(!Ri.has(f)&&(e=x({rel:"modulepreload",href:e},n),Ri.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Oo(f)))return}o=a.createElement("link"),Gn(o,"link",e),nt(o),a.head.appendChild(o)}}}function fy(e,n,a){va.S(e,n,a);var o=_s;if(o&&e){var u=lt(o).hoistableStyles,f=ys(e);n=n||"default";var y=u.get(f);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(No(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ri.get(f))&&Wf(e,a);var H=y=o.createElement("link");nt(H),Gn(H,"link",e),H._p=new Promise(function(ot,yt){H.onload=ot,H.onerror=yt}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,rc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(f,y)}}}function hy(e,n){va.X(e,n);var a=_s;if(a&&e){var o=lt(a).hoistableScripts,u=Ss(e),f=o.get(u);f||(f=a.querySelector(Oo(u)),f||(e=x({src:e,async:!0},n),(n=Ri.get(u))&&Yf(e,n),f=a.createElement("script"),nt(f),Gn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function dy(e,n){va.M(e,n);var a=_s;if(a&&e){var o=lt(a).hoistableScripts,u=Ss(e),f=o.get(u);f||(f=a.querySelector(Oo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=Ri.get(u))&&Yf(e,n),f=a.createElement("script"),nt(f),Gn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ox(e,n,a,o){var u=(u=J.current)?ac(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ys(a.href),a=lt(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ys(a.href);var f=lt(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(No(e)))&&!f._p&&(y.instance=f,y.state.loading=5),Ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(e,a),f||py(u,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ss(a),a=lt(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ys(e){return'href="'+fe(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function lx(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function py(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Gn(n,"link",a),nt(n),e.head.appendChild(n))}function Ss(e){return'[src="'+fe(e)+'"]'}function Oo(e){return"script[async]"+e}function cx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+fe(a.href)+'"]');if(o)return n.instance=o,nt(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nt(o),Gn(o,"style",u),rc(o,a.precedence,e),n.instance=o;case"stylesheet":u=ys(a.href);var f=e.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,nt(f),f;o=lx(a),(u=Ri.get(u))&&Wf(o,u),f=(e.ownerDocument||e).createElement("link"),nt(f);var y=f;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Gn(f,"link",o),n.state.loading|=4,rc(f,a.precedence,e),n.instance=f;case"script":return f=Ss(a.src),(u=e.querySelector(Oo(f)))?(n.instance=u,nt(u),u):(o=a,(u=Ri.get(f))&&(o=x({},a),Yf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nt(u),Gn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,rc(o,a.precedence,e));return n.instance}function rc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var sc=null;function ux(e,n,a){if(sc===null){var o=new Map,u=sc=new Map;u.set(a,o)}else u=sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ki]||f[un]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var R=o.get(y);R?R.push(f):o.set(y,[f])}}return o}function fx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function my(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ys(o.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,nt(f);return}f=n.ownerDocument||n,o=lx(o),(u=Ri.get(u))&&Wf(o,u),f=f.createElement("link"),nt(f);var y=f;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Gn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function gy(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&jf===0&&(jf=62500*Q_());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(vy,e),lc=null,oc.call(e))}function vy(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var o=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Po={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function _y(e,n,a,o,u,f,y,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ie(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ie(0),this.hiddenUpdates=Ie(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function dx(e,n,a,o,u,f,y,R,H,ot,yt,Ct){return e=new _y(e,n,a,y,H,ot,yt,Ct,R),n=1,f===!0&&(n|=24),f=ci(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Du(f),e}function px(e){return e?(e=Jr,e):Jr}function mx(e,n,a,o,u,f){u=px(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Fa(e,o,n),a!==null&&(ri(a,e,n),ho(a,e,n))}function xx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zf(e,n){xx(e,n),(e=e.alternate)&&xx(e,n)}function gx(e){if(e.tag===13||e.tag===31){var n=vr(e,67108864);n!==null&&ri(n,e,67108864),Zf(e,67108864)}}function vx(e){if(e.tag===13||e.tag===31){var n=pi();n=oi(n);var a=vr(e,n);a!==null&&ri(a,e,n),Zf(e,n)}}var uc=!0;function yy(e,n,a,o){var u=F.T;F.T=null;var f=j.p;try{j.p=2,Kf(e,n,a,o)}finally{j.p=f,F.T=u}}function Sy(e,n,a,o){var u=F.T;F.T=null;var f=j.p;try{j.p=8,Kf(e,n,a,o)}finally{j.p=f,F.T=u}}function Kf(e,n,a,o){if(uc){var u=Qf(o);if(u===null)zf(e,n,o,fc,a),yx(e,o);else if(by(u,e,n,a,o))o.stopPropagation();else if(yx(e,o),n&4&&-1<My.indexOf(e)){for(;u!==null;){var f=D(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ot(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-Qt(y);R.entanglements[1]|=H,y&=~H}ji(f),(Ye&6)===0&&(Yl=E()+500,wo(0))}}break;case 31:case 13:R=vr(f,2),R!==null&&ri(R,f,2),Zl(),Zf(f,2)}if(f=Qf(o),f===null&&zf(e,n,o,fc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else zf(e,n,o,null,a)}}function Qf(e){return e=Jc(e),Jf(e)}var fc=null;function Jf(e){if(fc=null,e=_i(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function _x(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case _t:return 2;case wt:return 8;case mt:case ee:return 32;case kt:return 268435456;default:return 32}default:return 32}}var $f=!1,Ka=null,Qa=null,Ja=null,zo=new Map,Io=new Map,$a=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yx(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function Bo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=D(n),n!==null&&gx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function by(e,n,a,o,u){switch(n){case"focusin":return Ka=Bo(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=Bo(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=Bo(Ja,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Bo(zo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Io.set(f,Bo(Io.get(f)||null,e,n,a,o,u)),!0}return!1}function Sx(e){var n=_i(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ua(e.priority,function(){vx(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ua(e.priority,function(){vx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Qc=o,a.target.dispatchEvent(o),Qc=null}else return n=D(a),n!==null&&gx(n),e.blockedOn=a,!1;n.shift()}return!0}function Mx(e,n,a){hc(e)&&a.delete(n)}function Ey(){$f=!1,Ka!==null&&hc(Ka)&&(Ka=null),Qa!==null&&hc(Qa)&&(Qa=null),Ja!==null&&hc(Ja)&&(Ja=null),zo.forEach(Mx),Io.forEach(Mx)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ey)))}var pc=null;function bx(e){pc!==e&&(pc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Jf(o||a)===null)continue;break}var f=D(a);f!==null&&(e.splice(n,3),n-=3,Ku(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ms(e){function n(H){return dc(H,e)}Ka!==null&&dc(Ka,e),Qa!==null&&dc(Qa,e),Ja!==null&&dc(Ja,e),zo.forEach(n),Io.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)Sx(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[pn]||null;if(typeof f=="function")y||bx(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[pn]||null)R=y.formAction;else if(Jf(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),bx(a)}}}function Ex(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function th(e){this._internalRoot=e}mc.prototype.render=th.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=pi();mx(a,o,e,n,null,null)},mc.prototype.unmount=th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;mx(e.current,2,null,e,null,null),Zl(),n[qn]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=hr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&Sx(e)}};var Tx=t.version;if(Tx!=="19.2.0")throw Error(r(527,Tx,"19.2.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Ty={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{Dt=xc.inject(Ty),Lt=xc}catch{}}return Ho.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=L0,f=N0,y=O0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=dx(e,1,!1,null,null,a,o,null,u,f,y,Ex),e[qn]=n.current,Pf(e),new th(n)},Ho.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=L0,y=N0,R=O0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=dx(e,1,!0,n,a??null,o,u,H,f,y,R,Ex),n.context=px(null),a=n.current,o=pi(),o=oi(o),u=Ba(o),u.callback=null,Fa(a,u,o),a=o,n.current.lanes=a,Rn(n,a),ji(n),e[qn]=n.current,Pf(e),new mc(n)},Ho.version="19.2.0",Ho}var Px;function Iy(){if(Px)return ih.exports;Px=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ih.exports=zy(),ih.exports}var By=Iy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="181",Fy=0,zx=1,Hy=2,Yg=1,Gy=2,Aa=3,ur=0,si=1,Ki=2,wa=0,Fs=1,Ix=2,Bx=3,Fx=4,Vy=5,Br=100,ky=101,Xy=102,qy=103,Wy=104,Yy=200,jy=201,Zy=202,Ky=203,Hh=204,Gh=205,Qy=206,Jy=207,$y=208,t1=209,e1=210,n1=211,i1=212,a1=213,r1=214,Vh=0,kh=1,Xh=2,Gs=3,qh=4,Wh=5,Yh=6,jh=7,jg=0,s1=1,o1=2,cr=0,l1=1,c1=2,u1=3,f1=4,h1=5,d1=6,p1=7,Zg=300,Vs=301,ks=302,Zh=303,Kh=304,Yc=306,Qh=1e3,Ra=1001,Jh=1002,vi=1003,m1=1004,gc=1005,Ui=1006,oh=1007,Hr=1008,$i=1009,Kg=1010,Qg=1011,Qo=1012,Nd=1013,Vr=1014,Ca=1015,Ws=1016,Od=1017,Pd=1018,Jo=1020,Jg=35902,$g=35899,tv=1021,ev=1022,Hi=1023,$o=1026,tl=1027,nv=1028,zd=1029,Id=1030,Bd=1031,Fd=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,$h=35840,td=35841,ed=35842,nd=35843,id=36196,ad=37492,rd=37496,sd=37808,od=37809,ld=37810,cd=37811,ud=37812,fd=37813,hd=37814,dd=37815,pd=37816,md=37817,xd=37818,gd=37819,vd=37820,_d=37821,yd=36492,Sd=36494,Md=36495,bd=36283,Ed=36284,Td=36285,Ad=36286,x1=3200,g1=3201,iv=0,v1=1,or="",wi="srgb",Xs="srgb-linear",qc="linear",en="srgb",bs=7680,Hx=519,_1=512,y1=513,S1=514,av=515,M1=516,b1=517,E1=518,T1=519,Gx=35044,Vx="300 es",Qi=2e3,Wc=2001;function rv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function el(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function A1(){const s=el("canvas");return s.style.display="block",s}const kx={};function Xx(...s){const t="THREE."+s.shift();console.log(t,...s)}function Me(...s){const t="THREE."+s.shift();console.warn(t,...s)}function vn(...s){const t="THREE."+s.shift();console.error(t,...s)}function nl(...s){const t=s.join(" ");t in kx||(kx[t]=!0,Me(...s))}function R1(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Ys{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qx=1234567;const Zo=Math.PI/180,il=180/Math.PI;function js(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[i&63|128]+Yn[i>>8&255]+"-"+Yn[i>>16&255]+Yn[i>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function Pe(s,t,i){return Math.max(t,Math.min(i,s))}function Hd(s,t){return(s%t+t)%t}function C1(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function w1(s,t,i){return s!==t?(i-s)/(t-s):0}function Ko(s,t,i){return(1-i)*s+i*t}function D1(s,t,i,r){return Ko(s,t,1-Math.exp(-i*r))}function U1(s,t=1){return t-Math.abs(Hd(s,t*2)-t)}function L1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function N1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function O1(s,t){return s+Math.floor(Math.random()*(t-s+1))}function P1(s,t){return s+Math.random()*(t-s)}function z1(s){return s*(.5-Math.random())}function I1(s){s!==void 0&&(qx=s);let t=qx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function B1(s){return s*Zo}function F1(s){return s*il}function H1(s){return(s&s-1)===0&&s!==0}function G1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function V1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function k1(s,t,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+r)/2),g=h((t+r)/2),x=c((t-r)/2),_=h((t-r)/2),S=c((r-t)/2),b=h((r-t)/2);switch(l){case"XYX":s.set(d*g,m*x,m*_,d*p);break;case"YZY":s.set(m*_,d*g,m*x,d*p);break;case"ZXZ":s.set(m*x,m*_,d*g,d*p);break;case"XZX":s.set(d*g,m*b,m*S,d*p);break;case"YXY":s.set(m*S,d*g,m*b,d*p);break;case"ZYZ":s.set(m*b,m*S,d*g,d*p);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Bs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vn={DEG2RAD:Zo,RAD2DEG:il,generateUUID:js,clamp:Pe,euclideanModulo:Hd,mapLinear:C1,inverseLerp:w1,lerp:Ko,damp:D1,pingpong:U1,smoothstep:L1,smootherstep:N1,randInt:O1,randFloat:P1,randFloatSpread:z1,seededRandom:I1,degToRad:B1,radToDeg:F1,isPowerOfTwo:H1,ceilPowerOfTwo:G1,floorPowerOfTwo:V1,setQuaternionFromProperEuler:k1,normalize:Jn,denormalize:Bs};class we{constructor(t=0,i=0){we.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Pe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3],_=c[h+0],S=c[h+1],b=c[h+2],A=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d>=1){t[i+0]=_,t[i+1]=S,t[i+2]=b,t[i+3]=A;return}if(x!==A||m!==_||p!==S||g!==b){let M=m*_+p*S+g*b+x*A;M<0&&(_=-_,S=-S,b=-b,A=-A,M=-M);let v=1-d;if(M<.9995){const N=Math.acos(M),L=Math.sin(N);v=Math.sin(v*N)/L,d=Math.sin(d*N)/L,m=m*v+_*d,p=p*v+S*d,g=g*v+b*d,x=x*v+A*d}else{m=m*v+_*d,p=p*v+S*d,g=g*v+b*d,x=x*v+A*d;const N=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=N,p*=N,g*=N,x*=N}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=c[h],_=c[h+1],S=c[h+2],b=c[h+3];return t[i]=d*b+g*x+m*S-p*_,t[i+1]=m*b+g*_+p*x-d*S,t[i+2]=p*b+g*S+d*_-m*x,t[i+3]=g*b-d*x-m*_-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(c/2),_=m(r/2),S=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=_*g*x+p*S*b,this._y=p*S*x-_*g*b,this._z=p*g*b+_*S*x,this._w=p*g*x-_*S*b;break;case"YXZ":this._x=_*g*x+p*S*b,this._y=p*S*x-_*g*b,this._z=p*g*b-_*S*x,this._w=p*g*x+_*S*b;break;case"ZXY":this._x=_*g*x-p*S*b,this._y=p*S*x+_*g*b,this._z=p*g*b+_*S*x,this._w=p*g*x-_*S*b;break;case"ZYX":this._x=_*g*x-p*S*b,this._y=p*S*x+_*g*b,this._z=p*g*b-_*S*x,this._w=p*g*x+_*S*b;break;case"YZX":this._x=_*g*x+p*S*b,this._y=p*S*x+_*g*b,this._z=p*g*b-_*S*x,this._w=p*g*x-_*S*b;break;case"XZY":this._x=_*g*x-p*S*b,this._y=p*S*x-_*g*b,this._z=p*g*b+_*S*x,this._w=p*g*x+_*S*b;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],_=r+d+x;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pt{constructor(t=0,i=0,r=0){pt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Wx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Wx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),x=2*(c*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-c*x,this.z=l+m*x+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this.z=Pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this.z=Pe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Pe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new pt,Wx=new rl;class Te{constructor(t,i,r,l,c,h,d,m,p){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],_=r[2],S=r[5],b=r[8],A=l[0],M=l[3],v=l[6],N=l[1],L=l[4],O=l[7],P=l[2],T=l[5],U=l[8];return c[0]=h*A+d*N+m*P,c[3]=h*M+d*L+m*T,c[6]=h*v+d*O+m*U,c[1]=p*A+g*N+x*P,c[4]=p*M+g*L+x*T,c[7]=p*v+g*O+x*U,c[2]=_*A+S*N+b*P,c[5]=_*M+S*L+b*T,c[8]=_*v+S*O+b*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,_=d*m-g*c,S=p*c-h*m,b=i*x+r*_+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=x*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*h)*A,t[3]=_*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=S*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ch.makeScale(t,i)),this}rotate(t){return this.premultiply(ch.makeRotation(-t)),this}translate(t,i){return this.premultiply(ch.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new Te,Yx=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jx=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X1(){const s={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===en&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===en&&(l.r=Hs(l.r),l.g=Hs(l.g),l.b=Hs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return nl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return nl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xs]:{primaries:t,whitePoint:r,transfer:qc,toXYZ:Yx,fromXYZ:jx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:t,whitePoint:r,transfer:en,toXYZ:Yx,fromXYZ:jx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),s}const We=X1();function Da(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class q1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Es===void 0&&(Es=el("canvas")),Es.width=t.width,Es.height=t.height;const l=Es.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Es}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=el("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Da(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Da(i[r]/255)*255):i[r]=Da(i[r]);return{data:i,width:t.width,height:t.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let W1=0;class Gd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(uh(l[h].image)):c.push(uh(l[h]))}else c=uh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?q1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let Y1=0;const fh=new pt;class kn extends Ys{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Ra,l=Ra,c=Ui,h=Hr,d=Hi,m=$i,p=kn.DEFAULT_ANISOTROPY,g=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=js(),this.name="",this.source=new Gd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){Me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qh:t.x=t.x-Math.floor(t.x);break;case Ra:t.x=t.x<0?0:1;break;case Jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qh:t.y=t.y-Math.floor(t.y);break;case Ra:t.y=t.y<0?0:1;break;case Jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Zg;kn.DEFAULT_ANISOTROPY=1;class hn{constructor(t=0,i=0,r=0,l=1){hn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],x=m[8],_=m[1],S=m[5],b=m[9],A=m[2],M=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,O=(S+1)/2,P=(v+1)/2,T=(g+_)/4,U=(x+A)/4,W=(b+M)/4;return L>O&&L>P?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=T/r,c=U/r):O>P?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=T/l,c=W/l):P<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),r=U/c,l=W/c),this.set(r,l,c,i),this}let N=Math.sqrt((M-b)*(M-b)+(x-A)*(x-A)+(_-g)*(_-g));return Math.abs(N)<.001&&(N=1),this.x=(M-b)/N,this.y=(x-A)/N,this.z=(_-g)/N,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this.z=Pe(this.z,t.z,i.z),this.w=Pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this.z=Pe(this.z,t,i),this.w=Pe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j1 extends Ys{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new hn(0,0,t,i),this.scissorTest=!1,this.viewport=new hn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new kn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Gd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends j1{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class sv extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z1 extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(t=new pt(1/0,1/0,1/0),i=new pt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,zi):zi.fromBufferAttribute(c,h),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vc.copy(r.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),_c.subVectors(this.max,Go),Ts.subVectors(t.a,Go),As.subVectors(t.b,Go),Rs.subVectors(t.c,Go),er.subVectors(As,Ts),nr.subVectors(Rs,As),Ur.subVectors(Ts,Rs);let i=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Ur.z,Ur.y,er.z,0,-er.x,nr.z,0,-nr.x,Ur.z,0,-Ur.x,-er.y,er.x,0,-nr.y,nr.x,0,-Ur.y,Ur.x,0];return!hh(i,Ts,As,Rs,_c)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,Ts,As,Rs,_c))?!1:(yc.crossVectors(er,nr),i=[yc.x,yc.y,yc.z],hh(i,Ts,As,Rs,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_a),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _a=[new pt,new pt,new pt,new pt,new pt,new pt,new pt,new pt],zi=new pt,vc=new sl,Ts=new pt,As=new pt,Rs=new pt,er=new pt,nr=new pt,Ur=new pt,Go=new pt,_c=new pt,yc=new pt,Lr=new pt;function hh(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Lr.fromArray(s,c);const d=l.x*Math.abs(Lr.x)+l.y*Math.abs(Lr.y)+l.z*Math.abs(Lr.z),m=t.dot(Lr),p=i.dot(Lr),g=r.dot(Lr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const K1=new sl,Vo=new pt,dh=new pt;class jc{constructor(t=new pt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):K1.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Vo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(dh)),this.expandByPoint(Vo.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ya=new pt,ph=new pt,Sc=new pt,ir=new pt,mh=new pt,Mc=new pt,xh=new pt;class Vd{constructor(t=new pt,i=new pt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ph.copy(t).add(i).multiplyScalar(.5),Sc.copy(i).sub(t).normalize(),ir.copy(this.origin).sub(ph);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Sc),d=ir.dot(this.direction),m=-ir.dot(Sc),p=ir.lengthSq(),g=Math.abs(1-h*h);let x,_,S,b;if(g>0)if(x=h*m-d,_=h*d-m,b=c*g,x>=0)if(_>=-b)if(_<=b){const A=1/g;x*=A,_*=A,S=x*(x+h*_+2*d)+_*(h*x+_+2*m)+p}else _=c,x=Math.max(0,-(h*_+d)),S=-x*x+_*(_+2*m)+p;else _=-c,x=Math.max(0,-(h*_+d)),S=-x*x+_*(_+2*m)+p;else _<=-b?(x=Math.max(0,-(-h*c+d)),_=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+_*(_+2*m)+p):_<=b?(x=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(x=Math.max(0,-(h*c+d)),_=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+_*(_+2*m)+p);else _=h>0?-c:c,x=Math.max(0,-(h*_+d)),S=-x*x+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ph).addScaledVector(Sc,_),S}intersectSphere(t,i){ya.subVectors(t.center,this.origin);const r=ya.dot(this.direction),l=ya.dot(ya)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(r=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(r=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,h=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,h=(t.min.y-_.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-_.z)*x,m=(t.max.z-_.z)*x):(d=(t.max.z-_.z)*x,m=(t.min.z-_.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,r,l,c){mh.subVectors(i,t),Mc.subVectors(r,t),xh.crossVectors(mh,Mc);let h=this.direction.dot(xh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ir.subVectors(this.origin,t);const m=d*this.direction.dot(Mc.crossVectors(ir,Mc));if(m<0)return null;const p=d*this.direction.dot(mh.cross(ir));if(p<0||m+p>h)return null;const g=-d*ir.dot(xh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,i,r,l,c,h,d,m,p,g,x,_,S,b,A,M){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,x,_,S,b,A,M)}set(t,i,r,l,c,h,d,m,p,g,x,_,S,b,A,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=S,v[7]=b,v[11]=A,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Cs.setFromMatrixColumn(t,0).length(),c=1/Cs.setFromMatrixColumn(t,1).length(),h=1/Cs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const _=h*g,S=h*x,b=d*g,A=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=S+b*p,i[5]=_-A*p,i[9]=-d*m,i[2]=A-_*p,i[6]=b+S*p,i[10]=h*m}else if(t.order==="YXZ"){const _=m*g,S=m*x,b=p*g,A=p*x;i[0]=_+A*d,i[4]=b*d-S,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=S*d-b,i[6]=A+_*d,i[10]=h*m}else if(t.order==="ZXY"){const _=m*g,S=m*x,b=p*g,A=p*x;i[0]=_-A*d,i[4]=-h*x,i[8]=b+S*d,i[1]=S+b*d,i[5]=h*g,i[9]=A-_*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const _=h*g,S=h*x,b=d*g,A=d*x;i[0]=m*g,i[4]=b*p-S,i[8]=_*p+A,i[1]=m*x,i[5]=A*p+_,i[9]=S*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,S=h*p,b=d*m,A=d*p;i[0]=m*g,i[4]=A-_*x,i[8]=b*x+S,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*x+b,i[10]=_-A*x}else if(t.order==="XZY"){const _=h*m,S=h*p,b=d*m,A=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=_*x+A,i[5]=h*g,i[9]=S*x-b,i[2]=b*x-S,i[6]=d*g,i[10]=A*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Q1,t,J1)}lookAt(t,i,r){const l=this.elements;return mi.subVectors(t,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),ar.crossVectors(r,mi),ar.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),ar.crossVectors(r,mi)),ar.normalize(),bc.crossVectors(mi,ar),l[0]=ar.x,l[4]=bc.x,l[8]=mi.x,l[1]=ar.y,l[5]=bc.y,l[9]=mi.y,l[2]=ar.z,l[6]=bc.z,l[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],_=r[9],S=r[13],b=r[2],A=r[6],M=r[10],v=r[14],N=r[3],L=r[7],O=r[11],P=r[15],T=l[0],U=l[4],W=l[8],w=l[12],C=l[1],G=l[5],q=l[9],at=l[13],dt=l[2],ut=l[6],F=l[10],j=l[14],Z=l[3],Mt=l[7],Et=l[11],I=l[15];return c[0]=h*T+d*C+m*dt+p*Z,c[4]=h*U+d*G+m*ut+p*Mt,c[8]=h*W+d*q+m*F+p*Et,c[12]=h*w+d*at+m*j+p*I,c[1]=g*T+x*C+_*dt+S*Z,c[5]=g*U+x*G+_*ut+S*Mt,c[9]=g*W+x*q+_*F+S*Et,c[13]=g*w+x*at+_*j+S*I,c[2]=b*T+A*C+M*dt+v*Z,c[6]=b*U+A*G+M*ut+v*Mt,c[10]=b*W+A*q+M*F+v*Et,c[14]=b*w+A*at+M*j+v*I,c[3]=N*T+L*C+O*dt+P*Z,c[7]=N*U+L*G+O*ut+P*Mt,c[11]=N*W+L*q+O*F+P*Et,c[15]=N*w+L*at+O*j+P*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],_=t[10],S=t[14],b=t[3],A=t[7],M=t[11],v=t[15];return b*(+c*m*x-l*p*x-c*d*_+r*p*_+l*d*S-r*m*S)+A*(+i*m*S-i*p*_+c*h*_-l*h*S+l*p*g-c*m*g)+M*(+i*p*x-i*d*S-c*h*x+r*h*S+c*d*g-r*p*g)+v*(-l*d*g-i*m*x+i*d*_+l*h*x-r*h*_+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],_=t[10],S=t[11],b=t[12],A=t[13],M=t[14],v=t[15],N=x*M*p-A*_*p+A*m*S-d*M*S-x*m*v+d*_*v,L=b*_*p-g*M*p-b*m*S+h*M*S+g*m*v-h*_*v,O=g*A*p-b*x*p+b*d*S-h*A*S-g*d*v+h*x*v,P=b*x*m-g*A*m-b*d*_+h*A*_+g*d*M-h*x*M,T=i*N+r*L+l*O+c*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/T;return t[0]=N*U,t[1]=(A*_*c-x*M*c-A*l*S+r*M*S+x*l*v-r*_*v)*U,t[2]=(d*M*c-A*m*c+A*l*p-r*M*p-d*l*v+r*m*v)*U,t[3]=(x*m*c-d*_*c-x*l*p+r*_*p+d*l*S-r*m*S)*U,t[4]=L*U,t[5]=(g*M*c-b*_*c+b*l*S-i*M*S-g*l*v+i*_*v)*U,t[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*v-i*m*v)*U,t[7]=(h*_*c-g*m*c+g*l*p-i*_*p-h*l*S+i*m*S)*U,t[8]=O*U,t[9]=(b*x*c-g*A*c-b*r*S+i*A*S+g*r*v-i*x*v)*U,t[10]=(h*A*c-b*d*c+b*r*p-i*A*p-h*r*v+i*d*v)*U,t[11]=(g*d*c-h*x*c-g*r*p+i*x*p+h*r*S-i*d*S)*U,t[12]=P*U,t[13]=(g*A*l-b*x*l+b*r*_-i*A*_-g*r*M+i*x*M)*U,t[14]=(b*d*l-h*A*l-b*r*m+i*A*m+h*r*M-i*d*M)*U,t[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*_+i*d*_)*U,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,x=d+d,_=c*p,S=c*g,b=c*x,A=h*g,M=h*x,v=d*x,N=m*p,L=m*g,O=m*x,P=r.x,T=r.y,U=r.z;return l[0]=(1-(A+v))*P,l[1]=(S+O)*P,l[2]=(b-L)*P,l[3]=0,l[4]=(S-O)*T,l[5]=(1-(_+v))*T,l[6]=(M+N)*T,l[7]=0,l[8]=(b+L)*U,l[9]=(M-N)*U,l[10]=(1-(_+A))*U,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Cs.set(l[0],l[1],l[2]).length();const h=Cs.set(l[4],l[5],l[6]).length(),d=Cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ii.copy(this);const p=1/c,g=1/h,x=1/d;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=x,Ii.elements[9]*=x,Ii.elements[10]*=x,i.setFromRotationMatrix(Ii),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Qi,m=!1){const p=this.elements,g=2*c/(i-t),x=2*c/(r-l),_=(i+t)/(i-t),S=(r+l)/(r-l);let b,A;if(m)b=c/(h-c),A=h*c/(h-c);else if(d===Qi)b=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Wc)b=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Qi,m=!1){const p=this.elements,g=2/(i-t),x=2/(r-l),_=-(i+t)/(i-t),S=-(r+l)/(r-l);let b,A;if(m)b=1/(h-c),A=h/(h-c);else if(d===Qi)b=-2/(h-c),A=-(h+c)/(h-c);else if(d===Wc)b=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Cs=new pt,Ii=new dn,Q1=new pt(0,0,0),J1=new pt(1,1,1),ar=new pt,bc=new pt,mi=new pt,Zx=new dn,Kx=new rl;class ta{constructor(t=0,i=0,r=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Pe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Zx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Kx.setFromEuler(this),this.setFromQuaternion(Kx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class kd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $1=0;const Qx=new pt,ws=new rl,Sa=new dn,Ec=new pt,ko=new pt,tS=new pt,eS=new rl,Jx=new pt(1,0,0),$x=new pt(0,1,0),tg=new pt(0,0,1),eg={type:"added"},nS={type:"removed"},Ds={type:"childadded",child:null},gh={type:"childremoved",child:null};class Pn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const t=new pt,i=new ta,r=new rl,l=new pt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new Te}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ws.setFromAxisAngle(t,i),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,i){return ws.setFromAxisAngle(t,i),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Jx,t)}rotateY(t){return this.rotateOnAxis($x,t)}rotateZ(t){return this.rotateOnAxis(tg,t)}translateOnAxis(t,i){return Qx.copy(t).applyQuaternion(this.quaternion),this.position.add(Qx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Jx,t)}translateY(t){return this.translateOnAxis($x,t)}translateZ(t){return this.translateOnAxis(tg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ec.copy(t):Ec.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(ko,Ec,this.up):Sa.lookAt(Ec,ko,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),ws.setFromRotationMatrix(Sa),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(vn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eg),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):vn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(nS),gh.child=t,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eg),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,tS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,eS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),_=h(t.skeletons),S=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Pn.DEFAULT_UP=new pt(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new pt,Ma=new pt,vh=new pt,ba=new pt,Us=new pt,Ls=new pt,ng=new pt,_h=new pt,yh=new pt,Sh=new pt,Mh=new hn,bh=new hn,Eh=new hn;class Fi{constructor(t=new pt,i=new pt,r=new pt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Bi.subVectors(t,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Bi.subVectors(l,i),Ma.subVectors(r,i),vh.subVectors(t,i);const h=Bi.dot(Bi),d=Bi.dot(Ma),m=Bi.dot(vh),p=Ma.dot(Ma),g=Ma.dot(vh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const _=1/x,S=(p*m-d*g)*_,b=(h*g-d*m)*_;return c.set(1-S-b,b,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(h,ba.y),m.addScaledVector(d,ba.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Mh.setScalar(0),bh.setScalar(0),Eh.setScalar(0),Mh.fromBufferAttribute(t,i),bh.fromBufferAttribute(t,r),Eh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Mh,c.x),h.addScaledVector(bh,c.y),h.addScaledVector(Eh,c.z),h}static isFrontFacing(t,i,r,l){return Bi.subVectors(r,i),Ma.subVectors(t,i),Bi.cross(Ma).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Bi.cross(Ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Fi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;Us.subVectors(l,r),Ls.subVectors(c,r),_h.subVectors(t,r);const m=Us.dot(_h),p=Ls.dot(_h);if(m<=0&&p<=0)return i.copy(r);yh.subVectors(t,l);const g=Us.dot(yh),x=Ls.dot(yh);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*p;if(_<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(Us,h);Sh.subVectors(t,c);const S=Us.dot(Sh),b=Ls.dot(Sh);if(b>=0&&S<=b)return i.copy(c);const A=S*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(Ls,d);const M=g*b-S*x;if(M<=0&&x-g>=0&&S-b>=0)return ng.subVectors(c,l),d=(x-g)/(x-g+(S-b)),i.copy(l).addScaledVector(ng,d);const v=1/(M+A+_);return h=A*v,d=_*v,i.copy(r).addScaledVector(Us,h).addScaledVector(Ls,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Th(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class ke{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=We.workingColorSpace){return this.r=t,this.g=i,this.b=r,We.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=We.workingColorSpace){if(t=Hd(t,1),i=Pe(i,0,1),r=Pe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Th(h,c,t+1/3),this.g=Th(h,c,t),this.b=Th(h,c,t-1/3)}return We.colorSpaceToWorking(this,l),this}setStyle(t,i=wi){function r(c){c!==void 0&&parseFloat(c)<1&&Me("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Me("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);Me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=wi){const r=ov[t.toLowerCase()];return r!==void 0?this.setHex(r,i):Me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wi){return We.workingToColorSpace(jn.copy(this),t),Math.round(Pe(jn.r*255,0,255))*65536+Math.round(Pe(jn.g*255,0,255))*256+Math.round(Pe(jn.b*255,0,255))}getHexString(t=wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=We.workingColorSpace){We.workingToColorSpace(jn.copy(this),i);const r=jn.r,l=jn.g,c=jn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=We.workingColorSpace){return We.workingToColorSpace(jn.copy(this),i),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=wi){We.workingToColorSpace(jn.copy(this),t);const i=jn.r,r=jn.g,l=jn.b;return t!==wi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+i,rr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(rr),t.getHSL(Tc);const r=Ko(rr.h,Tc.h,i),l=Ko(rr.s,Tc.s,i),c=Ko(rr.l,Tc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new ke;ke.NAMES=ov;let iS=0;class Zs extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Fs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){Me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Hh&&(r.blendSrc=this.blendSrc),this.blendDst!==Gh&&(r.blendDst=this.blendDst),this.blendEquation!==Br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xd extends Zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const An=new pt,Ac=new we;let aS=0;class Ji{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Gx,this.updateRanges=[],this.gpuType=Ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(t),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyMatrix3(t),this.setXYZ(i,An.x,An.y,An.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyMatrix4(t),this.setXYZ(i,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyNormalMatrix(t),this.setXYZ(i,An.x,An.y,An.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.transformDirection(t),this.setXYZ(i,An.x,An.y,An.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Bs(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Jn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bs(i,this.array)),i}setX(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bs(i,this.array)),i}setY(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bs(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bs(i,this.array)),i}setW(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),r=Jn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),r=Jn(r,this.array),l=Jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),r=Jn(r,this.array),l=Jn(l,this.array),c=Jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gx&&(t.usage=this.usage),t}}class lv extends Ji{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class cv extends Ji{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Zn extends Ji{constructor(t,i,r){super(new Float32Array(t),i,r)}}let rS=0;const Ci=new dn,Ah=new Pn,Ns=new pt,xi=new sl,Xo=new sl,Nn=new pt;class Li extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rv(t)?cv:lv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Te().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,i,r){return Ci.makeTranslation(t,i,r),this.applyMatrix4(Ci),this}scale(t,i,r){return Ci.makeScale(t,i,r),this.applyMatrix4(Ci),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Zn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){vn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pt(-1/0,-1/0,-1/0),new pt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];xi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){vn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pt,1/0);return}if(t){const r=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Xo.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(xi.min,Xo.min),xi.expandByPoint(Nn),Nn.addVectors(xi.max,Xo.max),xi.expandByPoint(Nn)):(xi.expandByPoint(Xo.min),xi.expandByPoint(Xo.max))}xi.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)Nn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Nn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Nn.fromBufferAttribute(d,p),m&&(Ns.fromBufferAttribute(t,p),Nn.add(Ns)),l=Math.max(l,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&vn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){vn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new pt,m[W]=new pt;const p=new pt,g=new pt,x=new pt,_=new we,S=new we,b=new we,A=new pt,M=new pt;function v(W,w,C){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,w),x.fromBufferAttribute(r,C),_.fromBufferAttribute(c,W),S.fromBufferAttribute(c,w),b.fromBufferAttribute(c,C),g.sub(p),x.sub(p),S.sub(_),b.sub(_);const G=1/(S.x*b.y-b.x*S.y);isFinite(G)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(x,-S.y).multiplyScalar(G),M.copy(x).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(G),d[W].add(A),d[w].add(A),d[C].add(A),m[W].add(M),m[w].add(M),m[C].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let W=0,w=N.length;W<w;++W){const C=N[W],G=C.start,q=C.count;for(let at=G,dt=G+q;at<dt;at+=3)v(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const L=new pt,O=new pt,P=new pt,T=new pt;function U(W){P.fromBufferAttribute(l,W),T.copy(P);const w=d[W];L.copy(w),L.sub(P.multiplyScalar(P.dot(w))).normalize(),O.crossVectors(T,w);const G=O.dot(m[W])<0?-1:1;h.setXYZW(W,L.x,L.y,L.z,G)}for(let W=0,w=N.length;W<w;++W){const C=N[W],G=C.start,q=C.count;for(let at=G,dt=G+q;at<dt;at+=3)U(t.getX(at+0)),U(t.getX(at+1)),U(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const l=new pt,c=new pt,h=new pt,d=new pt,m=new pt,p=new pt,g=new pt,x=new pt;if(t)for(let _=0,S=t.count;_<S;_+=3){const b=t.getX(_+0),A=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,_=new p.constructor(m.length*g);let S=0,b=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?S=m[A]*d.data.stride+d.offset:S=m[A]*g;for(let v=0;v<g;v++)_[b++]=p[S++]}return new Ji(_,g,x)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,x=p.length;g<x;g++){const _=p[g],S=t(_,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,_=p.length;x<_;x++){const S=p[x];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],x=c[p];for(let _=0,S=x.length;_<S;_++)g.push(x[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ig=new dn,Nr=new Vd,Rc=new jc,ag=new pt,Cc=new pt,wc=new pt,Dc=new pt,Rh=new pt,Uc=new pt,rg=new pt,Lc=new pt;class gi extends Pn{constructor(t=new Li,i=new Xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],x=c[m];g!==0&&(Rh.fromBufferAttribute(x,t),h?Uc.addScaledVector(Rh,g):Uc.addScaledVector(Rh.sub(i),g))}i.add(Uc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(c),Nr.copy(t.ray).recast(t.near),!(Rc.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Rc,ag)===null||Nr.origin.distanceToSquared(ag)>(t.far-t.near)**2))&&(ig.copy(c).invert(),Nr.copy(t.ray).applyMatrix4(ig),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Nr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=_.length;b<A;b++){const M=_[b],v=h[M.materialIndex],N=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let O=N,P=L;O<P;O+=3){const T=d.getX(O),U=d.getX(O+1),W=d.getX(O+2);l=Nc(this,v,t,r,p,g,x,T,U,W),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=b,v=A;M<v;M+=3){const N=d.getX(M),L=d.getX(M+1),O=d.getX(M+2);l=Nc(this,h,t,r,p,g,x,N,L,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=_.length;b<A;b++){const M=_[b],v=h[M.materialIndex],N=Math.max(M.start,S.start),L=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let O=N,P=L;O<P;O+=3){const T=O,U=O+1,W=O+2;l=Nc(this,v,t,r,p,g,x,T,U,W),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let M=b,v=A;M<v;M+=3){const N=M,L=M+1,O=M+2;l=Nc(this,h,t,r,p,g,x,N,L,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function sS(s,t,i,r,l,c,h,d){let m;if(t.side===si?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===ur,d),m===null)return null;Lc.copy(d),Lc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:s}}function Nc(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,Cc),s.getVertexPosition(m,wc),s.getVertexPosition(p,Dc);const g=sS(s,t,i,r,Cc,wc,Dc,rg);if(g){const x=new pt;Fi.getBarycoord(rg,Cc,wc,Dc,x),l&&(g.uv=Fi.getInterpolatedAttribute(l,d,m,p,x,new we)),c&&(g.uv1=Fi.getInterpolatedAttribute(c,d,m,p,x,new we)),h&&(g.normal=Fi.getInterpolatedAttribute(h,d,m,p,x,new pt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new pt,materialIndex:0};Fi.getNormal(Cc,wc,Dc,_.normal),g.face=_,g.barycoord=x}return g}class ol extends Li{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],x=[];let _=0,S=0;b("z","y","x",-1,-1,r,i,t,h,c,0),b("z","y","x",1,-1,r,i,-t,h,c,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Zn(p,3)),this.setAttribute("normal",new Zn(g,3)),this.setAttribute("uv",new Zn(x,2));function b(A,M,v,N,L,O,P,T,U,W,w){const C=O/U,G=P/W,q=O/2,at=P/2,dt=T/2,ut=U+1,F=W+1;let j=0,Z=0;const Mt=new pt;for(let Et=0;Et<F;Et++){const I=Et*G-at;for(let st=0;st<ut;st++){const et=st*C-q;Mt[A]=et*N,Mt[M]=I*L,Mt[v]=dt,p.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[M]=0,Mt[v]=T>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),x.push(st/U),x.push(1-Et/W),j+=1}}for(let Et=0;Et<W;Et++)for(let I=0;I<U;I++){const st=_+I+ut*Et,et=_+I+ut*(Et+1),bt=_+(I+1)+ut*(Et+1),zt=_+(I+1)+ut*Et;m.push(st,et,zt),m.push(et,bt,zt),Z+=6}d.addGroup(S,Z,w),S+=Z,_+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function $n(s){const t={};for(let i=0;i<s.length;i++){const r=qs(s[i]);for(const l in r)t[l]=r[l]}return t}function oS(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function uv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}const lS={clone:qs,merge:$n};var cS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cS,this.fragmentShader=uS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=oS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class fv extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new pt,sg=new we,og=new we;class Di extends fv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=il*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return il*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,i){return this.getViewBounds(t,sg,og),i.subVectors(og,sg)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Os=-90,Ps=1;class fS extends Pn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(Os,Ps,t,i);l.layers=this.layers,this.add(l);const c=new Di(Os,Ps,t,i);c.layers=this.layers,this.add(c);const h=new Di(Os,Ps,t,i);h.layers=this.layers,this.add(h);const d=new Di(Os,Ps,t,i);d.layers=this.layers,this.add(d);const m=new Di(Os,Ps,t,i);m.layers=this.layers,this.add(m);const p=new Di(Os,Ps,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,x=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,_,S),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class hv extends kn{constructor(t=[],i=Vs,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hS extends kr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new hv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ol(5,5,5),c=new Gi({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:si,blending:wa});c.uniforms.tEquirect.value=i;const h=new gi(l,c),d=i.minFilter;return i.minFilter===Hr&&(i.minFilter=Ui),new fS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Oc extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dS={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,r),v=this._getHandJoint(p,A);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),S=.02,b=.005;p.inputState.pinching&&_>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(dS)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Oc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class pS extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class mS extends kn{constructor(t=null,i=1,r=1,l,c,h,d,m,p=vi,g=vi,x,_){super(null,h,d,m,p,g,l,c,x,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wh=new pt,xS=new pt,gS=new Te;class Ir{constructor(t=new pt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=wh.subVectors(r,i).cross(xS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(wh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||gS.getNormalMatrix(t),l=this.coplanarPoint(wh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new jc,vS=new we(.5,.5),Pc=new pt;class qd{constructor(t=new Ir,i=new Ir,r=new Ir,l=new Ir,c=new Ir,h=new Ir){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Qi,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],x=c[5],_=c[6],S=c[7],b=c[8],A=c[9],M=c[10],v=c[11],N=c[12],L=c[13],O=c[14],P=c[15];if(l[0].setComponents(p-h,S-g,v-b,P-N).normalize(),l[1].setComponents(p+h,S+g,v+b,P+N).normalize(),l[2].setComponents(p+d,S+x,v+A,P+L).normalize(),l[3].setComponents(p-d,S-x,v-A,P-L).normalize(),r)l[4].setComponents(m,_,M,O).normalize(),l[5].setComponents(p-m,S-_,v-M,P-O).normalize();else if(l[4].setComponents(p-m,S-_,v-M,P-O).normalize(),i===Qi)l[5].setComponents(p+m,S+_,v+M,P+O).normalize();else if(i===Wc)l[5].setComponents(m,_,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(t){Or.center.set(0,0,0);const i=vS.distanceTo(t.center);return Or.radius=.7071067811865476+i,Or.applyMatrix4(t.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _S extends Zs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lg=new dn,Rd=new Vd,zc=new jc,Ic=new pt;class cg extends Pn{constructor(t=new Li,i=new _S){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;lg.copy(l).invert(),Rd.copy(t.ray).applyMatrix4(lg);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,x=r.attributes.position;if(p!==null){const _=Math.max(0,h.start),S=Math.min(p.count,h.start+h.count);for(let b=_,A=S;b<A;b++){const M=p.getX(b);Ic.fromBufferAttribute(x,M),ug(Ic,M,m,l,t,i,this)}}else{const _=Math.max(0,h.start),S=Math.min(x.count,h.start+h.count);for(let b=_,A=S;b<A;b++)Ic.fromBufferAttribute(x,b),ug(Ic,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function ug(s,t,i,r,l,c,h){const d=Rd.distanceSqToPoint(s);if(d<i){const m=new pt;Rd.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class qo extends kn{constructor(t,i,r,l,c,h,d,m,p){super(t,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dv extends kn{constructor(t,i,r=Vr,l,c,h,d=vi,m=vi,p,g=$o,x=1){if(g!==$o&&g!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:x};super(_,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class pv extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gr extends Li{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,_=i/m,S=[],b=[],A=[],M=[];for(let v=0;v<g;v++){const N=v*_-h;for(let L=0;L<p;L++){const O=L*x-c;b.push(O,-N,0),A.push(0,0,1),M.push(L/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<d;N++){const L=N+p*v,O=N+p*(v+1),P=N+1+p*(v+1),T=N+1+p*v;S.push(L,O,T),S.push(O,P,T)}this.setIndex(S),this.setAttribute("position",new Zn(b,3)),this.setAttribute("normal",new Zn(A,3)),this.setAttribute("uv",new Zn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wd extends Li{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],x=new pt,_=new pt,S=[],b=[],A=[],M=[];for(let v=0;v<=r;v++){const N=[],L=v/r;let O=0;v===0&&h===0?O=.5/i:v===r&&m===Math.PI&&(O=-.5/i);for(let P=0;P<=i;P++){const T=P/i;x.x=-t*Math.cos(l+T*c)*Math.sin(h+L*d),x.y=t*Math.cos(h+L*d),x.z=t*Math.sin(l+T*c)*Math.sin(h+L*d),b.push(x.x,x.y,x.z),_.copy(x).normalize(),A.push(_.x,_.y,_.z),M.push(T+O,1-L),N.push(p++)}g.push(N)}for(let v=0;v<r;v++)for(let N=0;N<i;N++){const L=g[v][N+1],O=g[v][N],P=g[v+1][N],T=g[v+1][N+1];(v!==0||h>0)&&S.push(L,O,T),(v!==r-1||m<Math.PI)&&S.push(O,P,T)}this.setIndex(S),this.setAttribute("position",new Zn(b,3)),this.setAttribute("normal",new Zn(A,3)),this.setAttribute("uv",new Zn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yS extends Zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iv,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class SS extends Zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class MS extends Zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dh={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class bS{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=p.length;x<_;x+=2){const S=p[x],b=p[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ES=new bS;class Yd{constructor(t){this.manager=t!==void 0?t:ES,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Yd.DEFAULT_MATERIAL_NAME="__DEFAULT";const zs=new WeakMap;class TS extends Yd{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=Dh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let x=zs.get(h);x===void 0&&(x=[],zs.set(h,x)),x.push({onLoad:i,onError:l})}return h}const d=el("img");function m(){g(),i&&i(this);const x=zs.get(this)||[];for(let _=0;_<x.length;_++){const S=x[_];S.onLoad&&S.onLoad(this)}zs.delete(this),c.manager.itemEnd(t)}function p(x){g(),l&&l(x),Dh.remove(`image:${t}`);const _=zs.get(this)||[];for(let S=0;S<_.length;S++){const b=_[S];b.onError&&b.onError(x)}zs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Dh.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class AS extends Yd{constructor(t){super(t)}load(t,i,r,l){const c=new kn,h=new TS(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class mv extends Pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class RS extends mv{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Uh=new dn,fg=new pt,hg=new pt;class CS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;fg.setFromMatrixPosition(t.matrixWorld),i.position.copy(fg),hg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(hg),i.updateMatrixWorld(),Uh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xv extends fv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wS extends CS{constructor(){super(new xv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DS extends mv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new wS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class US extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const dg=new dn;class LS{constructor(t,i,r=0,l=1/0){this.ray=new Vd(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new kd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):vn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return dg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dg),this}intersectObject(t,i=!0,r=[]){return Cd(t,this,r,i),r.sort(pg),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Cd(t[l],this,r,i);return r.sort(pg),r}}function pg(s,t){return s.distance-t.distance}function Cd(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,d=c.length;h<d;h++)Cd(c[h],t,i,!0)}}function mg(s,t,i,r){const l=NS(r);switch(i){case tv:return s*t;case nv:return s*t/l.components*l.byteLength;case zd:return s*t/l.components*l.byteLength;case Id:return s*t*2/l.components*l.byteLength;case Bd:return s*t*2/l.components*l.byteLength;case ev:return s*t*3/l.components*l.byteLength;case Hi:return s*t*4/l.components*l.byteLength;case Fd:return s*t*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case td:case nd:return Math.max(s,16)*Math.max(t,8)/4;case $h:case ed:return Math.max(s,8)*Math.max(t,8)/2;case id:case ad:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case rd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case od:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ld:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case cd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ud:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case pd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case md:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case xd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case yd:case Sd:case Md:return Math.ceil(s/4)*Math.ceil(t/4)*16;case bd:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Td:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function NS(s){switch(s){case $i:case Kg:return{byteLength:1,components:1};case Qo:case Qg:case Ws:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Vr:case Nd:case Ca:return{byteLength:4,components:1};case Jg:case $g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gv(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function OS(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((S,b)=>S.start-b.start);let _=0;for(let S=1;S<x.length;S++){const b=x[_],A=x[S];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++_,x[_]=A)}x.length=_+1;for(let S=0,b=x.length;S<b;S++){const A=x[S];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var PS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
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
#endif`,IS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GS=`#ifdef USE_AOMAP
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
#endif`,VS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kS=`#ifdef USE_BATCHING
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
#endif`,XS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jS=`#ifdef USE_IRIDESCENCE
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
#endif`,ZS=`#ifdef USE_BUMPMAP
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
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,aM=`#define PI 3.141592653589793
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
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sM=`vec3 transformedNormal = objectNormal;
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
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",hM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MM=`#ifdef USE_GRADIENTMAP
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
}`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
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
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
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
#endif`,NM=`uniform sampler2D dfgLUT;
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
}`,OM=`
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
#endif`,PM=`#if defined( RE_IndirectDiffuse )
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XM=`#if defined( USE_POINTS_UV )
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
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
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
#endif`,QM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$M=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ib=`#ifdef USE_NORMALMAP
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
#endif`,ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_b=`float getShadowMask() {
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
}`,yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sb=`#ifdef USE_SKINNING
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
#endif`,Mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
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
#endif`,Eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cb=`#ifdef USE_TRANSMISSION
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
#endif`,wb=`#ifdef USE_TRANSMISSION
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
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`#include <common>
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
}`,Gb=`#if DEPTH_PACKING == 3200
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
}`,Vb=`#define DISTANCE
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
}`,kb=`#define DISTANCE
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`uniform float scale;
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
}`,Yb=`uniform vec3 diffuse;
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
}`,jb=`#include <common>
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Kb=`#define LAMBERT
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
}`,Qb=`#define LAMBERT
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
}`,Jb=`#define MATCAP
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
}`,$b=`#define MATCAP
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
}`,t3=`#define NORMAL
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
}`,e3=`#define NORMAL
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
}`,n3=`#define PHONG
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
}`,i3=`#define PHONG
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
}`,a3=`#define STANDARD
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
}`,r3=`#define STANDARD
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
}`,s3=`#define TOON
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
}`,o3=`#define TOON
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
}`,l3=`uniform float size;
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
}`,c3=`uniform vec3 diffuse;
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
}`,u3=`#include <common>
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
}`,f3=`uniform vec3 color;
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
}`,h3=`uniform float rotation;
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
}`,d3=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:PS,alphahash_pars_fragment:zS,alphamap_fragment:IS,alphamap_pars_fragment:BS,alphatest_fragment:FS,alphatest_pars_fragment:HS,aomap_fragment:GS,aomap_pars_fragment:VS,batching_pars_vertex:kS,batching_vertex:XS,begin_vertex:qS,beginnormal_vertex:WS,bsdfs:YS,iridescence_fragment:jS,bumpmap_pars_fragment:ZS,clipping_planes_fragment:KS,clipping_planes_pars_fragment:QS,clipping_planes_pars_vertex:JS,clipping_planes_vertex:$S,color_fragment:tM,color_pars_fragment:eM,color_pars_vertex:nM,color_vertex:iM,common:aM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:sM,displacementmap_pars_vertex:oM,displacementmap_vertex:lM,emissivemap_fragment:cM,emissivemap_pars_fragment:uM,colorspace_fragment:fM,colorspace_pars_fragment:hM,envmap_fragment:dM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:xM,envmap_physical_pars_fragment:RM,envmap_vertex:gM,fog_vertex:vM,fog_pars_vertex:_M,fog_fragment:yM,fog_pars_fragment:SM,gradientmap_pars_fragment:MM,lightmap_pars_fragment:bM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:TM,lights_pars_begin:AM,lights_toon_fragment:CM,lights_toon_pars_fragment:wM,lights_phong_fragment:DM,lights_phong_pars_fragment:UM,lights_physical_fragment:LM,lights_physical_pars_fragment:NM,lights_fragment_begin:OM,lights_fragment_maps:PM,lights_fragment_end:zM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:HM,map_fragment:GM,map_pars_fragment:VM,map_particle_fragment:kM,map_particle_pars_fragment:XM,metalnessmap_fragment:qM,metalnessmap_pars_fragment:WM,morphinstance_vertex:YM,morphcolor_vertex:jM,morphnormal_vertex:ZM,morphtarget_pars_vertex:KM,morphtarget_vertex:QM,normal_fragment_begin:JM,normal_fragment_maps:$M,normal_pars_fragment:tb,normal_pars_vertex:eb,normal_vertex:nb,normalmap_pars_fragment:ib,clearcoat_normal_fragment_begin:ab,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:sb,iridescence_pars_fragment:ob,opaque_fragment:lb,packing:cb,premultiplied_alpha_fragment:ub,project_vertex:fb,dithering_fragment:hb,dithering_pars_fragment:db,roughnessmap_fragment:pb,roughnessmap_pars_fragment:mb,shadowmap_pars_fragment:xb,shadowmap_pars_vertex:gb,shadowmap_vertex:vb,shadowmask_pars_fragment:_b,skinbase_vertex:yb,skinning_pars_vertex:Sb,skinning_vertex:Mb,skinnormal_vertex:bb,specularmap_fragment:Eb,specularmap_pars_fragment:Tb,tonemapping_fragment:Ab,tonemapping_pars_fragment:Rb,transmission_fragment:Cb,transmission_pars_fragment:wb,uv_pars_fragment:Db,uv_pars_vertex:Ub,uv_vertex:Lb,worldpos_vertex:Nb,background_vert:Ob,background_frag:Pb,backgroundCube_vert:zb,backgroundCube_frag:Ib,cube_vert:Bb,cube_frag:Fb,depth_vert:Hb,depth_frag:Gb,distanceRGBA_vert:Vb,distanceRGBA_frag:kb,equirect_vert:Xb,equirect_frag:qb,linedashed_vert:Wb,linedashed_frag:Yb,meshbasic_vert:jb,meshbasic_frag:Zb,meshlambert_vert:Kb,meshlambert_frag:Qb,meshmatcap_vert:Jb,meshmatcap_frag:$b,meshnormal_vert:t3,meshnormal_frag:e3,meshphong_vert:n3,meshphong_frag:i3,meshphysical_vert:a3,meshphysical_frag:r3,meshtoon_vert:s3,meshtoon_frag:o3,points_vert:l3,points_frag:c3,shadow_vert:u3,shadow_frag:f3,sprite_vert:h3,sprite_frag:d3},Wt={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},Zi={basic:{uniforms:$n([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:$n([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:$n([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:$n([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:$n([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:$n([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:$n([Wt.points,Wt.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:$n([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:$n([Wt.common,Wt.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:$n([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:$n([Wt.sprite,Wt.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:$n([Wt.common,Wt.displacementmap,{referencePosition:{value:new pt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:$n([Wt.lights,Wt.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Zi.physical={uniforms:$n([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Bc={r:0,b:0,g:0},Pr=new ta,p3=new dn;function m3(s,t,i,r,l,c,h){const d=new ke(0);let m=c===!0?0:1,p,g,x=null,_=0,S=null;function b(L){let O=L.isScene===!0?L.background:null;return O&&O.isTexture&&(O=(L.backgroundBlurriness>0?i:t).get(O)),O}function A(L){let O=!1;const P=b(L);P===null?v(d,m):P&&P.isColor&&(v(P,1),O=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?r.buffers.color.setClear(0,0,0,1,h):T==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,O){const P=b(O);P&&(P.isCubeTexture||P.mapping===Yc)?(g===void 0&&(g=new gi(new ol(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:qs(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(T,U,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Pr.copy(O.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(p3.makeRotationFromEuler(Pr)),g.material.toneMapped=We.getTransfer(P.colorSpace)!==en,(x!==P||_!==P.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=P,_=P.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new gi(new Gr(2,2),new Gi({name:"BackgroundMaterial",uniforms:qs(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=We.getTransfer(P.colorSpace)!==en,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||_!==P.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,x=P,_=P.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,O){L.getRGB(Bc,uv(s)),r.buffers.color.setClear(Bc.r,Bc.g,Bc.b,O,h)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,O=1){d.set(L),m=O,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:A,addToRenderList:M,dispose:N}}function x3(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,h=!1;function d(C,G,q,at,dt){let ut=!1;const F=x(at,q,G);c!==F&&(c=F,p(c.object)),ut=S(C,at,q,dt),ut&&b(C,at,q,dt),dt!==null&&t.update(dt,s.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,O(C,G,q,at),dt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,G,q){const at=q.wireframe===!0;let dt=r[C.id];dt===void 0&&(dt={},r[C.id]=dt);let ut=dt[G.id];ut===void 0&&(ut={},dt[G.id]=ut);let F=ut[at];return F===void 0&&(F=_(m()),ut[at]=F),F}function _(C){const G=[],q=[],at=[];for(let dt=0;dt<i;dt++)G[dt]=0,q[dt]=0,at[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:at,object:C,attributes:{},index:null}}function S(C,G,q,at){const dt=c.attributes,ut=G.attributes;let F=0;const j=q.getAttributes();for(const Z in j)if(j[Z].location>=0){const Et=dt[Z];let I=ut[Z];if(I===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),Et===void 0||Et.attribute!==I||I&&Et.data!==I.data)return!0;F++}return c.attributesNum!==F||c.index!==at}function b(C,G,q,at){const dt={},ut=G.attributes;let F=0;const j=q.getAttributes();for(const Z in j)if(j[Z].location>=0){let Et=ut[Z];Et===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor));const I={};I.attribute=Et,Et&&Et.data&&(I.data=Et.data),dt[Z]=I,F++}c.attributes=dt,c.attributesNum=F,c.index=at}function A(){const C=c.newAttributes;for(let G=0,q=C.length;G<q;G++)C[G]=0}function M(C){v(C,0)}function v(C,G){const q=c.newAttributes,at=c.enabledAttributes,dt=c.attributeDivisors;q[C]=1,at[C]===0&&(s.enableVertexAttribArray(C),at[C]=1),dt[C]!==G&&(s.vertexAttribDivisor(C,G),dt[C]=G)}function N(){const C=c.newAttributes,G=c.enabledAttributes;for(let q=0,at=G.length;q<at;q++)G[q]!==C[q]&&(s.disableVertexAttribArray(q),G[q]=0)}function L(C,G,q,at,dt,ut,F){F===!0?s.vertexAttribIPointer(C,G,q,dt,ut):s.vertexAttribPointer(C,G,q,at,dt,ut)}function O(C,G,q,at){A();const dt=at.attributes,ut=q.getAttributes(),F=G.defaultAttributeValues;for(const j in ut){const Z=ut[j];if(Z.location>=0){let Mt=dt[j];if(Mt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const Et=Mt.normalized,I=Mt.itemSize,st=t.get(Mt);if(st===void 0)continue;const et=st.buffer,bt=st.type,zt=st.bytesPerElement,J=bt===s.INT||bt===s.UNSIGNED_INT||Mt.gpuType===Nd;if(Mt.isInterleavedBufferAttribute){const ht=Mt.data,Pt=ht.stride,Nt=Mt.offset;if(ht.isInstancedInterleavedBuffer){for(let qt=0;qt<Z.locationSize;qt++)v(Z.location+qt,ht.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let qt=0;qt<Z.locationSize;qt++)M(Z.location+qt);s.bindBuffer(s.ARRAY_BUFFER,et);for(let qt=0;qt<Z.locationSize;qt++)L(Z.location+qt,I/Z.locationSize,bt,Et,Pt*zt,(Nt+I/Z.locationSize*qt)*zt,J)}else{if(Mt.isInstancedBufferAttribute){for(let ht=0;ht<Z.locationSize;ht++)v(Z.location+ht,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ht=0;ht<Z.locationSize;ht++)M(Z.location+ht);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ht=0;ht<Z.locationSize;ht++)L(Z.location+ht,I/Z.locationSize,bt,Et,I*zt,I/Z.locationSize*ht*zt,J)}}else if(F!==void 0){const Et=F[j];if(Et!==void 0)switch(Et.length){case 2:s.vertexAttrib2fv(Z.location,Et);break;case 3:s.vertexAttrib3fv(Z.location,Et);break;case 4:s.vertexAttrib4fv(Z.location,Et);break;default:s.vertexAttrib1fv(Z.location,Et)}}}}N()}function P(){W();for(const C in r){const G=r[C];for(const q in G){const at=G[q];for(const dt in at)g(at[dt].object),delete at[dt];delete G[q]}delete r[C]}}function T(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const q in G){const at=G[q];for(const dt in at)g(at[dt].object),delete at[dt];delete G[q]}delete r[C.id]}function U(C){for(const G in r){const q=r[G];if(q[C.id]===void 0)continue;const at=q[C.id];for(const dt in at)g(at[dt].object),delete at[dt];delete q[C.id]}}function W(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:M,disableUnusedAttributes:N}}function g3(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let S=0;for(let b=0;b<x;b++)S+=g[b];i.update(S,r,1)}function m(p,g,x,_){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)h(p[b],g[b],_[b]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,x);let b=0;for(let A=0;A<x;A++)b+=g[A]*_[A];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function v3(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(U){return!(U!==Hi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const W=U===Ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==$i&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ca&&!W)}function m(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(Me("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=b>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:O,vertexTextures:P,maxSamples:T}}function _3(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Ir,d=new Te,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const S=x.length!==0||_||r!==0||l;return l=_,r=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,S){const b=x.clippingPlanes,A=x.clipIntersection,M=x.clipShadows,v=s.get(x);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const N=c?0:r,L=N*4;let O=v.clippingState||null;m.value=O,O=g(b,_,L,S);for(let P=0;P!==L;++P)O[P]=i[P];v.clippingState=O,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,_,S,b){const A=x!==null?x.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const v=S+A*4,N=_.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,O=S;L!==A;++L,O+=4)h.copy(x[L]).applyMatrix4(N,d),h.normal.toArray(M,O),M[O+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function y3(s){let t=new WeakMap;function i(h,d){return d===Zh?h.mapping=Vs:d===Kh&&(h.mapping=ks),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zh||d===Kh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new hS(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const lr=4,xg=[.125,.215,.35,.446,.526,.582],Fr=20,S3=256,Wo=new xv,gg=new ke;let Lh=null,Nh=0,Oh=0,Ph=!1;const M3=new pt;class vg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=M3}=c;Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lh,Nh,Oh),this._renderer.xr.enabled=Ph,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Vs||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Ws,format:Hi,colorSpace:Xs,depthBuffer:!1},l=_g(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b3(c)),this._blurMaterial=T3(c,t,i)}return l}_compileMaterial(t){const i=new gi(new Li,t);this._renderer.compile(i,Wo)}_sceneToCubeUV(t,i,r,l,c){const m=new Di(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,S=x.toneMapping;x.getClearColor(gg),x.toneMapping=cr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gi(new ol,new Xd({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let v=!1;const N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,v=!0):(M.color.copy(gg),v=!0);for(let L=0;L<6;L++){const O=L%3;O===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):O===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const P=this._cubeSize;Is(l,O*P,L>2?P:0,P,P),x.setRenderTarget(l),v&&x.render(A,m),x.render(t,m)}x.toneMapping=S,x.autoClear=_,t.background=N}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Vs||t.mapping===ks;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yg());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Is(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Wo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const N=3*Math.max(this._cubeSize,16),L=4*this._cubeSize;this._ggxMaterial=E3(this._lodMax,N,L)}const h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),_=.05+p*.95,S=x*_,{_lodMax:b}=this,A=this._sizeLods[r],M=3*A*(r>b-lr?r-b+lr:0),v=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=b-i,Is(c,M,v,3*A,2*A),l.setRenderTarget(c),l.render(d,Wo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Is(t,M,v,3*A,2*A),l.setRenderTarget(t),l.render(d,Wo)}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&vn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const _=p.uniforms,S=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Fr-1),A=c/b,M=isFinite(c)?1+Math.floor(g*A):Fr;M>Fr&&Me(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Fr}`);const v=[];let N=0;for(let U=0;U<Fr;++U){const W=U/A,w=Math.exp(-W*W/2);v.push(w),U===0?N+=w:U<M&&(N+=2*w)}for(let U=0;U<v.length;U++)v[U]=v[U]/N;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:L}=this;_.dTheta.value=b,_.mipInt.value=L-r;const O=this._sizeLods[l],P=3*O*(l>L-lr?l-L+lr:0),T=4*(this._cubeSize-O);Is(i,P,T,3*O,2*O),m.setRenderTarget(i),m.render(x,Wo)}}function b3(s){const t=[],i=[],r=[];let l=s;const c=s-lr+1+xg.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>s-lr?m=xg[h-s+lr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,b=6,A=3,M=2,v=1,N=new Float32Array(A*b*S),L=new Float32Array(M*b*S),O=new Float32Array(v*b*S);for(let T=0;T<S;T++){const U=T%3*2/3-1,W=T>2?0:-1,w=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];N.set(w,A*b*T),L.set(_,M*b*T);const C=[T,T,T,T,T,T];O.set(C,v*b*T)}const P=new Li;P.setAttribute("position",new Ji(N,A)),P.setAttribute("uv",new Ji(L,M)),P.setAttribute("faceIndex",new Ji(O,v)),r.push(new gi(P,null)),l>lr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function _g(s,t,i){const r=new kr(s,t,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Is(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function E3(s,t,i){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:S3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function T3(s,t,i){const r=new Float32Array(Fr),l=new pt(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function yg(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Sg(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function A3(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Zh||m===Kh,g=m===Vs||m===ks;if(p||g){let x=t.get(d);const _=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new vg(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new vg(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function R3(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&nl("WebGLRenderer: "+r+" extension not supported."),l}}}function C3(s,t,i,r){const l={},c=new WeakMap;function h(x){const _=x.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",h),delete l[_.id];const S=c.get(_);S&&(t.remove(S),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(x,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const S in _)t.update(_[S],s.ARRAY_BUFFER)}function p(x){const _=[],S=x.index,b=x.attributes.position;let A=0;if(S!==null){const N=S.array;A=S.version;for(let L=0,O=N.length;L<O;L+=3){const P=N[L+0],T=N[L+1],U=N[L+2];_.push(P,T,T,U,U,P)}}else if(b!==void 0){const N=b.array;A=b.version;for(let L=0,O=N.length/3-1;L<O;L+=3){const P=L+0,T=L+1,U=L+2;_.push(P,T,T,U,U,P)}}else return;const M=new(rv(_)?cv:lv)(_,1);M.version=A;const v=c.get(x);v&&t.remove(v),c.set(x,M)}function g(x){const _=c.get(x);if(_){const S=x.index;S!==null&&_.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function w3(s,t,i){let r;function l(_){r=_}let c,h;function d(_){c=_.type,h=_.bytesPerElement}function m(_,S){s.drawElements(r,S,c,_*h),i.update(S,r,1)}function p(_,S,b){b!==0&&(s.drawElementsInstanced(r,S,c,_*h,b),i.update(S,r,b))}function g(_,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,_,0,b);let M=0;for(let v=0;v<b;v++)M+=S[v];i.update(M,r,1)}function x(_,S,b,A){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<_.length;v++)p(_[v]/h,S[v],A[v]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,_,0,A,0,b);let v=0;for(let N=0;N<b;N++)v+=S[N]*A[N];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function D3(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:vn("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function U3(s,t,i){const r=new WeakMap,l=new hn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==x){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let O=0;b===!0&&(O=1),A===!0&&(O=2),M===!0&&(O=3);let P=d.attributes.position.count*O,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const U=new Float32Array(P*T*4*x),W=new sv(U,P,T,x);W.type=Ca,W.needsUpdate=!0;const w=O*4;for(let G=0;G<x;G++){const q=v[G],at=N[G],dt=L[G],ut=P*T*4*G;for(let F=0;F<q.count;F++){const j=F*w;b===!0&&(l.fromBufferAttribute(q,F),U[ut+j+0]=l.x,U[ut+j+1]=l.y,U[ut+j+2]=l.z,U[ut+j+3]=0),A===!0&&(l.fromBufferAttribute(at,F),U[ut+j+4]=l.x,U[ut+j+5]=l.y,U[ut+j+6]=l.z,U[ut+j+7]=0),M===!0&&(l.fromBufferAttribute(dt,F),U[ut+j+8]=l.x,U[ut+j+9]=l.y,U[ut+j+10]=l.z,U[ut+j+11]=dt.itemSize===4?l.w:1)}}_={count:x,texture:W,size:new we(P,T)},r.set(d,_),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function L3(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const vv=new kn,Mg=new dv(1,1),_v=new sv,yv=new Z1,Sv=new hv,bg=[],Eg=[],Tg=new Float32Array(16),Ag=new Float32Array(9),Rg=new Float32Array(4);function Ks(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=bg[l];if(c===void 0&&(c=new Float32Array(l),bg[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function wn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Dn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Kc(s,t){let i=Eg[t];i===void 0&&(i=new Int32Array(t),Eg[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function N3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function O3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;s.uniform2fv(this.addr,t),Dn(i,t)}}function P3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(wn(i,t))return;s.uniform3fv(this.addr,t),Dn(i,t)}}function z3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;s.uniform4fv(this.addr,t),Dn(i,t)}}function I3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(wn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Dn(i,t)}else{if(wn(i,r))return;Rg.set(r),s.uniformMatrix2fv(this.addr,!1,Rg),Dn(i,r)}}function B3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(wn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Dn(i,t)}else{if(wn(i,r))return;Ag.set(r),s.uniformMatrix3fv(this.addr,!1,Ag),Dn(i,r)}}function F3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(wn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Dn(i,t)}else{if(wn(i,r))return;Tg.set(r),s.uniformMatrix4fv(this.addr,!1,Tg),Dn(i,r)}}function H3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function G3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;s.uniform2iv(this.addr,t),Dn(i,t)}}function V3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wn(i,t))return;s.uniform3iv(this.addr,t),Dn(i,t)}}function k3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;s.uniform4iv(this.addr,t),Dn(i,t)}}function X3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function q3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;s.uniform2uiv(this.addr,t),Dn(i,t)}}function W3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wn(i,t))return;s.uniform3uiv(this.addr,t),Dn(i,t)}}function Y3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;s.uniform4uiv(this.addr,t),Dn(i,t)}}function j3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Mg.compareFunction=av,c=Mg):c=vv,i.setTexture2D(t||c,l)}function Z3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||yv,l)}function K3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Sv,l)}function Q3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||_v,l)}function J3(s){switch(s){case 5126:return N3;case 35664:return O3;case 35665:return P3;case 35666:return z3;case 35674:return I3;case 35675:return B3;case 35676:return F3;case 5124:case 35670:return H3;case 35667:case 35671:return G3;case 35668:case 35672:return V3;case 35669:case 35673:return k3;case 5125:return X3;case 36294:return q3;case 36295:return W3;case 36296:return Y3;case 35678:case 36198:case 36298:case 36306:case 35682:return j3;case 35679:case 36299:case 36307:return Z3;case 35680:case 36300:case 36308:case 36293:return K3;case 36289:case 36303:case 36311:case 36292:return Q3}}function $3(s,t){s.uniform1fv(this.addr,t)}function tE(s,t){const i=Ks(t,this.size,2);s.uniform2fv(this.addr,i)}function eE(s,t){const i=Ks(t,this.size,3);s.uniform3fv(this.addr,i)}function nE(s,t){const i=Ks(t,this.size,4);s.uniform4fv(this.addr,i)}function iE(s,t){const i=Ks(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function aE(s,t){const i=Ks(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function rE(s,t){const i=Ks(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function sE(s,t){s.uniform1iv(this.addr,t)}function oE(s,t){s.uniform2iv(this.addr,t)}function lE(s,t){s.uniform3iv(this.addr,t)}function cE(s,t){s.uniform4iv(this.addr,t)}function uE(s,t){s.uniform1uiv(this.addr,t)}function fE(s,t){s.uniform2uiv(this.addr,t)}function hE(s,t){s.uniform3uiv(this.addr,t)}function dE(s,t){s.uniform4uiv(this.addr,t)}function pE(s,t,i){const r=this.cache,l=t.length,c=Kc(i,l);wn(r,c)||(s.uniform1iv(this.addr,c),Dn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||vv,c[h])}function mE(s,t,i){const r=this.cache,l=t.length,c=Kc(i,l);wn(r,c)||(s.uniform1iv(this.addr,c),Dn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||yv,c[h])}function xE(s,t,i){const r=this.cache,l=t.length,c=Kc(i,l);wn(r,c)||(s.uniform1iv(this.addr,c),Dn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Sv,c[h])}function gE(s,t,i){const r=this.cache,l=t.length,c=Kc(i,l);wn(r,c)||(s.uniform1iv(this.addr,c),Dn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||_v,c[h])}function vE(s){switch(s){case 5126:return $3;case 35664:return tE;case 35665:return eE;case 35666:return nE;case 35674:return iE;case 35675:return aE;case 35676:return rE;case 5124:case 35670:return sE;case 35667:case 35671:return oE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return uE;case 36294:return fE;case 36295:return hE;case 36296:return dE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return gE}}class _E{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=J3(i.type)}}class yE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=vE(i.type)}}class SE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function Cg(s,t){s.seq.push(t),s.map[t.id]=t}function ME(s,t,i){const r=s.name,l=r.length;for(zh.lastIndex=0;;){const c=zh.exec(r),h=zh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Cg(i,p===void 0?new _E(d,s,t):new yE(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new SE(d),Cg(i,x)),i=x}}}class Xc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);ME(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function wg(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const bE=37297;let EE=0;function TE(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Dg=new Te;function AE(s){We._getMatrix(Dg,We.workingColorSpace,s);const t=`mat3( ${Dg.elements.map(i=>i.toFixed(4))} )`;switch(We.getTransfer(s)){case qc:return[t,"LinearTransferOETF"];case en:return[t,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ug(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+TE(s.getShaderSource(t),d)}else return c}function RE(s,t){const i=AE(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function CE(s,t){let i;switch(t){case l1:i="Linear";break;case c1:i="Reinhard";break;case u1:i="Cineon";break;case f1:i="ACESFilmic";break;case d1:i="AgX";break;case p1:i="Neutral";break;case h1:i="Custom";break;default:Me("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new pt;function wE(){We.getLuminanceCoefficients(Fc);const s=Fc.x.toFixed(4),t=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function UE(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function LE(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Yo(s){return s!==""}function Lg(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ng(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const NE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(NE,PE)}const OE=new Map;function PE(s,t){let i=Ce[t];if(i===void 0){const r=OE.get(t);if(r!==void 0)i=Ce[r],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return wd(i)}const zE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(s){return s.replace(zE,IE)}function IE(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Pg(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function BE(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yg?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gy?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Aa&&(t="SHADOWMAP_TYPE_VSM"),t}function FE(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case ks:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function HE(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ks:t="ENVMAP_MODE_REFRACTION";break}return t}function GE(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case jg:t="ENVMAP_BLENDING_MULTIPLY";break;case s1:t="ENVMAP_BLENDING_MIX";break;case o1:t="ENVMAP_BLENDING_ADD";break}return t}function VE(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function kE(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=BE(i),p=FE(i),g=HE(i),x=GE(i),_=VE(i),S=DE(i),b=UE(c),A=l.createProgram();let M,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Yo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Yo).join(`
`),v.length>0&&(v+=`
`)):(M=[Pg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),v=[Pg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==cr?"#define TONE_MAPPING":"",i.toneMapping!==cr?Ce.tonemapping_pars_fragment:"",i.toneMapping!==cr?CE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,RE("linearToOutputTexel",i.outputColorSpace),wE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),h=wd(h),h=Lg(h,i),h=Ng(h,i),d=wd(d),d=Lg(d,i),d=Ng(d,i),h=Og(h),d=Og(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===Vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=N+M+h,O=N+v+d,P=wg(l,l.VERTEX_SHADER,L),T=wg(l,l.FRAGMENT_SHADER,O);l.attachShader(A,P),l.attachShader(A,T),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function U(G){if(s.debug.checkShaderErrors){const q=l.getProgramInfoLog(A)||"",at=l.getShaderInfoLog(P)||"",dt=l.getShaderInfoLog(T)||"",ut=q.trim(),F=at.trim(),j=dt.trim();let Z=!0,Mt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,P,T);else{const Et=Ug(l,P,"vertex"),I=Ug(l,T,"fragment");vn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ut+`
`+Et+`
`+I)}else ut!==""?Me("WebGLProgram: Program Info Log:",ut):(F===""||j==="")&&(Mt=!1);Mt&&(G.diagnostics={runnable:Z,programLog:ut,vertexShader:{log:F,prefix:M},fragmentShader:{log:j,prefix:v}})}l.deleteShader(P),l.deleteShader(T),W=new Xc(l,A),w=LE(l,A)}let W;this.getUniforms=function(){return W===void 0&&U(this),W};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,bE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=EE++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=T,this}let XE=0;class qE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new WE(t),i.set(t,r)),r}}class WE{constructor(t){this.id=XE++,this.code=t,this.usedTimes=0}}function YE(s,t,i,r,l,c,h){const d=new kd,m=new qE,p=new Set,g=[],x=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,G,q,at){const dt=q.fog,ut=at.geometry,F=w.isMeshStandardMaterial?q.environment:null,j=(w.isMeshStandardMaterial?i:t).get(w.envMap||F),Z=j&&j.mapping===Yc?j.image.height:null,Mt=b[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&Me("WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const Et=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,I=Et!==void 0?Et.length:0;let st=0;ut.morphAttributes.position!==void 0&&(st=1),ut.morphAttributes.normal!==void 0&&(st=2),ut.morphAttributes.color!==void 0&&(st=3);let et,bt,zt,J;if(Mt){const Ie=Zi[Mt];et=Ie.vertexShader,bt=Ie.fragmentShader}else et=w.vertexShader,bt=w.fragmentShader,m.update(w),zt=m.getVertexShaderID(w),J=m.getFragmentShaderID(w);const ht=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Nt=at.isInstancedMesh===!0,qt=at.isBatchedMesh===!0,de=!!w.map,He=!!w.matcap,_e=!!j,ze=!!w.aoMap,V=!!w.lightMap,gt=!!w.bumpMap,ye=!!w.normalMap,xe=!!w.displacementMap,Jt=!!w.emissiveMap,Ae=!!w.metalnessMap,Kt=!!w.roughnessMap,pe=w.anisotropy>0,z=w.clearcoat>0,E=w.dispersion>0,Y=w.iridescence>0,_t=w.sheen>0,wt=w.transmission>0,mt=pe&&!!w.anisotropyMap,ee=z&&!!w.clearcoatMap,kt=z&&!!w.clearcoatNormalMap,ne=z&&!!w.clearcoatRoughnessMap,$t=Y&&!!w.iridescenceMap,Dt=Y&&!!w.iridescenceThicknessMap,Lt=_t&&!!w.sheenColorMap,ie=_t&&!!w.sheenRoughnessMap,Qt=!!w.specularMap,Yt=!!w.specularColorMap,le=!!w.specularIntensityMap,k=wt&&!!w.transmissionMap,Vt=wt&&!!w.thicknessMap,Ft=!!w.gradientMap,It=!!w.alphaMap,Ot=w.alphaTest>0,Rt=!!w.alphaHash,Zt=!!w.extensions;let ge=cr;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ge=s.toneMapping);const De={shaderID:Mt,shaderType:w.type,shaderName:w.name,vertexShader:et,fragmentShader:bt,defines:w.defines,customVertexShaderID:zt,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:qt,batchingColor:qt&&at._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&at.instanceColor!==null,instancingMorph:Nt&&at.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Xs,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:He,envMap:_e,envMapMode:_e&&j.mapping,envMapCubeUVHeight:Z,aoMap:ze,lightMap:V,bumpMap:gt,normalMap:ye,displacementMap:_&&xe,emissiveMap:Jt,normalMapObjectSpace:ye&&w.normalMapType===v1,normalMapTangentSpace:ye&&w.normalMapType===iv,metalnessMap:Ae,roughnessMap:Kt,anisotropy:pe,anisotropyMap:mt,clearcoat:z,clearcoatMap:ee,clearcoatNormalMap:kt,clearcoatRoughnessMap:ne,dispersion:E,iridescence:Y,iridescenceMap:$t,iridescenceThicknessMap:Dt,sheen:_t,sheenColorMap:Lt,sheenRoughnessMap:ie,specularMap:Qt,specularColorMap:Yt,specularIntensityMap:le,transmission:wt,transmissionMap:k,thicknessMap:Vt,gradientMap:Ft,opaque:w.transparent===!1&&w.blending===Fs&&w.alphaToCoverage===!1,alphaMap:It,alphaTest:Ot,alphaHash:Rt,combine:w.combine,mapUv:de&&A(w.map.channel),aoMapUv:ze&&A(w.aoMap.channel),lightMapUv:V&&A(w.lightMap.channel),bumpMapUv:gt&&A(w.bumpMap.channel),normalMapUv:ye&&A(w.normalMap.channel),displacementMapUv:xe&&A(w.displacementMap.channel),emissiveMapUv:Jt&&A(w.emissiveMap.channel),metalnessMapUv:Ae&&A(w.metalnessMap.channel),roughnessMapUv:Kt&&A(w.roughnessMap.channel),anisotropyMapUv:mt&&A(w.anisotropyMap.channel),clearcoatMapUv:ee&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:kt&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:ie&&A(w.sheenRoughnessMap.channel),specularMapUv:Qt&&A(w.specularMap.channel),specularColorMapUv:Yt&&A(w.specularColorMap.channel),specularIntensityMapUv:le&&A(w.specularIntensityMap.channel),transmissionMapUv:k&&A(w.transmissionMap.channel),thicknessMapUv:Vt&&A(w.thicknessMap.channel),alphaMapUv:It&&A(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ye||pe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ut.attributes.uv&&(de||It),fog:!!dt,useFog:w.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Pt,skinning:at.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:st,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&We.getTransfer(w.map.colorSpace)===en,decodeVideoTextureEmissive:Jt&&w.emissiveMap.isVideoTexture===!0&&We.getTransfer(w.emissiveMap.colorSpace)===en,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ki,flipSided:w.side===si,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(N(C,w),L(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function O(w){const C=b[w.type];let G;if(C){const q=Zi[C];G=lS.clone(q.uniforms)}else G=w.uniforms;return G}function P(w,C){let G;for(let q=0,at=g.length;q<at;q++){const dt=g[q];if(dt.cacheKey===C){G=dt,++G.usedTimes;break}}return G===void 0&&(G=new kE(s,C,w,c),g.push(G)),G}function T(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function U(w){m.remove(w)}function W(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:O,acquireProgram:P,releaseProgram:T,releaseShaderCache:U,programs:g,dispose:W}}function jE(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function ZE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ig(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(x,_,S,b,A,M){let v=s[t];return v===void 0?(v={id:x.id,object:x,geometry:_,material:S,groupOrder:b,renderOrder:x.renderOrder,z:A,group:M},s[t]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=S,v.groupOrder=b,v.renderOrder=x.renderOrder,v.z=A,v.group=M),t++,v}function d(x,_,S,b,A,M){const v=h(x,_,S,b,A,M);S.transmission>0?r.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(x,_,S,b,A,M){const v=h(x,_,S,b,A,M);S.transmission>0?r.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,_){i.length>1&&i.sort(x||ZE),r.length>1&&r.sort(_||zg),l.length>1&&l.sort(_||zg)}function g(){for(let x=t,_=s.length;x<_;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function KE(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new Ig,s.set(r,[h])):l>=c.length?(h=new Ig,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function QE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new pt,color:new ke};break;case"SpotLight":i={position:new pt,direction:new pt,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pt,color:new ke,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pt,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":i={color:new ke,position:new pt,halfWidth:new pt,halfHeight:new pt};break}return s[t.id]=i,i}}}function JE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let $E=0;function t2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function e2(s){const t=new QE,i=JE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new pt);const l=new pt,c=new dn,h=new dn;function d(p){let g=0,x=0,_=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let S=0,b=0,A=0,M=0,v=0,N=0,L=0,O=0,P=0,T=0,U=0;p.sort(t2);for(let w=0,C=p.length;w<C;w++){const G=p[w],q=G.color,at=G.intensity,dt=G.distance,ut=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=q.r*at,x+=q.g*at,_+=q.b*at;else if(G.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],at);U++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const j=G.shadow,Z=i.get(G);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,r.directionalShadow[S]=Z,r.directionalShadowMap[S]=ut,r.directionalShadowMatrix[S]=G.shadow.matrix,N++}r.directional[S]=F,S++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(q).multiplyScalar(at),F.distance=dt,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,r.spot[A]=F;const j=G.shadow;if(G.map&&(r.spotLightMap[P]=G.map,P++,j.updateMatrices(G),G.castShadow&&T++),r.spotLightMatrix[A]=j.matrix,G.castShadow){const Z=i.get(G);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,r.spotShadow[A]=Z,r.spotShadowMap[A]=ut,O++}A++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(q).multiplyScalar(at),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=F,M++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const j=G.shadow,Z=i.get(G);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,r.pointShadow[b]=Z,r.pointShadowMap[b]=ut,r.pointShadowMatrix[b]=G.shadow.matrix,L++}r.point[b]=F,b++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(at),F.groundColor.copy(G.groundColor).multiplyScalar(at),r.hemi[v]=F,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Wt.LTC_FLOAT_1,r.rectAreaLTC2=Wt.LTC_FLOAT_2):(r.rectAreaLTC1=Wt.LTC_HALF_1,r.rectAreaLTC2=Wt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==S||W.pointLength!==b||W.spotLength!==A||W.rectAreaLength!==M||W.hemiLength!==v||W.numDirectionalShadows!==N||W.numPointShadows!==L||W.numSpotShadows!==O||W.numSpotMaps!==P||W.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=M,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=O+P-T,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=U,W.directionalLength=S,W.pointLength=b,W.spotLength=A,W.rectAreaLength=M,W.hemiLength=v,W.numDirectionalShadows=N,W.numPointShadows=L,W.numSpotShadows=O,W.numSpotMaps=P,W.numLightProbes=U,r.version=$E++)}function m(p,g){let x=0,_=0,S=0,b=0,A=0;const M=g.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const L=p[v];if(L.isDirectionalLight){const O=r.directional[x];O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),x++}else if(L.isSpotLight){const O=r.spot[S];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const O=r.rectArea[b];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const O=r.point[_];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const O=r.hemi[A];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:r}}function Bg(s){const t=new e2(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function n2(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Bg(s),t.set(l,[d])):c>=h.length?(d=new Bg(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const i2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a2=`uniform sampler2D shadow_pass;
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
}`;function r2(s,t,i){let r=new qd;const l=new we,c=new we,h=new hn,d=new SS({depthPacking:g1}),m=new MS,p={},g=i.maxTextureSize,x={[ur]:si,[si]:ur,[Ki]:Ki},_=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:i2,fragmentShader:a2}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const b=new Li;b.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new gi(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yg;let v=this.type;this.render=function(T,U,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),q=s.state;q.setBlending(wa),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const at=v!==Aa&&this.type===Aa,dt=v===Aa&&this.type!==Aa;for(let ut=0,F=T.length;ut<F;ut++){const j=T[ut],Z=j.shadow;if(Z===void 0){Me("WebGLShadowMap:",j,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Mt=Z.getFrameExtents();if(l.multiply(Mt),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Mt.x),l.x=c.x*Mt.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Mt.y),l.y=c.y*Mt.y,Z.mapSize.y=c.y)),Z.map===null||at===!0||dt===!0){const I=this.type!==Aa?{minFilter:vi,magFilter:vi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new kr(l.x,l.y,I),Z.map.texture.name=j.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const Et=Z.getViewportCount();for(let I=0;I<Et;I++){const st=Z.getViewport(I);h.set(c.x*st.x,c.y*st.y,c.x*st.z,c.y*st.w),q.viewport(h),Z.updateMatrices(j,I),r=Z.getFrustum(),O(U,W,Z.camera,j,this.type)}Z.isPointLightShadow!==!0&&this.type===Aa&&N(Z,W),Z.needsUpdate=!1}v=this.type,M.needsUpdate=!1,s.setRenderTarget(w,C,G)};function N(T,U){const W=t.update(A);_.defines.VSM_SAMPLES!==T.blurSamples&&(_.defines.VSM_SAMPLES=T.blurSamples,S.defines.VSM_SAMPLES=T.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new kr(l.x,l.y)),_.uniforms.shadow_pass.value=T.map.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(U,null,W,_,A,null),S.uniforms.shadow_pass.value=T.mapPass.texture,S.uniforms.resolution.value=T.mapSize,S.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(U,null,W,S,A,null)}function L(T,U,W,w){let C=null;const G=W.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)C=G;else if(C=W.isPointLight===!0?m:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const q=C.uuid,at=U.uuid;let dt=p[q];dt===void 0&&(dt={},p[q]=dt);let ut=dt[at];ut===void 0&&(ut=C.clone(),dt[at]=ut,U.addEventListener("dispose",P)),C=ut}if(C.visible=U.visible,C.wireframe=U.wireframe,w===Aa?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:x[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const q=s.properties.get(C);q.light=W}return C}function O(T,U,W,w,C){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Aa)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld);const at=t.update(T),dt=T.material;if(Array.isArray(dt)){const ut=at.groups;for(let F=0,j=ut.length;F<j;F++){const Z=ut[F],Mt=dt[Z.materialIndex];if(Mt&&Mt.visible){const Et=L(T,Mt,w,C);T.onBeforeShadow(s,T,U,W,at,Et,Z),s.renderBufferDirect(W,null,at,Et,T,Z),T.onAfterShadow(s,T,U,W,at,Et,Z)}}}else if(dt.visible){const ut=L(T,dt,w,C);T.onBeforeShadow(s,T,U,W,at,ut,null),s.renderBufferDirect(W,null,at,ut,T,null),T.onAfterShadow(s,T,U,W,at,ut,null)}}const q=T.children;for(let at=0,dt=q.length;at<dt;at++)O(q[at],U,W,w,C)}function P(T){T.target.removeEventListener("dispose",P);for(const W in p){const w=p[W],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const s2={[Vh]:kh,[Xh]:Yh,[qh]:jh,[Gs]:Wh,[kh]:Vh,[Yh]:Xh,[jh]:qh,[Wh]:Gs};function o2(s,t){function i(){let k=!1;const Vt=new hn;let Ft=null;const It=new hn(0,0,0,0);return{setMask:function(Ot){Ft!==Ot&&!k&&(s.colorMask(Ot,Ot,Ot,Ot),Ft=Ot)},setLocked:function(Ot){k=Ot},setClear:function(Ot,Rt,Zt,ge,De){De===!0&&(Ot*=ge,Rt*=ge,Zt*=ge),Vt.set(Ot,Rt,Zt,ge),It.equals(Vt)===!1&&(s.clearColor(Ot,Rt,Zt,ge),It.copy(Vt))},reset:function(){k=!1,Ft=null,It.set(-1,0,0,0)}}}function r(){let k=!1,Vt=!1,Ft=null,It=null,Ot=null;return{setReversed:function(Rt){if(Vt!==Rt){const Zt=t.get("EXT_clip_control");Rt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Vt=Rt;const ge=Ot;Ot=null,this.setClear(ge)}},getReversed:function(){return Vt},setTest:function(Rt){Rt?ht(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(Rt){Ft!==Rt&&!k&&(s.depthMask(Rt),Ft=Rt)},setFunc:function(Rt){if(Vt&&(Rt=s2[Rt]),It!==Rt){switch(Rt){case Vh:s.depthFunc(s.NEVER);break;case kh:s.depthFunc(s.ALWAYS);break;case Xh:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case qh:s.depthFunc(s.EQUAL);break;case Wh:s.depthFunc(s.GEQUAL);break;case Yh:s.depthFunc(s.GREATER);break;case jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=Rt}},setLocked:function(Rt){k=Rt},setClear:function(Rt){Ot!==Rt&&(Vt&&(Rt=1-Rt),s.clearDepth(Rt),Ot=Rt)},reset:function(){k=!1,Ft=null,It=null,Ot=null,Vt=!1}}}function l(){let k=!1,Vt=null,Ft=null,It=null,Ot=null,Rt=null,Zt=null,ge=null,De=null;return{setTest:function(Ie){k||(Ie?ht(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(Ie){Vt!==Ie&&!k&&(s.stencilMask(Ie),Vt=Ie)},setFunc:function(Ie,Rn,_n){(Ft!==Ie||It!==Rn||Ot!==_n)&&(s.stencilFunc(Ie,Rn,_n),Ft=Ie,It=Rn,Ot=_n)},setOp:function(Ie,Rn,_n){(Rt!==Ie||Zt!==Rn||ge!==_n)&&(s.stencilOp(Ie,Rn,_n),Rt=Ie,Zt=Rn,ge=_n)},setLocked:function(Ie){k=Ie},setClear:function(Ie){De!==Ie&&(s.clearStencil(Ie),De=Ie)},reset:function(){k=!1,Vt=null,Ft=null,It=null,Ot=null,Rt=null,Zt=null,ge=null,De=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,S=[],b=null,A=!1,M=null,v=null,N=null,L=null,O=null,P=null,T=null,U=new ke(0,0,0),W=0,w=!1,C=null,G=null,q=null,at=null,dt=null;const ut=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=j>=2);let Mt=null,Et={};const I=s.getParameter(s.SCISSOR_BOX),st=s.getParameter(s.VIEWPORT),et=new hn().fromArray(I),bt=new hn().fromArray(st);function zt(k,Vt,Ft,It){const Ot=new Uint8Array(4),Rt=s.createTexture();s.bindTexture(k,Rt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<Ft;Zt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Vt,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Ot):s.texImage2D(Vt+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ot);return Rt}const J={};J[s.TEXTURE_2D]=zt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=zt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=zt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=zt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ht(s.DEPTH_TEST),h.setFunc(Gs),gt(!1),ye(zx),ht(s.CULL_FACE),ze(wa);function ht(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Pt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Nt(k,Vt){return x[k]!==Vt?(s.bindFramebuffer(k,Vt),x[k]=Vt,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Vt),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Vt),!0):!1}function qt(k,Vt){let Ft=S,It=!1;if(k){Ft=_.get(Vt),Ft===void 0&&(Ft=[],_.set(Vt,Ft));const Ot=k.textures;if(Ft.length!==Ot.length||Ft[0]!==s.COLOR_ATTACHMENT0){for(let Rt=0,Zt=Ot.length;Rt<Zt;Rt++)Ft[Rt]=s.COLOR_ATTACHMENT0+Rt;Ft.length=Ot.length,It=!0}}else Ft[0]!==s.BACK&&(Ft[0]=s.BACK,It=!0);It&&s.drawBuffers(Ft)}function de(k){return b!==k?(s.useProgram(k),b=k,!0):!1}const He={[Br]:s.FUNC_ADD,[ky]:s.FUNC_SUBTRACT,[Xy]:s.FUNC_REVERSE_SUBTRACT};He[qy]=s.MIN,He[Wy]=s.MAX;const _e={[Yy]:s.ZERO,[jy]:s.ONE,[Zy]:s.SRC_COLOR,[Hh]:s.SRC_ALPHA,[e1]:s.SRC_ALPHA_SATURATE,[$y]:s.DST_COLOR,[Qy]:s.DST_ALPHA,[Ky]:s.ONE_MINUS_SRC_COLOR,[Gh]:s.ONE_MINUS_SRC_ALPHA,[t1]:s.ONE_MINUS_DST_COLOR,[Jy]:s.ONE_MINUS_DST_ALPHA,[n1]:s.CONSTANT_COLOR,[i1]:s.ONE_MINUS_CONSTANT_COLOR,[a1]:s.CONSTANT_ALPHA,[r1]:s.ONE_MINUS_CONSTANT_ALPHA};function ze(k,Vt,Ft,It,Ot,Rt,Zt,ge,De,Ie){if(k===wa){A===!0&&(Pt(s.BLEND),A=!1);return}if(A===!1&&(ht(s.BLEND),A=!0),k!==Vy){if(k!==M||Ie!==w){if((v!==Br||O!==Br)&&(s.blendEquation(s.FUNC_ADD),v=Br,O=Br),Ie)switch(k){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ix:s.blendFunc(s.ONE,s.ONE);break;case Bx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:vn("WebGLState: Invalid blending: ",k);break}else switch(k){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ix:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bx:vn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fx:vn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vn("WebGLState: Invalid blending: ",k);break}N=null,L=null,P=null,T=null,U.set(0,0,0),W=0,M=k,w=Ie}return}Ot=Ot||Vt,Rt=Rt||Ft,Zt=Zt||It,(Vt!==v||Ot!==O)&&(s.blendEquationSeparate(He[Vt],He[Ot]),v=Vt,O=Ot),(Ft!==N||It!==L||Rt!==P||Zt!==T)&&(s.blendFuncSeparate(_e[Ft],_e[It],_e[Rt],_e[Zt]),N=Ft,L=It,P=Rt,T=Zt),(ge.equals(U)===!1||De!==W)&&(s.blendColor(ge.r,ge.g,ge.b,De),U.copy(ge),W=De),M=k,w=!1}function V(k,Vt){k.side===Ki?Pt(s.CULL_FACE):ht(s.CULL_FACE);let Ft=k.side===si;Vt&&(Ft=!Ft),gt(Ft),k.blending===Fs&&k.transparent===!1?ze(wa):ze(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const It=k.stencilWrite;d.setTest(It),It&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Jt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function ye(k){k!==Fy?(ht(s.CULL_FACE),k!==G&&(k===zx?s.cullFace(s.BACK):k===Hy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),G=k}function xe(k){k!==q&&(F&&s.lineWidth(k),q=k)}function Jt(k,Vt,Ft){k?(ht(s.POLYGON_OFFSET_FILL),(at!==Vt||dt!==Ft)&&(s.polygonOffset(Vt,Ft),at=Vt,dt=Ft)):Pt(s.POLYGON_OFFSET_FILL)}function Ae(k){k?ht(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function Kt(k){k===void 0&&(k=s.TEXTURE0+ut-1),Mt!==k&&(s.activeTexture(k),Mt=k)}function pe(k,Vt,Ft){Ft===void 0&&(Mt===null?Ft=s.TEXTURE0+ut-1:Ft=Mt);let It=Et[Ft];It===void 0&&(It={type:void 0,texture:void 0},Et[Ft]=It),(It.type!==k||It.texture!==Vt)&&(Mt!==Ft&&(s.activeTexture(Ft),Mt=Ft),s.bindTexture(k,Vt||J[k]),It.type=k,It.texture=Vt)}function z(){const k=Et[Mt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function _t(){try{s.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function wt(){try{s.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function mt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ee(){try{s.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function kt(){try{s.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ne(){try{s.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function $t(){try{s.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Dt(){try{s.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Lt(k){et.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),et.copy(k))}function ie(k){bt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),bt.copy(k))}function Qt(k,Vt){let Ft=p.get(Vt);Ft===void 0&&(Ft=new WeakMap,p.set(Vt,Ft));let It=Ft.get(k);It===void 0&&(It=s.getUniformBlockIndex(Vt,k.name),Ft.set(k,It))}function Yt(k,Vt){const It=p.get(Vt).get(k);m.get(Vt)!==It&&(s.uniformBlockBinding(Vt,It,k.__bindingPointIndex),m.set(Vt,It))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Mt=null,Et={},x={},_=new WeakMap,S=[],b=null,A=!1,M=null,v=null,N=null,L=null,O=null,P=null,T=null,U=new ke(0,0,0),W=0,w=!1,C=null,G=null,q=null,at=null,dt=null,et.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ht,disable:Pt,bindFramebuffer:Nt,drawBuffers:qt,useProgram:de,setBlending:ze,setMaterial:V,setFlipSided:gt,setCullFace:ye,setLineWidth:xe,setPolygonOffset:Jt,setScissorTest:Ae,activeTexture:Kt,bindTexture:pe,unbindTexture:z,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:$t,texImage3D:Dt,updateUBOMapping:Qt,uniformBlockBinding:Yt,texStorage2D:kt,texStorage3D:ne,texSubImage2D:_t,texSubImage3D:wt,compressedTexSubImage2D:mt,compressedTexSubImage3D:ee,scissor:Lt,viewport:ie,reset:le}}function l2(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,g=new WeakMap;let x;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,E){return S?new OffscreenCanvas(z,E):el("canvas")}function A(z,E,Y){let _t=1;const wt=pe(z);if((wt.width>Y||wt.height>Y)&&(_t=Y/Math.max(wt.width,wt.height)),_t<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const mt=Math.floor(_t*wt.width),ee=Math.floor(_t*wt.height);x===void 0&&(x=b(mt,ee));const kt=E?b(mt,ee):x;return kt.width=mt,kt.height=ee,kt.getContext("2d").drawImage(z,0,0,mt,ee),Me("WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+mt+"x"+ee+")."),kt}else return"data"in z&&Me("WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),z;return z}function M(z){return z.generateMipmaps}function v(z){s.generateMipmap(z)}function N(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(z,E,Y,_t,wt=!1){if(z!==null){if(s[z]!==void 0)return s[z];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let mt=E;if(E===s.RED&&(Y===s.FLOAT&&(mt=s.R32F),Y===s.HALF_FLOAT&&(mt=s.R16F),Y===s.UNSIGNED_BYTE&&(mt=s.R8)),E===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(mt=s.R8UI),Y===s.UNSIGNED_SHORT&&(mt=s.R16UI),Y===s.UNSIGNED_INT&&(mt=s.R32UI),Y===s.BYTE&&(mt=s.R8I),Y===s.SHORT&&(mt=s.R16I),Y===s.INT&&(mt=s.R32I)),E===s.RG&&(Y===s.FLOAT&&(mt=s.RG32F),Y===s.HALF_FLOAT&&(mt=s.RG16F),Y===s.UNSIGNED_BYTE&&(mt=s.RG8)),E===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(mt=s.RG8UI),Y===s.UNSIGNED_SHORT&&(mt=s.RG16UI),Y===s.UNSIGNED_INT&&(mt=s.RG32UI),Y===s.BYTE&&(mt=s.RG8I),Y===s.SHORT&&(mt=s.RG16I),Y===s.INT&&(mt=s.RG32I)),E===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(mt=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(mt=s.RGB16UI),Y===s.UNSIGNED_INT&&(mt=s.RGB32UI),Y===s.BYTE&&(mt=s.RGB8I),Y===s.SHORT&&(mt=s.RGB16I),Y===s.INT&&(mt=s.RGB32I)),E===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(mt=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(mt=s.RGBA16UI),Y===s.UNSIGNED_INT&&(mt=s.RGBA32UI),Y===s.BYTE&&(mt=s.RGBA8I),Y===s.SHORT&&(mt=s.RGBA16I),Y===s.INT&&(mt=s.RGBA32I)),E===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(mt=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(mt=s.R11F_G11F_B10F)),E===s.RGBA){const ee=wt?qc:We.getTransfer(_t);Y===s.FLOAT&&(mt=s.RGBA32F),Y===s.HALF_FLOAT&&(mt=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(mt=ee===en?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function O(z,E){let Y;return z?E===null||E===Vr||E===Jo?Y=s.DEPTH24_STENCIL8:E===Ca?Y=s.DEPTH32F_STENCIL8:E===Qo&&(Y=s.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vr||E===Jo?Y=s.DEPTH_COMPONENT24:E===Ca?Y=s.DEPTH_COMPONENT32F:E===Qo&&(Y=s.DEPTH_COMPONENT16),Y}function P(z,E){return M(z)===!0||z.isFramebufferTexture&&z.minFilter!==vi&&z.minFilter!==Ui?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function T(z){const E=z.target;E.removeEventListener("dispose",T),W(E),E.isVideoTexture&&g.delete(E)}function U(z){const E=z.target;E.removeEventListener("dispose",U),C(E)}function W(z){const E=r.get(z);if(E.__webglInit===void 0)return;const Y=z.source,_t=_.get(Y);if(_t){const wt=_t[E.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&w(z),Object.keys(_t).length===0&&_.delete(Y)}r.remove(z)}function w(z){const E=r.get(z);s.deleteTexture(E.__webglTexture);const Y=z.source,_t=_.get(Y);delete _t[E.__cacheKey],h.memory.textures--}function C(z){const E=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(E.__webglFramebuffer[_t]))for(let wt=0;wt<E.__webglFramebuffer[_t].length;wt++)s.deleteFramebuffer(E.__webglFramebuffer[_t][wt]);else s.deleteFramebuffer(E.__webglFramebuffer[_t]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[_t])}else{if(Array.isArray(E.__webglFramebuffer))for(let _t=0;_t<E.__webglFramebuffer.length;_t++)s.deleteFramebuffer(E.__webglFramebuffer[_t]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _t=0;_t<E.__webglColorRenderbuffer.length;_t++)E.__webglColorRenderbuffer[_t]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[_t]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=z.textures;for(let _t=0,wt=Y.length;_t<wt;_t++){const mt=r.get(Y[_t]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),h.memory.textures--),r.remove(Y[_t])}r.remove(z)}let G=0;function q(){G=0}function at(){const z=G;return z>=l.maxTextures&&Me("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),G+=1,z}function dt(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function ut(z,E){const Y=r.get(z);if(z.isVideoTexture&&Ae(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&Y.__version!==z.version){const _t=z.image;if(_t===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{J(Y,z,E);return}}else z.isExternalTexture&&(Y.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+E)}function F(z,E){const Y=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Y.__version!==z.version){J(Y,z,E);return}else z.isExternalTexture&&(Y.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+E)}function j(z,E){const Y=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Y.__version!==z.version){J(Y,z,E);return}i.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+E)}function Z(z,E){const Y=r.get(z);if(z.version>0&&Y.__version!==z.version){ht(Y,z,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+E)}const Mt={[Qh]:s.REPEAT,[Ra]:s.CLAMP_TO_EDGE,[Jh]:s.MIRRORED_REPEAT},Et={[vi]:s.NEAREST,[m1]:s.NEAREST_MIPMAP_NEAREST,[gc]:s.NEAREST_MIPMAP_LINEAR,[Ui]:s.LINEAR,[oh]:s.LINEAR_MIPMAP_NEAREST,[Hr]:s.LINEAR_MIPMAP_LINEAR},I={[_1]:s.NEVER,[T1]:s.ALWAYS,[y1]:s.LESS,[av]:s.LEQUAL,[S1]:s.EQUAL,[E1]:s.GEQUAL,[M1]:s.GREATER,[b1]:s.NOTEQUAL};function st(z,E){if(E.type===Ca&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ui||E.magFilter===oh||E.magFilter===gc||E.magFilter===Hr||E.minFilter===Ui||E.minFilter===oh||E.minFilter===gc||E.minFilter===Hr)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,Mt[E.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,Mt[E.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,Mt[E.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,Et[E.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==gc&&E.minFilter!==Hr||E.type===Ca&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");s.texParameterf(z,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function et(z,E){let Y=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",T));const _t=E.source;let wt=_.get(_t);wt===void 0&&(wt={},_.set(_t,wt));const mt=dt(E);if(mt!==z.__cacheKey){wt[mt]===void 0&&(wt[mt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),wt[mt].usedTimes++;const ee=wt[z.__cacheKey];ee!==void 0&&(wt[z.__cacheKey].usedTimes--,ee.usedTimes===0&&w(E)),z.__cacheKey=mt,z.__webglTexture=wt[mt].texture}return Y}function bt(z,E,Y){return Math.floor(Math.floor(z/Y)/E)}function zt(z,E,Y,_t){const mt=z.updateRanges;if(mt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Y,_t,E.data);else{mt.sort((Dt,Lt)=>Dt.start-Lt.start);let ee=0;for(let Dt=1;Dt<mt.length;Dt++){const Lt=mt[ee],ie=mt[Dt],Qt=Lt.start+Lt.count,Yt=bt(ie.start,E.width,4),le=bt(Lt.start,E.width,4);ie.start<=Qt+1&&Yt===le&&bt(ie.start+ie.count-1,E.width,4)===Yt?Lt.count=Math.max(Lt.count,ie.start+ie.count-Lt.start):(++ee,mt[ee]=ie)}mt.length=ee+1;const kt=s.getParameter(s.UNPACK_ROW_LENGTH),ne=s.getParameter(s.UNPACK_SKIP_PIXELS),$t=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Dt=0,Lt=mt.length;Dt<Lt;Dt++){const ie=mt[Dt],Qt=Math.floor(ie.start/4),Yt=Math.ceil(ie.count/4),le=Qt%E.width,k=Math.floor(Qt/E.width),Vt=Yt,Ft=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,le),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,le,k,Vt,Ft,Y,_t,E.data)}z.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,kt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,$t)}}function J(z,E,Y){let _t=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_t=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_t=s.TEXTURE_3D);const wt=et(z,E),mt=E.source;i.bindTexture(_t,z.__webglTexture,s.TEXTURE0+Y);const ee=r.get(mt);if(mt.version!==ee.__version||wt===!0){i.activeTexture(s.TEXTURE0+Y);const kt=We.getPrimaries(We.workingColorSpace),ne=E.colorSpace===or?null:We.getPrimaries(E.colorSpace),$t=E.colorSpace===or||kt===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Dt=A(E.image,!1,l.maxTextureSize);Dt=Kt(E,Dt);const Lt=c.convert(E.format,E.colorSpace),ie=c.convert(E.type);let Qt=L(E.internalFormat,Lt,ie,E.colorSpace,E.isVideoTexture);st(_t,E);let Yt;const le=E.mipmaps,k=E.isVideoTexture!==!0,Vt=ee.__version===void 0||wt===!0,Ft=mt.dataReady,It=P(E,Dt);if(E.isDepthTexture)Qt=O(E.format===tl,E.type),Vt&&(k?i.texStorage2D(s.TEXTURE_2D,1,Qt,Dt.width,Dt.height):i.texImage2D(s.TEXTURE_2D,0,Qt,Dt.width,Dt.height,0,Lt,ie,null));else if(E.isDataTexture)if(le.length>0){k&&Vt&&i.texStorage2D(s.TEXTURE_2D,It,Qt,le[0].width,le[0].height);for(let Ot=0,Rt=le.length;Ot<Rt;Ot++)Yt=le[Ot],k?Ft&&i.texSubImage2D(s.TEXTURE_2D,Ot,0,0,Yt.width,Yt.height,Lt,ie,Yt.data):i.texImage2D(s.TEXTURE_2D,Ot,Qt,Yt.width,Yt.height,0,Lt,ie,Yt.data);E.generateMipmaps=!1}else k?(Vt&&i.texStorage2D(s.TEXTURE_2D,It,Qt,Dt.width,Dt.height),Ft&&zt(E,Dt,Lt,ie)):i.texImage2D(s.TEXTURE_2D,0,Qt,Dt.width,Dt.height,0,Lt,ie,Dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Vt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Qt,le[0].width,le[0].height,Dt.depth);for(let Ot=0,Rt=le.length;Ot<Rt;Ot++)if(Yt=le[Ot],E.format!==Hi)if(Lt!==null)if(k){if(Ft)if(E.layerUpdates.size>0){const Zt=mg(Yt.width,Yt.height,E.format,E.type);for(const ge of E.layerUpdates){const De=Yt.data.subarray(ge*Zt/Yt.data.BYTES_PER_ELEMENT,(ge+1)*Zt/Yt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ot,0,0,ge,Yt.width,Yt.height,1,Lt,De)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ot,0,0,0,Yt.width,Yt.height,Dt.depth,Lt,Yt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ot,Qt,Yt.width,Yt.height,Dt.depth,0,Yt.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ft&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ot,0,0,0,Yt.width,Yt.height,Dt.depth,Lt,ie,Yt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ot,Qt,Yt.width,Yt.height,Dt.depth,0,Lt,ie,Yt.data)}else{k&&Vt&&i.texStorage2D(s.TEXTURE_2D,It,Qt,le[0].width,le[0].height);for(let Ot=0,Rt=le.length;Ot<Rt;Ot++)Yt=le[Ot],E.format!==Hi?Lt!==null?k?Ft&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ot,0,0,Yt.width,Yt.height,Lt,Yt.data):i.compressedTexImage2D(s.TEXTURE_2D,Ot,Qt,Yt.width,Yt.height,0,Yt.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ft&&i.texSubImage2D(s.TEXTURE_2D,Ot,0,0,Yt.width,Yt.height,Lt,ie,Yt.data):i.texImage2D(s.TEXTURE_2D,Ot,Qt,Yt.width,Yt.height,0,Lt,ie,Yt.data)}else if(E.isDataArrayTexture)if(k){if(Vt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Qt,Dt.width,Dt.height,Dt.depth),Ft)if(E.layerUpdates.size>0){const Ot=mg(Dt.width,Dt.height,E.format,E.type);for(const Rt of E.layerUpdates){const Zt=Dt.data.subarray(Rt*Ot/Dt.data.BYTES_PER_ELEMENT,(Rt+1)*Ot/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Rt,Dt.width,Dt.height,1,Lt,ie,Zt)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Lt,ie,Dt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,Dt.width,Dt.height,Dt.depth,0,Lt,ie,Dt.data);else if(E.isData3DTexture)k?(Vt&&i.texStorage3D(s.TEXTURE_3D,It,Qt,Dt.width,Dt.height,Dt.depth),Ft&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Lt,ie,Dt.data)):i.texImage3D(s.TEXTURE_3D,0,Qt,Dt.width,Dt.height,Dt.depth,0,Lt,ie,Dt.data);else if(E.isFramebufferTexture){if(Vt)if(k)i.texStorage2D(s.TEXTURE_2D,It,Qt,Dt.width,Dt.height);else{let Ot=Dt.width,Rt=Dt.height;for(let Zt=0;Zt<It;Zt++)i.texImage2D(s.TEXTURE_2D,Zt,Qt,Ot,Rt,0,Lt,ie,null),Ot>>=1,Rt>>=1}}else if(le.length>0){if(k&&Vt){const Ot=pe(le[0]);i.texStorage2D(s.TEXTURE_2D,It,Qt,Ot.width,Ot.height)}for(let Ot=0,Rt=le.length;Ot<Rt;Ot++)Yt=le[Ot],k?Ft&&i.texSubImage2D(s.TEXTURE_2D,Ot,0,0,Lt,ie,Yt):i.texImage2D(s.TEXTURE_2D,Ot,Qt,Lt,ie,Yt);E.generateMipmaps=!1}else if(k){if(Vt){const Ot=pe(Dt);i.texStorage2D(s.TEXTURE_2D,It,Qt,Ot.width,Ot.height)}Ft&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,ie,Dt)}else i.texImage2D(s.TEXTURE_2D,0,Qt,Lt,ie,Dt);M(E)&&v(_t),ee.__version=mt.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function ht(z,E,Y){if(E.image.length!==6)return;const _t=et(z,E),wt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+Y);const mt=r.get(wt);if(wt.version!==mt.__version||_t===!0){i.activeTexture(s.TEXTURE0+Y);const ee=We.getPrimaries(We.workingColorSpace),kt=E.colorSpace===or?null:We.getPrimaries(E.colorSpace),ne=E.colorSpace===or||ee===kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const $t=E.isCompressedTexture||E.image[0].isCompressedTexture,Dt=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let Rt=0;Rt<6;Rt++)!$t&&!Dt?Lt[Rt]=A(E.image[Rt],!0,l.maxCubemapSize):Lt[Rt]=Dt?E.image[Rt].image:E.image[Rt],Lt[Rt]=Kt(E,Lt[Rt]);const ie=Lt[0],Qt=c.convert(E.format,E.colorSpace),Yt=c.convert(E.type),le=L(E.internalFormat,Qt,Yt,E.colorSpace),k=E.isVideoTexture!==!0,Vt=mt.__version===void 0||_t===!0,Ft=wt.dataReady;let It=P(E,ie);st(s.TEXTURE_CUBE_MAP,E);let Ot;if($t){k&&Vt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,le,ie.width,ie.height);for(let Rt=0;Rt<6;Rt++){Ot=Lt[Rt].mipmaps;for(let Zt=0;Zt<Ot.length;Zt++){const ge=Ot[Zt];E.format!==Hi?Qt!==null?k?Ft&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,0,0,ge.width,ge.height,Qt,ge.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,le,ge.width,ge.height,0,ge.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,0,0,ge.width,ge.height,Qt,Yt,ge.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,le,ge.width,ge.height,0,Qt,Yt,ge.data)}}}else{if(Ot=E.mipmaps,k&&Vt){Ot.length>0&&It++;const Rt=pe(Lt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,le,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(Dt){k?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Lt[Rt].width,Lt[Rt].height,Qt,Yt,Lt[Rt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,le,Lt[Rt].width,Lt[Rt].height,0,Qt,Yt,Lt[Rt].data);for(let Zt=0;Zt<Ot.length;Zt++){const De=Ot[Zt].image[Rt].image;k?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,0,0,De.width,De.height,Qt,Yt,De.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,le,De.width,De.height,0,Qt,Yt,De.data)}}else{k?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Qt,Yt,Lt[Rt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,le,Qt,Yt,Lt[Rt]);for(let Zt=0;Zt<Ot.length;Zt++){const ge=Ot[Zt];k?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,0,0,Qt,Yt,ge.image[Rt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,le,Qt,Yt,ge.image[Rt])}}}M(E)&&v(s.TEXTURE_CUBE_MAP),mt.__version=wt.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Pt(z,E,Y,_t,wt,mt){const ee=c.convert(Y.format,Y.colorSpace),kt=c.convert(Y.type),ne=L(Y.internalFormat,ee,kt,Y.colorSpace),$t=r.get(E),Dt=r.get(Y);if(Dt.__renderTarget=E,!$t.__hasExternalTextures){const Lt=Math.max(1,E.width>>mt),ie=Math.max(1,E.height>>mt);wt===s.TEXTURE_3D||wt===s.TEXTURE_2D_ARRAY?i.texImage3D(wt,mt,ne,Lt,ie,E.depth,0,ee,kt,null):i.texImage2D(wt,mt,ne,Lt,ie,0,ee,kt,null)}i.bindFramebuffer(s.FRAMEBUFFER,z),Jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,wt,Dt.__webglTexture,0,xe(E)):(wt===s.TEXTURE_2D||wt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_t,wt,Dt.__webglTexture,mt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(z,E,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,z),E.depthBuffer){const _t=E.depthTexture,wt=_t&&_t.isDepthTexture?_t.type:null,mt=O(E.stencilBuffer,wt),ee=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,kt=xe(E);Jt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,mt,E.width,E.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,mt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,mt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,z)}else{const _t=E.textures;for(let wt=0;wt<_t.length;wt++){const mt=_t[wt],ee=c.convert(mt.format,mt.colorSpace),kt=c.convert(mt.type),ne=L(mt.internalFormat,ee,kt,mt.colorSpace),$t=xe(E);Y&&Jt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,ne,E.width,E.height):Jt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,ne,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ne,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(z,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(E.depthTexture);_t.__renderTarget=E,(!_t.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const wt=_t.__webglTexture,mt=xe(E);if(E.depthTexture.format===$o)Jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,wt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,wt,0);else if(E.depthTexture.format===tl)Jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,wt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,wt,0);else throw new Error("Unknown depthTexture format")}function de(z){const E=r.get(z),Y=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){const _t=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_t){const wt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_t.removeEventListener("dispose",wt)};_t.addEventListener("dispose",wt),E.__depthDisposeCallback=wt}E.__boundDepthTexture=_t}if(z.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const _t=z.texture.mipmaps;_t&&_t.length>0?qt(E.__webglFramebuffer[0],z):qt(E.__webglFramebuffer,z)}else if(Y){E.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[_t]),E.__webglDepthbuffer[_t]===void 0)E.__webglDepthbuffer[_t]=s.createRenderbuffer(),Nt(E.__webglDepthbuffer[_t],z,!1);else{const wt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer[_t];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,mt)}}else{const _t=z.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Nt(E.__webglDepthbuffer,z,!1);else{const wt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,mt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function He(z,E,Y){const _t=r.get(z);E!==void 0&&Pt(_t.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&de(z)}function _e(z){const E=z.texture,Y=r.get(z),_t=r.get(E);z.addEventListener("dispose",U);const wt=z.textures,mt=z.isWebGLCubeRenderTarget===!0,ee=wt.length>1;if(ee||(_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture()),_t.__version=E.version,h.memory.textures++),mt){Y.__webglFramebuffer=[];for(let kt=0;kt<6;kt++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[kt]=[];for(let ne=0;ne<E.mipmaps.length;ne++)Y.__webglFramebuffer[kt][ne]=s.createFramebuffer()}else Y.__webglFramebuffer[kt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let kt=0;kt<E.mipmaps.length;kt++)Y.__webglFramebuffer[kt]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(ee)for(let kt=0,ne=wt.length;kt<ne;kt++){const $t=r.get(wt[kt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),h.memory.textures++)}if(z.samples>0&&Jt(z)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let kt=0;kt<wt.length;kt++){const ne=wt[kt];Y.__webglColorRenderbuffer[kt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[kt]);const $t=c.convert(ne.format,ne.colorSpace),Dt=c.convert(ne.type),Lt=L(ne.internalFormat,$t,Dt,ne.colorSpace,z.isXRRenderTarget===!0),ie=xe(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,Lt,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,Y.__webglColorRenderbuffer[kt])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(Y.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){i.bindTexture(s.TEXTURE_CUBE_MAP,_t.__webglTexture),st(s.TEXTURE_CUBE_MAP,E);for(let kt=0;kt<6;kt++)if(E.mipmaps&&E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)Pt(Y.__webglFramebuffer[kt][ne],z,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+kt,ne);else Pt(Y.__webglFramebuffer[kt],z,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0);M(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ee){for(let kt=0,ne=wt.length;kt<ne;kt++){const $t=wt[kt],Dt=r.get($t);let Lt=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Lt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Dt.__webglTexture),st(Lt,$t),Pt(Y.__webglFramebuffer,z,$t,s.COLOR_ATTACHMENT0+kt,Lt,0),M($t)&&v(Lt)}i.unbindTexture()}else{let kt=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(kt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(kt,_t.__webglTexture),st(kt,E),E.mipmaps&&E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)Pt(Y.__webglFramebuffer[ne],z,E,s.COLOR_ATTACHMENT0,kt,ne);else Pt(Y.__webglFramebuffer,z,E,s.COLOR_ATTACHMENT0,kt,0);M(E)&&v(kt),i.unbindTexture()}z.depthBuffer&&de(z)}function ze(z){const E=z.textures;for(let Y=0,_t=E.length;Y<_t;Y++){const wt=E[Y];if(M(wt)){const mt=N(z),ee=r.get(wt).__webglTexture;i.bindTexture(mt,ee),v(mt),i.unbindTexture()}}}const V=[],gt=[];function ye(z){if(z.samples>0){if(Jt(z)===!1){const E=z.textures,Y=z.width,_t=z.height;let wt=s.COLOR_BUFFER_BIT;const mt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=r.get(z),kt=E.length>1;if(kt)for(let $t=0;$t<E.length;$t++)i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);const ne=z.texture.mipmaps;ne&&ne.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let $t=0;$t<E.length;$t++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(wt|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(wt|=s.STENCIL_BUFFER_BIT)),kt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ee.__webglColorRenderbuffer[$t]);const Dt=r.get(E[$t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Dt,0)}s.blitFramebuffer(0,0,Y,_t,0,0,Y,_t,wt,s.NEAREST),m===!0&&(V.length=0,gt.length=0,V.push(s.COLOR_ATTACHMENT0+$t),z.depthBuffer&&z.resolveDepthBuffer===!1&&(V.push(mt),gt.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,V))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),kt)for(let $t=0;$t<E.length;$t++){i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,ee.__webglColorRenderbuffer[$t]);const Dt=r.get(E[$t]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,Dt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const E=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function xe(z){return Math.min(l.maxSamples,z.samples)}function Jt(z){const E=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(z){const E=h.render.frame;g.get(z)!==E&&(g.set(z,E),z.update())}function Kt(z,E){const Y=z.colorSpace,_t=z.format,wt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Y!==Xs&&Y!==or&&(We.getTransfer(Y)===en?(_t!==Hi||wt!==$i)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vn("WebGLTextures: Unsupported texture color space:",Y)),E}function pe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=q,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=He,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Jt}function c2(s,t){function i(r,l=or){let c;const h=We.getTransfer(l);if(r===$i)return s.UNSIGNED_BYTE;if(r===Od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Jg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===$g)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Kg)return s.BYTE;if(r===Qg)return s.SHORT;if(r===Qo)return s.UNSIGNED_SHORT;if(r===Nd)return s.INT;if(r===Vr)return s.UNSIGNED_INT;if(r===Ca)return s.FLOAT;if(r===Ws)return s.HALF_FLOAT;if(r===tv)return s.ALPHA;if(r===ev)return s.RGB;if(r===Hi)return s.RGBA;if(r===$o)return s.DEPTH_COMPONENT;if(r===tl)return s.DEPTH_STENCIL;if(r===nv)return s.RED;if(r===zd)return s.RED_INTEGER;if(r===Id)return s.RG;if(r===Bd)return s.RG_INTEGER;if(r===Fd)return s.RGBA_INTEGER;if(r===Hc||r===Gc||r===Vc||r===kc)if(h===en)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$h||r===td||r===ed||r===nd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===$h)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===td)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ed)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===id||r===ad||r===rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===id||r===ad)return h===en?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===rd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===xd||r===gd||r===vd||r===_d)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===sd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===od)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ld)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ud)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===md)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vd)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_d)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yd||r===Sd||r===Md)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===yd)return h===en?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Md)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bd||r===Ed||r===Td||r===Ad)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===bd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ed)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Td)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const u2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f2=`
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

}`;class h2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new pv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Gi({vertexShader:u2,fragmentShader:f2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new gi(new Gr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d2 extends Ys{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,_=null,S=null,b=null;const A=typeof XRWebGLBinding<"u",M=new h2,v={},N=i.getContextAttributes();let L=null,O=null;const P=[],T=[],U=new we;let W=null;const w=new Di;w.viewport=new hn;const C=new Di;C.viewport=new hn;const G=[w,C],q=new US;let at=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ht=P[J];return ht===void 0&&(ht=new Ch,P[J]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(J){let ht=P[J];return ht===void 0&&(ht=new Ch,P[J]=ht),ht.getGripSpace()},this.getHand=function(J){let ht=P[J];return ht===void 0&&(ht=new Ch,P[J]=ht),ht.getHandSpace()};function ut(J){const ht=T.indexOf(J.inputSource);if(ht===-1)return;const Pt=P[ht];Pt!==void 0&&(Pt.update(J.inputSource,J.frame,p||h),Pt.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",j);for(let J=0;J<P.length;J++){const ht=T[J];ht!==null&&(T[J]=null,P[J].disconnect(ht))}at=null,dt=null,M.reset();for(const J in v)delete v[J];t.setRenderTarget(L),S=null,_=null,x=null,l=null,O=null,zt.stop(),r.isPresenting=!1,t.setPixelRatio(W),t.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",F),l.addEventListener("inputsourceschange",j),N.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(U),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Nt=null,qt=null;N.depth&&(qt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Pt=N.stencil?tl:$o,Nt=N.stencil?Jo:Vr);const de={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(de),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),O=new kr(_.textureWidth,_.textureHeight,{format:Hi,type:$i,depthTexture:new dv(_.textureWidth,_.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Pt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Pt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new kr(S.framebufferWidth,S.framebufferHeight,{format:Hi,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),zt.setContext(l),zt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(J){for(let ht=0;ht<J.removed.length;ht++){const Pt=J.removed[ht],Nt=T.indexOf(Pt);Nt>=0&&(T[Nt]=null,P[Nt].disconnect(Pt))}for(let ht=0;ht<J.added.length;ht++){const Pt=J.added[ht];let Nt=T.indexOf(Pt);if(Nt===-1){for(let de=0;de<P.length;de++)if(de>=T.length){T.push(Pt),Nt=de;break}else if(T[de]===null){T[de]=Pt,Nt=de;break}if(Nt===-1)break}const qt=P[Nt];qt&&qt.connect(Pt)}}const Z=new pt,Mt=new pt;function Et(J,ht,Pt){Z.setFromMatrixPosition(ht.matrixWorld),Mt.setFromMatrixPosition(Pt.matrixWorld);const Nt=Z.distanceTo(Mt),qt=ht.projectionMatrix.elements,de=Pt.projectionMatrix.elements,He=qt[14]/(qt[10]-1),_e=qt[14]/(qt[10]+1),ze=(qt[9]+1)/qt[5],V=(qt[9]-1)/qt[5],gt=(qt[8]-1)/qt[0],ye=(de[8]+1)/de[0],xe=He*gt,Jt=He*ye,Ae=Nt/(-gt+ye),Kt=Ae*-gt;if(ht.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Kt),J.translateZ(Ae),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),qt[10]===-1)J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const pe=He+Ae,z=_e+Ae,E=xe-Kt,Y=Jt+(Nt-Kt),_t=ze*_e/z*pe,wt=V*_e/z*pe;J.projectionMatrix.makePerspective(E,Y,_t,wt,pe,z),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function I(J,ht){ht===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ht.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ht=J.near,Pt=J.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Pt=M.depthFar)),q.near=C.near=w.near=ht,q.far=C.far=w.far=Pt,(at!==q.near||dt!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),at=q.near,dt=q.far),q.layers.mask=J.layers.mask|6,w.layers.mask=q.layers.mask&3,C.layers.mask=q.layers.mask&5;const Nt=J.parent,qt=q.cameras;I(q,Nt);for(let de=0;de<qt.length;de++)I(qt[de],Nt);qt.length===2?Et(q,w,C):q.projectionMatrix.copy(w.projectionMatrix),st(J,q,Nt)};function st(J,ht,Pt){Pt===null?J.matrix.copy(ht.matrixWorld):(J.matrix.copy(Pt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ht.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=il*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(J){m=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(J){return v[J]};let et=null;function bt(J,ht){if(g=ht.getViewerPose(p||h),b=ht,g!==null){const Pt=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let Nt=!1;Pt.length!==q.cameras.length&&(q.cameras.length=0,Nt=!0);for(let _e=0;_e<Pt.length;_e++){const ze=Pt[_e];let V=null;if(S!==null)V=S.getViewport(ze);else{const ye=x.getViewSubImage(_,ze);V=ye.viewport,_e===0&&(t.setRenderTargetTextures(O,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(O))}let gt=G[_e];gt===void 0&&(gt=new Di,gt.layers.enable(_e),gt.viewport=new hn,G[_e]=gt),gt.matrix.fromArray(ze.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ze.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(V.x,V.y,V.width,V.height),_e===0&&(q.matrix.copy(gt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Nt===!0&&q.cameras.push(gt)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const _e=x.getDepthInformation(Pt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,l.renderState)}if(qt&&qt.includes("camera-access")&&A){t.state.unbindTexture(),x=r.getBinding();for(let _e=0;_e<Pt.length;_e++){const ze=Pt[_e].camera;if(ze){let V=v[ze];V||(V=new pv,v[ze]=V);const gt=x.getCameraImage(ze);V.sourceTexture=gt}}}}for(let Pt=0;Pt<P.length;Pt++){const Nt=T[Pt],qt=P[Pt];Nt!==null&&qt!==void 0&&qt.update(Nt,ht,p||h)}et&&et(J,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),b=null}const zt=new gv;zt.setAnimationLoop(bt),this.setAnimationLoop=function(J){et=J},this.dispose=function(){}}}const zr=new ta,p2=new dn;function m2(s,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,uv(s)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,N,L,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),x(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),_(M,v),v.isMeshPhysicalMaterial&&S(M,v,O)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),A(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,N,L):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===si&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===si&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const N=t.get(v),L=N.envMap,O=N.envMapRotation;L&&(M.envMap.value=L,zr.copy(O),zr.x*=-1,zr.y*=-1,zr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),M.envMapRotation.value.setFromMatrix4(p2.makeRotationFromEuler(zr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,N,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*N,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,N){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===si&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function A(M,v){const N=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function x2(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const O=L.program;r.uniformBlockBinding(N,O)}function p(N,L){let O=l[N.id];O===void 0&&(b(N),O=g(N),l[N.id]=O,N.addEventListener("dispose",M));const P=L.program;r.updateUBOMapping(N,P);const T=t.render.frame;c[N.id]!==T&&(_(N),c[N.id]=T)}function g(N){const L=x();N.__bindingPointIndex=L;const O=s.createBuffer(),P=N.__size,T=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,O),O}function x(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return vn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const L=l[N.id],O=N.uniforms,P=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let T=0,U=O.length;T<U;T++){const W=Array.isArray(O[T])?O[T]:[O[T]];for(let w=0,C=W.length;w<C;w++){const G=W[w];if(S(G,T,w,P)===!0){const q=G.__offset,at=Array.isArray(G.value)?G.value:[G.value];let dt=0;for(let ut=0;ut<at.length;ut++){const F=at[ut],j=A(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,q+dt,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,dt),dt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,L,O,P){const T=N.value,U=L+"_"+O;if(P[U]===void 0)return typeof T=="number"||typeof T=="boolean"?P[U]=T:P[U]=T.clone(),!0;{const W=P[U];if(typeof T=="number"||typeof T=="boolean"){if(W!==T)return P[U]=T,!0}else if(W.equals(T)===!1)return W.copy(T),!0}return!1}function b(N){const L=N.uniforms;let O=0;const P=16;for(let U=0,W=L.length;U<W;U++){const w=Array.isArray(L[U])?L[U]:[L[U]];for(let C=0,G=w.length;C<G;C++){const q=w[C],at=Array.isArray(q.value)?q.value:[q.value];for(let dt=0,ut=at.length;dt<ut;dt++){const F=at[dt],j=A(F),Z=O%P,Mt=Z%j.boundary,Et=Z+Mt;O+=Mt,Et!==0&&P-Et<j.storage&&(O+=P-Et),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=O,O+=j.storage}}}const T=O%P;return T>0&&(O+=P-T),N.__size=O,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",N),L}function M(N){const L=N.target;L.removeEventListener("dispose",M);const O=h.indexOf(L.__bindingPointIndex);h.splice(O,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const N in l)s.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const g2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ea=null;function v2(){return Ea===null&&(Ea=new mS(g2,32,32,Id,Ws),Ea.minFilter=Ui,Ea.magFilter=Ui,Ea.wrapS=Ra,Ea.wrapT=Ra,Ea.generateMipmaps=!1,Ea.needsUpdate=!0),Ea}class _2{constructor(t={}){const{canvas:i=A1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const b=new Set([Fd,Bd,zd]),A=new Set([$i,Vr,Qo,Jo,Od,Pd]),M=new Uint32Array(4),v=new Int32Array(4);let N=null,L=null;const O=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=wi;let W=0,w=0,C=null,G=-1,q=null;const at=new hn,dt=new hn;let ut=null;const F=new ke(0);let j=0,Z=i.width,Mt=i.height,Et=1,I=null,st=null;const et=new hn(0,0,Z,Mt),bt=new hn(0,0,Z,Mt);let zt=!1;const J=new qd;let ht=!1,Pt=!1;const Nt=new dn,qt=new pt,de=new hn,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function ze(){return C===null?Et:1}let V=r;function gt(D,K){return i.getContext(D,K)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ld}`),i.addEventListener("webglcontextlost",Ot,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",Zt,!1),V===null){const K="webgl2";if(V=gt(K,D),V===null)throw gt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw D("WebGLRenderer: "+D.message),D}let ye,xe,Jt,Ae,Kt,pe,z,E,Y,_t,wt,mt,ee,kt,ne,$t,Dt,Lt,ie,Qt,Yt,le,k,Vt;function Ft(){ye=new R3(V),ye.init(),le=new c2(V,ye),xe=new v3(V,ye,t,le),Jt=new o2(V,ye),xe.reversedDepthBuffer&&_&&Jt.buffers.depth.setReversed(!0),Ae=new D3(V),Kt=new jE,pe=new l2(V,ye,Jt,Kt,xe,le,Ae),z=new y3(T),E=new A3(T),Y=new OS(V),k=new x3(V,Y),_t=new C3(V,Y,Ae,k),wt=new L3(V,_t,Y,Ae),ie=new U3(V,xe,pe),$t=new _3(Kt),mt=new YE(T,z,E,ye,xe,k,$t),ee=new m2(T,Kt),kt=new KE,ne=new n2(ye),Lt=new m3(T,z,E,Jt,wt,S,m),Dt=new r2(T,wt,xe),Vt=new x2(V,Ae,xe,Jt),Qt=new g3(V,ye,Ae),Yt=new w3(V,ye,Ae),Ae.programs=mt.programs,T.capabilities=xe,T.extensions=ye,T.properties=Kt,T.renderLists=kt,T.shadowMap=Dt,T.state=Jt,T.info=Ae}Ft();const It=new d2(T,V);this.xr=It,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=ye.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ye.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(D){D!==void 0&&(Et=D,this.setSize(Z,Mt,!1))},this.getSize=function(D){return D.set(Z,Mt)},this.setSize=function(D,K,lt=!0){if(It.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=D,Mt=K,i.width=Math.floor(D*Et),i.height=Math.floor(K*Et),lt===!0&&(i.style.width=D+"px",i.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(Z*Et,Mt*Et).floor()},this.setDrawingBufferSize=function(D,K,lt){Z=D,Mt=K,Et=lt,i.width=Math.floor(D*lt),i.height=Math.floor(K*lt),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(at)},this.getViewport=function(D){return D.copy(et)},this.setViewport=function(D,K,lt,nt){D.isVector4?et.set(D.x,D.y,D.z,D.w):et.set(D,K,lt,nt),Jt.viewport(at.copy(et).multiplyScalar(Et).round())},this.getScissor=function(D){return D.copy(bt)},this.setScissor=function(D,K,lt,nt){D.isVector4?bt.set(D.x,D.y,D.z,D.w):bt.set(D,K,lt,nt),Jt.scissor(dt.copy(bt).multiplyScalar(Et).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(D){Jt.setScissorTest(zt=D)},this.setOpaqueSort=function(D){I=D},this.setTransparentSort=function(D){st=D},this.getClearColor=function(D){return D.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,lt=!0){let nt=0;if(D){let $=!1;if(C!==null){const B=C.texture.format;$=b.has(B)}if($){const B=C.texture.type,tt=A.has(B),it=Lt.getClearColor(),At=Lt.getClearAlpha(),vt=it.r,St=it.g,Ut=it.b;tt?(M[0]=vt,M[1]=St,M[2]=Ut,M[3]=At,V.clearBufferuiv(V.COLOR,0,M)):(v[0]=vt,v[1]=St,v[2]=Ut,v[3]=At,V.clearBufferiv(V.COLOR,0,v))}else nt|=V.COLOR_BUFFER_BIT}K&&(nt|=V.DEPTH_BUFFER_BIT),lt&&(nt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",Zt,!1),Lt.dispose(),kt.dispose(),ne.dispose(),Kt.dispose(),z.dispose(),E.dispose(),wt.dispose(),k.dispose(),Vt.dispose(),mt.dispose(),It.dispose(),It.removeEventListener("sessionstart",fr),It.removeEventListener("sessionend",cn),oi.stop()};function Ot(D){D.preventDefault(),Xx("WebGLRenderer: Context Lost."),U=!0}function Rt(){Xx("WebGLRenderer: Context Restored."),U=!1;const D=Ae.autoReset,K=Dt.enabled,lt=Dt.autoUpdate,nt=Dt.needsUpdate,$=Dt.type;Ft(),Ae.autoReset=D,Dt.enabled=K,Dt.autoUpdate=lt,Dt.needsUpdate=nt,Dt.type=$}function Zt(D){vn("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ge(D){const K=D.target;K.removeEventListener("dispose",ge),De(K)}function De(D){Ie(D),Kt.remove(D)}function Ie(D){const K=Kt.get(D).programs;K!==void 0&&(K.forEach(function(lt){mt.releaseProgram(lt)}),D.isShaderMaterial&&mt.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,lt,nt,$,B){K===null&&(K=He);const tt=$.isMesh&&$.matrixWorld.determinant()<0,it=dr(D,K,lt,nt,$);Jt.setMaterial(nt,tt);let At=lt.index,vt=1;if(nt.wireframe===!0){if(At=_t.getWireframeAttribute(lt),At===void 0)return;vt=2}const St=lt.drawRange,Ut=lt.attributes.position;let Xt=St.start*vt,ae=(St.start+St.count)*vt;B!==null&&(Xt=Math.max(Xt,B.start*vt),ae=Math.min(ae,(B.start+B.count)*vt)),At!==null?(Xt=Math.max(Xt,0),ae=Math.min(ae,At.count)):Ut!=null&&(Xt=Math.max(Xt,0),ae=Math.min(ae,Ut.count));const se=ae-Xt;if(se<0||se===1/0)return;k.setup($,nt,it,lt,At);let ct,Bt=Qt;if(At!==null&&(ct=Y.get(At),Bt=Yt,Bt.setIndex(ct)),$.isMesh)nt.wireframe===!0?(Jt.setLineWidth(nt.wireframeLinewidth*ze()),Bt.setMode(V.LINES)):Bt.setMode(V.TRIANGLES);else if($.isLine){let Ht=nt.linewidth;Ht===void 0&&(Ht=1),Jt.setLineWidth(Ht*ze()),$.isLineSegments?Bt.setMode(V.LINES):$.isLineLoop?Bt.setMode(V.LINE_LOOP):Bt.setMode(V.LINE_STRIP)}else $.isPoints?Bt.setMode(V.POINTS):$.isSprite&&Bt.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)nl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Bt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ht=$._multiDrawStarts,ue=$._multiDrawCounts,jt=$._multiDrawCount,oe=At?Y.get(At).bytesPerElement:1,on=Kt.get(nt).currentProgram.getUniforms();for(let fe=0;fe<jt;fe++)on.setValue(V,"_gl_DrawID",fe),Bt.render(Ht[fe]/oe,ue[fe])}else if($.isInstancedMesh)Bt.renderInstances(Xt,se,$.count);else if(lt.isInstancedBufferGeometry){const Ht=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,ue=Math.min(lt.instanceCount,Ht);Bt.renderInstances(Xt,se,ue)}else Bt.render(Xt,se)};function Rn(D,K,lt){D.transparent===!0&&D.side===Ki&&D.forceSinglePass===!1?(D.side=si,D.needsUpdate=!0,pn(D,K,lt),D.side=ur,D.needsUpdate=!0,pn(D,K,lt),D.side=Ki):pn(D,K,lt)}this.compile=function(D,K,lt=null){lt===null&&(lt=D),L=ne.get(lt),L.init(K),P.push(L),lt.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),D!==lt&&D.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),L.setupLights();const nt=new Set;return D.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const B=$.material;if(B)if(Array.isArray(B))for(let tt=0;tt<B.length;tt++){const it=B[tt];Rn(it,lt,$),nt.add(it)}else Rn(B,lt,$),nt.add(B)}),L=P.pop(),nt},this.compileAsync=function(D,K,lt=null){const nt=this.compile(D,K,lt);return new Promise($=>{function B(){if(nt.forEach(function(tt){Kt.get(tt).currentProgram.isReady()&&nt.delete(tt)}),nt.size===0){$(D);return}setTimeout(B,10)}ye.get("KHR_parallel_shader_compile")!==null?B():setTimeout(B,10)})};let _n=null;function ea(D){_n&&_n(D)}function fr(){oi.stop()}function cn(){oi.start()}const oi=new gv;oi.setAnimationLoop(ea),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(D){_n=D,It.setAnimationLoop(D),D===null?oi.stop():oi.start()},It.addEventListener("sessionstart",fr),It.addEventListener("sessionend",cn),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){vn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(K),K=It.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,K,C),L=ne.get(D,P.length),L.init(K),P.push(L),Nt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),J.setFromProjectionMatrix(Nt,Qi,K.reversedDepth),Pt=this.localClippingEnabled,ht=$t.init(this.clippingPlanes,Pt),N=kt.get(D,O.length),N.init(),O.push(N),It.enabled===!0&&It.isPresenting===!0){const B=T.xr.getDepthSensingMesh();B!==null&&Vi(B,K,-1/0,T.sortObjects)}Vi(D,K,0,T.sortObjects),N.finish(),T.sortObjects===!0&&N.sort(I,st),_e=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,_e&&Lt.addToRenderList(N,D),this.info.render.frame++,ht===!0&&$t.beginShadows();const lt=L.state.shadowsArray;Dt.render(lt,D,K),ht===!0&&$t.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=N.opaque,$=N.transmissive;if(L.setupLights(),K.isArrayCamera){const B=K.cameras;if($.length>0)for(let tt=0,it=B.length;tt<it;tt++){const At=B[tt];Ua(nt,$,D,At)}_e&&Lt.render(D);for(let tt=0,it=B.length;tt<it;tt++){const At=B[tt];hr(N,D,At,At.viewport)}}else $.length>0&&Ua(nt,$,D,K),_e&&Lt.render(D),hr(N,D,K);C!==null&&w===0&&(pe.updateMultisampleRenderTarget(C),pe.updateRenderTargetMipmap(C)),D.isScene===!0&&D.onAfterRender(T,D,K),k.resetDefaultState(),G=-1,q=null,P.pop(),P.length>0?(L=P[P.length-1],ht===!0&&$t.setGlobalState(T.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?N=O[O.length-1]:N=null};function Vi(D,K,lt,nt){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)lt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)L.pushLight(D),D.castShadow&&L.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||J.intersectsSprite(D)){nt&&de.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Nt);const tt=wt.update(D),it=D.material;it.visible&&N.push(D,tt,it,lt,de.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||J.intersectsObject(D))){const tt=wt.update(D),it=D.material;if(nt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),de.copy(D.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),de.copy(tt.boundingSphere.center)),de.applyMatrix4(D.matrixWorld).applyMatrix4(Nt)),Array.isArray(it)){const At=tt.groups;for(let vt=0,St=At.length;vt<St;vt++){const Ut=At[vt],Xt=it[Ut.materialIndex];Xt&&Xt.visible&&N.push(D,tt,Xt,lt,de.z,Ut)}}else it.visible&&N.push(D,tt,it,lt,de.z,null)}}const B=D.children;for(let tt=0,it=B.length;tt<it;tt++)Vi(B[tt],K,lt,nt)}function hr(D,K,lt,nt){const{opaque:$,transmissive:B,transparent:tt}=D;L.setupLightsView(lt),ht===!0&&$t.setGlobalState(T.clippingPlanes,lt),nt&&Jt.viewport(at.copy(nt)),$.length>0&&Xn($,K,lt),B.length>0&&Xn(B,K,lt),tt.length>0&&Xn(tt,K,lt),Jt.buffers.depth.setTest(!0),Jt.buffers.depth.setMask(!0),Jt.buffers.color.setMask(!0),Jt.setPolygonOffset(!1)}function Ua(D,K,lt,nt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[nt.id]===void 0&&(L.state.transmissionRenderTarget[nt.id]=new kr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Ws:$i,minFilter:Hr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const B=L.state.transmissionRenderTarget[nt.id],tt=nt.viewport||at;B.setSize(tt.z*T.transmissionResolutionScale,tt.w*T.transmissionResolutionScale);const it=T.getRenderTarget(),At=T.getActiveCubeFace(),vt=T.getActiveMipmapLevel();T.setRenderTarget(B),T.getClearColor(F),j=T.getClearAlpha(),j<1&&T.setClearColor(16777215,.5),T.clear(),_e&&Lt.render(lt);const St=T.toneMapping;T.toneMapping=cr;const Ut=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),L.setupLightsView(nt),ht===!0&&$t.setGlobalState(T.clippingPlanes,nt),Xn(D,lt,nt),pe.updateMultisampleRenderTarget(B),pe.updateRenderTargetMipmap(B),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ae=0,se=K.length;ae<se;ae++){const ct=K[ae],{object:Bt,geometry:Ht,material:ue,group:jt}=ct;if(ue.side===Ki&&Bt.layers.test(nt.layers)){const oe=ue.side;ue.side=si,ue.needsUpdate=!0,un(Bt,lt,nt,Ht,ue,jt),ue.side=oe,ue.needsUpdate=!0,Xt=!0}}Xt===!0&&(pe.updateMultisampleRenderTarget(B),pe.updateRenderTargetMipmap(B))}T.setRenderTarget(it,At,vt),T.setClearColor(F,j),Ut!==void 0&&(nt.viewport=Ut),T.toneMapping=St}function Xn(D,K,lt){const nt=K.isScene===!0?K.overrideMaterial:null;for(let $=0,B=D.length;$<B;$++){const tt=D[$],{object:it,geometry:At,group:vt}=tt;let St=tt.material;St.allowOverride===!0&&nt!==null&&(St=nt),it.layers.test(lt.layers)&&un(it,K,lt,At,St,vt)}}function un(D,K,lt,nt,$,B){D.onBeforeRender(T,K,lt,nt,$,B),D.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(T,K,lt,nt,D,B),$.transparent===!0&&$.side===Ki&&$.forceSinglePass===!1?($.side=si,$.needsUpdate=!0,T.renderBufferDirect(lt,K,nt,$,D,B),$.side=ur,$.needsUpdate=!0,T.renderBufferDirect(lt,K,nt,$,D,B),$.side=Ki):T.renderBufferDirect(lt,K,nt,$,D,B),D.onAfterRender(T,K,lt,nt,$,B)}function pn(D,K,lt){K.isScene!==!0&&(K=He);const nt=Kt.get(D),$=L.state.lights,B=L.state.shadowsArray,tt=$.state.version,it=mt.getParameters(D,$.state,B,K,lt),At=mt.getProgramCacheKey(it);let vt=nt.programs;nt.environment=D.isMeshStandardMaterial?K.environment:null,nt.fog=K.fog,nt.envMap=(D.isMeshStandardMaterial?E:z).get(D.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,vt===void 0&&(D.addEventListener("dispose",ge),vt=new Map,nt.programs=vt);let St=vt.get(At);if(St!==void 0){if(nt.currentProgram===St&&nt.lightsStateVersion===tt)return zn(D,it),St}else it.uniforms=mt.getUniforms(D),D.onBeforeCompile(it,T),St=mt.acquireProgram(it,At),vt.set(At,St),nt.uniforms=it.uniforms;const Ut=nt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ut.clippingPlanes=$t.uniform),zn(D,it),nt.needsLights=pr(D),nt.lightsStateVersion=tt,nt.needsLights&&(Ut.ambientLightColor.value=$.state.ambient,Ut.lightProbe.value=$.state.probe,Ut.directionalLights.value=$.state.directional,Ut.directionalLightShadows.value=$.state.directionalShadow,Ut.spotLights.value=$.state.spot,Ut.spotLightShadows.value=$.state.spotShadow,Ut.rectAreaLights.value=$.state.rectArea,Ut.ltc_1.value=$.state.rectAreaLTC1,Ut.ltc_2.value=$.state.rectAreaLTC2,Ut.pointLights.value=$.state.point,Ut.pointLightShadows.value=$.state.pointShadow,Ut.hemisphereLights.value=$.state.hemi,Ut.directionalShadowMap.value=$.state.directionalShadowMap,Ut.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ut.spotShadowMap.value=$.state.spotShadowMap,Ut.spotLightMatrix.value=$.state.spotLightMatrix,Ut.spotLightMap.value=$.state.spotLightMap,Ut.pointShadowMap.value=$.state.pointShadowMap,Ut.pointShadowMatrix.value=$.state.pointShadowMatrix),nt.currentProgram=St,nt.uniformsList=null,St}function qn(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=Xc.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function zn(D,K){const lt=Kt.get(D);lt.outputColorSpace=K.outputColorSpace,lt.batching=K.batching,lt.batchingColor=K.batchingColor,lt.instancing=K.instancing,lt.instancingColor=K.instancingColor,lt.instancingMorph=K.instancingMorph,lt.skinning=K.skinning,lt.morphTargets=K.morphTargets,lt.morphNormals=K.morphNormals,lt.morphColors=K.morphColors,lt.morphTargetsCount=K.morphTargetsCount,lt.numClippingPlanes=K.numClippingPlanes,lt.numIntersection=K.numClipIntersection,lt.vertexAlphas=K.vertexAlphas,lt.vertexTangents=K.vertexTangents,lt.toneMapping=K.toneMapping}function dr(D,K,lt,nt,$){K.isScene!==!0&&(K=He),pe.resetTextureUnits();const B=K.fog,tt=nt.isMeshStandardMaterial?K.environment:null,it=C===null?T.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xs,At=(nt.isMeshStandardMaterial?E:z).get(nt.envMap||tt),vt=nt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,St=!!lt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ut=!!lt.morphAttributes.position,Xt=!!lt.morphAttributes.normal,ae=!!lt.morphAttributes.color;let se=cr;nt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(se=T.toneMapping);const ct=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Bt=ct!==void 0?ct.length:0,Ht=Kt.get(nt),ue=L.state.lights;if(ht===!0&&(Pt===!0||D!==q)){const he=D===q&&nt.id===G;$t.setState(nt,D,he)}let jt=!1;nt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ue.state.version||Ht.outputColorSpace!==it||$.isBatchedMesh&&Ht.batching===!1||!$.isBatchedMesh&&Ht.batching===!0||$.isBatchedMesh&&Ht.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ht.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ht.instancing===!1||!$.isInstancedMesh&&Ht.instancing===!0||$.isSkinnedMesh&&Ht.skinning===!1||!$.isSkinnedMesh&&Ht.skinning===!0||$.isInstancedMesh&&Ht.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ht.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ht.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ht.instancingMorph===!1&&$.morphTexture!==null||Ht.envMap!==At||nt.fog===!0&&Ht.fog!==B||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==$t.numPlanes||Ht.numIntersection!==$t.numIntersection)||Ht.vertexAlphas!==vt||Ht.vertexTangents!==St||Ht.morphTargets!==Ut||Ht.morphNormals!==Xt||Ht.morphColors!==ae||Ht.toneMapping!==se||Ht.morphTargetsCount!==Bt)&&(jt=!0):(jt=!0,Ht.__version=nt.version);let oe=Ht.currentProgram;jt===!0&&(oe=pn(nt,K,$));let on=!1,fe=!1,mn=!1;const ve=oe.getUniforms(),Re=Ht.uniforms;if(Jt.useProgram(oe.program)&&(on=!0,fe=!0,mn=!0),nt.id!==G&&(G=nt.id,fe=!0),on||q!==D){Jt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ve.setValue(V,"projectionMatrix",D.projectionMatrix),ve.setValue(V,"viewMatrix",D.matrixWorldInverse);const Ve=ve.map.cameraPosition;Ve!==void 0&&Ve.setValue(V,qt.setFromMatrixPosition(D.matrixWorld)),xe.logarithmicDepthBuffer&&ve.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&ve.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),q!==D&&(q=D,fe=!0,mn=!0)}if($.isSkinnedMesh){ve.setOptional(V,$,"bindMatrix"),ve.setOptional(V,$,"bindMatrixInverse");const he=$.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),ve.setValue(V,"boneTexture",he.boneTexture,pe))}$.isBatchedMesh&&(ve.setOptional(V,$,"batchingTexture"),ve.setValue(V,"batchingTexture",$._matricesTexture,pe),ve.setOptional(V,$,"batchingIdTexture"),ve.setValue(V,"batchingIdTexture",$._indirectTexture,pe),ve.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&ve.setValue(V,"batchingColorTexture",$._colorsTexture,pe));const Ge=lt.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&ie.update($,lt,oe),(fe||Ht.receiveShadow!==$.receiveShadow)&&(Ht.receiveShadow=$.receiveShadow,ve.setValue(V,"receiveShadow",$.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Re.envMap.value=At,Re.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&K.environment!==null&&(Re.envMapIntensity.value=K.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=v2()),fe&&(ve.setValue(V,"toneMappingExposure",T.toneMappingExposure),Ht.needsLights&&Xr(Re,mn),B&&nt.fog===!0&&ee.refreshFogUniforms(Re,B),ee.refreshMaterialUniforms(Re,nt,Et,Mt,L.state.transmissionRenderTarget[D.id]),Xc.upload(V,qn(Ht),Re,pe)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Xc.upload(V,qn(Ht),Re,pe),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&ve.setValue(V,"center",$.center),ve.setValue(V,"modelViewMatrix",$.modelViewMatrix),ve.setValue(V,"normalMatrix",$.normalMatrix),ve.setValue(V,"modelMatrix",$.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const he=nt.uniformsGroups;for(let Ve=0,Ze=he.length;Ve<Ze;Ve++){const In=he[Ve];Vt.update(In,oe),Vt.bind(In,oe)}}return oe}function Xr(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function pr(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(D,K,lt){const nt=Kt.get(D);nt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),Kt.get(D.texture).__webglTexture=K,Kt.get(D.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:lt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,K){const lt=Kt.get(D);lt.__webglFramebuffer=K,lt.__useDefaultFramebuffer=K===void 0};const ki=V.createFramebuffer();this.setRenderTarget=function(D,K=0,lt=0){C=D,W=K,w=lt;let nt=!0,$=null,B=!1,tt=!1;if(D){const At=Kt.get(D);if(At.__useDefaultFramebuffer!==void 0)Jt.bindFramebuffer(V.FRAMEBUFFER,null),nt=!1;else if(At.__webglFramebuffer===void 0)pe.setupRenderTarget(D);else if(At.__hasExternalTextures)pe.rebindTextures(D,Kt.get(D.texture).__webglTexture,Kt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ut=D.depthTexture;if(At.__boundDepthTexture!==Ut){if(Ut!==null&&Kt.has(Ut)&&(D.width!==Ut.image.width||D.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(D)}}const vt=D.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(tt=!0);const St=Kt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(St[K])?$=St[K][lt]:$=St[K],B=!0):D.samples>0&&pe.useMultisampledRTT(D)===!1?$=Kt.get(D).__webglMultisampledFramebuffer:Array.isArray(St)?$=St[lt]:$=St,at.copy(D.viewport),dt.copy(D.scissor),ut=D.scissorTest}else at.copy(et).multiplyScalar(Et).floor(),dt.copy(bt).multiplyScalar(Et).floor(),ut=zt;if(lt!==0&&($=ki),Jt.bindFramebuffer(V.FRAMEBUFFER,$)&&nt&&Jt.drawBuffers(D,$),Jt.viewport(at),Jt.scissor(dt),Jt.setScissorTest(ut),B){const At=Kt.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,At.__webglTexture,lt)}else if(tt){const At=K;for(let vt=0;vt<D.textures.length;vt++){const St=Kt.get(D.textures[vt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+vt,St.__webglTexture,lt,At)}}else if(D!==null&&lt!==0){const At=Kt.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,At.__webglTexture,lt)}G=-1},this.readRenderTargetPixels=function(D,K,lt,nt,$,B,tt,it=0){if(!(D&&D.isWebGLRenderTarget)){vn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Kt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&tt!==void 0&&(At=At[tt]),At){Jt.bindFramebuffer(V.FRAMEBUFFER,At);try{const vt=D.textures[it],St=vt.format,Ut=vt.type;if(!xe.textureFormatReadable(St)){vn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Ut)){vn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-nt&&lt>=0&&lt<=D.height-$&&(D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+it),V.readPixels(K,lt,nt,$,le.convert(St),le.convert(Ut),B))}finally{const vt=C!==null?Kt.get(C).__webglFramebuffer:null;Jt.bindFramebuffer(V.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(D,K,lt,nt,$,B,tt,it=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Kt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&tt!==void 0&&(At=At[tt]),At)if(K>=0&&K<=D.width-nt&&lt>=0&&lt<=D.height-$){Jt.bindFramebuffer(V.FRAMEBUFFER,At);const vt=D.textures[it],St=vt.format,Ut=vt.type;if(!xe.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Xt),V.bufferData(V.PIXEL_PACK_BUFFER,B.byteLength,V.STREAM_READ),D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+it),V.readPixels(K,lt,nt,$,le.convert(St),le.convert(Ut),0);const ae=C!==null?Kt.get(C).__webglFramebuffer:null;Jt.bindFramebuffer(V.FRAMEBUFFER,ae);const se=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await R1(V,se,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Xt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,B),V.deleteBuffer(Xt),V.deleteSync(se),B}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,K=null,lt=0){const nt=Math.pow(2,-lt),$=Math.floor(D.image.width*nt),B=Math.floor(D.image.height*nt),tt=K!==null?K.x:0,it=K!==null?K.y:0;pe.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,tt,it,$,B),Jt.unbindTexture()};const Xi=V.createFramebuffer(),_i=V.createFramebuffer();this.copyTextureToTexture=function(D,K,lt=null,nt=null,$=0,B=null){B===null&&($!==0?(nl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),B=$,$=0):B=0);let tt,it,At,vt,St,Ut,Xt,ae,se;const ct=D.isCompressedTexture?D.mipmaps[B]:D.image;if(lt!==null)tt=lt.max.x-lt.min.x,it=lt.max.y-lt.min.y,At=lt.isBox3?lt.max.z-lt.min.z:1,vt=lt.min.x,St=lt.min.y,Ut=lt.isBox3?lt.min.z:0;else{const Ge=Math.pow(2,-$);tt=Math.floor(ct.width*Ge),it=Math.floor(ct.height*Ge),D.isDataArrayTexture?At=ct.depth:D.isData3DTexture?At=Math.floor(ct.depth*Ge):At=1,vt=0,St=0,Ut=0}nt!==null?(Xt=nt.x,ae=nt.y,se=nt.z):(Xt=0,ae=0,se=0);const Bt=le.convert(K.format),Ht=le.convert(K.type);let ue;K.isData3DTexture?(pe.setTexture3D(K,0),ue=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(pe.setTexture2DArray(K,0),ue=V.TEXTURE_2D_ARRAY):(pe.setTexture2D(K,0),ue=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const jt=V.getParameter(V.UNPACK_ROW_LENGTH),oe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),on=V.getParameter(V.UNPACK_SKIP_PIXELS),fe=V.getParameter(V.UNPACK_SKIP_ROWS),mn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,ct.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ct.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,vt),V.pixelStorei(V.UNPACK_SKIP_ROWS,St),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ut);const ve=D.isDataArrayTexture||D.isData3DTexture,Re=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const Ge=Kt.get(D),he=Kt.get(K),Ve=Kt.get(Ge.__renderTarget),Ze=Kt.get(he.__renderTarget);Jt.bindFramebuffer(V.READ_FRAMEBUFFER,Ve.__webglFramebuffer),Jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let In=0;In<At;In++)ve&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Kt.get(D).__webglTexture,$,Ut+In),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Kt.get(K).__webglTexture,B,se+In)),V.blitFramebuffer(vt,St,tt,it,Xt,ae,tt,it,V.DEPTH_BUFFER_BIT,V.NEAREST);Jt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||D.isRenderTargetTexture||Kt.has(D)){const Ge=Kt.get(D),he=Kt.get(K);Jt.bindFramebuffer(V.READ_FRAMEBUFFER,Xi),Jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,_i);for(let Ve=0;Ve<At;Ve++)ve?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.__webglTexture,$,Ut+Ve):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ge.__webglTexture,$),Re?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,he.__webglTexture,B,se+Ve):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,he.__webglTexture,B),$!==0?V.blitFramebuffer(vt,St,tt,it,Xt,ae,tt,it,V.COLOR_BUFFER_BIT,V.NEAREST):Re?V.copyTexSubImage3D(ue,B,Xt,ae,se+Ve,vt,St,tt,it):V.copyTexSubImage2D(ue,B,Xt,ae,vt,St,tt,it);Jt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Jt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Re?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(ue,B,Xt,ae,se,tt,it,At,Bt,Ht,ct.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(ue,B,Xt,ae,se,tt,it,At,Bt,ct.data):V.texSubImage3D(ue,B,Xt,ae,se,tt,it,At,Bt,Ht,ct):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,B,Xt,ae,tt,it,Bt,Ht,ct.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,B,Xt,ae,ct.width,ct.height,Bt,ct.data):V.texSubImage2D(V.TEXTURE_2D,B,Xt,ae,tt,it,Bt,Ht,ct);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,oe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,on),V.pixelStorei(V.UNPACK_SKIP_ROWS,fe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,mn),B===0&&K.generateMipmaps&&V.generateMipmap(ue),Jt.unbindTexture()},this.initRenderTarget=function(D){Kt.get(D).__webglFramebuffer===void 0&&pe.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?pe.setTextureCube(D,0):D.isData3DTexture?pe.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?pe.setTexture2DArray(D,0):pe.setTexture2D(D,0),Jt.unbindTexture()},this.resetState=function(){W=0,w=0,C=null,Jt.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),i.unpackColorSpace=We._getUnpackColorSpace()}}const y2="/assets/pocket-cursors-v1-B1Sz7Rnk.webp",S2="/assets/pocket-extras-v2-D7L4gYeN.webp",M2="/assets/pocket-hidden-lake-v1-mno8U5AX.webp",b2="/assets/pocket-moon-ground-v1-CfpURW-p.webp",E2="/assets/pocket-person-frames-v1-Dr4Rny-F.webp",T2="/assets/pocket-planet-background-v1-Ba89v4Vn.webp",A2="/assets/pocket-walk-16-v2-Czh7WAjV.webp",R2="/assets/sky-keepsakes-v1-Bdkon1T6.webp",C2="/assets/yellow-paper-v1-Cz84w2fj.webp",Ta=Object.freeze({cursors:y2,extras:S2,hiddenSky:M2,terrain:b2,poses:E2,sky:T2,walk:A2,keepsakes:R2,paper:C2});function Fg(s=!1){const t=document.createElement("canvas");t.width=t.height=40;const i=t.getContext("2d");return i&&(i.save(),i.translate(20,20),i.rotate(-.12),i.fillStyle="#f6cd62",i.strokeStyle="#5e442f",i.lineWidth=2.25,i.lineJoin="round",i.lineCap="round",i.shadowColor="rgba(54,33,63,.24)",i.shadowBlur=1.6,i.shadowOffsetY=1,i.beginPath(),s?(i.moveTo(-12,11),i.quadraticCurveTo(-15,5,-14,0),i.lineTo(-9,-7),i.quadraticCurveTo(-8,-11,-4,-12),i.lineTo(8,-12),i.quadraticCurveTo(14,-11,14,-6),i.lineTo(14,7),i.quadraticCurveTo(13,16,5,19),i.lineTo(-5,19),i.quadraticCurveTo(-10,18,-12,11),i.closePath(),i.fill(),i.stroke(),i.beginPath(),i.moveTo(-12,1),i.quadraticCurveTo(-8,0,-5,4),i.lineTo(-1,9),i.quadraticCurveTo(1,12,4,10),i.lineTo(11,4),i.stroke()):(i.moveTo(-10,15),i.quadraticCurveTo(-14,5,-14,1),i.quadraticCurveTo(-14,-2,-11,-3),i.quadraticCurveTo(-9,-3,-7,0),i.lineTo(-7,-12),i.quadraticCurveTo(-7,-15,-4,-15),i.quadraticCurveTo(-1,-15,-1,-12),i.lineTo(-1,-3),i.lineTo(0,-17),i.quadraticCurveTo(0,-20,3,-20),i.quadraticCurveTo(6,-20,6,-17),i.lineTo(6,-3),i.lineTo(7,-14),i.quadraticCurveTo(7,-17,10,-17),i.quadraticCurveTo(13,-17,13,-14),i.lineTo(13,-3),i.lineTo(14,-9),i.quadraticCurveTo(14,-12,17,-11),i.quadraticCurveTo(20,-10,19,-6),i.lineTo(17,7),i.quadraticCurveTo(15,16,8,19),i.lineTo(-2,20),i.quadraticCurveTo(-8,20,-10,15),i.closePath(),i.fill(),i.stroke()),i.shadowColor="transparent",i.strokeStyle="rgba(255,247,190,.82)",i.lineWidth=1,i.beginPath(),s?(i.moveTo(-8,-7),i.quadraticCurveTo(-3,-10,7,-9)):(i.moveTo(-4,13),i.quadraticCurveTo(3,15,10,10)),i.stroke(),i.restore()),t}function w2(s){const t=document.createElement("canvas");t.width=t.height=40;const i=t.getContext("2d");if(!i)return t;const r=["#6da7dd","#79a9a0","#ef9d72","#d98b72","#e9c15d","#8296d1","#b58cd2","#72b5b0","#c9845b","#d7849d","#dfae68"],l=r[(Math.max(1,s)-1)%r.length];i.save(),i.translate(20,20),i.rotate(-.08),i.fillStyle=l,i.strokeStyle="#5e442f",i.lineWidth=1.9,i.lineJoin="round",i.lineCap="round",i.shadowColor="rgba(54,33,63,.24)",i.shadowBlur=1.5,i.shadowOffsetY=1;const c=()=>{i.fill(),i.stroke()};switch(s){case 1:i.beginPath(),i.moveTo(-16,3),i.lineTo(15,-8),i.lineTo(3,5),i.lineTo(13,11),i.lineTo(1,9),i.lineTo(-5,16),i.lineTo(-4,7),i.closePath(),c();break;case 2:i.fillRect(-12,-11,24,18),i.strokeRect(-12,-11,24,18),i.beginPath(),i.moveTo(-16,10),i.lineTo(16,10),i.lineTo(12,14),i.lineTo(-12,14),i.closePath(),c();break;case 3:i.beginPath(),i.moveTo(-13,-5),i.lineTo(13,-5),i.lineTo(10,12),i.lineTo(-10,12),i.closePath(),c(),i.beginPath(),i.ellipse(0,-6,13,4,0,0,Math.PI*2),c(),i.fillStyle="#fff4bd",i.beginPath(),i.arc(6,-9,2,0,Math.PI*2),i.fill();break;case 4:i.beginPath(),i.arc(0,2,14,Math.PI,0),i.lineTo(13,8),i.lineTo(-13,8),i.closePath(),c(),i.beginPath(),i.moveTo(-8,2),i.lineTo(10,2),i.stroke();break;case 5:i.beginPath(),i.moveTo(-12,-10),i.lineTo(10,-1),i.lineTo(2,6),i.lineTo(-15,-2),i.closePath(),c(),i.beginPath(),i.ellipse(5,11,4,3,0,0,Math.PI*2),c();break;case 6:i.beginPath(),i.moveTo(-16,11),i.lineTo(-2,-9),i.lineTo(4,0),i.lineTo(11,-6),i.lineTo(17,11),i.closePath(),c(),i.beginPath(),i.moveTo(-6,-3),i.lineTo(-2,-9),i.lineTo(1,-4),i.moveTo(8,-2),i.lineTo(11,-6),i.lineTo(14,-1),i.stroke();break;case 7:i.beginPath(),i.rect(-14,-12,28,23),c(),i.beginPath(),i.moveTo(-8,-3),i.lineTo(-3,1),i.lineTo(-8,5),i.moveTo(0,5),i.lineTo(8,5),i.stroke();break;case 8:i.beginPath(),i.moveTo(-15,-5),i.quadraticCurveTo(-9,-11,-3,-5),i.quadraticCurveTo(3,1,9,-5),i.quadraticCurveTo(13,-8,16,-5),i.lineTo(13,10),i.lineTo(-13,10),i.closePath(),c(),i.beginPath(),i.moveTo(-12,3),i.quadraticCurveTo(-5,-1,1,3),i.quadraticCurveTo(7,7,13,3),i.stroke();break;case 9:i.beginPath(),i.moveTo(-13,4),i.lineTo(-8,-7),i.lineTo(7,-7),i.lineTo(14,4),i.lineTo(14,10),i.lineTo(-13,10),i.closePath(),c(),i.fillStyle="#5e442f",i.beginPath(),i.arc(-8,10,3,0,Math.PI*2),i.arc(9,10,3,0,Math.PI*2),i.fill();break;case 10:i.beginPath(),i.ellipse(-3,-5,10,13,-.2,0,Math.PI*2),c(),i.beginPath(),i.moveTo(4,5),i.lineTo(13,16),i.stroke();break;default:i.beginPath(),i.moveTo(-13,-3),i.lineTo(13,-3),i.lineTo(9,12),i.lineTo(-9,12),i.closePath(),c(),i.beginPath(),i.arc(-5,-8,4,Math.PI,0),i.arc(5,-8,4,Math.PI,0),i.stroke();break}return i.shadowColor="transparent",i.fillStyle="#fff5bd",i.beginPath(),i.arc(14,-13,1.7,0,Math.PI*2),i.fill(),i.restore(),t}function D2(s,t){const i=document.createElement("canvas");i.width=i.height=40,i.className="scene-cursor",i.hidden=!0,i.setAttribute("aria-hidden","true"),document.body.appendChild(i);const r=i.getContext("2d"),l=new Map,c=new Image;let h=!1,d=null,m=null,p=!1,g=null,x="",_=null;function S(v){m={x:v.clientX,y:v.clientY};const N=`translate3d(${m.x-20}px,${m.y-20}px,0) scale(${p?.9:1})`;N!==x&&(i.style.transform=N,x=N)}function b(v){if(l.has(v))return l.get(v);const N=/^prop-(\d+)$/.exec(v||"");if(!N)return null;const L=w2(Number(N[1]));return l.set(v,L),L}function A(){if(h||!d||!m)return;const v=b(d);if(!(_===d&&v&&g===d&&!i.hidden)){if(!v){i.hidden=!0,delete s.dataset.customCursor,s.style.cursor=d==="grab"?"grab":d==="grabbing"?"grabbing":"crosshair",delete document.documentElement.dataset.pocketCursor,s.closest(".sky-play").dataset.cursorState=d;return}g!==d&&(r.clearRect(0,0,40,40),r.drawImage(v,0,0),g=d),i.hidden=!1,document.documentElement.dataset.pocketCursor!=="active"&&(document.documentElement.dataset.pocketCursor="active"),s.dataset.customCursor=d,s.style.cursor="none",s.closest(".sky-play").dataset.cursorState=d,_=d}}function M(){!d&&i.hidden||(delete document.documentElement.dataset.pocketCursor,d=_=null,i.hidden=!0,delete s.dataset.customCursor,delete s.closest(".sky-play").dataset.cursorState,s.style.removeProperty("cursor"))}return c.onload=()=>{if(h)return;["eraser","head","body","pocket","left","right"].forEach((N,L)=>{const O=document.createElement("canvas");O.width=O.height=128;const P=O.getContext("2d");P.drawImage(c,L%3*c.width/3,Math.floor(L/3)*c.height/2,c.width/3,c.height/2,0,0,128,128);const T=P.getImageData(0,0,128,128);let U=128,W=128,w=-1,C=-1;for(let ut=0;ut<T.data.length;ut+=4){if(T.data[ut+3]<220){T.data[ut+3]=0;continue}const F=ut/4%128,j=Math.floor(ut/4/128);U=Math.min(U,F),w=Math.max(w,F),W=Math.min(W,j),C=Math.max(C,j)}P.putImageData(T,0,0);const G=w-U+1,q=C-W+1;if(G<=0||q<=0)return;const at=document.createElement("canvas");at.width=at.height=40;const dt=36/Math.max(G,q);at.getContext("2d").drawImage(O,U,W,G,q,(40-G*dt)/2,(40-q*dt)/2,G*dt,q*dt),l.set(N,at)}),l.set("grab",Fg(!1)),l.set("grabbing",Fg(!0));const v=["eraser","head","body","pocket","left","right","grab","grabbing"];s.closest(".sky-play").dataset.cursors=v.every(N=>l.has(N))?"ready":"failed",A()},c.onerror=()=>{h||(s.closest(".sky-play").dataset.cursors="failed")},c.src=t,{move:S,show(v,N,L=!1){d=v,p=L,S(N),A()},hide:M,dispose(){h=!0,c.onload=c.onerror=null,M(),i.remove(),l.clear()}}}const On=Object.freeze({NONE:0,BODY:1,HEAD:2,POCKET:3,LEFT:4,RIGHT:5}),Hg=Object.freeze({[On.HEAD]:"head",[On.POCKET]:"pocket",[On.LEFT]:"left",[On.RIGHT]:"right",[On.BODY]:"body"}),Gg=new WeakMap,Dd=28,Vg=s=>Math.max(0,Math.min(1,s));function kg(s,t){return s[t+3]>=Dd}function U2(s,t,i,r,l){return r>.48&&r<.94&&l>.34&&l<.82&&s>150&&s>t*1.48&&t<150&&i<135}function L2(s,t,i,r){return r>.74&&t>s*.9&&t>i*1.18&&s<180&&i<145}function N2(s,t,i,r,l){if(l>.5||r<.14||r>.88)return!1;const c=t>s*.84&&t>i*1.12&&s<205,h=s>t*1.02&&t>i*1.28&&s>115;return c||h&&r>.22&&r<.82}function O2(s,t){if(s.length<12)return null;let i=t,r=-1;for(const d of s){const m=d%t;i=Math.min(i,m),r=Math.max(r,m)}if(r-i<70)return null;let l=i+(r-i)*.3,c=i+(r-i)*.7;for(let d=0;d<8;d++){let m=0,p=0,g=0,x=0;for(const _ of s){const S=_%t;Math.abs(S-l)<=Math.abs(S-c)?(m+=S,p++):(g+=S,x++)}if(!p||!x)return null;l=m/p,c=g/x}if(Math.abs(c-l)<8)return null;const h=[[],[]];for(const d of s){const m=d%t;h[Math.abs(m-l)<=Math.abs(m-c)?0:1].push(d)}return h.some(d=>d.length<4)?null:[{members:h[0],cx:l},{members:h[1],cx:c}]}function P2(s){const t=s==null?void 0:s.image;if(!(t!=null&&t.width)||!(t!=null&&t.height)||typeof t.getContext!="function")return null;const i=t.getContext("2d");if(!(i!=null&&i.getImageData))return null;const{width:r,height:l}=t,c=i.getImageData(0,0,r,l).data,h=r*l;let d=r,m=l,p=-1,g=-1;for(let P=0;P<h;P++){const T=P*4;if(!kg(c,T))continue;const U=P%r,W=Math.floor(P/r);d=Math.min(d,U),p=Math.max(p,U),m=Math.min(m,W),g=Math.max(g,W)}if(p<0)return{width:r,height:l,alpha:new Uint8Array(h),mask:new Uint8Array(h),bounds:null};const x=Math.max(1,p-d+1),_=Math.max(1,g-m+1),S=new Uint8Array(h),b=new Uint8Array(h),A=new Uint8Array(h),M=new Uint8Array(h);for(let P=0;P<h;P++){const T=P*4;if(!kg(c,T))continue;S[P]=c[T+3];const U=P%r,W=Math.floor(P/r),w=(U-d)/x,C=(W-m)/_,[G,q,at]=c.subarray(T,T+3);b[P]=On.BODY,N2(G,q,at,w,C)&&(b[P]=On.HEAD),U2(G,q,at,w,C)&&(A[P]=1,b[P]=On.POCKET),L2(G,q,at,C)&&(M[P]=1)}for(let P=0;P<2;P++){for(let T=m;T<=g;T++){let U=r,W=-1;for(let w=d;w<=p;w++)b[T*r+w]===On.HEAD&&(U=Math.min(U,w),W=w);for(let w=U;w<=W;w++){const C=T*r+w;S[C]&&b[C]===On.BODY&&(b[C]=On.HEAD)}}for(let T=d;T<=p;T++){let U=l,W=-1;for(let w=m;w<=g;w++)b[w*r+T]===On.HEAD&&(U=Math.min(U,w),W=w);for(let w=U;w<=W;w++){const C=w*r+T;S[C]&&b[C]===On.BODY&&(b[C]=On.HEAD)}}}const v=new Uint8Array(h),N=[];for(let P=0;P<h;P++){if(!M[P]||v[P])continue;const T=[P];v[P]=1;const U=[];let W=0,w=0,C=r,G=l,q=-1,at=-1;for(let dt=0;dt<T.length;dt++){const ut=T[dt],F=ut%r,j=Math.floor(ut/r);U.push(ut),W+=F,w+=j,C=Math.min(C,F),q=Math.max(q,F),G=Math.min(G,j),at=Math.max(at,j);for(let Z=-1;Z<=1;Z++)for(let Mt=-1;Mt<=1;Mt++){if(!Mt&&!Z)continue;const Et=F+Mt,I=j+Z;if(Et<0||Et>=r||I<0||I>=l)continue;const st=I*r+Et;M[st]&&!v[st]&&(v[st]=1,T.push(st))}}U.length>=4&&N.push({members:U,cx:W/U.length,cy:w/U.length,minX:C,minY:G,maxX:q,maxY:at})}N.sort((P,T)=>T.members.length-P.members.length);let O=N.filter(P=>P.members.length>=200&&P.maxY-P.minY>=10).slice(0,2).sort((P,T)=>P.cx-T.cx);if(O.length===1){const P=O2(O[0].members,r);P&&(O=P.sort((T,U)=>T.cx-U.cx))}if(O.length===2)O[0].members.forEach(P=>{b[P]=On.LEFT}),O[1].members.forEach(P=>{b[P]=On.RIGHT});else if(O.length===1){const P=O[0].cx<(d+p)/2?On.LEFT:On.RIGHT;O[0].members.forEach(T=>{b[T]=P})}return{width:r,height:l,alpha:S,mask:b,bounds:{minX:d,minY:m,maxX:p,maxY:g}}}function z2(s){if(!s)return null;let t=Gg.get(s);return t||(t=P2(s),t&&Gg.set(s,t)),t}function I2(s,t,i=1,r=null){var _;const l=z2(s);if(!(l!=null&&l.bounds)||!t||!Number.isFinite(t.x)||!Number.isFinite(t.y))return null;const c=Vg(i<0?1-t.x:t.x),h=Vg(1-t.y),d=Math.min(l.width-1,Math.max(0,Math.floor(c*l.width))),m=Math.min(l.height-1,Math.max(0,Math.floor(h*l.height))),p=m*l.width+d;if(l.alpha[p]<Dd)return null;const g=(_=Object.entries(Hg).find(([,S])=>S===r))==null?void 0:_[0],x=Math.max(1,Math.round(Math.min(l.width,l.height)*.009));if(g&&l.mask[p]!==Number(g))for(let S=-x;S<=x;S++)for(let b=-x;b<=x;b++){if(b*b+S*S>x*x)continue;const A=d+b,M=m+S;if(A<0||M<0||A>=l.width||M>=l.height||l.mask[M*l.width+A]!==Number(g))continue;let v=!0;const N=Math.max(Math.abs(b),Math.abs(S));for(let L=1;L<=N;L++)if(l.alpha[(m+Math.round(S*L/N))*l.width+d+Math.round(b*L/N)]<Dd){v=!1;break}if(v)return r}return Hg[l.mask[p]]||"body"}const Ih=20;function Mv(s,t){return{x:(s.clientX-t.left)/t.width,y:(s.clientY-t.top)/t.height}}function B2(s,t,i,r){const l=t*.69,c=Math.max(i/s,r/l),h=s*c,d=l*c;return{sourceHeight:l,x:(i-h)*.93,y:0,width:h,height:d}}const F2=(s,t,i)=>Math.max(t,Math.min(i,s)),Bh=[{name:"underhand",duration:.8,lift:.35,speed:2.8,up:2.4,spin:1.8},{name:"overhead",duration:1.05,lift:1.05,speed:3.7,up:3.6,spin:-3},{name:"sideways",duration:.65,lift:.5,speed:5,up:1.6,spin:4},{name:"double-take",duration:1.2,lift:.65,speed:2.1,up:3.1,spin:-1.5}];function H2(s,t,{floor:i,bounds:r,held:l}){const c=Math.max(1,Math.ceil(t/.008333333333333333)),h=t/c;for(let d=0;d<c;d++){for(const m of s){if(m===l||m.pull)continue;const p=m.fall??(m.fall={vx:0,vy:0,spin:0});p.vy-=7*h,m.home.x+=p.vx*h,m.home.y+=p.vy*h;const[g,x]=r(m),_=m.radius;(m.home.x<g+_||m.home.x>x-_)&&(m.home.x=F2(m.home.x,g+_,x-_),p.vx*=-.62,p.spin*=-.6);const S=i(m);m.home.y<S&&(m.home.y=S,p.vy=Math.abs(p.vy)>.45?-p.vy*.42:0,p.vx*=Math.exp(-3.2*h),p.spin*=Math.exp(-5*h)),p.vx*=Math.exp(-.15*h),m.angle=(m.angle||0)+(p.spin||0)*h}for(let m=0;m<s.length;m++)for(let p=m+1;p<s.length;p++){const g=s[m],x=s[p];if(g.pull||x.pull)continue;const _=x.home.x-g.home.x,S=x.home.y-g.home.y,b=Math.hypot(_,S),A=g.radius+x.radius;if(b>=A)continue;const M=b>1e-4?_/b:1,v=b>1e-4?S/b:0,N=g===l?0:1,L=x===l?0:1,O=N+L;if(!O)continue;const P=A-b;g.home.x-=M*P*N/O,g.home.y-=v*P*N/O,x.home.x+=M*P*L/O,x.home.y+=v*P*L/O;const T=g.fall??(g.fall={vx:0,vy:0,spin:0}),U=x.fall??(x.fall={vx:0,vy:0,spin:0}),W=(U.vx-T.vx)*M+(U.vy-T.vy)*v;if(W<0){const w=-1.5*W/O;T.vx-=w*M*N,T.vy-=w*v*N,U.vx+=w*M*L,U.vy+=w*v*L,T.spin-=w*.35,U.spin+=w*.35}}}}function G2({render:s,fast:t,running:i,raf:r=requestAnimationFrame,cancel:l=cancelAnimationFrame,now:c=()=>performance.now(),delay:h=setTimeout,clear:d=clearTimeout}){let m=0,p=0,g=null,x=0,_=!1;function S(){l(m),d(p),m=p=0,g=null,x=0}function b(M){if(m=0,_||!i()){S();return}const v=g===null?0:Math.min(.1,Math.max(0,(M-g)/1e3));g=M,x=M+1e3/30,s(M,v)!==!1?A():S()}function A(){if(_||!i())return;const M=t();if(M&&p&&(d(p),p=0),m||p)return;const v=M?0:Math.max(0,x-c()-8);v>1?p=h(()=>{p=0,!_&&i()&&(m=r(b))},v):m=r(b)}return{wake:A,stop:S,dispose(){_=!0,S()}}}const Xg=[[.22,.43,.16,.1,10,1.2,.43],[.46,.5,.13,.17,13,4.1,.4],[.75,.42,.16,.11,11,2.8,.44],[.32,.59,.12,.13,10,1.2+Math.PI,.38],[.57,.59,.15,.13,13,4.1+Math.PI,.4],[.8,.57,.12,.14,11,2.8+Math.PI,.37]];function V2(s,t){const i=t*Math.PI*2/s[4]+s[5];return{alpha:.035+s[6]*Math.pow((1+Math.sin(i))/2,1.5),x:Math.sin(i*.71)*.018,y:Math.cos(i*.83)*.014}}function k2(s,t,i){const r=s.getContext("2d"),l=new Image;let c=0,h=0,d=[],m=!1,p=-1,g=-1;function x(_,S){if(_===c&&S===h&&d.length)return;c=_,h=S;const b=Math.min(.65,800/_);if(s.width=Math.max(1,Math.round(_*b)),s.height=Math.max(1,Math.round(S*b*.75)),d=[],p=-1,!l.naturalWidth)return;const A=Math.max(_/l.width,S/l.height),M=l.width*A,v=l.height*A;for(const N of Xg){const L=Math.ceil(_*N[2]*2*b),O=Math.ceil(S*N[3]*2*b),P=document.createElement("canvas");P.width=L,P.height=O;const T=P.getContext("2d"),U=_*(N[0]-N[2]),W=S*(N[1]-N[3]);T.filter="blur(2px) saturate(.96)",T.drawImage(l,((_-M)/2-U)*b,((S-v)/2-W)*b,M*b,v*b),T.filter="none",T.globalCompositeOperation="destination-in";const w=document.createElement("canvas");w.width=L,w.height=O;const C=w.getContext("2d");for(const[G,q,at,dt]of[[.45,.56,.49,.43],[.7,.31,.29,.31]]){C.save(),C.translate(L*G,O*q),C.scale(L*at,O*dt);const ut=C.createRadialGradient(0,0,.18,0,0,1);ut.addColorStop(0,"#fff"),ut.addColorStop(.55,"#fffd"),ut.addColorStop(1,"#fff0"),C.fillStyle=ut,C.fillRect(-1,-1,2,2),C.restore()}T.drawImage(w,0,0),d.push({tile:P,left:U*b,top:W*b})}}return l.onload=()=>{m||(x(c,h),i())},l.src=t,{resize:x,render(_,S=!1,b=null,A=0){_=S?0:_,!(_===p&&A===g)&&(p=_,g=A,r.clearRect(0,0,s.width,s.height),d.forEach(({tile:M,left:v,top:N},L)=>{const O=V2(Xg[L],_);r.globalAlpha=O.alpha,r.drawImage(M,v+O.x*s.width,N+O.y*s.height)}),r.globalAlpha=1,b&&(r.globalCompositeOperation="destination-in",r.drawImage(b,0,0,b.width,b.height*.75,0,0,s.width,s.height),r.globalCompositeOperation="source-over"))},dispose(){m=!0,l.onload=null,d=[]}}}function X2(s,t,i,r,l){const c=document.createElement("canvas"),h=new Image;let d=0,m=0,p=null,g=[],x=!0,_=!1,S=!1,b=!1,A=null,M=0,v=0;function N(T){const U=A;A=T,t.style.maskImage=T?`url("${T}")`:"none",U&&URL.revokeObjectURL(U)}function L(T,U){T=Math.max(1,Math.round(T)),U=Math.max(1,Math.round(U));const W=Math.min(globalThis.devicePixelRatio||1,1.25);if(d===T&&m===U&&s.width===Math.round(T*W))return;d=T,m=U,M++,p=null;const w=document.createElement("canvas");w.width=c.width,w.height=c.height,c.width&&c.height&&w.getContext("2d").drawImage(c,0,0),s.width=Math.round(T*W),s.height=Math.round(U*W),c.width=T,c.height=U;const C=c.getContext("2d");C.fillStyle="#fff",C.fillRect(0,0,c.width,c.height),i.dataset.revealed==="true"&&(C.clearRect(0,0,c.width,c.height),C.drawImage(w,0,0,c.width,c.height),_=!0),x=!0,v++}function O(){M++,v++,g=[],p=null;const T=c.getContext("2d");T.globalCompositeOperation="source-over",T.fillStyle="#fff",T.fillRect(0,0,c.width,c.height),N(null),i.dataset.revealed="false",x=!0,_=!1,l()}function P(){if(!b){if(g.length){const T=c.getContext("2d");T.globalCompositeOperation="destination-out";for(const U of g){T.save(),T.scale(c.width,c.height),T.translate(U.x,U.y),T.scale(Ih/d,Ih/m);const W=T.createRadialGradient(0,0,.55,0,0,1);W.addColorStop(0,"#000"),W.addColorStop(1,"#0000"),T.fillStyle=W,T.fillRect(-1,-1,2,2),T.restore()}g=[],x=_=!0,v++,i.dataset.revealed="true"}if(x&&h.naturalWidth){const T=s.getContext("2d");T.globalCompositeOperation="source-over",T.clearRect(0,0,s.width,s.height);const U=B2(h.width,h.height,s.width,s.height);T.drawImage(h,0,0,h.width,U.sourceHeight,U.x,U.y,U.width,U.height),T.globalCompositeOperation="destination-in",T.drawImage(c,0,0,s.width,s.height),T.globalCompositeOperation="source-over",x=!1}if(_&&!S){S=!0,_=!1;const T=M;c.toBlob(U=>{S=!1,!b&&(U&&T===M&&N(URL.createObjectURL(U)),_&&l())})}}}return h.onload=()=>{b||(x=!0,l())},h.src=r,{resize:L,reset:O,flush:P,get mask(){return c},get revision(){return v},erase(T){const U=s.getBoundingClientRect(),W=Mv(T,U);if(p){const w=Math.hypot((W.x-p.x)*U.width,(W.y-p.y)*U.height),C=Math.ceil(w/(Ih*.4));for(let G=1;G<C;G++)g.push({x:p.x+(W.x-p.x)*G/C,y:p.y+(W.y-p.y)*G/C})}g.push(W),p=W,l()},endStroke(){p=null},reveal(){M++,v++,g=[],p=null,c.getContext("2d").clearRect(0,0,c.width,c.height),i.dataset.revealed="true",x=_=!0,l()},dispose(){b=!0,h.onload=null,A&&URL.revokeObjectURL(A),g=[]}}}function q2(s,t,i,r,l){s.setFromCamera(t,i);const c=r.filter(d=>d.mesh.visible),h=new Map(c.map(d=>[d.mesh,d]));for(const d of s.intersectObjects(c.map(m=>m.mesh),!1)){const m=h.get(d.object);if(m&&d.uv&&l(m,d.uv))return d}return null}function W2(s,t,i=[]){const r=new Set(i.filter(Boolean));function l(c){c&&(r.add(c),Object.values(c).forEach(h=>{h!=null&&h.isTexture&&r.add(h)}),Object.values(c.uniforms??{}).forEach(h=>{var d;(d=h.value)!=null&&d.isTexture&&r.add(h.value)}))}s.traverse(c=>{c.geometry&&r.add(c.geometry),(Array.isArray(c.material)?c.material:[c.material]).forEach(l)}),r.forEach(c=>c.dispose()),s.clear(),t.renderLists.dispose(),t.dispose(),t.forceContextLoss(),t.domElement.remove()}function Y2(s,t,i,r=()=>.75){const l=new pt,c=new pt,h=new pt,d=new pt,m=new pt,p=[0,0];function g(b,A,M,v){const N=i();return l.set((b-N.left)/N.width*2-1,-(A-N.top)/N.height*2+1,.5).unproject(s),l.sub(s.position).normalize(),v.copy(s.position).addScaledVector(l,(M-s.position.z)/l.z)}function x(b,A=t){return g(b.clientX,b.clientY,A,new pt)}function _(b){const A=i();c.set(b,0,t).project(s);const M=Vn.clamp(c.x/1.3,-1,1),v=A.top+A.height*(r()+.08*(1-Math.sqrt(1-M*M)));return g(A.left+(c.x+1)*A.width/2,v,t,h).y}function S(){const b=i(),A=Math.max(24,b.width*.035),M=b.top+b.height*r();return p[0]=g(b.left+A,M,t,d).x,p[1]=g(b.right-A,M,t,m).x,p}return{worldPoint:x,ground:_,bounds:S}}const Fh=[{name:["Little snake","小蛇"],rect:[18,50,400,439],x:0,y:0,size:2.3,z:.5},{name:["A350","A350"],rect:[396,137,507,273],x:-3.4,y:1.6,size:2.5,z:-.5},{name:["Coding","写代码"],rect:[880,164,366,322],x:3.1,y:1.1,size:2,z:0},{name:["Basque cheesecake","巴斯克蛋糕"],rect:[45,548,357,299],x:-2.7,y:-1.6,size:1.45,z:.4},{name:["Formula 1","F1 赛车"],rect:[468,523,368,332],x:3,y:-1.7,size:1.5,z:.2},{name:["Badminton","羽毛球"],rect:[896,537,309,307],x:-4.1,y:-.25,size:1.15,z:1},{name:["Mount Fuji","富士山"],rect:[15,944,457,232],x:-1.7,y:2.35,size:1.3,z:-1},{name:["Terminal","终端"],rect:[514,935,265,249],x:3.95,y:2.35,size:.7,z:-.8},{name:["Lake days","湖边时光"],rect:[835,911,407,306],x:1.5,y:-2.2,size:1.2,z:-.6}],bv=s=>Math.max(0,Math.min(1,s)),Qn=(s,t,i)=>{let r=bv((i-s)/(t-s));return r*r*(3-2*r)},Ev=`
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float field(vec2 p){return .12+(1.-p.y)*.46+sin(p.x*12.+p.y*8.)*.055+hash(floor(p*700.))*.18;}
`,j2=`
varying vec2 vUv; uniform float time; uniform float snake;
void main(){vUv=uv;vec3 p=position;
p.x+=sin(uv.y*7.+time*1.8)*.055*snake*(1.-uv.y);
gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}
`,Z2=`
uniform float edgeDepth;uniform sampler2D map;uniform vec4 crop;uniform float dissolve;uniform float outfit;uniform float facing;
varying vec2 vUv;
${Ev}
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
`;function K2({lang:s,onWork:t}){const i=fn.useRef(null),r=fn.useRef(null),l=fn.useRef(null),c=fn.useRef(null),h=fn.useRef(null),[d,m]=fn.useState(!1),[p,g]=fn.useState(!1),[x,_]=fn.useState(!1),S=fn.useRef(!1),b=fn.useRef(s);b.current=s;const A=fn.useRef({hint:"",inventory:!1}),M=v=>{A.current.inventory=v};return fn.useEffect(()=>{let v=!1,N,L=null,O=null;const P=matchMedia("(prefers-reduced-motion: reduce)");let T=P.matches,U=0,W=!0,w=!0;const C=B=>{A.current.hint=B},G=M,q=r.current;let at=q.getBoundingClientRect();const dt=D2(q,Ta.cursors);try{N=new _2({alpha:!0,antialias:!0})}catch{dt.dispose(),m(!0);return}N.setPixelRatio(Math.min(devicePixelRatio,1.25)),N.setClearColor(0,0),q.appendChild(N.domElement);const ut=new pS,F=new Di(40,1,.1,100);ut.add(new RS(16775399,10193232,2.3));const j=new DS(16773842,2);j.position.set(-4,7,5),ut.add(j);const Z=new gi(new Wd(7,96,64),new yS({color:15391904,roughness:.95,transparent:!0}));Z.position.set(0,-8.6,-1.6),Z.visible=!1,ut.add(Z);const Mt=.7,{worldPoint:Et,ground:I,bounds:st}=Y2(F,Mt,()=>at,()=>at.height<500?.65:.75),et=B=>I(B.home.x)+B.radius*.72-(B.lane||0);F.position.z=10;const bt=new LS,zt=new we(9,9),J=[],ht={floor:et,bounds:()=>Pt,held:null};let Pt;const Nt=[],qt=new we,de=new we,He=X2(c.current,i.current.querySelector(".sky-play__editorial"),i.current,Ta.sky,cn),_e=k2(h.current,Ta.hiddenSky,cn),ze=()=>He.reset(),V=B=>He.erase(B);let gt=null,ye=0,xe=0,Jt,Ae,Kt,pe=0,z=!0;const E=G2({render:oi,fast:()=>!!gt||performance.now()<ye||Math.abs(wt-_t)>.015||Nt.some(B=>{var tt,it,At;return B.pull||Math.abs(((tt=B.fall)==null?void 0:tt.vx)||0)>.02||Math.abs(((it=B.fall)==null?void 0:it.vy)||0)>.02||Math.abs(((At=B.fall)==null?void 0:At.spin)||0)>.02}),running:()=>!v&&W&&w});let Y={x:0,y:0,vx:0,vy:0,angle:0,angular:0},_t=0,wt=0,mt=0,ee=0,kt=1,ne=-10,$t=0,Dt="idle",Lt=Bh[0];const ie=[{name:"stroll",fps:16,bob:.035,sway:.012},{name:"bouncy",fps:20,bob:.11,sway:.035},{name:"tiptoe",fps:13,bob:.055,sway:.025}];let Qt=0,Yt=0;const le=[],k=[],Vt={left:["Go left","向左走"],right:["Go right","向右走"],head:["Change mood","换个表情"],body:["Change outfit","换件衣服"],pocket:["A little surprise","掏出口袋里的惊喜"]};function Ft(B){var it;if(U>.1||!Nt.length||B==="pocket"&&Dt==="pocket"&&xe-ne<Lt.duration&&!T)return;const tt=F.aspect<.85?1.05:3.1;if((B==="left"||B==="right")&&(Qt=(Qt+1+Math.floor(Math.random()*2))%ie.length,Yt=xe,i.current.dataset.walkStyle=ie[Qt].name,wt=Vn.clamp(wt+(B==="left"?-.85:.85),-tt,tt),kt=B==="left"?-1:1,T&&(_t=wt)),B==="head"&&(mt=(mt+1)%4,Dt="mood",ne=xe),B==="body"&&(ee=(ee+1)%7,Dt="outfit",ne=xe),B==="pocket"){const At=Nt.slice(1).filter(Xt=>!Xt.released);if(!At.length){C(b.current==="zh"?"口袋空啦，试试把地上的小物件抛起来。":"All out! Pick up a keepsake and give it a toss.");return}ne=xe,Dt="pocket";const vt=Bh.filter(Xt=>Xt!==Lt);Lt=vt[Math.floor(Math.random()*vt.length)]||Bh[0];const St=At[0],Ut=$t%2?1:-1;if($t++,St.released=!0,St.home.set(_t+Ut*.2,I(_t)+1,Mt),St.lane=$t%3*.11,St.angle=0,St.fall=null,St.pull={start:xe,side:Ut,style:Lt},St.mesh.scale.setScalar(St.baseScale*.08),St.offset.set(0,0),St.velocity.set(0,0),i.current.dataset.throwStyle=Lt.name,T){const[Xt,ae]=st(St);St.pull=null,St.home.x=Xt+(ae-Xt)*($t*.618%1),St.home.y=et(St),St.fall={vx:0,vy:0,spin:0}}}i.current.dataset.mood=String(mt),i.current.dataset.outfit=String(ee),i.current.dataset.drops=String($t),C(((it=Vt[B])==null?void 0:it[b.current==="zh"?1:0])||""),ye=performance.now()+1200,cn()}const It=document.createElement("canvas");It.width=It.height=64;const Ot=It.getContext("2d"),Rt=Ot.createRadialGradient(32,32,0,32,32,32);Rt.addColorStop(0,"#342336"),Rt.addColorStop(1,"#34233600"),Ot.fillStyle=Rt,Ot.fillRect(0,0,64,64);const Zt=new qo(It);function ge(B){if(!B.shadow){B.edges=[];for(let tt=1;tt<=4;tt++){const it=B.mesh.material.clone();it.uniforms=B.mesh.material.uniforms,it.uniforms={...it.uniforms,edgeDepth:{value:1}};const At=new gi(B.mesh.geometry,it);At.position.set(.006*tt,-.004*tt,-.015*tt),At.renderOrder=-tt,B.mesh.add(At),B.edges.push(At)}B.shadow=new gi(new Gr(1,1),new Xd({map:Zt,transparent:!0,depthWrite:!1,opacity:.25})),ut.add(B.shadow)}}const De=new we,Ie=new pt;function Rn(){const B=Math.min(devicePixelRatio,1.25);N.getPixelRatio()!==B&&(N.setPixelRatio(B),De.x&&De.y&&He.resize(De.x,De.y))}const _n=()=>{const B=at=q.getBoundingClientRect();if(!B.width||!B.height)return;const tt=De.x!==B.width||De.y!==B.height;De.set(B.width,B.height);const it=Math.min(devicePixelRatio,1.25);N.getPixelRatio()!==it&&N.setPixelRatio(it),tt&&N.setSize(B.width,B.height,!1),F.aspect=B.width/B.height,F.updateProjectionMatrix(),He.resize(B.width,B.height),_e.resize(B.width,B.height);const At=F.aspect<.85;F.position.z=At?13:10,Nt.forEach((vt,St)=>{const Ut=vt.definition||Fh[St];vt.released||vt.home.set(At?Ut.x*.34:Ut.x,At?Ut.y*1.25:Ut.y,Ut.z);const Xt=St===0?At?2.8:3.4:Ut.size*(At?.3:.43);vt.baseScale=Xt,vt.radius=Xt*Math.min(1,Ut.rect[3]/Ut.rect[2])*.4,vt.mesh.scale.set(Xt,Xt*Ut.rect[3]/Ut.rect[2],1)}),ea(),cn()},ea=()=>{z=!0,cn()};function fr(){z=!1;const B=i.current.getBoundingClientRect();U=T?0:bv(-B.top/Math.max(1,i.current.offsetHeight-innerHeight));const tt=Qn(.18,.8,U);i.current.style.setProperty("--sky-fade",String(tt)),i.current.style.setProperty("--sky-blur",`${Qn(.15,.75,U)*7}px`),i.current.style.setProperty("--type-exit",Qn(.08,.5,U)),i.current.style.setProperty("--work-show",String(Qn(.62,.94,U))),i.current.style.setProperty("--ground-rise",`${Qn(.04,.85,U)*110}svh`),i.current.style.setProperty("--ground-fade",String(Qn(.5,.86,U))),i.current.style.setProperty("--control-fade",String(Qn(.04,.28,U)));for(const it of i.current.querySelectorAll(".sky-play__actions,.sky-play__controls"))it.inert=U>.28;i.current.dataset.progress=U.toFixed(3),q.inert=U>.8,q.style.pointerEvents=U>.8?"none":"auto",U>.1&&(dt.hide(),C(""),G(!1)),U>.1&&gt&&zn()}function cn(){E.wake()}function oi(B,tt){if(v)return!1;at=q.getBoundingClientRect(),Rn(),z&&fr(),T||(xe+=tt),He.flush(),_e.render(xe,T,He.mask,He.revision),de.lerp(qt,1-Math.exp(-tt*5));const it=F.aspect<.85?13:10,At=T?0:de.x*.16*(1-Qn(.1,.65,U)),vt=T?0:de.y*.09*(1-Qn(.1,.65,U));F.position.set(Math.sin(At)*it,Math.sin(vt)*it,Math.cos(At)*Math.cos(vt)*it),F.lookAt(0,0,0),F.updateMatrixWorld();const St=Qn(.04,.85,U),Ut=Qn(.12,.63,U);Z.material.opacity=1-Qn(.22,.86,U);const Xt=(gt==null?void 0:gt.object)===Nt[0],ae=!Xt&&Math.abs(wt-_t)>.015;_t=Vn.damp(_t,wt,3,tt);const se=T?0:Math.max(0,1-(xe-ne)/.65);J.length=0;for(let ct=1;ct<Nt.length;ct++)Nt[ct].released&&J.push(Nt[ct]);if(U<.1&&!T)for(Pt=J.length?st():null,ht.held=gt==null?void 0:gt.object,pe+=tt;pe+1e-12>=1/120;)H2(J,1/120,ht),pe-=1/120;else pe=0;return Nt.forEach((ct,Bt)=>{var Ge;if(ct.mesh.visible=Bt===0?le.length===12:!!ct.released,Bt>0&&!ct.released){ct.points.visible=!1;return}let Ht=1;if(ct.pull){const{style:he,side:Ve}=ct.pull,Ze=(xe-ct.pull.start)/he.duration;Ht=.08+.92*Qn(.1,.82,Ze);const In=he.name==="double-take"?Math.sin(Ze*Math.PI*3)*.12:0;ct.home.set(_t+Ve*(.16+Qn(.18,1,Ze)*.5),I(_t)+1+Qn(.1,.85,Ze)*he.lift+In,Mt),ct.angle=Ve*Math.sin(Ze*Math.PI)*.35,Ze>=1&&(ct.fall={vx:Ve*he.speed,vy:he.up,spin:Ve*he.spin},ct.pull=null)}if(Bt===0&&(gt==null?void 0:gt.object)!==ct&&!ct.held&&(ct.velocity.addScaledVector(ct.offset,-90*tt).multiplyScalar(Math.exp(-12*tt)),ct.offset.addScaledVector(ct.velocity,tt)),Bt===0)if((gt==null?void 0:gt.object)===ct){const he=F.aspect<.85?1.05:3.1;_t=Vn.clamp(Y.x,-he,he),wt=_t,ct.home.x=Y.x,ct.home.y=Y.y,ct.home.z=.5}else ct.home.x=_t,ct.home.y=I(_t)+ct.baseScale*.9*.48,ct.home.z=.5,Y.y=ct.home.y,Y.angle=Vn.damp(Y.angle,0,8,tt);const ue=0,jt=ie[Qt],oe=(xe-Yt)*jt.fps/16*Math.PI*2,on=Bt===0&&!T&&!Xt?(ae?Math.abs(Math.sin(oe))*jt.bob:Math.sin(xe*2)*.012)+Math.sin(se*Math.PI)*.15:0,fe=2*Math.tan(Vn.degToRad(20))*(it-ct.home.z);if(ct.mesh.position.set(ct.home.x+ct.offset.x+ue,ct.home.y+ct.offset.y+on+St*fe*1.1,ct.home.z),ct.mesh.rotation.z=Bt===0?-_t*.065+((gt==null?void 0:gt.object)===ct?Y.angle:Math.sin(xe*2)*.012):ct.angle||0,Bt===0){if(ct.mesh.rotation.y=0,Dt==="pocket"){const he=(xe-ne)/Lt.duration;ct.mesh.rotation.z+=Math.sin(Math.min(1,he)*Math.PI)*(Lt.name==="sideways"?.12:Lt.name==="overhead"?-.09:.05)}if(ct.mesh.material.uniforms.facing.value=kt,ct.mesh.material.uniforms.outfit.value=ee,le.length===12){const he=T?mt:Dt==="pocket"&&xe-ne<Lt.duration+.25?8+Math.min(3,Math.floor((xe-ne)/Lt.duration*4)):ae?4+Math.floor(xe*7)%4:mt;ct.mesh.material.uniforms.map.value=Xt?gt.pose:ae&&k.length===16&&!T&&Dt!=="pocket"?k[Math.floor((xe-Yt)*jt.fps)%16]:le[he],ae&&(ct.mesh.rotation.z+=Math.sin(oe)*jt.sway),Dt==="pocket"&&xe-ne>Lt.duration+.25&&(Dt="idle")}}const mn=Bt===0&&!T&&!Xt?1+Math.sin(se*Math.PI*2)*.035:1,ve=ct.baseScale*Ht*mn*((gt==null?void 0:gt.object)===ct?1.035:1);if(ct.mesh.scale.x=Vn.damp(ct.mesh.scale.x,ve,9,tt),ct.mesh.scale.y=ct.mesh.scale.x*(Bt===0?.9:ct.rect[3]/ct.rect[2]),(gt==null?void 0:gt.object)===ct&&gt.localPoint){Ie.copy(gt.localPoint).multiply(ct.mesh.scale).applyEuler(ct.mesh.rotation);const he=Et(gt.event,gt.z).sub(Ie);if(Bt===0)Y.x=he.x,Y.y=he.y;else{const[Ve,Ze]=st(ct);he.x=Vn.clamp(he.x,Ve+ct.radius,Ze-ct.radius),he.y=Math.max(et(ct),Math.min(3,he.y))}ct.mesh.position.copy(he),ct.home.copy(he)}if(Bt>0){ct.mesh.rotation.y=Vn.damp(ct.mesh.rotation.y,(gt==null?void 0:gt.object)===ct?-.18:(((Ge=ct.fall)==null?void 0:Ge.vx)||0)*.035,8,tt),ge(ct);const he=Math.max(0,ct.home.y-et(ct));ct.shadow.visible=ct.mesh.visible&&U<.8,ct.shadow.position.set(ct.home.x,I(ct.home.x)-(ct.lane||0)+St*fe*1.1,Mt-.12),ct.shadow.scale.set(ct.baseScale*(1+he*.25),ct.baseScale*.17,1),ct.shadow.material.opacity=(1-Ut)*.25/(1+he*1.8)}ct.mesh.material.uniforms.time.value=xe;const Re=Ut;ct.mesh.material.uniforms.dissolve.value=Re,ct.points.material.uniforms.dissolve.value=Re,ct.points.position.copy(ct.mesh.position),ct.points.scale.copy(ct.mesh.scale),ct.points.rotation.copy(ct.mesh.rotation),ct.points.visible=Bt>0&&Re>0&&Re<1}),N.render(ut,F),L&&!gt&&U<.1&&qn(L,!0),U<.8&&(!T||!!gt||de.distanceTo(qt)>.002)}function Vi(B){const tt=at=N.domElement.getBoundingClientRect(),it=Mv(B,tt);zt.set(it.x*2-1,1-it.y*2)}function hr(B,tt){if(B===Nt[0])return Xn(tt)!==null;if(B.hitPixels){const St=Math.min(B.hitWidth-1,Math.floor(tt.x*B.hitWidth)),Ut=Math.min(B.hitHeight-1,Math.floor((1-tt.y)*B.hitHeight));return B.hitPixels[(Ut*B.hitWidth+St)*4+3]>90}const it=B.rect,At=Math.min(1253,Math.floor(it[0]+tt.x*it[2])),vt=Math.min(1253,Math.floor(it[1]+(1-tt.y)*it[3]));return(Ae==null?void 0:Ae[(vt*1254+At)*4+3])>90&&(Kt==null?void 0:Kt[vt*1254+At])===B.owner}function Ua(){return q2(bt,zt,F,Nt,hr)}function Xn(B){var it;const tt=(it=Nt[0])==null?void 0:it.mesh.material.uniforms;return I2(tt==null?void 0:tt.map.value,B,tt==null?void 0:tt.facing.value,(O==null?void 0:O.kind)==="mascot"?O.action:null)}function un(B){if(!B)return null;const tt=Nt.find(vt=>vt.mesh===B.object),it=tt?Nt.indexOf(tt):-1;if(!tt||it<0)return null;const At=it===0?Xn(B.uv):"grab";return it===0&&!At?null:{object:tt,index:it,kind:it===0?"mascot":"prop",action:At,key:it===0?At:`prop-${it}`,uv:B.uv}}function pn(B){if(U>.1||B.button!==0)return;Vi(B);const tt=B.pointerType==="touch"&&S.current,it=tt?null:Ua(),vt=un(it),St=(vt==null?void 0:vt.object)||null;if(gt={binding:vt,object:St,x:B.clientX,y:B.clientY,ox:(St==null?void 0:St.offset.x)||0,oy:(St==null?void 0:St.offset.y)||0,id:B.pointerId,moved:!1,action:(vt==null?void 0:vt.kind)==="mascot"?vt.action:null,erasing:tt||!St,event:B,localPoint:it?St.mesh.worldToLocal(it.point.clone()):null},He.endStroke(),B.pointerType!=="touch"&&dt.show(vt?"grabbing":"eraser",B,!0),!St&&(tt||B.pointerType!=="touch")&&V(B),St&&St===Nt[0]){const Ut=Et(B,St.mesh.position.z);Y.x=St.mesh.position.x,Y.y=St.mesh.position.y,Y.vx=Y.vy=Y.angular=0,St.offset.set(0,0),St.velocity.set(0,0),gt.pose=St.mesh.material.uniforms.map.value,qt.copy(de),gt.snakeGrab=Ut.sub(St.mesh.position),gt.z=St.mesh.position.z,gt.last={x:St.home.x,y:St.home.y,t:B.timeStamp}}if(St&&St!==Nt[0]){St.pull=null,St.fall={vx:0,vy:0,spin:0};const Ut=Et(B,St.mesh.position.z);gt.grab=Ut.sub(St.mesh.position),gt.z=St.mesh.position.z,gt.last={x:St.home.x,y:St.home.y,t:B.timeStamp}}q.setPointerCapture(B.pointerId),ye=performance.now()+1e3,cn()}function qn(B,tt=!1){if(L=B.pointerType==="touch"?null:B,Vi(B),gt){gt.event=B,dt.move(B),ye=performance.now()+120;const it=(B.clientX-gt.x)/De.x,At=(B.clientY-gt.y)/De.y;if(Math.hypot(B.clientX-gt.x,B.clientY-gt.y)>6&&(gt.moved=!0),gt.object&&gt.object===Nt[0]){const vt=Et(B,gt.z).sub(gt.snakeGrab),St=Math.max(.008,(B.timeStamp-gt.last.t)/1e3);Y.vx=(vt.x-Y.x)/St,Y.vy=(vt.y-Y.y)/St,Y.x=vt.x,Y.y=vt.y,Y.angle=Vn.clamp(Y.vx*.045,-.5,.5),gt.last={x:vt.x,y:vt.y,t:B.timeStamp}}else if(gt.object&&gt.object!==Nt[0]){const vt=gt.object,St=Et(B,gt.z).sub(gt.grab),Ut=Math.max(.008,(B.timeStamp-gt.last.t)/1e3),[Xt,ae]=st(vt);vt.home.x=Vn.clamp(St.x,Xt+vt.radius,ae-vt.radius),vt.home.y=Math.max(et(vt),Math.min(3,St.y)),vt.fall.vx=Vn.clamp((vt.home.x-gt.last.x)/Ut,-12,12),vt.fall.vy=Vn.clamp((vt.home.y-gt.last.y)/Ut,-12,12),gt.last={x:vt.home.x,y:vt.home.y,t:B.timeStamp}}else gt.object?gt.object.offset.set(Vn.clamp(gt.ox+it*9,-3,3),Vn.clamp(gt.oy-At*7,-2.5,2.5)):gt.erasing&&(B.pointerType!=="touch"||S.current)&&V(B)}else if(B.pointerType!=="touch"&&U<.1){const it=un(Ua()),At=(it==null?void 0:it.index)??-1,vt=(it==null?void 0:it.kind)==="mascot"?it.action:null;!T&&At<0&&!tt?qt.set(zt.x,zt.y):!T&&it&&qt.copy(de);const St=(it==null?void 0:it.key)||"eraser";O=it;const Ut=it?`${it.kind}:${it.index}:${it.action}`:"none";i.current.dataset.cursor!==St&&(i.current.dataset.cursor=St),i.current.dataset.cursorBinding!==Ut&&(i.current.dataset.cursorBinding=Ut),Nt.forEach(Xt=>Xt.hover=Xt===(it==null?void 0:it.object)),dt.show(it?it.key:"eraser",B),G(vt==="pocket"),C((it==null?void 0:it.kind)==="mascot"?Vt[vt][b.current==="zh"?1:0]+(b.current==="zh"?" · 按住可拖动":" · Hold to drag"):At>=0?(Nt[At].definition||Fh[At]).name[b.current==="zh"?1:0]:"")}tt||cn()}function zn(B){if(He.endStroke(),gt&&q.hasPointerCapture(gt.id)&&q.releasePointerCapture(gt.id),gt!=null&&gt.action&&!gt.moved&&(B==null?void 0:B.type)==="pointerup"&&Ft(gt.action),gt!=null&&gt.object&&gt.object===Nt[0]){const tt=gt.object;gt.moved&&!T&&tt.offset.set(Y.x-_t,Y.y-(I(_t)+tt.baseScale*.9*.48)),Y.angular=0,i.current.dataset.snakeThrowSpeed=String(Math.hypot(Y.vx,Y.vy).toFixed(2))}if(gt!=null&&gt.object&&gt.object!==Nt[0]){const tt=gt.object.fall;((B==null?void 0:B.type)!=="pointerup"||!gt.moved||B.timeStamp-gt.last.t>100)&&(tt.vx=tt.vy=0),tt.spin=tt.vx*.45,i.current.dataset.lastThrowSpeed=String(Math.hypot(tt.vx,tt.vy).toFixed(2)),T&&(gt.object.home.y=et(gt.object),tt.vx=tt.vy=tt.spin=0)}if(gt!=null&&gt.object&&gt.moved,gt=null,O=null,ye=performance.now()+400,delete i.current.dataset.cursorBinding,qt.set(0,0),(B==null?void 0:B.type)==="pointerup"&&B.pointerType!=="touch"){const tt=at;B.clientX>=tt.left&&B.clientX<tt.right&&B.clientY>=tt.top&&B.clientY<tt.bottom?qn(B):dr()}else L=null,dt.hide();cn()}function dr(B){var At;if(L=null,gt)return;O=null,delete i.current.dataset.cursorBinding;const tt=B==null?void 0:B.relatedTarget,it=(At=tt==null?void 0:tt.closest)==null?void 0:At.call(tt,"button,a");U<.1&&(B==null?void 0:B.pointerType)!=="touch"&&it&&(i.current.contains(it)||it.closest(".daybook-header"))?dt.show(it.dataset.sceneAction||"head",B):dt.hide(),Nt.forEach(vt=>vt.hover=!1),C(""),G(!1),qt.set(0,0),cn()}function Xr(B){var it,At;if(B.pointerType==="touch"){dt.hide();return}const tt=(At=(it=B.target).closest)==null?void 0:At.call(it,"button,a");if(U<.1&&tt&&(i.current.contains(tt)||tt.closest(".daybook-header"))){L=null,dt.show(tt.dataset.sceneAction||"head",B);return}!q.contains(B.target)&&!gt&&dt.hide()}function pr(B){B.relatedTarget||zn()}function ki(){w=!document.hidden,E.stop(),pe=0,w?cn():zn()}const Xi=new AS;Xi.load(Ta.walk,B=>{if(v){B.dispose();return}const tt=B.image.width/4,it=B.image.height/4;for(let At=0;At<16;At++){const vt=document.createElement("canvas");vt.width=Math.floor(tt),vt.height=Math.floor(it);const St=vt.getContext("2d");St.drawImage(B.image,At%4*tt,Math.floor(At/4)*it,tt,it,0,0,vt.width,vt.height);const Ut=St.getImageData(0,0,vt.width,vt.height);let Xt=vt.height,ae=0;const se=new Uint8Array(vt.width*vt.height),ct=[];for(let jt=0;jt<vt.width;jt++)ct.push(jt,(vt.height-1)*vt.width+jt);for(let jt=0;jt<vt.height;jt++)ct.push(jt*vt.width,jt*vt.width+vt.width-1);for(let jt=0;jt<ct.length;jt++){const oe=ct[jt];if(se[oe])continue;se[oe]=1;const on=oe*4;if(Math.min(Ut.data[on],Ut.data[on+1],Ut.data[on+2])<=233)continue;Ut.data[on+3]=0;const fe=oe%vt.width,mn=Math.floor(oe/vt.width);fe&&ct.push(oe-1),fe<vt.width-1&&ct.push(oe+1),mn&&ct.push(oe-vt.width),mn<vt.height-1&&ct.push(oe+vt.width)}for(let jt=0;jt<Ut.data.length;jt+=4)if(Ut.data[jt+3]>0){const oe=Math.floor(jt/4/vt.width);Xt=Math.min(Xt,oe),ae=Math.max(ae,oe)}St.putImageData(Ut,0,0);const Bt=document.createElement("canvas");Bt.width=384,Bt.height=341;const Ht=Math.max(1,ae-Xt+1),ue=315/Ht;Bt.getContext("2d").drawImage(vt,0,Xt,vt.width,Ht,(384-vt.width*ue)/2,12,vt.width*ue,315),k.push(new qo(Bt))}B.dispose(),i.current.dataset.walkFrames=String(k.length),cn()}),Jt=Xi.load(Ta.keepsakes,B=>{if(v){B.dispose();return}const tt=document.createElement("canvas");tt.width=tt.height=1254;const it=tt.getContext("2d");it.drawImage(B.image,0,0),Ae=it.getImageData(0,0,1254,1254).data;const At=1254*1254;Kt=new Int32Array(At);const vt=new Int32Array(At);let St=0;for(let Ut=0;Ut<At;Ut++){if(Kt[Ut]||Ae[Ut*4+3]<90)continue;St++;let Xt=0,ae=1;for(vt[0]=Ut,Kt[Ut]=St;Xt<ae;){const se=vt[Xt++],ct=se%1254,Bt=[ct>0?se-1:-1,ct<1253?se+1:-1,se>=1254?se-1254:-1,se<At-1254?se+1254:-1];for(const Ht of Bt)Ht>=0&&!Kt[Ht]&&Ae[Ht*4+3]>=90&&(Kt[Ht]=St,vt[ae++]=Ht)}}Fh.forEach((Ut,Xt)=>{const[ae,se,ct,Bt]=Ut.rect,Ht=new hn(0,0,1,1),ue=new Map;for(let Be=se;Be<se+Bt;Be++)for(let je=ae;je<ae+ct;je++){const Un=Kt[Be*1254+je];Un&&ue.set(Un,(ue.get(Un)||0)+1)}const jt=[...ue].sort((Be,je)=>je[1]-Be[1])[0][0],oe=document.createElement("canvas");oe.width=ct,oe.height=Bt;const on=oe.getContext("2d"),fe=on.createImageData(ct,Bt);for(let Be=0;Be<Bt;Be++)for(let je=0;je<ct;je++){const Un=(se+Be)*1254+ae+je,qr=(Be*ct+je)*4;Kt[Un]===jt&&fe.data.set(Ae.subarray(Un*4,Un*4+4),qr)}on.putImageData(fe,0,0);const mn=new qo(oe),ve=new Gi({uniforms:{edgeDepth:{value:0},map:{value:mn},crop:{value:Ht},time:{value:0},snake:{value:0},outfit:{value:0},facing:{value:1},dissolve:{value:0}},vertexShader:j2,fragmentShader:Z2,transparent:!0,depthWrite:!1,side:Ki}),Re=new gi(new Gr(1,1,24,24),ve);ut.add(Re);const Ge=[],he=[],Ve=[];for(let Be=1;Be<Bt;Be+=3)for(let je=1;je<ct;je+=3){const Un=((se+Be)*1254+ae+je)*4;Ae[Un+3]<120||Kt[Un/4]!==jt||(Ge.push(je/ct-.5,.5-Be/Bt,0),he.push(Ae[Un]/255,Ae[Un+1]/255,Ae[Un+2]/255),Ve.push(je/ct,1-Be/Bt))}const Ze=new Li;Ze.setAttribute("position",new Zn(Ge,3)),Ze.setAttribute("color",new Zn(he,3)),Ze.setAttribute("seed",new Zn(Ve,2));const In=new Gi({transparent:!0,depthWrite:!1,uniforms:{dissolve:{value:0}},vertexShader:`
     attribute vec3 color;attribute vec2 seed;varying vec3 c;varying float alpha;uniform float dissolve;
     ${Ev}
     void main(){float f=field(seed);float age=max(0.,dissolve-f);
      alpha=step(f,dissolve)*(1.-smoothstep(0.,.24,age));
      vec3 p=position+vec3(age*(hash(seed)*2.-1.)*.65,age*(1.5+hash(seed.yx)*2.),age*.2);
      c=color;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=1.25*(1.-age);}
    `,fragmentShader:"varying vec3 c;varying float alpha;void main(){float soft=1.-smoothstep(.15,.5,length(gl_PointCoord-.5));gl_FragColor=vec4(c,alpha*soft*.8);}"}),an=new cg(Ze,In);ut.add(an),Nt.push({mesh:Re,points:an,owner:jt,ownTexture:mn,rect:Ut.rect,home:new pt,offset:new we,velocity:new we,baseScale:1,hover:!1})}),Xi.load(Ta.extras,Ut=>{if(v){Ut.dispose();return}[{name:["RS7 model","RS7 车模"],rect:[0,380,575,400],size:2.8,x:0,y:0,z:.5},{name:["NF800 Pro racket","NF800 Pro 球拍"],rect:[575,75,350,875],size:1.15,x:0,y:0,z:.5},{name:["Chaoshan beef hotpot","潮汕牛肉火锅"],rect:[930,275,606,620],size:2.15,x:0,y:0,z:.5}].forEach(ae=>{const[se,ct,Bt,Ht]=ae.rect,ue=document.createElement("canvas");ue.width=Bt,ue.height=Ht;const jt=ue.getContext("2d");jt.drawImage(Ut.image,se,ct,Bt,Ht,0,0,Bt,Ht);const oe=jt.getImageData(0,0,Bt,Ht),on=new Uint8Array(Bt*Ht),fe=[];for(let an=0;an<Bt;an++)fe.push(an,(Ht-1)*Bt+an);for(let an=0;an<Ht;an++)fe.push(an*Bt,an*Bt+Bt-1);for(let an=0;an<fe.length;an++){const Be=fe[an];if(on[Be])continue;on[Be]=1;const je=Be*4;if(Math.min(oe.data[je],oe.data[je+1],oe.data[je+2])<234)continue;oe.data[je+3]=0;const Un=Be%Bt,qr=Math.floor(Be/Bt);Un&&fe.push(Be-1),Un<Bt-1&&fe.push(Be+1),qr&&fe.push(Be-Bt),qr<Ht-1&&fe.push(Be+Bt)}jt.putImageData(oe,0,0);const mn=new qo(ue),ve=Nt[1].mesh.material.clone();ve.uniforms.map.value=mn;const Re=new gi(new Gr(1,1),ve);Re.visible=!1,ut.add(Re);const Ge=[],he=[],Ve=[];for(let an=1;an<Ht;an+=3)for(let Be=1;Be<Bt;Be+=3){const je=(an*Bt+Be)*4;oe.data[je+3]<120||(Ge.push(Be/Bt-.5,.5-an/Ht,0),he.push(oe.data[je]/255,oe.data[je+1]/255,oe.data[je+2]/255),Ve.push(Be/Bt,1-an/Ht))}const Ze=new Li;Ze.setAttribute("position",new Zn(Ge,3)),Ze.setAttribute("color",new Zn(he,3)),Ze.setAttribute("seed",new Zn(Ve,2));const In=new cg(Ze,Nt[1].points.material.clone());In.visible=!1,ut.add(In),Nt.push({definition:ae,mesh:Re,points:In,ownTexture:mn,rect:[0,0,Bt,Ht],hitWidth:Bt,hitHeight:Ht,hitPixels:oe.data,home:new pt,offset:new we,velocity:new we,baseScale:1,hover:!1})}),Ut.dispose(),i.current.dataset.items=String(Nt.length-1),_n()},void 0,()=>{v||C(b.current==="zh"?"新增物件加载失败，请刷新":"Extra items could not load. Please refresh.")}),Xi.load(Ta.poses,Ut=>{if(v){Ut.dispose();return}const Xt=Ut.image.width/4,ae=Ut.image.height/3;for(let se=0;se<3;se++)for(let ct=0;ct<4;ct++){const Bt=document.createElement("canvas");Bt.width=Math.floor(Xt),Bt.height=Math.floor(ae);const Ht=Bt.getContext("2d");Ht.drawImage(Ut.image,ct*Xt,se*ae,Xt,ae,0,0,Bt.width,Bt.height);const ue=Bt.width,jt=Bt.height,oe=Ht.getImageData(0,0,ue,jt),on=new Uint8Array(ue*jt),fe=[];for(let ve=0;ve<ue;ve++)fe.push(ve,(jt-1)*ue+ve);for(let ve=0;ve<jt;ve++)fe.push(ve*ue,ve*ue+ue-1);for(let ve=0;ve<fe.length;ve++){const Re=fe[ve];if(on[Re])continue;on[Re]=1;const Ge=Re*4;if(Math.min(oe.data[Ge],oe.data[Ge+1],oe.data[Ge+2])<230)continue;oe.data[Ge+3]=0;const he=Re%ue,Ve=Math.floor(Re/ue);he>0&&fe.push(Re-1),he<ue-1&&fe.push(Re+1),Ve>0&&fe.push(Re-ue),Ve<jt-1&&fe.push(Re+ue)}Ht.putImageData(oe,0,0);const mn=new qo(Bt);le.push(mn)}Ut.dispose(),g(!0),_n()},void 0,()=>m(!0)),_n()},void 0,()=>{v||m(!0)});function _i(){T=P.matches,i.current.classList.toggle("sky-play--still",T),ea(),cn()}const D=new IntersectionObserver(([B])=>{W=B.isIntersecting,E.stop(),pe=0,W&&cn()});D.observe(i.current);const K=new ResizeObserver(_n);K.observe(q);let lt;function nt(){Rn(),$(),cn()}function $(){lt==null||lt.removeEventListener("change",nt),lt=matchMedia(`(resolution: ${devicePixelRatio}dppx)`),lt.addEventListener("change",nt)}return $(),window.addEventListener("scroll",ea,{passive:!0}),window.addEventListener("resize",_n),P.addEventListener("change",_i),document.addEventListener("visibilitychange",ki),window.addEventListener("blur",zn),document.addEventListener("pointermove",Xr),document.addEventListener("pointerout",pr),q.addEventListener("pointerenter",qn),q.addEventListener("pointerdown",pn),q.addEventListener("pointermove",qn),q.addEventListener("pointerup",zn),q.addEventListener("pointercancel",zn),q.addEventListener("pointerleave",dr),l.current={act:Ft,setErasing:B=>{zn(),S.current=B,_(B),q.dataset.erasing=String(B),q.style.touchAction=B?"none":"pan-y"},reveal:()=>{i.current.dataset.revealed==="true"?ze():He.reveal()},reset:()=>{ze(),wt=0,_t=0,mt=0,ee=0,$t=0,Nt.forEach(B=>{B.offset.set(0,0),B.velocity.set(0,0),B.held=!1,B.released=!1}),qt.set(0,0),cn()},nudge:(B,tt)=>{const it=Nt[B];it&&(it.held=!0,it.offset.x=Vn.clamp(it.offset.x+(tt==="ArrowRight"?.2:tt==="ArrowLeft"?-.2:0),-2,2),it.offset.y=Vn.clamp(it.offset.y+(tt==="ArrowUp"?.2:tt==="ArrowDown"?-.2:0),-2,2),cn())},release:()=>{Nt.forEach(B=>B.held=!1),cn()}},_i(),_n(),()=>{v=!0,E.dispose(),He.dispose(),_e.dispose(),D.disconnect(),K.disconnect(),lt==null||lt.removeEventListener("change",nt),window.removeEventListener("scroll",ea),window.removeEventListener("resize",_n),i.current&&delete i.current.__pocketDebug,P.removeEventListener("change",_i),document.removeEventListener("visibilitychange",ki),window.removeEventListener("blur",zn),document.removeEventListener("pointermove",Xr),document.removeEventListener("pointerout",pr),q.removeEventListener("pointerenter",qn),q.removeEventListener("pointerdown",pn),q.removeEventListener("pointermove",qn),q.removeEventListener("pointerup",zn),q.removeEventListener("pointercancel",zn),q.removeEventListener("pointerleave",dr),dt.dispose(),W2(ut,N,[Zt,Jt,...k,...le,...Nt.map(B=>B.ownTexture)]),J.length=0,ht.held=null,Nt.length=0,k.length=0,le.length=0,Ae=Kt=null,l.current=null}},[]),Gt.jsx("section",{className:"sky-play",ref:i,"aria-label":s==="zh"?"我的兴趣空间":"A few things I love",style:{"--pocket-hidden-sky":`url("${Ta.hiddenSky}")`,"--pocket-terrain":`url("${Ta.terrain}")`},children:Gt.jsxs("div",{className:"sky-play__stage",children:[Gt.jsx("div",{className:"sky-play__backdrop"}),Gt.jsx("canvas",{className:"sky-play__wipe",ref:c,"aria-hidden":"true"}),Gt.jsx("canvas",{className:"sky-play__backlight",ref:h,"aria-hidden":"true"}),Gt.jsx("div",{className:"sky-play__ground"}),Gt.jsx("div",{className:"sky-play__editorial",children:Gt.jsx("h1",{children:"POCKET PLANET"})}),Gt.jsx("div",{className:"sky-play__canvas",ref:r,"aria-hidden":"true"}),(!p||d)&&Gt.jsx("p",{className:"sky-play__loading",role:"status",children:d?s==="zh"?"场景加载失败，请刷新重试。":"Scene could not load. Please refresh.":s==="zh"?"正在打开口袋星球…":"Opening Pocket Planet…"}),Gt.jsx("div",{className:"sky-play__actions","aria-label":s==="zh"?"小蛇互动":"Meet the snake",children:[["left","向左走","Walk left"],["head","换表情","Change mood"],["body","换装","Change outfit"],["pocket","掏口袋","Pocket surprise"],["right","向右走","Walk right"]].map(([v,N,L])=>Gt.jsxs("button",{"data-scene-action":v,"aria-label":s==="zh"?N:L,onFocus:()=>M(v==="pocket"),onBlur:()=>M(!1),onMouseEnter:()=>M(v==="pocket"),onMouseLeave:()=>M(!1),onClick:()=>{var O;return(O=l.current)==null?void 0:O.act(v)},children:[Gt.jsx("span",{className:"sky-play__action-full",children:s==="zh"?N:L}),Gt.jsx("span",{className:"sky-play__action-short","aria-hidden":"true",children:{left:"←",right:"→",head:s==="zh"?"表情":"Mood",body:s==="zh"?"换装":"Outfit",pocket:s==="zh"?"口袋":"Pocket"}[v]})]},v))}),Gt.jsxs("div",{className:"sky-play__controls",children:[Gt.jsxs("button",{className:"sky-play__eraser","data-scene-action":"eraser","aria-pressed":x,"aria-label":s==="zh"?"橡皮擦：在背景上拖动擦除":"Eraser: drag on the background to erase",onClick:()=>{var v;return(v=l.current)==null?void 0:v.setErasing(!x)},children:[Gt.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[Gt.jsx("path",{d:"m4 14 9-10a2 2 0 0 1 3 0l5 5a2 2 0 0 1 0 3l-8 9H8l-4-4a2 2 0 0 1 0-3Z"}),Gt.jsx("path",{d:"m9 9 8 8M12 21h10"})]}),s==="zh"?"橡皮擦":"Eraser"]}),Gt.jsxs("button",{onClick:t,children:[s==="zh"?"查看作品":"Selected work"," ↓"]})]})]})})}const jo=[{id:"tiny",slug:"ai-narrative-platform",title:"Tiny Stories",subtitle:"RPG Demo",color:"#f5d78c",ink:"#36213f",medium:["AI · Interactive storytelling","AI · 互动叙事"],summary:["From a story seed to a world you can edit, publish and play.","从一个故事种子，到可以编辑、发布与游玩的世界。"],video:"/assets/tiny-stories-demo.mp4",poster:"/assets/tiny-stories-video-poster.jpg",repository:"https://github.com/lishehao/RPG_Demo",live:"https://rpg.shehao.app",steps:[["Seed","构思"],["Author","创作"],["Play","游玩"]],features:[["An editor, not a black box","不止生成，更能编辑","Author Copilot turns natural-language requests into proposed changes, with a preview diff and apply / undo workflow.","Author Copilot 将自然语言修改转成提案，经过差异预览，再应用或撤销。"],["State that survives the session","状态可保存，也可恢复","Author jobs, play sessions and checkpoints persist across restarts. Structured contracts separate the editor from the agent runtime.","创作任务、游玩会话与检查点支持持久化恢复；编辑器与智能体运行时通过结构化契约解耦。"],["A product loop you can evaluate","让产品流程可评测","Multi-stage authoring and play workflows connect structured validation, repair, telemetry and end-to-end benchmark runs.","多阶段创作与游玩流程连接结构化校验、修复、运行记录和端到端评测。"]],stack:"React · TypeScript · FastAPI · LangGraph · PostgreSQL"},{id:"auto",slug:"auto-load-off-test",title:"Auto Load-Off Test",subtitle:"Laboratory tools",color:"#cbd1ad",ink:"#253b31",medium:["Python · Instrument automation","Python · 仪器自动化"],summary:["Turn a repeated lab procedure into a run you can configure, inspect and reproduce.","把重复的实验室操作，变成可配置、可检查、可复现的测试流程。"],video:"/assets/hyperframe-replay.mp4",poster:"/assets/hyperframe-video-poster.jpg",repository:"https://github.com/lishehao/auto-load-off-test",note:["Illustrative Hyperframe replay · simulated measurements","Hyperframe 演示回放 · 测量数据为模拟值"],steps:[["Configure","配置"],["Measure","测量"],["Export","导出"]],features:[["One repeatable run","一套可重复执行的流程","Configure and orchestrate an arbitrary waveform generator and oscilloscope through a focused operator interface.","通过统一操作界面配置并控制任意波形发生器与示波器。"],["Failures are part of the workflow","把异常处理纳入流程","Validation, logging, retries and timeouts make failures visible instead of leaving them inside a one-off script.","通过校验、日志、重试与超时处理，让异常可见、可追踪。"],["Evidence you can take away","结果可以带走，也能比较","Structured logs and CSV / MAT exports support later inspection and comparison across validation runs.","结构化日志与 CSV / MAT 导出，支持测试后的检查和跨轮次比较。"]],stack:"Python · Tkinter · PyVISA · SCPI · CSV / MAT"}],Q2=s=>Math.max(0,Math.min(1,s));function J2(s){const t=Q2((s-.25)/.5),i=t*t*(3-2*t),r=Math.sin(Math.PI*i);return{t:i,outX:-26*i,outScale:1-.045*i,outAngle:-4*i,inX:100*(1-i),shade:.18*r,beam:.23*r,beamX:-45+90*i,active:i<.5?0:1}}const qg=s=>/^\/zh(?:\/|$)/.test(s)?"zh":"en";function $2(s,t){const i=new URL(s);return i.pathname=t==="zh"?"/zh/":"/",i}let Wg=0;function al(s,{history:t=!0,behavior:i,focus:r=!0}={}){const l=document.getElementById(s);if(!l)return;const c=++Wg;window.scrollTo({top:scrollY,behavior:"instant"});const h=s==="top"?"":`#${s}`;t&&location.hash!==h&&window.history.pushState(null,"",`${location.pathname}${location.search}${h}`);const d=new CustomEvent("portfolio:navigate",{cancelable:!0,detail:{id:s,behavior:i??(matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"),focus:r}});window.dispatchEvent(d)&&(s==="top"?(window.scrollTo({top:0,behavior:"instant"}),requestAnimationFrame(()=>{c===Wg&&l.isConnected&&window.scrollTo({top:0,behavior:"instant"})})):l.scrollIntoView({behavior:d.detail.behavior,block:"start"}),r&&l.focus({preventScroll:!0}))}function tT(s,{allowed:t=()=>!0,onState:i=()=>{}}={}){let r=0,l=!1,c=!1,h=!1;const d=()=>{h||i(c&&(l||!s.paused))};function m(){r++,l=!1,c=!1,s.pause(),d()}async function p(){if(h)return;if(l||!s.paused){m();return}if(!t()){m();return}const _=++r;l=!0,c=!0,d();try{if(await s.play(),_!==r||h)return;if(l=!1,!t()){m();return}d()}catch{if(_!==r||h)return;l=!1,c=!1,d()}}function g(){if(!c||h||!t()){m();return}d()}function x(){s.paused&&(r++,l=!1,c=!1,d())}return s.addEventListener("play",g),s.addEventListener("pause",x),s.addEventListener("ended",x),{toggle:p,cancel:m,dispose(){h=!0,m(),s.removeEventListener("play",g),s.removeEventListener("pause",x),s.removeEventListener("ended",x)}}}function eT({project:s,index:t,lang:i}){const r=fn.useRef(null),l=fn.useRef(null),c=fn.useRef(null),[h,d]=fn.useState(!1),m=i==="zh",p=m?1:0;fn.useEffect(()=>{const x=r.current,_=l.current,S=()=>{const L=_.getBoundingClientRect();return!document.hidden&&!x.inert&&L.bottom>0&&L.top<innerHeight&&L.right>0&&L.left<innerWidth},b=tT(_,{allowed:S,onState:d});c.current=b;const A=()=>b.cancel(),M=()=>{S()||A()},v=new IntersectionObserver(M);v.observe(_);const N=new MutationObserver(M);return N.observe(x,{attributes:!0,attributeFilter:["inert","aria-hidden"]}),x.addEventListener("portfolio:room-deactivate",A),document.addEventListener("visibilitychange",M),window.addEventListener("pagehide",A),()=>{v.disconnect(),N.disconnect(),x.removeEventListener("portfolio:room-deactivate",A),document.removeEventListener("visibilitychange",M),window.removeEventListener("pagehide",A),b.dispose(),c.current=null}},[]);const g=t+1<jo.length?`project-${jo[t+1].id}`:"about";return Gt.jsx("article",{ref:r,id:`project-${s.id}`,className:"gallery-room",style:{"--room-color":s.color,"--room-ink":s.ink},"aria-labelledby":`title-${s.id}`,children:Gt.jsxs("div",{className:"gallery-room__sticky",children:[Gt.jsxs("div",{className:"gallery-room__heading",children:[Gt.jsxs("span",{children:[String(t+1).padStart(2,"0")," / ",String(jo.length).padStart(2,"0")]}),Gt.jsx("span",{children:s.medium[p]}),Gt.jsx("span",{children:m?"精选项目":"SELECTED WORK"})]}),Gt.jsxs("div",{className:"gallery-room__exhibit",children:[Gt.jsxs("div",{className:"gallery-room__frame",children:[Gt.jsx("video",{ref:l,controls:h,playsInline:!0,preload:"none",poster:s.poster,children:Gt.jsx("source",{src:s.video,type:"video/mp4"})}),Gt.jsx("button",{className:"gallery-room__play","aria-pressed":h,onClick:()=>{var x;return(x=c.current)==null?void 0:x.toggle()},children:h?m?"暂停演示":"Pause film":m?"播放演示 ↗":"Play film ↗"}),s.note&&Gt.jsx("small",{children:s.note[p]})]}),Gt.jsxs("div",{className:"gallery-room__label",children:[Gt.jsx("p",{children:s.subtitle}),Gt.jsx("h2",{id:`title-${s.id}`,tabIndex:-1,children:s.title}),Gt.jsx("p",{className:"gallery-room__summary",children:s.summary[p]}),Gt.jsx("ol",{className:"gallery-room__steps",children:s.steps.map((x,_)=>Gt.jsxs("li",{children:[Gt.jsxs("span",{children:["0",_+1]}),x[p]]},x[0]))}),Gt.jsxs("div",{className:"gallery-room__links",children:[Gt.jsx("a",{href:`${m?"/zh":""}/projects/${s.slug}/`,children:m?"完整项目介绍 ↗":"Read case study ↗"}),Gt.jsx("a",{href:s.repository,target:"_blank",rel:"noopener noreferrer",children:"GitHub ↗"}),s.live&&Gt.jsx("a",{href:s.live,target:"_blank",rel:"noopener noreferrer",children:m?"体验产品 ↗":"Try it ↗"})]})]})]}),Gt.jsxs("div",{className:"gallery-room__details",children:[s.features.map(x=>Gt.jsxs("details",{children:[Gt.jsx("summary",{children:x[p]}),Gt.jsx("p",{children:x[2+p]})]},x[0])),Gt.jsx("small",{children:s.stack})]}),Gt.jsxs("a",{className:"gallery-room__next",onClick:x=>{x.button===0&&!x.metaKey&&!x.ctrlKey&&!x.shiftKey&&!x.altKey&&(x.preventDefault(),al(g))},href:`#${g}`,children:[t+1<jo.length?m?"下一间展厅":"Next gallery":m?"关于我":"About me"," ↓"]})]})})}function nT({lang:s}){const t=fn.useRef(null);return fn.useEffect(()=>{const i=t.current,r=[...i.querySelectorAll(".gallery-room")],l=r.map(et=>et.querySelector(".gallery-room__sticky")),c=matchMedia("(max-width: 760px), (max-height: 650px)"),h=matchMedia("(prefers-reduced-motion: reduce)"),d=()=>`${c.matches}:${h.matches}`;let m=0,p=0,g=0,x=null,_=0,S=!1,b=null,A=null,M=null,v=!1,N=null,L=null,O=!1,P=d();const T=et=>r[et].querySelector("h2");function U(et){const bt=document.activeElement;r[et].inert=!1,r[et].removeAttribute("aria-hidden"),r[et].style.visibility="visible",r.some((zt,J)=>J!==et&&zt.contains(bt))&&T(et).focus({preventScroll:!0}),_=et,r.forEach((zt,J)=>{J!==et&&zt.dispatchEvent(new Event("portfolio:room-deactivate")),zt.inert=J!==et,zt.setAttribute("aria-hidden",String(J!==et))})}function W(){if(p||d()!==P)return;const et=i.getBoundingClientRect(),bt=document.getElementById("about"),zt=bt.getBoundingClientRect();if(bt.contains(document.activeElement)&&zt.top<innerHeight&&zt.bottom>0){N={index:null,node:bt,y:zt.top};return}if(et.top>=innerHeight||et.bottom<=0){const qt=document.getElementById("about"),de=qt.getBoundingClientRect();N=et.bottom<=0&&de.top<innerHeight&&de.bottom>0?{index:null,node:qt,y:de.top}:null;return}const J=document.activeElement,ht=r.findIndex(qt=>qt.contains(J)),Pt=ht>=0?ht:S?_:Math.max(0,r.findIndex(qt=>qt.getBoundingClientRect().bottom>0)),Nt=J!=null&&J.matches("summary")&&i.contains(J)?J:l[Pt];N={index:Pt,node:Nt,y:Nt.getBoundingClientRect().top}}function w(){S=!1,i.classList.remove("project-gallery--motion"),r.forEach(et=>{et.style.transform="",et.style.visibility="",et.inert=!1,et.removeAttribute("aria-hidden")})}function C(){if(m=0,!(O||document.hidden)){if(S){const et=i.getBoundingClientRect(),bt=J2(-et.top/Math.max(1,et.height-innerHeight));r[0].style.transform=`translate3d(${bt.outX}%,0,0) scale(${bt.outScale}) rotateY(${bt.outAngle}deg)`,r[1].style.transform=`translate3d(${bt.inX}%,0,0)`,_!==bt.active&&U(bt.active),r[0].style.visibility=bt.t===1?"hidden":"visible",r[1].style.visibility=bt.t===0?"hidden":"visible",i.style.setProperty("--handoff-shade",bt.shade),i.style.setProperty("--handoff-light",bt.beam),i.style.setProperty("--handoff-light-x",`${bt.beamX}%`)}b&&Math.abs(scrollY-b.top)<3&&(b.focus&&T(b.index).focus({preventScroll:!0}),b=null),W()}}function G(){!m&&!document.hidden&&(m=requestAnimationFrame(C))}function q(et){return S?scrollY+i.getBoundingClientRect().top+(i.offsetHeight-innerHeight)*(et===1?.76:0):scrollY+r[et].getBoundingClientRect().top}function at(){p||(L=N,b=null,cancelAnimationFrame(m),m=0,p=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>{if(p=0,O)return;P=d(),M=L,L=null,dt();const et=A;A=null,et&&al(et.id,{...et,history:!1})})}))}function dt(){if(O||p)return;if(d()!==P){at();return}const et=M||N,bt=!!M;M=null,i.classList.toggle("project-gallery--reading",v);const zt=l.every(ht=>{const Pt=ht.getBoundingClientRect();return ht.scrollHeight<=innerHeight+2&&Pt.height<=innerHeight+2}),J=!c.matches&&!h.matches&&!v&&!i.querySelector("details[open]")&&zt&&r.length===2;J!==S?(J?(S=!0,i.classList.add("project-gallery--motion"),U((et==null?void 0:et.index)??0)):w(),et&&(S&&et.index!==null?(window.scrollTo({top:q(et.index),behavior:"instant"}),C()):window.scrollTo({top:scrollY+et.node.getBoundingClientRect().top-et.y,behavior:"instant"}))):et&&!S&&(bt||c.matches||h.matches||d()!==P)&&window.scrollTo({top:scrollY+et.node.getBoundingClientRect().top-et.y,behavior:"instant"}),b&&(b.top=q(b.index)),P=d(),C(),bt&&(cancelAnimationFrame(g),x=et,g=requestAnimationFrame(()=>{g=0,ut()}))}function ut(){const et=x;x=null,et&&!O&&(window.scrollTo({top:scrollY+et.node.getBoundingClientRect().top-et.y,behavior:"instant"}),C())}function F(et){if(cancelAnimationFrame(g),g=0,x=null,p){et.preventDefault(),A=et.detail,L=null;return}const{id:bt,behavior:zt,focus:J}=et.detail,ht=bt==="work"?0:r.findIndex(Nt=>Nt.id===bt);if(b=null,ht<0){bt==="top"&&!i.querySelector("details[open]")&&(v=!1,dt());return}et.preventDefault(),i.querySelector("details[open]")||(v=!1),dt();const Pt=q(ht);b={index:ht,top:Pt,focus:J},window.scrollTo({top:Pt,behavior:zt}),zt==="instant"&&C()}function j(et){var J,ht;const bt=(ht=(J=et.target).closest)==null?void 0:ht.call(J,"summary");if(!bt||et.type==="keydown"&&!["Enter"," "].includes(et.key))return;cancelAnimationFrame(g),g=0,ut(),M&&dt(),M={index:r.findIndex(Pt=>Pt.contains(bt)),node:bt,y:bt.getBoundingClientRect().top},v=!0,b=null}function Z(){dt()}function Mt(){document.hidden?(cancelAnimationFrame(m),m=0,b=null,r.forEach(et=>et.dispatchEvent(new Event("portfolio:room-deactivate")))):G()}function Et(){b=null,cancelAnimationFrame(g),g=0,x=null}const I=new ResizeObserver(dt);l.forEach(et=>I.observe(et)),I.observe(document.querySelector(".sky-play")),addEventListener("scroll",G,{passive:!0}),addEventListener("scrollend",W),addEventListener("resize",dt),addEventListener("portfolio:navigate",F),addEventListener("wheel",Et,{passive:!0}),addEventListener("touchstart",Et,{passive:!0}),c.addEventListener("change",at),h.addEventListener("change",at),document.addEventListener("visibilitychange",Mt),i.addEventListener("click",j,!0),i.addEventListener("keydown",j,!0),i.addEventListener("toggle",Z,!0),dt();const st=requestAnimationFrame(()=>{location.hash&&al(location.hash.slice(1),{history:!1,behavior:"instant",focus:!1})});return()=>{O=!0,cancelAnimationFrame(m),cancelAnimationFrame(p),cancelAnimationFrame(g),cancelAnimationFrame(st),I.disconnect(),removeEventListener("scroll",G),removeEventListener("scrollend",W),removeEventListener("resize",dt),removeEventListener("portfolio:navigate",F),removeEventListener("wheel",Et),removeEventListener("touchstart",Et),c.removeEventListener("change",at),h.removeEventListener("change",at),document.removeEventListener("visibilitychange",Mt),i.removeEventListener("click",j,!0),i.removeEventListener("keydown",j,!0),i.removeEventListener("toggle",Z,!0),w()}},[]),Gt.jsx("section",{ref:t,id:"work",className:"project-gallery",tabIndex:-1,"aria-label":s==="zh"?"项目画廊":"Project gallery",children:Gt.jsxs("div",{className:"project-gallery__stage",children:[jo.map((i,r)=>Gt.jsx(eT,{project:i,index:r,lang:s},i.id)),Gt.jsxs("div",{className:"gallery-handoff","aria-hidden":"true",children:[Gt.jsx("div",{className:"gallery-handoff__shade"}),Gt.jsx("div",{className:"gallery-handoff__light"})]})]})})}function iT(){const[s,t]=fn.useState(()=>qg(location.pathname)),i=s==="zh";fn.useEffect(()=>{document.documentElement.lang=i?"zh-CN":"en",document.title="Shehao Li — Selected Work"},[i]),fn.useEffect(()=>{const c=history.scrollRestoration,h=()=>{t(qg(location.pathname)),al(location.hash.slice(1)||"top",{history:!1,behavior:"instant"})};return history.scrollRestoration="manual",addEventListener("popstate",h),addEventListener("hashchange",h),()=>{removeEventListener("popstate",h),removeEventListener("hashchange",h),history.scrollRestoration=c}},[]);const r=c=>al(c);function l(){const c=i?"en":"zh";history.pushState(null,"",$2(location.href,c)),t(c)}return Gt.jsxs("main",{className:"daybook",children:[Gt.jsxs("header",{id:"top",className:"daybook-header",tabIndex:-1,children:[Gt.jsx("button",{className:"daybook-wordmark",type:"button",onClick:()=>r("top"),children:"SHEHAO LI"}),Gt.jsxs("nav",{"aria-label":i?"主导航":"Primary navigation",children:[Gt.jsx("button",{onClick:()=>r("work"),children:i?"作品":"Work"}),Gt.jsx("a",{href:"/resume/",children:i?"简历":"Resume"}),Gt.jsx("button",{onClick:()=>r("about"),children:i?"关于":"About"})]}),Gt.jsxs("div",{className:"daybook-header__links",children:[Gt.jsxs("a",{className:"daybook-github",href:"https://github.com/lishehao",target:"_blank",rel:"noopener noreferrer",children:[Gt.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:Gt.jsx("path",{fill:"currentColor",d:"M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.65 1.23 3.29.94.1-.73.4-1.23.72-1.51-2.5-.29-5.13-1.25-5.13-5.55 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16A10.7 10.7 0 0 1 12 6.13c.95 0 1.9.13 2.8.38 2.14-1.45 3.08-1.16 3.08-1.16.61 1.55.23 2.69.11 2.98.72.79 1.15 1.8 1.15 3.03 0 4.32-2.64 5.26-5.15 5.54.4.35.76 1.04.76 2.1v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"})}),Gt.jsx("span",{children:"GitHub"})]}),Gt.jsx("button",{className:"daybook-language",onClick:l,"aria-label":i?"Switch to English":"切换为中文",children:i?"EN":"中文"})]})]}),Gt.jsx(K2,{lang:s,onWork:()=>r("work")}),Gt.jsx(nT,{lang:s}),Gt.jsxs("section",{id:"about",className:"daybook-about",tabIndex:-1,children:[Gt.jsx("div",{children:Gt.jsx("h2",{children:i?"先好奇，再把它做出来。":"Curious, then concrete."})}),Gt.jsxs("div",{className:"daybook-about__body",children:[Gt.jsx("p",{children:i?"加州大学圣地亚哥分校数学–计算机专业。我做 AI 产品、互动体验，以及让日常工程工作更可靠的工具。":"Math–CS at UC San Diego. I build AI products, interactive experiences, and tools for everyday engineering work."}),Gt.jsx("a",{href:"https://github.com/lishehao",target:"_blank",rel:"noreferrer",children:"GitHub / lishehao ↗"}),Gt.jsx("a",{href:"/resume/",children:i?"查看简历 ↗":"Resume ↗"})]}),Gt.jsx("button",{className:"daybook-top",onClick:()=>r("top"),children:i?"回到顶部":"Back to top"})]}),Gt.jsx("footer",{className:"daybook-footer",children:Gt.jsxs("span",{children:["© ",new Date().getFullYear()," Shehao Li"]})})]})}function aT(){return Gt.jsx(iT,{})}By.createRoot(document.getElementById("root")).render(Gt.jsx(Uy.StrictMode,{children:Gt.jsx(aT,{})}));
