"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[1040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45687:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(86010);const s="browserWindow_my1Q",i="browserWindowHeader_jXSR",o="buttons_uHc7",l="browserWindowAddressBar_Pd8y",u="dot_giz1",c="browserWindowMenuIcon_Vhuh",d="bar_rrRL",p="browserWindowBody_Idgs";function m(e){let{children:t,minHeight:n,url:m="http://localhost:3000"}=e;return a.createElement("div",{className:s,style:{minHeight:n}},a.createElement("div",{className:i},a.createElement("div",{className:o},a.createElement("span",{className:u,style:{background:"#f25f58"}}),a.createElement("span",{className:u,style:{background:"#fbbe3c"}}),a.createElement("span",{className:u,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(l,"text--truncate")},m),a.createElement("div",{className:c},a.createElement("div",null,a.createElement("span",{className:d}),a.createElement("span",{className:d}),a.createElement("span",{className:d})))),a.createElement("div",{className:p},t))}},15914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(45687);const i={id:"math-equations",title:"Math Equations",description:"Writing LaTeX Math Equations",slug:"/markdown-features/math-equations"},o=void 0,l={unversionedId:"guides/markdown-features/math-equations",id:"guides/markdown-features/math-equations",title:"Math Equations",description:"Writing LaTeX Math Equations",source:"@site/docs/guides/markdown-features/markdown-features-math-equations.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/math-equations",permalink:"/docs/markdown-features/math-equations",draft:!1,tags:[],version:"current",frontMatter:{id:"math-equations",title:"Math Equations",description:"Writing LaTeX Math Equations",slug:"/markdown-features/math-equations"},sidebar:"docs",previous:{title:"MDX Plugins",permalink:"/docs/markdown-features/plugins"},next:{title:"Head Metadata",permalink:"/docs/markdown-features/head-metadata"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Inline",id:"inline",level:3},{value:"Blocks",id:"blocks",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Self-hosting KaTeX assets",id:"self-hosting-katex-assets",level:2},{value:"Upgrading rehype-katex beyond recommended version",id:"upgrading-rehype-katex-beyond-recommended-version",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mathematical equations can be rendered using ",(0,r.kt)("a",{parentName:"p",href:"https://katex.org"},"KaTeX"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Please read ",(0,r.kt)("a",{parentName:"p",href:"https://katex.org"},"KaTeX")," documentation for more details."),(0,r.kt)("h3",{id:"inline"},"Inline"),(0,r.kt)("p",null,"Write inline math equations by wrapping LaTeX equations between ",(0,r.kt)("inlineCode",{parentName:"p"},"$"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"Let $f\\colon[a,b]\\to\\R$ be Riemann integrable. Let $F\\colon[a,b]\\to\\R$ be\n$F(x)=\\int_{a}^{x} f(t)\\,dt$. Then $F$ is continuous, and at all $x$ such that\n$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.\n")),(0,r.kt)(s.Z,{mdxType:"BrowserWindow"},(0,r.kt)("p",null,"Let $f\\colon","[a,b]"," \\to \\R$ be Riemann integrable. Let $F\\colon","[a,b]","\\to\\R$ be $F(x)=\n\\int_{a}^{x} f(t)\\,dt$. Then $F$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.")),(0,r.kt)("h3",{id:"blocks"},"Blocks"),(0,r.kt)("p",null,"For equation block or display mode, use line breaks and ",(0,r.kt)("inlineCode",{parentName:"p"},"$$"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-latex"},"$$\nI = \\int_0^{2\\pi} \\sin(x)\\,dx\n$$\n")),(0,r.kt)(s.Z,{mdxType:"BrowserWindow"},(0,r.kt)("p",null,"$$\nI = \\int_0^{2\\pi} \\sin(x)\\,dx\n$$")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To enable KaTeX, you need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"remark-math")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rehype-katex")," plugins."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use the exact same versions. The latest versions are incompatible with Docusaurus 2.")),(0,r.kt)("p",null,"Import the plugins in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const math = require('remark-math');\nconst katex = require('rehype-katex');\n")),(0,r.kt)("p",null,"Add them to your content plugin or preset options (usually ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," docs options):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"remarkPlugins: [math],\nrehypePlugins: [katex],\n")),(0,r.kt)("p",null,"Include the KaTeX CSS in your config under ",(0,r.kt)("inlineCode",{parentName:"p"},"stylesheets"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"stylesheets: [\n  {\n    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',\n    type: 'text/css',\n    integrity:\n      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',\n    crossorigin: 'anonymous',\n  },\n],\n")),(0,r.kt)("p",null,"Overall the changes look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"// highlight-start\nconst math = require('remark-math');\nconst katex = require('rehype-katex');\n// highlight-end\n\nmodule.exports = {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n          remarkPlugins: [math],\n          rehypePlugins: [katex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n  // highlight-start\n  stylesheets: [\n    {\n      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',\n      type: 'text/css',\n      integrity:\n        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',\n      crossorigin: 'anonymous',\n    },\n  ],\n  // highlight-end\n};\n")),(0,r.kt)("h2",{id:"self-hosting-katex-assets"},"Self-hosting KaTeX assets"),(0,r.kt)("p",null,"Loading stylesheets, fonts, and javascript libraries from CDN sources is a good practice for popular libraries and assets, since it reduces the amount of assets you have to host. In case you prefer to self-host the ",(0,r.kt)("inlineCode",{parentName:"p"},"katex.min.css")," (along with required KaTeX fonts), you can download the latest version from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KaTeX/KaTeX/releases"},"KaTeX GitHub releases"),", extract and copy ",(0,r.kt)("inlineCode",{parentName:"p"},"katex.min.css")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fonts")," directory (only ",(0,r.kt)("inlineCode",{parentName:"p"},".woff2")," font types should be enough) to your site's ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," directory, and in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),", replace the stylesheet's ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," from the CDN url to your local path (say, ",(0,r.kt)("inlineCode",{parentName:"p"},"/katex/katex.min.css"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  stylesheets: [\n    {\n      href: '/katex/katex.min.css',\n      type: 'text/css',\n    },\n  ],\n};\n")),(0,r.kt)("h2",{id:"upgrading-rehype-katex-beyond-recommended-version"},"Upgrading rehype-katex beyond recommended version"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Only use the latest version if you actually need the bleeding-edge features of $\\KaTeX$. Most users should find the older versions work just as well.")),(0,r.kt)("p",null,"The latest versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"rehype-katex")," (starting from ",(0,r.kt)("inlineCode",{parentName:"p"},"v6.0.0"),") has moved to ES Modules, a new module system of JavaScript, which Docusaurus doesn't officially support yet. However, it is possible to import ",(0,r.kt)("inlineCode",{parentName:"p"},"rehype-katex")," dynamically, using an async config creator. Docusaurus will call this creator function and wait for it to return the config object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"async function createConfig() {\n  // ES Modules are imported with `import()` instead of `require()`, and are imported asynchronously\n  // highlight-next-line\n  const katex = (await import('rehype-katex')).default;\n  return {\n    // ...\n  };\n}\n")),(0,r.kt)("p",null,"In this case, the overall configuration changes will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"// highlight-next-line\nconst math = require('remark-math');\n\nasync function createConfig() {\n  // highlight-next-line\n  const katex = (await import('rehype-katex')).default;\n  return {\n    title: 'Docusaurus',\n    tagline: 'Build optimized websites quickly, focus on your content',\n    presets: [\n      [\n        '@docusaurus/preset-classic',\n        {\n          docs: {\n            path: 'docs',\n            // highlight-start\n            remarkPlugins: [math],\n            rehypePlugins: [katex],\n            // highlight-end\n          },\n        },\n      ],\n    ],\n    // highlight-start\n    stylesheets: [\n      {\n        href: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css',\n        type: 'text/css',\n        integrity:\n          'sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ',\n        crossorigin: 'anonymous',\n      },\n    ],\n    // highlight-end\n  };\n}\n\nmodule.exports = createConfig;\n")))}p.isMDXComponent=!0}}]);