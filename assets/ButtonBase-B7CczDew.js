var Bt=Object.defineProperty;var St=(n,e,t)=>e in n?Bt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var K=(n,e,t)=>(St(n,typeof e!="symbol"?e+"":e,t),t);import{r as l,a as X}from"./index-CO9pbFv1.js";import{c as C,u as ut,a as Dt}from"./DefaultPropsProvider-2af-l9uX.js";import{j as U,a as Lt}from"./jsx-runtime-CHAcsyq4.js";import{g as ct,s as Q,a as kt}from"./generateUtilityClasses-HyxggqFg.js";import{k as tt}from"./emotion-react.browser.esm-BYpQlU2q.js";import{_ as wt}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D-IwIA3q.js";import{_ as vt,a as Nt}from"./assertThisInitialized-LnzLPM7_.js";import{u as it}from"./useForkRef-DZzpmK-L.js";import{u as $t}from"./useEnhancedEffect-l_FsEN0U.js";import{i as st}from"./isFocusVisible-B8k4qzLc.js";function G(n){const e=l.useRef(n);return $t(()=>{e.current=n}),l.useRef((...t)=>(0,e.current)(...t)).current}const at={};function pt(n,e){const t=l.useRef(at);return t.current===at&&(t.current=n(e)),t}const Ft=[];function Ut(n){l.useEffect(n,Ft)}class et{constructor(){K(this,"currentId",null);K(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});K(this,"disposeEffect",()=>this.clear)}static create(){return new et}start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}}function jt(){const n=pt(et.create).current;return Ut(n.disposeEffect),n}function Ot(n,e){if(n==null)return{};var t={},a=Object.keys(n),o,r;for(r=0;r<a.length;r++)o=a[r],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}const lt=X.createContext(null);function nt(n,e){var t=function(r){return e&&l.isValidElement(r)?e(r):r},a=Object.create(null);return n&&l.Children.map(n,function(o){return o}).forEach(function(o){a[o.key]=t(o)}),a}function zt(n,e){n=n||{},e=e||{};function t(d){return d in e?e[d]:n[d]}var a=Object.create(null),o=[];for(var r in n)r in e?o.length&&(a[r]=o,o=[]):o.push(r);var i,p={};for(var u in e){if(a[u])for(i=0;i<a[u].length;i++){var f=a[u][i];p[a[u][i]]=t(f)}p[u]=t(u)}for(i=0;i<o.length;i++)p[o[i]]=t(o[i]);return p}function v(n,e,t){return t[e]!=null?t[e]:n.props[e]}function At(n,e){return nt(n.children,function(t){return l.cloneElement(t,{onExited:e.bind(null,t),in:!0,appear:v(t,"appear",n),enter:v(t,"enter",n),exit:v(t,"exit",n)})})}function Yt(n,e,t){var a=nt(n.children),o=zt(e,a);return Object.keys(o).forEach(function(r){var i=o[r];if(l.isValidElement(i)){var p=r in e,u=r in a,f=e[r],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[r]=l.cloneElement(i,{onExited:t.bind(null,i),in:!0,exit:v(i,"exit",n),enter:v(i,"enter",n)}):!u&&p&&!d?o[r]=l.cloneElement(i,{in:!1}):u&&p&&l.isValidElement(f)&&(o[r]=l.cloneElement(i,{onExited:t.bind(null,i),in:f.props.in,exit:v(i,"exit",n),enter:v(i,"enter",n)}))}}),o}var Kt=Object.values||function(n){return Object.keys(n).map(function(e){return n[e]})},Xt={component:"div",childFactory:function(e){return e}},ot=function(n){vt(e,n);function e(a,o){var r;r=n.call(this,a,o)||this;var i=r.handleExited.bind(Nt(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,r){var i=r.children,p=r.handleExited,u=r.firstRender;return{children:u?At(o,p):Yt(o,i,p),firstRender:!1}},t.handleExited=function(o,r){var i=nt(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(p){var u=wt({},p.children);return delete u[o.key],{children:u}}))},t.render=function(){var o=this.props,r=o.component,i=o.childFactory,p=Ot(o,["component","childFactory"]),u=this.state.contextValue,f=Kt(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,r===null?X.createElement(lt.Provider,{value:u},f):X.createElement(lt.Provider,{value:u},X.createElement(r,p,f))},e}(X.Component);ot.propTypes={};ot.defaultProps=Xt;class q{constructor(){K(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=pt(q.create).current,[t,a]=l.useState(!1);return e.shouldMount=t,e.setShouldMount=a,l.useEffect(e.mountEffect,[t]),e}mount(){return this.mounted||(this.mounted=Ht(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.start(...e)})}stop(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.stop(...e)})}pulsate(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.pulsate(...e)})}}function Wt(){return q.use()}function Ht(){let n,e;const t=new Promise((a,o)=>{n=a,e=o});return t.resolve=n,t.reject=e,t}function _t(n){const{className:e,classes:t,pulsate:a=!1,rippleX:o,rippleY:r,rippleSize:i,in:p,onExited:u,timeout:f}=n,[d,h]=l.useState(!1),M=C(e,t.ripple,t.rippleVisible,a&&t.ripplePulsate),V={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},g=C(t.child,d&&t.childLeaving,a&&t.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const D=setTimeout(u,f);return()=>{clearTimeout(D)}}},[u,p,f]),U("span",{className:M,style:V,children:U("span",{className:g})})}const b=ct("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Gt=80,qt=tt`
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
`,ee=l.forwardRef(function(e,t){const a=ut({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i,...p}=a,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=jt(),g=l.useRef(null),D=l.useRef(null),T=l.useCallback(c=>{const{pulsate:E,rippleX:R,rippleY:F,rippleSize:L,cb:j}=c;f(y=>[...y,U(te,{classes:{ripple:C(r.ripple,b.ripple),rippleVisible:C(r.rippleVisible,b.rippleVisible),ripplePulsate:C(r.ripplePulsate,b.ripplePulsate),child:C(r.child,b.child),childLeaving:C(r.childLeaving,b.childLeaving),childPulsate:C(r.childPulsate,b.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:F,rippleSize:L},d.current)]),d.current+=1,h.current=j},[r]),N=l.useCallback((c={},E={},R=()=>{})=>{const{pulsate:F=!1,center:L=o||E.pulsate,fakeElement:j=!1}=E;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const y=j?null:D.current,I=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,x,S;if(L||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)B=Math.round(I.width/2),x=Math.round(I.height/2);else{const{clientX:O,clientY:k}=c.touches&&c.touches.length>0?c.touches[0]:c;B=Math.round(O-I.left),x=Math.round(k-I.top)}if(L)S=Math.sqrt((2*I.width**2+I.height**2)/3),S%2===0&&(S+=1);else{const O=Math.max(Math.abs((y?y.clientWidth:0)-B),B)*2+2,k=Math.max(Math.abs((y?y.clientHeight:0)-x),x)*2+2;S=Math.sqrt(O**2+k**2)}c!=null&&c.touches?g.current===null&&(g.current=()=>{T({pulsate:F,rippleX:B,rippleY:x,rippleSize:S,cb:R})},V.start(Gt,()=>{g.current&&(g.current(),g.current=null)})):T({pulsate:F,rippleX:B,rippleY:x,rippleSize:S,cb:R})},[o,T,V]),W=l.useCallback(()=>{N({},{pulsate:!0})},[N]),$=l.useCallback((c,E)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&g.current){g.current(),g.current=null,V.start(0,()=>{$(c,E)});return}g.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[V]);return l.useImperativeHandle(t,()=>({pulsate:W,start:N,stop:$}),[W,N,$]),U(Qt,{className:C(b.root,r.root,i),ref:D,...p,children:U(ot,{component:null,exit:!0,children:u})})});function ne(n){return kt("MuiButtonBase",n)}const oe=ct("MuiButtonBase",["root","disabled","focusVisible"]),re=n=>{const{disabled:e,focusVisible:t,focusVisibleClassName:a,classes:o}=n,i=Dt({root:["root",e&&"disabled",t&&"focusVisible"]},ne,o);return t&&a&&(i.root+=` ${a}`),i},ie=Q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${oe.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),be=l.forwardRef(function(e,t){const a=ut({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:g="a",onBlur:D,onClick:T,onContextMenu:N,onDragLeave:W,onFocus:$,onFocusVisible:c,onKeyDown:E,onKeyUp:R,onMouseDown:F,onMouseLeave:L,onMouseUp:j,onTouchEnd:y,onTouchMove:I,onTouchStart:B,tabIndex:x=0,TouchRippleProps:S,touchRippleRef:O,type:k,...z}=a,A=l.useRef(null),m=Wt(),ft=it(m.ref,O),[w,H]=l.useState(!1);f&&w&&H(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{H(!0),A.current.focus()}}),[]);const dt=m.shouldMount&&!d&&!f;l.useEffect(()=>{w&&M&&!d&&m.pulsate()},[d,M,w,m]);const ht=P(m,"start",F,h),mt=P(m,"stop",N,h),gt=P(m,"stop",W,h),bt=P(m,"stop",j,h),Mt=P(m,"stop",s=>{w&&s.preventDefault(),L&&L(s)},h),Rt=P(m,"start",B,h),Et=P(m,"stop",y,h),yt=P(m,"stop",I,h),Ct=P(m,"stop",s=>{st(s.target)||H(!1),D&&D(s)},!1),Tt=G(s=>{A.current||(A.current=s.currentTarget),st(s.target)&&(H(!0),c&&c(s)),$&&$(s)}),Z=()=>{const s=A.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},xt=G(s=>{M&&!s.repeat&&w&&s.key===" "&&m.stop(s,()=>{m.start(s)}),s.target===s.currentTarget&&Z()&&s.key===" "&&s.preventDefault(),E&&E(s),s.target===s.currentTarget&&Z()&&s.key==="Enter"&&!f&&(s.preventDefault(),T&&T(s))}),Pt=G(s=>{M&&s.key===" "&&w&&!s.defaultPrevented&&m.stop(s,()=>{m.pulsate(s)}),R&&R(s),T&&s.target===s.currentTarget&&Z()&&s.key===" "&&!s.defaultPrevented&&T(s)});let _=u;_==="button"&&(z.href||z.to)&&(_=g);const Y={};_==="button"?(Y.type=k===void 0?"button":k,Y.disabled=f):(!z.href&&!z.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const Vt=it(t,A),rt={...a,centerRipple:r,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:x,focusVisible:w},It=re(rt);return Lt(ie,{as:_,className:C(It.root,p),ownerState:rt,onBlur:Ct,onClick:T,onContextMenu:mt,onFocus:Tt,onKeyDown:xt,onKeyUp:Pt,onMouseDown:ht,onMouseLeave:Mt,onMouseUp:bt,onDragLeave:gt,onTouchEnd:Et,onTouchMove:yt,onTouchStart:Rt,ref:Vt,tabIndex:f?-1:x,type:k,...Y,...z,children:[i,dt?U(ee,{ref:ft,center:r,...S}):null]})});function P(n,e,t,a=!1){return G(o=>(t&&t(o),a||n[e](o),!0))}export{be as B,lt as T,Ot as _,G as a,et as b,ot as c,jt as u};
