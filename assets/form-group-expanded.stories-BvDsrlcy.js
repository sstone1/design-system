import{j as o,a as r,F as h}from"./jsx-runtime-CHAcsyq4.js";import{A as mo}from"./alert-title-D10_km9y.js";import{C as G}from"./checkbox-IodTBCyH.js";import{F as n}from"./form-control-D0u-BcF8.js";import{R as io,F}from"./form-control-label-DRhWeUJH.js";import{F as t,a as d}from"./form-label-CDmDs_vH.js";import{F as z}from"./form-group-DOaX4o_G.js";import{I as l}from"./input-zOm8yLS8.js";import"./number-input-DXFtFAkd.js";import"./currency-input-H_8AuPR4.js";import"./phone-number-input-DeRe-Wn_.js";import{R as E}from"./radio-B52-c-3I.js";import{r as v}from"./index-CO9pbFv1.js";import{j as Co,w as B,x as N,y as go,z as yo,A as Lo,f as xo,B as M,a as So}from"./styled-YeRgfiRQ.js";import{s as Go}from"./styled-_Hnp4Gd7.js";import{e as Eo}from"./extendSxProp-BJFBh0CD.js";import{a as ko}from"./useThemeProps-D7Ux6oPF.js";import{c as Io}from"./DefaultPropsProvider-GIfS_qv3.js";import{f as P}from"./FormControl-n5stJSNI.js";import{f as No,F as co}from"./FormGroup-BvhknLtS.js";import{B as _}from"./Box-BQkYfaWE.js";import"./complete-DfKDyCth.js";import"./in-progress-BhDVRM7c.js";import"./not-started-C2GCbdX0.js";import"./edit-CoTvdx8D.js";import"./chevron-CuO2MovR.js";import"./tick-D-0rNWa6.js";import"./tick-circle-DEx8Rvru.js";import"./info-outlined-BO35JMI8.js";import"./check-circle-N73EjHKU.js";import"./error-outlined-Cly8x-70.js";import"./index-BdESLZbP.js";import"./cross-CurIqIFj.js";import"./upload-CswRUNEI.js";import"./trash-vMOCOH0P.js";import"./cog-outlined-C34frKMW.js";import"./warning-DrjxdJ9G.js";import"./useSlot-rKYfvtZX.js";import"./resolveComponentProps-CiaLVUp9.js";import"./useForkRef-DZzpmK-L.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./alertClasses-B1UyU-6O.js";import"./createSvgIcon-CWX8OS4s.js";import"./Close-CtYGqAau.js";import"./Paper-CJvehd4j.js";import"./useTheme-ComXvnLb.js";import"./useTheme-DyIePcff.js";import"./IconButton-D_XHKFyE.js";import"./ButtonBase-CqaC8XFo.js";import"./emotion-react.browser.esm-Dv-6nvuE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-2tmYIofL.js";import"./assertThisInitialized-C1KLUksq.js";import"./useEnhancedEffect-D1zchTAJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./useId-Dw7xLATF.js";import"./CircularProgress-DZ31NnjH.js";import"./Typography-B9EEOqS3.js";import"./index-DHjCJufJ.js";import"./SwitchBase-B3-nHQYv.js";import"./useFormControl-Dpmr7vsl.js";import"./useControlled-YZkScxzg.js";import"./FormControlLabel-D0_JtY-5.js";import"./formControlState-Dq1zat_P.js";import"./TextField-CY9PGxTw.js";import"./formLabelClasses-Bqyg3GV9.js";import"./Select-Bn0XSVOM.js";import"./Menu-B35cedZz.js";import"./index-A5tg15ia.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-DIR61fab.js";import"./createChainedFunction-BO_9K8Jh.js";import"./utils-IYGL4P5N.js";import"./index-BT32HCm8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./List--keKdrVz.js";import"./useSlotProps-C-1mxcRN.js";import"./utils-DoM3o7-Q.js";import"./OutlinedInput-DEIaZMH-.js";import"./InputAdornment-CIpAdJhB.js";import"./ListItemText-Cjoa6llw.js";import"./MenuItem-DSnCBr0u.js";import"./dividerClasses-CyVahA2_.js";import"./getThemeProps-CkBDv-pi.js";import"./isMuiElement-CAFVGe91.js";const Po=Co(),vo=Go("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,a)=>a.root});function Do(e){return ko({props:e,name:"MuiStack",defaultTheme:Po})}function wo(e,a){const s=v.Children.toArray(e).filter(Boolean);return s.reduce((p,b,i)=>(p.push(b),i<s.length-1&&p.push(v.cloneElement(a,{key:`separator-${i}`})),p),[])}const Ao=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Ro=({ownerState:e,theme:a})=>{let s={display:"flex",flexDirection:"column",...B({theme:a},N({values:e.direction,breakpoints:a.breakpoints.values}),p=>({flexDirection:p}))};if(e.spacing){const p=go(a),b=Object.keys(a.breakpoints.values).reduce((m,c)=>((typeof e.spacing=="object"&&e.spacing[c]!=null||typeof e.direction=="object"&&e.direction[c]!=null)&&(m[c]=!0),m),{}),i=N({values:e.direction,base:b}),D=N({values:e.spacing,base:b});typeof i=="object"&&Object.keys(i).forEach((m,c,k)=>{if(!i[m]){const I=c>0?i[k[c-1]]:"column";i[m]=I}}),s=yo(s,B({theme:a},D,(m,c)=>e.useFlexGap?{gap:M(p,m)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Ao(c?i[c]:e.direction)}`]:M(p,m)}}))}return s=Lo(a.breakpoints,s),s};function Wo(e={}){const{createStyledComponent:a=vo,useThemeProps:s=Do,componentName:p="MuiStack"}=e,b=()=>Io({root:["root"]},m=>So(p,m),{}),i=a(Ro);return v.forwardRef(function(m,c){const k=s(m),A=Eo(k),{component:I="div",direction:so="column",spacing:po=0,divider:R,children:W,className:uo,useFlexGap:Fo=!1,...ho}=A,bo={direction:so,spacing:po,useFlexGap:Fo},fo=b();return o(i,{as:I,ownerState:bo,ref:c,className:xo(fo.root,uo),...ho,children:R?wo(W,R):W})})}const zo=Wo(),u=({children:e})=>r(zo,{width:"100%",direction:"row",sx:{marginTop:5,"&:not(:last-child)":{marginBottom:5},[`& .${P.root}~.${P.root}`]:{marginTop:4},[`& .${No.root}~.${P.root}`]:{marginTop:4}},children:[o(_,{sx:{marginLeft:5,marginRight:4,width:"4px",borderRadius:5,backgroundColor:"neutral.100"}}),o(_,{flex:1,children:e})]});try{u.displayName="FormGroupExpanded",u.__docgenInfo={description:`An indented group of form controls, representing an expanded piece of the form, such as
follow up questions for a certain form control or form element.`,displayName:"FormGroupExpanded",props:{}}}catch{}const ue={component:u,title:"Components/Forms/Form Group Expanded"},f=e=>r(h,{children:[r(n,{...e,children:[o(t,{htmlFor:"name",children:"Main control"}),o(d,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus explicabo rerum praesentium, itaque cumque!"}),o(l,{id:"main",placeholder:"Main"})]}),r(u,{children:[r(n,{...e,optional:!0,children:[o(t,{htmlFor:"name",children:"Sub control 1"}),o(l,{id:"sub 1",placeholder:"Sub 1"})]}),r(n,{...e,optional:!0,children:[o(t,{htmlFor:"name",children:"Sub control 2"}),o(l,{id:"sub2",placeholder:"Sub 2"})]})]})]}),C=e=>r(h,{children:[r(n,{...e,children:[o(t,{component:"span",htmlFor:"name",children:"Main control"}),o(d,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, sunt?"})]}),r(u,{children:[r(n,{...e,children:[o(t,{htmlFor:"name",children:"Sub control1"}),o(l,{id:"sub 1",placeholder:"Sub 1"})]}),r(n,{...e,children:[o(t,{htmlFor:"name",children:"Sub control 2"}),o(l,{id:"sub2",placeholder:"Sub 2"})]})]})]}),g=e=>r(h,{children:[o(n,{...e,children:o(t,{component:"span",htmlFor:"name",children:"Main control"})}),r(u,{children:[r(n,{...e,children:[o(t,{htmlFor:"name",children:"Sub control1"}),o(l,{id:"sub 1",placeholder:"Sub 1"})]}),r(n,{...e,children:[o(t,{htmlFor:"name",children:"Sub control 2"}),o(l,{id:"sub2",placeholder:"Sub 2"})]})]})]}),y=()=>r(h,{children:[r(n,{children:[o(t,{htmlFor:"name",children:"Name"}),o(d,{children:"Example description"}),o(l,{placeholder:"Name"})]}),r(u,{children:[r(n,{children:[o(t,{htmlFor:"preferredName",children:"Preferred name"}),o(d,{children:"What you would like to be called"}),o(l,{placeholder:"Preferred name"})]}),r(n,{children:[o(t,{htmlFor:"spyName",children:"Secret spy name"}),o(d,{children:"What do we use for your code name?"}),o(l,{placeholder:"Spy name"}),o(mo,{severity:"info",children:"Pick something cool or we will laugh at you"})]})]}),r(n,{children:[o(t,{htmlFor:"weapon",children:"Weapon of choice"}),o(d,{children:"Pick something funny"}),o(l,{placeholder:"Pocket sand"})]})]}),L=()=>r(h,{children:[r(z,{title:"Group 1",children:[r(n,{children:[o(t,{htmlFor:"name",children:"Name"}),o(d,{children:"Example description"}),o(l,{placeholder:"Name"})]}),r(u,{children:[r(n,{children:[o(t,{htmlFor:"preferredName",children:"Preferred name"}),o(d,{children:"What you would like to be called"}),o(l,{placeholder:"Preferred name"})]}),r(n,{children:[o(t,{htmlFor:"spyName",children:"Secret spy name"}),o(d,{children:"What do we use for your code name?"}),o(l,{placeholder:"Spy name"}),o(mo,{severity:"info",children:"Pick something cool or we will laugh at you"})]})]})]}),o(z,{title:"Group 2",children:r(n,{children:[o(t,{htmlFor:"weapon",children:"Weapon of choice"}),o(d,{children:"Pick something funny"}),o(l,{placeholder:"Pocket sand"})]})})]}),x=()=>r(h,{children:[r(n,{children:[o(t,{htmlFor:"cool",children:"Are you cool?"}),r(io,{id:"cool",children:[o(F,{value:"true",control:o(E,{}),label:"Yes"}),r(u,{children:[r(co,{children:[o(F,{control:o(G,{}),label:"Everything is fine"}),o(F,{control:o(G,{}),label:"Nothing is wrong"})]}),r(n,{children:[o(t,{htmlFor:"baz",children:"Baz"}),o(l,{id:"baz"})]})]}),o(F,{value:"false",control:o(E,{}),label:"No"})]})]}),r(n,{children:[o(t,{htmlFor:"name",children:"Question 2"}),o(l,{})]})]}),S=()=>r(h,{children:[r(n,{children:[o(t,{htmlFor:"cool",children:"Are you cool?"}),r(io,{id:"cool",children:[o(F,{value:"true",control:o(E,{}),label:"Yes"}),o(F,{value:"false",control:o(E,{}),label:"No"}),r(u,{children:[r(co,{children:[o(F,{control:o(G,{}),label:"Everything is fine"}),o(F,{control:o(G,{}),label:"Nothing is wrong"})]}),r(n,{children:[o(t,{htmlFor:"baz",children:"Baz"}),o(l,{id:"baz"})]})]})]})]}),r(n,{children:[o(t,{htmlFor:"name",children:"Question 2"}),o(l,{})]})]});var j,T,V;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(V=(T=f.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var $,O,q;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
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
}`,...(q=(O=C.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var Q,Y,U;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
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
}`,...(U=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var H,J,K;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`() => <>
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
  </>`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Z,oo;L.parameters={...L.parameters,docs:{...(X=L.parameters)==null?void 0:X.docs,source:{originalSource:`() => <>
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
  </>`,...(oo=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:oo.source}}};var ro,eo,no;x.parameters={...x.parameters,docs:{...(ro=x.parameters)==null?void 0:ro.docs,source:{originalSource:`() => <>
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
  </>`,...(no=(eo=x.parameters)==null?void 0:eo.docs)==null?void 0:no.source}}};var to,lo,ao;S.parameters={...S.parameters,docs:{...(to=S.parameters)==null?void 0:to.docs,source:{originalSource:`() => <>
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
  </>`,...(ao=(lo=S.parameters)==null?void 0:lo.docs)==null?void 0:ao.source}}};const Fe=["ExpandedWithInputs","ParentNoInput","ParentLabelOnly","AsExpandedFormControl","AsLastExpandedFormControl","AsExpandedInput","AsLastExpandedInput"];export{y as AsExpandedFormControl,x as AsExpandedInput,L as AsLastExpandedFormControl,S as AsLastExpandedInput,f as ExpandedWithInputs,g as ParentLabelOnly,C as ParentNoInput,Fe as __namedExportsOrder,ue as default};
