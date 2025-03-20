import{a as w,j as o}from"./jsx-runtime-CHAcsyq4.js";import{r as i}from"./index-CO9pbFv1.js";import"./complete-DfKDyCth.js";import"./in-progress-BhDVRM7c.js";import"./not-started-C2GCbdX0.js";import"./edit-CoTvdx8D.js";import{c as V,d as T}from"./chevron-CuO2MovR.js";import"./tick-D-0rNWa6.js";import"./tick-circle-DEx8Rvru.js";import"./info-outlined-BO35JMI8.js";import"./check-circle-N73EjHKU.js";import"./error-outlined-Cly8x-70.js";import"./index-BdESLZbP.js";import"./upload-CswRUNEI.js";import"./trash-vMOCOH0P.js";import"./cog-outlined-C34frKMW.js";import"./warning-DrjxdJ9G.js";import"./button-BaC6Xu-N.js";import"./icon-button-BPrKlY2x.js";import{M as q}from"./MenuItem-Ds4GGZ19.js";import"./divider-BMxx3krd.js";import"./checkbox-CVAe5LtE.js";import{s as I}from"./generateUtilityClasses-7uZHDCF9.js";import{S as E}from"./Select-BF9Bh-BK.js";import{u as x}from"./useTheme-aPSyNP_P.js";import{B as d}from"./Box-XHGtQXL3.js";import{T as S}from"./Typography-pWh98bkc.js";try{menuitembutton.displayName="menuitembutton",menuitembutton.__docgenInfo={description:"",displayName:"menuitembutton",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const C=q;try{selectall.displayName="selectall",selectall.__docgenInfo={description:"",displayName:"selectall",props:{onSelectAll:{defaultValue:null,description:"",name:"onSelectAll",required:!0,type:{name:"() => void"}},onDone:{defaultValue:null,description:"",name:"onDone",required:!0,type:{name:"() => void"}}}}}catch{}try{checkboxitem.displayName="checkboxitem",checkboxitem.__docgenInfo={description:"",displayName:"checkboxitem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}}}}}catch{}try{timezoneitem.displayName="timezoneitem",timezoneitem.__docgenInfo={description:"",displayName:"timezoneitem",props:{timezoneLabel:{defaultValue:null,description:'E.g. "American Samoa"',name:"timezoneLabel",required:!1,type:{name:"string"}},timezoneOffsetString:{defaultValue:null,description:'E.g. "(GMT-11:00)"',name:"timezoneOffsetString",required:!1,type:{name:"string"}}}}}catch{}const M=I(E)(({theme:n})=>({width:"320px",height:"40px",borderRadius:"6px",padding:"0","& *":{fontWeight:n.typography.fontWeightMedium},"& .MuiSelect-select":{padding:"0 12px"},"& fieldset":{border:`1.5px solid ${n.palette.neutral[300]}`},"&:hover":{"& fieldset":{border:`1.5px solid ${n.palette.neutral[300]} !important`}},"&.Mui-error fieldset":{border:`1.5px solid ${n.palette.error.main} !important`},"&.Mui-focused fieldset":{border:`1.5px solid ${n.palette.highlight.main} !important`},"& .placeholder":{color:n.palette.neutral[400],opacity:1},"&.Mui-disabled":{backgroundColor:n.palette.neutral[50],".MuiSelect-select":{color:n.palette.neutral[500],WebkitTextFillColor:n.palette.neutral[500]}}})),y=({options:n,renderItem:p,renderTopSection:m,renderBottomSection:c,...e})=>{const r=x(),[f,u]=i.useState(typeof e.defaultValue=="string"?[String(e.defaultValue)]:e.defaultValue||[]),[h,s]=i.useState(!!e.open);i.useEffect(()=>{e.open!==void 0&&s(e.open)},[e.open]);const v=t=>{const{target:{value:a}}=t;typeof a=="string"?u(a.split(",")):Array.isArray(a)&&a.every(l=>typeof l=="string"||typeof l=="number")&&u(a)},b=t=>Array.isArray(t)&&t.every(a=>typeof a=="string"||typeof a=="number")?t.join().length===0&&e.placeholder?o(S,{className:"placeholder",children:e.placeholder}):t.map(a=>{var l;return(l=n.find(g=>g.value===a))==null?void 0:l.label}).join(", "):null;return i.useEffect(()=>{const t=()=>typeof e.value=="string"?[e.value]:Array.isArray(e.value)?e.value:[];e.value&&u(t())},[e.value]),w(M,{...e,displayEmpty:!0,IconComponent:()=>o(d,{sx:{pointerEvents:"none",position:"absolute",right:"20px",color:r.palette.neutral[400]},children:h?o(V,{width:13}):o(T,{width:13})}),value:f,onChange:(t,a)=>{var l;v(t),(l=e.onChange)==null||l.call(e,t,a)},open:h,onOpen:t=>{var a;s(!0),(a=e.onOpen)==null||a.call(e,t)},onClose:t=>{var a;s(!1),(a=e.onClose)==null||a.call(e,t)},renderValue:e.renderValue||b,children:[m&&o(d,{position:"sticky",top:"0px",zIndex:"1",bgcolor:r.palette.neutral[0],children:m()}),n==null?void 0:n.map(t=>o(C,{value:t.value,disabled:t.disabled,children:p?p(t,f.indexOf(t.value)>-1):t.label},t.value)),c&&o(d,{position:"sticky",bottom:"0px",zIndex:"1",bgcolor:r.palette.neutral[0],children:c()})]})};try{y.displayName="SelectComponent",y.__docgenInfo={description:`SelectComponent: A wrapper for MUI Select

https://mui.com/material-ui/react-select/`,displayName:"SelectComponent",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectComponentOption[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[]"}},renderItem:{defaultValue:null,description:"Exposes a render function to allow for custom rendering of the options when the Select is open",name:"renderItem",required:!1,type:{name:"(option: SelectComponentOption, selected: boolean) => ReactNode"}},renderTopSection:{defaultValue:null,description:"",name:"renderTopSection",required:!1,type:{name:"() => ReactNode"}},renderBottomSection:{defaultValue:null,description:"",name:"renderBottomSection",required:!1,type:{name:"() => ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},classes:{defaultValue:{value:"{}"},description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SelectClasses>"}},color:{defaultValue:null,description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
The prop defaults to the value (\`'primary'\`) inherited from the parent FormControl component.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'}]}},margin:{defaultValue:null,description:"If `dense`, will adjust vertical spacing. This is normally obtained via context from\nFormControl.\nThe prop defaults to the value (`'none'`) inherited from the parent FormControl component.",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"dense"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:`'outlined'
'outlined'
'outlined'
'outlined'`},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"filled"'},{value:'"outlined"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},input:{defaultValue:null,description:"An `Input` element; does not have to be a material-ui specific `Input`.",name:"input",required:!1,type:{name:"ReactElement<unknown, any>"}},label:{defaultValue:null,description:"See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)\nThe label of the `input`. It is only used for layout. The actual labelling\nis handled by `InputLabel`.",name:"label",required:!1,type:{name:"ReactNode"}},autoFocus:{defaultValue:null,description:"If `true`, the `input` element is focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The `id` of the wrapper element or the `select` element when `native`.",name:"id",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onBlur:{defaultValue:null,description:"Callback fired when the `input` is blurred.\n\nNotice that the first argument (event) might be undefined.",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"Callback fired when a menu item is selected.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (any).\n**Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.\n@param child The react element that was selected when `native` is `false` (default).",name:"onChange",required:!1,type:{name:"(event: SelectChangeEvent<unknown>, child: ReactNode) => void"}},onInvalid:{defaultValue:null,description:"Callback fired when the `input` doesn't satisfy its constraints.",name:"onInvalid",required:!1,type:{name:"FormEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},error:{defaultValue:null,description:"If `true`, the `input` will indicate an error.\nThe prop defaults to the value (`false`) inherited from the parent FormControl component.",name:"error",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If `true`, the component is disabled.\nThe prop defaults to the value (`false`) inherited from the parent FormControl component.",name:"disabled",required:!1,type:{name:"boolean"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n@deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any, keyof IntrinsicElements>; Input?: ElementType<any, keyof IntrinsicElements>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n@deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"componentsProps",required:!1,type:{name:"{ root?: HTMLAttributes<HTMLDivElement> & InputBaseComponentsPropsOverrides; input?: InputHTMLAttributes<HTMLInputElement> & InputBaseComponentsPropsOverrides; }"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.\nUse it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).\n@param event The event source of the callback.",name:"onClose",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `components` prop, which will be deprecated in the future.",name:"slots",required:!1,type:{name:"{ root?: ElementType<any, keyof IntrinsicElements>; input?: ElementType<any, keyof IntrinsicElements>; }"}},slotProps:{defaultValue:{value:"{}"},description:`The extra props for the slot components.
You can override the existing props or add new ones.

This prop is an alias for the \`componentsProps\` prop, which will be deprecated in the future.`,name:"slotProps",required:!1,type:{name:"{ root?: HTMLAttributes<HTMLDivElement> & InputBaseComponentsPropsOverrides & { sx?: SxProps<Theme>; }; input?: InputHTMLAttributes<...> & ... 1 more ... & { ...; }; }"}},size:{defaultValue:null,description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"'text'"},description:"Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).",name:"type",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The `input` value. Providing an empty string will select no options.\nSet to an empty string `''` if you don't want any of the available options to be selected.\n\nIf the value is an object it must have reference equality with the option in order to be selected.\nIf the value is not an object, the string representation must match with the string representation of the option in order to be selected.",name:"value",required:!1,type:{name:"unknown"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the `input` will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:`This prop helps users to fill forms faster, especially on mobile devices.
The name can be confusing, as it's more like an autofill.
You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).`,name:"autoComplete",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"false"},description:"If `true`, `value` must be an array and the menu will support multiple selections.",name:"multiple",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"If `true`, the component is shown.\nYou can only use it when the `native` prop is `false` (default).",name:"open",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:`It prevents the user from changing the value of the field
(not from interacting with the field).`,name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the `input` element is required.\nThe prop defaults to the value (`false`) inherited from the parent FormControl component.",name:"required",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"Number of rows to display when multiline option is set to true.",name:"rows",required:!1,type:{name:"string | number"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.\nWhen `native` is `true`, the attributes are applied on the `select` element.",name:"inputProps",required:!1,type:{name:"InputBaseComponentProps"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},disableInjectingGlobalStyles:{defaultValue:{value:"false"},description:"If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.\nThis option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.",name:"disableInjectingGlobalStyles",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:null,description:"End `InputAdornment` for this component.",name:"endAdornment",required:!1,type:{name:"ReactNode"}},inputComponent:{defaultValue:{value:"'input'"},description:"The component used for the `input` element.\nEither a string to use a HTML element or a component.",name:"inputComponent",required:!1,type:{name:"ElementType<InputBaseComponentProps, keyof IntrinsicElements>"}},multiline:{defaultValue:{value:"false"},description:"If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.",name:"multiline",required:!1,type:{name:"boolean"}},renderSuffix:{defaultValue:null,description:"",name:"renderSuffix",required:!1,type:{name:'(state: { disabled?: boolean; error?: boolean; filled?: boolean; focused?: boolean; margin?: "none" | "normal" | "dense"; required?: boolean; startAdornment?: ReactNode; }) => ReactNode'}},maxRows:{defaultValue:null,description:"Maximum number of rows to display when multiline option is set to true.",name:"maxRows",required:!1,type:{name:"string | number"}},minRows:{defaultValue:null,description:"Minimum number of rows to display when multiline option is set to true.",name:"minRows",required:!1,type:{name:"string | number"}},startAdornment:{defaultValue:null,description:"Start `InputAdornment` for this component.",name:"startAdornment",required:!1,type:{name:"ReactNode"}},disableUnderline:{defaultValue:{value:`false
false`},description:"If `true`, the input will not have an underline.\nIf `true`, the `input` will not have an underline.",name:"disableUnderline",required:!1,type:{name:"boolean"}},autoWidth:{defaultValue:{value:"false"},description:"If `true`, the width of the popover will automatically be set according to the items inside the\nmenu, otherwise it will be at least the width of the select input.",name:"autoWidth",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).\nYou can only use it when the `native` prop is `false` (default).",name:"defaultOpen",required:!1,type:{name:"boolean"}},displayEmpty:{defaultValue:{value:"false"},description:`If \`true\`, a value is displayed even if no items are selected.

In order to display a meaningful value, a function can be passed to the \`renderValue\` prop which
returns the value to be displayed when no items are selected.

⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
The label should either be hidden or forced to a shrunk state.`,name:"displayEmpty",required:!1,type:{name:"boolean"}},IconComponent:{defaultValue:{value:"ArrowDropDownIcon"},description:"The icon that displays the arrow.",name:"IconComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},labelId:{defaultValue:null,description:`The ID of an element that acts as an additional label. The Select will
be labelled by the additional label and the selected value.`,name:"labelId",required:!1,type:{name:"string"}},MenuProps:{defaultValue:null,description:"Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.",name:"MenuProps",required:!1,type:{name:"Partial<MenuProps>"}},native:{defaultValue:{value:"false"},description:"If `true`, the component uses a native `select` element.",name:"native",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:"Callback fired when the component requests to be opened.\nUse it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).\n@param event The event source of the callback.",name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},renderValue:{defaultValue:null,description:"Render the selected value.\nYou can only use it when the `native` prop is `false` (default).\n@param value The `value` provided to the component.\n@returns",name:"renderValue",required:!1,type:{name:"(value: unknown) => ReactNode"}},SelectDisplayProps:{defaultValue:null,description:"Props applied to the clickable div element.",name:"SelectDisplayProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}}}}}catch{}export{y as S};
