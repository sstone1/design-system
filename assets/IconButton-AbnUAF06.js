import{r as S}from"./index-CO9pbFv1.js";import{m,u as M,c as O,a as P}from"./DefaultPropsProvider-Qc2xy7DK.js";import{c as I}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{g as j,a as L,s as z,e as b}from"./generateUtilityClasses-7uZHDCF9.js";import{a as W,j as g}from"./jsx-runtime-CHAcsyq4.js";import{B as h}from"./ButtonBase-spyuHJhX.js";import{c as r}from"./capitalize-my3DsAjr.js";import{u as k}from"./useId-Dw7xLATF.js";import{C as N}from"./CircularProgress-DQj5DzX1.js";function T(o){return L("MuiIconButton",o)}const B=j("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),U=o=>{const{classes:a,disabled:t,color:e,edge:s,size:n,loading:l}=o,c={root:["root",l&&"loading",t&&"disabled",e!=="default"&&`color${r(e)}`,s&&`edge${r(s)}`,`size${r(n)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return P(c,T,a)},w=z(h,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,t.loading&&a.loading,t.color!=="default"&&a[`color${r(t.color)}`],t.edge&&a[`edge${r(t.edge)}`],a[`size${r(t.size)}`]]}})(m(({theme:o})=>({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),variants:[{props:a=>!a.disableRipple,style:{"--IconButton-hoverBg":o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:b(o.palette.action.active,o.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),m(({theme:o})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(o.palette).filter(I()).map(([a])=>({props:{color:a},style:{color:(o.vars||o).palette[a].main}})),...Object.entries(o.palette).filter(I()).map(([a])=>({props:{color:a},style:{"--IconButton-hoverBg":o.vars?`rgba(${(o.vars||o).palette[a].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:b((o.vars||o).palette[a].main,o.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:o.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:o.typography.pxToRem(28)}}],[`&.${B.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled},[`&.${B.loading}`]:{color:"transparent"}}))),E=z("span",{name:"MuiIconButton",slot:"LoadingIndicator",overridesResolver:(o,a)=>a.loadingIndicator})(({theme:o})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(o.vars||o).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),Q=S.forwardRef(function(a,t){const e=M({props:a,name:"MuiIconButton"}),{edge:s=!1,children:n,className:l,color:c="default",disabled:u=!1,disableFocusRipple:f=!1,size:R="medium",id:C,loading:i=null,loadingIndicator:$,...x}=e,v=k(C),y=$??g(N,{"aria-labelledby":v,color:"inherit",size:16}),p={...e,edge:s,color:c,disabled:u,disableFocusRipple:f,loading:i,loadingIndicator:y,size:R},d=U(p);return W(w,{id:v,className:O(d.root,l),centerRipple:!0,focusRipple:!f,disabled:u||i,ref:t,...x,ownerState:p,children:[typeof i=="boolean"&&g("span",{className:d.loadingWrapper,style:{display:"contents"},children:g(E,{className:d.loadingIndicator,ownerState:p,children:i&&y})}),n]})});export{Q as I};
