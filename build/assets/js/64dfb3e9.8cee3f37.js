"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[4027],{68839:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(2728);const r="tableOfContentsInline_prmo";function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return a.createElement("div",{className:r},a.createElement(o.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},2728:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),o=n(67294),r=n(20107);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function d(e,t){var n;let{anchorTopOffset:a}=t;const o=e.find((e=>i(e).top>=a));if(o){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,o.useRef)(void 0),n=m();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:l}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push("h"+o+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),i=d(s,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function p(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?o.createElement("ul",{className:r?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const u=o.memo(p);function k(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:m,maxHeadingLevel:p,...k}=e;const h=(0,r.L)(),g=null!=m?m:h.tableOfContents.minHeadingLevel,f=null!=p?p:h.tableOfContents.maxHeadingLevel,w=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>s({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:g,maxHeadingLevel:f});return c((0,o.useMemo)((()=>{if(i&&d)return{linkClassName:i,linkActiveClassName:d,minHeadingLevel:g,maxHeadingLevel:f}}),[i,d,g,f])),o.createElement(u,(0,a.Z)({toc:w,className:n,linkClassName:i},k))}},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),o=n(67294),r=n(86010),l=n(51048),s=n(33609),i=n(1943),d=n(72957);const m="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:u,values:k,groupId:h,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=k?k:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(w,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===u?u:null!=(t=null!=u?u:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==b&&!w.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+w.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,i.U)(),[x,T]=(0,o.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:M}=(0,d.o5)();if(null!=h){const e=y[h];null!=e&&e!==x&&w.some((t=>t.value===e))&&T(e)}const H=e=>{const t=e.currentTarget,n=C.indexOf(t),a=w[n].value;a!==x&&(M(t),T(a),null!=h&&N(h,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var o;const t=C.indexOf(e.currentTarget)-1;n=null!=(o=C[t])?o:C[C.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},g)},w.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:I,onFocus:H,onClick:H},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,l.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},45687:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),o=n(86010);const r="browserWindow_my1Q",l="browserWindowHeader_jXSR",s="buttons_uHc7",i="browserWindowAddressBar_Pd8y",d="dot_giz1",m="browserWindowMenuIcon_Vhuh",c="bar_rrRL",p="browserWindowBody_Idgs";function u(e){let{children:t,minHeight:n,url:u="http://localhost:3000"}=e;return a.createElement("div",{className:r,style:{minHeight:n}},a.createElement("div",{className:l},a.createElement("div",{className:s},a.createElement("span",{className:d,style:{background:"#f25f58"}}),a.createElement("span",{className:d,style:{background:"#fbbe3c"}}),a.createElement("span",{className:d,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,o.Z)(i,"text--truncate")},u),a.createElement("div",{className:m},a.createElement("div",null,a.createElement("span",{className:c}),a.createElement("span",{className:c}),a.createElement("span",{className:c})))),a.createElement("div",{className:p},t))}},14526:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(73902);function r(e){return a.createElement(o.Z,e)}},26604:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>g,assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>p,metadata:()=>k,toc:()=>f});var a=n(87462),o=(n(67294),n(3905)),r=n(45687),l=n(34259),s=n(18679);const i="wrappingBlock_S4U4";var d=n(14526);const m={toc:[]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",null,"Hello ",n.name),(0,o.kt)("p",null,"This is text some content from ",(0,o.kt)("inlineCode",{parentName:"p"},"_markdown-partial-example.md"),"."))}c.isMDXComponent=!0;n(68839);const p={id:"react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",slug:"/markdown-features/react"},u="MDX and React",k={unversionedId:"guides/markdown-features/react",id:"guides/markdown-features/react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",source:"@site/docs/guides/markdown-features/markdown-features-react.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/react",permalink:"/docs/markdown-features/react",draft:!1,tags:[],version:"current",frontMatter:{id:"react",title:"MDX and React",description:"Using the power of React in Docusaurus Markdown documents, thanks to MDX",slug:"/markdown-features/react"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/markdown-features"},next:{title:"Tabs",permalink:"/docs/markdown-features/tabs"}},h={},g=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},f=[{value:"Using JSX in Markdown",id:"using-jsx-in-markdown",level:2},{value:"Importing components",id:"importing-components",level:3},{value:"Markdown and JSX interoperability",id:"markdown-and-jsx-interoperability",level:3},{value:"Importing code snippets",id:"importing-code-snippets",level:2},{value:"Importing Markdown",id:"importing-markdown",level:2},{value:"Available exports",id:"available-exports",level:2}],w={Highlight:g,toc:f};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mdx-and-react"},"MDX and React"),(0,o.kt)("h2",{id:"using-jsx-in-markdown"},"Using JSX in Markdown"),(0,o.kt)("p",null,"Docusaurus has built-in support for ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX v1"),", which allows you to write JSX within your Markdown files and render them as React components."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"While Docusaurus parses both ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," files using MDX, some of the syntaxes are treated slightly differently by third-party tools. For the most accurate parsing and better editor support, we recommend using the ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," extension for files containing MDX syntax.")),(0,o.kt)("p",null,"To define any custom component within an MDX file, you have to export it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n")),(0,o.kt)("p",null,"Notice how it renders both the markup from your React component and the Markdown syntax:"),(0,o.kt)(r.Z,{minHeight:240,mdxType:"BrowserWindow"},(0,o.kt)(g,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," ","and ",(0,o.kt)(g,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,o.kt)("p",null,"I can write ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,o.kt)("em",{parentName:"p"},"JSX"),"!")),(0,o.kt)("admonition",{title:"MDX is JSX",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Since all doc files are parsed using MDX, anything that looks like HTML is actually JSX. Therefore, if you need to inline-style a component, follow JSX flavor and provide style objects."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/* Instead of this: */\n<span style=\"background-color: red\">Foo</span>\n/* Use this: */\n<span style={{backgroundColor: 'red'}}>Foo</span>\n")),(0,o.kt)("p",{parentName:"admonition"},"This behavior is different from Docusaurus 1. See also ",(0,o.kt)("a",{parentName:"p",href:"/docs/migration/manual#convert-style-attributes-to-style-objects-in-mdx"},"Migrating from v1 to v2"),"."),(0,o.kt)("p",{parentName:"admonition"},"In addition, MDX is not ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/3018"},"100% compatible with CommonMark"),". Use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://mdx-git-renovate-babel-monorepo-mdx.vercel.app/playground"},"MDX playground"))," to ensure that your syntax is valid MDX.")),(0,o.kt)("h3",{id:"importing-components"},"Importing components"),(0,o.kt)("p",null,"You can also import your own components defined in other files or third-party components installed via npm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- Docusaurus theme component --\x3e\nimport TOCInline from '@theme/TOCInline';\n\x3c!-- External component --\x3e\nimport Button from '@mui/material/Button';\n\x3c!-- Custom component --\x3e\nimport BrowserWindow from '@site/src/components/BrowserWindow';\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@site")," alias points to your website's directory, usually where the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file is. Using an alias instead of relative paths (",(0,o.kt)("inlineCode",{parentName:"p"},"'../../src/components/BrowserWindow'"),") saves you from updating import paths when moving files around, or when ",(0,o.kt)("a",{parentName:"p",href:"/docs/versioning"},"versioning docs")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/i18n/tutorial"},"translating"),".")),(0,o.kt)("p",null,"While declaring components within Markdown is very convenient for simple cases, it becomes hard to maintain because of limited editor support, risks of parsing errors, and low reusability. Use a separate ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," file when your component involves complex JS logic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/Highlight.js"',title:'"src/components/Highlight.js"'},"import React from 'react';\n\nexport default function Highlight({children, color}) {\n  return (\n    <span\n      style={{\n        backgroundColor: color,\n        borderRadius: '2px',\n        color: '#fff',\n        padding: '0.2rem',\n      }}>\n      {children}\n    </span>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="markdown-file.mdx"',title:'"markdown-file.mdx"'},"import Highlight from '@site/src/components/Highlight';\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight>\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX docs")," to see what other fancy stuff you can do with MDX."),(0,o.kt)("h3",{id:"markdown-and-jsx-interoperability"},"Markdown and JSX interoperability"),(0,o.kt)("p",null,"Docusaurus v2 is using MDX v1, which has a lot of known cases where the content fails to be correctly parsed as Markdown. Use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://mdx-git-renovate-babel-monorepo-mdx.vercel.app/playground"},"MDX playground"))," to ensure that your syntax is valid MDX."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Samples of parsing failures"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A paragraph starting with a JSX tag will be seen entirely as a JSX string:")),(0,o.kt)(l.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Problem",mdxType:"TabItem"},(0,o.kt)("div",{className:i},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<span style={{color: 'red'}}>Highlighted text</span> but afterwards _Markdown_ **doesn't work**\n"))),(0,o.kt)("div",{className:i},(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)("span",{style:{color:"red"}},"Highlighted text")," but afterwards _Markdown_ **doesn't work**"))),(0,o.kt)(s.Z,{value:"Workaround",mdxType:"TabItem"},(0,o.kt)("p",null,"Use JSX for the rest of the line, or prefix the line with some plain text:"),(0,o.kt)("div",{className:i},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<span style={{color: 'red'}}>Use JSX for the paragraph</span> to stop <i>worrying about</i> <b>Markdown</b>\n\n&#8203;<span style={{color: 'red'}}>\u2190 This is a zero-width space</span> and afterwards <i>Markdown</i> <b>works</b>\n"))),(0,o.kt)("div",{className:i},(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)("span",{style:{color:"red"}},"Use JSX for the paragraph")," to stop ",(0,o.kt)("i",null,"worrying about")," ",(0,o.kt)("b",null,"Markdown"),(0,o.kt)("p",null,"\u200b",(0,o.kt)("span",{style:{color:"red"}},"\u2190 This is a zero-width space")," and afterwards ",(0,o.kt)("i",null,"Markdown")," ",(0,o.kt)("b",null,"works")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Markdown within a JSX tag never works:")),(0,o.kt)(l.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Problem",mdxType:"TabItem"},(0,o.kt)("div",{className:i},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<span style={{color: 'red'}}>**Bold doesn't work**</span>\n"))),(0,o.kt)("div",{className:i},(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)("span",{style:{color:"red"}},"**Bold doesn't work**")))),(0,o.kt)(s.Z,{value:"Workaround",mdxType:"TabItem"},(0,o.kt)("p",null,"Use JSX within JSX tag, or move the Markdown to the outer layer:"),(0,o.kt)("div",{className:i},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<span style={{color: 'red'}}><b>Bold now works</b></span>\n\n**<span style={{color: 'red'}}>Bold now works</span>**\n"))),(0,o.kt)("div",{className:i},(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)("span",{style:{color:"red"}},(0,o.kt)("b",null,"Bold now works")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("span",{style:{color:"red"}},"Bold now works"))))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Text immediately below a JSX tag will be seen as JSX text:")),(0,o.kt)(l.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Problem",mdxType:"TabItem"},(0,o.kt)("div",{className:i},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{color: 'red'}}>\n**Bold still doesn't work**\n</div>\n"))),(0,o.kt)("div",{className:i},(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)("div",{style:{color:"red"}},"**Bold still doesn't work**")))),(0,o.kt)(s.Z,{value:"Workaround",mdxType:"TabItem"},(0,o.kt)("p",null,"Add an empty new line:"),(0,o.kt)("div",{className:i},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{color: 'red'}}>\n\n**Bold now works**\n\n</div>\n"))),(0,o.kt)("div",{className:i},(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)("div",{style:{color:"red"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bold now works"))))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Markdown text indented by four spaces will be seen as a code block:")),(0,o.kt)(l.Z,{groupId:"jsx-and-md",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Problem",mdxType:"TabItem"},(0,o.kt)("div",{className:i},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{color: 'red'}}>\n\n    You may think I'm just some text...\n\n</div>\n"))),(0,o.kt)("div",{className:i},(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)("div",{style:{color:"red"}},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You may think I'm just some text...\n")))))),(0,o.kt)(s.Z,{value:"Workaround",mdxType:"TabItem"},(0,o.kt)("p",null,"Don't indent:"),(0,o.kt)("div",{className:i},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div style={{color: 'red'}}>\n\nNow I'm actually just text\n\n</div>\n"))),(0,o.kt)("div",{className:i},(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)("div",{style:{color:"red"}},(0,o.kt)("p",null,"Now I'm actually just text"))))))),(0,o.kt)("h2",{id:"importing-code-snippets"},"Importing code snippets"),(0,o.kt)("p",null,"You can not only import a file containing a component definition, but also import any code file as raw text, and then insert it in a code block, thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/raw-loader/"},"Webpack raw-loader"),". In order to use ",(0,o.kt)("inlineCode",{parentName:"p"},"raw-loader"),", you first need to install it in your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save raw-loader\n")),(0,o.kt)("p",null,"Now you can import code snippets from another file as it is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="myMarkdownFile.mdx"',title:'"myMarkdownFile.mdx"'},"import CodeBlock from '@theme/CodeBlock';\nimport MyComponentSource from '!!raw-loader!./myComponent';\n\n<CodeBlock language=\"jsx\">{MyComponentSource}</CodeBlock>\n")),(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)(d.Z,{language:"jsx",mdxType:"CodeBlock"},"/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, {useState} from 'react';\n\nexport default function MyComponent() {\n  const [bool, setBool] = useState(false);\n  return (\n    <div>\n      <p>MyComponent rendered !</p>\n      <p>bool={bool ? 'true' : 'false'}</p>\n      <p>\n        <button onClick={() => setBool((b) => !b)}>toggle bool</button>\n      </p>\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/markdown-features/code-blocks#usage-in-jsx"},"using code blocks in JSX")," for more details of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CodeBlock>")," component."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"<CodeBlock>")," rather than the Markdown triple-backtick ",(0,o.kt)("inlineCode",{parentName:"p"},"```"),", because the latter will ship out any of its content as-is, but you want to interpolate the imported text here.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This feature is experimental and might be subject to breaking API changes in the future.")),(0,o.kt)("h2",{id:"importing-markdown"},"Importing Markdown"),(0,o.kt)("p",null,"You can use Markdown files as components and import them elsewhere, either in Markdown files or in React pages."),(0,o.kt)("p",null,"By convention, using the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"_")," filename prefix")," will not create any doc page and means the markdown file is a ",(0,o.kt)("strong",{parentName:"p"},'"partial"'),", to be imported by other files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="_markdown-partial-example.mdx"',title:'"_markdown-partial-example.mdx"'},"<span>Hello {props.name}</span>\n\nThis is text some content from `_markdown-partial-example.mdx`.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="someOtherDoc.mdx"',title:'"someOtherDoc.mdx"'},"import PartialExample from './_markdown-partial-example.mdx';\n\n<PartialExample name=\"Sebastien\" />;\n")),(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)(c,{name:"Sebastien",mdxType:"PartialExample"})),(0,o.kt)("p",null,"This way, you can reuse content among multiple pages and avoid duplicating materials."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Currently, the table of contents does not contain the imported Markdown headings. This is a technical limitation that we are trying to solve (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/3915"},"issue"),").")),(0,o.kt)("h2",{id:"available-exports"},"Available exports"),(0,o.kt)("p",null,"Within the MDX page, the following variables are available as globals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"frontMatter"),": the front matter as a record of string keys and values;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toc"),": the table of contents, as a tree of headings. See also ",(0,o.kt)("a",{parentName:"li",href:"/docs/markdown-features/toc#inline-table-of-contents"},"Inline TOC")," for a more concrete use-case."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contentTitle"),": the Markdown title, which is the first ",(0,o.kt)("inlineCode",{parentName:"li"},"h1")," heading in the Markdown text. It's ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," if there isn't one (e.g. title specified in the front matter).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import TOCInline from '@theme/TOCInline';\nimport CodeBlock from '@theme/CodeBlock';\n\nThe table of contents for this page, serialized:\n\n<CodeBlock className=\"language-json\">{JSON.stringify(toc, null, 2)}</CodeBlock>\n\nThe front matter of this page:\n\n<ul>\n  {Object.entries(frontMatter).map(([key, value]) => <li key={key}><b>{key}</b>: {value}</li>)}\n</ul>\n\n<p>The title of this page is: <b>{contentTitle}</b></p>\n")),(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)("p",null,"The table of contents for this page, serialized:"),(0,o.kt)(d.Z,{className:"language-json",mdxType:"CodeBlock"},JSON.stringify(f,null,2)),(0,o.kt)("p",null,"The front matter of this page:"),(0,o.kt)("ul",null,Object.entries(p).map((e=>{let[t,n]=e;return(0,o.kt)("li",{key:t},(0,o.kt)("b",null,t),": ",n)}))),(0,o.kt)("p",null,"The title of this page is: ",(0,o.kt)("b",null,u))))}v.isMDXComponent=!0}}]);