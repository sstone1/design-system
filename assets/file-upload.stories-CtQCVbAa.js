import{a as c,j as t}from"./jsx-runtime-CHAcsyq4.js";import{r as n}from"./index-CO9pbFv1.js";import{A as E}from"./alert-title-D10_km9y.js";import{F as p}from"./file-upload-B3JcJewD.js";import{T as d}from"./Typography-B9EEOqS3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./complete-DfKDyCth.js";import"./in-progress-BhDVRM7c.js";import"./not-started-C2GCbdX0.js";import"./edit-CoTvdx8D.js";import"./chevron-CuO2MovR.js";import"./tick-D-0rNWa6.js";import"./tick-circle-DEx8Rvru.js";import"./info-outlined-BO35JMI8.js";import"./check-circle-N73EjHKU.js";import"./error-outlined-Cly8x-70.js";import"./index-BdESLZbP.js";import"./cross-CurIqIFj.js";import"./upload-CswRUNEI.js";import"./trash-vMOCOH0P.js";import"./cog-outlined-C34frKMW.js";import"./warning-DrjxdJ9G.js";import"./styled-YeRgfiRQ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-2tmYIofL.js";import"./DefaultPropsProvider-GIfS_qv3.js";import"./useSlot-rKYfvtZX.js";import"./resolveComponentProps-CiaLVUp9.js";import"./useForkRef-DZzpmK-L.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./alertClasses-B1UyU-6O.js";import"./createSvgIcon-CWX8OS4s.js";import"./Close-CtYGqAau.js";import"./Paper-CJvehd4j.js";import"./useTheme-ComXvnLb.js";import"./useTheme-DyIePcff.js";import"./IconButton-D_XHKFyE.js";import"./ButtonBase-CqaC8XFo.js";import"./emotion-react.browser.esm-Dv-6nvuE.js";import"./assertThisInitialized-C1KLUksq.js";import"./useEnhancedEffect-D1zchTAJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./useId-Dw7xLATF.js";import"./CircularProgress-DZ31NnjH.js";import"./Box-BQkYfaWE.js";import"./extendSxProp-BJFBh0CD.js";import"./index-DHjCJufJ.js";const Se={component:p,title:"Components/File Upload",parameters:{design:{type:"figma",url:"https://www.figma.com/file/TmLDXXPGbkFMMk1K1Gexmg/5.-Set-up-equity-placement-form?type=design&node-id=1165-265047&mode=dev"}},argTypes:{multiple:{control:"boolean",description:"Allow multiple files to be uploaded"},uploadFileCopy:{control:"text",description:"Text to display in the upload file button"},onInputFileError:{action:"onInputFileError",description:"Passes invalid file warning up to the parent"},inputProps:{description:"Props to pass to the internal input element",control:"object",accept:{control:"string",description:"Specify the types of files that the input should accept"}}},args:{onInputFileError:e=>{alert(e)},inputProps:{accept:"application/pdf"}}},r=e=>{const[w,a]=n.useState(),[C,m]=n.useState([]);return n.useEffect(()=>{e.multiple?a(void 0):m([])},[e.multiple]),e.multiple?t(p,{...e,files:C,setFiles:m}):t(p,{...e,file:w,setFile:a})},i=r.bind({});i.args={sx:{width:564},inputProps:{accept:"application/pdf"}};const s=r.bind({});s.args={sx:{width:564},children:c(E,{severity:"info",children:[t(d,{sx:{fontStyle:"normal",fontWeight:600,lineHeight:"20px"},children:"Instructions"}),t(d,{sx:{"& ol":{paddingLeft:"16px"},"& li:not(:last-child)":{marginBottom:"10px"}},children:c("ol",{children:[t("li",{children:"Upload a PDF copy of the NDA."}),t("li",{children:"Assign any fields that the investor must complete. Any additional signatures required (i.e. on behalf of Issuer Name) should be added to the file before it is uploaded to the platform."}),t("li",{children:"You will receive a notification via email whenever an investor signs the NDA."})]})})]})};const l=r.bind({});l.args={sx:{width:564},inputProps:{accept:""}};const o=r.bind({});o.args={inputProps:{accept:""}};var u,f,F;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(b=(P=o.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};const xe=["FileUploadAcceptingOnlyPDF","FileUploadWithAlert","FileUploadAcceptingAllFiles","FileUploadFillingParentWidth"];export{l as FileUploadAcceptingAllFiles,i as FileUploadAcceptingOnlyPDF,o as FileUploadFillingParentWidth,s as FileUploadWithAlert,xe as __namedExportsOrder,Se as default};
