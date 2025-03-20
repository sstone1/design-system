import{r as s}from"./index-CO9pbFv1.js";import{u as ve,c as q,a as Ee}from"./DefaultPropsProvider-Qc2xy7DK.js";import{u as Le}from"./index-A5tg15ia.js";import{g as we,a as Me,s as _,r as ke}from"./generateUtilityClasses-7uZHDCF9.js";import{j as W}from"./jsx-runtime-CHAcsyq4.js";import{i as Ie}from"./isHostComponent-DVu5iVWx.js";import{u as pe}from"./useSlot-CRQn5Xiz.js";import{g as Oe,a as Fe,M as ze}from"./Modal-BlrxFmu4.js";import{P as He}from"./Paper-C6YV2L4g.js";import{o as J,a as Q,d as Ke}from"./ownerWindow-DIR61fab.js";import{u as te}from"./useForkRef-DZzpmK-L.js";import{u as Ae}from"./useTheme-aPSyNP_P.js";import{T as Ne,r as We,g as de}from"./utils-D4Zmbii6.js";import{u as je}from"./ButtonBase-spyuHJhX.js";import{u as $e}from"./useEnhancedEffect-l_FsEN0U.js";import{L as Ue}from"./List-uWV7A8aN.js";import{u as me}from"./useSlotProps-DyCo3d2M.js";function Z(t){return`scale(${t}, ${t**2})`}const Ge={entering:{opacity:1,transform:Z(1)},entered:{opacity:1,transform:"none"}},B=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),ee=s.forwardRef(function(e,o){const{addEndListener:T,appear:w=!0,children:d,easing:g,in:f,onEnter:m,onEntered:S,onEntering:k,onExit:F,onExited:K,onExiting:i,style:y,timeout:M="auto",TransitionComponent:H=Ne,...c}=e,C=je(),n=s.useRef(),r=Ae(),a=s.useRef(null),D=te(a,Oe(d),o),P=l=>h=>{if(l){const v=a.current;h===void 0?l(v):l(v,h)}},u=P(k),b=P((l,h)=>{We(l);const{duration:v,delay:R,easing:I}=de({style:y,timeout:M,easing:g},{mode:"enter"});let A;M==="auto"?(A=r.transitions.getAutoHeightDuration(l.clientHeight),n.current=A):A=v,l.style.transition=[r.transitions.create("opacity",{duration:A,delay:R}),r.transitions.create("transform",{duration:B?A:A*.666,delay:R,easing:I})].join(","),m&&m(l,h)}),z=P(S),L=P(i),N=P(l=>{const{duration:h,delay:v,easing:R}=de({style:y,timeout:M,easing:g},{mode:"exit"});let I;M==="auto"?(I=r.transitions.getAutoHeightDuration(l.clientHeight),n.current=I):I=h,l.style.transition=[r.transitions.create("opacity",{duration:I,delay:v}),r.transitions.create("transform",{duration:B?I:I*.666,delay:B?v:v||I*.333,easing:R})].join(","),l.style.opacity=0,l.style.transform=Z(.75),F&&F(l)}),j=P(K);return W(H,{appear:w,in:f,nodeRef:a,onEnter:b,onEntered:z,onEntering:u,onExit:N,onExited:j,onExiting:L,addEndListener:l=>{M==="auto"&&C.start(n.current||0,l),T&&T(a.current,l)},timeout:M==="auto"?null:M,...c,children:(l,{ownerState:h,...v})=>s.cloneElement(d,{style:{opacity:0,transform:Z(.75),visibility:l==="exited"&&!f?"hidden":void 0,...Ge[l],...y,...d.props.style},ref:D,...v})})});ee&&(ee.muiSupportAuto=!0);function X(t,e,o){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:o?null:t.firstChild}function he(t,e,o){return t===e?o?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:o?null:t.lastChild}function be(t,e){if(e===void 0)return!0;let o=t.innerText;return o===void 0&&(o=t.textContent),o=o.trim().toLowerCase(),o.length===0?!1:e.repeating?o[0]===e.keys[0]:o.startsWith(e.keys.join(""))}function V(t,e,o,T,w,d){let g=!1,f=w(t,e,e?o:!1);for(;f;){if(f===t.firstChild){if(g)return!1;g=!0}const m=T?!1:f.disabled||f.getAttribute("aria-disabled")==="true";if(!f.hasAttribute("tabindex")||!be(f,d)||m)f=w(t,f,o);else return f.focus(),!0}return!1}const Ve=s.forwardRef(function(e,o){const{actions:T,autoFocus:w=!1,autoFocusItem:d=!1,children:g,className:f,disabledItemsFocusable:m=!1,disableListWrap:S=!1,onKeyDown:k,variant:F="selectedMenu",...K}=e,i=s.useRef(null),y=s.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});$e(()=>{w&&i.current.focus()},[w]),s.useImperativeHandle(T,()=>({adjustStyleForScrollbar:(n,{direction:r})=>{const a=!i.current.style.width;if(n.clientHeight<i.current.clientHeight&&a){const D=`${Fe(J(n))}px`;i.current.style[r==="rtl"?"paddingLeft":"paddingRight"]=D,i.current.style.width=`calc(100% + ${D})`}return i.current}}),[]);const M=n=>{const r=i.current,a=n.key;if(n.ctrlKey||n.metaKey||n.altKey){k&&k(n);return}const P=Q(r).activeElement;if(a==="ArrowDown")n.preventDefault(),V(r,P,S,m,X);else if(a==="ArrowUp")n.preventDefault(),V(r,P,S,m,he);else if(a==="Home")n.preventDefault(),V(r,null,S,m,X);else if(a==="End")n.preventDefault(),V(r,null,S,m,he);else if(a.length===1){const u=y.current,b=a.toLowerCase(),z=performance.now();u.keys.length>0&&(z-u.lastTime>500?(u.keys=[],u.repeating=!0,u.previousKeyMatched=!0):u.repeating&&b!==u.keys[0]&&(u.repeating=!1)),u.lastTime=z,u.keys.push(b);const L=P&&!u.repeating&&be(P,u);u.previousKeyMatched&&(L||V(r,P,!1,m,X,u))?n.preventDefault():u.previousKeyMatched=!1}k&&k(n)},H=te(i,o);let c=-1;s.Children.forEach(g,(n,r)=>{if(!s.isValidElement(n)){c===r&&(c+=1,c>=g.length&&(c=-1));return}n.props.disabled||(F==="selectedMenu"&&n.props.selected||c===-1)&&(c=r),c===r&&(n.props.disabled||n.props.muiSkipListHighlight||n.type.muiSkipListHighlight)&&(c+=1,c>=g.length&&(c=-1))});const C=s.Children.map(g,(n,r)=>{if(r===c){const a={};return d&&(a.autoFocus=!0),n.props.tabIndex===void 0&&F==="selectedMenu"&&(a.tabIndex=0),s.cloneElement(n,a)}return n});return W(Ue,{role:"menu",ref:H,className:f,onKeyDown:M,tabIndex:w?0:-1,...K,children:C})});function _e(t){return Me("MuiPopover",t)}we("MuiPopover",["root","paper"]);function ge(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.height/2:e==="bottom"&&(o=t.height),o}function ye(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.width/2:e==="right"&&(o=t.width),o}function Pe(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function Y(t){return typeof t=="function"?t():t}const Be=t=>{const{classes:e}=t;return Ee({root:["root"],paper:["paper"]},_e,e)},Xe=_(ze,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Re=_(He,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Ye=s.forwardRef(function(e,o){const T=ve({props:e,name:"MuiPopover"}),{action:w,anchorEl:d,anchorOrigin:g={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:m="anchorEl",children:S,className:k,container:F,elevation:K=8,marginThreshold:i=16,open:y,PaperProps:M={},slots:H={},slotProps:c={},transformOrigin:C={vertical:"top",horizontal:"left"},TransitionComponent:n=ee,transitionDuration:r="auto",TransitionProps:{onEntering:a,...D}={},disableScrollLock:P=!1,...u}=T,b=(c==null?void 0:c.paper)??M,z=s.useRef(),L={...T,anchorOrigin:g,anchorReference:m,elevation:K,marginThreshold:i,externalPaperSlotProps:b,transformOrigin:C,TransitionComponent:n,transitionDuration:r,TransitionProps:D},N=Be(L),j=s.useCallback(()=>{if(m==="anchorPosition")return f;const p=Y(d),x=(p&&p.nodeType===1?p:Q(z.current).body).getBoundingClientRect();return{top:x.top+ge(x,g.vertical),left:x.left+ye(x,g.horizontal)}},[d,g.horizontal,g.vertical,f,m]),G=s.useCallback(p=>({vertical:ge(p,C.vertical),horizontal:ye(p,C.horizontal)}),[C.horizontal,C.vertical]),l=s.useCallback(p=>{const E={width:p.offsetWidth,height:p.offsetHeight},x=G(E);if(m==="none")return{top:null,left:null,transformOrigin:Pe(x)};const ie=j();let $=ie.top-x.vertical,U=ie.left-x.horizontal;const ae=$+E.height,le=U+E.width,ce=J(Y(d)),ue=ce.innerHeight-i,fe=ce.innerWidth-i;if(i!==null&&$<i){const O=$-i;$-=O,x.vertical+=O}else if(i!==null&&ae>ue){const O=ae-ue;$-=O,x.vertical+=O}if(i!==null&&U<i){const O=U-i;U-=O,x.horizontal+=O}else if(le>fe){const O=le-fe;U-=O,x.horizontal+=O}return{top:`${Math.round($)}px`,left:`${Math.round(U)}px`,transformOrigin:Pe(x)}},[d,m,j,G,i]),[h,v]=s.useState(y),R=s.useCallback(()=>{const p=z.current;if(!p)return;const E=l(p);E.top!==null&&p.style.setProperty("top",E.top),E.left!==null&&(p.style.left=E.left),p.style.transformOrigin=E.transformOrigin,v(!0)},[l]);s.useEffect(()=>(P&&window.addEventListener("scroll",R),()=>window.removeEventListener("scroll",R)),[d,P,R]);const I=(p,E)=>{a&&a(p,E),R()},A=()=>{v(!1)};s.useEffect(()=>{y&&R()}),s.useImperativeHandle(w,()=>y?{updatePosition:()=>{R()}}:null,[y,R]),s.useEffect(()=>{if(!y)return;const p=Ke(()=>{R()}),E=J(d);return E.addEventListener("resize",p),()=>{p.clear(),E.removeEventListener("resize",p)}},[d,y,R]);let oe=r;r==="auto"&&!n.muiSupportAuto&&(oe=void 0);const xe=F||(d?Q(Y(d)).body:void 0),ne={slots:H,slotProps:{...c,paper:b}},[Te,re]=pe("paper",{elementType:Re,externalForwardedProps:ne,additionalProps:{elevation:K,className:q(N.paper,b==null?void 0:b.className),style:h?b.style:{...b.style,opacity:0}},ownerState:L}),[se,{slotProps:Se,...Ce}]=pe("root",{elementType:Xe,externalForwardedProps:ne,additionalProps:{slotProps:{backdrop:{invisible:!0}},container:xe,open:y},ownerState:L,className:q(N.root,k)}),De=te(z,re.ref);return W(se,{...Ce,...!Ie(se)&&{slotProps:Se,disableScrollLock:P},...u,ref:o,children:W(n,{appear:!0,in:y,onEntering:I,onExited:A,timeout:oe,...D,children:W(Te,{...re,ref:De,children:S})})})});function qe(t){return Me("MuiMenu",t)}we("MuiMenu",["root","paper","list"]);const Je={vertical:"top",horizontal:"right"},Qe={vertical:"top",horizontal:"left"},Ze=t=>{const{classes:e}=t;return Ee({root:["root"],paper:["paper"],list:["list"]},qe,e)},et=_(Ye,{shouldForwardProp:t=>ke(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),tt=_(Re,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ot=_(Ve,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),Et=s.forwardRef(function(e,o){const T=ve({props:e,name:"MuiMenu"}),{autoFocus:w=!0,children:d,className:g,disableAutoFocusItem:f=!1,MenuListProps:m={},onClose:S,open:k,PaperProps:F={},PopoverClasses:K,transitionDuration:i="auto",TransitionProps:{onEntering:y,...M}={},variant:H="selectedMenu",slots:c={},slotProps:C={},...n}=T,r=Le(),a={...T,autoFocus:w,disableAutoFocusItem:f,MenuListProps:m,onEntering:y,PaperProps:F,transitionDuration:i,TransitionProps:M,variant:H},D=Ze(a),P=w&&!f&&k,u=s.useRef(null),b=(h,v)=>{u.current&&u.current.adjustStyleForScrollbar(h,{direction:r?"rtl":"ltr"}),y&&y(h,v)},z=h=>{h.key==="Tab"&&(h.preventDefault(),S&&S(h,"tabKeyDown"))};let L=-1;s.Children.map(d,(h,v)=>{s.isValidElement(h)&&(h.props.disabled||(H==="selectedMenu"&&h.props.selected||L===-1)&&(L=v))});const N=c.paper??tt,j=C.paper??F,G=me({elementType:c.root,externalSlotProps:C.root,ownerState:a,className:[D.root,g]}),l=me({elementType:N,externalSlotProps:j,ownerState:a,className:D.paper});return W(et,{onClose:S,anchorOrigin:{vertical:"bottom",horizontal:r?"right":"left"},transformOrigin:r?Je:Qe,slots:{paper:N,root:c.root},slotProps:{root:G,paper:l},open:k,ref:o,transitionDuration:i,TransitionProps:{onEntering:b,...M},ownerState:a,...n,classes:K,children:W(ot,{onKeyDown:z,actions:u,autoFocus:w&&(L===-1||f),autoFocusItem:P,variant:H,...m,className:q(D.list,m.className),children:d})})});export{ee as G,Et as M,Ve as a};
