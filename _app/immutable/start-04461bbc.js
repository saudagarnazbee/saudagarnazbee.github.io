import{_ as se}from"./chunks/preload-helper-aa6bc0ce.js";import{S as Je,i as ze,s as Ke,a as xe,e as B,c as Fe,b as F,g as ie,t as J,d as le,f as z,h as K,j as Ge,o as we,k as Me,l as He,m as We,n as _e,p as D,q as Xe,r as Ye,u as Qe,v as M,w as ke,x as H,y as W,z as Ue}from"./chunks/index-ffab37ce.js";import{g as Ae,f as Ne,s as x,a as ye,b as Ze,i as et}from"./chunks/singletons-0bc74acb.js";class me{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Te{constructor(e,t){this.status=e,this.location=t}}function tt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function nt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const rt=["href","pathname","search","searchParams","toString","toJSON"];function at(r,e){const t=new URL(r);for(const l of rt){let o=t[l];Object.defineProperty(t,l,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(l,o,d)=>d(r,o),st(t),t}function st(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ot(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Ee=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:e?.method||"GET")!=="GET"){const l=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;oe.delete(l)}return Ee(r,e)};const oe=new Map;function it(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${ot(t.body)}"]`);const d=document.querySelector(o);if(d?.textContent){const{body:n,...f}=JSON.parse(d.textContent),y=d.getAttribute("data-ttl");return y&&oe.set(e,{body:n,init:f,ttl:1e3*Number(y)}),Promise.resolve(new Response(n,f))}return Ee(r,t)}function lt(r,e){const t=oe.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(r)}return Ee(r,e)}const ct=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ft(r){const e=[],t=[];let l=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(ut).map((d,n,f)=>{const y=decodeURIComponent(d),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(y);if(p)return e.push(p[1]),t.push(p[2]),"(?:/(.*))?";const b=n===f.length-1;return y&&"/"+y.split(/\[(.+?)\]/).map((R,S)=>{if(S%2){const A=ct.exec(R);if(!A)throw new Error(`Invalid param: ${R}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,L,N,q]=A;return e.push(N),t.push(q),L?"(.*?)":"([^/]+?)"}return b&&R.includes(".")&&(l=!1),R.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:t}}function ut(r){return!/^\([^)]+\)$/.test(r)}function dt(r,e,t,l){const o={};for(let d=0;d<e.length;d+=1){const n=e[d],f=t[d],y=r[d+1]||"";if(f){const p=l[f];if(!p)throw new Error(`Missing "${f}" param matcher`);if(!p(y))return}o[n]=y}return o}function pt(r,e,t,l){const o=new Set(e);return Object.entries(t).map(([f,[y,p,b]])=>{const{pattern:R,names:S,types:A}=ft(f),L={id:f,exec:N=>{const q=R.exec(N);if(q)return dt(q,S,A,l)},errors:[1,...b||[]].map(N=>r[N]),layouts:[0,...p||[]].map(n),leaf:d(y)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function d(f){const y=f<0;return y&&(f=~f),[y,r[f]]}function n(f){return f===void 0?f:[o.has(f),r[f]]}}function ht(r){let e,t,l;var o=r[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&M(e.$$.fragment),t=B()},l(n){e&&ke(e.$$.fragment,n),t=B()},m(n,f){e&&H(e,n,f),F(n,t,f),l=!0},p(n,f){const y={};if(f&4&&(y.data=n[2]),f&2&&(y.form=n[1]),o!==(o=n[0][0])){if(e){ie();const p=e;J(p.$$.fragment,1,0,()=>{W(p,1)}),le()}o?(e=new o(d(n)),M(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else o&&e.$set(y)},i(n){l||(e&&z(e.$$.fragment,n),l=!0)},o(n){e&&J(e.$$.fragment,n),l=!1},d(n){n&&K(t),e&&W(e,n)}}}function _t(r){let e,t,l;var o=r[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[mt]},$$scope:{ctx:n}}}}return o&&(e=new o(d(r))),{c(){e&&M(e.$$.fragment),t=B()},l(n){e&&ke(e.$$.fragment,n),t=B()},m(n,f){e&&H(e,n,f),F(n,t,f),l=!0},p(n,f){const y={};if(f&4&&(y.data=n[2]),f&523&&(y.$$scope={dirty:f,ctx:n}),o!==(o=n[0][0])){if(e){ie();const p=e;J(p.$$.fragment,1,0,()=>{W(p,1)}),le()}o?(e=new o(d(n)),M(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else o&&e.$set(y)},i(n){l||(e&&z(e.$$.fragment,n),l=!0)},o(n){e&&J(e.$$.fragment,n),l=!1},d(n){n&&K(t),e&&W(e,n)}}}function mt(r){let e,t,l;var o=r[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&M(e.$$.fragment),t=B()},l(n){e&&ke(e.$$.fragment,n),t=B()},m(n,f){e&&H(e,n,f),F(n,t,f),l=!0},p(n,f){const y={};if(f&8&&(y.data=n[3]),f&2&&(y.form=n[1]),o!==(o=n[0][1])){if(e){ie();const p=e;J(p.$$.fragment,1,0,()=>{W(p,1)}),le()}o?(e=new o(d(n)),M(e.$$.fragment),z(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else o&&e.$set(y)},i(n){l||(e&&z(e.$$.fragment,n),l=!0)},o(n){e&&J(e.$$.fragment,n),l=!1},d(n){n&&K(t),e&&W(e,n)}}}function De(r){let e,t=r[5]&&qe(r);return{c(){e=Me("div"),t&&t.c(),this.h()},l(l){e=He(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=We(e);t&&t.l(o),o.forEach(K),this.h()},h(){_e(e,"id","svelte-announcer"),_e(e,"aria-live","assertive"),_e(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(l,o){F(l,e,o),t&&t.m(e,null)},p(l,o){l[5]?t?t.p(l,o):(t=qe(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&K(e),t&&t.d()}}}function qe(r){let e;return{c(){e=Xe(r[6])},l(t){e=Ye(t,r[6])},m(t,l){F(t,e,l)},p(t,l){l&64&&Qe(e,t[6])},d(t){t&&K(e)}}}function gt(r){let e,t,l,o,d;const n=[_t,ht],f=[];function y(b,R){return b[0][1]?0:1}e=y(r),t=f[e]=n[e](r);let p=r[4]&&De(r);return{c(){t.c(),l=xe(),p&&p.c(),o=B()},l(b){t.l(b),l=Fe(b),p&&p.l(b),o=B()},m(b,R){f[e].m(b,R),F(b,l,R),p&&p.m(b,R),F(b,o,R),d=!0},p(b,[R]){let S=e;e=y(b),e===S?f[e].p(b,R):(ie(),J(f[S],1,1,()=>{f[S]=null}),le(),t=f[e],t?t.p(b,R):(t=f[e]=n[e](b),t.c()),z(t,1),t.m(l.parentNode,l)),b[4]?p?p.p(b,R):(p=De(b),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(b){d||(z(t),d=!0)},o(b){J(t),d=!1},d(b){f[e].d(b),b&&K(l),p&&p.d(b),b&&K(o)}}}function wt(r,e,t){let{stores:l}=e,{page:o}=e,{components:d}=e,{form:n}=e,{data_0:f=null}=e,{data_1:y=null}=e;Ge(l.page.notify);let p=!1,b=!1,R=null;return we(()=>{const S=l.page.subscribe(()=>{p&&(t(5,b=!0),t(6,R=document.title||"untitled page"))});return t(4,p=!0),S}),r.$$set=S=>{"stores"in S&&t(7,l=S.stores),"page"in S&&t(8,o=S.page),"components"in S&&t(0,d=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,f=S.data_0),"data_1"in S&&t(3,y=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&l.page.set(o)},[d,n,f,y,p,b,R,l,o]}class yt extends Je{constructor(e){super(),ze(this,e,wt,gt,Ke,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const bt={},ce=[()=>se(()=>import("./chunks/0-1903e6a9.js"),["chunks/0-1903e6a9.js","components/pages/_layout.svelte-24105d63.js","assets/_layout-4dfeb148.css","chunks/index-ffab37ce.js","chunks/preload-helper-aa6bc0ce.js"],import.meta.url),()=>se(()=>import("./chunks/1-01f864ef.js"),["chunks/1-01f864ef.js","components/error.svelte-e106571b.js","chunks/index-ffab37ce.js","chunks/singletons-0bc74acb.js"],import.meta.url),()=>se(()=>import("./chunks/2-1085ea4f.js"),["chunks/2-1085ea4f.js","components/pages/_page.svelte-37ad04a7.js","assets/_page-65e4adf7.css","chunks/index-ffab37ce.js","chunks/linkedin-b4070736.js","chunks/github-6e3d3873.js","chunks/preload-helper-aa6bc0ce.js"],import.meta.url)],vt=[],kt={"":[2]},Et={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},St="/__data.js",Be="sveltekit:scroll",V="sveltekit:index",ne=pt(ce,vt,kt,bt),be=ce[0],ve=ce[1];be();ve();let Z={};try{Z=JSON.parse(sessionStorage[Be])}catch{}function ge(r){Z[r]=ye()}function Rt({target:r,base:e,trailing_slash:t}){const l=[],o={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},f=!1,y=!0,p=!1,b=1,R=null,S=!1,A,L=history.state?.[V];L||(L=Date.now(),history.replaceState({...history.state,[V]:L},"",location.href));const N=Z[L];N&&(history.scrollRestoration="manual",scrollTo(N.x,N.y));let q=!1,C,Se;function Re(){if(!R){const a=new URL(location.href);R=Promise.resolve().then(async()=>{const i=pe(a,!0);await Le(i,a,[]),R=null,S=!1})}return R}async function fe(a,{noscroll:i=!1,replaceState:u=!1,keepfocus:s=!1,state:c={}},h){return typeof a=="string"&&(a=new URL(a,Ae(document))),he({url:a,scroll:i?ye():null,keepfocus:s,redirect_chain:h,details:{state:c,replaceState:u},accepted:()=>{},blocked:()=>{},type:"goto"})}async function $e(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o.promise=je(i),o.id=i.id,o.promise}async function Le(a,i,u,s,c){const h=Se={};let _=a&&await je(a);if(!_&&i.origin===location.origin&&i.pathname===location.pathname&&(_=await ee({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!_)return await Y(i),!1;if(i=a?.url||i,Se!==h)return!1;if(l.length=0,_.type==="redirect")if(u.length>10||u.includes(i.pathname))_=await ee({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(_.location,i).href,{},[...u,i.pathname]),!1;else _.props?.page?.status>=400&&await x.updated.check()&&await Y(i);if(p=!0,s&&s.details){const{details:g}=s,k=g.replaceState?0:1;g.state[V]=L+=k,history[g.replaceState?"replaceState":"pushState"](g.state,"",i)}if(f){n=_.state,_.props.page&&(_.props.page.url=i);const g=ae();A.$set(_.props),g()}else Oe(_);if(s){const{scroll:g,keepfocus:k}=s;if(!k){const w=document.body,v=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{getSelection()?.removeAllRanges()}),v!==null?w.setAttribute("tabindex",v):w.removeAttribute("tabindex")}if(await Ue(),y){const w=i.hash&&document.getElementById(i.hash.slice(1));g?scrollTo(g.x,g.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Ue();o.promise=null,o.id=null,y=!0,_.props.page&&(C=_.props.page),c&&c(),p=!1}function Oe(a){n=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),C=a.props.page;const u=ae();A=new yt({target:r,props:{...a.props,stores:x},hydrate:!0}),u();const s={from:null,to:re("to",{params:n.params,routeId:n.route?.id??null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(c=>c(s)),f=!0}async function X({url:a,params:i,branch:u,status:s,error:c,route:h,form:_}){const g=u.filter(Boolean),k={type:"loaded",state:{url:a,params:i,branch:u,error:c,route:h,session_id:b},props:{components:g.map(m=>m.node.component)}};_!==void 0&&(k.props.form=_);let w={},v=!C;for(let m=0;m<g.length;m+=1){const $=g[m];w={...w,...$.data},(v||!n.branch.some(O=>O===$))&&(k.props[`data_${m}`]=w,v=v||Object.keys($.data??{}).length>0)}if(v||(v=Object.keys(C.data).length!==Object.keys(w).length),!n.url||a.href!==n.url.href||n.error!==c||v){k.props.page={error:c,params:i,routeId:h&&h.id,status:s,url:a,data:v?w:C.data};const m=($,O)=>{Object.defineProperty(k.props.page,$,{get:()=>{throw new Error(`$page.${$} has been replaced by $page.url.${O}`)}})};m("origin","origin"),m("path","pathname"),m("query","searchParams")}return k}async function ue({loader:a,parent:i,url:u,params:s,routeId:c,server_data_node:h}){let _=null;const g={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if(k.shared?.load){let w=function(...m){for(const $ of m){const{href:O}=new URL($,u);g.dependencies.add(O)}};const v={};for(const m in s)Object.defineProperty(v,m,{get(){return g.params.add(m),s[m]},enumerable:!0});const j={routeId:c,params:v,data:h?.data??null,url:at(u,()=>{g.url=!0}),async fetch(m,$){let O;typeof m=="string"?O=m:(O=m.url,$={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...$});const T=new URL(O,u).href;return w(T),f?lt(T,$):it(O,T,$)},setHeaders:()=>{},depends:w,parent(){return g.parent=!0,i()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=await k.shared.load.call(null,j)??null}return{node:k,loader:a,server:h,shared:k.shared?.load?{type:"data",data:_,uses:g}:null,data:_??h?.data??null}}function Pe(a,i,u){if(S)return!0;if(!u)return!1;if(u.parent&&i||a.url&&u.url)return!0;for(const s of a.params)if(u.params.has(s))return!0;for(const s of u.dependencies)if(l.some(c=>c(new URL(s))))return!0;return!1}function de(a,i){return a?.type==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,url:!!a.uses.url}}:a?.type==="skip"?i??null:null}async function je({id:a,invalidating:i,url:u,params:s,route:c}){if(o.id===a&&o.promise)return o.promise;const{errors:h,layouts:_,leaf:g}=c,k=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(s).filter(E=>n.params[E]!==s[E])},w=[..._,g];h.forEach(E=>E?.().catch(()=>{})),w.forEach(E=>E?.[1]().catch(()=>{}));let v=null;const j=w.reduce((E,P,U)=>{const I=n.branch[U],Q=!!P?.[0]&&(I?.loader!==P[1]||Pe(k,E.some(Boolean),I.server?.uses));return E.push(Q),E},[]);if(j.some(Boolean)){try{v=await Ce(u,j)}catch(E){return ee({status:500,error:E,url:u,routeId:c.id})}if(v.type==="redirect")return v}const m=v?.nodes;let $=!1;const O=w.map(async(E,P)=>{if(!E)return;const U=n.branch[P],I=m?.[P];if((!I||I.type==="skip")&&E[1]===U?.loader&&!Pe(k,$,U.shared?.uses))return U;if($=!0,I?.type==="error")throw I;return ue({loader:E[1],url:u,params:s,routeId:c.id,parent:async()=>{const G={};for(let te=0;te<P;te+=1)Object.assign(G,(await O[te])?.data);return G},server_data_node:de(I===void 0&&E[0]?{type:"skip"}:I??null,U?.server)})});for(const E of O)E.catch(()=>{});const T=[];for(let E=0;E<w.length;E+=1)if(w[E])try{T.push(await O[E])}catch(P){if(P instanceof Te)return{type:"redirect",location:P.location};let U=500,I;for(m?.includes(P)?(U=P.status??U,I=P.error):P instanceof me?(U=P.status,I=P.body):I=Ve(P,{params:s,url:u,routeId:c.id});E--;)if(h[E]){let Q,G=E;for(;!T[G];)G-=1;try{return Q={node:await h[E](),loader:h[E],data:{},server:null,shared:null},await X({url:u,params:s,branch:T.slice(0,G+1).concat(Q),status:U,error:I,route:c})}catch{continue}}await Y(u);return}else T.push(void 0);return await X({url:u,params:s,branch:T,status:200,error:null,route:c,form:i?void 0:null})}async function ee({status:a,error:i,url:u,routeId:s}){const c={},h=await be();let _=null;if(h.server)try{const w=await Ce(u,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;_=w.nodes[0]??null}catch{await Y(u);return}const g=await ue({loader:be,url:u,params:c,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(_)}),k={node:await ve(),loader:ve,shared:null,server:null,data:null};return await X({url:u,params:c,branch:[g,k],status:a,error:i instanceof me?i.body:Ve(i,{url:u,params:c,routeId:null}),route:null})}function pe(a,i){if(Ie(a))return;const u=decodeURI(a.pathname.slice(e.length)||"/");for(const s of ne){const c=s.exec(u);if(c){const h=new URL(a.origin+tt(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:i,route:s,params:nt(c),url:h}}}}function Ie(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:u,redirect_chain:s,details:c,type:h,delta:_,accepted:g,blocked:k}){let w=!1;const v=pe(a,!1),j={from:re("from",{params:n.params,routeId:n.route?.id??null,url:n.url}),to:re("to",{params:v?.params??null,routeId:v?.route.id??null,url:a}),type:h};_!==void 0&&(j.delta=_);const m={...j,cancel:()=>{w=!0}};if(d.before_navigate.forEach($=>$(m)),w){k();return}ge(L),g(),f&&x.navigating.set(j),await Le(v,a,s,{scroll:i,keepfocus:u,details:c},()=>{d.after_navigate.forEach($=>$(j)),x.navigating.set(null)})}function Y(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{we(()=>(d.after_navigate.push(a),()=>{const i=d.after_navigate.indexOf(a);d.after_navigate.splice(i,1)}))},before_navigate:a=>{we(()=>(d.before_navigate.push(a),()=>{const i=d.before_navigate.indexOf(a);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(p||!f)&&(y=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")l.push(a);else{const{href:i}=new URL(a,location.href);l.push(u=>u.href===i)}return Re()},invalidateAll:()=>(S=!0,Re()),prefetch:async a=>{const i=new URL(a,Ae(document));await $e(i)},prefetch_routes:async a=>{const u=(a?ne.filter(s=>a.some(c=>s.exec(c))):ne).map(s=>Promise.all([...s.layouts,s.leaf].map(c=>c?.[1]())));await Promise.all(u)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:u,route:s}=n;if(!s)return;let c=n.branch.length;for(;c--;)if(s.errors[c]){let h,_=c;for(;!u[_];)_-=1;try{h={node:await s.errors[c](),loader:s.errors[c],data:{},server:null,shared:null};const g=await X({url:i,params:n.params,branch:u.slice(0,_+1).concat(h),status:500,error:a.error,route:s});n=g.state;const k=ae();A.$set(g.props),k();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==C.status&&(i.page={...C,status:a.status});const u=ae();A.$set(i),u()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{let c=!1;const h={from:re("from",{params:n.params,routeId:n.route?.id??null,url:n.url}),to:null,type:"unload",cancel:()=>c=!0};d.before_navigate.forEach(_=>_(h)),c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ge(L);try{sessionStorage[Be]=JSON.stringify(Z)}catch{}}});const a=s=>{const{url:c,options:h}=Ne(s);if(c&&h.prefetch){if(Ie(c))return;$e(c)}};let i;const u=s=>{clearTimeout(i),i=setTimeout(()=>{s.target?.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:c,url:h,options:_}=Ne(s);if(!c||!h)return;const g=c instanceof SVGAElement;if(!g&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||k.includes("external")||_.reload||(g?c.target.baseVal:c.target))return;const[w,v]=h.href.split("#");if(v!==void 0&&w===location.href.split("#")[0]){q=!0,ge(L),n.url=h,x.page.set({...C,url:h}),x.page.notify();return}he({url:h,scroll:_.noscroll?ye():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[V]===L)return;const c=s.state[V]-L;he({url:new URL(location.href),scroll:Z[s.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=s.state[V]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[V]:++L},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&x.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:u,params:s,routeId:c,data:h,form:_})=>{const g=new URL(location.href);let k;try{const w=u.map(async(v,j)=>{const m=h[j];return ue({loader:ce[v],url:g,params:s,routeId:c,parent:async()=>{const $={};for(let O=0;O<j;O+=1)Object.assign($,(await w[O]).data);return $},server_data_node:de(m)})});k=await X({url:g,params:s,branch:await Promise.all(w),status:a,error:i,form:_,route:ne.find(v=>v.id===c)??null})}catch(w){const v=w;if(v instanceof Te){await Y(new URL(w.location,location.href));return}k=await ee({status:v instanceof me?v.status:500,error:v,url:g,routeId:c})}Oe(k)}}}let $t=1;async function Ce(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+St,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String($t++)),await se(()=>import(t.href),[],import.meta.url);const l=window.__sveltekit_data;return delete window.__sveltekit_data,l}function Ve(r,e){return Et.handleError({error:r,event:e})??{message:"Internal Error"}}const Lt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(r,e){for(const t of Lt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}function ae(){return()=>{}}async function It({env:r,hydrate:e,paths:t,target:l,trailing_slash:o}){Ze(t);const d=Rt({target:l,base:t.base,trailing_slash:o});et({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{It as start};
