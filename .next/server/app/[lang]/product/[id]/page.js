(()=>{var e={};e.id=285,e.ids=[285],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},2422:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>o}),t(261),t(2025),t(5866);var r=t(3191),i=t(8716),a=t(7922),n=t.n(a),l=t(5231),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);t.d(s,d);let o=["",{children:["[lang]",{children:["product",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,261)),"/home/asset/projects/almale/almale-next/src/app/[lang]/product/[id]/page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,2025)),"/home/asset/projects/almale/almale-next/src/app/[lang]/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/asset/projects/almale/almale-next/src/app/[lang]/product/[id]/page.js"],m="/[lang]/product/[id]/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/[lang]/product/[id]/page",pathname:"/[lang]/product/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},8118:(e,s,t)=>{Promise.resolve().then(t.bind(t,8035))},5047:(e,s,t)=>{"use strict";var r=t(7389);t.o(r,"usePathname")&&t.d(s,{usePathname:function(){return r.usePathname}}),t.o(r,"useRouter")&&t.d(s,{useRouter:function(){return r.useRouter}})},8035:(e,s,t)=>{"use strict";t.d(s,{default:()=>u});var r=t(326),i=t(6226),a=t(434);t(7577);var n=t(4653);let l=({children:e,text:s})=>(0,r.jsxs)("div",{className:"relative group",children:[e,r.jsx("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-green text-white text-sm py-1 px-2 rounded-lg",children:s})]});var d=t(5047),o=t(7367),c=t(6857),m=t(8227);let u=({lang:e,t:s})=>{let t=(0,o.CG)(e=>e.product.entity),u=(0,o.CG)(e=>e.product.isLoading),p=(0,d.usePathname)();if(u)return r.jsx("p",{children:s.utensil.one});if(!t||0===t.length)return r.jsx("p",{children:s.utensil.two});let g=t.find(e=>e._id.toString()===p.split("/").pop()),h=t.filter(e=>e.name!==t[0].name&&e),x=m.q.find(e=>e.id===g._id);return(0,r.jsxs)("div",{className:"flex flex-col px-5",children:[(0,r.jsxs)("div",{className:"flex flex-col md:flex-row bg-white rounded-lg p-4 max-w-4xl mx-auto my-20",children:[(0,r.jsxs)("div",{className:"md:w-1/2 flex flex-col items-center",children:[r.jsx("h2",{className:"text-xl font-semibold mb-2 sm:hidden",style:{fontFamily:"Montserrat-Bold"},children:g?.name}),r.jsx("p",{className:"mb-6 sm:hidden",children:g?.description}),(0,r.jsxs)("div",{className:"w*full",children:[r.jsx("div",{className:"mb-4 hover:shadow-lg",children:r.jsx(i.default,{className:"w-full object-cover rounded-lg",src:g?.imageUrl,width:320,height:300,alt:g?.name,priority:!0})}),r.jsx("div",{className:"grid grid-cols-4 gap-2 sm:gap-3",children:void 0!==x&&x.arr.map(e=>r.jsx("div",{className:"aspect-w-1 aspect-h-1",children:r.jsx(i.default,{className:"object-cover rounded-lg cursor-pointer border border-gray-200 hover:border-gray",src:e.src,width:200,height:200,alt:"alma le",priority:!0})},e._id))})]})]}),r.jsx("div",{className:"md:w-1/2 md:pl-8 flex flex-col justify-between",children:(0,r.jsxs)("div",{className:"py-5",children:[r.jsx("h2",{className:"text-xl font-semibold mb-2 hidden sm:block",style:{fontFamily:"Montserrat-Bold"},children:g?.name}),r.jsx("p",{className:"mb-6 hidden sm:block",children:g?.description}),r.jsx("div",{className:"hidden sm:grid grid-cols-6 gap-1 pb-10",children:c.xn.map(e=>r.jsx(l,{text:e.name,children:r.jsx(i.default,{src:e.imageUrl,width:100,height:100,alt:e.name})},e.id))}),(0,r.jsxs)("div",{className:"flex flex-row justify-between",children:[r.jsx(a.default,{href:`/${e}/product`,className:"right-0",children:r.jsx("div",{className:"bg-green hover:bg-green-light text-white py-2 px-4 rounded-md hover:bg-blue-600",children:s.productAbout.buttonBack})}),r.jsx(a.default,{href:`/${e}/basket`,className:"right-0",children:r.jsx("div",{className:"bg-green hover:bg-green-light text-white py-2 px-4 rounded-md hover:bg-blue-600",children:s.productAbout.buttonBuy})})]})]})})]}),r.jsx("div",{className:"grid lg:grid-cols-3 grid-cols-2 gap-10 max-w-4xl mx-auto",children:h.map(t=>r.jsx("div",{children:r.jsx(n.Z,{product:t,lang:e,t:s})},t._id))})]})}},4653:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var r=t(326),i=t(6226),a=t(434);let n=({product:e,lang:s,t})=>(0,r.jsxs)("div",{className:"max-w-sm bg-white rounded-lg shadow-md overflow-hidden p-1",children:[r.jsx(i.default,{src:e.imageUrl,alt:e.name,width:300,height:300,className:"w-full object-cover hover:opacity-90"}),(0,r.jsxs)("div",{className:"p-4",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-800",style:{fontFamily:"Montserrat-Bold"},children:e.name}),r.jsx("span",{className:"text-sm",children:e.diameter}),r.jsx("p",{className:"text-gray-600 mt-2",children:e.description}),r.jsx(a.default,{href:`/${s}/product/`+e._id,children:r.jsx("button",{className:"mt-4 bg-green text-white py-2 px-4 rounded-md hover:bg-green-light",children:t.card.buttonMore})})]})]})},7367:(e,s,t)=>{"use strict";t.d(s,{CG:()=>a,TL:()=>i,qr:()=>n});var r=t(5842);let i=r.I0.withTypes(),a=r.v9.withTypes(),n=r.oR.withTypes()},6857:(e,s,t)=>{"use strict";t.d(s,{C2:()=>n,ZU:()=>i,xn:()=>a});let r=[{id:1,name:"Аида",phone:"87756999475"},{id:2,name:"Фарида",phone:"87756989567"},{id:3,name:"Бандит",phone:"87756879475"},{id:4,name:"Глобус",phone:"87626999475"}],i=[{id:1,name:"Braun Depiero",buyer:r[0],profession:"chef",imageUrl:"/img/shef3.jpg",message:"I am delighted with the quality of Alma Le cookware!"},{id:2,name:"Федерико",buyer:r[1],profession:"шеф-повар",imageUrl:"/img/shef1.jpeg",message:"Я в восторге от качества посуды Alma Le"},{id:3,name:"Ernesto Kabale",buyer:r[2],profession:"шеф-повар",imageUrl:"/img/shef2.png",message:"Эта посуда нечто к хорошему привыкаешь быстро"}],a=[{id:1,name:"Индукционная плита",imageUrl:"/img/haracter/1.svg"},{id:2,name:"Газовая плита",imageUrl:"/img/haracter/2.svg"},{id:3,name:"Электрическая плита",imageUrl:"/img/haracter/3.svg"},{id:4,name:"Керамическая плита",imageUrl:"/img/haracter/4.svg"},{id:5,name:"Галогенная плита",imageUrl:"/img/haracter/5.svg"},{id:6,name:"Посудомоечная машина",imageUrl:"/img/haracter/6.svg"}],n=[{id:1,price:0},{id:2,price:2e4}]},8227:(e,s,t)=>{"use strict";t.d(s,{j:()=>r,q:()=>i});let r=[{_id:"1",src:"/img/utensils-set.png"},{_id:"2",src:"/img/utensils-set.png"},{_id:"3",src:"/img/utensils-set.png"},{_id:"4",src:"/img/utensils-set.png"}],i=[{id:"671f8ad851c70fa561f432e3",arr:[{_id:"1",src:"/img/utensils-set.png"},{_id:"2",src:"/img/utensils-set.png"},{_id:"3",src:"/img/utensils-set.png"},{_id:"4",src:"/img/utensils-set.png"}]},{id:"671f8ad851c70fa561f432e5",arr:[{_id:"1",src:"/img/utensils-set.png"},{_id:"2",src:"/img/utensils-set.png"},{_id:"3",src:"/img/utensils-set.png"},{_id:"4",src:"/img/utensils-set.png"}]},{id:"671f8ad851c70fa561f432e6",arr:[{_id:"1",src:"/img/utensils-set.png"},{_id:"2",src:"/img/utensils-set.png"},{_id:"3",src:"/img/utensils-set.png"},{_id:"4",src:"/img/utensils-set.png"}]},{id:"671f8ad851c70fa561f432e4",arr:[{_id:"1",src:"/img/utensils-set.png"},{_id:"2",src:"/img/utensils-set.png"},{_id:"3",src:"/img/utensils-set.png"},{_id:"4",src:"/img/utensils-set.png"}]}]},261:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l,generateStaticParams:()=>n});var r=t(9510);let i=(0,t(8570).createProxy)(String.raw`/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js#default`);var a=t(7026);async function n(){let e=["1","2","3"],s=[];return["en","ru","kz"].forEach(t=>{e.forEach(e=>{s.push({lang:t,id:e})})}),s}async function l({params:{lang:e}}){let s=await (0,a.R)(e);return r.jsx(i,{lang:e,t:s})}}};var s=require("../../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[948,471,320,941],()=>t(2422));module.exports=r})();