import{a as X,j as b}from"./jsx-runtime-CHAcsyq4.js";import{r as T}from"./index-CO9pbFv1.js";import{T as $,a as x}from"./toggle-D68YYOEl.js";import{s as A}from"./generateUtilityClasses-7uZHDCF9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./DefaultPropsProvider-Qc2xy7DK.js";import"./ToggleButton-BTt1BnWF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-spyuHJhX.js";import"./emotion-react.browser.esm-D_d3rkR8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D-IwIA3q.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useForkRef-DZzpmK-L.js";import"./useEnhancedEffect-l_FsEN0U.js";import"./isFocusVisible-B8k4qzLc.js";import"./capitalize-my3DsAjr.js";import"./resolveProps-CxWqPvcr.js";const J=({trueText:e="Yes",falseText:p="No",value:n,onChange:o,disabled:l,...m})=>{const h=n!==void 0,[C,y]=T.useState(!!n);T.useEffect(()=>{h&&y(!!n)},[n,h]);const w=a=>{if(l)return;const f=!C;h&&o?o(a,f):y(f)},v=h?!!n:C;return X($,{onKeyDown:a=>{(a.key===" "||a.key==="Enter")&&!l&&(a.preventDefault(),w(a))},role:"switch","aria-checked":v,tabIndex:0,onClick:w,value:v,onChange:(a,f)=>{a.stopPropagation(),o&&o(a,f)},exclusive:!0,disabled:l,...m,children:[b(x,{color:"success",tabIndex:-1,value:!0,"aria-label":e,disabled:l,selected:v,children:e}),b(x,{color:"error",tabIndex:-1,value:!1,"aria-label":p,disabled:l,selected:!v,children:p})]})},V=A(J)(({theme:e})=>({"&":{border:"none",outline:`1px solid ${e.palette.neutral[25]}`,backgroundColor:e.palette.neutral[100],padding:"4px",gap:"1px","&:focus-visible":{outline:`1px solid ${e.palette.info.dark}`},cursor:"pointer","&.Mui-disabled":{border:"none"}},"& .MuiToggleButton-root":{border:"none !important",textTransform:"none !important",borderRadius:"6px !important",padding:"6px 12px",margin:"0 1px !important",fontSize:e.typography.fontSize,color:e.palette.neutral[400],"&:hover":{backgroundColor:"transparent"},"&.Mui-selected":{backgroundColor:e.palette.neutral[25],color:e.palette.neutral[600],"&:hover":{backgroundColor:e.palette.neutral[25]}},"&.Mui-disabled":{backgroundColor:e.palette.neutral[100],color:e.palette.neutral[300],"&.Mui-selected":{color:e.palette.neutral[400]}}}}));try{V.displayName="StyledBooleanToggle",V.__docgenInfo={description:"Boolean Toggle (Switch) component. Default is `[ Yes |  No ]`.",displayName:"StyledBooleanToggle",props:{trueText:{defaultValue:{value:"Yes"},description:"",name:"trueText",required:!1,type:{name:"string"}},falseText:{defaultValue:{value:"No"},description:"",name:"falseText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ToggleButtonGroupClasses>"}},color:{defaultValue:{value:"'standard'"},description:`The color of the button when it is selected.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).`,name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'},{value:'"standard"'}]}},exclusive:{defaultValue:{value:"false"},description:"If `true`, only allow one of the child ToggleButton values to be selected.",name:"exclusive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button group will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback fired when the value changes.\n@param event The event source of the callback.\n@param value of the selected buttons. When `exclusive` is true\nthis is a single value; when false an array of selected values. If no value\nis selected and `exclusive` is true the value is null; when false an empty array.",name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, value: any) => void"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The component orientation (layout flow direction).",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:`The currently selected value within the group or an array of selected
values when \`exclusive\` is false.

The value must have reference equality with the option in order to be selected.`,name:"value",required:!1,type:{name:"any"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const me={component:V,title:"Components/Toggle/Boolean Toggle",parameters:{design:{type:"figma",url:"https://www.figma.com/file/TmLDXXPGbkFMMk1K1Gexmg/5.-Set-up-equity-placement-form?type=design&node-id=1100-265500&mode=dev"}}},t=e=>{const[p,n]=T.useState(e.value);return b(V,{...e,value:p,onChange:(l,m)=>{e.onChange&&e.onChange(l,m),n(m)}})},r=t.bind({});r.args={value:!0};const s=t.bind({});s.args={value:!1};const u=t.bind({});u.args={value:null};const i=t.bind({});i.args={value:!0,disabled:!0};const d=t.bind({});d.args={value:!1,disabled:!0};const c=t.bind({});c.args={value:null,disabled:!0};const g=t.bind({});g.args={value:!0,trueText:"Yes Please",falseText:"No Thank You"};var S,M,E;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | null>(args.value);
  const handleValueChange = (event: MouseEvent<HTMLElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(event, newValue);
    }
    setValue(newValue);
  };
  return <BooleanToggle {...args} value={value} onChange={handleValueChange} />;
}`,...(E=(M=r.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var B,k,q;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | null>(args.value);
  const handleValueChange = (event: MouseEvent<HTMLElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(event, newValue);
    }
    setValue(newValue);
  };
  return <BooleanToggle {...args} value={value} onChange={handleValueChange} />;
}`,...(q=(k=s.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var D,N,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | null>(args.value);
  const handleValueChange = (event: MouseEvent<HTMLElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(event, newValue);
    }
    setValue(newValue);
  };
  return <BooleanToggle {...args} value={value} onChange={handleValueChange} />;
}`,...(_=(N=u.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var I,z,L;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | null>(args.value);
  const handleValueChange = (event: MouseEvent<HTMLElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(event, newValue);
    }
    setValue(newValue);
  };
  return <BooleanToggle {...args} value={value} onChange={handleValueChange} />;
}`,...(L=(z=i.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var H,F,Y;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | null>(args.value);
  const handleValueChange = (event: MouseEvent<HTMLElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(event, newValue);
    }
    setValue(newValue);
  };
  return <BooleanToggle {...args} value={value} onChange={handleValueChange} />;
}`,...(Y=(F=d.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};var G,K,j;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | null>(args.value);
  const handleValueChange = (event: MouseEvent<HTMLElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(event, newValue);
    }
    setValue(newValue);
  };
  return <BooleanToggle {...args} value={value} onChange={handleValueChange} />;
}`,...(j=(K=c.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var R,W,O;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | null>(args.value);
  const handleValueChange = (event: MouseEvent<HTMLElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(event, newValue);
    }
    setValue(newValue);
  };
  return <BooleanToggle {...args} value={value} onChange={handleValueChange} />;
}`,...(O=(W=g.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const he=["True","False","Null","DisabledTrue","DisabledFalse","DisabledNull","CustomTextValues"];export{g as CustomTextValues,d as DisabledFalse,c as DisabledNull,i as DisabledTrue,s as False,u as Null,r as True,he as __namedExportsOrder,me as default};
