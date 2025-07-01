import{r as R}from"./index-CO9pbFv1.js";import{a as w,g as N,s as v,k as n,f as U}from"./styled-YeRgfiRQ.js";import{m as P,u as j,c as F}from"./DefaultPropsProvider-GIfS_qv3.js";import{c as I}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{j as d}from"./jsx-runtime-CHAcsyq4.js";import{k as S,c as $}from"./emotion-react.browser.esm-Dv-6nvuE.js";function z(e){return w("MuiCircularProgress",e)}N("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const t=44,g=S`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=S`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,A=typeof g!="string"?$`
        animation: ${g} 1.4s linear infinite;
      `:null,E=typeof h!="string"?$`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,K=e=>{const{classes:r,variant:s,color:a,disableShrink:c}=e,l={root:["root",s,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,c&&"circleDisableShrink"]};return F(l,z,r)},V=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${n(s.color)}`]]}})(P(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:A||{animation:`${g} 1.4s linear infinite`}},...Object.entries(e.palette).filter(I()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),B=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),G=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${n(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(P(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:E||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),J=R.forwardRef(function(r,s){const a=j({props:r,name:"MuiCircularProgress"}),{className:c,color:l="primary",disableShrink:b=!1,size:m=40,style:D,thickness:o=3.6,value:p=0,variant:y="indeterminate",...M}=a,i={...a,color:l,disableShrink:b,size:m,thickness:o,value:p,variant:y},f=K(i),u={},k={},C={};if(y==="determinate"){const x=2*Math.PI*((t-o)/2);u.strokeDasharray=x.toFixed(3),C["aria-valuenow"]=Math.round(p),u.strokeDashoffset=`${((100-p)/100*x).toFixed(3)}px`,k.transform="rotate(-90deg)"}return d(V,{className:U(f.root,c),style:{width:m,height:m,...k,...D},ownerState:i,ref:s,role:"progressbar",...C,...M,children:d(B,{className:f.svg,ownerState:i,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:d(G,{className:f.circle,style:u,ownerState:i,cx:t,cy:t,r:(t-o)/2,fill:"none",strokeWidth:o})})})});export{J as C};
