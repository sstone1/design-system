import{a as O,j as n}from"./jsx-runtime-CHAcsyq4.js";import{r as V}from"./index-CO9pbFv1.js";import{T as l,a as s}from"./toggle-C9ULJ7Sp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./DefaultPropsProvider-2af-l9uX.js";import"./generateUtilityClasses-HyxggqFg.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D-IwIA3q.js";import"./ToggleButton-CfUmts4K.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B7CczDew.js";import"./emotion-react.browser.esm-BYpQlU2q.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useForkRef-DZzpmK-L.js";import"./useEnhancedEffect-l_FsEN0U.js";import"./isFocusVisible-B8k4qzLc.js";import"./capitalize-_axBoSLA.js";import"./resolveProps-CxWqPvcr.js";const A={component:l,title:"Components/Toggle/Toggle",parameters:{design:{type:"figma",url:"TODO"}}},o=e=>{const[u,g]=V.useState("Item One");return O(l,{...e,value:u,onChange:(m,t)=>{e.onChange&&e.onChange(m,t),g(t)},children:[n(s,{value:"Item One",children:"Item One"}),n(s,{value:"Item Two",children:"Item Two"}),n(s,{value:"Item Three",children:"Item Three"})]})},a=e=>{const[u,g]=V.useState(e.value);return n(l,{...e,value:u,onChange:(m,t)=>{e.onChange&&e.onChange(m,t),g(t)},children:n(s,{value:"Item One",children:"Item One"})})},r=e=>n(l,{...e});var i,p,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | string[] | null>('Item One');
  const handleValueChange = (event: MouseEvent<HTMLElement>, newValue: string | string[] | null) => {
    if (args.onChange) {
      args.onChange(event, newValue);
    }
    setValue(newValue);
  };
  return <ToggleButtonGroup {...args} value={value} onChange={handleValueChange}>
      <ToggleButton value="Item One">Item One</ToggleButton>
      <ToggleButton value="Item Two">Item Two</ToggleButton>
      <ToggleButton value="Item Three">Item Three</ToggleButton>
    </ToggleButtonGroup>;
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var h,T,d;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | string[] | null>(args.value);
  const handleValueChange = (event: MouseEvent<HTMLElement>, newValue: string | string[] | null) => {
    if (args.onChange) {
      args.onChange(event, newValue);
    }
    setValue(newValue);
  };
  return <ToggleButtonGroup {...args} value={value} onChange={handleValueChange}>
      <ToggleButton value="Item One">Item One</ToggleButton>
    </ToggleButtonGroup>;
}`,...(d=(T=a.parameters)==null?void 0:T.docs)==null?void 0:d.source}}};var v,C,I;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <ToggleButtonGroup {...args} />;
}`,...(I=(C=r.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const F=["List","OneItem","EmptyList"];export{r as EmptyList,o as List,a as OneItem,F as __namedExportsOrder,A as default};
