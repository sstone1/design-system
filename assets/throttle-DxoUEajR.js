import{g as I}from"./_commonjsHelpers-BosuxZz1.js";import{d as j,b as R}from"./_baseGet-M27wXSAO.js";import{t as F}from"./toNumber-ZmszYdZ1.js";var L=j,M=function(){return L.Date.now()},N=M,S=R,x=N,C=F,A="Expected a function",D=Math.max,U=Math.min;function X(d,i,n){var r,a,s,f,t,o,l=0,E=!1,c=!1,v=!0;if(typeof d!="function")throw new TypeError(A);i=C(i)||0,S(n)&&(E=!!n.leading,c="maxWait"in n,s=c?D(C(n.maxWait)||0,i):s,v="trailing"in n?!!n.trailing:v);function T(e){var u=r,m=a;return r=a=void 0,l=e,f=d.apply(m,u),f}function $(e){return l=e,t=setTimeout(g,i),E?T(e):f}function p(e){var u=e-o,m=e-l,k=i-u;return c?U(k,s-m):k}function b(e){var u=e-o,m=e-l;return o===void 0||u>=i||u<0||c&&m>=s}function g(){var e=x();if(b(e))return _(e);t=setTimeout(g,p(e))}function _(e){return t=void 0,v&&r?T(e):(r=a=void 0,f)}function y(){t!==void 0&&clearTimeout(t),l=0,r=o=a=t=void 0}function O(){return t===void 0?f:_(x())}function h(){var e=x(),u=b(e);if(r=arguments,a=this,o=e,u){if(t===void 0)return $(o);if(c)return clearTimeout(t),t=setTimeout(g,i),T(o)}return t===void 0&&(t=setTimeout(g,i)),f}return h.cancel=y,h.flush=O,h}var W=X;const P=I(W);var q=W,w=R,z="Expected a function";function B(d,i,n){var r=!0,a=!0;if(typeof d!="function")throw new TypeError(z);return w(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),q(d,i,{leading:r,maxWait:i,trailing:a})}var G=B;const Q=I(G);export{P as d,Q as t};
