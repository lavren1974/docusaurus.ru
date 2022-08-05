"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[1590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={description:"How the Docusaurus client is structured"},l="Client architecture",r={unversionedId:"advanced/client",id:"advanced/client",title:"Client architecture",description:"How the Docusaurus client is structured",source:"@site/docs/advanced/client.md",sourceDirName:"advanced",slug:"/advanced/client",permalink:"/docs/advanced/client",draft:!1,tags:[],version:"current",frontMatter:{description:"How the Docusaurus client is structured"},sidebar:"docs",previous:{title:"Static site generation",permalink:"/docs/advanced/ssg"},next:{title:"Migration overview",permalink:"/docs/migration"}},s={},c=[{value:"Theme aliases",id:"theme-aliases",level:2},{value:"Client modules",id:"client-modules",level:2},{value:"Client module lifecycles",id:"client-module-lifecycles",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client-architecture"},"Client architecture"),(0,a.kt)("h2",{id:"theme-aliases"},"Theme aliases"),(0,a.kt)("p",null,"A theme works by exporting a set of components, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Navbar"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Footer"),", to render the data passed down from plugins. Docusaurus and users use these components by importing them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme")," webpack alias:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Navbar from '@theme/Navbar';\n")),(0,a.kt)("p",null,"The alias ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme")," can refer to a few directories, in the following priority:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A user's ",(0,a.kt)("inlineCode",{parentName:"li"},"website/src/theme")," directory, which is a special directory that has the higher precedence."),(0,a.kt)("li",{parentName:"ol"},"A Docusaurus theme package's ",(0,a.kt)("inlineCode",{parentName:"li"},"theme")," directory."),(0,a.kt)("li",{parentName:"ol"},"Fallback components provided by Docusaurus core (usually not needed).")),(0,a.kt)("p",null,"This is called a ",(0,a.kt)("em",{parentName:"p"},"layered architecture"),": a higher-priority layer providing the component would shadow a lower-priority layer, making swizzling possible. Given the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 @docusaurus/theme-classic\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"website/src/theme/Navbar.js")," takes precedence whenever ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/Navbar")," is imported. This behavior is called component swizzling. If you are familiar with Objective C where a function's implementation can be swapped during runtime, it's the exact same concept here with changing the target ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/Navbar")," is pointing to!"),(0,a.kt)("p",null,'We already talked about how the "userland theme" in ',(0,a.kt)("inlineCode",{parentName:"p"},"src/theme")," can re-use a theme component through the ",(0,a.kt)("a",{parentName:"p",href:"#wrapping"},(0,a.kt)("inlineCode",{parentName:"a"},"@theme-original"))," alias. One theme package can also wrap a component from another theme, by importing the component from the initial theme, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme-init")," import."),(0,a.kt)("p",null,"Here's an example of using this feature to enhance the default theme ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeBlock")," component with a ",(0,a.kt)("inlineCode",{parentName:"p"},"react-live")," playground feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import InitialCodeBlock from '@theme-init/CodeBlock';\nimport React from 'react';\n\nexport default function CodeBlock(props) {\n  return props.live ? (\n    <ReactLivePlayground {...props} />\n  ) : (\n    <InitialCodeBlock {...props} />\n  );\n}\n")),(0,a.kt)("p",null,"Check the code of ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock")," for details."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'Unless you want to publish a re-usable "theme enhancer" (like ',(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock"),"), you likely don't need ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme-init"),".")),(0,a.kt)("p",null,'It can be quite hard to wrap your mind around these aliases. Let\'s imagine the following case with a super convoluted setup with three themes/plugins and the site itself all trying to define the same component. Internally, Docusaurus loads these themes as a "stack".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"+-------------------------------------------------+\n|        `website/src/theme/CodeBlock.js`         | <-- `@theme/CodeBlock` always points to the top\n+-------------------------------------------------+\n| `theme-live-codeblock/theme/CodeBlock/index.js` | <-- `@theme-original/CodeBlock` points to the topmost non-swizzled component\n+-------------------------------------------------+\n|  `plugin-awesome-codeblock/theme/CodeBlock.js`  |\n+-------------------------------------------------+\n|     `theme-classic/theme/CodeBlock/index.js`    | <-- `@theme-init/CodeBlock` always points to the bottom\n+-------------------------------------------------+\n")),(0,a.kt)("p",null,'The components in this "stack" are pushed in the order of ',(0,a.kt)("inlineCode",{parentName:"p"},"preset plugins > preset themes > plugins > themes > site"),", so the swizzled component in ",(0,a.kt)("inlineCode",{parentName:"p"},"website/src/theme")," always comes out on top because it's loaded last."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@theme/*")," always points to the topmost component\u2014when ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeBlock")," is swizzled, all other components requesting ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," receive the swizzled version."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@theme-original/*")," always points to the topmost non-swizzled component. That's why you can import ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme-original/CodeBlock"),' in the swizzled component\u2014it points to the next one in the "component stack", a theme-provided one. Plugin authors should not try to use this because your component could be the topmost component and cause a self-import.'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@theme-init/*")," always points to the bottommost component\u2014usually, this comes from the theme or plugin that first provides this component. Individual plugins / themes trying to enhance code block can safely use ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme-init/CodeBlock")," to get its basic version. Site creators should generally not use this because you likely want to enhance the ",(0,a.kt)("em",{parentName:"p"},"topmost")," instead of the ",(0,a.kt)("em",{parentName:"p"},"bottommost")," component. It's also possible that the ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme-init/CodeBlock")," alias does not exist at all\u2014Docusaurus only creates it when it points to a different one from ",(0,a.kt)("inlineCode",{parentName:"p"},"@theme-original/CodeBlock"),", i.e. when it's provided by more than one theme. We don't waste aliases!"),(0,a.kt)("h2",{id:"client-modules"},"Client modules"),(0,a.kt)("p",null,"Client modules are part of your site's bundle, just like theme components. However, they are usually side-effect-ful. Client modules are anything that can be ",(0,a.kt)("inlineCode",{parentName:"p"},"import"),"ed by Webpack\u2014CSS, JS, etc. JS scripts usually work on the global context, like registering event listeners, creating global variables..."),(0,a.kt)("p",null,"These modules are imported globally before React even renders the initial UI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="@docusaurus/core/App.tsx"',title:'"@docusaurus/core/App.tsx"'},"// How it works under the hood\nimport '@generated/client-modules';\n")),(0,a.kt)("p",null,"Plugins and sites can both declare client modules, through ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/lifecycle-apis#getClientModules"},(0,a.kt)("inlineCode",{parentName:"a"},"getClientModules"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/docusaurus-config#clientModules"},(0,a.kt)("inlineCode",{parentName:"a"},"siteConfig.clientModules")),", respectively."),(0,a.kt)("p",null,"Client modules are called during server-side rendering as well, so remember to check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/ssg#escape-hatches"},"execution environment")," before accessing client-side globals."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="mySiteGlobalJs.js"',title:'"mySiteGlobalJs.js"'},"import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';\n\nif (ExecutionEnvironment.canUseDOM) {\n  // As soon as the site loads in the browser, register a global event listener\n  window.addEventListener('keydown', (e) => {\n    if (e.code === 'Period') {\n      location.assign(location.href.replace('.com', '.dev'));\n    }\n  });\n}\n")),(0,a.kt)("p",null,"CSS stylesheets imported as client modules are ",(0,a.kt)("a",{parentName:"p",href:"/docs/styling-layout#global-styles"},"global"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="mySiteGlobalCss.css"',title:'"mySiteGlobalCss.css"'},"/* This stylesheet is global. */\n.globalSelector {\n  color: red;\n}\n")),(0,a.kt)("h3",{id:"client-module-lifecycles"},"Client module lifecycles"),(0,a.kt)("p",null,"Besides introducing side-effects, client modules can optionally export two lifecycle functions: ",(0,a.kt)("inlineCode",{parentName:"p"},"onRouteUpdate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onRouteDidUpdate"),"."),(0,a.kt)("p",null,"Because Docusaurus builds a single-page application, ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," tags will only be executed the first time the page loads, but will not re-execute on page transitions. These lifecycles are useful if you have some imperative JS logic that should execute every time a new page has loaded, e.g., to manipulate DOM elements, to send analytics data, etc."),(0,a.kt)("p",null,"For every route transition, there will be several important timings:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The user clicks a link, which causes the router to change its current location."),(0,a.kt)("li",{parentName:"ol"},"Docusaurus preloads the next route's assets, while keeping displaying the current page's content."),(0,a.kt)("li",{parentName:"ol"},"The next route's assets have loaded."),(0,a.kt)("li",{parentName:"ol"},"The new location's route component gets rendered to DOM.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onRouteUpdate")," will be called at event (2), and ",(0,a.kt)("inlineCode",{parentName:"p"},"onRouteDidUpdate")," will be called at (4). They both receive the current location and the previous location (which can be ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", if this is the first screen)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onRouteUpdate"),' can optionally return a "cleanup" callback, which will be called at (3). For example, if you want to display a progress bar, you can start a timeout in ',(0,a.kt)("inlineCode",{parentName:"p"},"onRouteUpdate"),", and clear the timeout in the callback. (The classic theme already provides an ",(0,a.kt)("inlineCode",{parentName:"p"},"nprogress")," integration this way.)"),(0,a.kt)("p",null,"Note that the new page's DOM is only available during event (4). If you need to manipulate the new page's DOM, you'll likely want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"onRouteDidUpdate"),", which will be fired as soon as the DOM on the new page has mounted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="myClientModule.js"',title:'"myClientModule.js"'},"import type {Location} from 'history';\n\nexport function onRouteDidUpdate({location, previousLocation}) {\n  // Don't execute if we are still on the same page; the lifecycle may be fired\n  // because the hash changes (e.g. when navigating between headings)\n  if (location.pathname !== previousLocation?.pathname) {\n    const title = document.getElementsByTagName('h1')[0];\n    if (title) {\n      title.innerText += '\u2764\ufe0f';\n    }\n  }\n}\n\nexport function onRouteUpdate({location, previousLocation}) {\n  if (location.pathname !== previousLocation?.pathname) {\n    const progressBarTimeout = window.setTimeout(() => {\n      nprogress.start();\n    }, delay);\n    return () => window.clearTimeout(progressBarTimeout);\n  }\n  return undefined;\n}\n")),(0,a.kt)("p",null,"Or, if you are using TypeScript and you want to leverage contextual typing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="myClientModule.ts"',title:'"myClientModule.ts"'},"import type {ClientModule} from '@docusaurus/types';\n\nconst module: ClientModule = {\n  onRouteUpdate({location, previousLocation}) {\n    // ...\n  },\n  onRouteDidUpdate({location, previousLocation}) {\n    // ...\n  },\n};\nexport default module;\n")),(0,a.kt)("p",null,"Both lifecycles will fire on first render, but they will not fire on server-side, so you can safely access browser globals in them."),(0,a.kt)("admonition",{title:"Prefer using React",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Client module lifecycles are purely imperative, and you can't use React hooks or access React contexts within them. If your operations are state-driven or involve complicated DOM manipulations, you should consider ",(0,a.kt)("a",{parentName:"p",href:"/docs/swizzling"},"swizzling components")," instead.")))}u.isMDXComponent=!0}}]);