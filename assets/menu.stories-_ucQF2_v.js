import{a as m,F as b,j as n}from"./jsx-runtime-CHAcsyq4.js";import{r as C}from"./index-CO9pbFv1.js";import{B as E}from"./button-BmR5UH6R.js";import"./icon-button-UVg6qxqc.js";import{M as c}from"./Menu-B35cedZz.js";import{M as t}from"./MenuItem-DSnCBr0u.js";import"./_commonjsHelpers-BosuxZz1.js";import"./styled-YeRgfiRQ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-2tmYIofL.js";import"./Button-BK55T7tU.js";import"./DefaultPropsProvider-GIfS_qv3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./buttonClasses-BNaIkO6_.js";import"./ButtonBase-CqaC8XFo.js";import"./emotion-react.browser.esm-Dv-6nvuE.js";import"./assertThisInitialized-C1KLUksq.js";import"./useForkRef-DZzpmK-L.js";import"./useEnhancedEffect-D1zchTAJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./useId-Dw7xLATF.js";import"./CircularProgress-DZ31NnjH.js";import"./IconButton-D_XHKFyE.js";import"./index-A5tg15ia.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-rKYfvtZX.js";import"./resolveComponentProps-CiaLVUp9.js";import"./ownerWindow-DIR61fab.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-ComXvnLb.js";import"./useTheme-DyIePcff.js";import"./utils-IYGL4P5N.js";import"./index-BT32HCm8.js";import"./Paper-CJvehd4j.js";import"./List--keKdrVz.js";import"./useSlotProps-C-1mxcRN.js";import"./dividerClasses-CyVahA2_.js";const en={title:"Components/Menu",component:c,args:{children:m(b,{children:[n(t,{children:"Item 1"}),n(t,{children:"Item 2"}),n(t,{children:"Item 3"})]})},parameters:{}},M=u=>{const[r,i]=C.useState(null),o=!!r,d=h=>{i(h.currentTarget)},a=()=>{i(null)};return m("div",{children:[n(E,{id:"basic-button","aria-controls":o?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,onClick:d,children:"Open"}),n(c,{id:"basic-menu",anchorEl:r,open:o,onClick:a,onClose:a,MenuListProps:{"aria-labelledby":"basic-button"},children:u.children})]})},e=M.bind({});var s,l,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <div>
      <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        Open
      </Button>

      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClick={handleClose} onClose={handleClose} MenuListProps={{
      'aria-labelledby': 'basic-button'
    }}>
        {args.children}
      </Menu>
    </div>;
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const on=["DefaultMenu"];export{e as DefaultMenu,on as __namedExportsOrder,en as default};
