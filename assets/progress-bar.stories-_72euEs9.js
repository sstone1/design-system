import{a as G,j as n}from"./jsx-runtime-CHAcsyq4.js";import{a as Y,g as Z,s as l,k as o,f as ee,u as re,v as ae}from"./styled-YeRgfiRQ.js";import{T as te}from"./Typography-B9EEOqS3.js";import{B as x}from"./Box-BQkYfaWE.js";import{r as oe}from"./index-CO9pbFv1.js";import{u as ne}from"./index-A5tg15ia.js";import{m as P,u as se,c as ie}from"./DefaultPropsProvider-GIfS_qv3.js";import{c as g}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{k as w,c as T}from"./emotion-react.browser.esm-Dv-6nvuE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-2tmYIofL.js";import"./index-DHjCJufJ.js";import"./extendSxProp-BJFBh0CD.js";import"./useTheme-DyIePcff.js";import"./_commonjsHelpers-BosuxZz1.js";function le(r){return Y("MuiLinearProgress",r)}Z("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const L=4,$=w`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,ue=typeof $!="string"?T`
        animation: ${$} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,k=w`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,pe=typeof k!="string"?T`
        animation: ${k} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,q=w`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,de=typeof q!="string"?T`
        animation: ${q} 3s infinite linear;
      `:null,ce=r=>{const{classes:e,variant:a,color:t}=r,u={root:["root",`color${o(t)}`,a],dashed:["dashed",`dashedColor${o(t)}`],bar1:["bar","bar1",`barColor${o(t)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",a!=="buffer"&&`barColor${o(t)}`,a==="buffer"&&`color${o(t)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return ie(u,le,e)},I=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?re(r.palette[e].main,.62):ae(r.palette[e].main,.5),me=l("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${o(a.color)}`],e[a.variant]]}})(P(({theme:r})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter(g()).map(([e])=>({props:{color:e},style:{backgroundColor:I(r,e)}})),{props:({ownerState:e})=>e.color==="inherit"&&e.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),fe=l("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${o(a.color)}`]]}})(P(({theme:r})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter(g()).map(([e])=>{const a=I(r,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]})),de||{animation:`${q} 3s infinite linear`}),be=l("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e.bar1,e[`barColor${o(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(P(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter(g()).map(([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main}})),{props:{variant:"determinate"},style:{transition:`transform .${L}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${L}s linear`}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:ue||{animation:`${$} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),ge=l("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e.bar2,e[`barColor${o(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(P(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter(g()).map(([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[e].main}})),{props:({ownerState:e})=>e.variant!=="buffer"&&e.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:e})=>e.variant!=="buffer"&&e.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter(g()).map(([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:I(r,e),transition:`transform .${L}s linear`}})),{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:pe||{animation:`${k} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),ve=oe.forwardRef(function(e,a){const t=se({props:e,name:"MuiLinearProgress"}),{className:u,color:J="primary",value:S,valueBuffer:N,variant:i="indeterminate",...Q}=t,p={...t,color:J,variant:i},y=ce(p),V=ne(),h={},C={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&S!==void 0){h["aria-valuenow"]=Math.round(S),h["aria-valuemin"]=0,h["aria-valuemax"]=100;let s=S-100;V&&(s=-s),C.bar1.transform=`translateX(${s}%)`}if(i==="buffer"&&N!==void 0){let s=(N||0)-100;V&&(s=-s),C.bar2.transform=`translateX(${s}%)`}return G(me,{className:ee(y.root,u),ownerState:p,role:"progressbar",...h,ref:a,...Q,children:[i==="buffer"?n(fe,{className:y.dashed,ownerState:p}):null,n(be,{className:y.bar1,ownerState:p,style:C.bar1}),i==="determinate"?null:n(ge,{className:y.bar2,ownerState:p,style:C.bar2})]})}),ye=({completeStepCount:r,totalStepCount:e,label:a="complete",displayCountAndLabel:t=!0,...u})=>G(x,{sx:{display:"flex",alignItems:"center"},children:[n(x,{sx:{flex:1,mr:"12px"},children:n(ve,{variant:"determinate",value:r/e*100,...u})}),t&&n(x,{sx:{flex:1},children:n(he,{children:`${r}/${e}${a?` ${a}`:""}`})})]}),he=l(te)(({theme:r})=>({fontStyle:"normal",fontWeight:500,lineHeight:"24px",color:r.palette.neutral[500]})),B=l(ye)(({theme:r})=>({height:"8px",borderRadius:"4px","&":{backgroundColor:r.palette.neutral[100]},"& .MuiLinearProgress-barColorPrimary":{backgroundColor:r.palette.success.main,borderRadius:"4px"}}));try{B.displayName="StyledProgressBar",B.__docgenInfo={description:"",displayName:"StyledProgressBar",props:{completeStepCount:{defaultValue:null,description:"",name:"completeStepCount",required:!0,type:{name:"number"}},totalStepCount:{defaultValue:null,description:"",name:"totalStepCount",required:!0,type:{name:"number"}},label:{defaultValue:{value:"complete"},description:"",name:"label",required:!1,type:{name:"string"}},displayCountAndLabel:{defaultValue:{value:"true"},description:"",name:"displayCountAndLabel",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<LinearProgressClasses>"}},color:{defaultValue:{value:"'primary'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:`The value of the progress indicator for the determinate and buffer variants.
Value between 0 and 100.`,name:"value",required:!1,type:{name:"number"}},valueBuffer:{defaultValue:null,description:`The value for the buffer variant.
Value between 0 and 100.`,name:"valueBuffer",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"'indeterminate'"},description:`The variant to use.
Use indeterminate or query when there is no progress value.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"indeterminate"'},{value:'"determinate"'},{value:'"buffer"'},{value:'"query"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const Oe={title:"Components/Progress Bar",component:B,argTypes:{}},v=r=>n(x,{width:"244px",children:n(B,{...r})}),d=v.bind({});d.args={completeStepCount:0,totalStepCount:5};const c=v.bind({});c.args={completeStepCount:2,totalStepCount:5};const m=v.bind({});m.args={completeStepCount:5,totalStepCount:5};const f=v.bind({});f.args={completeStepCount:4,totalStepCount:5,label:""};const b=v.bind({});b.args={completeStepCount:4,totalStepCount:5,displayCountAndLabel:!1};var O,R,_;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <Box width="244px">
      <ProgressBar {...args} />
    </Box>;
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var A,z,j;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <Box width="244px">
      <ProgressBar {...args} />
    </Box>;
}`,...(j=(z=c.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var M,D,U;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <Box width="244px">
      <ProgressBar {...args} />
    </Box>;
}`,...(U=(D=m.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var E,F,K;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <Box width="244px">
      <ProgressBar {...args} />
    </Box>;
}`,...(K=(F=f.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var X,H,W;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <Box width="244px">
      <ProgressBar {...args} />
    </Box>;
}`,...(W=(H=b.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const Re=["NoneComplete","TwoOutOfFive","Complete","NoLabel","NoCountAndLabel"];export{m as Complete,b as NoCountAndLabel,f as NoLabel,d as NoneComplete,c as TwoOutOfFive,Re as __namedExportsOrder,Oe as default};
