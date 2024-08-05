/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function e(e,t){const n=new Set(e.split(','));return e=>n.has(e)}const t='production'!==process.env.NODE_ENV?Object.freeze({}):{},n='production'!==process.env.NODE_ENV?Object.freeze([]):[],o=()=>{},r=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),s=Object.assign,c=Object.prototype.hasOwnProperty,i=(e,t)=>c.call(e,t),a=Array.isArray,l=e=>'[object Map]'===g(e),u=e=>'[object Set]'===g(e),p=e=>'function'==typeof e,d=e=>'string'==typeof e,f=e=>'symbol'==typeof e,h=e=>null!==e&&'object'==typeof e,_=e=>(h(e)||p(e))&&p(e.then)&&p(e.catch),v=Object.prototype.toString,g=e=>v.call(e),y=e=>g(e).slice(8,-1),m=e=>'[object Object]'===g(e),E=e=>d(e)&&'NaN'!==e&&'-'!==e[0]&&''+parseInt(e,10)===e,N=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},b=/-(\w)/g,w=N((e=>e.replace(b,((e,t)=>t?t.toUpperCase():'')))),O=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),S=(e,t)=>!Object.is(e,t),k=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})};let x;const V=()=>x||(x='undefined'!=typeof globalThis?globalThis:'undefined'!=typeof self?self:'undefined'!=typeof window?window:'undefined'!=typeof global?global:{});function D(e){if(a(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=d(o)?j(o):D(o);if(r)for(const e in r)t[e]=r[e]}return t}if(d(e)||h(e))return e}const C=/;(?![^(]*\))/g,$=/:([^]+)/,P=/\/\*[^]*?\*\//g;function j(e){const t={};return e.replace(P,'').split(C).forEach((e=>{if(e){const n=e.split($);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function R(e){let t='';if(d(e))t=e;else if(a(e))for(let n=0;n<e.length;n++){const o=R(e[n]);o&&(t+=o+' ')}else if(h(e))for(const n in e)e[n]&&(t+=n+' ');return t.trim()}
/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let I;class F{constructor(e,t,n,o){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,function(e,t){t&&t.active&&t.effects.push(e)}(this,o)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,H();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(t.computed.value,this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),W()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=M,t=I;try{return M=!0,I=this,this._runnings++,T(this),this.fn()}finally{A(this),this._runnings--,I=t,M=e}}stop(){this.active&&(T(this),A(this),this.onStop&&this.onStop(),this.active=!1)}}function T(e){e._trackId++,e._depsLength=0}function A(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)L(e.deps[t],e);e.deps.length=e._depsLength}}function L(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let M=!0,U=0;const z=[];function H(){z.push(M),M=!1}function W(){const e=z.pop();M=void 0===e||e}function K(){U++}function J(){for(U--;!U&&B.length;)B.shift()()}const B=[];function q(e,t,n){var o;K();for(const r of e.keys()){let c;r._dirtyLevel<t&&(null!=c?c:c=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=c?c:c=e.get(r)===r._trackId)&&('production'!==process.env.NODE_ENV&&(null==(o=r.onTrigger)||o.call(r,s({effect:r},n))),r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&B.push(r.scheduler)))}J()}const G=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Q=new WeakMap,X=Symbol('production'!==process.env.NODE_ENV?'iterate':''),Y=Symbol('production'!==process.env.NODE_ENV?'Map key iterate':'');function Z(e,t,n){if(M&&I){let o=Q.get(e);o||Q.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=G((()=>o.delete(n)))),function(e,t,n){var o;if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&L(r,e),e.deps[e._depsLength++]=t):e._depsLength++,'production'!==process.env.NODE_ENV&&(null==(o=e.onTrack)||o.call(e,s({effect:e},n)))}}(I,r,'production'!==process.env.NODE_ENV?{target:e,type:t,key:n}:void 0)}}function ee(e,t,n,o,r,s){const c=Q.get(e);if(!c)return;let i=[];if('clear'===t)i=[...c.values()];else if('length'===n&&a(e)){const e=Number(o);c.forEach(((t,n)=>{('length'===n||!f(n)&&n>=e)&&i.push(t)}))}else switch(void 0!==n&&i.push(c.get(n)),t){case'add':a(e)?E(n)&&i.push(c.get('length')):(i.push(c.get(X)),l(e)&&i.push(c.get(Y)));break;case'delete':a(e)||(i.push(c.get(X)),l(e)&&i.push(c.get(Y)));break;case'set':l(e)&&i.push(c.get(X))}K();for(const c of i)c&&q(c,4,'production'!==process.env.NODE_ENV?{target:e,type:t,key:n,newValue:o,oldValue:r,oldTarget:s}:void 0);J()}const te=e('__proto__,__v_isRef,__isVue'),ne=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>'arguments'!==e&&'caller'!==e)).map((e=>Symbol[e])).filter(f)),oe=re();function re(){const e={};return['includes','indexOf','lastIndexOf'].forEach((t=>{e[t]=function(...e){const n=Je(this);for(let e=0,t=this.length;e<t;e++)Z(n,'get',e+'');const o=n[t](...e);return-1===o||!1===o?n[t](...e.map(Je)):o}})),['push','pop','shift','unshift','splice'].forEach((t=>{e[t]=function(...e){H(),K();const n=Je(this)[t].apply(this,e);return J(),W(),n}})),e}function se(e){f(e)||(e=String(e));const t=Je(this);return Z(t,'has',e),t.hasOwnProperty(e)}class ce{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const o=this._isReadonly,r=this._isShallow;if('__v_isReactive'===t)return!o;if('__v_isReadonly'===t)return o;if('__v_isShallow'===t)return r;if('__v_raw'===t)return n===(o?r?Te:Fe:r?Ie:Re).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=a(e);if(!o){if(s&&i(oe,t))return Reflect.get(oe,t,n);if('hasOwnProperty'===t)return se}const c=Reflect.get(e,t,n);return(f(t)?ne.has(t):te(t))?c:(o||Z(e,'get',t),r?c:Ge(c)?s&&E(t)?c:c.value:h(c)?o?Le(c):Ae(c):c)}}class ie extends ce{constructor(e=!1){super(!1,e)}set(e,t,n,o){let r=e[t];if(!this._isShallow){const t=He(r);if(We(n)||He(n)||(r=Je(r),n=Je(n)),!a(e)&&Ge(r)&&!Ge(n))return!t&&(r.value=n,!0)}const s=a(e)&&E(t)?Number(t)<e.length:i(e,t),c=Reflect.set(e,t,n,o);return e===Je(o)&&(s?S(n,r)&&ee(e,'set',t,n,r):ee(e,'add',t,n)),c}deleteProperty(e,t){const n=i(e,t),o=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&ee(e,'delete',t,void 0,o),r}has(e,t){const n=Reflect.has(e,t);return f(t)&&ne.has(t)||Z(e,'has',t),n}ownKeys(e){return Z(e,'iterate',a(e)?'length':X),Reflect.ownKeys(e)}}class ae extends ce{constructor(e=!1){super(!0,e)}set(e,t){return'production'!==process.env.NODE_ENV&&String(t),!0}deleteProperty(e,t){return'production'!==process.env.NODE_ENV&&String(t),!0}}const le=new ie,ue=new ae,pe=new ae(!0),de=e=>e,fe=e=>Reflect.getPrototypeOf(e);function he(e,t,n=!1,o=!1){const r=Je(e=e.__v_raw),s=Je(t);n||(S(t,s)&&Z(r,'get',t),Z(r,'get',s));const{has:c}=fe(r),i=o?de:n?qe:Be;return c.call(r,t)?i(e.get(t)):c.call(r,s)?i(e.get(s)):void(e!==r&&e.get(t))}function _e(e,t=!1){const n=this.__v_raw,o=Je(n),r=Je(e);return t||(S(e,r)&&Z(o,'has',e),Z(o,'has',r)),e===r?n.has(e):n.has(e)||n.has(r)}function ve(e,t=!1){return e=e.__v_raw,!t&&Z(Je(e),'iterate',X),Reflect.get(e,'size',e)}function ge(e,t=!1){t||We(e)||He(e)||(e=Je(e));const n=Je(this);return fe(n).has.call(n,e)||(n.add(e),ee(n,'add',e,e)),this}function ye(e,t,n=!1){n||We(t)||He(t)||(t=Je(t));const o=Je(this),{has:r,get:s}=fe(o);let c=r.call(o,e);c?'production'!==process.env.NODE_ENV&&je(o,r,e):(e=Je(e),c=r.call(o,e));const i=s.call(o,e);return o.set(e,t),c?S(t,i)&&ee(o,'set',e,t,i):ee(o,'add',e,t),this}function me(e){const t=Je(this),{has:n,get:o}=fe(t);let r=n.call(t,e);r?'production'!==process.env.NODE_ENV&&je(t,n,e):(e=Je(e),r=n.call(t,e));const s=o?o.call(t,e):void 0,c=t.delete(e);return r&&ee(t,'delete',e,void 0,s),c}function Ee(){const e=Je(this),t=0!==e.size,n='production'!==process.env.NODE_ENV?l(e)?new Map(e):new Set(e):void 0,o=e.clear();return t&&ee(e,'clear',void 0,void 0,n),o}function Ne(e,t){return function(n,o){const r=this,s=r.__v_raw,c=Je(s),i=t?de:e?qe:Be;return!e&&Z(c,'iterate',X),s.forEach(((e,t)=>n.call(o,i(e),i(t),r)))}}function be(e,t,n){return function(...o){const r=this.__v_raw,s=Je(r),c=l(s),i='entries'===e||e===Symbol.iterator&&c,a='keys'===e&&c,u=r[e](...o),p=n?de:t?qe:Be;return!t&&Z(s,'iterate',a?Y:X),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:i?[p(e[0]),p(e[1])]:p(e),done:t}},[Symbol.iterator](){return this}}}}function we(e){return function(...t){if('production'!==process.env.NODE_ENV){t[0]&&t[0];O(e),Je(this)}return'delete'!==e&&('clear'===e?void 0:this)}}function Oe(){const e={get(e){return he(this,e)},get size(){return ve(this)},has:_e,add:ge,set:ye,delete:me,clear:Ee,forEach:Ne(!1,!1)},t={get(e){return he(this,e,!1,!0)},get size(){return ve(this)},has:_e,add(e){return ge.call(this,e,!0)},set(e,t){return ye.call(this,e,t,!0)},delete:me,clear:Ee,forEach:Ne(!1,!0)},n={get(e){return he(this,e,!0)},get size(){return ve(this,!0)},has(e){return _e.call(this,e,!0)},add:we('add'),set:we('set'),delete:we('delete'),clear:we('clear'),forEach:Ne(!0,!1)},o={get(e){return he(this,e,!0,!0)},get size(){return ve(this,!0)},has(e){return _e.call(this,e,!0)},add:we('add'),set:we('set'),delete:we('delete'),clear:we('clear'),forEach:Ne(!0,!0)};return['keys','values','entries',Symbol.iterator].forEach((r=>{e[r]=be(r,!1,!1),n[r]=be(r,!0,!1),t[r]=be(r,!1,!0),o[r]=be(r,!0,!0)})),[e,n,t,o]}const[Se,ke,xe,Ve]=Oe();function De(e,t){const n=t?e?Ve:xe:e?ke:Se;return(t,o,r)=>'__v_isReactive'===o?!e:'__v_isReadonly'===o?e:'__v_raw'===o?t:Reflect.get(i(n,o)&&o in t?n:t,o,r)}const Ce={get:De(!1,!1)},$e={get:De(!0,!1)},Pe={get:De(!0,!0)};function je(e,t,n){const o=Je(n);if(o!==n&&t.call(e,o)){y(e)}}const Re=new WeakMap,Ie=new WeakMap,Fe=new WeakMap,Te=new WeakMap;function Ae(e){return He(e)?e:Ue(e,!1,le,Ce,Re)}function Le(e){return Ue(e,!0,ue,$e,Fe)}function Me(e){return Ue(e,!0,pe,Pe,Te)}function Ue(e,t,n,o,r){if(!h(e))return'production'!==process.env.NODE_ENV&&String(e),e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const c=(i=e).__v_skip||!Object.isExtensible(i)?0:(e=>{switch(e){case'Object':case'Array':return 1;case'Map':case'Set':case'WeakMap':case'WeakSet':return 2;default:return 0}})(y(i));var i;if(0===c)return e;const a=new Proxy(e,2===c?o:n);return r.set(e,a),a}function ze(e){return He(e)?ze(e.__v_raw):!(!e||!e.__v_isReactive)}function He(e){return!(!e||!e.__v_isReadonly)}function We(e){return!(!e||!e.__v_isShallow)}function Ke(e){return!!e&&!!e.__v_raw}function Je(e){const t=e&&e.__v_raw;return t?Je(t):e}const Be=e=>h(e)?Ae(e):e,qe=e=>h(e)?Le(e):e;function Ge(e){return!(!e||!0!==e.__v_isRef)}const Qe={get:(e,t,n)=>{return Ge(o=Reflect.get(e,t,n))?o.value:o;var o},set:(e,t,n,o)=>{const r=e[t];return Ge(r)&&!Ge(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};
/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Xe=[];let Ye=!1;function Ze(e,...t){if(Ye)return;Ye=!0,H();const n=Xe.length?Xe[Xe.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=function(){let e=Xe[Xe.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}();if(o)ot(o,n,11,[e+t.map((e=>{var t,n;return null!=(n=null==(t=e.toString)?void 0:t.call(e))?n:JSON.stringify(e)})).join(''),n&&n.proxy,r.map((({vnode:e})=>`at <${Vn(n,e.type)}>`)).join('\n'),r]);else{const n=[`[Vue warn]: ${e}`,...t];r.length&&n.push('\n',...function(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:['\n'],...function({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:'',o=!!e.component&&null==e.component.parent,r=` at <${Vn(e.component,e.type,o)}`,s='>'+n;return e.props?[r,...et(e.props),s]:[r+s]}(e))})),t}(r))}W(),Ye=!1}function et(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...tt(n,e[n]))})),n.length>3&&t.push(' ...'),t}function tt(e,t,n){return d(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):'number'==typeof t||'boolean'==typeof t||null==t?n?t:[`${e}=${t}`]:Ge(t)?(t=tt(e,Je(t.value),!0),n?t:[`${e}=Ref<`,t,'>']):p(t)?[`${e}=fn${t.name?`<${t.name}>`:''}`]:(t=Je(t),n?t:[`${e}=`,t])}const nt={sp:'serverPrefetch hook',bc:'beforeCreate hook',c:'created hook',bm:'beforeMount hook',m:'mounted hook',bu:'beforeUpdate hook',u:'updated',bum:'beforeUnmount hook',um:'unmounted hook',a:'activated hook',da:'deactivated hook',ec:'errorCaptured hook',rtc:'renderTracked hook',rtg:'renderTriggered hook',0:'setup function',1:'render function',2:'watcher getter',3:'watcher callback',4:'watcher cleanup function',5:'native event handler',6:'component event handler',7:'vnode hook',8:'directive hook',9:'transition hook',10:'app errorHandler',11:'app warnHandler',12:'ref function',13:'async component loader',14:'scheduler flush',15:'component update'};function ot(e,t,n,o){try{return o?e(...o):e()}catch(e){st(e,t,n)}}function rt(e,t,n,o){if(p(e)){const r=ot(e,t,n,o);return r&&_(r)&&r.catch((e=>{st(e,t,n)})),r}if(a(e)){const r=[];for(let s=0;s<e.length;s++)r.push(rt(e[s],t,n,o));return r}'production'!==process.env.NODE_ENV&&Ze('Invalid value type passed to callWithAsyncErrorHandling(): '+typeof e)}function st(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const r=t.proxy,s='production'!==process.env.NODE_ENV?nt[n]:`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;o=o.parent}const c=t.appContext.config.errorHandler;if(c)return H(),ot(c,null,10,[e,r,s]),void W()}!function(e,t,n,o=!0){if('production'!==process.env.NODE_ENV){const s=nt[t];if(n&&(r=n,Xe.push(r)),Ze('Unhandled error'+(s?` during execution of ${s}`:'')),n&&Xe.pop(),o)throw e}var r}(e,n,r,o)}let ct=!1,it=!1;const at=[];let lt=0;const ut=[];let pt=null,dt=0;const ft=Promise.resolve();let ht=null;const _t=100;function vt(e){const t=ht||ft;return e?t.then(this?e.bind(this):e):t}function gt(e){at.length&&at.includes(e,ct&&e.allowRecurse?lt+1:lt)||(null==e.id?at.push(e):at.splice(function(e){let t=lt+1,n=at.length;for(;t<n;){const o=t+n>>>1,r=at[o],s=Et(r);s<e||s===e&&r.pre?t=o+1:n=o}return t}(e.id),0,e),yt())}function yt(){ct||it||(it=!0,ht=ft.then(bt))}function mt(e){a(e)?ut.push(...e):pt&&pt.includes(e,e.allowRecurse?dt+1:dt)||ut.push(e),yt()}const Et=e=>null==e.id?1/0:e.id,Nt=(e,t)=>{const n=Et(e)-Et(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function bt(e){it=!1,ct=!0,'production'!==process.env.NODE_ENV&&(e=e||new Map),at.sort(Nt);const t='production'!==process.env.NODE_ENV?t=>wt(e,t):o;try{for(lt=0;lt<at.length;lt++){const e=at[lt];if(e&&!1!==e.active){if('production'!==process.env.NODE_ENV&&t(e))continue;ot(e,e.i,e.i?15:14)}}}finally{lt=0,at.length=0,function(e){if(ut.length){const t=[...new Set(ut)].sort(((e,t)=>Et(e)-Et(t)));if(ut.length=0,pt)return void pt.push(...t);for(pt=t,'production'!==process.env.NODE_ENV&&(e=e||new Map),dt=0;dt<pt.length;dt++){const t=pt[dt];'production'!==process.env.NODE_ENV&&wt(e,t)||!1!==t.active&&t()}pt=null,dt=0}}(e),ct=!1,ht=null,(at.length||ut.length)&&bt(e)}}function wt(e,t){if(e.has(t)){const n=e.get(t);if(n>_t){const e=t.i,n=e&&xn(e.type);return st(`Maximum recursive updates exceeded${n?` in component <${n}>`:''}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}e.set(t,n+1)}else e.set(t,1)}const Ot=new Map;'production'!==process.env.NODE_ENV&&(V().__VUE_HMR_RUNTIME__={createRecord:Vt((function(e,t){if(St.has(e))return!1;return St.set(e,{initialDef:kt(t),instances:new Set}),!0})),rerender:Vt((function(e,t){const n=St.get(e);if(!n)return;n.initialDef.render=t,[...n.instances].forEach((e=>{t&&(e.render=t,kt(e.type).render=t),e.renderCache=[],e.effect.dirty=!0,e.update()}))})),reload:Vt((function(e,t){const n=St.get(e);if(!n)return;t=kt(t),xt(n.initialDef,t);const o=[...n.instances];for(let e=0;e<o.length;e++){const r=o[e],s=kt(r.type);let c=Ot.get(s);c||(s!==n.initialDef&&xt(s,t),Ot.set(s,c=new Set)),c.add(r),r.appContext.propsCache.delete(r.type),r.appContext.emitsCache.delete(r.type),r.appContext.optionsCache.delete(r.type),r.ceReload?(c.add(r),r.ceReload(t.styles),c.delete(r)):r.parent?(r.parent.effect.dirty=!0,gt((()=>{r.parent.update(),c.delete(r)}))):r.appContext.reload?r.appContext.reload():'undefined'!=typeof window&&window.location.reload()}mt((()=>{Ot.clear()}))}))});const St=new Map;function kt(e){return Dn(e)?e.__vccOpts:e}function xt(e,t){s(e,t);for(const n in e)'__file'===n||n in t||delete e[n]}function Vt(e){return(t,n)=>{try{return e(t,n)}catch(e){}}}let Dt=null,Ct=null;function $t(e,t){6&e.shapeFlag&&e.component?$t(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}const Pt='components';function jt(e,t){return function(e,t,n=!0,o=!1){const r=bn;if(r){const s=r.type;{const e=xn(s,!1);if(e&&(e===t||e===w(t)||e===O(w(t))))return s}const c=It(r[e]||s[e],t)||It(r.appContext[e],t);if(!c&&o)return s;if('production'!==process.env.NODE_ENV&&n&&!c){const n='\nIf this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.';Ze(`Failed to resolve ${e.slice(0,-1)}: ${t}${n}`)}return c}'production'!==process.env.NODE_ENV&&Ze(`resolve${O(e.slice(0,-1))} can only be used in render() or setup().`)}(Pt,e,!0,t)||e}const Rt=Symbol.for('v-ndc');function It(e,t){return e&&(e[t]||e[w(t)]||e[O(w(t))])}const Ft=e=>e?4&e.vnode.shapeFlag?function(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((n=e.exposed,Object.isExtensible(n)&&k(n,'__v_skip',!0),ze(t=n)?t:new Proxy(t,Qe)),{get:(t,n)=>n in t?t[n]:n in Tt?Tt[n](e):void 0,has:(e,t)=>t in e||t in Tt})):e.proxy;var t;var n}(e):Ft(e.parent):null,Tt=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>'production'!==process.env.NODE_ENV?Me(e.props):e.props,$attrs:e=>'production'!==process.env.NODE_ENV?Me(e.attrs):e.attrs,$slots:e=>'production'!==process.env.NODE_ENV?Me(e.slots):e.slots,$refs:e=>'production'!==process.env.NODE_ENV?Me(e.refs):e.refs,$parent:e=>Ft(e.parent),$root:e=>Ft(e.root),$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?function(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:c}}=e.appContext,i=s.get(t);let a;i?a=i:r.length||n||o?(a={},r.length&&r.forEach((e=>zt(a,e,c,!0))),zt(a,t,c)):a=t;h(t)&&s.set(t,a);return a}(e):e.type,$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,gt(e.update)}),$nextTick:e=>e.n||(e.n=vt.bind(e.proxy)),$watch:e=>__VUE_OPTIONS_API__?tn.bind(e):o}),At=(e,n)=>e!==t&&!e.__isScriptSetup&&i(e,n),Lt={get({_:e},n){if('__v_skip'===n)return!0;const{ctx:o,setupState:r,data:s,props:c,accessCache:a,type:l,appContext:u}=e;if('production'!==process.env.NODE_ENV&&'__isVue'===n)return!0;let p;if('$'!==n[0]){const l=a[n];if(void 0!==l)switch(l){case 1:return r[n];case 2:return s[n];case 4:return o[n];case 3:return c[n]}else{if(At(r,n))return a[n]=1,r[n];if(s!==t&&i(s,n))return a[n]=2,s[n];if((p=e.propsOptions[0])&&i(p,n))return a[n]=3,c[n];if(o!==t&&i(o,n))return a[n]=4,o[n];__VUE_OPTIONS_API__&&!Ut||(a[n]=0)}}const f=Tt[n];let h,_;return f?('$attrs'===n?(Z(e.attrs,'get',''),process.env.NODE_ENV):'production'!==process.env.NODE_ENV&&'$slots'===n&&Z(e,'get',n),f(e)):(h=l.__cssModules)&&(h=h[n])?h:o!==t&&i(o,n)?(a[n]=4,o[n]):(_=u.config.globalProperties,i(_,n)?_[n]:void('production'===process.env.NODE_ENV||!Dt||d(n)&&0===n.indexOf('__v')||(s!==t&&(e=>'_'===e||'$'===e)(n[0])&&i(s,n)?Ze(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Dt&&Ze(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))))},set({_:e},n,o){const{data:r,setupState:s,ctx:c}=e;return At(s,n)?(s[n]=o,!0):'production'!==process.env.NODE_ENV&&s.__isScriptSetup&&i(s,n)?(Ze(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):r!==t&&i(r,n)?(r[n]=o,!0):i(e.props,n)?('production'!==process.env.NODE_ENV&&Ze(`Attempting to mutate prop "${n}". Props are readonly.`),!1):'$'===n[0]&&n.slice(1)in e?('production'!==process.env.NODE_ENV&&Ze(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):('production'!==process.env.NODE_ENV&&n in e.appContext.config.globalProperties?Object.defineProperty(c,n,{enumerable:!0,configurable:!0,value:o}):c[n]=o,!0)},has({_:{data:e,setupState:n,accessCache:o,ctx:r,appContext:s,propsOptions:c}},a){let l;return!!o[a]||e!==t&&i(e,a)||At(n,a)||(l=c[0])&&i(l,a)||i(r,a)||i(Tt,a)||i(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:i(n,'value')&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Mt(e){return a(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}'production'!==process.env.NODE_ENV&&(Lt.ownKeys=e=>(Ze('Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.'),Reflect.ownKeys(e)));let Ut=!0;function zt(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&zt(e,s,n,!0),r&&r.forEach((t=>zt(e,t,n,!0)));for(const r in t)if(o&&'expose'===r)'production'!==process.env.NODE_ENV&&Ze('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const o=Ht[r]||n&&n[r];e[r]=o?o(e[r],t[r]):t[r]}return e}const Ht={data:Wt,props:qt,emits:qt,methods:Bt,computed:Bt,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:Bt,directives:Bt,watch:function(e,t){if(!e)return t;if(!t)return e;const n=s(Object.create(null),e);for(const o in t)n[o]=Jt(e[o],t[o]);return n},provide:Wt,inject:function(e,t){return Bt(Kt(e),Kt(t))}};function Wt(e,t){return t?e?function(){return s(p(e)?e.call(this,this):e,p(t)?t.call(this,this):t)}:t:e}function Kt(e){if(a(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Jt(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?s(Object.create(null),e,t):t}function qt(e,t){return e?a(e)&&a(t)?[...new Set([...e,...t])]:s(Object.create(null),Mt(e),Mt(null!=t?t:{})):t}const Gt={},Qt=e=>Object.getPrototypeOf(e)===Gt,Xt=function(e,t){t&&t.pendingBranch?a(e)?t.effects.push(...e):t.effects.push(e):mt(e)},Yt=Symbol.for('v-scx'),Zt=()=>{{const e=function(e,t,n=!1){const o=bn||Dt;if(o){const r=o?null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:null._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&p(t)?t.call(o&&o.proxy):t;'production'!==process.env.NODE_ENV&&Ze(`injection "${String(e)}" not found.`)}else'production'!==process.env.NODE_ENV&&Ze('inject() can only be used inside setup() or functional components.')}(Yt);return e||'production'!==process.env.NODE_ENV&&Ze('Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.'),e}},en={};function tn(e,n,r){const s=this.proxy,c=d(e)?e.includes('.')?function(e,t){const n=t.split('.');return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}(s,e):()=>s[e]:e.bind(s,s);let i;p(n)?i=n:(i=n.handler,r=n);const l=wn(this),u=function(e,n,{immediate:r,deep:s,flush:c,once:i,onTrack:l,onTrigger:u}=t){if(n&&i){const e=n;n=(...t)=>{e(...t),k()}}'production'!==process.env.NODE_ENV&&void 0!==s&&'number'==typeof s&&Ze('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'),'production'===process.env.NODE_ENV||n||(void 0!==r&&Ze('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),void 0!==s&&Ze('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),void 0!==i&&Ze('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const d=e=>{Ze('Invalid watch source: ',e,'A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.')},f=bn,h=e=>!0===s?e:nn(e,!1===s?1:void 0);let _,v,g=!1,y=!1;if(Ge(e)?(_=()=>e.value,g=We(e)):ze(e)?(_=()=>h(e),g=!0):a(e)?(y=!0,g=e.some((e=>ze(e)||We(e))),_=()=>e.map((e=>Ge(e)?e.value:ze(e)?h(e):p(e)?ot(e,f,2):void('production'!==process.env.NODE_ENV&&d(e))))):p(e)?_=n?()=>ot(e,f,2):()=>(v&&v(),rt(e,f,3,[E])):(_=o,'production'!==process.env.NODE_ENV&&d(e)),n&&s){const e=_;_=()=>nn(e())}let m,E=e=>{v=O.onStop=()=>{ot(e,f,4),v=O.onStop=void 0}};if(On){if(E=o,n?r&&rt(n,f,3,[_(),y?[]:void 0,E]):_(),'sync'!==c)return o;{const e=Zt();m=e.__watcherHandles||(e.__watcherHandles=[])}}let N=y?new Array(e.length).fill(en):en;const b=()=>{if(O.active&&O.dirty)if(n){const e=O.run();(s||g||(y?e.some(((e,t)=>S(e,N[t]))):S(e,N)))&&(v&&v(),rt(n,f,3,[e,N===en?void 0:y&&N[0]===en?[]:N,E]),N=e)}else O.run()};let w;b.allowRecurse=!!n,'sync'===c?w=b:'post'===c?w=()=>Xt(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),w=()=>gt(b));const O=new F(_,o,w),k=()=>{O.stop()};return'production'!==process.env.NODE_ENV&&(O.onTrack=l,O.onTrigger=u),n?r?b():N=O.run():'post'===c?Xt(O.run.bind(O),f&&f.suspense):O.run(),m&&m.push(k),k}(c,i.bind(s),r);return l(),u}function nn(e,t=1/0,n){if(t<=0||!h(e)||e.__v_skip)return e;if((n=n||new Set).has(e))return e;if(n.add(e),t--,Ge(e))nn(e.value,t,n);else if(a(e))for(let o=0;o<e.length;o++)nn(e[o],t,n);else if(u(e)||l(e))e.forEach((e=>{nn(e,t,n)}));else if(m(e)){for(const o in e)nn(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&nn(e[o],t,n)}return e}const on=Symbol.for('v-fgt'),rn=Symbol.for('v-txt'),sn=Symbol.for('v-cmt'),cn=[];let an=null;function ln(e=!1){cn.push(an=e?null:[])}function un(e){return e.dynamicChildren=an||n,cn.pop(),an=cn[cn.length-1]||null,an&&an.push(e),e}function pn(e,t,n,o,r,s){return un(hn(e,t,n,o,r,s,!0))}const dn=({key:e})=>null!=e?e:null,fn=({ref:e,ref_key:t,ref_for:n})=>('number'==typeof e&&(e=''+e),null!=e?d(e)||Ge(e)||p(e)?{i:Dt,r:e,k:t,f:!!n}:e:null);function hn(e,t=null,n=null,o=0,r=null,s=(e===on?0:1),c=!1,i=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&dn(t),ref:t&&fn(t),scopeId:Ct,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Dt};return i?(En(a,n),128&s&&e.normalize(a)):n&&(a.shapeFlag|=d(n)?8:16),'production'!==process.env.NODE_ENV&&a.key!=a.key&&Ze('VNode created with invalid key (NaN). VNode type:',a.type),!c&&an&&(a.patchFlag>0||6&s)&&32!==a.patchFlag&&an.push(a),a}const _n='production'!==process.env.NODE_ENV?(...e)=>vn(...e):vn;function vn(e,t=null,n=null,o=0,r=null,c=!1){if(e&&e!==Rt||('production'===process.env.NODE_ENV||e||Ze(`Invalid vnode type when creating vnode: ${e}.`),e=sn),(i=e)&&!0===i.__v_isVNode){const o=gn(e,t,!0);return n&&En(o,n),!c&&an&&(6&o.shapeFlag?an[an.indexOf(e)]=o:an.push(o)),o.patchFlag=-2,o}var i;if(Dn(e)&&(e=e.__vccOpts),t){t=function(e){return e?Ke(e)||Qt(e)?s({},e):e:null}(t);let{class:e,style:n}=t;e&&!d(e)&&(t.class=R(e)),h(n)&&(Ke(n)&&!a(n)&&(n=s({},n)),t.style=D(n))}const l=d(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:h(e)?4:p(e)?2:0;return'production'!==process.env.NODE_ENV&&4&l&&Ke(e)&&Ze('Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.','\nComponent that was made reactive: ',e=Je(e)),hn(e,t,n,o,r,l,c,!0)}function gn(e,t,n=!1,o=!1){const{props:s,ref:c,patchFlag:i,children:l,transition:u}=e,p=t?function(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if('class'===e)t.class!==o.class&&(t.class=R([t.class,o.class]));else if('style'===e)t.style=D([t.style,o.style]);else if(r(e)){const n=t[e],r=o[e];!r||n===r||a(n)&&n.includes(r)||(t[e]=n?[].concat(n,r):r)}else''!==e&&(t[e]=o[e])}return t}(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&dn(p),ref:t&&t.ref?n&&c?a(c)?c.concat(fn(t)):[c,fn(t)]:fn(t):c,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:'production'!==process.env.NODE_ENV&&-1===i&&a(l)?l.map(yn):l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==on?-1===i?16:16|i:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gn(e.ssContent),ssFallback:e.ssFallback&&gn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&o&&$t(d,u.clone(d)),d}function yn(e){const t=gn(e);return a(e.children)&&(t.children=e.children.map(yn)),t}function mn(e=' ',t=0){return _n(rn,null,e,t)}function En(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(a(t))n=16;else if('object'==typeof t){if(65&o){const n=t.default;return void(n&&(n._c&&(n._d=!1),En(e,n()),n._c&&(n._d=!0)))}{n=32;const o=t._;o||Qt(t)?3===o&&Dt&&(1===Dt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Dt}}else p(t)?(t={default:t,_ctx:Dt},n=32):(t=String(t),64&o?(n=16,t=[mn(t)]):n=8);e.children=t,e.shapeFlag|=n}let Nn,bn=null;{const e=V(),t=(t,n)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(n),e=>{o.length>1?o.forEach((t=>t(e))):o[0](e)}};Nn=t('__VUE_INSTANCE_SETTERS__',(e=>bn=e)),t('__VUE_SSR_SETTERS__',(e=>On=e))}const wn=e=>{const t=bn;return Nn(e),e.scope.on(),()=>{e.scope.off(),Nn(t)}};let On=!1;process.env.NODE_ENV;const Sn=/(?:^|[-_])(\w)/g,kn=e=>e.replace(Sn,(e=>e.toUpperCase())).replace(/[-_]/g,'');function xn(e,t=!0){return p(e)?e.displayName||e.name:e.name||t&&e.__name}function Vn(e,t,n=!1){let o=xn(t);if(!o&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(o=e[1])}if(!o&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};o=n(e.components||e.parent.type.components)||n(e.appContext.components)}return o?kn(o):n?'App':'Anonymous'}function Dn(e){return p(e)&&'__vccOpts'in e}process.env.NODE_ENV,process.env.NODE_ENV,process.env.NODE_ENV,'production'!==process.env.NODE_ENV&&(()=>{if('production'===process.env.NODE_ENV||'undefined'==typeof window)return;const e={style:'color:#3ba776'},n={style:'color:#1677ff'},o={style:'color:#f5222d'},r={style:'color:#eb2f96'},c={__vue_custom_formatter:!0,header:t=>h(t)?t.__isVue?['div',e,'VueInstance']:Ge(t)?['div',{},['span',e,_(t)],'<',u(t.value),'>']:ze(t)?['div',{},['span',e,We(t)?'ShallowReactive':'Reactive'],'<',u(t),'>'+(He(t)?' (readonly)':'')]:He(t)?['div',{},['span',e,We(t)?'ShallowReadonly':'Readonly'],'<',u(t),'>']:null:null,hasBody:e=>e&&e.__isVue,body(e){if(e&&e.__isVue)return['div',{},...i(e.$)]}};function i(e){const n=[];e.type.props&&e.props&&n.push(l('props',Je(e.props))),e.setupState!==t&&n.push(l('setup',e.setupState)),e.data!==t&&n.push(l('data',Je(e.data)));const o=d(e,'computed');o&&n.push(l('computed',o));const s=d(e,'inject');return s&&n.push(l('injected',s)),n.push(['div',{},['span',{style:r.style+';opacity:0.66'},'$ (internal): '],['object',{object:e}]]),n}function l(e,t){return t=s({},t),Object.keys(t).length?['div',{style:'line-height:1.25em;margin-bottom:0.6em'},['div',{style:'color:#476582'},e],['div',{style:'padding-left:1.25em'},...Object.keys(t).map((e=>['div',{},['span',r,e+': '],u(t[e],!1)]))]]:['span',{}]}function u(e,t=!0){return'number'==typeof e?['span',n,e]:'string'==typeof e?['span',o,JSON.stringify(e)]:'boolean'==typeof e?['span',r,e]:h(e)?['object',{object:t?Je(e):e}]:['span',o,String(e)]}function d(e,t){const n=e.type;if(p(n))return;const o={};for(const r in e.ctx)f(n,r,t)&&(o[r]=e.ctx[r]);return o}function f(e,t,n){const o=e[n];return!!(a(o)&&o.includes(t)||h(o)&&t in o)||!(!e.extends||!f(e.extends,t,n))||!(!e.mixins||!e.mixins.some((e=>f(e,t,n))))||void 0}function _(e){return We(e)?'ShallowRef':e.effect?'ComputedRef':'Ref'}window.devtoolsFormatters?window.devtoolsFormatters.push(c):window.devtoolsFormatters=[c]})();const Cn=hn('h1',null,'Panel administracyjny',-1);const $n={render:function(e,t){const n=jt('router-view');return ln(),pn('div',null,[Cn,_n(n)])},__file:'src/layouts/AdminLayout.vue'};var Pn=Object.freeze({__proto__:null,default:$n});const jn={render:function(e,t){return ln(),pn('div',null,'KOKPIT')},__file:'src/pages/dashboard/IndexPage.vue'};var Rn=Object.freeze({__proto__:null,default:jn}),In={path:'/admin',component:function(){return Promise.resolve().then((()=>Pn))},meta:{title:'Panel administracyjny'},children:[{path:'/',component:function(){return Promise.resolve().then((()=>Rn))},name:'admin',meta:{title:'Kokpit'}}]};export{$n as AdminLayout,In as AdminRoutes,jn as DashboardPage};
//# sourceMappingURL=index.js.map
