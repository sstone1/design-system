import{r as f}from"./index-CO9pbFv1.js";import{m as B,u as v,c as S,a as C}from"./DefaultPropsProvider-2af-l9uX.js";import{g as W,l as d,a as D}from"./MenuItem-D986Y6_u.js";import{a as P}from"./List-CnNeu8Oc.js";import{j as I,a as E}from"./jsx-runtime-CHAcsyq4.js";import{s as w}from"./generateUtilityClasses-HyxggqFg.js";import{u as h}from"./useSlot-DP9B20k_.js";import{t as L,T as u}from"./Typography-Cx8-JiCk.js";const q=s=>{const{alignItems:t,classes:o}=s;return C({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},W,o)},z=w("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(B(({theme:s})=>({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),Z=f.forwardRef(function(t,o){const e=v({props:t,name:"MuiListItemIcon"}),{className:i,...l}=e,r=f.useContext(P),m={...e,alignItems:r.alignItems},c=q(m);return I(z,{className:S(c.root,i),ownerState:m,ref:o,...l})}),A=s=>{const{classes:t,inset:o,primary:e,secondary:i,dense:l}=s;return C({root:["root",o&&"inset",l&&"dense",e&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},D,t)},G=w("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[{[`& .${d.primary}`]:t.primary},{[`& .${d.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${L.root}:where(& .${d.primary})`]:{display:"block"},[`.${L.root}:where(& .${d.secondary})`]:{display:"block"},variants:[{props:({ownerState:s})=>s.primary&&s.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:s})=>s.inset,style:{paddingLeft:56}}]}),_=f.forwardRef(function(t,o){const e=v({props:t,name:"MuiListItemText"}),{children:i,className:l,disableTypography:r=!1,inset:m=!1,primary:c,primaryTypographyProps:R,secondary:$,secondaryTypographyProps:b,slots:N={},slotProps:M={},...U}=e,{dense:g}=f.useContext(P);let a=c??i,n=$;const p={...e,disableTypography:r,inset:m,primary:!!a,secondary:!!n,dense:g},x=A(p),T={slots:N,slotProps:{primary:R,secondary:b,...M}},[j,y]=h("primary",{className:x.primary,elementType:u,externalForwardedProps:T,ownerState:p}),[k,F]=h("secondary",{className:x.secondary,elementType:u,externalForwardedProps:T,ownerState:p});return a!=null&&a.type!==u&&!r&&(a=I(j,{variant:g?"body2":"body1",component:y!=null&&y.variant?void 0:"span",...y,children:a})),n!=null&&n.type!==u&&!r&&(n=I(k,{variant:"body2",color:"textSecondary",...F,children:n})),E(G,{className:S(x.root,l),ownerState:p,ref:o,...U,children:[a,n]})});export{Z as L,_ as a};
