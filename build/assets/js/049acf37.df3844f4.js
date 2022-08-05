"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[7657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53205:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(76775);const i="apiTable_e8hp";function l(e,t){let{name:n,children:i}=e;const l=function(e){let t=e;for(;(0,a.isValidElement)(t);)[t]=a.Children.toArray(t.props.children);return t}(i),o=n?n+"-"+l:l,p="#"+o,s=(0,r.k6)();return a.createElement("tr",{id:o,tabIndex:0,ref:s.location.hash===p?t:void 0,onClick:()=>{s.push(p)},onKeyDown:e=>{"Enter"===e.key&&s.push(p)}},i.props.children)}const o=a.forwardRef(l);function p(e){let{children:t,name:n}=e;const[r,l]=a.Children.toArray(t.props.children),p=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e;null==(e=p.current)||e.focus()}),[p]);const s=a.Children.map(l.props.children,(e=>a.createElement(o,{name:n,ref:p},e)));return a.createElement("table",{className:i},r,a.createElement("tbody",null,s))}},45479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(53205);const l={sidebar_position:3,id:"plugin-content-pages",title:"\ud83d\udce6 plugin-content-pages",slug:"/api/plugins/@docusaurus/plugin-content-pages"},o=void 0,p={unversionedId:"api/plugins/plugin-content-pages",id:"api/plugins/plugin-content-pages",title:"\ud83d\udce6 plugin-content-pages",description:"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides creating pages functionality.",source:"@site/docs/api/plugins/plugin-content-pages.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-content-pages",permalink:"/docs/api/plugins/@docusaurus/plugin-content-pages",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"plugin-content-pages",title:"\ud83d\udce6 plugin-content-pages",slug:"/api/plugins/@docusaurus/plugin-content-pages"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-blog",permalink:"/docs/api/plugins/@docusaurus/plugin-content-blog"},next:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/docs/api/plugins/@docusaurus/plugin-client-redirects"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3},{value:"i18n",id:"i18n",level:2},{value:"Translation files location",id:"translation-files-location",level:3},{value:"Example file-system structure",id:"example-file-system-structure",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides ",(0,r.kt)("a",{parentName:"p",href:"/docs/creating-pages"},"creating pages")," functionality."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/plugin-content-pages\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you use the preset ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,r.kt)("p",{parentName:"admonition"},"You can configure this plugin through the preset options.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Accepted fields:"),(0,r.kt)(i.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'src/pages'")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to data on filesystem relative to site dir. Components in this directory will be automatically converted to pages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"routeBasePath")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'/'")),(0,r.kt)("td",{parentName:"tr",align:null},"URL route for the pages section of your site. ",(0,r.kt)("strong",{parentName:"td"},"DO NOT")," include a trailing slash.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"['**/*.{js,jsx,ts,tsx,md,mdx}']")),(0,r.kt)("td",{parentName:"tr",align:null},"Matching files will be included and processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"exclude")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"See example configuration")),(0,r.kt)("td",{parentName:"tr",align:null},"No route will be created for matching files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdxPageComponent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'@theme/MDXPage'")),(0,r.kt)("td",{parentName:"tr",align:null},"Component used by each MDX page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"remarkPlugins")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Remark plugins passed to MDX.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rehypePlugins")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Rehype plugins passed to MDX.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"beforeDefaultRemarkPlugins")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Remark plugins passed to MDX before the default Docusaurus Remark plugins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"beforeDefaultRehypePlugins")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Rehype plugins passed to MDX before the default Docusaurus Rehype plugins."))))),(0,r.kt)("h3",{id:"ex-config"},"Example configuration"),(0,r.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Most Docusaurus users configure this plugin through the preset options.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"config-tabs","config-tabs":!0},"// Preset Options: pages\n// Plugin Options: @docusaurus/plugin-content-pages\n\nconst config = {\n  path: 'src/pages',\n  routeBasePath: '',\n  include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],\n  exclude: [\n    '**/_*.{js,jsx,ts,tsx,md,mdx}',\n    '**/_*/**',\n    '**/*.test.{js,jsx,ts,tsx}',\n    '**/__tests__/**',\n  ],\n  mdxPageComponent: '@theme/MDXPage',\n  remarkPlugins: [require('remark-math')],\n  rehypePlugins: [],\n  beforeDefaultRemarkPlugins: [],\n  beforeDefaultRehypePlugins: [],\n};\n")),(0,r.kt)("h2",{id:"i18n"},"i18n"),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/introduction"},"i18n introduction")," first."),(0,r.kt)("h3",{id:"translation-files-location"},"Translation files location"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Base path"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multi-instance path"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-pages-[pluginId]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSON files"),": extracted with ",(0,r.kt)("a",{parentName:"li",href:"/docs/cli#docusaurus-write-translations-sitedir"},(0,r.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Markdown files"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-pages"))),(0,r.kt)("h3",{id:"example-file-system-structure"},"Example file-system structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"website/i18n/[locale]/docusaurus-plugin-content-pages\n\u2502\n\u2502 # translations for website/src/pages\n\u251c\u2500\u2500 first-markdown-page.md\n\u2514\u2500\u2500 second-markdown-page.md\n")))}c.isMDXComponent=!0}}]);