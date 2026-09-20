(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function My(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Kf={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx;function by(){if(Mx)return Oo;Mx=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=t,Oo.jsx=i,Oo.jsxs=i,Oo}var bx;function Ey(){return bx||(bx=1,Kf.exports=by()),Kf.exports}var Yt=Ey(),Qf={exports:{}},Me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex;function Ty(){if(Ex)return Me;Ex=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(I,rt,Tt){this.props=I,this.context=rt,this.refs=M,this.updater=Tt||E}_.prototype.isReactComponent={},_.prototype.setState=function(I,rt){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,rt,"setState")},_.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function L(){}L.prototype=_.prototype;function C(I,rt,Tt){this.props=I,this.context=rt,this.refs=M,this.updater=Tt||E}var N=C.prototype=new L;N.constructor=C,R(N,_.prototype),N.isPureReactComponent=!0;var z=Array.isArray;function U(){}var O={H:null,A:null,T:null,S:null},et=Object.prototype.hasOwnProperty;function D(I,rt,Tt){var Nt=Tt.ref;return{$$typeof:s,type:I,key:rt,ref:Nt!==void 0?Nt:null,props:Tt}}function w(I,rt){return D(I.type,rt,I.props)}function V(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function j(I){var rt={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Tt){return rt[Tt]})}var st=/\/+/g;function dt(I,rt){return typeof I=="object"&&I!==null&&I.key!=null?j(""+I.key):rt.toString(36)}function lt(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(U,U):(I.status="pending",I.then(function(rt){I.status==="pending"&&(I.status="fulfilled",I.value=rt)},function(rt){I.status==="pending"&&(I.status="rejected",I.reason=rt)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,rt,Tt,Nt,kt){var Q=typeof I;(Q==="undefined"||Q==="boolean")&&(I=null);var ut=!1;if(I===null)ut=!0;else switch(Q){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(I.$$typeof){case s:case t:ut=!0;break;case g:return ut=I._init,F(ut(I._payload),rt,Tt,Nt,kt)}}if(ut)return kt=kt(I),ut=Nt===""?"."+dt(I,0):Nt,z(kt)?(Tt="",ut!=null&&(Tt=ut.replace(st,"$&/")+"/"),F(kt,rt,Tt,"",function(ee){return ee})):kt!=null&&(V(kt)&&(kt=w(kt,Tt+(kt.key==null||I&&I.key===kt.key?"":(""+kt.key).replace(st,"$&/")+"/")+ut)),rt.push(kt)),1;ut=0;var Ft=Nt===""?".":Nt+":";if(z(I))for(var Xt=0;Xt<I.length;Xt++)Nt=I[Xt],Q=Ft+dt(Nt,Xt),ut+=F(Nt,rt,Tt,Q,kt);else if(Xt=S(I),typeof Xt=="function")for(I=Xt.call(I),Xt=0;!(Nt=I.next()).done;)Nt=Nt.value,Q=Ft+dt(Nt,Xt++),ut+=F(Nt,rt,Tt,Q,kt);else if(Q==="object"){if(typeof I.then=="function")return F(lt(I),rt,Tt,Nt,kt);throw rt=String(I),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return ut}function $(I,rt,Tt){if(I==null)return I;var Nt=[],kt=0;return F(I,Nt,"","",function(Q){return rt.call(Tt,Q,kt++)}),Nt}function K(I){if(I._status===-1){var rt=I._result;rt=rt(),rt.then(function(Tt){(I._status===0||I._status===-1)&&(I._status=1,I._result=Tt)},function(Tt){(I._status===0||I._status===-1)&&(I._status=2,I._result=Tt)}),I._status===-1&&(I._status=0,I._result=rt)}if(I._status===1)return I._result.default;throw I._result}var _t=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Mt={map:$,forEach:function(I,rt,Tt){$(I,function(){rt.apply(this,arguments)},Tt)},count:function(I){var rt=0;return $(I,function(){rt++}),rt},toArray:function(I){return $(I,function(rt){return rt})||[]},only:function(I){if(!V(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Me.Activity=x,Me.Children=Mt,Me.Component=_,Me.Fragment=i,Me.Profiler=l,Me.PureComponent=C,Me.StrictMode=r,Me.Suspense=m,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,Me.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},Me.cache=function(I){return function(){return I.apply(null,arguments)}},Me.cacheSignal=function(){return null},Me.cloneElement=function(I,rt,Tt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Nt=R({},I.props),kt=I.key;if(rt!=null)for(Q in rt.key!==void 0&&(kt=""+rt.key),rt)!et.call(rt,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&rt.ref===void 0||(Nt[Q]=rt[Q]);var Q=arguments.length-2;if(Q===1)Nt.children=Tt;else if(1<Q){for(var ut=Array(Q),Ft=0;Ft<Q;Ft++)ut[Ft]=arguments[Ft+2];Nt.children=ut}return D(I.type,kt,Nt)},Me.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},Me.createElement=function(I,rt,Tt){var Nt,kt={},Q=null;if(rt!=null)for(Nt in rt.key!==void 0&&(Q=""+rt.key),rt)et.call(rt,Nt)&&Nt!=="key"&&Nt!=="__self"&&Nt!=="__source"&&(kt[Nt]=rt[Nt]);var ut=arguments.length-2;if(ut===1)kt.children=Tt;else if(1<ut){for(var Ft=Array(ut),Xt=0;Xt<ut;Xt++)Ft[Xt]=arguments[Xt+2];kt.children=Ft}if(I&&I.defaultProps)for(Nt in ut=I.defaultProps,ut)kt[Nt]===void 0&&(kt[Nt]=ut[Nt]);return D(I,Q,kt)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(I){return{$$typeof:d,render:I}},Me.isValidElement=V,Me.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:K}},Me.memo=function(I,rt){return{$$typeof:p,type:I,compare:rt===void 0?null:rt}},Me.startTransition=function(I){var rt=O.T,Tt={};O.T=Tt;try{var Nt=I(),kt=O.S;kt!==null&&kt(Tt,Nt),typeof Nt=="object"&&Nt!==null&&typeof Nt.then=="function"&&Nt.then(U,_t)}catch(Q){_t(Q)}finally{rt!==null&&Tt.types!==null&&(rt.types=Tt.types),O.T=rt}},Me.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},Me.use=function(I){return O.H.use(I)},Me.useActionState=function(I,rt,Tt){return O.H.useActionState(I,rt,Tt)},Me.useCallback=function(I,rt){return O.H.useCallback(I,rt)},Me.useContext=function(I){return O.H.useContext(I)},Me.useDebugValue=function(){},Me.useDeferredValue=function(I,rt){return O.H.useDeferredValue(I,rt)},Me.useEffect=function(I,rt){return O.H.useEffect(I,rt)},Me.useEffectEvent=function(I){return O.H.useEffectEvent(I)},Me.useId=function(){return O.H.useId()},Me.useImperativeHandle=function(I,rt,Tt){return O.H.useImperativeHandle(I,rt,Tt)},Me.useInsertionEffect=function(I,rt){return O.H.useInsertionEffect(I,rt)},Me.useLayoutEffect=function(I,rt){return O.H.useLayoutEffect(I,rt)},Me.useMemo=function(I,rt){return O.H.useMemo(I,rt)},Me.useOptimistic=function(I,rt){return O.H.useOptimistic(I,rt)},Me.useReducer=function(I,rt,Tt){return O.H.useReducer(I,rt,Tt)},Me.useRef=function(I){return O.H.useRef(I)},Me.useState=function(I){return O.H.useState(I)},Me.useSyncExternalStore=function(I,rt,Tt){return O.H.useSyncExternalStore(I,rt,Tt)},Me.useTransition=function(){return O.H.useTransition()},Me.version="19.2.0",Me}var Tx;function Td(){return Tx||(Tx=1,Qf.exports=Ty()),Qf.exports}var dn=Td();const Ay=My(dn);var Jf={exports:{}},Po={},$f={exports:{}},th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax;function Ry(){return Ax||(Ax=1,(function(s){function t(F,$){var K=F.length;F.push($);t:for(;0<K;){var _t=K-1>>>1,Mt=F[_t];if(0<l(Mt,$))F[_t]=$,F[K]=Mt,K=_t;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var $=F[0],K=F.pop();if(K!==$){F[0]=K;t:for(var _t=0,Mt=F.length,I=Mt>>>1;_t<I;){var rt=2*(_t+1)-1,Tt=F[rt],Nt=rt+1,kt=F[Nt];if(0>l(Tt,K))Nt<Mt&&0>l(kt,Tt)?(F[_t]=kt,F[Nt]=K,_t=Nt):(F[_t]=Tt,F[rt]=K,_t=rt);else if(Nt<Mt&&0>l(kt,K))F[_t]=kt,F[Nt]=K,_t=Nt;else break t}}return $}function l(F,$){var K=F.sortIndex-$.sortIndex;return K!==0?K:F.id-$.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,v=3,S=!1,E=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function N(F){for(var $=i(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=F)r(p),$.sortIndex=$.expirationTime,t(m,$);else break;$=i(p)}}function z(F){if(R=!1,N(F),!E)if(i(m)!==null)E=!0,U||(U=!0,j());else{var $=i(p);$!==null&&lt(z,$.startTime-F)}}var U=!1,O=-1,et=5,D=-1;function w(){return M?!0:!(s.unstable_now()-D<et)}function V(){if(M=!1,U){var F=s.unstable_now();D=F;var $=!0;try{t:{E=!1,R&&(R=!1,L(O),O=-1),S=!0;var K=v;try{e:{for(N(F),x=i(m);x!==null&&!(x.expirationTime>F&&w());){var _t=x.callback;if(typeof _t=="function"){x.callback=null,v=x.priorityLevel;var Mt=_t(x.expirationTime<=F);if(F=s.unstable_now(),typeof Mt=="function"){x.callback=Mt,N(F),$=!0;break e}x===i(m)&&r(m),N(F)}else r(m);x=i(m)}if(x!==null)$=!0;else{var I=i(p);I!==null&&lt(z,I.startTime-F),$=!1}}break t}finally{x=null,v=K,S=!1}$=void 0}}finally{$?j():U=!1}}}var j;if(typeof C=="function")j=function(){C(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,dt=st.port2;st.port1.onmessage=V,j=function(){dt.postMessage(null)}}else j=function(){_(V,0)};function lt(F,$){O=_(function(){F(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):et=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(F){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var K=v;v=$;try{return F()}finally{v=K}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var K=v;v=F;try{return $()}finally{v=K}},s.unstable_scheduleCallback=function(F,$,K){var _t=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?_t+K:_t):K=_t,F){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=K+Mt,F={id:g++,callback:$,priorityLevel:F,startTime:K,expirationTime:Mt,sortIndex:-1},K>_t?(F.sortIndex=K,t(p,F),i(m)===null&&F===i(p)&&(R?(L(O),O=-1):R=!0,lt(z,K-_t))):(F.sortIndex=Mt,t(m,F),E||S||(E=!0,U||(U=!0,j()))),F},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(F){var $=v;return function(){var K=v;v=$;try{return F.apply(this,arguments)}finally{v=K}}}})(th)),th}var Rx;function Cy(){return Rx||(Rx=1,$f.exports=Ry()),$f.exports}var eh={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx;function wy(){if(Cx)return Hn;Cx=1;var s=Td();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Hn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Hn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Hn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Hn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Hn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Hn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Hn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Hn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Hn.requestFormReset=function(m){r.d.r(m)},Hn.unstable_batchedUpdates=function(m,p){return m(p)},Hn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Hn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Hn.version="19.2.0",Hn}var wx;function Dy(){if(wx)return eh.exports;wx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),eh.exports=wy(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx;function Uy(){if(Dx)return Po;Dx=1;var s=Cy(),t=Td(),i=Dy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=f;break}if(A===o){y=!0,o=u,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,o=u;break}if(A===o){y=!0,o=f,a=u;break}A=A.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),C=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case U:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case C:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case et:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var lt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},_t=[],Mt=-1;function I(e){return{current:e}}function rt(e){0>Mt||(e.current=_t[Mt],_t[Mt]=null,Mt--)}function Tt(e,n){Mt++,_t[Mt]=e.current,e.current=n}var Nt=I(null),kt=I(null),Q=I(null),ut=I(null);function Ft(e,n){switch(Tt(Q,n),Tt(kt,e),Tt(Nt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?qm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=qm(n),e=Wm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(Nt),Tt(Nt,e)}function Xt(){rt(Nt),rt(kt),rt(Q)}function ee(e){e.memoizedState!==null&&Tt(ut,e);var n=Nt.current,a=Wm(n,e.type);n!==a&&(Tt(kt,e),Tt(Nt,a))}function Se(e){kt.current===e&&(rt(Nt),rt(kt)),ut.current===e&&(rt(ut),Do._currentValue=K)}var an,xt;function Le(e){if(an===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);an=n&&n[1]||"",xt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+e+xt}var B=!1;function ye(e,n){if(!e||B)return"";B=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(ft){var ot=ft}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(ft){ot=ft}e.call(bt.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var G=y.split(`
`),at=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===at.length)for(o=G.length-1,u=at.length-1;1<=o&&0<=u&&G[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==at[u]){var mt=`
`+G[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{B=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Le(a):""}function xe(e,n){switch(e.tag){case 26:case 27:case 5:return Le(e.type);case 16:return Le("Lazy");case 13:return e.child!==n&&n!==null?Le("Suspense Fallback"):Le("Suspense");case 19:return Le("SuspenseList");case 0:case 15:return ye(e.type,!1);case 11:return ye(e.type.render,!1);case 1:return ye(e.type,!0);case 31:return Le("Activity");default:return""}}function Ae(e){try{var n="",a=null;do n+=xe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var jt=Object.prototype.hasOwnProperty,qe=s.unstable_scheduleCallback,ae=s.unstable_cancelCallback,Zt=s.unstable_shouldYield,P=s.unstable_requestPaint,T=s.unstable_now,nt=s.unstable_getCurrentPriorityLevel,gt=s.unstable_ImmediatePriority,Ct=s.unstable_UserBlockingPriority,ct=s.unstable_NormalPriority,te=s.unstable_LowPriority,zt=s.unstable_IdlePriority,Jt=s.log,ne=s.unstable_setDisableYieldValue,At=null,Ut=null;function ie(e){if(typeof Jt=="function"&&ne(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(At,e)}catch{}}var Kt=Math.clz32?Math.clz32:k,qt=Math.log,he=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(qt(e)/he|0)|0}var Ht=256,Pt=262144,It=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Dt(o):(y&=A,y!==0?u=Dt(y):a||(a=A&~e,a!==0&&(u=Dt(a))))):(A=o&~f,A!==0?u=Dt(A):y!==0?u=Dt(y):a||(a=o&~e,a!==0&&(u=Dt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function de(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function ge(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function An(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fn(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,at=e.hiddenUpdates;for(a=y&~a;0<a;){var mt=31-Kt(a),bt=1<<mt;A[mt]=0,G[mt]=-1;var ot=at[mt];if(ot!==null)for(at[mt]=null,mt=0;mt<ot.length;mt++){var ft=ot[mt];ft!==null&&(ft.lane&=-536870913)}a&=~bt}o!==0&&cr(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function cr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Kt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ca(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Kt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function wa(e,n){var a=n&-n;return a=(a&42)!==0?1:Kn(a),(a&(e.suspendedLanes|n))!==0?0:a}function Kn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qn(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:mx(e.type))}function Qi(e,n){var a=$.p;try{return $.p=e,n()}finally{$.p=a}}var Bn=Math.random().toString(36).slice(2),on="__reactFiber$"+Bn,un="__reactProps$"+Bn,Jn="__reactContainer$"+Bn,Bi="__reactEvents$"+Bn,Br="__reactListeners$"+Bn,Hr="__reactHandles$"+Bn,J="__reactResources$"+Bn,pt="__reactMarker$"+Bn;function St(e){delete e[on],delete e[un],delete e[Bi],delete e[Br],delete e[Hr]}function Ot(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Jn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=$m(e);e!==null;){if(a=e[on])return a;e=$m(e)}return n}e=a,a=e.parentNode}return null}function b(e){if(e=e[on]||e[Jn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function H(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function W(e){var n=e[J];return n||(n=e[J]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Z(e){e[pt]=!0}var q=new Set,Et={};function wt(e,n){Y(e,n),Y(e+"Capture",n)}function Y(e,n){for(Et[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Bt={};function Lt(e){return jt.call(Bt,e)?!0:jt.call(Gt,e)?!1:Rt.test(e)?Bt[e]=!0:(Gt[e]=!0,!1)}function le(e,n,a){if(Lt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ve(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ce(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _e(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function De(e){if(!e._valueTracker){var n=_e(e)?"checked":"value";e._valueTracker=Qt(e,n,""+e[n])}}function re(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=_e(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function He(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mn=/[\n"\\]/g;function pe(e){return e.replace(mn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ee(e,n,a,o,u,f,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ce(n)):e.value!==""+ce(n)&&(e.value=""+ce(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Fe(e,y,ce(n)):a!=null?Fe(e,y,ce(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ce(A):e.removeAttribute("name")}function fe(e,n,a,o,u,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){De(e);return}a=a!=null?""+ce(a):"",n=n!=null?""+ce(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),De(e)}function Fe(e,n,a){n==="number"&&He(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ce(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Rn(e,n,a){if(n!=null&&(n=""+ce(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ce(a):""}function Ln(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ce(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),De(e)}function Hi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ji=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ji.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function kd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Vd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Vd(e,f,n[f])}function qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var __=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return v_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $i(){}var Wc=null;function Yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gr=null,Vr=null;function Xd(e){var n=b(e);if(n&&(e=n.stateNode)){var a=e[un]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ee(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[un]||null;if(!u)throw Error(r(90));Ee(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&re(o)}break t;case"textarea":Rn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var jc=!1;function qd(e,n,a){if(jc)return e(n,a);jc=!0;try{var o=e(n);return o}finally{if(jc=!1,(Gr!==null||Vr!==null)&&(kl(),Gr&&(n=Gr,e=Vr,Vr=Gr=null,Xd(n),e)))for(n=0;n<e.length;n++)Xd(e[n])}}function Ws(e,n){var a=e.stateNode;if(a===null)return null;var o=a[un]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(ta)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Zc=!1}var Da=null,Kc=null,il=null;function Wd(){if(il)return il;var e,n=Kc,a=n.length,o,u="value"in Da?Da.value:Da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return il=u.slice(e,1<o?1-o:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Yd(){return!1}function $n(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:Yd,this.isPropagationStopped=Yd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=$n(ur),js=x({},ur,{view:0,detail:0}),y_=$n(js),Qc,Jc,Zs,ol=x({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zs&&(Zs&&e.type==="mousemove"?(Qc=e.screenX-Zs.screenX,Jc=e.screenY-Zs.screenY):Jc=Qc=0,Zs=e),Qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),jd=$n(ol),S_=x({},ol,{dataTransfer:0}),M_=$n(S_),b_=x({},js,{relatedTarget:0}),$c=$n(b_),E_=x({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),T_=$n(E_),A_=x({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R_=$n(A_),C_=x({},ur,{data:0}),Zd=$n(C_),w_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=U_[e])?!!n[e]:!1}function tu(){return L_}var N_=x({},js,{key:function(e){if(e.key){var n=w_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O_=$n(N_),P_=x({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=$n(P_),z_=x({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),I_=$n(z_),F_=x({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),B_=$n(F_),H_=x({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),G_=$n(H_),V_=x({},ur,{newState:0,oldState:0}),k_=$n(V_),X_=[9,13,27,32],eu=ta&&"CompositionEvent"in window,Ks=null;ta&&"documentMode"in document&&(Ks=document.documentMode);var q_=ta&&"TextEvent"in window&&!Ks,Qd=ta&&(!eu||Ks&&8<Ks&&11>=Ks),Jd=" ",$d=!1;function tp(e,n){switch(e){case"keyup":return X_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function W_(e,n){switch(e){case"compositionend":return ep(n);case"keypress":return n.which!==32?null:($d=!0,Jd);case"textInput":return e=n.data,e===Jd&&$d?null:e;default:return null}}function Y_(e,n){if(kr)return e==="compositionend"||!eu&&tp(e,n)?(e=Wd(),il=Kc=Da=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qd&&n.locale!=="ko"?null:n.data;default:return null}}var j_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!j_[e.type]:n==="textarea"}function ip(e,n,a,o){Gr?Vr?Vr.push(o):Vr=[o]:Gr=o,n=Kl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Qs=null,Js=null;function Z_(e){Bm(e,0)}function ll(e){var n=H(e);if(re(n))return e}function ap(e,n){if(e==="change")return n}var rp=!1;if(ta){var nu;if(ta){var iu="oninput"in document;if(!iu){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),iu=typeof sp.oninput=="function"}nu=iu}else nu=!1;rp=nu&&(!document.documentMode||9<document.documentMode)}function op(){Qs&&(Qs.detachEvent("onpropertychange",lp),Js=Qs=null)}function lp(e){if(e.propertyName==="value"&&ll(Js)){var n=[];ip(n,Js,e,Yc(e)),qd(Z_,n)}}function K_(e,n,a){e==="focusin"?(op(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",lp)):e==="focusout"&&op()}function Q_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Js)}function J_(e,n){if(e==="click")return ll(n)}function $_(e,n){if(e==="input"||e==="change")return ll(n)}function tv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var si=typeof Object.is=="function"?Object.is:tv;function $s(e,n){if(si(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!jt.call(n,u)||!si(e[u],n[u]))return!1}return!0}function cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,n){var a=cp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=cp(a)}}function fp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function hp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=He(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=He(e.document)}return n}function au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ev=ta&&"documentMode"in document&&11>=document.documentMode,Xr=null,ru=null,to=null,su=!1;function dp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Xr==null||Xr!==He(o)||(o=Xr,"selectionStart"in o&&au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&$s(to,o)||(to=o,o=Kl(ru,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Xr)))}function fr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},ou={},pp={};ta&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function hr(e){if(ou[e])return ou[e];if(!qr[e])return e;var n=qr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in pp)return ou[e]=n[a];return e}var mp=hr("animationend"),xp=hr("animationiteration"),gp=hr("animationstart"),nv=hr("transitionrun"),iv=hr("transitionstart"),av=hr("transitioncancel"),_p=hr("transitionend"),vp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function Di(e,n){vp.set(e,n),wt(n,[e])}var cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],Wr=0,cu=0;function ul(){for(var e=Wr,n=cu=Wr=0;n<e;){var a=gi[n];gi[n++]=null;var o=gi[n];gi[n++]=null;var u=gi[n];gi[n++]=null;var f=gi[n];if(gi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&yp(a,u,f)}}function fl(e,n,a,o){gi[Wr++]=e,gi[Wr++]=n,gi[Wr++]=a,gi[Wr++]=o,cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function uu(e,n,a,o){return fl(e,n,a,o),hl(e)}function dr(e,n){return fl(e,null,null,n),hl(e)}function yp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Kt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function hl(e){if(50<bo)throw bo=0,yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Yr={};function rv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,n,a,o){return new rv(e,n,a,o)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,n){var a=e.alternate;return a===null?(a=oi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")fu(e)&&(y=1);else if(typeof e=="string")y=uy(e,a,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=oi(31,a,n,u),e.elementType=D,e.lanes=f,e;case R:return pr(a.children,u,f,n);case M:y=8,u|=24;break;case _:return e=oi(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case z:return e=oi(13,a,n,u),e.elementType=z,e.lanes=f,e;case U:return e=oi(19,a,n,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:y=10;break t;case L:y=9;break t;case N:y=11;break t;case O:y=14;break t;case et:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=oi(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function pr(e,n,a,o){return e=oi(7,e,o,n),e.lanes=a,e}function hu(e,n,a){return e=oi(6,e,null,n),e.lanes=a,e}function Mp(e){var n=oi(18,null,null,0);return n.stateNode=e,n}function du(e,n,a){return n=oi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var bp=new WeakMap;function _i(e,n){if(typeof e=="object"&&e!==null){var a=bp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ae(n)},bp.set(e,n),n)}return{value:e,source:n,stack:Ae(n)}}var jr=[],Zr=0,pl=null,eo=0,vi=[],yi=0,Ua=null,Gi=1,Vi="";function na(e,n){jr[Zr++]=eo,jr[Zr++]=pl,pl=e,eo=n}function Ep(e,n,a){vi[yi++]=Gi,vi[yi++]=Vi,vi[yi++]=Ua,Ua=e;var o=Gi;e=Vi;var u=32-Kt(o)-1;o&=~(1<<u),a+=1;var f=32-Kt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Gi=1<<32-Kt(n)+u|a<<u|o,Vi=f+e}else Gi=1<<f|a<<u|o,Vi=e}function pu(e){e.return!==null&&(na(e,1),Ep(e,1,0))}function mu(e){for(;e===pl;)pl=jr[--Zr],jr[Zr]=null,eo=jr[--Zr],jr[Zr]=null;for(;e===Ua;)Ua=vi[--yi],vi[yi]=null,Vi=vi[--yi],vi[yi]=null,Gi=vi[--yi],vi[yi]=null}function Tp(e,n){vi[yi++]=Gi,vi[yi++]=Vi,vi[yi++]=Ua,Gi=n.id,Vi=n.overflow,Ua=e}var Nn=null,en=null,Be=!1,La=null,Si=!1,xu=Error(r(519));function Na(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(_i(n,e)),xu}function Ap(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[un]=o,a){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)Oe(To[a],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Oe("invalid",n),fe(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Oe("invalid",n);break;case"textarea":Oe("invalid",n),Ln(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||km(n.textContent,a)?(o.popover!=null&&(Oe("beforetoggle",n),Oe("toggle",n)),o.onScroll!=null&&Oe("scroll",n),o.onScrollEnd!=null&&Oe("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Na(e,!0)}function Rp(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Nn=Nn.return}}function Kr(e){if(e!==Nn)return!1;if(!Be)return Rp(e),Be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pf(e.type,e.memoizedProps)),a=!a),a&&en&&Na(e),Rp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));en=Jm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));en=Jm(e)}else n===27?(n=en,Ya(e.type)?(e=Hf,Hf=null,en=e):en=n):en=Nn?bi(e.stateNode.nextSibling):null;return!0}function mr(){en=Nn=null,Be=!1}function gu(){var e=La;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),La=null),e}function no(e){La===null?La=[e]:La.push(e)}var _u=I(null),xr=null,ia=null;function Oa(e,n,a){Tt(_u,n._currentValue),n._currentValue=a}function aa(e){e._currentValue=_u.current,rt(_u)}function vu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),vu(f.return,a,e),o||(y=null);break t}f=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),vu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Qr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var A=u.type;si(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===ut.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Do):e=[Do])}u=u.return}e!==null&&yu(n,e,a,o),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gr(e){xr=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return Cp(xr,e)}function xl(e,n){return xr===null&&gr(e),Cp(e,n)}function Cp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(e===null)throw Error(r(308));ia=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ia=ia.next=n;return a}var sv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ov=s.unstable_scheduleCallback,lv=s.unstable_NormalPriority,_n={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new sv,data:new Map,refCount:0}}function io(e){e.refCount--,e.refCount===0&&ov(lv,function(){e.controller.abort()})}var ao=null,Mu=0,Jr=0,$r=null;function cv(e,n){if(ao===null){var a=ao=[];Mu=0,Jr=Af(),$r={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Mu++,n.then(wp,wp),n}function wp(){if(--Mu===0&&ao!==null){$r!==null&&($r.status="fulfilled");var e=ao;ao=null,Jr=0,$r=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function uv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Dp=F.S;F.S=function(e,n){dm=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&cv(e,n),Dp!==null&&Dp(e,n)};var _r=I(null);function bu(){var e=_r.current;return e!==null?e:tn.pooledCache}function gl(e,n){n===null?Tt(_r,_r.current):Tt(_r,n.pool)}function Up(){var e=bu();return e===null?null:{parent:_n._currentValue,pool:e}}var ts=Error(r(460)),Eu=Error(r(474)),_l=Error(r(542)),vl={then:function(){}};function Lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Np(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e;default:if(typeof n.status=="string")n.then($i,$i);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e}throw yr=n,ts}}function vr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(yr=a,ts):a}}var yr=null;function Op(){if(yr===null)throw Error(r(459));var e=yr;return yr=null,e}function Pp(e){if(e===ts||e===_l)throw Error(r(483))}var es=null,ro=0;function yl(e){var n=ro;return ro+=1,es===null&&(es=[]),Np(es,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Sl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function zp(e){function n(tt,X){if(e){var it=tt.deletions;it===null?(tt.deletions=[X],tt.flags|=16):it.push(X)}}function a(tt,X){if(!e)return null;for(;X!==null;)n(tt,X),X=X.sibling;return null}function o(tt){for(var X=new Map;tt!==null;)tt.key!==null?X.set(tt.key,tt):X.set(tt.index,tt),tt=tt.sibling;return X}function u(tt,X){return tt=ea(tt,X),tt.index=0,tt.sibling=null,tt}function f(tt,X,it){return tt.index=it,e?(it=tt.alternate,it!==null?(it=it.index,it<X?(tt.flags|=67108866,X):it):(tt.flags|=67108866,X)):(tt.flags|=1048576,X)}function y(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function A(tt,X,it,yt){return X===null||X.tag!==6?(X=hu(it,tt.mode,yt),X.return=tt,X):(X=u(X,it),X.return=tt,X)}function G(tt,X,it,yt){var ue=it.type;return ue===R?mt(tt,X,it.props.children,yt,it.key):X!==null&&(X.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===et&&vr(ue)===X.type)?(X=u(X,it.props),so(X,it),X.return=tt,X):(X=dl(it.type,it.key,it.props,null,tt.mode,yt),so(X,it),X.return=tt,X)}function at(tt,X,it,yt){return X===null||X.tag!==4||X.stateNode.containerInfo!==it.containerInfo||X.stateNode.implementation!==it.implementation?(X=du(it,tt.mode,yt),X.return=tt,X):(X=u(X,it.children||[]),X.return=tt,X)}function mt(tt,X,it,yt,ue){return X===null||X.tag!==7?(X=pr(it,tt.mode,yt,ue),X.return=tt,X):(X=u(X,it),X.return=tt,X)}function bt(tt,X,it){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=hu(""+X,tt.mode,it),X.return=tt,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return it=dl(X.type,X.key,X.props,null,tt.mode,it),so(it,X),it.return=tt,it;case E:return X=du(X,tt.mode,it),X.return=tt,X;case et:return X=vr(X),bt(tt,X,it)}if(lt(X)||j(X))return X=pr(X,tt.mode,it,null),X.return=tt,X;if(typeof X.then=="function")return bt(tt,yl(X),it);if(X.$$typeof===C)return bt(tt,xl(tt,X),it);Sl(tt,X)}return null}function ot(tt,X,it,yt){var ue=X!==null?X.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return ue!==null?null:A(tt,X,""+it,yt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case S:return it.key===ue?G(tt,X,it,yt):null;case E:return it.key===ue?at(tt,X,it,yt):null;case et:return it=vr(it),ot(tt,X,it,yt)}if(lt(it)||j(it))return ue!==null?null:mt(tt,X,it,yt,null);if(typeof it.then=="function")return ot(tt,X,yl(it),yt);if(it.$$typeof===C)return ot(tt,X,xl(tt,it),yt);Sl(tt,it)}return null}function ft(tt,X,it,yt,ue){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return tt=tt.get(it)||null,A(X,tt,""+yt,ue);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case S:return tt=tt.get(yt.key===null?it:yt.key)||null,G(X,tt,yt,ue);case E:return tt=tt.get(yt.key===null?it:yt.key)||null,at(X,tt,yt,ue);case et:return yt=vr(yt),ft(tt,X,it,yt,ue)}if(lt(yt)||j(yt))return tt=tt.get(it)||null,mt(X,tt,yt,ue,null);if(typeof yt.then=="function")return ft(tt,X,it,yl(yt),ue);if(yt.$$typeof===C)return ft(tt,X,it,xl(X,yt),ue);Sl(X,yt)}return null}function $t(tt,X,it,yt){for(var ue=null,Ve=null,se=X,Re=X=0,ze=null;se!==null&&Re<it.length;Re++){se.index>Re?(ze=se,se=null):ze=se.sibling;var ke=ot(tt,se,it[Re],yt);if(ke===null){se===null&&(se=ze);break}e&&se&&ke.alternate===null&&n(tt,se),X=f(ke,X,Re),Ve===null?ue=ke:Ve.sibling=ke,Ve=ke,se=ze}if(Re===it.length)return a(tt,se),Be&&na(tt,Re),ue;if(se===null){for(;Re<it.length;Re++)se=bt(tt,it[Re],yt),se!==null&&(X=f(se,X,Re),Ve===null?ue=se:Ve.sibling=se,Ve=se);return Be&&na(tt,Re),ue}for(se=o(se);Re<it.length;Re++)ze=ft(se,tt,Re,it[Re],yt),ze!==null&&(e&&ze.alternate!==null&&se.delete(ze.key===null?Re:ze.key),X=f(ze,X,Re),Ve===null?ue=ze:Ve.sibling=ze,Ve=ze);return e&&se.forEach(function(Ja){return n(tt,Ja)}),Be&&na(tt,Re),ue}function me(tt,X,it,yt){if(it==null)throw Error(r(151));for(var ue=null,Ve=null,se=X,Re=X=0,ze=null,ke=it.next();se!==null&&!ke.done;Re++,ke=it.next()){se.index>Re?(ze=se,se=null):ze=se.sibling;var Ja=ot(tt,se,ke.value,yt);if(Ja===null){se===null&&(se=ze);break}e&&se&&Ja.alternate===null&&n(tt,se),X=f(Ja,X,Re),Ve===null?ue=Ja:Ve.sibling=Ja,Ve=Ja,se=ze}if(ke.done)return a(tt,se),Be&&na(tt,Re),ue;if(se===null){for(;!ke.done;Re++,ke=it.next())ke=bt(tt,ke.value,yt),ke!==null&&(X=f(ke,X,Re),Ve===null?ue=ke:Ve.sibling=ke,Ve=ke);return Be&&na(tt,Re),ue}for(se=o(se);!ke.done;Re++,ke=it.next())ke=ft(se,tt,Re,ke.value,yt),ke!==null&&(e&&ke.alternate!==null&&se.delete(ke.key===null?Re:ke.key),X=f(ke,X,Re),Ve===null?ue=ke:Ve.sibling=ke,Ve=ke);return e&&se.forEach(function(Sy){return n(tt,Sy)}),Be&&na(tt,Re),ue}function Je(tt,X,it,yt){if(typeof it=="object"&&it!==null&&it.type===R&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case S:t:{for(var ue=it.key;X!==null;){if(X.key===ue){if(ue=it.type,ue===R){if(X.tag===7){a(tt,X.sibling),yt=u(X,it.props.children),yt.return=tt,tt=yt;break t}}else if(X.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===et&&vr(ue)===X.type){a(tt,X.sibling),yt=u(X,it.props),so(yt,it),yt.return=tt,tt=yt;break t}a(tt,X);break}else n(tt,X);X=X.sibling}it.type===R?(yt=pr(it.props.children,tt.mode,yt,it.key),yt.return=tt,tt=yt):(yt=dl(it.type,it.key,it.props,null,tt.mode,yt),so(yt,it),yt.return=tt,tt=yt)}return y(tt);case E:t:{for(ue=it.key;X!==null;){if(X.key===ue)if(X.tag===4&&X.stateNode.containerInfo===it.containerInfo&&X.stateNode.implementation===it.implementation){a(tt,X.sibling),yt=u(X,it.children||[]),yt.return=tt,tt=yt;break t}else{a(tt,X);break}else n(tt,X);X=X.sibling}yt=du(it,tt.mode,yt),yt.return=tt,tt=yt}return y(tt);case et:return it=vr(it),Je(tt,X,it,yt)}if(lt(it))return $t(tt,X,it,yt);if(j(it)){if(ue=j(it),typeof ue!="function")throw Error(r(150));return it=ue.call(it),me(tt,X,it,yt)}if(typeof it.then=="function")return Je(tt,X,yl(it),yt);if(it.$$typeof===C)return Je(tt,X,xl(tt,it),yt);Sl(tt,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,X!==null&&X.tag===6?(a(tt,X.sibling),yt=u(X,it),yt.return=tt,tt=yt):(a(tt,X),yt=hu(it,tt.mode,yt),yt.return=tt,tt=yt),y(tt)):a(tt,X)}return function(tt,X,it,yt){try{ro=0;var ue=Je(tt,X,it,yt);return es=null,ue}catch(se){if(se===ts||se===_l)throw se;var Ve=oi(29,se,null,tt.mode);return Ve.lanes=yt,Ve.return=tt,Ve}finally{}}}var Sr=zp(!0),Ip=zp(!1),Pa=!1;function Tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(We&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(e),yp(e,null,a),n}return fl(e,o,n,a),hl(e)}function oo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ca(e,a)}}function Ru(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cu=!1;function lo(){if(Cu){var e=$r;if(e!==null)throw e}}function co(e,n,a,o){Cu=!1;var u=e.updateQueue;Pa=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,at=G.next;G.next=null,y===null?f=at:y.next=at,y=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==y&&(A===null?mt.firstBaseUpdate=at:A.next=at,mt.lastBaseUpdate=G))}if(f!==null){var bt=u.baseState;y=0,mt=at=G=null,A=f;do{var ot=A.lane&-536870913,ft=ot!==A.lane;if(ft?(Pe&ot)===ot:(o&ot)===ot){ot!==0&&ot===Jr&&(Cu=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var $t=e,me=A;ot=n;var Je=a;switch(me.tag){case 1:if($t=me.payload,typeof $t=="function"){bt=$t.call(Je,bt,ot);break t}bt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=me.payload,ot=typeof $t=="function"?$t.call(Je,bt,ot):$t,ot==null)break t;bt=x({},bt,ot);break t;case 2:Pa=!0}}ot=A.callback,ot!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(at=mt=ft,G=bt):mt=mt.next=ft,y|=ot;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ft=A,A=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);mt===null&&(G=bt),u.baseState=G,u.firstBaseUpdate=at,u.lastBaseUpdate=mt,f===null&&(u.shared.lanes=0),Va|=y,e.lanes=y,e.memoizedState=bt}}function Fp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Bp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fp(a[e],n)}var ns=I(null),Ml=I(0);function Hp(e,n){e=da,Tt(Ml,e),Tt(ns,n),da=e|n.baseLanes}function wu(){Tt(Ml,da),Tt(ns,ns.current)}function Du(){da=Ml.current,rt(ns),rt(Ml)}var li=I(null),Mi=null;function Fa(e){var n=e.alternate;Tt(xn,xn.current&1),Tt(li,e),Mi===null&&(n===null||ns.current!==null||n.memoizedState!==null)&&(Mi=e)}function Uu(e){Tt(xn,xn.current),Tt(li,e),Mi===null&&(Mi=e)}function Gp(e){e.tag===22?(Tt(xn,xn.current),Tt(li,e),Mi===null&&(Mi=e)):Ba()}function Ba(){Tt(xn,xn.current),Tt(li,li.current)}function ci(e){rt(li),Mi===e&&(Mi=null),rt(xn)}var xn=I(0);function bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||Bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,Te=null,Ke=null,vn=null,El=!1,is=!1,Mr=!1,Tl=0,uo=0,as=null,fv=0;function fn(){throw Error(r(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!si(e[a],n[a]))return!1;return!0}function Nu(e,n,a,o,u,f){return ra=f,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?E0:ju,Mr=!1,f=a(o,u),Mr=!1,is&&(f=kp(n,a,o,u)),Vp(e),f}function Vp(e){F.H=po;var n=Ke!==null&&Ke.next!==null;if(ra=0,vn=Ke=Te=null,El=!1,uo=0,as=null,n)throw Error(r(300));e===null||yn||(e=e.dependencies,e!==null&&ml(e)&&(yn=!0))}function kp(e,n,a,o){Te=e;var u=0;do{if(is&&(as=null),uo=0,is=!1,25<=u)throw Error(r(301));if(u+=1,vn=Ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=T0,f=n(a,o)}while(is);return f}function hv(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?fo(n):n,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(Te.flags|=1024),n}function Ou(){var e=Tl!==0;return Tl=0,e}function Pu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}ra=0,vn=Ke=Te=null,is=!1,uo=Tl=0,as=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Te.memoizedState=vn=e:vn=vn.next=e,vn}function gn(){if(Ke===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var n=vn===null?Te.memoizedState:vn.next;if(n!==null)vn=n,Ke=e;else{if(e===null)throw Te.alternate===null?Error(r(467)):Error(r(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},vn===null?Te.memoizedState=vn=e:vn=vn.next=e}return vn}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(e){var n=uo;return uo+=1,as===null&&(as=[]),e=Np(as,e,n),n=Te,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?E0:ju),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fo(e);if(e.$$typeof===C)return On(e)}throw Error(r(438,String(e)))}function Iu(e){var n=null,a=Te.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Te.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),Te.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Cl(e){var n=gn();return Fu(n,Ke,e)}function Fu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=y=null,G=null,at=n,mt=!1;do{var bt=at.lane&-536870913;if(bt!==at.lane?(Pe&bt)===bt:(ra&bt)===bt){var ot=at.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),bt===Jr&&(mt=!0);else if((ra&ot)===ot){at=at.next,ot===Jr&&(mt=!0);continue}else bt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=bt,y=f):G=G.next=bt,Te.lanes|=ot,Va|=ot;bt=at.action,Mr&&a(f,bt),f=at.hasEagerState?at.eagerState:a(f,bt)}else ot={lane:bt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(A=G=ot,y=f):G=G.next=ot,Te.lanes|=bt,Va|=bt;at=at.next}while(at!==null&&at!==n);if(G===null?y=f:G.next=A,!si(f,e.memoizedState)&&(yn=!0,mt&&(a=$r,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Bu(e){var n=gn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);si(f,n.memoizedState)||(yn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Xp(e,n,a){var o=Te,u=gn(),f=Be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!si((Ke||u).memoizedState,a);if(y&&(u.memoizedState=a,yn=!0),u=u.queue,Vu(Yp.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,rs(9,{destroy:void 0},Wp.bind(null,o,u,a,n),null),tn===null)throw Error(r(349));f||(ra&127)!==0||qp(o,n,a)}return a}function qp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Te.updateQueue,n===null?(n=Al(),Te.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Wp(e,n,a,o){n.value=a,n.getSnapshot=o,jp(n)&&Zp(e)}function Yp(e,n,a){return a(function(){jp(n)&&Zp(e)})}function jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!si(e,a)}catch{return!0}}function Zp(e){var n=dr(e,2);n!==null&&ai(n,e,2)}function Hu(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),Mr){ie(!0);try{a()}finally{ie(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function Kp(e,n,a,o){return e.baseState=a,Fu(e,Ke,typeof o=="function"?o:sa)}function dv(e,n,a,o,u){if(Ul(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Qp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=F.T,y={};F.T=y;try{var A=a(u,o),G=F.S;G!==null&&G(y,A),Jp(e,n,A)}catch(at){Gu(e,n,at)}finally{f!==null&&y.types!==null&&(f.types=y.types),F.T=f}}else try{f=a(u,o),Jp(e,n,f)}catch(at){Gu(e,n,at)}}function Jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$p(e,n,o)},function(o){return Gu(e,n,o)}):$p(e,n,a)}function $p(e,n,a){n.status="fulfilled",n.value=a,t0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Qp(e,a)))}function Gu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,t0(n),n=n.next;while(n!==o)}e.action=null}function t0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function e0(e,n){return n}function n0(e,n){if(Be){var a=tn.formState;if(a!==null){t:{var o=Te;if(Be){if(en){e:{for(var u=en,f=Si;u.nodeType!==8;){if(!f){u=null;break e}if(u=bi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){en=bi(u.nextSibling),o=u.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e0,lastRenderedState:n},a.queue=o,a=S0.bind(null,Te,o),o.dispatch=a,o=Hu(!1),f=Yu.bind(null,Te,!1,o.queue),o=Wn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=dv.bind(null,Te,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function i0(e){var n=gn();return a0(n,Ke,e)}function a0(e,n,a){if(n=Fu(e,n,e0)[0],e=Cl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(y){throw y===ts?_l:y}else o=n;n=gn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Te.flags|=2048,rs(9,{destroy:void 0},pv.bind(null,u,a),null)),[o,f,e]}function pv(e,n){e.action=n}function r0(e){var n=gn(),a=Ke;if(a!==null)return a0(n,a,e);gn(),n=n.memoizedState,a=gn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function rs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Te.updateQueue,n===null&&(n=Al(),Te.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function s0(){return gn().memoizedState}function wl(e,n,a,o){var u=Wn();Te.flags|=e,u.memoizedState=rs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Dl(e,n,a,o){var u=gn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ke!==null&&o!==null&&Lu(o,Ke.memoizedState.deps)?u.memoizedState=rs(n,f,a,o):(Te.flags|=e,u.memoizedState=rs(1|n,f,a,o))}function o0(e,n){wl(8390656,8,e,n)}function Vu(e,n){Dl(2048,8,e,n)}function mv(e){Te.flags|=4;var n=Te.updateQueue;if(n===null)n=Al(),Te.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function l0(e){var n=gn().memoizedState;return mv({ref:n,nextImpl:e}),function(){if((We&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function c0(e,n){return Dl(4,2,e,n)}function u0(e,n){return Dl(4,4,e,n)}function f0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function h0(e,n,a){a=a!=null?a.concat([e]):null,Dl(4,4,f0.bind(null,n,e),a)}function ku(){}function d0(e,n){var a=gn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Lu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function p0(e,n){var a=gn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Lu(n,o[1]))return o[0];if(o=e(),Mr){ie(!0);try{e()}finally{ie(!1)}}return a.memoizedState=[o,n],o}function Xu(e,n,a){return a===void 0||(ra&1073741824)!==0&&(Pe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=mm(),Te.lanes|=e,Va|=e,a)}function m0(e,n,a,o){return si(a,n)?a:ns.current!==null?(e=Xu(e,a,o),si(e,n)||(yn=!0),e):(ra&42)===0||(ra&1073741824)!==0&&(Pe&261930)===0?(yn=!0,e.memoizedState=a):(e=mm(),Te.lanes|=e,Va|=e,n)}function x0(e,n,a,o,u){var f=$.p;$.p=f!==0&&8>f?f:8;var y=F.T,A={};F.T=A,Yu(e,!1,n,a);try{var G=u(),at=F.S;if(at!==null&&at(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=uv(G,o);ho(e,n,mt,hi(e))}else ho(e,n,o,hi(e))}catch(bt){ho(e,n,{then:function(){},status:"rejected",reason:bt},hi())}finally{$.p=f,y!==null&&A.types!==null&&(y.types=A.types),F.T=y}}function xv(){}function qu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=g0(e).queue;x0(e,u,n,K,a===null?xv:function(){return _0(e),a(o)})}function g0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _0(e){var n=g0(e);n.next===null&&(n=e.alternate.memoizedState),ho(e,n.next.queue,{},hi())}function Wu(){return On(Do)}function v0(){return gn().memoizedState}function y0(){return gn().memoizedState}function gv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();e=za(a);var o=Ia(n,e,a);o!==null&&(ai(o,n,a),oo(o,n,a)),n={cache:Su()},e.payload=n;return}n=n.return}}function _v(e,n,a){var o=hi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)?M0(n,a):(a=uu(e,n,a,o),a!==null&&(ai(a,e,o),b0(a,n,o)))}function S0(e,n,a){var o=hi();ho(e,n,a,o)}function ho(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))M0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(u.hasEagerState=!0,u.eagerState=A,si(A,y))return fl(e,n,u,0),tn===null&&ul(),!1}catch{}finally{}if(a=uu(e,n,u,o),a!==null)return ai(a,e,o),b0(a,n,o),!0}return!1}function Yu(e,n,a,o){if(o={lane:2,revertLane:Af(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(r(479))}else n=uu(e,a,o,2),n!==null&&ai(n,e,2)}function Ul(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function M0(e,n){is=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function b0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ca(e,a)}}var po={readContext:On,use:Rl,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};po.useEffectEvent=fn;var E0={readContext:On,use:Rl,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:On,useEffect:o0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,f0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var o=e();if(Mr){ie(!0);try{e()}finally{ie(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Wn();if(a!==void 0){var u=a(n);if(Mr){ie(!0);try{a(n)}finally{ie(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=_v.bind(null,Te,e),[o.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,a=S0.bind(null,Te,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=Wn();return Xu(a,e,n)},useTransition:function(){var e=Hu(!1);return e=x0.bind(null,Te,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Te,u=Wn();if(Be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),tn===null)throw Error(r(349));(Pe&127)!==0||qp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,o0(Yp.bind(null,o,f,e),[e]),o.flags|=2048,rs(9,{destroy:void 0},Wp.bind(null,o,f,a,n),null),a},useId:function(){var e=Wn(),n=tn.identifierPrefix;if(Be){var a=Vi,o=Gi;a=(o&~(1<<32-Kt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Wu,useFormState:n0,useActionState:n0,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,Te,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Wn().memoizedState=gv.bind(null,Te)},useEffectEvent:function(e){var n=Wn(),a={impl:e};return n.memoizedState=a,function(){if((We&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:On,use:Rl,useCallback:d0,useContext:On,useEffect:Vu,useImperativeHandle:h0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Cl,useRef:s0,useState:function(){return Cl(sa)},useDebugValue:ku,useDeferredValue:function(e,n){var a=gn();return m0(a,Ke.memoizedState,e,n)},useTransition:function(){var e=Cl(sa)[0],n=gn().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:Xp,useId:v0,useHostTransitionStatus:Wu,useFormState:i0,useActionState:i0,useOptimistic:function(e,n){var a=gn();return Kp(a,Ke,e,n)},useMemoCache:Iu,useCacheRefresh:y0};ju.useEffectEvent=l0;var T0={readContext:On,use:Rl,useCallback:d0,useContext:On,useEffect:Vu,useImperativeHandle:h0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:p0,useReducer:Bu,useRef:s0,useState:function(){return Bu(sa)},useDebugValue:ku,useDeferredValue:function(e,n){var a=gn();return Ke===null?Xu(a,e,n):m0(a,Ke.memoizedState,e,n)},useTransition:function(){var e=Bu(sa)[0],n=gn().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:Xp,useId:v0,useHostTransitionStatus:Wu,useFormState:r0,useActionState:r0,useOptimistic:function(e,n){var a=gn();return Ke!==null?Kp(a,Ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:y0};T0.useEffectEvent=l0;function Zu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=hi(),u=za(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(ai(n,e,o),oo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=hi(),u=za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(ai(n,e,o),oo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=hi(),o=za(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(e,o,a),n!==null&&(ai(n,e,a),oo(n,e,a))}};function A0(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!$s(a,o)||!$s(u,f):!0}function R0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ku.enqueueReplaceState(n,n.state,null)}function br(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function C0(e){cl(e)}function w0(e){console.error(e)}function D0(e){cl(e)}function Ll(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function U0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qu(e,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(e,n)},a}function L0(e){return e=za(e),e.tag=3,e}function N0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){U0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){U0(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function vv(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qr(n,a,u,!0),a=li.current,a!==null){switch(a.tag){case 31:case 13:return Mi===null?Xl():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),bf(e,o,u)),!1;case 22:return a.flags|=65536,o===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),bf(e,o,u)),!1}throw Error(r(435,a.tag))}return bf(e,o,u),Xl(),!1}if(Be)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==xu&&(e=Error(r(422),{cause:o}),no(_i(e,a)))):(o!==xu&&(n=Error(r(423),{cause:o}),no(_i(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=_i(o,a),u=Qu(e.stateNode,o,u),Ru(e,u),hn!==4&&(hn=2)),!1;var f=Error(r(520),{cause:o});if(f=_i(f,a),Mo===null?Mo=[f]:Mo.push(f),hn!==4&&(hn=2),n===null)return!0;o=_i(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Qu(a.stateNode,o,e),Ru(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=L0(u),N0(u,e,a,o),Ru(a,u),!1}a=a.return}while(a!==null);return!1}var Ju=Error(r(461)),yn=!1;function Pn(e,n,a,o){n.child=e===null?Ip(n,null,a,o):Sr(n,e.child,a,o)}function O0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return gr(n),o=Nu(e,n,a,y,f,u),A=Ou(),e!==null&&!yn?(Pu(e,n,u),oa(e,n,u)):(Be&&A&&pu(n),n.flags|=1,Pn(e,n,o,u),n.child)}function P0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,z0(e,n,f,o,u)):(e=dl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!of(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(y,o)&&e.ref===n.ref)return oa(e,n,u)}return n.flags|=1,e=ea(f,o),e.ref=n.ref,e.return=n,n.child=e}function z0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if($s(f,o)&&e.ref===n.ref)if(yn=!1,n.pendingProps=o=f,of(e,u))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,oa(e,n,u)}return $u(e,n,a,o,u)}function I0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return F0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,f!==null?f.cachePool:null),f!==null?Hp(n,f):wu(),Gp(n);else return o=n.lanes=536870912,F0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(gl(n,f.cachePool),Hp(n,f),Ba(),n.memoizedState=null):(e!==null&&gl(n,null),wu(),Ba());return Pn(e,n,u,a),n.child}function mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function F0(e,n,a,o,u){var f=bu();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&gl(n,null),wu(),Gp(n),e!==null&&Qr(e,n,o,!0),n.childLanes=u,null}function Nl(e,n){return n=Pl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function B0(e,n,a){return Sr(n,e.child,null,a),e=Nl(n,n.pendingProps),e.flags|=2,ci(n),n.memoizedState=null,e}function yv(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Be){if(o.mode==="hidden")return e=Nl(n,o),n.lanes=536870912,mo(null,e);if(Uu(n),(e=en)?(e=Qm(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Mp(e),a.return=n,n.child=a,Nn=n,en=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return Nl(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Uu(n),u)if(n.flags&256)n.flags&=-257,n=B0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(yn||Qr(e,n,a,!1),u=(a&e.childLanes)!==0,yn||u){if(o=tn,o!==null&&(y=wa(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,dr(e,y),ai(o,e,y),Ju;Xl(),n=B0(e,n,a)}else e=f.treeContext,en=bi(y.nextSibling),Nn=n,Be=!0,La=null,Si=!1,e!==null&&Tp(n,e),n=Nl(n,o),n.flags|=4096;return n}return e=ea(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ol(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $u(e,n,a,o,u){return gr(n),a=Nu(e,n,a,o,void 0,u),o=Ou(),e!==null&&!yn?(Pu(e,n,u),oa(e,n,u)):(Be&&o&&pu(n),n.flags|=1,Pn(e,n,a,u),n.child)}function H0(e,n,a,o,u,f){return gr(n),n.updateQueue=null,a=kp(n,o,a,u),Vp(e),o=Ou(),e!==null&&!yn?(Pu(e,n,f),oa(e,n,f)):(Be&&o&&pu(n),n.flags|=1,Pn(e,n,a,f),n.child)}function G0(e,n,a,o,u){if(gr(n),n.stateNode===null){var f=Yr,y=a.contextType;typeof y=="object"&&y!==null&&(f=On(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Tu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?On(y):Yr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Zu(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Ku.enqueueReplaceState(f,f.state,null),co(n,o,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=br(a,A);f.props=G;var at=f.context,mt=a.contextType;y=Yr,typeof mt=="object"&&mt!==null&&(y=On(mt));var bt=a.getDerivedStateFromProps;mt=typeof bt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||at!==y)&&R0(n,f,o,y),Pa=!1;var ot=n.memoizedState;f.state=ot,co(n,o,f,u),lo(),at=n.memoizedState,A||ot!==at||Pa?(typeof bt=="function"&&(Zu(n,a,bt,o),at=n.memoizedState),(G=Pa||A0(n,a,G,o,ot,at,y))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=y,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Au(e,n),y=n.memoizedProps,mt=br(a,y),f.props=mt,bt=n.pendingProps,ot=f.context,at=a.contextType,G=Yr,typeof at=="object"&&at!==null&&(G=On(at)),A=a.getDerivedStateFromProps,(at=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==bt||ot!==G)&&R0(n,f,o,G),Pa=!1,ot=n.memoizedState,f.state=ot,co(n,o,f,u),lo();var ft=n.memoizedState;y!==bt||ot!==ft||Pa||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof A=="function"&&(Zu(n,a,A,o),ft=n.memoizedState),(mt=Pa||A0(n,a,mt,o,ot,ft,G)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ft,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ft,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),f.props=o,f.state=ft,f.context=G,o=mt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ol(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Sr(n,e.child,null,u),n.child=Sr(n,null,a,u)):Pn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=oa(e,n,u),e}function V0(e,n,a,o){return mr(),n.flags|=256,Pn(e,n,a,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Up()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=fi),e}function k0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Be){if(u?Fa(n):Ba(),(e=en)?(e=Qm(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Mp(e),a.return=n,n.child=a,Nn=n,en=null)):e=null,e===null)throw Na(n);return Bf(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ba(),u=n.mode,A=Pl({mode:"hidden",children:A},u),o=pr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=ef(a),o.childLanes=nf(e,y,a),n.memoizedState=tf,mo(null,o)):(Fa(n),af(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(Ba(),n.child=e.child,n.flags|=128,n=null):(Ba(),A=o.fallback,u=n.mode,o=Pl({mode:"visible",children:o.children},u),A=pr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Sr(n,e.child,null,a),o=n.child,o.memoizedState=ef(a),o.childLanes=nf(e,y,a),n.memoizedState=tf,n=mo(null,o));else if(Fa(n),Bf(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var at=y.dgst;y=at,o=Error(r(419)),o.stack="",o.digest=y,no({value:o,source:null,stack:null}),n=rf(e,n,a)}else if(yn||Qr(e,n,a,!1),y=(a&e.childLanes)!==0,yn||y){if(y=tn,y!==null&&(o=wa(y,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,dr(e,o),ai(y,e,o),Ju;Ff(A)||Xl(),n=rf(e,n,a)}else Ff(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,en=bi(A.nextSibling),Nn=n,Be=!0,La=null,Si=!1,e!==null&&Tp(n,e),n=af(n,o.children),n.flags|=4096);return n}return u?(Ba(),A=o.fallback,u=n.mode,G=e.child,at=G.sibling,o=ea(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,at!==null?A=ea(at,A):(A=pr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,mo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=ef(a):(u=A.cachePool,u!==null?(G=_n._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Up(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=nf(e,y,a),n.memoizedState=tf,mo(e.child,o)):(Fa(n),a=e.child,e=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=Pl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pl(e,n){return e=oi(22,e,null,n),e.lanes=0,e}function rf(e,n,a){return Sr(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function X0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),vu(e.return,n,a)}function sf(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function q0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=xn.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,Tt(xn,y),Pn(e,n,o,a),o=Be?eo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&X0(e,a,n);else if(e.tag===19)X0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),sf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}sf(n,!0,a,null,f,o);break;case"together":sf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function Sv(e,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),Oa(n,_n,e.memoizedState.cache),mr();break;case 27:case 5:ee(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?k0(e,n,a):(Fa(n),e=oa(e,n,a),e!==null?e.sibling:null);Fa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return q0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Tt(xn,xn.current),o)break;return null;case 22:return n.lanes=0,I0(e,n,a,n.pendingProps);case 24:Oa(n,_n,e.memoizedState.cache)}return oa(e,n,a)}function W0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!of(e,a)&&(n.flags&128)===0)return yn=!1,Sv(e,n,a);yn=(e.flags&131072)!==0}else yn=!1,Be&&(n.flags&1048576)!==0&&Ep(n,eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=vr(n.elementType),n.type=e,typeof e=="function")fu(e)?(o=br(e,o),n.tag=1,n=G0(null,n,e,o,a)):(n.tag=0,n=$u(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=O0(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=P0(null,n,e,o,a);break t}}throw n=dt(e)||e,Error(r(306,n,""))}}return n;case 0:return $u(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=br(o,n.pendingProps),G0(e,n,o,u,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Au(e,n),co(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Oa(n,_n,o),o!==f.cache&&yu(n,[_n],a,!0),lo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=V0(e,n,o,a);break t}else if(o!==u){u=_i(Error(r(424)),n),no(u),n=V0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=bi(e.firstChild),Nn=n,Be=!0,La=null,Si=!0,a=Ip(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(mr(),o===u){n=oa(e,n,a);break t}Pn(e,n,o,a)}n=n.child}return n;case 26:return Ol(e,n),e===null?(a=ix(n.type,null,n.pendingProps,null))?n.memoizedState=a:Be||(a=n.type,e=n.pendingProps,o=Ql(Q.current).createElement(a),o[on]=n,o[un]=e,zn(o,a,e),Z(o),n.stateNode=o):n.memoizedState=ix(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&Be&&(o=n.stateNode=tx(n.type,n.pendingProps,Q.current),Nn=n,Si=!0,u=en,Ya(n.type)?(Hf=u,en=bi(o.firstChild)):en=u),Pn(e,n,n.pendingProps.children,a),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Be&&((u=o=en)&&(o=Qv(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Nn=n,en=bi(o.firstChild),Si=!1,u=!0):u=!1),u||Na(n)),ee(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Pf(u,f)?o=null:y!==null&&Pf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Nu(e,n,hv,null,null,a),Do._currentValue=u),Ol(e,n),Pn(e,n,o,a),n.child;case 6:return e===null&&Be&&((e=a=en)&&(a=Jv(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Nn=n,en=null,e=!0):e=!1),e||Na(n)),null;case 13:return k0(e,n,a);case 4:return Ft(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Sr(n,null,o,a):Pn(e,n,o,a),n.child;case 11:return O0(e,n,n.type,n.pendingProps,a);case 7:return Pn(e,n,n.pendingProps,a),n.child;case 8:return Pn(e,n,n.pendingProps.children,a),n.child;case 12:return Pn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),Pn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gr(n),u=On(u),o=o(u),n.flags|=1,Pn(e,n,o,a),n.child;case 14:return P0(e,n,n.type,n.pendingProps,a);case 15:return z0(e,n,n.type,n.pendingProps,a);case 19:return q0(e,n,a);case 31:return yv(e,n,a);case 22:return I0(e,n,a,n.pendingProps);case 24:return gr(n),o=On(_n),e===null?(u=bu(),u===null&&(u=tn,f=Su(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Tu(n),Oa(n,_n,u)):((e.lanes&a)!==0&&(Au(e,n),co(n,null,null,a),lo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,_n,o)):(o=f.cache,Oa(n,_n,o),o!==u.cache&&yu(n,[_n],a,!0))),Pn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function la(e){e.flags|=4}function lf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(vm())e.flags|=8192;else throw yr=vl,Eu}else e.flags&=-16777217}function Y0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lx(n))if(vm())e.flags|=8192;else throw yr=vl,Eu}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ye():536870912,e.lanes|=n,cs|=n)}function xo(e,n){if(!Be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Mv(e,n,a){var o=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(_n),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Kr(n)?la(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),nn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(la(n),f!==null?(nn(n),Y0(n,f)):(nn(n),lf(n,u,null,o,a))):f?f!==e.memoizedState?(la(n),nn(n),Y0(n,f)):(nn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&la(n),nn(n),lf(n,u,e,o,a)),null;case 27:if(Se(n),a=Q.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return nn(n),null}e=Nt.current,Kr(n)?Ap(n):(e=tx(u,o,a),n.stateNode=e,la(n))}return nn(n),null;case 5:if(Se(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return nn(n),null}if(f=Nt.current,Kr(n))Ap(n);else{var y=Ql(Q.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[on]=n,f[un]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(zn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&la(n)}}return nn(n),lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Q.current,Kr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||km(e.nodeValue,a)),e||Na(n,!0)}else e=Ql(e).createTextNode(o),e[on]=n,n.stateNode=e}return nn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Kr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[on]=n}else mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),e=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(r(558))}return nn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Kr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),u=!1}else u=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),nn(n),null);case 4:return Xt(),e===null&&Df(n.stateNode.containerInfo),nn(n),null;case 10:return aa(n.type),nn(n),null;case 19:if(rt(xn),o=n.memoizedState,o===null)return nn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xo(o,!1);else{if(hn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bl(e),f!==null){for(n.flags|=128,xo(o,!1),e=f.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return Tt(xn,xn.current&1|2),Be&&na(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Gl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(e=bl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Be)return nn(n),null}else 2*T()-o.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=xn.current,Tt(xn,u?a&1|2:a&1),Be&&na(n,o.treeForkCount),e):(nn(n),null);case 22:case 23:return ci(n),Du(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&rt(_r),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(_n),nn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function bv(e,n){switch(mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return aa(_n),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Se(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(r(340));mr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ci(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));mr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return rt(xn),null;case 4:return Xt(),null;case 10:return aa(n.type),null;case 22:case 23:return ci(n),Du(),e!==null&&rt(_r),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return aa(_n),null;case 25:return null;default:return null}}function j0(e,n){switch(mu(n),n.tag){case 3:aa(_n),Xt();break;case 26:case 27:case 5:Se(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:rt(xn);break;case 10:aa(n.type);break;case 22:case 23:ci(n),Du(),e!==null&&rt(_r);break;case 24:aa(_n)}}function go(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){Ze(n,n.return,A)}}function Ha(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var G=a,at=A;try{at()}catch(mt){Ze(u,G,mt)}}}o=o.next}while(o!==f)}}catch(mt){Ze(n,n.return,mt)}}function Z0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Bp(n,a)}catch(o){Ze(e,e.return,o)}}}function K0(e,n,a){a.props=br(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ze(e,n,o)}}function _o(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ze(e,n,u)}}function ki(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ze(e,n,u)}else a.current=null}function Q0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ze(e,e.return,u)}}function cf(e,n,a){try{var o=e.stateNode;qv(o,e.type,a,n),o[un]=n}catch(u){Ze(e,e.return,u)}}function J0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||J0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function Il(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Il(e,n,a),e=e.sibling;e!==null;)Il(e,n,a),e=e.sibling}function $0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);zn(n,o,a),n[on]=e,n[un]=a}catch(f){Ze(e,e.return,f)}}var ca=!1,Sn=!1,hf=!1,tm=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function Ev(e,n){if(e=e.containerInfo,Nf=ac,e=hp(e),au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,A=-1,G=-1,at=0,mt=0,bt=e,ot=null;e:for(;;){for(var ft;bt!==a||u!==0&&bt.nodeType!==3||(A=y+u),bt!==f||o!==0&&bt.nodeType!==3||(G=y+o),bt.nodeType===3&&(y+=bt.nodeValue.length),(ft=bt.firstChild)!==null;)ot=bt,bt=ft;for(;;){if(bt===e)break e;if(ot===a&&++at===u&&(A=y),ot===f&&++mt===o&&(G=y),(ft=bt.nextSibling)!==null)break;bt=ot,ot=bt.parentNode}bt=ft}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},ac=!1,Cn=n;Cn!==null;)if(n=Cn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Cn=e;else for(;Cn!==null;){switch(n=Cn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var $t=br(a.type,u);e=o.getSnapshotBeforeUpdate($t,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(me){Ze(a,a.return,me)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Cn=e;break}Cn=n.return}}function em(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),o&4&&go(5,a);break;case 1:if(fa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ze(a,a.return,y)}else{var u=br(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ze(a,a.return,y)}}o&64&&Z0(a),o&512&&_o(a,a.return);break;case 3:if(fa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bp(e,n)}catch(y){Ze(a,a.return,y)}}break;case 27:n===null&&o&4&&$0(a);case 26:case 5:fa(e,a),n===null&&o&4&&Q0(a),o&512&&_o(a,a.return);break;case 12:fa(e,a);break;case 31:fa(e,a),o&4&&am(e,a);break;case 13:fa(e,a),o&4&&rm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Nv.bind(null,a),$v(e,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||Sn,u=ca;var f=Sn;ca=o,(Sn=n)&&!f?ha(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),ca=u,Sn=f}break;case 30:break;default:fa(e,a)}}function nm(e){var n=e.alternate;n!==null&&(e.alternate=null,nm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&St(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,ti=!1;function ua(e,n,a){for(a=a.child;a!==null;)im(e,n,a),a=a.sibling}function im(e,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:Sn||ki(a,n),ua(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Sn||ki(a,n);var o=sn,u=ti;Ya(a.type)&&(sn=a.stateNode,ti=!1),ua(e,n,a),Ro(a.stateNode),sn=o,ti=u;break;case 5:Sn||ki(a,n);case 6:if(o=sn,u=ti,sn=null,ua(e,n,a),sn=o,ti=u,sn!==null)if(ti)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode)}catch(f){Ze(a,n,f)}else try{sn.removeChild(a.stateNode)}catch(f){Ze(a,n,f)}break;case 18:sn!==null&&(ti?(e=sn,Zm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gs(e)):Zm(sn,a.stateNode));break;case 4:o=sn,u=ti,sn=a.stateNode.containerInfo,ti=!0,ua(e,n,a),sn=o,ti=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),Sn||Ha(4,a,n),ua(e,n,a);break;case 1:Sn||(ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&K0(a,n,o)),ua(e,n,a);break;case 21:ua(e,n,a);break;case 22:Sn=(o=Sn)||a.memoizedState!==null,ua(e,n,a),Sn=o;break;default:ua(e,n,a)}}function am(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gs(e)}catch(a){Ze(n,n.return,a)}}}function rm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gs(e)}catch(a){Ze(n,n.return,a)}}function Tv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new tm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new tm),n;default:throw Error(r(435,e.tag))}}function Fl(e,n){var a=Tv(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ov.bind(null,e,o);o.then(u,u)}})}function ei(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){sn=A.stateNode,ti=!1;break t}break;case 5:sn=A.stateNode,ti=!1;break t;case 3:case 4:sn=A.stateNode.containerInfo,ti=!0;break t}A=A.return}if(sn===null)throw Error(r(160));im(f,y,u),sn=null,ti=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sm(n,e),n=n.sibling}var Ui=null;function sm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(n,e),ni(e),o&4&&(Ha(3,e,e.return),go(3,e),Ha(5,e,e.return));break;case 1:ei(n,e),ni(e),o&512&&(Sn||a===null||ki(a,a.return)),o&64&&ca&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ui;if(ei(n,e),ni(e),o&512&&(Sn||a===null||ki(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[pt]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),zn(f,o,a),f[on]=e,Z(f),o=f;break t;case"link":var y=sx("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(f=y[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}f=u.createElement(o),zn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=sx("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(f=y[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}f=u.createElement(o),zn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=e,Z(f),o=f}e.stateNode=o}else ox(u,e.type,e.stateNode);else e.stateNode=rx(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?ox(u,e.type,e.stateNode):rx(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ei(n,e),ni(e),o&512&&(Sn||a===null||ki(a,a.return)),a!==null&&o&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ei(n,e),ni(e),o&512&&(Sn||a===null||ki(a,a.return)),e.flags&32){u=e.stateNode;try{Hi(u,"")}catch($t){Ze(e,e.return,$t)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,cf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(hf=!0);break;case 6:if(ei(n,e),ni(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($t){Ze(e,e.return,$t)}}break;case 3:if(tc=null,u=Ui,Ui=Jl(n.containerInfo),ei(n,e),Ui=u,ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(n.containerInfo)}catch($t){Ze(e,e.return,$t)}hf&&(hf=!1,om(e));break;case 4:o=Ui,Ui=Jl(e.stateNode.containerInfo),ei(n,e),ni(e),Ui=o;break;case 12:ei(n,e),ni(e);break;case 31:ei(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fl(e,o)));break;case 13:ei(n,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,at=ca,mt=Sn;if(ca=at||u,Sn=mt||G,ei(n,e),Sn=mt,ca=at,ni(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ca||Sn||Er(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=G.stateNode;var bt=G.memoizedProps.style,ot=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;A.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch($t){Ze(G,G.return,$t)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch($t){Ze(G,G.return,$t)}}}else if(n.tag===18){if(a===null){G=n;try{var ft=G.stateNode;u?Km(ft,!0):Km(G.stateNode,!1)}catch($t){Ze(G,G.return,$t)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Fl(e,a))));break;case 19:ei(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Fl(e,o)));break;case 30:break;case 21:break;default:ei(n,e),ni(e)}}function ni(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(J0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=uf(e);Il(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Hi(y,""),a.flags&=-33);var A=uf(e);Il(e,A,y);break;case 3:case 4:var G=a.stateNode.containerInfo,at=uf(e);ff(e,at,G);break;default:throw Error(r(161))}}catch(mt){Ze(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function om(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;om(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function fa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)em(e,n.alternate,n),n=n.sibling}function Er(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Er(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&K0(n,n.return,a),Er(n);break;case 27:Ro(n.stateNode);case 26:case 5:ki(n,n.return),Er(n);break;case 22:n.memoizedState===null&&Er(n);break;case 30:Er(n);break;default:Er(n)}e=e.sibling}}function ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),go(4,f);break;case 1:if(ha(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){Ze(o,o.return,at)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Fp(G[u],A)}catch(at){Ze(o,o.return,at)}}a&&y&64&&Z0(f),_o(f,f.return);break;case 27:$0(f);case 26:case 5:ha(u,f,a),a&&o===null&&y&4&&Q0(f),_o(f,f.return);break;case 12:ha(u,f,a);break;case 31:ha(u,f,a),a&&y&4&&am(u,f);break;case 13:ha(u,f,a),a&&y&4&&rm(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),_o(f,f.return);break;case 30:break;default:ha(u,f,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&io(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lm(e,n,a,o),n=n.sibling}function lm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&go(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,A=f.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ze(n,n.return,G)}}else Li(e,n,a,o);break;case 31:Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Li(e,n,a,o):vo(e,n):f._visibility&2?Li(e,n,a,o):(f._visibility|=2,ss(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&df(y,n);break;case 24:Li(e,n,a,o),u&2048&&pf(n.alternate,n);break;default:Li(e,n,a,o)}}function ss(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,A=a,G=o,at=y.flags;switch(y.tag){case 0:case 11:case 15:ss(f,y,A,G,u),go(8,y);break;case 23:break;case 22:var mt=y.stateNode;y.memoizedState!==null?mt._visibility&2?ss(f,y,A,G,u):vo(f,y):(mt._visibility|=2,ss(f,y,A,G,u)),u&&at&2048&&df(y.alternate,y);break;case 24:ss(f,y,A,G,u),u&&at&2048&&pf(y.alternate,y);break;default:ss(f,y,A,G,u)}n=n.sibling}}function vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&df(o.alternate,o);break;case 24:vo(a,o),u&2048&&pf(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var yo=8192;function os(e,n,a){if(e.subtreeFlags&yo)for(e=e.child;e!==null;)cm(e,n,a),e=e.sibling}function cm(e,n,a){switch(e.tag){case 26:os(e,n,a),e.flags&yo&&e.memoizedState!==null&&fy(a,Ui,e.memoizedState,e.memoizedProps);break;case 5:os(e,n,a);break;case 3:case 4:var o=Ui;Ui=Jl(e.stateNode.containerInfo),os(e,n,a),Ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=yo,yo=16777216,os(e,n,a),yo=o):os(e,n,a));break;default:os(e,n,a)}}function um(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Cn=o,hm(o,e)}um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fm(e),e=e.sibling}function fm(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Bl(e)):So(e);break;default:So(e)}}function Bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Cn=o,hm(o,e)}um(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}e=e.sibling}}function hm(e,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Cn=o;else t:for(a=e;Cn!==null;){o=Cn;var u=o.sibling,f=o.return;if(nm(o),o===a){Cn=null;break t}if(u!==null){u.return=f,Cn=u;break t}Cn=f}}}var Av={getCacheForType:function(e){var n=On(_n),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return On(_n).controller.signal}},Rv=typeof WeakMap=="function"?WeakMap:Map,We=0,tn=null,Ne=null,Pe=0,je=0,ui=null,Ga=!1,ls=!1,mf=!1,da=0,hn=0,Va=0,Tr=0,xf=0,fi=0,cs=0,Mo=null,ii=null,gf=!1,Hl=0,dm=0,Gl=1/0,Vl=null,ka=null,bn=0,Xa=null,us=null,pa=0,_f=0,vf=null,pm=null,bo=0,yf=null;function hi(){return(We&2)!==0&&Pe!==0?Pe&-Pe:F.T!==null?Af():qn()}function mm(){if(fi===0)if((Pe&536870912)===0||Be){var e=Pt;Pt<<=1,(Pt&3932160)===0&&(Pt=262144),fi=e}else fi=536870912;return e=li.current,e!==null&&(e.flags|=32),fi}function ai(e,n,a){(e===tn&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(fs(e,0),qa(e,Pe,fi,!1)),An(e,a),((We&2)===0||e!==tn)&&(e===tn&&((We&2)===0&&(Tr|=a),hn===4&&qa(e,Pe,fi,!1)),Xi(e))}function xm(e,n,a){if((We&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Wt(e,n),u=o?Dv(e,n):Mf(e,n,!0),f=o;do{if(u===0){ls&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Cv(a)){u=Mf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=Mo;var G=A.current.memoizedState.isDehydrated;if(G&&(fs(A,y).flags|=256),y=Mf(A,y,!1),y!==2){if(mf&&!G){A.errorRecoveryDisabledLanes|=f,Tr|=f,u=4;break t}f=ii,ii=u,f!==null&&(ii===null?ii=f:ii.push.apply(ii,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){fs(e,0),qa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,fi,!Ga);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Hl+300-T(),10<u)){if(qa(o,n,fi,!Ga),vt(o,0,!0)!==0)break t;pa=n,o.timeoutHandle=Ym(gm.bind(null,o,a,ii,Vl,gf,n,fi,Tr,cs,Ga,f,"Throttled",-0,0),u);break t}gm(o,a,ii,Vl,gf,n,fi,Tr,cs,Ga,f,null,-0,0)}}break}while(!0);Xi(e)}function gm(e,n,a,o,u,f,y,A,G,at,mt,bt,ot,ft){if(e.timeoutHandle=-1,bt=n.subtreeFlags,bt&8192||(bt&16785408)===16785408){bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},cm(n,f,bt);var $t=(f&62914560)===f?Hl-T():(f&4194048)===f?dm-T():0;if($t=hy(bt,$t),$t!==null){pa=f,e.cancelPendingCommit=$t(Tm.bind(null,e,n,f,a,o,u,y,A,G,mt,bt,null,ot,ft)),qa(e,f,y,!at);return}}Tm(e,n,f,a,o,u,y,A,G)}function Cv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!si(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~xf,n&=~Tr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Kt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&cr(e,a,n)}function kl(){return(We&6)===0?(Eo(0),!1):!0}function Sf(){if(Ne!==null){if(je===0)var e=Ne.return;else e=Ne,ia=xr=null,zu(e),es=null,ro=0,e=Ne;for(;e!==null;)j0(e.alternate,e),e=e.return;Ne=null}}function fs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,jv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),pa=0,Sf(),tn=e,Ne=a=ea(e.current,null),Pe=n,je=0,ui=null,Ga=!1,ls=Wt(e,n),mf=!1,cs=fi=xf=Tr=Va=hn=0,ii=Mo=null,gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Kt(o),f=1<<u;n|=e[u],o&=~f}return da=n,ul(),a}function _m(e,n){Te=null,F.H=po,n===ts||n===_l?(n=Op(),je=3):n===Eu?(n=Op(),je=4):je=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,Ne===null&&(hn=1,Ll(e,_i(n,e.current)))}function vm(){var e=li.current;return e===null?!0:(Pe&4194048)===Pe?Mi===null:(Pe&62914560)===Pe||(Pe&536870912)!==0?e===Mi:!1}function ym(){var e=F.H;return F.H=po,e===null?po:e}function Sm(){var e=F.A;return F.A=Av,e}function Xl(){hn=4,Ga||(Pe&4194048)!==Pe&&li.current!==null||(ls=!0),(Va&134217727)===0&&(Tr&134217727)===0||tn===null||qa(tn,Pe,fi,!1)}function Mf(e,n,a){var o=We;We|=2;var u=ym(),f=Sm();(tn!==e||Pe!==n)&&(Vl=null,fs(e,n)),n=!1;var y=hn;t:do try{if(je!==0&&Ne!==null){var A=Ne,G=ui;switch(je){case 8:Sf(),y=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var at=je;if(je=0,ui=null,hs(e,A,G,at),a&&ls){y=0;break t}break;default:at=je,je=0,ui=null,hs(e,A,G,at)}}wv(),y=hn;break}catch(mt){_m(e,mt)}while(!0);return n&&e.shellSuspendCounter++,ia=xr=null,We=o,F.H=u,F.A=f,Ne===null&&(tn=null,Pe=0,ul()),y}function wv(){for(;Ne!==null;)Mm(Ne)}function Dv(e,n){var a=We;We|=2;var o=ym(),u=Sm();tn!==e||Pe!==n?(Vl=null,Gl=T()+500,fs(e,n)):ls=Wt(e,n);t:do try{if(je!==0&&Ne!==null){n=Ne;var f=ui;e:switch(je){case 1:je=0,ui=null,hs(e,n,f,1);break;case 2:case 9:if(Lp(f)){je=0,ui=null,bm(n);break}n=function(){je!==2&&je!==9||tn!==e||(je=7),Xi(e)},f.then(n,n);break t;case 3:je=7;break t;case 4:je=5;break t;case 7:Lp(f)?(je=0,ui=null,bm(n)):(je=0,ui=null,hs(e,n,f,7));break;case 5:var y=null;switch(Ne.tag){case 26:y=Ne.memoizedState;case 5:case 27:var A=Ne;if(y?lx(y):A.stateNode.complete){je=0,ui=null;var G=A.sibling;if(G!==null)Ne=G;else{var at=A.return;at!==null?(Ne=at,ql(at)):Ne=null}break e}}je=0,ui=null,hs(e,n,f,5);break;case 6:je=0,ui=null,hs(e,n,f,6);break;case 8:Sf(),hn=6;break t;default:throw Error(r(462))}}Uv();break}catch(mt){_m(e,mt)}while(!0);return ia=xr=null,F.H=o,F.A=u,We=a,Ne!==null?0:(tn=null,Pe=0,ul(),hn)}function Uv(){for(;Ne!==null&&!Zt();)Mm(Ne)}function Mm(e){var n=W0(e.alternate,e,da);e.memoizedProps=e.pendingProps,n===null?ql(e):Ne=n}function bm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=H0(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=H0(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:zu(n);default:j0(a,n),n=Ne=Sp(n,da),n=W0(a,n,da)}e.memoizedProps=e.pendingProps,n===null?ql(e):Ne=n}function hs(e,n,a,o){ia=xr=null,zu(n),es=null,ro=0;var u=n.return;try{if(vv(e,u,n,a,Pe)){hn=1,Ll(e,_i(a,e.current)),Ne=null;return}}catch(f){if(u!==null)throw Ne=u,f;hn=1,Ll(e,_i(a,e.current)),Ne=null;return}n.flags&32768?(Be||o===1?e=!0:ls||(Pe&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),Em(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){Em(n,Ga);return}e=n.return;var a=Mv(n.alternate,n,da);if(a!==null){Ne=a;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=e}while(n!==null);hn===0&&(hn=5)}function Em(e,n){do{var a=bv(e.alternate,e);if(a!==null){a.flags&=32767,Ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=a}while(e!==null);hn=6,Ne=null}function Tm(e,n,a,o,u,f,y,A,G){e.cancelPendingCommit=null;do Wl();while(bn!==0);if((We&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=cu,Fn(e,a,f,y,A,G),e===tn&&(Ne=tn=null,Pe=0),us=n,Xa=e,pa=a,_f=f,vf=u,pm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Pv(ct,function(){return Dm(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=$.p,$.p=2,y=We,We|=4;try{Ev(e,n,a)}finally{We=y,$.p=u,F.T=o}}bn=1,Am(),Rm(),Cm()}}function Am(){if(bn===1){bn=0;var e=Xa,n=us,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=$.p;$.p=2;var u=We;We|=4;try{sm(n,e);var f=Of,y=hp(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(y!==A&&A&&A.ownerDocument&&fp(A.ownerDocument.documentElement,A)){if(G!==null&&au(A)){var at=G.start,mt=G.end;if(mt===void 0&&(mt=at),"selectionStart"in A)A.selectionStart=at,A.selectionEnd=Math.min(mt,A.value.length);else{var bt=A.ownerDocument||document,ot=bt&&bt.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),$t=A.textContent.length,me=Math.min(G.start,$t),Je=G.end===void 0?me:Math.min(G.end,$t);!ft.extend&&me>Je&&(y=Je,Je=me,me=y);var tt=up(A,me),X=up(A,Je);if(tt&&X&&(ft.rangeCount!==1||ft.anchorNode!==tt.node||ft.anchorOffset!==tt.offset||ft.focusNode!==X.node||ft.focusOffset!==X.offset)){var it=bt.createRange();it.setStart(tt.node,tt.offset),ft.removeAllRanges(),me>Je?(ft.addRange(it),ft.extend(X.node,X.offset)):(it.setEnd(X.node,X.offset),ft.addRange(it))}}}}for(bt=[],ft=A;ft=ft.parentNode;)ft.nodeType===1&&bt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<bt.length;A++){var yt=bt[A];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}ac=!!Nf,Of=Nf=null}finally{We=u,$.p=o,F.T=a}}e.current=n,bn=2}}function Rm(){if(bn===2){bn=0;var e=Xa,n=us,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=$.p;$.p=2;var u=We;We|=4;try{em(e,n.alternate,n)}finally{We=u,$.p=o,F.T=a}}bn=3}}function Cm(){if(bn===4||bn===3){bn=0,P();var e=Xa,n=us,a=pa,o=pm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,us=Xa=null,wm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ka=null),Qn(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=$.p,$.p=2,F.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];f(A.value,{componentStack:A.stack})}}finally{F.T=n,$.p=u}}(pa&3)!==0&&Wl(),Xi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===yf?bo++:(bo=0,yf=e):bo=0,Eo(0)}}function wm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,io(n)))}function Wl(){return Am(),Rm(),Cm(),Dm()}function Dm(){if(bn!==5)return!1;var e=Xa,n=_f;_f=0;var a=Qn(pa),o=F.T,u=$.p;try{$.p=32>a?32:a,F.T=null,a=vf,vf=null;var f=Xa,y=pa;if(bn=0,us=Xa=null,pa=0,(We&6)!==0)throw Error(r(331));var A=We;if(We|=4,fm(f.current),lm(f,f.current,y,a),We=A,Eo(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(At,f)}catch{}return!0}finally{$.p=u,F.T=o,wm(e,n)}}function Um(e,n,a){n=_i(a,n),n=Qu(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(An(e,2),Xi(e))}function Ze(e,n,a){if(e.tag===3)Um(e,e,a);else for(;n!==null;){if(n.tag===3){Um(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=_i(a,e),a=L0(2),o=Ia(n,a,2),o!==null&&(N0(a,o,n,e),An(o,2),Xi(o));break}}n=n.return}}function bf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Rv;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(mf=!0,u.add(a),e=Lv.bind(null,e,n,a),n.then(e,e))}function Lv(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,tn===e&&(Pe&a)===a&&(hn===4||hn===3&&(Pe&62914560)===Pe&&300>T()-Hl?(We&2)===0&&fs(e,0):xf|=a,cs===Pe&&(cs=0)),Xi(e)}function Lm(e,n){n===0&&(n=Ye()),e=dr(e,n),e!==null&&(An(e,n),Xi(e))}function Nv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Lm(e,a)}function Ov(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Lm(e,a)}function Pv(e,n){return qe(e,n)}var Yl=null,ds=null,Ef=!1,jl=!1,Tf=!1,Wa=0;function Xi(e){e!==ds&&e.next===null&&(ds===null?Yl=ds=e:ds=ds.next=e),jl=!0,Ef||(Ef=!0,Iv())}function Eo(e,n){if(!Tf&&jl){Tf=!0;do for(var a=!1,o=Yl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Kt(42|e)+1)-1,f&=u&~(y&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,zm(o,f))}else f=Pe,f=vt(o,o===tn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Wt(o,f)||(a=!0,zm(o,f));o=o.next}while(a);Tf=!1}}function zv(){Nm()}function Nm(){jl=Ef=!1;var e=0;Wa!==0&&Yv()&&(e=Wa);for(var n=T(),a=null,o=Yl;o!==null;){var u=o.next,f=Om(o,n);f===0?(o.next=null,a===null?Yl=u:a.next=u,u===null&&(ds=a)):(a=o,(e!==0||(f&3)!==0)&&(jl=!0)),o=u}bn!==0&&bn!==5||Eo(e),Wa!==0&&(Wa=0)}function Om(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Kt(f),A=1<<y,G=u[y];G===-1?((A&a)===0||(A&o)!==0)&&(u[y]=de(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=tn,a=Pe,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(je===2||je===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ae(o),Qn(a)){case 2:case 8:a=Ct;break;case 32:a=ct;break;case 268435456:a=zt;break;default:a=ct}return o=Pm.bind(null,e),a=qe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ae(o),e.callbackPriority=2,e.callbackNode=null,2}function Pm(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wl()&&e.callbackNode!==a)return null;var o=Pe;return o=vt(e,e===tn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(xm(e,o,n),Om(e,T()),e.callbackNode!=null&&e.callbackNode===a?Pm.bind(null,e):null)}function zm(e,n){if(Wl())return null;xm(e,n,!0)}function Iv(){Zv(function(){(We&6)!==0?qe(gt,zv):Nm()})}function Af(){if(Wa===0){var e=Jr;e===0&&(e=Ht,Ht<<=1,(Ht&261888)===0&&(Ht=256)),Wa=e}return Wa}function Im(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function Fm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Fv(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Im((u[un]||null).action),y=o.submitter;y&&(n=(n=y[un]||null)?Im(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new sl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var G=y?Fm(u,y):new FormData(u);qu(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=y?Fm(u,y):new FormData(u),qu(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],Bv=Cf.toLowerCase(),Hv=Cf[0].toUpperCase()+Cf.slice(1);Di(Bv,"on"+Hv)}Di(mp,"onAnimationEnd"),Di(xp,"onAnimationIteration"),Di(gp,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(nv,"onTransitionRun"),Di(iv,"onTransitionStart"),Di(av,"onTransitionCancel"),Di(_p,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function Bm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],G=A.instance,at=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=at;try{f(u)}catch(mt){cl(mt)}u.currentTarget=null,f=G}else for(y=0;y<o.length;y++){if(A=o[y],G=A.instance,at=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=at;try{f(u)}catch(mt){cl(mt)}u.currentTarget=null,f=G}}}}function Oe(e,n){var a=n[Bi];a===void 0&&(a=n[Bi]=new Set);var o=e+"__bubble";a.has(o)||(Hm(n,e,2,!1),a.add(o))}function wf(e,n,a){var o=0;n&&(o|=4),Hm(a,e,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[Zl]){e[Zl]=!0,q.forEach(function(a){a!=="selectionchange"&&(Gv.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,wf("selectionchange",!1,n))}}function Hm(e,n,a,o){switch(mx(n)){case 2:var u=my;break;case 8:u=xy;break;default:u=qf}a=u.bind(null,n,a,e),u=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Uf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=Ot(A),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){o=f=y;continue t}A=A.parentNode}}o=o.return}qd(function(){var at=f,mt=Yc(a),bt=[];t:{var ot=vp.get(e);if(ot!==void 0){var ft=sl,$t=e;switch(e){case"keypress":if(al(a)===0)break t;case"keydown":case"keyup":ft=O_;break;case"focusin":$t="focus",ft=$c;break;case"focusout":$t="blur",ft=$c;break;case"beforeblur":case"afterblur":ft=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=M_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=I_;break;case mp:case xp:case gp:ft=T_;break;case _p:ft=B_;break;case"scroll":case"scrollend":ft=y_;break;case"wheel":ft=G_;break;case"copy":case"cut":case"paste":ft=R_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Kd;break;case"toggle":case"beforetoggle":ft=k_}var me=(n&4)!==0,Je=!me&&(e==="scroll"||e==="scrollend"),tt=me?ot!==null?ot+"Capture":null:ot;me=[];for(var X=at,it;X!==null;){var yt=X;if(it=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||it===null||tt===null||(yt=Ws(X,tt),yt!=null&&me.push(Ao(X,yt,it))),Je)break;X=X.return}0<me.length&&(ot=new ft(ot,$t,null,a,mt),bt.push({event:ot,listeners:me}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ot&&a!==Wc&&($t=a.relatedTarget||a.fromElement)&&(Ot($t)||$t[Jn]))break t;if((ft||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?($t=a.relatedTarget||a.toElement,ft=at,$t=$t?Ot($t):null,$t!==null&&(Je=c($t),me=$t.tag,$t!==Je||me!==5&&me!==27&&me!==6)&&($t=null)):(ft=null,$t=at),ft!==$t)){if(me=jd,yt="onMouseLeave",tt="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(me=Kd,yt="onPointerLeave",tt="onPointerEnter",X="pointer"),Je=ft==null?ot:H(ft),it=$t==null?ot:H($t),ot=new me(yt,X+"leave",ft,a,mt),ot.target=Je,ot.relatedTarget=it,yt=null,Ot(mt)===at&&(me=new me(tt,X+"enter",$t,a,mt),me.target=it,me.relatedTarget=Je,yt=me),Je=yt,ft&&$t)e:{for(me=Vv,tt=ft,X=$t,it=0,yt=tt;yt;yt=me(yt))it++;yt=0;for(var ue=X;ue;ue=me(ue))yt++;for(;0<it-yt;)tt=me(tt),it--;for(;0<yt-it;)X=me(X),yt--;for(;it--;){if(tt===X||X!==null&&tt===X.alternate){me=tt;break e}tt=me(tt),X=me(X)}me=null}else me=null;ft!==null&&Gm(bt,ot,ft,me,!1),$t!==null&&Je!==null&&Gm(bt,Je,$t,me,!0)}}t:{if(ot=at?H(at):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var Ve=ap;else if(np(ot))if(rp)Ve=$_;else{Ve=Q_;var se=K_}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?at&&qc(at.elementType)&&(Ve=ap):Ve=J_;if(Ve&&(Ve=Ve(e,at))){ip(bt,Ve,a,mt);break t}se&&se(e,ot,at),e==="focusout"&&at&&ot.type==="number"&&at.memoizedProps.value!=null&&Fe(ot,"number",ot.value)}switch(se=at?H(at):window,e){case"focusin":(np(se)||se.contentEditable==="true")&&(Xr=se,ru=at,to=null);break;case"focusout":to=ru=Xr=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,dp(bt,a,mt);break;case"selectionchange":if(ev)break;case"keydown":case"keyup":dp(bt,a,mt)}var Re;if(eu)t:{switch(e){case"compositionstart":var ze="onCompositionStart";break t;case"compositionend":ze="onCompositionEnd";break t;case"compositionupdate":ze="onCompositionUpdate";break t}ze=void 0}else kr?tp(e,a)&&(ze="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ze="onCompositionStart");ze&&(Qd&&a.locale!=="ko"&&(kr||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&kr&&(Re=Wd()):(Da=mt,Kc="value"in Da?Da.value:Da.textContent,kr=!0)),se=Kl(at,ze),0<se.length&&(ze=new Zd(ze,e,null,a,mt),bt.push({event:ze,listeners:se}),Re?ze.data=Re:(Re=ep(a),Re!==null&&(ze.data=Re)))),(Re=q_?W_(e,a):Y_(e,a))&&(ze=Kl(at,"onBeforeInput"),0<ze.length&&(se=new Zd("onBeforeInput","beforeinput",null,a,mt),bt.push({event:se,listeners:ze}),se.data=Re)),Fv(bt,e,at,a,mt)}Bm(bt,n)})}function Ao(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ws(e,a),u!=null&&o.unshift(Ao(e,u,f)),u=Ws(e,n),u!=null&&o.push(Ao(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Vv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gm(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var A=a,G=A.alternate,at=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||at===null||(G=at,u?(at=Ws(a,f),at!=null&&y.unshift(Ao(a,at,G))):u||(at=Ws(a,f),at!=null&&y.push(Ao(a,at,G)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var kv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function Vm(e){return(typeof e=="string"?e:""+e).replace(kv,`
`).replace(Xv,"")}function km(e,n){return n=Vm(n),Vm(e)===n}function Qe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hi(e,""+o);break;case"className":oe(e,"class",o);break;case"tabIndex":oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,a,o);break;case"style":kd(e,o,f);break;case"data":if(n!=="object"){oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=nl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Qe(e,n,"name",u.name,u,null),Qe(e,n,"formEncType",u.formEncType,u,null),Qe(e,n,"formMethod",u.formMethod,u,null),Qe(e,n,"formTarget",u.formTarget,u,null)):(Qe(e,n,"encType",u.encType,u,null),Qe(e,n,"method",u.method,u,null),Qe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=nl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=$i);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=nl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),le(e,"popover",o);break;case"xlinkActuate":ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ve(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ve(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ve(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ve(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":le(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=__.get(a)||a,le(e,a,o))}}function Lf(e,n,a,o,u,f){switch(a){case"style":kd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hi(e,o):(typeof o=="number"||typeof o=="bigint")&&Hi(e,""+o);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[un]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):le(e,a,o)}}}function zn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qe(e,n,f,y,a,null)}}u&&Qe(e,n,"srcSet",a.srcSet,a,null),o&&Qe(e,n,"src",a.src,a,null);return;case"input":Oe("invalid",e);var A=f=y=u=null,G=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":y=mt;break;case"checked":G=mt;break;case"defaultChecked":at=mt;break;case"value":f=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Qe(e,n,o,mt,a,null)}}fe(e,f,A,G,at,y,u,!1);return;case"select":Oe("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Qe(e,n,u,A,a,null)}n=f,a=y,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):a!=null&&rn(e,!!o,a,!0);return;case"textarea":Oe("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Qe(e,n,y,A,a,null)}Ln(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qe(e,n,G,o,a,null)}return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(o=0;o<To.length;o++)Oe(To[o],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qe(e,n,at,o,a,null)}return;default:if(qc(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Lf(e,n,mt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Qe(e,n,A,o,a,null))}function qv(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,A=null,G=null,at=null,mt=null;for(ft in a){var bt=a[ft];if(a.hasOwnProperty(ft)&&bt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=bt;default:o.hasOwnProperty(ft)||Qe(e,n,ft,null,o,bt)}}for(var ot in o){var ft=o[ot];if(bt=a[ot],o.hasOwnProperty(ot)&&(ft!=null||bt!=null))switch(ot){case"type":f=ft;break;case"name":u=ft;break;case"checked":at=ft;break;case"defaultChecked":mt=ft;break;case"value":y=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ft!==bt&&Qe(e,n,ot,ft,o,bt)}}Ee(e,y,A,G,at,mt,f,u);return;case"select":ft=y=A=ot=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ft=G;default:o.hasOwnProperty(f)||Qe(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ot=f;break;case"defaultValue":A=f;break;case"multiple":y=f;default:f!==G&&Qe(e,n,u,f,o,G)}n=A,a=y,o=ft,ot!=null?rn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":ft=ot=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Qe(e,n,A,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ot=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Qe(e,n,y,u,o,f)}Rn(e,ot,ft);return;case"option":for(var $t in a)if(ot=a[$t],a.hasOwnProperty($t)&&ot!=null&&!o.hasOwnProperty($t))switch($t){case"selected":e.selected=!1;break;default:Qe(e,n,$t,null,o,ot)}for(G in o)if(ot=o[G],ft=a[G],o.hasOwnProperty(G)&&ot!==ft&&(ot!=null||ft!=null))switch(G){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Qe(e,n,G,ot,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)ot=a[me],a.hasOwnProperty(me)&&ot!=null&&!o.hasOwnProperty(me)&&Qe(e,n,me,null,o,ot);for(at in o)if(ot=o[at],ft=a[at],o.hasOwnProperty(at)&&ot!==ft&&(ot!=null||ft!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:Qe(e,n,at,ot,o,ft)}return;default:if(qc(n)){for(var Je in a)ot=a[Je],a.hasOwnProperty(Je)&&ot!==void 0&&!o.hasOwnProperty(Je)&&Lf(e,n,Je,void 0,o,ot);for(mt in o)ot=o[mt],ft=a[mt],!o.hasOwnProperty(mt)||ot===ft||ot===void 0&&ft===void 0||Lf(e,n,mt,ot,o,ft);return}}for(var tt in a)ot=a[tt],a.hasOwnProperty(tt)&&ot!=null&&!o.hasOwnProperty(tt)&&Qe(e,n,tt,null,o,ot);for(bt in o)ot=o[bt],ft=a[bt],!o.hasOwnProperty(bt)||ot===ft||ot==null&&ft==null||Qe(e,n,bt,ot,o,ft)}function Xm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,A=u.duration;if(f&&A&&Xm(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],at=G.startTime;if(at>A)break;var mt=G.transferSize,bt=G.initiatorType;mt&&Xm(bt)&&(G=G.responseEnd,y+=mt*(G<A?1:(A-at)/(G-at)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nf=null,Of=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function qm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Yv(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var Ym=typeof setTimeout=="function"?setTimeout:void 0,jv=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,Zv=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(e){return jm.resolve(null).then(e).catch(Kv)}:Ym;function Kv(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function Zm(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),gs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var y=f.nextSibling,A=f.nodeName;f[pt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Ro(e.ownerDocument.body);a=u}while(a);gs(n)}function Km(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),St(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Qv(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[pt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function Jv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function Qm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bi(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function Bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $v(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function bi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Hf=null;function Jm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return bi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function $m(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function tx(e,n,a){switch(n=Ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);St(e)}var Ei=new Map,ex=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=$.d;$.d={f:ty,r:ey,D:ny,C:iy,L:ay,m:ry,X:oy,S:sy,M:ly};function ty(){var e=ma.f(),n=kl();return e||n}function ey(e){var n=b(e);n!==null&&n.tag===5&&n.type==="form"?_0(n):ma.r(e)}var ps=typeof document>"u"?null:document;function nx(e,n,a){var o=ps;if(o&&typeof n=="string"&&n){var u=pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ex.has(u)||(ex.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),zn(n,"link",e),Z(n),o.head.appendChild(n)))}}function ny(e){ma.D(e),nx("dns-prefetch",e,null)}function iy(e,n){ma.C(e,n),nx("preconnect",e,n)}function ay(e,n,a){ma.L(e,n,a);var o=ps;if(o&&e&&n){var u='link[rel="preload"][as="'+pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pe(a.imageSizes)+'"]')):u+='[href="'+pe(e)+'"]';var f=u;switch(n){case"style":f=ms(e);break;case"script":f=xs(e)}Ei.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ei.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(f))||n==="script"&&o.querySelector(wo(f))||(n=o.createElement("link"),zn(n,"link",e),Z(n),o.head.appendChild(n)))}}function ry(e,n){ma.m(e,n);var a=ps;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pe(o)+'"][href="'+pe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=xs(e)}if(!Ei.has(f)&&(e=x({rel:"modulepreload",href:e},n),Ei.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}o=a.createElement("link"),zn(o,"link",e),Z(o),a.head.appendChild(o)}}}function sy(e,n,a){ma.S(e,n,a);var o=ps;if(o&&e){var u=W(o).hoistableStyles,f=ms(e);n=n||"default";var y=u.get(f);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Co(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ei.get(f))&&Gf(e,a);var G=y=o.createElement("link");Z(G),zn(G,"link",e),G._p=new Promise(function(at,mt){G.onload=at,G.onerror=mt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,$l(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(f,y)}}}function oy(e,n){ma.X(e,n);var a=ps;if(a&&e){var o=W(a).hoistableScripts,u=xs(e),f=o.get(u);f||(f=a.querySelector(wo(u)),f||(e=x({src:e,async:!0},n),(n=Ei.get(u))&&Vf(e,n),f=a.createElement("script"),Z(f),zn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ly(e,n){ma.M(e,n);var a=ps;if(a&&e){var o=W(a).hoistableScripts,u=xs(e),f=o.get(u);f||(f=a.querySelector(wo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=Ei.get(u))&&Vf(e,n),f=a.createElement("script"),Z(f),zn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ix(e,n,a,o){var u=(u=Q.current)?Jl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ms(a.href),a=W(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ms(a.href);var f=W(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Co(e)))&&!f._p&&(y.instance=f,y.state.loading=5),Ei.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(e,a),f||cy(u,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xs(a),a=W(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ms(e){return'href="'+pe(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function ax(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function cy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),zn(n,"link",a),Z(n),e.head.appendChild(n))}function xs(e){return'[src="'+pe(e)+'"]'}function wo(e){return"script[async]"+e}function rx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pe(a.href)+'"]');if(o)return n.instance=o,Z(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Z(o),zn(o,"style",u),$l(o,a.precedence,e),n.instance=o;case"stylesheet":u=ms(a.href);var f=e.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,Z(f),f;o=ax(a),(u=Ei.get(u))&&Gf(o,u),f=(e.ownerDocument||e).createElement("link"),Z(f);var y=f;return y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),zn(f,"link",o),n.state.loading|=4,$l(f,a.precedence,e),n.instance=f;case"script":return f=xs(a.src),(u=e.querySelector(wo(f)))?(n.instance=u,Z(u),u):(o=a,(u=Ei.get(f))&&(o=x({},a),Vf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Z(u),zn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,e));return n.instance}function $l(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function sx(e,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[pt]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(f):o.set(y,[f])}}return o}function ox(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function uy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function lx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ms(o.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ec.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Z(f);return}f=n.ownerDocument||n,o=ax(o),(u=Ei.get(u))&&Gf(o,u),f=f.createElement("link"),Z(f);var y=f;y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),zn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ec.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function hy(e,n){return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&kf===0&&(kf=62500*Wv());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>kf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function ic(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(dy,e),nc=null,ec.call(e))}function dy(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var o=a.get(null);else{a=new Map,nc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=ec.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Do={$$typeof:C,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function py(e,n,a,o,u,f,y,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ge(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ge(0),this.hiddenUpdates=ge(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function cx(e,n,a,o,u,f,y,A,G,at,mt,bt){return e=new py(e,n,a,y,G,at,mt,bt,A),n=1,f===!0&&(n|=24),f=oi(3,null,null,n),e.current=f,f.stateNode=e,n=Su(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Tu(f),e}function ux(e){return e?(e=Yr,e):Yr}function fx(e,n,a,o,u,f){u=ux(u),o.context===null?o.context=u:o.pendingContext=u,o=za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ia(e,o,n),a!==null&&(ai(a,e,n),oo(a,e,n))}function hx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Xf(e,n){hx(e,n),(e=e.alternate)&&hx(e,n)}function dx(e){if(e.tag===13||e.tag===31){var n=dr(e,67108864);n!==null&&ai(n,e,67108864),Xf(e,67108864)}}function px(e){if(e.tag===13||e.tag===31){var n=hi();n=Kn(n);var a=dr(e,n);a!==null&&ai(a,e,n),Xf(e,n)}}var ac=!0;function my(e,n,a,o){var u=F.T;F.T=null;var f=$.p;try{$.p=2,qf(e,n,a,o)}finally{$.p=f,F.T=u}}function xy(e,n,a,o){var u=F.T;F.T=null;var f=$.p;try{$.p=8,qf(e,n,a,o)}finally{$.p=f,F.T=u}}function qf(e,n,a,o){if(ac){var u=Wf(o);if(u===null)Uf(e,n,o,rc,a),xx(e,o);else if(_y(u,e,n,a,o))o.stopPropagation();else if(xx(e,o),n&4&&-1<gy.indexOf(e)){for(;u!==null;){var f=b(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Dt(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var G=1<<31-Kt(y);A.entanglements[1]|=G,y&=~G}Xi(f),(We&6)===0&&(Gl=T()+500,Eo(0))}}break;case 31:case 13:A=dr(f,2),A!==null&&ai(A,f,2),kl(),Xf(f,2)}if(f=Wf(o),f===null&&Uf(e,n,o,rc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Uf(e,n,o,null,a)}}function Wf(e){return e=Yc(e),Yf(e)}var rc=null;function Yf(e){if(rc=null,e=Ot(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return rc=e,null}function mx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case gt:return 2;case Ct:return 8;case ct:case te:return 32;case zt:return 268435456;default:return 32}default:return 32}}var jf=!1,ja=null,Za=null,Ka=null,Uo=new Map,Lo=new Map,Qa=[],gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xx(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=b(n),n!==null&&dx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function _y(e,n,a,o,u){switch(n){case"focusin":return ja=No(ja,e,n,a,o,u),!0;case"dragenter":return Za=No(Za,e,n,a,o,u),!0;case"mouseover":return Ka=No(Ka,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,No(Uo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,No(Lo.get(f)||null,e,n,a,o,u)),!0}return!1}function gx(e){var n=Ot(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Qi(e.priority,function(){px(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Qi(e.priority,function(){px(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Wc=o,a.target.dispatchEvent(o),Wc=null}else return n=b(a),n!==null&&dx(n),e.blockedOn=a,!1;n.shift()}return!0}function _x(e,n,a){sc(e)&&a.delete(n)}function vy(){jf=!1,ja!==null&&sc(ja)&&(ja=null),Za!==null&&sc(Za)&&(Za=null),Ka!==null&&sc(Ka)&&(Ka=null),Uo.forEach(_x),Lo.forEach(_x)}function oc(e,n){e.blockedOn===n&&(e.blockedOn=null,jf||(jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,vy)))}var lc=null;function vx(e){lc!==e&&(lc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Yf(o||a)===null)continue;break}var f=b(a);f!==null&&(e.splice(n,3),n-=3,qu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function gs(e){function n(G){return oc(G,e)}ja!==null&&oc(ja,e),Za!==null&&oc(Za,e),Ka!==null&&oc(Ka,e),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)gx(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[un]||null;if(typeof f=="function")y||vx(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[un]||null)A=y.formAction;else if(Yf(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),vx(a)}}}function yx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Zf(e){this._internalRoot=e}cc.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=hi();fx(a,o,e,n,null,null)},cc.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;fx(e.current,2,null,e,null,null),kl(),n[Jn]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var n=qn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&gx(e)}};var Sx=t.version;if(Sx!=="19.2.0")throw Error(r(527,Sx,"19.2.0"));$.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var yy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{At=uc.inject(yy),Ut=uc}catch{}}return Po.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=C0,f=w0,y=D0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=cx(e,1,!1,null,null,a,o,null,u,f,y,yx),e[Jn]=n.current,Df(e),new Zf(n)},Po.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=C0,y=w0,A=D0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=cx(e,1,!0,n,a??null,o,u,G,f,y,A,yx),n.context=ux(null),a=n.current,o=hi(),o=Kn(o),u=za(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,An(n,a),Xi(n),e[Jn]=n.current,Df(e),new cc(n)},Po.version="19.2.0",Po}var Ux;function Ly(){if(Ux)return Jf.exports;Ux=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Jf.exports=Uy(),Jf.exports}var Ny=Ly();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ad="181",Oy=0,Lx=1,Py=2,Gg=1,zy=2,ba=3,lr=0,ri=1,Wi=2,Aa=0,Os=1,Nx=2,Ox=3,Px=4,Iy=5,Nr=100,Fy=101,By=102,Hy=103,Gy=104,Vy=200,ky=201,Xy=202,qy=203,Oh=204,Ph=205,Wy=206,Yy=207,jy=208,Zy=209,Ky=210,Qy=211,Jy=212,$y=213,tS=214,zh=0,Ih=1,Fh=2,zs=3,Bh=4,Hh=5,Gh=6,Vh=7,Vg=0,eS=1,nS=2,or=0,iS=1,aS=2,rS=3,sS=4,oS=5,lS=6,cS=7,kg=300,Is=301,Fs=302,kh=303,Xh=304,Gc=306,qh=1e3,Ea=1001,Wh=1002,xi=1003,uS=1004,fc=1005,Ci=1006,nh=1007,Pr=1008,Zi=1009,Xg=1010,qg=1011,Wo=1012,Rd=1013,Ir=1014,Ta=1015,Gs=1016,Cd=1017,wd=1018,Yo=1020,Wg=35902,Yg=35899,jg=1021,Zg=1022,Ii=1023,jo=1026,Zo=1027,Kg=1028,Dd=1029,Ud=1030,Ld=1031,Nd=1033,Oc=33776,Pc=33777,zc=33778,Ic=33779,Yh=35840,jh=35841,Zh=35842,Kh=35843,Qh=36196,Jh=37492,$h=37496,td=37808,ed=37809,nd=37810,id=37811,ad=37812,rd=37813,sd=37814,od=37815,ld=37816,cd=37817,ud=37818,fd=37819,hd=37820,dd=37821,pd=36492,md=36494,xd=36495,gd=36283,_d=36284,vd=36285,yd=36286,fS=3200,hS=3201,Qg=0,dS=1,rr="",Ai="srgb",Bs="srgb-linear",Bc="linear",$e="srgb",_s=7680,zx=519,pS=512,mS=513,xS=514,Jg=515,gS=516,_S=517,vS=518,yS=519,Ix=35044,Fx="300 es",Yi=2e3,Hc=2001;function $g(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ko(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function SS(){const s=Ko("canvas");return s.style.display="block",s}const Bx={};function Hx(...s){const t="THREE."+s.shift();console.log(t,...s)}function be(...s){const t="THREE."+s.shift();console.warn(t,...s)}function pn(...s){const t="THREE."+s.shift();console.error(t,...s)}function Qo(...s){const t=s.join(" ");t in Bx||(Bx[t]=!0,be(...s))}function MS(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Vs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gx=1234567;const Xo=Math.PI/180,Jo=180/Math.PI;function ks(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function Ie(s,t,i){return Math.max(t,Math.min(i,s))}function Od(s,t){return(s%t+t)%t}function bS(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function ES(s,t,i){return s!==t?(i-s)/(t-s):0}function qo(s,t,i){return(1-i)*s+i*t}function TS(s,t,i,r){return qo(s,t,1-Math.exp(-i*r))}function AS(s,t=1){return t-Math.abs(Od(s,t*2)-t)}function RS(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function CS(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function wS(s,t){return s+Math.floor(Math.random()*(t-s+1))}function DS(s,t){return s+Math.random()*(t-s)}function US(s){return s*(.5-Math.random())}function LS(s){s!==void 0&&(Gx=s);let t=Gx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function NS(s){return s*Xo}function OS(s){return s*Jo}function PS(s){return(s&s-1)===0&&s!==0}function zS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function IS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function FS(s,t,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+r)/2),g=h((t+r)/2),x=c((t-r)/2),v=h((t-r)/2),S=c((r-t)/2),E=h((r-t)/2);switch(l){case"XYX":s.set(d*g,m*x,m*v,d*p);break;case"YZY":s.set(m*v,d*g,m*x,d*p);break;case"ZXZ":s.set(m*x,m*v,d*g,d*p);break;case"XZX":s.set(d*g,m*E,m*S,d*p);break;case"YXY":s.set(m*S,d*g,m*E,d*p);break;case"ZYZ":s.set(m*E,m*S,d*g,d*p);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ns(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vn={DEG2RAD:Xo,RAD2DEG:Jo,generateUUID:ks,clamp:Ie,euclideanModulo:Od,mapLinear:bS,inverseLerp:ES,lerp:qo,damp:TS,pingpong:AS,smoothstep:RS,smootherstep:CS,randInt:wS,randFloat:DS,randFloatSpread:US,seededRandom:LS,degToRad:NS,radToDeg:OS,isPowerOfTwo:PS,ceilPowerOfTwo:zS,floorPowerOfTwo:IS,setQuaternionFromProperEuler:FS,normalize:jn,denormalize:Ns};class Ue{constructor(t=0,i=0){Ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ie(this.x,t.x,i.x),this.y=Ie(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ie(this.x,t,i),this.y=Ie(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ie(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3],v=c[h+0],S=c[h+1],E=c[h+2],R=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d>=1){t[i+0]=v,t[i+1]=S,t[i+2]=E,t[i+3]=R;return}if(x!==R||m!==v||p!==S||g!==E){let M=m*v+p*S+g*E+x*R;M<0&&(v=-v,S=-S,E=-E,R=-R,M=-M);let _=1-d;if(M<.9995){const L=Math.acos(M),C=Math.sin(L);_=Math.sin(_*L)/C,d=Math.sin(d*L)/C,m=m*_+v*d,p=p*_+S*d,g=g*_+E*d,x=x*_+R*d}else{m=m*_+v*d,p=p*_+S*d,g=g*_+E*d,x=x*_+R*d;const L=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=L,p*=L,g*=L,x*=L}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=c[h],v=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+g*x+m*S-p*v,t[i+1]=m*E+g*v+p*x-d*S,t[i+2]=p*E+g*S+d*v-m*x,t[i+3]=g*E-d*x-m*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(c/2),v=m(r/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=v*g*x+p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x-v*S*E;break;case"YXZ":this._x=v*g*x+p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x+v*S*E;break;case"ZXY":this._x=v*g*x-p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x-v*S*E;break;case"ZYX":this._x=v*g*x-p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x+v*S*E;break;case"YZX":this._x=v*g*x+p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x-v*S*E;break;case"XZY":this._x=v*g*x-p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x+v*S*E;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ht{constructor(t=0,i=0,r=0){ht.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Vx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Vx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),x=2*(c*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-c*x,this.z=l+m*x+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ie(this.x,t.x,i.x),this.y=Ie(this.y,t.y,i.y),this.z=Ie(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ie(this.x,t,i),this.y=Ie(this.y,t,i),this.z=Ie(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ih.copy(this).projectOnVector(t),this.sub(ih)}reflect(t){return this.sub(ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ie(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new ht,Vx=new $o;class Ce{constructor(t,i,r,l,c,h,d,m,p){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],S=r[5],E=r[8],R=l[0],M=l[3],_=l[6],L=l[1],C=l[4],N=l[7],z=l[2],U=l[5],O=l[8];return c[0]=h*R+d*L+m*z,c[3]=h*M+d*C+m*U,c[6]=h*_+d*N+m*O,c[1]=p*R+g*L+x*z,c[4]=p*M+g*C+x*U,c[7]=p*_+g*N+x*O,c[2]=v*R+S*L+E*z,c[5]=v*M+S*C+E*U,c[8]=v*_+S*N+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,v=d*m-g*c,S=p*c-h*m,E=i*x+r*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=x*R,t[1]=(l*p-g*r)*R,t[2]=(d*r-l*h)*R,t[3]=v*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=S*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ah.makeScale(t,i)),this}rotate(t){return this.premultiply(ah.makeRotation(-t)),this}translate(t,i){return this.premultiply(ah.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new Ce,kx=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xx=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BS(){const s={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===$e&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===$e&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rr?Bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Bs]:{primaries:t,whitePoint:r,transfer:Bc,toXYZ:kx,fromXYZ:Xx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:r,transfer:$e,toXYZ:kx,fromXYZ:Xx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),s}const Xe=BS();function Ra(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class HS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{vs===void 0&&(vs=Ko("canvas")),vs.width=t.width,vs.height=t.height;const l=vs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ko("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ra(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ra(i[r]/255)*255):i[r]=Ra(i[r]);return{data:i,width:t.width,height:t.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let GS=0;class Pd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(rh(l[h].image)):c.push(rh(l[h]))}else c=rh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function rh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?HS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let VS=0;const sh=new ht;class In extends Vs{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=Ea,l=Ea,c=Ci,h=Pr,d=Ii,m=Zi,p=In.DEFAULT_ANISOTROPY,g=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=ks(),this.name="",this.source=new Pd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){be(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){be(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qh:t.x=t.x-Math.floor(t.x);break;case Ea:t.x=t.x<0?0:1;break;case Wh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qh:t.y=t.y-Math.floor(t.y);break;case Ea:t.y=t.y<0?0:1;break;case Wh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=kg;In.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,i=0,r=0,l=1){ln.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],x=m[8],v=m[1],S=m[5],E=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+R)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,N=(S+1)/2,z=(_+1)/2,U=(g+v)/4,O=(x+R)/4,et=(E+M)/4;return C>N&&C>z?C<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(C),l=U/r,c=O/r):N>z?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=U/l,c=et/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=O/c,l=et/c),this.set(r,l,c,i),this}let L=Math.sqrt((M-E)*(M-E)+(x-R)*(x-R)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(M-E)/L,this.y=(x-R)/L,this.z=(v-g)/L,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ie(this.x,t.x,i.x),this.y=Ie(this.y,t.y,i.y),this.z=Ie(this.z,t.z,i.z),this.w=Ie(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ie(this.x,t,i),this.y=Ie(this.y,t,i),this.z=Ie(this.z,t,i),this.w=Ie(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kS extends Vs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new In(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Pd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends kS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class t_ extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class XS extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(t=new ht(1/0,1/0,1/0),i=new ht(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ni.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ni.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ni.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ni):Ni.fromBufferAttribute(c,h),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hc.copy(r.boundingBox)),hc.applyMatrix4(t.matrixWorld),this.union(hc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),dc.subVectors(this.max,zo),ys.subVectors(t.a,zo),Ss.subVectors(t.b,zo),Ms.subVectors(t.c,zo),$a.subVectors(Ss,ys),tr.subVectors(Ms,Ss),Ar.subVectors(ys,Ms);let i=[0,-$a.z,$a.y,0,-tr.z,tr.y,0,-Ar.z,Ar.y,$a.z,0,-$a.x,tr.z,0,-tr.x,Ar.z,0,-Ar.x,-$a.y,$a.x,0,-tr.y,tr.x,0,-Ar.y,Ar.x,0];return!oh(i,ys,Ss,Ms,dc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,ys,Ss,Ms,dc))?!1:(pc.crossVectors($a,tr),i=[pc.x,pc.y,pc.z],oh(i,ys,Ss,Ms,dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xa=[new ht,new ht,new ht,new ht,new ht,new ht,new ht,new ht],Ni=new ht,hc=new tl,ys=new ht,Ss=new ht,Ms=new ht,$a=new ht,tr=new ht,Ar=new ht,zo=new ht,dc=new ht,pc=new ht,Rr=new ht;function oh(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Rr.fromArray(s,c);const d=l.x*Math.abs(Rr.x)+l.y*Math.abs(Rr.y)+l.z*Math.abs(Rr.z),m=t.dot(Rr),p=i.dot(Rr),g=r.dot(Rr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const qS=new tl,Io=new ht,lh=new ht;class Vc{constructor(t=new ht,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):qS.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Io,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(lh)),this.expandByPoint(Io.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ga=new ht,ch=new ht,mc=new ht,er=new ht,uh=new ht,xc=new ht,fh=new ht;class zd{constructor(t=new ht,i=new ht(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ch.copy(t).add(i).multiplyScalar(.5),mc.copy(i).sub(t).normalize(),er.copy(this.origin).sub(ch);const c=t.distanceTo(i)*.5,h=-this.direction.dot(mc),d=er.dot(this.direction),m=-er.dot(mc),p=er.lengthSq(),g=Math.abs(1-h*h);let x,v,S,E;if(g>0)if(x=h*m-d,v=h*d-m,E=c*g,x>=0)if(v>=-E)if(v<=E){const R=1/g;x*=R,v*=R,S=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=c,x=Math.max(0,-(h*v+d)),S=-x*x+v*(v+2*m)+p;else v=-c,x=Math.max(0,-(h*v+d)),S=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-h*c+d)),v=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+p):(x=Math.max(0,-(h*c+d)),v=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+v*(v+2*m)+p);else v=h>0?-c:c,x=Math.max(0,-(h*v+d)),S=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ch).addScaledVector(mc,v),S}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const r=ga.dot(this.direction),l=ga.dot(ga)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,r,l,c){uh.subVectors(i,t),xc.subVectors(r,t),fh.crossVectors(uh,xc);let h=this.direction.dot(fh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;er.subVectors(this.origin,t);const m=d*this.direction.dot(xc.crossVectors(er,xc));if(m<0)return null;const p=d*this.direction.dot(uh.cross(er));if(p<0||m+p>h)return null;const g=-d*er.dot(fh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(t,i,r,l,c,h,d,m,p,g,x,v,S,E,R,M){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,x,v,S,E,R,M)}set(t,i,r,l,c,h,d,m,p,g,x,v,S,E,R,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=S,_[7]=E,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/bs.setFromMatrixColumn(t,0).length(),c=1/bs.setFromMatrixColumn(t,1).length(),h=1/bs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const v=h*g,S=h*x,E=d*g,R=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=S+E*p,i[5]=v-R*p,i[9]=-d*m,i[2]=R-v*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const v=m*g,S=m*x,E=p*g,R=p*x;i[0]=v+R*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=S*d-E,i[6]=R+v*d,i[10]=h*m}else if(t.order==="ZXY"){const v=m*g,S=m*x,E=p*g,R=p*x;i[0]=v-R*d,i[4]=-h*x,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*g,i[9]=R-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const v=h*g,S=h*x,E=d*g,R=d*x;i[0]=m*g,i[4]=E*p-S,i[8]=v*p+R,i[1]=m*x,i[5]=R*p+v,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const v=h*m,S=h*p,E=d*m,R=d*p;i[0]=m*g,i[4]=R-v*x,i[8]=E*x+S,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*x+E,i[10]=v-R*x}else if(t.order==="XZY"){const v=h*m,S=h*p,E=d*m,R=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+R,i[5]=h*g,i[9]=S*x-E,i[2]=E*x-S,i[6]=d*g,i[10]=R*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(WS,t,YS)}lookAt(t,i,r){const l=this.elements;return di.subVectors(t,i),di.lengthSq()===0&&(di.z=1),di.normalize(),nr.crossVectors(r,di),nr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),nr.crossVectors(r,di)),nr.normalize(),gc.crossVectors(di,nr),l[0]=nr.x,l[4]=gc.x,l[8]=di.x,l[1]=nr.y,l[5]=gc.y,l[9]=di.y,l[2]=nr.z,l[6]=gc.z,l[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],S=r[13],E=r[2],R=r[6],M=r[10],_=r[14],L=r[3],C=r[7],N=r[11],z=r[15],U=l[0],O=l[4],et=l[8],D=l[12],w=l[1],V=l[5],j=l[9],st=l[13],dt=l[2],lt=l[6],F=l[10],$=l[14],K=l[3],_t=l[7],Mt=l[11],I=l[15];return c[0]=h*U+d*w+m*dt+p*K,c[4]=h*O+d*V+m*lt+p*_t,c[8]=h*et+d*j+m*F+p*Mt,c[12]=h*D+d*st+m*$+p*I,c[1]=g*U+x*w+v*dt+S*K,c[5]=g*O+x*V+v*lt+S*_t,c[9]=g*et+x*j+v*F+S*Mt,c[13]=g*D+x*st+v*$+S*I,c[2]=E*U+R*w+M*dt+_*K,c[6]=E*O+R*V+M*lt+_*_t,c[10]=E*et+R*j+M*F+_*Mt,c[14]=E*D+R*st+M*$+_*I,c[3]=L*U+C*w+N*dt+z*K,c[7]=L*O+C*V+N*lt+z*_t,c[11]=L*et+C*j+N*F+z*Mt,c[15]=L*D+C*st+N*$+z*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],v=t[10],S=t[14],E=t[3],R=t[7],M=t[11],_=t[15];return E*(+c*m*x-l*p*x-c*d*v+r*p*v+l*d*S-r*m*S)+R*(+i*m*S-i*p*v+c*h*v-l*h*S+l*p*g-c*m*g)+M*(+i*p*x-i*d*S-c*h*x+r*h*S+c*d*g-r*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*h*x-r*h*v+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],v=t[10],S=t[11],E=t[12],R=t[13],M=t[14],_=t[15],L=x*M*p-R*v*p+R*m*S-d*M*S-x*m*_+d*v*_,C=E*v*p-g*M*p-E*m*S+h*M*S+g*m*_-h*v*_,N=g*R*p-E*x*p+E*d*S-h*R*S-g*d*_+h*x*_,z=E*x*m-g*R*m-E*d*v+h*R*v+g*d*M-h*x*M,U=i*L+r*C+l*N+c*z;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return t[0]=L*O,t[1]=(R*v*c-x*M*c-R*l*S+r*M*S+x*l*_-r*v*_)*O,t[2]=(d*M*c-R*m*c+R*l*p-r*M*p-d*l*_+r*m*_)*O,t[3]=(x*m*c-d*v*c-x*l*p+r*v*p+d*l*S-r*m*S)*O,t[4]=C*O,t[5]=(g*M*c-E*v*c+E*l*S-i*M*S-g*l*_+i*v*_)*O,t[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*_-i*m*_)*O,t[7]=(h*v*c-g*m*c+g*l*p-i*v*p-h*l*S+i*m*S)*O,t[8]=N*O,t[9]=(E*x*c-g*R*c-E*r*S+i*R*S+g*r*_-i*x*_)*O,t[10]=(h*R*c-E*d*c+E*r*p-i*R*p-h*r*_+i*d*_)*O,t[11]=(g*d*c-h*x*c-g*r*p+i*x*p+h*r*S-i*d*S)*O,t[12]=z*O,t[13]=(g*R*l-E*x*l+E*r*v-i*R*v-g*r*M+i*x*M)*O,t[14]=(E*d*l-h*R*l-E*r*m+i*R*m+h*r*M-i*d*M)*O,t[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*v+i*d*v)*O,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,x=d+d,v=c*p,S=c*g,E=c*x,R=h*g,M=h*x,_=d*x,L=m*p,C=m*g,N=m*x,z=r.x,U=r.y,O=r.z;return l[0]=(1-(R+_))*z,l[1]=(S+N)*z,l[2]=(E-C)*z,l[3]=0,l[4]=(S-N)*U,l[5]=(1-(v+_))*U,l[6]=(M+L)*U,l[7]=0,l[8]=(E+C)*O,l[9]=(M-L)*O,l[10]=(1-(v+R))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=bs.set(l[0],l[1],l[2]).length();const h=bs.set(l[4],l[5],l[6]).length(),d=bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Oi.copy(this);const p=1/c,g=1/h,x=1/d;return Oi.elements[0]*=p,Oi.elements[1]*=p,Oi.elements[2]*=p,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=x,Oi.elements[9]*=x,Oi.elements[10]*=x,i.setFromRotationMatrix(Oi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Yi,m=!1){const p=this.elements,g=2*c/(i-t),x=2*c/(r-l),v=(i+t)/(i-t),S=(r+l)/(r-l);let E,R;if(m)E=c/(h-c),R=h*c/(h-c);else if(d===Yi)E=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Hc)E=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Yi,m=!1){const p=this.elements,g=2/(i-t),x=2/(r-l),v=-(i+t)/(i-t),S=-(r+l)/(r-l);let E,R;if(m)E=1/(h-c),R=h/(h-c);else if(d===Yi)E=-2/(h-c),R=-(h+c)/(h-c);else if(d===Hc)E=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const bs=new ht,Oi=new cn,WS=new ht(0,0,0),YS=new ht(1,1,1),nr=new ht,gc=new ht,di=new ht,qx=new cn,Wx=new $o;class Ki{constructor(t=0,i=0,r=0,l=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ie(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ie(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return qx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Wx.setFromEuler(this),this.setFromQuaternion(Wx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jS=0;const Yx=new ht,Es=new $o,_a=new cn,_c=new ht,Fo=new ht,ZS=new ht,KS=new $o,jx=new ht(1,0,0),Zx=new ht(0,1,0),Kx=new ht(0,0,1),Qx={type:"added"},QS={type:"removed"},Ts={type:"childadded",child:null},hh={type:"childremoved",child:null};class Un extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new ht,i=new Ki,r=new $o,l=new ht(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new Ce}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(jx,t)}rotateY(t){return this.rotateOnAxis(Zx,t)}rotateZ(t){return this.rotateOnAxis(Kx,t)}translateOnAxis(t,i){return Yx.copy(t).applyQuaternion(this.quaternion),this.position.add(Yx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(jx,t)}translateY(t){return this.translateOnAxis(Zx,t)}translateZ(t){return this.translateOnAxis(Kx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?_c.copy(t):_c.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(Fo,_c,this.up):_a.lookAt(_c,Fo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(_a),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(pn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qx),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):pn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(QS),hh.child=t,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qx),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,ZS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,KS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),v=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Un.DEFAULT_UP=new ht(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new ht,va=new ht,dh=new ht,ya=new ht,As=new ht,Rs=new ht,Jx=new ht,ph=new ht,mh=new ht,xh=new ht,gh=new ln,_h=new ln,vh=new ln;class zi{constructor(t=new ht,i=new ht,r=new ht){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Pi.subVectors(t,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Pi.subVectors(l,i),va.subVectors(r,i),dh.subVectors(t,i);const h=Pi.dot(Pi),d=Pi.dot(va),m=Pi.dot(dh),p=va.dot(va),g=va.dot(dh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const v=1/x,S=(p*m-d*g)*v,E=(h*g-d*m)*v;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ya.x),m.addScaledVector(h,ya.y),m.addScaledVector(d,ya.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return gh.setScalar(0),_h.setScalar(0),vh.setScalar(0),gh.fromBufferAttribute(t,i),_h.fromBufferAttribute(t,r),vh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(gh,c.x),h.addScaledVector(_h,c.y),h.addScaledVector(vh,c.z),h}static isFrontFacing(t,i,r,l){return Pi.subVectors(r,i),va.subVectors(t,i),Pi.cross(va).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Pi.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return zi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return zi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;As.subVectors(l,r),Rs.subVectors(c,r),ph.subVectors(t,r);const m=As.dot(ph),p=Rs.dot(ph);if(m<=0&&p<=0)return i.copy(r);mh.subVectors(t,l);const g=As.dot(mh),x=Rs.dot(mh);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(As,h);xh.subVectors(t,c);const S=As.dot(xh),E=Rs.dot(xh);if(E>=0&&S<=E)return i.copy(c);const R=S*p-m*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Rs,d);const M=g*E-S*x;if(M<=0&&x-g>=0&&S-E>=0)return Jx.subVectors(c,l),d=(x-g)/(x-g+(S-E)),i.copy(l).addScaledVector(Jx,d);const _=1/(M+R+v);return h=R*_,d=v*_,i.copy(r).addScaledVector(As,h).addScaledVector(Rs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const e_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},vc={h:0,s:0,l:0};function yh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ge{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Xe.workingColorSpace){return this.r=t,this.g=i,this.b=r,Xe.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Xe.workingColorSpace){if(t=Od(t,1),i=Ie(i,0,1),r=Ie(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=yh(h,c,t+1/3),this.g=yh(h,c,t),this.b=yh(h,c,t-1/3)}return Xe.colorSpaceToWorking(this,l),this}setStyle(t,i=Ai){function r(c){c!==void 0&&parseFloat(c)<1&&be("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:be("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);be("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ai){const r=e_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):be("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ra(t.r),this.g=Ra(t.g),this.b=Ra(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Xe.workingToColorSpace(kn.copy(this),t),Math.round(Ie(kn.r*255,0,255))*65536+Math.round(Ie(kn.g*255,0,255))*256+Math.round(Ie(kn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Xe.workingColorSpace){Xe.workingToColorSpace(kn.copy(this),i);const r=kn.r,l=kn.g,c=kn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Xe.workingColorSpace){return Xe.workingToColorSpace(kn.copy(this),i),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Ai){Xe.workingToColorSpace(kn.copy(this),t);const i=kn.r,r=kn.g,l=kn.b;return t!==Ai?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ir),this.setHSL(ir.h+t,ir.s+i,ir.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ir),t.getHSL(vc);const r=qo(ir.h,vc.h,i),l=qo(ir.s,vc.s,i),c=qo(ir.l,vc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Ge;Ge.NAMES=e_;let JS=0;class Xs extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Os,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Ph,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){be(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){be(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Oh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ph&&(r.blendDst=this.blendDst),this.blendEquation!==Nr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fd extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mn=new ht,yc=new Ue;let $S=0;class ji{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$S++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Ix,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(t),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ns(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ns(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ns(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ns(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ns(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ix&&(t.usage=this.usage),t}}class n_ extends ji{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class i_ extends ji{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Xn extends ji{constructor(t,i,r){super(new Float32Array(t),i,r)}}let t1=0;const Ti=new cn,Sh=new Un,Cs=new ht,pi=new tl,Bo=new tl,wn=new ht;class wi extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($g(t)?i_:n_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Ce().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,r){return Ti.makeTranslation(t,i,r),this.applyMatrix4(Ti),this}scale(t,i,r){return Ti.makeScale(t,i,r),this.applyMatrix4(Ti),this}lookAt(t){return Sh.lookAt(t),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Xn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ht(-1/0,-1/0,-1/0),new ht(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ht,1/0);return}if(t){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(pi.min,Bo.min),pi.expandByPoint(wn),wn.addVectors(pi.max,Bo.max),pi.expandByPoint(wn)):(pi.expandByPoint(Bo.min),pi.expandByPoint(Bo.max))}pi.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)wn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(wn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)wn.fromBufferAttribute(d,p),m&&(Cs.fromBufferAttribute(t,p),wn.add(Cs)),l=Math.max(l,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&pn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){pn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let et=0;et<r.count;et++)d[et]=new ht,m[et]=new ht;const p=new ht,g=new ht,x=new ht,v=new Ue,S=new Ue,E=new Ue,R=new ht,M=new ht;function _(et,D,w){p.fromBufferAttribute(r,et),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,w),v.fromBufferAttribute(c,et),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(p),x.sub(p),S.sub(v),E.sub(v);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(V),M.copy(x).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),d[et].add(R),d[D].add(R),d[w].add(R),m[et].add(M),m[D].add(M),m[w].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let et=0,D=L.length;et<D;++et){const w=L[et],V=w.start,j=w.count;for(let st=V,dt=V+j;st<dt;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const C=new ht,N=new ht,z=new ht,U=new ht;function O(et){z.fromBufferAttribute(l,et),U.copy(z);const D=d[et];C.copy(D),C.sub(z.multiplyScalar(z.dot(D))).normalize(),N.crossVectors(U,D);const V=N.dot(m[et])<0?-1:1;h.setXYZW(et,C.x,C.y,C.z,V)}for(let et=0,D=L.length;et<D;++et){const w=L[et],V=w.start,j=w.count;for(let st=V,dt=V+j;st<dt;st+=3)O(t.getX(st+0)),O(t.getX(st+1)),O(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ji(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const l=new ht,c=new ht,h=new ht,d=new ht,m=new ht,p=new ht,g=new ht,x=new ht;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),R=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)wn.fromBufferAttribute(t,i),wn.normalize(),t.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let S=0,E=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?S=m[R]*d.data.stride+d.offset:S=m[R]*g;for(let _=0;_<g;_++)v[E++]=p[S++]}return new ji(v,g,x)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],S=t(v,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const S=p[x];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],x=c[p];for(let v=0,S=x.length;v<S;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $x=new cn,Cr=new zd,Sc=new Vc,tg=new ht,Mc=new ht,bc=new ht,Ec=new ht,Mh=new ht,Tc=new ht,eg=new ht,Ac=new ht;class mi extends Un{constructor(t=new wi,i=new Fd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Tc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],x=c[m];g!==0&&(Mh.fromBufferAttribute(x,t),h?Tc.addScaledVector(Mh,g):Tc.addScaledVector(Mh.sub(i),g))}i.add(Tc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(c),Cr.copy(t.ray).recast(t.near),!(Sc.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Sc,tg)===null||Cr.origin.distanceToSquared(tg)>(t.far-t.near)**2))&&($x.copy(c).invert(),Cr.copy(t.ray).applyMatrix4($x),!(r.boundingBox!==null&&Cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Cr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=v.length;E<R;E++){const M=v[E],_=h[M.materialIndex],L=Math.max(M.start,S.start),C=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let N=L,z=C;N<z;N+=3){const U=d.getX(N),O=d.getX(N+1),et=d.getX(N+2);l=Rc(this,_,t,r,p,g,x,U,O,et),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=E,_=R;M<_;M+=3){const L=d.getX(M),C=d.getX(M+1),N=d.getX(M+2);l=Rc(this,h,t,r,p,g,x,L,C,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,R=v.length;E<R;E++){const M=v[E],_=h[M.materialIndex],L=Math.max(M.start,S.start),C=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let N=L,z=C;N<z;N+=3){const U=N,O=N+1,et=N+2;l=Rc(this,_,t,r,p,g,x,U,O,et),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let M=E,_=R;M<_;M+=3){const L=M,C=M+1,N=M+2;l=Rc(this,h,t,r,p,g,x,L,C,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function e1(s,t,i,r,l,c,h,d){let m;if(t.side===ri?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===lr,d),m===null)return null;Ac.copy(d),Ac.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Ac);return p<i.near||p>i.far?null:{distance:p,point:Ac.clone(),object:s}}function Rc(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,Mc),s.getVertexPosition(m,bc),s.getVertexPosition(p,Ec);const g=e1(s,t,i,r,Mc,bc,Ec,eg);if(g){const x=new ht;zi.getBarycoord(eg,Mc,bc,Ec,x),l&&(g.uv=zi.getInterpolatedAttribute(l,d,m,p,x,new Ue)),c&&(g.uv1=zi.getInterpolatedAttribute(c,d,m,p,x,new Ue)),h&&(g.normal=zi.getInterpolatedAttribute(h,d,m,p,x,new ht),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new ht,materialIndex:0};zi.getNormal(Mc,bc,Ec,v.normal),g.face=v,g.barycoord=x}return g}class el extends wi{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Xn(p,3)),this.setAttribute("normal",new Xn(g,3)),this.setAttribute("uv",new Xn(x,2));function E(R,M,_,L,C,N,z,U,O,et,D){const w=N/O,V=z/et,j=N/2,st=z/2,dt=U/2,lt=O+1,F=et+1;let $=0,K=0;const _t=new ht;for(let Mt=0;Mt<F;Mt++){const I=Mt*V-st;for(let rt=0;rt<lt;rt++){const Tt=rt*w-j;_t[R]=Tt*L,_t[M]=I*C,_t[_]=dt,p.push(_t.x,_t.y,_t.z),_t[R]=0,_t[M]=0,_t[_]=U>0?1:-1,g.push(_t.x,_t.y,_t.z),x.push(rt/O),x.push(1-Mt/et),$+=1}}for(let Mt=0;Mt<et;Mt++)for(let I=0;I<O;I++){const rt=v+I+lt*Mt,Tt=v+I+lt*(Mt+1),Nt=v+(I+1)+lt*(Mt+1),kt=v+(I+1)+lt*Mt;m.push(rt,Tt,kt),m.push(Tt,Nt,kt),K+=6}d.addGroup(S,K,D),S+=K,v+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Zn(s){const t={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)t[l]=r[l]}return t}function n1(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function a_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xe.workingColorSpace}const i1={clone:Hs,merge:Zn};var a1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a1,this.fragmentShader=r1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=n1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class r_ extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new ht,ng=new Ue,ig=new Ue;class Ri extends r_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-t/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-t/ar.z)}getViewSize(t,i){return this.getViewBounds(t,ng,ig),i.subVectors(ig,ng)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Xo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ws=-90,Ds=1;class s1 extends Un{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(ws,Ds,t,i);l.layers=this.layers,this.add(l);const c=new Ri(ws,Ds,t,i);c.layers=this.layers,this.add(c);const h=new Ri(ws,Ds,t,i);h.layers=this.layers,this.add(h);const d=new Ri(ws,Ds,t,i);d.layers=this.layers,this.add(d);const m=new Ri(ws,Ds,t,i);m.layers=this.layers,this.add(m);const p=new Ri(ws,Ds,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,v,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class s_ extends In{constructor(t=[],i=Is,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class o1 extends Fr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new s_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new el(5,5,5),c=new Fi({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ri,blending:Aa});c.uniforms.tEquirect.value=i;const h=new mi(l,c),d=i.minFilter;return i.minFilter===Pr&&(i.minFilter=Ci),new s1(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Cc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l1={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ht,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ht),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ht,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ht),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(l1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Cc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class c1 extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class u1 extends In{constructor(t=null,i=1,r=1,l,c,h,d,m,p=xi,g=xi,x,v){super(null,h,d,m,p,g,l,c,x,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eh=new ht,f1=new ht,h1=new Ce;class Lr{constructor(t=new ht(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Eh.subVectors(r,i).cross(f1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Eh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||h1.getNormalMatrix(t),l=this.coplanarPoint(Eh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Vc,d1=new Ue(.5,.5),wc=new ht;class Bd{constructor(t=new Lr,i=new Lr,r=new Lr,l=new Lr,c=new Lr,h=new Lr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Yi,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],x=c[5],v=c[6],S=c[7],E=c[8],R=c[9],M=c[10],_=c[11],L=c[12],C=c[13],N=c[14],z=c[15];if(l[0].setComponents(p-h,S-g,_-E,z-L).normalize(),l[1].setComponents(p+h,S+g,_+E,z+L).normalize(),l[2].setComponents(p+d,S+x,_+R,z+C).normalize(),l[3].setComponents(p-d,S-x,_-R,z-C).normalize(),r)l[4].setComponents(m,v,M,N).normalize(),l[5].setComponents(p-m,S-v,_-M,z-N).normalize();else if(l[4].setComponents(p-m,S-v,_-M,z-N).normalize(),i===Yi)l[5].setComponents(p+m,S+v,_+M,z+N).normalize();else if(i===Hc)l[5].setComponents(m,v,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(t){wr.center.set(0,0,0);const i=d1.distanceTo(t.center);return wr.radius=.7071067811865476+i,wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p1 extends Xs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ag=new cn,Sd=new zd,Dc=new Vc,Uc=new ht;class rg extends Un{constructor(t=new wi,i=new p1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,t.ray.intersectsSphere(Dc)===!1)return;ag.copy(l).invert(),Sd.copy(t.ray).applyMatrix4(ag);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,x=r.attributes.position;if(p!==null){const v=Math.max(0,h.start),S=Math.min(p.count,h.start+h.count);for(let E=v,R=S;E<R;E++){const M=p.getX(E);Uc.fromBufferAttribute(x,M),sg(Uc,M,m,l,t,i,this)}}else{const v=Math.max(0,h.start),S=Math.min(x.count,h.start+h.count);for(let E=v,R=S;E<R;E++)Uc.fromBufferAttribute(x,E),sg(Uc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function sg(s,t,i,r,l,c,h){const d=Sd.distanceSqToPoint(s);if(d<i){const m=new ht;Sd.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Ho extends In{constructor(t,i,r,l,c,h,d,m,p){super(t,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class o_ extends In{constructor(t,i,r=Ir,l,c,h,d=xi,m=xi,p,g=jo,x=1){if(g!==jo&&g!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:x};super(v,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class l_ extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zr extends wi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,v=i/m,S=[],E=[],R=[],M=[];for(let _=0;_<g;_++){const L=_*v-h;for(let C=0;C<p;C++){const N=C*x-c;E.push(N,-L,0),R.push(0,0,1),M.push(C/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const C=L+p*_,N=L+p*(_+1),z=L+1+p*(_+1),U=L+1+p*_;S.push(C,N,U),S.push(N,z,U)}this.setIndex(S),this.setAttribute("position",new Xn(E,3)),this.setAttribute("normal",new Xn(R,3)),this.setAttribute("uv",new Xn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hd extends wi{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],x=new ht,v=new ht,S=[],E=[],R=[],M=[];for(let _=0;_<=r;_++){const L=[],C=_/r;let N=0;_===0&&h===0?N=.5/i:_===r&&m===Math.PI&&(N=-.5/i);for(let z=0;z<=i;z++){const U=z/i;x.x=-t*Math.cos(l+U*c)*Math.sin(h+C*d),x.y=t*Math.cos(h+C*d),x.z=t*Math.sin(l+U*c)*Math.sin(h+C*d),E.push(x.x,x.y,x.z),v.copy(x).normalize(),R.push(v.x,v.y,v.z),M.push(U+N,1-C),L.push(p++)}g.push(L)}for(let _=0;_<r;_++)for(let L=0;L<i;L++){const C=g[_][L+1],N=g[_][L],z=g[_+1][L],U=g[_+1][L+1];(_!==0||h>0)&&S.push(C,N,U),(_!==r-1||m<Math.PI)&&S.push(N,z,U)}this.setIndex(S),this.setAttribute("position",new Xn(E,3)),this.setAttribute("normal",new Xn(R,3)),this.setAttribute("uv",new Xn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class m1 extends Xs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qg,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class x1 extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class g1 extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Th={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _1{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,v=p.length;x<v;x+=2){const S=p[x],E=p[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const v1=new _1;class Gd{constructor(t){this.manager=t!==void 0?t:v1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Gd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Us=new WeakMap;class y1 extends Gd{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=Th.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let x=Us.get(h);x===void 0&&(x=[],Us.set(h,x)),x.push({onLoad:i,onError:l})}return h}const d=Ko("img");function m(){g(),i&&i(this);const x=Us.get(this)||[];for(let v=0;v<x.length;v++){const S=x[v];S.onLoad&&S.onLoad(this)}Us.delete(this),c.manager.itemEnd(t)}function p(x){g(),l&&l(x),Th.remove(`image:${t}`);const v=Us.get(this)||[];for(let S=0;S<v.length;S++){const E=v[S];E.onError&&E.onError(x)}Us.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Th.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class S1 extends Gd{constructor(t){super(t)}load(t,i,r,l){const c=new In,h=new y1(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class c_ extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class M1 extends c_{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Ah=new cn,og=new ht,lg=new ht;class b1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;og.setFromMatrixPosition(t.matrixWorld),i.position.copy(og),lg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(lg),i.updateMatrixWorld(),Ah.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ah)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class u_ extends r_{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class E1 extends b1{constructor(){super(new u_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T1 extends c_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new E1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class A1 extends Ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const cg=new cn;class R1{constructor(t,i,r=0,l=1/0){this.ray=new zd(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Id,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):pn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return cg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cg),this}intersectObject(t,i=!0,r=[]){return Md(t,this,r,i),r.sort(ug),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Md(t[l],this,r,i);return r.sort(ug),r}}function ug(s,t){return s.distance-t.distance}function Md(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,d=c.length;h<d;h++)Md(c[h],t,i,!0)}}function fg(s,t,i,r){const l=C1(r);switch(i){case jg:return s*t;case Kg:return s*t/l.components*l.byteLength;case Dd:return s*t/l.components*l.byteLength;case Ud:return s*t*2/l.components*l.byteLength;case Ld:return s*t*2/l.components*l.byteLength;case Zg:return s*t*3/l.components*l.byteLength;case Ii:return s*t*4/l.components*l.byteLength;case Nd:return s*t*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zc:case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jh:case Kh:return Math.max(s,16)*Math.max(t,8)/4;case Yh:case Zh:return Math.max(s,8)*Math.max(t,8)/2;case Qh:case Jh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $h:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case td:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ed:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case nd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case id:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ad:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case rd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case sd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case od:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ld:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case cd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ud:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case fd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case hd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case dd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case pd:case md:case xd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gd:case _d:return Math.ceil(s/4)*Math.ceil(t/4)*8;case vd:case yd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function C1(s){switch(s){case Zi:case Xg:return{byteLength:1,components:1};case Wo:case qg:case Gs:return{byteLength:2,components:1};case Cd:case wd:return{byteLength:2,components:4};case Ir:case Rd:case Ta:return{byteLength:4,components:1};case Wg:case Yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function f_(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function w1(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],R=x[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++v,x[v]=R)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const R=x[S];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var D1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U1=`#ifdef USE_ALPHAHASH
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
#endif`,L1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z1=`#ifdef USE_AOMAP
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
#endif`,I1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F1=`#ifdef USE_BATCHING
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
#endif`,B1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k1=`#ifdef USE_IRIDESCENCE
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
#endif`,X1=`#ifdef USE_BUMPMAP
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
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$1=`#define PI 3.141592653589793
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
} // validated`,tM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eM=`vec3 transformedNormal = objectNormal;
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
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sM="gl_FragColor = linearToOutputTexel( gl_FragColor );",oM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
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
}`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SM=`uniform bool receiveShadow;
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
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,bM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
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
#endif`,CM=`uniform sampler2D dfgLUT;
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
}`,wM=`
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
#endif`,DM=`#if defined( RE_IndirectDiffuse )
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
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BM=`#if defined( USE_POINTS_UV )
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
#endif`,HM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`#ifdef USE_MORPHTARGETS
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
#endif`,WM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
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
#endif`,$M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pb=`float getShadowMask() {
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
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xb=`#ifdef USE_SKINNING
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
#endif`,gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_b=`#ifdef USE_SKINNING
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
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bb=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
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
}`,zb=`#if DEPTH_PACKING == 3200
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
}`,Ib=`#define DISTANCE
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
}`,Fb=`#define DISTANCE
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
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`uniform float scale;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,Xb=`uniform vec3 diffuse;
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
}`,qb=`#define LAMBERT
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
}`,Wb=`#define LAMBERT
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
}`,Yb=`#define MATCAP
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
}`,jb=`#define MATCAP
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
}`,Zb=`#define NORMAL
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
}`,Kb=`#define NORMAL
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
}`,Qb=`#define PHONG
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
}`,Jb=`#define PHONG
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
}`,$b=`#define STANDARD
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
}`,t3=`#define STANDARD
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
}`,e3=`#define TOON
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
}`,n3=`#define TOON
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
}`,i3=`uniform float size;
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
}`,a3=`uniform vec3 diffuse;
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
}`,r3=`#include <common>
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
}`,s3=`uniform vec3 color;
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
}`,o3=`uniform float rotation;
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
}`,l3=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:D1,alphahash_pars_fragment:U1,alphamap_fragment:L1,alphamap_pars_fragment:N1,alphatest_fragment:O1,alphatest_pars_fragment:P1,aomap_fragment:z1,aomap_pars_fragment:I1,batching_pars_vertex:F1,batching_vertex:B1,begin_vertex:H1,beginnormal_vertex:G1,bsdfs:V1,iridescence_fragment:k1,bumpmap_pars_fragment:X1,clipping_planes_fragment:q1,clipping_planes_pars_fragment:W1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:j1,color_fragment:Z1,color_pars_fragment:K1,color_pars_vertex:Q1,color_vertex:J1,common:$1,cube_uv_reflection_fragment:tM,defaultnormal_vertex:eM,displacementmap_pars_vertex:nM,displacementmap_vertex:iM,emissivemap_fragment:aM,emissivemap_pars_fragment:rM,colorspace_fragment:sM,colorspace_pars_fragment:oM,envmap_fragment:lM,envmap_common_pars_fragment:cM,envmap_pars_fragment:uM,envmap_pars_vertex:fM,envmap_physical_pars_fragment:MM,envmap_vertex:hM,fog_vertex:dM,fog_pars_vertex:pM,fog_fragment:mM,fog_pars_fragment:xM,gradientmap_pars_fragment:gM,lightmap_pars_fragment:_M,lights_lambert_fragment:vM,lights_lambert_pars_fragment:yM,lights_pars_begin:SM,lights_toon_fragment:bM,lights_toon_pars_fragment:EM,lights_phong_fragment:TM,lights_phong_pars_fragment:AM,lights_physical_fragment:RM,lights_physical_pars_fragment:CM,lights_fragment_begin:wM,lights_fragment_maps:DM,lights_fragment_end:UM,logdepthbuf_fragment:LM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:OM,logdepthbuf_vertex:PM,map_fragment:zM,map_pars_fragment:IM,map_particle_fragment:FM,map_particle_pars_fragment:BM,metalnessmap_fragment:HM,metalnessmap_pars_fragment:GM,morphinstance_vertex:VM,morphcolor_vertex:kM,morphnormal_vertex:XM,morphtarget_pars_vertex:qM,morphtarget_vertex:WM,normal_fragment_begin:YM,normal_fragment_maps:jM,normal_pars_fragment:ZM,normal_pars_vertex:KM,normal_vertex:QM,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:$M,clearcoat_normal_fragment_maps:tb,clearcoat_pars_fragment:eb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:ab,premultiplied_alpha_fragment:rb,project_vertex:sb,dithering_fragment:ob,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:fb,shadowmap_pars_vertex:hb,shadowmap_vertex:db,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:xb,skinning_vertex:gb,skinnormal_vertex:_b,specularmap_fragment:vb,specularmap_pars_fragment:yb,tonemapping_fragment:Sb,tonemapping_pars_fragment:Mb,transmission_fragment:bb,transmission_pars_fragment:Eb,uv_pars_fragment:Tb,uv_pars_vertex:Ab,uv_vertex:Rb,worldpos_vertex:Cb,background_vert:wb,background_frag:Db,backgroundCube_vert:Ub,backgroundCube_frag:Lb,cube_vert:Nb,cube_frag:Ob,depth_vert:Pb,depth_frag:zb,distanceRGBA_vert:Ib,distanceRGBA_frag:Fb,equirect_vert:Bb,equirect_frag:Hb,linedashed_vert:Gb,linedashed_frag:Vb,meshbasic_vert:kb,meshbasic_frag:Xb,meshlambert_vert:qb,meshlambert_frag:Wb,meshmatcap_vert:Yb,meshmatcap_frag:jb,meshnormal_vert:Zb,meshnormal_frag:Kb,meshphong_vert:Qb,meshphong_frag:Jb,meshphysical_vert:$b,meshphysical_frag:t3,meshtoon_vert:e3,meshtoon_frag:n3,points_vert:i3,points_frag:a3,shadow_vert:r3,shadow_frag:s3,sprite_vert:o3,sprite_frag:l3},Vt={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},qi={basic:{uniforms:Zn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Zn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ge(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Zn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Zn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Zn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Ge(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Zn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Zn([Vt.points,Vt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Zn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Zn([Vt.common,Vt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Zn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Zn([Vt.sprite,Vt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:Zn([Vt.common,Vt.displacementmap,{referencePosition:{value:new ht},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:Zn([Vt.lights,Vt.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};qi.physical={uniforms:Zn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const Lc={r:0,b:0,g:0},Dr=new Ki,c3=new cn;function u3(s,t,i,r,l,c,h){const d=new Ge(0);let m=c===!0?0:1,p,g,x=null,v=0,S=null;function E(C){let N=C.isScene===!0?C.background:null;return N&&N.isTexture&&(N=(C.backgroundBlurriness>0?i:t).get(N)),N}function R(C){let N=!1;const z=E(C);z===null?_(d,m):z&&z.isColor&&(_(z,1),N=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,h):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(C,N){const z=E(N);z&&(z.isCubeTexture||z.mapping===Gc)?(g===void 0&&(g=new mi(new el(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Hs(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(U,O,et){this.matrixWorld.copyPosition(et.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Dr.copy(N.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(c3.makeRotationFromEuler(Dr)),g.material.toneMapped=Xe.getTransfer(z.colorSpace)!==$e,(x!==z||v!==z.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=z,v=z.version,S=s.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new mi(new zr(2,2),new Fi({name:"BackgroundMaterial",uniforms:Hs(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Xe.getTransfer(z.colorSpace)!==$e,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(x!==z||v!==z.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,x=z,v=z.version,S=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function _(C,N){C.getRGB(Lc,a_(s)),r.buffers.color.setClear(Lc.r,Lc.g,Lc.b,N,h)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,N=1){d.set(C),m=N,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,_(d,m)},render:R,addToRenderList:M,dispose:L}}function f3(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,h=!1;function d(w,V,j,st,dt){let lt=!1;const F=x(st,j,V);c!==F&&(c=F,p(c.object)),lt=S(w,st,j,dt),lt&&E(w,st,j,dt),dt!==null&&t.update(dt,s.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,N(w,V,j,st),dt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function x(w,V,j){const st=j.wireframe===!0;let dt=r[w.id];dt===void 0&&(dt={},r[w.id]=dt);let lt=dt[V.id];lt===void 0&&(lt={},dt[V.id]=lt);let F=lt[st];return F===void 0&&(F=v(m()),lt[st]=F),F}function v(w){const V=[],j=[],st=[];for(let dt=0;dt<i;dt++)V[dt]=0,j[dt]=0,st[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:st,object:w,attributes:{},index:null}}function S(w,V,j,st){const dt=c.attributes,lt=V.attributes;let F=0;const $=j.getAttributes();for(const K in $)if($[K].location>=0){const Mt=dt[K];let I=lt[K];if(I===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(I=w.instanceColor)),Mt===void 0||Mt.attribute!==I||I&&Mt.data!==I.data)return!0;F++}return c.attributesNum!==F||c.index!==st}function E(w,V,j,st){const dt={},lt=V.attributes;let F=0;const $=j.getAttributes();for(const K in $)if($[K].location>=0){let Mt=lt[K];Mt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor));const I={};I.attribute=Mt,Mt&&Mt.data&&(I.data=Mt.data),dt[K]=I,F++}c.attributes=dt,c.attributesNum=F,c.index=st}function R(){const w=c.newAttributes;for(let V=0,j=w.length;V<j;V++)w[V]=0}function M(w){_(w,0)}function _(w,V){const j=c.newAttributes,st=c.enabledAttributes,dt=c.attributeDivisors;j[w]=1,st[w]===0&&(s.enableVertexAttribArray(w),st[w]=1),dt[w]!==V&&(s.vertexAttribDivisor(w,V),dt[w]=V)}function L(){const w=c.newAttributes,V=c.enabledAttributes;for(let j=0,st=V.length;j<st;j++)V[j]!==w[j]&&(s.disableVertexAttribArray(j),V[j]=0)}function C(w,V,j,st,dt,lt,F){F===!0?s.vertexAttribIPointer(w,V,j,dt,lt):s.vertexAttribPointer(w,V,j,st,dt,lt)}function N(w,V,j,st){R();const dt=st.attributes,lt=j.getAttributes(),F=V.defaultAttributeValues;for(const $ in lt){const K=lt[$];if(K.location>=0){let _t=dt[$];if(_t===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),_t!==void 0){const Mt=_t.normalized,I=_t.itemSize,rt=t.get(_t);if(rt===void 0)continue;const Tt=rt.buffer,Nt=rt.type,kt=rt.bytesPerElement,Q=Nt===s.INT||Nt===s.UNSIGNED_INT||_t.gpuType===Rd;if(_t.isInterleavedBufferAttribute){const ut=_t.data,Ft=ut.stride,Xt=_t.offset;if(ut.isInstancedInterleavedBuffer){for(let ee=0;ee<K.locationSize;ee++)_(K.location+ee,ut.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ee=0;ee<K.locationSize;ee++)M(K.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Tt);for(let ee=0;ee<K.locationSize;ee++)C(K.location+ee,I/K.locationSize,Nt,Mt,Ft*kt,(Xt+I/K.locationSize*ee)*kt,Q)}else{if(_t.isInstancedBufferAttribute){for(let ut=0;ut<K.locationSize;ut++)_(K.location+ut,_t.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ut=0;ut<K.locationSize;ut++)M(K.location+ut);s.bindBuffer(s.ARRAY_BUFFER,Tt);for(let ut=0;ut<K.locationSize;ut++)C(K.location+ut,I/K.locationSize,Nt,Mt,I*kt,I/K.locationSize*ut*kt,Q)}}else if(F!==void 0){const Mt=F[$];if(Mt!==void 0)switch(Mt.length){case 2:s.vertexAttrib2fv(K.location,Mt);break;case 3:s.vertexAttrib3fv(K.location,Mt);break;case 4:s.vertexAttrib4fv(K.location,Mt);break;default:s.vertexAttrib1fv(K.location,Mt)}}}}L()}function z(){et();for(const w in r){const V=r[w];for(const j in V){const st=V[j];for(const dt in st)g(st[dt].object),delete st[dt];delete V[j]}delete r[w]}}function U(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const j in V){const st=V[j];for(const dt in st)g(st[dt].object),delete st[dt];delete V[j]}delete r[w.id]}function O(w){for(const V in r){const j=r[V];if(j[w.id]===void 0)continue;const st=j[w.id];for(const dt in st)g(st[dt].object),delete st[dt];delete j[w.id]}}function et(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:et,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:M,disableUnusedAttributes:L}}function h3(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=g[E];i.update(S,r,1)}function m(p,g,x,v){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let E=0;for(let R=0;R<x;R++)E+=g[R]*v[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function d3(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Ii&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const et=O===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Zi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ta&&!et)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(be("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:N,vertexTextures:z,maxSamples:U}}function p3(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Lr,d=new Ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||l;return l=v,r=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,R=x.clipIntersection,M=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const L=c?0:r,C=L*4;let N=_.clippingState||null;m.value=N,N=g(E,v,C,S);for(let z=0;z!==C;++z)N[z]=i[z];_.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,v,S,E){const R=x!==null?x.length:0;let M=null;if(R!==0){if(M=m.value,E!==!0||M===null){const _=S+R*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(M===null||M.length<_)&&(M=new Float32Array(_));for(let C=0,N=S;C!==R;++C,N+=4)h.copy(x[C]).applyMatrix4(L,d),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function m3(s){let t=new WeakMap;function i(h,d){return d===kh?h.mapping=Is:d===Xh&&(h.mapping=Fs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===kh||d===Xh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new o1(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const sr=4,hg=[.125,.215,.35,.446,.526,.582],Or=20,x3=256,Go=new u_,dg=new Ge;let Rh=null,Ch=0,wh=0,Dh=!1;const g3=new ht;class pg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=g3}=c;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,Ch,wh),this._renderer.xr.enabled=Dh,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Gs,format:Ii,colorSpace:Bs,depthBuffer:!1},l=mg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_3(c)),this._blurMaterial=y3(c,t,i)}return l}_compileMaterial(t){const i=new mi(new wi,t);this._renderer.compile(i,Go)}_sceneToCubeUV(t,i,r,l,c){const m=new Ri(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,S=x.toneMapping;x.getClearColor(dg),x.toneMapping=or,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new el,new Fd({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let _=!1;const L=t.background;L?L.isColor&&(M.color.copy(L),t.background=null,_=!0):(M.color.copy(dg),_=!0);for(let C=0;C<6;C++){const N=C%3;N===0?(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[C],c.y,c.z)):N===1?(m.up.set(0,0,p[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[C],c.z)):(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[C]));const z=this._cubeSize;Ls(l,N*z,C>2?z:0,z,z),x.setRenderTarget(l),_&&x.render(R,m),x.render(t,m)}x.toneMapping=S,x.autoClear=v,t.background=L}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Is||t.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xg());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Go)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const L=3*Math.max(this._cubeSize,16),C=4*this._cubeSize;this._ggxMaterial=v3(this._lodMax,L,C)}const h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),v=.05+p*.95,S=x*v,{_lodMax:E}=this,R=this._sizeLods[r],M=3*R*(r>E-sr?r-E+sr:0),_=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Ls(c,M,_,3*R,2*R),l.setRenderTarget(c),l.render(d,Go),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ls(t,M,_,3*R,2*R),l.setRenderTarget(t),l.render(d,Go)}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&pn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const v=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Or-1),R=c/E,M=isFinite(c)?1+Math.floor(g*R):Or;M>Or&&be(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Or}`);const _=[];let L=0;for(let O=0;O<Or;++O){const et=O/R,D=Math.exp(-et*et/2);_.push(D),O===0?L+=D:O<M&&(L+=2*D)}for(let O=0;O<_.length;O++)_[O]=_[O]/L;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:C}=this;v.dTheta.value=E,v.mipInt.value=C-r;const N=this._sizeLods[l],z=3*N*(l>C-sr?l-C+sr:0),U=4*(this._cubeSize-N);Ls(i,z,U,3*N,2*N),m.setRenderTarget(i),m.render(x,Go)}}function _3(s){const t=[],i=[],r=[];let l=s;const c=s-sr+1+hg.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>s-sr?m=hg[h-s+sr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,E=6,R=3,M=2,_=1,L=new Float32Array(R*E*S),C=new Float32Array(M*E*S),N=new Float32Array(_*E*S);for(let U=0;U<S;U++){const O=U%3*2/3-1,et=U>2?0:-1,D=[O,et,0,O+2/3,et,0,O+2/3,et+1,0,O,et,0,O+2/3,et+1,0,O,et+1,0];L.set(D,R*E*U),C.set(v,M*E*U);const w=[U,U,U,U,U,U];N.set(w,_*E*U)}const z=new wi;z.setAttribute("position",new ji(L,R)),z.setAttribute("uv",new ji(C,M)),z.setAttribute("faceIndex",new ji(N,_)),r.push(new mi(z,null)),l>sr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function mg(s,t,i){const r=new Fr(s,t,i);return r.texture.mapping=Gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ls(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function v3(s,t,i){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function y3(s,t,i){const r=new Float32Array(Or),l=new ht(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function xg(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function gg(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function S3(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===kh||m===Xh,g=m===Is||m===Fs;if(p||g){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new pg(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new pg(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function M3(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Qo("WebGLRenderer: "+r+" extension not supported."),l}}}function b3(s,t,i,r){const l={},c=new WeakMap;function h(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function p(x){const v=[],S=x.index,E=x.attributes.position;let R=0;if(S!==null){const L=S.array;R=S.version;for(let C=0,N=L.length;C<N;C+=3){const z=L[C+0],U=L[C+1],O=L[C+2];v.push(z,U,U,O,O,z)}}else if(E!==void 0){const L=E.array;R=E.version;for(let C=0,N=L.length/3-1;C<N;C+=3){const z=C+0,U=C+1,O=C+2;v.push(z,U,U,O,O,z)}}else return;const M=new($g(v)?i_:n_)(v,1);M.version=R;const _=c.get(x);_&&t.remove(_),c.set(x,M)}function g(x){const v=c.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function E3(s,t,i){let r;function l(v){r=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function m(v,S){s.drawElements(r,S,c,v*h),i.update(S,r,1)}function p(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,v*h,E),i.update(S,r,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,v,0,E);let M=0;for(let _=0;_<E;_++)M+=S[_];i.update(M,r,1)}function x(v,S,E,R){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<v.length;_++)p(v[_]/h,S[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,R,0,E);let _=0;for(let L=0;L<E;L++)_+=S[L]*R[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function T3(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:pn("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function A3(s,t,i){const r=new WeakMap,l=new ln;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let w=function(){et.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),R===!0&&(N=2),M===!0&&(N=3);let z=d.attributes.position.count*N,U=1;z>t.maxTextureSize&&(U=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const O=new Float32Array(z*U*4*x),et=new t_(O,z,U,x);et.type=Ta,et.needsUpdate=!0;const D=N*4;for(let V=0;V<x;V++){const j=_[V],st=L[V],dt=C[V],lt=z*U*4*V;for(let F=0;F<j.count;F++){const $=F*D;E===!0&&(l.fromBufferAttribute(j,F),O[lt+$+0]=l.x,O[lt+$+1]=l.y,O[lt+$+2]=l.z,O[lt+$+3]=0),R===!0&&(l.fromBufferAttribute(st,F),O[lt+$+4]=l.x,O[lt+$+5]=l.y,O[lt+$+6]=l.z,O[lt+$+7]=0),M===!0&&(l.fromBufferAttribute(dt,F),O[lt+$+8]=l.x,O[lt+$+9]=l.y,O[lt+$+10]=l.z,O[lt+$+11]=dt.itemSize===4?l.w:1)}}v={count:x,texture:et,size:new Ue(z,U)},r.set(d,v),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function R3(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const h_=new In,_g=new o_(1,1),d_=new t_,p_=new XS,m_=new s_,vg=[],yg=[],Sg=new Float32Array(16),Mg=new Float32Array(9),bg=new Float32Array(4);function qs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=vg[l];if(c===void 0&&(c=new Float32Array(l),vg[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function En(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Tn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Xc(s,t){let i=yg[t];i===void 0&&(i=new Int32Array(t),yg[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function C3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function w3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2fv(this.addr,t),Tn(i,t)}}function D3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;s.uniform3fv(this.addr,t),Tn(i,t)}}function U3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4fv(this.addr,t),Tn(i,t)}}function L3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;bg.set(r),s.uniformMatrix2fv(this.addr,!1,bg),Tn(i,r)}}function N3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;Mg.set(r),s.uniformMatrix3fv(this.addr,!1,Mg),Tn(i,r)}}function O3(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;Sg.set(r),s.uniformMatrix4fv(this.addr,!1,Sg),Tn(i,r)}}function P3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function z3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2iv(this.addr,t),Tn(i,t)}}function I3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;s.uniform3iv(this.addr,t),Tn(i,t)}}function F3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4iv(this.addr,t),Tn(i,t)}}function B3(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function H3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;s.uniform2uiv(this.addr,t),Tn(i,t)}}function G3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;s.uniform3uiv(this.addr,t),Tn(i,t)}}function V3(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;s.uniform4uiv(this.addr,t),Tn(i,t)}}function k3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(_g.compareFunction=Jg,c=_g):c=h_,i.setTexture2D(t||c,l)}function X3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||p_,l)}function q3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||m_,l)}function W3(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||d_,l)}function Y3(s){switch(s){case 5126:return C3;case 35664:return w3;case 35665:return D3;case 35666:return U3;case 35674:return L3;case 35675:return N3;case 35676:return O3;case 5124:case 35670:return P3;case 35667:case 35671:return z3;case 35668:case 35672:return I3;case 35669:case 35673:return F3;case 5125:return B3;case 36294:return H3;case 36295:return G3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return k3;case 35679:case 36299:case 36307:return X3;case 35680:case 36300:case 36308:case 36293:return q3;case 36289:case 36303:case 36311:case 36292:return W3}}function j3(s,t){s.uniform1fv(this.addr,t)}function Z3(s,t){const i=qs(t,this.size,2);s.uniform2fv(this.addr,i)}function K3(s,t){const i=qs(t,this.size,3);s.uniform3fv(this.addr,i)}function Q3(s,t){const i=qs(t,this.size,4);s.uniform4fv(this.addr,i)}function J3(s,t){const i=qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function $3(s,t){const i=qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function tE(s,t){const i=qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function eE(s,t){s.uniform1iv(this.addr,t)}function nE(s,t){s.uniform2iv(this.addr,t)}function iE(s,t){s.uniform3iv(this.addr,t)}function aE(s,t){s.uniform4iv(this.addr,t)}function rE(s,t){s.uniform1uiv(this.addr,t)}function sE(s,t){s.uniform2uiv(this.addr,t)}function oE(s,t){s.uniform3uiv(this.addr,t)}function lE(s,t){s.uniform4uiv(this.addr,t)}function cE(s,t,i){const r=this.cache,l=t.length,c=Xc(i,l);En(r,c)||(s.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||h_,c[h])}function uE(s,t,i){const r=this.cache,l=t.length,c=Xc(i,l);En(r,c)||(s.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||p_,c[h])}function fE(s,t,i){const r=this.cache,l=t.length,c=Xc(i,l);En(r,c)||(s.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||m_,c[h])}function hE(s,t,i){const r=this.cache,l=t.length,c=Xc(i,l);En(r,c)||(s.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||d_,c[h])}function dE(s){switch(s){case 5126:return j3;case 35664:return Z3;case 35665:return K3;case 35666:return Q3;case 35674:return J3;case 35675:return $3;case 35676:return tE;case 5124:case 35670:return eE;case 35667:case 35671:return nE;case 35668:case 35672:return iE;case 35669:case 35673:return aE;case 5125:return rE;case 36294:return sE;case 36295:return oE;case 36296:return lE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return fE;case 36289:case 36303:case 36311:case 36292:return hE}}class pE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Y3(i.type)}}class mE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dE(i.type)}}class xE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Uh=/(\w+)(\])?(\[|\.)?/g;function Eg(s,t){s.seq.push(t),s.map[t.id]=t}function gE(s,t,i){const r=s.name,l=r.length;for(Uh.lastIndex=0;;){const c=Uh.exec(r),h=Uh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Eg(i,p===void 0?new pE(d,s,t):new mE(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new xE(d),Eg(i,x)),i=x}}}class Fc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);gE(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Tg(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const _E=37297;let vE=0;function yE(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Ag=new Ce;function SE(s){Xe._getMatrix(Ag,Xe.workingColorSpace,s);const t=`mat3( ${Ag.elements.map(i=>i.toFixed(4))} )`;switch(Xe.getTransfer(s)){case Bc:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rg(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+yE(s.getShaderSource(t),d)}else return c}function ME(s,t){const i=SE(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function bE(s,t){let i;switch(t){case iS:i="Linear";break;case aS:i="Reinhard";break;case rS:i="Cineon";break;case sS:i="ACESFilmic";break;case lS:i="AgX";break;case cS:i="Neutral";break;case oS:i="Custom";break;default:be("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new ht;function EE(){Xe.getLuminanceCoefficients(Nc);const s=Nc.x.toFixed(4),t=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function AE(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function RE(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Vo(s){return s!==""}function Cg(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const CE=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(s){return s.replace(CE,DE)}const wE=new Map;function DE(s,t){let i=we[t];if(i===void 0){const r=wE.get(t);if(r!==void 0)i=we[r],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return bd(i)}const UE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(s){return s.replace(UE,LE)}function LE(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ug(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function NE(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gg?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===zy?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ba&&(t="SHADOWMAP_TYPE_VSM"),t}function OE(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Fs:t="ENVMAP_TYPE_CUBE";break;case Gc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function PE(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function zE(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vg:t="ENVMAP_BLENDING_MULTIPLY";break;case eS:t="ENVMAP_BLENDING_MIX";break;case nS:t="ENVMAP_BLENDING_ADD";break}return t}function IE(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function FE(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=NE(i),p=OE(i),g=PE(i),x=zE(i),v=IE(i),S=TE(i),E=AE(c),R=l.createProgram();let M,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(M=[Ug(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[Ug(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==or?"#define TONE_MAPPING":"",i.toneMapping!==or?we.tonemapping_pars_fragment:"",i.toneMapping!==or?bE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,ME("linearToOutputTexel",i.outputColorSpace),EE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),h=bd(h),h=Cg(h,i),h=wg(h,i),d=bd(d),d=Cg(d,i),d=wg(d,i),h=Dg(h),d=Dg(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Fx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Fx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=L+M+h,N=L+_+d,z=Tg(l,l.VERTEX_SHADER,C),U=Tg(l,l.FRAGMENT_SHADER,N);l.attachShader(R,z),l.attachShader(R,U),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(V){if(s.debug.checkShaderErrors){const j=l.getProgramInfoLog(R)||"",st=l.getShaderInfoLog(z)||"",dt=l.getShaderInfoLog(U)||"",lt=j.trim(),F=st.trim(),$=dt.trim();let K=!0,_t=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,z,U);else{const Mt=Rg(l,z,"vertex"),I=Rg(l,U,"fragment");pn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+Mt+`
`+I)}else lt!==""?be("WebGLProgram: Program Info Log:",lt):(F===""||$==="")&&(_t=!1);_t&&(V.diagnostics={runnable:K,programLog:lt,vertexShader:{log:F,prefix:M},fragmentShader:{log:$,prefix:_}})}l.deleteShader(z),l.deleteShader(U),et=new Fc(l,R),D=RE(l,R)}let et;this.getUniforms=function(){return et===void 0&&O(this),et};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,_E)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vE++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=U,this}let BE=0;class HE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new GE(t),i.set(t,r)),r}}class GE{constructor(t){this.id=BE++,this.code=t,this.usedTimes=0}}function VE(s,t,i,r,l,c,h){const d=new Id,m=new HE,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,w,V,j,st){const dt=j.fog,lt=st.geometry,F=D.isMeshStandardMaterial?j.environment:null,$=(D.isMeshStandardMaterial?i:t).get(D.envMap||F),K=$&&$.mapping===Gc?$.image.height:null,_t=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&be("WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const Mt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,I=Mt!==void 0?Mt.length:0;let rt=0;lt.morphAttributes.position!==void 0&&(rt=1),lt.morphAttributes.normal!==void 0&&(rt=2),lt.morphAttributes.color!==void 0&&(rt=3);let Tt,Nt,kt,Q;if(_t){const ge=qi[_t];Tt=ge.vertexShader,Nt=ge.fragmentShader}else Tt=D.vertexShader,Nt=D.fragmentShader,m.update(D),kt=m.getVertexShaderID(D),Q=m.getFragmentShaderID(D);const ut=s.getRenderTarget(),Ft=s.state.buffers.depth.getReversed(),Xt=st.isInstancedMesh===!0,ee=st.isBatchedMesh===!0,Se=!!D.map,an=!!D.matcap,xt=!!$,Le=!!D.aoMap,B=!!D.lightMap,ye=!!D.bumpMap,xe=!!D.normalMap,Ae=!!D.displacementMap,jt=!!D.emissiveMap,qe=!!D.metalnessMap,ae=!!D.roughnessMap,Zt=D.anisotropy>0,P=D.clearcoat>0,T=D.dispersion>0,nt=D.iridescence>0,gt=D.sheen>0,Ct=D.transmission>0,ct=Zt&&!!D.anisotropyMap,te=P&&!!D.clearcoatMap,zt=P&&!!D.clearcoatNormalMap,Jt=P&&!!D.clearcoatRoughnessMap,ne=nt&&!!D.iridescenceMap,At=nt&&!!D.iridescenceThicknessMap,Ut=gt&&!!D.sheenColorMap,ie=gt&&!!D.sheenRoughnessMap,Kt=!!D.specularMap,qt=!!D.specularColorMap,he=!!D.specularIntensityMap,k=Ct&&!!D.transmissionMap,Ht=Ct&&!!D.thicknessMap,Pt=!!D.gradientMap,It=!!D.alphaMap,Dt=D.alphaTest>0,vt=!!D.alphaHash,Wt=!!D.extensions;let de=or;D.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(de=s.toneMapping);const Ye={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:Tt,fragmentShader:Nt,defines:D.defines,customVertexShaderID:kt,customFragmentShaderID:Q,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:ee,batchingColor:ee&&st._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&st.instanceColor!==null,instancingMorph:Xt&&st.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Bs,alphaToCoverage:!!D.alphaToCoverage,map:Se,matcap:an,envMap:xt,envMapMode:xt&&$.mapping,envMapCubeUVHeight:K,aoMap:Le,lightMap:B,bumpMap:ye,normalMap:xe,displacementMap:v&&Ae,emissiveMap:jt,normalMapObjectSpace:xe&&D.normalMapType===dS,normalMapTangentSpace:xe&&D.normalMapType===Qg,metalnessMap:qe,roughnessMap:ae,anisotropy:Zt,anisotropyMap:ct,clearcoat:P,clearcoatMap:te,clearcoatNormalMap:zt,clearcoatRoughnessMap:Jt,dispersion:T,iridescence:nt,iridescenceMap:ne,iridescenceThicknessMap:At,sheen:gt,sheenColorMap:Ut,sheenRoughnessMap:ie,specularMap:Kt,specularColorMap:qt,specularIntensityMap:he,transmission:Ct,transmissionMap:k,thicknessMap:Ht,gradientMap:Pt,opaque:D.transparent===!1&&D.blending===Os&&D.alphaToCoverage===!1,alphaMap:It,alphaTest:Dt,alphaHash:vt,combine:D.combine,mapUv:Se&&R(D.map.channel),aoMapUv:Le&&R(D.aoMap.channel),lightMapUv:B&&R(D.lightMap.channel),bumpMapUv:ye&&R(D.bumpMap.channel),normalMapUv:xe&&R(D.normalMap.channel),displacementMapUv:Ae&&R(D.displacementMap.channel),emissiveMapUv:jt&&R(D.emissiveMap.channel),metalnessMapUv:qe&&R(D.metalnessMap.channel),roughnessMapUv:ae&&R(D.roughnessMap.channel),anisotropyMapUv:ct&&R(D.anisotropyMap.channel),clearcoatMapUv:te&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:zt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:At&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:ie&&R(D.sheenRoughnessMap.channel),specularMapUv:Kt&&R(D.specularMap.channel),specularColorMapUv:qt&&R(D.specularColorMap.channel),specularIntensityMapUv:he&&R(D.specularIntensityMap.channel),transmissionMapUv:k&&R(D.transmissionMap.channel),thicknessMapUv:Ht&&R(D.thicknessMap.channel),alphaMapUv:It&&R(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(xe||Zt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!lt.attributes.uv&&(Se||It),fog:!!dt,useFog:D.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ft,skinning:st.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:rt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:Se&&D.map.isVideoTexture===!0&&Xe.getTransfer(D.map.colorSpace)===$e,decodeVideoTextureEmissive:jt&&D.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(D.emissiveMap.colorSpace)===$e,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Wi,flipSided:D.side===ri,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Wt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&D.extensions.multiDraw===!0||ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ye.vertexUv1s=p.has(1),Ye.vertexUv2s=p.has(2),Ye.vertexUv3s=p.has(3),p.clear(),Ye}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(L(w,D),C(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function L(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function C(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function N(D){const w=E[D.type];let V;if(w){const j=qi[w];V=i1.clone(j.uniforms)}else V=D.uniforms;return V}function z(D,w){let V;for(let j=0,st=g.length;j<st;j++){const dt=g[j];if(dt.cacheKey===w){V=dt,++V.usedTimes;break}}return V===void 0&&(V=new FE(s,w,D,c),g.push(V)),V}function U(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function O(D){m.remove(D)}function et(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:N,acquireProgram:z,releaseProgram:U,releaseShaderCache:O,programs:g,dispose:et}}function kE(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function XE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Lg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ng(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(x,v,S,E,R,M){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:R,group:M},s[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=S,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=R,_.group=M),t++,_}function d(x,v,S,E,R,M){const _=h(x,v,S,E,R,M);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(x,v,S,E,R,M){const _=h(x,v,S,E,R,M);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||XE),r.length>1&&r.sort(v||Lg),l.length>1&&l.sort(v||Lg)}function g(){for(let x=t,v=s.length;x<v;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function qE(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new Ng,s.set(r,[h])):l>=c.length?(h=new Ng,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function WE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ht,color:new Ge};break;case"SpotLight":i={position:new ht,direction:new ht,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ht,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ht,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new ht,halfWidth:new ht,halfHeight:new ht};break}return s[t.id]=i,i}}}function YE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let jE=0;function ZE(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function KE(s){const t=new WE,i=YE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ht);const l=new ht,c=new cn,h=new cn;function d(p){let g=0,x=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,R=0,M=0,_=0,L=0,C=0,N=0,z=0,U=0,O=0;p.sort(ZE);for(let D=0,w=p.length;D<w;D++){const V=p[D],j=V.color,st=V.intensity,dt=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=j.r*st,x+=j.g*st,v+=j.b*st;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],st);O++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const $=V.shadow,K=i.get(V);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,r.directionalShadow[S]=K,r.directionalShadowMap[S]=lt,r.directionalShadowMatrix[S]=V.shadow.matrix,L++}r.directional[S]=F,S++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(j).multiplyScalar(st),F.distance=dt,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[R]=F;const $=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,$.updateMatrices(V),V.castShadow&&U++),r.spotLightMatrix[R]=$.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,r.spotShadow[R]=K,r.spotShadowMap[R]=lt,N++}R++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(j).multiplyScalar(st),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=F,M++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const $=V.shadow,K=i.get(V);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,r.pointShadow[E]=K,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=V.shadow.matrix,C++}r.point[E]=F,E++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(st),F.groundColor.copy(V.groundColor).multiplyScalar(st),r.hemi[_]=F,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Vt.LTC_FLOAT_1,r.rectAreaLTC2=Vt.LTC_FLOAT_2):(r.rectAreaLTC1=Vt.LTC_HALF_1,r.rectAreaLTC2=Vt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const et=r.hash;(et.directionalLength!==S||et.pointLength!==E||et.spotLength!==R||et.rectAreaLength!==M||et.hemiLength!==_||et.numDirectionalShadows!==L||et.numPointShadows!==C||et.numSpotShadows!==N||et.numSpotMaps!==z||et.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=N+z-U,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,et.directionalLength=S,et.pointLength=E,et.spotLength=R,et.rectAreaLength=M,et.hemiLength=_,et.numDirectionalShadows=L,et.numPointShadows=C,et.numSpotShadows=N,et.numSpotMaps=z,et.numLightProbes=O,r.version=jE++)}function m(p,g){let x=0,v=0,S=0,E=0,R=0;const M=g.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const C=p[_];if(C.isDirectionalLight){const N=r.directional[x];N.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),x++}else if(C.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),S++}else if(C.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(M),h.identity(),c.copy(C.matrixWorld),c.premultiply(M),h.extractRotation(c),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),E++}else if(C.isPointLight){const N=r.point[v];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(M),v++}else if(C.isHemisphereLight){const N=r.hemi[R];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function Og(s){const t=new KE(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function QE(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Og(s),t.set(l,[d])):c>=h.length?(d=new Og(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const JE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$E=`uniform sampler2D shadow_pass;
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
}`;function tT(s,t,i){let r=new Bd;const l=new Ue,c=new Ue,h=new ln,d=new x1({depthPacking:hS}),m=new g1,p={},g=i.maxTextureSize,x={[lr]:ri,[ri]:lr,[Wi]:Wi},v=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:JE,fragmentShader:$E}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new wi;E.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new mi(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gg;let _=this.type;this.render=function(U,O,et){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),j=s.state;j.setBlending(Aa),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const st=_!==ba&&this.type===ba,dt=_===ba&&this.type!==ba;for(let lt=0,F=U.length;lt<F;lt++){const $=U[lt],K=$.shadow;if(K===void 0){be("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const _t=K.getFrameExtents();if(l.multiply(_t),c.copy(K.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/_t.x),l.x=c.x*_t.x,K.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/_t.y),l.y=c.y*_t.y,K.mapSize.y=c.y)),K.map===null||st===!0||dt===!0){const I=this.type!==ba?{minFilter:xi,magFilter:xi}:{};K.map!==null&&K.map.dispose(),K.map=new Fr(l.x,l.y,I),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const Mt=K.getViewportCount();for(let I=0;I<Mt;I++){const rt=K.getViewport(I);h.set(c.x*rt.x,c.y*rt.y,c.x*rt.z,c.y*rt.w),j.viewport(h),K.updateMatrices($,I),r=K.getFrustum(),N(O,et,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===ba&&L(K,et),K.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(D,w,V)};function L(U,O){const et=t.update(R);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Fr(l.x,l.y)),v.uniforms.shadow_pass.value=U.map.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(O,null,et,v,R,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(O,null,et,S,R,null)}function C(U,O,et,D){let w=null;const V=et.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)w=V;else if(w=et.isPointLight===!0?m:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=w.uuid,st=O.uuid;let dt=p[j];dt===void 0&&(dt={},p[j]=dt);let lt=dt[st];lt===void 0&&(lt=w.clone(),dt[st]=lt,O.addEventListener("dispose",z)),w=lt}if(w.visible=O.visible,w.wireframe=O.wireframe,D===ba?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:x[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,et.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const j=s.properties.get(w);j.light=et}return w}function N(U,O,et,D,w){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&w===ba)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,U.matrixWorld);const st=t.update(U),dt=U.material;if(Array.isArray(dt)){const lt=st.groups;for(let F=0,$=lt.length;F<$;F++){const K=lt[F],_t=dt[K.materialIndex];if(_t&&_t.visible){const Mt=C(U,_t,D,w);U.onBeforeShadow(s,U,O,et,st,Mt,K),s.renderBufferDirect(et,null,st,Mt,U,K),U.onAfterShadow(s,U,O,et,st,Mt,K)}}}else if(dt.visible){const lt=C(U,dt,D,w);U.onBeforeShadow(s,U,O,et,st,lt,null),s.renderBufferDirect(et,null,st,lt,U,null),U.onAfterShadow(s,U,O,et,st,lt,null)}}const j=U.children;for(let st=0,dt=j.length;st<dt;st++)N(j[st],O,et,D,w)}function z(U){U.target.removeEventListener("dispose",z);for(const et in p){const D=p[et],w=U.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const eT={[zh]:Ih,[Fh]:Gh,[Bh]:Vh,[zs]:Hh,[Ih]:zh,[Gh]:Fh,[Vh]:Bh,[Hh]:zs};function nT(s,t){function i(){let k=!1;const Ht=new ln;let Pt=null;const It=new ln(0,0,0,0);return{setMask:function(Dt){Pt!==Dt&&!k&&(s.colorMask(Dt,Dt,Dt,Dt),Pt=Dt)},setLocked:function(Dt){k=Dt},setClear:function(Dt,vt,Wt,de,Ye){Ye===!0&&(Dt*=de,vt*=de,Wt*=de),Ht.set(Dt,vt,Wt,de),It.equals(Ht)===!1&&(s.clearColor(Dt,vt,Wt,de),It.copy(Ht))},reset:function(){k=!1,Pt=null,It.set(-1,0,0,0)}}}function r(){let k=!1,Ht=!1,Pt=null,It=null,Dt=null;return{setReversed:function(vt){if(Ht!==vt){const Wt=t.get("EXT_clip_control");vt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Ht=vt;const de=Dt;Dt=null,this.setClear(de)}},getReversed:function(){return Ht},setTest:function(vt){vt?ut(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(vt){Pt!==vt&&!k&&(s.depthMask(vt),Pt=vt)},setFunc:function(vt){if(Ht&&(vt=eT[vt]),It!==vt){switch(vt){case zh:s.depthFunc(s.NEVER);break;case Ih:s.depthFunc(s.ALWAYS);break;case Fh:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Bh:s.depthFunc(s.EQUAL);break;case Hh:s.depthFunc(s.GEQUAL);break;case Gh:s.depthFunc(s.GREATER);break;case Vh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=vt}},setLocked:function(vt){k=vt},setClear:function(vt){Dt!==vt&&(Ht&&(vt=1-vt),s.clearDepth(vt),Dt=vt)},reset:function(){k=!1,Pt=null,It=null,Dt=null,Ht=!1}}}function l(){let k=!1,Ht=null,Pt=null,It=null,Dt=null,vt=null,Wt=null,de=null,Ye=null;return{setTest:function(ge){k||(ge?ut(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(ge){Ht!==ge&&!k&&(s.stencilMask(ge),Ht=ge)},setFunc:function(ge,An,Fn){(Pt!==ge||It!==An||Dt!==Fn)&&(s.stencilFunc(ge,An,Fn),Pt=ge,It=An,Dt=Fn)},setOp:function(ge,An,Fn){(vt!==ge||Wt!==An||de!==Fn)&&(s.stencilOp(ge,An,Fn),vt=ge,Wt=An,de=Fn)},setLocked:function(ge){k=ge},setClear:function(ge){Ye!==ge&&(s.clearStencil(ge),Ye=ge)},reset:function(){k=!1,Ht=null,Pt=null,It=null,Dt=null,vt=null,Wt=null,de=null,Ye=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,S=[],E=null,R=!1,M=null,_=null,L=null,C=null,N=null,z=null,U=null,O=new Ge(0,0,0),et=0,D=!1,w=null,V=null,j=null,st=null,dt=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(K)[1]),F=$>=1):K.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),F=$>=2);let _t=null,Mt={};const I=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),Tt=new ln().fromArray(I),Nt=new ln().fromArray(rt);function kt(k,Ht,Pt,It){const Dt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(k,vt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<Pt;Wt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ht,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(Ht+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return vt}const Q={};Q[s.TEXTURE_2D]=kt(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(s.DEPTH_TEST),h.setFunc(zs),ye(!1),xe(Lx),ut(s.CULL_FACE),Le(Aa);function ut(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Ft(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Xt(k,Ht){return x[k]!==Ht?(s.bindFramebuffer(k,Ht),x[k]=Ht,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ht),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ht),!0):!1}function ee(k,Ht){let Pt=S,It=!1;if(k){Pt=v.get(Ht),Pt===void 0&&(Pt=[],v.set(Ht,Pt));const Dt=k.textures;if(Pt.length!==Dt.length||Pt[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Wt=Dt.length;vt<Wt;vt++)Pt[vt]=s.COLOR_ATTACHMENT0+vt;Pt.length=Dt.length,It=!0}}else Pt[0]!==s.BACK&&(Pt[0]=s.BACK,It=!0);It&&s.drawBuffers(Pt)}function Se(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const an={[Nr]:s.FUNC_ADD,[Fy]:s.FUNC_SUBTRACT,[By]:s.FUNC_REVERSE_SUBTRACT};an[Hy]=s.MIN,an[Gy]=s.MAX;const xt={[Vy]:s.ZERO,[ky]:s.ONE,[Xy]:s.SRC_COLOR,[Oh]:s.SRC_ALPHA,[Ky]:s.SRC_ALPHA_SATURATE,[jy]:s.DST_COLOR,[Wy]:s.DST_ALPHA,[qy]:s.ONE_MINUS_SRC_COLOR,[Ph]:s.ONE_MINUS_SRC_ALPHA,[Zy]:s.ONE_MINUS_DST_COLOR,[Yy]:s.ONE_MINUS_DST_ALPHA,[Qy]:s.CONSTANT_COLOR,[Jy]:s.ONE_MINUS_CONSTANT_COLOR,[$y]:s.CONSTANT_ALPHA,[tS]:s.ONE_MINUS_CONSTANT_ALPHA};function Le(k,Ht,Pt,It,Dt,vt,Wt,de,Ye,ge){if(k===Aa){R===!0&&(Ft(s.BLEND),R=!1);return}if(R===!1&&(ut(s.BLEND),R=!0),k!==Iy){if(k!==M||ge!==D){if((_!==Nr||N!==Nr)&&(s.blendEquation(s.FUNC_ADD),_=Nr,N=Nr),ge)switch(k){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nx:s.blendFunc(s.ONE,s.ONE);break;case Ox:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Px:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:pn("WebGLState: Invalid blending: ",k);break}else switch(k){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nx:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ox:pn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Px:pn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pn("WebGLState: Invalid blending: ",k);break}L=null,C=null,z=null,U=null,O.set(0,0,0),et=0,M=k,D=ge}return}Dt=Dt||Ht,vt=vt||Pt,Wt=Wt||It,(Ht!==_||Dt!==N)&&(s.blendEquationSeparate(an[Ht],an[Dt]),_=Ht,N=Dt),(Pt!==L||It!==C||vt!==z||Wt!==U)&&(s.blendFuncSeparate(xt[Pt],xt[It],xt[vt],xt[Wt]),L=Pt,C=It,z=vt,U=Wt),(de.equals(O)===!1||Ye!==et)&&(s.blendColor(de.r,de.g,de.b,Ye),O.copy(de),et=Ye),M=k,D=!1}function B(k,Ht){k.side===Wi?Ft(s.CULL_FACE):ut(s.CULL_FACE);let Pt=k.side===ri;Ht&&(Pt=!Pt),ye(Pt),k.blending===Os&&k.transparent===!1?Le(Aa):Le(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const It=k.stencilWrite;d.setTest(It),It&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),jt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function ye(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function xe(k){k!==Oy?(ut(s.CULL_FACE),k!==V&&(k===Lx?s.cullFace(s.BACK):k===Py?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),V=k}function Ae(k){k!==j&&(F&&s.lineWidth(k),j=k)}function jt(k,Ht,Pt){k?(ut(s.POLYGON_OFFSET_FILL),(st!==Ht||dt!==Pt)&&(s.polygonOffset(Ht,Pt),st=Ht,dt=Pt)):Ft(s.POLYGON_OFFSET_FILL)}function qe(k){k?ut(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function ae(k){k===void 0&&(k=s.TEXTURE0+lt-1),_t!==k&&(s.activeTexture(k),_t=k)}function Zt(k,Ht,Pt){Pt===void 0&&(_t===null?Pt=s.TEXTURE0+lt-1:Pt=_t);let It=Mt[Pt];It===void 0&&(It={type:void 0,texture:void 0},Mt[Pt]=It),(It.type!==k||It.texture!==Ht)&&(_t!==Pt&&(s.activeTexture(Pt),_t=Pt),s.bindTexture(k,Ht||Q[k]),It.type=k,It.texture=Ht)}function P(){const k=Mt[_t];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function nt(){try{s.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function gt(){try{s.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ct(){try{s.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function te(){try{s.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function zt(){try{s.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Jt(){try{s.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ne(){try{s.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function At(){try{s.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ut(k){Tt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Tt.copy(k))}function ie(k){Nt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Nt.copy(k))}function Kt(k,Ht){let Pt=p.get(Ht);Pt===void 0&&(Pt=new WeakMap,p.set(Ht,Pt));let It=Pt.get(k);It===void 0&&(It=s.getUniformBlockIndex(Ht,k.name),Pt.set(k,It))}function qt(k,Ht){const It=p.get(Ht).get(k);m.get(Ht)!==It&&(s.uniformBlockBinding(Ht,It,k.__bindingPointIndex),m.set(Ht,It))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},_t=null,Mt={},x={},v=new WeakMap,S=[],E=null,R=!1,M=null,_=null,L=null,C=null,N=null,z=null,U=null,O=new Ge(0,0,0),et=0,D=!1,w=null,V=null,j=null,st=null,dt=null,Tt.set(0,0,s.canvas.width,s.canvas.height),Nt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ut,disable:Ft,bindFramebuffer:Xt,drawBuffers:ee,useProgram:Se,setBlending:Le,setMaterial:B,setFlipSided:ye,setCullFace:xe,setLineWidth:Ae,setPolygonOffset:jt,setScissorTest:qe,activeTexture:ae,bindTexture:Zt,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:nt,texImage2D:ne,texImage3D:At,updateUBOMapping:Kt,uniformBlockBinding:qt,texStorage2D:zt,texStorage3D:Jt,texSubImage2D:gt,texSubImage3D:Ct,compressedTexSubImage2D:ct,compressedTexSubImage3D:te,scissor:Ut,viewport:ie,reset:he}}function iT(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ue,g=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return S?new OffscreenCanvas(P,T):Ko("canvas")}function R(P,T,nt){let gt=1;const Ct=Zt(P);if((Ct.width>nt||Ct.height>nt)&&(gt=nt/Math.max(Ct.width,Ct.height)),gt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ct=Math.floor(gt*Ct.width),te=Math.floor(gt*Ct.height);x===void 0&&(x=E(ct,te));const zt=T?E(ct,te):x;return zt.width=ct,zt.height=te,zt.getContext("2d").drawImage(P,0,0,ct,te),be("WebGLRenderer: Texture has been resized from ("+Ct.width+"x"+Ct.height+") to ("+ct+"x"+te+")."),zt}else return"data"in P&&be("WebGLRenderer: Image in DataTexture is too big ("+Ct.width+"x"+Ct.height+")."),P;return P}function M(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(P,T,nt,gt,Ct=!1){if(P!==null){if(s[P]!==void 0)return s[P];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct=T;if(T===s.RED&&(nt===s.FLOAT&&(ct=s.R32F),nt===s.HALF_FLOAT&&(ct=s.R16F),nt===s.UNSIGNED_BYTE&&(ct=s.R8)),T===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ct=s.R8UI),nt===s.UNSIGNED_SHORT&&(ct=s.R16UI),nt===s.UNSIGNED_INT&&(ct=s.R32UI),nt===s.BYTE&&(ct=s.R8I),nt===s.SHORT&&(ct=s.R16I),nt===s.INT&&(ct=s.R32I)),T===s.RG&&(nt===s.FLOAT&&(ct=s.RG32F),nt===s.HALF_FLOAT&&(ct=s.RG16F),nt===s.UNSIGNED_BYTE&&(ct=s.RG8)),T===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ct=s.RG8UI),nt===s.UNSIGNED_SHORT&&(ct=s.RG16UI),nt===s.UNSIGNED_INT&&(ct=s.RG32UI),nt===s.BYTE&&(ct=s.RG8I),nt===s.SHORT&&(ct=s.RG16I),nt===s.INT&&(ct=s.RG32I)),T===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),nt===s.UNSIGNED_INT&&(ct=s.RGB32UI),nt===s.BYTE&&(ct=s.RGB8I),nt===s.SHORT&&(ct=s.RGB16I),nt===s.INT&&(ct=s.RGB32I)),T===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),nt===s.UNSIGNED_INT&&(ct=s.RGBA32UI),nt===s.BYTE&&(ct=s.RGBA8I),nt===s.SHORT&&(ct=s.RGBA16I),nt===s.INT&&(ct=s.RGBA32I)),T===s.RGB&&(nt===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),nt===s.UNSIGNED_INT_10F_11F_11F_REV&&(ct=s.R11F_G11F_B10F)),T===s.RGBA){const te=Ct?Bc:Xe.getTransfer(gt);nt===s.FLOAT&&(ct=s.RGBA32F),nt===s.HALF_FLOAT&&(ct=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(ct=te===$e?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function N(P,T){let nt;return P?T===null||T===Ir||T===Yo?nt=s.DEPTH24_STENCIL8:T===Ta?nt=s.DEPTH32F_STENCIL8:T===Wo&&(nt=s.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ir||T===Yo?nt=s.DEPTH_COMPONENT24:T===Ta?nt=s.DEPTH_COMPONENT32F:T===Wo&&(nt=s.DEPTH_COMPONENT16),nt}function z(P,T){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==xi&&P.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function U(P){const T=P.target;T.removeEventListener("dispose",U),et(T),T.isVideoTexture&&g.delete(T)}function O(P){const T=P.target;T.removeEventListener("dispose",O),w(T)}function et(P){const T=r.get(P);if(T.__webglInit===void 0)return;const nt=P.source,gt=v.get(nt);if(gt){const Ct=gt[T.__cacheKey];Ct.usedTimes--,Ct.usedTimes===0&&D(P),Object.keys(gt).length===0&&v.delete(nt)}r.remove(P)}function D(P){const T=r.get(P);s.deleteTexture(T.__webglTexture);const nt=P.source,gt=v.get(nt);delete gt[T.__cacheKey],h.memory.textures--}function w(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let Ct=0;Ct<T.__webglFramebuffer[gt].length;Ct++)s.deleteFramebuffer(T.__webglFramebuffer[gt][Ct]);else s.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)s.deleteFramebuffer(T.__webglFramebuffer[gt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=P.textures;for(let gt=0,Ct=nt.length;gt<Ct;gt++){const ct=r.get(nt[gt]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),h.memory.textures--),r.remove(nt[gt])}r.remove(P)}let V=0;function j(){V=0}function st(){const P=V;return P>=l.maxTextures&&be("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),V+=1,P}function dt(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function lt(P,T){const nt=r.get(P);if(P.isVideoTexture&&qe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&nt.__version!==P.version){const gt=P.image;if(gt===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(nt,P,T);return}}else P.isExternalTexture&&(nt.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+T)}function F(P,T){const nt=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&nt.__version!==P.version){Q(nt,P,T);return}else P.isExternalTexture&&(nt.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+T)}function $(P,T){const nt=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&nt.__version!==P.version){Q(nt,P,T);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+T)}function K(P,T){const nt=r.get(P);if(P.version>0&&nt.__version!==P.version){ut(nt,P,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+T)}const _t={[qh]:s.REPEAT,[Ea]:s.CLAMP_TO_EDGE,[Wh]:s.MIRRORED_REPEAT},Mt={[xi]:s.NEAREST,[uS]:s.NEAREST_MIPMAP_NEAREST,[fc]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[nh]:s.LINEAR_MIPMAP_NEAREST,[Pr]:s.LINEAR_MIPMAP_LINEAR},I={[pS]:s.NEVER,[yS]:s.ALWAYS,[mS]:s.LESS,[Jg]:s.LEQUAL,[xS]:s.EQUAL,[vS]:s.GEQUAL,[gS]:s.GREATER,[_S]:s.NOTEQUAL};function rt(P,T){if(T.type===Ta&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===nh||T.magFilter===fc||T.magFilter===Pr||T.minFilter===Ci||T.minFilter===nh||T.minFilter===fc||T.minFilter===Pr)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,_t[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,_t[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,_t[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Mt[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Mt[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==fc&&T.minFilter!==Pr||T.type===Ta&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Tt(P,T){let nt=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",U));const gt=T.source;let Ct=v.get(gt);Ct===void 0&&(Ct={},v.set(gt,Ct));const ct=dt(T);if(ct!==P.__cacheKey){Ct[ct]===void 0&&(Ct[ct]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),Ct[ct].usedTimes++;const te=Ct[P.__cacheKey];te!==void 0&&(Ct[P.__cacheKey].usedTimes--,te.usedTimes===0&&D(T)),P.__cacheKey=ct,P.__webglTexture=Ct[ct].texture}return nt}function Nt(P,T,nt){return Math.floor(Math.floor(P/nt)/T)}function kt(P,T,nt,gt){const ct=P.updateRanges;if(ct.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,nt,gt,T.data);else{ct.sort((At,Ut)=>At.start-Ut.start);let te=0;for(let At=1;At<ct.length;At++){const Ut=ct[te],ie=ct[At],Kt=Ut.start+Ut.count,qt=Nt(ie.start,T.width,4),he=Nt(Ut.start,T.width,4);ie.start<=Kt+1&&qt===he&&Nt(ie.start+ie.count-1,T.width,4)===qt?Ut.count=Math.max(Ut.count,ie.start+ie.count-Ut.start):(++te,ct[te]=ie)}ct.length=te+1;const zt=s.getParameter(s.UNPACK_ROW_LENGTH),Jt=s.getParameter(s.UNPACK_SKIP_PIXELS),ne=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let At=0,Ut=ct.length;At<Ut;At++){const ie=ct[At],Kt=Math.floor(ie.start/4),qt=Math.ceil(ie.count/4),he=Kt%T.width,k=Math.floor(Kt/T.width),Ht=qt,Pt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,he),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,he,k,Ht,Pt,nt,gt,T.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,zt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ne)}}function Q(P,T,nt){let gt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=s.TEXTURE_3D);const Ct=Tt(P,T),ct=T.source;i.bindTexture(gt,P.__webglTexture,s.TEXTURE0+nt);const te=r.get(ct);if(ct.version!==te.__version||Ct===!0){i.activeTexture(s.TEXTURE0+nt);const zt=Xe.getPrimaries(Xe.workingColorSpace),Jt=T.colorSpace===rr?null:Xe.getPrimaries(T.colorSpace),ne=T.colorSpace===rr||zt===Jt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let At=R(T.image,!1,l.maxTextureSize);At=ae(T,At);const Ut=c.convert(T.format,T.colorSpace),ie=c.convert(T.type);let Kt=C(T.internalFormat,Ut,ie,T.colorSpace,T.isVideoTexture);rt(gt,T);let qt;const he=T.mipmaps,k=T.isVideoTexture!==!0,Ht=te.__version===void 0||Ct===!0,Pt=ct.dataReady,It=z(T,At);if(T.isDepthTexture)Kt=N(T.format===Zo,T.type),Ht&&(k?i.texStorage2D(s.TEXTURE_2D,1,Kt,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,Kt,At.width,At.height,0,Ut,ie,null));else if(T.isDataTexture)if(he.length>0){k&&Ht&&i.texStorage2D(s.TEXTURE_2D,It,Kt,he[0].width,he[0].height);for(let Dt=0,vt=he.length;Dt<vt;Dt++)qt=he[Dt],k?Pt&&i.texSubImage2D(s.TEXTURE_2D,Dt,0,0,qt.width,qt.height,Ut,ie,qt.data):i.texImage2D(s.TEXTURE_2D,Dt,Kt,qt.width,qt.height,0,Ut,ie,qt.data);T.generateMipmaps=!1}else k?(Ht&&i.texStorage2D(s.TEXTURE_2D,It,Kt,At.width,At.height),Pt&&kt(T,At,Ut,ie)):i.texImage2D(s.TEXTURE_2D,0,Kt,At.width,At.height,0,Ut,ie,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ht&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Kt,he[0].width,he[0].height,At.depth);for(let Dt=0,vt=he.length;Dt<vt;Dt++)if(qt=he[Dt],T.format!==Ii)if(Ut!==null)if(k){if(Pt)if(T.layerUpdates.size>0){const Wt=fg(qt.width,qt.height,T.format,T.type);for(const de of T.layerUpdates){const Ye=qt.data.subarray(de*Wt/qt.data.BYTES_PER_ELEMENT,(de+1)*Wt/qt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Dt,0,0,de,qt.width,qt.height,1,Ut,Ye)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Dt,0,0,0,qt.width,qt.height,At.depth,Ut,qt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Dt,Kt,qt.width,qt.height,At.depth,0,qt.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Pt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Dt,0,0,0,qt.width,qt.height,At.depth,Ut,ie,qt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Dt,Kt,qt.width,qt.height,At.depth,0,Ut,ie,qt.data)}else{k&&Ht&&i.texStorage2D(s.TEXTURE_2D,It,Kt,he[0].width,he[0].height);for(let Dt=0,vt=he.length;Dt<vt;Dt++)qt=he[Dt],T.format!==Ii?Ut!==null?k?Pt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Dt,0,0,qt.width,qt.height,Ut,qt.data):i.compressedTexImage2D(s.TEXTURE_2D,Dt,Kt,qt.width,qt.height,0,qt.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Pt&&i.texSubImage2D(s.TEXTURE_2D,Dt,0,0,qt.width,qt.height,Ut,ie,qt.data):i.texImage2D(s.TEXTURE_2D,Dt,Kt,qt.width,qt.height,0,Ut,ie,qt.data)}else if(T.isDataArrayTexture)if(k){if(Ht&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Kt,At.width,At.height,At.depth),Pt)if(T.layerUpdates.size>0){const Dt=fg(At.width,At.height,T.format,T.type);for(const vt of T.layerUpdates){const Wt=At.data.subarray(vt*Dt/At.data.BYTES_PER_ELEMENT,(vt+1)*Dt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Ut,ie,Wt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ut,ie,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Kt,At.width,At.height,At.depth,0,Ut,ie,At.data);else if(T.isData3DTexture)k?(Ht&&i.texStorage3D(s.TEXTURE_3D,It,Kt,At.width,At.height,At.depth),Pt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ut,ie,At.data)):i.texImage3D(s.TEXTURE_3D,0,Kt,At.width,At.height,At.depth,0,Ut,ie,At.data);else if(T.isFramebufferTexture){if(Ht)if(k)i.texStorage2D(s.TEXTURE_2D,It,Kt,At.width,At.height);else{let Dt=At.width,vt=At.height;for(let Wt=0;Wt<It;Wt++)i.texImage2D(s.TEXTURE_2D,Wt,Kt,Dt,vt,0,Ut,ie,null),Dt>>=1,vt>>=1}}else if(he.length>0){if(k&&Ht){const Dt=Zt(he[0]);i.texStorage2D(s.TEXTURE_2D,It,Kt,Dt.width,Dt.height)}for(let Dt=0,vt=he.length;Dt<vt;Dt++)qt=he[Dt],k?Pt&&i.texSubImage2D(s.TEXTURE_2D,Dt,0,0,Ut,ie,qt):i.texImage2D(s.TEXTURE_2D,Dt,Kt,Ut,ie,qt);T.generateMipmaps=!1}else if(k){if(Ht){const Dt=Zt(At);i.texStorage2D(s.TEXTURE_2D,It,Kt,Dt.width,Dt.height)}Pt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ut,ie,At)}else i.texImage2D(s.TEXTURE_2D,0,Kt,Ut,ie,At);M(T)&&_(gt),te.__version=ct.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ut(P,T,nt){if(T.image.length!==6)return;const gt=Tt(P,T),Ct=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+nt);const ct=r.get(Ct);if(Ct.version!==ct.__version||gt===!0){i.activeTexture(s.TEXTURE0+nt);const te=Xe.getPrimaries(Xe.workingColorSpace),zt=T.colorSpace===rr?null:Xe.getPrimaries(T.colorSpace),Jt=T.colorSpace===rr||te===zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const ne=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Ut=[];for(let vt=0;vt<6;vt++)!ne&&!At?Ut[vt]=R(T.image[vt],!0,l.maxCubemapSize):Ut[vt]=At?T.image[vt].image:T.image[vt],Ut[vt]=ae(T,Ut[vt]);const ie=Ut[0],Kt=c.convert(T.format,T.colorSpace),qt=c.convert(T.type),he=C(T.internalFormat,Kt,qt,T.colorSpace),k=T.isVideoTexture!==!0,Ht=ct.__version===void 0||gt===!0,Pt=Ct.dataReady;let It=z(T,ie);rt(s.TEXTURE_CUBE_MAP,T);let Dt;if(ne){k&&Ht&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,he,ie.width,ie.height);for(let vt=0;vt<6;vt++){Dt=Ut[vt].mipmaps;for(let Wt=0;Wt<Dt.length;Wt++){const de=Dt[Wt];T.format!==Ii?Kt!==null?k?Pt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,0,0,de.width,de.height,Kt,de.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,he,de.width,de.height,0,de.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Pt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,0,0,de.width,de.height,Kt,qt,de.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,he,de.width,de.height,0,Kt,qt,de.data)}}}else{if(Dt=T.mipmaps,k&&Ht){Dt.length>0&&It++;const vt=Zt(Ut[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,he,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){k?Pt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ut[vt].width,Ut[vt].height,Kt,qt,Ut[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,he,Ut[vt].width,Ut[vt].height,0,Kt,qt,Ut[vt].data);for(let Wt=0;Wt<Dt.length;Wt++){const Ye=Dt[Wt].image[vt].image;k?Pt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,0,0,Ye.width,Ye.height,Kt,qt,Ye.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,he,Ye.width,Ye.height,0,Kt,qt,Ye.data)}}else{k?Pt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Kt,qt,Ut[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,he,Kt,qt,Ut[vt]);for(let Wt=0;Wt<Dt.length;Wt++){const de=Dt[Wt];k?Pt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,0,0,Kt,qt,de.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,he,Kt,qt,de.image[vt])}}}M(T)&&_(s.TEXTURE_CUBE_MAP),ct.__version=Ct.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ft(P,T,nt,gt,Ct,ct){const te=c.convert(nt.format,nt.colorSpace),zt=c.convert(nt.type),Jt=C(nt.internalFormat,te,zt,nt.colorSpace),ne=r.get(T),At=r.get(nt);if(At.__renderTarget=T,!ne.__hasExternalTextures){const Ut=Math.max(1,T.width>>ct),ie=Math.max(1,T.height>>ct);Ct===s.TEXTURE_3D||Ct===s.TEXTURE_2D_ARRAY?i.texImage3D(Ct,ct,Jt,Ut,ie,T.depth,0,te,zt,null):i.texImage2D(Ct,ct,Jt,Ut,ie,0,te,zt,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),jt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,Ct,At.__webglTexture,0,Ae(T)):(Ct===s.TEXTURE_2D||Ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,Ct,At.__webglTexture,ct),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(P,T,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const gt=T.depthTexture,Ct=gt&&gt.isDepthTexture?gt.type:null,ct=N(T.stencilBuffer,Ct),te=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,zt=Ae(T);jt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt,ct,T.width,T.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,ct,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ct,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,P)}else{const gt=T.textures;for(let Ct=0;Ct<gt.length;Ct++){const ct=gt[Ct],te=c.convert(ct.format,ct.colorSpace),zt=c.convert(ct.type),Jt=C(ct.internalFormat,te,zt,ct.colorSpace),ne=Ae(T);nt&&jt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,Jt,T.width,T.height):jt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,Jt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Jt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(T.depthTexture);gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const Ct=gt.__webglTexture,ct=Ae(T);if(T.depthTexture.format===jo)jt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ct,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ct,0);else if(T.depthTexture.format===Zo)jt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ct,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ct,0);else throw new Error("Unknown depthTexture format")}function Se(P){const T=r.get(P),nt=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const gt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const Ct=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",Ct)};gt.addEventListener("dispose",Ct),T.__depthDisposeCallback=Ct}T.__boundDepthTexture=gt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const gt=P.texture.mipmaps;gt&&gt.length>0?ee(T.__webglFramebuffer[0],P):ee(T.__webglFramebuffer,P)}else if(nt){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=s.createRenderbuffer(),Xt(T.__webglDepthbuffer[gt],P,!1);else{const Ct=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[gt];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,ct)}}else{const gt=P.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Xt(T.__webglDepthbuffer,P,!1);else{const Ct=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,ct)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function an(P,T,nt){const gt=r.get(P);T!==void 0&&Ft(gt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&Se(P)}function xt(P){const T=P.texture,nt=r.get(P),gt=r.get(T);P.addEventListener("dispose",O);const Ct=P.textures,ct=P.isWebGLCubeRenderTarget===!0,te=Ct.length>1;if(te||(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=T.version,h.memory.textures++),ct){nt.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[zt]=[];for(let Jt=0;Jt<T.mipmaps.length;Jt++)nt.__webglFramebuffer[zt][Jt]=s.createFramebuffer()}else nt.__webglFramebuffer[zt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let zt=0;zt<T.mipmaps.length;zt++)nt.__webglFramebuffer[zt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(te)for(let zt=0,Jt=Ct.length;zt<Jt;zt++){const ne=r.get(Ct[zt]);ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture(),h.memory.textures++)}if(P.samples>0&&jt(P)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let zt=0;zt<Ct.length;zt++){const Jt=Ct[zt];nt.__webglColorRenderbuffer[zt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[zt]);const ne=c.convert(Jt.format,Jt.colorSpace),At=c.convert(Jt.type),Ut=C(Jt.internalFormat,ne,At,Jt.colorSpace,P.isXRRenderTarget===!0),ie=Ae(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,Ut,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[zt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(nt.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){i.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),rt(s.TEXTURE_CUBE_MAP,T);for(let zt=0;zt<6;zt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Jt=0;Jt<T.mipmaps.length;Jt++)Ft(nt.__webglFramebuffer[zt][Jt],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Jt);else Ft(nt.__webglFramebuffer[zt],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);M(T)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(te){for(let zt=0,Jt=Ct.length;zt<Jt;zt++){const ne=Ct[zt],At=r.get(ne);let Ut=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ut=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,At.__webglTexture),rt(Ut,ne),Ft(nt.__webglFramebuffer,P,ne,s.COLOR_ATTACHMENT0+zt,Ut,0),M(ne)&&_(Ut)}i.unbindTexture()}else{let zt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(zt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(zt,gt.__webglTexture),rt(zt,T),T.mipmaps&&T.mipmaps.length>0)for(let Jt=0;Jt<T.mipmaps.length;Jt++)Ft(nt.__webglFramebuffer[Jt],P,T,s.COLOR_ATTACHMENT0,zt,Jt);else Ft(nt.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,zt,0);M(T)&&_(zt),i.unbindTexture()}P.depthBuffer&&Se(P)}function Le(P){const T=P.textures;for(let nt=0,gt=T.length;nt<gt;nt++){const Ct=T[nt];if(M(Ct)){const ct=L(P),te=r.get(Ct).__webglTexture;i.bindTexture(ct,te),_(ct),i.unbindTexture()}}}const B=[],ye=[];function xe(P){if(P.samples>0){if(jt(P)===!1){const T=P.textures,nt=P.width,gt=P.height;let Ct=s.COLOR_BUFFER_BIT;const ct=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=r.get(P),zt=T.length>1;if(zt)for(let ne=0;ne<T.length;ne++)i.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);const Jt=P.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ne=0;ne<T.length;ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Ct|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Ct|=s.STENCIL_BUFFER_BIT)),zt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,te.__webglColorRenderbuffer[ne]);const At=r.get(T[ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,nt,gt,0,0,nt,gt,Ct,s.NEAREST),m===!0&&(B.length=0,ye.length=0,B.push(s.COLOR_ATTACHMENT0+ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(B.push(ct),ye.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,B))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),zt)for(let ne=0;ne<T.length;ne++){i.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,te.__webglColorRenderbuffer[ne]);const At=r.get(T[ne]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ae(P){return Math.min(l.maxSamples,P.samples)}function jt(P){const T=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(P){const T=h.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function ae(P,T){const nt=P.colorSpace,gt=P.format,Ct=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||nt!==Bs&&nt!==rr&&(Xe.getTransfer(nt)===$e?(gt!==Ii||Ct!==Zi)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pn("WebGLTextures: Unsupported texture color space:",nt)),T}function Zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=j,this.setTexture2D=lt,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=an,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=jt}function aT(s,t){function i(r,l=rr){let c;const h=Xe.getTransfer(l);if(r===Zi)return s.UNSIGNED_BYTE;if(r===Cd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===wd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Wg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Yg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Xg)return s.BYTE;if(r===qg)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Rd)return s.INT;if(r===Ir)return s.UNSIGNED_INT;if(r===Ta)return s.FLOAT;if(r===Gs)return s.HALF_FLOAT;if(r===jg)return s.ALPHA;if(r===Zg)return s.RGB;if(r===Ii)return s.RGBA;if(r===jo)return s.DEPTH_COMPONENT;if(r===Zo)return s.DEPTH_STENCIL;if(r===Kg)return s.RED;if(r===Dd)return s.RED_INTEGER;if(r===Ud)return s.RG;if(r===Ld)return s.RG_INTEGER;if(r===Nd)return s.RGBA_INTEGER;if(r===Oc||r===Pc||r===zc||r===Ic)if(h===$e)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yh||r===jh||r===Zh||r===Kh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qh||r===Jh||r===$h)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Qh||r===Jh)return h===$e?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===$h)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===td)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ed)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nd)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===id)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ad)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rd)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sd)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===od)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ld)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cd)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ud)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fd)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hd)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dd)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pd||r===md||r===xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===pd)return h===$e?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gd||r===_d||r===vd||r===yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===gd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===_d)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const rT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sT=`
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

}`;class oT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new l_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Fi({vertexShader:rT,fragmentShader:sT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mi(new zr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lT extends Vs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,S=null,E=null;const R=typeof XRWebGLBinding<"u",M=new oT,_={},L=i.getContextAttributes();let C=null,N=null;const z=[],U=[],O=new Ue;let et=null;const D=new Ri;D.viewport=new ln;const w=new Ri;w.viewport=new ln;const V=[D,w],j=new A1;let st=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ut=z[Q];return ut===void 0&&(ut=new bh,z[Q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Q){let ut=z[Q];return ut===void 0&&(ut=new bh,z[Q]=ut),ut.getGripSpace()},this.getHand=function(Q){let ut=z[Q];return ut===void 0&&(ut=new bh,z[Q]=ut),ut.getHandSpace()};function lt(Q){const ut=U.indexOf(Q.inputSource);if(ut===-1)return;const Ft=z[ut];Ft!==void 0&&(Ft.update(Q.inputSource,Q.frame,p||h),Ft.dispatchEvent({type:Q.type,data:Q.inputSource}))}function F(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",$);for(let Q=0;Q<z.length;Q++){const ut=U[Q];ut!==null&&(U[Q]=null,z[Q].disconnect(ut))}st=null,dt=null,M.reset();for(const Q in _)delete _[Q];t.setRenderTarget(C),S=null,v=null,x=null,l=null,N=null,kt.stop(),r.isPresenting=!1,t.setPixelRatio(et),t.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x===null&&R&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(C=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",F),l.addEventListener("inputsourceschange",$),L.xrCompatible!==!0&&await i.makeXRCompatible(),et=t.getPixelRatio(),t.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ft=null,Xt=null,ee=null;L.depth&&(ee=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ft=L.stencil?Zo:jo,Xt=L.stencil?Yo:Ir);const Se={colorFormat:i.RGBA8,depthFormat:ee,scaleFactor:c};x=this.getBinding(),v=x.createProjectionLayer(Se),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new Fr(v.textureWidth,v.textureHeight,{format:Ii,type:Zi,depthTexture:new o_(v.textureWidth,v.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Ft),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ft={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ft),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Fr(S.framebufferWidth,S.framebufferHeight,{format:Ii,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),kt.setContext(l),kt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(Q){for(let ut=0;ut<Q.removed.length;ut++){const Ft=Q.removed[ut],Xt=U.indexOf(Ft);Xt>=0&&(U[Xt]=null,z[Xt].disconnect(Ft))}for(let ut=0;ut<Q.added.length;ut++){const Ft=Q.added[ut];let Xt=U.indexOf(Ft);if(Xt===-1){for(let Se=0;Se<z.length;Se++)if(Se>=U.length){U.push(Ft),Xt=Se;break}else if(U[Se]===null){U[Se]=Ft,Xt=Se;break}if(Xt===-1)break}const ee=z[Xt];ee&&ee.connect(Ft)}}const K=new ht,_t=new ht;function Mt(Q,ut,Ft){K.setFromMatrixPosition(ut.matrixWorld),_t.setFromMatrixPosition(Ft.matrixWorld);const Xt=K.distanceTo(_t),ee=ut.projectionMatrix.elements,Se=Ft.projectionMatrix.elements,an=ee[14]/(ee[10]-1),xt=ee[14]/(ee[10]+1),Le=(ee[9]+1)/ee[5],B=(ee[9]-1)/ee[5],ye=(ee[8]-1)/ee[0],xe=(Se[8]+1)/Se[0],Ae=an*ye,jt=an*xe,qe=Xt/(-ye+xe),ae=qe*-ye;if(ut.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ae),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ee[10]===-1)Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Zt=an+qe,P=xt+qe,T=Ae-ae,nt=jt+(Xt-ae),gt=Le*xt/P*Zt,Ct=B*xt/P*Zt;Q.projectionMatrix.makePerspective(T,nt,gt,Ct,Zt,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function I(Q,ut){ut===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ut.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ut=Q.near,Ft=Q.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(Ft=M.depthFar)),j.near=w.near=D.near=ut,j.far=w.far=D.far=Ft,(st!==j.near||dt!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),st=j.near,dt=j.far),j.layers.mask=Q.layers.mask|6,D.layers.mask=j.layers.mask&3,w.layers.mask=j.layers.mask&5;const Xt=Q.parent,ee=j.cameras;I(j,Xt);for(let Se=0;Se<ee.length;Se++)I(ee[Se],Xt);ee.length===2?Mt(j,D,w):j.projectionMatrix.copy(D.projectionMatrix),rt(Q,j,Xt)};function rt(Q,ut,Ft){Ft===null?Q.matrix.copy(ut.matrixWorld):(Q.matrix.copy(Ft.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ut.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Jo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(Q){m=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(Q){return _[Q]};let Tt=null;function Nt(Q,ut){if(g=ut.getViewerPose(p||h),E=ut,g!==null){const Ft=g.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let Xt=!1;Ft.length!==j.cameras.length&&(j.cameras.length=0,Xt=!0);for(let xt=0;xt<Ft.length;xt++){const Le=Ft[xt];let B=null;if(S!==null)B=S.getViewport(Le);else{const xe=x.getViewSubImage(v,Le);B=xe.viewport,xt===0&&(t.setRenderTargetTextures(N,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(N))}let ye=V[xt];ye===void 0&&(ye=new Ri,ye.layers.enable(xt),ye.viewport=new ln,V[xt]=ye),ye.matrix.fromArray(Le.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Le.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(B.x,B.y,B.width,B.height),xt===0&&(j.matrix.copy(ye.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Xt===!0&&j.cameras.push(ye)}const ee=l.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){x=r.getBinding();const xt=x.getDepthInformation(Ft[0]);xt&&xt.isValid&&xt.texture&&M.init(xt,l.renderState)}if(ee&&ee.includes("camera-access")&&R){t.state.unbindTexture(),x=r.getBinding();for(let xt=0;xt<Ft.length;xt++){const Le=Ft[xt].camera;if(Le){let B=_[Le];B||(B=new l_,_[Le]=B);const ye=x.getCameraImage(Le);B.sourceTexture=ye}}}}for(let Ft=0;Ft<z.length;Ft++){const Xt=U[Ft],ee=z[Ft];Xt!==null&&ee!==void 0&&ee.update(Xt,ut,p||h)}Tt&&Tt(Q,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),E=null}const kt=new f_;kt.setAnimationLoop(Nt),this.setAnimationLoop=function(Q){Tt=Q},this.dispose=function(){}}}const Ur=new Ki,cT=new cn;function uT(s,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,a_(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,L,C,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),x(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),v(M,_),_.isMeshPhysicalMaterial&&S(M,_,N)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),R(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,L,C):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===ri&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===ri&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const L=t.get(_),C=L.envMap,N=L.envMapRotation;C&&(M.envMap.value=C,Ur.copy(N),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),M.envMapRotation.value.setFromMatrix4(cT.makeRotationFromEuler(Ur)),M.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,L,C){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*L,M.scale.value=C*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function x(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function v(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,L){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ri&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const L=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function fT(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,C){const N=C.program;r.uniformBlockBinding(L,N)}function p(L,C){let N=l[L.id];N===void 0&&(E(L),N=g(L),l[L.id]=N,L.addEventListener("dispose",M));const z=C.program;r.updateUBOMapping(L,z);const U=t.render.frame;c[L.id]!==U&&(v(L),c[L.id]=U)}function g(L){const C=x();L.__bindingPointIndex=C;const N=s.createBuffer(),z=L.__size,U=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,z,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,N),N}function x(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return pn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const C=l[L.id],N=L.uniforms,z=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let U=0,O=N.length;U<O;U++){const et=Array.isArray(N[U])?N[U]:[N[U]];for(let D=0,w=et.length;D<w;D++){const V=et[D];if(S(V,U,D,z)===!0){const j=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let dt=0;for(let lt=0;lt<st.length;lt++){const F=st[lt],$=R(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,j+dt,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,dt),dt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,C,N,z){const U=L.value,O=C+"_"+N;if(z[O]===void 0)return typeof U=="number"||typeof U=="boolean"?z[O]=U:z[O]=U.clone(),!0;{const et=z[O];if(typeof U=="number"||typeof U=="boolean"){if(et!==U)return z[O]=U,!0}else if(et.equals(U)===!1)return et.copy(U),!0}return!1}function E(L){const C=L.uniforms;let N=0;const z=16;for(let O=0,et=C.length;O<et;O++){const D=Array.isArray(C[O])?C[O]:[C[O]];for(let w=0,V=D.length;w<V;w++){const j=D[w],st=Array.isArray(j.value)?j.value:[j.value];for(let dt=0,lt=st.length;dt<lt;dt++){const F=st[dt],$=R(F),K=N%z,_t=K%$.boundary,Mt=K+_t;N+=_t,Mt!==0&&z-Mt<$.storage&&(N+=z-Mt),j.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=N,N+=$.storage}}}const U=N%z;return U>0&&(N+=z-U),L.__size=N,L.__cache={},this}function R(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):be("WebGLRenderer: Unsupported uniform value type.",L),C}function M(L){const C=L.target;C.removeEventListener("dispose",M);const N=h.indexOf(C.__bindingPointIndex);h.splice(N,1),s.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}const hT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Sa=null;function dT(){return Sa===null&&(Sa=new u1(hT,32,32,Ud,Gs),Sa.minFilter=Ci,Sa.magFilter=Ci,Sa.wrapS=Ea,Sa.wrapT=Ea,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class pT{constructor(t={}){const{canvas:i=SS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const E=new Set([Nd,Ld,Dd]),R=new Set([Zi,Ir,Wo,Yo,Cd,wd]),M=new Uint32Array(4),_=new Int32Array(4);let L=null,C=null;const N=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let O=!1;this._outputColorSpace=Ai;let et=0,D=0,w=null,V=-1,j=null;const st=new ln,dt=new ln;let lt=null;const F=new Ge(0);let $=0,K=i.width,_t=i.height,Mt=1,I=null,rt=null;const Tt=new ln(0,0,K,_t),Nt=new ln(0,0,K,_t);let kt=!1;const Q=new Bd;let ut=!1,Ft=!1;const Xt=new cn,ee=new ht,Se=new ln,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Le(){return w===null?Mt:1}let B=r;function ye(b,H){return i.getContext(b,H)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ad}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",vt,!1),i.addEventListener("webglcontextcreationerror",Wt,!1),B===null){const H="webgl2";if(B=ye(H,b),B===null)throw ye(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let xe,Ae,jt,qe,ae,Zt,P,T,nt,gt,Ct,ct,te,zt,Jt,ne,At,Ut,ie,Kt,qt,he,k,Ht;function Pt(){xe=new M3(B),xe.init(),he=new aT(B,xe),Ae=new d3(B,xe,t,he),jt=new nT(B,xe),Ae.reversedDepthBuffer&&v&&jt.buffers.depth.setReversed(!0),qe=new T3(B),ae=new kE,Zt=new iT(B,xe,jt,ae,Ae,he,qe),P=new m3(U),T=new S3(U),nt=new w1(B),k=new f3(B,nt),gt=new b3(B,nt,qe,k),Ct=new R3(B,gt,nt,qe),ie=new A3(B,Ae,Zt),ne=new p3(ae),ct=new VE(U,P,T,xe,Ae,k,ne),te=new uT(U,ae),zt=new qE,Jt=new QE(xe),Ut=new u3(U,P,T,jt,Ct,S,m),At=new tT(U,Ct,Ae),Ht=new fT(B,qe,Ae,jt),Kt=new h3(B,xe,qe),qt=new E3(B,xe,qe),qe.programs=ct.programs,U.capabilities=Ae,U.extensions=xe,U.properties=ae,U.renderLists=zt,U.shadowMap=At,U.state=jt,U.info=qe}Pt();const It=new lT(U,B);this.xr=It,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(b){b!==void 0&&(Mt=b,this.setSize(K,_t,!1))},this.getSize=function(b){return b.set(K,_t)},this.setSize=function(b,H,W=!0){if(It.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,_t=H,i.width=Math.floor(b*Mt),i.height=Math.floor(H*Mt),W===!0&&(i.style.width=b+"px",i.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(K*Mt,_t*Mt).floor()},this.setDrawingBufferSize=function(b,H,W){K=b,_t=H,Mt=W,i.width=Math.floor(b*W),i.height=Math.floor(H*W),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(st)},this.getViewport=function(b){return b.copy(Tt)},this.setViewport=function(b,H,W,Z){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,H,W,Z),jt.viewport(st.copy(Tt).multiplyScalar(Mt).round())},this.getScissor=function(b){return b.copy(Nt)},this.setScissor=function(b,H,W,Z){b.isVector4?Nt.set(b.x,b.y,b.z,b.w):Nt.set(b,H,W,Z),jt.scissor(dt.copy(Nt).multiplyScalar(Mt).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(b){jt.setScissorTest(kt=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,W=!0){let Z=0;if(b){let q=!1;if(w!==null){const Et=w.texture.format;q=E.has(Et)}if(q){const Et=w.texture.type,wt=R.has(Et),Y=Ut.getClearColor(),Rt=Ut.getClearAlpha(),Gt=Y.r,Bt=Y.g,Lt=Y.b;wt?(M[0]=Gt,M[1]=Bt,M[2]=Lt,M[3]=Rt,B.clearBufferuiv(B.COLOR,0,M)):(_[0]=Gt,_[1]=Bt,_[2]=Lt,_[3]=Rt,B.clearBufferiv(B.COLOR,0,_))}else Z|=B.COLOR_BUFFER_BIT}H&&(Z|=B.DEPTH_BUFFER_BIT),W&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",Wt,!1),Ut.dispose(),zt.dispose(),Jt.dispose(),ae.dispose(),P.dispose(),T.dispose(),Ct.dispose(),k.dispose(),Ht.dispose(),ct.dispose(),It.dispose(),It.removeEventListener("sessionstart",Ca),It.removeEventListener("sessionend",wa),Kn.stop()};function Dt(b){b.preventDefault(),Hx("WebGLRenderer: Context Lost."),O=!0}function vt(){Hx("WebGLRenderer: Context Restored."),O=!1;const b=qe.autoReset,H=At.enabled,W=At.autoUpdate,Z=At.needsUpdate,q=At.type;Pt(),qe.autoReset=b,At.enabled=H,At.autoUpdate=W,At.needsUpdate=Z,At.type=q}function Wt(b){pn("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function de(b){const H=b.target;H.removeEventListener("dispose",de),Ye(H)}function Ye(b){ge(b),ae.remove(b)}function ge(b){const H=ae.get(b).programs;H!==void 0&&(H.forEach(function(W){ct.releaseProgram(W)}),b.isShaderMaterial&&ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,W,Z,q,Et){H===null&&(H=an);const wt=q.isMesh&&q.matrixWorld.determinant()<0,Y=Br(b,H,W,Z,q);jt.setMaterial(Z,wt);let Rt=W.index,Gt=1;if(Z.wireframe===!0){if(Rt=gt.getWireframeAttribute(W),Rt===void 0)return;Gt=2}const Bt=W.drawRange,Lt=W.attributes.position;let le=Bt.start*Gt,oe=(Bt.start+Bt.count)*Gt;Et!==null&&(le=Math.max(le,Et.start*Gt),oe=Math.min(oe,(Et.start+Et.count)*Gt)),Rt!==null?(le=Math.max(le,0),oe=Math.min(oe,Rt.count)):Lt!=null&&(le=Math.max(le,0),oe=Math.min(oe,Lt.count));const ve=oe-le;if(ve<0||ve===1/0)return;k.setup(q,Z,Y,W,Rt);let ce,_e=Kt;if(Rt!==null&&(ce=nt.get(Rt),_e=qt,_e.setIndex(ce)),q.isMesh)Z.wireframe===!0?(jt.setLineWidth(Z.wireframeLinewidth*Le()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(q.isLine){let Qt=Z.linewidth;Qt===void 0&&(Qt=1),jt.setLineWidth(Qt*Le()),q.isLineSegments?_e.setMode(B.LINES):q.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else q.isPoints?_e.setMode(B.POINTS):q.isSprite&&_e.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))_e.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qt=q._multiDrawStarts,De=q._multiDrawCounts,re=q._multiDrawCount,He=Rt?nt.get(Rt).bytesPerElement:1,mn=ae.get(Z).currentProgram.getUniforms();for(let pe=0;pe<re;pe++)mn.setValue(B,"_gl_DrawID",pe),_e.render(Qt[pe]/He,De[pe])}else if(q.isInstancedMesh)_e.renderInstances(le,ve,q.count);else if(W.isInstancedBufferGeometry){const Qt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,De=Math.min(W.instanceCount,Qt);_e.renderInstances(le,ve,De)}else _e.render(le,ve)};function An(b,H,W){b.transparent===!0&&b.side===Wi&&b.forceSinglePass===!1?(b.side=ri,b.needsUpdate=!0,un(b,H,W),b.side=lr,b.needsUpdate=!0,un(b,H,W),b.side=Wi):un(b,H,W)}this.compile=function(b,H,W=null){W===null&&(W=b),C=Jt.get(W),C.init(H),z.push(C),W.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),b!==W&&b.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),C.setupLights();const Z=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Et=q.material;if(Et)if(Array.isArray(Et))for(let wt=0;wt<Et.length;wt++){const Y=Et[wt];An(Y,W,q),Z.add(Y)}else An(Et,W,q),Z.add(Et)}),C=z.pop(),Z},this.compileAsync=function(b,H,W=null){const Z=this.compile(b,H,W);return new Promise(q=>{function Et(){if(Z.forEach(function(wt){ae.get(wt).currentProgram.isReady()&&Z.delete(wt)}),Z.size===0){q(b);return}setTimeout(Et,10)}xe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Fn=null;function cr(b){Fn&&Fn(b)}function Ca(){Kn.stop()}function wa(){Kn.start()}const Kn=new f_;Kn.setAnimationLoop(cr),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){Fn=b,It.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},It.addEventListener("sessionstart",Ca),It.addEventListener("sessionend",wa),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){pn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(H),H=It.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,H,w),C=Jt.get(b,z.length),C.init(H),z.push(C),Xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(Xt,Yi,H.reversedDepth),Ft=this.localClippingEnabled,ut=ne.init(this.clippingPlanes,Ft),L=zt.get(b,N.length),L.init(),N.push(L),It.enabled===!0&&It.isPresenting===!0){const Et=U.xr.getDepthSensingMesh();Et!==null&&Qn(Et,H,-1/0,U.sortObjects)}Qn(b,H,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(I,rt),xt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,xt&&Ut.addToRenderList(L,b),this.info.render.frame++,ut===!0&&ne.beginShadows();const W=C.state.shadowsArray;At.render(W,b,H),ut===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=L.opaque,q=L.transmissive;if(C.setupLights(),H.isArrayCamera){const Et=H.cameras;if(q.length>0)for(let wt=0,Y=Et.length;wt<Y;wt++){const Rt=Et[wt];Qi(Z,q,b,Rt)}xt&&Ut.render(b);for(let wt=0,Y=Et.length;wt<Y;wt++){const Rt=Et[wt];qn(L,b,Rt,Rt.viewport)}}else q.length>0&&Qi(Z,q,b,H),xt&&Ut.render(b),qn(L,b,H);w!==null&&D===0&&(Zt.updateMultisampleRenderTarget(w),Zt.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(U,b,H),k.resetDefaultState(),V=-1,j=null,z.pop(),z.length>0?(C=z[z.length-1],ut===!0&&ne.setGlobalState(U.clippingPlanes,C.state.camera)):C=null,N.pop(),N.length>0?L=N[N.length-1]:L=null};function Qn(b,H,W,Z){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){Z&&Se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Xt);const wt=Ct.update(b),Y=b.material;Y.visible&&L.push(b,wt,Y,W,Se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const wt=Ct.update(b),Y=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Se.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Se.copy(wt.boundingSphere.center)),Se.applyMatrix4(b.matrixWorld).applyMatrix4(Xt)),Array.isArray(Y)){const Rt=wt.groups;for(let Gt=0,Bt=Rt.length;Gt<Bt;Gt++){const Lt=Rt[Gt],le=Y[Lt.materialIndex];le&&le.visible&&L.push(b,wt,le,W,Se.z,Lt)}}else Y.visible&&L.push(b,wt,Y,W,Se.z,null)}}const Et=b.children;for(let wt=0,Y=Et.length;wt<Y;wt++)Qn(Et[wt],H,W,Z)}function qn(b,H,W,Z){const{opaque:q,transmissive:Et,transparent:wt}=b;C.setupLightsView(W),ut===!0&&ne.setGlobalState(U.clippingPlanes,W),Z&&jt.viewport(st.copy(Z)),q.length>0&&Bn(q,H,W),Et.length>0&&Bn(Et,H,W),wt.length>0&&Bn(wt,H,W),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Qi(b,H,W,Z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;C.state.transmissionRenderTarget[Z.id]===void 0&&(C.state.transmissionRenderTarget[Z.id]=new Fr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Gs:Zi,minFilter:Pr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const Et=C.state.transmissionRenderTarget[Z.id],wt=Z.viewport||st;Et.setSize(wt.z*U.transmissionResolutionScale,wt.w*U.transmissionResolutionScale);const Y=U.getRenderTarget(),Rt=U.getActiveCubeFace(),Gt=U.getActiveMipmapLevel();U.setRenderTarget(Et),U.getClearColor(F),$=U.getClearAlpha(),$<1&&U.setClearColor(16777215,.5),U.clear(),xt&&Ut.render(W);const Bt=U.toneMapping;U.toneMapping=or;const Lt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),C.setupLightsView(Z),ut===!0&&ne.setGlobalState(U.clippingPlanes,Z),Bn(b,W,Z),Zt.updateMultisampleRenderTarget(Et),Zt.updateRenderTargetMipmap(Et),xe.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let oe=0,ve=H.length;oe<ve;oe++){const ce=H[oe],{object:_e,geometry:Qt,material:De,group:re}=ce;if(De.side===Wi&&_e.layers.test(Z.layers)){const He=De.side;De.side=ri,De.needsUpdate=!0,on(_e,W,Z,Qt,De,re),De.side=He,De.needsUpdate=!0,le=!0}}le===!0&&(Zt.updateMultisampleRenderTarget(Et),Zt.updateRenderTargetMipmap(Et))}U.setRenderTarget(Y,Rt,Gt),U.setClearColor(F,$),Lt!==void 0&&(Z.viewport=Lt),U.toneMapping=Bt}function Bn(b,H,W){const Z=H.isScene===!0?H.overrideMaterial:null;for(let q=0,Et=b.length;q<Et;q++){const wt=b[q],{object:Y,geometry:Rt,group:Gt}=wt;let Bt=wt.material;Bt.allowOverride===!0&&Z!==null&&(Bt=Z),Y.layers.test(W.layers)&&on(Y,H,W,Rt,Bt,Gt)}}function on(b,H,W,Z,q,Et){b.onBeforeRender(U,H,W,Z,q,Et),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(U,H,W,Z,b,Et),q.transparent===!0&&q.side===Wi&&q.forceSinglePass===!1?(q.side=ri,q.needsUpdate=!0,U.renderBufferDirect(W,H,Z,q,b,Et),q.side=lr,q.needsUpdate=!0,U.renderBufferDirect(W,H,Z,q,b,Et),q.side=Wi):U.renderBufferDirect(W,H,Z,q,b,Et),b.onAfterRender(U,H,W,Z,q,Et)}function un(b,H,W){H.isScene!==!0&&(H=an);const Z=ae.get(b),q=C.state.lights,Et=C.state.shadowsArray,wt=q.state.version,Y=ct.getParameters(b,q.state,Et,H,W),Rt=ct.getProgramCacheKey(Y);let Gt=Z.programs;Z.environment=b.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(b.isMeshStandardMaterial?T:P).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Gt===void 0&&(b.addEventListener("dispose",de),Gt=new Map,Z.programs=Gt);let Bt=Gt.get(Rt);if(Bt!==void 0){if(Z.currentProgram===Bt&&Z.lightsStateVersion===wt)return Bi(b,Y),Bt}else Y.uniforms=ct.getUniforms(b),b.onBeforeCompile(Y,U),Bt=ct.acquireProgram(Y,Rt),Gt.set(Rt,Bt),Z.uniforms=Y.uniforms;const Lt=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=ne.uniform),Bi(b,Y),Z.needsLights=J(b),Z.lightsStateVersion=wt,Z.needsLights&&(Lt.ambientLightColor.value=q.state.ambient,Lt.lightProbe.value=q.state.probe,Lt.directionalLights.value=q.state.directional,Lt.directionalLightShadows.value=q.state.directionalShadow,Lt.spotLights.value=q.state.spot,Lt.spotLightShadows.value=q.state.spotShadow,Lt.rectAreaLights.value=q.state.rectArea,Lt.ltc_1.value=q.state.rectAreaLTC1,Lt.ltc_2.value=q.state.rectAreaLTC2,Lt.pointLights.value=q.state.point,Lt.pointLightShadows.value=q.state.pointShadow,Lt.hemisphereLights.value=q.state.hemi,Lt.directionalShadowMap.value=q.state.directionalShadowMap,Lt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Lt.spotShadowMap.value=q.state.spotShadowMap,Lt.spotLightMatrix.value=q.state.spotLightMatrix,Lt.spotLightMap.value=q.state.spotLightMap,Lt.pointShadowMap.value=q.state.pointShadowMap,Lt.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=Bt,Z.uniformsList=null,Bt}function Jn(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Fc.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Bi(b,H){const W=ae.get(b);W.outputColorSpace=H.outputColorSpace,W.batching=H.batching,W.batchingColor=H.batchingColor,W.instancing=H.instancing,W.instancingColor=H.instancingColor,W.instancingMorph=H.instancingMorph,W.skinning=H.skinning,W.morphTargets=H.morphTargets,W.morphNormals=H.morphNormals,W.morphColors=H.morphColors,W.morphTargetsCount=H.morphTargetsCount,W.numClippingPlanes=H.numClippingPlanes,W.numIntersection=H.numClipIntersection,W.vertexAlphas=H.vertexAlphas,W.vertexTangents=H.vertexTangents,W.toneMapping=H.toneMapping}function Br(b,H,W,Z,q){H.isScene!==!0&&(H=an),Zt.resetTextureUnits();const Et=H.fog,wt=Z.isMeshStandardMaterial?H.environment:null,Y=w===null?U.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Bs,Rt=(Z.isMeshStandardMaterial?T:P).get(Z.envMap||wt),Gt=Z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Bt=!!W.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Lt=!!W.morphAttributes.position,le=!!W.morphAttributes.normal,oe=!!W.morphAttributes.color;let ve=or;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ve=U.toneMapping);const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=ce!==void 0?ce.length:0,Qt=ae.get(Z),De=C.state.lights;if(ut===!0&&(Ft===!0||b!==j)){const Rn=b===j&&Z.id===V;ne.setState(Z,b,Rn)}let re=!1;Z.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==De.state.version||Qt.outputColorSpace!==Y||q.isBatchedMesh&&Qt.batching===!1||!q.isBatchedMesh&&Qt.batching===!0||q.isBatchedMesh&&Qt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Qt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Qt.instancing===!1||!q.isInstancedMesh&&Qt.instancing===!0||q.isSkinnedMesh&&Qt.skinning===!1||!q.isSkinnedMesh&&Qt.skinning===!0||q.isInstancedMesh&&Qt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Qt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Qt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Qt.instancingMorph===!1&&q.morphTexture!==null||Qt.envMap!==Rt||Z.fog===!0&&Qt.fog!==Et||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==ne.numPlanes||Qt.numIntersection!==ne.numIntersection)||Qt.vertexAlphas!==Gt||Qt.vertexTangents!==Bt||Qt.morphTargets!==Lt||Qt.morphNormals!==le||Qt.morphColors!==oe||Qt.toneMapping!==ve||Qt.morphTargetsCount!==_e)&&(re=!0):(re=!0,Qt.__version=Z.version);let He=Qt.currentProgram;re===!0&&(He=un(Z,H,q));let mn=!1,pe=!1,Ee=!1;const fe=He.getUniforms(),Fe=Qt.uniforms;if(jt.useProgram(He.program)&&(mn=!0,pe=!0,Ee=!0),Z.id!==V&&(V=Z.id,pe=!0),mn||j!==b){jt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(B,"projectionMatrix",b.projectionMatrix),fe.setValue(B,"viewMatrix",b.matrixWorldInverse);const Ln=fe.map.cameraPosition;Ln!==void 0&&Ln.setValue(B,ee.setFromMatrixPosition(b.matrixWorld)),Ae.logarithmicDepthBuffer&&fe.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&fe.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,pe=!0,Ee=!0)}if(q.isSkinnedMesh){fe.setOptional(B,q,"bindMatrix"),fe.setOptional(B,q,"bindMatrixInverse");const Rn=q.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),fe.setValue(B,"boneTexture",Rn.boneTexture,Zt))}q.isBatchedMesh&&(fe.setOptional(B,q,"batchingTexture"),fe.setValue(B,"batchingTexture",q._matricesTexture,Zt),fe.setOptional(B,q,"batchingIdTexture"),fe.setValue(B,"batchingIdTexture",q._indirectTexture,Zt),fe.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&fe.setValue(B,"batchingColorTexture",q._colorsTexture,Zt));const rn=W.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&ie.update(q,W,He),(pe||Qt.receiveShadow!==q.receiveShadow)&&(Qt.receiveShadow=q.receiveShadow,fe.setValue(B,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Fe.envMap.value=Rt,Fe.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(Fe.envMapIntensity.value=H.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=dT()),pe&&(fe.setValue(B,"toneMappingExposure",U.toneMappingExposure),Qt.needsLights&&Hr(Fe,Ee),Et&&Z.fog===!0&&te.refreshFogUniforms(Fe,Et),te.refreshMaterialUniforms(Fe,Z,Mt,_t,C.state.transmissionRenderTarget[b.id]),Fc.upload(B,Jn(Qt),Fe,Zt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Fc.upload(B,Jn(Qt),Fe,Zt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&fe.setValue(B,"center",q.center),fe.setValue(B,"modelViewMatrix",q.modelViewMatrix),fe.setValue(B,"normalMatrix",q.normalMatrix),fe.setValue(B,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Rn=Z.uniformsGroups;for(let Ln=0,Hi=Rn.length;Ln<Hi;Ln++){const Ji=Rn[Ln];Ht.update(Ji,He),Ht.bind(Ji,He)}}return He}function Hr(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function J(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return et},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,H,W){const Z=ae.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ae.get(b.texture).__webglTexture=H,ae.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:W,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const W=ae.get(b);W.__webglFramebuffer=H,W.__useDefaultFramebuffer=H===void 0};const pt=B.createFramebuffer();this.setRenderTarget=function(b,H=0,W=0){w=b,et=H,D=W;let Z=!0,q=null,Et=!1,wt=!1;if(b){const Rt=ae.get(b);if(Rt.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1;else if(Rt.__webglFramebuffer===void 0)Zt.setupRenderTarget(b);else if(Rt.__hasExternalTextures)Zt.rebindTextures(b,ae.get(b.texture).__webglTexture,ae.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Lt=b.depthTexture;if(Rt.__boundDepthTexture!==Lt){if(Lt!==null&&ae.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Zt.setupDepthRenderbuffer(b)}}const Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(wt=!0);const Bt=ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[H])?q=Bt[H][W]:q=Bt[H],Et=!0):b.samples>0&&Zt.useMultisampledRTT(b)===!1?q=ae.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?q=Bt[W]:q=Bt,st.copy(b.viewport),dt.copy(b.scissor),lt=b.scissorTest}else st.copy(Tt).multiplyScalar(Mt).floor(),dt.copy(Nt).multiplyScalar(Mt).floor(),lt=kt;if(W!==0&&(q=pt),jt.bindFramebuffer(B.FRAMEBUFFER,q)&&Z&&jt.drawBuffers(b,q),jt.viewport(st),jt.scissor(dt),jt.setScissorTest(lt),Et){const Rt=ae.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,Rt.__webglTexture,W)}else if(wt){const Rt=H;for(let Gt=0;Gt<b.textures.length;Gt++){const Bt=ae.get(b.textures[Gt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Gt,Bt.__webglTexture,W,Rt)}}else if(b!==null&&W!==0){const Rt=ae.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rt.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(b,H,W,Z,q,Et,wt,Y=0){if(!(b&&b.isWebGLRenderTarget)){pn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt){jt.bindFramebuffer(B.FRAMEBUFFER,Rt);try{const Gt=b.textures[Y],Bt=Gt.format,Lt=Gt.type;if(!Ae.textureFormatReadable(Bt)){pn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Lt)){pn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Z&&W>=0&&W<=b.height-q&&(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Y),B.readPixels(H,W,Z,q,he.convert(Bt),he.convert(Lt),Et))}finally{const Gt=w!==null?ae.get(w).__webglFramebuffer:null;jt.bindFramebuffer(B.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(b,H,W,Z,q,Et,wt,Y=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt)if(H>=0&&H<=b.width-Z&&W>=0&&W<=b.height-q){jt.bindFramebuffer(B.FRAMEBUFFER,Rt);const Gt=b.textures[Y],Bt=Gt.format,Lt=Gt.type;if(!Ae.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Y),B.readPixels(H,W,Z,q,he.convert(Bt),he.convert(Lt),0);const oe=w!==null?ae.get(w).__webglFramebuffer:null;jt.bindFramebuffer(B.FRAMEBUFFER,oe);const ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await MS(B,ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.deleteBuffer(le),B.deleteSync(ve),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,W=0){const Z=Math.pow(2,-W),q=Math.floor(b.image.width*Z),Et=Math.floor(b.image.height*Z),wt=H!==null?H.x:0,Y=H!==null?H.y:0;Zt.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,wt,Y,q,Et),jt.unbindTexture()};const St=B.createFramebuffer(),Ot=B.createFramebuffer();this.copyTextureToTexture=function(b,H,W=null,Z=null,q=0,Et=null){Et===null&&(q!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=q,q=0):Et=0);let wt,Y,Rt,Gt,Bt,Lt,le,oe,ve;const ce=b.isCompressedTexture?b.mipmaps[Et]:b.image;if(W!==null)wt=W.max.x-W.min.x,Y=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Gt=W.min.x,Bt=W.min.y,Lt=W.isBox3?W.min.z:0;else{const rn=Math.pow(2,-q);wt=Math.floor(ce.width*rn),Y=Math.floor(ce.height*rn),b.isDataArrayTexture?Rt=ce.depth:b.isData3DTexture?Rt=Math.floor(ce.depth*rn):Rt=1,Gt=0,Bt=0,Lt=0}Z!==null?(le=Z.x,oe=Z.y,ve=Z.z):(le=0,oe=0,ve=0);const _e=he.convert(H.format),Qt=he.convert(H.type);let De;H.isData3DTexture?(Zt.setTexture3D(H,0),De=B.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Zt.setTexture2DArray(H,0),De=B.TEXTURE_2D_ARRAY):(Zt.setTexture2D(H,0),De=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);const re=B.getParameter(B.UNPACK_ROW_LENGTH),He=B.getParameter(B.UNPACK_IMAGE_HEIGHT),mn=B.getParameter(B.UNPACK_SKIP_PIXELS),pe=B.getParameter(B.UNPACK_SKIP_ROWS),Ee=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ce.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Gt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Bt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Lt);const fe=b.isDataArrayTexture||b.isData3DTexture,Fe=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const rn=ae.get(b),Rn=ae.get(H),Ln=ae.get(rn.__renderTarget),Hi=ae.get(Rn.__renderTarget);jt.bindFramebuffer(B.READ_FRAMEBUFFER,Ln.__webglFramebuffer),jt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Ji=0;Ji<Rt;Ji++)fe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ae.get(b).__webglTexture,q,Lt+Ji),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ae.get(H).__webglTexture,Et,ve+Ji)),B.blitFramebuffer(Gt,Bt,wt,Y,le,oe,wt,Y,B.DEPTH_BUFFER_BIT,B.NEAREST);jt.bindFramebuffer(B.READ_FRAMEBUFFER,null),jt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||ae.has(b)){const rn=ae.get(b),Rn=ae.get(H);jt.bindFramebuffer(B.READ_FRAMEBUFFER,St),jt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ot);for(let Ln=0;Ln<Rt;Ln++)fe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,rn.__webglTexture,q,Lt+Ln):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,rn.__webglTexture,q),Fe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rn.__webglTexture,Et,ve+Ln):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rn.__webglTexture,Et),q!==0?B.blitFramebuffer(Gt,Bt,wt,Y,le,oe,wt,Y,B.COLOR_BUFFER_BIT,B.NEAREST):Fe?B.copyTexSubImage3D(De,Et,le,oe,ve+Ln,Gt,Bt,wt,Y):B.copyTexSubImage2D(De,Et,le,oe,Gt,Bt,wt,Y);jt.bindFramebuffer(B.READ_FRAMEBUFFER,null),jt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Fe?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(De,Et,le,oe,ve,wt,Y,Rt,_e,Qt,ce.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(De,Et,le,oe,ve,wt,Y,Rt,_e,ce.data):B.texSubImage3D(De,Et,le,oe,ve,wt,Y,Rt,_e,Qt,ce):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,le,oe,wt,Y,_e,Qt,ce.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,le,oe,ce.width,ce.height,_e,ce.data):B.texSubImage2D(B.TEXTURE_2D,Et,le,oe,wt,Y,_e,Qt,ce);B.pixelStorei(B.UNPACK_ROW_LENGTH,re),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,He),B.pixelStorei(B.UNPACK_SKIP_PIXELS,mn),B.pixelStorei(B.UNPACK_SKIP_ROWS,pe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ee),Et===0&&H.generateMipmaps&&B.generateMipmap(De),jt.unbindTexture()},this.initRenderTarget=function(b){ae.get(b).__webglFramebuffer===void 0&&Zt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Zt.setTextureCube(b,0):b.isData3DTexture?Zt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Zt.setTexture2DArray(b,0):Zt.setTexture2D(b,0),jt.unbindTexture()},this.resetState=function(){et=0,D=0,w=null,jt.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(t),i.unpackColorSpace=Xe._getUnpackColorSpace()}}const mT="/assets/pocket-cursors-v1-DJyk4FYY.png",xT="/assets/pocket-extras-v2-DaGMHAd4.png",gT="/assets/pocket-hidden-lake-v1-GO9rH8_V.png",_T="/assets/pocket-moon-ground-v1-Vdl0Vklr.png",vT="/assets/pocket-person-frames-v1-DHwQlY0Y.png",yT="/assets/pocket-planet-background-v1-CL8__EBF.png",ST="/assets/pocket-walk-16-v2-CtdluXId.png",MT="/assets/sky-keepsakes-v1-CmNmaSlo.png",bT="/assets/yellow-paper-v1-X2JHbY1E.png",Ma=Object.freeze({cursors:mT,extras:xT,hiddenSky:gT,terrain:_T,poses:vT,sky:yT,walk:ST,keepsakes:MT,paper:bT});function Pg(s=!1){const t=document.createElement("canvas");t.width=t.height=40;const i=t.getContext("2d");return i&&(i.save(),i.translate(20,20),i.rotate(-.12),i.fillStyle="#f6cd62",i.strokeStyle="#5e442f",i.lineWidth=2.25,i.lineJoin="round",i.lineCap="round",i.shadowColor="rgba(54,33,63,.24)",i.shadowBlur=1.6,i.shadowOffsetY=1,i.beginPath(),s?(i.moveTo(-12,11),i.quadraticCurveTo(-15,5,-14,0),i.lineTo(-9,-7),i.quadraticCurveTo(-8,-11,-4,-12),i.lineTo(8,-12),i.quadraticCurveTo(14,-11,14,-6),i.lineTo(14,7),i.quadraticCurveTo(13,16,5,19),i.lineTo(-5,19),i.quadraticCurveTo(-10,18,-12,11),i.closePath(),i.fill(),i.stroke(),i.beginPath(),i.moveTo(-12,1),i.quadraticCurveTo(-8,0,-5,4),i.lineTo(-1,9),i.quadraticCurveTo(1,12,4,10),i.lineTo(11,4),i.stroke()):(i.moveTo(-10,15),i.quadraticCurveTo(-14,5,-14,1),i.quadraticCurveTo(-14,-2,-11,-3),i.quadraticCurveTo(-9,-3,-7,0),i.lineTo(-7,-12),i.quadraticCurveTo(-7,-15,-4,-15),i.quadraticCurveTo(-1,-15,-1,-12),i.lineTo(-1,-3),i.lineTo(0,-17),i.quadraticCurveTo(0,-20,3,-20),i.quadraticCurveTo(6,-20,6,-17),i.lineTo(6,-3),i.lineTo(7,-14),i.quadraticCurveTo(7,-17,10,-17),i.quadraticCurveTo(13,-17,13,-14),i.lineTo(13,-3),i.lineTo(14,-9),i.quadraticCurveTo(14,-12,17,-11),i.quadraticCurveTo(20,-10,19,-6),i.lineTo(17,7),i.quadraticCurveTo(15,16,8,19),i.lineTo(-2,20),i.quadraticCurveTo(-8,20,-10,15),i.closePath(),i.fill(),i.stroke()),i.shadowColor="transparent",i.strokeStyle="rgba(255,247,190,.82)",i.lineWidth=1,i.beginPath(),s?(i.moveTo(-8,-7),i.quadraticCurveTo(-3,-10,7,-9)):(i.moveTo(-4,13),i.quadraticCurveTo(3,15,10,10)),i.stroke(),i.restore()),t}function ET(s){const t=document.createElement("canvas");t.width=t.height=40;const i=t.getContext("2d");if(!i)return t;const r=["#6da7dd","#79a9a0","#ef9d72","#d98b72","#e9c15d","#8296d1","#b58cd2","#72b5b0","#c9845b","#d7849d","#dfae68"],l=r[(Math.max(1,s)-1)%r.length];i.save(),i.translate(20,20),i.rotate(-.08),i.fillStyle=l,i.strokeStyle="#5e442f",i.lineWidth=1.9,i.lineJoin="round",i.lineCap="round",i.shadowColor="rgba(54,33,63,.24)",i.shadowBlur=1.5,i.shadowOffsetY=1;const c=()=>{i.fill(),i.stroke()};switch(s){case 1:i.beginPath(),i.moveTo(-16,3),i.lineTo(15,-8),i.lineTo(3,5),i.lineTo(13,11),i.lineTo(1,9),i.lineTo(-5,16),i.lineTo(-4,7),i.closePath(),c();break;case 2:i.fillRect(-12,-11,24,18),i.strokeRect(-12,-11,24,18),i.beginPath(),i.moveTo(-16,10),i.lineTo(16,10),i.lineTo(12,14),i.lineTo(-12,14),i.closePath(),c();break;case 3:i.beginPath(),i.moveTo(-13,-5),i.lineTo(13,-5),i.lineTo(10,12),i.lineTo(-10,12),i.closePath(),c(),i.beginPath(),i.ellipse(0,-6,13,4,0,0,Math.PI*2),c(),i.fillStyle="#fff4bd",i.beginPath(),i.arc(6,-9,2,0,Math.PI*2),i.fill();break;case 4:i.beginPath(),i.arc(0,2,14,Math.PI,0),i.lineTo(13,8),i.lineTo(-13,8),i.closePath(),c(),i.beginPath(),i.moveTo(-8,2),i.lineTo(10,2),i.stroke();break;case 5:i.beginPath(),i.moveTo(-12,-10),i.lineTo(10,-1),i.lineTo(2,6),i.lineTo(-15,-2),i.closePath(),c(),i.beginPath(),i.ellipse(5,11,4,3,0,0,Math.PI*2),c();break;case 6:i.beginPath(),i.moveTo(-16,11),i.lineTo(-2,-9),i.lineTo(4,0),i.lineTo(11,-6),i.lineTo(17,11),i.closePath(),c(),i.beginPath(),i.moveTo(-6,-3),i.lineTo(-2,-9),i.lineTo(1,-4),i.moveTo(8,-2),i.lineTo(11,-6),i.lineTo(14,-1),i.stroke();break;case 7:i.beginPath(),i.rect(-14,-12,28,23),c(),i.beginPath(),i.moveTo(-8,-3),i.lineTo(-3,1),i.lineTo(-8,5),i.moveTo(0,5),i.lineTo(8,5),i.stroke();break;case 8:i.beginPath(),i.moveTo(-15,-5),i.quadraticCurveTo(-9,-11,-3,-5),i.quadraticCurveTo(3,1,9,-5),i.quadraticCurveTo(13,-8,16,-5),i.lineTo(13,10),i.lineTo(-13,10),i.closePath(),c(),i.beginPath(),i.moveTo(-12,3),i.quadraticCurveTo(-5,-1,1,3),i.quadraticCurveTo(7,7,13,3),i.stroke();break;case 9:i.beginPath(),i.moveTo(-13,4),i.lineTo(-8,-7),i.lineTo(7,-7),i.lineTo(14,4),i.lineTo(14,10),i.lineTo(-13,10),i.closePath(),c(),i.fillStyle="#5e442f",i.beginPath(),i.arc(-8,10,3,0,Math.PI*2),i.arc(9,10,3,0,Math.PI*2),i.fill();break;case 10:i.beginPath(),i.ellipse(-3,-5,10,13,-.2,0,Math.PI*2),c(),i.beginPath(),i.moveTo(4,5),i.lineTo(13,16),i.stroke();break;default:i.beginPath(),i.moveTo(-13,-3),i.lineTo(13,-3),i.lineTo(9,12),i.lineTo(-9,12),i.closePath(),c(),i.beginPath(),i.arc(-5,-8,4,Math.PI,0),i.arc(5,-8,4,Math.PI,0),i.stroke();break}return i.shadowColor="transparent",i.fillStyle="#fff5bd",i.beginPath(),i.arc(14,-13,1.7,0,Math.PI*2),i.fill(),i.restore(),t}function TT(s,t){const i=document.createElement("canvas");i.width=i.height=40,i.className="scene-cursor",i.hidden=!0,i.setAttribute("aria-hidden","true"),document.body.appendChild(i);const r=i.getContext("2d"),l=new Map,c=new Image;let h=!1,d=null,m=null,p=!1,g=null,x="",v=null;function S(_){m={x:_.clientX,y:_.clientY};const L=`translate3d(${m.x-20}px,${m.y-20}px,0) scale(${p?.9:1})`;L!==x&&(i.style.transform=L,x=L)}function E(_){if(l.has(_))return l.get(_);const L=/^prop-(\d+)$/.exec(_||"");if(!L)return null;const C=ET(Number(L[1]));return l.set(_,C),C}function R(){if(h||!d||!m)return;const _=E(d);if(!(v===d&&_&&g===d&&!i.hidden)){if(!_){i.hidden=!0,delete s.dataset.customCursor,s.style.cursor=d==="grab"?"grab":d==="grabbing"?"grabbing":"crosshair",delete document.documentElement.dataset.pocketCursor,s.closest(".sky-play").dataset.cursorState=d;return}g!==d&&(r.clearRect(0,0,40,40),r.drawImage(_,0,0),g=d),i.hidden=!1,document.documentElement.dataset.pocketCursor!=="active"&&(document.documentElement.dataset.pocketCursor="active"),s.dataset.customCursor=d,s.style.cursor="none",s.closest(".sky-play").dataset.cursorState=d,v=d}}function M(){!d&&i.hidden||(delete document.documentElement.dataset.pocketCursor,d=v=null,i.hidden=!0,delete s.dataset.customCursor,delete s.closest(".sky-play").dataset.cursorState,s.style.removeProperty("cursor"))}return c.onload=()=>{if(h)return;["eraser","head","body","pocket","left","right"].forEach((L,C)=>{const N=document.createElement("canvas");N.width=N.height=128;const z=N.getContext("2d");z.drawImage(c,C%3*c.width/3,Math.floor(C/3)*c.height/2,c.width/3,c.height/2,0,0,128,128);const U=z.getImageData(0,0,128,128);let O=128,et=128,D=-1,w=-1;for(let lt=0;lt<U.data.length;lt+=4){if(U.data[lt+3]<220){U.data[lt+3]=0;continue}const F=lt/4%128,$=Math.floor(lt/4/128);O=Math.min(O,F),D=Math.max(D,F),et=Math.min(et,$),w=Math.max(w,$)}z.putImageData(U,0,0);const V=D-O+1,j=w-et+1;if(V<=0||j<=0)return;const st=document.createElement("canvas");st.width=st.height=40;const dt=36/Math.max(V,j);st.getContext("2d").drawImage(N,O,et,V,j,(40-V*dt)/2,(40-j*dt)/2,V*dt,j*dt),l.set(L,st)}),l.set("grab",Pg(!1)),l.set("grabbing",Pg(!0));const _=["eraser","head","body","pocket","left","right","grab","grabbing"];s.closest(".sky-play").dataset.cursors=_.every(L=>l.has(L))?"ready":"failed",R()},c.onerror=()=>{h||(s.closest(".sky-play").dataset.cursors="failed")},c.src=t,{move:S,show(_,L,C=!1){d=_,p=C,S(L),R()},hide:M,dispose(){h=!0,c.onload=c.onerror=null,M(),i.remove(),l.clear()}}}const Dn=Object.freeze({NONE:0,BODY:1,HEAD:2,POCKET:3,LEFT:4,RIGHT:5}),zg=Object.freeze({[Dn.HEAD]:"head",[Dn.POCKET]:"pocket",[Dn.LEFT]:"left",[Dn.RIGHT]:"right",[Dn.BODY]:"body"}),Ig=new WeakMap,Ed=28,Fg=s=>Math.max(0,Math.min(1,s));function Bg(s,t){return s[t+3]>=Ed}function AT(s,t,i,r,l){return r>.48&&r<.94&&l>.34&&l<.82&&s>150&&s>t*1.48&&t<150&&i<135}function RT(s,t,i,r){return r>.74&&t>s*.9&&t>i*1.18&&s<180&&i<145}function CT(s,t,i,r,l){if(l>.5||r<.14||r>.88)return!1;const c=t>s*.84&&t>i*1.12&&s<205,h=s>t*1.02&&t>i*1.28&&s>115;return c||h&&r>.22&&r<.82}function wT(s,t){if(s.length<12)return null;let i=t,r=-1;for(const d of s){const m=d%t;i=Math.min(i,m),r=Math.max(r,m)}if(r-i<70)return null;let l=i+(r-i)*.3,c=i+(r-i)*.7;for(let d=0;d<8;d++){let m=0,p=0,g=0,x=0;for(const v of s){const S=v%t;Math.abs(S-l)<=Math.abs(S-c)?(m+=S,p++):(g+=S,x++)}if(!p||!x)return null;l=m/p,c=g/x}if(Math.abs(c-l)<8)return null;const h=[[],[]];for(const d of s){const m=d%t;h[Math.abs(m-l)<=Math.abs(m-c)?0:1].push(d)}return h.some(d=>d.length<4)?null:[{members:h[0],cx:l},{members:h[1],cx:c}]}function DT(s){const t=s==null?void 0:s.image;if(!(t!=null&&t.width)||!(t!=null&&t.height)||typeof t.getContext!="function")return null;const i=t.getContext("2d");if(!(i!=null&&i.getImageData))return null;const{width:r,height:l}=t,c=i.getImageData(0,0,r,l).data,h=r*l;let d=r,m=l,p=-1,g=-1;for(let z=0;z<h;z++){const U=z*4;if(!Bg(c,U))continue;const O=z%r,et=Math.floor(z/r);d=Math.min(d,O),p=Math.max(p,O),m=Math.min(m,et),g=Math.max(g,et)}if(p<0)return{width:r,height:l,alpha:new Uint8Array(h),mask:new Uint8Array(h),bounds:null};const x=Math.max(1,p-d+1),v=Math.max(1,g-m+1),S=new Uint8Array(h),E=new Uint8Array(h),R=new Uint8Array(h),M=new Uint8Array(h);for(let z=0;z<h;z++){const U=z*4;if(!Bg(c,U))continue;S[z]=c[U+3];const O=z%r,et=Math.floor(z/r),D=(O-d)/x,w=(et-m)/v,[V,j,st]=c.subarray(U,U+3);E[z]=Dn.BODY,CT(V,j,st,D,w)&&(E[z]=Dn.HEAD),AT(V,j,st,D,w)&&(R[z]=1,E[z]=Dn.POCKET),RT(V,j,st,w)&&(M[z]=1)}for(let z=0;z<2;z++){for(let U=m;U<=g;U++){let O=r,et=-1;for(let D=d;D<=p;D++)E[U*r+D]===Dn.HEAD&&(O=Math.min(O,D),et=D);for(let D=O;D<=et;D++){const w=U*r+D;S[w]&&E[w]===Dn.BODY&&(E[w]=Dn.HEAD)}}for(let U=d;U<=p;U++){let O=l,et=-1;for(let D=m;D<=g;D++)E[D*r+U]===Dn.HEAD&&(O=Math.min(O,D),et=D);for(let D=O;D<=et;D++){const w=D*r+U;S[w]&&E[w]===Dn.BODY&&(E[w]=Dn.HEAD)}}}const _=new Uint8Array(h),L=[];for(let z=0;z<h;z++){if(!M[z]||_[z])continue;const U=[z];_[z]=1;const O=[];let et=0,D=0,w=r,V=l,j=-1,st=-1;for(let dt=0;dt<U.length;dt++){const lt=U[dt],F=lt%r,$=Math.floor(lt/r);O.push(lt),et+=F,D+=$,w=Math.min(w,F),j=Math.max(j,F),V=Math.min(V,$),st=Math.max(st,$);for(let K=-1;K<=1;K++)for(let _t=-1;_t<=1;_t++){if(!_t&&!K)continue;const Mt=F+_t,I=$+K;if(Mt<0||Mt>=r||I<0||I>=l)continue;const rt=I*r+Mt;M[rt]&&!_[rt]&&(_[rt]=1,U.push(rt))}}O.length>=4&&L.push({members:O,cx:et/O.length,cy:D/O.length,minX:w,minY:V,maxX:j,maxY:st})}L.sort((z,U)=>U.members.length-z.members.length);let N=L.filter(z=>z.members.length>=200&&z.maxY-z.minY>=10).slice(0,2).sort((z,U)=>z.cx-U.cx);if(N.length===1){const z=wT(N[0].members,r);z&&(N=z.sort((U,O)=>U.cx-O.cx))}if(N.length===2)N[0].members.forEach(z=>{E[z]=Dn.LEFT}),N[1].members.forEach(z=>{E[z]=Dn.RIGHT});else if(N.length===1){const z=N[0].cx<(d+p)/2?Dn.LEFT:Dn.RIGHT;N[0].members.forEach(U=>{E[U]=z})}return{width:r,height:l,alpha:S,mask:E,bounds:{minX:d,minY:m,maxX:p,maxY:g}}}function UT(s){if(!s)return null;let t=Ig.get(s);return t||(t=DT(s),t&&Ig.set(s,t)),t}function LT(s,t,i=1,r=null){var v;const l=UT(s);if(!(l!=null&&l.bounds)||!t||!Number.isFinite(t.x)||!Number.isFinite(t.y))return null;const c=Fg(i<0?1-t.x:t.x),h=Fg(1-t.y),d=Math.min(l.width-1,Math.max(0,Math.floor(c*l.width))),m=Math.min(l.height-1,Math.max(0,Math.floor(h*l.height))),p=m*l.width+d;if(l.alpha[p]<Ed)return null;const g=(v=Object.entries(zg).find(([,S])=>S===r))==null?void 0:v[0],x=Math.max(1,Math.round(Math.min(l.width,l.height)*.009));if(g&&l.mask[p]!==Number(g))for(let S=-x;S<=x;S++)for(let E=-x;E<=x;E++){if(E*E+S*S>x*x)continue;const R=d+E,M=m+S;if(R<0||M<0||R>=l.width||M>=l.height||l.mask[M*l.width+R]!==Number(g))continue;let _=!0;const L=Math.max(Math.abs(E),Math.abs(S));for(let C=1;C<=L;C++)if(l.alpha[(m+Math.round(S*C/L))*l.width+d+Math.round(E*C/L)]<Ed){_=!1;break}if(_)return r}return zg[l.mask[p]]||"body"}const NT=(s,t,i)=>Math.max(t,Math.min(i,s)),Lh=[{name:"underhand",duration:.8,lift:.35,speed:2.8,up:2.4,spin:1.8},{name:"overhead",duration:1.05,lift:1.05,speed:3.7,up:3.6,spin:-3},{name:"sideways",duration:.65,lift:.5,speed:5,up:1.6,spin:4},{name:"double-take",duration:1.2,lift:.65,speed:2.1,up:3.1,spin:-1.5}];function OT(s,t,{floor:i,bounds:r,held:l}){const c=Math.max(1,Math.ceil(t/.008333333333333333)),h=t/c;for(let d=0;d<c;d++){for(const m of s){if(m===l||m.pull)continue;const p=m.fall??(m.fall={vx:0,vy:0,spin:0});p.vy-=7*h,m.home.x+=p.vx*h,m.home.y+=p.vy*h;const[g,x]=r(m),v=m.radius;(m.home.x<g+v||m.home.x>x-v)&&(m.home.x=NT(m.home.x,g+v,x-v),p.vx*=-.62,p.spin*=-.6);const S=i(m);m.home.y<S&&(m.home.y=S,p.vy=Math.abs(p.vy)>.45?-p.vy*.42:0,p.vx*=Math.exp(-3.2*h),p.spin*=Math.exp(-5*h)),p.vx*=Math.exp(-.15*h),m.angle=(m.angle||0)+(p.spin||0)*h}for(let m=0;m<s.length;m++)for(let p=m+1;p<s.length;p++){const g=s[m],x=s[p];if(g.pull||x.pull)continue;const v=x.home.x-g.home.x,S=x.home.y-g.home.y,E=Math.hypot(v,S),R=g.radius+x.radius;if(E>=R)continue;const M=E>1e-4?v/E:1,_=E>1e-4?S/E:0,L=g===l?0:1,C=x===l?0:1,N=L+C;if(!N)continue;const z=R-E;g.home.x-=M*z*L/N,g.home.y-=_*z*L/N,x.home.x+=M*z*C/N,x.home.y+=_*z*C/N;const U=g.fall??(g.fall={vx:0,vy:0,spin:0}),O=x.fall??(x.fall={vx:0,vy:0,spin:0}),et=(O.vx-U.vx)*M+(O.vy-U.vy)*_;if(et<0){const D=-1.5*et/N;U.vx-=D*M*L,U.vy-=D*_*L,O.vx+=D*M*C,O.vy+=D*_*C,U.spin-=D*.35,O.spin+=D*.35}}}}function PT({render:s,fast:t,running:i,raf:r=requestAnimationFrame,cancel:l=cancelAnimationFrame,now:c=()=>performance.now(),delay:h=setTimeout,clear:d=clearTimeout}){let m=0,p=0,g=null,x=0,v=!1;function S(){l(m),d(p),m=p=0,g=null,x=0}function E(M){if(m=0,v||!i()){S();return}const _=g===null?0:Math.min(.1,Math.max(0,(M-g)/1e3));g=M,x=M+1e3/30,s(M,_)!==!1?R():S()}function R(){if(v||!i())return;const M=t();if(M&&p&&(d(p),p=0),m||p)return;const _=M?0:Math.max(0,x-c()-8);_>1?p=h(()=>{p=0,!v&&i()&&(m=r(E))},_):m=r(E)}return{wake:R,stop:S,dispose(){v=!0,S()}}}const Hg=[[.22,.43,.16,.1,10,1.2,.43],[.46,.5,.13,.17,13,4.1,.4],[.75,.42,.16,.11,11,2.8,.44],[.32,.59,.12,.13,10,1.2+Math.PI,.38],[.57,.59,.15,.13,13,4.1+Math.PI,.4],[.8,.57,.12,.14,11,2.8+Math.PI,.37]];function zT(s,t){const i=t*Math.PI*2/s[4]+s[5];return{alpha:.035+s[6]*Math.pow((1+Math.sin(i))/2,1.5),x:Math.sin(i*.71)*.018,y:Math.cos(i*.83)*.014}}function IT(s,t,i){const r=s.getContext("2d"),l=new Image;let c=0,h=0,d=[],m=!1,p=-1,g=-1;function x(v,S){if(v===c&&S===h&&d.length)return;c=v,h=S;const E=Math.min(.65,800/v);if(s.width=Math.max(1,Math.round(v*E)),s.height=Math.max(1,Math.round(S*E*.75)),d=[],p=-1,!l.naturalWidth)return;const R=Math.max(v/l.width,S/l.height),M=l.width*R,_=l.height*R;for(const L of Hg){const C=Math.ceil(v*L[2]*2*E),N=Math.ceil(S*L[3]*2*E),z=document.createElement("canvas");z.width=C,z.height=N;const U=z.getContext("2d"),O=v*(L[0]-L[2]),et=S*(L[1]-L[3]);U.filter="blur(2px) saturate(.96)",U.drawImage(l,((v-M)/2-O)*E,((S-_)/2-et)*E,M*E,_*E),U.filter="none",U.globalCompositeOperation="destination-in";const D=document.createElement("canvas");D.width=C,D.height=N;const w=D.getContext("2d");for(const[V,j,st,dt]of[[.45,.56,.49,.43],[.7,.31,.29,.31]]){w.save(),w.translate(C*V,N*j),w.scale(C*st,N*dt);const lt=w.createRadialGradient(0,0,.18,0,0,1);lt.addColorStop(0,"#fff"),lt.addColorStop(.55,"#fffd"),lt.addColorStop(1,"#fff0"),w.fillStyle=lt,w.fillRect(-1,-1,2,2),w.restore()}U.drawImage(D,0,0),d.push({tile:z,left:O*E,top:et*E})}}return l.onload=()=>{m||(x(c,h),i())},l.src=t,{resize:x,render(v,S=!1,E=null,R=0){v=S?0:v,!(v===p&&R===g)&&(p=v,g=R,r.clearRect(0,0,s.width,s.height),d.forEach(({tile:M,left:_,top:L},C)=>{const N=zT(Hg[C],v);r.globalAlpha=N.alpha,r.drawImage(M,_+N.x*s.width,L+N.y*s.height)}),r.globalAlpha=1,E&&(r.globalCompositeOperation="destination-in",r.drawImage(E,0,0,E.width,E.height*.75,0,0,s.width,s.height),r.globalCompositeOperation="source-over"))},dispose(){m=!0,l.onload=null,d=[]}}}function FT(s,t,i,r,l){const c=document.createElement("canvas"),h=new Image;let d=[],m=!0,p=!1,g=!1,x=!1,v=null,S=0,E=0;function R(C){const N=v;v=C,t.style.maskImage=C?`url("${C}")`:"none",N&&URL.revokeObjectURL(N)}function M(C,N){if(C=Math.max(1,Math.round(C)),N=Math.max(1,Math.round(N)),s.width===C&&s.height===N&&c.width===Math.ceil(C/3))return;const z=document.createElement("canvas");z.width=c.width,z.height=c.height,c.width&&c.height&&z.getContext("2d").drawImage(c,0,0),s.width=C,s.height=N,c.width=Math.ceil(C/3),c.height=Math.ceil(N/3);const U=c.getContext("2d");U.fillStyle="#fff",U.fillRect(0,0,c.width,c.height),i.dataset.revealed==="true"&&(U.clearRect(0,0,c.width,c.height),U.drawImage(z,0,0,c.width,c.height),p=!0),m=!0,E++}function _(){S++,E++,d=[];const C=c.getContext("2d");C.globalCompositeOperation="source-over",C.fillStyle="#fff",C.fillRect(0,0,c.width,c.height),R(null),i.dataset.revealed="false",m=!0,p=!1,l()}function L(){if(!x){if(d.length){const C=c.getContext("2d");C.globalCompositeOperation="destination-out";for(const N of d){C.save(),C.scale(c.width,c.height),C.translate(N.x,N.y),C.scale(65/s.width,65/s.height);const z=C.createRadialGradient(0,0,.55,0,0,1);z.addColorStop(0,"#000"),z.addColorStop(1,"#0000"),C.fillStyle=z,C.fillRect(-1,-1,2,2),C.restore()}d=[],m=p=!0,E++,i.dataset.revealed="true"}if(m&&h.naturalWidth){const C=s.getContext("2d");C.globalCompositeOperation="source-over",C.clearRect(0,0,s.width,s.height),C.drawImage(h,0,0,h.width,h.height*.69,0,0,s.width,s.height),C.globalCompositeOperation="destination-in",C.drawImage(c,0,0,s.width,s.height),C.globalCompositeOperation="source-over",m=!1}if(p&&!g){g=!0,p=!1;const C=S;c.toBlob(N=>{g=!1,!x&&(N&&C===S&&R(URL.createObjectURL(N)),p&&l())})}}}return h.onload=()=>{x||(m=!0,l())},h.src=r,{resize:M,reset:_,flush:L,get mask(){return c},get revision(){return E},erase(C){const N=s.getBoundingClientRect();d.push({x:(C.clientX-N.left)/N.width,y:(C.clientY-N.top)/N.height}),l()},reveal(){S++,E++,d=[],c.getContext("2d").clearRect(0,0,c.width,c.height),i.dataset.revealed="true",m=p=!0,l()},dispose(){x=!0,h.onload=null,v&&URL.revokeObjectURL(v),d=[]}}}function BT(s,t,i,r,l){s.setFromCamera(t,i);const c=r.filter(d=>d.mesh.visible),h=new Map(c.map(d=>[d.mesh,d]));for(const d of s.intersectObjects(c.map(m=>m.mesh),!1)){const m=h.get(d.object);if(m&&d.uv&&l(m,d.uv))return d}return null}const Nh=[{name:["Little snake","小蛇"],rect:[18,50,400,439],x:0,y:0,size:2.3,z:.5},{name:["A350","A350"],rect:[396,137,507,273],x:-3.4,y:1.6,size:2.5,z:-.5},{name:["Coding","写代码"],rect:[880,164,366,322],x:3.1,y:1.1,size:2,z:0},{name:["Basque cheesecake","巴斯克蛋糕"],rect:[45,548,357,299],x:-2.7,y:-1.6,size:1.45,z:.4},{name:["Formula 1","F1 赛车"],rect:[468,523,368,332],x:3,y:-1.7,size:1.5,z:.2},{name:["Badminton","羽毛球"],rect:[896,537,309,307],x:-4.1,y:-.25,size:1.15,z:1},{name:["Mount Fuji","富士山"],rect:[15,944,457,232],x:-1.7,y:2.35,size:1.3,z:-1},{name:["Terminal","终端"],rect:[514,935,265,249],x:3.95,y:2.35,size:.7,z:-.8},{name:["Lake days","湖边时光"],rect:[835,911,407,306],x:1.5,y:-2.2,size:1.2,z:-.6}],x_=s=>Math.max(0,Math.min(1,s)),Yn=(s,t,i)=>{let r=x_((i-s)/(t-s));return r*r*(3-2*r)},g_=`
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float field(vec2 p){return .12+(1.-p.y)*.46+sin(p.x*12.+p.y*8.)*.055+hash(floor(p*700.))*.18;}
`,HT=`
varying vec2 vUv; uniform float time; uniform float snake;
void main(){vUv=uv;vec3 p=position;
p.x+=sin(uv.y*7.+time*1.8)*.055*snake*(1.-uv.y);
gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}
`,GT=`
uniform float edgeDepth;uniform sampler2D map;uniform vec4 crop;uniform float dissolve;uniform float outfit;uniform float facing;
varying vec2 vUv;
${g_}
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
`;function VT({lang:s,onWork:t}){const i=dn.useRef(null),r=dn.useRef(null),l=dn.useRef(null),c=dn.useRef(null),h=dn.useRef(null),[d,m]=dn.useState(!1),[p,g]=dn.useState(!1),[x,v]=dn.useState(""),[S,E]=dn.useState(!1),R=dn.useRef(s);R.current=s;const M=dn.useRef({hint:x,inventory:S});return M.current={hint:x,inventory:S},dn.useEffect(()=>{let _=!1,L,C=null,N=null;const z=matchMedia("(prefers-reduced-motion: reduce)");let U=z.matches,O=0,et=!0,D=!0;const w=J=>{M.current.hint!==J&&(M.current.hint=J,v(J))},V=J=>{M.current.inventory!==J&&(M.current.inventory=J,E(J))},j=r.current;let st=j.getBoundingClientRect();const dt=TT(j,Ma.cursors);try{L=new pT({alpha:!0,antialias:!0})}catch{dt.dispose(),m(!0);return}L.setPixelRatio(Math.min(devicePixelRatio,1.25)),L.setClearColor(0,0),j.appendChild(L.domElement);const lt=new c1,F=new Ri(40,1,.1,100);lt.add(new M1(16775399,10193232,2.3));const $=new T1(16773842,2);$.position.set(-4,7,5),lt.add($);const K=new mi(new Hd(7,96,64),new m1({color:15391904,roughness:.95,transparent:!0}));K.position.set(0,-8.6,-1.6),K.visible=!1,lt.add(K);const _t=.7;function Mt(J,pt=_t){const St=st,b=new ht((J.clientX-St.left)/St.width*2-1,-(J.clientY-St.top)/St.height*2+1,.5).unproject(F).sub(F.position).normalize();return F.position.clone().addScaledVector(b,(pt-F.position.z)/b.z)}function I(J){const pt=st,St=new ht(J,0,_t).project(F),Ot=Vn.clamp(St.x/1.3,-1,1),b=pt.top+pt.height*(.75+.08*(1-Math.sqrt(1-Ot*Ot)));return Mt({clientX:pt.left+(St.x+1)*pt.width/2,clientY:b}).y}function rt(J){const pt=st,St=Math.max(24,pt.width*.035);return[Mt({clientX:pt.left+St,clientY:pt.top+pt.height*.75}).x,Mt({clientX:pt.right-St,clientY:pt.top+pt.height*.75}).x]}const Tt=J=>I(J.home.x)+J.radius*.72-(J.lane||0);F.position.z=10;const Nt=new R1,kt=new Ue(9,9),Q=[],ut=new Ue,Ft=new Ue,Xt=FT(c.current,i.current.querySelector(".sky-play__editorial"),i.current,Ma.sky,ge),ee=IT(h.current,Ma.hiddenSky,ge),Se=()=>Xt.reset(),an=J=>Xt.erase(J);let xt=null,Le=0,B=0,ye,xe,Ae,jt=0,qe=!0;const ae=PT({render:An,fast:()=>!!xt||performance.now()<Le||Math.abs(T-P)>.015||Q.some(J=>{var pt,St,Ot;return J.pull||Math.abs(((pt=J.fall)==null?void 0:pt.vx)||0)>.02||Math.abs(((St=J.fall)==null?void 0:St.vy)||0)>.02||Math.abs(((Ot=J.fall)==null?void 0:Ot.spin)||0)>.02}),running:()=>!_&&et&&D});let Zt={x:0,y:0,vx:0,vy:0,angle:0,angular:0},P=0,T=0,nt=0,gt=0,Ct=1,ct=-10,te=0,zt="idle",Jt=Lh[0];const ne=[{name:"stroll",fps:16,bob:.035,sway:.012},{name:"bouncy",fps:20,bob:.11,sway:.035},{name:"tiptoe",fps:13,bob:.055,sway:.025}];let At=0,Ut=0;const ie=[],Kt=[],qt={left:["Go left","向左走"],right:["Go right","向右走"],head:["Change mood","换个表情"],body:["Change outfit","换件衣服"],pocket:["A little surprise","掏出口袋里的惊喜"]};function he(J){var St;if(O>.1||!Q.length||J==="pocket"&&zt==="pocket"&&B-ct<Jt.duration&&!U)return;const pt=F.aspect<.85?1.05:3.1;if((J==="left"||J==="right")&&(At=(At+1+Math.floor(Math.random()*2))%ne.length,Ut=B,i.current.dataset.walkStyle=ne[At].name,T=Vn.clamp(T+(J==="left"?-.85:.85),-pt,pt),Ct=J==="left"?-1:1,U&&(P=T)),J==="head"&&(nt=(nt+1)%4,zt="mood",ct=B),J==="body"&&(gt=(gt+1)%7,zt="outfit",ct=B),J==="pocket"){const Ot=Q.slice(1).filter(Z=>!Z.released);if(!Ot.length){w(R.current==="zh"?"口袋空啦，试试把地上的小物件抛起来。":"All out! Pick up a keepsake and give it a toss.");return}ct=B,zt="pocket";const b=Lh.filter(Z=>Z!==Jt);Jt=b[Math.floor(Math.random()*b.length)]||Lh[0];const H=Ot[0],W=te%2?1:-1;if(te++,H.released=!0,H.home.set(P+W*.2,I(P)+1,_t),H.lane=te%3*.11,H.angle=0,H.fall=null,H.pull={start:B,side:W,style:Jt},H.mesh.scale.setScalar(H.baseScale*.08),H.offset.set(0,0),H.velocity.set(0,0),i.current.dataset.throwStyle=Jt.name,U){const[Z,q]=rt();H.pull=null,H.home.x=Z+(q-Z)*(te*.618%1),H.home.y=Tt(H),H.fall={vx:0,vy:0,spin:0}}}i.current.dataset.mood=String(nt),i.current.dataset.outfit=String(gt),i.current.dataset.drops=String(te),w(((St=qt[J])==null?void 0:St[R.current==="zh"?1:0])||""),Le=performance.now()+1200,ge()}const k=document.createElement("canvas");k.width=k.height=64;const Ht=k.getContext("2d"),Pt=Ht.createRadialGradient(32,32,0,32,32,32);Pt.addColorStop(0,"#342336"),Pt.addColorStop(1,"#34233600"),Ht.fillStyle=Pt,Ht.fillRect(0,0,64,64);const It=new Ho(k);function Dt(J){if(!J.shadow){J.edges=[];for(let pt=1;pt<=4;pt++){const St=J.mesh.material.clone();St.uniforms=J.mesh.material.uniforms,St.uniforms={...St.uniforms,edgeDepth:{value:1}};const Ot=new mi(J.mesh.geometry,St);Ot.position.set(.006*pt,-.004*pt,-.015*pt),Ot.renderOrder=-pt,J.mesh.add(Ot),J.edges.push(Ot)}J.shadow=new mi(new zr(1,1),new Fd({map:It,transparent:!0,depthWrite:!1,opacity:.25})),lt.add(J.shadow)}}const vt=new Ue,Wt=()=>{const J=st=j.getBoundingClientRect();if(!J.width||!J.height)return;const pt=vt.x!==J.width||vt.y!==J.height;vt.set(J.width,J.height),pt&&L.setSize(J.width,J.height),F.aspect=J.width/J.height,F.updateProjectionMatrix(),Xt.resize(J.width,J.height),ee.resize(J.width,J.height);const St=F.aspect<.85;F.position.z=St?13:10,Q.forEach((Ot,b)=>{const H=Ot.definition||Nh[b];Ot.released||Ot.home.set(St?H.x*.34:H.x,St?H.y*1.25:H.y,H.z);const W=b===0?St?2.8:3.4:H.size*(St?.3:.43);Ot.baseScale=W,Ot.radius=W*Math.min(1,H.rect[3]/H.rect[2])*.4,Ot.mesh.scale.set(W,W*H.rect[3]/H.rect[2],1)}),de(),ge()},de=()=>{qe=!0,ge()};function Ye(){qe=!1;const J=i.current.getBoundingClientRect();O=U?0:x_(-J.top/Math.max(1,i.current.offsetHeight-innerHeight));const pt=Yn(.18,.8,O);i.current.style.setProperty("--sky-fade",String(pt)),i.current.style.setProperty("--sky-blur",`${Yn(.15,.75,O)*7}px`),i.current.style.setProperty("--type-exit",Yn(.08,.5,O)),i.current.style.setProperty("--work-show",String(Yn(.62,.94,O))),i.current.style.setProperty("--ground-rise",`${Yn(.04,.85,O)*110}svh`),i.current.style.setProperty("--ground-fade",String(Yn(.5,.86,O))),i.current.style.setProperty("--control-fade",String(Yn(.04,.28,O)));for(const St of i.current.querySelectorAll(".sky-play__actions,.sky-play__controls"))St.inert=O>.28;i.current.dataset.progress=O.toFixed(3),j.inert=O>.8,j.style.pointerEvents=O>.8?"none":"auto",O>.1&&(dt.hide(),w(""),V(!1)),O>.1&&xt&&qn()}function ge(){ae.wake()}function An(J,pt){if(_)return!1;st=j.getBoundingClientRect(),qe&&Ye(),U||(B+=pt),Xt.flush(),ee.render(B,U,Xt.mask,Xt.revision),Ft.lerp(ut,1-Math.exp(-pt*5));const St=F.aspect<.85?13:10,Ot=U?0:Ft.x*.16*(1-Yn(.1,.65,O)),b=U?0:Ft.y*.09*(1-Yn(.1,.65,O));F.position.set(Math.sin(Ot)*St,Math.sin(b)*St,Math.cos(Ot)*Math.cos(b)*St),F.lookAt(0,0,0),F.updateMatrixWorld();const H=Yn(.04,.85,O),W=Yn(.12,.63,O);K.material.opacity=1-Yn(.22,.86,O);const Z=(xt==null?void 0:xt.object)===Q[0],q=!Z&&Math.abs(T-P)>.015;P=Vn.damp(P,T,3,pt);const Et=U?0:Math.max(0,1-(B-ct)/.65),wt=Q.slice(1).filter(Y=>Y.released);if(O<.1&&!U)for(jt+=pt;jt+1e-12>=1/120;)OT(wt,1/120,{floor:Tt,bounds:rt,held:xt==null?void 0:xt.object}),jt-=1/120;else jt=0;return Q.forEach((Y,Rt)=>{var De;if(Y.mesh.visible=Rt===0?ie.length===12:!!Y.released,Rt>0&&!Y.released){Y.points.visible=!1;return}let Gt=1;if(Y.pull){const{style:re,side:He}=Y.pull,mn=(B-Y.pull.start)/re.duration;Gt=.08+.92*Yn(.1,.82,mn);const pe=re.name==="double-take"?Math.sin(mn*Math.PI*3)*.12:0;Y.home.set(P+He*(.16+Yn(.18,1,mn)*.5),I(P)+1+Yn(.1,.85,mn)*re.lift+pe,_t),Y.angle=He*Math.sin(mn*Math.PI)*.35,mn>=1&&(Y.fall={vx:He*re.speed,vy:re.up,spin:He*re.spin},Y.pull=null)}if(Rt===0&&(xt==null?void 0:xt.object)!==Y&&!Y.held&&(Y.velocity.addScaledVector(Y.offset,-90*pt).multiplyScalar(Math.exp(-12*pt)),Y.offset.addScaledVector(Y.velocity,pt)),Rt===0)if((xt==null?void 0:xt.object)===Y){const re=F.aspect<.85?1.05:3.1;P=Vn.clamp(Zt.x,-re,re),T=P,Y.home.x=Zt.x,Y.home.y=Zt.y,Y.home.z=.5}else Y.home.x=P,Y.home.y=I(P)+Y.baseScale*.9*.48,Y.home.z=.5,Zt.y=Y.home.y,Zt.angle=Vn.damp(Zt.angle,0,8,pt);const Bt=0,Lt=ne[At],le=(B-Ut)*Lt.fps/16*Math.PI*2,oe=Rt===0&&!U&&!Z?(q?Math.abs(Math.sin(le))*Lt.bob:Math.sin(B*2)*.012)+Math.sin(Et*Math.PI)*.15:0,ve=2*Math.tan(Vn.degToRad(20))*(St-Y.home.z);if(Y.mesh.position.set(Y.home.x+Y.offset.x+Bt,Y.home.y+Y.offset.y+oe+H*ve*1.1,Y.home.z),Y.mesh.rotation.z=Rt===0?-P*.065+((xt==null?void 0:xt.object)===Y?Zt.angle:Math.sin(B*2)*.012):Y.angle||0,Rt===0){if(Y.mesh.rotation.y=0,zt==="pocket"){const re=(B-ct)/Jt.duration;Y.mesh.rotation.z+=Math.sin(Math.min(1,re)*Math.PI)*(Jt.name==="sideways"?.12:Jt.name==="overhead"?-.09:.05)}if(Y.mesh.material.uniforms.facing.value=Ct,Y.mesh.material.uniforms.outfit.value=gt,ie.length===12){const re=U?nt:zt==="pocket"&&B-ct<Jt.duration+.25?8+Math.min(3,Math.floor((B-ct)/Jt.duration*4)):q?4+Math.floor(B*7)%4:nt;Y.mesh.material.uniforms.map.value=Z?xt.pose:q&&Kt.length===16&&!U&&zt!=="pocket"?Kt[Math.floor((B-Ut)*Lt.fps)%16]:ie[re],q&&(Y.mesh.rotation.z+=Math.sin(le)*Lt.sway),zt==="pocket"&&B-ct>Jt.duration+.25&&(zt="idle")}}const ce=Rt===0&&!U&&!Z?1+Math.sin(Et*Math.PI*2)*.035:1,_e=Y.baseScale*Gt*ce*((xt==null?void 0:xt.object)===Y?1.035:1);if(Y.mesh.scale.x=Vn.damp(Y.mesh.scale.x,_e,9,pt),Y.mesh.scale.y=Y.mesh.scale.x*(Rt===0?.9:Y.rect[3]/Y.rect[2]),Rt>0){Y.mesh.rotation.y=Vn.damp(Y.mesh.rotation.y,(xt==null?void 0:xt.object)===Y?-.18:(((De=Y.fall)==null?void 0:De.vx)||0)*.035,8,pt),Dt(Y);const re=Math.max(0,Y.home.y-Tt(Y));Y.shadow.visible=Y.mesh.visible&&O<.8,Y.shadow.position.set(Y.home.x,I(Y.home.x)-(Y.lane||0)+H*ve*1.1,_t-.12),Y.shadow.scale.set(Y.baseScale*(1+re*.25),Y.baseScale*.17,1),Y.shadow.material.opacity=(1-W)*.25/(1+re*1.8)}Y.mesh.material.uniforms.time.value=B;const Qt=W;Y.mesh.material.uniforms.dissolve.value=Qt,Y.points.material.uniforms.dissolve.value=Qt,Y.points.position.copy(Y.mesh.position),Y.points.scale.copy(Y.mesh.scale),Y.points.rotation.copy(Y.mesh.rotation),Y.points.visible=Rt>0&&Qt>0&&Qt<1}),L.render(lt,F),C&&!xt&&O<.1&&Qn(C,!0),O<.8&&(!U||!!xt||Ft.distanceTo(ut)>.002)}function Fn(J){const pt=st=j.getBoundingClientRect();kt.set((J.clientX-pt.left)/pt.width*2-1,-(J.clientY-pt.top)/pt.height*2+1)}function cr(){return BT(Nt,kt,F,Q,(pt,St)=>{if(pt===Q[0])return Ca(St)!==null;if(pt.hitPixels){const W=Math.min(pt.hitWidth-1,Math.floor(St.x*pt.hitWidth)),Z=Math.min(pt.hitHeight-1,Math.floor((1-St.y)*pt.hitHeight));return pt.hitPixels[(Z*pt.hitWidth+W)*4+3]>90}const Ot=pt.rect,b=Math.min(1253,Math.floor(Ot[0]+St.x*Ot[2])),H=Math.min(1253,Math.floor(Ot[1]+(1-St.y)*Ot[3]));return(xe==null?void 0:xe[(H*1254+b)*4+3])>90&&(Ae==null?void 0:Ae[H*1254+b])===pt.owner})}function Ca(J){var St;const pt=(St=Q[0])==null?void 0:St.mesh.material.uniforms;return LT(pt==null?void 0:pt.map.value,J,pt==null?void 0:pt.facing.value,(N==null?void 0:N.kind)==="mascot"?N.action:null)}function wa(J){if(!J)return null;const pt=Q.find(b=>b.mesh===J.object),St=pt?Q.indexOf(pt):-1;if(!pt||St<0)return null;const Ot=St===0?Ca(J.uv):"grab";return St===0&&!Ot?null:{object:pt,index:St,kind:St===0?"mascot":"prop",action:Ot,key:St===0?Ot:`prop-${St}`,uv:J.uv}}function Kn(J){if(O>.1||J.button!==0)return;Fn(J);const St=wa(cr()),Ot=(St==null?void 0:St.object)||null;if(xt={binding:St,object:Ot,x:J.clientX,y:J.clientY,ox:(Ot==null?void 0:Ot.offset.x)||0,oy:(Ot==null?void 0:Ot.offset.y)||0,id:J.pointerId,moved:!1,action:(St==null?void 0:St.kind)==="mascot"?St.action:null},J.pointerType!=="touch"&&dt.show(St?"grabbing":"eraser",J,!0),!Ot&&J.pointerType!=="touch"&&an(J),Ot===Q[0]){const b=Mt(J);Zt.x=Ot.home.x,Zt.y=Ot.home.y,Zt.vx=Zt.vy=Zt.angular=0,Ot.offset.set(0,0),Ot.velocity.set(0,0),xt.pose=Ot.mesh.material.uniforms.map.value,ut.copy(Ft),xt.snakeGrab=b.sub(Ot.home),xt.last={x:Ot.home.x,y:Ot.home.y,t:J.timeStamp}}if(Ot&&Ot!==Q[0]){Ot.pull=null,Ot.fall={vx:0,vy:0,spin:0};const b=Mt(J);xt.grab=b.sub(Ot.home),xt.last={x:Ot.home.x,y:Ot.home.y,t:J.timeStamp}}j.setPointerCapture(J.pointerId),Le=performance.now()+1e3,ge()}function Qn(J,pt=!1){if(C=J.pointerType==="touch"?null:J,Fn(J),xt){dt.move(J),Le=performance.now()+120;const St=(J.clientX-xt.x)/vt.x,Ot=(J.clientY-xt.y)/vt.y;if(Math.hypot(J.clientX-xt.x,J.clientY-xt.y)>6&&(xt.moved=!0),xt.object===Q[0]){const b=Mt(J).sub(xt.snakeGrab),H=Math.max(.008,(J.timeStamp-xt.last.t)/1e3);Zt.vx=(b.x-Zt.x)/H,Zt.vy=(b.y-Zt.y)/H,Zt.x=b.x,Zt.y=b.y,Zt.angle=Vn.clamp(Zt.vx*.045,-.5,.5),xt.last={x:b.x,y:b.y,t:J.timeStamp}}else if(xt.object&&xt.object!==Q[0]){const b=xt.object,H=Mt(J).sub(xt.grab),W=Math.max(.008,(J.timeStamp-xt.last.t)/1e3),[Z,q]=rt();b.home.x=Vn.clamp(H.x,Z+b.radius,q-b.radius),b.home.y=Math.max(Tt(b),Math.min(3,H.y)),b.fall.vx=Vn.clamp((b.home.x-xt.last.x)/W,-12,12),b.fall.vy=Vn.clamp((b.home.y-xt.last.y)/W,-12,12),xt.last={x:b.home.x,y:b.home.y,t:J.timeStamp}}else xt.object?xt.object.offset.set(Vn.clamp(xt.ox+St*9,-3,3),Vn.clamp(xt.oy-Ot*7,-2.5,2.5)):J.pointerType!=="touch"&&an(J)}else if(J.pointerType!=="touch"&&O<.1){const St=wa(cr()),Ot=(St==null?void 0:St.index)??-1,b=(St==null?void 0:St.kind)==="mascot"?St.action:null;!U&&Ot<0&&!pt?ut.set(kt.x,kt.y):!U&&St&&ut.copy(Ft);const H=(St==null?void 0:St.key)||"eraser";N=St;const W=St?`${St.kind}:${St.index}:${St.action}`:"none";i.current.dataset.cursor!==H&&(i.current.dataset.cursor=H),i.current.dataset.cursorBinding!==W&&(i.current.dataset.cursorBinding=W),Q.forEach(Z=>Z.hover=Z===(St==null?void 0:St.object)),dt.show(St?St.key:"eraser",J),V(b==="pocket"),w((St==null?void 0:St.kind)==="mascot"?qt[b][R.current==="zh"?1:0]+(R.current==="zh"?" · 按住可拖动":" · Hold to drag"):Ot>=0?(Q[Ot].definition||Nh[Ot]).name[R.current==="zh"?1:0]:"")}pt||ge()}function qn(J){if(xt&&j.hasPointerCapture(xt.id)&&j.releasePointerCapture(xt.id),xt!=null&&xt.action&&!xt.moved&&(J==null?void 0:J.type)==="pointerup"&&he(xt.action),(xt==null?void 0:xt.object)===Q[0]){const pt=xt.object;xt.moved&&!U&&pt.offset.set(Zt.x-P,Zt.y-(I(P)+pt.baseScale*.9*.48)),Zt.angular=0,i.current.dataset.snakeThrowSpeed=String(Math.hypot(Zt.vx,Zt.vy).toFixed(2))}if(xt!=null&&xt.object&&xt.object!==Q[0]){const pt=xt.object.fall;((J==null?void 0:J.type)!=="pointerup"||!xt.moved||J.timeStamp-xt.last.t>100)&&(pt.vx=pt.vy=0),pt.spin=pt.vx*.45,i.current.dataset.lastThrowSpeed=String(Math.hypot(pt.vx,pt.vy).toFixed(2)),U&&(xt.object.home.y=Tt(xt.object),pt.vx=pt.vy=pt.spin=0)}if(xt!=null&&xt.object&&xt.moved,xt=null,N=null,Le=performance.now()+400,delete i.current.dataset.cursorBinding,ut.set(0,0),(J==null?void 0:J.type)==="pointerup"&&J.pointerType!=="touch"){const pt=st;J.clientX>=pt.left&&J.clientX<pt.right&&J.clientY>=pt.top&&J.clientY<pt.bottom?Qn(J):Qi()}else C=null,dt.hide();ge()}function Qi(J){var Ot;if(C=null,xt)return;N=null,delete i.current.dataset.cursorBinding;const pt=J==null?void 0:J.relatedTarget,St=(Ot=pt==null?void 0:pt.closest)==null?void 0:Ot.call(pt,"button,a");O<.1&&(J==null?void 0:J.pointerType)!=="touch"&&St&&(i.current.contains(St)||St.closest(".daybook-header"))?dt.show(St.dataset.sceneAction||"head",J):dt.hide(),Q.forEach(b=>b.hover=!1),w(""),V(!1),ut.set(0,0),ge()}function Bn(J){var St,Ot;if(J.pointerType==="touch"){dt.hide();return}const pt=(Ot=(St=J.target).closest)==null?void 0:Ot.call(St,"button,a");if(O<.1&&pt&&(i.current.contains(pt)||pt.closest(".daybook-header"))){C=null,dt.show(pt.dataset.sceneAction||"head",J);return}!j.contains(J.target)&&!xt&&dt.hide()}function on(J){J.relatedTarget||qn()}function un(){D=!document.hidden,ae.stop(),jt=0,D?ge():qn()}const Jn=new S1;Jn.load(Ma.walk,J=>{if(_){J.dispose();return}const pt=J.image.width/4,St=J.image.height/4;for(let Ot=0;Ot<16;Ot++){const b=document.createElement("canvas");b.width=Math.floor(pt),b.height=Math.floor(St);const H=b.getContext("2d");H.drawImage(J.image,Ot%4*pt,Math.floor(Ot/4)*St,pt,St,0,0,b.width,b.height);const W=H.getImageData(0,0,b.width,b.height);let Z=b.height,q=0;const Et=new Uint8Array(b.width*b.height),wt=[];for(let Bt=0;Bt<b.width;Bt++)wt.push(Bt,(b.height-1)*b.width+Bt);for(let Bt=0;Bt<b.height;Bt++)wt.push(Bt*b.width,Bt*b.width+b.width-1);for(let Bt=0;Bt<wt.length;Bt++){const Lt=wt[Bt];if(Et[Lt])continue;Et[Lt]=1;const le=Lt*4;if(Math.min(W.data[le],W.data[le+1],W.data[le+2])<=233)continue;W.data[le+3]=0;const oe=Lt%b.width,ve=Math.floor(Lt/b.width);oe&&wt.push(Lt-1),oe<b.width-1&&wt.push(Lt+1),ve&&wt.push(Lt-b.width),ve<b.height-1&&wt.push(Lt+b.width)}for(let Bt=0;Bt<W.data.length;Bt+=4)if(W.data[Bt+3]>0){const Lt=Math.floor(Bt/4/b.width);Z=Math.min(Z,Lt),q=Math.max(q,Lt)}H.putImageData(W,0,0);const Y=document.createElement("canvas");Y.width=384,Y.height=341;const Rt=Math.max(1,q-Z+1),Gt=315/Rt;Y.getContext("2d").drawImage(b,0,Z,b.width,Rt,(384-b.width*Gt)/2,12,b.width*Gt,315),Kt.push(new Ho(Y))}J.dispose(),i.current.dataset.walkFrames=String(Kt.length),ge()}),ye=Jn.load(Ma.keepsakes,J=>{if(_){J.dispose();return}const pt=document.createElement("canvas");pt.width=pt.height=1254;const St=pt.getContext("2d");St.drawImage(J.image,0,0),xe=St.getImageData(0,0,1254,1254).data;const Ot=1254*1254;Ae=new Int32Array(Ot);const b=new Int32Array(Ot);let H=0;for(let W=0;W<Ot;W++){if(Ae[W]||xe[W*4+3]<90)continue;H++;let Z=0,q=1;for(b[0]=W,Ae[W]=H;Z<q;){const Et=b[Z++],wt=Et%1254,Y=[wt>0?Et-1:-1,wt<1253?Et+1:-1,Et>=1254?Et-1254:-1,Et<Ot-1254?Et+1254:-1];for(const Rt of Y)Rt>=0&&!Ae[Rt]&&xe[Rt*4+3]>=90&&(Ae[Rt]=H,b[q++]=Rt)}}Nh.forEach((W,Z)=>{const[q,Et,wt,Y]=W.rect,Rt=new ln(0,0,1,1),Gt=new Map;for(let Ee=Et;Ee<Et+Y;Ee++)for(let fe=q;fe<q+wt;fe++){const Fe=Ae[Ee*1254+fe];Fe&&Gt.set(Fe,(Gt.get(Fe)||0)+1)}const Bt=[...Gt].sort((Ee,fe)=>fe[1]-Ee[1])[0][0],Lt=document.createElement("canvas");Lt.width=wt,Lt.height=Y;const le=Lt.getContext("2d"),oe=le.createImageData(wt,Y);for(let Ee=0;Ee<Y;Ee++)for(let fe=0;fe<wt;fe++){const Fe=(Et+Ee)*1254+q+fe,rn=(Ee*wt+fe)*4;Ae[Fe]===Bt&&oe.data.set(xe.subarray(Fe*4,Fe*4+4),rn)}le.putImageData(oe,0,0);const ve=new Ho(Lt),ce=new Fi({uniforms:{edgeDepth:{value:0},map:{value:ve},crop:{value:Rt},time:{value:0},snake:{value:0},outfit:{value:0},facing:{value:1},dissolve:{value:0}},vertexShader:HT,fragmentShader:GT,transparent:!0,depthWrite:!1,side:Wi}),_e=new mi(new zr(1,1,24,24),ce);lt.add(_e);const Qt=[],De=[],re=[];for(let Ee=1;Ee<Y;Ee+=3)for(let fe=1;fe<wt;fe+=3){const Fe=((Et+Ee)*1254+q+fe)*4;xe[Fe+3]<120||Ae[Fe/4]!==Bt||(Qt.push(fe/wt-.5,.5-Ee/Y,0),De.push(xe[Fe]/255,xe[Fe+1]/255,xe[Fe+2]/255),re.push(fe/wt,1-Ee/Y))}const He=new wi;He.setAttribute("position",new Xn(Qt,3)),He.setAttribute("color",new Xn(De,3)),He.setAttribute("seed",new Xn(re,2));const mn=new Fi({transparent:!0,depthWrite:!1,uniforms:{dissolve:{value:0}},vertexShader:`
     attribute vec3 color;attribute vec2 seed;varying vec3 c;varying float alpha;uniform float dissolve;
     ${g_}
     void main(){float f=field(seed);float age=max(0.,dissolve-f);
      alpha=step(f,dissolve)*(1.-smoothstep(0.,.24,age));
      vec3 p=position+vec3(age*(hash(seed)*2.-1.)*.65,age*(1.5+hash(seed.yx)*2.),age*.2);
      c=color;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);gl_PointSize=1.25*(1.-age);}
    `,fragmentShader:"varying vec3 c;varying float alpha;void main(){float soft=1.-smoothstep(.15,.5,length(gl_PointCoord-.5));gl_FragColor=vec4(c,alpha*soft*.8);}"}),pe=new rg(He,mn);lt.add(pe),Q.push({mesh:_e,points:pe,owner:Bt,ownTexture:ve,rect:W.rect,home:new ht,offset:new Ue,velocity:new Ue,baseScale:1,hover:!1})}),Jn.load(Ma.extras,W=>{if(_){W.dispose();return}[{name:["RS7 model","RS7 车模"],rect:[0,380,575,400],size:2.8,x:0,y:0,z:.5},{name:["NF800 Pro racket","NF800 Pro 球拍"],rect:[575,75,350,875],size:1.15,x:0,y:0,z:.5},{name:["Chaoshan beef hotpot","潮汕牛肉火锅"],rect:[930,275,606,620],size:2.15,x:0,y:0,z:.5}].forEach(q=>{const[Et,wt,Y,Rt]=q.rect,Gt=document.createElement("canvas");Gt.width=Y,Gt.height=Rt;const Bt=Gt.getContext("2d");Bt.drawImage(W.image,Et,wt,Y,Rt,0,0,Y,Rt);const Lt=Bt.getImageData(0,0,Y,Rt),le=new Uint8Array(Y*Rt),oe=[];for(let pe=0;pe<Y;pe++)oe.push(pe,(Rt-1)*Y+pe);for(let pe=0;pe<Rt;pe++)oe.push(pe*Y,pe*Y+Y-1);for(let pe=0;pe<oe.length;pe++){const Ee=oe[pe];if(le[Ee])continue;le[Ee]=1;const fe=Ee*4;if(Math.min(Lt.data[fe],Lt.data[fe+1],Lt.data[fe+2])<234)continue;Lt.data[fe+3]=0;const Fe=Ee%Y,rn=Math.floor(Ee/Y);Fe&&oe.push(Ee-1),Fe<Y-1&&oe.push(Ee+1),rn&&oe.push(Ee-Y),rn<Rt-1&&oe.push(Ee+Y)}Bt.putImageData(Lt,0,0);const ve=new Ho(Gt),ce=Q[1].mesh.material.clone();ce.uniforms.map.value=ve;const _e=new mi(new zr(1,1),ce);_e.visible=!1,lt.add(_e);const Qt=[],De=[],re=[];for(let pe=1;pe<Rt;pe+=3)for(let Ee=1;Ee<Y;Ee+=3){const fe=(pe*Y+Ee)*4;Lt.data[fe+3]<120||(Qt.push(Ee/Y-.5,.5-pe/Rt,0),De.push(Lt.data[fe]/255,Lt.data[fe+1]/255,Lt.data[fe+2]/255),re.push(Ee/Y,1-pe/Rt))}const He=new wi;He.setAttribute("position",new Xn(Qt,3)),He.setAttribute("color",new Xn(De,3)),He.setAttribute("seed",new Xn(re,2));const mn=new rg(He,Q[1].points.material.clone());mn.visible=!1,lt.add(mn),Q.push({definition:q,mesh:_e,points:mn,ownTexture:ve,rect:[0,0,Y,Rt],hitWidth:Y,hitHeight:Rt,hitPixels:Lt.data,home:new ht,offset:new Ue,velocity:new Ue,baseScale:1,hover:!1})}),W.dispose(),i.current.dataset.items=String(Q.length-1),Wt()},void 0,()=>{_||w(R.current==="zh"?"新增物件加载失败，请刷新":"Extra items could not load. Please refresh.")}),Jn.load(Ma.poses,W=>{if(_){W.dispose();return}const Z=W.image.width/4,q=W.image.height/3;for(let Et=0;Et<3;Et++)for(let wt=0;wt<4;wt++){const Y=document.createElement("canvas");Y.width=Math.floor(Z),Y.height=Math.floor(q);const Rt=Y.getContext("2d");Rt.drawImage(W.image,wt*Z,Et*q,Z,q,0,0,Y.width,Y.height);const Gt=Y.width,Bt=Y.height,Lt=Rt.getImageData(0,0,Gt,Bt),le=new Uint8Array(Gt*Bt),oe=[];for(let ce=0;ce<Gt;ce++)oe.push(ce,(Bt-1)*Gt+ce);for(let ce=0;ce<Bt;ce++)oe.push(ce*Gt,ce*Gt+Gt-1);for(let ce=0;ce<oe.length;ce++){const _e=oe[ce];if(le[_e])continue;le[_e]=1;const Qt=_e*4;if(Math.min(Lt.data[Qt],Lt.data[Qt+1],Lt.data[Qt+2])<230)continue;Lt.data[Qt+3]=0;const De=_e%Gt,re=Math.floor(_e/Gt);De>0&&oe.push(_e-1),De<Gt-1&&oe.push(_e+1),re>0&&oe.push(_e-Gt),re<Bt-1&&oe.push(_e+Gt)}Rt.putImageData(Lt,0,0);const ve=new Ho(Y);ie.push(ve)}W.dispose(),g(!0),Wt()},void 0,()=>m(!0)),Wt()},void 0,()=>{_||m(!0)});function Bi(){U=z.matches,i.current.classList.toggle("sky-play--still",U),de(),ge()}const Br=new IntersectionObserver(([J])=>{et=J.isIntersecting,ae.stop(),jt=0,et&&ge()});Br.observe(i.current);const Hr=new ResizeObserver(Wt);return Hr.observe(j),window.addEventListener("scroll",de,{passive:!0}),z.addEventListener("change",Bi),document.addEventListener("visibilitychange",un),window.addEventListener("blur",qn),document.addEventListener("pointermove",Bn),document.addEventListener("pointerout",on),j.addEventListener("pointerenter",Qn),j.addEventListener("pointerdown",Kn),j.addEventListener("pointermove",Qn),j.addEventListener("pointerup",qn),j.addEventListener("pointercancel",qn),j.addEventListener("pointerleave",Qi),l.current={act:he,reveal:()=>{i.current.dataset.revealed==="true"?Se():Xt.reveal()},reset:()=>{Se(),T=0,P=0,nt=0,gt=0,te=0,Q.forEach(J=>{J.offset.set(0,0),J.velocity.set(0,0),J.held=!1,J.released=!1}),ut.set(0,0),ge()},nudge:(J,pt)=>{const St=Q[J];St&&(St.held=!0,St.offset.x=Vn.clamp(St.offset.x+(pt==="ArrowRight"?.2:pt==="ArrowLeft"?-.2:0),-2,2),St.offset.y=Vn.clamp(St.offset.y+(pt==="ArrowUp"?.2:pt==="ArrowDown"?-.2:0),-2,2),ge())},release:()=>{Q.forEach(J=>J.held=!1),ge()}},Bi(),Wt(),()=>{_=!0,ae.dispose(),Xt.dispose(),ee.dispose(),Br.disconnect(),Hr.disconnect(),window.removeEventListener("scroll",de),z.removeEventListener("change",Bi),document.removeEventListener("visibilitychange",un),window.removeEventListener("blur",qn),document.removeEventListener("pointermove",Bn),document.removeEventListener("pointerout",on),j.removeEventListener("pointerenter",Qn),j.removeEventListener("pointerdown",Kn),j.removeEventListener("pointermove",Qn),j.removeEventListener("pointerup",qn),j.removeEventListener("pointercancel",qn),j.removeEventListener("pointerleave",Qi),It.dispose(),Q.forEach(J=>{var pt;(pt=J.edges)==null||pt.forEach(St=>St.material.dispose()),J.shadow&&(J.shadow.geometry.dispose(),J.shadow.material.dispose(),lt.remove(J.shadow))}),dt.dispose(),Kt.forEach(J=>J.dispose()),ie.forEach(J=>J.dispose()),K.geometry.dispose(),K.material.dispose(),Q.forEach(J=>{J.ownTexture.dispose(),J.mesh.geometry.dispose(),J.mesh.material.dispose(),J.points.geometry.dispose(),J.points.material.dispose()}),ye==null||ye.dispose(),L.dispose(),L.domElement.remove(),l.current=null}},[]),Yt.jsx("section",{className:"sky-play",ref:i,"aria-label":s==="zh"?"我的兴趣空间":"A few things I love",style:{"--pocket-hidden-sky":`url("${Ma.hiddenSky}")`,"--pocket-terrain":`url("${Ma.terrain}")`},children:Yt.jsxs("div",{className:"sky-play__stage",children:[Yt.jsx("div",{className:"sky-play__backdrop"}),Yt.jsx("canvas",{className:"sky-play__wipe",ref:c,"aria-hidden":"true"}),Yt.jsx("canvas",{className:"sky-play__backlight",ref:h,"aria-hidden":"true"}),Yt.jsx("div",{className:"sky-play__ground"}),Yt.jsx("div",{className:"sky-play__editorial",children:Yt.jsx("h1",{children:"POCKET PLANET"})}),Yt.jsx("div",{className:"sky-play__canvas",ref:r,"aria-hidden":"true"}),(!p||d)&&Yt.jsx("p",{className:"sky-play__loading",role:"status",children:d?s==="zh"?"场景加载失败，请刷新重试。":"Scene could not load. Please refresh.":s==="zh"?"正在打开口袋星球…":"Opening Pocket Planet…"}),Yt.jsx("div",{className:"sky-play__actions","aria-label":s==="zh"?"小蛇互动":"Meet the snake",children:[["left","向左走","Walk left"],["head","换表情","Change mood"],["body","换装","Change outfit"],["pocket","掏口袋","Pocket surprise"],["right","向右走","Walk right"]].map(([_,L,C])=>Yt.jsx("button",{"data-scene-action":_,"aria-label":s==="zh"?L:C,onFocus:()=>E(_==="pocket"),onBlur:()=>E(!1),onMouseEnter:()=>E(_==="pocket"),onMouseLeave:()=>E(!1),onClick:()=>{var N;return(N=l.current)==null?void 0:N.act(_)},children:s==="zh"?L:C},_))}),Yt.jsx("div",{className:"sky-play__controls",children:Yt.jsxs("button",{onClick:t,children:[s==="zh"?"查看作品":"Selected work"," ↓"]})})]})})}const ko=[{id:"tiny",slug:"ai-narrative-platform",title:"Tiny Stories",subtitle:"RPG Demo",color:"#f5d78c",ink:"#36213f",medium:["AI · Interactive storytelling","AI · 互动叙事"],summary:["From a story seed to a world you can edit, publish and play.","从一个故事种子，到可以编辑、发布与游玩的世界。"],video:"/assets/tiny-stories-demo.mp4",poster:"/assets/tiny-stories-video-poster.jpg",repository:"https://github.com/lishehao/RPG_Demo",live:"https://rpg.shehao.app",steps:[["Seed","构思"],["Author","创作"],["Play","游玩"]],features:[["An editor, not a black box","不止生成，更能编辑","Author Copilot turns natural-language requests into proposed changes, with a preview diff and apply / undo workflow.","Author Copilot 将自然语言修改转成提案，经过差异预览，再应用或撤销。"],["State that survives the session","状态可保存，也可恢复","Author jobs, play sessions and checkpoints persist across restarts. Structured contracts separate the editor from the agent runtime.","创作任务、游玩会话与检查点支持持久化恢复；编辑器与智能体运行时通过结构化契约解耦。"],["A product loop you can evaluate","让产品流程可评测","Multi-stage authoring and play workflows connect structured validation, repair, telemetry and end-to-end benchmark runs.","多阶段创作与游玩流程连接结构化校验、修复、运行记录和端到端评测。"]],stack:"React · TypeScript · FastAPI · LangGraph · PostgreSQL"},{id:"auto",slug:"auto-load-off-test",title:"Auto Load-Off Test",subtitle:"Laboratory tools",color:"#cbd1ad",ink:"#253b31",medium:["Python · Instrument automation","Python · 仪器自动化"],summary:["Turn a repeated lab procedure into a run you can configure, inspect and reproduce.","把重复的实验室操作，变成可配置、可检查、可复现的测试流程。"],video:"/assets/hyperframe-replay.mp4",poster:"/assets/hyperframe-video-poster.jpg",repository:"https://github.com/lishehao/auto-load-off-test",note:["Illustrative Hyperframe replay · simulated measurements","Hyperframe 演示回放 · 测量数据为模拟值"],steps:[["Configure","配置"],["Measure","测量"],["Export","导出"]],features:[["One repeatable run","一套可重复执行的流程","Configure and orchestrate an arbitrary waveform generator and oscilloscope through a focused operator interface.","通过统一操作界面配置并控制任意波形发生器与示波器。"],["Failures are part of the workflow","把异常处理纳入流程","Validation, logging, retries and timeouts make failures visible instead of leaving them inside a one-off script.","通过校验、日志、重试与超时处理，让异常可见、可追踪。"],["Evidence you can take away","结果可以带走，也能比较","Structured logs and CSV / MAT exports support later inspection and comparison across validation runs.","结构化日志与 CSV / MAT 导出，支持测试后的检查和跨轮次比较。"]],stack:"Python · Tkinter · PyVISA · SCPI · CSV / MAT"}],kT=s=>Math.max(0,Math.min(1,s));function XT(s){const t=kT((s-.25)/.5),i=t*t*(3-2*t),r=Math.sin(Math.PI*i);return{t:i,outX:-26*i,outScale:1-.045*i,outAngle:-4*i,inX:100*(1-i),shade:.18*r,beam:.23*r,beamX:-45+90*i,active:i<.5?0:1}}function qT({project:s,index:t,lang:i,onNavigate:r}){const l=dn.useRef(null),c=dn.useRef(null),[h,d]=dn.useState(!1),m=i==="zh",p=m?1:0;dn.useEffect(()=>{const x=new IntersectionObserver(([v])=>{var S;v.isIntersecting||(S=c.current)==null||S.pause()});return x.observe(l.current),()=>x.disconnect()},[]);async function g(){if(c.current.paused)try{await c.current.play()}catch{d(!1)}else c.current.pause()}return Yt.jsx("article",{ref:l,id:`project-${s.id}`,className:"gallery-room",style:{"--room-color":s.color,"--room-ink":s.ink},"aria-labelledby":`title-${s.id}`,children:Yt.jsxs("div",{className:"gallery-room__sticky",children:[Yt.jsxs("div",{className:"gallery-room__heading",children:[Yt.jsxs("span",{children:[String(t+1).padStart(2,"0")," / ",String(ko.length).padStart(2,"0")]}),Yt.jsx("span",{children:s.medium[p]}),Yt.jsx("span",{children:m?"精选项目":"SELECTED WORK"})]}),Yt.jsxs("div",{className:"gallery-room__exhibit",children:[Yt.jsxs("div",{className:"gallery-room__frame",children:[Yt.jsx("video",{ref:c,controls:h,playsInline:!0,preload:"none",poster:s.poster,onPlay:()=>d(!0),onPause:()=>d(!1),onEnded:()=>d(!1),children:Yt.jsx("source",{src:s.video,type:"video/mp4"})}),Yt.jsx("button",{className:"gallery-room__play",onClick:g,children:h?m?"暂停演示":"Pause film":m?"播放演示 ↗":"Play film ↗"}),s.note&&Yt.jsx("small",{children:s.note[p]})]}),Yt.jsxs("div",{className:"gallery-room__label",children:[Yt.jsx("p",{children:s.subtitle}),Yt.jsx("h2",{id:`title-${s.id}`,children:s.title}),Yt.jsx("p",{className:"gallery-room__summary",children:s.summary[p]}),Yt.jsx("ol",{className:"gallery-room__steps",children:s.steps.map((x,v)=>Yt.jsxs("li",{children:[Yt.jsxs("span",{children:["0",v+1]}),x[p]]},x[0]))}),Yt.jsxs("div",{className:"gallery-room__links",children:[Yt.jsx("a",{href:`${m?"/zh":""}/projects/${s.slug}/`,children:m?"完整项目介绍 ↗":"Read case study ↗"}),Yt.jsx("a",{href:s.repository,target:"_blank",rel:"noreferrer",children:"GitHub ↗"}),s.live&&Yt.jsx("a",{href:s.live,target:"_blank",rel:"noreferrer",children:m?"体验产品 ↗":"Try it ↗"})]})]})]}),Yt.jsxs("div",{className:"gallery-room__details",children:[s.features.map(x=>Yt.jsxs("details",{children:[Yt.jsx("summary",{children:x[p]}),Yt.jsx("p",{children:x[2+p]})]},x[0])),Yt.jsx("small",{children:s.stack})]}),Yt.jsxs("a",{className:"gallery-room__next",onClick:x=>{t===0&&r(x,1)},href:t+1<ko.length?`#project-${ko[t+1].id}`:"#about",children:[t+1<ko.length?m?"下一间展厅":"Next gallery":m?"关于我":"About me"," ↓"]})]})})}function WT({lang:s}){const t=dn.useRef(null),i=dn.useRef(!1);dn.useEffect(()=>{const l=t.current,c=[...l.querySelectorAll(".gallery-room")],h=c.map(M=>M.querySelector(".gallery-room__sticky")),d=matchMedia("(prefers-reduced-motion: reduce), (max-width: 760px), (max-height: 650px)");let m=0,p=-1;function g(){l.classList.remove("project-gallery--motion"),i.current=!1,c.forEach(M=>{M.style.transform="",M.style.visibility="",M.inert=!1,M.removeAttribute("aria-hidden")})}function x(){if(m=0,document.hidden||!i.current)return;const M=l.getBoundingClientRect(),_=-M.top/Math.max(1,M.height-innerHeight),L=XT(_);c[0].style.transform=`translate3d(${L.outX}%,0,0) scale(${L.outScale}) rotateY(${L.outAngle}deg)`,c[1].style.transform=`translate3d(${L.inX}%,0,0)`,c[0].style.visibility=L.t===1?"hidden":"visible",c[1].style.visibility=L.t===0?"hidden":"visible",l.style.setProperty("--handoff-shade",L.shade),l.style.setProperty("--handoff-light",L.beam),l.style.setProperty("--handoff-light-x",`${L.beamX}%`),p!==L.active&&(p=L.active,c.forEach((C,N)=>{var z;C.inert=N!==p,C.setAttribute("aria-hidden",String(N!==p)),N!==p&&((z=C.querySelector("video"))==null||z.pause())}))}function v(){!m&&!document.hidden&&(m=requestAnimationFrame(x))}function S(){const M=h.every(_=>_.scrollHeight<=innerHeight+2);if(d.matches||!M||c.length!==2){g();return}l.classList.add("project-gallery--motion"),i.current=!0,p=-1,v()}const E=new ResizeObserver(S);h.forEach(M=>E.observe(M));function R(){document.hidden?(cancelAnimationFrame(m),m=0,c.forEach(M=>{var _;return(_=M.querySelector("video"))==null?void 0:_.pause()})):v()}return addEventListener("scroll",v,{passive:!0}),addEventListener("resize",S),d.addEventListener("change",S),document.addEventListener("visibilitychange",R),S(),()=>{cancelAnimationFrame(m),E.disconnect(),removeEventListener("scroll",v),removeEventListener("resize",S),d.removeEventListener("change",S),document.removeEventListener("visibilitychange",R),g()}},[]);function r(l,c){if(!i.current||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey)return;l.preventDefault();const h=t.current,d=h.getBoundingClientRect();window.scrollTo({top:scrollY+d.top+(h.offsetHeight-innerHeight)*(c===1?.76:0),behavior:"smooth"})}return Yt.jsx("section",{ref:t,id:"work",className:"project-gallery","aria-label":s==="zh"?"项目画廊":"Project gallery",children:Yt.jsxs("div",{className:"project-gallery__stage",children:[ko.map((l,c)=>Yt.jsx(qT,{project:l,index:c,lang:s,onNavigate:r},l.id)),Yt.jsxs("div",{className:"gallery-handoff","aria-hidden":"true",children:[Yt.jsx("div",{className:"gallery-handoff__shade"}),Yt.jsx("div",{className:"gallery-handoff__light"})]})]})})}function YT(){const[s,t]=dn.useState(()=>location.pathname.startsWith("/zh")?"zh":"en"),i=s==="zh";dn.useEffect(()=>{document.documentElement.lang=i?"zh-CN":"en",document.title="Shehao Li — Selected Work"},[i]);const r=l=>{var c;return(c=document.getElementById(l))==null?void 0:c.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"start"})};return Yt.jsxs("main",{className:"daybook",children:[Yt.jsxs("header",{id:"top",className:"daybook-header",children:[Yt.jsx("button",{className:"daybook-wordmark",type:"button",onClick:()=>r("top"),children:"SHEHAO LI"}),Yt.jsxs("nav",{"aria-label":i?"主导航":"Primary navigation",children:[Yt.jsx("button",{onClick:()=>r("work"),children:i?"作品":"Work"}),Yt.jsx("a",{href:"/resume/",children:i?"简历":"Resume"}),Yt.jsx("button",{onClick:()=>r("about"),children:i?"关于":"About"})]}),Yt.jsx("button",{className:"daybook-language",onClick:()=>t(i?"en":"zh"),"aria-label":i?"Switch to English":"切换为中文",children:i?"EN":"中文"})]}),Yt.jsx(VT,{lang:s,onWork:()=>r("work")}),Yt.jsx(WT,{lang:s}),Yt.jsxs("section",{id:"about",className:"daybook-about",children:[Yt.jsx("div",{children:Yt.jsx("h2",{children:i?"先好奇，再把它做出来。":"Curious, then concrete."})}),Yt.jsxs("div",{className:"daybook-about__body",children:[Yt.jsx("p",{children:i?"加州大学圣地亚哥分校数学–计算机专业。我做 AI 产品、互动体验，以及让日常工程工作更可靠的工具。":"Math–CS at UC San Diego. I build AI products, interactive experiences, and tools for everyday engineering work."}),Yt.jsx("a",{href:"https://github.com/lishehao",target:"_blank",rel:"noreferrer",children:"GitHub / lishehao ↗"}),Yt.jsx("a",{href:"/resume/",children:i?"查看简历 ↗":"Resume ↗"})]}),Yt.jsx("button",{className:"daybook-top",onClick:()=>r("top"),children:i?"回到顶部":"Back to top"})]}),Yt.jsx("footer",{className:"daybook-footer",children:Yt.jsxs("span",{children:["© ",new Date().getFullYear()," Shehao Li"]})})]})}function jT(){return Yt.jsx(YT,{})}Ny.createRoot(document.getElementById("root")).render(Yt.jsx(Ay.StrictMode,{children:Yt.jsx(jT,{})}));
