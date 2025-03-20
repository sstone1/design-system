import{j as o,a as r,F as b}from"./jsx-runtime-CHAcsyq4.js";import{A as io}from"./alert-title-CN1cE6_e.js";import{C as k}from"./checkbox-BVAYQxx3.js";import{F as n}from"./form-control-Co61zMSX.js";import{R as mo,F}from"./form-control-label-C-iAHR2a.js";import{F as t,a as d}from"./form-label-4wbkqJxy.js";import{F as z}from"./form-group-DMCrIvVD.js";import{I as l}from"./input-B2hw29QA.js";import"./number-input-W52VZWQD.js";import"./currency-input-HDEgtlym.js";import{R as I}from"./radio-BH18ac4x.js";import{r as w}from"./index-CO9pbFv1.js";import{c as Co,B}from"./Box-XHGtQXL3.js";import{j as go,u as M,v as P,w as yo,x as Lo,y as xo,z as _}from"./generateUtilityClasses-7uZHDCF9.js";import{s as So}from"./styled-DGtvbDLL.js";import{e as Go}from"./extendSxProp-o9rhGgwT.js";import{a as Eo}from"./useThemeProps-DxVlPEjg.js";import{g as ko}from"./generateUtilityClass-BtcU_pBl.js";import{f as D}from"./FormControl-BYpCVQg4.js";import{f as Io,F as co}from"./FormGroup-BLMNI0WR.js";import"./complete-DfKDyCth.js";import"./in-progress-BhDVRM7c.js";import"./not-started-C2GCbdX0.js";import"./edit-CoTvdx8D.js";import"./chevron-CuO2MovR.js";import"./tick-D-0rNWa6.js";import"./tick-circle-DEx8Rvru.js";import"./info-outlined-BO35JMI8.js";import"./check-circle-N73EjHKU.js";import"./error-outlined-Cly8x-70.js";import"./index-BdESLZbP.js";import"./cross-CurIqIFj.js";import"./upload-CswRUNEI.js";import"./trash-vMOCOH0P.js";import"./cog-outlined-C34frKMW.js";import"./warning-DrjxdJ9G.js";import"./DefaultPropsProvider-Qc2xy7DK.js";import"./useSlot-CRQn5Xiz.js";import"./resolveComponentProps-R-KJbVW4.js";import"./useForkRef-DZzpmK-L.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./alertClasses-D0xC1ff2.js";import"./createSvgIcon-D-0vJS9S.js";import"./capitalize-my3DsAjr.js";import"./Close-Bk6UzDMS.js";import"./Paper-C6YV2L4g.js";import"./useTheme-aPSyNP_P.js";import"./useTheme-CzbpGgWX.js";import"./IconButton-AbnUAF06.js";import"./ButtonBase-spyuHJhX.js";import"./emotion-react.browser.esm-D_d3rkR8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D-IwIA3q.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useEnhancedEffect-l_FsEN0U.js";import"./isFocusVisible-B8k4qzLc.js";import"./useId-Dw7xLATF.js";import"./CircularProgress-DQj5DzX1.js";import"./Typography-pWh98bkc.js";import"./index-C_yWRM1m.js";import"./SwitchBase-Ds3UFRdi.js";import"./useFormControl-Dpmr7vsl.js";import"./useControlled-YZkScxzg.js";import"./FormControlLabel-CGobVcaz.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CWh9BxH-.js";import"./formLabelClasses-kwtaHi0q.js";import"./OutlinedInput-eTQ0icg1.js";import"./isHostComponent-DVu5iVWx.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-DIR61fab.js";import"./InputAdornment-O-UyIRY6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./isMuiElement-CAFVGe91.js";function vo(e,m,c=void 0){const p={};for(const h in e){const s=e[h];let f="",C=!0;for(let a=0;a<s.length;a+=1){const i=s[a];i&&(f+=(C===!0?"":" ")+m(i),C=!1,c&&c[i]&&(f+=" "+c[i]))}p[h]=f}return p}const No=go(),Po=So("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,m)=>m.root});function Do(e){return Eo({props:e,name:"MuiStack",defaultTheme:No})}function wo(e,m){const c=w.Children.toArray(e).filter(Boolean);return c.reduce((p,h,s)=>(p.push(h),s<c.length-1&&p.push(w.cloneElement(m,{key:`separator-${s}`})),p),[])}const Ao=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Ro=({ownerState:e,theme:m})=>{let c={display:"flex",flexDirection:"column",...M({theme:m},P({values:e.direction,breakpoints:m.breakpoints.values}),p=>({flexDirection:p}))};if(e.spacing){const p=yo(m),h=Object.keys(m.breakpoints.values).reduce((a,i)=>((typeof e.spacing=="object"&&e.spacing[i]!=null||typeof e.direction=="object"&&e.direction[i]!=null)&&(a[i]=!0),a),{}),s=P({values:e.direction,base:h}),f=P({values:e.spacing,base:h});typeof s=="object"&&Object.keys(s).forEach((a,i,v)=>{if(!s[a]){const N=i>0?s[v[i-1]]:"column";s[a]=N}}),c=Lo(c,M({theme:m},f,(a,i)=>e.useFlexGap?{gap:_(p,a)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Ao(i?s[i]:e.direction)}`]:_(p,a)}}))}return c=xo(m.breakpoints,c),c};function Wo(e={}){const{createStyledComponent:m=Po,useThemeProps:c=Do,componentName:p="MuiStack"}=e,h=()=>vo({root:["root"]},a=>ko(p,a),{}),s=m(Ro);return w.forwardRef(function(a,i){const v=c(a),A=Go(v),{component:N="div",direction:so="column",spacing:po=0,divider:R,children:W,className:uo,useFlexGap:ho=!1,...Fo}=A,bo={direction:so,spacing:po,useFlexGap:ho},fo=h();return o(s,{as:N,ownerState:bo,ref:i,className:Co(fo.root,uo),...Fo,children:R?wo(W,R):W})})}const zo=Wo(),u=({children:e})=>r(zo,{width:"100%",direction:"row",sx:{marginTop:5,"&:not(:last-child)":{marginBottom:5},[`& .${D.root}~.${D.root}`]:{marginTop:4},[`& .${Io.root}~.${D.root}`]:{marginTop:4}},children:[o(B,{sx:{marginLeft:5,marginRight:4,width:"4px",borderRadius:5,backgroundColor:"neutral.100"}}),o(B,{flex:1,children:e})]});try{u.displayName="FormGroupExpanded",u.__docgenInfo={description:`An indented group of form controls, representing an expanded piece of the form, such as
follow up questions for a certain form control or form element.`,displayName:"FormGroupExpanded",props:{}}}catch{}const ne={component:u,title:"Components/Forms/Form Group Expanded"},g=e=>r(b,{children:[r(n,{...e,children:[o(t,{htmlFor:"name",children:"Main control"}),o(d,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus explicabo rerum praesentium, itaque cumque!"}),o(l,{id:"main",placeholder:"Main"})]}),r(u,{children:[r(n,{...e,optional:!0,children:[o(t,{htmlFor:"name",children:"Sub control 1"}),o(l,{id:"sub 1",placeholder:"Sub 1"})]}),r(n,{...e,optional:!0,children:[o(t,{htmlFor:"name",children:"Sub control 2"}),o(l,{id:"sub2",placeholder:"Sub 2"})]})]})]}),y=e=>r(b,{children:[r(n,{...e,children:[o(t,{component:"span",htmlFor:"name",children:"Main control"}),o(d,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, sunt?"})]}),r(u,{children:[r(n,{...e,children:[o(t,{htmlFor:"name",children:"Sub control1"}),o(l,{id:"sub 1",placeholder:"Sub 1"})]}),r(n,{...e,children:[o(t,{htmlFor:"name",children:"Sub control 2"}),o(l,{id:"sub2",placeholder:"Sub 2"})]})]})]}),L=e=>r(b,{children:[o(n,{...e,children:o(t,{component:"span",htmlFor:"name",children:"Main control"})}),r(u,{children:[r(n,{...e,children:[o(t,{htmlFor:"name",children:"Sub control1"}),o(l,{id:"sub 1",placeholder:"Sub 1"})]}),r(n,{...e,children:[o(t,{htmlFor:"name",children:"Sub control 2"}),o(l,{id:"sub2",placeholder:"Sub 2"})]})]})]}),x=()=>r(b,{children:[r(n,{children:[o(t,{htmlFor:"name",children:"Name"}),o(d,{children:"Example description"}),o(l,{placeholder:"Name"})]}),r(u,{children:[r(n,{children:[o(t,{htmlFor:"preferredName",children:"Preferred name"}),o(d,{children:"What you would like to be called"}),o(l,{placeholder:"Preferred name"})]}),r(n,{children:[o(t,{htmlFor:"spyName",children:"Secret spy name"}),o(d,{children:"What do we use for your code name?"}),o(l,{placeholder:"Spy name"}),o(io,{severity:"info",children:"Pick something cool or we will laugh at you"})]})]}),r(n,{children:[o(t,{htmlFor:"weapon",children:"Weapon of choice"}),o(d,{children:"Pick something funny"}),o(l,{placeholder:"Pocket sand"})]})]}),S=()=>r(b,{children:[r(z,{title:"Group 1",children:[r(n,{children:[o(t,{htmlFor:"name",children:"Name"}),o(d,{children:"Example description"}),o(l,{placeholder:"Name"})]}),r(u,{children:[r(n,{children:[o(t,{htmlFor:"preferredName",children:"Preferred name"}),o(d,{children:"What you would like to be called"}),o(l,{placeholder:"Preferred name"})]}),r(n,{children:[o(t,{htmlFor:"spyName",children:"Secret spy name"}),o(d,{children:"What do we use for your code name?"}),o(l,{placeholder:"Spy name"}),o(io,{severity:"info",children:"Pick something cool or we will laugh at you"})]})]})]}),o(z,{title:"Group 2",children:r(n,{children:[o(t,{htmlFor:"weapon",children:"Weapon of choice"}),o(d,{children:"Pick something funny"}),o(l,{placeholder:"Pocket sand"})]})})]}),G=()=>r(b,{children:[r(n,{children:[o(t,{htmlFor:"cool",children:"Are you cool?"}),r(mo,{id:"cool",children:[o(F,{value:"true",control:o(I,{}),label:"Yes"}),r(u,{children:[r(co,{children:[o(F,{control:o(k,{}),label:"Everything is fine"}),o(F,{control:o(k,{}),label:"Nothing is wrong"})]}),r(n,{children:[o(t,{htmlFor:"baz",children:"Baz"}),o(l,{id:"baz"})]})]}),o(F,{value:"false",control:o(I,{}),label:"No"})]})]}),r(n,{children:[o(t,{htmlFor:"name",children:"Question 2"}),o(l,{})]})]}),E=()=>r(b,{children:[r(n,{children:[o(t,{htmlFor:"cool",children:"Are you cool?"}),r(mo,{id:"cool",children:[o(F,{value:"true",control:o(I,{}),label:"Yes"}),o(F,{value:"false",control:o(I,{}),label:"No"}),r(u,{children:[r(co,{children:[o(F,{control:o(k,{}),label:"Everything is fine"}),o(F,{control:o(k,{}),label:"Nothing is wrong"})]}),r(n,{children:[o(t,{htmlFor:"baz",children:"Baz"}),o(l,{id:"baz"})]})]})]})]}),r(n,{children:[o(t,{htmlFor:"name",children:"Question 2"}),o(l,{})]})]});var j,T,V;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <>
      <FormControl {...args}>
        <FormLabel htmlFor="name">Main control</FormLabel>
        <FormDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus explicabo rerum
          praesentium, itaque cumque!
        </FormDescription>
        <Input id="main" placeholder="Main" />
      </FormControl>

      <FormGroupExpanded>
        <FormControl {...args} optional>
          <FormLabel htmlFor="name">Sub control 1</FormLabel>
          <Input id="sub 1" placeholder="Sub 1" />
        </FormControl>

        <FormControl {...args} optional>
          <FormLabel htmlFor="name">Sub control 2</FormLabel>
          <Input id="sub2" placeholder="Sub 2" />
        </FormControl>
      </FormGroupExpanded>
    </>;
}`,...(V=(T=g.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var $,O,q;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return <>
      <FormControl {...args}>
        <FormLabel component="span" htmlFor="name">
          Main control
        </FormLabel>
        <FormDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, sunt?
        </FormDescription>
      </FormControl>

      <FormGroupExpanded>
        <FormControl {...args}>
          <FormLabel htmlFor="name">Sub control1</FormLabel>
          <Input id="sub 1" placeholder="Sub 1" />
        </FormControl>

        <FormControl {...args}>
          <FormLabel htmlFor="name">Sub control 2</FormLabel>
          <Input id="sub2" placeholder="Sub 2" />
        </FormControl>
      </FormGroupExpanded>
    </>;
}`,...(q=(O=y.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var Q,Y,U;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  return <>
      <FormControl {...args}>
        <FormLabel component="span" htmlFor="name">
          Main control
        </FormLabel>
      </FormControl>

      <FormGroupExpanded>
        <FormControl {...args}>
          <FormLabel htmlFor="name">Sub control1</FormLabel>
          <Input id="sub 1" placeholder="Sub 1" />
        </FormControl>

        <FormControl {...args}>
          <FormLabel htmlFor="name">Sub control 2</FormLabel>
          <Input id="sub2" placeholder="Sub 2" />
        </FormControl>
      </FormGroupExpanded>
    </>;
}`,...(U=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`() => <>
    <FormControl>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormDescription>Example description</FormDescription>
      <Input placeholder="Name" />
    </FormControl>

    <FormGroupExpanded>
      <FormControl>
        <FormLabel htmlFor="preferredName">Preferred name</FormLabel>
        <FormDescription>What you would like to be called</FormDescription>
        <Input placeholder="Preferred name" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="spyName">Secret spy name</FormLabel>
        <FormDescription>What do we use for your code name?</FormDescription>
        <Input placeholder="Spy name" />
        <Alert severity="info">Pick something cool or we will laugh at you</Alert>
      </FormControl>
    </FormGroupExpanded>

    <FormControl>
      <FormLabel htmlFor="weapon">Weapon of choice</FormLabel>
      <FormDescription>Pick something funny</FormDescription>
      <Input placeholder="Pocket sand" />
    </FormControl>
  </>`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Z,oo;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`() => <>
    <FormGroup title="Group 1">
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormDescription>Example description</FormDescription>
        <Input placeholder="Name" />
      </FormControl>

      <FormGroupExpanded>
        <FormControl>
          <FormLabel htmlFor="preferredName">Preferred name</FormLabel>
          <FormDescription>What you would like to be called</FormDescription>
          <Input placeholder="Preferred name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="spyName">Secret spy name</FormLabel>
          <FormDescription>What do we use for your code name?</FormDescription>
          <Input placeholder="Spy name" />
          <Alert severity="info">Pick something cool or we will laugh at you</Alert>
        </FormControl>
      </FormGroupExpanded>
    </FormGroup>

    <FormGroup title="Group 2">
      <FormControl>
        <FormLabel htmlFor="weapon">Weapon of choice</FormLabel>
        <FormDescription>Pick something funny</FormDescription>
        <Input placeholder="Pocket sand" />
      </FormControl>
    </FormGroup>
  </>`,...(oo=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:oo.source}}};var ro,eo,no;G.parameters={...G.parameters,docs:{...(ro=G.parameters)==null?void 0:ro.docs,source:{originalSource:`() => <>
    <FormControl>
      <FormLabel htmlFor="cool">Are you cool?</FormLabel>

      <RadioGroup id="cool">
        <FormControlLabel value={true.toString()} control={<Radio />} label="Yes" />

        <FormGroupExpanded>
          <FormControlGroup>
            <FormControlLabel control={<Checkbox />} label="Everything is fine" />
            <FormControlLabel control={<Checkbox />} label="Nothing is wrong" />
          </FormControlGroup>

          <FormControl>
            <FormLabel htmlFor="baz">Baz</FormLabel>
            <Input id="baz" />
          </FormControl>
        </FormGroupExpanded>

        <FormControlLabel value={false.toString()} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel htmlFor="name">Question 2</FormLabel>
      <Input />
    </FormControl>
  </>`,...(no=(eo=G.parameters)==null?void 0:eo.docs)==null?void 0:no.source}}};var to,lo,ao;E.parameters={...E.parameters,docs:{...(to=E.parameters)==null?void 0:to.docs,source:{originalSource:`() => <>
    <FormControl>
      <FormLabel htmlFor="cool">Are you cool?</FormLabel>

      <RadioGroup id="cool">
        <FormControlLabel value={true.toString()} control={<Radio />} label="Yes" />
        <FormControlLabel value={false.toString()} control={<Radio />} label="No" />

        <FormGroupExpanded>
          <FormControlGroup>
            <FormControlLabel control={<Checkbox />} label="Everything is fine" />
            <FormControlLabel control={<Checkbox />} label="Nothing is wrong" />
          </FormControlGroup>

          <FormControl>
            <FormLabel htmlFor="baz">Baz</FormLabel>
            <Input id="baz" />
          </FormControl>
        </FormGroupExpanded>
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel htmlFor="name">Question 2</FormLabel>
      <Input />
    </FormControl>
  </>`,...(ao=(lo=E.parameters)==null?void 0:lo.docs)==null?void 0:ao.source}}};const te=["ExpandedWithInputs","ParentNoInput","ParentLabelOnly","AsExpandedFormControl","AsLastExpandedFormControl","AsExpandedInput","AsLastExpandedInput"];export{x as AsExpandedFormControl,G as AsExpandedInput,S as AsLastExpandedFormControl,E as AsLastExpandedInput,g as ExpandedWithInputs,L as ParentLabelOnly,y as ParentNoInput,te as __namedExportsOrder,ne as default};
