System.register(["./index-legacy-1c49f1bb.js","./index-legacy-6d5ced08.js"],(function(e,t){"use strict";var l,r,n,i,s,c,o,a,u,p;return{setters:[e=>{l=e.c,r=e.n,n=e.b,i=e.A,s=e.e,c=e.w},e=>{o=e.c,a=e.d,u=e.b,p=e.e}],execute:function(){const[t,y]=l("loading"),v=Array(12).fill(null).map(((e,t)=>o("i",{class:y("line",String(t+1))},null))),x=o("svg",{class:y("circular"),viewBox:"25 25 50 50"},[o("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),f={size:r,type:n("circular"),color:String,vertical:Boolean,textSize:r,textColor:String};var g=a({name:t,props:f,setup(e,{slots:t}){const l=u((()=>p({color:e.color},i(e.size)))),r=()=>{const r="spinner"===e.type?v:x;return o("span",{class:y("spinner",e.type),style:l.value},[t.icon?t.icon():r])},n=()=>{var l;if(t.default)return o("span",{class:y("text"),style:{fontSize:s(e.textSize),color:null!=(l=e.textColor)?l:e.color}},[t.default()])};return()=>{const{type:t,vertical:l}=e;return o("div",{class:y([t,{vertical:l}]),"aria-live":"polite","aria-busy":!0},[r(),n()])}}});e("L",c(g))}}}));
