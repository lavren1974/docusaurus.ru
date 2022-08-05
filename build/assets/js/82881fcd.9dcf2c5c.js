"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[6078],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={id:"migration-overview",title:"Migration overview",slug:"/migration"},i=void 0,s={unversionedId:"migration/migration-overview",id:"migration/migration-overview",title:"Migration overview",description:"This doc guides you through migrating an existing Docusaurus 1 site to Docusaurus 2.",source:"@site/docs/migration/migration-overview.md",sourceDirName:"migration",slug:"/migration",permalink:"/docs/migration",draft:!1,tags:[],version:"current",frontMatter:{id:"migration-overview",title:"Migration overview",slug:"/migration"},sidebar:"docs",previous:{title:"Client architecture",permalink:"/docs/advanced/client"},next:{title:"Automated migration",permalink:"/docs/migration/automated"}},u={},l=[{value:"Main differences",id:"main-differences",level:2},{value:"Docusaurus 1 structure",id:"docusaurus-1-structure",level:2},{value:"Docusaurus 2 structure",id:"docusaurus-2-structure",level:2},{value:"Migration process",id:"migration-process",level:2},{value:"Automated migration process",id:"automated-migration-process",level:2},{value:"Manual migration process",id:"manual-migration-process",level:2},{value:"Support",id:"support",level:2},{value:"Example migration PRs",id:"example-migration-prs",level:2}],c={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This doc guides you through migrating an existing Docusaurus 1 site to Docusaurus 2."),(0,n.kt)("p",null,"We try to make this as easy as possible, and provide a migration cli."),(0,n.kt)("h2",{id:"main-differences"},"Main differences"),(0,n.kt)("p",null,"Docusaurus 1 is a pure documentation site generator, using React as a server-side template engine, but not loading React on the browser."),(0,n.kt)("p",null,"Docusaurus 2, rebuilt from the ground up, generates a single-page-application, using the full power of React in the browser. It allows for more customizability but preserved the best parts of Docusaurus 1 - easy to get started, versioned docs, and i18n."),(0,n.kt)("p",null,"Beyond that, Docusaurus 2 is a ",(0,n.kt)("strong",{parentName:"p"},"performant static site generator")," and can be used to create common content-driven websites (e.g. Documentation, Blogs, Product Landing and Marketing Pages, etc) extremely quickly."),(0,n.kt)("p",null,"While our main focus will still be helping you get your documentations right and well, it is possible to build any kind of website using Docusaurus 2 as it is just a React application. ",(0,n.kt)("strong",{parentName:"p"},"Docusaurus can now be used to build any website, not just documentation websites.")),(0,n.kt)("h2",{id:"docusaurus-1-structure"},"Docusaurus 1 structure"),(0,n.kt)("p",null,"Your Docusaurus 1 site should have the following structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 docs\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 blog\n    \u251c\u2500\u2500 core\n    \u2502   \u2514\u2500\u2500 Footer.js\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 pages\n    \u251c\u2500\u2500 sidebars.json\n    \u251c\u2500\u2500 siteConfig.js\n    \u2514\u2500\u2500 static\n")),(0,n.kt)("h2",{id:"docusaurus-2-structure"},"Docusaurus 2 structure"),(0,n.kt)("p",null,"After the migration, your Docusaurus 2 site could look like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 docs\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 blog\n    \u251c\u2500\u2500 src\n    \u2502   \u251c\u2500\u2500 components\n    \u2502   \u251c\u2500\u2500 css\n    \u2502   \u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 static\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 sidebars.json\n    \u251c\u2500\u2500 docusaurus.config.js\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This migration does not change the ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs")," folder location, but Docusaurus v2 sites generally have the ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs")," folder inside ",(0,n.kt)("inlineCode",{parentName:"p"},"/website")),(0,n.kt)("p",{parentName:"admonition"},"You are free to put the ",(0,n.kt)("inlineCode",{parentName:"p"},"/docs")," folder anywhere you want after having migrated to v2.")),(0,n.kt)("h2",{id:"migration-process"},"Migration process"),(0,n.kt)("p",null,"There are multiple things to migrate to obtain a fully functional Docusaurus 2 website:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"packages"),(0,n.kt)("li",{parentName:"ul"},"cli commands"),(0,n.kt)("li",{parentName:"ul"},"site configuration"),(0,n.kt)("li",{parentName:"ul"},"markdown files"),(0,n.kt)("li",{parentName:"ul"},"sidebars file"),(0,n.kt)("li",{parentName:"ul"},"pages, components and CSS"),(0,n.kt)("li",{parentName:"ul"},"versioned docs"),(0,n.kt)("li",{parentName:"ul"},"i18n support \ud83d\udea7")),(0,n.kt)("h2",{id:"automated-migration-process"},"Automated migration process"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/migration/automated"},"migration cli")," will handle many things of the migration for you."),(0,n.kt)("p",null,"However, some parts can't easily be automated, and you will have to fallback to the manual process."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We recommend running the migration cli, and complete the missing parts thanks to the manual migration process.")),(0,n.kt)("h2",{id:"manual-migration-process"},"Manual migration process"),(0,n.kt)("p",null,"Some parts of the migration can't be automated (particularly the pages), and you will have to migrate them manually."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/migration/manual"},"manual migration guide")," will give you all the manual steps."),(0,n.kt)("h2",{id:"support"},"Support"),(0,n.kt)("p",null,"For any questions, you can ask in the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/C3P6CxMMxY"},(0,n.kt)("inlineCode",{parentName:"a"},"#migration-v1-to-v2")," Discord channel"),"."),(0,n.kt)("p",null,"Feel free to tag ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/slorber"},"@slorber")," in any migration PRs if you would like us to have a look."),(0,n.kt)("p",null,"We also have volunteers willing to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/1834"},"help you migrate your v1 site"),"."),(0,n.kt)("h2",{id:"example-migration-prs"},"Example migration PRs"),(0,n.kt)("p",null,"You might want to refer to our migration PRs for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/pull/7785"},"Create React App")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/flux/pull/471"},"Flux")," as examples of how a migration for a basic Docusaurus v1 site can be done."))}p.isMDXComponent=!0}}]);