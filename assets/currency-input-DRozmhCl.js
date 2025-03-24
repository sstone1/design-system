import{j as i}from"./jsx-runtime-CHAcsyq4.js";import{r as c}from"./index-CO9pbFv1.js";import{N as m}from"./number-input-B83IjFyz.js";const l=({currency:e,locale:t,format:n})=>{var a,u;if(!e)return{};let o;try{o=Intl.NumberFormat(t,{style:"currency",currency:e})}catch{return{}}const r=o.formatToParts(1);return n==="iso"?{prefix:e.toUpperCase()}:((a=r[r.length-1])==null?void 0:a.type)==="currency"?{suffix:(u=r[r.length-1])==null?void 0:u.value}:{prefix:r[0].value}},s=({currency:e,format:t="symbol",locale:n,...o})=>{const r=c.useMemo(()=>l({currency:e,locale:n,format:t}),[n,e,t]);return i(m,{...o,...r,locale:n})};try{s.displayName="CurrencyInput",s.__docgenInfo={description:"",displayName:"CurrencyInput",props:{currency:{defaultValue:null,description:`The ISO 4217 code of the currency. e.g. GBP, AUD, JPY
Undefined and non-valid currencies (e.g. empty string, or non-ISO 4217 currencies) adds no adornment to the final input.
Currency is optional it might be specified by the user or some backend entity.`,name:"currency",required:!1,type:{name:"string"}},format:{defaultValue:{value:"symbol"},description:`The format to render the currency in.


Symbol will display the currency symbol, e.g. £

ISO will show the ISO code, e.g. GBP`,name:"format",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"iso"'}]}}}}}catch{}export{s as C};
