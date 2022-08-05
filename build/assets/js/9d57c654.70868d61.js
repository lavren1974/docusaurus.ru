"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[645],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:0,slug:"/api/misc/create-docusaurus"},l="\ud83d\udce6 create-docusaurus",o={unversionedId:"api/misc/create-docusaurus",id:"api/misc/create-docusaurus",title:"\ud83d\udce6 create-docusaurus",description:"A scaffolding utility to help you instantly set up a functional Docusaurus app.",source:"@site/docs/api/misc/create-docusaurus.md",sourceDirName:"api/misc",slug:"/api/misc/create-docusaurus",permalink:"/docs/api/misc/create-docusaurus",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/api/misc/create-docusaurus"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/docs/api/themes/@docusaurus/theme-search-algolia"},next:{title:"\ud83d\udce6 eslint-plugin",permalink:"/docs/api/misc/@docusaurus/eslint-plugin"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"options",level:2},{value:"<code>-t, --typescript</code>",id:"typescript",level:3},{value:"<code>-g, --git-strategy</code>",id:"git-strategy",level:3},{value:"<code>-p, --package-manager</code>",id:"package-manager",level:3},{value:"<code>-s, --skip-install</code>",id:"skip-install",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-create-docusaurus"},"\ud83d\udce6 create-docusaurus"),(0,i.kt)("p",null,"A scaffolding utility to help you instantly set up a functional Docusaurus app."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest [name] [template] [rootDir]\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," argument will be used as the site's path as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field in the created app's package.json. It can be an absolute path, or a path relative to ",(0,i.kt)("inlineCode",{parentName:"p"},"rootDir"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"template")," argument can be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"classic"),": Uses the classic template (recommended)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"facebook"),": Uses the Facebook/Meta template, which contains some Meta-specific setup"),(0,i.kt)("li",{parentName:"ul"},"A git repo URL (beginning with ",(0,i.kt)("inlineCode",{parentName:"li"},"https://")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"git@"),"), which can be cloned to the destination"),(0,i.kt)("li",{parentName:"ul"},"A local file path relative to CWD, which contains the files to be copied to destination")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rootDir")," will be used to resolve the absolute path to the site directory. The default is CWD."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This command should be preferably used in an interactive shell so all features are available.")),(0,i.kt)("h2",{id:"options"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,i.kt)("h3",{id:"typescript"},(0,i.kt)("inlineCode",{parentName:"h3"},"-t, --typescript")),(0,i.kt)("p",null,"Used when the template argument is a recognized name. Currently, only ",(0,i.kt)("inlineCode",{parentName:"p"},"classic")," provides a TypeScript variant."),(0,i.kt)("h3",{id:"git-strategy"},(0,i.kt)("inlineCode",{parentName:"h3"},"-g, --git-strategy")),(0,i.kt)("p",null,"Used when the template argument is a git repo. It needs to be one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deep"),": preserves full git history"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shallow"),": clones with ",(0,i.kt)("inlineCode",{parentName:"li"},"--depth=1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"copy"),": does a shallow clone, but does not create a git repo"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"custom"),": enter your custom git clone command. We will prompt you for it. You can write something like ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone --depth 10"),", and we will append the repository URL and destination directory.")),(0,i.kt)("h3",{id:"package-manager"},(0,i.kt)("inlineCode",{parentName:"h3"},"-p, --package-manager")),(0,i.kt)("p",null,"Value should be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),". If it's not explicitly provided, Docusaurus will infer one based on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The lockfile already present in the CWD (e.g. if you are setting up website in an existing project)"),(0,i.kt)("li",{parentName:"ul"},"The command used to invoke ",(0,i.kt)("inlineCode",{parentName:"li"},"create-docusaurus")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"npm init"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"npx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn create"),", etc.)"),(0,i.kt)("li",{parentName:"ul"},"Interactive prompting, in case all heuristics are not present")),(0,i.kt)("h3",{id:"skip-install"},(0,i.kt)("inlineCode",{parentName:"h3"},"-s, --skip-install")),(0,i.kt)("p",null,"If provided, Docusaurus will not automatically install dependencies after creating the app. The ",(0,i.kt)("inlineCode",{parentName:"p"},"--package-manager")," option is only useful when you are actually installing dependencies."))}c.isMDXComponent=!0}}]);