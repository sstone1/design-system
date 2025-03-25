import{j as n,a as I}from"./jsx-runtime-CHAcsyq4.js";import{u as w}from"./useTheme-CuVpbpSA.js";import{S as x,a as _,b as h}from"./Stepper-DMVNdS_B.js";import{s as E}from"./generateUtilityClasses-HyxggqFg.js";import{B as V}from"./Box-B2aKkEL4.js";import"./index-CO9pbFv1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useTheme-D1elzDqp.js";import"./DefaultPropsProvider-2af-l9uX.js";import"./stepConnectorClasses-k15g7fPB.js";import"./useSlot-DP9B20k_.js";import"./resolveComponentProps-BELqttVG.js";import"./useForkRef-DZzpmK-L.js";import"./createSvgIcon-CLw04lHl.js";import"./capitalize-_axBoSLA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D-IwIA3q.js";import"./extendSxProp-DXPFALOx.js";const m=({label:e,isActive:t,color:a,fillColor:o,height:i=32,width:r=32,...c})=>{const l=w();return t?n(x,{...c,icon:I("svg",{viewBox:"0 0 24 24",width:r,height:i,overflow:"visible",children:[n("circle",{cx:"12",cy:"12",r:"12",stroke:a,fill:o}),n("circle",{cx:"12",cy:"12",r:"3",fill:a,stroke:a})]})}):n(x,{...c,sx:{width:`${r}px`,height:`${i}px`,"*":{fontFamily:l.typography.fontFamily,fontSize:"12px !important",fontWeight:"300 !important"}},icon:e})};try{m.displayName="StepIconComponent",m.__docgenInfo={description:"",displayName:"StepIconComponent",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},fillColor:{defaultValue:null,description:"",name:"fillColor",required:!0,type:{name:"string"}},height:{defaultValue:{value:"32"},description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"32"},description:"",name:"width",required:!1,type:{name:"number"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<StepIconClasses>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},fontSize:{defaultValue:{value:"'medium'"},description:"The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"inherit"'},{value:'"large"'},{value:'"medium"'}]}},shapeRendering:{defaultValue:null,description:`The shape-rendering attribute. The behavior of the different options is described on the
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
If you are having issues with blurry icons you should investigate this prop.`,name:"shapeRendering",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},icon:{defaultValue:null,description:"The label displayed in the step icon.",name:"icon",required:!0,type:{name:"ReactNode"}},error:{defaultValue:{value:"false"},description:"If `true`, the step is marked as failed.",name:"error",required:!1,type:{name:"boolean"}},htmlColor:{defaultValue:null,description:"Applies a color attribute to the SVG element.",name:"htmlColor",required:!1,type:{name:"string"}},inheritViewBox:{defaultValue:{value:"false"},description:"If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`\nprop will be ignored.\nUseful when you want to reference a custom `component` and have `SvgIcon` pass that\n`component`'s viewBox to the root node.",name:"inheritViewBox",required:!1,type:{name:"boolean"}},titleAccess:{defaultValue:null,description:`Provides a human-readable title for the element that contains it.
https://www.w3.org/TR/SVG-access/#Equivalent`,name:"titleAccess",required:!1,type:{name:"string"}},viewBox:{defaultValue:{value:"'0 0 24 24'"},description:`Allows you to redefine what the coordinates without units mean inside an SVG element.
For example, if the SVG element is 500 (width) by 200 (height),
and you pass viewBox="0 0 50 20",
this means that the coordinates inside the SVG will go from the top left corner (0,0)
to bottom right (50,20) and each unit will be worth 10px.`,name:"viewBox",required:!1,type:{name:"string"}},active:{defaultValue:{value:"false"},description:"Whether this step is active.",name:"active",required:!1,type:{name:"boolean"}},completed:{defaultValue:{value:"false"},description:"Mark the step as completed. Is passed to child components.",name:"completed",required:!1,type:{name:"boolean"}}}}}catch{}var d=(e=>(e.COMPLETED="completed",e.IN_PROGRESS="inProgress",e.NOT_STARTED="notStarted",e))(d||{});const T=E(_)(({theme:e,stepcolor:t})=>({"&.MuiStepLabel-vertical":{paddingTop:"0",paddingBottom:"16px"},"&.MuiStepLabel-vertical:last-child":{paddingBottom:0},"& .MuiStepLabel-labelContainer .MuiStepLabel-label":{color:t,fontSize:"16px",fontWeight:"500"},"& .MuiStepLabel-iconContainer":{paddingRight:"12px","& .MuiStepIcon-root":{stroke:t,color:e.palette.neutral[0],overflow:"visible"},"& .MuiStepIcon-text":{fill:t,fontWeight:"500"}}})),u=({index:e,isActive:t,status:a,children:o,stepIconProps:i})=>{const r=w(),l={completed:r.palette.success.dark,inProgress:r.palette.warning.dark,notStarted:r.palette.neutral[500]}[a];return n(T,{stepcolor:l,StepIconComponent:()=>m({label:String(e+1),isActive:t,color:l,fillColor:r.palette.neutral[0],icon:String(e+1),...i}),children:o})};try{u.displayName="StepLabel",u.__docgenInfo={description:"",displayName:"StepLabel",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"completed"'},{value:'"inProgress"'},{value:'"notStarted"'}]}},stepIconProps:{defaultValue:null,description:"",name:"stepIconProps",required:!1,type:{name:"Partial<StepIconComponentProps>"}}}}}catch{}const $={title:"Components/Stepper (Legacy)",component:h,args:{activeStep:0,orientation:"vertical",sx:{gap:"24px"}},argTypes:{iconHeight:{control:{type:"range",min:1,max:64,step:1},defaultValue:32},iconWidth:{control:{type:"range",min:1,max:64,step:1},defaultValue:32}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/TmLDXXPGbkFMMk1K1Gexmg/5.-Set-up-equity-placement-form?type=design&node-id=1100-264839&mode=dev"}}},q=[{label:"First step",status:d.COMPLETED},{label:"Second step",status:d.IN_PROGRESS},{label:"Third step",status:d.NOT_STARTED}],s=({iconWidth:e,iconHeight:t,...a})=>n(V,{sx:{width:"244px",height:"100%",boxShadow:"0px 4px 4px 0px rgba(248, 248, 248, 0.25) inset, 0px 4px 4px 0px #EEE",padding:"31px 19px",borderRadius:"12px",overflow:"auto hidden"},children:n(h,{...a,children:q.map((o,i)=>n(u,{index:i,isActive:a.activeStep===i,status:o.status,stepIconProps:{width:e,height:t},children:o.label}))})}),p=({iconWidth:e,iconHeight:t,...a})=>n(V,{sx:{display:"inline-block",height:"100%",boxShadow:"0px 4px 4px 0px rgba(248, 248, 248, 0.25) inset, 0px 4px 4px 0px #EEE",padding:"31px 19px",borderRadius:"12px",overflow:"hidden"},children:n(h,{...a,children:q.map((o,i)=>n(u,{index:i,isActive:a.activeStep===i,status:o.status,stepIconProps:{width:e,height:t},children:o.label}))})});p.args={orientation:"horizontal"};var f,g,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`({
  iconWidth,
  iconHeight,
  ...args
}) => <Box sx={{
  width: '244px',
  height: '100%',
  boxShadow: '0px 4px 4px 0px rgba(248, 248, 248, 0.25) inset, 0px 4px 4px 0px #EEE',
  padding: '31px 19px',
  borderRadius: '12px',
  overflow: 'auto hidden'
}}>
    <Stepper {...args}>
      {primarySteps.map((step, index) => <StepLabel index={index} isActive={args.activeStep === index} status={step.status} stepIconProps={{
      width: iconWidth,
      height: iconHeight
    }}>
          {step.label}
        </StepLabel>)}
    </Stepper>
  </Box>`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var b,v,y;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`({
  iconWidth,
  iconHeight,
  ...args
}) => <Box sx={{
  display: 'inline-block',
  height: '100%',
  boxShadow: '0px 4px 4px 0px rgba(248, 248, 248, 0.25) inset, 0px 4px 4px 0px #EEE',
  padding: '31px 19px',
  borderRadius: '12px',
  overflow: 'hidden'
}}>
    <Stepper {...args}>
      {primarySteps.map((step, index) => <StepLabel index={index} isActive={args.activeStep === index} status={step.status} stepIconProps={{
      width: iconWidth,
      height: iconHeight
    }}>
          {step.label}
        </StepLabel>)}
    </Stepper>
  </Box>`,...(y=(v=p.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const U=["VerticalStepper","HorizontalStepper"];export{p as HorizontalStepper,s as VerticalStepper,U as __namedExportsOrder,$ as default};
