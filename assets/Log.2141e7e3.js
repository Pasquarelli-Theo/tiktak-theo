import{d as a,o as i,c as _,a as e,e as t,u as s,s as n,_ as l,h as u}from"./index.9efe1ade.js";const m={class:"ml-56 border-0 w-2/3"},b={class:"bg-light_grey"},h=e("h2",{class:"ml-28 w-1/2 font-aboreto text-xl"},"Compte",-1),p=e("hr",{class:"ml-32 mt-4 mb-8 h-0.5 w-32 bg-black"},null,-1),g={class:"text-center"},f=e("br",null,null,-1),v=e("br",null,null,-1),w=e("br",null,null,-1),x=e("label",{id:"status"},null,-1),k=a({__name:"LoginLogout",setup(c){return(d,o)=>(i(),_("div",m,[e("div",b,[h,p,e("div",g,[t(l,{libelle:"Authentification avec Google",class:"border-2 mb-3 mt-28 rounded-sm w-96 h-14",onPointerdown:o[0]||(o[0]=r=>s(n).auth.signIn({provider:"google"}))}),f,t(l,{libelle:"Authentification avec Facebook",class:"border-2 m-3 rounded-sm w-96 h-14",onPointerdown:o[1]||(o[1]=r=>s(n).auth.signIn({provider:"facebook"}))}),v,t(l,{libelle:"Deconnexion",class:"border-2 mt-3 mb-28 rounded-sm w-96 h-14",onPointerdown:o[2]||(o[2]=r=>s(n).auth.signOut())}),w,x])])]))}}),B=a({__name:"Log",setup(c){return(d,o)=>(i(),u(k))}});export{B as default};
