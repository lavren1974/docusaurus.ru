"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[9004],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81615:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294),o="tableOfContentsInline_gwOO",i=t(83651);function r(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return a.createElement("div",{className:o},a.createElement(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:r,className:"table-of-contents",linkClassName:null}))}},83651:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(87462),o=t(63366),i=t(67294);function r(e){var n=e.toc,t=e.className,a=e.linkClassName,o=e.isChild;return n.length?i.createElement("ul",{className:o?void 0:t},n.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}var s=i.memo(r),l=["parentIndex"];function u(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,o.Z)(e,l);t>=0?n[t].children.push(i):a.push(i)})),a}function c(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}var d=t(20107);function m(e){var n=e.getBoundingClientRect();return n.top===n.bottom?m(e.parentNode):n}function p(e,n){var t,a,o=n.anchorTopOffset,i=e.find((function(e){return m(e).top>=o}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function g(){var e=(0,i.useRef)(0),n=(0,d.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){var n=(0,i.useRef)(void 0),t=g();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,o=e.linkActiveClassName,i=e.minHeadingLevel,r=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],o=n;o<=t;o+=1)a.push("h"+o+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),l=p(s,{anchorTopOffset:t.current}),u=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var a;n.current&&n.current!==e&&(null==(a=n.current)||a.classList.remove(o)),e.classList.add(o),n.current=e}else e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function v(e){var n=e.toc,t=e.className,r=void 0===t?"table-of-contents table-of-contents__left-border":t,l=e.linkClassName,m=void 0===l?"table-of-contents__link":l,p=e.linkActiveClassName,g=void 0===p?void 0:p,v=e.minHeadingLevel,k=e.maxHeadingLevel,N=(0,o.Z)(e,h),y=(0,d.L)(),b=null!=v?v:y.tableOfContents.minHeadingLevel,C=null!=k?k:y.tableOfContents.maxHeadingLevel,w=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return c({toc:u(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:b,maxHeadingLevel:C});return f((0,i.useMemo)((function(){if(m&&g)return{linkClassName:m,linkActiveClassName:g,minHeadingLevel:b,maxHeadingLevel:C}}),[m,g,b,C])),i.createElement(s,(0,a.Z)({toc:w,className:r,linkClassName:m},N))}},59270:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),r=t(81615),s=["components"],l={id:"configuration",title:"Configuration"},u=void 0,c={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Playground",permalink:"/docs/playground"}},d={},m=[{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",level:2},{value:"Site metadata",id:"site-metadata",level:3},{value:"Deployment configurations",id:"deployment-configurations",level:3},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",level:3},{value:"Custom configurations",id:"custom-configurations",level:3},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",level:2},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",level:2}],p={toc:m};function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site."),(0,i.kt)("p",null,"Keeping a well-maintained ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," helps you, your collaborators, and your open source contributors to be able to focus on documentation while still being able to customize the site."),(0,i.kt)("h2",{id:"what-goes-into-a-docusaurusconfigjs"},"What goes into a ",(0,i.kt)("inlineCode",{parentName:"h2"},"docusaurus.config.js"),"?"),(0,i.kt)("p",null,"You should not have to write your ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from scratch even if you are developing your site. All templates come with a ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," that includes defaults for the common options."),(0,i.kt)("p",null,"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."),(0,i.kt)("p",null,"The high-level overview of Docusaurus configuration can be categorized into:"),(0,i.kt)(r.Z,{toc:m,minHeadingLevel:3,maxHeadingLevel:3,mdxType:"TOCInline"}),(0,i.kt)("p",null,"For exact reference to each of the configurable fields, you may refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/docusaurus-config"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"docusaurus.config.js")," API reference")),"."),(0,i.kt)("h3",{id:"site-metadata"},"Site metadata"),(0,i.kt)("p",null,"Site metadata contains the essential global metadata such as ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"favicon"),"."),(0,i.kt)("p",null,"They are used in several places such as your site's title and headings, browser tab icon, social sharing (Facebook, Twitter) information or even to generate the correct path to serve your static files."),(0,i.kt)("h3",{id:"deployment-configurations"},"Deployment configurations"),(0,i.kt)("p",null,"Deployment configurations such as ",(0,i.kt)("inlineCode",{parentName:"p"},"projectName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"organizationName"),", and optionally ",(0,i.kt)("inlineCode",{parentName:"p"},"deploymentBranch")," are used when you deploy your site with the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," command."),(0,i.kt)("p",null,"It is recommended to check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/deployment"},"deployment docs")," for more information."),(0,i.kt)("h3",{id:"theme-plugin-and-preset-configurations"},"Theme, plugin, and preset configurations"),(0,i.kt)("p",null,"List the ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-plugins#using-themes"},"themes"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-plugins"},"plugins"),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-plugins#using-presets"},"presets")," for your site in the ",(0,i.kt)("inlineCode",{parentName:"p"},"themes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"presets")," fields, respectively. These are typically npm packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Docusaurus supports ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-plugins#module-shorthands"},(0,i.kt)("strong",{parentName:"a"},"module shorthands")),", allowing you to simplify the above configuration as:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: ['content-blog', 'content-pages'],\n  themes: ['classic'],\n};\n")))),(0,i.kt)("p",null,"They can also be loaded from local directories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const path = require('path');\n\nmodule.exports = {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n")),(0,i.kt)("p",null,"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  plugins: [\n    [\n      'content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    'content-pages',\n  ],\n};\n")),(0,i.kt)("p",null,"To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",(0,i.kt)("inlineCode",{parentName:"p"},"presets")," field. In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," refers to ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," refers to ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        theme: {\n          customCss: [require.resolve('./src/css/custom.css')],\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"presets: [['classic', {...}]]")," shorthand works as well."))),(0,i.kt)("p",null,"For further help configuring themes, plugins, and presets, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-plugins"},"Using Plugins"),"."),(0,i.kt)("h3",{id:"custom-configurations"},"Custom configurations"),(0,i.kt)("p",null,"Docusaurus guards ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," from unknown fields. To add custom fields, define them in ",(0,i.kt)("inlineCode",{parentName:"p"},"customFields"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n")),(0,i.kt)("h2",{id:"accessing-configuration-from-components"},"Accessing configuration from components"),(0,i.kt)("p",null,"Your configuration object will be made available to all the components of your site. And you may access them via React context as ",(0,i.kt)("inlineCode",{parentName:"p"},"siteConfig"),"."),(0,i.kt)("p",null,"Basic example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."))),(0,i.kt)("h2",{id:"customizing-babel-configuration"},"Customizing Babel Configuration"),(0,i.kt)("p",null,"For new Docusaurus projects, we automatically generated a ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.js")," in the project root."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],\n};\n")),(0,i.kt)("p",null,"Most of the time, this configuration will work just fine. If you want to customize your babel configuration (e.g. to add support for Flow), you can directly edit this file. For your changes to take effect, you need to restart the Docusaurus dev server."))}g.isMDXComponent=!0}}]);