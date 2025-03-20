import{j as o,a as s}from"./jsx-runtime-CHAcsyq4.js";import{A as T}from"./alert-title-B94KUcSW.js";import{r as E}from"./index-CO9pbFv1.js";import{F as I}from"./file-upload-DDKhjsQS.js";import{T as m}from"./Typography-pWh98bkc.js";import"./complete-DfKDyCth.js";import"./in-progress-BhDVRM7c.js";import"./not-started-C2GCbdX0.js";import"./edit-CoTvdx8D.js";import"./chevron-CuO2MovR.js";import"./tick-D-0rNWa6.js";import"./tick-circle-DEx8Rvru.js";import"./info-outlined-BO35JMI8.js";import"./check-circle-N73EjHKU.js";import"./error-outlined-Cly8x-70.js";import"./index-BdESLZbP.js";import"./cross-CurIqIFj.js";import"./upload-CswRUNEI.js";import"./trash-vMOCOH0P.js";import"./cog-outlined-C34frKMW.js";import"./warning-DrjxdJ9G.js";import"./DefaultPropsProvider-Qc2xy7DK.js";import"./generateUtilityClasses-7uZHDCF9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D-IwIA3q.js";import"./useSlot-CRQn5Xiz.js";import"./resolveComponentProps-R-KJbVW4.js";import"./useForkRef-DZzpmK-L.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./alertClasses-D0xC1ff2.js";import"./createSvgIcon-D-0vJS9S.js";import"./capitalize-my3DsAjr.js";import"./Close-Bk6UzDMS.js";import"./Paper-C6YV2L4g.js";import"./useTheme-aPSyNP_P.js";import"./useTheme-CzbpGgWX.js";import"./IconButton-AbnUAF06.js";import"./ButtonBase-spyuHJhX.js";import"./emotion-react.browser.esm-D_d3rkR8.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useEnhancedEffect-l_FsEN0U.js";import"./isFocusVisible-B8k4qzLc.js";import"./useId-Dw7xLATF.js";import"./CircularProgress-DQj5DzX1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Box-XHGtQXL3.js";import"./extendSxProp-o9rhGgwT.js";import"./index-C_yWRM1m.js";const F=({onFileSelected:t,uploadDocumentCopy:P="Upload document",noDocumentCopy:b="No document added",initialFile:w,...v})=>{const[C,W]=E.useState(w||null);return o(I,{...v,file:C,setFile:a=>{W(a),t==null||t(a)},uploadFileCopy:P,noFileCopy:b})},vt={component:F,title:"Components/Document Upload",parameters:{design:{type:"figma",url:"https://www.figma.com/file/TmLDXXPGbkFMMk1K1Gexmg/5.-Set-up-equity-placement-form?type=design&node-id=1165-265047&mode=dev"}},argTypes:{uploadDocumentCopy:{control:"text",description:"Text to display in the upload document button"},onInputFileError:{action:"onInputFileError",description:"Passes invalid file warning up to the parent"},inputProps:{description:"Props to pass to the internal input element",control:"object",accept:{control:"string",description:"Specify the types of files that the input should accept"}}},args:{onInputFileError:t=>{alert(t)},inputProps:{accept:"application/pdf"}}},n=t=>o(F,{...t}),r=n.bind({});r.args={sx:{width:564},inputProps:{accept:"application/pdf"}};const e=n.bind({});e.args={sx:{width:564},children:s(T,{severity:"info",children:[o(m,{sx:{fontStyle:"normal",fontWeight:600,lineHeight:"20px"},children:"Instructions"}),o(m,{sx:{"& ol":{paddingLeft:"16px"},"& li:not(:last-child)":{marginBottom:"10px"}},children:s("ol",{children:[o("li",{children:"Upload a PDF copy of the NDA."}),o("li",{children:"Assign any fields that the investor must complete. Any additional signatures required (i.e. on behalf of Issuer Name) should be added to the document before it is uploaded to the platform."}),o("li",{children:"You will receive a notification via email whenever an investor signs the NDA."})]})})]})};const i=n.bind({});i.args={sx:{width:564},inputProps:{accept:""}};const p=n.bind({});p.args={inputProps:{accept:""}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <DocumentUploadComponent {...args} />;
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <DocumentUploadComponent {...args} />;
}`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,D,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <DocumentUploadComponent {...args} />;
}`,...(y=(D=i.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var U,x,A;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  return <DocumentUploadComponent {...args} />;
}`,...(A=(x=p.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const Ct=["DocumentUploadAcceptingOnlyPDF","DocumentUploadWithAlert","DocumentUploadAcceptingAllFiles","DocumentUploadFillingParentWidth"];export{i as DocumentUploadAcceptingAllFiles,r as DocumentUploadAcceptingOnlyPDF,p as DocumentUploadFillingParentWidth,e as DocumentUploadWithAlert,Ct as __namedExportsOrder,vt as default};
