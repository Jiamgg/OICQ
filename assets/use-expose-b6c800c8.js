import{t as f,a8 as o,e as r,g as l}from"./index-b9eaef7b.js";function u(s,{args:t=[],done:i,canceled:e}){if(s){const n=s.apply(null,t);f(n)?n.then(a=>{a?i():e&&e()}).catch(o):n?i():e&&e()}else i()}function c(s){const t=l();t&&r(t.proxy,s)}export{u as c,c as u};
