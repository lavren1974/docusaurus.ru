"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:0,title:"\ud83d\udce6 create-docusaurus",slug:"/api/misc/create-docusaurus"},l=void 0,o={unversionedId:"api/misc/create-docusaurus",id:"api/misc/create-docusaurus",title:"\ud83d\udce6 create-docusaurus",description:"A scaffolding utility to help you instantly set up a functional Docusaurus app.",source:"@site/docs/api/misc/create-docusaurus.md",sourceDirName:"api/misc",slug:"/api/misc/create-docusaurus",permalink:"/docs/api/misc/create-docusaurus",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"\ud83d\udce6 create-docusaurus",slug:"/api/misc/create-docusaurus"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/docs/api/themes/@docusaurus/theme-search-algolia"},next:{title:"\ud83d\udce6 eslint-plugin",permalink:"/docs/api/misc/@docusaurus/eslint-plugin"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<code>-t, --typescript</code>",id:"typescript",level:3},{value:"<code>-g, --git-strategy</code>",id:"git-strategy",level:3},{value:"<code>-p, --package-manager</code>",id:"package-manager",level:3},{value:"<code>-s, --skip-install</code>",id:"skip-install",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A scaffolding utility to help you instantly set up a functional Docusaurus app."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest [name] [template] [rootDir]\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," argument will be used as the site's path as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field in the created app's package.json. It can be an absolute path, or a path relative to ",(0,i.kt)("inlineCode",{parentName:"p"},"rootDir"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"template")," argument can be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"classic"),": Uses the classic template (recommended)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"facebook"),": Uses the Facebook/Meta template, which contains some Meta-specific setup"),(0,i.kt)("li",{parentName:"ul"},"A git repo URL (beginning with ",(0,i.kt)("inlineCode",{parentName:"li"},"https://")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"git@"),"), which can be cloned to the destination"),(0,i.kt)("li",{parentName:"ul"},"A local file path relative to CWD, which contains the files to be copied to destination")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rootDir")," will be used to resolve the absolute path to the site directory. The default is CWD."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This command should be preferably used in an interactive shell so all features are available.")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"typescript"},(0,i.kt)("inlineCode",{parentName:"h3"},"-t, --typescript")),(0,i.kt)("p",null,"Used when the template argument is a recognized name. Currently, only ",(0,i.kt)("inlineCode",{parentName:"p"},"classic")," provides a TypeScript variant."),(0,i.kt)("h3",{id:"git-strategy"},(0,i.kt)("inlineCode",{parentName:"h3"},"-g, --git-strategy")),(0,i.kt)("p",null,"Used when the template argument is a git repo. It needs to be one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deep"),": preserves full git history"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shallow"),": clones with ",(0,i.kt)("inlineCode",{parentName:"li"},"--depth=1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"copy"),": does a shallow clone, but does not create a git repo"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"custom"),": enter your custom git clone command. We will prompt you for it. You can write something like ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone --depth 10"),", and we will append the repository URL and destination directory.")),(0,i.kt)("h3",{id:"package-manager"},(0,i.kt)("inlineCode",{parentName:"h3"},"-p, --package-manager")),(0,i.kt)("p",null,"Value should be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),". If it's not explicitly provided, Docusaurus will infer one based on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The lockfile already present in the CWD (e.g. if you are setting up website in an existing project)"),(0,i.kt)("li",{parentName:"ul"},"The command used to invoke ",(0,i.kt)("inlineCode",{parentName:"li"},"create-docusaurus")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"npm init"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"npx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn create"),", etc.)"),(0,i.kt)("li",{parentName:"ul"},"Interactive prompting, in case all heuristics are not present")),(0,i.kt)("h3",{id:"skip-install"},(0,i.kt)("inlineCode",{parentName:"h3"},"-s, --skip-install")),(0,i.kt)("p",null,"If provided, Docusaurus will not automatically install dependencies after creating the app. The ",(0,i.kt)("inlineCode",{parentName:"p"},"--package-manager")," option is only useful when you are actually installing dependencies."))}c.isMDXComponent=!0}}]);