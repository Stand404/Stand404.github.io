(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),E=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},D=/-\w/g,O=E(e=>e.replace(D,e=>e.slice(1).toUpperCase())),ee=/\B([A-Z])/g,k=E(e=>e.replace(ee,`-$1`).toLowerCase()),A=E(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=E(e=>e?`on${A(e)}`:``),j=(e,t)=>!Object.is(e,t),ne=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},M=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},re=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ie=e=>{let t=g(e)?Number(e):NaN;return isNaN(t)?e:t},ae,oe=()=>ae||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function N(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?ce(r):N(r);if(i)for(let e in i)t[e]=i[e]}return t}if(g(e)||v(e))return e}var P=/;(?![^(]*\))/g,se=/:([^]+)/,F=/\/\*[^]*?\*\//g;function ce(e){let t={};return e.replace(F,``).split(P).forEach(e=>{if(e){let n=e.split(se);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function I(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=I(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var le=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ue=e(le);le+``;function L(e){return!!e||e===``}function de(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=fe(e[r],t[r]);return n}function fe(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?de(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!fe(e[n],t[n]))return!1}}return String(e)===String(t)}var pe=e=>!!(e&&e.__v_isRef===!0),R=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?pe(e)?R(e.value):JSON.stringify(e,me,2):String(e),me=(e,t)=>pe(t)?me(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[he(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>he(e))}:_(t)?he(t):v(t)&&!d(t)&&!C(t)?String(t):t,he=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,z,ge=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&z&&(z.active?(this.parent=z,this.index=(z.scopes||(z.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=z;try{return z=this,e()}finally{z=t}}}on(){++this._on===1&&(this.prevScope=z,z=this)}off(){if(this._on>0&&--this._on===0){if(z===this)z=this.prevScope;else{let e=z;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function B(){return z}var V,_e=new WeakSet,H=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,z&&(z.active?z.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_e.has(this)&&(_e.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pe(this),we(this);let e=V,t=Ae;V=this,Ae=!0;try{return this.fn()}finally{Te(this),V=e,Ae=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oe(e);this.deps=this.depsTail=void 0,Pe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_e.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ee(this)&&this.run()}get dirty(){return Ee(this)}},ve=0,ye,be;function xe(e,t=!1){if(e.flags|=8,t){e.next=be,be=e;return}e.next=ye,ye=e}function Se(){ve++}function Ce(){if(--ve>0)return;if(be){let e=be;for(be=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;ye;){let t=ye;for(ye=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function we(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Te(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Oe(r),ke(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ee(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(De(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function De(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Fe)||(e.globalVersion=Fe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ee(e))))return;e.flags|=2;let t=e.dep,n=V,r=Ae;V=e,Ae=!0;try{we(e);let n=e.fn(e._value);(t.version===0||j(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{V=n,Ae=r,Te(e),e.flags&=-3}}function Oe(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Oe(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ke(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ae=!0,je=[];function Me(){je.push(Ae),Ae=!1}function Ne(){let e=je.pop();Ae=e===void 0||e}function Pe(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=V;V=void 0;try{t()}finally{V=e}}}var Fe=0,Ie=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Le=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!V||!Ae||V===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==V)t=this.activeLink=new Ie(V,this),V.deps?(t.prevDep=V.depsTail,V.depsTail.nextDep=t,V.depsTail=t):V.deps=V.depsTail=t,Re(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=V.depsTail,t.nextDep=void 0,V.depsTail.nextDep=t,V.depsTail=t,V.deps===t&&(V.deps=e)}return t}trigger(e){this.version++,Fe++,this.notify(e)}notify(e){Se();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ce()}}};function Re(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Re(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var ze=new WeakMap,Be=Symbol(``),Ve=Symbol(``),He=Symbol(``);function U(e,t,n){if(Ae&&V){let t=ze.get(e);t||ze.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Le),r.map=t,r.key=n),r.track()}}function Ue(e,t,n,r,i,a){let o=ze.get(e);if(!o){Fe++;return}let s=e=>{e&&e.trigger()};if(Se(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===He||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(He)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Be)),f(e)&&s(o.get(Ve)));break;case`delete`:i||(s(o.get(Be)),f(e)&&s(o.get(Ve)));break;case`set`:f(e)&&s(o.get(Be))}}Ce()}function We(e){let t=W(e);return t===e?t:(U(t,`iterate`,He),kt(e)?t:t.map(Mt))}function Ge(e){return U(e=W(e),`iterate`,He),e}function Ke(e,t){return Ot(e)?Nt(Dt(e)?Mt(t):t):Mt(t)}var qe={__proto__:null,[Symbol.iterator](){return Je(this,Symbol.iterator,e=>Ke(this,e))},concat(...e){return We(this).concat(...e.map(e=>d(e)?We(e):e))},entries(){return Je(this,`entries`,e=>(e[1]=Ke(this,e[1]),e))},every(e,t){return Xe(this,`every`,e,t,void 0,arguments)},filter(e,t){return Xe(this,`filter`,e,t,e=>e.map(e=>Ke(this,e)),arguments)},find(e,t){return Xe(this,`find`,e,t,e=>Ke(this,e),arguments)},findIndex(e,t){return Xe(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Xe(this,`findLast`,e,t,e=>Ke(this,e),arguments)},findLastIndex(e,t){return Xe(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Xe(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Qe(this,`includes`,e)},indexOf(...e){return Qe(this,`indexOf`,e)},join(e){return We(this).join(e)},lastIndexOf(...e){return Qe(this,`lastIndexOf`,e)},map(e,t){return Xe(this,`map`,e,t,void 0,arguments)},pop(){return $e(this,`pop`)},push(...e){return $e(this,`push`,e)},reduce(e,...t){return Ze(this,`reduce`,e,t)},reduceRight(e,...t){return Ze(this,`reduceRight`,e,t)},shift(){return $e(this,`shift`)},some(e,t){return Xe(this,`some`,e,t,void 0,arguments)},splice(...e){return $e(this,`splice`,e)},toReversed(){return We(this).toReversed()},toSorted(e){return We(this).toSorted(e)},toSpliced(...e){return We(this).toSpliced(...e)},unshift(...e){return $e(this,`unshift`,e)},values(){return Je(this,`values`,e=>Ke(this,e))}};function Je(e,t,n){let r=Ge(e),i=r[t]();return r!==e&&!kt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var Ye=Array.prototype;function Xe(e,t,n,r,i,a){let o=Ge(e),s=o!==e&&!kt(e),c=o[t];if(c!==Ye[t]){let t=c.apply(e,a);return s?Mt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Ke(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function Ze(e,t,n,r){let i=Ge(e),a=i!==e&&!kt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Ke(e,t)),n.call(this,t,Ke(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Ke(e,c):c}function Qe(e,t,n){let r=W(e);U(r,`iterate`,He);let i=r[t](...n);return(i===-1||i===!1)&&At(n[0])?(n[0]=W(n[0]),r[t](...n)):i}function $e(e,t,n=[]){Me(),Se();let r=W(e)[t].apply(e,n);return Ce(),Ne(),r}var et=e(`__proto__,__v_isRef,__isVue`),tt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function nt(e){_(e)||(e=String(e));let t=W(this);return U(t,`has`,e),t.hasOwnProperty(e)}var rt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?xt:bt:i?yt:vt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=qe[t]))return e;if(t===`hasOwnProperty`)return nt}let o=Reflect.get(e,t,Pt(e)?e:n);if((_(t)?tt.has(t):et(t))||(r||U(e,`get`,t),i))return o;if(Pt(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Tt(e):e}return v(o)?r?Tt(o):Ct(o):o}},it=class extends rt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Ot(i);if(!kt(n)&&!Ot(n)&&(i=W(i),n=W(n)),!a&&Pt(i)&&!Pt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,Pt(e)?e:r);return e===W(r)&&s&&(o?j(n,i)&&Ue(e,`set`,t,n,i):Ue(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Ue(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!tt.has(t))&&U(e,`has`,t),n}ownKeys(e){return U(e,`iterate`,d(e)?`length`:Be),Reflect.ownKeys(e)}},at=class extends rt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},ot=new it,st=new at,ct=new it(!0),lt=e=>e,ut=e=>Reflect.getPrototypeOf(e);function dt(e,t,n){return function(...r){let i=this.__v_raw,a=W(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?lt:t?Nt:Mt;return!t&&U(a,`iterate`,l?Ve:Be),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function ft(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function pt(e,t){let n={get(n){let r=this.__v_raw,i=W(r),a=W(n);e||(j(n,a)&&U(i,`get`,n),U(i,`get`,a));let{has:o}=ut(i),s=t?lt:e?Nt:Mt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&U(W(t),`iterate`,Be),t.size},has(t){let n=this.__v_raw,r=W(n),i=W(t);return e||(j(t,i)&&U(r,`has`,t),U(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=W(a),s=t?lt:e?Nt:Mt;return!e&&U(o,`iterate`,Be),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:ft(`add`),set:ft(`set`),delete:ft(`delete`),clear:ft(`clear`)}:{add(e){let n=W(this),r=ut(n),i=W(e),a=!t&&!kt(e)&&!Ot(e)?i:e;return r.has.call(n,a)||j(e,a)&&r.has.call(n,e)||j(i,a)&&r.has.call(n,i)||(n.add(a),Ue(n,`add`,a,a)),this},set(e,n){!t&&!kt(n)&&!Ot(n)&&(n=W(n));let r=W(this),{has:i,get:a}=ut(r),o=i.call(r,e);o||=(e=W(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?j(n,s)&&Ue(r,`set`,e,n,s):Ue(r,`add`,e,n),this},delete(e){let t=W(this),{has:n,get:r}=ut(t),i=n.call(t,e);i||=(e=W(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Ue(t,`delete`,e,void 0,a),o},clear(){let e=W(this),t=e.size!==0,n=e.clear();return t&&Ue(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=dt(r,e,t)}),n}function mt(e,t){let n=pt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var ht={get:mt(!1,!1)},gt={get:mt(!1,!0)},_t={get:mt(!0,!1)},vt=new WeakMap,yt=new WeakMap,bt=new WeakMap,xt=new WeakMap;function St(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Ct(e){return Ot(e)?e:Et(e,!1,ot,ht,vt)}function wt(e){return Et(e,!1,ct,gt,yt)}function Tt(e){return Et(e,!0,st,_t,bt)}function Et(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=St(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Dt(e){return Ot(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ot(e){return!!(e&&e.__v_isReadonly)}function kt(e){return!!(e&&e.__v_isShallow)}function At(e){return e?!!e.__v_raw:!1}function W(e){let t=e&&e.__v_raw;return t?W(t):e}function jt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&M(e,`__v_skip`,!0),e}var Mt=e=>v(e)?Ct(e):e,Nt=e=>v(e)?Tt(e):e;function Pt(e){return e?e.__v_isRef===!0:!1}function G(e){return Ft(e,!1)}function Ft(e,t){return Pt(e)?e:new It(e,t)}var It=class{constructor(e,t){this.dep=new Le,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:W(e),this._value=t?e:Mt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||kt(e)||Ot(e);e=n?e:W(e),j(e,t)&&(this._rawValue=e,this._value=n?e:Mt(e),this.dep.trigger())}};function K(e){return Pt(e)?e.value:e}var Lt={get:(e,t,n)=>t===`__v_raw`?e:K(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Pt(i)&&!Pt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Rt(e){return Dt(e)?e:new Proxy(e,Lt)}var zt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Le(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fe-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&V!==this)return xe(this,!0),!0}get value(){let e=this.dep.track();return De(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Bt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new zt(r,i,n)}var Vt={},Ht=new WeakMap,Ut=void 0;function Wt(e,t=!1,n=Ut){if(n){let t=Ht.get(n);t||Ht.set(n,t=[]),t.push(e)}}function Gt(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:kt(e)||o===!1||o===0?Kt(e,1):Kt(e),m,g,_,v,y=!1,b=!1;if(Pt(e)?(g=()=>e.value,y=kt(e)):Dt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Dt(e)||kt(e)),g=()=>e.map(e=>{if(Pt(e))return e.value;if(Dt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Me();try{_()}finally{Ne()}}let t=Ut;Ut=m;try{return f?f(e,3,[v]):e(v)}finally{Ut=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>Kt(e(),t)}let x=B(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(Vt):Vt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>j(e,C[t])):j(t,C))){_&&_();let e=Ut;Ut=m;try{let e=[t,C===Vt?void 0:b&&C[0]===Vt?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{Ut=e}}}else m.run()};return u&&u(w),m=new H(g),m.scheduler=l?()=>l(w,!1):w,v=e=>Wt(e,!1,m),_=m.onStop=()=>{let e=Ht.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Ht.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function Kt(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Pt(e))Kt(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)Kt(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{Kt(e,t,n)});else if(C(e)){for(let r in e)Kt(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Kt(e[r],t,n)}return e}function qt(e,t,n,r){try{return r?e(...r):e()}catch(e){Yt(e,t,n)}}function Jt(e,t,n,r){if(h(e)){let i=qt(e,t,n,r);return i&&y(i)&&i.catch(e=>{Yt(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(Jt(e[a],t,n,r));return i}}function Yt(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Me(),qt(o,null,10,[e,i,a]),Ne();return}}Xt(e,r,a,i,s)}function Xt(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var Zt=[],Qt=-1,$t=[],en=null,tn=0,nn=Promise.resolve(),rn=null;function an(e){let t=rn||nn;return e?t.then(this?e.bind(this):e):t}function on(e){let t=Qt+1,n=Zt.length;for(;t<n;){let r=t+n>>>1,i=Zt[r],a=fn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function sn(e){if(!(e.flags&1)){let t=fn(e),n=Zt[Zt.length-1];!n||!(e.flags&2)&&t>=fn(n)?Zt.push(e):Zt.splice(on(t),0,e),e.flags|=1,cn()}}function cn(){rn||=nn.then(pn)}function ln(e){d(e)?$t.push(...e):en&&e.id===-1?en.splice(tn+1,0,e):e.flags&1||($t.push(e),e.flags|=1),cn()}function un(e,t,n=Qt+1){for(;n<Zt.length;n++){let t=Zt[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;Zt.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function dn(e){if($t.length){let e=[...new Set($t)].sort((e,t)=>fn(e)-fn(t));if($t.length=0,en){en.push(...e);return}for(en=e,tn=0;tn<en.length;tn++){let e=en[tn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}en=null,tn=0}}var fn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function pn(e){try{for(Qt=0;Qt<Zt.length;Qt++){let e=Zt[Qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qt(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qt<Zt.length;Qt++){let e=Zt[Qt];e&&(e.flags&=-2)}Qt=-1,Zt.length=0,dn(e),rn=null,(Zt.length||$t.length)&&pn(e)}}var mn=null,hn=null;function gn(e){let t=mn;return mn=e,hn=e&&e.type.__scopeId||null,t}function _n(e,t=mn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Qi(-1);let i=gn(t),a=Ji.length,o;try{o=e(...n)}finally{for(let e=Ji.length;e>a;e--)Xi();gn(i),r._d&&Qi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vn(e,n){if(mn===null)return e;let r=Pa(mn),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&Kt(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function yn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Me(),Jt(c,n,8,[e.el,s,e,t]),Ne())}}function bn(e,t){if(va){let n=va.provides,r=va.parent&&va.parent.provides;r===n&&(n=va.provides=Object.create(r)),n[e]=t}}function xn(e,t,n=!1){let r=ya();if(r||ti){let i=ti?ti._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Sn=Symbol.for(`v-scx`),Cn=()=>xn(Sn);function wn(e,t){return En(e,null,t)}function Tn(e,t,n){return En(e,t,n)}function En(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Ta){if(c===`sync`){let e=Cn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=va;u.call=(e,t,n)=>Jt(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{Mi(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():sn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=Gt(e,n,u);return Ta&&(f?f.push(h):d&&h()),h}function Dn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?On(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=Sa(this),s=En(i,a.bind(r),n);return o(),s}function On(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var kn=new WeakMap,An=Symbol(`_vte`),jn=e=>e.__isTeleport,Mn=e=>e&&(e.disabled||e.disabled===``),Nn=e=>e&&(e.defer||e.defer===``),Pn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Fn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,In=(e,t)=>{let n=e&&e.to;return g(n)?t?t(n):null:n},Ln={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Mn(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Mn(e.props),r=e.target=In(e.props,m),a=Hn(r,e,h,p);r&&(o!==`svg`&&Pn(r)?o=`svg`:o!==`mathml`&&Fn(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),Vn(e,!1)))},S=e=>{let t=()=>{if(kn.get(e)===t){if(kn.delete(e),Mn(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),Vn(e,!0)}x(e)}};kn.set(e,t),Mi(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Nn(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),Vn(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=kn.get(e);if(u){u.flags|=8,kn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Mn(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Pn(p)?o=`svg`:(o===`mathml`||Fn(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),Ri(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Rn(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=In(t.props,m);e&&(t.target=e,Rn(t,e,null,l,0))}else g&&Rn(t,p,h,l,1);Vn(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Mn(f),m=a||!p,h=kn.get(e);if(h&&(h.flags|=8,kn.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:Rn,hydrate:zn};function Rn(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!kn.has(e)&&(!d||Mn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function zn(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=In(t.props,c),h=Mn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||Hn(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||Hn(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),Vn(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var Bn=Ln;function Vn(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function Hn(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[An]=o,e&&(r(a,e,i),r(o,e,i)),o}var Un=Symbol(`_leaveCb`),Wn=Symbol(`_enterCb`);function Gn(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yr(()=>{e.isMounted=!0}),Sr(()=>{e.isUnmounting=!0}),e}var Kn=[Function,Array],qn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kn,onEnter:Kn,onAfterEnter:Kn,onEnterCancelled:Kn,onBeforeLeave:Kn,onLeave:Kn,onAfterLeave:Kn,onLeaveCancelled:Kn,onBeforeAppear:Kn,onAppear:Kn,onAfterAppear:Kn,onAppearCancelled:Kn},Jn=e=>{let t=e.subTree;return t.component?Jn(t.component):t},Yn={name:`BaseTransition`,props:qn,setup(e,{slots:t}){let n=ya(),r=Gn();return()=>{let i=t.default&&rr(t.default(),!0),a=i&&i.length?Xn(i):n.subTree?Q():void 0;if(!a)return;let o=W(e),{mode:s}=o;if(r.isLeaving)return er(a);let c=tr(a);if(!c)return er(a);let l=$n(c,o,r,n,e=>l=e);c.type!==Ki&&nr(c,l);let u=n.subTree&&tr(n.subTree);if(u&&u.type!==Ki&&!na(u,c)&&Jn(n).type!==Ki){let e=$n(u,o,r,n);if(nr(u,e),s===`out-in`&&c.type!==Ki)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},er(a);s===`in-out`&&c.type!==Ki?e.delayLeave=(e,t,n)=>{let i=Qn(r,u);i[String(u.key)]=u,e[Un]=()=>{t(),e[Un]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function Xn(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Ki){t=n;break}}return t}var Zn=Yn;function Qn(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function $n(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=Qn(n,e),C=(e,t)=>{e&&Jt(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},T={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=_||c;else return;t[Un]&&t[Un](!0);let i=S[x];i&&na(e,i)&&i.el[Un]&&i.el[Un](),C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=f;if(!n.isMounted)if(a)r=v||l,i=y||u,o=b||f;else return;let s=!1;t[Wn]=e=>{s||(s=!0,C(e?o:i,[t]),T.delayedLeave&&T.delayedLeave(),t[Wn]=void 0)};let c=t[Wn].bind(null,!1);r?w(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[Wn]&&t[Wn](!0),n.isUnmounting)return r();C(p,[t]);let a=!1;t[Un]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[Un]=void 0,S[i]===e&&delete S[i])};let o=t[Un].bind(null,!1);S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=$n(e,t,n,r,i);return i&&i(a),a}};return T}function er(e){if(dr(e))return e=sa(e),e.children=null,e}function tr(e){if(!dr(e))return jn(e.type)&&e.children?Xn(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function nr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,nr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function rr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===q?(o.patchFlag&128&&i++,r=r.concat(rr(o.children,t,s))):(t||o.type!==Ki)&&r.push(s==null?o:sa(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function ir(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function ar(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function or(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var sr=new WeakMap;function cr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>cr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(ur(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&cr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?Pa(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=W(v),b=v===t?i:e=>!or(_,e)&&u(y,e),x=(e,t)=>!(t&&or(_,t));if(m!=null&&m!==p){if(lr(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(Pt(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))qt(p,f,12,[l,_]);else{let t=g(p),n=Pt(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),sr.delete(e)};t.id=-1,sr.set(e,t),Mi(t,r)}else lr(e),i()}}}function lr(e){let t=sr.get(e);t&&(t.flags|=8,sr.delete(e))}oe().requestIdleCallback,oe().cancelIdleCallback;var ur=e=>!!e.type.__asyncLoader,dr=e=>e.type.__isKeepAlive;function fr(e,t){mr(e,`a`,t)}function pr(e,t){mr(e,`da`,t)}function mr(e,t,n=va){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(gr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)dr(e.parent.vnode)&&hr(r,t,n,e),e=e.parent}}function hr(e,t,n,r){let i=gr(t,e,r,!0);Cr(()=>{c(r[t],i)},n)}function gr(e,t,n=va,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Me();let i=Sa(n),a=Jt(t,n,e,r);return i(),Ne(),a};return r?i.unshift(a):i.push(a),a}}var _r=e=>(t,n=va)=>{(!Ta||e===`sp`)&&gr(e,(...e)=>t(...e),n)},vr=_r(`bm`),yr=_r(`m`),br=_r(`bu`),xr=_r(`u`),Sr=_r(`bum`),Cr=_r(`um`),wr=_r(`sp`),Tr=_r(`rtg`),Er=_r(`rtc`);function Dr(e,t=va){gr(`ec`,e,t)}var Or=Symbol.for(`v-ndc`);function kr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Dt(e),r=!1,s=!1;n&&(r=!kt(e),s=Ot(e),e=Ge(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Nt(Mt(e[n])):Mt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function Ar(e,t,n={},r,i,a){if(mn.ce||mn.parent&&ur(mn.parent)&&mn.parent.ce){let e=a!=null&&n.key==null?s({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),J(),ea(q,null,[Z(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let c=Ji.length;J();let l;try{let i=o&&jr(o(n)),s=n.key||a||i&&i.key;l=ea(q,{key:(s&&!_(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=Ji.length;e>c;e--)Xi();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+`-s`]),l}function jr(e){return e.some(e=>!ta(e)||!(e.type===Ki||e.type===q&&!jr(e.children)))?e:null}var Mr=e=>e?wa(e)?Pa(e):Mr(e.parent):null,Nr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mr(e.parent),$root:e=>Mr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Hr(e),$forceUpdate:e=>e.f||=()=>{sn(e.update)},$nextTick:e=>e.n||=an.bind(e.proxy),$watch:e=>Dn.bind(e)}),Pr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Fr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Pr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Lr&&(s[n]=0)}let d=Nr[n],f,p;if(d)return n===`$attrs`&&U(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Pr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Pr(n,c)||u(o,c)||u(i,c)||u(Nr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Ir(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Lr=!0;function Rr(e){let t=Hr(e),n=e.proxy,i=e.ctx;Lr=!1,t.beforeCreate&&Br(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:E,renderTriggered:D,errorCaptured:O,serverPrefetch:ee,expose:k,inheritAttrs:A,components:te,directives:j,filters:ne}=t;if(u&&zr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Ct(t))}if(Lr=!0,o)for(let e in o){let t=o[e],a=$({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Vr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{bn(t,e[t])})}f&&Br(f,e,`c`);function M(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(M(vr,p),M(yr,m),M(br,g),M(xr,_),M(fr,y),M(pr,b),M(Dr,O),M(Er,E),M(Tr,D),M(Sr,S),M(Cr,w),M(wr,ee),d(k))if(k.length){let t=e.exposed||={};k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};T&&e.render===r&&(e.render=T),A!=null&&(e.inheritAttrs=A),te&&(e.components=te),j&&(e.directives=j),ee&&ar(e)}function zr(e,t,n=r){d(e)&&(e=qr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?xn(r.from||n,r.default,!0):xn(r.from||n):xn(r),Pt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Br(e,t,n){Jt(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vr(e,t,n,r){let i=r.includes(`.`)?On(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Tn(i,n)}else if(h(e))Tn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Vr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Tn(i,r,e)}}function Hr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Ur(c,e,o,!0)),Ur(c,t,o)),v(t)&&a.set(t,c),c}function Ur(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Ur(e,a,n,!0),i&&i.forEach(t=>Ur(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Wr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Wr={data:Gr,props:Xr,emits:Xr,methods:Yr,computed:Yr,beforeCreate:Jr,created:Jr,beforeMount:Jr,mounted:Jr,beforeUpdate:Jr,updated:Jr,beforeDestroy:Jr,beforeUnmount:Jr,destroyed:Jr,unmounted:Jr,activated:Jr,deactivated:Jr,errorCaptured:Jr,serverPrefetch:Jr,components:Yr,directives:Yr,watch:Zr,provide:Gr,inject:Kr};function Gr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Kr(e,t){return Yr(qr(e),qr(t))}function qr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Jr(e,t){return e?[...new Set([].concat(e,t))]:t}function Yr(e,t){return e?s(Object.create(null),e,t):t}function Xr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Ir(e),Ir(t??{})):t}function Zr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Jr(e[r],t[r]);return n}function Qr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var $r=0;function ei(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Qr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:$r++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:La,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||Z(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,Pa(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(Jt(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=ti;ti=l;try{return e()}finally{ti=t}}};return l}}var ti=null,ni=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${O(t)}Modifiers`]||e[`${k(t)}Modifiers`];function ri(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&ni(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(re)));let c,l=i[c=te(n)]||i[c=te(O(n))];!l&&o&&(l=i[c=te(k(n))]),l&&Jt(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Jt(u,e,6,a)}}var ii=new WeakMap;function ai(e,t,n=!1){let r=n?ii:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=ai(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function oi(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,k(t))||u(e,t))}function si(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=gn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ua(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=ua(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:ci(c)}}catch(t){Ji.length=0,Yt(t,e,1),v=Z(Ki)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=li(y,a)),b=sa(b,y,!1,!0))}return n.dirs&&(b=sa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&nr(b,n.transition),v=b,gn(_),v}var ci=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},li=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ui(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?di(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(fi(o,r,n)&&!oi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||di(r,o,l):!!o;return!1}function di(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(fi(t,e,a)&&!oi(n,a))return!0}return!1}function fi(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!fe(r,i):r!==i}function pi({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var mi={},hi=()=>Object.create(mi),gi=e=>Object.getPrototypeOf(e)===mi;function _i(e,t,n,r=!1){let i={},a=hi();e.propsDefaults=Object.create(null),yi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:wt(i):e.type.props?i:a,e.attrs=a}function vi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=W(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(oi(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=O(o);i[t]=bi(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{yi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=k(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=bi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&Ue(e.attrs,`set`,``)}function yi(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=O(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:oi(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=W(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=bi(a,n,s,i[s],e,!u(i,s))}}return s}function bi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Sa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===k(n))&&(r=!0))}return r}var xi=new WeakMap;function Si(e,r,i=!1){let a=i?xi:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=Si(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=O(c[e]);Ci(n)&&(l[n]=t)}else if(c)for(let e in c){let t=O(e);if(Ci(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function Ci(e){return e[0]!==`$`&&!T(e)}var wi=e=>e===`_`||e===`_ctx`||e===`$stable`,Ti=e=>d(e)?e.map(ua):[ua(e)],Ei=(e,t,n)=>{if(t._n)return t;let r=_n((...e)=>Ti(t(...e)),n);return r._c=!1,r},Di=(e,t,n)=>{let r=e._ctx;for(let n in e){if(wi(n))continue;let i=e[n];if(h(i))t[n]=Ei(n,i,r);else if(i!=null){let e=Ti(i);t[n]=()=>e}}},Oi=(e,t)=>{let n=Ti(t);e.slots.default=()=>n},ki=(e,t,n)=>{for(let r in t)(n||!wi(r))&&(e[r]=t[r])},Ai=(e,t,n)=>{let r=e.slots=hi();if(e.vnode.shapeFlag&32){let e=t._;e?(ki(r,t,n),n&&M(r,`_`,e,!0)):Di(t,r)}else t&&Oi(e,t)},ji=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:ki(a,n,r):(o=!n.$stable,Di(n,a)),s=n}else n&&(Oi(e,n),s={default:1});if(o)for(let e in a)!wi(e)&&s[e]==null&&delete a[e]},Mi=Wi;function Ni(e){return Pi(e)}function Pi(e,i){let a=oe();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!na(e,t)&&(r=de(e),ce(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Gi:y(e,t,n,r);break;case Ki:b(e,t,n,r);break;case qi:e??x(t,n,r,o);break;case q:te(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?j(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,R)}u!=null&&i?cr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&cr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)E(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ee(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},E=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&O(e.children,d,null,r,i,Fi(e,a),s,u),_&&yn(e,null,r,`created`),D(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ma(f,r,e)}_&&yn(e,null,r,`beforeMount`);let v=Li(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&Mi(()=>{try{f&&ma(f,r,e),v&&g.enter(d),_&&yn(e,null,r,`mounted`)}finally{}},i)},D=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ui(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;D(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?da(e[l]):ua(e[l]);v(null,c,t,n,r,i,a,o,s)}},ee=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Ii(r,!1),(g=h.onVnodeBeforeUpdate)&&ma(g,r,n,e),f&&yn(n,e,r,`beforeUpdate`),r&&Ii(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?k(e.dynamicChildren,d,l,r,i,Fi(n,a),o):s||N(e,n,l,null,r,i,Fi(n,a),o,!1),u>0){if(u&16)A(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&A(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&Mi(()=>{g&&ma(g,r,n,e),f&&yn(n,e,r,`updated`)},i)},k=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===q||!na(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},A=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},te=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),O(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(k(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Ri(e,t,!0)):N(e,t,n,f,i,a,s,c,l)},j=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,a,o,c):re(e,t,c)},M=(e,t,n,r,i,a,o)=>{let s=e.component=_a(e,r,i);if(dr(e)&&(s.ctx.renderer=R),Ea(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ie,o),!e.el){let r=s.subTree=Z(Ki);b(null,r,t,n),e.placeholder=r.el}}else ie(s,e,t,n,i,a,o)},re=(e,t,n)=>{let r=t.component=e.component;if(ui(e,t,n))if(r.asyncDep&&!r.asyncResolved){ae(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ie=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Bi(e);if(n){t&&(t.el=c.el,ae(e,t,o)),n.asyncDep.then(()=>{Mi(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Ii(e,!1),t?(t.el=c.el,ae(e,t,o)):t=c,n&&ne(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ma(d,s,t,c),Ii(e,!0);let f=si(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),de(p),e,i,a),t.el=f.el,u===null&&pi(e,f.el),r&&Mi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Mi(()=>ma(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=ur(t);if(Ii(e,!1),l&&ne(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ma(o,d,t),Ii(e,!0),s&&he){let t=()=>{e.subTree=si(e),he(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=si(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Mi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Mi(()=>ma(o,d,e),i)}(t.shapeFlag&256||d&&ur(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Mi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new H(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>sn(u),Ii(e,!0),l()},ae=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,vi(e,t.props,r,n),ji(e,t.children,n),Me(),un(e),Ne()},N=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){se(l,d,n,r,i,a,o,s,c);return}if(f&256){P(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&L(l,i,a),d!==l&&p(n,d)):u&16?m&16?se(l,d,n,r,i,a,o,s,c):L(l,i,a,!0):(u&8&&p(n,``),m&16&&O(d,n,r,i,a,o,s,c))},P=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?da(t[p]):ua(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?L(e,a,o,!0,!1,f):O(t,r,i,a,o,s,c,l,f)},se=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?da(t[u]):ua(t[u]);if(na(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?da(t[p]):ua(t[p]);if(na(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?da(t[u]):ua(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)ce(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?da(t[u]):ua(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){ce(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&na(n,t[_])){i=_;break}i===void 0?ce(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?zi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Hi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?F(n,r,p,2):_--)}}},F=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){F(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,R);return}if(c===q){o(a,t,n);for(let e=0;e<u.length;e++)F(u[e],t,n,r);o(e.anchor,t,n);return}if(c===qi){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[Un]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),Mi(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[Un];a._isLeaving&&a[Un](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},ce=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Me(),cr(s,null,n,e,!0),Ne()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!ur(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ma(_,t,e),u&6)ue(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&yn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,R,r):l&&!l.hasOnce&&(a!==q||d>0&&d&64)?L(l,t,n,!1,!0):(a===q&&d&384||!i&&u&16)&&L(c,t,n),r&&I(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Mi(()=>{_&&ma(_,t,e),h&&yn(e,null,t,`unmounted`),v&&(e.el=null)},n)},I=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===q){le(n,r);return}if(t===qi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},le=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ue=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Vi(c),Vi(l),r&&ne(r),i.stop(),a&&(a.flags|=8,ce(o,e,t,n)),s&&Mi(s,t),Mi(()=>{e.isUnmounted=!0},t)},L=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ce(e[o],t,n,r,i)},de=e=>{if(e.shapeFlag&6)return de(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[An];return n?h(n):t},fe=!1,pe=(e,t,n)=>{let r;e==null?t._vnode&&(ce(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,fe||=(fe=!0,un(r),dn(),!1)},R={p:v,um:ce,m:F,r:I,mt:M,mc:O,pc:N,pbc:k,n:de,o:e},me,he;return i&&([me,he]=i(R)),{render:pe,hydrate:me,createApp:ei(pe,me)}}function Fi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ii({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Li(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ri(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=da(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Ri(t,a)),a.type===Gi&&(a.patchFlag===-1&&(a=i[e]=da(a)),a.el=t.el),a.type===Ki&&!a.el&&(a.el=t.el)}}function zi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Bi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bi(t)}function Vi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Hi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Hi(t.subTree):null}var Ui=e=>e.__isSuspense;function Wi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):ln(e)}var q=Symbol.for(`v-fgt`),Gi=Symbol.for(`v-txt`),Ki=Symbol.for(`v-cmt`),qi=Symbol.for(`v-stc`),Ji=[],Yi=null;function J(e=!1){Ji.push(Yi=e?null:[])}function Xi(){Ji.pop(),Yi=Ji[Ji.length-1]||null}var Zi=1;function Qi(e,t=!1){Zi+=e,e<0&&Yi&&t&&(Yi.hasOnce=!0)}function $i(e){return e.dynamicChildren=Zi>0?Yi||n:null,Xi(),Zi>0&&Yi&&Yi.push(e),e}function Y(e,t,n,r,i,a){return $i(X(e,t,n,r,i,a,!0))}function ea(e,t,n,r,i){return $i(Z(e,t,n,r,i,!0))}function ta(e){return e?e.__v_isVNode===!0:!1}function na(e,t){return e.type===t.type&&e.key===t.key}var ra=({key:e})=>e??null,ia=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||Pt(e)||h(e)?{i:mn,r:e,k:t,f:!!n}:e);function X(e,t=null,n=null,r=0,i=null,a=e===q?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ra(t),ref:t&&ia(t),scopeId:hn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:mn};return s?(fa(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Zi>0&&!o&&Yi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Yi.push(c),c}var Z=aa;function aa(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Or)&&(e=Ki),ta(e)){let r=sa(e,t,!0);return n&&fa(r,n),Zi>0&&!a&&Yi&&(r.shapeFlag&6?Yi[Yi.indexOf(e)]=r:Yi.push(r)),r.patchFlag=-2,r}if(Fa(e)&&(e=e.__vccOpts),t){t=oa(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=I(e)),v(n)&&(At(n)&&!d(n)&&(n=s({},n)),t.style=N(n))}let o=g(e)?1:Ui(e)?128:jn(e)?64:v(e)?4:h(e)?2:0;return X(e,t,n,r,i,o,a,!0)}function oa(e){return e?At(e)||gi(e)?s({},e):e:null}function sa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?pa(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ra(l),ref:t&&t.ref?n&&a?d(a)?a.concat(ia(t)):[a,ia(t)]:ia(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==q?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sa(e.ssContent),ssFallback:e.ssFallback&&sa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&nr(u,c.clone(u)),u}function ca(e=` `,t=0){return Z(Gi,null,e,t)}function la(e,t){let n=Z(qi,null,e);return n.staticCount=t,n}function Q(e=``,t=!1){return t?(J(),ea(Ki,null,e)):Z(Ki,null,e)}function ua(e){return e==null||typeof e==`boolean`?Z(Ki):d(e)?Z(q,null,e.slice()):ta(e)?da(e):Z(Gi,null,String(e))}function da(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sa(e)}function fa(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),fa(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!gi(t)?t._ctx=mn:r===3&&mn&&(mn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(h(t)){if(r&65){fa(e,{default:t});return}t={default:t,_ctx:mn},n=32}else t=String(t),r&64?(n=16,t=[ca(t)]):n=8;e.children=t,e.shapeFlag|=n}function pa(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=I([t.class,r.class]));else if(e===`style`)t.style=N([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ma(e,t,n,r=null){Jt(e,t,7,[n,r])}var ha=Qr(),ga=0;function _a(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ha,o={uid:ga++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ge(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Si(i,a),emitsOptions:ai(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=ri.bind(null,o),e.ce&&e.ce(o),o}var va=null,ya=()=>va||mn,ba,xa;{let e=oe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ba=t(`__VUE_INSTANCE_SETTERS__`,e=>va=e),xa=t(`__VUE_SSR_SETTERS__`,e=>Ta=e)}var Sa=e=>{let t=va;return ba(e),e.scope.on(),()=>{e.scope.off(),ba(t)}},Ca=()=>{va&&va.scope.off(),ba(null)};function wa(e){return e.vnode.shapeFlag&4}var Ta=!1;function Ea(e,t=!1,n=!1){t&&xa(t);let{props:r,children:i}=e.vnode,a=wa(e);_i(e,r,a,t),Ai(e,i,n||t);let o=a?Da(e,t):void 0;return t&&xa(!1),o}function Da(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Fr);let{setup:r}=n;if(r){Me();let n=e.setupContext=r.length>1?Na(e):null,i=Sa(e),a=qt(r,e,0,[e.props,n]),o=y(a);if(Ne(),i(),(o||e.sp)&&!ur(e)&&ar(e),o){if(a.then(Ca,Ca),t)return a.then(n=>{Oa(e,n,t)}).catch(t=>{Yt(t,e,0)});e.asyncDep=a}else Oa(e,a,t)}else ja(e,t)}function Oa(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Rt(t)),ja(e,n)}var ka,Aa;function ja(e,t,n){let i=e.type;if(!e.render){if(!t&&ka&&!i.render){let t=i.template||Hr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ka(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,Aa&&Aa(e)}{let t=Sa(e);Me();try{Rr(e)}finally{Ne(),t()}}}var Ma={get(e,t){return U(e,`get`,``),e[t]}};function Na(e){return{attrs:new Proxy(e.attrs,Ma),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Pa(e){return e.exposed?e.exposeProxy||=new Proxy(Rt(jt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Nr)return Nr[n](e)},has(e,t){return t in e||t in Nr}}):e.proxy}function Fa(e){return h(e)&&`__vccOpts`in e}var $=(e,t)=>Bt(e,t,Ta);function Ia(e,t,n){try{Qi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?ta(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),Z(e,t,n))}finally{Qi(1)}}var La=`3.5.40`,Ra=void 0,za=typeof window<`u`&&window.trustedTypes;if(za)try{Ra=za.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ba=Ra?e=>Ra.createHTML(e):e=>e,Va=`http://www.w3.org/2000/svg`,Ha=`http://www.w3.org/1998/Math/MathML`,Ua=typeof document<`u`?document:null,Wa=Ua&&Ua.createElement(`template`),Ga={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ua.createElementNS(Va,e):t===`mathml`?Ua.createElementNS(Ha,e):n?Ua.createElement(e,{is:n}):Ua.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ua.createTextNode(e),createComment:e=>Ua.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ua.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Wa.innerHTML=Ba(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Wa.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ka=`transition`,qa=`animation`,Ja=Symbol(`_vtc`),Ya={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xa=s({},qn,Ya),Za=(e=>(e.displayName=`Transition`,e.props=Xa,e))((e,{slots:t})=>Ia(Zn,eo(e),t)),Qa=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},$a=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function eo(e){let t={};for(let n in e)n in Ya||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=to(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:T=b}=t,E=(e,t,n,r)=>{e._enterCancelled=r,io(e,t?d:c),io(e,t?u:o),n&&n()},D=(e,t)=>{e._isLeaving=!1,io(e,f),io(e,m),io(e,p),t&&t()},O=e=>(t,n)=>{let i=e?w:y,o=()=>E(t,e,n);Qa(i,[t,o]),ao(()=>{io(t,e?l:a),ro(t,e?d:c),$a(i)||so(t,r,g,o)})};return s(t,{onBeforeEnter(e){Qa(v,[e]),ro(e,a),ro(e,o)},onBeforeAppear(e){Qa(C,[e]),ro(e,l),ro(e,u)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>D(e,t);ro(e,f),e._enterCancelled?(ro(e,p),fo(e)):(fo(e),ro(e,p)),ao(()=>{e._isLeaving&&(io(e,f),ro(e,m),$a(x)||so(e,r,_,n))}),Qa(x,[e,n])},onEnterCancelled(e){E(e,!1,void 0,!0),Qa(b,[e])},onAppearCancelled(e){E(e,!0,void 0,!0),Qa(T,[e])},onLeaveCancelled(e){D(e),Qa(S,[e])}})}function to(e){if(e==null)return null;if(v(e))return[no(e.enter),no(e.leave)];{let t=no(e);return[t,t]}}function no(e){return ie(e)}function ro(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Ja]||(e[Ja]=new Set)).add(t)}function io(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Ja];n&&(n.delete(t),n.size||(e[Ja]=void 0))}function ao(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var oo=0;function so(e,t,n,r){let i=e._endId=++oo,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=co(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function co(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Ka}Delay`),a=r(`${Ka}Duration`),o=lo(i,a),s=r(`${qa}Delay`),c=r(`${qa}Duration`),l=lo(s,c),u=null,d=0,f=0;t===Ka?o>0&&(u=Ka,d=o,f=a.length):t===qa?l>0&&(u=qa,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Ka:qa:null,f=u?u===Ka?a.length:c.length:0);let p=u===Ka&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ka}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function lo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>uo(t)+uo(e[n])))}function uo(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function fo(e){return(e?e.ownerDocument:document).body.offsetHeight}function po(e,t,n){let r=e[Ja];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var mo=Symbol(`_vod`),ho=Symbol(`_vsh`),go=Symbol(``),_o=/(?:^|;)\s*display\s*:/;function vo(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??bo(r,t,``)}else for(let e in t)n[e]??bo(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?bo(r,i,``):wo(e,i,!g(t)&&t?t[i]:void 0,o)||bo(r,i,o)}}else if(i){if(t!==n){let e=r[go];e&&(n+=`;`+e),r.cssText=n,a=_o.test(n)}}else t&&e.removeAttribute(`style`);mo in e&&(e[mo]=a?r.display:``,e[ho]&&(r.display=`none`))}var yo=/\s*!important$/;function bo(e,t,n){if(d(n))n.forEach(n=>bo(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Co(e,t);yo.test(n)?e.setProperty(k(r),n.replace(yo,``),`important`):e[r]=n}}var xo=[`Webkit`,`Moz`,`ms`],So={};function Co(e,t){let n=So[t];if(n)return n;let r=O(t);if(r!==`filter`&&r in e)return So[t]=r;r=A(r);for(let n=0;n<xo.length;n++){let i=xo[n]+r;if(i in e)return So[t]=i}return t}function wo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var To=`http://www.w3.org/1999/xlink`;function Eo(e,t,n,r,i,a=ue(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(To,t.slice(6,t.length)):e.setAttributeNS(To,t,n):n==null||a&&!L(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Do(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ba(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=L(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Oo(e,t,n,r){e.addEventListener(t,n,r)}function ko(e,t,n,r){e.removeEventListener(t,n,r)}var Ao=Symbol(`_vei`);function jo(e,t,n,r,i=null){let a=e[Ao]||(e[Ao]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Po(t);r?Oo(e,n,a[t]=Ro(r,i),s):o&&(ko(e,n,o,s),a[t]=void 0)}}var Mo=/(Once|Passive|Capture)$/,No=/^on:?(?:Once|Passive|Capture)$/;function Po(e){let t,n;for(;(n=e.match(Mo))&&!No.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):k(e.slice(2)),t]}var Fo=0,Io=Promise.resolve(),Lo=()=>Fo||=(Io.then(()=>Fo=0),Date.now());function Ro(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&Jt(e,t,5,a)}}else Jt(r,t,5,[e])};return n.value=e,n.attached=Lo(),n}var zo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Bo=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?po(e,r,c):t===`style`?vo(e,n,r):a(t)?o(t)||jo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Vo(e,t,r,c))?(Do(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Eo(e,t,r,c,s,t!==`value`)):e._isVueCE&&(Ho(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Do(e,O(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Eo(e,t,r,c))};function Vo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&zo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return zo(t)&&g(n)?!1:t in e}function Ho(e,t){let n=e._def.props;if(!n)return!1;let r=O(t);return Array.isArray(n)?n.some(e=>O(e)===r):Object.keys(n).some(e=>O(e)===r)}var Uo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>ne(t,e):t};function Wo(e){e.target.composing=!0}function Go(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var Ko=Symbol(`_assign`);function qo(e,t,n){return t&&(e=e.trim()),n&&(e=re(e)),e}var Jo={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Ko]=Uo(i);let a=r||i.props&&i.props.type===`number`;Oo(e,t?`change`:`input`,t=>{t.target.composing||e[Ko](qo(e.value,n,a))}),(n||a)&&Oo(e,`change`,()=>{e.value=qo(e.value,n,a)}),t||(Oo(e,`compositionstart`,Wo),Oo(e,`compositionend`,Go),Oo(e,`change`,Go))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[Ko]=Uo(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?re(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},Yo=[`ctrl`,`shift`,`alt`,`meta`],Xo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Yo.some(n=>e[`${n}Key`]&&!t.includes(n))},Zo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Xo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Qo={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},$o=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=k(n.key);if(t.some(e=>e===r||Qo[e]===r))return e(n)}))},es=s({patchProp:Bo},Ga),ts;function ns(){return ts||=Ni(es)}var rs=((...e)=>{let t=ns().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=as(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,is(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function is(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function as(e){return g(e)?document.querySelector(e):e}var os=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ss=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,cs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ls=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,us=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ds=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,fs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ps=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ms=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,hs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,gs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,_s=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,vs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ys=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,bs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,xs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ss=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Cs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ws=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ts=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Es=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ds=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Os=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ks=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,As=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,js=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ms=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ns=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ps=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Fs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Is=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ls=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Rs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,zs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Bs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Vs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Hs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Us=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ws=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Gs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ks=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,qs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Js=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Ys=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Xs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Zs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,Qs=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,$s=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ec=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,tc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,nc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,rc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ic=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,ac=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,oc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,sc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,cc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,lc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,uc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,dc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,fc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,pc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,mc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,hc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,gc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,_c=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,vc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,yc=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,bc=[{id:`akemi_homura`,name:`晓美焰`,themeColor:`#645087`,svgFile:`akemi_homura.svg`,uid:`3691002411879168`},{id:`madoka_kaname`,name:`鹿目圆`,themeColor:`#FFA8C1`,svgFile:`madoka_kaname.svg`,uid:`3691002411879168`},{id:`araya`,name:`阿赖耶`,themeColor:`#5B598F`,svgFile:`araya.svg`,uid:`3546379754408594`},{id:`otori_emu`,name:`凤笑梦`,themeColor:`#F5BAD5`,svgFile:`otori_emu.svg`,uid:`3706956189534684`},{id:`blackegg`,name:`蛋小黑`,themeColor:`#000000`,svgFile:`blackegg.svg`,uid:`3690996051216562`},{id:`kamado_nezuko`,name:`祢豆子`,themeColor:`#F6AAB2`,svgFile:`kamado_nezuko.svg`,uid:`3707007976605975`},{id:`thumbhandstand`,name:`荒野倒拇指`,themeColor:`#F7010A`,svgFile:`thumbhandstand.svg`,uid:`3546622929668214`},{id:`shinobu_kocho`,name:`蝴蝶忍`,themeColor:`#65519D`,svgFile:`shinobu_kocho.svg`,uid:`3546852674767406`},{id:`demon_slayer`,name:`鬼灭之刃`,themeColor:`#DA0017`,svgFile:`demon_slayer.svg`,uid:`3546852674767406`},{id:`mixue`,name:`雪王`,themeColor:`#E50116`,svgFile:`mixue.svg`,uid:`3546853587028743`},{id:`teto`,name:`Teto`,themeColor:`#EF0055`,svgFile:`teto.svg`,uid:`1292243480`},{id:`dreamy_yoyo`,name:`梦悠悠`,themeColor:`#AE82B2`,svgFile:`dreamy_yoyo.svg`,uid:`545150832`},{id:`twisted_face`,name:`扭曲脸`,themeColor:`#F7CF5D`,svgFile:`twisted_face.svg`,uid:`3690989344524408`},{id:`nine_tailed_fox`,name:`九尾狐`,themeColor:`#000000`,svgFile:`nine_tailed_fox.svg`,uid:`185623420`},{id:`chaos_insurgency`,name:`混沌分裂者`,themeColor:`#FF0016`,svgFile:`chaos_insurgency.svg`,uid:`185623420`},{id:`warma`,name:`沃玛`,themeColor:`#FF8B89`,svgFile:`warma.svg`,uid:`515455102`},{id:`qunu`,name:`群友`,themeColor:`#FFD0B3`,svgFile:`qunu.svg`,uid:`3493287732186034`},{id:`neow_ear`,name:`妙脆角`,themeColor:`#000000`,svgFile:`neow_ear.svg`,uid:`3546696065747439`},{id:`child_naiwa_ts`,name:`小奶蛙吐舌`,themeColor:`#ffc54c`,svgFile:`child_naiwa_ts.svg`,uid:`3546696065747439`},{id:`tokai_teio`,name:`东海帝王`,themeColor:`#904648`,svgFile:`tokai_teio.svg`,uid:`1952841538`},{id:`duoer`,name:`多儿`,themeColor:`#62B638`,svgFile:`duoer.svg`,uid:`3546962662000877`},{id:`talking_tomcat`,name:`说话汤姆猫`,themeColor:`#66C044`,svgFile:`talking_tomcat.svg`,uid:`3546654762338599`},{id:`zgrnf`,name:`中国人能飞`,themeColor:`#DE2910`,svgFile:`zgrnf.svg`,uid:`3546875321912139`},{id:`bill_cipher`,name:`三角形`,themeColor:`#F6E867`,svgFile:`bill_cipher.svg`,uid:`3632318503717105`},{id:`catnana`,name:`香蕉猫`,themeColor:`#F7EA33`,svgFile:`catnana.svg`,uid:`70900894`},{id:`konoha_ninja`,name:`木叶忍者`,themeColor:`#000000`,svgFile:`konoha_ninja.svg`},{id:`naruto_text`,name:`火影忍者`,themeColor:`#EB6C38`,svgFile:`naruto_text.svg`,uid:`2133947492`},{id:`naruto_logo`,name:`火影忍者`,themeColor:`#EB6C38`,svgFile:`naruto_logo.svg`,uid:`2133947492`},{id:`mikucat`,name:`Miku猫猫`,themeColor:`#7CECE4`,svgFile:`mikucat.svg`},{id:`sans`,name:`sans`,themeColor:`#000000`,svgFile:`sans.svg`,uid:`3706936052681121`},{id:`xjgmd`,name:`小鸡裹麻袋`,themeColor:`#FF6E6B`,svgFile:`xjgmd.svg`,uid:`1148934140`},{id:`dingdongji`,name:`叮咚鸡`,themeColor:`#FFA445`,svgFile:`dingdongji.svg`,uid:`3546964232767819`},{id:`chinaball`,name:`中国球`,themeColor:`#A62525`,svgFile:`chinaball.svg`,uid:`3546654762338599`},{id:`arknight`,name:`明日方舟`,themeColor:`#000000`,svgFile:`arknights.svg`},{id:`niulai`,name:`牛来`,themeColor:`#FAB933`,svgFile:`niulai.svg`,uid:`3706940500740536`},{id:`feifeidu`,name:`胆子肥嘟嘟`,themeColor:`#FFB623`,svgFile:`feifeidu.svg`,uid:`3546879581227658`},{id:`kuyaxi`,name:`小桃苦呀西`,themeColor:`#FF90AA`,svgFile:`kuyaxi.svg`,uid:`699195630`},{id:`lele`,name:`乐乐`,themeColor:`#7b7b7b`,svgFile:`lele.svg`,uid:`3706949570923457`},{id:`korfball`,name:`荷兰球`,themeColor:`#AE1C27`,svgFile:`korfball.svg`,uid:`3691001428314274`},{id:`volleyball`,name:`芬兰球`,themeColor:`#003B7E`,svgFile:`volleyball.svg`,uid:`3691001428314274`},{id:`shiroko`,name:`白子`,themeColor:`#A6F3FE`,svgFile:`shiroko.svg`,uid:`2088583726`},{id:`manbo`,name:`诗歌剧`,themeColor:`#A39DC4`,svgFile:`manbo.svg`,uid:`564907556`},{id:`doubao`,name:`豆包`,themeColor:`#CF3733`,svgFile:`doubao.svg`,uid:`484421218`},{id:`salary_cat`,name:`月薪喵`,themeColor:`#D1B79A`,svgFile:`salary_cat.svg`,uid:`3706929576676043`},{id:`rickrolling`,name:`瑞克摇`,themeColor:`#000000`,svgFile:`rickrolling.svg`,uid:`500239999`},{id:`among_us`,name:`Among Us`,themeColor:`#CC000D`,svgFile:`among_us.svg`,uid:`3493095347849253`},{id:`naiwa_laugh`,name:`奶蛙大笑`,themeColor:`#ffc54c`,svgFile:`naiwa_laugh.svg`,uid:`3461565158263167`},{id:`taffy`,name:`塔菲`,themeColor:`#FFC8CB`,svgFile:`taffy.svg`,uid:`3461563107248333`},{id:`miku`,name:`Miku`,themeColor:`#81e0d8`,svgFile:`miku.svg`,uid:`3707019492067362`},{id:`dagoujiao`,name:`大狗叫`,themeColor:`#EFC094`,svgFile:`dagoujiao.svg`,uid:`3546780069267990`},{id:`naiwa`,name:`奶蛙`,themeColor:`#ffc54c`,svgFile:`naiwa.svg`,uid:`3546828333123649`},{id:`shushu`,name:`鼠鼠`,themeColor:`#BE9D69`,svgFile:`shushu.svg`,uid:`3546836065323554`},{id:`maodie`,name:`耄耋`,themeColor:`#BE9D69`,svgFile:`maodie.svg`,uid:`3546686636952349`},{id:`bili_app`,name:`哔哩APP`,themeColor:`#FF79A8`,svgFile:`bili_app.svg`,uid:`1042259307`},{id:`nte`,name:`异环`,themeColor:`#000000`,svgFile:`nte.svg`,uid:`3691007084333219`},{id:`fool`,name:`啥子`,themeColor:`#000000`,svgFile:`fool.svg`,uid:`3546802817075650`},{id:`lil_hater`,name:`小黑子`,themeColor:`#FFDB5C`,svgFile:`lil_hater.svg`,uid:`1746941295`},{id:`triple_tap`,name:`一键三连`,themeColor:`#FF79A8`,svgFile:`triple_tap.svg`,uid:`3494374585403677`},{id:`sad_dxh`,name:`悲伤蛋小黄`,themeColor:`#E8B941`,svgFile:`sad_dxh.svg`},{id:`teto_pear`,name:`Teto梨`,themeColor:`#E14263`,svgFile:`teto_pear.svg`,uid:`1148934140`},{id:`pikachu`,name:`皮卡丘`,themeColor:`#FFE228`,svgFile:`pikachu.svg`,uid:`490459227`},{id:`scp`,name:`基金会`,themeColor:`#000000`,svgFile:`scp.svg`,uid:`3546964390054869`},{id:`doro`,name:`Doro`,themeColor:`#E9AFC8`,svgFile:`doro.svg`},{id:`genshin`,name:`原神`,themeColor:`#000000`,svgFile:`genshin.svg`},{id:`stinky_penguin`,name:`凑企鹅`,themeColor:`#7A7186`,svgFile:`Stinky_penguin.svg`},{id:`nailong`,name:`奶龙`,themeColor:`#ffc54c`,svgFile:`nailong.svg`}],xc=Object.assign({"../assets/shapes/Stinky_penguin.svg":os,"../assets/shapes/akemi_homura.svg":ss,"../assets/shapes/among_us.svg":cs,"../assets/shapes/araya.svg":ls,"../assets/shapes/arknights.svg":us,"../assets/shapes/bili_app.svg":ds,"../assets/shapes/bill_cipher.svg":fs,"../assets/shapes/blackegg.svg":ps,"../assets/shapes/catnana.svg":ms,"../assets/shapes/chaos_insurgency.svg":hs,"../assets/shapes/child_naiwa_ts.svg":gs,"../assets/shapes/chinaball.svg":_s,"../assets/shapes/dagoujiao.svg":vs,"../assets/shapes/demon_slayer.svg":ys,"../assets/shapes/dingdongji.svg":bs,"../assets/shapes/doro.svg":xs,"../assets/shapes/doubao.svg":Ss,"../assets/shapes/dreamy_yoyo.svg":Cs,"../assets/shapes/duoer.svg":ws,"../assets/shapes/feifeidu.svg":Ts,"../assets/shapes/fool.svg":Es,"../assets/shapes/genshin.svg":Ds,"../assets/shapes/import.svg":Os,"../assets/shapes/kamado_nezuko.svg":ks,"../assets/shapes/konoha_ninja.svg":As,"../assets/shapes/korfball.svg":js,"../assets/shapes/kuyaxi.svg":Ms,"../assets/shapes/lele.svg":Ns,"../assets/shapes/lil_hater.svg":Ps,"../assets/shapes/madoka_kaname.svg":Fs,"../assets/shapes/manbo.svg":Is,"../assets/shapes/maodie.svg":Ls,"../assets/shapes/miku.svg":Rs,"../assets/shapes/mikucat.svg":zs,"../assets/shapes/mixue.svg":Bs,"../assets/shapes/nailong.svg":Vs,"../assets/shapes/naiwa.svg":Hs,"../assets/shapes/naiwa_laugh.svg":Us,"../assets/shapes/naruto_logo.svg":Ws,"../assets/shapes/naruto_text.svg":Gs,"../assets/shapes/neow_ear.svg":Ks,"../assets/shapes/nine_tailed_fox.svg":qs,"../assets/shapes/niulai.svg":Js,"../assets/shapes/nte.svg":Ys,"../assets/shapes/otori_emu.svg":Xs,"../assets/shapes/pikachu.svg":Zs,"../assets/shapes/question.svg":Qs,"../assets/shapes/qunu.svg":$s,"../assets/shapes/rickrolling.svg":ec,"../assets/shapes/sad_dxh.svg":tc,"../assets/shapes/salary_cat.svg":nc,"../assets/shapes/sans.svg":rc,"../assets/shapes/scp.svg":ic,"../assets/shapes/shinobu_kocho.svg":ac,"../assets/shapes/shiroko.svg":oc,"../assets/shapes/shushu.svg":sc,"../assets/shapes/taffy.svg":cc,"../assets/shapes/talking_tomcat.svg":lc,"../assets/shapes/teto.svg":uc,"../assets/shapes/teto_pear.svg":dc,"../assets/shapes/thumbhandstand.svg":fc,"../assets/shapes/tokai_teio.svg":pc,"../assets/shapes/triple_tap.svg":mc,"../assets/shapes/twisted_face.svg":hc,"../assets/shapes/volleyball.svg":gc,"../assets/shapes/warma.svg":_c,"../assets/shapes/xjgmd.svg":vc,"../assets/shapes/zgrnf.svg":yc}),Sc=`1.0.0`,Cc=`Stand404`,wc=`382365750`,Tc=bc.map(e=>{let t=xc[`../assets/shapes/${e.svgFile}`];if(typeof t!=`string`)throw Error(`SHAPES: 找不到 SVG 文件 ${e.svgFile}（id=${e.id}），请确认文件存在且拼写一致`);let n={id:e.id,name:e.name,themeColor:e.themeColor,svg:t};return e.uid&&(n.uid=e.uid),n}),Ec=xc[`../assets/shapes/question.svg`]??``;function Dc(e){return Tc.find(t=>t.id===e)??Tc.find(e=>e.id===`nailong`)}function Oc(e){let t=[],n=/<path[^>]*\sd\s*=\s*("([^"]*)"|'([^']*)')/g,r;for(;(r=n.exec(e))!==null;)t.push(r[2]??r[3]??``);return t}function kc(e){let t=Oc(e);if(t.length===0)throw Error(`sampleSvgPaths: no <path d="..."> found in SVG source`);return t.flatMap(e=>zc(e))}function Ac(e,t=1.5,n=26){let r=e.match(/viewBox="[\d.\-]+\s+[\d.\-]+\s+([\d.\-]+)/),i=t*(r?parseFloat(r[1]):500)/n;return e.replace(/<svg([^>]*)>/,(e,t)=>`<svg${t} stroke-width="${i.toFixed(1)}">`)}function jc(e){let t=[],n=/([A-Za-z])|(-?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)/g,r;for(;(r=n.exec(e))!==null;)t.push(r[0]);return t}var Mc=8,Nc=6,Pc=24;function Fc(e,t,n,r,i){let a=1-i,o=a*a*a,s=3*a*a*i,c=3*a*i*i,l=i*i*i;return{x:o*e.x+s*t.x+c*n.x+l*r.x,y:o*e.y+s*t.y+c*n.y+l*r.y}}function Ic(e,t,n,r){let i=1-r;return{x:i*i*e.x+2*i*r*t.x+r*r*n.x,y:i*i*e.y+2*i*r*t.y+r*r*n.y}}function Lc(e,t,n,r){return Math.atan2(e*r-t*n,e*n+t*r)}function Rc(e,t,n,r,i,a,o,s,c){if(Math.hypot(e.x-o.x,e.y-o.y)<1e-9)return;let l=r*Math.PI/180,u=Math.cos(l),d=Math.sin(l),f=(e.x-o.x)/2,p=(e.y-o.y)/2,m=u*f+d*p,h=-d*f+u*p,g=Math.abs(t),_=Math.abs(n),v=m*m/(g*g)+h*h/(_*_);if(v>1){let e=Math.sqrt(v);g*=e,_*=e}let y=g*g*_*_-g*g*h*h-_*_*m*m,b=g*g*h*h+_*_*m*m,x=y<0||b===0?0:Math.sqrt(y/b);i===a&&(x=-x);let S=x*g*h/_,C=-x*_*m/g,w=u*S-d*C+(e.x+o.x)/2,T=d*S+u*C+(e.y+o.y)/2,E=(m-S)/g,D=(h-C)/_,O=(-m-S)/g,ee=(-h-C)/_,k=Lc(1,0,E,D),A=Lc(E,D,O,ee);!a&&A>0&&(A-=Math.PI*2),a&&A<0&&(A+=Math.PI*2);let te=Math.max(2,Math.ceil(Math.abs(A)/(Math.PI*2)*s));for(let e=1;e<=te;e++){let t=k+A*e/te,n=Math.cos(t),r=Math.sin(t);c.push({x:w+g*n*u-_*r*d,y:T+g*n*d+_*r*u})}}function zc(e){let t=jc(e);if(t.length===0)throw Error(`samplePathData: empty path data`);let n=0,r=``,i={x:0,y:0},a={x:0,y:0},o=null,s=null,c=[],l=[],u=e=>/^[A-Za-z]$/.test(e),d=()=>{if(n>=t.length)return null;let e=t[n];return u(e)?null:(n++,parseFloat(e))},f=()=>{let e=d();if(e===null)return null;let t=d();return t===null?null:{x:e,y:t}},p=e=>{let t=l[l.length-1];t&&Math.hypot(e.x-t.x,e.y-t.y)<1e-9||l.push({x:e.x,y:e.y})},m=()=>{l.length>0&&(c.push(l),l=[])};for(;n<t.length;){let e=t[n];u(e)?(r=e,n++):r===``&&(r=`M`);let c=r===r.toUpperCase(),h=r.toUpperCase(),g=e=>c?e:{x:e.x+i.x,y:e.y+i.y};switch(h){case`M`:{m();let e=f();if(!e)break;for(i=g(e),a=i,o=null,s=null,p(i);;){let e=f();if(!e)break;let t=g(e);p(t),i=t}break}case`L`:for(;;){let e=f();if(!e)break;let t=g(e);p(t),i=t}break;case`H`:for(;;){let e=d();if(e===null)break;i=g({x:e,y:c?i.y:0}),p(i)}break;case`V`:for(;;){let e=d();if(e===null)break;i=g({x:c?i.x:0,y:e}),p(i)}break;case`C`:for(;;){let e=f(),t=f(),n=f();if(!e||!t||!n)break;let r=g(e),a=g(t),s=g(n);for(let e=1;e<=Mc;e++)p(Fc(i,r,a,s,e/Mc));o=a,i=s}break;case`S`:for(;;){let e=f(),t=f();if(!e||!t)break;let n=g(e),r=g(t),a=o?{x:2*i.x-o.x,y:2*i.y-o.y}:{x:i.x,y:i.y};for(let e=1;e<=Mc;e++)p(Fc(i,a,n,r,e/Mc));o=n,i=r}break;case`Q`:for(;;){let e=f(),t=f();if(!e||!t)break;let n=g(e),r=g(t);for(let e=1;e<=Nc;e++)p(Ic(i,n,r,e/Nc));s=n,i=r}break;case`T`:for(;;){let e=f();if(!e)break;let t=g(e),n=s?{x:2*i.x-s.x,y:2*i.y-s.y}:{x:i.x,y:i.y};for(let e=1;e<=Nc;e++)p(Ic(i,n,t,e/Nc));s=n,i=t}break;case`A`:for(;;){let e=d(),t=d(),n=d(),r=d(),a=d(),o=f();if(e===null||t===null||n===null||r===null||a===null||!o)break;let s=g(o);Rc(i,e,t,n,r!==0,a!==0,s,Pc,l),i=s}break;case`Z`:Math.hypot(i.x-a.x,i.y-a.y)>1e-9&&p(a),i=a,o=null,s=null}}if(m(),c.length===0)throw Error(`samplePathData: no points produced`);return c}function Bc(e){if(e.length===0)throw Error(`getBounds: points must not be empty`);let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a=0;a<e.length;a++){let o=e[a];o.x<t&&(t=o.x),o.y<n&&(n=o.y),o.x>r&&(r=o.x),o.y>i&&(i=o.y)}return{minX:t,minY:n,width:r-t||1,height:i-n||1}}function Vc(e,t){let n=t??Bc(e);return e.map(e=>({x:(e.x-n.minX)/n.width,y:(e.y-n.minY)/n.height}))}function Hc(e,t,n){if(t<=0)return e;let{minX:r,minY:i,width:a,height:o}=e,s=a,c=o,l=n&&n>0?t*Math.min(n,1/n):t;if(o/a<l?c=a*l:a/o<l&&(s=o*l),s===a&&c===o)return e;let u=r+a/2,d=i+o/2;return{minX:u-s/2,minY:d-c/2,width:s,height:c}}function Uc(e,t){return e.map(e=>({x:t.minX+e.x*t.width,y:t.minY+e.y*t.height}))}function Wc(e){let t=[];for(let n of e){let e=t[t.length-1];(!e||e.x!==n.x||e.y!==n.y)&&t.push(n)}return t}var Gc=10;function Kc(e,t=.5){if(e.length<=2)return e.slice();let n=Math.round(Math.max(0,Math.min(1,t))*Gc);if(n===0)return e.slice();let r=e.length,i=e.slice(),a=Array(r);for(let e=0;e<n;e++){for(let e=0;e<r;e++){let t=i[e];if(e===0||e===r-1)a[e]={x:t.x,y:t.y};else{let n=i[e-1],r=t,o=i[e+1];a[e]={x:(n.x+2*r.x+o.x)/4,y:(n.y+2*r.y+o.y)/4}}}let e=i;i=a,a=e}return i}function qc(e){let t=0;for(let n=1;n<e.length;n++)t+=Math.hypot(e[n].x-e[n-1].x,e[n].y-e[n-1].y);return t}function Jc(e,t){if(e.length===0)throw Error(`resampleTo: points must not be empty`);if(t<1)throw Error(`resampleTo: n must be >= 1`);let n=Wc(e);if(n.length===1||t===1){let e=n[0];return Array.from({length:t},()=>({x:e.x,y:e.y}))}let r=[0];for(let e=1;e<n.length;e++){let t=n[e-1],i=n[e];r.push(r[e-1]+Math.hypot(i.x-t.x,i.y-t.y))}let i=r[r.length-1];if(i===0){let e=n[0];return Array.from({length:t},()=>({x:e.x,y:e.y}))}let a=[];for(let e=0;e<t;e++){let o=e/(t-1)*i,s=0;for(;s<n.length-2&&r[s+1]<o;)s++;let c=r[s+1]-r[s],l=c===0?0:(o-r[s])/c,u=n[s],d=n[s+1];a.push({x:u.x+(d.x-u.x)*l,y:u.y+(d.y-u.y)*l})}return a}function Yc(e,t){if(t<1)throw Error(`splitStroke: k must be >= 1`);let n=Wc(e);if(t===1||n.length<=1)return Array.from({length:t},()=>n.map(e=>({x:e.x,y:e.y})));let r=[0];for(let e=1;e<n.length;e++){let t=n[e-1],i=n[e];r.push(r[e-1]+Math.hypot(i.x-t.x,i.y-t.y))}let i=r[r.length-1];if(i===0)return Array.from({length:t},()=>n.map(e=>({x:e.x,y:e.y})));let a=e=>{if(e<=0)return{x:n[0].x,y:n[0].y};if(e>=i)return{x:n[n.length-1].x,y:n[n.length-1].y};let t=0;for(;t<n.length-2&&r[t+1]<e;)t++;let a=r[t+1]-r[t],o=a===0?0:(e-r[t])/a,s=n[t],c=n[t+1];return{x:s.x+(c.x-s.x)*o,y:s.y+(c.y-s.y)*o}},o=[];for(let e=0;e<t;e++){let s=i*e/t,c=i*(e+1)/t,l=[a(s)];for(let e=1;e<n.length-1;e++){let t=r[e];t>s&&t<c&&l.push({x:n[e].x,y:n[e].y})}l.push(a(c)),o.push(l)}return o}var Xc=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function Zc(e){let{sourcePoints:t,targetPoints:n,durationMs:r=1e3,sampleCount:i=256,easing:a=Xc}=e;if(t.length===0)throw Error(`buildMorphFrames: sourcePoints must not be empty`);if(n.length===0)throw Error(`buildMorphFrames: targetPoints must not be empty`);let o=i;return{src:Jc(Wc(t),o),tgt:Jc(Wc(n),o),durationMs:r,easing:a,frameCount:Math.max(2,Math.ceil(r/1e3*60))}}function Qc(e,t){let n=t/(e.frameCount-1);return e.easing(n)}function $c(e,t,n){let{src:r,tgt:i}=e,a=r.length;n.length!==a&&(n.length=a);for(let e=0;e<a;e++){let a=r[e],o=i[e],s=n[e];s?(s.x=a.x+(o.x-a.x)*t,s.y=a.y+(o.y-a.y)*t):n[e]={x:a.x+(o.x-a.x)*t,y:a.y+(o.y-a.y)*t}}return n}function el(e){return e.tgt.map(e=>({x:e.x,y:e.y}))}var tl=.01;function nl(e){return Math.min(10,Math.max(tl,e))}function rl(e,t,n){return{x:(t-e.panX)/e.scale,y:(n-e.panY)/e.scale}}function il(e,t,n){let r=nl(e.scale*n),i=r/e.scale;return{scale:r,panX:t.x-(t.x-e.panX)*i,panY:t.y-(t.y-e.panY)*i}}function al(e,t,n,r,i){let a=Math.max(1,t),o=nl(e.scale*(r/a)),s=rl(e,n.x,n.y);return{scale:o,panX:i.x-s.x*o,panY:i.y-s.y*o}}var ol={class:`drawing-canvas`},sl=ir({__name:`DrawingCanvas`,props:{strokeColor:{},minAspect:{},strokeWidth:{},smoothEnabled:{type:Boolean},smoothStrength:{}},emits:[`strokeComplete`,`drawStart`,`drawCancel`,`historyChange`,`morphChange`,`viewChange`],setup(e,{expose:t,emit:n}){let r=e,i=n,a=G(null),o=null,s=0,c=0,l=null,u=[],d=3,f=[],p=[],m=0,h=null,g=null,_=!0,v=Ct({scale:1,panX:0,panY:0}),y=new Map,b=null,x=[[]],S=0,C=new Map,w=()=>r.strokeColor??`#000000`,T=()=>r.strokeWidth??3;function E(e){return r.smoothEnabled&&(r.smoothStrength??0)>0?Kc(e,r.smoothStrength):e}let D=[],O=-1;function ee(){return u.length!==O&&(D=E(u),O=u.length),D}function k(){D=[],O=-1}function A(){let e=a.value;if(!e)return;let t=e.getBoundingClientRect();s=t.width,c=t.height;let n=window.devicePixelRatio||1;e.width=Math.max(1,Math.round(s*n)),e.height=Math.max(1,Math.round(c*n)),o=e.getContext(`2d`),o&&(o.lineCap=`round`,o.lineJoin=`round`),h||=document.createElement(`canvas`),h.width=e.width,h.height=e.height,g=h.getContext(`2d`),g&&(g.lineCap=`round`,g.lineJoin=`round`),_=!0,z=-1,H()}function te(){let e=o;if(!e)return;let t=window.devicePixelRatio||1;e.setTransform(t*v.scale,0,0,t*v.scale,t*v.panX,t*v.panY)}function j(e){v.scale=e.scale,v.panX=e.panX,v.panY=e.panY,_=!0,z=-1,i(`viewChange`,{scale:v.scale,panX:v.panX,panY:v.panY}),H()}function ne(){j({scale:1,panX:0,panY:0})}function M(e){let t=a.value.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}function re(e){let t=M(e);return rl(v,t.x,t.y)}function ie(e,t){return Math.hypot(t.x-e.x,t.y-e.y)}function ae(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function oe(){l!==null&&(l=null,u=[],k(),i(`drawCancel`),H())}function N(e){if(!y.has(e.pointerId)){if(y.set(e.pointerId,M(e)),y.size>=2){oe(),a.value?.setPointerCapture(e.pointerId);let t=[...y.values()];b={view0:{scale:v.scale,panX:v.panX,panY:v.panY},dist0:Math.max(1,ie(t[0],t[1])),center0:ae(t[0],t[1])};return}l===null&&(l=e.pointerId,a.value?.setPointerCapture(e.pointerId),d=T(),u=[re(e)],i(`drawStart`),H())}}let P=0;function se(e){if(y.has(e.pointerId)){if(y.set(e.pointerId,M(e)),b&&y.size>=2){let e=[...y.values()];j(al(b.view0,b.dist0,b.center0,ie(e[0],e[1]),ae(e[0],e[1])));return}e.pointerId===l&&(u.push(re(e)),P||=requestAnimationFrame(()=>{P=0,H()}))}}function F(e){if(y.delete(e.pointerId),b){if(y.size>=2){let e=[...y.values()];b={view0:{scale:v.scale,panX:v.panX,panY:v.panY},dist0:Math.max(1,ie(e[0],e[1])),center0:ae(e[0],e[1])}}else b=null,l=null,u=[],k(),H();return}if(e.pointerId!==l)return;l=null,P&&=(cancelAnimationFrame(P),0);let t=ee();u=[],k(),i(`strokeComplete`,t,d),H()}function ce(e){e.preventDefault();let t=M(e),n=Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0012));j(il(v,t,n))}function I(e,t,n){p.push({morph:e,interp:[],start:performance.now(),index:0,color:t??w(),width:n??T(),batch:S}),C.set(S,(C.get(S)??0)+1),m||=requestAnimationFrame(R)}function le(){S+=1,i(`historyChange`,{canUndo:x.length>1})}function ue(){x.push(f.slice()),i(`historyChange`,{canUndo:!0})}function L(){m&&=(cancelAnimationFrame(m),0);for(let e of p)if(e.batch!==void 0){let t=(C.get(e.batch)??1)-1;t<=0?C.delete(e.batch):C.set(e.batch,t)}p=[],u=[],k(),l=null}function de(e,t){if(e.length===0)return;let n=[];if(f.forEach((e,t)=>{e.morphed||n.push(t)}),n.length!==0){ue();for(let i of n.reverse()){let n=f[i],a=Hc(Bc(n.points),r.minAspect??0,t),o=Yc(Vc(n.points,a),e.length);f.splice(i,1),z=-1,o.forEach((t,r)=>{let i=Zc({sourcePoints:Uc(t,a),targetPoints:Uc(e[r],a)});p.push({morph:i,interp:[],start:performance.now(),index:0,color:n.color,width:n.width,batch:S,noHistory:!0}),C.set(S,(C.get(S)??0)+1)})}_=!0,S+=1,pe(),m||=requestAnimationFrame(R)}}function fe(){return f.some(e=>!e.morphed)}function pe(){i(`morphChange`,fe())}function R(e){let t=!0;for(let n of p){let r=n.morph.frameCount,i=(r-1)*16.666666666666668,a=Math.min(1,(e-n.start)/i);n.index=Math.min(r-1,Math.floor(a*(r-1))),a<1&&(t=!1)}let n=new Map;for(let e of p){let t=e.morph.frameCount;e.batch!==void 0&&e.index>=t-1&&n.set(e.batch,(n.get(e.batch)??0)+1)}let r=new Set;for(let[e,t]of n)(C.get(e)??0)<=t&&r.add(e);for(let e of r){let t=[];for(let n of p){let r=n.morph.frameCount;n.batch===e&&n.index>=r-1&&t.push(n)}t.some(e=>e.noHistory)||ue(),t.forEach(B)}let i=[];for(let e of p){let t=e.morph.frameCount;e.index<t-1||e.batch!==void 0&&!r.has(e.batch)?i.push(e):B(e)}p=i,r.size>0&&pe(),H(),m=t?0:requestAnimationFrame(R)}function me(e,t,n,r){let i=t.length;if(i===0)return;e.strokeStyle=n,e.lineWidth=r,e.beginPath();let a=t[0];e.moveTo(a.x,a.y);for(let n=1;n<i;n++){let r=t[n];e.lineTo(r.x,r.y)}e.stroke()}function he(){let e=g;if(!e)return;let t=window.devicePixelRatio||1;e.setTransform(t*v.scale,0,0,t*v.scale,t*v.panX,t*v.panY)}let z=0;function ge(){let e=g,t=h;if(!(!e||!t)){if(z===-1){e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height),he();for(let t of f)me(e,t.points,t.color,t.width);z=f.length}else if(z<f.length){he();for(let t=z;t<f.length;t++){let n=f[t];me(e,n.points,n.color,n.width)}z=f.length}_=!1}}function B(e){let t=el(e.morph);if(t.length>0&&(f.push({points:t,color:e.color,width:e.width,morphed:!0}),_=!0),e.batch!==void 0){let t=(C.get(e.batch)??1)-1;t<=0?C.delete(e.batch):C.set(e.batch,t)}}function V(e,t,n){ue(),f.push({points:e,color:t,width:n,morphed:!1}),_=!0,H(),pe()}function _e(e,t){L(),C.clear();let n=Math.max(1,Math.min(s,c)*.72),a=e.map(e=>({points:e.map(e=>({x:(e.x-.5)*n+s/2,y:(e.y-.5)*n+c/2})),color:t,width:r.strokeWidth??3,morphed:!1}));f=a,_=!0,z=-1,x=[a.map(e=>({...e,points:e.points.slice()}))],H(),i(`historyChange`,{canUndo:!1}),pe()}function H(){let e=o,t=a.value;if(!(!e||!t)){_&&ge(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height),h&&e.drawImage(h,0,0),te();for(let t of p){let n=Qc(t.morph,t.index);me(e,$c(t.morph,n,t.interp),t.color,t.width)}me(e,ee(),w(),d)}}function ve(e){let t=[];for(let n of p)if(n.batch===e){let t=(C.get(e)??1)-1;t<=0?C.delete(e):C.set(e,t)}else t.push(n);p=t,p.length===0&&m&&(cancelAnimationFrame(m),m=0)}function ye(){if(p.length>0){let e=-1;for(let t of p)t.batch!==void 0&&t.batch>e&&(e=t.batch);if(e>=0){let t=p.some(t=>t.batch===e&&t.noHistory);ve(e),t&&x.length>1&&(f=x.pop(),_=!0,z=-1,i(`historyChange`,{canUndo:x.length>1})),H(),pe();return}}x.length<=1||(L(),f=x.pop(),_=!0,z=-1,H(),i(`historyChange`,{canUndo:x.length>1}),pe())}function be(){L(),f=[],_=!0,z=-1,C.clear(),x=[[]],H(),i(`historyChange`,{canUndo:!1}),pe()}function xe(){return f.length===0&&p.length===0&&u.length===0}function Se(){return f.filter(e=>!e.morphed).map(e=>e.points.slice())}function Ce(){L(),x=[f.slice()],i(`historyChange`,{canUndo:!1})}function we(){return{staticShapes:f.slice(),undoStack:x.map(e=>e.slice())}}function Te(e){L(),f=e.staticShapes.map(e=>({...e,points:e.points.slice()})),x=e.undoStack.map(e=>e.map(e=>({...e,points:e.points.slice()}))),_=!0,H(),i(`historyChange`,{canUndo:x.length>1}),pe()}function Ee(){A()}return yr(()=>{A(),window.addEventListener(`resize`,Ee),a.value?.addEventListener(`wheel`,ce,{passive:!1})}),Sr(()=>{window.removeEventListener(`resize`,Ee),a.value?.removeEventListener(`wheel`,ce),m&&cancelAnimationFrame(m)}),t({playFrames:I,beginStroke:le,morphAll:de,commitRawStroke:V,loadShape:_e,clear:be,isEmpty:xe,getRawStrokes:Se,resetUndoBoundary:Ce,undo:ye,snapshotState:we,restoreState:Te,resetView:ne}),(e,t)=>(J(),Y(`div`,ol,[X(`canvas`,{ref_key:`canvasEl`,ref:a,class:`drawing-canvas__canvas`,onPointerdown:N,onPointermove:se,onPointerup:F,onPointercancel:F},null,544)]))}}),cl=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ll=cl(sl,[[`__scopeId`,`data-v-f27dd002`]]);function ul(e){return e.map(e=>e.map(e=>({x:1-e.x,y:e.y})))}function dl(e){let t=e.flat();if(t.length===0)return e;let n=t.map(e=>e.x),r=t.map(e=>e.y),i=Math.min(...n),a=Math.max(...n),o=Math.min(...r),s=Math.max(...r),c=a-i||1,l=s-o||1,u=c/l;if(u>=1){let t=1/u,n=(1-t)/2;return e.map(e=>e.map(e=>({x:Math.min(1,Math.max(0,(e.x-i)/c)),y:Math.min(1,Math.max(0,(e.y-o)/l*t+n))})))}let d=u,f=(1-d)/2;return e.map(e=>e.map(e=>({x:Math.min(1,Math.max(0,(e.x-i)/c*d+f)),y:Math.min(1,Math.max(0,(e.y-o)/l))})))}function fl(e){let t=e.flat();if(t.length===0)return 1;let n=t.map(e=>e.x),r=t.map(e=>e.y),i=Math.max(...n)-Math.min(...n),a=Math.max(...r)-Math.min(...r);return a<=0?1:i/a}function pl(e,t){let n=ml(e);return n&&n.width>0&&n.height>0?n.width/n.height:fl(t)}function ml(e){let t=e.match(/viewBox\s*=\s*["']\s*([\d.\-eE]+)\s+([\d.\-eE]+)\s+([\d.\-eE]+)\s+([\d.\-eE]+)\s*["']/);if(!t)return null;let n=parseFloat(t[3]),r=parseFloat(t[4]);return!Number.isFinite(n)||!Number.isFinite(r)||n<=0||r<=0?null:{minX:parseFloat(t[1]),minY:parseFloat(t[2]),width:n,height:r}}function hl(e,t){let n=ml(t);if(!n)return dl(e);let r=n.width||1,i=n.height||1;return e.map(e=>e.map(e=>({x:Math.min(1,Math.max(0,(e.x-n.minX)/r)),y:Math.min(1,Math.max(0,(e.y-n.minY)/i))})))}function gl(e){if(typeof e.themeColor!=`string`||!/^#[0-9a-f]{6}$/i.test(e.themeColor))throw Error(`shape: invalid themeColor`);if(typeof e.aspectRatio!=`number`||!Number.isFinite(e.aspectRatio)||e.aspectRatio<=0)throw Error(`shape: invalid aspectRatio`);if(e.paths.length<1)throw Error(`shape: need >= 1 path`);for(let t of e.paths){if(t.length<3)throw Error(`shape: each path needs >= 3 points`);for(let e of t){if(!Number.isFinite(e.x)||!Number.isFinite(e.y))throw Error(`shape: non-finite coordinate`);if(e.x<0||e.x>1||e.y<0||e.y>1)throw Error(`shape: coordinate out of [0,1]`)}for(let e=1;e<t.length;e++)if(Math.hypot(t[e].x-t[e-1].x,t[e].y-t[e-1].y)<1e-9)throw Error(`shape: duplicate adjacent point`)}}function _l(e){let t=e.flat(),n=Math.min(...t.map(e=>e.x)),r=Math.max(...t.map(e=>e.x)),i=Math.min(...t.map(e=>e.y)),a=Math.max(...t.map(e=>e.y)),o=1e-6;if(!(n<=o)&&!(r>=.999999)&&!(i<=o)&&!(a>=.999999))return e;let s=.08,c=1-s*2;return e.map(e=>e.map(e=>({x:s+e.x*c,y:s+e.y*c})))}function vl(e,t,n,r,i=!1){let a=kc(e).filter(e=>e.length>=3);if(a.length===0)throw Error(`buildShapeFromSvg: no valid path (each needs >= 3 points)`);let o=i?hl(a,e):dl(a);i&&(o=_l(o));let s={name:t,version:n,themeColor:r,paths:o,aspectRatio:pl(e,o)};return gl(s),s}function yl(e,t=0){let n=Math.max(0,t),r=e.map(e=>`M `+e.map(e=>`${(n+e.x*100).toFixed(3)} ${(n+e.y*100).toFixed(3)}`).join(` L `)).join(` `),i=100+n*2;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${i} ${i}" fill="none" stroke="currentColor"><path d="${r}"/></svg>`}function bl(e){return e===``}function xl(e,t){return e.some(bl)&&!e.some(e=>!bl(e)&&e===t)}function Sl(){let e=G(null),t=G(!1),n=G(!1),r=G(!1),i=G({scale:1,panX:0,panY:0}),a=$(()=>Math.round(i.value.scale*100)),o=$(()=>Math.abs(i.value.scale-1)>1e-6||i.value.panX!==0||i.value.panY!==0),s=`always-xx:settings`,c=`always-xx:onboarded`;function l(){try{let e=localStorage.getItem(s);return e?JSON.parse(e):{}}catch{return{}}}function u(){try{let e={mode:f.value,palette:y.value,minAspect:C.value,strokeColor:x.value,strokeWidth:w.value,smoothEnabled:E.value,smoothStrength:D.value};localStorage.setItem(s,JSON.stringify(e))}catch{}}let d=l(),f=G(d.mode??`auto`),p=[`#000000`,`#e53935`,`#1e88e5`],m=[`#000000`,`#e53935`,`#1e88e5`,`#43a047`,`#f9a825`],h=[`#000000`,`#1e88e5`,``],g=[`#000000`,`#1e88e5`,`#e53935`,`#43a047`,`#f9a825`,``];function _(){return window.matchMedia(`(max-width: 767.98px)`).matches?h:g}function v(e,t){return Array.isArray(e)&&e.length===t.length&&e.every((e,n)=>e===t[n])}v(d.palette,p)?d.palette=h:v(d.palette,m)&&(d.palette=g);let y=G(d.palette??_()),b=`#000000`,x=G(d.strokeColor??b),S=.1,C=G(d.minAspect??S),w=G(d.strokeWidth??3),T=.5,E=G(d.smoothEnabled??!0),D=G(d.smoothStrength??T);Tn([f,y,C,x,w,E,D],u,{deep:!0});let O=G(localStorage.getItem(c)===`1`?`main`:`shape`),ee=G(null),k=$(()=>ee.value!==null),A=$(()=>I.value===`custom`&&V.value?`custom:${V.value.id}`:ee.value??`nailong`),te=$(()=>{if(I.value===`custom`&&V.value)return V.value;let e=Dc(ee.value??`nailong`);return vl(e.svg,e.name,Sc,e.themeColor)}),j=$(()=>P.value?F.value?`编辑图案`:`自定义图案`:I.value===`custom`&&V.value?`总是${V.value.name}`:`总是${Dc(A.value).name}`),ne=$(()=>P.value?F.value?`在原有图案上继续画几笔，然后点工具栏「保存」覆盖原图案`:`画几笔作为图案，然后点工具栏「保存」`:f.value===`manual`?``:`随便画几笔，松手后它们都会变成${I.value===`custom`&&V.value?V.value.name:Dc(A.value).name}`),M=$(()=>({prefix:`画几笔，点工具栏`,suffix:`按钮，一起变成${I.value===`custom`&&V.value?V.value.name:Dc(A.value).name}`}));wn(()=>{document.title=k.value?j.value:`总是XX`});let re=$(()=>P.value?Ec:I.value===`custom`&&V.value?yl(V.value.paths):Dc(A.value).svg),ie=$(()=>P.value?`#64b5f6`:I.value===`custom`&&V.value?V.value.themeColor:Dc(A.value).themeColor),ae=`always-xx:custom-shapes`,oe=`always-xx:custom-shape`,N=`always-xx:shape-order`,P=G(!1),se=G(null),F=G(null),ce=$(()=>F.value?z.value.find(e=>e.id===F.value)??null:null),I=G(`preset`),le=G(null);function ue(){return typeof crypto<`u`&&typeof crypto.randomUUID==`function`?crypto.randomUUID():`c-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function L(e){return`custom:${e}`}function de(){try{let e=localStorage.getItem(ae),t=null;if(e){let n=JSON.parse(e);Array.isArray(n)&&(t=n)}if(!t&&(e=localStorage.getItem(oe),e)){let n=JSON.parse(e);n&&typeof n==`object`&&(t=[n]),localStorage.removeItem(oe)}if(!t)return[];let n=t.filter(e=>!!e&&typeof e==`object`);for(let e of n)typeof e.themeColor!=`string`&&(e.themeColor=`#000000`),typeof e.id!=`string`&&(e.id=ue()),(typeof e.aspectRatio!=`number`||!Number.isFinite(e.aspectRatio)||e.aspectRatio<=0)&&(e.aspectRatio=fl(e.paths)),gl(e);return n.length>0&&fe(n),n}catch{return[]}}function fe(e){try{localStorage.setItem(ae,JSON.stringify(e))}catch{}}function pe(e){return[...e.map(e=>L(e.id)),...Tc.map(e=>e.id)]}function R(e){let t=new Set(e),n=Tc.filter(e=>!t.has(e.id)).map(e=>e.id);return n.length>0?[...n,...e]:e}function me(){try{let e=localStorage.getItem(N);if(!e)return null;let t=JSON.parse(e);if(!Array.isArray(t))return null;let n=t.filter(e=>typeof e==`string`);return n.length>0?n:null}catch{return null}}function he(e){try{localStorage.setItem(N,JSON.stringify(e))}catch{}}let z=G(de()),ge=me(),B=G(ge?R(ge):pe(z.value));he(B.value);let V=$(()=>z.value.find(e=>e.id===le.value)??null),_e=$(()=>{let e=new Map(z.value.map(e=>[e.id,e])),t=new Map(Tc.map(e=>[e.id,e])),n=new Set,r=[];for(let i of B.value)if(!n.has(i))if(i.startsWith(`custom:`)){let t=i.slice(7),a=e.get(t);a&&(n.add(i),r.push({kind:`custom`,orderKey:i,customId:a.id,name:a.name,previewSvg:yl(a.paths)}))}else{let e=t.get(i);e&&(n.add(i),r.push({kind:`builtin`,orderKey:e.id,name:e.name,previewSvg:e.svg,uid:e.uid}))}for(let e of z.value){let t=L(e.id);n.has(t)||(n.add(t),r.push({kind:`custom`,orderKey:t,customId:e.id,name:e.name,previewSvg:yl(e.paths)}))}for(let e of Tc)n.has(e.id)||(n.add(e.id),r.push({kind:`builtin`,orderKey:e.id,name:e.name,previewSvg:e.svg,uid:e.uid}));return r}),H=G(!1),ve=G(!1),ye=G(null),be=G(!1),xe=G(null),Se=G(!1),Ce=G(null),we=G(!1);function Te(e){ee.value=e,I.value=`preset`,O.value=`mode`}let Ee=G(0),De=Array.from({length:Math.ceil(Tc.length/3)},(e,t)=>Tc.slice(t*3,(t+1)*3)),Oe=$(()=>De[Ee.value]??[]);function ke(){Ee.value=(Ee.value+1)%De.length}function Ae(){localStorage.setItem(c,`1`),O.value=`main`,an(()=>Me())}function je(e){if(e.startsWith(`custom:`)){let t=e.slice(7);z.value.some(e=>e.id===t)&&(le.value=t,I.value=`custom`);return}ee.value=e,I.value=`preset`}function Me(){F.value=null,P.value=!0,se.value=e.value?.snapshotState()??null,e.value?.resetUndoBoundary()}function Ne(n){let r=z.value.find(e=>e.id===n);r&&(Me(),F.value=n,e.value?.resetView(),e.value?.loadShape(r.paths,r.themeColor),t.value=!0)}function Pe(){if(F.value)return e.value?.getRawStrokes()??[];let t=se.value?.staticShapes.filter(e=>!e.morphed).length??0;return(e.value?.getRawStrokes()??[]).slice(t)}function Fe(){let e=Pe(),t=e.flat();if(t.length===0)return[];let n=Bc(t),r=n.width||1,i=n.height||1,a=r/i,o=.08,s=1-o*2,c=e=>{let t,c;return a>=1?(t=(e.x-n.minX)/r,c=(e.y-n.minY)/i*(1/a)+(1-1/a)/2):(t=(e.x-n.minX)/r*a+(1-a)/2,c=(e.y-n.minY)/i),{x:o+t*s,y:o+c*s}};return e.map(e=>Wc(e).map(c).map(e=>({x:Math.min(1,Math.max(0,e.x)),y:Math.min(1,Math.max(0,e.y))}))).filter(e=>e.length>=3)}function Ie(){Fe().length!==0&&(H.value=!0)}function Le(n){let r=n.name.trim()||`我的图案`,i=n.themeColor.trim()||`#000000`,a=Fe();if(a.length===0)return;if(F.value){let n=z.value.findIndex(e=>e.id===F.value);if(n>=0){let o={...z.value[n],name:r,themeColor:i,paths:a,aspectRatio:fl(a)};try{gl(o)}catch{return}let s=[...z.value];s[n]=o,z.value=s,fe(z.value),le.value=o.id??null,I.value=`custom`,P.value=!1,se.value=null,F.value=null,H.value=!1,e.value?.clear(),t.value=!1;return}F.value=null}let o={id:ue(),name:r,version:`1.0.0`,themeColor:i,paths:a,aspectRatio:fl(a)};try{gl(o)}catch{return}z.value=[o,...z.value],fe(z.value),B.value=[L(o.id),...B.value],he(B.value),le.value=o.id??null,I.value=`custom`,P.value=!1,se.value=null,H.value=!1,e.value?.clear(),t.value=!1}function Re(e){let t=z.value.find(t=>t.id===e);t&&(ye.value=t,ve.value=!0)}function ze(){let e=ye.value;e&&(z.value=z.value.filter(t=>t.id!==e.id),fe(z.value),B.value=B.value.filter(t=>t!==L(e.id)),he(B.value),I.value===`custom`&&le.value===e.id&&(le.value=null,ee.value=ee.value??`nailong`,I.value=`preset`),ye.value=null,ve.value=!1)}function Be(e){let t=z.value.find(t=>t.id===e);t&&(xe.value=t,be.value=!0)}function Ve(e){let t=z.value.find(t=>t.id===e);t&&(Ce.value=t,Se.value=!0)}function He(e){let t=Ce.value;if(!t)return;let n=z.value.findIndex(e=>e.id===t.id);if(n<0){Ce.value=null,Se.value=!1;return}let r=[...z.value];r[n]={...r[n],name:e.name,themeColor:e.themeColor},z.value=r,fe(z.value),Ce.value=null,Se.value=!1}function U(){we.value=!0}function Ue(e){F.value=null;let t={...e,id:ue()};(typeof t.aspectRatio!=`number`||!Number.isFinite(t.aspectRatio)||t.aspectRatio<=0)&&(t.aspectRatio=fl(t.paths)),z.value=[t,...z.value],fe(z.value),B.value=[L(t.id),...B.value],he(B.value),le.value=t.id??null,I.value=`custom`,we.value=!1}function We(e){let t=Dc(e);return vl(t.svg,t.name,Sc,t.themeColor,!0)}function Ge(e,t,n){let r={...e,id:ue(),paths:n?ul(e.paths):e.paths.map(e=>e.map(e=>({...e})))},i=t.startsWith(`custom:`)?t.slice(7):null;if(i){let e=z.value.findIndex(e=>e.id===i),t=[...z.value];e>=0?t.splice(e,0,r):t.push(r),z.value=t}else z.value=[...z.value,r];fe(z.value);let a=L(r.id),o=B.value.indexOf(t),s=[...B.value];o>=0?s.splice(o,0,a):s.push(a),B.value=s,he(B.value)}function Ke(e){Ge(We(e),e,!0)}function qe(e){let t=z.value.find(t=>t.id===e);t&&Ge(t,L(e),!0)}function Je(e){Ge(We(e),e,!1)}function Ye(e){let t=z.value.find(t=>t.id===e);t&&Ge(t,L(e),!1)}function Xe(){P.value=!1,F.value=null,se.value&&=(e.value?.restoreState(se.value),null),t.value=!(e.value?.isEmpty()??!0)}function Ze(e){f.value=e,localStorage.setItem(c,`1`),O.value=`main`}function Qe(){t.value=!0}function $e(){t.value=!(e.value?.isEmpty()??!0)}function et(e){i.value={...e}}function tt(){e.value?.resetView()}function nt(n,r){if(qc(n)<10){e.value?.isEmpty()&&(t.value=!1);return}if(P.value){e.value?.commitRawStroke(n,x.value,r);return}if(f.value===`manual`){e.value?.commitRawStroke(n,x.value,r);return}let i=te.value.paths,a=Hc(Bc(n),C.value,te.value.aspectRatio),o=Yc(Vc(n,a),i.length);i.forEach((t,n)=>{let i=Zc({sourcePoints:Uc(o[n],a),targetPoints:Uc(t,a)});e.value?.playFrames(i,x.value,r)}),e.value?.beginStroke()}function rt(){e.value?.clear(),t.value=!1}function it(){e.value?.undo(),t.value=!(e.value?.isEmpty()??!0)}function at(e){(e.ctrlKey||e.metaKey)&&!e.shiftKey&&!e.altKey&&e.key.toLowerCase()===`z`&&(e.preventDefault(),it())}yr(()=>window.addEventListener(`keydown`,at)),Sr(()=>window.removeEventListener(`keydown`,at));function ot(e){n.value=e.canUndo}function st(e){r.value=e}function ct(e){f.value=e}function lt(){e.value?.morphAll(te.value.paths,te.value.aspectRatio)}function ut(e){x.value=e}function dt(e){y.value=e}function ft(e){C.value=e}function pt(){f.value=`auto`,y.value=_(),x.value=b,C.value=S,w.value=3,E.value=!0,D.value=T}function mt(e){w.value=e}function ht(e){E.value=e}function gt(e){D.value=e}return{canvasRef:e,hasContent:t,canUndo:n,canMorph:r,view:i,zoomPercent:a,isZoomed:o,mode:f,palette:y,strokeColor:x,minAspect:C,strokeWidth:w,smoothEnabled:E,smoothStrength:D,step:O,chosenShape:ee,hasChosen:k,shapeId:A,currentShape:te,titleText:j,hintText:ne,manualHint:M,demoShapeSvg:re,themeColor:ie,customizing:P,shapeSource:I,activeCustomId:le,editingCustomId:F,editingShape:ce,customShapes:z,shapeOrder:B,activeCustomShape:V,orderedShapes:_e,welcomePageIndex:Ee,welcomeShapes:Oe,nextWelcomePage:ke,onPickShape:Te,onPickCustom:Ae,saveDialogOpen:H,deleteDialogOpen:ve,pendingDeleteShape:ye,shareDialogOpen:be,shareShape:xe,importDialogOpen:we,editDialogOpen:Se,pendingEditShape:Ce,onChooseShape:je,onEnterCustom:Me,onSaveCustom:Ie,confirmSaveCustom:Le,onDeleteCustom:Re,confirmDeleteCustom:ze,onShareCustom:Be,onImportCustom:U,onImportConfirm:Ue,onMirrorBuiltin:Ke,onMirrorCustom:qe,onCloneBuiltin:Je,onCloneCustom:Ye,onEditCustom:Ne,onEditInfoCustom:Ve,confirmEditInfo:He,onCancelCustom:Xe,onChooseMode:Ze,onDrawStart:Qe,onDrawCancel:$e,onViewChange:et,onZoomReset:tt,onStrokeComplete:nt,onClear:rt,onUndo:it,onHistoryChange:ot,onMorphChange:st,onModeChange:ct,onApplyMorph:lt,onColorChange:ut,onPaletteChange:dt,onMinAspectChange:ft,onStrokeWidthChange:mt,onSmoothEnabledChange:ht,onSmoothStrengthChange:gt,resetSettings:pt}}var Cl=null;function wl(){return Cl??=Sl(),Cl}var Tl={key:0,class:`welcome`},El={class:`welcome__inner`},Dl={class:`welcome__grid`},Ol=[`onClick`],kl=[`innerHTML`],Al={class:`welcome__name`},jl=[`innerHTML`],Ml=cl(ir({__name:`WelcomeView`,setup(e){let{step:t,welcomeShapes:n,nextWelcomePage:r,onPickShape:i,onPickCustom:a}=wl();return(e,o)=>(J(),ea(Za,{name:`welcome`},{default:_n(()=>[K(t)===`shape`?(J(),Y(`div`,Tl,[X(`div`,El,[o[4]||=X(`h1`,{class:`welcome__title`},`选择一个图案`,-1),o[5]||=X(`p`,{class:`welcome__hint`},`无论画什么，笔画总是会变成选定的图案`,-1),X(`div`,Dl,[(J(!0),Y(q,null,kr(K(n),e=>(J(),Y(`button`,{key:e.id,class:`welcome__card`,type:`button`,onClick:t=>K(i)(e.id)},[X(`span`,{class:`welcome__preview`,innerHTML:K(Ac)(e.svg,1.5,112)},null,8,kl),X(`span`,Al,R(e.name),1)],8,Ol))),128)),X(`button`,{class:`welcome__card`,type:`button`,onClick:o[0]||=(...e)=>K(a)&&K(a)(...e)},[X(`span`,{class:`welcome__preview`,innerHTML:K(Ac)(K(Ec),1.5,112)},null,8,jl),o[2]||=X(`span`,{class:`welcome__name`},`自定义图案`,-1)]),X(`button`,{class:`welcome__toggle`,type:`button`,"aria-label":`切换图案`,onClick:o[1]||=(...e)=>K(r)&&K(r)(...e)},[...o[3]||=[X(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[X(`polyline`,{points:`1 4 1 10 7 10`}),X(`path`,{d:`M3.51 15a9 9 0 1 0 2.13-9.36L1 10`})],-1)]])])])])):Q(``,!0)]),_:1}))}}),[[`__scopeId`,`data-v-a76d261c`]]),Nl={class:`demo-morph`},Pl=480,Fl=360,Il=`#1f3a5f`,Ll=4,Rl=500,zl=150,Bl=1200,Vl=700,Hl=400,Ul=900,Wl=cl(ir({__name:`DemoMorph`,props:{mode:{},paths:{},aspectRatio:{}},setup(e){let t=e,n=t.aspectRatio,r=G(null),i=[[{x:.08,y:.82},{x:.42,y:.18}],[{x:.58,y:.82},{x:.92,y:.18}]],a=null,o=0,s=`draw`,c=0,l=[],u=[],d=[],f=[],p=G(!1),m=G(!1);function h(){return i.length*Rl+(i.length-1)*zl}function g(e,t){let n=a;if(!n)return;let r=l[e],i=Math.max(2,Math.round(r.length*Math.min(1,t)));n.strokeStyle=Il,n.lineWidth=Ll,n.lineCap=`round`,n.lineJoin=`round`,n.beginPath();for(let e=0;e<i;e++){let t=r[e],i=t.x*Pl,a=t.y*Fl;e===0?n.moveTo(i,a):n.lineTo(i,a)}n.stroke()}function _(e){let t=a;if(!t)return;t.clearRect(0,0,Pl,Fl);let n=e*h();for(let e=0;e<i.length;e++){let t=e*650;if(n<t)break;g(e,Math.min(1,(n-t)/Rl))}}function v(e,t){let n=a;if(!n)return;let r=u[e];n.strokeStyle=Il,n.lineWidth=Ll,n.lineCap=`round`,n.lineJoin=`round`;let i=d[e],o=f[e]??(f[e]=[]);for(let e of i){let i=$c(e,Qc(e,Math.min(e.frameCount-1,Math.floor(Math.min(1,t)*(e.frameCount-1)))),o);n.beginPath();for(let e=0;e<i.length;e++){let t=i[e],a=r.minX+t.x*r.width,o=r.minY+t.y*r.height;e===0?n.moveTo(a,o):n.lineTo(a,o)}n.stroke()}}function y(e){let t=a;if(t){t.clearRect(0,0,Pl,Fl);for(let t=0;t<d.length;t++)v(t,e)}}function b(e){let t=a;if(!t)return;t.clearRect(0,0,Pl,Fl),e<Rl?g(0,e/Rl):v(0,(e-Rl)/Bl);let n=e-Rl;n>0&&(n<Rl?g(1,n/Rl):v(1,(n-Rl)/Bl))}function x(e){let n=e-c;if(t.mode===`auto`)b(n),n>=3100&&(c=e);else switch(s){case`draw`:{let t=Math.min(1,n/h());_(t),t>=1&&(s=`hold`,p.value=!0,c=e);break}case`hold`:_(1),n>=Vl&&(m.value=!0,s=`press`,c=e);break;case`press`:_(1),n>=Hl&&(m.value=!1,p.value=!1,s=`morph`,c=e);break;case`morph`:{let t=Math.min(1,n/Bl);y(t),t>=1&&(s=`rest`,c=e);break}case`rest`:y(1),n>=Ul&&(s=`draw`,c=e)}o=requestAnimationFrame(x)}return yr(()=>{let e=r.value;if(!e||(e.width=Pl,e.height=Fl,a=e.getContext(`2d`),t.paths.length===0))return;l=i.map(e=>Jc(e,30));let f=i.map(e=>e.map(e=>({x:e.x*Pl,y:e.y*Fl})));u=f.map(e=>Hc(Bc(e),1,n)),d=f.map(e=>Yc(Vc(e,Hc(Bc(e),1,n)),t.paths.length).map((e,n)=>Zc({sourcePoints:e,targetPoints:t.paths[n],durationMs:Bl,sampleCount:128}))),s=`draw`,p.value=!1,m.value=!1,c=performance.now(),o=requestAnimationFrame(x)}),Sr(()=>{o&&cancelAnimationFrame(o)}),(e,t)=>(J(),Y(`div`,Nl,[X(`canvas`,{ref_key:`canvasEl`,ref:r,class:`demo-morph__canvas`},null,512),Z(Za,{name:`demo-btn`},{default:_n(()=>[p.value?(J(),Y(`div`,{key:0,class:I([`demo-morph__btn`,{"is-pressing":m.value}]),"aria-hidden":`true`},[...t[0]||=[X(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12 2.5l2 6.5 6.5 2-6.5 2-2 6.5-2-6.5-6.5-2 6.5-2z`,stroke:`currentColor`,"stroke-width":`1.8`,"stroke-linejoin":`round`})],-1),X(`span`,null,`变形`,-1)]],2)):Q(``,!0)]),_:1})]))}}),[[`__scopeId`,`data-v-56141cd2`]]),Gl={class:`mode-picker`},Kl={class:`mode-picker__grid`},ql=cl(ir({__name:`ModePicker`,props:{paths:{},aspectRatio:{}},emits:[`pick`],setup(e,{emit:t}){let n=t;return(t,r)=>(J(),Y(`div`,Gl,[r[6]||=X(`h1`,{class:`mode-picker__title`},`选择变形模式`,-1),r[7]||=X(`p`,{class:`mode-picker__hint`},`之后可在设置中随时切换`,-1),X(`div`,Kl,[X(`button`,{class:`mode-card`,type:`button`,onClick:r[0]||=e=>n(`pick`,`auto`)},[Z(Wl,{mode:`auto`,paths:e.paths,"aspect-ratio":e.aspectRatio},null,8,[`paths`,`aspect-ratio`]),r[2]||=X(`span`,{class:`mode-card__name`},`自动变形`,-1),r[3]||=X(`span`,{class:`mode-card__desc`},`每画一笔，松手后自动变成图案`,-1)]),X(`button`,{class:`mode-card`,type:`button`,onClick:r[1]||=e=>n(`pick`,`manual`)},[Z(Wl,{mode:`manual`,paths:e.paths,"aspect-ratio":e.aspectRatio},null,8,[`paths`,`aspect-ratio`]),r[4]||=X(`span`,{class:`mode-card__name`},`手动变形`,-1),r[5]||=X(`span`,{class:`mode-card__desc`},`笔画保持原样，用工具栏变形按钮一起变形`,-1)])])]))}}),[[`__scopeId`,`data-v-d001ef68`]]),Jl=cl(ir({__name:`ModePickerView`,setup(e){let{step:t,currentShape:n,onChooseMode:r}=wl();return(e,i)=>(J(),ea(Za,{name:`welcome`},{default:_n(()=>[K(t)===`mode`?(J(),ea(ql,{key:0,paths:K(n).paths,"aspect-ratio":K(n).aspectRatio,onPick:K(r)},null,8,[`paths`,`aspect-ratio`,`onPick`])):Q(``,!0)]),_:1}))}}),[[`__scopeId`,`data-v-74d355ec`]]),Yl={entries:[{time:`2026-08-28 23:39`,text:`新增小伙伴投稿图案：荒野倒拇指、蝴蜾忍、鬼灭之刃、雪王、Teto、梦悠悠、扭曲脸、九尾狐、混沌分裂者
移除了原本的删除和镜像按钮
更新了图案卡片的触摸反馈效果
图案卡片新增三个点「更多操作」按钮，点击弹出菜单:
- 镜像图案 / 克隆图案；
- 编辑图案 / 修改信息；
- 删除图案；`},{time:`2026-08-27 18:40`,text:`新增小伙伴投稿图案：沃玛、群友、妙脆角、小奶蛙吐舌、东海帝王、多儿、说话汤姆猫
放大上限提升到 1000%
改粗细不再影响已落笔的笔画
性能优化 能稍微没那么卡`},{time:`2026-08-27 04:17`,text:`新增小伙伴投稿图案：Miku猫猫、火影忍者、木叶忍者、香蕉猫、三角形、中国人能飞
图案名称修正：胆子肥嘟嘟`},{time:`2026-08-26 15:57`,text:`新增小伙伴投稿图案：明日方舟、中国球、叮咚鸡、小鸡裹麻袋、sans
添加视频教程入口`},{time:`2026-08-23 18:14`,text:`B站App内无法下载图案添加提示
工具栏色盘末尾增加万能颜色
修复自定义图案(创建/导入)放到首位
修复图案文字不居中`},{time:`2026-08-22 22:30`,text:`最小扁度默认值改为 10%
设置新增恢复默认设置`},{time:`2026-08-22 16:04`,text:`新增小伙伴投稿图案：牛来、胆子肥嘟嘟、小桃苦呀西、乐乐、荷兰球、芬兰球`},{time:`2026-08-20 15:28`,text:`新增镜像图案功能
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
- 新增图案导入功能；
- 新增自定义图案功能；
- 通过投稿卡片可访问小伙伴主页；`},{time:`2026-08-13 14:19`,text:`新增四种图案支持`},{time:`2026-08-04 11:20`,text:`添加底部工具栏`},{time:`2026-08-02 23:46`,text:`画一笔自动变成奶龙`}]},Xl=[`aria-label`],Zl={class:`ios-modal__body`},Ql={key:0,class:`ios-modal__title`},$l={key:1,class:`ios-modal__message`},eu={class:`ios-modal__content`},tu={class:`ios-modal__actions`},nu={key:1,class:`ios-modal__v-sep`,"aria-hidden":`true`},ru=cl(ir({inheritAttrs:!1,__name:`IosModal`,props:{open:{type:Boolean},title:{default:``},message:{default:``},confirmText:{default:`确定`},cancelText:{default:`取消`},danger:{type:Boolean,default:!1},hideCancel:{type:Boolean,default:!1}},emits:[`close`,`confirm`],setup(e,{emit:t}){let n=t;function r(e){e.key===`Escape`&&n(`close`)}return yr(()=>window.addEventListener(`keydown`,r)),Sr(()=>window.removeEventListener(`keydown`,r)),(t,r)=>(J(),ea(Bn,{to:`body`},[Z(Za,{name:`ios-modal`},{default:_n(()=>[e.open?(J(),Y(`div`,pa({key:0},t.$attrs,{class:`ios-modal-mask`,onClick:r[2]||=Zo(e=>n(`close`),[`self`])}),[X(`div`,{class:`ios-modal`,role:`alertdialog`,"aria-modal":`true`,"aria-label":e.title||void 0},[X(`div`,Zl,[e.title?(J(),Y(`h3`,Ql,R(e.title),1)):Q(``,!0),e.message?(J(),Y(`p`,$l,R(e.message),1)):Q(``,!0),X(`div`,eu,[Ar(t.$slots,`default`,{},void 0,!0)])]),X(`div`,tu,[e.hideCancel?Q(``,!0):(J(),Y(`button`,{key:0,class:`ios-modal__btn ios-modal__btn--cancel`,type:`button`,onClick:r[0]||=e=>n(`close`)},R(e.cancelText),1)),e.hideCancel?Q(``,!0):(J(),Y(`span`,nu)),X(`button`,{class:I([`ios-modal__btn ios-modal__btn--confirm`,{"ios-modal__btn--danger":e.danger}]),type:`button`,onClick:r[1]||=e=>n(`confirm`)},R(e.confirmText),3)])],8,Xl)],16)):Q(``,!0)]),_:3})]))}}),[[`__scopeId`,`data-v-a9ef8a6c`]]),iu=[`aria-label`],au={class:`sheet__header`},ou={class:`sheet__title`},su={class:`sheet__body`},cu=cl(ir({__name:`SheetPanel`,props:{open:{type:Boolean},title:{},ios:{type:Boolean}},emits:[`close`],setup(e,{emit:t}){let n=t;function r(e){e.key===`Escape`&&n(`close`)}return yr(()=>window.addEventListener(`keydown`,r)),Sr(()=>window.removeEventListener(`keydown`,r)),(t,r)=>(J(),ea(Bn,{to:`body`},[Z(Za,{name:`sheet`},{default:_n(()=>[e.open?(J(),Y(`div`,{key:0,class:`sheet`,onClick:r[2]||=e=>n(`close`)},[X(`div`,{class:I([`sheet__panel`,{"sheet__panel--ios":e.ios}]),role:`dialog`,"aria-modal":`true`,"aria-label":e.title,onClick:r[1]||=Zo(()=>{},[`stop`])},[X(`div`,au,[X(`span`,ou,R(e.title),1),X(`button`,{class:`sheet__close`,type:`button`,"aria-label":`关闭`,onClick:r[0]||=e=>n(`close`)},[...r[3]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M6 6l12 12M18 6L6 18`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1)]])]),X(`div`,su,[Ar(t.$slots,`default`,{},void 0,!0)])],10,iu)])):Q(``,!0)]),_:3})]))}}),[[`__scopeId`,`data-v-6fff0cdf`]]),lu={class:`ios-list`},uu={class:`ios-group`},du={class:`ios-group__card`},fu={key:0,class:`ios-cell__check`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},pu={key:0,class:`ios-cell__check`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},mu={class:`ios-group`},hu={class:`ios-group__card`},gu={class:`ios-cell`},_u={class:`settings__palette`},vu=[`value`,`onInput`],yu=[`onClick`],bu={class:`ios-group`},xu={class:`ios-group__card`},Su={class:`ios-cell`},Cu={class:`settings__slider`},wu=[`value`],Tu={class:`settings__slider-value`},Eu={class:`ios-group`},Du={class:`ios-group__card`},Ou={class:`ios-cell`},ku={class:`settings__slider`},Au=[`value`],ju={class:`settings__slider-value`},Mu={class:`ios-cell`},Nu={class:`ios-group`},Pu={class:`ios-group__card`},Fu=[`aria-checked`],Iu={class:`ios-cell`},Lu={class:`settings__slider`},Ru=[`value`],zu={class:`settings__slider-value`},Bu={class:`ios-group`},Vu={class:`ios-group__card`},Hu=[`href`],Uu={class:`ios-cell__text`},Wu={class:`ios-cell__desc`},Gu={class:`ios-group`},Ku={class:`ios-group__card`},qu={class:`changelog-cell__text`},Ju={class:`changelog-cell__time`},Yu={key:0,class:`ios-cell__separator`,"aria-hidden":`true`},Xu=1,Zu=12,Qu=3,$u=cl(ir({__name:`SettingsSheet`,props:{open:{type:Boolean},mode:{},palette:{},minAspect:{},strokeWidth:{},smoothEnabled:{type:Boolean},smoothStrength:{}},emits:[`close`,`modeChange`,`paletteChange`,`minAspectChange`,`strokeWidthChange`,`smoothEnabledChange`,`smoothStrengthChange`,`reset`],setup(e,{emit:t}){let n=e,r=t,i=$(()=>{let e=[];return n.palette.forEach((t,n)=>{bl(t)||e.push({color:t,index:n})}),e});function a(e,t){let i=t.target,a=n.palette.slice();a[e]=i.value,r(`paletteChange`,a)}let o=[`#000000`,`#1e88e5`,`#e53935`,`#43a047`,`#f9a825`,`#8e24aa`,`#fb8c00`,`#00acc1`];function s(){let e=new Set(n.palette),t=o.find(t=>!e.has(t))??`#000000`;r(`paletteChange`,[...n.palette,t])}function c(e){if(i.value.length<=1)return;let t=n.palette.slice();t.splice(e,1),r(`paletteChange`,t)}function l(e){let t=e.target;r(`minAspectChange`,Number(t.value))}let u=G(!1);function d(){u.value=!0}function f(){u.value=!1,r(`reset`)}function p(e){let t=e.target;r(`strokeWidthChange`,Number(t.value))}function m(e){let t=e.target;r(`smoothStrengthChange`,Number(t.value))}let h=G(null);function g(){let e=h.value;if(!e)return;let t=e.getContext(`2d`);if(!t)return;let r=e.width,i=e.height;t.clearRect(0,0,r,i),t.strokeStyle=`#000000`,t.lineWidth=n.strokeWidth??Qu,t.lineCap=`round`,t.beginPath(),t.moveTo(16,i/2),t.lineTo(r-16,i/2),t.stroke()}Tn(()=>[n.open,n.strokeWidth],async([e])=>{e&&(await an(),g())}),yr(async()=>{n.open&&(await an(),g())});let _=Yl.entries;return(t,n)=>(J(),Y(q,null,[Z(cu,{open:e.open,title:`设置`,ios:``,onClose:n[3]||=e=>r(`close`)},{default:_n(()=>[X(`div`,lu,[X(`section`,uu,[n[10]||=X(`h3`,{class:`ios-group__title`},`变形模式`,-1),X(`div`,du,[X(`button`,{class:I([`ios-cell`,{"is-selected":e.mode===`auto`}]),type:`button`,onClick:n[0]||=e=>r(`modeChange`,`auto`)},[n[6]||=X(`span`,{class:`ios-cell__text`},[X(`span`,{class:`ios-cell__label`},`自动变形`),X(`span`,{class:`ios-cell__desc`},`每画一笔，松手后自动变成图案`)],-1),e.mode===`auto`?(J(),Y(`svg`,fu,[...n[5]||=[X(`path`,{d:`M4 12l5 5L20 6`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},null,-1)]])):Q(``,!0)],2),n[9]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),X(`button`,{class:I([`ios-cell`,{"is-selected":e.mode===`manual`}]),type:`button`,onClick:n[1]||=e=>r(`modeChange`,`manual`)},[n[8]||=X(`span`,{class:`ios-cell__text`},[X(`span`,{class:`ios-cell__label`},`手动变形`),X(`span`,{class:`ios-cell__desc`},`笔画保持原样，用工具栏变形按钮一起变形`)],-1),e.mode===`manual`?(J(),Y(`svg`,pu,[...n[7]||=[X(`path`,{d:`M4 12l5 5L20 6`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`},null,-1)]])):Q(``,!0)],2)])]),X(`section`,mu,[n[14]||=X(`h3`,{class:`ios-group__title`},`色盘`,-1),X(`div`,hu,[X(`div`,gu,[n[11]||=X(`span`,{class:`ios-cell__label`},`颜色`,-1),X(`div`,_u,[(J(!0),Y(q,null,kr(i.value,(e,t)=>(J(),Y(`div`,{key:t,class:`settings__swatch`,style:N({background:e.color}),title:`点击修改颜色`},[X(`input`,{type:`color`,value:e.color,onInput:t=>a(e.index,t)},null,40,vu),i.value.length>1?(J(),Y(`button`,{key:0,class:`settings__swatch-remove`,type:`button`,"aria-label":`移除颜色`,onClick:t=>c(e.index)},` × `,8,yu)):Q(``,!0)],4))),128)),X(`button`,{class:`settings__swatch-add`,type:`button`,"aria-label":`添加颜色`,onClick:s},` + `)])]),n[12]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),n[13]||=X(`div`,{class:`ios-cell ios-cell--hint`},[X(`span`,{class:`ios-cell__desc`},`点击颜色可以修改，数量不限`)],-1)])]),X(`section`,bu,[n[18]||=X(`h3`,{class:`ios-group__title`},`最小扁度`,-1),X(`div`,xu,[X(`div`,Su,[n[15]||=X(`span`,{class:`ios-cell__label`},`扁度`,-1),X(`div`,Cu,[X(`input`,{type:`range`,min:`0`,max:`1`,step:`0.05`,value:e.minAspect,style:N({"--fill":`${Math.round(e.minAspect*100)}%`}),"aria-label":`最小扁度`,onInput:l},null,44,wu),X(`span`,Tu,R(Math.round(e.minAspect*100))+`%`,1)])]),n[16]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),n[17]||=X(`div`,{class:`ios-cell ios-cell--hint`},[X(`span`,{class:`ios-cell__desc`},`数值越大越遵循图案原始比例`)],-1)])]),X(`section`,Eu,[n[22]||=X(`h3`,{class:`ios-group__title`},`笔画粗细`,-1),X(`div`,Du,[X(`div`,Ou,[n[19]||=X(`span`,{class:`ios-cell__label`},`粗细`,-1),X(`div`,ku,[X(`input`,{type:`range`,min:Xu,max:Zu,step:`0.5`,value:e.strokeWidth??Qu,style:N({"--fill":`${Math.round(((e.strokeWidth??Qu)-Xu)/11*100)}%`}),"aria-label":`笔画粗细`,onInput:p},null,44,Au),X(`span`,ju,R((e.strokeWidth??Qu).toFixed(1))+`px`,1)])]),n[21]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),X(`div`,Mu,[n[20]||=X(`span`,{class:`ios-cell__label`},`预览`,-1),X(`canvas`,{ref_key:`previewCanvas`,ref:h,class:`settings__preview`,width:`200`,height:`32`,"aria-hidden":`true`},null,512)])])]),X(`section`,Nu,[n[27]||=X(`h3`,{class:`ios-group__title`},`笔画平滑`,-1),X(`div`,Pu,[X(`button`,{class:`ios-cell`,type:`button`,role:`switch`,"aria-checked":e.smoothEnabled,onClick:n[2]||=t=>r(`smoothEnabledChange`,!e.smoothEnabled)},[n[24]||=X(`span`,{class:`ios-cell__text`},[X(`span`,{class:`ios-cell__label`},`平滑笔迹`),X(`span`,{class:`ios-cell__desc`},`修正自定义图案绘制时的手抖抖动`)],-1),X(`span`,{class:I([`settings__toggle`,{"is-on":e.smoothEnabled}]),"aria-hidden":`true`},[...n[23]||=[X(`span`,{class:`settings__toggle-knob`},null,-1)]],2)],8,Fu),e.smoothEnabled?(J(),Y(q,{key:0},[n[26]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),X(`div`,Iu,[n[25]||=X(`span`,{class:`ios-cell__label`},`强度`,-1),X(`div`,Lu,[X(`input`,{type:`range`,min:`0`,max:`1`,step:`0.05`,value:e.smoothStrength,style:N({"--fill":`${Math.round(e.smoothStrength*100)}%`}),"aria-label":`平滑强度`,onInput:m},null,44,Ru),X(`span`,zu,R(Math.round(e.smoothStrength*100))+`%`,1)])])],64)):Q(``,!0)])]),X(`section`,{class:`ios-group`},[X(`div`,{class:`ios-group__card`},[X(`button`,{class:`ios-cell ios-cell--reset`,type:`button`,onClick:d},[...n[28]||=[X(`span`,{class:`ios-cell__label`},`恢复默认设置`,-1),X(`svg`,{class:`ios-cell__check`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M9 6l6 6-6 6`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)]])])]),X(`section`,Bu,[n[33]||=X(`h3`,{class:`ios-group__title`},`关于`,-1),X(`div`,Vu,[X(`a`,{class:`ios-cell`,href:`https://space.bilibili.com/${K(wc)}`,target:`_blank`,rel:`noopener noreferrer`},[X(`span`,Uu,[n[29]||=X(`span`,{class:`ios-cell__label`},`作者`,-1),X(`span`,Wu,`有Bug或者想新增图案请联系`+R(K(Cc)),1)]),n[30]||=X(`svg`,{class:`ios-cell__check`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M9 6l6 6-6 6`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)],8,Hu),n[31]||=X(`div`,{class:`ios-cell__separator`,"aria-hidden":`true`},null,-1),n[32]||=X(`a`,{class:`ios-cell`,href:`https://www.bilibili.com/video/BV1eVhg6AEyd`,target:`_blank`,rel:`noopener noreferrer`},[X(`span`,{class:`ios-cell__text`},[X(`span`,{class:`ios-cell__label`},`视频介绍 / 教程`),X(`span`,{class:`ios-cell__desc`},`观看视频了解 优秀作品、功能介绍与使用教程`)]),X(`svg`,{class:`ios-cell__check`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M9 6l6 6-6 6`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`})])],-1)])]),X(`section`,Gu,[n[34]||=X(`h3`,{class:`ios-group__title`},`更新日志`,-1),X(`div`,Ku,[(J(!0),Y(q,null,kr(K(_),(e,t)=>(J(),Y(`div`,{key:e.time,class:`changelog-cell`},[X(`span`,qu,R(e.text),1),X(`span`,Ju,R(e.time),1),t<K(_).length-1?(J(),Y(`div`,Yu)):Q(``,!0)]))),128))])])])]),_:1},8,[`open`]),Z(ru,{open:u.value,title:`恢复默认设置`,message:`将把变形模式、色盘、笔触颜色、扁度、粗细、平滑等设置全部恢复为默认值。`,"confirm-text":`恢复`,danger:``,onClose:n[4]||=e=>u.value=!1,onConfirm:f},null,8,[`open`])],64))}}),[[`__scopeId`,`data-v-69a2fea7`]]),ed=[`innerHTML`],td=[`innerHTML`],nd=[`aria-label`,`onClick`,`onKeydown`],rd=[`aria-label`,`title`,`onClick`],id=[`href`,`title`,`aria-label`],ad=[`aria-label`,`title`,`onClick`],od=[`aria-label`],sd=[`onClick`],cd=[`onClick`],ld=[`onClick`],ud=[`onClick`],dd=[`onClick`],fd=[`innerHTML`],pd={class:`shape-item__name`},md=16,hd=cl(ir({__name:`ShapeSheet`,props:{open:{type:Boolean},shapeId:{},orderedShapes:{}},emits:[`close`,`select`,`enterCustom`,`deleteCustom`,`shareCustom`,`importCustom`,`mirror`,`mirrorCustom`,`clone`,`cloneCustom`,`editCustom`,`editInfoCustom`],setup(e,{emit:t}){let n=t;function r(e){n(`select`,e),n(`close`)}function i(){n(`enterCustom`),n(`close`)}function a(e){e.kind===`custom`?n(`mirrorCustom`,e.customId):n(`mirror`,e.orderKey)}let o=G(null),s=new Map;function c(e){return t=>{t?s.set(e,t):s.delete(e)}}function l(e){o.value=o.value===e?null:e,o.value&&an(()=>d(e))}function u(){o.value=null}function d(e){let t=s.get(e);if(!t)return;let n=t.closest(`.sheet__body`);if(!n)return;let r=n.getBoundingClientRect(),i=t.getBoundingClientRect();i.bottom>r.bottom-md?n.scrollTop+=i.bottom-(r.bottom-md):i.top<r.top+md&&(n.scrollTop-=r.top+md-i.top)}yr(()=>document.addEventListener(`click`,u)),Sr(()=>document.removeEventListener(`click`,u));function f(e){a(e),u()}function p(e){e.kind===`custom`?n(`cloneCustom`,e.customId):n(`clone`,e.orderKey),u()}function m(e){e.kind===`custom`&&n(`editCustom`,e.customId),u()}function h(e){e.kind===`custom`&&n(`editInfoCustom`,e.customId),u()}function g(e){e.kind===`custom`&&n(`deleteCustom`,e.customId),u()}function _(e,t=26){let n=e.match(/viewBox="[\d.\-]+\s+[\d.\-]+\s+([\d.\-]+)/),r=1.5*(n?parseFloat(n[1]):500)/t;return e.replace(/stroke-width\s*:\s*[\d.]+\s*;?/g,``).replace(/stroke:\s*#0{3}0*/gi,`stroke: currentColor`).replace(/<svg([^>]*)>/,(e,t)=>`<svg${t} stroke-width="${r.toFixed(1)}">`)}function v(e){return`https://space.bilibili.com/${e}`}let y=Os.replace(/stroke:\s*#0{3}0*/gi,`stroke: currentColor`).replace(/stroke="#0{3}0*"/gi,`stroke="currentColor"`);return(t,a)=>(J(),ea(cu,{open:e.open,title:`选择图案`,onClose:a[2]||=e=>n(`close`)},{default:_n(()=>[X(`div`,{class:`shape-grid`,onClick:u},[X(`button`,{class:`shape-item shape-item--custom-entry`,type:`button`,title:`画画保存为自定义图案`,onClick:i},[X(`span`,{class:`shape-item__preview`,innerHTML:_(K(Ec),80)},null,8,ed),a[3]||=X(`span`,{class:`shape-item__name`},`自定义图案`,-1)]),X(`button`,{class:`shape-item shape-item--import`,type:`button`,title:`导入图案（粘贴代码或 SVG 文件）`,onClick:a[0]||=e=>n(`importCustom`)},[X(`span`,{class:`shape-item__preview`,innerHTML:K(y)},null,8,td),a[4]||=X(`span`,{class:`shape-item__name`},`导入图案`,-1)]),(J(!0),Y(q,null,kr(e.orderedShapes,t=>(J(),Y(`div`,{key:t.orderKey,class:I([`shape-item`,[t.kind===`custom`?`shape-item--custom`:``,{"is-active":e.shapeId===t.orderKey,"is-menu-open":o.value===t.orderKey}]]),role:`button`,tabindex:`0`,"aria-label":`切换到${t.name}`,onClick:e=>r(t.orderKey),onKeydown:[$o(e=>r(t.orderKey),[`enter`]),$o(Zo(e=>r(t.orderKey),[`prevent`]),[`space`])]},[t.kind===`custom`?(J(),Y(`button`,{key:0,class:`shape-item__share`,type:`button`,"aria-label":`分享${t.name}`,title:`分享${t.name}`,onClick:Zo(e=>n(`shareCustom`,t.customId),[`stop`])},[...a[5]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7`,stroke:`currentColor`,"stroke-width":`2.2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`path`,{d:`M16 6l-4-4-4 4M12 2v13`,stroke:`currentColor`,"stroke-width":`2.2`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)]],8,rd)):Q(``,!0),t.kind===`builtin`&&t.uid?(J(),Y(`a`,{key:1,class:`shape-item__author`,href:v(t.uid),target:`_blank`,rel:`noopener noreferrer`,title:`${t.name} 投稿小伙伴主页`,"aria-label":`${t.name} 投稿小伙伴主页`,onClick:a[1]||=Zo(()=>{},[`stop`])},[...a[6]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`circle`,{cx:`12`,cy:`12`,r:`9`,stroke:`currentColor`,"stroke-width":`2.2`}),X(`path`,{d:`M12 11v5`,stroke:`currentColor`,"stroke-width":`2.2`,"stroke-linecap":`round`}),X(`circle`,{cx:`12`,cy:`8`,r:`1.4`,fill:`currentColor`})],-1)]],8,id)):Q(``,!0),X(`div`,{class:I([`shape-item__more-wrap`,{"is-open":o.value===t.orderKey}])},[X(`button`,{class:`shape-item__more`,type:`button`,"aria-label":`更多操作：${t.name}`,title:`更多操作：${t.name}`,onClick:Zo(e=>l(t.orderKey),[`stop`])},[...a[7]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`circle`,{cx:`5`,cy:`12`,r:`1.8`}),X(`circle`,{cx:`12`,cy:`12`,r:`1.8`}),X(`circle`,{cx:`19`,cy:`12`,r:`1.8`})],-1)]],8,ad),o.value===t.orderKey?(J(),Y(`div`,{key:0,class:`shape-item__menu`,role:`menu`,"aria-label":`${t.name} 更多操作`,ref_for:!0,ref:c(t.orderKey)},[X(`button`,{class:`shape-item__menu-item`,type:`button`,role:`menuitem`,onClick:Zo(e=>f(t),[`stop`])},[...a[8]||=[X(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`rect`,{x:`11`,y:`2`,width:`2`,height:`20`,fill:`currentColor`}),X(`path`,{d:`M4 8 L9 5 L9 19 L4 16 Z`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`}),X(`path`,{d:`M15 5 L20 8 L20 16 L15 19 Z`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`})],-1),ca(` 镜像图案 `,-1)]],8,sd),X(`button`,{class:`shape-item__menu-item`,type:`button`,role:`menuitem`,onClick:Zo(e=>p(t),[`stop`])},[...a[9]||=[X(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`rect`,{x:`7`,y:`7`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,"stroke-width":`2`}),X(`path`,{d:`M16 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2`,stroke:`currentColor`,"stroke-width":`2`})],-1),ca(` 克隆图案 `,-1)]],8,cd),t.kind===`custom`?(J(),Y(q,{key:0},[X(`button`,{class:`shape-item__menu-item`,type:`button`,role:`menuitem`,onClick:Zo(e=>m(t),[`stop`])},[...a[10]||=[X(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M4 20l4-1L20.5 6.5a2.1 2.1 0 0 0-3-3L5 16l-1 4z`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1),ca(` 编辑图案 `,-1)]],8,ld),X(`button`,{class:`shape-item__menu-item`,type:`button`,role:`menuitem`,onClick:Zo(e=>h(t),[`stop`])},[...a[11]||=[X(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`circle`,{cx:`12`,cy:`12`,r:`9`,stroke:`currentColor`,"stroke-width":`2`}),X(`path`,{d:`M12 11v5`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`}),X(`circle`,{cx:`12`,cy:`8`,r:`1.5`,fill:`currentColor`})],-1),ca(` 修改信息 `,-1)]],8,ud),X(`button`,{class:`shape-item__menu-item shape-item__menu-item--danger`,type:`button`,role:`menuitem`,onClick:Zo(e=>g(t),[`stop`])},[...a[12]||=[X(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M4 7h16`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`}),X(`path`,{d:`M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`path`,{d:`M10 11v6M14 11v6`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1),ca(` 删除图案 `,-1)]],8,dd)],64)):Q(``,!0)],8,od)):Q(``,!0)],2),X(`span`,{class:`shape-item__preview`,innerHTML:_(t.previewSvg,80)},null,8,fd),X(`span`,pd,R(t.name),1)],42,nd))),128))])]),_:1},8,[`open`]))}}),[[`__scopeId`,`data-v-6e2ec72e`]]),gd=[`title`],_d=[`value`],vd=[`aria-label`,`onClick`],yd=[`disabled`],bd=[`disabled`],xd={key:1,class:`toolbar__custom-actions`},Sd=cl(ir({__name:`Toolbar`,props:{strokeColor:{},shapeId:{},mode:{},canUndo:{type:Boolean},canMorph:{type:Boolean},palette:{},minAspect:{},strokeWidth:{},smoothEnabled:{type:Boolean},smoothStrength:{},customizing:{type:Boolean},hasCustomShape:{type:Boolean},orderedShapes:{}},emits:[`colorChange`,`shapeChange`,`customShape`,`saveCustom`,`cancelCustom`,`deleteCustom`,`shareCustom`,`importCustom`,`mirror`,`mirrorCustom`,`clone`,`cloneCustom`,`editCustom`,`editInfoCustom`,`clear`,`undo`,`modeChange`,`applyMorph`,`paletteChange`,`minAspectChange`,`strokeWidthChange`,`smoothEnabledChange`,`smoothStrengthChange`,`reset`],setup(e,{emit:t}){let n=e,r=t,i=G(!1),a=$(()=>xl(n.palette,n.strokeColor));function o(e){let t=e.target;r(`colorChange`,t.value)}let s=G(!1);function c(){i.value=!i.value,s.value=!1}function l(){s.value=!s.value,i.value=!1}function u(e){r(`shapeChange`,e),i.value=!1}function d(){r(`customShape`),i.value=!1}function f(e){i.value=!1,r(`editCustom`,e)}return(t,n)=>(J(),Y(`div`,{class:I([`toolbar`,{"is-customizing":e.customizing}])},[(J(!0),Y(q,null,kr(e.palette,(t,n)=>(J(),Y(q,{key:n},[K(bl)(t)?(J(),Y(`label`,{key:0,class:I([`toolbar__swatch toolbar__swatch--universal`,{"is-active":a.value}]),style:N(a.value?{background:e.strokeColor}:void 0),title:a.value?`万能颜色 ${e.strokeColor}`:`万能颜色`},[X(`input`,{type:`color`,value:a.value?e.strokeColor:`#000000`,"aria-label":`万能颜色`,onInput:o},null,40,_d)],14,gd)):(J(),Y(`button`,{key:1,class:I([`toolbar__swatch`,{"is-active":t===e.strokeColor}]),type:`button`,style:N({background:t}),"aria-label":`笔触颜色 ${t}`,onClick:e=>r(`colorChange`,t)},null,14,vd))],64))),128)),n[28]||=X(`span`,{class:`toolbar__divider`,"aria-hidden":`true`},null,-1),X(`button`,{class:`toolbar__history`,type:`button`,disabled:!e.canUndo,"aria-label":`撤销`,title:`撤销 (Ctrl/Cmd+Z)`,onClick:n[0]||=e=>r(`undo`)},[...n[23]||=[X(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M9 14L4 9l5-5`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`path`,{d:`M20 20v-7a4 4 0 0 0-4-4H4`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)]],8,yd),X(`button`,{class:I([`toolbar__shape-btn`,{"is-open":i.value}]),type:`button`,title:`切换图案`,onClick:c},[...n[24]||=[X(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[X(`path`,{d:`M12 4L18 12H6L12 4Z`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linejoin":`round`}),X(`circle`,{cx:`7`,cy:`18`,r:`3.5`,stroke:`currentColor`,"stroke-width":`1.5`}),X(`rect`,{x:`13.5`,y:`14.5`,width:`7`,height:`7`,stroke:`currentColor`,"stroke-width":`1.5`})],-1)]],2),Z(hd,{open:i.value,"shape-id":e.shapeId,"ordered-shapes":e.orderedShapes,onClose:n[1]||=e=>i.value=!1,onSelect:u,onEnterCustom:d,onDeleteCustom:n[2]||=e=>r(`deleteCustom`,e),onShareCustom:n[3]||=e=>r(`shareCustom`,e),onImportCustom:n[4]||=e=>r(`importCustom`),onMirror:n[5]||=e=>r(`mirror`,e),onMirrorCustom:n[6]||=e=>r(`mirrorCustom`,e),onClone:n[7]||=e=>r(`clone`,e),onCloneCustom:n[8]||=e=>r(`cloneCustom`,e),onEditCustom:n[9]||=e=>f(e),onEditInfoCustom:n[10]||=e=>r(`editInfoCustom`,e)},null,8,[`open`,`shape-id`,`ordered-shapes`]),X(`button`,{class:I([`toolbar__shape-btn toolbar__settings-btn`,{"is-open":s.value}]),type:`button`,title:`设置`,onClick:l},[...n[25]||=[X(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`circle`,{cx:`12`,cy:`12`,r:`3`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)]],2),Z($u,{open:s.value,mode:e.mode,palette:e.palette,"min-aspect":e.minAspect,"stroke-width":e.strokeWidth,"smooth-enabled":e.smoothEnabled,"smooth-strength":e.smoothStrength,onClose:n[11]||=e=>s.value=!1,onModeChange:n[12]||=e=>r(`modeChange`,e),onPaletteChange:n[13]||=e=>r(`paletteChange`,e),onMinAspectChange:n[14]||=e=>r(`minAspectChange`,e),onStrokeWidthChange:n[15]||=e=>r(`strokeWidthChange`,e),onSmoothEnabledChange:n[16]||=e=>r(`smoothEnabledChange`,e),onSmoothStrengthChange:n[17]||=e=>r(`smoothStrengthChange`,e),onReset:n[18]||=e=>r(`reset`)},null,8,[`open`,`mode`,`palette`,`min-aspect`,`stroke-width`,`smooth-enabled`,`smooth-strength`]),e.mode===`manual`&&!e.customizing?(J(),Y(`button`,{key:0,class:`toolbar__shape-btn`,type:`button`,disabled:!e.canMorph,"aria-label":`变形所有笔画`,title:`变形所有笔画`,onClick:n[19]||=e=>r(`applyMorph`)},[...n[26]||=[X(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12 2.5l2 6.5 6.5 2-6.5 2-2 6.5-2-6.5-6.5-2 6.5-2z`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linejoin":`round`})],-1)]],8,bd)):Q(``,!0),n[29]||=X(`span`,{class:`toolbar__divider`,"aria-hidden":`true`},null,-1),X(`button`,{class:`toolbar__clear`,type:`button`,"aria-label":`清除画布`,title:`清除画布`,onClick:n[20]||=e=>r(`clear`)},[...n[27]||=[la(`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-d301ffee><path d="M3 6h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d301ffee></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d301ffee></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d301ffee></path><path d="M10 11v6M14 11v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d301ffee></path></svg>`,1)]]),e.customizing?(J(),Y(`div`,xd,[X(`button`,{class:`toolbar__action toolbar__action--save`,type:`button`,onClick:n[21]||=e=>r(`saveCustom`)},` 保存 `),X(`button`,{class:`toolbar__action toolbar__action--cancel`,type:`button`,onClick:n[22]||=e=>r(`cancelCustom`)},` 取消 `)])):Q(``,!0)],2))}}),[[`__scopeId`,`data-v-d301ffee`]]),Cd=`/always_xx/assets/show-JNA49WGu.png`,wd={class:`app__bg`,"aria-hidden":`true`},Td={key:0,class:`app__demo-panel`},Ed=[`src`],Dd=[`innerHTML`],Od={class:`app__zoom`,"aria-label":`画幅缩放`},kd=[`disabled`],Ad=cl(ir({__name:`MainView`,setup(e){let{canvasRef:t,themeColor:n,titleText:r,manualHint:i,hintText:a,hasContent:o,demoShapeSvg:s,shapeId:c,mode:l,customizing:u,zoomPercent:d,isZoomed:f,onZoomReset:p,strokeColor:m,strokeWidth:h,minAspect:g,smoothEnabled:_,smoothStrength:v,onStrokeComplete:y,onDrawStart:b,onDrawCancel:x,onHistoryChange:S,onMorphChange:C,onViewChange:w,canUndo:T,canMorph:E,palette:D,customShapes:O,orderedShapes:ee,onColorChange:k,onChooseShape:A,onEnterCustom:te,onSaveCustom:j,onCancelCustom:ne,onDeleteCustom:M,onShareCustom:re,onImportCustom:ie,onMirrorBuiltin:ae,onMirrorCustom:oe,onCloneBuiltin:P,onCloneCustom:se,onEditCustom:F,onEditInfoCustom:ce,onClear:le,onUndo:ue,onModeChange:L,onApplyMorph:de,onPaletteChange:fe,onMinAspectChange:pe,onStrokeWidthChange:me,onSmoothEnabledChange:he,onSmoothStrengthChange:z,resetSettings:ge}=wl();return(e,B)=>(J(),Y(q,null,[X(`div`,wd,[X(`h1`,{class:`app__bg-title`,style:N({color:K(n)})},R(K(r)),5),X(`p`,{class:`app__bg-hint`,style:N({color:K(n)})},[K(l)===`manual`&&!K(u)?(J(),Y(q,{key:0},[ca(R(K(i).prefix)+` `,1),B[1]||=X(`svg`,{class:`app__bg-hint-icon`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12 2.5l2 6.5 6.5 2-6.5 2-2 6.5-2-6.5-6.5-2 6.5-2z`,stroke:`currentColor`,"stroke-width":`1.5`,"stroke-linejoin":`round`})],-1),ca(` `+R(K(i).suffix),1)],64)):(J(),Y(q,{key:1},[ca(R(K(a)),1)],64))],4),Z(Za,{name:`demo-fade`},{default:_n(()=>[K(o)?Q(``,!0):(J(),Y(`div`,Td,[X(`img`,{class:`app__demo-left`,src:K(Cd),alt:``},null,8,Ed),Z(Za,{name:`demo-shape`,mode:`out-in`},{default:_n(()=>[(J(),Y(`div`,{key:K(c),class:`app__demo-right`,innerHTML:K(s)},null,8,Dd))]),_:1})]))]),_:1})]),X(`div`,Od,[X(`span`,{class:I([`app__zoom-pct`,{"is-zoomed":K(f)}])},R(K(d))+`%`,3),X(`button`,{class:`app__zoom-reset`,type:`button`,disabled:!K(f),"aria-label":`还原为 100%`,title:`还原为 100%`,onClick:B[0]||=(...e)=>K(p)&&K(p)(...e)},[...B[2]||=[la(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-70694efe><path d="M9 4H4v5" data-v-70694efe></path><path d="M15 4h5v5" data-v-70694efe></path><path d="M9 20H4v-5" data-v-70694efe></path><path d="M15 20h5v-5" data-v-70694efe></path></svg>`,1)]],8,kd)]),Z(ll,{ref_key:`canvasRef`,ref:t,"stroke-color":K(m),"stroke-width":K(h),"min-aspect":K(g),"smooth-enabled":K(u)&&K(_),"smooth-strength":K(v),onStrokeComplete:K(y),onDrawStart:K(b),onDrawCancel:K(x),onHistoryChange:K(S),onMorphChange:K(C),onViewChange:K(w)},null,8,[`stroke-color`,`stroke-width`,`min-aspect`,`smooth-enabled`,`smooth-strength`,`onStrokeComplete`,`onDrawStart`,`onDrawCancel`,`onHistoryChange`,`onMorphChange`,`onViewChange`]),Z(Sd,{"stroke-color":K(m),"shape-id":K(c),mode:K(l),"can-undo":K(T),"can-morph":K(E),palette:K(D),"min-aspect":K(g),"stroke-width":K(h),"smooth-enabled":K(_),"smooth-strength":K(v),customizing:K(u),"has-custom-shape":K(O).length>0,"ordered-shapes":K(ee),onColorChange:K(k),onShapeChange:K(A),onCustomShape:K(te),onSaveCustom:K(j),onCancelCustom:K(ne),onDeleteCustom:K(M),onShareCustom:K(re),onImportCustom:K(ie),onMirror:K(ae),onMirrorCustom:K(oe),onClone:K(P),onCloneCustom:K(se),onEditCustom:K(F),onEditInfoCustom:K(ce),onClear:K(le),onUndo:K(ue),onModeChange:K(L),onApplyMorph:K(de),onPaletteChange:K(fe),onMinAspectChange:K(pe),onStrokeWidthChange:K(me),onSmoothEnabledChange:K(he),onSmoothStrengthChange:K(z),onReset:K(ge)},null,8,`stroke-color.shape-id.mode.can-undo.can-morph.palette.min-aspect.stroke-width.smooth-enabled.smooth-strength.customizing.has-custom-shape.ordered-shapes.onColorChange.onShapeChange.onCustomShape.onSaveCustom.onCancelCustom.onDeleteCustom.onShareCustom.onImportCustom.onMirror.onMirrorCustom.onClone.onCloneCustom.onEditCustom.onEditInfoCustom.onClear.onUndo.onModeChange.onApplyMorph.onPaletteChange.onMinAspectChange.onStrokeWidthChange.onSmoothEnabledChange.onSmoothStrengthChange.onReset`.split(`.`))],64))}}),[[`__scopeId`,`data-v-70694efe`]]),jd={key:0,class:`steps`,"aria-label":`引导步骤`},Md=cl(ir({__name:`StepsIndicator`,props:{step:{}},setup(e){return(t,n)=>e.step===`main`?Q(``,!0):(J(),Y(`div`,jd,[X(`span`,{class:I([`steps__item`,{"is-active":e.step===`shape`,"is-done":e.step===`mode`}])},[...n[0]||=[X(`span`,{class:`steps__num`},`1`,-1),X(`span`,{class:`steps__text`},`选择图案`,-1)]],2),n[2]||=X(`span`,{class:`steps__line`,"aria-hidden":`true`},null,-1),X(`span`,{class:I([`steps__item`,{"is-active":e.step===`mode`}])},[...n[1]||=[X(`span`,{class:`steps__num`},`2`,-1),X(`span`,{class:`steps__text`},`选择模式`,-1)]],2)]))}}),[[`__scopeId`,`data-v-1ea10128`]]),Nd={class:`form-field`},Pd={class:`form-field`},Fd=[`title`],Id=[`value`],Ld=cl(ir({__name:`SaveCustomDialog`,props:{open:{type:Boolean},initialName:{default:`我的图案`},initialColor:{default:`#000000`},title:{default:`保存自定义图案`},message:{default:`给它起个名字，选择主题色，之后可在图案列表中找到它`},confirmText:{default:`保存`}},emits:[`close`,`confirm`],setup(e,{emit:t}){let n=e,r=t,i=G(``),a=G(`#000000`);Tn(()=>n.open,e=>{e&&(i.value=n.initialName,a.value=n.initialColor)});function o(e){a.value=e.target.value}function s(){r(`confirm`,{name:i.value.trim()||`我的图案`,themeColor:a.value.trim()||`#000000`})}return(t,n)=>(J(),ea(ru,{open:e.open,title:e.title,message:e.message,"confirm-text":e.confirmText,onClose:n[1]||=e=>r(`close`),onConfirm:s},{default:_n(()=>[X(`div`,Nd,[n[2]||=X(`label`,{class:`form-field__label`,for:`save-name`},`名字`,-1),vn(X(`input`,{id:`save-name`,"onUpdate:modelValue":n[0]||=e=>i.value=e,class:`form-field__control`,type:`text`,maxlength:`12`,placeholder:`输入图案名字`,autofocus:``,onKeydown:$o(s,[`enter`])},null,544),[[Jo,i.value]])]),X(`div`,Pd,[n[3]||=X(`label`,{class:`form-field__label`,for:`save-color`},`主题色`,-1),X(`label`,{class:`form-field__control form-field__picker`,style:N({background:a.value}),title:`选择主题色 ${a.value}`},[X(`input`,{id:`save-color`,type:`color`,value:a.value,"aria-label":`选择主题色`,onInput:o},null,40,Id)],12,Fd)])]),_:1},8,[`open`,`title`,`message`,`confirm-text`]))}}),[[`__scopeId`,`data-v-a26fe176`]]),Rd=`saveImageToAlbum`;async function zd(){let e=window.toy;if(!e||typeof e.isSupport!=`function`)return!1;try{return await e.isSupport(Rd)}catch{return!1}}var Bd={class:`share-code-box`},Vd={class:`share-code-box__bar`,"aria-hidden":`true`},Hd={class:`share-code-box__name`},Ud={class:`share-code-box__count`},Wd=[`value`],Gd={key:0,class:`share-tip share-tip--warn`},Kd={class:`share-actions`},qd={key:1,class:`share-tip share-tip--warn`},Jd=5e3,Yd=cl(ir({__name:`ShareCustomDialog`,props:{open:{type:Boolean},shape:{}},emits:[`close`,`confirm`],setup(e,{emit:t}){let n=e,r=t,i=G(!1),a=G(!1),o=G(!1),s=G(!1);yr(async()=>{o.value=await zd()});async function c(e){if(navigator.clipboard&&typeof navigator.clipboard.writeText==`function`)try{return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.top=`0`,t.style.left=`-9999px`,t.style.opacity=`0`,document.body.appendChild(t);let n=document.getSelection(),r=n&&n.rangeCount>0?n.getRangeAt(0):null;t.select(),t.setSelectionRange(0,t.value.length);let i=document.execCommand(`copy`);return document.body.removeChild(t),r&&n&&(n.removeAllRanges(),n.addRange(r)),i}catch{return!1}}let l=$(()=>n.shape?.name??`自定义图案`),u=$(()=>n.shape?d(n.shape):``);function d(e){let t={name:e.name,version:e.version,themeColor:e.themeColor,aspectRatio:e.aspectRatio,paths:e.paths.map(e=>e.map(e=>({x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3})))};return JSON.stringify(t)}async function f(){await c(u.value)?(i.value=!0,a.value=!1):(i.value=!1,a.value=!0),setTimeout(()=>{i.value=!1,a.value=!1},2e3)}async function p(){if(!n.shape)return;if(o.value){s.value=!0,setTimeout(()=>s.value=!1,3e3);return}let e=yl(n.shape.paths),t=new Blob([e],{type:`image/svg+xml`}),r=URL.createObjectURL(t),i=document.createElement(`a`);i.href=r,i.download=`${n.shape.name}.svg`,i.click(),URL.revokeObjectURL(r)}return(t,n)=>(J(),ea(ru,{open:e.open,title:`分享自定义图案`,message:`「${l.value}」的代码，可复制发给朋友，或下载为 SVG 文件`,"confirm-text":`完成`,"hide-cancel":``,class:`share-dialog`,onClose:n[1]||=e=>r(`close`),onConfirm:n[2]||=e=>r(`confirm`)},{default:_n(()=>[X(`div`,Bd,[X(`div`,Vd,[n[3]||=X(`span`,{class:`share-code-box__dot`},null,-1),n[4]||=X(`span`,{class:`share-code-box__dot`},null,-1),n[5]||=X(`span`,{class:`share-code-box__dot`},null,-1),X(`span`,Hd,R(l.value)+`.json`,1),X(`span`,Ud,R(u.value.length)+` 字符`,1)]),X(`textarea`,{class:`share-code`,value:u.value,readonly:``,rows:`6`,spellcheck:`false`,"aria-label":`分享代码`,onFocus:n[0]||=e=>e.target.select()},null,40,Wd)]),u.value.length>Jd?(J(),Y(`p`,Gd,` 代码较长（`+R(u.value.length)+` 字符），建议下载 SVG 分享而非直接复制 `,1)):Q(``,!0),X(`div`,Kd,[X(`button`,{class:`share-actions__btn`,type:`button`,onClick:f},[n[6]||=X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`rect`,{x:`9`,y:`9`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,"stroke-width":`2`}),X(`path`,{d:`M5 15V5a2 2 0 0 1 2-2h10`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1),ca(` `+R(i.value?`已复制`:a.value?`复制失败，请长按代码`:`复制代码`),1)]),X(`button`,{class:`share-actions__btn share-actions__btn--primary`,type:`button`,onClick:p},[...n[7]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12 3v12m0 0l-5-5m5 5l5-5`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`path`,{d:`M5 21h14`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1),ca(` 下载SVG `,-1)]])]),s.value?(J(),Y(`p`,qd,` B站 App 内无法直接下载 SVG 文件，请复制上方代码分享，或在浏览器中绘制图案 `)):Q(``,!0)]),_:1},8,[`open`,`message`]))}}),[[`__scopeId`,`data-v-02d0bd46`]]),Xd={class:`import-actions`},Zd={class:`import-btn import-file`,type:`button`},Qd={class:`form-field`},$d={class:`form-field`},ef=[`title`],tf=[`value`],nf=cl(ir({__name:`ImportCustomDialog`,props:{open:{type:Boolean}},emits:[`close`,`confirm`],setup(e,{emit:t}){let n=e,r=t,i=G(``),a=G(``),o=G(`#000000`),s=G(``),c=G(null),l=G(``);Tn(()=>n.open,e=>{e&&(i.value=``,a.value=``,o.value=`#000000`,s.value=``,c.value=null,l.value=``)});let u=$(()=>s.value?s.value:l.value?`已选择文件：${l.value}`:c.value?`已识别图案：${c.value.name}`:`还没有导入任何图案`);function d(e){o.value=e.target.value}async function f(){try{let e=await navigator.clipboard.readText();if(!e.trim()){s.value=`剪贴板为空，请先复制分享代码`;return}i.value=e,p()}catch{s.value=`无法读取剪贴板，请手动粘贴`}}function p(){l.value=``;let e=i.value.trim();if(!e){c.value=null,s.value=``;return}try{let t=JSON.parse(e);typeof t.themeColor!=`string`&&(t.themeColor=`#000000`),(typeof t.aspectRatio!=`number`||!Number.isFinite(t.aspectRatio)||t.aspectRatio<=0)&&(t.aspectRatio=fl(t.paths)),gl(t),c.value=t,a.value=t.name,o.value=t.themeColor,s.value=``}catch{c.value=null,s.value=`代码解析失败，请检查是否为有效的分享代码`}}function m(e){let t=e.target,n=t.files?.[0];if(!n)return;let r=new FileReader;r.onload=()=>{try{let e=String(r.result??``),t=n.name.replace(/\.svg$/i,``)||`导入的图案`,i=vl(e,t,Sc,`#000000`,!0);c.value=i,l.value=n.name,a.value=t,o.value=`#000000`,s.value=``}catch{c.value=null,s.value=`SVG 解析失败，请确认文件包含 <path> 路径`}t.value=``},r.onerror=()=>{c.value=null,s.value=`文件读取失败，请重试`,t.value=``},r.readAsText(n)}function h(){if(!c.value){s.value=`请先粘贴分享代码或选择 SVG 文件`;return}let e=a.value.trim()||`导入的图案`,t=o.value.trim()||`#000000`,n={...c.value,name:e,themeColor:t};(typeof n.aspectRatio!=`number`||!Number.isFinite(n.aspectRatio)||n.aspectRatio<=0)&&(n.aspectRatio=fl(n.paths));try{gl(n)}catch{s.value=`导入的图案数据不合法`;return}r(`confirm`,n)}return(t,n)=>(J(),ea(ru,{open:e.open,title:`导入自定义图案`,message:`粘贴分享代码，或选择 SVG 文件导入；名称与主题色可自动识别并修改`,"confirm-text":`导入`,onClose:n[2]||=e=>r(`close`),onConfirm:h},{default:_n(()=>[X(`div`,Xd,[X(`button`,{class:`import-btn`,type:`button`,onClick:f},[...n[3]||=[X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`rect`,{x:`9`,y:`9`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,"stroke-width":`2`}),X(`path`,{d:`M5 15V5a2 2 0 0 1 2-2h10`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1),ca(` 粘贴 `,-1)]]),X(`button`,Zd,[n[4]||=X(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[X(`path`,{d:`M12 16V3M6 9l6 7 6-7`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),X(`path`,{d:`M4 20h16`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`})],-1),n[5]||=ca(` 选择 SVG 文件 `,-1),X(`input`,{type:`file`,accept:`.svg,application/octet-stream`,onChange:m},null,32)])]),vn(X(`textarea`,{"onUpdate:modelValue":n[0]||=e=>i.value=e,class:`ios-modal-input import-code`,placeholder:`粘贴分享代码（JSON）`,rows:`4`,spellcheck:`false`,onInput:p},null,544),[[Jo,i.value]]),X(`p`,{class:I([`import-status`,{"is-error":s.value}]),role:`status`},R(u.value),3),X(`div`,Qd,[n[6]||=X(`label`,{class:`form-field__label`,for:`import-name`},`名字`,-1),vn(X(`input`,{id:`import-name`,"onUpdate:modelValue":n[1]||=e=>a.value=e,class:`form-field__control`,type:`text`,maxlength:`12`,placeholder:`输入图案名字`},null,512),[[Jo,a.value]])]),X(`div`,$d,[n[7]||=X(`label`,{class:`form-field__label`,for:`import-color`},`主题色`,-1),X(`label`,{class:`form-field__control form-field__picker`,style:N({background:o.value}),title:`选择主题色 ${o.value}`},[X(`input`,{id:`import-color`,type:`color`,value:o.value,"aria-label":`选择主题色`,onInput:d},null,40,tf)],12,ef)])]),_:1},8,[`open`]))}}),[[`__scopeId`,`data-v-e862ae30`]]),rf={class:`app`};rs(cl(ir({__name:`App`,setup(e){let{step:t,saveDialogOpen:n,editingShape:r,confirmSaveCustom:i,deleteDialogOpen:a,pendingDeleteShape:o,confirmDeleteCustom:s,shareDialogOpen:c,shareShape:l,importDialogOpen:u,onImportConfirm:d,editDialogOpen:f,pendingEditShape:p,confirmEditInfo:m}=wl();return(e,h)=>(J(),Y(`div`,rf,[Z(Md,{step:K(t)},null,8,[`step`]),Z(Ml),Z(Jl),K(t)===`main`?(J(),ea(Ad,{key:0})):Q(``,!0),Z(Ld,{open:K(n),"initial-name":K(r)?.name??`我的图案`,"initial-color":K(r)?.themeColor??`#000000`,title:K(r)?`编辑图案`:`保存自定义图案`,message:K(r)?`在原有图案上继续绘制，保存后覆盖原图案`:`给它起个名字，选择主题色，之后可在图案列表中找到它`,"confirm-text":`保存`,onClose:h[0]||=e=>n.value=!1,onConfirm:K(i)},null,8,[`open`,`initial-name`,`initial-color`,`title`,`message`,`onConfirm`]),Z(Ld,{open:K(f),"initial-name":K(p)?.name??`我的图案`,"initial-color":K(p)?.themeColor??`#000000`,title:`修改图案信息`,message:`修改图案名称与主题色（图案内容保持不变）`,"confirm-text":`保存`,onClose:h[1]||=e=>f.value=!1,onConfirm:K(m)},null,8,[`open`,`initial-name`,`initial-color`,`onConfirm`]),Z(ru,{open:K(a),title:`删除自定义图案`,message:`确定要删除「${K(o)?.name??``}」吗？删除后无法恢复。`,"confirm-text":`删除`,danger:``,onClose:h[2]||=e=>a.value=!1,onConfirm:K(s)},null,8,[`open`,`message`,`onConfirm`]),Z(Yd,{open:K(c),shape:K(l),onClose:h[3]||=e=>c.value=!1,onConfirm:h[4]||=e=>c.value=!1},null,8,[`open`,`shape`]),Z(nf,{open:K(u),onClose:h[5]||=e=>u.value=!1,onConfirm:K(d)},null,8,[`open`,`onConfirm`])]))}}),[[`__scopeId`,`data-v-7c760887`]])).mount(`#app`);