const a=e=>e,n=()=>{let e=a;return{configure(r){e=r},generate(r){return e(r)},reset(){e=a}}},c=n(),o={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function d(e,r,s="Mui"){const t=o[r];return t?`${s}-${t}`:`${c.generate(e)}-${r}`}export{c as C,d as g};
