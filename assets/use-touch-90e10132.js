import{ab as m,z as P,r as a}from"./index-8dde0f8b.js";import{T as h}from"./index-a6b8ecb7.js";const X=Symbol();function z(e){const t=m(X,null);t&&P(t,o=>{o&&e()})}function Y(e,t){return e>t?"horizontal":t>e?"vertical":""}function S(){const e=a(0),t=a(0),o=a(0),n=a(0),u=a(0),l=a(0),s=a(""),c=a(!0),p=()=>s.value==="vertical",T=()=>s.value==="horizontal",r=()=>{o.value=0,n.value=0,u.value=0,l.value=0,s.value="",c.value=!0};return{move:v=>{const i=v.touches[0];o.value=(i.clientX<0?0:i.clientX)-e.value,n.value=i.clientY-t.value,u.value=Math.abs(o.value),l.value=Math.abs(n.value);const f=10;(!s.value||u.value<f&&l.value<f)&&(s.value=Y(u.value,l.value)),c.value&&(u.value>h||l.value>h)&&(c.value=!1)},start:v=>{r(),e.value=v.touches[0].clientX,t.value=v.touches[0].clientY},reset:r,startX:e,startY:t,deltaX:o,deltaY:n,offsetX:u,offsetY:l,direction:s,isVertical:p,isHorizontal:T,isTap:c}}export{X as P,z as o,S as u};
