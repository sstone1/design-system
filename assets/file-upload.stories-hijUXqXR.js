import{a as c,j as t}from"./jsx-runtime-CHAcsyq4.js";import{r as n}from"./index-CO9pbFv1.js";import{A as E}from"./alert-title-DNetCkjx.js";import{F as p}from"./file-upload-BWVhWDgw.js";import{T as d}from"./Typography-Cx8-JiCk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./complete-DfKDyCth.js";import"./in-progress-BhDVRM7c.js";import"./not-started-C2GCbdX0.js";import"./edit-CoTvdx8D.js";import"./chevron-CuO2MovR.js";import"./tick-D-0rNWa6.js";import"./tick-circle-DEx8Rvru.js";import"./info-outlined-BO35JMI8.js";import"./check-circle-N73EjHKU.js";import"./error-outlined-Cly8x-70.js";import"./index-BdESLZbP.js";import"./cross-CurIqIFj.js";import"./upload-CswRUNEI.js";import"./trash-vMOCOH0P.js";import"./cog-outlined-C34frKMW.js";import"./warning-DrjxdJ9G.js";import"./DefaultPropsProvider-2af-l9uX.js";import"./generateUtilityClasses-HyxggqFg.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D-IwIA3q.js";import"./useSlot-DP9B20k_.js";import"./resolveComponentProps-BELqttVG.js";import"./useForkRef-DZzpmK-L.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./alertClasses-NpQjpuzD.js";import"./createSvgIcon-CLw04lHl.js";import"./capitalize-_axBoSLA.js";import"./Close-BMWpnAz8.js";import"./Paper-CaVeEWD5.js";import"./useTheme-CuVpbpSA.js";import"./useTheme-D1elzDqp.js";import"./IconButton-D0zZLAT_.js";import"./ButtonBase-B7CczDew.js";import"./emotion-react.browser.esm-BYpQlU2q.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useEnhancedEffect-l_FsEN0U.js";import"./isFocusVisible-B8k4qzLc.js";import"./useId-Dw7xLATF.js";import"./CircularProgress-B2vh_5gm.js";import"./Box-B2aKkEL4.js";import"./extendSxProp-DXPFALOx.js";import"./index-BiGVQ-Oa.js";const xe={component:p,title:"Components/File Upload",parameters:{design:{type:"figma",url:"https://www.figma.com/file/TmLDXXPGbkFMMk1K1Gexmg/5.-Set-up-equity-placement-form?type=design&node-id=1165-265047&mode=dev"}},argTypes:{multiple:{control:"boolean",description:"Allow multiple files to be uploaded"},uploadFileCopy:{control:"text",description:"Text to display in the upload file button"},onInputFileError:{action:"onInputFileError",description:"Passes invalid file warning up to the parent"},inputProps:{description:"Props to pass to the internal input element",control:"object",accept:{control:"string",description:"Specify the types of files that the input should accept"}}},args:{onInputFileError:e=>{alert(e)},inputProps:{accept:"application/pdf"}}},r=e=>{const[w,a]=n.useState(),[C,m]=n.useState([]);return n.useEffect(()=>{e.multiple?a(void 0):m([])},[e.multiple]),e.multiple?t(p,{...e,files:C,setFiles:m}):t(p,{...e,file:w,setFile:a})},i=r.bind({});i.args={sx:{width:564},inputProps:{accept:"application/pdf"}};const s=r.bind({});s.args={sx:{width:564},children:c(E,{severity:"info",children:[t(d,{sx:{fontStyle:"normal",fontWeight:600,lineHeight:"20px"},children:"Instructions"}),t(d,{sx:{"& ol":{paddingLeft:"16px"},"& li:not(:last-child)":{marginBottom:"10px"}},children:c("ol",{children:[t("li",{children:"Upload a PDF copy of the NDA."}),t("li",{children:"Assign any fields that the investor must complete. Any additional signatures required (i.e. on behalf of Issuer Name) should be added to the file before it is uploaded to the platform."}),t("li",{children:"You will receive a notification via email whenever an investor signs the NDA."})]})})]})};const l=r.bind({});l.args={sx:{width:564},inputProps:{accept:""}};const o=r.bind({});o.args={inputProps:{accept:""}};var u,f,F;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [file, setFile] = useState<File>();
  const [files, setFiles] = useState<File[]>([]);
  useEffect(() => {
    if (!args.multiple) {
      setFiles([]);
    } else {
      setFile(undefined);
    }
  }, [args.multiple]);
  if (args.multiple) {
    return <FileUploadComponent {...args} files={files} setFiles={setFiles} />;
  }
  return <FileUploadComponent {...args} file={file} setFile={setFile} />;
}`,...(F=(f=i.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var g,h,U;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [file, setFile] = useState<File>();
  const [files, setFiles] = useState<File[]>([]);
  useEffect(() => {
    if (!args.multiple) {
      setFiles([]);
    } else {
      setFile(undefined);
    }
  }, [args.multiple]);
  if (args.multiple) {
    return <FileUploadComponent {...args} files={files} setFiles={setFiles} />;
  }
  return <FileUploadComponent {...args} file={file} setFile={setFile} />;
}`,...(U=(h=s.parameters)==null?void 0:h.docs)==null?void 0:U.source}}};var y,S,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [file, setFile] = useState<File>();
  const [files, setFiles] = useState<File[]>([]);
  useEffect(() => {
    if (!args.multiple) {
      setFiles([]);
    } else {
      setFile(undefined);
    }
  }, [args.multiple]);
  if (args.multiple) {
    return <FileUploadComponent {...args} files={files} setFiles={setFiles} />;
  }
  return <FileUploadComponent {...args} file={file} setFile={setFile} />;
}`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var A,P,b;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [file, setFile] = useState<File>();
  const [files, setFiles] = useState<File[]>([]);
  useEffect(() => {
    if (!args.multiple) {
      setFiles([]);
    } else {
      setFile(undefined);
    }
  }, [args.multiple]);
  if (args.multiple) {
    return <FileUploadComponent {...args} files={files} setFiles={setFiles} />;
  }
  return <FileUploadComponent {...args} file={file} setFile={setFile} />;
}`,...(b=(P=o.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};const Ae=["FileUploadAcceptingOnlyPDF","FileUploadWithAlert","FileUploadAcceptingAllFiles","FileUploadFillingParentWidth"];export{l as FileUploadAcceptingAllFiles,i as FileUploadAcceptingOnlyPDF,o as FileUploadFillingParentWidth,s as FileUploadWithAlert,Ae as __namedExportsOrder,xe as default};
