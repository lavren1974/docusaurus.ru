"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[8717],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>p});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),p=s,g=m["".concat(i,".").concat(p)]||m[p]||d[p]||r;return t?n.createElement(g,l(l({ref:a},c),{},{components:t})):n.createElement(g,l({ref:a},c))}));function p(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18679:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),s=t(86010);const r="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:t},a)}},34259:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(87462),s=t(67294),r=t(86010),l=t(51048),o=t(33609),i=t(1943),u=t(72957);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var a,t;const{lazy:l,block:m,defaultValue:p,values:g,groupId:h,className:f}=e,k=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:k.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,o.l)(b,((e,a)=>e.value===a.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===p?p:null!=(a=null!=p?p:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:x}=(0,i.U)(),[N,E]=(0,s.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&b.some((a=>a.value===e))&&E(e)}const C=e=>{const a=e.currentTarget,t=T.indexOf(a),n=b[t].value;n!==N&&(D(a),E(n),null!=h&&x(h,String(n)))},M=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=T.indexOf(e.currentTarget)+1;t=null!=(n=T[a])?n:T[0];break}case"ArrowLeft":{var s;const a=T.indexOf(e.currentTarget)-1;t=null!=(s=T[a])?s:T[T.length-1];break}}null==(a=t)||a.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},b.map((e=>{let{value:a,label:t,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>T.push(e),onKeyDown:M,onFocus:C,onClick:C},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===a})}),null!=t?t:a)}))),l?(0,s.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function p(e){const a=(0,l.Z)();return s.createElement(m,(0,n.Z)({key:String(a)},e))}},45687:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(67294),s=t(86010);const r="browserWindow_my1Q",l="browserWindowHeader_jXSR",o="buttons_uHc7",i="browserWindowAddressBar_Pd8y",u="dot_giz1",c="browserWindowMenuIcon_Vhuh",d="bar_rrRL",m="browserWindowBody_Idgs";function p(e){let{children:a,minHeight:t,url:p="http://localhost:3000"}=e;return n.createElement("div",{className:r,style:{minHeight:t}},n.createElement("div",{className:l},n.createElement("div",{className:o},n.createElement("span",{className:u,style:{background:"#f25f58"}}),n.createElement("span",{className:u,style:{background:"#fbbe3c"}}),n.createElement("span",{className:u,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,s.Z)(i,"text--truncate")},p),n.createElement("div",{className:c},n.createElement("div",null,n.createElement("span",{className:d}),n.createElement("span",{className:d}),n.createElement("span",{className:d})))),n.createElement("div",{className:m},a))}},23548:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>h,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var n,s=t(87462),r=t(67294),l=t(3905),o=t(45687),i=t(34259),u=t(18679);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}const d=e=>{let{title:a,titleId:t,...s}=e;return r.createElement("svg",c({width:200,height:200,viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},s),a?r.createElement("title",{id:t},a):null,n||(n=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"#FFF",d:"M99 52h84v34H99z"}),r.createElement("path",{d:"M23 163c-7.398 0-13.843-4.027-17.303-10A19.886 19.886 0 0 0 3 163c0 11.046 8.954 20 20 20h20v-20H23z",fill:"#3ECC5F"}),r.createElement("path",{d:"M112.98 57.376 183 53V43c0-11.046-8.954-20-20-20H73l-2.5-4.33c-1.112-1.925-3.889-1.925-5 0L63 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L53 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L43 23c-.022 0-.042.003-.065.003l-4.142-4.141c-1.57-1.571-4.252-.853-4.828 1.294l-1.369 5.104-5.192-1.392c-2.148-.575-4.111 1.389-3.535 3.536l1.39 5.193-5.102 1.367c-2.148.576-2.867 3.259-1.296 4.83l4.142 4.142c0 .021-.003.042-.003.064l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 53l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 63l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 73l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 83l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 93l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 103l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 113l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 123l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 133l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 143l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 153l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 163c0 11.046 8.954 20 20 20h120c11.046 0 20-8.954 20-20V83l-70.02-4.376A10.645 10.645 0 0 1 103 68c0-5.621 4.37-10.273 9.98-10.624",fill:"#3ECC5F"}),r.createElement("path",{fill:"#3ECC5F",d:"M143 183h30v-40h-30z"}),r.createElement("path",{d:"M193 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 0 0 190.32 148a4.96 4.96 0 0 0-3.016 1.036 26.531 26.531 0 0 0-.335-.336 4.955 4.955 0 0 0 1.011-2.987 5 5 0 0 0-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 0 0-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 0 0 5-5 5 5 0 0 0-5-5",fill:"#44D860"}),r.createElement("path",{fill:"#3ECC5F",d:"M153 123h30v-20h-30z"}),r.createElement("path",{d:"M193 115.5a2.5 2.5 0 1 0 0-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 0 0-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 0 0-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 0 0-4.8-.979A9.987 9.987 0 0 0 183 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 0 0 .963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032",fill:"#44D860"}),r.createElement("path",{d:"M63 55.5a2.5 2.5 0 0 1-2.5-2.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5a2.5 2.5 0 1 1-5 0c0-6.893 5.607-12.5 12.5-12.5S65.5 46.107 65.5 53a2.5 2.5 0 0 1-2.5 2.5",fill:"#000"}),r.createElement("path",{d:"M103 183h60c11.046 0 20-8.954 20-20V93h-60c-11.046 0-20 8.954-20 20v70z",fill:"#FFFF50"}),r.createElement("path",{d:"M168.02 124h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0-49.814h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 19.814h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2M183 61.611c-.012 0-.022-.006-.034-.005-3.09.105-4.552 3.196-5.842 5.923-1.346 2.85-2.387 4.703-4.093 4.647-1.889-.068-2.969-2.202-4.113-4.46-1.314-2.594-2.814-5.536-5.963-5.426-3.046.104-4.513 2.794-5.807 5.167-1.377 2.528-2.314 4.065-4.121 3.994-1.927-.07-2.951-1.805-4.136-3.813-1.321-2.236-2.848-4.75-5.936-4.664-2.994.103-4.465 2.385-5.763 4.4-1.373 2.13-2.335 3.428-4.165 3.351-1.973-.07-2.992-1.51-4.171-3.177-1.324-1.873-2.816-3.993-5.895-3.89-2.928.1-4.399 1.97-5.696 3.618-1.232 1.564-2.194 2.802-4.229 2.724a1 1 0 0 0-.072 2c3.017.101 4.545-1.8 5.872-3.487 1.177-1.496 2.193-2.787 4.193-2.855 1.926-.082 2.829 1.115 4.195 3.045 1.297 1.834 2.769 3.914 5.731 4.021 3.103.104 4.596-2.215 5.918-4.267 1.182-1.834 2.202-3.417 4.15-3.484 1.793-.067 2.769 1.35 4.145 3.681 1.297 2.197 2.766 4.686 5.787 4.796 3.125.108 4.634-2.62 5.949-5.035 1.139-2.088 2.214-4.06 4.119-4.126 1.793-.042 2.728 1.595 4.111 4.33 1.292 2.553 2.757 5.445 5.825 5.556l.169.003c3.064 0 4.518-3.075 5.805-5.794 1.139-2.41 2.217-4.68 4.067-4.773v-2z",fill:"#000"}),r.createElement("path",{fill:"#3ECC5F",d:"M83 183h40v-40H83z"}),r.createElement("path",{d:"M143 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 0 0 140.32 148a4.96 4.96 0 0 0-3.016 1.036 26.531 26.531 0 0 0-.335-.336 4.955 4.955 0 0 0 1.011-2.987 5 5 0 0 0-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 0 0-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 0 0 5-5 5 5 0 0 0-5-5",fill:"#44D860"}),r.createElement("path",{fill:"#3ECC5F",d:"M83 123h40v-20H83z"}),r.createElement("path",{d:"M133 115.5a2.5 2.5 0 1 0 0-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 0 0-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 0 0-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 0 0-4.8-.979A9.987 9.987 0 0 0 123 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 0 0 .963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032",fill:"#44D860"}),r.createElement("path",{d:"M143 41.75c-.16 0-.33-.02-.49-.05a2.52 2.52 0 0 1-.47-.14c-.15-.06-.29-.14-.431-.23-.13-.09-.259-.2-.38-.31-.109-.12-.219-.24-.309-.38s-.17-.28-.231-.43a2.619 2.619 0 0 1-.189-.96c0-.16.02-.33.05-.49.03-.16.08-.31.139-.47.061-.15.141-.29.231-.43.09-.13.2-.26.309-.38.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.65-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.11.12.22.25.31.38.09.14.17.28.23.43.06.16.11.31.14.47.029.16.05.33.05.49 0 .66-.271 1.31-.73 1.77-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 0 1-.96.19m20-1.25c-.66 0-1.3-.27-1.771-.73a3.802 3.802 0 0 1-.309-.38c-.09-.14-.17-.28-.231-.43a2.619 2.619 0 0 1-.189-.96c0-.66.27-1.3.729-1.77.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.66-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.459.47.73 1.11.73 1.77 0 .16-.021.33-.05.49-.03.16-.08.32-.14.47-.07.15-.14.29-.23.43-.09.13-.2.26-.31.38-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 0 1-.96.19",fill:"#000"}))))};var m=t(79524),p=t(7909);const g={id:"assets",title:"Assets",description:"Handling assets in Docusaurus Markdown",slug:"/markdown-features/assets"},h=void 0,f={unversionedId:"guides/markdown-features/assets",id:"guides/markdown-features/assets",title:"Assets",description:"Handling assets in Docusaurus Markdown",source:"@site/docs/guides/markdown-features/markdown-features-assets.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/assets",permalink:"/docs/markdown-features/assets",draft:!1,tags:[],version:"current",frontMatter:{id:"assets",title:"Assets",description:"Handling assets in Docusaurus Markdown",slug:"/markdown-features/assets"},sidebar:"docs",previous:{title:"Headings and Table of contents",permalink:"/docs/markdown-features/toc"},next:{title:"Markdown links",permalink:"/docs/markdown-features/links"}},k={},b=[{value:"Images",id:"images",level:2},{value:"Files",id:"files",level:2},{value:"Inline SVGs",id:"inline-svgs",level:2},{value:"Themed Images",id:"themed-images",level:2},{value:"GitHub-style themed images",id:"github-style-themed-images",level:3},{value:"Static assets",id:"static-assets",level:2}],y={toc:b};function v(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,s.Z)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Sometimes you want to link to assets (e.g. docx files, images...) directly from Markdown files, and it is convenient to co-locate the asset next to the Markdown file using it."),(0,l.kt)("p",null,"Let's imagine the following file structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Your doc\n/website/docs/myFeature.mdx\n\n# Some assets you want to use\n/website/docs/assets/docusaurus-asset-example-banner.png\n/website/docs/assets/docusaurus-asset-example.docx\n")),(0,l.kt)("h2",{id:"images"},"Images"),(0,l.kt)("p",null,"You can display images in three different ways: Markdown syntax, CJS require, or ES imports syntax."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Markdown syntax",mdxType:"TabItem"},(0,l.kt)("p",null,"Display images using simple Markdown syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"![Example banner](./assets/docusaurus-asset-example-banner.png)\n"))),(0,l.kt)(u.Z,{value:"CommonJS require",mdxType:"TabItem"},(0,l.kt)("p",null,"Display images using inline CommonJS ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," in JSX image tag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<img\n  src={require('./assets/docusaurus-asset-example-banner.png').default}\n  alt=\"Example banner\"\n/>\n"))),(0,l.kt)(u.Z,{value:"Import statement",mdxType:"TabItem"},(0,l.kt)("p",null,"Display images using ES ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," syntax and JSX image tag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import myImageUrl from './assets/docusaurus-asset-example-banner.png';\n\n<img src={myImageUrl} alt=\"Example banner\" />;\n")))),(0,l.kt)("p",null,"All of the above result in displaying the image:"),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"My image alternative text",src:t(2120).Z,width:"422",height:"110"}))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you are using ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-ideal-image"},"@docusaurus/plugin-ideal-image"),", you need to use the dedicated image component, as documented.")),(0,l.kt)("h2",{id:"files"},"Files"),(0,l.kt)("p",null,"In the same way, you can link to existing assets by ",(0,l.kt)("inlineCode",{parentName:"p"},"require"),"'ing them and using the returned URL in ",(0,l.kt)("inlineCode",{parentName:"p"},"video"),"s, ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," anchor links, etc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"# My Markdown page\n\n<a target=\"\\_blank\" href={require('./assets/docusaurus-asset-example.docx').default}> Download this docx </a>\n\nor\n\n[Download this docx using Markdown](./assets/docusaurus-asset-example.docx)\n")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("a",{target:"_blank",href:t(67300).Z},"Download this docx"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:t(70728).Z},"Download this docx using Markdown"))),(0,l.kt)("admonition",{title:"markdown links are always file paths",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you use the Markdown image or link syntax, all asset paths will be resolved as file paths by Docusaurus and automatically converted to ",(0,l.kt)("inlineCode",{parentName:"p"},"require()")," calls. You don't need to use ",(0,l.kt)("inlineCode",{parentName:"p"},"require()")," in Markdown unless you use the JSX syntax, which you do have to handle yourself.")),(0,l.kt)("h2",{id:"inline-svgs"},"Inline SVGs"),(0,l.kt)("p",null,"Docusaurus supports inlining SVGs out of the box."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import DocusaurusSvg from './docusaurus.svg';\n\n<DocusaurusSvg />;\n")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)(d,{mdxType:"DocusaurusSvg"})),(0,l.kt)("p",null,"This can be useful if you want to alter the part of the SVG image via CSS. For example, you can change one of the SVG colors based on the current theme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import DocusaurusSvg from './docusaurus.svg';\n\n<DocusaurusSvg className=\"themedDocusaurus\" />;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"[data-theme='light'] .themedDocusaurus [fill='#FFFF50'] {\n  fill: greenyellow;\n}\n\n[data-theme='dark'] .themedDocusaurus [fill='#FFFF50'] {\n  fill: seagreen;\n}\n")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)(d,{className:"themedDocusaurus",mdxType:"DocusaurusSvg"})),(0,l.kt)("h2",{id:"themed-images"},"Themed Images"),(0,l.kt)("p",null,"Docusaurus supports themed images: the ",(0,l.kt)("inlineCode",{parentName:"p"},"ThemedImage")," component (included in the themes) allows you to switch the image source based on the current theme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import ThemedImage from '@theme/ThemedImage';\n\n<ThemedImage\n  alt=\"Docusaurus themed image\"\n  // highlight-start\n  sources={{\n    light: useBaseUrl('/img/docusaurus_light.svg'),\n    dark: useBaseUrl('/img/docusaurus_dark.svg'),\n  }}\n  // highlight-end\n/>;\n")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)(p.Z,{alt:"Docusaurus themed image",sources:{light:(0,m.Z)("/img/docusaurus_keytar.svg"),dark:(0,m.Z)("/img/docusaurus_speed.svg")},mdxType:"ThemedImage"})),(0,l.kt)("h3",{id:"github-style-themed-images"},"GitHub-style themed images"),(0,l.kt)("p",null,"GitHub uses its own ",(0,l.kt)("a",{parentName:"p",href:"https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/"},"image theming approach")," with path fragments, which you can easily implement yourself."),(0,l.kt)("p",null,"To toggle the visibility of an image using the path fragment (for GitHub, it's ",(0,l.kt)("inlineCode",{parentName:"p"},"#gh-dark-mode-only")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"#gh-light-mode-only"),"), add the following to your custom CSS (you can also use your own suffix if you don't want to be coupled to GitHub):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/css/custom.css"',title:'"src/css/custom.css"'},"[data-theme='light'] img[src$='#gh-dark-mode-only'],\n[data-theme='dark'] img[src$='#gh-light-mode-only'] {\n  display: none;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus themed image](/img/docusaurus_keytar.svg#gh-light-mode-only)![Docusaurus themed image](/img/docusaurus_speed.svg#gh-dark-mode-only)\n")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docusaurus themed image",src:t(54649).Z+"#gh-light-mode-only",width:"200",height:"200"}),(0,l.kt)("img",{alt:"Docusaurus themed image",src:t(4667).Z+"#gh-dark-mode-only",width:"250",height:"200"}))),(0,l.kt)("h2",{id:"static-assets"},"Static assets"),(0,l.kt)("p",null,"If a Markdown link or image has an absolute path, the path will be seen as a file path and will be resolved from the static directories. For example, if you have configured ",(0,l.kt)("a",{parentName:"p",href:"/docs/static-assets"},"static directories")," to be ",(0,l.kt)("inlineCode",{parentName:"p"},"['public', 'static']"),", then for the following image:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"![An image from the static](/img/docusaurus.png)\n")),(0,l.kt)("p",null,"Docusaurus will try to look for it in both ",(0,l.kt)("inlineCode",{parentName:"p"},"static/img/docusaurus.png")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"public/img/docusaurus.png"),". The link will then be converted to a ",(0,l.kt)("inlineCode",{parentName:"p"},"require()")," call instead of staying as a URL. This is desirable in two regards:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"You don't have to worry about the base URL, which Docusaurus will take care of when serving the asset;"),(0,l.kt)("li",{parentName:"ol"},"The image enters Webpack's build pipeline and its name will be appended by a hash, which enables browsers to aggressively cache the image and improves your site's performance.")),(0,l.kt)("p",null,"If you intend to write URLs, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"pathname://")," protocol to disable automatic asset linking."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"![banner](pathname:///img/docusaurus-asset-example-banner.png)\n")),(0,l.kt)("p",null,"This link will be generated as ",(0,l.kt)("inlineCode",{parentName:"p"},'<img src="/img/docusaurus-asset-example-banner.png" alt="banner" />'),", without any processing or file existence checking."))}v.isMDXComponent=!0},67300:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/docusaurus-asset-example-93ea653de6d8636f7254aecab1adbcce.docx"},70728:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/docusaurus-asset-example-93ea653de6d8636f7254aecab1adbcce.docx"},2120:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/docusaurus-asset-example-banner-63decf1180b7949f4c3d0f7b7ecfd162.png"},54649:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/docusaurus_keytar-0cb85c4468d358b2028c7ab2a38aa3ff.svg"},4667:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/docusaurus_speed-3cf95ee960d17fd7f1d2714e0d7525b2.svg"}}]);