System.register(["./index-legacy-5cfddaf1.js","./index-legacy-1e010358.js","./index-legacy-f3fc617c.js","./index-legacy-4857a7a6.js","./index-legacy-748c5536.js","./index-legacy-bcb51ee8.js","./index-legacy-6fdc5fa5.js","./index-legacy-6ae413af.js","./index-legacy-5a1d6b8a.js","./use-id-legacy-ad1b3827.js"],(function(e,a){"use strict";var t,s,n,l,r,i,d,c,o,u,p,m,v,g,y,f,h,x,j,k,w,b,_;return{setters:[null,null,e=>{t=e.P},e=>{s=e.I},e=>{n=e.E},e=>{l=e.N},e=>{r=e.b},e=>{i=e.d,d=e.r,c=e.H,o=e.x,u=e.o,p=e.h,m=e.c,v=e.w,g=e.j,y=e.F,f=e.k,h=e.n,x=e.I,j=e.q,k=e.p,w=e.l,b=e._},e=>{_=e.L},null],execute:function(){var a=document.createElement("style");a.textContent=".pets[data-v-3a6e84ea]{width:95%;height:100%;margin:.13333rem auto;columns:2}.pets p[data-v-3a6e84ea]{margin:.06667rem 0}.pets .card[data-v-3a6e84ea]{padding:.13333rem;-webkit-column-break-inside:avoid}.pets .card img[data-v-3a6e84ea]{width:100%;border-radius:.13333rem}.pets .price[data-v-3a6e84ea]{display:flex;align-items:center;font-size:.53333rem;color:#f69;margin:0}.pets .price .span1[data-v-3a6e84ea]{font-size:.4rem}.pets .price .span2[data-v-3a6e84ea]{padding-left:.26667rem;font-size:.26667rem;color:#999}[data-v-3a6e84ea] .van-pull-refresh{overflow:visible}\n",document.head.appendChild(a);const L={key:1,class:"pets"},q={class:"price"},z=(e=>(k("data-v-3a6e84ea"),e=e(),w(),e))((()=>h("span",{class:"span1"},"￥",-1))),I={class:"span2"};e("default",b(i({__name:"index",setup(e){const a=d(!1),i=c(),k=i.query.id,w=d(i.query.name),b=o({shop:[],shopBanner:[],productList:[]}),V=(e,t=1)=>{r(k,e,t).then((e=>{b.productList=e.Data,a.value=!1}))},C=()=>{a.value=!0;let e=Math.floor(4*Math.random())+1;V("new",e)},S=()=>history.back();return V("new",1),(e,r)=>{const i=l,d=n,c=_,o=s,k=t;return u(),p("div",null,[m(i,{title:w.value,"left-arrow":"",onClickLeft:S},null,8,["title"]),m(k,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=e=>a.value=e),"success-text":"刷新成功",onRefresh:C},{default:v((()=>[b.productList.length<=0?(u(),g(d,{key:0,description:"暂无商品"})):(u(),p("div",L,[(u(!0),p(y,null,f(b.productList,(e=>(u(),p("div",{key:e.ID,class:"card"},[m(o,{src:e.FaceSrc},{loading:v((()=>[m(c,{type:"spinner",size:"20"})])),_:2},1032,["src"]),h("p",null,x(e.Name),1),h("p",q,[z,j(" "+x(e.Price),1),h("span",I,x(e.SalesVolume)+"人已付款",1)])])))),128))]))])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-3a6e84ea"]]))}}}));
