"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[8608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),i=n(51048),s=n(33609),l=n(1943),c=n(72957);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:i,block:p,defaultValue:m,values:h,groupId:f,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:N}=(0,l.U)(),[O,T]=(0,a.useState)(w),S=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=f){const e=b[f];null!=e&&e!==O&&k.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=S.indexOf(t),r=k[n].value;r!==O&&(C(t),T(r),null!=f&&N(f,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=S.indexOf(e.currentTarget)+1;n=null!=(r=S[t])?r:S[0];break}case"ArrowLeft":{var a;const t=S.indexOf(e.currentTarget)-1;n=null!=(a=S[t])?a:S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},y)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>S.push(e),onKeyDown:x,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},15178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(34259),i=n(18679);const s={sidebar_label:"Static site generation",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."},l="Static site generation (SSG)",c={unversionedId:"advanced/ssg",id:"advanced/ssg",title:"Static site generation (SSG)",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO.",source:"@site/docs/advanced/ssg.md",sourceDirName:"advanced",slug:"/advanced/ssg",permalink:"/docs/advanced/ssg",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Static site generation",description:"Docusaurus statically renders your React code into HTML, allowing faster load speed and better SEO."},sidebar:"docs",previous:{title:"\u0420\u043e\u0443\u0442\u0438\u043d\u0433",permalink:"/docs/advanced/routing"},next:{title:"Client architecture",permalink:"/docs/advanced/client"}},u={},d=[{value:"Understanding SSR",id:"understanding-ssr",level:2},{value:"Escape hatches",id:"escape-hatches",level:2},{value:"<code>&lt;BrowserOnly&gt;</code>",id:"browseronly",level:3},{value:"<code>useIsBrowser</code>",id:"useisbrowser",level:3},{value:"<code>useEffect</code>",id:"useeffect",level:3},{value:"<code>ExecutionEnvironment</code>",id:"executionenvironment",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"static-site-generation-ssg"},"Static site generation (SSG)"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/architecture"},"architecture"),", we mentioned that the theme is run in Webpack. But beware: that doesn't mean it always has access to browser globals! The theme is built twice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"During ",(0,a.kt)("strong",{parentName:"li"},"server-side rendering"),", the theme is compiled in a sandbox called ",(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/react-dom-server.html"},"React DOM Server"),'. You can see this as a "headless browser", where there is no ',(0,a.kt)("inlineCode",{parentName:"li"},"window")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"document"),", only React. SSR produces static HTML pages."),(0,a.kt)("li",{parentName:"ul"},"During ",(0,a.kt)("strong",{parentName:"li"},"client-side rendering"),", the theme is compiled to JavaScript that gets eventually executed in the browser, so it has access to browser variables.")),(0,a.kt)("admonition",{title:"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f SSR or SSG?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Server-side rendering")," and ",(0,a.kt)("em",{parentName:"p"},"static site generation")," can be different concepts, but we use them interchangeably."),(0,a.kt)("p",{parentName:"admonition"},"Strictly speaking, Docusaurus is a static site generator, because there's no server-side runtime\u2014we statically render to HTML files that are deployed on a CDN, instead of dynamically pre-rendering on each request. This differs from the working model of ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),".")),(0,a.kt)("p",null,"Therefore, while you probably know not to access Node globals like ",(0,a.kt)("inlineCode",{parentName:"p"},"process")," (",(0,a.kt)("a",{parentName:"p",href:"#node-env"},"or can we?"),") or the ",(0,a.kt)("inlineCode",{parentName:"p"},"'fs'")," module, you can't freely access browser globals either."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nexport default function WhereAmI() {\n  return <span>{window.location.href}</span>;\n}\n")),(0,a.kt)("p",null,"This looks like idiomatic React, but if you run ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus build"),", you will get an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ReferenceError: window is not defined\n")),(0,a.kt)("p",null,"This is because during server-side rendering, the Docusaurus app isn't actually run in browser, and it doesn't know what ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," is."),(0,a.kt)("details",{id:"node-env"},(0,a.kt)("summary",null,"What about ",(0,a.kt)("code",null,"process.env.NODE_ENV"),"?"),(0,a.kt)("p",null,'One exception to the "no Node globals" rule is ',(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),". In fact, you can use it in React, because Webpack injects this variable as a global:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nexport default function expensiveComp() {\n  if (process.env.NODE_ENV === 'development') {\n    return <>This component is not shown in development</>;\n  }\n  const res = someExpensiveOperationThatLastsALongTime();\n  return <>{res}</>;\n}\n")),(0,a.kt)("p",null,"During Webpack build, the ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," will be replaced with the value, either ",(0,a.kt)("inlineCode",{parentName:"p"},"'development'")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"'production'"),". You will then get different build results after dead code elimination:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Development",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n\nexport default function expensiveComp() {\n  // highlight-next-line\n  if ('development' === 'development') {\n+   return <>This component is not shown in development</>;\n  }\n- const res = someExpensiveOperationThatLastsALongTime();\n- return <>{res}</>;\n}\n"))),(0,a.kt)(i.Z,{value:"Production",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n\nexport default function expensiveComp() {\n  // highlight-next-line\n- if ('production' === 'development') {\n-   return <>This component is not shown in development</>;\n- }\n+ const res = someExpensiveOperationThatLastsALongTime();\n+ return <>{res}</>;\n}\n"))))),(0,a.kt)("h2",{id:"understanding-ssr"},"Understanding SSR"),(0,a.kt)("p",null,"React is not just a dynamic UI runtime\u2014it's also a templating engine. Because Docusaurus sites mostly contain static contents, it should be able to work without any JavaScript (which React runs in), but only plain HTML/CSS. And that's what server-side rendering offers: statically rendering your React code into HTML, without any dynamic content. An HTML file has no concept of client state (it's purely markup), hence it shouldn't rely on browser APIs."),(0,a.kt)("p",null,"These HTML files are the first to arrive at the user's browser screen when a URL is visited (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/routing"},"routing"),'). Afterwards, the browser fetches and runs other JS code to provide the "dynamic" parts of your site\u2014anything implemented with JavaScript. However, before that, the main content of your page is already visible, allowing faster loading.'),(0,a.kt)("p",null,'In CSR-only apps, all DOM elements are generated on client side with React, and the HTML file only ever contains one root element for React to mount DOM to; in SSR, React is already facing a fully built HTML page, and it only needs to correlate the DOM elements with the virtual DOM in its model. This step is called "hydration". After React has hydrated the static markup, the app starts to work as any normal React app.'),(0,a.kt)("p",null,"Note that Docusaurus is ultimately a single-page application, so static site generation is only an optimization (",(0,a.kt)("em",{parentName:"p"},"progressive enhancement"),", as it's called), but our functionality does not fully depend on those HTML files. This is contrary to site generators like ",(0,a.kt)("a",{parentName:"p",href:"https://jekyllrb.com/"},"Jekyll")," and ",(0,a.kt)("a",{parentName:"p",href:"https://v1.docusaurus.io/"},"Docusaurus v1"),", where all files are statically transformed to markup, and interactiveness is added through external JavaScript linked with ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tags. If you inspect the build output, you will still see JS assets under ",(0,a.kt)("inlineCode",{parentName:"p"},"build/assets/js"),", which are, really, the core of Docusaurus."),(0,a.kt)("h2",{id:"escape-hatches"},"Escape hatches"),(0,a.kt)("p",null,"If you want to render any dynamic content on your screen that relies on the browser API to be functional at all, for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Our ",(0,a.kt)("a",{parentName:"li",href:"/docs/markdown-features/code-blocks#interactive-code-editor"},"live codeblock"),", which runs in the browser's JS runtime"),(0,a.kt)("li",{parentName:"ul"},"Our ",(0,a.kt)("a",{parentName:"li",href:"/docs/markdown-features/assets#themed-images"},"themed image")," that detects the user's color scheme to display different images"),(0,a.kt)("li",{parentName:"ul"},"The JSON viewer of our debug panel which uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," global for styling")),(0,a.kt)("p",null,"You may need to escape from SSR since static HTML can't display anything useful without knowing the client state."),(0,a.kt)("admonition",{title:"\u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It is important for the first client-side render to produce the exact same DOM structure as server-side rendering, otherwise, React will correlate virtual DOM with the wrong DOM elements."),(0,a.kt)("p",{parentName:"admonition"},"Therefore, the na\xefve attempt of ",(0,a.kt)("inlineCode",{parentName:"p"},"if (typeof window !== 'undefined) {/* render something */}")," won't work appropriately as a browser vs. server detection, because the first client render would instantly render different markup from the server-generated one."),(0,a.kt)("p",{parentName:"admonition"},"You can read more about this pitfall in ",(0,a.kt)("a",{parentName:"p",href:"https://www.joshwcomeau.com/react/the-perils-of-rehydration/"},"The Perils of Rehydration"),".")),(0,a.kt)("p",null,"We provide several more reliable ways to escape SSR."),(0,a.kt)("h3",{id:"browseronly"},(0,a.kt)("inlineCode",{parentName:"h3"},"<BrowserOnly>")),(0,a.kt)("p",null,"If you need to render some component in browser only (for example, because the component relies on browser specifics to be functional at all), one common approach is to wrap your component with ",(0,a.kt)("a",{parentName:"p",href:"/docs/docusaurus-core#browseronly"},(0,a.kt)("inlineCode",{parentName:"a"},"<BrowserOnly>"))," to make sure it's invisible during SSR and only rendered in CSR."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nfunction MyComponent(props) {\n  return (\n    // highlight-start\n    <BrowserOnly fallback={<div>Loading...</div>}>\n      {() => {\n        const LibComponent =\n          require('some-lib-that-accesses-window').LibComponent;\n        return <LibComponent {...props} />;\n      }}\n    </BrowserOnly>\n    // highlight-end\n  );\n}\n")),(0,a.kt)("p",null,"It's important to realize that the children of ",(0,a.kt)("inlineCode",{parentName:"p"},"<BrowserOnly>")," is not a JSX element, but a function that ",(0,a.kt)("em",{parentName:"p"},"returns")," an element. This is a design decision. Consider this code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nfunction MyComponent() {\n  return (\n    <BrowserOnly>\n      {/* highlight-start */}\n      {/* DON'T DO THIS - doesn't actually work */}\n      <span>page url = {window.location.href}</span>\n      {/* highlight-end */}\n    </BrowserOnly>\n  );\n}\n")),(0,a.kt)("p",null,"While you may expect that ",(0,a.kt)("inlineCode",{parentName:"p"},"BrowserOnly")," hides away the children during server-side rendering, it actually can't. When the React renderer tries to render this JSX tree, it does see the ",(0,a.kt)("inlineCode",{parentName:"p"},"{window.location.href}")," variable as a node of this tree and tries to render it, although it's actually not used! Using a function ensures that we only let the renderer see the browser-only component when it's needed."),(0,a.kt)("h3",{id:"useisbrowser"},(0,a.kt)("inlineCode",{parentName:"h3"},"useIsBrowser")),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useIsBrowser()")," hook to test if the component is currently in a browser environment. It returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in SSR and ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," is CSR, after first client render. Use this hook if you only need to perform certain conditional operations on client-side, but not render an entirely different UI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import useIsBrowser from '@docusaurus/useIsBrowser';\n\nfunction MyComponent() {\n  const isBrowser = useIsBrowser();\n  const location = isBrowser ? window.location.href : 'fetching location...';\n  return <span>{location}</span>;\n}\n")),(0,a.kt)("h3",{id:"useeffect"},(0,a.kt)("inlineCode",{parentName:"h3"},"useEffect")),(0,a.kt)("p",null,"Lastly, you can put your logic in ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect()")," to delay its execution until after first CSR. This is most appropriate if you are only performing side-effects but don't ",(0,a.kt)("em",{parentName:"p"},"get")," data from the client state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function MyComponent() {\n  useEffect(() => {\n    // Only logged in the browser console; nothing is logged during server-side rendering\n    console.log("I\'m now in the browser");\n  }, []);\n  return <span>Some content...</span>;\n}\n')),(0,a.kt)("h3",{id:"executionenvironment"},(0,a.kt)("inlineCode",{parentName:"h3"},"ExecutionEnvironment")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/docusaurus-core#executionenvironment"},(0,a.kt)("inlineCode",{parentName:"a"},"ExecutionEnvironment"))," namespace contains several values, and ",(0,a.kt)("inlineCode",{parentName:"p"},"canUseDOM")," is an effective way to detect browser environment."),(0,a.kt)("p",null,"Beware that it essentially checked ",(0,a.kt)("inlineCode",{parentName:"p"},"typeof window !== 'undefined'")," under the hood, so you should not use it for rendering-related logic, but only imperative code, like reacting to user input by sending web requests, or dynamically importing libraries, where DOM isn't updated at all."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="a-client-module.js"',title:'"a-client-module.js"'},"import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';\n\nif (ExecutionEnvironment.canUseDOM) {\n  document.title = \"I'm loaded!\";\n}\n")))}m.isMDXComponent=!0}}]);