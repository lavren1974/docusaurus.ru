"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[2795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53205:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(76775);const i="apiTable_e8hp";function o(e,t){let{name:n,children:i}=e;const o=function(e){let t=e;for(;(0,a.isValidElement)(t);)[t]=a.Children.toArray(t.props.children);return t}(i),l=n?n+"-"+o:o,p="#"+l,s=(0,r.k6)();return a.createElement("tr",{id:l,tabIndex:0,ref:s.location.hash===p?t:void 0,onClick:()=>{s.push(p)},onKeyDown:e=>{"Enter"===e.key&&s.push(p)}},i.props.children)}const l=a.forwardRef(o);function p(e){let{children:t,name:n}=e;const[r,o]=a.Children.toArray(t.props.children),p=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e;null==(e=p.current)||e.focus()}),[p]);const s=a.Children.map(o.props.children,(e=>a.createElement(l,{name:n,ref:p},e)));return a.createElement("table",{className:i},r,a.createElement("tbody",null,s))}},99389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(53205);const o={sidebar_position:10,id:"plugin-sitemap",title:"\ud83d\udce6 plugin-sitemap",slug:"/api/plugins/@docusaurus/plugin-sitemap"},l=void 0,p={unversionedId:"api/plugins/plugin-sitemap",id:"api/plugins/plugin-sitemap",title:"\ud83d\udce6 plugin-sitemap",description:"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately.",source:"@site/docs/api/plugins/plugin-sitemap.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-sitemap",permalink:"/docs/api/plugins/@docusaurus/plugin-sitemap",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,id:"plugin-sitemap",title:"\ud83d\udce6 plugin-sitemap",slug:"/api/plugins/@docusaurus/plugin-sitemap"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-pwa",permalink:"/docs/api/plugins/@docusaurus/plugin-pwa"},next:{title:"Themes overview",permalink:"/docs/api/themes"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately."),(0,r.kt)("admonition",{title:"production only",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This plugin is always inactive in development and ",(0,r.kt)("strong",{parentName:"p"},"only active in production")," because it works on the build output.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/plugin-sitemap\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you use the preset ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,r.kt)("p",{parentName:"admonition"},"You can configure this plugin through the ",(0,r.kt)("a",{parentName:"p",href:"#ex-config-preset"},"preset options"),".")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Accepted fields:"),(0,r.kt)(i.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"changefreq")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'weekly'")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions"},"sitemap docs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0.5")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions"},"sitemap docs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ignorePatterns")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of glob patterns; matching route paths will be filtered from the sitemap. Note that you may need to include the base URL in here."))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This plugin also respects some site config:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/docusaurus-config#noIndex"},(0,r.kt)("inlineCode",{parentName:"a"},"noIndex")),": results in no sitemap generated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/docusaurus-config#trailingSlash"},(0,r.kt)("inlineCode",{parentName:"a"},"trailingSlash")),": determines if the URLs in the sitemap have trailing slashes"))),(0,r.kt)("h3",{id:"ex-config"},"Example configuration"),(0,r.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Most Docusaurus users configure this plugin through the preset options.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"config-tabs","config-tabs":!0},"// Preset Options: sitemap\n// Plugin Options: @docusaurus/plugin-sitemap\n\nconst config = {\n  changefreq: 'weekly',\n  priority: 0.5,\n  ignorePatterns: ['/tags/**'],\n};\n")),(0,r.kt)("p",null,"You can find your sitemap at ",(0,r.kt)("inlineCode",{parentName:"p"},"/sitemap.xml"),"."))}m.isMDXComponent=!0}}]);