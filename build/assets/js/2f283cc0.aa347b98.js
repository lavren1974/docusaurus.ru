"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[7762],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45687:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(67294),r=n(86010),o="browserWindow_my1Q",i="browserWindowHeader_jXSR",s="buttons_uHc7",l="browserWindowAddressBar_Pd8y",c="dot_giz1",d="browserWindowMenuIcon_Vhuh",u="bar_rrRL",p="browserWindowBody_Idgs";function m(e){var t=e.children,n=e.minHeight,m=e.url,h=void 0===m?"http://localhost:3000":m;return a.createElement("div",{className:o,style:{minHeight:n}},a.createElement("div",{className:i},a.createElement("div",{className:s},a.createElement("span",{className:c,style:{background:"#f25f58"}}),a.createElement("span",{className:c,style:{background:"#fbbe3c"}}),a.createElement("span",{className:c,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(l,"text--truncate")},h),a.createElement("div",{className:d},a.createElement("div",null,a.createElement("span",{className:u}),a.createElement("span",{className:u}),a.createElement("span",{className:u})))),a.createElement("div",{className:p},t))}},21018:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(45687),s=["components"],l={id:"create-doc",title:"Create a doc",description:"Create a Markdown Document",slug:"/create-doc"},c=void 0,d={unversionedId:"guides/docs/create-doc",id:"guides/docs/create-doc",title:"Create a doc",description:"Create a Markdown Document",source:"@site/docs/guides/docs/docs-create-doc.mdx",sourceDirName:"guides/docs",slug:"/create-doc",permalink:"/docs/create-doc",draft:!1,tags:[],version:"current",frontMatter:{id:"create-doc",title:"Create a doc",description:"Create a Markdown Document",slug:"/create-doc"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/docs-introduction"},next:{title:"Sidebar",permalink:"/docs/sidebar"}},u={},p=[{value:"Doc tags",id:"doc-tags",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a Markdown file, ",(0,o.kt)("inlineCode",{parentName:"p"},"greeting.md"),", and place it under the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 greeting.md\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n")),(0,o.kt)("p",null,"At the top of the file, specify ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," in the front matter, so that Docusaurus will pick them up correctly when generating your site."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"---\nid: greeting\ntitle: Hello\n---\n\n## Hello from Docusaurus\n\nAre you ready to create the documentation site for your open source project?\n\n### Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n### Only h2 and h3 will be in the TOC by default.\n\nYou can configure the TOC heading levels either per-document or in the theme configuration.\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n\n### Custom id headers {#custom-id}\n\nWith `{#custom-id}` syntax you can set your own header id.\n")),(0,o.kt)("p",null,"This will render in the browser as follows:"),(0,o.kt)(i.Z,{mdxType:"BrowserWindow"},(0,o.kt)("h2",null,"Hello from Docusaurus"),(0,o.kt)("p",null,"Are you ready to create the documentation site for your open source project?"),(0,o.kt)("h3",null,"Headers"),(0,o.kt)("p",null,"will show up on the table of contents on the upper right"),(0,o.kt)("p",null,"So that your users will know what this page is all about without scrolling down or even without reading too much."),(0,o.kt)("h3",null,"Only h2 and h3 will be in the TOC by default."),(0,o.kt)("p",null,"You can configure the TOC heading levels either per document or in the theme configuration."),(0,o.kt)("p",null,"The headers are well-spaced so that the hierarchy is clear."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"lists will help you"),(0,o.kt)("li",{parentName:"ul"},"present the key points"),(0,o.kt)("li",{parentName:"ul"},"that you want your users to remember",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"and you may nest them",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"multiple times")))))),(0,o.kt)("h3",{id:"custom-id"},"Custom id headers"),(0,o.kt)("p",null,"With ",(0,o.kt)("code",null,"{#custom-id}")," syntax you can set your own header id.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All files prefixed with an underscore (",(0,o.kt)("inlineCode",{parentName:"p"},"_"),") under the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs"),' directory are treated as "partial" pages and will be ignored by default.'),(0,o.kt)("p",{parentName:"div"},"Read more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/markdown-features/react#importing-markdown"},"importing partial pages"),"."))),(0,o.kt)("h2",{id:"doc-tags"},"Doc tags"),(0,o.kt)("p",null,"Optionally, you can add tags to your doc pages, which introduces another dimension of categorization in addition to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/sidebar"},"docs sidebar"),". Tags are passed in the front matter as a list of labels:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'"your-doc-page.md"','"your-doc-page.md"':!0},"---\nid: doc-with-tags\ntitle: A doc with tags\ntags:\n  - Demo\n  - Getting started\n---\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Tags can also be declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"tags: [Demo, Getting started]"),"."),(0,o.kt)("p",{parentName:"div"},"Read more about all the possible ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.io/file/yaml-arrays/"},"Yaml array syntaxes"),"."))))}h.isMDXComponent=!0}}]);