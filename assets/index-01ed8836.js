import{r as z,u as I}from"./use-route-db9da3b0.js";import{c as R,b as l,n as p,h as C,I as w,p as D,w as L}from"./index-cdaf4ddc.js";import{L as N}from"./index-81d5f77e.js";import{e as q,d as O,c as o}from"./index-b9eaef7b.js";const[U,a]=R("button"),_=q({},z,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:p,loadingText:String,loadingType:String,iconPosition:l("left")});var E=O({name:U,props:_,emits:["click"],setup(e,{emit:g,slots:t}){const f=I(),m=()=>t.loading?t.loading():o(N,{size:e.loadingSize,type:e.loadingType,class:a("loading")},null),c=()=>{if(e.loading)return m();if(t.icon)return o("div",{class:a("icon")},[t.icon()]);if(e.icon)return o(w,{name:e.icon,class:a("icon"),classPrefix:e.iconPrefix},null)},b=()=>{let n;if(e.loading?n=e.loadingText:n=t.default?t.default():e.text,n)return o("span",{class:a("text")},[n])},x=()=>{const{color:n,plain:r}=e;if(n){const i={color:r?n:"white"};return r||(i.background=n),n.includes("gradient")?i.border=0:i.borderColor=n,i}},y=n=>{e.loading?D(n):e.disabled||(g("click",n),f())};return()=>{const{tag:n,type:r,size:i,block:S,round:B,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:h,iconPosition:u}=e,v=[a([r,i,{plain:P,block:S,round:B,square:k,loading:T,disabled:s,hairline:d}]),{[C]:d}];return o(n,{type:h,class:v,style:x(),disabled:s,onClick:y},{default:()=>[o("div",{class:a("content")},[u==="left"&&c(),b(),u==="right"&&c()])]})}}});const G=L(E);export{G as B};
