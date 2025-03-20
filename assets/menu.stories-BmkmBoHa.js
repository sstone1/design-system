import{a as m,F as b,j as n}from"./jsx-runtime-CHAcsyq4.js";import{r as C}from"./index-CO9pbFv1.js";import{B as E}from"./button-BaC6Xu-N.js";import"./icon-button-BPrKlY2x.js";import{M as c}from"./Menu-DbFho7MW.js";import{M as t}from"./MenuItem-Ds4GGZ19.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUtilityClasses-7uZHDCF9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D-IwIA3q.js";import"./Button-BpBMJraz.js";import"./DefaultPropsProvider-Qc2xy7DK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./buttonClasses-B-6mKdQJ.js";import"./ButtonBase-spyuHJhX.js";import"./emotion-react.browser.esm-D_d3rkR8.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useForkRef-DZzpmK-L.js";import"./useEnhancedEffect-l_FsEN0U.js";import"./isFocusVisible-B8k4qzLc.js";import"./capitalize-my3DsAjr.js";import"./resolveProps-CxWqPvcr.js";import"./useId-Dw7xLATF.js";import"./CircularProgress-DQj5DzX1.js";import"./IconButton-AbnUAF06.js";import"./index-A5tg15ia.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-CRQn5Xiz.js";import"./resolveComponentProps-R-KJbVW4.js";import"./Modal-BlrxFmu4.js";import"./ownerWindow-DIR61fab.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-aPSyNP_P.js";import"./useTheme-CzbpGgWX.js";import"./utils-D4Zmbii6.js";import"./index-BT32HCm8.js";import"./Paper-C6YV2L4g.js";import"./List-uWV7A8aN.js";import"./useSlotProps-DyCo3d2M.js";import"./dividerClasses-BHVrBds-.js";const rn={title:"Components/Menu",component:c,args:{children:m(b,{children:[n(t,{children:"Item 1"}),n(t,{children:"Item 2"}),n(t,{children:"Item 3"})]})},parameters:{}},M=u=>{const[r,i]=C.useState(null),e=!!r,d=h=>{i(h.currentTarget)},a=()=>{i(null)};return m("div",{children:[n(E,{id:"basic-button","aria-controls":e?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":e?"true":void 0,onClick:d,children:"Open"}),n(c,{id:"basic-menu",anchorEl:r,open:e,onClick:a,onClose:a,MenuListProps:{"aria-labelledby":"basic-button"},children:u.children})]})},o=M.bind({});var s,p,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const an=["DefaultMenu"];export{o as DefaultMenu,an as __namedExportsOrder,rn as default};
