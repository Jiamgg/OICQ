System.register(["./index-legacy-6ae413af.js","./use-route-legacy-a96d7801.js","./index-legacy-5cfddaf1.js","./index-legacy-5a0d988f.js","./index-legacy-5a1d6b8a.js"],(function(e,o){"use strict";var n,t,s,l,i,a,c,r,d,u,y,p,g,m,v,f,h,C,k,b,w,x,S,O;return{setters:[e=>{n=e.d,t=e.z,s=e.A,l=e.a2,i=e.c,a=e.m,c=e.a1,r=e.s,d=e.a3,u=e.x,y=e.e,p=e.N,g=e.i,m=e.r,v=e.g},e=>{f=e.a},e=>{h=e.c,C=e.b,k=e.n,b=e.C,w=e.u,x=e.I},e=>{S=e.P},e=>{O=e.L}],execute:function(){e("a",H);let o=0;const[j,B]=h("toast"),z=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],T={icon:String,show:Boolean,type:C("text"),overlay:Boolean,message:k,iconSize:k,duration:b(2e3),position:C("middle"),teleport:[String,Object],wordBreak:String,className:w,iconPrefix:String,transition:C("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:w,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var P=e("e",n({name:j,props:T,emits:["update:show"],setup(e,{emit:n,slots:d}){let u,y=!1;const p=()=>{const n=e.show&&e.forbidClick;y!==n&&(y=n,y?(o||document.body.classList.add("van-toast--unclickable"),o++):o&&(o--,o||document.body.classList.remove("van-toast--unclickable")))},g=e=>n("update:show",e),m=()=>{e.closeOnClick&&g(!1)},v=()=>clearTimeout(u),f=()=>{const{icon:o,type:n,iconSize:t,iconPrefix:s,loadingType:l}=e;return o||"success"===n||"fail"===n?i(x,{name:o||n,size:t,class:B("icon"),classPrefix:s},null):"loading"===n?i(O,{class:B("loading"),size:t,type:l},null):void 0},h=()=>{const{type:o,message:n}=e;return d.message?i("div",{class:B("text")},[d.message()]):r(n)&&""!==n?"html"===o?i("div",{key:0,class:B("text"),innerHTML:String(n)},null):i("div",{class:B("text")},[n]):void 0};return t((()=>[e.show,e.forbidClick]),p),t((()=>[e.show,e.type,e.message,e.duration]),(()=>{v(),e.show&&e.duration>0&&(u=setTimeout((()=>{g(!1)}),e.duration))})),s(p),l(p),()=>i(S,a({class:[B([e.position,"normal"===e.wordBreak?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:m,onClosed:v,"onUpdate:show":g},c(e,z)),{default:()=>[f(),h()]})}}));let L=[],N=!1,A=y({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1});const E=new Map;function M(e){return g(e)?e:{message:e}}function U(){const{instance:e,unmount:o}=function(e){const o=d(e),n=document.createElement("div");return document.body.appendChild(n),{instance:o.mount(n),unmount(){o.unmount(),document.body.removeChild(n)}}}({setup(){const e=m(""),{open:o,state:n,close:s,toggle:l}=function(){const e=u({show:!1}),o=o=>{e.show=o},n=n=>{y(e,n,{transitionAppear:!0}),o(!0)},t=()=>o(!1);return f({open:n,close:t,toggle:o}),{open:n,close:t,state:e,toggle:o}}(),c=()=>{};return t(e,(e=>{n.message=e})),v().render=()=>i(P,a(n,{onClosed:c,"onUpdate:show":l}),null),{open:o,close:s,message:e}}});return e}function H(e={}){if(!p)return{};const o=function(){if(!L.length||N){const e=U();L.push(e)}return L[L.length-1]}(),n=M(e);return o.open(y({},A,E.get(n.type||A.type),n)),o}const I=e=>o=>H(y({type:e},M(o)));e("s",I("loading")),e("d",I("success")),e("b",I("fail")),e("c",(e=>{L.length&&(e?(L.forEach((e=>{e.close()})),L=[]):L[0].close())}))}}}));
