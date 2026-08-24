(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),E=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},D=/-\w/g,O=E(e=>e.replace(D,e=>e.slice(1).toUpperCase())),k=/\B([A-Z])/g,A=E(e=>e.replace(k,`-$1`).toLowerCase()),j=E(e=>e.charAt(0).toUpperCase()+e.slice(1)),ee=E(e=>e?`on${j(e)}`:``),te=(e,t)=>!Object.is(e,t),ne=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},M=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},re=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ie=e=>{let t=g(e)?Number(e):NaN;return isNaN(t)?e:t},ae,oe=()=>ae||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function N(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?F(r):N(r);if(i)for(let e in i)t[e]=i[e]}return t}if(g(e)||v(e))return e}var se=/;(?![^(]*\))/g,ce=/:([^]+)/,P=/\/\*[^]*?\*\//g;function F(e){let t={};return e.replace(P,``).split(se).forEach(e=>{if(e){let n=e.split(ce);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function I(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=I(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var le=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,L=e(le);le+``;function ue(e){return!!e||e===``}function de(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=fe(e[r],t[r]);return n}function fe(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?de(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!fe(e[n],t[n]))return!1}}return String(e)===String(t)}var pe=e=>!!(e&&e.__v_isRef===!0),R=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?pe(e)?R(e.value):JSON.stringify(e,z,2):String(e),z=(e,t)=>pe(t)?z(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[me(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>me(e))}:_(t)?me(t):v(t)&&!d(t)&&!C(t)?String(t):t,me=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,B,V=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&B&&(B.active?(this.parent=B,this.index=(B.scopes||(B.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=B;try{return B=this,e()}finally{B=t}}}on(){++this._on===1&&(this.prevScope=B,B=this)}off(){if(this._on>0&&--this._on===0){if(B===this)B=this.prevScope;else{let e=B;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function he(){return B}var H,ge=new WeakSet,_e=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,B&&(B.active?B.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ge.has(this)&&(ge.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pe(this),we(this);let e=H,t=Ae;H=this,Ae=!0;try{return this.fn()}finally{Te(this),H=e,Ae=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oe(e);this.deps=this.depsTail=void 0,Pe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ge.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ee(this)&&this.run()}get dirty(){return Ee(this)}},ve=0,ye,be;function xe(e,t=!1){if(e.flags|=8,t){e.next=be,be=e;return}e.next=ye,ye=e}function Se(){ve++}function Ce(){if(--ve>0)return;if(be){let e=be;for(be=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;ye;){let t=ye;for(ye=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function we(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Te(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Oe(r),ke(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ee(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(De(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function De(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Fe)||(e.globalVersion=Fe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ee(e))))return;e.flags|=2;let t=e.dep,n=H,r=Ae;H=e,Ae=!0;try{we(e);let n=e.fn(e._value);(t.version===0||te(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{H=n,Ae=r,Te(e),e.flags&=-3}}function Oe(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Oe(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ke(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ae=!0,je=[];function Me(){je.push(Ae),Ae=!1}function Ne(){let e=je.pop();Ae=e===void 0||e}function Pe(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=H;H=void 0;try{t()}finally{H=e}}}var Fe=0,Ie=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Le=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!H||!Ae||H===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==H)t=this.activeLink=new Ie(H,this),H.deps?(t.prevDep=H.depsTail,H.depsTail.nextDep=t,H.depsTail=t):H.deps=H.depsTail=t,Re(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=H.depsTail,t.nextDep=void 0,H.depsTail.nextDep=t,H.depsTail=t,H.deps===t&&(H.deps=e)}return t}trigger(e){this.version++,Fe++,this.notify(e)}notify(e){Se();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ce()}}};function Re(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Re(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var ze=new WeakMap,Be=Symbol(``),Ve=Symbol(``),He=Symbol(``);function U(e,t,n){if(Ae&&H){let t=ze.get(e);t||ze.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Le),r.map=t,r.key=n),r.track()}}function Ue(e,t,n,r,i,a){let o=ze.get(e);if(!o){Fe++;return}let s=e=>{e&&e.trigger()};if(Se(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===He||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(He)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Be)),f(e)&&s(o.get(Ve)));break;case`delete`:i||(s(o.get(Be)),f(e)&&s(o.get(Ve)));break;case`set`:f(e)&&s(o.get(Be))}}Ce()}function We(e){let t=W(e);return t===e?t:(U(t,`iterate`,He),kt(e)?t:t.map(Mt))}function Ge(e){return U(e=W(e),`iterate`,He),e}function Ke(e,t){return Ot(e)?Nt(Dt(e)?Mt(t):t):Mt(t)}var qe={__proto__:null,[Symbol.iterator](){return Je(this,Symbol.iterator,e=>Ke(this,e))},concat(...e){return We(this).concat(...e.map(e=>d(e)?We(e):e))},entries(){return Je(this,`entries`,e=>(e[1]=Ke(this,e[1]),e))},every(e,t){return Xe(this,`every`,e,t,void 0,arguments)},filter(e,t){return Xe(this,`filter`,e,t,e=>e.map(e=>Ke(this,e)),arguments)},find(e,t){return Xe(this,`find`,e,t,e=>Ke(this,e),arguments)},findIndex(e,t){return Xe(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Xe(this,`findLast`,e,t,e=>Ke(this,e),arguments)},findLastIndex(e,t){return Xe(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Xe(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Qe(this,`includes`,e)},indexOf(...e){return Qe(this,`indexOf`,e)},join(e){return We(this).join(e)},lastIndexOf(...e){return Qe(this,`lastIndexOf`,e)},map(e,t){return Xe(this,`map`,e,t,void 0,arguments)},pop(){return $e(this,`pop`)},push(...e){return $e(this,`push`,e)},reduce(e,...t){return Ze(this,`reduce`,e,t)},reduceRight(e,...t){return Ze(this,`reduceRight`,e,t)},shift(){return $e(this,`shift`)},some(e,t){return Xe(this,`some`,e,t,void 0,arguments)},splice(...e){return $e(this,`splice`,e)},toReversed(){return We(this).toReversed()},toSorted(e){return We(this).toSorted(e)},toSpliced(...e){return We(this).toSpliced(...e)},unshift(...e){return $e(this,`unshift`,e)},values(){return Je(this,`values`,e=>Ke(this,e))}};function Je(e,t,n){let r=Ge(e),i=r[t]();return r!==e&&!kt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var Ye=Array.prototype;function Xe(e,t,n,r,i,a){let o=Ge(e),s=o!==e&&!kt(e),c=o[t];if(c!==Ye[t]){let t=c.apply(e,a);return s?Mt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Ke(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function Ze(e,t,n,r){let i=Ge(e),a=i!==e&&!kt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Ke(e,t)),n.call(this,t,Ke(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Ke(e,c):c}function Qe(e,t,n){let r=W(e);U(r,`iterate`,He);let i=r[t](...n);return(i===-1||i===!1)&&At(n[0])?(n[0]=W(n[0]),r[t](...n)):i}function $e(e,t,n=[]){Me(),Se();let r=W(e)[t].apply(e,n);return Ce(),Ne(),r}var et=e(`__proto__,__v_isRef,__isVue`),tt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function nt(e){_(e)||(e=String(e));let t=W(this);return U(t,`has`,e),t.hasOwnProperty(e)}var rt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?xt:bt:i?yt:vt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=qe[t]))return e;if(t===`hasOwnProperty`)return nt}let o=Reflect.get(e,t,Pt(e)?e:n);if((_(t)?tt.has(t):et(t))||(r||U(e,`get`,t),i))return o;if(Pt(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Tt(e):e}return v(o)?r?Tt(o):Ct(o):o}},it=class extends rt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Ot(i);if(!kt(n)&&!Ot(n)&&(i=W(i),n=W(n)),!a&&Pt(i)&&!Pt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,Pt(e)?e:r);return e===W(r)&&s&&(o?te(n,i)&&Ue(e,`set`,t,n,i):Ue(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Ue(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!tt.has(t))&&U(e,`has`,t),n}ownKeys(e){return U(e,`iterate`,d(e)?`length`:Be),Reflect.ownKeys(e)}},at=class extends rt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},ot=new it,st=new at,ct=new it(!0),lt=e=>e,ut=e=>Reflect.getPrototypeOf(e);function dt(e,t,n){return function(...r){let i=this.__v_raw,a=W(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?lt:t?Nt:Mt;return!t&&U(a,`iterate`,l?Ve:Be),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function ft(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function pt(e,t){let n={get(n){let r=this.__v_raw,i=W(r),a=W(n);e||(te(n,a)&&U(i,`get`,n),U(i,`get`,a));let{has:o}=ut(i),s=t?lt:e?Nt:Mt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&U(W(t),`iterate`,Be),t.size},has(t){let n=this.__v_raw,r=W(n),i=W(t);return e||(te(t,i)&&U(r,`has`,t),U(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=W(a),s=t?lt:e?Nt:Mt;return!e&&U(o,`iterate`,Be),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:ft(`add`),set:ft(`set`),delete:ft(`delete`),clear:ft(`clear`)}:{add(e){let n=W(this),r=ut(n),i=W(e),a=!t&&!kt(e)&&!Ot(e)?i:e;return r.has.call(n,a)||te(e,a)&&r.has.call(n,e)||te(i,a)&&r.has.call(n,i)||(n.add(a),Ue(n,`add`,a,a)),this},set(e,n){!t&&!kt(n)&&!Ot(n)&&(n=W(n));let r=W(this),{has:i,get:a}=ut(r),o=i.call(r,e);o||=(e=W(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?te(n,s)&&Ue(r,`set`,e,n,s):Ue(r,`add`,e,n),this},delete(e){let t=W(this),{has:n,get:r}=ut(t),i=n.call(t,e);i||=(e=W(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Ue(t,`delete`,e,void 0,a),o},clear(){let e=W(this),t=e.size!==0,n=e.clear();return t&&Ue(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=dt(r,e,t)}),n}function mt(e,t){let n=pt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var ht={get:mt(!1,!1)},gt={get:mt(!1,!0)},_t={get:mt(!0,!1)},vt=new WeakMap,yt=new WeakMap,bt=new WeakMap,xt=new WeakMap;function St(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Ct(e){return Ot(e)?e:Et(e,!1,ot,ht,vt)}function wt(e){return Et(e,!1,ct,gt,yt)}function Tt(e){return Et(e,!0,st,_t,bt)}function Et(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=St(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Dt(e){return Ot(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ot(e){return!!(e&&e.__v_isReadonly)}function kt(e){return!!(e&&e.__v_isShallow)}function At(e){return e?!!e.__v_raw:!1}function W(e){let t=e&&e.__v_raw;return t?W(t):e}function jt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&M(e,`__v_skip`,!0),e}var Mt=e=>v(e)?Ct(e):e,Nt=e=>v(e)?Tt(e):e;function Pt(e){return e?e.__v_isRef===!0:!1}function G(e){return Ft(e,!1)}function Ft(e,t){return Pt(e)?e:new It(e,t)}var It=class{constructor(e,t){this.dep=new Le,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:W(e),this._value=t?e:Mt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||kt(e)||Ot(e);e=n?e:W(e),te(e,t)&&(this._rawValue=e,this._value=n?e:Mt(e),this.dep.trigger())}};function K(e){return Pt(e)?e.value:e}var Lt={get:(e,t,n)=>t===`__v_raw`?e:K(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Pt(i)&&!Pt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Rt(e){return Dt(e)?e:new Proxy(e,Lt)}var zt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Le(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fe-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&H!==this)return xe(this,!0),!0}get value(){let e=this.dep.track();return De(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Bt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new zt(r,i,n)}var Vt={},Ht=new WeakMap,Ut=void 0;function Wt(e,t=!1,n=Ut){if(n){let t=Ht.get(n);t||Ht.set(n,t=[]),t.push(e)}}function Gt(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:kt(e)||o===!1||o===0?Kt(e,1):Kt(e),m,g,_,v,y=!1,b=!1;if(Pt(e)?(g=()=>e.value,y=kt(e)):Dt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Dt(e)||kt(e)),g=()=>e.map(e=>{if(Pt(e))return e.value;if(Dt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Me();try{_()}finally{Ne()}}let t=Ut;Ut=m;try{return f?f(e,3,[v]):e(v)}finally{Ut=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>Kt(e(),t)}let x=he(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(Vt):Vt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>te(e,C[t])):te(t,C))){_&&_();let e=Ut;Ut=m;try{let e=[t,C===Vt?void 0:b&&C[0]===Vt?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{Ut=e}}}else m.run()};return u&&u(w),m=new _e(g),m.scheduler=l?()=>l(w,!1):w,v=e=>Wt(e,!1,m),_=m.onStop=()=>{let e=Ht.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Ht.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function Kt(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Pt(e))Kt(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)Kt(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{Kt(e,t,n)});else if(C(e)){for(let r in e)Kt(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Kt(e[r],t,n)}return e}function qt(e,t,n,r){try{return r?e(...r):e()}catch(e){Yt(e,t,n)}}function Jt(e,t,n,r){if(h(e)){let i=qt(e,t,n,r);return i&&y(i)&&i.catch(e=>{Yt(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(Jt(e[a],t,n,r));return i}}function Yt(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Me(),qt(o,null,10,[e,i,a]),Ne();return}}Xt(e,r,a,i,s)}function Xt(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var Zt=[],Qt=-1,$t=[],en=null,tn=0,nn=Promise.resolve(),rn=null;function an(e){let t=rn||nn;return e?t.then(this?e.bind(this):e):t}function on(e){let t=Qt+1,n=Zt.length;for(;t<n;){let r=t+n>>>1,i=Zt[r],a=fn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function sn(e){if(!(e.flags&1)){let t=fn(e),n=Zt[Zt.length-1];!n||!(e.flags&2)&&t>=fn(n)?Zt.push(e):Zt.splice(on(t),0,e),e.flags|=1,cn()}}function cn(){rn||=nn.then(pn)}function ln(e){d(e)?$t.push(...e):en&&e.id===-1?en.splice(tn+1,0,e):e.flags&1||($t.push(e),e.flags|=1),cn()}function un(e,t,n=Qt+1){for(;n<Zt.length;n++){let t=Zt[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;Zt.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function dn(e){if($t.length){let e=[...new Set($t)].sort((e,t)=>fn(e)-fn(t));if($t.length=0,en){en.push(...e);return}for(en=e,tn=0;tn<en.length;tn++){let e=en[tn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}en=null,tn=0}}var fn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function pn(e){try{for(Qt=0;Qt<Zt.length;Qt++){let e=Zt[Qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qt(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qt<Zt.length;Qt++){let e=Zt[Qt];e&&(e.flags&=-2)}Qt=-1,Zt.length=0,dn(e),rn=null,(Zt.length||$t.length)&&pn(e)}}var mn=null,hn=null;function gn(e){let t=mn;return mn=e,hn=e&&e.type.__scopeId||null,t}function _n(e,t=mn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Qi(-1);let i=gn(t),a=Ji.length,o;try{o=e(...n)}finally{for(let e=Ji.length;e>a;e--)Xi();gn(i),r._d&&Qi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vn(e,n){if(mn===null)return e;let r=Pa(mn),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&Kt(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function yn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Me(),Jt(c,n,8,[e.el,s,e,t]),Ne())}}function bn(e,t){if(va){let n=va.provides,r=va.parent&&va.parent.provides;r===n&&(n=va.provides=Object.create(r)),n[e]=t}}function xn(e,t,n=!1){let r=ya();if(r||ti){let i=ti?ti._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Sn=Symbol.for(`v-scx`),Cn=()=>xn(Sn);function wn(e,t){return En(e,null,t)}function Tn(e,t,n){return En(e,t,n)}function En(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Ta){if(c===`sync`){let e=Cn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=va;u.call=(e,t,n)=>Jt(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{Mi(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():sn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=Gt(e,n,u);return Ta&&(f?f.push(h):d&&h()),h}function Dn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?On(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=Sa(this),s=En(i,a.bind(r),n);return o(),s}function On(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var kn=new WeakMap,An=Symbol(`_vte`),jn=e=>e.__isTeleport,Mn=e=>e&&(e.disabled||e.disabled===``),Nn=e=>e&&(e.defer||e.defer===``),Pn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Fn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,In=(e,t)=>{let n=e&&e.to;return g(n)?t?t(n):null:n},Ln={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Mn(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Mn(e.props),r=e.target=In(e.props,m),a=Hn(r,e,h,p);r&&(o!==`svg`&&Pn(r)?o=`svg`:o!==`mathml`&&Fn(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),Vn(e,!1)))},S=e=>{let t=()=>{if(kn.get(e)===t){if(kn.delete(e),Mn(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),Vn(e,!0)}x(e)}};kn.set(e,t),Mi(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Nn(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),Vn(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=kn.get(e);if(u){u.flags|=8,kn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Mn(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Pn(p)?o=`svg`:(o===`mathml`||Fn(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),Ri(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Rn(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=In(t.props,m);e&&(t.target=e,Rn(t,e,null,l,0))}else g&&Rn(t,p,h,l,1);Vn(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Mn(f),m=a||!p,h=kn.get(e);if(h&&(h.flags|=8,kn.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:Rn,hydrate:zn};function Rn(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!kn.has(e)&&(!d||Mn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function zn(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=In(t.props,c),h=Mn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||Hn(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||Hn(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),Vn(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var Bn=Ln;function Vn(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function Hn(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[An]=o,e&&(r(a,e,i),r(o,e,i)),o}var Un=Symbol(`_leaveCb`),Wn=Symbol(`_enterCb`);function Gn(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yr(()=>{e.isMounted=!0}),Sr(()=>{e.isUnmounting=!0}),e}var Kn=[Function,Array],qn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kn,onEnter:Kn,onAfterEnter:Kn,onEnterCancelled:Kn,onBeforeLeave:Kn,onLeave:Kn,onAfterLeave:Kn,onLeaveCancelled:Kn,onBeforeAppear:Kn,onAppear:Kn,onAfterAppear:Kn,onAppearCancelled:Kn},Jn=e=>{let t=e.subTree;return t.component?Jn(t.component):t},Yn={name:`BaseTransition`,props:qn,setup(e,{slots:t}){let n=ya(),r=Gn();return()=>{let i=t.default&&rr(t.default(),!0),a=i&&i.length?Xn(i):n.subTree?Q():void 0;if(!a)return;let o=W(e),{mode:s}=o;if(r.isLeaving)return er(a);let c=tr(a);if(!c)return er(a);let l=$n(c,o,r,n,e=>l=e);c.type!==Ki&&nr(c,l);let u=n.subTree&&tr(n.subTree);if(u&&u.type!==Ki&&!na(u,c)&&Jn(n).type!==Ki){let e=$n(u,o,r,n);if(nr(u,e),s===`out-in`&&c.type!==Ki)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},er(a);s===`in-out`&&c.type!==Ki?e.delayLeave=(e,t,n)=>{let i=Qn(r,u);i[String(u.key)]=u,e[Un]=()=>{t(),e[Un]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function Xn(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Ki){t=n;break}}return t}var Zn=Yn;function Qn(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function $n(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=Qn(n,e),C=(e,t)=>{e&&Jt(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},T={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=_||c;else return;t[Un]&&t[Un](!0);let i=S[x];i&&na(e,i)&&i.el[Un]&&i.el[Un](),C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=f;if(!n.isMounted)if(a)r=v||l,i=y||u,o=b||f;else return;let s=!1;t[Wn]=e=>{s||(s=!0,C(e?o:i,[t]),T.delayedLeave&&T.delayedLeave(),t[Wn]=void 0)};let c=t[Wn].bind(null,!1);r?w(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[Wn]&&t[Wn](!0),n.isUnmounting)return r();C(p,[t]);let a=!1;t[Un]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[Un]=void 0,S[i]===e&&delete S[i])};let o=t[Un].bind(null,!1);S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=$n(e,t,n,r,i);return i&&i(a),a}};return T}function er(e){if(dr(e))return e=sa(e),e.children=null,e}function tr(e){if(!dr(e))return jn(e.type)&&e.children?Xn(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function nr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,nr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function rr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===q?(o.patchFlag&128&&i++,r=r.concat(rr(o.children,t,s))):(t||o.type!==Ki)&&r.push(s==null?o:sa(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function ir(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function ar(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function or(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var sr=new WeakMap;function cr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>cr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(ur(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&cr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?Pa(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=W(v),b=v===t?i:e=>!or(_,e)&&u(y,e),x=(e,t)=>!(t&&or(_,t));if(m!=null&&m!==p){if(lr(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(Pt(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))qt(p,f,12,[l,_]);else{let t=g(p),n=Pt(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),sr.delete(e)};t.id=-1,sr.set(e,t),Mi(t,r)}else lr(e),i()}}}function lr(e){let t=sr.get(e);t&&(t.flags|=8,sr.delete(e))}oe().requestIdleCallback,oe().cancelIdleCallback;var ur=e=>!!e.type.__asyncLoader,dr=e=>e.type.__isKeepAlive;function fr(e,t){mr(e,`a`,t)}function pr(e,t){mr(e,`da`,t)}function mr(e,t,n=va){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(gr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)dr(e.parent.vnode)&&hr(r,t,n,e),e=e.parent}}function hr(e,t,n,r){let i=gr(t,e,r,!0);Cr(()=>{c(r[t],i)},n)}function gr(e,t,n=va,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Me();let i=Sa(n),a=Jt(t,n,e,r);return i(),Ne(),a};return r?i.unshift(a):i.push(a),a}}var _r=e=>(t,n=va)=>{(!Ta||e===`sp`)&&gr(e,(...e)=>t(...e),n)},vr=_r(`bm`),yr=_r(`m`),br=_r(`bu`),xr=_r(`u`),Sr=_r(`bum`),Cr=_r(`um`),wr=_r(`sp`),Tr=_r(`rtg`),Er=_r(`rtc`);function Dr(e,t=va){gr(`ec`,e,t)}var Or=Symbol.for(`v-ndc`);function kr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Dt(e),r=!1,s=!1;n&&(r=!kt(e),s=Ot(e),e=Ge(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Nt(Mt(e[n])):Mt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function Ar(e,t,n={},r,i,a){if(mn.ce||mn.parent&&ur(mn.parent)&&mn.parent.ce){let e=a!=null&&n.key==null?s({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),J(),ea(q,null,[Z(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let c=Ji.length;J();let l;try{let i=o&&jr(o(n)),s=n.key||a||i&&i.key;l=ea(q,{key:(s&&!_(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=Ji.length;e>c;e--)Xi();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+`-s`]),l}function jr(e){return e.some(e=>!ta(e)||!(e.type===Ki||e.type===q&&!jr(e.children)))?e:null}var Mr=e=>e?wa(e)?Pa(e):Mr(e.parent):null,Nr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mr(e.parent),$root:e=>Mr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Hr(e),$forceUpdate:e=>e.f||=()=>{sn(e.update)},$nextTick:e=>e.n||=an.bind(e.proxy),$watch:e=>Dn.bind(e)}),Pr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Fr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Pr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Lr&&(s[n]=0)}let d=Nr[n],f,p;if(d)return n===`$attrs`&&U(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Pr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Pr(n,c)||u(o,c)||u(i,c)||u(Nr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Ir(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Lr=!0;function Rr(e){let t=Hr(e),n=e.proxy,i=e.ctx;Lr=!1,t.beforeCreate&&Br(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:E,renderTriggered:D,errorCaptured:O,serverPrefetch:k,expose:A,inheritAttrs:j,components:ee,directives:te,filters:ne}=t;if(u&&zr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Ct(t))}if(Lr=!0,o)for(let e in o){let t=o[e],a=$({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Vr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{bn(t,e[t])})}f&&Br(f,e,`c`);function M(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(M(vr,p),M(yr,m),M(br,g),M(xr,_),M(fr,y),M(pr,b),M(Dr,O),M(Er,E),M(Tr,D),M(Sr,S),M(Cr,w),M(wr,k),d(A))if(A.length){let t=e.exposed||={};A.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};T&&e.render===r&&(e.render=T),j!=null&&(e.inheritAttrs=j),ee&&(e.components=ee),te&&(e.directives=te),k&&ar(e)}function zr(e,t,n=r){d(e)&&(e=qr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?xn(r.from||n,r.default,!0):xn(r.from||n):xn(r),Pt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Br(e,t,n){Jt(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vr(e,t,n,r){let i=r.includes(`.`)?On(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Tn(i,n)}else if(h(e))Tn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Vr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Tn(i,r,e)}}function Hr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Ur(c,e,o,!0)),Ur(c,t,o)),v(t)&&a.set(t,c),c}function Ur(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Ur(e,a,n,!0),i&&i.forEach(t=>Ur(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Wr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Wr={data:Gr,props:Xr,emits:Xr,methods:Yr,computed:Yr,beforeCreate:Jr,created:Jr,beforeMount:Jr,mounted:Jr,beforeUpdate:Jr,updated:Jr,beforeDestroy:Jr,beforeUnmount:Jr,destroyed:Jr,unmounted:Jr,activated:Jr,deactivated:Jr,errorCaptured:Jr,serverPrefetch:Jr,components:Yr,directives:Yr,watch:Zr,provide:Gr,inject:Kr};function Gr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Kr(e,t){return Yr(qr(e),qr(t))}function qr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Jr(e,t){return e?[...new Set([].concat(e,t))]:t}function Yr(e,t){return e?s(Object.create(null),e,t):t}function Xr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Ir(e),Ir(t??{})):t}function Zr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Jr(e[r],t[r]);return n}function Qr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var $r=0;function ei(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Qr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:$r++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:La,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||Z(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,Pa(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(Jt(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=ti;ti=l;try{return e()}finally{ti=t}}};return l}}var ti=null,ni=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${O(t)}Modifiers`]||e[`${A(t)}Modifiers`];function ri(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&ni(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(re)));let c,l=i[c=ee(n)]||i[c=ee(O(n))];!l&&o&&(l=i[c=ee(A(n))]),l&&Jt(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Jt(u,e,6,a)}}var ii=new WeakMap;function ai(e,t,n=!1){let r=n?ii:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=ai(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function oi(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,A(t))||u(e,t))}function si(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=gn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ua(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=ua(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:ci(c)}}catch(t){Ji.length=0,Yt(t,e,1),v=Z(Ki)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=li(y,a)),b=sa(b,y,!1,!0))}return n.dirs&&(b=sa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&nr(b,n.transition),v=b,gn(_),v}var ci=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},li=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ui(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?di(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(fi(o,r,n)&&!oi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||di(r,o,l):!!o;return!1}function di(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(fi(t,e,a)&&!oi(n,a))return!0}return!1}function fi(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!fe(r,i):r!==i}function pi({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var mi={},hi=()=>Object.create(mi),gi=e=>Object.getPrototypeOf(e)===mi;function _i(e,t,n,r=!1){let i={},a=hi();e.propsDefaults=Object.create(null),yi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:wt(i):e.type.props?i:a,e.attrs=a}function vi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=W(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(oi(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=O(o);i[t]=bi(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{yi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=A(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=bi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&Ue(e.attrs,`set`,``)}function yi(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=O(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:oi(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=W(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=bi(a,n,s,i[s],e,!u(i,s))}}return s}function bi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Sa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===A(n))&&(r=!0))}return r}var xi=new WeakMap;function Si(e,r,i=!1){let a=i?xi:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=Si(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=O(c[e]);Ci(n)&&(l[n]=t)}else if(c)for(let e in c){let t=O(e);if(Ci(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function Ci(e){return e[0]!==`$`&&!T(e)}var wi=e=>e===`_`||e===`_ctx`||e===`$stable`,Ti=e=>d(e)?e.map(ua):[ua(e)],Ei=(e,t,n)=>{if(t._n)return t;let r=_n((...e)=>Ti(t(...e)),n);return r._c=!1,r},Di=(e,t,n)=>{let r=e._ctx;for(let n in e){if(wi(n))continue;let i=e[n];if(h(i))t[n]=Ei(n,i,r);else if(i!=null){let e=Ti(i);t[n]=()=>e}}},Oi=(e,t)=>{let n=Ti(t);e.slots.default=()=>n},ki=(e,t,n)=>{for(let r in t)(n||!wi(r))&&(e[r]=t[r])},Ai=(e,t,n)=>{let r=e.slots=hi();if(e.vnode.shapeFlag&32){let e=t._;e?(ki(r,t,n),n&&M(r,`_`,e,!0)):Di(t,r)}else t&&Oi(e,t)},ji=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:ki(a,n,r):(o=!n.$stable,Di(n,a)),s=n}else n&&(Oi(e,n),s={default:1});if(o)for(let e in a)!wi(e)&&s[e]==null&&delete a[e]},Mi=Wi;function Ni(e){return Pi(e)}function Pi(e,i){let a=oe();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!na(e,t)&&(r=de(e),F(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Gi:y(e,t,n,r);break;case Ki:b(e,t,n,r);break;case qi:e??x(t,n,r,o);break;case q:ee(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?te(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,R)}u!=null&&i?cr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&cr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)E(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),k(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},E=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&O(e.children,d,null,r,i,Fi(e,a),s,u),_&&yn(e,null,r,`created`),D(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ma(f,r,e)}_&&yn(e,null,r,`beforeMount`);let v=Li(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&Mi(()=>{try{f&&ma(f,r,e),v&&g.enter(d),_&&yn(e,null,r,`mounted`)}finally{}},i)},D=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ui(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;D(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?da(e[l]):ua(e[l]);v(null,c,t,n,r,i,a,o,s)}},k=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Ii(r,!1),(g=h.onVnodeBeforeUpdate)&&ma(g,r,n,e),f&&yn(n,e,r,`beforeUpdate`),r&&Ii(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?A(e.dynamicChildren,d,l,r,i,Fi(n,a),o):s||N(e,n,l,null,r,i,Fi(n,a),o,!1),u>0){if(u&16)j(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&j(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&Mi(()=>{g&&ma(g,r,n,e),f&&yn(n,e,r,`updated`)},i)},A=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===q||!na(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},j=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ee=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),O(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(A(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Ri(e,t,!0)):N(e,t,n,f,i,a,s,c,l)},te=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,a,o,c):re(e,t,c)},M=(e,t,n,r,i,a,o)=>{let s=e.component=_a(e,r,i);if(dr(e)&&(s.ctx.renderer=R),Ea(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ie,o),!e.el){let r=s.subTree=Z(Ki);b(null,r,t,n),e.placeholder=r.el}}else ie(s,e,t,n,i,a,o)},re=(e,t,n)=>{let r=t.component=e.component;if(ui(e,t,n))if(r.asyncDep&&!r.asyncResolved){ae(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ie=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Bi(e);if(n){t&&(t.el=c.el,ae(e,t,o)),n.asyncDep.then(()=>{Mi(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Ii(e,!1),t?(t.el=c.el,ae(e,t,o)):t=c,n&&ne(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ma(d,s,t,c),Ii(e,!0);let f=si(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),de(p),e,i,a),t.el=f.el,u===null&&pi(e,f.el),r&&Mi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Mi(()=>ma(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=ur(t);if(Ii(e,!1),l&&ne(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ma(o,d,t),Ii(e,!0),s&&me){let t=()=>{e.subTree=si(e),me(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=si(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Mi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Mi(()=>ma(o,d,e),i)}(t.shapeFlag&256||d&&ur(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Mi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new _e(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>sn(u),Ii(e,!0),l()},ae=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,vi(e,t.props,r,n),ji(e,t.children,n),Me(),un(e),Ne()},N=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ce(l,d,n,r,i,a,o,s,c);return}if(f&256){se(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ue(l,i,a),d!==l&&p(n,d)):u&16?m&16?ce(l,d,n,r,i,a,o,s,c):ue(l,i,a,!0):(u&8&&p(n,``),m&16&&O(d,n,r,i,a,o,s,c))},se=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?da(t[p]):ua(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ue(e,a,o,!0,!1,f):O(t,r,i,a,o,s,c,l,f)},ce=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?da(t[u]):ua(t[u]);if(na(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?da(t[p]):ua(t[p]);if(na(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?da(t[u]):ua(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)F(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?da(t[u]):ua(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){F(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&na(n,t[_])){i=_;break}i===void 0?F(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?zi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Hi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?P(n,r,p,2):_--)}}},P=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){P(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,R);return}if(c===q){o(a,t,n);for(let e=0;e<u.length;e++)P(u[e],t,n,r);o(e.anchor,t,n);return}if(c===qi){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[Un]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),Mi(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[Un];a._isLeaving&&a[Un](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},F=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Me(),cr(s,null,n,e,!0),Ne()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!ur(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ma(_,t,e),u&6)L(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&yn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,R,r):l&&!l.hasOnce&&(a!==q||d>0&&d&64)?ue(l,t,n,!1,!0):(a===q&&d&384||!i&&u&16)&&ue(c,t,n),r&&I(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Mi(()=>{_&&ma(_,t,e),h&&yn(e,null,t,`unmounted`),v&&(e.el=null)},n)},I=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===q){le(n,r);return}if(t===qi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},le=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},L=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Vi(c),Vi(l),r&&ne(r),i.stop(),a&&(a.flags|=8,F(o,e,t,n)),s&&Mi(s,t),Mi(()=>{e.isUnmounted=!0},t)},ue=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)F(e[o],t,n,r,i)},de=e=>{if(e.shapeFlag&6)return de(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[An];return n?h(n):t},fe=!1,pe=(e,t,n)=>{let r;e==null?t._vnode&&(F(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,fe||=(fe=!0,un(r),dn(),!1)},R={p:v,um:F,m:P,r:I,mt:M,mc:O,pc:N,pbc:A,n:de,o:e},z,me;return i&&([z,me]=i(R)),{render:pe,hydrate:z,createApp:ei(pe,z)}}function Fi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ii({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Li(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ri(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=da(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Ri(t,a)),a.type===Gi&&(a.patchFlag===-1&&(a=i[e]=da(a)),a.el=t.el),a.type===Ki&&!a.el&&(a.el=t.el)}}function zi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Bi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bi(t)}function Vi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Hi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Hi(t.subTree):null}var Ui=e=>e.__isSuspense;function Wi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):ln(e)}var q=Symbol.for(`v-fgt`),Gi=Symbol.for(`v-txt`),Ki=Symbol.for(`v-cmt`),qi=Symbol.for(`v-stc`),Ji=[],Yi=null;function J(e=!1){Ji.push(Yi=e?null:[])}function Xi(){Ji.pop(),Yi=Ji[Ji.length-1]||null}var Zi=1;function Qi(e,t=!1){Zi+=e,e<0&&Yi&&t&&(Yi.hasOnce=!0)}function $i(e){return e.dynamicChildren=Zi>0?Yi||n:null,Xi(),Zi>0&&Yi&&Yi.push(e),e}function Y(e,t,n,r,i,a){return $i(X(e,t,n,r,i,a,!0))}function ea(e,t,n,r,i){return $i(Z(e,t,n,r,i,!0))}function ta(e){return e?e.__v_isVNode===!0:!1}function na(e,t){return e.type===t.type&&e.key===t.key}var ra=({key:e})=>e??null,ia=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||Pt(e)||h(e)?{i:mn,r:e,k:t,f:!!n}:e);function X(e,t=null,n=null,r=0,i=null,a=e===q?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ra(t),ref:t&&ia(t),scopeId:hn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:mn};return s?(fa(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Zi>0&&!o&&Yi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Yi.push(c),c}var Z=aa;function aa(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Or)&&(e=Ki),ta(e)){let r=sa(e,t,!0);return n&&fa(r,n),Zi>0&&!a&&Yi&&(r.shapeFlag&6?Yi[Yi.indexOf(e)]=r:Yi.push(r)),r.patchFlag=-2,r}if(Fa(e)&&(e=e.__vccOpts),t){t=oa(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=I(e)),v(n)&&(At(n)&&!d(n)&&(n=s({},n)),t.style=N(n))}let o=g(e)?1:Ui(e)?128:jn(e)?64:v(e)?4:h(e)?2:0;return X(e,t,n,r,i,o,a,!0)}function oa(e){return e?At(e)||gi(e)?s({},e):e:null}function sa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?pa(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ra(l),ref:t&&t.ref?n&&a?d(a)?a.concat(ia(t)):[a,ia(t)]:ia(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==q?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sa(e.ssContent),ssFallback:e.ssFallback&&sa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&nr(u,c.clone(u)),u}function ca(e=` `,t=0){return Z(Gi,null,e,t)}function la(e,t){let n=Z(qi,null,e);return n.staticCount=t,n}function Q(e=``,t=!1){return t?(J(),ea(Ki,null,e)):Z(Ki,null,e)}function ua(e){return e==null||typeof e==`boolean`?Z(Ki):d(e)?Z(q,null,e.slice()):ta(e)?da(e):Z(Gi,null,String(e))}function da(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sa(e)}function fa(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),fa(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!gi(t)?t._ctx=mn:r===3&&mn&&(mn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(h(t)){if(r&65){fa(e,{default:t});return}t={default:t,_ctx:mn},n=32}else t=String(t),r&64?(n=16,t=[ca(t)]):n=8;e.children=t,e.shapeFlag|=n}function pa(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=I([t.class,r.class]));else if(e===`style`)t.style=N([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ma(e,t,n,r=null){Jt(e,t,7,[n,r])}var ha=Qr(),ga=0;function _a(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ha,o={uid:ga++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new V(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Si(i,a),emitsOptions:ai(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=ri.bind(null,o),e.ce&&e.ce(o),o}var va=null,ya=()=>va||mn,ba,xa;{let e=oe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ba=t(`__VUE_INSTANCE_SETTERS__`,e=>va=e),xa=t(`__VUE_SSR_SETTERS__`,e=>Ta=e)}var Sa=e=>{let t=va;return ba(e),e.scope.on(),()=>{e.scope.off(),ba(t)}},Ca=()=>{va&&va.scope.off(),ba(null)};function wa(e){return e.vnode.shapeFlag&4}var Ta=!1;function Ea(e,t=!1,n=!1){t&&xa(t);let{props:r,children:i}=e.vnode,a=wa(e);_i(e,r,a,t),Ai(e,i,n||t);let o=a?Da(e,t):void 0;return t&&xa(!1),o}function Da(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Fr);let{setup:r}=n;if(r){Me();let n=e.setupContext=r.length>1?Na(e):null,i=Sa(e),a=qt(r,e,0,[e.props,n]),o=y(a);if(Ne(),i(),(o||e.sp)&&!ur(e)&&ar(e),o){if(a.then(Ca,Ca),t)return a.then(n=>{Oa(e,n,t)}).catch(t=>{Yt(t,e,0)});e.asyncDep=a}else Oa(e,a,t)}else ja(e,t)}function Oa(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Rt(t)),ja(e,n)}var ka,Aa;function ja(e,t,n){let i=e.type;if(!e.render){if(!t&&ka&&!i.render){let t=i.template||Hr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ka(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,Aa&&Aa(e)}{let t=Sa(e);Me();try{Rr(e)}finally{Ne(),t()}}}var Ma={get(e,t){return U(e,`get`,``),e[t]}};function Na(e){return{attrs:new Proxy(e.attrs,Ma),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Pa(e){return e.exposed?e.exposeProxy||=new Proxy(Rt(jt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Nr)return Nr[n](e)},has(e,t){return t in e||t in Nr}}):e.proxy}function Fa(e){return h(e)&&`__vccOpts`in e}var $=(e,t)=>Bt(e,t,Ta);function Ia(e,t,n){try{Qi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?ta(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),Z(e,t,n))}finally{Qi(1)}}var La=`3.5.40`,Ra=void 0,za=typeof window<`u`&&window.trustedTypes;if(za)try{Ra=za.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ba=Ra?e=>Ra.createHTML(e):e=>e,Va=`http://www.w3.org/2000/svg`,Ha=`http://www.w3.org/1998/Math/MathML`,Ua=typeof document<`u`?document:null,Wa=Ua&&Ua.createElement(`template`),Ga={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ua.createElementNS(Va,e):t===`mathml`?Ua.createElementNS(Ha,e):n?Ua.createElement(e,{is:n}):Ua.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ua.createTextNode(e),createComment:e=>Ua.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ua.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Wa.innerHTML=Ba(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Wa.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ka=`transition`,qa=`animation`,Ja=Symbol(`_vtc`),Ya={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xa=s({},qn,Ya),Za=(e=>(e.displayName=`Transition`,e.props=Xa,e))((e,{slots:t})=>Ia(Zn,eo(e),t)),Qa=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},$a=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function eo(e){let t={};for(let n in e)n in Ya||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=to(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:T=b}=t,E=(e,t,n,r)=>{e._enterCancelled=r,io(e,t?d:c),io(e,t?u:o),n&&n()},D=(e,t)=>{e._isLeaving=!1,io(e,f),io(e,m),io(e,p),t&&t()},O=e=>(t,n)=>{let i=e?w:y,o=()=>E(t,e,n);Qa(i,[t,o]),ao(()=>{io(t,e?l:a),ro(t,e?d:c),$a(i)||so(t,r,g,o)})};return s(t,{onBeforeEnter(e){Qa(v,[e]),ro(e,a),ro(e,o)},onBeforeAppear(e){Qa(C,[e]),ro(e,l),ro(e,u)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>D(e,t);ro(e,f),e._enterCancelled?(ro(e,p),fo(e)):(fo(e),ro(e,p)),ao(()=>{e._isLeaving&&(io(e,f),ro(e,m),$a(x)||so(e,r,_,n))}),Qa(x,[e,n])},onEnterCancelled(e){E(e,!1,void 0,!0),Qa(b,[e])},onAppearCancelled(e){E(e,!0,void 0,!0),Qa(T,[e])},onLeaveCancelled(e){D(e),Qa(S,[e])}})}function to(e){if(e==null)return null;if(v(e))return[no(e.enter),no(e.leave)];{let t=no(e);return[t,t]}}function no(e){return ie(e)}function ro(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Ja]||(e[Ja]=new Set)).add(t)}function io(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Ja];n&&(n.delete(t),n.size||(e[Ja]=void 0))}function ao(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var oo=0;function so(e,t,n,r){let i=e._endId=++oo,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=co(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function co(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Ka}Delay`),a=r(`${Ka}Duration`),o=lo(i,a),s=r(`${qa}Delay`),c=r(`${qa}Duration`),l=lo(s,c),u=null,d=0,f=0;t===Ka?o>0&&(u=Ka,d=o,f=a.length):t===qa?l>0&&(u=qa,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Ka:qa:null,f=u?u===Ka?a.length:c.length:0);let p=u===Ka&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ka}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function lo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>uo(t)+uo(e[n])))}function uo(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function fo(e){return(e?e.ownerDocument:document).body.offsetHeight}function po(e,t,n){let r=e[Ja];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var mo=Symbol(`_vod`),ho=Symbol(`_vsh`),go=Symbol(``),_o=/(?:^|;)\s*display\s*:/;function vo(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??bo(r,t,``)}else for(let e in t)n[e]??bo(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?bo(r,i,``):wo(e,i,!g(t)&&t?t[i]:void 0,o)||bo(r,i,o)}}else if(i){if(t!==n){let e=r[go];e&&(n+=`;`+e),r.cssText=n,a=_o.test(n)}}else t&&e.removeAttribute(`style`);mo in e&&(e[mo]=a?r.display:``,e[ho]&&(r.display=`none`))}var yo=/\s*!important$/;function bo(e,t,n){if(d(n))n.forEach(n=>bo(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Co(e,t);yo.test(n)?e.setProperty(A(r),n.replace(yo,``),`important`):e[r]=n}}var xo=[`Webkit`,`Moz`,`ms`],So={};function Co(e,t){let n=So[t];if(n)return n;let r=O(t);if(r!==`filter`&&r in e)return So[t]=r;r=j(r);for(let n=0;n<xo.length;n++){let i=xo[n]+r;if(i in e)return So[t]=i}return t}function wo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var To=`http://www.w3.org/1999/xlink`;function Eo(e,t,n,r,i,a=L(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(To,t.slice(6,t.length)):e.setAttributeNS(To,t,n):n==null||a&&!ue(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Do(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ba(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ue(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Oo(e,t,n,r){e.addEventListener(t,n,r)}function ko(e,t,n,r){e.removeEventListener(t,n,r)}var Ao=Symbol(`_vei`);function jo(e,t,n,r,i=null){let a=e[Ao]||(e[Ao]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Po(t);r?Oo(e,n,a[t]=Ro(r,i),s):o&&(ko(e,n,o,s),a[t]=void 0)}}var Mo=/(Once|Passive|Capture)$/,No=/^on:?(?:Once|Passive|Capture)$/;function Po(e){let t,n;for(;(n=e.match(Mo))&&!No.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):A(e.slice(2)),t]}var Fo=0,Io=Promise.resolve(),Lo=()=>Fo||=(Io.then(()=>Fo=0),Date.now());function Ro(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&Jt(e,t,5,a)}}else Jt(r,t,5,[e])};return n.value=e,n.attached=Lo(),n}var zo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Bo=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?po(e,r,c):t===`style`?vo(e,n,r):a(t)?o(t)||jo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Vo(e,t,r,c))?(Do(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Eo(e,t,r,c,s,t!==`value`)):e._isVueCE&&(Ho(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Do(e,O(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Eo(e,t,r,c))};function Vo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&zo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return zo(t)&&g(n)?!1:t in e}function Ho(e,t){let n=e._def.props;if(!n)return!1;let r=O(t);return Array.isArray(n)?n.some(e=>O(e)===r):Object.keys(n).some(e=>O(e)===r)}var Uo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>ne(t,e):t};function Wo(e){e.target.composing=!0}function Go(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var Ko=Symbol(`_assign`);function qo(e,t,n){return t&&(e=e.trim()),n&&(e=re(e)),e}var Jo={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Ko]=Uo(i);let a=r||i.props&&i.props.type===`number`;Oo(e,t?`change`:`input`,t=>{t.target.composing||e[Ko](qo(e.value,n,a))}),(n||a)&&Oo(e,`change`,()=>{e.value=qo(e.value,n,a)}),t||(Oo(e,`compositionstart`,Wo),Oo(e,`compositionend`,Go),Oo(e,`change`,Go))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[Ko]=Uo(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?re(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},Yo=[`ctrl`,`shift`,`alt`,`meta`],Xo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Yo.some(n=>e[`${n}Key`]&&!t.includes(n))},Zo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Xo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Qo={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},$o=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=A(n.key);if(t.some(e=>e===r||Qo[e]===r))return e(n)}))},es=s({patchProp:Bo},Ga),ts;function ns(){return ts||=Ni(es)}var rs=((...e)=>{let t=ns().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=as(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,is(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function is(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function as(e){return g(e)?document.querySelector(e):e}var os=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ss=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,cs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ls=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.doro-st{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<g id="图层_2_00000165224590666110507320000010037344095910635409_">\r
	<path class="doro-st" d="M138.5,364.5c8.99,6.48,20.31,13.57,34,20c11.66,5.47,22.54,9.29,32,12c6.21,17.34,14.15,29.42,20,37\r
		c5.93,7.68,9.43,10.36,12,12c10.35,6.63,28.23,11,37,2c1.43-1.47,4.8-5.54,5-14c0.67-10.67,1.33-21.33,2-32\r
		c11.34-2.37,26.09-6.7,42-15c23.17-12.08,38.76-27.34,48-38c-3.82,6.52-9.57,18.31-11,34c-0.93,10.22-2.15,23.63,6,36\r
		c7.17,10.89,22.32,21.95,36,18c5.72-1.65,12.24-6.23,15-13c1.91-4.69,1.48-9.11,1-14c-0.8-8.22-3.22-13.69-4-16\r
		c-4.93-14.69,13.51-30.38,26-54c2.23-4.21,14.07-26.6,14-49c-0.09-32.36-25.01-57.51-40-70c2.67-8.67,5.33-17.33,8-26\r
		c-2.33-1.67-4.67-3.33-7-5c1.51-4.07,3.02-9.12,4-15c1.17-6.97,1.27-13.12,1-18c-3.77-0.45-7.78-0.79-12-1\r
		c-6.09-0.3-11.78-0.25-17,0c0.5-9.18-0.22-24.96-10-39c-16.84-24.2-53.82-33.59-91-21c-4.17-3.38-14.3-10.63-29-12\r
		c-8.46-0.79-15.46,0.65-20,2c-6.84-3.76-17.04-8.22-30-10c-26.92-3.71-48,6.55-56,11c-4.59-0.9-11.73-1.72-20,0\r
		c-11.93,2.48-19.41,8.8-30,18c-16.27,14.12-26.07,28.1-30,34c-10.07,15.13-9.27,18.91-17,31c-6.5,10.17-17.54,23.89-37,37\r
		c3.74,0.67,8.49,1.19,14,1c5.55-0.19,10.3-1.06,14-2c-1.18,6.79-2.52,16.41-3,28c-0.76,18.42-1.69,40.97,8,65\r
		c4.03,10,13,27.93,33,45c0.75,5.85,2.48,15.67,7,27c9.43,23.64,30.46,52.36,46,49c4.63-1,8.27-4.73,10-8c1.82-3.44,2.34-7.96-3-25\r
		C144.74,380.9,142.16,373.33,138.5,364.5z"/>\r
	<path class="doro-st" d="M104.5,312.5c1.03,4.63,2.81,10.56,6,17c2.91,5.88,6.18,10.53,9,14c-3.03,0.19-11.46,0.33-20-5\r
		c-7.03-4.38-10.56-10.23-12-13c-0.33,6-0.67,12-1,18"/>\r
	<path class="doro-st" d="M78.5,237.5c-2.48,2.22-16.91,15.53-15,33c0.57,5.22,2.77,12.34,12,22c15.36,16.07,35.65,23.97,59,29\r
		c20.05,4.32,51.88,8.59,92,3"/>\r
	<path class="doro-st" d="M131.5,102.5c-15.44,8.67-25.32,18.48-31,25c0,0-35.21,40.38-24,105c0.41,2.37,0.99,5.08,3,6\r
		c9.26,4.23,36.41-35.23,60-73c-2.19,5.97-5.23,16.67-4,30c0.5,5.44,1.56,15.7,8,26c7.88,12.6,25.37,27.75,39,23\r
		c9.11-3.18,12.85-13.98,17-26c8.1-23.46,5.12-42.97,6-43c0.84-0.03,5.28,17.45,1,39c-4.3,21.62-14.54,33.07-12,35\r
		c2.77,2.11,17.35-9.69,27-25c5.55-8.8,8.42-17.11,10-23c1.42,4.07,5.77,14.8,17,23c9.77,7.13,19.62,8.61,24,9\r
		c-0.16,19.87-5.29,34.58-9,43c-6.97,15.83-16.32,26.29-25,36c-8.36,9.35-16.22,16.3-22,21c5.4,0.62,14.43,0.97,25-2\r
		c10.32-2.9,17.72-7.73,22-11c-0.98,4.83-3.25,12.8-9,21c-7.29,10.4-16.33,15.68-21,18c5.95,0.7,15.95,1.04,27-3\r
		c17.53-6.42,26.89-19.93,33-29c6.99-10.38,11.12-20.76,15-35c6.3-23.11,14.04-51.5,9-89c-2-14.9-6.03-42.53-25-71\r
		c-11.7-17.55-28.31-42.49-56-45c-18.03-1.64-32.77,6.96-40,12c4.56-1.17,11.48-2.2,19,0c8.78,2.56,15.8,8.76,26,25\r
		c7.15,11.39,16.1,25.91,23,50c3.89,13.58,8.16,33.8,8,59"/>\r
	<path class="doro-st" d="M302.5,312.5c6.55-3.29,16.07-9.11,25-19c13.47-14.92,18.2-30.91,20-39c3,0.33,6,0.67,9,1\r
		c0.04,4.52,0.4,11.16,2,19c3.31,16.21,11.76,36.77,18,36c2.84-0.35,2.77-4.8,8-17c2.61-6.09,8.31-19.37,18-32\r
		c7.39-9.64,12.32-12.65,12-19c-0.27-5.23-3.93-9.34-7-12c2.33-4.33,4.67-8.67,7-13"/>\r
	<g>\r
		<path class="doro-st" d="M355.5,207.5c-2.33,3.67-4.67,7.33-7,11c-0.67,11.67-1.33,23.33-2,35c2.5,0.77,7.2,1.86,13,1\r
			c5.08-0.76,8.85-2.68,11-4c-4-13.67-8-27.33-12-41c0.36,0.16,2.58,1.1,5,0c1.96-0.89,2.79-2.54,3-3c0.39,3.84,1.38,9.17,4,15\r
			c4.18,9.29,10.36,15.08,14,18c2.81-1.66,6.44-4.21,10-8c2.68-2.85,4.61-5.65,6-8c-3.33-4.3-9.74-11.3-20-16\r
			c-4.84-2.22-9.34-3.38-13-4c0.02-0.48,0.13-4.5-3-7c-2.75-2.2-7.36-2.69-10,0C351.83,199.21,351.95,204.38,355.5,207.5z"/>\r
		<path class="doro-st" d="M386.5,199.5c-1.9-0.38-5.13-0.78-9,0c-4.32,0.87-7.39,2.81-9,4c-2.87-3.2-3.12-5.64-3-7\r
			c0.69-8.05,17.21-15.81,25-10c3.37,2.52,5.16,7.61,4,12c-1.59,6.01-8.3,9.14-13,9c-1.52-0.05-3.68-0.7-8-2\r
			c-2.52-0.76-4.59-1.48-6-2c-1.19,4.76-4.93,7.5-8,7c-2.2-0.36-3.56-2.31-4-3c-0.94,1.32-2.36,3.39-4,6c-1.95,3.11-2.5,4.29-3,5\r
			c-4.13,5.89-23.31,6.43-27-2c-2.45-5.6,2.36-14.18,9-18c6.58-3.79,15.25-3.05,22,2c0.67,2.67,1.33,5.33,2,8\r
			c-1.29-0.4-4.82-1.31-9,0c-4.79,1.5-7.29,4.94-8,6"/>\r
	</g>\r
	<g>\r
		<path class="doro-st" d="M390.5,155.5c0.43,3.12,0.88,9.63-2,17c-2.33,5.95-5.83,9.9-8,12c0.99-6.31,2.08-15.64,2-27\r
			c-0.02-3.32-0.08-11.57-1-17c-4-23.6-33.65-48.89-51-42c-9.25,3.67-12.61,15.55-15,24c-1.46,5.16-7.37,26.07,5,41\r
			c6.38,7.7,14.73,10.34,20,12c6.84,2.16,17.64,5.57,28,0c9.46-5.09,12.96-14.67,14-18"/>\r
		<path class="doro-st" d="M318.5,159.5c1.75-6.28,6.27-19.19,18-31c10.13-10.21,20.98-14.9,27-17"/>\r
		<path class="doro-st" d="M341.5,153.5c1.59,2.61,4.41,6.54,9,10c6.92,5.21,19.55,10.59,25,6c6-5.06,2.07-21.17-6-31\r
			c-8.09-9.87-23.68-17.48-30-12C334.68,130.67,335.77,141.99,341.5,153.5c2.84-2.51,7.17-5.92,13-9c7.67-4.05,15.01-5.98,15-6\r
			c0-0.01-1.62,0.52-9,3c0,9.33,0,18.67,0,28"/>\r
	</g>\r
	<path class="doro-st" d="M383.5,181.5c3.61-0.24,8.46-0.18,14,1c7.63,1.62,13.39,4.69,17,7"/>\r
	<path class="doro-st" d="M408.5,231.5c-1.69-3.18-3.67-6.54-6-10c-4.32-6.43-8.84-11.73-13-16"/>\r
	<path class="doro-st" d="M113.5,204.5c6.55,1.57,16.57,4.82,27,12c8.44,5.81,14.26,12.19,18,17"/>\r
	<path class="doro-st" d="M204.5,229.5c5.09-2.04,15.61-5.46,29-4c15.17,1.66,25.61,8.66,30,12"/>\r
	<path class="doro-st" d="M102.5,235.5c1.53-14.89,16.71-26.22,32-23c15.2,3.2,24.72,19.57,20,34c-4.25,12.99-18.74,20.42-32,17\r
		C110.05,260.28,101.2,248.14,102.5,235.5z"/>\r
	<path class="doro-st" d="M206.5,263.5c-0.53-15.37,12.89-28.21,28-28c13.82,0.19,26.03,11.25,27,25c1.12,15.91-13.2,29.79-29,29\r
		C219.01,288.82,206.99,277.58,206.5,263.5z"/>\r
	<path class="doro-st" d="M146.5,275.5c-1.37,7.08,1.24,13.6,6,16c3.09,1.56,7.02,1.33,10,0c5.63-2.51,6.51-8.35,9-8\r
		c2.71,0.38,1.99,7.36,6,10c3.71,2.43,9.74,0.03,15-3"/>\r
</g>\r
</svg>\r
`,us=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ds=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,fs=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.qs-ui-st{fill:none;stroke:#000000;stroke-width:18;stroke-linecap:round;stroke-linejoin:round;}\r
</style>\r
<path class="qs-ui-st" d="M143.4,134.5C167,78.2,231.8,51.7,288,75.3c39.1,16.4,65.3,53.7,67.6,96c0,73.7-110.5,110.5-110.5,110.5\r
	c0.6,22.8,1.2,45.7,1.8,68.5"/>\r
<circle cx="250.4" cy="430.9" r="15.8"/>\r
</svg>\r
`,ps=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ms=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,hs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,gs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,_s=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,vs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ys=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,bs=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.st0{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<image style="display:none;overflow:visible;" width="431" height="384" xlink:href="data:image/jpeg;base64,/9j/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABh\r
Y3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAA\r
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAAB\r
hAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFla\r
AAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRs\r
dW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAA\r
CAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQg\r
Q29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElF\r
QzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\r
AAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAA\r
OPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAA\r
FklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAA\r
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5J\r
RUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5J\r
RUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAA\r
AAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYx\r
OTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2\r
Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAE\r
EwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAA\r
AAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3\r
ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEA\r
xgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFu\r
AXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQC\r
XQJnAnECegKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOK\r
A5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4F\r
DQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbR\r
BuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI\r
+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtp\r
C4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4O\r
SQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFt\r
EYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAV\r
EhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6\r
GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcd\r
cB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yIn\r
IlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kn\r
eierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0M\r
LUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0z\r
RjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8\r
Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA\r
50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhL\r
SJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQ\r
cVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjL\r
WRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh\r
9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tP\r
a6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1\r
hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/l\r
gEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqL\r
MIuWi/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaf\r
lwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopaj\r
BqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+L\r
sACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9\r
Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3\r
yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZ\r
bNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy\r
6LzpRunQ6lvq5etw6/vshu0R7ZzuKO6070DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4\r
Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t////4V+qaHR0cDovL25zLmFkb2JlLmNvbS94YXAv\r
MS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/\r
Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAg\r
Q29yZSA3LjItYzAwMCA3OS4xYjY1YTc5LCAyMDIyLzA2LzEzLTE3OjQ2OjE0ICAgICAgICAiPgog\r
ICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5\r
bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAg\r
ICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAg\r
IHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1s\r
bnM6eG1wR0ltZz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL2cvaW1nLyIKICAgICAgICAg\r
ICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAg\r
ICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy\r
Y2VSZWYjIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAv\r
MS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczppbGx1c3RyYXRvcj0i\r
aHR0cDovL25zLmFkb2JlLmNvbS9pbGx1c3RyYXRvci8xLjAvIgogICAgICAgICAgICB4bWxuczpw\r
ZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iCiAgICAgICAgICAgIHhtbG5zOnBkZng9\r
Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmeC8xLjMvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFn\r
ZS9qcGVnPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxkYzp0aXRsZT4KICAgICAgICAgICAgPHJkZjpB\r
bHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+V2ViPC9yZGY6\r
bGk+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC9kYzp0aXRsZT4KICAgICAgICAg\r
PHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBJbGx1c3RyYXRvciAyNy4wIChXaW5kb3dzKTwveG1wOkNy\r
ZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyNi0wOC0xN1QyMjoxODoxNCsw\r
ODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDI2LTA4LTE3\r
VDE0OjE4OjE0WjwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIw\r
MjYtMDgtMTdUMjI6MTg6MTQrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6\r
VGh1bWJuYWlscz4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkg\r
cmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8eG1wR0ltZzp3aWR0\r
aD4yNTY8L3htcEdJbWc6d2lkdGg+CiAgICAgICAgICAgICAgICAgIDx4bXBHSW1nOmhlaWdodD4y\r
Mjg8L3htcEdJbWc6aGVpZ2h0PgogICAgICAgICAgICAgICAgICA8eG1wR0ltZzpmb3JtYXQ+SlBF\r
RzwveG1wR0ltZzpmb3JtYXQ+CiAgICAgICAgICAgICAgICAgIDx4bXBHSW1nOmltYWdlPi85ai80\r
QUFRU2taSlJnQUJBZ0VBUGdBK0FBRC83UUFzVUdodmRHOXphRzl3SURNdU1BQTRRa2xOQSswQUFB\r
QUFBQkFBUGdBQUFBRUEmI3hBO0FRQStBQUFBQVFBQi8rSU1XRWxEUTE5UVVrOUdTVXhGQUFFQkFB\r
QU1TRXhwYm04Q0VBQUFiVzUwY2xKSFFpQllXVm9nQjg0QUFnQUomI3hBO0FBWUFNUUFBWVdOemNF\r
MVRSbFFBQUFBQVNVVkRJSE5TUjBJQUFBQUFBQUFBQUFBQUFBQUFBUGJXQUFFQUFBQUEweTFJVUNB\r
Z0FBQUEmI3hBO0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB\r
QUFBQUFBQUFBQUFBUlkzQnlkQUFBQVZBQUFBQXomI3hBO1pHVnpZd0FBQVlRQUFBQnNkM1J3ZEFB\r
QUFmQUFBQUFVWW10d2RBQUFBZ1FBQUFBVWNsaFpXZ0FBQWhnQUFBQVVaMWhaV2dBQUFpd0EmI3hB\r
O0FBQVVZbGhaV2dBQUFrQUFBQUFVWkcxdVpBQUFBbFFBQUFCd1pHMWtaQUFBQXNRQUFBQ0lkblZs\r
WkFBQUEwd0FBQUNHZG1sbGR3QUEmI3hBO0E5UUFBQUFrYkhWdGFRQUFBL2dBQUFBVWJXVmhjd0FB\r
QkF3QUFBQWtkR1ZqYUFBQUJEQUFBQUFNY2xSU1F3QUFCRHdBQUFnTVoxUlMmI3hBO1F3QUFCRHdB\r
QUFnTVlsUlNRd0FBQkR3QUFBZ01kR1Y0ZEFBQUFBQkRiM0I1Y21sbmFIUWdLR01wSURFNU9UZ2dT\r
R1YzYkdWMGRDMVEmI3hBO1lXTnJZWEprSUVOdmJYQmhibmtBQUdSbGMyTUFBQUFBQUFBQUVuTlNS\r
MElnU1VWRE5qRTVOall0TWk0eEFBQUFBQUFBQUFBQUFBQVMmI3hBO2MxSkhRaUJKUlVNMk1UazJO\r
aTB5TGpFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB\r
QUEmI3hBO0FBQUFBQUFBQUFBQUFGaFpXaUFBQUFBQUFBRHpVUUFCQUFBQUFSYk1XRmxhSUFBQUFB\r
QUFBQUFBQUFBQUFBQUFBQUJZV1ZvZ0FBQUEmI3hBO0FBQUFiNklBQURqMUFBQURrRmhaV2lBQUFB\r
QUFBQUJpbVFBQXQ0VUFBQmphV0ZsYUlBQUFBQUFBQUNTZ0FBQVBoQUFBdHM5a1pYTmomI3hBO0FB\r
QUFBQUFBQUJaSlJVTWdhSFIwY0RvdkwzZDNkeTVwWldNdVkyZ0FBQUFBQUFBQUFBQUFBQlpKUlVN\r
Z2FIUjBjRG92TDNkM2R5NXAmI3hBO1pXTXVZMmdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB\r
QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBWkdWell3QUEmI3hBO0FBQUFBQUF1U1VW\r
RElEWXhPVFkyTFRJdU1TQkVaV1poZFd4MElGSkhRaUJqYjJ4dmRYSWdjM0JoWTJVZ0xTQnpVa2RD\r
QUFBQUFBQUEmI3hBO0FBQUFBQUF1U1VWRElEWXhPVFkyTFRJdU1TQkVaV1poZFd4MElGSkhRaUJq\r
YjJ4dmRYSWdjM0JoWTJVZ0xTQnpVa2RDQUFBQUFBQUEmI3hBO0FBQUFBQUFBQUFBQUFBQUFBQUFB\r
QUdSbGMyTUFBQUFBQUFBQUxGSmxabVZ5Wlc1alpTQldhV1YzYVc1bklFTnZibVJwZEdsdmJpQnAm\r
I3hBO2JpQkpSVU0yTVRrMk5pMHlMakVBQUFBQUFBQUFBQUFBQUN4U1pXWmxjbVZ1WTJVZ1ZtbGxk\r
Mmx1WnlCRGIyNWthWFJwYjI0Z2FXNGcmI3hBO1NVVkROakU1TmpZdE1pNHhBQUFBQUFBQUFBQUFB\r
QUFBQUFBQUFBQUFBQUFBQUFBQUFBQjJhV1YzQUFBQUFBQVRwUDRBRkY4dUFCRFAmI3hBO0ZBQUQ3\r
Y3dBQkJNTEFBTmNuZ0FBQUFGWVdWb2dBQUFBQUFCTUNWWUFVQUFBQUZjZjUyMWxZWE1BQUFBQUFB\r
QUFBUUFBQUFBQUFBQUEmI3hBO0FBQUFBQUFBQUFBQUFBS1BBQUFBQW5OcFp5QUFBQUFBUTFKVUlH\r
TjFjbllBQUFBQUFBQUVBQUFBQUFVQUNnQVBBQlFBR1FBZUFDTUEmI3hBO0tBQXRBRElBTndBN0FF\r
QUFSUUJLQUU4QVZBQlpBRjRBWXdCb0FHMEFjZ0IzQUh3QWdRQ0dBSXNBa0FDVkFKb0Fud0NrQUtr\r
QXJnQ3kmI3hBO0FMY0F2QURCQU1ZQXl3RFFBTlVBMndEZ0FPVUE2d0R3QVBZQSt3RUJBUWNCRFFF\r
VEFSa0JId0VsQVNzQk1nRTRBVDRCUlFGTUFWSUImI3hBO1dRRmdBV2NCYmdGMUFYd0Jnd0dMQVpJ\r
Qm1nR2hBYWtCc1FHNUFjRUJ5UUhSQWRrQjRRSHBBZklCK2dJREFnd0NGQUlkQWlZQ0x3STQmI3hB\r
O0FrRUNTd0pVQWwwQ1p3SnhBbm9DaEFLT0FwZ0NvZ0tzQXJZQ3dRTExBdFVDNEFMckF2VURBQU1M\r
QXhZRElRTXRBemdEUXdOUEExb0QmI3hBO1pnTnlBMzREaWdPV0E2SURyZ082QThjRDB3UGdBK3dE\r
K1FRR0JCTUVJQVF0QkRzRVNBUlZCR01FY1FSK0JJd0VtZ1NvQkxZRXhBVFQmI3hBO0JPRUU4QVQr\r
QlEwRkhBVXJCVG9GU1FWWUJXY0Zkd1dHQlpZRnBnVzFCY1VGMVFYbEJmWUdCZ1lXQmljR053WklC\r
bGtHYWdaN0Jvd0cmI3hBO25RYXZCc0FHMFFiakJ2VUhCd2NaQnlzSFBRZFBCMkVIZEFlR0I1a0hy\r
QWUvQjlJSDVRZjRDQXNJSHdneUNFWUlXZ2h1Q0lJSWxnaXEmI3hBO0NMNEkwZ2puQ1BzSkVBa2xD\r
VG9KVHdsa0NYa0pqd21rQ2JvSnp3bmxDZnNLRVFvbkNqMEtWQXBxQ29FS21BcXVDc1VLM0FyekN3\r
c0wmI3hBO0lnczVDMUVMYVF1QUM1Z0xzQXZJQytFTCtRd1NEQ29NUXd4Y0RIVU1qZ3luRE1BTTJR\r
enpEUTBOSmcxQURWb05kQTJPRGFrTnd3M2UmI3hBO0RmZ09FdzR1RGtrT1pBNS9EcHNPdGc3U0R1\r
NFBDUThsRDBFUFhnOTZENVlQc3cvUEQrd1FDUkFtRUVNUVlSQitFSnNRdVJEWEVQVVImI3hBO0V4\r
RXhFVThSYlJHTUVhb1J5UkhvRWdjU0poSkZFbVFTaEJLakVzTVM0eE1ERXlNVFF4TmpFNE1UcEJQ\r
RkUrVVVCaFFuRkVrVWFoU0wmI3hBO0ZLMFV6aFR3RlJJVk5CVldGWGdWbXhXOUZlQVdBeFltRmtr\r
V2JCYVBGcklXMWhiNkZ4MFhRUmRsRjRrWHJoZlNGL2NZR3hoQUdHVVkmI3hBO2loaXZHTlVZK2hr\r
Z0dVVVpheG1SR2JjWjNSb0VHaW9hVVJwM0dwNGF4UnJzR3hRYk94dGpHNG9ic2h2YUhBSWNLaHhT\r
SEhzY294ek0mI3hBO0hQVWRIaDFISFhBZG1SM0RIZXdlRmg1QUhtb2VsQjYrSHVrZkV4OCtIMmtm\r
bEIrL0grb2dGU0JCSUd3Z21DREVJUEFoSENGSUlYVWgmI3hBO29TSE9JZnNpSnlKVklvSWlyeUxk\r
SXdvak9DTm1JNVFqd2lQd0pCOGtUU1I4SktzazJpVUpKVGdsYUNXWEpjY2w5eVluSmxjbWh5YTMm\r
I3hBO0p1Z25HQ2RKSjNvbnF5ZmNLQTBvUHloeEtLSW8xQ2tHS1RncGF5bWRLZEFxQWlvMUttZ3Ft\r
eXJQS3dJck5pdHBLNTByMFN3RkxEa3MmI3hBO2JpeWlMTmN0REMxQkxYWXRxeTNoTGhZdVRDNkNM\r
cmN1N2k4a0wxb3ZrUy9ITC80d05UQnNNS1F3MnpFU01Vb3hnakc2TWZJeUtqSmomI3hBO01wc3kx\r
RE1OTTBZemZ6TzRNL0UwS3pSbE5KNDAyRFVUTlUwMWh6WENOZjAyTnpaeU5xNDI2VGNrTjJBM25E\r
ZlhPQlE0VURpTU9NZzUmI3hBO0JUbENPWDg1dkRuNU9qWTZkRHF5T3U4N0xUdHJPNm83NkR3blBH\r
VThwRHpqUFNJOVlUMmhQZUErSUQ1Z1BxQSs0RDhoUDJFL29qL2kmI3hBO1FDTkFaRUNtUU9kQktV\r
RnFRYXhCN2tJd1FuSkN0VUwzUXpwRGZVUEFSQU5FUjBTS1JNNUZFa1ZWUlpwRjNrWWlSbWRHcTBi\r
d1J6VkgmI3hBO2UwZkFTQVZJUzBpUlNOZEpIVWxqU2FsSjhFbzNTbjFLeEVzTVMxTkxta3ZpVENw\r
TWNreTZUUUpOU2syVFRkeE9KVTV1VHJkUEFFOUomI3hBO1Q1TlAzVkFuVUhGUXUxRUdVVkJSbTFI\r
bVVqRlNmRkxIVXhOVFgxT3FVL1pVUWxTUFZOdFZLRlYxVmNKV0QxWmNWcWxXOTFkRVY1SlgmI3hB\r
OzRGZ3ZXSDFZeTFrYVdXbFp1Rm9IV2xaYXBscjFXMFZibFZ2bFhEVmNobHpXWFNkZGVGM0pYaHBl\r
YkY2OVh3OWZZVit6WUFWZ1YyQ3EmI3hBO1lQeGhUMkdpWWZWaVNXS2NZdkJqUTJPWFkrdGtRR1NV\r
Wk9sbFBXV1NaZWRtUFdhU1p1aG5QV2VUWitsb1AyaVdhT3hwUTJtYWFmRnEmI3hBO1NHcWZhdmRy\r
VDJ1bmEvOXNWMnl2YlFodFlHMjViaEp1YTI3RWJ4NXZlRy9SY0N0d2huRGdjVHB4bFhId2NrdHlw\r
bk1CYzExenVIUVUmI3hBO2RIQjB6SFVvZFlWMTRYWStkcHQyK0hkV2Q3TjRFWGh1ZU14NUtubUpl\r
ZWQ2Um5xbGV3UjdZM3ZDZkNGOGdYemhmVUY5b1g0QmZtSismI3hBO3duOGpmNFIvNVlCSGdLaUJD\r
b0ZyZ2MyQ01JS1NndlNEVjRPNmhCMkVnSVRqaFVlRnE0WU9obktHMTRjN2g1K0lCSWhwaU02Sk00\r
bVomI3hBO2lmNktaSXJLaXpDTGxvdjhqR09NeW8weGpaaU4vNDVtanM2UE5vK2VrQWFRYnBEV2tU\r
K1JxSklSa25xUzQ1Tk5rN2FVSUpTS2xQU1YmI3hBO1g1WEpsalNXbjVjS2wzV1g0SmhNbUxpWkpK\r
bVFtZnlhYUpyVm0wS2JyNXdjbkltYzk1MWtuZEtlUUo2dW54MmZpNS82b0dtZzJLRkgmI3hBO29i\r
YWlKcUtXb3dhamRxUG1wRmFreDZVNHBhbW1HcWFMcHYybmJxZmdxRktveEtrM3FhbXFIS3FQcXdL\r
cmRhdnByRnlzMEsxRXJiaXUmI3hBO0xhNmhyeGF2aTdBQXNIV3c2ckZnc2RheVM3TENzeml6cnJR\r
bHRKeTFFN1dLdGdHMmViYnd0MmkzNExoWnVORzVTcm5DdWp1NnRic3UmI3hBO3U2ZThJYnlidlJX\r
OWo3NEt2b1MrLzc5NnYvWEFjTURzd1dmQjQ4SmZ3dHZEV01QVXhGSEV6c1ZMeGNqR1JzYkR4MEhI\r
djhnOXlMekomI3hBO09zbTV5ampLdDhzMnk3Yk1OY3kxelRYTnRjNDJ6cmJQTjgrNDBEblF1dEU4\r
MGI3U1A5TEIwMFRUeHRSSjFNdlZUdFhSMWxYVzJOZGMmI3hBOzErRFlaTmpvMld6WjhkcDIydnZi\r
Z053RjNJcmRFTjJXM2h6ZW90OHAzNi9nTnVDOTRVVGh6T0pUNHR2alkrUHI1SFBrL09XRTVnM20m\r
I3hBO2x1Y2Y1Nm5vTXVpODZVYnAwT3BiNnVYcmNPdjc3SWJ0RWUyYzdpanV0TzlBNzh6d1dQRGw4\r
WEx4Ly9LTTh4bnpwL1EwOU1MMVVQWGUmI3hBOzltMzIrL2VLK0JuNHFQazQrY2Y2Vi9ybiszZjhC\r
L3lZL1NuOXV2NUwvdHovYmYvLy8rNEFEa0ZrYjJKbEFHVEFBQUFBQWYvYkFJUUEmI3hBO0JnUUVC\r
QVVFQmdVRkJna0dCUVlKQ3dnR0JnZ0xEQW9LQ3dvS0RCQU1EQXdNREF3UURBNFBFQThPREJNVEZC\r
UVRFeHdiR3hzY0h4OGYmI3hBO0h4OGZIeDhmSHdFSEJ3Y05EQTBZRUJBWUdoVVJGUm9mSHg4Zkh4\r
OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGYmI3hBO0h4OGZIeDhmSHg4Zkh4\r
OGZIeDhmLzhBQUVRZ0E1QUVBQXdFUkFBSVJBUU1SQWYvRUFhSUFBQUFIQVFFQkFRRUFBQUFBQUFB\r
QUFBUUYmI3hBO0F3SUdBUUFIQ0FrS0N3RUFBZ0lEQVFFQkFRRUFBQUFBQUFBQUFRQUNBd1FGQmdj\r
SUNRb0xFQUFDQVFNREFnUUNCZ2NEQkFJR0FuTUImI3hBO0FnTVJCQUFGSVJJeFFWRUdFMkVpY1lF\r
VU1wR2hCeFd4UWlQQlV0SGhNeFppOENSeWd2RWxRelJUa3FLeVkzUENOVVFuazZPek5oZFUmI3hB\r
O1pIVEQwdUlJSm9NSkNoZ1poSlJGUnFTMFZ0TlZLQnJ5NC9QRTFPVDBaWFdGbGFXMXhkWGw5V1oy\r
aHBhbXRzYlc1dlkzUjFkbmQ0ZVgmI3hBO3A3ZkgxK2YzT0VoWWFIaUltS2k0eU5qbytDazVTVmxw\r
ZVltWnFibkoyZW41S2pwS1dtcDZpcHFxdXNyYTZ2b1JBQUlDQVFJREJRVUUmI3hBO0JRWUVDQU1E\r
YlFFQUFoRURCQ0VTTVVFRlVSTmhJZ1p4Z1pFeW9iSHdGTUhSNFNOQ0ZWSmljdkV6SkRSRGdoYVNV\r
eVdpWTdMQ0IzUFMmI3hBO05lSkVneGRVa3dnSkNoZ1pKalpGR2lka2RGVTM4cU96d3lncDArUHpo\r
SlNrdE1UVTVQUmxkWVdWcGJYRjFlWDFSbFptZG9hV3ByYkcmI3hBOzF1YjJSMWRuZDRlWHA3Zkgx\r
K2YzT0VoWWFIaUltS2k0eU5qbytEbEpXV2w1aVptcHVjblo2ZmtxT2twYWFucUttcXE2eXRycSt2\r
L2EmI3hBO0FBd0RBUUFDRVFNUkFEOEE5VTRxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlZrMDBNRVRT\r
elNMRkVncThqa0tvSGlTZHNWU3Y4QXhiNWUmI3hBO2IvZWE3K3ZFYnNMQkpMMGdmNVF0bGxwOU9L\r
dC9wNjVmNHJiUnIrNGk2Q1hqQkJYL0FHRnpOQko5NjRxMTlkODBPQzBXbFdxQ215M0YmI3hBOzZ5\r
UFgzRVZ2T3Y4QXcyS3QxODJTMTJzTFNwMjNtdXFEeDZXdGEvUmlyZjFielZYL0FJNk5qVC9tQm0v\r
N0s4VmQ5VzgxZjlYR3gvNlEmI3hBO1p2OEFzcnhWMzFielYvMWNiSDMvQU5CbS93Q3l2Rld2K2Rz\r
aVBTd3ZBRHZ2TmFWRlBsZFVvZm5YMnhWMzE3ekxIOFUra3d5SjNXMHUmI3hBOy9Vays2ZUsyWC9o\r
c1ZhL3hFMFc5N3BXb1dpL3NuMFJkVitpeWE2WWZTQmlxcGIrWnRBbm5XM1cvaWp1Mk5GdEptOUM0\r
ci94aGw0U2YmI3hBOzhMaXFaNHE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdG\r
WFlxZzlSMW5TOU80Qzl1VWlrbHI2TU5lVXNoSGFLSmEmI3hBO3ZJM3NvSnhWQmZwYldidi9BSTV1\r
bHNrWnJ4dXRRZjZzaEhRTXNLaVdldjhBa3lKSDg4VmIvUStzWE5QMGhyRWdYbzhGaEd0ckd3OEMm\r
I3hBO3pHZTRCOTBsWEZWOFhsVHk4a3F6dll4M055aHFsMWQ4cnFjZkthY3lTYmY2Mktwcmlyc1Zk\r
aXJzVmRpcnNWZGlyc1ZkaXJzVlU3aTMmI3hBO3Q3bUY0TGlKSm9KQlNTS1JReU1QQXFhZzRxbFo4\r
cWFSR0s2ZUpkTFlmWStvU05CR3JmemVncCtyc2Y4QVhqT0t0ZlYvTk5tUDNGMUImI3hBO3FzWUZC\r
SGVMOVdtSjhUUEFyeC9RSUI4OFZkL2ltenQyNDZ0Qk5wQi8zN2RxUHE1NmIvV1l6SkF0U2FBTzZz\r
ZjVjVlRoV1ZsREtReXMmI3hBO0txdzNCQjdqRlc4VmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZT\r
L1V0ZHNMQ1pMWmk5eGZ5amxEWVc2K3BPNDNBYmlOa1NvcDZqbFUmI3hBO0I2c01WUWh0Zk1XcEVO\r
ZDNINkpzei94NldwRWx5dzhKTGhnVlNvTzZ4TFVIcEppcU8wM1JOSzAwdTFuYnJITk5UMTdocXlU\r
eTA2R1cmI3hBO1p5MGtoSGk3SEZVYmlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1Zk\r
aXJzVmNRQ0tIY0hxTVZTWnZMRnRic1pkRmxiU1omI3hBO2llUmpnRmJWejFQcVdwL2QvRWZ0TW5C\r
ei9QaXF6OVAzV25VVHpCYmkzaTZmcFNDcjJaOTVhL0hiMTYvSFZCMDlRbkZVN1ZsWlF5a00mI3hB\r
O3JDcXNOd1FlNHhWdkZYWXE3RlhZcTdGWFlxN0ZWc2trY1ViU1NNRWpRRm5kaUFxcUJVa2s5QU1W\r
U0g2L3FtdS9EcExtdzBrL2ExWmwmI3hBO0JtbUgvTHBHNEtoVC92NlFFSDlsV0JEaFZOTk0wZlR0\r
TWlkTE9MZ1pXNXp6TXpTU3l2U25PV1Z5MGtqVTJxeE8yMktvekZYWXE3RlgmI3hBO1lxN0ZYWXE3\r
RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGVWhmUXJ2UzNOeDVkWklveWVVdWpT\r
a3JhUDRtRWdFMnomI3hBO24vSUJRNzFUa2VRVlIrazZ6YTZra2dSWGd1cmNoYnV5bUFXYUZqMERx\r
Q1JRMCtGbEpWaHVwSXhWSDRxN0ZYWXE3RlhZcXRtbWloaWUmI3hBO2FaMWppalV2Skk1Q3FxcUts\r
bUoyQUF4VmoxdGIzUG1TWDYzcUVaajBCV0RhZnA3aWpYUEUxVzV1VlA3QjZ4UW50OFQvQUJVVkZX\r
UjQmI3hBO3E3RlhZcTdGWFlxN0ZYWXFvMzEzRlpXVnhlU2htaXRvM21rVkZMT1ZqVXNRcWpjbWcy\r
R0txcU9raUxKR3dkSEFaSFUxQkIzQkJHS3QmI3hBOzRxN0ZYWXE3RlhZcTdGWFlxZ0lkVWFmV3A3\r
Q0NNTkJaeEtidTVyOW1lU2pSd3FLYm4wNnU5U0tBcDE1YktvL0ZYWXE3RlhZcTdGWFkmI3hBO3E3\r
RlV0MWJSVnZKSXJ5MmxOcHF0c0Q5VnZGRmRqMWltUUZmVmhiOXBDZmRTckFNRlYyajZ0OWVXYUdl\r
TDZycU5vd1M4dENlWEVtdkYmI3hBOzBhZzV4U1VxajBGZWhBWU1vVlRERlhZcTdGWFlxa1dxS05Y\r
MWlQUmp2WVdpcGVhb3ZhUXN4K3JXNThWTFJ0SklLOUZWU0NybkZVUDUmI3hBO2gxVXptOXRvcDVM\r
YlROS2lhNDEyK2dKV1VLcWVyOVZoWWJySThmeFNNQ0dSU09OR2NNaXFjYUhCZTIraWFmQmZPMGw3\r
RGJReDNVak4mI3hBO3pacFZqQWNsL3dCb2xxNzk4VlJ1S3V4VjJLdXhWMkt1eFYyS3BQNVRIcGFP\r
dGgwT21TeTJLcWZ0Q0szY3JiOGozTFFlbTMwNHFuR0smI3hBO3V4VjJLdXhWMkt1eFZaY1R3MjhF\r
bHhNd1NHRldra2M5RlZSVWsvSVlxbHZsZTJsaDBXQ1c0VXBlWHRieThWdXF6WEo5VmtyNFI4dUMm\r
I3hBOy93Q1NveFZOY1ZkaXJzVmRpcnNWZGlyc1ZZbk1tdFE2L3E5MVpUelQzTnUwTngraVhrTFEz\r
RmxKQUkxU0lTSDA0WnZYZ21LbGVJWTcmI3hBO1BzUXlxb3JVcG83aTB0Zk5PajFtbHRVSmxqVldE\r
ejJsZjM5dTBaSEwxWXlDeUtRR1dSZUI0aG54VlA0Wm9wNFk1b1hXU0dWUThjaWsmI3hBO0ZXVmhV\r
TUNPb0l4VmZpcnNWZGlyRnJmVUo0TFc4ZTA0dnJPc2FqZFJXMGJBbEZOczV0Qks0RlAzY1VOc3J2\r
dUtuNGExWVlxdnZkTHQmI3hBO29JTks4dFc5WFc1bU4xZXlTZkZKSkZiT3M4OHNoMkROTmNOR2or\r
UE03WXF5YkZYWXE3RlhZcTdGWFlxN0ZYWXFsR2xnUTYvclZ2VDQmI3hBO3BtdHI0bjJsaCtyRC9x\r
RHhWTjhWZGlyc1ZkaXJzVmRpcVUrYmxadkttdEtvNU0xaGNoUlN0U1lXcHR0WEZVMnhWMkt1eFYy\r
S3V4VjImI3hBO0t1eFYyS3BMckorbzZycDJyZElXZjlIM3ZXbkM2WlJBOUIxSzNBUkI0QjJPS3FO\r
NkJvR292cWFIam85NjQvU2tmN01FeG9xM2EveW8mI3hBOzJ5emR1ajdVY3NxaVBLNDlDMHV0TXBR\r
YVhkUzIwYWpvc0xVbnQwWDJTQ1pFK2pGVTR4VjJLdXhWakZwcWt1bFgyb2FPTEM0dkxsSlgmI3hB\r
O3ZMSXdJQ3NrTjlLOHA1eXNSSEVWbUVpMGRoVlZCRlR0aXFKOHVwZVhkN2U2eGZ3aUM0ZmpZd3dn\r
bGxSTFVzSlNqTXFNUTl3MG54Y1ImI3hBO3lSVU5NVlQ3RlhZcTdGWFlxbGtubW55eEZLOE1tcjJT\r
U3huakpHMXhFR1Vqc1FXcU1WVkxIekJvT29TbUd3MUsxdTVoVW1PQ2VPUmgmI3hBO1EwT3lNVHRp\r
cVB4VjJLcWEyOEszRDNBUUNlUkVqZVR1VWpMRlI5QmtiNzhWVk1WZGlyc1ZkaXJzVmRpcnNWZGly\r
c1ZVN202dHJXQjUmI3hBOzdtVklJSXhXU1dSZ2lLUEVzMUFNVlMwZWIvS1RLR0d0MkJVMG9SZFEw\r
MzZmdFlxbU5yZDJ0M0FseGFUUjNGdSs2VFJNSFJoN01wSU8mI3hBO0txdUt1eFYyS29mVWJHRFVM\r
QzRzWitYbzNNYlJTRkR4WUJ4U3Fuc3c2ZzlqaXFTMmZtRFVXMDFSYzZWUGV6d2g0TlNhQnJaVVdh\r
RWwmI3hBO0pLcFBOQ1FrZ0FrajYxUmhXbUtvcnlza3NtbWZwS2NjYmpWMyt2eW9QMkZsVlZoalAr\r
VkhBa2FNZTVCT0tweGlyc1ZjU0FLbllEcWMmI3hBO1ZTVHkyMGw4YmpYcENPR3BpTVdDRHRaUmNq\r
YnMzK1ZKNnJ5K3dZTCt6aXFkNHE3RlhZcTdGV1BmVlQ1aHZyazNaTGFGWnlOYlJXWUomI3hBO0NY\r
VTBaNHpQUC9QR2pneHJHZmhKVmkzS3E4VlhYVVV1bzNyYUpZT2JIU2RQQ0RVcExiOTA3TTY4MHRJ\r
V1RpWXZnWlhrZGZpQ3NvV2gmI3hBO0pLcXBrK2dhRkpZUjZkSnAxcTloRi9kV2pReHRDdmY0VUk0\r
ajdzVlFaMEc4c0Y1YUhlUEVGLzQ4THRudUxaaC9Lck1XbWgyRkY0TngmI3hBO1grUnNWUk9sNjJs\r
M085bGRRbXkxV0ZlYzFrNURWU3RQVmhjVUVzUkpIeERwV2pCVytIRlV5eFYyS3V4VjJLdXhWMkt1\r
eFYyS3JKcG8mI3hBO1lJWko1NUZpaGlVdkxLNUNxcXFLc3pNZGdBT3B4VkpFdU5hMXY0N1IzMG5T\r
Vyt4Y3RHUHJzdy9tampsVXJBbnZJaGR0L2hUWmlxaXImI3hBO2J5eG9VRXkzQnRGdUx0ZnMzbDBX\r
dWJnZXdtbUx1QjdBMHhWQzNPaXk2U3o2aG9FWlVMVjduUmtJVzN1QjFKaVUwV0dmdUdXaXVkbjcm\r
I3hBO09xclUyazJXcFd5YTNvRXEyT28zS0pjUVgwYWxVbkJBS3JkUmZENnFGZmhJZjRscjhKVnQ4\r
VlRQUjlTL1NPbXczWmlNRWpja25nSjUmI3hBO0dPYUpqSExIeUZPWENSR1dvNjB4VkdZcTdGWFlx\r
N0ZVbDhyT1lMS1RScERXZlJtRm5VOVhnVkExdko3OG9XVU1hVTVoZ09tS3AxaXImI3hBO3NWU2J6\r
UVdtc29kS1Q3V3J6Q3pjOUtRRldrdVRXaG9mUWpkVlA4eEdLcHlBRkFBRkFOZ0IwQXhWMkt1eFYy\r
S3V4VktmS29BMFNMK2MmI3hBO3kzQm1yMTlVM0VobDVWL2E1MXI3NHExNVhYL1FMbHllVWttb2Fn\r
WGM5VHh2SlVXditxaUtvOWdNVlRmRlhZcWtYblMwUnRCdXRSakkmI3hBO2kxTFNZWnJ6VHJ1bThV\r
MGNUSGZjVlJnT0xyV2pMdGlxTjBQVkcxR3g5U2FQMEwyQjJndnJhdkwwNTQ5blVIYXFuWmtOQnlR\r
Zzk4VlQmI3hBO0RGWFlxN0ZYWXE3RlhZcTdGV0tYRjUrbXZOc09sT2xkRnNrbW5jMUlGeGUyc2tI\r
d2tkR2lnOWNWOFpCUTA0YnFzcnhWMkt1eFZKL0wmI3hBO2ltSTZyYUNoaXR0UW05SWp3dUFsMC8z\r
U1RzTVZYYUZ4RjVyYUovZEpmL0FCMEJlMWdlU24vUFIySjk4VlRiRlhZcTdGWFlxazE1L28mI3hB\r
O2ZtZXh1Z2FSNm5FOWhNUEdXRVBjMjUzNkJVRTRQaVdHS3B6aXJzVlNhTC9TL05jOGxheGFYYXJB\r
aEhUMTd0aEpLcmY1U3h3d2tleismI3hBOytLcHppcnNWZGlyc1ZkaXFUYUl4dE5SMUxTWDJBbWEr\r
cy84QUtodTJNa20vZGx1VEpVRG9wVHh4VlpwMHE2YnJkenBVeDRSWDhqM3UmI3hBO2xrMENzWEhL\r
NWdYL0FDMWs1VGI5USszMldvcW5tS3V4VkpQTVVuMXQ3YlFvdmlsdlhTUzhBcFJMS0p3OHhrSDhz\r
M0gwUU92eDE2S2EmI3hBO0tvSTNjbGgrWXYxWGlCWjZ6cDZ2eTZBWGxvN1Uvd0JsTEE1K2lMRldV\r
WXE3RlhZcTdGWFlxN0ZVbjg0YTYyZytWOVMxZU9NU3oya0QmI3hBO05iUW10SG5iNElVSkhRTkl5\r
Z250aXFYM1ZsK2dkUDBqVVFwWWFVcGkxU1FrTTV0N21odXBtTzFTSjFTZVJ1NFZ1NXhWbEFJWUFn\r
MUImI3hBOzNCSFFqRlhZcWc5VzFTMzB1d2t2Snd6aGFMRkNsREpMSzVDeHhSZ2tWZDNJVmZmRlVM\r
cGNRMGJRV20xT1ZWa1FUWHVwVERkRmVSbW4mI3hBO200bWxlQ0ZpcTEzNGdZcXU4dFcxeERwRVQz\r
VVppdTd0NUx1NGliZG8zdVpHbU1USHY2UWYwNi81T0twcGlyc1ZkaXJzVlNueldrbjYmI3hBO0J1\r
YmlKUzgxand2b28xRldkclJ4T0l4L3hrOVBoOU9LcHBISkhMR3NrYkI0M0FaR0c0SUlxQ01WWFlx\r
bEhscjk1YlhsNncvZVh0N2MmI3hBO3lNZXpKRkliZUZoODRJRXhWTjhWZGlyc1ZkaXJzVlN6VzlL\r
bnV2cTk1WXVzT3EyTEZyU1Y2OEdWNkNXQ1hqdjZjb1VWNjBZSzlDVkEmI3hBO3hWRHgzV2srWW9K\r
TlB2SVh0NzYzS1NUMkVwOU81dDNCK0NWR2pQaVBnbGphaDdIcU1WYmlpODJXWTlKWkxYVm92OTF6\r
WExOWnpxdlkmI3hBO1NHS0tlT1UvNVNwSDh1K0t0eVMrYjdoT0VOdlphZnkvNCtKWlpMcDAvd0Nl\r
Q0pBcHIveG0yOSttS29yU3RGdGRPOWFWV2U0dmJvcTEmI3hBOzVmVEVHYVlvS0x5S2hWQ3FQc29v\r
Q2plZzNPS3Njdkp4ZTZ1TmRnUEswMCs4czdHemVtMHNra3oyMTI2a2ZhUWZXd2dQOHlOODhWWmwm\r
I3hBO2lyc1ZkaXJzVmRpcnNWU1RYWVk3L1ZkSzB1UVZoYjZ4ZVhDbjdMeHdSK2p3K2ZxWFNPUDlY\r
RlYvbGE3YWZSNDdXNC8zdjA2bGxxRVomI3hBO3BVVFFxQVdvT2l5cnhrVHhSbE9LcWNlbGF0cFJL\r
YUs4TTJuL0FPNjlMdTJhTllhOW9KMFdVcEdPMGJSdFRvcFZRRnhWVmE4ODBPT00mI3hBO1dtVzBU\r
OUdrbnVtNGcrS2lPRnk5UEE4TVZXUTZYSGFTSFdOY3ZrdXJxMlYyVzVjQzN0YlpDUGpNVVpaZ253\r
L2FkM1pxVkhManRpcUgmI3hBO0hyK1pMbUp6R1kvTGNETE1ucUFySmV6STNLTnVKQUsyNk1Bd3J2\r
STFQOTFqOTRxeUxGWFlxN0ZYWXE3RlhZcWxIbEw0ZEF0cmFsQlkmI3hBO05MWUtkeHlXeW1lMVY5\r
LzVoRnl4Vk5KNWtnZ2ttayt4RXBkcWJtaWlweFZML0swRWx2NVowaUNRQVNSV1Z1a2xPbkpZbEI3\r
bnZpcVomI3hBOzRxN0ZYWXE3RlhZcTdGVUhxV2o2YnFTeC9YSWVid2ttQ2RHYUthSXRzeGltaktT\r
UmtqWThXRlJ0aXFDWFMvTU5zQ3RuckFtalBRYWgmI3hBO2JyT3lnZEZSNEh0RFQzZmszdmlxb1I1\r
cUlvR3NVSjZOU1pxZS9HcTErVlJpcWsrZzZoZkRock9wRzRnb1E5blp4bXpna0IvMzU4YzAmI3hB\r
OzdmNm9sQ2tiTXB4VkdYMmx4VFdFRmxiaGJlRzNtdFpJMFJRRVZMV2VPVUlxaWdBcEh4SGhpcU94\r
VjJLdXhWMkt1eFYyS29ackJHMU4mI3hBO0w4c1M4Y0x3SW5ZQ1IxZHo5UHByOTJLb1hVZEJndTdw\r
YjZDYVd3MUpGRVl2YllxSGFNRWtSeUk2dkhJb0xHZ2RUeHFTdENhNHFwaGYmI3hBO05rSFY3Ry9I\r
WUZacklnZTVCdkFmdUdLdU1mbXliZjE3R3hIZEZqbHV6VDJjdmFnRWY2aCtXS3VoOHRXaG5TNTFH\r
ZWJWYm1KZzBUWFomI3hBO1V4eHNwcXJSd1JySEFyS2VqOE9mK1ZpcWI0cTdGWFlxN0ZYWXE3RlhZ\r
cWxHaEFKZmE1Q29va2QrQ2krSHFXbHZLeCttUjJPS3J2TnQmI3hBO2Y4SzZ6VHI5UnVhZjhpV3hW\r
TlFBQlFiQWRCaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJz\r
VmQmI3hBO2lyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVlNteitIelBxY1kreTFyWnpFZjViUGNSbmYv\r
VmlYRlhlYnY4QWxGTmEvd0NZQzU5djkwdGkmI3hBO3FiWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdG\r
WFlxN0ZVdjh2WGR4ZTZCcGw1Y25sY1hOcEJOTXdBQUx5UnF6R2cyRzV4Vk1NVmRpcnMmI3hBO1Zk\r
aXJzVlMvVEx1NG52ZFdpbE5VdGJ0WVlCUUNpRzFnbEkyNi9ISTJLcGhpcnNWZGlyc1ZkaXJzVmRp\r
cnNWZGlyc1ZkaXFWVzMvS1YmI3hBO2FqL3pBMlAvQUNldThWWGVhSVpKdkxXclF4aXNrbGxjSWcy\r
SHhORXdIWGJGVXdobVNhR09hTTFqa1VPaDZiTUtqRlYrS3V4VjJLdXgmI3hBO1YyS3V4VjJLdXhW\r
Mkt1eFZiSWdramFOcWhYQlVrRWcwSXBzUjB4Vkk3ZlZyWFNiUzAwWlJKcVdxV2x2REZMYTJNWVln\r
ckdBQzVKU0cmI3hBO0FNQlZmVmRRZTJLb2hiM3pQSjhjZWxXOFVaK3dsemVNa3cvMTFoZ25qQi8x\r
Wkd4VmIrbU5YdDI0MzJqeThSdWJpeWtTNWlBN0NqZWgmI3hBO09XK1VSSHZpcmJlWTBZVXM5T3Y3\r
dHgrd0xacmYvaHJ6NnNuL0FBMkt0aTg4MHVDeWFYYUlwM1JKcjExa0E3Y3hIYlNxRC9xc3c5OFYm\r
I3hBO1U1Zk1VMWlDMnNhZE5hUXJzOTdEUzZ0aDdreC92bFdtNWQ0bFVkemlxTDB1M1JaTDI5aW1T\r
ZURVcGt1b0hqUEplSDFhR0lFTU5qWDAmI3hBO3VRSTdIRlVmaXJzVmRpcnNWZGlyc1ZkaXJzVmRp\r
cnNWZGlxVTJueGVhZFNZYnF0blpSaytEaVM2WWl2K3E2bjZjVlRWbFZsS3NBeXMmI3hBO0tNcDNC\r
QjdIRlVxOHBNNThyYVJ6TlpWczRFbHJ1UklrWVZ3ZGh1R0JHS3B0aXJzVmRpcnNWZGlyc1ZkaXJz\r
VmRpcnNWZGlyR1BMdDgmI3hBO21rYVRCcCtvV1YzRGZ3Q2wzSkhiVDNTenpmdDNJbWdTVU42emZI\r
OFJENy9FQWNWVHJUOVowelVXa1MwdUZlYUducjI3QXh6Ujh1bnEmI3hBO1F1RmtTdmJrb3hWRzRx\r
N0ZYRWdDcDJBNm5GVW9IbXZRbnFiYWQ3NUYyYVN4Z252RUJIWXZicEt0ZmF1S3FmbFMxa2hndjV2\r
cXpXVnAmI3hBO2UzajNObFp1T0RSeFBHZ1l0SC91c3l6SzhwWHI4ZnhVYW94Vk84VmRpcnNWZGly\r
c1ZkaXJzVmRpcnNWZGlyc1ZTblJmajFMWFpUdUQmI3hBO2Vva2IrS3BhUUFnSHdXUXY5TmNWVGJG\r
VW44dEgwNHRRc3lLU1dtb1hRZndwY1NmWEVwL3p6dVZ4Vk9NVmRpcnNWZGlyc1ZTdnpOY1QmI3hB\r
O3hhTk1sdkkwVnhkTkZad3pKOXFON3FWWUJLdnZINm5QNk1WVFRGWFlxN0ZYWXE3RlhZcWtubTNU\r
MGwwbWZVSVZLNnJwc1VsenAxeW4mI3hBOzk0c2lMejRWRzdKSnhDdW5SaGlxY3h5SkpHc2taNUk0\r
REt3NkVFVkJ4VmRpcVFhaFpKcmV1UHA5MlMra1dFTWNzOXAvdXU1bm5MZ0omI3hBO1AvTWtTUjh2\r
VFB3c1hITDdJeFZQd0FvQUFvQnNBT2dHS3V4VjJLdXhWMkt1eFZLWTdpNWc4enkyY2pzOXRmVzMx\r
cTFVbXZCN2RsaXUmI3hBO0ZHMnlrU3dsUjQ4amlxYllxN0ZYWXE3RlhZcTdGVW84cWZIb3FYWFZi\r
NmE0dlltN21LNm5lYUd2djZUcU1WVEs3dkxTenQydWJ1ZU8mI3hBOzN0MHB6bWxaVVFjaUZGV1ln\r
Q3BJR0tzV3RmTkdqdytacjFMVjVidURVYmVPNWdhemdtdUk1SjRDWVp5SllrYVBhTTI2MTVVOGNW\r
VGYmI3hBOzlMNnhMOE52b2x3akduR1M2bHQ0b3FIdWZUa25rSC9JdkZYY3ZOczIzQ3dzZjh2bk5l\r
MTIvbDQyVlA4QWdzVmIvUjNtR2JhNDFoWVYmI3hBOzdHeXRVaWI2VGNQZGo4TVZkK2diaDZpNDFp\r
L25qUDdIS0NIcjErSzNpaGYvQUliRlhmNFkwMy9mMS84QTl4Rys3LzhBUGJGVXExankmI3hBO3A1\r
Yyt2NkdyNmZETXJYckJoTW9tcUZzN2xnUDNuUGJrb2I1akZXVjRxN0ZYWXE3RlhZcTdGWEVBaWgz\r
QjZqRldPMlY0dmx5SmROMUsmI3hBO3NlbFEvQnAycEVmdVVoSDkzRGNOdjZUUnI4QWQvaFlVK0xr\r
U3VLb1BRdk5taXJwa3lXTTZhcGZQZVg3UVdOazZUU3Z5dlppcFBFOFUmI3hBO1ExSDd4eUVGZHpp\r
cWVhRnA5emFXMHN0NlViVXI2UTNOODBkVEdKQ3FvcUlTQlZZNDBWQWFEbFRrUlVuRlV5eFYyS3V4\r
VjJLdXhWMksmI3hBO3NkOHk2THBGN3JHZ3ozZGpiM01wdTNoYVNhSkhZeGZVN2wrRldCK0htQTFQ\r
SGZGVVovaGJSRnA2TU1sdFQ3UDFhZWUzb1A1UjZUcFImI3hBO2Y4bnBpcnY4TTJLN3gzTitqaW5G\r
L3I5NDlLZjVNa3JxZnBHS3UvUW1vci9kNjdmQUQ3S3NsbTQyNlZKdCtaLzRLdnZpcnZxM21wRDgm\r
I3hBO09vV2N5RG9zbHBJcnR2M2tXNDRqNkkvb3hWcjYvd0Nab2h5bjBtR1pCMVd6dS9VbEo5bG5p\r
dFUvNGZGVXU4eGViSHM5RXZpMW5lMkYmI3hBOyswUmlzdWNEVEw2OHY3dUVtVzIrc1JMKzhkZXJZ\r
cW0raDNtaVMyTWRycEYxRGNXOWtpUWNZWkZjeGhWNHFyaFQ4Sm92UTRxbU9LcEwmI3hBOzVqSzJr\r
Mm1hdDBGbmNyRGNOMFAxZThwQXdKNmNWbGFLUnZaTVZUckZYWXE3RlhZcTdGVW84eGt3cnB0OVNv\r
czc2RXN2K1RjOHJOaWYmI3hBO1pCYzh6OHNWVGZGWFlxN0ZYWXE3RlhZcTdGWFlxbFhsbi9qblRm\r
OEFNZHFIL1VkTmlxYTRxN0ZYWXE3RlhZcTdGWFlxbEdydHoxblEmI3hBO29FM2tXNG11WFh3aGp0\r
WlltZjZKTGlOZnB4Vk44VmRpcnNWZGlyc1ZTYlY2WGV0YVZwdldPTm4xRzVIWXJiVVdGU0IzTThx\r
U0wveGomI3hBO09LcHppcnNWVUwreXQ3Nnh1TEs0QmEzdW9uaG1VR2hLU0tWWUFqcHNjVlFmbHUr\r
dUx2U294ZUVIVWJWbXRkUW9PTlo0RHdkd3ZVTEomI3hBO1QxRS95V0J4Vk04VlMrKzh3YVBZemZW\r
NTdsVGRrQmhaeEJwcmtxZjJoQkVIbEk5d3VLb2Y5TGE1Y0gvUWRIWkU2aVhVSmx0bFlIK1ImI3hB\r
O1loY3kxOW5STVZiK29lWlp6UzQxV0szak85TEsyQ3lnK0hxWEQzS0VmODhoaXFqZWVVYlhVTE9h\r
MTFPL3Y3eU9lTm9wSzNEVy93QUwmI3hBO2ppZmh0QmJvZHZGVGlxL3lyUElsaCtpYnVWcE5VMHNM\r
RGVOSTdPOGdOVEhjVmRuYmpPbzVENGp4TlVyVlRpcWRZcTdGWFlxN0ZYWXEmI3hBOzdGVUJxK3NR\r
YWJDbFVhNHZKeVVzckdMajYwOGdGZUtCaW9GT3JNeENxTjJJR0twTnBGNXFlZ3hyYmVZRmhXQzht\r
bW5UVUxmbDZFTTEmI3hBOzFNMHB0Wmk1NWJOSVZqbW9xdjBJUnVJWlZsR0t1eFYyS3V4VjJLdXhW\r
YkpKSEZHMGtqQkkwQlozWWdLcWdWSkpQUURGV0s2YjVmc04mI3hBO1oxTzU4eXp3eTIzMWxSRHAv\r
b1N6MmtqV3ltcG1sOUY0MkxYREFHamZzTEhVQnFqRlUwT2thMUFLMld0U01laXhYOE1WekVCL3p5\r
K3ImI3hBO1RFKzdTbkZYSFVmTVZxUUx2U2x1NCtucmFmTXJOdCswOE54NkhFZXlPNXhWVnNmTXVp\r
M3R5TFNPNDlLOUk1Q3l1VWUydUNvL2FFTTYmI3hBO3h5RmY4b0xURlV6eFYyS3BMNWRKdkpyL0FG\r
dHZzMzhnaXN6VS93QzhkcVdTSnZBaVIya2xVanFyakZVNnhWMkt1eFZobDM1amdzZk0mI3hBOzBn\r
MGVFNml1cE10dGVtTWxMV0cvakFTSnBybWhqVXlSajAzQTVPQ2thOGZpeFZPZjBMcWQ5OFdzYWc0\r
amIvandzR2EyaUFQUU5NcEYmI3hBO3c3RHBVT2l0L0ppcVkyR21hZHAwQmdzTFdLMGhMRnpIQ2l4\r
cVdiY3NRb0ZTZTV4VkU0cTdGWFlxeFR6RGQyMTVxQ0xvWmxuOHlXSE4mI3hBO0k1clplY01YT25P\r
RzhkbWpoOU5pRkxSRi9VNk1ncUFjVlVWMVBVeGNLdm0yOC9RaWh3STRiVThMS1dwK0VIVUdITmlU\r
MFdrREhjY1cmI3hBO0c1VlppQ0dBSU5RZHdSMEl4VjJLdXhWU3U3eTBzN2Q3bTduanRyZU1Wa21s\r
WlVSUjRsbUlBeFZLRHJsL3FQd2FEYmM0MjJPcVhhdkgmI3hBO2JLUDVvNHp3bHVQRmVIRkdIKzdN\r
VlJXbGFIQll5U1hVa3IzbXBUZ0xjWDgvRXlNb05RaWhRcXh4anNpQUR2dWFrcXBoTEZGTEU4VXEm\r
I3hBO0xKRklwV1NOZ0dWbFlVSUlPeEJHS3BJdWxhcHBCcm9ycmNhY3YvU291R0k5TUR0YlQwWW9Q\r
Q053VjZCVEd1S3E5cjVuMHFTWkxXNlomI3hBO3RPdjNQRmJPOUFoa1p2Q0ppVEhOODRuWWUrS3B0\r
aXJzVmRpckg5YzFqVEpXTnBhWDl3MnEyN0VpMzB2alBPcmRPTTBaRWtTcWEwck4mI3hBO1JmY0hm\r
RlVsWWVhWnZTZnpsYXJObzQ0dDlXMDJOcEFXclVIVUlBMHJrRDRmZ2hNaVZxV0pXbEZXYVdkNWFY\r
dHNsMVp6eDNGdEpVeHomI3hBO1JNSFJxR2hveTFIVVV4Vld4VjJLcUY3WVdOL2J0YlgxdEZkMnpV\r
TFF6b3NpRWpjVlZnUmlxV2ZvQzdzOTlHMUdXM1VkTFM3TFhsc2EmI3hBOzdiQ1JoTWxCOWxVbENq\r
K1hGVW84eCtaNzIyaGowZlVyYzZkYzZsV002bERJSmJhSzJGQmN6K3JSSkl2VFJ3QTBrWVFPeS9F\r
UmlySzcmI3hBO09PMGpzNEk3TUl0b2thTGJMRlQweEdGQVFKVGJqeDZVeFZXeFYyS3FWM2FXOTVi\r
U1cxeWdsdDVSeGxqTmFNdmRXcDFCN2p1TnNWVUwmI3hBOzNTTEc3MHA5TGFQMHJSb3hHaXcwUXhj\r
YWNHaW9QZ2FNZ01oSFFnSEZVTjVmMU81dVlwclBVT0s2dnA3Q0s5VlJ4VjZpc2M4WTMrQ1omI3hB\r
O2ZpRzU0bmtsYXFjVlRYRlhZcWdkVjFxeDAwUkxNV2t1YmdsYld6aFgxSjVtV2xSR2c3TFVjbU5G\r
VWJzUU44VlMvd0RSZXJhdjhXc3kmI3hBO0d6c1dyeDBtMWtJWmxPMytrM0NFTTMrcEh4WHFDWkJp\r
cWRXMXJiV3R2SGIyc1NRVzhRNHhReEtFUlZIWlZXZ0F4VlVJREFnaW9PeEImI3hBOzZFWXFrLzhB\r
aEhRby93RGVTR1RUeDE0V0UwMW5IWCtZeFFQSEd4LzFsT0tydjBKZnJzbXVYNklPaVVzM3Avc250\r
MlkvU2NWY2RDdTMmI3hBOzJuMXEvbGlQV090dEZYL1p3UVJTRDZHeFZkYStXTkR0N2hMb1czcjNj\r
WnJGZFhieVhVNlYva2x1R2xrUWV5bkZVMHhWMkt1eFYyS3EmI3hBO2R4YjI5ekE4RnhFazBFb0t5\r
UlNLSFJsUFVNcHFDTVZTd2VWTkVTZ3Q0NXJPTWRJTE81dWJXRUU5eEZCSkhIL3d1S3QvNGRqSTR2\r
ZjMmI3hBOzdSOTArc3V0UVA4QUxUaS8vRFlxMS9oVFEzUCtrUlMzcWY3NnZiaTR1NHQvK0s3aVNW\r
UHd4Vk03YTF0cldCTGUxaVNDM2pGSTRZbEMmI3hBO0lvOEZWYUFZcXFZcWxGNTVlaU54SmZhWE1k\r
TTFLVGVTYU5RMFV6VTIrc3cxVlpmOWFvZW15dU1WVzIzbUI0THFPdzF1RVdONUt3UzImI3hBO25C\r
NVdseXg2TEZLYWNYUCsrbm8zWGp6QTVZcW5PS3V4VlR1cm0zdGJhVzV1WkZodDRFYVNhVnpSVlJS\r
Vm1KOEFNVlNyUUxlNnVKSjkmI3hBO2J2bzJpdWI0QmJXMmtCRDI5b3U4Y2JBL1prZXZxU2U1NDc4\r
QWNWUmxsbzJtMk04czFsRDlYOWZlV0tObVdFc1RVdjZJUHBoMlAybUMmI3hBOzFQZXVLbzNGWFlx\r
N0ZYWXFsT3RhYmROTEZxbW1CUnFsb0Nvalk4VnVZQ2F2YnlIdFhxamZzTnYwTEFxb3ZTdFR0ZFRz\r
bzd5MkxCSHEmI3hBO3JSeUtVa2pkVHhlT1JEdXJvd293UFE0cWk4VlVVczdSTHFTN1dGRnVwVlZK\r
WndvNXNpVktxVzYwRlRRWXFyWXE3RlhZcTdGWFlxN0YmI3hBO1ZHYTlzNGJpQzNtbVNPZTVMQzNp\r
ZGdyU0ZCeVlJRDlvaGQ5dTJLcTJLdXhWMkt1eFYyS3JJWm9aNGttaGtXV0dSUTBjaUVNcktSVUYm\r
I3hBO1NOaURpcS9GWFlxN0ZYWXE3RlZLN3RMVzh0cExXN2hTNHRwbEtTd3lxSFJsUFVNcHFDTVZW\r
RVJVUlVVY1ZVQUtCMEFIVEZXOFZZOGomI3hBO0R6SmVxNDM4djJVbkpEMnZMbUp0bTMvM1JDNjFC\r
LzNZKzQrRmZqVlpEaXJzVmRpcnNWZGlyc1ZkaXFVYWxwMTViM0w2cm82cTE0d0EmI3hBO3ZMSm00\r
UjNTS0tDclVJU1pGMlI2Ymo0VzI0bEZVWHBXcldlcDI1bXR5d2FOdlR1TGVRY0pZWkFBVEhLaDNW\r
Z0NEN2dnaW9JT0tvekYmI3hBO1hZcTdGWFlxN0ZYWXE3RlZDKzAreXY3WnJXOWdTNXQzb1dpa1VN\r
dFFhZzc5d2R3ZTJLcFhIcGV1YWNLYWJmOEExeTJCcXRucVJaM0EmI3hBOy9sUzdXc29IdktzcmUr\r
S3FnMW5WWWp4dXRFdVFWKzNOYlNXODhQOEFzS3lSVHQveUtHS3Qvd0NJNEQ4SzJOKzBvcnlpK3FT\r
clNuK1cmI3hBO3dXTS83RmppcXg5VTh4VEhqYWFLWUQrMUpxRnhER2xQRlJiRzhadmtlUHp4VmFm\r
TDA5OFA5ejkzOWZqSW9iQ0pEQlpIeDV4Y25lV3YmI3hBO2RaWFpQOGtZcW5TcXFxRlVCVlVVVlJz\r
QUIyR0t0NHE3RlhZcTdGWFlxN0ZXbVpWVXN4Q3FvcXpIWUFEdWNWWS82OC9tUnVOdVRGNWMmI3hB\r
O1A5NWNnc3NsNy9rdzlPTnVmOStWL2Vmcy9EOFRLcC9ISEhGR3NjYWhJMEFWRVVBS3FnVUFBSFFE\r
RlYyS3V4VjJLdXhWMkt1eFYyS3UmI3hBO3hWTE5UME5McTRXL3RKVFk2dEd2Q085UWN1U0FraU9l\r
T29FMGRTZmhPNHFTcFVtdUtxRnY1aGUybGpzOWVpV3d1bklTSzZVazJjN00mI3hBO2VLaU9ZZ2NI\r
YmI5M0pScTdMenB5eFZPc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNW\r
ZGlxWDZwcmxocHomI3hBO0pGSVdtdkp2OTVyR0JmVXVKZTFWUWRGQjZ1MUVYOXBnTVZRWDZIdmRZ\r
Y1RhNkZXeUZHaTBSQ0dpcjJOMi93RHU1aC9JUDNZUDg1Q3QmI3hBO2lxZTRxN0ZYWXE3RlhZcTdG\r
WFlxN0ZYWXE3RlhZcXNtaGhuaWVHYU5aWVpGS3lSdUF5c3BGQ0dCMklPS3BSK2dieXcrTFFydjZ0\r
RVAmI3hBOytsZGNocHJXbmhIOFN5UWVBNE53VWY3ck9LdUhtS1cwb3V0V0UxaVJUbGN4VnVyU3A2\r
bjFZMURvbzd0TkhHTVZUU3p2cksrdDF1TEsmI3hBOzRqdXJkL3N6UXVzaUg1TXBJeFZXeFYyS3V4\r
VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFZLTGp6VHBDVFNXMXE3YWpleG5pOXBZcjYmI3hBOzdx\r
eDZMSXkvdTRhOWpLeWozeFZaNmZtYlVmN3gwMFcwUDdFZkc0dkNQZDJCZ2lQWWdMSjdNRGlxTzAz\r
UjlPMDBTZlZJdU1rMURQY08mI3hBO3pTVFNsYThUTExJV2tlbGR1VEduYkZVWmlyc1ZkaXJzVmRp\r
cnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXFXWG5sclE3dTROMUphckgmI3hBO2VOMXZiZG50cmdq\r
dzllQXh5MDl1V0txWDZIMWUzTmJIV1pTbzJTQzlpanVZZ1Btbm9Uc1I0dEtjVmJFdm0yRUJXdDdH\r
OXB1MHlUUzImI3hBO2hQc0lUSGNqNzVjVmIvVFdwTFgxZEN2UnhyeWRIczNYYnVvOWNPUi9zSysy\r
S3UveExZamFTMnYwZnV2MUM3ZWxQOHFPSjBQMEhGV3gmI3hBOzVuMHFsWFc3aVR1OHRsZVJJUG16\r
eEtvK2s0cTcvRk9nL3dETFYvd2tuL05PS3UveFRvUC9BQzFmOEpKL3pUaXJqNXAwUDltZDVHN0om\r
I3hBO0hETkk1K1Nvak1mb0dLdEh6UHBvcis1djl0LytPZGZmOVVjVmQvaUI1RC9vbWxYOXl2OEFO\r
NlMyKzNqUzdlM1A0WXExK2tmTVUyOXQmI3hBO282d2p1TDY2U0p1bllXeTNnL0hGWEcwODBYSDk5\r
cUZ2WnhOOXBMV0F5VEwvQUtzMHp0R2ZwZ3hWci9DdW56Vk9wUzNHcWx2dHJlU0YmI3hBO29XSGF0\r
dEdJN2Iva2xpcWF3VzhGdkNrRnZHc01NWTR4eFJxRlZRT3dVVUF4VmZpcnNWZGlyc1ZkaXJzVmRp\r
cnNWZGlyc1ZkaXJzVmQmI3hBO2lyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJz\r
VmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmYvWjwveG1wR0ltZzppbWFnZT4KICAgICAg\r
ICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC94bXA6\r
VGh1bWJuYWlscz4KICAgICAgICAgPHhtcE1NOlJlbmRpdGlvbkNsYXNzPnByb29mOnBkZjwveG1w\r
TU06UmVuZGl0aW9uQ2xhc3M+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+dXVp\r
ZDo2NUU2MzkwNjg2Q0YxMURCQTZFMkQ4ODdDRUFDQjQwNzwveG1wTU06T3JpZ2luYWxEb2N1bWVu\r
dElEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjYwOTkwZjUzLTY2YzUtNjU0\r
Ny04MWYwLWQ4NTE4ZjU5MWJjOTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOklu\r
c3RhbmNlSUQ+eG1wLmlpZDo2MDk5MGY1My02NmM1LTY1NDctODFmMC1kODUxOGY1OTFiYzk8L3ht\r
cE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBl\r
PSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6ZmRhMTY5\r
NDctNzZiZi1lZTRhLTlkZjAtMGNhYzdlNDY0YzQwPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAg\r
ICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOmZkYTE2OTQ3LTc2YmYtZWU0YS05ZGYwLTBj\r
YWM3ZTQ2NGM0MDwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFs\r
RG9jdW1lbnRJRD51dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3PC9zdFJlZjpv\r
cmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgICAgIDxzdFJlZjpyZW5kaXRpb25DbGFzcz5wcm9v\r
ZjpwZGY8L3N0UmVmOnJlbmRpdGlvbkNsYXNzPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9t\r
PgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAg\r
ICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAg\r
ICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxz\r
dEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZmRhMTY5NDctNzZiZi1lZTRhLTlkZjAtMGNhYzdlNDY0\r
YzQwPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDI2\r
LTA4LTE3VDIyOjE4OjEyKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RF\r
dnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBJbGx1c3RyYXRvciAyNy4wIChXaW5kb3dzKTwvc3RFdnQ6\r
c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6\r
Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkg\r
cmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9u\r
PnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlE\r
PnhtcC5paWQ6NjA5OTBmNTMtNjZjNS02NTQ3LTgxZjAtZDg1MThmNTkxYmM5PC9zdEV2dDppbnN0\r
YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDI2LTA4LTE3VDIyOjE4OjE0\r
KzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2Vu\r
dD5BZG9iZSBJbGx1c3RyYXRvciAyNy4wIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4K\r
ICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAg\r
ICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBN\r
TTpIaXN0b3J5PgogICAgICAgICA8aWxsdXN0cmF0b3I6U3RhcnR1cFByb2ZpbGU+V2ViPC9pbGx1\r
c3RyYXRvcjpTdGFydHVwUHJvZmlsZT4KICAgICAgICAgPGlsbHVzdHJhdG9yOkNyZWF0b3JTdWJU\r
b29sPkFkb2JlIElsbHVzdHJhdG9yPC9pbGx1c3RyYXRvcjpDcmVhdG9yU3ViVG9vbD4KICAgICAg\r
ICAgPHBkZjpQcm9kdWNlcj5BZG9iZSBQREYgbGlicmFyeSAxNS4wMDwvcGRmOlByb2R1Y2VyPgog\r
ICAgICAgICA8cGRmeDpDcmVhdG9yVmVyc2lvbj4yMS4wLjA8L3BkZng6Q3JlYXRvclZlcnNpb24+\r
CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg\r
ICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tl\r
dCBlbmQ9InciPz7/4AAQSkZJRgABAgEASABIAAD/7QAsUGhvdG9zaG9wIDMuMAA4QklNA+0AAAAA\r
ABAASAAAAAEAAQBIAAAAAQAB/9sAhAAKBwcHCAcKCAgKDwoICg8SDQoKDRIUEBASEBAUFA8RERER\r
DxQUFxgaGBcUHx8hIR8fLSwsLC0yMjIyMjIyMjIyAQsKCgsMCw4MDA4SDg4OEhQODg4OFBkRERIR\r
ERkgFxQUFBQXIBweGhoaHhwjIyAgIyMrKykrKzIyMjIyMjIyMjL/3QAEABv/7gAOQWRvYmUAZMAA\r
AAAB/8AAEQgBgAGvAwAiAAERAQIRAf/EAaIAAAEFAQEBAAMAAAAAAAAAAAABBAUGBwIDCAkKCwEA\r
AgMAAAcAAAAAAAAAAAAAAAQBAgMFBgcICQoLEAAABQEDBAYFCg9xAAAAAAAAAQIDBAUGERIHEyEx\r
FCJBUXGBIzJhkZIVJEJScoKhorGzFjM0Q1NiY3OjssHC0dLhCAkKFxgZGiUmJygpKjU2Nzg5OkRF\r
RkdISUpUVVZXWFlaZGVmZ2hpanR1dnd4eXqDhIWGh4iJipOUlZaXmJmapKWmp6ipqrS1tre4ubrD\r
xMXGx8jJytPU1dbX2Nna4uPk5ebn6Onq8PHy8/T19vf4+foRAAIAAQIEBAV7FQAAAAAAAAABAhEh\r
AzFBURIyYXETIoGRsQQFBgcICQoUFRYXGBkaIyQlJicoKSozNDU2Nzg5OkJDREVGR0hJSlJTVFVW\r
V1hZWmJjZGVmZ2hpanJzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqGio6Slpqeoqaqys7S1tre4\r
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\r
WoT7cK1KCXFWom41cZTc0oz0EUlJdylHfr1dqLZeOHW23UKbdQS21aFIURGky5pGLKKaRzoq1VUx\r
1oPSWoANQBUsAAXCq25tk1Z6FseLyatSiwxI5FiNN+1zii3iPUW6fGJhhbciIbkREZQ69MmyGrG0\r
MjdqU4yTKNB8o2enAZ7l5aVbyeEXqy1nYlnKLHpka4zQWJ92643HVcus+Hc5gr2TixT1GYcrFXvd\r
r9Q27yl6VNIUeLN39WM9Kj4tzTeg1DCoVIYNyuUQAACxAoUtYQgpaxIH/9PYQAAAAAAAAAIFAACM\r
r9Bp1fprtOqDeNlzSlRaFoUXKrQrcMhmFKqtVyf1RNAtCo3qG8Z7AnkR3IK/X1nTtk9R3ObsQja7\r
QqbXae5T6kyTrC9JH1JCi1LQrqKiFYoU1IyU2nKjzbcbdbS60oltrIlIWk7yMjK8jIyHQy5L1osm\r
ksos1K6jZV5Z5h9JXm3fpuLqqu9T0Hubo0Wl1SBVoaJlPfS/HXqUncPdSoj0kZbxhWOBw2xtDEmP\r
AoQAqWAAAAAAAAAAAAAAFvBeECgAUKEAABrUoTk2MbbMlyJISeNiQ0elCy1GaT2q076VaDEAVrp9\r
EdKNayKbLRnharEZKlxXNNxZxJXqaVzDFqHK0IcQptxJLbURpUhREaTI9BkZGLwxyTOdFXDWCHNh\r
zmEyYb6JDC+VdaUS0nxpHuKfOye0lT6pdHffokxR3qcgrNCD5htaruYVwbpYyn0w+Qy4VaYToJL6\r
cy6Zb+0wFfwqMXThdJ3crPWLwAUg7XW3iGZTrJrdIupxX0r5yUpcAWUKq3abJVW/mNLMufmxMhEp\r
dwgpXca2qk7WDZGUSj1KlOEwRcJLQntQpvZT6gWFLUCjILqSlG+5xYc4jsASV2kEpcnHENoU44ok\r
ISV6lKO4iIt0zMVeTbZiVJVT7NMHV55aFuoPDEav6k6/q4k6w1byfpmOk/aWqyaysjxZhSjZjkrm\r
NIPtDIWmJDhwmEx4bDcdhPKtNJJCS4k3CrihVKctI3aHjTI09iOZ1GVsqY4eJxSU4Gk7zbSNxJb5\r
3me6HYW8IM25WWSAIFCCCRQAAABAoQAAFAECgAAAAAAAAUu1+UBmludJNHRs+uunm0NNljS2o9BY\r
iTyy+9S4xMMLiciIbSU4/tnbWDZmHuPVN1J7Fi38WNy7SSSPn7gjbCWInPTe4ttTe7Vn+SRY7hdy\r
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" transform="matrix(1 0 0 1 34 58)">\r
</image>\r
<path class="st0" d="M76,159c-2.75,2.92-6.06,4.43-8.5,3.5c-3.27-1.25-3.75-6.39-4-9c-1.22-12.96,7.16-24.47,9.5-27.5\r
	c9.02-11.67,36.31-37.06,97.78-52.28c9.09-2.25,36.86-8.72,74.22-9.72c13.58-0.37,38.83-0.91,71,5\r
	c62.04,11.39,100.61,37.74,115.5,57.5c8.45,11.21,12.14,24.1,10,30c-0.43,1.19-1.42,3.91-4,5c-3.07,1.29-6.35-0.61-7-1"/>\r
<path class="st0" d="M66.5,162.5c0.35,1.47,0.64,3.63,0,6c-0.59,2.21-1.74,3.65-2,4c-2.92,3.87-10.9,23.28-15,44c0,0-3.8,19.18-3,41\r
	c0.4,10.86,2.54,69.24,36,113c47.94,62.69,135.36,62.91,169,63c34.74,0.09,119.04,0.3,168-61c36.78-46.05,37.86-107.11,38-115\r
	c0.42-23.54-4-44-4-44c-3.33-15.44-9.98-36.06-13-41c-0.28-0.45-1.45-2.29-2-5c-0.51-2.53-0.25-4.7,0-6"/>\r
<path class="st0" d="M194.5,121.5c1.44,3.85,2.83,8.19,4,13c1.8,7.43,2.65,14.21,3,20"/>\r
<path class="st0" d="M311.5,118.5c-2,2.74-4.23,6.4-6,11c-3.49,9.07-3.43,17.21-3,22"/>\r
<path class="st0" d="M206.5,226.5c0.21-2.77,2.12-34.05-21-51c-14.54-10.66-40.32-16.64-51-4c-8.45,10.01-4.41,28.32,4,39\r
	c15.37,19.52,51,20.82,61,6c4.84-7.18,2.89-16.98,1-23"/>\r
<path class="st0" d="M158.5,165.5c-2.03,1-9.65,5.06-13,14c-3.62,9.67-0.72,20.97,7,28c6.93,6.32,17.56,9.02,27,5\r
	c10.42-4.44,16.73-15.96,15-28"/>\r
<path class="st0" d="M296.5,225.5c0.22-3.04,3.66-42.88,33-56c9.59-4.29,29.96-9.31,40,2c8.51,9.59,5.35,26.16-1,36\r
	c-13.31,20.62-49.3,25.19-61,11c-5.07-6.14-4.73-14.76-4-20"/>\r
<path class="st0" d="M343.5,165.5c0.7,0.23,14.02,4.8,17,18c2.51,11.11-3.96,21.01-11,26c-1.35,0.96-11.06,7.62-22,4\r
	c-10.47-3.46-17.71-14.89-17-28"/>\r
<path class="st0" d="M210.5,250.5c-0.43,2.1-0.79,4.44-1,7c-0.31,3.74-0.24,7.12,0,10"/>\r
<path class="st0" d="M293.5,250.5c0.43,2.1,0.79,4.44,1,7c0.31,3.74,0.24,7.12,0,10"/>\r
<path class="st0" d="M253.5,313.5c-7.78,0.69-14.84-5.9-17-12c-1.58-4.47,0.3-6.36-2-10c-3.35-5.31-10.81-6.78-12-7\r
	c-5.17-0.95-8.33,0.53-11-2c-0.29-0.27-2.06-1.96-2-4c0.16-5.13,11.83-10.58,23-11c9.14-0.35,9.69,2.98,20,3\r
	c10.81,0.02,11.79-3.63,21-3c10.08,0.69,20.88,5.88,21,11c0.06,2.61-2.66,4.74-3,5c-3.17,2.47-5.76,0.63-11,2\r
	c-0.59,0.15-7.69,2.12-11,8c-1.8,3.19-0.68,4.35-2,8C265.72,306.43,260.58,312.87,253.5,313.5z"/>\r
<path class="st0" d="M252.5,300.5c0,10.67,0,21.33,0,32"/>\r
<path class="st0" d="M141.5,289.5c-1.37,3.53-9.43,25.37,2,45c13.81,23.73,44.25,23.94,52,24c31.96,0.23,52.89-21.55,57-26\r
	c4.31,4.39,27.59,27.22,61,25c7.36-0.49,38.85-2.58,50-27c8.38-18.34-0.21-37.25-2-41"/>\r
<path class="st0" d="M216.5,379.5c5.08,3.56,17.05,10.92,34,12c20.9,1.33,36.06-7.74,41-11"/>\r
<path class="st0" d="M44.5,313.5c13.54-2.63,27.89-5.01,43-7c19.03-2.5,37.08-4.08,54-5"/>\r
<path class="st0" d="M58.5,356.5c10.5-6.02,24.24-12.69,41-18c17.24-5.46,32.71-7.92,45-9"/>\r
<path class="st0" d="M119.5,369.5c7.88-5.61,17.2-11.49,28-17c7-3.57,13.71-6.53,20-9"/>\r
<path class="st0" d="M362.5,301.5c12.83,0.43,26.53,1.37,41,3c19.63,2.22,37.69,5.39,54,9"/>\r
<path class="st0" d="M360.5,328.5c11.93,2.1,25.44,5.24,40,10c17.57,5.74,32.61,12.5,45,19"/>\r
<path class="st0" d="M338.5,343.5c6.93,3.09,14.32,6.72,22,11c8.93,4.97,16.93,10.06,24,15"/>\r
<path class="st0" d="M68.5,152.5c11.56-17.6,18.22-25.94,20-25c1.96,1.03-2.04,13.37-12,37"/>\r
<path class="st0" d="M437.5,152.5c-12.7-17.78-20.03-26.12-22-25c-2.16,1.23,2.17,13.9,13,38"/>\r
</svg>\r
`,xs=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\r
<style type="text/css">\r
	.st0{fill:none;stroke:#000000;stroke-miterlimit:10;}\r
</style>\r
<path class="st0" d="M89,128.5c-8.4-1.2-20-3.3-33.5-7.5c-13.5-4.2-21.6-8.1-23-6c-2.1,3.2,13.7,16.9,15,18c9.1,7.8,17.8,12.9,24,16\r
	"/>\r
<path class="st0" d="M410.5,127c7.7-1.2,19.8-3.5,34.4-8.1c13.4-4.2,21.6-8.1,23-6c2.1,3.2-14.2,17.3-15,18\r
	c-9.6,8.2-18.8,13.3-25.5,16.5"/>\r
<path class="st0" d="M74.5,175c-3.4-0.3-8.2-0.1-13,2c-20,8.9-21.2,44.2-22,67c-0.8,24.3,4.7,54.3,13,68c1.2,2,4.8,7.6,7,16\r
	c2.2,8.5,0.2,9.6,2,16c2.9,10.4,9.1,11.6,16,24c4.8,8.7,2.8,10.4,6,16c11.3,19.6,48.7,20.5,68,21c11.6,0.3,19.6-0.6,34,2\r
	c10.1,1.8,13.5,3.6,23,6c18.4,4.6,33.1,4.8,45,5c10.9,0.2,30.2,0.4,53-5c7.5-1.8,16.6-4.5,31-6c9.6-1,10.8-0.4,19-1\r
	c16.1-1.3,39.5-3.1,53-18c5.9-6.5,3.1-7.9,12-19c9.6-12,11.7-12.4,16-20c6-10.5,3.4-14.9,8-31c4.6-16.1,8.7-17.4,13-30\r
	c4.1-12.2,3.1-23.8,2-47c-1.5-31.7-2.7-52.3-17-62c-5-3.4-10.2-4.6-14-5"/>\r
<path class="st0" d="M141.5,265c3.6-4.6,14.3,2.4,54,7c13.2,1.5,22.7,2,34,0c10.8-1.9,19.3-5.3,25-8c6.6,2.9,16.5,6.5,29,8\r
	c6.7,0.8,15.3,1.1,31-1c34.7-4.7,46.3-13.5,50-9c5.3,6.4-10.8,33.4-34,51c-27.5,21-57.7,23.2-71,24c-13.3,0.8-47.4,2.9-79-18\r
	C154.1,301.5,135.9,272.4,141.5,265z"/>\r
<path class="st0" d="M62.5,177c1.2-8,4.3-21.6,14-35c3.6-5.1,5.5-7.6,8.3-9.8c0.9-0.7,2.7-2,4.7-4.2c2-2.4,3-4.5,3.2-4.9\r
	c3.5-6.9,38.7-27.6,68.8-30.1c3.1-0.3,9.9-0.7,18-4c5.7-2.4,5.1-3.4,10-5c7.9-2.6,15.8-2.3,21-2c4,0.2,5.2,0.6,8.7,0.3\r
	c5-0.3,8.3-1.5,11.3-2.3c0,0,8.2-2.3,18-3c6.4-0.4,14.2-1,23,2c3.3,1.1,4.8,2.1,9,3c5.2,1.2,8.5,0.9,13,1c7.1,0.1,15.1,0.2,23,3\r
	c7.4,2.6,7.1,4.7,14,7.2c8.3,3,14.3,1.9,21,1.8c28.2-0.3,52,17.6,55,25c0.3,0.7,1.4,3.7,4,7c1.9,2.4,3.6,3.7,4.8,4.7\r
	c3.2,2.8,5.2,5.6,9.2,11.3c4.3,6.1,10.4,17.5,15,33"/>\r
<path class="st0" d="M88.5,173c-0.7-15,18.9-27.7,35-30c20.1-2.9,34.8,10.2,38,13c10.6,9.4,19.1,25.1,15,32c-0.8,1.3-3.3,4.5-5,4\r
	c-1.2-0.4-1-2.1-2-3c-2.8-2.4-11.4,4.7-18,8c-11.2,5.7-22.9,3.8-28,3C110.3,197.9,89.2,188.2,88.5,173z"/>\r
<path class="st0" d="M411.7,171.5c0.7-15-18.9-27.7-35-30c-20.1-2.9-34.8,10.2-38,13c-10.5,9.4-19.1,25.1-15,32c0.8,1.3,3.3,4.5,5,4\r
	c1.2-0.4,1-2.1,2-3c2.8-2.4,11.4,4.7,18,8c11.2,5.7,22.9,3.8,28,3C389.9,196.4,410.9,186.7,411.7,171.5z"/>\r
<path class="st0" d="M225.5,226c-3.9-3.4-7.6-1.4-14-4c-1-0.4-9.2-3.8-10-9c-1.1-7.4,13.5-14.7,16-16c11.2-5.8,21.4-6,35-6\r
	c12.7,0,22.1,0,33,5c1.5,0.7,19.2,8.7,18,16c-0.8,4.8-9.4,8.2-14,10c-6.1,2.4-8.8,1.9-12,5c-3.3,3.2-2.7,5.8-5,10\r
	c-3.3,6-10.5,11.2-18,12c-10.4,1-21.2-6.6-25-15C228,230.6,228.1,228.3,225.5,226z"/>\r
<path class="st0" d="M213.5,223c1.1-3.6,3.7-6.3,7-7c5.2-1.1,10.9,3.3,11,8c0.1,3.1-2.3,5.3-3,6"/>\r
<path class="st0" d="M289.5,222c-0.3-0.8-2.1-5-6-6c-6-1.5-13,5.5-12,10c0.5,2,2.4,3.3,4,4"/>\r
<path class="st0" d="M254.5,231c0,35.7,0,71.3,0,107"/>\r
<path class="st0" d="M176.5,270c-1.7,1.1-12.2,8-14,21c-0.9,6.7,0.8,12.2,2,15"/>\r
<path class="st0" d="M328.5,269c2.5,1.8,7.1,5.6,10,12c5.3,11.8,0.9,22.9,0,25"/>\r
<path class="st0" d="M199.5,272c-1.8,9-3.4,19.4-4,31c-0.5,8.7-0.4,16.7,0,24"/>\r
<path class="st0" d="M224.5,273c-2.1,6.5-4.1,14.5-5,24c-1.5,15.8,0.7,29,3,38"/>\r
<path class="st0" d="M279.5,271c2.3,5.6,4.5,12.3,6,20c3.4,17.2,1.9,32,0,42"/>\r
<path class="st0" d="M304.5,272c1.3,5.7,2.4,12,3,19c1.3,13.9,0.5,26.2-1,36"/>\r
<path class="st0" d="M328.5,269c0.5,7.1,0.6,15.1,0,24c-0.6,8.5-1.7,16.3-3,23"/>\r
<path class="st0" d="M176.5,270c-1.3,5.8-2.4,12.5-3,20c-0.7,9-0.6,17.1,0,24"/>\r
<path class="st0" d="M34.5,210c17.3,1.7,36.4,4.5,57,9c24.5,5.4,46.3,12.1,65,19"/>\r
<path class="st0" d="M30.5,238c16.4-0.4,34.1-0.2,53,1c22.5,1.4,43.2,3.9,62,7"/>\r
<path class="st0" d="M347.5,237c15.5-6.1,33.5-12.1,54-17c23.7-5.7,45.4-8.6,64-10"/>\r
<path class="st0" d="M354.5,245c22.7-3.8,48.5-6.6,77-7c13.7-0.2,26.7,0.2,39,1"/>\r
<path class="st0" d="M396.5,257c14.8,1.3,30.5,3.2,47,6c9,1.5,17.7,3.2,26,5"/>\r
<path class="st0" d="M403.5,277c12.3,1,24.9,2.3,38,4c9.6,1.2,18.9,2.6,28,4"/>\r
<path class="st0" d="M392.5,292c15.3,4.3,30.7,8.7,46,13"/>\r
<path class="st0" d="M396.5,306c23,11,46,22,69,33"/>\r
<path class="st0" d="M101.5,308c-20.3,10-40.7,20-61,30"/>\r
<path class="st0" d="M110.5,257c-26,4-52,8-78,12"/>\r
<path class="st0" d="M104.5,274c-23.3,5.3-46.7,10.7-70,16"/>\r
<path class="st0" d="M109.5,290c-14.3,5-28.7,10-43,15"/>\r
<path class="st0" d="M101.5,81c4.9,2.6,10.3,5.8,16,10c4.6,3.4,8.6,6.8,12,10"/>\r
<path class="st0" d="M121.5,73c3.2,3.1,6.6,6.7,10,11c3.7,4.6,6.6,9,9,13"/>\r
<path class="st0" d="M136.5,68c2.9,3.4,6,7.7,9,13c2.7,4.7,4.6,9.2,6,13"/>\r
<path class="st0" d="M348.5,95c1.3-3.1,3-6.5,5-10c3.3-5.7,6.8-10.3,10-14"/>\r
<path class="st0" d="M360.5,96c1.2-2.4,2.8-5.2,5-8c3.4-4.5,7-7.8,10-10"/>\r
<path class="st0" d="M370.5,98c1.6-1.9,3.6-4,6-6c6.9-5.8,14-8.6,19-10"/>\r
</svg>\r
`,Ss=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Cs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ws=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ts=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Es=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ds=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Os=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ks=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,As=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,js=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ms=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ns=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ps=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Fs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Is=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ls=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Rs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,zs=`1.0.0`,Bs=`Stand404`,Vs=`382365750`,Hs=[{id:`niulai`,name:`牛来`,uid:`3706940500740536`,themeColor:`#FAB933`,svg:Rs},{id:`feifeidu`,name:`胆子肥肥嘟`,uid:`3546879581227658`,themeColor:`#FFB623`,svg:Ls},{id:`kuyaxi`,name:`小桃苦呀西`,uid:`699195630`,themeColor:`#FF90AA`,svg:Is},{id:`lele`,name:`乐乐`,uid:`3706949570923457`,themeColor:`#7b7b7b`,svg:Fs},{id:`korfball`,name:`荷兰球`,uid:`3691001428314274`,themeColor:`#AE1C27`,svg:Ps},{id:`volleyball`,name:`芬兰球`,uid:`3691001428314274`,themeColor:`#003B7E`,svg:Ns},{id:`shiroko`,name:`白子`,uid:`2088583726`,themeColor:`#A6F3FE`,svg:Ms},{id:`manbo`,name:`诗歌剧`,uid:`564907556`,themeColor:`#A39DC4`,svg:js},{id:`doubao`,name:`豆包`,uid:`484421218`,themeColor:`#CF3733`,svg:As},{id:`salary_cat`,name:`月薪喵`,uid:`3706929576676043`,themeColor:`#D1B79A`,svg:ks},{id:`rickrolling`,name:`瑞克摇`,uid:`500239999`,themeColor:`#000000`,svg:Os},{id:`among_us`,name:`Among Us`,uid:`3493095347849253`,themeColor:`#CC000D`,svg:Ds},{id:`naiwa_laugh`,name:`奶蛙大笑`,uid:`3461565158263167`,themeColor:`#ffc54c`,svg:Es},{id:`taffy`,name:`塔菲`,uid:`3461563107248333`,themeColor:`#FFC8CB`,svg:Ts},{id:`miku`,name:`Miku`,uid:`3707019492067362`,themeColor:`#81e0d8`,svg:ws},{id:`dagoujiao`,name:`大狗叫`,uid:`3546780069267990`,themeColor:`#EFC094`,svg:Cs},{id:`naiwa`,name:`奶蛙`,uid:`3546828333123649`,themeColor:`#ffc54c`,svg:Ss},{id:`shushu`,name:`鼠鼠`,uid:`3546836065323554`,themeColor:`#BE9D69`,svg:xs},{id:`maodie`,name:`耄耋`,uid:`3546686636952349`,themeColor:`#BE9D69`,svg:bs},{id:`bili_app`,name:`哔哩APP`,uid:`1042259307`,themeColor:`#FF79A8`,svg:ys},{id:`nte`,name:`异环`,uid:`3691007084333219`,themeColor:`#000000`,svg:vs},{id:`fool`,name:`啥子`,uid:`3546802817075650`,themeColor:`#000000`,svg:_s},{id:`lil_hater`,name:`小黑子`,uid:`1746941295`,themeColor:`#FFDB5C`,svg:gs},{id:`triple_tap`,name:`一键三连`,uid:`3494374585403677`,themeColor:`#FF79A8`,svg:hs},{id:`sad_dxh`,name:`悲伤蛋小黄`,themeColor:`#E8B941`,svg:ms},{id:`teto_pear`,name:`Teto梨`,uid:`1148934140`,themeColor:`#E14263`,svg:ps},{id:`pikachu`,name:`皮卡丘`,uid:`490459227`,themeColor:`#FFE228`,svg:ds},{id:`scp`,name:`基金会`,uid:`3546964390054869`,themeColor:`#000000`,svg:us},{id:`doro`,name:`Doro`,themeColor:`#E9AFC8`,svg:ls},{id:`genshin`,name:`原神`,themeColor:`#000000`,svg:cs},{id:`stinky_penguin`,name:`凑企鹅`,themeColor:`#7A7186`,svg:ss},{id:`nailong`,name:`奶龙`,themeColor:`#ffc54c`,svg:os}],Us=fs;function Ws(e){return Hs.find(t=>t.id===e)??Hs[0]}function Gs(e){let t=[],n=/<path[^>]*\sd\s*=\s*("([^"]*)"|'([^']*)')/g,r;for(;(r=n.exec(e))!==null;)t.push(r[2]??r[3]??``);return t}function Ks(e){let t=Gs(e);if(t.length===0)throw Error(`sampleSvgPaths: no <path d="..."> found in SVG source`);return t.flatMap(e=>nc(e))}function qs(e,t=1.5,n=26){let r=e.match(/viewBox="[\d.\-]+\s+[\d.\-]+\s+([\d.\-]+)/),i=t*(r?parseFloat(r[1]):500)/n;return e.replace(/<svg([^>]*)>/,(e,t)=>`<svg${t} stroke-width="${i.toFixed(1)}">`)}function Js(e){let t=[],n=/([A-Za-z])|(-?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)/g,r;for(;(r=n.exec(e))!==null;)t.push(r[0]);return t}var Ys=8,Xs=6,Zs=24;function Qs(e,t,n,r,i){let a=1-i,o=a*a*a,s=3*a*a*i,c=3*a*i*i,l=i*i*i;return{x:o*e.x+s*t.x+c*n.x+l*r.x,y:o*e.y+s*t.y+c*n.y+l*r.y}}function $s(e,t,n,r){let i=1-r;return{x:i*i*e.x+2*i*r*t.x+r*r*n.x,y:i*i*e.y+2*i*r*t.y+r*r*n.y}}function ec(e,t,n,r){return Math.atan2(e*r-t*n,e*n+t*r)}function tc(e,t,n,r,i,a,o,s,c){if(Math.hypot(e.x-o.x,e.y-o.y)<1e-9)return;let l=r*Math.PI/180,u=Math.cos(l),d=Math.sin(l),f=(e.x-o.x)/2,p=(e.y-o.y)/2,m=u*f+d*p,h=-d*f+u*p,g=Math.abs(t),_=Math.abs(n),v=m*m/(g*g)+h*h/(_*_);if(v>1){let e=Math.sqrt(v);g*=e,_*=e}let y=g*g*_*_-g*g*h*h-_*_*m*m,b=g*g*h*h+_*_*m*m,x=y<0||b===0?0:Math.sqrt(y/b);i===a&&(x=-x);let S=x*g*h/_,C=-x*_*m/g,w=u*S-d*C+(e.x+o.x)/2,T=d*S+u*C+(e.y+o.y)/2,E=(m-S)/g,D=(h-C)/_,O=(-m-S)/g,k=(-h-C)/_,A=ec(1,0,E,D),j=ec(E,D,O,k);!a&&j>0&&(j-=Math.PI*2),a&&j<0&&(j+=Math.PI*2);let ee=Math.max(2,Math.ceil(Math.abs(j)/(Math.PI*2)*s));for(let e=1;e<=ee;e++){let t=A+j*e/ee,n=Math.cos(t),r=Math.sin(t);c.push({x:w+g*n*u-_*r*d,y:T+g*n*d+_*r*u})}}function nc(e){let t=Js(e);if(t.length===0)throw Error(`samplePathData: empty path data`);let n=0,r=``,i={x:0,y:0},a={x:0,y:0},o=null,s=null,c=[],l=[],u=e=>/^[A-Za-z]$/.test(e),d=()=>{if(n>=t.length)return null;let e=t[n];return u(e)?null:(n++,parseFloat(e))},f=()=>{let e=d();if(e===null)return null;let t=d();return t===null?null:{x:e,y:t}},p=e=>{let t=l[l.length-1];t&&Math.hypot(e.x-t.x,e.y-t.y)<1e-9||l.push({x:e.x,y:e.y})},m=()=>{l.length>0&&(c.push(l),l=[])};for(;n<t.length;){let e=t[n];u(e)?(r=e,n++):r===``&&(r=`M`);let c=r===r.toUpperCase(),h=r.toUpperCase(),g=e=>c?e:{x:e.x+i.x,y:e.y+i.y};switch(h){case`M`:{m();let e=f();if(!e)break;for(i=g(e),a=i,o=null,s=null,p(i);;){let e=f();if(!e)break;let t=g(e);p(t),i=t}break}case`L`:for(;;){let e=f();if(!e)break;let t=g(e);p(t),i=t}break;case`H`:for(;;){let e=d();if(e===null)break;i=g({x:e,y:c?i.y:0}),p(i)}break;case`V`:for(;;){let e=d();if(e===null)break;i=g({x:c?i.x:0,y:e}),p(i)}break;case`C`:for(;;){let e=f(),t=f(),n=f();if(!e||!t||!n)break;let r=g(e),a=g(t),s=g(n);for(let e=1;e<=Ys;e++)p(Qs(i,r,a,s,e/Ys));o=a,i=s}break;case`S`:for(;;){let e=f(),t=f();if(!e||!t)break;let n=g(e),r=g(t),a=o?{x:2*i.x-o.x,y:2*i.y-o.y}:{x:i.x,y:i.y};for(let e=1;e<=Ys;e++)p(Qs(i,a,n,r,e/Ys));o=n,i=r}break;case`Q`:for(;;){let e=f(),t=f();if(!e||!t)break;let n=g(e),r=g(t);for(let e=1;e<=Xs;e++)p($s(i,n,r,e/Xs));s=n,i=r}break;case`T`:for(;;){let e=f();if(!e)break;let t=g(e),n=s?{x:2*i.x-s.x,y:2*i.y-s.y}:{x:i.x,y:i.y};for(let e=1;e<=Xs;e++)p($s(i,n,t,e/Xs));s=n,i=t}break;case`A`:for(;;){let e=d(),t=d(),n=d(),r=d(),a=d(),o=f();if(e===null||t===null||n===null||r===null||a===null||!o)break;let s=g(o);tc(i,e,t,n,r!==0,a!==0,s,Zs,l),i=s}break;case`Z`:Math.hypot(i.x-a.x,i.y-a.y)>1e-9&&p(a),i=a,o=null,s=null}}if(m(),c.length===0)throw Error(`samplePathData: no points produced`);return c}function rc(e){if(e.length===0)throw Error(`getBounds: points must not be empty`);let t=e.map(e=>e.x),n=e.map(e=>e.y),r=Math.min(...t),i=Math.max(...t),a=Math.min(...n),o=Math.max(...n);return{minX:r,minY:a,width:i-r||1,height:o-a||1}}function ic(e,t){let n=t??rc(e);return e.map(e=>({x:(e.x-n.minX)/n.width,y:(e.y-n.minY)/n.height}))}function ac(e,t,n){if(t<=0)return e;let{minX:r,minY:i,width:a,height:o}=e,s=a,c=o,l=n&&n>0?t*Math.min(n,1/n):t;if(o/a<l?c=a*l:a/o<l&&(s=o*l),s===a&&c===o)return e;let u=r+a/2,d=i+o/2;return{minX:u-s/2,minY:d-c/2,width:s,height:c}}function oc(e,t){return e.map(e=>({x:t.minX+e.x*t.width,y:t.minY+e.y*t.height}))}function sc(e){let t=[];for(let n of e){let e=t[t.length-1];(!e||e.x!==n.x||e.y!==n.y)&&t.push(n)}return t}var cc=10;function lc(e,t=.5){if(e.length<=2)return e.slice();let n=Math.round(Math.max(0,Math.min(1,t))*cc);if(n===0)return e.slice();let r=e.slice();for(let e=0;e<n;e++){let e=r.slice();for(let t=1;t<r.length-1;t++){let n=r[t-1],i=r[t],a=r[t+1];e[t]={x:(n.x+2*i.x+a.x)/4,y:(n.y+2*i.y+a.y)/4}}r=e}return r}function uc(e){let t=0;for(let n=1;n<e.length;n++)t+=Math.hypot(e[n].x-e[n-1].x,e[n].y-e[n-1].y);return t}function dc(e,t){if(e.length===0)throw Error(`resampleTo: points must not be empty`);if(t<1)throw Error(`resampleTo: n must be >= 1`);let n=sc(e);if(n.length===1||t===1){let e=n[0];return Array.from({length:t},()=>({x:e.x,y:e.y}))}let r=[0];for(let e=1;e<n.length;e++){let t=n[e-1],i=n[e];r.push(r[e-1]+Math.hypot(i.x-t.x,i.y-t.y))}let i=r[r.length-1];if(i===0){let e=n[0];return Array.from({length:t},()=>({x:e.x,y:e.y}))}let a=[];for(let e=0;e<t;e++){let o=e/(t-1)*i,s=0;for(;s<n.length-2&&r[s+1]<o;)s++;let c=r[s+1]-r[s],l=c===0?0:(o-r[s])/c,u=n[s],d=n[s+1];a.push({x:u.x+(d.x-u.x)*l,y:u.y+(d.y-u.y)*l})}return a}function fc(e,t){if(t<1)throw Error(`splitStroke: k must be >= 1`);let n=sc(e);if(t===1||n.length<=1)return Array.from({length:t},()=>n.map(e=>({x:e.x,y:e.y})));let r=[0];for(let e=1;e<n.length;e++){let t=n[e-1],i=n[e];r.push(r[e-1]+Math.hypot(i.x-t.x,i.y-t.y))}let i=r[r.length-1];if(i===0)return Array.from({length:t},()=>n.map(e=>({x:e.x,y:e.y})));let a=e=>{if(e<=0)return{x:n[0].x,y:n[0].y};if(e>=i)return{x:n[n.length-1].x,y:n[n.length-1].y};let t=0;for(;t<n.length-2&&r[t+1]<e;)t++;let a=r[t+1]-r[t],o=a===0?0:(e-r[t])/a,s=n[t],c=n[t+1];return{x:s.x+(c.x-s.x)*o,y:s.y+(c.y-s.y)*o}},o=[];for(let e=0;e<t;e++){let s=i*e/t,c=i*(e+1)/t,l=[a(s)];for(let e=1;e<n.length-1;e++){let t=r[e];t>s&&t<c&&l.push({x:n[e].x,y:n[e].y})}l.push(a(c)),o.push(l)}return o}var pc=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function mc(e){let{sourcePoints:t,targetPoints:n,durationMs:r=2e3,sampleCount:i=256,easing:a=pc}=e;if(t.length===0)throw Error(`buildMorphFrames: sourcePoints must not be empty`);if(n.length===0)throw Error(`buildMorphFrames: targetPoints must not be empty`);let o=i,s=dc(sc(t),o),c=dc(sc(n),o),l=Math.max(2,Math.ceil(r/1e3*60)),u=[];for(let e=0;e<l;e++){let t=a(e/(l-1)),n=[];for(let e=0;e<o;e++){let r=s[e],i=c[e];n.push({x:r.x+(i.x-r.x)*t,y:r.y+(i.y-r.y)*t})}u.push({progress:t,points:n})}return u}var hc=.01;function gc(e){return Math.min(4,Math.max(hc,e))}function _c(e,t,n){return{x:(t-e.panX)/e.scale,y:(n-e.panY)/e.scale}}function vc(e,t,n){let r=gc(e.scale*n),i=r/e.scale;return{scale:r,panX:t.x-(t.x-e.panX)*i,panY:t.y-(t.y-e.panY)*i}}function yc(e,t,n,r,i){let a=Math.max(1,t),o=gc(e.scale*(r/a)),s=_c(e,n.x,n.y);return{scale:o,panX:i.x-s.x*o,panY:i.y-s.y*o}}var bc={class:`drawing-canvas`},xc=ir({__name:`DrawingCanvas`,props:{strokeColor:{},minAspect:{},strokeWidth:{},smoothEnabled:{type:Boolean},smoothStrength:{}},emits:[`strokeComplete`,`drawStart`,`drawCancel`,`historyChange`,`morphChange`,`viewChange`],setup(e,{expose:t,emit:n}){let r=e,i=n,a=G(null),o=null,s=0,c=0,l=null,u=[],d=[],f=[],p=0,m=Ct({scale:1,panX:0,panY:0}),h=new Map,g=null,_=[[]],v=0,y=new Map,b=()=>r.strokeColor??`#000000`,x=()=>r.strokeWidth??3;function S(e){return r.smoothEnabled&&(r.smoothStrength??0)>0?lc(e,r.smoothStrength):e}function C(){let e=a.value;if(!e)return;let t=e.getBoundingClientRect();s=t.width,c=t.height;let n=window.devicePixelRatio||1;e.width=Math.max(1,Math.round(s*n)),e.height=Math.max(1,Math.round(c*n)),o=e.getContext(`2d`),o&&(o.lineCap=`round`,o.lineJoin=`round`),L()}function w(){let e=o;if(!e)return;let t=window.devicePixelRatio||1;e.setTransform(t*m.scale,0,0,t*m.scale,t*m.panX,t*m.panY)}function T(e){m.scale=e.scale,m.panX=e.panX,m.panY=e.panY,i(`viewChange`,{scale:m.scale,panX:m.panX,panY:m.panY}),L()}function E(){T({scale:1,panX:0,panY:0})}function D(e){let t=a.value.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}function O(e){let t=D(e);return _c(m,t.x,t.y)}function k(e,t){return Math.hypot(t.x-e.x,t.y-e.y)}function A(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function j(){l!==null&&(l=null,u=[],i(`drawCancel`),L())}function ee(e){if(!h.has(e.pointerId)){if(h.set(e.pointerId,D(e)),h.size>=2){j(),a.value?.setPointerCapture(e.pointerId);let t=[...h.values()];g={view0:{scale:m.scale,panX:m.panX,panY:m.panY},dist0:Math.max(1,k(t[0],t[1])),center0:A(t[0],t[1])};return}l===null&&(l=e.pointerId,a.value?.setPointerCapture(e.pointerId),u=[O(e)],i(`drawStart`),L())}}function te(e){if(h.has(e.pointerId)){if(h.set(e.pointerId,D(e)),g&&h.size>=2){let e=[...h.values()];T(yc(g.view0,g.dist0,g.center0,k(e[0],e[1]),A(e[0],e[1])));return}e.pointerId===l&&(u.push(O(e)),L())}}function ne(e){if(h.delete(e.pointerId),g){if(h.size>=2){let e=[...h.values()];g={view0:{scale:m.scale,panX:m.panX,panY:m.panY},dist0:Math.max(1,k(e[0],e[1])),center0:A(e[0],e[1])}}else g=null,l=null,u=[],L();return}if(e.pointerId!==l)return;l=null;let t=S(u);u=[],i(`strokeComplete`,t),L()}function M(e){e.preventDefault();let t=D(e),n=Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0012));T(vc(m,t,n))}function re(e,t){f.push({frames:e,start:performance.now(),index:0,color:t??b(),batch:v}),y.set(v,(y.get(v)??0)+1),p||=requestAnimationFrame(P)}function ie(){v+=1,i(`historyChange`,{canUndo:_.length>1})}function ae(){_.push(d.slice()),i(`historyChange`,{canUndo:!0})}function oe(){p&&=(cancelAnimationFrame(p),0);for(let e of f)if(e.batch!==void 0){let t=(y.get(e.batch)??1)-1;t<=0?y.delete(e.batch):y.set(e.batch,t)}f=[],u=[],l=null}function N(e,t){if(e.length===0)return;let n=[];if(d.forEach((e,t)=>{e.morphed||n.push(t)}),n.length!==0){ae();for(let i of n.reverse()){let n=d[i],a=ac(rc(n.points),r.minAspect??0,t),o=fc(ic(n.points,a),e.length);d.splice(i,1),o.forEach((t,r)=>{let i=mc({sourcePoints:t,targetPoints:e[r]}).map(e=>({...e,points:oc(e.points,a)}));f.push({frames:i,start:performance.now(),index:0,color:n.color,batch:v,noHistory:!0}),y.set(v,(y.get(v)??0)+1)})}v+=1,ce(),p||=requestAnimationFrame(P)}}function se(){return d.some(e=>!e.morphed)}function ce(){i(`morphChange`,se())}function P(e){let t=!0;for(let n of f){let r=(n.frames.length-1)*16.666666666666668,i=Math.min(1,(e-n.start)/r);n.index=Math.min(n.frames.length-1,Math.floor(i*(n.frames.length-1))),i<1&&(t=!1)}let n=new Map;for(let e of f)e.batch!==void 0&&e.index>=e.frames.length-1&&n.set(e.batch,(n.get(e.batch)??0)+1);let r=new Set;for(let[e,t]of n)(y.get(e)??0)<=t&&r.add(e);for(let e of r){let t=[];for(let n of f)n.batch===e&&n.index>=n.frames.length-1&&t.push(n);t.some(e=>e.noHistory)||ae(),t.forEach(I)}let i=[];for(let e of f)e.index<e.frames.length-1||e.batch!==void 0&&!r.has(e.batch)?i.push(e):I(e);f=i,r.size>0&&ce(),L(),p=t?0:requestAnimationFrame(P)}function F(e,t){let n=o;!n||e.length===0||(n.strokeStyle=t,n.lineWidth=x(),n.beginPath(),e.forEach((e,t)=>t===0?n.moveTo(e.x,e.y):n.lineTo(e.x,e.y)),n.stroke())}function I(e){let t=e.frames[e.frames.length-1];if(t&&d.push({points:t.points,color:e.color,morphed:!0}),e.batch!==void 0){let t=(y.get(e.batch)??1)-1;t<=0?y.delete(e.batch):y.set(e.batch,t)}}function le(e,t){ae(),d.push({points:e,color:t,morphed:!1}),L(),ce()}function L(){let e=o,t=a.value;if(!(!e||!t)){e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height),w();for(let e of d)F(e.points,e.color);for(let e of f){let t=e.frames[e.index];t&&F(t.points,e.color)}F(S(u),b())}}function ue(e){let t=[];for(let n of f)if(n.batch===e){let t=(y.get(e)??1)-1;t<=0?y.delete(e):y.set(e,t)}else t.push(n);f=t,f.length===0&&p&&(cancelAnimationFrame(p),p=0)}function de(){if(f.length>0){let e=-1;for(let t of f)t.batch!==void 0&&t.batch>e&&(e=t.batch);if(e>=0){let t=f.some(t=>t.batch===e&&t.noHistory);ue(e),t&&_.length>1&&(d=_.pop(),i(`historyChange`,{canUndo:_.length>1})),L(),ce();return}}_.length<=1||(oe(),d=_.pop(),L(),i(`historyChange`,{canUndo:_.length>1}),ce())}function fe(){oe(),d=[],y.clear(),_=[[]],L(),i(`historyChange`,{canUndo:!1}),ce()}function pe(){return d.length===0&&f.length===0&&u.length===0}function R(){return d.filter(e=>!e.morphed).map(e=>e.points.slice())}function z(){oe(),_=[d.slice()],i(`historyChange`,{canUndo:!1})}function me(){return{staticShapes:d.slice(),undoStack:_.map(e=>e.slice())}}function B(e){oe(),d=e.staticShapes.map(e=>({...e,points:e.points.slice()})),_=e.undoStack.map(e=>e.map(e=>({...e,points:e.points.slice()}))),L(),i(`historyChange`,{canUndo:_.length>1}),ce()}function V(){C()}return yr(()=>{C(),window.addEventListener(`resize`,V),a.value?.addEventListener(`wheel`,M,{passive:!1})}),Sr(()=>{window.removeEventListener(`resize`,V),a.value?.removeEventListener(`wheel`,M),p&&cancelAnimationFrame(p)}),t({playFrames:re,beginStroke:ie,morphAll:N,commitRawStroke:le,clear:fe,isEmpty:pe,getRawStrokes:R,resetUndoBoundary:z,undo:de,snapshotState:me,restoreState:B,resetView:E}),(e,t)=>(J(),Y(`div`,bc,[X(`canvas`,{ref_key:`canvasEl`,ref:a,class:`drawing-canvas__canvas`,onPointerdown:ee,onPointermove:te,onPointerup:ne,onPointercancel:ne},null,544)]))}}),Sc=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Cc=Sc(xc,[[`__scopeId`,`data-v-d6048bf8`]]);function wc(e){return e.map(e=>e.map(e=>({x:1-e.x,y:e.y})))}function Tc(e){let t=e.flat();if(t.length===0)return e;let n=t.map(e=>e.x),r=t.map(e=>e.y),i=Math.min(...n),a=Math.max(...n),o=Math.min(...r),s=Math.max(...r),c=a-i||1,l=s-o||1,u=c/l;if(u>=1){let t=1/u,n=(1-t)/2;return e.map(e=>e.map(e=>({x:Math.min(1,Math.max(0,(e.x-i)/c)),y:Math.min(1,Math.max(0,(e.y-o)/l*t+n))})))}let d=u,f=(1-d)/2;return e.map(e=>e.map(e=>({x:Math.min(1,Math.max(0,(e.x-i)/c*d+f)),y:Math.min(1,Math.max(0,(e.y-o)/l))})))}function Ec(e){let t=e.flat();if(t.length===0)return 1;let n=t.map(e=>e.x),r=t.map(e=>e.y),i=Math.max(...n)-Math.min(...n),a=Math.max(...r)-Math.min(...r);return a<=0?1:i/a}function Dc(e,t){let n=Oc(e);return n&&n.width>0&&n.height>0?n.width/n.height:Ec(t)}function Oc(e){let t=e.match(/viewBox\s*=\s*["']\s*([\d.\-eE]+)\s+([\d.\-eE]+)\s+([\d.\-eE]+)\s+([\d.\-eE]+)\s*["']/);if(!t)return null;let n=parseFloat(t[3]),r=parseFloat(t[4]);return!Number.isFinite(n)||!Number.isFinite(r)||n<=0||r<=0?null:{minX:parseFloat(t[1]),minY:parseFloat(t[2]),width:n,height:r}}function kc(e,t){let n=Oc(t);if(!n)return Tc(e);let r=n.width||1,i=n.height||1;return e.map(e=>e.map(e=>({x:Math.min(1,Math.max(0,(e.x-n.minX)/r)),y:Math.min(1,Math.max(0,(e.y-n.minY)/i))})))}function Ac(e){if(typeof e.themeColor!=`string`||!/^#[0-9a-f]{6}$/i.test(e.themeColor))throw Error(`shape: invalid themeColor`);if(typeof e.aspectRatio!=`number`||!Number.isFinite(e.aspectRatio)||e.aspectRatio<=0)throw Error(`shape: invalid aspectRatio`);if(e.paths.length<1)throw Error(`shape: need >= 1 path`);for(let t of e.paths){if(t.length<3)throw Error(`shape: each path needs >= 3 points`);for(let e of t){if(!Number.isFinite(e.x)||!Number.isFinite(e.y))throw Error(`shape: non-finite coordinate`);if(e.x<0||e.x>1||e.y<0||e.y>1)throw Error(`shape: coordinate out of [0,1]`)}for(let e=1;e<t.length;e++)if(Math.hypot(t[e].x-t[e-1].x,t[e].y-t[e-1].y)<1e-9)throw Error(`shape: duplicate adjacent point`)}}function jc(e){let t=e.flat(),n=Math.min(...t.map(e=>e.x)),r=Math.max(...t.map(e=>e.x)),i=Math.min(...t.map(e=>e.y)),a=Math.max(...t.map(e=>e.y)),o=1e-6;if(!(n<=o)&&!(r>=.999999)&&!(i<=o)&&!(a>=.999999))return e;let s=.08,c=1-s*2;return e.map(e=>e.map(e=>({x:s+e.x*c,y:s+e.y*c})))}function Mc(e,t,n,r,i=!1){let a=Ks(e).filter(e=>e.length>=3);if(a.length===0)throw Error(`buildShapeFromSvg: no valid path (each needs >= 3 points)`);let o=i?kc(a,e):Tc(a);i&&(o=jc(o));let s={name:t,version:n,themeColor:r,paths:o,aspectRatio:Dc(e,o)};return Ac(s),s}function Nc(e,t=0){let n=Math.max(0,t),r=e.map(e=>`M `+e.map(e=>`${(n+e.x*100).toFixed(3)} ${(n+e.y*100).toFixed(3)}`).join(` L `)).join(` `),i=100+n*2;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${i} ${i}" fill="none" stroke="currentColor"><path d="${r}"/></svg>`}function Pc(e){return e===``}function Fc(e,t){return e.some(Pc)&&!e.some(e=>!Pc(e)&&e===t)}function Ic(){let e=G(null),t=G(!1),n=G(!1),r=G(!1),i=G({scale:1,panX:0,panY:0}),a=$(()=>Math.round(i.value.scale*100)),o=$(()=>Math.abs(i.value.scale-1)>1e-6||i.value.panX!==0||i.value.panY!==0),s=`always-xx:settings`,c=`always-xx:onboarded`;function l(){try{let e=localStorage.getItem(s);return e?JSON.parse(e):{}}catch{return{}}}function u(){try{let e={mode:f.value,palette:y.value,minAspect:C.value,strokeColor:x.value,strokeWidth:w.value,smoothEnabled:E.value,smoothStrength:D.value};localStorage.setItem(s,JSON.stringify(e))}catch{}}let d=l(),f=G(d.mode??`auto`),p=[`#000000`,`#e53935`,`#1e88e5`],m=[`#000000`,`#e53935`,`#1e88e5`,`#43a047`,`#f9a825`],h=[`#000000`,`#1e88e5`,``],g=[`#000000`,`#1e88e5`,`#e53935`,`#43a047`,`#f9a825`,``];function _(){return window.matchMedia(`(max-width: 767.98px)`).matches?h:g}function v(e,t){return Array.isArray(e)&&e.length===t.length&&e.every((e,n)=>e===t[n])}v(d.palette,p)?d.palette=h:v(d.palette,m)&&(d.palette=g);let y=G(d.palette??_()),b=`#000000`,x=G(d.strokeColor??b),S=.1,C=G(d.minAspect??S),w=G(d.strokeWidth??3),T=.5,E=G(d.smoothEnabled??!0),D=G(d.smoothStrength??T);Tn([f,y,C,x,w,E,D],u,{deep:!0});let O=G(localStorage.getItem(c)===`1`?`main`:`shape`),k=G(null),A=$(()=>k.value!==null),j=$(()=>P.value===`custom`&&V.value?`custom:${V.value.id}`:k.value??`nailong`),ee=$(()=>{if(P.value===`custom`&&V.value)return V.value;let e=Ws(k.value??`nailong`);return Mc(e.svg,e.name,zs,e.themeColor)}),te=$(()=>se.value?`自定义图案`:P.value===`custom`&&V.value?`总是${V.value.name}`:`总是${Ws(j.value).name}`),ne=$(()=>se.value?`画几笔作为图案，然后点工具栏「保存」`:f.value===`manual`?``:`随便画几笔，松手后它们都会变成${P.value===`custom`&&V.value?V.value.name:Ws(j.value).name}`),M=$(()=>({prefix:`画几笔，点工具栏`,suffix:`按钮，一起变成${P.value===`custom`&&V.value?V.value.name:Ws(j.value).name}`}));wn(()=>{document.title=A.value?te.value:`总是XX`});let re=$(()=>se.value?Us:P.value===`custom`&&V.value?Nc(V.value.paths):Ws(j.value).svg),ie=$(()=>se.value?`#64b5f6`:P.value===`custom`&&V.value?V.value.themeColor:Ws(j.value).themeColor),ae=`always-xx:custom-shapes`,oe=`always-xx:custom-shape`,N=`always-xx:shape-order`,se=G(!1),ce=G(null),P=G(`preset`),F=G(null);function I(){return typeof crypto<`u`&&typeof crypto.randomUUID==`function`?crypto.randomUUID():`c-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function le(e){return`custom:${e}`}function L(){try{let e=localStorage.getItem(ae),t=null;if(e){let n=JSON.parse(e);Array.isArray(n)&&(t=n)}if(!t&&(e=localStorage.getItem(oe),e)){let n=JSON.parse(e);n&&typeof n==`object`&&(t=[n]),localStorage.removeItem(oe)}if(!t)return[];let n=t.filter(e=>!!e&&typeof e==`object`);for(let e of n)typeof e.themeColor!=`string`&&(e.themeColor=`#000000`),typeof e.id!=`string`&&(e.id=I()),(typeof e.aspectRatio!=`number`||!Number.isFinite(e.aspectRatio)||e.aspectRatio<=0)&&(e.aspectRatio=Ec(e.paths)),Ac(e);return n.length>0&&ue(n),n}catch{return[]}}function ue(e){try{localStorage.setItem(ae,JSON.stringify(e))}catch{}}function de(e){return[...e.map(e=>le(e.id)),...Hs.map(e=>e.id)]}function fe(e){let t=new Set(e),n=Hs.filter(e=>!t.has(e.id)).map(e=>e.id);return n.length>0?[...n,...e]:e}function pe(){try{let e=localStorage.getItem(N);if(!e)return null;let t=JSON.parse(e);if(!Array.isArray(t))return null;let n=t.filter(e=>typeof e==`string`);return n.length>0?n:null}catch{return null}}function R(e){try{localStorage.setItem(N,JSON.stringify(e))}catch{}}let z=G(L()),me=pe(),B=G(me?fe(me):de(z.value));R(B.value);let V=$(()=>z.value.find(e=>e.id===F.value)??null),he=$(()=>{let e=new Map(z.value.map(e=>[e.id,e])),t=new Map(Hs.map(e=>[e.id,e])),n=new Set,r=[];for(let i of B.value)if(!n.has(i))if(i.startsWith(`custom:`)){let t=i.slice(7),a=e.get(t);a&&(n.add(i),r.push({kind:`custom`,orderKey:i,customId:a.id,name:a.name,previewSvg:Nc(a.paths)}))}else{let e=t.get(i);e&&(n.add(i),r.push({kind:`builtin`,orderKey:e.id,name:e.name,previewSvg:e.svg,uid:e.uid}))}for(let e of z.value){let t=le(e.id);n.has(t)||(n.add(t),r.push({kind:`custom`,orderKey:t,customId:e.id,name:e.name,previewSvg:Nc(e.paths)}))}for(let e of Hs)n.has(e.id)||(n.add(e.id),r.push({kind:`builtin`,orderKey:e.id,name:e.name,previewSvg:e.svg,uid:e.uid}));return r}),H=G(!1),ge=G(!1),_e=G(null),ve=G(!1),ye=G(null),be=G(!1);function xe(e){k.value=e,P.value=`preset`,O.value=`mode`}let Se=G(0),Ce=Array.from({length:Math.ceil(Hs.length/3)},(e,t)=>Hs.slice(t*3,(t+1)*3)),we=$(()=>Ce[Se.value]??[]);function Te(){Se.value=(Se.value+1)%Ce.length}function Ee(){localStorage.setItem(c,`1`),O.value=`main`,an(()=>Oe())}function De(e){if(e.startsWith(`custom:`)){let t=e.slice(7);z.value.some(e=>e.id===t)&&(F.value=t,P.value=`custom`);return}k.value=e,P.value=`preset`}function Oe(){se.value=!0,ce.value=e.value?.snapshotState()??null,e.value?.resetUndoBoundary()}function ke(){let t=ce.value?.staticShapes.filter(e=>!e.morphed).length??0;return(e.value?.getRawStrokes()??[]).slice(t)}function Ae(){let e=ke(),t=e.flat();if(t.length===0)return[];let n=rc(t),r=n.width||1,i=n.height||1,a=r/i,o=.08,s=1-o*2,c=e=>{let t,c;return a>=1?(t=(e.x-n.minX)/r,c=(e.y-n.minY)/i*(1/a)+(1-1/a)/2):(t=(e.x-n.minX)/r*a+(1-a)/2,c=(e.y-n.minY)/i),{x:o+t*s,y:o+c*s}};return e.map(e=>sc(e).map(c).map(e=>({x:Math.min(1,Math.max(0,e.x)),y:Math.min(1,Math.max(0,e.y))}))).filter(e=>e.length>=3)}function je(){Ae().length!==0&&(H.value=!0)}function Me(n){let r=n.name.trim()||`我的图案`,i=n.themeColor.trim()||`#000000`,a=Ae();if(a.length===0)return;let o={id:I(),name:r,version:`1.0.0`,themeColor:i,paths:a,aspectRatio:Ec(a)};try{Ac(o)}catch{return}z.value=[o,...z.value],ue(z.value),B.value=[le(o.id),...B.value],R(B.value),F.value=o.id??null,P.value=`custom`,se.value=!1,ce.value=null,H.value=!1,e.value?.clear(),t.value=!1}function Ne(e){let t=z.value.find(t=>t.id===e);t&&(_e.value=t,ge.value=!0)}function Pe(){let e=_e.value;e&&(z.value=z.value.filter(t=>t.id!==e.id),ue(z.value),B.value=B.value.filter(t=>t!==le(e.id)),R(B.value),P.value===`custom`&&F.value===e.id&&(F.value=null,k.value=k.value??`nailong`,P.value=`preset`),_e.value=null,ge.value=!1)}function Fe(e){let t=z.value.find(t=>t.id===e);t&&(ye.value=t,ve.value=!0)}function Ie(){be.value=!0}function Le(e){let t={...e,id:I()};(typeof t.aspectRatio!=`number`||!Number.isFinite(t.aspectRatio)||t.aspectRatio<=0)&&(t.aspectRatio=Ec(t.paths)),z.value=[t,...z.value],ue(z.value),B.value=[le(t.id),...B.value],R(B.value),F.value=t.id??null,P.value=`custom`,be.value=!1}function Re(e){let t=Ws(e);return Mc(t.svg,t.name,zs,t.themeColor,!0)}function ze(e,t){let n={...e,id:I(),paths:wc(e.paths)},r=t.startsWith(`custom:`)?t.slice(7):null;if(r){let e=z.value.findIndex(e=>e.id===r);if(e>=0){let t=[...z.value];t.splice(e,0,n),z.value=t}else z.value=[...z.value,n]}else z.value=[...z.value,n];ue(z.value);let i=le(n.id),a=B.value.indexOf(t),o=[...B.value];a>=0?o.splice(a,0,i):o.push(i),B.value=o,R(B.value)}function Be(e){ze(Re(e),e)}function Ve(e){let t=z.value.find(t=>t.id===e);t&&ze(t,le(e))}function He(){se.value=!1,ce.value&&=(e.value?.restoreState(ce.value),null),t.value=!(e.value?.isEmpty()??!0)}function U(e){f.value=e,localStorage.setItem(c,`1`),O.value=`main`}function Ue(){t.value=!0}function We(){t.value=!(e.value?.isEmpty()??!0)}function Ge(e){i.value={...e}}function Ke(){e.value?.resetView()}function qe(n){if(uc(n)<10){e.value?.isEmpty()&&(t.value=!1);return}if(se.value){e.value?.commitRawStroke(n,x.value);return}if(f.value===`manual`){e.value?.commitRawStroke(n,x.value);return}let r=ee.value.paths,i=ac(rc(n),C.value,ee.value.aspectRatio),a=fc(ic(n,i),r.length);r.forEach((t,n)=>{let r=mc({sourcePoints:a[n],targetPoints:t}).map(e=>({...e,points:oc(e.points,i)}));e.value?.playFrames(r,x.value)}),e.value?.beginStroke()}function Je(){e.value?.clear(),t.value=!1}function Ye(){e.value?.undo(),t.value=!(e.value?.isEmpty()??!0)}function Xe(e){(e.ctrlKey||e.metaKey)&&!e.shiftKey&&!e.altKey&&e.key.toLowerCase()===`z`&&(e.preventDefault(),Ye())}yr(()=>window.addEventListener(`keydown`,Xe)),Sr(()=>window.removeEventListener(`keydown`,Xe));function Ze(e){n.value=e.canUndo}function Qe(e){r.value=e}function $e(e){f.value=e}function et(){e.value?.morphAll(ee.value.paths,ee.value.aspectRatio)}function tt(e){x.value=e}function nt(e){y.value=e}function rt(e){C.value=e}function it(){f.value=`auto`,y.value=_(),x.value=b,C.value=S,w.value=3,E.value=!0,D.value=T}function at(e){w.value=e}function ot(e){E.value=e}function st(e){D.value=e}return{canvasRef:e,hasContent:t,canUndo:n,canMorph:r,view:i,zoomPercent:a,isZoomed:o,mode:f,palette:y,strokeColor:x,minAspect:C,strokeWidth:w,smoothEnabled:E,smoothStrength:D,step:O,chosenShape:k,hasChosen:A,shapeId:j,currentShape:ee,titleText:te,hintText:ne,manualHint:M,demoShapeSvg:re,themeColor:ie,customizing:se,shapeSource:P,activeCustomId:F,customShapes:z,shapeOrder:B,activeCustomShape:V,orderedShapes:he,welcomePageIndex:Se,welcomeShapes:we,nextWelcomePage:Te,onPickShape:xe,onPickCustom:Ee,saveDialogOpen:H,deleteDialogOpen:ge,pendingDeleteShape:_e,shareDialogOpen:ve,shareShape:ye,importDialogOpen:be,onChooseShape:De,onEnterCustom:Oe,onSaveCustom:je,confirmSaveCustom:Me,onDeleteCustom:Ne,confirmDeleteCustom:Pe,onShareCustom:Fe,onImportCustom:Ie,onImportConfirm:Le,onMirrorBuiltin:Be,onMirrorCustom:Ve,onCancelCustom:He,onChooseMode:U,onDrawStart:Ue,onDrawCancel:We,onViewChange:Ge,onZoomReset:Ke,onStrokeComplete:qe,onClear:Je,onUndo:Ye,onHistoryChange:Ze,onMorphChange:Qe,onModeChange:$e,onApplyMorph:et,onColorChange:tt,onPaletteChange:nt,onMinAspectChange:rt,onStrokeWidthChange:at,onSmoothEnabledChange:ot,onSmoothStrengthChange:st,resetSettings:it}}var Lc=null;function Rc(){return Lc??=Ic(),Lc}var zc={key:0,class:`welcome`},Bc={class:`welcome__inner`},Vc={class:`welcome__grid`},Hc=[`onClick`],Uc=[`innerHTML`],Wc={class:`welcome__name`},Gc=[`innerHTML`],Kc=Sc(ir({__name:`WelcomeView`,setup(e){let{step:t,welcomeShapes:n,nextWelcomePage:r,onPickShape:i,onPickCustom:a}=Rc();return(e,o)=>(J(),ea(Za,{name:`welcome`},{default:_n(()=>[K(t)===`shape`?(J(),Y(`div`,zc,[X(`div`,Bc,[o[4]||=X(`h1`,{class:`welcome__title`},`选择一个图案`,-1),o[5]||=X(`p`,{class:`welcome__hint`},`无论画什么，笔画总是会变成选定的图案`,-1),X(`div`,Vc,[(J(!0),Y(q,null,kr(K(n),e=>(J(),Y(`button`,{key:e.id,class:`welcome__card`,type:`button`,onClick:t=>K(i)(e.id)},[X(`span`,{class:`welcome__preview`,innerHTML:K(qs)(e.svg,1.5,112)},null,8,Uc),X(`span`,Wc,R(e.name),1)],8,Hc))),128)),X(`button`,{class:`welcome__card`,type:`button`,onClick:o[0]||=(...e)=>K(a)&&K(a)(...e)},[X(`span`,{class:`welcome__preview`,innerHTML:K(qs)(K(Us),1.5,112)},null,8,Gc),o[2]||=X(`span`,{class:`welcome__name`},`自定义图案`,-1)]),X(`button`,{class:`welcome__toggle`,type:`button`,"aria-label":`切换图案`,onClick:o[1]||=(...e)=>K(r)&&K(r)(...e)},[...o[3]||=[X(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[X(`polyline`,{points:`1 4 1 10 7 10`}),X(`path`,{d:`M3.51 15a9 9 0 1 0 2.13-9.36L1 10`})],-1)]])])])])):Q(``,!0)]),_:1}))}}),[[`__scopeId`,`data-v-5f814d2a`]]),qc={class:`demo-morph`},Jc=480,Yc=360,Xc=`#1f3a5f`,Zc=4,Qc=500,$c=150,el=1200,tl=700,nl=400,rl=900,il=Sc(ir({__name:`DemoMorph`,props:{mode:{},paths:{},aspectRatio:{}},setup(e){let t=e,n=t.aspectRatio,r=G(null),i=[[{x:.08,y:.82},{x:.42,y:.18}],[{x:.58,y:.82},{x:.92,y:.18}]],a=null,o=0,s=`draw`,c=0,l=[],u=[],d=[],f=G(!1),p=G(!1);function m(){return i.length*Qc+(i.length-1)*$c}function h(e,t){let n=a;if(!n)return;let r=l[e],i=Math.max(2,Math.round(r.length*Math.min(1,t)));n.strokeStyle=Xc,n.lineWidth=Zc,n.lineCap=`round`,n.lineJoin=`round`,n.beginPath();for(let e=0;e<i;e++){let t=r[e],i=t.x*Jc,a=t.y*Yc;e===0?n.moveTo(i,a):n.lineTo(i,a)}n.stroke()}function g(e){let t=a;if(!t)return;t.clearRect(0,0,Jc,Yc);let n=e*m();for(let e=0;e<i.length;e++){let t=e*650;if(n<t)break;h(e,Math.min(1,(n-t)/Qc))}}function _(e,t){let n=a;if(!n)return;let r=u[e];n.strokeStyle=Xc,n.lineWidth=Zc,n.lineCap=`round`,n.lineJoin=`round`;for(let i of d[e]){let e=i[Math.min(i.length-1,Math.floor(Math.min(1,t)*(i.length-1)))];e&&(n.beginPath(),e.points.forEach((e,t)=>{let i=r.minX+e.x*r.width,a=r.minY+e.y*r.height;t===0?n.moveTo(i,a):n.lineTo(i,a)}),n.stroke())}}function v(e){let t=a;if(t){t.clearRect(0,0,Jc,Yc);for(let t=0;t<d.length;t++)_(t,e)}}function y(e){let t=a;if(!t)return;t.clearRect(0,0,Jc,Yc),e<Qc?h(0,e/Qc):_(0,(e-Qc)/el);let n=e-Qc;n>0&&(n<Qc?h(1,n/Qc):_(1,(n-Qc)/el))}function b(e){let n=e-c;if(t.mode===`auto`)y(n),n>=3100&&(c=e);else switch(s){case`draw`:{let t=Math.min(1,n/m());g(t),t>=1&&(s=`hold`,f.value=!0,c=e);break}case`hold`:g(1),n>=tl&&(p.value=!0,s=`press`,c=e);break;case`press`:g(1),n>=nl&&(p.value=!1,f.value=!1,s=`morph`,c=e);break;case`morph`:{let t=Math.min(1,n/el);v(t),t>=1&&(s=`rest`,c=e);break}case`rest`:v(1),n>=rl&&(s=`draw`,c=e)}o=requestAnimationFrame(b)}return yr(()=>{let e=r.value;if(!e||(e.width=Jc,e.height=Yc,a=e.getContext(`2d`),t.paths.length===0))return;l=i.map(e=>dc(e,30));let m=i.map(e=>e.map(e=>({x:e.x*Jc,y:e.y*Yc})));u=m.map(e=>ac(rc(e),1,n)),d=m.map(e=>fc(ic(e,ac(rc(e),1,n)),t.paths.length).map((e,n)=>mc({sourcePoints:e,targetPoints:t.paths[n],durationMs:el,sampleCount:128}))),s=`draw`,f.value=!1,p.value=!1,c=performance.now(),o=requestAnimationFrame(b)}),Sr(()=>{o&&cancelAnimationFrame(o)}),(e,t)=>(J(),Y(`div`,qc,[X(`canvas`,{ref_key:`canvasEl`,ref:r,class:`demo-morph__canvas`},null,512),Z(Za,{name:`demo-btn`},{default:_n(()=>[f.value?(J(),Y(`div`,{key:0,class:I([`demo-morph__btn`,{"is-pressing":p.value}]),"aria-hidden":`true`},[...t[0]||=[X(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12 2.5l2 6.5 6.5 2-6.5 2-2 6.5-2-6.5-6.5-2 6.5-2z`,stroke:`currentColor`,"stroke-width":`1.8`,"stroke-linejoin":`round`})],-1),X(`span`,null,`变形`,-1)]],2)):Q(``,!0)]),_:1})]))}}),[[`__scopeId`,`data-v-3aa798d3`]]),al={class:`mode-picker`},ol={class:`mode-picker__grid`},sl=Sc(ir({__name:`ModePicker`,props:{paths:{},aspectRatio:{}},emits:[`pick`],setup(e,{emit:t}){let n=t;return(t,r)=>(J(),Y(`div`,al,[r[6]||=X(`h1`,{class:`mode-picker__title`},`选择变形模式`,-1),r[7]||=X(`p`,{class:`mode-picker__hint`},`之后可在设置中随时切换`,-1),X(`div`,ol,[X(`button`,{class:`mode-card`,type:`button`,onClick:r[0]||=e=>n(`pick`,`auto`)},[Z(il,{mode:`auto`,paths:e.paths,"aspect-ratio":e.aspectRatio},null,8,[`paths`,`aspect-ratio`]),r[2]||=X(`span`,{class:`mode-card__name`},`自动变形`,-1),r[3]||=X(`span`,{class:`mode-card__desc`},`每画一笔，松手后自动变成图案`,-1)]),X(`button`,{class:`mode-card`,type:`button`,onClick:r[1]||=e=>n(`pick`,`manual`)},[Z(il,{mode:`manual`,paths:e.paths,"aspect-ratio":e.aspectRatio},null,8,[`paths`,`aspect-ratio`]),r[4]||=X(`span`,{class:`mode-card__name`},`手动变形`,-1),r[5]||=X(`span`,{class:`mode-card__desc`},`笔画保持原样，用工具栏变形按钮一起变形`,-1)])])]))}}),[[`__scopeId`,`data-v-05a1da69`]]),cl=Sc(ir({__name:`ModePickerView`,setup(e){let{step:t,currentShape:n,onChooseMode:r}=Rc();return(e,i)=>(J(),ea(Za,{name:`welcome`},{default:_n(()=>[K(t)===`mode`?(J(),ea(sl,{key:0,paths:K(n).paths,"aspect-ratio":K(n).aspectRatio,onPick:K(r)},null,8,[`paths`,`aspect-ratio`,`onPick`])):Q(``,!0)]),_:1}))}}),[[`__scopeId`,`data-v-74d355ec`]]),ll={entries:[{time:`2026-08-23 18:14`,text:`B站App内无法下载图案添加提示
工具栏色盘末尾增加万能颜色
修复自定义图案(创建/导入)放到首位
修复图案文字不居中`},{time:`2026-08-22 22:30`,text:`最小扁度默认值改为 10%
设置新增恢复默认设置`},{time:`2026-08-22 16:04`,text:`新增小伙伴投稿图案：牛来、胆子肥肥嘟、小桃苦呀西、乐乐、荷兰球、芬兰球`},{time:`2026-08-20 15:28`,text:`新增镜像图案功能
新增画布缩放/平移功能，支持双指与滚轮缩放
新增自定义图案模式平滑笔迹设置
修复导入SVG，避免直接打开相册`},{time:`2026-08-19 01:47`,text:`新增小伙伴投稿图案：塔菲、奶蛙大笑、Among Us、瑞克摇、月薪喵、豆包、诗歌剧、白子`},{time:`2026-08-18 12:50`,text:`新增小伙伴投稿图案：奶蛙、大狗叫、Miku
更改展示顺序最新的放前面`},{time:`2026-08-18 00:47`,text:`新增小伙伴投稿图案：耄耋、鼠鼠
修复最小扁度错误计算的问题
新增笔画粗细设置`},{time:`2026-08-17 22:00`,text:`新增小伙伴投稿图案：一键三连、小黑子、啥子、异环、哔哩APP
优化了一下抽屉滚动条`},{time:`2026-08-17 01:54`,text:`新增小伙伴投稿图案：Teto梨、悲伤蛋小黄`},{time:`2026-08-16 02:55`,text:`修复：
- 分享时移动端无法复制代码；
- 导入图案出现异常路径;`},{time:`2026-08-16 02:11`,text:`杂项：
- 新增小伙伴投稿图案：皮卡丘、基金会；
- 画画新增手动变形模式；
- 工具栏新增撤销功能(按钮 / Ctrl+Z / Command+Z)；
- 工具栏移除万能颜色；

引导界面更新：
- 新增切换图案功能和自定义选项；
- 选图的基础上增加选择模式步骤；
- 只有第一次打开才显示引导界面；

新增设置页面：
- 工具栏增加设置入口；
- 支持变形模式切换、色盘配置 、最小扁度调整；
- 作者信息移入设置面板；

图案选择面板更新：
- 新增图案导入功能
- 新增自定义图案功能
- 通过投稿卡片可访问小伙伴主页`},{time:`2026-08-13 14:19`,text:`新增四种图案支持`},{time:`2026-08-04 11:20`,text:`添加底部工具栏`},{time:`2026-08-02 23:46`,text:`画一笔自动变成奶龙`}]},ul=[`aria-label`],dl={class:`ios-modal__body`},fl={key:0,class:`ios-modal__title`},pl={key:1,class:`ios-modal__message`},ml={class:`ios-modal__content`},hl={class:`ios-modal__actions`},gl={key:1,class:`ios-modal__v-sep`,"aria-hidden":`true`},_l=Sc(ir({inheritAttrs:!1,__name:`IosModal`,props:{open:{type:Boolean},title:{default:``},message:{default:``},confirmText:{default:`确定`},cancelText:{default:`取消`},danger:{type:Boolean,default:!1},hideCancel:{type:Boolean,default:!1}},emits:[`close`,`confirm`],setup(e,{emit:t}){let n=t;function r(e){e.key===`Escape`&&n(`close`)}return yr(()=>window.addEventListener(`keydown`,r)),Sr(()=>window.removeEventListener(`keydown`,r)),(t,r)=>(J(),ea(Bn,{to:`body`},[Z(Za,{name:`ios-modal`},{default:_n(()=>[e.open?(J(),Y(`div`,pa({key:0},t.$attrs,{class:`ios-modal-mask`,onClick:r[2]||=Zo(e=>n(`close`),[`self`])}),[X(`div`,{class:`ios-modal`,role:`alertdialog`,"aria-modal":`true`,"aria-label":e.title||void 0},[X(`div`,dl,[e.title?(J(),Y(`h3`,fl,R(e.title),1)):Q(``,!0),e.message?(J(),Y(`p`,pl,R(e.message),1)):Q(``,!0),X(`div`,ml,[Ar(t.$slots,`default`,{},void 0,!0)])]),X(`div`,hl,[e.hideCancel?Q(``,!0):(J(),Y(`button`,{key:0,class:`ios-modal__btn ios-modal__btn--cancel`,type:`button`,onClick:r[0]||=e=>n(`close`)},R(e.cancelText),1)),e.hideCancel?Q(``,!0):(J(),Y(`span`,gl)),X(`button`,{class:I([`ios-modal__btn ios-modal__btn--confirm`,{"ios-modal__btn--danger":e.danger}]),type:`button`,onClick:r[1]||=e=>n(`confirm`)},R(e.confirmText),3)])],8,ul)],16)):Q(``,!0)]),_:3})]))}}),[[`__scopeId`,`data-v-a9ef8a6c`]]),vl=[`aria-label`],yl={class:`sheet__header`},bl={class:`sheet__title`},xl={class:`sheet__body`},Sl=Sc(ir({__name:`SheetPanel`,props:{open:{type:Boolean},title:{},ios:{type:Boolean}},emits:[`close`],setup(e,{emit:t}){let n=t;function r(e){e.key===`Escape`&&n(`close`)}return yr(()=>window.addEventListener(`keydown`,r)),Sr(()=>window.removeEventListener(`keydown`,r)),(t,r)=>(J(),ea(Bn,{to:`body`},[Z(Za,{name:`sheet`},{default:_n(()=>[e.open?(J(),Y(`div`,{key:0,class:`sheet`,onClick:r[2]||=e=>n(`close`)},[X(`div`,{class:I([`sheet__panel`,{"sheet__panel--ios":e.ios}]),role:`dialog`,"aria-modal":`true`,"aria-label":e.title,onClick:r[1]||=Zo(()=>{},[`stop`])},[X(`div`,yl,[X(`span`,bl,R(e.title),1),X(`button`,{class:`sheet__close`,type:`button`,"aria-label":`关闭`,onClick:r[0]||=e=>n(`close`)},[...r[3]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M6 6l12 12M18 6L6 18`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1)]])]),X(`div`,xl,[Ar(t.$slots,`default`,{},void 0,!0)])],10,vl)])):Q(``,!0)]),_:3})]))}}),[[`__scopeId`,`data-v-ad7fe048`]]),Cl={class:`ios-list`},wl={class:`ios-group`},Tl={class:`ios-group__card`},El={key:0,class:`ios-cell__check`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},Dl={key:0,class:`ios-cell__check`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},Ol={class:`ios-group`},kl={class:`ios-group__card`},Al={class:`ios-cell`},jl={class:`settings__palette`},Ml=[`value`,`onInput`],Nl=[`onClick`],Pl={class:`ios-group`},Fl={class:`ios-group__card`},Il={class:`ios-cell`},Ll={class:`settings__slider`},Rl=[`value`],zl={class:`settings__slider-value`},Bl={class:`ios-group`},Vl={class:`ios-group__card`},Hl={class:`ios-cell`},Ul={class:`settings__slider`},Wl=[`value`],Gl={class:`settings__slider-value`},Kl={class:`ios-cell`},ql={class:`ios-group`},Jl={class:`ios-group__card`},Yl=[`aria-checked`],Xl={class:`ios-cell`},Zl={class:`settings__slider`},Ql=[`value`],$l={class:`settings__slider-value`},eu={class:`ios-group`},tu={class:`ios-group__card`},nu=[`href`],ru={class:`ios-cell__text`},iu={class:`ios-cell__desc`},au={class:`ios-group`},ou={class:`ios-group__card`},su={class:`changelog-cell__text`},cu={class:`changelog-cell__time`},lu={key:0,class:`ios-cell__separator`,"aria-hidden":`true`},uu=1,du=12,fu=3,pu=Sc(ir({__name:`SettingsSheet`,props:{open:{type:Boolean},mode:{},palette:{},minAspect:{},strokeWidth:{},smoothEnabled:{type:Boolean},smoothStrength:{}},emits:[`close`,`modeChange`,`paletteChange`,`minAspectChange`,`strokeWidthChange`,`smoothEnabledChange`,`smoothStrengthChange`,`reset`],setup(e,{emit:t}){let n=e,r=t,i=$(()=>{let e=[];return n.palette.forEach((t,n)=>{Pc(t)||e.push({color:t,index:n})}),e});function a(e,t){let i=t.target,a=n.palette.slice();a[e]=i.value,r(`paletteChange`,a)}let o=[`#000000`,`#1e88e5`,`#e53935`,`#43a047`,`#f9a825`,`#8e24aa`,`#fb8c00`,`#00acc1`];function s(){let e=new Set(n.palette),t=o.find(t=>!e.has(t))??`#000000`;r(`paletteChange`,[...n.palette,t])}function c(e){if(i.value.length<=1)return;let t=n.palette.slice();t.splice(e,1),r(`paletteChange`,t)}function l(e){let t=e.target;r(`minAspectChange`,Number(t.value))}let u=G(!1);function d(){u.value=!0}function f(){u.value=!1,r(`reset`)}function p(e){let t=e.target;r(`strokeWidthChange`,Number(t.value))}function m(e){let t=e.target;r(`smoothStrengthChange`,Number(t.value))}let h=G(null);function g(){let e=h.value;if(!e)return;let t=e.getContext(`2d`);if(!t)return;let r=e.width,i=e.height;t.clearRect(0,0,r,i),t.strokeStyle=`#000000`,t.lineWidth=n.strokeWidth??fu,t.lineCap=`round`,t.beginPath(),t.moveTo(16,i/2),t.lineTo(r-16,i/2),t.stroke()}Tn(()=>[n.open,n.strokeWidth],async([e])=>{e&&(await an(),g())}),yr(async()=>{n.open&&(await an(),g())});let _=ll.entries;return(t,n)=>(J(),Y(q,null,[Z(Sl,{open:e.open,title:`设置`,ios:``,onClose:n[3]||=e=>r(`close`)},{default:_n(()=>[X(`div`,Cl,[X(`section`,wl,[n[10]||=X(`h3`,{class:`ios-group__title`},`变形模式`,-1),X(`div`,Tl,[X(`button`,{class:I([`ios-cell`,{"is-selected":e.mode===`auto`}]),type:`button`,onClick:n[0]||=e=>r(`modeChange`,`auto`)},[n[6]||=X(`span`,{class:`ios-cell__text`},[X(`span`,{class:`ios-cell__label`},`自动变形`),X(`span`,{class:`ios-cell__desc`},`每画一笔，松手后自动变成图案`)],-1),e.mode===`auto`?(J(),Y(`svg`,El,[...n[5]||=[X(`path`,{d:`M4 12l5 5L20 6`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},null,-1)]])):Q(``,!0)],2),n[9]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),X(`button`,{class:I([`ios-cell`,{"is-selected":e.mode===`manual`}]),type:`button`,onClick:n[1]||=e=>r(`modeChange`,`manual`)},[n[8]||=X(`span`,{class:`ios-cell__text`},[X(`span`,{class:`ios-cell__label`},`手动变形`),X(`span`,{class:`ios-cell__desc`},`笔画保持原样，用工具栏变形按钮一起变形`)],-1),e.mode===`manual`?(J(),Y(`svg`,Dl,[...n[7]||=[X(`path`,{d:`M4 12l5 5L20 6`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},null,-1)]])):Q(``,!0)],2)])]),X(`section`,Ol,[n[14]||=X(`h3`,{class:`ios-group__title`},`色盘`,-1),X(`div`,kl,[X(`div`,Al,[n[11]||=X(`span`,{class:`ios-cell__label`},`颜色`,-1),X(`div`,jl,[(J(!0),Y(q,null,kr(i.value,(e,t)=>(J(),Y(`div`,{key:t,class:`settings__swatch`,style:N({background:e.color}),title:`点击修改颜色`},[X(`input`,{type:`color`,value:e.color,onInput:t=>a(e.index,t)},null,40,Ml),i.value.length>1?(J(),Y(`button`,{key:0,class:`settings__swatch-remove`,type:`button`,"aria-label":`移除颜色`,onClick:t=>c(e.index)},` × `,8,Nl)):Q(``,!0)],4))),128)),X(`button`,{class:`settings__swatch-add`,type:`button`,"aria-label":`添加颜色`,onClick:s},` + `)])]),n[12]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),n[13]||=X(`div`,{class:`ios-cell ios-cell--hint`},[X(`span`,{class:`ios-cell__desc`},`点击颜色可以修改，数量不限`)],-1)])]),X(`section`,Pl,[n[18]||=X(`h3`,{class:`ios-group__title`},`最小扁度`,-1),X(`div`,Fl,[X(`div`,Il,[n[15]||=X(`span`,{class:`ios-cell__label`},`扁度`,-1),X(`div`,Ll,[X(`input`,{type:`range`,min:`0`,max:`1`,step:`0.05`,value:e.minAspect,style:N({"--fill":`${Math.round(e.minAspect*100)}%`}),"aria-label":`最小扁度`,onInput:l},null,44,Rl),X(`span`,zl,R(Math.round(e.minAspect*100))+`%`,1)])]),n[16]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),n[17]||=X(`div`,{class:`ios-cell ios-cell--hint`},[X(`span`,{class:`ios-cell__desc`},`数值越大越遵循图案原始比例`)],-1)])]),X(`section`,Bl,[n[22]||=X(`h3`,{class:`ios-group__title`},`笔画粗细`,-1),X(`div`,Vl,[X(`div`,Hl,[n[19]||=X(`span`,{class:`ios-cell__label`},`粗细`,-1),X(`div`,Ul,[X(`input`,{type:`range`,min:uu,max:du,step:`0.5`,value:e.strokeWidth??fu,style:N({"--fill":`${Math.round(((e.strokeWidth??fu)-uu)/11*100)}%`}),"aria-label":`笔画粗细`,onInput:p},null,44,Wl),X(`span`,Gl,R((e.strokeWidth??fu).toFixed(1))+`px`,1)])]),n[21]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),X(`div`,Kl,[n[20]||=X(`span`,{class:`ios-cell__label`},`预览`,-1),X(`canvas`,{ref_key:`previewCanvas`,ref:h,class:`settings__preview`,width:`200`,height:`32`,"aria-hidden":`true`},null,512)])])]),X(`section`,ql,[n[27]||=X(`h3`,{class:`ios-group__title`},`笔画平滑`,-1),X(`div`,Jl,[X(`button`,{class:`ios-cell`,type:`button`,role:`switch`,"aria-checked":e.smoothEnabled,onClick:n[2]||=t=>r(`smoothEnabledChange`,!e.smoothEnabled)},[n[24]||=X(`span`,{class:`ios-cell__text`},[X(`span`,{class:`ios-cell__label`},`平滑笔迹`),X(`span`,{class:`ios-cell__desc`},`修正自定义图案绘制时的手抖抖动`)],-1),X(`span`,{class:I([`settings__toggle`,{"is-on":e.smoothEnabled}]),"aria-hidden":`true`},[...n[23]||=[X(`span`,{class:`settings__toggle-knob`},null,-1)]],2)],8,Yl),e.smoothEnabled?(J(),Y(q,{key:0},[n[26]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),X(`div`,Xl,[n[25]||=X(`span`,{class:`ios-cell__label`},`强度`,-1),X(`div`,Zl,[X(`input`,{type:`range`,min:`0`,max:`1`,step:`0.05`,value:e.smoothStrength,style:N({"--fill":`${Math.round(e.smoothStrength*100)}%`}),"aria-label":`平滑强度`,onInput:m},null,44,Ql),X(`span`,$l,R(Math.round(e.smoothStrength*100))+`%`,1)])])],64)):Q(``,!0)])]),X(`section`,{class:`ios-group`},[X(`div`,{class:`ios-group__card`},[X(`button`,{class:`ios-cell ios-cell--reset`,type:`button`,onClick:d},[...n[28]||=[X(`span`,{class:`ios-cell__label`},`恢复默认设置`,-1),X(`svg`,{class:`ios-cell__check`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M9 6l6 6-6 6`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)]])])]),X(`section`,eu,[n[31]||=X(`h3`,{class:`ios-group__title`},`关于`,-1),X(`div`,tu,[X(`a`,{class:`ios-cell`,href:`https://space.bilibili.com/${K(Vs)}`,target:`_blank`,rel:`noopener noreferrer`},[X(`span`,ru,[n[29]||=X(`span`,{class:`ios-cell__label`},`作者`,-1),X(`span`,iu,`有Bug或者想新增图案请联系`+R(K(Bs)),1)]),n[30]||=X(`svg`,{class:`ios-cell__check`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M9 6l6 6-6 6`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)],8,nu)])]),X(`section`,au,[n[32]||=X(`h3`,{class:`ios-group__title`},`更新日志`,-1),X(`div`,ou,[(J(!0),Y(q,null,kr(K(_),(e,t)=>(J(),Y(`div`,{key:e.time,class:`changelog-cell`},[X(`span`,su,R(e.text),1),X(`span`,cu,R(e.time),1),t<K(_).length-1?(J(),Y(`div`,lu)):Q(``,!0)]))),128))])])])]),_:1},8,[`open`]),Z(_l,{open:u.value,title:`恢复默认设置`,message:`将把变形模式、色盘、笔触颜色、扁度、粗细、平滑等设置全部恢复为默认值。`,"confirm-text":`恢复`,danger:``,onClose:n[4]||=e=>u.value=!1,onConfirm:f},null,8,[`open`])],64))}}),[[`__scopeId`,`data-v-a47b9286`]]),mu=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,hu={class:`shape-grid`},gu=[`innerHTML`],_u=[`innerHTML`],vu=[`aria-label`,`onClick`,`onKeydown`],yu=[`aria-label`,`title`,`onClick`],bu=[`href`,`title`,`aria-label`],xu=[`aria-label`,`title`,`onClick`],Su=[`aria-label`,`title`,`onClick`],Cu=[`innerHTML`],wu={class:`shape-item__name`},Tu=Sc(ir({__name:`ShapeSheet`,props:{open:{type:Boolean},shapeId:{},orderedShapes:{}},emits:[`close`,`select`,`enterCustom`,`deleteCustom`,`shareCustom`,`importCustom`,`mirror`,`mirrorCustom`],setup(e,{emit:t}){let n=t;function r(e){n(`select`,e),n(`close`)}function i(){n(`enterCustom`),n(`close`)}function a(e){e.kind===`custom`?n(`mirrorCustom`,e.customId):n(`mirror`,e.orderKey)}function o(e,t=26){let n=e.match(/viewBox="[\d.\-]+\s+[\d.\-]+\s+([\d.\-]+)/),r=1.5*(n?parseFloat(n[1]):500)/t;return e.replace(/stroke-width\s*:\s*[\d.]+\s*;?/g,``).replace(/<svg([^>]*)>/,(e,t)=>`<svg${t} stroke-width="${r.toFixed(1)}">`)}function s(e){return`https://space.bilibili.com/${e}`}let c=mu.replace(/stroke:\s*#000/gi,`stroke: currentColor`);return(t,l)=>(J(),ea(Sl,{open:e.open,title:`选择图案`,onClose:l[2]||=e=>n(`close`)},{default:_n(()=>[X(`div`,hu,[X(`button`,{class:`shape-item shape-item--custom-entry`,type:`button`,title:`画画保存为自定义图案`,onClick:i},[X(`span`,{class:`shape-item__preview`,innerHTML:o(K(Us),80)},null,8,gu),l[3]||=X(`span`,{class:`shape-item__name`},`自定义图案`,-1)]),X(`button`,{class:`shape-item shape-item--import`,type:`button`,title:`导入图案（粘贴代码或 SVG 文件）`,onClick:l[0]||=e=>n(`importCustom`)},[X(`span`,{class:`shape-item__preview`,innerHTML:K(c)},null,8,_u),l[4]||=X(`span`,{class:`shape-item__name`},`导入图案`,-1)]),(J(!0),Y(q,null,kr(e.orderedShapes,t=>(J(),Y(`div`,{key:t.orderKey,class:I([`shape-item`,[t.kind===`custom`?`shape-item--custom`:``,{"is-active":e.shapeId===t.orderKey}]]),role:`button`,tabindex:`0`,"aria-label":`切换到${t.name}`,onClick:e=>r(t.orderKey),onKeydown:[$o(e=>r(t.orderKey),[`enter`]),$o(Zo(e=>r(t.orderKey),[`prevent`]),[`space`])]},[t.kind===`custom`?(J(),Y(`button`,{key:0,class:`shape-item__share`,type:`button`,"aria-label":`分享${t.name}`,title:`分享${t.name}`,onClick:Zo(e=>n(`shareCustom`,t.customId),[`stop`])},[...l[5]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7`,stroke:`currentColor`,"stroke-width":`2.2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`path`,{d:`M16 6l-4-4-4 4M12 2v13`,stroke:`currentColor`,"stroke-width":`2.2`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)]],8,yu)):Q(``,!0),t.kind===`builtin`&&t.uid?(J(),Y(`a`,{key:1,class:`shape-item__author`,href:s(t.uid),target:`_blank`,rel:`noopener noreferrer`,title:`${t.name} 投稿小伙伴主页`,"aria-label":`${t.name} 投稿小伙伴主页`,onClick:l[1]||=Zo(()=>{},[`stop`])},[...l[6]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`circle`,{cx:`12`,cy:`12`,r:`9`,stroke:`currentColor`,"stroke-width":`2.2`}),X(`path`,{d:`M12 11v5`,stroke:`currentColor`,"stroke-width":`2.2`,"stroke-linecap":`round`}),X(`circle`,{cx:`12`,cy:`8`,r:`1.4`,fill:`currentColor`})],-1)]],8,bu)):Q(``,!0),X(`button`,{class:`shape-item__mirror`,type:`button`,"aria-label":`镜像${t.name}`,title:`生成${t.name}的镜像图案`,onClick:Zo(e=>a(t),[`stop`])},[...l[7]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`rect`,{x:`11`,y:`2`,width:`2`,height:`20`,fill:`currentColor`}),X(`path`,{d:`M4 8 L9 5 L9 19 L4 16 Z`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`}),X(`path`,{d:`M15 5 L20 8 L20 16 L15 19 Z`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`})],-1)]],8,xu),t.kind===`custom`?(J(),Y(`button`,{key:2,class:`shape-item__delete`,type:`button`,"aria-label":`删除${t.name}`,title:`删除${t.name}`,onClick:Zo(e=>n(`deleteCustom`,t.customId),[`stop`])},[...l[8]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M6 6l12 12M18 6L6 18`,stroke:`currentColor`,"stroke-width":`2.4`,"stroke-linecap":`round`})],-1)]],8,Su)):Q(``,!0),X(`span`,{class:`shape-item__preview`,innerHTML:o(t.previewSvg,80)},null,8,Cu),X(`span`,wu,R(t.name),1)],42,vu))),128))])]),_:1},8,[`open`]))}}),[[`__scopeId`,`data-v-2bfbe901`]]),Eu=[`title`],Du=[`value`],Ou=[`aria-label`,`onClick`],ku=[`disabled`],Au=[`disabled`],ju={key:1,class:`toolbar__custom-actions`},Mu=Sc(ir({__name:`Toolbar`,props:{strokeColor:{},shapeId:{},mode:{},canUndo:{type:Boolean},canMorph:{type:Boolean},palette:{},minAspect:{},strokeWidth:{},smoothEnabled:{type:Boolean},smoothStrength:{},customizing:{type:Boolean},hasCustomShape:{type:Boolean},orderedShapes:{}},emits:[`colorChange`,`shapeChange`,`customShape`,`saveCustom`,`cancelCustom`,`deleteCustom`,`shareCustom`,`importCustom`,`mirror`,`mirrorCustom`,`clear`,`undo`,`modeChange`,`applyMorph`,`paletteChange`,`minAspectChange`,`strokeWidthChange`,`smoothEnabledChange`,`smoothStrengthChange`,`reset`],setup(e,{emit:t}){let n=e,r=t,i=G(!1),a=$(()=>Fc(n.palette,n.strokeColor));function o(e){let t=e.target;r(`colorChange`,t.value)}let s=G(!1);function c(){i.value=!i.value,s.value=!1}function l(){s.value=!s.value,i.value=!1}function u(e){r(`shapeChange`,e),i.value=!1}function d(){r(`customShape`),i.value=!1}return(t,n)=>(J(),Y(`div`,{class:I([`toolbar`,{"is-customizing":e.customizing}])},[(J(!0),Y(q,null,kr(e.palette,(t,n)=>(J(),Y(q,{key:n},[K(Pc)(t)?(J(),Y(`label`,{key:0,class:I([`toolbar__swatch toolbar__swatch--universal`,{"is-active":a.value}]),style:N(a.value?{background:e.strokeColor}:void 0),title:a.value?`万能颜色 ${e.strokeColor}`:`万能颜色`},[X(`input`,{type:`color`,value:a.value?e.strokeColor:`#000000`,"aria-label":`万能颜色`,onInput:o},null,40,Du)],14,Eu)):(J(),Y(`button`,{key:1,class:I([`toolbar__swatch`,{"is-active":t===e.strokeColor}]),type:`button`,style:N({background:t}),"aria-label":`笔触颜色 ${t}`,onClick:e=>r(`colorChange`,t)},null,14,Ou))],64))),128)),n[24]||=X(`span`,{class:`toolbar__divider`,"aria-hidden":`true`},null,-1),X(`button`,{class:`toolbar__history`,type:`button`,disabled:!e.canUndo,"aria-label":`撤销`,title:`撤销 (Ctrl/Cmd+Z)`,onClick:n[0]||=e=>r(`undo`)},[...n[19]||=[X(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M9 14L4 9l5-5`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`path`,{d:`M20 20v-7a4 4 0 0 0-4-4H4`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)]],8,ku),X(`button`,{class:I([`toolbar__shape-btn`,{"is-open":i.value}]),type:`button`,title:`切换图案`,onClick:c},[...n[20]||=[X(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[X(`path`,{d:`M12 4L18 12H6L12 4Z`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linejoin":`round`}),X(`circle`,{cx:`7`,cy:`18`,r:`3.5`,stroke:`currentColor`,"stroke-width":`1.5`}),X(`rect`,{x:`13.5`,y:`14.5`,width:`7`,height:`7`,stroke:`currentColor`,"stroke-width":`1.5`})],-1)]],2),Z(Tu,{open:i.value,"shape-id":e.shapeId,"ordered-shapes":e.orderedShapes,onClose:n[1]||=e=>i.value=!1,onSelect:u,onEnterCustom:d,onDeleteCustom:n[2]||=e=>r(`deleteCustom`,e),onShareCustom:n[3]||=e=>r(`shareCustom`,e),onImportCustom:n[4]||=e=>r(`importCustom`),onMirror:n[5]||=e=>r(`mirror`,e),onMirrorCustom:n[6]||=e=>r(`mirrorCustom`,e)},null,8,[`open`,`shape-id`,`ordered-shapes`]),X(`button`,{class:I([`toolbar__shape-btn toolbar__settings-btn`,{"is-open":s.value}]),type:`button`,title:`设置`,onClick:l},[...n[21]||=[X(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`circle`,{cx:`12`,cy:`12`,r:`3`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)]],2),Z(pu,{open:s.value,mode:e.mode,palette:e.palette,"min-aspect":e.minAspect,"stroke-width":e.strokeWidth,"smooth-enabled":e.smoothEnabled,"smooth-strength":e.smoothStrength,onClose:n[7]||=e=>s.value=!1,onModeChange:n[8]||=e=>r(`modeChange`,e),onPaletteChange:n[9]||=e=>r(`paletteChange`,e),onMinAspectChange:n[10]||=e=>r(`minAspectChange`,e),onStrokeWidthChange:n[11]||=e=>r(`strokeWidthChange`,e),onSmoothEnabledChange:n[12]||=e=>r(`smoothEnabledChange`,e),onSmoothStrengthChange:n[13]||=e=>r(`smoothStrengthChange`,e),onReset:n[14]||=e=>r(`reset`)},null,8,[`open`,`mode`,`palette`,`min-aspect`,`stroke-width`,`smooth-enabled`,`smooth-strength`]),e.mode===`manual`&&!e.customizing?(J(),Y(`button`,{key:0,class:`toolbar__shape-btn`,type:`button`,disabled:!e.canMorph,"aria-label":`变形所有笔画`,title:`变形所有笔画`,onClick:n[15]||=e=>r(`applyMorph`)},[...n[22]||=[X(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12 2.5l2 6.5 6.5 2-6.5 2-2 6.5-2-6.5-6.5-2 6.5-2z`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linejoin":`round`})],-1)]],8,Au)):Q(``,!0),n[25]||=X(`span`,{class:`toolbar__divider`,"aria-hidden":`true`},null,-1),X(`button`,{class:`toolbar__clear`,type:`button`,"aria-label":`清除画布`,title:`清除画布`,onClick:n[16]||=e=>r(`clear`)},[...n[23]||=[la(`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-989fdb4f><path d="M3 6h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-989fdb4f></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-989fdb4f></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-989fdb4f></path><path d="M10 11v6M14 11v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-989fdb4f></path></svg>`,1)]]),e.customizing?(J(),Y(`div`,ju,[X(`button`,{class:`toolbar__action toolbar__action--save`,type:`button`,onClick:n[17]||=e=>r(`saveCustom`)},` 保存 `),X(`button`,{class:`toolbar__action toolbar__action--cancel`,type:`button`,onClick:n[18]||=e=>r(`cancelCustom`)},` 取消 `)])):Q(``,!0)],2))}}),[[`__scopeId`,`data-v-989fdb4f`]]),Nu=`/always_xx/assets/show-JNA49WGu.png`,Pu={class:`app__bg`,"aria-hidden":`true`},Fu={key:0,class:`app__demo-panel`},Iu=[`src`],Lu=[`innerHTML`],Ru={class:`app__zoom`,"aria-label":`画幅缩放`},zu=[`disabled`],Bu=Sc(ir({__name:`MainView`,setup(e){let{canvasRef:t,themeColor:n,titleText:r,manualHint:i,hintText:a,hasContent:o,demoShapeSvg:s,shapeId:c,mode:l,customizing:u,zoomPercent:d,isZoomed:f,onZoomReset:p,strokeColor:m,strokeWidth:h,minAspect:g,smoothEnabled:_,smoothStrength:v,onStrokeComplete:y,onDrawStart:b,onDrawCancel:x,onHistoryChange:S,onMorphChange:C,onViewChange:w,canUndo:T,canMorph:E,palette:D,customShapes:O,orderedShapes:k,onColorChange:A,onChooseShape:j,onEnterCustom:ee,onSaveCustom:te,onCancelCustom:ne,onDeleteCustom:M,onShareCustom:re,onImportCustom:ie,onMirrorBuiltin:ae,onMirrorCustom:oe,onClear:se,onUndo:ce,onModeChange:P,onApplyMorph:F,onPaletteChange:le,onMinAspectChange:L,onStrokeWidthChange:ue,onSmoothEnabledChange:de,onSmoothStrengthChange:fe,resetSettings:pe}=Rc();return(e,z)=>(J(),Y(q,null,[X(`div`,Pu,[X(`h1`,{class:`app__bg-title`,style:N({color:K(n)})},R(K(r)),5),X(`p`,{class:`app__bg-hint`,style:N({color:K(n)})},[K(l)===`manual`&&!K(u)?(J(),Y(q,{key:0},[ca(R(K(i).prefix)+` `,1),z[1]||=X(`svg`,{class:`app__bg-hint-icon`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12 2.5l2 6.5 6.5 2-6.5 2-2 6.5-2-6.5-6.5-2 6.5-2z`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linejoin":`round`})],-1),ca(` `+R(K(i).suffix),1)],64)):(J(),Y(q,{key:1},[ca(R(K(a)),1)],64))],4),Z(Za,{name:`demo-fade`},{default:_n(()=>[K(o)?Q(``,!0):(J(),Y(`div`,Fu,[X(`img`,{class:`app__demo-left`,src:K(Nu),alt:``},null,8,Iu),Z(Za,{name:`demo-shape`,mode:`out-in`},{default:_n(()=>[(J(),Y(`div`,{key:K(c),class:`app__demo-right`,innerHTML:K(s)},null,8,Lu))]),_:1})]))]),_:1})]),X(`div`,Ru,[X(`span`,{class:I([`app__zoom-pct`,{"is-zoomed":K(f)}])},R(K(d))+`%`,3),X(`button`,{class:`app__zoom-reset`,type:`button`,disabled:!K(f),"aria-label":`还原为 100%`,title:`还原为 100%`,onClick:z[0]||=(...e)=>K(p)&&K(p)(...e)},[...z[2]||=[la(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-adbb9097><path d="M9 4H4v5" data-v-adbb9097></path><path d="M15 4h5v5" data-v-adbb9097></path><path d="M9 20H4v-5" data-v-adbb9097></path><path d="M15 20h5v-5" data-v-adbb9097></path></svg>`,1)]],8,zu)]),Z(Cc,{ref_key:`canvasRef`,ref:t,"stroke-color":K(m),"stroke-width":K(h),"min-aspect":K(g),"smooth-enabled":K(u)&&K(_),"smooth-strength":K(v),onStrokeComplete:K(y),onDrawStart:K(b),onDrawCancel:K(x),onHistoryChange:K(S),onMorphChange:K(C),onViewChange:K(w)},null,8,[`stroke-color`,`stroke-width`,`min-aspect`,`smooth-enabled`,`smooth-strength`,`onStrokeComplete`,`onDrawStart`,`onDrawCancel`,`onHistoryChange`,`onMorphChange`,`onViewChange`]),Z(Mu,{"stroke-color":K(m),"shape-id":K(c),mode:K(l),"can-undo":K(T),"can-morph":K(E),palette:K(D),"min-aspect":K(g),"stroke-width":K(h),"smooth-enabled":K(_),"smooth-strength":K(v),customizing:K(u),"has-custom-shape":K(O).length>0,"ordered-shapes":K(k),onColorChange:K(A),onShapeChange:K(j),onCustomShape:K(ee),onSaveCustom:K(te),onCancelCustom:K(ne),onDeleteCustom:K(M),onShareCustom:K(re),onImportCustom:K(ie),onMirror:K(ae),onMirrorCustom:K(oe),onClear:K(se),onUndo:K(ce),onModeChange:K(P),onApplyMorph:K(F),onPaletteChange:K(le),onMinAspectChange:K(L),onStrokeWidthChange:K(ue),onSmoothEnabledChange:K(de),onSmoothStrengthChange:K(fe),onReset:K(pe)},null,8,`stroke-color.shape-id.mode.can-undo.can-morph.palette.min-aspect.stroke-width.smooth-enabled.smooth-strength.customizing.has-custom-shape.ordered-shapes.onColorChange.onShapeChange.onCustomShape.onSaveCustom.onCancelCustom.onDeleteCustom.onShareCustom.onImportCustom.onMirror.onMirrorCustom.onClear.onUndo.onModeChange.onApplyMorph.onPaletteChange.onMinAspectChange.onStrokeWidthChange.onSmoothEnabledChange.onSmoothStrengthChange.onReset`.split(`.`))],64))}}),[[`__scopeId`,`data-v-adbb9097`]]),Vu={key:0,class:`steps`,"aria-label":`引导步骤`},Hu=Sc(ir({__name:`StepsIndicator`,props:{step:{}},setup(e){return(t,n)=>e.step===`main`?Q(``,!0):(J(),Y(`div`,Vu,[X(`span`,{class:I([`steps__item`,{"is-active":e.step===`shape`,"is-done":e.step===`mode`}])},[...n[0]||=[X(`span`,{class:`steps__num`},`1`,-1),X(`span`,{class:`steps__text`},`选择图案`,-1)]],2),n[2]||=X(`span`,{class:`steps__line`,"aria-hidden":`true`},null,-1),X(`span`,{class:I([`steps__item`,{"is-active":e.step===`mode`}])},[...n[1]||=[X(`span`,{class:`steps__num`},`2`,-1),X(`span`,{class:`steps__text`},`选择模式`,-1)]],2)]))}}),[[`__scopeId`,`data-v-0d5c2ef8`]]),Uu={class:`form-field`},Wu={class:`form-field`},Gu=[`title`],Ku=[`value`],qu=Sc(ir({__name:`SaveCustomDialog`,props:{open:{type:Boolean},initialName:{default:`我的图案`},initialColor:{default:`#000000`}},emits:[`close`,`confirm`],setup(e,{emit:t}){let n=e,r=t,i=G(``),a=G(`#000000`);Tn(()=>n.open,e=>{e&&(i.value=n.initialName,a.value=n.initialColor)});function o(e){a.value=e.target.value}function s(){r(`confirm`,{name:i.value.trim()||`我的图案`,themeColor:a.value.trim()||`#000000`})}return(t,n)=>(J(),ea(_l,{open:e.open,title:`保存自定义图案`,message:`给它起个名字，选择主题色，之后可在图案列表中找到它`,"confirm-text":`保存`,onClose:n[1]||=e=>r(`close`),onConfirm:s},{default:_n(()=>[X(`div`,Uu,[n[2]||=X(`label`,{class:`form-field__label`,for:`save-name`},`名字`,-1),vn(X(`input`,{id:`save-name`,"onUpdate:modelValue":n[0]||=e=>i.value=e,class:`form-field__control`,type:`text`,maxlength:`12`,placeholder:`输入图案名字`,autofocus:``,onKeydown:$o(s,[`enter`])},null,544),[[Jo,i.value]])]),X(`div`,Wu,[n[3]||=X(`label`,{class:`form-field__label`,for:`save-color`},`主题色`,-1),X(`label`,{class:`form-field__control form-field__picker`,style:N({background:a.value}),title:`选择主题色 ${a.value}`},[X(`input`,{id:`save-color`,type:`color`,value:a.value,"aria-label":`选择主题色`,onInput:o},null,40,Ku)],12,Gu)])]),_:1},8,[`open`]))}}),[[`__scopeId`,`data-v-77d24fc5`]]),Ju=`saveImageToAlbum`;async function Yu(){let e=window.toy;if(!e||typeof e.isSupport!=`function`)return!1;try{return await e.isSupport(Ju)}catch{return!1}}var Xu={class:`share-code-box`},Zu={class:`share-code-box__bar`,"aria-hidden":`true`},Qu={class:`share-code-box__name`},$u={class:`share-code-box__count`},ed=[`value`],td={key:0,class:`share-tip share-tip--warn`},nd={class:`share-actions`},rd={key:1,class:`share-tip share-tip--warn`},id=5e3,ad=Sc(ir({__name:`ShareCustomDialog`,props:{open:{type:Boolean},shape:{}},emits:[`close`,`confirm`],setup(e,{emit:t}){let n=e,r=t,i=G(!1),a=G(!1),o=G(!1),s=G(!1);yr(async()=>{o.value=await Yu()});async function c(e){if(navigator.clipboard&&typeof navigator.clipboard.writeText==`function`)try{return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.top=`0`,t.style.left=`-9999px`,t.style.opacity=`0`,document.body.appendChild(t);let n=document.getSelection(),r=n&&n.rangeCount>0?n.getRangeAt(0):null;t.select(),t.setSelectionRange(0,t.value.length);let i=document.execCommand(`copy`);return document.body.removeChild(t),r&&n&&(n.removeAllRanges(),n.addRange(r)),i}catch{return!1}}let l=$(()=>n.shape?.name??`自定义图案`),u=$(()=>n.shape?d(n.shape):``);function d(e){let t={name:e.name,version:e.version,themeColor:e.themeColor,aspectRatio:e.aspectRatio,paths:e.paths.map(e=>e.map(e=>({x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3})))};return JSON.stringify(t)}async function f(){await c(u.value)?(i.value=!0,a.value=!1):(i.value=!1,a.value=!0),setTimeout(()=>{i.value=!1,a.value=!1},2e3)}async function p(){if(!n.shape)return;if(o.value){s.value=!0,setTimeout(()=>s.value=!1,3e3);return}let e=Nc(n.shape.paths),t=new Blob([e],{type:`image/svg+xml`}),r=URL.createObjectURL(t),i=document.createElement(`a`);i.href=r,i.download=`${n.shape.name}.svg`,i.click(),URL.revokeObjectURL(r)}return(t,n)=>(J(),ea(_l,{open:e.open,title:`分享自定义图案`,message:`「${l.value}」的代码，可复制发给朋友，或下载为 SVG 文件`,"confirm-text":`完成`,"hide-cancel":``,class:`share-dialog`,onClose:n[1]||=e=>r(`close`),onConfirm:n[2]||=e=>r(`confirm`)},{default:_n(()=>[X(`div`,Xu,[X(`div`,Zu,[n[3]||=X(`span`,{class:`share-code-box__dot`},null,-1),n[4]||=X(`span`,{class:`share-code-box__dot`},null,-1),n[5]||=X(`span`,{class:`share-code-box__dot`},null,-1),X(`span`,Qu,R(l.value)+`.json`,1),X(`span`,$u,R(u.value.length)+` 字符`,1)]),X(`textarea`,{class:`share-code`,value:u.value,readonly:``,rows:`6`,spellcheck:`false`,"aria-label":`分享代码`,onFocus:n[0]||=e=>e.target.select()},null,40,ed)]),u.value.length>id?(J(),Y(`p`,td,` 代码较长（`+R(u.value.length)+` 字符），建议下载 SVG 分享而非直接复制 `,1)):Q(``,!0),X(`div`,nd,[X(`button`,{class:`share-actions__btn`,type:`button`,onClick:f},[n[6]||=X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`rect`,{x:`9`,y:`9`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,"stroke-width":`2`}),X(`path`,{d:`M5 15V5a2 2 0 0 1 2-2h10`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1),ca(` `+R(i.value?`已复制`:a.value?`复制失败，请长按代码`:`复制代码`),1)]),X(`button`,{class:`share-actions__btn share-actions__btn--primary`,type:`button`,onClick:p},[...n[7]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12 3v12m0 0l-5-5m5 5l5-5`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`path`,{d:`M5 21h14`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1),ca(` 下载SVG `,-1)]])]),s.value?(J(),Y(`p`,rd,` B站 App 内无法直接下载 SVG 文件，请复制上方代码分享，或在浏览器中绘制图案 `)):Q(``,!0)]),_:1},8,[`open`,`message`]))}}),[[`__scopeId`,`data-v-02d0bd46`]]),od={class:`import-actions`},sd={class:`import-btn import-file`,type:`button`},cd={class:`form-field`},ld={class:`form-field`},ud=[`title`],dd=[`value`],fd=Sc(ir({__name:`ImportCustomDialog`,props:{open:{type:Boolean}},emits:[`close`,`confirm`],setup(e,{emit:t}){let n=e,r=t,i=G(``),a=G(``),o=G(`#000000`),s=G(``),c=G(null),l=G(``);Tn(()=>n.open,e=>{e&&(i.value=``,a.value=``,o.value=`#000000`,s.value=``,c.value=null,l.value=``)});let u=$(()=>s.value?s.value:l.value?`已选择文件：${l.value}`:c.value?`已识别图案：${c.value.name}`:`还没有导入任何图案`);function d(e){o.value=e.target.value}async function f(){try{let e=await navigator.clipboard.readText();if(!e.trim()){s.value=`剪贴板为空，请先复制分享代码`;return}i.value=e,p()}catch{s.value=`无法读取剪贴板，请手动粘贴`}}function p(){l.value=``;let e=i.value.trim();if(!e){c.value=null,s.value=``;return}try{let t=JSON.parse(e);typeof t.themeColor!=`string`&&(t.themeColor=`#000000`),(typeof t.aspectRatio!=`number`||!Number.isFinite(t.aspectRatio)||t.aspectRatio<=0)&&(t.aspectRatio=Ec(t.paths)),Ac(t),c.value=t,a.value=t.name,o.value=t.themeColor,s.value=``}catch{c.value=null,s.value=`代码解析失败，请检查是否为有效的分享代码`}}function m(e){let t=e.target,n=t.files?.[0];if(!n)return;let r=new FileReader;r.onload=()=>{try{let e=String(r.result??``),t=n.name.replace(/\.svg$/i,``)||`导入的图案`,i=Mc(e,t,zs,`#000000`,!0);c.value=i,l.value=n.name,a.value=t,o.value=`#000000`,s.value=``}catch{c.value=null,s.value=`SVG 解析失败，请确认文件包含 <path> 路径`}t.value=``},r.onerror=()=>{c.value=null,s.value=`文件读取失败，请重试`,t.value=``},r.readAsText(n)}function h(){if(!c.value){s.value=`请先粘贴分享代码或选择 SVG 文件`;return}let e=a.value.trim()||`导入的图案`,t=o.value.trim()||`#000000`,n={...c.value,name:e,themeColor:t};(typeof n.aspectRatio!=`number`||!Number.isFinite(n.aspectRatio)||n.aspectRatio<=0)&&(n.aspectRatio=Ec(n.paths));try{Ac(n)}catch{s.value=`导入的图案数据不合法`;return}r(`confirm`,n)}return(t,n)=>(J(),ea(_l,{open:e.open,title:`导入自定义图案`,message:`粘贴分享代码，或选择 SVG 文件导入；名称与主题色可自动识别并修改`,"confirm-text":`导入`,onClose:n[2]||=e=>r(`close`),onConfirm:h},{default:_n(()=>[X(`div`,od,[X(`button`,{class:`import-btn`,type:`button`,onClick:f},[...n[3]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`rect`,{x:`9`,y:`9`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,"stroke-width":`2`}),X(`path`,{d:`M5 15V5a2 2 0 0 1 2-2h10`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1),ca(` 粘贴 `,-1)]]),X(`button`,sd,[n[4]||=X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12 16V3M6 9l6 7 6-7`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`path`,{d:`M4 20h16`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1),n[5]||=ca(` 选择 SVG 文件 `,-1),X(`input`,{type:`file`,accept:`.svg,application/octet-stream`,onChange:m},null,32)])]),vn(X(`textarea`,{"onUpdate:modelValue":n[0]||=e=>i.value=e,class:`ios-modal-input import-code`,placeholder:`粘贴分享代码（JSON）`,rows:`4`,spellcheck:`false`,onInput:p},null,544),[[Jo,i.value]]),X(`p`,{class:I([`import-status`,{"is-error":s.value}]),role:`status`},R(u.value),3),X(`div`,cd,[n[6]||=X(`label`,{class:`form-field__label`,for:`import-name`},`名字`,-1),vn(X(`input`,{id:`import-name`,"onUpdate:modelValue":n[1]||=e=>a.value=e,class:`form-field__control`,type:`text`,maxlength:`12`,placeholder:`输入图案名字`},null,512),[[Jo,a.value]])]),X(`div`,ld,[n[7]||=X(`label`,{class:`form-field__label`,for:`import-color`},`主题色`,-1),X(`label`,{class:`form-field__control form-field__picker`,style:N({background:o.value}),title:`选择主题色 ${o.value}`},[X(`input`,{id:`import-color`,type:`color`,value:o.value,"aria-label":`选择主题色`,onInput:d},null,40,dd)],12,ud)])]),_:1},8,[`open`]))}}),[[`__scopeId`,`data-v-e862ae30`]]),pd={class:`app`};rs(Sc(ir({__name:`App`,setup(e){let{step:t,saveDialogOpen:n,confirmSaveCustom:r,deleteDialogOpen:i,pendingDeleteShape:a,confirmDeleteCustom:o,shareDialogOpen:s,shareShape:c,importDialogOpen:l,onImportConfirm:u}=Rc();return(e,d)=>(J(),Y(`div`,pd,[Z(Hu,{step:K(t)},null,8,[`step`]),Z(Kc),Z(cl),K(t)===`main`?(J(),ea(Bu,{key:0})):Q(``,!0),Z(qu,{open:K(n),"initial-name":`我的图案`,"initial-color":`#000000`,onClose:d[0]||=e=>n.value=!1,onConfirm:K(r)},null,8,[`open`,`onConfirm`]),Z(_l,{open:K(i),title:`删除自定义图案`,message:`确定要删除「${K(a)?.name??``}」吗？删除后无法恢复。`,"confirm-text":`删除`,danger:``,onClose:d[1]||=e=>i.value=!1,onConfirm:K(o)},null,8,[`open`,`message`,`onConfirm`]),Z(ad,{open:K(s),shape:K(c),onClose:d[2]||=e=>s.value=!1,onConfirm:d[3]||=e=>s.value=!1},null,8,[`open`,`shape`]),Z(fd,{open:K(l),onClose:d[4]||=e=>l.value=!1,onConfirm:K(u)},null,8,[`open`,`onConfirm`])]))}}),[[`__scopeId`,`data-v-6115eea4`]])).mount(`#app`);