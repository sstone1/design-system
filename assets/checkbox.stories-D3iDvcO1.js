import{j as e,a as R}from"./jsx-runtime-CHAcsyq4.js";import{r as q}from"./index-CO9pbFv1.js";import{C as r}from"./checkbox-CVAe5LtE.js";import{F as z}from"./FormGroup-BLMNI0WR.js";import{F as d}from"./FormControlLabel-CGobVcaz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./DefaultPropsProvider-Qc2xy7DK.js";import"./generateUtilityClasses-7uZHDCF9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D-IwIA3q.js";import"./SwitchBase-Ds3UFRdi.js";import"./useFormControl-Dpmr7vsl.js";import"./ButtonBase-spyuHJhX.js";import"./emotion-react.browser.esm-D_d3rkR8.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useForkRef-DZzpmK-L.js";import"./useEnhancedEffect-l_FsEN0U.js";import"./isFocusVisible-B8k4qzLc.js";import"./useControlled-YZkScxzg.js";import"./capitalize-my3DsAjr.js";import"./createSvgIcon-D-0vJS9S.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-CRQn5Xiz.js";import"./resolveComponentProps-R-KJbVW4.js";import"./Typography-pWh98bkc.js";import"./index-C_yWRM1m.js";import"./extendSxProp-o9rhGgwT.js";import"./useTheme-CzbpGgWX.js";const xe={component:r,title:"Components/Checkbox",parameters:{design:{type:"figma",url:"https://www.figma.com/file/TmLDXXPGbkFMMk1K1Gexmg/5.-Set-up-equity-placement-form?type=design&node-id=1100-265270&mode=design&t=zfy3Cc85ZkXjfQMF-0"}}},c=a=>e(r,{...a}),o=c.bind({});o.args={checked:!1};const t=c.bind({});t.args={checked:!0};const m=c.bind({});m.args={indeterminate:!0};const s=c.bind({});s.args={disabled:!0};const n=c.bind({});n.args={checked:!0,disabled:!0};const l=c.bind({});l.args={indeterminate:!0,disabled:!0};const i=a=>{const[X,_]=q.useState(a.checked);return e(r,{...a,checked:X,onChange:(B,u)=>{a.onChange&&a.onChange(B,u),_(u)}})};i.args={checked:!1};const p={name:"Checkboxes with labels",render:()=>R(z,{children:[e(d,{control:e(r,{...s.args}),label:"EUR"}),e(d,{control:e(r,{...n.args}),label:"GBP"}),e(d,{control:e(r,{...o.args}),label:"USD"}),e(d,{control:e(r,{...t.args}),label:"CHF"})]})};var b,g,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Checkbox {...args} />",...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,k,x;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:"args => <Checkbox {...args} />",...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var S,f,F;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Checkbox {...args} />",...(F=(f=m.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var E,D,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Checkbox {...args} />",...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var L,V,v;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:"args => <Checkbox {...args} />",...(v=(V=n.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var w,G,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Checkbox {...args} />",...(I=(G=l.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var j,M,U;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<boolean | undefined>(args.checked);
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>, newValue: boolean) => {
    if (args.onChange) {
      args.onChange(event, newValue);
    }
    setValue(newValue);
  };
  return <Checkbox {...args} checked={value} onChange={handleValueChange} />;
}`,...(U=(M=i.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var H,P,T;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Checkboxes with labels',
  render: () => <FormGroup>
      <FormControlLabel control={<Checkbox {...EmptyDisabled.args} />} label="EUR" />
      <FormControlLabel control={<Checkbox {...SelectedDisabled.args} />} label="GBP" />
      <FormControlLabel control={<Checkbox {...Empty.args} />} label="USD" />
      <FormControlLabel control={<Checkbox {...Selected.args} />} label="CHF" />
    </FormGroup>
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const Se=["Empty","Selected","Indeterminate","EmptyDisabled","SelectedDisabled","IndeterminateDisabled","Interactive","CheckboxLabel"];export{p as CheckboxLabel,o as Empty,s as EmptyDisabled,m as Indeterminate,l as IndeterminateDisabled,i as Interactive,t as Selected,n as SelectedDisabled,Se as __namedExportsOrder,xe as default};
