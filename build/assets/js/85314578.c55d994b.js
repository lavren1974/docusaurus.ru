"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[1121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(87462),r=n(67294),o=n(86010),i=n(51048),l=n(33609),u=n(1943),s=n(72957);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:g,values:m,groupId:f,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===g?g:null!=(t=null!=g?g:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,u.U)(),[O,x]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=N[f];null!=e&&e!==O&&y.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==O&&(T(t),x(a),null!=f&&w(f,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:I,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function g(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},69314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(34259),i=n(18679);const l={sidebar_position:5,id:"plugin-debug",title:"\ud83d\udce6 plugin-debug",slug:"/api/plugins/@docusaurus/plugin-debug"},u=void 0,s={unversionedId:"api/plugins/plugin-debug",id:"api/plugins/plugin-debug",title:"\ud83d\udce6 plugin-debug",description:"It is mostly useful for plugin authors, that will be able to inspect more easily the content of the .docusaurus folder (like the creates routes), but also be able to inspect data structures that are never written to disk, like the plugin data loaded through the contentLoaded lifecycle.",source:"@site/docs/api/plugins/plugin-debug.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-debug",permalink:"/docs/api/plugins/@docusaurus/plugin-debug",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"plugin-debug",title:"\ud83d\udce6 plugin-debug",slug:"/api/plugins/@docusaurus/plugin-debug"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/docs/api/plugins/@docusaurus/plugin-client-redirects"},next:{title:"\ud83d\udce6 plugin-google-analytics",permalink:"/docs/api/plugins/@docusaurus/plugin-google-analytics"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],d={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is mostly useful for plugin authors, that will be able to inspect more easily the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},".docusaurus")," folder (like the creates routes), but also be able to inspect data structures that are never written to disk, like the plugin data loaded through the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentLoaded")," lifecycle."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you use the plugin via the classic preset, the preset will ",(0,r.kt)("strong",{parentName:"p"},"enable the plugin in development and disable it in production")," by default (",(0,r.kt)("inlineCode",{parentName:"p"},"debug: undefined"),") to avoid exposing potentially sensitive information. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"debug: true")," to always enable it or ",(0,r.kt)("inlineCode",{parentName:"p"},"debug: false")," to always disable it."),(0,r.kt)("p",{parentName:"admonition"},"If you use a standalone plugin, you may need to achieve the same effect by checking the environment:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    // highlight-next-line\n    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-debug',\n  ].filter(Boolean),\n};\n"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you report a bug, we will probably ask you to have this plugin turned on in the production, so that we can inspect your deployment config more easily.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/plugin-debug\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you use the preset ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,r.kt)("p",{parentName:"admonition"},"You can configure this plugin through the preset options.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"This plugin currently has no options."),(0,r.kt)("h3",{id:"ex-config"},"Example configuration"),(0,r.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Most Docusaurus users configure this plugin through the preset options.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Preset Options",mdxType:"TabItem"},(0,r.kt)("p",null,"If you use a preset, configure this plugin through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/using-plugins#docusauruspreset-classic"},"preset options"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-next-line\n        debug: true, // This will enable the plugin in production\n      },\n    ],\n  ],\n};\n"))),(0,r.kt)(i.Z,{value:"Plugin Options",mdxType:"TabItem"},(0,r.kt)("p",null,"If you are using a standalone plugin, provide options directly to the plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // highlight-next-line\n  plugins: ['@docusaurus/plugin-debug'],\n};\n")))))}g.isMDXComponent=!0}}]);