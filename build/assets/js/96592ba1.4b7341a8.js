"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[2576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1,id:"eslint-plugin",title:"\ud83d\udce6 eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin"},s=void 0,i={unversionedId:"api/misc/eslint-plugin/eslint-plugin",id:"api/misc/eslint-plugin/eslint-plugin",title:"\ud83d\udce6 eslint-plugin",description:"ESLint is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices.",source:"@site/docs/api/misc/eslint-plugin/README.md",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin",permalink:"/docs/api/misc/@docusaurus/eslint-plugin",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"eslint-plugin",title:"\ud83d\udce6 eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin"},sidebar:"api",previous:{title:"\ud83d\udce6 create-docusaurus",permalink:"/docs/api/misc/create-docusaurus"},next:{title:"no-untranslated-text",permalink:"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"}},o={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Supported Configs",id:"supported-configs",level:2},{value:"Supported Rules",id:"supported-rules",level:2},{value:"Example configuration",id:"example-configuration",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save-dev @docusaurus/eslint-plugin\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus")," to the plugins section of your ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc")," configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".eslintrc"',title:'".eslintrc"'},'{\n  "plugins": ["@docusaurus"]\n}\n')),(0,a.kt)("p",null,"Then, you can extend one of the configs (e.g. the ",(0,a.kt)("inlineCode",{parentName:"p"},"recommended")," config):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".eslintrc"',title:'".eslintrc"'},'{\n  "extends": ["plugin:@docusaurus/recommended"]\n}\n')),(0,a.kt)("p",null,"Each config contains a set of rules. For more fine-grained control, you can also configure the rules you want to use directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".eslintrc"',title:'".eslintrc"'},'{\n  "rules": {\n    "@docusaurus/string-literal-i18n-messages": "error",\n    "@docusaurus/no-untranslated-text": "warn"\n  }\n}\n')),(0,a.kt)("h2",{id:"supported-configs"},"Supported Configs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recommended: recommended rule set for most Docusaurus sites that should be extended from."),(0,a.kt)("li",{parentName:"ul"},"All: ",(0,a.kt)("strong",{parentName:"li"},"all")," rules enabled. This will change between minor versions, so you should not use this if you want to avoid unexpected breaking changes.")),(0,a.kt)("h2",{id:"supported-rules"},"Supported Rules"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},(0,a.kt)("inlineCode",{parentName:"a"},"@docusaurus/no-untranslated-text"))),(0,a.kt)("td",{parentName:"tr",align:null},"Enforce text labels in JSX to be wrapped by translate calls"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"},(0,a.kt)("inlineCode",{parentName:"a"},"@docusaurus/string-literal-i18n-messages"))),(0,a.kt)("td",{parentName:"tr",align:null},"Enforce translate APIs to be called on plain text labels"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,a.kt)("p",null,"\u2705 = recommended"),(0,a.kt)("h2",{id:"example-configuration"},"Example configuration"),(0,a.kt)("p",null,"Here's an example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  extends: ['plugin:@docusaurus/recommended'],\n  plugins: ['@docusaurus'],\n  rules: {\n    '@docusaurus/no-untranslated-text': [\n      'warn',\n      {ignoredStrings: ['\xb7', '\u2014', '\xd7']},\n    ],\n  },\n};\n")))}c.isMDXComponent=!0}}]);