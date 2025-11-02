import{r as n,j as a,L as c}from"./index-DCHaXG1F.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,r)=>r?r.toUpperCase():s.toLowerCase()),d=t=>{const e=y(t);return e.charAt(0).toUpperCase()+e.slice(1)},h=(...t)=>t.filter((e,s,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===s).join(" ").trim(),w=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:x,...i},p)=>n.createElement("svg",{ref:p,...j,width:e,height:e,stroke:t,strokeWidth:r?Number(s)*24/Number(e):s,className:h("lucide",l),...!o&&!w(i)&&{"aria-hidden":"true"},...i},[...x.map(([u,g])=>n.createElement(u,g)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(t,e)=>{const s=n.forwardRef(({className:r,...l},o)=>n.createElement(k,{ref:o,iconNode:e,className:h(`lucide-${f(d(t))}`,`lucide-${t}`,r),...l}));return s.displayName=d(t),s};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],N=m("list",b);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],v=m("shopping-bag",C);function A(){return a.jsx("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4",children:a.jsxs("div",{className:"max-w-3xl w-full text-center",children:[a.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold text-gray-800 mb-4",children:["Selamat Datang di ",a.jsx("span",{className:"text-blue-600",children:"Vitmart"})]}),a.jsx("p",{className:"text-gray-600 text-lg md:text-xl mb-8",children:"Menyediakan semua yang dibutuhkan."}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[a.jsxs(c,{to:"/kategori",className:"flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all",children:[a.jsx(N,{className:"w-5 h-5"}),"Kelola Kategori"]}),a.jsxs(c,{to:"/produk",className:"flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition-all",children:[a.jsx(v,{className:"w-5 h-5"}),"Kelola Produk"]})]}),a.jsxs("footer",{className:"mt-12 text-gray-500 text-sm",children:["© 2025 Vitmart. Dibuat oleh ",a.jsx("span",{className:"font-semibold",children:"Benn"})]})]})})}export{A as default};
