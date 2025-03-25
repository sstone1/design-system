import{a as m,F as b,j as n}from"./jsx-runtime-CHAcsyq4.js";import{r as C}from"./index-CO9pbFv1.js";import{B as E}from"./button-Djtd5YYK.js";import"./icon-button-CfgFIY6O.js";import{M as c}from"./Menu-C2LtjSh2.js";import{M as t}from"./MenuItem-D986Y6_u.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUtilityClasses-HyxggqFg.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D-IwIA3q.js";import"./Button-ur3uyCog.js";import"./DefaultPropsProvider-2af-l9uX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./buttonClasses-DYQWTHPT.js";import"./ButtonBase-B7CczDew.js";import"./emotion-react.browser.esm-BYpQlU2q.js";import"./assertThisInitialized-LnzLPM7_.js";import"./useForkRef-DZzpmK-L.js";import"./useEnhancedEffect-l_FsEN0U.js";import"./isFocusVisible-B8k4qzLc.js";import"./capitalize-_axBoSLA.js";import"./resolveProps-CxWqPvcr.js";import"./useId-Dw7xLATF.js";import"./CircularProgress-B2vh_5gm.js";import"./IconButton-D0zZLAT_.js";import"./index-A5tg15ia.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-DP9B20k_.js";import"./resolveComponentProps-BELqttVG.js";import"./Modal-DnW-VeUB.js";import"./ownerWindow-DIR61fab.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-CuVpbpSA.js";import"./useTheme-D1elzDqp.js";import"./utils-Cl6tLB4R.js";import"./index-BT32HCm8.js";import"./Paper-CaVeEWD5.js";import"./List-CnNeu8Oc.js";import"./useSlotProps-B5o3B6xl.js";import"./dividerClasses-leC9cI30.js";const rn={title:"Components/Menu",component:c,args:{children:m(b,{children:[n(t,{children:"Item 1"}),n(t,{children:"Item 2"}),n(t,{children:"Item 3"})]})},parameters:{}},M=u=>{const[r,i]=C.useState(null),e=!!r,d=h=>{i(h.currentTarget)},a=()=>{i(null)};return m("div",{children:[n(E,{id:"basic-button","aria-controls":e?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":e?"true":void 0,onClick:d,children:"Open"}),n(c,{id:"basic-menu",anchorEl:r,open:e,onClick:a,onClose:a,MenuListProps:{"aria-labelledby":"basic-button"},children:u.children})]})},o=M.bind({});var s,p,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
