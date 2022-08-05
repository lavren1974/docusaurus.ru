"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[3329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=i,m=g["".concat(u,".").concat(d)]||g[d]||c[d]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},53205:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),i=n(76775);const r="apiTable_e8hp";function o(e,t){let{name:n,children:r}=e;const o=function(e){let t=e;for(;(0,a.isValidElement)(t);)[t]=a.Children.toArray(t.props.children);return t}(r),l=n?n+"-"+o:o,u="#"+l,s=(0,i.k6)();return a.createElement("tr",{id:l,tabIndex:0,ref:s.location.hash===u?t:void 0,onClick:()=>{s.push(u)},onKeyDown:e=>{"Enter"===e.key&&s.push(u)}},r.props.children)}const l=a.forwardRef(o);function u(e){let{children:t,name:n}=e;const[i,o]=a.Children.toArray(t.props.children),u=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e;null==(e=u.current)||e.focus()}),[u]);const s=a.Children.map(o.props.children,(e=>a.createElement(l,{name:n,ref:u},e)));return a.createElement("table",{className:r},i,a.createElement("tbody",null,s))}},88653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(53205);const o={sidebar_position:6,id:"plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics",slug:"/api/plugins/@docusaurus/plugin-google-analytics"},l=void 0,u={unversionedId:"api/plugins/plugin-google-analytics",id:"api/plugins/plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics",description:"The default Google Analytics plugin. It is a JavaScript library for measuring how users interact with your website in the production build. If you are using Google Analytics 4 you might need to consider using plugin-google-gtag instead.",source:"@site/docs/api/plugins/plugin-google-analytics.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-analytics",permalink:"/docs/api/plugins/@docusaurus/plugin-google-analytics",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics",slug:"/api/plugins/@docusaurus/plugin-google-analytics"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-debug",permalink:"/docs/api/plugins/@docusaurus/plugin-debug"},next:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/docs/api/plugins/@docusaurus/plugin-google-gtag"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],c={toc:p};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The default ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/"},"Google Analytics")," plugin. It is a JavaScript library for measuring how users interact with your website ",(0,i.kt)("strong",{parentName:"p"},"in the production build"),". If you are using Google Analytics 4 you might need to consider using ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-google-gtag"},"plugin-google-gtag")," instead."),(0,i.kt)("admonition",{title:"production only",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This plugin is always inactive in development and ",(0,i.kt)("strong",{parentName:"p"},"only active in production")," to avoid polluting the analytics statistics.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/plugin-google-analytics\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you use the preset ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,i.kt)("p",{parentName:"admonition"},"You can configure this plugin through the preset options.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Accepted fields:"),(0,i.kt)(r.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"trackingID")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"The tracking ID of your analytics service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"anonymizeIP")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the IP should be anonymized when sending requests."))))),(0,i.kt)("h3",{id:"ex-config"},"Example configuration"),(0,i.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Most Docusaurus users configure this plugin through the preset options.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"config-tabs","config-tabs":!0},"// Preset Options: googleAnalytics\n// Plugin Options: @docusaurus/plugin-google-analytics\n\nconst config = {\n  trackingID: 'UA-141789564-1',\n  anonymizeIP: true,\n};\n")))}g.isMDXComponent=!0}}]);