import{r as u,R as p}from"./index-CO9pbFv1.js";function R(e){return e&&e.ownerDocument||document}function g(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const m=typeof window<"u"?u.useLayoutEffect:u.useEffect;let f=0;function b(e){const[t,r]=u.useState(e),n=t;return u.useEffect(()=>{t==null&&(f+=1,r(`mui-${f}`))},[t]),n}const i=p.useId;function v(e){return i!==void 0?i():b(e)}function x(e){const t=u.useRef(e);return m(()=>{t.current=e}),u.useRef((...r)=>(0,t.current)(...r)).current}function $(...e){return u.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{g(r,t)})},e)}function w(e,t,r=void 0){const n={};return Object.keys(e).forEach(s=>{n[s]=e[s].reduce((a,o)=>{if(o){const c=t(o);c!==""&&a.push(c),r&&r[o]&&a.push(r[o])}return a},[]).join(" ")}),n}const d=e=>e,y=()=>{let e=d;return{configure(t){e=t},generate(t){return e(t)},reset(){e=d}}},h=y(),E={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function C(e,t,r="Mui"){const n=E[t];return n?`${r}-${n}`:`${h.generate(e)}-${t}`}function G(e,t,r="Mui"){const n={};return t.forEach(s=>{n[s]=C(e,s,r)}),n}function l(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=l(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function S(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=l(e))&&(n&&(n+=" "),n+=t);return n}export{C as a,w as b,S as c,x as d,m as e,v as f,G as g,R as o,$ as u};
