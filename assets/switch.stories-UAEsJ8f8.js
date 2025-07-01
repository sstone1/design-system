import{j}from"./jsx-runtime-CHAcsyq4.js";import{r as z}from"./index-CO9pbFv1.js";import{u as L}from"./index-DN1f55S5.js";import{S as M}from"./switch-BW6CxrMq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./styled-YeRgfiRQ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-2tmYIofL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./SwitchBase-B3-nHQYv.js";import"./useFormControl-Dpmr7vsl.js";import"./ButtonBase-CqaC8XFo.js";import"./emotion-react.browser.esm-Dv-6nvuE.js";import"./DefaultPropsProvider-GIfS_qv3.js";import"./assertThisInitialized-C1KLUksq.js";import"./useForkRef-DZzpmK-L.js";import"./useEnhancedEffect-D1zchTAJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./useControlled-YZkScxzg.js";const re={component:M,title:"Components/Switch",argTypes:{color:{options:["primary","secondary","highlight","success","info","warning","error"],control:{type:"select"}}},parameters:{design:{type:"figma",url:"TODO"}}},e=u=>{const[D,x]=z.useState(u.checked);return j(M,{...u,checked:D,onChange:(O,c)=>{u.onChange&&u.onChange(O,c),x(c)}})},s=e.bind({});s.args={checked:!0};const r=e.bind({});r.args={checked:!1};const t=e.bind({});t.args={size:"small"};const o=e.bind({});o.args={disabled:!0,checked:!0};const l=e.bind({});l.args={disabled:!0,checked:!1};const a=e.bind({});a.args={checked:!0};a.play=async()=>{await L.tab()};const n=e.bind({});n.args={checked:!1};n.play=async()=>{await L.tab()};var g,h,d;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | undefined>(args.checked);
  const handleValueChange = (_event: ChangeEvent<HTMLInputElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(_event, newValue);
    }
    setValue(newValue);
  };
  return <Switch {...args} checked={value} onChange={handleValueChange} />;
}`,...(d=(h=s.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | undefined>(args.checked);
  const handleValueChange = (_event: ChangeEvent<HTMLInputElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(_event, newValue);
    }
    setValue(newValue);
  };
  return <Switch {...args} checked={value} onChange={handleValueChange} />;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var V,C,v;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | undefined>(args.checked);
  const handleValueChange = (_event: ChangeEvent<HTMLInputElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(_event, newValue);
    }
    setValue(newValue);
  };
  return <Switch {...args} checked={value} onChange={handleValueChange} />;
}`,...(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var w,b,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | undefined>(args.checked);
  const handleValueChange = (_event: ChangeEvent<HTMLInputElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(_event, newValue);
    }
    setValue(newValue);
  };
  return <Switch {...args} checked={value} onChange={handleValueChange} />;
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var f,k,E;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | undefined>(args.checked);
  const handleValueChange = (_event: ChangeEvent<HTMLInputElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(_event, newValue);
    }
    setValue(newValue);
  };
  return <Switch {...args} checked={value} onChange={handleValueChange} />;
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var _,T,F;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | undefined>(args.checked);
  const handleValueChange = (_event: ChangeEvent<HTMLInputElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(_event, newValue);
    }
    setValue(newValue);
  };
  return <Switch {...args} checked={value} onChange={handleValueChange} />;
}`,...(F=(T=a.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var y,H,I;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | undefined>(args.checked);
  const handleValueChange = (_event: ChangeEvent<HTMLInputElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(_event, newValue);
    }
    setValue(newValue);
  };
  return <Switch {...args} checked={value} onChange={handleValueChange} />;
}`,...(I=(H=n.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const te=["True","False","Small","DisabledTrue","DisabledFalse","FocusedTrue","FocusedFalse"];export{l as DisabledFalse,o as DisabledTrue,r as False,n as FocusedFalse,a as FocusedTrue,t as Small,s as True,te as __namedExportsOrder,re as default};
