import{w as i}from"./writeAndUnwriteText-7ec7f0a4.js";import{r,a as l,m}from"./animationSetup-00f7cd49.js";let t=[];const c=e=>{for(;;){const n=r(0,e.length),o=typeof t=="number"&&n!==t,s=Array.isArray(t)&&!t.includes(n);if(e.length===1||s||o)return o&&(t=[]),t.push(n),e[n];t.length===e.length&&(t=t.pop())}},x=async(e,n)=>{const{options:o,elements:s}=l(e,n);for(;;){m(e);const a=c(s);await i(a,o)}};export{x as default};