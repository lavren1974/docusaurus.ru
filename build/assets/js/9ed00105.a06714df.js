"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[9004],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?o.createElement(g,r(r({ref:n},c),{},{components:t})):o.createElement(g,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=t[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68839:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(67294),a=t(2728);const i="tableOfContentsInline_prmo";function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return o.createElement("div",{className:i},o.createElement(a.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:r,className:"table-of-contents",linkClassName:null}))}},2728:(e,n,t)=>{t.d(n,{Z:()=>g});var o=t(87462),a=t(67294),i=t(20107);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):o.push(a)})),o}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:o});return function(e){return e.level>=t&&e.level<=o}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function u(e,n){var t;let{anchorTopOffset:o}=n;const a=e.find((e=>l(e).top>=o));if(a){var i;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:null!=(i=e[e.indexOf(a)-1])?i:null}return null!=(t=e[e.length-1])?t:null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const o=[];for(let a=n;a<=t;a+=1)o.push("h"+a+".anchor");return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),l=u(s,{anchorTopOffset:t.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}function p(e){let{toc:n,className:t,linkClassName:o,isChild:i}=e;return n.length?a.createElement("ul",{className:i?void 0:t},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=o?o:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(p,{isChild:!0,toc:e.children,className:t,linkClassName:o}))))):null}const m=a.memo(p);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:c,maxHeadingLevel:p,...g}=e;const f=(0,i.L)(),h=null!=c?c:f.tableOfContents.minHeadingLevel,k=null!=p?p:f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,a.useMemo)((()=>s({toc:r(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:h,maxHeadingLevel:k});return d((0,a.useMemo)((()=>{if(l&&u)return{linkClassName:l,linkActiveClassName:u,minHeadingLevel:h,maxHeadingLevel:k}}),[l,u,h,k])),a.createElement(m,(0,o.Z)({toc:v,className:t,linkClassName:l},g))}},59270:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(87462),a=(t(67294),t(3905)),i=t(68839);const r={id:"configuration",title:"Configuration"},s=void 0,l={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",permalink:"/docs/installation"},next:{title:"Playground",permalink:"/docs/playground"}},u={},c=[{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",level:2},{value:"Site metadata",id:"site-metadata",level:3},{value:"Deployment configurations",id:"deployment-configurations",level:3},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",level:3},{value:"Custom configurations",id:"custom-configurations",level:3},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",level:2},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site."),(0,a.kt)("p",null,"Keeping a well-maintained ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," helps you, your collaborators, and your open source contributors to be able to focus on documentation while still being able to customize the site."),(0,a.kt)("h2",{id:"what-goes-into-a-docusaurusconfigjs"},"What goes into a ",(0,a.kt)("inlineCode",{parentName:"h2"},"docusaurus.config.js"),"?"),(0,a.kt)("p",null,"You should not have to write your ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from scratch even if you are developing your site. All templates come with a ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," that includes defaults for the common options."),(0,a.kt)("p",null,"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."),(0,a.kt)("p",null,"The high-level overview of Docusaurus configuration can be categorized into:"),(0,a.kt)(i.Z,{toc:c,minHeadingLevel:3,maxHeadingLevel:3,mdxType:"TOCInline"}),(0,a.kt)("p",null,"For exact reference to each of the configurable fields, you may refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/docusaurus-config"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"docusaurus.config.js")," API reference")),"."),(0,a.kt)("h3",{id:"site-metadata"},"Site metadata"),(0,a.kt)("p",null,"Site metadata contains the essential global metadata such as ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"favicon"),"."),(0,a.kt)("p",null,"They are used in several places such as your site's title and headings, browser tab icon, social sharing (Facebook, Twitter) information or even to generate the correct path to serve your static files."),(0,a.kt)("h3",{id:"deployment-configurations"},"Deployment configurations"),(0,a.kt)("p",null,"Deployment configurations such as ",(0,a.kt)("inlineCode",{parentName:"p"},"projectName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"organizationName"),", and optionally ",(0,a.kt)("inlineCode",{parentName:"p"},"deploymentBranch")," are used when you deploy your site with the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," command."),(0,a.kt)("p",null,"It is recommended to check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/deployment"},"deployment docs")," for more information."),(0,a.kt)("h3",{id:"theme-plugin-and-preset-configurations"},"Theme, plugin, and preset configurations"),(0,a.kt)("p",null,"List the ",(0,a.kt)("a",{parentName:"p",href:"/docs/using-plugins#using-themes"},"themes"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/using-plugins"},"plugins"),", and ",(0,a.kt)("a",{parentName:"p",href:"/docs/using-plugins#using-presets"},"presets")," for your site in the ",(0,a.kt)("inlineCode",{parentName:"p"},"themes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"presets")," fields, respectively. These are typically npm packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Docusaurus supports ",(0,a.kt)("a",{parentName:"p",href:"/docs/using-plugins#module-shorthands"},(0,a.kt)("strong",{parentName:"a"},"module shorthands")),", allowing you to simplify the above configuration as:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: ['content-blog', 'content-pages'],\n  themes: ['classic'],\n};\n"))),(0,a.kt)("p",null,"They can also be loaded from local directories:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const path = require('path');\n\nmodule.exports = {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n")),(0,a.kt)("p",null,"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    [\n      'content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    'content-pages',\n  ],\n};\n")),(0,a.kt)("p",null,"To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",(0,a.kt)("inlineCode",{parentName:"p"},"presets")," field. In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," refers to ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," refers to ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        theme: {\n          customCss: [require.resolve('./src/css/custom.css')],\n        },\n      },\n    ],\n  ],\n};\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"presets: [['classic', {...}]]")," shorthand works as well.")),(0,a.kt)("p",null,"For further help configuring themes, plugins, and presets, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/using-plugins"},"Using Plugins"),"."),(0,a.kt)("h3",{id:"custom-configurations"},"Custom configurations"),(0,a.kt)("p",null,"Docusaurus guards ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from unknown fields. To add custom fields, define them in ",(0,a.kt)("inlineCode",{parentName:"p"},"customFields"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n")),(0,a.kt)("h2",{id:"accessing-configuration-from-components"},"Accessing configuration from components"),(0,a.kt)("p",null,"Your configuration object will be made available to all the components of your site. And you may access them via React context as ",(0,a.kt)("inlineCode",{parentName:"p"},"siteConfig"),"."),(0,a.kt)("p",null,"Basic example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),".")),(0,a.kt)("h2",{id:"customizing-babel-configuration"},"Customizing Babel Configuration"),(0,a.kt)("p",null,"For new Docusaurus projects, we automatically generated a ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js")," in the project root."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],\n};\n")),(0,a.kt)("p",null,"Most of the time, this configuration will work just fine. If you want to customize your babel configuration (e.g. to add support for Flow), you can directly edit this file. For your changes to take effect, you need to restart the Docusaurus dev server."))}p.isMDXComponent=!0}}]);