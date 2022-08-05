"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[1148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53205:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(76775);const r="apiTable_e8hp";function i(e,t){let{name:n,children:r}=e;const i=function(e){let t=e;for(;(0,a.isValidElement)(t);)[t]=a.Children.toArray(t.props.children);return t}(r),l=n?n+"-"+i:i,s="#"+l,u=(0,o.k6)();return a.createElement("tr",{id:l,tabIndex:0,ref:u.location.hash===s?t:void 0,onClick:()=>{u.push(s)},onKeyDown:e=>{"Enter"===e.key&&u.push(s)}},r.props.children)}const l=a.forwardRef(i);function s(e){let{children:t,name:n}=e;const[o,i]=a.Children.toArray(t.props.children),s=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e;null==(e=s.current)||e.focus()}),[s]);const u=a.Children.map(i.props.children,(e=>a.createElement(l,{name:n,ref:s},e)));return a.createElement("table",{className:r},o,a.createElement("tbody",null,u))}},28034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(53205);const i={sidebar_position:7,id:"plugin-google-gtag",title:"\ud83d\udce6 plugin-google-gtag",slug:"/api/plugins/@docusaurus/plugin-google-gtag"},l=void 0,s={unversionedId:"api/plugins/plugin-google-gtag",id:"api/plugins/plugin-google-gtag",title:"\ud83d\udce6 plugin-google-gtag",description:"The default Global Site Tag (gtag.js) plugin. It is a JavaScript tagging framework and API that allows you to send event data to Google Analytics, Google Ads, and Google Marketing Platform. This section describes how to configure a Docusaurus site to enable global site tag for Google Analytics.",source:"@site/docs/api/plugins/plugin-google-gtag.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-gtag",permalink:"/docs/api/plugins/@docusaurus/plugin-google-gtag",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"plugin-google-gtag",title:"\ud83d\udce6 plugin-google-gtag",slug:"/api/plugins/@docusaurus/plugin-google-gtag"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-google-analytics",permalink:"/docs/api/plugins/@docusaurus/plugin-google-analytics"},next:{title:"\ud83d\udce6 plugin-ideal-image",permalink:"/docs/api/plugins/@docusaurus/plugin-ideal-image"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],g={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The default ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/collection/gtagjs/"},"Global Site Tag (gtag.js)")," plugin. It is a JavaScript tagging framework and API that allows you to send event data to Google Analytics, Google Ads, and Google Marketing Platform. This section describes how to configure a Docusaurus site to enable global site tag for Google Analytics."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://tagassistant.google.com/"},"Google's Tag Assistant")," tool to check if your gtag is set up correctly!")),(0,o.kt)("admonition",{title:"production only",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This plugin is always inactive in development and ",(0,o.kt)("strong",{parentName:"p"},"only active in production")," to avoid polluting the analytics statistics.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/plugin-google-gtag\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you use the preset ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,o.kt)("p",{parentName:"admonition"},"You can configure this plugin through the preset options.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Accepted fields:"),(0,o.kt)(r.Z,{mdxType:"APITable"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"trackingID")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"The tracking ID of your gtag service.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"anonymizeIP")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the IP should be anonymized when sending requests."))))),(0,o.kt)("h3",{id:"ex-config"},"Example configuration"),(0,o.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Most Docusaurus users configure this plugin through the preset options.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"config-tabs","config-tabs":!0},"// Preset Options: gtag\n// Plugin Options: @docusaurus/plugin-google-gtag\n\nconst config = {\n  trackingID: 'G-226F0LR9KE',\n  anonymizeIP: true,\n};\n")))}c.isMDXComponent=!0}}]);