function i(e,c){const t={...c};for(const l in e)if(Object.prototype.hasOwnProperty.call(e,l)){const o=l;if(o==="components"||o==="slots")t[o]={...e[o],...t[o]};else if(o==="componentsProps"||o==="slotProps"){const s=e[o],n=c[o];if(!n)t[o]=s||{};else if(!s)t[o]=n;else{t[o]={...n};for(const p in s)if(Object.prototype.hasOwnProperty.call(s,p)){const r=p;t[o][r]=i(s[r],n[r])}}}else t[o]===void 0&&(t[o]=e[o])}return t}export{i as r};
