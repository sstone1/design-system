var Bt=Object.defineProperty;var St=(n,t,e)=>t in n?Bt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var X=(n,t,e)=>St(n,typeof t!="symbol"?t+"":t,e);import{r as l,a as K}from"./index-CO9pbFv1.js";import{f as C,g as ut,s as Q,a as Dt}from"./styled-YeRgfiRQ.js";import{j as U,a as wt}from"./jsx-runtime-CHAcsyq4.js";import{k as tt}from"./emotion-react.browser.esm-Dv-6nvuE.js";import{u as ct,c as Lt}from"./DefaultPropsProvider-GIfS_qv3.js";import{_ as Nt}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-2tmYIofL.js";import{_ as kt,a as vt}from"./assertThisInitialized-C1KLUksq.js";import{u as it}from"./useForkRef-DZzpmK-L.js";import{u as $t}from"./useEnhancedEffect-D1zchTAJ.js";import{i as st}from"./isFocusVisible-B8k4qzLc.js";function G(n){const t=l.useRef(n);return $t(()=>{t.current=n}),l.useRef((...e)=>(0,t.current)(...e)).current}const at={};function pt(n,t){const e=l.useRef(at);return e.current===at&&(e.current=n(t)),e}const Ft=[];function Ut(n){l.useEffect(n,Ft)}class et{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new et}start(t,e){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,e()},t)}}function jt(){const n=pt(et.create).current;return Ut(n.disposeEffect),n}function Ot(n,t){if(n==null)return{};var e={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(t.indexOf(s)!==-1)continue;e[s]=n[s]}return e}const lt=K.createContext(null);function nt(n,t){var e=function(r){return t&&l.isValidElement(r)?t(r):r},s=Object.create(null);return n&&l.Children.map(n,function(o){return o}).forEach(function(o){s[o.key]=e(o)}),s}function zt(n,t){n=n||{},t=t||{};function e(d){return d in t?t[d]:n[d]}var s=Object.create(null),o=[];for(var r in n)r in t?o.length&&(s[r]=o,o=[]):o.push(r);var i,p={};for(var u in t){if(s[u])for(i=0;i<s[u].length;i++){var f=s[u][i];p[s[u][i]]=e(f)}p[u]=e(u)}for(i=0;i<o.length;i++)p[o[i]]=e(o[i]);return p}function k(n,t,e){return e[t]!=null?e[t]:n.props[t]}function At(n,t){return nt(n.children,function(e){return l.cloneElement(e,{onExited:t.bind(null,e),in:!0,appear:k(e,"appear",n),enter:k(e,"enter",n),exit:k(e,"exit",n)})})}function Yt(n,t,e){var s=nt(n.children),o=zt(t,s);return Object.keys(o).forEach(function(r){var i=o[r];if(l.isValidElement(i)){var p=r in t,u=r in s,f=t[r],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[r]=l.cloneElement(i,{onExited:e.bind(null,i),in:!0,exit:k(i,"exit",n),enter:k(i,"enter",n)}):!u&&p&&!d?o[r]=l.cloneElement(i,{in:!1}):u&&p&&l.isValidElement(f)&&(o[r]=l.cloneElement(i,{onExited:e.bind(null,i),in:f.props.in,exit:k(i,"exit",n),enter:k(i,"enter",n)}))}}),o}var Xt=Object.values||function(n){return Object.keys(n).map(function(t){return n[t]})},Kt={component:"div",childFactory:function(t){return t}},ot=function(n){kt(t,n);function t(s,o){var r;r=n.call(this,s,o)||this;var i=r.handleExited.bind(vt(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var e=t.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var i=r.children,p=r.handleExited,u=r.firstRender;return{children:u?At(o,p):Yt(o,i,p),firstRender:!1}},e.handleExited=function(o,r){var i=nt(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(p){var u=Nt({},p.children);return delete u[o.key],{children:u}}))},e.render=function(){var o=this.props,r=o.component,i=o.childFactory,p=Ot(o,["component","childFactory"]),u=this.state.contextValue,f=Xt(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,r===null?K.createElement(lt.Provider,{value:u},f):K.createElement(lt.Provider,{value:u},K.createElement(r,p,f))},t}(K.Component);ot.propTypes={};ot.defaultProps=Kt;class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const t=pt(q.create).current,[e,s]=l.useState(!1);return t.shouldMount=e,t.setShouldMount=s,l.useEffect(t.mountEffect,[e]),t}mount(){return this.mounted||(this.mounted=Ht(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.start(...t)})}stop(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.stop(...t)})}pulsate(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.pulsate(...t)})}}function Wt(){return q.use()}function Ht(){let n,t;const e=new Promise((s,o)=>{n=s,t=o});return e.resolve=n,e.reject=t,e}function _t(n){const{className:t,classes:e,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:i,in:p,onExited:u,timeout:f}=n,[d,h]=l.useState(!1),M=C(t,e.ripple,e.rippleVisible,s&&e.ripplePulsate),V={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},g=C(e.child,d&&e.childLeaving,s&&e.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const D=setTimeout(u,f);return()=>{clearTimeout(D)}}},[u,p,f]),U("span",{className:M,style:V,children:U("span",{className:g})})}const b=ut("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Gt=80,qt=tt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Zt=tt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Jt=tt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Qt=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),te=Q(_t,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${b.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${qt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  &.${b.ripplePulsate} {
    animation-duration: ${({theme:n})=>n.transitions.duration.shorter}ms;
  }

  & .${b.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${b.childLeaving} {
    opacity: 0;
    animation-name: ${Zt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  & .${b.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ee=l.forwardRef(function(t,e){const s=ct({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i,...p}=s,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=jt(),g=l.useRef(null),D=l.useRef(null),T=l.useCallback(c=>{const{pulsate:E,rippleX:R,rippleY:F,rippleSize:w,cb:j}=c;f(y=>[...y,U(te,{classes:{ripple:C(r.ripple,b.ripple),rippleVisible:C(r.rippleVisible,b.rippleVisible),ripplePulsate:C(r.ripplePulsate,b.ripplePulsate),child:C(r.child,b.child),childLeaving:C(r.childLeaving,b.childLeaving),childPulsate:C(r.childPulsate,b.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:F,rippleSize:w},d.current)]),d.current+=1,h.current=j},[r]),v=l.useCallback((c={},E={},R=()=>{})=>{const{pulsate:F=!1,center:w=o||E.pulsate,fakeElement:j=!1}=E;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const y=j?null:D.current,I=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,x,S;if(w||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)B=Math.round(I.width/2),x=Math.round(I.height/2);else{const{clientX:O,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;B=Math.round(O-I.left),x=Math.round(L-I.top)}if(w)S=Math.sqrt((2*I.width**2+I.height**2)/3),S%2===0&&(S+=1);else{const O=Math.max(Math.abs((y?y.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((y?y.clientHeight:0)-x),x)*2+2;S=Math.sqrt(O**2+L**2)}c!=null&&c.touches?g.current===null&&(g.current=()=>{T({pulsate:F,rippleX:B,rippleY:x,rippleSize:S,cb:R})},V.start(Gt,()=>{g.current&&(g.current(),g.current=null)})):T({pulsate:F,rippleX:B,rippleY:x,rippleSize:S,cb:R})},[o,T,V]),W=l.useCallback(()=>{v({},{pulsate:!0})},[v]),$=l.useCallback((c,E)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&g.current){g.current(),g.current=null,V.start(0,()=>{$(c,E)});return}g.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[V]);return l.useImperativeHandle(e,()=>({pulsate:W,start:v,stop:$}),[W,v,$]),U(Qt,{className:C(b.root,r.root,i),ref:D,...p,children:U(ot,{component:null,exit:!0,children:u})})});function ne(n){return Dt("MuiButtonBase",n)}const oe=ut("MuiButtonBase",["root","disabled","focusVisible"]),re=n=>{const{disabled:t,focusVisible:e,focusVisibleClassName:s,classes:o}=n,i=Lt({root:["root",t&&"disabled",e&&"focusVisible"]},ne,o);return e&&s&&(i.root+=` ${s}`),i},ie=Q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${oe.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),be=l.forwardRef(function(t,e){const s=ct({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:g="a",onBlur:D,onClick:T,onContextMenu:v,onDragLeave:W,onFocus:$,onFocusVisible:c,onKeyDown:E,onKeyUp:R,onMouseDown:F,onMouseLeave:w,onMouseUp:j,onTouchEnd:y,onTouchMove:I,onTouchStart:B,tabIndex:x=0,TouchRippleProps:S,touchRippleRef:O,type:L,...z}=s,A=l.useRef(null),m=Wt(),ft=it(m.ref,O),[N,H]=l.useState(!1);f&&N&&H(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{H(!0),A.current.focus()}}),[]);const dt=m.shouldMount&&!d&&!f;l.useEffect(()=>{N&&M&&!d&&m.pulsate()},[d,M,N,m]);const ht=P(m,"start",F,h),mt=P(m,"stop",v,h),gt=P(m,"stop",W,h),bt=P(m,"stop",j,h),Mt=P(m,"stop",a=>{N&&a.preventDefault(),w&&w(a)},h),Rt=P(m,"start",B,h),Et=P(m,"stop",y,h),yt=P(m,"stop",I,h),Ct=P(m,"stop",a=>{st(a.target)||H(!1),D&&D(a)},!1),Tt=G(a=>{A.current||(A.current=a.currentTarget),st(a.target)&&(H(!0),c&&c(a)),$&&$(a)}),Z=()=>{const a=A.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},xt=G(a=>{M&&!a.repeat&&N&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&Z()&&a.key===" "&&a.preventDefault(),E&&E(a),a.target===a.currentTarget&&Z()&&a.key==="Enter"&&!f&&(a.preventDefault(),T&&T(a))}),Pt=G(a=>{M&&a.key===" "&&N&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),T&&a.target===a.currentTarget&&Z()&&a.key===" "&&!a.defaultPrevented&&T(a)});let _=u;_==="button"&&(z.href||z.to)&&(_=g);const Y={};_==="button"?(Y.type=L===void 0?"button":L,Y.disabled=f):(!z.href&&!z.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const Vt=it(e,A),rt={...s,centerRipple:r,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:x,focusVisible:N},It=re(rt);return wt(ie,{as:_,className:C(It.root,p),ownerState:rt,onBlur:Ct,onClick:T,onContextMenu:mt,onFocus:Tt,onKeyDown:xt,onKeyUp:Pt,onMouseDown:ht,onMouseLeave:Mt,onMouseUp:bt,onDragLeave:gt,onTouchEnd:Et,onTouchMove:yt,onTouchStart:Rt,ref:Vt,tabIndex:f?-1:x,type:L,...Y,...z,children:[i,dt?U(ee,{ref:ft,center:r,...S}):null]})});function P(n,t,e,s=!1){return G(o=>(e&&e(o),s||n[t](o),!0))}export{be as B,lt as T,Ot as _,G as a,et as b,ot as c,jt as u};
