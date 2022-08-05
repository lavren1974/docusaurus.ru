"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[4695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53205:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),i=n(76775);const a="apiTable_e8hp";function l(e,t){let{name:n,children:a}=e;const l=function(e){let t=e;for(;(0,r.isValidElement)(t);)[t]=r.Children.toArray(t.props.children);return t}(a),o=n?n+"-"+l:l,s="#"+o,u=(0,i.k6)();return r.createElement("tr",{id:o,tabIndex:0,ref:u.location.hash===s?t:void 0,onClick:()=>{u.push(s)},onKeyDown:e=>{"Enter"===e.key&&u.push(s)}},a.props.children)}const o=r.forwardRef(l);function s(e){let{children:t,name:n}=e;const[i,l]=r.Children.toArray(t.props.children),s=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;null==(e=s.current)||e.focus()}),[s]);const u=r.Children.map(l.props.children,(e=>r.createElement(o,{name:n,ref:s},e)));return r.createElement("table",{className:a},i,r.createElement("tbody",null,u))}},82691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905)),a=n(53205);const l={sidebar_position:4,id:"plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",slug:"/api/plugins/@docusaurus/plugin-client-redirects"},o=void 0,s={unversionedId:"api/plugins/plugin-client-redirects",id:"api/plugins/plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",description:"Docusaurus Plugin to generate client-side redirects.",source:"@site/docs/api/plugins/plugin-client-redirects.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-client-redirects",permalink:"/docs/api/plugins/@docusaurus/plugin-client-redirects",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",slug:"/api/plugins/@docusaurus/plugin-client-redirects"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-pages",permalink:"/docs/api/plugins/@docusaurus/plugin-content-pages"},next:{title:"\ud83d\udce6 plugin-debug",permalink:"/docs/api/plugins/@docusaurus/plugin-debug"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>RedirectRule</code>",id:"RedirectRule",level:4},{value:"<code>CreateRedirectsFn</code>",id:"CreateRedirectsFn",level:4},{value:"Example configuration",id:"ex-config",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docusaurus Plugin to generate ",(0,i.kt)("strong",{parentName:"p"},"client-side redirects"),"."),(0,i.kt)("p",null,"This plugin will write additional HTML pages to your static site that redirect the user to your existing Docusaurus pages with JavaScript."),(0,i.kt)("admonition",{title:"production only",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This plugin is always inactive in development and ",(0,i.kt)("strong",{parentName:"p"},"only active in production")," because it works on the build output.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"It is better to use server-side redirects whenever possible."),(0,i.kt)("p",{parentName:"admonition"},"Before using this plugin, you should look if your hosting provider doesn't offer this feature.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/plugin-client-redirects\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Accepted fields:"),(0,i.kt)(a.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fromExtensions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"The extensions to be removed from the route after redirecting.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"toExtensions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"The extensions to be appended to the route after redirecting.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"redirects")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,(0,i.kt)("a",{href:"#RedirectRule"},"RedirectRule"),"[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"The list of redirect rules.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"createRedirects")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,(0,i.kt)("a",{href:"#CreateRedirectsFn"},"CreateRedirectsFn"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"A callback to create a redirect rule."))))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("h4",{id:"RedirectRule"},(0,i.kt)("inlineCode",{parentName:"h4"},"RedirectRule")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type RedirectRule = {\n  to: string;\n  from: string | string[];\n};\n")),(0,i.kt)("h4",{id:"CreateRedirectsFn"},(0,i.kt)("inlineCode",{parentName:"h4"},"CreateRedirectsFn")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type CreateRedirectsFn = (path: string) => string[] | string | null | undefined;\n")),(0,i.kt)("h3",{id:"ex-config"},"Example configuration"),(0,i.kt)("p",null,"Here's an example configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      // highlight-start\n      {\n        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage\n        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)\n        redirects: [\n          // /docs/oldDoc -> /docs/newDoc\n          {\n            to: '/docs/newDoc',\n            from: '/docs/oldDoc',\n          },\n          // Redirect from multiple old paths to the new path\n          {\n            to: '/docs/newDoc2',\n            from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],\n          },\n        ],\n        createRedirects(existingPath) {\n          if (existingPath.includes('/community')) {\n            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X\n            return [\n              existingPath.replace('/community', '/docs/team'),\n              existingPath.replace('/community', '/docs/support'),\n            ];\n          }\n          return undefined; // Return a falsy value: no redirect created\n        },\n      },\n      // highlight-end\n    ],\n  ],\n};\n")))}p.isMDXComponent=!0}}]);