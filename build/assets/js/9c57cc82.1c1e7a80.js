"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[9095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(y,p(p({ref:t},u),{},{components:n})):r.createElement(y,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={description:"Docusaurus \u043d\u0430\u043f\u0438\u0441\u0430\u043d \u043d\u0430 TypeScript \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0443\u044e \u0435\u0433\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443."},p="\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 TypeScript",o={unversionedId:"typescript-support",id:"typescript-support",title:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 TypeScript",description:"Docusaurus \u043d\u0430\u043f\u0438\u0441\u0430\u043d \u043d\u0430 TypeScript \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0443\u044e \u0435\u0433\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443.",source:"@site/docs/typescript-support.md",sourceDirName:".",slug:"/typescript-support",permalink:"/docs/typescript-support",draft:!1,tags:[],version:"current",frontMatter:{description:"Docusaurus \u043d\u0430\u043f\u0438\u0441\u0430\u043d \u043d\u0430 TypeScript \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0443\u044e \u0435\u0433\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443."},sidebar:"docs",previous:{title:"\u041f\u0435\u0441\u043e\u0447\u043d\u0438\u0446\u0430",permalink:"/docs/playground"},next:{title:"Guides",permalink:"/docs/category/guides"}},s={},c=[{value:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",id:"initialization",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"setup",level:2},{value:"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"typing-config",level:2},{value:"\u0422\u0438\u043f\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0442\u0435\u043c\u044b \u043f\u0440\u044f\u043c\u043e \u0438\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438",id:"swizzling-typescript-theme-components",level:2}],u={toc:c};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430-typescript"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 TypeScript"),(0,a.kt)("p",null,"Docusaurus \u043d\u0430\u043f\u0438\u0441\u0430\u043d \u043d\u0430 TypeScript \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0443\u044e \u0435\u0433\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443."),(0,a.kt)("h2",{id:"initialization"},"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"),(0,a.kt)("p",null,"Docusaurus \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0442\u0435\u043c\u044b \u043d\u0430 TypeScript. \u0415\u0441\u043b\u0438 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u0448\u0430\u0431\u043b\u043e\u043d \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0441 TypeScript, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0430\u0439\u0442 \u0441 \u043f\u043e\u043b\u043d\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 TypeScript, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0444\u043b\u0430\u0433 ",(0,a.kt)("inlineCode",{parentName:"p"},"--typescript"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest my-website classic --typescript\n")),(0,a.kt)("p",null,"\u041d\u0438\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432 \u043f\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0443 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0430 TypeScript."),(0,a.kt)("h2",{id:"setup"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c TypeScript, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/module-type-aliases")," \u0438 \u0431\u0430\u0437\u043e\u0432\u0443\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e TS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save-dev typescript @docusaurus/module-type-aliases @tsconfig/docusaurus\n")),(0,a.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u0432 \u043a\u043e\u0440\u0435\u043d\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u044b\u043c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "extends": "@tsconfig/docusaurus/tsconfig.json",\n  "compilerOptions": {\n    "baseUrl": "."\n  }\n}\n')),(0,a.kt)("p",null,"Docusaurus \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u041e\u043d \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0442\u0438\u043f\u043e\u0432 \u0432\u0430\u0448\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u043e\u043c \u043a\u043e\u0434\u0430, \u0445\u043e\u0442\u044f \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u043a\u043e\u0434 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u043b\u0438 \u0432 CI."),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u043a \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0442\u0435\u043c\u044b \u043d\u0430 TypeScript."),(0,a.kt)("h2",{id:"typing-config"},"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"Docusaurus ",(0,a.kt)("strong",{parentName:"p"},"\u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 TypeScript, \u043f\u043e\u043a\u0430 \u0432\u044b \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435 \u0441\u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0435 \u0435\u0433\u043e \u0432 JavaScript."),(0,a.kt)("p",null,"\u041c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"},"\u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u0438 \u0442\u0438\u043f\u043e\u0432 JSDoc"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"// highlight-next-line\n// @ts-check\n\n// highlight-next-line\n/** @type {import('@docusaurus/types').Plugin} */\nfunction MyPlugin(context, options) {\n  return {\n    name: 'my-plugin',\n  };\n}\n\n// highlight-next-line\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  organizationName: 'facebook',\n  projectName: 'docusaurus',\n  plugins: [MyPlugin],\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      // highlight-next-line\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: {\n          path: 'docs',\n          sidebarPath: 'sidebars.js',\n        },\n        blog: {\n          path: 'blog',\n          postsPerPage: 5,\n        },\n      }),\n    ],\n  ],\n  themeConfig:\n    // highlight-next-line\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    ({\n      colorMode: {\n        defaultMode: 'dark',\n      },\n      navbar: {\n        hideOnScroll: true,\n        title: 'Docusaurus',\n        logo: {\n          alt: 'Docusaurus Logo',\n          src: 'img/docusaurus.svg',\n          srcDark: 'img/docusaurus_keytar.svg',\n        },\n      },\n    }),\n};\n\nmodule.exports = config;\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u0410\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u0438 \u0442\u0438\u043f\u043e\u0432 \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u044b \u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u0432\u0430\u0448\u0435\u0439 IDE \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0438\u043f\u044b \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438!"),(0,a.kt)("p",{parentName:"admonition"},"\u041b\u0443\u0447\u0448\u0438\u0435 IDE (VS Code, WebStorm, IntelliJ...) \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0442\u044c \u0432\u0430\u043c \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f TypeScript \u0432 Docusaurus \u043d\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 JavaScript-\u0444\u0430\u0439\u043b\u044b."),(0,a.kt)("p",{parentName:"admonition"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0432 \u0432 \u043d\u0430\u0447\u0430\u043b\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"// @ts-check")," \u0432\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0442\u0438\u043f\u043e\u0432 \u0432 \u044d\u0442\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"npx tsc"),".")),(0,a.kt)("h2",{id:"swizzling-typescript-theme-components"},"\u0422\u0438\u043f\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0442\u0435\u043c\u044b \u043f\u0440\u044f\u043c\u043e \u0438\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u0435\u043c, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c \u0442\u0438\u043f\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0442\u0435\u043c\u044b, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043b\u0430\u0433 ",(0,a.kt)("inlineCode",{parentName:"p"},"--typescript")," \u0432 \u043a\u043e\u043d\u0435\u0446 \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"swizzle"),", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u044d\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 TypeScript. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.module.css")," \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme/Footer"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm run swizzle @docusaurus/theme-classic Footer -- --typescript\n")),(0,a.kt)("p",null,"\u0412\u0441\u0435 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0435\u043c\u044b Docusaurus \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0442\u0438\u043f\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b. \u041a \u0442\u0430\u043a\u0438\u043c \u0442\u0435\u043c\u0430\u043c \u0442\u0430\u043a\u0436\u0435 \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/themes/@docusaurus/theme-classic"},(0,a.kt)("inlineCode",{parentName:"a"},"theme-classic")),", ","[",(0,a.kt)("inlineCode",{parentName:"p"},"theme-live-codeblock"),"]","(./ api/themes/theme-live-codeblock.md) \u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/themes/@docusaurus/theme-search-algolia"},(0,a.kt)("inlineCode",{parentName:"a"},"theme-search-algolia")),". \u0415\u0441\u043b\u0438 \u0432\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0435\u0441\u044c \u0430\u0432\u0442\u043e\u0440\u043e\u043c \u0442\u0435\u043c\u044b \u0434\u043b\u044f Docusaurus \u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 TypeScript, \u0432\u0430\u043c \u043f\u043e\u043c\u043e\u0436\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/extend-infrastructure#getTypeScriptThemePath"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f API \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430"),"."))}l.isMDXComponent=!0}}]);