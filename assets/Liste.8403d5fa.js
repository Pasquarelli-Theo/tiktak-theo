import{d as i,s as l,w as p,o as s,c as o,a,F as c,r as d,u as f,b as h,e as m,f as x,m as w}from"./index.9efe1ade.js";import{_ as b}from"./Montreprofil.vue_vue_type_script_setup_true_lang.66a784b3.js";const k=a("h2",{class:"mt-16 ml-28 w-1/2 font-aboreto text-xl"}," Vos montres ",-1),g=a("hr",{class:"ml-32 mt-4 mb-8 h-0.5 w-64 bg-black"},null,-1),C={class:"flex flex-wrap gap-10 ml-5"},L=i({__name:"Liste",async setup(y){let e,r;l.auth.user();const{data:_,error:n}=([e,r]=p(()=>l.from("montre").select("*")),e=await e,r(),e);return n&&console.log("n'a pas pu r\xE9cup\xE9rer les montres",{error:n}),(B,E)=>{const u=h("router-link");return s(),o(c,null,[k,g,a("ul",C,[(s(!0),o(c,null,d(f(_),t=>(s(),o("li",{key:t.id},[m(u,{to:`/montre/edit/${t.id_montre}`},{default:x(()=>[m(b,w({class:"w-36 md:w-64"},t),null,16)]),_:2},1032,["to"])]))),128))])],64)}}});export{L as default};
