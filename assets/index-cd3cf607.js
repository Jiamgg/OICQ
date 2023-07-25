import{Q,O as D,P as W,z,a7 as X,r as C,d as E,D as L,c as d,a8 as _,e as R,s as N,X as $,a0 as p,b as q,A as J,U as ee,y as oe,a9 as te,F as ne,B as ae,m as se}from"./index-d5e8f552.js";import{n as k,t as y,u as K,v as le,p as F,c as H,g as ce,w as M,b as g,P as re,H as ie,I as ue}from"./index-eb528fff.js";import{a as de,c as fe}from"./use-route-ab904f85.js";let ve=2e3;const ye=()=>++ve,me={show:Boolean,zIndex:k,overlay:y,duration:k,teleport:[String,Object],lockScroll:y,lazyRender:y,beforeClose:Function,overlayStyle:Object,overlayClass:K,transitionAppear:Boolean,closeOnClickOverlay:y};let h=0;const A="van-overflow-hidden";function he(e,o){const n=le(),f="01",a="10",c=r=>{n.move(r);const v=n.deltaY.value>0?a:f,x=X(r.target,e.value),{scrollHeight:m,offsetHeight:O,scrollTop:w}=x;let i="11";w===0?i=O>=m?"00":"01":w+O>=m&&(i="10"),i!=="11"&&n.isVertical()&&!(parseInt(i,2)&parseInt(v,2))&&F(r,!0)},s=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",c,{passive:!1}),h||document.body.classList.add(A),h++},l=()=>{h&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",c),h--,h||document.body.classList.remove(A))},b=()=>o()&&s(),I=()=>o()&&l();Q(b),D(I),W(I),z(o,r=>{r?s():l()})}function U(e){const o=C(!1);return z(e,n=>{n&&(o.value=n)},{immediate:!0}),n=>()=>o.value?n():null}const[Ie,Oe]=H("overlay"),we={show:Boolean,zIndex:k,duration:k,className:K,lockScroll:y,lazyRender:y,customStyle:Object};var Pe=E({name:Ie,props:we,setup(e,{slots:o}){const n=C(),f=U(()=>e.show||!e.lazyRender),a=s=>{e.lockScroll&&F(s,!0)},c=f(()=>{var s;const l=R(ce(e.zIndex),e.customStyle);return N(e.duration)&&(l.animationDuration=`${e.duration}s`),$(d("div",{ref:n,style:l,class:[Oe(),e.className]},[(s=o.default)==null?void 0:s.call(o)]),[[p,e.show]])});return L("touchmove",a,{target:n}),()=>d(_,{name:"van-fade",appear:!0},{default:c})}});const Ce=M(Pe),ke=R({},me,{round:Boolean,position:g("center"),closeIcon:g("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:g("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[be,B]=H("popup");var xe=E({name:be,inheritAttrs:!1,props:ke,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:o,attrs:n,slots:f}){let a,c;const s=C(),l=C(),b=U(()=>e.show||!e.lazyRender),I=q(()=>{const t={zIndex:s.value};if(N(e.duration)){const u=e.position==="center"?"animationDuration":"transitionDuration";t[u]=`${e.duration}s`}return t}),r=()=>{a||(a=!0,s.value=e.zIndex!==void 0?+e.zIndex:ye(),o("open"))},v=()=>{a&&fe(e.beforeClose,{done(){a=!1,o("close"),o("update:show",!1)}})},x=t=>{o("clickOverlay",t),e.closeOnClickOverlay&&v()},m=()=>{if(e.overlay)return d(Ce,{show:e.show,class:e.overlayClass,zIndex:s.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:x},{default:f["overlay-content"]})},O=t=>{o("clickCloseIcon",t),v()},w=()=>{if(e.closeable)return d(ue,{role:"button",tabindex:0,name:e.closeIcon,class:[B("close-icon",e.closeIconPosition),ie],classPrefix:e.iconPrefix,onClick:O},null)};let i;const j=()=>{i&&clearTimeout(i),i=setTimeout(()=>{o("opened")})},G=()=>o("closed"),Y=t=>o("keydown",t),Z=b(()=>{var t;const{round:u,position:P,safeAreaInsetTop:S,safeAreaInsetBottom:V}=e;return $(d("div",se({ref:l,style:I.value,role:"dialog",tabindex:0,class:[B({round:u,[P]:P}),{"van-safe-area-top":S,"van-safe-area-bottom":V}],onKeydown:Y},n),[(t=f.default)==null?void 0:t.call(f),w()]),[[p,e.show]])}),T=()=>{const{position:t,transition:u,transitionAppear:P}=e,S=t==="center"?"van-fade":`van-popup-slide-${t}`;return d(_,{name:u||S,appear:P,onAfterEnter:j,onAfterLeave:G},{default:Z})};return z(()=>e.show,t=>{t&&!a&&(r(),n.tabindex===0&&ae(()=>{var u;(u=l.value)==null||u.focus()})),!t&&a&&(a=!1,o("close"))}),de({popupRef:l}),he(l,()=>e.show&&e.lockScroll),L("popstate",()=>{e.closeOnPopstate&&(v(),c=!1)}),J(()=>{e.show&&r()}),ee(()=>{c&&(o("update:show",!0),c=!1)}),D(()=>{e.show&&e.teleport&&(v(),c=!0)}),oe(re,()=>e.show),()=>e.teleport?d(te,{to:e.teleport},{default:()=>[m(),T()]}):d(ne,null,[m(),T()])}});const Te=M(xe);export{Te as P};
