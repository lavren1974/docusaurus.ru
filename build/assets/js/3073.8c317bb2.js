"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[3073],{23777:(e,t,n)=>{n.d(t,{c:()=>c});var r=n(67294),o=n(39962);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function f(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),s}}),[e])}function c(){const e=f();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}},66441:(e,t,n)=>{n.d(t,{D:()=>we});var r=n(67294),o=n(73935);function i(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function a(e){return e instanceof i(e).Element||e instanceof Element}function s(e){return e instanceof i(e).HTMLElement||e instanceof HTMLElement}function f(e){return"undefined"!=typeof ShadowRoot&&(e instanceof i(e).ShadowRoot||e instanceof ShadowRoot)}var c=Math.max,u=Math.min,l=Math.round;function p(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(s(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=l(n.width)/a||1),i>0&&(o=l(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function d(e){var t=i(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function m(e){return e?(e.nodeName||"").toLowerCase():null}function h(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function v(e){return p(h(e)).left+d(e).scrollLeft}function g(e){return i(e).getComputedStyle(e)}function y(e){var t=g(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function b(e,t,n){void 0===n&&(n=!1);var r,o,a=s(t),f=s(t)&&function(e){var t=e.getBoundingClientRect(),n=l(t.width)/e.offsetWidth||1,r=l(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),c=h(t),u=p(e,f),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(a||!a&&!n)&&(("body"!==m(t)||y(c))&&(g=(r=t)!==i(r)&&s(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:d(r)),s(t)?((b=p(t,!0)).x+=t.clientLeft,b.y+=t.clientTop):c&&(b.x=v(c))),{x:u.left+g.scrollLeft-b.x,y:u.top+g.scrollTop-b.y,width:u.width,height:u.height}}function w(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function x(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||(f(e)?e.host:null)||h(e)}function O(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:s(e)&&y(e)?e:O(x(e))}function j(e,t){var n;void 0===t&&(t=[]);var r=O(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),a=i(r),s=o?[a].concat(a.visualViewport||[],y(r)?r:[]):r,f=t.concat(s);return o?f:f.concat(j(x(s)))}function E(e){return["table","td","th"].indexOf(m(e))>=0}function D(e){return s(e)&&"fixed"!==g(e).position?e.offsetParent:null}function k(e){for(var t=i(e),n=D(e);n&&E(n)&&"static"===g(n).position;)n=D(n);return n&&("html"===m(n)||"body"===m(n)&&"static"===g(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&s(e)&&"fixed"===g(e).position)return null;var n=x(e);for(f(n)&&(n=n.host);s(n)&&["html","body"].indexOf(m(n))<0;){var r=g(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var A="top",M="bottom",L="right",P="left",R="auto",W=[A,M,L,P],B="start",F="end",S="viewport",H="popper",C=W.reduce((function(e,t){return e.concat([t+"-"+B,t+"-"+F])}),[]),T=[].concat(W,[R]).reduce((function(e,t){return e.concat([t,t+"-"+B,t+"-"+F])}),[]),q=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function U(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var V={placement:"bottom",modifiers:[],strategy:"absolute"};function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function N(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?V:o;return function(e,t,n){void 0===n&&(n=i);var o,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},V,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,l={state:f,setOptions:function(n){var o="function"==typeof n?n(f.options):n;p(),f.options=Object.assign({},i,f.options,o),f.scrollParents={reference:a(e)?j(e):e.contextElement?j(e.contextElement):[],popper:j(t)};var s=function(e){var t=U(e);return q.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,f.options.modifiers)));return f.orderedModifiers=s.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:l,options:r}),a=function(){};c.push(i||a)}})),l.update()},forceUpdate:function(){if(!u){var e=f.elements,t=e.reference,n=e.popper;if(I(t,n)){f.rects={reference:b(t,k(n),"fixed"===f.options.strategy),popper:w(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:l})||f)}else f.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){p(),u=!0}};if(!I(e,t))return l;function p(){c.forEach((function(e){return e()})),c=[]}return l.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var _={passive:!0};function z(e){return e.split("-")[0]}function X(e){return e.split("-")[1]}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?z(o):null,a=o?X(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case A:t={x:s,y:n.y-r.height};break;case M:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case P:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?Y(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case B:t[c]=t[c]-(n[u]/2-r[u]/2);break;case F:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,f=e.position,c=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,d=e.isFixed,m=s.x,v=void 0===m?0:m,y=s.y,b=void 0===y?0:y,w="function"==typeof p?p({x:v,y:b}):{x:v,y:b};v=w.x,b=w.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),j=P,E=A,D=window;if(u){var R=k(n),W="clientHeight",B="clientWidth";if(R===i(n)&&"static"!==g(R=h(n)).position&&"absolute"===f&&(W="scrollHeight",B="scrollWidth"),o===A||(o===P||o===L)&&a===F)E=M,b-=(d&&R===D&&D.visualViewport?D.visualViewport.height:R[W])-r.height,b*=c?1:-1;if(o===P||(o===A||o===M)&&a===F)j=L,v-=(d&&R===D&&D.visualViewport?D.visualViewport.width:R[B])-r.width,v*=c?1:-1}var S,H=Object.assign({position:f},u&&G),C=!0===p?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:l(t*r)/r||0,y:l(n*r)/r||0}}({x:v,y:b}):{x:v,y:b};return v=C.x,b=C.y,c?Object.assign({},H,((S={})[E]=O?"0":"",S[j]=x?"0":"",S.transform=(D.devicePixelRatio||1)<=1?"translate("+v+"px, "+b+"px)":"translate3d("+v+"px, "+b+"px, 0)",S)):Object.assign({},H,((t={})[E]=O?b+"px":"",t[j]=x?v+"px":"",t.transform="",t))}const K={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=T.reduce((function(e,n){return e[n]=function(e,t,n){var r=z(e),o=[P,A].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}};var Q={left:"right",right:"left",bottom:"top",top:"bottom"};function $(e){return e.replace(/left|right|bottom|top/g,(function(e){return Q[e]}))}var ee={start:"end",end:"start"};function te(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function ne(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&f(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t){return t===S?re(function(e){var t=i(e),n=h(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,f=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,f=r.offsetTop)),{width:o,height:a,x:s+v(e),y:f}}(e)):a(t)?function(e){var t=p(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):re(function(e){var t,n=h(e),r=d(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=c(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=c(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+v(e),f=-r.scrollTop;return"rtl"===g(o||n).direction&&(s+=c(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(h(e)))}function ie(e,t,n){var r="clippingParents"===t?function(e){var t=j(x(e)),n=["absolute","fixed"].indexOf(g(e).position)>=0&&s(e)?k(e):e;return a(n)?t.filter((function(e){return a(e)&&ne(e,n)&&"body"!==m(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],f=o.reduce((function(t,n){var r=oe(e,n);return t.top=c(r.top,t.top),t.right=u(r.right,t.right),t.bottom=u(r.bottom,t.bottom),t.left=c(r.left,t.left),t}),oe(e,i));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function ae(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function se(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function fe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,s=void 0===i?"clippingParents":i,f=n.rootBoundary,c=void 0===f?S:f,u=n.elementContext,l=void 0===u?H:u,d=n.altBoundary,m=void 0!==d&&d,v=n.padding,g=void 0===v?0:v,y=ae("number"!=typeof g?g:se(g,W)),b=l===H?"reference":H,w=e.rects.popper,x=e.elements[m?b:l],O=ie(a(x)?x:x.contextElement||h(e.elements.popper),s,c),j=p(e.elements.reference),E=Z({reference:j,element:w,strategy:"absolute",placement:o}),D=re(Object.assign({},w,E)),k=l===H?D:j,P={top:O.top-k.top+y.top,bottom:k.bottom-O.bottom+y.bottom,left:O.left-k.left+y.left,right:k.right-O.right+y.right},R=e.modifiersData.offset;if(l===H&&R){var B=R[o];Object.keys(P).forEach((function(e){var t=[L,M].indexOf(e)>=0?1:-1,n=[A,M].indexOf(e)>=0?"y":"x";P[e]+=B[n]*t}))}return P}function ce(e,t,n){return c(e,u(t,n))}const ue={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.padding,m=n.tether,h=void 0===m||m,v=n.tetherOffset,g=void 0===v?0:v,y=fe(t,{boundary:f,rootBoundary:l,padding:d,altBoundary:p}),b=z(t.placement),x=X(t.placement),O=!x,j=Y(b),E="x"===j?"y":"x",D=t.modifiersData.popperOffsets,R=t.rects.reference,W=t.rects.popper,F="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,S="number"==typeof F?{mainAxis:F,altAxis:F}:Object.assign({mainAxis:0,altAxis:0},F),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(D){if(i){var T,q="y"===j?A:P,U="y"===j?M:L,V="y"===j?"height":"width",I=D[j],N=I+y[q],_=I-y[U],Z=h?-W[V]/2:0,G=x===B?R[V]:W[V],J=x===B?-W[V]:-R[V],K=t.elements.arrow,Q=h&&K?w(K):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[q],te=$[U],ne=ce(0,R[V],Q[V]),re=O?R[V]/2-Z-ne-ee-S.mainAxis:G-ne-ee-S.mainAxis,oe=O?-R[V]/2+Z+ne+te+S.mainAxis:J+ne+te+S.mainAxis,ie=t.elements.arrow&&k(t.elements.arrow),ae=ie?"y"===j?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(T=null==H?void 0:H[j])?T:0,ue=I+oe-se,le=ce(h?u(N,I+re-se-ae):N,I,h?c(_,ue):_);D[j]=le,C[j]=le-I}if(s){var pe,de="x"===j?A:P,me="x"===j?M:L,he=D[E],ve="y"===E?"height":"width",ge=he+y[de],ye=he-y[me],be=-1!==[A,P].indexOf(b),we=null!=(pe=null==H?void 0:H[E])?pe:0,xe=be?ge:he-R[ve]-W[ve]-we+S.altAxis,Oe=be?he+R[ve]+W[ve]-we-S.altAxis:ye,je=h&&be?function(e,t,n){var r=ce(e,t,n);return r>n?n:r}(xe,he,Oe):ce(h?xe:ge,he,h?Oe:ye);D[E]=je,C[E]=je-he}t.modifiersData[r]=C}},requiresIfExists:["offset"]};const le={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=z(n.placement),f=Y(s),c=[P,L].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return ae("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:se(e,W))}(o.padding,n),l=w(i),p="y"===f?A:P,d="y"===f?M:L,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=k(i),g=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=u[p],x=g-l[c]-u[d],O=g/2-l[c]/2+y,j=ce(b,O,x),E=f;n.modifiersData[r]=((t={})[E]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ne(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function pe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function de(e){return[A,L,M,P].some((function(t){return e[t]>=0}))}var me=N({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,s=r.resize,f=void 0===s||s,c=i(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,_)})),f&&c.addEventListener("resize",n.update,_),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,_)})),f&&c.removeEventListener("resize",n.update,_)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Z({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:z(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&m(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&m(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},K,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=z(v),y=f||(g===v||!m?[$(v)]:function(e){if(z(e)===R)return[];var t=$(e);return[te(e),t,te(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(z(n)===R?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?T:f,u=X(r),l=u?s?C:C.filter((function(e){return X(e)===u})):W,p=l.filter((function(e){return c.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=fe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[z(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],D=0;D<b.length;D++){var k=b[D],F=z(k),S=X(k)===B,H=[A,M].indexOf(F)>=0,q=H?"width":"height",U=fe(t,{placement:k,boundary:u,rootBoundary:l,altBoundary:p,padding:c}),V=H?S?L:P:S?M:A;w[q]>x[q]&&(V=$(V));var I=$(V),N=[];if(i&&N.push(U[F]<=0),s&&N.push(U[V]<=0,U[I]<=0),N.every((function(e){return e}))){E=k,j=!1;break}O.set(k,N)}if(j)for(var _=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},Y=m?3:1;Y>0;Y--){if("break"===_(Y))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ue,le,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),f=pe(a,r),c=pe(s,o,i),u=de(f),l=de(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),he=n(69590),ve=n.n(he),ge=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},ye="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,be=[],we=function(e,t,n){void 0===n&&(n={});var i=r.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||be},s=r.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),f=s[0],c=s[1],u=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);o.flushSync((function(){c({styles:ge(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:ge(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),l=r.useMemo((function(){var e={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[u,{name:"applyStyles",enabled:!1}])};return ve()(i.current,e)?i.current||e:(i.current=e,e)}),[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,u]),p=r.useRef();return ye((function(){p.current&&p.current.setOptions(l)}),[l]),ye((function(){if(null!=e&&null!=t){var r=(n.createPopper||me)(e,t,l);return p.current=r,function(){r.destroy(),p.current=null}}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:f.styles,attributes:f.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}}}}]);