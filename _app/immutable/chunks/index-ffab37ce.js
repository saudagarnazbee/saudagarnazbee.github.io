function w(){}function V(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t&&typeof t=="object"&&typeof t.then=="function"}function B(t){return t()}function H(){return Object.create(null)}function y(t){t.forEach(B)}function D(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function bt(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function Y(t){return Object.keys(t).length===0}function Z(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t,e,n){t.$$.on_destroy.push(Z(e,n))}function vt(t,e,n,i){if(t){const r=G(t,e,n,i);return t[0](r)}}function G(t,e,n,i){return t[1]&&i?V(n.ctx.slice(),t[1](i(e))):n.ctx}function kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)l[u]=e.dirty[u]|r[u];return l}return e.dirty|r}return e.dirty}function wt(t,e,n,i,r,l){if(r){const s=G(e,n,i,l);t.p(s,r)}}function $t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Et(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function At(t){return t&&D(t.destroy)?t.destroy:w}let $=!1;function tt(){$=!0}function et(){$=!1}function nt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function it(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:nt(1,r,d=>e[n[d]].claim_order,o))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);l.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<l.length&&s[c].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;t.insertBefore(s[c],f)}}function rt(t,e){if($){for(it(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ct(t,e,n){t.insertBefore(e,n||null)}function st(t,e,n){$&&!n?rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function Nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function Tt(){return S(" ")}function St(){return S("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function I(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:I(t,i,e[i])}function Mt(t,e){for(const n in e)I(t,n,e[n])}function lt(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,r=!1){R(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function J(t,e,n,i){return W(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||l.push(u.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ht(t,e,n){return J(t,e,n,z)}function Lt(t,e,n){return J(t,e,n,F)}function ut(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function qt(t){return ut(t," ")}function L(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function Ot(t,e){const n=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",n);if(n===i)return new q(void 0,e);R(t);const r=t.splice(n,i-n+1);k(r[0]),k(r[r.length-1]);const l=r.slice(1,r.length-1);for(const s of l)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new q(l,e)}function Pt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Bt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Dt(t,e,n){t.classList[n?"add":"remove"](e)}function ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Gt(t,e=document.body){return Array.from(e.querySelectorAll(t))}class at{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=F(n.nodeName):this.e=z(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)ct(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(k)}}class q extends at{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)st(this.t,this.n[n],e)}}let p;function _(t){p=t}function E(){if(!p)throw new Error("Function called outside component initialization");return p}function zt(t){E().$$.on_mount.push(t)}function Ft(t){E().$$.after_update.push(t)}function It(){const t=E();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=ot(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}const m=[],O=[],x=[],P=[],K=Promise.resolve();let N=!1;function Q(){N||(N=!0,K.then(j))}function Rt(){return Q(),K}function T(t){x.push(t)}const A=new Set;let b=0;function j(){const t=p;do{for(;b<m.length;){const e=m[b];b++,_(e),ft(e.$$)}for(_(null),m.length=0,b=0;O.length;)O.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];A.has(n)||(A.add(n),n())}x.length=0}while(m.length);for(;P.length;)P.pop()();N=!1,A.clear(),_(t)}function ft(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const v=new Set;let h;function _t(){h={r:0,c:[],p:h}}function dt(){h.r||y(h.c),h=h.p}function U(t,e){t&&t.i&&(v.delete(t),t.i(e))}function ht(t,e,n,i){if(t&&t.o){if(v.has(t))return;v.add(t),h.c.push(()=>{v.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Wt(t,e){const n=e.token={};function i(r,l,s,u){if(e.token!==n)return;e.resolved=u;let c=e.ctx;s!==void 0&&(c=c.slice(),c[s]=u);const o=r&&(e.current=r)(c);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==l&&a&&(_t(),ht(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),dt())}):e.block.d(1),o.c(),U(o,1),o.m(e.mount(),e.anchor),f=!0),e.block=o,e.blocks&&(e.blocks[l]=o),f&&j()}if(X(t)){const r=E();if(t.then(l=>{_(r),i(e.then,1,e.value,l),_(null)},l=>{if(_(r),i(e.catch,2,e.error,l),_(null),!e.hasCatch)throw l}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Jt(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function Kt(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],u=e[l];if(u){for(const c in s)c in u||(i[c]=1);for(const c in u)r[c]||(n[c]=u[c],r[c]=1);t[l]=u}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Qt(t){t&&t.c()}function Ut(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:u}=t.$$;r&&r.m(e,n),i||T(()=>{const c=l.map(B).filter(D);s?s.push(...c):y(c),t.$$.on_mount=[]}),u.forEach(T)}function pt(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(m.push(t),Q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Vt(t,e,n,i,r,l,s,u=[-1]){const c=p;_(t);const o=t.$$={fragment:null,ctx:null,props:l,update:w,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,d,...C)=>{const M=C.length?C[0]:d;return o.ctx&&r(o.ctx[a],o.ctx[a]=M)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](M),f&&yt(t,a)),d}):[],o.update(),f=!0,y(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){tt();const a=lt(e.target);o.fragment&&o.fragment.l(a),a.forEach(k)}else o.fragment&&o.fragment.c();e.intro&&U(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),et(),j()}_(c)}class Xt{$destroy(){pt(this,1),this.$destroy=w}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Y(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Mt as $,w as A,rt as B,jt as C,y as D,Nt as E,vt as F,wt as G,$t as H,kt as I,xt as J,q as K,Ot as L,bt as M,V as N,Et as O,Wt as P,Jt as Q,Ct as R,Xt as S,Dt as T,At as U,Kt as V,D as W,Gt as X,O as Y,F as Z,Lt as _,Tt as a,It as a0,st as b,qt as c,dt as d,St as e,U as f,_t as g,k as h,Vt as i,Ft as j,z as k,Ht as l,lt as m,I as n,zt as o,Bt as p,S as q,ut as r,gt as s,ht as t,Pt as u,Qt as v,Ut as w,mt as x,pt as y,Rt as z};
