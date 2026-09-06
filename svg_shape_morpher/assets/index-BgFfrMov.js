var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function t(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var n={},r=[],i=()=>{},a=()=>!1,o=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),s=e=>e.startsWith(`onUpdate:`),c=Object.assign,l=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},u=Object.prototype.hasOwnProperty,d=(e,t)=>u.call(e,t),f=Array.isArray,p=e=>S(e)===`[object Map]`,m=e=>S(e)===`[object Set]`,h=e=>S(e)===`[object Date]`,g=e=>typeof e==`function`,_=e=>typeof e==`string`,v=e=>typeof e==`symbol`,y=e=>typeof e==`object`&&!!e,b=e=>(y(e)||g(e))&&g(e.then)&&g(e.catch),x=Object.prototype.toString,S=e=>x.call(e),C=e=>S(e).slice(8,-1),w=e=>S(e)===`[object Object]`,T=e=>_(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,E=t(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),D=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},O=/-\w/g,k=D(e=>e.replace(O,e=>e.slice(1).toUpperCase())),A=/\B([A-Z])/g,j=D(e=>e.replace(A,`-$1`).toLowerCase()),ee=D(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=D(e=>e?`on${ee(e)}`:``),M=(e,t)=>!Object.is(e,t),ne=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},re=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ie=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ae=e=>{let t=_(e)?Number(e):NaN;return isNaN(t)?e:t},oe,se=()=>oe||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ce(e){if(f(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=_(r)?fe(r):ce(r);if(i)for(let e in i)t[e]=i[e]}return t}if(_(e)||y(e))return e}var le=/;(?![^(]*\))/g,ue=/:([^]+)/,de=/\/\*[^]*?\*\//g;function fe(e){let t={};return e.replace(de,``).split(le).forEach(e=>{if(e){let n=e.split(ue);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function pe(e){let t=``;if(_(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){let r=pe(e[n]);r&&(t+=r+` `)}else if(y(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var me=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,he=t(me);me+``;function ge(e){return!!e||e===``}function _e(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ve(e[r],t[r]);return n}function ve(e,t){if(e===t)return!0;let n=h(e),r=h(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=v(e),r=v(t),n||r)return e===t;if(n=f(e),r=f(t),n||r)return n&&r?_e(e,t):!1;if(n=y(e),r=y(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ve(e[n],t[n]))return!1}}return String(e)===String(t)}var ye=e=>!!(e&&e.__v_isRef===!0),N=e=>_(e)?e:e==null?``:f(e)||y(e)&&(e.toString===x||!g(e.toString))?ye(e)?N(e.value):JSON.stringify(e,be,2):String(e),be=(e,t)=>ye(t)?be(e,t.value):p(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[xe(t,r)+` =>`]=n,e),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>xe(e))}:v(t)?xe(t):y(t)&&!f(t)&&!w(t)?String(t):t,xe=(e,t=``)=>v(e)?`Symbol(${e.description??t})`:e,Se,Ce=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Se&&(Se.active?(this.parent=Se,this.index=(Se.scopes||(Se.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=Se;try{return Se=this,e()}finally{Se=t}}}on(){++this._on===1&&(this.prevScope=Se,Se=this)}off(){if(this._on>0&&--this._on===0){if(Se===this)Se=this.prevScope;else{let e=Se;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function we(e){return new Ce(e)}function Te(){return Se}function Ee(e,t=!1){Se&&Se.cleanups.push(e)}var P,De=new WeakSet,Oe=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&(Se.active?Se.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,De.has(this)&&(De.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Me(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ge(this),Fe(this);let e=P,t=Ve;P=this,Ve=!0;try{return this.fn()}finally{Ie(this),P=e,Ve=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ze(e);this.deps=this.depsTail=void 0,Ge(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?De.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Le(this)&&this.run()}get dirty(){return Le(this)}},ke=0,Ae,je;function Me(e,t=!1){if(e.flags|=8,t){e.next=je,je=e;return}e.next=Ae,Ae=e}function Ne(){ke++}function Pe(){if(--ke>0)return;if(je){let e=je;for(je=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ae;){let t=Ae;for(Ae=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Fe(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ie(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),ze(r),Be(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Le(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Re(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Re(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ke)||(e.globalVersion=Ke,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Le(e))))return;e.flags|=2;let t=e.dep,n=P,r=Ve;P=e,Ve=!0;try{Fe(e);let n=e.fn(e._value);(t.version===0||M(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{P=n,Ve=r,Ie(e),e.flags&=-3}}function ze(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)ze(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Be(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ve=!0,He=[];function Ue(){He.push(Ve),Ve=!1}function We(){let e=He.pop();Ve=e===void 0||e}function Ge(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=P;P=void 0;try{t()}finally{P=e}}}var Ke=0,qe=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Je=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!P||!Ve||P===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==P)t=this.activeLink=new qe(P,this),P.deps?(t.prevDep=P.depsTail,P.depsTail.nextDep=t,P.depsTail=t):P.deps=P.depsTail=t,Ye(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=P.depsTail,t.nextDep=void 0,P.depsTail.nextDep=t,P.depsTail=t,P.deps===t&&(P.deps=e)}return t}trigger(e){this.version++,Ke++,this.notify(e)}notify(e){Ne();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Pe()}}};function Ye(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ye(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Xe=new WeakMap,Ze=Symbol(``),Qe=Symbol(``),$e=Symbol(``);function et(e,t,n){if(Ve&&P){let t=Xe.get(e);t||Xe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Je),r.map=t,r.key=n),r.track()}}function tt(e,t,n,r,i,a){let o=Xe.get(e);if(!o){Ke++;return}let s=e=>{e&&e.trigger()};if(Ne(),t===`clear`)o.forEach(s);else{let i=f(e),a=i&&T(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===$e||!v(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get($e)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ze)),p(e)&&s(o.get(Qe)));break;case`delete`:i||(s(o.get(Ze)),p(e)&&s(o.get(Qe)));break;case`set`:p(e)&&s(o.get(Ze))}}Pe()}function nt(e,t){let n=Xe.get(e);return n&&n.get(t)}function rt(e){let t=F(e);return t===e?t:(et(t,`iterate`,$e),Ht(e)?t:t.map(Gt))}function it(e){return et(e=F(e),`iterate`,$e),e}function at(e,t){return Vt(e)?Kt(Bt(e)?Gt(t):t):Gt(t)}var ot={__proto__:null,[Symbol.iterator](){return st(this,Symbol.iterator,e=>at(this,e))},concat(...e){return rt(this).concat(...e.map(e=>f(e)?rt(e):e))},entries(){return st(this,`entries`,e=>(e[1]=at(this,e[1]),e))},every(e,t){return lt(this,`every`,e,t,void 0,arguments)},filter(e,t){return lt(this,`filter`,e,t,e=>e.map(e=>at(this,e)),arguments)},find(e,t){return lt(this,`find`,e,t,e=>at(this,e),arguments)},findIndex(e,t){return lt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return lt(this,`findLast`,e,t,e=>at(this,e),arguments)},findLastIndex(e,t){return lt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return lt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return dt(this,`includes`,e)},indexOf(...e){return dt(this,`indexOf`,e)},join(e){return rt(this).join(e)},lastIndexOf(...e){return dt(this,`lastIndexOf`,e)},map(e,t){return lt(this,`map`,e,t,void 0,arguments)},pop(){return ft(this,`pop`)},push(...e){return ft(this,`push`,e)},reduce(e,...t){return ut(this,`reduce`,e,t)},reduceRight(e,...t){return ut(this,`reduceRight`,e,t)},shift(){return ft(this,`shift`)},some(e,t){return lt(this,`some`,e,t,void 0,arguments)},splice(...e){return ft(this,`splice`,e)},toReversed(){return rt(this).toReversed()},toSorted(e){return rt(this).toSorted(e)},toSpliced(...e){return rt(this).toSpliced(...e)},unshift(...e){return ft(this,`unshift`,e)},values(){return st(this,`values`,e=>at(this,e))}};function st(e,t,n){let r=it(e),i=r[t]();return r!==e&&!Ht(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ct=Array.prototype;function lt(e,t,n,r,i,a){let o=it(e),s=o!==e&&!Ht(e),c=o[t];if(c!==ct[t]){let t=c.apply(e,a);return s?Gt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,at(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ut(e,t,n,r){let i=it(e),a=i!==e&&!Ht(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=at(e,t)),n.call(this,t,at(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?at(e,c):c}function dt(e,t,n){let r=F(e);et(r,`iterate`,$e);let i=r[t](...n);return(i===-1||i===!1)&&Ut(n[0])?(n[0]=F(n[0]),r[t](...n)):i}function ft(e,t,n=[]){Ue(),Ne();let r=F(e)[t].apply(e,n);return Pe(),We(),r}var pt=t(`__proto__,__v_isRef,__isVue`),mt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(v));function ht(e){v(e)||(e=String(e));let t=F(this);return et(t,`has`,e),t.hasOwnProperty(e)}var gt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Pt:Nt:i?Mt:jt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=f(e);if(!r){let e;if(a&&(e=ot[t]))return e;if(t===`hasOwnProperty`)return ht}let o=Reflect.get(e,t,qt(e)?e:n);if((v(t)?mt.has(t):pt(t))||(r||et(e,`get`,t),i))return o;if(qt(o)){let e=a&&T(t)?o:o.value;return r&&y(e)?Rt(e):e}return y(o)?r?Rt(o):It(o):o}},_t=class extends gt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=f(e)&&T(t);if(!this._isShallow){let e=Vt(i);if(!Ht(n)&&!Vt(n)&&(i=F(i),n=F(n)),!a&&qt(i)&&!qt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:d(e,t),s=Reflect.set(e,t,n,qt(e)?e:r);return e===F(r)&&s&&(o?M(n,i)&&tt(e,`set`,t,n,i):tt(e,`add`,t,n)),s}deleteProperty(e,t){let n=d(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&tt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!v(t)||!mt.has(t))&&et(e,`has`,t),n}ownKeys(e){return et(e,`iterate`,f(e)?`length`:Ze),Reflect.ownKeys(e)}},vt=class extends gt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},yt=new _t,bt=new vt,xt=new _t(!0),St=e=>e,Ct=e=>Reflect.getPrototypeOf(e);function wt(e,t,n){return function(...r){let i=this.__v_raw,a=F(i),o=p(a),s=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?St:t?Kt:Gt;return!t&&et(a,`iterate`,l?Qe:Ze),c(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:s?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Tt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Et(e,t){let n={get(n){let r=this.__v_raw,i=F(r),a=F(n);e||(M(n,a)&&et(i,`get`,n),et(i,`get`,a));let{has:o}=Ct(i),s=t?St:e?Kt:Gt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&et(F(t),`iterate`,Ze),t.size},has(t){let n=this.__v_raw,r=F(n),i=F(t);return e||(M(t,i)&&et(r,`has`,t),et(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=F(a),s=t?St:e?Kt:Gt;return!e&&et(o,`iterate`,Ze),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return c(n,e?{add:Tt(`add`),set:Tt(`set`),delete:Tt(`delete`),clear:Tt(`clear`)}:{add(e){let n=F(this),r=Ct(n),i=F(e),a=!t&&!Ht(e)&&!Vt(e)?i:e;return r.has.call(n,a)||M(e,a)&&r.has.call(n,e)||M(i,a)&&r.has.call(n,i)||(n.add(a),tt(n,`add`,a,a)),this},set(e,n){!t&&!Ht(n)&&!Vt(n)&&(n=F(n));let r=F(this),{has:i,get:a}=Ct(r),o=i.call(r,e);o||=(e=F(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?M(n,s)&&tt(r,`set`,e,n,s):tt(r,`add`,e,n),this},delete(e){let t=F(this),{has:n,get:r}=Ct(t),i=n.call(t,e);i||=(e=F(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&tt(t,`delete`,e,void 0,a),o},clear(){let e=F(this),t=e.size!==0,n=e.clear();return t&&tt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=wt(r,e,t)}),n}function Dt(e,t){let n=Et(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(d(n,r)&&r in t?n:t,r,i)}var Ot={get:Dt(!1,!1)},kt={get:Dt(!1,!0)},At={get:Dt(!0,!1)},jt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap;function Ft(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function It(e){return Vt(e)?e:zt(e,!1,yt,Ot,jt)}function Lt(e){return zt(e,!1,xt,kt,Mt)}function Rt(e){return zt(e,!0,bt,At,Nt)}function zt(e,t,n,r,i){if(!y(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Ft(C(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Bt(e){return Vt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function Ht(e){return!!(e&&e.__v_isShallow)}function Ut(e){return e?!!e.__v_raw:!1}function F(e){let t=e&&e.__v_raw;return t?F(t):e}function Wt(e){return!d(e,`__v_skip`)&&Object.isExtensible(e)&&re(e,`__v_skip`,!0),e}var Gt=e=>y(e)?It(e):e,Kt=e=>y(e)?Rt(e):e;function qt(e){return e?e.__v_isRef===!0:!1}function I(e){return Yt(e,!1)}function Jt(e){return Yt(e,!0)}function Yt(e,t){return qt(e)?e:new Xt(e,t)}var Xt=class{constructor(e,t){this.dep=new Je,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:F(e),this._value=t?e:Gt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Ht(e)||Vt(e);e=n?e:F(e),M(e,t)&&(this._rawValue=e,this._value=n?e:Gt(e),this.dep.trigger())}};function L(e){return qt(e)?e.value:e}var Zt={get:(e,t,n)=>t===`__v_raw`?e:L(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return qt(i)&&!qt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Qt(e){return Bt(e)?e:new Proxy(e,Zt)}var $t=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let t=this.dep=new Je,{get:n,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=n,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}};function en(e){return new $t(e)}function tn(e){let t=f(e)?Array(e.length):{};for(let n in e)t[n]=rn(e,n);return t}var nn=class{constructor(e,t,n){this._object=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=v(t)?t:String(t),this._raw=F(e);let r=!0,i=e;if(!f(e)||v(this._key)||!T(this._key))do r=!Ut(i)||Ht(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=L(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&qt(this._raw[this._key])){let t=this._object[this._key];if(qt(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return nt(this._raw,this._key)}};function rn(e,t,n){return new nn(e,t,n)}var an=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Je(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ke-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&P!==this)return Me(this,!0),!0}get value(){let e=this.dep.track();return Re(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function on(e,t,n=!1){let r,i;return g(e)?r=e:(r=e.get,i=e.set),new an(r,i,n)}var sn={},cn=new WeakMap,ln=void 0;function un(e,t=!1,n=ln){if(n){let t=cn.get(n);t||cn.set(n,t=[]),t.push(e)}}function dn(e,t,r=n){let{immediate:a,deep:o,once:s,scheduler:c,augmentJob:u,call:d}=r,p=e=>o?e:Ht(e)||o===!1||o===0?fn(e,1):fn(e),m,h,_,v,y=!1,b=!1;if(qt(e)?(h=()=>e.value,y=Ht(e)):Bt(e)?(h=()=>p(e),y=!0):f(e)?(b=!0,y=e.some(e=>Bt(e)||Ht(e)),h=()=>e.map(e=>{if(qt(e))return e.value;if(Bt(e))return p(e);if(g(e))return d?d(e,2):e()})):h=g(e)?t?d?()=>d(e,2):e:()=>{if(_){Ue();try{_()}finally{We()}}let t=ln;ln=m;try{return d?d(e,3,[v]):e(v)}finally{ln=t}}:i,t&&o){let e=h,t=o===!0?1/0:o;h=()=>fn(e(),t)}let x=Te(),S=()=>{m.stop(),x&&x.active&&l(x.effects,m)};if(s&&t){let e=t;t=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(sn):sn,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e)){if(t){let n=m.run();if(e||o||y||(b?n.some((e,t)=>M(e,C[t])):M(n,C))){_&&_();let e=ln;ln=m;try{let e=[n,C===sn?void 0:b&&C[0]===sn?[]:C,v];C=n,d?d(t,3,e):t(...e)}finally{ln=e}}}else m.run()}};return u&&u(w),m=new Oe(h),m.scheduler=c?()=>c(w,!1):w,v=e=>un(e,!1,m),_=m.onStop=()=>{let e=cn.get(m);if(e){if(d)d(e,4);else for(let t of e)t();cn.delete(m)}},t?a?w(!0):C=m.run():c?c(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function fn(e,t=1/0,n){if(t<=0||!y(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,qt(e))fn(e.value,t,n);else if(f(e))for(let r=0;r<e.length;r++)fn(e[r],t,n);else if(m(e)||p(e))e.forEach(e=>{fn(e,t,n)});else if(w(e)){for(let r in e)fn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&fn(e[r],t,n)}return e}function pn(e,t,n,r){try{return r?e(...r):e()}catch(e){hn(e,t,n)}}function mn(e,t,n,r){if(g(e)){let i=pn(e,t,n,r);return i&&b(i)&&i.catch(e=>{hn(e,t,n)}),i}if(f(e)){let i=[];for(let a=0;a<e.length;a++)i.push(mn(e[a],t,n,r));return i}}function hn(e,t,r,i=!0){let a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||n;if(t){let n=t.parent,i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;n;){let t=n.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a)===!1)return}n=n.parent}if(o){Ue(),pn(o,null,10,[e,i,a]),We();return}}gn(e,r,a,i,s)}function gn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var _n=[],vn=-1,yn=[],bn=null,xn=0,Sn=Promise.resolve(),Cn=null;function wn(e){let t=Cn||Sn;return e?t.then(this?e.bind(this):e):t}function Tn(e){let t=vn+1,n=_n.length;for(;t<n;){let r=t+n>>>1,i=_n[r],a=jn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function En(e){if(!(e.flags&1)){let t=jn(e),n=_n[_n.length-1];!n||!(e.flags&2)&&t>=jn(n)?_n.push(e):_n.splice(Tn(t),0,e),e.flags|=1,Dn()}}function Dn(){Cn||=Sn.then(Mn)}function On(e){if(!f(e))bn&&e.id===-1?bn.splice(xn+1,0,e):e.flags&1||(yn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)yn.push(e[t]);Dn()}function kn(e,t,n=vn+1){for(;n<_n.length;n++){let t=_n[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;_n.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function An(e){if(yn.length){let e=[...new Set(yn)].sort((e,t)=>jn(e)-jn(t));if(yn.length=0,bn){for(let t=0;t<e.length;t++)bn.push(e[t]);return}for(bn=e,xn=0;xn<bn.length;xn++){let e=bn[xn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}bn=null,xn=0}}var jn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Mn(e){try{for(vn=0;vn<_n.length;vn++){let e=_n[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<_n.length;vn++){let e=_n[vn];e&&(e.flags&=-2)}vn=-1,_n.length=0,An(e),Cn=null,(_n.length||yn.length)&&Mn(e)}}var Nn=null,Pn=null;function Fn(e){let t=Nn;return Nn=e,Pn=e&&e.type.__scopeId||null,t}function In(e,t=Nn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&wa(-1);let i=Fn(t),a=ba.length,o;try{o=e(...n)}finally{for(let e=ba.length;e>a;e--)Sa();Fn(i),r._d&&wa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ln(e,t){if(Nn===null)return e;let r=ro(Nn),i=e.dirs||=[];for(let e=0;e<t.length;e++){let[a,o,s,c=n]=t[e];a&&(g(a)&&(a={mounted:a,updated:a}),a.deep&&fn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Rn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ue(),mn(c,n,8,[e.el,s,e,t]),We())}}function zn(e,t){if(Ua){let n=Ua.provides,r=Ua.parent&&Ua.parent.provides;r===n&&(n=Ua.provides=Object.create(r)),n[e]=t}}function Bn(e,t,n=!1){let r=Wa();if(r||Ei){let i=Ei?Ei._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&g(t)?t.call(r&&r.proxy):t}}function Vn(){return!!(Wa()||Ei)}var Hn=Symbol.for(`v-scx`),Un=()=>Bn(Hn);function Wn(e,t){return Kn(e,null,{flush:`sync`})}function Gn(e,t,n){return Kn(e,t,n)}function Kn(e,t,r=n){let{immediate:a,deep:o,flush:s,once:l}=r,u=c({},r),d=t&&a||!t&&s!==`post`,f;if(Xa){if(s===`sync`){let e=Un();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=i,e.resume=i,e.pause=i,e}}let p=Ua;u.call=(e,t,n)=>mn(e,p,t,n);let m=!1;s===`post`?u.scheduler=e=>{ia(e,p&&p.suspense)}:s!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():En(e)}),u.augmentJob=e=>{t&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=dn(e,t,u);return Xa&&(f?f.push(h):d&&h()),h}function qn(e,t,n){let r=this.proxy,i=_(e)?e.includes(`.`)?Jn(r,e):()=>r[e]:e.bind(r,r),a;g(t)?a=t:(a=t.handler,n=t);let o=qa(this),s=Kn(i,a.bind(r),n);return o(),s}function Jn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Yn=new WeakMap,Xn=Symbol(`_vte`),Zn=e=>e.__isTeleport,Qn=e=>e&&(e.disabled||e.disabled===``),$n=e=>e&&(e.defer||e.defer===``),er=e=>typeof SVGElement<`u`&&e instanceof SVGElement,tr=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,nr=(e,t)=>{let n=e&&e.to;return _(n)?t?t(n):null:n},rr={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Qn(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Qn(e.props),r=e.target=nr(e.props,m),a=cr(r,e,h,p);r&&(o!==`svg`&&er(r)?o=`svg`:o!==`mathml`&&tr(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),sr(e,!1)))},S=e=>{let t=()=>{if(Yn.get(e)===t){if(Yn.delete(e),Qn(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),sr(e,!0)}x(e)}};Yn.set(e,t),ia(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),$n(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),sr(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=Yn.get(e);if(u){u.flags|=8,Yn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Qn(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||er(p)?o=`svg`:(o===`mathml`||tr(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),ua(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ir(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=nr(t.props,m);e&&(t.target=e,ir(t,e,null,l,0))}else g&&ir(t,p,h,l,1);sr(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Qn(f),m=a||!p,h=Yn.get(e);if(h&&(h.flags|=8,Yn.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:ir,hydrate:ar};function ir(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!Yn.has(e)&&(!d||Qn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function ar(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=nr(t.props,c),h=Qn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||cr(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||cr(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),sr(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var or=rr;function sr(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function cr(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[Xn]=o,e&&(r(a,e,i),r(o,e,i)),o}var lr=Symbol(`_leaveCb`),ur=Symbol(`_enterCb`);function dr(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rr(()=>{e.isMounted=!0}),Vr(()=>{e.isUnmounting=!0}),e}var fr=[Function,Array],pr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fr,onEnter:fr,onAfterEnter:fr,onEnterCancelled:fr,onBeforeLeave:fr,onLeave:fr,onAfterLeave:fr,onLeaveCancelled:fr,onBeforeAppear:fr,onAppear:fr,onAfterAppear:fr,onAppearCancelled:fr},mr=e=>{let t=e.subTree;return t.component?mr(t.component):t},hr={name:`BaseTransition`,props:pr,setup(e,{slots:t}){let n=Wa(),r=dr();return()=>{let i=t.default&&Cr(t.default(),!0),a=i&&i.length?gr(i):n.subTree?W():void 0;if(!a)return;let o=F(e),{mode:s}=o;if(r.isLeaving)return br(a);let c=xr(a);if(!c)return br(a);let l=yr(c,o,r,n,e=>l=e);c.type!==va&&Sr(c,l);let u=n.subTree&&xr(n.subTree);if(u&&u.type!==va&&!Oa(u,c)&&mr(n).type!==va){let e=yr(u,o,r,n);if(Sr(u,e),s===`out-in`&&c.type!==va)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},br(a);s===`in-out`&&c.type!==va?e.delayLeave=(e,t,n)=>{let i=vr(r,u);i[String(u.key)]=u,e[lr]=()=>{t(),e[lr]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function gr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==va){t=n;break}}return t}var _r=hr;function vr(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function yr(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=vr(n,e),C=(e,t)=>{e&&mn(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),f(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},T={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted){if(a)r=_||c;else return}t[lr]&&t[lr](!0);let i=S[x];i&&Oa(e,i)&&i.el[lr]&&i.el[lr](),C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=d;if(!n.isMounted){if(a)r=v||l,i=y||u,o=b||d;else return}let s=!1;t[ur]=e=>{s||(s=!0,C(e?o:i,[t]),T.delayedLeave&&T.delayedLeave(),t[ur]=void 0)};let c=t[ur].bind(null,!1);r?w(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[ur]&&t[ur](!0),n.isUnmounting)return r();C(p,[t]);let a=!1;t[lr]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[lr]=void 0,S[i]===e&&delete S[i])};let o=t[lr].bind(null,!1);S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=yr(e,t,n,r,i);return i&&i(a),a}};return T}function br(e){if(Ar(e))return e=Na(e),e.children=null,e}function xr(e){if(!Ar(e))return Zn(e.type)&&e.children?gr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&g(n.default))return n.default()}}function Sr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;Sr(Zn(n.type)&&xr(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Cr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===z?(o.patchFlag&128&&i++,r=r.concat(Cr(o.children,t,s))):(t||o.type!==va)&&r.push(s==null?o:Na(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function R(e,t){return g(e)?c({name:e.name},t,{setup:e}):e}function wr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Tr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Er=new WeakMap;function Dr(e,t,r,i,o=!1){if(f(e)){e.forEach((e,n)=>Dr(e,t&&(f(t)?t[n]:t),r,i,o));return}if(kr(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Dr(e,t,r,i.component.subTree);return}let s=i.shapeFlag&4?ro(i.component):i.el,c=o?null:s,{i:u,r:p}=e,m=t&&t.r,h=u.refs===n?u.refs={}:u.refs,v=u.setupState,y=F(v),b=v===n?a:e=>!Tr(h,e)&&d(y,e),x=(e,t)=>!(t&&Tr(h,t));if(m!=null&&m!==p){if(Or(t),_(m))h[m]=null,b(m)&&(v[m]=null);else if(qt(m)){let e=t;x(m,e.k)&&(m.value=null),e.k&&(h[e.k]=null)}}if(g(p))pn(p,u,12,[c,h]);else{let t=_(p),n=qt(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:h[p]:x(p)||!e.k?p.value:h[e.k];if(o)f(n)&&l(n,s);else if(f(n))n.includes(s)||n.push(s);else if(t)h[p]=[s],b(p)&&(v[p]=h[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(h[e.k]=t)}}else t?(h[p]=c,b(p)&&(v[p]=c)):n&&(x(p,e.k)&&(p.value=c),e.k&&(h[e.k]=c))};if(c){let t=()=>{i(),Er.delete(e)};t.id=-1,Er.set(e,t),ia(t,r)}else Or(e),i()}}}function Or(e){let t=Er.get(e);t&&(t.flags|=8,Er.delete(e))}se().requestIdleCallback,se().cancelIdleCallback;var kr=e=>!!e.type.__asyncLoader,Ar=e=>e.type.__isKeepAlive;function jr(e,t){Nr(e,`a`,t)}function Mr(e,t){Nr(e,`da`,t)}function Nr(e,t,n=Ua){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Fr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Ar(e.parent.vnode)&&Pr(r,t,n,e),e=e.parent}}function Pr(e,t,n,r){let i=Fr(t,e,r,!0);Hr(()=>{l(r[t],i)},n)}function Fr(e,t,n=Ua,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ue();let i=qa(n),a=mn(t,n,e,r);return i(),We(),a};return r?i.unshift(a):i.push(a),a}}var Ir=e=>(t,n=Ua)=>{(!Xa||e===`sp`)&&Fr(e,(...e)=>t(...e),n)},Lr=Ir(`bm`),Rr=Ir(`m`),zr=Ir(`bu`),Br=Ir(`u`),Vr=Ir(`bum`),Hr=Ir(`um`),Ur=Ir(`sp`),Wr=Ir(`rtg`),Gr=Ir(`rtc`);function Kr(e,t=Ua){Fr(`ec`,e,t)}var qr=`components`,Jr=Symbol.for(`v-ndc`);function Yr(e){return _(e)?Xr(qr,e,!1)||e:e||Jr}function Xr(e,t,n=!0,r=!1){let i=Nn||Ua;if(i){let n=i.type;if(e===qr){let e=io(n,!1);if(e&&(e===t||e===k(t)||e===ee(k(t))))return n}let a=Zr(i[e]||n[e],t)||Zr(i.appContext[e],t);return!a&&r?n:a}}function Zr(e,t){return e&&(e[t]||e[k(t)]||e[ee(k(t))])}function Qr(e,t,n,r){let i,a=n&&n[r],o=f(e);if(o||_(e)){let n=o&&Bt(e),r=!1,s=!1;n&&(r=!Ht(e),s=Vt(e),e=it(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Kt(Gt(e[n])):Gt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(y(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function $r(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(f(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{let t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function ei(e,t,n,r,i,a){if(n??={},Nn.ce||Nn.parent&&kr(Nn.parent)&&Nn.parent.ce){let e=a!=null&&n.key==null?c({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),B(),Ea(z,null,[U(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let s=ba.length;B();let l;try{let i=o&&ti(o(n)),s=n.key||a||i&&i.key;l=Ea(z,{key:(s&&!v(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=ba.length;e>s;e--)Sa();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+`-s`]),l}function ti(e){return e.some(e=>!Da(e)||!(e.type===va||e.type===z&&!ti(e.children)))?e:null}var ni=e=>e?Ya(e)?ro(e):ni(e.parent):null,ri=c(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ni(e.parent),$root:e=>ni(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>pi(e),$forceUpdate:e=>e.f||=()=>{En(e.update)},$nextTick:e=>e.n||=wn.bind(e.proxy),$watch:e=>qn.bind(e)}),ii=(e,t)=>e!==n&&!e.__isScriptSetup&&d(e,t),ai={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(t[0]!==`$`){let e=s[t];if(e!==void 0)switch(e){case 1:return i[t];case 2:return a[t];case 4:return r[t];case 3:return o[t]}else if(ii(i,t))return s[t]=1,i[t];else if(a!==n&&d(a,t))return s[t]=2,a[t];else if(d(o,t))return s[t]=3,o[t];else if(r!==n&&d(r,t))return s[t]=4,r[t];else ci&&(s[t]=0)}let u=ri[t],f,p;if(u)return t===`$attrs`&&et(e.attrs,`get`,``),u(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(r!==n&&d(r,t))return s[t]=4,r[t];if(p=l.config.globalProperties,d(p,t))return p[t]},set({_:e},t,r){let{data:i,setupState:a,ctx:o}=e;return ii(a,t)?(a[t]=r,!0):i!==n&&d(i,t)?(i[t]=r,!0):d(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(o[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==n&&c[0]!==`$`&&d(e,c)||ii(t,c)||d(o,c)||d(i,c)||d(ri,c)||d(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?d(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function oi(e){return f(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}function si(e,t){return!e||!t?e||t:f(e)&&f(t)?e.concat(t):c({},oi(e),oi(t))}var ci=!0;function li(e){let t=pi(e),n=e.proxy,r=e.ctx;ci=!1,t.beforeCreate&&di(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:h,updated:_,activated:v,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:E,renderTriggered:D,errorCaptured:O,serverPrefetch:k,expose:A,inheritAttrs:j,components:ee,directives:te,filters:M}=t;if(u&&ui(u,r,null),s)for(let e in s){let t=s[e];g(t)&&(r[e]=t.bind(n))}if(a){let t=a.call(n,n);y(t)&&(e.data=It(t))}if(ci=!0,o)for(let e in o){let t=o[e],a=G({get:g(t)?t.bind(n,n):g(t.get)?t.get.bind(n,n):i,set:!g(t)&&g(t.set)?t.set.bind(n):i});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)fi(c[e],r,n,e);if(l){let e=g(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{zn(t,e[t])})}d&&di(d,e,`c`);function ne(e,t){f(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(ne(Lr,p),ne(Rr,m),ne(zr,h),ne(Br,_),ne(jr,v),ne(Mr,b),ne(Kr,O),ne(Gr,E),ne(Wr,D),ne(Vr,S),ne(Hr,w),ne(Ur,k),f(A)){if(A.length){let t=e.exposed||={};A.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}T&&e.render===i&&(e.render=T),j!=null&&(e.inheritAttrs=j),ee&&(e.components=ee),te&&(e.directives=te),k&&wr(e)}function ui(e,t,n=i){f(e)&&(e=vi(e));for(let n in e){let r=e[n],i;i=y(r)?`default`in r?Bn(r.from||n,r.default,!0):Bn(r.from||n):Bn(r),qt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function di(e,t,n){mn(f(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function fi(e,t,n,r){let i=r.includes(`.`)?Jn(n,r):()=>n[r];if(_(e)){let n=t[e];g(n)&&Gn(i,n)}else if(g(e))Gn(i,e.bind(n));else if(y(e)){if(f(e))e.forEach(e=>fi(e,t,n,r));else{let r=g(e.handler)?e.handler.bind(n):t[e.handler];g(r)&&Gn(i,r,e)}}}function pi(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>mi(c,e,o,!0)),mi(c,t,o)),y(t)&&a.set(t,c),c}function mi(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&mi(e,a,n,!0),i&&i.forEach(t=>mi(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=hi[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var hi={data:gi,props:xi,emits:xi,methods:bi,computed:bi,beforeCreate:yi,created:yi,beforeMount:yi,mounted:yi,beforeUpdate:yi,updated:yi,beforeDestroy:yi,beforeUnmount:yi,destroyed:yi,unmounted:yi,activated:yi,deactivated:yi,errorCaptured:yi,serverPrefetch:yi,components:bi,directives:bi,watch:Si,provide:gi,inject:_i};function gi(e,t){return t?e?function(){return c(g(e)?e.call(this,this):e,g(t)?t.call(this,this):t)}:t:e}function _i(e,t){return bi(vi(e),vi(t))}function vi(e){if(f(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function yi(e,t){return e?[...new Set([].concat(e,t))]:t}function bi(e,t){return e?c(Object.create(null),e,t):t}function xi(e,t){return e?f(e)&&f(t)?[...new Set([...e,...t])]:c(Object.create(null),oi(e),oi(t??{})):t}function Si(e,t){if(!e)return t;if(!t)return e;let n=c(Object.create(null),e);for(let r in t)n[r]=yi(e[r],t[r]);return n}function Ci(){return{app:null,config:{isNativeTag:a,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var wi=0;function Ti(e,t){return function(n,r=null){g(n)||(n=c({},n)),r!=null&&!y(r)&&(r=null);let i=Ci(),a=new WeakSet,o=[],s=!1,l=i.app={_uid:wi++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:so,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&g(e.install)?(a.add(e),e.install(l,...t)):g(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,c){if(!s){let u=l._ceVNode||U(n,r);return u.appContext=i,c===!0?c=`svg`:c===!1&&(c=void 0),o&&t?t(u,a):e(u,a,c),s=!0,l._container=a,a.__vue_app__=l,ro(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(mn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Ei;Ei=l;try{return e()}finally{Ei=t}}};return l}}var Ei=null;function Di(e,t,r=n){let i=Wa(),a=k(t),o=j(t),s=Oi(e,a),c=en((s,c)=>{let l,u=n,d;return Wn(()=>{let t=e[a];M(l,t)&&(l=t,c())}),{get(){return s(),r.get?r.get(l):l},set(e){let s=r.set?r.set(e):e;if(!M(s,l)&&!(u!==n&&M(e,u)))return;let f=i.vnode.props,p=!!(f&&(t in f||a in f||o in f)&&(`onUpdate:${t}`in f||`onUpdate:${a}`in f||`onUpdate:${o}`in f));p||(l=e,c()),i.emit(`update:${t}`,s),M(e,u)&&(M(e,s)&&!M(s,d)||p&&u!==n&&!M(s,l))&&c(),u=e,d=s}}});return c[Symbol.iterator]=()=>{let e=0;return{next(){return e<2?{value:e++?s||n:c,done:!1}:{done:!0}}}},c}var Oi=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${k(t)}Modifiers`]||e[`${j(t)}Modifiers`];function ki(e,t,...r){if(e.isUnmounted)return;let i=e.vnode.props||n,a=r,o=t.startsWith(`update:`),s=o&&Oi(i,t.slice(7));s&&(s.trim&&(a=r.map(e=>_(e)?e.trim():e)),s.number&&(a=r.map(ie)));let c,l=i[c=te(t)]||i[c=te(k(t))];!l&&o&&(l=i[c=te(j(t))]),l&&mn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,mn(u,e,6,a)}}var Ai=new WeakMap;function ji(e,t,n=!1){let r=n?Ai:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!g(e)){let r=e=>{let n=ji(e,t,!0);n&&(s=!0,c(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(y(e)&&r.set(e,null),null):(f(a)?a.forEach(e=>o[e]=null):c(o,a),y(e)&&r.set(e,o),o)}function Mi(e,t){return!e||!o(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),d(e,t[0].toLowerCase()+t.slice(1))||d(e,j(t))||d(e,t))}function Ni(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Fn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Fa(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Fa(e.length>1?e(f,{attrs:c,slots:o,emit:l}):e(f,null)),y=t.props?c:Pi(c)}}catch(t){ba.length=0,hn(t,e,1),v=U(va)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(s)&&(y=Fi(y,a)),b=Na(b,y,!1,!0))}return n.dirs&&(b=Na(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Sr(Zn(b.type)&&xr(b)||b,n.transition),v=b,Fn(_),v}var Pi=e=>{let t;for(let n in e)(n===`class`||n===`style`||o(n))&&((t||={})[n]=e[n]);return t},Fi=(e,t)=>{let n={};for(let r in e)(!s(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ii(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Li(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Ri(o,r,n)&&!Mi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||Li(r,o,l):!!o;return!1}function Li(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Ri(t,e,a)&&!Mi(n,a))return!0}return!1}function Ri(e,t,n){let r=e[n],i=t[n];return n===`style`&&y(r)&&y(i)?!ve(r,i):r!==i}function zi({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Bi={},Vi=()=>Object.create(Bi),Hi=e=>Object.getPrototypeOf(e)===Bi;function Ui(e,t,n,r=!1){let i={},a=Vi();e.propsDefaults=Object.create(null),Gi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Lt(i):e.type.props?i:a,e.attrs=a}function Wi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=F(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Mi(e.emitsOptions,o))continue;let u=t[o];if(c){if(d(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=k(o);i[t]=Ki(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{Gi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!d(t,a)&&((r=j(a))===a||!d(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Ki(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!d(t,e))&&(delete a[e],l=!0)}l&&tt(e.attrs,`set`,``)}function Gi(e,t,r,i){let[a,o]=e.propsOptions,s=!1,c;if(t)for(let n in t){if(E(n))continue;let l=t[n],u;a&&d(a,u=k(n))?!o||!o.includes(u)?r[u]=l:(c||={})[u]=l:Mi(e.emitsOptions,n)||(!(n in i)||l!==i[n])&&(i[n]=l,s=!0)}if(o){let t=F(r),i=c||n;for(let n=0;n<o.length;n++){let s=o[n];r[s]=Ki(a,t,s,i[s],e,!d(i,s))}}return s}function Ki(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=d(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&g(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=qa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===j(n))&&(r=!0))}return r}var qi=new WeakMap;function Ji(e,t,i=!1){let a=i?qi:t.propsCache,o=a.get(e);if(o)return o;let s=e.props,l={},u=[],p=!1;if(!g(e)){let n=e=>{p=!0;let[n,r]=Ji(e,t,!0);c(l,n),r&&u.push(...r)};!i&&t.mixins.length&&t.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}if(!s&&!p)return y(e)&&a.set(e,r),r;if(f(s))for(let e=0;e<s.length;e++){let t=k(s[e]);Yi(t)&&(l[t]=n)}else if(s)for(let e in s){let t=k(e);if(Yi(t)){let n=s[e],r=l[t]=f(n)||g(n)?{type:n}:c({},n),i=r.type,a=!1,o=!0;if(f(i))for(let e=0;e<i.length;++e){let t=i[e],n=g(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=g(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||d(r,`default`))&&u.push(t)}}let m=[l,u];return y(e)&&a.set(e,m),m}function Yi(e){return e[0]!==`$`&&!E(e)}var Xi=e=>e===`_`||e===`_ctx`||e===`$stable`,Zi=e=>f(e)?e.map(Fa):[Fa(e)],Qi=(e,t,n)=>{if(t._n)return t;let r=In((...e)=>Zi(t(...e)),n);return r._c=!1,r},$i=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Xi(n))continue;let i=e[n];if(g(i))t[n]=Qi(n,i,r);else if(i!=null){let e=Zi(i);t[n]=()=>e}}},ea=(e,t)=>{let n=Zi(t);e.slots.default=()=>n},ta=(e,t,n)=>{for(let r in t)(n||!Xi(r))&&(e[r]=t[r])},na=(e,t,n)=>{let r=e.slots=Vi();if(e.vnode.shapeFlag&32){let e=t._;e?(ta(r,t,n),n&&re(r,`_`,e,!0)):$i(t,r)}else t&&ea(e,t)},ra=(e,t,r)=>{let{vnode:i,slots:a}=e,o=!0,s=n;if(i.shapeFlag&32){let e=t._;e?r&&e===1?o=!1:ta(a,t,r):(o=!t.$stable,$i(t,a)),s=t}else t&&(ea(e,t),s={default:1});if(o)for(let e in a)!Xi(e)&&s[e]==null&&delete a[e]},ia=ga;function aa(e){return oa(e)}function oa(e,t){let a=se();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=i,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Oa(e,t)&&(r=ge(e),de(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case _a:y(e,t,n,r);break;case va:b(e,t,n,r);break;case ya:e??x(t,n,r,o);break;case z:ee(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?te(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,ye)}u!=null&&i?Dr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Dr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)T(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),k(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},T=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&O(e.children,d,null,r,i,sa(e,a),s,u),_&&Rn(e,null,r,`created`),D(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!E(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&za(f,r,e)}_&&Rn(e,null,r,`beforeMount`);let v=la(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&ia(()=>{try{f&&za(f,r,e),v&&g.enter(d),_&&Rn(e,null,r,`mounted`)}finally{}},i)},D=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||ha(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;D(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Ia(e[l]):Fa(e[l]);v(null,c,t,n,r,i,a,o,s)}},k=(e,t,r,i,a,o,s)=>{let l=t.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=e.patchFlag&16;let m=e.props||n,h=t.props||n,g;if(r&&ca(r,!1),(g=h.onVnodeBeforeUpdate)&&za(g,r,t,e),f&&Rn(t,e,r,`beforeUpdate`),r&&ca(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?A(e.dynamicChildren,d,l,r,i,sa(t,a),o):s||oe(e,t,l,null,r,i,sa(t,a),o,!1),u>0){if(u&16)j(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==t.children&&p(l,t.children)}else!s&&d==null&&j(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&ia(()=>{g&&za(g,r,t,e),f&&Rn(t,e,r,`updated`)},i)},A=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===z||!Oa(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},j=(e,t,r,i,a)=>{if(t!==r){if(t!==n)for(let n in t)!E(n)&&!(n in r)&&c(e,n,t[n],null,a,i);for(let n in r){if(E(n))continue;let o=r[n],s=t[n];o!==s&&n!==`value`&&c(e,n,s,o,a,i)}`value`in r&&c(e,`value`,t.value,r.value,a)}},ee=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),O(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(A(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&ua(e,t,!0)):oe(e,t,n,f,i,a,s,c,l)},te=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,a,o,c):re(e,t,c)},M=(e,t,n,r,i,a,o)=>{let s=e.component=Ha(e,r,i);if(Ar(e)&&(s.ctx.renderer=ye),Za(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ie,o),!e.el){let r=s.subTree=U(va);b(null,r,t,n),e.placeholder=r.el}}else ie(s,e,t,n,i,a,o)},re=(e,t,n)=>{let r=t.component=e.component;if(Ii(e,t,n)){if(r.asyncDep&&!r.asyncResolved){ae(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},ie=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=fa(e);if(n){t&&(t.el=c.el,ae(e,t,o)),n.asyncDep.then(()=>{ia(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;ca(e,!1),t?(t.el=c.el,ae(e,t,o)):t=c,n&&ne(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&za(d,s,t,c),ca(e,!0);let f=Ni(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ge(p),e,i,a),t.el=f.el,u===null&&zi(e,f.el),r&&ia(r,i),(d=t.props&&t.props.onVnodeUpdated)&&ia(()=>za(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=kr(t);if(ca(e,!1),l&&ne(l),!m&&(o=c&&c.onVnodeBeforeMount)&&za(o,d,t),ca(e,!0),s&&be){let t=()=>{e.subTree=Ni(e),be(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Ni(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&ia(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;ia(()=>za(o,d,e),i)}(t.shapeFlag&256||d&&kr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&ia(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Oe(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>En(u),ca(e,!0),l()},ae=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Wi(e,t.props,r,n),ra(e,t.children,n),Ue(),kn(e),We()},oe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){le(l,d,n,r,i,a,o,s,c);return}if(f&256){ce(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&he(l,i,a),d!==l&&p(n,d)):u&16?m&16?le(l,d,n,r,i,a,o,s,c):he(l,i,a,!0):(u&8&&p(n,``),m&16&&O(d,n,r,i,a,o,s,c))},ce=(e,t,n,i,a,o,s,c,l)=>{e||=r,t||=r;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let r=t[p]=l?Ia(t[p]):Fa(t[p]);v(e[p],r,n,null,a,o,s,c,l)}u>d?he(e,a,o,!0,!1,f):O(t,n,i,a,o,s,c,l,f)},le=(e,t,n,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let r=e[u],i=t[u]=l?Ia(t[u]):Fa(t[u]);if(Oa(r,i))v(r,i,n,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let r=e[f],i=t[p]=l?Ia(t[p]):Fa(t[p]);if(Oa(r,i))v(r,i,n,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,r=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Ia(t[u]):Fa(t[u]),n,r,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)de(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Ia(t[u]):Fa(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let r=e[u];if(y>=b){de(r,a,o,!0);continue}let i;if(r.key!=null)i=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Oa(r,t[_])){i=_;break}i===void 0?de(r,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(r,t[i],n,null,a,o,s,c,l),y++)}let w=x?da(C):r;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,r=t[e],f=t[e+1],p=e+1<d?f.el||ma(f):i;C[u]===0?v(null,r,n,p,a,o,s,c,l):x&&(_<0||u!==w[_]?ue(r,n,p,2):_--)}}},ue=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ue(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,ye);return}if(c===z){o(a,t,n);for(let e=0;e<u.length;e++)ue(u[e],t,n,r);o(e.anchor,t,n);return}if(c===ya){S(e,t,n);return}if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[lr]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),ia(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[lr];a._isLeaving&&a[lr](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},de=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ue(),Dr(s,null,n,e,!0),We()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!kr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&za(_,t,e),u&6)me(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Rn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,ye,r):l&&!l.hasOnce&&(a!==z||d>0&&d&64)?he(l,t,n,!1,!0):(a===z&&d&384||!i&&u&16)&&he(c,t,n),r&&fe(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&ia(()=>{_&&za(_,t,e),h&&Rn(e,null,t,`unmounted`),v&&(e.el=null)},n)},fe=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===z){pe(n,r);return}if(t===ya){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},pe=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},me=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;pa(c),pa(l),r&&ne(r),i.stop(),a&&(a.flags|=8,de(o,e,t,n)),s&&ia(s,t),ia(()=>{e.isUnmounted=!0},t)},he=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)de(e[o],t,n,r,i)},ge=e=>{if(e.shapeFlag&6)return ge(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Xn];return n?h(n):t},_e=!1,ve=(e,t,n)=>{let r;e==null?t._vnode&&(de(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,_e||=(_e=!0,kn(r),An(),!1)},ye={p:v,um:de,m:ue,r:fe,mt:M,mc:O,pc:oe,pbc:A,n:ge,o:e},N,be;return t&&([N,be]=t(ye)),{render:ve,hydrate:N,createApp:Ti(ve,N)}}function sa({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function ca({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function la(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ua(e,t,n=!1){let r=e.children,i=t.children;if(f(r)&&f(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ia(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&ua(t,a)),a.type===_a&&(a.patchFlag===-1&&(a=i[e]=Ia(a)),a.el=t.el),a.type===va&&!a.el&&(a.el=t.el)}}function da(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function fa(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:fa(t)}function pa(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ma(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?ma(t.subTree):null}var ha=e=>e.__isSuspense;function ga(e,t){t&&t.pendingBranch?f(e)?t.effects.push(...e):t.effects.push(e):On(e)}var z=Symbol.for(`v-fgt`),_a=Symbol.for(`v-txt`),va=Symbol.for(`v-cmt`),ya=Symbol.for(`v-stc`),ba=[],xa=null;function B(e=!1){ba.push(xa=e?null:[])}function Sa(){ba.pop(),xa=ba[ba.length-1]||null}var Ca=1;function wa(e,t=!1){Ca+=e,e<0&&xa&&t&&(xa.hasOnce=!0)}function Ta(e){return e.dynamicChildren=Ca>0?xa||r:null,Sa(),Ca>0&&xa&&xa.push(e),e}function V(e,t,n,r,i,a){return Ta(H(e,t,n,r,i,a,!0))}function Ea(e,t,n,r,i){return Ta(U(e,t,n,r,i,!0))}function Da(e){return e?e.__v_isVNode===!0:!1}function Oa(e,t){return e.type===t.type&&e.key===t.key}var ka=({key:e})=>e??null,Aa=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:_(e)||qt(e)||g(e)?{i:Nn,r:e,k:t,f:!!n}:e);function H(e,t=null,n=null,r=0,i=null,a=e===z?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ka(t),ref:t&&Aa(t),scopeId:Pn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Nn};return s?(La(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=_(n)?8:16),Ca>0&&!o&&xa&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&xa.push(c),c}var U=ja;function ja(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Jr)&&(e=va),Da(e)){let r=Na(e,t,!0);return n&&La(r,n),Ca>0&&!a&&xa&&(r.shapeFlag&6?xa[xa.indexOf(e)]=r:xa.push(r)),r.patchFlag=-2,r}if(ao(e)&&(e=e.__vccOpts),t){t=Ma(t);let{class:e,style:n}=t;e&&!_(e)&&(t.class=pe(e)),y(n)&&(Ut(n)&&!f(n)&&(n=c({},n)),t.style=ce(n))}let o=_(e)?1:ha(e)?128:Zn(e)?64:y(e)?4:g(e)?2:0;return H(e,t,n,r,i,o,a,!0)}function Ma(e){return e?Ut(e)||Hi(e)?c({},e):e:null}function Na(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Ra(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ka(l),ref:t&&t.ref?n&&a?f(a)?a.concat(Aa(t)):[a,Aa(t)]:Aa(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==z?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Na(e.ssContent),ssFallback:e.ssFallback&&Na(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Sr(u,c.clone(u)),u}function Pa(e=` `,t=0){return U(_a,null,e,t)}function W(e=``,t=!1){return t?(B(),Ea(va,null,e)):U(va,null,e)}function Fa(e){return e==null||typeof e==`boolean`?U(va):f(e)?U(z,null,e.slice()):Da(e)?Ia(e):U(_a,null,String(e))}function Ia(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Na(e)}function La(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(f(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),La(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Hi(t)?t._ctx=Nn:r===3&&Nn&&(Nn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(g(t)){if(r&65){La(e,{default:t});return}t={default:t,_ctx:Nn},n=32}else t=String(t),r&64?(n=16,t=[Pa(t)]):n=8;e.children=t,e.shapeFlag|=n}function Ra(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=pe([t.class,r.class]));else if(e===`style`)t.style=ce([t.style,r.style]);else if(o(e)){let n=t[e],i=r[e];i&&n!==i&&!(f(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!s(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function za(e,t,n,r=null){mn(e,t,7,[n,r])}var Ba=Ci(),Va=0;function Ha(e,t,r){let i=e.type,a=(t?t.appContext:e.appContext)||Ba,o={uid:Va++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ce(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ji(i,a),emitsOptions:ji(i,a),emit:null,emitted:null,propsDefaults:n,inheritAttrs:i.inheritAttrs,ctx:n,data:n,props:n,attrs:n,slots:n,refs:n,setupState:n,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ki.bind(null,o),e.ce&&e.ce(o),o}var Ua=null,Wa=()=>Ua||Nn,Ga,Ka;{let e=se(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Ga=t(`__VUE_INSTANCE_SETTERS__`,e=>Ua=e),Ka=t(`__VUE_SSR_SETTERS__`,e=>Xa=e)}var qa=e=>{let t=Ua;return Ga(e),e.scope.on(),()=>{e.scope.off(),Ga(t)}},Ja=()=>{Ua&&Ua.scope.off(),Ga(null)};function Ya(e){return e.vnode.shapeFlag&4}var Xa=!1;function Za(e,t=!1,n=!1){t&&Ka(t);let{props:r,children:i}=e.vnode,a=Ya(e);Ui(e,r,a,t),na(e,i,n||t);let o=a?Qa(e,t):void 0;return t&&Ka(!1),o}function Qa(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ai);let{setup:r}=n;if(r){Ue();let n=e.setupContext=r.length>1?no(e):null,i=qa(e),a=pn(r,e,0,[e.props,n]),o=b(a);if(We(),i(),(o||e.sp)&&!kr(e)&&wr(e),o){if(a.then(Ja,Ja),t)return a.then(n=>{Ka(!0);try{$a(e,n,t)}finally{Ka(!1)}}).catch(t=>{hn(t,e,0)});e.asyncDep=a}else $a(e,a,t)}else eo(e,t)}function $a(e,t,n){g(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:y(t)&&(e.setupState=Qt(t)),eo(e,n)}function eo(e,t,n){let r=e.type;e.render||=r.render||i;{let t=qa(e);Ue();try{li(e)}finally{We(),t()}}}var to={get(e,t){return et(e,`get`,``),e[t]}};function no(e){return{attrs:new Proxy(e.attrs,to),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ro(e){return e.exposed?e.exposeProxy||=new Proxy(Qt(Wt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ri)return ri[n](e)},has(e,t){return t in e||t in ri}}):e.proxy}function io(e,t=!0){return g(e)?e.displayName||e.name:e.name||t&&e.__name}function ao(e){return g(e)&&`__vccOpts`in e}var G=(e,t)=>on(e,t,Xa);function oo(e,t,n){try{wa(-1);let r=arguments.length;return r===2?y(t)&&!f(t)?Da(t)?U(e,null,[t]):U(e,t):U(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Da(n)&&(n=[n]),U(e,t,n))}finally{wa(1)}}var so=`3.5.41`,co=void 0,lo=typeof window<`u`&&window.trustedTypes;if(lo)try{co=lo.createPolicy(`vue`,{createHTML:e=>e})}catch{}var uo=co?e=>co.createHTML(e):e=>e,fo=`http://www.w3.org/2000/svg`,po=`http://www.w3.org/1998/Math/MathML`,mo=typeof document<`u`?document:null,ho=mo&&mo.createElement(`template`),go={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?mo.createElementNS(fo,e):t===`mathml`?mo.createElementNS(po,e):n?mo.createElement(e,{is:n}):mo.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>mo.createTextNode(e),createComment:e=>mo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mo.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ho.innerHTML=uo(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ho.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},_o=`transition`,vo=`animation`,yo=Symbol(`_vtc`),bo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xo=c({},pr,bo),So=(e=>(e.displayName=`Transition`,e.props=xo,e))((e,{slots:t})=>oo(_r,To(e),t)),Co=(e,t=[])=>{f(e)?e.forEach(e=>e(...t)):e&&e(...t)},wo=e=>e?f(e)?e.some(e=>e.length>1):e.length>1:!1;function To(e){let t={};for(let n in e)n in bo||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=s,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=Eo(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:T=b}=t,E=(e,t,n,r)=>{e._enterCancelled=r,ko(e,t?d:s),ko(e,t?u:o),n&&n()},D=(e,t)=>{e._isLeaving=!1,ko(e,f),ko(e,m),ko(e,p),t&&t()},O=e=>(t,n)=>{let i=e?w:y,o=()=>E(t,e,n);Co(i,[t,o]),Ao(()=>{ko(t,e?l:a),Oo(t,e?d:s),wo(i)||Mo(t,r,g,o)})};return c(t,{onBeforeEnter(e){Co(v,[e]),Oo(e,a),Oo(e,o)},onBeforeAppear(e){Co(C,[e]),Oo(e,l),Oo(e,u)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>D(e,t);Oo(e,f),e._enterCancelled?(Oo(e,p),Io(e)):(Io(e),Oo(e,p)),Ao(()=>{e._isLeaving&&(ko(e,f),Oo(e,m),wo(x)||Mo(e,r,_,n))}),Co(x,[e,n])},onEnterCancelled(e){E(e,!1,void 0,!0),Co(b,[e])},onAppearCancelled(e){E(e,!0,void 0,!0),Co(T,[e])},onLeaveCancelled(e){D(e),Co(S,[e])}})}function Eo(e){if(e==null)return null;if(y(e))return[Do(e.enter),Do(e.leave)];{let t=Do(e);return[t,t]}}function Do(e){return ae(e)}function Oo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[yo]||(e[yo]=new Set)).add(t)}function ko(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[yo];n&&(n.delete(t),n.size||(e[yo]=void 0))}function Ao(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var jo=0;function Mo(e,t,n,r){let i=e._endId=++jo,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=No(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function No(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${_o}Delay`),a=r(`${_o}Duration`),o=Po(i,a),s=r(`${vo}Delay`),c=r(`${vo}Duration`),l=Po(s,c),u=null,d=0,f=0;t===_o?o>0&&(u=_o,d=o,f=a.length):t===vo?l>0&&(u=vo,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?_o:vo:null,f=u?u===_o?a.length:c.length:0);let p=u===_o&&/\b(?:transform|all)(?:,|$)/.test(r(`${_o}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Po(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Fo(t)+Fo(e[n])))}function Fo(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function Io(e){return(e?e.ownerDocument:document).body.offsetHeight}function Lo(e,t,n){let r=e[yo];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ro=Symbol(`_vod`),zo=Symbol(`_vsh`),Bo=Symbol(``),Vo=/(?:^|;)\s*display\s*:/;function Ho(e,t,n){let r=e.style,i=_(n),a=!1;if(n&&!i){if(t){if(_(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Wo(r,t,``)}else for(let e in t)n[e]??Wo(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Wo(r,i,``):Jo(e,i,!_(t)&&t?t[i]:void 0,o)||Wo(r,i,o)}}else if(i){if(t!==n){let e=r[Bo];e&&(n+=`;`+e),r.cssText=n,a=Vo.test(n)}}else t&&e.removeAttribute(`style`);Ro in e&&(e[Ro]=a?r.display:``,e[zo]&&(r.display=`none`))}var Uo=/\s*!important$/;function Wo(e,t,n){if(f(n))n.forEach(n=>Wo(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=qo(e,t);Uo.test(n)?e.setProperty(j(r),n.replace(Uo,``),`important`):e[r]=n}}var Go=[`Webkit`,`Moz`,`ms`],Ko={};function qo(e,t){let n=Ko[t];if(n)return n;let r=k(t);if(r!==`filter`&&r in e)return Ko[t]=r;r=ee(r);for(let n=0;n<Go.length;n++){let i=Go[n]+r;if(i in e)return Ko[t]=i}return t}function Jo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&_(r)&&n===r}var Yo=`http://www.w3.org/1999/xlink`;function Xo(e,t,n,r,i,a=he(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Yo,t.slice(6,t.length)):e.setAttributeNS(Yo,t,n):n==null||a&&!ge(n)?e.removeAttribute(t):e.setAttribute(t,a?``:v(n)?String(n):n)}function Zo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?uo(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ge(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Qo(e,t,n,r){e.addEventListener(t,n,r)}function $o(e,t,n,r){e.removeEventListener(t,n,r)}var es=Symbol(`_vei`);function ts(e,t,n,r,i=null){let a=e[es]||(e[es]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=is(t);r?Qo(e,n,a[t]=cs(r,i),s):o&&($o(e,n,o,s),a[t]=void 0)}}var ns=/(Once|Passive|Capture)$/,rs=/^on:?(?:Once|Passive|Capture)$/;function is(e){let t,n;for(;(n=e.match(ns))&&!rs.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):j(e.slice(2)),t]}var as=0,os=Promise.resolve(),ss=()=>as||=(os.then(()=>as=0),Date.now());function cs(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(f(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&mn(e,t,5,a)}}else mn(r,t,5,[e])};return n.value=e,n.attached=ss(),n}var ls=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,us=(e,t,n,r,i,a)=>{let c=i===`svg`;t===`class`?Lo(e,r,c):t===`style`?Ho(e,n,r):o(t)?s(t)||ts(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):ds(e,t,r,c))?(Zo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Xo(e,t,r,c,a,t!==`value`)):e._isVueCE&&(fs(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!_(r)))?Zo(e,k(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Xo(e,t,r,c))};function ds(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&ls(t)&&g(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return ls(t)&&_(n)?!1:t in e}function fs(e,t){let n=e._def.props;if(!n)return!1;let r=k(t);return Array.isArray(n)?n.some(e=>k(e)===r):Object.keys(n).some(e=>k(e)===r)}var ps=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return f(t)?e=>ne(t,e):t};function ms(e){e.target.composing=!0}function hs(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var gs=Symbol(`_assign`),_s=Symbol(`_initialValue`);function vs(e,t,n){return t&&(e=e.trim()),n&&(e=ie(e)),e}var ys={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[_s]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[_s]=e.defaultValue.replace(/\r\n?/g,`
`))),e[gs]=ps(i);let a=r||i.props&&i.props.type===`number`;Qo(e,t?`change`:`input`,t=>{t.target.composing||e[gs](vs(e.value,n,a))}),(n||a)&&Qo(e,`change`,()=>{e.value=vs(e.value,n,a)}),t||(Qo(e,`compositionstart`,ms),Qo(e,`compositionend`,hs),Qo(e,`change`,hs))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[_s];delete e[_s],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[gs](vs(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[gs]=ps(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?ie(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},bs=[`ctrl`,`shift`,`alt`,`meta`],xs={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>bs.some(n=>e[`${n}Key`]&&!t.includes(n))},Ss=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=xs[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Cs={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},ws=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=j(n.key);if(t.some(e=>e===r||Cs[e]===r))return e(n)}))},Ts=c({patchProp:us},go),Es;function Ds(){return Es||=aa(Ts)}var Os=((...e)=>{let t=Ds().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=As(e);if(!r)return;let i=t._component;!g(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,ks(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function ks(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function As(e){return _(e)?document.querySelector(e):e}var js=typeof window<`u`,Ms,Ns=e=>Ms=e,Ps=Symbol();function Fs(e){return e&&typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`&&typeof e.toJSON!=`function`}var Is=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:typeof globalThis==`object`?globalThis:{HTMLElement:null};function Ls(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function Rs(e,t,n){let r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){Us(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function zs(e){let t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Bs(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{let t=new MouseEvent(`click`,{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});e.dispatchEvent(t)}}var Vs=typeof navigator==`object`?navigator:{userAgent:``},Hs=/Macintosh/.test(Vs.userAgent)&&/AppleWebKit/.test(Vs.userAgent)&&!/Safari/.test(Vs.userAgent),Us=js?typeof HTMLAnchorElement<`u`&&`download`in HTMLAnchorElement.prototype&&!Hs?Ws:`msSaveOrOpenBlob`in Vs?Gs:Ks:()=>{};function Ws(e,t=`download`,n){let r=document.createElement(`a`);r.download=t,r.rel=`noopener`,typeof e==`string`?(r.href=e,r.origin===location.origin?Bs(r):zs(r.href)?Rs(e,t,n):(r.target=`_blank`,Bs(r))):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){Bs(r)},0))}function Gs(e,t=`download`,n){if(typeof e==`string`){if(zs(e))Rs(e,t,n);else{let t=document.createElement(`a`);t.href=e,t.target=`_blank`,setTimeout(function(){Bs(t)})}}else navigator.msSaveOrOpenBlob(Ls(e,n),t)}function Ks(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return Rs(e,t,n);let i=e.type===`application/octet-stream`,a=/constructor/i.test(String(Is.HTMLElement))||`safari`in Is,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||Hs)&&typeof FileReader<`u`){let t=new FileReader;t.onloadend=function(){let e=t.result;if(typeof e!=`string`)throw r=null,Error(`Wrong reader.result type`);e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{let t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout(function(){URL.revokeObjectURL(t)},4e4)}}var{assign:qs}=Object;function Js(){let e=we(!0),t=e.run(()=>I({})),n=[],r=[],i=Wt({install(e){Ns(i),i._a=e,e.provide(Ps,i),e.config.globalProperties.$pinia=i,r.forEach(e=>n.push(e)),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}var Ys=()=>{};function Xs(e,t,n,r=Ys){e.add(t);let i=()=>{e.delete(t)&&r()};return!n&&Te()&&Ee(i),i}function Zs(e,...t){e.forEach(e=>{e(...t)})}var Qs=e=>e(),$s=Symbol(),ec=Symbol();function tc(e,t){e instanceof Map&&t instanceof Map?t.forEach((t,n)=>e.set(n,t)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(let n in t){if(!Object.hasOwn(t,n))continue;let r=t[n],i=e[n];e[n]=Fs(i)&&Fs(r)&&Object.hasOwn(e,n)&&!qt(r)&&!Bt(r)?tc(i,r):r}return e}var nc=Symbol();function rc(e){return!e||typeof e!=`object`||!Object.hasOwn(e,nc)}var{assign:ic}=Object;function ac(e){return!!(qt(e)&&e.effect)}function oc(e,t,n,r){let{state:i,actions:a,getters:o}=t,s=n.state.value[e],c;function l(){return s||(n.state.value[e]=i?i():{}),ic(tn(n.state.value[e]),a,Object.keys(o||{}).reduce((t,r)=>(t[r]=Wt(G(()=>{Ns(n);let t=n._s.get(e);return o[r].call(t,t)})),t),{}))}return c=sc(e,l,t,n,r,!0),c}function sc(e,t,n={},r,i,a){let o,s=ic({actions:{}},n),c={deep:!0},l,u,d=new Set,f=new Set,p,m=r.state.value[e];!a&&!m&&(r.state.value[e]={});let h;function g(t){let n;l=u=!1,typeof t==`function`?(t(r.state.value[e]),n={type:`patch function`,storeId:e,events:p}):(tc(r.state.value[e],t),n={type:`patch object`,payload:t,storeId:e,events:p});let i=h=Symbol();wn().then(()=>{h===i&&(l=!0)}),u=!0,Zs(d,n,r.state.value[e])}let _=a?function(){let{state:e}=n,t=e?e():{};this.$patch(e=>{ic(e,t)})}:Ys;function v(){o.stop(),d.clear(),f.clear(),r._s.delete(e)}let y=(t,n=``)=>{if($s in t)return t[ec]=n,t;let i=function(){Ns(r);let n=Array.from(arguments),a=new Set,o=new Set;function s(e){a.add(e)}function c(e){o.add(e)}Zs(f,{args:n,name:i[ec],store:b,after:s,onError:c});let l;try{l=t.apply(this&&this.$id===e?this:b,n)}catch(e){throw Zs(o,e),e}return l instanceof Promise?l.then(e=>(Zs(a,e),e)).catch(e=>(Zs(o,e),Promise.reject(e))):(Zs(a,l),l)};return i[$s]=!0,i[ec]=n,i},b=It({_p:r,$id:e,$onAction:Xs.bind(null,f),$patch:g,$reset:_,$subscribe(t,n={}){if(d.has(t))return Ys;let i=Xs(d,t,n.detached,()=>a()),a=o.run(()=>Gn(()=>r.state.value[e],r=>{(n.flush===`sync`?u:l)&&t({storeId:e,type:`direct`,events:p},r)},ic({},c,n)));return i},$dispose:v});r._s.set(e,b);let x=(r._a&&r._a.runWithContext||Qs)(()=>r._e.run(()=>(o=we()).run(()=>t({action:y}))));for(let t in x){let n=x[t];qt(n)&&!ac(n)||Bt(n)?a||(m&&rc(n)&&(qt(n)?n.value=m[t]:((n instanceof Set||n instanceof Map)&&n.clear(),tc(n,m[t]))),r.state.value[e][t]=n):typeof n==`function`&&(x[t]=y(n,t),s.actions[t]=n)}return ic(b,x),ic(F(b),x),Object.defineProperty(b,"$state",{get:()=>r.state.value[e],set:e=>{g(t=>{ic(t,e)})}}),r._p.forEach(e=>{let t=o.run(()=>e({store:b,app:r._a,pinia:r,options:s}));ic(b,t)}),m&&a&&n.hydrate&&n.hydrate(b.$state,m),l=!0,u=!0,b}function cc(e,t,n){let r,i=typeof t==`function`;r=i?n:t;function a(n,a){let o=Vn();return n||=o?Bn(Ps,null):null,n&&Ns(n),n=Ms,n._s.has(e)||(i?sc(e,t,r,n):oc(e,r,n)),n._s.get(e)}return a.$id=e,a}var lc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">\r
<style type="text/css">\r
	.st-st0{fill:none;stroke:#FF4A4F;}\r
	.st-st1{fill:none;stroke:#FFC63F;}\r
	.st-st2{fill:none;stroke:#0AFF1F;}\r
	.st-st3{fill:none;stroke:#0089F4;}\r
	.st-st4{fill:none;stroke:#A500F4;}\r
</style>\r
<path class="st-st0" d="M23,32.9c-1.7,0.1-5.1,0.6-8.4,3c-2.1,1.5-6.5,5.5-5.5,8.3c1.4,4.1,12.9,1.1,14.8,5.5\r
	c1.8,4.2-6.7,11.8-7.7,12.7c-2.5,2.2-5,3.7-6.8,4.6"/>\r
<path class="st-st1" d="M18.2,56.1c6.7,0,11.5-1.7,14.3-3c4.5-2.1,9.3-5.8,9-7.6c0-0.1-0.1-0.5-0.4-0.7c-0.8-0.3-2.2,1.3-2.7,2\r
	c-2.8,3.3-7.7,13.8-4.7,16c1,0.7,3.3,0.9,9.4-3.3"/>\r
<path class="st-st2" d="M60.8,50.2c-0.9-0.5-2.3-1.1-4-1.6c-1.5-0.4-3.1-0.8-4.4-0.6c-4.9,0.8-8.2,11.2-5.9,13.1\r
	c0.3,0.2,0.9,0.5,2.3,0.2c7.1-1.7,10.8-13.1,11.1-12.9c0.4,0.2-5.3,11.3-2.6,13.7c0.5,0.4,1,0.5,1.5,0.5"/>\r
<path class="st-st3" d="M63.1,48.9c0.8,0.1,3.3,0.6,3.9,2.4c0.3,0.9,0.1,1.8-0.2,2.5c-1.8,5.3-2.8,7.9-2.8,7.9c-0.4-0.1,1-8.2,6.6-13.1\r
	c0.8-0.7,2.4-2.1,3.3-1.6c2.3,1.3-3.4,14.2-1.2,15.3c0.4,0.2,1.3,0.1,3.3-1.9"/>\r
<path class="st-st4" d="M88.6,49.2c-3.1-0.8-4.9-0.1-5.9,0.5c-4.8,3-4,13.5-2.3,13.9c2.9,0.6,12.8-27.8,12.1-28.1\r
	c-0.7-0.3-6.5,23.5-6.5,27c0,0.5,0,1.9,0.8,2.4c0.4,0.2,0.8,0.2,1.1,0.1"/>\r
</svg>\r
`,uc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.stinky-penguin-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="stinky-penguin-st" d="M87.14,208.17c-0.11-2.14-2.14-3.53-4.27-5.34c0,0-3.63-3.1-7.48-8.55c-2.67-3.74-5.34-7.48-6.41-12.82\r
	c-0.32-1.82-0.53-3.74-2.14-5.34c-1.92-1.92-4.17-1.5-5.34-2.14c-4.59-2.46-2.67-24.25,9.61-44.87c3.74-6.3,12.71-19.76,34.18-34.18\r
	C148.13,66.31,203.04,58.2,226,62.9c3.2,0.64,12.6,2.99,24.57,1.07c8.01-1.28,11.32-3.85,18.16-5.34c5.13-1.07,15.38-2.67,33.11,0\r
	c68.05,10.36,113.23,44.87,113.23,44.87s37.17,30.98,32.05,38.46c-1.07,1.6-4.7,2.99-5.34,3.2c-1.82,0.75-3.2,0.85-4.27,2.14\r
	c-0.96,1.18-1.07,2.56-1.07,3.2c-0.32,5.66,0,26.28,0,28.84c0,11.32-1.92,16.66-3.2,19.23c-1.71,3.2-2.46,4.81-4.27,6.41\r
	c-1.92,1.71-3.63,2.35-4.27,4.27c-0.64,1.92,0.11,3.85,0.43,4.49c1.28,3.31,2.88,11.86,4.91,29.7c2.56,29.8-5.02,47.22-12.82,57.68\r
	c-8.97,11.96-37.28,40.38-50.21,53.41c-2.24,2.24-7.69,7.69-6.41,12.82c1.82,7.26,15.28,6.09,19.23,14.96\r
	c2.46,5.55,0.32,12.82-3.2,17.09c-2.56,3.1-6.73,5.88-36.32,6.41c-27.56,0.53-32.58-1.71-35.25-3.2\r
	c-8.33-4.49-8.44-8.87-17.09-11.75c-5.66-1.92-12.07-1.28-24.57,0c-14.31,1.5-21.47,2.35-23.5,5.34\r
	c-3.53,5.45,2.35,11.22,2.14,29.91c0,5.23,0,7.9-1.07,9.61c-4.7,8.33-19.44,5.02-52.34,4.27c-26.71-0.64-42.94,1.07-45.93-6.41\r
	c-0.85-2.24-0.53-4.91,0-8.55c1.18-8.87,4.91-11.11,5.34-14.96c1.18-10.79-25.53-16.77-51.27-40.59\r
	c-7.26-6.73-12.6-11.64-17.09-20.3c-3.31-6.41-6.62-15.7-6.41-44.87c0-11.86,0.75-27.88,3.2-47c-23.71-5.13-28.84-9.61-28.84-12.82\r
	c-0.11-7.8,29.7-24.36,37.39-32.05C85.85,211.59,87.24,209.99,87.14,208.17z"/>\r
</svg>\r
`,dc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.adachi_rei-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="adachi_rei-st" d="M144.89,136.43c-4.86,17.74-6.35,33.22-6.66,44.71c-0.41,14.87,1.08,25.43,2.85,38.05\r
	c2.46,17.49,5.24,25.73,9.51,33.3c2.12,3.75,4.22,6.65,5.71,8.56c-3.05-0.33-7.6-1.2-12.37-3.81c-3.16-1.73-9.17-5.72-15.22-17.12\r
	c-9.86-18.56-11.19-40.47-11.42-49.47"/>\r
<path class="adachi_rei-st" d="M161.07,149.75c-1.34,10.49-3.84,23.17-8.56,37.1c-3.77,11.1-8.15,20.64-12.37,28.54"/>\r
<path class="adachi_rei-st" d="M172.48,152.61c-0.01,8.78-1.2,24.56-9.51,41.86c-6.56,13.66-15.03,23-20.93,28.54"/>\r
<path class="adachi_rei-st" d="M171.53,128.82c-0.55,7.36-0.63,18,1.9,30.44c1.84,9.05,4.2,14.91,8.56,25.69\r
	c12.07,29.84,21.76,37.28,25.69,39.95c1.93,1.32,3.62,2.26,4.76,2.85c-3.81-11.1-7.61-22.2-11.42-33.3\r
	c3.45,4.25,11.42,12.88,24.73,18.07c11.81,4.61,22.21,4.33,27.59,3.81"/>\r
<path class="adachi_rei-st" d="M211.49,125.97c5.24,29.94,14.67,51.31,21.88,64.69c13.19,24.47,22.31,28.43,28.54,28.54\r
	c2.37,0.04,4.35-0.47,5.71-0.95c-1.89-1.42-4.64-3.63-7.61-6.66c-7.64-7.78-11.31-15.36-17.12-28.54\r
	c-8.31-18.83-12.47-28.25-14.27-34.25c-2.53-8.42-5.32-20.04-6.66-34.25"/>\r
<path class="adachi_rei-st" d="M227.66,146.9c7.01,6.02,17.75,13.86,32.34,19.98c12.55,5.26,23.9,7.53,32.34,8.56\r
	c-8.81-5.45-20.34-13.93-31.39-26.64c-7.69-8.84-13.2-17.47-17.12-24.73"/>\r
<path class="adachi_rei-st" d="M283.79,174.49c5.4,19.09,8.08,35.43,9.51,47.57c1.83,15.5,2.96,25.65,0.95,39\r
	c-2.38,15.87-7.97,28.2-12.37,36.15c19.55-8.59,25.05-20.52,26.64-24.73c1.54-4.07,2.1-8.04,2.85-13.32\r
	c1.65-11.56,1.42-21.16,0.95-27.59"/>\r
<path class="adachi_rei-st" d="M330.4,164.97c-8.24,1.59-16.49,3.17-24.73,4.76c2.51,13.78,4.52,28.72,5.71,44.71\r
	c0.46,6.18,0.77,12.21,0.95,18.07c3.09-0.53,5.65-1.25,7.61-1.9c4.55-1.51,11.07-3.68,16.17-9.51c1.84-2.1,3.04-4.15,3.81-5.71\r
	c-2.02-8.83-3.94-18.03-5.71-27.59C332.76,180,331.5,172.38,330.4,164.97z"/>\r
<path class="adachi_rei-st" d="M339.91,215.39c2.88,12,6.64,21.33,9.51,27.59c6.74,14.67,13.92,30.31,26.64,32.34\r
	c3.96,0.63,7.38-0.22,9.51-0.95c-3.3-3.1-6.89-6.88-10.46-11.42c-4.56-5.79-7.95-11.36-10.46-16.17"/>\r
<path class="adachi_rei-st" d="M372.26,259.15c2.69,2.41,9.96,8.28,20.93,9.51c16.15,1.82,27.56-7.83,29.49-9.51"/>\r
<path class="adachi_rei-st" d="M375.11,183.05c2.76,19.78,8.01,35.18,12.37,45.66c9.7,23.31,17.11,27.26,19.98,28.54\r
	c11.43,5.09,23.72,0.3,28.54-1.9c-2.71,0.01-5.24-0.33-7.61-0.95c-37.59-9.81-43.96-92.55-44.71-103.69"/>\r
<path class="adachi_rei-st" d="M142.99,256.3c-0.11,9.7,0.74,22.94,4.76,38.05c4.13,15.52,10.19,27.69,15.22,36.15\r
	c-1.87,0.08-5.51-0.02-9.51-1.9c-4.94-2.32-7.56-6.02-8.56-7.61c0.95,3.17,1.9,6.34,2.85,9.51c-0.87-0.11-2.24-0.35-3.81-0.95\r
	c-4.18-1.62-12.51-6.92-19.03-44.71c-1.37-7.94-2.95-18.97-3.81-32.34"/>\r
<path class="adachi_rei-st" d="M122.06,260.1c-2.57,0.56-13.53,2.65-24.73-3.81c-10.39-5.99-14.24-15.43-15.22-18.07\r
	c-0.61,6.04-0.99,12.73-0.95,19.98c0.03,6.51,0.4,12.56,0.95,18.07c-1.76-2.13-4.21-5.34-6.66-9.51\r
	c-4.86-8.29-9.54-20.14-10.46-48.52c-0.64-19.51-1.04-31.78,2.85-48.52c3.02-13,8.44-36.32,23.78-42.81\r
	c2.79-1.18,10.89-4.61,18.07-0.95c2.24,1.14,3.78,2.66,4.76,3.81c0.59-2.16,1.68-5.27,3.81-8.56c0,0,1.98-3.07,4.76-5.71\r
	c28.6-27.15,70.4-38.05,70.4-38.05c28.85-8.41,66.07-17.23,102.74,0.95c12.41,6.15,21.23,13.73,26.64,19.03"/>\r
<path class="adachi_rei-st" d="M121.11,118.36c-0.46-0.42-8.75-8.14-6.66-19.03c1.66-8.66,9.13-15.41,18.07-16.17\r
	c8.27-0.71,16.23,3.84,19.98,11.42"/>\r
<path class="adachi_rei-st" d="M130.63,108.85c-2.86-1.66-4.36-4.74-3.81-7.61c0.42-2.18,1.97-3.99,3.81-4.76c3.26-1.36,7.86,0.4,10.46,4.76"\r
	/>\r
<path class="adachi_rei-st" d="M307.57,85.06c-2.14-13.64-3.5-23.84-3.81-27.59c-0.07-0.87-0.19-2.72,0.95-3.81c0.29-0.27,0.76-0.59,3.81-0.95\r
	c2.64-0.31,3.97-0.46,4.76,0c1.54,0.9,1.8,3.08,1.9,3.81c0.59,4.25,3.86,19.13,8.56,39.95"/>\r
<path class="adachi_rei-st" d="M326.59,93.62c-4.05-19.76-6.67-34.3-6.66-37.1c0-0.54,0.01-1.94,0.95-2.85c0.24-0.23,0.72-0.61,2.85-0.95\r
	c2.47-0.39,3.71-0.59,4.76,0c1.22,0.69,1.67,2.07,1.9,2.85c0.98,3.4,3.16,14.46,5.71,29.49"/>\r
<path class="adachi_rei-st" d="M319.93,101.24c1.37-0.51,5.08-1.68,8.56,0c6.5,3.13,5.79,13.14,5.71,14.27c-0.1,1.36-0.79,11.14-7.61,13.32\r
	c-3.59,1.15-7.99-0.11-10.46-2.85c-5.37-5.95-0.27-17.26,0.95-19.98c2.73-6.05,6.68-9.81,12.37-15.22\r
	c4.06-3.86,6.57-6.25,10.46-8.56c3.51-2.09,16.5-9.8,27.59-4.76c6.57,2.99,9.46,9.09,12.37,15.22c5.35,11.29,5.48,22.27,4.76,29.49"\r
	/>\r
<path class="adachi_rei-st" d="M317.08,126.92c5.39-6.98,10.78-13.95,16.17-20.93"/>\r
<path class="adachi_rei-st" d="M320.89,128.82c-4.4,10.57-7.86,18.86-10.46,24.73c-0.78,1.75-2.57,5.77-0.95,7.61\r
	c0.77,0.87,2.03,0.94,2.85,0.95c6.05,0.08,15.94-2.86,19.03-3.81"/>\r
<path class="adachi_rei-st" d="M317.08,162.12c-0.32,1.9-0.63,3.81-0.95,5.71"/>\r
<path class="adachi_rei-st" d="M330.4,125.97c-0.13,4.62-0.16,9.71,0,15.22c0.2,7.18,0.64,12.52,0.95,16.17c0.68,8.1,1.02,12.15,1.9,15.22\r
	c1.26,4.39,4.15,14.45,9.51,15.22c4.88,0.7,9.75-6.58,16.17-16.17c2.77-4.14,4.9-7.95,6.5-11.08c0.73-1.43,1.97-2.52,3.48-3.07\r
	c3.96-1.46,8.3-3.35,12.85-5.82c7.92-4.29,14.2-9.12,18.99-13.43c1.08-0.97,1.09-2.66,0.05-3.67\r
	c-10.82-10.55-21.25-17.07-28.55-20.95c-11.62-6.18-21.18-8.82-23.78-9.51c-6-1.59-11.23-2.41-15.22-2.85"/>\r
<path class="adachi_rei-st" d="M333.25,121.21c5.39,6.34,10.78,12.68,16.17,19.03"/>\r
<path class="adachi_rei-st" d="M121.11,259.15c-0.27,6.83-1.77,21.68-11.42,37.1c-10.36,16.57-24.33,24.55-30.44,27.59\r
	c4.51,0.27,14.82,0.25,25.69-5.71c7.82-4.29,12.66-9.86,15.22-13.32c1.05,15.11,9.79,26.95,20.93,29.49\r
	c6.3,1.44,11.94-0.42,15.22-1.9"/>\r
<path class="adachi_rei-st" d="M155.36,329.55c0.16,1.14,0.5,2.07,0.95,2.85c3.23,5.62,13.93,6.76,26.64,3.81"/>\r
<path class="adachi_rei-st" d="M206.73,279.13c-0.6,2.11-5.4,19.36-4.76,30.44c0.4,6.86,2.78,9.5,3.81,10.46c1.06,0.99,2.13,1.57,2.85,1.9\r
	c-0.17-1.55-0.24-3.49,0-5.71c0.2-1.84,0.56-3.44,0.95-4.76c3.05,6.66,7.89,10.91,12.37,10.46c0.81-0.08,1.78-0.33,2.85-0.95\r
	c-0.73-2.09-1.37-4.31-1.9-6.66c-3.46-15.32-0.35-29,2.85-38.05"/>\r
<path class="adachi_rei-st" d="M283.79,257.25c1.52,2.18,3.38,5.37,4.76,9.51c1.52,4.58,1.87,8.61,1.9,11.42"/>\r
<path class="adachi_rei-st" d="M272.37,262.96c2.73,6.04,5.4,14.23,5.71,23.78c0.26,8.04-1.3,12.65-1.9,14.27c-1.41,3.82-3.31,6.69-4.76,8.56\r
	c1.93-0.24,7.43-1.18,12.37-5.71c4.75-4.36,6.21-9.5,6.66-11.42"/>\r
<path class="adachi_rei-st" d="M287.59,264.86c1.59,1.59,3.17,3.17,4.76,4.76"/>\r
<path class="adachi_rei-st" d="M403.65,268.66c0.51,0.78,1.41,1.92,2.85,2.85c0.68,0.44,1.34,0.74,1.9,0.95c-1.65,2.29-6.46,8.31-15.22,11.42\r
	c-8.21,2.91-15.29,1.62-18.07,0.95c0.63,1.34,2.02,3.78,4.76,5.71c1.4,0.98,2.75,1.56,3.81,1.9c-0.38,0.33-8.46,7.09-18.07,3.81\r
	c-6.91-2.36-9.89-8.3-10.46-9.51c-2.82,4.82-5.52,8.65-7.61,11.42c-4.66,6.16-8.53,11.18-15.22,15.22\r
	c-2.29,1.38-4.32,2.29-5.71,2.85"/>\r
<path class="adachi_rei-st" d="M107.79,169.73c-0.32-3.17-0.63-6.34-0.95-9.51c-0.05-0.14-0.15-0.52,0-0.95c0.23-0.67,0.86-0.92,0.95-0.95\r
	c8.57-2.46,14.88-4.16,17.12-4.76c0.54-0.14,1.65-0.42,2.85,0c1.66,0.58,2.49,2.16,2.85,2.85c1.86,3.53,0.38,7.59,0,8.56\r
	C123.01,166.56,115.4,168.14,107.79,169.73z"/>\r
<path class="adachi_rei-st" d="M107.79,169.73c-0.15,1.78,0.65,3.31,1.9,3.81c0.09,0.03,0.98,0.38,1.9,0c1.39-0.56,2.23-2.49,1.9-4.76"/>\r
<path class="adachi_rei-st" d="M116.36,167.83c-0.2,2.1,0.81,3.64,1.9,3.81c1.01,0.15,1.86-0.9,1.9-0.95c0.78-0.98,0.8-2.48,0-3.81"/>\r
<path class="adachi_rei-st" d="M124.92,165.92c-0.11,2.69,0.8,4.56,1.9,4.76c0.84,0.15,1.65-0.69,1.9-0.95c1.67-1.73,1.03-4.42,0.95-4.76"/>\r
<path class="adachi_rei-st" d="M142.99,266.76c7.33,4.58,13.54,7.19,17.12,8.56c0,0,39.97,15.28,114.16-13.32c1.72-0.66,4.45-1.8,7.61-3.81\r
	c6.64-4.22,10.83-9.51,13.32-13.32"/>\r
<path class="adachi_rei-st" d="M229.56,251.54c1.45,1.39,3.95,3.42,6.66,3.81c0.33,0.05,0.62,0.06,0.95,0c2.62-0.49,3.63-4.92,3.81-5.71"/>\r
<path class="adachi_rei-st" d="M244.78,183.05c3.03-1.66,6.52-3.3,10.46-4.76c9.11-3.35,17.41-4.47,23.78-4.76"/>\r
<path class="adachi_rei-st" d="M256.2,178.29c1.07,17.36,6.18,28.45,9.51,34.25c6.49,11.3,11.35,11.44,12.37,11.42\r
	c2.49-0.06,5.22-1.62,5.71-1.9c0.93-0.54,3.83-2.24,5.71-5.71c2.78-5.13,1.29-10.32,0.95-11.42"/>\r
<path class="adachi_rei-st" d="M158.21,203.02c3.9-2,9.01-4.17,15.22-5.71c4.62-1.14,8.81-1.68,12.37-1.9"/>\r
<path class="adachi_rei-st" d="M160.12,202.07c-1.15,13.3,1.71,23.11,3.81,28.54c3.34,8.68,10.07,20.07,16.17,19.98\r
	c2.32-0.04,4.76-0.95,4.76-0.95c0,0,3.15-1.18,5.71-3.81c4.84-4.95,4.22-15.8,3.81-21.88c-0.35-5.25-1.29-12.49-3.81-20.93"/>\r
<path class="adachi_rei-st" d="M235.27,158.31c3.22-2.56,7.64-5.46,13.32-7.61c14.59-5.53,27.85-2.53,33.3-0.95"/>\r
<path class="adachi_rei-st" d="M182,171.63c-5.37,0.56-12.32,1.84-19.98,4.76c-10.92,4.16-18.82,9.96-23.78,14.27"/>\r
<path class="adachi_rei-st" d="M266.66,174.49c-0.66,17.98,4.08,28.56,7.61,34.25c1.17,1.88,5.21,8.38,7.61,7.61c1.15-0.37,1.98-2.43,1.9-8.56\r
	c-0.09-7-1.34-18.33-7.61-34.25"/>\r
<path class="adachi_rei-st" d="M169.63,198.27c-1.5,10.4-0.28,18.61,0.95,23.78c1.46,6.15,3.86,16.27,10.46,18.07c0.95,0.26,2.39,0.65,3.81,0\r
	c6.07-2.8,4.46-21.51-0.95-35.2c-1.75-4.42-3.66-7.73-4.76-9.51"/>\r
<path class="adachi_rei-st" d="M232.41,275.32c1.11,0.82,4.69,3.24,9.51,2.85c5.35-0.42,10.11-4.13,12.37-9.51"/>\r
<path class="adachi_rei-st" d="M228.61,276.28c6.28,22.05,11.71,48.99,13.32,79.91c0.69,13.2,0.6,25.61,0,37.1\r
	c-4.57-0.54-9.67-0.91-15.22-0.95c-6.3-0.04-12.05,0.35-17.12,0.95c0.56-1.3,1.32-3.25,1.9-5.71c0.97-4.05,0.94-7.22,0.95-8.56\r
	c0.05-6.91,1.31-11.26,1.9-16.17c0.74-6.15,1.03-18.31-0.95-44.71"/>\r
<path class="adachi_rei-st" d="M255.72,269.14c7.14,15.18,15.54,37.54,19.03,65.64c2.61,20.99,1.74,39.23,0,53.27\r
	c3.93,2.08,7.23,2.69,9.51,2.85c1.75,0.13,4.65-0.23,10.46-0.95c6.53-0.81,6.55-1.04,8.56-0.95c2.09,0.09,3.87,0.42,6.66,0\r
	c1.63-0.24,2.94-0.64,3.81-0.95c0.31-3.66,0.5-7.64,0.48-11.89c-0.03-5.55-0.4-10.65-0.95-15.22"/>\r
<path class="adachi_rei-st" d="M203.88,289.59c-11.01,24.19-19.45,42.87-24.73,54.22c-1.33,2.86-4.11,8.8-6.66,17.12\r
	c-2.08,6.8-3.2,12.51-3.81,16.17c5.58,0.61,11.64,1.52,18.07,2.85c5.46,1.13,10.55,2.43,15.22,3.81c1.36-5.18,2.93-10.59,4.76-16.17\r
	c2.69-8.24,5.6-15.85,8.56-22.83"/>\r
<path class="adachi_rei-st" d="M170.58,377.11c0.1,1.2,0.65,6.27,4.76,9.51c4.72,3.73,12.23,3.52,18.07-0.95"/>\r
<path class="adachi_rei-st" d="M192.46,381.87c-0.07,0.91-0.1,2.8,0.95,4.76c0.46,0.85,1.44,2.69,2.85,2.85c1.69,0.2,3.84-2.04,4.76-5.71"/>\r
<path class="adachi_rei-st" d="M302.81,282.93c10.17,12.99,18.02,24.39,23.78,33.3c0,0,4.18,6.46,17.12,31.39c0.36,0.68,1.22,2.38,1.9,4.76\r
	c0.4,1.41,1.22,5.07,0.95,7.61c-0.76,7.19-11.15,14.49-19.03,12.37c-1.73-0.47-3.02-1.3-3.81-1.9"/>\r
<path class="adachi_rei-st" d="M282.83,304.81c6.29,9.58,12.75,20.36,19.03,32.34c5.58,10.65,10.29,20.87,14.27,30.44\r
	c3.12-2.04,5.75-3.65,7.61-4.76c11.04-6.58,16.98-8.79,19.03-9.51c1.23-0.44,2.24-0.76,2.85-0.95"/>\r
<path class="adachi_rei-st" d="M212.44,393.29c-0.63,3.81-1.27,7.61-1.9,11.42c15.54,0,31.08,0,46.61,0c0-9.2,0-18.39,0-27.59"/>\r
<path class="adachi_rei-st" d="M260.95,377.11c0.52,2.82,0.8,5.13,0.95,6.66c0.64,6.3,0.2,9.18,0.95,15.22c0.31,2.49,0.69,4.48,0.95,5.71\r
	c13.46,1.02,21.6,0.13,26.64-0.95c1.65-0.35,6.98-1.6,14.27-1.9c2.82-0.12,5.14-0.06,6.66,0c0-4.44,0-8.88,0-13.32"/>\r
<path class="adachi_rei-st" d="M249.54,371.41c6.64,1,12.08,2.02,16.17,2.85c1.72,0.35,2.85,0.6,2.85,0.95c0.02,1.08-10.35,2.11-19.98,2.85"/>\r
<path class="adachi_rei-st" d="M213.39,404.7c-0.46,6.2-1.29,11.1-1.9,14.27c0,0-3.63,18.64-2.85,27.59c0.05,0.59,0.17,1.75,0.95,2.85\r
	c1.68,2.4,5.09,2.66,7.61,2.85c0.78,0.06,5.11,0.39,8.56-0.95c9.45-3.68,11.86-19.75,13.32-29.49c0.98-6.52,1.13-12.33,0.95-17.12"\r
	/>\r
<path class="adachi_rei-st" d="M280.93,404.7c1.71,7.51,2.48,13.69,2.85,18.07c0.47,5.43,0.95,9.01,1.9,16.17c0.79,5.92,1.16,7.81,2.85,9.51\r
	c3.03,3.03,8.37,3.52,12.37,1.9c1.03-0.41,3.38-1.54,5.71-4.76c3.52-4.87,4.03-10.45,3.81-19.98c-0.15-6.33-0.63-14.4-1.9-23.78"/>\r
<path class="adachi_rei-st" d="M318.03,366.65c3.26,4.78,5.4,8.85,6.66,11.42c4.07,8.32,5.56,14.6,11.42,38.05c1.37,5.5,2.46,9.83,2.85,11.42"\r
	/>\r
<path class="adachi_rei-st" d="M314.23,373.31c1.21,1.61,3,4.2,4.76,7.61c2.17,4.22,3.25,7.68,3.81,9.51c2.39,7.84,6.43,21.12,11.42,38.05"/>\r
<path class="adachi_rei-st" d="M332.3,429.44c3.17-0.95,6.34-1.9,9.51-2.85c0.32,2.85,0.63,5.71,0.95,8.56c-1.9,0-3.81,0-5.71,0\r
	c-1.27,0.32-2.54,0.63-3.81,0.95C332.94,433.87,332.62,431.65,332.3,429.44z"/>\r
<path class="adachi_rei-st" d="M333.25,436.09c0.32,1.59,0.63,3.17,0.95,4.76c2.85-0.63,5.71-1.27,8.56-1.9c0-1.27,0-2.54,0-3.81"/>\r
<path class="adachi_rei-st" d="M327.07,361.42c0.21,4.96-1.36,8.78-3.81,9.51c-0.46,0.14-1.09,0.2-1.9,0"/>\r
<path class="adachi_rei-st" d="M223.85,283.89c0.39,0.2,0.79,0.49,0.95,0.95c0.16,0.44,0.03,0.86,0,0.95c-0.01,0.05-0.01,4.79,0,14.27\r
	c0,3.75,0.18,9.82,0.95,19.98"/>\r
<path class="adachi_rei-st" d="M224.8,288.64c2.22-0.63,4.44-1.27,6.66-1.9"/>\r
<path class="adachi_rei-st" d="M260.95,280.08c1.9-0.63,3.81-1.27,5.71-1.9"/>\r
<path class="adachi_rei-st" d="M272.37,307.67c-0.68-2.45-1.31-4.99-1.9-7.61c-2.22-9.87-3.35-19.15-3.81-27.59c0.71-0.55,1.97-1.38,2.85-0.95\r
	c0.74,0.36,0.89,1.46,0.95,1.9c0.9,6.67,2.23,13.28,2.85,19.98c0.23,2.45,0.72,6.07,1.9,10.46"/>\r
<path class="adachi_rei-st" d="M219.1,321.94c0,0.14,0.06,1.39,0.95,1.9c0.54,0.31,1.1,0.18,1.9,0c0.87-0.19,1.54-0.35,1.9-0.95\r
	c0.47-0.78,0.07-1.73,0-1.9"/>\r
<path class="adachi_rei-st" d="M273.32,309.57c0.63,1.27,1.27,2.54,1.9,3.81c1.27-0.63,2.54-1.27,3.81-1.9c-0.63-1.27-1.27-2.54-1.9-3.81"/>\r
<path class="adachi_rei-st" d="M214.34,329.55c0.43-0.26,1.08-0.61,1.9-0.95c0,0,1.72-0.7,3.81-0.95c2.22-0.27,9.36-0.38,19.03,0"/>\r
<path class="adachi_rei-st" d="M273.32,325.74c7.29-0.32,14.59-0.63,21.88-0.95"/>\r
<path class="adachi_rei-st" d="M188.65,322.89c3.34,0.12,7.59,0.58,12.37,1.9c5.66,1.56,10.14,3.8,13.32,5.71"/>\r
<path class="adachi_rei-st" d="M291.4,318.13c1.83-1.86,4.03-3.83,6.66-5.71c7.41-5.3,14.84-7.54,19.98-8.56"/>\r
<path class="adachi_rei-st" d="M301.86,337.16c3.68-3.34,8.4-7.05,14.27-10.46c3.35-1.95,6.56-3.51,9.51-4.76"/>\r
<path class="adachi_rei-st" d="M309.47,351.43c3.18-2.7,7.28-5.74,12.37-8.56c6.04-3.35,11.67-5.39,16.17-6.66"/>\r
<path class="adachi_rei-st" d="M298.05,286.74c1.69,2.94,3.01,5.21,3.81,6.66c0.15,0.28,0.42,0.77,0.95,0.95c1.2,0.41,2.51-1.22,2.85-0.95\r
	c0.56,0.43-2.71,4.9-1.9,5.71c0.64,0.64,3.5-1.37,3.81-0.95c0.29,0.41-2.13,2.58-1.9,2.85c0.2,0.24,2.22-1.46,2.85-0.95\r
	c0.34,0.28,0,0.98,0,1.9c0,0.91,0.33,2.21,1.9,3.81"/>\r
<path class="adachi_rei-st" d="M296.15,326.69c2.84-1.72,4.96-2.91,6.66-3.81c0.61-0.32,1.86-0.97,1.9-1.9c0.03-0.65-0.55-0.9-0.95-1.9\r
	c-0.48-1.2-0.39-2.72,0-2.85c0.92-0.32,3.76,6.97,4.76,6.66c1.02-0.32-0.94-8.28,0-8.56c0.84-0.25,3.52,5.84,3.81,5.71\r
	c0.2-0.09-1.32-2.99-0.82-6.54c0.1-0.7,0.27-1.9,0.82-2.03c1.17-0.26,2.39,4.69,4.76,4.76c0.62,0.02,0.97-0.32,1.9-0.95\r
	c1.23-0.84,3.09-1.92,5.71-2.85"/>\r
<path class="adachi_rei-st" d="M182.95,335.26c2.93-0.63,5.14-0.38,6.66,0c2.46,0.61,4.14,1.81,5.71,0.95c0.67-0.36,0.61-0.72,1.9-1.9\r
	c0.95-0.88,2.36-2.17,2.85-1.9c1.24,0.66-3.38,11.18-2.85,11.42c0.49,0.22,4.87-8.9,5.71-8.56c0.72,0.29-1.73,7.29-0.95,7.61\r
	c0.87,0.36,4.92-7.96,5.71-7.61c0.09,0.04,0.12,0.19,0,1.9c-0.2,2.82-0.35,3.3,0,3.81c0.52,0.75,1.46,0.61,2.85,0.95\r
	c1.25,0.31,2.94,1.02,4.76,2.85"/>\r
<path class="adachi_rei-st" d="M214.34,341.92c1.96,0.15,3.58,0.09,4.76,0c3.16-0.24,3.65-0.76,3.81-0.95c0.66-0.81,0.22-1.59,0.95-3.81\r
	c0.36-1.09,0.62-1.89,0.95-1.9c1.2-0.04,2.16,10.51,2.85,10.46c0.66-0.04,0.45-9.49,0.95-9.51c0.5-0.02,1.18,9.53,1.9,9.51\r
	c0.75-0.02,0.86-10.43,1.9-10.46c0.35-0.01,0.71,1.12,0.95,1.9c0.7,2.23,0.23,3.23,0.95,3.81c0.54,0.43,1.16,0.16,2.85,0\r
	c1.6-0.15,2.92-0.08,3.81,0"/>\r
<path class="adachi_rei-st" d="M215.29,350.48c8.88-0.32,17.76-0.63,26.64-0.95"/>\r
<path class="adachi_rei-st" d="M179.14,343.82c1.05-0.1,2.72-0.2,4.76,0c2.25,0.22,3.91,0.7,4.76,0.95c3.32,0.98,12.09,3.74,23.78,7.61"/>\r
<path class="adachi_rei-st" d="M172.48,359.99c0.89-0.04,2.21-0.07,3.81,0c5.31,0.22,9.19,1.3,11.42,1.9c5.01,1.36,11.24,2.89,19.03,4.76"/>\r
<path class="adachi_rei-st" d="M275.22,339.06c2.19,0.03,4.12,0.02,5.71,0c3.95-0.05,4.98-0.17,5.71-0.95c1.3-1.38,0.68-3.78,0.95-3.81\r
	c0.45-0.04,1.15,6.66,1.9,6.66c0.85,0,1.22-8.56,1.9-8.56c0.79,0,1.16,11.41,1.9,11.42c0.71,0,1.05-10.46,1.9-10.46\r
	c0.37,0,0.98,1.93,0.95,3.81c-0.02,1.14-0.27,1.55,0,1.9c0.4,0.53,1.72,0.67,5.71-0.95"/>\r
<path class="adachi_rei-st" d="M276.17,349.53c10.15-0.63,20.29-1.27,30.44-1.9"/>\r
<path class="adachi_rei-st" d="M320.89,324.79c0.95,1.27,1.9,2.54,2.85,3.81"/>\r
<path class="adachi_rei-st" d="M326.59,334.3c0.95,1.59,1.9,3.17,2.85,4.76"/>\r
<path class="adachi_rei-st" d="M321.84,329.55c1.27-0.63,2.54-1.27,3.81-1.9c0.95,1.9,1.9,3.81,2.85,5.71c-1.27,0.63-2.54,1.27-3.81,1.9\r
	C323.74,333.35,322.79,331.45,321.84,329.55z"/>\r
<path class="adachi_rei-st" d="M241.93,350.48c7.61-3.49,15.22-6.98,22.83-10.46"/>\r
<path class="adachi_rei-st" d="M251.44,346.67c8.24,0,16.49,0,24.73,0"/>\r
<path class="adachi_rei-st" d="M249.54,347.62c0.32,3.17,0.63,6.34,0.95,9.51"/>\r
<path class="adachi_rei-st" d="M262.86,346.67c0.95,2.85,1.9,5.71,2.85,8.56"/>\r
<path class="adachi_rei-st" d="M241.93,357.14c3.33,0.26,6.82,0.29,10.46,0c4.87-0.38,7.27-1.11,13.32-1.9c3.25-0.42,6.74-0.76,10.46-0.95"/>\r
<path class="adachi_rei-st" d="M214.34,369.5c3.86,0.83,8.33,1.54,13.32,1.9c5.32,0.39,10.13,0.3,14.27,0"/>\r
<path class="adachi_rei-st" d="M277.13,370.45c6.34,0,12.68,0,19.03,0c6.02,0,12.05,0,18.07,0"/>\r
<path class="adachi_rei-st" d="M222.9,392.33c0,4.12,0,8.24,0,12.37"/>\r
<path class="adachi_rei-st" d="M279.98,390.43c0.32,4.76,0.63,9.51,0.95,14.27"/>\r
<path class="adachi_rei-st" d="M288.54,390.43c0.63,4.44,1.27,8.88,1.9,13.32"/>\r
<path class="adachi_rei-st" d="M211.49,418.97c1.95,0.12,3.57,0.07,4.76,0c2.75-0.17,3.39-0.51,3.81-0.95c1.03-1.1,0.64-2.82,0.95-2.85\r
	c0.51-0.05,1.04,4.73,1.9,4.76c0.87,0.02,1.63-4.8,1.9-4.76c0.29,0.05-0.61,5.55,0,5.71c0.7,0.18,3.01-6.87,3.81-6.66\r
	c0.52,0.14-0.6,3.19,0.95,4.76c0.31,0.32,0.94,0.77,4.76,0.95c1.96,0.09,3.6,0.05,4.76,0"/>\r
<path class="adachi_rei-st" d="M282.83,417.07c3.34-0.61,5.81-0.85,7.61-0.95c0.89-0.05,1.92-0.2,2.85-0.95c1.42-1.14,1.54-2.9,1.9-2.85\r
	c0.65,0.08,0.26,5.59,0.95,5.71c0.73,0.12,2.04-5.83,2.85-5.71c0.71,0.1,0.48,4.72,0.95,4.76c0.53,0.04,1.43-5.76,1.9-5.71\r
	c0.28,0.03-0.13,2.09,0.95,2.85c0.62,0.44,1.32,0.16,2.85,0c0.91-0.1,2.21-0.16,3.81,0"/>\r
<path class="adachi_rei-st" d="M213.39,411.36c4.35-0.64,9.48-1.07,15.22-0.95c4.19,0.09,8.02,0.45,11.42,0.95"/>\r
<path class="adachi_rei-st" d="M210.53,424.68c3.71-0.51,7.85-0.87,12.37-0.95c6.05-0.11,11.49,0.31,16.17,0.95"/>\r
<path class="adachi_rei-st" d="M281.88,410.41c3.81-1.18,8.63-2.32,14.27-2.85c5.1-0.48,9.62-0.35,13.32,0"/>\r
<path class="adachi_rei-st" d="M283.79,423.73c4.54-1.13,9.63-2.14,15.22-2.85c4.05-0.51,7.87-0.81,11.42-0.95"/>\r
<path class="adachi_rei-st" d="M219.1,438c0.93,0.56,2.22-1,4.76-1.9c1.03-0.37,4.19-1.49,5.71,0c1.08,1.07,1.24,3.39,0,4.76\r
	c-1.03,1.14-2.7,1.28-3.81,0.95c-1.08-0.32-1.71-1.12-1.9-0.95c-0.24,0.21,0.97,1.33,0.95,2.85c-0.02,1.36-1.01,2.86-1.9,2.85\r
	c-1.24-0.01-1.79-2.97-2.85-2.85c-0.68,0.08-0.68,1.34-1.9,1.9c-0.63,0.29-1.59,0.4-1.9,0c-0.72-0.94,2.47-4.11,1.9-4.76\r
	c-0.43-0.49-2.29,1.34-4.76,0.95c-1.02-0.16-2.55-0.76-2.85-1.9c-0.4-1.5,1.52-3.14,2.85-3.81c1.43-0.72,3.7-1.07,4.76,0\r
	C218.86,436.82,218.47,437.63,219.1,438z"/>\r
<path class="adachi_rei-st" d="M211.49,451.32c0.38-0.8,0.98-1.82,1.9-2.85c1.37-1.53,2.84-2.39,3.81-2.85"/>\r
<path class="adachi_rei-st" d="M223.85,446.56c0.56,0.21,1.22,0.51,1.9,0.95c1.44,0.94,2.34,2.07,2.85,2.85"/>\r
<path class="adachi_rei-st" d="M209.58,433.24c1.15-0.41,2.66-0.72,3.81,0c1.04,0.65,1.02,1.66,1.9,1.9c1.26,0.35,2.14-1.49,3.81-1.9\r
	c1.18-0.29,2.98,0.07,5.71,2.85"/>\r
<path class="adachi_rei-st" d="M230.51,437.05c0.17-0.16,1.27-1.11,2.85-0.95c1.86,0.19,2.77,1.75,2.85,1.9"/>\r
<path class="adachi_rei-st" d="M297.1,438c0.63,0,0.84-0.82,1.9-1.9c0.23-0.24,1.4-1.43,2.85-1.9c1.56-0.51,4.07-0.39,4.76,0.95\r
	c0.78,1.52-0.95,4.27-2.85,4.76c-1.31,0.34-2.65-0.4-2.85,0c-0.17,0.34,0.84,0.83,0.95,1.9c0.09,0.81-0.37,1.78-0.95,1.9\r
	c-0.71,0.15-1.12-1.05-1.9-0.95c-0.87,0.11-0.87,1.63-1.9,1.9c-0.73,0.19-1.74-0.31-1.9-0.95c-0.3-1.14,2.13-2.43,1.9-2.85\r
	c-0.34-0.62-5.34,2.66-7.61,0.95c-0.93-0.7-1.11-2.01-0.95-2.85c0.49-2.58,4.77-4.02,6.66-2.85C296.23,436.73,296.32,438,297.1,438z\r
	"/>\r
<path class="adachi_rei-st" d="M284.74,435.14c0.41-0.27,1.84-1.14,3.81-0.95c2.18,0.21,3.5,1.57,3.81,1.9"/>\r
<path class="adachi_rei-st" d="M294.25,436.09c0.28-1.46,1.42-2.59,2.85-2.85c1.52-0.28,3.08,0.5,3.81,1.9"/>\r
<path class="adachi_rei-st" d="M304.71,434.19c0.44-0.32,1.07-0.7,1.9-0.95c1.69-0.52,3.15-0.19,3.81,0"/>\r
<path class="adachi_rei-st" d="M288.54,448.46c2.23-1.49,4.26-2.35,5.71-2.85c1.88-0.65,3.14-1.08,4.76-0.95c2.7,0.21,4.67,1.82,5.71,2.85"/>\r
<path class="adachi_rei-st" d="M231.46,392.33c0,4.12,0,8.24,0,12.37"/>\r
<path class="adachi_rei-st" d="M324.69,237.27c0.94,5.5,1.54,12.28,0.95,19.98c-1.38,18.09-8.57,31.62-13.32,39"/>\r
<path class="adachi_rei-st" d="M171.53,279.13c-1.24,7.96-2.17,19.38,0,31.39c1.25,6.94,3.07,11.49,6.66,15.22c2.37,2.46,4.89,3.91,6.66,4.76"\r
	/>\r
<path class="adachi_rei-st" d="M189.61,280.08c-1.73,5.7-3.47,13.49-3.81,22.83c-0.32,8.79,0.71,16.26,1.9,21.88"/>\r
</svg>\r
`,fc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.akemi_homura-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="akemi_homura-st" d="M131.5,197.5c-13.5,12.88-20.98,25.74-25,34c-6,12.34-17,34.95-10,61c3.92,14.59,11.99,24.65,17,30\r
	c0.58-6.94,1.75-15.07,4-24c2.03-8.03,4.52-15.07,7-21"/>\r
<path class="akemi_homura-st" d="M121.5,256.5c-0.61,3.02-1.79,11.03,2,20c3.25,7.68,8.49,12.13,11,14c0.2-5.51,0.95-12.37,3-20\r
	c2.9-10.82,7.33-19.23,11-25"/>\r
<path class="akemi_homura-st" d="M147.5,234.5c-0.21,6.98,0.43,17.46,5,29c9.58,24.18,29.56,35.64,36,39c-1.41-2.69-3-6.4-4-11\r
	c-0.75-3.43-0.98-6.49-1-9c1.7,3.21,5.04,8.46,11,13c8.44,6.43,17.2,7.69,21,8c-2.86-6.09-5.85-13.81-8-23\r
	c-2.86-12.2-3.3-22.92-3-31c2.89,5.39,8.12,13.52,17,21c11.59,9.77,23.53,13.49,30,15c-2.47-3.03-5.49-7.35-8-13\r
	c-2.19-4.94-3.36-9.46-4-13c2.55,3.16,6.44,7.28,12,11c7.37,4.94,14.45,7.04,19,8"/>\r
<path class="akemi_homura-st" d="M248.5,188.5c8.72,16.36,22.54,47.72,23,89c0.69,61.91-29.11,105.52-40,120c7.3-0.7,17.76-2.58,29-8\r
	c28.78-13.88,40.93-40.52,48-56c16.19-35.48,14.32-68.84,12-86"/>\r
<path class="akemi_homura-st" d="M111.5,159.5c3.8,3.11,7.86,6.75,12,11c4.74,4.86,8.71,9.62,12,14c-10.8,7.1-37.46,26.83-50,63\r
	c-12.87,37.14-7.97,83.32,20,116c15.34,17.91,33.32,26.76,44,31c-4.12-5.05-9.56-13.06-13-24c-1.76-5.59-2.61-10.7-3-15"/>\r
<path class="akemi_homura-st" d="M116.5,305.5c1.16,3.01,2.32,6.02,3.48,9.04c0.9,2.35,0.94,4.95,0.03,7.3c-1.4,3.62-2.53,8.46-1.51,13.66\r
	c4.68,23.86,50.9,35.55,83,35c12.31-0.21,31.57-2.37,54-13"/>\r
<path class="akemi_homura-st" d="M348,266c1.85-8.64,2.57-18.71,0.5-29.5c-8.61-44.94-58.15-64.48-63.5-66.5c2.71-4.3,6.44-9.38,11.5-14.5\r
	c7.17-7.25,14.43-11.98,20-15"/>\r
<path class="akemi_homura-st" d="M310.5,144.5c2.37-1.8,5.65-1.14,7,1c1.12,1.78,0.77,4.36-1,6c2.9,0.15,5.36,2.2,6,5c0.62,2.71-0.59,5.55-3,7\r
	c2.3,0.86,3.89,2.85,4,5c0.15,2.89-2.42,5.78-6,6c2.22,1.61,3.37,4.3,3,7c-0.38,2.78-2.33,5.11-5,6"/>\r
<path class="akemi_homura-st" d="M114.5,161.5c-2.25-1.46-5.26-1.02-7,1c-1.71,1.99-1.72,4.99,0,7c-2.23,0.77-3.81,2.74-4,5\r
	c-0.22,2.59,1.42,5.09,4,6c-0.22,0.2-2.29,2.11-2,5c0.22,2.25,1.79,4.2,4,5c-0.38,0.64-1.43,2.58-1,5c0.51,2.85,2.86,5.2,6,6"/>\r
<path class="akemi_homura-st" d="M105.5,211.5c-5.88-14.66-8.1-27.19-9-36c-2.07-20.19,2.45-23.97,4-25c3.04-2.02,6.74-1.42,9-1\r
	c17.54,3.26,39.85,12.89,49,17c2.67-5.33,5.33-10.67,8-16c1.67,2,3.33,4,5,6c3.33-11.33,6.67-22.67,10-34c4,12.67,8,25.33,12,38\r
	c7.97-0.81,17.04-1.27,27-1c11.24,0.31,21.32,1.49,30,3c6.12-4.39,11.35-7.74,15-10c0,0,24.92-15.39,54-20c1.51-0.24,4.52-0.67,7,1\r
	c3.16,2.13,3.63,6.43,4,15c0.54,12.49,0.8,18.74,0,28c-0.4,4.58-1.01,9.97-2,16c8.92-2.65,22.23-7.78,36-18\r
	c15.59-11.58,24.93-24.63,30-33c-0.14,4.48-0.81,10.4-3,17c-3.73,11.24-9.99,18.86-14,23c6.43-5.09,14.48-12.57,22-23\r
	c5.48-7.6,9.31-14.88,12-21c2.43,4.96,4.82,11.35,6,19c3.62,23.54-6.82,42.32-11,49c6.05-4.13,14.91-11.4,22-23\r
	c3.31-5.41,5.51-10.58,7-15c4.09,5.85,12.76,19.95,14,40c1.38,22.47-7.4,38.98-11,45c5.26-3.18,11.04-7.12,17-12\r
	c4.14-3.39,7.79-6.77,11-10c1.53,3.75,3.36,9.72,3,17c-0.74,14.86-10.13,24.83-15,30c-15.64,16.61-35.92,21.16-53,25\r
	c-11.34,2.55-22,3-22,3c-6.13,0.26-8.03-0.14-12,0c-11.53,0.4-20.07,4.6-29,9c-7.8,3.84-19.23,10.56-31,22"/>\r
<path class="akemi_homura-st" d="M96.5,162.5c-3.25,4.39-7.17,10.73-10,19c-4.78,13.96-3.97,26.22-3,33c-2.73-4.96-5.95-12.05-8-21\r
	c-1.9-8.31-2.19-15.58-2-21c-4.59,2.94-14.74,10.34-21,24c-8.95,19.52-3.45,37.66-2,42c-3.2-4.23-6.86-9.89-10-17\r
	c-2.44-5.53-3.99-10.66-5-15c-1.77,3.71-3.92,9.16-5,16c-3.34,21.21,6.41,38.23,12,48c11.82,20.65,28.31,32.3,38,38"/>\r
<path class="akemi_homura-st" d="M102.5,241.5c14.81-7.88,40.77-19.24,75-22c40.82-3.29,72.77,7.31,89,14"/>\r
<path class="akemi_homura-st" d="M127.5,201.5c11.99-5.07,27.87-10.33,47-13c32.43-4.53,59.35,0.45,76,5"/>\r
<path class="akemi_homura-st" d="M141.5,358.5c-0.33,6.67-0.67,13.33-1,20"/>\r
<path class="akemi_homura-st" d="M137.5,389.5c-1.13,4.95-2.16,10.29-3,16c-1.11,7.52-1.72,14.56-2,21c4.47,2.71,11.23,6.08,20,8\r
	c12.05,2.63,22.17,1.26,28,0c0.67-12.33,1.33-24.67,2-37"/>\r
<path class="akemi_homura-st" d="M234.5,378.5c-0.67,4.33-1.33,8.67-2,13"/>\r
<path class="akemi_homura-st" d="M231.5,397.5c-1.78,3.92-3.57,8.61-5,14c-2.14,8.05-2.86,15.26-3,21c4.34,2.95,10.71,6.57,19,9\r
	c12.25,3.6,22.83,2.9,29,2c0.67-6.33,1.33-12.67,2-19c3.33-17.33,6.67-34.67,10-52"/>\r
<path class="akemi_homura-st" d="M135.5,405.5c4.19,2.44,9.9,5.17,17,7c12.24,3.16,22.73,2.14,29,1"/>\r
<path class="akemi_homura-st" d="M227.5,410.5c4.24,2.97,9.91,6.32,17,9c11.69,4.42,22.14,5.12,29,5"/>\r
<path class="akemi_homura-st" d="M161.5,365.5c0.27,3.81,0.54,7.63,0.82,11.44c0.1,1.44,1.33,2.53,2.78,2.48c4.25-0.16,8.73-0.45,13.41-0.92\r
	c5.31-0.52,10.32-1.21,15-2"/>\r
<path class="akemi_homura-st" d="M192.5,370.5c0.07,1.28,0.31,3.03,1,5c0.32,0.91,0.69,1.72,1.06,2.43c0.52,0.98,1.54,1.57,2.65,1.57h6.82\r
	c0.99,0,1.92-0.52,2.42-1.38c0.4-0.7,0.79-1.57,1.05-2.62c0.56-2.23,0.23-4.09,0-5"/>\r
<path class="akemi_homura-st" d="M207.5,376.5c3.91,0.84,8.26,1.55,13,2c6.99,0.66,13.34,0.59,18.84,0.18c1.22-0.09,2.16-1.1,2.16-2.32V363.5"/>\r
<path class="akemi_homura-st" d="M176.5,378.5l-4.71,14.14c-0.67,2,0.65,4.12,2.74,4.41l15.03,2.05c1.63,0.22,3.14-0.91,3.38-2.53\r
	c0.85-5.69,1.71-11.38,2.56-17.07"/>\r
<path class="akemi_homura-st" d="M205.5,379.5c3.04,6.68,6.07,13.36,9.11,20.04c0.5,1.1,1.77,1.62,2.9,1.18c4.4-1.71,8.79-3.42,13.19-5.13\r
	c1.43-0.56,1.97-2.31,1.1-3.57c-3.1-4.51-6.2-9.01-9.29-13.52"/>\r
<path class="akemi_homura-st" d="M300,352c7.2-1.61,15.84-4.32,25-9c21.8-11.15,34.62-27.39,41-37"/>\r
<path class="akemi_homura-st" d="M320.5,345.5c10.89-1.37,26.68-4.63,44-13c20.24-9.78,33.97-22.39,42-31"/>\r
<path class="akemi_homura-st" d="M303.5,351.5c0.53,0.57,2.6,2.63,6,3c3.78,0.41,6.45-1.57,7-2c0.86,0.56,4.35,2.71,9,2c5.7-0.87,8.58-5.33,9-6\r
	c0.84,0.54,4.78,2.97,10,2c5.64-1.05,8.51-5.26,9-6c0.71,0.35,7.21,3.44,14,0c6.1-3.09,7.76-9.07,8-10c0.97,0.18,8.94,1.56,15-4\r
	c3.6-3.3,4.66-7.35,5-9c0.41,0.08,5.89,1.11,10-3s3.08-9.59,3-10c0.81-0.01,5.55-0.14,9-4c2.47-2.76,2.9-5.88,3-7"/>\r
<path class="akemi_homura-st" d="M320.5,354.5c-2.1,8.9-4.51,16.09-6.39,21.15c-5.39,14.5-13.71,36.14-33.61,52.85c-3.26,2.74-6.12,4.75-8,6"/>\r
<path class="akemi_homura-st" d="M342.5,350.5c0.67,10.02-0.12,18.25-1,24c-0.41,2.67-4.62,29.13-14,40c-0.72,0.84-2.89,3.22-4,7\r
	c-0.15,0.51-1.46,5.17,0,10c2.96,9.79,15.22,13.22,18,14c0,0,9.27,2.59,19,0c34.24-9.12,51.31-83.85,52-87\r
	c2.78-12.68,5.64-31.13,5-54"/>\r
<path class="akemi_homura-st" d="M345.5,185.5c1.67-44,3.33-88,5-132c1.44,0.07,4.13,0.38,7,2c3.48,1.96,5.28,4.73,6,6c0-8.33,0-16.67,0-25\r
	c2.33,2.67,4.67,5.33,7,8c2.67-3.67,5.33-7.33,8-11c3.33,6,6.67,12,10,18c3.33-2,6.67-4,10-6c0,9,0,18,0,27\r
	c4.33-1.33,8.67-2.67,13-4c-9,29-18,58-27,87"/>\r
<path class="akemi_homura-st" d="M217.5,296.5c16.67-4.67,33.33-9.33,50-14"/>\r
<path class="akemi_homura-st" d="M262.5,284.5c4.28,14.45,1.63,28.28-7,35c-1.28,0.99-5.48,4.17-11,4c-9.97-0.31-19.8-11.4-23-28"/>\r
<path class="akemi_homura-st" d="M126.5,288.5c13.33,2.67,26.67,5.33,40,8"/>\r
<path class="akemi_homura-st" d="M131.5,289.5c-2.79,14.55,1.04,27.05,9,31c0.83,0.41,4.63,2.18,9,1c7.79-2.1,13.46-12.47,13-26"/>\r
<path class="akemi_homura-st" d="M175.5,333.5c5.31,2.44,8.27,1.94,10,1c1.99-1.08,2.89-3.03,5-3c1.52,0.02,2.05,1.05,4,2\r
	c2.27,1.11,4.3,1.06,7,1c4.87-0.11,8.75-1.79,11-3"/>\r
<path class="akemi_homura-st" d="M178.5,335.5c-0.45,4.74-0.55,11.35,1,19c1.25,6.16,3.2,11.22,5,15"/>\r
<path class="akemi_homura-st" d="M209.5,333.5c0.49,2.45,0.85,5.13,1,8c0.65,12.36-2.91,22.51-6,29"/>\r
<path class="akemi_homura-st" d="M199.5,334.5c0.46,2.42,1.37,4.06,2,5c0.59,0.88,0.83,0.98,1,1c1.3,0.17,2.86-3.63,4-7"/>\r
<path class="akemi_homura-st" d="M393.5,326.5c2.67,4.67,5.33,9.33,8,14c4-5,8-10,12-15c-2-3-4-6-6-9"/>\r
<path class="akemi_homura-st" d="M401.5,340.5c-4.33,5-8.67,10-13,15c3,5,6,10,9,15c4-4.67,8-9.33,12-14\r
	C406.83,351.17,404.17,345.83,401.5,340.5z"/>\r
<path class="akemi_homura-st" d="M397.5,370.5c-4.67,3-9.33,6-14,9c1.33,6,2.67,12,4,18c4.67-3.67,9.33-7.33,14-11\r
	C400.17,381.17,398.83,375.83,397.5,370.5z"/>\r
<path class="akemi_homura-st" d="M371.5,405.5c5.33-2.67,10.67-5.33,16-8c0.33,5.33,0.67,10.67,1,16c-5,3.33-10,6.67-15,10\r
	C372.83,417.5,372.17,411.5,371.5,405.5z"/>\r
<path class="akemi_homura-st" d="M133.5,427.5c-1.35,3.23-2.33,5.97-3,8c-1.2,3.64-1.21,4.3-1,5c0.8,2.66,3.77,2.63,5,6c0.51,1.39,0.22,1.99,1,3\r
	c1.19,1.54,3.19,1.87,4,2c3.16,0.52,4.4-0.99,6,0c1.17,0.72,0.69,1.65,2,3c1.5,1.55,3.95,2.23,6,2c3.03-0.34,3.84-2.5,6-2\r
	c1.25,0.29,1.25,1.08,3,2c2.24,1.17,4.47,1.03,5,1c4.81-0.3,7.7-4.55,8-5c1.44-2.19,1.65-4.49,2-9c0.29-3.76,0.17-6.87,0-9"/>\r
<path class="akemi_homura-st" d="M224.5,433.5c-2.2,1.39-3.4,3.02-4,4c-1.73,2.81-2.95,7.43-1,10c0.63,0.83,1.05,0.74,2,2\r
	c1.27,1.69,1.07,2.59,2,4c1.34,2.03,3.51,2.82,4,3c2.83,1.03,4.24-0.3,6,1c1.25,0.93,0.7,1.72,2,3c1.87,1.85,4.76,1.93,7,2\r
	c2.92,0.09,3.36-0.57,5,0c2.15,0.74,2.05,2.09,4,3c3.27,1.53,7.19-0.57,8-1c2.51-1.34,3.81-3.25,5-5c0.88-1.29,2.41-3.6,3-7\r
	c0.7-4.08-0.36-7.4-1-9"/>\r
</svg>\r
`,pc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.amamiya_ren-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="amamiya_ren-st" d="M384.11,190.27c2.78,5.16,8.21,16.9,7.68,32.64c-0.59,17.49-8.2,29.79-11.52,34.56\r
	c5.73,11.35,7.65,17.75,5.76,19.2c-1.48,1.14-5.32-0.78-11.52-5.76c-6.01,10.51-12.47,18.08-17.28,23.04\r
	c-7.09,7.31-16.3,16.59-30.72,21.12c-2.64,0.83-1.75,0.34-7.68,1.92c-15.42,4.12-20.69,7.25-28.8,9.6\r
	c-11.07,3.21-29.86,5.68-32.64,0c-2.99-6.09,13.31-19.78,17.28-23.04c-5.37-0.11-32.78-0.88-34.56-9.6\r
	c-0.36-1.78,0.14-4.84,5.76-9.6c-15.82-4.57-28.06-10.55-36.48-15.36c0,0-18.82-10.74-28.8-26.88c-1.01-1.63-2.59-4.5-1.92-7.68\r
	c0.74-3.53,4.11-6.87,7.68-7.68c7.59-1.72,12.64,8.78,26.88,17.28c7.51,4.49,14.54,6.6,19.2,7.68"/>\r
<path class="amamiya_ren-st" d="M180.57,242.12c-6.07-4.55-13.1-9.16-21.12-13.44c-2.61-1.39-5.17-2.67-7.68-3.84\r
	c0.66,15.98,3.29,29.04,5.76,38.4c2.89,10.93,7.27,27.52,15.36,36.48c1.4,1.55,4.42,4.54,7.68,9.6c3.07,4.76,3.33,6.66,5.76,9.6\r
	c1.99,2.41,5.4,5.49,11.52,7.68"/>\r
<path class="amamiya_ren-st" d="M218.97,349.65c0.94,0.38,2.3,1,3.84,1.92c3.58,2.15,4,3.49,5.76,3.84c2.73,0.54,4.28-2.18,7.68-3.84\r
	c4.98-2.43,10.41-0.87,13.44,0c12.81,3.68,17.07,18.43,17.28,19.2c2.07-1.66,5.27-3.92,9.6-5.76c2.79-1.19,4.19-1.78,5.76-1.92\r
	c7.12-0.61,10.08,6.77,17.28,7.68c3.99,0.5,7.24-1.24,11.52-3.84c22.42-13.62,38.4-28.8,38.4-28.8c3.11-2.82,6.31-5.91,9.54-9.28\r
	c5.16-5.38,9.64-10.67,13.5-15.69c-9.6,0-19.2,0-28.8,0c-4.48,0-8.96,0-13.44,0"/>\r
<path class="amamiya_ren-st" d="M155.6,255.56c-2.72,0.98-11.63,4.58-15.36,13.44c-2.58,6.12-1.45,11.83,0,19.2c0.66,3.37,2.15,9.14,5.76,15.36\r
	c2,3.44,3.29,5.67,5.76,7.68c6.09,4.96,14.07,4.3,17.28,3.84"/>\r
<path class="amamiya_ren-st" d="M140.24,311.25c-3.98-8.29-7.32-14.83-9.6-19.2c-3.14-6.03-4.75-8.89-5.76-13.44c-1.39-6.28-0.74-11.77,0-15.36\r
	c-0.87,0.35-2.26,0.95-3.84,1.92c-3.7,2.26-4.83,4.23-5.76,3.84c-1.27-0.54-0.75-4.87,0-7.68c0.93-3.49,2.6-6.07,3.84-7.68\r
	c-1.84-0.76-6.24-2.85-9.6-7.68c-3.96-5.7-3.93-11.55-3.84-13.44c2.98,1.32,6.18,2.62,9.6,3.84c1.97,0.7,3.89,1.34,5.76,1.92\r
	c-3.3-7.38-8.17-21.35-5.76-38.4c1.05-7.43,4.1-29.27,21.12-38.4c5.12-2.75,10.06-3.58,13.44-3.84c-0.88-2.2-1.91-5.53-1.92-9.6\r
	c-0.02-10.81,7.17-18.48,13.44-24.96c5.61-5.81,22.08-22.84,44.17-21.12c4.15,0.32,7.49,1.23,9.6,1.92\r
	c-1.38-5.87-0.81-10.39,0-13.44c3.82-14.43,20.67-25.07,42.25-26.88c-4.38,2.52-16.38,10.21-21.12,24.96\r
	c-1.37,4.25-1.84,8.2-1.92,11.52c19.12-15.64,34.38-15.8,40.32-15.36c19.85,1.47,36.48,11.52,36.48,11.52\r
	c4.81,2.91,8.13,5.65,13.44,5.76c8.88,0.18,16.26-7.17,21.12-13.44c1.09,2.42,2.09,5.73,1.92,9.6\r
	c-0.58,13.27-14.35,20.6-15.36,21.12"/>\r
<path class="amamiya_ren-st" d="M341.87,113.46c8.61,4,21.93,11.51,34.56,24.96c15.02,15.99,21.85,32.69,24.96,42.25"/>\r
<path class="amamiya_ren-st" d="M284.26,167.23c23.6,15.2,48.98,17.45,63.37,5.76c3-2.44,6.81-6.52,9.6-13.44c-2.74,1.26-12.89,5.55-24.96,1.92\r
	c-7.97-2.4-13.04-7.12-15.36-9.6"/>\r
<path class="amamiya_ren-st" d="M386.03,171.07c0.92,1.29,5.93,8.03,15.36,9.6c9.15,1.53,15.91-2.9,17.28-3.84c0.3,0.87,2.73,8.39-1.92,15.36\r
	c-5.31,7.95-14.84,7.7-15.36,7.68c4.56,8.84,5.66,16.04,5.76,21.12c0.09,4.34-0.52,8.51,1.92,13.44c0.85,1.72,3.15,6.36,7.68,7.68\r
	c5.03,1.46,11.31-1.62,15.36-7.68c0.24,0.97,2.29,10.03-3.84,17.28c-4.98,5.89-13.34,8.19-21.12,5.76\r
	c2.04,2.77,4.75,7.33,5.76,13.44c2.53,15.39-8.01,27.09-9.6,28.8c-1.28-3.84-2.56-7.68-3.84-11.52c-1.83,12.36-6.26,20.28-9.6,24.96\r
	c-5.62,7.87-7.95,6.29-24.96,23.04c-4.04,3.98-6.65,6.77-11.52,9.6c-6.58,3.83-12.96,5.2-17.28,5.76"/>\r
<path class="amamiya_ren-st" d="M138.32,161.47c-0.93-0.68-6.91-5.2-7.68-13.44c-0.83-8.85,5.01-14.65,5.76-15.36\r
	c-0.25,1.31-1.05,6.34,1.92,11.52c3.18,5.54,8.41,7.31,9.6,7.68"/>\r
<path class="amamiya_ren-st" d="M378.35,207.56c-8.05,7.65-19.44,16.42-34.56,23.04c-22.01,9.64-40.25,9.62-55.69,9.6\r
	c-20.04-0.02-26.63-3.64-30.72-7.68c-5.06-4.99-6.91-11.24-7.68-15.36c-5.98,9.56-4.68,15.08-3.84,17.28\r
	c3.18,8.31,16.85,14.12,28.8,19.2c3.4,1.45,5.3,2.09,5.76,3.84c1.45,5.55-13.38,15.83-26.88,19.2c-16.53,4.12-31.28-2.06-38.4-5.76"\r
	/>\r
<path class="amamiya_ren-st" d="M309.22,368.86c9.03,6.89,18.81,15.15,28.8,24.96c11.56,11.35,21.07,22.5,28.8,32.64\r
	c-20.7-17.12-40.26-23.92-51.85-26.88c0,0-26.28-6.73-44.17,1.92c-1.4,0.68-5.33,2.58-5.76,5.76c-0.39,2.85,2.34,4.48,1.92,5.76\r
	c-0.91,2.75-15.88,2.32-36.48-3.84c-41.24-12.33-54.2-24.85-57.61-28.8c-3-3.47-4.72-6.15-5.76-7.68\r
	c-9.89-14.57-31.83-34-84.49-55.69c23.01-6.44,41.55-6.64,53.77-5.76c25.02,1.8,47.47,9.88,78.73,21.12\r
	c6.54,2.35,11.87,4.4,15.36,5.76c-3.38,1.32-11.48,5.05-15.36,13.44c-2.11,4.55-2.27,8.95-1.92,13.44\r
	c1.39,17.97,10.78,36.07,15.36,44.17"/>\r
<path class="amamiya_ren-st" d="M213.21,365.01c4.43,3.88,24.41,20.51,53.77,19.2c21.53-0.96,36.54-11.06,42.25-15.36"/>\r
<path class="amamiya_ren-st" d="M234.33,363.09c1.2,1.88,3.58,5.07,7.68,7.68c4.71,3,9.24,3.66,11.52,3.84"/>\r
<path class="amamiya_ren-st" d="M201.69,326.61c-3.11-3.53-6.5-7.98-9.6-13.44c-1.52-2.67-2.79-5.25-3.84-7.68c-2.56,0-5.12,0-7.68,0\r
	c1.92-1.28,3.84-2.56,5.76-3.84c-2.1-4.67-4.23-10.47-5.76-17.28c-2.4-10.69-2.45-20.03-1.92-26.88c5.2,3.78,10.95,7.67,17.28,11.52\r
	c6.01,3.65,11.8,6.83,17.28,9.6c-0.64-2.56-1.28-5.12-1.92-7.68"/>\r
<path class="amamiya_ren-st" d="M217.05,272.84c0.52,2.03,1.56,4.94,3.84,7.68c2.15,2.59,4.32,3.73,7.68,5.76c2.81,1.7,6.79,4.23,11.52,7.68"/>\r
<path class="amamiya_ren-st" d="M247.77,301.65c4.48,5.12,8.96,10.24,13.44,15.36"/>\r
<path class="amamiya_ren-st" d="M228.57,340.05c3.2,0,6.4,0,9.6,0c0.64,1.28,1.28,2.56,1.92,3.84c0.64-1.92,1.28-3.84,1.92-5.76\r
	c1.64-0.3,3.64-0.85,5.76-1.92c5.6-2.82,8.45-7.43,9.6-9.6"/>\r
<path class="amamiya_ren-st" d="M290.02,328.53c-1.52,0.44-4.4,1.33-5.76,3.84c-1.05,1.94-0.55,3.88,0,7.68c0.45,3.11,1.07,7.01,1.92,11.52\r
	c-0.64,1.92-1.28,3.84-1.92,5.76c1.92-0.64,3.84-1.28,5.76-1.92c1.3,1.16,3.21,2.62,5.76,3.84c2.19,1.05,4.2,1.61,5.76,1.92\r
	c0.64,1.28,1.28,2.56,1.92,3.84c1.28-1.28,2.56-2.56,3.84-3.84c3.04-0.79,7.02-1.99,11.52-3.84c3.35-1.38,7.35-3.03,11.52-5.76\r
	c9.24-6.06,14.14-14.07,17.28-19.2c2.83-4.62,4.65-8.72,5.76-11.52c-8.32,0-16.64,0-24.96,0c-0.64-1.28-1.28-2.56-1.92-3.84\r
	c-1.28,1.28-2.56,2.56-3.84,3.84C321.65,321.06,300.95,325.34,290.02,328.53z"/>\r
<path class="amamiya_ren-st" d="M155.6,226.76c0.67-3.05,3.06-12.13,11.52-19.2c11.29-9.45,24.6-7.97,26.88-7.68\r
	c-3.33,1.35-11.1,5.02-17.28,13.44c-6.39,8.71-7.45,17.55-7.68,21.12"/>\r
<path class="amamiya_ren-st" d="M122.96,176.83c-0.7,3.55-1.57,8.86-1.92,15.36c-0.59,10.97-0.91,16.98,1.92,23.04\r
	c5.77,12.36,21.62,18.43,24.96,15.36c1.9-1.74-0.24-6.44,1.92-7.68c1.46-0.84,3.86,0.52,5.76,1.92"/>\r
<path class="amamiya_ren-st" d="M197.85,284.36c1.62-1.17,3.38,0.06,36.48,21.12c11.63,7.4,15.42,9.8,15.36,13.44\r
	c-0.12,7.42-16.16,16.31-28.8,13.44C199.39,327.48,191.03,289.28,197.85,284.36z"/>\r
<path class="amamiya_ren-st" d="M291.94,334.29c1.84-2.76,5.08-2.24,19.2-3.84c17.14-1.95,20.06-3.59,21.12-1.92\r
	c3.24,5.09-17.03,31.47-30.72,26.88C293.56,352.74,288.32,339.72,291.94,334.29z"/>\r
</svg>\r
`,mc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.americanball-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="americanball-st" d="M87.03,167.43c28.94-52.29,89.99-95.36,162.48-94.47c107.86,1.33,160.38,99,164.37,106.75\r
	c19.53,37.89,21.09,73.92,20.78,90.69c-0.31,17.09-1.21,66.56-34.95,106.75c-46.7,55.61-122.83,53.6-149.26,52.9\r
	c-14.47-0.38-124.62-4.85-167.2-82.18c-15.02-27.27-16.84-54.9-17.95-71.79C64.24,259.97,61.74,213.13,87.03,167.43z"/>\r
<path class="americanball-st" d="M136.15,399.82c79.98-0.31,159.96-0.63,239.94-0.94"/>\r
<path class="americanball-st" d="M102.14,373.37c100.76-0.63,201.53-1.26,302.29-1.89"/>\r
<path class="americanball-st" d="M82.31,345.97c112.41-0.31,224.83-0.63,337.24-0.94"/>\r
<path class="americanball-st" d="M70.97,317.63c119.34,0.31,238.68,0.63,358.02,0.94"/>\r
<path class="americanball-st" d="M307.13,236.39c34.01-0.31,68.02-0.63,102.02-0.94c1.78,5.78,3.87,15.1,2.83,26.45\r
	c-0.47,5.12-2.43,26.62-17,38.73c-25.41,21.11-75.96,2.7-84.07-19.84c-2.63-7.31-3.58-22.21-3.78-25.51\r
	C306.66,247.51,306.85,240.99,307.13,236.39z"/>\r
<path class="americanball-st" d="M155.99,235.45c34.95,0,69.9,0,104.86,0c1.42,5.32,2.96,13.15,2.83,22.67c-0.08,5.9-0.27,20.83-6.61,31.17\r
	c-15.52,25.31-70.39,27.32-88.8,4.72c-4.25-5.21-6.11-11.19-8.5-18.89C154.68,258.77,155.04,244.41,155.99,235.45z"/>\r
<path class="americanball-st" d="M66.25,292.13c33.06-0.31,66.13-0.63,99.19-0.94"/>\r
<path class="americanball-st" d="M255.18,291.18c20.47-0.31,40.94-0.63,61.4-0.94"/>\r
<path class="americanball-st" d="M402.54,292.13c10.39,0,20.78,0,31.17,0"/>\r
<path class="americanball-st" d="M411.99,264.73c7.56,0,15.11,0,22.67,0"/>\r
<path class="americanball-st" d="M410.1,238.28c7.24,0,14.48,0,21.73,0"/>\r
<path class="americanball-st" d="M263.68,264.73c14.8,0,29.6,0,44.4,0"/>\r
<path class="americanball-st" d="M261.79,238.28c15.11,0,30.23,0,45.34,0"/>\r
<path class="americanball-st" d="M266.51,211.83c53.22-0.31,106.43-0.63,159.65-0.94"/>\r
<path class="americanball-st" d="M266.51,183.49c49.75-0.31,99.5-0.63,149.26-0.94"/>\r
<path class="americanball-st" d="M266.51,131.53c36.84-0.31,73.68-0.63,110.52-0.94"/>\r
<path class="americanball-st" d="M265.57,156.1c44.4,0,88.8,0,133.2,0"/>\r
<path class="americanball-st" d="M266.51,96.58c23.3,0.63,46.6,1.26,69.9,1.89"/>\r
<path class="americanball-st" d="M264.63,73.91c0.31,54.79,0.63,109.58,0.94,164.37"/>\r
<path class="americanball-st" d="M65.3,263.79c30.54,0.31,61.09,0.63,91.63,0.94"/>\r
<path class="americanball-st" d="M87.03,242.06c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C83.25,242.06,85.14,242.06,87.03,242.06z"/>\r
<path class="americanball-st" d="M125.76,242.06c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C121.98,242.06,123.87,242.06,125.76,242.06z"/>\r
<path class="americanball-st" d="M106.87,223.17c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C103.09,223.17,104.98,223.17,106.87,223.17z"/>\r
<path class="americanball-st" d="M145.6,223.17c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C141.82,223.17,143.71,223.17,145.6,223.17z"/>\r
<path class="americanball-st" d="M87.03,204.27c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C83.25,204.27,85.14,204.27,87.03,204.27z"/>\r
<path class="americanball-st" d="M125.76,204.27c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C121.98,204.27,123.87,204.27,125.76,204.27z"/>\r
<path class="americanball-st" d="M164.78,204.27c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C161,204.27,162.89,204.27,164.78,204.27z"/>\r
<path class="americanball-st" d="M184.33,223.17c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C180.55,223.17,182.44,223.17,184.33,223.17z"/>\r
<path class="americanball-st" d="M223.06,223.17c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C219.28,223.17,221.17,223.17,223.06,223.17z"/>\r
<path class="americanball-st" d="M203.49,204.27c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C199.71,204.27,201.6,204.27,203.49,204.27z"/>\r
<path class="americanball-st" d="M242.71,204.27c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C238.93,204.27,240.82,204.27,242.71,204.27z"/>\r
<path class="americanball-st" d="M106.68,185.38c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C102.9,185.38,104.79,185.38,106.68,185.38z"/>\r
<path class="americanball-st" d="M145.49,185.38c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C141.71,185.38,143.6,185.38,145.49,185.38z"/>\r
<path class="americanball-st" d="M183.99,185.38c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C180.21,185.38,182.1,185.38,183.99,185.38z"/>\r
<path class="americanball-st" d="M223.34,185.38c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C219.56,185.38,221.45,185.38,223.34,185.38z"/>\r
<path class="americanball-st" d="M125.67,166.49c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C121.89,166.49,123.78,166.49,125.67,166.49z"/>\r
<path class="americanball-st" d="M164.69,166.49c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C160.91,166.49,162.8,166.49,164.69,166.49z"/>\r
<path class="americanball-st" d="M203.4,166.49c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C199.62,166.49,201.51,166.49,203.4,166.49z"/>\r
<path class="americanball-st" d="M242.61,166.49c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C238.84,166.49,240.73,166.49,242.61,166.49z"/>\r
<path class="americanball-st" d="M106.21,147.59c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C102.43,147.59,104.32,147.59,106.21,147.59z"/>\r
<path class="americanball-st" d="M145.23,147.59c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C141.45,147.59,143.34,147.59,145.23,147.59z"/>\r
<path class="americanball-st" d="M183.94,147.59c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C180.16,147.59,182.05,147.59,183.94,147.59z"/>\r
<path class="americanball-st" d="M223.15,147.59c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C219.38,147.59,221.27,147.59,223.15,147.59z"/>\r
<path class="americanball-st" d="M125.86,128.7c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C122.08,128.7,123.97,128.7,125.86,128.7z"/>\r
<path class="americanball-st" d="M164.88,128.7c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C161.1,128.7,162.99,128.7,164.88,128.7z"/>\r
<path class="americanball-st" d="M203.59,128.7c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C199.81,128.7,201.7,128.7,203.59,128.7z"/>\r
<path class="americanball-st" d="M242.8,128.7c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C239.03,128.7,240.91,128.7,242.8,128.7z"/>\r
<path class="americanball-st" d="M145.55,110.75c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C141.78,110.75,143.67,110.75,145.55,110.75z"/>\r
<path class="americanball-st" d="M184.27,110.75c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C180.49,110.75,182.38,110.75,184.27,110.75z"/>\r
<path class="americanball-st" d="M223.48,110.75c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C219.7,110.75,221.59,110.75,223.48,110.75z"/>\r
<path class="americanball-st" d="M170.92,90.08c0,0,0.89,1.78,0.89,1.78c1.89,0,3.78,0,5.67,0c-1.57,1.89-3.15,3.78-4.72,5.67\r
	c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83c0.63-2.2,1.26-4.41,1.89-6.61\r
	c-0.82-0.99-1.65-1.98-2.47-2.96"/>\r
<path class="americanball-st" d="M203.91,91.86c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C200.14,91.86,202.02,91.86,203.91,91.86z"/>\r
<path class="americanball-st" d="M243.13,91.86c1.26-1.89,2.52-3.78,3.78-5.67c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0\r
	c-1.57,1.89-3.15,3.78-4.72,5.67c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83\r
	c0.63-2.2,1.26-4.41,1.89-6.61c-1.57-1.89-3.15-3.78-4.72-5.67C239.35,91.86,241.24,91.86,243.13,91.86z"/>\r
<path class="americanball-st" d="M91.21,160.83c0.94,1.89,1.89,3.78,2.83,5.67c1.89,0,3.78,0,5.67,0c-1.57,1.89-3.15,3.78-4.72,5.67\r
	c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83c-1.89,0.94-3.78,1.89-5.67,2.83c0.63-2.2,1.26-4.41,1.89-6.61\r
	c0,0-1.27-1.52-1.27-1.53"/>\r
<path class="americanball-st" d="M68.27,220.48c0.67,1.34,1.34,2.68,2.01,4.02c1.89,0,3.78,0,5.67,0c-1.57,1.89-3.15,3.78-4.72,5.67\r
	c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83"/>\r
<path class="americanball-st" d="M233.97,73.42c-0.02,0.03-3.1,3.72-3.12,3.75c0.63,2.2,1.26,4.41,1.89,6.61c-2.2-0.94-4.41-1.89-6.61-2.83\r
	c-1.89,0.94-3.78,1.89-5.67,2.83c0.63-2.2,1.26-4.41,1.89-6.61c0-0.01-1.88-2.26-1.89-2.26"/>\r
</svg>\r
`,hc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.among-us-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="among-us-st" d="M208.08,157.62c14.59-15.07,34.41-15.71,57.64-16.47c20.29-0.66,33.85-1.1,47.86,7.72\r
	c14.26,8.97,27.36,26.76,26.76,47.35c-0.11,3.74-0.51,13.54-6.69,23.16c-15.24,23.72-51.02,23.7-82.35,23.67\r
	c-22.56-0.02-34.29-0.21-44.26-9.26c-15.19-13.8-13.68-36.7-13.38-41.17C193.99,187.79,195.29,170.82,208.08,157.62z"/>\r
<path class="among-us-st" d="M373.8,288.34c-0.2,0.43-2.63,5.58-7.21,6.18c-4.82,0.63-10.54-3.97-11.32-11.32\r
	c-0.88-4.45-1.72-12.09,1.03-20.59c0.56-1.72,11.3-28.49,37.06-28.82c19.01-0.25,33.35,14.1,38.09,28.82\r
	c4.06,12.62,0.49,23.75-1.03,27.79c-0.22,0.47-2.22,4.5-6.18,5.15c-4.17,0.69-8.98-2.64-10.29-8.23\r
	c-0.04,5.84-4.52,10.75-10.29,11.32c-5.84,0.58-11.25-3.46-12.35-9.26c-0.48,4.56-4.12,8.01-8.23,8.23\r
	C378.3,297.87,373.81,293.73,373.8,288.34z"/>\r
<path class="among-us-st" d="M303.29,143.72c-3.43-8.44-13.23-29.14-36.03-43.23c-26.01-16.08-52.22-13.22-63.3-11.84\r
	c-10.44,1.3-30.89,3.84-46.84,18.01c-20.68,18.39-22.72,46.53-24.19,72.57c-2.4,42.44-4.17,94.92-3.6,155.95"/>\r
<path class="among-us-st" d="M141.17,313.05c-11.32,19.56-22.65,39.11-33.97,58.67c-1.49,1.95-6.59,9.15-6.18,19.56\r
	c0.44,10.88,6.61,17.84,8.23,19.56c8.58,5.49,17.16,10.98,25.73,16.47c1.95,0.96,8.36,3.8,16.47,2.06\r
	c9.38-2.01,14.34-8.72,15.44-10.29c16.19-25.09,28-43.3,29.85-46.32c0.31-0.5,1.24-2.05,3.09-3.09c1.77-0.99,3.48-1.01,4.12-1.03\r
	c29.6-0.68,32.77-0.46,39.11,0c0.53,0.04,1.87,0.13,3.09,1.03c1.46,1.07,1.93,2.7,2.06,3.09c0.89,2.75,7.35,14.77,17.5,32.94\r
	c1.02,1.95,3.17,5.42,7.21,8.23c6.01,4.2,12.26,4.21,14.41,4.12c14.41-0.34,28.82-0.69,43.23-1.03c1.06-0.07,6.95-0.55,10.29-5.15\r
	c3.78-5.2,2.86-13.64-3.09-19.56c-9.75-6.94-16.82-11.92-19.81-13.78c-0.5-0.31-1.74-1.16-2.84-2.69c-1.54-2.14-1.96-4.49-2.06-6.18\r
	c-0.69-5.83-1.37-11.67-2.06-17.5c0.04-1.57,0.25-3.73,1.03-6.18c0.87-2.74,2.12-4.82,3.09-6.18c1.03-1.72,2.06-3.43,3.09-5.15\r
	c0.71-1.35,1.47-3.08,2.06-5.15c0.84-2.91,0.98-5.25,1.03-6.18c0.19-3.53,2.32-42.3,5.15-95.73"/>\r
<path class="among-us-st" d="M133.97,167.91c-21.72,1.01-40.21,11.44-47.35,27.79c-3.06,7.02-3.52,13.95-3.09,19.56\r
	c-0.34,29.51-0.69,59.02-1.03,88.52c0.02,4.33,0.7,14.12,7.21,23.67c11.18,16.4,30.17,18.3,32.94,18.53"/>\r
</svg>\r
`,gc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.araya-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="araya-st" d="M114.5,357.5c-5.68-0.88-13.5-2.75-22-7c-11.93-5.96-19.69-13.86-24-19c3.59-9.86,8.16-20.65,14-32\r
	c3.94-7.65,7.99-14.65,12-21c-8.67,6.33-17.33,12.67-26,19c0.42-4.78,1.18-11.35,2.61-19.06c6.09-32.85,18.78-55.99,23.39-63.94\r
	c5.73-9.85,14.35-22.67,27-36"/>\r
<path class="araya-st" d="M101.5,204.5c-6.5,1.76-22.04,4.95-37.79-2.44c-3.83-1.8-7.05-3.93-9.71-6.06c5.32,0.05,13.63-0.66,21.5-5.5\r
	c8.95-5.51,13.04-13.72,14.5-16.5c11.6-22.12,47.99-65.59,83-83c11.81-5.87,30.58-12.32,58-11c11.55-2.98,61.17-14.42,110.5,13.5\r
	c70.95,40.15,74.86,124.1,75,129c7.68,10.42,16.82,25.1,24,44c9.61,25.31,11.78,47.86,12,63c-4.1-4.47-10.32-10.18-19-15\r
	c-5.09-2.83-9.9-4.72-14-6c12.21,29.83,16.38,51.83,18,65c0.53,4.34,0.74,7.28-1,10c-8.88,13.92-57.71,5.48-77,5\r
	c-1.26-0.03-4.4-0.06-8,1c-4.52,1.33-7.45,3.62-8,4c-7.92,5.53-55,20.75-122,16c-18.31-1.3-36.68-1.73-55-3\r
	c-4.24-0.29-10.11-0.73-18,0c-12.43,1.15-14.34,3.75-23,4c-9.99,0.29-10.15-3.08-26-6c-17.51-3.22-24.82-0.61-27-5\r
	c-2.22-4.46,4.07-9.75,10-22c5.25-10.85,7.2-20.91,8-28"/>\r
<path class="araya-st" d="M199.5,141.5c-3.32,7.51-7.19,18.84-8,33c-1.41,24.7,7.35,43.53,12,52c2.46-20.13,3.52-25.04,4-25\r
	c0.48,0.04,0.3,5.02,2,13c1.37,6.43,2.41,7.5,3,8c2.68,2.27,5.6,0.72,13,1c6.29,0.23,6.69,1.44,13,2c3.68,0.32,9.13,0.41,16-1\r
	c-3.86-11.47-3.62-20.61-3-26c0.48-4.15,1.98-9.1,5-19c3.34-10.96,5.04-16.45,7-17c6.24-1.76,19.55,14.33,22,32\r
	c1.92,13.8-3.28,25.01-6,30c3.81-0.68,8.77-2.21,13-6c6.79-6.1,8.1-14.31,10-14c1.01,0.17,2,2.72,2,13c5.15,0.56,9.56,0.84,13,1\r
	c8.48,0.39,11.51,0.01,14-2c1.63-1.31,2.52-2.91,3-4"/>\r
<path class="araya-st" d="M193.5,157.5c-10.96,11.91-22.48,25.54-34,41c-10.36,13.9-19.3,27.36-27,40"/>\r
<path class="araya-st" d="M136.5,202.5c-2.04,4.37-10.56,23.85-3,47c6.39,19.57,20.41,29.9,25,33c-2.79,1.49-9.32,4.5-18,4\r
	c-10.6-0.61-17.68-6.05-20-8"/>\r
<path class="araya-st" d="M329.5,180.5c2.71,12.29,5.01,27.89,5,46c-0.01,21.85-3.39,40.27-7,54"/>\r
<path class="araya-st" d="M345.5,243.5c-0.7,4.79-4.74,28.83-26,43c-9.05,6.03-18.06,8.17-24,9c4.16,1.67,10.33,3.59,18,4\r
	c10.73,0.57,19.22-2.09,24-4"/>\r
<path class="araya-st" d="M241.5,320.5c10.62-0.31,23.58-1.58,38-5c18.72-4.44,33.86-11.07,45-17"/>\r
<path class="araya-st" d="M132.5,285.5c10.24,13.58,21.26,20.52,28,24c13.5,6.96,25.97,8.34,41,10c11.88,1.31,21.89,1.29,29,1"/>\r
<path class="araya-st" d="M325.5,299.5c1.23,3.96,2.25,9.08,2,15c-0.81,19.27-14.38,31.84-18,35c4.72,0.81,11.22,1.68,19,2\r
	c4.95,0.2,13.63,0.51,24-1c15.53-2.27,29.43-4.3,34-14c1.02-2.17,3.12-7.98-1-18c3.36,0.88,9.04,1.92,16,1c6.84-0.9,11.99-3.31,15-5\r
	c-3.98-0.93-9.88-2.83-16-7c-3.95-2.69-6.89-5.58-9-8c1.32-3.18,3.17-8.38,4-15c1.04-8.31-0.01-15-1-20\r
	c-2.56-12.92-9.38-38.04-20-70"/>\r
<path class="araya-st" d="M251.5,327.5c-2.25-2.34-8.72-8.42-17-8c-13.34,0.68-23.27,17.84-22,32c0.26,2.86,1.89,15.94,13,21\r
	c8.11,3.69,16.09,0.76,18,0"/>\r
<path class="araya-st" d="M251.5,327.5c-5.49,7.12-7.89,13.88-9,18c-3.41,12.63-0.95,23.17,0,27c1.62,6.55,3.09,7.38,6,16\r
	c3.06,9.06,4.37,16.83,5,22"/>\r
<path class="araya-st" d="M266.5,318.5c10.33,2.54,23.51,7.18,37,16c4.51,2.95,8.49,6,12,9"/>\r
<path class="araya-st" d="M321.5,351.5c3.59,4.27,7.35,9.26,11,15c5.99,9.41,10.12,18.36,13,26"/>\r
<path class="araya-st" d="M169.5,339.5c1.25-2.25,2.87-4.65,5-7c8.92-9.85,20.78-12.28,26-13"/>\r
<path class="araya-st" d="M204.5,320.5c0.41,1.79,1.03,3.83,2,6c2.34,5.23,5.61,8.82,8,11"/>\r
<path class="araya-st" d="M106.5,405.5c-1.62-3.22-3.9-8.84-4-16c-0.09-6.31,1.56-11.75,4-17c2.49-5.36,24.03-51.63,47-47\r
	c10.92,2.2,21.17,15.71,20,29c-0.08,0.89-1.67,16.34-15,21c-8.61,3.01-18.53,0.27-25-7"/>\r
<path class="araya-st" d="M137.5,330.5c-2.8,16.88-3.74,31.16-4,42c-0.27,11.48,0.21,19.97,6,27c2.98,3.62,6.46,5.75,9,7"/>\r
<path class="araya-st" d="M159.5,375.5c1.67,1.83,3.9,4.83,5,9c3,11.35-5.06,20.92-6,22"/>\r
<path class="araya-st" d="M148.5,301.5c-1.36,1.81-2.81,4.13-4,7c-3.1,7.49-2.57,14.38-2,18"/>\r
<path class="araya-st" d="M186.5,383.5c9.67,2.23,21.1,4.15,34,5c10.29,0.68,19.7,0.54,28,0"/>\r
<path class="araya-st" d="M204.5,320.5c-5.03,12.83-10,27.9-14,45c-3.58,15.3-5.73,29.44-7,42"/>\r
<path class="araya-st" d="M194.5,349.5c0.37,3.06,1.73,10.88,8,18c4.75,5.39,10.12,7.9,13,9"/>\r
<path class="araya-st" d="M218.5,367.5c-0.43,2.41-1.27,5.58-3,9c-2.8,5.55-6.58,9.08-9,11"/>\r
<path class="araya-st" d="M253.5,221.5c2.11-2.43,6.01-6.25,12-9c8.17-3.75,15.62-3.38,19-3"/>\r
<path class="araya-st" d="M297.5,212.5c1.05,0.65,17.07,10.84,17,28c-0.07,17.52-16.86,32.89-35,32c-15.61-0.77-29.13-13.42-31-28\r
	c-1.12-8.7,2.21-15.79,4-19"/>\r
<path class="araya-st" d="M200.5,220.5c-2.44-1.45-18.81-10.83-35-4c-19.64,8.28-28.92,36.14-20,48c4.34,5.78,12.12,6.59,16,7\r
	c16.26,1.71,32.5-9.38,39-24c3.67-8.26,3.56-16.12,3-21"/>\r
<path class="araya-st" d="M206.5,266.5c0.57,10.44,9.13,18.17,18,18c9.96-0.19,18.88-10.29,17-22"/>\r
<path class="araya-st" d="M253.5,191.5c2.95-0.37,6.8-1.19,11-3c6.87-2.96,11.44-7.2,14-10"/>\r
<path class="araya-st" d="M178.5,189.5c1.49,1.29,3.48,2.75,6,4c5.22,2.59,10.09,3,13,3"/>\r
<path class="araya-st" d="M240.5,225.5c-7.94-37.27-4.17-64.98,0-82c2.05-8.36,5.95-21.33,8-21c2.47,0.39,0.43,19.85,1,54\r
	c0.2,11.88,0.65,21.61,1,28"/>\r
<path class="araya-st" d="M331.5,351.5c4.86-7,10.97-17.07,16-30c19.88-51.11,3.92-98.45,7-99c2.49-0.44,14.43,30.36,14,69\r
	c-0.27,24.45-5.41,44.46-10,58"/>\r
<path class="araya-st" d="M101.5,353.5c-3.56-33.88,1.07-59.71,6-77c4.51-15.81,10.68-29.39,12-29c1.61,0.48-6.49,20.95-5,46\r
	c1.13,18.97,7.39,34.37,13,45"/>\r
<path class="araya-st" d="M105.5,375.5c1.52-1.64,4.14-4.1,8-6c2.26-1.12,7.99-3.95,10-2c2.61,2.53-2.71,11.51-3,12\r
	c-3.18,5.3-7.41,8.4-10,10c1.44,0.7,5.7,2.98,8,8c1.22,2.66,2.68,7.82,1,9c-1.39,0.98-5.36-0.49-17-12"/>\r
<path class="araya-st" d="M170.5,367.5c1.13-1.34,3.41-3.66,7-5c2.93-1.09,8.55-2.21,10,0c1.65,2.52-2.61,8.63-7,12\r
	c-3.34,2.56-6.79,3.56-9,4c1.03,0.85,3.1,2.81,4,6c0.36,1.28,1.09,3.85,0,5c-1.45,1.54-5.87,0.29-11-3"/>\r
<path class="araya-st" d="M247.5,387.5c-0.01-0.84,0.09-2.4,1-4c1.85-3.26,5.46-3.91,6-4c-1.6-0.99-7.34-4.82-9-12\r
	c-0.92-3.98-0.96-10.57,2-12c3.12-1.51,9.23,2.9,15,11c0.53-3.11,1.92-8.33,6-13c6.21-7.1,16.64-10.62,19-8\r
	c1.56,1.73-1.83,4.55-3,13c-1.14,8.21,1.28,11.11-1,15c-1.37,2.33-4.41,5.01-12,6c1.36,0.83,5.67,3.67,7,9c0.19,0.75,1.53,6.11-1,8\r
	c-2.39,1.78-7.22-0.28-10-3c-3.57-3.5-3.76-8.12-5-8c-1.35,0.13-0.89,4.81-4,8c-2.19,2.25-5.32,2.89-8,3"/>\r
<path class="araya-st" d="M312.5,341.5c-2.1,1.27-5.5,3.73-8,8c-1.23,2.1-3.48,5.95-2,8c1.53,2.12,6.25,1.26,9,0c3.62-1.66,5.37-4.74,6-6\r
	"/>\r
</svg>\r
`,_c=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.arknights-st{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\r
</style>\r
<path class="arknights-st" d="M19.5,255.75v3.75c27.67,9.33,55.33,18.67,83,28c0.33-31,0.67-62,1-93c-4.33,0.67-8.67,1.33-13,2l-5-3l-2,2\r
	c1.62,1.08,3.24,2.16,4.85,3.24c0.72,0.48,1.15,1.28,1.15,2.14l0,33.75c0,0.5-0.4,0.91-0.9,0.92c-1.24,0.01-3.09-0.16-5.1-1.04\r
	c-1.62-0.71-2.83-1.65-3.69-2.5c-0.85-0.84-1.31-2-1.31-3.19l0-32.31l2-3c-5.33-6-10.67-12-16-18v92.9c0,0.54-0.53,0.92-1.04,0.75\r
	l-42.78-14.26C20.1,254.7,19.5,255.13,19.5,255.75z"/>\r
<path class="arknights-st" d="M78.5,240.26c0-1.15,0.75-2.18,1.85-2.48c0.86-0.23,1.93-0.39,3.15-0.28c2.29,0.2,3.98,1.24,5,2.07\r
	c0.64,0.52,1,1.29,1,2.11l0,33.22c0,0.91-0.77,1.63-1.68,1.56c-1.21-0.1-2.7-0.35-4.32-0.96c-1.61-0.6-2.9-1.38-3.86-2.09\r
	c-0.72-0.53-1.14-1.36-1.14-2.26L78.5,240.26z"/>\r
<path class="arknights-st" d="M112.5,188.5c5.33,5.33,10.67,10.67,16,16c2.81,0.8,5.83,1.78,9,3c2.51,0.97,4.84,1.98,7,3\r
	c5.33-0.33,10.67-0.67,16-1c-0.33,2.67-0.67,5.33-1,8v91c-6.67,8.33-13.33,16.67-20,25v-5c-5.33-5.33-10.67-10.67-16-16\r
	c5.33,2,10.67,4,16,6c1.46,0.43,3.01,0.05,4-1c1.14-1.2,1.02-2.75,1-3v-29.1c0-1.17-0.67-2.24-1.73-2.74\r
	c-2.38-1.11-5.14-2.21-8.27-3.16c-2.08-0.63-4.06-1.11-5.9-1.47c-1.63-0.32-3.19,0.8-3.4,2.45c-0.71,5.49-2.57,13.61-7.7,22.02\r
	c-8.32,13.65-20.19,19.82-25,22c3.38-5.24,6.9-11.58,10-19c5.95-14.25,8.18-27.27,9-37C111.83,241.83,112.17,215.17,112.5,188.5z"/>\r
<path class="arknights-st" d="M127.5,234.72v-22.35c0-1.59,1.4-2.81,2.98-2.61c1.26,0.16,2.6,0.4,4.02,0.74c3.33,0.8,6.12,1.96,8.34,3.09\r
	c1.02,0.52,1.66,1.56,1.66,2.7v26.51c0,0.86-0.82,1.49-1.65,1.26c-2.26-0.64-4.73-1.47-7.35-2.56c-1.98-0.83-3.8-1.7-5.44-2.57\r
	C128.49,238.1,127.5,236.49,127.5,234.72z"/>\r
<path class="arknights-st" d="M126.57,271.42c0.28-8.06,0.56-16.12,0.83-24.17c0.05-1.58,1.36-2.85,2.94-2.8c0.38,0.01,0.76,0.03,1.15,0.06\r
	c4.44,0.31,8.16,1.59,10.98,2.94c1.24,0.59,2.02,1.84,2.02,3.22v26.93c0,0.96-0.92,1.67-1.85,1.42c-2.61-0.72-5.33-1.55-8.15-2.51\r
	c-2.1-0.72-4.11-1.46-6.03-2.21C127.29,273.83,126.53,272.68,126.57,271.42z"/>\r
<path class="arknights-st" d="M193.5,295.5c4,1.33,8,2.67,12,4v-4c-1.98-0.15-4.85-0.6-8-2c-1.26-0.56-2.37-1.18-3.32-1.8\r
	c-1.05-0.68-1.68-1.84-1.68-3.1l0-46.1c0.07-0.19,0.58-1.52,2-2c0.91-0.31,1.71-0.1,2,0c10.67,3.33,21.33,6.67,32,10\r
	c0.8,0.15,3.35,0.72,5,3c0.51,0.7,0.81,1.41,1,2c0.31,13.32,0.62,26.64,0.93,39.96c0.03,1.47-1.41,2.53-2.81,2.05\r
	c-7.71-2.67-15.42-5.34-23.12-8v6c6.33,2,12.67,4,19,6c0.34,0.05,1.24,0.24,2,1c1.18,1.19,1.03,2.78,1,3c0,1.33,0,2.67,0,4\r
	c6.67-8.33,13.33-16.67,20-25v-79c0.67-3,1.33-6,2-9c-6.33,0.33-12.67,0.67-19,1c-13.33-4.33-26.67-8.67-40-13\r
	c-1.94-1.43-3.96-3.09-6-5c-5.49-5.14-9.33-10.49-12-15v145C182.17,304.83,187.83,300.17,193.5,295.5z"/>\r
<path class="arknights-st" d="M192.5,192.5c-0.02-0.25-0.14-1.8,1-3c0.99-1.05,2.54-1.43,4-1c17.87,5.88,30.83,10.25,33,11\r
	c0.59,0.2,1.98,0.69,3,2c0.58,0.75,0.86,1.5,1,2v42.85c0,1.07-1.03,1.83-2.06,1.52L195.5,236.5c-0.34-0.05-1.24-0.24-2-1\r
	c-1.18-1.19-1.03-2.78-1-3C192.5,219.17,192.5,205.83,192.5,192.5z"/>\r
<path class="arknights-st" d="M283.37,247.11c-8.29-2.87-16.58-5.74-24.87-8.61v-6c12.52,3.97,25.04,7.94,37.57,11.91\r
	c1.5,0.48,2.94-0.88,2.56-2.41l-8.13-32.5c3.41,2.04,8.12,5.25,13,10c6.01,5.85,9.85,9.6,10,15c0.14,5.14-3.15,9.3-5.54,11.66\r
	c-0.64,0.64-0.39,1.72,0.46,2.02c9.69,3.44,19.39,6.88,29.08,10.32c1.33-1.67,2.67-3.33,4-5c5.33,4,10.67,8,16,12h-9\r
	c-9.92-2.78-20.29-6.08-31-10c-4.1-1.5-8.09-3.03-11.99-4.59c-0.64-0.26-1.36-0.18-1.93,0.2l-0.5,0.33l-0.81,0.54\r
	c-0.49,0.33-0.81,0.85-0.86,1.44c-0.55,6.13-0.87,12.49-0.92,19.08c0,0.37,0,0.74,0,1.11c0,1.18,0.7,2.23,1.78,2.72\r
	c1.64,0.75,3.39,1.48,5.23,2.17c5.06,1.91,9.8,3.17,14,4v4c-6.23-1.98-12.45-3.96-18.68-5.94c-1.64-0.52-3.34,0.64-3.44,2.36\r
	c-0.54,9.6-3.73,33.21-22.89,48.58c-6.59,5.28-13.4,8.26-19,10c5.09-6.59,11.01-15.57,16-27c6.49-14.87,8.99-28.34,10-38\r
	c0.32-9.27,0.64-18.53,0.96-27.8C284.48,247.99,284.04,247.34,283.37,247.11z"/>\r
<path class="arknights-st" d="M325.5,283.5c6-0.33,12-0.67,18-1c-0.33,2.33-0.67,4.67-1,7c-0.33,11.33-0.67,22.67-1,34c-9,11-18,22-27,33\r
	c-0.33-2-0.67-4-1-6c-5.33-6.33-10.67-12.67-16-19c6.33,3,12.67,6,19,9c0.41,0.11,1.18,0.26,2,0c1.6-0.5,3.12-2.45,4-8\r
	C324.2,321.75,325.45,285.04,325.5,283.5z"/>\r
<path class="arknights-st" d="M347.5,239.5v4c4.67,1.67,9.33,3.33,14,5c0,6.67,0,13.33,0,20c-0.09,5.27-0.75,12.2-3,20\r
	c-2.95,10.25-7.48,17.97-11,23c3.53-1.24,7.35-3.12,11-6c16.26-12.83,16.09-35.1,16-39c0.23-3.24,0.46-6.47,0.69-9.71\r
	c0.15-2.17,2.32-3.6,4.38-2.9c10.31,3.53,20.62,7.07,30.93,10.6c0.42,0.1,1.92,0.53,3,2c0.91,1.24,0.99,2.53,1,3c0,13,0,26,0,39\r
	c-0.25,1.86-1.39,3.41-3,4c-1.34,0.49-2.55,0.15-3,0c-5.67-2.67-11.33-5.33-17-8c5.33,6.33,10.67,12.67,16,19c0.33,2,0.67,4,1,6\r
	c7.33-9.33,14.67-18.67,22-28v-80c0.33-1.67,0.67-3.33,1-5c-5.67,0.33-11.33,0.67-17,1v42.78c0,1.09-1.07,1.86-2.1,1.52\r
	c-10.76-3.59-21.53-7.18-32.29-10.76c-2.75-0.92-4.61-3.49-4.61-6.39V213.5c0.08-0.43,0.29-1.28,1-2c1.53-1.57,3.85-1.04,4-1\r
	c10,3.33,20,6.67,30,10c0.33-1.33,0.67-2.67,1-4c-8.33-2.67-16.67-5.33-25-8c4.41-3.86,8.83-7.72,13.24-11.58\r
	c1.41-1.24,1.31-3.47-0.21-4.57c-6.34-4.61-12.69-9.23-19.03-13.84c0.33,8.33,0.67,16.67,1,25c-0.05,0.46-0.24,1.41-1,2\r
	c-1.18,0.92-3.35,0.65-5-1c-4.67-5-9.33-10-14-15v55C356.83,242.83,352.17,241.17,347.5,239.5z"/>\r
<path class="arknights-st" d="M382.5,216.5c0.76-0.63,2.98,0.75,6,3c10.97,8.18,16.57,12.36,17,19c0.05,0.7,0.36,6.93-4,10\r
	c-2.09,1.47-5.55,2.43-8,1c-2.52-1.48-1.76-4.21-4-12c-1.59-5.54-4.33-12.33-5-14C382.84,219.38,381.75,217.12,382.5,216.5z"/>\r
<path class="arknights-st" d="M383.5,262.5c1.96-1.65,10.02,5.17,11,6c5.56,4.71,10.51,8.89,11,15.39c0.07,0.92,0.56,7.45-4,10.61\r
	c-2.04,1.42-5.52,2.46-8,1c-2.72-1.6-1.55-4.63-4-12.61c-1.37-4.45-2.51-6.04-5-14C383.05,264.26,382.88,263.02,383.5,262.5z"/>\r
<path class="arknights-st" d="M434.5,247.5v6c14.67,5,29.33,10,44,15v-6C463.83,257.5,449.17,252.5,434.5,247.5z"/>\r
</svg>\r
`,vc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.asahina_mafuyu-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="asahina_mafuyu-st" d="M198.38,135.7c-0.47,4.97-2.3,29.09,11.65,49.29c10.23,14.81,25.46,22.46,27.78,23.3\r
	c0.21,0.07,0.53,0.19,0.96,0.36c3.4,1.35,5.83,3.1,7.11,4.12c1.28,1.02,2.88,2.48,4.48,4.48"/>\r
<path class="asahina_mafuyu-st" d="M242.3,197.54c1.8,1.09,5.28,3.59,7.17,8.07c2.75,6.52,0.96,14.55-4.48,20.61c3.51-0.84,6.13-2.22,8.07-3.58\r
	c14.83-10.44,11-35.27,10.75-36.74c3.06,2.08,7.25,4.46,12.55,6.27c8.44,2.88,15.9,3,20.61,2.69c-2.16-2.13-4.93-5.36-7.17-9.86\r
	c-1.31-2.63-2.15-5.09-2.69-7.17c4.29,1.93,10.98,5.66,17.03,12.55c3.37,3.84,5.64,7.65,7.17,10.75"/>\r
<path class="asahina_mafuyu-st" d="M305.92,179.62c1.7,4.2,3.45,9.64,4.48,16.13c0.81,5.07,0.99,9.63,0.9,13.44c1.49-2.09,2.99-4.18,4.48-6.27"/>\r
<path class="asahina_mafuyu-st" d="M279.04,111.51c10.43,8.76,24.34,23.49,31.37,44.81c2.89,8.76,3.72,21.38,5.38,46.6\r
	c0.17,2.65,0.47,7.82-0.9,14.34c-0.98,4.68-2.47,8.36-3.58,10.75c2.15-1.61,5.4-4.48,8.07-8.96c2.04-3.43,3.06-6.65,3.58-8.96\r
	c0.16,9.95-0.84,17.87-1.79,23.3c-1.89,10.81-4.5,16.9-1.79,25.09c0.78,2.37,2.45,7.18,7.17,9.86c2.77,1.57,5.52,1.8,7.17,1.79\r
	c-1.29-1.04-3.12-2.78-4.48-5.38c-2.78-5.3-1.89-10.87,0-19.72c2.3-10.73,3.47-14.13,4.48-18.82c2.41-11.21,1.85-19.95,0.9-30.47\r
	c-1.81-19.89-8.12-35.94-13.44-46.6"/>\r
<path class="asahina_mafuyu-st" d="M168.81,233.38c-6.17,18.91-3.84,30.86,0,38.53c4.25,8.5,12.05,15.12,9.86,22.4c-1.22,4.06-4.99,6.56-8.07,8.07\r
	c1.21-1.5,3.34-4.62,2.69-8.07c-0.27-1.42-0.92-2.38-1.79-3.58c-4.05-5.56-7.16-8.2-9.86-11.65c0,0-1.79-2.3-4.52-7.58\r
	c-9.01-17.46-1.75-68.59-1.75-68.59c2.49-17.52,4.69-32,6.27-42.12"/>\r
<path class="asahina_mafuyu-st" d="M198.38,150.94c-5.92,8.67-12.9,21.31-17.03,37.64c-2.11,8.34-6.36,25.95-1.79,47.5\r
	c1.12,5.27,2.5,9.56,3.58,12.55c-2.28-1.2-5.77-3.4-8.96-7.17c-2.51-2.96-3.78-5.67-4.48-7.17c-4.62-9.97-3.89-22.28-3.58-25.99"/>\r
<path class="asahina_mafuyu-st" d="M147.3,171.55c-0.39,5.48-0.39,12.54,0.9,20.61c1.42,8.88,3.95,16.15,6.27,21.51"/>\r
<path class="asahina_mafuyu-st" d="M153.58,217.25c-5.52,1.32-7.95,3.99-8.96,5.38c-5.22,7.15-2.34,20.81,8.96,32.26"/>\r
<path class="asahina_mafuyu-st" d="M166.12,262.06c1.22,0.39,2.73,0.74,4.48,0.9c3.42,0.3,6.24-0.32,8.07-0.9c1.16,1.09,2.99,2.72,5.38,4.48\r
	c6.42,4.73,17.4,10.82,37.64,12.55c32.33,2.75,66.06-7.53,82.45-22.4c3.63-3.29,10.08-9.32,11.65-18.82\r
	c0.88-5.37-0.11-9.91-0.9-12.55"/>\r
<path class="asahina_mafuyu-st" d="M315.78,230.7c0.77-0.17,2.21-0.61,3.58-1.79c1.93-1.66,2.51-3.73,2.69-4.48"/>\r
<path class="asahina_mafuyu-st" d="M141.93,231.59c-6.4-9.02-15.18-24.31-17.92-44.81c-0.67-5.03-4.54-39.19,17.92-69.9\r
	c30.96-42.32,84.61-40.69,92.3-40.33c9.33,0.44,51.86,2.44,79.76,38.53c24.51,31.7,20.69,67.68,19.72,75.28"/>\r
<path class="asahina_mafuyu-st" d="M224.37,76.56c2.73-5.41,5.78-7.32,8.07-8.07c3.39-1.1,5.33,0.3,12.55,0c5.8-0.24,5.11-1.17,8.07-0.9\r
	c6.73,0.62,7.32,5.15,16.13,8.07c4.4,1.46,5.76,0.82,8.07,2.69c3.21,2.6,4.17,6.76,4.48,9.86"/>\r
<path class="asahina_mafuyu-st" d="M246.78,68.49c-0.59,0.72-1.22,1.61-1.79,2.69c-1.1,2.05-1.57,3.98-1.79,5.38"/>\r
<path class="asahina_mafuyu-st" d="M262.01,72.08c-0.59,0.72-1.22,1.61-1.79,2.69c-1.1,2.05-1.57,3.98-1.79,5.38"/>\r
<path class="asahina_mafuyu-st" d="M222.58,76.56c-1.16-0.78-2.91-2.22-3.58-4.48c-1.12-3.75,1.44-7.35,4.48-11.65c2.43-3.43,4.39-6.18,8.07-8.07\r
	c1.53-0.78,3.75-1.6,10.75-1.79c3.91-0.11,9.44-0.02,16.13,0.9"/>\r
<path class="asahina_mafuyu-st" d="M249.46,60.43c0.9-1.87,2.99-5.52,7.17-8.07c3.87-2.36,7.56-2.56,10.75-2.69c1.81-0.08,9.23-0.25,17.92,3.58\r
	c14.08,6.21,21.61,18.56,24.2,23.3"/>\r
<path class="asahina_mafuyu-st" d="M276.35,70.28c4.08-1.19,12.33-2.95,21.51,0c4.42,1.42,8.85,3.87,14.34,8.96c14.1,13.1,14.51,24.53,25.09,39.43\r
	c4.19,5.91,11.07,13.88,22.4,21.51c-1.55,0.91-5.46,2.91-10.75,2.69c-6.17-0.26-10.32-3.39-11.65-4.48\r
	c2.87,4.98,7.87,13.57,14.34,24.2c15.39,25.29,20.25,31.18,22.4,43.02c2.57,14.15-0.7,26.01-1.79,29.57\r
	c-7.16,23.37-25.13,31.03-22.4,44.81c1.2,6.06,5.79,10.21,8.96,12.55c-1.76,0.13-4.33,0.08-7.17-0.9c-6.87-2.37-10-8.32-10.75-9.86\r
	c-1.2,15.14-6.36,21.8-10.75,25.09c-7.95,5.97-18.44,4.68-23.3,13.44c-0.63,1.13-2.07,3.82-1.79,7.17\r
	c0.56,6.65,7.64,12.64,17.92,15.23c-2.02,0.76-4.76,1.54-8.07,1.79c-5.52,0.42-9.95-0.83-12.55-1.79\r
	c-0.32,2.22-1.55,8.79-7.17,14.34c-7.16,7.06-16.12,7.18-17.92,7.17c3.25-3.13,7.6-8.32,7.17-14.34\r
	c-0.77-10.7-15.89-13.78-17.92-24.2c-0.97-4.98,0.8-12.94,15.23-25.09c-0.57,0.64-5.66,6.07-13.44,5.38\r
	c-5.86-0.52-11.02-4.32-13.44-9.86c2.84,2.68,6.57,3.31,8.96,1.79c2.18-1.38,2.82-4.27,2.69-6.27c-0.24-3.53-2.89-4.48-4.48-8.96\r
	c-0.89-2.51-0.96-4.79-0.9-6.27"/>\r
<path class="asahina_mafuyu-st" d="M308.61,271.92c-0.54,1.36-4.76,11.54-15.23,14.34c-4.51,1.21-8.45,0.58-10.75,0c1.7,1.64,7.01,6.32,15.23,7.17\r
	c11.48,1.19,19.4-6.03,20.61-7.17"/>\r
<path class="asahina_mafuyu-st" d="M233.33,279.98c0.86,2.2,2.27,5.39,4.48,8.96c4.34,7,9.3,11.3,8.96,11.65c-0.25,0.26-3.57-1.48-6.27-4.48\r
	c-1.15-1.28-2.15-2.75-3.58-2.69c-0.86,0.04-1.48,0.61-1.79,0.9c-3.08,2.83-6.02,5.52-7.17,5.38c-1.27-0.16-2.58-4.07-2.69-20.61"/>\r
<path class="asahina_mafuyu-st" d="M253.05,278.19c-0.08,1.67-0.29,4.18-0.9,7.17c-2.13,10.52-7.2,17.29-6.27,17.92c0.49,0.33,2.19-1.34,4.48-3.58\r
	c4.4-4.32,4.92-6.01,7.17-7.17c1.64-0.85,4.38-1.51,8.96,0"/>\r
<path class="asahina_mafuyu-st" d="M247.67,285.36c0-2.09,0-4.18,0-6.27"/>\r
<path class="asahina_mafuyu-st" d="M232.44,297.01c2.1,3.29,4.74,6.97,8.07,10.75c2.77,3.16,5.52,5.83,8.07,8.07c1.74-2.31,3.67-5.3,5.38-8.96\r
	c1.2-2.59,2.07-5.02,2.69-7.17"/>\r
<path class="asahina_mafuyu-st" d="M224.37,279.09c-2.36,1.35-6,3.65-9.86,7.17c-1.97,1.79-6.67,6.34-17.92,25.99\r
	c-6.83,11.94-5.49,10.95-8.07,14.34c-3.96,5.21-7.88,8.53-8.07,13.44c-0.04,1.04,0.06,3-0.9,5.38c-0.68,1.68-1.38,2.33-2.69,4.48\r
	c-0.53,0.88-1.21,2.07-1.91,3.57c-0.46,1-0.09,2.19,0.87,2.72c4.24,2.36,8.49,4.72,12.73,7.07c0.96,0.53,2.18,0.17,2.68-0.8\r
	c0.73-1.41,1.31-2.64,1.75-3.61c1.46-3.21,1.58-4.02,2.69-5.38c1.61-1.95,2.68-1.86,4.48-3.58c2.32-2.22,3.06-4.79,3.58-6.27\r
	c1.35-3.82,5.36-12.13,14.34-28.68"/>\r
<path class="asahina_mafuyu-st" d="M202.87,346.3c-0.46,1.44-0.96,3.61-0.9,6.27c0.05,2.23,0.48,4.07,0.9,5.38c0,2.69,0,5.38,0,8.07\r
	c7.76,3.07,22.49,7.71,41.22,6.27c15.8-1.22,27.88-6.25,34.95-9.86"/>\r
<path class="asahina_mafuyu-st" d="M278.14,340.03c0.67,1.93,1.45,5.13,0.9,8.96c-0.2,1.37-0.53,2.57-0.9,3.58c0,3.29,0,6.57,0,9.86"/>\r
<path class="asahina_mafuyu-st" d="M175.08,356.16c-1.24,1.13-3.16,3.19-4.48,6.27c-0.42,0.97-3.92,9.18,0,12.55c2.84,2.44,8.82,1.68,10.75-0.9\r
	c0.49-0.66,0.98-1.79,1.79-1.79c0.89,0,1.2,1.35,2.69,1.79c0.39,0.12,1.19,0.36,1.79,0c1.15-0.69,0.59-2.95,0.9-6.27\r
	c0.18-1.94,0.59-3.49,0.9-4.48"/>\r
<path class="asahina_mafuyu-st" d="M296.06,356.16c0.67,0.89,1.64,1.91,2.69,1.79c1.16-0.13,1.43-1.54,2.69-1.79c1.23-0.25,1.99,0.88,3.58,1.79\r
	c1.83,1.05,4.78,1.83,7.17,0.9c2.75-1.07,4.4-4.26,4.48-7.17c0.12-4.32-3.24-6.92-3.58-7.17"/>\r
<path class="asahina_mafuyu-st" d="M202.87,366.02c-3.32,28.01-5.63,48.49-6.27,53.77c-0.11,0.88-0.4,3.25,0.9,5.38c1.43,2.34,4.04,3.18,5.38,3.58\r
	c13.01,3.89,22.4,3.58,22.4,3.58c5.44-0.18,13.24-0.93,22.4-3.58c6.46,0.25,12.18,0.19,17.03,0c0,0,9.13-0.35,14.34-3.58\r
	c1.73-1.07,2.47-2.3,2.69-2.69c0,0,0.87-1.54,0.9-3.58c0.04-3.04-2.08-24.83-5.38-54.67"/>\r
<path class="asahina_mafuyu-st" d="M208.24,429.64c-0.13,1.87-0.23,4.67,0,8.07c0.23,3.41,0.34,5.11,0.9,6.27c3.09,6.49,18.79,7.43,21.51,2.69\r
	c0.65-1.14,0.16-1.9,0-8.07c-0.07-2.73-0.04-4.94,0-6.27"/>\r
<path class="asahina_mafuyu-st" d="M243.19,429.64c-0.06,1.8-0.04,3.33,0,4.48c0.17,5.33,0.84,6.92,1.79,8.07c0,0,0.37,0.45,0.9,0.9\r
	c4.28,3.64,18.05,5.84,20.61,0.9c0.44-0.85,0.32-1.47,0-4.48c-0.5-4.69-0.76-8.42-0.9-10.75"/>\r
<path class="asahina_mafuyu-st" d="M202.87,357.05c3.08,0.99,6.36,1.9,9.86,2.69c11.79,2.66,22.5,3.12,31.37,2.69"/>\r
<path class="asahina_mafuyu-st" d="M255.74,361.53c3.39-0.74,7.35-1.86,11.65-3.58c4.23-1.7,7.82-3.6,10.75-5.38"/>\r
<path class="asahina_mafuyu-st" d="M216.31,284.47c1.63,5.13,4.34,11.79,8.96,18.82c6.35,9.66,13.67,15.96,18.82,19.72\r
	c0.84,10.18,1.23,21.27,0.9,33.16c-0.16,5.58-0.47,10.97-0.9,16.13"/>\r
<path class="asahina_mafuyu-st" d="M262.91,305.08c-0.28,2.72-1.07,7.03-3.58,11.65c-1.74,3.2-3.76,5.56-5.38,7.17c0.3,15.83,0.6,31.66,0.9,47.5"\r
	/>\r
<path class="asahina_mafuyu-st" d="M247.67,372.29c0,5.97,0,11.95,0,17.92c-0.1,0.97-0.34,2.22-0.9,3.58c-0.28,0.68-0.59,1.28-0.9,1.79\r
	c-0.3,11.35-0.6,22.7-0.9,34.05"/>\r
<path class="asahina_mafuyu-st" d="M232.44,372.29c-0.55,7.18-1.11,14.37-1.66,21.55c-0.06,0.84,0.74,1.49,1.54,1.24l5.61-1.68\r
	c0.99-0.3,1.67-1.21,1.67-2.24v-18.87"/>\r
<path class="asahina_mafuyu-st" d="M216.31,370.5l-2.5,27.46c-0.11,1.23,0.66,2.36,1.85,2.7c2.57,0.73,5.14,1.47,7.72,2.2\r
	c1.4,0.4,2.79-0.65,2.79-2.1v-29.36"/>\r
<path class="asahina_mafuyu-st" d="M238.71,267.44c1.71,0.8,5.66,2.35,10.75,1.79c6.28-0.69,10.33-4.14,11.65-5.38"/>\r
<path class="asahina_mafuyu-st" d="M268.28,214.57c5.75-9.65,14.99-15.72,24.2-15.23c1.69,0.09,9.3,0.49,14.34,6.27c0.85,0.98,2.91,3.4,3.58,7.17\r
	c1.18,6.57-2.86,11.66-3.58,12.55"/>\r
<path class="asahina_mafuyu-st" d="M225.27,219.05c-2.49-1.77-11.11-7.41-21.51-5.38c-13.36,2.61-24.5,16.88-21.51,25.99\r
	c0.95,2.89,3.2,4.9,5.38,6.27"/>\r
<path class="asahina_mafuyu-st" d="M272.76,209.19c-4.71,9.03-2.12,19.16,4.48,23.3c4.62,2.9,10.79,2.6,15.23,0c7.41-4.33,8.3-13.88,7.17-19.72\r
	c-1.53-7.9-7.39-12.33-8.96-13.44"/>\r
<path class="asahina_mafuyu-st" d="M195.7,216.36c-1.7,4.15-4.25,12.31-1.79,21.51c0.96,3.58,2.18,8.16,6.27,10.75c5.8,3.68,14.38,1.5,18.82-2.69\r
	c6.63-6.27,6.92-19.8-1.79-31.37"/>\r
<path class="asahina_mafuyu-st" d="M272.76,173.34c1.84-1.16,5.97-3.42,11.65-3.58c7.42-0.22,12.67,3.27,14.34,4.48"/>\r
<path class="asahina_mafuyu-st" d="M196.59,184.99c2.53-1.74,8.65-5.41,17.03-5.38c4.11,0.02,7.5,0.93,9.86,1.79"/>\r
</svg>\r
`,yc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.bili-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="bili-st" d="M58.08,177.25c10.15-4.84,20.3-9.66,30.45-14.5c1.94,36.25,3.86,72.5,5.8,108.75\r
	c43.59-0.2,74.39,13.4,75.4,26.11c0.9,11.28-21.25,26.86-55.76,35.14c-7.2,1.73-14.58,2.55-21.98,2.55H79.83\r
	c-5.89-60.35-10.31-104.65-11.6-118.91c-0.42-4.62-1.48-9.86-2.9-15.95C63.04,190.63,60.24,182.71,58.08,177.25z"/>\r
<path class="bili-st" d="M110.28,290.35c0.96,9.18,1.94,18.37,2.9,27.55c7.25-5.8,14.5-11.6,21.75-17.4\r
	C126.71,297.12,118.5,293.73,110.28,290.35z"/>\r
<path class="bili-st" d="M159.58,219.3c7.74-0.96,15.47-1.94,23.2-2.9c0.96,8.7,1.94,17.4,2.9,26.11c-6.76,0.48-13.53,0.96-20.3,1.44\r
	C163.45,235.73,161.52,227.51,159.58,219.3z"/>\r
<path class="bili-st" d="M171.18,217.85c1.44,8.22,2.9,16.43,4.34,24.65"/>\r
<path class="bili-st" d="M165.38,252.65c7.25-0.48,14.5-0.96,21.75-1.44c2.9,23.2,5.8,46.4,8.7,69.6c-5.32,0.48-10.64,0.96-15.95,1.44\r
	C175.05,299.05,170.22,275.86,165.38,252.65z"/>\r
<path class="bili-st" d="M187.13,184.49c7.74,0,15.47,0,23.2,0c3.38,43.99,6.76,87.97,10.15,131.96c-5.32,0-10.64,0-15.95,0\r
	C198.73,272.46,192.93,228.48,187.13,184.49z"/>\r
<path class="bili-st" d="M223.38,219.3c0.48,9.18,0.96,18.37,1.44,27.55c6.76,0,13.53,0,20.3,0c0.48-9.18,0.96-18.37,1.44-27.55\r
	C238.86,219.3,231.12,219.3,223.38,219.3z"/>\r
<path class="bili-st" d="M234.98,219.3c0,9.18,0,18.37,0,27.55"/>\r
<path class="bili-st" d="M224.84,254.1c7.25,0,14.5,0,21.75,0c0,23.69,0,47.37,0,71.06c-5.8,0-11.6,0-17.4,0\r
	C227.74,301.47,226.28,277.78,224.84,254.1z"/>\r
<path class="bili-st" d="M249.58,176.65c10.15-4.84,20.3-9.66,30.45-14.5c1.94,36.25,3.86,72.5,5.8,108.75\r
	c43.59-0.2,74.39,13.4,75.4,26.11c0.9,11.28-21.25,26.86-55.76,35.14c-7.2,1.73-14.58,2.55-21.98,2.55h-12.17\r
	c-5.89-60.35-10.31-104.65-11.6-118.91c-0.42-4.62-1.48-9.86-2.9-15.95C254.54,190.03,251.75,182.11,249.58,176.65z"/>\r
<path class="bili-st" d="M301.78,289.75c0.96,9.18,1.94,18.37,2.9,27.55c7.25-5.8,14.5-11.6,21.75-17.4\r
	C318.22,296.51,310,293.13,301.78,289.75z"/>\r
<path class="bili-st" d="M351.09,218.7c7.74-0.96,15.47-1.94,23.2-2.9c0.96,8.7,1.94,17.4,2.9,26.11c-6.76,0.48-13.53,0.96-20.3,1.44\r
	C354.95,235.13,353.02,226.91,351.09,218.7z"/>\r
<path class="bili-st" d="M362.69,217.24c1.44,8.22,2.9,16.43,4.34,24.65"/>\r
<path class="bili-st" d="M356.89,252.05c7.25-0.48,14.5-0.96,21.75-1.44c2.9,23.2,5.8,46.4,8.7,69.6c-5.32,0.48-10.64,0.96-15.95,1.44\r
	C366.56,298.45,361.72,275.24,356.89,252.05z"/>\r
<path class="bili-st" d="M378.64,183.89c7.74,0,15.47,0,23.2,0c3.38,43.99,6.76,87.97,10.15,131.96c-5.32,0-10.64,0-15.95,0\r
	C390.24,271.86,384.44,227.88,378.64,183.89z"/>\r
<path class="bili-st" d="M414.89,218.7c0.48,9.18,0.96,18.37,1.44,27.55c6.76,0,13.53,0,20.3,0c0.48-9.18,0.96-18.37,1.44-27.55\r
	C430.36,218.7,422.63,218.7,414.89,218.7z"/>\r
<path class="bili-st" d="M426.49,218.7c0,9.18,0,18.37,0,27.55"/>\r
<path class="bili-st" d="M416.33,253.49c7.25,0,14.5,0,21.75,0c0,23.69,0,47.37,0,71.06c-5.8,0-11.6,0-17.4,0\r
	C419.24,300.87,417.79,277.18,416.33,253.49z"/>\r
</svg>\r
`,bc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.bili-app-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="bili-app-st" d="M62,366.96c0.24-75.41,0.48-150.83,0.72-226.24c0.13-41.74,33.94-75.54,75.67-75.67\r
	c75.82-0.24,151.63-0.48,227.45-0.72c42.21-0.13,76.42,34.19,76.15,76.39c-0.48,76.38-0.96,152.75-1.45,229.13\r
	c-0.27,42.02-34.62,75.83-76.64,75.43l-226.73-2.17C95.45,442.71,61.87,408.7,62,366.96z"/>\r
<path class="bili-app-st" d="M90.68,194.2c8.43-4.02,16.87-8.03,25.3-12.05c1.61,30.12,3.21,60.24,4.82,90.36\r
	c36.22-0.17,61.81,11.13,62.65,21.69c0.75,9.37-17.66,22.32-46.33,29.2c-5.98,1.44-12.11,2.12-18.26,2.12h-10.11\r
	c-4.89-50.14-8.57-86.95-9.64-98.8c-0.35-3.84-1.23-8.19-2.41-13.25C94.8,205.32,92.47,198.74,90.68,194.2z"/>\r
<path class="bili-app-st" d="M134.05,288.17c0.8,7.63,1.61,15.26,2.41,22.89c6.02-4.82,12.05-9.64,18.07-14.46\r
	C147.7,293.8,140.88,290.98,134.05,288.17z"/>\r
<path class="bili-app-st" d="M175.01,229.14c6.43-0.8,12.85-1.61,19.28-2.41c0.8,7.23,1.61,14.46,2.41,21.69c-5.62,0.4-11.24,0.8-16.87,1.2\r
	C178.23,242.79,176.62,235.96,175.01,229.14z"/>\r
<path class="bili-app-st" d="M184.65,227.93c1.2,6.83,2.41,13.65,3.61,20.48"/>\r
<path class="bili-app-st" d="M179.83,256.85c6.02-0.4,12.05-0.8,18.07-1.2c2.41,19.28,4.82,38.55,7.23,57.83c-4.42,0.4-8.84,0.8-13.25,1.2\r
	C187.86,295.4,183.85,276.13,179.83,256.85z"/>\r
<path class="bili-app-st" d="M197.9,200.22c6.43,0,12.85,0,19.28,0c2.81,36.55,5.62,73.09,8.43,109.64c-4.42,0-8.84,0-13.25,0\r
	C207.54,273.31,202.72,236.77,197.9,200.22z"/>\r
<path class="bili-app-st" d="M228.02,229.14c0.4,7.63,0.8,15.26,1.2,22.89c5.62,0,11.24,0,16.87,0c0.4-7.63,0.8-15.26,1.2-22.89\r
	C240.88,229.14,234.45,229.14,228.02,229.14z"/>\r
<path class="bili-app-st" d="M237.66,229.14c0,7.63,0,15.26,0,22.89"/>\r
<path class="bili-app-st" d="M229.23,258.05c6.02,0,12.05,0,18.07,0c0,19.68,0,39.36,0,59.04c-4.82,0-9.64,0-14.46,0\r
	C231.64,297.41,230.43,277.73,229.23,258.05z"/>\r
<path class="bili-app-st" d="M249.79,193.7c8.43-4.02,16.87-8.03,25.3-12.05c1.61,30.12,3.21,60.24,4.82,90.36\r
	c36.22-0.17,61.81,11.13,62.65,21.69c0.75,9.37-17.66,22.32-46.33,29.2c-5.98,1.44-12.11,2.12-18.26,2.12h-10.11\r
	c-4.89-50.14-8.57-86.95-9.64-98.8c-0.35-3.84-1.23-8.19-2.41-13.25C253.91,204.82,251.59,198.24,249.79,193.7z"/>\r
<path class="bili-app-st" d="M293.16,287.67c0.8,7.63,1.61,15.26,2.41,22.89c6.02-4.82,12.05-9.64,18.07-14.46\r
	C306.82,293.29,299.99,290.48,293.16,287.67z"/>\r
<path class="bili-app-st" d="M334.13,228.64c6.43-0.8,12.85-1.61,19.28-2.41c0.8,7.23,1.61,14.46,2.41,21.69c-5.62,0.4-11.24,0.8-16.87,1.2\r
	C337.34,242.29,335.73,235.46,334.13,228.64z"/>\r
<path class="bili-app-st" d="M343.77,227.43c1.2,6.83,2.41,13.65,3.61,20.48"/>\r
<path class="bili-app-st" d="M338.95,256.35c6.02-0.4,12.05-0.8,18.07-1.2c2.41,19.28,4.82,38.55,7.23,57.83c-4.42,0.4-8.84,0.8-13.25,1.2\r
	C346.98,294.9,342.96,275.62,338.95,256.35z"/>\r
<path class="bili-app-st" d="M357.02,199.72c6.43,0,12.85,0,19.28,0c2.81,36.55,5.62,73.09,8.43,109.64c-4.42,0-8.84,0-13.25,0\r
	C366.66,272.81,361.84,236.27,357.02,199.72z"/>\r
<path class="bili-app-st" d="M387.14,228.64c0.4,7.63,0.8,15.26,1.2,22.89c5.62,0,11.24,0,16.87,0c0.4-7.63,0.8-15.26,1.2-22.89\r
	C399.99,228.64,393.57,228.64,387.14,228.64z"/>\r
<path class="bili-app-st" d="M396.78,228.64c0,7.63,0,15.26,0,22.89"/>\r
<path class="bili-app-st" d="M388.34,257.55c6.02,0,12.05,0,18.07,0c0,19.68,0,39.36,0,59.04c-4.82,0-9.64,0-14.46,0\r
	C390.75,296.91,389.55,277.23,388.34,257.55z"/>\r
<path class="bili-app-st" d="M115.98,182.15c1.54-4.11,4.92-11.41,12.05-18.07c9.35-8.73,19.69-11.24,24.1-12.05\r
	c14.06-0.8,28.11-1.61,42.17-2.41c-4.76-6.44-9.53-12.89-14.29-19.33c-3.45-4.67-2.57-11.24,1.98-14.84l6.41-5.06\r
	c4.58-3.61,11.22-2.81,14.8,1.8c9.08,11.67,18.16,23.35,27.24,35.02c18.64-0.62,25.74-0.86,44.38-1.48\r
	c7.63-11.3,15.26-22.59,22.9-33.89c3.44-5.09,10.35-6.45,15.47-3.04l6.66,4.44c5.22,3.48,6.69,10.5,3.31,15.78\r
	c-4.4,6.87-8.79,13.74-13.19,20.6c16.87,0.8,33.73,1.61,50.6,2.41c4.55,1.73,15.4,6.55,24.1,18.07\r
	c8.98,11.89,10.5,24.08,10.84,28.92c0,10.04,0,20.08,0,30.12"/>\r
<path class="bili-app-st" d="M395.49,317.09c0,6.43,0,12.85,0,19.28c-0.33,4.9-1.62,13.74-7.23,22.89c-9.12,14.88-23.33,20.23-27.71,21.69\r
	c-67.07,0.4-134.14,0.8-201.2,1.2c-3.12,0.12-20.7,0.46-34.94-13.25c-12.82-12.35-14.22-27.7-14.46-31.33c0-4.02,0-8.03,0-12.05"/>\r
<path class="bili-app-st" d="M136.46,272.51c0.4-23.69,0.8-47.39,1.2-71.08c0.44-2.52,1.88-8.83,7.23-14.46c6.53-6.87,14.52-8.15,16.87-8.43\r
	c29.16-1.51,59.72-2.38,91.57-2.41c33.16-0.03,64.93,0.85,95.18,2.41c1.99,0.44,6.74,1.78,10.84,6.02\r
	c5.55,5.74,5.97,12.71,6.02,14.46"/>\r
<path class="bili-app-st" d="M137.66,323.11c0,3.21,0,6.43,0,9.64c0.01,2.28,0.36,7.23,3.61,12.05c6.03,8.94,16.75,9.58,18.07,9.64\r
	c93.07,1.68,161.63,1.85,180.72,1.2c3.76-0.13,13.61-0.36,20.48-7.23c6-5.99,7.06-14.36,7.23-19.28c0-15.66,0-31.33,0-46.99"/>\r
</svg>\r
`,xc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.bili_laugh-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="bili_laugh-st" d="M67.5,208.5c16.91-75.48,77.67-133.32,153-146c80.46-13.54,154.28,28.36,192,88\r
	c49.24,77.87,33.94,181.28-24,239c-47.79,47.61-111.54,51.14-127,52c-59.51,3.3-103.75-19.77-121-30"/>\r
<path class="bili_laugh-st" d="M83.5,194.5c36.59-16.77,64.36,43.43,134,41c64.68-2.25,95.42-56.09,132-38c20.85,10.31,27.57,36.06,32,53\r
	c15.81,60.51-20.75,112.89-23,116c-47.42,65.74-151.19,77.72-222,43c-12.12-5.94-63.31-31.04-81-88\r
	C40.96,274.68,50.12,209.8,83.5,194.5z"/>\r
<path class="bili_laugh-st" d="M90.5,377.5c24.65-10.94,71.85-27.98,133-26c55.68,1.8,98.3,18.57,122,30"/>\r
<path class="bili_laugh-st" d="M123.5,152.5c29.33-3,58.67-6,88-9c-14.34-2.55-32.38-7.2-52-16c-13.44-6.03-24.77-12.72-34-19"/>\r
<path class="bili_laugh-st" d="M379.5,151.5c-32-3-64-6-96-9c13.64-2.6,30.54-7.07,49-15c16.19-6.96,29.53-14.84,40-22"/>\r
</svg>\r
`,Sc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.bili_stareyes-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="bili_stareyes-st" d="M65.87,379.63c-5.48-32.11,20.59-65.44,54.86-66.41c31.65-0.9,60.07,26.08,58.71,58.71\r
	c-1.31,31.49-29.79,55.03-59.68,53.9C93.64,424.84,70.22,405.14,65.87,379.63z"/>\r
<path class="bili_stareyes-st" d="M333.45,372.89c-1.86-30.62,21.72-58.64,51.98-60.64c33.09-2.19,60.81,27.63,59.68,59.68\r
	c-0.97,27.42-22.94,52.91-51.98,54.86C362.3,428.87,335.31,403.61,333.45,372.89z"/>\r
<path class="bili_stareyes-st" d="M195.81,283.37c5.34,13.19,18.37,21.35,31.76,20.21c11.32-0.96,21.33-8.42,25.99-19.25\r
	c4.75,11.11,15.23,18.61,26.95,19.25c13.23,0.73,25.75-7.41,30.8-20.21"/>\r
<path class="bili_stareyes-st" d="M210.25,299.74c0.59,70.51,10.39,123.19,25.99,135.72c9.98,8.02,19.25,7.7,19.25,7.7\r
	c10.47-0.36,17.93-8.16,21.18-11.55c14.56-15.22,23.44-66.87,23.1-135.72"/>\r
<path class="bili_stareyes-st" d="M129.4,114.93c4.11-14.27,16.07-24.6,29.84-25.99c16.65-1.68,33.13,10,37.54,27.91"/>\r
<path class="bili_stareyes-st" d="M312.28,114.93c4.37-15.51,18.68-26.2,34.65-25.99c15.63,0.21,29.42,10.82,33.69,25.99"/>\r
<path class="bili_stareyes-st" d="M103.41,209.26c-1.86-34.82,26.88-66,62.56-65.45c34.96,0.54,62.46,31.32,60.64,65.45\r
	c-1.68,31.55-28,58.21-60.64,58.71C132.61,268.49,105.12,241.49,103.41,209.26z"/>\r
<path class="bili_stareyes-st" d="M103.41,207.33c3.78-0.3,25.29-1.64,43.31,14.44c20.12,17.95,19.4,42.89,19.25,46.2\r
	c1.1-6.36,5.11-24.66,21.18-40.43c15.48-15.2,33.02-19.1,39.46-20.21c-8.14-2.8-24.73-9.75-39.46-25.99\r
	c-13.45-14.83-18.91-30.3-21.18-38.5c-0.81,7.08-3.58,22.69-15.4,37.54C133.35,202.01,109.39,206.41,103.41,207.33z"/>\r
<path class="bili_stareyes-st" d="M284.36,206.37c0.24-32.94,26.74-63.01,60.64-63.53c35.3-0.54,63.32,31.18,62.56,65.45\r
	c-0.72,32.88-27.82,63.09-62.56,62.56C310.3,270.34,284.12,239.39,284.36,206.37z"/>\r
<path class="bili_stareyes-st" d="M284.36,206.37c4.8,0.05,24.71,0.78,41.39,16.36c20.22,18.89,19.43,44.39,19.25,48.13\r
	c0.43-5.44,2.67-25.43,19.25-42.35c17.18-17.53,38.03-19.8,43.31-20.21c-7.94-2.72-24.01-9.41-38.5-25.03\r
	c-14.56-15.69-20.03-32.3-22.14-40.43c-0.76,6.61-3.62,23.78-17.33,39.46C312.45,201.92,290.22,205.59,284.36,206.37z"/>\r
<path class="bili_stareyes-st" d="M88.01,324.76c-8.62-20.31-20.19-56.34-13.48-99.14c11.82-75.3,77.95-156.94,175.18-159.78\r
	c100.5-2.93,173.71,80.08,185.77,158.82c6.57,42.92-5.9,78.9-14.44,98.18"/>\r
<path class="bili_stareyes-st" d="M162.12,409.47c8.23,4.01,17.88,8.05,28.88,11.55c15.1,4.8,28.88,7.33,40.43,8.66"/>\r
<path class="bili_stareyes-st" d="M279.55,429.68c9.39-0.68,22.7-2.7,37.54-8.66c12.45-5,22.07-11.2,28.88-16.36"/>\r
<path class="bili_stareyes-st" d="M220.5,404.5c1.79-2.32,13.06-16.38,33-18c22.04-1.79,36.29,13.14,38,15"/>\r
</svg>\r
`,Cc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.bili_thinking-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="bili_thinking-st" d="M177.04,413.32c-69.73-34.7-114.28-102.66-114.19-174.75c0.13-98.14,82.96-189.98,188.65-190.64\r
	c112.9-0.7,200.12,102.96,190.64,206.53c-6.97,76.17-65.43,143.3-146.95,166.81"/>\r
<path class="bili_thinking-st" d="M163.14,368.64c18.93,15.21,4.21,39.01,21.84,60.57c15.52,18.98,42.6,19.7,48.65,19.86\r
	c25.86,0.69,57.09-12.23,65.53-34.75c6.47-17.25-3.5-31.94,6.95-41.7c5.21-4.87,9.28-2.7,23.83-5.96\r
	c16.63-3.73,45.87-14.31,47.66-29.79c0.64-5.52-2.26-11.27-5.96-14.89c-5.69-5.57-19.28-11.95-99.29,14.89\r
	c-38.58,12.94-37.1,14.99-46.67,14.89c-38.43-0.38-66.26-36.6-82.41-26.81c-7.73,4.69-9.93,11.91-9.93,11.92s-1.63,5.36,0,10.92\r
	C136.82,359.62,152.1,359.77,163.14,368.64z"/>\r
<path class="bili_thinking-st" d="M168.1,314.03c8.23-6.67,18.76-13.32,31.77-17.87c53.12-18.59,103.43,13.14,112.2,18.87"/>\r
<path class="bili_thinking-st" d="M83.71,199.85c2.43-2.95,30.43-35.72,74.47-31.77c36.48,3.27,57.17,29.33,60.57,33.76"/>\r
<path class="bili_thinking-st" d="M86.69,231.62c6.55,5.09,31.87,23.54,68.51,21.84c33.61-1.56,55.86-19.1,62.55-24.82"/>\r
<path class="bili_thinking-st" d="M278.32,149.21c9.67,6.89,31.17,20.19,61.56,22.84c41.08,3.57,71.17-14.7,80.43-20.85"/>\r
<path class="bili_thinking-st" d="M287.25,193.89c3.5-3.9,8.39-8.57,14.89-12.91c9.47-6.31,18.52-9.36,24.82-10.92"/>\r
<path class="bili_thinking-st" d="M375.62,170.06c5.79,1.44,14.09,4.23,22.84,9.93c11.36,7.4,18.2,16.28,21.84,21.84"/>\r
<path class="bili_thinking-st" d="M286.26,225.66c7.12,7.83,18.48,17.83,34.75,23.83c48.31,17.81,94.07-16.58,98.3-19.86"/>\r
<path class="bili_thinking-st" d="M144.27,213.75c-1.06-10.39,8.17-20.13,18.87-19.86c9.38,0.24,17.86,8.13,17.87,17.87\r
	c0.01,10.54-9.9,18.57-19.86,17.87C152.74,229.05,145.14,222.3,144.27,213.75z"/>\r
<path class="bili_thinking-st" d="M323.99,215.73c-1.6-9.99,7.44-20.09,17.87-19.86c8.45,0.19,16.4,7.13,16.88,15.89\r
	c0.56,10.16-9.14,18.47-18.87,17.87C332.33,229.17,325.21,223.35,323.99,215.73z"/>\r
<path class="bili_thinking-st" d="M134.35,69.77c13.71,6.21,33.35,17.09,52.62,35.75c24.99,24.19,37.56,50.02,43.69,65.53"/>\r
</svg>\r
`,wc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.bill_cipher-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="bill_cipher-st" d="M242.13,137.29c0.35-29.09,0.69-58.17,1.04-87.26c5.89,0,11.77,0,17.66,0c0,29.09,0,58.17,0,87.26\r
	c7.96,0,15.93,0,23.89,0c0,1.73,0,3.46,0,5.19c-21.47,0-42.94,0-64.41,0c0-1.73,0-3.46,0-5.19\r
	C227.59,137.29,234.86,137.29,242.13,137.29z"/>\r
<path class="bill_cipher-st" d="M136.17,349.21c38.78-66.14,77.57-132.28,116.35-198.42c38.44,66.14,76.87,132.28,115.31,198.42\r
	C290.61,349.21,213.39,349.21,136.17,349.21z"/>\r
<path class="bill_cipher-st" d="M228.63,301.42c0,8.31,0,16.62,0,24.93c7.62-3.46,15.24-6.93,22.85-10.39c7.96,3.46,15.93,6.93,23.89,10.39\r
	c0-8.66,0-17.31,0-25.97c-7.96,4.16-15.93,8.31-23.89,12.47C243.86,309.04,236.24,305.23,228.63,301.42z"/>\r
<path class="bill_cipher-st" d="M207.85,250.52c-0.2-3.45,1.39-6.12,2.08-7.27c15.35-25.78,39.48-27.01,39.48-27.01\r
	c29.3-1.5,44.55,27.4,45.71,30.13c1.13,2.66,1.04,5.19,1.04,5.19c0,0-0.11,3.08-2.08,6.23c-2.1,3.37-17.43,20.26-42.59,19.74\r
	c0,0-25.31-0.52-40.51-19.74C210.08,256.67,208.05,254.11,207.85,250.52z"/>\r
<path class="bill_cipher-st" d="M252.52,224.55c-4.11-0.22-9.11,11.32-9.35,21.82c-0.26,11.45,5.07,24.1,9.35,23.89\r
	c4.52-0.22,8.28-14.82,7.27-27.01C259.19,236.01,256.5,224.76,252.52,224.55z"/>\r
<path class="bill_cipher-st" d="M227.59,210c1.73,3.81,3.46,7.62,5.19,11.43"/>\r
<path class="bill_cipher-st" d="M243.17,201.69c0.69,5.19,1.39,10.39,2.08,15.58"/>\r
<path class="bill_cipher-st" d="M263.95,202.73c-0.69,4.85-1.39,9.7-2.08,14.54"/>\r
<path class="bill_cipher-st" d="M279.53,210c-2.42,3.81-4.85,7.62-7.27,11.43"/>\r
<path class="bill_cipher-st" d="M233.82,286.88c1.73-3.81,3.46-7.62,5.19-11.43"/>\r
<path class="bill_cipher-st" d="M252.52,288.96c0-3.81,0-7.62,0-11.43"/>\r
<path class="bill_cipher-st" d="M271.22,287.92c-1.73-3.81-3.46-7.62-5.19-11.43"/>\r
<path class="bill_cipher-st" d="M198.5,349.21c0,29.09,0,58.17,0,87.26c-0.81,0.88-3.63,4.18-3.12,8.31c0.13,1.04,0.39,3.15,2.08,4.16\r
	c1.16,0.69,2.93,0.82,4.16,0c2.58-1.71,1.02-6.41,3.12-7.27c0.99-0.41,2.46,0.18,3.12,1.04c0.85,1.11,0.14,2.43,1.04,3.12\r
	c0.58,0.44,1.54,0.42,2.08,0c1.23-0.95,0.12-3.86,0-4.16c-0.96-2.43-3.13-3.66-4.16-4.16c0-29.43,0-58.87,0-88.3"/>\r
<path class="bill_cipher-st" d="M301.6,349.73c0,29.09,0,58.17,0,87.26c0.81,0.88,3.63,4.18,3.12,8.31c-0.13,1.04-0.39,3.15-2.08,4.16\r
	c-1.16,0.69-2.93,0.82-4.16,0c-2.58-1.71-1.02-6.41-3.12-7.27c-0.99-0.41-2.46,0.18-3.12,1.04c-0.85,1.11-0.14,2.43-1.04,3.12\r
	c-0.58,0.44-1.54,0.42-2.08,0c-1.23-0.95-0.12-3.86,0-4.16c0.96-2.43,3.13-3.66,4.16-4.16c0-29.43,0-58.87,0-88.3"/>\r
<path class="bill_cipher-st" d="M214.08,349.21c0,9.7,0,19.39,0,29.09c-0.03,1.13,0.06,3.08,1.04,5.19c1.34,2.9,4.21,5.82,7.27,6.23\r
	c6.38,0.86,11.43-9.41,13.5-8.31c2.61,1.39-4.71,18.06,0,22.85c2,2.04,4.16,2.08,4.16,2.08c0.24,0,1.8,0.01,3.12-1.04\r
	c1.86-1.49,2.01-4.14,2.08-5.19c0.7-11.06,0.53-22.17,1.04-33.24c0.03-0.73,0.14-2.62-1.04-4.16c-0.95-1.24-2.62-2.1-4.16-2.08\r
	c-2.5,0.04-4.04,2.42-8.31,8.31c-6.12,8.43-7.34,9.58-8.31,9.35c-0.87-0.21-1.85-1.63-2.08-7.27c0-7.27,0-14.54,0-21.82"/>\r
<path class="bill_cipher-st" d="M274.34,349.21c0,9.7,0,19.39,0,29.09c-0.03,1.37-0.25,2.82-1.04,3.12c-1.2,0.45-2.33-2.27-5.19-3.12\r
	c-2.52-0.74-5.67,0.17-7.27,2.08c-1.43,1.7-1.3,3.79-1.04,7.27c0.77,10.08,1.17,15.2,2.08,18.7c2.22,8.55,4.24,9.89,5.19,10.39\r
	c1.72,0.89,4.4,1.32,6.23,0c2.1-1.51,2.09-4.61,2.08-6.23c-0.02-4.33-1.95-5.73-4.16-12.47c-0.94-2.89-2.41-7.38-1.04-8.31\r
	c1.36-0.92,3.82,2.78,7.27,2.08c3.08-0.63,4.79-4.32,5.19-5.19c0.99-2.13,1.07-4.1,1.04-5.19c0-10.73,0-21.47,0-32.2"/>\r
</svg>\r
`,Tc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.blackegg-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="blackegg-st" d="M99.67,245.83c8.72-78.07,76.68-140.36,157.85-139.56c82.31,0.81,147.91,66.19,154.96,141.48\r
	c8.75,93.54-74.93,180.44-170.36,172.28C157.64,412.82,89.9,333.33,99.67,245.83z"/>\r
<path class="blackegg-st" d="M264.25,106.27c-0.96-2.89-1.92-5.77-2.89-8.66c8.42-3.01,13.85-10.93,13.47-19.25\r
	c-0.46-10.26-9.62-18.09-19.25-18.29c-11.92-0.24-21.61,11.29-20.21,22.14c1.31,10.19,11.79,15.08,12.51,15.4\r
	c-0.64,2.89-1.28,5.77-1.92,8.66"/>\r
<path class="blackegg-st" d="M99.67,277.59c-7.6,11.42-11.43,21.78-13.47,28.87c-4.44,15.41-4.19,28.39,0,32.72\r
	c2.16,2.23,4.81,2.89,4.81,2.89c0.72,0.18,4.23,0.96,6.74-0.96c1.52-1.17,0.93-1.99,2.89-3.85c1.72-1.64,2.54-1.33,3.85-2.89\r
	c1.25-1.49,1.05-2.4,1.92-3.85c0.79-1.3,2.35-2.86,5.77-3.85"/>\r
<path class="blackegg-st" d="M413.44,268.93c3.88,6.59,7.97,14.62,11.55,24.06c2.43,6.41,13.22,34.92,4.81,42.35\r
	c-0.66,0.59-4.29,3.79-7.7,2.89c-1.45-0.38-1.67-1.19-3.85-1.92c-3.19-1.08-4.22,0.14-5.77-0.96c-1.79-1.28-0.75-3.16-2.89-5.77\r
	c-0.58-0.71-0.98-0.98-3.85-2.89c-1.93-1.28-3.85-2.57-5.77-3.85"/>\r
<path class="blackegg-st" d="M142.98,249.68c0.19-4.47,1.81-30.77,24.06-46.2c1.99-1.38,21.77-14.7,41.39-8.66\r
	c1.76,0.54,0.95,0.45,22.14,12.51c17.97,10.23,22.45,10.92,26.95,10.59c5-0.37,9.82-3.14,19.25-8.66\r
	c12.54-7.34,15.45-10.88,20.21-13.47c15.04-8.19,39.97-2.2,54.86,11.55c23.3,21.52,22.93,62.91,2.89,81.81\r
	c-12.51,11.81-30.23,12.47-31.76,12.51c-13.96,0.34-25.32-5.74-28.87-7.7c-8.09-4.45-13.32-9.78-25.99-15.4\r
	c-2.58-1.14-6.42-2.72-11.55-2.89c-3.38-0.11-7.43,0.39-13.47,2.89c-10.07,4.16-12.9,8.58-22.14,14.44\r
	c-2.33,1.48-10.13,6.42-18.29,8.66c-13.15,3.61-32.71,1.71-46.2-11.55C141.87,275.77,142.7,256.34,142.98,249.68z"/>\r
<path class="blackegg-st" d="M236.34,292.03c2.24,1.76,6.88,4.9,13.47,5.77c11.87,1.58,20.55-5.41,22.14-6.74"/>\r
<path class="blackegg-st" d="M160.31,267.01c-9.86-19.8,6.16-51.48,28.87-52.94c14.11-0.9,28.77,9.98,32.72,24.06\r
	c6.08,21.67-14.66,45.75-35.61,45.24C175.68,283.1,165.05,276.53,160.31,267.01z"/>\r
<path class="blackegg-st" d="M290.24,243.91c0.43-16.04,13.3-31.37,28.87-32.72c13.58-1.18,23.27,8.78,25.02,10.59\r
	c8.77,9.03,14.74,25.01,7.7,39.46c-4.88,10.03-15.29,17.82-26.95,18.29C306.63,280.25,289.73,262.85,290.24,243.91z"/>\r
<path class="blackegg-st" d="M327.78,401.75c0.06,1.28,0.26,3.35,0.96,5.77c2.12,7.29,6.35,9.23,8.66,14.44c2.33,5.24,2.13,12.5-0.96,17.32\r
	c-6.58,10.26-24.74,7.15-26.95,6.74c-1.34-0.25-17.82-3.56-25.02-18.29c-1.85-3.79-2.57-7.27-2.89-9.62"/>\r
<path class="blackegg-st" d="M187.44,404.27c-0.04,1.27-0.21,3.31-0.88,5.71c-2.01,7.22-6.21,9.2-8.45,14.37\r
	c-2.25,5.2-1.95,12.36,1.22,17.07c6.73,10.02,24.84,6.68,27.05,6.24c1.33-0.26,17.76-3.77,24.75-18.41c1.8-3.76,2.47-7.21,2.75-9.54\r
	"/>\r
</svg>\r
`,Ec=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.blood_queen-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="blood_queen-st" d="M135.2,230.36c-17.57-9.6-28.81-19.83-35.41-26.8c-5.22-5.51-9.03-10.56-9.57-17.23\r
	c-0.62-7.73,3.45-13.93,5.74-17.23c47.48-68.4,84.22-84.22,84.22-84.22c14.37-6.19,39.56-17.04,71.78-12.44\r
	c31.2,4.45,51.35,20.86,72.74,38.28c0,0,20.59,16.77,49.77,63.17c0.75,1.2,2.41,3.89,2.87,7.66c1.19,9.66-6.46,18.33-14.36,25.84\r
	c-8.55,8.14-23.76,20.99-48.02,34.45c-0.97,0.54-2.2,0.21-2.77-0.74c-1.1-1.84-2.21-3.68-3.31-5.52c-0.71-1.19-0.18-2.73,1.12-3.2\r
	c6.77-2.48,23.99-10.3,28.09-26.9c1.77-7.17,2.31-20.92-5.74-25.84c-5.98-3.66-13.7-0.63-15.31,0c-5.78,2.26-9.29,6.52-11.27,9.85\r
	c-0.95,1.61-3.33,1.41-4.02-0.32c-0.63-1.58-1.28-3.16-1.93-4.74c-8.39-20.2-17.99-38.46-28.09-54.88c-0.8-1.3-2.55-1.57-3.75-0.62\r
	c-2.49,1.99-4.8,3.14-6.44,3.83c-0.6,0.25-9.28,3.78-11.48,0.96c-0.83-1.06-0.12-2.2-0.96-2.87c-1.5-1.2-4.61,1.82-8.61,2.87\r
	c-6.61,1.73-14.37-2.25-14.36-4.79c0.01-2.16,5.68-2.02,7.66-5.74c2.05-3.85-1.02-9.66-4.84-14.83c-1.03-1.39-2.93-1.79-4.43-0.94\r
	l-17.76,10.04c-1.06,0.6-2.33,0.68-3.45,0.21l-12.14-5c-1.35-0.56-2.9-0.05-3.66,1.21c-0.46,0.77-0.99,1.64-1.57,2.61\r
	c-3.32,5.49-3.87,6.24-3.83,7.66c0.09,2.93,2.61,5.5,4.79,6.7c3.67,2.03,7.25,0.68,7.66,1.91c0.32,0.97-1.55,2.9-3.83,3.83\r
	c-5.78,2.35-10.6-3.2-14.36-0.96c-3.02,1.81-1.54,6.4-3.83,7.66c-1.97,1.09-6.36-0.53-16.77-11.85c-0.71-0.77-1.98-0.67-2.54,0.22\r
	c-9.95,16.03-13.61,30.05-15.15,38.42c-1.9,10.37-1.92,19.65-1.91,21.06c0.03,13.11,2.33,14.84,1.91,24.88\r
	c-0.64,15.56-6.45,18.57-4.79,26.8c1.24,6.15,6.5,14.43,25.84,22.01"/>\r
<path class="blood_queen-st" d="M187.36,292.09c-4.39-4.98-11.03-11.89-20.1-19.14c-6.05-4.84-8.53-6.12-8.61-8.61\r
	c-0.28-8.39,26.8-16.2,44.02-19.14c0,0,31.73-5.42,60.77,9.09c0.7,0.35,2.37,1.21,2.87,2.87c0.77,2.56-1.73,5.43-2.87,6.7\r
	c-4.23,4.73-15.03,15.96-29.67,30.63"/>\r
<path class="blood_queen-st" d="M266.31,257.16c5.01-0.11,13.05-0.93,22.01-4.79c10.71-4.61,17.56-11.33,21.06-15.31"/>\r
<path class="blood_queen-st" d="M171.57,296.4c-23.35-21.3-28.21-28.65-26.8-30.63c0.86-1.2,4.5-1.05,6.7-0.96c3.45,0.15,6.11,1.18,7.66,1.91"\r
	/>\r
<path class="blood_queen-st" d="M145.72,269.6c2.39,0.18,4.95,0.48,7.66,0.96c6.37,1.13,11.83,2.93,16.27,4.79"/>\r
<path class="blood_queen-st" d="M170.61,295.44c-2.35-0.15-4.35,0.64-4.79,1.91c-0.58,1.69,1.73,3.76,2.87,4.79c1.06,0.95,2.1,1.55,2.87,1.91"\r
	/>\r
<path class="blood_queen-st" d="M167.74,301.18c-2.58,5.05-6.93,15.26-6.7,28.71c0.3,17.52,8.2,29.86,11.48,34.45"/>\r
<path class="blood_queen-st" d="M184.96,296.4c0.78-1.87,2.37-4.09,2.87-4.79c1.75-2.44,2.84-3.91,4.79-4.79c2.12-0.96,5.1-1.14,5.74,0\r
	c0.91,1.61-3.16,5.49-2.87,5.74c0.32,0.29,4.21-5.48,7.66-4.79c2.18,0.44,4.15,3.46,3.83,5.74c-0.17,1.2-1.06,1.64-0.96,2.87\r
	c0.11,1.36,1.22,1.76,1.91,2.87c1.39,2.2-0.62,4.28-1.91,10.53c-0.86,4.15-0.47,5.58-1.91,6.7c-0.89,0.69-2.2,0.79-4.79,0.96\r
	c-2.29,0.15-4.33,0.29-5.74,0C187.16,316.16,181.9,303.77,184.96,296.4z"/>\r
<path class="blood_queen-st" d="M184.96,297.36c-0.72,0.07-1.8,0.28-2.87,0.96c-1.09,0.69-1.66,1.56-1.91,1.91c-2.3,3.27-5.16,3.1-6.7,5.74\r
	c-1.23,2.12-0.05,3.34,0,8.61c0.04,4.02-0.62,6.61-0.96,8.61c-1.46,8.78-0.43,28.81,0,40.2c1.11,29.65-0.56,36.7,3.83,48.81\r
	c2.54,7.01,5.33,10.83,8.61,15.31c4.2,5.75,8.11,10.95,12.44,10.53c3.29-0.32,5.75-3.8,7.66-7.66c7-14.16,4.12-28.51,3.83-59.34\r
	c-0.19-19.92,0.82-33.48,0-40.2c-0.15-1.19-0.47-3.15,0-5.74c0.83-4.56,3.2-6,2.87-8.61c-0.19-1.51-1.3-3.59-5.74-5.74"/>\r
<path class="blood_queen-st" d="M172.52,363.39c-1.86,3.73-4.29,8.94-6.7,15.31c-2.23,5.89-7.14,19.87-9.57,39.24\r
	c-1.46,11.67-2.2,17.5-0.96,20.1c3.29,6.9,12.89,12.12,70.82,11.48c59.73-0.65,67.5-6.39,68.91-11.48c0.37-1.34-0.08-1.24-1.91-8.61\r
	c-5.9-23.79-3.04-32.39-8.61-39.24c-0.66-0.82-2.46-2.86-1.91-4.79c0.67-2.37,4.15-1.93,5.74-4.79c0.35-0.63,0.7-1.58,0-7.66\r
	c-0.32-2.81-0.69-5.12-0.96-6.7"/>\r
<path class="blood_queen-st" d="M262.49,291.61c-0.36-5.26-0.12-14.47,5.74-22.01c1.7-2.19,3.14-3.37,9.57-7.66c0,0,19.74-13.54,44.02-21.06\r
	c0.37-0.11,1.16-0.34,1.91,0c1.29,0.58,1.65,2.44,1.91,3.83c0.36,1.89,0.19,2.53,0,2.87c-0.28,0.49-0.68,0.79-0.96,0.96\r
	c-2.7,0.91-6.31,2.18-10.53,3.83c-6.12,2.4-11.1,4.65-13.4,5.74c-12.24,5.82-24.16,14.69-28.71,18.18"/>\r
<path class="blood_queen-st" d="M256.74,271.52c1.87-0.98,4.11-1.99,6.7-2.87c2.83-0.96,5.43-1.55,7.66-1.91"/>\r
<path class="blood_queen-st" d="M222.29,316.5c2.46,0.17,4.5-1.3,6.7-2.87c1.22-0.87,3.17-2.27,4.79-4.79c0.53-0.82,4.22-6.76,1.91-12.44\r
	c-0.61-1.5-1.69-2.62-3.83-4.79c-4.1-4.16-8.26-8.45-12.44-7.66c-1.23,0.23-2.76,0.96-2.87,1.91c-0.19,1.66,4.05,3.26,3.83,3.83\r
	c-0.29,0.75-7.4-2.44-9.57,0c-0.59,0.67-0.76,1.69-0.96,2.87c-0.26,1.6-0.01,2.44,0,3.83c0.01,2.45-0.77,3.21-0.96,4.79\r
	c-0.38,3.3,2.33,6.07,6.7,10.53C218.62,314.81,220.18,316.36,222.29,316.5z"/>\r
<path class="blood_queen-st" d="M236.65,297.36c3.23-3.04,4.86-3.29,5.74-2.87c2.03,0.95,0.67,5.59,3.83,8.61c1.02,0.98,1.96,1.25,3.83,1.91\r
	c7.24,2.58,12.93,4.61,16.27,8.61c0.91,1.09,2.12,2.89,2.87,5.74"/>\r
<path class="blood_queen-st" d="M256.74,307.88c0.29-2,0.83-4.66,1.91-7.66c2.58-7.11,9.99-20.86,19.14-20.1c5.93,0.49,9.98,6.87,11.48,9.57"/>\r
<path class="blood_queen-st" d="M323.74,249.5c-3.1,9.39-7.67,14.86-11.48,18.18c-7.17,6.25-15.55,8.28-15.31,12.44\r
	c0.2,3.48,6.25,4.94,5.74,7.66c-0.48,2.57-6.04,2-8.61,5.74c-2.42,3.53-0.62,8.63,0,10.53c5.03,15.47,2.32,37.81,1.91,41.15\r
	c0,0-1.51,12.42-19.14,38.28c-0.29,0.42-2.07,3.03-3.83,2.87c-0.24-0.02-0.54-0.1-0.96,0c-1.09,0.26-1.67,1.42-1.91,1.91\r
	c0,0-10.92,22.45-22.01,37.33c-1.41,1.89-3.71,4.77-7.66,6.7c-3.33,1.63-7.39,2.37-9.57,1.91c-8.05-1.7-11.42-24.26-12.44-58.38\r
	c-0.44-14.67-0.56-35.31,0.96-60.29"/>\r
<path class="blood_queen-st" d="M209.85,386.36c2.87,0,5.74,0,8.61,0"/>\r
<path class="blood_queen-st" d="M208.89,354.78c3.19,0,6.38,0,9.57,0"/>\r
<path class="blood_queen-st" d="M231.86,133.7c-1.75-0.39-5.21-1.16-7.66,0.96c-1.86,1.61-2.91,4.7-1.91,6.7c2.49,4.99,18.1,3.79,19.14,0\r
	C242.11,138.9,236.83,134.8,231.86,133.7z"/>\r
<path class="blood_queen-st" d="M174.44,140.4c0.38-0.03,4.34-0.33,5.74,1.91c1.6,2.56-1.2,6.7-3.83,8.61c-4.31,3.14-11.37,2.65-12.44,0\r
	c-1.09-2.68,4.1-7.08,4.79-7.66"/>\r
<path class="blood_queen-st" d="M309.38,202.61c5.56-6.55,12.13-13.08,15.31-11.48c0.96,0.48,1.77,1.78,1.91,4.79"/>\r
<path class="blood_queen-st" d="M266.31,171.02c-0.59-0.44-8.77-6.35-18.18-2.87c-7.32,2.7-12.32,9.95-12.44,18.18"/>\r
<path class="blood_queen-st" d="M149.55,187.29c3.03-5.73,8.89-9.4,15.31-9.57c6.75-0.18,13.08,3.54,16.27,9.57"/>\r
<path class="blood_queen-st" d="M295.98,197.82c-0.04-0.51-0.99-1.31-2.87-2.87c-9.2-7.63-13.83-11.47-15.31-12.44\r
	c-5.85-3.83-8.77-5.74-12.44-6.7c-10.79-2.82-25.18,1.25-29.67,10.53c-1.81,3.74-1.88,8.05-1.91,10.53\r
	c-0.02,1.11-0.12,8.16,1.91,11.48C243.36,220.89,296.64,205.61,295.98,197.82z"/>\r
<path class="blood_queen-st" d="M139.03,213.14c-1.02-1.97,0.61-4.75,1.91-6.7c7.33-10.93,12.83-19.11,23.93-21.06\r
	c2.79-0.49,10.68-1.85,17.23,2.87c5.36,3.87,6.74,9.53,8.61,17.23c1.1,4.52,0.79,6.33,0,7.66c-1.75,2.92-5.76,3.41-9.57,3.83\r
	c0,0-23.31,2.53-39.24-1.91C141.17,214.85,139.68,214.4,139.03,213.14z"/>\r
<path class="blood_queen-st" d="M205.06,236.1c0.34-0.87,3.49-0.87,3.83,0c0.22,0.57-0.6,1.91-1.91,1.91\r
	C205.66,238.02,204.84,236.67,205.06,236.1z"/>\r
<path class="blood_queen-st" d="M215.59,73.4c-0.5-1.37-1.18-3.33-1.91-5.74c-0.9-2.94-0.99-3.38-0.96-3.83c0.24-3.52,6.34-5.87,8.61-6.7\r
	c13.21-4.82,26.11-9.53,44.02-6.7c0,0,9.65,1.52,21.06,8.61c0.81,0.5,2.02,1.37,2.87,2.87c0.98,1.73,1.01,3.48,0.96,4.79\r
	c-0.23,5.96-2.53,14.95-2.87,16.27"/>\r
<path class="blood_queen-st" d="M307.47,97.33c1.5-1.17,4.85-3.44,9.57-3.83c2.16-0.18,6.35-0.52,8.61,1.91c2.64,2.84,2.14,8.89-1.91,14.36"/>\r
<path class="blood_queen-st" d="M288.33,60.01c22.08-11.97,46.38-5.14,54.55,9.57c6.12,11.01,3.4,26.81-3.83,37.33\r
	c-3.17,4.6-6.83,7.66-9.57,9.57"/>\r
<path class="blood_queen-st" d="M312.25,267.69c12.75,18.54,22.69,34.4,29.67,45.94c0,0,25.7,42.48,46.9,118.68c0.47,1.69,1.52,5.61,0,6.7\r
	c-2.63,1.87-10.79-6.29-19.14-13.4c-27.77-23.66-41.82-35.68-49.77-44.98c-11.22-13.14-18.81-24.74-20.1-23.93\r
	c-0.75,0.48,1.53,4.67,3.83,10.53c4.59,11.7,5.67,23.27,7.66,45.94c1.63,18.63,0.88,21.39-0.96,23.93\r
	c-6.47,8.93-21.32,8.07-25.84,7.66"/>\r
</svg>\r
`,Dc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.briar-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="briar-st" d="M189.6,84.49c-0.51-0.27-5.16-2.86-5.69-7.96c-0.24-2.37,0.32-6.09,2.27-6.82c2.38-0.89,6.46,2.79,10.23,9.1"/>\r
<path class="briar-st" d="M249.87,74.25c1.3-1.29,2.76-3.16,3.41-5.69c0.68-2.63-0.03-3.99,1.14-5.69c1.15-1.68,3.62-2.95,5.69-2.27\r
	c2.9,0.95,3.36,5.18,3.41,5.69c0.67,6.26-6.23,10.97-6.82,11.37"/>\r
<path class="briar-st" d="M288.53,136.79c-0.49,1.33-1.25,3.32-2.27,5.69c-7.22,16.72-16.72,27.61-20.47,31.84\r
	c-14.05,15.85-24,18.1-52.31,42.07c-21.56,18.26-32.84,31.39-39.8,48.9c-1.68,4.22-2.76,7.82-3.41,10.23"/>\r
<path class="briar-st" d="M194.15,127.7c-4.4,0.1-6.88-1.44-7.96-2.27c-4.9-3.76-4.71-10.89-4.55-17.06c0.12-4.44,0.23-7.33,2.27-10.23\r
	c2.55-3.63,6.37-4.83,9.1-5.69c3.12-0.98,8.1-2.55,11.37,0c1.74,1.36,2.6,3.59,3.41,5.69c0.72,1.87,1.19,3.08,1.14,4.55\r
	c-0.14,4.11-4.23,7.16-6.82,9.1c-3.8,2.83-5.72,2.76-7.96,5.69c-1.29,1.68-1.93,3.38-2.27,4.55"/>\r
<path class="briar-st" d="M225.99,102.68c-0.43-1.26-0.66-3.87-1.14-9.1c-0.32-3.56-0.27-4.03,0-4.55c1.77-3.4,9.58-2.58,12.51-2.27\r
	c3.3,0.35,21.26,2.22,25.02,12.51c1.36,3.71,1.14,7.96,1.14,7.96c-0.1,1.89-0.19,3.76-1.14,5.69c-2.32,4.72-8.23,6.67-12.51,6.82\r
	c-3.86,0.14-6.72-1.18-9.1-2.27c-4.43-2.04-7.15-4.8-9.1-6.82C228.89,107.76,227.08,105.87,225.99,102.68z"/>\r
<path class="briar-st" d="M191.88,123.15c-0.35,1.57,1.29,4.83,4.55,11.37c1.68,3.37,2.54,5.06,3.41,5.69c3.28,2.34,6.43-0.23,15.92-1.14\r
	c7.01-0.67,8.24,0.45,12.51-1.14c2.18-0.82,5.76-2.15,7.96-5.69c2.51-4.02,2.63-9.92,0-13.65c-4.07-5.77-13.56-4.64-23.88-3.41\r
	C205.74,115.97,193.13,117.47,191.88,123.15z"/>\r
<path class="briar-st" d="M194.15,129.97c-3.07,1.81-7.37,4.99-10.23,10.23c-8.31,15.23,2.93,34.32,6.82,40.94\r
	c3.58,6.08,7.94,13.28,17.06,18.19c8.9,4.8,17.49,4.82,21.61,4.55"/>\r
<path class="briar-st" d="M238.5,123.15c-0.05-1.91,0.1-4.17,1.14-4.55c1.08-0.39,2.61,1.41,3.41,2.27c4.44,4.82,8.42,5.02,12.51,7.96\r
	c6.86,4.93,10.41,14.97,10.23,22.74c-0.11,4.8-1.56,5.23-4.55,18.19c-1.1,4.78-1.83,8.75-2.27,11.37"/>\r
<path class="briar-st" d="M196.42,149.3c1.03-1.99,4.25-2.08,7.96-2.27c28.44-1.48,36.09-6.49,38.66-2.27\r
	c2.86,4.68-3.69,15.64-12.51,20.47c-1.46,0.8-8.52,4.47-17.06,2.27C202.49,164.68,194.27,153.48,196.42,149.3z"/>\r
<path class="briar-st" d="M206.66,153.85c0.03-0.63,2.81-0.75,15.92-2.27c10.76-1.25,12.38-1.58,12.51-1.14c0.29,1-7.18,5.19-15.92,5.69\r
	C212.76,156.49,206.62,154.8,206.66,153.85z"/>\r
<path class="briar-st" d="M198.7,117.46c4.02-3.49,7.9-4.99,10.23-5.69c3-0.89,5.38-1.01,7.96-1.14c4.73-0.24,7.9-0.4,11.37,1.14\r
	c1.52,0.67,4.3,2.2,6.82,5.69"/>\r
<path class="briar-st" d="M230.54,100.41c0.91-2.68,5.89-3.03,11.37-3.41c4.46-0.31,9.33-0.65,11.37,2.27c1.13,1.62,1.14,3.87,1.14,4.55\r
	c0,0.85,0.01,2.77-1.14,4.55c-1.62,2.53-4.51,3.16-5.69,3.41c-4.86,1.06-8.93-1.47-10.23-2.27\r
	C234.57,107.77,229.49,103.51,230.54,100.41z"/>\r
<path class="briar-st" d="M193.01,119.74c-0.74-0.52-3.72-2.75-4.55-6.82c-0.74-3.62,0.42-7.74,3.41-10.23c2.93-2.44,6.42-2.34,7.96-2.27\r
	c1.36,0.06,2.91,0.13,4.55,1.14c2.31,1.43,3.16,3.73,3.41,4.55"/>\r
<path class="briar-st" d="M336.29,190.24c6.34,15.02,5.55,25.17,3.41,31.84c-1.34,4.19-3.88,9.06-4.55,17.06\r
	c-0.58,6.96,0.59,12.31,1.14,14.78c12.1,55.13,13.73,66.49,11.37,78.46c-0.51,2.58-4.49,21.38-20.47,35.25\r
	c-15.29,13.28-33.02,14.63-50.04,15.92c-33.13,2.52-60.77-6.69-72.78-11.37c-23.34-9.11-27.73-16.78-50.04-20.47\r
	c-15.16-2.5-30.47,0.36-31.84-4.55c-0.8-2.87,3.44-7.07,6.82-9.1c6.59-3.94,13.1-1.51,13.65-3.41c0.55-1.93-5.52-6.8-12.51-7.96\r
	c-4.24-0.7-6.04,0.42-10.23-1.14c-1.33-0.49-6.51-2.42-6.82-5.69c-0.28-3,3.7-5.58,5.69-6.82c10.19-6.41,21.41-4.23,21.61-5.69\r
	c0.27-2-21.07-4.28-21.61-10.23c-0.3-3.31,5.95-6.39,6.82-6.82c8.84-4.36,14.66,1.13,22.74-3.41c3.23-1.82,2.35-2.72,6.82-5.69\r
	c2.28-1.51,7.9-4.84,14.78-5.69c1.91-0.23,5.8-0.51,27.29,6.82c8.74,2.98,8.38,3.12,10.23,3.41c10.7,1.66,15.7-4.2,27.29-7.96\r
	c18.67-6.05,41.64-2.52,51.17,1.14c1.38,0.53,5.62,2.27,11.37,2.27c4.88,0,8.85-1.26,11.37-2.27"/>\r
<path class="briar-st" d="M244.18,235.73c-0.87,5.17-1.51,11.74-1.14,19.33c0.41,8.22,1.88,15.17,3.41,20.47"/>\r
<path class="briar-st" d="M156.62,352.86c-2.75,7.09-6.16,17.6-7.96,30.7c-1.7,12.39-3.59,26.23,0,35.25\r
	c3.46,8.67,15.57,21.89,133.05,21.61c67.69-0.16,89.3-4.61,96.66-19.33c2.89-5.78,1.96-12.65,0-26.15\r
	c-13.35-91.77-15.11-86.75-17.06-110.3c0,0-2.14-25.87-9.1-58c-0.64-2.95-2.14-9.39-5.69-17.06c-2.47-5.32-4.88-8.99-5.69-10.23\r
	c-13.87-21.47-32.78-72.29-51.17-86.42c-1.36-1.04-4.92-3.59-9.1-7.96c-5.57-5.83-4.73-7.08-10.23-12.51\r
	c-5.02-4.95-6.96-5.14-9.1-9.1c-0.8-1.47-1.47-3.2-3.41-4.55c-2.01-1.4-3.38-1.02-5.69-2.27c-2.33-1.27-2.73-2.65-4.55-4.55\r
	c-3.49-3.64-8.25-4.85-12.51-5.69c-6.22-1.22-11.35,0.33-21.61,3.41c-10.29,3.09-13.67,5.92-14.78,6.82\r
	c-2.47,2.01-1.6,1.98-5.69,5.69c-5.29,4.8-6.54,5.27-7.96,7.96c-1.74,3.28-0.43,3.96-2.27,7.96c-1.83,3.95-3.16,3.4-5.69,7.96\r
	c-2.44,4.4-3.35,8.81-3.41,9.1c-0.54,2.69-0.29,3.52-1.14,5.69c-1.03,2.62-2.16,3.45-3.41,5.69c-1.46,2.61-1.8,4.85-2.27,7.96\r
	c-2.48,16.22,1.14,29.57,1.14,29.57c0.2,0.74,5.19,18.75,13.65,29.57c0.92,1.17,3.48,4.32,4.55,9.1c0.92,4.11,0.31,7.5,0,9.1\r
	c-4.13,21.64-8.64,43.28-9.1,45.49"/>\r
</svg>\r
`,Oc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.catnana-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="catnana-st" d="M328.5,273.5c-0.77,15.85-3.96,22.74-7,26c-3.23,3.47-5.81,7.49-9,11c-0.32,0.35-1.26,1.38-2,3\r
	c-0.72,1.57-0.93,3.02-1,4c0.07,16.58,0.14,28.59,0,32c-0.03,0.65-0.12,2.47,1,4c1.02,1.39,2.54,1.85,3,2c1.77,0.57,5.52,3.05,13,8\r
	c4.78,3.16,7.67,6.16,13,12c7.3,8.01,10.96,12.01,10,16c-0.94,3.91-5.62,7.18-10,7c-4.66-0.19-7.69-4.24-9-6\r
	c-1.9-2.55-1.53-3.53-3-6c-3.65-6.11-11.96-10.13-15-8c-1.36,0.95-1.05,2.71-1,9c0.11,12.38,0.16,18.57-2,22\r
	c-2.54,4.03-6.01,4.98-7,10c-0.42,2.12-0.17,3.86,0,5c0.88,5.86,3.95,7.58,6,12c3.63,7.82,0.03,15.42,2,25c0.38,1.84,0.9,3.44,2,5\r
	c1.92,2.71,4.13,3.23,4,4c-0.23,1.38-7.53,0.96-16,1c0,0-15.89,0.08-28-2c-0.97-0.17-2.83-0.51-4-2c-1.72-2.19-0.89-5.56,0-9\r
	c1.7-6.53,4.26-9.26,3-11c-0.75-1.04-2.38-1.05-4-1c-7.27,0.22-11.84,1.51-15,2c-9.75,1.5-12.09-3.8-17-1c-2.53,1.44-4.02,5.63-7,14\r
	c-1.97,5.52-2.23,8.08-1,10c1.45,2.27,3.96,2.05,4,3c0.1,2.59-18.62,4.67-31,5c0,0-4.97,0.14-14-3c-1.16-0.4-3.17-1.16-4-3\r
	c-0.71-1.55-0.25-3.17,0-4c2.82-9.43,6-14,6-14c6-8.63,7.04-6.49,9-11c0.75-1.72,0.96-2.87,1-19c0-0.78-0.01-2.43-1-4\r
	c-0.73-1.17-1.68-1.78-2-2c-4.04-2.72-7.5-8.71-18-18c-3.76-3.33-4.78-3.85-6-6c-1.45-2.55-1.59-4.59-4-7c-2.06-2.06-3.45-2.06-4-2\r
	c-0.99,0.11-1.68,0.71-2,1c-7.31,6.51-13,14-13,14c-0.45,0.59-1.39,1.83-3,3c0,0-1.79,1.41-4,2c-6.24,1.68-13.22-2.43-17-7\r
	c-4.01-4.85-5.78-11.87-4-18c2.72-9.36,12.98-14.18,19-17c7.15-3.35,13.91-7.52,21-11c0.63-0.31,2.49-1.21,3-3\r
	c0.24-0.84,0.1-1.6,0-2c-2.33-27.16-2.96-50.3-3-68c-0.06-24.8-0.03-48.01,4-78c2.95-21.97,7.08-40.39,10.69-54.13\r
	c0.84-3.2,2.61-6.07,5.08-8.27c10.08-9.02,21.15-18.29,33.23-27.6c12.04-9.28,23.77-17.58,35-25c6.33-0.67,12.67-1.33,19-2\r
	c5.83-18.83,11.67-37.67,17.5-56.5c6.17-2.41,8.86-3.46,15.03-5.88c7.99,4.63,15.98,9.25,23.97,13.88l-24,54\r
	c2.03,1.52,4.97,3.74,8.5,6.5c4.44,3.47,5.28,4.24,6,5c4.07,4.3,5.3,9.29,6,12c4.6,17.8,9.86,28.37,16,62c1.17,6.42,1.67,9.82,1,14\r
	c-0.24,1.48-0.79,4.11-1,8c-0.14,2.53-0.08,4.61,0,6"/>\r
<path class="catnana-st" d="M266.5,308.5c-13.28-2.43-22.24-8.36-35-17c-12.53-8.48-18.79-12.72-24-19c-10.54-12.71-18.26-32.67-15-51\r
	c6.11-34.32,48.4-58.92,86-54c30.99,4.05,60.58,28.39,65,57c1.46,9.44,1.06,26.23-8,41c-1.84,3-5.22,6.66-12,14\r
	c-16.06,17.39-24.3,26.15-34,29C280.67,311.09,273.19,309.72,266.5,308.5z"/>\r
<polyline class="catnana-st" points="0,0 0,0 0,0 "/>\r
<path class="catnana-st" d="M216.5,245.5c1.75-5.45,12.66-6.59,20-5c1.24,0.27,13.55,3.08,14,10c0.33,5.12-6.02,9.59-11,11\r
	c-7.5,2.13-13.73-2.13-15-3C220.84,256,215,250.17,216.5,245.5z"/>\r
<path class="catnana-st" d="M306.5,255.5c1.69,2.28,5.12,2.17,10,2c6.04-0.2,10.75-0.36,14-4c2.78-3.11,4.41-8.65,2-12\r
	c-1.82-2.53-5.23-2.79-8-3c-1.51-0.11-10.99-0.83-16,6C306.46,247.27,304.28,252.5,306.5,255.5z"/>\r
<path class="catnana-st" d="M270.5,282.5c1.94-4.97,24.72-3.34,26,2c0.76,3.16-5.63,9.15-13,9C275.29,293.33,269.29,285.59,270.5,282.5z"/>\r
<path class="catnana-st" d="M256.94,298.3c1.34,1.22,5.27,4.5,11.33,5.16c7.57,0.83,13-3.03,14.24-3.96c0.96,0.84,3.02,2.38,5.97,2.76\r
	c6.3,0.8,10.67-4.46,10.98-4.85"/>\r
<path class="catnana-st" d="M282.5,293.5c0,2,0,4,0,6"/>\r
</svg>\r
`,kc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.chaos_insurgency-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="chaos_insurgency-st" d="M65.05,256.78C61.28,153.02,147.09,64.72,250.45,65.06c108.44,0.35,193.3,98.14,183.58,202.57\r
	c-8.51,91.46-87.56,166.6-182.68,167.31C152.44,435.68,68.65,355.69,65.05,256.78z"/>\r
<path class="chaos_insurgency-st" d="M304.71,74.1c-3.36-0.27-8.3-0.21-13.57,1.81c-14.46,5.54-21.12,21.9-26.23,39.79\r
	c-10.61,37.18-13.17,76.25-13.57,103.1c-0.93-70.23-1.24-121.59-0.9-131.13c0.06-1.58,0.24-5.02,1.81-9.04\r
	c2.33-5.96,6.48-10.03,9.95-12.66"/>\r
<path class="chaos_insurgency-st" d="M412.5,164.17c-2.2-2.56-5.76-5.98-10.93-8.24c-14.37-6.29-30.79,0.96-46.62,9.91\r
	c-33.94,19.18-63.63,45.28-82.81,63.81c49.11-50.62,85.26-87.38,92.2-93.93c1.12-1.06,3.67-3.4,7.64-5.17\r
	c5.84-2.6,11.65-2.58,15.97-2.03"/>\r
<path class="chaos_insurgency-st" d="M434.93,267.64c-1.8-3.88-5.27-9.8-11.76-13.57c-5.54-3.22-10.95-3.52-13.57-3.62\r
	c-12.66-0.47-62.87,0.06-131.13,1.81c40.52,0.72,72.59,6.4,94.96,11.76c23.4,5.6,40.46,11.88,47.93,27.13\r
	c3.6,7.34,3.95,14.68,3.62,19.9"/>\r
<path class="chaos_insurgency-st" d="M337.26,412.33c1.8-3.13,4.39-8.44,5.43-15.37c1.62-10.91-1.32-21.14-7.23-32.56\r
	c-9.66-18.64-32.97-51.44-66.92-90.44c47.13,46.61,81.6,81.5,92.24,92.24c2.19,2.21,7.76,7.83,9.04,16.28\r
	c0.46,3.04,0.24,5.61,0,7.23"/>\r
<path class="chaos_insurgency-st" d="M192.57,425.9c3.79,0.12,10.39-0.18,17.18-3.62c10.17-5.15,14.83-14.35,17.18-18.99\r
	c8.41-16.59,16.9-62.07,20.8-122.99c1.03,70.34,0.71,121.7,0,132.04c-0.36,5.17-1.56,11.05-5.43,16.28\r
	c-1.92,2.6-3.99,4.35-5.43,5.43"/>\r
<path class="chaos_insurgency-st" d="M112.08,371.64c1.98,0.09,5.24,0.06,9.04-0.9c8.62-2.2,14.08-7.72,16.28-9.95\r
	c10.74-10.86,44.12-44.5,88.63-90.44c-44.53,38.77-81.8,64.62-100.38,71.44c-5.26,1.93-15.44,5.67-26.23,1.81\r
	c-7.4-2.65-12.11-7.82-14.47-10.85"/>\r
<path class="chaos_insurgency-st" d="M65.05,236.89c1.27,2.29,3.24,5.04,6.33,7.23c0,0,3.82,2.72,9.04,3.62c7.6,1.31,62.76,1.73,138.37,0.9\r
	c-7.46-0.56-85.39-6.67-119.37-20.8c-18.21-7.57-22.37-16.86-23.51-19.9c-2.4-6.39-1.7-12.5-0.9-16.28"/>\r
<path class="chaos_insurgency-st" d="M164.53,86.76c-2.62,2.81-6.13,7.32-8.14,13.57c-5.27,16.37,3.59,32.69,11.76,46.12\r
	c19.65,32.32,43.18,60.92,60.59,80.49c-52.68-50.74-90.36-88.59-95.86-95.86c-4.03-5.34-4.52-10.85-4.52-10.85\r
	c-0.36-4.05,0.73-7.52,1.81-9.95"/>\r
<path class="chaos_insurgency-st" d="M217.89,248.64c0.49-17.37,16.07-31.6,33.46-29.84c16.49,1.67,28.62,17.1,27.13,33.46\r
	c-1.42,15.57-14.84,28.3-30.75,28.03C230.88,280.01,217.42,265.26,217.89,248.64z"/>\r
</svg>\r
`,Ac=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.child_naiwa_ts-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="child_naiwa_ts-st" d="M132.5,320c-0.05,5.35-1.56,9.31-4,10c-2.72,0.77-5.85-2.72-7-4c-7.85-8.75-9.77-31.93,0-59\r
	c3.87-10.73,10.91-21.82,25-44c17.95-28.26,20.92-29.23,26-42c6.17-15.52,3.13-17.48,10.5-43.5c6.58-23.23,9.88-34.84,17.5-42.5\r
	c16.75-16.82,42.58-15.59,55-15c13.46,0.64,35.62,1.69,48,17c5.7,7.04,4.88,11.62,12,41c2.01,8.32,6.07,25.05,10,37\r
	c5.3,16.11,8.98,19.28,35,64c13.12,22.54,21.56,37.86,23.5,56.5c0,0,1.77,17.07-6.5,28.5c-1.25,1.72-3.92,5.41-7,5\r
	c-1.67-0.22-2.85-1.57-3.5-2.5"/>\r
<path class="child_naiwa_ts-st" d="M366.5,299c0,9.33,0,18.67,0,28c-0.53,3.04-1.44,7.59-3,13c-2.4,8.31-5.1,17.64-12,27\r
	c-2.47,3.36-6.59,8.21-13,13v43.17c0,2.68-1.32,5.17-3.51,6.72c-1.02,0.72-2.18,1.44-3.49,2.12c-2.28,1.18-7.01,3.23-21,3\r
	c-12.35-0.21-19.8-0.42-28-5c-1.64-0.92-3.06-1.87-4.26-2.76c-1.72-1.28-2.74-3.29-2.74-5.44V409c-6.93,1.2-15.38,2.11-25,2\r
	c-10.53-0.12-19.67-1.44-27-3l0,12.48c0,1.73-0.68,3.38-1.9,4.6c-0.6,0.61-1.31,1.26-2.1,1.92c-8.77,7.3-19.13,7.61-32,8\r
	c-11.97,0.36-17.53-1.92-20-3c-0.62-0.27-1.21-0.55-1.78-0.83c-3.21-1.6-5.29-4.81-5.45-8.39c-0.59-13.93-1.19-27.86-1.78-41.78\r
	c-6.97-6.3-11.35-12.56-14-17c-6.46-10.83-8.55-20.82-10-28c-1.31-6.49-1.8-12.02-2-16c0-7.33,0-14.67,0-22"/>\r
<path class="child_naiwa_ts-st" d="M202.5,141c-6.42-2.57-9.11-12.47-7-20c1.72-6.14,7.03-12.06,14-13c0.98-0.13,6.81-0.91,11,3\r
	c5.48,5.12,3.32,13.8,3,15C221.04,135.29,210.32,144.13,202.5,141z"/>\r
<path class="child_naiwa_ts-st" d="M302.5,117c-3.27,0.18-8.36,0.82-14,3.1c-4.8,1.94-8.27,4.37-10.5,6.2c9.33,2.07,18.67,4.13,28,6.2"/>\r
<path class="child_naiwa_ts-st" d="M223.5,160c7.31,1.59,16.46,2.93,27,3c13.3,0.09,24.55-1.86,33-4"/>\r
<path class="child_naiwa_ts-st" d="M257.3,162.89c3.42,3.76,5.41,7.66,6.59,10.52c1.96,4.75,2.07,7.57,4.39,10.52c0.7,0.89,3.18,4.04,6.59,3.51\r
	c2.6-0.4,5.4-2.88,6.59-7.01c0.87-3.04,0.55-5.84,0-10.52c-0.54-4.64-1.49-8.23-2.2-10.52"/>\r
</svg>\r
`,jc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.chinaball-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="chinaball-st" d="M161.5,245.5c1.88-28.78,26.24-60.51,53-58c26.81,2.52,42.18,38.1,42,64c-0.05,7.61-1.62,39.86-26,51\r
	c-22.34,10.2-45.31-5.78-47-7C159.85,278.49,161.31,248.45,161.5,245.5z"/>\r
<path class="chinaball-st" d="M329.5,236.5c4.24-21.27,21.03-47.57,40-47c21.99,0.66,38.11,37.17,38,65c-0.07,18.03-7,47.27-27,54\r
	c-8.32,2.8-15.8,0.66-18,0C339.06,301.45,323.58,266.19,329.5,236.5z"/>\r
<path class="chinaball-st" d="M170.5,215.5c-4-2.33-8-4.67-12-7c-10.67,7.67-21.33,15.33-32,23c4.67-12.67,9.33-25.33,14-38\r
	c-10.67-8-21.33-16-32-24c12.67-0.33,25.33-0.67,38-1c4.33-12.33,8.67-24.67,13-37c3.67,12.67,7.33,25.33,11,38c14,0,28,0,42,0\r
	c-11.33,7.67-22.67,15.33-34,23c1,3,2,6,3,9"/>\r
<path class="chinaball-st" d="M235.5,135.5c-1-3.33-2-6.67-3-10c3.33,1.33,6.67,2.67,10,4c2.67-2.33,5.33-4.67,8-7c0.33,3.33,0.67,6.67,1,10\r
	c3.33,2.33,6.67,4.67,10,7c-3.67,1-7.33,2-11,3c-0.67,3.67-1.33,7.33-2,11c-2.67-3-5.33-6-8-9c-3.67,0.33-7.33,0.67-11,1\r
	C231.5,142.17,233.5,138.83,235.5,135.5z"/>\r
<path class="chinaball-st" d="M270.5,167.5c0-4,0-8,0-12c3,2.67,6,5.33,9,8c4-1.33,8-2.67,12-4c-1.67,3.67-3.33,7.33-5,11c2.33,3,4.67,6,7,9\r
	c-4-0.33-8-0.67-12-1c-2.33,3-4.67,6-7,9c-0.67-3.67-1.33-7.33-2-11c-3.33-1-6.67-2-10-3C265.17,171.5,267.83,169.5,270.5,167.5z"/>\r
<path class="chinaball-st" d="M272.5,215.5c1.67-3.33,3.33-6.67,5-10c1.67,3.33,3.33,6.67,5,10c3.67,0,7.33,0,11,0c-2.67,3-5.33,6-8,9\r
	c1,3.67,2,7.33,3,11c-3.33-1.67-6.67-3.33-10-5c-3.67,2-7.33,4-11,6c1-4,2-8,3-12c-3-3-6-6-9-9\r
	C265.17,215.5,268.83,215.5,272.5,215.5z"/>\r
<path class="chinaball-st" d="M248.5,411.5c-32.97-0.23-119.95-0.83-159-62c-21.59-33.81-18.77-70.84-17-94c1.29-16.9,6.2-81.32,60-127\r
	c42.44-36.03,90.25-39.15,107-40c13.93-0.71,84.5-4.28,139,50c49.67,49.47,50.93,112.06,51,128c0.08,19.41,0.22,53.6-21,85\r
	C367.4,412.32,280.62,411.72,248.5,411.5z"/>\r
</svg>\r
`,Mc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.colorful_chaos-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="colorful_chaos-st" d="M65.5,241.22c6.98-3.97,15.3-8.13,24.94-11.88c9.99-3.89,19.26-6.51,27.31-8.31c-0.79-2.38-1.58-4.75-2.38-7.12\r
	c-6.33,2.77-12.67,5.54-19,8.31c-1.98-7.12-3.96-14.25-5.94-21.38c8.32-4.78,19.05-10.01,32.06-14.25\r
	c12.07-3.93,23.02-6.01,32.06-7.12c0.4,8.71,0.79,17.42,1.19,26.12c-5.15,0.79-10.29,1.58-15.44,2.38c0.4,2.38,0.79,4.75,1.19,7.12\r
	c4.37-0.92,9.13-1.74,14.25-2.38c5.52-0.68,10.68-1.04,15.44-1.19c0.79,7.12,1.58,14.25,2.38,21.38\r
	c-5.71,0.96-11.65,2.13-17.81,3.56c-3.26,0.76-6.42,1.55-9.5,2.38c0,0.79,0,1.58,0,2.38c2.96-0.07,17.04-0.11,28.5,10.69\r
	c14.83,13.99,12.15,33.79,11.88,35.62c-12.44-0.6-16.43,2.17-17.81,4.75c-1.15,2.15-0.25,3.7,0,13.06\r
	c0.26,9.68-0.61,11.13-1.19,11.88c-2.85,3.69-9.38,4.46-14.25,2.38c-4.53-1.94-6.55-5.89-7.12-7.12c-0.14,0.92-1.28,7.79-7.12,10.69\r
	c-0.51,0.25-2.81,1.35-5.94,1.19c-5.93-0.3-10.05-4.87-13.06-8.31c-2.52-2.87-2.26-3.41-8.31-13.06c-4.68-7.45-4.95-7.33-5.94-9.5\r
	c-3.51-7.73-2.66-15.23-2.38-17.81c2.03-18.06,19.58-28.64,21.38-29.69c-0.4-0.79-0.79-1.58-1.19-2.38\r
	c-9.19,3.24-20.47,8.36-32.06,16.62c-4.98,3.55-9.32,7.19-13.06,10.69C74.21,261.01,69.85,251.11,65.5,241.22z"/>\r
<path class="colorful_chaos-st" d="M177.12,186.59c11.08-3.17,22.17-6.33,33.25-9.5c0.55,25.14,1.4,48.4,2.38,70.06\r
	c0.37,8.24,1.13,21.41,9.5,26.12c4.6,2.59,9.69,1.61,11.88,1.19c9.84-1.9,20.09-11.02,19-20.19c-0.8-6.7-7.36-10.92-10.69-13.06\r
	c-6.23-4.01-12.42-4.64-15.44-4.75c3.96-11.08,7.92-22.17,11.88-33.25c5.15,1.22,13.14,3.76,21.38,9.5\r
	c2.67,1.86,13.94,9.71,19,21.38c6.91,15.94,1.26,36.8-13.06,53.44c-0.64-0.5-4.56-3.43-9.5-2.38c-1.15,0.25-2.13,0.66-2.93,1.11\r
	c-1.16,0.65-2.54,0.78-3.75,0.23c-1.55-0.7-3.74-1.38-6.39-1.34c-3.99,0.07-7.02,1.76-8.85,3.14c-1.09,0.82-2.61,0.77-3.66-0.09\r
	c-2.03-1.66-5.44-3.8-10.04-4.23c-2.57-0.24-4.79,0.12-6.47,0.58c-1.13,0.31-2.33,0.25-3.38-0.26c-1.37-0.67-3.27-1.36-5.59-1.5\r
	c-5.68-0.36-9.7,2.75-10.69,3.56c-5.49-15.25-10.86-34.01-14.25-55.81C178.17,214.34,177.22,199.54,177.12,186.59z"/>\r
<path class="colorful_chaos-st" d="M243.62,181.84c1.41-6.82,9.72-11.31,16.62-11.88c11.68-0.96,24.76,8.87,23.75,19\r
	c-0.75,7.48-8.99,13.45-16.62,14.25C254.71,204.54,241.57,191.81,243.62,181.84z"/>\r
<path class="colorful_chaos-st" d="M278.06,210.34c2.77,7.12,5.54,14.25,8.31,21.38c5.54-3.17,11.08-6.33,16.62-9.5\r
	c-0.4,3.96-0.79,7.92-1.19,11.88c8.31,0.4,16.62,0.79,24.94,1.19c0,1.98,0,3.96,0,5.94c-11.88-0.79-23.75-1.58-35.62-2.38\r
	c-1.19,8.71-2.38,17.42-3.56,26.12c11.88,0.4,23.75,0.79,35.62,1.19c-2.38,5.54-4.75,11.08-7.12,16.62c2.58-0.1,6.26-0.17,10.69,0\r
	c5.56,0.21,8.39,0.34,10.69,1.19c0.83,0.31,7.49,2.89,10.69,9.5c2.36,4.87,0.49,7.07,2.38,11.88c1.21,3.09,3.93,7.13,10.69,10.69\r
	c-0.11-2.1-0.18-4.94,0-8.31c0.21-3.96,0.34-5.99,1.19-8.31c0.5-1.36,1.67-4.45,4.75-7.12c2.74-2.37,5.62-3.23,7.12-3.56\r
	c-9.1-3.96-18.21-7.92-27.31-11.88c0-1.98,0-3.96,0-5.94c4.52,0.97,9.29,2.14,14.25,3.56c6.43,1.84,12.38,3.86,17.81,5.94\r
	c1.58-6.73,3.17-13.46,4.75-20.19c-5.6-3.22-12.34-6.57-20.19-9.5c-5.51-2.06-10.7-3.59-15.44-4.75c0-1.98,0-3.96,0-5.94\r
	c3.55,0.45,7.55,1.18,11.88,2.38c6.11,1.69,11.28,3.85,15.44,5.94c1.19-3.96,2.38-7.92,3.56-11.88c2.08,1.1,4.55,2.64,7.12,4.75\r
	c2.52,2.07,4.47,4.15,5.94,5.94c4.75-9.5,9.5-19,14.25-28.5c-6.04-3.19-12.37-6.37-19-9.5c-9.41-4.45-18.54-8.38-27.31-11.88\r
	c2.77-1.58,5.54-3.17,8.31-4.75c-7.92-7.52-15.83-15.04-23.75-22.56c-13.9,6.3-29.23,14.42-45.12,24.94\r
	C291.69,200.03,284.58,205.22,278.06,210.34z"/>\r
<path class="colorful_chaos-st" d="M312.5,216.28c8.31-3.17,16.62-6.33,24.94-9.5c7.12,4.75,14.25,9.5,21.38,14.25\r
	c-7.18-1.44-15.12-2.7-23.75-3.56C326.98,216.66,319.42,216.32,312.5,216.28z"/>\r
<path class="colorful_chaos-st" d="M278.06,285.16c0.66-0.21,2.54-0.71,4.75,0c0.58,0.19,1.1,0.43,1.54,0.69c1.32,0.77,3.01,0.68,4.22-0.26\r
	c3.05-2.36,5.52-2.84,7.3-2.8c3.23,0.07,5.26,1.9,10.69,2.38c2.03,0.18,3.7,0.09,4.75,0c-2.5-8.18-8.41-14.26-15.44-15.44\r
	c-1.25-0.21-6.96-1.17-11.88,2.38c-2.91,2.1-4.28,4.86-4.75,5.94C277.91,281.09,277.95,283.83,278.06,285.16z"/>\r
<path class="colorful_chaos-st" d="M367.12,305.34c2.45-8.69,13.11-13.12,21.38-9.5c7.44,3.26,11.71,12.51,8.31,20.19\r
	c-3.03,6.85-11.07,9.94-17.81,8.31C370.87,322.39,364.79,313.63,367.12,305.34z"/>\r
<path class="colorful_chaos-st" d="M381.38,283.97c6.73,4.35,13.46,8.71,20.19,13.06c5.45-11.01,12.76-23.65,22.56-36.81\r
	c7.24-9.73,14.55-18,21.38-24.94c-9.9-6.33-19.79-12.67-29.69-19c-7.12,11.14-14.41,23.81-21.38,38\r
	C389.36,264.62,385.05,274.57,381.38,283.97z"/>\r
<path class="colorful_chaos-st" d="M197.31,311.28c-0.4-2.77-0.79-5.54-1.19-8.31c1.19,0,2.38,0,3.56,0c-0.28,0.32-1.47,1.78-1.19,3.56\r
	c0.39,2.43,3.34,4.23,5.94,3.56c2-0.52,3.75-2.5,3.56-4.75c-0.18-2.23-2.16-3.44-2.38-3.56c0.79-0.4,1.58-0.79,2.38-1.19\r
	c-0.4-3.17-0.79-6.33-1.19-9.5c-9.9,1.98-19.79,3.96-29.69,5.94c0,2.38,0,4.75,0,7.12c0.79,0,1.58,0,2.38,0c0,2.38,0,4.75,0,7.12\r
	c3.17-0.4,6.33-0.79,9.5-1.19c0-1.98,0-3.96,0-5.94"/>\r
<path class="colorful_chaos-st" d="M187.81,311.28c3.56,0,7.12,0,10.69,0c0,0.79,0,1.58,0,2.38c3.17,0,6.33,0,9.5,0c0,2.77,0,5.54,0,8.31\r
	c-3.17,0-6.33,0-9.5,0c3.96,1.98,7.92,3.96,11.88,5.94c-2.38,2.77-4.75,5.54-7.12,8.31c-1.58-1.58-3.17-3.17-4.75-4.75\r
	c0,3.17,0,6.33,0,9.5c-3.56,0-7.12,0-10.69,0c0-3.17,0-6.33,0-9.5c-1.98,2.38-3.96,4.75-5.94,7.12c-2.38-1.19-4.75-2.38-7.12-3.56\r
	c1.98-3.96,3.96-7.92,5.94-11.88c-1.19,0-2.38,0-3.56,0c0-3.17,0-6.33,0-9.5c3.56,0,7.12,0,10.69,0\r
	C187.81,312.86,187.81,312.07,187.81,311.28z"/>\r
<path class="colorful_chaos-st" d="M208,305.34c1.98,1.98,3.96,3.96,5.94,5.94c5.54-4.35,11.08-8.71,16.62-13.06c-3.56-1.98-7.12-3.96-10.69-5.94\r
	c-3.96,3.96-7.92,7.92-11.88,11.88"/>\r
<path class="colorful_chaos-st" d="M209.19,318.41c1.98,2.38,3.96,4.75,5.94,7.12c5.54-3.96,11.08-7.92,16.62-11.88c-3.17-2.38-6.33-4.75-9.5-7.12\r
	C217.9,310.49,213.54,314.45,209.19,318.41z"/>\r
<path class="colorful_chaos-st" d="M206.81,333.84c5.15-3.96,10.29-7.92,15.44-11.88c3.17,2.38,6.33,4.75,9.5,7.12c-6.33,3.96-12.67,7.92-19,11.88\r
	C210.77,338.59,208.79,336.22,206.81,333.84z"/>\r
<path class="colorful_chaos-st" d="M240.06,302.97c-2.38,0-4.75,0-7.12,0c0,3.56,0,7.12,0,10.69c1.98,0,3.96,0,5.94,0c0,4.75,0,9.5,0,14.25\r
	c0.57,2.17,1.81,5.54,4.75,8.31c3.54,3.34,7.85,4.23,13.06,4.75c6.25,0.63,15.98,0.95,28.5-1.19c0.3-1.51,0.62-4.06,0-7.12\r
	c-0.55-2.68-1.6-4.7-2.38-5.94c-12.32,1.4-21.75,2.19-26.12,2.38c-1.07,0.05-3.11,0.11-4.75-1.19c-0.48-0.38-1.61-1.41-2.38-4.75\r
	c-0.44-1.93-0.9-5.24,0-9.5c1.19,0,2.38,0,3.56,0c-0.05,1.18,0.01,3.46,1.19,5.94c1.65,3.49,4.49,5.22,5.94,5.94\r
	c2.71,1.33,5.08,1.29,8.31,1.19c2.73-0.09,6.92-0.53,11.88-2.38c0-4.75,0-9.5,0-14.25c1.98,0,3.96,0,5.94,0c0-1.98,0-3.96,0-5.94\r
	c-1.58,0-3.17,0-4.75,0c0-3.17,0-6.33,0-9.5c-3.96,0-7.92,0-11.88,0c0,3.17,0,6.33,0,9.5c-1.58,0-3.17,0-4.75,0c0-3.17,0-6.33,0-9.5\r
	c-3.56,0-7.12,0-10.69,0c0,3.17,0,6.33,0,9.5c-1.58,0-3.17,0-4.75,0c0-3.17,0-6.33,0-9.5c-2.77,0-5.54,0-8.31,0\r
	C240.85,297.43,240.46,300.2,240.06,302.97z"/>\r
<path class="colorful_chaos-st" d="M265,312.47c0,1.58,0,3.17,0,4.75c1.98,0,3.96,0,5.94,0c0-1.58,0-3.17,0-4.75\r
	C268.96,312.47,266.98,312.47,265,312.47z"/>\r
<path class="colorful_chaos-st" d="M300.62,319.59c-1.45-0.29-4.3-1.1-5.94-3.56c-0.92-1.38-1.1-2.75-1.19-3.56c-0.7-6.39-0.09-18.4,0-20.19\r
	c3.96,0,7.92,0,11.88,0c0,0.79,0,1.58,0,2.38c4.76-1.29,8.84-1.98,11.88-2.38c12.62-1.65,16.7,0.53,17.81,1.19\r
	c1,0.59,3.33,1.99,4.75,4.75c0.98,1.9,1.11,3.62,1.19,4.75c0.39,6,0.16,12.24,0,15.44c-1.98,0-3.96,0-5.94,0\r
	c1.26,1.09,3.23,2.52,5.94,3.56c1.8,0.69,3.44,1.03,4.75,1.19c-1.58,3.56-3.17,7.12-4.75,10.69c-1.66-0.44-3.73-1.15-5.94-2.38\r
	c-1.4-0.78-2.59-1.6-3.56-2.38c0,3.56,0,7.12,0,10.69c-4.35-0.4-8.71-0.79-13.06-1.19c0.79-4.35,1.58-8.71,2.38-13.06\r
	c1.58-0.4,3.17-0.79,4.75-1.19c-0.2-0.48-1.17-2.61-3.56-3.56c-2.12-0.85-4.02-0.24-4.75,0c-1.9,0.61-3.06,1.8-3.56,2.38\r
	c1.58,1.19,3.17,2.38,4.75,3.56c-3.56,4.75-7.12,9.5-10.69,14.25c-2.77-1.98-5.54-3.96-8.31-5.94c1.19-1.98,2.38-3.96,3.56-5.94\r
	c-2.77,1.19-5.54,2.38-8.31,3.56c-1.19-2.38-2.38-4.75-3.56-7.12C294.29,323.55,297.46,321.57,300.62,319.59z"/>\r
<path class="colorful_chaos-st" d="M304.19,298.22c0,1.58,0,3.17,0,4.75c2.77,0,5.54,0,8.31,0c0-0.4,0-0.79,0-1.19c-2.77,0-5.54,0-8.31,0"/>\r
<path class="colorful_chaos-st" d="M304.19,311.28c2.77,0,5.54,0,8.31,0c0,0.4,0,0.79,0,1.19c-2.77,0-5.54,0-8.31,0"/>\r
<path class="colorful_chaos-st" d="M330.31,301.78c-2.77,0-5.54,0-8.31,0c0-0.4,0-0.79,0-1.19c2.77,0,5.54,0,8.31,0c0,3.96,0,7.92,0,11.88\r
	c-2.77,0-5.54,0-8.31,0c0-0.4,0-0.79,0-1.19c2.77,0,5.54,0,8.31,0"/>\r
<path class="colorful_chaos-st" d="M130.81,281.59c-2.72-7.75,1.91-16.55,8.31-20.19c10.56-5.99,26.97,1.49,28.5,11.88\r
	c1.08,7.35-5.43,15.23-13.06,17.81C145.89,294.03,134.02,290.72,130.81,281.59z"/>\r
</svg>\r
`,Nc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.dagoujiao-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="dagoujiao-st" d="M169.5,203.5c-3.61-0.58-8.75-2.03-13-6c-11.97-11.18-6.41-32.59-5-38c3.8-14.64,11.95-23.38,24-36\r
	c15.4-16.12,33.16-34.73,57-34c6.5,0.2,11.74,1.78,15,3c3.45-1.57,8.6-3.45,15-4c23.69-2.03,42.01,16.13,56,30\r
	c12.27,12.16,29.49,29.23,30,52c0.12,5.32,0.39,17.5-8,24c-4.15,3.21-8.93,3.89-12,4"/>\r
<path class="dagoujiao-st" d="M174.5,123.5c0.45-7.32,2.86-31.3,22-50c8.11-7.92,16.69-12.42,23-15c4.37-3.45,16.41-12.02,34-13\r
	c22.67-1.27,38.34,10.97,42,14c8.76,3.17,20.29,8.79,31,19c31.1,29.66,28.55,72.62,28,80c4.39,9.29,9.89,23.66,12,42\r
	c2.08,18.02,0.1,33.03-2,43c1.88,8.17,3.2,14.8,4,19c6.42,33.69,8.27,62.07,10,90c1.02,16.5,0.59,14.74,1,17\r
	c5.63,31.04,28.35,45.75,22,62c-0.47,1.2-1.33,3.01-3,5c0.66,2.68,1.01,6.19,0,10c-1.13,4.29-4.53,11-9,11c-1.21,0-2.24-0.49-3-1\r
	c-0.92,2.79-2.3,3.67-3,4c-4.17,1.93-10.36-3.81-13-7c-2.22-2.69-3.39-5.34-4-7c0.17,2.75-0.4,3.69-1,4c-2.41,1.25-9.26-5.45-13-13\r
	c-2.09-4.22-2.78-7.83-3-9c-4.33-23.52,1.48-32.65-4-49c-2.44-7.27-5.51-11.21-5-19c0.35-5.34,2.04-7.24,3-13\r
	c1.14-6.83,0.16-12.56-2-21c-5.51-21.52-15.38-47.72-17-52"/>\r
<path class="dagoujiao-st" d="M334.5,266.5c-6.22,6.33-15.42,14.26-28,21c-8.06,4.31-15.62,7.13-22,9"/>\r
<path class="dagoujiao-st" d="M300.5,238.5c-1.58,4.2-3.88,10.76-6,19c-4.42,17.14-2.65,20.43-7,32c-4.18,11.13-6.89,10.94-10,22\r
	c-2.35,8.35-1.3,10.2-4,18c-2.3,6.64-4.65,13.42-11,19c-9.74,8.56-21.8,8.07-23,8c-11.18-0.63-19.52-7.1-24-13\r
	c-4.41-5.81-5.87-12.11-7-17c-1.77-7.65-0.75-10.53-3-18c-1.98-6.57-3.5-6.74-6-13c-4.7-11.76-1.71-17.07-5-34\r
	c-0.73-3.77-1.94-8.94-4-15"/>\r
<path class="dagoujiao-st" d="M171.5,220.5c0.18,6.28,1.49,20.02,11,33c3.98,5.44,8.36,9.32,12,12"/>\r
<path class="dagoujiao-st" d="M180.5,250.5c-9.1,10.15-13.59,19.49-16,26c-6.6,17.85-2.2,26.99-11,48c-3.71,8.85-5.01,8.48-8,17\r
	c-4.07,11.61-3.82,18.51-10,28c-0.2,0.3-2.68,4.06-7,8c-1.68,1.54-8.45,7.68-11,6c-0.55-0.36-1.03-1.17-1-3\r
	c-4.32,3.64-8.38,5.23-11,6c-2.96,0.87-7.05,2.06-9,0c-1.06-1.12-1.12-2.81-1-4c-0.82,0.29-2.49,0.74-4,0c-1.92-0.94-2.41-3.23-3-6\r
	c-0.34-1.61-0.92-4.45,0-8c0.74-2.86,2.11-4.88,3-6c-1.69,0.59-2.54,0.38-3,0c-2.3-1.9,1.16-11.46,7-18c4.57-5.13,9.66-7.36,11-8\r
	c17.02-8.15,23.74-49.17,29-74c3.45-16.27,9.16-39.27,19-67"/>\r
<path class="dagoujiao-st" d="M184.5,144.5c1.15-0.75,2.74-2.02,4-4c1.29-2.03,1.34-3.41,2-5c1.58-3.83,5.55-6.3,8-7\r
	c5.38-1.55,12.89,2.7,17,11c-1.41,1.33-3.74,3.29-7,5c-3.77,1.98-8.68,4.56-14,3c-1.31-0.38-4.25-1.49-7-5"/>\r
<path class="dagoujiao-st" d="M311,144.43c-1.22-0.75-2.91-2.02-4.26-4c-1.37-2.03-1.43-3.41-2.13-5c-1.68-3.83-5.91-6.3-8.52-7\r
	c-5.72-1.55-13.72,2.7-18.1,11c1.5,1.33,3.98,3.29,7.45,5c4.01,1.98,9.24,4.56,14.9,3c1.4-0.38,4.53-1.49,7.45-5"/>\r
<path class="dagoujiao-st" d="M224.5,168.5c0.58-3.11,3.27-5.2,6-5c2.81,0.21,4.9,2.79,5,5c0.17,3.62-4.98,6.51-9,7c-4.14,0.5-9.09-1.3-11-5\r
	c-3.04-5.9,3.19-13.68,7-17c6.1-5.31,13.45-5.7,19-6c4.09-0.22,10.78-0.5,18,3c1.01,0.49,15.7,7.79,14,16c-0.92,4.44-6.29,7.6-11,8\r
	c-4.15,0.35-10.25-1.24-11-5c-0.55-2.78,1.76-6.98,5-7c2.02-0.01,4.02,1.6,5,4"/>\r
<path class="dagoujiao-st" d="M217.5,173.5c0.49,2.26,1.53,5.65,4,9c7.25,9.84,19.93,10.01,22,10c10.73-0.04,17.93-6.1,20-8\r
	c6.13-5.61,8.26-12.2,9-15"/>\r
<path class="dagoujiao-st" d="M243.5,174.5c0,9,0,18,0,27"/>\r
<path class="dagoujiao-st" d="M243.5,202.5c-10.24,0.41-18.08,2.96-23,5c-7.13,2.96-15.1,6.27-19,14c-2.44,4.84-2.21,9.3-2,14\r
	c2,44.4-0.46,46.23,4,57c2.93,7.09,5.47,9.88,8,19c3.05,11.01,1.07,13.17,4,19c4.3,8.57,14.9,16.55,27,16\r
	c9.06-0.41,16.68-5.51,21-11c4.18-5.31,3.52-8.74,9-25c2.44-7.23,3.19-8.39,6-16c7.55-20.44,14.49-39.78,13-62\r
	c-0.74-11.04-3.02-14.78-5-17c-2.95-3.32-6.85-5.07-24-9C254.77,204.73,248.25,203.41,243.5,202.5z"/>\r
<path class="dagoujiao-st" d="M209.37,212.5c-1.17,8.32,0.59,14.48,3.01,15c2.33,0.5,6.19-4.02,8.7-11c-0.42,6.95,1.87,11.73,4.28,12\r
	c2.08,0.23,4.69-2.87,6.41-7c0.27,3.07,2.63,5.56,5.65,6c2.97,0.43,5.9-1.21,7.08-4c2.12,3.54,6.23,5.14,9.71,4\r
	c4.09-1.33,5.23-5.74,5.29-6c0.41,4.24,2.04,7.69,4,8c2.29,0.36,5.81-3.43,7-10c1.19,3.45,3.51,9.13,6,9c3.83-0.21,5.75-14.11,6-16"\r
	/>\r
<path class="dagoujiao-st" d="M325.5,156.5c2.5,6.34,5.49,16.47,5,29c-0.95,24.24-14.28,40.68-19,46"/>\r
<path class="dagoujiao-st" d="M175.5,160.5c-2.22,3.35-9.59,15.36-8,32c1.6,16.72,11.19,27.15,14,30"/>\r
<path class="dagoujiao-st" d="M216.5,315.5c0.74-0.74,1.94-1.15,3-1c1.74,0.25,2.69,1.94,5,6c0.7,1.24,2.08,3.65,4,7c1.66-0.04,4.15,0.1,7,1\r
	c2.67,0.85,4.69,2.06,6,3c1.02-0.89,2.68-2.12,5-3c2.94-1.11,5.53-1.11,7-1c2.2-2.94,3.88-5.35,5-7c2.07-3.04,3.11-4.77,5-5\r
	c1.02-0.12,2.23,0.2,3,1c1.73,1.81,0.53,5.42,0,7c-1.96,5.86-10.86,17.86-25,18c-10.19,0.1-19.04-6-23-13\r
	C216.55,325.06,213.91,318.09,216.5,315.5z"/>\r
<path class="dagoujiao-st" d="M222.5,232.5c-0.63,3.46-1.51,9.05-2,16c-1.05,14.98-1.87,26.73,4,38c1.23,2.37,0.78,0.9,8,12\r
	c8.04,12.35,8.29,13.68,10,14c7.94,1.5,22.7-23.15,26-49c1.53-11.96,0.34-22.09-1-29"/>\r
<path class="dagoujiao-st" d="M220.5,255.5c1.6-5.62,6.45-9.62,12-10c7.41-0.51,11.81,5.72,12,6c0.98-1.28,3.93-4.78,9-6\r
	c8.79-2.12,15.6,4.59,16,5"/>\r
<path class="dagoujiao-st" d="M244.5,251.5c0,7.33,0,14.67,0,22"/>\r
<path class="dagoujiao-st" d="M214.5,149.5c-7.04,5.44-11.88,10.94-15,15c-4.97,6.46-11.36,14.77-13,27c-0.96,7.13,0.04,13.13,1,17"/>\r
<path class="dagoujiao-st" d="M278.5,148.5c4.64,2.67,10.74,7.05,16,14c13.9,18.37,10.84,39.99,10,45"/>\r
</svg>\r
`,Pc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.danzai-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="danzai-st" d="M123.36,258.1c4.9-0.41,9.8-0.82,14.71-1.23c0.52-0.13,2.36-0.64,3.68-2.45c0.68-0.93,0.98-1.89,1.12-2.62\r
	c0.11-0.57-0.25-1.12-0.81-1.27c-1.06-0.3-2.58-0.92-3.98-2.24c-0.99-0.93-1.62-1.91-2.03-2.71c-0.29-0.58-0.91-0.91-1.55-0.83\r
	c-2.89,0.36-5.79,0.72-8.68,1.08c-0.67,0-1.23-0.55-1.23-1.23s0.55-1.23,1.23-1.23c3.29-0.37,6.59-0.73,9.88-1.1\r
	c0.68-0.08,1.34,0.24,1.73,0.81c1.12,1.63,3.77,4.74,8,5.19c6.33,0.69,10.41-5.2,11.03-6.13c1.49-2.25,1.9-4.44,2.45-7.35\r
	c0.7-3.72,0.24-5.41,0-6.13c-0.29-0.89-0.85-2.49-2.45-3.68c-2.02-1.5-4.29-1.3-4.9-1.23c-22.88,2.86-45.75,5.72-68.63,8.58\r
	c-0.94,0.12-2.29,0.42-3.68,1.23c-3.9,2.27-7.31,8.1-4.9,12.26c1.51,2.6,4.95,3.94,8.58,3.68L107.6,246\r
	c0.54-0.08,1.02,0.37,0.98,0.92c-0.33,4.63-0.66,9.26-0.99,13.89c-0.06,0.86-1.11,1.25-1.72,0.64c-1.35-1.35-2.7-2.7-4.06-4.06\r
	c-0.3-0.3-0.52-0.69-0.61-1.11c-0.25-1.26-1.06-4.01-3.58-5.52c-3.23-1.94-7.97-1.07-11.03,2.45c-3.68,3.68-7.35,7.35-11.03,11.03\r
	c-2.8,3.02-3.15,7.21-1.23,9.8c2.32,3.12,6.93,2.51,7.35,2.45c2.56-0.38,4.24-1.82,4.9-2.45l2.82-2.82\r
	c0.49-0.49,1.27-0.55,1.82-0.13l3.1,2.32c0.54,0.4,1.21,0.57,1.87,0.48c2.15-0.31,4.3-0.61,6.45-0.92c0.64-0.09,1.15-0.57,1.29-1.2\r
	c0.36-1.66,1.25-4.23,3.49-6.31c3.92-3.62,11-4.79,14.71-1.23c1.52,1.46,2.1,3.38,2.33,4.85c0.11,0.71,0.75,1.21,1.47,1.13\r
	c4.85-0.52,21.01-2.32,25.62-3.53c0.36-0.09,1.41-0.39,2.45-1.23c0.14-0.11,3.34-2.77,2.45-6.13c-0.44-1.67-1.87-3.37-3.68-3.68\r
	c-0.5-0.09-0.93-0.05-1.23,0c-4.49,0.41-8.99,0.82-13.48,1.23"/>\r
<path class="danzai-st" d="M105.06,274.18c0.65-0.08,1.17-0.59,1.28-1.24c0.27-1.56,1.08-4.29,3.54-6.26c2.24-1.79,6.67-3.61,9.8-1.23\r
	c1.67,1.27,2.55,3.41,2.58,5.72c0.01,0.86,0.71,1.54,1.57,1.44c6.79-0.75,13.58-1.51,20.37-2.26c0.93-0.03,4.35-0.03,7.35,2.45\r
	c2.46,2.03,3.41,4.69,3.68,6.13c1.01,5.34-3.82,12.11-12.26,15.93c-7.35,0.82-14.71,1.63-22.06,2.45c-0.67,0-1.23,0.55-1.23,1.23\r
	c0,0.67,0.55,1.23,1.23,1.23c7.03-0.78,14.06-1.56,21.09-2.34c0.63-0.07,1.21-0.35,1.7-0.75c2.85-2.29,6.3-3,9.07-1.81\r
	c0.14,0.06,2.79,1.24,3.68,3.68c1.35,3.72-1.81,9.28-8.24,13.69c-0.94,0.65-2.03,1.06-3.17,1.19c-25.2,2.8-50.4,5.6-75.6,8.4\r
	c-0.31,0.06-0.75,0.11-1.23,0c-2.36-0.53-3.87-4.31-3.68-7.35c0.28-4.32,3.96-6.82,4.9-7.35c1.56-0.88,3.3-1.17,3.3-1.17\r
	c0.16-0.03,0.29-0.04,0.37-0.06c9.8-1.23,19.61-2.45,29.41-3.68c0.69-0.28,1.24-0.77,1.23-1.23c-0.02-0.6-0.99-1.32-2.45-1.23\r
	c-7.35,0.82-14.71,1.63-22.06,2.45c-0.31,0.04-0.73,0.06-1.23,0c-3.75-0.48-6.98-5.47-7.35-9.8c-0.59-6.81,5.79-12.54,11.03-14.71\r
	c1.91-0.79,3.64-1.1,4.9-1.23C92.75,275.72,98.9,274.95,105.06,274.18z"/>\r
<path class="danzai-st" d="M82.92,288.74c-0.67,0-1.23,0.55-1.23,1.23c0,0.67,0.55,1.23,1.23,1.23c6.94-0.82,13.89-1.63,20.83-2.45\r
	c0.67,0,1.23-0.55,1.23-1.23s-0.55-1.23-1.23-1.23C96.81,287.11,89.86,287.93,82.92,288.74z"/>\r
<path class="danzai-st" d="M122.14,283.84c-0.67,0-1.23,0.55-1.23,1.23c0,0.67,0.55,1.23,1.23,1.23c6.94-0.82,13.89-1.63,20.83-2.45\r
	c0.67,0,1.23-0.55,1.23-1.23c0-0.67-0.55-1.23-1.23-1.23C136.03,282.21,129.08,283.02,122.14,283.84z"/>\r
<path class="danzai-st" d="M164.02,275.17c0.57,0.08,0.96,0.59,0.92,1.16c-0.79,9.04-1.57,18.08-2.36,27.12c-0.13,0.64-0.21,1.5,0,2.45\r
	c0.77,3.5,4.96,5.91,8.58,6.13c5.33,0.33,9.37-4.1,11.03-7.35c0.74-1.44,1.07-2.77,1.23-3.68c1.6-18.39,3.2-36.77,4.8-55.16\r
	c0.07-0.8,0.31-1.58,0.69-2.29c2.26-4.14,4.51-8.27,6.77-12.41c0.48-0.79,1.1-2.05,1.23-3.68c0.29-3.68-2.11-7.16-4.9-8.58\r
	c-4.1-2.09-10.16-0.32-13.48,4.9c-6.54,11.85-13.07,23.69-19.61,35.54c-0.35,0.55-0.82,1.38-1.23,2.45c-0.6,1.57-2.38,6.2,0,9.8\r
	C159.39,274.18,162.41,274.94,164.02,275.17z"/>\r
<path class="danzai-st" d="M224.07,233.89c0.4-0.6-0.09-1.4-0.8-1.31c-6.34,0.75-12.68,1.49-19.01,2.24c-0.32,0.04-0.74,0.06-1.23,0\r
	c-3.06-0.41-5.87-3.93-6.13-7.35c-0.44-5.79,6.59-9.42,7.35-9.8c1.44-0.72,2.76-1.06,3.68-1.23c11.44-1.63,22.88-3.27,34.32-4.9\r
	c3.59-0.36,6.99,1.04,8.58,3.68c1.96,3.26,0.49,7.26,0,8.58c-0.39,1.05-0.86,1.88-1.23,2.45c-5.72,8.17-11.44,16.34-17.16,24.51\r
	c-0.62,0.86-2.19,2.79-4.9,3.68c-2.8,0.91-7.47,0.94-9.8-2.45c-1.65-2.4-1.61-5.76,0-8.58L224.07,233.89z"/>\r
<path class="danzai-st" d="M217.73,251.98c-6.54,0.82-13.07,1.63-19.61,2.45c-0.94,0.15-2.27,0.46-3.68,1.23c-3.32,1.8-6.16,5.55-6.13,9.8\r
	c0.01,1.07,0.03,4.27,2.45,6.13c1.36,1.04,2.89,1.2,3.68,1.23c5.57-0.4,11.14-0.8,16.71-1.19c0.23-0.02,0.43,0.18,0.41,0.41\r
	c-0.4,5.16-0.79,10.33-1.19,15.49"/>\r
<path class="danzai-st" d="M215.28,289.97c-0.4-0.74-1.15-1.84-2.45-2.45c-1.25-0.58-2.43-0.44-4.9,0c-3.64,0.65-5.47,0.97-6.13,1.23\r
	c-4.47,1.72-9.73,7.18-8.58,12.26c0.63,2.77,3.26,5.76,6.13,6.13c0.49,0.06,0.86,0.03,1.23,0c7.43-0.66,16.95-2.14,19.34-2.42\r
	c0.05-0.01,0.14-0.02,0.27-0.03c0,0,1.87-0.26,3.68-1.23c3.29-1.76,4.9-4.9,4.9-4.9c1-1.95,1.2-3.78,1.23-4.9\r
	c0.39-7.73,0.77-15.46,1.16-23.19c0.04-0.76,0.62-1.38,1.38-1.47c3.24-0.36,6.48-0.72,9.72-1.08c0.94-0.15,2.27-0.46,3.68-1.23\r
	c3.3-1.79,6.17-5.53,6.13-9.8c-0.01-1.17-0.04-4.26-2.45-6.13c-1.93-1.49-4.22-1.31-4.9-1.23c-4.09,0.41-8.17,0.82-12.26,1.23"/>\r
<path class="danzai-st" d="M259.4,238.49c-0.55-2.11-1.43-2.51-2.45-4.9c0,0-1.02-2.4-1.23-4.9c-0.47-5.76,5.77-14.05,12.26-13.48\r
	c2.53,0.22,4.84,1.77,6.13,3.68c2.89,4.26,0.48,9.97,0,11.03c-1.2,2.65-2.28,2.7-3.68,6.13c-0.82,2.02-1.6,3.91-1.23,6.13\r
	c0.51,3.04,2.59,3.18,3.68,6.13c1.87,5.08-2.13,10.6-2.45,11.03c-1.07,1.43-3.32,4.45-7.35,4.9c-3.15,0.35-6.74-0.93-8.58-3.68\r
	c-2.52-3.77-1.04-9.27,1.23-12.26c1.43-1.89,2.95-2.46,3.68-4.9C260.06,241.15,259.54,239.05,259.4,238.49z"/>\r
<path class="danzai-st" d="M247.14,292.42c-0.33-2.67,0.83-4.65,2.45-7.35c1.89-3.13,5.22-8.67,11.03-9.8c2.01-0.39,3.39-0.07,3.68,0\r
	c2.97,0.73,5.42,3.3,6.13,6.13c0.72,2.86-0.55,5.15-2.45,8.58c-2.44,4.39-4.95,8.91-9.8,9.8c-0.34,0.06-5.23,0.88-8.58-2.45\r
	C249.1,296.83,247.47,295.09,247.14,292.42z"/>\r
<path class="danzai-st" d="M277.78,218.89c0.24-1.84,0.79-5.63,3.68-8.58c2.43-2.48,5.49-3.33,7.35-3.68c12.97-1.57,25.95-3.15,38.92-4.72\r
	c1-0.12,1.97-0.46,2.82-1c2.51-1.57,5.03-3.14,7.54-4.71c0.83-0.52,1.76-0.84,2.74-0.92c0.88-0.07,1.96-0.02,3.13,0.32\r
	c0.3,0.09,3.66,1.11,4.9,3.68c1.49,3.09-0.25,7.99-4.9,11.03l-9.12,6.08c-1.25,0.84-2.69,1.36-4.19,1.53l-30.81,3.42\r
	c-1.2,0.13-3.63,0.58-4.9,2.45c-0.75,1.1-0.91,2.41-1.23,4.9c-0.19,1.54-0.22,2.69-0.22,2.72c-0.06,2.38-1.38,18.83-4.68,57.34\r
	c-0.15,0.9-0.46,2.23-1.23,3.68c-0.37,0.7-3.39,6.39-8.58,6.13c-3.56-0.18-6.96-3.1-7.35-6.13c-0.06-0.5-0.04-0.92,0-1.23\r
	C274.36,253.81,276.83,226.34,277.78,218.89z"/>\r
<path class="danzai-st" d="M310.87,277.71c0.79-12.17,1.57-24.34,2.36-36.51c0.06-0.86,0.72-1.55,1.57-1.65\r
	c6.37-0.71,12.73-1.41,19.1-2.12c1.17-0.13,2.31-0.42,3.4-0.87c2.01-0.83,4.39-2.13,6.66-4.2c1.73-1.57,3.08-2.83,3.68-4.9\r
	c0.86-2.98,0.24-7.84-3.68-9.8c-2.96-1.48-6.74-0.78-9.22,1.78c-0.45,0.46-1.07,0.73-1.71,0.8c-10.25,1.18-20.49,2.36-30.74,3.55\r
	c-0.52,0.13-2.36,0.64-3.68,2.45c-1.11,1.52-1.22,3.1-1.23,3.68c-1.61,19.38-3.23,38.76-4.84,58.14c-0.05,0.57-0.02,1.15,0.1,1.71\r
	c0.16,0.76,0.47,1.7,1.07,2.66c0.72,1.16,1.64,1.98,2.49,2.54c1.18,0.78,2.6,1.11,4.01,0.97c3.09-0.31,6.19-0.62,9.28-0.93\r
	c1.01-0.1,2-0.41,2.87-0.94c4.15-2.52,6.43-6.56,5.86-10.23c-0.04-0.26-0.89-5.22-4.9-6.13c-2.68-0.61-5.72,0.84-7.35,3.68"/>\r
<path class="danzai-st" d="M315.81,274.24c-0.02,0.62,0.25,1.21,0.73,1.61c1.23,1.04,3.35,3.25,4.13,6.76c0.75,3.37-0.12,6.17-0.77,7.64\r
	c-0.26,0.59-0.04,1.26,0.51,1.6c1.19,0.74,2.95,1.58,5.16,1.78c6,0.56,10.17-3.96,11.03-4.9c0.88-0.95,3.16-3.51,3.68-7.35\r
	c0.37-2.76-0.34-4.91-1.23-7.35c-1.22-3.37-2.94-7.77-5.31-12.95c-0.38-0.82,0.22-1.75,1.12-1.75h1.74\r
	c0.99,0.05,2.62,0.01,4.45-0.66c0.85-0.31,3.65-1.39,5.35-4.24c1.35-2.26,2.64-6.69,0-9.8c-2.6-3.08-7.01-2.5-7.35-2.45\r
	c-3.42,0.38-6.84,0.76-10.26,1.14c-0.42,0.05-0.85-0.15-1.04-0.52c-1.11-2.14-3.46-3.39-5.86-3.07c-2.52,0.34-4.54,2.35-4.9,4.9\r
	C316.6,254.5,316.21,264.37,315.81,274.24z"/>\r
<path class="danzai-st" d="M340.28,281.39c-0.41,3.54,1.02,6.94,3.68,8.58c3.67,2.26,9.35,0.96,12.26-3.68c4.14-6.4,8.28-12.8,12.42-19.2\r
	c0.51-0.79,1.66-0.83,2.23-0.08l9.86,13.15c3.86,5.15,6.93,4.92,8.58,4.9c3.33-0.04,7.18-2.23,8.58-6.13\r
	c1.57-4.4-0.96-8.19-1.23-8.58c-5.09-6.65-10.17-13.3-15.26-19.95c-0.41-0.53-0.44-1.25-0.09-1.82c3.72-5.95,7.44-11.91,11.16-17.86\r
	c0.29-0.46,0.23-1.06-0.15-1.45c-1.11-1.17-2.94-3.53-3.02-6.71c-0.11-4.51,3.36-8.98,8.71-10.72c0.66-0.22,1.1-0.85,1.1-1.55v-8.57\r
	c0.08-1.56,0.05-5.37-2.45-7.35c-1.69-1.34-3.78-1.28-4.9-1.23c-8.87,0.44-31.81,4.67-33.09,4.9c-0.64,0.2-1.53,0.56-2.45,1.23\r
	c-2.58,1.87-4.11,5.27-3.68,8.58c0.13,1.04,0.43,3.34,2.45,4.9c2.01,1.56,4.36,1.3,4.9,1.23c7.73-1.05,15.47-2.11,23.2-3.16\r
	c1.47-0.2,2.5,1.42,1.69,2.67c-4.62,7.11-9.24,14.22-13.86,21.33c-1.69-2.99-3.58-4.95-4.9-6.13c-1.4-1.25-2.27-2.01-3.68-2.45\r
	c-3.28-1.03-6.37,0.62-7.35,1.23c-2.86,1.75-5.13,5.14-4.9,8.58c0.11,1.64,0.75,2.82,1.23,3.68c1.39,2.48,3.76,6.3,7.64,11.1\r
	c0.55,0.68,0.6,1.65,0.1,2.37c-6.25,8.99-12.51,17.98-18.76,26.97"/>\r
<path class="danzai-st" d="M408.92,262.64v0.84c0,0.46-0.28,0.86-0.7,1.04c-5.43,2.37-9.05,6.48-9.11,10.74\r
	c-0.01,0.48-0.07,4.17,2.45,6.13c1.91,1.48,4.2,1.31,4.9,1.23c4.56-0.38,9.12-0.76,13.68-1.14c1.06-0.09,2.1-0.32,3.08-0.74\r
	c0.89-0.38,1.88-0.95,2.85-1.8c3.12-2.75,3.59-6.42,3.68-7.35c1.19-15.13,2.39-30.26,3.58-45.4c0.05-0.64,0.56-1.15,1.2-1.19\r
	c1.51-0.1,4.01-0.56,6.25-2.43c0.3-0.25,4.28-3.71,3.68-8.58c-0.11-0.87-0.4-3.25-2.45-4.9c-2-1.61-4.38-1.51-5.51-1.34\r
	c-0.33,0.05-0.61-0.21-0.61-0.54v-10.37c0.04-0.88,0.01-2.9-1.23-4.9c-1.6-2.58-4.14-3.42-4.9-3.68\r
	c-5.18-1.72-11.82,1.16-14.55,6.15c-1.03,1.89-1.31,3.71-1.38,4.88v9.88c0,0.66-0.48,1.22-1.13,1.32c-4.93,0.76-9.86,1.52-14.8,2.28\r
	c-1.68,0.26-7.89,4.83-7.35,9.8c0.26,2.43,2.25,5.7,4.9,6.13c0.49,0.08,0.92,0.05,1.23,0c4.49-0.41,8.99-0.82,13.48-1.23\r
	c2.03-0.18,2.97,0.52,3.68,1.23c1.2,1.2,1.25,2.93,1.23,3.68c5.55,3.04,8.92,8.8,8.58,14.71c-0.42,7.1-6.15,13.32-13.85,14.59\r
	C409.28,261.74,408.92,262.15,408.92,262.64z"/>\r
<path class="danzai-st" d="M407.87,232.22c0.44,0.05,0.82-0.33,0.77-0.77c-0.12-1.11,0.45-2.23,1.5-2.76c1.34-0.67,3-0.12,3.68,1.23\r
	c0.54,1.08,0.29,2.35-0.52,3.17c-0.28,0.28-0.23,0.73,0.12,0.91c5.84,3.04,8.99,9.46,7.75,15.53c-1.52,7.45-9.11,11.72-15.93,11.03\r
	c-7.59-0.77-14.5-7.71-13.48-15.93C392.69,237.1,399.9,231.39,407.87,232.22z"/>\r
<path class="danzai-st" d="M404.24,238.51c-0.26,0.79-0.53,1.58-0.79,2.37"/>\r
<path class="danzai-st" d="M411.59,239.4c-0.26,0.79-0.53,1.58-0.79,2.37"/>\r
</svg>\r
`,Fc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.demon_slayer-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="demon_slayer-st" d="M333.01,399.77c1.09,0.34,1.85,0.57,2.61,0.8c0.34,0.11,0.76,0.15,0.75,0.63c0,0.38-0.35,0.48-0.63,0.65\r
	c-0.98,0.6-2.12,0.71-3.17,1.05c-6.06,1.93-12.23,2.86-18.63,2.2c-2.44-0.25-4.91-0.63-7.4-0.1c-1.74,0.37-3.21,1.35-4.91,1.81\r
	c-2.86,0.79-5.75,1.25-8.69,1.55c-5.52,0.57-11.01-0.15-16.51-0.37c-3.47-0.14-6.91-0.86-10.4-0.6c-3.66,0.27-7.34,0.49-10.54,2.63\r
	c-0.67,0.45-1.3,0.19-1.89-0.23c-1.44-1.01-2.88-2.02-4.31-3.04c-0.55-0.39-1.06-0.49-1.77-0.29c-3.01,0.81-6.13,0.99-9.21,1.42\r
	c-0.43,0.06-1.08,0.21-1.23-0.4c-0.14-0.56,0.53-0.59,0.84-0.86c0.62-0.54,1.48-0.59,2.14-1.05c0.15-0.11,0.34-0.26,0.38-0.42\r
	c0.05-0.24-0.19-0.32-0.39-0.35c-2.9-0.35-5.81-0.56-8.71,0.01c-2.26,0.45-3.45,2.2-4.57,3.96c-0.99,1.56-2.17,2.83-3.93,3.54\r
	c-0.57,0.23-1.13,0.34-1.73,0.39c-4.22,0.4-8.13-0.82-11.99-2.28c-1.63-0.61-3.28-1.21-4.92-1.81c-0.37-0.13-0.87-0.19-0.74-0.74\r
	c0.12-0.5,0.6-0.45,0.99-0.47c0.24-0.01,0.5-0.02,0.71,0.06c2.64,0.98,5.38,0.57,8.08,0.63c0.47,0.01,1.01,0.05,1.23-0.51\r
	c0.24-0.63-0.24-0.98-0.62-1.3c-1.33-1.13-2.92-1.8-4.51-2.41c-3.08-1.18-6.19-2.3-9.35-3.28c-1.63-0.51-3.27-1.01-4.9-1.53\r
	c-0.34-0.11-0.75-0.15-0.79-0.61c-0.04-0.47,0.35-0.55,0.68-0.7c1.08-0.52,2.19-0.96,3.33-1.32c0.32-0.1,0.72-0.12,0.87-0.59\r
	c-1.56-1.09-3.38-1.03-5.15-1.16c-1.27-0.09-2.56,0-3.82-0.28c-0.45-0.1-1.1-0.09-1.09-0.7c0.01-0.6,0.65-0.45,1.05-0.52\r
	c0.59-0.1,1.2-0.13,1.78-0.25c1.36-0.29,1.67-1.2,0.77-2.23c-1.09-1.26-2.49-2.14-3.84-3.05c-3.54-2.4-7.12-4.73-10.35-7.55\r
	c-0.05-0.04-0.15-0.03-0.46-0.07c0,0.72,0.02,1.42-0.01,2.12c-0.01,0.31-0.02,0.69-0.43,0.76c-0.36,0.06-0.43-0.28-0.57-0.51\r
	c-0.78-1.26-0.99-2.75-1.67-4.07c-1.88-3.62-4.22-6.96-6.26-10.48c-0.44-0.76-0.84-1.54-1.32-2.27c-0.21-0.32-0.51-0.67-0.98-0.55\r
	c-0.45,0.11-0.58,0.53-0.67,0.92c-0.32,1.42-0.3,2.86-0.31,4.3c0,0.45,0.18,1.07-0.42,1.24c-0.58,0.17-0.85-0.44-1.05-0.81\r
	c-0.81-1.47-1.52-2.98-2.3-4.47c-1.33-2.52-2.82-4.92-4.99-6.83c-1.02-0.9-2.1-1.71-3.42-2.14c-0.31-0.1-0.66-0.18-0.64-0.59\r
	c0.02-0.38,0.37-0.49,0.68-0.57c1.24-0.34,2.49-0.57,3.76-0.72c0.26-0.03,0.63-0.01,0.69-0.35c0.06-0.33-0.28-0.46-0.51-0.6\r
	c-1.89-1.18-3.5-2.63-4.76-4.48c-0.75-1.1-1.19-2.34-1.77-3.52c-0.9-1.83-2.19-3.31-3.73-4.61c-0.8-0.68-1.13-0.29-1.18,0.56\r
	c-0.06,1.16-0.09,2.32-0.33,3.46c-0.12,0.53-0.17,1.23-0.9,1.22c-0.8-0.01-0.62-0.75-0.75-1.27c-1.13-4.45-0.34-9.09-1.37-13.56\r
	c-0.21-0.9-0.65-1.63-1.11-2.35c-1.95-3.07-3.96-6.09-5.95-9.14c-0.22-0.33-0.4-0.69-0.55-1.05c-0.14-0.34-0.7-0.61-0.34-1.04\r
	c0.29-0.34,0.76-0.11,1.15-0.09c1.2,0.07,2.4,0.26,3.59,0.21c2.09-0.08,3.78,0.57,5.27,2.05c4.17,4.14,8.56,8.05,13.17,11.68\r
	c3.51,2.76,7.17,5.35,10.77,8.01c3.62,2.68,7.46,5.05,11.2,7.54c4.02,2.68,7.94,5.52,11.91,8.28c5.98,4.16,12.26,7.83,18.79,11.05\r
	c5.67,2.8,11.5,5.23,17.5,7.21c6.68,2.21,13.49,3.94,20.42,5.25c10.39,1.96,20.86,2.5,31.39,2.21c3.39-0.09,6.8,0.04,10.18-0.4\r
	c3.16-0.42,6.15-1.51,7.95-4.16c1.14-1.68,2.34-1.84,4.04-1.83c6.09,0.02,11.86-1.55,17.49-3.71c1.86-0.71,3.68-1.54,5.51-2.34\r
	c0.62-0.27,1.06-0.28,1.31,0.47c0.19,0.58,0.63,1.01,1.07,1.42c1.42,1.32,2.71,1.35,4.12,0.01c1.99-1.91,3.91-3.89,5.63-6.05\r
	c0.5-0.62,1.07-1.18,1.63-1.75c0.41-0.42,0.85-0.75,1.46-0.3c0.41,0.3,0.65,0.05,0.86-0.3c1.68-2.81,4.29-4.58,6.95-6.29\r
	c2.72-1.75,5.53-3.38,8.02-5.47c1.42-1.19,2.71-2.49,3.42-4.25c0.1-0.26,0.17-0.57,0.54-0.54c0.34,0.02,0.41,0.33,0.54,0.57\r
	c1.14,2.17,1.07,2.1,2.74,0.31c2.42-2.61,5.04-5.03,7.44-7.65c3.8-4.15,7.71-8.24,10.11-13.46c0.47-1.02,0.89-2.05,1.05-3.17\r
	c0.05-0.34,0.13-0.78,0.54-0.86c0.39-0.07,0.47,0.35,0.65,0.6c0.97,1.34,1.69,1.45,2.95,0.34c1.02-0.9,2-1.84,2.96-2.81\r
	c0.75-0.77,1.64-1.09,2.69-1.12c7.75-0.24,15.5-0.44,23.25-0.78c3.15-0.14,6.32-0.03,9.45-0.47c7.27-1.01,13.69-3.73,18.64-9.36\r
	c0.34-0.39,0.73-0.74,1.11-1.09c0.14-0.13,0.32-0.21,0.61-0.4c0.08,1.13-0.55,1.91-0.92,2.7c-3.79,8.01-8.06,15.76-12.57,23.38\r
	c-2.2,3.71-4.26,7.49-6.38,11.24c-0.12,0.21-0.23,0.43-0.38,0.6c-0.19,0.22-0.46,0.37-0.75,0.21c-0.27-0.15-0.17-0.41-0.09-0.64\r
	c0.11-0.34,0.23-0.68,0-1.3c-1.24,1.35-2.37,2.6-3.52,3.83c-3.63,3.88-5.99,8.52-8.08,13.34c-1.67,3.84-4.45,6.78-7.86,9.15\r
	c-0.29,0.2-0.59,0.41-0.75,0.86c1.14-0.62,2.33-1.15,3.39-1.87c1.75-1.19,3.41-2.51,5.11-3.77c0.41-0.31,0.88-0.8,1.35-0.27\r
	c0.4,0.45-0.1,0.88-0.39,1.24c-0.97,1.22-1.85,2.52-2.93,3.63c-3.16,3.24-6.91,5.39-11.42,6.33c-4.17,0.87-7.83,2.89-10.97,5.81\r
	c-1.67,1.55-3.26,3.18-4.79,4.88c-0.64,0.72-1.36,1.34-2.24,1.77c-0.27,0.13-0.66,0.27-0.56,0.67c0.07,0.31,0.43,0.31,0.7,0.38\r
	c0.9,0.23,1.82,0.23,2.74,0.3c0.39,0.03,0.91,0.06,0.9,0.58c-0.01,0.51-0.53,0.52-0.92,0.56c-3.77,0.39-7.5,1.02-11.24,1.59\r
	c-3.17,0.48-6.36,0.94-9.52,1.62c-2.6,0.56-5.21,1.12-7.79,1.73c-2.44,0.57-4.92,1.01-7.32,1.74c-1.26,0.38-2.59,0.46-3.88,0.71\r
	c-3.24,0.63-6.52,1.09-9.82,1.34C333.81,399.56,333.59,399.64,333.01,399.77z"/>\r
<path class="demon_slayer-st" d="M213.71,109.78c13.87-8.7,29.12-14.19,44.37-19.4c-1.21,0.03-2.53,0.39-3.86,0.68\r
	c-5.91,1.27-11.74,2.84-17.3,5.22c-6.83,2.93-13.94,5.15-20.61,8.47c-7.1,3.54-13.9,7.54-20.38,12.11\r
	c-8.07,5.69-15.41,12.2-22.26,19.28c-6.57,6.8-12.37,14.23-17.82,21.94c-1.36,1.93-2.78,3.81-4.19,5.7\r
	c-0.24,0.32-0.49,0.64-0.78,0.91c-0.25,0.23-0.53,0.67-0.89,0.42c-0.39-0.26,0.03-0.64,0.1-0.97c0.75-3.46,1.82-6.84,2.38-10.36\r
	c0.24-1.52,0.83-2.98,1.35-4.44c1.01-2.84,1.86-5.76,3.61-8.3c3.45-5.01,7.38-9.62,11.63-13.96c6.5-6.62,13.33-12.88,20.41-18.87\r
	c5.43-4.6,11.04-8.98,16.85-13.07c5.26-3.7,10.96-6.67,16.84-9.31c5.35-2.4,10.88-4.29,16.42-6.16c4.38-1.48,8.71-3.1,13.12-4.45\r
	c3.07-0.94,6.19-1.76,9.38-2.34c1.48-0.27,2.97-0.54,4.45-0.87c2.5-0.55,5.03-0.86,7.57-1.15c6.72-0.77,13.47-0.97,20.23-0.73\r
	c4.58,0.16,9.15,0.67,13.71,1.23c2.26,0.27,4.47,0.8,6.75,0.92c1.39,0.08,2.75,0.51,4.09,0.81c3.41,0.76,6.84,1.44,10.23,2.32\r
	c3.01,0.78,6.01,1.57,9,2.41c3.14,0.88,6.23,1.96,9.32,3.01c2.67,0.91,5.31,1.93,7.98,2.86c3.63,1.25,7.08,2.88,10.48,4.64\r
	c4.28,2.22,8.61,4.36,12.89,6.59c3.85,2.01,7.75,3.94,11.46,6.22c2.55,1.56,5.4,2.51,8.3,3.31c3.2,0.88,6.18,2.33,8.94,4.19\r
	c0.25,0.17,0.45,0.38,0.32,0.69c-0.12,0.31-0.42,0.35-0.7,0.36c-1.05,0.02-1.84-0.71-2.8-0.97c-0.46-0.12-0.9-0.34-1.36-0.46\r
	c-0.33-0.09-0.74-0.28-0.98,0.13c-0.27,0.46,0.09,0.76,0.39,1.01c1.53,1.28,3.1,2.52,4.61,3.83c5.35,4.64,10.62,9.36,14.32,15.52\r
	c0.47,0.78,0.87,1.61,1.27,2.43c0.84,1.74,2.62,2.52,4.13,2.36c3.36-0.34,5.22,1.79,7.37,3.58c1.01,0.84,1.9,1.83,2.83,2.76\r
	c0.25,0.24,0.63,0.48,0.43,0.9c-0.18,0.39-0.6,0.35-0.95,0.34c-0.72-0.03-1.67-0.5-2.01,0.47c-0.4,1.14-0.79,2.41,0.08,3.55\r
	c2.42,3.19,4.34,6.69,6.32,10.16c1.4,2.45,3,4.79,4.73,7.03c0.11,0.15,0.28,0.25,0.55,0.33c-0.39-1.31-0.15-2.67-0.59-3.95\r
	c-0.16-0.46-0.42-1.02,0.15-1.27c0.55-0.25,0.88,0.33,1.08,0.73c0.36,0.74,0.63,1.55,0.89,2.32c0.48,1.45,1.12,2.82,1.74,4.2\r
	c0.37,0.83,0.07,0.99-0.59,1.08c-0.55,0.07-1.11,0.11-1.67,0.11c-5.6,0.01-11.2,0-16.8,0c-6.23,0-12.47-0.04-18.7,0.03\r
	c-1.45,0.02-2.56-0.29-3.36-1.56c-0.31-0.5-0.77-0.91-1.32-1.27c0.32,0.59,0.65,1.16,0.94,1.76c0.14,0.28,0.29,0.65-0.01,0.89\r
	c-0.36,0.31-0.68,0-0.94-0.23c-0.97-0.87-1.51-2.06-2.25-3.09c-3.07-4.29-6.31-8.45-9.72-12.49c-5.6-6.64-11.85-12.63-18.11-18.65\r
	c-9.41-9.06-20.77-14.77-32.45-20.03c-6.27-2.82-12.82-4.92-19.49-6.63c-5.86-1.49-11.77-2.7-17.75-3.41\r
	c-9.25-1.11-18.53-1.71-27.87-0.93c-7.21,0.61-12.68,1.29-16.9,1.96c-7.99,1.27-14.72,2.83-19.84,4.18\r
	c5.38-2.1,10.76-3.61,16.21-4.81c5.45-1.2,10.96-2.06,16.49-2.91c-4.96-0.09-9.85,0.7-14.78,1.03c3.41-1.17,7.04-1.29,10.51-2.22\r
	c-0.63-0.71-0.21-0.92,0.49-1.12c2.3-0.66,4.62-1.31,6.62-2.7c0.31-0.22,0.82-0.38,0.68-0.87c-0.14-0.49-0.66-0.35-1.04-0.39\r
	c-4.3-0.36-8.53,0.27-12.76,0.87c-6.45,0.92-12.83,2.22-19.1,4.01c-8.12,2.31-14.13,4.66-18.44,6.39\r
	C221.82,105.94,217.22,108.07,213.71,109.78z"/>\r
<path class="demon_slayer-st" d="M457.07,187.14c0.3,0.69,0.68,1.21,0.73,1.76c0.18,2.02,1.1,3.93,0.87,6.02c-0.07,0.69-0.06,1.41,1,1.35\r
	c0.36-0.02,0.56,0.29,0.62,0.63c0.1,0.47,0.26,0.95,0.23,1.42c-0.22,3.78,0.54,7.49,0.89,11.22c0.84,8.83,0.63,17.66,0.52,26.48\r
	c-0.05,4.42-0.48,8.84-1.08,13.24c-0.35,2.56-0.53,5.15-0.98,7.71c-0.52,2.97-1.04,5.94-1.68,8.9c-0.67,3.12-1.51,6.19-2.33,9.27\r
	c-0.65,2.42-1.49,4.79-2.24,7.19c-0.42,1.33-0.82,2.66-1.23,4c-0.07,0.23-0.08,0.56-0.36,0.55c-0.39,0-0.36-0.39-0.33-0.64\r
	c0.16-1.39,0.35-2.77,0.52-4.16c0.93-7.5,1.5-15.02,1.89-22.57c0.34-6.7,0.49-13.42,1.02-20.11c0.31-3.86,0.25-7.75,0.38-11.62\r
	c0.44-12.83,1.12-25.64,1.01-38.48C456.51,188.61,456.49,187.92,457.07,187.14z"/>\r
<path class="demon_slayer-st" d="M186.33,224.15c0,11.04,0,22.08,0,33.12c0,1.74,0,1.75-1.73,1.74c-13.84-0.01-27.68-0.02-41.52-0.03\r
	c-1.54,0-1.62,0.1-1.9,1.65c-0.79,4.37-1.5,8.75-1.83,13.17c-0.35,4.63-0.29,9.25,0.67,13.85c0.85,4.01,3.61,5.76,7.26,6.5\r
	c8.12,1.63,16.29,1.14,24.48,0.68c4.91-0.27,6.93-3.42,8.49-7.25c1.37-3.35,1.88-6.93,2.35-10.5c0.27-2.02,0.63-4.02,0.72-6.07\r
	c0.01-0.32,0.06-0.7,0.45-0.75c0.44-0.05,0.45,0.38,0.53,0.67c1.12,3.98,1.4,8.1,1.97,12.17c0.34,2.41,0.94,4.59,3.1,6.08\r
	c1.28,0.88,2.43,1.95,3.65,2.92c0.53,0.43,0.89,0.91,0.7,1.65c-1.07,4.19-2.43,8.26-4.53,12.08c-2.71,4.92-7,7.41-12.34,8.36\r
	c-2.76,0.49-5.55,0.68-8.35,0.69c-9.16,0.02-18.32,0.04-27.48,0.02c-3.64-0.01-7.27-0.2-10.8-1.2c-4.99-1.42-8.49-4.36-10.09-9.47\r
	c-1.19-3.8-0.94-7.67-0.95-11.53c-0.05-10.96,0-21.92,0.02-32.88c0-0.99-0.35-1.28-1.38-1.22c-3.91,0.23-7.83,0.22-11.74,0.02\r
	c-0.42-0.02-1-0.29-1.21,0.16c-0.26,0.55,0.38,0.8,0.72,1.09c1.43,1.21,2.87,2.43,4.35,3.57c0.88,0.68,0.87,1.42,0.06,1.94\r
	c-4.54,2.96-5.76,7.74-7.04,12.52c-2.51,9.38-5.94,18.38-10.56,26.95c-3.45,6.4-7.52,12.34-12.22,17.86\r
	c-3.89,4.57-8.16,8.77-12.77,12.62c-9.05,7.56-19.04,13.6-29.61,18.75c-0.68,0.33-1.38,0.64-2.06,0.97\r
	c-0.31,0.15-0.61,0.22-0.91,0.03c-0.94-0.6-0.95-3.53-0.01-4.1c8.51-5.13,16.53-10.92,23.99-17.5c9.34-8.23,17.35-17.57,23.6-28.34\r
	c3.5-6.03,6.24-12.41,8.52-19.01c1.86-5.38,3.25-10.88,4.1-16.5c0.47-3.08,0.8-6.19,0.62-9.32c-0.08-1.43-0.24-1.58-1.65-1.51\r
	c-7.99,0.38-15.99,0.06-23.99,0.23c-0.9,0.02-1.21-0.35-1.2-1.21c0.03-2.04,0.02-4.08,0.02-6.12c0-20.08,0-40.16,0-60.24\r
	c0-2.18,0-2.18,2.21-2.18c8.04,0,16.08-0.01,24.12,0.02c1.01,0,1.59-0.27,1.99-1.27c1.43-3.52,2.95-7,3.46-10.8\r
	c0.13-0.98,0.76-1.2,1.64-1.12c2.82,0.26,5.65,0.52,8.48,0.75c3.98,0.33,7.96,0.62,11.95,0.94c1.95,0.16,3.9,0.32,5.85,0.51\r
	c0.6,0.06,1.17,0.28,1.69,0.59c1.28,0.77,1.44,2.06,0.37,3.11c-0.66,0.65-1.44,1.18-2.33,1.42c-1.29,0.35-2.02,1.14-2.38,2.41\r
	c-0.25,0.88-0.66,1.72-1.01,2.56c-0.26,0.63-0.06,0.91,0.61,0.88c0.2-0.01,0.4,0,0.6,0c19.52-0.01,39.04-0.01,58.56-0.01\r
	c1.69,0,1.69,0,1.69,1.75C186.32,202.07,186.32,213.11,186.33,224.15C186.33,224.15,186.33,224.15,186.33,224.15z M152.93,225.13\r
	c0,0.01,0,0.02,0,0.04c-4.76,0-9.52-0.03-14.28,0.01c-2.03,0.02-3.17,1.05-3.56,3.02c-0.75,3.77-0.51,7.58-0.28,11.36\r
	c0.22,3.62,1.28,4.43,4.99,4.46c7.8,0.08,15.6,0.06,23.39,0.07c1.2,0,2.4-0.01,3.6-0.08c2.52-0.15,3.56-0.99,3.96-3.45\r
	c0.61-3.73,0.49-7.51,0.15-11.24c-0.32-3.43-1.43-4.18-4.89-4.19C161.65,225.11,157.29,225.13,152.93,225.13z M106.38,225.13\r
	c0,0.01,0,0.02,0,0.03c-4.8,0-9.59-0.02-14.39,0.01c-1.91,0.01-2.85,0.85-3.26,2.7c-0.02,0.08-0.05,0.16-0.05,0.23\r
	c-0.13,4.27-0.35,8.55,0.14,12.81c0.27,2.33,1.17,3.05,3.5,3.09c9.27,0.15,18.55,0.1,27.82,0.02c0.73-0.01,1.44-0.13,2.09-0.45\r
	c0.77-0.37,1.42-0.86,1.56-1.82c0.67-4.45,0.71-8.91,0.08-13.36c-0.35-2.49-1.25-3.25-3.82-3.26\r
	C115.5,225.11,110.94,225.13,106.38,225.13z M152.86,202.38C152.86,202.38,152.86,202.38,152.86,202.38\r
	c-4.72,0-9.44,0.02-14.15-0.01c-1.07-0.01-1.94,0.3-2.67,1.09c-1.21,1.28-1.21,2.93-1.29,4.49c-0.12,2.51-0.16,5.04-0.01,7.55\r
	c0.26,4.2,0.74,5.1,5.24,5.21c5.31,0.13,10.63,0.04,15.95,0.04c3.52,0,7.04,0.02,10.55-0.02c2.88-0.04,3.96-0.87,4.36-3.68\r
	c0.5-3.53,0.42-7.12,0.08-10.64c-0.32-3.3-1.37-4.01-4.75-4.01C161.73,202.37,157.29,202.38,152.86,202.38z M106.18,220.75\r
	C106.18,220.75,106.18,220.75,106.18,220.75c2.68,0,5.36,0.01,8.04,0c2.16,0,4.32,0.02,6.48-0.04c1.66-0.04,2.92-0.75,3.22-2.81\r
	c0.52-3.67,0.32-7.34,0.28-11.01c-0.01-1.15-0.1-2.43-0.81-3.44c-0.6-0.85-1.53-1.07-2.54-1.07c-9.84,0.01-19.67,0-29.51,0.02\r
	c-1.62,0-2.45,0.72-2.75,2.28c-0.78,4.08-0.61,8.21-0.32,12.31c0.22,3.12,1.09,3.7,4.25,3.75c0.28,0,0.56,0.01,0.84,0.01\r
	C97.62,220.75,101.9,220.75,106.18,220.75z"/>\r
<path class="demon_slayer-st" d="M396.11,170.84c18.2,0,36.4,0.01,54.59-0.02c1.11,0,1.46,0.37,1.46,1.46c-0.02,8.16,0.1,16.32-0.02,24.48\r
	c-0.13,8.63-0.25,17.27-0.67,25.89c-0.33,6.79-0.3,13.59-0.81,20.36c-0.46,6.1-0.51,12.21-0.96,18.31\r
	c-0.32,4.3-0.41,8.62-0.89,12.91c-0.74,6.71-1.64,13.41-3.41,19.95c-1.6,5.89-4.46,11.04-9.51,14.71\r
	c-3.51,2.55-7.45,4.14-11.73,4.89c-6.29,1.09-12.66,0.86-19,1.17c-1.09,0.05-1.55-0.34-1.77-1.4c-1.66-7.77-3.37-15.54-5.06-23.3\r
	c-0.27-1.26-0.18-1.31,1.08-1.02c5,1.15,10.02,1.94,15.2,1.49c4.61-0.41,7.52-2.75,9.07-7c1.3-3.55,1.93-7.25,2.5-10.96\r
	c2.34-15.24,1.93-30.61,1.99-45.95c0.05-10.92,0.14-21.83,0.21-32.75c0.01-1.51-0.02-1.55-1.53-1.55c-10,0-20,0.02-30-0.03\r
	c-1.11,0-1.53,0.34-1.68,1.43c-1.03,7.28-2.13,14.55-3.18,21.82c-0.41,2.84-1.11,5.64-1.26,8.53c-0.11,2.23,0.6,4.04,2.02,5.69\r
	c3.38,3.94,6.92,7.75,10.11,11.86c4.28,5.52,7.23,11.59,7.53,18.7c0.08,2-0.6,3.87-1.76,5.51c-2.67,3.8-8.4,4.37-10.91-0.97\r
	c-1.58-3.36-3.05-6.78-4.65-10.13c-1.34-2.81-2.56-5.69-4.35-8.26c-0.14-0.2-0.26-0.4-0.41-0.59c-1.6-2.06-2.89-1.92-3.91,0.49\r
	c-2.37,5.6-4.96,11.08-8.08,16.32c-4.06,6.83-8.68,13.23-14.22,18.94c-7.71,7.96-16.7,14.1-26.67,18.87\r
	c-4.12,1.97-8.37,3.58-12.68,5.08c-0.64,0.22-1.31,0.37-1.98,0.48c-0.57,0.09-1.18,0-1.43-0.61c-0.25-0.65,0.33-0.92,0.75-1.19\r
	c3.58-2.27,7.19-4.48,10.74-6.8c7.06-4.61,13.37-10.13,19.2-16.21c4.36-4.54,8.23-9.47,11.65-14.75\r
	c5.11-7.89,9.12-16.32,11.98-25.28c0.62-1.93,1.16-3.9,1.52-5.92c0.43-2.38-0.25-4.31-1.96-5.97c-8.72-8.48-18.52-15.57-28.69-22.19\r
	c-0.91-0.59-1.81-1.19-2.57-1.96c-0.37-0.37-1.04-0.76-0.65-1.38c0.36-0.56,1.04-0.27,1.55-0.12c1.53,0.44,3.07,0.89,4.57,1.42\r
	c9.02,3.18,17.56,7.5,26.28,11.37c1.31,0.58,2.65,1.11,3.96,1.7c0.88,0.39,1.42,0.06,1.64-0.78c1.13-4.25,2.07-8.53,2.48-12.93\r
	c0.31-3.3,0.71-6.59,1.07-9.89c0.03-0.28,0.08-0.55,0.1-0.83c0.11-1.56,0.03-1.62-1.53-1.49c-0.56,0.05-1.12,0.05-1.68,0.05\r
	c-12.56,0-25.12,0.01-37.68,0.01c-1.93,0-2.08-0.08-2-2.04c0.25-5.88-0.09-11.75-0.01-17.62c0.03-1.97,0.01-1.94,2.04-1.94\r
	c18,0.01,35.99,0,53.99,0C396.11,170.87,396.11,170.85,396.11,170.84z"/>\r
<path class="demon_slayer-st" d="M238.55,195.54c14.44,0,28.88,0,43.31,0c1.55,0,1.61,0.05,1.61,1.63c0.01,3.8,0.01,7.6,0,11.4\r
	c0,1.58-0.1,1.65-1.62,1.53c-0.56-0.04-1.12-0.04-1.68-0.04c-10.88,0-21.76,0-32.64,0c-1.71,0-1.7,0-1.72,1.75\r
	c-0.04,3.8,0.04,7.59-0.2,11.39c-0.21,3.34,0.58,6.6,1.28,9.84c0.76,3.47,1.73,6.9,2.95,10.24c0.27,0.74,0.58,0.96,1.17,0.37\r
	c4.64-4.68,9.58-9.07,13.61-14.34c1.87-2.46,2.77-5.16,2.91-8.21c0.1-2.27,1.18-2.93,3.28-1.99c3.33,1.49,6.02,3.9,8.61,6.41\r
	c0.75,0.72,1.44,1.49,1.99,2.39c1.01,1.66,0.66,2.97-1.13,3.8c-0.9,0.42-1.86,0.74-2.8,1.05c-5.36,1.78-10.1,4.77-14.9,7.65\r
	c-3.32,1.99-6.56,4.14-9.86,6.17c-0.88,0.54-1.08,1.02-0.6,2.01c4.39,8.98,11.01,15.7,20.06,19.99c4.54,2.15,9.33,3.54,14.21,4.67\r
	c0.91,0.21,0.87,0.5,0.33,1.06c-3.22,3.36-5.48,7.36-7.63,11.42c-0.43,0.81-0.76,1.01-1.74,0.76c-7.96-1.99-15.37-5.17-21.92-10.16\r
	c-5.19-3.94-9.35-8.8-12.51-14.51c-0.97-1.75-1.98-3.47-2.69-5.35c-0.07-0.18-0.1-0.44-0.34-0.45c-0.4-0.02-0.5,0.35-0.63,0.62\r
	c-1.21,2.64-2.92,4.96-4.78,7.16c-4.8,5.69-10.48,10.41-16.54,14.69c-4.91,3.46-10.03,6.57-15.64,8.79\r
	c-1.07,0.42-2.23,0.63-3.35,0.91c-0.39,0.09-0.84,0.12-1.08-0.29c-0.25-0.41,0.02-0.77,0.26-1.09c0.96-1.25,2.21-2.2,3.42-3.17\r
	c5.52-4.43,11.06-8.82,15.94-13.98c3.15-3.32,5.46-7.17,7.31-11.32c2.87-6.45,3.78-13.32,4.39-20.27\r
	c0.52-5.98,0.69-11.97,0.74-17.96c0.02-2.88,0.22-5.75,0.4-8.62c0.07-1.11-0.34-1.45-1.44-1.44c-9.84,0.04-19.68,0.02-29.52,0.03\r
	c-1.4,0-2.79,0.14-4.19,0.16c-1.65,0.02-1.81-0.16-1.81-1.75c0-3.8,0.03-7.6-0.02-11.4c-0.02-1.15,0.38-1.54,1.52-1.54\r
	c7.4,0.03,14.8,0.01,22.2,0.01C224.24,195.54,231.39,195.54,238.55,195.54C238.55,195.54,238.55,195.54,238.55,195.54z"/>\r
<path class="demon_slayer-st" d="M316.07,215.69c7.48,0,14.96,0,22.44,0c0.56,0,1.16,0.08,1.67-0.09c1.72-0.59,3.08,0.04,4.45,1.01\r
	c1.43,1.02,2.92,1.96,4.41,2.88c0.95,0.59,0.97,1.15,0.32,2.03c-3.97,5.42-8.7,10.11-13.74,14.5c-5.77,5.02-11.9,9.55-18.44,13.53\r
	c-2.43,1.47-4.91,2.84-7.5,4c-0.28,0.12-0.72,0.11-0.76,0.48c-0.04,0.41,0.37,0.59,0.69,0.74c2.54,1.18,5.13,2.22,7.84,2.95\r
	c5.89,1.6,11.88,1.22,17.87,1.05c4.72-0.13,9.41-0.52,14.1-1.03c1.07-0.12,2.14-0.28,3.21-0.43c0.89-0.12,1.3,0.14,1.03,1.13\r
	c-0.75,2.78-1.48,5.56-2.2,8.34c-0.23,0.9-0.72,1.26-1.68,1.34c-8.22,0.67-16.46,0.52-24.69,0.5c-6.98-0.02-13.26-2.06-18.86-6.3\r
	c-3.09-2.34-3.67-2.2-6.26,0.67c-1.64,1.82-2.83,3.96-4.05,6.07c-0.52,0.9-0.89,0.93-1.49,0.13c-1.97-2.61-3.94-5.24-5.92-7.85\r
	c-0.37-0.48-0.66-0.91-0.09-1.45c3.11-2.95,6.27-5.82,10.27-7.57c1.82-0.8,3.72-1.2,5.7-1.24c2.77-0.06,4.79-1.72,6.79-3.26\r
	c7.85-6.08,14.43-13.43,20.66-21.11c0.19-0.24,0.56-0.47,0.36-0.81c-0.24-0.41-0.73-0.25-1.1-0.25c-9.2-0.01-18.4-0.01-27.59,0\r
	c-3.52,0-7.04,0.02-10.56,0.02c-1.52,0-1.6-0.09-1.6-1.65c0.01-2.28,0.05-4.56-0.02-6.84c-0.04-1.15,0.34-1.52,1.49-1.52\r
	C300.56,215.71,308.32,215.69,316.07,215.69z"/>\r
<path class="demon_slayer-st" d="M158.81,283.44c2.27-0.18,4.54-0.38,6.81-0.53c1.08-0.07,1.43-0.66,1.43-1.66c0-2.2-1.04-4.08-1.8-6.04\r
	c-0.15-0.4-0.56-0.79-0.2-1.21c0.39-0.46,0.91-0.2,1.33-0.01c3.76,1.73,7.18,3.9,9.3,7.61c1.15,2.02,1.83,4.16,1.08,6.53\r
	c-0.52,1.63-1.62,2.76-3.02,3.58c-1.72,1.01-3.71,0.12-4.31-1.82c-0.13-0.42-0.2-0.86-0.32-1.28c-0.64-2.35-1.1-2.68-3.48-2.17\r
	c-4.76,1.02-9.5,2.13-14.26,3.16c-1.47,0.32-2.61,1.07-3.64,2.15c-1.36,1.44-2.16,1.29-3.03-0.5c-1.25-2.58-1.78-5.37-2.22-8.18\r
	c-0.12-0.81,0.36-0.98,1.01-0.92c1.95,0.18,3.89,0.4,5.84,0.56c1.87,0.15,2.3-0.14,2.93-1.92c1.86-5.25,3.01-10.68,3.93-16.16\r
	c0.21-1.23,0.39-2.45,0.15-3.69c-0.14-0.73,0.19-0.99,0.85-0.86c0.54,0.11,1.08,0.28,1.6,0.49c2.41,0.96,4.75,2.09,7.06,3.27\r
	c0.35,0.18,0.69,0.4,1.01,0.64c1.15,0.87,1.19,1.72,0.08,2.64c-0.39,0.33-0.85,0.67-1.32,0.79c-1.91,0.47-3.05,1.8-4.02,3.36\r
	c-1.84,2.95-3.7,5.89-5.5,8.85c-1.46,2.4-1.01,3.2,1.76,3.23c0.32,0,0.64,0,0.96,0C158.81,283.39,158.81,283.42,158.81,283.44z"/>\r
<path class="demon_slayer-st" d="M199.51,225.53c5.21,0.21,10.27,1,14.81,3.79c3.52,2.16,5.11,6,4.15,9.89c-0.53,2.12-2.37,3.81-4.51,4.15\r
	c-0.87,0.14-1.54-0.13-2.11-0.82c-1.38-1.63-2.36-3.52-3.5-5.29c-2.52-3.91-5.75-7.15-9.36-10.03c-0.19-0.15-0.39-0.29-0.57-0.44\r
	c-0.28-0.23-0.64-0.46-0.53-0.86c0.12-0.44,0.56-0.36,0.91-0.38C199.03,225.52,199.27,225.53,199.51,225.53z"/>\r
<path class="demon_slayer-st" d="M321.71,209.09c-0.04,0.44-0.01,0.89-0.12,1.3c-0.25,0.91-0.83,1.57-1.77,1.76c-0.96,0.19-1.33-0.6-1.68-1.25\r
	c-0.91-1.69-1.98-3.28-3.23-4.73c-0.85-1-1.81-1.9-2.72-2.85c-0.19-0.2-0.43-0.41-0.24-0.72c0.11-0.19,0.34-0.21,0.54-0.16\r
	c2.72,0.7,5.59,1.02,7.74,3.14C321.22,206.56,321.83,207.65,321.71,209.09z"/>\r
</svg>\r
`,Ic=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.dingdongji-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="dingdongji-st" d="M303.5,141.5c0.2-5.22,0.35-12.82,0-22c-0.53-13.93-0.79-20.9-3-28c-1.41-4.55-6.3-20.25-20-28\r
	c-17.13-9.69-41.47-3.22-55,11c-14.18,14.91-12.92,34.62-12,49c0.81,12.72,2.46,38.45,22,50c13.92,8.23,28.66,4.37,30,4\r
	c16.4-4.56,28.78-20.3,31-40"/>\r
<path class="dingdongji-st" d="M297.5,138.5c8.15,4.77,19.16,12.37,30,24c0.66,0.71,14.28,15.5,23,34c10.71,22.72,11.33,45.05,8,92\r
	c-4.66,65.7-7.23,98.8-19,111c-23.32,24.18-59.71,23.48-85,23c-22.17-0.42-73.46-1.4-96-35c-5.63-8.38-7.42-33.92-11-85\r
	c-0.77-11.04-1.92-30.26,1.73-54.1c1.55-10.12,3.45-17.79,4.27-20.9c2.97-11.29,6.58-24.7,15-40c13.42-24.39,32.74-40.84,46-50"/>\r
<path class="dingdongji-st" d="M199.5,226.5c-1.32-8.72,5.17-19.04,13-19c6.93,0.04,13.06,8.18,13,16c-0.06,7.92-6.46,16.44-14,16\r
	C205.06,239.12,200.39,232.36,199.5,226.5z"/>\r
<path class="dingdongji-st" d="M282.5,224.5c-1.61-7.86,3.65-17.35,11-18c7.43-0.66,14.25,7.95,14,16c-0.18,5.89-4.2,13.23-11,14\r
	C289.49,237.29,283.75,230.62,282.5,224.5z"/>\r
<path class="dingdongji-st" d="M208.5,312.5c-7.73-17.38,2.34-35.21,9-47c5.71-10.11,18.74-33.17,38-33c20.95,0.18,34.09,27.71,39,38\r
	c5.52,11.56,11.62,24.35,7,38c-6.63,19.56-31.16,28.67-50,28C248.98,336.41,218.46,334.87,208.5,312.5z"/>\r
<path class="dingdongji-st" d="M207.5,288.5c-0.92,2.56-1.73,6.09-1,10c2.93,15.69,28.17,24.14,46,25c20.19,0.97,46.56-7.04,50-22\r
	c0.63-2.72,0.38-5.19,0-7"/>\r
</svg>\r
`,Lc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.doro-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="doro-st" d="M138.5,364.5c9,6.5,20.3,13.6,34,20c11.7,5.5,22.5,9.3,32,12c6.2,17.3,14.1,29.4,20,37c5.9,7.7,9.4,10.4,12,12\r
	c10.4,6.6,28.2,11,37,2c1.4-1.5,4.8-5.5,5-14c0.7-10.7,1.3-21.3,2-32c11.3-2.4,26.1-6.7,42-15c23.2-12.1,38.8-27.3,48-38\r
	c-3.8,6.5-9.6,18.3-11,34c-0.9,10.2-2.1,23.6,6,36c7.2,10.9,22.3,22,36,18c5.7-1.6,12.2-6.2,15-13c1.9-4.7,1.5-9.1,1-14\r
	c-0.8-8.2-3.2-13.7-4-16c-5.1-15,14.3-30.9,27.1-56.1c2.5-5,13-25.7,12.9-46.9c-0.1-32.4-25-57.5-40-70c2.7-8.7,5.3-17.3,8-26\r
	c-2.3-1.7-4.7-3.3-7-5c1.5-4.1,3-9.1,4-15c1.2-7,1.3-13.1,1-18c-3.8-0.5-7.8-0.8-12-1c-6.1-0.3-11.8-0.2-17,0c0.5-9.2-0.2-25-10-39\r
	c-16.8-24.2-53.8-33.6-91-21c-4.2-3.4-14.3-10.6-29-12c-8.5-0.8-15.5,0.6-20,2c-6.8-3.8-17-8.2-30-10c-26.9-3.7-48,6.5-56,11\r
	c-4.6-0.9-11.7-1.7-20,0c-11.9,2.5-19.4,8.8-30,18c-16.3,14.1-26.1,28.1-30,34c-10.1,15.1-9.3,18.9-17,31c-6.5,10.2-17.5,23.9-37,37\r
	c3.7,0.7,8.5,1.2,14,1c5.5-0.2,10.3-1.1,14-2c-1.2,6.8-2.5,16.4-3,28c-0.8,18.4-1.7,41,8,65c4,10,13,27.9,33,45\r
	c0.8,5.9,2.5,15.7,7,27c9.4,23.6,30.5,52.4,46,49c4.6-1,8.3-4.7,10-8c1.8-3.4,2.3-8-3-25C144.7,380.9,142.2,373.3,138.5,364.5z"/>\r
<path class="doro-st" d="M104.5,312.5c1,4.6,2.8,10.6,6,17c2.9,5.9,6.2,10.5,9,14c-3,0.2-11.5,0.3-20-5c-7-4.4-10.6-10.2-12-13\r
	c-0.3,6-0.7,12-1,18"/>\r
<path class="doro-st" d="M78.5,237.5c-2.5,2.2-16.9,15.5-15,33c0.6,5.2,2.8,12.3,12,22c15.4,16.1,35.7,24,59,29c20.1,4.3,51.9,8.6,92,3"\r
	/>\r
<path class="doro-st" d="M131.5,102.5c-15.4,8.7-25.3,18.5-31,25c0,0-35.2,40.4-24,105c0.4,2.4,1,5.1,3,6c9.3,4.2,36.4-35.2,60-73\r
	c-2.2,6-5.2,16.7-4,30c0.5,5.4,1.6,15.7,8,26c7.9,12.6,25.4,27.8,39,23c9.1-3.2,12.9-14,17-26c8.1-23.5,5.1-43,6-43\r
	c0.8,0,5.3,17.4,1,39c-4.3,21.6-14.5,33.1-12,35c2.8,2.1,17.4-9.7,27-25c5.6-8.8,8.4-17.1,10-23c1.4,4.1,5.8,14.8,17,23\r
	c9.8,7.1,19.6,8.6,24,9c-0.2,19.9-5.3,34.6-9,43c-7,15.8-16.3,26.3-25,36c-8.4,9.4-16.2,16.3-22,21c5.4,0.6,14.4,1,25-2\r
	c10.3-2.9,17.7-7.7,22-11c-1,4.8-3.2,12.8-9,21c-7.3,10.4-16.3,15.7-21,18c5.9,0.7,15.9,1,27-3c17.5-6.4,26.9-19.9,33-29\r
	c7-10.4,11.1-20.8,15-35c6.3-23.1,14-51.5,9-89c-2-14.9-6-42.5-25-71c-11.7-17.6-28.3-42.5-56-45c-18-1.6-32.8,7-40,12\r
	c4.6-1.2,11.5-2.2,19,0c8.8,2.6,15.8,8.8,26,25c7.1,11.4,16.1,25.9,23,50c3.9,13.6,8.2,33.8,8,59"/>\r
<path class="doro-st" d="M302.5,312.5c6.5-3.3,16.1-9.1,25-19c13.5-14.9,18.2-30.9,20-39c3,0.3,6,0.7,9,1c0,4.5,0.4,11.2,2,19\r
	c3.3,16.2,11.8,36.8,18,36c2.8-0.4,2.8-4.8,8-17c2.6-6.1,8.3-19.4,18-32c7.4-9.6,12.3-12.6,12-19c-0.3-5.2-3.9-9.3-7-12\r
	c2.3-4.3,4.7-8.7,7-13"/>\r
<g>\r
	<path class="doro-st" d="M355.5,207.5c-2.3,3.7-4.7,7.3-7,11c-0.7,11.7-1.3,23.3-2,35c2.5,0.8,7.2,1.9,13,1c5.1-0.8,8.9-2.7,11-4\r
		c-4-13.7-8-27.3-12-41c0.4,0.2,2.6,1.1,5,0c2-0.9,2.8-2.5,3-3c0.4,3.8,1.4,9.2,4,15c4.2,9.3,10.4,15.1,14,18c2.8-1.7,6.4-4.2,10-8\r
		c2.7-2.9,4.6-5.6,6-8c-3.3-4.3-9.7-11.3-20-16c-4.8-2.2-9.3-3.4-13-4c0-0.5,0.1-4.5-3-7c-2.8-2.2-7.4-2.7-10,0\r
		C351.8,199.2,352,204.4,355.5,207.5z"/>\r
	<path class="doro-st" d="M386.5,199.5c-1.9-0.4-5.1-0.8-9,0c-4.3,0.9-7.4,2.8-9,4c-2.9-3.2-3.1-5.6-3-7c0.7-8.1,17.2-15.8,25-10\r
		c3.4,2.5,5.2,7.6,4,12c-1.6,6-8.3,9.1-13,9c-1.5-0.1-3.7-0.7-8-2c-2.5-0.8-4.6-1.5-6-2c-1.2,4.8-4.9,7.5-8,7c-2.2-0.4-3.6-2.3-4-3\r
		c-0.9,1.3-2.4,3.4-4,6c-2,3.1-2.5,4.3-3,5c-4.1,5.9-23.3,6.4-27-2c-2.5-5.6,2.4-14.2,9-18c6.6-3.8,15.2-3.1,22,2\r
		c0.7,2.7,1.3,5.3,2,8c-1.3-0.4-4.8-1.3-9,0c-4.8,1.5-7.3,4.9-8,6"/>\r
</g>\r
<g>\r
	<path class="doro-st" d="M390.5,155.5c0.4,3.1,0.9,9.6-2,17c-2.3,5.9-5.8,9.9-8,12c1-6.3,2.1-15.6,2-27c0-3.3-0.1-11.6-1-17\r
		c-4-23.6-33.6-48.9-51-42c-9.2,3.7-12.6,15.6-15,24c-1.5,5.2-7.4,26.1,5,41c6.4,7.7,14.7,10.3,20,12c6.8,2.2,17.6,5.6,28,0\r
		c9.5-5.1,13-14.7,14-18"/>\r
	<path class="doro-st" d="M318.5,159.5c1.8-6.3,6.3-19.2,18-31c10.1-10.2,21-14.9,27-17"/>\r
	<path class="doro-st" d="M341.5,153.5c1.6,2.6,4.4,6.5,9,10c6.9,5.2,19.5,10.6,25,6c6-5.1,2.1-21.2-6-31c-8.1-9.9-23.7-17.5-30-12\r
		C334.7,130.7,335.8,142,341.5,153.5c2.8-2.5,7.2-5.9,13-9c7.7-4.1,15-6,15-6c0,0-1.6,0.5-9,3c0,9.3,0,18.7,0,28"/>\r
</g>\r
<path class="doro-st" d="M383.5,181.5c3.6-0.2,8.5-0.2,14,1c7.6,1.6,13.4,4.7,17,7"/>\r
<path class="doro-st" d="M408.5,231.5c-1.7-3.2-3.7-6.5-6-10c-4.3-6.4-8.8-11.7-13-16"/>\r
<path class="doro-st" d="M113.5,204.5c6.6,1.6,16.6,4.8,27,12c8.4,5.8,14.3,12.2,18,17"/>\r
<path class="doro-st" d="M204.5,229.5c5.1-2,15.6-5.5,29-4c15.2,1.7,25.6,8.7,30,12"/>\r
<path class="doro-st" d="M102.5,235.5c1.5-14.9,16.7-26.2,32-23c15.2,3.2,24.7,19.6,20,34c-4.2,13-18.7,20.4-32,17\r
	C110.1,260.3,101.2,248.1,102.5,235.5z"/>\r
<path class="doro-st" d="M206.5,263.5c-0.5-15.4,12.9-28.2,28-28c13.8,0.2,26,11.2,27,25c1.1,15.9-13.2,29.8-29,29\r
	C219,288.8,207,277.6,206.5,263.5z"/>\r
<path class="doro-st" d="M146.5,275.5c-1.4,7.1,1.2,13.6,6,16c3.1,1.6,7,1.3,10,0c5.6-2.5,6.5-8.4,9-8c2.7,0.4,2,7.4,6,10\r
	c3.7,2.4,9.7,0,15-3"/>\r
</svg>\r
`,Rc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.doubao-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="doubao-st" d="M308.5,63.5c-4.15-6.45-11.38-15.56-23-22c-26.68-14.79-56.47-4.38-69,0c-59.16,20.68-85.94,82.68-93,99\r
	c-18.36,42.45-19.13,82.3-20,127c-0.41,20.99,0.55,38.78,1.64,51.93c0.21,2.5,1.84,4.66,4.19,5.52c7.42,2.71,15.83,5.34,25.16,7.56\r
	c8.85,2.1,17.13,3.5,24.65,4.41c2.76,0.34,5.13-1.93,4.92-4.71c-0.75-9.77-1.43-22.25-1.57-36.7c-0.2-21.99-0.36-39.03,3-58\r
	c2.33-13.17,6.82-37.12,23-62c5.05-7.76,32.47-49.93,83-60c11.45-2.28,21.26-2.35,28-2c2.18-2.99,5.06-7.69,7-14\r
	c2.16-7.03,2.25-13.12,2-17"/>\r
<path class="doubao-st" d="M305.5,58.5c2.31-1.27,7-3.39,13-3c12.5,0.82,19.3,11.82,20,13"/>\r
<path class="doubao-st" d="M326.5,65.5c10.45,1.92,18.35,5.58,24,9c36.35,22.04,38.77,70.51,39,77"/>\r
<path class="doubao-st" d="M381.5,133.5c6.01,13.23,12.49,32.34,13,55c0.43,19.32-3.71,30.69-5,34c-3.09,7.95-7,13.98-10,18"/>\r
<path class="doubao-st" d="M306.5,116.5c15.58,9.11,36.3,24.43,53,49c8.6,12.65,18.92,28.25,21,51c1.32,14.41-1.58,25.97-4,36\r
	c-4.7,19.46-12.24,34.36-18,44"/>\r
<path class="doubao-st" d="M380.5,239.5c1.83,0.29,15.11,2.64,21,14c6.5,12.53-0.5,27.31-9,35c-13.5,12.21-31.71,7.37-33,7\r
	c-7.26,9.22-19.21,22.05-37,33c-15.75,9.69-28.95,13.51-41,17c-6.86,1.99-12.33,3.13-19,3c-6.29-0.13-11.94-1.36-22-5\r
	c-10.86-3.93-21.29-7.71-33-15c-23.73-14.76-38.07-34.81-45-46"/>\r
<path class="doubao-st" d="M164.5,332.5c9.33,1.33,18.67,2.67,28,4"/>\r
<path class="doubao-st" d="M360.5,295.5c-2.68,8.02-5.28,17.77-7,29c-1.29,8.44-1.85,16.22-1.98,23.14c-0.06,3.22-2.73,5.77-5.95,5.66\r
	c-8.35-0.27-16.71-0.54-25.06-0.81"/>\r
<path class="doubao-st" d="M212.5,331.5c-2.33-0.55-7.92-1.52-14,1c-11.2,4.64-13.78,16.88-14,18c-2.75,1.19-6.59,3.29-10,7\r
	c-3.44,3.74-2.79,5.99-7,13c-2.37,3.94-2.46,3.18-7,10c-5.81,8.72-6.36,11.51-6,14c0.39,2.75,1.91,4.79,3,6\r
	c11.33,7.33,22.67,14.67,34,22"/>\r
<path class="doubao-st" d="M215.5,333.5c0,4.67,0,9.33,0,14"/>\r
<path class="doubao-st" d="M281.5,345.5c0,4,0,8,0,12"/>\r
<path class="doubao-st" d="M206.5,340.5c15,10.67,30,21.33,45,32"/>\r
<path class="doubao-st" d="M293.5,348.5c-2.02,1.86-5.42,4.83-10,8c-6.43,4.45-11.82,6.98-14,8c-32.73,15.34-42.21,20.37-51,26\r
	c-11.56,7.4-15.64,12.01-18,15c-2.01,2.55-13.43,17.01-9,27c1.44,3.25,5.74,8.67,6,9c2.64,3.32,3.22,3.35,5,6\r
	c2.88,4.29,2.4,5.75,5,9c1.22,1.53,3.2,3.99,6,5c4.19,1.5,7.93-1.09,14-4c7.32-3.51,15.36-5.27,23-8c10.94-3.91,11.63-4.06,17-6\r
	c11.53-4.16,22.44-8.12,35-14c16.42-7.68,27.24-14.71,32-23c1.3-2.26,3.57-6.21,3-11c-0.26-2.19-0.71-5.98-3-9\r
	c-0.5-0.66-1.61-1.97-2-4c-0.28-1.45-0.06-2.61,0-3c0.62-3.84-1.07-10.64-3-15c-0.99-2.24-3.33-5.16-8-11c-3.13-3.91-4.73-5.9-7-8\r
	c-3.77-3.49-7.44-5.68-10-7"/>\r
<path class="doubao-st" d="M249.5,449.5c1.67,6.33,3.33,12.67,5,19"/>\r
<path class="doubao-st" d="M313.5,424.5c2.03,4.26,4.07,8.93,6,14c2.01,5.28,3.65,10.31,5,15"/>\r
<path class="doubao-st" d="M157.5,400.5c-5.25,1.8-10.97,4.08-17,7c-4.83,2.34-9.25,4.79-13.27,7.24c-4.46,2.73-4.78,9.08-0.6,12.22\r
	c19.47,14.61,63.1,41.66,123.87,41.54c62.14-0.12,106.13-28.58,124.25-42.42c3.58-2.74,4.38-7.8,1.81-11.5l-0.06-0.08\r
	c-1.65-2.37-5.13-7.26-11-11c-3.02-1.92-6.39-2.97-13-5c-4.44-1.36-9.45-2.74-15-4"/>\r
<path class="doubao-st" d="M280.5,251.5c-0.23,2.39-0.27,5.99,1,10c1.41,4.46,3.43,6.19,3,9c-0.28,1.86-1.67,4.42-7,7"/>\r
<path class="doubao-st" d="M239.5,295.5c2.53,0.99,4.63,1.62,6,2c8.65,2.39,15.33,2.14,19,4c0.32,0.16,1.42,0.75,3,1\r
	c1.49,0.24,2.64,0.05,3,0c4.2-0.58,9.86,2.11,17,2c1.6-0.02,4.03-0.2,7-1"/>\r
<path class="doubao-st" d="M254.5,310.5c2.71,1.11,6.07,2.22,10,3c5.06,1,9.52,1.15,13,1"/>\r
<path class="doubao-st" d="M178.5,208.5c1.21,2.06,3.22,4.74,6,5c2.41,0.22,4.36-1.48,5-2c6.92-5.67,22.17-6.15,26-6\r
	c15.86,0.63,27.17,19.8,29,23"/>\r
<path class="doubao-st" d="M189.5,211.5c-1.42,1.74-3.17,4.42-4,8c-2.42,10.4,5.05,18.94,6,20"/>\r
<path class="doubao-st" d="M303.5,237.5c0.6-1.05,10.37-17.58,26-18c5.15-0.14,12.28,1.43,18,5c4.75,2.96,7,5,7,5c2.87,2.59,4.33,4.74,7,5\r
	c1.63,0.16,3.04-0.45,4-1"/>\r
<path class="doubao-st" d="M357.5,232.5c-0.01,2.31-0.26,5.03-1,8c-2.13,8.54-7.11,14.2-10,17"/>\r
<path class="doubao-st" d="M218.5,206.14c-9.25-1.31-17.18,6.51-20,13.78c-3.8,9.79-0.11,23.12,9,26.59c10.16,3.87,24.26-5.6,26-17.72\r
	C234.86,219.27,228.67,207.58,218.5,206.14z"/>\r
<path class="doubao-st" d="M309.5,241.74c-0.29-10.5,8.08-22.18,18-21.73c9.76,0.44,17.01,12.43,16,22.72c-0.89,8.99-8.33,19.26-18,18.77\r
	C316.01,261.02,309.74,250.45,309.5,241.74z"/>\r
</svg>\r
`,zc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.dreamy_yoyo-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="dreamy_yoyo-st" d="M118.5,119.5c-2.05-3.26-5.5-5.22-9-5c-5.18,0.32-9.87,5.39-9,11c0.72,4.65,5.04,8.29,10,8\r
	c4.8-0.28,8.7-4.16,9-9"/>\r
<path class="dreamy_yoyo-st" d="M217.5,295.5c-3.12,4.24-9.52,14.2-10,28c-0.32,9.19,2.13,15.97,4,21c0,0,4.66,12.52,29,34\r
	c0.51,0.45,1.16,1.02,2,1c0.35-0.01,0.62-0.12,1,0c0.64,0.21,0.94,0.88,1,1c0.47,0.93,4.61,4.6,14,7c4.52,1.16,13.34,2.81,14,1\r
	c0.26-0.7-0.9-1.41-4-5c-0.38-0.44-1.59-1.96-4-5c-3.71-4.67-6.9-9.34-8-11c-6.74-10.18-11.08-22.42-10-23c0.36-0.19,1.2,0.97,3,3\r
	c0,0,2.87,3.23,12,11c24.13,20.53,56,32,56,32c6.68,2.4,13.44,4.37,22,4c6.41-0.28,11.59-1.76,15-3c2.36,0.72,5.79,1.58,10,2\r
	c6.09,0.61,15.77,1.58,24-4c5.31-3.6,9.44-9.54,9-14c-0.31-3.12-2-5-2-5c-1.12-1.24-2.4-1.75-3-2c0,0-3.52-1.48-9-6\r
	c-3.49-2.88-7.81-8.72-8-15c-0.32-10.46,10.9-19.95,21-22c9.07-1.84,17.59,2.26,18,1c0.26-0.79-3-2.77-6-4\r
	c-12.57-5.13-25.78,0.94-28,2c-14.28,6.83-20.97,20.44-21,25c0,0.32,0.01,3.19,0,8c-0.01,2.95-0.01,2.91,0,3\r
	c0.77,4.7,5.69,5.41,9,11c1.17,1.98,2.26,3.82,2,6c-0.64,5.43-9.16,9.4-16,10c-5.77,0.51-10.45-1.33-19-6\r
	c-12.99-7.09-19.49-10.63-28-18c-8.01-6.93-19.93-17.19-28-35c-6.43-14.17-7.78-27.07-8-35c7.65,0.93,19.94,3.44,33,11\r
	c9.05,5.24,15.6,11.25,20,16c0.11,0.2,0.4,0.7,1,1c0.72,0.36,1.53,0.26,2,0c1.01-0.57,1.11-2.34,1-4c-0.56-8.41-6.8-18.79-10-22\r
	c-0.02-0.02-0.04-0.04-2-2c-0.18-0.18-2.99-2.99-3-3c-13.99-13.99-22-17-22-17c-11.64-4.38-20.15,3.17-38,1c-2.42-0.29-6.31-1-9-4\r
	c-2.72-3.04-3.01-6.97-3-9c0-3,0-6,0-9c30.44,22.2,64.22,21.97,79,6c2.39-2.59,9.54-11.26,9-29c0.65,0.55,1.78,1.57,3,3\r
	c5.05,5.9,6.55,12.87,8,20c0.28,1.36,0.66,3.43,1,6c-0.03,0.22-0.18,1.81,1,3c0.76,0.76,1.66,0.95,2,1\r
	c6.13,0.61,12.25,1.23,18.38,1.84c1.03,0.1,1.97,0.65,2.59,1.48c6.2,8.41,11.86,14.54,16.04,18.68c0,0,2.86,2.84,8,7\r
	c0,0,6.15,4.98,15,8c0.73,0.25,2.04,0.65,3,0c0.61-0.41,1-1.2,1-2c0-0.12-0.02-1.27-1-2c-4.56-3.39-7.84-6.64-10-9\r
	c-5.37-5.85-8.98-11.98-16-24c-1.34-2.29-2.47-4.29-3.35-5.83c-0.41-0.72-1.17-1.17-2-1.17l-12.91,0c-1.02,0-1.9-0.69-2.13-1.68\r
	c-1.12-4.71-2.86-10.3-5.62-16.32c-3.49-7.63-7.54-13.62-11-18c5.26,2.9,9.23,5.78,12,8c5.49,4.41,12.78,11.45,14,13\r
	c0.09,0.12,0.43,0.56,1,1c0.83,0.65,1.65,0.9,2,1c18.78,5.54,28,7,28,7c4.44,0.7,8.29,1.29,11.34,1.75c1.09,0.16,2.12,0.61,3,1.28\r
	c6.09,4.64,11.47,8.28,15.66,10.97c10.79,6.92,16.87,9.57,24,10c0.7,0.04,6.68,0.37,7-1c0.41-1.76-9.07-3.78-21-12\r
	c-5.78-3.98-9.87-7.85-12-10c-2.51-2.52-4.53-4.88-6.1-6.85c-0.59-0.75-1.43-1.25-2.37-1.42c-3.18-0.58-6.35-1.15-9.53-1.73\r
	c-6.78-1.23-13.56-2.47-20.34-3.7c-1.08-0.2-2.06-0.74-2.81-1.53c-1.81-1.9-3.75-3.83-5.85-5.77c-5.17-4.79-10.26-8.75-15-12\r
	c5.15,2,10.91,4.6,17,8c4.85,2.71,9.15,5.51,12.9,8.2c0.72,0.52,1.57,0.83,2.45,0.89c4.53,0.31,9.08,0.61,13.64,0.91\r
	c4.95,0.32,9.88,0.63,14.8,0.93c0.78,0.05,1.54,0.33,2.17,0.79c3.9,2.83,7.38,4.87,10.03,6.28c7.15,3.81,11.31,4.69,13,5\r
	c3.14,0.57,7.73,0.95,8,0c0.15-0.52-1.05-1.28-6-4c-8.17-4.49-8.17-4.21-11-6c-4.72-2.98-8.13-5.89-9-7c-0.08-0.11-0.42-0.55-1-1\r
	c-0.72-0.56-1.45-0.84-2-1c-7.29-0.32-14.59-0.63-21.88-0.95c-0.73-0.03-1.43-0.25-2.05-0.65c-15.77-10-37.12-20.86-61.06-25.4\r
	c-2.79-0.53-11.18-2.03-22-1c-22.57,2.14-32.57,13.08-34,16c-1.28,2.62-1,5-1,5c0.18,1.52,0.78,2.59,1,3c2,3.64,6.56,11.96,8,19\r
	c0.27,1.33,2.05,10.04-2,13c-1.13,0.83-2.37,0.93-3,1c-15.67,1.7-30-3-30-3c-5.7-1.87-13.42-4.92-22-10c0.22-0.26,3.61-4.38,2-9\r
	c-0.74-2.14-2.22-3.42-3-4c13.56-4.51,23.77-12.18,24-20c0.1-3.35-1.57-8.65-2-10c-1.3-4.13-2.95-7.46-4.34-9.88\r
	c-0.38-0.67-0.26-1.51,0.29-2.05c5.63-5.58,9.49-10.97,12.05-15.07c4.61-7.39,6.35-12.79,9-21c1.24-3.84,1.8-6.26,1-9\r
	c-1.3-4.44-5.31-6.82-9-9c-2.79-1.65-7.65-4.03-14.5-4.94c-0.28-0.04-0.5-0.28-0.5-0.56l0-9.5c-0.03-1-0.22-2.47-1-4\r
	c-0.62-1.21-1.79-2.81-6-5c-2.48-1.29-6.67-3.41-13-4c-2.04-0.19-8.43-0.78-9,1c-0.38,1.19,2.08,3.13,7,7\r
	c1.19,0.94,2.25,1.73,3.1,2.35c0.5,0.36,0.6,1.06,0.25,1.56c-2.72,3.86-4.35,7.42-5.35,10.09c-1.41,3.77-2.22,5.94-2,9\r
	c0.38,5.23,3.48,9.11,5,11c1.06,1.32,2.12,2.37,3.02,3.17c0.5,0.44,0.47,1.22-0.05,1.64c-1.94,1.55-3.94,3.27-5.97,5.18\r
	c-1.43,1.35-2.76,2.69-4,4c-2.1-0.78-4.8-1.57-8-2c-3.27-0.44-6.17-0.39-8.51-0.17c-0.87,0.08-1.66-0.46-1.9-1.3\r
	c-2.01-6.92-4.49-12.48-6.59-16.53c-3.75-7.25-7.51-12.13-9-14c-4.54-5.68-6.8-8.52-10-10c-2.16-1-5.6-2-21,1\r
	c-4.24,0.83-9.56,1.99-15.66,3.63c-0.78,0.21-1.59-0.15-1.95-0.87c-0.66-1.33-1.46-2.94-2.39-4.77c-1.87-3.66-2.27-4.28-3-5\r
	c-2.82-2.77-6.47-2.98-7-3c-1.93-0.08-3.33,0.41-5,1c-0.99,0.35-3.14,1.19-7,4c-1.88,1.37-4.34,3.33-7,6c-0.82,0.27-1.27,1.18-1,2\r
	s1.18,1.27,2,1c4.33-1,8.67-2,13-3c0.13-0.06,1.05-0.47,2,0c0.61,0.3,0.9,0.81,1,1c1.09,6.32,2.09,11.9,3,17\r
	c0.23,1.28,0.57,3.19,2,5c1.19,1.49,3.06,2.85,8,4c2.96,0.69,7.36,1.39,12.91,1.07c0.69-0.04,1.37,0.21,1.86,0.69l1.23,1.23\r
	l1.27,1.27c0.48,0.48,0.8,1.08,0.93,1.74c0.96,4.65,2.44,10.1,4.8,15.99c2.03,5.08,4.3,9.46,6.46,13.11\r
	c0.33,0.55,0.32,1.24-0.01,1.79c-1.91,3.16-3.37,5.94-4.45,8.1c-2.18,4.37-2.72,6.18-3,8c0,0-0.47,3.06,0,6\r
	c0.57,3.57,3.27,8.43,14,15c5.66,3.47,14.64,8.07,27,11c-0.59,0.68-1.97,2.49-2,5c-0.04,3.34,2.34,6.54,6,8\r
	c-2.33,3.67-4.67,7.33-7,11"/>\r
<path class="dreamy_yoyo-st" d="M190.5,254.5c8.97,3.27,13.01,4.01,15,4c0.51,0,2.3-0.07,4,1c1.13,0.71,1.75,1.62,2,2\r
	c3.57,5.38,9.76,18.88,18,26c0.65,0.56,0.9,0.73,6,4c0,0,35.09,22.52,39,34c0.13,0.38,0.49,1.44,0,2c-0.4,0.45-1.27,0.46-3,0\r
	c-3.33-0.88-5-2-5-2c-5.74-3.83-33.97-20.87-41-25c-2.99-1.76-4.97-2.83-8-5c-8.19-5.85-12.98-11.73-14-13\r
	c-2.53-3.16-5.76-7.79-8.53-13.95c-0.25-0.55-0.74-0.97-1.33-1.11c-13.55-3.23-23.33-5.57-25.14-5.94c-0.3-0.06-1.25-0.25-2-1\r
	c-0.78-0.78-0.95-1.75-1-2c-0.62-3.06-6.56-14.82-9-19c-2.78-4.77-5.85-7.85-12-14c-3.85-3.85-7.34-6.85-10-9\r
	c3.98,6.39,8.08,13.73,12,22c3.89,8.23,6.96,16.03,9.38,23.16c0.41,1.2,1.17,2.25,2.19,3c9.05,6.64,18.1,13.27,27.15,19.91\r
	c0.8,0.58,1.28,1.5,1.29,2.49c0.1,7.87,0.72,18.7,2.99,31.44c0.78,4.41,1.51,8.48,3,14c6.77,25.04,10.16,37.56,11,40\r
	c0.31,0.91,1.23,3.52,0,5c0,0-0.65,0.79-2,1c-7.83,1.25-20-13-20-13c-8.35-9.78-13.55-19.68-18-30\r
	c-3.68-8.53-8.05-20.16-11.64-34.52c-0.24-0.96-0.76-1.83-1.51-2.48c-4.59-4-9.21-8-13.86-12c-4.68-4.03-9.34-8.03-14-12\r
	c-0.56-0.61-1.37-1.61-2-3c-0.86-1.89-0.96-3.53-1-4c-0.45-5.44-6.08-18.81-7-21c-1.83-4.34-4.41-9.84-8-16\r
	c2.67,11.67,5.33,23.33,8,35c0.14,1.3,0.28,3.42,0,6c-0.27,2.49-0.8,4.31-1,5c-1.06,3.68-3.35,12.59-6.52,25.12\r
	c-0.31,1.21-0.17,2.49,0.39,3.61l8.13,16.27c0.72,1.34,1.63,3.39,2,6c0.57,3.97-0.4,7.11-1,9c-4.04,12.69-6.06,19.03-7,21\r
	c-6.08,12.76-17.06,31.31-20,30c-1.26-0.56-0.56-4.58,0-8c1.66-10.07,3.73-24.54,5.81-45.07c0.12-1.22-0.3-2.45-1.14-3.34\r
	c-6.55-6.87-13.11-13.73-19.66-20.6c-0.27-0.32-0.78-1-1-2c-0.19-0.87-0.09-1.6,0-2c2.01-8.7,3.73-18.05,5-28\r
	c0.39-3.05,0.72-6.05,1-9c-6.33-5.33-12.67-10.67-19-16c0.1,3.63,0.09,6.98,0,10c-0.05,1.78-0.19,5.44-2,9c-0.43,0.85-1.05,1.86-2,2\r
	c-0.3,0.04-1.37,0.1-3-2c-13.35-17.21-13-38-13-38c0.09-5.14,0.13-7.71,1-10c1.92-5.05,6.58-10.54,31-19c15.03-5.21,22.54-7.81,33-9\r
	c0,0,25.47-2.89,41,6c3.64,2.09,6,5,6,5c0.94,1.16,1.58,2.23,2,3c6.26,5.45,13.1,12.07,20,20\r
	C179.87,238.96,185.78,247.15,190.5,254.5z"/>\r
<path class="dreamy_yoyo-st" d="M152.5,210.5c-2.51-1.08-6.34-2.77-11-5c-4.81-2.3-8.08-4.01-9-3c-0.63,0.69,0.42,2,1,6\r
	c0.43,2.97,0.64,4.46,0,5c-1.7,1.42-6.9-4.08-17-8c-2.71-1.05-4.47-1.37-8-2c-4.53-0.81-5.45-0.45-6,0c-1.34,1.09-0.8,2.89-1,8\r
	c-0.09,2.43-0.38,9.72-2,10c-0.63,0.11-1.03-0.91-2-2c-2.31-2.59-5.05-2.5-13-4c-7.24-1.37-8.73-2.15-10-1c-1.34,1.22-0.85,3.15-1,7\r
	c-0.17,4.22-1,7.92-2,11c2.05,8.22,3.8,17.24,5,27c0.42,3.42,0.75,6.75,1,10"/>\r
<path class="dreamy_yoyo-st" d="M56.5,272.5c2.53,2.31,5.2,4.65,8,7c3.4,2.85,6.74,5.52,10,8"/>\r
<path class="dreamy_yoyo-st" d="M105.5,300.5c6.76,0.74,14.48,1.18,23,1c8.54-0.18,16.27-0.97,23-2"/>\r
<path class="dreamy_yoyo-st" d="M186.5,285.5c1.56-0.8,3.25-1.79,5-3c2.91-2.01,5.22-4.12,7-6"/>\r
<path class="dreamy_yoyo-st" d="M179.5,280.5c2.23-1.45,4.58-3.11,7-5c3.03-2.38,5.69-4.75,8-7"/>\r
<path class="dreamy_yoyo-st" d="M111.5,277.5c2.27,1.87,5.6,4.18,10,6c6.09,2.52,11.55,2.98,15,3"/>\r
<path class="dreamy_yoyo-st" d="M212.5,263.5c-0.09-0.93,0.34-1.74,1-2c0.4-0.16,0.8-0.07,1,0c1.31,0.84,3.11,2.13,5,4c1.42,1.4,3.01,2.98,4,5\r
	c2.1,4.28,0.73,8.99,0,11"/>\r
<path class="dreamy_yoyo-st" d="M99.5,221.5c2,4,4,8,6,12"/>\r
<path class="dreamy_yoyo-st" d="M132.5,213.5c1,1.33,2,2.67,3,4"/>\r
<path class="dreamy_yoyo-st" d="M71.5,233.5c-1.97-1.73-5.65-4.5-11-6c-3.61-1.01-6.77-1.11-9-1"/>\r
<path class="dreamy_yoyo-st" d="M344.5,202.5c1.93,0.54,4.39,1.45,7,3c3.87,2.3,6.45,5.05,8,7c-2.64-1.38-5.99-2.85-10-4\r
	c-5.05-1.44-9.54-1.9-13-2c0.92,1.06,2.12,2.72,3,5c0.58,1.52,0.86,2.9,1,4c-3.08-0.75-6.42-1.44-10-2c-2.79-0.44-5.46-0.77-8-1\r
	c1.31,1.4,2.69,3.06,4,5c3.5,5.18,5.16,10.27,6,14c-2.81-1.97-6.48-4.16-11-6c-6.65-2.71-12.66-3.67-17-4"/>\r
<path class="dreamy_yoyo-st" d="M340.5,215.5c1.67,1.67,3.33,3.33,5,5"/>\r
<path class="dreamy_yoyo-st" d="M359.5,212.5c3,2,6,4,9,6"/>\r
<path class="dreamy_yoyo-st" d="M212.5,230.5c-2.37-0.83-5.66-2.31-9-5c-4.3-3.46-6.8-7.43-8.2-10.26c-0.52-1.05-0.4-2.3,0.28-3.25\r
	c2.97-4.16,5.95-8.33,8.92-12.49"/>\r
<path class="dreamy_yoyo-st" d="M208.5,234.5c0.98-1.14,2.6-2.73,5-4c3.75-1.99,7.29-2.08,9-2"/>\r
<path class="dreamy_yoyo-st" d="M237.5,230.5c0.59,0.05,1.77,0.22,3,1c1.07,0.68,1.69,1.51,2,2"/>\r
<path class="dreamy_yoyo-st" d="M239.5,230.5c3.19-0.45,10.59-1.95,17-8c2.27-2.14,3.9-4.37,5.06-6.31c0.63-1.05,0.88-2.27,0.71-3.48\r
	c-0.19-1.33-0.44-2.74-0.77-4.21c-0.57-2.61-1.27-4.95-2-7"/>\r
<path class="dreamy_yoyo-st" d="M224.5,185.5c0.86,2.29,1.72,5.34,2,9c0.09,1.18,0.11,2.29,0.09,3.32c-0.02,0.96-0.77,1.75-1.73,1.85\r
	c-6.55,0.66-19.82,1.78-20.36-0.17c-0.03-0.09-0.23-0.96,0-2c0.22-0.99,0.73-1.66,1-2c4.08-5.13,8-8,8-8c1.94-1.42,4.61-3.21,8-5"/>\r
<path class="dreamy_yoyo-st" d="M251.5,197.5c0.28-3.3,0.25-6.32,0.08-8.96c-0.04-0.68-0.28-1.33-0.68-1.88c-2.01-2.74-4.75-5.96-8.39-9.15\r
	c-3.16-2.77-6.25-4.84-8.91-6.39c-0.67-0.38-1.49-0.36-2.11,0.08c-1.51,1.06-3.24,2.47-4.97,4.31c-1.92,2.05-3.33,4.08-4.34,5.81\r
	c-0.41,0.7-0.29,1.58,0.28,2.15c2.91,2.93,6.25,5.99,10.06,9.04c5.98,4.8,11.79,8.54,16.98,11.44c0.5,0.28,1.14-0.02,1.24-0.59\r
	C251.05,201.56,251.32,199.6,251.5,197.5z"/>\r
<path class="dreamy_yoyo-st" d="M251.5,187.5c1.62,1.13,3.95,3.04,6,6c1.55,2.24,2.46,4.38,3,6c0.03,0.84-0.35,1.63-1,2\r
	c-0.92,0.52-2.3,0.16-3-1c-0.47-1.18-1.11-2.55-2-4c-1-1.64-2.06-2.97-3-4"/>\r
<path class="dreamy_yoyo-st" d="M221.5,233.5c-0.55-4.93,3.23-9.74,8-10c5.22-0.28,9.4,5.01,9,10c-0.29,3.65-3.06,7.35-7,8\r
	C226.78,242.28,222.05,238.43,221.5,233.5z"/>\r
<path class="dreamy_yoyo-st" d="M211.5,247.5c2.33,0,4.67,0,7,0c0.3,0.24,0.66,0.56,1,1c0.58,0.75,0.86,1.5,1,2c0.71,0.48,5.19,3.4,11,2\r
	c5.95-1.43,8.61-6.26,9-7c0.67,0,1.33,0,2,0"/>\r
<path class="dreamy_yoyo-st" d="M213.5,261.5c2.33-3.67,4.67-7.33,7-11"/>\r
<path class="dreamy_yoyo-st" d="M238.5,248.5c1.33,1.67,2.67,3.33,4,5"/>\r
<path class="dreamy_yoyo-st" d="M226.5,228.5c1.45,0.92,3.21,2.21,5,4c1.21,1.21,2.65,2.86,4,5"/>\r
<path class="dreamy_yoyo-st" d="M226.5,237.5c1.56-1.32,3.28-2.97,5-5c1.17-1.39,2.17-2.74,3-4"/>\r
<path class="dreamy_yoyo-st" d="M202.5,202.5c0.08,3.28,0.66,12.67,6,18c1.14,1.13,3.45,3.45,6,3c1.57-0.27,2.56-1.47,3-2\r
	c4.14-4.98,2.26-19.1,2-21"/>\r
<path class="dreamy_yoyo-st" d="M243.5,200.5c-1.03,2.5-2.34,6.27-3,11c-0.16,1.13-1.64,12.13,1,13c1.74,0.57,4.69-3.46,6-6\r
	c1.46-2.84,1.74-5.49,2-8c0.3-2.91,0.17-5.34,0-7"/>\r
<path class="dreamy_yoyo-st" d="M229.5,164.5c3.99,1.6,9.46,4.33,15,9c7.63,6.44,11.83,13.56,14,18"/>\r
<path class="dreamy_yoyo-st" d="M233.5,108.5c1.84-5.29-0.55-10.92-5-13c-5.54-2.59-12.76,1.05-14,7c-1.3,6.24,4.66,11.79,10,12\r
	c2.7,0.11,4.86-1.17,6-2"/>\r
<path class="dreamy_yoyo-st" d="M221.5,251.5c3.33,3.33,6.67,6.67,10,10c-1,2-2,4-3,6c2,1.33,4,2.67,6,4c0.2,2.95,0.25,6.31,0,10\r
	c-0.2,2.92-0.56,5.6-1,8"/>\r
<path class="dreamy_yoyo-st" d="M238.5,248.5c-0.48,2.15-1.12,4.5-2,7c-0.63,1.81-1.31,3.48-2,5c1.67,1.33,3.33,2.67,5,4c-0.67,2-1.33,4-2,6\r
	c1.21,0.52,3.07,1.43,5,3c1.57,1.28,2.49,2.41,3,3c4.67,5.38,12.17,7.75,13,8c3.37,1.03,5.94,0.99,9,1c0,0,9.72,0.04,24,1\r
	c6.16,0.41,15.08,2.08,26,8"/>\r
<path class="dreamy_yoyo-st" d="M238.5,293.5c0.1-2.5,0.11-5.18,0-8c-0.15-3.98-0.52-7.66-1-11c0.66,0.36,1.77,1.01,3,2c1.66,1.34,2.67,2.6,3,3\r
	c2.73,3.32,8.66,10.53,16,12c1.63,0.32,2.66,0.24,7,1c2.12,0.37,3.85,0.74,5,1"/>\r
<path class="dreamy_yoyo-st" d="M232.5,304.5c-1.01,10.08-1.36,23.49,1,39c2.24,14.75,6.26,26.92,10,36"/>\r
<path class="dreamy_yoyo-st" d="M239.5,308.5c0.21,5.3,0.79,11.37,2,18c1.33,7.26,3.14,13.63,5,19"/>\r
<path class="dreamy_yoyo-st" d="M354.5,391.5c-7.01-2.07-15.26-5.19-24-10c-16.71-9.2-28.04-20.63-35-29"/>\r
<path class="dreamy_yoyo-st" d="M227.5,252.5c1.67,1.67,3.33,3.33,5,5c0.67-2,1.33-4,2-6"/>\r
<path class="dreamy_yoyo-st" d="M233.5,262.5c-0.33,1.33-0.67,2.67-1,4c1,1,2,2,3,3c0.33-1.33,0.67-2.67,1-4\r
	C235.5,264.5,234.5,263.5,233.5,262.5z"/>\r
<path class="dreamy_yoyo-st" d="M300.5,246.5c0.06,0.46,0.49,3.7,2,4c0.48,0.09,0.92-0.14,2-1c4.02-3.22,6-6,6-6c0.87-1.23,1.3-2.02,2-2\r
	c0.61,0.02,0.87,0.64,2,2c0.91,1.09,1.6,1.73,3,3c2.22,2.03,2.75,2.03,3,2c0.33-0.04,0.72-0.21,2-2c1.37-1.92,2.2-3.08,3-5\r
	c0.56-1.35,0.65-1.97,1-2c0.68-0.06,1.45,2.11,2,4"/>\r
<path class="dreamy_yoyo-st" d="M134.5,134.5c0.2-1.25,0.59-2.24,1-3c3.05-5.64,11.08-5.97,12-6"/>\r
<path class="dreamy_yoyo-st" d="M153.5,124.5c-0.42,0.32-6.65,5.2-6,13c0.5,6.02,4.88,11.24,11,13"/>\r
<path class="dreamy_yoyo-st" d="M235.5,125.5c0.8-0.62,5.09-3.84,11-3c7.32,1.04,10.69,7.39,11,8"/>\r
<path class="dreamy_yoyo-st" d="M238.5,152.5c-0.7-3.05-0.4-5.43,0-7c1.8-7.13,9.33-12.52,19-14"/>\r
</svg>\r
`,Bc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.duoer-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="duoer-st" d="M119.9,245.95c-0.23-39.97-0.46-79.93-0.69-119.9c0.62-3.14,4.77-22.52,22.18-31.88\r
	c12.38-6.65,25.23-4.88,30.49-4.16c8.84,1.22,15.06,4.18,18.02,5.54c17.81,8.19,41.81,19.22,63.76,18.02\r
	c14.8-0.81,29.81-7.24,58.22-19.41c3.1-1.33,7.52-3.28,13.86-4.16c5.22-0.72,24.1-2.44,38.81,11.09\r
	c10.52,9.67,13.13,21.82,13.86,26.34c0,38.81,0,77.62,0,116.43c15.71,28.65,31.42,57.29,47.13,85.94\r
	c5.11,9.62,4.35,14.96,2.77,18.02c-9.34,18.14-70.98,1.81-77.62,0c-7.81,7.94-19.68,18.44-36.04,27.72\r
	c-9.47,5.37-36.48,20.69-69.31,20.79c-53.96,0.17-90.45-40.86-97.03-48.51c-19.23,7.48-35.32,8.57-45.74,8.32\r
	c-12.69-0.3-27.52-0.66-31.88-9.7c-3.68-7.62,2.02-17.43,4.16-20.79C89.87,299.08,104.89,272.52,119.9,245.95z"/>\r
<path class="duoer-st" d="M151.09,175.95c0,14.32,0,28.65,0,42.97c0.38,2.75,1.67,9.28,6.93,15.25c7.35,8.34,17.11,9.49,19.41,9.7\r
	c6.01,0,12.01,0,18.02,0c2.63-0.21,10.02-1.14,16.63-6.93c9.05-7.93,9.63-18.84,9.7-20.79c0-12.01,0-24.03,0-36.04\r
	c0.1-1.66,0.54-11.37-6.93-19.41c-7.69-8.27-17.79-8.33-19.41-8.32c-6.47,0-12.94,0-19.41,0c-1.8,0.1-12.31,0.87-19.41,9.7\r
	C152.26,167.54,151.34,173.36,151.09,175.95z"/>\r
<path class="duoer-st" d="M174.65,192.58c6.33,3.05,13.46-0.18,15.25-5.54c1.45-4.36-0.71-9.82-5.54-12.47\r
	c0.68-0.42,6.84-4.12,13.86-1.39c5.2,2.03,8.92,6.82,9.7,12.47c0,7.85,0,15.71,0,23.56c-0.86,8.16-7.36,14.56-15.25,15.25\r
	c-8.43,0.74-16.36-5.22-18.02-13.86C174.65,204.6,174.65,198.59,174.65,192.58z"/>\r
<path class="duoer-st" d="M274.67,176.26c0,14.32,0,28.65,0,42.97c0.38,2.75,1.67,9.28,6.93,15.25c7.35,8.34,17.11,9.49,19.41,9.7\r
	c6.01,0,12.01,0,18.02,0c2.63-0.21,10.02-1.14,16.63-6.93c9.05-7.93,9.63-18.84,9.7-20.79c0-12.01,0-24.03,0-36.04\r
	c0.1-1.66,0.54-11.37-6.93-19.41c-7.69-8.27-17.79-8.33-19.41-8.32c-6.47,0-12.94,0-19.41,0c-1.8,0.1-12.31,0.87-19.41,9.7\r
	C275.84,167.85,274.91,173.67,274.67,176.26z"/>\r
<path class="duoer-st" d="M289.01,192.89c6.33,3.05,13.46-0.18,15.25-5.54c1.45-4.36-0.71-9.82-5.54-12.47\r
	c0.68-0.42,6.84-4.12,13.86-1.39c5.2,2.03,8.92,6.82,9.7,12.47c0,7.85,0,15.71,0,23.56c-0.86,8.16-7.36,14.56-15.25,15.25\r
	c-8.43,0.74-16.36-5.22-18.02-13.86C289.01,204.91,289.01,198.9,289.01,192.89z"/>\r
<path class="duoer-st" d="M223.17,232.78c5.84,2,14.99,4.36,26.34,4.16c9.97-0.18,18.08-2.27,23.56-4.16\r
	c-2.53-9.53-9.35-17.15-18.02-19.41C242.82,210.2,228.32,218.06,223.17,232.78z"/>\r
<path class="duoer-st" d="M232.87,235.55c0.22,9.27,7.83,16.62,16.63,16.63c9.32,0.01,17.2-8.21,16.63-18.02"/>\r
<path class="duoer-st" d="M266.14,235.55c0.84,1.5,15.34,26.45,44.36,27.72c19.03,0.84,35.2-8.91,44.36-20.79\r
	c9.67-12.55,10.32-25.92,11.09-41.58c0.51-10.46,0.96-22.62-5.54-36.04c-4.99-10.3-11.98-17.01-16.63-20.79\r
	c0.27-3.58,0.28-8.99-1.39-15.25c-1.16-4.35-1.99-7.48-4.16-8.32c-3.56-1.37-9.57,3.9-15.25,12.47c0.17-1.67,0.3-4.07,0-6.93\r
	c-0.24-2.33-1.27-12.11-5.54-13.86c-3.33-1.36-7.84,2.45-15.25,9.7c-20.36,19.92-22.82,26.85-34.65,33.27\r
	c-4.02,2.18-10.58,5.64-19.41,5.54c-10.11-0.11-17.54-4.81-20.79-6.93c-14.81-9.64-26.53-29.08-37.42-40.2\r
	c-0.95-0.96-3.15-3.15-5.54-2.77c-3.04,0.48-4.73,4.83-5.54,6.93c-3.03,7.81-0.79,12.92-2.77,13.86\r
	c-3.19,1.51-10.04-11.31-15.25-9.7c-1.94,0.6-2.78,2.93-4.16,6.93c-2.75,7.99-1.32,11.66-2.77,16.63\r
	c-2.06,7.04-7.46,8.39-12.47,13.86c-7.6,8.3-7.91,19.1-8.32,33.27c-0.53,18.6-1,35.21,11.09,49.9c9.63,11.7,25.86,20.51,44.36,19.41\r
	c27.68-1.65,41.8-24.37,42.97-26.34"/>\r
<path class="duoer-st" d="M200.99,304.86c12.47,0,24.95,0,37.42,0c-0.17,0.56-3.77,11.43-13.86,13.86\r
	C215.47,320.9,205.03,315.29,200.99,304.86z"/>\r
<path class="duoer-st" d="M258.51,304.86c12.94,0,25.87,0,38.81,0c-0.18,0.56-3.91,11.43-14.37,13.86\r
	C273.53,320.9,262.7,315.29,258.51,304.86z"/>\r
<path class="duoer-st" d="M230.79,332.58c11.55,0,23.1,0,34.65,0c-0.16,0.56-3.49,11.43-12.83,13.86\r
	C244.2,348.63,234.53,343.01,230.79,332.58z"/>\r
<path class="duoer-st" d="M191.29,382.48c-0.98,0.48-7.11,3.6-8.32,9.7c-1.38,6.96,4.12,15.36,13.86,18.02c11.09,0,22.18,0,33.27,0\r
	c0.82-0.06,5.13-0.45,8.32-4.16c3.52-4.1,2.88-8.98,2.77-9.7"/>\r
<path class="duoer-st" d="M304.95,381.09c6.77,2.86,10.72,9.8,9.7,16.63c-0.87,5.81-5.21,10.7-11.09,12.47c-11.55,0-23.1,0-34.65,0\r
	c-1.57-0.32-6.04-1.46-9.7-5.54c-2.89-3.23-3.83-6.69-4.16-8.32"/>\r
</svg>\r
`,Vc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.feifeidu-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="feifeidu-st" d="M312.5,372.5c-12.47,1.58-20.19,5.03-25,8c-1.87,1.15-4.94,3.24-9,3c-5.1-0.31-7.08-4.01-11-6\r
	c-8.22-4.17-20.52,1.46-27,7c-12.62,10.78-11.53,28.35-11,37c0.43,7.08,1.47,24.1,13,31c5.19,3.11,11.54,3.59,17,4\r
	c3.12,0.24,8.87,0.41,16-1c10.64-2.11,12.45-5.4,24-10c15.02-5.99,34.73-9.49,44-13c1.56-0.59,3.67-1.5,6-3c0,0,2.64-1.7,5-4\r
	c18.05-17.59,24-47,24-47c5.73-28.33-0.23-51.92-5-70c-6.23-23.6-15.03-40.66-25-60c-12.23-23.73-20.32-30.25-29-52\r
	c-3.46-8.68-6.31-18.12-12-37c0,0-0.64-2.11-3-13c-1.41-6.5-2.53-9.68-1-13c1.33-2.88,3.84-4.33,5-5c14.77-8.57,29.31-17,38-25\r
	c4.64-4.27,13.31-12.25,14-24c0.11-1.79,0.57-12.86-7-19c-0.76-0.62-4.8-3.78-12-4c-23.82-0.73-51.58,31.72-64,43\r
	c-0.42,0.38-1.43,1.29-3,2c-2.35,1.07-4.6,1.1-6,1c-1.86-0.05-31.1-0.92-35-4c-1.83-1.44-2-3-2-3c-0.16-1.43,0.71-2.6,1-3\r
	c2.3-3.18,9.96-15.58,12-24c0.58-2.41,2.54-10.49-2-16c-4.09-4.96-11.11-4.99-13-5c-9.1-0.04-15.65,5.83-18,8\r
	c-3.14,2.89-10.26,10.5-16,46c-3,18.57-1.33,18.18-4,28c-4.14,15.21-10.89,26.21-17,36c-12.78,20.48-19.03,22.31-21,34\r
	c-2.04,12.11,2.46,23.32,6,29c12.68,20.32,49.14,27.34,89,14"/>\r
<path class="feifeidu-st" d="M300.5,254.5c-1.28,7.6-4.21,12.65-7,16c-6.99,8.4-17.68,11.6-29,15c-9.34,2.8-13.22,2.72-19,7\r
	c-2.57,1.9-8.2,6.19-9,13c-0.53,4.51,1.05,10.15,4,11c2.59,0.74,5.72-2.38,6-2c0.26,0.35-3.07,2.08-4,5c-1.38,4.35,2.98,10.04,7,13\r
	c4.49,3.31,9.53,3.94,14,4c3.51,0.05,18.59-0.11,43-15c9.98-6.09,15.3-9.33,21-16c9.53-11.15,12.76-23.25,14-30"/>\r
<path class="feifeidu-st" d="M172.5,283.5c4.81-5.95,14.18-15.64,29-21c6.18-2.24,28.13-10.17,47,2c10.22,6.59,15,16.15,17,21"/>\r
<path class="feifeidu-st" d="M284.5,332.5c1.19,4.16,2.22,9.62,2,16c-0.57,16.68-9.23,28.45-13,33"/>\r
<path class="feifeidu-st" d="M143.5,328.5c-1.5,5.47-3.09,13.4-3,23c0.07,7.45,1.22,22.88,10,39c14.67,26.94,40.31,36.8,49,40\r
	c13.02,4.78,24.53,5.84,32,6"/>\r
<path class="feifeidu-st" d="M141.5,359.5c1.14,6.06,3.52,15.16,9,25c3.22,5.79,13.6,23.8,36,34c18.59,8.47,35.61,7.07,43,6"/>\r
<path class="feifeidu-st" d="M191.5,248.5c-2.07,1.43-5.18,3.54-9,6c-17.55,11.32-20.87,11.29-30,18c-14.37,10.56-19.81,20.69-21,23\r
	c-2.72,5.28-5.59,11.04-4,18c1.51,6.61,6.54,12.04,12,14c1.31,0.47,4.9,1.71,8,0c1.31-0.73,3.15-2.33,3-4c-0.15-1.65-2.18-2.76-2-3\r
	c0.16-0.22,1.54,1.16,3,1c1.05-0.11,1.78-0.97,4-5c3.25-5.89,3.32-7.02,3-8c-0.55-1.7-2.21-2.75-2-3c0.21-0.25,1.51,1.09,3,1\r
	c1.12-0.07,2.04-0.91,4-4c3.11-4.9,4.67-7.42,5-11c0.12-1.27,0.06-2.32,0-3c5-7,10-14,15-21"/>\r
<path class="feifeidu-st" d="M141.5,365.5c-1.33,0.55-3.15,1.46-5,3c-2.58,2.14-3.34,3.93-5,4c-1.85,0.08-3.29-2.05-4-3\r
	c-4.24-5.69-12.24-9.27-17-10c-7.57-1.15-15.99,3.55-20,10c-2.2,3.54-2.57,6.78-3,11c-1.48,14.5,3.54,26.2,7,34\r
	c3.83,8.65,5.75,12.97,10,16c7.37,5.24,17.17,5.09,23,5c5.2-0.08,9.06-0.82,10-1c8.43-1.6,23.97-3.68,55-6"/>\r
<path class="feifeidu-st" d="M380.5,366.5c5.08-5.99,8.16-11.35,10-15c10.4-20.69,13-27,13-27c0.39-0.94,1.43-3.52,4-5\r
	c0.25-0.15,2.61-1.47,5-1c4.24,0.84,6.28,6.88,7,9c4.13,12.21-2.59,46.8-31,71c-9.2,7.84-18.14,12.42-24,15"/>\r
<path class="feifeidu-st" d="M209.5,216.5c-2.97,2.28-9.05,6.96-18,7c-1.31,0.01-13.37-0.14-21-10c-1.34-1.73-7.29-9.43-5-18\r
	c3.17-11.86,19.25-14.72,21-15c15.35-2.5,34.16,6.75,35,18C222.12,206.8,212.8,213.97,209.5,216.5z"/>\r
<path class="feifeidu-st" d="M198.5,135.5c1.32-6.94,7.96-11.84,15-11c6.8,0.81,11.81,6.69,12,13c0.25,8.21-7.72,15.43-16,14\r
	C202.41,150.27,197.07,143.04,198.5,135.5z"/>\r
<path class="feifeidu-st" d="M241.5,145.5c1.42-7.05,8.81-11.85,16-11c7.65,0.9,14.11,8.08,13,16c-1.03,7.35-8.15,12.31-15,12\r
	C247.07,162.12,239.83,153.81,241.5,145.5z"/>\r
</svg>\r
`,Hc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.fool-st{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\r
</style>\r
<path class="fool-st" d="M120,457c2.21-10.11-0.65-15.82-2-18c-4.94-7.99-15.84-11.19-22-13c-6.88-2.02-10.11-1.62-14-5\r
	c-3.57-3.09-6.8-8.56-6-12c1.22-5.23,12.82-10.32,60-9"/>\r
<path class="fool-st" d="M121,399c0.63-2.13,1.66-6.75,0-12c-2.9-9.18-13.22-13.16-15-14c-18.38-8.7-66.4-112-19-206\r
	C129.58,82.56,219.57,64.31,232,62c13.76-2.55,103.24-19.15,165,41c43.78,42.64,48.2,99.08,50,122c1.59,20.32,4.31,62.17-20,106\r
	c-16.9,30.47-39.56,48.74-53,58"/>\r
<path class="fool-st" d="M375,405c2.43-1.75,6.13-4.09,11-6c10.67-4.17,19.83-3.46,25-3c7.47,0.67,17.93,1.6,19,6\r
	c1.36,5.56-12.87,14.12-16,16c-9.13,5.49-13.18,4.95-16,10c-1.51,2.71-1.7,6.84-2,15c-0.2,5.35-0.12,9.81,0,13"/>\r
<path class="fool-st" d="M98,231c1.93-0.25,6.71-1.14,11-5c2.8-2.52,4.26-5.29,5-7"/>\r
<path class="fool-st" d="M112,248c0.62,5.18,2.51,13.99,9,22c1.81,2.23,4.47,5.46,9,8c6.32,3.55,9.79,2.11,18,4\r
	c11.91,2.74,11.12,7.25,21,9c7.83,1.38,8.1-1.49,22-2c12.18-0.44,12.11,1.76,24,1c7.98-0.51,9.36-1.59,19-2\r
	c7.73-0.33,9.07,0.27,15,0c10.08-0.46,14.8-2.58,22-4c12.38-2.45,12.85,0.97,35,1c18,0.03,27,0,35-4c9.14-4.57,11.46-9.82,23-13\r
	c6.52-1.79,9.03-1.01,13-4c7.22-5.44,9.83-16.26,10-17c1.2-5.24,0.68-8.84,3-10c2.06-1.03,4.94,0.56,7,2"/>\r
<path class="fool-st" d="M171,321c7.31-1.81,18-4.34,31-7c22.63-4.63,33.95-6.94,41-7c25.67-0.22,33.16,9.91,56,6\r
	c8.24-1.41,14.76-4.01,19-6"/>\r
<path class="fool-st" d="M195,289c-0.91,1.84-2.35,5.44-2,10c0.7,9.07,7.89,14.23,9,15"/>\r
<path class="fool-st" d="M342,280c0.45,2.24,0.75,5.4,0,9c-2.03,9.81-10.18,14.92-12,16"/>\r
<path class="fool-st" d="M332,304c0.66,12.13,1.02,24.81,1,38c-0.03,22.45-1.17,43.51-3,63"/>\r
<path class="fool-st" d="M158,206c-9.21,1.89-18.73,9.3-21,20c-0.27,1.26-2.19,11.07,4,19c4.65,5.96,11.11,7.33,19,9\r
	c9.25,1.96,17.14,3.63,24-1c7.53-5.08,10.14-15.25,9-23C190.8,214.99,173.64,202.79,158,206z"/>\r
<path class="fool-st" d="M149,210c3.63,0.97,9.24,3.09,14,8c1.8,1.86,4.02,4.2,5,8c0.35,1.37,1.69,6.54-1,10c-2.27,2.92-5.25,1.85-7,5\r
	c-0.69,1.24-0.79,2.83-1,6c-0.16,2.49-0.09,4.56,0,6"/>\r
<path class="fool-st" d="M285,236c-2.5-2.57,3.71-18.14,16-24c19.18-9.15,46.68,8.41,46,16c-0.13,1.42-1.34,3.58-3,5\r
	c-2.25,1.93-4.23,1.59-8,3c-3.73,1.4-4.17,2.62-7,4c-5.85,2.85-12.1,1.59-15,1c-9.12-1.85-9.62-6.52-17-7\r
	C289.98,233.54,286.47,237.51,285,236z"/>\r
<path class="fool-st" d="M300.7,213c3.08,2.3,4.11,6,2.65,8.83c-1.87,3.65-7.62,5.39-10.61,3.21c-1.78-1.3-2.39-3.84-1.77-6.42"/>\r
</svg>\r
`,Uc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.fumo_face-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="fumo_face-st" d="M291.95,143.44c3.54,0.14,8.8,0.25,15.16,0c20.36-0.8,35.77-4.64,48.51-8.09\r
	c36.57-9.88,71.48-21.93,83.88-26.28"/>\r
<path class="fumo_face-st" d="M59.5,114.13c9.92,2.79,20.03,5.48,30.32,8.09c37.85,9.56,74.34,16.81,109.15,22.23"/>\r
<path class="fumo_face-st" d="M301.04,182.85c21.9-0.67,43.79-1.35,65.69-2.02"/>\r
<path class="fumo_face-st" d="M127.21,179.82c21.56,1.68,43.12,3.37,64.68,5.05"/>\r
<path class="fumo_face-st" d="M298.01,199.02c65.88-3.58,113.89-6.46,121.28-7.07c2.42-0.2,6.36-0.65,11.12-2.02\r
	c3.36-0.97,6.1-2.11,8.09-3.03"/>\r
<path class="fumo_face-st" d="M59.5,188.91c47.16,3.03,94.33,6.06,141.49,9.1"/>\r
<path class="fumo_face-st" d="M426.36,190.94c5.26,61.96-13.42,111.57-45.48,123.3c-3.39,1.24-15.08,5.04-28.3,1.01\r
	c-30.92-9.43-51.06-55.87-47.5-116.22"/>\r
<path class="fumo_face-st" d="M305.09,217.21c0.38-7.46,6.36-14.18,14.15-15.16c8.59-1.08,17.06,5.12,18.19,14.15\r
	c1.14,9.09-5.67,17.18-14.15,18.19C313.42,235.57,304.59,226.78,305.09,217.21z"/>\r
<path class="fumo_face-st" d="M77.69,189.93c-13.2,56.58,4.7,105.43,36.38,119.26c15.48,6.75,37.54,6.59,53.56-4.04\r
	c22.23-14.75,25.19-44.59,27.29-65.69c1.76-17.77-0.11-32.6-2.02-42.45"/>\r
<path class="fumo_face-st" d="M74.66,209.13c0.84-8.69,8.52-15.66,17.18-15.16c9.5,0.55,16.56,9.9,15.16,19.2\r
	c-1.26,8.4-9.18,15.28-18.19,14.15C79.87,226.2,73.83,217.72,74.66,209.13z"/>\r
<path class="fumo_face-st" d="M199.98,359.71c3.6,3.6,20.21,19.44,46.49,20.21c29.66,0.88,48.55-18.11,51.54-21.22"/>\r
</svg>\r
`,Wc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.genshin-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<g>\r
	<path class="genshin-st" d="M28.4,315.8c4.4-6.5,9.1-12.7,13.4-19.1c10.1-15.2,14.6-32,14.6-50.1c0-21.1-0.1-42.2,0.1-63.3\r
		c0-4.4-2-7.1-5.5-9.3c-3.6-2.2-7.8-3.3-12.3-5.4c8.3-3.6,17.2-4.5,23.4-10.6s7.6-14.9,10.2-22.8c1.8,0.2,1.5,1.4,1.8,2.2\r
		c0.8,2.3,1.4,4.7,2.2,7c5,14.6,9.8,19.7,28.3,20.3c19.7,0.6,39.5,0.1,59.2,0.1c28.2,0,56.5,0,84.7,0c4,0,7.9-0.5,11.8-1.1\r
		c10-1.6,15.5-8,18.5-17.1c1.3-3.9,2.6-7.7,4.2-12.6c3.5,8.7,4.5,17.5,10.7,23.7s15.2,6.9,23.6,10.8c-5.7,2.1-10.5,3.9-15.4,5.6\r
		c-9.3,3.1-12.8,10.9-15.6,19.2c-0.5,1.6,0.3,1.9,1.6,1.9c1.6,0,2.9-0.3,4.2-1.3c3.5-2.8,7.1-5.5,10.7-8.2c2.6-1.9,4.8-1.8,7.2,0.6\r
		c5.9,5.9,11.2,12.4,15.5,19.5c3.5,5.8,1.2,9.7-5.7,9.9c-6,0.1-12.1,0-18.1,0c-6.8,0.1-6-0.9-6,5.8c0,26.6,0.2,53.1-0.1,79.7\r
		c-0.2,15-8.5,25.3-21,32.5c-3.6,2-4.4,1.3-4.4-3.4c0-37.8,0-75.6,0-113.4c0-3.3-0.2-6.6,0-9.9c0.3-3.5-1.2-4.5-4.5-4.4\r
		c-8,0.2-15.9,0.1-23.9,0c-1.3,0-3,0.5-3.6-1.2c-0.5-1.4,0.6-2.6,1.4-3.7c1.6-2.1,3.6-2.6,6.1-2.6c10.3,0.1,20.6-0.1,30.8,0.1\r
		c3.3,0.1,3.5-0.9,2.6-3.8c-4.5-13.2-12-19.1-26.3-19.2c-27.5-0.2-55.1-0.1-82.6-0.1c-0.9,0-2.1-0.5-2.6,0.5c-0.7,1.2,0.5,2,1.3,2.7\r
		c2,2.1,3.9,4.2,6.1,6.1c2.8,2.3,2.4,4.1-0.1,6.2c-1.8,1.5-3.3,3.3-4.9,4.9c-0.6,0.6-1.3,1.3-0.8,2.1c0.3,0.4,1.2,0.4,1.8,0.5\r
		c7.4,0,14.8-0.1,22.2,0.1c2.6,0,4-1.8,5.6-3.1c4.5-3.7,8.9-4.3,14.4-1.7c5.1,2.4,10,5,14.8,7.9c2.9,1.8,4.2,4,1.3,6.9\r
		c-3,3-3.3,6.7-3.3,10.6c0.1,12.5-0.1,24.9,0,37.4c0,3.6-1.3,5.5-4.7,6.7c-7.3,2.6-14.8,4-22.4,4.7c-3,0.3-4.9-0.6-4.4-4\r
		c0.6-4-1.2-5-4.8-4.6c-2.6,0.2-5.2,0.2-7.8,0c-3.4-0.2-4.6,1.2-4.6,4.5c0.1,12.6,0.1,25.2,0.1,37.8c0,16-10.2,30.3-25.4,35.5\r
		c-4.2,1.5-4.4,1.3-4.4-3.1c0-23,0-46,0-69c0-5.7,0-5.7-5.7-5.7c-0.4,0-0.8,0-1.2,0c-7.9-0.5-15.3,0-22.1,5.2\r
		c-4.1,3.2-9.4,4.5-14.5,5.5c-4.3,0.8-5,0.1-5-4.3c0-22.6,0-45.2,0-67.8c0-4.6,1.3-5.8,5.9-5.4c4.9,0.4,9.8,1.6,14.4,3.2\r
		c7.2,2.5,14.6,3.3,22.2,2.9c4-0.2,7.9,0,11.9-0.1c0.8,0,1.8,0.4,2.2-0.4c0.6-1-0.4-1.8-1-2.4c-1.5-1.6-3-3.2-4.7-4.6\r
		c-2.6-2.1-2.3-3.9,0.1-6c2.5-2.2,4.7-4.6,7-7c0.6-0.6,1.3-1.3,0.7-2.1c-0.3-0.4-1.2-0.5-1.8-0.5c-18.1,0-36.2,0-54.3,0.1\r
		c-2.2,0-4.3,0.6-6.4,1.3c-4,1.4-6.2,4-6.1,8.6c0.1,17.7,0.2,35.3,0,53c-0.3,23.5-8.6,43.8-25.6,60.3\r
		C53.7,305.2,41.7,311.6,28.4,315.8z"/>\r
	<path class="genshin-st" d="M398.5,75.5c2.2,4,2,7.6,2.4,11c2.8,20,4.9,40.2,10.8,59.6c3.3,10.8,10.6,17.2,20.6,21.2\r
		c1.2,0.5,2.5,1.1,4,1.8c-1.1,1.5-2.6,1.7-3.9,2.1c-4.1,1.5-8.2,3.1-12.4,4.4c-8.4,2.6-12.9,8.8-16,16.4c-1,2.5-0.5,3.4,2.3,3.3\r
		c7.5-0.1,15.1-0.1,22.6,0c2.7,0.1,4.7-0.6,6.5-2.6c4.9-5.2,10.5-7.2,17.7-4.1c5.9,2.5,11.9,4.9,17.3,8.4c3.5,2.2,3.8,3.8,0.8,6.8\r
		c-4.6,4.6-6.4,9.9-6.3,16.5c0.4,21.1,0.1,42.2,0.1,63.3c0,4.8-1,5.7-5.6,4.2c-10.8-3.4-20.2-8.9-26.6-18.6\r
		c-1.1-1.6-2.4-1.5-3.9-1.5c-7.4,0-14.8,0.2-22.2-0.1c-3.6-0.1-3.8,1.1-2.9,4C407,282,413.9,288.5,424,292c4.6,1.6,9.4,2.7,13.6,5.1\r
		c-0.6,1.4-1.6,1.6-2.4,1.9c-12.9,4.8-21,13.6-24.4,27.1c-4,16.1-6.2,32.5-7.7,49c-1.3,14.7-2.3,29.5-3.4,44.2\r
		c-0.1,1.2-0.3,2.4-1.5,3.8c-1.7-3-1.5-6.1-1.7-9.1c-1.9-27.3-3.4-54.6-9.2-81.4c-2-9.1-4-18.3-11.5-24.9c-4.2-3.7-8.8-6.9-14.2-8.7\r
		c-0.9-0.3-2-0.5-2.1-1.6c-0.1-1.3,1.3-1.2,2.1-1.5c4.9-1.8,9.7-3.7,14.6-5.4c9.8-3.5,14.4-11.2,17.3-20.5c0.6-2-0.1-2.4-1.9-2.4\r
		c-8.2,0-16.5,0-24.7,0c-1.6,0-2.2,0.9-3.1,2.1c-7,9.5-16.4,15.5-27.7,18.4c-2.8,0.7-4.5,0-4.5-3.6c0.1-30,0-60,0.1-90\r
		c0-5.8,2-7.3,7.7-6.1c2.9,0.6,6,1,8.7,2.3c9.5,4.4,19.4,5.3,29.6,4.7c3.8-0.2,7.7,0,11.5,0c4.6,0,4.7-0.4,3-4.9\r
		c-3-7.9-8.8-12.7-16.5-15.4c-4.1-1.4-8.3-2.8-12.4-4.2c-0.9-0.3-2.1-0.3-2-1.6c0.1-0.9,1.1-1.1,1.9-1.3c3.5-1.2,6.7-3,9.9-5\r
		c7.6-4.8,11.2-12.1,13.5-20.3c4.7-17.3,7-35.1,9.3-52.9C396.5,85.3,396.6,80.7,398.5,75.5z"/>\r
	<path class="genshin-st" d="M199,316.4c5.4-1.5,10.7-3,16-4.5c3.6-1,6.9-2.5,10.1-4.5c1.5-1,3.9-1.7,3.7-4c-0.1-2.2-2.4-2.8-4.1-3.5\r
		c-6.8-2.9-14-4.6-21.3-5.9c-5.5-1-11.1-1.8-16.6-2.5c-2.5-0.3-4.3-1.4-4.5-3.9c-0.2-2.8,2.3-2.4,4.1-2.9c4.5-1.2,6.9-4.7,8.5-8.8\r
		c2.2-5.3,2.1-5.4,7.7-4c12,2.9,23.9,6,34.8,12c2,1.1,2.8,0.8,3.2-1.6c0.9-5,1.6-10,1.5-15.1c-0.1-18.5-0.1-36.9-0.3-55.4\r
		c0-1.7,0.4-2.6,2.2-2.5c5.6,0,11.2,0.1,16.8,0c2.6,0,3.4,1.5,3.4,3.6c0,16,0,32-0.1,48c0,4.5-0.3,9-0.9,13.5\r
		c-2.3,15.5-10.7,26.4-24.8,33.4C226,313.9,212.7,316.1,199,316.4z"/>\r
	<path class="genshin-st" d="M125.2,317.1c-14.9-1.7-29.9-3-42.8-12.2c-9.9-7.1-9.8-11.8,0.5-18.3c13.1-8.3,27.8-12,42.7-15.3\r
		c2.6-0.6,3.4,1,4.1,2.9c2,5.5,4.5,10.4,11.3,10.9c1.6,0.1,1.9,1.3,1.8,2.7c-0.2,2.1-1.6,3.2-3.5,3.5c-3.9,0.7-7.8,1.2-11.8,1.8\r
		c-9.2,1.4-18.3,3.1-27,6.8c-1.7,0.7-4.1,1.2-4.2,3.4c-0.1,2,2,3.2,3.6,4.1c5.7,3.4,12,5.3,18.4,6.9c2.4,0.6,4.7,1.2,7.1,1.7\r
		C125.3,316.4,125.3,316.8,125.2,317.1z"/>\r
	<path class="genshin-st" d="M302.1,255.4c0-8.1,0.1-16.1,0-24.2c0-2.8,0.9-3.9,3.8-3.8c4.6,0.2,9.3,0.1,13.9,0c2.6,0,4,0.7,4,3.7\r
		c-0.1,8.9,0.1,17.8-0.1,26.6c-0.2,9.3-10.5,21.9-19.3,23.9c-2.6,0.6-2.3-1.1-2.3-2.5C302.1,271.2,302.1,263.3,302.1,255.4z"/>\r
	<path class="genshin-st" d="M162.3,248.7c-9,0-18.1-0.1-27.1,0.1c-3.4,0.1-4.8-1.2-4.6-4.5c0.1-3.6,0.2-7.1,0-10.7c-0.2-3.1,1-3.9,4-3.9\r
		c15.9,0.1,31.8,0.1,47.7,0c1.8,0,4.8,1.2,4.9-2c0.1-2.7-1.7-4.9-4.7-5.4c-1.2-0.2-2.4-0.1-3.7-0.1c-14.6,0-29.3-0.1-43.9,0.1\r
		c-3.2,0-4.4-0.9-4.2-4.2c0.2-3.4,0.2-6.9,0-10.3c-0.2-3.5,1.2-4.9,4.8-4.8c14.1,0.1,28.2,0,42.3,0c4.2,0,8.5,0,12.7,0\r
		c2.7,0,4,1.1,4,3.9c-0.1,12.6-0.1,25.2,0,37.8c0,3-1.2,4.2-4.2,4.1C180.9,248.7,171.6,248.7,162.3,248.7z"/>\r
	<path class="genshin-st" d="M365,215.1c0-2.7,0.1-5.5,0-8.2s1.1-4,3.9-4c7,0.1,14,0.1,21,0c2.3,0,2.8,0.6,2.1,2.9\r
		c-4,12-13.4,17.4-24.5,20.9c-2,0.6-2.4-0.5-2.4-2.1C365,221.4,365,218.3,365,215.1z"/>\r
	<path class="genshin-st" d="M379.2,260.2c-3.5,0-7.1,0-10.7,0c-2.4,0-3.5-1.1-3.5-3.5c0-6,0-12,0-18c0-1.6,0.4-2.7,2.4-2.1\r
		c10.8,3.4,20.1,8.6,24.1,20.2c1,2.9,0.4,3.6-2.5,3.4C385.8,260.1,382.5,260.2,379.2,260.2z"/>\r
	<path class="genshin-st" d="M418.2,203c3.4,0,6.9,0,10.3,0c2.5,0,3.7,1.1,3.7,3.8c-0.1,5.9,0,11.8,0,17.7c0,1.6-0.2,2.8-2.2,2.1\r
		c-10.8-3.5-20.2-8.4-24.2-20.2c-0.8-2.5-0.8-3.5,2.2-3.4C411.3,203.1,414.8,203,418.2,203z"/>\r
	<path class="genshin-st" d="M417.6,260.2c-3.4,0-6.8,0-10.3,0c-2.1,0-2.5-0.6-1.8-2.7c3.8-12.1,13.3-17.4,24.4-20.9\r
		c1.8-0.6,2.1,0.4,2.1,1.9c0,6.1,0,12.3,0,18.5c0,2.5-1.6,3.2-3.8,3.2C424.7,260.2,421.2,260.2,417.6,260.2z"/>\r
</g>\r
</svg>\r
`,Gc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.goc-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="goc-st" d="M68.5,198.5c46.33-1,92.67-2,139-3c-1.33,5.33-2.67,10.67-4,16c-25.67,0.67-51.33,1.33-77,2\r
	c43.33,31.67,86.67,63.33,130,95c-5.33,4-10.67,8-16,12C183.17,279.83,125.83,239.17,68.5,198.5z"/>\r
<path class="goc-st" d="M193.5,257.5c5,3.67,10,7.33,15,11c16-50.67,32-101.33,48-152c8.33,24.33,16.67,48.67,25,73\r
	c6.67,0,13.33,0,20,0c-14.33-43-28.67-86-43-129C236.83,126.17,215.17,191.83,193.5,257.5z"/>\r
<path class="goc-st" d="M236.5,194.5c-1.33,5.67-2.67,11.33-4,17c54.67-0.33,109.33-0.67,164-1c-22.67,16.67-45.33,33.33-68,50\r
	c1.67,5.67,3.33,11.33,5,17c38.33-28.33,76.67-56.67,115-85C377.83,193.17,307.17,193.83,236.5,194.5z"/>\r
<path class="goc-st" d="M262.5,335.5c5-3.67,10-7.33,15-11c21,14.67,42,29.33,63,44c-17-51.33-34-102.67-51-154c6.67,0,13.33,0,20,0\r
	c21.67,67,43.33,134,65,201C337.17,388.83,299.83,362.17,262.5,335.5z"/>\r
<path class="goc-st" d="M184.5,286.5c5,3.33,10,6.67,15,10c-8,25.33-16,50.67-24,76c43.33-31.67,86.67-63.33,130-95\r
	c1.67,5.67,3.33,11.33,5,17c-56,41.67-112,83.33-168,125C156.5,375.17,170.5,330.83,184.5,286.5z"/>\r
<path class="goc-st" d="M354.5,268.5c-0.86,4.15-2.12,8.89-4,14c-2.17,5.89-4.65,10.9-7,15"/>\r
<path class="goc-st" d="M385.5,246.5c0.22,11.09-0.69,26.92-6,45c-5.97,20.34-15.14,35.46-22,45c-5.31-6.09-5.7-9.24-5-11\r
	c0.31-0.77,0.93-1.55,1-3c0.1-2.22-1.26-2.97-1-5c0.17-1.32,0.98-2.88,2-3c1.21-0.14,2.33,1.82,3,3c1.38,2.42,1,3.49,2,5\r
	c0.67,1.01,2.01,2.3,5,3"/>\r
<path class="goc-st" d="M414.5,227.5c2.46,13.62,5.67,41.89-5,75c-10.97,34.04-30.92,55.47-41,65"/>\r
<path class="goc-st" d="M377.5,253.5c13.67,0,27.33,0,41,0"/>\r
<path class="goc-st" d="M277.5,94.5c14.26,1.68,45.87,7.36,77,31c28.23,21.44,42.06,47.02,48,60"/>\r
<path class="goc-st" d="M300.5,165.5c4.28,1.67,10.03,4.42,16,9c5.45,4.18,9.35,8.54,12,12"/>\r
<path class="goc-st" d="M347.5,161.5c7.67-7,15.33-14,23-21"/>\r
<path class="goc-st" d="M180.5,190.5c3.35-4.36,8.22-9.8,15-15c8.24-6.32,16.22-9.92,22-12"/>\r
<path class="goc-st" d="M144.5,190.5c5.18-9.41,14.72-23.89,31-37c20.68-16.66,41.72-22.65,53-25"/>\r
<path class="goc-st" d="M109.5,190.5c5.62-13.06,20.38-42.55,53-66c31.46-22.62,62.83-27.61,77-29"/>\r
<path class="goc-st" d="M142.5,141.5c16.33,16,32.67,32,49,48"/>\r
<path class="goc-st" d="M242.5,185.5c3.81-1,8.93-1.95,15-2c6.54-0.05,12.01,0.95,16,2"/>\r
<path class="goc-st" d="M250.5,156.5c4,0,8,0,12,0"/>\r
<path class="goc-st" d="M256.5,137.5c0,17,0,34,0,51"/>\r
<path class="goc-st" d="M165.5,218.5c-0.72,1.66-1.44,3.67-2,6c-0.73,3.06-0.97,5.8-1,8"/>\r
<path class="goc-st" d="M139.5,305.5c1.75,4.61,4.28,10.14,8,16c4.37,6.89,9.06,12.17,13,16"/>\r
<path class="goc-st" d="M98.5,228.5c-2.24,14.09-5.03,43.69,7,78c12.22,34.87,33.37,56.45,44,66"/>\r
<path class="goc-st" d="M142.5,365.5c5-5.33,10-10.67,15-16"/>\r
<path class="goc-st" d="M96.5,253.5c3.67,0,7.33,0,11,0"/>\r
<path class="goc-st" d="M195.5,329.5c2.17,1.65,4.5,3.32,7,5c2.75,1.85,5.43,3.51,8,5"/>\r
<path class="goc-st" d="M245.5,351.5c3.77,0.56,8.14,0.97,13,1c5.27,0.03,9.99-0.4,14-1c-3.09-3.1-5.89-5.4-8-7\r
	c-3.4-2.58-4.65-3.08-6-3c-1.79,0.11-2.82,1.17-6,4C250.93,346.9,248.54,348.98,245.5,351.5z"/>\r
<path class="goc-st" d="M216.5,374.5c9.16,3.27,23.77,7.23,42,7c16.72-0.21,30.19-3.86,39-7"/>\r
<path class="goc-st" d="M186.5,396.5c13.01,6.22,38.09,16.1,71,16c34.83-0.11,61.03-11.35,74-18"/>\r
<path class="goc-st" d="M256.5,352.5c0,20.67,0,41.33,0,62"/>\r
<path class="goc-st" d="M188.5,247.5c-0.1-4.02,0.21-9.62,2-16c1.39-4.96,3.29-8.99,5-12"/>\r
<path class="goc-st" d="M348.5,217.5c0.74,2,1.45,4.35,2,7c0.78,3.8,1.01,7.21,1,10"/>\r
<path class="goc-st" d="M310.5,137.5c-1.18,1.88-2.81,3.68-5,4c-2.61,0.39-4.48-1.56-5-1c-0.74,0.79,3.09,4.55,7,11\r
	c3.6,5.93,3.44,7.84,6,9c3.51,1.6,6.19-0.9,9,1c2.24,1.52,1.49,3.75,3,7c3.31,7.14,10.86,4.88,20,13c1.42,1.26,3.61,2.51,8,5\r
	c1.27,0.72,2.66,1.48,4,1c1.59-0.57,1.57-2.34,3-3c2.38-1.1,5.63,2.34,6,2c0.82-0.76-11.34-21.18-33-37\r
	c-9.07-6.62-23.48-15.13-44-20"/>\r
<path class="goc-st" d="M334.5,175.5c-4.67,4-9.33,8-14,12"/>\r
<path class="goc-st" d="M301.5,374.5"/>\r
<path class="goc-st" d="M288.5,363.5c7.86,4.02,12.95,7.07,16,9c1.55,0.99,4.36,2.81,4,4c-0.06,0.2-0.31,0.73-2,1\r
	c-5.41,0.88-7.74-3.78-16-6c-1.9-0.51-3.39-0.75-4-2C285.56,367.58,287.46,364.82,288.5,363.5z"/>\r
<path class="goc-st" d="M288.5,322.5c14.03-4.83,17.05-8.49,17-11c-0.02-1.1-0.63-2.39,0-4c0.94-2.39,3.85-3.47,6-4\r
	c5,15.33,10,30.67,15,46C313.83,340.5,301.17,331.5,288.5,322.5z"/>\r
<path class="goc-st" d="M317.5,216.5c2.38,4.51,4.83,9.85,7,16c2.47,7,4.02,13.46,5,19c8.03-3.22,9.6-7.51,10-9c0.27-1,0.02-0.81,0-7\r
	c-0.03-6.52,0.24-8.09-1-10c-1.45-2.24-4.08-3.6-5-3c-0.74,0.48-0.07,2.02-1,5c-0.4,1.29-0.61,1.94-1,2c-1.42,0.23-1.99-7.42-7-11\r
	C322.12,216.8,319.41,216.5,317.5,216.5z"/>\r
<path class="goc-st" d="M117.5,273.5c0.42-0.12-0.91-3.88,1-6c0.13-0.14,1.18-1.28,2-1c1.93,0.66,0.1,8.32,2,9c1.24,0.44,2.89-2.5,4-2\r
	c1.02,0.46-0.21,3.01,1,6c1.02,2.51,2.63,2.54,4,5c1.29,2.32,0.74,3.87,1,7c0.04,0.48,1.05,11.19,7,14c2.98,1.41,4.14-0.61,7,1\r
	c4.09,2.3,4.02,7.72,7,8c1.48,0.14,1.91-1.15,4-1c1.76,0.13,3.01,1.17,4,2c2.34,1.95,3.46,4.39,4,6c2.42-5.69,4.81-12.03,7-19\r
	c2.12-6.75,3.75-13.12,5-19c-17-12.33-34-24.67-51-37c-1.67-0.95-3.3-1.61-4-1c-1.11,0.97,0.88,4.44,0,5c-0.57,0.36-2.14-0.61-3-2\r
	c-1.34-2.18-0.06-3.97-1-5c-1.39-1.52-6.84-0.44-10,3c-2.62,2.85-2.78,6.94-3,15c-0.04,1.56-0.26,10.86,1,11\r
	c1.31,0.15,2.49-9.95,5-10C114.16,262.44,116.79,273.7,117.5,273.5z"/>\r
<path class="goc-st" d="M234.5,221.5c2.06,0.47,3.73-1.56,6-3c0.85-0.54,2.68-1.57,13-2c12.25-0.51,18.44-0.83,21,2\r
	c0.68,0.75,2.18,2.75,5,4c1.58,0.7,3.02,0.92,4,1c5.67,15.67,11.33,31.33,17,47c-7,5.33-14,10.67-21,16c-1.12,2.31-2.18,2.92-3,3\r
	c-1.37,0.13-2.17-1.23-4-1c-0.35,0.04-1.53,0.19-2,1c-0.92,1.58,1.75,4.09,1,5c-0.51,0.62-1.79-0.47-4,0c-1.76,0.37-2.36,1.35-3,1\r
	c-0.96-0.53,0.16-2.85-1-4c-0.88-0.87-2.93-0.93-4,0c-2.3,1.99,0.99,7.6-1,9c-0.99,0.7-2.98,0.15-4-1c-1.95-2.21,0.66-5.56-1-8\r
	c-1.32-1.93-4.19-1.49-7-2c-5.92-1.08-9.88-4.47-14-8c-7.93-6.79-14.64-19.12-13-31c0.69-4.96,1.95-3.48,5-14\r
	c2.96-10.21,3.91-18.98,6-19C231.81,217.49,232.05,220.94,234.5,221.5z"/>\r
<path class="goc-st" d="M250.5,226.5c-1.17-0.89-3.03,1.25-7,1c-2.17-0.13-4.94-0.98-5-2c-0.06-1,3.29-2.01,10-4\r
	c5.66-1.68,7.11-1.83,8-1c0.5,0.47,0.55,0.99,1,6c0.27,3.01,0.42,4.52,1,5c1.56,1.29,3.71-1.02,6,0c2.98,1.33,1.73,6.29,5,8\r
	c2.16,1.13,4.26-0.22,5,1c0.62,1.02-0.82,2.02-1,5c-0.14,2.31,0.65,2.96,0,4c-0.69,1.1-1.78,0.72-4,2c-1.04,0.6-3.26,2.11-3,3\r
	c0.23,0.8,2.29,0.49,6,1c1.35,0.19,7.77,1.08,8,3c0.15,1.21-2.26,1.96-2,3c0.3,1.24,3.76,0.55,6,3c0.5,0.55,1.18,1.3,1,2\r
	c-0.51,1.96-6.95,0.64-8,3c-0.88,1.98,2.98,4.36,2,7c-0.55,1.47-2.38,2.4-3,2c-1.01-0.65,1.44-4.68,0-6c-0.59-0.54-1.32-0.15-4,0\r
	c-3.88,0.22-4.12-0.51-5,0c-2.9,1.68,0.43,9.12-3,12c-0.94,0.79-2.07,0.96-4,1c-5.15,0.1-12.84,0.24-21-5\r
	c-4.91-3.15-7.53-6.68-10-10c-4.38-5.89-5.94-10.8-5-13c0.13-0.32,0.62-1.28,1-2c0.99-1.89,1.5-2.83,2-3c1.31-0.44,2.04,1.89,4,2\r
	c2.36,0.13,3.28-3.15,6-3c0.88,0.05,1.92,0.45,2,1c0.11,0.72-1.47,1.17-4,3c-1.94,1.41-3.13,2.68-4,4c-0.52,0.79-1.5,2.29-1,3\r
	c0.45,0.64,1.7,0.04,3,1c0.66,0.49,0.55,0.79,1,1c1.62,0.74,4.55-2.5,5-3c0.92-1.02,2.28-2.52,3-5c0.66-2.3,1.09-6.53-1-8\r
	c-1.25-0.88-2.77-0.33-3-1c-0.35-1.02,3.18-2.38,3-4c-0.18-1.65-4.01-1.96-4-3c0.01-1.41,7.05-0.76,11-5\r
	C251.34,232.45,251.92,227.59,250.5,226.5z"/>\r
<path class="goc-st" d="M226.5,248.5c-0.78-0.77-1.19-1.94-1-3c0.45-2.53,4.19-3.77,5-3c0.66,0.62-0.88,2.31,0,4\r
	c0.66,1.26,2.08,1.39,2,2c-0.09,0.66-1.79,1.02-3,1C228.71,249.49,227.48,249.47,226.5,248.5z"/>\r
</svg>\r
`,Kc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.hoshino-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="hoshino-st" d="M212.5,100.5c-6.72,1.45-14.54,3.64-23,7c-7.55,3-14.06,6.32-19.5,9.5c-3.09-3.07-8.09-8.84-11.5-17.5\r
	c-3.38-8.59-3.66-16.16-3.5-20.5c2.5-2.05,12.9-10.11,26.5-8.5c15.54,1.84,28.93,15.54,32,34c2.1-4.14,5.92-13.19,4-24\r
	c-4.19-23.58-31.39-31.55-33-32c-4.55-1.26-20.43-5.64-35,4c-11.44,7.58-19.51,22.11-17,38c2.35,14.88,13.35,27.07,28,31\r
	c-16.98,9.96-26.19,21.58-31,29c-17.69,27.27-18.73,63.53-14,84c0.45,1.95,1.11,4.43,1,8c-0.51,16.64-16.83,29.54-31,38\r
	c3.91,0.96,10.27,2.01,18,1c7.07-0.93,12.55-3.22,16-5c-0.93,2.73-2.46,6.27-5,10c-2.03,2.98-4.17,5.29-6,7c2.47,0.11,5.15,0.13,8,0\r
	c3.64-0.16,6.99-0.53,10-1c-0.33,5-0.67,10-1,15"/>\r
<path class="hoshino-st" d="M278.5,154.5c3.09,4.23,12.01,17.61,10,35c-0.66,5.66-2.31,10.38-4,14c-2.06-5.66-5.42-13.13-11-21\r
	c-5.87-8.28-12.15-14.13-17-18c2.77,4.93,6.2,12.39,8,22c1.41,7.53,1.39,14.08,1,19"/>\r
<path class="hoshino-st" d="M270.5,111.5c8.87,1.66,21.9,5.13,36,13c17.71,9.88,28.19,21.72,31,25c13.17,15.38,19.17,31.16,22,41\r
	c-2.86-4.84-7.03-10.88-13-17c-5.71-5.86-11.39-10.06-16-13c4.07,3.63,15.96,15.17,19,34c4.7,29.08-15.84,49.88-18,52\r
	c3.9-13.42,1.26-23.92-4-26c-0.84-0.33-3.79-1.26-9,2c0.13-2.86,0.06-7.07-1-12c-2.29-10.62-7.73-17.63-12-23\r
	c-3.58-4.51-9.66-11.09-19-17"/>\r
<path class="hoshino-st" d="M215.5,100.5c8.9-1.88,26.25-4.32,47,1c20.97,5.38,35.11,16.03,42,22"/>\r
<path class="hoshino-st" d="M163.5,207.5c0.46,3.49,4.05,28.18,21,41c4.58,3.46,12.87,8.13,22.9,11c3.67,1.05,6.82,1.65,9.1,2\r
	c-1.4,1.19-3.74,2.87-7,4c-4.28,1.48-8,1.26-10,1c1.98,2.79,6.38,8.2,14,12c7.11,3.55,13.61,4,17,4c-7.25,3.83-22.27,10.49-42,10\r
	c-7.25-0.18-24.16-0.6-39-11c-28.23-19.78-26.22-59.7-26-63"/>\r
<path class="hoshino-st" d="M187.5,201.5c-1.95,6.03-3.84,13.43-5,22c-1.18,8.76-1.31,16.56-1,23"/>\r
<path class="hoshino-st" d="M203.5,173.5c-1.68,10.4-2.82,22.32-2.74,35.48c0.04,5.8,0.31,11.31,0.74,16.52c-2.58-2.53-5.43-5.83-8-10\r
	c-6.79-11.02-7.89-21.97-8-28"/>\r
<path class="hoshino-st" d="M246.5,171.5c11.73,19.07,15.69,26.7,17,30c0.33,0.84,1.45,3.82,4,7c1.56,1.95,3.09,3.27,4,4\r
	c-3.68,0.31-9.88,0.36-17-2c-5.95-1.97-10.3-4.87-13-7c0.49,1.84,1.36,4.34,3,7c1.34,2.17,2.79,3.82,4,5\r
	c-5.31-0.93-15.23-3.43-25-11c-3.27-2.54-11.84-9.75-17.31-22.43c-3.81-8.82-4.58-16.73-4.69-21.57"/>\r
<path class="hoshino-st" d="M214.5,289.5c12.48,1.4,42.17,2.98,74-13c22.43-11.26,36.54-26.55,44-36"/>\r
<path class="hoshino-st" d="M340.5,152.5c3.89,0.74,9.01,1.33,15,1c6.57-0.36,12.02-1.7,16-3c-0.42,2.84-1.67,8.52-6,14\r
	c-2.78,3.52-5.84,5.72-8,7c2.31,2.43,6.57,6.28,13,9c7.17,3.03,13.56,3.17,17,3c-2.93,3.08-9.2,8.83-19,12\r
	c-7.5,2.42-14.04,2.36-18,2"/>\r
<path class="hoshino-st" d="M350.5,210.5c0.64,1.72,1.59,3.8,3,6c1.68,2.63,3.5,4.6,5,6"/>\r
<path class="hoshino-st" d="M344.5,227.5c3.29-1.84,8.37-4.29,15-6c3.02-0.78,4.55-1.16,6-1c7.93,0.9,12.44,12.12,16,21\r
	c1.72,4.3,7.16,17.84,3,21c-2.01,1.53-4.96-0.37-9,2c-2.32,1.36-3.49,3.24-4,4c-3.32,4.94-10.96,10.03-23,18\r
	c-12.57,8.32-24.72,14.63-34,19"/>\r
<path class="hoshino-st" d="M370.5,222.5c1.55-4.03,3.47-5.46,5-6c1.49-0.52,2.52-0.16,5-1c1.96-0.66,2.84-1.4,4-2c0,0,3.54-1.84,9-1\r
	c6.87,1.06,13.38,9.25,14,18c0.46,6.58-2.25,15.63-10,19c-5.75,2.5-11.36,0.62-13,0"/>\r
<path class="hoshino-st" d="M172.5,291.5c-7.52,1.21-13.16,3.27-17,5c-10.96,4.92-17,8-17,8c-1.4,0.71-2.84,1.47-5,2\r
	c-4.39,1.08-6.03-0.16-8,1c-3.28,1.93-3.07,7.94-3,10c0.11,3.2,1.74,6.85,5,14c1.28,2.82,3.78,8.13,8,12c1.24,1.14,2.48,2.02,4,2\r
	c1.99-0.02,2.74-1.57,5-2c2.28-0.43,4.19,0.62,5,1c4.71,2.19,16.65,2.08,25,2c10.62-0.1,31.03-2.63,56-11"/>\r
<path class="hoshino-st" d="M123.5,311.5c-7.34-2.77-13.69-3.32-17-2c-1.57,0.63-3.38,1.35-4,3c-0.4,1.05-0.16,2.08-1,3\r
	c-0.7,0.77-1.67,0.93-2,1c-3.04,0.64-6.72,4.94-8,7c-3.52,5.66-0.67,13.22,0,15c0.32,0.85,5.24,13.23,18,15\r
	c9.19,1.27,18.42-3.51,23-12"/>\r
<path class="hoshino-st" d="M109.5,353.5c-0.42,1.87-1.06,3.89-2,6c-3.98,8.89-11.11,13.78-15,16c2.58,0.43,10.52,1.4,19-3\r
	c8-4.15,11.77-10.63,13-13c-0.35,6.01,0.15,15.04,5,24c9.14,16.9,29.9,26.48,53,25c-3.55-3.6-11.24-12.38-14-26\r
	c-1.7-8.39-0.89-15.51,0-20c0.96,3.78,3.25,10.58,9,17c8.97,10.02,20.3,12.39,24,13"/>\r
<path class="hoshino-st" d="M377.5,263.5c3.96,2.69,11.49,8.66,16,19c8.82,20.21-1.59,39.49-3,42c-0.29-3.06-1.33-9.56-6-16\r
	c-3.46-4.78-7.49-7.55-10-9c1.44,3.83,4.24,12.85,2,24c-2.87,14.26-12.08,22.56-15,25c0.76-5.8,1.22-14.63-1-25\r
	c-1.95-9.12-5.29-16.22-8-21c1.09,3.62,2.62,10.57,1,19c-1.11,5.76-3.29,10.17-5,13"/>\r
<path class="hoshino-st" d="M215.5,289.5c3.17,3.18,6.98,7.78,10,14c7.28,14.99,5.16,29.35,4,35"/>\r
<path class="hoshino-st" d="M233.5,290.5c1.8,4.82,3.84,12.06,4,21c0.22,12.76-3.5,22.65-6,28"/>\r
<path class="hoshino-st" d="M238.5,290.5c1.14,1.63,3.05,3.95,6,6c3.95,2.74,7.82,3.66,10,4c1.03-0.98,2.84-2.94,4-6\r
	c1.13-2.98,1.11-5.59,1-7"/>\r
<path class="hoshino-st" d="M273.5,282.5c1,1.64,2.58,3.85,5,6c2.2,1.95,4.36,3.21,6,4c0.77-1.48,1.97-4.3,2-8c0.02-2.55-0.52-4.63-1-6"/>\r
<path class="hoshino-st" d="M259.5,288.5c3.33,2.67,6.67,5.33,10,8c1-4.33,2-8.67,3-13"/>\r
<path class="hoshino-st" d="M258.5,295.5c2.33,2,4.67,4,7,6c0,4.33,0,8.67,0,13c1.34,0.59,5.21,2.07,10,1c6.17-1.38,9.34-5.99,10-7\r
	c-2.67-3.67-5.33-7.33-8-11c0.33-2.67,0.67-5.33,1-8"/>\r
<path class="hoshino-st" d="M268.5,315.5c2.59,4.48,3.58,8.32,4,11c0.64,4.06,0.16,6.56,0,15c-0.07,3.83-0.04,6.97,0,9"/>\r
<path class="hoshino-st" d="M283.5,310.5c2.91,4.11,6.16,9.45,9,16c3.29,7.59,5.04,14.53,6,20"/>\r
<path class="hoshino-st" d="M301.5,269.5c2.3,2.63,4.77,5.94,7,10c5.37,9.78,6.69,19.11,7,25"/>\r
<path class="hoshino-st" d="M289.5,275.5c3.89,2.45,9.03,6.28,14,12c5.84,6.71,9.14,13.37,11,18"/>\r
<path class="hoshino-st" d="M226.5,336.5c7.97,4.84,14.9,7.98,20,10c0,0,10.09,3.96,16,4c3.92,0.03,5,0,5,0c2.92-0.07,3.65-0.21,5,0\r
	c2.35,0.36,3.46,1.3,5,2c4.46,2.03,10.32,1.04,14-1c2.49-1.38,2.74-2.56,7-5c1.9-1.08,3.32-1.69,4-2c6.78-3.07,12.47-9.4,13-10\r
	c5.72-6.45,8.02-13.62,9-18"/>\r
<path class="hoshino-st" d="M223.5,342.5c7.2,5.7,22.08,15.7,42,17c10.19,0.67,18.89-1.13,23-2c8.58-1.83,16.58-3.53,24-9\r
	c12.02-8.87,15.76-22.64,17-29"/>\r
<path class="hoshino-st" d="M272,360c-0.67,7.33-1.33,14.67-2,22c9,3.67,18,7.33,27,11c4.33-7,8.67-14,13-21c-2.67-6-5.33-12-8-18"/>\r
<path class="hoshino-st" d="M314.5,305.5c1.94,2.51,3.68,4.53,5,6c6.44,7.15,8.86,7.8,10,8c1.86,0.33,4.02,0.1,5,0c2.44-0.25,3.66-0.38,4-1\r
	c0.98-1.8-3.97-6.98-9-10c-4.81-2.89-9.6-3.75-13-4"/>\r
<path class="hoshino-st" d="M224.5,337.5c-0.88,2.04-2.38,6.33-1,11c0.69,2.32,2.43,5.93,9,10c13.22,8.2,32.08,9.65,39,10"/>\r
<path class="hoshino-st" d="M304.5,359.5c4.49-2.06,16.34-8.06,23-19c1.99-3.27,4.79-8.02,4-14c-0.35-2.63-1.27-4.68-2-6"/>\r
<path class="hoshino-st" d="M203.5,342.5c-2.08,4.09-5.53,12.33-5,23c0.29,5.83,1.69,10.61,3,14"/>\r
<path class="hoshino-st" d="M226.5,353.5c-8.91,9.23-17.83,18.46-26.74,27.69c-0.81,0.84-1.14,2.03-0.86,3.16c0.98,4,3.4,10.96,9.6,17.15\r
	c5.64,5.63,11.77,8,15,9"/>\r
<path class="hoshino-st" d="M244.5,363.5l-21.28,48.36c-0.4,0.91,0.03,1.97,0.95,2.34c4.96,2.03,11.12,4.03,18.33,5.3\r
	c12.76,2.24,23.62,1.28,31,0"/>\r
<path class="hoshino-st" d="M273.5,383.5v37.31c0,0.97,0.73,1.79,1.7,1.88c5.59,0.54,14.86,0.61,25.3-3.19c14.36-5.22,22.69-14.74,26-19"/>\r
<path class="hoshino-st" d="M309.5,372.5c5.78,9.74,11.56,19.47,17.34,29.21c0.94,1.58,3,2.1,4.56,1.13c4.45-2.79,11.33-8.17,16.1-17.33\r
	c4.81-9.24,5.12-17.83,5-22"/>\r
<path class="hoshino-st" d="M325.5,343.5c9.12,6.69,18.25,13.38,27.37,20.07c1.13,0.83,2.71,0.01,2.71-1.39\r
	c-0.03-6.12-1.02-15.6-6.08-25.68c-4.08-8.14-9.3-13.68-13-17"/>\r
<path class="hoshino-st" d="M244.5,419.5c-0.92,9.01,0.02,16.24,1,21c1.61,7.81,3.14,15.28,9,18c0.24,0.11,5.23,2.35,9,0\r
	c4.1-2.56,3.44-8.49,5-16c1.05-5.07,3.37-12.06,9-20"/>\r
<path class="hoshino-st" d="M304.5,418.5c-0.26,1.5-2.32,14.12,4,18c1.07,0.66,2.21,0.96,3,1c8.66,0.45,17.34-28.34,19-34"/>\r
<path class="hoshino-st" d="M195.5,248.5c2.54-3.15,5.82-6.64,10-10c10.03-8.06,20.36-11.46,27-13"/>\r
<path class="hoshino-st" d="M270.5,211.5c3.59-2.1,8.64-4.5,15-6c10.75-2.53,19.85-1.18,25,0"/>\r
<path class="hoshino-st" d="M254.5,242.5c-4.53,2.81-5.88,7.56-6,8c-0.2,0.75-1.95,7.64,2,11c2.79,2.37,6.81,1.61,10,1\r
	c2.66-0.51,5.44-2,11-5c5-2.7,5.58-3.36,6-4c2.88-4.39,0.29-10.36,0-11c-0.85-1.88-1.82-4.03-4-5c-2.45-1.09-4.07,0.36-13,3\r
	C256.3,241.74,255.87,241.65,254.5,242.5z"/>\r
<path class="hoshino-st" d="M260.5,173.5c4.95,0.67,10.67,1.11,17,1c9.37-0.16,17.49-1.47,24-3"/>\r
<path class="hoshino-st" d="M179.5,217.5c4.34-2.33,10.21-6.09,16-12c6.85-6.99,10.79-14.13,13-19"/>\r
<path class="hoshino-st" d="M244.5,427.5c0.48,0.96,3.67,7.04,11,9c8.01,2.14,14.26-2.44,15-3"/>\r
<path class="hoshino-st" d="M304.5,422.5c1.6,0.9,4.01,1.92,7,2c8.99,0.23,14.56-8.31,15-9"/>\r
<path class="hoshino-st" d="M290.5,298.5c-0.28,0.91,0.23,1.75,0.93,2.9c0.7,1.15,1.18,1.93,2.07,2.1c0.89,0.17,1.65-0.38,2.36-0.89\r
	c0.67-0.48,1.59-1.14,1.64-2.11c0.03-0.55-0.31-1.04-1-2c-0.85-1.19-1.27-1.78-2-2c-1-0.29-1.92,0.19-2.38,0.43\r
	C291.61,297.19,290.77,297.63,290.5,298.5z"/>\r
<path class="hoshino-st" d="M291.5,301.5c-0.91,0.68-1.82,1.37-2.74,2.05c-0.74,0.55-0.99,1.55-0.61,2.39c3.12,6.8,6.23,13.59,9.35,20.39\r
	c0.52,1.12,1.93,1.5,2.93,0.77c4.82-3.48,9.63-6.96,14.45-10.43c0.89-0.64,1.08-1.89,0.42-2.77c-4.25-5.66-8.49-11.33-12.74-16.99\r
	c-0.6-0.8-1.72-1.02-2.58-0.5c-1.16,0.7-2.32,1.39-3.48,2.09"/>\r
<path class="hoshino-st" d="M270.5,367.5c11.33,4.67,22.67,9.33,34,14"/>\r
<path class="hoshino-st" d="M304.5,358.5c-7.33,9.67-14.67,19.33-22,29"/>\r
</svg>\r
`,qc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">\r
<path fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" d="M75.78,280.29\r
	c0.1,40.5,0.3,81.1,0.4,121.6c0,18.2,14.8,32.9,33,33c90.7,0.3,181.4,0.5,272.1,0.8c23.2,0,42-18.7,42-41.9\r
	c-0.2-37.5-0.3-75-0.5-112.5"/>\r
<path fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" d="M96.35,63.29\r
	c10.9-1.5,75.7-9.1,132,37c49.9,40.9,59.2,96.1,61,109h20.5c11.7,0,18.4,13.4,11.4,22.8c-20.1,26.7-40.2,53.4-60.3,80.1\r
	c-5.4,7.2-16.1,7.5-21.9,0.6c-21.6-25.8-43.1-51.6-64.7-77.3c-8.4-10.1-1.4-25.5,11.7-25.7c7.4-0.1,14.8-0.3,22.2-0.4\r
	c-1.2-15-6.2-52.5-34-89C146.05,83.09,110.45,68.29,96.35,63.29z"/>\r
</svg>\r
`,Jc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.Invincible-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="Invincible-st" d="M45.59,172.9c7.07,0,14.13,0,21.2,0c-4.71,38.36-9.42,76.71-14.13,115.07c1.68,3.03,3.36,6.06,5.05,9.08\r
	c-7.4,1.01-14.8,2.02-22.21,3.03c5.05-39.37,10.09-78.73,15.14-118.1C48.96,178.96,47.28,175.93,45.59,172.9z"/>\r
<path class="Invincible-st" d="M61.74,297.06c4.37-38.36,8.75-76.71,13.12-115.07c-1.68-3.03-3.36-6.06-5.05-9.08c7.4,0,14.8,0,22.21,0\r
	c1.68,16.49,3.36,32.97,5.05,49.46c1.35-13.46,2.69-26.92,4.04-40.38c-2.02-3.03-4.04-6.06-6.06-9.08c6.73,0,13.46,0,20.19,0\r
	c-3.36,40.38-6.73,80.75-10.09,121.13c-5.05,0.34-10.09,0.67-15.14,1.01c-2.02-23.55-4.04-47.1-6.06-70.66\r
	c-2.02,20.52-4.04,41.05-6.06,61.57c1.68,3.03,3.36,6.06,5.05,9.08C75.88,295.71,68.81,296.39,61.74,297.06z"/>\r
<path class="Invincible-st" d="M124.33,183c-2.02-3.36-4.04-6.73-6.06-10.09c6.73,0,13.46,0,20.19,0c0.67,17.83,1.35,35.67,2.02,53.5\r
	c3.03-14.8,6.06-29.61,9.08-44.41c-1.68-3.03-3.36-6.06-5.05-9.08c7.07,0,14.13,0,21.2,0c-8.08,39.37-16.15,78.73-24.23,118.1\r
	c-3.7,0.34-7.4,0.67-11.1,1.01C128.36,255.67,126.35,219.34,124.33,183z"/>\r
<path class="Invincible-st" d="M171.77,181.99c-1.68-3.03-3.36-6.06-5.05-9.08c6.39,0,12.79,0,19.18,0c-1.68,35.67-3.36,71.33-5.05,107\r
	c1.68,3.03,3.36,6.06,5.05,9.08c-6.73,0.34-13.46,0.67-20.19,1.01C167.73,253.99,169.75,217.99,171.77,181.99z"/>\r
<path class="Invincible-st" d="M195.99,183c-2.02-3.36-4.04-6.73-6.06-10.09c7.4,0,14.8,0,22.21,0c3.03,16.15,6.06,32.3,9.08,48.45\r
	c0-13.12,0-26.24,0-39.37c-2.02-3.03-4.04-6.06-6.06-9.08c6.73,0,13.46,0,20.19,0c-0.34,38.36-0.67,76.71-1.01,115.07\r
	c-4.71,0-9.42,0-14.13,0c-4.37-22.54-8.75-45.09-13.12-67.63c-0.34,19.51-0.67,39.03-1.01,58.54c2.02,3.03,4.04,6.06,6.06,9.08\r
	c-7.07,0.34-14.13,0.67-21.2,1.01C192.63,253.65,194.31,218.33,195.99,183z"/>\r
<path class="Invincible-st" d="M242.42,277.88c0.34-31.63,0.67-63.26,1.01-94.88c2.36-3.36,4.71-6.73,7.07-10.09c7.74,0,15.48,0,23.22,0\r
	c2.69,3.03,5.38,6.06,8.08,9.08c0,14.13,0,28.26,0,42.39c-4.71-4.37-9.42-8.75-14.13-13.12c0-7.4,0-14.8,0-22.21\r
	c-3.36,0-6.73,0-10.09,0c0,27.25,0,54.51,0,81.76c3.7,0,7.4,0,11.1,0c0-10.43,0-20.86,0-31.29c4.71,4.04,9.42,8.08,14.13,12.11\r
	c0,9.08,0,18.17,0,27.25c-2.36,3.03-4.71,6.06-7.07,9.08c-8.41,0-16.82,0-25.23,0C247.81,284.61,245.12,281.24,242.42,277.88z"/>\r
<path class="Invincible-st" d="M292.89,288.98c-0.67-35.33-1.35-70.66-2.02-105.99c-2.02-3.36-4.04-6.73-6.06-10.09c6.39,0,12.79,0,19.18,0\r
	c1.35,35.33,2.69,70.66,4.04,105.99c2.02,3.36,4.04,6.73,6.06,10.09C307.03,288.98,299.96,288.98,292.89,288.98z"/>\r
<path class="Invincible-st" d="M318.13,289.99c-1.35-36-2.69-72-4.04-108c-2.02-3.03-4.04-6.06-6.06-9.08c11.78,0,23.55,0,35.33,0\r
	c3.03,3.36,6.06,6.73,9.08,10.09c1.01,13.79,2.02,27.59,3.03,41.38c-2.36,2.36-4.71,4.71-7.07,7.07c2.69,2.36,5.38,4.71,8.08,7.07\r
	c1.01,14.13,2.02,28.26,3.03,42.39c-2.69,3.36-5.38,6.73-8.08,10.09C340.34,290.67,329.23,290.33,318.13,289.99z"/>\r
<path class="Invincible-st" d="M332.26,271.82c3.7,0,7.4,0,11.1,0c-0.67-8.41-1.35-16.82-2.02-25.23c-1.68-1.68-3.36-3.36-5.05-5.05\r
	c-1.68,1.68-3.36,3.36-5.05,5.05C331.59,255,331.92,263.41,332.26,271.82z"/>\r
<path class="Invincible-st" d="M330.24,225.39c3.03-3.36,6.06-6.73,9.08-10.09c-0.34-8.41-0.67-16.82-1.01-25.23c-3.03,0-6.06,0-9.08,0\r
	C329.57,201.84,329.91,213.62,330.24,225.39z"/>\r
<path class="Invincible-st" d="M354.47,172.9c6.73,0,13.46,0,20.19,0c2.69,33.65,5.38,67.29,8.08,100.94c3.36,0,6.73,0,10.09,0\r
	c-1.01-11.44-2.02-22.88-3.03-34.32c5.38,4.71,10.77,9.42,16.15,14.13c0.67,9.76,1.35,19.51,2.02,29.27\r
	c2.69,4.04,5.38,8.08,8.08,12.11c-15.48-1.01-30.95-2.02-46.43-3.03c-3.03-36.67-6.06-73.35-9.08-110.02\r
	C358.5,178.96,356.49,175.93,354.47,172.9z"/>\r
<path class="Invincible-st" d="M418.06,296.05c-4.04-37.68-8.08-75.37-12.11-113.05c-2.02-3.36-4.04-6.73-6.06-10.09c11.78,0,23.55,0,35.33,0\r
	c3.03,3.03,6.06,6.06,9.08,9.08c2.02,15.14,4.04,30.28,6.06,45.42c-5.72-5.05-11.44-10.09-17.16-15.14\r
	c-0.67-7.4-1.35-14.8-2.02-22.21c-3.36,0-6.73,0-10.09,0c1.35,10.77,2.69,21.53,4.04,32.3c3.03,0,6.06,0,9.08,0\r
	c0.67,6.39,1.35,12.79,2.02,19.18c-3.03,0-6.06,0-9.08,0c1.35,11.78,2.69,23.55,4.04,35.33c3.36,0.34,6.73,0.67,10.09,1.01\r
	c-1.35-12.45-2.69-24.9-4.04-37.35c5.38,4.71,10.77,9.42,16.15,14.13c1.35,11.1,2.69,22.21,4.04,33.31\r
	c2.69,4.37,5.38,8.75,8.08,13.12C449.69,299.41,433.87,297.73,418.06,296.05z"/>\r
</svg>\r
`,Yc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.kamado_nezuko-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="kamado_nezuko-st" d="M195.15,179.94c-0.26-3.55-1.02-9.04-3.51-15.23c-1.49-3.69-3.01-6.16-3.51-7.03\r
	c-9.36-16.02-5.03-53.14,2.34-64.41c0.93-1.42,3.09-4.72,7.03-5.86c2.33-0.67,4.46-0.36,5.86,0c-0.85-0.51-1.24-0.9-1.17-1.17\r
	c0.15-0.58,2.5-0.58,7.03,0c-1.72-1.13-2.5-1.92-2.34-2.34c0.19-0.51,1.76-0.51,4.68,0c3.92-3.69,6.26-5.25,7.03-4.68\r
	c0.37,0.28,0.37,1.06,0,2.34c5.78-3.71,8.9-5.27,9.37-4.68c0.23,0.28-0.16,1.06-1.17,2.34c9.9-2.33,14.98-3.11,15.23-2.34\r
	c0.08,0.24-0.31,0.63-1.17,1.17c9.92-1.65,15-2.04,15.23-1.17c0.12,0.45-1.06,1.23-3.51,2.34c10.92,0.74,16.39,1.52,16.4,2.34\r
	c0,0.38-1.17,0.77-3.51,1.17c8.57,0.69,12.86,1.47,12.88,2.34c0.01,0.37-0.77,0.76-2.34,1.17c3.13,0.48,8.18,1.78,10.54,5.86\r
	c0.87,1.51,1.08,2.89,1.17,3.51c4.5,32.21,1.17,51.53,1.17,51.53c-2.68,15.55-6.07,23.21-9.37,43.33c-0.61,3.72-0.92,5.64-1.17,8.2\r
	c-1.19,12.21,0.78,17.13-1.17,26.94c-0.38,1.92-1.06,4.78-2.34,8.2"/>\r
<path class="kamado_nezuko-st" d="M302.9,92.1c0.75,1.75,1.64,4.13,2.34,7.03c0.11,0.47,0.94,3.95,1.17,8.2c1.85,33.46-4.68,57.39-4.68,57.39\r
	c-2.66,9.73-5.84,17.63-10.54,29.28c-2.76,6.86-5.25,12.48-7.03,16.4"/>\r
<path class="kamado_nezuko-st" d="M304.07,148.31c1.14,0.78,2.77,1.95,4.68,3.51c0.82,0.67,1.03,0.87,1.17,1.17c1.11,2.43-4.49,7.3-7.03,9.37"/>\r
<path class="kamado_nezuko-st" d="M309.93,155.34c5.37,3.52,10.84,7.03,16.4,10.54c2.75,1.74,5.5,3.46,8.24,5.15c0.71,0.44,1.09,1.24,0.99,2.06\r
	c-0.42,3.57-1.23,7.83-2.77,12.48c-1.24,3.72-2.7,6.93-4.11,9.58c0,0-5.08,10.17-5.86,19.91c-0.09,1.18,0,2.34,0,2.34\r
	c0,0-0.03,2.45,1.17,4.68c6.44,12.03,17.9,28.55,37.48,39.82c2.01,1.16,5.24,2.86,9.37,4.68"/>\r
<path class="kamado_nezuko-st" d="M353.26,287.68c3.05-4.71,6.25-10.98,8.2-18.74c0.51-2.03,0.89-3.99,1.17-5.86"/>\r
<path class="kamado_nezuko-st" d="M318.13,88.58c1.04,3.79,2.64,9.49,4.68,16.4c6.44,21.75,9.74,32.76,14.05,39.82\r
	c1.89,3.1,6.34,9.09,15.23,21.08c2.33,3.14,4.35,5.83,5.91,7.89c0.7,0.92,0.86,2.14,0.44,3.22c-1.88,4.85-3.61,9.36-5.18,13.48\r
	c-6.33,16.69-7.5,20.54-7.03,25.77c0.57,6.21,3.06,10.52,5.86,15.23c10.47,17.61,27.36,24.49,25.77,32.79\r
	c-0.04,0.2-0.4,1.7-1.17,4.68c-0.61,2.37-2.83,10.97-4.68,16.4c-1.55,4.53-4.29,11.04-9.37,18.74"/>\r
<path class="kamado_nezuko-st" d="M323.98,164.71c1.35,1.87,2.91,3.84,4.68,5.86c2.41,2.73,4.79,5.06,7.03,7.03"/>\r
<path class="kamado_nezuko-st" d="M346.23,215.07c3.3,0.92,7.35,2.37,11.71,4.68c5.04,2.68,8.91,5.68,11.71,8.2"/>\r
<path class="kamado_nezuko-st" d="M370.83,219.75c-0.3,3.26-0.96,7.27-2.34,11.71c-1.68,5.39-3.91,9.71-5.86,12.88"/>\r
<path class="kamado_nezuko-st" d="M352.09,192.82c5.33,3.24,11.37,7.45,17.57,12.88c4.58,4.01,8.46,8,11.71,11.71c0.67,0.7,1.64,1.87,2.34,3.51\r
	c0.78,1.85,1.28,4.42,0,10.54c-0.94,4.51-2.18,7.78-2.34,8.2c-1.53,4.02-3.59,9.85-5.86,17.57"/>\r
<path class="kamado_nezuko-st" d="M278.31,211.56c-3.12,3.51-6.25,7.03-9.37,10.54c-3.12,3.51-6.25,7.03-9.37,10.54\r
	c-0.65,0.75-1.56,1.93-2.34,3.51c-1.83,3.71-1.89,7.46-1.17,12.88c1.55,11.71,2.53,19.05,8.2,24.59c1.87,1.83,3.56,2.79,5.86,5.86\r
	c2.63,3.51,3.97,6.98,4.68,9.37"/>\r
<path class="kamado_nezuko-st" d="M294.7,184.62c1.84,6.26,2.28,11.57,2.34,15.23c0.05,3.24,0.08,6.99-1.17,11.71c-0.43,1.62-1.6,5.58-4.68,10.54\r
	c-3.94,6.35-6.12,6.47-12.88,14.05c-4.75,5.33-9.04,10.22-11.71,17.57c-1.71,4.71-2.2,8.9-2.34,11.71"/>\r
<path class="kamado_nezuko-st" d="M265.42,256.06c2.5,2.66,5.23,5.41,8.2,8.2c3.2,3,6.34,5.73,9.37,8.2c0.41,0.37,2.12,2,2.34,4.68\r
	c0.28,3.38-2.05,5.59-2.34,5.86c-2.93,3.71-9.87,12.87-14.05,22.25c-3.69,8.27-5.53,12.4-5.86,15.23c-0.17,1.49-0.23,3.14-1.17,3.51\r
	c-1.96,0.79-6.23-4.55-8.2-9.37c-1.16-2.83-1.22-4.76-1.17-5.86c0.1-2.23,0.81-3.87,1.17-4.68c1.66-3.76,7.65-12.93,16.4-24.59"/>\r
<path class="kamado_nezuko-st" d="M355.6,257.23c-0.69,0.75-1.61,1.92-2.34,3.51c-0.41,0.9-1.11,2.7-1.17,7.03c-0.07,4.84,0.71,8.63,1.17,10.54\r
	c0.46,1.9,1.18,4.32,2.34,7.03"/>\r
<path class="kamado_nezuko-st" d="M372,284.17c6.22,11.39,11.55,18.81,15.23,23.42c5.88,7.4,8.82,11.1,10.54,12.88c4.37,4.55,6.25,5.68,5.86,7.03\r
	c-0.96,3.29-14.52,4.57-24.59-1.17c-6.54-3.73-10.48-9.78-11.71-11.71c-1.73-2.71-2.82-5.2-3.51-7.03"/>\r
<path class="kamado_nezuko-st" d="M347.41,251.38c-0.11,2.31-0.42,5.1-1.17,8.2c-0.66,2.73-1.51,5.09-2.34,7.03"/>\r
<path class="kamado_nezuko-st" d="M183.44,141.29c-0.47,3.37-1.05,8.64-1.17,15.23c-0.01,0.74-0.02,1.36-0.02,1.9c0,1.55,0.02,2.68,0.02,2.78\r
	c0.1,6-3.51,18.74-3.51,18.74c-1.2,4.25-2.45,10.48-2.34,18.74"/>\r
<path class="kamado_nezuko-st" d="M211.55,83.9c-0.3-2.18-1.11-5.74-3.51-9.37c-4.33-6.54-10.81-8.75-12.88-9.37"/>\r
<path class="kamado_nezuko-st" d="M211.55,82.73c-1.04-2.61-2.71-7.96-1.17-14.05c2.48-9.83,11.49-14.47,15.23-16.4\r
	c14.18-7.3,29.03-2.96,35.13-1.17c13.12,3.84,22.02,11.37,26.94,16.4"/>\r
<path class="kamado_nezuko-st" d="M307.59,68.67c0.73,0.61,1.54,1.38,2.34,2.34c1.06,1.26,1.81,2.49,2.34,3.51"/>\r
<path class="kamado_nezuko-st" d="M288.85,68.67c2.95-2.21,6.86-5.61,10.54-10.54c3.61-4.84,5.75-9.46,7.03-12.88c3.1,8.8,5.26,15.36,5.86,17.57\r
	c0.11,0.41,0.35,1.34,0,2.34c-0.49,1.4-1.86,2.09-2.34,2.34c-4.55,2.41-5.5,6.31-10.54,8.2c-1.68,0.63-5.23,1.57-10.54,0\r
	c1.39,0.48,3.44,1.24,5.86,2.34c3.95,1.81,3.54,2.1,4.68,2.34c4.55,0.97,7.26-4.42,15.23-7.03c2.41-0.79,4.5-1.06,5.86-1.17\r
	c-0.59,4.01-0.95,7.22-1.17,9.37c-0.44,4.37-0.53,6.73-2.34,8.2c-1.22,0.99-2.62,1.1-3.51,1.17c-15.42,1.24-15.08,1.99-17.57,1.17\r
	c-6.69-2.19-10.33-7.98-11.71-10.54"/>\r
<path class="kamado_nezuko-st" d="M286.51,78.04c2.34,2.34,4.68,4.68,7.03,7.03"/>\r
<path class="kamado_nezuko-st" d="M287.68,72.19c1.5-0.08,3.55-0.36,5.86-1.17c1.97-0.7,3.54-1.58,4.68-2.34"/>\r
<path class="kamado_nezuko-st" d="M287.64,67.95c0.71,0.42,1.03,1.27,0.77,2.05c-0.53,1.63-1.17,3.55-1.91,5.7c-1.86,5.44-2.49,6.93-3.51,7.03\r
	c-1.1,0.11-2.12-1.42-3.51-3.51c-0.88-1.31-1.49-2.56-1.93-3.61c-0.3-0.73-0.36-1.53-0.17-2.29c0.32-1.27,0.92-2.95,2.1-4.64\r
	c0.84-1.21,1.76-2.12,2.56-2.79c0.54-0.45,1.3-0.52,1.9-0.16C285.17,66.47,286.41,67.21,287.64,67.95z"/>\r
<path class="kamado_nezuko-st" d="M298.22,59.31c-6.66-4.85-20.83-13.76-40.99-16.4c-4.91-0.64-22.01-2.46-42.16,4.68\r
	c-4.48,1.59-15.95,5.75-25.77,14.05c-26.1,22.07-24.89,60.23-24.59,66.76"/>\r
<path class="kamado_nezuko-st" d="M164.7,172.91c-5.45,5.95-9.32,10.32-10.54,11.71c-0.35,0.4-1.03,1.2-1.17,2.34c-0.19,1.6,0.75,2.94,1.17,3.51\r
	c1.71,2.34,9.82,12.78,21.08,26.94"/>\r
<path class="kamado_nezuko-st" d="M164.7,133.09c-4.54,6.55-8.53,12.08-11.71,16.4c-5.61,7.62-8.42,11.43-11.71,15.23\r
	c-5.59,6.45-6.1,5.99-7.03,8.2c-3.08,7.38,1.32,15.85,5.86,24.59c3.73,7.18,5.47,8.14,11.71,18.74c3.16,5.36,5.52,9.88,7.03,12.88"\r
	/>\r
<path class="kamado_nezuko-st" d="M143.62,204.53c-4.75,3.27-8.81,5.53-11.71,7.03c-4.34,2.23-6.86,3.14-8.2,5.86c-0.59,1.19-0.92,2.66,0,8.2\r
	c1.04,6.25,4.28,21.41,4.68,23.42c0.07,0.36,0.24,1.26,0,2.34c0,0-0.28,1.23-1.17,2.34c-2.74,3.39-30.81,17.66-33.96,19.91\r
	c-1.42,1.01-2.34,2.34-2.34,2.34c-0.15,0.22-0.74,1.08-1.17,2.34c-3.73,10.78-2.34,33.96-2.34,33.96c0.07,1.15,0.21,3.21,1.17,3.51\r
	c1.5,0.47,4.02-3.65,4.68-4.68c2.74-4.3,9.45-12,26.94-26.94"/>\r
<path class="kamado_nezuko-st" d="M152.99,218.58c-6.77,1.54-11.72,2.91-12.88,3.51c-0.26,0.14-0.93,0.48-1.17,1.17c-0.16,0.45-0.08,0.88,0,1.17\r
	c0.57,2.08,7.2,18.48,8.2,21.08c0.91,2.39,1.97,5.91,2.34,10.54"/>\r
<path class="kamado_nezuko-st" d="M178.76,179.94c1.84,4.87,4.1,8.29,5.86,10.54c3.72,4.76,8.43,8.46,12.88,14.05c0.76,0.95,2.28,2.93,3.51,5.86\r
	c0.62,1.48,1.06,2.92,1.17,3.51c1.16,5.94-12.09,15.56-30.45,29.28c-1.08,0.81-3.41,2.04-4.68,4.68c-1.07,2.22-0.72,3.83-1.17,8.2\r
	c0,0-0.2,1.93-1.17,7.03c-2.32,12.18-28.37,22.47-43.33,32.79c-0.76,0.52-2.55,1.78-3.51,1.17c-2.14-1.35,1.48-10.76,3.51-15.23\r
	c2.22-4.88,4.44-9.74,9.37-14.05c3.43-3,5.07-3.01,11.71-7.03c5.25-3.17,9.22-6.19,11.71-8.2c0.39-6.64,0.78-13.27,1.17-19.91\r
	c4.34-3.59,7.98-6.33,10.54-8.2c1.4-1.02,3.38-2.44,5.86-4.68c5.66-5.14,5.86-7.34,5.86-8.2c-0.02-1.75-0.98-2.82-2.34-4.68\r
	c0,0-4.02-5.51-7.03-12.88c-2.22-5.43-3.08-10.58-3.41-13.18c0,0-0.05-0.42-0.1-0.87c-2.98-26.63,0-50.36,0-50.36\r
	c1.08-8.6,3.85-26.1,11.71-43.33c2.64-5.79,6.41-12.76,14.05-16.4c4.08-1.94,7.97-2.32,10.54-2.34"/>\r
<path class="kamado_nezuko-st" d="M170.56,211.56c1.95-0.78,3.9-1.56,5.86-2.34"/>\r
<path class="kamado_nezuko-st" d="M157.68,195.16c1.17-0.75,3.12-2.2,4.68-4.68c2.15-3.41,2.35-6.75,2.34-8.2"/>\r
<path class="kamado_nezuko-st" d="M217.41,191.65c3.29,1.06,8.1,2.44,14.05,3.51c5.54,1,8.31,1.51,11.71,1.17c1.76-0.17,4.86-0.66,15.23-5.86\r
	c3.23-1.62,7.67-3.95,12.88-7.03"/>\r
<path class="kamado_nezuko-st" d="M239.66,196.33c-0.51,1.34-1.09,3.35-1.17,5.86c-0.1,3.1,0.62,5.56,1.17,7.03"/>\r
<path class="kamado_nezuko-st" d="M234.97,210.39c4.67-1.44,12.6-4.61,19.91-11.71c3.8-3.69,6.42-7.46,8.2-10.54"/>\r
<path class="kamado_nezuko-st" d="M236.15,196.33c-0.56,2.68-1.03,5.83-1.17,9.37c-0.23,5.56,0.39,10.35,1.17,14.05"/>\r
<path class="kamado_nezuko-st" d="M223.26,234.98c1.34-2.16,3.64-5.6,7.03-9.37c10.36-11.51,18.96-12.81,28.11-23.42\r
	c2.25-2.61,5.4-6.79,8.2-12.88"/>\r
<path class="kamado_nezuko-st" d="M266.6,186.96c1.01,4.82,1.87,10.32,2.34,16.4c0.58,7.44,0.45,14.15,0,19.91"/>\r
<path class="kamado_nezuko-st" d="M234.97,199.84c-1.22,1.83-3.44,5.16-4.68,7.03c-6.06,9.08-6.48,9.68-7.03,10.54\r
	c-2.54,3.96-4.85,8.64-8.2,18.74c-7.79,23.5-5.68,29.47-12.88,45.68c-0.16,0.36-2.84,5.32-8.2,15.23\r
	c-12.74,23.55-14.97,27.31-18.74,35.13c-2.78,5.76-6.58,14.12-10.54,24.59"/>\r
<path class="kamado_nezuko-st" d="M231.46,195.16c-0.98,0.92-2.55,2.26-4.68,3.51c-4.59,2.69-7.76,2.62-10.54,3.51\r
	c-5.88,1.89-7.44,7.26-18.74,29.28c-0.44,0.86-1.5,2.92-2.34,5.86c-0.84,2.93-1.09,5.42-1.17,7.03"/>\r
<path class="kamado_nezuko-st" d="M195.15,236.15c-1.51,0.54-3.5,1.54-4.68,3.51c-1.01,1.68-0.88,3.12-1.17,4.68c-0.58,3.09-2.57,5.22-5.86,8.2\r
	c-12.1,10.96-19.55,13.15-21.08,19.91c-0.38,1.68,0.92,5.8,3.51,14.05c3.58,11.39,5.85,14.02,7.03,15.23\r
	c3.53,3.61,7.75,5.15,10.54,5.86"/>\r
<path class="kamado_nezuko-st" d="M217.41,212.73c-6.88,11.4-11.25,21.59-14.05,29.28c-3.94,10.81-6.12,20.33-7.03,24.59\r
	c-2.11,9.93-1.67,11.93-3.51,18.74c-3.18,11.72-8.64,19.31-10.54,23.42c-9.56,20.64-24.21,52.24-24.59,90.18\r
	c-0.06,6.12,0.21,15.92,2.34,28.11c3.73-4.23,8.74-9.2,15.23-14.05c6.4-4.79,12.5-8.17,17.57-10.54"/>\r
<path class="kamado_nezuko-st" d="M142.45,283c-4.11,11.33-6.05,21.05-7.03,28.11c-0.26,1.86-1.16,8.64-1.17,17.57\r
	c-0.01,7.49-0.02,11.23,1.17,14.05c4.24,10.09,19.81,12.35,24.59,12.88c-0.69-1.61-1.61-4.01-2.34-7.03\r
	c-1.3-5.4-1.22-9.6-1.17-12.88c0.07-5.28,0.1-11.93,0-21.08"/>\r
<path class="kamado_nezuko-st" d="M168.22,246.69c0.8,1.78,1.6,3.74,2.34,5.86c1.03,2.93,1.78,5.69,2.34,8.2"/>\r
<path class="kamado_nezuko-st" d="M183.44,234.98c0.78,1.07,1.57,2.24,2.34,3.51c1.51,2.49,2.65,4.88,3.51,7.03"/>\r
<path class="kamado_nezuko-st" d="M297.05,208.04c3.82,4.03,5.86,7.78,7.03,10.54c1.72,4.06,2.28,7.74,5.86,10.54c1.19,0.94,1.48,0.8,3.51,2.34\r
	c1.82,1.38,3.96,3.03,5.86,5.86c0.61,0.91,1.63,2.45,2.34,4.68c0.92,2.89,0.37,3.92,1.17,5.86c0.99,2.4,2.98,3.56,4.68,4.68\r
	c7.61,5,6.34,7,15.23,12.88c1.88,1.24,4.64,2.94,8.2,4.68c0.08,4.49-0.49,12.99-5.86,21.08c-8.19,12.33-24.13,18.56-40.99,16.4\r
	c-1.06-3.24-2.75-8.56-4.68-15.23c-2.95-10.2-3.48-13.26-5.86-17.57c-1.85-3.34-5.23-8.18-11.71-12.88"/>\r
<path class="kamado_nezuko-st" d="M272.45,243.18c-0.37,2.74-0.56,6.36,0,10.54c0.84,6.25,3.02,11.05,4.68,14.05"/>\r
<path class="kamado_nezuko-st" d="M282.99,283c2.47,7.05,6.76,17.58,14.05,29.28c5.22,8.37,8.34,11.49,15.23,21.08\r
	c4.85,6.75,14.83,20.64,21.08,33.96c4.6,9.8,10.35,26.03,10.54,49.19c4.06-10.11,9.39-24.68,12.88-39.82\r
	c0.59-2.56,1.17-6.78,2.34-15.23c1.44-10.43,1.82-15.54-1.17-19.91c-1.26-1.84-2.67-2.89-3.51-3.51\r
	c-11.07-8.12-29.15-20.56-31.62-22.25"/>\r
<path class="kamado_nezuko-st" d="M320.47,306.42c1.95,7.03,3.9,14.05,5.86,21.08"/>\r
<path class="kamado_nezuko-st" d="M306.42,350.92c1.94-0.83,4.29-1.68,7.03-2.34c3.1-0.75,5.89-1.06,8.2-1.17"/>\r
<path class="kamado_nezuko-st" d="M205.7,272.46c8.26,2.1,18.55,4.01,30.45,4.68c11.76,0.67,22.08-0.05,30.45-1.17"/>\r
<path class="kamado_nezuko-st" d="M201.01,284.17c8.21,3.07,20.27,6.5,35.13,7.03c10.69,0.38,19.87-0.85,26.94-2.34"/>\r
<path class="kamado_nezuko-st" d="M215.06,236.15"/>\r
<path class="kamado_nezuko-st" d="M191.64,301.74c-2.1,11.42-3.31,25.84-1.17,42.16c0.6,4.57,1.41,8.87,2.34,12.88"/>\r
<path class="kamado_nezuko-st" d="M302.9,320.47c0.4,2.99,0.63,7.03,0,11.71c-0.51,3.75-1.43,6.91-2.34,9.37"/>\r
<path class="kamado_nezuko-st" d="M279.48,322.82c10.31,10.21,16.24,15.06,19.91,17.57c1.02,0.7,3.12,2.07,4.68,4.68\r
	c1.83,3.06,2.1,6.42,2.34,9.37c0.2,2.45,0.11,4.48,0,5.86"/>\r
<path class="kamado_nezuko-st" d="M306.42,356.78c0.89,0.49,2.14,1.25,3.51,2.34c1.79,1.41,2.75,2.18,3.51,3.51c0.88,1.55,0.98,2.98,1.17,5.86\r
	c0.13,1.96,0.07,3.59,0,4.68"/>\r
<path class="kamado_nezuko-st" d="M190.47,343.9c-0.92,1.32-2.21,3.3-3.51,5.86c-1.47,2.88-2.21,4.32-2.34,5.86c-0.29,3.28,1.38,5.94,3.51,9.37\r
	c1.3,2.09,2.6,3.66,3.51,4.68c-0.41,1.17-0.73,2.66,0,3.51c0.66,0.77,2.34,1.23,11.71-2.34c6.36-2.42,10.17-3.88,15.23-7.03\r
	c3.9-2.43,7.01-4.92,9.37-7.03"/>\r
<path class="kamado_nezuko-st" d="M188.13,366.15c-0.64,0.13-2.73,0.64-3.51,2.34c-0.15,0.34-0.4,1.02,0,3.51c0.19,1.17,0.52,2.79,1.17,4.68\r
	c-2.38,0.62-3.24,1.87-3.51,2.34c-0.79,1.36-0.54,2.87,0,5.86c0.36,2,0.82,3.61,1.17,4.68c-2.09,1.55-2.31,2.96-2.34,3.51\r
	c-0.05,0.84,0.27,1.3,2.34,4.68c1.85,3.02,1.92,3.18,2.34,3.51c0.43,0.33,1.78,1.28,5.86,1.17c3.93-0.11,6.84-1.11,7.03-1.17\r
	c10.83-3.81,22.25-12.88,22.25-12.88c5.24-4.16,11.68-9.61,18.74-16.4"/>\r
<path class="kamado_nezuko-st" d="M314.61,368.49c0.73,0.85,1.9,2.12,3.51,3.51c1.63,1.41,2.15,1.58,2.34,2.34c0.51,2.01-2.5,3.12-2.34,5.86\r
	c0.07,1.3,0.77,1.33,1.17,3.51c0.23,1.25,0.44,2.41,0,3.51c-0.76,1.91-2.75,1.29-4.68,3.51c-1.34,1.54-0.96,2.43-2.34,3.51\r
	c-1.24,0.97-2.67,1.12-3.51,1.17c-16.81,1.11-25.77-1.17-25.77-1.17c-11.6-2.96-19.75-7.29-25.77-10.54\r
	c-6.68-3.61-11.79-6.37-17.57-11.71c-1.63-1.51-6.51-6.18-12.88-16.4c-5.96-9.56-9.43-17.88-12.88-26.94\r
	c-4.04-10.6-9.05-24.81-14.05-42.16"/>\r
<path class="kamado_nezuko-st" d="M226.78,291.2c4.17,13.35,8.23,24.77,11.71,33.96c5.11,13.51,8.51,21.01,14.05,29.28\r
	c2.7,4.02,5.21,7.19,7.03,9.37"/>\r
<path class="kamado_nezuko-st" d="M247.86,346.24c1.98,2.14,5.09,5.19,9.37,8.2c4.14,2.91,9.45,5.1,19.91,9.37c16.22,6.62,18.2,7.41,22.25,8.2\r
	c6.29,1.23,11.63,1.31,15.23,1.17"/>\r
<path class="kamado_nezuko-st" d="M165.88,285.34c-2.38,0.82-6.82,2.72-10.54,7.03c-6.16,7.14-7.05,17.08-5.86,17.57\r
	c0.4,0.16,1.08-0.72,2.34-2.34c3.69-4.76,3.27-7.35,5.86-9.37c2.81-2.19,6.78-1.84,7.03-1.17c0.24,0.67-3.27,1.42-4.68,4.68\r
	c-0.8,1.84-0.12,2.6-1.17,4.68c-1.12,2.22-2.62,2.83-2.34,3.51c0.33,0.8,2.8,1.01,4.68,0c1.93-1.03,2.14-2.75,3.51-4.68\r
	c1.12-1.57,3.13-3.45,7.03-4.68"/>\r
<path class="kamado_nezuko-st" d="M168.22,302.91c0.17,3,0.72,7.11,2.34,11.71c1.39,3.95,3.16,7.08,4.68,9.37"/>\r
<path class="kamado_nezuko-st" d="M348.58,284.17c1.94,0.83,4.57,2.24,7.03,4.68c7.34,7.28,7.92,18.43,7.03,18.74c-0.12,0.04-0.23-0.12-2.34-3.51\r
	c-4.13-6.65-5.01-8.13-7.03-9.37c-1.91-1.17-4.26-1.78-4.68-1.17c-0.48,0.68,1.85,2.38,3.51,5.86c1.57,3.27,2.29,7.59,1.17,8.2\r
	c-1.18,0.64-3.58-3.22-10.54-8.2c-1.46-1.05-2.7-1.84-3.51-2.34"/>\r
<path class="kamado_nezuko-st" d="M345.06,301.74c-1.66,2.03-4.45,5.98-5.86,11.71c-1.53,6.26-0.63,11.47,0,14.05"/>\r
<path class="kamado_nezuko-st" d="M342.72,329.84c3.03-3.1,6.19-6.61,9.37-10.54c3.63-4.48,6.73-8.82,9.37-12.88"/>\r
<path class="kamado_nezuko-st" d="M233.8,376.69c0.44,0.79,1.88,3.59,1.17,7.03c-0.17,0.83-0.62,3.01-2.34,4.68c-0.62,0.6-0.93,0.68-1.17,1.17\r
	c-0.82,1.65,1.25,3.7,2.34,5.86c2.74,5.4,0.8,14.32-3.51,17.57c-0.98,0.74-2.06,1.17-2.34,2.34c-0.49,2,2.14,2.88,2.34,5.86\r
	c0.13,1.94-0.79,4.38-2.34,5.86c-0.61,0.58-0.9,0.62-1.17,1.17c-0.79,1.63,0.86,3.2,0,4.68c-0.37,0.64-0.74,0.46-1.17,1.17\r
	c-0.8,1.34-0.15,3.1,0,3.51c1.02,2.78,3.33,2.97,3.51,4.68c0.17,1.59-2.13,3.24-2.34,3.51"/>\r
<path class="kamado_nezuko-st" d="M193.98,450.47c-0.27,0.93-0.48,2.22,0,3.51c1.29,3.49,6.53,4.26,9.37,4.68c2.33,0.35,6.53,0.6,11.71-1.17\r
	c1.48,0.35,4.05,0.74,7.03,0c2.19-0.54,4.93-1.23,5.86-3.51c0.86-2.12-0.14-4.91-2.34-7.03"/>\r
<path class="kamado_nezuko-st" d="M193.98,450.47c-0.81-0.73-0.11-3.16,1.17-4.68c2.56-3.06,7.39-2.45,8.2-2.34c6.56,0.83,10.04,7.24,10.54,8.2\r
	c0.48-1.29,1.75-4.09,4.68-5.86c0.94-0.57,3.44-2.07,5.86-1.17c1.24,0.46,2.53,1.58,2.34,2.34c-0.21,0.82-2.04,0.86-3.51,1.17\r
	c-2.2,0.46-5.1,1.84-8.2,5.86c-6.67-5.92-11.17-6.46-14.05-5.86C197.65,448.83,195.01,451.41,193.98,450.47z"/>\r
<path class="kamado_nezuko-st" d="M204.52,443.45c1.73-0.56,4.13-1.14,7.03-1.17c4.78-0.06,8.49,1.37,10.54,2.34"/>\r
<path class="kamado_nezuko-st" d="M193.98,402.46c-1.39,2.18-1.42,3.69-1.17,4.68c0.53,2.11,2.58,2.9,2.34,4.68c-0.13,0.97-0.76,0.95-1.17,2.34\r
	c-0.43,1.48,0.09,2.14,0,3.51c-0.14,2.23-1.62,2.36-2.34,4.68c-0.68,2.21-0.28,5.09,1.17,7.03c1.51,2.01,3.4,2,3.51,3.51\r
	c0.09,1.09-0.87,1.47-1.17,3.51c-0.19,1.28,0.16,1.3,0,2.34c-0.38,2.49-2.49,3.2-2.34,4.68c0.06,0.63,0.54,1.47,2.34,2.34"/>\r
<path class="kamado_nezuko-st" d="M195.15,455.16c-0.09,1.3,0.01,3.18,1.17,4.68c1.47,1.91,3.85,2.22,10.54,2.34\r
	c14.04,0.27,16.15-0.85,17.57-2.34c1.46-1.55,2.06-3.38,2.34-4.68"/>\r
<path class="kamado_nezuko-st" d="M234.97,380.2c2.34,0.91,5.52,1.88,9.37,2.34c3.72,0.45,6.93,0.3,9.37,0"/>\r
<path class="kamado_nezuko-st" d="M234.97,403.63c2.27,1.25,7.3,3.61,14.05,3.51c7.62-0.1,13.07-3.27,15.23-4.68"/>\r
<path class="kamado_nezuko-st" d="M268.94,389.57c-0.65,0.67-5.51,5.79-4.68,12.88c0.12,1.06,0.84,7.26,4.16,8.96c0.43,0.22,1.51,0.68,1.69,1.58\r
	c0.18,0.91-0.66,1.77-1.17,2.34c-0.2,0.22-3,3.39-3.51,5.86c-0.65,3.15,2.01,7.3,4.68,9.37c0.88,0.68,1.77,1.14,2.34,2.34\r
	c0.99,2.07,0.12,4.37,0,4.68c-1.02,2.59-2.94,2.64-3.51,4.68c-0.26,0.93-0.28,2.42,1.17,4.68"/>\r
<path class="kamado_nezuko-st" d="M305.24,395.43c0.59,0.79,2.34,3.33,2.34,7.03c0,1.17,0,4.72-2.34,7.03c-1.14,1.12-2.2,1.33-2.34,2.34\r
	c-0.18,1.24,1.25,1.93,2.34,3.51c1.85,2.66,1.45,5.92,1.17,8.2c-0.26,2.12-0.74,6.03-3.51,8.2c-0.84,0.65-1.82,1.1-2.34,2.34\r
	c-0.51,1.2-0.26,2.35,0,3.51c0.64,2.84,1.85,3.44,2.34,5.86c0.23,1.12,0.23,2.3,0,3.51"/>\r
<path class="kamado_nezuko-st" d="M270.11,448.13c-0.51,0.7-1.26,1.96-1.17,3.51c0.22,3.77,5.17,5.62,5.86,5.86c2.97,1.04,5.69,0.42,7.03,0\r
	c0.54,0.34,1.34,0.78,2.34,1.17c0.97,0.38,5.6,2.17,10.54,0c2.94-1.29,6.69-4.29,7.03-8.2c0.04-0.48,0.02-0.89,0-1.17"/>\r
<path class="kamado_nezuko-st" d="M281.82,455.16c7.75-6.83,11.19-7.67,12.88-7.03c0.42,0.16,1.84,0.5,4.68,1.17c1.08,0.26,1.89,0.44,2.34,0\r
	c0.53-0.52,0.33-1.67,0-2.34c-1.26-2.58-6.47-2.37-7.03-2.34c-6.1,0.25-10.34,5.26-11.71,7.03c-0.33-0.83-1-2.24-2.34-3.51\r
	c-1.96-1.87-5.4-3.51-8.2-2.34c-1.39,0.58-2.57,1.83-2.34,2.34c0.28,0.63,2.51-0.35,4.68,0\r
	C276.74,448.45,279.29,449.94,281.82,455.16z"/>\r
<path class="kamado_nezuko-st" d="M273.62,445.79c2.66-0.97,6.24-1.96,10.54-2.34c5.9-0.52,10.79,0.33,14.05,1.17"/>\r
<path class="kamado_nezuko-st" d="M282.99,451.64c-0.36,0.47-0.87,1.25-1.17,2.34c-0.43,1.57-0.17,2.89,0,3.51"/>\r
<path class="kamado_nezuko-st" d="M270.11,448.13"/>\r
<path class="kamado_nezuko-st" d="M268.94,452.82c0.12,1.15,0.41,2.81,1.17,4.68c0.38,0.95,0.87,1.89,1.17,2.34c1.3,1.94,4.27,2.3,11.71,2.34\r
	c8.63,0.05,12.36-0.39,15.23-2.34c1.32-0.9,2-1.8,2.34-2.34c1.47-2.3,1.31-4.79,1.17-5.86"/>\r
<path class="kamado_nezuko-st" d="M213.89,451.64c0.36,0.47,0.87,1.25,1.17,2.34c0.43,1.57,0.17,2.89,0,3.51"/>\r
<path class="kamado_nezuko-st" d="M199.84,176.42c-2.79,1.1-3.34,4.75-3.51,5.86c-0.6,3.92,0.93,9.3,4.68,10.54c1.35,0.45,2.65,0.24,3.51,0\r
	c-0.55-0.35-3.99-2.61-4.68-7.03c-0.86-5.45,3.25-9.14,3.51-9.37C202.62,176.18,201.24,175.87,199.84,176.42z"/>\r
<path class="kamado_nezuko-st" d="M202.18,176.42c2.73-0.39,5.47-0.78,8.2-1.17"/>\r
<path class="kamado_nezuko-st" d="M203.35,192.82c3.12-0.39,6.25-0.78,9.37-1.17"/>\r
<path class="kamado_nezuko-st" d="M284.16,167.05c-2.94,0.68-5.23,2.97-5.86,5.86c-0.69,3.14,0.72,6.44,3.51,8.2"/>\r
<path class="kamado_nezuko-st" d="M285.33,164.71c-0.76,0-5.48,0.06-8.2,3.51c-3.04,3.87-2.43,10.57,2.34,15.23"/>\r
<path class="kamado_nezuko-st" d="M210.38,175.25c0.09-0.12,0.91-1.17,2.34-1.17c0.15,0,1.48,0.02,2.34,1.17c-0.44,1.93-0.93,5.34,0,9.37\r
	c0.58,2.5,1.53,4.48,2.34,5.86c-0.2,0.33-0.56,0.82-1.17,1.17c-1.57,0.91-3.33,0.09-3.51,0c-0.83-1.44-1.75-3.41-2.34-5.86\r
	C209.28,181.26,209.87,177.41,210.38,175.25z"/>\r
<path class="kamado_nezuko-st" d="M215.06,175.25c13.66-1.56,27.33-3.12,40.99-4.68"/>\r
<path class="kamado_nezuko-st" d="M217.41,190.48c13.27-1.56,26.55-3.12,39.82-4.68"/>\r
<path class="kamado_nezuko-st" d="M260.74,169.39c-0.09-0.12-0.91-1.17-2.34-1.17c-0.15,0-1.48,0.02-2.34,1.17c-0.65,1.68-1.71,5.09-1.17,9.37\r
	c0.4,3.17,1.52,5.58,2.34,7.03c0.15,0.07,1.23,0.55,2.34,0c0.71-0.35,1.05-0.94,1.17-1.17c-0.7-1.03-2.19-3.52-2.34-7.03\r
	C258.22,173.4,260.07,170.39,260.74,169.39z"/>\r
<path class="kamado_nezuko-st" d="M260.74,184.62c6.64-0.39,13.27-0.78,19.91-1.17"/>\r
<path class="kamado_nezuko-st" d="M260.74,169.39c5.47-0.39,10.93-0.78,16.4-1.17"/>\r
<path class="kamado_nezuko-st" d="M240.83,112.01c2.41-1.52,7.8-4.47,15.23-4.68c9.7-0.29,16.55,4.27,18.74,5.86"/>\r
<path class="kamado_nezuko-st" d="M211.55,116.69c-1.98-0.54-5.95-1.32-10.54,0c-8.72,2.51-12.34,10.47-12.88,11.71"/>\r
<path class="kamado_nezuko-st" d="M247.86,136.6c0.82-1.05,7.76-9.62,18.74-9.37c10.07,0.23,19.31,7.79,22.25,18.74"/>\r
<path class="kamado_nezuko-st" d="M217.41,140.12c-0.86-0.66-7.68-5.73-15.23-3.51c-7.9,2.32-13.51,11.73-11.71,22.25"/>\r
<path class="kamado_nezuko-st" d="M206.87,137.77c-5.26,1.24-8.33,8.32-7.03,14.05c1.03,4.54,5.13,9.68,10.54,9.37c5.67-0.33,9.5-6.48,9.37-11.71\r
	C219.58,142.69,212.73,136.4,206.87,137.77z"/>\r
<path class="kamado_nezuko-st" d="M270.11,128.4c-0.33-0.01-7.83-0.22-11.71,5.86c-3.2,5-2.08,11.33,1.17,15.23c4.76,5.7,14.37,6.55,19.91,1.17\r
	c4.15-4.02,5.17-10.71,2.34-16.4"/>\r
<path class="kamado_nezuko-st" d="M198.67,411.83c3.43-0.27,7.37-0.34,11.71,0c7,0.55,12.94,2,17.57,3.51c-3.11,0.89-8.53,2.02-15.23,1.17\r
	C206.28,415.7,201.44,413.41,198.67,411.83z"/>\r
<path class="kamado_nezuko-st" d="M216.24,391.92c7.8-0.35,11.71-0.74,11.71-1.17c0-0.36-2.73-0.75-8.2-1.17"/>\r
<path class="kamado_nezuko-st" d="M201.01,431.73c3.29-0.34,7.25-0.46,11.71,0c2.58,0.27,4.93,0.69,7.03,1.17c-1.26,0.76-4.68,2.58-9.37,2.34\r
	C205.47,435,202.15,432.63,201.01,431.73z"/>\r
<path class="kamado_nezuko-st" d="M271.28,390.74c1.23,1.31,3.54,3.39,7.03,4.68c5.96,2.21,11.24,0.58,12.88,0"/>\r
<path class="kamado_nezuko-st" d="M272.45,414.17c3.56-0.65,7.91-1.17,12.88-1.17c3.62,0,7.99,0.27,12.88,1.17c-2.68,1.01-6.71,2.18-11.71,2.34\r
	C280.31,416.71,275.39,415.28,272.45,414.17z"/>\r
<path class="kamado_nezuko-st" d="M275.96,434.08c2.7-0.65,6.3-1.23,10.54-1.17c3.71,0.05,6.89,0.58,9.37,1.17c-1.77,0.88-5.05,2.23-9.37,2.34\r
	C281.55,436.55,277.78,434.98,275.96,434.08z"/>\r
<path class="kamado_nezuko-st" d="M213.89,242.01c8.01-0.35,16.63-0.4,25.77,0c5.7,0.25,11.17,0.65,16.4,1.17"/>\r
<path class="kamado_nezuko-st" d="M216.24,236.15c6.63-0.22,13.67-0.24,21.08,0c6.56,0.22,12.82,0.63,18.74,1.17"/>\r
<path class="kamado_nezuko-st" d="M210.38,254.89c2.54,0.07,5.75,0.35,9.37,1.17c0.82,0.19,10.7,2.48,10.54,4.68c-0.01,0.19-0.12,0.63-1.17,1.17\r
	c-4.92,2.53-17.36,0.45-19.91,0"/>\r
<path class="kamado_nezuko-st" d="M238.49,257.23c1.47-0.43,3.03-0.83,4.68-1.17c5.24-1.08,10.01-1.32,14.05-1.17"/>\r
<path class="kamado_nezuko-st" d="M238.49,263.09c4.68,0,9.37,0,14.05,0c1.95,0,3.9,0,5.86,0"/>\r
<path class="kamado_nezuko-st" d="M223.26,236.15c0,1.95,0,3.9,0,5.86"/>\r
<path class="kamado_nezuko-st" d="M226.78,236.15c0,1.95,0,3.9,0,5.86"/>\r
<path class="kamado_nezuko-st" d="M238.49,236.15c0,1.95,0,3.9,0,5.86"/>\r
<path class="kamado_nezuko-st" d="M242,236.15c0,1.95,0,3.9,0,5.86"/>\r
<path class="kamado_nezuko-st" d="M233.8,258.22v5.05c0,0.55,0.44,0.99,0.99,0.99h2.7c0.55,0,0.99-0.44,0.99-0.99v-5.05\r
	c0-0.55-0.44-0.99-0.99-0.99h-2.7C234.25,257.23,233.8,257.68,233.8,258.22z"/>\r
<path class="kamado_nezuko-st" d="M226.78,258.4c0.02-1.62,0.98-3.03,2.34-3.51c1.73-0.62,3.88,0.34,4.68,2.34"/>\r
<path class="kamado_nezuko-st" d="M226.78,263.09c0.02,1.62,0.98,3.03,2.34,3.51c1.73,0.62,3.88-0.34,4.68-2.34"/>\r
<path class="kamado_nezuko-st" d="M217.41,259.57c3.52,0.61,7.44,1.05,11.71,1.17c1.62,0.05,3.18,0.04,4.68,0"/>\r
<path class="kamado_nezuko-st" d="M238.49,260.75c4.29-0.39,8.59-0.78,12.88-1.17"/>\r
</svg>\r
`,Xc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.kiritani_haruka-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="kiritani_haruka-st" d="M287.51,147.56c3.07,6.51,6.84,15.95,9.26,27.79c0.42,4.04,0.77,8.16,1.03,12.35\r
	c2.24,36.28-2.56,69.27-10.29,97.79c5.96-1.73,13.02-4.3,20.59-8.23c10.22-5.31,18.05-11.38,23.68-16.47\r
	c3.41-11.85,6.53-26.04,8.23-42.2c2.47-23.45,1.18-43.85-1.03-59.7"/>\r
<path class="kiritani_haruka-st" d="M157.81,180.5c1.11-4.08,3.17-9.68,7.21-15.44c2.06-2.94,4.21-5.32,6.18-7.21"/>\r
<path class="kiritani_haruka-st" d="M341.04,181.52c0.79,11.43,1.21,23.82,1.03,37.06c-0.18,13.25-0.95,25.64-2.06,37.06\r
	c7.68-4.71,12.61-9.91,15.44-13.38c3.49-4.28,5.52-8.02,6.18-9.26c0,0,2.51-4.77,4.12-10.29c21.54-73.96-9.26-120.44-9.26-120.44\r
	c-17.08-25.78-40.37-37.52-48.38-41.17c-23.43-10.69-44.01-10.49-53.53-10.29c-14.03,0.29-54.25,3.37-85.44,31.91\r
	c-34.15,31.25-46.41,82.92-32.94,132.79c3.09,3.77,6.18,7.55,9.26,11.32c-1.03-13.04-2.06-26.08-3.09-39.12\r
	c0.17,8.81,1.21,19.33,4.12,30.88c1.22,4.83,2.63,9.3,4.12,13.38c2.81,3.39,5.89,6.84,9.26,10.29c1.03,1.06,2.06,2.09,3.09,3.09\r
	c-3.09-8.02-4.98-15.09-6.18-20.59c-0.66-3.05-2.42-11.97-3.09-31.91c-0.48-14.39-0.72-21.59,0-26.76\r
	c1.17-8.38,5.22-24.4,22.65-42.2"/>\r
<path class="kiritani_haruka-st" d="M176.34,123.88c-1.66,5.62-3.17,12.18-4.12,19.56c-1.6,12.49-1.08,23.41,0,31.91\r
	c3.43,0.69,6.86,1.37,10.29,2.06c0.07-5.29,0.9-15.04,6.18-25.73c4.9-9.93,11.45-16.24,15.44-19.56"/>\r
<path class="kiritani_haruka-st" d="M204.13,121.82c-0.72,11.19-0.5,26.14,3.09,43.23c2.67,12.72,6.55,23.45,10.29,31.91\r
	c2.75,2.74,5.49,5.49,8.24,8.23c-1.3-4.45-2.53-10.01-3.09-16.47c-0.47-5.45-0.35-10.32,0-14.41c0.33,4.81,1.16,10.81,3.09,17.5\r
	c1.79,6.2,4.06,11.38,6.18,15.44c1.94,0.54,4.01,1.21,6.18,2.06c4.03,1.58,7.46,3.4,10.29,5.15c-0.34-8.24-0.69-16.47-1.03-24.7\r
	c0.52,2.59,1.19,5.34,2.06,8.24c1.52,5.09,3.33,9.56,5.15,13.38c3.09,0.69,6.18,1.37,9.26,2.06c0.34-24.02,0.69-48.04,1.03-72.06"/>\r
<path class="kiritani_haruka-st" d="M264.86,152.7c3.22,7.3,6.42,15.54,9.26,24.7c2.14,6.89,3.82,13.44,5.15,19.56c1.47-3.41,2.96-7.55,4.12-12.35\r
	c1.41-5.88,1.93-11.15,2.06-15.44c1.4,4.72,2.77,9.53,4.12,14.41c1.83,6.62,3.54,13.14,5.15,19.56c0.34-10.64,0.69-21.27,1.03-31.91\r
	"/>\r
<path class="kiritani_haruka-st" d="M153.69,180.5c0.58-0.18,2.2-0.61,4.12,0c1.68,0.54,2.69,1.59,3.09,2.06"/>\r
<path class="kiritani_haruka-st" d="M159.87,175.35c0.72,9.62,1.48,16.24,2.06,20.59c0.37,2.74,0.6,5.5,1.03,8.23c0.75,4.79,1.35,6.83,1.03,10.29\r
	c-0.21,2.29-0.59,2.65-1.03,5.15c0,0-0.87,4.94,0,11.32c1.01,7.47,19.81,27.32,51.47,36.03c0,0,18.94,5.21,57.64,2.06\r
	c2.52-0.21,6.09-0.64,10.29-2.06c4.67-1.57,8.16-3.68,10.29-5.15"/>\r
<path class="kiritani_haruka-st" d="M154.72,212.41c0.08,0.93,0.46,4.25,3.09,6.18c0.62,0.46,1.76,1.29,3.09,1.03c1.53-0.3,2.77-1.93,3.09-4.12"/>\r
<path class="kiritani_haruka-st" d="M263.83,210.35c3.55-1.05,8.49-2.09,14.41-2.06c8.65,0.05,15.47,2.35,19.56,4.12"/>\r
<path class="kiritani_haruka-st" d="M253.54,215.49c2.4-1.03,4.8-2.06,7.21-3.09"/>\r
<path class="kiritani_haruka-st" d="M262.81,213.44c-0.64,2.08-1.34,5.33-1.03,9.26c0.2,2.5,0.84,10.52,6.18,13.38c1.68,0.9,3.53,0.95,7.21,1.03\r
	c4.01,0.09,6.66,0.15,9.26-1.03c6.79-3.08,8.1-12.31,8.23-13.38c0.84-6.57-2-11.64-3.09-13.38"/>\r
<path class="kiritani_haruka-st" d="M171.19,203.14c-0.31-0.52-3.5-6.08-1.03-10.29c2.02-3.45,6.56-3.82,10.29-4.12\r
	c9.49-0.76,16.89,3.54,19.56,5.15c7.01,4.21,11.16,9.75,13.38,13.38"/>\r
<path class="kiritani_haruka-st" d="M186.63,189.76c-1.37,0.86-3.52,2.47-5.15,5.15c-4.38,7.19-2.49,18.03,4.12,23.68\r
	c0.61,0.52,5.06,4.21,11.32,4.12c1.67-0.02,4.62-0.07,7.21-2.06c2.98-2.3,3.65-5.77,4.12-8.23c1.21-6.33-0.79-11.7-2.06-14.41"/>\r
<path class="kiritani_haruka-st" d="M223.69,257.7c1.38,0.75,3.1,1.51,5.15,2.06c5.26,1.41,9.81,0.65,12.35,0"/>\r
<path class="kiritani_haruka-st" d="M256.63,175.35c2.86-0.55,6.33-0.99,10.29-1.03c4.41-0.04,8.24,0.44,11.32,1.03"/>\r
<path class="kiritani_haruka-st" d="M189.72,164.03c2.75,0.28,6.82,1.02,11.32,3.09c4.23,1.95,7.29,4.36,9.26,6.18"/>\r
<path class="kiritani_haruka-st" d="M227.81,269.02c-0.34,1.41-0.78,3.55-1.03,6.18c-0.51,5.31-0.86,8.91,1.03,12.35c0.23,0.41,3.1,5.4,8.23,6.18\r
	c5.48,0.82,10.15-3.94,12.35-6.18c6.55-6.67,7.1-14.12,11.32-14.41c1.34-0.09,2.47,0.58,3.09,1.03"/>\r
<path class="kiritani_haruka-st" d="M225.75,269.02c-1.99,2.56-4.46,6.34-6.18,11.32c-1.88,5.48-2.01,9.97-2.06,11.32\r
	c-0.35,8.87-3.75,37.05-9.06,77.68c-0.12,0.89-0.94,1.52-1.82,1.37c-2-0.34-4.76-1.11-7.65-2.87c-2.99-1.83-4.98-4.04-6.22-5.73\r
	c-0.64-0.87-0.78-1.99-0.38-3c3.49-8.91,6.95-19.43,9.69-31.42c3.07-13.45,4.53-25.66,5.15-36.03"/>\r
<path class="kiritani_haruka-st" d="M222.66,269.02c-1.33,0.34-3.17,0.94-5.15,2.06c0,0-2.78,1.58-5.15,4.12c-3.15,3.39-19.02,24.8-40.15,54.56\r
	c-1.76,2.47-3.09,3.54-5.15,6.18c-3.29,4.21-3.84,5.45-4.12,6.18c-0.59,1.54-2.39,6.23,0,9.26c2.01,2.55,6.34,3.1,9.26,2.06\r
	c2.3-0.82,3.82-2.73,5.15-2.06c0.87,0.44,0.84,1.57,2.06,2.06c0.59,0.24,1.42,0.3,2.06,0c1.55-0.73,1.3-3.25,2.06-6.18\r
	c0.41-1.59,0.92-3.37,3.09-6.18c5.83-7.55,11.67-15.1,17.5-22.65"/>\r
<path class="kiritani_haruka-st" d="M172.22,329.75c4.8,3.77,9.61,7.55,14.41,11.32"/>\r
<path class="kiritani_haruka-st" d="M278.25,331.81c0.48,4.41,1.39,9.66,3.09,15.44c1.56,5.28,3.44,9.85,5.28,13.64c0.53,1.08,0.26,2.38-0.67,3.15\r
	c-3.72,3.09-9.05,6.67-15.93,8.94c-4.18,1.38-7.74,1.88-9.26,2.06c-3.81,0.46-7.17,0.39-9.87,0.15c-0.83-0.07-1.46-0.76-1.47-1.59\r
	c-0.25-22.3,0.08-63.62,6.19-86.05c3.17-11.62,6.53-13.17,8.23-13.38c4.25-0.53,8.31,6.01,10.29,9.26\r
	c12.45,20.49,29.1,53.19,35,64.85c-5.15,2.74-10.29,5.49-15.44,8.23c-4.11-6.1-8.25-12.61-12.35-19.56\r
	c-5.9-9.99-11.01-19.66-15.44-28.82"/>\r
<path class="kiritani_haruka-st" d="M309.13,348.28c3.87,3.92,6.02,7.73,7.21,10.29c1.95,4.21,3.34,7.19,2.06,10.29c-1.32,3.21-5.12,5.67-8.24,5.15\r
	c-1.6-0.27-3.7-1.45-5.15-3.09c-1-1.13-1.22-1.95-2.06-2.06c-1.47-0.19-2.28,2.1-4.12,2.06c-1.08-0.02-1.88-0.84-2.06-1.03\r
	c-1.73-1.78-0.36-4.39-1.03-8.23c-0.21-1.23-0.71-3.04-2.06-5.15"/>\r
<path class="kiritani_haruka-st" d="M233.98,269.02c0,2.74,0,5.49,0,8.23"/>\r
<path class="kiritani_haruka-st" d="M226.78,283.43c1.5,1.31,3.89,3.05,7.21,4.12c7.25,2.34,13.58-0.2,15.44-1.03"/>\r
<path class="kiritani_haruka-st" d="M257.66,270.05c-0.06,0.13-0.48,1.08,0,2.06c0.31,0.63,0.83,0.93,1.03,1.03"/>\r
<path class="kiritani_haruka-st" d="M196.93,365.78c-3.83,5.29-5.5,9.96-4.12,11.32c0.75,0.74,2.9,1.01,3.09,1.03c1.67,0.19,2.15-0.26,3.09,0\r
	c1.75,0.49,1.54,2.47,3.09,4.12c3.03,3.23,10.47,2.68,13.38,2.06c0.49-0.1,1.68-0.39,3.09,0c1.73,0.48,2.75,1.7,3.09,2.06\r
	c3.98,4.26,20.08,4.06,25.73,1.03c0.49-0.26,2.07-1.18,4.12-1.03c1.58,0.11,2.69,0.8,3.09,1.03c4.28,2.45,15.91,3.08,20.59-2.06\r
	c1.14-1.25,1.47-2.4,3.09-3.09c2.05-0.87,3.15,0.29,6.18,0c0.52-0.05,5.04-0.48,6.18-3.09c0.47-1.07,0.25-2.25-1.03-5.15\r
	c-1.03-2.33-2.64-5.57-5.15-9.26"/>\r
<path class="kiritani_haruka-st" d="M207.22,384.31c1.96,10.06,3.26,18.49,4.12,24.7c2.2,15.95,3.3,23.93,3.09,26.76\r
	c-0.36,4.7-1.13,7.98,1.03,10.29c3.48,3.73,11.55,1.72,15.44,0c1.59-0.7,4.59-2.08,6.18-5.15c0.91-1.76,1-3.4,1.03-4.12\r
	c0.2-4.62,0.64-22.71,1.03-47.35"/>\r
<path class="kiritani_haruka-st" d="M212.37,418.28c1.72,1.34,4.88,3.39,9.26,4.12c9.29,1.54,16.32-4.16,17.5-5.15"/>\r
<path class="kiritani_haruka-st" d="M245.31,388.43c1.09,10.06,2.23,18.12,3.09,23.68c0.92,5.98,1.47,8.8,2.06,14.41c1,9.46,1.5,14.19,1.03,17.5\r
	c-0.3,2.09-0.6,3.01,0,4.12c2.5,4.64,15.27,2.33,20.59-1.03c1.94-1.22,2.76-2.51,3.09-3.09c1.26-2.22,1.07-4.5,1.03-5.15\r
	c-0.25-4.04,0.24-25.6,1.03-55.59"/>\r
<path class="kiritani_haruka-st" d="M249.42,419.31c1.43,1.35,4.95,4.3,10.29,5.15c8.96,1.41,15.53-4.3,16.47-5.15"/>\r
<path class="kiritani_haruka-st" d="M214.42,431.66c1.87,0.84,4.3,1.67,7.21,2.06c7.67,1.03,13.78-1.68,16.47-3.09"/>\r
<path class="kiritani_haruka-st" d="M251.48,435.78c2.41,0.61,5.57,1.13,9.26,1.03c7.02-0.19,12.42-2.51,15.44-4.12"/>\r
<path class="kiritani_haruka-st" d="M270.01,278.29c-1.1-0.83-2.13-1.17-3.09-1.03c-7.72,1.14-10.81,33.73-9.26,97.79"/>\r
<path class="kiritani_haruka-st" d="M219.57,270.05c-1.1,2.04-2.67,5.22-4.12,9.26c-4.05,11.29-4.06,20.76-4.12,23.68\r
	c-0.18,9.86-2.37,28.69-9.26,65.88"/>\r
<path class="kiritani_haruka-st" d="M311.19,222.7c-0.18,5.96-0.51,12.15-1.03,18.53c-1.11,13.69-2.93,26.42-5.15,38.09"/>\r
</svg>\r
`,Zc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.konoha-ninja-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="konoha-ninja-st" d="M429,114c-16.92,21.83-33.84,43.67-50.75,65.5c-4.13,5.33-11.81,6.27-17.11,2.1\r
	c-55.6-43.83-126.27-47.39-169.64-14.1c-40.82,31.34-43.83,84.88-44,89c-0.42,10.11-1.45,65.97,42,97\r
	c38.76,27.68,100.89,27.03,131-9c15.83-18.94,23.33-48.29,14-75c-8.86-25.38-34.88-54.03-65-50c-18.61,2.49-43.85,18.13-43,42\r
	c0.73,20.37,20.2,39.52,46,40"/>\r
<path class="konoha-ninja-st" d="M155.5,219.5c-27.81,48.67-55.63,97.35-83.44,146.02c-2.01,3.52,0.58,7.88,4.63,7.81l152.81-2.83"/>\r
</svg>\r
`,Qc=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.korfball-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="korfball-st" d="M67,247c4.39-75.32,60.18-152.87,145.5-170.5c68.91-14.24,137.62,14.65,178,64\r
	c42.01,51.34,41.22,110.01,40.5,125.5c-0.79,16.88-3.44,60.92-35,100c-55.32,68.48-148.73,60.41-165,59\r
	c-22.68-1.96-77.43-6.7-120-52C64.24,323.24,66.2,260.67,67,247z"/>\r
<path class="korfball-st" d="M160.5,213.29c-1.94-17.54,12.5-33.66,30-34.27c15.92-0.55,30.71,11.87,32,28.22\r
	c1.41,17.83-13.79,33.14-31,33.26C176.31,240.61,162.22,228.86,160.5,213.29z"/>\r
<path class="korfball-st" d="M275.5,214.31c-2.28-18.12,13.72-35.44,32-34.25c14.91,0.97,28.02,14.03,28,30.22\r
	c-0.02,16.61-13.86,30.12-30,30.22C290.26,240.59,277.31,228.69,275.5,214.31z"/>\r
<path class="korfball-st" d="M70.5,291.5c51.51,7.08,110.99,12.08,177,12c67.67-0.08,128.52-5.49,181-13"/>\r
<path class="korfball-st" d="M88.5,172.5c13.58,1.53,27.58,2.88,42,4c18.98,1.47,37.33,2.44,55,3"/>\r
<path class="korfball-st" d="M197.5,179.5c34.67,0.33,69.33,0.67,104,1"/>\r
<path class="korfball-st" d="M311.5,180.5c18.72-0.27,38.07-0.91,58-2c14.69-0.8,29.03-1.81,43-3"/>\r
</svg>\r
`,$c=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.kuromi-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="kuromi-st" d="M371.5,341.5c-29.22,56.41-115.68,53.86-157,45c-20.87-4.48-51.81-11.11-70-39c-21.47-32.92-9.33-71.15-7-78\r
	c19.96-58.6,89.72-72.07,95-73c49.83-8.82,115.42,10.48,139,63C373.4,263.72,390.83,304.19,371.5,341.5z"/>\r
<path class="kuromi-st" d="M202.5,383.5c-7.7-5.33-18.85-15.21-22-30c-7.53-35.34,36.15-72.75,59-68c2.31,0.48,2.75,1.05,19,8\r
	c9.01,3.86,16.55,6.97,21.82,9.12c1.36,0.55,2.9,0.38,4.1-0.46c7.12-4.93,13.31-8.81,18.08-11.66c9.45-5.65,12.86-7,17-7\r
	c4.09,0,8.64,1.33,15,6c8.29,6.09,29.48,21.65,28,47c-1.22,20.97-17.1,33.75-20,36"/>\r
<path class="kuromi-st" d="M306.5,203.5v-18.66c0-2.04,1.16-3.9,3-4.8c29-14.18,58-28.36,87-42.54"/>\r
<path class="kuromi-st" d="M369.5,254.5c5.99-3.14,11.98-6.27,17.97-9.41c1.9-0.99,3.17-2.87,3.4-5c3.54-32.86,7.09-65.73,10.63-98.59"/>\r
<path class="kuromi-st" d="M395.5,125.5c2.53-6.08,9.7-9.2,16-7c6.39,2.23,10.21,9.36,8,16c-2.22,6.67-9.62,10.04-16,8\r
	C396.54,140.27,392.7,132.23,395.5,125.5z"/>\r
<path class="kuromi-st" d="M200.5,206.5v-13.05c0-1.79-1.06-3.41-2.7-4.13c-33.43-14.61-66.86-29.21-100.3-43.82"/>\r
<path class="kuromi-st" d="M93.5,148.5c3.53,34.36,7.06,68.72,10.6,103.07c0.25,2.41,1.83,4.47,4.09,5.34\r
	c10.1,3.86,20.21,7.73,30.31,11.59"/>\r
<path class="kuromi-st" d="M77.5,145.5c-4.78-5.9-2.84-14.98,3-19c6.81-4.69,17.22-1.3,20,6c2.02,5.3-0.34,11.68-5,15\r
	C90.14,151.32,81.91,150.95,77.5,145.5z"/>\r
<path class="kuromi-st" d="M263.5,278.5c-1.74-0.31-13.01-2.53-19-13c-0.65-1.14-4.72-8.48-3-17c2.94-14.61,21.39-25.2,38-24\r
	c13.98,1.01,29.3,10.57,32,24c1.51,7.54-1.44,13.85-2,15c-5.38,11.06-17.36,13.67-19,14c0,2.33,0,4.67,0,7c-2.67,0-5.33,0-8,0\r
	c0-2.67,0-5.33,0-8c-1,0-2,0-3,0c0,2.67,0,5.33,0,8c-1.67,0-3.33,0-5,0c0-2.67,0-5.33,0-8c-1,0-2,0-3,0c0,2.67,0,5.33,0,8\r
	c-2.67,0-5.33,0-8,0C263.5,282.5,263.5,280.5,263.5,278.5z"/>\r
<path class="kuromi-st" d="M255.5,267.5c-2.99-1.19-4.22-6.23-3-10c1.04-3.21,4.18-6.42,7-6c1.08,0.16,1.8,0.81,2,1\r
	c3.48,3.24,1.69,13.27-3,15C258.27,267.58,256.91,268.06,255.5,267.5z"/>\r
<path class="kuromi-st" d="M297.49,266.67c2.99-1.19,4.22-6.23,3-10c-1.04-3.21-4.18-6.42-7-6c-1.08,0.16-1.8,0.81-2,1\r
	c-3.48,3.24-1.69,13.27,3,15C294.72,266.76,296.08,267.23,297.49,266.67z"/>\r
<path class="kuromi-st" d="M206.5,305.5c3.41,2.85,7.73,6.02,13,9c4.72,2.67,9.15,4.59,13,6c1.53,12.42-3.52,22.49-11,25\r
	c-0.28,0.09-5.89,1.89-10-1c-6.35-4.46-6.73-18.37,1-34"/>\r
<path class="kuromi-st" d="M204.5,312.5c0.49,0.89,1.14,1.93,2,3c1.04,1.29,2.1,2.27,3,3"/>\r
<path class="kuromi-st" d="M334.5,306.5c6.94,13.65,6.64,25.93,1,30c-2.59,1.87-6.25,1.96-9,1c-6.54-2.29-10.84-11.58-9-23\r
	c4.1-1.54,7.49-2.93,10-4c3.43-1.46,4.66-2.08,6-3c2.93-2,4.84-4.32,6-6"/>\r
<path class="kuromi-st" d="M342.5,307.5c-0.49,0.89-1.14,1.93-2,3c-1.04,1.29-2.1,2.27-3,3"/>\r
<path class="kuromi-st" d="M274.5,341.5c-0.46,3.46,3.81,7.25,8,7c3.71-0.22,7.48-3.6,7-7c-0.44-3.07-4.17-4.84-7-5\r
	C279.08,336.31,274.91,338.37,274.5,341.5z"/>\r
<path class="kuromi-st" d="M262.5,353.5c0.26,1.47,1.55,7.75,7,11c3.12,1.86,6.28,1.94,9,2c2.22,0.05,5.95,0.09,10-2\r
	c3.03-1.57,4.96-3.67,6-5"/>\r
<path class="kuromi-st" d="M263.5,356.5c-0.13-0.03-0.29-0.06-0.47-0.09c-3.87-0.62-9.94,1.63-10.53,6.09c-0.36,2.72,1.39,5.74,4,7\r
	c4.13,1.99,8.32-1.45,9-2c1.68-1.37,2.56-2.99,3-4"/>\r
</svg>\r
`,el=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.kuyaxi-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="kuyaxi-st" d="M376.5,225.5c-3.21-13.84-13.92-51.37-49-79c-50.4-39.69-110.71-27.14-121-25c-23.73,4.93-40.88,14.7-50,20\r
	c-33.11,19.22-50.19,42.95-55,50c-11.08,16.23-14.13,27.49-15,31c-3.76,15.11-2.45,28.12-1,36c1.69-4.36,4.17-10.9,7-19\r
	c2.28-6.53,3.47-10.12,4-10c0.85,0.19-1.39,10.49-2,22c-0.64,11.97,0.65,21.97,2,29c-4.5,10.91-11.13,32.11-4,55\r
	c1.13,3.62,2.5,6.95,4,10"/>\r
<path class="kuyaxi-st" d="M206.5,121.5c-8.33-9.37-21.28-22.8-39-37c-22.12-17.72-27.67-17.39-30-17c-18.01,3.02-25.92,39.76-32,68\r
	c-5.37,24.96-6.69,45.78-7,59"/>\r
<path class="kuyaxi-st" d="M108.5,362.5c-2.26,2.46-5.57,5.71-10,9c-5.17,3.84-7.76,5.76-10,5c-1.26-0.43-2.92-1.83-5-17\r
	c-2.06-14.98-0.74-16.43,0-17c4.24-3.29,14.52,3.39,17,5c4.14,2.69,7.07,5.69,9,8"/>\r
<path class="kuyaxi-st" d="M111.5,364.5c-3.03,7.57-6.11,18.75-5,32c0.58,6.93,1.35,14.97,7,23c4.65,6.61,10.49,10.21,14,12\r
	c-1.62-2.65-3.9-7.07-5-13c-1.11-5.96-0.57-10.94,0-14c0.62,1.83,2.2,5.69,6,9c4.81,4.19,10.14,4.85,12,5\r
	c-4.54-6.88-9.65-15.9-14-27c-4.29-10.96-6.66-20.93-8-29"/>\r
<path class="kuyaxi-st" d="M109.5,354.5c0.62-0.59,1.41-0.73,3-1c2.05-0.35,3.08-0.53,4,0c1.28,0.73,1.62,2.28,2,4\r
	c0.38,1.71,0.64,2.93,0,4c-0.74,1.24-2.22,1.5-5,2c-2.15,0.39-3.22,0.58-4,0c-1.12-0.83-1.07-2.55-1-5\r
	C108.55,356.56,108.61,355.36,109.5,354.5z"/>\r
<path class="kuyaxi-st" d="M148.5,365.5c2.01,6.21,0.82,8.23,0,9c-3.68,3.46-15.66-3.48-20-6c-4.45-2.58-7.82-5.18-10-7"/>\r
<path class="kuyaxi-st" d="M126.5,345.5c-3,2.67-6,5.33-9,8"/>\r
<path class="kuyaxi-st" d="M130.5,262.5c-0.33,16-0.67,32-1,48c-2.72,3.69-7.9,11.87-7,22c0.76,8.52,5.59,15.86,15,24\r
	c36.79,31.8,91,34,91,34c15.08,0.61,39.78-0.35,69-11"/>\r
<path class="kuyaxi-st" d="M320.5,381.5c-6.76,8.36-14.73,12.3-19,10c-3.84-2.07-3.92-8.76-4-16c-0.02-1.46-0.11-18.96,5-20\r
	c1.87-0.38,5.27,3.41,12,11c2.47,2.79,4.5,5.19,6,7"/>\r
<path class="kuyaxi-st" d="M330.5,373.5c2.46-2.81,6.37-6.66,12-10c3.99-2.37,6.99-4.14,9-3c1.8,1.02,1.76,3.77,1,16\r
	c-0.86,13.92-1.17,16.09-3,17c-3.53,1.75-9.34-2.88-12-5c-3.5-2.79-5.7-5.85-7-8"/>\r
<path class="kuyaxi-st" d="M319.5,377.5c-0.08-2.12-0.15-3.85,1-5c1-1,2.37-1,5-1s4,0,5,1c1.15,1.15,1.08,2.88,1,5\r
	c-0.07,1.88-0.12,3.09-1,4c-0.97,1-2.32,1-5,1s-4.03,0-5-1C319.62,380.59,319.57,379.38,319.5,377.5z"/>\r
<path class="kuyaxi-st" d="M99.5,255.5c0.04,2.44,0.48,6.67,3,11c0.96,1.64,2.02,2.97,3,4c5-1.67,10-3.33,15-5c-0.73-7.79-1.23-18.84,0-32\r
	c1.38-14.77,3.27-35.14,16-56c4.25-6.97,11.64-17.15,24-27"/>\r
<path class="kuyaxi-st" d="M121.5,225.5c-0.75,5.21-1.23,12.48,0,21c1.07,7.43,3.12,13.52,5,18c13.33-5.67,26.67-11.33,40-17\r
	c1.81-8.65,4.37-18.08,8-28c10.17-27.81,24.78-48.69,37-63"/>\r
<path class="kuyaxi-st" d="M193.5,180.5c-4.14,8.41-8.38,18.44-12,30c-4.32,13.8-6.69,26.39-8,37c3.33-0.67,6.67-1.33,10-2\r
	c0.49-1.84,1.36-4.34,3-7c1.34-2.17,2.79-3.82,4-5c-0.33,4-0.67,8-1,12c15.33-1.33,30.67-2.67,46-4c2.76-5.84,5.76-11.85,9-18\r
	c3.32-6.3,6.67-12.3,10-18c-2.88,6.47-5.74,14.16-8,23c-1.36,5.33-2.32,10.36-3,15c2.67,0.33,5.33,0.67,8,1\r
	c3.81-13.73,9.21-29.36,17-46c4.85-10.37,9.96-19.7,15-28c1.98,13.56,5.32,29.53,11,47c5.47,16.8,11.87,31.18,18,43\r
	c6,5.33,12,10.67,18,16"/>\r
<path class="kuyaxi-st" d="M139.5,204.5c-3.63,11.66-6.63,26.65-6,44c0.15,4.21,0.51,8.22,1,12"/>\r
<path class="kuyaxi-st" d="M319.5,229.5c1.01,5.97,2.01,11.97,3,18c1.37,8.38,2.71,16.71,4,25"/>\r
<path class="kuyaxi-st" d="M326.5,174.5c7.64,26.09,8.57,47.41,8,62c-0.14,3.56-1.67,38.34-11,67c-1.07,3.29-5.17,15.5-7,31\r
	c-0.89,7.52-0.98,13.69-1,16c-0.05,6.9,0.4,12.97,1,18"/>\r
<path class="kuyaxi-st" d="M366.5,212.5c3.84,10.67,7.91,24.9,10,42c2.38,19.41,1.17,33.93,0,47c-1.94,21.78-3.21,34.2-12,47\r
	c-4.22,6.15-8.81,10.4-12,13"/>\r
<path class="kuyaxi-st" d="M356.5,339.5c-2.77,5.6-6.63,12.18-12,19c-3.74,4.76-7.52,8.73-11,12"/>\r
<path class="kuyaxi-st" d="M145.5,77.5c5.78,3.92,13.02,9.72,20,18c10.09,11.97,15.28,23.98,18,32"/>\r
<path class="kuyaxi-st" d="M292.5,127.5c19.26-16.51,36.78-28.13,50-36c26.24-15.63,33.47-15.28,38-13c4.54,2.29,7.26,6.96,14,37\r
	c4.58,20.43,6.88,30.64,8,40c3.91,32.58,1.06,62.39-3,85"/>\r
<path class="kuyaxi-st" d="M376.5,85.5c2.63,10.41,5.83,25.93,7,45c1.07,17.41-0.01,30.3-2,53c-1.26,14.37-3.35,33.84-7,57"/>\r
<path class="kuyaxi-st" d="M386.5,234.5c8.33,4.67,16.67,9.33,25,14c-8.67,4-17.33,8-26,12c-2.67-3-5.33-6-8-9"/>\r
<path class="kuyaxi-st" d="M399.5,254.5c0,5.33,0,10.67,0,16c2.49,3.57,6.1,9.67,8,18c0.9,3.93,3.48,17.39-3,32\r
	c-2.69,6.05-7.46,11.03-17,21c-9.43,9.85-14.45,12.72-20,13c-2.95,0.15-5.4-0.46-7-1"/>\r
<path class="kuyaxi-st" d="M148.5,303.5c-3.88-2.15-8.45-5.66-10-11c-3.63-12.49,11.46-27.3,25-33c3.62-1.52,20.76-8.75,33,1\r
	c5.1,4.06,9.22,10.96,9,18c-0.41,12.98-15.62,26.38-38,28c0.19,0.76,1.96,8.23-3,14c-4.64,5.4-11.54,5.11-14,5\r
	c-2.67-0.11-7.03-0.3-9-3C138.74,318.72,141.15,310.68,148.5,303.5z"/>\r
<path class="kuyaxi-st" d="M284.5,316.5c-4.08-0.58-15.11-2.7-24-12c-2.11-2.21-13.98-14.63-10-26c4.67-13.32,27.18-13.97,29-14\r
	c20.18-0.34,45.16,13.82,44,30c-0.89,12.49-16.94,20.53-20,22c1.03,1.49,2.91,4.7,3,9c0.09,4.39-1.65,12.22-8,14\r
	c-5.27,1.47-11.02-1.98-13-6c-0.76-1.54-0.85-4.04-1-9C284.4,321.15,284.44,318.39,284.5,316.5z"/>\r
<path class="kuyaxi-st" d="M206.5,307.5c4.93-0.22,8.5,2.05,18,3c8.15,0.82,9.38-0.56,14,0c12.12,1.47,24.06,13.37,28,27\r
	c3.16,10.92,2.59,27.78-7,34c-5.92,3.84-14.16,2.9-22,2c-8.39-0.96-7.97-2.7-15-3c-10.58-0.45-13.64,3.4-21,1\r
	c-5.52-1.8-8.83-5.61-10-7c-4.67-5.53-5.36-11.61-6-18c-0.91-9.09-1.82-18.27,4-27C190.7,317.71,197.23,307.91,206.5,307.5z"/>\r
<path class="kuyaxi-st" d="M207.5,217.5c-2.95,3.79-8.71,10.17-18,15c-8.52,4.43-16.34,5.64-21,6"/>\r
<path class="kuyaxi-st" d="M258.5,223.5c1.45,2.92,3.65,6.5,7,10c8,8.36,17.55,11.06,22,12"/>\r
<path class="kuyaxi-st" d="M405.5,281.5c0-10,0-20,0-30"/>\r
<path class="kuyaxi-st" d="M403.5,214.5c0.67,10,1.33,20,2,30"/>\r
<path class="kuyaxi-st" d="M87.5,219.5c-3.67,2.67-7.33,5.33-11,8c2.67,2,5.33,4,8,6"/>\r
<path class="kuyaxi-st" d="M128.5,369.5c1.46,5.57,2.83,11.58,4,18c1.43,7.82,2.38,15.18,3,22"/>\r
<path class="kuyaxi-st" d="M141.5,418.5c3.9-2.26,8.98-5.75,14-11c4.11-4.3,7-8.55,9-12c0,5,0,10,0,15c2.8-1.9,6.46-4.79,10-9\r
	c3.42-4.05,5.61-7.99,7-11c-0.09,3.66,0.11,8.08,1,13c0.54,2.96,1.24,5.64,2,8c1.54-1.48,3.75-3.81,6-7c2.25-3.2,3.01-5.1,4-5\r
	c0.97,0.09,2.17,2.07,3,11c4.77-1.71,11.33-4.69,18-10c4.31-3.43,7.58-6.97,10-10"/>\r
<path class="kuyaxi-st" d="M257.5,389.5c2.71,1.38,5.84,3.31,9,6c7.35,6.27,11.12,13.49,13,18c3.78-3.31,8.36-8.17,12-15\r
	c2.18-4.09,3.08-7.13,4-7c1.14,0.16,1.98,5.2,1,25"/>\r
<path class="kuyaxi-st" d="M317.5,385.5c-0.51,3.53-1.59,8.1-4,13c-5.33,10.86-13.88,16.61-18,19c2.37-0.04,5.97-0.4,10-2\r
	c3.05-1.21,5.38-2.74,7-4c-0.76,3.41-1.99,7.54-4,12c-1.6,3.54-3.35,6.54-5,9c4.35-0.67,11.22-2.52,17-8c7.26-6.89,8.76-15.71,10-23\r
	c1.01-5.97,0.83-11.38,0.77-12.69c-0.13-2.93-0.46-5.41-0.77-7.31c1.52,3.63,2.98,7.99,4,13c2.34,11.51,1.31,21.4,0,28\r
	c3.87-1.27,9.96-3.82,16-9c7.64-6.54,11.34-13.96,13-18c-0.67,7.33-1.33,14.67-2,22c2.39-3.31,5.85-8.13,10-14\r
	c5.28-7.47,7.93-11.21,9-13c8.12-13.54,8.89-25.16,10-25c0.74,0.11,1.03,5.33-1,28c2.84-5.26,5.61-11.26,8-18\r
	c7.53-21.23,8.01-40.55,7-54"/>\r
<path class="kuyaxi-st" d="M130.5,159.5c-0.02-6.08,0.47-11.18,1-15c1.65-11.97,4.85-20.12,8-28c4.24-10.6,5.97-11.58,7-12\r
	c6.03-2.43,14.11,4.28,21,10c6.64,5.51,11.17,11.08,14,15"/>\r
<path class="kuyaxi-st" d="M105.5,185.5c1.21-12.52,2.77-22.8,4-30c0,0,3.95-23.1,22-65c1.26-2.93,4-9.06,9-10c1.95-0.37,4,0.12,9,3\r
	c3.82,2.2,9.16,5.69,15,11"/>\r
<path class="kuyaxi-st" d="M302.5,131.5c13.58-11.85,25.86-20.29,35-26c27.91-17.44,34.68-14.54,37-13c3.17,2.1,4.44,5.91,5,9"/>\r
<path class="kuyaxi-st" d="M325.5,144.5c4.03-4.34,10.91-10.76,21-16c8.23-4.27,16.8-8.72,22-7c7.71,2.56,14.09,20.77,5,95"/>\r
<path class="kuyaxi-st" d="M99.5,318.5c-0.11,4.32,0.24,11.18,3,19c2.6,7.39,6.33,12.73,9,16"/>\r
<path class="kuyaxi-st" d="M377.5,291.5c0.15-0.47,2.6-7.66,7-8c3.26-0.25,5.8,3.41,9,8c3.45,4.96,5.48,7.88,6,12\r
	c0.92,7.29-3.92,10.23-17,28c-0.71,0.96-2.25,3.06-5,4c-2.45,0.83-4.75,0.37-6,0"/>\r
</svg>\r
`,tl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.lele-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="lele-st" d="M96.37,40.4c4.53-0.51,6.32,10.9,17.54,21.33c10.97,10.2,23.89,12.9,27.97,13.75\r
	c23.63,4.93,33.08-8.49,61.15-2.37c6.25,1.36,5.08,1.87,10.43,2.84c22.64,4.1,29.19-7.66,50.25-6.64\r
	c15.7,0.76,31.41,8.23,36.03,10.43c4.69,2.23,11.54,5.93,21.81,7.58c5.74,0.93,8.03,0.49,14.22,0.95\r
	c14.04,1.04,19.73,4.61,26.55,5.69c25.05,3.98,43.82-28.94,54.04-22.75c5.45,3.3,4.48,15.31,3.79,23.7\r
	c-0.84,10.26-3.54,12.1-5.69,23.7c-1.81,9.79-0.14,9.86-0.95,30.34c-0.87,21.98-2.88,24.27,0,30.34\r
	c4.92,10.37,12.68,7.65,19.44,18.49c6.83,10.95-0.68,14.38,5.69,35.08c2.93,9.52,6.72,15.94,5.21,26.07\r
	c-0.72,4.83-2.3,8.24-2.84,9.48c-8.01,18.22-8.62,60.29,0,101.45c3.82,18.21,5.79,18.83,8.06,34.61c1.05,7.32,1.64,14.25,1.91,20.68\r
	c0.7,16.67-12.65,30.56-29.34,30.62l-350.67,1.27c-8.49,0.03-16.15-5.25-18.98-13.25c-2.3-6.5-4.09-14.15-4.44-22.73\r
	c-0.42-10.34,1.66-12.49,3.79-31.29c3.53-31.03-1.59-29.83,2.84-44.56c3.87-12.87,9.27-18.77,13.27-37.92\r
	c1-4.78,1.57-8.76,1.9-11.38v-49.3c1.9-11.82,5.3-28.63,11.38-45.51c3.32-9.23,6.12-14.78,9.48-19.91\r
	c5.32-8.11,8.44-9.62,11.38-14.22c3.79-5.93,5.43-14.11,0-38.87c-7.2-32.86-14.2-37.25-14.22-56.89\r
	C87.35,56.69,91.16,40.98,96.37,40.4z"/>\r
<path class="lele-st" d="M140.45,158.44c9.24-15.7,28.91-18.18,41.72-15.17c17.35,4.08,25.33,19.04,30.34,28.44\r
	c3.56,6.68,7.38,14.1,4.74,21.81c-2.55,7.44-9.66,11.03-14.22,13.27c-13.4,6.59-26.75,4.12-33.18,2.84\r
	c-10.06-2-19.6-3.9-26.55-12.33C134.99,187.23,133.06,171,140.45,158.44z"/>\r
<path class="lele-st" d="M329.13,186.88c-0.34,2.45-1.59,11.58,3.79,18.96c6.44,8.83,18.41,9.74,27.5,10.43\r
	c9.52,0.72,17.23,1.31,22.75-2.84c15.11-11.37,10.43-55.72-9.48-62.58C357.17,145.17,332.01,165.93,329.13,186.88z"/>\r
<path class="lele-st" d="M248.54,255.15c-6.85,14.6-5.4,21.76-2.84,25.6c3.11,4.68,7.19,3.43,15.17,11.38\r
	c4.84,4.83,5.38,7.32,10.43,10.43c1.89,1.16,5.83,3.52,11.38,3.79c2.05,0.1,7.2,0.35,11.38-2.84c2.44-1.87,2.89-3.65,4.74-6.64\r
	c4.51-7.28,9.05-8.3,12.33-12.33c3.04-3.73,5.49-10.65,1.9-24.65"/>\r
<path class="lele-st" d="M282.67,296.86c-0.32,8.85-0.63,17.7-0.95,26.55"/>\r
<path class="lele-st" d="M200.18,335.74c8.4,2.92,28.95,8.74,53.09,1.9c12.79-3.62,22.32-9.59,28.44-14.22\r
	c2.05,3.85,6.58,11,15.17,16.12c16.6,9.89,34.29,3.82,36.98,2.84"/>\r
<path class="lele-st" d="M157.52,277.9c-25.92,0-51.83,0-77.75,0"/>\r
<path class="lele-st" d="M148.04,290.23c-23.7,5.06-47.41,10.11-71.11,15.17"/>\r
<path class="lele-st" d="M177.43,308.24c-30.02,8.85-60.05,17.7-90.07,26.55"/>\r
<path class="lele-st" d="M346.19,290.23c27.18,0.63,54.36,1.26,81.54,1.9"/>\r
<path class="lele-st" d="M347.14,307.29c24.02,2.84,48.04,5.69,72.06,8.53"/>\r
<path class="lele-st" d="M347.14,322.46c22.75,6.32,45.51,12.64,68.26,18.96"/>\r
<path class="lele-st" d="M253.28,337.63"/>\r
</svg>\r
`,nl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.lil-hater-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="lil-hater-st" d="M270.5,81.5c-0.85-2.46-2.32-5.78-5-9c-15.85-19.06-53.9-10.5-65-8c-52.81,11.88-84.28,54.17-95,69\r
	c-20.05,27.74-46.68,78.85-31,95c11.63,11.98,43.59,1.68,55-2c14.32-4.61,24.08-7.73,32-17c14.12-16.51,4.35-30.93,20-54\r
	c4.56-6.72,12.68-18.68,25-20c11.03-1.18,13.36,7.47,27,7c12.07-0.42,16.03-7.39,29-6c2.99,0.32,8.53,0.91,13,4\r
	c13.77,9.5,3.69,33.12,11,62c2.28,9.02,8.3,32.77,27,45c27.13,17.74,61.54-1.49,76,18c5.73,7.72,3.46,14.97,9,17\r
	c9.99,3.67,28.09-15.99,37-34c14.81-29.91,6.92-60.61,6-64c-5.58-20.5-35.13-43.28-94-88c-17.44-13.25-36.15-26.87-58-23\r
	C281.17,74.98,274.73,78.58,270.5,81.5z"/>\r
<path class="lil-hater-st" d="M121.5,228.5c-0.06,26.37,18.86,48.02,42,51c28.4,3.65,56.66-21.64,54-49c-2.02-20.79-21.56-39.27-47-41"/>\r
<path class="lil-hater-st" d="M284.5,187.5c-34.63-7.2-64.8,16.5-67,43c-2.17,26.11,23.11,51.2,51,52c20.46,0.59,40.1-11.95,50-32"/>\r
<path class="lil-hater-st" d="M167.5,291.5c2.05-6.68,8.51-9.85,19-15c6.75-3.32,16.43-7.93,30-8c3.7-0.02,17.8,0.25,32,9\r
	c6.63,4.09,13.52,8.33,15,16c1.58,8.21-3.98,15.39-6,18c-11.47,14.81-32.14,15.64-41,16c-10.15,0.41-23.41,0.94-35-8\r
	C174.31,313.95,164.27,302.04,167.5,291.5z"/>\r
<path class="lil-hater-st" d="M170.5,287.5c5.86,4.43,20.61,14.36,42,16c25.59,1.97,44.18-9.18,50-13"/>\r
<path class="lil-hater-st" d="M100.5,233.5c-1.27,6.71-2.62,15.95-3,27c-0.15,4.48-0.79,23.07,3,39c6.78,28.53,27.57,47.91,39,57"/>\r
<path class="lil-hater-st" d="M118.5,361.5c1.77-4.64,9.39-6.02,14-6c8.74,0.03,15.47,5.13,23,11c9.55,7.44,9.39,10.36,16,13\r
	c8.65,3.46,16.78,1.59,19,1c9.12-2.41,14.35-8.52,17-11c17.81-16.66,54.66,3.67,97,1c12.42-0.78,31.23-3.92,54-16l0,17.11\r
	c0,2.36,1.07,4.62,2.94,6.06c12.15,9.33,16.49,18.12,18.06,24.84c1.92,8.25,0.74,18.11,6,26c0.73,1.09,2.79,3.96,3,8\r
	c0.09,1.73-0.18,3.33-0.6,4.72c-0.6,1.96-2.45,3.28-4.5,3.28l-273.34,0c-4.03,0-7.08-3.7-6.26-7.65\r
	c2.17-10.44,6.74-24.14,16.71-37.35c3.95-5.23,8.09-9.52,12-13c-2.62-2.65-6.45-6.95-10-13C119.21,367.9,117.32,364.59,118.5,361.5z\r
	"/>\r
<path class="lil-hater-st" d="M132.5,386.5c5.16,2.55,12.9,6.56,22,12c17.64,10.55,17.62,12.88,26,17c20.46,10.05,42.05,6.7,53,5\r
	c10.06-1.56,17.28-4.13,31-9c4.81-1.71,9.14-3.39,13-4.96c9.58-3.92,16.39-7.26,18-8.04c7.56-3.65,24.16-10.4,64-24"/>\r
<path class="lil-hater-st" d="M176.5,413.5c5.55,5.91,9.43,11.16,12,15c3.68,5.49,5.52,9.27,10,11c3.86,1.49,7.56,0.64,10,0\r
	c13.92-3.67,25.37-10.82,31-14c9.5-5.36,12.01-4.82,28-11c12.88-4.98,31.02-12.98,53-26"/>\r
<path class="lil-hater-st" d="M133.5,387.5c11.23,14.82,13.43,25.49,14,30c0.33,2.57,0.81,8.55,1,15c0.15,4.95,0.09,9.08,0,12"/>\r
<path class="lil-hater-st" d="M158.5,401.5c1.86,4.35,3.72,9.72,5,16c2.22,10.88,1.84,20.3,1,27"/>\r
<path class="lil-hater-st" d="M334.5,383.5c-4.54,6.83-9.81,16.2-14,28c-4.57,12.87-6.33,24.38-7,33"/>\r
<path class="lil-hater-st" d="M354.5,376.5c-4.93,7.8-10.5,18.17-15,31c-5.02,14.31-7.12,27.15-8,37"/>\r
<path class="lil-hater-st" d="M394.5,277.5c-1.32,10.04-4.23,23.81-11,39c-7.77,17.43-17.63,30-25,38"/>\r
<path class="lil-hater-st" d="M330.5,272.5c-17.63,0.6-31.16,16.03-31,33c0.15,16.21,12.77,30.23,28,32c19.53,2.28,38.02-16.19,36-36\r
	C361.91,285.87,347.8,271.91,330.5,272.5z"/>\r
<path class="lil-hater-st" d="M98.5,286.5c1.16-2.14,8.31-14.89,20-16c16.45-1.56,34.88,20.62,29,39c-3.82,11.94-17.35,20.57-33,20"/>\r
<path class="lil-hater-st" d="M386.5,309.5c6.73-1.5,26.05-4.86,46,5c25.49,12.6,41.29,41.48,38,70c-2.98,25.89-20.51,41.3-25,45\r
	c-25.38,20.95-55.63,15.82-60,15"/>\r
<path class="lil-hater-st" d="M384.5,315.5c1.56,5.08,1.42,9.21,1,12c-2.83,18.83-25.99,26.67-27,27"/>\r
<path class="lil-hater-st" d="M415.5,444.5c0.74-16.45-1.15-29.31-3-38c-3.5-16.42-8.05-23.41-6-36c0.57-3.49,2.82-17.36,13-24\r
	c12.15-7.93,32.62-3.62,49,12"/>\r
<path class="lil-hater-st" d="M377.5,395.5c1.73-9.65,5.27-22.87,13-37c13-23.75,30.91-37.43,41-44"/>\r
<path class="lil-hater-st" d="M377.5,328.5c7.44,1.02,19.36,3.61,32,11c6.15,3.59,24.95,14.96,35,39c9.21,22.03,5.66,41.79,4,49"/>\r
<path class="lil-hater-st" d="M156.5,214.5c4.56,1.06,7.8,4.83,8,9c0.26,5.49-4.83,10.04-10,10c-5.59-0.04-10.62-5.44-10-12"/>\r
<path class="lil-hater-st" d="M244.5,216.5c-5.54,0.27-9.84,5.49-9,11c0.78,5.17,5.82,8.84,11,8c4.77-0.78,8.29-5.15,8-10\r
	C254.19,220.31,249.63,216.25,244.5,216.5z"/>\r
</svg>\r
`,rl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.lloyd-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="lloyd-st" d="M327.5,156.5c11.47-6.56,28.78-14.79,51-19c24.65-4.67,39.91-1.48,41-6c1.5-6.24-25.39-21.18-54-25\r
	c-16.97-2.27-31.36-0.19-41,2"/>\r
<path class="lloyd-st" d="M197.5,199.5c8.24,11.78,16.38,15.59,22,17c32.75,8.21,70.3-42.76,96-32c3.03,1.27,13.86,6.73,16,4\r
	c0.55-0.7,0.37-1.74,0-3c-2.48-8.48-8.53-9.79-10-15c-2.24-7.96,9.02-15.05,6-20c-1.08-1.76-3.34-2.24-7-3\r
	c-6.11-1.28-11.13-0.18-12,0c-13.35,2.82-71.43,6.26-80,8c-0.45,0.09-1.32,0.29-2,1c-1.18,1.23-0.58,2.76-1,5c-0.45,2.39-1.94,5-4,6\r
	c-1.39,0.67-2.57,0.38-5,0c-7.15-1.13-11.59-1.83-13,0c-0.58,0.76-0.15,1.31,0,6c0.07,2.09,0.04,3.82,0,5"/>\r
<path class="lloyd-st" d="M180.5,193.5c-0.37,1.04-0.78,2.7,0,4c1.17,1.95,4.33,2,6,2c9.94,0.01,27.87-0.94,29-1c0.54-1.95,1.03-4.91,0-8\r
	c-2.14-6.44-8.79-7.27-13-13c-2.2-3-4.26-8.07-3-17c-1.48-0.39-4.09-0.84-7,0c-3.14,0.91-4.99,2.84-8,6c-2.7,2.83-4.16,4.36-5,7\r
	c-1.08,3.38-0.45,6.43,0,8c-1.18,0-2.59,0.16-3,1c-0.33,0.67,0.23,1.24,0,2c-0.39,1.3-2.53,1.43-4,2c-4.17,1.63-6.52,8.24-5,10\r
	c0.73,0.85,2.34,0.53,5,0C176.03,195.8,178.75,194.5,180.5,193.5z"/>\r
<path class="lloyd-st" d="M324.5,123.5c4.33-1.14,10.53-2.26,18-2c7.06,0.25,12.87,1.66,17,3c-11.57,4.42-16.59,7.72-19,10\r
	c-0.73,0.69-2.93,2.91-6,3c-1.54,0.05-2.58-0.47-4-1c-2.05-0.77-5.03-1.64-9-2"/>\r
<path class="lloyd-st" d="M325.5,122.5c-1.23-36.65-22.26-64.99-48-70c-15.34-2.99-28.86,2.99-36,7c-4.96,0.12-13.01,1.1-21,6\r
	c-20.44,12.54-20.99,38.77-21,41"/>\r
<path class="lloyd-st" d="M206.5,97.5c-1.93,1.87-6.22,6.55-8,14c-2.21,9.27,0.94,16.73,2,19"/>\r
<path class="lloyd-st" d="M206.5,112.5c-1.62,2.48-3.83,6.55-5,12c-0.74,3.46-1.91,8.95,0,15c1.14,3.62,2.48,4.57,2,7\r
	c-0.61,3.06-3.23,4.11-4,8c-0.32,1.62-0.18,3.04,0,4c1.33-1,2.67-2,4-3c0.05,0.59,0.22,1.77,1,3c0.68,1.07,1.51,1.69,2,2\r
	c0.67-2.67,1.33-5.33,2-8c0.01,0.55,0.11,1.83,1,3c1.73,2.29,4.8,2.02,5,2c1.51-4.42,1.01-7.19,0-9c-0.79-1.41-1.77-2.03-4-4\r
	c-2.56-2.26-4.55-4.36-6-6c-1,0-2,0-3,0"/>\r
<path class="lloyd-st" d="M220.5,86.5c0.02,3.57,0.04,8.35,0,14c-0.14,21.46-0.8,24.72-3,28c-4.72,7.04-12.75,8.62-12,11\r
	c0.53,1.7,4.92,1.86,9,2c1.21,0.04,6.92,0.24,11-1c10.53-3.21,17.17-18.22,19-30c1.86-11.99-1.53-18.97,3-22\r
	c0.75-0.5,1.75-0.92,15-1c5.14-0.03,7.71-0.05,8,0c13.07,2.19,24.42,19.67,27,26c0.43,1.07,1.13,3.07,3,4c2.5,1.25,4.79-0.55,7,1\r
	c0.97,0.68,0.89,1.28,2,3c1.48,2.29,3.16,3.58,5,5c2.21,1.71,9.72,6.92,12,5c1.79-1.51-0.4-6.82-3-13c-3.1-7.37-6.47-13.1-9-17"/>\r
<path class="lloyd-st" d="M198.5,125.5c-1.83,0.19-3.84,0.5-6,1c-3.51,0.81-6.53,1.91-9,3c0.52-0.01,3.11,0.02,5,2\r
	c1.91,2.01,2.33,5.2,1,8"/>\r
<path class="lloyd-st" d="M173.5,147.5c1-0.07,2.44-0.29,4-1c2.33-1.06,3.68-2.65,4-3c1.69-1.86,6.4-3.87,19-5"/>\r
<path class="lloyd-st" d="M331.5,187.5c-0.2,3.02-0.22,7.63,1,13c2.22,9.76,6.9,14.84,11,22c5.29,9.25,6.87,17.17,9,28\r
	c1.8,9.19,3.49,24.14,0,43"/>\r
<path class="lloyd-st" d="M291.5,187.5c-0.09,3.44-0.08,9.54,1,17c3.91,26.88,16.73,36.82,19,60c0.52,5.33,0.74,13.95-2,25"/>\r
<path class="lloyd-st" d="M196.5,199.5c-1.7,5.09-4.44,13.15-8,23c-8.55,23.64-11.44,28.79-12,38c-0.43,7.07,0.43,18.08,8,32\r
	c39.67,1.33,79.33,2.67,119,4"/>\r
<path class="lloyd-st" d="M224.5,140.5c-0.41,1.83-0.76,3.83-1,6c-0.5,4.56-0.37,8.63,0,12"/>\r
<path class="lloyd-st" d="M321.5,130.5c0.09,2.18,0.1,4.52,0,7c-0.15,3.65-0.52,7-1,10"/>\r
<path class="lloyd-st" d="M307.5,118.5c-0.14,2.51,0.19,4.84,1,7c1.01,2.71,2.01,3.11,3,6c0.69,2.03,0.79,3.68,1,7\r
	c0.12,1.98,0.2,4.72,0,8"/>\r
<path class="lloyd-st" d="M215.5,153.5c0.69,0.91,1.67,1.99,3,3c2.68,2.03,5.42,2.73,7,3"/>\r
<path class="lloyd-st" d="M137.5,181.5c-1.44-3.21-3.64-9.32-3-17c0.34-4.07,0.64-7.61,3-11c4.16-5.96,9.04-3.27,28-9\r
	c1.56-0.47,4.1-1.27,6,0c3.19,2.12,2.26,8.45,2,10"/>\r
<path class="lloyd-st" d="M186.5,164.5c-1.03-0.76-2.43-2.05-3-4c-0.83-2.86,0.92-4.5,0-6c-1.41-2.31-8.15-2.62-11,1\r
	c-1.99,2.52-1.24,5.89-1,7c1.3,5.9,7.08,8.59,8,9"/>\r
<path class="lloyd-st" d="M169.5,188.5c-1.45-0.43-3.72-1.26-6-3c-3.75-2.85-3.67-5.2-6-7c-5.17-3.98-16.87-1.19-22,6\r
	c-1.98,2.78-2.53,5.59-3,8c-0.9,4.63-0.42,8.48,1,15c2.76,12.69,4.14,19.03,8,25c2.44,3.76,4.79,7.4,9,10c12.3,7.6,28.83-0.85,31-2"\r
	/>\r
<path class="lloyd-st" d="M134.5,186.5c-3.32-4.41-7.2-11.23-8-20c-0.47-5.14-1.23-13.54,4-17c4.45-2.95,10.6-0.58,12,0"/>\r
<path class="lloyd-st" d="M133.5,148.5c-0.72-0.36-1.74-0.77-3-1c-1.67-0.3-3.08-0.17-4,0c-0.68-0.94-3.52-4.64-8-5\r
	c-4.27-0.34-7.43,2.56-9,4c-8.58,7.87-10.91,24.72-5,38c1.91,4.29,6.36,14.29,15,15c6.53,0.53,11.64-4.55,13-6"/>\r
<path class="lloyd-st" d="M109.5,146.5c-0.51-0.68-2.39-3.03-5-3c-1.99,0.02-3.41,1.42-4,2c-3.87,3.8-9.21,18.21-4,36\r
	c1.93,6.6,4.23,14.03,11,17c3.41,1.5,6.77,1.34,9,1"/>\r
<path class="lloyd-st" d="M94.5,163.5c-1.24,0.75-2.89,1.99-4,4c-1.56,2.83-1,5.29-1,8c0.02,9.19-6.31,11.75-6,22\r
	c0.03,1.01,0.11,3.81,1,4c1.24,0.27,2.95-4.81,7-12c1.95-3.47,3.76-6.2,5-8"/>\r
<path class="lloyd-st" d="M328.5,284.5c2.17-1.12,6-2.73,11-3c6.65-0.36,11.7,1.82,14,3"/>\r
<path class="lloyd-st" d="M340.5,325.5c-0.18,1.07-0.78,3.69-3,6c-0.18,0.19-2.11,2.15-5,3c-3.71,1.09-7.54-0.07-13-3\r
	c-10.43-5.6-15.64-8.39-18-14c-4-9.51,1.36-19.22,4-24c2.19-3.97,5.25-9.51,11-11c3.65-0.94,6.82,0.36,13,3\r
	c24.56,10.49,27.11,12.11,29,16c0.52,1.07,3.21,6.88,1,13c-3.15,8.72-13.64,10.76-15,11c-0.57,0.1-11.6,1.88-19-6\r
	c-1.51-1.61-4.83-5.14-5-10c-0.16-4.66,2.69-6.99,2-13c-0.22-1.92-0.48-4.15-2-5c-2.6-1.45-7.45,1.91-10,5\r
	c-3.69,4.46-6.32,12.83-2,20c4.13,6.86,12.98,9.94,21,7"/>\r
<path class="lloyd-st" d="M332.5,286.5c1.19-0.44,5.77-1.99,11,0c6.31,2.4,8.64,8.07,9,9"/>\r
<path class="lloyd-st" d="M184.5,292.5c0.33,4,0.67,8,1,12c-4.67,0-9.33,0-14,0c0,2.67,0,5.33,0,8c68.62,2.62,109.46,4.39,113,5\r
	c0.36,0.06,1.53,0.32,3,0c2.78-0.61,3.71-2.67,6-4c1.31-0.76,3.48-1.52,7-1"/>\r
<path class="lloyd-st" d="M182.5,313.5c-2.71,3.53-6.9,9.96-9,19c-2.73,11.8-0.39,21.53,1,26c-3.67,18.33-7.33,36.67-11,55\r
	c-2.34,0.41-5.54,1.23-9,3c-2.52,1.29-4.51,2.74-6,4c-0.67,8.67-1.33,17.33-2,26c21,0.67,42,1.33,63,2c12-5,24-10,36-15\r
	c-0.19-3.34-0.22-7.02,0-11c0.31-5.63,1.08-10.67,2-15"/>\r
<path class="lloyd-st" d="M235.5,315.5c-1.48,5.06-2.79,11.5-3,19c-0.45,16.23,4.54,28.95,8,36c4.33,17.67,8.67,35.33,13,53c-3,1-6,2-9,3\r
	c0,6.33,0,12.67,0,19c9.33,3.33,18.67,6.67,28,10c14.67-0.33,29.33-0.67,44-1c5.33-4.33,10.67-8.67,16-13c0.24-3.55,0.49-9.57,0-17\r
	c-1.09-16.65-4.77-23.01-11-51c-2.51-11.26-2.49-12.84-5-23c-2.63-10.66-5.21-19.3-7-25"/>\r
<path class="lloyd-st" d="M228.5,314.5c-3.18,3.34-7.9,9.35-10,18c-1.77,7.28-0.88,13.15,0,19c0.58,3.83,2.05,7.89,5,16\r
	c0.6,1.66,1.55,4.18,4,6c1.87,1.39,3.79,1.77,5,2c3.89,0.73,7.2-0.27,9-1"/>\r
<path class="lloyd-st" d="M237.5,268.5c-2.51-15.87,12.53-33.89,24-32c7.9,1.3,13.66,11.98,14,21c0.57,15.12-13.9,30.28-25,28\r
	C243.24,284.01,238.58,275.31,237.5,268.5z"/>\r
<path class="lloyd-st" d="M239.5,261.5c2.67,0.17,6.14,0.05,10-1c10.21-2.78,16-10.17,18-13"/>\r
<path class="lloyd-st" d="M239.5,274.5c2.1-1.68,5.45-3.86,10-5c10.92-2.74,19.99,2.72,22,4"/>\r
<path class="lloyd-st" d="M249.5,240.5c0,15,0,30,0,45"/>\r
<path class="lloyd-st" d="M284.5,103.5c0.28,1.12,0.83,2.47,2,3c0.93,0.42,1.73,0.09,3,0c1.2-0.08,2.89,0.04,5,1"/>\r
<path class="lloyd-st" d="M251.5,104.5c4.62-3.52,8.33-4.17,11-4c5.88,0.37,10.6,4.91,13,3c0.68-0.54,0.91-1.38,1-2"/>\r
<path class="lloyd-st" d="M265.5,134.5c2.25-0.45,5.81-0.85,10,0c6.81,1.38,11.2,5.22,13,7"/>\r
<path class="lloyd-st" d="M260.5,116.5c0.03-3.18,2.65-6,6-6c3.37,0,5.99,2.87,6,6c0.01,3.64-3.5,6.56-7,6\r
	C262.69,122.05,260.47,119.45,260.5,116.5z"/>\r
<path class="lloyd-st" d="M286.5,117.5c0.52-2.07,2.52-4.04,5-4c2.73,0.05,4.79,2.51,5,5c0.26,3.03-2.23,5.97-5,6\r
	C288.32,124.53,285.69,120.7,286.5,117.5z"/>\r
<path class="lloyd-st" d="M151.5,446.5c-0.33-1.13-2.32-8.09,1-11c1.04-0.92,1.99-0.88,9-1c8.52-0.14,9.97-0.24,11,1\r
	c1.84,2.2-0.04,5.7,2,7c0.85,0.54,2.16,0.56,3,0c1.81-1.21,0.23-4.29,2-6c1.4-1.36,4.32-1.28,6,0c1.46,1.12,1.66,2.9,2,6\r
	c0.23,2.07,0.13,3.81,0,5"/>\r
<path class="lloyd-st" d="M249.5,446.5c-0.12-0.66-0.63-3.87,1-5c0.61-0.42,1.13-0.29,4,0c4.69,0.48,5.22,0.33,6,1\r
	c1.37,1.17,0.58,2.31,2,4c1.45,1.72,4.11,2.71,6,2c1.75-0.66,1.92-2.44,3-4c3.07-4.44,9.67-1.5,27-2c2.61-0.08,6.44-0.26,8,2\r
	c0.7,1.02,0.8,2.35,1,5c0.15,2.05,0.09,3.77,0,5"/>\r
<path class="lloyd-st" d="M84.5,189.5c-0.47,0.19-1.18,0.51-2,1c-2.19,1.3-3.79,2.98-8,10c-2.92,4.88-3.81,6.82-3,8\r
	c0.51,0.75,1.47,0.84,2,2c0.57,1.22,0.14,2.53,0,3c-0.52,1.72-5.76,20-1,24c0.66,0.55,2.11,0.7,5,1c3.45,0.35,6.81,0.7,8-1\r
	c1.04-1.49-0.42-3.36,1-5c0.11-0.13,0.98-1.11,2-1c1.53,0.16,1.94,2.63,3,4c3.17,4.11,15.7,3.08,18-2c1.3-2.88-0.26-8-3-17\r
	c-0.16-0.51-0.56-1.79,0-3c0.53-1.15,1.39-1.09,2-2c1.07-1.6-0.39-3.63-1-7c-0.24-1.33-0.43-3.37,0-6"/>\r
</svg>\r
`,il=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.madoka_kaname-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="madoka_kaname-st" d="M318.74,142.75c-3.3-1.9-82.78-46.17-146.32-8.42c-5.31,3.16-50.73,30.88-60,72.63\r
	c-1.64,7.37-3.65,21.94-12.63,40c-6.69,13.45-14.49,23.29-20,29.47c6.16-3.67,14.99-9.94,23.16-20c6.29-7.75,10.2-15.29,12.63-21.05\r
	c-0.31,7.75,0.15,20.35,5.26,34.74c5.68,15.97,14.48,26.79,20,32.63c-0.96-12.19-1.11-27.22,1.05-44.21\r
	c1.69-13.28,4.43-24.94,7.37-34.74"/>\r
<path class="madoka_kaname-st" d="M145.05,200.65c-0.08,5.77,0.44,13.89,3.16,23.16c2.36,8.05,5.63,14.41,8.42,18.95\r
	c0.75-9.07,2.27-19.79,5.26-31.58c3.02-11.91,6.82-22.14,10.53-30.53"/>\r
<path class="madoka_kaname-st" d="M174.53,161.7c-1.91,8.93-3.57,20.79-3.16,34.74c0.41,14.06,2.8,25.89,5.26,34.74\r
	c0.72-5.09,1.98-11.19,4.21-17.89c1.63-4.88,3.96-10.65,7.37-16.84c3.4,7.05,8.96,16.64,17.89,26.32\r
	c8.3,8.99,16.73,15.04,23.16,18.95c4.08-11.06,8.06-23.37,11.58-36.84c3.84-14.71,6.53-28.5,8.42-41.05\r
	c6.95,7.98,14.72,18.12,22.11,30.53c7.07,11.88,12.13,23.05,15.79,32.63c1.48-2.82,3.02-6.34,4.21-10.53\r
	c1.9-6.66,2.22-12.55,2.11-16.84c1.05,1.74,2.29,4.22,3.16,7.37c0.93,3.37,1.09,6.31,1.05,8.42c1.86-3.46,3.89-8.05,5.26-13.68\r
	c2.24-9.15,1.78-17.02,1.05-22.11"/>\r
<path class="madoka_kaname-st" d="M304,201.7c3.86,9.47,7.72,18.95,11.58,28.42"/>\r
<path class="madoka_kaname-st" d="M313.47,183.81c1.88,31.01,3.32,62.96,4.21,95.79c0.75,27.64,1.08,54.67,1.05,81.05\r
	c6.84-21.62,13.26-46.66,17.89-74.74c3.37-20.37,5.31-39.43,6.32-56.84"/>\r
<path class="madoka_kaname-st" d="M104,254.33c-1.25,6.23-2.37,11.28-3.16,14.74c-1.86,8.09-2.98,12.1-1.05,13.68c1.35,1.12,3.53,0.47,5.26,0\r
	c4.57-1.24,11.11-2.58,20-3.16"/>\r
<path class="madoka_kaname-st" d="M100.84,245.91c-2.88,0.65-6.85,1.25-11.58,1.05c-3.9-0.16-4.83-0.72-5.26-1.05\r
	c-3.62-2.72-1.92-10.66-1.05-14.74c2.11-9.9,4.51-21.33,7.37-34.74c-4.73-18.22-7.65-32.81-9.47-43.16\r
	c-0.68-3.84-1.39-8.21,1.05-10.53c2.42-2.3,7.59-2.23,29.47,7.37c9.98,4.38,18.79,8.7,26.32,12.63c-0.85-6.25,0.24-11.05,1.05-13.68\r
	c1.48-4.78,5.55-9.15,13.68-17.89c1.18-1.26,2.86-3.03,5.26-3.16c2.69-0.15,4.86,1.83,6.32,3.16c1.08,0.99,2.97,2.99,4.21,6.32"/>\r
<path class="madoka_kaname-st" d="M319.79,152.23c-1.41-7.48-0.52-13.96,0-16.84c1.09-6.05,3.12-10.36,4.21-12.63c1.49-3.1,2.23-4.66,3.16-5.26\r
	c4.12-2.7,9.64,2.88,25.26,10.53c9.99,4.89,16.02,6.66,16.84,11.58c0.39,2.29-0.54,4.19-1.05,5.26\r
	c-8.94,18.69-13.8,28.85-11.58,36.84c1.48,5.31,6.93,12.67,11.58,18.95c0.94,1.27,1.83,2.41,2.11,4.21\r
	c1.19,7.75-10.97,15.18-13.68,16.84c-6.19,3.78-12.66,7.74-16.84,5.26c-3.37-2-2.9-6.81-4.21-28.42c-0.55-9.06-0.82-13.6-1.05-14.74\r
	C331.4,168.38,322.59,167.12,319.79,152.23z"/>\r
<path class="madoka_kaname-st" d="M358.74,220.65c1.75-0.18,4.3-0.31,7.37,0c2.98,0.3,4.46,0.45,5.26,1.05c3.96,2.97,0.76,16.75-6.32,26.32\r
	c-2.46,3.32-7.24,8.65-15.79,12.63"/>\r
<path class="madoka_kaname-st" d="M340.84,256.44c5.55,1.35,7.62,3.96,8.42,5.26c4.18,6.79-0.51,19.83-13.68,30.53"/>\r
<path class="madoka_kaname-st" d="M365.05,157.49c10.61,11.06,21.72,23.99,32.63,38.95c22.14,30.36,36.66,59.81,46.32,84.21\r
	c-10.53-5.61-21.05-11.23-31.58-16.84c-0.27,8.47-0.91,17.63-2.11,27.37c-1.56,12.76-3.81,24.38-6.32,34.74\r
	c-1.45-9.02-2.86-18.14-4.21-27.37c-0.72-4.94-1.43-9.85-2.11-14.74c-8.42,23.86-16.84,47.72-25.26,71.58\r
	c-7.02-28.42-14.04-56.84-21.05-85.26"/>\r
<path class="madoka_kaname-st" d="M330.32,320.65c0.7,14.04,1.4,28.07,2.11,42.11c2.15-3.64,4.27-7.5,6.32-11.58\r
	c7.91-15.77,12.77-30.9,15.79-44.21c5.96,16.14,11.93,32.28,17.89,48.42"/>\r
<path class="madoka_kaname-st" d="M382.95,223.81c-0.7,36.49-1.4,72.98-2.11,109.47"/>\r
<path class="madoka_kaname-st" d="M142.95,253.28c1.69,6.89,2.64,12.44,3.16,15.79c2.81,18.26,3.15,38.91,3.16,48.42\r
	c0.01,9.06-0.26,10.64,1.05,13.68c3.74,8.65,13.28,12.86,27.37,16.84c29.16,8.25,47.1,13.32,70.53,7.37\r
	c14.68-3.73,24.82-10.09,38.95-18.95c13.86-8.69,24.38-17.53,31.58-24.21"/>\r
<path class="madoka_kaname-st" d="M149.26,294.33c-0.97,4.84-2.64,12.63-5.26,22.11c-4.78,17.3-8.5,24.97-13.68,42.11\r
	c-1.95,6.44-4.7,16.18-7.37,28.42c-1.07-12.89-1.41-28.18,0-45.26c1.55-18.74,4.84-35.05,8.42-48.42"/>\r
<path class="madoka_kaname-st" d="M171.37,346.96c2.05,5.57,4.16,11.19,6.32,16.84c3.13,8.2,6.29,16.27,9.47,24.21\r
	c-9.07-4.09-22.21-11.4-34.74-24.21c-7.64-7.81-13.06-15.62-16.84-22.11"/>\r
<path class="madoka_kaname-st" d="M89.26,246.96c-0.7,7.02-1.4,14.04-2.11,21.05"/>\r
<path class="madoka_kaname-st" d="M86.11,272.23c-1.3,7.98-3.02,16.43-5.26,25.26c-4.7,18.5-10.7,34.69-16.84,48.42\r
	c7.72-7.02,15.44-14.04,23.16-21.05c2.34,8.59,5.93,18.72,11.58,29.47c11.17,21.25,25.48,35.56,35.79,44.21\r
	c-0.35-16.14-0.7-32.28-1.05-48.42"/>\r
<path class="madoka_kaname-st" d="M108.21,281.7c-2.03,18.95-2.69,41.38,0,66.32c1.05,9.71,2.5,18.84,4.21,27.37"/>\r
<path class="madoka_kaname-st" d="M247.16,240.65c0.88-1.55,9.52-16.15,26.32-17.89c14.62-1.52,29.27,7.33,35.79,22.11"/>\r
<path class="madoka_kaname-st" d="M151.37,268.02c-0.84-12.47,5.88-24.18,16.84-29.47c11.95-5.77,26.65-2.82,35.79,7.37"/>\r
<path class="madoka_kaname-st" d="M291.37,251.18c-4.34-7.98-14.54-12.79-24.21-10.53c-11.28,2.64-19.23,14.32-16.84,26.32\r
	c2.45,12.29,14.72,19.71,25.26,17.89C289.77,282.41,298.17,263.67,291.37,251.18z"/>\r
<path class="madoka_kaname-st" d="M205.05,271.18c-2.06-11.1-12.98-19.96-24.21-17.89c-12.02,2.21-18.98,15.94-15.79,27.37\r
	c2.77,9.91,13.16,18.07,24.21,15.79C200.62,294.1,207.04,281.91,205.05,271.18z"/>\r
<path class="madoka_kaname-st" d="M232.42,337.49c0.29-0.81,0.87-2.12,2.11-3.16c3.07-2.58,6.41-0.31,11.58-2.11c4-1.39,3.94-3.43,7.37-4.21\r
	c3.65-0.84,7.13,0.7,9.47,2.11"/>\r
<path class="madoka_kaname-st" d="M167.16,219.6c2.89,3.5,7.66,8.43,14.74,12.63c8.38,4.97,16.24,6.7,21.05,7.37"/>\r
<path class="madoka_kaname-st" d="M246.11,231.18c4.54-1.06,11.62-3.3,18.95-8.42c9.38-6.56,14.45-14.51,16.84-18.95"/>\r
</svg>\r
`,al=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.manbo-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="manbo-st" d="M191.5,210.5c-3.8,8.97-10.08,20.79-20.5,32.5c-19.84,22.31-43.23,31.37-55,35c10.87,1.93,23.57,2.34,37-1\r
	c54.58-13.56,74.3-77.21,76-83"/>\r
<path class="manbo-st" d="M159.5,276.5c6.61,0.63,14.37,0.83,23,0c18.01-1.74,32.35-7.26,42-12c-3.33,3-6.67,6-10,9\r
	c9.52-1.5,24.12-5.16,39-15c30.2-19.96,39.57-50.79,42-60c2.06,4.71,4.94,10.23,9,16c6.11,8.67,12.73,14.84,18,19"/>\r
<path class="manbo-st" d="M337.5,222.5c10.54-7.31,14.35-9.54,17-8c1,0.58,1.89,1.73,2,3c0.3,3.55-5.8,5.6-14,11\r
	c-11.82,7.78-16.38,14.86-20,13c-1.59-0.82-1.97-2.82-2-3C319.97,235.46,322.88,232.64,337.5,222.5z"/>\r
<path class="manbo-st" d="M340.5,252.5c0.06,1.71,1.8,2.87,2,3c1.18,0.77,3.8,1.67,16-5c11.22-6.13,11.98-8.52,12-10\r
	c0.01-1.37-0.6-3.19-2-4c-2.65-1.54-5.93,1.83-15,7C345.01,248.34,340.4,249.66,340.5,252.5z"/>\r
<path class="manbo-st" d="M327.5,240.5c4.33,3.33,8.67,6.67,13,10"/>\r
<path class="manbo-st" d="M346.5,255.5c2.72,2.61,5.72,5.29,9,8c4.14,3.42,8.18,6.4,12,9"/>\r
<path class="manbo-st" d="M361.5,248.5c7.46,21.64,10.06,40.13,11,53c1.39,19.03,2.17,32.21-6,44c-4.66,6.72-11.1,11.37-10,13\r
	c1.15,1.7,9.73-1.07,16-6c9.48-7.46,12.13-18.64,13-24"/>\r
<path class="manbo-st" d="M372.5,353.5c-1.5,4.67-3.44,9.73-6,15c-6.92,14.28-15.71,24.79-23,32c6.62-2.26,28.56-10.67,43-34\r
	c11.09-17.91,12.04-35.39,12-43"/>\r
<path class="manbo-st" d="M133.5,279.5c-1.11,31.26,4.32,55.59,9,71c8.85,29.14,19.27,40.28,23,44c9.98,9.95,20.77,15.2,28,18\r
	c-9.43-0.5-17.08-2.62-23-5c-40.61-16.32-51.5-65.69-53-73"/>\r
<path class="manbo-st" d="M175.5,409.5c3.1,3.15,7.13,8.08,10,15c6.33,15.27,2.48,29.37,1,34"/>\r
<path class="manbo-st" d="M358.5,393.5c-2.99,2.51-14.93,13.14-16,30c-0.39,6.13,0.77,11.31,2,15"/>\r
<path class="manbo-st" d="M386.5,409.5c-8.89,2.08-22.82,6.78-34,18c-7.3,7.33-8.6,12.59-9,15c-0.27,1.62-1.38,8.94,3,16"/>\r
<path class="manbo-st" d="M377.5,425.5c-2.83,1.21-7.2,3.55-11,8c-8.25,9.64-7.27,21.47-7,24"/>\r
<path class="manbo-st" d="M150.5,447.5c1.82,0.52,4.3,1.42,7,3c0.77,0.45,5.98,3.56,9,8"/>\r
<path class="manbo-st" d="M186.5,459.5c-2.15-3.9-5.6-9.07-11-14c-9.44-8.62-19.64-11.77-25-13"/>\r
<path class="manbo-st" d="M67.5,318.5c-2.58,8.15-5.78,21.03-6,37c-0.19,13.67-0.74,53.89,22,68c11.6,7.2,21.07,2.52,33,13\r
	c4.37,3.84,7.41,8.25,9.54,12.4c2.7,5.26,8.06,8.6,13.97,8.6h246.55c8.69,0,16.32-5.73,18.78-14.07c1.38-4.69,3.35-9.76,6.16-14.93\r
	c11.39-20.91,25.26-22.42,34-40c6.5-13.07,5.22-25.09,3-46c-1.46-13.76-5.5-35.34-18-60"/>\r
<path class="manbo-st" d="M122.5,250.5c-9.17,17.97-19.41,29.67-27,37c-9.17,8.86-25.07,21.56-38,38c-3.05,3.88-8.65,11.42-8,21\r
	c0.23,3.42,1.2,6.18,2,8"/>\r
<path class="manbo-st" d="M52.5,332.5c0.49-0.91,0.81-1.02,1-1c1.4,0.14,0.14,8.09,4,15c1.38,2.47,3.03,4.12,4,5"/>\r
<path class="manbo-st" d="M359.5,202.5c12.68,18.36,24.52,31.96,33,41c7.49,7.98,14.69,14.89,38,39c12.21,12.63,21,21.95,25,37\r
	c1.95,7.32,2.15,13.71,2,18"/>\r
<path class="manbo-st" d="M453.5,313.5c0.59,2.03,1.75,7.04,0,13c-1.52,5.2-4.49,8.51-6,10"/>\r
<path class="manbo-st" d="M80.5,252.5c-1.67,4.86-4.56,12.71-9,22c-14.29,29.91-24.85,33.38-29,53c-0.98,4.62-5.45,25.78,7,41\r
	c4.32,5.28,9.41,8.3,13,10"/>\r
<path class="manbo-st" d="M288.5,115.5c10.7,2.3,26.56,6.75,44,16c36.04,19.12,56.41,46.87,68,63c19.63,27.33,12.14,28.45,33,56\r
	c4.73,6.25,17.86,23.02,30,47c4.41,8.72,7.88,16.78,7,27c-1.27,14.73-10.77,24.74-12,26c-3.28,3.36-6.56,5.59-9,7"/>\r
<path class="manbo-st" d="M75.5,357.5c-0.46,5.66-0.52,15.13,3,26c1.95,6.01,5.4,16.24,15,25c11.41,10.41,24.63,12.48,30,13"/>\r
<path class="manbo-st" d="M435.5,347.5c0.7,4.33,1.68,14.17-3,25c-7.07,16.36-21.75,22.69-25,24"/>\r
<path class="manbo-st" d="M299.5,118.5c1.24-3.35,3.45-8.77,7-15c14.65-25.7,30.51-27.14,46-52c8.6-13.81,8.24-20.62,13-21\r
	c10.83-0.86,23.09,33.58,27,58c1.7,10.63,0.8,23.08-1,48c-0.37,5.12-1.01,12.62-6,20c-2.99,4.42-6.51,7.29-9,9"/>\r
<path class="manbo-st" d="M330.5,130.5c3.38-14.18,8.74-23.82,13-30c5.05-7.32,9.03-10.48,14-19c5.27-9.04,7.74-17.43,9-23"/>\r
<path class="manbo-st" d="M80.5,123.5c-4.39,5.25-10.5,13.01-17,23c-8.07,12.4-13.87,21.47-18,35c-3.71,12.18-3.85,20.71-4,30\r
	c-0.13,8.18,0.62,10.84,2,13c6.43,10.04,25.39,7.39,28,7c1.08,1.72,2.64,4.45,4,8c2.32,6.04,1.68,8.2,3,11\r
	c3.48,7.36,15.83,9.21,23,9c7.2-0.21,12.65-2.58,24-9c12.35-6.99,18.53-10.49,29-18c29.02-20.83,63.77-34.27,76-39\r
	c1.06-0.41,14.94-5.77,30-17c8.1-6.04,10.52-9.29,12-12c6.84-12.54,1.06-27.3-1-32c2.76-1.62,6.41-4.16,10-8\r
	c4.13-4.42,6.58-8.86,8-12c0.08-0.59,0.46-4.06-2-7c-1.84-2.2-4.21-2.83-5-3c0.87-3.25,2.21-10.04,0-18c0,0-1.97-7.09-7-13\r
	c-11.48-13.48-42.09-11.23-54-10c-19.17,1.98-48.08,7.3-82,23"/>\r
<path class="manbo-st" d="M82.5,102.5c0.82-3.34,3.55-6.24,7-7c5.46-1.2,11.73,3.21,12,9c0.29,6.05-6.09,11.4-12,10\r
	C84.45,113.3,81.26,107.55,82.5,102.5z"/>\r
<path class="manbo-st" d="M80.5,120.5c0.84-3.8,5.21-6.09,9-6c3.07,0.07,6.89,1.73,8,5c1.55,4.54-2.6,10.75-8,11\r
	C84.24,130.74,79.45,125.24,80.5,120.5z"/>\r
<path class="manbo-st" d="M88.5,131.5c1.72-0.17,4.28-0.62,7-2c3.07-1.55,3.21-2.69,6-4c4.22-1.98,5.73-0.22,9-2c3.56-1.93,2.51-4.41,6-7\r
	c3.78-2.81,6.1-0.72,12-3c3.58-1.38,3.03-2.27,10-7c7.94-5.39,10.41-5.44,11-8c0.77-3.38-2.72-6.81-8-12c-7.35-7.22-9.76-6.62-14-12\r
	c-3.21-4.08-2.25-4.96-7-14c-5.17-9.84-7.76-14.76-11-15c-6.23-0.46-12.06,14.48-15,22c-4.58,11.72-6.28,22.03-7,29"/>\r
<path class="manbo-st" d="M75.5,239.5c13.3-5.31,32.88-13.56,56-25c28.45-14.08,49.49-26.66,85-48c13.82-8.3,32.68-19.82,55-34"/>\r
<path class="manbo-st" d="M159.5,198.5c-3-1.67-6-3.33-9-5c3.04-5.3,6.19-11.65,9-19c1.52-3.97,2.76-7.78,3.77-11.37\r
	c0.75-2.63-0.63-5.4-3.19-6.37c-3.93-1.49-8.13-2.93-12.59-4.27c-8.5-2.55-16.48-4.3-23.74-5.49c-2.07-0.34-4.16,0.4-5.55,1.96\r
	c-4,4.51-8.81,10.98-12.71,19.53c-4.2,9.21-5.92,17.71-6.62,24.14c-0.3,2.73,1.58,5.22,4.29,5.66c5.45,0.88,11.23,1.64,17.34,2.2\r
	c5.95,0.55,11.63,0.86,17,1c0,3,0,6,0,9"/>\r
<path class="manbo-st" d="M108.5,69.5c3.3,6.74,6.62,11.73,9,15c3.76,5.16,6.14,7.36,10,13c3.37,4.92,5.64,9.22,7,12"/>\r
<path class="manbo-st" d="M295.5,414.5c-0.28-1.62-0.5-4.08,0-7c0.44-2.59,1.29-4.62,2-6c8.67-1.28,19.32-3.62,31-8\r
	c14.43-5.41,25.78-12.2,34-18"/>\r
<path class="manbo-st" d="M168.5,396.5c8.05,3.32,18.5,6.81,31,9c13.3,2.33,24.95,2.51,34,2c0.98,1.22,2.61,3.63,3,7\r
	c0.13,1.13,0.1,2.14,0,3"/>\r
<path class="manbo-st" d="M233.5,352.5c-3.64,5.02,0.66,13.36,1,14c4.22,7.95,13.21,9.94,18,11c3.71,0.82,15.88,3.52,26-4\r
	c1.81-1.34,10.64-8.29,10-18c-0.13-1.95-0.37-5.63-3-8c-4.53-4.08-11.15,0.23-25,2C244.03,351.6,237.06,347.59,233.5,352.5z"/>\r
<path class="manbo-st" d="M172.5,278.5c-3.27,6.46-6.35,15.4-6,26c0.39,11.7,5.17,31.32,17,34c4.89,1.11,9.19-1.08,11-2\r
	c13.12-6.67,15.85-25.71,15-37c-0.89-11.82-6.12-20.76-10-26"/>\r
<path class="manbo-st" d="M307.5,264.5c7.2-3.79,15.25-0.73,17,0c15.53,6.43,16.86,28.13,17,31c0.15,3.09,1.08,22.77-12,30\r
	c-1.18,0.65-7.18,3.81-14,2c-14.86-3.93-17.66-27.17-18-30C297.11,294.28,294.36,271.41,307.5,264.5z"/>\r
<path class="manbo-st" d="M292.5,232.5c3.9-0.64,8.63-1.11,14-1c6.28,0.12,11.7,1,16,2"/>\r
<path class="manbo-st" d="M287.5,274.5c1.72-2.15,12.03-14.59,30-16c17.06-1.34,28.92,8.22,33,12c3.12,2.9,16.62,15.4,14,32\r
	c-1.23,7.8-5.5,13.28-8,16"/>\r
<path class="manbo-st" d="M153.5,334.5c-2.32-1.65-11.18-8.36-13-20c-1.21-7.74,1.29-13.84,3-18c4.26-10.39,11.54-16.76,16-20"/>\r
<path class="manbo-st" d="M217.5,281.5c-1.56-1.78-3.85-4-7-6c-2.18-1.39-4.25-2.34-6-3"/>\r
<path class="manbo-st" d="M232.5,435.5c0.28-1.54,0.68-3.97,1-7c0.65-6.17,0.29-8.7,2-10c1.04-0.79,1.87-0.38,6,0\r
	c7.42,0.68,11.13,1.02,15,1c1.08-0.01,2.68-0.04,4,1c1.42,1.12,1.75,2.84,2,4c0.51,2.39,1.38,5.7,3,10"/>\r
<path class="manbo-st" d="M271.5,434.5c0.29-3.33,0.62-6.59,1-10c0.18-1.61,0.43-3.68,2-5c0.76-0.64,1.55-0.9,2-1\r
	c5.15-1.18,7.62-2.18,16-4c0.51-0.11,1.65-0.36,3,0c0,0,1.07,0.29,2,1c0.67,0.51,2.58,2.3,3,11c0.07,1.5,0.12,3.55,0,6"/>\r
<path class="manbo-st" d="M273.5,422.5c0.79,0.33,1.94,0.93,3,2c1.15,1.15,1.83,2.44,3,6c0.6,1.81,1.31,4.18,2,7"/>\r
<path class="manbo-st" d="M258.5,422.5c-0.69,1.2-1.37,2.53-2,4c-1.93,4.49-2.71,8.68-3,12"/>\r
<path class="manbo-st" d="M221.5,439.5c-6.01,0.55-10.76,1.88-14,3c-6,2.08-10.39,3.68-13,8c-1.58,2.61-1.93,5.27-2,7"/>\r
<path class="manbo-st" d="M316.5,435.5c2.82-0.29,7.09-0.36,12,1c7.78,2.15,12.76,6.67,15,9"/>\r
<path class="manbo-st" d="M217.5,457.5c-0.5-1.66-1.56-5.95,0-11c0.4-1.3,1.62-5.22,5-8c4.91-4.03,11.41-3.21,21-2\r
	c3.56,0.45,8.38,1.29,14,3"/>\r
<path class="manbo-st" d="M278.5,438.5c3.55-1.19,8.68-2.72,15-4c11.78-2.38,18.29-3.6,22,0c2.79,2.71,2.89,7.08,3,12\r
	c0.12,5.23-1.06,9.42-2,12"/>\r
<path class="manbo-st" d="M260.5,457.5c-1.66-4.9-2.52-9.04-3-12c-0.61-3.75-0.49-4.9,0-6c2.03-4.51,9.07-4.94,10-5\r
	c0.91-0.06,8.14-0.5,11,4c0.53,0.83,1.02,2.01,1,7c-0.01,2.92-0.2,7.04-1,12"/>\r
<path class="manbo-st" d="M244.5,448.5c1.5-0.29,4.01-0.59,7,0c3.32,0.65,5.7,2.08,7,3"/>\r
<path class="manbo-st" d="M279.5,451.5c1.65-0.99,4.01-2.18,7-3c3.2-0.88,6-1.04,8-1"/>\r
</svg>\r
`,ol=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.maodie-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="maodie-st" d="M76,159c-2.75,2.92-6.06,4.43-8.5,3.5c-3.27-1.25-3.75-6.39-4-9c-1.22-12.96,7.16-24.47,9.5-27.5\r
	c9.02-11.67,36.31-37.06,97.78-52.28c9.09-2.25,36.86-8.72,74.22-9.72c13.58-0.37,38.83-0.91,71,5\r
	c62.04,11.39,100.61,37.74,115.5,57.5c8.45,11.21,12.14,24.1,10,30c-0.43,1.19-1.42,3.91-4,5c-3.07,1.29-6.35-0.61-7-1"/>\r
<path class="maodie-st" d="M66.5,162.5c0.35,1.47,0.64,3.63,0,6c-0.59,2.21-1.74,3.65-2,4c-2.92,3.87-10.9,23.28-15,44c0,0-3.8,19.18-3,41\r
	c0.4,10.86,2.54,69.24,36,113c47.94,62.69,135.36,62.91,169,63c34.74,0.09,119.04,0.3,168-61c36.78-46.05,37.86-107.11,38-115\r
	c0.42-23.54-4-44-4-44c-3.33-15.44-9.98-36.06-13-41c-0.28-0.45-1.45-2.29-2-5c-0.51-2.53-0.25-4.7,0-6"/>\r
<path class="maodie-st" d="M194.5,121.5c1.44,3.85,2.83,8.19,4,13c1.8,7.43,2.65,14.21,3,20"/>\r
<path class="maodie-st" d="M311.5,118.5c-2,2.74-4.23,6.4-6,11c-3.49,9.07-3.43,17.21-3,22"/>\r
<path class="maodie-st" d="M206.5,226.5c0.21-2.77,2.12-34.05-21-51c-14.54-10.66-40.32-16.64-51-4c-8.45,10.01-4.41,28.32,4,39\r
	c15.37,19.52,51,20.82,61,6c4.84-7.18,2.89-16.98,1-23"/>\r
<path class="maodie-st" d="M158.5,165.5c-2.03,1-9.65,5.06-13,14c-3.62,9.67-0.72,20.97,7,28c6.93,6.32,17.56,9.02,27,5\r
	c10.42-4.44,16.73-15.96,15-28"/>\r
<path class="maodie-st" d="M296.5,225.5c0.22-3.04,3.66-42.88,33-56c9.59-4.29,29.96-9.31,40,2c8.51,9.59,5.35,26.16-1,36\r
	c-13.31,20.62-49.3,25.19-61,11c-5.07-6.14-4.73-14.76-4-20"/>\r
<path class="maodie-st" d="M343.5,165.5c0.7,0.23,14.02,4.8,17,18c2.51,11.11-3.96,21.01-11,26c-1.35,0.96-11.06,7.62-22,4\r
	c-10.47-3.46-17.71-14.89-17-28"/>\r
<path class="maodie-st" d="M210.5,250.5c-0.43,2.1-0.79,4.44-1,7c-0.31,3.74-0.24,7.12,0,10"/>\r
<path class="maodie-st" d="M293.5,250.5c0.43,2.1,0.79,4.44,1,7c0.31,3.74,0.24,7.12,0,10"/>\r
<path class="maodie-st" d="M253.5,313.5c-7.78,0.69-14.84-5.9-17-12c-1.58-4.47,0.3-6.36-2-10c-3.35-5.31-10.81-6.78-12-7\r
	c-5.17-0.95-8.33,0.53-11-2c-0.29-0.27-2.06-1.96-2-4c0.16-5.13,11.83-10.58,23-11c9.14-0.35,9.69,2.98,20,3\r
	c10.81,0.02,11.79-3.63,21-3c10.08,0.69,20.88,5.88,21,11c0.06,2.61-2.66,4.74-3,5c-3.17,2.47-5.76,0.63-11,2\r
	c-0.59,0.15-7.69,2.12-11,8c-1.8,3.19-0.68,4.35-2,8C265.72,306.43,260.58,312.87,253.5,313.5z"/>\r
<path class="maodie-st" d="M252.5,300.5c0,10.67,0,21.33,0,32"/>\r
<path class="maodie-st" d="M141.5,289.5c-1.37,3.53-9.43,25.37,2,45c13.81,23.73,44.25,23.94,52,24c31.96,0.23,52.89-21.55,57-26\r
	c4.31,4.39,27.59,27.22,61,25c7.36-0.49,38.85-2.58,50-27c8.38-18.34-0.21-37.25-2-41"/>\r
<path class="maodie-st" d="M216.5,379.5c5.08,3.56,17.05,10.92,34,12c20.9,1.33,36.06-7.74,41-11"/>\r
<path class="maodie-st" d="M44.5,313.5c13.54-2.63,27.89-5.01,43-7c19.03-2.5,37.08-4.08,54-5"/>\r
<path class="maodie-st" d="M58.5,356.5c10.5-6.02,24.24-12.69,41-18c17.24-5.46,32.71-7.92,45-9"/>\r
<path class="maodie-st" d="M119.5,369.5c7.88-5.61,17.2-11.49,28-17c7-3.57,13.71-6.53,20-9"/>\r
<path class="maodie-st" d="M362.5,301.5c12.83,0.43,26.53,1.37,41,3c19.63,2.22,37.69,5.39,54,9"/>\r
<path class="maodie-st" d="M360.5,328.5c11.93,2.1,25.44,5.24,40,10c17.57,5.74,32.61,12.5,45,19"/>\r
<path class="maodie-st" d="M338.5,343.5c6.93,3.09,14.32,6.72,22,11c8.93,4.97,16.93,10.06,24,15"/>\r
<path class="maodie-st" d="M68.5,152.5c11.56-17.6,18.22-25.94,20-25c1.96,1.03-2.04,13.37-12,37"/>\r
<path class="maodie-st" d="M437.5,152.5c-12.7-17.78-20.03-26.12-22-25c-2.16,1.23,2.17,13.9,13,38"/>\r
</svg>\r
`,sl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.meg-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="meg-st" d="M308.47,194.88c45.84-12.6,91.69-25.2,137.53-37.8c-1.62,1.55-4.12,3.81-7.35,6.3\r
	c-4.11,3.16-10.67,7.64-27.3,14.7c-6.39,2.71-14.9,6.07-25.2,9.45c8.94-1.46,16.04-3.54,21-5.25c5.53-1.9,9.99-3.87,17.85-7.35\r
	c5.7-2.52,10.38-4.73,13.65-6.3c-8.05,10.15-16.1,20.3-24.15,30.45c-11.55,2.45-23.1,4.9-34.65,7.35c6-0.47,12.31-1.15,18.9-2.1\r
	c4.36-0.63,8.56-1.33,12.6-2.1c-6.3,5.95-12.6,11.9-18.9,17.85c-5.39,0.6-11.37,1.01-17.85,1.05c-7.3,0.05-13.99-0.38-19.95-1.05\r
	c5.7,1.26,12.02,2.38,18.9,3.15c5.2,0.59,10.11,0.91,14.7,1.05c-5.95,4.55-11.9,9.1-17.85,13.65c-4.04-0.91-8.67-2.24-13.65-4.2\r
	c-5.83-2.3-10.73-4.91-14.7-7.35c2.18,2.49,5.28,5.53,9.45,8.4c4.73,3.25,9.22,5.16,12.6,6.3c-5.95,3.5-11.9,7-17.85,10.5\r
	c-2.47-1.5-6.12-4.13-9.45-8.4c-2.76-3.54-4.34-6.97-5.25-9.45c0.54,3.31,1.84,8.4,5.25,13.65c1.73,2.66,3.6,4.74,5.25,6.3\r
	c-6.3,3.15-12.6,6.3-18.9,9.45c-1.74-2.81-3.61-6.32-5.25-10.5c-1.52-3.87-2.5-7.44-3.15-10.5c-0.04,3.17,0.18,7.11,1.05,11.55\r
	c0.82,4.16,2,7.69,3.15,10.5c-7,2.1-14,4.2-21,6.3c0-3.85,0-7.7,0-11.55c0-3.15,0-6.3,0-9.45c-0.8,3.16-1.54,6.67-2.1,10.5\r
	c-0.67,4.59-0.97,8.82-1.05,12.6c-7.7,0.7-15.4,1.4-23.1,2.1c0.66-2.12,1.65-4.65,3.15-7.35c2.06-3.69,4.39-6.46,6.3-8.4\r
	c-4.67,2.93-7.67,6.17-9.45,8.4c-7.52,9.44-8.38,20.14-8.4,23.1c0,0.62,0.02,2.25,0,5.25c-0.04,5.42-0.16,5.45,0,6.3\r
	c0.59,3.1,2.64,5.01,6.3,8.4c1.98,1.83,4.01,3.72,7.35,5.25c3.39,1.55,6.46,1.98,8.4,2.1c-3.5,2.45-7,4.9-10.5,7.35\r
	c-2.8-2.1-5.6-4.2-8.4-6.3c2.1,2.45,4.2,4.9,6.3,7.35c-2.45,2.1-4.9,4.2-7.35,6.3c-2.8-3.5-5.6-7-8.4-10.5c2.1,4.2,4.2,8.4,6.3,12.6\r
	c-4.2,3.15-8.4,6.3-12.6,9.45c0-1.4,0-2.8,0-4.2c0,0-0.06-1.96,0-6.3c0.04-2.54,0.09-2.57,0-3.15c-0.34-2.21-1.65-5.25-3.15-5.25\r
	s-2.81,3.03-3.15,5.25c-0.09,0.58-0.04,0.61,0,3.15c0.03,2.1,0,4.2,0,6.3c0,1.4,0,2.8,0,4.2c-4.55-3.15-9.1-6.3-13.65-9.45\r
	c2.45-4.2,4.9-8.4,7.35-12.6c-3.5,3.5-7,7-10.5,10.5c-2.1-1.75-4.2-3.5-6.3-5.25c2.45-3.15,4.9-6.3,7.35-9.45\r
	c-3.15,2.45-6.3,4.9-9.45,7.35c-3.5-2.45-7-4.9-10.5-7.35c5.02-0.4,8.54-2.04,10.5-3.15c1.39-0.79,3.73-2.98,8.4-7.35\r
	c2.91-2.73,3.77-3.67,4.2-5.25c0.4-1.48,0.12-2.34,0-6.3c-0.08-2.79,0-4.3,0-5.25c-0.02-4.81-2.5-13.88-8.4-22.05\r
	c-2.01-2.79-5.35-6.76-10.5-10.5c2.06,2.63,4.24,5.78,6.3,9.45c1.23,2.19,2.27,4.31,3.15,6.3c-7.7-0.35-15.4-0.7-23.1-1.05\r
	c0.25-2.69,0.33-5.88,0-9.45c-0.51-5.58-1.85-10.21-3.15-13.65c0.21,3.46,0.26,7.33,0,11.55c-0.21,3.42-0.59,6.58-1.05,9.45\r
	c-6.65-2.1-13.3-4.2-19.95-6.3c1.37-2.19,3.23-5.75,4.2-10.5c1.1-5.41,0.54-9.94,0-12.6c-0.43,3.08-1.31,7.11-3.15,11.55\r
	c-1.64,3.95-3.57,7.1-5.25,9.45c-6.3-2.8-12.6-5.6-18.9-8.4c1.95-1.5,4.94-4.19,7.35-8.4c1.85-3.24,2.72-6.26,3.15-8.4\r
	c-2.49,2.71-5.28,5.54-8.4,8.4c-2.51,2.3-4.97,4.4-7.35,6.3c-5.95-3.5-11.9-7-17.85-10.5c3.88-1.33,8.6-3.31,13.65-6.3\r
	c5.32-3.16,9.49-6.55,12.6-9.45c-4.95,2.85-10.91,5.81-17.85,8.4c-4.87,1.82-9.46,3.18-13.65,4.2c-5.95-4.55-11.9-9.1-17.85-13.65\r
	c5.68,0.21,12.43,0.03,19.95-1.05c5.49-0.79,10.41-1.92,14.7-3.15c-12.95,0.35-25.9,0.7-38.85,1.05\r
	c-5.95-5.95-11.9-11.9-17.85-17.85c4.9,1.35,10.92,2.59,17.85,3.15c5.92,0.48,11.24,0.37,15.75,0c-7.01-1.1-14.37-2.48-22.05-4.2\r
	c-5.86-1.31-11.46-2.72-16.8-4.2c-7.7-9.8-15.4-19.6-23.1-29.4c7.57,3.91,16.33,7.9,26.25,11.55c10.25,3.77,19.82,6.46,28.35,8.4\r
	c-3.32-1.35-8.86-3.58-15.75-6.3c-20.21-7.98-25.75-9.76-33.6-14.7c-3.66-2.3-8.92-5.99-14.7-11.55\r
	c46.54,12.95,93.09,25.9,139.63,38.85c0.03,2.71,0.85,37.72,25.2,50.39c3.47,1.81,8.32,3.63,14.7,4.2c0.27-0.69,0.61-1.39,1.05-2.1\r
	c2.71-4.33,7.42-5.8,9.45-6.3c-1.69,1.4-6.51,5.75-6.3,11.55c0.05,1.25,0.33,2.74,2.1,6.3c1.6,3.21,4.2,7.69,8.4,12.6\r
	c0.69-0.37,1.76-0.83,3.15-1.05c1.3-0.21,2.4-0.12,3.15,0c-0.97,0.27-3.8,1.19-4.2,3.15c-0.18,0.87,0.23,1.49,1.05,3.15\r
	c2.38,4.81,2.26,6.21,3.15,6.3c0.71,0.07,1.88-2.05,4.2-6.3c0.9-1.64,1.22-2.32,1.05-3.15c-0.44-2.13-3.65-3.01-4.2-3.15\r
	c0.75-0.12,1.85-0.21,3.15,0c1.39,0.22,2.46,0.68,3.15,1.05c5.35-6.11,8.04-11.35,9.45-14.7c0.59-1.41,1.02-2.63,1.05-4.2\r
	c0.12-5.91-5.5-10.24-7.35-11.55c1.41,0.08,5.01,0.49,8.4,3.15c2.35,1.85,3.6,4,4.2,5.25c5.25-0.78,12.2-2.66,18.9-7.35\r
	C309.96,227.13,308.63,197.6,308.47,194.88z"/>\r
<path class="meg-st" d="M238.03,259.88c-0.35-0.35-0.96-0.1-0.96,0.4v1.47v2.21c0,0.14,0.04,0.26,0.13,0.37\r
	c0.52,0.61,1.17,1.28,1.97,1.94c0.8,0.68,1.59,1.21,2.31,1.63c0.37,0.22,0.84-0.05,0.84-0.49v-1.15v-1.87c0-0.15-0.06-0.29-0.16-0.4\r
	l-2.08-2.08L238.03,259.88z"/>\r
<path class="meg-st" d="M256.07,260.27c0.35-0.35,0.96-0.1,0.96,0.4v1.47v2.21c0,0.14-0.04,0.26-0.13,0.37\r
	c-0.52,0.61-1.17,1.28-1.97,1.94c-0.8,0.68-1.59,1.21-2.31,1.63c-0.37,0.22-0.84-0.05-0.84-0.49v-1.15v-1.87\r
	c0-0.15,0.06-0.29,0.16-0.4l2.08-2.08L256.07,260.27z"/>\r
<path class="meg-st" d="M286.42,219.03c4.55,3.24,7.99,6.62,10.5,9.45c1.04-1.69,2.16-3.79,3.15-6.3c1.08-2.75,1.72-5.26,2.1-7.35\r
	c-3.34-3.2-7.85-6.97-13.65-10.5c-5.86-3.56-11.34-5.85-15.75-7.35c0,4.9,0,9.8,0,14.7C276.54,213.14,281.36,215.42,286.42,219.03z"\r
	/>\r
<path class="meg-st" d="M272.77,221.13c0,1.75,0,3.5,0,5.25c1.89,1.27,4.08,2.98,6.3,5.25c2.94,3.01,4.95,6.01,6.3,8.4\r
	c1.05-0.7,2.1-1.4,3.15-2.1c-1.76-2.8-4.15-6.09-7.35-9.45C278.22,225.37,275.3,222.96,272.77,221.13z"/>\r
<path class="meg-st" d="M204.53,236.88c1.05,1.05,2.1,2.1,3.15,3.15c1.94-2.59,4.36-5.47,7.35-8.4c2.55-2.5,5.06-4.58,7.35-6.3\r
	c0-1.75,0-3.5,0-5.25c-3.14,2.05-6.79,4.79-10.5,8.4C208.87,231.41,206.45,234.29,204.53,236.88z"/>\r
<path class="meg-st" d="M198.23,228.48c2.15-2.82,5.85-6.97,11.55-10.5c4.85-3,9.4-4.48,12.6-5.25c0-5.6,0-11.2,0-16.8\r
	c-5.27,1.83-11.92,4.74-18.9,9.45c-4.7,3.17-8.52,6.47-11.55,9.45c0.62,2.41,1.59,5.3,3.15,8.4\r
	C196.1,225.25,197.19,227,198.23,228.48z"/>\r
<path class="meg-st" d="M225.53,198.03c7-3.5,14-7,21-10.5c7.35,3.15,14.7,6.3,22.05,9.45c-7.35,4.55-14.7,9.1-22.05,13.65\r
	C239.53,206.43,232.53,202.23,225.53,198.03z"/>\r
<path class="meg-st" d="M246.52,210.63c0,9.45,0,18.9,0,28.35"/>\r
<path class="meg-st" d="M225.53,198.03c0,9.8,0,19.6,0,29.4c7,3.85,14,7.7,21,11.55c7.35-3.5,14.7-7,22.05-10.5c0-10.5,0-21,0-31.5"/>\r
</svg>\r
`,cl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.miku-st{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\r
</style>\r
<path class="miku-st" d="M380.97,249.56c1.82-15.96,1.98-40.6-9-67c-4.14-9.96-24.23-58.25-71-69c-17.54-4.03-32.83-1.4-42,1\r
	c-6.06-1.81-45.33-12.8-84,11c-39.67,24.41-47.03,65.95-48,72c-7.67,25.4-14.68,44.01-20,57c-2.8,6.83-8.83,21.12-6,38\r
	c0.23,1.36,2.28,13.11,6.5,13.5c4.66,0.43,7.14-13.48,12.5-13.5c4.97-0.02,5.83,11.92,14,23c12.38,16.78,35.82,23.8,40,19\r
	c1.88-2.16-0.74-6-4-16c-4.07-12.5-5.48-23.39-6-31"/>\r
<path class="miku-st" d="M152.97,239.56c-1.54,4.81-3.93,14.61-1,26c3.98,15.5,16.03,27.11,18,26c0.64-0.36,0.05-1.96-1-8\r
	c-0.66-3.8-1.14-7.2-1.48-10.06c-0.37-3.07,0.67-6.13,2.82-8.35c5.45-5.65,11.04-11.83,16.66-18.58c8.97-10.77,16.57-21.23,23-31\r
	c4.14,6.21,9.8,15.05,16,26c10.37,18.29,12.05,24.42,17,25c9.2,1.07,19.85-18.18,24-33c5.94-21.2,0.43-39.93-3-49\r
	c1.18,4.34,3.25,10.4,7,17c3.61,6.36,8.49,12.7,19,22c7.48,6.61,18.31,15.17,32.86,23.65c2.95,1.72,5.36,4.25,6.83,7.33\r
	c1.7,3.56,3.31,7.92,4.31,13.02c0.46,2.36,0.73,4.6,0.87,6.66c0.13,1.96,1.35,3.68,3.16,4.42c4.31,1.77,11.21,5.59,13.96,12.91\r
	c0,0,2.37,6.29,0,14c-6.27,20.43-57.32,35.17-105,35c-16.37-0.06-42.03-1.9-73-12"/>\r
<path class="miku-st" d="M358.97,222.56c13.23,10.66,19.71,21.76,23,29c1.33,2.93,9.74,21.44,4,26c-2.96,2.35-8.69,0.2-13-2\r
	c2.2,3.85,5.31,10.61,5,19c-0.84,22.93-26.7,42.47-36,38c-2.11-1.01-4.32-3.72-5-11"/>\r
<path class="miku-st" d="M110.97,168.56c-2.82,1.84-7.1,4.92-11.5,9.5c-7.5,7.8-18.02,22.79-24,80c-2.9,27.76-0.57,25.72-3.5,39.5\r
	c-5.91,27.84-14.58,32.24-13.5,50.5c0.95,16.16,8.96,32.28,21,41c7.86,5.69,15.25,6.94,30.03,9.44c14.12,2.39,28.77,4.68,44-2\r
	c6-2.63,17.66-7.74,19-17c1.58-10.93-11.96-22.57-15.12-25.29c-1.9-1.64-3.62-2.87-4.88-3.71c-1.03-0.54-2.37-1.46-3-3\r
	c-0.91-2.23,0.21-4.38,1-7c0.68-2.25,1.33-5.57,1-10"/>\r
<path class="miku-st" d="M385.97,167.56c1.94,0.48,4.82,1.35,8,3c16.25,8.44,22.06,27.72,26,45c10.35,45.37,2.29,52.62,11,88\r
	c6.56,26.65,15.65,33.59,12,51c-4.73,22.58-23.97,35.03-25.47,35.94c-11.53,7.03-22.42,7.61-32,8c-21.62,0.88-52.83-5.48-55-19\r
	c-1.21-7.55,6.54-17.85,12-23c1.89-1.79,3.66-3.1,5-4c0.66-0.6,1.54-1.59,2-3c0.76-2.35-0.15-4.39-1-7c-0.67-2.08-1.49-5.09-2-9"/>\r
<path class="miku-st" d="M152.97,143.56c-0.37-1.33-1.17-3.39-3-5c-3.29-2.89-7.88-2.55-14-2c-4.25,0.38-7.98,0.71-11,2\r
	c-6.18,2.64-9.14,9.16-15,32c-7.81,30.44-6.7,34.93-4,38c4.15,4.72,11.3,5.2,16,5"/>\r
<path class="miku-st" d="M342.97,137.56c0.34-0.79,0.95-1.92,2-3c3.71-3.78,9.57-3.34,14-3c2.44,0.19,8.67,0.66,14,4\r
	c4.81,3.02,7.23,7.33,14,34c5.28,20.81,5.84,26.15,3,32c-2.43,5-6.26,8.16-9,10"/>\r
<path class="miku-st" d="M177.97,260.56c2.52-2.38,9.34-8.21,20-10c9.3-1.57,16.72,0.75,20,2"/>\r
<path class="miku-st" d="M273.97,251.56c2.83-1.98,10.31-6.66,21-7c11.1-0.36,19.1,4.17,22,6"/>\r
<path class="miku-st" d="M179.97,293.56c-3.31-14.03,8.31-28.89,23-30c13.14-0.99,26.41,9.21,27,23c0.54,12.7-9.91,23.31-22,25\r
	C195.59,313.28,182.79,305.49,179.97,293.56z"/>\r
<path class="miku-st" d="M271.97,284.56c-1.11-13.97,9.62-26.99,23-28c15.36-1.16,28.56,13.93,27,29c-1.2,11.62-11.11,22.53-24,23\r
	C284.36,309.05,273.01,297.71,271.97,284.56z"/>\r
<path class="miku-st" d="M132.97,136.56c-1.36,3.61-2.7,7.28-4,11c-7.87,22.45-13.71,44.23-18,65"/>\r
<path class="miku-st" d="M362.97,131.56c4.54,9.78,9.17,21.5,13,35c4.57,16.12,6.88,30.75,8,43"/>\r
<path class="miku-st" d="M243.97,308.56c0.99,0.63,3.52,2.05,7,2c4.28-0.06,7.17-2.3,8-3"/>\r
</svg>\r
`,ll=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.mikucat-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="mikucat-st" d="M129.5,182.5c2.01,2.04,4.97,4.42,9,6c3.93,1.54,10.05,2.79,11,1c0.4-0.75-0.31-1.69-1-3\r
	c-1.51-2.86-1.67-5.91-2-12c-0.19-3.47-0.12-8.31,1-14"/>\r
<path class="mikucat-st" d="M146.5,169.5c5.08-2.54,10.98-6.08,17-11c11.86-9.69,18.95-20.48,23-28"/>\r
<path class="mikucat-st" d="M184.5,126.5c1.53,6.1,4.59,14.72,11,23c0.52,0.68,5.51,6.98,14,12c3.69,2.18,4.96,2.3,6,2\r
	c3.82-1.09,4.21-7.79,7-18c1.15-4.2,2.99-10.08,6-17c3.74,5.33,10.7,13.85,22,21c11.58,7.33,22.52,9.95,29,11"/>\r
<path class="mikucat-st" d="M274.5,147.5c4.24,9.14,5.55,16.96,6,22c0.89,10.08,1.34,15.13-1,21c-0.78,1.97-2.13,4.69-1,6\r
	c1.38,1.6,5.66,0.23,8-1c3.38-1.77,5.19-4.53,6-6"/>\r
<path class="mikucat-st" d="M283.5,196.5c0.21,2.46,0.4,6.3,0,11c-0.42,4.97-1.16,6.8,0,8c2.54,2.64,10.73-1.39,14-3\r
	c3.66-1.8,8.74-4.83,14-10c1.82,0.84,4.55,1.99,8,3c3.74,1.09,5.64,1.62,7,1c1.46-0.67,2.79-2.4,4-12c0.43-3.42,0.9-8.2,1-14\r
	c1.56-6.88,7.61-36.99-10-68c-17.19-30.27-45.15-40.66-52-43"/>\r
<path class="mikucat-st" d="M181.5,68.5c-9.33,3.48-20.68,9.03-32,18c-6.1,4.84-12.69,10.06-19,19c-3.46,4.9-12.92,19.55-18,30\r
	c-1.57,3.22-3.14,6.92-7,9c-2.31,1.25-4.22,1.26-5,3c-1.07,2.4,1.09,5.64,2,7c1.44,2.16,3.11,3.37,4,4c2.56,1.82,5.14,2.63,7,3\r
	c-1.09,4.22-1.99,10.14-1,17c2.73,18.95,17.61,29.68,21,32c0.82,6.15,3.62,9.57,5,11c2.2,2.28,6.23,5.15,8,4\r
	c0.44-0.28,0.81-0.86,1-5c0.14-2.93,0.08-5.35,0-7c3.26,2.58,4.51,2.29,5,2c2.2-1.32-0.38-9.17-1-11"/>\r
<path class="mikucat-st" d="M142.5,190.5c0.36,1.92,0.97,3.95,2,6c5.24,10.45,17.18,13.38,20,14c-1.13,5.38-2.49,13.32-3,23\r
	c-0.96,18.05-2.34,44.15,12,53c7.73,4.77,16.3,2.22,17,2c9.21-2.9,15.88-12.7,17-25"/>\r
<path class="mikucat-st" d="M233.5,259.5c0.16,3.43,1.01,10.45,6,17c1.21,1.59,8.86,11.62,20,11c5.93-0.33,10.12-3.53,12-5\r
	c14.78-11.58,12.37-35.78,12-39"/>\r
<path class="mikucat-st" d="M112.5,135.5c-0.29-8.32,0.34-15.17,1-20c1.87-13.62,5.48-21.91,9-30c2-4.6,3.96-8.35,8-11\r
	c3.75-2.46,7.53-2.8,10-3c15-1.2,22.5-1.8,28-2c16.96-0.61,24.41-2.01,29-3c4.48-0.97,7.66-1.9,8-2c14.96-4.28,53-1,53-1\r
	s35.65,3.07,64,13c2.43,0.85,6.96,2.6,10,7c2.29,3.31,2.85,6.82,3,9c0.47,7.4,0.58,15.8,0,25c-0.56,8.88-1.67,16.92-3,24"/>\r
<path class="mikucat-st" d="M117.5,194.5c-0.84,24.33-2.07,43.94-3,57c-0.87,12.23-3.09,41.18-4,53c-1.17,15.22-2.06,31.52-1,53\r
	c0.6,12.09,1.67,22,8,32c6.42,10.14,14.74,14.99,20,18c1.58,0.9,11.56,6.6,14,4c0.62-0.66,0.5-1.59,0-6c-0.47-4.12-0.82-7.32-1-9"/>\r
<path class="mikucat-st" d="M138.5,374.5c1.15,4.63,3.75,12.4,10,20c9.79,11.9,22.27,15.79,27,17"/>\r
<path class="mikucat-st" d="M335.5,92.5c1.11,0.83,2.6,2.13,4,4c3.19,4.27,3.81,8.75,4,10c12.38,80.59,17.27,162.17,28,243\r
	c1.22,9.15,4.31,30.71-8,47c-8.41,11.13-23.82,19.53-28,16c-2.38-2.01-0.96-7.73,1-13"/>\r
<path class="mikucat-st" d="M304.5,412.5c4.38,0.07,11.42-0.45,19-4c15.84-7.43,21.7-22.39,23-26"/>\r
<path class="mikucat-st" d="M173.5,286.5c0.21,34.33-0.89,60.14-2,78c0,0-1.33,21.39,5,52c1.3,6.3,3.65,16.19,12,23\r
	c2.27,1.85,7.96,6.35,16,6c8.16-0.35,13.44-5.48,15-7c8.64-8.39,8.12-20.02,8-22c4.93-0.33,9.02-0.2,12,0c5.75,0.39,7.57,1.1,9,2\r
	c2.47,1.56,3.55,3.58,5,6c0.64,1.08,5.79,9.7,9,13c5.48,5.63,16.15,6.9,24,4c13.09-4.84,16.6-20.67,18-27c0.63-2.85,0.89-5.29,1-7\r
	c1.91-31.53,3.29-64.22,4-98c0.75-35.89,0.7-70.59,0-104"/>\r
<path class="mikucat-st" d="M145.5,71.5c-0.1-2.02-0.06-3.73,0-5c0.01-0.29,0.16-2.9,1-6c0.14-0.53,0.33-1.33,1-2c0.71-0.71,1.6-0.92,2-1\r
	c5.68-1.16,21-2,21-2s7.9-0.43,15,1c0.44,0.09,1.3,0.3,2,1c0.67,0.67,0.88,1.46,1,2c0.66,2.88,0.95,7.28,1,8"/>\r
<path class="mikucat-st" d="M246.5,62.5c0.33-2,0.67-4,1-6c0.1-0.57,0.34-1.34,1-2c0.31-0.31,0.9-0.78,2-1c6.32-1.27,21-1,21-1\r
	c5.21,0.09,19.19-0.3,25,0c0.54,0.03,1.86,0.11,3,1c1.38,1.07,1.83,2.78,2,4c0.45,3.29,1.62,7.98,3,14"/>\r
<path class="mikucat-st" d="M154,181c4.94-2.39,10.62-4.81,17-7c6.49-2.23,12.55-3.84,18-5"/>\r
<path class="mikucat-st" d="M233,168c5.83,0.69,12.61,1.9,20,4c8.24,2.34,15.27,5.22,21,8"/>\r
<path class="mikucat-st" d="M199,171c0.36,0.71,1.26,2.18,3,3c0.56,0.26,1.45,0.68,2.5,0.5c1.3-0.22,1.42-1.11,2.5-1.5\r
	c1.83-0.66,3.11,1.29,5.5,1.5c1.19,0.1,2.86-0.2,5-2"/>\r
<path class="mikucat-st" d="M156.5,188.5c-0.33,2.33-0.67,4.67-1,7"/>\r
<path class="mikucat-st" d="M164.5,187.5c-0.67,2-1.33,4-2,6"/>\r
<path class="mikucat-st" d="M265.5,184.5c-0.33,2.33-0.67,4.67-1,7"/>\r
<path class="mikucat-st" d="M272.5,185.5c-0.33,1.67-0.67,3.33-1,5"/>\r
<path class="mikucat-st" d="M167.5,211.5"/>\r
</svg>\r
`,ul=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.mixue-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="mixue-st" d="M242,106c-37.02,11.72-62.14,42.14-62.5,73.5c-0.52,44.92,49.92,75.88,92,76c41.1,0.12,91.39-29.12,92-74\r
	c0.43-31.85-24.27-63.29-61.5-75.5"/>\r
<path class="mixue-st" d="M241.5,106.5c6.42,2.31,16.88,5.2,30,5c13.22-0.21,23.64-3.47,30-6c0.31-3.2,0.9-6.93,2-11\r
	c1.41-5.22,3.26-9.58,5-13c5.22-1.55,8.85-6.06,9-11c0.2-6.56-5.81-11.9-12-12c-4.41-0.07-9.08,2.51-11,7c-1.79,4.18-0.36,8.09,0,9\r
	c-0.96,2.01-2.19,3.28-3,4c-1.16,1.01-2.44,2.15-4,2c-1.09-0.1-1.85-0.79-3-2c-1.36-1.43-3.11-3.41-5-6c0.67-0.62,4.23-4.07,4-9\r
	c-0.27-5.76-5.59-11-12-11c-6.49,0-11.46,5.38-12,11c-0.45,4.67,2.28,8.14,3,9c-0.44,0.73-1.11,1.78-2,3c-1.85,2.55-2.81,3.83-4,4\r
	c-1.45,0.21-2.71-0.89-4-2c-1.65-1.43-2.54-3.01-3-4c0.29-1.24,1.01-5.07-1-9c-2.08-4.07-6.68-7.48-12-7c-5.87,0.54-11.2,5.71-11,12\r
	c0.16,5.01,3.8,9.53,9,11c1.86,2.61,4.49,7,6,13C241.85,98.86,241.78,103.46,241.5,106.5z"/>\r
<path class="mixue-st" d="M309.5,175.5c0.41-1.38,0.79-3.06,1-5c0.25-2.33,0.17-4.37,0-6c-2.71,0.39-5-1.73-5-4s2.29-4.39,5-4\r
	c-2.48-5.02-2.53-6.59-2-7c0.58-0.45,2.14,0.36,3,1c1.77,1.32,2.11,3.08,3,3c0.48-0.04,0.87-0.6,1-1c0.77-2.44-5.27-8.68-12-9\r
	c-5.29-0.25-9.15,3.23-10,4c-8.09,7.3-5.19,20.19-5,21"/>\r
<path class="mixue-st" d="M258.5,151.5c0.83-2.31-3.78-7.69-9-9c-5.47-1.38-11.02,1.86-14,5c-7.37,7.76-6.04,22.04,1,29\r
	c1.07,1.06,4.93,4.87,9,4c4.77-1.02,8.57-8.18,8-18c-1.84,0.45-3.58-0.59-4-2c-0.48-1.62,0.8-3.73,3-4c-3.14-7.16-2.53-8.62-2-9\r
	c0.94-0.67,3.61,0.27,5,2c1.09,1.35,1.26,3,2,3C257.95,152.5,258.36,151.89,258.5,151.5z"/>\r
<path class="mixue-st" d="M283.5,167.5c-2.33-0.06-4.16,0.62-5,1c-5.17,2.3-8.31,8.43-8,14c0.05,0.92,0.27,4.91,3,8\r
	c9.21,10.43,36.74-1.15,43-9c0.73-0.92,2.82-3.54,2-5c-0.66-1.17-2.91-1.04-4-1c-0.58,0.02-13.53,0.42-22-4\r
	C289.02,169.68,287.36,167.61,283.5,167.5z"/>\r
<path class="mixue-st" d="M252.5,211.5c0.49-1.03-1.57-1.9-5-7c-5.58-8.3-4.27-12.15-9-16c-0.68-0.55-5.4-4.39-10-3\r
	c-5.04,1.52-8.2,8.8-7,14C224.27,211.5,250.83,214.97,252.5,211.5z"/>\r
<path class="mixue-st" d="M251.5,212.5c3.62,1.86,18.66,9.07,37,4c13.69-3.78,21.9-12.37,25-16"/>\r
<path class="mixue-st" d="M167.5,260.5c1.9-3.28,5.05-7.78,10-12c3.23-2.75,6.38-4.67,9-6c0.95-2.33,2.96-6.35,7-10\r
	c2.95-2.66,5.93-4.16,8-5"/>\r
<path class="mixue-st" d="M147.5,256.5c1.29,0.89,3.31,2.11,6,3c2.99,0.99,5.96,1.28,12,1c4.39-0.21,6.58-0.31,11-1\r
	c14-2.18,22.25,6.32,44,7c10.91,0.34,16.05-1.57,19-3c5.98-2.9,9.83-7.14,12-10"/>\r
<path class="mixue-st" d="M293.5,253.5c2.62,3.14,7.16,7.73,14,11c7,3.35,13.18,3.75,18,4c15.99,0.81,31.1,0.54,43,0"/>\r
<path class="mixue-st" d="M340.5,229.5c2.04,1,5.11,2.82,8,6c3.81,4.2,5.35,8.61,6,11c2,0.69,5.79,2.3,9,6c5.64,6.49,5.14,14.36,5,16\r
	c4.32,3.17,10.67,8.37,17,16c6.12,7.38,21.21,25.58,19,48c-0.5,5.02-1.42,14.45-9,21c-5.44,4.7-11.78,5.73-15,6"/>\r
<path class="mixue-st" d="M172.5,294.5c-7.48,10.74-16.08,27.09-16,47c0.2,49.63,54.19,98.45,112,99c58.79,0.56,111.66-48.92,114-97\r
	c0.7-14.4-3.24-26.57-7-35"/>\r
<path class="mixue-st" d="M395.5,353.5c2.67,8.33,5.33,16.67,8,25c3,8.01,1.98,13.2,1,16c-4.44,12.7-22.44,17.31-50,24\r
	c-10.77,2.62-19.6,4.15-25,5"/>\r
<path class="mixue-st" d="M158.5,411.5c6.32,2.2,13.69,4.34,22,6c8.87,1.77,16.97,2.64,24,3"/>\r
<path class="mixue-st" d="M102.5,110.5c-1.61,0.36-4.68,1.3-7,4c-3.69,4.3-3.32,10.53-2,14c4.75,12.45,30.44,12.05,34,12\r
	c17.05-0.26,34.26-7.12,36-15c0.55-2.47,0-5,0-5c-1.12-5.19-5.51-8.1-7-9c0.44-0.81,2.86-5.5,1-11c-2.37-6.99-9.49-8.88-10-9\r
	c0.82-1.45,3.25-6.18,2-12c-1.5-6.98-7.22-10.53-8-11c-4.72-2.83-7.44-1.12-10-4c-3.23-3.64-0.51-8.19-3-10\r
	c-3.13-2.28-11.54,1.9-16,8c-6.14,8.4-3.58,18.83-3,21c-0.96,0.41-7.66,3.38-10,11C96.88,103.02,102.01,109.87,102.5,110.5z"/>\r
<path class="mixue-st" d="M99.5,135.5c7.33,26.67,14.67,53.33,22,80c1.61,1.09,7.19,4.59,15,4c7.61-0.58,12.53-4.68,14-6\r
	c3.33-28,6.67-56,10-84"/>\r
<path class="mixue-st" d="M121.5,215.5c-0.55,1.56-2.08,6.51,0,12c2.26,5.96,8.08,10.77,15,11c8.39,0.28,16.01-6.26,17-14\r
	c0.68-5.3-1.97-9.53-3-11"/>\r
<path class="mixue-st" d="M129.5,249.5c-1.58,0.44-13.54,3.99-17,14c-3.86,11.17,4.08,26.95,21,33c1.02-7.62,1.54-17.57,0-29\r
	C132.58,260.65,131.1,254.61,129.5,249.5z"/>\r
<path class="mixue-st" d="M130.5,237.5c0,4.67,0,9.33,0,14"/>\r
<path class="mixue-st" d="M133.5,296.5c3.67,46.33,7.33,92.67,11,139c0.89,3.15,3.25,5.56,6,6c3.89,0.62,8.39-2.72,9-8\r
	c-4.67-65.67-9.33-131.33-14-197"/>\r
<path class="mixue-st" d="M142.5,404.5c-1.96-1.26-5.21-3.77-7-8c-2.04-4.8-1.14-9.31,0-15c0.6-2.98,1.72-7.2,4-12"/>\r
<path class="mixue-st" d="M158.5,324.5c-1.67,6-3.33,12-5,18"/>\r
</svg>\r
`,dl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.mizuki-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="mizuki-st" d="M131.1,138.67c-4.34-9.07-12.32-27.2-16.12-47.35c-1.14-6.04-1.43-12.42-2.01-25.19\r
	c-0.46-10-0.2-13.28,2.01-15.11c4.5-3.73,14.12,0.99,20.15,4.03c39.61,19.96,59.42,29.94,58.44,35.26\r
	c-1.46,7.93-21.64,14.15-35.26,8.06c-4.71-2.11-7.45-5.15-10.08-8.06c-8.57-9.5-17.98-19.85-30.23-33.25"/>\r
<path class="mizuki-st" d="M139.16,81.25c0.5,1.47,0.84,3.38,0,5.04c-1.2,2.36-3.9,2.47-4.03,4.03c-0.17,2.03,4.27,3.23,4.03,5.04\r
	c-0.2,1.51-3.38,1.24-4.03,3.02c-0.87,2.4,3.35,7.2,8.06,9.07c1.84,0.73,2.99,0.71,5.04,2.01c2.54,1.62,2.62,2.84,4.03,3.02\r
	c2.24,0.29,2.95-2.65,7.05-5.04c3.87-2.25,6.76-1.69,7.05-3.02c0.19-0.86-0.75-2.35-6.04-5.04"/>\r
<path class="mizuki-st" d="M183.49,81.25c9.45-4.44,26.81-11.06,49.37-11.08c27.55-0.03,48.01,9.8,57.43,15.11"/>\r
<path class="mizuki-st" d="M277.19,113.49c-11.23-5.2-14.08-9.68-14.11-13.1c-0.15-18.47,81.77-22.14,88.66-22.17\r
	c1.68-0.01,4.37,0.18,6.05,2.01c1.84,2.01,1.46,4.9,1.01,9.07c-1.65,15.13-0.64,13.16-2.02,20.15c-0.6,3.05-1.54,7.21-3.02,12.09"/>\r
<path class="mizuki-st" d="M322.52,111.47c13.93-10.97,24.05-19.3,27.2-22.17c0.68-0.62,2.06-1.91,3.02-4.03c1.04-2.3,1.12-4.53,1.01-6.05\r
	"/>\r
<path class="mizuki-st" d="M324.54,114.49c2.57,2.34,4.91,3.52,6.05,4.03c4.15,1.88,7.81,1.96,9.07,2.02c3.48,0.14,27.99,1.14,31.23,9.07\r
	c0.54,1.33,0.78,3.55-16.12,25.19c-8.54,10.93-10.02,12.18-12.09,12.09c-6.57-0.28-7.34-13.48-22.17-27.2\r
	c-3.69-3.42-7.03-5.74-9.07-7.05c-18.25-11.78-31.38-7.07-34.26-14.11c-1.73-4.23,2.88-10.55,12.09-23.17\r
	c8.76-12.01,11.91-12.17,13.1-12.09c4.66,0.32,8,6.52,12.09,14.11C318.53,104.91,319.19,109.62,324.54,114.49z"/>\r
<path class="mizuki-st" d="M322.52,141.7c0.89,9.72,1.04,17.65,1.01,23.17c-0.06,9.07,0.99,18.19,0,27.2c-0.37,3.38-1.26,10.12,1.01,11.08\r
	c1.04,0.44,2.91-0.27,4.03-1.01c1.14-0.75,1.23-1.34,2.02-2.01c2.32-2,4.89,0.26,8.06-1.01c3.39-1.35,2.5-4.74,6.05-6.05\r
	c2.71-1,4.51,0.5,6.05-1.01c1.18-1.16,0.51-2.44,2.01-4.03c1.27-1.35,2.13-0.84,3.02-2.01c1.6-2.12,0.19-5.6,0-6.05\r
	c-0.59-1.4-1.08-1.5-2.02-3.02c-1.1-1.79-1.41-3.27-2.02-6.05c-0.55-2.52-1.17-5.29-2.01-9.07"/>\r
<path class="mizuki-st" d="M333.61,102.4c0.89,0.22,1.54,0.59,2.02,1.01c2.92,2.52,2.42,8.98-1.01,16.12"/>\r
<path class="mizuki-st" d="M146.21,108.45c-3.54,4.6-8.3,11.69-12.09,21.16c-1.43,3.58-8.37,21.6-6.05,45.34\r
	c1.17,11.96,3.74,15.57,6.05,35.26c0.22,1.92,1.02,8.93,1.01,18.14c-0.01,5.64-0.04,9.75-1.01,15.11\r
	c-1.35,7.48-2.77,7.56-4.03,14.11c-1.16,6-2.68,13.9,1.01,21.16c1.76,3.47,4.87,6.34,11.08,12.09c2.86,2.64,5.34,4.69,7.05,6.05"/>\r
<path class="mizuki-st" d="M144.2,293.83c-0.66,1.21-1.63,2.64-3.02,4.03c-3.69,3.66-8.06,4.7-10.08,5.04c1.59,1.01,4.35,2.47,8.06,3.02\r
	c2.43,0.36,4.52,0.23,6.05,0c-1.15,2.49-4.02,9.56-2.02,18.14c3.29,14.11,16.81,19.64,18.14,20.15c-0.56-3.87-1.08-9.02-1.01-15.11\r
	c0.04-3.71-0.85-6.72,1.01-9.07c1.3-1.64,2.64-1.57,5.04-3.02c4.37-2.64,6.41-6.77,7.05-8.06c0,0,3.7-7.42,1.12-15.76\r
	c-0.05-0.15-0.09-0.27-0.11-0.36c-1.78-5.49-4.2-5.35-12.09-16.12c-4.6-6.28-6.92-9.52-8.06-14.11c-0.75-3.03-0.84-6.38-1.01-13.1\r
	c-0.12-4.62-0.07-8.44,0-11.08"/>\r
<path class="mizuki-st" d="M170.39,133.64c-2.95,17.45-1.21,31.04,1.01,36.27c1.69,3.98,4.02,7.63,4.02,7.63\r
	c1.43,2.24,2.85,4.06,4.04,5.47c0.13-5.3,0.82-12.27,3.02-20.15c2.25-8.06,5.37-14.49,8.06-19.14"/>\r
<path class="mizuki-st" d="M148.23,233.38c0.48,0.96,1.94,3.56,5.04,5.04c1.58,0.75,3.05,0.96,4.03,1.01c-1.44-1.48-3.41-3.82-5.04-7.05\r
	c-2.69-5.35-2.96-10.24-3.02-16.12c-0.13-12.2-0.2-18.3,1.01-25.19c3.4-19.42,12.68-33.93,18.14-41.31"/>\r
<path class="mizuki-st" d="M194.57,125.58c-1.5,3.69-8.52,22,0,42.32c6.65,15.85,18.9,23.71,23.17,26.2c-0.25-2.55-0.34-5.62,0-9.07\r
	c0.22-2.24,0.59-4.26,1.01-6.05c0.45,2.43,1.62,6.83,5.04,11.08c5.83,7.25,13.96,8.74,16.12,9.07c-1.48-2.65-3.54-7.17-4.03-13.1\r
	c-0.82-9.99,3.36-17.47,5.04-20.15"/>\r
<path class="mizuki-st" d="M239.91,161.85c1.36,5.59,4.81,16.35,14.11,26.2c15.02,15.91,34.34,17.8,39.29,18.14"/>\r
<path class="mizuki-st" d="M283.23,321.03c2.74-2.81,6.91-7.04,12.09-12.09c9.89-9.64,11.93-11.04,14.11-14.11\r
	c5.41-7.62,4.55-16.53,4.03-30.23c-0.3-7.98-1.04-9.12-2.02-19.14c-0.35-3.62-0.71-8.15-1.01-34.26\r
	c-0.24-20.9-0.11-26.81-1.01-38.29c-0.63-8.12-0.97-12.27-2.02-17.13c-2.91-13.55-8.68-23.75-13.1-30.23"/>\r
<path class="mizuki-st" d="M310.43,211.21c2.79,1,6.76,3.03,9.07,7.05c4.23,7.38,1.4,18.9-8.06,27.2"/>\r
<path class="mizuki-st" d="M363.83,145.73c1.75,2.38,4.16,6.11,6.05,11.08c2.64,6.97,2.9,12.85,3.02,16.12c0.88,24.2,1,52.92,1.01,54.41"\r
	/>\r
<path class="mizuki-st" d="M373.91,214.24c3.03,2.54,7.39,6.8,11.08,13.1c2.12,3.62,5.64,9.64,6.05,17.13\r
	c0.75,13.94-9.83,24.11-12.09,26.2"/>\r
<path class="mizuki-st" d="M388.01,258.57c2.06,0.72,5.74,2.36,8.06,6.05c1.42,2.26,1.97,4.71,2.01,11.08c0.06,8.53,0.09,12.8-1.01,16.12\r
	c-3.05,9.22-11.78,16.71-18.14,22.17c-1.61,1.38-4.59,3.84-6.05,8.06c-0.45,1.3-1.82,5.3,0,9.07c1.92,3.96,6.73,6.3,12.09,6.05\r
	c-1.62,0.79-7.82,3.55-14.11,1.01c-1.49-0.6-4.83-1.95-6.05-5.04c-1.36-3.44,0.91-6.49,0-7.05c-1.16-0.71-6.35,3.25-8.06,9.07\r
	c-1.56,5.33,0.47,9.92,1.01,11.08c2.9,6.3,8.77,8.59,10.08,9.07c-8.84,0.7-17.14-3.16-21.16-10.08c-4.52-7.77-1.7-16.1-1.01-18.14\r
	c3.05-8.99,10.32-13.15,12.09-14.11"/>\r
<path class="mizuki-st" d="M345.7,328.08c-1.22-3.27-2.51-7.71-3.02-13.1c-0.64-6.68,0.15-12.28,1.01-16.12"/>\r
<path class="mizuki-st" d="M349.73,292.82c-3.03,1.92-9.93,6.88-14.11,16.12c-5.97,13.2-1.99,25.43-1.01,28.21\r
	c-2.73-2.48-7.83-7.82-10.08-16.12c-0.77-2.84-1.8-8.2,0-17.13c2.12-10.55,5.94-14.93,15.11-31.23\r
	c7.78-13.84,11.72-20.92,14.11-29.22c3.09-10.74,3.3-20.1,3.02-26.2"/>\r
<path class="mizuki-st" d="M321.52,224.31c2.03-1.61,4.78-4.21,7.05-8.06c4.2-7.11,4.21-14.11,4.03-17.13"/>\r
<path class="mizuki-st" d="M336.63,199.12c0.72,7.73,0.4,13.96,0,18.14c-1.58,16.28-7.41,31.9-4.03,41.31c0.48,1.33,1.71,4.75,5.04,7.05\r
	c1.95,1.35,3.91,1.82,5.04,2.02"/>\r
<path class="mizuki-st" d="M323.53,196.1c4.24-1.72,9.04-4,14.11-7.05c6.66-4.02,12-8.3,16.12-12.09"/>\r
<path class="mizuki-st" d="M153.26,243.45c4.09,4.89,10.98,12.04,21.16,18.14c20.21,12.09,40.19,12.09,57.43,12.09\r
	c12.04,0,22.07-0.1,34.26-5.04c10.85-4.39,18.51-10.64,23.17-15.11"/>\r
<path class="mizuki-st" d="M241.92,216.25c-3.62,12.01,0.1,22.89,7.05,26.2c5.1,2.43,10.66,0.18,11.08,0c8.02-3.36,9.61-13.22,10.08-16.12\r
	c1.29-8-1.6-14.44-3.02-17.13"/>\r
<path class="mizuki-st" d="M175.43,193.08c-2.73,0.58-6.41,1.89-9.07,5.04c-6.95,8.22-3.37,24.76,6.05,29.22c0.46,0.22,5.96,2.72,11.08,0\r
	c5.87-3.11,8.82-11.78,6.05-21.16"/>\r
<path class="mizuki-st" d="M203.64,258.57c0.61-1.59,5.78-1.06,16.12,0c7.02,0.72,7.87,1.35,8.06,2.02c0.61,2.09-4.55,6.6-10.08,7.05\r
	C210.05,268.26,202.73,260.93,203.64,258.57z"/>\r
<path class="mizuki-st" d="M235.88,222.3c3.1-3.4,9.86-9.79,20.15-12.09c3.22-0.72,8.18-1.77,14.11,0c6.1,1.82,9.69,5.56,11.08,7.05\r
	c2.25,2.41,4.04,4.32,4.03,7.05c-0.02,4.78-5.55,7.8-6.05,8.06"/>\r
<path class="mizuki-st" d="M194.57,215.24c-1.77-4.82-5.46-12.36-13.1-18.14c-3.99-3.01-8.78-6.71-15.11-6.05\r
	c-6.69,0.7-13.99,6.13-14.11,12.09c-0.03,1.59,0.46,2.97,1.01,4.03"/>\r
<path class="mizuki-st" d="M277.19,155.8c3.93,7.2,15.33,29.03,16.12,46.35c0.16,3.5,0.1,11.65,0,17.13c-0.16,8.61-0.26,12.98-1.01,16.12\r
	c-1.03,4.36-3.74,11.54-12.09,19.14c1.37,0.29,3.53,0.54,6.05,0c1.19-0.25,2.21-0.63,3.02-1.01c0.04,1.64,0.07,4.09,0,7.05\r
	c-0.16,6.63-0.74,12.31-1.01,14.11c-2.26,15.07-23.2,28.32-24.18,35.26c-0.19,1.33-0.29,7.03,0,9.07l0,0\r
	c0.29,2.01,0.54,3.4,0.61,3.78c0,0,0.35,1.81,1.41,4.28c2.57,5.98,11.72,8.34,13.1,15.11c0.19,0.93,0.13,2.3,0,5.04\r
	c-0.08,1.73-0.27,5.9-1.01,8.06c-2.04,5.98-12.14,7.75-14.11,8.06c2.94,0.84,10.5,2.54,18.14-1.01\r
	c10.39-4.82,16.66-17.37,15.11-31.23c1.07,0.45,3.24,1.21,6.05,1.01c2.95-0.22,5.06-1.39,6.05-2.02c-3.17-1.29-8.27-4.02-10.08-9.07\r
	c-0.62-1.73-0.78-3.55-1.01-6.05c-0.34-3.76-0.2-6.89,0-9.07"/>\r
<path class="mizuki-st" d="M238.9,189.05c1.69-1.65,5.03-4.46,10.08-6.05c6.93-2.18,12.83-0.7,15.11,0"/>\r
<path class="mizuki-st" d="M192.56,177.97c-1.2-1.47-3.15-3.47-6.04-5.04c-6.07-3.29-12.07-2.41-14.11-2.01"/>\r
<path class="mizuki-st" d="M236.89,209.2c0.74-0.84,2.05-2.1,4.03-3.02c3.05-1.42,5.86-1.18,7.05-1.01"/>\r
<path class="mizuki-st" d="M194.57,200.13c-0.47-0.9-1.12-1.95-2.02-3.02c-1.75-2.09-3.69-3.32-5.04-4.03"/>\r
<path class="mizuki-st" d="M187.52,267.63c-0.53,1.14-1.79,4.23-1.01,8.06c1.21,5.95,6.33,8.7,7.05,9.07"/>\r
<path class="mizuki-st" d="M246.96,273.68c1.6,0.91,8.36,4.92,8.06,10.08c-0.04,0.77-0.24,1.47-1.01,3.02\r
	c-3.77,7.64-9.39,11.75-14.11,15.11c-1.7,1.21-3.17,2.14-5.04,2.02c-2.33-0.16-3.95-1.86-5.04-3.02\r
	c-11.23-12.08-11.46-13.15-11.08-14.11c0.89-2.23,4.15-1.39,9.07-4.03c4.62-2.48,7.42-6.26,9.07-9.07"/>\r
<path class="mizuki-st" d="M166.36,317c0.52,1.2,1.67,3.4,4.03,5.04c3.03,2.1,6.23,2.04,7.05,2.02c9.57-0.31,17.79-13.03,19.14-16.12\r
	c0.25-0.56,0.73-1.88,2.01-3.02c1.13-1.01,1.88-0.98,3.02-2.01c0.32-0.29,1.74-1.56,2.02-3.02c0.36-1.9-1.42-3.03-6.05-8.06\r
	c-3.39-3.68-4.43-5.25-6.05-5.04c-0.82,0.11-1.55,0.74-3.02,2.01c-1.64,1.42-1.81,2.04-3.02,3.02c-1.4,1.14-2.39,1.3-4.03,2.01\r
	c-1.54,0.67-3.68,1.85-6.05,4.03"/>\r
<path class="mizuki-st" d="M255.02,283.75c1.57-0.46,4.02-1.01,7.05-1.01c2.77,0,4.41,0,5.04,1.01c1.2,1.92-1.5,7.12-5.04,8.06\r
	c-1.21,0.32-2.42,0.12-3.02,1.01c-0.52,0.76,0.03,1.41,0,3.02c-0.05,2.8-1.77,4.77-2.01,5.04c-0.5,0.56-1.47,1.64-3.02,2.02\r
	c-2.06,0.5-3.63-0.59-4.03,0c-0.35,0.52,0.88,1.39,1.01,3.02c0.1,1.34-0.59,2.39-1.01,3.02c-1.5,2.27-5.43,3.46-10.08,3.02\r
	c0,7.39,0,14.78,0,22.17"/>\r
<path class="mizuki-st" d="M233.86,303.9c0,10.41,0,20.82,0,31.23"/>\r
<path class="mizuki-st" d="M196.59,307.93c0,6.05,0,12.09,0,18.14"/>\r
<path class="mizuki-st" d="M202.63,301.89c0,9.07,0,18.14,0,27.2"/>\r
<path class="mizuki-st" d="M194.57,325.06c2.9,2.16,7.29,4.96,13.1,7.05c6.91,2.49,12.55,2.81,17.13,3.02c6.05,0.29,15.22,0.03,26.2-3.02"\r
	/>\r
<path class="mizuki-st" d="M185.5,350.25c-3.24,7.52-5.45,12.97-7.05,17.13c-1.52,3.93-2.58,5.8-3.39,7.09c-2.8,4.43-5.15,5.79-4.67,8.02\r
	c0.36,1.67,2.2,3.39,4.03,4.03c1.33,0.46,2.19,0.2,3.02,1.01c0.9,0.87,0.46,1.73,1.01,3.02c1.12,2.66,5.1,4.07,8.06,4.03\r
	c1.76-0.03,2.12-0.55,3.31-0.19c2.07,0.63,2.08,2.57,3.74,4.22c4,3.97,13.68,2.41,16.12,2.02c0.46-0.07,1.59-0.27,3.02,0\r
	c2.04,0.39,3.3,1.49,4.03,2.02c3.43,2.47,9.31,2.67,13.1,1.01c2.71-1.19,3.34-2.9,6.05-3.02c1.56-0.07,2.23,0.45,4.03,1.01\r
	c5.3,1.64,12.34,1.07,14.11-2.02c0.46-0.8,0.3-1.33,1.01-2.02c1.11-1.08,2.45-0.71,5.04-1.01c2.71-0.31,4.8-0.56,6.05-2.02\r
	c1.26-1.49,0.54-2.92,2.02-4.03c0.98-0.73,1.51-0.27,3.02-1.01c0.44-0.22,2.63-1.29,3.02-3.02c0.38-1.67-1.21-2.68-3.02-6.05\r
	c-0.29-0.54-0.52-1.01-0.72-1.46c-0.8-1.84-1.21-3.26-1.3-3.57c0,0,0,0,0,0c-0.03-0.1-5.15-11.91-13.1-30.22"/>\r
<path class="mizuki-st" d="M192.56,313.98c1.37,3.69,1.85,6.87,2.02,9.07c0.08,1.01,0.18,2.8,0,5.04c-0.2,2.52-0.64,4.59-1.01,6.05\r
	c-0.86,1.19-2.22,2.98-4.03,5.04c-4.5,5.12-7.68,7.21-7.05,9.07c0.38,1.11,2,1.82,3.02,2.02c1.5,0.29,2.09-0.46,3.02,0\r
	c1.31,0.65,0.86,2.49,2.01,4.03c0.69,0.93,2.07,1.87,5.04,2.02"/>\r
<path class="mizuki-st" d="M244.95,311.96c0.4,1.81,3.69,16.67,8.06,26.2c2.2,4.79,4.03,8.06,4.03,8.06c2.94,4.41,3.03,4.48,4.03,7.05\r
	c1.33,3.42,1.18,5.27,3.02,7.05c1.33,1.28,2.93,1.79,4.03,2.02"/>\r
<path class="mizuki-st" d="M286.25,359.32c4.12,6.08,3.28,12.78,0,15.11c-2.24,1.59-6.37,1.68-9.07,0c-1.8-1.12-2.03-2.46-4.03-3.02\r
	c-2.38-0.67-3.75,0.75-5.04,0c-0.92-0.54-1.73-2.15-1.01-7.05"/>\r
<path class="mizuki-st" d="M258.04,401.63c3.44,0.15,8.29,0.26,14.11,0c4.43-0.2,8.38-0.37,12.09-1.01c3.48-0.6,21.51-3.69,25.19-15.11\r
	c1.52-4.72,0.71-11.23-3.02-14.11c-2.09-1.61-4.65-1.79-8.06-2.02c-4.28-0.29-7.8,0.39-10.08,1.01"/>\r
<path class="mizuki-st" d="M192.56,396.59c1.04,5.93,1.65,10.8,2.02,14.11c1.28,11.69,1.93,17.53,2.01,22.17c0.1,5.52-0.17,6.73,1.01,8.06\r
	c4.23,4.78,18.99,1.98,23.17-6.05c1.09-2.09,1.05-3.74,1.01-9.07c-0.03-4.7-0.06-11.93,0-21.16"/>\r
<path class="mizuki-st" d="M228.83,404.65c1.05,3.51,1.67,6.34,2.01,8.06c2.55,12.74,3.02,27.2,3.02,27.2c0.12,3.57,0.05,4.71,1.01,6.05\r
	c3.38,4.71,14.73,5.11,20.15,0c3.69-3.48,3.22-8.17,3.02-25.19c-0.12-10.35-0.06-18.75,0-24.18"/>\r
<path class="mizuki-st" d="M259.05,296.85c2.02,3.69,4.03,7.39,6.05,11.08"/>\r
<path class="mizuki-st" d="M192.56,286.78c0.14-1.07,0.55-3.08,2.02-5.04c0.41-0.55,3.2-4.28,7.05-4.03c3.59,0.23,5.69,3.76,7.05,6.05\r
	c1.44,2.42,3.38,5.67,2.01,9.07c-1.63,4.05-6.61,4.96-7.05,5.04"/>\r
<path class="mizuki-st" d="M198.6,270.66c-0.15,0.63-0.32,1.73,0,3.02c0.61,2.47,2.55,3.74,3.02,4.03"/>\r
<path class="mizuki-st" d="M210.69,292.82c3.85-1.47,8.14-3.61,8.06-6.05c-0.04-1.13-0.99-1.76-2.01-3.02c-1.48-1.82-3-4.85-3.02-10.08"/>\r
<path class="mizuki-st" d="M233.86,434.88c2.52,0.78,7.25,1.88,13.1,1.01c5.12-0.76,8.92-2.7,11.08-4.03"/>\r
<path class="mizuki-st" d="M196.59,428.83c2.05,0.86,4.78,1.72,8.06,2.02c8.15,0.74,14.46-2.46,17.13-4.03"/>\r
<path class="mizuki-st" d="M236.89,364.35c2.47,0.16,4.05-0.43,5.04-1.01c1.34-0.78,1.62-1.54,3.02-2.01c1.6-0.54,2.5-0.02,4.03,0\r
	c3.14,0.04,6.48-2.16,8.06-5.04c1.33-2.41,1.18-4.84,1.01-6.05"/>\r
<path class="mizuki-st" d="M193.56,334.13c3.88,3.32,9.91,7.54,18.14,10.08c20.34,6.27,38.04-2.72,42.32-5.04"/>\r
<path class="mizuki-st" d="M196.59,359.32c-1.65,6.12-3.02,11.26-4.03,15.11c-2.49,9.48-2.72,10.58-2.01,12.09\r
	c3.77,8.13,24.5,7.24,26.2,7.05c0.21-0.02,1.47-0.18,3.2-0.13c0.74,0.02,1.35,0.08,1.84,0.13c3.55,0.38,4.36,1.02,6.05,1.01\r
	c1.69-0.01,3.79-0.68,5.04-2.02c2.08-2.24,1.38-5.97,1.01-8.06c-0.99-5.49-1.96-12.19-3.02-21.16"/>\r
<path class="mizuki-st" d="M232.86,392.56c6.33-0.06,11.04-0.03,14.11,0c3.92,0.04,6.95,0.1,9.07-2.01c1.44-1.44,1.86-3.31,2.01-4.03\r
	c0.68-3.18-0.52-5.9-1.01-7.05c-1.75-4.13-3.7-10.03-6.05-18.14"/>\r
<path class="mizuki-st" d="M175.43,374.43c0.76,1.27,1.74,2.66,3.02,4.03c4.22,4.52,9.25,6.31,12.09,7.05"/>\r
<path class="mizuki-st" d="M258.04,385.51c1.3-0.03,4.1-0.26,7.05-2.02c2.85-1.69,4.38-3.93,5.04-5.04"/>\r
<path class="mizuki-st" d="M202.63,302.9c2.12,1.82,4.24,3.64,6.36,5.45c0.44,0.38,0.69,0.92,0.69,1.5v8.34c0,0.81,0.88,1.3,1.57,0.89\r
	l2.3-1.38c0.72-0.43,1.17-1.22,1.17-2.06c0-3.91,0-7.82,0-11.74c0.16-1.44,1.3-2.2,2.01-2.02c0.58,0.15,1.08,1,1.01,2.02\r
	c0,4.47,0,8.94,0,13.41c0,1.04,0.59,2,1.52,2.47l3.43,1.72c0.5,0.25,1.09-0.11,1.09-0.67v-7.51c0-0.81,0.35-1.58,0.97-2.1\r
	c0.96-0.79,2.05-1.87,3.06-3.28c0.94-1.31,2.58-3.01,3.02-7.05"/>\r
</svg>\r
`,fl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.mj-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="mj-st" d="M115.07,167.35c21.25-40.73,62.67-51.22,72.61-53.39c6.02-1.32,52.48-10.68,89.69,19.22\r
	c42.99,34.54,54.07,105.72,21.36,146.29c-26.04,32.3-69.94,32.91-83.29,33.1c-14.41,0.2-64.45,0.91-93.97-39.51\r
	C98.4,241.45,98.46,199.2,115.07,167.35z"/>\r
<path class="mj-st" d="M131.09,196.18c9.1,8.77,23.19,20.36,42.71,29.9c22.09,10.79,42.19,14.57,55.52,16.02\r
	c-0.19,2.59-2.3,26.21-22.42,38.44c-21.8,13.25-45.43,1.37-48.05,0C134.71,267.88,122.18,233.47,131.09,196.18z"/>\r
<path class="mj-st" d="M246.41,238.89c9.17-5.21,25.02-15.93,37.37-35.24c6.87-10.73,10.65-20.97,12.81-28.83\r
	c2.82,4.35,26.53,41.97,12.81,71.54c-2.19,4.72-6.56,14.14-17.08,19.22c-1.68,0.81-13.06,6.08-25.63,1.07\r
	C255.59,262.23,247.84,251.48,246.41,238.89z"/>\r
<path class="mj-st" d="M198.36,284.81c5.86,2.55,21.41,8.38,40.58,4.27c12.04-2.58,20.72-8.06,25.63-11.75c1.81-0.07,4-0.34,6.41-1.07\r
	c5.95-1.8,9.82-5.38,11.75-7.47"/>\r
<path class="mj-st" d="M213.31,312.57c1.84-6.85,5.06-17.07,10.68-28.83c7.32-15.33,11.3-23.66,18.15-24.56\r
	c8.56-1.12,16.99,9.98,25.63,21.36c5.05,6.65,8.48,12.73,10.68,17.08"/>\r
<path class="mj-st" d="M122.55,274.13c4.61,1.37,10.37,2.65,17.08,3.2c5.21,0.43,9.9,0.33,13.88,0"/>\r
<path class="mj-st" d="M103.33,210.06c2.04,2.06,4.51,4.27,7.47,6.41c6.27,4.53,12.4,7.07,17.08,8.54"/>\r
<path class="mj-st" d="M154.58,215.4c3.71-2.25,9.73-6.55,14.95-13.88c5.73-8.05,7.75-15.91,8.54-20.29\r
	c5.48-0.11,14.5-0.98,24.56-5.34c9.08-3.94,15.42-9.16,19.22-12.81c4.1,2.7,11.81,6.99,22.42,8.54c9.21,1.35,16.8,0.07,21.36-1.07\r
	c0.97,3.8,3,9.8,7.47,16.02c4.86,6.74,10.43,10.72,13.88,12.81"/>\r
<path class="mj-st" d="M146.04,132.11c11.68,21.01,23.28,37.02,32.03,48.05c10.18,12.83,40.27,50.77,52.32,44.85\r
	c2.53-1.25,3.69-4.15,4.27-6.41c0.77,1.63,2.12,3.75,4.27,4.27c4.52,1.08,9.58-5.66,11.75-8.54c11.53-15.35,20.29-70.42,22.42-84.36\r
	"/>\r
<path class="mj-st" d="M234.67,218.6c-8.54-35.59-17.08-71.19-25.63-106.78"/>\r
<path class="mj-st" d="M312.61,255.98c5.6-9.05,10.92-15.17,14.95-19.22c3.14-3.16,6.28-5.84,7.47-10.68\r
	c1.09-4.39-0.54-6.03,1.07-10.68c0.55-1.57,2.53-7.3,7.47-8.54c0.36-0.09,3.73-0.88,6.41,1.07c3.4,2.47,3.26,7.59,3.2,9.61\r
	c-0.09,3.26-1.06,3.97-1.07,7.47c-0.01,2.7,0.56,4.92,1.07,6.41"/>\r
<path class="mj-st" d="M345.72,246.36c-1.93-2.18-1.24-5.58-1.07-6.41c1.24-6.05,7.84-8.86,9.61-9.61c1.24-0.53,9.91-4.06,13.88,0\r
	c1.69,1.73,2.01,4.3,2.14,5.34c0.08,0.65,0.46,3.73-1.07,6.41c-2.19,3.85-7,4.52-12.81,5.34\r
	C351.38,248.14,347.74,248.65,345.72,246.36z"/>\r
<path class="mj-st" d="M354.26,230.35c0.66-2.47,2.47-7.8,7.47-11.75c4.92-3.88,13.85-7.16,18.15-3.2c2.24,2.05,2.89,5.76,2.14,8.54\r
	c-0.67,2.48-2.38,3.92-5.34,6.41c-2.44,2.06-4.75,3.42-6.41,4.27"/>\r
<path class="mj-st" d="M343.58,253.84c-1.04,3.13,0.92,6.18,1.07,6.41c0.54,0.82,2.13,2.85,9.61,4.27c7.5,1.42,11.24,2.13,13.88,0\r
	c4.07-3.3,4.72-11.25,1.07-14.95c-2.26-2.29-5.47-2.22-9.61-2.14C357.07,247.48,345.62,247.72,343.58,253.84z"/>\r
<path class="mj-st" d="M316.89,301.89c2.39-3.44,6.17-8.18,11.75-12.81c5.46-4.54,8.19-6.81,11.75-7.47\r
	c6.52-1.22,11.95,2.22,22.42,2.14c0.76-0.01,2.5-0.04,4.27-1.07c2.71-1.58,4.81-5.1,4.27-8.54c-0.36-2.33-1.82-3.87-3.2-5.34\r
	c-1.56-1.65-3.18-2.64-4.27-3.2"/>\r
<path class="mj-st" d="M312.61,293.35c0.63,1.47,1.68,3.74,3.2,6.41c1.23,2.16,5.7,9.7,14.95,18.15c4.25,3.88,4.06,3.19,6.41,5.34\r
	c9.45,8.67,14.46,26.82,7.47,38.44c-0.91,1.51-3.8,6.17-9.61,8.54c-1.28,0.52-5.53,2.09-10.68,1.07c-5.52-1.09-6.71-4.09-11.75-6.41\r
	c-0.49-0.22-9.51-4.23-17.08-1.07c-6.34,2.65-6.32,8.09-18.15,23.49c-1.78,2.32-3.3,4.17-4.27,5.34c0.07,2.28,0.12,5.6,0,9.61\r
	c-0.21,6.84-0.31,10.26-1.07,12.81c-1.82,6.16-6.93,12.12-13.88,14.95c-8.49,3.45-16.12,0.75-18.15,0\r
	c-6.33-2.35-9.98-6.56-14.95-12.81c-10.56-13.28-15.84-19.91-20.29-27.76c-2.79-4.91-8.41-15.33-20.29-49.12\r
	c-4.57-13.01-8.15-24.01-10.68-32.03"/>\r
<path class="mj-st" d="M217.58,406.53c5.55,1.23,15.65,2.69,27.76,0c13.92-3.1,23.32-10.08,27.76-13.88"/>\r
<path class="mj-st" d="M328.63,316.84c0.72,3.62,1.66,9.17,2.14,16.02c0.79,11.28,1.12,17.03-2.14,22.42\r
	c-1.28,2.12-4.64,6.73-12.81,9.61"/>\r
<path class="mj-st" d="M193.02,363.82c1.32-0.78,3.55-1.86,6.41-2.14c4.83-0.47,8.64,1.64,9.61,2.14c8.53,4.32,32.09,2.21,49.12-5.34\r
	c15.83-7.01,14.51-13.61,30.97-23.49c15.27-9.17,30.42-11.9,40.58-12.81"/>\r
<path class="mj-st" d="M209.04,313.64c-1.19,9.03,0.38,15.19,2.14,19.22c1.74,4.02,5.18,9.42,3.2,14.95\r
	c-0.16,0.45-0.49,1.36-1.07,2.14c-4.93,6.59-24.79-0.75-25.63-1.07"/>\r
<path class="mj-st" d="M266.7,304.03c-0.19,2.86-0.31,6.9,0,11.75c0.49,7.51,0.78,11.32,3.2,13.88c3.3,3.49,8.83,4.17,12.81,3.2\r
	c4.11-1,4.86-3.34,9.61-6.41c1.67-1.08,4.1-2.42,16.02-5.34c5.27-1.29,12.13-2.83,20.29-4.27"/>\r
<path class="mj-st" d="M269.9,301.89c7.56-1.31,15.77-2.43,24.56-3.2c7.13-0.62,13.91-0.95,20.29-1.07"/>\r
<path class="mj-st" d="M220.78,321.11c0.96,4.48,3.11,6.57,4.27,7.47c7.42,5.77,22.72,0.38,24.56-7.47c0.32-1.37,0.39-3.5-1.07-6.41"\r
	/>\r
<path class="mj-st" d="M227.19,321.11c0.16,1.17,0.61,3.29,2.14,5.34c0.82,1.11,3.48,4.69,7.47,4.27c3.05-0.32,6.14-2.89,6.41-6.41\r
	c0.3-3.88-3.04-6.29-3.2-6.41"/>\r
<path class="mj-st" d="M231.46,347.8c-1.27-1.87-2.7-4.02-4.27-6.41c-1.6-2.43-2.07-3.19-2.14-4.27c-0.18-3.01,2.91-5.45,4.27-6.41"/>\r
<path class="mj-st" d="M243.21,328.58c1.57,0.05,5.64,0.38,7.47,3.2c0.35,0.54,0.81,1.47,1.07,5.34c0.21,3.13,0.12,5.71,0,7.47"/>\r
<path class="mj-st" d="M232.53,330.72c-1.61,3.15-1.31,5.38-1.07,6.41c0.19,0.78,0.53,1.64,3.2,5.34c1.3,1.81,2.42,3.27,3.2,4.27"/>\r
<path class="mj-st" d="M241.07,329.65c2.78,1.42,3.83,3.03,4.27,4.27c0.58,1.63,0.17,2.85,0,6.41c-0.11,2.25-0.06,4.1,0,5.34"/>\r
<path class="mj-st" d="M234.67,330.72c0.05,0.33,0.68,4.61,3.2,5.34c0.28,0.08,0.7,0.2,1.07,0c1.56-0.83,0.1-6.04,0-6.41"/>\r
<path class="mj-st" d="M114.01,334.99c-0.07-1.27-0.12-3.12,0-5.34c0.18-3.46,0.4-7.64,2.14-11.75c1.62-3.84,3.94-6.12,6.41-8.54\r
	c1.16-1.14,6.7-6.44,16.02-9.61c3.9-1.33,7.29-1.88,9.61-2.14"/>\r
<path class="mj-st" d="M122.55,347.8c3.54,1.65,6.62,2.04,8.54,2.14c6.78,0.32,13.81-2.49,18.15-7.47c2.44-2.81,1.46-3.35,4.27-6.41\r
	c2.44-2.65,3.32-2.39,10.68-7.47c3.89-2.69,5-3.69,7.47-4.27c2.59-0.61,4.89-0.33,6.41,0"/>\r
<path class="mj-st" d="M83.04,344.6c3.54-0.31,14.84-1.39,25.63-6.41c4.51-2.1,6.77-3.14,9.61-5.34c4.88-3.77,6.07-6.71,8.54-6.41\r
	c2.95,0.36,5.07,5.02,5.34,8.54c0.29,3.7-1.44,6.49-2.14,7.47c-1.82,2.59-4.25,3.76-5.34,4.27c-14.76,6.91-23.49,8.54-23.49,8.54\r
	c-18.97,3.55-17.22-0.1-30.97,3.2c-7.8,1.88-14.61,4.55-19.22,1.07c-0.56-0.42-3.2-2.42-3.2-5.34c0-2.88,2.56-4.85,3.2-5.34\r
	c2.59-1.99,5.58-2.1,6.41-2.14C57.41,346.74,60.05,346.63,83.04,344.6z"/>\r
<path class="mj-st" d="M156.72,125.71c-4.98-7.74-9.98-15.92-14.95-24.56c-6.77-11.77-12.79-23.21-18.15-34.17\r
	c-1.33-1.87-3.83-2.22-5.34-1.07c-1.19,0.91-1.66,2.66-1.07,4.27c4.61,9.83,9.92,20.2,16.02,30.97\r
	c5.68,10.02,11.43,19.28,17.08,27.76"/>\r
<path class="mj-st" d="M405.51,141.72c4.65-8.93,13.02-14.4,21.36-13.88c10.96,0.68,16.89,11.38,18.15,13.88\r
	c11.17,22.07-14.66,49.01-18.15,52.32c-1.2,1.13-3.67,3.42-7.47,4.27c-3.77,0.84-7-0.14-9.61-1.07c-9.2-3.26-14.75-5.22-21.36-10.68\r
	c-6.23-5.15-19.78-16.34-18.15-30.97c0.17-1.55,1.53-12.19,10.68-17.08C388.31,134.58,397.96,135.82,405.51,141.72z"/>\r
</svg>\r
`,pl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="奶龙" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.nailong-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path id="身体轮廓" class="nailong-st" d="M316.9,216.5c5.6-4.4,14.1-12.4,20-25c2.7-5.9,4-10.7,5-15c1.5-6.3,3.5-16.5,3-35\r
	c-0.5-19.2-0.7-29.1-5-42c-1.9-5.6-6.5-19.2-18-32c-20.3-22.7-47.4-27.1-59-29c-13.5-2.2-38.6-6.3-61,8c-8.6,5.5-13.3,11.5-20,20\r
	c-6.8,8.7-23.8,30.9-27,64c-0.9,8.8-1.1,22.5,3,39c-1,11.7-2,23.3-3,35c-4.4,0.7-11.6,2.3-19,7c-4.1,2.6-17.1,10.8-20,26\r
	c-2.5,13.4,2.8,32.3,16,36c8.2,2.3,16-2.1,19-4c0.6,1.6,1.4,4,2,7c0,0,1.1,3.3,1,7c-0.1,5.8-1.6,30.8-4,65c-8.3-0.4-14.2-2.4-18-4\r
	c-9.5-4.1-14.6-10.1-24-10c-3,0-4.9,0.7-6,2c-1.9,2.2-1.7,5.9,0,11c3.9,11.6,12,19.9,17,25c7.5,7.6,15.5,15.3,24,23\r
	c-2,16.7-4,33.3-6,50c-0.4,1.3-0.7,3.1,0,5c0.9,2.2,3.1,3.8,7,5c13.2,4,51,4.6,59-6c2.1-2.9,3-6,3-6c1-3.8,0.5-7.2,0-9\r
	c2.1-1.7,5.1-3.9,9-6c1.9-1,10.2-5.3,23-7c7.8-1,8.9,0,20-1c6.4-0.6,11.6-1.4,15-2c1.3,7.7,2.7,15.3,4,23c0.6,1,1.5,2.5,3,4\r
	c3.6,3.7,8.5,5.8,17,7c21.1,2.9,36.7-3.9,42.4-3.5c0.3,0,1.5,0.1,2.6-0.5c1.4-0.9,1.8-2.6,2-4c0.8-5.9-1.6-16-2-22\r
	c-0.3-4.5,0.5-7.2,2-14c3.2-14.2,5.1-28.7,8-43c2.6-13.1,3.9-33.3-3-63c1.3,1.3,9.9,9.3,16,12c1.6,0.7,2.9,0.9,4,1\r
	c3.4,0.2,6-1.4,7-2c8.5-5.2,9.8-22.1,10-25c0.2-4,0.4-7.6-1-12c-1.9-5.9-5.6-9.7-8-12C369.3,257.2,347.3,239.3,316.9,216.5z"/>\r
<path id="肚皮" class="nailong-st" d="M209.9,323.5c4.3-33.3,30.2-81.9,69-81c35.6,0.8,60.4,42.8,65,75c1.1,7.4,5.2,36.9-15,62\r
	c-3.5,4.3-24.5,29.3-58,27c-32.8-2.3-50.1-28.9-52-32C206.3,354.2,208.6,333.4,209.9,323.5z"/>\r
</svg>\r
`,ml=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.naiwa-st{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\r
</style>\r
<path class="naiwa-st" d="M211,85c-6.67,0-13.33,0-20,0c-0.48-0.05-1.47-0.24-2-1c-0.66-0.95-0.26-2.25,0-3c1.19-3.46,2.9-5.87,4-8\r
	c1.3-2.53,1.87-5.35,3-11c0.7-3.49,0.5-3.59,1-5c0.44-1.23,1.75-4.41,6-8c11.12-9.39,24-12,24-12c3.68-0.75,21.05-3.86,37,5\r
	c13.38,7.43,13.58,16.51,37,59c12.42,22.53,13.13,21.37,19,34c5.44,11.71,7.62,18.72,18,50c14.41,43.43,14.37,42.49,15,46\r
	c2.53,14.16,6.83,38.15-4,64c-7.42,17.72-19.04,29.38-27,36"/>\r
<path class="naiwa-st" d="M322,327c-0.49,10.67-1.23,20.09-2,28c-0.32,3.33-1.27,12.76-3,25c-1.48,10.47-2.22,15.7-3,19\r
	c-1.95,8.27-3.11,16.71-5,25c-0.2,0.89-0.75,3.24,0,6c0.14,0.52,0.63,2.17,2,4c2.84,3.79,5.62,3.18,8,6c2.08,2.46,2.74,6.2,2,9\r
	c-0.69,2.61-4.14,4.78-11,9c-9.57,5.89-12.35,7.56-17,9c-1.44,0.45-4.78,1.4-9,1c-2.45-0.23-4.73-0.45-6-2\r
	c-1.85-2.26-1.01-6.73,2-11"/>\r
<path class="naiwa-st" d="M264,452c-1.01,0.6-3.8,2.45-5,6c-0.41,1.21-1.29,3.82,0,6c1.4,2.37,4.47,2.71,7,3c2.31,0.26,6.34,0.71,9-2\r
	c1.35-1.38,1.82-3.05,2-4"/>\r
<path class="naiwa-st" d="M259,463c-2.75,1.07-5.57,0.65-7-1c-2.02-2.32-0.41-6.06,0-7c1.6-3.71,4.95-5.59,10-8c0,0,9.92-4.73,29-15\r
	c0.46-0.25,1.52-0.83,2-2c0.81-1.94-0.53-4.19-1-5c-4.78-8.15-18.75-34.19-24-46c-2.58-5.81-4.34-11.06-6-16\r
	c-2.72-8.13-4.64-15.29-6-21"/>\r
<path class="naiwa-st" d="M251,346c-1.61,5.64-3.73,14.23-5,25c-0.79,6.71-0.25,5.69-1,11c-0.51,3.61-3,19.83-5,30\r
	c-0.12,0.62-0.42,2.15,0,4c0.62,2.71,2.42,4.45,3,5c3.28,3.1,5.57,1.57,8,4c2.67,2.66,3.54,8.11,1,11c-1.21,1.37-2.9,1.83-4,2\r
	c-5.86,0.69-47.5,5.6-61,6c-2.09,0.06-5.87,0.09-7-2c-1.4-2.58,2.07-6.89,3-8"/>\r
<path class="naiwa-st" d="M179,441c-0.67,0.3-1.7,0.7-3,1c-2.01,0.46-4.01,0.91-6,0c-0.2-0.09-2.47-1.17-3-3c-0.76-2.66,2.21-6.78,8-9"/>\r
<path class="naiwa-st" d="M167,436c-0.09-1.19-0.06-3.14,1-5c2.14-3.76,7.05-4.63,9-5c7.47-1.42,23.31-5.46,45-11c0.15,0,1.3-0.05,2-1\r
	c0.62-0.84,0.63-2.05,0-3c-3.88-5.34-9.25-13.14-15-23c-6.58-11.29-11.35-19.48-15-31c-2.19-6.92-4.74-17.46-5-31"/>\r
<path class="naiwa-st" d="M154,260c0.86,9.3,4.43,34,24,55c14.92,16.01,31.99,22.2,40,25c15.95,5.58,30.01,6.26,39,6"/>\r
<path class="naiwa-st" d="M193,155c-3.79,3.75-7.93,8.38-12,14c-5.52,7.62-9.34,14.91-12,21c-5.36,3.13-17.15,11.11-23,26\r
	c-1.71,4.35-2.58,8.46-3,12c-0.32,2.6-0.5,6.03,0,10c0.58,4.62,1.86,8.36,3,11c0.23,1.58,0.87,4.4,3,7c0.46,0.57,4.06,4.98,7,4\r
	c0.93-0.31,1.68-1.11,2-2c0.47-1.29,0.08-2.82-1-4"/>\r
<path class="naiwa-st" d="M146,247c1.15,1.01,2.84,2.43,5,4c4.15,3.02,5.22,3.12,6,3c1.84-0.27,3.55-1.94,4-4c0.51-2.35-0.71-4.85-3-6"/>\r
<path class="naiwa-st" d="M148,238c5.33,5.22,10.8,6.83,13,5c1.4-1.16,1.8-3.99,1-6c-0.23-0.57-0.66-1.33-4-4c-1.63-1.3-3.02-2.31-4-3"/>\r
<path class="naiwa-st" d="M146,225c0.66-1.36,3.48-6.85,9-8c1.1-0.23,4.38-0.91,6,1c1.5,1.78,1.03,5.16-1,7c-1.55,1.4-3.86,1.79-6,1"/>\r
<path class="naiwa-st" d="M158,226c-0.33,2-0.67,4-1,6"/>\r
<path class="naiwa-st" d="M160,217c3.56-9.59,7.26-16.99,10-22c5.77-10.55,8.07-11.95,15-25c3.8-7.15,4.36-9.07,8-15\r
	c3.43-5.58,5.19-7.54,8-13c2.35-4.58,3.92-7.63,5-12c0.73-2.98,2.87-12.13-1-22c-1.07-2.74-2.59-6.64-6-10c-0.28-0.27-1.87-1.82-4-4\r
	c-2.37-2.42-3.29-3.44-4-5c-0.72-1.57-0.93-3.01-1-4"/>\r
<path class="naiwa-st" d="M266,164c-0.59,3.76-1.01,8.13-1,13c0.01,7.04,0.92,13.13,2,18c-8.77,3.14-19.06,7.6-30,14\r
	c-9.08,5.31-16.73,10.86-23,16c-4.63-1.72-8.7-3.02-12-4c-5.92-1.76-9.07-2.37-12-1c-0.7,0.32-2.69,1.25-3,3\r
	c-0.25,1.4,0.71,2.63,1,3c2.34,3.01,6.7,2.27,7,4c0.15,0.85-0.78,1.78-1,2c-0.77,0.77-1.67,0.95-2,1c-2.36,0.56-8.49,2.08-14,4\r
	c-1.2,0.42-3.26,1.17-4,3c-0.07,0.18-0.62,1.58,0,3c0,0,0.51,1.17,2,2c2.23,1.24,7.91,0.9,15-1"/>\r
<path class="naiwa-st" d="M182,246c-3.43,0.11-6.24,1.71-7,4c-0.5,1.49-0.02,2.94,0,3c0.67,1.96,2.51,2.78,3,3c1.99,0.89,3.87,0.46,6,0\r
	c2.25-0.48,5.57-1.18,10-2"/>\r
<path class="naiwa-st" d="M186,256c-2.32,1.02-3.91,2.93-4,5c-0.01,0.3-0.09,1.91,1,3c1.22,1.22,3.18,1.07,4,1\r
	c5.72-0.46,30.49-10.39,32-11c5.68-0.02,14.45-0.33,25-2c20.8-3.28,47.58-7.51,63-28c7.54-10.02,10.57-21.55,12-27\r
	c2.64-10.07,3.1-18.83,3-25"/>\r
<path class="naiwa-st" d="M197,56c-0.46,0.23-5.16,2.64-6,8c-0.66,4.23,1.54,7.37,2,8"/>\r
<path class="naiwa-st" d="M211,63c-0.54-6.24,4.85-11.7,11-12c5.85-0.29,11.5,4.14,12,10c0.56,6.57-5.58,12.2-12,12\r
	C216.69,72.83,211.49,68.67,211,63z"/>\r
</svg>\r
`,hl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.naiwa-laugh-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="naiwa-laugh-st" d="M218.5,158.5c-3.51,3.61-20.91,20.86-40,17c-11.88-2.4-20.34-12.16-28-21c-8.96-10.33-10.88-17.65-21-27\r
	c-0.81-0.75-3.88-3.55-7-8c-2.96-4.21-5.79-8.36-6-14c-0.07-1.98,0.1-6.12,3-11c0.4-5.02,1.68-12.77,6-21\r
	c10.38-19.75,29.93-26.3,35-28c4.18-1.4,21.25-6.88,39-1c15.94,5.28,26,12,26,12c1.8,1.2,5.86,4.04,12,6c5.56,1.78,10.03,1.94,11,2\r
	c6.81,0.39,43.7,6.89,74,33c32.1,27.66,43.64,65.97,45,79c0.19,1.78,0.73,8.37,3,17c2.89,10.97,6.8,18.56,8,21\r
	c8.06,16.41,11.61,41.26,11,59c-0.71,20.91-7.34,35.55-17,57c-9.74,21.61-20.74,38.03-29,49c2.95,6.7,3.78,12.22,4,16\r
	c0.3,5.17-0.54,7.11,0,14c0.31,3.96,0.6,7.59,2,12c2.64,8.27,5.89,8.83,6,14c0.07,3.25-1.62,6.17-5,12c-4.01,6.92-6.01,10.37-10,12\r
	c-4.64,1.89-11.35,1.35-13-2c-0.36-0.73-0.67-1.98,0-4c-0.67,1.32-2.69,4.87-7,7c-0.67,0.33-5.48,2.63-11,1c-1.74-0.51-3.74-1.1-5-3\r
	c-2.2-3.3-0.2-7.59,0-8c-0.32,0.71-2.65,5.76-8,7c-3.47,0.8-8.46,0.07-10-3c-0.47-0.93-1.03-2.9,1-7c4.11-8.29,11.51-10.54,22-18\r
	c2.97-2.11,7.23-5.38,12-10c-4.26-2.61-10.43-6.81-17-13c-7.37-6.95-14.25-13.42-18-24c-1.48-4.16-3.6-12.14-2-23\r
	c-12.8,1.39-29.83,1.55-49-3c-7.33-1.74-20.68-5.02-36-14c-7.65-4.48-23.22-13.64-35-31c-4.58-6.75-5.03-9.5-11-17\r
	c-7.86-9.87-12.64-12.08-20-20c-0.76-0.82-11.08-12.08-17-26c-7.58-17.82-5.48-34.24-3.92-46.46c3.71-29.04,16.66-50.86,25.92-63.54\r
	"/>\r
<path class="naiwa-laugh-st" d="M171.5,320.5c-2.77,3.26-6.56,8.27-10,15c-3.12,6.11-4.78,9.36-5,14c-0.41,8.78,4.67,15.56,8,20\r
	c0.95,1.26,3.5,4.54,14,13c6.45,5.2,12.02,9.23,16,12c-18.99,6.9-31.83,10.27-41,12c-2.64,0.5-12.85,2.35-15,8\r
	c-0.32,0.85-1.33,3.49,0,5c0.89,1.01,2.39,1.03,3,1c-0.32,0.99-0.18,1.61,0,2c0.88,1.87,4.89,2.36,10,1c0.11,0.62,0.37,1.39,1,2\r
	c0.95,0.92,2.28,1,3,1c13.99,0.07,37-3,37-3c7.26-0.97,30.69-3.3,39-6c1.04-0.34,3.16-1.11,4-3c1.07-2.42-0.58-5.28-1-6\r
	c-2.52-4.35-6.18-3.97-10-7c-3.38-2.68-4.92-8.5-8-20c-1.44-5.37-2.4-9.88-3-13c4.12-0.82,9.34-2.28,15-5c4-1.92,7.33-4.04,10-6"/>\r
<path class="naiwa-laugh-st" d="M149.5,179.5c8.35,13.44,9.04,23.33,8,30c-0.89,5.75-3.04,8.93-3,17c0.01,2.81,0.29,5.75,3,18\r
	c1.12,5.07,2.45,10.77,4,17c5.33-1.33,10.67-2.67,16-4c1.93-0.51,3.93-0.19,5,1c1.6,1.79,1.21,5.67-2,8c-1.71,0.85-3.09,1.54-4,2\r
	c-2.24,1.13-2.74,1.39-3,2c-0.79,1.89,1.55,4.5,2,5c1.43,1.6,2.97,2.38,7,4c2.11,0.85,4.81,1.89,8,3c1.72,0.78,2.91,2.33,3,4\r
	c0.12,2.36-1.99,4.76-5,5c-3-0.67-6-1.33-9-2c4.33,2,8.67,4,13,6c0.3,0.24,0.66,0.56,1,1c0.58,0.75,0.86,1.5,1,2"/>\r
<path class="naiwa-laugh-st" d="M157.5,300.5c3.31,2.6,6.64,5.26,10,8c4.11,3.35,8.11,6.68,12,10c1.96,1.15,4.12,1,5,0c1.08-1.23,0.69-4.26-2-6\r
	c-5.15-3.33-8.94-7.11-9-7c-0.05,0.09,2.94,1.85,14,8c3.43,2.16,7.15,0.93,8-1c0.72-1.64-0.36-4.4-3-6c-5.33-2.33-10.67-4.67-16-7\r
	c5.33,2,10.67,4,16,6l0,0c0.5-0.14,1.25-0.42,2-1c0.44-0.34,0.76-0.7,1-1"/>\r
<path class="naiwa-laugh-st" d="M347.5,146.5c3.92,5.53,22.09,32.41,16,68c-1.12,6.53-6,30.6-26,49c-9.82,9.03-19.35,13.08-38,21\r
	c-16.94,7.19-31.64,11.45-42,14c-6.12,6.48-11.87,9.47-16,11c-3.78,1.4-6.66,1.74-12,4c-4.9,2.07-8.64,4.39-11,6\r
	c-2.43,1.55-5.23,0.66-6-1c-0.53-1.15,0.26-2.68,1-4c0.83-1.49,2.54-3.93,6-6c-4.67,1.33-9.33,2.67-14,4c-2.84,0.57-5.4-0.92-6-3\r
	c-0.57-1.98,0.83-3.79,1-4c4-1.33,8-2.67,12-4c-4,1-8,2-12,3c-2.66,0.47-5.17-0.9-6-3c-1.03-2.61,0.63-6.11,4-7c3.67-1,7.33-2,11-3\r
	c-3.67,0.33-7.33,0.67-11,1c-2.08-0.3-3.72-1.94-4-4c-0.29-2.13,0.96-4.22,3-5c1.57-0.51,3.99-1.25,7-2c4.92-1.23,7.04-1.39,10-3\r
	c0.92-0.5,5.4-2.94,5-5c-0.09-0.47-0.47-1.04-5-3c-2.01-0.87-3.72-1.53-5-2c-2.01-1.31-2.83-3.84-2-6c0.9-2.32,3.49-3.66,6-3\r
	c16.69,3.58,22.48,5.22,24,6c0.23,0.12,1.37,0.73,3,1c0.46,0.08,1.77,0.32,3,0c2.25-0.58,3.56-2.41,4-3c1.48-2,6.99-8,18-20\r
	c5.16-5.62,9.86-8.82,16-13c7.59-5.17,14.59-8.66,20-11c-3.27-2.84-8.08-7.71-12-15c-4.1-7.62-5.48-14.63-6-19"/>\r
<path class="naiwa-laugh-st" d="M118.5,112.5c1.13-0.78,2.82-1.69,5-2c6.58-0.95,11.47,4.4,12,5"/>\r
<path class="naiwa-laugh-st" d="M171.5,108.5c1.8-2.47,4.99-6.12,10-9c8.96-5.15,17.8-4.42,21-4"/>\r
<path class="naiwa-laugh-st" d="M141.5,137.5c1.35,0.43,3.44,0.94,6,1c3.28,0.07,5.78-0.63,7-1c23.42-7.05,36-15,36-15c3.75-2.37,5.24-3.59,7-3\r
	c4.92,1.66,5.32,15.23,3,25c-1.16,4.88-2.77,11.66-9,17c-1.49,1.27-8.48,7.26-17,6c-6.97-1.03-11.16-6.35-18-15\r
	c-4.26-5.39-7.14-10.37-9-14"/>\r
<path class="naiwa-laugh-st" d="M152.5,138.5c0.13,0.32,0.91,2.16,3,3c1.93,0.77,3.63,0.14,4,0c0.8,0.18,2.25,0.39,4,0c2.01-0.45,3.36-1.45,4-2\r
	c0.37,0.14,2.07,0.77,4,0c2.09-0.84,2.87-2.68,3-3c0.26,0.19,2.45,1.76,5,1c2.38-0.71,4.08-3.17,4-6c0.2,0.24,1.9,2.24,4,2\r
	c2.33-0.26,4.53-3.22,4-7c1,0.3,1.65,0.14,2,0c1.73-0.69,2.71-3.53,2-7"/>\r
<path class="naiwa-laugh-st" d="M170.5,144.5c-0.52,0.71-2.35,3.37-2,7c0.11,1.1,0.35,3.66,2,5c4.04,3.28,15.81-1.27,20-8\r
	c1.52-2.43,3.43-4.6,5-7c0.43-0.66,1.31-2.03,3-3c1.15-0.66,2.25-0.9,3-1"/>\r
<path class="naiwa-laugh-st" d="M168.5,148.5c-1.61-0.15-3.18,0.01-4,1c-2.06,2.51,0.88,10.15,6,13c7.37,4.11,18.36-2.19,24-8\r
	c2.55-2.62,4.1-5.25,5-7"/>\r
<path class="naiwa-laugh-st" d="M186.5,153.5c1.33,1.67,2.67,3.33,4,5"/>\r
<path class="naiwa-laugh-st" d="M192.5,145.5c1.33,0.67,2.67,1.33,4,2"/>\r
<path class="naiwa-laugh-st" d="M154.5,221.5c13.62-11.58,26.66-17.18,35-20c2.23-0.76,48.47-15.59,91,10c6.65,4,11.69,8.07,15,11"/>\r
<path class="naiwa-laugh-st" d="M325.5,273.5c-5.47,8.31-23.76,33.82-59,46c-39.09,13.52-72.39,1.43-81-2"/>\r
</svg>\r
`,gl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.naruto-logo-st{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-linecap:round;stroke-linejoin:round;}\r
</style>\r
<path class="naruto-logo-st" d="M83.4,273.09c-1.26,0.22-0.81,9.4-2.24,14.52c-0.45,1.61-0.87,3.27-1.98,4.69c-0.96,1.22-1.57,2.54-1.92,4.07\r
	c-0.64,2.79-2.23,4.96-4.94,6.1c-3.18,1.34-6.46,2.32-9.91,2.7c-2.62,0.29-4.63-0.69-6.07-2.82c-2.04-3.02-3.74-6.24-5.46-9.44\r
	c-1.28-2.39-0.77-4.91-0.3-7.39c1.08-5.7,2.76-11.25,4.13-16.87c1.43-5.86,3.04-11.68,4.16-17.62c0.49-2.62,0.43-5.27,0.32-7.9\r
	c-0.18-4.4,0.57-8.66,1.52-12.93c0.99-4.49,1.46-9.06,1.84-13.64c0.13-1.6,0.62-3.04,1.66-4.28c1.69-2.03,3.35-4.08,5.03-6.11\r
	c1.32-1.61,3.08-2.02,5.06-1.86c1.83,0.14,3.67,0.28,5.5,0.32c1.33,0.02,2.64-0.18,3.58-1.33c2.3-2.8,5.16-3.03,8.34-1.78\r
	c0.11,0.04,0.22,0.09,0.33,0.14c6.58,2.68,5.98,3.7,7.32,8.87c0.31,1.21,0.62,2.39,1.35,3.42c1.47,2.1,1.81,4.28,0.58,6.65\r
	c-0.79,1.52-1.38,3.14-2.12,4.7c-0.4,0.85-0.62,1.69-0.68,2.53c-0.03,0.45-0.05,1.47,0.68,3.49c0.14,0.4,1.55,4.26,2.34,4.08\r
	c0.49-0.11,0.4-1.67,0.55-3.72c0.3-3.92,0.87-4.13,1.8-8.43c0.74-3.45,0.8-6.98,1.13-10.48c0.17-1.74,0.64-3.27,1.75-4.62\r
	c3.75-4.58,7.07-9.49,10.98-13.95c1.15-1.31,2.48-2.17,4.31-2.27c2.83-0.15,4.68,1.27,6.1,3.51c2.69,4.24,5,8.65,6.37,13.51\r
	c0.29,1.04,0.95,1.93,1.19,3c0.42,1.86-0.1,3.66-0.3,5.47c-0.53,4.8-1.06,9.6-1.65,14.4c-0.27,2.18-0.16,4.4-0.63,6.56\r
	c-0.12,0.56,0.05,0.92,0.64,1.08c0.54,0.15,0.96,0.22,1.29-0.41c2.36-4.5,4.72-9.01,6.04-13.94c0.54-2,0.39-4.13,0.4-6.2\r
	c0-1.08-0.07-2.16-0.16-3.23c-0.2-2.54,0.87-4.43,2.96-5.75c6.6-4.17,12.97-8.64,18.82-13.84c1.7-1.51,3.55-2.73,6.02-2.49\r
	c0.85,0.08,1.67,0.23,2.43,0.6c2.69,1.32,5.38,2.65,8.03,4.04c1.91,1,2.79,2.68,2.82,4.81c0.01,1.04,0.05,2.08-0.14,3.11\r
	c-0.22,1.22,0.09,2.09,1.3,2.74c2.41,1.28,3.85,3.27,4.03,6.1c0.11,1.79,0.4,3.57,0.61,5.36c0.05,0.4,0.11,0.79,0.18,1.18\r
	c0.06,0.33-0.01,0.81,0.52,0.78c0.51-0.03,0.6-0.43,0.61-0.87c0.02-1.12-0.31-2.21-0.11-3.34c0.95-5.63,3.37-10.61,6.37-15.41\r
	c1.81-2.89,4.16-4.99,7.24-6.41c1.88-0.87,3.54-2.17,5.47-2.99c0.75-0.32,1.51-0.62,2.3-0.62c3.74,0.01,7.49-0.36,11.19,0.77\r
	c4.87,1.49,9.93,2.04,14.96,2.74c2.08,0.29,3.88,0.98,5.23,2.6c1.52,1.84,3.4,2.99,5.77,3.33c3.14,0.45,5.01,2.63,6.71,5.01\r
	c1.86,2.6,3.77,5.17,5.46,7.89c0.18,0.28,0.28,0.75,0.71,0.72c0.43-0.04,0.47-0.5,0.59-0.82c1.03-2.67,2.64-5.02,4.13-7.43\r
	c1.26-2.04,3.06-3.19,5.58-3.05c1.91,0.1,3.84,0.03,5.76,0.02c2.41-0.01,4.16,0.93,5.32,3.16c1.24,2.37,2.3,4.84,3.91,7.01\r
	c1.19,1.6,2.3,3.27,3.52,4.85c1.65,2.14,2,4.55,2.15,7.19c0.24,4.06-1.28,7.77-1.77,11.68c-0.6,4.8-1.44,9.57-1.22,14.43\r
	c0.11,2.42,0.42,4.82,0.77,7.25c1.12-1.79,2.01-3.65,2.58-5.62c2.08-7.15,4.86-14.05,7.43-21.02c1.4-3.78,2.02-7.72,2.49-11.69\r
	c0.45-3.83,1.46-7.53,2.74-11.15c0.51-1.44,1.47-2.58,2.65-3.49c3.41-2.65,6.79-5.33,10.55-7.5c2-1.16,4.09-1.52,6.34-1.26\r
	c1.99,0.23,3.37,1.35,4.51,2.88c1.62,2.18,3.02,4.5,3.89,7.32c0.85-1.18,1.58-2.16,2.28-3.16c1.47-2.09,3.41-3.13,6.02-3.03\r
	c2.59,0.1,5.18,0.12,7.78,0.39c3.15,0.32,6.3,0.19,9.43-0.38c4.52-0.83,9.09-0.4,13.64-0.54c3.3-0.1,6.53,0.24,9.75,0.99\r
	c2.59,0.6,4.29,1.92,4.89,4.62c0.56,2.53,1.08,5.09,2.24,7.44c0.12,0.25,0.16,0.6,0.46,0.65c0.42,0.07,0.48-0.36,0.62-0.62\r
	c1.15-2.09,2.36-4.09,4.63-5.18c5.18-2.48,10.57-3.23,16.21-2.09c0.39,0.08,0.8,0.16,1.14,0.35c1.09,0.58,2.11,0.39,3.22,0\r
	c3.05-1.09,6.14-2.23,9.46-1.68c2.68,0.45,5.29,1.24,7.97,1.71c3.19,0.56,5.4,2.36,7.14,4.98c1.53,2.3,3.23,4.5,5.34,6.3\r
	c2.03,1.74,3.05,3.93,3.58,6.47c0.42,2.04,1,4.02,1.9,5.92c0.72,1.52,0.7,3.22,0.69,4.83c-0.05,4.46,0.63,8.85,1.15,13.25\r
	c0.75,6.4-1.17,12.02-4.83,17.12c-1.89,2.63-3.92,5.16-5.67,7.88c-2.6,4.03-5.85,7.48-9.48,10.6c-4.43,3.8-8.85,7.61-13.21,11.49\r
	c-2.35,2.08-5.12,3.04-8.13,3.48c-5.31,0.79-10.65,1.01-16.01,1.1c-3.44,0.06-6.13-1.13-8.44-3.53c-3.29-3.41-6.2-7.11-8.52-11.25\r
	c-1.29-2.31-1.99-4.78-1.98-7.44c0.01-3.16-0.19-6.33,0.02-9.48c0.05-0.7,0-1.4-0.31-2.25c-0.5-1.4-1.79-3.12-2.62-2.94\r
	c-1.34,0.3-0.63,5.37-1.72,15.87c-0.31,2.94-0.44,4.42-0.83,6.05c-1.14,4.86-3.39,9.28-6.5,13.37c-2.61,3.42-6.34,4.82-10.53,4.76\r
	c-2-0.03-3.7-1.25-5.21-2.51c-2.49-2.06-4.29-4.72-6.19-7.3c-0.51-0.69-0.68-1.51-0.7-2.38c-0.15-8.24,0.23-16.46,0.92-24.67\r
	c0.33-3.9,0.54-7.81,0.75-11.72c0.3-5.67,0.56-11.34,0.8-17.01c0.08-1.78,0.03-1.8-1.77-1.74c-3.14,0.11-6.24,0.06-9.11-1.51\r
	c-0.79-0.43-0.94,0.23-1.11,0.78c-1.96,6.42-4.05,12.79-5.62,19.33c-0.94,3.92-2.07,7.8-3.72,11.51c-1.04,2.34-0.6,4.8-0.57,7.22\r
	c0,0.52,0.13,1.04,0.1,1.55c-0.14,2.53,0.25,4.91,1.52,7.16c1.48,2.62,1.09,5.04-0.81,7.42c-2.73,3.42-5.45,6.8-9.12,9.28\r
	c-1.68,1.13-3.48,1.96-5.38,2.61c-1.38,0.48-2.71,0.03-3.98-0.45c-4.26-1.59-8.34-3.51-11.4-7.04c-0.4-0.47-0.77-0.55-1.16-0.02\r
	c-0.55,0.75-1.28,1.32-1.96,1.93c-0.6,0.54-0.59,0.93,0.14,1.37c1.78,1.08,3.54,2.17,4.82,3.89c0.71,0.95,1.02,1.89,0.85,3.11\r
	c-0.29,2.05-0.43,4.13-0.56,6.2c-0.19,3.11-2.26,5.39-5.38,5.5c-3.8,0.13-7.6,0.08-11.4,0.05c-1.48-0.01-2.74-0.85-4.03-1.45\r
	c-6.74-3.14-13.45-6.33-20.2-9.45c-5.8-2.69-11.72-5.13-17.59-7.65c-6.43-2.76-12.01-6.99-17.84-10.77\r
	c-1.7-1.11-1.68-1.14-2.45,0.79c-1.07,2.68-2.4,5.23-3.88,7.71c-1.23,2.05-2.95,2.96-5.4,3.15c-3.66,0.28-7.17,0.1-10.59-1.29\r
	c-1.31-0.53-2.57-1.12-3.61-2.09c-1.94-1.8-3.71-3.75-5.2-5.95c-0.16-0.23-0.3-0.47-0.43-0.72c-0.77-1.52-0.77-1.52-1.84-0.21\r
	c-3.32,4.06-6.91,7.87-10.73,11.46c-2.23,2.09-4.57,2.42-6.89,1.05c-1.28-0.76-2.15-1.9-2.73-3.26c-1.12-2.65-2.23-5.3-3.3-7.97\r
	c-0.45-1.12-0.58-2.32-0.57-3.53c0.02-4.68,0.02-9.36,0.02-14.04c0-1.43-0.1-1.53-1.41-1.06c-2.48,0.9-4.93,1.87-7.41,2.77\r
	c-0.79,0.29-0.94,0.92-1.07,1.58c-0.78,3.92-1.59,7.83-2.84,11.63c-1.53,4.68-3.62,9.02-6.97,12.73c-2.78,3.08-5.91,4.12-9.99,3.02\r
	c-5.05-1.36-8.66-4.47-11.53-8.61c-0.51-0.74-0.95-0.82-1.67-0.58c-4.33,1.43-8.76,2.56-12.92,4.44c-3.43,1.55-6.11,0.39-7.93-2.24\r
	c-2.34-3.37-4.45-6.88-6.48-10.42c-3.34-5.82-3.02-4.92-4.7-8.31C84.51,274.63,83.94,272.99,83.4,273.09z M257.12,240.29\r
	c-0.25-0.03-0.45,0.46-0.58,0.61c-3.99,4.7-8.98,8.13-14.25,11.21c-3,1.76-6.05,3.43-9.15,5c-0.57,0.29-0.86,0.5-0.89,0.75\r
	c-0.06,0.43,0.47,0.83,0.65,0.96c3.93,2.96,7.73,6.07,11.76,8.88c2.56,1.79,12.56,9.25,14.41,10.56c0.17,0.12,0.61,0.43,0.85,0.28\r
	c0.22-0.14,0.15-0.62,0.12-0.78c-0.36-2.01-0.5-4.04-0.74-6.06c-0.3-2.59-1.01-7.81-1.35-18.52\r
	C257.73,245.8,257.95,240.38,257.12,240.29z M383.56,232.34c-0.59-0.62-2.95,1.14-4.79,1.37c-0.14,0.02-0.56,0.06-0.85,0.37\r
	c-0.21,0.23-0.3,0.56-0.3,1c0,2.08-0.03,4.16-0.04,6.24c0,0.27,0.05,0.77,0.29,0.85c0.26,0.09,0.61-0.34,0.79-0.56\r
	c2.11-2.6,3.56-5.69,3.56-5.69C383.53,233.09,383.81,232.61,383.56,232.34z"/>\r
<path class="naruto-logo-st" d="M66,216c0.49-1,1.16-1.83,2.5-3.5c1.86-2.32,2.79-3.48,4-4c1.55-0.67,1.95,0.05,6,0c3.03-0.04,4.58-0.07,6-1\r
	c1.84-1.2,1.55-2.52,3-3c2.06-0.68,4.69,1.31,6,3c0.87,1.12,1.25,2.42,2,5c0.69,2.36,1.03,3.55,1,5c-0.06,2.61-1.19,3.48-2,6\r
	c-1.18,3.66-0.45,6.95,0,9c1.25,5.68,3.85,4.83,5,10c0.96,4.32-0.37,7.04,2,11c0.51,0.85,1.27,2.12,2,2c1.69-0.27,1.87-7.7,2-13\r
	c0.17-6.97-0.42-6.65,0-11c0.38-3.89,0.88-4.52,2-12c0.92-6.14,0.55-5.53,1-7c1.03-3.35,2.05-3.57,8-12c2.39-3.38,3.48-5.13,5-5\r
	c1.33,0.11,2.22,1.58,3,3c2.92,5.34,4.39,8.01,5,13c0.61,4.95-0.04,7.18-1,16c-1.45,13.34-0.53,13.51-2,23c-0.82,5.3-0.77,3.12-3,15\r
	c-0.65,3.47-0.58,2.4-2.59,11.43c-0.85,3.83-1.27,5.74-1.41,6.57c-0.59,3.52-0.36,4.01-1,5c-1.01,1.56-2.29,1.96-8,4\r
	c-6.38,2.28-8.16,2.98-10,2c-1.07-0.57-1.63-1.43-2-2c-5.69-8.85-7.9-13.53-10-18c-1.12-2.38-2.79-5.84-5-10\r
	c-0.33-0.64-0.71-0.89-1-1c-0.47-0.18-0.83-0.04-2,0c-0.42,0.01-0.77,0.01-1,0c-1.32,11.27-2.49,19.55-3,22\r
	c-0.35,1.69-0.83,2.67-1,3c-0.76,1.49-1.33,1.72-2,3c-0.98,1.88-0.32,2.51-1,4c-0.98,2.17-3.38,3.04-6,4c-2.79,1.02-4.29,1.57-6,1\r
	c-1.94-0.64-2.96-2.43-5-6c-1.58-2.78-1.9-4.41-2-5c-0.3-1.81-0.11-3.26,0-4c1.05-7.03,5-19,5-19c1.88-5.69,3.29-9.98,4-16\r
	c0.81-6.86-0.25-7.81,1-15c1.13-6.46,2.21-6.95,2-11C65.34,221.38,64.56,218.92,66,216z"/>\r
<path class="naruto-logo-st" d="M122.5,283.5c0.9-4.01,4.72-4.45,5-8c0.05-0.66-0.06-0.96,0-3c0.05-1.89,0.16-2.27,0-3\r
	c-0.36-1.61-1.49-2.31-2-3c-1.91-2.62,2.35-8.94,5-13c4.67-7.16,7.46-11.44,10-17c3.03-6.63,3.73-10.78,4-13\r
	c0.44-3.68,0.26-6.81,0-9c11.61-7.03,16.65-11.28,19-14c0.67-0.77,2.59-3.12,5-3c1.11,0.06,1.81,0.61,4,2c2,1.27,3.72,2.28,5,3\r
	c0,0.46,0,0.92,0,1.38c0,2.21,0,4.41,0,6.62c0.39,0.68,1.3,2.03,3,3c1.18,0.68,2.29,0.91,3,1c0.05,0.82,0.11,1.64,0.16,2.46\r
	c0.61,9.51,1.23,19.03,1.84,28.54c0.79,0.35,2.53,1.27,3,3c0.13,0.48,0.13,0.91,0,2c-0.31,2.53-0.46,3.8-1,5c-1.13,2.52-2.6,2.7-3,5\r
	c-0.15,0.86-0.06,1.52,0,2c0.42,3.4,0.81,10.07,0,16c-0.16,1.15-0.44,2.89-1,5c-2.59,3-4.94,5.68-7,8c-4.44,5.01-5.58,6.19-7,6\r
	c-3.32-0.44-4.79-7.92-5-9c-0.68-3.48-0.27-5.66,0-10c0.19-3.06,0.33-7.51,0-13c-5.67,2-11.33,4-17,6c-0.11,0.7-2.16,13.06-5,20\r
	c0,0-1.1,2.69-4,6c-0.6,0.69-1.55,1.68-3,2c-0.25,0.05-0.65,0.12-2,0c-2.13-0.19-3.45-0.31-5-1c-1.13-0.5-1.84-1.07-3-2\r
	c-1.7-1.36-2.55-2.05-3-3c-0.66-1.4-0.16-2.22,0-6C122.64,284.13,122.25,284.61,122.5,283.5z"/>\r
<path class="naruto-logo-st" d="M158.5,245.5c0.37-0.93,3.37-8.39,5-8c1.44,0.34,1.08,6.66,1,8C162.5,245.5,160.5,245.5,158.5,245.5z"/>\r
<path class="naruto-logo-st" d="M193.5,265.5v9l-4,3v10c0.77,1.23,2.31,3.33,5,5c1.93,1.2,3.75,1.74,5,2h8c1.31-1.92,2.7-4.26,4-7\r
	c1.38-2.93,2.33-5.65,3-8c6.15,4.1,12.3,8.2,18.44,12.3c1.7,1.13,3.51,2.08,5.4,2.84c5.27,2.13,10.66,4.41,16.15,6.86\r
	c8.09,3.61,15.76,7.3,23,11h13v-7.26c0-1.07-0.58-2.04-1.52-2.55c-4.01-2.18-9.37-5.24-15.48-9.18c-13.12-8.45-10.92-8.81-21-15\r
	c-7.3-4.49-12.87-8.99-24-18c-0.77-0.63-1.98-1.63-2-3c-0.07-4.42,12.22-5.46,22-14c3.5-3.06,5.93-6.42,7.61-9.35\r
	c0.93-1.63,1.39-3.48,1.39-5.36v-7.35c0-1.25-0.41-2.46-1.16-3.46c-1.64-2.18-2.91-4.06-3.84-5.49c-2.33-3.61-2.98-5.15-5-6\r
	c-1.98-0.84-2.89,0.01-5-1c-2.28-1.09-2.14-2.5-4-4c-2.82-2.27-4.99-0.52-12-2c-3.74-0.79-3.69-1.36-7-2c-4.11-0.79-7.65-0.43-10,0\r
	c-1.99,0.78-5.03,2.25-8,5c-6.17,5.7-7.59,12.8-8,15c-0.42,2.27-0.39,3.68,0,11c0.25,4.66,0.58,10.4,1,17c0.04,1.09-0.08,2.64-1,4\r
	c-1.22,1.82-2.66,1.55-4,3c-2.1,2.28-2.21,6.9,0,10C190.81,264.34,192.59,265.16,193.5,265.5z"/>\r
<path class="naruto-logo-st" d="M215.5,231.5c1.7-0.31,4.16-0.88,7-2c3.32-1.31,5.81-2.29,6-4c0.18-1.63-1.81-3.11-3-4\r
	c-1.77-1.32-3.49-1.68-5-2c-1.96-0.41-3.13-0.66-4,0c-0.89,0.68-0.96,1.93-1,4C215.45,225.68,215.43,228.38,215.5,231.5z"/>\r
<path class="naruto-logo-st" d="M269.5,208.5c2.67,0,5.33,0,8,0c1.11,2.61,2.7,5.73,5,9c1.69,2.4,3.42,4.38,5,6c-1.5,7.14-2.42,13.27-3,18\r
	c-0.62,5.01-1.47,13.36,1,23c0.75,2.94,1.27,3.87,2,4c3.12,0.57,8.24-13.59,12-24c2.96-8.2,4.56-12.25,5-16\r
	c0.51-4.36,1.48-8.65,2-13c0.18-1.48,0.29-2.62,1-4c0.81-1.57,1.93-2.57,8-6c5.52-3.11,6.74-3.5,8-3c1.21,0.48,2.02,1.61,3,3\r
	c1.09,1.54,1.68,3.01,2,4c-0.33,9-0.67,18-1,27c-1.18,2.17-2.82,5.58-4,10c-1.06,3.96-1.01,5.91-2,10c-1.14,4.71-2.73,8.44-4,11\r
	c0,4,0,8,0,12c0.72,1.76,1.45,3.09,2,4c0.61,1.01,0.91,1.35,1,2c0.23,1.62-1.11,3.1-2,4c-5.33,5.38-7.99,8.07-12,8\r
	c-4.64-0.08-9.74-3.64-11-6c-0.18-0.34-0.77-1.57-2-2c-0.88-0.31-1.71-0.08-2,0c-3.4,0.95-4.19,6.49-7,7c-2.17,0.4-2.87-2.71-9-6\r
	c-2.11-1.13-2.34-0.93-4-2c-0.92-0.59-4.04-2.64-6-6c-1.36-2.33-1.6-4.34-2-9c-0.38-4.41-0.72-9.09-1-14\r
	c-0.33-11.33-0.67-22.67-1-34c0.61-2.96,1.75-6.85,4-11C266.8,212.11,268.2,210.12,269.5,208.5z"/>\r
<path class="naruto-logo-st" d="M347.5,231.5c-0.29,7.94-0.62,15.94-1,24c-0.58,12.48-1.25,24.81-2,37c1.94,2.24,3.7,3.89,5,5\r
	c1.71,1.47,2.35,1.8,3,2c2.72,0.84,5.31-0.61,6-1c2.57-1.44,3.77-3.7,5-6c1.28-2.39,1.84-4.41,2-5c2.02-7.42,2.36-15.3,3-23\r
	c0.18-2.22,0.5-5.69,1-10c1-1.33,2-2.67,3-4c0.33-6.67,0.67-13.33,1-20c1.21-0.07,2.98-0.3,5-1c1.87-0.65,2.99-1.04,4-2\r
	c3.24-3.08,2.17-9.03,2-10c-0.2-1.14-0.35-1.13-1-4c-0.89-3.89-0.72-4.33-1-5c-1.74-4.19-14.73-2.46-29-2c-6.36,0.2-11.57,0.11-15,0\r
	c-2.33,4-4.67,8-7,12c-0.52,3.87-0.3,6.93,0,9c0.23,1.6,0.47,2.33,1,3c1.44,1.82,4.06,1.93,7,2\r
	C341.37,232.55,344.16,232.42,347.5,231.5z"/>\r
<path class="naruto-logo-st" d="M379.5,263.5c-1-0.67-2-1.33-3-2c0-3,0-6,0-9c3.67-6,7.33-12,11-18c0.23-2.46,0.78-5.57,2-9\r
	c1.09-3.05,2.24-5,4-8c1.67-2.84,2.34-3.5,3-4c1.86-1.41,3.85-1.69,6-2c2.61-0.37,4.67-0.15,6,0c3.26,0.37,3.01,0.92,5,1\r
	c4,0.16,4.83-2.07,9-2c1.2,0.02,2.46,0.35,5,1c3.2,0.82,4.8,1.24,6,2c2.38,1.51,2.16,2.82,6,7c1.93,2.1,1.97,1.76,3,3\r
	c1.14,1.38,2.79,3.86,4,10c0.44,2.22,0.57,3.65,1,13c0.41,8.86,0.39,9.62,0,11c-0.52,1.88-1.03,2.46-6,10c-5.21,7.91-4.98,7.77-6,9\r
	c-2.08,2.51-2.97,2.99-10,9c-9.07,7.76-8.91,8.09-11,9c-3.53,1.54-7.02,1.69-14,2c-5.9,0.26-7.7-0.34-9-1c-2.29-1.17-3.59-2.84-6-6\r
	c-1.42-1.87-3.25-4.53-5-8C380.17,275.5,379.83,269.5,379.5,263.5z"/>\r
<path class="naruto-logo-st" d="M410.5,237.5c-1.8,0.72-4.05,2.56-7,13c0,0-4.37,15.44-1,22c0.79,1.53,1.68,1.89,2,2c1.67,0.55,3.52-0.8,5-2\r
	c5.84-4.72,9.58-9.96,11-12c3.39-4.89,3.83-6.35,4-7c0.62-2.35,0.41-4.56,0-9c-0.44-4.72-0.69-7.1-2-8c-1.21-0.83-3.14-0.55-7,0\r
	C412.97,236.86,411.6,237.06,410.5,237.5z"/>\r
<path class="naruto-logo-st" d="M134.5,303.5c-5.21,4.8-7.12,11.07-5,15c1.46,2.71,4.28,4.17,7,5c23.75,7.28,69-8,69-8\r
	c9.32-3.15,22.05-7.73,37-14"/>\r
<path class="naruto-logo-st" d="M148.5,287.5c1.85-1.32,3.85-2.66,6-4c2.42-1.5,4.77-2.83,7-4"/>\r
<path class="naruto-logo-st" d="M161.5,287.5c-2.44,1.24-6.19,3.64-9,8c-1.39,2.15-4.74,7.36-3,12c1.39,3.71,5.4,5.34,7,6\r
	c13.92,5.69,74.68-11.86,82-14"/>\r
<path class="naruto-logo-st" d="M127.5,302.5c-1.66,1.47-4.16,4.08-6,8c-1.12,2.38-2.63,5.61-2,9c0.94,5.06,6.17,7.98,8,9\r
	c21.18,11.83,102.32-13.66,112-17c0,0,3.1-1.07,5,0c0.21,0.12,0.71,0.41,1,1c0.41,0.84,0.1,1.72,0,2c-0.44,1.23-1.65,1.82-2,2\r
	c-2.45,1.26-62.15,28.5-110,31c-2.74,0.14-8.9,0.8-17,0c-1.78-0.17-4.22-0.42-7-1c-5.79-1.22-16.95-3.57-20-10\r
	c-4.34-9.15,9.12-23.67,15-30c5.14-5.54,10.2-9.42,14-12"/>\r
<path class="naruto-logo-st" d="M238.5,263.5c3.67,0.49,7.68,0.86,12,1c2.8,0.09,5.47,0.08,8,0"/>\r
<path class="naruto-logo-st" d="M248.5,270.5c3.67,0,7.33,0,11,0"/>\r
<path class="naruto-logo-st" d="M321.5,274.5c7-3.67,14-7.33,21-11"/>\r
<path class="naruto-logo-st" d="M323.5,283.5c6-3,12-6,18-9"/>\r
<path class="naruto-logo-st" d="M323.5,263.5c3.2-1.77,6.55-3.76,10-6c3.62-2.35,6.95-4.7,10-7"/>\r
<path class="naruto-logo-st" d="M326.5,252.5c5.67-3.67,11.33-7.33,17-11"/>\r
<path class="naruto-logo-st" d="M290.5,221.5c1.67-0.71,3.68-1.43,6-2c2.22-0.55,4.25-0.85,6-1"/>\r
<path class="naruto-logo-st" d="M291.5,227.5c1.33-0.69,3.01-1.41,5-2c1.87-0.55,3.57-0.84,5-1"/>\r
<path class="naruto-logo-st" d="M284.5,212.5c4.08-1.71,8.41-3.39,13-5c5.57-1.96,10.93-3.61,16-5"/>\r
<path class="naruto-logo-st" d="M325.5,198.5c12.09-4.15,22.43-6.55,30-8c9.68-1.85,15.61-2.3,25-3c5.53-0.41,18.94-1.26,28,4\r
	c1.26,0.73,2.99,1.9,4,4c2.4,4.98-1.31,10.93-2,12"/>\r
<path class="naruto-logo-st" d="M432.5,208.5c1.69-1.63,4.05-4.26,6-8c1.64-3.14,4.1-7.84,3-13c-0.91-4.27-3.85-6.96-5-8\r
	c-11.91-10.85-50.66-4-66-1c-23.27,4.55-39.98,9.49-45,11c-18.8,5.66-34.14,11.52-45,16"/>\r
</svg>\r
`,_l=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.naruto_text-st{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\r
</style>\r
<path class="naruto_text-st" d="M66,216c0.49-1,1.16-1.83,2.5-3.5c1.86-2.32,2.79-3.48,4-4c1.55-0.67,1.95,0.05,6,0c3.03-0.04,4.58-0.07,6-1\r
	c1.84-1.2,1.55-2.52,3-3c2.06-0.68,4.69,1.31,6,3c0.87,1.12,1.25,2.42,2,5c0.69,2.36,1.03,3.55,1,5c-0.06,2.61-1.19,3.48-2,6\r
	c-1.18,3.66-0.45,6.95,0,9c1.25,5.68,3.85,4.83,5,10c0.96,4.32-0.37,7.04,2,11c0.51,0.85,1.27,2.12,2,2c1.69-0.27,1.87-7.7,2-13\r
	c0.17-6.97-0.42-6.65,0-11c0.38-3.89,0.88-4.52,2-12c0.92-6.14,0.55-5.53,1-7c1.03-3.35,2.05-3.57,8-12c2.39-3.38,3.48-5.13,5-5\r
	c1.33,0.11,2.22,1.58,3,3c2.92,5.34,4.39,8.01,5,13c0.61,4.95-0.04,7.18-1,16c-1.45,13.34-0.53,13.51-2,23c-0.82,5.3-0.77,3.12-3,15\r
	c-0.65,3.47-0.58,2.4-2.59,11.43c-0.85,3.83-1.27,5.74-1.41,6.57c-0.59,3.52-0.36,4.01-1,5c-1.01,1.56-2.29,1.96-8,4\r
	c-6.38,2.28-8.16,2.98-10,2c-1.07-0.57-1.63-1.43-2-2c-5.69-8.85-7.9-13.53-10-18c-1.12-2.38-2.79-5.84-5-10\r
	c-0.33-0.64-0.71-0.89-1-1c-0.47-0.18-0.83-0.04-2,0c-0.42,0.01-0.77,0.01-1,0c-1.32,11.27-2.49,19.55-3,22\r
	c-0.35,1.69-0.83,2.67-1,3c-0.76,1.49-1.33,1.72-2,3c-0.98,1.88-0.32,2.51-1,4c-0.98,2.17-3.38,3.04-6,4c-2.79,1.02-4.29,1.57-6,1\r
	c-1.94-0.64-2.96-2.43-5-6c-1.58-2.78-1.9-4.41-2-5c-0.3-1.81-0.11-3.26,0-4c1.05-7.03,5-19,5-19c1.88-5.69,3.29-9.98,4-16\r
	c0.81-6.86-0.25-7.81,1-15c1.13-6.46,2.21-6.95,2-11C65.34,221.38,64.56,218.92,66,216z"/>\r
<path class="naruto_text-st" d="M122.5,283.5c0.9-4.01,4.72-4.45,5-8c0.05-0.66-0.06-0.96,0-3c0.05-1.89,0.16-2.27,0-3\r
	c-0.36-1.61-1.49-2.31-2-3c-1.91-2.62,2.35-8.94,5-13c4.67-7.16,7.46-11.44,10-17c3.03-6.63,3.73-10.78,4-13\r
	c0.44-3.68,0.26-6.81,0-9c11.61-7.03,16.65-11.28,19-14c0.67-0.77,2.59-3.12,5-3c1.11,0.06,1.81,0.61,4,2c2,1.27,3.72,2.28,5,3\r
	c0,0.46,0,0.92,0,1.38c0,2.21,0,4.41,0,6.62c0.39,0.68,1.3,2.03,3,3c1.18,0.68,2.29,0.91,3,1c0.05,0.82,0.11,1.64,0.16,2.46\r
	c0.61,9.51,1.23,19.03,1.84,28.54c0.79,0.35,2.53,1.27,3,3c0.13,0.48,0.13,0.91,0,2c-0.31,2.53-0.46,3.8-1,5c-1.13,2.52-2.6,2.7-3,5\r
	c-0.15,0.86-0.06,1.52,0,2c0.42,3.4,0.81,10.07,0,16c-0.16,1.15-0.44,2.89-1,5c-2.59,3-4.94,5.68-7,8c-4.44,5.01-5.58,6.19-7,6\r
	c-3.32-0.44-4.79-7.92-5-9c-0.68-3.48-0.27-5.66,0-10c0.19-3.06,0.33-7.51,0-13c-5.67,2-11.33,4-17,6c-0.11,0.7-2.16,13.06-5,20\r
	c0,0-1.1,2.69-4,6c-0.6,0.69-1.55,1.68-3,2c-0.25,0.05-0.65,0.12-2,0c-2.13-0.19-3.45-0.31-5-1c-1.13-0.5-1.84-1.07-3-2\r
	c-1.7-1.36-2.55-2.05-3-3c-0.66-1.4-0.16-2.22,0-6C122.64,284.13,122.25,284.61,122.5,283.5z"/>\r
<path class="naruto_text-st" d="M158.5,245.5c0.37-0.93,3.37-8.39,5-8c1.44,0.34,1.08,6.66,1,8C162.5,245.5,160.5,245.5,158.5,245.5z"/>\r
<path class="naruto_text-st" d="M193.5,265.5v9l-4,3v10c0.77,1.23,2.31,3.33,5,5c1.93,1.2,3.75,1.74,5,2h8c1.31-1.92,2.7-4.26,4-7\r
	c1.38-2.93,2.33-5.65,3-8c6.15,4.1,12.3,8.2,18.44,12.3c1.7,1.13,3.51,2.08,5.4,2.84c5.27,2.13,10.66,4.41,16.15,6.86\r
	c8.09,3.61,15.76,7.3,23,11h13v-7.26c0-1.07-0.58-2.04-1.52-2.55c-4.01-2.18-9.37-5.24-15.48-9.18c-13.12-8.45-10.92-8.81-21-15\r
	c-7.3-4.49-12.87-8.99-24-18c-0.77-0.63-1.98-1.63-2-3c-0.07-4.42,12.22-5.46,22-14c3.5-3.06,5.93-6.42,7.61-9.35\r
	c0.93-1.63,1.39-3.48,1.39-5.36v-7.35c0-1.25-0.41-2.46-1.16-3.46c-1.64-2.18-2.91-4.06-3.84-5.49c-2.33-3.61-2.98-5.15-5-6\r
	c-1.98-0.84-2.89,0.01-5-1c-2.28-1.09-2.14-2.5-4-4c-2.82-2.27-4.99-0.52-12-2c-3.74-0.79-3.69-1.36-7-2c-4.11-0.79-7.65-0.43-10,0\r
	c-1.99,0.78-5.03,2.25-8,5c-6.17,5.7-7.59,12.8-8,15c-0.42,2.27-0.39,3.68,0,11c0.25,4.66,0.58,10.4,1,17c0.04,1.09-0.08,2.64-1,4\r
	c-1.22,1.82-2.66,1.55-4,3c-2.1,2.28-2.21,6.9,0,10C190.81,264.34,192.59,265.16,193.5,265.5z"/>\r
<path class="naruto_text-st" d="M215.5,231.5c1.7-0.31,4.16-0.88,7-2c3.32-1.31,5.81-2.29,6-4c0.18-1.63-1.81-3.11-3-4\r
	c-1.77-1.32-3.49-1.68-5-2c-1.96-0.41-3.13-0.66-4,0c-0.89,0.68-0.96,1.93-1,4C215.45,225.68,215.43,228.38,215.5,231.5z"/>\r
<path class="naruto_text-st" d="M269.5,208.5c2.67,0,5.33,0,8,0c1.11,2.61,2.7,5.73,5,9c1.69,2.4,3.42,4.38,5,6c-1.5,7.14-2.42,13.27-3,18\r
	c-0.62,5.01-1.47,13.36,1,23c0.75,2.94,1.27,3.87,2,4c3.12,0.57,8.24-13.59,12-24c2.96-8.2,4.56-12.25,5-16\r
	c0.51-4.36,1.48-8.65,2-13c0.18-1.48,0.29-2.62,1-4c0.81-1.57,1.93-2.57,8-6c5.52-3.11,6.74-3.5,8-3c1.21,0.48,2.02,1.61,3,3\r
	c1.09,1.54,1.68,3.01,2,4c-0.33,9-0.67,18-1,27c-1.18,2.17-2.82,5.58-4,10c-1.06,3.96-1.01,5.91-2,10c-1.14,4.71-2.73,8.44-4,11\r
	c0,4,0,8,0,12c0.72,1.76,1.45,3.09,2,4c0.61,1.01,0.91,1.35,1,2c0.23,1.62-1.11,3.1-2,4c-5.33,5.38-7.99,8.07-12,8\r
	c-4.64-0.08-9.74-3.64-11-6c-0.18-0.34-0.77-1.57-2-2c-0.88-0.31-1.71-0.08-2,0c-3.4,0.95-4.19,6.49-7,7c-2.17,0.4-2.87-2.71-9-6\r
	c-2.11-1.13-2.34-0.93-4-2c-0.92-0.59-4.04-2.64-6-6c-1.36-2.33-1.6-4.34-2-9c-0.38-4.41-0.72-9.09-1-14\r
	c-0.33-11.33-0.67-22.67-1-34c0.61-2.96,1.75-6.85,4-11C266.8,212.11,268.2,210.12,269.5,208.5z"/>\r
<path class="naruto_text-st" d="M347.5,231.5c-0.29,7.94-0.62,15.94-1,24c-0.58,12.48-1.25,24.81-2,37c1.94,2.24,3.7,3.89,5,5\r
	c1.71,1.47,2.35,1.8,3,2c2.72,0.84,5.31-0.61,6-1c2.57-1.44,3.77-3.7,5-6c1.28-2.39,1.84-4.41,2-5c2.02-7.42,2.36-15.3,3-23\r
	c0.18-2.22,0.5-5.69,1-10c1-1.33,2-2.67,3-4c0.33-6.67,0.67-13.33,1-20c1.21-0.07,2.98-0.3,5-1c1.87-0.65,2.99-1.04,4-2\r
	c3.24-3.08,2.17-9.03,2-10c-0.2-1.14-0.35-1.13-1-4c-0.89-3.89-0.72-4.33-1-5c-1.74-4.19-14.73-2.46-29-2c-6.36,0.2-11.57,0.11-15,0\r
	c-2.33,4-4.67,8-7,12c-0.52,3.87-0.3,6.93,0,9c0.23,1.6,0.47,2.33,1,3c1.44,1.82,4.06,1.93,7,2\r
	C341.37,232.55,344.16,232.42,347.5,231.5z"/>\r
<path class="naruto_text-st" d="M379.5,263.5c-1-0.67-2-1.33-3-2c0-3,0-6,0-9c3.67-6,7.33-12,11-18c0.23-2.46,0.78-5.57,2-9\r
	c1.09-3.05,2.24-5,4-8c1.67-2.84,2.34-3.5,3-4c1.86-1.41,3.85-1.69,6-2c2.61-0.37,4.67-0.15,6,0c3.26,0.37,3.01,0.92,5,1\r
	c4,0.16,4.83-2.07,9-2c1.2,0.02,2.46,0.35,5,1c3.2,0.82,4.8,1.24,6,2c2.38,1.51,2.16,2.82,6,7c1.93,2.1,1.97,1.76,3,3\r
	c1.14,1.38,2.79,3.86,4,10c0.44,2.22,0.57,3.65,1,13c0.41,8.86,0.39,9.62,0,11c-0.52,1.88-1.03,2.46-6,10c-5.21,7.91-4.98,7.77-6,9\r
	c-2.08,2.51-2.97,2.99-10,9c-9.07,7.76-8.91,8.09-11,9c-3.53,1.54-7.02,1.69-14,2c-5.9,0.26-7.7-0.34-9-1c-2.29-1.17-3.59-2.84-6-6\r
	c-1.42-1.87-3.25-4.53-5-8C380.17,275.5,379.83,269.5,379.5,263.5z"/>\r
<path class="naruto_text-st" d="M410.5,237.5c-1.8,0.72-4.05,2.56-7,13c0,0-4.37,15.44-1,22c0.79,1.53,1.68,1.89,2,2c1.67,0.55,3.52-0.8,5-2\r
	c5.84-4.72,9.58-9.96,11-12c3.39-4.89,3.83-6.35,4-7c0.62-2.35,0.41-4.56,0-9c-0.44-4.72-0.69-7.1-2-8c-1.21-0.83-3.14-0.55-7,0\r
	C412.97,236.86,411.6,237.06,410.5,237.5z"/>\r
</svg>\r
`,vl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.neow_ear-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="neow_ear-st" d="M136,278.5c-5.26-2.26-11.3-5.78-16.5-11.5c-26.93-29.63-12.32-97.13,24-136c39.33-42.09,95.31-41.19,107-41\r
	c10.4,0.17,83.84,2.51,120,60c23.48,37.33,30.41,96.59,4,120c-4.27,3.78-8.77,6.07-12.5,7.5"/>\r
<path class="neow_ear-st" d="M112.5,257c-4.12,8.22-15.91,34.46-8,66c10.13,40.4,44.85,58.7,53,63c14.3,7.54,25.87,9.36,49,13\r
	c44.49,7,77.94,1.6,87,0c21.92-3.88,36.78-6.51,54-17c9.38-5.72,36.68-22.36,47-57c10.73-36.04-4.44-66.32-8-73"/>\r
<path class="neow_ear-st" d="M242.5,262c-1.18-0.92-2.08-0.24-4-1c-1.82-0.72-4.04-2.52-4-4c0.07-2.92,8.94-5.81,17-6\r
	c7.98-0.19,16.82,2.24,17,5c0.1,1.5-2.35,3.26-4,4c-2.04,0.91-2.63,0.17-4,1c-2.51,1.52-1.35,4.52-4,7c-1.94,1.82-4.44,1.97-5,2\r
	c-2.43,0.14-5.49-0.77-7-3C243.1,264.92,244.07,263.23,242.5,262z"/>\r
<path class="neow_ear-st" d="M250.5,270c0,4,0,8,0,12"/>\r
<path class="neow_ear-st" d="M231.5,292c2.73-0.32,7.9-1.31,13-5c2.8-2.02,4.73-4.25,6-6c1.61,1.81,3.91,4.01,7,6c5.05,3.26,9.91,4.49,13,5"\r
	/>\r
<path class="neow_ear-st" d="M173.5,233c-14.31-2.75-23.63-13.79-23-24c0.84-13.62,18.99-19.36,21-20c12.45-3.94,27.3-0.62,36,9\r
	c5.08,5.62,9.95,15.47,7,23c-0.44,1.13-1.8,4.58-5,6c-2.72,1.21-4.75,0.04-9,0c-4.81-0.04-7.2,1.41-10,2c-7.58,1.6-20.24-2.62-25-13\r
	c-3.95-8.61-1.6-19.54,6-27"/>\r
<path class="neow_ear-st" d="M326.5,235c16.89-3.81,26.7-16.8,25-27c-2.04-12.29-20.13-16.58-22-17c-13.31-2.98-26.43,2.69-34,11\r
	c-6.62,7.27-7.88,15.35-8,19c-0.05,1.6-0.19,5.84,2,7c0.98,0.52,1.98,0.19,3,0c3.85-0.7,6.67,0.88,10,2c3.7,1.24,10.7,2.8,16,2\r
	c6.98-1.05,13.93-6.62,17-14c3.73-8.97,1.37-19.71-6-27"/>\r
<path class="neow_ear-st" d="M196.5,98c4,11,8,22,12,33c1.45,3.71,3.81,6.14,6,6c2.66-0.17,4.23-4.09,5-6c4.61-11.48-5.77-30.01-10-37"/>\r
<path class="neow_ear-st" d="M315.5,104c-4.67,9.33-9.33,18.67-14,28c-0.28,0.56-2.54,4.99-6,5c0,0-2.07,0.01-4-2\r
	c-5.11-5.32,7.68-29.8,11-36"/>\r
<path class="neow_ear-st" d="M226.5,166c-0.96-3.85-0.58-5.31-1-9c-0.45-3.94-1.54-8.07-1-12c0.08-0.57,0.26-1.64,1-2\r
	c1.05-0.51,2.58,0.67,3,1c1.03,0.8,2.77,2.61,4,11c1,6.84,0.35,9.04,0,10c-0.82,2.28-2.6,5.24-4,5\r
	C228.12,169.93,227.39,169.56,226.5,166z"/>\r
<path class="neow_ear-st" d="M279.15,165.93c0.96-3.85,0.58-5.31,1-9c0.45-3.94,1.54-8.07,1-12c-0.08-0.57-0.26-1.64-1-2\r
	c-1.05-0.51-2.58,0.67-3,1c-1.03,0.8-2.77,2.61-4,11c-1,6.84-0.35,9.04,0,10c0.82,2.28,2.6,5.24,4,5\r
	C277.53,169.86,278.26,169.49,279.15,165.93z"/>\r
<path class="neow_ear-st" d="M106.5,221c2.51,0.12,6.31,0,10.5-1.5c7.04-2.52,8.2-6.43,17-12c7.7-4.88,12.19-5.3,12-7\r
	c-0.26-2.35-9.18-4.15-17-3c-11.11,1.64-18.57,9.02-22,13"/>\r
<path class="neow_ear-st" d="M109.5,251c4.82-1.62,12.06-3.55,21-4c9.35-0.48,21.77,0.6,22,3c0.27,2.77-15.79,6.59-23,8\r
	c-6.2,1.22-11.42,1.74-15,2"/>\r
<path class="neow_ear-st" d="M388.5,245c-2.12-0.72-5.2-1.58-9-2c-6.76-0.74-11.82,0.36-19,2c-6.21,1.41-14.11,3.21-14,5\r
	c0.04,0.72,1.37,1.15,10,3c13.77,2.94,16.04,3.04,18,3c2.79-0.06,6.97-0.42,12-2"/>\r
<path class="neow_ear-st" d="M391.5,221c-3.01-0.07-7.46-0.59-12-3c-5.44-2.89-5.81-5.74-12-10c-7.51-5.16-13.14-5.22-13-7\r
	c0.16-2.01,7.52-3.68,14-3c4.83,0.51,8.39,2.24,12,4c4.93,2.4,8.61,5.06,11,7"/>\r
<path class="neow_ear-st" d="M227.5,91c1.29,9.32,1.79,16.74,2,22c0.22,5.56,0.25,11.89,4,14c1.69,0.95,3.17,0.49,5,2\r
	c2.35,1.93,2.77,5.05,3,7c1.71,14.24,0.08,17.85,3,22c1.93,2.74,5.34,5,9,5c5.29,0,8.8-4.73,9-5c1.97-2.73,1.79-4.97,4-20\r
	c0.27-1.8,0.56-3.62,2-5c2.6-2.49,5.8-0.59,9-2c4.08-1.8,4.54-7.39,7-18c1.01-4.35,2.59-10.54,5-18"/>\r
</svg>\r
`,yl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.nine_tailed_fox-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="nine_tailed_fox-st" d="M87.25,282.16c-7.58,7.25-15.17,14.51-22.75,21.76c18.47,31.33,36.93,62.66,55.4,93.98\r
	c8.9-3.63,17.81-7.25,26.71-10.88c9.77,8.23,46.57,37.22,101.9,37.59c55.72,0.38,93.09-28.51,102.89-36.6\r
	c9.89,3.3,19.79,6.6,29.68,9.89c17.81-31.33,35.61-62.66,53.42-93.98c-7.58-6.6-15.17-13.19-22.75-19.79\r
	c2.01-12.99,8.31-63.88-23.74-113.77c-26.31-40.95-63.44-57.85-77.17-63.32c-1.65-9.89-3.3-19.79-4.95-29.68\r
	c-36.93-0.33-73.87-0.66-110.8-0.99c-1.32,9.56-2.64,19.13-3.96,28.69c-12.03,4.58-61.76,25.09-89.04,80.13\r
	C81.04,227.68,84.99,267.24,87.25,282.16z"/>\r
<path class="nine_tailed_fox-st" d="M240.6,144.64c5.94,0,11.87,0,17.81,0c0-9.56,0-19.13,0-28.69c18.79,11.91,23.75,22.81,24.73,30.67\r
	c1.11,8.87-2.09,19.95,2.97,22.75c1.77,0.98,4.23,0.78,5.94,0c4.8-2.19,4.67-9.83,6.93-9.89c1.57-0.05,2.85,3.62,2.97,3.96\r
	c2.83,8.31-2.64,19.95-11.87,34.63c-4.55,7.24-11.06,16.86-19.79,27.7c0,6.6,0,13.19,0,19.79c-2.63,2.58-4.68,4.66-5.94,5.94\r
	c-5.53,5.64-7,7.42-9.89,7.91c-0.27,0.05-0.05-0.01-4.95,0c-5.71,0.01-5.53,0.08-5.94,0c-2.27-0.42-3.57-1.75-8.9-7.91\r
	c-2.48-2.87-4.52-5.26-5.94-6.93c0-5.94,0-11.87,0-17.81c-8.36-11.01-14.55-20.65-18.8-27.7c-13.34-22.16-14.43-30.36-11.87-35.61\r
	c0.82-1.68,2.58-4.23,3.96-3.96c2.18,0.43,1.02,7.44,4.95,9.89c1.97,1.23,4.97,1.13,6.93,0c5.44-3.15,0.97-15.02,2.97-25.72\r
	c1.47-7.88,6.94-17.79,23.74-27.7C240.6,125.52,240.6,135.08,240.6,144.64z"/>\r
<path class="nine_tailed_fox-st" d="M228.72,235.66c-3.92,2.07-9.54,5.29-15.83,9.89c-22.64,16.56-33.99,36.37-43.53,53.42\r
	c-7.21,12.89-16.23,31.83-22.75,56.39c7.25,6.6,14.51,13.19,21.76,19.79c0.62-16.94,3.98-46.83,20.78-79.14\r
	c12.66-24.36,28.31-41.16,39.57-51.44"/>\r
<path class="nine_tailed_fox-st" d="M237.63,255.45c-9.84,17.12-21.68,42.18-28.69,74.2c-5.3,24.21-6.36,45.62-5.94,62.33\r
	c8.9,2.31,17.81,4.62,26.71,6.93c-1.76-22.35-2.14-49.14,0.99-79.14c2.4-23,6.4-43.57,10.88-61.34"/>\r
<path class="nine_tailed_fox-st" d="M256.43,259.4c5.35,19.87,10.27,43.84,12.86,71.23c2.42,25.66,2.27,48.7,0.99,68.26\r
	c8.57-2.64,17.15-5.28,25.72-7.91c0.5-18.56-0.81-44.52-8.9-74.2c-7.06-25.88-17.08-46.5-25.72-61.34"/>\r
<path class="nine_tailed_fox-st" d="M270.28,245.55c11.77,11.85,27.53,30.42,40.56,56.39c14.38,28.67,19.65,54.84,21.76,72.22\r
	c6.6-6.6,13.19-13.19,19.79-19.79c-6.98-26.24-16.95-46.16-24.73-59.36c-7.66-12.98-16.97-28.48-34.63-43.53\r
	c-8.72-7.44-16.87-12.54-22.75-15.83"/>\r
<path class="nine_tailed_fox-st" d="M275.22,219.83c14.47,7.38,32.86,18.64,51.44,35.61c25.26,23.08,40.57,47.31,49.47,64.3\r
	c3.63-8.9,7.25-17.81,10.88-26.71c-11.55-15.21-29.44-35.2-55.4-53.42c-18.83-13.21-36.81-21.91-51.44-27.7"/>\r
<path class="nine_tailed_fox-st" d="M290.06,198.07c12.95,3.5,28.19,8.75,44.52,16.82c24.13,11.92,42.46,25.95,55.4,37.59\r
	c-0.33-6.93-0.66-13.85-0.99-20.78c-10.51-8.98-26.95-20.87-49.47-29.68c-17.16-6.71-32.68-9.61-44.52-10.88"/>\r
<path class="nine_tailed_fox-st" d="M217.84,210.93c-17.91,7.18-42.49,19.47-67.27,40.56c-16.94,14.42-29.51,29.15-38.58,41.55\r
	c3.96,9.56,7.91,19.13,11.87,28.69c7.47-15.34,19.77-36.32,39.57-57.38c21.54-22.91,43.67-37.09,59.36-45.51"/>\r
<path class="nine_tailed_fox-st" d="M203.99,189.16c-14.28,2.51-32.98,7.29-53.42,16.82c-16.9,7.88-30.4,16.86-40.56,24.73c0,7.58,0,15.17,0,22.75\r
	c10.05-10.15,25.04-23.15,45.51-34.63c20.53-11.51,39.49-17.5,53.42-20.78"/>\r
<path class="nine_tailed_fox-st" d="M198.06,173.33c-27.01,0.79-45.74,7.38-58.37,13.85c-6.18,3.17-10.69,6.2-11.87,4.95\r
	c-2.99-3.18,17.27-32.68,45.51-51.44c24.07-16,48.2-20.38,62.33-21.76"/>\r
<path class="nine_tailed_fox-st" d="M301.93,173.33c28.85,0.88,47.87,7.93,60.35,14.84c4.42,2.45,8.03,4.88,8.9,3.96\r
	c2.61-2.77-19.74-35.87-54.41-55.4c-21.06-11.86-41-15.53-53.42-16.82"/>\r
<path class="nine_tailed_fox-st" d="M249.5,159.48c-1.36,0-2.34,1.87-3.96,4.95c-1.36,2.6-2.09,3.98-1.98,5.94c0.08,1.48,0.71,2.64,1.98,4.95\r
	c1.8,3.3,2.71,4.95,3.96,4.95s2.15-1.65,3.96-4.95c1.26-2.31,1.9-3.47,1.98-4.95c0.11-1.95-0.62-3.34-1.98-5.94\r
	C251.84,161.35,250.86,159.48,249.5,159.48z"/>\r
<path class="nine_tailed_fox-st" d="M261.37,195.1c-0.3,1.05-0.2,2.68,0,5.94c0.19,3.09,0.3,4.65,0.99,4.95c1.02,0.44,2.67-1.35,5.94-4.95\r
	c2.97-3.27,4.47-4.95,4.95-6.93c0.36-1.5,0.24-2.98,0-5.94c-0.2-2.45-0.32-3.68-0.99-3.96c-0.76-0.31-1.7,0.69-4.95,3.96\r
	C262.43,193.09,261.8,193.59,261.37,195.1z"/>\r
<path class="nine_tailed_fox-st" d="M237.99,194.84c0.3,1.05,0.2,2.68,0,5.94c-0.19,3.09-0.3,4.65-0.99,4.95c-1.02,0.44-2.67-1.35-5.94-4.95\r
	c-2.97-3.27-4.47-4.95-4.95-6.93c-0.36-1.5-0.24-2.98,0-5.94c0.2-2.45,0.32-3.68,0.99-3.96c0.76-0.31,1.7,0.69,4.95,3.96\r
	C236.93,192.83,237.55,193.33,237.99,194.84z"/>\r
<path class="nine_tailed_fox-st" d="M240.6,118.92c5.94,0,11.87,0,17.81,0"/>\r
</svg>\r
`,bl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.ningning-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="ningning-st" d="M312.52,134.55c0.94,6.14,1.77,14.92,1.02,25.41c-0.58,8.15-1.58,20.48-8.13,34.56\r
	c-5.88,12.63-13.88,21.59-20.33,27.44c0.34-3.05,0.68-6.1,1.02-9.15"/>\r
<path class="ningning-st" d="M291.18,201.64c-0.35,2.47-1.73,9.94-8.13,16.26c-7.71,7.6-17.16,8.08-19.31,8.13\r
	c2.35-8.62,4.76-21.27,4.07-36.59c-0.61-13.5-3.43-24.61-6.1-32.52c-1.23,6.55-4.65,19.53-15.25,31.51\r
	c-5.67,6.41-11.67,10.58-16.26,13.21c-2.19-2.99-5.15-7.77-7.11-14.23c-1.89-6.2-2.14-11.61-2.03-15.25\r
	c-4.4,8.13-8.81,16.26-13.21,24.39"/>\r
<path class="ningning-st" d="M216.98,147.77c-2.1,5.25-5.08,13.68-7.11,24.39c-2.92,15.4-1.95,29.24,0,56.92\r
	c1.23,17.43,1.88,26.24,4.07,30.49c1.18,2.29,4.37,7.91,4.07,15.25c-0.09,2.17-0.38,5.88-3.05,9.15c-3.88,4.75-9.95,5.05-11.18,5.08\r
	"/>\r
<path class="ningning-st" d="M182.43,289.04c-0.1,0.08-1.02,0.79-1.02,2.03c0,0.13,0.02,1.29,1.02,2.03c7.45,0,14.91,0,22.36,0\r
	c0.91-0.01,1.75-0.39,2.03-1.02c0.41-0.91-0.29-2.5-2.03-3.05C197.33,289.04,189.88,289.04,182.43,289.04z"/>\r
<path class="ningning-st" d="M207.84,102.03c-4.97,3.77-11.84,9.97-17.28,19.31c-3.93,6.75-6.63,14.32-10.16,38.62\r
	c-1.32,9.07-2.03,15.49-4.07,35.57c-4.78,47.16-4.3,45.68-5.08,48.79c-3.53,14.03-7.42,20.7-4.07,29.48\r
	c2.96,7.75,9.78,12.45,15.25,15.25"/>\r
<path class="ningning-st" d="M182.43,293.11c-3.17,5.83-3.38,10.29-3.05,13.21c1.08,9.43,9.25,14.67,7.11,20.33\r
	c-0.82,2.16-2.77,3.41-4.07,4.07c9.82,1.82,19.18-1.94,23.38-9.15c3.13-5.38,2.43-11.02,2.03-13.21c0.93,0.45,3.63,1.61,7.11,1.02\r
	c3.26-0.56,5.34-2.33,6.1-3.05c-1.71-0.26-5.5-1.08-9.15-4.07c-4.11-3.37-5.6-7.51-6.1-9.15"/>\r
<path class="ningning-st" d="M313.54,151.83c3.73,3.19,10.02,9.44,14.23,19.31c2.91,6.84,3.81,13.02,4.07,17.28\r
	c1.12-1.34,2.65-3.38,4.07-6.1c1.12-2.15,3.18-6.7,4.07-18.3c0.36-4.65,0.56-10.89,0-18.3"/>\r
<path class="ningning-st" d="M340.98,162c1.43,2.44,3.28,5.88,5.08,10.16c2.08,4.95,5.3,12.78,6.1,23.38c0.34,4.55,0.87,11.61-1.02,18.3\r
	c-0.38,1.36-0.9,2.82-1.02,5.08c-0.21,4.19,1.23,5.97,1.02,10.16c0,0-0.1,2.06-1.02,5.08c-1.55,5.14-6.9,13.53-14.23,19.31\r
	c-20.07,15.84-64.58,19.64-88.43,17.28c-6.73-0.67-14.28-2.07-22.36-6.1c-5.51-2.75-9.59-5.88-12.2-8.13"/>\r
<path class="ningning-st" d="M164.13,122.36c-3.51,5.29-8.74,13.63-14.23,24.39c-5.87,11.5-6.96,15.83-11.18,22.36\r
	c-4.25,6.59-11.69,15.42-25.41,23.38c3.16,1.58,10.12,4.53,19.31,4.07c8.19-0.42,14.25-3.35,17.28-5.08\r
	c-0.03,3.94,0.34,9.25,2.03,15.25c2.37,8.42,6.31,14.57,9.15,18.3c0.26-3.7,1.21-10.24,5.08-17.28c3.32-6.03,7.43-9.96,10.16-12.2"\r
	/>\r
<path class="ningning-st" d="M146.85,153.86c0.89-9.58,5.22-43.62,33.54-70.13c30.69-28.72,68.1-28.53,82.33-28.46\r
	c43.19,0.22,81.6,21.81,97.57,43.7c9.18,12.58,15.25,25.41,15.25,25.41c7.8,16.5,12.2,29.48,12.2,29.48\r
	c2.26,6.68,3.37,10.95,7.11,16.26c4.29,6.09,9.46,9.91,13.21,12.2c-3.26,1.32-8.56,2.99-15.25,3.05c-8.41,0.07-14.87-2.44-18.3-4.07\r
	"/>\r
<path class="ningning-st" d="M361.31,121.34c3.65,6.45,8.47,16.5,11.18,29.48c1.89,9.05,1.92,15.56,2.03,24.39\r
	c0.69,54.3,1.04,81.45,3.05,87.41c0.83,2.47,2.76,7.97,1.02,14.23c-2.38,8.55-10.37,13.94-17.28,17.28"/>\r
<path class="ningning-st" d="M342,294.13c-1.05,0.26-1.85,1.06-2.03,2.03c-0.24,1.26,0.61,2.63,2.03,3.05c6.44,0,12.87,0,19.31,0\r
	c1.05-0.26,1.85-1.06,2.03-2.03c0.24-1.26-0.61-2.63-2.03-3.05C354.87,294.13,348.44,294.13,342,294.13z"/>\r
<path class="ningning-st" d="M342,248.39c-3.28,4.37-5.58,8.28-7.11,11.18c-1.44,2.72-2.83,5.37-4.07,9.15c-1.23,3.75-2.43,7.43-2.03,12.2\r
	c0.25,2.94,0.53,6.29,3.05,9.15c3.57,4.04,9,4.08,10.16,4.07"/>\r
<path class="ningning-st" d="M341.49,299.72c0.08,0.57,0.51,4.13-2.03,7.11c-3.09,3.63-7.78,3.09-8.13,3.05c0.84,0.6,2.22,1.46,4.07,2.03\r
	c4.25,1.32,6.31-0.32,8.13,1.02c2.63,1.94,1.23,8.07,0,11.18c-1.28,3.25-3.28,5.42-4.57,6.61c13.91-0.71,24.47-7.61,26.43-15.25\r
	c1.6-6.26-0.51-11.69-0.51-11.69c-0.9-2.32-2.14-4.02-3.05-5.08"/>\r
<path class="ningning-st" d="M132.62,196.55c-9.79,12.44-14.17,24.23-16.26,31.51c-2.91,10.15-7.51,26.2,0,41.67\r
	c2.02,4.16,4.4,7.21,6.1,9.15c-2.35,2.72-6.63,6.98-13.21,10.16c-8.11,3.93-15.53,4.19-19.31,4.07c3.1,2.21,8.62,5.53,16.26,7.11\r
	c9.62,1.99,17.51,0.15,21.34-1.02"/>\r
<path class="ningning-st" d="M133.64,293.11c-3.53,2.88-8.37,7.82-11.18,15.25c-0.88,2.32-4.94,13.05-1.02,23.38\r
	c1.17,3.08,3.33,6.86,4.07,13.21c0.3,2.6,0.53,4.32,0,6.1c-2.34,7.88-15.17,9.86-17.28,10.16c2.87,2.08,8.11,5.22,15.25,6.1\r
	c15.51,1.91,26.73-8.51,28.46-10.16"/>\r
<path class="ningning-st" d="M160.07,376.45c0.36,2.23,1.15,5.55,3.05,9.15c0,0,3.22,6.1,10.16,11.18c13.35,9.76,36.45,9.22,38.62,9.15\r
	c-2.24-1.05-7.6-3.94-11.18-10.16c-2.04-3.56-2.77-6.93-3.05-9.15c2.42,3.35,9.16,11.76,21.34,16.26c10.84,4,20.27,2.81,24.39,2.03"\r
	/>\r
<path class="ningning-st" d="M142.79,364.26c1.61,3.42,4.42,8.34,9.15,13.21c4.44,4.57,8.95,7.43,12.2,9.15"/>\r
<path class="ningning-st" d="M162.1,386.62"/>\r
<path class="ningning-st" d="M386.72,184.36c1.68,5.09,3.75,12.39,5.08,21.34c1.68,11.23,3.15,21.08,0,32.52\r
	c-1.44,5.23-4.92,14.72-14.23,24.39"/>\r
<path class="ningning-st" d="M374.52,206.72c2.24,4.02,4.84,9.87,6.1,17.28c2.46,14.55-1.79,26.29-4.07,31.51"/>\r
<path class="ningning-st" d="M392.82,213.83c0.24,4.99,1.15,11.8,4.07,19.31c1.55,4,3.35,7.39,5.08,10.16c-1.27-0.27-3.12-0.82-5.08-2.03\r
	c-2.73-1.69-4.3-3.84-5.08-5.08"/>\r
<path class="ningning-st" d="M137.71,220.95c-3.38,3.75-11.29,13.59-13.21,28.46c-1.26,9.77,0.58,17.75,2.03,22.36\r
	c3.08-5.22,6.77-12.76,9.15-22.36C138.58,237.7,138.37,227.62,137.71,220.95z"/>\r
<path class="ningning-st" d="M379.61,269.73c1.25,2.5,3.43,5.99,7.11,9.15c8.01,6.85,17.37,7.14,20.33,7.11c-2.17,1.94-7,5.71-14.23,7.11\r
	c-4.67,0.91-8.64,0.49-11.18,0c-0.01,4.2,0.46,10.41,3.05,17.28c2.73,7.24,5.03,7.82,6.1,13.21c1.5,7.56-1.04,16.38-6.1,22.36\r
	c-5.08,6-9.71,5.63-11.18,10.16c-1.76,5.44,3.01,11.85,7.11,16.26c-2.66,0.2-7.62,0.21-13.21-2.03c-6.6-2.65-10.51-7.01-12.2-9.15\r
	c-0.31,2.05-1.43,7.53-6.1,12.2c-2.99,2.99-6.21,4.41-8.13,5.08"/>\r
<path class="ningning-st" d="M343.02,367.31c-0.08,2.35-0.45,6.03-2.03,10.16c-5.22,13.61-18.43,18.62-20.33,19.31\r
	c-2.69,0.97-7.24,2.24-13.21,2.03"/>\r
<path class="ningning-st" d="M301.34,207.73c10.83-8.45,20.7-11.17,26.43-12.2c6.22-1.12,16.23-2.91,19.31,2.03\r
	c3.33,5.34-3.75,14.83-4.07,15.25"/>\r
<path class="ningning-st" d="M254.59,211.8c-5.55-2.28-12.74-4.65-21.34-6.1c-10.06-1.7-18.81-1.59-25.41-1.02"/>\r
<path class="ningning-st" d="M304.39,205.7c-0.31,0.77-3.05,7.92,1.02,14.23c3.96,6.15,11.76,7.44,17.28,6.1\r
	c7.78-1.88,11.17-9.01,12.2-11.18c4.48-9.42,0.72-18.64,0-20.33"/>\r
<path class="ningning-st" d="M220.03,204.68c-3.98,6.33-3.98,14.31,0,20.33c5.48,8.28,15.43,8.16,16.26,8.13c1.65-0.05,7.76-0.23,12.2-5.08\r
	c4.05-4.43,5.18-11.06,3.05-17.28"/>\r
<path class="ningning-st" d="M266.79,260.59c0.67,0.58,4.13,3.46,9.15,3.05c3.77-0.31,6.27-2.3,7.11-3.05"/>\r
<path class="ningning-st" d="M261.7,297.18c-1.94-2.87-1.26-6.52,1.02-8.13c1.67-1.18,4.09-1.17,6.1,0c0.21-0.22,4.28-4.34,9.15-3.05\r
	c2.48,0.66,4.28,2.49,5.08,4.07c2.37,4.67-1.19,12.58-9.15,19.31"/>\r
<path class="ningning-st" d="M234.26,321.57c13.55-13.26,19.79-19.15,21.34-20.33c0.17-0.13,0.62-0.44,1.02-1.02\r
	c0.9-1.3,0.45-2.38,1.02-3.05c0.85-0.99,3.24-0.26,4.07,0c6.38,2.02,9.66,7.54,11.18,10.16c1.17,2.02,1.41,3.12,1.02,4.07\r
	c-0.61,1.46-2.5,1.92-3.05,2.03c0,0-1.06,0.55-3.05,2.03c-2.39,1.78-9.37,8.57-18.3,18.3c-0.7,0.65-3.22,2.83-7.11,3.05\r
	c-0.6,0.03-4.44,0.2-7.11-2.03c-3.63-3.04-3.12-8.83-3.05-13.21c0.1-6.1-0.59-14.65-4.07-25.41"/>\r
<path class="ningning-st" d="M229.18,297.18c-1.69,26.43-3.39,52.85-5.08,79.28c4.91,2.4,12.19,5.19,21.34,6.1c4.6,0.46,8.72,0.34,12.2,0\r
	c-1.36-17.62-2.71-35.23-4.07-52.85"/>\r
<path class="ningning-st" d="M240.36,300.23c-1.76-1.1-4.52-2.66-8.13-4.07c-3.52-1.37-5.08-1.51-6.1-3.05c-1.71-2.58-0.12-6.41,1.02-9.15\r
	c0.9-2.16,2.91-7.02,8.13-10.16c4.97-2.99,11.44-3.6,12.2-2.03c0.35,0.73-0.82,1.33-2.03,4.07c-0.52,1.18-2.13,4.83-1.02,8.13\r
	c0.68,2,1.61,1.66,3.05,4.07c1.13,1.89,1.31,3.36,2.03,9.15c0.34,2.71,0.68,5.42,1.02,8.13"/>\r
<path class="ningning-st" d="M280,270.75c1.4,1.02,3.86,2.99,6.1,6.1c3.99,5.54,4.77,11.23,5.08,13.21c1.4,9.05,8.01,39.18,17.28,81.31\r
	c2.76-0.51,7.92-1.9,10.16-6.1c0.54-1.01,1.32-2.94,1.02-6.1c-1.07-11.2-18.58-67.77-19.31-70.13"/>\r
<path class="ningning-st" d="M312.52,329.7c1.37,1.22,3.44,3,6.1,5.08c1.98,1.55,2.74,2.06,3.05,3.05c0.89,2.89-3.14,6.54-5.08,8.13"/>\r
<path class="ningning-st" d="M319.64,341.9c7.27,4.55,9.57,12.04,7.11,16.26c-1.79,3.09-5.8,3.87-7.11,4.07"/>\r
<path class="ningning-st" d="M294.23,268.72c1.38,0.37,3.47,1.18,5.08,3.05c2.5,2.91,2.32,6.64,2.03,11.18c-0.2,3.1-0.85,7.77-3.05,13.21"/>\r
<path class="ningning-st" d="M224.1,376.45c-0.34,6.44-0.68,12.87-1.02,19.31c3.77,3.07,9.92,7.21,18.3,9.15c5.01,1.16,8.95,1.1,12.2,1.02\r
	c19.74-0.48,29.61-0.72,35.57-2.03c7.88-1.74,21.07-5.77,35.57-16.26c-2.03-7.45-4.07-14.91-6.1-22.36"/>\r
<path class="ningning-st" d="M245.44,274.82c0.46,0.15,1.69,0.5,3.05,0c1.63-0.6,2.8-2.17,3.05-4.07"/>\r
<path class="ningning-st" d="M270.85,271.77c0,2.03,0,4.07,0,6.1"/>\r
<path class="ningning-st" d="M277.97,286c0.73-0.02,3.13-0.19,5.08-2.03c2.1-1.98,2.87-5.12,2.03-8.13"/>\r
<path class="ningning-st" d="M246.46,287.01c1.31,0.91,4.13,2.61,8.13,3.05c3.72,0.41,6.65-0.46,8.13-1.02"/>\r
<path class="ningning-st" d="M242.39,405.93c0.55,2.49,1,5.59,1.02,9.15c0.01,4.17-0.67,6.61-2.03,13.21c-2.97,14.36-2.58,15.99-2.03,17.28\r
	c2.17,5.14,7.77,7.24,10.16,8.13c3.55,1.33,10.18,2.73,12.2,0c0.95-1.28,0.11-2.43,1.02-6.1c0.58-2.35,1.43-3.88,2.03-5.08\r
	c0.81-1.6,2.23-5.81,5.08-14.23c0.48-1.42,1.66-6.03,4.07-15.25c0.22-0.86,0.72-2.86,0-5.08c-0.31-0.94-0.74-1.63-1.02-2.03"/>\r
<path class="ningning-st" d="M241.38,427.27c2.01,1.89,6.07,5.21,12.2,7.11c6.21,1.93,11.5,1.45,14.23,1.02"/>\r
<path class="ningning-st" d="M243.41,421.18c2.14,1.4,4.85,2.88,8.13,4.07c7.52,2.71,14.25,2.51,18.3,2.03"/>\r
<path class="ningning-st" d="M302.36,399.83c-2.33,6.53-4.51,11.7-6.1,15.25c-2.3,5.16-2.46,5.14-3.05,7.11c-1.48,4.92-1.28,8.36-3.05,17.28\r
	c-0.56,2.8-0.89,4.06-2.03,5.08c-2.06,1.85-5.1,1.49-9.15,1.02c-3.93-0.46-6.71-0.79-9.15-3.05c-1.89-1.75-2.69-3.86-3.05-5.08"/>\r
<path class="ningning-st" d="M270.85,426.26c2.41,1.11,5.86,2.4,10.16,3.05c4.58,0.69,8.47,0.41,11.18,0"/>\r
<path class="ningning-st" d="M272.89,419.14c2.35,1.11,5.81,2.42,10.16,3.05c4.14,0.59,7.66,0.36,10.16,0"/>\r
<path class="ningning-st" d="M303.38,181.31c2.34-1.62,6.11-3.8,11.18-5.08c4.07-1.03,7.62-1.14,10.16-1.02"/>\r
<path class="ningning-st" d="M256.62,179.27c-3.02-0.93-7.18-1.88-12.2-2.03c-4.48-0.14-8.29,0.39-11.18,1.02"/>\r
</svg>\r
`,xl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.niulai-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="niulai-st" d="M136.5,146.5c-6.28-2.53-17.85-8.18-28-20c-7.37-8.58-16.78-19.69-16-33c0.23-3.83,1.26-7.44-1-11\r
	c-2.82-4.43-9.71-7.14-15-5c-4.66,1.88-6.28,6.79-8,12c-2.91,8.8-2.26,16.39-2,19c1.68,17.1,6.87,31.23,10,39\r
	c3.56,8.84,8.95,20.67,17,34"/>\r
<path class="niulai-st" d="M326.5,160.5c1.98-5.03,7.87-3.64,22-10c5.16-2.32,16.88-8.14,28-19c7.26-7.09,11.7-11.43,15-19\r
	c3.03-6.97,2.93-11.71,8-16c1.01-0.86,6.45-5.46,13-4c5.23,1.16,8.13,5.51,9,7c4.03,6.86,1.72,15.26-1,23\r
	c-6.43,18.3-14.8,31.94-20,40c0,0-16.78,26-36,38c-1.21,0.75-3.27,1.96-6,2c-5.36,0.08-9.74-4.39-18-16\r
	C330.1,171.88,324.93,164.49,326.5,160.5z"/>\r
<path class="niulai-st" d="M386.5,181.5c7.28,3.68,18.4,8.01,32,8c18.6-0.01,28.15-8.12,32-4c5.76,6.18-9.59,30.88-24,46\r
	c-11.41,11.97-27.83,23.79-38,24c-1.27,0.03-6.13-0.05-12,2c-3.53,1.24-6.24,2.82-8,4"/>\r
<path class="niulai-st" d="M89.5,174.5c-2.71-1.2-5.58-1.39-7,0c-2.38,2.32,0.43,7.88,1,9c1.25,2.46,2.91,4.09,4,5"/>\r
<path class="niulai-st" d="M365.5,202.5"/>\r
<path class="niulai-st" d="M363.5,201.5c1.38,2.6,3.36,6.72,5,12c7.02,22.55,0.63,42.88-4,57c-27.46,83.65-41.88,102.68-54,113\r
	c-2.66,2.27-7.81,7.15-16,10c-5.68,1.98-11.24,2.49-22,2c-14.59-0.67-21.87-2.42-28-3c-14.65-1.38-20.7,4.26-45,13\r
	c-25.49,9.17-42.26,15.2-63,14c-11.48-0.67-30.53-1.7-45-15c-15.43-14.18-21.85-38.77-27-47c-0.27-0.43-1.46-2.3-2-5\r
	c-0.34-1.73-0.72-3.33,0-5c0.73-1.68,2.11-2.46,2-4c-0.07-1.02-0.76-1.71-1-2c-2.69-3.24,0.97-16.09,8-27c0.95-1.48,2.78-4.19,3-8\r
	c0.17-2.93-0.69-5.16-1-6c-3.95-10.71-5.68-31.25-6-35c0,0-0.98-11.58,2-21c0.53-1.68,1.23-3.08,1.23-3.08\r
	c0.76-1.5,1.34-1.95,2.77-5.92c5.3-14.63,3.6-25.55,9-38c0.99-2.29,2-4.11,2.2-4.48c3.26-5.86,6.88-9.58,8.8-11.52\r
	c17.5-17.75,26.58-26.79,43-35c0,0,0,0,0,0c74.56-37.27,154-11,154-11c17.27,5.76,31.94,13.25,44,21"/>\r
<path class="niulai-st" d="M64.5,343.5c7.81,3.23,14.35,4.48,19,5c8.83,0.99,15.08-0.13,22,3c0.94,0.43,3,1.43,6,2c4.47,0.85,8,0.17,9,0\r
	c11.31-1.9,33.21,6.75,58,4c4.05-0.45,10.35-1.44,18-4"/>\r
<path class="niulai-st" d="M95.5,288.5c2.03-2.31,4.01-3.35,5.44-3.88c4.72-1.73,7.67,0.61,13.13-1.09c2.75-0.86,2.42-1.58,5.44-2.87\r
	c3.75-1.6,5.93-1.19,14.99-1.16c11.53,0.04,14.68-0.59,17,2c1.33,1.48,1.15,2.62,3,4c2.17,1.62,3.85,1.09,8,2\r
	c1.95,0.42,5.16,1.13,8,3c3.23,2.13,3.64,4.25,6,7c3.75,4.37,7.85,5,12,7c11.17,5.38,16.42,17.65,20,26c1.59,3.71,4.29,10.17,5,19\r
	c0.41,5.11,1.17,23.79-11,38c-7.91,9.23-17.34,12-31,16c-9.05,2.65-41.94,11.77-77-3c-5.31-2.24-9.44-4.5-12-6"/>\r
<path class="niulai-st" d="M74.5,308.5c1.37-1.88,3.02-3.92,5-6c2.79-2.92,5.55-5.22,8-7"/>\r
<path class="niulai-st" d="M371.5,225.5c3.19-3.96,8.68-9.71,17-14c2.81-1.45,5.32-2.41,20-6c23.4-5.73,25.91-5.46,27-4\r
	c3.03,4.05-6.02,15.53-8,18c-15.99,20.02-38.87,24.3-43,25c-5.86,1-10.77,1.08-14,1"/>\r
<path class="niulai-st" d="M85.5,198.5c3.91-2.25,10.47-5.32,19-6c5.21-0.41,9.22,0.22,14,1c5.23,0.86,12.54,2.51,21,6"/>\r
<path class="niulai-st" d="M184.5,203.5c6.57-0.36,16.23-0.79,28-1c9.92-0.17,14.88-0.26,19,0c9.06,0.57,22.96,3.25,40,14"/>\r
<path class="niulai-st" d="M83.5,235.5c0.38-2.83,5.07-4.37,7-5c1.68-0.55,5.27-1.49,15,0c7.06,1.08,10.66,1.64,15,4\r
	c3.89,2.12,9.86,6.49,9,9c-0.45,1.33-2.67,1.66-11,2c-19.74,0.81-23.72-0.35-27-2C90.29,242.89,83,239.23,83.5,235.5z"/>\r
<path class="niulai-st" d="M197.5,250.5c-0.35-3.02,7.49-6.67,12-8c5.18-1.53,9.79-1.02,19,0c5.83,0.65,8.75,0.93,12,2\r
	c6.43,2.12,15.61,7.15,15,10C254.06,261.18,198.41,258.3,197.5,250.5z"/>\r
<path class="niulai-st" d="M90.5,311.5c0.42-3.23,2.32-6,5-7c3.86-1.44,9.06,0.91,11,6"/>\r
<path class="niulai-st" d="M132.5,310.86c0.9-0.66,3.49-2.38,7.16-2.36c5.1,0.03,8.3,3.41,8.84,4"/>\r
<path class="niulai-st" d="M90.5,230.5c-0.47,1.24-1.1,3.35-1,6c0.12,3.32,1.3,5.78,2,7"/>\r
<path class="niulai-st" d="M115.5,232.5c0.31,1.3,0.75,3.88,0,7c-0.71,2.96-2.16,4.98-3,6"/>\r
<path class="niulai-st" d="M211.5,242.5c-0.66,1.05-1.78,3.14-2,6c-0.3,4,1.35,6.97,2,8"/>\r
<path class="niulai-st" d="M240.5,244.5c0.45,1.86,1.28,6.42-1,11c-0.6,1.21-1.31,2.2-2,3"/>\r
<path class="niulai-st" d="M140.5,236.5c0.01,2.67-0.31,6.62-2,11c-3,7.79-8.49,12.22-11,14"/>\r
<path class="niulai-st" d="M83.5,314.5c-0.13-2.37-0.07-5.92,1-10c1.17-4.47,3.6-13.66,11-16c5.52-1.75,12.14,0.86,17,6"/>\r
<path class="niulai-st" d="M127.5,296.5c1.08-0.94,6.96-5.92,15-5c7.98,0.92,14.84,7.29,17,16"/>\r
<path class="niulai-st" d="M94.5,369.5c3.54,1.81,8.25,3.76,14,5c10.14,2.18,18.74,1.11,24,0"/>\r
</svg>\r
`,Sl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.nte-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="nte-st" d="M199.89,226.46l-1.46,1.79c-0.57,0.7-0.07,1.75,0.83,1.75h31.06c2.03,0,3.68-1.65,3.68-3.68v-37.38\r
	c0-2.73-2.21-4.95-4.94-4.97c-44.22-0.31-88.43-0.62-132.65-0.93c-4.78-0.03-9.52,1.11-13.7,3.43\r
	c-11.84,6.58-19.66,18.7-20.21,32.03c-0.66,15.87,9.12,30.74,24.09,37.14c3.77,1.61,7.86,2.36,11.96,2.38l133.74,0.48\r
	c0.79,0,1.56-0.24,2.2-0.68c2.84-1.97,5.69-3.94,8.53-5.91c1.54-1.07,1.91-3.19,0.82-4.72l-3.27-4.58\r
	c-1.25-1.75-2.51-3.51-3.76-5.26c-0.72-1.01-2.14-1.23-3.14-0.49c-0.36,0.4-1.1,1.1-2.25,1.44c-0.45,0.13-0.86,0.18-1.2,0.19H112.5\r
	c-9.11-1.99-15.41-10.18-15-19c0.37-7.88,6.03-14.84,14-17h86.67c1.84,0,3.33,1.49,3.33,3.33v16.13\r
	C201.5,223.6,200.93,225.19,199.89,226.46z"/>\r
<path class="nte-st" d="M106.5,214.55v11.71c0,1.79,1.44,3.25,3.24,3.28l76.33,0.92c2.11,0.03,4.07-1.11,5.09-2.96\r
	c2.28-3.11,3.51-5.8,3.69-7.14c0.16-1.22-0.13-2.17-0.13-2.17c-0.12-0.4-0.31-0.78-0.54-1.14c-1.16-1.76-2.89-4.23-4.6-6.88\r
	c-0.6-0.94-1.83-1.24-2.8-0.69l-3.76,2.15c-0.99,0.57-2.12,0.86-3.27,0.84c-23.4-0.31-46.8-0.62-70.2-0.94\r
	C107.87,211.52,106.5,212.87,106.5,214.55z"/>\r
<path class="nte-st" d="M57.5,271.61v12.89c0,1.1,0.9,2,2,2H88c1.38,0,2.5-1.12,2.5-2.5v-12.66c0-1.02-0.82-1.84-1.84-1.84H59.61\r
	C58.44,269.5,57.5,270.44,57.5,271.61z"/>\r
<path class="nte-st" d="M97.9,260.5h30.57c1.12,0,2.02,0.9,2.02,2.02v4.98h35.75c1.37,0,2.6-0.81,3.14-2.07l1.31-3.05\r
	c0.49-1.14,1.61-1.88,2.85-1.88h30.32c0.9,0,1.64,0.73,1.64,1.64v3.04c0,1.28,1.04,2.32,2.32,2.32h19.2c0.95,0,1.88-0.32,2.63-0.91\r
	c0.77-0.61,1.54-1.22,2.31-1.83c1.08-0.85,2.63-0.7,3.53,0.34c2.46,2.86,4.91,5.71,7.37,8.57c1.17,1.36,1.12,3.4-0.13,4.68\r
	c-1.02,1.04-2.09,2.09-3.24,3.15c-1.77,1.65-3.52,3.14-5.21,4.5c-1.22,0.97-2.72,1.5-4.28,1.5h-22.16c-1.3,0-2.36,1.05-2.36,2.36\r
	v8.68c0,2.45-1.32,4.71-3.46,5.9c-9.12,5.1-18.24,10.19-27.36,15.29c-1.42,0.8-3.18-0.23-3.18-1.86v-28.78\r
	c0-1.42-1.15-2.58-2.58-2.58h-37.15c-1.35,0-2.57,0.81-3.09,2.06c-2.93,6.97-7.87,15.21-16.17,21.94c-11.7,9.48-24.58,11.51-34,13\r
	c-7.09,1.12-13.24,1.25-17.86,1.1c-1.2-0.04-2.14-1.03-2.14-2.23c0-0.89,0-1.93,0-2.89c0-1.72,1.16-3.21,2.83-3.62\r
	c7.93-1.94,26.14-7.7,31.17-21.36c2.02-5.49,2.8-14.67,3-17c0.49-5.75,0.41-10.74,0.17-14.64C95.59,261.58,96.62,260.5,97.9,260.5z"\r
	/>\r
<path class="nte-st" d="M178.5,320.5c8-4.33,16-8.67,24-13c0.69-0.37,1.48-0.38,2,0c0.75,0.56,0.92,1.97,0,3c-8,4.33-16,8.67-24,13\r
	c-0.69,0.37-1.48,0.38-2,0C177.75,322.94,177.58,321.53,178.5,320.5z"/>\r
<path class="nte-st" d="M256.5,191.13v11.51c0,1.58,1.28,2.86,2.86,2.86h14.83c1.27,0,2.31,1.03,2.31,2.31v24.69c0,1.66-1.34,3-3,3\r
	h-9.73c-1.8,0-3.26,1.46-3.26,3.26v12.02c0,1.5,1.21,2.71,2.71,2.71h11.2c1.15,0,2.09,0.93,2.09,2.09v46.87c0,0.03,0,0.05-0.01,0.08\r
	c-0.33,1.92-1.38,6.12-4.99,8.96c-2.67,2.1-5.56,2.51-9,3c-2.27,0.33-4.32,0.37-6.04,0.28c-1.61-0.08-2.96,1.18-2.96,2.78v1.42\r
	c0,1.38,1.13,2.5,2.51,2.48c22.22-0.3,44.44-0.61,66.66-0.91c3.3-0.05,6.57-0.55,9.72-1.52c7.13-2.2,18.36-7.21,27.1-18.53\r
	c9.03-11.69,10.63-23.92,11-28.98c0-0.01,0-0.02,0-0.04v-66.81c0-1.75,1.42-3.17,3.17-3.17h51.09c1.78,0,3.52-0.53,5.01-1.52\r
	l4.12-2.74c0.63-0.42,1.27-0.85,1.9-1.27c1.98-1.32,2.35-4.07,0.81-5.87l-2.91-3.39c-1.53-1.78-3.05-3.56-4.58-5.34\r
	c-0.63-0.73-2.3-0.93-3.54-0.33c-0.99,0.48-1.25,1.4-2.64,2.03c-0.68,0.31-1.31,0.4-1.71,0.43h-89.52c-1.77,0-3.2,1.43-3.2,3.2\r
	v11.85c0,1.62,1.32,2.94,2.94,2.94h7.31c1.52,0,2.76,1.23,2.76,2.76v65.22c0,0.01,0,0.03,0,0.04c-0.35,4.4-1.81,15.39-10,25.98\r
	c-6.88,8.91-15.29,13.38-20.77,15.55c-2.03,0.8-4.23-0.71-4.23-2.9v-51.7c0-1.55,1.22-2.82,2.78-2.88c2.18-0.09,5.12-0.55,8.22-2.08\r
	c2.75-1.35,4.75-3.1,6.12-4.61c1.16-1.28,1.21-3.2,0.1-4.53c-1.26-1.51-2.52-3.02-3.78-4.54c-1.09-1.3-2.17-2.6-3.26-3.91\r
	c-0.72-0.87-1.9-1.2-2.97-0.84c-1.64,0.55-3.28,1.09-4.92,1.64c-0.08,0.03-0.87,0.27-1.58-0.24c-0.71-0.51-0.73-1.34-0.73-1.42\r
	v-25.08c0-1.36,1.11-2.47,2.47-2.47h7.13c1.33,0,2.4-1.08,2.4-2.4v-11.2c0-1.88-1.52-3.4-3.4-3.4h-55.98\r
	C257.68,188.5,256.5,189.68,256.5,191.13z"/>\r
<path class="nte-st" d="M373.5,319.8v-82.3c0.45-1.54,1.5-4.36,4-7c3.41-3.6,7.42-4.67,9-5h44c1.18,0.17,4.85,0.85,8,4\r
	c0.85,0.85,3.37,3.58,4,8v40.54c0,2.78-1.39,5.39-3.71,6.93c-2.76,1.84-5.53,3.69-8.29,5.53c-4.66,3.11-9.32,6.21-13.98,9.32\r
	c-0.66,0.44-1.45,0.68-2.24,0.68c-0.08,0.01-0.8,0.09-1.33-0.44c-0.42-0.42-0.44-0.95-0.44-1.07c-0.11-0.62-0.14-1.49,0.29-2.28\r
	c0.3-0.54,0.69-0.85,0.82-0.94c2.8-1.92,6.84-5.33,9.83-10.78c1.65-3.01,2.55-5.86,3.05-8.12v-37.1c0-4.57-3.7-8.27-8.27-8.27h-6.25\r
	c-4.7,0-8.53,3.78-8.6,8.48l-0.84,62.66c-0.03,2.38-1.34,4.57-3.43,5.72c-7.75,4.28-15.51,8.56-23.26,12.83\r
	C374.8,321.78,373.5,321.01,373.5,319.8z"/>\r
<path class="nte-st" d="M384.38,320.18c-0.95,1-0.83,2.42-0.1,3c0.5,0.4,1.3,0.41,2,0.07c5.44-3.15,10.89-6.3,16.33-9.45\r
	c1.33-0.66,1.65-2.2,1.1-2.96c-0.51-0.72-1.92-0.96-3-0.1C395.27,313.88,389.82,317.03,384.38,320.18z"/>\r
<path class="nte-st" d="M424.55,297.63c-0.76,0.52-1.15,1.36-0.97,2.01c0.25,0.9,1.63,1.59,3.01,0.96c5.29-3.41,10.57-6.82,15.86-10.23\r
	c0.76-0.52,1.15-1.36,0.97-2.01c-0.25-0.9-1.63-1.59-3.01-0.96C435.12,290.81,429.84,294.22,424.55,297.63z"/>\r
</svg>\r
`,Cl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.otori_emu-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="otori_emu-st" d="M121.5,141.5c3.24-10.58,19.15-58.38,68-84c27.5-14.42,54.04-15.84,70-15c11.48,0.61,50.39,3.23,82,33\r
	c20.88,19.66,29,42.15,34,56c7.72,21.38,9.64,40.3,10,53"/>\r
<path class="otori_emu-st" d="M385.5,206.5c-0.33,6.13-1.56,15.5-6,26c-4.59,10.87-10.73,18.47-15,23c1.15-3.51,2.22-7.53,3-12\r
	c1.49-8.51,1.48-16.05,1-22"/>\r
<path class="otori_emu-st" d="M132.5,127.5c-3.36,5.35-6.64,9.35-9,12c-5.56,6.24-13.38,15.01-26,19c-4.58,1.45-8.53,1.86-11,2\r
	c1.77,2.31,4.66,5.45,9,8c8.88,5.22,17.79,4.44,21,4c-1.15,5.86-2.28,14.12-2,24c0.24,8.56,0.51,17.96,5,29\r
	c2.2,5.42,9.15,22.8,26,30c2.44,1.04,4.57,1.65,6,2c1.23,1.01,2.56,2.02,4,3c6.38,4.34,12.75,6.68,18,8\r
	c-5.87-8.07-13.73-20.83-19-38c-8.56-27.9-5.49-51.97-5-52c0.18-0.01,0.07,3.17,2,7c1.56,3.09,3.8,5.35,6,7\r
	c-1.15-11.78-1.95-37.83,13-64c5.66-9.92,12.23-17.47,18-23c-2.97,4.92-6.89,12.72-9,23c-1.94,9.44-1.63,17.51-1,23\r
	c3.33,0.67,6.67,1.33,10,2c1.34-5.33,3.48-11.89,7-19c3.24-6.56,6.82-11.88,10-16c-2.2,5.08-4.57,11.83-6,20\r
	c-1.6,9.15-1.51,17.08-1,23c18.33,3.33,36.67,6.67,55,10c3.46-4,7.42-9.31,11-16c2.72-5.09,4.64-9.86,6-14c-0.44,4.7-1.09,9.72-2,15\r
	c-1.13,6.52-2.51,12.53-4,18c4.3-4.2,10.31-11.1,15-21c6.04-12.77,6.97-24.39,7-31c2.8,5.43,5.94,12.84,8,22\r
	c2.44,10.86,2.49,20.28,2,27c3.67,1.33,7.33,2.67,11,4c0.87-4.06,1.62-8.76,2-14c0.41-5.59,0.32-10.65,0-15\r
	c4.54,12.4,9.56,31.1,9,54c-1.07,43.8-21.87,74.89-31,87c5.05-0.87,12.84-2.89,21-8c12.23-7.66,18.41-17.95,21-23\r
	c-0.59,3.68-1.88,9.1-5,15c-3.26,6.17-7.2,10.42-10,13c6.44-0.99,27.25-5.05,41-23c10.69-13.96,12.1-29.78,13-40\r
	c0.91-10.3,0.02-18.96-1-25c2.08,2.02,9.77,8.99,22,10c11.97,0.99,20.56-4.36,23-6c-5.26-1.44-16.1-5.19-26-15\r
	c-8.3-8.22-12.21-17.01-14-22"/>\r
<path class="otori_emu-st" d="M156.5,191.5c3.71,6.84,3.75,11.72,3,15c-0.57,2.5-1.51,3.7-2,7c0,0-0.75,5.07,1,11c3.83,12.99,22,24,22,24\r
	c28.82,17.39,58.15,18.61,71,19c17.76,0.54,27.77-1.95,34-4c9.71-3.2,17.1-7.6,22-11"/>\r
<path class="otori_emu-st" d="M149.5,206.5c0.09,0.54,0.74,4.15,4,6c1.6,0.91,3.16,1.01,4,1"/>\r
<path class="otori_emu-st" d="M167.5,257.5c1.91-0.39,3.91-0.73,6-1c8.25-1.07,15.7-0.8,22,0"/>\r
<path class="otori_emu-st" d="M318.5,271.5c1.67,0.33,3.33,0.67,5,1"/>\r
<path class="otori_emu-st" d="M286.5,266.5c1.97,0.09,4.35,0.36,7,1c2.33,0.56,4.35,1.29,6,2"/>\r
<path class="otori_emu-st" d="M266.5,151.5c2.17-0.71,6.12-1.67,11-1c6.76,0.93,11.24,4.45,13,6"/>\r
<path class="otori_emu-st" d="M188.5,142.5c1.93-0.92,7.23-3.13,14-2c5.54,0.92,9.31,3.62,11,5"/>\r
<path class="otori_emu-st" d="M260.5,190.5c0.82-0.52,17.01-10.54,32-3c7.92,3.99,11.67,10.95,16,19c1.03,1.92,2.06,4.13,2,7\r
	c-0.12,5.66-4.41,9.65-6,11"/>\r
<path class="otori_emu-st" d="M259.5,215.5c-1.35-11.38,6.73-24.55,17-25c10.67-0.47,20.45,12.93,19,25c-1.1,9.14-8.88,19.51-19,19\r
	C266.78,234.01,260.48,223.77,259.5,215.5z"/>\r
<path class="otori_emu-st" d="M164.5,200.5c-0.85-1.72-2.33-5.34-2-10c0.31-4.38,2.07-7.43,3-9c3.34-5.65,10.7-12.42,21-13\r
	c9.65-0.55,18.91,4.5,24,13"/>\r
<path class="otori_emu-st" d="M175.5,200.5c-1.53-11.6,7.24-25.23,17-25c9.23,0.22,17.61,12.78,16,24c-1.33,9.28-9.73,19.18-19,18\r
	C181.4,216.47,176.42,207.46,175.5,200.5z"/>\r
<path class="otori_emu-st" d="M215.5,248.5c1.56,1.6,5.96,5.67,13,7c8.62,1.62,15.27-1.99,17-3"/>\r
<path class="otori_emu-st" d="M208.5,261.5c-1.78,1.96-2.59,3.76-3,5c0,0-0.44,1.34-1,7l0,0c-1.23,1.36-6.11,6.76-9,11\r
	c-0.41,0.61-1.12,1.67-1,3c0.16,1.82,1.77,2.97,3,4c0.31,0.26,2.21,2.51,6,7c1.85,2.19,4.2,5.64,6,11"/>\r
<path class="otori_emu-st" d="M276.5,265.5c-0.1,1.39-0.37,3.11-1,5c-1.31,3.91-3.55,6.55-5,8c3.1,6.4,6.41,10.93,9,14\r
	c1.94,2.3,3.12,3.36,3,5c-0.3,4.03-7.93,4.63-14,10c-2.99,2.65-6.31,7.09-8,15"/>\r
<path class="otori_emu-st" d="M203.5,259.5c-1.74,1.35-4.14,3.59-6,7c-4.05,7.41-2.52,14.84-2,17c-11,15-22,30-33,45\r
	c-0.68,0.69-1.86,2.09-2,4c-0.17,2.31,1.26,4.08,2,5c4.53,5.62,19.59,13.29,21,14"/>\r
<path class="otori_emu-st" d="M163.5,338.5c-1.16,1.14-2.87,3.12-4,6c-0.79,2.03-2.93,7.5,0,11c2.29,2.73,7.08,3.56,10,2\r
	c2.05-1.09,3.27-3.41,5-3c0.71,0.17,0.84,0.65,2,1c0.24,0.07,1.92,0.57,3,0c1.36-0.72,1.94-3.22,1-6"/>\r
<path class="otori_emu-st" d="M197.5,291.5c-3.7,11.64-6.26,21.58-8,29c-0.76,3.25-7.25,31.34-7,48c0.01,0.84,0.07,3.4,0,7\r
	c-0.13,6.75-0.6,12.27-1,16c3.17,1.82,8.31,4.21,15,5c3.46,0.41,6.52,0.29,9,0c0.92-15.32,1.6-27.52,2-35c1.32-24.44,6.5-48.57,8-73\r
	c0.18-2.93,0.61-10.94,6-18c1.87-2.45,3.82-4.09,5-5"/>\r
<path class="otori_emu-st" d="M259.5,267.5c-0.5,2.08-1.29,5.61-2,10c-5.69,35.03,4.78,55.16,7,96c0.35,6.53,0.66,16.56,0,29\r
	c4.1,0.99,12.98,2.52,23-1c4.78-1.68,8.44-4.02,11-6c-0.46-3.92-0.78-7.3-1-10c-0.33-4.06-0.35-5.33,0-7c0.56-2.69,1.42-3.41,2-6\r
	c0.5-2.22,0.5-4.56,0-7"/>\r
<path class="otori_emu-st" d="M284.5,263.5c1.18,0.98,3.57,3.25,5,7c0.22,0.57,1.49,4.01,1,8c-1.1,8.98-10.22,13.62-11,14"/>\r
<path class="otori_emu-st" d="M286.5,287.5c4.01,6.03,8.02,12.36,12,19c8.07,13.47,15.02,26.55,21,39c0.75,0.91,1.99,2.69,2,5\r
	c0,1.07-0.25,3.43-4,7c-5.16,4.91-11.58,7.03-16,8c-0.63,0.21-2.63,0.79-5,0c-0.63-0.21-2.58-0.95-4-3c-8-15.33-16-30.67-24-46"/>\r
<path class="otori_emu-st" d="M317.5,357.5c1.16,1.27,3.3,4,4,8c0.29,1.66,1.31,7.44-2,10c-3.27,2.53-9.74,1.09-12-2c-0.58-0.79-1.04-1.9-2-2\r
	c-1.24-0.12-1.91,1.55-4,2c-0.8,0.17-1.5,0.1-2,0"/>\r
<path class="otori_emu-st" d="M224.5,267.5c0.52,2.3,2.12,7.79,7,11c7.16,4.7,18.69,2.73,27-6"/>\r
<path class="otori_emu-st" d="M224.5,268.5c-1.26,3.97-2.48,9.04-3,15c-0.39,4.53-0.3,8.58,0,12c10,1,20,2,30,3c-0.31-2.93-0.43-7.58,1-13\r
	c1.31-4.95,3.41-8.65,5-11"/>\r
<path class="otori_emu-st" d="M206.5,388.5c2.51,1.16,5.52,2.26,9,3c9.61,2.05,17.93,0.31,23.11-1.35c1.13-0.36,1.89-1.4,1.89-2.59v-3.83\r
	c0-0.63,0.59-1.09,1.2-0.93c0.41,0.1,0.82,0.21,1.23,0.31c0.92,0.23,1.57,1.06,1.57,2.01v4.53c0,1.11,0.72,2.09,1.79,2.39\r
	c2.08,0.59,4.5,1.13,7.21,1.45c4.33,0.52,8.09,0.35,11,0"/>\r
<path class="otori_emu-st" d="M239.5,389.5c-0.64,17.47-0.98,35.14-1,53c0,1.33,0,2.67,0,4c-0.03,0.7-0.2,1.9-1,3c-0.9,1.23-2.16,1.7-3,2\r
	c-5.44,1.94-8.17,2.9-12,3c-3.91,0.1-7.29,0.18-9-2c-1.14-1.46-1.03-3.3-1-4c0.59-12.39-2.78-24.66-4-37c-0.45-4.56-1.29-11.1-3-19"\r
	/>\r
<path class="otori_emu-st" d="M212.5,436.5c2.25,0.88,5.31,1.77,9,2c8.01,0.5,14.17-2.41,17-4"/>\r
<path class="otori_emu-st" d="M279.5,403.5c0.44,7.86,0.53,16.58,0,26c-0.4,7.15-1.11,13.84-2,20c-0.11,0.74-0.37,1.84-1,3\r
	c-2.8,5.15-10.09,5.82-12,6c-1.59,0.15-9.96,0.92-12-3c-0.67-1.28-0.11-2.01,0-9c0,0,0-0.29,0-4c-0.01-8.49-3.52-25.62-4-28\r
	c-1.1-5.48-2.38-13.27-3-23"/>\r
<path class="otori_emu-st" d="M252.5,439.5c1.91,0.84,4.26,1.62,7,2c9.61,1.33,17.24-3.17,20-5"/>\r
<path class="otori_emu-st" d="M260.5,180.5c0.65-0.76,1.94-2.07,4-3c2.11-0.95,4-1.03,5-1"/>\r
<path class="otori_emu-st" d="M208.5,169.5c-0.26-0.7-0.82-1.92-2-3c-1.97-1.8-4.3-1.98-5-2"/>\r
<path class="otori_emu-st" d="M209.5,339.5c5.4,1.92,11.77,3.74,19,5c13.02,2.27,24.39,1.96,33,1"/>\r
<path class="otori_emu-st" d="M211.5,327.5c4.86,2.23,11.26,4.58,19,6c12.03,2.2,22.24,1.22,29,0"/>\r
<path class="otori_emu-st" d="M233.5,345.5c-0.51,5.8-0.81,10.87-1,15c-0.49,10.92-0.06,14.14,2,17c2.05,2.84,4.94,4.26,7,5"/>\r
<path class="otori_emu-st" d="M287.5,352.5c3.24-0.17,8.86-0.87,15-4c6.88-3.51,11.01-8.32,13-11"/>\r
<path class="otori_emu-st" d="M270.5,383.5c3.51-0.02,7.56-0.28,12-1c5.9-0.96,10.95-2.47,15-4"/>\r
<path class="otori_emu-st" d="M168.5,320.5c1.46,1.63,3.12,3.31,5,5c4.55,4.07,9.1,6.95,13,9"/>\r
<path class="otori_emu-st" d="M182.5,373.5c2.28,1.37,4.94,2.76,8,4c6.08,2.47,11.65,3.54,16,4"/>\r
<path class="otori_emu-st" d="M343.5,217.5c-0.08,4.26-0.58,9.38-2,15c-3.23,12.74-9.61,21.8-14,27"/>\r
<path class="otori_emu-st" d="M130.5,219.5c1.71,5.49,4.22,12.01,8,19c4.58,8.47,9.65,15.1,14,20"/>\r
</svg>\r
`,wl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.phantoms-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="phantoms-st" d="M174.96,394.82c2.22,0.46,4.21,1.72,5.56,3.55c3.65,4.95,7.23,8.61,9.98,11.14c0,0,9.97,9.15,28,15\r
	c1.86,0.6,5.3,1.62,7,0c0.82-0.78,0.95-1.91,1-5c0.12-7.53-0.57-7.91,0-9c2.26-4.31,15.38-2.79,24,0c10.92,3.53,14,5,14,5\r
	c1.02,0.49,3.07,1.5,6,2c0,0,3.37,0.58,7,0c14.47-2.3,31-22,31-22c12.27-14.63,22.44-26.87,32.13-38.71\r
	c1.21-1.48,2.77-2.61,4.55-3.3c10.11-3.92,22.87-10.29,35.32-20.99c13.34-11.47,23.92-25.83,25-25c0.88,0.68-5.76,10.47-5,11\r
	c0.51,0.36,4.04-3.82,5-5c28.78-35.29,22-67,22-67c-3.2-14.96-12.8-31.95-25-37c-1.82-0.75-6.63-2.46-12-4\r
	c-6.14-1.76-11.58-3.33-18-4c-12.53-1.31-24.91,1.17-34,3c-2.24,0.45-6.88,1.43-7,1c-0.19-0.69,11.23-4.14,11-5\r
	c-0.14-0.53-4.75,0.14-9,1c-12.08,2.45-16.61,8.12-21,6c-2.49-1.2-3.44-4.08-4-6c-9.31-31.85-6-58-6-58c3.9-30.78,5.85-46.16,8-53\r
	c0.46-1.46,3.33-10.45,0-13c-0.67-0.51-1.31-0.56-5-1c-6.85-0.82-6.53-0.88-8-1c-19.67-1.62-45,2-45,2c-11.38,1.63-19.89,3.52-22,4\r
	c-14.52,3.28-44.43,10.05-78,30c-21.78,12.95-39.12,23.26-51,45c-5.1,9.34-7.78,18.2-9.26,25.14c-0.43,2.02,0.84,4.03,2.85,4.5\r
	c0.45,0.1,0.92,0.22,1.41,0.36c6.19,1.72,10.32,4.77,12,6c20.11,14.79,40,43,40,43c5.32,7.54,12.16,17.63,19.73,29.93\r
	c0.72,1.17,1.07,2.54,0.93,3.9c-0.12,1.13-0.1,2.57,0.34,4.17c0.67,2.44,2.01,4.13,3.01,5.13c0.76,0.76,1.41,1.62,1.89,2.58\r
	c1.24,2.53,2.56,6.01,3.1,10.29c0.25,2,0.29,3.83,0.22,5.46c-0.07,1.51-1.09,2.79-2.53,3.24c-12.37,3.88-56.76,19.46-60.69,47.3\r
	c-0.21,1.51-0.59,4.34,0,8C118.65,381.21,161.54,392.03,174.96,394.82z"/>\r
<path class="phantoms-st" d="M241.5,389.5c1.33-3.05,5.46-11.39,15-17c7.46-4.38,14.58-4.95,18-5c-7.74-0.98-9.75-2.61-10-4\r
	c-0.71-3.93,11.82-9.98,23-12c3.42-0.62,14.27-2.57,16,1c2.17,4.5-11.44,15.05-14,17c6.23-1.88,11.37-3.16,15-4\r
	c5.16-1.19,9.79-2.08,10-4c0.13-1.22-1.65-1.46-2-3c-0.96-4.29,11.46-8.35,11-14c-0.16-1.98-1.77-2.04-2-4\r
	c-0.68-5.89,12.67-15.5,21-12c2.62,1.1,5.33,3.74,5,6c-0.41,2.77-5.26,4.19-8,5c-2.91,0.85-5.41,1-7,1c2.87,1.29,5.34,1.79,7,2\r
	c4.09,0.53,8.72-0.98,18-4c1.38-0.45,3.38-1.13,5-3c1.23-1.42,1.75-2.96,2-4c1-0.29,11.9-3.67,15-14c1.41-4.71,0.6-8.85,0-11\r
	c-0.94,1.35-2.84,3.64-6,5c-1.09,0.47-2.79,1.18-5,1c-0.17-0.01-4.04-0.36-5-2c-2.54-4.32,17.69-12.98,19-28\r
	c0.71-8.18-4.34-16.38-1-22c0.34-0.58,1.98-3.15,4-7c1.11-2.11,1.84-3.67,2-4c1.39-2.89,4.9-7.85,14-17c-8.91,1.63-13.77,5.1-16,7\r
	c-3.18,2.72-6,6-6,6c-3.67,4.28-3.27,5.12-5,6c-1.87,0.95-3.38,0.49-14-2c-5.38-1.26-6.43-1.48-8-1c-3.34,1.02-3.35,3.48-7,6\r
	c-2.72,1.88-5.82,2.25-12,3c-6.16,0.74-10.57,1.28-12-1c-0.73-1.17-0.45-2.72,0-4c-1.07,0.6-5.85,3.45-7,9c-0.07,0.32-1.28,6.57,2,9\r
	c2.2,1.62,5.26,0.69,8,0c8.03-2.02,18.9-4.53,21-2c2.36,2.85-4.86,14.08-14,23c-17.54,17.12-40.17,23.85-42,21\r
	c-0.26-0.41,0.07-0.76,0-3c0,0-0.1-3.3-1-6c-2.06-6.16-15.13-7.79-17-8c-5.13-0.58-8.53-0.97-12,1c-2.97,1.69-4.98,5.13-9,12\r
	c-1.91,3.26-2.61,4.97-3,6c-1.36,3.6-1.83,6.8-2,9c-0.73-1.5-1.53-3.52-2-6c-0.72-3.76-0.39-6.95,0-9c-2.06,3.05-3.26,5.84-4,8\r
	c-1.58,4.63-1.75,8.53-2,15c-0.14,3.67-0.09,6.75,0,9c1.14,0.47,2.77,1.35,4,3c4.73,6.37-2.84,15.89-3,30\r
	C238.46,377.38,238.96,382.86,241.5,389.5z"/>\r
<path class="phantoms-st" d="M180.5,389.5c3.07-1.23,8.45-2.85,15-2c3.3,0.43,11.27,1.46,16,8c1.88,2.59,2.65,5.23,3,7c-1,0-2,0-3,0\r
	c0.62,1.84,0.34,2.62,0,3c-1.8,1.98-11.16-0.65-17-7c-2.77-3.02-6.23-8.49-9-8c-0.37,0.07-1.56,0.39-3,0\r
	C181.59,390.26,180.92,389.82,180.5,389.5z"/>\r
<path class="phantoms-st" d="M97.5,165.5c-0.29,4.23-0.17,12.21,5,17c8.53,7.91,24.83,1.57,34-2c8.02-3.12,22.45-10.24,36-27"/>\r
<path class="phantoms-st" d="M194.5,133.5c12.4-12.78,33.74-31.32,65-44c16.9-6.85,32.44-10.27,45-12"/>\r
<path class="phantoms-st" d="M151.5,388.5c3.34-0.71,6.08-0.93,8-1c1.11-0.04,1.6-0.02,5,0c0,0,2.55,0.01,7,0c3.56-0.01,24.21-3.25,43-20\r
	c14.38-12.82,21.01-27.6,24-36"/>\r
<path class="phantoms-st" d="M255.5,300.5c0.04-4.18,1.06-7.09,2-9c1.43-2.89,2.86-3.84,4-7c1.23-3.41,1.01-6.3,1-7\r
	c-0.1-5.47,9.89-27.6,41-49c22.14-15.23,44.67-22.99,63-27"/>\r
</svg>\r
`,Tl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.phoebe-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="phoebe-st" d="M104.66,223.27c-1.23,5.61-2.71,14.17-2.85,24.73c-0.13,9.33,0.79,19.77,2.85,19.97\r
	c2.15,0.21,4.02-10.68,6.66-10.46c1.92,0.16,1.77,5.99,5.23,12.84c2.37,4.7,7.81,12.62,10.94,11.89c6.32-1.48-4.46-36.6,7.61-74.18\r
	c4.72-14.7,11.69-25.87,17.12-33.28"/>\r
<path class="phoebe-st" d="M150.78,240.87c0.65-14.42,1.92-21.71,3.8-21.87c1.71-0.15,3.93,5.56,6.66,17.12"/>\r
<path class="phoebe-st" d="M180.26,233.26c0.49-4.22,1.8-10.88,5.71-18.07c3.09-5.69,6.74-9.74,9.51-12.36"/>\r
<path class="phoebe-st" d="M206.89,168.59c-7.13,16.02-10.56,29.89-12.36,39.94c-3.26,18.21-1.04,23.34,1.9,25.68\r
	c2.43,1.92,6.37,1.92,14.26,1.9c7.86-0.02,12.18-0.02,16.17-2.85c4.63-3.29,4.6-7.39,7.61-7.61c3.42-0.25,4.29,4.96,9.51,8.56\r
	c3.72,2.56,10.14,2.38,22.82,1.9c14.58-0.55,17.22-1.79,19.02-3.8c2.95-3.29,2.91-7.79,2.85-10.46c-0.46-20.4-1.45-38.76-1.9-46.6"\r
	/>\r
<path class="phoebe-st" d="M315.3,232.31c0.25-0.92,2.9-10.61,5.71-10.46c2.14,0.12,4.03,5.94,4.75,14.26"/>\r
<path class="phoebe-st" d="M340.98,243.72c1.91-1.54,5.2-4.59,7.61-9.51c2.53-5.17,2.86-9.88,2.85-12.36"/>\r
<path class="phoebe-st" d="M350.49,204.73c1.8,7.42,3.8,18.27,3.8,31.38c0.02,44.28-22.64,81.99-16.17,85.59\r
	c2.23,1.24,6.46-2.41,7.61-0.95c1.2,1.53-3.3,5.71-6.66,14.26c-1.24,3.17-3.84,9.8-1.9,11.41c2.79,2.32,13.82-6.65,16.17-8.56\r
	c7.82-6.36,25.58-25.46,43.74-91.29"/>\r
<path class="phoebe-st" d="M125.1,264.64c3.33-5.01,9.05-12.37,18.07-19.02c3.72-2.75,10.34-7.55,19.97-10.46\r
	c14.54-4.4,27.44-1.91,34.24,0"/>\r
<path class="phoebe-st" d="M268.7,240.87c5.95-3.64,16.16-8.67,29.48-9.51c30.89-1.96,51.92,20.25,55.16,23.77"/>\r
<path class="phoebe-st" d="M119.4,276.05c-0.27,1.14-0.8,2.88-1.9,4.75c-2.25,3.84-4.91,4.91-7.61,7.61c-1.25,1.25-4.72,5.11-5.71,10.46\r
	c0,0-0.79,4.28,0.95,9.51c2.77,8.35,13.54,16.74,28.53,21.87"/>\r
<path class="phoebe-st" d="M310.54,342.62c3.25-0.14,6.75-0.43,10.46-0.95c6.46-0.9,12.2-2.29,17.12-3.8"/>\r
<path class="phoebe-st" d="M175.51,340.72c14.02,1.49,29.28,2.55,45.65,2.85c15.25,0.29,29.56-0.11,42.79-0.95"/>\r
<path class="phoebe-st" d="M136.52,336.92c-2.93-3.72-4.8-9.53-2.85-11.41c1.22-1.18,3.96-0.83,5.71,0c2.66,1.26,2.85,3.53,4.75,3.8\r
	c1.87,0.27,2.71-1.78,4.75-2.85c7.08-3.74,20.04,8.7,21.87,10.46c3.36,3.23,5.28,5.07,4.75,6.66c-1.26,3.8-15.28,2.18-21.87,0.95\r
	C146.44,343.18,140.5,341.98,136.52,336.92z"/>\r
<path class="phoebe-st" d="M285.82,349.28c14.77-0.02,19.38-0.14,22.82-3.8c2.11-2.25,4.2-6.28,2.85-9.51c-1.64-3.95-7.53-4.65-8.56-4.75\r
	c-8.01-0.81-10.14,5.73-19.97,6.66c-5.71,0.54-6.85-1.5-11.41,0c-5.38,1.77-10.44,6.78-9.51,9.51\r
	C262.63,349.08,265.36,349.3,285.82,349.28z"/>\r
<path class="phoebe-st" d="M135.56,335.97c-0.95,0.83-2.48,2.44-2.85,4.75c-0.55,3.44,1.79,6.31,2.85,7.61\r
	c8.39,10.28,30.94,9.24,45.65,8.56c2.16-0.1,5.82-0.32,7.61-2.85c2.9-4.11-1.25-11.27-1.9-12.36"/>\r
<path class="phoebe-st" d="M194.53,416.8c14.96-15.42,10-37.87,9.51-39.94c-3.01-12.67-10.77-20.6-14.26-23.77"/>\r
<path class="phoebe-st" d="M137.47,350.23c-2.41,2.34-5.99,6.14-9.51,11.41c-3.42,5.12-12.7,18.98-11.41,37.09\r
	c0.44,6.25,0.92,13.02,5.71,19.02"/>\r
<path class="phoebe-st" d="M262.04,348.33c-1.09,1.24-2.24,2.98-1.9,4.75c1.22,6.45,21,7.9,32.33,7.61c8.86-0.23,29.06-0.75,32.33-10.46\r
	c1.05-3.11,0.07-6.31-0.95-8.56"/>\r
<path class="phoebe-st" d="M349.53,413.95c10.55-14.13,3.61-36.1-5.71-48.5c-6.4-8.52-14.29-13.01-19.02-15.22"/>\r
<path class="phoebe-st" d="M262.04,355.94c-0.72,5.78-1.22,14.03,0,23.77c1.29,10.3,2.51,20,8.56,28.53"/>\r
<path class="phoebe-st" d="M209.74,343.57c-1.32,3.89-2.6,8.01-3.8,12.36c-1.56,5.66-2.81,11.07-3.8,16.17"/>\r
<path class="phoebe-st" d="M243.98,414.9c0.32-7.61,0.64-15.21,0.95-22.82c0.32-7.93,0.64-15.85,0.95-23.77"/>\r
<path class="phoebe-st" d="M67.09,412.99c4.18-10.07,9.69-25.78,12.36-45.65c3.95-29.39,0.06-55.77-1.9-68.47\r
	c-3.58-23.2-7.9-32.22-6.66-53.25c0.83-13.94,3.58-24.41,4.75-28.53c5.94-20.87,15.92-35.88,22.82-44.7"/>\r
<path class="phoebe-st" d="M119.4,144.82c9.65-3.8,25.13-9.41,44.7-14.26c58.88-14.6,106.06-10.28,145.5-6.66\r
	c9.86,0.9,29.74,3,54.21,10.46c19.69,6.01,29.54,9.01,38.04,17.12c17.16,16.35,18.27,40.97,19.02,64.67\r
	c1.09,34.66-6.75,33.48-7.61,68.47c-0.99,40.49,9.26,52.97,6.66,98.9c-0.82,14.46-2.56,26.12-3.8,33.28"/>\r
<path class="phoebe-st" d="M98.48,172.4c-2.04-0.93-0.88-7.43,0-10.46c3.74-12.84,18.81-19.31,20.92-17.12\r
	C122.46,148.01,103.05,174.49,98.48,172.4z"/>\r
<path class="phoebe-st" d="M94.67,178.1c-17.36,12.72-22.37,13.73-23.77,12.36c-1.86-1.82,3.01-7.48,6.66-21.87\r
	c2.61-10.28,1.17-11.54,3.8-16.17c3.94-6.93,12.5-13.54,22.82-13.31c7.6,0.17,13.04,3.98,15.22,5.71"/>\r
<path class="phoebe-st" d="M77.56,170.5c-11.99-0.49-21.36-5.72-23.77-13.31c-0.34-1.08-1.5-5.19,0.95-11.41\r
	c5.57-14.15,22.34-20.41,29.48-22.82c66.71-22.57,144.55-22.82,144.55-22.82c3.04-0.01,53.29-0.05,120.77,5.71\r
	c0,0,76.93,6.56,99.85,35.19c0.83,1.04,3.56,4.61,3.8,9.51c0.66,13.08-16.7,28.59-30.43,25.68c-3.36-0.71-5.91-2.4-7.61-3.8"/>\r
<path class="phoebe-st" d="M156.49,105.83c8.72-7.92,23.26-19.31,43.74-27.58c41.37-16.71,78.58-9.25,95.1-5.71\r
	c36.7,7.87,62.72,25.51,77.03,37.09"/>\r
<path class="phoebe-st" d="M195.48,80.15c0.45,1.75,1.45,4.45,3.8,6.66c4.77,4.47,12.88,4.88,18.07,1.9c4.11-2.36,4.73-5.9,7.61-5.71\r
	c2.52,0.17,2.84,2.94,6.66,4.75c1.77,0.84,4.06,0.89,8.56,0.95c6.83,0.09,10.25,0.14,12.36-0.95c4.3-2.22,5.07-6.07,7.61-5.71\r
	c1.63,0.24,1.89,1.91,3.8,3.8c3.04,3,7.03,3.34,12.36,3.8c6.04,0.52,10.62,0.92,14.26-1.9c3.14-2.43,3.37-5.55,5.71-5.71\r
	c2.15-0.15,3.29,2.4,5.71,4.75c5.75,5.61,16.54,7.97,21.87,3.8c1-0.78,3.1-2.8,3.8-7.61"/>\r
<path class="phoebe-st" d="M142.22,287.47c-0.29-18.99,16.74-39.52,37.09-37.09c17.55,2.09,30.35,20.4,28.53,37.09\r
	c-2.42,22.23-30.26,36.81-48.5,28.53C148.36,311.01,142.39,298.43,142.22,287.47z"/>\r
<path class="phoebe-st" d="M156.49,257.99c0.41,3.04,1.62,8.19,5.71,12.36c7.62,7.8,19.98,6.82,27.58,3.8c6.45-2.56,10.42-6.97,12.36-9.51\r
	"/>\r
<path class="phoebe-st" d="M266.8,294.12c-6.01-21.98,15.41-48.53,38.99-46.6c16.23,1.33,31.73,16,32.33,34.24\r
	c0.69,20.85-18.37,37.57-38.04,37.09C285.08,318.48,270.62,308.12,266.8,294.12z"/>\r
<path class="phoebe-st" d="M285.82,252.28c-1.54,5.09-0.77,8.5,0,10.46c4.47,11.34,25.88,16.22,37.09,7.61c3.71-2.85,5.63-6.65,6.66-9.51"\r
	/>\r
<path class="phoebe-st" d="M228.76,312.19c2.07,1.72,3.67,1.99,4.75,1.9c1.55-0.12,2.03-0.95,3.8-0.95c1.9,0,2.43,0.96,3.8,0.95\r
	c1.11-0.01,2.74-0.64,4.75-3.8"/>\r
<path class="phoebe-st" d="M338.12,180.96c-1.44,3.05-0.1,7.61,2.85,9.51c2.53,1.63,5.35,0.71,10.46-0.95c5.08-1.65,8.13-2.65,9.51-5.71\r
	c1.42-3.15,0.72-7.74-1.9-9.51c-1.77-1.2-5.01-0.18-11.41,1.9C339.29,178.92,338.47,180.22,338.12,180.96z"/>\r
<path class="phoebe-st" d="M343.83,177.15c-2.16-2.87-3.06-5.9-1.9-7.61c0.56-0.82,1.64-1.18,3.8-1.9c2.96-0.98,4.44-1.48,5.71-0.95\r
	c2.04,0.85,3.11,3.98,2.85,7.61"/>\r
<path class="phoebe-st" d="M346.68,190.47c0.45,4.47,2.28,8.03,4.75,8.56c1.19,0.26,2.5-0.19,4.75-0.95c2.17-0.73,3.25-1.1,3.8-1.9\r
	c1.21-1.75-0.05-5.21-2.85-8.56"/>\r
<path class="phoebe-st" d="M243.03,343.57c-0.21,0.61-0.55,1.61-0.95,2.85c-1.22,3.74-1.27,4.23-1.9,4.75c-1.08,0.89-1.83,0.21-4.75,0.95\r
	c-1.19,0.3-3.76,0.95-3.8,1.9c-0.03,0.69,1.56,1.42,4.75,2.85c2.77,1.25,3.14,1.21,3.8,1.9c1.08,1.12,0.86,1.97,1.9,4.75\r
	c0.85,2.25,1.8,4.77,2.85,4.75c1.32-0.02,2.47-4.02,2.85-5.71c0.51-2.26,0.18-2.88,0.95-3.8c0.86-1.03,2.17-1.33,4.75-1.9\r
	c2.59-0.57,3.68-0.45,3.8-0.95c0.19-0.75-1.94-2.11-3.8-2.85c-2.98-1.19-4.53-0.49-5.71-1.9c-0.24-0.29-0.43-0.62-0.95-2.85\r
	c-0.46-1.98-0.76-3.62-0.95-4.75"/>\r
<path class="phoebe-st" d="M245.88,369.25c0.46,1.78,1.63,5.32,4.75,8.56c4.38,4.54,9.69,5.48,11.41,5.71"/>\r
<path class="phoebe-st" d="M248.73,360.69c0.68,1.17,1.61,2.49,2.85,3.8c3.38,3.55,7.27,5.05,9.51,5.71"/>\r
<path class="phoebe-st" d="M245.88,370.2c2.16,16.03,3.9,28.28,4.75,34.24c0.13,0.93,0.44,2.88,1.9,3.8c1.33,0.84,3.01,0.43,4.75,0\r
	c2.2-0.54,4.55-1.12,5.71-2.85c1.42-2.13,0.31-4.96-0.95-8.56c-1.27-3.61-2.96-8.73-4.75-15.22"/>\r
</svg>\r
`,El=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.pikachu-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="pikachu-st" d="M108,85c11.86,0.87,27.1,3.2,44,9c24.93,8.56,43.1,21.13,54.5,30.5c9.58-2.61,22.56-5.08,38-5\r
	c21.05,0.11,38.01,4.9,49,9c16.36-4.93,39-9.64,66-9c13.52,0.32,25.62,1.93,36,4c-7.25,5.34-15.57,10.81-25,16\r
	c-21,11.57-40.87,18.14-57,22c0.89,7.28,1.56,13.13,2,17c0.94,8.32,1.16,10.87,2,15c1.48,7.28,3.33,11.87,4,14\r
	c2.11,6.67,1.77,17.78-10,37c11.11,7.31,19.37,14.55,25,20c0,0,23.32,22.58,24,40c0.11,2.73-1,5-1,5c-0.37,0.77-1.55,3.17-4,4\r
	c-0.82,0.28-1.89,0.19-4,0c-3.3-0.3-4.96-0.45-6-1c-2.08-1.1-2.05-2.6-4-5c-2.03-2.5-4.32-3.65-7-5c-4.78-2.41-9.26-2.92-12-3\r
	c0.94,12.2,2.53,35.17,3,61c0.12,6.55,0.2,15.97-4,27c-2.76,7.23-6.38,12.61-9,16c14.02,8.25,17.4,11.17,17,12\r
	c-0.3,0.64-3.05,0.49-5,0c-1.88-0.47-2.82-1.22-3-1c-0.58,0.7,8.98,8.51,8,10c-0.7,1.07-6.66-1.44-8-2c-4.18-1.76-6.53-3.52-7-3\r
	c-0.67,0.75,3.79,4.85,3,6c-0.87,1.27-7.5-1.86-12-4c-16.33-7.78-20.38-9.82-23-11c-9.38-4.22-17.05-4.92-29-6\r
	c-13.91-1.26-26.33-2.38-40,3c-2.31,0.91-7.87,3.94-19,10c-10.91,5.94-20.74,11.63-22,10c-0.47-0.6,0.23-2.21,1-4\r
	c1.08-2.49,2.31-3.65,2-4c-0.35-0.4-2.05,0.92-5,2c-1.93,0.71-5.58,1.75-6,1c-0.72-1.3,8.41-7.4,8-8c-0.18-0.26-2.06,0.75-7,3\r
	c-4.62,2.11-4.91,2.11-5,2c-0.39-0.48,2.55-3.96,17-17c-3.42-2.18-8.83-6.24-13-13c-4.11-6.66-5.4-13.31-6-20\r
	c-2.25-25.19,4.1-64.53,5-70c-8.15,4.32-14.1,7.71-16,9c-0.95,0.65-1.56,1.22-2,2c-0.84,1.51-0.28,2.4-1,3c-1.18,0.98-3.21-1.05-5,0\r
	c-0.81,0.48-0.7,1.07-2,2c0,0-0.95,0.68-2,1c-2.56,0.79-7.2-2.02-9-6c-1.56-3.45-0.62-6.97,0-9c3.19-10.51,9.05-18.62,13-24\r
	c9.08-12.38,13.71-18.63,18-22c6.05-4.75,11.92-7.45,16-9c-11.61-14.19-12.1-25.88-12-30c0.16-6.69,2.39-15.64,3-18\r
	c1.83-7.06,2.6-6.91,4-13c2.16-9.41,0.89-12.22,3-20c1.41-5.19,3.42-9.26,5-12c-12.72-7.18-29.77-18.81-46-37\r
	C120.55,105.34,113.28,94.38,108,85z"/>\r
<path class="pikachu-st" d="M131.5,88.5c0.4,4.34,1.03,9.03,2,14c1.8,9.22,4.36,17.27,7,24"/>\r
<path class="pikachu-st" d="M372.5,120.5c-1.39,2.87-3.03,5.89-5,9c-5.17,8.17-10.93,14.4-16,19"/>\r
<path class="pikachu-st" d="M201.5,165.5c2.3,0.32,4.2,1.55,8,4c2.25,1.45,3.38,2.18,4,3c2.76,3.64,1.92,10.71-2,15\r
	c-4.23,4.63-12.19,6.19-18,2c-6.32-4.55-6.97-13.64-3-19C192.97,167.16,197.49,164.94,201.5,165.5z"/>\r
<path class="pikachu-st" d="M274.5,175.5c1.4-2,3.28-3.05,5-4c2.19-1.21,6.27-3.47,10.37-2.39c5.36,1.41,8.53,7.93,8.63,13.39\r
	c0.01,0.87,0.02,9.58-7,13c-5.28,2.57-11.42,0.6-15-3C271.72,187.69,271.43,179.9,274.5,175.5z"/>\r
<path class="pikachu-st" d="M237.5,196.5c0.34-1.1,3.45-1.04,6-1s4.69,0.08,5,1c0.4,1.17-2.14,3.8-5,4\r
	C240.24,200.73,237.12,197.74,237.5,196.5z"/>\r
<path class="pikachu-st" d="M221.5,216.5c0.99,0.97,2.65,2.35,5,3c6.37,1.76,9.38-4.17,17-4c6.26,0.14,8.14,4.22,14,3\r
	c2.69-0.56,4.71-1.93,6-3"/>\r
<path class="pikachu-st" d="M168.5,216.5c-0.51-7.02,5.97-13.21,13-13c6.01,0.18,11.54,5.02,12,11c0.56,7.35-6.74,13.75-14,13\r
	C174.01,226.93,168.92,222.31,168.5,216.5z"/>\r
<path class="pikachu-st" d="M293.5,217.5c0.25-6.55,5.88-11.51,12-12c6.76-0.54,13.27,4.45,14,11c0.85,7.57-6.33,14.55-14,14\r
	C299.13,230.04,293.23,224.45,293.5,217.5z"/>\r
<path class="pikachu-st" d="M158.5,360.5c-9.33-4-18.67-8-28-12c4.33-5.67,8.67-11.33,13-17c-11.67-6.67-23.33-13.33-35-20\r
	c10.33-15.67,20.67-31.33,31-47c-15.67-9-31.33-18-47-27c8.67-11.33,17.33-22.67,26-34c-16.33-6.33-32.67-12.67-49-19\r
	c-0.33-26.67-0.67-53.33-1-80c32,23.33,64,46.67,96,70c-11,16-22,32-33,48c12,8.67,24,17.33,36,26"/>\r
<path class="pikachu-st" d="M146.5,309.5c4.67,2.67,9.33,5.33,14,8"/>\r
<path class="pikachu-st" d="M158.5,346.5c-1.33-1-2.67-2-4-3c1.33-1,2.67-2,4-3"/>\r
</svg>\r
`,Dl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.psg-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="psg-st" d="M63.15,260.23C58.89,154.72,144.6,62.98,251.55,62.17c108.51-0.82,195.51,92.3,191.3,198.06\r
	c-3.93,98.66-86.14,181.32-187.44,182.6C152.77,444.13,67.23,361.39,63.15,260.23z"/>\r
<path class="psg-st" d="M142.37,258.3c-2.61-60.67,45.98-114.61,108.21-115.94c62.21-1.32,113.58,50.46,113.04,112.07\r
	c-0.53,60.84-51.47,110.89-112.07,110.14C193.07,363.85,144.86,316.05,142.37,258.3z"/>\r
<path class="psg-st" d="M157.83,310.47c15.6-11.85,46.38-38.64,65.7-84.06c14.5-34.08,16.61-64.7,16.42-83.09"/>\r
<path class="psg-st" d="M266.04,142.36c-0.45,17.85,1.03,54.58,21.26,94.68c19.41,38.48,46.49,61.06,60.87,71.5"/>\r
<path class="psg-st" d="M209.04,254.43c28.98-0.32,57.97-0.64,86.95-0.97"/>\r
<path class="psg-st" d="M208.07,354.91c-2.8-5.12-7.44-15.48-5.8-28.02c2.95-22.49,24.88-42.35,50.24-42.51\r
	c24.32-0.15,45.7,17.84,50.24,39.61c2.8,13.42-1.51,24.82-3.86,29.95"/>\r
<path class="psg-st" d="M253.48,336.56c1.44-0.47,1.8-3.08,1.93-3.86c1.01-6.16,5.49-7.51,5.8-13.53c0.13-2.51-0.88-4.89-2.9-9.66\r
	c-1.98-4.68-3.71-8.77-5.8-8.7c-1.79,0.06-3.01,3.15-4.83,7.73c-2.07,5.2-3.1,7.81-2.9,10.63c0.44,6.17,4.81,7.44,5.8,13.53\r
	c0.12,0.77,0.49,3.4,1.93,3.86C252.99,336.71,253.42,336.58,253.48,336.56z"/>\r
<path class="psg-st" d="M257.35,336.56c0.43,0.31,1.77-0.83,1.93-0.97c1.05-0.89,1.28-1.75,1.93-2.9c0.68-1.19,1.88-3.29,3.86-3.86\r
	c1.16-0.34,3.03-0.28,3.86,0.97c0.57,0.84,0.64,2.17,0,2.9c-0.85,0.96-2.38,0.21-2.9,0.97c-0.57,0.84,0.39,3.08,1.93,3.86\r
	c2.75,1.4,8.66-1.1,9.66-5.8c0.77-3.62-1.61-7.44-4.83-8.7c-3.6-1.41-7.05,0.85-8.7,1.93C258.46,328.67,256.46,335.93,257.35,336.56\r
	z"/>\r
<path class="psg-st" d="M248.48,336.35c-0.43,0.31-1.77-0.83-1.93-0.97c-1.05-0.89-1.28-1.75-1.93-2.9c-0.68-1.19-1.88-3.29-3.86-3.86\r
	c-1.16-0.34-3.03-0.28-3.86,0.97c-0.57,0.84-0.64,2.17,0,2.9c0.85,0.96,2.38,0.21,2.9,0.97c0.57,0.84-0.39,3.08-1.93,3.86\r
	c-2.75,1.4-8.66-1.1-9.66-5.8c-0.77-3.62,1.61-7.44,4.83-8.7c3.6-1.41,7.05,0.85,8.7,1.93\r
	C247.36,328.46,249.37,335.72,248.48,336.35z"/>\r
<path class="psg-st" d="M248.65,344.29c0-0.16,0.02-0.61,0.97-1.93c1.32-1.86,1.99-2.78,2.9-2.9c1.48-0.19,2.77,1.48,3.86,2.9\r
	c0.6,0.78,0.96,1.25,0.97,1.93c0.01,0.95-0.64,1.62-1.93,2.9c-1.38,1.37-2.08,2.06-2.9,1.93c-0.4-0.06-0.56-0.27-1.93-1.93\r
	C248.94,345.21,248.65,344.89,248.65,344.29z"/>\r
<path class="psg-st" d="M160.73,163.61c-9.98-9.34-19.97-18.68-29.95-28.02c5.8-6.44,11.59-12.88,17.39-19.32\r
	c4.61-3.69,11.14-3.62,15.46,0c4.7,3.94,5.65,11.15,1.93,16.42c-5.8,6.44-11.59,12.88-17.39,19.32"/>\r
<path class="psg-st" d="M190.68,142.36c1.29-17.71,2.58-35.43,3.86-53.14c11.59,12.56,23.19,25.12,34.78,37.68"/>\r
<path class="psg-st" d="M191.65,125.93c8.7-3.54,17.39-7.09,26.09-10.63"/>\r
<path class="psg-st" d="M247.69,124.97c0-13.85,0-27.7,0-41.54c8.37,0,16.75,0,25.12,0c5.91,1.17,10.25,6.03,10.63,11.59\r
	c0.44,6.46-4.55,12.6-11.59,13.53c-8.05,0-16.1,0-24.15,0"/>\r
<path class="psg-st" d="M267.01,108.54c4.51,7.09,9.02,14.17,13.53,21.26"/>\r
<path class="psg-st" d="M318.22,95.02c-5.8,13.53-11.59,27.05-17.39,40.58"/>\r
<path class="psg-st" d="M373.29,136.56c-4.51-8.42-10.09-13.08-13.53-15.46c-3.79-2.63-10.77-7.46-15.46-4.83\r
	c-2.24,1.25-3.69,4.05-3.86,6.76c-0.39,6.29,6.38,8.68,14.49,21.26c4.19,6.5,4.62,9.32,3.86,11.59c-1.09,3.28-4.6,5.22-6.76,5.8\r
	c-7.56,2.03-18.17-7.19-27.05-22.22"/>\r
<path class="psg-st" d="M150.1,352.01c-2.84-6.48-6.78-10.29-9.66-9.66c-1.28,0.28-2.65,1.5-2.9,2.9c-0.33,1.86,1.54,2.78,3.86,6.76\r
	c1.47,2.51,2.84,4.93,1.93,6.76c-0.76,1.53-2.76,1.91-2.9,1.93c-3.36,0.59-7.52-3.37-10.63-9.66"/>\r
<path class="psg-st" d="M144.31,369.41c6.12-2.9,12.24-5.8,18.36-8.7c-1.93,6.12-3.86,12.24-5.8,18.36"/>\r
<path class="psg-st" d="M152.04,365.54c2.58,2.25,5.15,4.51,7.73,6.76"/>\r
<path class="psg-st" d="M164.6,384.86c3.22-4.83,6.44-9.66,9.66-14.49"/>\r
<path class="psg-st" d="M174.26,390.66c2.58-4.83,5.15-9.66,7.73-14.49c1.29,6.76,2.58,13.53,3.86,20.29\r
	c2.58-4.83,5.15-9.66,7.73-14.49"/>\r
<path class="psg-st" d="M200.34,384.86c4.51,1.61,9.02,3.22,13.53,4.83"/>\r
<path class="psg-st" d="M207.11,387.76c-1.93,5.15-3.86,10.31-5.8,15.46"/>\r
<path class="psg-st" d="M223.53,400.32c1.93,0.32,3.86,0.64,5.8,0.97"/>\r
<path class="psg-st" d="M260.25,397.42c-0.38-0.39-3.46-3.45-7.73-2.9c-4.01,0.52-8,4.09-7.73,8.7c0.27,4.66,4.76,7.63,8.7,7.73\r
	c3.68,0.09,6.21-2.34,6.76-2.9c0-1.61,0-3.22,0-4.83c-2.25,0-4.51,0-6.76,0"/>\r
<path class="psg-st" d="M280.54,392.59c-4.19,0.64-8.37,1.29-12.56,1.93c0.64,5.15,1.29,10.31,1.93,15.46\r
	c4.51-0.64,9.02-1.29,13.53-1.93"/>\r
<path class="psg-st" d="M268.94,402.26c2.25-0.32,4.51-0.64,6.76-0.97"/>\r
<path class="psg-st" d="M291.16,398.39c3.22-0.97,6.44-1.93,9.66-2.9c2.22-1.19,2.99-3.88,1.93-5.8c-0.87-1.58-2.87-2.43-4.83-1.93\r
	c-2.9,0.97-5.8,1.93-8.7,2.9c1.61,5.15,3.22,10.31,4.83,15.46"/>\r
<path class="psg-st" d="M299.86,395.49c2.25,2.58,4.51,5.15,6.76,7.73"/>\r
<path class="psg-st" d="M317.25,397.42c-2.25-4.83-4.51-9.66-6.76-14.49c4.19,2.9,8.37,5.8,12.56,8.7c0-5.15,0-10.31,0-15.46\r
	c2.9,4.83,5.8,9.66,8.7,14.49"/>\r
<path class="psg-st" d="M338.51,386.8c-0.97-6.12-1.93-12.24-2.9-18.36c5.15,2.9,10.31,5.8,15.46,8.7"/>\r
<path class="psg-st" d="M337.54,379.07c2.25-1.93,4.51-3.86,6.76-5.8"/>\r
<path class="psg-st" d="M346.23,358.78c4.19,4.19,8.37,8.37,12.56,12.56"/>\r
<path class="psg-st" d="M366.52,363.61c-4.19-3.86-8.37-7.73-12.56-11.59c7.09,0.32,14.17,0.64,21.26,0.97\r
	c-4.19-3.54-8.37-7.09-12.56-10.63"/>\r
</svg>\r
`,Ol=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.qs-ui-st{fill:none;stroke:#000000;stroke-width:18;stroke-linecap:round;stroke-linejoin:round;}\r
</style>\r
<path class="qs-ui-st" d="M143.4,134.5C167,78.2,231.8,51.7,288,75.3c39.1,16.4,65.3,53.7,67.6,96c0,73.7-110.5,110.5-110.5,110.5\r
	c0.6,22.8,1.2,45.7,1.8,68.5"/>\r
<circle class="qs-ui-st" cx="250.4" cy="430.9" r="15.8"/>\r
</svg>\r
`,kl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.qunu-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="qunu-st" d="M138.5,128.5c-0.35-1.82-1.12-4.46-3-7c-4.99-6.76-14.36-8.21-21-7c-6.34,1.15-10.43,4.76-14,8\r
	c-4.94,4.48-5.87,7.3-12,17c-10.52,16.63-16.64,22.29-17,33c-0.09,2.7,0.23,4.42,1,6c3.53,7.24,15.26,8.84,22,8\r
	c11.42-1.42,21.24-11.37,26-25"/>\r
<path class="qunu-st" d="M84.5,186.5c-3.39,4.46-8.02,10.9-13,19c-5.42,8.82-9.48,16.72-11,20c-5.63,12.13-12.96,39.54-2,69\r
	c12.56,33.78,40.93,48.1,47,51c1.33,19.67,2.67,39.33,4,59c0.12,1.78,1.04,5.61,4,9c8.49,9.74,26.91,6.04,34,2\r
	c1.35-0.77,4.42-2.52,6-6c1.02-2.24,1-4.27,1-5c-0.02-5.2,0.42-20.76,1-42c5.73,0.9,12.09,1.63,19,2c7.26,0.39,13.96,0.32,20,0\r
	c0.66,24.6,1.11,42.52,1,48c-0.01,0.7-0.07,2.78,1,5c0.76,1.58,2.42,3.92,7,6c6.53,2.96,22.96,7.18,35-1c1.8-1.22,5.26-3.64,7-8\r
	c1.28-3.2,1.06-6.05,1-7c-0.43-6.68,0.04-25.42,1-52c23.28-7.18,40.48-14.83,53-19c0,0,25.48-10.61,40-6c1.57,0.5,5.34,1.62,8,5\r
	c2.02,2.57,2.58,5.38,3,11c1.09,14.62-0.97,18.51,2,24c1.95,3.61,4.78,5.51,7,7c9.85,6.62,23.68,6.13,33,0c1.7-1.12,6.32-4.24,9-10\r
	c1.61-3.47,1.88-6.53,2-8c0.79-9.91,2.28-28.67,4-53c2.29-9.43,6.07-23.42,12-40c6.54-18.29,9.22-21.57,12-30\r
	c12.4-37.55-6.46-75.98-9-81c-16-31.54-41.76-45.98-51-51c-22.51-12.21-42.34-13.98-65-16c-7.74-0.69-37.71-2.99-77,5\r
	c-22.12,4.5-55.83,14.02-93,36"/>\r
<path class="qunu-st" d="M274.5,346.5c0.33,7,0.67,14,1,21c1.45,2.01,4.3,5.42,9,8c1.9,1.04,8.45,4.51,17,3c2.66-0.47,10.79-2.35,16-10\r
	c3.27-4.8,3.87-9.65,4-12c0.67-8.67,1.33-17.33,2-26"/>\r
<path class="qunu-st" d="M390.5,116.5c0.32-1.03,5.31-16.12,18-19c15.87-3.6,32.47,14.44,31,27c-0.52,4.49-3.61,10.38-9,12\r
	c-4.83,1.45-10.05-0.95-13-4c-7.51-7.77-2.63-22.2-1-27c1.62-4.78,7.07-20.88,20-23c4.91-0.8,9.23,0.68,12,2"/>\r
<path class="qunu-st" d="M245.5,169.5c-6.97,1.51-10.28,4.45-12,7c-9.76,14.49,8.63,50.92,34,57c3.52,0.84,10.62,2.54,17-1\r
	c11.7-6.5,15.72-27.73,8-53"/>\r
<path class="qunu-st" d="M99.5,223.5c0.49-7.87,7.44-15.99,15-15c6.92,0.9,11.43,9.07,11,16c-0.49,7.87-7.44,15.99-15,15\r
	C103.58,238.6,99.07,230.43,99.5,223.5z"/>\r
<path class="qunu-st" d="M200.5,243.5c0.99-7.05,7.53-14.03,15-13c7.32,1.01,11.58,9.18,11,16c-0.61,7.18-6.71,14.45-14,14\r
	C204.82,260.02,199.42,251.2,200.5,243.5z"/>\r
<path class="qunu-st" d="M90.5,270.5c7.14-14.84,30.54-18.64,47-15c19.61,4.34,40.05,21.6,39,40c-0.11,1.98-0.82,9.97-7,16\r
	c-18.65,18.2-71.7,3.47-80-23C89.07,287.13,86.56,278.69,90.5,270.5z"/>\r
<path class="qunu-st" d="M110.5,291.5c-5.96-5.89-5.09-18.45,0-21c1.92-0.97,4.05-0.3,5,0c6.77,2.12,7.94,11.43,8,12\r
	c0.35,3.12,0.22,10.26-4,12C116.35,295.8,112.47,293.45,110.5,291.5z"/>\r
<path class="qunu-st" d="M141.5,299.5c-5.19-2.34-5.03-10.87-5-12c0.03-0.96,0.31-9.97,6-12c3.48-1.24,6.83,0.89,7,1\r
	c5.59,3.66,5.06,13.54,2,19c-0.63,1.12-1.73,3.02-4,4C145.56,300.34,143.27,300.3,141.5,299.5z"/>\r
</svg>\r
`,Al=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.rickrolling-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="rickrolling-st" d="M216.77,170.48c0.01,2.95,0.44,7.85,3.07,12.99c3.24,6.34,8.06,9.61,13.12,12.95\r
	c6.9,4.56,13.05,8.62,22.16,8.92c1.05,0.03,13.49,0.26,23.1-8.09c1.84-1.6,4.91-5.77,11.01-14.04c3.41-4.62,6.17-8.46,8-11.03\r
	c2.25-1.26,5.76-3.71,8.02-8.03c0.59-1.13,4.57-9.02,0.96-13c-1.19-1.31-2.84-1.79-4.03-1.99c-0.01-3.67-0.03-7.33-0.04-11\r
	c0.6-0.59,1.44-1.49,2.33-2.66c4.18-5.45,5.48-11.58,6.03-19c0.92-12.34,1.42-19.13-1.51-27.37c-6.69-18.82-24.78-26.9-29.27-28.89\r
	c-22.43-9.95-46.94-4.26-48.27,1.18c-0.16,0.67-0.1,1.84-0.99,3c-2.04,2.66-5.7,0.93-8.03,3.03c-2.47,2.23-0.15,5.78-1.97,10.01\r
	c-1.98,4.6-7.17,6.07-9.02,7.03c-5.29,2.74-9.22,14.71-1.8,57.01c-1.13-0.03-5.57-0.01-8.03,3.03c-2.7,3.33-1.22,8.01,0.04,12\r
	c0.87,2.75,3.21,10.23,10.1,12.96C213.76,170.3,215.59,170.46,216.77,170.48z"/>\r
<line class="rickrolling-st" x1="-5.84" y1="-0.2" x2="-5.84" y2="-0.2"/>\r
<path class="rickrolling-st" d="M283.16,133.23"/>\r
<path class="rickrolling-st" d="M219.44,207.47c-3.91,2.92-6.97,5.39-8.97,7.03c-5.81,4.78-7.78,6.86-11.97,9.04\r
	c-3.46,1.81-6.28,2.55-7.99,3.03c-17.49,4.89-44.1,16.51-55.93,20.21c-3.97,1.24-6.99,2.03-6.99,2.03c-0.2,0.07-1.15,0.27-2.43,0.6\r
	c0,0-0.81,0.21-1.57,0.42c-4.04,1.11-6.96,12.03-6.96,12.03c-3.49,11.91-5.23,17.86-5.91,23.02c-0.72,5.38-0.94,10.13-0.95,14\r
	c-5.02,4.27-7.08,8.66-7.96,11.03c-1.6,4.3-1.77,8.55-1.95,13.01c-0.12,2.99-0.01,5.06,0.02,6c0.29,9.29-4.02,23.13-12.88,33.05\r
	c-3.69,4.13-5.28,4.35-9.96,10.04c-6.66,8.1-6.92,11.9-6.95,13.03c-0.1,3.87,1.77,4.37,4.04,10.99c2.38,6.92,0.95,8.16,3.06,16.99\r
	c1.93,8.06,2.89,12.09,6.06,14.98c3.11,2.84,5.74,2.55,17.02,4.94c11.54,2.45,10.82,3.18,16.01,3.94c7.5,1.1,9.99-0.28,27.99-3.1\r
	c21.7-3.4,25.23-2.89,29.97-7.11c5.64-5.03,7.54-12.11,8.25-17.14"/>\r
<path class="rickrolling-st" d="M216.12,392.48c0.36,0.59,2.47,4.08,1.03,7c-0.75,1.52-2.18,2.3-3.99,3.01c-5.27,2.08-11.1,2.24-14.99,2.06\r
	c-3.59,1.52-8.19,3.06-13.67,3.95c-9.79,1.59-18.03,0.41-23.32-0.82"/>\r
<path class="rickrolling-st" d="M198.12,392.55c7.12,0.08,13.44,0.02,19-0.07c1.52-0.02,4.45-0.11,6.99-2.03c0.85-0.64,3.23-2.44,2.98-5.01\r
	c-0.24-2.47-2.72-3.83-3.01-3.99"/>\r
<path class="rickrolling-st" d="M199.07,379.54c8.34,0.64,16.67,1.27,25.01,1.91c0.45-0.28,2.43-1.56,2.99-4.01c0.58-2.55-0.62-5.34-3.03-6.99\r
	c-4.08-1.15-8.78-2.21-14.01-2.95c-3.95-0.55-7.64-0.84-11-0.96"/>\r
<path class="rickrolling-st" d="M199.03,366.54"/>\r
<path class="rickrolling-st" d="M225.05,371.45c0.71-0.93,1.83-2.69,1.98-5.01c0.36-5.46-4.92-9.19-6.04-9.98c-3.36-2.38-6.81-2.75-9.01-2.97\r
	c-3.85-0.37-4.58,0.52-10,1.04c-9.07,0.87-11.38-1.22-15,1.06c-1.91,1.2-1.85,2.15-4.97,7.02c-1.82,2.84-2.89,4.15-3,4.31\r
	c-3.86,5.37-6.29,6.5-8.95,9.73c-2.54,3.09-3.68,7.07-5.94,15.02c-2.14,7.51-2.75,13.03-2.94,15.01c-0.93,9.6,0.48,13.56,1.06,15\r
	c0.85,2.12,2.5,6.1,6.03,6.98c1.18,0.3,2.25,0.16,3-0.01"/>\r
<path class="rickrolling-st" d="M176.04,370.63c-5.95,0.17-10.75,0.65-14,1.05c-7.57,0.93-10.83,1.94-17.99,2.07c-4.33,0.08-4.39-0.26-7,0.03\r
	c-6.57,0.73-11.16,3.45-13.98,5.05c-5.02,2.84-12.24,6.55-22.96,11.09"/>\r
<path class="rickrolling-st" d="M83.06,376.97c3.78-1.66,9.63-3.67,16.99-4.06c11.16-0.59,19.77,2.85,24.02,4.91"/>\r
<path class="rickrolling-st" d="M147.75,291.73c-0.68,14.38-0.75,30.11,0.17,47c0.66,12.02,1.75,23.37,3.13,33.99"/>\r
<path class="rickrolling-st" d="M198.5,223.54c-7.62,12.36-15.24,24.72-22.86,37.09c3.67,1.99,7.35,3.97,11.02,5.96\r
	c-5.32,2.69-10.65,5.37-15.97,8.06c2.53,13.35,5.83,27.75,10.16,42.96c3.79,13.29,7.91,25.63,12.14,36.96"/>\r
<path class="rickrolling-st" d="M213.16,403.49c1.23,6.53,2.29,13.54,3.08,20.99c0.47,4.48,0.82,8.82,1.05,13"/>\r
<path class="rickrolling-st" d="M213.46,212.49c-1,1.46-2.14,3.47-2.98,6.01c-1.52,4.62-1.29,8.67-0.96,11"/>\r
<path class="rickrolling-st" d="M209.7,279.5c0.11,14.44,0.77,29.81,2.17,45.99c0.84,9.69,1.89,19.02,3.1,27.99"/>\r
<path class="rickrolling-st" d="M218.12,392.47c-0.28,15-0.56,30-0.83,45"/>\r
<path class="rickrolling-st" d="M216.98,354.48c-0.04-9.67-0.07-19.33-0.11-29c-0.14-0.73-0.56-2.45-2.01-3.99c-1.11-1.18-2.32-1.74-3.01-1.99\r
	c-0.12-8.33-0.23-16.66-0.35-24.99c-0.1-0.44-0.06-0.77,0-1c0.29-1.09,1.59-1.89,3.25-2.02c-0.01-3.33-0.02-6.67-0.04-10\r
	c-2.16-0.22-6.12-0.96-8.01-3.97c-1.22-1.93-1.08-4.02-1.02-5c0.25-4.09,1.62-28.21,1.87-36.01c0.09-3.02,0.04-4.35,0.98-6\r
	c3.33-5.91,14.33-7.43,21.99-4.08c1.59,0.69,5.22,2.31,7.02,5.97c1.26,2.56,1.09,5.02,1.02,6c-0.4,6.02-0.98,18.89-1.87,36.01\r
	c-0.1,0.88-0.36,1.95-0.99,3c-2.31,3.87-7.46,4.02-7.99,4.03c0.01,3.33,0.02,6.67,0.04,10c1.41,0.23,2.5,1.02,2.75,2.06\r
	c0.06,0.23,0.1,0.57,0,1c0,8.33,0,16.67,0,25c-0.62,0.12-2.23,0.52-3.64,1.94c-1.57,1.57-1.9,3.4-1.99,4.01\r
	c0.04,11.33,0.08,22.67,0.13,34"/>\r
<path class="rickrolling-st" d="M224.98,353.45c0.87,0.09,3.82,0.51,6.01,2.98c0.67,0.75,2.36,2.65,2.02,4.99c-0.35,2.43-2.76,4.5-5.98,5.02"/>\r
<path class="rickrolling-st" d="M224.12,390.45c0.06,16,0.12,32,0.18,48"/>\r
<path class="rickrolling-st" d="M219.45,211.47c-0.68,0.97-1.45,2.31-1.99,4.01c-1.25,3.97-0.44,7.45,0.03,9"/>\r
<path class="rickrolling-st" d="M283.47,215.23c0.48,1.17,1.01,2.9,1.02,5c0.01,5.92-4.23,10.23-6.95,13.03c-6.53,6.71-9.43,9.99-11.1,11.98\r
	c-1.34,1.59-2.27,2.71-2.56,3.06c-3.42,4.14-10.79,10.63-27.37,21.21"/>\r
<path class="rickrolling-st" d="M237.5,258.5c8.4,7.94,16.81,15.87,25.21,23.81c5.98-6.36,11.95-12.71,17.93-19.07"/>\r
<path class="rickrolling-st" d="M284.45,212.22c1.66,2.14,4.07,5.88,5.04,10.98c0.77,4.08,0.3,7.35,0.03,9c-2.19,13.4-3.29,20.11-8.88,31.03\r
	c-7.87,15.36-11.85,39.96-19.67,88.07c-3.72,22.91-7.34,52.35-8.68,87.03"/>\r
<path class="rickrolling-st" d="M304.52,230.15c4.05,12.32,8.09,24.64,12.14,36.96c-4.66,1.68-9.32,3.37-13.98,5.05\r
	c4.34,2.98,8.69,5.97,13.03,8.95c-7.1,20.54-13.84,38.68-19.8,54.07c-10.52,27.16-15.78,40.74-20.81,51.08\r
	c-2.9,5.95-6.95,13.56-10.91,25.04c-3.83,11.12-5.82,20.64-6.9,27.03"/>\r
<path class="rickrolling-st" d="M284.45,212.22c3.25,1.83,5.56,3.68,7.02,4.97c4.72,4.17,6.03,7.33,11.04,10.96c2.04,1.48,3.87,2.44,5.01,2.98\r
	c11.22,3.72,23.33,8.28,36.05,13.87c12.51,5.5,23.87,11.23,34.06,16.87c0.74,0.09,1.85,0.33,3,0.99c0,0,1.76,1,3.01,2.99\r
	c6,9.52,6.09,23.98,6.09,23.98c0.05,7.71-0.47,18.33-2.88,31.01c1.22,1.96,3.21,5.42,5.04,9.98c4.78,11.96,3.54,19.43,7.13,34.97\r
	c0.72,3.13,1.97,8.02,4.05,13.99"/>\r
<path class="rickrolling-st" d="M363.9,330.93c1.57,0.7,3.79,1.92,6.01,3.98c2.3,2.13,3.55,4.21,4.02,4.99c8.38,13.81,15.95,20.1,21.13,34.92\r
	c2.19,6.26,4.78,16.41,4.11,29.98"/>\r
<path class="rickrolling-st" d="M396.06,375.81c2.81,1.24,6.69,3.15,11.02,5.96c2.29,1.48,5.25,3.4,8.02,5.97\r
	c2.47,2.28,11.06,10.24,11.07,19.96c0,3.96-1.42,4.97-6.94,16.03c-7.89,15.8-6.16,16.1-8.93,19.03c-9.79,10.37-32.79,7.92-48-0.82\r
	c-11.11-6.38-17.17-15.6-20.08-20.93"/>\r
<path class="rickrolling-st" d="M340.93,341.02c-1.36,3.26-2.32,6.02-2.97,8.01c-1.2,3.7-1.8,5.61-1.97,8.01c-0.27,3.81,0.64,6.73,1.03,8\r
	c2.8,9.2,4.1,18.83,7.1,27.97c2.73,8.32,6.41,19.92,11.13,35.96"/>\r
<path class="rickrolling-st" d="M343.3,439.01c-0.64-5.75-1.06-12.12-1.07-19c-0.02-9.7,0.78-18.44,1.9-26.01"/>\r
<path class="rickrolling-st" d="M330.7,277.05c-0.14-0.65-0.69-3.44,0.98-6c1.33-2.04,3.31-2.77,3.99-3.01c1.95-0.69,4.01-0.61,11.01,1.96\r
	c7.05,2.59,6.46,3.1,12.02,4.96c3.99,1.33,5.42,1.44,7.01,2.97c2.57,2.47,3.05,6.17,3.03,8.99c-2.34,19.02-4.05,32.93-4.86,38.02\r
	c-0.26,1.65-0.62,3.6,0.02,6c0.58,2.17,1.55,3.09,3.03,6.99c0.61,1.63,0.92,2.44,1.01,3c0.86,5.4-6.16,11.96-12.95,14.05\r
	c-1.82,0.56-4.46,1.33-7,0.03c-1.62-0.83-2.55-2.17-3.01-2.99c-1.35-3.33-2.69-6.66-4.04-9.99c-1.63-1.83-3.4-4.15-5.03-6.98\r
	c-0.8-1.39-1.46-2.73-2.01-3.99c-1.07-2.43-2.4-5.28-3.03-6.99c-0.8-2.18-2.13-6.71-2.05-13.99"/>\r
<path class="rickrolling-st" d="M327.73,285.06c-0.23-0.57-1.02-2.76-0.02-5c0.8-1.79,2.3-2.63,2.99-3.01c3.17-1.73,6.52-0.89,11-0.04\r
	c3.07,0.59,7.47,1.33,13.01,1.95"/>\r
<path class="rickrolling-st" d="M352.73,285.97c-3.76,0.27-6.84,0.18-9,0.03c-8.81-0.58-14.59-2.77-17,0.06c-0.48,0.56-0.69,1.16-0.99,2\r
	c-1.09,3.05-0.36,5.83,0.03,7"/>\r
<path class="rickrolling-st" d="M330.7,277.05c-3.09-0.89-6.26-0.1-7.99,2.03c-1.7,2.1-1.67,5.1-0.97,7c0.45,1.23,1.07,1.7,2.01,3.99\r
	c0.51,1.23,0.82,2.28,1.01,3"/>\r
<path class="rickrolling-st" d="M347.76,293.99c-1.23,0.02-3.35,0.04-6,0.02c-9.8-0.06-13.87-0.56-15.99,2.06c-0.6,0.75-0.83,1.47-0.99,2\r
	c-1.88,6.16,4.87,14.49,9.05,13.97c0.82-0.1,2.46-0.66,2.99-2.01c0.3-0.77,0.14-1.55-0.01-2"/>\r
<path class="rickrolling-st" d="M331.8,304.05c1.09,1.96,2.18,2.7,3.01,2.99c0.36,0.13,1.15,0.34,2,0.99c0,0,0.57,0.44,1,1\r
	c1.34,1.72-1.35,9.13-1.96,11.01c-0.98,3.03-1.64,7.58,0.05,14"/>\r
<path class="rickrolling-st" d="M340.94,343.02c-0.19,2.65-0.32,6.44,0.04,11c0.28,3.59,0.42,5.38,1.03,7c2.04,5.44,8.71,10.48,15.04,9.94\r
	c9.52-0.81,14.01-13.9,14.92-21.06c0.84-6.58-0.85-11.99-2.06-14.99"/>\r
<path class="rickrolling-st" d="M219.5,224.46c-1,2.01-2,4.03-3,6.04"/>\r
<path class="rickrolling-st" d="M225.5,224.44c-1,2.35-2,4.71-3,7.06"/>\r
<path class="rickrolling-st" d="M230.51,226.42c-0.66,1.67-1.32,3.34-1.98,5.01"/>\r
<path class="rickrolling-st" d="M212.53,231.49c-0.28,0.21-0.65,0.53-1,1c-1.15,1.57-0.96,3.46-0.99,4c-0.62,11.34-1.25,22.67-1.87,34.01\r
	c0,0.83,0.12,2.38,1.01,4c1.25,2.26,3.46,3.39,5.01,3.98"/>\r
<path class="rickrolling-st" d="M227.7,278.44c1.1,0.08,2.72,0,4-1.01c1.79-1.43,1.92-3.96,1.98-5.01c0.27-4.88,1.03-17.3,1.87-34.01"/>\r
<path class="rickrolling-st" d="M216.87,325.48c2.67-0.01,5.33-0.02,8-0.03"/>\r
<path class="rickrolling-st" d="M214.75,291.48c1.33,0,2.67-0.01,4-0.01c-0.01-1.67-0.01-3.33-0.02-5c0.26-1.03,1.04-1.82,1.99-2.01\r
	c1.24-0.24,2.59,0.59,3.01,1.99c0.01,1.67,0.01,3.33,0.02,5c1.33,0,2.67-0.01,4-0.01"/>\r
<path class="rickrolling-st" d="M214.71,281.48c1.46-0.47,3.51-0.96,6-1.02c2.97-0.08,5.39,0.47,7,0.97"/>\r
<path class="rickrolling-st" d="M213.71,281.49c0-0.86,0.14-2.09,0.99-3c0.69-0.74,1.57-0.97,6-1.02c5.42-0.07,6.33,0.25,7,0.97\r
	c0.87,0.93,1.01,2.19,1.01,3"/>\r
<path class="rickrolling-st" d="M219.34,181.47c-0.16,22.72-0.06,31.66,0.13,34c0.02,0.23,0.09,0.98,0.01,2c-0.19,2.54-1.13,4.58-1.98,6.01"/>\r
<path class="rickrolling-st" d="M285.37,188.22c-0.95,12.67-1.91,25.34-2.86,38.01"/>\r
<path class="rickrolling-st" d="M357.3,438.96c-79.34-0.71-158.67-1.41-238.01-2.12"/>\r
<path class="rickrolling-st" d="M208.5,268.5c2.25-0.85,5.31-1.72,9-2c6.16-0.47,11.11,0.92,14,2"/>\r
<path class="rickrolling-st" d="M209.5,259.5c2.28-0.86,5.73-1.86,10-2c5.29-0.17,9.49,1.05,12,2"/>\r
<path class="rickrolling-st" d="M209.5,249.5c2.02-0.85,5.12-1.86,9-2c6.11-0.22,10.77,1.83,13,3"/>\r
<path class="rickrolling-st" d="M210.5,239.5c2.28-0.86,5.73-1.86,10-2c5.29-0.17,9.49,1.05,12,2"/>\r
</svg>\r
`,jl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.rui_kamishiro-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="rui_kamishiro-st" d="M172.46,137.84c-3.32,10.58-6.23,23.58-7.17,38.55c-0.35,5.58-1.57,29.73,7.38,59.9\r
	c2.39,8.06,6.3,20.94,15.03,36.02c12.34,21.32,27.59,35.44,38.55,43.92c-10.76-19.3-22.8-46.54-28.69-80.68\r
	c-2.78-16.14-3.34-28.79-3.49-34.01c-0.99-34.16,5.74-62.56,12.45-82.53"/>\r
<path class="rui_kamishiro-st" d="M136.6,184.46c-0.26,8.64-1.53,15.67-2.69,20.62c-1.66,7.06-3.06,13.03-7.17,19.72\r
	c-4.32,7.04-9.64,11.61-13.45,14.34c2.85,0.52,7.29,0.98,12.55,0c6.9-1.28,11.79-4.38,14.34-6.27c-0.43,3.33-1.61,9.12-5.38,15.24\r
	c-4.23,6.87-9.61,10.74-12.55,12.55c5.18-0.47,11.72-1.65,18.82-4.48c16.49-6.59,26.15-18.18,30.48-24.2"/>\r
<path class="rui_kamishiro-st" d="M126.74,171.01c-0.19,5.84,0.11,13.2,1.79,21.51c1.19,5.88,2.82,10.99,4.48,15.24"/>\r
<path class="rui_kamishiro-st" d="M355.33,143.22c4.17,4.34,9.98,11.43,14.34,21.51c3.3,7.62,4.73,14.55,5.38,19.72\r
	c0.72-7.02,1.08-17.03-0.9-28.69c-8.69-51.31-53.17-79.2-60.06-83.37c-4.72-2.86-57.17-33.45-115.64-10.76\r
	c-33.01,12.81-51.56,36.26-58.27,45.72c-17.3,24.39-21.03,47.68-23.31,61.85c-2.28,14.21-1.31,23.24,0,29.58\r
	c1.61,7.79,4.25,13.91,6.27,17.93c-0.51-6.8-0.61-14.32,0-22.41c1.97-26.13,10.5-46.97,17.93-60.96"/>\r
<path class="rui_kamishiro-st" d="M193.97,197.9c9.97-7.57,23.36-19.68,34.96-37.65c6.71-10.4,11.24-20.31,14.34-28.69\r
	c6.66,13.59,25.69,56.77,7.17,95.92c-2.06,4.35-4.68,8.88-8.07,13.45c19.23-12.39,29.51-26.06,34.96-34.96\r
	c6.94-11.34,10.78-22.73,17.03-41.24c3.72-11.02,6.34-20.34,8.07-26.89c4.82,4.23,11.62,10.99,17.93,20.62\r
	c6.43,9.82,15.27,23.32,14.34,41.24c-0.27,5.26-1.62,15.39-8.96,26.89c3.1-2.44,8.78-7.61,12.55-16.14\r
	c2.9-6.55,3.5-12.47,3.59-16.14c2.08,6.63,4.3,16.17,4.48,27.79c0.18,11.56-1.72,21.12-3.59,27.79c4.62-4.09,12.53-12.36,16.14-25.1\r
	c1.11-3.92,1.61-7.57,1.79-10.76c2.06,1.54,6.37,4.33,12.55,5.38c6.08,1.03,10.99-0.14,13.45-0.9c-4.65-4.2-10.88-10.92-15.24-20.62\r
	c-3.98-8.87-3.88-14.66-7.17-27.79c-0.42-1.67-0.92-3.6-1.54-5.77c0,0-2.33-8.17-5.78-17.06c-5.22-13.45-12.21-26.43-14.2-30.06"/>\r
<path class="rui_kamishiro-st" d="M161.7,243.62c0.94,1.16,2.12,2.4,3.59,3.59c4.64,3.76,9.63,4.95,12.55,5.38"/>\r
<path class="rui_kamishiro-st" d="M203.83,262.45c8.95,3.1,22.61,6.79,39.44,7.17c36.92,0.83,86.16-14.35,92.33-42.13\r
	c1.22-5.48,0.48-10.22,0-12.55"/>\r
<path class="rui_kamishiro-st" d="M337.4,213.14c0.21,1.67,1.25,3.08,2.69,3.59c1.95,0.68,4.39-0.4,5.38-2.69"/>\r
<path class="rui_kamishiro-st" d="M339.19,208.66c0.31-0.25,1.34-1.01,2.69-0.9c1.68,0.14,3.17,1.58,3.59,3.59"/>\r
<path class="rui_kamishiro-st" d="M170.67,250.79c0.68,2.62,1.41,6.7,0.9,11.65c-0.65,6.27-2.97,10.91-4.48,13.45c2.93-0.97,6.76-2.59,10.76-5.38\r
	c2.6-1.81,4.67-3.7,6.27-5.38"/>\r
<path class="rui_kamishiro-st" d="M329.33,240.04c0.02,2.07,0.31,5.32,1.79,8.96c1.84,4.54,4.63,7.47,6.27,8.96c-3.47,0.04-8.16-0.29-13.45-1.79\r
	c-3.58-1.02-6.58-2.33-8.96-3.59"/>\r
<path class="rui_kamishiro-st" d="M303.34,257.96c-0.32,2.21-0.52,5.32,0,8.96c0.55,3.84,1.71,6.89,2.69,8.96c-2.91-0.54-6.25-1.37-9.86-2.69\r
	c-5.16-1.88-9.35-4.19-12.55-6.27"/>\r
<path class="rui_kamishiro-st" d="M230.73,268.72c-2.25,1.57-5.6,4.41-8.07,8.96c-0.94,1.73-4.46,8.46-2.69,16.14c0.75,3.26,2.18,5.46,2.69,6.27\r
	c3.11,4.96,7.01,14.08,10.76,32.27"/>\r
<path class="rui_kamishiro-st" d="M282.72,266.03c1.75,1.75,4.1,4.42,6.27,8.07c0,0,1.62,2.72,2.69,5.38c1.91,4.73,2.2,10.58,0,23.31\r
	c-0.89,5.15-2.27,11.89-4.48,19.72"/>\r
<path class="rui_kamishiro-st" d="M235.21,270.51c-0.97,3.26-0.62,5.57,0,7.17c3.42,8.78,21.28,11.52,32.27,5.38c1-0.56,8.85-4.94,8.07-9.86\r
	c-0.34-2.13-2.19-3.62-3.59-4.48"/>\r
<path class="rui_kamishiro-st" d="M237.9,269.62c-1.03,0.09-2.9,0.41-4.48,1.79c-1.99,1.74-2.38,4.13-2.69,6.27c-0.46,3.16,0.07,4.99,0.9,10.76\r
	c0.34,2.38,0.56,4.79,0.9,7.17c1.51,10.69,0.99,32.88,0.9,36.75c-0.76,30.73-2.74,37.46-3.59,40.34\r
	c-2.32,7.92-4.29,14.32-9.86,18.82c-1.83,1.48-4.75,3.32-8.07,7.17c-2.64,3.06-4.34,6-5.38,8.07"/>\r
<path class="rui_kamishiro-st" d="M271.96,267.82c0.89,0.3,2.2,0.83,3.59,1.79c2.52,1.75,4.27,4.19,6.27,8.96c2.86,6.8,3.59,11.65,3.59,11.65\r
	c1.84,12.23,1.79,25.96,1.79,31.37c0.02,16.53,0.07,25,1.79,34.96c1.08,6.24,1.96,11.34,4.48,17.93c2.02,5.28,3.84,7.86,5.38,13.45\r
	c1.5,5.47,1.79,10.22,1.79,13.45"/>\r
<path class="rui_kamishiro-st" d="M293.48,287.55c1,4.4,2.39,11.01,3.64,19.12c1.48,9.55,1.56,13.3,2.63,22.12c2.12,17.42,3.56,17.09,5.38,32.27\r
	c1.76,14.66,2.61,22.16,0,30.48c-2.81,8.97-8.04,15.21-11.65,18.82"/>\r
<path class="rui_kamishiro-st" d="M292.58,282.17c19.66,26.33,33.99,45.57,36.75,49.3c0,0,0.22,0.2,1.79,2.69c4.05,6.41,3.75,8.3,3.59,8.96\r
	c-0.32,1.26-1.13,2.08-1.79,2.69c-1.69,1.57-2.57,2.32-2.88,2.53c-3.22,2.22-4.63,3.49-10.54,7.15c-0.8,0.49-2.07,1.26-3.61,1.07\r
	c0,0-1.22-0.15-2.39-1.07c-2.01-1.59-6.94-9.38-12.85-20.44"/>\r
<path class="rui_kamishiro-st" d="M321.27,353.88c2.71,3.49,7.37,4.49,10.76,2.69c4.05-2.16,5.67-8.03,2.69-12.55"/>\r
<path class="rui_kamishiro-st" d="M214.59,292.03c0.57-1.52,1.41-3.39,2.69-5.38c1.21-1.88,2.49-3.37,3.59-4.48"/>\r
<path class="rui_kamishiro-st" d="M208.32,300.1c-16.97,30.02-29.15,52.05-31.37,56.47c-0.46,0.91-1.48,3.05-0.9,5.38\r
	c0.37,1.49,1.26,2.47,3.59,4.48c0,0,7.31,6.31,13.87,8.07c0.44,0.12,1.19,0.29,2,0c1.22-0.43,1.81-1.63,2-2\r
	c1.05-2.04,11.95-22.2,26.95-49.99"/>\r
<path class="rui_kamishiro-st" d="M176.05,362.85c-1.76,3.39-1.36,7.38,0.9,9.86c2.93,3.22,8.65,3.54,12.55,0"/>\r
<path class="rui_kamishiro-st" d="M210.11,349.4c-2.69,24.23-4.17,42.54-4.48,50.2c-0.08,2.01-0.19,5.81,1.79,9.86c1.81,3.7,4.57,5.97,6.27,7.17"\r
	/>\r
<path class="rui_kamishiro-st" d="M230.73,368.22c8.42,2.57,20.06,5.14,34.06,5.38c10.96,0.18,20.4-1.12,27.79-2.69"/>\r
<path class="rui_kamishiro-st" d="M212.8,398.7v32.72c0,0.82,0.49,1.56,1.25,1.87c4.37,1.77,11.41,3.96,20.27,3.96c4.58,0,12.57-0.58,21.51-4.48\r
	c4.07,1.41,11.02,3.23,19.72,2.69c7.01-0.43,12.65-2.25,16.49-3.85c0.88-0.37,1.44-1.23,1.44-2.19V373.6"/>\r
<path class="rui_kamishiro-st" d="M219.97,435.46c-0.18,1.19-0.28,2.73,0,4.48c0.19,1.22,0.43,1.71,0.9,3.59c0.76,3.1,0.54,3.55,0.9,4.48\r
	c1.13,2.96,5.51,3.92,8.07,4.48c1.03,0.23,11.76,2.58,14.34-1.79c0.76-1.29,0.19-2.11,0-8.07c-0.08-2.65-0.05-4.83,0-6.27"/>\r
<path class="rui_kamishiro-st" d="M258.52,433.66c-0.13,0.92-0.13,1.81,0,2.69c0.23,1.58,0.71,1.97,0.9,3.59c0.16,1.41-0.15,1.59,0,2.69\r
	c0,0,0.24,1.72,1.79,3.59c3.23,3.86,19.02,6.11,21.51,0.9c0.45-0.94,0.1-1.38,0-7.17c-0.04-2.26-0.02-4.12,0-5.38"/>\r
<path class="rui_kamishiro-st" d="M255.83,388.84c0,14.64,0,29.28,0,43.92"/>\r
<path class="rui_kamishiro-st" d="M263,276.79c0-2.99,0-5.98,0-8.96"/>\r
<path class="rui_kamishiro-st" d="M284.51,201.49c3.98-4.07,11.38-10.53,22.41-14.34c5.36-1.85,18.96-6.55,23.31-0.9\r
	c3.16,4.1,0.68,12.66-5.38,20.62"/>\r
<path class="rui_kamishiro-st" d="M289.89,197.01c-2.62,8.06,0.03,15.88,5.38,18.82c5.03,2.77,11.12,0.49,14.34-1.79\r
	c7.15-5.05,9.55-16.63,5.38-28.69"/>\r
<path class="rui_kamishiro-st" d="M244.17,211.35c-3.79-2.28-9.23-4.9-16.14-6.27c-15.53-3.1-28.21,2.11-33.17,4.48"/>\r
<path class="rui_kamishiro-st" d="M206.52,205.07c-4.75,12.36-0.2,23.95,7.17,26.89c5.21,2.08,11.46-0.31,15.24-3.59\r
	c5.88-5.09,7.8-14.07,4.48-22.41"/>\r
<path class="rui_kamishiro-st" d="M246.86,254.38c3.32,1.87,6.14,2.48,8.07,2.69c3.52,0.39,3.58-0.58,10.76-0.9c3.26-0.14,4.82-0.01,7.17-0.9\r
	c2.03-0.76,3.52-1.86,4.48-2.69"/>\r
<path class="rui_kamishiro-st" d="M290.79,170.11c2.5-1.56,6.46-3.57,11.65-4.48c9.28-1.62,16.71,1.3,19.72,2.69"/>\r
<path class="rui_kamishiro-st" d="M241.48,176.39c-3.43-0.15-7.72-0.02-12.55,0.9c-7.4,1.4-13.17,4.08-17.03,6.27"/>\r
<path class="rui_kamishiro-st" d="M233.42,298.3c8,4.49,16.36,8.99,25.1,13.45c9.5,4.85,18.77,9.32,27.79,13.45"/>\r
<path class="rui_kamishiro-st" d="M234.31,324.3c8.97,4.64,19.44,9.33,31.37,13.45c7.57,2.61,14.79,4.66,21.51,6.27"/>\r
<path class="rui_kamishiro-st" d="M231.62,362.85c9.4,1.59,20.58,2.76,33.17,2.69c9.25-0.05,17.67-0.77,25.1-1.79"/>\r
<path class="rui_kamishiro-st" d="M289.89,361.95c-4.6-1.59-9.4-3.37-14.34-5.38c-5.06-2.05-9.84-4.16-14.34-6.27c0.9-1.2,1.79-2.39,2.69-3.59\r
	c3.88,2.13,8.37,4.3,13.45,6.27c3.8,1.48,7.41,2.65,10.76,3.59"/>\r
<path class="rui_kamishiro-st" d="M277.34,364.64c-3.52-0.82-7.45-1.97-11.65-3.59c-2.96-1.14-5.65-2.36-8.07-3.59c-0.9,1.2-1.79,2.39-2.69,3.59\r
	c3.88,1.49,7.77,2.99,11.65,4.48"/>\r
<path class="rui_kamishiro-st" d="M237,370.02c-0.9,22.41-1.79,44.82-2.69,67.23"/>\r
<path class="rui_kamishiro-st" d="M279.13,372.71c-0.3,20.92-0.6,41.83-0.9,62.75"/>\r
<path class="rui_kamishiro-st" d="M219.97,440.83c3.27,1.53,9.9,4.01,17.93,2.69c2.41-0.4,4.52-1.07,6.27-1.79"/>\r
<path class="rui_kamishiro-st" d="M258.52,438.14c1.07,0.56,2.59,1.25,4.48,1.79c0.8,0.23,2.95,0.79,6.27,0.9c5.54,0.17,10.72-1.04,13.45-1.79"/>\r
<path class="rui_kamishiro-st" d="M299.75,321.61c4.78-3.29,9.56-6.57,14.34-9.86"/>\r
<path class="rui_kamishiro-st" d="M300.65,334.16c6.57-4.78,13.15-9.56,19.72-14.34"/>\r
<path class="rui_kamishiro-st" d="M302.44,338.64c6.87-5.08,13.75-10.16,20.62-15.24"/>\r
<path class="rui_kamishiro-st" d="M192.18,328.78c7.47,3.88,14.94,7.77,22.41,11.65"/>\r
<path class="rui_kamishiro-st" d="M187.7,336.85c7.47,3.88,14.94,7.77,22.41,11.65"/>\r
<path class="rui_kamishiro-st" d="M185.91,341.33c7.17,3.88,14.34,7.77,21.51,11.65"/>\r
<path class="rui_kamishiro-st" d="M231.62,285.75c2.25,2.15,10.22,9.2,22.41,9.86c17.39,0.94,28.37-11.97,29.58-13.45"/>\r
</svg>\r
`,Ml=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.sad-dxh-st{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\r
</style>\r
<path class="sad-dxh-st" d="M120.8,217.7c-9.5,1.6-19.2,2.3-28.6,4.9c-5.2,1.4-10.3,3.2-14.9,6c-6.9,4.2-14.4,6.7-22.2,8.6\r
	c-6.6,1.6-12.7,4.3-17.4,9.6c-4.5,5.1-2.7,10.4,3.1,12.8c5.6,2.3,11.3,3.1,17.4,2c2.1-0.4,4.4-0.5,6.7-0.8c4.8-0.5,8.7,0.6,11.6,4.6\r
	c1.1,1.6,3,2,4.8,3c3.1-3.9,3.1-8.2,2.6-12.8c-0.6-4.8,0.4-7.2,4.9-8.1c7.4-1.5,14.6-3.8,22.2-4.4c4.2-0.3,8.3-1,12.5-1.5"/>\r
<path class="sad-dxh-st" d="M173.8,385.3c-2.1-0.1-3.1,1.8-4.5,2.8c-5.7,4.1-11.3,8.4-18,10.9c-4.5,1.7-7.4,4.8-8.5,9.4\r
	c-1.3,5.2-4,9.9-4.9,15.2c-0.9,5.4-0.9,10.5,1.6,15.5c1.2,2.4,2.6,4.8,3.6,7.3c0.8,2.2,2.4,2.7,4.3,2.7c2.2,0,4.3-0.4,6.4-0.8\r
	c4.1-0.8,8.3-1.5,12.4-1.3c9.3,0.5,18.2-1.2,27.1-3.9c5.1-1.6,10.4-2.6,14.6-6.2c2.9-2.5,5.9-4.7,9.1-6.7c1.5-0.9,2.7-2.3,3.7-3.9\r
	c3.8-5.9,9.4-9.7,15.2-13.4c2.6-1.7,4.8-3.6,5.4-6.7c0.4-2.2-0.4-4.3-0.9-6.4c-1.1-4.8-0.9-10-3.9-14.3"/>\r
<path class="sad-dxh-st" d="M377.2,364c6.5-5.4,14.1-8.6,21.6-12.2c2.6-1.2,5.2-2.3,7.7-3.9c5.4-3.5,10.2-1.1,13.3,2.1\r
	c4.8,4.9,6.5,11,6.7,17.6c0.2,6.5,0.1,13-1.1,19.5c-0.9,4.9-5.3,8.8-10.4,8.8c-7.1,0-14.5-0.5-21.2,2c-12.6,4.5-25.5,8.1-37.2,14.9\r
	c-10.3,5.9-27.7,5.2-35.3-7.7c-2.7-4.6-4.1-9.5-5.7-14.3c-1.2-3.5-1.7-7.3-3.5-10.7c-1-1.8-0.8-4.2-1.4-6.3c-0.8-3,0.3-6.1-1.3-9.2\r
	c-1.3-2.5-1.2-5.8-1.7-8.7c-0.2-1.4-0.3-2.9,0.9-4"/>\r
<path class="sad-dxh-st" d="M231.6,86.9c-5.4,9.5-8.4,19.9-11.9,30.1c-0.1,0.3,0.1,0.6,0,0.9c-1,4.2-3.8,5.4-7.9,5.6\r
	c-10.5,0.4-20.5,2.5-29.9,7.7c-4.1,2.3-8.7,3.7-13,5.6c-4.8,2-9.5,4.1-13.7,7.3c-3.2,2.5-5.6,5.9-8.8,8.5\r
	c-8.8,7.1-14.7,16.4-19.4,26.4c-2.4,5-3.8,10.3-4.7,15.8c-0.8,4.6-0.2,9.1-0.5,13.7c-0.4,6.9,0,13.8,0.8,20.7\r
	c0.6,5.6,1.2,11.2,2.4,16.8c2.2,10.1,5.6,19.8,9.2,29.4c2.5,6.7,7.5,12.1,12,17.7c6.3,8,14.6,13.5,23.1,18.9\r
	c9.5,6.2,19.8,10.8,30.1,15.2c3,1.3,5.7,3.2,8.6,4.8c3.9,2.1,8.2,2.8,12.4,3.8c4.4,1,8.8,0.3,13.1,1c4.3,0.6,8.5,1.8,12.8,2.5\r
	c2.2,0.4,4.4,0.3,6.7,0.6c6.4,0.7,12.9,1.2,19.5,1c8.2-0.2,15.9-2,23.5-5.1c6-2.5,11-6.4,16.5-9.7c5.2-3.1,11-5.3,16.7-7.4\r
	c9.1-3.4,18.3-6.8,27-11.1c7.1-3.5,13.9-7.5,19.1-13.7c3.1-3.6,4.8-8.2,6.4-12.7c2.9-7.9,2.6-16.1,2.2-24.3\r
	c-0.3-5.4-0.1-10.8-0.9-16.1c-0.6-4.1-2.1-7.8-3.7-11.5c-1.4-3.1-1.8-6.5-2.4-9.8c-1-6-2-11.9-5.5-17c-2.2-3.2-2.4-7.2-3.9-10.5\r
	c-1.7-3.8-3.1-7.8-5.2-11.4c-4.8-8.1-9.9-16.1-14.8-24.2c-5.3-8.8-14-13.6-23.5-17.2c-8.2-3.1-16.5-5.5-24.7-8.6\r
	c-5.1-1.9-10.7-2.8-16.1-4.1c-2.2-0.5-4.5-0.9-6.7-1.2c-1.8-0.3-2.7-1.6-3-3.1c-2.1-11.5-4.1-23.1-6.1-34.7\r
	c-0.2-1.1,0.5-1.8,1.2-2.4c4-3.9,5.8-8.8,6.5-14.3c0.3-2.7,0-5.4-1.4-7.2c-5.8-7.5-13.2-13-22.7-14.2c-6.7-0.9-13,1.8-18.9,5.3\r
	c-3.7,2.2-6.6,5.2-8.1,9.2c-1.7,4.6-0.8,9.3,1.2,13.6c1.6,3.4,3.8,6.6,6.6,9.2"/>\r
<path class="sad-dxh-st" d="M380.3,230.4c6.3-2,12.1-5.4,18.6-6.8c6.8-1.4,13.6-1.9,20.7-1.1c8.4,0.9,16.2,3.8,24.3,5.3\r
	c3.2,0.6,6.2-1.6,4.9-5.4c-0.7-1.9-1.4-3.7-2.4-5.5c-1.1-2.1-0.4-4,1.8-5.1c3.4-1.8,7-2.8,10.7-3.6c7.2-1.6,7.5-9.1,5.1-13.8\r
	c-3.4-6.5-9.6-8.6-16.1-9.3c-8.4-1-16.8-1.9-25.2-1.6c-8.4,0.4-16.9,1.1-25.3,2c-8.9,0.9-17.5,2.8-26.1,5c-1.1,0.3-2.2,0.8-3.4,1.2"\r
	/>\r
<path class="sad-dxh-st" d="M321.3,229c0.1-1.1,0.3-2.9,0.3-5.2c0-1.9-0.6-9.8-3.8-23.8c-2.4-10.3-7.5-18.7-14.7-26.2\r
	c-1.8-1.8-3.4-3.9-4.3-6.4c-1-2.9-3.2-5.1-4.9-7.6c-2.2-3.2-5.9-4.8-9.4-5.4c-5.5-1-10.8-2.4-16.4-3c-2.6-0.3-5.1,0-7.6,0.5\r
	c-6.9,1.4-12.9,5.1-19.2,8.1c-13.6,6.4-20.9,18.1-26.3,31.2c-2.4,5.7-2.4,12.2-3,18.5c-0.8,8.8,0.8,17.3,2.3,25.8\r
	c0.9,5.1,3.7,9.8,6.9,14c1.7,2.3,3.7,4.4,5.4,6.7c1.4,1.8,3.4,2.7,5.2,3.2c6.7,1.9,13,5,20,6c6.3,0.9,12.4,0.6,18.6-0.4\r
	c7.7-1.2,15.3-3.3,22.8-5.3c15.1-4.1,19.4-9.4,21.6-12.4c0.9-1.2,1.7-2.4,1.8-2.7C320.4,238.7,321.1,232.7,321.3,229z"/>\r
<path class="sad-dxh-st" d="M361.7,342.4c3.9,5,7.2,10.3,8.8,16.4c0.6,2.6,3,3.2,4.7,4.5c1,0.8,2.8,1,2.6,2.5c-0.2,1.7-1,3.2-2.9,4.1\r
	c-2,1-4.2,1.5-6.1,1.6c-6,0.4-11.4,2.9-17,4.4c-8.6,2.2-17.2,4-25.8,6.1c-3.9,1-7.9,1.4-11.9,1.2"/>\r
<path class="sad-dxh-st" d="M230.3,368.3c0.6,1.3,1.1,2.6,1.6,3.9c0.9,2.2,0.8,4.9,3.8,6.2c2.9,1.2,3.3,4.6,0.6,6.4\r
	c-3.9,2.7-7.4,6.2-12.4,7.1c-2.1,0.4-4.3,0.9-6.4,0.9c-7.4-0.1-14.6,0.5-21.9,1.8c-2.5,0.4-5.4-0.3-7.9-1.2c-3.6-1.2-7.1-2.9-11-3\r
	c-1.4,0-3.1-3.3-2.5-5.4c0.4-1.3,0-2.8,0.7-4"/>\r
<path class="sad-dxh-st" d="M340.5,315.1c1,3.8,0.9,7.6,0.4,11.6c-0.5,4.6-0.2,9.3-0.1,14c0.1,2.1-0.8,3.6-2.5,4.2\r
	c-3.8,1.3-7.8,2.3-11.8,2.5c-0.8,0-1.6-0.1-2.4,0c-3.2,0.6-3.8,0.3-3.9-2.8c-0.1-2.9-0.1-5.9,0.1-8.8c0.3-4,0.1-8.2-2-11.9"/>\r
<path class="sad-dxh-st" d="M370.9,360.4c-4,2.1-8.5,2.3-12.8,2.6c-3.5,0.2-6.8,0.9-10,2c-1.5,0.5-2.7,0.6-4.3,0.1\r
	c-1.5-0.5-3.4-0.3-5.1,0.1c-6.3,1.5-12.6,2.6-19.1,2.1c-1.6-0.1-3.3-0.5-4.9-0.9c-1.3-0.4-2.5-0.2-3.7,0"/>\r
<path class="sad-dxh-st" d="M233.1,377.7c-3.6,3.1-8.2,3.2-12.5,4.3c-6.3,1.5-12.4,0.1-18.6-0.5c-8.2-0.8-16.4-1-24.6-0.8\r
	c-3.3,0.1-4.1-0.9-4.3-4.2c-0.2-4,0.7-8-0.6-11.9c-0.4-1.3,0.6-1.9,1.5-2.4"/>\r
<path class="sad-dxh-st" d="M194.1,348.2c-3.9,0.7-8,0-11.9,1.4c-2.4,0.9-4.8,1.9-6.9,3.2c-3.8,2.4-3.5,6.3-0.1,9.4c2.1,1.9,4.2,2.7,7,2.8\r
	c4.3,0,8.5,1.4,12.8,1.9c3.3,0.4,6.8,0.1,10.1,1.4c3.8,1.5,7.9,1.5,11.9,2.1c4.6,0.7,9.1-0.6,13.1-2.6c1.6-0.8,3.4-3.4,3.9-5.9\r
	c0.2-0.8,0.4-1.6,0.6-2.4c1.4-4.9-0.3-6.8-5.5-6.4c-0.7,0.1-1.4,0.2-2.1,0.3"/>\r
<path class="sad-dxh-st" d="M343.5,330.3c7.5-2.9,13.6-0.1,18.8,5.2c2.5,2.5,2.1,5.5-1.2,6.6c-6.8,2.3-13.1,6.2-20.1,7.9\r
	c-6.6,1.7-13.4,3.4-20.1,4.4c-4.8,0.7-9.9-0.5-13.4-4.9c-1.1-1.4-2.2-2.6-3.3-4c-1.6-2-1.6-3.8,0-5.8c1.4-1.8,3.2-3.1,5.2-3.9\r
	c3.4-1.3,6.4-3.7,10.3-3.7"/>\r
<path class="sad-dxh-st" d="M194.4,326c-2.3,5-1.5,10.1-0.9,15.2c0.6,5,2.2,9.8,1.8,14.9c-0.1,1.2-0.1,2.2,1.5,2.8\r
	c9.4,3.2,18.9,4.2,28.6,1.8c2-0.5,2-1.2,1.6-3.1c-1.1-5.2-2.7-10.4-1.9-15.8c0.2-1.6-1.4-3-0.3-4.6"/>\r
<path class="sad-dxh-st" d="M259.4,187.5c-2.2-4.5-6.9-5.8-9.4-4.2c-2.3,1.5-3.2,5.9-1,8.3c2.2,2.5,6.3,1.5,8.3,0c0.5-0.4,1.4-2,3.1-5.2\r
	c1.8-3.4,2.1-4.1,2.1-5.2c-0.1-1.7-1-3.3-2.1-4.2c-4-3.2-15-0.2-18.8,7.3c-0.4,0.8-3.1,6.4,0,11.5c2.1,3.4,6.1,5.4,10.4,5.2"/>\r
<path class="sad-dxh-st" d="M275,182.2c6.1-4.4,13.6-4,17.7,0c4.6,4.5,4.6,13.6,1,15.6c-3.4,2-11.3-1.6-11.5-6.3c-0.1-2.6,2.2-5.4,5.2-6.3\r
	c2.9-0.8,5.7,0.5,7.3,2.1c3.2,3.3,2.3,9,0,12.5c-0.6,0.9-3.4,5.4-8.3,5.2c-3.6-0.1-6.9-2.6-8.3-6.3"/>\r
<path class="sad-dxh-st" d="M245.8,219.8c2.2-0.4,3.8,1.3,5.2,2.1c1,0.5,3.2,1.4,15.6-4.2c7.7-3.4,10.2-5.2,13.6-4.2c0.6,0.2,2.9,1,4.2,3.1\r
	c1.1,1.8,1.2,3.9-1,11.5c-1.9,6.5-2.9,9.7-4.2,11.5c-0.7,0.9-5.1,6.5-12.5,7.3c-3.6,0.4-6.2-0.6-10.4-2.1c-4.3-1.6-7.8-2.8-10.4-6.3\r
	c-2.1-2.8-2.6-5.5-3.1-8.3c-0.5-2.8-1.3-7.2,1-9.4C244,220.6,244.7,220,245.8,219.8z"/>\r
<path class="sad-dxh-st" d="M250,221.9c0.4,1.2,1.3,3,3.1,4.2c1.4,0.9,3.1,1.3,8.3,1c4.7-0.3,7-0.4,9.4-1c6.5-1.8,11.1-5.7,13.6-8.3"/>\r
<path class="sad-dxh-st" d="M240.6,194.8c-1.4,3.8-2.8,7.6-4.2,11.5"/>\r
<path class="sad-dxh-st" d="M293.8,202.1c-0.3,8-0.4,16.8,0,26.1c0.4,8.9,1.1,17.3,2.1,25"/>\r
<path class="sad-dxh-st" d="M231.2,226.1c-0.9,3.3-1.7,7.2-2.1,11.5c-0.8,8.3,0,15.5,1,20.9"/>\r
</svg>\r
`,Nl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.salary-cat-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="salary-cat-st" d="M187,306c6.97-23.96,14.19-41.73,19.5-53.5c4.12-9.12,6.47-13.26,10.5-17.5c12.42-13.06,25.94-11.38,28.5-19.5\r
	c2.43-7.7-6.06-20.92-16.5-24.5c-25.27-8.66-71.39,35.94-90.5,83.5c-13.8,34.34-10.8,63.44-6,110c1.6,15.52,6.32,63.6,22,66\r
	c7.42,1.13,9.53-9.14,27-17c8.14-3.66,20.09-4.44,44-6c22.25-1.45,27.76-0.44,31.5,3.5c6.38,6.72,1.4,15.43,5.5,18.5\r
	c10.35,7.74,70.64-26.32,87-81c4.83-16.13,17.56-58.69,11-83c-0.63-2.33-3.41-11.8,1-16c2.69-2.56,6.64-1.82,15-1\r
	c18.26,1.8,27.44,2.62,30-1c1.49-2.1,1.4-6.41-5-16"/>\r
<path class="salary-cat-st" d="M331.5,271.5c-5.08-0.03-12.59-0.82-20-5c-11.9-6.72-11.11-15.19-22-23c-11.71-8.4-30.57-11.47-40-3\r
	c-3.87,3.48-6.65,9.36-6,15c0.8,6.96,6.42,10.06,16,19c13.37,12.48,11.52,14.94,20,22c6.42,5.35,17.53,12.3,36,15"/>\r
<path class="salary-cat-st" d="M91.5,207.5c-7.67,7.67-15.33,15.33-23,23"/>\r
<path class="salary-cat-st" d="M107.5,241.5c-2.19,1.84-5.48,5.08-8,10c-2.44,4.77-4.18,8.16-3,11c2.16,5.2,12.85,5.56,32,6\r
	c5.56,0.13,10.1,0.07,13,0"/>\r
<path class="salary-cat-st" d="M414.5,219.5c6.67,6.33,13.33,12.67,20,19"/>\r
<path class="salary-cat-st" d="M70.5,188.5c16.17-15.51,28.93-29.02,38-39c13.13-14.45,19.7-21.67,23-27c11.06-17.85,11.63-29.88,26-43\r
	c5.62-5.13,10.1-8.75,16-9c6.39-0.27,12.97,3.15,17,8c6.81,8.22,3.05,16.66,10,22c3.32,2.55,7.03,2.82,10,3\r
	c33.94,2.04,64.23-2.17,89,0c2.22,0.19,4.65,0.46,8,0c13.14-1.81,17.05-11.57,30-20c9.22-6,26.2-13.4,35-7c3.85,2.8,4.84,7.33,6,13\r
	c3.8,18.64-4.72,26.41-3,39c1.78,13.04,12.58,16.9,29,33c9.81,9.62,22.57,24.53,34,47"/>\r
<path class="salary-cat-st" d="M177.5,215.5c0.33-15.33,0.67-30.67,1-46c-0.07-6.93,5.82-11.75,11-11c4.13,0.6,7.78,4.74,8,10\r
	c-0.33,10.33-0.67,20.67-1,31"/>\r
<path class="salary-cat-st" d="M301.5,167.5c0,16,0,32,0,48c-0.44,6.11-5.69,10.48-11,10c-4.41-0.4-8.26-4.09-9-9c0-16.33,0-32.67,0-49\r
	c1.09-4.38,4.75-7.59,9-8C295.4,159.03,300.17,162.38,301.5,167.5z"/>\r
<path class="salary-cat-st" d="M197.5,176.5c7-9,14-18,21-27c0.62-0.87,9.23-12.59,24-12c12.67,0.51,19.98,9.68,21,11c6,7.67,12,15.33,18,23"\r
	/>\r
<path class="salary-cat-st" d="M301.5,197.5c19.33,27.33,38.67,54.67,58,82"/>\r
<path class="salary-cat-st" d="M188.5,159.5"/>\r
</svg>\r
`,Pl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.sans-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="sans-st" d="M96.5,288c-4.96-11.29-10.87-27.64-14-48c-2.19-14.26-7.6-49.49,6-83c18.24-44.94,61.65-64.6,78-72\r
	c72.89-33,172.34-18.09,223,41c7.29,8.5,29.15,34.04,34,72c3.77,29.53-4.06,56.18-9,73c-3.98,13.55-8.52,24.45-12,32\r
	c5.06,13.37,10.13,33.66,4,55c-16.23,56.47-97.9,74.72-141,77c-64.21,3.4-156.59-22.59-174-86C85.14,325.84,90.44,303.72,96.5,288z"\r
	/>\r
<path class="sans-st" d="M171.5,290c5.12-2.65,31.12-16.67,35-42c0.7-4.57,2.32-15.13-4-23c-5.69-7.1-14.63-8.02-24-9\r
	c-7.65-0.8-27.48-2.86-45,10c-5.9,4.33-16.43,12.06-17,24c-0.49,10.22,6.58,18.08,11,23c5.03,5.6,11.26,12.52,20,13\r
	c10.04,0.55,13.85-7.93,28-9c5.02-0.38,9.21,0.33,12,1"/>\r
<path class="sans-st" d="M319.5,290c-4.46-3.82-11.17-10.36-17-20c-3.37-5.58-18.64-30.83-9-44c5.22-7.14,15.4-7.51,29-8\r
	c8.73-0.32,27.02-0.73,44,11c6.3,4.35,16.18,11.18,17,22c0.57,7.55-3.49,13.4-6,17c-6.14,8.82-17.25,16.35-29,16\r
	c-6.16-0.18-6.95-2.37-16-4c-9.43-1.7-17.52-0.95-23,0"/>\r
<path class="sans-st" d="M147.5,339.5c-3.38-0.45-10.52,11.85-8,22.5c0.87,3.65,3.04,7.21,12,15c3.39,2.95,14.23,12.27,27,18\r
	c18.18,8.16,66.94,21.03,117,0c0,0,29.05-12.26,50-34c10.47-10.86,13-15,13-15c1.97-2.96,2.88-5.57,6-8c4.44-3.46,8.05-2.87,9-5.5\r
	c1.03-2.86-2.2-6.42-5-9.5c-2.65-2.91-7.03-7.66-13-8c-4.48-0.25-7.95,2.28-9,3c-13.87,9.53-85.36,33.31-146,37\r
	c-2.17,0.13-43.74,4.38-50-10C149.58,342.89,149.14,339.72,147.5,339.5z"/>\r
<path class="sans-st" d="M166.5,354c-0.33,6.33-0.67,12.67-1,19"/>\r
<path class="sans-st" d="M207.5,355c0,11.33,0,22.67,0,34"/>\r
<path class="sans-st" d="M248.5,349c-0.33,13.67-0.67,27.33-1,41"/>\r
<path class="sans-st" d="M293.5,338c0,14.33,0,28.67,0,43"/>\r
<path class="sans-st" d="M334.5,324c0,9.33,0,18.67,0,28"/>\r
<path class="sans-st" d="M241.5,304c2.23-1.87,1.6-3.37,4-6c1.11-1.22,2.85-3.12,5-3c2.27,0.13,3.92,2.47,5,4c1.66,2.36,1.3,3.38,3,5\r
	c0.61,0.58,2.06,1.96,4,2c2.28,0.05,4.21-1.77,5-3c0.9-1.4,2.22-4.95-6-19c-6.67-11.39-10-17.09-14-17c-4.17,0.09-7.12,5.73-13,17\r
	c-4.44,8.51-7.82,15.17-5,19c1.38,1.87,4.28,3.14,7,3C239.21,305.86,241.1,304.33,241.5,304z"/>\r
<path class="sans-st" d="M343.5,320c2.36,0.23,7.33,1.1,11,5c5.63,5.99,5.98,16.75,0,26"/>\r
<path class="sans-st" d="M156.5,351c-1.15-0.01-6.51,0.07-10,4c-4.09,4.61-4.03,12.72,1,19"/>\r
</svg>\r
`,Fl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.scp-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="scp-st" d="M108.5,302.5C95.33,310.33,82.17,318.17,69,326c16.83,29.17,33.67,58.33,50.5,87.5\r
	c13.17-8.83,26.33-17.67,39.5-26.5c9.8,8.02,44.85,34.7,97,35c50.27,0.29,84.72-24.11,95-32c13.33,7.67,26.67,15.33,40,23\r
	c17-29.67,34-59.33,51-89c-13-7.67-26-15.33-39-23c2.12-11.98,8.59-56.76-18-103c-26.27-45.68-67.5-62.69-79-67\r
	c0-15.33,0-30.67,0-46c-33.67-0.33-67.33-0.67-101-1c-0.33,17.33-0.67,34.67-1,52c-9.88,3.21-55.13,19.1-81.5,67.5\r
	C98.02,248.44,106.09,291.49,108.5,302.5z"/>\r
<path class="scp-st" d="M254.5,188.5c-43.45,0.49-78.06,35.55-82,76c-4.57,46.86,32.83,92.45,82,93c49.4,0.55,88.09-44.6,84-92\r
	C334.91,223.84,298.94,188,254.5,188.5z"/>\r
<path class="scp-st" d="M145.5,338.5c22.67-14,45.33-28,68-42"/>\r
<path class="scp-st" d="M205.5,283.5c10,0,20,0,30,0c-4.67,9.33-9.33,18.67-14,28C216.17,302.17,210.83,292.83,205.5,283.5z"/>\r
<path class="scp-st" d="M366.05,338.5c-22.67-14-45.33-28-68-42"/>\r
<path class="scp-st" d="M306.05,283.5c-10,0-20,0-30,0c4.67,9.33,9.33,18.67,14,28C295.38,302.17,300.71,292.83,306.05,283.5z"/>\r
<path class="scp-st" d="M255.53,146.68c0.16,26.64,0.32,53.28,0.47,79.92"/>\r
<path class="scp-st" d="M271.27,226.54c-5.2,8.54-10.41,17.08-15.61,25.62c-5.54-8.84-11.08-17.68-16.62-26.53\r
	C249.78,225.93,260.52,226.24,271.27,226.54z"/>\r
</svg>\r
`,Il=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.serika-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="serika-st" d="M112.15,189.09c9.78-29.98,25.98-46.33,35.54-54.24c15.39-12.74,39.59-25.22,46.76-18.7\r
	c1.94,1.77,2.79,4.84,3.74,8.42c1.95,7.32,0.84,13.58,0,16.83"/>\r
<path class="serika-st" d="M176.68,150.75c5.1-3.36,17.75-10.74,35.54-11.22c16.79-0.46,29.24,5.46,34.6,8.42"/>\r
<path class="serika-st" d="M238.4,144.21c4.23-0.76,9.85-2.44,14.96-6.55c6.48-5.19,8.99-11.73,10.29-11.22c0.78,0.31,0.93,3.1-1.87,14.03\r
	c14.47-5.22,26.97-8.35,36.47-10.29c0,0,12.3-2.51,32.73-2.81c3.2-0.05,5.15,0,7.48,0.94c12.08,4.84,13.72,25.16,14.03,28.99\r
	c1.38,17.12-6.29,30.52-10.29,36.47"/>\r
<path class="serika-st" d="M142.08,161.04c-3.47,3.15-9.09,8.33-15.9,14.96c-11.35,11.06-13,13.5-17.77,14.96\r
	c-11.77,3.62-22.51-4.86-24.31-1.87c-1.47,2.43,5.06,9.01,7.48,11.22c3.86,3.53,7.75,5.48,10.29,6.55\r
	c-0.12,3.02-0.79,8.97-4.68,14.96c-1.37,2.12-6,9.25-14.03,11.22c-4.58,1.13-8.23,0.06-8.42,0.94c-0.2,0.97,4.1,3.06,8.42,3.74\r
	c4.3,0.67,7.96-0.17,10.29-0.94c-2.12,6.34-4.44,16.29-2.81,28.05c2.03,14.66,9.58,27.8,12.16,27.12\r
	c2.32-0.61,0.01-12.31,2.81-13.09c2.81-0.79,5.61,10.19,15.9,18.7c9.55,7.91,21.94,10.66,23.38,8.42c0.65-1.01-1.2-2.58-3.74-7.48\r
	c0,0-2.48-4.78-4.68-13.09c-3.46-13.1-1.33-28.98-0.94-31.8"/>\r
<path class="serika-st" d="M145.82,195.64c-6.82,12.37-9.8,23.38-11.22,30.86c0,0-3.68,19.26,2.81,30.86c0.25,0.45,1.17,2.03,1.87,1.87\r
	c2.07-0.46-0.67-15.15,1.87-15.9c1.31-0.39,2.7,3.35,7.48,8.42c1.92,2.03,8.39,8.89,11.22,7.48c2.08-1.03,0.71-5.79,0.94-14.03\r
	c0.19-6.91,1.37-11.82,2.81-17.77c1.51-6.27,4.7-15.96,12.16-27.12"/>\r
<path class="serika-st" d="M187.9,172.26c-5.57,8.69-11.44,21.04-13.09,36.47c-2.63,24.63,6.71,45.86,15.9,53.3\r
	c0.51,0.41,4.59,3.67,5.61,2.81c1.5-1.27-4.98-10.21-3.74-11.22c1.03-0.84,5.9,4.98,14.03,10.29c9.45,6.18,20.43,9.29,21.51,7.48\r
	c0.39-0.65-0.65-1.7-2.81-4.68c-2.79-3.85-4.97-8.11-7.48-12.16c-2.55-4.11-5.93-13.07-9.35-34.6"/>\r
<path class="serika-st" d="M244.95,190.03c0.77,8.98,0.94,25.49-6.55,43.95c-5,12.34-11.71,21.33-16.83,27.12"/>\r
<path class="serika-st" d="M194.45,264.84c-3.58,2.8-4,4.05-3.74,4.68c0.79,1.9,8.87,0.11,9.35,0c4.05-0.92,7.21-2.47,9.35-3.74"/>\r
<path class="serika-st" d="M196.32,262.97c1.25-1.25,2.49-2.49,3.74-3.74"/>\r
<path class="serika-st" d="M243.07,217.15c2.23,5.15,6.41,13.02,14.03,20.57c9.83,9.75,20.4,14.03,26.18,15.9"/>\r
<path class="serika-st" d="M276.74,195.64c6.47,19.16,7.58,34.74,7.48,44.89c-0.04,3.85-0.09,7.81-0.94,13.09\r
	c-1.04,6.52-3.84,23.99-15.9,36.47c-2.09,2.16-4.18,3.89-3.74,4.68c0.82,1.47,10.31-0.69,17.77-6.55c4.76-3.74,6.28-7.08,7.48-6.55\r
	c1.88,0.84,0.22,9.98-2.81,17.77c-3.91,10.06-8.49,13.76-7.48,14.96c1.9,2.27,21.56-6.83,35.54-23.38\r
	c12.01-14.22,16.15-29.59,17.77-38.34c2.22,1.45,6.55,3.78,12.16,3.74c8.88-0.06,17.45-6.05,16.83-9.35\r
	c-0.57-3.07-8.56-1.16-15.9-7.48c-5.46-4.71-8.35-12.08-6.55-14.03c1.35-1.46,4.31,1.26,10.29,0.94c6.6-0.36,12.5-4.2,12.16-5.61\r
	c-0.24-0.99-3.52-0.6-6.55-0.94c-8.92-0.99-15.03-8.22-20.57-14.96c-13.38-16.27-11.99-26.13-26.18-39.28\r
	c-2.28-2.11-4.29-3.69-5.61-4.68"/>\r
<path class="serika-st" d="M325.37,192.83c2.59-0.45,6.55-0.82,11.22,0c1.66,0.29,6.62,1.17,10.29,3.74c9.07,6.37,7.61,21.31,7.48,22.44"\r
	/>\r
<path class="serika-st" d="M353.42,225.56c-0.94,5.92-1.87,11.85-2.81,17.77"/>\r
<path class="serika-st" d="M345.94,256.42c-2.21,4.55-4.98,10.89-7.48,18.7c-6.75,21.11-7.11,39.37-6.55,50.5\r
	c0.79,15.59,1.76,30.72,12.16,44.89c2.12,2.88,4.15,5.08,5.61,6.55"/>\r
<path class="serika-st" d="M340.33,364.9c3.39,3.52,8.13,7.1,14.03,7.48c6.65,0.43,10.73-3.48,12.16-1.87c1.86,2.09-3.14,10.87-10.29,15.9\r
	c-2.25,1.58-4.77,3.36-8.42,3.74c-5.69,0.6-7.47-2.88-13.09-2.81c-5.9,0.07-7.38,3.9-12.16,4.68c-4.26,0.69-10.58-1.15-19.64-12.16"\r
	/>\r
<path class="serika-st" d="M328.17,265.78c-0.31,2.8-0.86,7.05-1.87,12.16c-1.91,9.7-4.05,15.4-5.61,20.57\r
	c-1.82,6.04-6.4,21.67-4.68,39.28c0.52,5.3,1.84,13.16,5.61,22.44"/>\r
<path class="serika-st" d="M125.25,161.04c-3.61-1.55-8.98-3.06-14.96-1.87c-11.78,2.35-21.29,14.29-23.38,29.93"/>\r
<path class="serika-st" d="M86.9,195.64c-0.31,12.16-0.62,24.31-0.94,36.47"/>\r
<path class="serika-st" d="M86.9,238.66c2.84,20.16,4.08,37.13,4.68,49.56c0,0,3.31,69.35-14.96,85.1c-1.73,1.49-5.83,5.03-9.35,3.74\r
	c-3.72-1.36-4.54-7.3-4.68-8.42"/>\r
<path class="serika-st" d="M86.9,352.75c-2.99,5.93-6.85,11.32-11.22,11.22c-6.26-0.14-8.41-11.41-14.03-11.22\r
	c-5.21,0.17-10.19,10.09-10.29,18.7c-0.09,8.56,4.63,17,12.16,21.51c10.45,6.26,21.47,2.03,24.31,0.94\r
	c1.78-0.68,6.59-2.73,12.16-8.42c3.28-3.35,10.44-11.67,14.96-31.8c2.2-9.8,4.53-25.71,1.87-45.82"/>\r
<path class="serika-st" d="M95.32,389.22c6.17,4.08,10.95,3.99,13.09,3.74c11.19-1.3,21.43-15.16,22.44-34.6"/>\r
<path class="serika-st" d="M355.29,219.95c4.25-6.59,9.05-13.06,11.22-12.16c1.32,0.55,0.82,3.48,1.87,3.74\r
	c2.07,0.51,4.99-10.6,14.03-21.51c0.39-0.47,7.49-8.95,10.29-7.48c1.09,0.57,0.75,2.26,1.87,2.81c2.03,0.99,5.3-3.45,9.35-6.55\r
	c8.14-6.23,20.14-7.63,23.38-3.74c1.32,1.59,0.25,2.93,1.87,4.68c2.52,2.72,5.98,0.41,10.29,2.81c2.46,1.37,5.02,4.18,5.61,7.48\r
	c0.68,3.78-1.6,6.08,0,8.42c1.24,1.81,3.18,1.27,3.74,2.81c0.9,2.47-3.63,5.07-2.81,7.48c0.61,1.79,3.37,1.13,4.68,2.81\r
	c2.51,3.22-2.14,12.73-9.35,19.64c-7.85,7.51-17.16,10.43-16.83,11.22c0.3,0.71,7.49-2.45,8.42-0.94\r
	c0.91,1.49-4.39,7.18-10.29,11.22c-6.06,4.15-11.53,5.73-11.22,7.48c0.26,1.47,4.26,1.12,4.68,2.81c0.51,2.06-4.78,5.44-9.35,7.48\r
	c-8.6,3.83-15.56,3.31-15.9,5.61c-0.22,1.47,2.58,2.15,2.81,3.74c0.39,2.74-6.95,7.06-29.93,14.03"/>\r
<path class="serika-st" d="M166.39,305.05c0.59,0.18,1.5-1.35,1.87-1.87c1.93-2.75,7.48-4.07,10.29-1.87c1.33,1.04,2.18,2.96,1.87,4.68\r
	c-0.64,3.57-6.2,5.85-9.35,4.68c-0.93-0.35-2.5-1.31-2.81-0.94c-0.13,0.16,0.08,0.43,0,0.94c0,0-0.1,0.6-0.78,1.21\r
	c-0.76,0.68-5.97,2.45-13.25,4.4c-1.7,0.64-3.55,0.26-4.68-0.94c-1.36-1.44-1.01-3.38-0.94-3.74c0.36-1.78,1.82-3.22,3.74-3.74\r
	c4.05-1.25,8.1-2.49,12.16-3.74c0.23-0.07,0.59-0.14,0.94,0C166.02,304.35,166.05,304.95,166.39,305.05z"/>\r
<path class="serika-st" d="M144.88,305.99c1.56,1.25,3.12,2.49,4.68,3.74"/>\r
<path class="serika-st" d="M159.85,314.4c12.31,4.44,31.82,9.76,56.11,9.35c30.36-0.5,53.64-9.71,66.4-15.9"/>\r
<path class="serika-st" d="M236.53,276.06c12.47-4.99,24.94-9.98,37.41-14.96"/>\r
<path class="serika-st" d="M185.1,276.06c-7.48-3.27-15.91-6.5-25.25-9.35c-6.21-1.9-12.16-3.43-17.77-4.68"/>\r
<path class="serika-st" d="M189.77,321.89c-3.51-9.54-3.94-17.35-3.74-22.44c0.08-2.05,0.57-11.48,3.74-12.16\r
	c2.09-0.45,3.62,3.28,6.55,2.81c2.52-0.41,2.77-3.39,5.61-3.74c1.77-0.22,2.08,0.9,4.68,0.94c2.34,0.03,2.5-0.87,4.68-0.94\r
	c2.8-0.08,3.11,1.4,6.55,1.87c3.3,0.45,3.83-0.81,5.61,0c2.99,1.36,2.84,5.53,4.68,5.61c1.4,0.06,2.57-2.33,2.81-2.81\r
	c1.44-2.94,0.19-5.15,0.94-5.61c1.55-0.97,10.15,6.65,14.96,17.77c2.68,6.19,3.5,11.87,3.74,15.9"/>\r
<path class="serika-st" d="M190.71,321.89c0.58,2.2,1.83,5.79,4.68,9.35c1.81,2.27,3.44,4.31,5.61,4.68c3.93,0.67,8.93-4.27,12.16-12.16"\r
	/>\r
<path class="serika-st" d="M213.15,324.69c1.09,2.16,3.07,5.44,6.55,8.42c2.29,1.96,4.3,3.68,6.55,3.74c4.32,0.11,8.93-5.98,11.22-14.96"\r
	/>\r
<path class="serika-st" d="M207.54,333.11c1.03-0.38,2.29-0.74,3.74-0.94c3.64-0.49,6.65,0.3,8.42,0.94"/>\r
<path class="serika-st" d="M206.6,334.04c-0.1,0.87-0.19,2.18,0,3.74c0.24,1.98,0.8,3.37,0.94,3.74c1.58,4.32-2.12,12.84-4.68,24.31\r
	c-1.17,5.28-1.08,6.56-0.94,7.48c0.42,2.68,2.47,5.56,6.55,11.22c2.82,3.92,3.61,4.64,4.68,4.68c1.22,0.04,2.11-0.84,5.61-5.61\r
	c5.77-7.85,6.34-9.53,6.55-11.22c0.11-0.93,0.14-2.11-0.94-6.55c-3.07-12.59-7.05-18.25-5.61-23.38c0.16-0.55,0.7-2.26,0.94-4.68\r
	c0.19-1.95,0.11-3.57,0-4.68"/>\r
<path class="serika-st" d="M207.54,342.46c3.74,0,7.48,0,11.22,0"/>\r
<path class="serika-st" d="M133.66,305.05c-1.3,5.76-2.99,13.76-4.68,23.38c-3.96,22.66-2.82,25.46-1.87,27.12\r
	c3.89,6.78,16,7.63,40.21,9.35c3.13,0.22,8.77,0.53,11.22-2.81c1.37-1.86,1.18-4.09,0.94-6.55c-1.18-11.96-1.77-17.94-2.81-21.51\r
	c-1.18-4.08-3.16-9.65-6.55-15.9"/>\r
<path class="serika-st" d="M129.92,366.77c1.17,0.66,3.12,1.72,5.61,2.81c0,0,17.01,7.42,32.73,2.81c2.33-0.68,4.43-1.71,5.61-3.74\r
	c0.84-1.43,0.94-2.9,0.94-3.74"/>\r
<path class="serika-st" d="M134.6,369.58c-0.39,2.47-0.28,5.1,0.94,7.48c4.8,9.37,24.93,11.03,30.86,2.81c0.99-1.38,2.06-3.69,1.87-7.48"\r
	/>\r
<path class="serika-st" d="M247.75,320.02c-0.3,5.74-0.06,13.16,1.87,21.51c2.01,8.71,4.98,14.69,7.48,19.64\r
	c2.37,4.69,3.59,7.06,5.61,8.42c5.88,3.96,14.2,0.91,21.51-1.87c12.36-4.71,22.71-8.65,24.31-16.83c1.5-7.62-5.31-15.25-15.9-27.12\r
	c-3.58-4.01-6.86-7.13-9.35-9.35"/>\r
<path class="serika-st" d="M264.58,370.51c0.76,6.27,3.42,8.53,4.68,9.35c3.9,2.55,9.82,0.18,21.51-4.68\r
	c12.48-5.18,14.32-7.94,14.96-10.29c0.79-2.89-0.1-5.67-0.94-7.48"/>\r
<path class="serika-st" d="M275.81,380.8c0.45,0.71,5.38,8.27,14.03,8.42c1.29,0.02,7.4,0.13,11.22-4.68c3.18-4,3.55-9.86,0.94-14.96"/>\r
<path class="serika-st" d="M339.4,272.32c8.05,6.48,14.29,12.39,18.7,16.83c13.97,14.07,14.87,18.7,14.96,21.51\r
	c0.23,6.97-3.92,12.47-6.55,15.9c-5.84,7.63-13.29,10.88-16.83,12.16"/>\r
<path class="serika-st" d="M333.79,291.96c1.85,2.48,4.21,5.93,6.55,10.29c1.34,2.5,2.23,4.49,5.61,13.09\r
	c6.14,15.64,6.62,17.86,5.61,20.57c-1,2.68-2.89,4.31-6.55,7.48c-3.87,3.35-7.64,5.36-10.29,6.55"/>\r
<path class="serika-st" d="M362.77,331.24c3.59,6.29,5.95,11.82,7.48,15.9c3.42,9.11,3.17,12.18,2.81,14.03\r
	c-1.02,5.13-4.48,8.56-6.55,10.29"/>\r
<path class="serika-st" d="M342.2,366.77c2.25,0.46,8.81,1.5,15.9-1.87c9.39-4.47,12.53-13.29,13.09-14.96"/>\r
<path class="serika-st" d="M179.48,351.81c2.25,1.75,5.68,4,10.29,5.61c6.25,2.18,11.73,2.14,14.96,1.87"/>\r
<path class="serika-st" d="M222.5,359.29c4.93,0.43,12.78,0.42,21.51-2.81c3.73-1.38,6.85-3.06,9.35-4.68"/>\r
<path class="serika-st" d="M283.29,340.59c0.51,5.35,0.5,14.14-3.74,23.38c-1.15,2.5-2.44,4.67-3.74,6.55"/>\r
<path class="serika-st" d="M135.53,338.72c0.25,2.72,1.19,8.85,5.61,14.96c4.66,6.45,10.57,9.26,13.09,10.29"/>\r
<path class="serika-st" d="M178.55,320.02c2.33,8.74,2.83,15.18,2.81,19.64c-0.01,1.88-0.12,5.05,1.87,6.55c0.6,0.45,1.91,1.13,7.48,0\r
	c2.3-0.47,5.55-1.28,9.35-2.81"/>\r
<path class="serika-st" d="M240.27,321.89c0.34,4.05,1.16,7.2,1.87,9.35c1.29,3.92,2.43,5.28,1.87,7.48c-0.56,2.2-2.36,3.44-5.61,5.61\r
	c-2.03,1.36-5.14,3.17-9.35,4.68"/>\r
</svg>\r
`,Ll=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.shinobu_kocho-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="shinobu_kocho-st" d="M229.85,396.67c9.94,4.76,25.04,10.59,44.14,12.81c34.93,4.07,60.7-6.53,75.46-12.81\r
	c14.7-6.26,31.63-13.98,34.17-28.48c0.89-5.09-0.23-9.64-1.42-12.81c-1.44-2.09-3.39-5.47-4.27-9.97c-0.9-4.59-0.29-8.24,0-9.97\r
	c1.28-7.71,3.15-20.51,5.7-37.02"/>\r
<path class="shinobu_kocho-st" d="M215.61,311.24c1.28-3.19,3.27-8.15,5.7-14.24c8.5-21.32,10.2-25.87,11.39-25.63c1.98,0.4,1.13,13.68,0,22.78\r
	c-2.52,20.36-7.97,32.4-7.12,32.75c1.37,0.57,25.34-26.79,28.48-65.5c0.05-0.65,4.66-57.45,7.12-75.46c0.25-1.84,0.92-6.3,4.27-8.54\r
	c4.7-3.15,11.98-0.11,15.66,1.42c1.45,0.61,6.23,2.71,12.81,8.54c9.48,8.41,11.72,14.82,15.66,14.24c2.26-0.34,3.1-2.68,5.7-7.12\r
	c3.32-5.69,12.7-21.75,21.36-21.36c2.84,0.13,4.76,2,8.54,5.7c6.64,6.49,9.31,13.79,9.97,15.66c5.77,16.37,9.68,42.24,11.39,52.68\r
	c5.57,33.96,10.74,43.98,18.51,51.26c3.79,3.55,7.5,5.8,9.97,7.12"/>\r
<path class="shinobu_kocho-st" d="M211.34,262.83c0.87,20.19,2.56,37.48,4.27,51.26c3.46,27.81,6.27,35,9.97,41.29c3.27,5.57,6.96,9.94,5.7,11.39\r
	c-2.33,2.67-19.01-7.49-28.48-14.24c-2.41-1.72-4.36-3.22-5.7-4.27c0.16,2.36,0.52,5.84,1.42,9.97c1.75,8,3.8,10.42,2.85,11.39\r
	c-2.34,2.38-19.95-6.91-31.32-22.78c-7.17-10.01-10.08-20.15-11.39-27.05c-1.72,15.7-3.26,18.5-4.27,18.51\r
	c-3.75,0.05-15.83-37.57,0-58.38c6.28-8.25,14.19-10.24,19.93-22.78c3.22-7.03,3.31-12.03,4.27-19.93\r
	c2.13-17.45,5.12-41.92,18.51-56.95c4.39-4.93,12.71-12,28.48-15.66"/>\r
<path class="shinobu_kocho-st" d="M219.88,178.82c2.04-5.64,6.4-15,15.66-22.78c5.09-4.28,11.95-10.04,21.36-9.97\r
	c8.93,0.07,15.41,5.37,22.78,11.39c6.98,5.71,11.54,11.64,14.24,15.66"/>\r
<path class="shinobu_kocho-st" d="M298.19,166.01c1.94-2.29,4.77-5.35,8.54-8.54c7.51-6.36,15.42-10.41,18.51-11.39\r
	c12.39-3.93,34.53,13.89,51.26,44.14"/>\r
<path class="shinobu_kocho-st" d="M385.04,211.57c5.76,16.04,13.57,26.25,19.93,32.75c5.1,5.21,24.38,23.45,34.17,34.17\r
	c1.34,1.47,4.34,4.82,5.7,9.97c0.92,3.49,0.77,6.59,0,11.39c-1.71,10.67-2.73,17.07-7.12,24.21c-4.19,6.81-11.42,14.25-14.24,12.81\r
	c-2.39-1.21,0.48-7.76-1.42-18.51c-1-5.64-2.88-10.04-4.27-12.81c-0.44,4.61-1.98,13.8-8.54,22.78\r
	c-11.01,15.07-27.71,17.97-31.32,18.51"/>\r
<path class="shinobu_kocho-st" d="M363.69,170.28c11.79,4.9,21.4,9.37,28.48,12.81c6.85,3.34,9.08,4.61,11.39,7.12\r
	c5.4,5.86,6.23,12.98,7.12,27.05c0.66,10.43,1.18,21.86,1.42,34.17"/>\r
<path class="shinobu_kocho-st" d="M357.99,392.4c1.37,2.85,3.29,6.77,5.7,11.39c4.23,8.14,5.39,9.66,7.12,9.97c4.56,0.81,9.37-7.49,9.97-8.54\r
	c1.34,0.7,3.3,1.7,5.7,2.85c6.69,3.21,10.07,4.81,11.39,4.27c4.11-1.66,3.71-13.87,1.42-22.78c-1.34-5.21-4.69-14.61-14.24-24.21"/>\r
<path class="shinobu_kocho-st" d="M185.71,362.5c-4.09,13.96-5.35,25.73-5.7,34.17c-0.24,5.79-0.92,22.68,4.27,24.21\r
	c0.99,0.29,1.91-0.06,11.39-5.7c2.87-1.71,5.3-3.17,7.12-4.27c2.12,2.64,5.38,6.29,9.97,9.97c4.91,3.94,8.32,6.61,11.39,5.7\r
	c3.91-1.16,5.19-7.48,5.7-9.97c3.63-17.87-12.62-48-18.51-58.38"/>\r
<path class="shinobu_kocho-st" d="M265.44,147.5c6.9,0.06,14.54,0.46,22.78,1.42c8.93,1.04,17.03,2.57,24.21,4.27"/>\r
<path class="shinobu_kocho-st" d="M244.08,148.92c-9.64,1.19-67.39,9.3-101.09,59.8c-6.89,10.32-27.28,41.92-21.36,84.01\r
	c3.85,27.36,17.04,46.52,24.21,55.53"/>\r
<path class="shinobu_kocho-st" d="M151.53,334.02c-2.55,3.86-6.39,11.08-5.7,19.93c1.17,14.98,14.83,28.61,34.17,32.75"/>\r
<path class="shinobu_kocho-st" d="M134.45,222.96c-1.96,7.69-3.74,18.5-2.85,31.32c1.55,22.25,10.34,38.64,15.66,46.99"/>\r
<path class="shinobu_kocho-st" d="M138.72,214.42c0.35,5.65,1.59,13.86,5.7,22.78c7.51,16.35,20,25.05,25.63,28.48"/>\r
<path class="shinobu_kocho-st" d="M141.57,211.57c1.42,5.78,4.21,14.09,9.97,22.78c8.2,12.38,18.32,19.35,24.21,22.78"/>\r
<path class="shinobu_kocho-st" d="M320.97,147.5c1.44-1.92,3.19-4.77,4.27-8.54c2.46-8.6-0.32-15.95-1.42-18.51c1.89-5.41,4.15-13.79,4.27-24.21\r
	c0.15-12.58,0.24-20.59-4.27-24.21c-11.66-9.34-52.77,11.64-72.62,45.56c-5.42,9.27-8.32,17.91-9.97,24.21\r
	c-3.29-1.02-9.44-2.47-17.09-1.42c-7.38,1.01-12.77,3.88-15.66,5.7c-17.74-25.29-37.17-39.39-49.83-46.99\r
	c-10.21-6.12-48.57-29.11-64.07-15.66c-9.53,8.27-7.49,27.77-7.12,31.32c1.02,9.74,4.61,17.11,7.12,21.36\r
	c-1.6,2.89-5.54,10.89-4.27,21.36c1.76,14.57,12.25,22.72,14.24,24.21c-8.46,9.38-10.16,23.1-4.27,34.17\r
	c5.75,10.81,17.65,17.05,29.9,15.66"/>\r
<path class="shinobu_kocho-st" d="M104.55,221.54c-0.88,0.23-17.1,4.76-21.36,19.93c-2.41,8.59,0.32,15.93,1.42,18.51\r
	c-7.75,5.59-14.73,8.42-19.93,9.97c-9.46,2.82-16.23,2.37-18.51,7.12c-2.08,4.33,1.19,9.61,1.42,9.97c2.4,3.75,6.51,5.53,9.97,5.7\r
	c4.68,0.22,7.27-2.58,14.24-7.12c3.45-2.25,8.7-5.4,15.66-8.54c0.42,1.58,2.39,8.22,8.54,11.39c7.31,3.76,17.64,1.15,24.21-7.12"/>\r
<path class="shinobu_kocho-st" d="M338.06,311.24c1.59-2.98,5.69-9.52,12.81-11.39c10.76-2.83,25.13,5.84,31.32,22.78"/>\r
<path class="shinobu_kocho-st" d="M212.76,336.87c2.02-4.08,10.08-19.13,28.48-27.05c19.65-8.46,37.27-2.83,41.29-1.42"/>\r
<path class="shinobu_kocho-st" d="M343.75,304.12c-1.5,4.31-11.67,34.36-2.85,48.41c1.24,1.98,3.93,6.26,8.54,7.12c5.09,0.95,9.61-2.8,11.39-4.27\r
	c13.43-11.13,5.07-49.2,4.27-52.68"/>\r
<path class="shinobu_kocho-st" d="M228.42,325.48c-1.14,5.75-2.06,15.18,1.42,25.63c2.22,6.66,5.29,15.86,14.24,19.93\r
	c0.43,0.19,9.74,4.26,18.51,0c13.46-6.55,15.51-27.81,12.81-41.29c-2.4-11.99-9.02-20.18-12.81-24.21"/>\r
<path class="shinobu_kocho-st" d="M336.63,262.83c4.53-1.06,10.92-2.01,18.51-1.42c10.98,0.85,19.35,4.51,24.21,7.12"/>\r
<path class="shinobu_kocho-st" d="M281.1,265.68c-3.47-0.29-7.29-0.34-11.39,0c-16.95,1.42-29.71,8.92-37.02,14.24"/>\r
<path class="shinobu_kocho-st" d="M315.28,381.01c2.37-0.95,4.75-1.9,7.12-2.85"/>\r
<path class="shinobu_kocho-st" d="M258.32,220.12c2.59-1.36,6.47-3.11,11.39-4.27c14.1-3.32,26.52,0.63,27.05-1.42c0.18-0.69-1.21-1.68-2.85-2.85\r
	c-3.2-2.28-5.75-2.51-5.7-2.85c0.12-0.77,14.02-2.37,21.36,2.85c0.73,0.52,2.47,1.87,4.27,1.42c1.73-0.43,1.95-2.12,4.27-4.27\r
	c2.3-2.12,5.23-3.38,5.7-2.85c0.65,0.73-3.62,4.68-2.85,5.7c0.84,1.09,6.95-2.03,8.54-2.85c3.51-1.8,5.36-3.23,5.7-2.85\r
	c0.37,0.43-1.41,2.75-2.85,4.27c-1.87,1.97-2.97,2.37-2.85,2.85c0.29,1.16,7,0.1,12.81,0c4.61-0.08,10.91,0.41,18.51,2.85"/>\r
<path class="shinobu_kocho-st" d="M259.75,138.96c3.16-4.89,7.92-11.87,14.24-19.93c6.25-7.96,9.47-12.02,14.24-15.66\r
	c4.22-3.22,11.96-8.01,24.21-9.97c-0.47,14.71-0.95,29.43-1.42,44.14"/>\r
<path class="shinobu_kocho-st" d="M276.83,116.18c-0.63,2.99-1.15,6.32-1.42,9.97c-0.63,8.42,0.24,15.71,1.42,21.36"/>\r
<path class="shinobu_kocho-st" d="M281.1,147.5c2.61-3.37,6.32-7.46,11.39-11.39c6.93-5.37,13.69-8.32,18.51-9.97"/>\r
<path class="shinobu_kocho-st" d="M301.04,96.24c-3.07,5.73-6.61,13.91-8.54,24.21c-1.22,6.47-1.52,12.28-1.42,17.09"/>\r
<path class="shinobu_kocho-st" d="M202.79,160.31c-13.71-13-26.09-22.87-35.6-29.9c-19-14.06-27.82-17.79-35.6-19.93\r
	c-9.28-2.56-17.36-2.94-22.78-2.85c-1.45,6.62-2.81,16.57-1.42,28.48c1.65,14.15,6.47,24.91,9.97,31.32\r
	c-2.79,10.5-2.21,19.07-1.42,24.21c1.15,7.56,2.29,15.03,8.54,19.93c5.12,4.02,11.17,4.35,14.24,4.27"/>\r
<path class="shinobu_kocho-st" d="M161.5,126.14c6.17,13.29,12.34,26.58,18.51,39.87"/>\r
<path class="shinobu_kocho-st" d="M131.6,113.33c1.78,5.23,4.09,11,7.12,17.09c4.57,9.19,9.61,16.76,14.24,22.78"/>\r
<path class="shinobu_kocho-st" d="M110.24,120.45c5.57,3.92,14.14,10.17,24.21,18.51c9.32,7.71,11.82,10.51,17.09,14.24\r
	c7.1,5.04,18.37,11.18,35.6,14.24"/>\r
<path class="shinobu_kocho-st" d="M108.82,141.8c2.07,2.93,7.9,10.34,18.51,14.24c12.83,4.72,23.97,1.11,27.05,0"/>\r
<path class="shinobu_kocho-st" d="M130.18,157.47c1.62,2.36,4.33,5.67,8.54,8.54c6.89,4.7,13.81,5.53,17.09,5.7"/>\r
<path class="shinobu_kocho-st" d="M118.79,200.18c1.48-3.18,4.06-7.59,8.54-11.39c5.17-4.37,7.68-3.54,15.66-8.54c8.26-5.18,8.63-7.98,14.24-9.97\r
	c6.02-2.13,11.84-1.1,15.66,0"/>\r
<path class="shinobu_kocho-st" d="M125.91,213c10.04-5.08,13.22-10.33,14.24-14.24c0.69-2.64,0.68-5.79,2.85-9.97c1.77-3.39,4.06-5.71,5.7-7.12"\r
	/>\r
<path class="shinobu_kocho-st" d="M115.94,185.94c4.27,0.47,8.54,0.95,12.81,1.42"/>\r
<path class="shinobu_kocho-st" d="M117.36,166.01c6.64,0,13.29,0,19.93,0"/>\r
<path class="shinobu_kocho-st" d="M114.51,230.08c-2.9,0.59-7.85,2-12.81,5.7c-2.86,2.13-8.03,5.98-9.97,12.81c-1.29,4.54-0.39,8.25,1.42,15.66\r
	c2.21,9.06,4.93,10.91,5.7,11.39c2.26,1.41,4.56,1.43,7.12,1.42c5.97-0.02,10.89-2.21,14.24-4.27"/>\r
<path class="shinobu_kocho-st" d="M103.12,277.07c2.19-1.01,4.64-2.39,7.12-4.27c7.48-5.69,11.12-12.87,12.81-17.09"/>\r
<path class="shinobu_kocho-st" d="M93.16,264.26c5.07-3.74,10.76-7.59,17.09-11.39c5.45-3.27,10.7-6.1,15.66-8.54"/>\r
<path class="shinobu_kocho-st" d="M98.85,238.63c0.26,0.49,5.49,10.04,14.24,9.97c1.34-0.01,3.35-0.25,5.7-1.42"/>\r
<path class="shinobu_kocho-st" d="M108.82,254.29c-1.9,7.59-3.8,15.19-5.7,22.78"/>\r
</svg>\r
`,Rl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.shiroko-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="shiroko-st" d="M60.79,302.59c-20.52,17.83-26.33,43.46-16.65,60.1c6.34,10.91,17.78,15.27,23.1,16.87\r
	c-3.21,0.79-7.89,1.43-13,0.07c-16.28-4.33-25.28-25.9-27.24-41.84c-2.34-19.07,4.58-36.78,17.6-70.1c1.17-3,3.17-7.94,4.91-15.03\r
	c2.58-10.51,2.16-15.78,3.84-27.02c0,0,1.64-10.95,4.87-22.03c2.68-9.17,7.87-22.72,18.78-38.11\r
	c-6.35-15.75-10.01-29.53-12.23-39.93c0,0-3.88-18.2-3.25-43.98c0.24-9.72,1.01-14.98,4.9-18.03c4.24-3.33,10.17-2.41,23.01,0.87\r
	c23.08,5.89,36.06,10.79,36.06,10.79c13.87,5.23,26.61,10.2,38.09,14.78c6.99-5.69,38.99-30.53,78.87-23.45\r
	c10.92,1.94,19.99,5.84,27.06,9.84c5.46-2,11.82-3.59,18.98-4.11c32.45-2.34,56.61,19.35,63.15,25.64\r
	c8.68-2.67,21.01-6.32,35.94-10.21c35.7-9.3,53.68-13.86,59.95-9.35c19.95,14.37-14.25,92.35-20.39,106.12\r
	c1.68,4.79,4.28,12.44,7.13,21.96c8.23,27.52,8.32,36.6,15.28,48.91c3.76,6.65,10.47,15.93,23.14,24.87c-2.8,0.61-10.9,2-20.01-1.88\r
	c-8.96-3.82-13.55-10.47-15.07-12.91c4.87,21.01,8.12,39.03,10.31,52.94c3.27,20.8,4.16,32.23,1.27,45.99\r
	c-4.19,19.89-12.43,26.36-14.84,28.09c-6.55,4.71-13.61,5.83-17.97,6.1c-0.21,3.21-1.12,9.87-5.91,16.03\r
	c-9.77,12.57-26.53,11.29-27.94,11.16c3.62-3.62,8.57-9.26,12.9-17.07c5.22-9.41,7.72-18.67,6.89-19.04\r
	c-0.91-0.41-4.11,10.08-12.9,18.07c-11.21,10.2-25.26,11.02-27.94,11.16c-5.03,0.27-9.2-0.34-12.01-0.93"/>\r
<path class="shiroko-st" d="M122.68,284.23c17.52-13.73,42.21-36.7,62.59-71.36c12.41-21.11,19.95-41.01,24.67-57.14\r
	c-12.12,37.3-24.81,92.1-6.29,123.04c1.07,1.78,9.79,16.29,14.09,14.92c4.51-1.44,3.45-17.51,1.82-31.01\r
	c-0.1-0.85,0.64,10.31,7.12,19.96c3.86,5.75,10.28,9.46,23.1,16.87c0,0,8.02,4.63,19.03,5.89c1.15,0.13,3.36,0.29,4.99-1.03\r
	c1.58-1.28,1.87-3.33,1.98-4.01c3.55-22.94,11.96-45.03,14.61-68.09c0.97-8.47,2.55-21.61,4.78-38.03\r
	c-0.6,8.22-0.42,17.31,1.16,26.99c7.84,48.24,44.69,77.71,58.51,87.66"/>\r
<path class="shiroko-st" d="M358.51,253.87c1.9,10.27,4.92,34.42-5.64,62.03c-9.65,25.23-25.71,40.5-33.73,47.2\r
	c2.79-0.05,6.68-0.46,10.99-2.06c8.03-2.99,12.83-8.37,14.94-11.09c-3.08,4.64-7.57,10.41-13.91,16.08\r
	c-4.97,4.45-9.83,7.71-13.94,10.08c2.99,0.57,7.6,1.03,13-0.07c9.57-1.96,15.6-7.64,17.94-10.1c-2.32,2.01-4.64,4.03-6.97,6.04\r
	c-2.53,5.75-7.27,14.58-15.87,23.09c-7.28,7.21-14.67,11.56-19.92,14.12c5.62,0.63,16.02,1.03,27.98-3.16\r
	c13.53-4.74,22.01-12.88,25.9-17.15c-2.62,2.54-5.27,5.22-7.95,8.05c-3.56,3.75-6.87,7.45-9.94,11.06\r
	c4.67-1.61,9.77-3.88,14.96-7.09c21.13-13.07,30.21-33.44,33.75-43.2"/>\r
<path class="shiroko-st" d="M434.92,324.43c-4.55,19.69-9.11,39.39-13.66,59.08c3.6-2.42,12.34-9.03,16.88-21.1\r
	C445.2,343.64,436.34,326.99,434.92,324.43z"/>\r
<path class="shiroko-st" d="M130.33,223.19c-6.77,19.72-8.44,35.95-8.73,47.05c-0.57,21.79,3.56,46.56,9.47,81.95\r
	c2.46,14.76,5.04,28.51-2.76,41.02c-4.6,7.37-11.15,11.65-15.92,14.09c-2.34,2.59-7.23,7.27-14.94,10.09\r
	c-9.94,3.63-18.6,1.97-21.99,1.13c2.85-2.57,7.12-7.22,8.92-14.05c1.54-5.84,0.59-10.72-0.08-14c-2.31-11.27-4.98-24.23-8.22-38.95"\r
	/>\r
<path class="shiroko-st" d="M132.09,354.18c17.74,12.07,61.96,38.5,122.22,37.3c29.87-0.6,54.24-7.8,70.92-14.41"/>\r
<path class="shiroko-st" d="M112.03,344.29c0.43,16.66,0.86,33.33,1.29,49.99c2.29-2.64,5.74-7.4,6.92-14.04c0.98-5.51-0.05-9.82-2.1-17.99\r
	C117.01,357.76,115.15,351.53,112.03,344.29z"/>\r
<path class="shiroko-st" d="M67.51,254.55c-4.47,20.94-6.6,38.77-7.7,52.05c-4.11,49.65,3.9,63.69,8.4,69.95\r
	c5.31,7.39,11.58,12.09,16.09,14.91"/>\r
<path class="shiroko-st" d="M119.69,111.24c-3.65-9.92-11.35-14.41-15.07-12.91c-3.54,1.42-5.77,9.15-2.9,18.02\r
	c-9.59-1.41-16.52,2.54-16.97,6.1c-0.41,3.27,4.46,7.98,12.06,9.93c-12.23,7.76-17.87,12.79-16.91,15.1\r
	c0.65,1.56,4.31,1.87,11.01,0.94c-7.27,9.22-10.24,14.57-8.91,16.05c0.98,1.09,4.31,0.07,9.98-3.06\r
	c-3.03,6.59-4.01,10.26-2.94,11.02c1.24,0.87,5.22-2.15,11.95-9.07c-0.36,3.51-0.01,5.51,1.03,5.99c1.73,0.8,5.38-2.56,10.94-10.06"\r
	/>\r
<path class="shiroko-st" d="M141.77,125.12c-2.49-3.32-5.79-7.14-10.06-10.94c-5.81-5.17-11.52-8.62-16.06-10.91"/>\r
<path class="shiroko-st" d="M356.87,142.88c8.06-7.05,19.81-16.74,34.84-27.2c18.1-12.59,35.51-24.7,40.88-20.24\r
	c2.42,2.01,3.18,8.01-4.85,26.03"/>\r
<path class="shiroko-st" d="M387.73,117.7c9.18-5.29,17.16-5.84,18.98-3.11c1.66,2.49-1.32,8.47-6.92,14.04c8.68-3,15.96-0.38,17.02,2.9\r
	c1.02,3.17-3.06,9.1-10.93,12.06c11.98,7.68,16.71,17.47,14.13,21.92c-2.79,4.82-14.05,3.23-14.98,3.09c4.2,5.44,3.06,12.02,0.08,14\r
	c-3.05,2.02-9.79,0.4-13.03-5.92c0.33,3.61,0.01,5.61-0.97,6.01c-1.6,0.65-4.95-2.99-10.06-10.94"/>\r
<path class="shiroko-st" d="M132.27,385.18c0.24,4.34,0.83,9.42,2.09,14.99c1.62,7.19,3.91,13.22,6.1,17.97"/>\r
<path class="shiroko-st" d="M331.39,407.03c-1.02,4.72-2.55,10.17-4.91,16.03c-3.33,8.3-7.33,14.99-10.88,20.06\r
	c4.49-0.79,11.8-2.74,18.95-8.11c14.93-11.2,17.37-28.38,17.82-32.1"/>\r
<path class="shiroko-st" d="M121.36,401.24c1.11,2.45,3.23,6.29,7.06,9.96c4.15,3.98,8.45,5.97,11.04,6.94"/>\r
<path class="shiroko-st" d="M164.45,242.99c3.73-0.07,8.13,0.14,13.01,0.93c6.9,1.11,12.65,3.05,17.03,4.9"/>\r
<path class="shiroko-st" d="M284.57,263.3c3.88-0.26,8.24-0.34,13-0.07c5.62,0.31,10.66,1.04,15.01,1.91"/>\r
<path class="shiroko-st" d="M216.14,362.69c1.52-0.85,3.93-1.91,6.99-2.04c8.03-0.34,13.33,6.03,14.04,6.92"/>\r
<path class="shiroko-st" d="M132.83,309.17c-3.65-6.61-2.99-10.12-2.07-11.99c4.98-10.07,33.94-5.14,44.98-3.26\r
	c12.69,2.16,22.72,5.46,29.05,7.83"/>\r
<path class="shiroko-st" d="M270.85,312.38c14.87-2.45,27.21-2.09,35.99-1.21c10.07,1.02,36.68,3.7,39.09,14.77\r
	c0.64,2.94-0.58,5.81-1.95,8.01"/>\r
<path class="shiroko-st" d="M108.11,191.26c10.02,4.28,20.05,8.55,30.07,12.83"/>\r
<path class="shiroko-st" d="M134.76,170.99c-7.06,14.14-14.13,28.28-21.19,42.42"/>\r
<path class="shiroko-st" d="M288.63,101.27c12.15,11.21,28.9,29.43,42.32,55.76c9.42,18.48,14.46,35.59,17.28,48.9"/>\r
<path class="shiroko-st" d="M152.95,156.05c6.14-8.78,14.83-19.21,26.83-29.16c24.84-20.58,50.8-28.24,65.82-31.38"/>\r
<path class="shiroko-st" d="M77.66,107.49c-0.57-2.31-5.25-21.89,0.86-25.01c2.43-1.24,5.79,0.54,12.02,3.93\r
	c7.56,4.12,13.23,8.54,17.07,11.9"/>\r
<path class="shiroko-st" d="M148,307.91c4.98-8.69,21.08-12.86,33.68-7.98c7.76,3,13.41,9.13,14.3,15.65\r
	c1.52,11.14-11.12,21.44-24.51,20.85C155.32,335.71,141.51,319.23,148,307.91z"/>\r
<path class="shiroko-st" d="M275.75,326.83c3.33-9.47,17.21-14.28,28.4-12.16c8.87,1.68,19.14,8.31,19.81,17.89\r
	c0.8,11.39-12.33,21.59-25.06,21.14C284,353.18,271.76,338.18,275.75,326.83z"/>\r
</svg>\r
`,zl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.shushu-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="shushu-st" d="M89,128.5c-8.4-1.2-20-3.3-33.5-7.5c-13.5-4.2-21.6-8.1-23-6c-2.1,3.2,13.7,16.9,15,18c9.1,7.8,17.8,12.9,24,16\r
	"/>\r
<path class="shushu-st" d="M410.5,127c7.7-1.2,19.8-3.5,34.4-8.1c13.4-4.2,21.6-8.1,23-6c2.1,3.2-14.2,17.3-15,18\r
	c-9.6,8.2-18.8,13.3-25.5,16.5"/>\r
<path class="shushu-st" d="M74.5,175c-3.4-0.3-8.2-0.1-13,2c-20,8.9-21.2,44.2-22,67c-0.8,24.3,4.7,54.3,13,68c1.2,2,4.8,7.6,7,16\r
	c2.2,8.5,0.2,9.6,2,16c2.9,10.4,9.1,11.6,16,24c4.8,8.7,2.8,10.4,6,16c11.3,19.6,48.7,20.5,68,21c11.6,0.3,19.6-0.6,34,2\r
	c10.1,1.8,13.5,3.6,23,6c18.4,4.6,33.1,4.8,45,5c10.9,0.2,30.2,0.4,53-5c7.5-1.8,16.6-4.5,31-6c9.6-1,10.8-0.4,19-1\r
	c16.1-1.3,39.5-3.1,53-18c5.9-6.5,3.1-7.9,12-19c9.6-12,11.7-12.4,16-20c6-10.5,3.4-14.9,8-31c4.6-16.1,8.7-17.4,13-30\r
	c4.1-12.2,3.1-23.8,2-47c-1.5-31.7-2.7-52.3-17-62c-5-3.4-10.2-4.6-14-5"/>\r
<path class="shushu-st" d="M141.5,265c3.6-4.6,14.3,2.4,54,7c13.2,1.5,22.7,2,34,0c10.8-1.9,19.3-5.3,25-8c6.6,2.9,16.5,6.5,29,8\r
	c6.7,0.8,15.3,1.1,31-1c34.7-4.7,46.3-13.5,50-9c5.3,6.4-10.8,33.4-34,51c-27.5,21-57.7,23.2-71,24c-13.3,0.8-47.4,2.9-79-18\r
	C154.1,301.5,135.9,272.4,141.5,265z"/>\r
<path class="shushu-st" d="M62.5,177c1.2-8,4.3-21.6,14-35c3.6-5.1,5.5-7.6,8.3-9.8c0.9-0.7,2.7-2,4.7-4.2c2-2.4,3-4.5,3.2-4.9\r
	c3.5-6.9,38.7-27.6,68.8-30.1c3.1-0.3,9.9-0.7,18-4c5.7-2.4,5.1-3.4,10-5c7.9-2.6,15.8-2.3,21-2c4,0.2,5.2,0.6,8.7,0.3\r
	c5-0.3,8.3-1.5,11.3-2.3c0,0,8.2-2.3,18-3c6.4-0.4,14.2-1,23,2c3.3,1.1,4.8,2.1,9,3c5.2,1.2,8.5,0.9,13,1c7.1,0.1,15.1,0.2,23,3\r
	c7.4,2.6,7.1,4.7,14,7.2c8.3,3,14.3,1.9,21,1.8c28.2-0.3,52,17.6,55,25c0.3,0.7,1.4,3.7,4,7c1.9,2.4,3.6,3.7,4.8,4.7\r
	c3.2,2.8,5.2,5.6,9.2,11.3c4.3,6.1,10.4,17.5,15,33"/>\r
<path class="shushu-st" d="M88.5,173c-0.7-15,18.9-27.7,35-30c20.1-2.9,34.8,10.2,38,13c10.6,9.4,19.1,25.1,15,32c-0.8,1.3-3.3,4.5-5,4\r
	c-1.2-0.4-1-2.1-2-3c-2.8-2.4-11.4,4.7-18,8c-11.2,5.7-22.9,3.8-28,3C110.3,197.9,89.2,188.2,88.5,173z"/>\r
<path class="shushu-st" d="M411.7,171.5c0.7-15-18.9-27.7-35-30c-20.1-2.9-34.8,10.2-38,13c-10.5,9.4-19.1,25.1-15,32c0.8,1.3,3.3,4.5,5,4\r
	c1.2-0.4,1-2.1,2-3c2.8-2.4,11.4,4.7,18,8c11.2,5.7,22.9,3.8,28,3C389.9,196.4,410.9,186.7,411.7,171.5z"/>\r
<path class="shushu-st" d="M225.5,226c-3.9-3.4-7.6-1.4-14-4c-1-0.4-9.2-3.8-10-9c-1.1-7.4,13.5-14.7,16-16c11.2-5.8,21.4-6,35-6\r
	c12.7,0,22.1,0,33,5c1.5,0.7,19.2,8.7,18,16c-0.8,4.8-9.4,8.2-14,10c-6.1,2.4-8.8,1.9-12,5c-3.3,3.2-2.7,5.8-5,10\r
	c-3.3,6-10.5,11.2-18,12c-10.4,1-21.2-6.6-25-15C228,230.6,228.1,228.3,225.5,226z"/>\r
<path class="shushu-st" d="M213.5,223c1.1-3.6,3.7-6.3,7-7c5.2-1.1,10.9,3.3,11,8c0.1,3.1-2.3,5.3-3,6"/>\r
<path class="shushu-st" d="M289.5,222c-0.3-0.8-2.1-5-6-6c-6-1.5-13,5.5-12,10c0.5,2,2.4,3.3,4,4"/>\r
<path class="shushu-st" d="M254.5,231c0,35.7,0,71.3,0,107"/>\r
<path class="shushu-st" d="M176.5,270c-1.7,1.1-12.2,8-14,21c-0.9,6.7,0.8,12.2,2,15"/>\r
<path class="shushu-st" d="M328.5,269c2.5,1.8,7.1,5.6,10,12c5.3,11.8,0.9,22.9,0,25"/>\r
<path class="shushu-st" d="M199.5,272c-1.8,9-3.4,19.4-4,31c-0.5,8.7-0.4,16.7,0,24"/>\r
<path class="shushu-st" d="M224.5,273c-2.1,6.5-4.1,14.5-5,24c-1.5,15.8,0.7,29,3,38"/>\r
<path class="shushu-st" d="M279.5,271c2.3,5.6,4.5,12.3,6,20c3.4,17.2,1.9,32,0,42"/>\r
<path class="shushu-st" d="M304.5,272c1.3,5.7,2.4,12,3,19c1.3,13.9,0.5,26.2-1,36"/>\r
<path class="shushu-st" d="M328.5,269c0.5,7.1,0.6,15.1,0,24c-0.6,8.5-1.7,16.3-3,23"/>\r
<path class="shushu-st" d="M176.5,270c-1.3,5.8-2.4,12.5-3,20c-0.7,9-0.6,17.1,0,24"/>\r
<path class="shushu-st" d="M34.5,210c17.3,1.7,36.4,4.5,57,9c24.5,5.4,46.3,12.1,65,19"/>\r
<path class="shushu-st" d="M30.5,238c16.4-0.4,34.1-0.2,53,1c22.5,1.4,43.2,3.9,62,7"/>\r
<path class="shushu-st" d="M347.5,237c15.5-6.1,33.5-12.1,54-17c23.7-5.7,45.4-8.6,64-10"/>\r
<path class="shushu-st" d="M354.5,245c22.7-3.8,48.5-6.6,77-7c13.7-0.2,26.7,0.2,39,1"/>\r
<path class="shushu-st" d="M396.5,257c14.8,1.3,30.5,3.2,47,6c9,1.5,17.7,3.2,26,5"/>\r
<path class="shushu-st" d="M403.5,277c12.3,1,24.9,2.3,38,4c9.6,1.2,18.9,2.6,28,4"/>\r
<path class="shushu-st" d="M392.5,292c15.3,4.3,30.7,8.7,46,13"/>\r
<path class="shushu-st" d="M396.5,306c23,11,46,22,69,33"/>\r
<path class="shushu-st" d="M101.5,308c-20.3,10-40.7,20-61,30"/>\r
<path class="shushu-st" d="M110.5,257c-26,4-52,8-78,12"/>\r
<path class="shushu-st" d="M104.5,274c-23.3,5.3-46.7,10.7-70,16"/>\r
<path class="shushu-st" d="M109.5,290c-14.3,5-28.7,10-43,15"/>\r
<path class="shushu-st" d="M101.5,81c4.9,2.6,10.3,5.8,16,10c4.6,3.4,8.6,6.8,12,10"/>\r
<path class="shushu-st" d="M121.5,73c3.2,3.1,6.6,6.7,10,11c3.7,4.6,6.6,9,9,13"/>\r
<path class="shushu-st" d="M136.5,68c2.9,3.4,6,7.7,9,13c2.7,4.7,4.6,9.2,6,13"/>\r
<path class="shushu-st" d="M348.5,95c1.3-3.1,3-6.5,5-10c3.3-5.7,6.8-10.3,10-14"/>\r
<path class="shushu-st" d="M360.5,96c1.2-2.4,2.8-5.2,5-8c3.4-4.5,7-7.8,10-10"/>\r
<path class="shushu-st" d="M370.5,98c1.6-1.9,3.6-4,6-6c6.9-5.8,14-8.6,19-10"/>\r
</svg>\r
`,Bl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.sky-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="sky-st" d="M129,205c-0.02-5.05-0.3-9.06-0.5-11.5c-1.26-15.1-4-33-4-33c-0.7-4.59-0.95-5.88,0-7\r
	c4.05-4.76,23.92,0.63,30,13c2.45,4.98,2.84,11.45,3,14c0.26,4.31-0.1,7.93-0.5,10.5c2.63-1.94,6.87-4.81,12.5-7.5\r
	c8.74-4.17,15.75-7.51,23-5c1.18,0.41,8.8,3.19,10,9c2.01,9.72-15.36,21.08-29,30c-11.65,7.62-23.31,13.36-23,14\r
	c0.25,0.5,7.58-3.01,19-5c8.97-1.57,12.05-0.73,14,1c3,2.66,3,7.12,3,8c0,7.02-5.46,11.74-21,26c-5.68,5.21-10.23,9.43-13,12\r
	c1.42,2.29,6.32,9.52,16,13c1.79,0.64,10.83,3.7,21,0c10.01-3.64,15.21-11.68,18-16c6.66-10.31,6.03-17.82,9-18\r
	c3.98-0.25,9,12.96,10,25c0.59,7.11,1.54,18.43-5,28c-12.39,18.14-44.9,20.11-60,7c-6.44-5.59-10.35-14.48-11-16\r
	c-3.13-7.29-3.86-13.85-4-18c-9.75,11.54-25.65,27.62-49,41c-23.92,13.7-51.1,21.97-52,20c-0.41-0.9,4.81-3.59,13-9\r
	c26.22-17.32,42.25-35.67,52-47c2.11-2.45,23.4-27.34,20-31c-0.45-0.48-1.23-0.49-4,0c-10.62,1.9-17,5-17,5c-11.48,5.58-21,12-21,12\r
	c-3.1,2.09-7.93,5.5-10,4c-0.56-0.41-0.97-1.21-1-2c-0.07-1.87,2.03-3.34,3-4c1.9-1.3,30.4-20.57,38-26c4.58-3.28,7.62-5.84,9-10\r
	c0.79-2.39,0.87-5.63,1-12c0.07-3.33,0.04-6.09,0-8c-3.16,2.81-20.07,17.42-36,13c-2.04-0.56-5.8-1.67-8-5\r
	c-5.32-8.07,3.82-21.29,5-23c4.27-6.18,11.48-12.57,14-11c3.51,2.19-6.12,17.27-1,23C106.43,212.9,117.41,209.92,129,205z"/>\r
<path class="sky-st" d="M155.5,197.5c-0.13,3.76-0.73,9.11-3,15c-3.01,7.8-6.84,11.11-6,12c1.1,1.16,7.13-4.92,23-18\r
	c1.26-1.04,5.01-4.12,5-8c0-0.54-0.02-1.98-1-3c-1.25-1.31-3.33-1.18-5-1C165.92,194.78,161.53,195.48,155.5,197.5z"/>\r
<path class="sky-st" d="M242.5,238.5c0-5.02,4.42-8.77,9-9c5.01-0.25,10,3.72,10,9s-4.99,9.25-10,9\r
	C246.92,247.27,242.5,243.52,242.5,238.5z"/>\r
<path class="sky-st" d="M448.5,251.5c3.17-0.08,6.9,13.2,7,25c0.03,3.29,0.03,10.92-3,19c-6.27,16.74-21.64,25.03-29,29\r
	c-40.42,21.81-92.34,6.69-120-10c-19.85-11.98-25.1-23.49-27-29c-1.01-2.92-3.7-11.02-2-21c3.56-20.95,22.62-27.61,21-45\r
	c-0.45-4.86-2.4-9.25-1-10c1.67-0.9,7.19,3.89,9,10c0.4,1.35,1.12,4.45-1,13c-2.01,8.1-3.9,10.37-6,17c-1.25,3.94-3.63,11.47-3,18\r
	c1.11,11.56,11.55,19.25,18,24c22.33,16.44,48.06,16.22,58,16c13.38-0.3,28.13-0.62,43-10c3.85-2.43,24.88-15.69,32-38\r
	C445.58,256.13,446.65,251.55,448.5,251.5z"/>\r
<path class="sky-st" d="M339.5,198.5c1.21,0.69,3.46-2.48,8-6c7.16-5.56,21.72-13.3,31-8c3.88,2.22,6.64,6.62,7,11\r
	c0.43,5.32-2.87,9.27-6,13c-2.24,2.67-9.73,11.61-20,11c-0.85-0.05-7.9-0.54-9-4c-1.5-4.71,8.35-13.84,14-12\r
	c1.32,0.43,2.94,1.63,3,3c0.13,2.77-5.41,5.16-5,6c0.21,0.43,1.83,0.04,2,0c3.17-0.79,9.12-3.84,10-10c0.12-0.82,0.76-5.3-2-8\r
	c-4.1-4.01-12.5-0.92-15,0c-15.18,5.59-28.42,24.71-23,35c2.13,4.04,7.2,6.85,11,8c5.95,1.8,10.78,0.14,11,1\r
	c0.3,1.16-9.06,2.29-19,9c-5.3,3.58-15.55,10.5-20,18c-0.35,0.59-1.24,2.15-2,2c-1.37-0.27-1.9-6-1-11c1.44-7.98,6.1-11.84,5-13\r
	c-1.05-1.12-6.28,1.42-10,5c-0.97,0.93-6.9,6.81-7,14c-0.21,15.32,26.23,25.2,28,23c0.94-1.18-5.78-5.07-5-11\r
	c0.79-6,8.79-10.5,15-14c1.13-0.64,2.75-1.42,6-3c4.43-2.15,4.75-2.16,5-2c2.35,1.55-7.79,15.29-3,22c1.54,2.15,4.02,2.76,5,3\r
	c5.17,1.27,9.78-2.19,16-7c5.16-3.99,12.04-10.47,11-12c-0.26-0.38-0.86-0.26-3,0c-7.29,0.88-11.25,1.34-12,0\r
	c-0.36-0.64,0.12-1.5,1-3c0.94-1.61,2.87-4.83,7-7c3.31-1.74,6.2-1.85,10-2c3.12-0.12,5.79-0.22,9,1c1.54,0.59,5.36,2.19,7,6\r
	c1.42,3.31,0.45,6.57,0,8c-1.24,3.95-4.39,8.55-18,16c-11.72,6.42-19.32,8.45-19,10c0.28,1.35,6.31,1.38,11,1\r
	c3.36-0.27,43.9-4.07,51-30c1.87-6.81,2.07-17.5-4-24c-7.37-7.9-22.98-8.56-33-6c-2.48,0.63-5.63,1.72-6,1\r
	c-0.69-1.32,9.7-5.36,16-14c5.97-8.19,9.96-22.82,3-35c-6.99-12.22-20.77-14.56-24-15c-12.63-1.71-25.38,3.88-32,13\r
	C339.61,188.24,337.68,197.45,339.5,198.5z"/>\r
</svg>\r
`,Vl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.taffy-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="taffy-st" d="M215.5,210.51c1.58,7.79,4.51,19.1,10.29,31.89c7.21,15.94,14.91,25.45,13.37,26.74\r
	c-1.56,1.31-11.68-6.5-19.54-16.46c-13.2-16.71-16.29-34.7-17.49-42.17c-2.8-17.53-0.45-32.38,2.06-42.17"/>\r
<path class="taffy-st" d="M298.81,166.29c3.04,9.26,6.32,23.27,5.14,40.11c-1.91,27.27-14.63,48.94-16.46,48.34\r
	c-1.54-0.51,5.49-16.62,6.17-41.14c0.53-18.94-2.96-34.62-6.17-45.26"/>\r
<path class="taffy-st" d="M231.96,254.74c3.43,4.99,9.89,12.88,20.57,18.51c5.75,3.03,9.8,5.17,14.4,4.11\r
	c2.82-0.65,8.27-3.05,17.49-27.77c2.71-7.28,6.23-17.76,9.26-30.86"/>\r
<path class="taffy-st" d="M201.1,200.23c-4.22,11.18-10.4,24.71-19.54,39.09c-9.72,15.29-20.02,27.18-28.8,36"/>\r
<path class="taffy-st" d="M303.96,204.34c4.82,10.41,10.88,21.9,18.51,33.94c9.3,14.68,18.92,26.97,27.77,37.03"/>\r
<path class="taffy-st" d="M352.3,172.46c9.11,13.15,36.23,55.83,25.71,104.91c-1.16,5.43-10.86,50.68-38.06,58.63\r
	c-5.57,1.63-16.78,3.12-17.49,1.03c-0.54-1.61,5.42-4.47,9.26-7.2c15.71-11.17,17.27-35.27,18.51-54.51\r
	c0.77-11.91,0.55-30.85-6.17-53.48"/>\r
<path class="taffy-st" d="M223.73,122.06c1.3-4.17,0.07-8.65-3.09-11.31c-3.88-3.28-8.74-2.18-9.26-2.06c-2.4-4.11-4.8-8.23-7.2-12.34\r
	c-1.08-0.97-2.79-2.27-5.14-3.09c-4.16-1.44-8.01-0.65-15.43,2.06c-11.69,4.26-21.79,7.95-33.94,17.49\r
	c-7.47,5.86-13.69,11.06-14.4,18.51c-0.29,3.02,0.42,5.57,1.03,7.2c2.4,4.8,4.8,9.6,7.2,14.4c-3.36,3.76-4.61,8.51-3.09,12.34\r
	c1.74,4.37,6.46,5.88,7.2,6.17c5.2,2.04,10.24,1.1,17.49-1.03c0,0,21.63-6.39,39.09-17.49c10.22-6.5,8.67-6.99,16.46-11.31\r
	c8.51-4.72,17.85-9.9,29.83-10.29c11.51-0.37,20.02,3.87,30.86,9.26c4.33,2.15,7.31,4.14,7.31,4.14c4.77,3.07,6.37,4.9,11.34,8.16\r
	c2.67,1.76,4.7,2.84,7.06,4.15c11.37,6.32,21.41,9.62,29.83,12.34c9.25,2.99,13.25,3.65,17.49,2.06c1.3-0.49,5.39-2.03,7.2-6.17\r
	c2.59-5.93-1.78-11.97-2.06-12.34l6.17-11.31c0.97-0.76,2.39-2.1,3.09-4.11c3.5-10.13-15.59-24.74-19.54-27.77\r
	c-7.71-5.9-14.18-8.63-20.57-11.31c-11.79-4.96-19.2-7.37-25.71-4.11c-1.92,0.96-3.27,2.2-4.11,3.09\r
	c-2.06,3.43-4.11,6.86-6.17,10.29c-1.49-0.17-3.84-0.17-6.17,1.03c-4.26,2.19-6.69,7.48-6.17,13.37"/>\r
<path class="taffy-st" d="M160.99,219.77c-7.67,26.36-8.01,48.07-7.2,61.71c1.1,18.39,2.22,33.63,13.37,44.23\r
	c6.04,5.74,14.15,9.29,13.37,11.31c-0.82,2.13-10.77,0.78-16.46-1.03c-26.17-8.31-35.24-49.49-37.03-57.6\r
	c-10.7-48.57,14.07-91.16,23.66-105.94"/>\r
<path class="taffy-st" d="M140.42,165.26c-10.03,14-15.48,27-18.51,36c-3.6,10.66-7.99,23.69-6.17,40.11c0.6,5.4,1.74,9.99,3.09,15.43\r
	c2.94,11.85,6.52,21.32,9.26,27.77"/>\r
<path class="taffy-st" d="M361.56,164.23c4.19,5.98,27.34,39.61,25.71,66.86c-0.2,3.37-1.24,14.37-4.11,27.77\r
	c-1.73,8.09-3.65,14.77-5.14,19.54"/>\r
<path class="taffy-st" d="M359.5,153.94"/>\r
<path class="taffy-st" d="M140.42,160.12c-3.39,4.11-9.04,11.49-14.4,21.6c-8.96,16.89-9.81,27.67-22.63,62.74\r
	c-4.42,12.1-7.6,19.8-15.43,25.71c-8.19,6.19-16.7,6.81-16.46,9.26c0.27,2.71,10.95,5.03,20.57,3.09\r
	c9.11-1.84,15.34-7.1,18.51-10.29c-5.74,13.77-8.68,25.57-10.29,33.94c-1.73,9-2.82,14.91-2.06,22.63\r
	c1.32,13.34,7.3,23.28,11.31,28.8"/>\r
<path class="taffy-st" d="M362.58,160.12c4.71,5.55,11.55,14.52,17.49,26.74c6.04,12.43,5.61,16.81,13.37,41.14\r
	c11.24,35.21,17.15,41.73,23.66,45.26c7.04,3.82,14.48,3.98,14.4,6.17c-0.09,2.42-9.28,4.83-17.49,4.11\r
	c-9.97-0.87-17.13-6.24-20.57-9.26c6.2,15.96,8.95,29.54,10.29,39.09c1.83,13.07,1.09,19.11,0,23.66\r
	c-2.45,10.23-7.75,17.49-11.31,21.6"/>\r
<path class="taffy-st" d="M126.02,279.43c-1.41,19.46-0.35,35.62,1.03,47.31c6.63,56.2,28.46,74.78,32.91,77.14\r
	c0.7,0.37,3.39,1.8,4.11,1.03c0.77-0.82-1.23-3.56-3.09-7.2c-1.34-2.62-2.95-6.38-4.11-11.31c0.99,1.63,2.61,3.94,5.14,6.17\r
	c0.74,0.65,4.27,3.77,5.14,3.09c1.08-0.84-2.43-7.02-3.09-8.23c-3.63-6.64-7.63-21.13-9.26-55.54"/>\r
<path class="taffy-st" d="M349.21,331.88c-0.66,8.79-2.67,33.27-6.17,43.2c-3.56,10.08-4.11,11.31-4.11,11.31\r
	c-2.1,4.64-3.91,7.46-3.09,8.23c1,0.93,4.93-1.9,5.14-2.06c3.63-2.64,5.36-6.15,6.17-8.23c-0.61,3.25-1.76,7.61-4.11,12.34\r
	c-2.29,4.6-4.75,7.6-4.11,8.23c0.87,0.86,6.66-3.69,7.2-4.11c17.09-13.45,24.69-46.28,24.69-46.28c3.74-16.18,7.67-40.74,6.17-72"/>\r
<path class="taffy-st" d="M171.27,338.06c2.99,2.85,7.44,6.65,13.37,10.29c6.6,4.04,15.49,8.16,31.89,11.31c30.61,5.88,55.13,2.2,68.91,0\r
	c13.18-2.1,21.53-4.65,29.83-9.26c7.47-4.14,12.91-8.85,16.46-12.34"/>\r
<path class="taffy-st" d="M105.45,352.46c-1.42,1.9-7.19,10.03-6.17,21.6c1.05,11.93,8.58,19.04,10.29,20.57\r
	c-1.58,0.85-3.78,2.17-6.17,4.11c-5.24,4.27-10.44,10.79-9.26,12.34c0.56,0.73,2.75,0.68,10.29-3.09c-1.61,2.2-3.99,6.04-5.14,11.31\r
	c-0.71,3.23-2.16,9.89,1.03,12.34c1.73,1.33,4.1,0.87,8.23,0c5.04-1.06,8.9-2.82,11.31-4.11c-1.6,3.71-1.46,4.82-1.03,5.14\r
	c1.21,0.91,6.18-2.88,9.26-7.2c2.7-3.8,3.7-7.68,4.11-10.29"/>\r
<path class="taffy-st" d="M110.52,404.29l1.13,4.7c0.49,2.04,2.44,2.89,3.83,1.67c1.75-1.53,3.5-3.06,5.25-4.6c1.26-1.1,2.97-0.86,4,0.56\r
	c1.92,2.63,3.83,5.27,5.75,7.9c1.34,1.85,3.74,1.5,4.71-0.68c0.56-1.27,1.13-2.53,1.69-3.8c0.8-1.8,0.21-4.06-1.29-4.92\r
	c-2.41-1.39-4.83-2.79-7.24-4.18c-2.21-1.27-4.63-1.84-7.06-1.63l-8.39,0.7C111.19,400.14,110.03,402.23,110.52,404.29z"/>\r
<path class="taffy-st" d="M130.13,401.83c2.42,0.7,6.42,1.53,11.31,1.03c5.79-0.59,10.06-2.74,12.34-4.11"/>\r
<path class="taffy-st" d="M163.04,384.34c4.19,0.42,16.27,1.1,28.8-6.17c11.16-6.47,16.54-15.69,18.51-19.54"/>\r
<path class="taffy-st" d="M397.55,352.46c1.34,1.4,8.75,9.41,8.23,21.6c-0.6,13.9-11.02,21.68-12.34,22.63c2.98,1.18,7.26,3.3,11.31,7.2\r
	c3.36,3.23,7.1,8.18,6.17,9.26c-0.47,0.54-2.44,0.49-11.31-5.14c4.06,6.82,5.55,12.66,6.17,16.46c0.81,4.98,0.23,7.08-1.03,8.23\r
	c-1.29,1.18-3.17,1.23-5.14,1.03c-6.93-0.7-13.27-4.28-17.49-7.2c3.22,5.15,3.55,6.79,3.09,7.2c-1.03,0.91-6.91-2.79-10.29-8.23\r
	c-2.18-3.5-2.85-6.98-3.09-9.26"/>\r
<path class="taffy-st" d="M381.4,400.4c3.39,0.55,6.78,1.09,10.17,1.64c1.42,0.23,2.24,2.2,1.6,3.84c-0.66,1.69-1.31,3.38-1.97,5.08\r
	c-0.44,1.14-1.56,1.52-2.38,0.81l-5.78-4.96c-1.12-0.96-2.62-0.77-3.57,0.45l-6.64,8.54c-1.06,1.37-2.82,1.21-3.72-0.34\r
	c-1.06-1.82-2.12-3.64-3.18-5.46c-0.66-1.14-0.34-2.77,0.66-3.36c2.78-1.65,5.55-3.3,8.33-4.95\r
	C376.94,400.49,379.18,400.05,381.4,400.4z"/>\r
<path class="taffy-st" d="M348.18,399.77c2.35,1.37,6.61,3.46,12.34,4.11c5.4,0.62,9.78-0.29,12.34-1.03"/>\r
<path class="taffy-st" d="M295.73,358.63c2.07,4,6.66,11.5,15.43,17.49c12.06,8.23,24.39,8.38,28.8,8.23"/>\r
<path class="taffy-st" d="M218.59,109.72c2.89-1.27,7.26-2.62,12.34-2.06c2.17,0.24,5.3,0.64,7.2,3.09c0.13,0.17,1.66,2.18,1.03,3.09\r
	c-0.81,1.17-4.23-0.85-9.26-1.03c-2.96-0.1-5.45,0.47-7.2,1.03"/>\r
<path class="taffy-st" d="M291.61,114.86c1.8,0.95,2.01,3.52,2.06,4.11c0.27,3.32-1.85,6.5-4.11,8.23c-6.45,4.93-18.09,1.13-18.51-2.06\r
	c-0.13-0.98,0.8-1.84,1.03-2.06c2.72-2.54,7.04,1.13,10.29-1.03c2.3-1.53,1.13-4.06,4.11-6.17\r
	C286.87,115.6,289.55,113.77,291.61,114.86z"/>\r
<path class="taffy-st" d="M285.44,108.69c-6.81-2.44-12.42-2.54-16.46-2.06c-7.91,0.94-14.29,4.61-20.57,8.23\r
	c-8.75,5.04-9.85,7.5-15.43,8.23c-1.76,0.23-9.81,1.28-13.37-3.09c-1.63-2-1.96-4.7-4.11-5.14c-1.1-0.23-2.39,0.19-3.09,1.03\r
	c-1.78,2.13,0.65,6.52,1.03,7.2c2.92,5.28,10.59,8.15,17.49,8.23c16.6,0.18,22.34-15.96,41.14-16.46c3.95-0.11,7.2,0.52,9.26,1.03"\r
	/>\r
<path class="taffy-st" d="M224.76,120c2.33-1.1,5.08-2.19,8.23-3.09c5.56-1.58,10.54-2.03,14.4-2.06"/>\r
<path class="taffy-st" d="M263.84,116.92c2.47,0.16,5.24,0.47,8.23,1.03c3.07,0.57,5.82,1.3,8.23,2.06"/>\r
<path class="taffy-st" d="M238.13,110.74c1.86-0.16,4.86-0.17,8.23,1.03c1.68,0.6,3.06,1.36,4.11,2.06"/>\r
<path class="taffy-st" d="M257.67,109.72c0.24-4.33,1.14-10.24,4.11-16.46c4.89-10.25,12.99-16.32,21.6-22.63\r
	c10.78-7.9,15.82-8.87,15.43-10.29c-0.94-3.4-31.91-5.26-47.31,13.37c-2.2,2.66-7.98,9.86-8.23,20.57\r
	c-0.23,9.86,4.34,16.99,6.17,19.54"/>\r
<path class="taffy-st" d="M173.33,109.72c10.86-8.94,20.59-12.56,24.69-9.26c1.65,1.33,1.96,3.45,2.06,4.11\r
	c1.03,7-7.77,13.45-17.49,20.57c-13.01,9.54-20.25,10.93-22.63,11.31c-2.69,0.43-12.2,1.96-14.4-2.06\r
	c-1.72-3.14,1.15-9.42,3.84-13.01c0.12-0.16,0.22-0.28,0.27-0.36C156.97,111.5,169.12,110.03,173.33,109.72z"/>\r
<path class="taffy-st" d="M330.7,109.72c-5.59-4.47-10.74-6.87-14.4-8.23c-3.93-1.46-8.16-2.97-10.29-1.03\r
	c-1.74,1.59-1.26,4.74-1.03,6.17c0.58,3.54,2.77,9.98,14.4,18.51c6.25,4.59,20.26,14.87,33.94,11.31c3.68-0.96,4.71-2.23,5.14-3.09\r
	c2.51-4.93-5.13-14.75-13.37-19.54C339.37,110.5,333.78,109.85,330.7,109.72z"/>\r
<path class="taffy-st" d="M298.81,97.37c-0.85,2.39-1.75,6.07-1.03,10.29c0.37,2.15,1.67,7.48,12.34,16.46\r
	c3.11,2.62,10.98,8.88,23.66,14.4c9.97,4.34,17.79,7.62,26.74,5.14c2.23-0.62,3.98-1.44,5.14-2.06"/>\r
<path class="taffy-st" d="M136.3,137.49c1.2,1.39,3.55,3.75,7.2,5.14c1.11,0.42,3.92,1.36,8.23,1.03c15.61-1.2,32.91-13.37,32.91-13.37\r
	c12.39-8.71,21.39-15.05,21.6-24.69c0.1-4.35-1.63-7.95-3.09-10.29"/>\r
<path class="taffy-st" d="M143.5,152.92c1.37,2.4,2.74,4.8,4.11,7.2c0.58,0.81,1.57,2.01,3.09,3.09c2.83,2,6.81,3.04,13.37,2.06\r
	c24.12-3.63,42.17-21.6,42.17-21.6c3.38-3.36,7.91-8.43,12.34-15.43"/>\r
<path class="taffy-st" d="M359.5,152.92c-1.03,2.4-2.06,4.8-3.09,7.2c-0.55,0.8-1.54,2.03-3.09,3.09c-3.47,2.36-7.36,2.17-9.26,2.06\r
	c-21.42-1.32-41.14-17.49-41.14-17.49c-4.57-3.75-11.05-9.74-17.49-18.51"/>\r
</svg>\r
`,Hl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.talking_tomcat-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="talking_tomcat-st" d="M105.63,226.72c-11.45-7.97-30.19-23.68-40.04-48.62c-2.82-7.13-9.45-23.92-8.58-43.86\r
	c0.27-6.14,1.19-11.29,0-20.02c-2.03-14.87-7.47-20.15-4.77-23.83c3.37-4.6,13.97,0.74,37.18,4.77c19.47,3.38,18.97,0.94,42.9,4.77\r
	c7.84,1.25,11.77,1.86,15.97,3.01c6.04,1.66,7.71,2.59,13.58,3.66c3.84,0.7,6.82,1.22,10.49,0.95c6.39-0.47,10.99-3.06,12.39-3.81\r
	c8.76-4.7,35.81-14.68,53.39-17.16c34-4.81,71.76,12.84,76.27,15.25c0.94,0.5,4.83,2.69,10.49,3.81c3.38,0.67,6.18,0.72,8.42,0.67\r
	c8.32-0.18,13.26-2.07,21.69-3.53c5.2-0.9,11.77-1.89,20.42-2.86c8.35-0.94,14.08-1.35,18.27-1.57c6.33-0.32,8.1-0.03,12.34-0.72\r
	c4.81-0.78,5.43-1.56,13.34-3.92c6.62-1.98,13.83-2.96,21.83-4.28c3.85-0.64,7.69-1.18,9.53,0.95c2.7,3.12-2.73,9.03-3.81,20.02\r
	c-0.61,6.22,0.49,10.5,0.95,13.35c3.41,21.12-13.95,54.81-16.21,59.11c-12.1,23.09-27.87,38.51-39.09,47.67"/>\r
<path class="talking_tomcat-st" d="M52.24,94.2c7.9,2.19,16.61,5.25,25.74,9.53c25.62,12.03,43.3,28.51,54.34,41c-2.24-1.58-4.78-3.2-7.63-4.77\r
	c-1.98-1.09-3.9-2.04-5.72-2.86"/>\r
<path class="talking_tomcat-st" d="M363.05,143.77c7.91-7.16,17.09-14.63,27.65-21.93c21.01-14.53,41.25-24.1,58.16-30.51"/>\r
<path class="talking_tomcat-st" d="M226.71,196.21c-0.24-3.53-0.84-12.5-6.67-19.07c-10.48-11.81-32.62-9.93-46.72-1.91\r
	c-3.43,1.95-18.35,11.07-20.97,28.6c-1.17,7.86,0.58,14.41,1.91,18.11c3.37,0.34,8.33,0.92,14.29,1.92\r
	c15.5,2.59,16.93,4.49,23.83,4.77c2.52,0.1,20.56,0.82,29.56-11.44C227.6,209.47,226.98,200.29,226.71,196.21z"/>\r
<path class="talking_tomcat-st" d="M296.29,227.05c6.3,1.08,11.13,0.47,14.4-0.31c9.26-2.21,12.83-7.35,22.53-8.9c4.33-0.69,8.01-0.37,10.44,0\r
	c0.97-4.4,3.18-17.23-3.93-28.72c-11.1-17.96-40.28-25.2-54.85-11.97c-8.51,7.73-11.03,21.55-7.63,32.42\r
	c0.95,3.03,3.47,11.05,11.44,15.25c11.43,6.02,24.15-1.52,24.79-1.91c0.78-0.48,2.28-1.41,3.81-2.87\r
	c7.72-7.37,13.15-25.29,2.86-37.18c-9.58-11.07-28.47-11.92-40.04,0"/>\r
<path class="talking_tomcat-st" d="M167.6,205.74c-2.53-15.82,12.29-31.43,28.6-31.46c12.99-0.03,25.96,9.83,27.65,22.88\r
	c2.11,16.29-14.17,31.36-30.51,30.51C181.49,227.05,169.57,218.05,167.6,205.74z"/>\r
<path class="talking_tomcat-st" d="M252.45,295.36c1.82,0,3.2-0.65,3.81-0.95c33.22-16.41,41.95-29.56,41.95-29.56\r
	c5.45-8.21,10.32-15.55,7.63-20.02c-4.36-7.23-22.52,2.93-53.39,2.86c-31.98-0.08-50.83-11.08-55.3-3.81\r
	c-2.72,4.43,2.23,11.89,7.63,20.02c0,0,8.72,13.13,43.86,30.51C249.22,294.7,250.62,295.36,252.45,295.36z"/>\r
<path class="talking_tomcat-st" d="M252.45,263.9c-0.32,19.07-0.64,38.14-0.95,57.2"/>\r
<path class="talking_tomcat-st" d="M294.4,258.18c-6.09,1.08-10.55,3.17-13.35,4.77c-4.79,2.73-6.17,4.86-6.67,5.72\r
	c-1.85,3.17-2.78,8.07-0.95,9.53c3.14,2.52,13.45-5.96,14.3-6.67"/>\r
<path class="talking_tomcat-st" d="M212.85,257.72c6.09,1.08,10.55,3.17,13.35,4.77c4.79,2.73,6.17,4.86,6.67,5.72c1.85,3.17,2.78,8.07,0.95,9.53\r
	c-3.14,2.52-13.45-5.96-14.3-6.67"/>\r
<path class="talking_tomcat-st" d="M168.55,323.01c0.02-1.35,7.33-2.6,13.35-2.86c10.83-0.48,12.32,2.97,24.79,3.81c11.35,0.77,12.78-1.52,22.88,0\r
	c3.79,0.57,5.79,1.21,9.53,0.95c5.32-0.37,9.58-2.24,12.39-3.81c9.38,2.45,17.27,3.4,22.88,3.81c10.53,0.77,27.4,2,45.76-3.81\r
	c3.81-1.21,8.04-2.8,14.3-2.86c9.71-0.09,19.27,3.59,19.07,5.72c-0.16,1.64-6.1,2.33-11.44,2.86c-63.06,6.28-91.53,4.77-91.53,4.77\r
	C238.89,330.97,168.49,327.22,168.55,323.01z"/>\r
<path class="talking_tomcat-st" d="M305.84,323.97c0.64,1.91,1.27,3.81,1.91,5.72"/>\r
<path class="talking_tomcat-st" d="M246.73,323.01c1.28,0.92,2.95,2.44,3.81,4.77c0.71,1.91,0.67,3.81,0.95,3.81c0.29,0,0.21-1.96,0.95-3.81\r
	c0.96-2.37,2.98-3.84,4.77-4.77"/>\r
<path class="talking_tomcat-st" d="M272.47,324.92c0.32,2.22,0.64,4.45,0.95,6.67"/>\r
<path class="talking_tomcat-st" d="M292.5,325.87c0.64,1.59,1.27,3.18,1.91,4.77"/>\r
<path class="talking_tomcat-st" d="M230.53,323.97c-0.32,2.22-0.64,4.45-0.95,6.67"/>\r
<path class="talking_tomcat-st" d="M213.36,323.97c0,1.91,0,3.81,0,5.72"/>\r
<path class="talking_tomcat-st" d="M202.88,323.97c-0.64,1.27-1.27,2.54-1.91,3.81"/>\r
<path class="talking_tomcat-st" d="M203.83,393.56c6.1,4.58,23.04,16.03,47.67,17.16c26.38,1.21,45.27-10.17,51.48-14.3"/>\r
<path class="talking_tomcat-st" d="M391.65,215.28c4.95-2.37,12.1-6.47,19.07-13.35c11.95-11.8,15.84-24.37,20.97-41c0,0,5.39-17.44,2.86-48.62\r
	c-0.19-2.29-0.95-2.91-1.38-3.13c-0.76-0.38-1.69-0.09-2.43,0.27c-10.7,5.03-19.4,9.73-25.74,13.35\r
	c-8.93,5.09-14.34,8.2-20.97,13.35c-7.78,6.04-13.45,11.95-17.16,16.21c2.19-1.51,5.8-3.47,10.49-3.81c1.02-0.07,1.97-0.06,2.86,0\r
	c-3.81,4.13-7.63,8.26-11.44,12.39c3.5-0.64,6.99-1.27,10.49-1.91c-3.18,4.13-6.36,8.26-9.53,12.39c2.54,2.86,5.08,5.72,7.63,8.58\r
	c-1.91-0.64-3.81-1.27-5.72-1.91c2.22,3.81,4.45,7.63,6.67,11.44c-1.59-1.59-3.18-3.18-4.77-4.77c1.93,8.84,5.8,22.47,14.3,37.18\r
	c10.74,18.59,18.88,21.63,24.79,35.28c9.38,21.66,1.99,44.31-1.91,56.25c-8.53,26.14-24.62,41.28-48.62,63.88\r
	c-18.46,17.37-29.2,27.49-47.67,34.32c-16.95,6.27-30.63,6.16-55.3,5.72c-30.45-0.55-49.16-0.88-71.5-9.53\r
	c-31.96-12.37-50.33-33.61-65.78-51.48c-22-25.44-40.85-47.23-39.09-76.27c0.28-4.55,1.31-27.13,16.21-45.76\r
	c4.91-6.14,8.08-7.8,13.35-14.3c11.42-14.08,15.52-29.67,17.16-41c-1.91,0.64-3.81,1.27-5.72,1.91c2.86-4.13,5.72-8.26,8.58-12.39\r
	c-1.59-0.95-3.18-1.91-4.77-2.86"/>\r
<path class="talking_tomcat-st" d="M105.63,213.37c-5.9-3.65-14.73-10.19-21.93-20.97c-1.09-1.64-3.65-5.62-7.63-15.25c0,0-13.15-31.83-8.58-67.69\r
	c0.05-0.38,0.19-1.45,0.95-1.91c0.6-0.35,1.35-0.2,1.91,0c14.88,7.38,26.7,14.48,35.28,20.02c10.45,6.75,15.54,10.84,20.02,17.16\r
	c5.32,7.51,7.54,15.03,8.58,20.02c-2.22-2.22-4.45-4.45-6.67-6.67"/>\r
<path class="talking_tomcat-st" d="M196.2,186.68c3.48-0.15,7.35,7.51,7.63,14.3c0.34,8.48-4.86,17.52-8.58,17.16c-3.48-0.34-5.75-8.92-5.72-15.25\r
	C189.56,195.78,192.51,186.84,196.2,186.68z"/>\r
<path class="talking_tomcat-st" d="M292.5,202.88c-0.12-7.24,3.03-16.08,6.67-16.21c3.65-0.13,7.77,8.51,7.63,16.21\r
	c-0.14,7.22-4.05,15.38-7.63,15.25C295.59,218.01,292.61,209.6,292.5,202.88z"/>\r
<path class="talking_tomcat-st" d="M320.14,260.09c9.83-13.84,24.32-31.13,44.81-47.67c29.42-23.73,58.62-35.73,78.18-41.95"/>\r
<path class="talking_tomcat-st" d="M323,264.86c9.29-7.62,23.57-17.51,42.9-24.79c25.7-9.68,48.42-10.25,61.97-9.53"/>\r
<path class="talking_tomcat-st" d="M328.73,274.39c10.83-4.53,23.26-8.88,37.18-12.39c31.18-7.87,58.93-8.79,80.09-7.63"/>\r
<path class="talking_tomcat-st" d="M177.14,256.27c-9.11-11.09-20.72-23.33-35.28-35.28c-30.76-25.24-61.76-38.54-83.9-45.76"/>\r
<path class="talking_tomcat-st" d="M185.72,270.58c-11.27-9.13-27.44-20.32-48.62-29.56c-23.53-10.26-44.79-14.42-60.06-16.21"/>\r
<path class="talking_tomcat-st" d="M180.95,278.2c-13.25-7.27-32.6-15.97-57.2-20.97c-19.83-4.03-37.22-4.47-50.53-3.81"/>\r
</svg>\r
`,Ul=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.teto-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="teto-st" d="M148.5,305.5c0.73,28.22,6.93,47.9,12,60c2.54,6.06,4.15,8.68,5,10c8.52,13.18,21.35,18.45,47,29\r
	c2.71,1.11,7.55,3.05,14,3c4.64-0.03,8.14-1.08,11-2c10.68-3.45,24.05-7.77,40-19c4.34-3.05,6.87-4.86,10-8\r
	c7.13-7.15,10.94-14.81,13-20"/>\r
<path class="teto-st" d="M150.5,328.5c0.19,8.85,1.01,21.72,4,37c3.07,15.69,6.72,25.23,5,26c-2.29,1.02-11.75-14.51-18-27\r
	c-6.06-12.11-9.77-22.71-12-30"/>\r
<path class="teto-st" d="M302.5,317.5c0.38,9.85,0.16,24.14-3,41c-3.31,17.62-7.96,28.06-6,29c2.46,1.18,13.43-13.42,20-30\r
	c5.19-13.09,6.63-24.9,7-33"/>\r
<path class="teto-st" d="M165.5,155.5c-11.03,5.53-18.78,11.89-24,17c-26.03,25.49-31.14,61.04-33,74c-0.36,2.52-1.57,12.35-4,32\r
	c-2.4,19.44-2.39,19.86-3,23c-2.93,15.15-6.38,22.52-4,24c2.38,1.48,8.51-4.27,11-7c5.36-5.87,7.25-12.39,8-16"/>\r
<path class="teto-st" d="M113.5,311.5c-0.87,3.63-2.18,8.82-4,15c-3.44,11.65-6.78,16.04-5,18c2.42,2.66,11.96-1.31,19-6\r
	c10.28-6.85,17.04-16.46,25-34c5.44-12,12.11-29.17,17-51"/>\r
<path class="teto-st" d="M169.5,206.5c-1.4,5.32-3.14,13.26-4,23c-1.04,11.86-3.55,45.47,16,76c10.83,16.92,24.69,27.05,26,26\r
	c0.82-0.66-3.13-5.89-5-16c-0.31-1.68-1.73-9.34,0-10c1.53-0.59,3.9,4.91,10,11c4.74,4.73,9.21,9.2,13,9\r
	c10.39-0.55,18.53-36.44,20-66c1-20.24-1.16-36.72-3-47"/>\r
<path class="teto-st" d="M246.5,253.5c6.24,17.68,14.96,29.82,21,37c2.64,3.14,27.74,32.19,64,37c1.56,0.21,18.5,2.36,20-2\r
	c0.59-1.73-1.51-3.71-6-9c-4.81-5.66-8.51-10.55-11-14"/>\r
<path class="teto-st" d="M296.5,176.5c10.7,15.2,18.53,28.73,24,39c25.58,48.04,22.44,67.92,34,92c0.94,1.95,3.98,8.12,2,10\r
	c-1.87,1.78-7.35-1.12-9-2c-5.15-2.73-8.3-6.55-10-9"/>\r
<path class="teto-st" d="M154.5,149.5c-4.32,3.46-9.25,8.04-14,14c-9.2,11.53-13.7,23.11-16,31"/>\r
<path class="teto-st" d="M142.5,160.5c-9.82-1.67-20.52-3.08-32-4c-14.47-1.16-27.88-1.36-40-1c-1.41,0.14-5.45,0.73-9,4\r
	c-4.64,4.26-4.96,9.88-5,11c-1.64,32.71-2.38,56.64-2,61c0.08,0.87,0.29,3.24,2,5c1.38,1.42,3.14,1.83,4,2\r
	c7.05,1.38,35.96,2.73,36,3c0.02,0.12-5.33,1.03-25,4c-0.95,0.21-2.54,0.71-4,2c-3.31,2.94-3.05,7.38-3,8\r
	c-0.44,17.39-0.41,30.17,0,33c0.24,1.69,1,3,1,3s0.99,1.73,3,3c2.51,1.6,13.6,4.1,29,6c-5,1.67-10,3.33-15,5\r
	c-0.89,0.23-3.84,1.1-6,4c-2.57,3.46-2.11,7.24-2,8c0.35,1.73,3.59,17.6,6,25c0.27,0.84,0.8,2.37,2,4c1.75,2.37,4.05,3.75,7,5\r
	c6.44,2.73,13.21,3.65,17,4c-4.67,4-9.33,8-14,12c-0.35,0.32-1.81,1.71-2,4c-0.24,2.88,1.75,4.77,2,5c3.88,3.75,9.87,8.97,18,14\r
	c11.02,6.83,21.2,10.34,22,9c0.83-1.39-7.22-9.83-11-16c-0.43-0.71-1.34-2.25-1-4c0.31-1.57,1.48-2.56,2-3c4.1-3.46,20.11-6.82,21-7\r
	"/>\r
<path class="teto-st" d="M332.5,239.5c-3.67-13.17-6.94-28.24-9-45c-1.03-8.41-1.67-16.43-2-24c-0.04-0.63-0.05-2.3,1-4\r
	c1.34-2.18,3.47-2.85,4-3c6.85-1.42,13.85-2.76,21-4c29.25-5.08,57.04-7.84,83-9c0.76-0.06,5.24-0.36,9,3c3.94,3.51,4,8.27,4,9\r
	c1.33,18.67,2.67,37.33,4,56c0.41,0.73,2.55,4.73,1,9c-1.68,4.64-7.03,7.72-13,7c-12.33,1-24.67,2-37,3c10.67,1,21.33,2,32,3\r
	c0.43-0.05,3.57-0.36,6,2c2.89,2.81,2.05,6.78,2,7c-0.08,16.83-0.13,28.95,0,32c0.02,0.47,0.09,1.88-0.52,3.5\r
	c-0.67,1.78-1.83,2.92-2.48,3.5c-1.54,1.37-3.26,1.81-4,2c-3.65,0.93-16.9,4.4-35,9c8.33,0,16.67,0,25,0c0.83,0.06,3.03,0.32,5,2\r
	c3.07,2.61,3.02,6.46,3,7c-2.33,10.33-4.67,20.67-7,31c-0.2,1.05-0.68,2.68-2,4c-1.5,1.5-3.35,1.86-4,2c-2.64,0.58-7.47,2.33-17,7\r
	c4,3.33,8,6.67,12,10c0.66,0.57,1.57,1.56,2,3c0.79,2.68-0.4,5.81-3,8c-4.46,4.25-10.74,9.39-19,14c-7.07,3.94-13.65,6.41-19,8\r
	c6.14-9.97,10.26-17.55,11-20c0.15-0.5,0.53-1.76,0-3c-0.47-1.1-1.43-1.68-2-2c-3.77-2.08-9.1-2.76-11-3c-4.45-0.57-6.69-0.85-7-1\r
	c-4.88-2.32-6.38-8.45-7-11c-0.64-2.61-2.1-8.61,1-12c0.61-0.67,2.08-1.46,5-3c2.48-1.31,4.56-2.32,6-3c-4-1-8-2-12-3\r
	c-0.79-0.24-2.09-0.77-3-2c-0.84-1.15-0.95-2.37-1-3c-0.23-2.73-0.61-6.84-1-12"/>\r
<path class="teto-st" d="M341.5,264.5c3.21,1.13,8.03,2.51,14,3c7.89,0.64,13.9-0.6,14,0c0.11,0.66-7.37,1.8-17,6\r
	c-3.43,1.5-6.17,2.96-8,4"/>\r
<path class="teto-st" d="M138.5,304.5c3.33,2.33,6.67,4.67,10,7c5.38-1.04,12.6-1.82,21-1c14.87,1.46,25.93,7.2,32,11"/>\r
<path class="teto-st" d="M247.5,319.5c6.48-2.25,13.83-4.36,22-6c16.15-3.23,30.53-3.62,42-3c2.33-3,4.67-6,7-9"/>\r
<path class="teto-st" d="M168.5,310.5c-1.41,3.74-3.28,10.09-3,18c0.1,2.73,0.83,23.53,13,28c4.49,1.65,10.22,0.97,14-2\r
	c4.52-3.55,5.18-9.55,6-17c0.55-4.98,0.31-9.15,0-12"/>\r
<path class="teto-st" d="M258.5,317.5c-1.75,8.1-1.5,14.68-1,19c0.55,4.79,0.93,7.73,3,11c3.11,4.91,8.75,8.54,15,9\r
	c4.15,0.31,7.89-0.83,10-2c8.77-4.85,11.4-22.37,6-43"/>\r
<path class="teto-st" d="M228.5,400.5c-1.07-0.22-6.9-1.54-10-7c-0.38-0.67-3.59-6.5-1-11c0.83-1.45,1.88-2.08,9-5\r
	c11.01-4.51,12.45-4.6,14-4c4.03,1.55,5.51,6.41,6,8c2.09,6.83-1.26,12.75-2,14"/>\r
<path class="teto-st" d="M340.5,160.5c-3.2-2.3-6.86-4.69-11-7c-5.37-3-10.46-5.27-15-7c0.3-13.12,0.6-26.24,0.89-39.36\r
	c0.06-2.81-1.64-5.37-4.27-6.37c-16.74-6.37-43-13.83-75.63-13.28c-27.12,0.46-49.28,6.3-64.5,11.72c-2.09,0.74-3.5,2.72-3.5,4.94\r
	v15.34"/>\r
<path class="teto-st" d="M155.5,151.5c-6.95-8.34,0.71-28.72,13-33c1.31-0.46,7.89-2.55,13,1c3.75,2.6,4.74,6.89,5,8\r
	c2.6,11.2-7.45,27.38-20,28C164.88,155.58,158.93,155.61,155.5,151.5z"/>\r
<path class="teto-st" d="M186.5,138.5c11.29-1.79,24.03-3,38-3c36.11,0,65.98,8.11,87,16"/>\r
<path class="teto-st" d="M176.5,151.5c16.17,1.4,37.81,3.28,46,4c0,0,31.87,2.78,86-3c0.51-0.05,1.76-0.18,3-1c1.89-1.26,2.65-3.42,3-5"\r
	/>\r
<path class="teto-st" d="M288.5,377.5c2,0.33,4,0.67,6,1"/>\r
<path class="teto-st" d="M301.5,379.5c1.4,0.19,3.51,0.34,6,0c17.6-2.44,33.06-27,29-46c-0.57-2.69-1.44-4.77-2-6"/>\r
<path class="teto-st" d="M334.5,354.5c2.98-1.47,7.61-4.2,12-9c4.49-4.91,6.81-9.87,8-13"/>\r
<path class="teto-st" d="M162.5,266.5c2.87,1.71,7.66,4.06,14,5c8.65,1.28,15.59-0.74,19-2"/>\r
<path class="teto-st" d="M234.5,265.5c1.18,0.14,2.93,0.26,5,0c5.59-0.7,8.44-3.47,12-5c3.08-1.32,7.82-2.19,15,0"/>\r
<path class="teto-st" d="M244.5,309.5c3.31-1.43,7.33-2.88,12-4c5.71-1.37,10.83-1.88,15-2"/>\r
<path class="teto-st" d="M178.5,301.5c3.05,0.24,6.81,0.79,11,2c4.01,1.16,7.37,2.63,10,4"/>\r
</svg>\r
`,Wl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.teto_1-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="teto_1-st" d="M141.43,258.6c9.7-4.61,21.26-11.09,33.34-20.18c13.68-10.29,24.04-20.91,31.58-29.83\r
	c-1.59,11.85-1.87,21.71-1.75,28.95c0.16,10.18,0.31,19.84,2.63,24.56c0.26,0.52,0.94,1.8,0.88,3.51c-0.09,2.59-1.81,3.7-3.51,7.02\r
	c-0.96,1.87-2.63,5.14-1.75,6.14c2.21,2.52,19.25-10.75,21.93-7.9c1.28,1.36-1.9,5.11-0.88,6.14c2.06,2.08,19-8.9,32.46-23.69\r
	c6.8-7.47,14.63-18.01,21.06-32.46c5.63,14.91,10.91,27.13,14.91,35.97c17.09,37.7,26.81,48.72,36.85,56.15\r
	c8.5,6.28,17.4,10.11,18.42,8.77c1.29-1.68-9.63-11.89-7.9-14.04c0.77-0.96,3.15,0.81,6.14,0c0.88-0.24,4.16-1.34,7.02-8.77\r
	c4.44-11.53,3.83-27.77,3.51-33.34"/>\r
<path class="teto_1-st" d="M135.29,237.55c-3.02,5.88-6.12,12.92-8.77,21.06c-3.44,10.54-5.22,20.13-6.14,28.07"/>\r
<path class="teto_1-st" d="M120.38,212.98c-7.24,7.75-17,19.68-25.44,35.97c-13.08,25.25-17.65,50.69-14.91,51.76\r
	c2.79,1.09,13.83-22.79,18.42-21.06c1.44,0.55,1,3.15,2.63,7.02c2.42,5.74,7.31,9.25,11.4,11.4"/>\r
<path class="teto_1-st" d="M99.32,239.3c-0.27-2.85-0.32-6.87,0.88-11.4c1.5-5.69,3.91-8.25,2.63-10.53c-1.88-3.33-9.12-1.51-9.65-3.51\r
	c-0.45-1.69,4.48-4.04,8.77-7.02c7.74-5.37,11.06-11.15,14.04-14.91c5.77-7.3,27.72-29.11,57.9-42.11\r
	c42.65-18.38,80.13-9.85,84.22-7.02c0.37,0.26,2.68,2,6.14,2.63c2.59,0.47,4.64,0.1,5.26,0c5.75-0.93,16.75,0.8,22.81,1.75\r
	c26.49,4.16,47.37,22.81,47.37,22.81c12.69,11.33,18.51,22.97,24.56,35.09c9.4,18.82,18.62,37.27,16.67,62.29\r
	c-2.61,33.35-23.45,57.53-29.83,60.53c-0.59,0.28-3.48,1.52-6.14,4.39c-2.97,3.21-3.98,6.65-4.39,7.9\r
	c-2.67,8.17-10.72,17.47-18.42,21.93c-9.17,5.31-20.7,5.42-21.93,2.63c-0.86-1.95,3.43-5.01,2.63-6.14\r
	c-1.05-1.48-8.57,3.51-19.3,6.14c-7,1.72-16.1,2.62-16.67,0.88c-0.82-2.54,17.82-6.72,30.71-19.3\r
	c13.6-13.28,17.03-32.23,17.55-47.37"/>\r
<path class="teto_1-st" d="M98.45,280.54c-2.56,5.35-7.15,16.97-5.26,31.58c0.64,4.95,2.18,15.79,10.53,25.44c0,0,6.84,7.92,20.18,12.28\r
	c4.23,1.38,5.53,0.42,6.14,0c3.08-2.14,1.87-8.2,1.75-8.77"/>\r
<path class="teto_1-st" d="M120.38,285.8c-0.94,2.17-1.88,3.94-2.63,5.26c-0.97,1.69-1.95,3.39-3.51,5.26c-1.61,1.93-2.56,2.52-3.51,3.51\r
	c-4.61,4.78-3.64,12.97-3.51,14.04c0,0,0.65,5.42,4.39,10.53c16.45,22.48,68.43,35.09,68.43,35.09c10.69,2.59,31.98,7.12,59.66,7.9\r
	c13.26,0.37,24.4-0.21,32.46-0.88"/>\r
<path class="teto_1-st" d="M363.39,315.63c4.04,1.68,5.52,3.8,6.14,5.26c3.68,8.62-8.88,25.22-23.69,28.07c-4.11,0.79-7.61,0.38-9.65,0"/>\r
<path class="teto_1-st" d="M264.26,145.43c-8.21-12.03-8.12-27.63,0-38.6c10.81-14.59,29.63-12.58,32.46-12.28\r
	c7.05,0.75,15.82,3.85,15.79,7.02c-0.03,2.88-7.29,3.1-18.42,8.77c-6.16,3.14-20.49,10.44-25.44,24.56\r
	c-1.47,4.2-1.75,7.97-1.75,10.53"/>\r
<path class="teto_1-st" d="M165.12,154.21c-4.93-1.19-8.91-2.08-11.4-2.63c0,0-23.78-5.22-67.55-6.14c-0.73-0.02-2.5-0.03-4.39,0.88\r
	c-2.49,1.2-3.79,3.34-4.39,4.39c-11.42,19.93-14.91,35.09-14.91,35.09c0,0-2.21,9.6-2.63,31.58c-0.03,1.53-0.05,4.7,1.75,7.9\r
	c0.49,0.87,1.74,2.86,5.26,5.26c2.39,1.64,7.02,4.28,14.04,5.26"/>\r
<path class="teto_1-st" d="M72.13,233.16c-0.71,0.18-2.45,0.66-4.39,1.75c-10.6,5.98-11.32,21.37-12.28,42.11\r
	c-0.2,4.4-0.37,11.96,3.51,14.04c2.29,1.23,5.54,0.29,6.14,1.75c0.46,1.12-1.04,2.68-1.75,3.51c-4.28,4.98-4.85,12.66-4.39,16.67\r
	c0.68,5.92,4.64,12.92,10.53,15.79c1.97,0.96,4.37,1.2,6.14,3.51c1.95,2.56,1.79,5.68,1.75,6.14c-0.45,6.56-7.83,9.34-7.02,11.4\r
	c0.82,2.09,9.5,2.03,16.67-1.75c8.31-4.39,11.87-12.36,13.16-15.79"/>\r
<path class="teto_1-st" d="M359.01,193.68c0.98-0.51,2.47-1.21,4.39-1.75c0.14-0.04,2.54-0.72,5.26-0.88c20.2-1.19,46.5,2.63,46.5,2.63\r
	c0,0,9.33,1.36,32.46,8.77c0.78,0.25,2.72,0.9,4.39,2.63c0.47,0.49,1.94,2.14,2.63,5.26c1.89,8.59-0.39,36.05-0.88,42.99\r
	c0,0-0.76,5.81-6.14,28.07c-0.7,2.91-2.03,8.08-6.11,10.09c-0.69,0.34-1.54,0.63-7,1c-8.37,0.57-9.96,0.14-10.57,1.2\r
	c-1.3,2.22,4.8,5.74,7.02,13.16c1.27,4.26,0.53,7.62-0.88,14.04c-2.19,9.97-4.21,19.15-11.4,22.81c-7.29,3.71-14.04,2.63-14.04,2.63\r
	c-2.13-0.34-4.32-1.08-5.26,0c-1.35,1.55,1.91,4.48,0.88,7.9c-1.08,3.56-6.09,5.24-8.77,6.14c-3.69,1.24-4.41,0.43-7.02,1.75\r
	c-0.36,0.18-5.68,2.96-6.14,7.02c-0.64,5.67,8.74,9.39,7.9,11.4c-1.02,2.44-16.15,0.41-28.95-7.9\r
	c-10.47-6.8-12.71-13.46-13.16-14.91c-1.1-3.54-1.07-6.69-0.88-8.77"/>\r
<path class="teto_1-st" d="M122.13,274.4c1.24-1.9,12.01-17.72,32.46-19.3c18.98-1.47,31.5,10.47,33.34,12.28"/>\r
<path class="teto_1-st" d="M251.1,276.15c4.23-1.84,15.12-5.89,28.95-3.51c15.46,2.66,24.97,11.7,28.07,14.91"/>\r
<path class="teto_1-st" d="M130.03,314.75c-7.93-13.66,6.32-42.63,27.2-44.74c11.18-1.13,25.75,5.28,29.83,18.42\r
	c4.11,13.27-4.81,25.87-13.16,31.58c-7.47,5.11-15.25,5.25-18.42,5.26C154.16,325.29,136.07,325.15,130.03,314.75z"/>\r
<path class="teto_1-st" d="M237.94,310.37c3.7-14.65,19.64-23.84,34.21-22.81c17.29,1.22,31.84,16.78,31.58,32.46\r
	c-0.17,10.41-6.8,17.32-7.9,18.42c-12.97,13.09-39.46,12.27-51.76-2.63C243.34,334.91,234.53,323.88,237.94,310.37z"/>\r
<path class="teto_1-st" d="M191.44,334.05c2.11-4.46,12.62-6.06,18.42-0.88c3.42,3.05,5.15,8.41,3.51,13.16c-0.1,0.29-2.28,6.35-7.02,7.02\r
	c-5.09,0.72-9.12-5.34-11.4-8.77C192.7,341.19,189.99,337.12,191.44,334.05z"/>\r
</svg>\r
`,Gl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.teto_2-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="teto_2-st" d="M259.89,116.78c-3.27,3.53-7.6,9.03-11.08,16.62c-3.89,8.5-5.13,16.17-5.54,21.23\r
	c-2.18-1.57-4.91-3.95-7.38-7.38c-1.17-1.62-2.07-3.19-2.77-4.62c-0.16,1.18-0.25,2.77,0,4.62c0.2,1.48,0.56,2.72,0.92,3.69\r
	c-5.34-5.23-8.42-10.39-10.15-13.85c-1.26-2.51-7.91-16.28-4.62-30.46c1.12-4.83,3.08-8.33,4.62-11.08\r
	c2.02-3.61,3.25-4.78,4.62-5.54c1.91-1.06,3.82-1.16,7.38-0.92c5.05,0.34,8.73,0.58,12.92,1.85c12.06,3.64,21.18,13.57,23.08,15.69\r
	c8.03,3.69,17.36,8.97,26.77,16.62c3.41,2.77,6.48,5.57,9.23,8.31c1.19,0.85,3.06,1.99,5.54,2.77c1.62,0.51,3.15,0.75,6.46,0.92\r
	c2.54,0.13,5.99,0.21,10.15,0c-1.21,1.5-3.3,3.7-6.46,5.54c-2.89,1.68-5.57,2.42-7.38,2.77c1.29,0.58,4.06,1.58,7.38,0.92\r
	c1.09-0.21,2.02-0.56,2.77-0.92c-3.08,2.34-8.77,6.02-16.61,7.38c-20.94,3.65-36.84-12.72-38.77-14.77\r
	C267.94,132.94,262.9,126.67,259.89,116.78z"/>\r
<path class="teto_2-st" d="M294.04,150.01c0.14,2.18,0.12,5.46-0.92,9.23c-0.71,2.59-2.82,10.24-10.15,14.77\r
	c-8.63,5.34-17.99,2.32-19.38,1.85c0.42,1.25,1.21,3,2.77,4.62c4.15,4.28,10.13,3.79,11.08,3.69c-1.17,0.88-3.03,2.05-5.54,2.77\r
	c-4.11,1.17-7.61,0.45-9.23,0c1.81,1,4.65,2.27,8.31,2.77c5.99,0.82,10.74-0.89,12.92-1.85"/>\r
<path class="teto_2-st" d="M280.2,188.78c-3.38,4-6.77,8-10.15,12c2.24-0.05,5.55-0.39,9.23-1.85c0.66-0.26,3.36-1.36,6.46-3.69\r
	c19.63-14.76,21.23-36.92,21.23-36.92c0.2-2.82,0.1-5.11,0-6.46"/>\r
<path class="teto_2-st" d="M292.2,189.7c0.75,1.4,2.16,3.58,4.62,5.54c3.27,2.61,6.63,3.41,8.31,3.69c-0.62,0.5-4.6,3.64-10.15,2.77\r
	c-6.03-0.95-8.89-5.85-9.23-6.46"/>\r
<path class="teto_2-st" d="M306.04,127.85c0.81-0.34,2.49-1.03,4.62-1.85c0,0,21.71-8.35,55.38-8.31c1.28,0,3.98,0.04,5.54,1.85\r
	c0.92,1.07,1.03,2.28,0.92,7.38c-0.13,5.99-0.2,9-0.92,10.15c-2.06,3.28-5.73,3.69-5.54,5.54c0.12,1.13,1.53,1.15,2.77,2.77\r
	c1.2,1.57,1.12,3.84,0.92,8.31c-0.23,5.14-0.38,7.74-1.85,9.23c-1.23,1.24-2.72,1.58-2.77,2.77c-0.04,0.99,0.99,1.32,1.85,2.77\r
	c0.91,1.53,0.91,2.97,0.92,5.54c0.01,2.85,0.02,4.53-0.92,6.46c-1.36,2.79-4.64,2.84-4.62,4.62c0.01,0.59,0.34,0.54,0.92,1.85\r
	c0.61,1.36,0.72,2.47,0.92,4.62c0.19,2.02,0.29,3.04,0,3.69c-0.81,1.86-2.84,2.05-2.77,2.77c0.14,1.31,6.81,0.75,7.38,2.77\r
	c0.37,1.28-1.9,3.02-2.77,3.69c-2.77,2.13-5.6,2.46-5.54,2.77c0.06,0.29,2.54-0.04,6.46,0c3,0.03,3.93,0.24,4.62,0.92\r
	c0.97,0.96,1.23,2.63,0.92,3.69c-1.51,5.16-19.19,4.97-19.38,3.69c-0.16-1.08,12.21-3.51,12-4.62c-0.23-1.17-14.46,0.73-14.77-0.92\r
	c-0.05-0.26,0.89-1.1,2.77-2.77c1.47-1.3,1.93-1.64,1.85-1.85c-0.33-0.77-7.63,2.17-8.31,0.92c-0.44-0.82,2.35-2.72,1.85-3.69\r
	c-0.62-1.22-5.51,0.67-6.46-0.92c-0.55-0.92,0.54-2.35,0-2.77c-0.49-0.38-1.39,0.81-2.77,0.92c-2.43,0.21-4.55-3.07-5.54-4.62\r
	c-1.12-1.74-2.27-3.53-1.85-5.54c0.31-1.45,1.25-2.06,0.92-2.77c-0.48-1.04-2.5-0.31-4.62-0.92c-2.35-0.68-4.06-3.85-7.38-10.15\r
	c-1.99-3.77-2.45-5.21-1.85-6.46c0.78-1.63,2.86-1.92,2.77-2.77c-0.11-0.98-2.87-1.01-4.62-1.85c-2.31-1.11-4.65-4.54-4.62-14.77"/>\r
<path class="teto_2-st" d="M207.28,121.39c1.11-1.79,2.87-4.18,5.54-6.46c2-1.71,3.95-2.89,5.54-3.69"/>\r
<path class="teto_2-st" d="M212.82,93.7c4,0,8,0,12,0"/>\r
<path class="teto_2-st" d="M204.51,94.62c-1.79-0.09-4.34-0.16-7.38,0c-1.69,0.09-5.84,0.3-8.31,0.92c-5.52,1.39-8.64,6.31-13.85,14.77\r
	c-2.36,3.84-5.45,9.42-8.31,16.62c3.96-4.21,5.19-4.87,5.54-4.62c0.39,0.28-0.33,1.71-0.92,3.69c-1,3.33-1.05,6.26-0.92,8.31"/>\r
<path class="teto_2-st" d="M165.74,80.78c-0.56,0.57-2.27,2.27-3.69,3.69c-2.14,2.13-2.75,2.75-2.77,3.69c-0.01,0.58,0.2,1.4,2.77,3.69\r
	c3.37,3,5.75,4.04,5.54,4.62c-0.21,0.56-2.73,0.16-3.69,0c-2.5-0.4-2.72-0.92-3.69-0.92c-0.67,0-2.32,0.23-8.31,12\r
	c-0.76,1.49-1.58,3.16-0.92,4.62c0.74,1.64,2.92,2.04,2.77,2.77c-0.15,0.72-2.3,0.33-3.69,1.85c-0.56,0.6-0.75,1.25-0.92,1.85\r
	c-2.08,7.19-1.67,7.94-2.77,12.92c-0.27,1.22-0.5,2.09,0,2.77c1.03,1.4,4.05,0.51,4.62,1.85c0.14,0.32,0.07,0.63,0,0.92\r
	c-0.33,1.46-1.94,1.66-2.77,2.77c-0.62,0.84-0.42,2.11,0,4.62c0.56,3.33,0.94,5.53,2.77,7.38c1,1.01,2.08,1.56,2.77,1.85"/>\r
<path class="teto_2-st" d="M186.05,96.47c-8.53-6.75-15.06-11.79-20.31-15.69c-1.3-0.96-4.15-3.07-3.69-4.62c0.5-1.67,4.62-1.81,6.46-1.85\r
	c23.12-0.46,39.69,2.77,39.69,2.77c0,0,22.59,4.4,49.85,11.08c2.43,0.6,6.89,1.72,12,4.62c6.79,3.84,10.76,8.56,12.92,11.08\r
	c6.17,7.19,14.36,16,25.85,27.69"/>\r
<path class="teto_2-st" d="M210.05,77.09c7.68-4.21,18-8.68,30.46-11.08c8.18-1.57,14.65-1.74,19.38-1.85c8.75-0.19,12.47,0.6,13.85,0.92\r
	c5.8,1.36,9.91,3.72,12.92,5.54c18.3,11.06,27.44,16.59,35.08,27.69c3.15,4.58,7.53,12.19,10.15,23.08"/>\r
<path class="teto_2-st" d="M286.66,70.62c-0.65-2.38-1.55-7.17,0.92-11.08c4.44-7.02,16.46-5.92,23.08-3.69\r
	c8.41,2.84,14.66,9.71,13.85,11.08c-0.51,0.85-3.45-0.94-9.23-1.85c-9.24-1.45-21.09,0.08-23.08,5.54c-0.27,0.73-0.5,1.93,0,3.69"/>\r
<path class="teto_2-st" d="M248.81,115.85c2.45-1.33,7.33-3.56,13.85-3.69c8.23-0.16,14.23,3.13,16.62,4.62"/>\r
<path class="teto_2-st" d="M226.66,112.16c-0.42-1.32-1.99-5.67-6.46-8.31c-2.13-1.26-4.18-1.69-5.54-1.85"/>\r
<path class="teto_2-st" d="M182.35,143.55c-0.09,1.27-0.17,3.2,0,5.54c0.22,3.16,0.65,3.72,0.92,6.46c0.49,4.93-0.63,5.76,0,9.23\r
	c0.29,1.57,0.96,3.85,2.77,6.46c1.23-2.77,2.46-5.54,3.69-8.31"/>\r
<path class="teto_2-st" d="M198.97,132.47c-1.42,3.83-2.26,7.02-2.77,9.23c-1.47,6.38-1.44,10.23-4.62,12.92\r
	c-1.57,1.33-2.22,0.93-2.77,1.85c-2.45,4.09,7.92,16.48,19.38,24c10.8,7.08,21.14,8.91,28.61,10.15c7.97,1.33,20.95,2.45,36.92-0.92\r
	"/>\r
<path class="teto_2-st" d="M306.04,163.85c0.87,0.28,6.31,2.12,8.31,7.38c2.55,6.72-2.85,12.88-3.69,13.85\r
	c-6.35,7.25-16.69,5.68-17.54,5.54"/>\r
<path class="teto_2-st" d="M319.89,174.01c-0.33,1.03-0.89,2.34-1.85,3.69c-1.87,2.65-4.24,4-5.54,4.62"/>\r
<path class="teto_2-st" d="M220.2,168.47c1.03-1.14,3.53,0.72,9.23,1.85c3.83,0.76,5.31,0.43,6.46,1.85c0.25,0.3,0.75,0.91,0.92,4.62\r
	c0.23,4.78,0.32,7.19-0.92,8.31c-1.2,1.09-2.94,0.97-3.69,0.92c-7.95-0.52-11.66-13.56-12-14.77\r
	C219.9,170.19,219.64,169.09,220.2,168.47z"/>\r
<path class="teto_2-st" d="M248.81,137.08c3.05-1.37,9.83-3.84,17.54-1.85c11.34,2.94,19.96,14.35,21.23,28.61"/>\r
<path class="teto_2-st" d="M264.51,135.24c-1.81,0.91-4.68,2.61-7.38,5.54c-6.29,6.82-9.8,18.3-5.54,23.08c0.75,0.85,2.35,1.49,5.54,2.77\r
	c5.65,2.27,8.48,3.41,11.08,2.77c5.03-1.24,7.25-7.91,8.31-11.08c2.42-7.27,1.09-13.9,0-17.54"/>\r
<path class="teto_2-st" d="M222.05,134.32c-0.75-1.55-2.61-4.87-6.46-7.38c-2.93-1.91-5.75-2.54-7.38-2.77"/>\r
<path class="teto_2-st" d="M217.43,128.78c-1.52-0.4-5.64-1.26-9.23,0.92c-4.43,2.69-5.02,8.17-5.54,12.92c-0.42,3.91-1.19,11,2.77,13.85\r
	c1.84,1.32,4.44,1.53,8.31,1.85c2.47,0.2,3.71,0.3,4.62,0c5.97-1.98,3.8-23.06,3.69-24"/>\r
<path class="teto_2-st" d="M154.66,188.78c-0.58-0.72-1.49-1.74-2.77-2.77c-1.86-1.51-3.1-1.92-4.62-2.77c-5.01-2.81-7.27-7.22-8.31-9.23\r
	c-0.62-1.2-1.05-2.34-0.92-3.69c0.18-1.85,1.33-3.14,1.85-3.69c3.51-3.81,27.46-28.01,32.31-35.08c2.17-3.17,3.69-6.46,3.69-6.46\r
	c1-2.17,1.37-3.44,1.85-4.62c1.54-3.78,3.88-5.79,7.38-9.23c8.19-8.03,11.82-13.86,13.85-12.92c0.25,0.11,0.68,0.42,0.92,0.92\r
	c0.56,1.15-0.26,2.65-0.92,3.69c-2.5,3.96-9.55,12.22-10.15,12.92"/>\r
<path class="teto_2-st" d="M199.89,100.16c1.06-1.45,5.42-7.27,7.38-6.46c0.2,0.08,0.72,0.38,0.92,0.92c0.44,1.19-0.95,2.75-0.92,2.77\r
	c0.03,0.02,1.66-3.64,3.69-3.69c0,0,0.95-0.03,1.85,0.92c0.73,0.78,1.91,4.05-10.15,23.08"/>\r
<path class="teto_2-st" d="M211.89,100.16c0.93-0.32,2.11-0.57,2.77,0c1.05,0.92,0.28,3.5-0.92,6.46c-1.42,3.5-3.89,8.6-8.31,14.77"/>\r
<path class="teto_2-st" d="M183.28,129.7c0.79-0.57,2.03-1.34,3.69-1.85c2.88-0.88,4.18-0.1,6.46-0.92c2.39-0.86,1.96-2.07,4.62-3.69\r
	c3.98-2.43,9.45-2.45,10.15-0.92c0.14,0.3,0.07,0.61,0,0.92c-0.34,1.58-2.12,2.43-2.77,2.77c-1.4,0.74-3.09,2.64-6.46,6.46\r
	c-3.34,3.78-2.66,4.2-4.62,5.54c-1.2,0.82-2.96,1.47-6.46,2.77c-3.24,1.2-3.66,1.17-4.62,1.85c-2.35,1.65-3.19,4.15-3.69,5.54\r
	c-2.91,8.01-4.52,6.29-12.92,23.08c-0.37,0.74-0.85,1.72-1.85,2.77c-3.07,3.25-7.75,3.75-11.08,3.69"/>\r
<path class="teto_2-st" d="M198.05,115.85c2.15-3.69,4.31-7.38,6.46-11.08"/>\r
<path class="teto_2-st" d="M143.59,180.47c-1.14,0.97-2.82,2.52-4.62,4.62c-2.8,3.26-6.71,8.85-5.54,10.15c0.72,0.8,2.69-0.76,8.31-0.92\r
	c0.98-0.03,1.42,0,1.85,0c3.04-0.02,6.95-1.88,12.92-8.31c2.85-3.07,6.59-7.62,10.15-13.85"/>\r
<path class="teto_2-st" d="M170.35,163.85c3.87-0.2,5.59,0.87,6.46,1.85c1.82,2.04,0.83,4.05,2.77,5.54c1.54,1.18,3.8,1.09,8.31,0.92\r
	c2.02-0.08,2.16-0.23,2.77,0c2.79,1.07,1.93,4.75,4.62,6.46c2.48,1.58,4.5-0.81,8.31,0.92c0.96,0.44,1.87,1.21,3.69,2.77\r
	c3.6,3.07,3.75,4.34,5.54,4.62c2.03,0.32,3.42-0.95,4.62,0c0.65,0.52,0.38,1.01,0.92,1.85c1.32,2.03,4.01,0.86,7.38,2.77\r
	c2.05,1.16,1.85,2.04,3.69,2.77c2.04,0.8,4.1,0.44,5.54,0"/>\r
<path class="teto_2-st" d="M234.97,190.62c-0.02,0.62-0.04,1.58,0,2.77c0.03,1.05,0.08,1.37,0,1.85c-0.12,0.71-0.53,1.69-1.85,2.77"/>\r
<path class="teto_2-st" d="M253.43,191.55c0,1.85,0,3.69,0,5.54"/>\r
<path class="teto_2-st" d="M241.43,204.47c6.41-3.2,9.47-5.66,11.08-7.38c0.33-0.36,1.25-1.38,2.77-1.85c1.6-0.5,3.91-0.39,5.54,0.92\r
	c1.57,1.27,1.13,2.55,2.77,3.69c0.81,0.57,1.32,0.53,3.69,0.92c3.43,0.57,5.46,0.91,7.38,1.85c1.81,0.88,2.93,2,3.69,2.77\r
	c4.44,4.45,11.71,17.22,17.54,34.15c0.48,1.39,1.08,3.19,2.77,4.62c1.93,1.63,3.42,1.19,4.62,2.77c1.3,1.73-0.02,2.87,0.92,5.54\r
	c0.63,1.78,1.41,1.8,5.54,6.46c2.38,2.69,3.13,3.81,2.77,4.62c-0.39,0.86-1.71,0.59-2.77,1.85c-0.82,0.98-0.81,2.08-0.92,2.77\r
	c-0.5,2.98-4.61,4.81-8.31,6.46c-2.41,1.07-6.52,2.85-12,2.77c-3.97-0.06-3.42-1.02-10.15-1.85c-6.02-0.74-8.05-0.18-9.23-1.85\r
	c-1.47-2.09,0.36-4.9-1.85-7.38c-0.78-0.88-1.29-0.84-1.85-1.85c-1.06-1.92-0.08-3.44-0.92-4.62c-0.5-0.69-1.67-1.3-4.62-0.92"/>\r
<path class="teto_2-st" d="M242.35,274.62c1.92-2.04,4.74-4.95,8.31-8.31c3.57-3.36,5.35-5.04,7.38-6.46c2.86-2,7.84-4.69,15.69-5.54"/>\r
<path class="teto_2-st" d="M253.43,270c5.23,0,10.46,0,15.69,0"/>\r
<path class="teto_2-st" d="M303.27,273.7c0.5,0.84,1.19,2.09,1.85,3.69c0.52,1.27,0.78,1.91,0.92,2.77c0.09,0.56,0.55,3.28-0.92,5.54\r
	c-0.31,0.48-0.36,0.39-2.77,2.77c-1.25,1.23-1.64,1.65-1.85,1.85c-2.99,2.82-12.43,0.64-21.23-0.92c-0.74-0.13-2.48-0.42-4.62,0\r
	c-1.23,0.24-2.19,0.65-2.77,0.92"/>\r
<path class="teto_2-st" d="M250.66,267.24c0.86,0.52,1.99,1.38,2.77,2.77c0.62,1.12,0.64,1.91,0.92,2.77c0.8,2.47,3.16,3.72,4.62,4.62\r
	c5.35,3.29,9.3,8.47,12,12c1.07,1.4,2.47,3.4,3.89,6c0.35,0.63,0.02,1.42-0.67,1.63c-0.45,0.14-0.92,0.35-1.37,0.68\r
	c-1.3,0.96-1.72,2.4-1.85,2.77c-1.1,3.36-9.61,17.15-21.23,24.92c-4.21,2.82-8.8,5.88-14.77,5.54c-3.88-0.22-5.52-1.73-12-3.69\r
	c-4.17-1.26-6.31-1.5-13.85-2.77c-8.6-1.45-21.07-3.71-33.23-8.31c-1.59-0.6-9.18-3.55-9.23-7.38c-0.01-1.17,0.68-2.61,0-4.62\r
	c-0.51-1.52-1.49-2.4-1.85-2.77c-3.04-3.16-1.27-11.33-0.92-12.92c1.51-6.95,8.09-28.1,18.46-56.31"/>\r
<path class="teto_2-st" d="M134.36,195.24c5.51,2.12,11.05,4.27,16.62,6.46c7.31,2.88,14.54,5.77,21.7,8.67c0.91,0.37,1.73,0.92,2.43,1.61\r
	l3.04,3.04l2.86,2.86c0.87,0.87,1.34,2.05,1.33,3.27c-0.3,19.67-0.6,39.34-0.89,59.01"/>\r
<path class="teto_2-st" d="M218.35,188.78c0.04,0.64,0.07,1.6,0,2.77c-0.11,1.94-0.4,2.72,0,3.69c0.33,0.8,0.97,1.35,1.85,1.85\r
	c2.22,1.28,9.09,4.06,18.46,7.38"/>\r
<path class="teto_2-st" d="M216.51,198.01c1.77,1.47,4.56,3.57,8.31,5.54c4.77,2.51,9.53,5.01,15.69,4.62c4.95-0.32,8.66-2.36,11.08-3.69\r
	c3.36-1.85,5.8-3.96,7.38-5.54"/>\r
<path class="teto_2-st" d="M262.66,252.47c1.94-3.34,5.39-8.33,11.08-12.92c4.84-3.9,9.56-6.12,12.92-7.38"/>\r
<path class="teto_2-st" d="M270.04,226.62c-2.15,6.46-4.31,12.92-6.46,19.38"/>\r
<path class="teto_2-st" d="M186.05,214.62c1.54-4,3.08-8,4.62-12"/>\r
<path class="teto_2-st" d="M181.43,175.85c0.81,4.76,1.47,10.01,1.85,15.69c0.49,7.46,0.4,14.28,0,20.31"/>\r
<path class="teto_2-st" d="M210.97,241.39c1.54,20.92,3.08,41.85,4.62,62.77"/>\r
<path class="teto_2-st" d="M180.51,318c5.3,8.78,9.79,15.64,12.92,20.31c4.91,7.3,6.85,9.75,8.31,14.77c1.61,5.54,0.78,7.9,2.77,13.85\r
	c1.42,4.26,3.13,6.88,6.46,12c5.72,8.8,8.61,11.34,14.77,21.23c1.22,1.97,2.18,3.59,2.77,4.62"/>\r
<path class="teto_2-st" d="M220.2,326.31c6.33,12.23,8.06,18.59,8.31,22.15c0.04,0.64,0.23,3.95,0.92,8.31c0.38,2.42,0.8,4.4,1.09,5.65\r
	c0.62,2.74,1.24,4.86,1.68,6.35c2.77,9.36,3.02,11.41,7.07,24.73c0.52,1.71,0.95,3.1,1.23,3.99"/>\r
<path class="teto_2-st" d="M239.58,393.69c0.93,0.29,2.28,0.82,3.69,1.85c1.32,0.96,2.21,2.01,2.77,2.77"/>\r
<path class="teto_2-st" d="M224.81,399.23c-3.84-1.98-7.82-2.03-10.15,0c-1.59,1.38-2.54,3.82-1.85,4.62c0.78,0.9,3.26-0.77,7.38,0\r
	c1.12,0.21,1.69,0.47,1.85,0.92c0.34,0.95-1.45,1.84-1.85,3.69c-0.33,1.52,0.46,2.82,0.92,3.69c2.76,5.25,3.46,13.79,3.69,16.62\r
	c0.08,0.97,0.23,3.3,1.85,4.62c0.7,0.57,1.51,0.82,1.85,0.92c0.97,0.29,1.87,0.3,2.57,0.22c0.57-0.07,1.09,0.33,1.14,0.9\r
	c0.1,1.12,0.49,2.84,1.82,4.41c1.46,1.72,3.29,2.37,4.46,2.62c0.5,0.1,0.87,0.53,0.85,1.04c-0.01,0.34,0.09,0.59,0.09,0.65\r
	c-0.06,1.88,3.83,4,3.83,4c5.09,2.78,8.31,3.69,8.31,3.69c8.69,2.46,12.99,2.74,16.62,1.85c2.41-0.6,4.34-1.52,5.75-2.34\r
	c0.45-0.26,0.98-0.31,1.48-0.16c1.7,0.52,5.84,1.39,9.38-1.2c2.23-1.63,3.17-3.84,3.55-5.04c0.11-0.34,0.27-0.66,0.47-0.96\r
	c1.29-1.98,1.55-4.27,0.6-6c-0.51-0.93-1.27-1.51-1.85-1.85c-1.25-9.02-4.07-11.95-6.46-12.92c-2.27-0.92-3.99-0.02-7.38-0.92\r
	c-3.91-1.04-6.64-3.58-8.31-5.54"/>\r
<path class="teto_2-st" d="M232.2,410.31c-0.73-0.41-3.62-2.15-3.69-4.62c-0.1-3.56,5.59-5.77,7.38-6.46c1.2-0.46,7.79-3,11.08,0\r
	c0.67,0.61,1.38,2.26,2.77,5.54c0.8,1.89,1.42,3.48,1.85,4.62"/>\r
<path class="teto_2-st" d="M223.89,399.23c-0.45,0.61-1,1.59-0.92,2.77c0.15,2.16,2.37,4.19,5.54,4.62"/>\r
<path class="teto_2-st" d="M249.74,410.31c3.35-0.69,3.44-4.32,7.38-5.54c2.16-0.66,4.03-0.16,4.62,0c3.42,0.96,6.75,4.33,6.46,7.38\r
	c-0.37,3.94-6.77,7.54-11.08,7.38c-0.81-0.03-2.79-0.24-4.62,0.92c-0.97,0.62-1.31,1.26-1.85,1.85c-1.93,2.11-6.06,3.15-9.23,1.85\r
	c-4.16-1.72-6.56-7.46-4.62-11.08c1.87-3.48,7.09-3.68,7.38-3.69C247.2,409.31,247.56,410.76,249.74,410.31z"/>\r
<path class="teto_2-st" d="M223.89,422.31c7.18,0.35,9.45,2.1,10.15,3.69c0.25,0.56,0.25,0.98,0.92,2.77c1.49,3.98,2.44,4.47,2.77,4.62\r
	c1.08,0.47,1.42-0.36,2.77,0c1.43,0.39,2.28,1.63,3.69,3.69c1.14,1.67,1.05,2,1.85,2.77c1.27,1.23,2.76,1.62,3.69,1.85\r
	c7.29,1.79,10.95,2.66,13.85,2.77c5.66,0.21,9.49-0.65,14.77-1.85c3.02-0.68,5.53-1.45,7.38-3.69c1.09-1.32,1.59-2.72,1.85-3.69"/>\r
<path class="teto_2-st" d="M210.05,377.08c1.22,1.03,3.08,2.42,5.54,3.69c3.76,1.95,7.31,3.78,11.08,2.77c4.71-1.27,6.91-6.23,7.38-7.38"\r
	/>\r
<path class="teto_2-st" d="M249.74,423.23c-0.08,0.19-1.07,2.63,0,3.69c0.26,0.25,0.88,0.67,3.69,0c3.3-0.79,4.56-1.86,7.38-2.77\r
	c1.04-0.33,2.6-0.74,4.62-0.92"/>\r
<path class="teto_2-st" d="M253.43,426.92c-0.44,1.26-0.44,2.18,0,2.77c1.23,1.63,5.84,0.71,13.85-2.77"/>\r
<path class="teto_2-st" d="M262.66,428.77c-3.39,2.09-3.85,3.13-3.69,3.69c0.54,1.89,9.13,1.83,13.85-1.85c0.66-0.52,1.98-1.57,1.85-2.77\r
	c-0.13-1.15-1.59-2.27-2.77-2.77c-0.92-0.39-1.56-0.36-1.85-0.92c-0.35-0.69,0.34-1.28,0-1.85c-0.43-0.73-1.78-0.08-2.77-0.92\r
	c-0.66-0.57-0.45-1.19-0.92-1.85c-0.49-0.68-1.65-1.29-4.62-0.92"/>\r
<path class="teto_2-st" d="M244.2,416.77c0.15-0.55,1.16-0.69,2.77-0.92c1.62-0.23,2.59-0.37,2.77,0c0.32,0.66-1.73,3.16-3.69,2.77\r
	C245,418.41,244.03,417.39,244.2,416.77z"/>\r
<path class="teto_2-st" d="M257.12,414c-0.31-0.62,2.64-3.56,4.62-2.77c0.32,0.13,0.94,0.48,0.92,0.92\r
	C262.62,413.42,257.48,414.72,257.12,414z"/>\r
<path class="teto_2-st" d="M222.97,327.23c1.02,1.61,8.05,12.55,14.77,17.54c3.12,2.32,5.29,2.69,6.46,2.77c2.41,0.17,4.61-0.59,5.54-0.92\r
	c2.03-0.72,3.39-1.65,3.69-1.85c2.31-1.53,9.81-5.1,28.61-12.92"/>\r
<path class="teto_2-st" d="M258.04,318c4.33-1.42,9.61-2.81,15.69-3.69c5.59-0.81,10.65-1.03,14.98-0.96c1.11,0.02,2.17,0.45,2.99,1.21\r
	c2.66,2.48,4.19,5.3,4.19,5.3c1.81,3.49,2.49,6.94,2.77,9.23"/>\r
<path class="teto_2-st" d="M285.74,336.46c-0.37-0.13-3.03-1.13-3.69-3.69c-0.18-0.69-0.34-1.34,0-1.85c0.73-1.07,2.97-0.22,8.31,0\r
	c1.49,0.06,2.24,0.09,2.77,0c1.99-0.35,2.87-1.3,5.54-1.85c1.19-0.24,1.56-0.16,1.85,0c1.29,0.74,0.97,3.33,0.92,3.69"/>\r
<path class="teto_2-st" d="M294.04,342.93c-0.62,0.5-2.7,2.04-5.54,1.85c-2.65-0.18-5.64-1.85-6.46-4.62c-0.23-0.78-0.57-1.9,0-2.77\r
	c0.55-0.85,1.8-1.18,10.15-0.92c2.05,0.06,2.23,0.09,2.77,0c3.12-0.53,3.86-2.54,6.46-3.69c2.82-1.24,7.05-1.13,8.31,0.92\r
	c1.16,1.88-0.48,4.94-1.85,6.46c-1.85,2.05-4.3,2.53-5.54,2.77c-1.95,0.38-3.6,0.19-4.62,0"/>\r
<path class="teto_2-st" d="M289.43,344.77c-0.28,0.84-0.22,1.43,0,1.85c1.3,2.52,9.83,2.42,12.92-1.85c0.53-0.73,0.79-1.44,0.92-1.85"/>\r
<path class="teto_2-st" d="M291.27,347.54c0.01,1.49,0.48,2.3,0.92,2.77c2.69,2.81,11.45,0.01,12-3.69c0.09-0.63-0.01-1.55-0.92-2.77"/>\r
<path class="teto_2-st" d="M294.04,351.23c0.13,0.72,0.41,1.37,0.92,1.85c2.17,2.04,8.05,0.55,9.23-2.77c0.34-0.95,0.24-1.93,0-2.77"/>\r
<path class="teto_2-st" d="M294.04,340.16c-0.05-0.59-3.91-1.25-4.62,0c-0.14,0.26-0.2,0.66,0,0.92\r
	C290.16,342.06,294.1,340.77,294.04,340.16z"/>\r
<path class="teto_2-st" d="M297.74,339.23c-0.18-0.74,2.18-2.7,3.69-1.85c0.65,0.37,1.2,1.28,0.92,1.85\r
	C301.8,340.36,297.94,340.09,297.74,339.23z"/>\r
<path class="teto_2-st" d="M291.27,347.54c-0.13,2-0.07,4.94,0.92,8.31c1.19,4.04,3.15,6.67,3.69,7.38c1.05,1.37,1.99,2.59,3.69,3.69\r
	c0.79,0.51,4.1,2.52,8.31,1.85c0,0,2.41-0.38,4.62-1.85c6-3.98,9.85-15.99,7.38-26.77c-1.25-5.47-3.21-6.63-5.54-14.77\r
	c-0.55-1.93-1.07-4.08-2.77-6.46c-1.73-2.44-2.84-2.53-3.69-4.62c-1.2-2.95,0.35-4.42-0.92-6.46c-0.98-1.56-2.71-2.04-5.54-2.77\r
	c-2.28-0.58-5.75-1.2-10.15-0.92"/>\r
<path class="teto_2-st" d="M280.2,313.39c-0.11-1.13-0.06-2.68,0.92-3.69c1.51-1.55,4.18-0.74,4.62-1.85c0.41-1.05-1.92-2.05-1.85-3.69\r
	c0.11-2.59,6.1-5.03,7.38-3.69c1,1.05-1.36,3.9,0,5.54c0.45,0.54,0.99,0.56,2.77,0.92c3.4,0.69,5.1,1.03,6.46,1.85\r
	c1.9,1.14,2.8,2.89,3.69,4.62c1.2,2.33,1.03,3.39,1.85,5.54c1.27,3.31,3.31,5.01,4.62,6.46c4.18,4.64,4.74,11.11,5.54,20.31\r
	c0.36,4.14,1.11,12.84-1.85,15.69c-0.33,0.32-1.75,1.56-2.77,3.69c-0.54,1.12-0.79,2.12-0.92,2.77"/>\r
<path class="teto_2-st" d="M270.04,315.23c1.13,0.35,5.49,1.87,8.31,6.46c3.07,5,2.08,10.03,1.85,11.08"/>\r
</svg>\r
`,Kl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.teto-pear-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="teto-pear-st" d="M170,212c22.36-40.76,8.88-73.71,35-96c8.62-7.36,17.99-10.51,24-12c0.86-6.03,1.21-14.73-1.5-24.5\r
	c-2.25-8.11-4.74-17.08-12-23c-1.53-1.25-3.88-2.86-5-6c-1.17-3.28-1.12-8.6,2.5-11.5c3.95-3.17,9.58-1.4,12.5,0.5\r
	c4.16,2.7,5.52,7.37,6,9c2.88,9.73,9.13,27.64,17.5,51.5c29.18,5.52,42.65,17.25,49.5,27.5c12.68,18.96,4.92,36.16,22,75\r
	c2.8,6.36,2.28,4.21,12,24c8.54,17.38,20.01,41.57,23,49c14.41,35.81,2.42,106.39-48,138c-30.8,19.32-63.76,16.44-78,14\r
	c-54.76-9.36-81.63-55.11-88-67c-3.31-6.18-29.67-57.12-9-103C143.61,232.83,154.6,240.07,170,212z"/>\r
<path class="teto-pear-st" d="M211.5,227.5c38.79,2.29,77.24,31.99,83,70c3.33,21.96-5.46,39.78-10,49c-4.1,8.33-21.33,43.31-55,48\r
	c-18.59,2.59-33.33-5.29-44-11c-6.09-3.26-39.39-21.29-50-61c-2.37-8.86-11.05-41.38,9-68C165.78,226.24,202.6,226.97,211.5,227.5z"\r
	/>\r
<path class="teto-pear-st" d="M168.5,235.5c14.12,22.78,26.52,41.29,36,55c7.92,11.45,14.37,20.38,19,19c4.49-1.34,4.52-11.56,6-28\r
	c1.07-11.86,3.03-28.63,7-49"/>\r
<path class="teto-pear-st" d="M195.5,353.5c4.04,1.75,11.88,4.5,22,4c11.08-0.54,19.17-4.7,23-7"/>\r
<path class="teto-pear-st" d="M160.5,239.5c-1.96,9.17-5.46,21.07-12,34c-5.5,10.88-11.65,19.52-17,26"/>\r
<path class="teto-pear-st" d="M264.5,248.5c2.93,7.99,7.79,18.39,16,29c4.39,5.67,8.88,10.29,13,14"/>\r
<path class="teto-pear-st" d="M149.5,275.5c-0.4-1.82,9.82-8.5,18-7c13.04,2.39,23.42,26.08,15,37c-4.12,5.34-12.95,7.92-20,5\r
	c-10-4.14-13.52-18.22-10-22c2.43-2.61,7.71,0.22,10-3c1.5-2.11,1.05-5.87-1-8c-1.17-1.22-3.1-2.14-5-2c-1.99,0.15-2.96,1.38-5,1\r
	C151.24,276.45,149.65,276.16,149.5,275.5z"/>\r
<path class="teto-pear-st" d="M285.5,283.5c0.78,2.51,1.75,6.82,1,12c-0.38,2.65-1.82,12.6-10,17c-8.21,4.42-19.36,1.17-25-6\r
	c-5.21-6.61-6.26-17.22-2-21c3.63-3.21,9.79-0.31,11-3c0.92-2.05-1.63-6.09-5-7c-2.42-0.65-5.39,0.25-7,2c-1.01,1.1-1.43,2.47-3,3\r
	c-0.13,0.04-1.53,0.51-2,0c-1.13-1.22,2.8-8.41,8-12c8.44-5.83,19.74-1.85,22-1"/>\r
</svg>\r
`,ql=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.thumbhandstand-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="thumbhandstand-st" d="M72.02,241.22c1.96-97.89,84.62-176.3,181.87-175.27c97.71,1.04,178.2,81.95,178.1,179.04\r
	c-0.11,100.89-87.2,182.45-187.05,178.57C149.44,419.84,70.06,339.05,72.02,241.22z"/>\r
<path class="thumbhandstand-st" d="M153.53,250.17c0.63-26.7,1.26-53.4,1.88-80.1c0.14-1.37,0.87-6.9,5.65-11.31c5.03-4.63,10.95-4.72,12.25-4.71\r
	c37.69,0.31,75.39,0.63,113.08,0.94c0.47,0,2.83,0.03,4.71,1.88c2.29,2.26,1.93,5.31,1.88,5.65c-0.63,53.71-1.26,107.42-1.88,161.14\r
	c-0.66,16.42-13.76,29.46-29.21,30.15c-16.76,0.75-31.8-13.22-32.04-31.1c0-5.34,0-10.68,0-16.02c-24.19,0-48.37,0-72.56,0\r
	c-16.26-0.78-28.65-14.29-28.27-29.21C129.36,264.36,139.55,252.6,153.53,250.17z"/>\r
<path class="thumbhandstand-st" d="M306.18,161.59c-0.02-0.19-0.28-3.08,1.88-4.71c1.11-0.84,2.31-0.93,2.83-0.94c12.88,0,25.76,0,38.63,0\r
	c0.36-0.05,2.18-0.28,3.77,0.94c2.22,1.7,1.9,4.58,1.88,4.71c-0.31,47.12-0.63,94.23-0.94,141.35c-0.01,0.52-0.11,1.72-0.94,2.83\r
	c-1.63,2.16-4.52,1.9-4.71,1.88c-11.94,0.31-23.87,0.63-35.81,0.94c-0.47,0-2.83-0.03-4.71-1.88c-2.29-2.26-1.93-5.31-1.88-5.65\r
	C306.18,254.57,306.18,208.08,306.18,161.59z"/>\r
</svg>\r
`,Jl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.tokai_teio-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="tokai_teio-st" d="M246.5,316.5c-1.49-0.03-3.61-0.23-6-1c-7.52-2.44-15.12-9.81-24-40c-3.57-12.13-7.59-28.71-10-49\r
	c-9.64,14.8-37.77,58.63-56,97c-2.91,6.13-7.4,15.97-7,29c0.59,19.29,11.55,33.79,18,41c-5.34-1.94-12.87-5.45-20-12\r
	c-4.18-3.84-15.75-15.63-21-48c-3.66-22.57-2.23-42.51,1-62c3.74-22.53,11.63-55.34,30-93"/>\r
<path class="tokai_teio-st" d="M226.5,266.5c0.65,8.34,3.36,28.13,18,47c10.17,13.11,21.88,20.34,29,24c-2.27-11.7-4.15-25.12-5-40\r
	c-0.7-12.36-0.58-23.76,0-34"/>\r
<path class="tokai_teio-st" d="M267.5,130.5c-1.11-2.43-3.98-3.12-10-5c-10.16-3.17-10.2-3.78-12-4c-8.57-1.07-19.09,11.26-27,28\r
	c-1.49,9.53-2.61,24.68,2,42c1.2,4.53,5.56,19.58,26,46c15.59,20.15,27.01,34.91,47,48c15.09,9.89,54.63,35.78,83,19\r
	c16.09-9.52,21.85-28.78,24-41c-1.67,3.55-15.63,32.25-40,34c-3.16,0.23-14.1,0.55-34-15c0,0-45.35-35.42-58-101\r
	c-2.44-12.66-6.68-34.6-2-44C266.97,136.55,268.76,133.26,267.5,130.5z"/>\r
<path class="tokai_teio-st" d="M151.5,321.5c10.67,46.33,21.33,92.67,32,139c-5.75-3.97-13.96-10.65-21-21c-4.45-6.54-6.61-11.85-10-20\r
	c-3.67-8.84-9.36-22.38-17-40"/>\r
<path class="tokai_teio-st" d="M107.5,269.5c-6.15,21.32-7.15,38.69-7,50c0.2,15.21,2.52,22.83,6,29c1.75,3.11,4.84,6.74,11,14\r
	c8.4,9.9,12.79,13.42,17,16c3.17,1.94,6,3.21,8,4"/>\r
<path class="tokai_teio-st" d="M91.5,274.5c-2.81,6.32-4.76,11.52-6,15c-2.83,7.95-3.84,12.38-8,17c-2.22,2.46-4.48,4.06-6,5\r
	c4.58,1.77,7.94,1.48,10,1c11.44-2.68,16.34-19.1,19-28c1.93-6.48,2.68-12.09,3-16"/>\r
<path class="tokai_teio-st" d="M96.5,298.5c-1.81,19.97-4.15,35.9-6,47c-1.45,8.66-2.8,15.55-3,26c-0.03,1.68-0.2,15.94,5,33\r
	c2.36,7.74,4.62,12.12,9,15c3.66,2.4,7.53,2.92,10,3c-1.43-1.21-3.4-3.16-5-6c-0.69-1.22-2.28-4.33-3-12c-0.24-2.57-0.63-7.01,0-13\r
	c1.52-14.38,8.12-29.75,10-34"/>\r
<path class="tokai_teio-st" d="M357.5,309.5c-3.94,25.05-8.86,51.45-15,79c-5.57,24.98-11.65,48.67-18,71c5.85-3.77,14.27-10.1,22-20\r
	c5.86-7.49,8.86-13.89,14-25c4.13-8.93,9.33-20.17,14-36c3.79-12.83,7.77-30.49,9-52"/>\r
<path class="tokai_teio-st" d="M357.5,309.5c4.11,4.64,12.64,12.87,26,17c13.87,4.29,25.44,1.82,34,0c7.18-1.53,14.54-3.18,22-9\r
	c2.34-1.82,8.26-6.56,12-15c1.05-2.37,2.84-6.52,3-12c0.31-10.63-5.76-18.4-8-21c0.87,2.99,1.74,7.56,1,13\r
	c-1.28,9.46-6.56,15.36-9,18c-2.86,3.1-5.32,5.77-9,6c-1.17,0.07-2.85-0.07-9-4c-7.24-4.62-10.83-6.95-13-11\r
	c-1.99-3.7-1.92-7.08-2-10c-0.17-6.43-1.19-15.75-5-28"/>\r
<path class="tokai_teio-st" d="M408.5,328.5c-0.33,4.67-0.67,9.33-1,14c-3.95,6.96-9.71,15.48-18,24c-5.2,5.34-10.35,9.61-15,13"/>\r
<path class="tokai_teio-st" d="M401.5,353.5c2.24,4.23,10.29,19.95,11,33c0.05,0.91,0.03,4.6,0,12c-0.04,7.93-0.11,9.73-1,12\r
	c-0.85,2.19-2.83,5.78-8,9c2.44,0.03,5.73-0.3,9-2c14.41-7.47,14.17-34.04,14-52c-0.09-9.99-1.08-23.77-5-40"/>\r
<path class="tokai_teio-st" d="M121.5,178.5c-16.33,23.67-32.67,47.33-49,71c3.67-1.33,7.33-2.67,11-4c1,5.33,2,10.67,3,16\r
	c3.33-4,6.67-8,10-12c-2.67,9-5.33,18-8,27c5.33-3.33,10.67-6.67,16-10c4,1.67,8,3.33,12,5c1.3-14.05,4.12-31.15,10-50\r
	c4.2-13.44,9.14-25.14,14-35"/>\r
<path class="tokai_teio-st" d="M122.5,180.5c1.26,2.34,3.3,3.31,7,5c3.61,1.65,5.52,2.49,8,2c1.84-0.37,3.19-1.31,4-2c6.33-6,12.67-12,19-18\r
	c0.58-0.63,1.37-1.62,2-3c1.07-2.34,1.04-4.41,1-6c-0.06-2.3-0.09-3.64-1-5c-1.42-2.12-3.88-2.65-4.66-2.78\r
	c-8.11-2.74-16.22-5.48-24.34-8.22c-1.12-0.25-2.92-0.48-5,0c-1.72,0.4-2.8,1.09-4.96,2.48c-2.05,1.31-3.17,2.05-4.04,3.52\r
	c-0.68,1.16-0.91,2.27-1,3c1,8.33,2,16.67,3,25C121.52,177.45,121.67,178.96,122.5,180.5z"/>\r
<path class="tokai_teio-st" d="M127.73,151.85l2.5,25.88c0.12,1.2,1.51,1.8,2.47,1.06l22.54-17.53c0.97-0.75,0.71-2.28-0.46-2.67\r
	c-8.35-2.78-16.7-5.57-25.04-8.35C128.69,149.9,127.62,150.74,127.73,151.85z"/>\r
<path class="tokai_teio-st" d="M129.5,142.5c-2.69-2.73-6.51-7.05-10-13c-3.55-6.06-7.74-15.38-10-42c-0.84-9.86-1.52-23.15-1-39\r
	c1.33-3,2.67-6,4-9c10.97,16.24,21.39,28.08,29,36c11.58,12.05,21.03,19.53,31,35c5.41,8.4,8.89,15.92,11,21\r
	c8.24-4.42,21.22-10.22,38-13c8.52-1.41,17.68-1.27,36-1c29.82,0.45,39.32,3.06,45,5c8.37,2.86,14.82,6.41,19,9\r
	c2.63-6.74,7.02-16.75,14-28c7.17-11.56,13.29-18.33,23-30c7.28-8.75,17.7-21.61,30-38c1.33,3.67,2.67,7.33,4,11\r
	c1.25,14.96,0.74,27.33,0,36c-1.8,21.1-3.5,41.03-17,59c-6.32,8.41-13.3,13.83-18,17c4.13,3,9.78,7.83,15,15\r
	c5.56,7.64,8.45,14.97,10,20"/>\r
<path class="tokai_teio-st" d="M337.5,146.5c18.52,17.3,32.76,32.47,43,44c5.74,6.47,12.31,14.14,16,26c4.31,13.85,2.92,27.71,1,28\r
	c-1.64,0.25-3.01-9.53-10-24c-4.28-8.85-8.8-15.61-12-20"/>\r
<path class="tokai_teio-st" d="M399.5,238.5c4.23,8.9,8.62,19.96,12,33c2.67,10.3,4.18,19.77,5,28"/>\r
<path class="tokai_teio-st" d="M146.5,80.5c-1.67-4.67-3.33-9.33-5-14c19,2,38,4,57,6c9.33,7.67,18.67,15.33,28,23c1.83,1.61,4.03,3.9,6,7\r
	c3.76,5.92,4.72,11.71,5,15"/>\r
<path class="tokai_teio-st" d="M237.5,114.5c1.37-0.21,3.46-0.54,6-1c7.63-1.39,8.65-2.04,12-2c1.46,0.02,3.64,0.35,8,1\r
	c2.5,0.38,4.56,0.74,6,1"/>\r
<path class="tokai_teio-st" d="M268.5,117.5c0.69-3.3,2.07-7.99,5-13c2.31-3.96,4.89-6.92,7-9c9-8,18-16,27-24c19.33-2.33,38.67-4.67,58-7"/>\r
<path class="tokai_teio-st" d="M221.5,91.5c3.33-3.67,6.67-7.33,10-11c3.16-1.47,7.62-3.54,13-6c7.41-3.39,8.72-3.94,11-4\r
	c1.15-0.03,3.44,0.03,13,4c3.8,1.57,6.89,3,9,4c3.67,3.33,7.33,6.67,11,10"/>\r
<path class="tokai_teio-st" d="M169.5,399.5c3.14,3,8.19,7.46,15,12c13.46,8.96,25.14,12.42,44,18c16,4.74,21.55,5.01,25,5\r
	c3.72-0.01,9-0.36,22-4c18.26-5.11,30.77-8.6,45-18c5.37-3.55,13.02-9.27,21-18"/>\r
<path class="tokai_teio-st" d="M282.5,298.5c4.94-4.43,12.9-10.5,24-15c13.65-5.54,25.79-6.18,33-6"/>\r
<path class="tokai_teio-st" d="M222.5,298.5c-5.62-4.37-13.95-9.86-25-14c-14.29-5.35-26.95-6.14-35-6"/>\r
<path class="tokai_teio-st" d="M292.5,328.5c-1.69,6.73-1.47,12.32-1,16c0.6,4.7,1.09,8.52,4,12c3.27,3.92,8.83,6.46,14,6\r
	c10.95-0.98,18.62-15.3,19-27c0.2-6.3-1.73-11.3-3-14"/>\r
<path class="tokai_teio-st" d="M182.5,324.5c-1.34,3.72-3.58,11.74-1,21c1.24,4.45,3.46,12.44,11,16c0.6,0.28,8.18,3.72,15,0\r
	c7.34-4,8.37-13.34,9-19c0.84-7.54-0.82-13.65-2-17"/>\r
<path class="tokai_teio-st" d="M229.5,396.5c3.58,2.22,13.02,7.42,26,7c11.24-0.36,19.38-4.75,23-7"/>\r
<path class="tokai_teio-st" d="M282.5,336.5c3.81-3.84,18.83-18.08,38-16c8.54,0.93,23.17,5.66,24,14c0.34,3.48-1.81,6.68-4,9"/>\r
<path class="tokai_teio-st" d="M225.5,337.5c-1.86-3.53-5.21-8.56-11-12c-18.1-10.74-47.62,1.44-49,13c-0.25,2.12,0.37,4.77,3,8"/>\r
<path class="tokai_teio-st" d="M331.5,405.5c-0.49,1.86-1.14,3.88-2,6c-2.06,5.07-4.67,9.05-7,12c2.61-1.11,5.73-2.7,9-5\r
	c2.4-1.69,4.38-3.42,6-5"/>\r
<path class="tokai_teio-st" d="M180.5,408.5c0.26,1.57,0.8,3.7,2,6c1.88,3.63,4.45,5.85,6,7c-2.03-0.26-5.38-0.94-9-3\r
	c-3.49-1.99-5.74-4.42-7-6"/>\r
</svg>\r
`,Yl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.triple-tap-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="triple-tap-st" d="M68.6,238.56v37.09h24.86c5.06,0,9.46-3.49,10.61-8.42c1.59-6.83,3.19-13.65,4.78-20.48\r
	c0.83-3.58-1.88-7-5.55-7H88.94v-9.8c0-3.99-4.77-6.05-7.68-3.32C77.04,230.61,72.82,234.58,68.6,238.56z"/>\r
<path class="triple-tap-st" d="M55.96,273.79c-3.02-0.3-5.31-2.84-5.31-5.87c0-3.04,0-6.07,0-9.11c0-3.8,0-7.6,0-11.39\r
	c0-3.06,2.16-5.7,5.17-6.3c2.27-0.45,4.53-0.91,6.8-1.36v34.7C60.4,274.23,58.18,274.01,55.96,273.79z"/>\r
<path class="triple-tap-st" d="M250.47,219.41c-17.26,0.02-32.1,14.92-31.11,32.31c0.92,16.14,15.17,28.75,31.11,28.72\r
	c16.66-0.04,31.44-13.88,31.11-31.11C281.26,232.52,266.69,219.4,250.47,219.41z"/>\r
<path class="triple-tap-st" d="M238.51,232.57c7.98,0,15.95,0,23.93,0"/>\r
<path class="triple-tap-st" d="M236.11,258.9c0.28-2.22,0.55-4.44,0.83-6.65c0.29-2.32,1.39-4.48,3.14-6.03c2.2-1.94,5.68-4.06,10.39-4.06\r
	c4.71,0,8.19,2.12,10.39,4.06c1.76,1.55,2.85,3.71,3.14,6.03c0.28,2.22,0.55,4.44,0.83,6.65"/>\r
<path class="triple-tap-st" d="M250.47,232.57c0,12.36,0,24.73,0,37.09"/>\r
<path class="triple-tap-st" d="M390.76,238.47l14.15-1.85c2.17-0.28,4.03-1.69,4.89-3.7l5.11-11.92c1.55-3.62,6.73-3.52,8.13,0.17\r
	c1.49,3.92,2.99,7.84,4.48,11.76c0.76,2.01,2.53,3.46,4.64,3.83c4.91,0.85,9.83,1.71,14.74,2.56c3.75,0.65,5.06,5.36,2.18,7.86\r
	c-2.54,2.2-5.07,4.4-7.61,6.6c-1.98,1.72-3.02,4.28-2.81,6.89c0.44,5.3,0.88,10.59,1.32,15.89c0.31,3.7-3.64,6.25-6.88,4.45\r
	c-3.27-1.82-6.54-3.64-9.82-5.45c-2.55-1.42-5.66-1.39-8.19,0.07c-3.58,2.07-7.17,4.15-10.75,6.22c-3.15,1.83-7.01-0.84-6.41-4.44\r
	c0.77-4.6,1.53-9.19,2.3-13.79c0.61-3.68-0.71-7.41-3.51-9.87c-2.8-2.47-5.59-4.93-8.39-7.4\r
	C385.44,243.77,386.91,238.97,390.76,238.47z"/>\r
</svg>\r
`,Xl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.twisted_face-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="twisted_face-st" d="M68.5,260.5c-5.66-99.88,76.06-188.53,177-190c105.48-1.54,191.28,92.71,182,196\r
	c-8.34,92.77-91.07,167.1-187,163C148.38,425.56,73.6,350.56,68.5,260.5z"/>\r
<path class="twisted_face-st" d="M98.5,156.5c4.89-6.06,16.49-18.75,36-26c23.9-8.88,44.75-4.04,52-2"/>\r
<path class="twisted_face-st" d="M310.5,128.5c7.28-1.9,26.58-5.89,49,2c20.22,7.12,32.17,20.1,37,26"/>\r
<path class="twisted_face-st" d="M115.5,308.5c-31.03-12.98-42.02-53.54-40-82c2.89-40.71,34.54-86.56,72-86c27.72,0.41,45.96,26.04,48,29\r
	c30.33,43.97,7.04,121.25-37,139C156.11,309.46,136.17,317.15,115.5,308.5z"/>\r
<path class="twisted_face-st" d="M106.5,222.5c1.5-14.27,13.4-30.17,28-29c14.53,1.16,24.02,18.6,23,33c-1.12,15.89-15.33,32.1-30,30\r
	C113.62,254.51,104.99,236.94,106.5,222.5z"/>\r
<path class="twisted_face-st" d="M379.97,309.2c31.02-12.98,42.02-53.54,40-82c-2.89-40.71-34.54-86.56-72-86c-27.72,0.41-45.96,26.04-48,29\r
	c-30.33,43.97-7.04,121.25,37,139C339.36,310.16,359.3,317.85,379.97,309.2z"/>\r
<path class="twisted_face-st" d="M388.97,223.2c-1.5-14.27-13.4-30.17-28-29c-14.53,1.16-24.02,18.6-23,33c1.12,15.89,15.33,32.1,30,30\r
	C381.85,255.21,390.48,237.63,388.97,223.2z"/>\r
<path class="twisted_face-st" d="M196.5,385.5c7.87-0.03,14.17-0.02,18,0c32.11,0.14,44.05,0.96,65,0c7.19-0.33,12.91-0.75,16-1\r
	c7.23-0.53,13.1,3.04,14,7c1.07,4.68-4.29,12.14-14,13c-15.07,1.41-31.83,2.24-50,2c-17.02-0.23-32.76-1.37-47-3\r
	c-6.71-0.56-10.89-6.3-10-11C189.14,389.14,192.37,386.29,196.5,385.5z"/>\r
</svg>\r
`,Zl=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.volleyball-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="volleyball-st" d="M67,247c4.39-75.32,60.18-152.87,145.5-170.5c68.91-14.24,137.62,14.65,178,64\r
	c42.01,51.34,41.22,110.01,40.5,125.5c-0.79,16.88-3.44,60.92-35,100c-55.32,68.48-148.73,60.41-165,59\r
	c-22.68-1.96-77.43-6.7-120-52C64.24,323.24,66.2,260.67,67,247z"/>\r
<path class="volleyball-st" d="M68.5,280.5c18.67,2.33,37.33,4.67,56,7c0,33,0,66,0,99"/>\r
<path class="volleyball-st" d="M218.5,423.5c-0.33-44-0.67-88-1-132c33.54,1,69.65,0.86,108-1c36.99-1.79,71.74-4.97,104-9"/>\r
<path class="volleyball-st" d="M83.5,181.5c14,1.33,28,2.67,42,4c-0.33-20.67-0.67-41.33-1-62"/>\r
<path class="volleyball-st" d="M218.5,75.5c-0.33,39-0.67,78-1,117c21.67,0,43.33,0,65,0"/>\r
<path class="volleyball-st" d="M331.5,192.5c29-1.33,58-2.67,87-4"/>\r
<path class="volleyball-st" d="M160.5,213.5c-2.22-17.6,11.92-34.44,30-35c16.32-0.51,30.95,12.4,32,29c1.13,17.76-13.72,32.89-31,33\r
	C176.09,240.6,162.42,228.72,160.5,213.5z"/>\r
<path class="volleyball-st" d="M275.5,214.5c-2.45-17.32,11.76-34.47,30-35c17.46-0.5,32.84,14.4,32,32c-0.8,16.68-15.85,29.39-32,29\r
	C290.81,240.15,277.55,229.02,275.5,214.5z"/>\r
</svg>\r
`,Ql=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.warma-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="warma-st" d="M116.5,161.5c0.81,4.16,2.44,10.3,6,17c6.67,12.57,15.87,19.17,24,25c4.61,3.3,10.77,7.13,19,9\r
	c1.84,0.42,9.01,2.05,10,0c0.74-1.53-2.28-4.47-4-6c2.59,0.17,6,0.27,10,0c3.67-0.24,8.78-0.58,9-2c0.14-0.89-1.72-1.84-2-2\r
	c-3.56-1.97-9.35-16.78-19-58c5.14,5.43,12.04,11.55,21,17c22.75,13.83,45.42,15.19,57,15c6.57,13.46,10.54,25.6,13,35\r
	c2.37,9.05,5.37,23.28,6,41c0.49,13.81-0.6,25.71-2,35c2.67-1.67,5.33-3.33,8-5c1.29,0.73,3.67,1.78,6,1c2.39-0.8,3.57-3.14,4-4\r
	c15.34-30.51,13-63,13-63c0-16.69-5.16-42.77-19-73"/>\r
<path class="warma-st" d="M118.5,169.5c0.73,10.65,0.76,23.54-1,38c-1.38,11.35-3.59,21.42-6,30c-0.67,6.33-1.33,12.67-2,19\r
	c-1.97,1.05-5.43,2.58-10,3c-4.37,0.4-7.9-0.37-10-1c0.33,3,0.67,6,1,9c-2.32-0.85-5.64-2.34-9-5c-5.68-4.49-9.16-10.45-13-22\r
	c-5.59-16.79-6.94-30.39-7-31c-1.18-12.62-3.04-34.96,6-61c0,0,7.73-22.24,23-35c3.32-2.77,7-4,7-4c3.21-1.07,6.08-1.13,8-1"/>\r
<path class="warma-st" d="M114.5,110.5c-0.81,0.03-9.52,0.22-15-7c-4.11-5.42-4.54-12.59-2-18c2.76-5.87,8.27-8.09,13-10\r
	c8.02-3.23,15.38-2.53,21-2c3.22,0.31,6.23,0.61,10,2c7.2,2.65,13.82,8.02,13,10c-0.4,0.96-2.21,0.36-6,1c-5.52,0.93-9.29,3.49-13,6\r
	c-4.47,3.03-7.42,5.03-9,9c-0.78,1.96-0.97,3.76-1,5"/>\r
<path class="warma-st" d="M145.5,77.5c1.82-1.14,4.53-2.67,8-4c7.25-2.78,13.53-3.06,21-3c14.14,0.12,21.21,0.18,30,2\r
	c18.64,3.86,31.29,11.86,41,18c13.57,8.58,21.8,16.76,27,22c7.71,7.77,10.81,12.48,13,17c3.43,7.08,4.58,13.62,5,18"/>\r
<path class="warma-st" d="M289.5,141.5c0.43-0.05,1.14-0.1,2,0c3.07,0.35,5.17,2.25,6,3c10.04,9.09,16,22,16,22s7.02,15.21,9,34\r
	c0.3,2.82,0.53,6.64-1,11c-1.14,3.25-2.83,5.6-4,7c3.33,8.33,6.67,16.67,10,25"/>\r
<path class="warma-st" d="M319.5,216.5c7.2,0.22,13.53,4.59,16,11c3.07,7.97-1.05,15.94-6,20c-6.24,5.12-16.42,6.17-20,2\r
	c-1.71-1.99-1.86-5.1-2-8c-0.16-3.4,0.45-6.19,1-8"/>\r
<path class="warma-st" d="M294.5,243.5c4.33-3.33,8.67-6.67,13-10c5.67,1,11.33,2,17,3"/>\r
<path class="warma-st" d="M329.5,247.5c-0.54,1.45-1.24,3.93-1,7c0.14,1.87,0.44,5.64,3,8c3.9,3.59,12.28,3.21,16-2c2-2.8,2.52-6.79,1-10\r
	c-2.32-4.9-9.18-7.54-16-5"/>\r
<path class="warma-st" d="M332.5,245.5c5,5.33,10,10.67,15,16"/>\r
<path class="warma-st" d="M348.5,258.5c7.33-1.16,12.7-0.61,16,0c1.66,0.31,3.23,0.71,4,2c1.88,3.14-2.7,8.64-3,9c-2-0.67-4-1.33-6-2"/>\r
<path class="warma-st" d="M363.5,268.5c-1.19,2.49-3.64,6.65-8,9c-1.87,1-3.06,1.12-4,1c-3.01-0.39-4.68-3.4-5-4c-0.21-0.4-0.72-1.46-1-5\r
	c-0.13-1.71-0.22-4.11,0-7"/>\r
<path class="warma-st" d="M105.5,258.5c-0.98,11.94-0.79,28.94,5,48c2.31,7.62,5.13,14.3,8,20c-0.6,0.55-1.96,1.62-4,2\r
	c-1.24,0.23-2.3,0.13-3,0c-1.06,0.91-2.72,2.13-5,3c-3.39,1.3-6.4,1.18-8,1c-0.33,1.67-0.67,3.33-1,5c-2.09-1.35-5.11-3.59-8-7\r
	c-4.25-5.02-6.18-10.17-10-25c-2.92-11.34-4.38-17.01-5-21c-1.2-7.73-2.18-18.7-1-32"/>\r
<path class="warma-st" d="M105.5,271.5c1.43,3.57,3.85,8.33,8,13c8.68,9.76,19.4,12.93,24,14c1.33,4,2.67,8,4,12c3-4,6-8,9-12\r
	c2.28-0.08,4.99-0.34,8-1c3.62-0.79,6.64-1.92,9-3"/>\r
<path class="warma-st" d="M132.5,297.5c-0.75,0.3-5.09,2.13-7,7c-0.15,0.38-2.18,5.82,1,11c2.47,4.02,7.1,6.32,12,6\r
	c1.74-0.14,4.16-0.41,7-1c6.62-1.37,13.87-2.87,15-7c0.59-2.17-0.72-4.3-3-8c-2.03-3.29-4.33-5.57-6-7"/>\r
<path class="warma-st" d="M141.5,310.5c-1,3.67-2,7.33-3,11"/>\r
<path class="warma-st" d="M144.5,320.5c1.47,1.62,3.8,4.63,5,9c0.82,2.98,1.74,6.34,0,9c-1.89,2.89-6.32,3.99-11,3\r
	c1.56,1.88,3.43,4.54,5,8c1.96,4.32,2.7,8.25,3,11c-1.23,0.72-4.58,2.45-9,2c-2.75-0.28-4.82-1.3-6-2c0-1.67,0-3.33,0-5\r
	c-1.67,1.33-3.33,2.67-5,4c-0.67-1.67-1.33-3.33-2-5c2.31-2.57,4.96-5.27,8-8c2.05-1.84,4.06-3.5,6-5c-1.41-0.37-3.72-1.17-6-3\r
	c-1.11-0.89-3.42-2.75-4-5c-0.95-3.68,2.64-8.75,9-12"/>\r
<path class="warma-st" d="M138.5,321.5c0,6.67,0,13.33,0,20"/>\r
<path class="warma-st" d="M110.5,243.5c5.67,8.67,11.33,17.33,17,26c-1,4.67-2,9.33-3,14c18.66,9.13,33.83,10.83,43,11\r
	c10.12,0.19,21.11-1.35,33-3c8.71-1.21,13.06-1.82,17-3c3.12-0.94,17.63-5.53,31-19c9.4-9.47,14.39-19.44,17-26"/>\r
<path class="warma-st" d="M188.5,202.5c1.62-2.41,14-20.16,35-21c8.22-0.33,14.88,2.05,19,4"/>\r
<path class="warma-st" d="M115.5,249.5c0.21-3.34,1.21-12.23,8-20c11.57-13.25,29.4-11.21,31-11"/>\r
<path class="warma-st" d="M125.5,227.5c-3.24,15.5,2.64,29.18,12,33c6.6,2.69,14.29,0.23,15,0c0.84-0.28,8.99-3.09,12-9\r
	c4.25-8.36-1.66-23.17-17-33"/>\r
<path class="warma-st" d="M199.5,191.5c-0.8,3.92-1.6,10.37,0,18c0.96,4.6,1.99,9.47,6,14c6.39,7.21,15.36,7.9,17,8\r
	c2.08,0.12,13.32,0.52,20-8c5.17-6.59,4.37-14.39,4-18c-1.31-12.85-10.36-20.83-13-23"/>\r
<path class="warma-st" d="M206.5,246.5c1.33,0.33,2.67,0.67,4,1c0.67-1.67,1.33-3.33,2-5c2.76,1.22,7.12,3.57,11,8\r
	c2.7,3.07,4.96,5.65,5,9c0.08,6.65-8.65,12.44-16,14c-2.18,0.46-13.22,2.46-19-5c-3.22-4.16-3.14-9.09-3-11\r
	C195.83,253.83,201.17,250.17,206.5,246.5z"/>\r
<path class="warma-st" d="M180.5,164.5c2.5-3.17,7.01-8.04,14-12c7.69-4.35,14.85-5.6,19-6"/>\r
<path class="warma-st" d="M95.5,200.5c4.04-2.35,9.41-4.98,16-7c5.67-1.74,10.79-2.59,15-3"/>\r
<path class="warma-st" d="M128.5,215.5c1.77-1.02,4.48-2.31,8-3c4.26-0.83,7.82-0.42,10,0"/>\r
<path class="warma-st" d="M190.5,188.5c2.24-1.93,4.89-3.99,8-6c2.46-1.59,4.82-2.91,7-4"/>\r
<path class="warma-st" d="M283.5,158.5c2.42-1.03,8.02-2.98,14-1c11.58,3.84,13.73,18.9,14,21c2.31,18.27-15,31.27-16,32"/>\r
<path class="warma-st" d="M286.5,168.5c2.18-0.13,6.8-0.05,10,3c4.95,4.72,5,15.14-2,24"/>\r
<path class="warma-st" d="M295.5,215.5c4.33,0.67,8.67,1.33,13,2"/>\r
<path class="warma-st" d="M304.5,202.5c2,7.33,4,14.67,6,22"/>\r
<path class="warma-st" d="M210.5,309.5c-3.38-0.52-6.08-1.32-8-2c-3.21-1.13-4.29-1.94-5-3c0,0-1.12-1.67-1-4\r
	c0.31-5.97,30.11-12.89,35-14c6.33-4,12.67-8,19-12c0.45-0.44,1.16-1.13,2-2c1.49-1.54,1.55-1.72,2-2c1.42-0.88,3.5-0.79,5,0\r
	c1.78,0.94,2.51,2.77,3,4c0.77,1.94,0.63,3.33,2,5c0.38,0.47,0.76,0.8,1,1"/>\r
<path class="warma-st" d="M400.5,405.5c12.78-2.69,21.71-6.71,27-12l0,0c2.7-3.05,6.95-8.32,11-16c3.22-1.47,7.74-4.15,11-9\r
	c8.51-12.68,2.13-30.87-5-41c-5.77-8.2-12.8-12.19-23-18c-5.48-3.12-8.71-4.4-29-12c-29.87-11.19-37.32-13.83-49-14\r
	c-5.9-0.09-10.77,0.49-14,1c-1.25-1.22-9.63-9.11-22-8c-9.34,0.84-15.28,6.3-17,8"/>\r
<path class="warma-st" d="M200.5,307.5c-0.83,0.95-1.82,1.97-3,3c-1.41,1.24-2.78,2.22-4,3c-2.52-1.06-4.58-1.14-6-1\r
	c-6.7,0.65-12.67,7.44-15,17c-3.11,8.56-7.33,20.54-12,35c-5.55,17.21-8.41,25.83-8,28c2.43,13,44.68,23.7,215,15"/>\r
<path class="warma-st" d="M282.5,284.5c5.33,0,10.67,0,16,0c0.24-0.07,2.82-0.76,5,1c2.34,1.89,2.02,4.83,2,5c0.1,2.43,0.17,5.87,0,10\r
	c-0.17,4.19-0.49,12.11-2,17c-1.03,3.36-3.72,8.82-19,18c-15.73,9.44-28.06,16.84-46,17c-7.61,0.07-21.44,0.19-31-9\r
	c-4.49-4.32-7.57-10.24-9-13c-3.47-6.68-5.13-12.75-6-17"/>\r
<path class="warma-st" d="M216.5,314.5c0.24-2.52,4.24-3.64,13-7c15.03-5.77,17.33-7.89,18-7c1.91,2.52-13.89,23.07-25,20\r
	C219.41,319.65,216.27,316.86,216.5,314.5z"/>\r
<path class="warma-st" d="M356.5,317.5c1.81-1.39,4.49-3.08,8-4c17.16-4.5,34.71,14.45,38,18c11.12,12,17.09,27.47,18,30\r
	c0.46,1.27,2.05,5.97,5,12c1.28,2.63,1.52,2.85,2,4c1.33,3.2,2.26,8.24,0,16"/>\r
<path class="warma-st" d="M360.5,324.5c4.25-0.22,11.21,0.09,18,4c3.65,2.1,5.94,4.5,9,8c10.01,11.48,15.02,17.23,20,27\r
	c3.03,5.95,6.75,14.73,9,26c-13.36,13.59-23.85,23.16-28,26c-1.89,1.29-3.83,2.12-6,2c-2.24-0.12-3.98-1.21-5-2\r
	c-5.67-4.05-11.8-8.99-18-15c-11.92-11.55-20.25-23.3-26-33c-0.68-0.8-1.63-2.16-2-4c-0.69-3.39,1-6.34,2-8c6-9.91,14-18,14-18\r
	C352.95,331.99,357.45,327.52,360.5,324.5z"/>\r
<path class="warma-st" d="M342.5,380.5c1.49-4.39,3.93-10.06,8-16c5.78-8.44,12.4-13.84,17-17"/>\r
<path class="warma-st" d="M353.5,395.5c2.84-4.46,6.15-9.17,10-14c6.79-8.52,13.7-15.45,20-21"/>\r
<path class="warma-st" d="M397.5,380.5c-3.21,2.54-6.59,5.52-10,9c-7.18,7.33-12.33,14.72-16,21"/>\r
<path class="warma-st" d="M360.5,324.5c-4.77-4.75-9.89-10.39-15-17c-4.32-5.59-7.95-10.99-11-16c-4.33,2.33-8.67,4.67-13,7\r
	c-0.39,0.2-1.4,0.78-2,2c-0.94,1.9-0.12,3.74,0,4c3.05,8.6,6.07,16.55,9,24c1.53,3.89,3.53,8.86,8,14c1.54,1.77,2.97,3.11,4,4"/>\r
<path class="warma-st" d="M201.5,291.5c0.67,1,1.33,2,2,3"/>\r
<path class="warma-st" d="M248.5,270.5c0.67,1.33,1.33,2.67,2,4"/>\r
</svg>\r
`,$l=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.xjgmd-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="xjgmd-st" d="M76.5,243.5c-2.42-4.64-5.53-11.42-8-20c-2.62-9.1-3.93-13.64-3-19c2.36-13.62,16.57-21.18,20-23\r
	c10.92-5.81,20.98-5.51,33-5c13.61,0.58,29.92,1.27,47,12c18.01,11.31,26.55,27.3,30,35c0.22-3.26,0.17-7.78-1-13\r
	c-1.03-4.6-2.61-8.31-4-11c2.33,0,4.67,0,7,0c-8.18-6.82-21.51-16.29-40-23c-20.8-7.55-37.93-7.9-46-8c-12.85-0.16-20.04,1.52-22,2\r
	c-11.85,2.91-20.48,8.19-25,11c-7.4,4.61-8.86,6.89-21,15c-4.58,3.06-8.43,5.44-11,7c5.33,0.67,10.67,1.33,16,2\r
	c2.83,5.88,6.7,12.77,12,20C65.99,233,71.6,238.94,76.5,243.5z"/>\r
<path class="xjgmd-st" d="M116.5,260.5c-7.43-6.19-9.98-13.75-12-20c-2.47-7.66-10.31-31.9,4-47c8.56-9.03,20.33-9.82,23-10\r
	c0.81-0.05,20.05-1.02,32,14c8.93,11.22,7.85,23.9,7,34c-0.75,8.91-1.83,21.6-12,30c-6.91,5.71-14.85,6.83-19,7\r
	C127.57,268.99,119.24,262.79,116.5,260.5z"/>\r
<path class="xjgmd-st" d="M101.5,226.5c1.06,0.05,18.29,0.77,25-7c2.12-2.46,3-5,3-5c1.03-2.99,0.65-5.27,0-11c-0.26-2.28-0.62-5.71-1-10\r
	"/>\r
<path class="xjgmd-st" d="M102.5,234.5c6.99-0.26,12.79-0.16,17,0c7.54,0.28,9.34,0.73,11,2c2.73,2.08,3.42,5.12,5,14\r
	c1.2,6.72,2.19,12.77,3,18"/>\r
<path class="xjgmd-st" d="M146.5,267.5c-0.27-4.51-0.63-11.04-1-19c-0.43-9.32-0.5-12.87,2-16c2.14-2.67,5.05-3.66,9-5\r
	c5.79-1.96,10.85-2.13,14-2"/>\r
<path class="xjgmd-st" d="M141.5,193.5c-0.13,1.73-0.22,4.14,0,7c0.29,3.84,0.54,7.05,2,10c2.95,5.96,9.49,8.16,12,9\r
	c7.18,2.41,13.48,0.8,16,0"/>\r
<path class="xjgmd-st" d="M100.5,214.5c12.74-17.17,32.47-25.02,49-20c10.58,3.21,17.03,10.85,20,15"/>\r
<path class="xjgmd-st" d="M264.5,292.5c-0.33,2.67-0.67,5.33-1,8"/>\r
<path class="xjgmd-st" d="M218.5,357.5c0.64-1.55,4.76-1.17,7-1c5.32,0.41,50.35,3.84,82-12c9.15-4.58,14.57-9.46,16-8\r
	c2.11,2.16-6.3,16.31-18,26c-15.87,13.14-40.5,20.31-62,13C230.19,370.97,217.22,360.61,218.5,357.5z"/>\r
<path class="xjgmd-st" d="M311.5,199.5c-2.33-0.67-4.67-1.33-7-2c4-2,8-4,12-6c9.96-4.98,9.96-4.98,10-5c18.06-8.98,60-13,60-13\r
	c13.68-1.31,30.93-2.55,51-3c2.67,2.29,5.67,4.65,9,7c4.57,3.22,8.96,5.85,13,8c-4.33,0.67-8.67,1.33-13,2\r
	c-1.61,5.09-4.09,11.34-8,18c-4.96,8.46-10.53,14.7-15,19c4.15-5.91,13.26-20.74,10-38c-0.47-2.51-1.17-4.84-2-7\r
	c-3.12-0.14-54.62-2.21-86,9c-7.09,2.53-19.12,6.83-30,18c-3.73,3.83-6.34,7.45-8,10c-0.17-2.38-0.14-5.93,1-10\r
	C309.32,203.56,310.48,201.22,311.5,199.5z"/>\r
<path class="xjgmd-st" d="M334.5,193.5c-1.12,8.71-0.01,15.7,1,20c1.17,4.98,3.41,13.96,11,22c2.95,3.13,7.55,8,15,10\r
	c11.38,3.06,23.09-2.29,30-9c9.15-8.89,10.16-20.45,11-30c1.03-11.8-1.23-21.37-3-27"/>\r
<path class="xjgmd-st" d="M334.5,205.5c4.9,0.51,8.73-0.32,11-1c3.45-1.04,8.41-2.53,11-7c1.43-2.48,1.78-5.24,2-7\r
	c0.31-2.45,0.18-4.52,0-6"/>\r
<path class="xjgmd-st" d="M336.5,214.5c1.94-1.02,5.02-2.36,9-3c4.04-0.65,8.29-1.36,12,1c3.83,2.43,5.04,6.65,6,10\r
	c0.47,1.64,0.83,3.51,1,11c0.07,3.18,0.11,7.25,0,12"/>\r
<path class="xjgmd-st" d="M372.5,245.5c0.04-4.78,0.02-8.58,0-11c-0.06-7.99-0.23-10.48,1-14c0.11-0.3,1.47-4.14,4-7\r
	c7.86-8.9,24.15-5.2,25-5"/>\r
<path class="xjgmd-st" d="M370.5,182.5c0.11,1.76,0.59,5.36,3,9c0.67,1.02,2.21,3.28,5,5c4.01,2.47,8.08,2.26,13,2\r
	c2.62-0.14,6.46-0.58,11-2"/>\r
<path class="xjgmd-st" d="M106.5,269.5c6.97,2.78,19.32,6.66,35,6c19.19-0.81,33.27-7.98,40-12"/>\r
<path class="xjgmd-st" d="M341.5,252.5c6.67,1.64,18.57,3.65,33,1c12.87-2.36,22.42-7.45,28-11"/>\r
<path class="xjgmd-st" d="M99.5,158.5c10.37-2.52,33.11-6.39,57,4c6.78,2.95,12.43,6.51,17,10c-9.18-4.68-22.77-10.28-40-13\r
	C120.07,157.38,108.39,157.63,99.5,158.5z"/>\r
<path class="xjgmd-st" d="M314.5,168.5c-0.58-0.85,10.71-12.26,27-19c16.71-6.92,32.61-6.41,43-5c-9.35,0.6-22.85,2.39-38,8\r
	C327.22,159.64,315.07,169.35,314.5,168.5z"/>\r
<path class="xjgmd-st" d="M255.5,365.5c-4.67,0.92-10.04,1.68-16,2c-4.33,0.23-8.35,0.19-12,0"/>\r
<path class="xjgmd-st" d="M308.5,344.5c2.7-1.17,5.61-1.35,7,0c1.89,1.83,1.46,6.95-3,11"/>\r
<path class="xjgmd-st" d="M228.5,357.5c-0.8,0.2-2.25,0.71-3,2c-1.22,2.1-0.22,5.64,3,8"/>\r
</svg>\r
`,eu=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.zgrnf-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="zgrnf-st" d="M154.51,246.22c0-0.92,0.77-1.66,1.69-1.61c2.62,0.14,6.16,0.2,10.31-0.11c3.96-0.29,6.86-0.77,8-1\r
	c6.8-1.37,23.73-4.78,40.83-3.16c9.86,0.94,18.17,3.16,18.17,3.16c5.75,1.54,6.56,2.3,11,3c6.67,1.06,12.19,0.51,17,0\r
	c5.18-0.55,7.14-1.16,12-2c2.54-0.44,12.43-2.14,22-2c3.67,0.05,12.45,1.7,30,5c3.84,0.72,8.51,1.62,15,2\r
	c3.91,0.23,7.3,0.2,9.96,0.1c1.08-0.04,1.94,0.88,1.83,1.96c-0.17,1.68-0.34,3.37-0.51,5.05c-0.17,1.71-1.45,3.1-3.15,3.41\r
	c-2.71,0.49-5.43,0.99-8.14,1.48c-2.05-0.17-3.76-0.11-5,0c-2.82,0.24-3.63,0.74-4,1c-1.3,0.93-1.78,2.33-2,3\r
	c-1.42,4.35-2.15,6.51-4,14c-0.28,1.15-1.79,6.94-5,11c-7.04,8.89-21.31,8.28-28,8c-6.79-0.29-14.36-0.61-20-6\r
	c-3.13-2.99-5.04-6.94-7-11c-3.14-6.49-5-12-5-12c-1.45-4.3-2.18-7.48-5-9c-1.86-1-4-1-4-1c-0.18,0-2.34,0.02-4,1\r
	c-2.67,1.57-2.85,4.9-4,9c-1.03,3.69-2.35,6.12-5,11c-2.77,5.11-4.92,9.07-9,12c-4.52,3.25-9.26,3.7-13,4\r
	c-8.88,0.72-28.22-0.62-34-12c-2.68-5.27-5.69-19.09-6-22c-0.04-0.33-0.15-1.66-1-3c-0.7-1.1-1.58-1.73-2-2c-1.22-0.78-2.4-0.95-3-1\r
	h-5c-2.89-0.53-5.78-1.05-8.67-1.58c-1.35-0.25-2.33-1.42-2.33-2.79V246.22z"/>\r
<path class="zgrnf-st" d="M237.51,282.5c-2.17,3.98-3.91,7.07-5,9c-2.33,4.12-3.44,5.98-4,9c-0.34,1.82-0.7,3.81,0,6\r
	c1.55,4.85,7.02,6.69,8,7"/>\r
<path class="zgrnf-st" d="M267.51,285.5c2.77,4.34,4.7,8.15,6,11c1.7,3.73,2.08,5.25,2,7c-0.04,0.8-0.33,5.19-4,8\r
	c-1.94,1.49-3.98,1.88-5,2"/>\r
<path class="zgrnf-st" d="M224.51,342.5c0.42,0.28,1.1,0.7,2,1c3.19,1.07,5.46-0.45,12-2c2.91-0.69,4.37-1.04,6-1c2.59,0.06,3.3,0.73,7,1\r
	c0.79,0.06,2.68,0.17,5,0c3.03-0.22,3.99-0.72,6-1c5.57-0.78,7.52,1.72,16,2c1.32,0.04,2.39,0.02,3,0"/>\r
<path class="zgrnf-st" d="M242.51,355.5c7.33,0,14.67,0,22,0"/>\r
<path class="zgrnf-st" d="M242.51,308.5c0.34-0.23,0.41-0.78,1-1c0.39-0.15,0.77-0.07,1,0c-1.01-3.44-3.28-5.32-5-5\r
	c-0.96,0.18-1.84,1.06-2,2C237.11,306.88,241.43,309.23,242.51,308.5z"/>\r
<path class="zgrnf-st" d="M257.51,306.5c0.1,0.17,0.44,0,1,0c2.43,0,3.4,3.15,5,3c1.08-0.1,2.09-1.65,2-3c-0.12-1.83-2.26-3.02-4-3\r
	C259.01,303.53,257.25,306.05,257.51,306.5z"/>\r
<path class="zgrnf-st" d="M157.51,255.5c-1.03,7.15-1.88,17.14-1,29c0.88,11.9,3.12,20.33,6,31c5.61,20.74,8.66,32.02,18,44\r
	c3.96,5.08,8.64,9.05,18,17c20.9,17.74,31.25,20.25,35,21c3.62,0.72,7.08,0.81,14,1c10.31,0.28,19.42,0.52,29-2\r
	c10.77-2.84,17.65-8,27-15c5.53-4.15,14.86-11.13,23-22c12.09-16.14,15-32.06,19-54c2.07-11.36,4.1-27.04,4-46"/>\r
<path class="zgrnf-st" d="M133.51,247.5c-0.63,1.86-1.44,4.61-2,8c-0.23,1.42-1.18,7.55,0,17c0.86,6.88,1.24,11.25,2,20\r
	c0.08,0.87,0.23,2.93-1,4c-0.84,0.73-2.22,0.9-3,1c-0.72,0.09-1.36,0.17-2,0c-2.15-0.57-2.91-3.63-3-4c-2.99-17.88-3.9-25.65-4-29\r
	c-0.02-0.49-0.06-2.82-0.26-6.01c-0.26-4.28-0.56-6-0.74-13.99c-0.15-6.6-0.11-12.36,0-17c0.02-0.61,0.15-1.85,1-3\r
	c0.06-0.08,0.44-0.56,1-1c1.92-1.5,5.93-1.07,9,0c1.07,0.37,1.61,0.57,2,1c1.05,1.16,0.67,2.77,0,7c-0.03,0.17-0.35,2.78-1,8\r
	c-0.47,3.77-0.53,4.67,0,5c0.84,0.52,2.11-1.08,6-3c0.84-0.41,2.23-0.94,5-2c4.72-1.8,5.79-1.99,7-2c1.19-0.01,2.65,0.01,4,1\r
	c1.38,1.02,1.86,2.49,2,3c0.37,1.35,0.14,2.48,0,3"/>\r
<path class="zgrnf-st" d="M120.51,260.5c-0.81,0.49-2.1,1.42-3,3c-1.15,2.02-1.05,4.08-1,5c1.36,23.59,5,38,5,38s2.86,11.34,10,23\r
	c0.71,1.17,1.54,2.34,3,3c3.12,1.41,8.46,0.13,9,0c0.48-0.12,1.23-0.32,2,0c1.18,0.49,1.59,1.86,2,3c0.81,2.25,2.01,4.64,3,6\r
	c0.29,0.39,2.44,3.26,6,4c0.97,0.2,2.07,0.25,7-1c2.83-0.72,5.2-1.43,7-2"/>\r
<path class="zgrnf-st" d="M138.51,241.5c-0.53,0.15-2.66,0.82-4,3c-1.05,1.7-1.04,3.37-1,4c-0.23,4.36-0.38,10.57,0,18\r
	c0.66,12.86,2.56,22.1,5,34c2.19,10.68,3.95,19.06,8,30c1.87,5.04,3.67,9.15,5,12"/>\r
<path class="zgrnf-st" d="M143.51,239.5c-0.83,0.83-2.01,2.15-3,4c-2.19,4.09-2.08,8.13-2,10c2.18,48.83,15,80,15,80\r
	c1.32,3.22,2.44,5.75,3,7c0.05,0.17,0.96,3.17,4,4c2.66,0.73,4.76-0.82,5-1"/>\r
<path class="zgrnf-st" d="M129.51,223.5c1.04-3.76,2.35-7.79,4-12c3.06-7.83,6.6-14.5,10-20"/>\r
<path class="zgrnf-st" d="M123.51,222.5c1.24-4.3,2.86-9.02,5-14c3.44-7.99,7.35-14.65,11-20"/>\r
<path class="zgrnf-st" d="M161.51,155.5c-5.04,5.71-9.15,10.06-12,13c-4.31,4.45-7.31,10.02-11,15c-0.42,0.57-1.33,1.79-1,3\r
	c0.42,1.54,1.96,2.07,5,4c4.32,2.75,4.36,3.9,6,4c3.17,0.18,5.86-3.98,7-6"/>\r
<path class="zgrnf-st" d="M156.51,244.5c-0.49-3-0.86-6.35-1-10c-0.08-2.11-0.07-4.11,0-6c-0.67,0-1.33,0-2,0c0.67-1.67,1.33-3.33,2-5\r
	c-0.67,0-1.33,0-2,0c0.67-2,1.33-4,2-6c-0.67,0-1.33,0-2,0c0.67-2.33,1.33-4.67,2-7c-0.67,0-1.33,0-2,0c0.67-2,1.33-4,2-6\r
	c-0.67,0-1.33,0-2,0c0.67-2,1.33-4,2-6c-0.67,0-1.33,0-2,0c0.67-2.33,1.33-4.67,2-7c-0.67,0-1.33,0-2,0c2-2.67,4-5.33,6-8\r
	c-2,1-4,2-6,3c2.67-5,5.33-10,8-15c-2.33,1.67-4.67,3.33-7,5c3-4.33,6-8.67,9-13c-3,2-6,4-9,6c2.33-3.33,4.67-6.67,7-10\r
	c-2.44,1.6-3.77,2.27-4,2c-0.46-0.54,3.54-4.88,12-13c-4.33,2-8.67,4-13,6c1.15-1.8,2.77-3.92,5-6c5.7-5.32,12.15-6.42,12-7\r
	c-0.1-0.37-2.81-0.22-14,2c2.47-1.67,5.13-3.35,8-5c4.91-2.83,9.63-5.13,14-7c-6-1-12-2-18-3c3.97-1.57,9.4-3.26,16-4\r
	c8.3-0.93,15.26-0.01,20,1c-5.19-2.1-10.87-4.14-17-6c-3.79-1.15-7.47-2.14-11-3c4.43-0.57,9.47-0.98,15-1\r
	c5.94-0.02,11.31,0.39,16,1c-1.66-1.66-4.62-4.21-9-6c-5.06-2.07-9.55-2.14-12-2c5.67-1.02,13.21-1.77,22-1\r
	c6.22,0.54,11.61,1.72,16,3c-1.19-1.85-2.8-3.96-5-6c-5.87-5.46-12.47-7.31-16-8c4.45-0.29,10.3-0.24,17,1c7.6,1.41,13.7,3.87,18,6\r
	c-0.53-2.23-1.43-5.01-3-8c-2.54-4.81-5.73-8.05-8-10c2.25,0.2,5.97,0.83,10,3c4.8,2.58,7.64,6.06,9,8c-0.74-2.34-1.45-5.02-2-8\r
	c-0.54-2.91-0.84-5.6-1-8c3.64,1.76,8.7,4.58,14,9c5.85,4.87,9.36,9.48,10,9c0.75-0.56-3.39-7.36-5-10c-2.37-3.89-4.51-6.96-6-9\r
	c2.93,1.54,6.46,3.77,10,7c6.66,6.06,10.18,12.73,12,17c-1.67-8-3.33-16-5-24c1.99,2.45,4,5.12,6,8c4.12,5.95,7.4,11.71,10,17\r
	c-0.67-5.33-1.34-10.67-2.01-16c2.01,3.5,4.06,7.51,6,12c2.17,5.03,3.79,9.75,5.01,14c0.08-3.6,0.36-7.63,1-12\r
	c0.53-3.65,1.23-6.99,2-10c2,7.67,3.99,15.33,5.99,23c-0.17-2.34-0.15-5.89,1-10c1.3-4.68,3.5-8.04,5-10\r
	c-0.28,2.8-0.38,6.19,0.01,10c0.65,6.32,2.42,11.42,4,15c0.05-2.65,0.32-5.69,1-9c0.29-1.42,0.63-2.76,1-4c1.67,4.67,3.33,9.33,5,14\r
	c0.33-6,0.67-12,1-18c1.86,3.91,4.07,9.7,5,17c0.7,5.54,0.46,10.34,0,14c1.08-2.4,2.91-5.72,6-9c2.11-2.24,4.24-3.86,6-5\r
	c-1,2.33-2,4.67-3,7c-2,4.67-4,9.33-6,14c4.67-7.33,9.33-14.67,14-22c-0.96,3.65-2.26,7.7-4,12c-2.21,5.44-4.66,10.11-7,14\r
	c1.46-1.22,3.79-2.87,7-4c4.73-1.66,8.86-1.33,11-1c-3.33,2-6.67,4-10,6c1.69,0.01,4.75,0.26,8,2c1.78,0.95,3.09,2.08,4,3\r
	c-3,0-6,0-9,0c1.37,0.58,3.17,1.51,5,3c2.6,2.12,4.14,4.44,5,6c-4-1.67-8-3.33-12-5c2.57,1.62,7.62,5.32,11,12\r
	c1.96,3.88,2.7,7.47,3,10c-2.67-3-5.33-6-8-9c2.33,5.33,4.67,10.67,7,16c-2-1.33-4-2.67-6-4c2.67,4.33,5.33,8.67,8,13\r
	c-1.33-1-2.67-2-4-3c1.33,3.67,2.67,7.33,4,11c-0.67-0.33-1.33-0.67-2-1c0.67,2.33,1.33,4.67,2,7c-0.67-0.33-1.33-0.67-2-1\r
	c0.67,2.33,1.33,4.67,2,7c-0.67-0.33-1.33-0.67-2-1c0.67,2.67,1.33,5.33,2,8c-0.67-0.33-1.33-0.67-2-1c0.33,2.67,0.67,5.33,1,8\r
	c-0.67-0.67-1.33-1.33-2-2c0.52,2.25,0.93,4.95,1,8c0.15,6.88-1.55,12.44-3,16"/>\r
<path class="zgrnf-st" d="M375.51,249.5c0.89,1.09,2.08,2.76,3,5c1.04,2.53,1.96,6.32,0,17c-1.35,7.33-1.85,14.86-4,22\r
	c-0.14,0.46-0.54,1.74,0,3c0.9,2.1,3.81,2.74,5,3c1.14,0.25,2.07,0.45,3,0c1.32-0.64,1.78-2.2,2-3c1.8-6.7,3.63-26.29,4-30\r
	c0.25-2.54,0.64-5.77,1-11c0.27-3.94,0.14-3.39,0.4-7.55c0,0,0.25-9.1,0-17c-0.02-0.61-0.15-1.85-1.03-3\r
	c-0.06-0.08-0.45-0.56-1.03-1c-1.97-1.5-6.08-1.07-9.23,0c-1.09,0.37-1.65,0.57-2.05,1c-1.08,1.16-0.68,2.77,0,7\r
	c0.38,2.36,0.9,5.21,1.03,8c0.15,3.38,0.32,6.96-1.1,7.55c-1.68,0.71-3.45-3.69-10-7c0,0-2.81-1.42-7-2\r
	c-2.8-0.39-3.8-0.04-4.46,0.45c-0.4,0.29-0.64,0.62-2.05,3c-0.61,1.03-1.11,1.9-1.49,2.55"/>\r
<path class="zgrnf-st" d="M388.51,264.5c0.6,0.9,1.38,2.25,2,4c0,0,0.98,2.34,1,5c0.06,10.68-5,30-5,30s-5.47,20.88-11.51,30.45\r
	c-0.61,0.96-1.46,2.27-3,3c-0.9,0.43-1.43,0.38-4.49,0.55c-4.6,0.27-5.32,0.49-6,1c-0.79,0.59-0.65,0.92-2,3\r
	c-1.15,1.77-2.12,3.27-3.51,4.45c-2.17,1.83-4.63,2.25-6.49,2.55c-2.61,0.44-4.64,0.18-6,0c-2.04-0.27-5.31-0.97-9-3"/>\r
<path class="zgrnf-st" d="M371.51,247.5c0.66,0.38,2.02,1.28,3,3c1.24,2.17,1.09,4.27,1,5c-0.3,3.67-0.76,8.61-1.51,14.45\r
	c-1.76,13.61-3.07,16.52-6.49,34.55c0,0-3.9,20.56-11,38c-0.5,1.23-1.58,3.61-4,5c-1.2,0.69-2.34,0.91-3,1"/>\r
<path class="zgrnf-st" d="M363.51,242.5c1.09,0.39,2.88,1.23,4,3c1.25,1.97,1.08,4.15,1,5c-5.39,56.39-16,84-16,84\r
	c-0.89,2.32-2.25,5.79-4,10c-0.17,0.42-0.53,1.21-1.31,1.94c-0.68,0.64-1.37,0.93-1.69,1.06c-2.12,0.87-4.34,0.22-5,0"/>\r
<path class="zgrnf-st" d="M378,226.95c-1.04-3.76-2.35-7.79-4-12c-3.06-7.83-6.6-14.5-10-20"/>\r
<path class="zgrnf-st" d="M384,225.95c-1.24-4.3-2.86-9.02-5-14c-3.44-7.99-7.35-14.65-11-20"/>\r
<path class="zgrnf-st" d="M346,158.95c5.04,5.71,9.15,10.06,12,13c4.31,4.45,7.31,10.02,11,15c0.42,0.57,1.33,1.79,1,3\r
	c-0.42,1.54-1.96,2.07-5,4c-4.32,2.75-4.36,3.9-6,4c-3.17,0.18-5.86-3.98-7-6"/>\r
<path class="zgrnf-st" d="M159.5,244.5c-0.4-3.64-0.88-12.54,4.01-22c2.45-4.74,5.5-8.2,8.09-10.57c1.77-1.63,2.8-3.89,2.82-6.3\r
	c0.07-7.69,1.72-23.01,13.09-35.13c15.08-16.06,41.35-20.23,65.02-9.45c1.9,0.87,4.06,1.04,6.07,0.44\r
	c5.61-1.7,13.51-3.34,22.92-2.99c8.65,0.32,24.92,0.93,37,13c12.23,12.21,12.9,28.91,12.42,36.82c-0.16,2.6,0.89,5.11,2.81,6.88\r
	c2.79,2.57,6.07,6.27,8.77,11.3c5.21,9.74,5.24,18.91,5,23"/>\r
<path class="zgrnf-st" d="M181.51,231.5c0.82,2.53,11.57-1.8,29,0c16.34,1.69,26.61,7.55,28,5c0.93-1.71-2.93-5.81-6-8\r
	c-3.66-2.62-7.14-3.22-12-4c-14.04-2.25-21.1-3.37-23-3C188.71,223.2,180.77,229.21,181.51,231.5z"/>\r
<path class="zgrnf-st" d="M267.51,235.5c1.47,3.19,14.73-3.46,32-3c15.08,0.4,24.91,6.26,26,4c0.88-1.83-5.11-6.65-9-9\r
	c-4.9-2.96-9.37-3.76-11-4c-4.07-0.59-5.67,0.08-16,2c-13.33,2.47-18.2,2.75-21,7C267.83,233.53,267.11,234.63,267.51,235.5z"/>\r
<path class="zgrnf-st" d="M165.5,244.5c0,4,0,8,0,12"/>\r
<path class="zgrnf-st" d="M340.5,249.5c0,4,0,8,0,12"/>\r
<path class="zgrnf-st" d="M183.5,251.5c-1.49,2.33-1.73,5.01-2,8c-0.51,5.69,0.79,10.07,2,14c2.05,6.67,3.08,10.01,6,13\r
	c4.45,4.55,10.18,5.27,16,6c4.96,0.62,17.07,2.14,24-5c1.49-1.53,2.35-3.06,4-6c3.12-5.54,4.43-10.46,5-13c1.45-6.51,2.19-9.84,1-13\r
	c-4.05-10.79-27.01-10.24-37-10C188.69,245.83,185.03,249.1,183.5,251.5z"/>\r
<path class="zgrnf-st" d="M322.5,256.5c0.6,1.27,0.73,2.52,1,5c0.2,1.84,0.69,7.89-2,16c-2.04,6.13-3.31,9.97-7,13\r
	c-4.21,3.46-8.92,3.69-15,4c-7.34,0.37-17.69,0.89-25-6c-3.33-3.14-4.79-6.65-7-12c-1.49-3.61-3.28-8.07-3-14\r
	c0.1-2.06,0.2-4.23,1.04-6.16c4.94-11.45,32.74-8.48,37.6-7.96C318.75,250.05,321.68,254.76,322.5,256.5z"/>\r
</svg>\r
`,tu=JSON.parse(`[{"id":"stand","name":"Stand","themeColor":"#000000","svgFile":"Stand.svg"},{"id":"phoebe","name":"菲比","themeColor":"#e3c85c","svgFile":"phoebe.svg"},{"id":"colorful_chaos","name":"乱涂彩","themeColor":"#B066FC","svgFile":"colorful_chaos.svg","uid":"3691008179046794"},{"id":"serika","name":"黑见芹香","themeColor":"#4A4364","svgFile":"serika.svg","uid":"3632299639835463"},{"id":"fumo_face","name":"fumo脸","themeColor":"#E8003B","svgFile":"fumo_face.svg","uid":"3691009340869470"},{"id":"kiritani_haruka","name":"桐谷遥","themeColor":"#3371A7","svgFile":"kiritani_haruka.svg","uid":"3546894366149325"},{"id":"kuromi","name":"库洛米","themeColor":"#F694AF","svgFile":"kuromi.svg","uid":"3707043483486465"},{"id":"blood_queen","name":"红蝶","themeColor":"#9A2C2A","svgFile":"blood_queen.svg","uid":"3706974357162199"},{"id":"adachi_rei","name":"足立零","themeColor":"#FF8A44","svgFile":"adachi_rei.svg","uid":"2116509955"},{"id":"teto_2","name":"Teto","themeColor":"#E05C72","svgFile":"teto_2.svg","uid":"3707041663158721"},{"id":"asahina_mafuyu","name":"朝比奈真冬","themeColor":"#6F578F","svgFile":"asahina_mafuyu.svg","uid":"3546391850781671"},{"id":"rui_kamishiro","name":"神代类","themeColor":"#D9A8F0","svgFile":"rui_kamishiro.svg","uid":"3546391850781671"},{"id":"ningning","name":"草薙宁宁","themeColor":"#A2A28D","svgFile":"ningning.svg","uid":"3546391850781671"},{"id":"mizuki","name":"晓山瑞希","themeColor":"#EBC9CA","svgFile":"mizuki.svg","uid":"652663235"},{"id":"hoshino","name":"星野","themeColor":"#E89EAE","svgFile":"hoshino.svg","uid":"3706949289904719"},{"id":"briar","name":"熊大","themeColor":"#96471C","svgFile":"briar.svg","uid":"3493130401745379"},{"id":"danzai","name":"蛋仔派对","themeColor":"#FFF04E","svgFile":"danzai.svg","uid":"3546949489789054"},{"id":"meg","name":"M.E.G.","themeColor":"#000000","svgFile":"meg.svg","uid":"3706935931046610"},{"id":"psg","name":"巴黎圣日耳曼","themeColor":"#00436B","svgFile":"psg.svg","uid":"1893029294"},{"id":"bili","name":"BiliBili","themeColor":"#FF79A8","svgFile":"bili.svg"},{"id":"bili_stareyes","name":"星星眼","themeColor":"#FFE590","svgFile":"bili_stareyes.svg","uid":"529375562"},{"id":"bili_laugh","name":"大笑","themeColor":"#FFDF7B","svgFile":"bili_laugh.svg","uid":"529375562"},{"id":"americanball","name":"美国球","themeColor":"#001DAC","svgFile":"americanball.svg","uid":"3690982769953668"},{"id":"teto_1","name":"Teto","themeColor":"#E85473","svgFile":"teto_1.svg","uid":"3707036890040698"},{"id":"sky","name":"光遇","themeColor":"#000000","svgFile":"sky.svg","uid":"3546844862876263"},{"id":"invincible","name":"无敌少侠","themeColor":"#009BED","svgFile":"invincible.svg","uid":"3546949489789054"},{"id":"bili_thinking","name":"思考","themeColor":"#FFD95C","svgFile":"bili_thinking.svg","uid":"529375562"},{"id":"mj","name":"mj","themeColor":"#FF141D","svgFile":"mj.svg"},{"id":"phantoms","name":"怪盗团","themeColor":"#EC0005","svgFile":"phantoms.svg"},{"id":"amamiya_ren","name":"雨宫莲","themeColor":"#544478","svgFile":"amamiya_ren.svg","uid":"3632303584578226"},{"id":"goc","name":"GOC","themeColor":"#5B93DB","svgFile":"goc.svg","uid":"3546373720902312"},{"id":"lloyd","name":"劳埃德","themeColor":"#50B97A","svgFile":"lloyd.svg","uid":"3745011352997404"},{"id":"akemi_homura","name":"晓美焰","themeColor":"#645087","svgFile":"akemi_homura.svg","uid":"3691002411879168"},{"id":"madoka_kaname","name":"鹿目圆","themeColor":"#FFA8C1","svgFile":"madoka_kaname.svg","uid":"3691002411879168"},{"id":"araya","name":"阿赖耶","themeColor":"#5B598F","svgFile":"araya.svg","uid":"3546379754408594"},{"id":"otori_emu","name":"凤笑梦","themeColor":"#F5BAD5","svgFile":"otori_emu.svg","uid":"3706956189534684"},{"id":"blackegg","name":"蛋小黑","themeColor":"#000000","svgFile":"blackegg.svg","uid":"3690996051216562"},{"id":"kamado_nezuko","name":"祢豆子","themeColor":"#F6AAB2","svgFile":"kamado_nezuko.svg","uid":"3707007976605975"},{"id":"thumbhandstand","name":"荒野倒拇指","themeColor":"#F7010A","svgFile":"thumbhandstand.svg","uid":"3546622929668214"},{"id":"shinobu_kocho","name":"蝴蝶忍","themeColor":"#65519D","svgFile":"shinobu_kocho.svg","uid":"3546852674767406"},{"id":"demon_slayer","name":"鬼灭之刃","themeColor":"#DA0017","svgFile":"demon_slayer.svg","uid":"3546852674767406"},{"id":"mixue","name":"雪王","themeColor":"#E50116","svgFile":"mixue.svg","uid":"3546853587028743"},{"id":"teto","name":"Teto","themeColor":"#EF0055","svgFile":"teto.svg","uid":"1292243480"},{"id":"dreamy_yoyo","name":"梦悠悠","themeColor":"#AE82B2","svgFile":"dreamy_yoyo.svg","uid":"545150832"},{"id":"twisted_face","name":"扭曲脸","themeColor":"#F7CF5D","svgFile":"twisted_face.svg","uid":"3690989344524408"},{"id":"nine_tailed_fox","name":"九尾狐","themeColor":"#000000","svgFile":"nine_tailed_fox.svg","uid":"185623420"},{"id":"chaos_insurgency","name":"混沌分裂者","themeColor":"#FF0016","svgFile":"chaos_insurgency.svg","uid":"185623420"},{"id":"warma","name":"沃玛","themeColor":"#FF8B89","svgFile":"warma.svg","uid":"515455102"},{"id":"qunu","name":"群友","themeColor":"#FFD0B3","svgFile":"qunu.svg","uid":"3493287732186034"},{"id":"neow_ear","name":"妙脆角","themeColor":"#000000","svgFile":"neow_ear.svg","uid":"3546696065747439"},{"id":"child_naiwa_ts","name":"小奶蛙吐舌","themeColor":"#ffc54c","svgFile":"child_naiwa_ts.svg","uid":"3546696065747439"},{"id":"tokai_teio","name":"东海帝王","themeColor":"#904648","svgFile":"tokai_teio.svg","uid":"1952841538"},{"id":"duoer","name":"多儿","themeColor":"#62B638","svgFile":"duoer.svg","uid":"3546962662000877"},{"id":"talking_tomcat","name":"说话汤姆猫","themeColor":"#66C044","svgFile":"talking_tomcat.svg","uid":"3546654762338599"},{"id":"zgrnf","name":"中国人能飞","themeColor":"#DE2910","svgFile":"zgrnf.svg","uid":"3546875321912139"},{"id":"bill_cipher","name":"三角形","themeColor":"#F6E867","svgFile":"bill_cipher.svg","uid":"3632318503717105"},{"id":"catnana","name":"香蕉猫","themeColor":"#F7EA33","svgFile":"catnana.svg","uid":"70900894"},{"id":"konoha_ninja","name":"木叶忍者","themeColor":"#000000","svgFile":"konoha_ninja.svg"},{"id":"naruto_text","name":"火影忍者","themeColor":"#EB6C38","svgFile":"naruto_text.svg","uid":"2133947492"},{"id":"naruto_logo","name":"火影忍者","themeColor":"#EB6C38","svgFile":"naruto_logo.svg","uid":"2133947492"},{"id":"mikucat","name":"Miku猫猫","themeColor":"#7CECE4","svgFile":"mikucat.svg"},{"id":"sans","name":"sans","themeColor":"#000000","svgFile":"sans.svg","uid":"3706936052681121"},{"id":"xjgmd","name":"小鸡裹麻袋","themeColor":"#FF6E6B","svgFile":"xjgmd.svg","uid":"1148934140"},{"id":"dingdongji","name":"叮咚鸡","themeColor":"#FFA445","svgFile":"dingdongji.svg","uid":"3546964232767819"},{"id":"chinaball","name":"中国球","themeColor":"#A62525","svgFile":"chinaball.svg","uid":"3546654762338599"},{"id":"arknight","name":"明日方舟","themeColor":"#000000","svgFile":"arknights.svg"},{"id":"niulai","name":"牛来","themeColor":"#FAB933","svgFile":"niulai.svg","uid":"3706940500740536"},{"id":"feifeidu","name":"胆子肥嘟嘟","themeColor":"#FFB623","svgFile":"feifeidu.svg","uid":"3546879581227658"},{"id":"kuyaxi","name":"小桃苦呀西","themeColor":"#FF90AA","svgFile":"kuyaxi.svg","uid":"699195630"},{"id":"lele","name":"乐乐","themeColor":"#7b7b7b","svgFile":"lele.svg","uid":"3706949570923457"},{"id":"korfball","name":"荷兰球","themeColor":"#AE1C27","svgFile":"korfball.svg","uid":"3691001428314274"},{"id":"volleyball","name":"芬兰球","themeColor":"#003B7E","svgFile":"volleyball.svg","uid":"3691001428314274"},{"id":"shiroko","name":"白子","themeColor":"#A6F3FE","svgFile":"shiroko.svg","uid":"2088583726"},{"id":"manbo","name":"诗歌剧","themeColor":"#A39DC4","svgFile":"manbo.svg","uid":"564907556"},{"id":"doubao","name":"豆包","themeColor":"#CF3733","svgFile":"doubao.svg","uid":"484421218"},{"id":"salary_cat","name":"月薪喵","themeColor":"#D1B79A","svgFile":"salary_cat.svg","uid":"3706929576676043"},{"id":"rickrolling","name":"瑞克摇","themeColor":"#000000","svgFile":"rickrolling.svg","uid":"500239999"},{"id":"among_us","name":"Among Us","themeColor":"#CC000D","svgFile":"among_us.svg","uid":"3493095347849253"},{"id":"naiwa_laugh","name":"奶蛙大笑","themeColor":"#ffc54c","svgFile":"naiwa_laugh.svg","uid":"3461565158263167"},{"id":"taffy","name":"塔菲","themeColor":"#FFC8CB","svgFile":"taffy.svg","uid":"3461563107248333"},{"id":"miku","name":"Miku","themeColor":"#81e0d8","svgFile":"miku.svg","uid":"3707019492067362"},{"id":"dagoujiao","name":"大狗叫","themeColor":"#EFC094","svgFile":"dagoujiao.svg","uid":"3546780069267990"},{"id":"naiwa","name":"奶蛙","themeColor":"#ffc54c","svgFile":"naiwa.svg","uid":"3546828333123649"},{"id":"shushu","name":"鼠鼠","themeColor":"#BE9D69","svgFile":"shushu.svg","uid":"3546836065323554"},{"id":"maodie","name":"耄耋","themeColor":"#BE9D69","svgFile":"maodie.svg","uid":"3546686636952349"},{"id":"bili_app","name":"哔哩APP","themeColor":"#FF79A8","svgFile":"bili_app.svg","uid":"1042259307"},{"id":"nte","name":"异环","themeColor":"#000000","svgFile":"nte.svg","uid":"3691007084333219"},{"id":"fool","name":"啥子","themeColor":"#000000","svgFile":"fool.svg","uid":"3546802817075650"},{"id":"lil_hater","name":"小黑子","themeColor":"#FFDB5C","svgFile":"lil_hater.svg","uid":"1746941295"},{"id":"triple_tap","name":"一键三连","themeColor":"#FF79A8","svgFile":"triple_tap.svg","uid":"3494374585403677"},{"id":"sad_dxh","name":"悲伤蛋小黄","themeColor":"#E8B941","svgFile":"sad_dxh.svg"},{"id":"teto_pear","name":"Teto梨","themeColor":"#E14263","svgFile":"teto_pear.svg","uid":"1148934140"},{"id":"pikachu","name":"皮卡丘","themeColor":"#FFE228","svgFile":"pikachu.svg","uid":"490459227"},{"id":"scp","name":"基金会","themeColor":"#000000","svgFile":"scp.svg","uid":"3546964390054869"},{"id":"doro","name":"Doro","themeColor":"#E9AFC8","svgFile":"doro.svg"},{"id":"genshin","name":"原神","themeColor":"#000000","svgFile":"genshin.svg"},{"id":"stinky_penguin","name":"凑企鹅","themeColor":"#7A7186","svgFile":"Stinky_penguin.svg"},{"id":"nailong","name":"奶龙","themeColor":"#ffc54c","svgFile":"nailong.svg"}]`);function nu(e){let t=e.match(/[a-zA-Z]|-?\d*\.?\d+(?:[eE][-+]?\d+)?/g)??[],n=[],r=0,i=null,a={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0},o=e=>{if(r+e>t.length)return null;let n=t.slice(r,r+e).map(Number);return r+=e,n};for(;r<t.length;){let e=t[r];if(/[a-zA-Z]/.test(e)){r++;let t=e.toUpperCase(),s=e===e.toLowerCase();if(t===`Z`){n.push({type:`Z`,rel:!1,args:[]}),i=null;continue}if(!(t in a))break;let c=o(a[t]??0);if(c===null)break;i={type:t,rel:s,args:c},n.push(i)}else{if(!i)break;let e=i.type,t=i.rel;e===`M`&&(e=`L`);let r=o(a[e]??0);if(r===null)break;n.push({type:e,rel:t,args:r})}}return n}function ru(e,t={}){let n=nu(e),r=t.cubicSteps??8,i=t.quadSteps??6,a=t.arcSteps??24,o=[],s=[],c={x:0,y:0},l={x:0,y:0},u=null,d=null,f=(e,t,n)=>n?{x:c.x+e,y:c.y+t}:{x:e,y:t},p=e=>{s.length>0&&o.push(s),s=[e],l=e},m=e=>{s.push(e),c=e};for(let e of n){let{type:t,rel:n,args:o}=e;switch(t){case`M`:{let e=f(o[0],o[1],n);p(e),c=e,u=null,d=null;break}case`L`:m(f(o[0],o[1],n)),u=null,d=null;break;case`H`:m(n?{x:c.x+o[0],y:c.y}:{x:o[0],y:c.y}),u=null,d=null;break;case`V`:m(n?{x:c.x,y:c.y+o[0]}:{x:c.x,y:o[0]}),u=null,d=null;break;case`C`:{let e=f(o[0],o[1],n),t=f(o[2],o[3],n),i=f(o[4],o[5],n);iu(c,e,t,i,r,m),u=t,d=null;break}case`S`:{let e=u?{x:c.x*2-u.x,y:c.y*2-u.y}:{...c},t=f(o[0],o[1],n),i=f(o[2],o[3],n);iu(c,e,t,i,r,m),u=t,d=null;break}case`Q`:{let e=f(o[0],o[1],n),t=f(o[2],o[3],n);au(c,e,t,i,m),d=e,u=null;break}case`T`:{let e=d?{x:c.x*2-d.x,y:c.y*2-d.y}:{...c},t=f(o[0],o[1],n);au(c,e,t,i,m),d=e,u=null;break}case`A`:{let e=o[0],t=o[1],r=o[2],i=o[3],s=o[4],l=f(o[5],o[6],n);ou(c,l,e,t,r,i,s,a,m),u=null,d=null;break}case`Z`:if(s.length>0){let e=s[s.length-1];Math.hypot(e.x-l.x,e.y-l.y)>1e-9&&s.push({...l}),c=l}u=null,d=null}}return s.length>0&&o.push(s),o}function iu(e,t,n,r,i,a){for(let o=1;o<=i;o++){let s=o/i,c=1-s;a({x:c*c*c*e.x+3*c*c*s*t.x+3*c*s*s*n.x+s*s*s*r.x,y:c*c*c*e.y+3*c*c*s*t.y+3*c*s*s*n.y+s*s*s*r.y})}}function au(e,t,n,r,i){for(let a=1;a<=r;a++){let o=a/r,s=1-o;i({x:s*s*e.x+2*s*o*t.x+o*o*n.x,y:s*s*e.y+2*s*o*t.y+o*o*n.y})}}function ou(e,t,n,r,i,a,o,s,c){if(Math.hypot(t.x-e.x,t.y-e.y)<1e-9){c({...t});return}let l=i*Math.PI/180,u=Math.cos(l),d=Math.sin(l),f=(e.x-t.x)/2,p=(e.y-t.y)/2,m=u*f+d*p,h=-d*f+u*p,g=Math.abs(n),_=Math.abs(r),v=m*m/(g*g)+h*h/(_*_);if(v>1){let e=Math.sqrt(v);g*=e,_*=e}let y=a===o?-1:1,b=g*g*_*_-g*g*h*h-_*_*m*m,x=g*g*h*h+_*_*m*m,S=y*Math.sqrt(Math.max(0,b)/(x||1)),C=S*(g*h/_),w=S*(-(_*m)/g),T=u*C-d*w+(e.x+t.x)/2,E=d*C+u*w+(e.y+t.y)/2,D=(e,t,n,r)=>{let i=e*n+t*r,a=Math.hypot(e,t)*Math.hypot(n,r),o=Math.acos(Math.min(1,Math.max(-1,i/(a||1))));return e*r-t*n<0&&(o=-o),o},O=D(1,0,(m-C)/g,(h-w)/_),k=D((m-C)/g,(h-w)/_,(-m-C)/g,(-h-w)/_);o===0&&k>0&&(k-=2*Math.PI),o===1&&k<0&&(k+=2*Math.PI);let A=Math.max(1,Math.round(s*Math.abs(k)/(2*Math.PI)));for(let e=1;e<=A;e++){let t=O+k*e/A;c({x:T+g*Math.cos(t)*u-_*Math.sin(t)*d,y:E+g*Math.cos(t)*d+_*Math.sin(t)*u})}}function su(e,t){let n=RegExp(`(?:^|\\s)${t}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`,`i`).exec(e);return n?n[1]??n[2]??``:null}function cu(e){let t=/(matrix|translate|scale|rotate)\(([^)]*)\)/gi,n=[],r;for(;(r=t.exec(e))!==null;){let e=r[1].toLowerCase(),t=r[2].trim().split(/[\s,]+/).map(Number).filter(e=>Number.isFinite(e));switch(e){case`matrix`:if(t.length>=6){let[e,r,i,a,o,s]=t;n.push(t=>({x:e*t.x+i*t.y+o,y:r*t.x+a*t.y+s}))}break;case`translate`:if(t.length>=1){let e=t[0],r=t[1]??0;n.push(t=>({x:t.x+e,y:t.y+r}))}break;case`scale`:if(t.length>=1){let e=t[0],r=t[1]??e;n.push(t=>({x:t.x*e,y:t.y*r}))}break;case`rotate`:if(t.length>=1){let e=t[0]*Math.PI/180,r=t[1]??0,i=t[2]??0,a=Math.cos(e),o=Math.sin(e);n.push(e=>{let t=e.x-r,n=e.y-i;return{x:r+t*a-n*o,y:i+t*o+n*a}})}}}return n.length===0?null:e=>n.reduce((e,t)=>t(e),{...e})}function lu(e){let t=e.trim();if(!t||t===`none`)return null;let n=/^#([0-9a-fA-F]{3})$/.exec(t);if(n){let[e,t,r]=n[1];return`#${e}${e}${t}${t}${r}${r}`.toLowerCase()}if(/^#[0-9a-fA-F]{6}$/.test(t))return t.toLowerCase();let r=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.exec(t);return r?`#${[r[1],r[2],r[3]].map(e=>Number(e).toString(16).padStart(2,`0`)).join(``)}`:null}function uu(e){let t=new Map,n=/\.([\w-]+)\s*\{([^}]*)\}/gi,r;for(;(r=n.exec(e))!==null;){let e=r[2],n=/\bstroke\s*:\s*([^;]+)/i.exec(e),i=/\bstroke-width\s*:\s*([^;]+)/i.exec(e);t.set(r[1],{stroke:n?lu(n[1]):null,strokeWidth:i?du(i[1]):null})}return t}function du(e){let t=e.trim(),n=/^([+-]?(?:\d*\.)?\d+)(?:px)?$/.exec(t);if(!n)return null;let r=Number(n[1]);return Number.isFinite(r)&&r>0?r:null}function fu(e,t){let n=su(e,`stroke`),r=null;n!==null&&(r=lu(n));let i=su(e,`class`);if(i)for(let e of i.trim().split(/\s+/)){let i=t.get(e);i&&n===null&&i.stroke!==null&&(r=i.stroke)}return{stroke:r}}function pu(e,t){let n=su(e,`stroke-width`),r=n===null?null:du(n);if(r!==null)return r;let i=su(e,`class`);if(i)for(let e of i.trim().split(/\s+/)){let n=t.get(e);if(n&&n.strokeWidth!==null){r=n.strokeWidth;break}}return r}function mu(e,t={}){let n=uu(e),r=[],i=[],a=[],o=/<path\b[^>]*>/gi,s;for(;(s=o.exec(e))!==null;){let e=s[0],o=su(e,`d`);if(o===null||o===``)continue;let c=su(e,`transform`),l=c?cu(c):null,u=ru(o,t);if(l)for(let e of u)for(let t of e){let e=l(t);t.x=e.x,t.y=e.y}let d=fu(e,n),f=pu(e,n);r.push(...u);for(let e=0;e<u.length;e++)i.push(d),a.push(f)}return{paths:r,colors:i,widths:a}}function hu(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function gu(e,t=1e-9){let n=[];for(let r of e){let e=n[n.length-1];(!e||hu(e,r)>t)&&n.push(r)}return n}function _u(e){if(e.length===0)return{minX:0,minY:0,width:0,height:0};let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)a.x<t&&(t=a.x),a.y<n&&(n=a.y),a.x>r&&(r=a.x),a.y>i&&(i=a.y);return{minX:t,minY:n,width:Math.max(r-t,1e-9),height:Math.max(i-n,1e-9)}}function vu(e){let t=0;for(let n=1;n<e.length;n++)t+=hu(e[n-1],e[n]);return t}function yu(e,t,n){let r=t[t.length-1];if(n<=0)return{...e[0]};if(n>=r)return{...e[e.length-1]};let i=0,a=t.length-1;for(;i<a-1;){let e=i+a>>1;t[e]<=n?i=e:a=e}let o=t[a]-t[i],s=o>0?(n-t[i])/o:0,c=e[i],l=e[a];return{x:c.x+(l.x-c.x)*s,y:c.y+(l.y-c.y)*s}}function bu(e,t){let n=gu(e);if(t<=0)return[];if(n.length===0)return Array.from({length:t},()=>({x:0,y:0}));if(n.length===1)return Array.from({length:t},()=>({x:n[0].x,y:n[0].y}));if(t===1)return[{x:n[0].x,y:n[0].y}];let r=[0];for(let e=1;e<n.length;e++)r.push(r[e-1]+hu(n[e-1],n[e]));let i=r[r.length-1],a=[];for(let e=0;e<t;e++){let o=e/(t-1)*i;a.push(yu(n,r,o))}return a}function xu(e,t){let n=gu(e);if(n.length<=2||t<=0)return n;let r=[n[0]];for(let e=1;e<n.length;e++){let i=n[e-1],a=n[e],o=hu(i,a),s=Math.max(1,Math.ceil(o/t));for(let e=1;e<=s;e++){let t=e/s;r.push({x:i.x+(a.x-i.x)*t,y:i.y+(a.y-i.y)*t})}}return r}function Su(e,t){let n=1/Math.max(t.width,t.height),r=(1-t.width*n)/2-t.minX*n,i=(1-t.height*n)/2-t.minY*n;return e.map(e=>({x:e.x*n+r,y:e.y*n+i}))}var Cu=10;function wu(e,t){if(e.length<=2)return e.slice();let n=Math.round(Math.max(0,Math.min(1,t))*Cu);if(n===0)return e.slice();let r=e.length,i=e.slice(),a=Array(r);for(let e=0;e<n;e++){for(let e=0;e<r;e++){let t=i[e];if(e===0||e===r-1)a[e]={x:t.x,y:t.y};else{let n=i[e-1],r=t,o=i[e+1];a[e]={x:(n.x+2*r.x+o.x)/4,y:(n.y+2*r.y+o.y)/4}}}let e=i;i=a,a=e}return i}function Tu(e,t){let n=gu(e);if(t<=1)return[n];if(n.length===0)return Array.from({length:t},()=>[]);if(n.length===1)return Array.from({length:t},()=>[{...n[0]}]);let r=vu(n)/t,i=[],a=[{...n[0]}],o=0;for(let e=1;e<n.length;e++){let s=n[e-1],c=n[e],l=hu(s,c),u=r-o;if(l>=u-1e-9&&i.length<t-1){let e=u/(l||1e-9),t={x:s.x+(c.x-s.x)*e,y:s.y+(c.y-s.y)*e};a.push(t),i.push(a),a=[{...t}],o=l-u}else o+=l;a.push({...c})}for(i.push(a);i.length<t;){let e=i[i.length-1],t=e.length?e[e.length-1]:{x:0,y:0};i.push([{...t}])}return i.slice(0,t)}function Eu(e){let t=_u(e);return{x:t.minX+t.width/2,y:t.minY+t.height/2}}function Du(e,t){let n=Eu(e),r=Eu(t);return Math.hypot(n.x-r.x,n.y-r.y)}function Ou(e,t){let n=e.map(e=>e.slice());for(;n.length>t;){let e=0,t=1,r=1/0;for(let i=0;i<n.length;i++)for(let a=i+1;a<n.length;a++){let o=Du(n[i],n[a]);o<r&&(r=o,e=i,t=a)}let i=n[e].concat(n[t]);n.splice(t,1),n.splice(e,1),n.push(i)}return n}function ku(e,t){if(t<=0)return[];let n=e.map(e=>gu(e)).filter(e=>e.length>=2&&vu(e)>1e-9);if(n.length===0)return Array.from({length:t},()=>[]);let r=n;if(r.length>t&&(r=Ou(r,t)),r.length===t)return r;let i=r.map(vu),a=i.reduce((e,t)=>e+t,0),o=r.map((e,n)=>Math.max(1,Math.round(t*i[n]/a))),s=r.map((e,t)=>t).sort((e,t)=>i[t]-i[e]),c=t-o.reduce((e,t)=>e+t,0),l=0;for(;c>0;){let e=s[l%s.length];o[e]=o[e]+1,c--,l++}for(;c<0;){let e=s[l%s.length];o[e]>1&&(o[e]=o[e]-1,c++),l++}let u=[];return r.forEach((e,t)=>{u.push(...Tu(e,o[t]))}),u.slice(0,t)}var Au=.015,ju=.001,Mu=.1;function Nu(e){return Number.isFinite(e)?Math.min(Mu,Math.max(ju,e)):ju}function Pu(e){let t=/viewBox\s*=\s*"([^"]*)"/i.exec(e);if(!t)return null;let n=t[1].trim().split(/[\s,]+/).map(Number);return n.length>=4&&n[2]>0&&n[3]>0?{w:n[2],h:n[3]}:null}function Fu(e){let t=/viewBox\s*=\s*"([^"]*)"/i.exec(e);if(!t)return null;let n=t[1].trim().split(/[\s,]+/).map(Number);return n.length>=4&&n[2]>0&&n[3]>0?n[2]/n[3]:null}function Iu(e,t){let n=1-2*t;return e.map(e=>e.map(e=>({x:n*e.x+t,y:n*e.y+t})))}function Lu(e,t={}){let n=Math.max(t.maxSegmentLength??.005,1e-4),r=t.inset??.05,{paths:i,colors:a,widths:o}=mu(e),s=i.map(e=>gu(e).length>=3),c=s.some(Boolean),l=i.filter((e,t)=>!c||s[t]),u=a.filter((e,t)=>!c||s[t]),d=o.filter((e,t)=>!c||s[t]),f=_u(l.flat()),p=Fu(e)??(f.height>0?f.width/f.height:1),m=Pu(e),h=m?Math.min(m.w,m.h):Math.max(Math.min(f.width,f.height),1e-6),g=d.map(e=>e===null?Au:Nu(e/h)),_={subpaths:Iu(l.map(e=>xu(gu(Su(e,f)),n)),r),subpathColors:u,subpathWidths:g,aspectRatio:p};return Ru(_),_}function Ru(e){if(e.subpaths.length===0)throw Error(`TargetShape: no subpaths`);for(let t of e.subpaths){if(t.length<3)throw Error(`TargetShape: subpath has fewer than 3 points`);for(let e=0;e<t.length;e++){let n=t[e];if(n.x<-1e-6||n.x>1+1e-6||n.y<-1e-6||n.y>1+1e-6)throw Error(`TargetShape: point out of [0,1] range`);if(e>0){let r=t[e-1];if(Math.hypot(n.x-r.x,n.y-r.y)<1e-9)throw Error(`TargetShape: duplicate adjacent point`)}}}}var zu=Object.assign({"../assets/shapes/Stand.svg":lc,"../assets/shapes/Stinky_penguin.svg":uc,"../assets/shapes/adachi_rei.svg":dc,"../assets/shapes/akemi_homura.svg":fc,"../assets/shapes/amamiya_ren.svg":pc,"../assets/shapes/americanball.svg":mc,"../assets/shapes/among_us.svg":hc,"../assets/shapes/araya.svg":gc,"../assets/shapes/arknights.svg":_c,"../assets/shapes/asahina_mafuyu.svg":vc,"../assets/shapes/bili.svg":yc,"../assets/shapes/bili_app.svg":bc,"../assets/shapes/bili_laugh.svg":xc,"../assets/shapes/bili_stareyes.svg":Sc,"../assets/shapes/bili_thinking.svg":Cc,"../assets/shapes/bill_cipher.svg":wc,"../assets/shapes/blackegg.svg":Tc,"../assets/shapes/blood_queen.svg":Ec,"../assets/shapes/briar.svg":Dc,"../assets/shapes/catnana.svg":Oc,"../assets/shapes/chaos_insurgency.svg":kc,"../assets/shapes/child_naiwa_ts.svg":Ac,"../assets/shapes/chinaball.svg":jc,"../assets/shapes/colorful_chaos.svg":Mc,"../assets/shapes/dagoujiao.svg":Nc,"../assets/shapes/danzai.svg":Pc,"../assets/shapes/demon_slayer.svg":Fc,"../assets/shapes/dingdongji.svg":Ic,"../assets/shapes/doro.svg":Lc,"../assets/shapes/doubao.svg":Rc,"../assets/shapes/dreamy_yoyo.svg":zc,"../assets/shapes/duoer.svg":Bc,"../assets/shapes/feifeidu.svg":Vc,"../assets/shapes/fool.svg":Hc,"../assets/shapes/fumo_face.svg":Uc,"../assets/shapes/genshin.svg":Wc,"../assets/shapes/goc.svg":Gc,"../assets/shapes/hoshino.svg":Kc,"../assets/shapes/import.svg":qc,"../assets/shapes/invincible.svg":Jc,"../assets/shapes/kamado_nezuko.svg":Yc,"../assets/shapes/kiritani_haruka.svg":Xc,"../assets/shapes/konoha_ninja.svg":Zc,"../assets/shapes/korfball.svg":Qc,"../assets/shapes/kuromi.svg":$c,"../assets/shapes/kuyaxi.svg":el,"../assets/shapes/lele.svg":tl,"../assets/shapes/lil_hater.svg":nl,"../assets/shapes/lloyd.svg":rl,"../assets/shapes/madoka_kaname.svg":il,"../assets/shapes/manbo.svg":al,"../assets/shapes/maodie.svg":ol,"../assets/shapes/meg.svg":sl,"../assets/shapes/miku.svg":cl,"../assets/shapes/mikucat.svg":ll,"../assets/shapes/mixue.svg":ul,"../assets/shapes/mizuki.svg":dl,"../assets/shapes/mj.svg":fl,"../assets/shapes/nailong.svg":pl,"../assets/shapes/naiwa.svg":ml,"../assets/shapes/naiwa_laugh.svg":hl,"../assets/shapes/naruto_logo.svg":gl,"../assets/shapes/naruto_text.svg":_l,"../assets/shapes/neow_ear.svg":vl,"../assets/shapes/nine_tailed_fox.svg":yl,"../assets/shapes/ningning.svg":bl,"../assets/shapes/niulai.svg":xl,"../assets/shapes/nte.svg":Sl,"../assets/shapes/otori_emu.svg":Cl,"../assets/shapes/phantoms.svg":wl,"../assets/shapes/phoebe.svg":Tl,"../assets/shapes/pikachu.svg":El,"../assets/shapes/psg.svg":Dl,"../assets/shapes/question.svg":Ol,"../assets/shapes/qunu.svg":kl,"../assets/shapes/rickrolling.svg":Al,"../assets/shapes/rui_kamishiro.svg":jl,"../assets/shapes/sad_dxh.svg":Ml,"../assets/shapes/salary_cat.svg":Nl,"../assets/shapes/sans.svg":Pl,"../assets/shapes/scp.svg":Fl,"../assets/shapes/serika.svg":Il,"../assets/shapes/shinobu_kocho.svg":Ll,"../assets/shapes/shiroko.svg":Rl,"../assets/shapes/shushu.svg":zl,"../assets/shapes/sky.svg":Bl,"../assets/shapes/taffy.svg":Vl,"../assets/shapes/talking_tomcat.svg":Hl,"../assets/shapes/teto.svg":Ul,"../assets/shapes/teto_1.svg":Wl,"../assets/shapes/teto_2.svg":Gl,"../assets/shapes/teto_pear.svg":Kl,"../assets/shapes/thumbhandstand.svg":ql,"../assets/shapes/tokai_teio.svg":Jl,"../assets/shapes/triple_tap.svg":Yl,"../assets/shapes/twisted_face.svg":Xl,"../assets/shapes/volleyball.svg":Zl,"../assets/shapes/warma.svg":Ql,"../assets/shapes/xjgmd.svg":$l,"../assets/shapes/zgrnf.svg":eu}),Bu=`Stand404`,Vu=`382365750`;function Hu(e){return!!e.svg||(e.strokes?.length??0)>0}function Uu(e){let t=[],n=[],r=[];if(e.svg){let i=Lu(e.svg);t.push(...i.subpaths),n.push(...i.subpathColors);let a=e.strokeWidth;r.push(...i.subpathWidths.map(e=>a===void 0?e:Nu(a)))}if(Array.isArray(e.strokes))for(let i of e.strokes)t.push(i.points),n.push({stroke:i.color}),r.push(i.width);return{subpaths:t,subpathColors:n,subpathWidths:r}}var Wu=tu.map(e=>{let t=zu[`../assets/shapes/${e.svgFile}`];if(typeof t!=`string`)throw Error(`SHAPES: 找不到 SVG 文件 ${e.svgFile}（id=${e.id}），请确认文件存在且拼写一致`);let n={id:e.id,name:e.name,themeColor:e.themeColor,svg:t};return e.uid&&(n.uid=e.uid),n});zu[`../assets/shapes/question.svg`];var Gu=[`#000000`,`#ffffff`,`#e53935`,`#fdd835`,`#43a047`,`#039be5`,`#ec407a`],Ku=/^#[0-9a-fA-F]{6}$/;function qu(e,t=Gu){let n=Array.isArray(e)?e:[],r=new Set,i=[];for(let e of n)typeof e!=`string`||!Ku.test(e)||r.has(e)||(r.add(e),i.push(e));return i.length>0?i:t.slice()}var Ju=[`#000000`,`#1e88e5`,`#e53935`,`#43a047`,`#f9a825`,`#ec407a`,`#039be5`,`#f4511e`,`#5e35b1`,`#ffffff`,`#8d6e63`,`#bdbdbd`];function Yu(e){return Ju.find(t=>!e.includes(t))??`#000000`}var Xu=``+new URL(`undo-BqeMxrgd.mp3`,import.meta.url).href,Zu=``+new URL(`clear-C0-2BJBq.mp3`,import.meta.url).href,Qu=``+new URL(`turn_the_page-CAmjM2ms.mp3`,import.meta.url).href,$u=``+new URL(`change_1-VAMgdQlL.mp3`,import.meta.url).href,ed=``+new URL(`change_2-BndSmMgx.mp3`,import.meta.url).href,td=``+new URL(`writing_1-DWY4Ujf7.mp3`,import.meta.url).href,nd=``+new URL(`writing_2-BXUleneD.mp3`,import.meta.url).href,rd=``+new URL(`writing_3-Bi8NFBEm.mp3`,import.meta.url).href,id=``+new URL(`writing_4-DmQF2h0B.mp3`,import.meta.url).href,ad={undo:Xu,clear:Zu,page:Qu},od={1:$u,2:ed},sd=`2`;function cd(e){(e===`1`||e===`2`||e===`off`)&&e!==sd&&(sd=e,dd.delete(`change`),fd.delete(`change`))}var ld=[td,nd,rd,id],ud=3,dd=new Map,fd=new Map,pd=.8;function md(e){pd=Math.min(1,Math.max(0,Number.isFinite(e)?e:.8));for(let e of dd.values())for(let t of e)t.volume=pd}function hd(e,t,n=ud){let r=dd.get(e);if(!r){let i=Math.max(1,Math.min(n,t.length));r=Array.from({length:i},(e,n)=>{let r=new Audio(t[n%t.length]);return r.preload=`auto`,r.volume=pd,r}),dd.set(e,r),fd.set(e,0)}return r}function gd(e,t){let n=fd.get(e)??0;return fd.set(e,(n+1)%t.length),t[n]}function _d(e){try{e.currentTime=0,e.play().catch(()=>{})}catch{}}function vd(e){if(!(typeof Audio>`u`)){if(e===`change`){if(sd===`off`)return;_d(gd(`change`,hd(`change`,[od[sd]])));return}_d(gd(e,hd(e,[ad[e]])))}}function yd(){if(typeof Audio>`u`)return;let e=gd(`writing`,hd(`writing`,ld,ld.length));try{e.currentTime=0,e.play().catch(()=>{})}catch{}}var bd=`svg-morph-video:custom-shapes`,xd=`svg-morph-video:extra-strokes`,Sd=`svg-morph-video:name-overrides`,Cd=`svg-morph-video:clear-intro-seen`;function wd(e){if(!e||typeof e!=`object`)return!1;let t=e;return Array.isArray(t.points)&&t.points.every(e=>!!e&&typeof e==`object`)&&typeof t.color==`string`&&typeof t.width==`number`}function Td(e){return Array.isArray(e)&&e.every(wd)}function Ed(e){let t=/fill\s*:\s*(#[0-9a-fA-F]{3,8})/i.exec(e),n=/fill\s*=\s*["'](#[0-9a-fA-F]{3,8})["']/i.exec(e);return t?.[1]??n?.[1]}var Dd=`custom-doro`;function Od(){return{id:Dd,name:`Doro`,themeColor:`#E9AFC8`,svg:Lc}}function kd(){try{let e=localStorage.getItem(bd);if(e===null){let e=[Od()];try{localStorage.setItem(bd,JSON.stringify(e))}catch{}return e}let t=JSON.parse(e);return Array.isArray(t)?t.filter(e=>{if(!e||typeof e!=`object`)return!1;let t=e;return!(typeof t.id!=`string`||!t.id.startsWith(`custom-`)||typeof t.svg!=`string`||typeof t.name!=`string`||typeof t.themeColor!=`string`||!Ld.test(t.themeColor)||t.strokes!==void 0&&!Td(t.strokes))}).filter(Hu):[]}catch{return[]}}function Ad(){try{let e=localStorage.getItem(xd);if(!e)return{};let t=JSON.parse(e);if(!t||typeof t!=`object`)return{};let n={};for(let[e,r]of Object.entries(t))Wu.some(t=>t.id===e)&&Td(r)&&(n[e]=r);return n}catch{return{}}}function jd(){try{let e=localStorage.getItem(Sd);if(!e)return{};let t=JSON.parse(e);if(!t||typeof t!=`object`)return{};let n={};for(let[e,r]of Object.entries(t))typeof r==`string`&&r.trim().length>0&&(n[e]=r.trim());return n}catch{return{}}}function Md(){try{return localStorage.getItem(Cd)===`1`}catch{return!1}}var Nd=.004,Pd=.05,Fd=.015,Id=.7,Ld=/^#[0-9a-fA-F]{6}$/,Rd={resolution:{width:1080,height:1080},morphDurationMs:1e3,holdDurationMs:800,frameRate:60,backgroundColor:`#ffffff`,initialAnimation:`stroke`,initialDurationMs:1600,palette:Gu,exportFormat:`webm`,clearProtect:!1,penWidth:Fd,penSmoothing:Id,sfxVolume:.8,changeSound:`2`},zd=7680,Bd=36e5,Vd=36e5,Hd=5e3,Ud=5e3,Wd=36e5,Gd=5e3,Kd=`svg-morph-video:config`,qd=`svg-morph-video:order`;function Jd(e,t,n){return Number.isFinite(e)?Math.min(n,Math.max(t,e)):t}function Yd(e){return{...e,resolution:{...e.resolution}}}function Xd(e,t){let{[t]:n,...r}=e;return r}function Zd(e){let t=e.resolution??Rd.resolution,n=Math.round(t.width),r=Math.round(t.height),i=Number.isFinite(n)&&Number.isFinite(r)?Math.max(n,r):Rd.resolution.width;return{resolution:{width:Jd(i,64,zd),height:Jd(i,64,zd)},morphDurationMs:Jd(Math.round(e.morphDurationMs),100,Bd),holdDurationMs:Jd(Math.round(e.holdDurationMs),0,Vd),frameRate:Jd(Math.round(e.frameRate??Rd.frameRate),1,120),backgroundColor:typeof e.backgroundColor==`string`&&Ld.test(e.backgroundColor)?e.backgroundColor:Rd.backgroundColor,initialAnimation:e.initialAnimation===`fade`||e.initialAnimation===`stroke`?e.initialAnimation:Rd.initialAnimation,initialDurationMs:Jd(Math.round(Number.isFinite(e.initialDurationMs)?e.initialDurationMs:Rd.initialDurationMs),0,Wd),palette:qu(e.palette,Rd.palette),exportFormat:e.exportFormat===`mp4`||e.exportFormat===`webm`||e.exportFormat===`gif`?e.exportFormat:Rd.exportFormat,clearProtect:typeof e.clearProtect==`boolean`?e.clearProtect:Rd.clearProtect,penWidth:Jd(Number.isFinite(e.penWidth)?e.penWidth:Rd.penWidth,Nd,Pd),penSmoothing:Jd(Number.isFinite(e.penSmoothing)?e.penSmoothing:Rd.penSmoothing,0,1),sfxVolume:Jd(Number.isFinite(e.sfxVolume)?e.sfxVolume:Rd.sfxVolume,0,1),changeSound:e.changeSound===`1`||e.changeSound===`2`||e.changeSound===`off`?e.changeSound:Rd.changeSound}}function Qd(){return[`stand`,`triple_tap`,Dd]}function $d(){try{let e=localStorage.getItem(Kd);if(!e)return Yd(Rd);let t=JSON.parse(e);return Zd({...Yd(Rd),...t})}catch{return Yd(Rd)}}function ef(e){return Qd().map(t=>({id:t,strokeWidth:e}))}function tf(e=new Set,t=Fd){let n=()=>ef(t);try{let t=localStorage.getItem(qd);if(!t)return n();let r=JSON.parse(t);if(!Array.isArray(r))return n();if(r.length===0)return[];let i=new Set([...Wu.map(e=>e.id),...e]),a=[];for(let e of r){if(typeof e==`string`){i.has(e)&&a.push({id:e});continue}if(!e||typeof e!=`object`)continue;let t=e;typeof t.id!=`string`||!i.has(t.id)||a.push({id:t.id,strokeWidth:typeof t.strokeWidth==`number`&&Number.isFinite(t.strokeWidth)?t.strokeWidth:void 0})}let o=new Set,s=a.filter(e=>!o.has(e.id)&&(o.add(e.id),!0));return s.length>0?s:n()}catch{return n()}}var nf=cc(`app`,()=>{let e=I($d()),t=I(kd());md(e.value.sfxVolume),Gn(()=>e.value.sfxVolume,e=>md(e)),cd(e.value.changeSound),Gn(()=>e.value.changeSound,e=>cd(e));let n=I(Ad()),r=I(jd()),i=I(Md()),a=I(tf(new Set(t.value.map(e=>e.id)),e.value.penWidth));Gn(e,e=>{try{localStorage.setItem(Kd,JSON.stringify(e))}catch{}},{deep:!0}),Gn(a,e=>{try{localStorage.setItem(qd,JSON.stringify(e))}catch{}}),Gn(t,e=>{try{localStorage.setItem(bd,JSON.stringify(e.filter(Hu)))}catch{}},{deep:!0}),Gn(i,e=>{try{localStorage.setItem(Cd,e?`1`:`0`)}catch{}}),Gn(n,e=>{try{localStorage.setItem(xd,JSON.stringify(e))}catch{}},{deep:!0}),Gn(r,e=>{try{localStorage.setItem(Sd,JSON.stringify(e))}catch{}});let o=G(()=>{let e=new Map(t.value.map(e=>[e.id,e])),n=[];for(let t of a.value){let r=e.get(t.id)??Wu.find(e=>e.id===t.id);r&&n.push(t.strokeWidth===void 0?r:{...r,strokeWidth:t.strokeWidth})}return n}),s=G(()=>o.value.map(e=>{let t=n.value[e.id];return!t||t.length===0||Array.isArray(e.strokes)?e:{...e,strokes:[...t]}})),c=G(()=>[...t.value,...Wu]);function l(e,n){let r={id:`custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,name:n||`自定义图案`,themeColor:Ed(e)??`#000000`,svg:e};return t.value=[...t.value,r],r}function u(e){t.value=t.value.filter(t=>t.id!==e),a.value.some(t=>t.id===e)&&(a.value=a.value.filter(t=>t.id!==e))}function d(){let e={id:`custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,name:`空白图层`,themeColor:`#000000`,svg:``,strokes:[]};return t.value=[...t.value,e],a.value=[...a.value,{id:e.id}],e}function f(t){a.value=[...a.value,{id:t,strokeWidth:e.value.penWidth}]}function p(e){let n=new Set(t.value.filter(t=>t.id!==e&&!Hu(t)).map(e=>e.id));n.size!==0&&(t.value=t.value.filter(e=>!n.has(e.id)),a.value.some(e=>n.has(e.id))&&(a.value=a.value.filter(e=>!n.has(e.id))))}function m(e,n){t.value=t.value.map(t=>t.id===e?{...t,...n}:t)}function h(e,n){t.value=t.value.map(t=>t.id===e?{...t,strokes:[...t.strokes??[],n]}:t)}function g(e){let n=t.value.find(t=>t.id===e);return!n||!n.strokes||n.strokes.length===0?!1:(t.value=t.value.map(t=>t.id===e?{...t,strokes:t.strokes.slice(0,-1)}:t),!0)}function _(e){let n=t.value.find(t=>t.id===e);return!n||!n.strokes||n.strokes.length===0?!1:(t.value=t.value.map(t=>t.id===e?{...t,strokes:[]}:t),!0)}function v(e){return n.value[e]??[]}function y(e){return Array.isArray(e.strokes)?e.strokes:n.value[e.id]??[]}function b(e){return Wu.some(t=>t.id===e)}function x(e,t){if(b(e)){let n=S(e);return h(n,t),n}return h(e,t),e}function S(e){let i=n.value[e]??[],o=t.value.find(t=>t.derivedFrom===e);if(o)return i.length>0&&(t.value=t.value.map(e=>e.id===o.id?{...e,strokes:[...e.strokes??[],...i]}:e),n.value=Xd(n.value,e)),o.id;let s=Wu.find(t=>t.id===e);if(!s)throw Error(`unknown builtin shape: ${e}`);let c={id:`custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,name:r.value[e]??s.name,themeColor:s.themeColor,svg:s.svg,strokes:[...i],derivedFrom:e};return t.value=[...t.value,c],a.value=a.value.some(t=>t.id===e)?a.value.map(t=>t.id===e?{...t,id:c.id}:t):[...a.value,{id:c.id}],i.length>0&&(n.value=Xd(n.value,e)),c.id}function C(e){if(b(e)){let t=n.value[e];if(!t||t.length===0)return!1;let r=t.slice(0,-1);return n.value=r.length>0?{...n.value,[e]:r}:Xd(n.value,e),!0}return g(e)}function w(e){return b(e)?!n.value[e]||n.value[e].length===0?!1:(n.value=Xd(n.value,e),!0):_(e)}function T(e){return r.value[e.id]??e.name}function E(e,n){let i=n.trim();i&&(t.value.find(t=>t.id===e)?t.value=t.value.map(t=>t.id===e?{...t,name:i}:t):b(e)&&(r.value={...r.value,[e]:i}))}function D(t){e.value=Zd({...e.value,...t,resolution:{...e.value.resolution,...t.resolution??{}}})}function O(){i.value=!0}function k(t,n){let r=Jd(Math.max(Math.round(t),Math.round(n)),64,zd);e.value=Zd({...e.value,resolution:{width:r,height:r}})}function A(e){a.value=e.map(e=>({...e}))}function j(){t.value.some(e=>e.id===Dd)||(t.value=[...t.value,Od()]),a.value=ef(e.value.penWidth)}return{config:e,shapeOrder:a,shapes:o,allShapes:c,customShapes:t,clearIntroSeen:i,markClearIntroSeen:O,setConfig:D,setResolution:k,setShapeOrder:A,resetSequenceToDefault:j,addCustomShape:l,removeCustomShape:u,addBlankLayer:d,pruneEmptyLayers:p,addToSequence:f,patchLayer:m,appendLayerStroke:h,undoLayerStroke:g,clearLayerStrokes:_,playbackShapes:s,extraStrokesOf:v,strokesOf:y,appendStrokeTo:x,undoStrokeOf:C,clearStrokesOf:w,displayNameOf:T,renameShape:E}});function rf(e){let t=e.trim().replace(/^#/,``);return t.length===3&&(t=t.split(``).map(e=>e+e).join(``)),/^[0-9a-fA-F]{6}$/.test(t)?{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}:{r:0,g:0,b:0}}function af(e,t,n){let r=Math.min(1,Math.max(0,n)),i=e=>Math.round(e);return{r:i(e.r+(t.r-e.r)*r),g:i(e.g+(t.g-e.g)*r),b:i(e.b+(t.b-e.b)*r)}}function of(e){let t=e=>Math.min(255,Math.max(0,e)).toString(16).padStart(2,`0`);return`#${t(e.r)}${t(e.g)}${t(e.b)}`}function sf(e,t,n){return of(af(rf(e),rf(t),n))}function cf(e){let t=Math.min(1,Math.max(0,e));return t<.5?4*t*t*t:1-(-2*t+2)**3/2}function lf(e){if(e.source.length===0||e.target.length===0)throw Error(`morph: source/target must not be empty`);let t=Math.max(e.sampleCount??256,2),n=bu(e.source,t),r=bu(e.target,t),i=Math.max(e.durationMs??2e3,1),a=e.easing??cf,o=e.sourceStrokeColor??`#000000`,s=e.targetStrokeColor??o,c=Math.max(2,Math.ceil(i/1e3*Math.max(1,e.frameRate??60))),l=Array(c);for(let e=0;e<c;e++){let i=a(c===1?1:e/(c-1)),u=Array(t);for(let e=0;e<t;e++){let t=n[e],a=r[e];u[e]={x:t.x+(a.x-t.x)*i,y:t.y+(a.y-t.y)*i}}l[e]={progress:i,points:u,strokeColor:sf(o,s,i)}}return l}function uf(e,t){if(t<=.001)return null;if(t>=.999)return e;let n=rf(e);return`rgba(${n.r},${n.g},${n.b},${t.toFixed(3).replace(/0+$/,``)})`}function df(e,t,n){return{stroke:((e,t)=>e&&t?sf(e,t,n):e?uf(e,1-n):t?uf(t,n):null)(e?.stroke,t?.stroke)}}function ff(e,t){let n=e.map(e=>gu(e)).filter(e=>e.length>=2&&vu(e)>1e-9);if(n.length===0)return[];let r=n;if(r.length===t)return r.map((e,t)=>t);let i=r.map(vu),a=i.reduce((e,t)=>e+t,0),o=r.map((e,n)=>Math.max(1,Math.round(t*i[n]/a))),s=r.map((e,t)=>t).sort((e,t)=>i[t]-i[e]),c=t-o.reduce((e,t)=>e+t,0),l=0;for(;c>0;)o[s[l%s.length]]=o[s[l%s.length]]+1,c--,l++;for(;c<0;){let e=s[l%s.length];o[e]>1&&(o[e]=o[e]-1,c++),l++}let u=[];return r.forEach((e,t)=>{for(let e=0;e<o[t];e++)u.push(t)}),u.slice(0,t)}function pf(e){return e.map(e=>gu(e)).filter(e=>e.length>=2&&vu(e)>1e-9)}function mf(e){let t=e.targetPaths.length;if(t===0)throw Error(`morph: target has no subpaths`);let n=pf(e.sourcePaths);if(n.length===0)throw Error(`morph: source has no usable subpaths`);let r=e.sourceSubpathColors??[],i=e.targetSubpathColors??[],a=e.sourceSubpathWidths??[],o=e.targetSubpathWidths??[],s=[];if(n.length<=t){let c=ku(n,t),l=ff(n,t);c.forEach((t,n)=>s.push({path:t,color:r[l[n]],width:a[l[n]]??.015,target:e.targetPaths[n],targetColor:i[n],targetWidth:o[n]??.015}))}else{let t=ku(e.targetPaths,n.length),c=ff(e.targetPaths,n.length);n.forEach((e,n)=>s.push({path:e,color:r[n],width:a[n]??.015,target:t[n],targetColor:i[c[n]],targetWidth:o[c[n]]??.015}))}let c=s.map(t=>({entry:t,frames:lf({source:t.path,target:t.target,durationMs:e.durationMs,sampleCount:e.sampleCount,easing:e.easing,frameRate:e.frameRate})})),l=c[0].frames.length,u=Array(l);for(let e=0;e<l;e++){let t=c[0].frames[e].progress;u[e]={progress:t,paths:c.map(t=>t.frames[e].points),colors:c.map(e=>df(e.entry.color,e.entry.targetColor,t)),widths:c.map(e=>e.entry.width+(e.entry.targetWidth-e.entry.width)*t)}}return u}var hf=`#000000`;function gf(){return[[{x:0,y:.5},{x:1,y:.5}]]}function _f(e,t){let n=Math.min(1,Math.max(0,t));if(n<=0)return[];if(n>=1)return e;let r=e.length;if(r===0||r===1)return[];let i=n*(r-1),a=Math.floor(i),o=i-a;if(a>=r-1)return e;if(o<1e-9)return e.slice(0,a+1);let s=e[a],c=e[a+1];return[...e.slice(0,a+1),{x:s.x+(c.x-s.x)*o,y:s.y+(c.y-s.y)*o}]}function vf(e,t,n){let r=Math.max(1,n),i=Math.max(0,e);return t.map(e=>{if(i<=0)return[];if(i>=r)return i-=r,e;let t=_f(e,i/r);return i=0,t})}function yf(e){let t=e.initialPaths??gf();if(t.length===0)return 0;let n=e.initialDurationMs===void 0?null:Math.max(0,e.initialDurationMs);return e.initialAnimation===`fade`?n??800:n===null?t.length*Math.max(0,e.strokeDrawMs??0):n}function bf(e,t,n=60,r=gf(),i=hf,a=[],o=[]){let s=new Map,c=e=>{let t=e.strokeWidth===void 0?e.id:`${e.id}@${e.strokeWidth}`,n=s.get(t);return n||(n=Uu(e),s.set(t,n)),n},l=[],u=r,d=a,f=o;for(let r of e){let e=c(r),i=e.subpaths;if(i.length===0)continue;let a=e.subpathColors,o=e.subpathWidths,s=a[0]?.stroke??`#000000`,p=mf({sourcePaths:u,targetPaths:i,sourceSubpathColors:d,targetSubpathColors:a,sourceSubpathWidths:f,targetSubpathWidths:o,durationMs:t,frameRate:n});l.push({frames:p,targetPaths:i,targetStrokeColor:s,targetSubpathColors:a,targetSubpathWidths:o}),u=i,d=a,f=o}return l}function xf(e,t){let n=yf(t);return e.length===0?n+t.holdDurationMs:n+t.holdDurationMs+e.length*t.morphDurationMs+(e.length-1)*t.holdDurationMs}function Sf(e,t,n){let r=n.initialPaths??gf(),i=n.initialStrokeColor??`#000000`,a=n.initialSubpathColors??[],o=n.initialSubpathWidths??[],{morphDurationMs:s,holdDurationMs:c}=n;if(n.initialAnimation===`fade`){let l=yf(n);if(e<l)return{paths:r,strokeColor:i,colors:a,widths:o,alpha:l>0?Math.min(1,Math.max(0,e/l)):1};let u=e-l;if(u<c||t.length===0)return{paths:r,strokeColor:i,colors:a,widths:o};let d=u-c;for(let e of t){if(d<s){let t=e.frames.length,n=Math.min(t-1,Math.floor(d/s*t)),r=e.frames[n];return{paths:r.paths,strokeColor:r.colors[0]?.stroke??`#000000`,colors:r.colors,widths:r.widths}}if(d-=s,d<c)return{paths:e.targetPaths,strokeColor:e.targetStrokeColor,colors:e.targetSubpathColors,widths:e.targetSubpathWidths};d-=c}let f=t[t.length-1];return{paths:f.targetPaths,strokeColor:f.targetStrokeColor,colors:f.targetSubpathColors,widths:f.targetSubpathWidths}}let l=r.length===0?0:n.initialDurationMs===void 0?Math.max(0,n.strokeDrawMs??0):yf(n)/r.length,u=r.length*l;if(e<u)return{paths:vf(e,r,l),strokeColor:i,colors:a,widths:o};let d=e-u;if(d<c||(d-=c,t.length===0))return{paths:r,strokeColor:i,colors:a,widths:o};for(let e of t){if(d<s){let t=e.frames.length,n=Math.min(t-1,Math.floor(d/s*t)),r=e.frames[n];return{paths:r.paths,strokeColor:r.colors[0]?.stroke??`#000000`,colors:r.colors,widths:r.widths}}if(d-=s,d<c)return{paths:e.targetPaths,strokeColor:e.targetStrokeColor,colors:e.targetSubpathColors,widths:e.targetSubpathWidths};d-=c}let f=t[t.length-1];return{paths:f.targetPaths,strokeColor:f.targetStrokeColor,colors:f.targetSubpathColors,widths:f.targetSubpathWidths}}function Cf(e,t){let n=[],r=xf(e,t);if(r<=0)return n.push({paths:t.initialPaths??gf(),strokeColor:t.initialStrokeColor??`#000000`,colors:t.initialSubpathColors??[]}),n;let i=1e3/Math.max(1,t.frameRate??60);for(let a=0;a<r;a+=i)n.push(Sf(a,e,t));return n.push(Sf(r,e,t)),n}var K=It({status:`idle`,phase:`intro`,stepIndex:-1,frameIndex:0,phaseElapsedMs:0}),wf=[],Tf=[],Ef=hf,Df=[],Of=[],kf=`stroke`,Af=0,jf=0,Mf=[],Nf=0,Pf=null,Ff=null;function If(){K.phase=`intro`,K.stepIndex=-1,K.frameIndex=0,K.phaseElapsedMs=0}function Lf(e,t,n){if(K.status===`playing`){if(K.phaseElapsedMs+=e,K.phase===`intro`){if(kf===`stroke`)for(;Nf<Mf.length&&K.phaseElapsedMs>=Mf[Nf];)yd(),Nf+=1;K.phaseElapsedMs>=Af&&(K.phase=`initial-hold`,K.phaseElapsedMs=0)}else if(K.phase===`initial-hold`)K.phaseElapsedMs>=t&&(wf.length===0?(K.phase=`done`,K.status=`done`):(vd(`change`),K.phase=`morph`,K.stepIndex=0,K.frameIndex=0,K.phaseElapsedMs=0));else if(K.phase===`morph`){let e=wf[K.stepIndex].frames.length;K.frameIndex=Math.min(e-1,Math.floor(K.phaseElapsedMs/n*e)),K.phaseElapsedMs>=n&&(K.frameIndex=e-1,K.stepIndex>=wf.length-1?(K.phase=`done`,K.status=`done`):(K.phase=`hold`,K.phaseElapsedMs=0))}else K.phase===`hold`&&K.phaseElapsedMs>=t&&(vd(`change`),K.stepIndex+=1,K.phase=`morph`,K.frameIndex=0,K.phaseElapsedMs=0)}}function Rf(e){Ff===null&&(Ff=e);let t=Math.min(e-Ff,100);Ff=e;let n=nf();Lf(t,n.config.holdDurationMs,n.config.morphDurationMs),K.status===`playing`&&(Pf=requestAnimationFrame(Rf))}function zf(){let e=nf(),t=e.playbackShapes;if(t.length===0){wf=[],Tf=[],Af=0,If(),K.status=`done`,K.phase=`done`;return}let n=t[0],r=Uu(n);if(Tf=r.subpaths,Ef=r.subpathColors[0]?.stroke??`#000000`,Df=r.subpathColors,Of=r.subpathWidths,kf=e.config.initialAnimation,Af=Tf.length===0?0:Math.max(0,e.config.initialDurationMs),jf=Tf.length===0?0:Af/Tf.length,Mf=[],Nf=0,kf===`stroke`&&jf>0)for(let e=0;e<Tf.length;e++)Tf[e].length>=2&&Mf.push(e*jf);wf=bf(t.slice(1),e.config.morphDurationMs,e.config.frameRate,Tf,Ef,Df,Of),If(),K.phase=`intro`,K.status=`playing`,Ff=null,Pf!==null&&cancelAnimationFrame(Pf),Pf=requestAnimationFrame(Rf)}function Bf(){Pf!==null&&cancelAnimationFrame(Pf),Pf=null,Ff=null,If(),K.phase=`intro`,K.status=`idle`}function Vf(){let e=G(()=>{if(K.phase===`intro`)return kf===`fade`?Tf:vf(K.phaseElapsedMs,Tf,jf);if(K.phase===`initial-hold`||wf.length===0)return Tf;let e=wf[wf.length-1];if(K.phase===`done`)return e.targetPaths;let t=wf[K.stepIndex];return K.phase===`hold`?t.targetPaths:t.frames[K.frameIndex].paths}),t=G(()=>{if(K.phase===`intro`||K.phase===`initial-hold`||wf.length===0)return Ef;let e=wf[wf.length-1];if(K.phase===`done`)return e.targetStrokeColor;let t=wf[K.stepIndex];return K.phase===`hold`?t.targetStrokeColor:t.frames[K.frameIndex].colors[0]?.stroke??`#000000`}),n=G(()=>{if(K.phase===`intro`||K.phase===`initial-hold`||wf.length===0)return Df;let e=wf[wf.length-1];if(K.phase===`done`)return e.targetSubpathColors;let t=wf[K.stepIndex];return K.phase===`hold`?t.targetSubpathColors:t.frames[K.frameIndex].colors}),r=G(()=>{if(K.phase===`intro`||K.phase===`initial-hold`||wf.length===0)return Of;let e=wf[wf.length-1];if(K.phase===`done`)return e.targetSubpathWidths;let t=wf[K.stepIndex];return K.phase===`hold`?t.targetSubpathWidths:t.frames[K.frameIndex].widths}),i=G(()=>K.phase===`intro`&&kf===`fade`&&Af>0?Math.min(1,Math.max(0,K.phaseElapsedMs/Af)):1);function a(){Pf!==null&&cancelAnimationFrame(Pf),Pf=null,Ff=null,K.phase=`done`,K.stepIndex=wf.length>0?wf.length-1:-1,K.frameIndex=0,K.phaseElapsedMs=0,K.status=`done`}return{status:G(()=>K.status),phase:G(()=>K.phase),currentPaths:e,currentStrokeColor:t,currentColors:n,currentWidths:r,currentAlpha:i,start:zf,jumpToEnd:a,reset:Bf}}var Hf=`(max-width: 768px)`;function Uf(e){let t=I(!1);if(typeof window>`u`||typeof window.matchMedia!=`function`)return t;let n=window.matchMedia(e);t.value=n.matches;let r=e=>{t.value=e.matches};return n.addEventListener(`change`,r),Ee(()=>n.removeEventListener(`change`,r)),t}function Wf(){return Uf(Hf)}var Gf=typeof window<`u`,Kf=(e,t=!1)=>t?Symbol.for(e):Symbol(e),qf=(e,t,n)=>Jf({l:e,k:t,s:n}),Jf=e=>JSON.stringify(e).replace(/\u2028/g,`\\u2028`).replace(/\u2029/g,`\\u2029`).replace(/\u0027/g,`\\u0027`),Yf=e=>typeof e==`number`&&isFinite(e),Xf=e=>lp(e)===`[object Date]`,Zf=e=>lp(e)===`[object RegExp]`,Qf=e=>Z(e)&&Object.keys(e).length===0,$f=Object.assign,ep=Object.create,q=(e=null)=>ep(e),tp,np=()=>tp||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:q(),rp=Object.prototype.hasOwnProperty;function ip(e,t){return rp.call(e,t)}var ap=Array.isArray,op=e=>typeof e==`function`,J=e=>typeof e==`string`,Y=e=>typeof e==`boolean`,X=e=>typeof e==`object`&&!!e,sp=e=>X(e)&&op(e.then)&&op(e.catch),cp=Object.prototype.toString,lp=e=>cp.call(e),Z=e=>lp(e)===`[object Object]`,up=e=>e==null?``:ap(e)||Z(e)&&e.toString===cp?JSON.stringify(e,null,2):String(e);function dp(e,t=``){return e.reduce((e,n,r)=>r===0?e+n:e+t+n,``)}function fp(e,t){typeof console<`u`&&(console.warn(`[intlify] `+e),t&&console.warn(t.stack))}function pp(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`).replace(/\//g,`&#x2F;`).replace(/=/g,`&#x3D;`)}function mp(e){return e.replace(/&(?![a-z0-9#]{2,6};)/gi,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}var hp=/^javascript:/i,gp=/^(?:href|src|action|formaction)$/i,_p=/&#(?:x([0-9a-f]+)|(\d+));?/gi,vp=/&(?:Tab|NewLine);/g,yp=/&colon;?/gi,bp=/[\u0000-\u0020\u007f-\u009f]/g,xp=/(?:^|[\s"'<>/])on\w+\s*=\s*["']?[^"'>]+["']?/i,Sp=/(^|[\s"'<>/])on(\w+\s*=)/gi,Cp=/(^|[\s"'<>/])((?:href|src|action|formaction)\s*=\s*)([^\s"'=<>`]+)/gi;function wp(e,t,n){let r=t||n;if(!r)return e;let i=Number.parseInt(r,t?16:10);return i<=127?String.fromCharCode(i):e}function Tp(e){let t=e.replace(_p,wp).replace(vp,``).replace(yp,`:`).replace(bp,``);return hp.test(t)}function Ep(e){let t=/url\s*\(/gi,n=``,r=0,i;for(;(i=t.exec(e))!==null;){let a=i.index,o=t.lastIndex-1,s=o+1,c=1,l=null;for(;s<e.length;s++){let t=e[s];if(l){t===l&&(l=null);continue}if(t===`"`||t===`'`)l=t;else if(t===`(`)c++;else if(t===`)`&&(c--,c===0))break}if(c!==0)break;let u=e.slice(o+1,s).trim(),d=u.startsWith(`"`)&&u.endsWith(`"`)||u.startsWith(`'`)&&u.endsWith(`'`)?u.slice(1,-1).trim():u;n+=e.slice(r,a),n+=Tp(d)?`url(about:blank)`:e.slice(a,s+1),r=s+1}return n+e.slice(r)}function Dp(e,t){return gp.test(e)&&Tp(t)?`about:blank`:mp(e.toLowerCase()===`style`?Ep(t):t)}function Op(e){return e=e.replace(/([\w:-]+)\s*=\s*"([^"]*)"/g,(e,t,n)=>`${t}="${Dp(t,n)}"`),e=e.replace(/([\w:-]+)\s*=\s*'([^']*)'/g,(e,t,n)=>`${t}='${Dp(t,n)}'`),xp.test(e)&&(e=e.replace(Sp,`$1&#111;n$2`)),e=e.replace(Cp,(e,t,n,r)=>Tp(r)?`${t}${n}about:blank`:e),e}var kp=e=>!X(e)||ap(e);function Ap(e,t){if(kp(e)||kp(t))throw Error(`Invalid value`);let n=[{src:e,des:t}];for(;n.length;){let{src:e,des:t}=n.pop();Object.keys(e).forEach(r=>{if(r===`__proto__`)return;let i=e[r];if(ap(i)){let e=[];e.length=i.length,t[r]=e,n.push({src:i,des:e})}else X(i)?((!X(t[r])||ap(t[r]))&&(t[r]=q()),n.push({src:i,des:t[r]})):t[r]=i})}}function jp(e,t,n){return{line:e,column:t,offset:n}}function Mp(e,t,n){let r={start:e,end:t};return n!=null&&(r.source=n),r}var Q={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16};Q.EXPECTED_TOKEN,Q.INVALID_TOKEN_IN_PLACEHOLDER,Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,Q.UNKNOWN_ESCAPE_SEQUENCE,Q.INVALID_UNICODE_ESCAPE_SEQUENCE,Q.UNBALANCED_CLOSING_BRACE,Q.UNTERMINATED_CLOSING_BRACE,Q.EMPTY_PLACEHOLDER,Q.NOT_ALLOW_NEST_PLACEHOLDER,Q.INVALID_LINKED_FORMAT,Q.MUST_HAVE_MESSAGES_IN_PLURAL,Q.UNEXPECTED_EMPTY_LINKED_MODIFIER,Q.UNEXPECTED_EMPTY_LINKED_KEY,Q.UNEXPECTED_LEXICAL_ANALYSIS,Q.UNHANDLED_CODEGEN_NODE_TYPE,Q.UNHANDLED_MINIFIER_NODE_TYPE;function Np(e,t,n={}){let{domain:r,messages:i,args:a}=n,o=SyntaxError(String(e));return o.code=e,t&&(o.location=t),o.domain=r,o}function Pp(e){throw e}var Fp=` `,Ip=`\r`,Lp=`
`,Rp=`\u2028`,zp=`\u2029`;function Bp(e){let t=e,n=0,r=1,i=1,a=0,o=e=>t[e]===Ip&&t[e+1]===Lp,s=e=>t[e]===Lp,c=e=>t[e]===zp,l=e=>t[e]===Rp,u=e=>o(e)||s(e)||c(e)||l(e),d=()=>n,f=()=>r,p=()=>i,m=()=>a,h=e=>o(e)||c(e)||l(e)?Lp:t[e],g=()=>h(n),_=()=>h(n+a);function v(){return a=0,u(n)&&(r++,i=0),o(n)&&n++,n++,i++,t[n]}function y(){return o(n+a)&&a++,a++,t[n+a]}function b(){n=0,r=1,i=1,a=0}function x(e=0){a=e}function S(){let e=n+a;for(;e!==n;)v();a=0}return{index:d,line:f,column:p,peekOffset:m,charAt:h,currentChar:g,currentPeek:_,next:v,peek:y,reset:b,resetPeek:x,skipToPeek:S}}var Vp=void 0,Hp=`'`,Up=`tokenizer`;function Wp(e,t={}){let n=t.location!==!1,r=Bp(e),i=()=>r.index(),a=()=>jp(r.line(),r.column(),r.index()),o=a(),s=i(),c={currentType:13,offset:s,startLoc:o,endLoc:o,lastType:13,lastOffset:s,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:``},l=()=>c,{onError:u}=t;function d(e,t,r,...i){let a=l();if(t.column+=r,t.offset+=r,u){let r=Np(e,n?Mp(a.startLoc,t):null,{domain:Up,args:i});u(r)}}function f(e,t,r){e.endLoc=a(),e.currentType=t;let i={type:t};return n&&(i.loc=Mp(e.startLoc,e.endLoc)),r!=null&&(i.value=r),i}let p=e=>f(e,13);function m(e,t){return e.currentChar()===t?(e.next(),t):(d(Q.EXPECTED_TOKEN,a(),0,t),``)}function h(e){let t=``;for(;e.currentPeek()===Fp||e.currentPeek()===Lp;)t+=e.currentPeek(),e.peek();return t}function g(e){let t=h(e);return e.skipToPeek(),t}function _(e){if(e===Vp)return!1;let t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t===95}function v(e){if(e===Vp)return!1;let t=e.charCodeAt(0);return t>=48&&t<=57}function y(e,t){let{currentType:n}=t;if(n!==2)return!1;h(e);let r=_(e.currentPeek());return e.resetPeek(),r}function b(e,t){let{currentType:n}=t;if(n!==2)return!1;h(e);let r=v(e.currentPeek()===`-`?e.peek():e.currentPeek());return e.resetPeek(),r}function x(e,t){let{currentType:n}=t;if(n!==2)return!1;h(e);let r=e.currentPeek()===Hp;return e.resetPeek(),r}function S(e,t){let{currentType:n}=t;if(n!==7)return!1;h(e);let r=e.currentPeek()===`.`;return e.resetPeek(),r}function C(e,t){let{currentType:n}=t;if(n!==8)return!1;h(e);let r=_(e.currentPeek());return e.resetPeek(),r}function w(e,t){let{currentType:n}=t;if(n!==7&&n!==11)return!1;h(e);let r=e.currentPeek()===`:`;return e.resetPeek(),r}function T(e,t){let{currentType:n}=t;if(n!==9)return!1;let r=()=>{let t=e.currentPeek();return t===`{`?_(e.peek()):t===`@`||t===`|`||t===`:`||t===`.`||t===Fp||!t?!1:t===Lp?(e.peek(),r()):D(e,!1)},i=r();return e.resetPeek(),i}function E(e){h(e);let t=e.currentPeek()===`|`;return e.resetPeek(),t}function D(e,t=!0){let n=(t=!1,r=``)=>{let i=e.currentPeek();return i===`{`||i===`@`||!i?t:i===`|`?r!==Fp&&r!==Lp:i===Fp?(e.peek(),n(!0,Fp)):i!==Lp||(e.peek(),n(!0,Lp))},r=n();return t&&e.resetPeek(),r}function O(e,t){let n=e.currentChar();if(n!==Vp)return t(n)?(e.next(),n):null}function k(e){let t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||t===95||t===36}function A(e){return O(e,k)}function j(e){let t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||t===95||t===36||t===45}function ee(e){return O(e,j)}function te(e){let t=e.charCodeAt(0);return t>=48&&t<=57}function M(e){return O(e,te)}function ne(e){let t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}function re(e){return O(e,ne)}function ie(e){let t=``,n=``;for(;t=M(e);)n+=t;return n}function ae(e){let t=``;for(;;){let n=e.currentChar();if(n===`\\`){let r=e.peek();r===`{`||r===`}`||r===`@`||r===`|`||r===`\\`?(t+=n+r,e.next(),e.next()):(e.resetPeek(),t+=n,e.next())}else if(n===`{`||n===`}`||n===`@`||n===`|`||!n)break;else if(n===Fp||n===Lp){if(D(e))t+=n,e.next();else if(E(e))break;else t+=n,e.next()}else t+=n,e.next()}return t}function oe(e){g(e);let t=``,n=``;for(;t=ee(e);)n+=t;let r=e.currentChar();if(r&&r!==`}`&&r!==Vp&&r!==Fp&&r!==Lp&&r!==`　`){let t=pe(e);return d(Q.INVALID_TOKEN_IN_PLACEHOLDER,a(),0,n+t),n+t}return e.currentChar()===Vp&&d(Q.UNTERMINATED_CLOSING_BRACE,a(),0),n}function se(e){g(e);let t=``;return e.currentChar()===`-`?(e.next(),t+=`-${ie(e)}`):t+=ie(e),e.currentChar()===Vp&&d(Q.UNTERMINATED_CLOSING_BRACE,a(),0),t}function ce(e){return e!==Hp&&e!==Lp}function le(e){g(e),m(e,`'`);let t=``,n=``;for(;t=O(e,ce);)n+=t===`\\`?ue(e):t;let r=e.currentChar();return r===Lp||r===Vp?(d(Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,a(),0),r===Lp&&(e.next(),m(e,`'`)),n):(m(e,`'`),n)}function ue(e){let t=e.currentChar();switch(t){case`\\`:case`'`:return e.next(),`\\${t}`;case`u`:return de(e,t,4);case`U`:return de(e,t,6);default:return d(Q.UNKNOWN_ESCAPE_SEQUENCE,a(),0,t),``}}function de(e,t,n){m(e,t);let r=``;for(let i=0;i<n;i++){let n=re(e);if(!n){d(Q.INVALID_UNICODE_ESCAPE_SEQUENCE,a(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function fe(e){return e!==`{`&&e!==`}`&&e!==Fp&&e!==Lp}function pe(e){g(e);let t=``,n=``;for(;t=O(e,fe);)n+=t;return n}function me(e){let t=``,n=``;for(;t=A(e);)n+=t;return n}function he(e){let t=n=>{let r=e.currentChar();return r===`{`||r===`@`||r===`|`||r===`(`||r===`)`||!r||r===Fp?n:(n+=r,e.next(),t(n))};return t(``)}function ge(e){g(e);let t=m(e,`|`);return g(e),t}function _e(e,t){let n=null;switch(e.currentChar()){case`{`:return t.braceNest>=1&&d(Q.NOT_ALLOW_NEST_PLACEHOLDER,a(),0),e.next(),n=f(t,2,`{`),g(e),t.braceNest++,n;case`}`:return t.braceNest>0&&t.currentType===2&&d(Q.EMPTY_PLACEHOLDER,a(),0),e.next(),n=f(t,3,`}`),t.braceNest--,t.braceNest>0&&g(e),t.inLinked&&t.braceNest===0&&(t.inLinked=!1),n;case`@`:return t.braceNest>0&&d(Q.UNTERMINATED_CLOSING_BRACE,a(),0),n=ve(e,t)||p(t),t.braceNest=0,n;default:{let r=!0,i=!0,o=!0;if(E(e))return t.braceNest>0&&d(Q.UNTERMINATED_CLOSING_BRACE,a(),0),n=f(t,1,ge(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(t.currentType===4||t.currentType===5||t.currentType===6))return d(Q.UNTERMINATED_CLOSING_BRACE,a(),0),t.braceNest=0,ye(e,t);if(r=y(e,t))return n=f(t,4,oe(e)),g(e),n;if(i=b(e,t))return n=f(t,5,se(e)),g(e),n;if(o=x(e,t))return n=f(t,6,le(e)),g(e),n;if(!r&&!i&&!o)return n=f(t,12,pe(e)),d(Q.INVALID_TOKEN_IN_PLACEHOLDER,a(),0,n.value),g(e),n;break}}return n}function ve(e,t){let{currentType:n}=t,r=null,i=e.currentChar();switch((n===7||n===8||n===11||n===9)&&(i===Lp||i===Fp)&&d(Q.INVALID_LINKED_FORMAT,a(),0),i){case`@`:return e.next(),r=f(t,7,`@`),t.inLinked=!0,r;case`.`:return g(e),e.next(),f(t,8,`.`);case`:`:return g(e),e.next(),f(t,9,`:`);default:return E(e)?(r=f(t,1,ge(e)),t.braceNest=0,t.inLinked=!1,r):S(e,t)||w(e,t)?(g(e),ve(e,t)):C(e,t)?(g(e),f(t,11,me(e))):T(e,t)?(g(e),i===`{`?_e(e,t)||r:f(t,10,he(e))):(n===7&&d(Q.INVALID_LINKED_FORMAT,a(),0),t.braceNest=0,t.inLinked=!1,ye(e,t))}}function ye(e,t){let n={type:13};if(t.braceNest>0)return _e(e,t)||p(t);if(t.inLinked)return ve(e,t)||p(t);switch(e.currentChar()){case`{`:return _e(e,t)||p(t);case`}`:return d(Q.UNBALANCED_CLOSING_BRACE,a(),0),e.next(),f(t,3,`}`);case`@`:return ve(e,t)||p(t);default:if(E(e))return n=f(t,1,ge(e)),t.braceNest=0,t.inLinked=!1,n;if(D(e))return f(t,0,ae(e))}return n}function N(){let{currentType:e,offset:t,startLoc:n,endLoc:o}=c;return c.lastType=e,c.lastOffset=t,c.lastStartLoc=n,c.lastEndLoc=o,c.offset=i(),c.startLoc=a(),r.currentChar()===Vp?f(c,13):ye(r,c)}return{nextToken:N,currentOffset:i,currentPosition:a,context:l}}var Gp=`parser`,Kp=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,qp=/\\([\\@{}|])/g;function Jp(e,t){return t}function Yp(e,t,n){switch(e){case`\\\\`:return`\\`;case`\\'`:return`'`;default:{let e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):`�`}}}function Xp(e={}){let t=e.location!==!1,{onError:n}=e;function r(e,r,i,a,...o){let s=e.currentPosition();if(s.offset+=a,s.column+=a,n){let e=Np(r,t?Mp(i,s):null,{domain:Gp,args:o});n(e)}}function i(e,n,r){let i={type:e};return t&&(i.start=n,i.end=n,i.loc={start:r,end:r}),i}function a(e,n,r,i){t&&(e.end=n,e.loc&&(e.loc.end=r))}function o(e,t){let n=e.context(),r=i(3,n.offset,n.startLoc);return r.value=t.replace(qp,Jp),a(r,e.currentOffset(),e.currentPosition()),r}function s(e,t){let{lastOffset:n,lastStartLoc:r}=e.context(),o=i(5,n,r);return o.index=parseInt(t,10),e.nextToken(),a(o,e.currentOffset(),e.currentPosition()),o}function c(e,t){let{lastOffset:n,lastStartLoc:r}=e.context(),o=i(4,n,r);return o.key=t,e.nextToken(),a(o,e.currentOffset(),e.currentPosition()),o}function l(e,t){let{lastOffset:n,lastStartLoc:r}=e.context(),o=i(9,n,r);return o.value=t.replace(Kp,Yp),e.nextToken(),a(o,e.currentOffset(),e.currentPosition()),o}function u(e){let t=e.nextToken(),n=e.context(),{lastOffset:o,lastStartLoc:s}=n,c=i(8,o,s);return t.type===11?(t.value??r(e,Q.UNEXPECTED_LEXICAL_ANALYSIS,n.lastStartLoc,0,Zp(t)),c.value=t.value||``,a(c,e.currentOffset(),e.currentPosition()),{node:c}):(r(e,Q.UNEXPECTED_EMPTY_LINKED_MODIFIER,n.lastStartLoc,0),c.value=``,a(c,o,s),{nextConsumeToken:t,node:c})}function d(e,t){let n=e.context(),r=i(7,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}function f(e){let t=e.context(),n=i(6,t.offset,t.startLoc),o=e.nextToken();if(o.type===8){let t=u(e);n.modifier=t.node,o=t.nextConsumeToken||e.nextToken()}switch(o.type!==9&&r(e,Q.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Zp(o)),o=e.nextToken(),o.type===2&&(o=e.nextToken()),o.type){case 10:o.value??r(e,Q.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Zp(o)),n.key=d(e,o.value||``);break;case 4:o.value??r(e,Q.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Zp(o)),n.key=c(e,o.value||``);break;case 5:o.value??r(e,Q.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Zp(o)),n.key=s(e,o.value||``);break;case 6:o.value??r(e,Q.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Zp(o)),n.key=l(e,o.value||``);break;default:{r(e,Q.UNEXPECTED_EMPTY_LINKED_KEY,t.lastStartLoc,0);let s=e.context(),c=i(7,s.offset,s.startLoc);return c.value=``,a(c,s.offset,s.startLoc),n.key=c,a(n,s.offset,s.startLoc),{nextConsumeToken:o,node:n}}}return a(n,e.currentOffset(),e.currentPosition()),{node:n}}function p(e){let t=e.context(),n=i(2,t.currentType===1?e.currentOffset():t.offset,t.currentType===1?t.endLoc:t.startLoc);n.items=[];let u=null;do{let i=u||e.nextToken();switch(u=null,i.type){case 0:i.value??r(e,Q.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Zp(i)),n.items.push(o(e,i.value||``));break;case 5:i.value??r(e,Q.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Zp(i)),n.items.push(s(e,i.value||``));break;case 4:i.value??r(e,Q.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Zp(i)),n.items.push(c(e,i.value||``));break;case 6:i.value??r(e,Q.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Zp(i)),n.items.push(l(e,i.value||``));break;case 7:{let t=f(e);n.items.push(t.node),u=t.nextConsumeToken||null;break}}}while(t.currentType!==13&&t.currentType!==1);return a(n,t.currentType===1?t.lastOffset:e.currentOffset(),t.currentType===1?t.lastEndLoc:e.currentPosition()),n}function m(e,t,n,o){let s=e.context(),c=o.items.length===0,l=i(1,t,n);l.cases=[],l.cases.push(o);do{let t=p(e);c||=t.items.length===0,l.cases.push(t)}while(s.currentType!==13);return c&&r(e,Q.MUST_HAVE_MESSAGES_IN_PLURAL,n,0),a(l,e.currentOffset(),e.currentPosition()),l}function h(e){let t=e.context(),{offset:n,startLoc:r}=t,i=p(e);return t.currentType===13?i:m(e,n,r,i)}function g(n){let o=Wp(n,$f({},e)),s=o.context(),c=i(0,s.offset,s.startLoc);return t&&c.loc&&(c.loc.source=n),c.body=h(o),e.onCacheKey&&(c.cacheKey=e.onCacheKey(n)),s.currentType!==13&&r(o,Q.UNEXPECTED_LEXICAL_ANALYSIS,s.lastStartLoc,0,n[s.offset]||``),a(c,o.currentOffset(),o.currentPosition()),c}return{parse:g}}function Zp(e){if(e.type===13)return`EOF`;let t=(e.value||``).replace(/\r?\n/gu,`\\n`);return t.length>10?t.slice(0,9)+`…`:t}function Qp(e,t={}){let n={ast:e,helpers:new Set};return{context:()=>n,helper:e=>(n.helpers.add(e),e)}}function $p(e,t){for(let n=0;n<e.length;n++)em(e[n],t)}function em(e,t){switch(e.type){case 1:$p(e.cases,t),t.helper(`plural`);break;case 2:$p(e.items,t);break;case 6:em(e.key,t),t.helper(`linked`),t.helper(`type`);break;case 5:t.helper(`interpolate`),t.helper(`list`);break;case 4:t.helper(`interpolate`),t.helper(`named`)}}function tm(e,t={}){let n=Qp(e);n.helper(`normalize`),e.body&&em(e.body,n);let r=n.context();e.helpers=Array.from(r.helpers)}function nm(e){let t=e.body;return t.type===2?rm(t):t.cases.forEach(e=>rm(e)),e}function rm(e){if(e.items.length===1){let t=e.items[0];(t.type===3||t.type===9)&&(e.static=t.value,delete t.value)}else{let t=[];for(let n=0;n<e.items.length;n++){let r=e.items[n];if(r.type!==3&&r.type!==9||r.value==null)break;t.push(r.value)}if(t.length===e.items.length){e.static=dp(t);for(let t=0;t<e.items.length;t++){let n=e.items[t];(n.type===3||n.type===9)&&delete n.value}}}}function im(e){switch(e.t=e.type,e.type){case 0:{let t=e;im(t.body),t.b=t.body,delete t.body;break}case 1:{let t=e,n=t.cases;for(let e=0;e<n.length;e++)im(n[e]);t.c=n,delete t.cases;break}case 2:{let t=e,n=t.items;for(let e=0;e<n.length;e++)im(n[e]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{let t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{let t=e;im(t.key),t.k=t.key,delete t.key,t.modifier&&(im(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{let t=e;t.i=t.index,delete t.index;break}case 4:{let t=e;t.k=t.key,delete t.key;break}}delete e.type}function am(e,t){let{filename:n,breakLineCode:r,needIndent:i}=t,a=t.location!==!1,o={filename:n,code:``,column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:i,indentLevel:0};a&&e.loc&&(o.source=e.loc.source);let s=()=>o;function c(e,t){o.code+=e}function l(e,t=!0){let n=t?r:``;c(i?n+`  `.repeat(e):n)}function u(e=!0){let t=++o.indentLevel;e&&l(t)}function d(e=!0){let t=--o.indentLevel;e&&l(t)}function f(){l(o.indentLevel)}return{context:s,push:c,indent:u,deindent:d,newline:f,helper:e=>`_${e}`,needIndent:()=>o.needIndent}}function om(e,t){let{helper:n}=e;e.push(`${n(`linked`)}(`),um(e,t.key),t.modifier?(e.push(`, `),um(e,t.modifier),e.push(`, _type`)):e.push(`, undefined, _type`),e.push(`)`)}function sm(e,t){let{helper:n,needIndent:r}=e;e.push(`${n(`normalize`)}([`),e.indent(r());let i=t.items.length;for(let n=0;n<i&&(um(e,t.items[n]),n!==i-1);n++)e.push(`, `);e.deindent(r()),e.push(`])`)}function cm(e,t){let{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n(`plural`)}([`),e.indent(r());let i=t.cases.length;for(let n=0;n<i&&(um(e,t.cases[n]),n!==i-1);n++)e.push(`, `);e.deindent(r()),e.push(`])`)}}function lm(e,t){t.body?um(e,t.body):e.push(`null`)}function um(e,t){let{helper:n}=e;switch(t.type){case 0:lm(e,t);break;case 1:cm(e,t);break;case 2:sm(e,t);break;case 6:om(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n(`interpolate`)}(${n(`list`)}(${t.index}))`,t);break;case 4:e.push(`${n(`interpolate`)}(${n(`named`)}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t)}}var dm=(e,t={})=>{let n=J(t.mode)?t.mode:`normal`,r=J(t.filename)?t.filename:`message.intl`;t.sourceMap;let i=t.breakLineCode==null?n===`arrow`?`;`:`
`:t.breakLineCode,a=t.needIndent?t.needIndent:n!==`arrow`,o=e.helpers||[],s=am(e,{filename:r,breakLineCode:i,needIndent:a});s.push(n===`normal`?`function __msg__ (ctx) {`:`(ctx) => {`),s.indent(a),o.length>0&&(s.push(`const { ${dp(o.map(e=>`${e}: _${e}`),`, `)} } = ctx`),s.newline()),s.push(`return `),um(s,e),s.deindent(a),s.push(`}`),delete e.helpers;let{code:c,map:l}=s.context();return{ast:e,code:c,map:l?l.toJSON():void 0}};function fm(e,t={}){let n=$f({},t),r=!!n.jit,i=!!n.minify,a=n.optimize==null||n.optimize,o=Xp(n).parse(e);return r?(a&&nm(o),i&&im(o),{ast:o,code:``}):(tm(o,n),dm(o,n))}function pm(){typeof __INTLIFY_PROD_DEVTOOLS__!=`boolean`&&(np().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!=`boolean`&&(np().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function mm(e){return X(e)&&wm(e)===0&&(ip(e,`b`)||ip(e,`body`))}var hm=[`b`,`body`];function gm(e){return jm(e,hm)}var _m=[`c`,`cases`];function vm(e){return jm(e,_m,[])}var ym=[`s`,`static`];function bm(e){return jm(e,ym)}var xm=[`i`,`items`];function Sm(e){return jm(e,xm,[])}var Cm=[`t`,`type`];function wm(e){return jm(e,Cm)}var Tm=[`v`,`value`];function Em(e,t){let n=jm(e,Tm);if(n!=null)return n;throw Nm(t)}var Dm=[`m`,`modifier`];function Om(e){return jm(e,Dm)}var km=[`k`,`key`];function Am(e){let t=jm(e,km);if(t)return t;throw Nm(6)}function jm(e,t,n){for(let n=0;n<t.length;n++){let r=t[n];if(ip(e,r)&&e[r]!=null)return e[r]}return n}var Mm=[...hm,..._m,...ym,...xm,...km,...Dm,...Tm,...Cm];function Nm(e){return Error(`unhandled node type: ${e}`)}function Pm(e){return t=>Fm(t,e)}function Fm(e,t){let n=gm(t);if(n==null)throw Nm(0);if(wm(n)===1){let t=vm(n);return e.plural(t.reduce((t,n)=>[...t,Im(e,n)],[]))}return Im(e,n)}function Im(e,t){let n=bm(t);if(n!=null)return e.type===`text`?n:e.normalize([n]);{let n=Sm(t).reduce((t,n)=>[...t,Lm(e,n)],[]);return e.normalize(n)}}function Lm(e,t){let n=wm(t);switch(n){case 3:return Em(t,n);case 9:return Em(t,n);case 4:{let r=t;if(ip(r,`k`)&&r.k)return e.interpolate(e.named(r.k));if(ip(r,`key`)&&r.key)return e.interpolate(e.named(r.key));throw Nm(n)}case 5:{let r=t;if(ip(r,`i`)&&Yf(r.i))return e.interpolate(e.list(r.i));if(ip(r,`index`)&&Yf(r.index))return e.interpolate(e.list(r.index));throw Nm(n)}case 6:{let n=t,r=Om(n),i=Am(n);return e.linked(Lm(e,i),r?Lm(e,r):void 0,e.type)}case 7:return Em(t,n);case 8:return Em(t,n);default:throw Error(`unhandled node on format message part: ${n}`)}}var Rm=e=>e,zm=q();function Bm(e,t={}){let n=!1,r=t.onError||Pp;return t.onError=e=>{n=!0,r(e)},{...fm(e,t),detectError:n}}function Vm(e,t){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&J(e)){Y(t.warnHtmlMessage)&&t.warnHtmlMessage;let n=(t.onCacheKey||Rm)(e),r=zm[n];if(r)return r;let{ast:i,detectError:a}=Bm(e,{...t,location:!1,jit:!0}),o=Pm(i);return a?o:zm[n]=o}{let t=e.cacheKey;return t?zm[t]||(zm[t]=Pm(e)):Pm(e)}}var Hm=null;function Um(e){Hm=e}function Wm(e,t,n){Hm&&Hm.emit(`i18n:init`,{timestamp:Date.now(),i18n:e,version:t,meta:n})}var Gm=Km(`function:translate`);function Km(e){return t=>Hm&&Hm.emit(e,t)}var qm={INVALID_ARGUMENT:17,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_NON_STRING_MESSAGE:20,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23};function Jm(e){return Np(e,null,void 0)}qm.INVALID_ARGUMENT,qm.INVALID_DATE_ARGUMENT,qm.INVALID_ISO_DATE_ARGUMENT,qm.NOT_SUPPORT_NON_STRING_MESSAGE,qm.NOT_SUPPORT_LOCALE_PROMISE_VALUE,qm.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION,qm.NOT_SUPPORT_LOCALE_TYPE;function Ym(e,t){return t.locale==null?Zm(e.locale):Zm(t.locale)}var Xm;function Zm(e){if(J(e))return e;if(op(e)){if(e.resolvedOnce&&Xm!=null)return Xm;if(e.constructor.name===`Function`){let t=e();if(sp(t))throw Jm(qm.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Xm=t}throw Jm(qm.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}throw Jm(qm.NOT_SUPPORT_LOCALE_TYPE)}function Qm(e,t,n){return[...new Set([n,...ap(t)?t:X(t)?Object.keys(t).filter(e=>e!=="default"):J(t)?[t]:[n]])]}function $m(e,t,n){let r=J(n)?n:hh,i=e;i.__localeChainCache||=new Map;let a=Jf(t),o=i.__localeChainCache.get(r);o||(o=new Map,i.__localeChainCache.set(r,o));let s=o.get(a);if(s)return s;let c=[],l=[n];for(;ap(l);)l=eh(c,l,t);let u=ap(t)||!Z(t)?t:t.default?t.default:null;return l=J(u)?[u]:u,ap(l)&&eh(c,l,!1),o.set(a,c),c}function eh(e,t,n){let r=!0;for(let i=0;i<t.length&&Y(r);i++){let a=t[i];J(a)&&(r=th(e,t[i],n))}return r}function th(e,t,n){let r,i=t.split(`-`);do r=nh(e,i.join(`-`),n),i.splice(-1,1);while(i.length&&r===!0);return r}function nh(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!==`!`;let i=t.replace(/!/g,``);e.push(i),(ap(n)||Z(n))&&n[i]&&(r=n[i])}return r}var rh=[];rh[0]={w:[0],i:[3,0],"[":[4],o:[7]},rh[1]={w:[1],".":[2],"[":[4],o:[7]},rh[2]={w:[2],i:[3,0],0:[3,0]},rh[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]},rh[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]},rh[5]={"'":[4,0],o:8,l:[5,0]},rh[6]={'"':[4,0],o:8,l:[6,0]};var ih=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ah(e){return ih.test(e)}function oh(e){let t=e.charCodeAt(0);return t===e.charCodeAt(e.length-1)&&(t===34||t===39)?e.slice(1,-1):e}function sh(e){if(e==null)return`o`;switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return`i`;case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return`w`}return`i`}function ch(e){let t=e.trim();return e.charAt(0)===`0`&&isNaN(parseInt(e))?!1:ah(t)?oh(t):`*`+t}function lh(e){let t=[],n=-1,r=0,i=0,a,o,s,c,l,u,d,f=[];f[0]=()=>{o===void 0?o=s:o+=s},f[1]=()=>{o!==void 0&&(t.push(o),o=void 0)},f[2]=()=>{f[0](),i++},f[3]=()=>{if(i>0)i--,r=4,f[0]();else{if(i=0,o===void 0||(o=ch(o),o===!1))return!1;f[1]()}};function p(){let t=e[n+1];if(r===5&&t===`'`||r===6&&t===`"`)return n++,s=`\\`+t,f[0](),!0}for(;r!==null;)if(n++,a=e[n],!(a===`\\`&&p())){if(c=sh(a),d=rh[r],l=d[c]||d.l||8,l===8||(r=l[0],l[1]!==void 0&&(u=f[l[1]],u&&(s=a,u()===!1))))return;if(r===7)return t}}var uh=new Map;function dh(e,t){return X(e)?e[t]:null}function fh(e,t){if(!X(e))return null;let n=uh.get(t);if(n||(n=lh(t),n&&uh.set(t,n)),!n)return null;let r=n.length,i=e,a=0;for(;a<r;){let e=n[a];if(Mm.includes(e)&&mm(i)||!X(i)||!ip(i,e))return null;let t=i[e];if(t===void 0||op(i))return null;i=t,a++}return i}var ph={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,INVALID_NUMBER_ARGUMENT:8,INVALID_DATE_ARGUMENT:9};ph.NOT_FOUND_KEY,ph.FALLBACK_TO_TRANSLATE,ph.CANNOT_FORMAT_NUMBER,ph.FALLBACK_TO_NUMBER_FORMAT,ph.CANNOT_FORMAT_DATE,ph.FALLBACK_TO_DATE_FORMAT,ph.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER,ph.INVALID_NUMBER_ARGUMENT,ph.INVALID_DATE_ARGUMENT;var mh=`11.4.10`,hh=`en-US`,gh=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function _h(){return{upper:(e,t)=>t===`text`&&J(e)?e.toUpperCase():t===`vnode`&&X(e)&&`__v_isVNode`in e?e.children.toUpperCase():e,lower:(e,t)=>t===`text`&&J(e)?e.toLowerCase():t===`vnode`&&X(e)&&`__v_isVNode`in e?e.children.toLowerCase():e,capitalize:(e,t)=>t===`text`&&J(e)?gh(e):t===`vnode`&&X(e)&&`__v_isVNode`in e?gh(e.children):e}}var vh;function yh(e){vh=e}var bh;function xh(e){bh=e}var Sh;function Ch(e){Sh=e}var wh=null,Th=()=>wh,Eh=null,Dh=e=>{Eh=e},Oh=()=>Eh,kh=0;function Ah(e={}){let t=op(e.onWarn)?e.onWarn:fp,n=J(e.version)?e.version:mh,r=J(e.locale)||op(e.locale)?e.locale:hh,i=op(r)?hh:r,a=ap(e.fallbackLocale)||Z(e.fallbackLocale)||J(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i,o=Z(e.messages)?e.messages:jh(i),s=Z(e.datetimeFormats)?e.datetimeFormats:jh(i),c=Z(e.numberFormats)?e.numberFormats:jh(i),l=$f(q(),e.modifiers,_h()),u=e.pluralRules||q(),d=op(e.missing)?e.missing:null,f=Y(e.missingWarn)||Zf(e.missingWarn)?e.missingWarn:!0,p=Y(e.fallbackWarn)||Zf(e.fallbackWarn)?e.fallbackWarn:!0,m=!!e.fallbackFormat,h=!!e.unresolving,g=op(e.postTranslation)?e.postTranslation:null,_=Z(e.processor)?e.processor:null,v=!Y(e.warnHtmlMessage)||e.warnHtmlMessage,y=!!e.escapeParameter,b=op(e.messageCompiler)?e.messageCompiler:vh,x=op(e.messageResolver)?e.messageResolver:bh||dh,S=op(e.localeFallbacker)?e.localeFallbacker:Sh||Qm,C=X(e.fallbackContext)?e.fallbackContext:void 0,w=e,T=X(w.__datetimeFormatters)?w.__datetimeFormatters:new Map,E=X(w.__numberFormatters)?w.__numberFormatters:new Map,D=X(w.__meta)?w.__meta:{};kh++;let O={version:n,cid:kh,locale:r,fallbackLocale:a,messages:o,modifiers:l,pluralRules:u,missing:d,missingWarn:f,fallbackWarn:p,fallbackFormat:m,unresolving:h,postTranslation:g,processor:_,warnHtmlMessage:v,escapeParameter:y,messageCompiler:b,messageResolver:x,localeFallbacker:S,fallbackContext:C,onWarn:t,__meta:D};return O.datetimeFormats=s,O.numberFormats=c,O.__datetimeFormatters=T,O.__numberFormatters=E,__INTLIFY_PROD_DEVTOOLS__&&Wm(O,n,D),O}var jh=e=>({[e]:q()});function Mh(e,t,n,r,i){let{missing:a,onWarn:o}=e;if(a!==null){let r=a(e,n,t,i);return J(r)?r:t}return t}function Nh(e,t,n){let r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function Ph(e,t){return e!==t&&e.split(`-`)[0]===t.split(`-`)[0]}function Fh(e,t){let n=t.indexOf(e);if(n===-1)return!1;for(let r=n+1;r<t.length;r++)if(Ph(e,t[r]))return!0;return!1}function Ih(e,t,n,r,i,a,o){let{fallbackLocale:s,localeFallbacker:c,onWarn:l}=e,u=c(e,s,n);for(let n=0;n<u.length;n++){let a=u[n],s=(r[a]||{})[t];if(Z(s)&&J(a))return a;Mh(e,t,a,i,o)}return null}function Lh(e,t,n){let r=`${e}__${t}`;return Z(n)&&!Qf(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function Rh(e,t,n){for(let r in n){let n=`${t}__${r}`;for(let t of e.keys())(t===n||t.startsWith(`${n}__`))&&e.delete(t)}}function zh(e,t,n,r){let[,i,a,o]=e,s=n;return J(i)?t.key=i:Z(i)&&Object.keys(i).forEach(e=>{r.includes(e)?s[e]=i[e]:t[e]=i[e]}),J(a)?t.locale=a:Z(a)&&(s=a),Z(o)&&(s=o),s}var Bh=typeof Intl<`u`;Bh&&Intl.DateTimeFormat,Bh&&Intl.NumberFormat;function Vh(e,...t){let{datetimeFormats:n,unresolving:r,onWarn:i}=e,{__datetimeFormatters:a}=e;if(!J(t[0])&&!Xf(t[0])&&!Yf(t[0]))return``;let[o,s,c,l]=Uh(...t),u=Y(c.missingWarn)?c.missingWarn:e.missingWarn,d=Y(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,f=!!c.part,p=Ym(e,c);if(!J(o)||o===``){let e=new Intl.DateTimeFormat(p.replace(/!/g,``),l);return f?e.formatToParts(s):e.format(s)}let m=Ih(e,o,p,n,u,d,`datetime format`);if(!J(m))return r?-1:o;let h=n[m][o],g=Lh(m,o,l),_=a.get(g);return _||(_=new Intl.DateTimeFormat(m,$f({},h,l)),a.set(g,_)),f?_.formatToParts(s):_.format(s)}var Hh=[`localeMatcher`,`weekday`,`era`,`year`,`month`,`day`,`hour`,`minute`,`second`,`timeZoneName`,`formatMatcher`,`hour12`,`timeZone`,`dateStyle`,`timeStyle`,`calendar`,`dayPeriod`,`numberingSystem`,`hourCycle`,`fractionalSecondDigits`];function Uh(...e){let[t]=e,n=q(),r=q(),i;if(J(t)){let e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw Jm(qm.INVALID_ISO_DATE_ARGUMENT);let n=e[3]?e[3].trim().startsWith(`T`)?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();i=new Date(n);try{i.toISOString()}catch{throw Jm(qm.INVALID_ISO_DATE_ARGUMENT)}}else if(Xf(t)){if(isNaN(t.getTime()))throw Jm(qm.INVALID_DATE_ARGUMENT);i=t}else if(Yf(t))i=t;else throw Jm(qm.INVALID_ARGUMENT);let a=zh(e,n,r,Hh);return[n.key||``,i,n,a]}function Wh(e,t,n){Rh(e.__datetimeFormatters,t,n)}function Gh(e,...t){let{numberFormats:n,unresolving:r,onWarn:i}=e,{__numberFormatters:a}=e;if(!Yf(t[0]))return``;let[o,s,c,l]=qh(...t),u=Y(c.missingWarn)?c.missingWarn:e.missingWarn,d=Y(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,f=!!c.part,p=Ym(e,c);if(!J(o)||o===``){let e=new Intl.NumberFormat(p.replace(/!/g,``),l);return f?e.formatToParts(s):e.format(s)}let m=Ih(e,o,p,n,u,d,`number format`);if(!J(m))return r?-1:o;let h=n[m][o],g=Lh(m,o,l),_=a.get(g);return _||(_=new Intl.NumberFormat(m,$f({},h,l)),a.set(g,_)),f?_.formatToParts(s):_.format(s)}var Kh=[`localeMatcher`,`style`,`currency`,`currencyDisplay`,`currencySign`,`useGrouping`,`minimumIntegerDigits`,`minimumFractionDigits`,`maximumFractionDigits`,`minimumSignificantDigits`,`maximumSignificantDigits`,`compactDisplay`,`notation`,`signDisplay`,`unit`,`unitDisplay`,`roundingMode`,`roundingPriority`,`roundingIncrement`,`trailingZeroDisplay`];function qh(...e){let[t]=e,n=q(),r=q();if(!Yf(t))throw Jm(qm.INVALID_ARGUMENT);let i=t,a=zh(e,n,r,Kh);return[n.key||``,i,n,a]}function Jh(e,t,n){Rh(e.__numberFormatters,t,n)}var Yh=e=>e,Xh=e=>``,Zh=`text`,Qh=e=>e.length===0?``:dp(e),$h=up;function eg(e,t){return e=Math.abs(e),t===2?e===1?0:1:Math.min(e,2)}function tg(e){let t=Yf(e.pluralIndex)?e.pluralIndex:-1;return Yf(e.named?.count)?e.named.count:Yf(e.named?.n)?e.named.n:t}function ng(e={}){let t=e.locale,n=tg(e),r=J(t)&&op(e.pluralRules?.[t])?e.pluralRules[t]:eg,i=r===eg?void 0:eg,a=e=>e[r(n,e.length,i)],o=e.list||[],s=e=>o[e],c=e.named||q();Yf(e.pluralIndex)&&(c.count||=e.pluralIndex,c.n||=e.pluralIndex);let l=e=>c[e];function u(t,n){return(op(e.messages)?e.messages(t,!!n):X(e.messages)?e.messages[t]:!1)||(e.parent?e.parent.message(t):Xh)}let d=t=>e.modifiers?e.modifiers[t]:Yh,f=op(e.processor?.normalize)?e.processor.normalize:Qh,p=op(e.processor?.interpolate)?e.processor.interpolate:$h,m={list:s,named:l,plural:a,linked:(e,...t)=>{let[n,r]=t,i=`text`,a=``;t.length===1?X(n)?(a=n.modifier||a,i=n.type||i):J(n)&&(a=n||a):t.length===2&&(J(n)&&(a=n||a),J(r)&&(i=r||i));let o=u(e,!0)(m),s=o===``||o===void 0?e:o,c=i===`vnode`&&ap(s)&&a?s[0]:s;return a?d(a)(c,i):c},message:u,type:J(e.processor?.type)?e.processor.type:Zh,interpolate:p,normalize:f,values:$f(q(),o,c)};return m}var rg=()=>``,ig=e=>op(e);function ag(e,...t){let{fallbackFormat:n,postTranslation:r,unresolving:i,messageCompiler:a,fallbackLocale:o,messages:s}=e,[c,l]=ug(...t),u=Y(l.missingWarn)?l.missingWarn:e.missingWarn,d=Y(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,f=Y(l.escapeParameter)?l.escapeParameter:e.escapeParameter,p=!!l.resolvedMessage,m=J(l.default)||Y(l.default)?Y(l.default)?a?c:()=>c:l.default:n?a?c:()=>c:null,h=n||m!=null&&(J(m)||op(m)),g=Ym(e,l);f&&og(l);let[_,v,y]=p?[c,g,s[g]||q()]:sg(e,c,g,o,d,u),b=_,x=c;if(!p&&!(J(b)||mm(b)||ig(b))&&h&&(b=m,x=b),!p&&(!(J(b)||mm(b)||ig(b))||!J(v)))return i?-1:c;let S=!1,C=ig(b)?b:cg(e,c,v,b,x,()=>{S=!0});if(S)return b;let w=lg(e,C,ng(fg(e,v,y,l))),T=r?r(w,c):w;if(f&&J(T)&&(T=Op(T)),__INTLIFY_PROD_DEVTOOLS__){let t={timestamp:Date.now(),key:J(c)?c:ig(b)?b.key:``,locale:v||(ig(b)?b.locale:``),format:J(b)?b:ig(b)?b.source:``,message:T};t.meta=$f({},e.__meta,Th()||{}),Gm(t)}return T}function og(e){ap(e.list)?e.list=e.list.map(e=>J(e)?pp(e):e):X(e.named)&&Object.keys(e.named).forEach(t=>{J(e.named[t])&&(e.named[t]=pp(e.named[t]))})}function sg(e,t,n,r,i,a){let{messages:o,onWarn:s,messageResolver:c,localeFallbacker:l}=e,u=l(e,r,n),d=q(),f,p=null;for(let n=0;n<u.length&&(f=u[n],d=o[f]||q(),(p=c(d,t))===null&&(p=d[t]),!(J(p)||mm(p)||ig(p)));n++)if(!Fh(f,u)){let n=Mh(e,t,f,a,`translate`);n!==t&&(p=n)}return[p,f,d]}function cg(e,t,n,r,i,a){let{messageCompiler:o,warnHtmlMessage:s}=e;if(ig(r)){let e=r;return e.locale=e.locale||n,e.key=e.key||t,e}if(o==null){let e=(()=>r);return e.locale=n,e.key=t,e}let c=o(r,dg(e,n,i,r,s,a));return c.locale=n,c.key=t,c.source=r,c}function lg(e,t,n){return t(n)}function ug(...e){let[t,n,r]=e,i=q();if(!J(t)&&!Yf(t)&&!ig(t)&&!mm(t))throw Jm(qm.INVALID_ARGUMENT);let a=Yf(t)?String(t):(ig(t),t);return Yf(n)?i.plural=n:J(n)?i.default=n:Z(n)&&!Qf(n)?i.named=n:ap(n)&&(i.list=n),Yf(r)?i.plural=r:J(r)?i.default=r:Z(r)&&$f(i,r),[a,i]}function dg(e,t,n,r,i,a){return{locale:t,key:n,warnHtmlMessage:i,onError:e=>{throw a&&a(e),e},onCacheKey:e=>qf(t,n,e)}}function fg(e,t,n,r){let{modifiers:i,pluralRules:a,messageResolver:o,fallbackLocale:s,fallbackWarn:c,missingWarn:l,fallbackContext:u}=e,d={locale:t,modifiers:i,pluralRules:a,messages:(r,i)=>{let a=o(n,r);if(a==null&&(u||i)){let[n,,i]=sg(u||e,r,t,s,c,l);a=n??o(i,r)}if(J(a)||mm(a)){let n=!1,i=cg(e,r,t,a,r,()=>{n=!0});return n?rg:i}return ig(a)?a:rg}};return e.processor&&(d.processor=e.processor),r.list&&(d.list=r.list),r.named&&(d.named=r.named),Yf(r.plural)&&(d.pluralIndex=r.plural),d}pm();var pg=`11.4.10`;function mg(){typeof __VUE_I18N_FULL_INSTALL__!=`boolean`&&(np().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!=`boolean`&&(np().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!=`boolean`&&(np().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!=`boolean`&&(np().__INTLIFY_PROD_DEVTOOLS__=!1)}var $={UNEXPECTED_RETURN_TYPE:24,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:30,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_COMPATIBLE_LEGACY_VUE_I18N:33,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function hg(e,...t){return Np(e,null,void 0)}$.UNEXPECTED_RETURN_TYPE,$.INVALID_ARGUMENT,$.MUST_BE_CALL_SETUP_TOP,$.NOT_INSTALLED,$.UNEXPECTED_ERROR,$.REQUIRED_VALUE,$.INVALID_VALUE,$.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,$.NOT_INSTALLED_WITH_PROVIDE,$.NOT_COMPATIBLE_LEGACY_VUE_I18N,$.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;var gg=Kf(`__translateVNode`),_g=Kf(`__datetimeParts`),vg=Kf(`__numberParts`),yg=Kf(`__setPluralRules`);Kf(`__intlifyMeta`);var bg=Kf(`__injectWithOption`),xg=Kf(`__dispose`),Sg={FALLBACK_TO_ROOT:10,NOT_FOUND_PARENT_SCOPE:11,IGNORE_OBJ_FLATTEN:12,DEPRECATE_LEGACY_MODE:13,DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE:14,DUPLICATE_USE_I18N_CALLING:15};Sg.FALLBACK_TO_ROOT,Sg.NOT_FOUND_PARENT_SCOPE,Sg.IGNORE_OBJ_FLATTEN,Sg.DEPRECATE_LEGACY_MODE,Sg.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE,Sg.DUPLICATE_USE_I18N_CALLING;var Cg=null;{let e=np().__VUE_INSTANCE_SETTERS__;ap(e)&&e.push(e=>{Cg=e})}function wg(e){if(!X(e)||mm(e))return e;for(let t in e)if(ip(e,t)){if(!t.includes(`.`))X(e[t])&&wg(e[t]);else{let n=t.split(`.`),r=n.length-1,i=e,a=!1;for(let e=0;e<r;e++){if(n[e]===`__proto__`)throw Error(`unsafe key: ${n[e]}`);if(n[e]in i||(i[n[e]]=q()),!X(i[n[e]])){a=!0;break}i=i[n[e]]}if(a||(mm(i)?Mm.includes(n[r])||delete e[t]:(i[n[r]]=e[t],delete e[t])),!mm(i)){let e=i[n[r]];X(e)&&wg(e)}}}return e}function Tg(e,t){let{messages:n,__i18n:r,messageResolver:i,flatJson:a}=t,o=Z(n)?n:ap(r)?q():{[e]:q()};if(ap(r)&&r.forEach(e=>{if(`locale`in e&&`resource`in e){let{locale:t,resource:n}=e;t?(o[t]=o[t]||q(),Ap(n,o[t])):Ap(n,o)}else J(e)&&Ap(JSON.parse(e),o)}),i==null&&a)for(let e in o)ip(o,e)&&wg(o[e]);return o}function Eg(e){return e.type}function Dg(e,t,n){let r=X(t.messages)?t.messages:q();`__i18nGlobal`in n&&(r=Tg(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));let i=Object.keys(r);if(i.length&&i.forEach(t=>{e.mergeLocaleMessage(t,r[t])}),X(t.datetimeFormats)){let n=Object.keys(t.datetimeFormats);n.length&&n.forEach(n=>{e.mergeDateTimeFormat(n,t.datetimeFormats[n])})}if(X(t.numberFormats)){let n=Object.keys(t.numberFormats);n.length&&n.forEach(n=>{e.mergeNumberFormat(n,t.numberFormats[n])})}}function Og(e){return U(_a,null,e,0)}function kg(){return Cg??Wa()}var Ag=()=>[],jg=()=>!1,Mg=0;function Ng(e){return((t,n,r,i)=>e(n,r,kg()||void 0,i))}function Pg(e={}){let{__root:t,__injectWithOption:n}=e,r=t===void 0,i=e.flatJson,a=Gf?I:Jt,o=!Y(e.inheritLocale)||e.inheritLocale,s=a(t&&o?t.locale.value:J(e.locale)?e.locale:hh),c=a(t&&o?t.fallbackLocale.value:J(e.fallbackLocale)||ap(e.fallbackLocale)||Z(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s.value),l=a(Tg(s.value,e)),u=a(Z(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),d=a(Z(e.numberFormats)?e.numberFormats:{[s.value]:{}}),f=t?t.missingWarn:Y(e.missingWarn)||Zf(e.missingWarn)?e.missingWarn:!0,p=t?t.fallbackWarn:Y(e.fallbackWarn)||Zf(e.fallbackWarn)?e.fallbackWarn:!0,m=t?t.fallbackRoot:!Y(e.fallbackRoot)||e.fallbackRoot,h=!!e.fallbackFormat,g=op(e.missing)?e.missing:null,_=op(e.missing)?Ng(e.missing):null,v=op(e.postTranslation)?e.postTranslation:null,y=t?t.warnHtmlMessage:!Y(e.warnHtmlMessage)||e.warnHtmlMessage,b=!!e.escapeParameter,x=t?t.modifiers:Z(e.modifiers)?e.modifiers:{},S=e.pluralRules||t&&t.pluralRules,C;C=(()=>{r&&Dh(null);let t={version:pg,locale:s.value,fallbackLocale:c.value,messages:l.value,modifiers:x,pluralRules:S,missing:_===null?void 0:_,missingWarn:f,fallbackWarn:p,fallbackFormat:h,unresolving:!0,postTranslation:v===null?void 0:v,warnHtmlMessage:y,escapeParameter:b,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:`vue`}};t.datetimeFormats=u.value,t.numberFormats=d.value,t.__datetimeFormatters=Z(C)?C.__datetimeFormatters:void 0,t.__numberFormatters=Z(C)?C.__numberFormatters:void 0;let n=Ah(t);return r&&Dh(n),n})(),Nh(C,s.value,c.value);function w(){return[s.value,c.value,l.value,u.value,d.value]}let T=G({get:()=>s.value,set:e=>{C.locale=e,s.value=e}}),E=G({get:()=>c.value,set:e=>{C.fallbackLocale=e,c.value=e,Nh(C,s.value,e)}}),D=G(()=>l.value),O=G(()=>u.value),k=G(()=>d.value);function A(){return op(v)?v:null}function j(e){v=e,C.postTranslation=e}function ee(){return g}function te(e){e!==null&&(_=Ng(e)),g=e,C.missing=_}let M=(e,n,i,a,o,s)=>{w();let c;try{__INTLIFY_PROD_DEVTOOLS__,r||(C.fallbackContext=t?Oh():void 0),c=e(C)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(C.fallbackContext=void 0)}if(i!==`translate exists`&&Yf(c)&&c===-1||i===`translate exists`&&!c){let[e,r]=n();return t&&m?a(t):o(e)}if(s(c))return c;throw hg($.UNEXPECTED_RETURN_TYPE)};function ne(...e){return M(t=>Reflect.apply(ag,null,[t,...e]),()=>ug(...e),`translate`,t=>Reflect.apply(t.t,t,[...e]),e=>e,e=>J(e))}function re(...e){let[t,n,r]=e;if(r&&!X(r))throw hg($.INVALID_ARGUMENT);return ne(t,n,$f({resolvedMessage:!0},r||{}))}function ie(...e){return M(t=>Reflect.apply(Vh,null,[t,...e]),()=>Uh(...e),`datetime format`,t=>Reflect.apply(t.d,t,[...e]),()=>``,e=>J(e)||ap(e))}function ae(...e){return M(t=>Reflect.apply(Gh,null,[t,...e]),()=>qh(...e),`number format`,t=>Reflect.apply(t.n,t,[...e]),()=>``,e=>J(e)||ap(e))}function oe(e){return e.map(e=>J(e)||Yf(e)||Y(e)?Og(String(e)):e)}let se={normalize:oe,interpolate:e=>e,type:`vnode`};function ce(...e){return M(t=>{let n,r=t;try{r.processor=se,n=Reflect.apply(ag,null,[r,...e])}finally{r.processor=null}return n},()=>ug(...e),`translate`,t=>t[gg](...e),e=>[Og(e)],e=>ap(e))}function le(...e){return M(t=>Reflect.apply(Gh,null,[t,...e]),()=>qh(...e),`number format`,t=>t[vg](...e),Ag,e=>J(e)||ap(e))}function ue(...e){return M(t=>Reflect.apply(Vh,null,[t,...e]),()=>Uh(...e),`datetime format`,t=>t[_g](...e),Ag,e=>J(e)||ap(e))}function de(e){S=e,C.pluralRules=S}function fe(e,t){return M(()=>{if(!e)return!1;let n=J(t)?t:s.value,r=J(t)?[n]:$m(C,c.value,n);for(let t=0;t<r.length;t++){let n=he(r[t]),i=C.messageResolver(n,e);if(i===null&&(i=n[e]),mm(i)||ig(i)||J(i))return!0}return!1},()=>[e],`translate exists`,n=>Reflect.apply(n.te,n,[e,t]),jg,e=>Y(e))}function pe(e){let t=null,n=$m(C,c.value,s.value);for(let r=0;r<n.length;r++){let i=l.value[n[r]]||{},a=C.messageResolver(i,e);if(a!=null){t=a;break}}return t}function me(e){return pe(e)??(t&&t.tm(e)||{})}function he(e){return l.value[e]||{}}function ge(e,t){if(i){let n={[e]:t};for(let e in n)ip(n,e)&&wg(n[e]);t=n[e]}l.value[e]=t,C.messages=l.value}function _e(e,t){l.value[e]=l.value[e]||{};let n={[e]:t};if(i)for(let e in n)ip(n,e)&&wg(n[e]);t=n[e],Ap(t,l.value[e]),C.messages=l.value}function ve(e){return u.value[e]||{}}function ye(e,t){u.value[e]=t,C.datetimeFormats=u.value,Wh(C,e,t)}function N(e,t){u.value[e]=$f(u.value[e]||{},t),C.datetimeFormats=u.value,Wh(C,e,t)}function be(e){return d.value[e]||{}}function xe(e,t){d.value[e]=t,C.numberFormats=d.value,Jh(C,e,t)}function Se(e,t){d.value[e]=$f(d.value[e]||{},t),C.numberFormats=d.value,Jh(C,e,t)}Mg++,t&&Gf&&(Gn(t.locale,e=>{o&&(s.value=e,C.locale=e,Nh(C,s.value,c.value))}),Gn(t.fallbackLocale,e=>{o&&(c.value=e,C.fallbackLocale=e,Nh(C,s.value,c.value))}));let Ce={id:Mg,locale:T,fallbackLocale:E,get inheritLocale(){return o},set inheritLocale(e){o=e,e&&t&&(s.value=t.locale.value,c.value=t.fallbackLocale.value,Nh(C,s.value,c.value))},get availableLocales(){return Object.keys(l.value).sort()},messages:D,get modifiers(){return x},get pluralRules(){return S||{}},get isGlobal(){return r},get missingWarn(){return f},set missingWarn(e){f=e,C.missingWarn=f},get fallbackWarn(){return p},set fallbackWarn(e){p=e,C.fallbackWarn=p},get fallbackRoot(){return m},set fallbackRoot(e){m=e},get fallbackFormat(){return h},set fallbackFormat(e){h=e,C.fallbackFormat=h},get warnHtmlMessage(){return y},set warnHtmlMessage(e){y=e,C.warnHtmlMessage=e},get escapeParameter(){return b},set escapeParameter(e){b=e,C.escapeParameter=e},t:ne,getLocaleMessage:he,setLocaleMessage:ge,mergeLocaleMessage:_e,getPostTranslationHandler:A,setPostTranslationHandler:j,getMissingHandler:ee,setMissingHandler:te,[yg]:de};return Ce.datetimeFormats=O,Ce.numberFormats=k,Ce.rt=re,Ce.te=fe,Ce.tm=me,Ce.d=ie,Ce.n=ae,Ce.getDateTimeFormat=ve,Ce.setDateTimeFormat=ye,Ce.mergeDateTimeFormat=N,Ce.getNumberFormat=be,Ce.setNumberFormat=xe,Ce.mergeNumberFormat=Se,Ce[bg]=n,Ce[gg]=ce,Ce[_g]=ue,Ce[vg]=le,Ce}function Fg(e){let t=J(e.locale)?e.locale:hh,n=J(e.fallbackLocale)||ap(e.fallbackLocale)||Z(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,r=op(e.missing)?e.missing:void 0,i=Y(e.silentTranslationWarn)||Zf(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,a=Y(e.silentFallbackWarn)||Zf(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,o=!Y(e.fallbackRoot)||e.fallbackRoot,s=!!e.formatFallbackMessages,c=Z(e.modifiers)?e.modifiers:{},l=e.pluralizationRules,u=op(e.postTranslation)?e.postTranslation:void 0,d=!J(e.warnHtmlInMessage)||e.warnHtmlInMessage!==`off`,f=!!e.escapeParameterHtml,p=!Y(e.sync)||e.sync,m=e.messages;if(Z(e.sharedMessages)){let t=e.sharedMessages;m=Object.keys(t).reduce((e,n)=>($f(e[n]||(e[n]={}),t[n]),e),m||{})}let{__i18n:h,__root:g,__injectWithOption:_}=e,v=e.datetimeFormats,y=e.numberFormats,b=e.flatJson;return{locale:t,fallbackLocale:n,messages:m,flatJson:b,datetimeFormats:v,numberFormats:y,missing:r,missingWarn:i,fallbackWarn:a,fallbackRoot:o,fallbackFormat:s,modifiers:c,pluralRules:l,postTranslation:u,warnHtmlMessage:d,escapeParameter:f,messageResolver:e.messageResolver,inheritLocale:p,__i18n:h,__root:g,__injectWithOption:_}}function Ig(e={}){let t=Pg(Fg(e)),{__extender:n}=e,r={id:t.id,get locale(){return t.locale.value},set locale(e){t.locale.value=e},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(e){t.fallbackLocale.value=e},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get missing(){return t.getMissingHandler()},set missing(e){t.setMissingHandler(e)},get silentTranslationWarn(){return Y(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(e){t.missingWarn=Y(e)?!e:e},get silentFallbackWarn(){return Y(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(e){t.fallbackWarn=Y(e)?!e:e},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(e){t.fallbackFormat=e},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(e){t.setPostTranslationHandler(e)},get sync(){return t.inheritLocale},set sync(e){t.inheritLocale=e},get warnHtmlInMessage(){return t.warnHtmlMessage?`warn`:`off`},set warnHtmlInMessage(e){t.warnHtmlMessage=e!==`off`},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(e){t.escapeParameter=e},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...e){return Reflect.apply(t.t,t,[...e])},rt(...e){return Reflect.apply(t.rt,t,[...e])},te(e,n){return t.te(e,n)},tm(e){return t.tm(e)},getLocaleMessage(e){return t.getLocaleMessage(e)},setLocaleMessage(e,n){t.setLocaleMessage(e,n)},mergeLocaleMessage(e,n){t.mergeLocaleMessage(e,n)},d(...e){return Reflect.apply(t.d,t,[...e])},getDateTimeFormat(e){return t.getDateTimeFormat(e)},setDateTimeFormat(e,n){t.setDateTimeFormat(e,n)},mergeDateTimeFormat(e,n){t.mergeDateTimeFormat(e,n)},n(...e){return Reflect.apply(t.n,t,[...e])},getNumberFormat(e){return t.getNumberFormat(e)},setNumberFormat(e,n){t.setNumberFormat(e,n)},mergeNumberFormat(e,n){t.mergeNumberFormat(e,n)}};return r.__extender=n,r}function Lg(e,t,n){return{beforeCreate(){let r=kg();if(!r)throw hg($.UNEXPECTED_ERROR);let i=this.$options;if(i.i18n){let r=i.i18n;if(i.__i18n&&(r.__i18n=i.__i18n),r.__root=t,this===this.$root)this.$i18n=Rg(e,r);else{r.__injectWithOption=!0,r.__extender=n.__vueI18nExtend,this.$i18n=Ig(r);let e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}}else if(i.__i18n){if(this===this.$root)this.$i18n=Rg(e,i);else{this.$i18n=Ig({__i18n:i.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:t});let e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}}else this.$i18n=e;i.__i18nGlobal&&Dg(t,i,i),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$te=(e,t)=>this.$i18n.te(e,t),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){let e=kg();if(!e)throw hg($.UNEXPECTED_ERROR);let t=this.$i18n;t&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,t?.__disposer&&(t.__disposer(),delete t.__disposer,delete t.__extender),n.__deleteInstance(e),delete this.$i18n)}}}function Rg(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[yg](t.pluralizationRules||e.pluralizationRules);let n=Tg(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(t=>e.mergeLocaleMessage(t,n[t])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(n=>e.mergeDateTimeFormat(n,t.datetimeFormats[n])),t.numberFormats&&Object.keys(t.numberFormats).forEach(n=>e.mergeNumberFormat(n,t.numberFormats[n])),e}var zg={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e===`parent`||e===`global`,default:`parent`},i18n:{type:Object}};function Bg({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((e,t)=>[...e,...t.type===z?t.children:[t]],[]):t.reduce((t,n)=>{let r=e[n];return r&&(t[n]=r()),t},q())}function Vg(){return z}var Hg=R({name:`i18n-t`,props:$f({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>Yf(e)||!isNaN(e)}},zg),setup(e,t){let{slots:n,attrs:r}=t,i=e.i18n||$g({useScope:e.scope,__useComponent:!0});return()=>{let a=()=>{let r=Object.keys(n).filter(e=>e[0]!==`_`),a=q();e.locale&&(a.locale=e.locale),e.plural!==void 0&&(a.plural=J(e.plural)?+e.plural:e.plural);let o=Bg(t,r);return i[gg](e.keypath,o,a)},o=$f(q(),r),s=J(e.tag)||X(e.tag)?e.tag:Vg();return X(s)?oo(s,o,{default:a}):oo(s,o,a())}}});function Ug(e){return ap(e)&&!J(e[0])}function Wg(e,t,n,r){let{slots:i,attrs:a}=t;return()=>{let t=()=>{let t={part:!0},a=q();e.locale&&(t.locale=e.locale),J(e.format)?t.key=e.format:X(e.format)&&(J(e.format.key)&&(t.key=e.format.key),a=Object.keys(e.format).reduce((t,r)=>n.includes(r)?$f(q(),t,{[r]:e.format[r]}):t,q()));let o=r(e.value,t,a),s=[t.key];return ap(o)?s=o.map((e,t)=>{let n=i[e.type],r=n?n({[e.type]:e.value,index:t,parts:o}):[e.value];return Ug(r)&&(r[0].key=`${e.type}-${t}`),r}):J(o)&&(s=[o]),s},o=$f(q(),a),s=J(e.tag)||X(e.tag)?e.tag:Vg();return X(s)?oo(s,o,{default:t}):oo(s,o,t())}}var Gg=R({name:`i18n-n`,props:$f({value:{type:Number,required:!0},format:{type:[String,Object]}},zg),setup(e,t){let n=e.i18n||$g({useScope:e.scope,__useComponent:!0});return Wg(e,t,Kh,(...e)=>n[vg](...e))}});function Kg(e,t){let n=e;if(e.mode===`composition`)return n.__getInstance(t)||e.global;{let r=n.__getInstance(t);return r==null?e.global.__composer:r.__composer}}function qg(e){let t=t=>{let{instance:n,value:r}=t;if(!n||!n.$)throw hg($.UNEXPECTED_ERROR);let i=Kg(e,n.$),a=Jg(r);return[Reflect.apply(i.t,i,[...Yg(a)]),i]};return{created:(e,n)=>{let[r,i]=t(n);Gf&&(e.__i18nWatcher=Gn(i.locale,()=>{n.instance&&n.instance.$forceUpdate()})),e.__composer=i,e.textContent=r},unmounted:e=>{Gf&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},beforeUpdate:(e,{value:t})=>{if(e.__composer){let n=e.__composer,r=Jg(t);e.textContent=Reflect.apply(n.t,n,[...Yg(r)])}},getSSRProps:e=>{let[n]=t(e);return{textContent:n}}}}function Jg(e){if(J(e))return{path:e};if(Z(e)){if(!(`path`in e))throw hg($.REQUIRED_VALUE,`path`);return e}throw hg($.INVALID_VALUE)}function Yg(e){let{path:t,locale:n,args:r,choice:i,plural:a}=e,o={},s=r||{};return J(n)&&(o.locale=n),Yf(i)&&(o.plural=i),Yf(a)&&(o.plural=a),[t,s,o]}function Xg(e,t,...n){let r=Z(n[0])?n[0]:{};(!Y(r.globalInstall)||r.globalInstall)&&([Hg.name,`I18nT`].forEach(t=>e.component(t,Hg)),[Gg.name,`I18nN`].forEach(t=>e.component(t,Gg)),[u_.name,`I18nD`].forEach(t=>e.component(t,u_))),e.directive(`t`,qg(t))}var Zg=Kf(`global-vue-i18n`);function Qg(e={}){let t=__VUE_I18N_LEGACY_API__&&Y(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,n=!Y(e.globalInjection)||e.globalInjection,r=new Map,[i,a]=e_(e,t),o=Kf(``);function s(e){return r.get(e)||null}function c(e,t){r.set(e,t)}function l(e){r.delete(e)}let u={get mode(){return __VUE_I18N_LEGACY_API__&&t?`legacy`:`composition`},async install(e,...r){if(e.__VUE_I18N_SYMBOL__=o,e.provide(e.__VUE_I18N_SYMBOL__,u),Z(r[0])){let e=r[0];u.__composerExtend=e.__composerExtend,u.__vueI18nExtend=e.__vueI18nExtend}let i=null;!t&&n&&(i=l_(e,u.global)),__VUE_I18N_FULL_INSTALL__&&Xg(e,u,...r),__VUE_I18N_LEGACY_API__&&t&&e.mixin(Lg(a,a.__composer,u));let s=e.unmount;e.unmount=()=>{i&&i(),u.dispose(),s()}},get global(){return a},dispose(){i.stop()},__instances:r,__getInstance:s,__setInstance:c,__deleteInstance:l};return u}function $g(e={}){let t=kg();if(t==null)throw hg($.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw hg($.NOT_INSTALLED);let n=t_(t),r=r_(n),i=Eg(t),a=n_(e,i);if(a===`global`)return Dg(r,e,i),r;if(a===`parent`){let i=i_(n,t,e.__useComponent);return i??=r,i}if(a===`isolated`){if(n.mode!==`composition`)throw hg($.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);let i=n,a=$f({},e);a.__root=i_(n,t)||r;let o=Pg(a);return i.__composerExtend&&(o[xg]=i.__composerExtend(o)),Te()&&Ee(()=>{let e=o[xg];e&&(e(),delete o[xg])}),o}let o=n,s=o.__getInstance(t);if(s==null){let n=$f({},e);`__i18n`in i&&(n.__i18n=i.__i18n),r&&(n.__root=r),s=Pg(n),o.__composerExtend&&(s[xg]=o.__composerExtend(s)),o_(o,t,s),o.__setInstance(t,s)}return s}function e_(e,t){let n=we(),r=__VUE_I18N_LEGACY_API__&&t?n.run(()=>Ig(e)):n.run(()=>Pg(e));if(r==null)throw hg($.UNEXPECTED_ERROR);return[n,r]}function t_(e){let t=Bn(e.isCE?Zg:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw hg(e.isCE?$.NOT_INSTALLED_WITH_PROVIDE:$.UNEXPECTED_ERROR);return t}function n_(e,t){return Qf(e)?`__i18n`in t?`local`:`global`:e.useScope?e.useScope:`local`}function r_(e){return e.mode===`composition`?e.global:e.global.__composer}function i_(e,t,n=!1){let r=null,i=t.root,a=a_(t,n);for(;a!=null;){let t=e;if(e.mode===`composition`)r=t.__getInstance(a);else if(__VUE_I18N_LEGACY_API__){let e=t.__getInstance(a);e!=null&&(r=e.__composer,n&&r&&!r[bg]&&(r=null))}if(r!=null||i===a)break;a=a.parent}return r}function a_(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function o_(e,t,n){Rr(()=>{},t),Hr(()=>{let r=n;e.__deleteInstance(t);let i=r[xg];i&&(i(),delete r[xg])},t)}var s_=[`locale`,`fallbackLocale`,`availableLocales`],c_=[`t`,`rt`,`d`,`n`,`tm`,`te`];function l_(e,t){let n=Object.create(null);return s_.forEach(e=>{let r=Object.getOwnPropertyDescriptor(t,e);if(!r)throw hg($.UNEXPECTED_ERROR);let i=qt(r.value)?{get(){return r.value.value},set(e){r.value.value=e}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,e,i)}),e.config.globalProperties.$i18n=n,c_.forEach(n=>{let r=Object.getOwnPropertyDescriptor(t,n);if(!r||!r.value)throw hg($.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${n}`,r)}),()=>{delete e.config.globalProperties.$i18n,c_.forEach(t=>{delete e.config.globalProperties[`$${t}`]})}}var u_=R({name:`i18n-d`,props:$f({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},zg),setup(e,t){let n=e.i18n||$g({useScope:e.scope,__useComponent:!0});return Wg(e,t,Hh,(...e)=>n[_g](...e))}});if(mg(),yh(Vm),xh(fh),Ch($m),__INTLIFY_PROD_DEVTOOLS__){let e=np();e.__INTLIFY__=!0,Um(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}var d_=`svg-morph-video:theme`;function f_(){return typeof window>`u`?!1:window.matchMedia(`(prefers-color-scheme: dark)`).matches}function p_(){try{let e=localStorage.getItem(d_);if(e===`light`||e===`dark`||e===`auto`)return e}catch{}return`auto`}function m_(e){return e===`auto`?f_()?`dark`:`light`:e}function h_(e){document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e}var g_=cc(`theme`,()=>{let e=I(p_()),t=I(m_(e.value));h_(t.value),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,()=>{e.value===`auto`&&(t.value=f_()?`dark`:`light`,h_(t.value))}),Gn(e,e=>{try{localStorage.setItem(d_,e)}catch{}t.value=m_(e),h_(t.value)});function n(t){e.value=t}function r(){n(t.value===`dark`?`light`:`dark`)}return{preference:e,resolved:t,setPreference:n,toggleTheme:r}}),__=[{label:`360`,size:360},{label:`720`,size:720},{label:`1080`,size:1080},{label:`2K`,size:2560},{label:`4K`,size:3840},{label:`8K`,size:7680}],v_={common:{cancel:`取消`,confirm:`确定`,delete:`删除`,close:`关闭`},app:{replay:`重播`,replaying:`播放中…`,export:`导出`,ariaReplay:`重播动画`,ariaReplayPlaying:`播放中，点击重新播放`,settings:`设置`,collapse:`收起`,sequence:`序列`,ariaExpandSettings:`展开设置面板`,ariaCollapseSettings:`收起设置面板`,ariaExpandSequence:`展开播放序列`,ariaCollapseSequence:`收起播放序列`,drawerTitle:`配置`,zoomLabel:`缩放`,zoomReset:`还原 100%`},editor:{title:`播放序列`,toggle:`展开 / 收起`,settingsBtn:`配置`,galleryBtn:`图库`,reset:`重置默认`,hint:`上移/下移或移除；点击图层可进入绘制`,addBlank:`添加空白图层`,rename:`重命名图层`,moveUp:`上移`,moveDown:`下移`,remove:`移出序列`,resetConfirmTitle:`重置播放序列`,resetConfirmMessage:`将恢复默认序列（Stand → 一键三连），当前排列将丢失。`},gallery:{title:`选择图案`,searchPlaceholder:`搜索图案…`,empty:`没有匹配“{q}”的图案`,upload:`上传 SVG`,import:`导入 SVG`,importTitle:`导入 SVG`,chooseSvgFile:`选择 SVG 文件`,statusFile:`已选择：{name}`,statusEmpty:`打开后将直接弹出文件管理器`,importedName:`自定义图案`,removeTitle:`删除自定义图案`,addTitle:`加入 {name}`,layers:`图层`,builtin:`内置图案`,tooLarge:`SVG 文件过大（> {size}KB）`,parseFail:`无法解析该 SVG：需包含可绘制的 path（M/L/C 等命令）`,removeConfirmTitle:`删除图案`,removeConfirmMessage:`图案「{name}」删除后无法恢复，确定删除吗？`},settings:{title:`设置`,groupAppearance:`外观`,theme:`界面主题`,groupTime:`时间`,morphSpeed:`变换速度`,hold:`间隔（停留）`,initial:`入场时间`,groupAnimation:`动画`,initialAnimation:`入场动画`,write:`写字`,fade:`渐显`,frameRate:`帧率`,groupCanvas:`画面`,resolution:`分辨率`,bgColor:`背景色`,bgColorTitle:`修改背景色`,groupPalette:`色盘`,penColors:`画笔颜色`,paletteEditTitle:`点击更换颜色`,paletteRemoveTitle:`删除该颜色`,paletteAddTitle:`添加颜色`,paletteHint:`点击色块换色，右上角 × 删除`,groupLanguage:`语言`,langAuto:`跟随系统`,langZhCn:`简体中文`,langZhTw:`繁體中文`,langJa:`日本語`,langEn:`English`,langRu:`Русский`,resetAll:`重置全部设置`,resetAllMessage:`全部设置将恢复为默认值（含主题、语言、色盘、时间与动画参数）。确定重置吗？`,reset:`重置`,clearProtect:`清空保护`,clearProtectDesc:`开启后，每次清空画布都会要求确认`,groupSound:`声音`,sfxVolume:`音效音量`,changeSound:`变形音效`,changeSoundDesc:`播放图案变形时的音效`,change1:`第一种`,change2:`第二种`,changeOff:`关闭`,about:`关于`,author:`作者`,authorDesc:`有 Bug 或者建议请联系{author}`},theme:{light:`日间`,dark:`夜间`,auto:`自动`,toLight:`切换到日间模式`,toDark:`切换到夜间模式`},draw:{play:`完成并播放`,close:`关闭绘制工具栏`,pickColor:`自定义颜色（前景色）`,penColor:`画笔颜色 {color}`,undo:`撤销上一笔`,clear:`清空全部笔画`,clearConfirm:`清空`,clearIntroTitle:`清空画布`,clearIntroMessage:`清空后无法撤销，确定要清空当前画布的全部笔画吗？`,clearIntroEnable:`启用清空保护（之后每次清空都需确认）`,clearProtectConfirmTitle:`清空画布`,clearProtectConfirmMessage:`确定要清空当前画布的全部笔画吗？`},pen:{width:`粗细`,smooth:`平滑`},export:{format:`格式`,exportVideo:`导出视频`,cancel:`取消`,download:`下载 {name}`,reexport:`重新导出`,prepare:`准备`,encode:`录制`,done:`完成`,error:`出错`,preparing:`准备导出…`,exportFailed:`导出失败`,layerImage:`导出当前图层为图片`,layerImageHint:`将正在编辑的图层导出为 PNG 图片；分辨率使用上方所选档位。`,exportLayerImage:`导出为图片`,saving:`保存中…`,saved:`已保存`,downloaded:`图片已开始下载`,saveFailed:`保存失败`,noLayer:`没有可导出的图层`}},y_={common:{cancel:`取消`,confirm:`確定`,delete:`刪除`,close:`關閉`},app:{replay:`重播`,replaying:`播放中…`,export:`匯出`,ariaReplay:`重播動畫`,ariaReplayPlaying:`播放中，點擊重新播放`,settings:`設定`,collapse:`收起`,sequence:`序列`,ariaExpandSettings:`展開設定面板`,ariaCollapseSettings:`收起設定面板`,ariaExpandSequence:`展開播放序列`,ariaCollapseSequence:`收起播放序列`,drawerTitle:`設定`,zoomLabel:`縮放`,zoomReset:`還原 100%`},editor:{title:`播放序列`,toggle:`展開 / 收合`,settingsBtn:`設定`,galleryBtn:`圖庫`,reset:`重設預設`,hint:`上移/下移或移除；點擊圖層可進入繪製`,addBlank:`新增空白圖層`,rename:`重新命名圖層`,moveUp:`上移`,moveDown:`下移`,remove:`移出序列`,resetConfirmTitle:`重設播放序列`,resetConfirmMessage:`將恢復預設序列（Stand → 一鍵三連），目前排列將遺失。`},gallery:{title:`選擇圖案`,searchPlaceholder:`搜尋圖案…`,empty:`沒有符合「{q}」的圖案`,upload:`上傳 SVG`,import:`匯入 SVG`,importTitle:`匯入 SVG`,chooseSvgFile:`選擇 SVG 檔案`,statusFile:`已選擇：{name}`,statusEmpty:`開啟後將直接彈出檔案管理員`,importedName:`自訂圖案`,removeTitle:`刪除自訂圖案`,addTitle:`加入 {name}`,layers:`圖層`,builtin:`內建圖案`,tooLarge:`SVG 檔案過大（> {size}KB）`,parseFail:`無法解析此 SVG：需包含可繪製的 path（M/L/C 等指令）`,removeConfirmTitle:`刪除圖案`,removeConfirmMessage:`圖案「{name}」刪除後無法復原，確定刪除嗎？`},settings:{title:`設定`,groupAppearance:`外觀`,theme:`介面主題`,groupTime:`時間`,morphSpeed:`變換速度`,hold:`間隔（停留）`,initial:`入場時間`,groupAnimation:`動畫`,initialAnimation:`入場動畫`,write:`寫字`,fade:`漸顯`,frameRate:`幀率`,groupCanvas:`畫面`,resolution:`解析度`,bgColor:`背景色`,bgColorTitle:`修改背景色`,groupPalette:`色盤`,penColors:`畫筆顏色`,paletteEditTitle:`點擊更換顏色`,paletteRemoveTitle:`刪除該顏色`,paletteAddTitle:`新增顏色`,paletteHint:`點擊色塊換色，右上角 × 刪除`,groupLanguage:`語言`,langAuto:`跟隨系統`,langZhCn:`简体中文`,langZhTw:`繁體中文`,langJa:`日本語`,langEn:`English`,langRu:`Русский`,resetAll:`重設全部設定`,resetAllMessage:`所有設定將恢復為預設值（含主題、語言、色盤、時間與動畫參數）。確定重設嗎？`,reset:`重設`,clearProtect:`清空保護`,clearProtectDesc:`開啟後，每次清空畫布都會要求確認。`,groupSound:`聲音`,sfxVolume:`音效音量`,changeSound:`變形音效`,changeSoundDesc:`播放圖案變形時的音效。`,change1:`第一種`,change2:`第二種`,changeOff:`關閉`,about:`關於`,author:`作者`,authorDesc:`有 Bug 或建議請聯繫{author}`},theme:{light:`日間`,dark:`夜間`,auto:`自動`,toLight:`切換至日間模式`,toDark:`切換至夜間模式`},draw:{play:`完成並播放`,close:`關閉繪製工具列`,pickColor:`自訂顏色（前景色）`,penColor:`畫筆顏色 {color}`,undo:`復原上一筆`,clear:`清除全部筆畫`,clearConfirm:`清空`,clearIntroTitle:`清空畫布`,clearIntroMessage:`清空後無法復原，確定要清空目前畫布的全部筆畫嗎？`,clearIntroEnable:`啟用清空保護（之後每次清空都需確認）`,clearProtectConfirmTitle:`清空畫布`,clearProtectConfirmMessage:`確定要清空目前畫布的全部筆畫嗎？`},pen:{width:`粗細`,smooth:`平滑`},export:{format:`格式`,exportVideo:`匯出影片`,cancel:`取消`,download:`下載 {name}`,reexport:`重新匯出`,prepare:`準備`,encode:`錄製`,done:`完成`,error:`出錯`,preparing:`準備匯出…`,exportFailed:`匯出失敗`,layerImage:`匯出目前圖層為圖片`,layerImageHint:`將正在編輯的圖層匯出為 PNG 圖片；解析度使用上方所選檔位。`,exportLayerImage:`匯出為圖片`,saving:`儲存中…`,saved:`已儲存`,downloaded:`圖片已開始下載`,saveFailed:`儲存失敗`,noLayer:`沒有可匯出的圖層`}},b_={common:{cancel:`キャンセル`,confirm:`OK`,delete:`削除`,close:`閉じる`},app:{replay:`再生し直す`,replaying:`再生中…`,export:`書き出す`,ariaReplay:`アニメーションを再生し直す`,ariaReplayPlaying:`再生中です。クリックで最初から再生`,settings:`設定`,collapse:`折りたたむ`,sequence:`シーケンス`,ariaExpandSettings:`設定パネルを展開`,ariaCollapseSettings:`設定パネルを折りたたむ`,ariaExpandSequence:`再生シーケンスを展開`,ariaCollapseSequence:`再生シーケンスを折りたたむ`,drawerTitle:`設定`,zoomLabel:`ズーム`,zoomReset:`100% に戻す`},editor:{title:`再生シーケンス`,toggle:`開く / 閉じる`,settingsBtn:`設定`,galleryBtn:`ライブラリ`,reset:`デフォルトに戻す`,hint:`上へ/下へ移動や削除が可能。レイヤーをクリックで描画`,addBlank:`空白レイヤーを追加`,rename:`レイヤー名を変更`,moveUp:`上へ`,moveDown:`下へ`,remove:`シーケンスから削除`,resetConfirmTitle:`再生シーケンスをリセット`,resetConfirmMessage:`デフォルトのシーケンス（Stand → 一鍵三連）に戻ります。現在の並びは失われます。`},gallery:{title:`図案を選択`,searchPlaceholder:`図案を検索…`,empty:`「{q}」に一致する図案がありません`,upload:`SVG をアップロード`,import:`SVG をインポート`,importTitle:`SVG をインポート`,chooseSvgFile:`SVG ファイルを選択`,statusFile:`選択済み：{name}`,statusEmpty:`開くとファイル選択が表示されます`,importedName:`カスタム図案`,removeTitle:`カスタム図案を削除`,addTitle:`{name} を追加`,layers:`レイヤー`,builtin:`組み込み図案`,tooLarge:`SVG ファイルが大きすぎます（> {size}KB）`,parseFail:`この SVG を解析できません：描画可能な path（M/L/C など）が必要です`,removeConfirmTitle:`図案を削除`,removeConfirmMessage:`図案「{name}」は削除後に復元できません。削除しますか？`},settings:{title:`設定`,groupAppearance:`外観`,theme:`テーマ`,groupTime:`時間`,morphSpeed:`変化速度`,hold:`間隔（停止）`,initial:`入場時間`,groupAnimation:`アニメーション`,initialAnimation:`入場アニメーション`,write:`書く`,fade:`フェードイン`,frameRate:`フレームレート`,groupCanvas:`画面`,resolution:`解像度`,bgColor:`背景色`,bgColorTitle:`背景色を変更`,groupPalette:`パレット`,penColors:`ブラシ色`,paletteEditTitle:`クリックで色を変更`,paletteRemoveTitle:`この色を削除`,paletteAddTitle:`色を追加`,paletteHint:`色をクリックで変更、右上の × で削除`,groupLanguage:`言語`,langAuto:`システムに従う`,langZhCn:`简体中文`,langZhTw:`繁體中文`,langJa:`日本語`,langEn:`English`,langRu:`Русский`,resetAll:`すべての設定をリセット`,resetAllMessage:`すべての設定がデフォルトに戻ります（テーマ・言語・パレット・時間・アニメーション設定を含む）。よろしいですか？`,reset:`リセット`,clearProtect:`クリア保護`,clearProtectDesc:`オンにすると、キャンバスをクリアするたびに確認が求められます。`,groupSound:`サウンド`,sfxVolume:`音量`,changeSound:`変形音`,changeSoundDesc:`図形が変形する際に再生される音です。`,change1:`その1`,change2:`その2`,changeOff:`オフ`,about:`このアプリについて`,author:`作者`,authorDesc:`不具合やご提案は{author}までお問い合わせください`},theme:{light:`ライト`,dark:`ダーク`,auto:`自動`,toLight:`ライトモードに切り替え`,toDark:`ダークモードに切り替え`},draw:{play:`完成して再生`,close:`描画ツールバーを閉じる`,pickColor:`カスタム色（前景色）`,penColor:`ブラシ色 {color}`,undo:`前のストロークを元に戻す`,clear:`すべてのストロークを消去`,clearConfirm:`クリア`,clearIntroTitle:`キャンバスをクリア`,clearIntroMessage:`取り消せません。現在のキャンバスのすべての描画をクリアしますか？`,clearIntroEnable:`クリア保護を有効にする（以降は毎回確認する）`,clearProtectConfirmTitle:`キャンバスをクリア`,clearProtectConfirmMessage:`現在のキャンバスのすべての描画をクリアしますか？`},pen:{width:`太さ`,smooth:`なめらかさ`},export:{format:`形式`,exportVideo:`動画を書き出す`,cancel:`キャンセル`,download:`{name} をダウンロード`,reexport:`再書き出し`,prepare:`準備中`,encode:`録画中`,done:`完了`,error:`エラー`,preparing:`書き出しを準備中…`,exportFailed:`書き出しに失敗しました`,layerImage:`現在のレイヤーを画像として書き出し`,layerImageHint:`編集中のレイヤーを PNG 画像として書き出します。解像度は上で選択したものを使用します。`,exportLayerImage:`画像として書き出し`,saving:`保存中…`,saved:`保存しました`,downloaded:`画像のダウンロードを開始しました`,saveFailed:`保存に失敗しました`,noLayer:`書き出し可能なレイヤーがありません`}},x_={common:{cancel:`Cancel`,confirm:`OK`,delete:`Delete`,close:`Close`},app:{replay:`Replay`,replaying:`Playing…`,export:`Export`,ariaReplay:`Replay animation`,ariaReplayPlaying:`Playing — click to replay`,settings:`Settings`,collapse:`Collapse`,sequence:`Sequence`,ariaExpandSettings:`Expand settings panel`,ariaCollapseSettings:`Collapse settings panel`,ariaExpandSequence:`Expand playlist`,ariaCollapseSequence:`Collapse playlist`,drawerTitle:`Settings`,zoomLabel:`Zoom`,zoomReset:`Reset to 100%`},editor:{title:`Playlist`,toggle:`Expand / Collapse`,settingsBtn:`Settings`,galleryBtn:`Library`,reset:`Restore default`,hint:`Move up/down or remove; click a layer to draw on it`,addBlank:`Add blank layer`,rename:`Rename layer`,moveUp:`Move up`,moveDown:`Move down`,remove:`Remove from sequence`,resetConfirmTitle:`Reset playlist`,resetConfirmMessage:`Restores the default sequence (Stand → Triple Tap). The current arrangement will be lost.`},gallery:{title:`Pick a shape`,searchPlaceholder:`Search shapes…`,empty:`No shapes match “{q}”`,upload:`Upload SVG`,import:`Import SVG`,importTitle:`Import SVG`,chooseSvgFile:`Choose SVG file`,statusFile:`Selected: {name}`,statusEmpty:`File picker opens automatically`,importedName:`Custom shape`,removeTitle:`Delete custom shape`,addTitle:`Add {name}`,layers:`Layers`,builtin:`Built-in shapes`,tooLarge:`SVG file too large (> {size} KB)`,parseFail:`Cannot parse this SVG: it needs a drawable path (commands like M/L/C)`,removeConfirmTitle:`Delete shape`,removeConfirmMessage:`Shape “{name}” will be permanently deleted. Continue?`},settings:{title:`Settings`,groupAppearance:`Appearance`,theme:`Interface theme`,groupTime:`Timing`,morphSpeed:`Morph speed`,hold:`Hold (pause)`,initial:`Intro time`,groupAnimation:`Animation`,initialAnimation:`Intro animation`,write:`Stroke`,fade:`Fade in`,frameRate:`Frame rate`,groupCanvas:`Canvas`,resolution:`Resolution`,bgColor:`Background`,bgColorTitle:`Change background color`,groupPalette:`Palette`,penColors:`Brush colors`,paletteEditTitle:`Click to change color`,paletteRemoveTitle:`Remove this color`,paletteAddTitle:`Add color`,paletteHint:`Click a swatch to edit, × removes it`,groupLanguage:`Language`,langAuto:`Follow system`,langZhCn:`简体中文`,langZhTw:`繁體中文`,langJa:`日本語`,langEn:`English`,langRu:`Русский`,resetAll:`Reset all settings`,resetAllMessage:`All settings will be restored to defaults (theme, language, palette, timing and animation). Continue?`,reset:`Reset`,clearProtect:`Clear protection`,clearProtectDesc:`When on, every canvas clear asks for confirmation.`,groupSound:`Sound`,sfxVolume:`SFX volume`,changeSound:`Morph sound`,changeSoundDesc:`Sound played while shapes morph.`,change1:`Variant 1`,change2:`Variant 2`,changeOff:`Off`,about:`About`,author:`Author`,authorDesc:`Contact {author} for bugs or suggestions`},theme:{light:`Light`,dark:`Dark`,auto:`Auto`,toLight:`Switch to light mode`,toDark:`Switch to dark mode`},draw:{play:`Finish and play`,close:`Close drawing toolbar`,pickColor:`Custom color (foreground)`,penColor:`Brush color {color}`,undo:`Undo last stroke`,clear:`Clear all strokes`,clearConfirm:`Clear`,clearIntroTitle:`Clear canvas`,clearIntroMessage:`This cannot be undone. Clear all strokes on the current canvas?`,clearIntroEnable:`Enable clear protection (always ask before clearing)`,clearProtectConfirmTitle:`Clear canvas`,clearProtectConfirmMessage:`Clear all strokes on the current canvas?`},pen:{width:`Width`,smooth:`Smooth`},export:{format:`Format`,exportVideo:`Export video`,cancel:`Cancel`,download:`Download {name}`,reexport:`Export again`,prepare:`Preparing`,encode:`Recording`,done:`Done`,error:`Error`,preparing:`Preparing export…`,exportFailed:`Export failed`,layerImage:`Export current layer as image`,layerImageHint:`Export the layer you are editing as a PNG image, using the resolution selected above.`,exportLayerImage:`Export as image`,saving:`Saving…`,saved:`Saved`,downloaded:`Image download started`,saveFailed:`Save failed`,noLayer:`No layer available to export`}},S_={common:{cancel:`Отмена`,confirm:`OK`,delete:`Удалить`,close:`Закрыть`},app:{replay:`Повторить`,replaying:`Воспроизведение…`,export:`Экспорт`,ariaReplay:`Повторить анимацию`,ariaReplayPlaying:`Воспроизводится — нажмите, чтобы повторить`,settings:`Настройки`,collapse:`Свернуть`,sequence:`Список`,ariaExpandSettings:`Развернуть панель настроек`,ariaCollapseSettings:`Свернуть панель настроек`,ariaExpandSequence:`Развернуть список воспроизведения`,ariaCollapseSequence:`Свернуть список воспроизведения`,drawerTitle:`Настройки`,zoomLabel:`Масштаб`,zoomReset:`Сбросить до 100%`},editor:{title:`Список воспроизведения`,toggle:`Развернуть / свернуть`,settingsBtn:`Настройки`,galleryBtn:`Галерея`,reset:`Вернуть по умолчанию`,hint:`Перемещайте вверх/вниз или удаляйте; клик по слою — рисование`,addBlank:`Добавить пустой слой`,rename:`Переименовать слой`,moveUp:`Вверх`,moveDown:`Вниз`,remove:`Убрать из списка`,resetConfirmTitle:`Сброс списка`,resetConfirmMessage:`Будет восстановлена последовательность по умолчанию (Stand → Tap×3); текущий порядок будет потерян.`},gallery:{title:`Выбрать рисунок`,searchPlaceholder:`Поиск рисунков…`,empty:`Нет рисунков по запросу «{q}»`,upload:`Загрузить SVG`,import:`Импорт SVG`,importTitle:`Импорт SVG`,chooseSvgFile:`Выбрать SVG-файл`,statusFile:`Выбран: {name}`,statusEmpty:`Открывается системный выбор файла`,importedName:`Своя фигура`,removeTitle:`Удалить пользовательский рисунок`,addTitle:`Добавить {name}`,layers:`Слои`,builtin:`Встроенные`,tooLarge:`SVG слишком большой (> {size} КБ)`,parseFail:`Не удалось разобрать SVG: нужен рисуемый path (команды M/L/C)`,removeConfirmTitle:`Удалить рисунок`,removeConfirmMessage:`Рисунок «{name}» будет удалён безвозвратно. Продолжить?`},settings:{title:`Настройки`,groupAppearance:`Внешний вид`,theme:`Тема интерфейса`,groupTime:`Время`,morphSpeed:`Скорость трансформации`,hold:`Пауза`,initial:`Время входа`,groupAnimation:`Анимация`,initialAnimation:`Входная анимация`,write:`Написание`,fade:`Появление`,frameRate:`Частота кадров`,groupCanvas:`Холст`,resolution:`Разрешение`,bgColor:`Цвет фона`,bgColorTitle:`Изменить цвет фона`,groupPalette:`Палитра`,penColors:`Цвета кисти`,paletteEditTitle:`Нажмите, чтобы сменить цвет`,paletteRemoveTitle:`Удалить этот цвет`,paletteAddTitle:`Добавить цвет`,paletteHint:`Нажмите на цвет, чтобы изменить, × — удалить`,groupLanguage:`Язык`,langAuto:`Как в системе`,langZhCn:`简体中文`,langZhTw:`繁體中文`,langJa:`日本語`,langEn:`English`,langRu:`Русский`,resetAll:`Сбросить все настройки`,resetAllMessage:`Все настройки будут возвращены к значениям по умолчанию (тема, язык, палитра, время и анимация). Продолжить?`,reset:`Сбросить`,clearProtect:`Защита от очистки`,clearProtectDesc:`Когда включено, перед каждой очисткой холста запрашивается подтверждение.`,groupSound:`Звук`,sfxVolume:`Громкость`,changeSound:`Звук трансформации`,changeSoundDesc:`Звук воспроизводится при морфинге фигур.`,change1:`Вариант 1`,change2:`Вариант 2`,changeOff:`Выкл.`,about:`Об авторе`,author:`Автор`,authorDesc:`По вопросам и предложениям обращайтесь: {author}`},theme:{light:`Светлая`,dark:`Тёмная`,auto:`Авто`,toLight:`Включить светлую тему`,toDark:`Включить тёмную тему`},draw:{play:`Завершить и воспроизвести`,close:`Закрыть панель рисования`,pickColor:`Свой цвет (основной)`,penColor:`Цвет кисти {color}`,undo:`Отменить штрих`,clear:`Очистить все штрихи`,clearConfirm:`Очистить`,clearIntroTitle:`Очистить холст`,clearIntroMessage:`Это действие нельзя отменить. Очистить все штрихи на текущем холсте?`,clearIntroEnable:`Включить защиту от очистки (всегда спрашивать подтверждение)`,clearProtectConfirmTitle:`Очистить холст`,clearProtectConfirmMessage:`Очистить все штрихи на текущем холсте?`},pen:{width:`Толщина`,smooth:`Сглаживание`},export:{format:`Формат`,exportVideo:`Экспорт видео`,cancel:`Отмена`,download:`Скачать {name}`,reexport:`Экспортировать снова`,prepare:`Подготовка`,encode:`Запись`,done:`Готово`,error:`Ошибка`,preparing:`Подготовка экспорта…`,exportFailed:`Ошибка экспорта`,layerImage:`Экспорт текущего слоя как изображения`,layerImageHint:`Экспортируйте редактируемый слой как изображение PNG; разрешение берётся из выбранного выше.`,exportLayerImage:`Экспорт как изображение`,saving:`Сохранение…`,saved:`Сохранено`,downloaded:`Загрузка изображения началась`,saveFailed:`Не удалось сохранить`,noLayer:`Нет слоя для экспорта`}},C_=[{code:`zh-CN`,labelKey:`settings.langZhCn`},{code:`zh-TW`,labelKey:`settings.langZhTw`},{code:`ja`,labelKey:`settings.langJa`},{code:`en`,labelKey:`settings.langEn`},{code:`ru`,labelKey:`settings.langRu`}],w_=C_.map(e=>e.code),T_=`svg-morph-video:lang`;function E_(){let e=localStorage.getItem(T_);if(e&&w_.includes(e))return e;let t=(navigator.language||`en`).toLowerCase();return t.startsWith(`zh`)?t.startsWith(`zh-tw`)||t.startsWith(`zh-hk`)||t.startsWith(`zh-mo`)?`zh-TW`:`zh-CN`:t.startsWith(`ja`)?`ja`:t.startsWith(`ru`)?`ru`:`en`}var D_=Qg({legacy:!1,globalInjection:!0,locale:E_(),fallbackLocale:`zh-CN`,messages:{"zh-CN":v_,"zh-TW":y_,ja:b_,en:x_,ru:S_}});function O_(e){e===`auto`?(localStorage.removeItem(T_),D_.global.locale.value=E_()):(localStorage.setItem(T_,e),D_.global.locale.value=e)}var k_=[`width`,`height`],A_=R({__name:`IconCheck`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2.4`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M20 6L9 17l-5-5`},null,-1)]],16,k_))}}),j_=[`width`,`height`],M_=R({__name:`IconChevronRight`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`},null,-1)]],16,j_))}}),N_=[`min`,`max`,`step`,`value`],P_=R({__name:`RangeSlider`,props:{modelValue:{},min:{},max:{},step:{default:1},mobileVertical:{type:Boolean,default:!1}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,i=I(null),a=I(0),o=null;function s(){let e=i.value;e&&(a.value=Math.max(e.clientWidth,e.clientHeight))}let c=G(()=>{let e=n.max>n.min?Math.min(100,Math.max(0,(n.modelValue-n.min)/(n.max-n.min)*100)):0,t=a.value;return t?`${((10+e/100*(t-20))/t*100).toFixed(2)}%`:`${Math.round(e)}%`});function l(e){r(`update:modelValue`,Number(e.target.value))}return Rr(()=>{s(),o=new ResizeObserver(s),i.value&&o.observe(i.value)}),Vr(()=>o?.disconnect()),(t,n)=>(B(),V(`div`,{ref_key:`rootRef`,ref:i,class:pe([`range`,{"range--vertical":e.mobileVertical}]),style:ce({"--fill":c.value})},[H(`input`,{class:`range__input`,type:`range`,min:e.min,max:e.max,step:e.step,value:e.modelValue,onInput:l},null,40,N_)],6))}}),F_=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},I_=F_(P_,[[`__scopeId`,`data-v-68259d7f`]]),L_=[`aria-label`],R_={class:`confirm-dialog__body`},z_={key:0,class:`confirm-dialog__title`},B_={key:1,class:`confirm-dialog__message`},V_={key:2,class:`confirm-dialog__check`},H_=[`checked`],U_={class:`confirm-dialog__check-label`},W_={class:`confirm-dialog__actions`},G_=F_(R({__name:`ConfirmDialog`,props:{open:{type:Boolean},title:{default:``},message:{default:``},confirmText:{default:``},cancelText:{default:``},danger:{type:Boolean,default:!1},checkboxLabel:{default:``},checkbox:{type:Boolean,default:!1}},emits:[`close`,`confirm`,`update:checkbox`],setup(e,{emit:t}){let{t:n}=$g(),r=t;function i(e){e.key===`Escape`&&r(`close`)}return Rr(()=>window.addEventListener(`keydown`,i)),Vr(()=>window.removeEventListener(`keydown`,i)),(t,i)=>(B(),Ea(or,{to:`body`},[U(So,{name:`confirm-dialog`},{default:In(()=>[e.open?(B(),V(`div`,{key:0,class:`confirm-mask`,onClick:i[3]||=Ss(e=>r(`close`),[`self`])},[H(`div`,{class:`confirm-dialog`,role:`alertdialog`,"aria-modal":`true`,"aria-label":e.title||void 0},[H(`div`,R_,[e.title?(B(),V(`h3`,z_,N(e.title),1)):W(``,!0),e.message?(B(),V(`p`,B_,N(e.message),1)):W(``,!0),e.checkboxLabel?(B(),V(`label`,V_,[H(`input`,{type:`checkbox`,class:`confirm-dialog__check-input`,checked:e.checkbox,onChange:i[0]||=e=>r(`update:checkbox`,e.target.checked)},null,40,H_),H(`span`,U_,N(e.checkboxLabel),1)])):W(``,!0)]),H(`div`,W_,[H(`button`,{class:`confirm-dialog__btn confirm-dialog__btn--cancel`,type:`button`,onClick:i[1]||=e=>r(`close`)},N(e.cancelText||L(n)(`common.cancel`)),1),i[4]||=H(`span`,{class:`confirm-dialog__v-sep`,"aria-hidden":`true`},null,-1),H(`button`,{class:pe([`confirm-dialog__btn confirm-dialog__btn--confirm`,{"confirm-dialog__btn--danger":e.danger}]),type:`button`,onClick:i[2]||=e=>r(`confirm`)},N(e.confirmText||L(n)(`common.confirm`)),3)])],8,L_)])):W(``,!0)]),_:1})]))}}),[[`__scopeId`,`data-v-97a3f182`]]),K_=[`value`],q_=F_(R({__name:`NumberField`,props:{modelValue:{},min:{},max:{default:1/0},step:{default:1}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,i=I(``),a=I(!1);function o(e){let t=Number.parseFloat(e);if(!Number.isFinite(t)){i.value=String(Math.round(n.modelValue));return}let a=t;n.step>0&&(a=Math.round(a/n.step)*n.step),a=Math.min(n.max,Math.max(n.min,a)),a=Math.round(a),r(`update:modelValue`,a),i.value=String(a)}function s(e){a.value=!0,i.value=String(Math.round(n.modelValue)),requestAnimationFrame(()=>e.target.select())}function c(e){i.value=e.target.value}function l(){a.value=!1,o(i.value)}return(t,n)=>(B(),V(`input`,{class:`number-field`,type:`text`,inputmode:`numeric`,value:a.value?i.value:String(Math.round(e.modelValue)),onFocus:s,onInput:c,onBlur:l,onKeydown:n[0]||=ws(e=>e.target.blur(),[`enter`])},null,40,K_))}}),[[`__scopeId`,`data-v-30e1ebf5`]]),J_=[`disabled`,`onClick`],Y_=F_(R({__name:`SegmentedControl`,props:{options:{},modelValue:{},disabled:{type:Boolean,default:!1},wrap:{type:Boolean,default:!1}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=t;return(t,r)=>(B(),V(`div`,{class:pe([`segmented`,{"segmented--wrap":e.wrap}])},[(B(!0),V(z,null,Qr(e.options,t=>(B(),V(`button`,{key:String(t.value),type:`button`,class:pe([`segmented__btn`,{"segmented__btn--active":t.value===e.modelValue}]),disabled:e.disabled||t.disabled,onClick:e=>n(`update:modelValue`,t.value)},N(t.label),11,J_))),128))],2))}}),[[`__scopeId`,`data-v-45e24160`]]),X_={class:`settings`},Z_={class:`settings__body`},Q_={class:`ios-group`},$_={class:`ios-group__title`},ev={class:`ios-group__card`},tv={class:`ios-cell`},nv={class:`ios-cell__label`},rv={class:`ios-cell__control`},iv={class:`ios-group`},av={class:`ios-group__title`},ov={class:`ios-group__card`},sv={class:`ios-cell`},cv={class:`ios-cell__label`},lv={class:`ios-cell__control`},uv={class:`ios-cell`},dv={class:`ios-cell__label`},fv={class:`ios-cell__control`},pv={class:`ios-cell`},mv={class:`ios-cell__label`},hv={class:`ios-cell__control`},gv={class:`ios-group`},_v={class:`ios-group__title`},vv={class:`ios-group__card`},yv={class:`ios-cell`},bv={class:`ios-cell__label`},xv={class:`ios-cell__control`},Sv={class:`ios-cell`},Cv={class:`ios-cell__label`},wv={class:`ios-cell__control`},Tv={class:`ios-group`},Ev={class:`ios-group__title`},Dv={class:`ios-group__card`},Ov={class:`ios-cell`},kv={class:`ios-cell__label`},Av={class:`ios-cell__control`},jv={class:`settings__unit`},Mv={class:`ios-cell ios-cell--stacked`},Nv={class:`ios-cell__stack`},Pv={class:`ios-cell__label`},Fv={class:`ios-cell__desc`},Iv={class:`ios-cell__control`},Lv={class:`ios-group`},Rv={class:`ios-group__title`},zv={class:`ios-group__card`},Bv={class:`ios-cell`},Vv={class:`ios-cell__label`},Hv=[`value`],Uv=[`value`],Wv={class:`ios-cell`},Gv={class:`ios-cell__label`},Kv={class:`ios-cell__control`},qv=[`title`],Jv=[`value`],Yv={class:`ios-cell ios-cell--stacked`},Xv={class:`ios-cell__stack`},Zv={class:`ios-cell__label`},Qv={class:`ios-cell__desc`},$v={class:`switch`},ey=[`checked`],ty={class:`ios-group`},ny={class:`ios-group__title`},ry={class:`ios-group__card`},iy={class:`ios-cell`},ay={class:`ios-cell__label`},oy={class:`settings__palette`},sy=[`title`],cy=[`value`,`onInput`],ly=[`title`,`onClick`],uy=[`title`],dy={class:`ios-cell ios-cell--hint`},fy={class:`ios-cell__desc`},py={class:`ios-group`},my={class:`ios-group__title`},hy={class:`ios-group__card`},gy={key:0,class:`ios-cell__separator`,"aria-hidden":`true`},_y=[`onClick`],vy={class:`ios-group`},yy={class:`ios-group__title`},by={class:`ios-group__card`},xy=[`href`],Sy={class:`ios-cell__stack`},Cy={class:`ios-cell__label`},wy={class:`ios-cell__desc`},Ty={class:`ios-group`},Ey=F_(R({__name:`SettingsPanel`,setup(e){let t=nf(),n=g_(),{t:r}=$g();function i(e){t.setConfig({initialAnimation:e})}function a(e){n.setPreference(e)}function o(e,n){let r=t.config.palette.slice();r[e]=n.target.value,t.setConfig({palette:r})}function s(){t.setConfig({palette:[...t.config.palette,Yu(t.config.palette)]})}function c(e){if(t.config.palette.length<=1)return;let n=t.config.palette.slice();n.splice(e,1),t.setConfig({palette:n})}let l=G({get:()=>t.config.morphDurationMs,set:e=>t.setConfig({morphDurationMs:Number(e)})}),u=G({get:()=>t.config.holdDurationMs,set:e=>t.setConfig({holdDurationMs:Number(e)})}),d=G({get:()=>t.config.initialDurationMs,set:e=>t.setConfig({initialDurationMs:Number(e)})}),f=G({get:()=>t.config.frameRate,set:e=>t.setConfig({frameRate:Number(e)})}),p=G({get:()=>t.config.sfxVolume,set:e=>t.setConfig({sfxVolume:Number(e)})}),m=G(()=>`${Math.round(p.value*100)}%`);function h(e){t.setConfig({changeSound:e})}let g=G(()=>t.config.backgroundColor);function _(e){t.setConfig({backgroundColor:e.target.value})}let v=G(()=>{let{width:e,height:n}=t.config.resolution;return`${e}x${n}`}),y=I(localStorage.getItem(`svg-morph-video:lang`)??`auto`),b=G(()=>[{value:`auto`,label:r(`settings.langAuto`)},...C_.map(e=>({value:e.code,label:r(e.labelKey)}))]);function x(e){y.value=e,O_(e)}function S(e){let[n,r]=e.split(`x`).map(Number);n&&r&&t.setResolution(n,r)}let C=I(!1);function w(){t.setConfig(Rd),t.resetSequenceToDefault(),n.setPreference(`auto`),O_(`auto`),y.value=`auto`,C.value=!1}return(e,T)=>(B(),V(z,null,[H(`section`,X_,[H(`div`,Z_,[H(`div`,Q_,[H(`h3`,$_,N(L(r)(`settings.groupAppearance`)),1),H(`div`,ev,[H(`div`,tv,[H(`span`,nv,N(L(r)(`settings.theme`)),1),H(`div`,rv,[U(Y_,{"model-value":L(n).preference,options:[{value:`light`,label:L(r)(`theme.light`)},{value:`dark`,label:L(r)(`theme.dark`)},{value:`auto`,label:L(r)(`theme.auto`)}],"onUpdate:modelValue":a},null,8,[`model-value`,`options`])])])])]),H(`div`,iv,[H(`h3`,av,N(L(r)(`settings.groupTime`)),1),H(`div`,ov,[H(`div`,sv,[H(`span`,cv,N(L(r)(`settings.morphSpeed`)),1),H(`div`,lv,[U(I_,{modelValue:l.value,"onUpdate:modelValue":T[0]||=e=>l.value=e,min:L(100),max:L(Hd),step:100},null,8,[`modelValue`,`min`,`max`]),U(q_,{modelValue:l.value,"onUpdate:modelValue":T[1]||=e=>l.value=e,min:L(100),step:100},null,8,[`modelValue`,`min`]),T[14]||=H(`span`,{class:`settings__unit`},`ms`,-1)])]),T[17]||=H(`div`,{class:`ios-cell__separator`},null,-1),H(`div`,uv,[H(`span`,dv,N(L(r)(`settings.hold`)),1),H(`div`,fv,[U(I_,{modelValue:u.value,"onUpdate:modelValue":T[2]||=e=>u.value=e,min:L(0),max:L(Ud),step:50},null,8,[`modelValue`,`min`,`max`]),U(q_,{modelValue:u.value,"onUpdate:modelValue":T[3]||=e=>u.value=e,min:L(0),step:50},null,8,[`modelValue`,`min`]),T[15]||=H(`span`,{class:`settings__unit`},`ms`,-1)])]),T[18]||=H(`div`,{class:`ios-cell__separator`},null,-1),H(`div`,pv,[H(`span`,mv,N(L(r)(`settings.initial`)),1),H(`div`,hv,[U(I_,{modelValue:d.value,"onUpdate:modelValue":T[4]||=e=>d.value=e,min:L(0),max:L(Gd),step:50},null,8,[`modelValue`,`min`,`max`]),U(q_,{modelValue:d.value,"onUpdate:modelValue":T[5]||=e=>d.value=e,min:L(0),step:50},null,8,[`modelValue`,`min`]),T[16]||=H(`span`,{class:`settings__unit`},`ms`,-1)])])])]),H(`div`,gv,[H(`h3`,_v,N(L(r)(`settings.groupAnimation`)),1),H(`div`,vv,[H(`div`,yv,[H(`span`,bv,N(L(r)(`settings.initialAnimation`)),1),H(`div`,xv,[U(Y_,{"model-value":L(t).config.initialAnimation,options:[{value:`stroke`,label:L(r)(`settings.write`)},{value:`fade`,label:L(r)(`settings.fade`)}],"onUpdate:modelValue":i},null,8,[`model-value`,`options`])])]),T[20]||=H(`div`,{class:`ios-cell__separator`},null,-1),H(`div`,Sv,[H(`span`,Cv,N(L(r)(`settings.frameRate`)),1),H(`div`,wv,[U(I_,{modelValue:f.value,"onUpdate:modelValue":T[6]||=e=>f.value=e,min:L(1),max:L(120),step:1},null,8,[`modelValue`,`min`,`max`]),U(q_,{modelValue:f.value,"onUpdate:modelValue":T[7]||=e=>f.value=e,min:L(1),max:L(120),step:1},null,8,[`modelValue`,`min`,`max`]),T[19]||=H(`span`,{class:`settings__unit`},`fps`,-1)])])])]),H(`div`,Tv,[H(`h3`,Ev,N(L(r)(`settings.groupSound`)),1),H(`div`,Dv,[H(`div`,Ov,[H(`span`,kv,N(L(r)(`settings.sfxVolume`)),1),H(`div`,Av,[U(I_,{modelValue:p.value,"onUpdate:modelValue":T[8]||=e=>p.value=e,min:0,max:1,step:.01},null,8,[`modelValue`]),H(`span`,jv,N(m.value),1)])]),T[21]||=H(`div`,{class:`ios-cell__separator`},null,-1),H(`div`,Mv,[H(`div`,Nv,[H(`span`,Pv,N(L(r)(`settings.changeSound`)),1),H(`span`,Fv,N(L(r)(`settings.changeSoundDesc`)),1)]),H(`div`,Iv,[U(Y_,{"model-value":L(t).config.changeSound,options:[{value:`off`,label:L(r)(`settings.changeOff`)},{value:`1`,label:L(r)(`settings.change1`)},{value:`2`,label:L(r)(`settings.change2`)}],"onUpdate:modelValue":h},null,8,[`model-value`,`options`])])])])]),H(`div`,Lv,[H(`h3`,Rv,N(L(r)(`settings.groupCanvas`)),1),H(`div`,zv,[H(`div`,Bv,[H(`span`,Vv,N(L(r)(`settings.resolution`)),1),H(`select`,{class:`settings__select`,value:v.value,onChange:T[9]||=e=>S(e.target.value)},[(B(!0),V(z,null,Qr(L(__),e=>(B(),V(`option`,{key:e.label,value:`${e.size}x${e.size}`},N(e.label),9,Uv))),128))],40,Hv)]),T[23]||=H(`div`,{class:`ios-cell__separator`},null,-1),H(`div`,Wv,[H(`span`,Gv,N(L(r)(`settings.bgColor`)),1),H(`div`,Kv,[H(`span`,{class:`settings__swatch`,style:ce({background:g.value}),title:L(r)(`settings.bgColorTitle`)},[H(`input`,{type:`color`,value:g.value,onInput:T[10]||=e=>_(e)},null,40,Jv)],12,qv)])]),T[24]||=H(`div`,{class:`ios-cell__separator`},null,-1),H(`div`,Yv,[H(`div`,Xv,[H(`span`,Zv,N(L(r)(`settings.clearProtect`)),1),H(`span`,Qv,N(L(r)(`settings.clearProtectDesc`)),1)]),H(`label`,$v,[H(`input`,{type:`checkbox`,checked:L(t).config.clearProtect,onChange:T[11]||=e=>L(t).setConfig({clearProtect:e.target.checked})},null,40,ey),T[22]||=H(`span`,{class:`switch__track`},[H(`span`,{class:`switch__thumb`})],-1)])])])]),H(`div`,ty,[H(`h3`,ny,N(L(r)(`settings.groupPalette`)),1),H(`div`,ry,[H(`div`,iy,[H(`span`,ay,N(L(r)(`settings.penColors`)),1),H(`div`,oy,[(B(!0),V(z,null,Qr(L(t).config.palette,(e,n)=>(B(),V(`div`,{key:n,class:`settings__swatch settings__palette-swatch`,style:ce({background:e}),title:L(r)(`settings.paletteEditTitle`)},[H(`input`,{type:`color`,value:e,onInput:e=>o(n,e)},null,40,cy),L(t).config.palette.length>1?(B(),V(`button`,{key:0,type:`button`,class:`settings__palette-remove`,title:L(r)(`settings.paletteRemoveTitle`),onClick:e=>c(n)},` × `,8,ly)):W(``,!0)],12,sy))),128)),H(`button`,{type:`button`,class:`settings__palette-add`,title:L(r)(`settings.paletteAddTitle`),onClick:s},` + `,8,uy)])]),T[25]||=H(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),H(`div`,dy,[H(`span`,fy,N(L(r)(`settings.paletteHint`)),1)])])]),H(`div`,py,[H(`h3`,my,N(L(r)(`settings.groupLanguage`)),1),H(`div`,hy,[(B(!0),V(z,null,Qr(b.value,(e,t)=>(B(),V(z,{key:e.value},[t>0?(B(),V(`div`,gy)):W(``,!0),H(`button`,{type:`button`,class:pe([`settings__lang-row`,{"settings__lang-row--active":y.value===e.value}]),onClick:t=>x(e.value)},[H(`span`,null,N(e.label),1),y.value===e.value?(B(),Ea(A_,{key:0,class:`settings__lang-check`,size:14})):W(``,!0)],10,_y)],64))),128))])]),H(`div`,vy,[H(`h3`,yy,N(L(r)(`settings.about`)),1),H(`div`,by,[H(`a`,{class:`ios-cell ios-cell--link`,href:`https://space.bilibili.com/${L(Vu)}`,target:`_blank`,rel:`noopener noreferrer`},[H(`span`,Sy,[H(`span`,Cy,N(L(r)(`settings.author`)),1),H(`span`,wy,N(L(r)(`settings.authorDesc`,{author:L(Bu)})),1)]),U(M_,{class:`ios-cell__chevron`,size:16})],8,xy)])]),H(`div`,Ty,[H(`button`,{type:`button`,class:`settings__reset-btn`,onClick:T[12]||=e=>C.value=!0},N(L(r)(`settings.resetAll`)),1)])])]),U(G_,{open:C.value,title:L(r)(`settings.resetAll`),message:L(r)(`settings.resetAllMessage`),"confirm-text":L(r)(`settings.reset`),"cancel-text":L(r)(`common.cancel`),danger:``,onClose:T[13]||=e=>C.value=!1,onConfirm:w},null,8,[`open`,`title`,`message`,`confirm-text`,`cancel-text`])],64))}}),[[`__scopeId`,`data-v-bee14166`]]),Dy={class:`app__settings-title`},Oy={class:`app__settings-scroll`},ky=F_(R({__name:`LeftSettingsPanel`,props:{collapsed:{type:Boolean}},emits:[`toggle`],setup(e,{emit:t}){let n=t,{t:r}=$g();return(t,i)=>(B(),V(`aside`,{class:pe([`app__left`,{"app__left--collapsed":e.collapsed}])},[H(`div`,{class:`app__settings-head`,onClick:i[0]||=e=>n(`toggle`)},[H(`h2`,Dy,N(L(r)(`settings.title`)),1)]),H(`div`,Oy,[U(Ey)])],2))}}),[[`__scopeId`,`data-v-e0ba7bc5`]]),Ay={class:`pen-sliders`},jy={class:`pen-sliders__field`},My={class:`pen-sliders__label`},Ny={class:`pen-sliders__field`},Py={class:`pen-sliders__label`},Fy=F_(R({__name:`PenSliders`,props:{width:{},smoothing:{}},emits:[`update:width`,`update:smoothing`],setup(e,{emit:t}){let{t:n}=$g(),r=t;return(t,i)=>(B(),V(`div`,Ay,[H(`label`,jy,[H(`span`,My,N(L(n)(`pen.width`)),1),U(I_,{"model-value":e.width,min:.004,max:.05,step:.001,"mobile-vertical":``,"onUpdate:modelValue":i[0]||=e=>r(`update:width`,e)},null,8,[`model-value`])]),i[2]||=H(`span`,{class:`pen-sliders__sep`},null,-1),H(`label`,Ny,[H(`span`,Py,N(L(n)(`pen.smooth`)),1),U(I_,{"model-value":e.smoothing,min:0,max:1,step:.05,"mobile-vertical":``,"onUpdate:modelValue":i[1]||=e=>r(`update:smoothing`,e)},null,8,[`model-value`])])]))}}),[[`__scopeId`,`data-v-bb7275e3`]]),Iy=[`width`,`height`],Ly=R({__name:`IconPlay`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M8 5v14l11-7z`},null,-1)]],16,Iy))}}),Ry=[`width`,`height`],zy=R({__name:`IconUndo`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z`},null,-1)]],16,Ry))}}),By=[`width`,`height`],Vy=R({__name:`IconTrash`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z`},null,-1)]],16,By))}}),Hy={class:`draw-panel`},Uy=[`title`,`aria-label`],Wy={class:`draw-panel__group`},Gy=[`title`],Ky=[`value`],qy={class:`draw-panel__group`},Jy=[`aria-label`,`onClick`],Yy={class:`draw-panel__group`},Xy=[`title`,`disabled`],Zy=[`title`,`disabled`],Qy=F_(R({__name:`DrawingPanel`,props:{color:{},width:{},smoothing:{},canUndo:{type:Boolean},canClear:{type:Boolean}},emits:[`update:color`,`update:width`,`update:smoothing`,`undo`,`clear`,`done`,`play`],setup(e,{emit:t}){let n=e,r=t,i=nf(),{t:a}=$g();return(t,o)=>(B(),V(`aside`,Hy,[H(`button`,{class:`draw-panel__close`,type:`button`,title:L(a)(`draw.play`),"aria-label":L(a)(`draw.play`),onClick:o[0]||=e=>r(`play`)},[U(Ly,{size:15})],8,Uy),o[6]||=H(`span`,{class:`draw-panel__sep`},null,-1),H(`div`,Wy,[H(`label`,{class:`draw-panel__fore`,style:ce({background:e.color}),title:L(a)(`draw.pickColor`)},[H(`input`,{type:`color`,value:e.color,onInput:o[1]||=e=>r(`update:color`,e.target.value)},null,40,Ky)],12,Gy)]),o[7]||=H(`span`,{class:`draw-panel__sep`},null,-1),H(`div`,qy,[(B(!0),V(z,null,Qr(L(i).config.palette,t=>(B(),V(`button`,{key:t,type:`button`,class:pe([`draw-panel__color`,{"draw-panel__color--active":t===e.color}]),style:ce({background:t}),"aria-label":L(a)(`draw.penColor`,{color:t}),onClick:e=>r(`update:color`,t)},null,14,Jy))),128))]),o[8]||=H(`span`,{class:`draw-panel__sep`},null,-1),H(`div`,Yy,[H(`button`,{type:`button`,class:`draw-panel__icon-btn`,title:L(a)(`draw.undo`),disabled:!e.canUndo,onClick:o[2]||=e=>r(`undo`)},[U(zy,{size:15})],8,Xy),H(`button`,{type:`button`,class:`draw-panel__icon-btn`,title:L(a)(`draw.clear`),disabled:!e.canClear,onClick:o[3]||=e=>r(`clear`)},[U(Vy,{size:15})],8,Zy)]),o[9]||=H(`span`,{class:`draw-panel__sep`},null,-1),U(Fy,{width:n.width,smoothing:n.smoothing,"onUpdate:width":o[4]||=e=>r(`update:width`,e),"onUpdate:smoothing":o[5]||=e=>r(`update:smoothing`,e)},null,8,[`width`,`smoothing`])]))}}),[[`__scopeId`,`data-v-3ef6f4d6`]]);function $y(e,t,n=0){let r=Math.min(e,t)*(1-2*n);return{scale:r,offsetX:(e-r)/2,offsetY:(t-r)/2}}function eb(e,t){return{x:t.offsetX+e.x*t.scale,y:t.offsetY+e.y*t.scale}}var tb=`#ffffff`,nb=`#000000`;function rb(e,t,n,r,i={}){let a=i.backgroundColor??tb,o=i.strokeColor??nb,s=i.colors??[],c=i.widths??[],l=Math.min(1,Math.max(0,i.alpha??1)),u=i.padding??0;if(e.clearRect(0,0,t,n),e.fillStyle=a,e.fillRect(0,0,t,n),r.length===0)return;let d=$y(t,n,u);e.globalAlpha=l,e.lineJoin=`round`,e.lineCap=`round`;for(let t=0;t<r.length;t++){let n=r[t];if(n.length<2)continue;let i=s[t],a=c[t]??.015;e.lineWidth=Math.max(2,d.scale*a),e.beginPath();let l=eb(n[0],d);e.moveTo(l.x,l.y);for(let t=1;t<n.length;t++){let r=eb(n[t],d);e.lineTo(r.x,r.y)}let u=i?i.stroke:o;u!==null&&(e.strokeStyle=u,e.stroke())}}var ib={class:`morph-canvas`},ab=F_(R({__name:`MorphCanvas`,setup(e){let t=nf(),{currentPaths:n,currentStrokeColor:r,currentColors:i,currentWidths:a,currentAlpha:o,start:s}=Vf(),c=I(null),l=null;function u(){let e=c.value;if(!e)return;let{width:n,height:r}=t.config.resolution;e.width=n,e.height=r}function d(){let e=c.value;if(!e)return;let s=e.getContext(`2d`);if(!s)return;let{width:u,height:f}=e;s.clearRect(0,0,u,f);let p=n.value;if(p.length===0){l=requestAnimationFrame(d);return}rb(s,u,f,p,{backgroundColor:t.config.backgroundColor,strokeColor:r.value,colors:i.value,widths:a.value,alpha:o.value}),l=requestAnimationFrame(d)}return Rr(()=>{u(),l=requestAnimationFrame(d),s()}),Vr(()=>{l!==null&&cancelAnimationFrame(l)}),Gn(()=>t.config.resolution,()=>u(),{deep:!0}),(e,t)=>(B(),V(`div`,ib,[H(`canvas`,{ref_key:`canvasRef`,ref:c,class:`morph-canvas__surface`},null,512)]))}}),[[`__scopeId`,`data-v-66ac9472`]]),ob=.25;function sb(e){return Math.min(4,Math.max(ob,e))}function cb(){return{scale:1,panX:0,panY:0}}function lb(e,t,n){return{x:(t-e.panX)/e.scale,y:(n-e.panY)/e.scale}}function ub(e,t,n){let r=sb(e.scale*n),i=r/e.scale;return{scale:r,panX:t.x-(t.x-e.panX)*i,panY:t.y-(t.y-e.panY)*i}}function db(e,t,n,r,i){let a=Math.max(.001,t),o=sb(e.scale*(r/a)),s=lb(e,n.x,n.y);return{scale:o,panX:i.x-s.x*o,panY:i.y-s.y*o}}var fb=420,pb=.38,mb=.24,hb=1.8,gb=F_(R({__name:`DrawingCanvas`,props:{strokes:{},base:{},color:{},width:{},smoothing:{},scale:{},panX:{},panY:{}},emits:[`stroke`,`update:scale`,`update:panX`,`update:panY`,`undo`],setup(e,{expose:t,emit:n}){let r=e,i=n,a=nf(),o=I(null),s=I(null),c=!1,l=[],u=null,d=It({active:!1,scale:1,alpha:1}),f=0;function p(e){return 1+2.70158*(e-1)**3+1.70158*(e-1)**2}function m(){f&&cancelAnimationFrame(f),f=0,d.active=!1,d.scale=1,d.alpha=1,k()}function h(){return f||r.strokes.length===0?Promise.resolve():new Promise(e=>{let t=performance.now();d.active=!0,d.scale=1,d.alpha=1;let n=r=>{let i=Math.min(1,(r-t)/fb);if(i<pb)d.scale=1+mb*p(i/pb),d.alpha=1;else{let e=(i-pb)/.62;d.scale=1.24,d.alpha=1-e**hb}if(k(),i<1){f=requestAnimationFrame(n);return}m(),e()};f=requestAnimationFrame(n)})}let g=It({...cb(),scale:r.scale,panX:r.panX,panY:r.panY}),_=I({w:1,h:1}),v=!1,y=null;function b(){let e=s.value,{width:t,height:n}=a.config.resolution;if(!e)return{w:t,h:n};let r=e.clientWidth||1,i=e.clientHeight||1,o=Math.min(r/t,i/n);return{w:Math.max(1,t*o),h:Math.max(1,n*o)}}let x=G(()=>{let e=g.scale,{w:t,h:n}=_.value,r=(g.panX+(e-1)/2)*t,i=(g.panY+(e-1)/2)*n;return`translate3d(${r.toFixed(2)}px, ${i.toFixed(2)}px, 0) scale(${e})`}),S=!1,C=null,w=new Map,T=null;function E(e,t){let n=s.value.getBoundingClientRect(),r=n.width||1,i=n.height||1,{w:a,h:o}=_.value,c=r/(a||1),l=i/(o||1);return{x:((e-n.left)/r-.5)*c+.5,y:((t-n.top)/i-.5)*l+.5}}function D(e,t){let n=o.value.getBoundingClientRect(),r=(e-n.left)/(n.width||1),i=(t-n.top)/(n.height||1),{width:s,height:c}=a.config.resolution,l=$y(s,c,0);return{x:(r*s-l.offsetX)/l.scale,y:(i*c-l.offsetY)/l.scale}}function O(){let e=o.value;if(!e)return;let{width:t,height:n}=a.config.resolution;e.width=t,e.height=n}function k(){let e=o.value,t=e?.getContext(`2d`);if(!e||!t)return;let{width:n,height:i}=e,s=$y(n,i,0);t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,n,i),t.fillStyle=a.config.backgroundColor,t.fillRect(0,0,n,i),t.lineJoin=`round`,t.lineCap=`round`;let f=(e,n,r)=>{if(e.length<2)return;t.beginPath();let i=eb(e[0],s);t.moveTo(i.x,i.y);for(let n=1;n<e.length;n++){let r=eb(e[n],s);t.lineTo(r.x,r.y)}t.strokeStyle=n,t.lineWidth=Math.max(2,s.scale*r),t.stroke()};if(r.base)for(let e=0;e<r.base.subpaths.length;e++){let t=r.base.subpathWidths?.[e]??.015;f(r.base.subpaths[e],r.base.subpathColors[e]?.stroke??`#000000`,t)}t.save(),d.active&&(t.globalAlpha=d.alpha,t.translate(n/2,i/2),t.scale(d.scale,d.scale),t.translate(-n/2,-i/2));for(let e of r.strokes)f(e.points,e.color,e.width);u&&f(u.points,u.color,u.width),c&&l.length>=2&&f(l,r.color,r.width),t.restore(),t.setTransform(1,0,0,1,0,0)}function A(e){let t=e.scale!==g.scale,n=e.panX!==g.panX||e.panY!==g.panY;g.scale=e.scale,g.panX=e.panX,g.panY=e.panY,t&&i(`update:scale`,g.scale),n&&(i(`update:panX`,g.panX),i(`update:panY`,g.panY))}function j(){_.value=b(),A(cb()),k()}t({resetView:j,playClearFx:h});function ee(e){if(e.button===1){e.preventDefault(),S=!0,C=E(e.clientX,e.clientY),o.value?.setPointerCapture(e.pointerId);return}if(w.set(e.pointerId,E(e.clientX,e.clientY)),w.size>=2){c=!1;let t=[...w.values()],n={x:(t[0].x+t[1].x)/2,y:(t[0].y+t[1].y)/2},r=Math.hypot(t[1].x-t[0].x,t[1].y-t[0].y);T={view0:{...g},dist0:r,center0:n},o.value?.setPointerCapture(e.pointerId);return}e.button===0&&(o.value?.setPointerCapture(e.pointerId),c=!0,l=[D(e.clientX,e.clientY)],k())}function te(e){if(S){let t=E(e.clientX,e.clientY);C&&A({...g,panX:g.panX+(t.x-C.x),panY:g.panY+(t.y-C.y)}),C=t;return}if(w.size>=2&&T&&w.has(e.pointerId)){let t=E(e.clientX,e.clientY);w.set(e.pointerId,t);let n=[...w.values()],r={x:(n[0].x+n[1].x)/2,y:(n[0].y+n[1].y)/2},i=Math.hypot(n[1].x-n[0].x,n[1].y-n[0].y);A(db(T.view0,T.dist0,T.center0,i,r));return}if(!c)return;let t=D(e.clientX,e.clientY),n=l[l.length-1];Math.hypot(t.x-n.x,t.y-n.y)<.001||(l.push(t),k())}function M(e){if(e.button===1){S=!1,C=null,w.delete(e.pointerId);try{o.value?.releasePointerCapture(e.pointerId)}catch{}return}if(w.delete(e.pointerId),ne()){w.size<2&&(T=null);try{o.value?.releasePointerCapture(e.pointerId)}catch{}return}if(!c)return;c=!1;try{o.value?.releasePointerCapture(e.pointerId)}catch{}let t=wu(gu(l,1e-6),r.smoothing);if(t.length>=2){let e={points:t,color:r.color,width:r.width};u=e,i(`stroke`,e)}k()}function ne(){return c===!1&&w.size>0&&T!==null}function re(e){e.preventDefault();let t=E(e.clientX,e.clientY),n=e.deltaY<0?1.1:1/1.1;A(ub(g,t,n))}function ie(e){let t=e.target?.tagName;t!==`INPUT`&&t!==`TEXTAREA`&&t!==`SELECT`&&(e.ctrlKey||e.metaKey)&&!e.altKey&&e.key.toLowerCase()===`z`&&(e.preventDefault(),i(`undo`))}return Rr(()=>{O(),_.value=b(),k(),y=new ResizeObserver(()=>{v||(_.value=b(),v=!0,k(),y?.disconnect())}),s.value&&y.observe(s.value),window.addEventListener(`keydown`,ie)}),Vr(()=>{c=!1,f&&cancelAnimationFrame(f),y?.disconnect(),window.removeEventListener(`keydown`,ie)}),Gn(()=>r.strokes,()=>{u=null,k()},{deep:!0}),Gn(()=>[r.color,r.width,a.config.backgroundColor],()=>k()),Gn(()=>a.config.resolution,()=>{O(),_.value=b(),k()},{deep:!0}),Gn(()=>r.scale,e=>{e!==g.scale&&(g.scale=e,k())}),Gn(()=>[r.panX,r.panY],([e,t])=>{e!==g.panX&&(g.panX=e),t!==g.panY&&(g.panY=t)}),(e,t)=>(B(),V(`div`,{ref_key:`hostRef`,ref:s,class:`drawing-canvas`},[H(`canvas`,{ref_key:`canvasRef`,ref:o,class:pe([`drawing-canvas__surface`,{"drawing-canvas__surface--panning":L(S),"drawing-canvas__surface--clearing":d.active}]),style:ce({width:`${_.value.w}px`,height:`${_.value.h}px`,transform:x.value}),onPointerdown:ee,onPointermove:te,onPointerup:M,onPointercancel:M,onWheel:re},null,38)],512))}}),[[`__scopeId`,`data-v-deabf930`]]),_b=[`width`,`height`],vb=R({__name:`IconReplay`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`},null,-1)]],16,_b))}}),yb=[`width`,`height`],bb=R({__name:`IconExport`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z`},null,-1)]],16,yb))}}),xb=[`width`,`height`],Sb=R({__name:`IconRestoreView`,props:{size:{default:18}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M9 4H4v5`},null,-1),H(`path`,{d:`M15 4h5v5`},null,-1),H(`path`,{d:`M9 20H4v-5`},null,-1),H(`path`,{d:`M15 20h5v-5`},null,-1)]],16,xb))}}),Cb={class:`app__stage`},wb={class:`app__stage-main`},Tb={class:`app__canvas-wrap`},Eb=[`aria-label`],Db=[`disabled`,`aria-label`,`title`],Ob={key:3,class:`app__controls`},kb=[`data-status`,`aria-label`],Ab=F_(R({__name:`CanvasStage`,props:si({editingLayer:{},strokes:{},base:{},status:{}},{color:{required:!0},colorModifiers:{},width:{required:!0},widthModifiers:{},smoothing:{required:!0},smoothingModifiers:{},scale:{required:!0},scaleModifiers:{}}),emits:si([`undo`,`clear`,`done`,`play`,`stroke`,`replay`,`export`],[`update:color`,`update:width`,`update:smoothing`,`update:scale`]),setup(e,{emit:t}){let n=nf(),r=e,i=Di(e,`color`),a=Di(e,`width`),o=Di(e,`smoothing`),s=Di(e,`scale`),c=t,{t:l}=$g(),u=I(null),d=G(()=>Math.round(s.value*100)),f=G(()=>Math.abs(s.value-1)>1e-6),p=G(()=>r.status===`playing`?l(`app.replaying`):l(`app.replay`)),m=I({x:0,y:0});function h(){u.value?.resetView()}let g=I(!1);function _(){g.value||(vd(`undo`),c(`undo`))}async function v(){if(!g.value){g.value=!0,vd(`clear`);try{await u.value?.playClearFx()}finally{g.value=!1}c(`clear`)}}function y(){if(n.config.clearProtect){S.value=!0;return}if(!n.clearIntroSeen){n.markClearIntroSeen(),x.value=!1,b.value=!0;return}v()}let b=I(!1),x=I(!1),S=I(!1);function C(){b.value=!1,x.value&&n.setConfig({clearProtect:!0}),v()}function w(){S.value=!1,v()}function T(){c(`export`)}return(t,n)=>(B(),V(z,null,[H(`section`,Cb,[H(`div`,wb,[e.editingLayer?(B(),Ea(Qy,{key:0,color:i.value,"onUpdate:color":n[0]||=e=>i.value=e,width:a.value,"onUpdate:width":n[1]||=e=>a.value=e,smoothing:o.value,"onUpdate:smoothing":n[2]||=e=>o.value=e,"can-undo":e.strokes.length>0&&!g.value,"can-clear":e.strokes.length>0&&!g.value,onUndo:_,onClear:y,onDone:n[3]||=e=>c(`done`),onPlay:n[4]||=e=>c(`play`)},null,8,[`color`,`width`,`smoothing`,`can-undo`,`can-clear`])):W(``,!0),H(`div`,Tb,[e.editingLayer?(B(),Ea(gb,{key:e.editingLayer.id,ref_key:`canvasRef`,ref:u,strokes:e.strokes,base:e.base,color:i.value,width:a.value,smoothing:o.value,scale:s.value,"onUpdate:scale":n[5]||=e=>s.value=e,"pan-x":m.value.x,"onUpdate:panX":n[6]||=e=>m.value.x=e,"pan-y":m.value.y,"onUpdate:panY":n[7]||=e=>m.value.y=e,onStroke:n[8]||=e=>c(`stroke`,e),onUndo:_},null,8,[`strokes`,`base`,`color`,`width`,`smoothing`,`scale`,`pan-x`,`pan-y`])):(B(),Ea(ab,{key:0})),e.editingLayer?(B(),V(`div`,{key:2,class:`app__zoom`,"aria-label":L(l)(`app.zoomLabel`)},[H(`span`,{class:pe([`app__zoom-pct`,{"is-zoomed":f.value}])},N(d.value)+`%`,3),H(`button`,{class:`app__zoom-reset`,type:`button`,disabled:!f.value,"aria-label":L(l)(`app.zoomReset`),title:L(l)(`app.zoomReset`),onClick:h},[U(Sb,{size:18})],8,Db)],8,Eb)):W(``,!0),e.editingLayer?W(``,!0):(B(),V(`div`,Ob,[H(`button`,{class:`app__replay`,type:`button`,"data-status":e.status,"aria-label":e.status===`playing`?L(l)(`app.ariaReplayPlaying`):L(l)(`app.ariaReplay`),onClick:n[9]||=e=>c(`replay`)},[U(vb,{size:16}),Pa(` `+N(p.value),1)],8,kb),H(`button`,{class:`app__export`,type:`button`,onClick:T},[U(bb,{size:15}),Pa(` `+N(L(l)(`app.export`)),1)])]))])])]),U(G_,{open:b.value,title:L(l)(`draw.clearIntroTitle`),message:L(l)(`draw.clearIntroMessage`),"checkbox-label":L(l)(`draw.clearIntroEnable`),checkbox:x.value,"confirm-text":L(l)(`draw.clearConfirm`),"cancel-text":L(l)(`common.cancel`),danger:``,"onUpdate:checkbox":n[10]||=e=>x.value=e,onClose:n[11]||=e=>b.value=!1,onConfirm:C},null,8,[`open`,`title`,`message`,`checkbox-label`,`checkbox`,`confirm-text`,`cancel-text`]),U(G_,{open:S.value,title:L(l)(`draw.clearProtectConfirmTitle`),message:L(l)(`draw.clearProtectConfirmMessage`),"confirm-text":L(l)(`draw.clearConfirm`),"cancel-text":L(l)(`common.cancel`),danger:``,onClose:n[12]||=e=>S.value=!1,onConfirm:w},null,8,[`open`,`title`,`message`,`confirm-text`,`cancel-text`])],64))}}),[[`__scopeId`,`data-v-614171ac`]]),jb=[`width`,`height`],Mb=R({__name:`IconClose`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M6 6l12 12M18 6L6 18`},null,-1)]],16,jb))}}),Nb=[`aria-label`],Pb={class:`modal-dialog__head`},Fb={class:`modal-dialog__title`},Ib={class:`modal-dialog__head-actions`},Lb=[`aria-label`],Rb={class:`modal-dialog__body`},zb=F_(R({__name:`ModalDialog`,props:{open:{type:Boolean},title:{default:``},width:{default:`min(380px, calc(100vw - 48px))`},zIndex:{default:120}},emits:[`close`],setup(e,{emit:t}){let n=t,{t:r}=$g();function i(e){e.key===`Escape`&&n(`close`)}return Rr(()=>window.addEventListener(`keydown`,i)),Vr(()=>window.removeEventListener(`keydown`,i)),(t,i)=>(B(),Ea(or,{to:`body`},[U(So,{name:`modal-dialog`},{default:In(()=>[e.open?(B(),V(`div`,{key:0,class:`modal-mask`,style:ce({zIndex:e.zIndex}),onClick:i[1]||=Ss(e=>n(`close`),[`self`])},[H(`div`,{class:`modal-dialog`,style:ce({width:e.width}),role:`dialog`,"aria-modal":`true`,"aria-label":e.title||void 0},[H(`div`,Pb,[H(`h3`,Fb,[ei(t.$slots,`title`,{},()=>[Pa(N(e.title),1)],!0)]),H(`div`,Ib,[ei(t.$slots,`actions`,{},void 0,!0),H(`button`,{class:`modal-dialog__close`,type:`button`,"aria-label":L(r)(`common.close`),onClick:i[0]||=e=>n(`close`)},[U(Mb,{size:16})],8,Lb)])]),ei(t.$slots,`fixed`,{},void 0,!0),H(`div`,Rb,[ei(t.$slots,`default`,{},void 0,!0)])],12,Nb)],4)):W(``,!0)]),_:3})]))}}),[[`__scopeId`,`data-v-5621ef5e`]]),Bb={class:`import-custom`},Vb={class:`import-custom__pick`,type:`button`},Hb={key:0,class:`import-custom__status is-error`,role:`status`},Ub={key:1,class:`import-custom__status`,role:`status`},Wb=307200,Gb=F_(R({__name:`ImportCustomDialog`,props:{open:{type:Boolean}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,{t:i}=$g(),a=nf(),o=I(null),s=I(``),c=I(``);Gn(()=>n.open,e=>{e&&(s.value=``,c.value=``,wn(()=>o.value?.click()))});async function l(e){let t=e.target,n=t.files?.[0];if(t.value=``,!n)return;if(n.size>Wb){c.value=n.name,s.value=i(`gallery.tooLarge`,{size:Math.round(Wb/1024)});return}let o=await n.text();try{if(Lu(o).subpaths.length===0)throw Error(`no subpaths`);let e=n.name.replace(/\.svg$/i,``)||i(`gallery.importedName`);a.addCustomShape(o,e),c.value=n.name,s.value=``,r(`close`)}catch{c.value=n.name,s.value=i(`gallery.parseFail`)}}return(t,n)=>(B(),Ea(zb,{open:e.open,title:L(i)(`gallery.importTitle`),"z-index":200,width:`min(420px, calc(100vw - 48px))`,onClose:n[0]||=e=>r(`close`)},{default:In(()=>[H(`div`,Bb,[H(`button`,Vb,[n[1]||=H(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`},[H(`path`,{d:`M12 16V3M6 9l6 7 6-7`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),H(`path`,{d:`M4 20h16`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1),Pa(` `+N(L(i)(`gallery.chooseSvgFile`))+` `,1),H(`input`,{ref_key:`fileInput`,ref:o,type:`file`,accept:`.svg,image/svg+xml`,onChange:l},null,544)]),s.value?(B(),V(`p`,Hb,N(s.value),1)):(B(),V(`p`,Ub,N(c.value?L(i)(`gallery.statusFile`,{name:c.value}):L(i)(`gallery.statusEmpty`)),1))])]),_:1},8,[`open`,`title`]))}}),[[`__scopeId`,`data-v-e41441bd`]]),Kb=[`width`,`height`],qb=R({__name:`IconChevronDown`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z`},null,-1)]],16,Kb))}}),Jb=[`width`,`height`],Yb=R({__name:`IconChevronUp`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z`},null,-1)]],16,Jb))}}),Xb=[`width`,`height`],Zb=R({__name:`IconGallery`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1.2`},null,-1),H(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`1.2`},null,-1),H(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1.2`},null,-1),H(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`1.2`},null,-1)]],16,Xb))}}),Qb=[`width`,`height`],$b=R({__name:`IconReset`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M4 4v6h6`},null,-1),H(`path`,{d:`M20 20v-6h-6`},null,-1),H(`path`,{d:`M20 9a8 8 0 0 0-14.9-2M4 15a8 8 0 0 0 14.9 2`},null,-1)]],16,Qb))}}),ex=[`width`,`height`],tx=R({__name:`IconSearch`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`circle`,{cx:`11`,cy:`11`,r:`7`},null,-1),H(`path`,{d:`M20 20l-3.5-3.5`,"stroke-linecap":`round`},null,-1)]],16,ex))}}),nx={class:`drawer`},rx={class:`drawer__head`},ix={class:`drawer__head-row`},ax={class:`drawer__title`},ox={class:`drawer__head-actions`},sx=[`aria-label`],cx=F_(R({__name:`Drawer`,props:{open:{type:Boolean},title:{default:``},innerPadding:{type:Boolean,default:!0},blur:{type:Boolean,default:!1}},emits:[`close`],setup(e,{emit:t}){let n=t,{t:r}=$g();return(t,i)=>(B(),Ea(or,{to:`body`},[U(So,{name:`drawer`},{default:In(()=>[e.open?(B(),V(`div`,{key:0,class:pe([`drawer-overlay`,{"drawer-overlay--blur":e.blur}]),onClick:i[1]||=Ss(e=>n(`close`),[`self`])},[H(`div`,nx,[H(`div`,rx,[H(`div`,ix,[H(`h2`,ax,[ei(t.$slots,`title`,{},()=>[Pa(N(e.title),1)],!0)]),H(`div`,ox,[ei(t.$slots,`actions`,{},void 0,!0),H(`button`,{class:`drawer__close`,type:`button`,"aria-label":L(r)(`common.close`),onClick:i[0]||=e=>n(`close`)},[U(Mb,{size:16})],8,sx)])]),ei(t.$slots,`fixed`,{},void 0,!0)]),H(`div`,{class:pe([`drawer__scroll`,{"drawer__scroll--flush":!e.innerPadding}])},[ei(t.$slots,`default`,{},void 0,!0)],2)])],2)):W(``,!0)]),_:3})]))}}),[[`__scopeId`,`data-v-31aba992`]]),lx={class:`editor`},ux={class:`editor__head-title`},dx={class:`editor__title`},fx=[`title`,`aria-label`],px=[`title`,`aria-label`],mx={class:`editor__body`},hx={class:`editor__hint`},gx={class:`editor__list`},_x=[`onClick`],vx={class:`editor__index`},yx=[`src`],bx={class:`editor__name`},xx=[`id`],Sx=[`title`,`onClick`],Cx=[`title`,`onClick`],wx=[`title`,`disabled`,`onClick`],Tx=[`title`,`disabled`,`onClick`],Ex=[`title`,`onClick`],Dx={class:`editor__add-text`},Ox=[`title`,`aria-label`],kx={class:`gallery__search`},Ax=[`placeholder`,`aria-label`],jx={class:`gallery__group-count`},Mx=[`title`,`onClick`,`onKeydown`],Nx=[`innerHTML`],Px={class:`gallery__name`},Fx=[`title`,`onClick`],Ix={key:0,class:`gallery__hint gallery__hint--empty`},Lx=24,Rx=F_(R({__name:`SequenceEditor`,props:{collapsed:{type:Boolean}},emits:[`edit`,`toggle-collapse`],setup(e,{expose:t,emit:n}){let r=nf(),{t:i}=$g(),a=n,o=I(!1),s=I(window.matchMedia(`(max-width: 768px)`).matches),c=null;function l(e){s.value=e.matches}let u=G(()=>s.value?{open:o.value,blur:!0,innerPadding:!1}:{open:o.value,title:i(`gallery.title`),zIndex:120,width:`min(680px, calc(100vw - 48px))`}),d=I(``),f=I(Lx),p=I(null),m=null,h=G(()=>{let e=d.value.trim().toLowerCase(),t=t=>!e||t.name.toLowerCase().includes(e)||t.id.toLowerCase().includes(e),n=[],a=r.customShapes.filter(e=>t(e)&&Hu(e));a.length>0&&n.push({key:`layers`,title:i(`gallery.layers`),items:a});let o=Wu.filter(t);return o.length>0&&n.push({key:`builtin`,title:i(`gallery.builtin`),items:o}),n}),g=G(()=>{let e=f.value,t=[];for(let n of h.value){if(e<=0)break;let r=e>=n.items.length?n.items:n.items.slice(0,e);e-=r.length,t.push({...n,items:r})}return t}),_=G(()=>h.value.every(e=>(g.value.find(t=>t.key===e.key)?.items.length??0)===e.items.length)),v=G(()=>h.value.some(e=>e.items.length>0));function y(){f.value=Lx}function b(){m?.disconnect(),m=null;let e=p.value;if(e){if(typeof IntersectionObserver>`u`){f.value=1/0;return}m=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(f.value+=Lx,wn(b))},{rootMargin:`240px 0px`}),m.observe(e)}}Gn([o,d,s],()=>{y(),wn(b)});let x=I(!1),S=new Map;function C(e,t){let n=S.get(e);return n||(n=URL.createObjectURL(new Blob([t],{type:`image/svg+xml`})),S.set(e,n)),n}function w(e){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">${e.map(e=>`<path d="${e.points.map((e,t)=>`${t===0?`M`:`L`}${(e.x*200).toFixed(1)} ${(e.y*200).toFixed(1)}`).join(` `)}" fill="none" stroke="${e.color}" stroke-width="${Math.max(1,e.width*200)}" stroke-linecap="round" stroke-linejoin="round"/>`).join(``)}</svg>`}function T(e,t){let n=/viewBox\s*=\s*["']0\s+0\s+([\d.]+)\s+([\d.]+)["']/i.exec(e),r=n?Number(n[1]):100,i=n?Number(n[2]):100,a=Math.min(r,i),o=t.map(e=>`<path d="${e.points.map((e,t)=>`${t===0?`M`:`L`}${(e.x*r).toFixed(1)} ${(e.y*i).toFixed(1)}`).join(` `)}" fill="none" stroke="${e.color}" stroke-width="${Math.max(1,e.width*a)}" stroke-linecap="round" stroke-linejoin="round"/>`).join(``);return e.replace(/(<svg[^>]*>)/i,`$1${o}`)}function E(e){let t=e.strokes??[];return t.length>0?t:r.extraStrokesOf(e.id)}function D(e){return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`}function O(e,t){let n=/viewBox\s*=\s*["']0\s+0\s+([\d.]+)\s+([\d.]+)["']/i.exec(e),r=n?Math.min(Number(n[1])||100,Number(n[2])||100):100,i=Math.max(.1,t*r).toFixed(2);return e.replace(/stroke-width\s*:\s*[^;}"]*\s*;?/gi,``).replace(/\sstroke-width\s*=\s*(?:"[^"]*"|'[^']*')/gi,``).replace(/<svg([^>]*)>/i,(e,t)=>`<svg${t} stroke-width="${i}">`)}function k(e){let t=E(e);if(e.svg){let n=e.strokeWidth!==void 0;return t.length===0?n?D(O(e.svg,e.strokeWidth)):C(e.id,e.svg):D(T(n?O(e.svg,e.strokeWidth):e.svg,t))}return D(w(t))}let A=new Map;function j(e){let t=E(e),n=t.length>0||!e.svg;if(!n){let t=A.get(e.id);if(t!==void 0)return t}let r=e.svg?t.length>0?T(e.svg,t):e.svg:w(t),i=r.match(/viewBox="[\d.\-]+\s+[\d.\-]+\s+([\d.\-]+)/),a=1.5*(i?parseFloat(i[1]):500)/80,o=r.replace(/stroke-width\s*:\s*[\d.]+\s*;?/g,``).replace(/stroke:\s*#0{3}0*/gi,`stroke: #1d2733`).replace(/stroke="#0{3}0*"/gi,`stroke="#1d2733"`).replace(/<svg([^>]*)>/,(e,t)=>`<svg${t} stroke-width="${a.toFixed(1)}">`);return n||A.set(e.id,o),o}function ee(e){a(`edit`,e)}function te(){let e=r.addBlankLayer();a(`edit`,e.id)}function M(e){e.key===`Escape`&&(o.value=!1)}c=window.matchMedia(`(max-width: 768px)`),c.addEventListener(`change`,l),Vr(()=>{c?.removeEventListener(`change`,l),m?.disconnect(),S.forEach(e=>URL.revokeObjectURL(e)),S.clear(),window.removeEventListener(`keydown`,M)}),t({resetSequence:()=>fe(),closeOverlays:()=>{o.value=!1,de.value=!1,re.value=null}}),window.addEventListener(`keydown`,M);function ne(e){return e.startsWith(`custom-`)}let re=I(null);function ie(e){re.value=e}function ae(){let e=re.value;e&&(re.value=null,r.removeCustomShape(e.id),r.shapeOrder.length===0&&(o.value=!1))}function oe(e){if(e<=0)return;let t=[...r.shapeOrder];[t[e-1],t[e]]=[t[e],t[e-1]],r.setShapeOrder(t)}function se(e){if(e>=r.shapeOrder.length-1)return;let t=[...r.shapeOrder];[t[e+1],t[e]]=[t[e],t[e+1]],r.setShapeOrder(t)}function ce(e){r.setShapeOrder(r.shapeOrder.filter(t=>t.id!==e.id))}function le(e){r.addToSequence(e),o.value=!1}function ue(){r.resetSequenceToDefault()}let de=I(!1);function fe(){de.value=!0}function me(){de.value=!1,ue()}let he=I(null),ge=I(``);function _e(e){he.value=e.id,ge.value=r.displayNameOf(e),wn(()=>document.getElementById(`layer-name-${e.id}`)?.focus())}function ve(){he.value&&r.renameShape(he.value,ge.value),he.value=null}function ye(){he.value=null}function be(e){return r.displayNameOf(e)}return(t,n)=>(B(),V(`section`,lx,[H(`div`,{class:`editor__head`,onClick:n[2]||=e=>a(`toggle-collapse`)},[H(`div`,ux,[H(`h2`,dx,N(L(i)(`editor.title`)),1),e.collapsed?(B(),Ea(Yb,{key:0,class:`editor__chevron`,size:14})):(B(),Ea(qb,{key:1,class:`editor__chevron`,size:14}))]),H(`div`,{class:`editor__head-actions`,onClick:n[1]||=Ss(()=>{},[`stop`])},[H(`button`,{class:`editor__icon-btn editor__gallery-btn`,type:`button`,title:L(i)(`editor.galleryBtn`),"aria-label":L(i)(`editor.galleryBtn`),onClick:n[0]||=e=>o.value=!0},[U(Zb,{size:15})],8,fx),H(`button`,{class:`editor__icon-btn editor__reset`,type:`button`,title:L(i)(`editor.reset`),"aria-label":L(i)(`editor.reset`),onClick:fe},[U($b,{size:15})],8,px)])]),H(`div`,mx,[H(`p`,hx,N(L(i)(`editor.hint`)),1),H(`ol`,gx,[(B(!0),V(z,null,Qr(L(r).shapes,(e,t)=>(B(),V(`li`,{key:e.id,class:`editor__item`,onClick:t=>ee(e.id)},[H(`span`,vx,N(t+1),1),H(`img`,{class:`editor__preview`,src:k(e),alt:``,draggable:`false`},null,8,yx),H(`span`,bx,[he.value===e.id?Ln((B(),V(`input`,{key:0,id:`layer-name-${e.id}`,"onUpdate:modelValue":n[3]||=e=>ge.value=e,class:`editor__rename-input`,onClick:n[4]||=Ss(()=>{},[`stop`]),onBlur:ve,onKeydown:[ws(ve,[`enter`]),ws(ye,[`esc`])]},null,40,xx)),[[ys,ge.value]]):(B(),V(z,{key:1},[H(`span`,{class:`editor__name-text`,title:be(e),onClick:Ss(t=>_e(e),[`stop`])},N(be(e)),9,Sx),H(`button`,{class:`editor__rename-btn`,type:`button`,title:L(i)(`editor.rename`),onClick:Ss(t=>_e(e),[`stop`])},`✎`,8,Cx)],64))]),H(`span`,{class:`editor__ops`,onClick:n[5]||=Ss(()=>{},[`stop`])},[H(`button`,{class:`editor__op`,type:`button`,title:L(i)(`editor.moveUp`),disabled:t===0,onClick:e=>oe(t)},` ▲ `,8,wx),H(`button`,{class:`editor__op`,type:`button`,title:L(i)(`editor.moveDown`),disabled:t===L(r).shapes.length-1,onClick:e=>se(t)},` ▼ `,8,Tx),H(`button`,{class:`editor__op editor__op--remove`,type:`button`,title:L(i)(`editor.remove`),onClick:t=>ce(e)},` × `,8,Ex)])],8,_x))),128)),H(`li`,{class:`editor__add`,role:`button`,tabindex:`0`,onClick:te,onKeydown:ws(te,[`enter`])},[n[12]||=H(`span`,{class:`editor__add-icon`},`＋`,-1),H(`span`,Dx,N(L(i)(`editor.addBlank`)),1)],32)])]),(B(),Ea(Yr(s.value?cx:zb),Ra(u.value,{onClose:n[8]||=e=>o.value=!1}),$r({actions:In(()=>[H(`button`,{class:`gallery__upload`,type:`button`,title:L(i)(`gallery.import`),"aria-label":L(i)(`gallery.import`),onClick:n[6]||=e=>x.value=!0},[H(`span`,null,N(L(i)(`gallery.import`)),1)],8,Ox)]),fixed:In(()=>[H(`div`,kx,[U(tx,{class:`gallery__search-icon`,size:14}),Ln(H(`input`,{"onUpdate:modelValue":n[7]||=e=>d.value=e,class:`gallery__search-input`,type:`search`,placeholder:L(i)(`gallery.searchPlaceholder`),"aria-label":L(i)(`gallery.searchPlaceholder`)},null,8,Ax),[[ys,d.value]])])]),default:In(()=>[H(`ul`,{class:pe([`gallery__grid`,{"gallery__grid--modal":!s.value}])},[(B(!0),V(z,null,Qr(g.value,e=>(B(),V(z,{key:e.key},[H(`li`,{class:pe([`gallery__group`,`gallery__group--${e.key}`])},[Pa(N(e.title),1),H(`span`,jx,N(e.items.length),1)],2),(B(!0),V(z,null,Qr(e.items,e=>(B(),V(`li`,{key:e.id,class:`gallery__item`,title:L(i)(`gallery.addTitle`,{name:e.name}),tabindex:`0`,onClick:t=>le(e.id),onKeydown:ws(t=>le(e.id),[`enter`])},[H(`span`,{class:`gallery__preview`,innerHTML:j(e)},null,8,Nx),H(`span`,Px,N(e.name),1),ne(e.id)?(B(),V(`button`,{key:0,class:`gallery__remove`,type:`button`,title:L(i)(`gallery.removeTitle`),onClick:Ss(t=>ie(e),[`stop`])},` × `,8,Fx)):W(``,!0)],40,Mx))),128))],64))),128)),_.value?W(``,!0):(B(),V(`li`,{key:0,ref_key:`gallerySentinel`,ref:p,class:`gallery__sentinel`,"aria-hidden":`true`},null,512))],2),v.value?W(``,!0):(B(),V(`p`,Ix,N(L(i)(`gallery.empty`,{q:d.value})),1))]),_:2},[s.value?{name:`title`,fn:In(()=>[Pa(N(L(i)(`gallery.title`)),1)]),key:`0`}:void 0]),1040)),U(Gb,{open:x.value,onClose:n[9]||=e=>x.value=!1},null,8,[`open`]),U(G_,{open:de.value,title:L(i)(`editor.resetConfirmTitle`),message:L(i)(`editor.resetConfirmMessage`),"confirm-text":L(i)(`editor.reset`),"cancel-text":L(i)(`common.cancel`),danger:``,onClose:n[10]||=e=>de.value=!1,onConfirm:me},null,8,[`open`,`title`,`message`,`confirm-text`,`cancel-text`]),U(G_,{open:re.value!==null,title:L(i)(`gallery.removeConfirmTitle`),message:L(i)(`gallery.removeConfirmMessage`,{name:re.value?be(re.value):``}),"confirm-text":L(i)(`common.delete`),"cancel-text":L(i)(`common.cancel`),danger:``,onClose:n[11]||=e=>re.value=null,onConfirm:ae},null,8,[`open`,`title`,`message`,`confirm-text`,`cancel-text`])]))}}),[[`__scopeId`,`data-v-0d88d826`]]),zx=F_(R({__name:`SequenceOverlay`,props:{collapsed:{type:Boolean},editingLayer:{}},emits:[`edit`,`toggle-collapse`,`close`],setup(e,{expose:t,emit:n}){let r=n,i=I(null);return t({resetSequence:()=>i.value?.resetSequence(),closeOverlays:()=>i.value?.closeOverlays()}),(t,n)=>(B(),V(z,null,[!e.collapsed&&!e.editingLayer?(B(),V(`div`,{key:0,class:`app__editor-backdrop`,onClick:n[0]||=e=>r(`close`)})):W(``,!0),H(`aside`,{class:pe([`app__editor`,{"app__editor--collapsed":e.collapsed}])},[U(Rx,{ref_key:`editorRef`,ref:i,collapsed:e.collapsed,onEdit:n[1]||=e=>r(`edit`,e),onToggleCollapse:n[2]||=e=>r(`toggle-collapse`)},null,8,[`collapsed`])],2)],64))}}),[[`__scopeId`,`data-v-a291e321`]]),Bx=[`width`,`height`],Vx=R({__name:`IconLayers`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"stroke-linejoin":`round`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M12 3.5 21 8l-9 4.5L3 8l9-4.5z`},null,-1),H(`path`,{d:`M4.5 12.5 12 16.5l7.5-4`},null,-1),H(`path`,{d:`M4.5 17 12 21l7.5-4`},null,-1)]],16,Bx))}}),Hx=[`width`,`height`],Ux=R({__name:`IconChevronLeft`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`},null,-1)]],16,Hx))}}),Wx=[`width`,`height`],Gx=R({__name:`IconMoon`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"stroke-linejoin":`round`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`path`,{d:`M20.2 13.7A8.1 8.1 0 0 1 10.3 3.8a8.1 8.1 0 1 0 9.9 9.9z`},null,-1)]],16,Wx))}}),Kx=[`width`,`height`],qx=R({__name:`IconSun`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`circle`,{cx:`12`,cy:`12`,r:`4.2`},null,-1),H(`path`,{d:`M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4`,"stroke-linecap":`round`},null,-1)]],16,Kx))}}),Jx=[`width`,`height`],Yx=R({__name:`IconSettings`,props:{size:{default:16}},setup(e){return(t,n)=>(B(),V(`svg`,Ra({width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"stroke-linejoin":`round`,"aria-hidden":`true`},t.$attrs),[...n[0]||=[H(`circle`,{cx:`12`,cy:`12`,r:`3.2`},null,-1),H(`path`,{d:`M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.08a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.08a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1z`},null,-1)]],16,Jx))}}),Xx=[`aria-label`],Zx=[`title`,`aria-label`],Qx=[`title`,`aria-label`],$x=[`title`,`aria-label`],eS=[`title`,`aria-label`],tS=F_(R({__name:`EditorToolsBar`,props:{collapsed:{type:Boolean}},emits:[`toggle`,`settings`,`reset`],setup(e,{emit:t}){let n=t,{t:r}=$g(),i=g_();return(t,a)=>(B(),V(`div`,{class:pe([`app__editor-tools`,{"app__editor-tools--open":!e.collapsed}]),role:`toolbar`,"aria-label":L(r)(`app.sequence`)},[H(`button`,{id:`editor-sequence-toggle`,class:pe([`app__editor-tool`,{"app__editor-tool--active":!e.collapsed}]),type:`button`,title:e.collapsed?L(r)(`app.sequence`):L(r)(`app.collapse`),"aria-label":e.collapsed?L(r)(`app.sequence`):L(r)(`app.collapse`),onClick:a[0]||=e=>n(`toggle`)},[e.collapsed?(B(),Ea(Vx,{key:0,size:16})):(B(),Ea(Ux,{key:1,size:16}))],10,Zx),H(`button`,{class:`app__editor-tool`,type:`button`,title:L(i).resolved===`dark`?L(r)(`theme.toLight`):L(r)(`theme.toDark`),"aria-label":L(i).resolved===`dark`?L(r)(`theme.toLight`):L(r)(`theme.toDark`),onClick:a[1]||=e=>L(i).toggleTheme()},[L(i).resolved===`dark`?(B(),Ea(Gx,{key:0,size:16})):(B(),Ea(qx,{key:1,size:16}))],8,Qx),H(`button`,{class:`app__editor-tool`,type:`button`,title:L(r)(`editor.settingsBtn`),"aria-label":L(r)(`editor.settingsBtn`),onClick:a[2]||=e=>n(`settings`)},[U(Yx,{size:16})],8,$x),e.collapsed?W(``,!0):(B(),V(`button`,{key:0,class:`app__editor-tool app__editor-tool--danger`,type:`button`,title:L(r)(`editor.reset`),"aria-label":L(r)(`editor.reset`),onClick:a[3]||=e=>n(`reset`)},[U($b,{size:16})],8,eS))],10,Xx))}}),[[`__scopeId`,`data-v-3422eb3d`]]),nS=R({__name:`SettingsDrawer`,props:{open:{type:Boolean}},emits:[`close`],setup(e,{emit:t}){let n=t,{t:r}=$g();return(t,i)=>(B(),Ea(cx,{open:e.open,title:L(r)(`app.drawerTitle`),onClose:i[0]||=e=>n(`close`)},{default:In(()=>[U(Ey)]),_:1},8,[`open`,`title`]))}}),rS=e((e=>{var t=Object.defineProperty;(e=>t(e,`__esModule`,{value:!0}))(e),((e,n)=>{for(var r in n)t(e,r,{get:n[r],enumerable:!0})})(e,{GIFEncoder:()=>A,applyPalette:()=>S,default:()=>se,nearestColor:()=>k,nearestColorIndex:()=>D,nearestColorIndexWithDistance:()=>O,prequantize:()=>x,quantize:()=>_,snapColorsToPalette:()=>T});var n={signature:`GIF`,version:`89a`,trailer:59,extensionIntroducer:33,applicationExtensionLabel:255,graphicControlExtensionLabel:249,imageSeparator:44,signatureSize:3,versionSize:3,globalColorTableFlagMask:128,colorResolutionMask:112,sortFlagMask:8,globalColorTableSizeMask:7,applicationIdentifierSize:8,applicationAuthCodeSize:3,disposalMethodMask:28,userInputFlagMask:2,transparentColorFlagMask:1,localColorTableFlagMask:128,interlaceFlagMask:64,idSortFlagMask:32,localColorTableSizeMask:7};function r(e=256){let t=0,n=new Uint8Array(e);return{get buffer(){return n.buffer},reset(){t=0},bytesView(){return n.subarray(0,t)},bytes(){return n.slice(0,t)},writeByte(e){r(t+1),n[t]=e,t++},writeBytes(e,i=0,a=e.length){r(t+a);for(let r=0;r<a;r++)n[t++]=e[r+i]},writeBytesView(e,i=0,a=e.byteLength){r(t+a),n.set(e.subarray(i,i+a),t),t+=a}};function r(e){var r=n.length;if(r>=e)return;e=Math.max(e,r*(r<1048576?2:1.125)>>>0),r!=0&&(e=Math.max(e,256));let i=n;n=new Uint8Array(e),t>0&&n.set(i.subarray(0,t),0)}}var i=12,a=5003,o=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function s(e,t,n,s,c=r(512),l=new Uint8Array(256),u=new Int32Array(a),d=new Int32Array(a)){let f=u.length,p=Math.max(2,s);l.fill(0),d.fill(0),u.fill(-1);let m=0,h=0,g=p+1,_=g,v=!1,y=_,b=(1<<y)-1,x=1<<g-1,S=x+1,C=x+2,w=0,T=n[0],E=0;for(let e=f;e<65536;e*=2)++E;E=8-E,c.writeByte(p),O(x);let D=n.length;for(let e=1;e<D;e++)next_block:{let t=n[e],r=(t<<i)+T,a=t<<E^T;if(u[a]===r){T=d[a];break next_block}let o=a===0?1:f-a;for(;u[a]>=0;)if(a-=o,a<0&&(a+=f),u[a]===r){T=d[a];break next_block}O(T),T=t,C<1<<i?(d[a]=C++,u[a]=r):(u.fill(-1),C=x+2,v=!0,O(x))}return O(T),O(S),c.writeByte(0),c.bytesView();function O(e){for(m&=o[h],h>0?m|=e<<h:m=e,h+=y;h>=8;)l[w++]=m&255,w>=254&&(c.writeByte(w),c.writeBytesView(l,0,w),w=0),m>>=8,h-=8;if((C>b||v)&&(v?(y=_,b=(1<<y)-1,v=!1):(++y,b=y===i?1<<y:(1<<y)-1)),e==S){for(;h>0;)l[w++]=m&255,w>=254&&(c.writeByte(w),c.writeBytesView(l,0,w),w=0),m>>=8,h-=8;w>0&&(c.writeByte(w),c.writeBytesView(l,0,w),w=0)}}}var c=s;function l(e,t,n){return e<<8&63488|t<<2&992|n>>3}function u(e,t,n,r){return e>>4|t&240|(n&240)<<4|(r&240)<<8}function d(e,t,n){return e>>4<<8|t&240|n>>4}function f(e,t,n){return e<t?t:e>n?n:e}function p(e){return e*e}function m(e,t,n){var r=0,i=1e100;let a=e[t],o=a.cnt,s=a.ac,c=a.rc,l=a.gc,u=a.bc;for(var d=a.fw;d!=0;d=e[d].fw){let t=e[d],a=t.cnt,m=o*a/(o+a);if(!(m>=i)){var f=0;n&&(f+=m*p(t.ac-s),f>=i)||(f+=m*p(t.rc-c),!(f>=i)&&(f+=m*p(t.gc-l),!(f>=i)&&(f+=m*p(t.bc-u),!(f>=i)&&(i=f,r=d))))}}a.err=i,a.nn=r}function h(){return{ac:0,rc:0,gc:0,bc:0,cnt:0,nn:0,fw:0,bk:0,tm:0,mtm:0,err:0}}function g(e,t){let n=Array(t===`rgb444`?4096:65536),r=e.length;if(t===`rgba4444`)for(let t=0;t<r;++t){let r=e[t],i=r>>24&255,a=r>>16&255,o=r>>8&255,s=r&255,c=u(s,o,a,i),l=c in n?n[c]:n[c]=h();l.rc+=s,l.gc+=o,l.bc+=a,l.ac+=i,l.cnt++}else if(t===`rgb444`)for(let t=0;t<r;++t){let r=e[t],i=r>>16&255,a=r>>8&255,o=r&255,s=d(o,a,i),c=s in n?n[s]:n[s]=h();c.rc+=o,c.gc+=a,c.bc+=i,c.cnt++}else for(let t=0;t<r;++t){let r=e[t],i=r>>16&255,a=r>>8&255,o=r&255,s=l(o,a,i),c=s in n?n[s]:n[s]=h();c.rc+=o,c.gc+=a,c.bc+=i,c.cnt++}return n}function _(e,t,n={}){let{format:r=`rgb565`,clearAlpha:i=!0,clearAlphaColor:a=0,clearAlphaThreshold:o=0,oneBitAlpha:s=!1}=n;if(!e||!e.buffer||!(e instanceof Uint8Array)&&!(e instanceof Uint8ClampedArray))throw Error(`quantize() expected RGBA Uint8Array data`);let c=new Uint32Array(e.buffer),l=n.useSqrt!==!1,u=r===`rgba4444`,d=g(c,r),h=d.length,_=h-1,y=new Uint32Array(h+1);for(var b=0,x=0;x<h;++x){let e=d[x];if(e!=null){var S=1/e.cnt;u&&(e.ac*=S),e.rc*=S,e.gc*=S,e.bc*=S,d[b++]=e}}p(t)/b<.022&&(l=!1);for(var x=0;x<b-1;++x)d[x].fw=x+1,d[x+1].bk=x,l&&(d[x].cnt=Math.sqrt(d[x].cnt));l&&(d[x].cnt=Math.sqrt(d[x].cnt));var C,w,T;for(x=0;x<b;++x){m(d,x,!1);var E=d[x].err;for(w=++y[0];w>1&&(T=w>>1,!(d[C=y[T]].err<=E));w=T)y[w]=C;y[w]=x}var D=b-t;for(x=0;x<D;){for(var O;;){var k=y[1];if(O=d[k],O.tm>=O.mtm&&d[O.nn].mtm<=O.tm)break;O.mtm==_?k=y[1]=y[y[0]--]:(m(d,k,!1),O.tm=x);var E=d[k].err;for(w=1;(T=w+w)<=y[0]&&(T<y[0]&&d[y[T]].err>d[y[T+1]].err&&T++,!(E<=d[C=y[T]].err));w=T)y[w]=C;y[w]=k}var A=d[O.nn],j=O.cnt,ee=A.cnt,S=1/(j+ee);u&&(O.ac=S*(j*O.ac+ee*A.ac)),O.rc=S*(j*O.rc+ee*A.rc),O.gc=S*(j*O.gc+ee*A.gc),O.bc=S*(j*O.bc+ee*A.bc),O.cnt+=A.cnt,O.mtm=++x,d[A.bk].fw=A.fw,d[A.fw].bk=A.bk,A.mtm=_}let te=[];var M=0;for(x=0;;++M){let e=f(Math.round(d[x].rc),0,255),t=f(Math.round(d[x].gc),0,255),n=f(Math.round(d[x].bc),0,255),r=255;u&&(r=f(Math.round(d[x].ac),0,255),s&&(r=r<=(typeof s==`number`?s:127)?0:255),i&&r<=o&&(e=t=n=a,r=0));let c=u?[e,t,n,r]:[e,t,n];if(v(te,c)||te.push(c),(x=d[x].fw)==0)break}return te}function v(e,t){for(let n=0;n<e.length;n++){let r=e[n],i=r[0]===t[0]&&r[1]===t[1]&&r[2]===t[2],a=r.length>=4&&t.length>=4?r[3]===t[3]:!0;if(i&&a)return!0}return!1}function y(e,t){var n=0,r;for(r=0;r<e.length;r++){let i=e[r]-t[r];n+=i*i}return n}function b(e,t){return t>1?Math.round(e/t)*t:e}function x(e,{roundRGB:t=5,roundAlpha:n=10,oneBitAlpha:r=null}={}){let i=new Uint32Array(e.buffer);for(let e=0;e<i.length;e++){let a=i[e],o=a>>24&255,s=a>>16&255,c=a>>8&255,l=a&255;o=b(o,n),r&&(o=o<=(typeof r==`number`?r:127)?0:255),l=b(l,t),c=b(c,t),s=b(s,t),i[e]=o<<24|s<<16|c<<8|l<<0}}function S(e,t,n=`rgb565`){if(!e||!e.buffer||!(e instanceof Uint8Array)&&!(e instanceof Uint8ClampedArray))throw Error(`quantize() expected RGBA Uint8Array data`);if(t.length>256)throw Error(`applyPalette() only works with 256 colors or less`);let r=new Uint32Array(e.buffer),i=r.length,a=n===`rgb444`?4096:65536,o=new Uint8Array(i),s=Array(a);if(n===`rgba4444`)for(let e=0;e<i;e++){let n=r[e],i=n>>24&255,a=n>>16&255,c=n>>8&255,l=n&255,d=u(l,c,a,i),f=d in s?s[d]:s[d]=C(l,c,a,i,t);o[e]=f}else{let e=n===`rgb444`?d:l;for(let n=0;n<i;n++){let i=r[n],a=i>>16&255,c=i>>8&255,l=i&255,u=e(l,c,a),d=u in s?s[u]:s[u]=w(l,c,a,t);o[n]=d}}return o}function C(e,t,n,r,i){let a=0,o=1e100;for(let s=0;s<i.length;s++){let c=i[s],l=c[3],u=E(l-r);if(u>o)continue;let d=c[0];if(u+=E(d-e),u>o)continue;let f=c[1];if(u+=E(f-t),u>o)continue;let p=c[2];u+=E(p-n),!(u>o)&&(o=u,a=s)}return a}function w(e,t,n,r){let i=0,a=1e100;for(let o=0;o<r.length;o++){let s=r[o],c=s[0],l=E(c-e);if(l>a)continue;let u=s[1];if(l+=E(u-t),l>a)continue;let d=s[2];l+=E(d-n),!(l>a)&&(a=l,i=o)}return i}function T(e,t,n=5){if(!e.length||!t.length)return;let r=e.map(e=>e.slice(0,3)),i=n*n,a=e[0].length;for(let n=0;n<t.length;n++){let o=t[n];o=o.length<a?[o[0],o[1],o[2],255]:o.length>a?o.slice(0,3):o.slice();let s=O(r,o.slice(0,3),y),c=s[0],l=s[1];l>0&&l<=i&&(e[c]=o)}}function E(e){return e*e}function D(e,t,n=y){let r=1/0,i=-1;for(let a=0;a<e.length;a++){let o=e[a],s=n(t,o);s<r&&(r=s,i=a)}return i}function O(e,t,n=y){let r=1/0,i=-1;for(let a=0;a<e.length;a++){let o=e[a],s=n(t,o);s<r&&(r=s,i=a)}return[i,r]}function k(e,t,n=y){return e[D(e,t,n)]}function A(e={}){let{initialCapacity:t=4096,auto:i=!0}=e,a=r(t),o=5003,s=new Uint8Array(256),c=new Int32Array(o),l=new Int32Array(o),u=!1;return{reset(){a.reset(),u=!1},finish(){a.writeByte(n.trailer)},bytes(){return a.bytes()},bytesView(){return a.bytesView()},get buffer(){return a.buffer},get stream(){return a},writeHeader:d,writeFrame(e,t,n,r={}){let{transparent:o=!1,transparentIndex:f=0,delay:p=0,palette:m=null,repeat:h=0,colorDepth:g=8,dispose:_=-1}=r,v=!1;if(i?u||=(v=!0,d(),!0):v=!!r.first,t=Math.max(0,Math.floor(t)),n=Math.max(0,Math.floor(n)),v){if(!m)throw Error(`First frame must include a { palette } option`);ee(a,t,n,m,g),M(a,m),h>=0&&te(a,h)}let y=Math.round(p/10);j(a,_,y,o,f);let b=!!m&&!v;ne(a,t,n,b?m:null),b&&M(a,m),re(a,e,t,n,g,s,c,l)}};function d(){ae(a,`GIF89a`)}}function j(e,t,n,r,i){e.writeByte(33),e.writeByte(249),e.writeByte(4),i<0&&(i=0,r=!1);var a,o;r?(a=1,o=2):(a=0,o=0),t>=0&&(o=t&7),o<<=2,e.writeByte(o|0|a),ie(e,n),e.writeByte(i||0),e.writeByte(0)}function ee(e,t,n,r,i=8){let a=oe(r.length)-1,o=i-1<<4|128|a;ie(e,t),ie(e,n),e.writeBytes([o,0,0])}function te(e,t){e.writeByte(33),e.writeByte(255),e.writeByte(11),ae(e,`NETSCAPE2.0`),e.writeByte(3),e.writeByte(1),ie(e,t),e.writeByte(0)}function M(e,t){let n=1<<oe(t.length);for(let r=0;r<n;r++){let n=[0,0,0];r<t.length&&(n=t[r]),e.writeByte(n[0]),e.writeByte(n[1]),e.writeByte(n[2])}}function ne(e,t,n,r){if(e.writeByte(44),ie(e,0),ie(e,0),ie(e,t),ie(e,n),r){let t=oe(r.length)-1;e.writeByte(128|t)}else e.writeByte(0)}function re(e,t,n,r,i=8,a,o,s){c(n,r,t,i,e,a,o,s)}function ie(e,t){e.writeByte(t&255),e.writeByte(t>>8&255)}function ae(e,t){for(var n=0;n<t.length;n++)e.writeByte(t.charCodeAt(n))}function oe(e){return Math.max(Math.ceil(Math.log2(e)),1)}var se=A}))(),iS=2048,aS=65536;function oS(e){let t=/^#?([0-9a-fA-F]{6})$/.exec(e.trim());if(!t)return[255,255,255];let n=parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function sS(){return new Promise(e=>setTimeout(e,0))}async function cS(e,t,n,r){if(t.width>2048||t.height>2048)throw Error(`GIF 分辨率过大：最多支持 ${iS}px`);if(typeof document>`u`)throw Error(`GIF 编码需要浏览器环境`);let i=document.createElement(`canvas`);i.width=t.width,i.height=t.height;let a=i.getContext(`2d`,{willReadFrequently:!0}),o=oS(t.backgroundColor),s=e.count;if(s===0)throw Error(`no frames to encode`);let c=async n=>{a.fillStyle=t.backgroundColor,a.fillRect(0,0,t.width,t.height);let r=await e.render(n);return a.drawImage(r,0,0,t.width,t.height),a.getImageData(0,0,t.width,t.height)},l=t.width*t.height,u=Math.max(1,Math.floor(Math.sqrt(l/aS))),d=new Uint8Array(aS*4),f=0,p=Math.ceil(t.width/u),m=p*Math.ceil(t.height/u),h=0;for(let e=0;e<s;e++){if(r?.aborted)throw Error(`aborted`);let n=(await c(s===1?0:Math.round(e/(s-1)*(s-1)))).data,i=Math.max(1,Math.ceil((aS-f)/(s-e))),a=Math.max(1,Math.ceil(m/i));for(let e=0;e<i&&f<aS;e++){let r=(h+e*a)%m,i=r%p*u,o=(Math.floor(r/p)*u*t.width+i)*4;if(n[o+3]===0)continue;let s=f*4;d[s]=n[o],d[s+1]=n[o+1],d[s+2]=n[o+2],d[s+3]=255,f++}h=(h+1)%a,e%8==7&&await sS()}n?.(10);let g=f>0?new Uint8Array(d.subarray(0,f*4)):void 0,_=g?(0,rS.quantize)(g,255,{format:`rgb565`}):[],v=[[o[0],o[1],o[2]],..._];n?.(20);let y=Math.round(1e3/t.frameRate),b=(0,rS.GIFEncoder)({auto:!0,repeat:0}),x=new Uint8ClampedArray(l*4);for(let e=0;e<s;e++){if(r?.aborted)throw Error(`aborted`);let i=await c(e);x.set(i.data);let a=(0,rS.applyPalette)(x,v,`rgb565`);for(let e=0;e<a.length;e++)x[e*4+3]===0&&(a[e]=0);b.writeFrame(a,t.width,t.height,{...e===0?{palette:v}:{},delay:y,transparent:!0,transparentIndex:0}),n?.(20+Math.round((e+1)/s*80)),e%8==7&&await sS()}b.finish();let S=b.bytes();return new Blob([S.slice().buffer],{type:`image/gif`})}function lS(e){if(e.frames)return{count:e.frames.length,get:t=>e.frames[t]};if(e.frameCount!=null&&e.renderFrame)return{count:e.frameCount,get:e.renderFrame};throw Error(`ExportRequest 需要 frames 或 frameCount + renderFrame`)}function uS(e=`webm`){if(typeof MediaRecorder>`u`)return``;let t=e===`mp4`?[`video/mp4;codecs=avc1`,`video/mp4`]:[`video/webm;codecs=vp9`,`video/webm;codecs=vp8`,`video/webm`];for(let e of t)if(MediaRecorder.isTypeSupported(e))return e;return``}function dS(e){return new Promise(t=>setTimeout(t,e))}async function fS(e,t,n){if(typeof document>`u`){let e=`当前环境不支持导出`;return t({phase:`error`,percent:0,message:e}),{ok:!1,reason:`error`,message:e}}let r=e.format??`webm`;if(r===`gif`){let r=lS(e),i=r.count;if(i===0)throw Error(`no frames to export`);if(e.width>2048||e.height>2048){let e=`GIF 仅支持 ≤ ${iS}px 分辨率，请选择 1080 或更小的档位`;return t({phase:`error`,percent:0,message:e}),{ok:!1,reason:`error`,message:e}}try{t({phase:`prepare`,percent:0,message:`准备编码 GIF…`});let a=await cS({count:i,render:r.get},{width:e.width,height:e.height,frameRate:e.frameRate,backgroundColor:e.backgroundColor??`#ffffff`},e=>t({phase:`encode`,percent:e,message:`编码 GIF…`}),n);return n?.aborted?{ok:!1,reason:`cancelled`}:(t({phase:`done`,percent:100}),{ok:!0,blob:a,mimeType:`image/gif`})}catch(e){if(n?.aborted)return{ok:!1,reason:`cancelled`};let r=e instanceof Error?e.message:`GIF 编码失败`;return t({phase:`error`,percent:0,message:r}),{ok:!1,reason:`error`,message:r}}}if(typeof MediaRecorder>`u`){let e=`当前环境不支持 MediaRecorder，无法导出视频`;return t({phase:`error`,percent:0,message:e}),{ok:!1,reason:`error`,message:e}}let i=lS(e),a=i.count;if(a===0)throw Error(`no frames to export`);let o=document.createElement(`canvas`);o.width=e.width,o.height=e.height;let s=o.getContext(`2d`);t({phase:`prepare`,percent:0,message:`准备录制…`});let c=o.captureStream(e.frameRate),l=uS(r);if(!l){let e=`当前浏览器不支持导出 ${r.toUpperCase()} 格式（MediaRecorder）`;return t({phase:`error`,percent:0,message:e}),{ok:!1,reason:`error`,message:e}}let u=new MediaRecorder(c,{mimeType:l,videoBitsPerSecond:1e7}),d=[];u.ondataavailable=e=>{e.data&&e.data.size>0&&d.push(e.data)};let f=new Promise(e=>{u.onstop=()=>e()}),p=()=>{try{u.stop()}catch{}};n?.addEventListener(`abort`,p,{once:!0}),t({phase:`encode`,percent:0,message:`录制中（按真实帧间隔绘制）…`}),u.start();let m=1e3/e.frameRate,h=e.backgroundColor??`#ffffff`;for(let r=0;r<a&&!n?.aborted;r++)s.fillStyle=h,s.fillRect(0,0,e.width,e.height),s.drawImage(await i.get(r),0,0,e.width,e.height),await dS(m),t({phase:`encode`,percent:Math.round((r+1)/a*100)});try{u.stop()}catch{}if(await f,n?.removeEventListener(`abort`,p),n?.aborted)return{ok:!1,reason:`cancelled`};let g=u.mimeType||l||`video/webm`;return t({phase:`done`,percent:100}),{ok:!0,blob:new Blob(d,{type:g}),mimeType:g}}function pS(e,t,n,r,i){let a=document.createElement(`canvas`);a.width=n,a.height=r;let o=a.getContext(`2d`);if(!o)return a;let s=$y(n,r,0);o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,n,r),o.fillStyle=i,o.fillRect(0,0,n,r),o.lineJoin=`round`,o.lineCap=`round`;let c=(e,t,n)=>{if(e.length<2)return;o.beginPath();let r=eb(e[0],s);o.moveTo(r.x,r.y);for(let t=1;t<e.length;t++){let n=eb(e[t],s);o.lineTo(n.x,n.y)}o.strokeStyle=t,o.lineWidth=Math.max(2,s.scale*n),o.stroke()};if(e)for(let t=0;t<e.subpaths.length;t++){let n=e.subpathWidths?.[t]??.015;c(e.subpaths[t],e.subpathColors[t]?.stroke??`#000000`,n)}for(let e of t)c(e.points,e.color,e.width);return a}var mS;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(mS||={});var hS=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},gS=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,_S=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?gS(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||=e=>e,n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new hS(`"${e}" plugin is not implemented on ${c}`,mS.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new hS(`"${e}.${t}()" is not implemented on ${c}`,mS.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=hS,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},vS=(e=>e.Capacitor=_S(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),yS=vS.registerPlugin,bS=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(!r){if(n){let n=this.retainedEventArguments[e];n||=[],n.push(t),this.retainedEventArguments[e]=n}return}r.forEach(e=>e(t))}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new vS.Exception(e,mS.Unimplemented)}unavailable(e=`not available`){return new vS.Exception(e,mS.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},xS=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),SS=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),CS=class extends bS{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=SS(n).trim(),r=SS(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=xS(e.key),n=xS(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};yS(`CapacitorCookies`,{web:()=>new CS});var wS=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),TS=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},ES=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,DS=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=TS(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},OS=class extends bS{async request(e){let t=DS(e,e.webFetchExtra),n=ES(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await wS(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};yS(`CapacitorHttp`,{web:()=>new OS});var kS;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(kS||={});var AS;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(AS||={});var jS=class extends bS{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};yS(`SystemBars`,{web:()=>new jS});var MS=yS(`SaveFile`),NS=vS.isNativePlatform(),PS=4194304;function FS(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function IS(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=typeof r.result==`string`?r.result:``;t(e.slice(e.indexOf(`,`)+1))},r.onerror=()=>n(r.error??Error(`failed to read blob`)),r.readAsDataURL(e)})}async function LS(e,t,n){if(!NS)return FS(e,t),`saved`;try{if(!(await MS.startSave({fileName:t,mimeType:n})).ok)return`cancelled`;let r=e.size;for(let t=0;t<r;t+=PS){let n=await IS(e.slice(t,Math.min(t+PS,r)));await MS.writeChunk({data:n})}return await MS.finish(),`saved`}catch(e){try{await MS.abort()}catch{}return e instanceof Error&&e.message.includes(`cancelled`)?`cancelled`:`failed`}}var RS={class:`export-panel`},zS={class:`export-panel__formats export-panel__formats--res`},BS={class:`export-panel__format-label`},VS={class:`export-panel__formats`},HS={class:`export-panel__format-label`},US=[`min`,`max`,`value`,`disabled`],WS={class:`export-panel__formats`},GS={class:`export-panel__format-label`},KS={key:1,class:`export-panel__progress`},qS={class:`export-panel__bar`},JS={class:`export-panel__meta`},YS={class:`export-panel__label`},XS={key:2,class:`export-panel__done`},ZS=[`href`,`download`],QS={key:3,class:`export-panel__msg`},$S={class:`export-panel__divider`},eC={class:`export-panel__desc`},tC=[`disabled`],nC={key:4,class:`export-panel__msg`},rC={key:5,class:`export-panel__error`},iC={key:6,class:`export-panel__error`},aC=F_(R({__name:`ExportPanel`,props:{editingLayer:{}},setup(e){let t=e,n=nf(),{t:r}=$g(),i=I(!1),a=I(null),o=I(null),s=I(`morph.webm`),c=I(null),l=I(null),u=I(!1),d=I(null),f=I(null),p=null,m=null,h=G(()=>a.value?.percent??0),g=G(()=>r(`export.${a.value?.phase??`prepare`}`)),_=G(()=>t.editingLayer??n.shapes[0]??null),v=G(()=>{let e=_.value;return!e||!e.svg?null:Uu({...e,strokes:void 0})}),y=G(()=>_.value?n.strokesOf(_.value):[]);function b(e){n.setConfig({exportFormat:e})}function x(e){let t=Math.round(Number(e.target.value));Number.isFinite(t)&&n.setConfig({frameRate:Math.min(120,Math.max(1,t))})}function S(e){n.setResolution(Number(e),Number(e))}function C(){m&&=(URL.revokeObjectURL(m),null),o.value=null}function w(e){return e.includes(`gif`)?`gif`:e.includes(`mp4`)?`mp4`:`webm`}async function T(){if(i.value)return;C(),c.value=null,a.value={phase:`prepare`,percent:0,message:r(`export.preparing`)};let{width:e,height:t}=n.config.resolution,u=n.playbackShapes,d=u[0],f=d?Uu(d):null,h=f?.subpaths??gf(),g=f?.subpathColors[0]?.stroke??`#000000`,_=f?.subpathColors??[],v=f?.subpathWidths??[],y={morphDurationMs:n.config.morphDurationMs,holdDurationMs:n.config.holdDurationMs,frameRate:n.config.frameRate,initialPaths:h,initialStrokeColor:g,initialSubpathColors:_,initialSubpathWidths:v,initialAnimation:n.config.initialAnimation,initialDurationMs:n.config.initialDurationMs,strokeDrawMs:300},b=Cf(bf(u.slice(1),n.config.morphDurationMs,n.config.frameRate,h,g,_,v),y),x=b.findIndex(e=>e.paths.some(e=>e.length>=2)&&(e.alpha??1)>0),S=x>0?b.slice(x):b,T=document.createElement(`canvas`);T.width=e,T.height=t;let E=T.getContext(`2d`);p=new AbortController,i.value=!0;try{let i=await fS({width:e,height:t,frameRate:n.config.frameRate,frameCount:S.length,backgroundColor:n.config.backgroundColor,format:n.config.exportFormat,renderFrame:r=>{let i=S[r];return rb(E,e,t,i.paths,{backgroundColor:n.config.backgroundColor,strokeColor:i.strokeColor,colors:i.colors,widths:i.widths,alpha:i.alpha}),T}},e=>{a.value=e},p.signal);if(i.ok){let e=`morph.${w(i.mimeType)}`;if(NS){l.value=r(`export.saving`);let t=await LS(i.blob,e,i.mimeType);t===`saved`?l.value=r(`export.saved`):t===`cancelled`?l.value=null:(l.value=null,c.value=r(`export.saveFailed`))}else m=URL.createObjectURL(i.blob),o.value=m,s.value=e}else i.reason!==`cancelled`&&(c.value=i.message??r(`export.exportFailed`))}catch(e){c.value=e instanceof Error?e.message:String(e)}finally{i.value=!1,p=null}}function E(){p?.abort()}async function D(){if(u.value)return;let e=_.value;if(!e){f.value=r(`export.noLayer`);return}f.value=null,d.value=null,u.value=!0;try{let{width:t,height:i}=n.config.resolution,a=pS(v.value,y.value,t,i,n.config.backgroundColor),o=(e.name||`layer`).replace(/[^\w一-龥-]+/g,`_`);d.value=r(`export.saving`),a.toBlob(async e=>{if(!e){f.value=r(`export.saveFailed`);return}let t=await LS(e,`${o}.png`,`image/png`);t===`saved`?d.value=r(NS?`export.saved`:`export.downloaded`):t===`cancelled`?d.value=null:(d.value=null,f.value=r(`export.saveFailed`))},`image/png`)}catch(e){f.value=e instanceof Error?e.message:String(e)}finally{u.value=!1}}return Vr(()=>{p?.abort(),C()}),(e,t)=>(B(),V(`div`,RS,[H(`div`,zS,[H(`span`,BS,N(L(r)(`settings.resolution`)),1),U(Y_,{"model-value":L(n).config.resolution.width,options:L(__).map(e=>({value:e.size,label:e.label})),wrap:``,disabled:i.value,"onUpdate:modelValue":S},null,8,[`model-value`,`options`,`disabled`])]),H(`div`,VS,[H(`span`,HS,N(L(r)(`settings.frameRate`)),1),H(`input`,{class:`export-panel__rate-input`,type:`number`,min:L(1),max:L(120),step:`1`,value:L(n).config.frameRate,disabled:i.value,onChange:t[0]||=e=>x(e)},null,40,US),t[1]||=H(`span`,{class:`export-panel__format-label`},`fps`,-1)]),H(`div`,WS,[H(`span`,GS,N(L(r)(`export.format`)),1),U(Y_,{"model-value":L(n).config.exportFormat,options:[{value:`webm`,label:`WebM`},{value:`mp4`,label:`MP4`},{value:`gif`,label:`GIF`}],disabled:i.value,"onUpdate:modelValue":b},null,8,[`model-value`,`disabled`])]),!i.value&&!o.value?(B(),V(`button`,{key:0,class:`export-panel__btn`,type:`button`,onClick:T},N(L(r)(`export.exportVideo`)),1)):W(``,!0),i.value?(B(),V(`div`,KS,[H(`div`,qS,[H(`div`,{class:`export-panel__fill`,style:ce({width:h.value+`%`})},null,4)]),H(`div`,JS,[H(`span`,YS,N(g.value)+` `+N(h.value)+`%`,1),H(`button`,{class:`export-panel__cancel`,type:`button`,onClick:E},N(L(r)(`common.cancel`)),1)])])):W(``,!0),o.value?(B(),V(`div`,XS,[H(`a`,{class:`export-panel__link`,href:o.value,download:s.value},N(L(r)(`export.download`,{name:s.value})),9,ZS),H(`button`,{class:`export-panel__btn export-panel__btn--ghost`,type:`button`,onClick:T},N(L(r)(`export.reexport`)),1)])):W(``,!0),l.value?(B(),V(`p`,QS,N(l.value),1)):W(``,!0),H(`div`,$S,[H(`span`,null,N(L(r)(`export.layerImage`)),1)]),H(`p`,eC,N(L(r)(`export.layerImageHint`)),1),H(`button`,{class:`export-panel__btn export-panel__btn--ghost`,type:`button`,disabled:u.value||!_.value,onClick:D},N(u.value?L(r)(`export.saving`):L(r)(`export.exportLayerImage`)),9,tC),d.value?(B(),V(`p`,nC,N(d.value),1)):W(``,!0),f.value?(B(),V(`p`,rC,N(f.value),1)):W(``,!0),c.value?(B(),V(`p`,iC,N(c.value),1)):W(``,!0)]))}}),[[`__scopeId`,`data-v-0a9db7e7`]]),oC=R({__name:`ExportDialog`,props:{open:{type:Boolean},editingLayer:{}},emits:[`close`],setup(e,{emit:t}){let n=t,{t:r}=$g();return(t,i)=>(B(),Ea(zb,{open:e.open,title:L(r)(`export.exportVideo`),onClose:i[0]||=e=>n(`close`)},{default:In(()=>[U(aC,{"editing-layer":e.editingLayer},null,8,[`editing-layer`])]),_:1},8,[`open`,`title`]))}}),sC=[`aria-label`],cC=[`aria-label`],lC=F_(R({__name:`EdgeHandles`,props:{leftCollapsed:{type:Boolean},rightCollapsed:{type:Boolean}},emits:[`toggle-left`,`toggle-right`],setup(e,{emit:t}){let n=t,{t:r}=$g();return(t,i)=>(B(),V(z,null,[H(`button`,{class:pe([`app__handle app__handle--left`,{"app__handle--left--collapsed":e.leftCollapsed}]),type:`button`,"aria-label":e.leftCollapsed?L(r)(`app.ariaExpandSettings`):L(r)(`app.ariaCollapseSettings`),onClick:i[0]||=e=>n(`toggle-left`)},[e.leftCollapsed?(B(),Ea(M_,{key:0,class:`app__handle-icon`,size:14})):(B(),Ea(Ux,{key:1,class:`app__handle-icon`,size:14})),H(`span`,null,N(e.leftCollapsed?L(r)(`app.settings`):L(r)(`app.collapse`)),1)],10,sC),H(`button`,{class:pe([`app__handle app__handle--right`,{"app__handle--right--collapsed":e.rightCollapsed}]),type:`button`,"aria-label":e.rightCollapsed?L(r)(`app.ariaExpandSequence`):L(r)(`app.ariaCollapseSequence`),onClick:i[1]||=e=>n(`toggle-right`)},[e.rightCollapsed?(B(),Ea(Ux,{key:0,class:`app__handle-icon`,size:14})):(B(),Ea(M_,{key:1,class:`app__handle-icon`,size:14})),H(`span`,null,N(e.rightCollapsed?L(r)(`app.sequence`):L(r)(`app.collapse`)),1)],10,cC)],64))}}),[[`__scopeId`,`data-v-841be9b8`]]),uC={class:`app`},dC={class:`app__body`},fC=Os(F_(R({__name:`App`,setup(e){let t=nf(),{status:n,start:r,jumpToEnd:i,reset:a}=Vf(),o=I(!1),s=I(!1),c=Wf(),l=I(c.value),u=I(c.value);Gn(c,e=>{l.value=e,u.value=e});let d=I(null);function f(){l.value=!l.value}function p(){u.value=!u.value,u.value&&d.value?.closeOverlays()}function m(){u.value=!0,d.value?.closeOverlays()}function h(){c.value&&u.value&&(u.value=!1)}function g(){h(),d.value?.resetSequence()}let _=I(null),v=G(()=>t.shapes.find(e=>e.id===_.value)??t.allShapes.find(e=>e.id===_.value)??null),y=G(()=>{let e=v.value;return e?t.strokesOf(e):[]}),b=G(()=>{let e=v.value;return!e||!e.svg?null:Uu({...e,strokes:void 0})}),x=I(`#ff0000`),S=G({get:()=>t.config.penWidth,set:e=>t.setConfig({penWidth:e})}),C=G({get:()=>t.config.penSmoothing,set:e=>t.setConfig({penSmoothing:e})}),w=I(1);function T(e){_.value!==e&&vd(`page`),c.value&&(u.value=!0),_.value=e,t.pruneEmptyLayers(e),a();let n=t.allShapes.find(t=>t.id===e)?.strokes,r=n&&n.length>0?n[n.length-1]:void 0;r&&(x.value=r.color)}function E(){_.value=null,t.pruneEmptyLayers(null)}function D(e){let n=_.value;if(!n)return;let r=t.appendStrokeTo(n,e);r!==n&&(_.value=r)}function O(){_.value&&t.undoStrokeOf(_.value)}function k(){_.value&&t.clearStrokesOf(_.value)}function A(){n.value===`playing`?i():r()}function j(){E(),A()}function ee(){o.value=!0}function te(){o.value=!1}function M(){s.value=!0}function ne(){s.value=!1}return(e,t)=>(B(),V(`main`,uC,[H(`div`,dC,[U(ky,{collapsed:l.value,onToggle:f},null,8,[`collapsed`]),U(Ab,{"editing-layer":v.value,strokes:y.value,base:b.value,status:L(n),color:x.value,"onUpdate:color":t[0]||=e=>x.value=e,width:S.value,"onUpdate:width":t[1]||=e=>S.value=e,smoothing:C.value,"onUpdate:smoothing":t[2]||=e=>C.value=e,scale:w.value,"onUpdate:scale":t[3]||=e=>w.value=e,onUndo:O,onClear:k,onDone:E,onStroke:D,onReplay:A,onPlay:j,onExport:M},null,8,[`editing-layer`,`strokes`,`base`,`status`,`color`,`width`,`smoothing`,`scale`]),U(zx,{ref_key:`editorPaneRef`,ref:d,collapsed:u.value,"editing-layer":v.value,onEdit:T,onToggleCollapse:p,onClose:m},null,8,[`collapsed`,`editing-layer`])]),U(tS,{collapsed:u.value,onToggle:p,onSettings:ee,onReset:g},null,8,[`collapsed`]),U(nS,{open:o.value,onClose:te},null,8,[`open`]),U(oC,{open:s.value,"editing-layer":v.value,onClose:ne},null,8,[`open`,`editing-layer`]),U(lC,{"left-collapsed":l.value,"right-collapsed":u.value,onToggleLeft:f,onToggleRight:p},null,8,[`left-collapsed`,`right-collapsed`])]))}}),[[`__scopeId`,`data-v-900e4529`]])),pC=Js();fC.use(pC),g_(pC),fC.use(D_),fC.mount(`#app`);