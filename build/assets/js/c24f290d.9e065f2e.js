"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[2404],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51407:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:2,title:"\ud83d\udce6 logger",slug:"/api/misc/@docusaurus/logger"},s=void 0,p={unversionedId:"api/misc/logger/logger",id:"api/misc/logger/logger",title:"\ud83d\udce6 logger",description:"An encapsulated logger for semantically formatting console messages.",source:"@site/docs/api/misc/logger/logger.md",sourceDirName:"api/misc/logger",slug:"/api/misc/@docusaurus/logger",permalink:"/docs/api/misc/@docusaurus/logger",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83d\udce6 logger",slug:"/api/misc/@docusaurus/logger"},sidebar:"api",previous:{title:"string-literal-i18n-messages",permalink:"/docs/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages"}},m={},u=[{value:"APIs",id:"apis",level:2},{value:"Using the template literal tag",id:"using-the-template-literal-tag",level:3}],d={toc:u};function c(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An encapsulated logger for semantically formatting console messages."),(0,i.kt)("p",null,"Authors of packages in the Docusaurus ecosystem are encouraged to use this package to provide unified log formats."),(0,i.kt)("h2",{id:"apis"},"APIs"),(0,i.kt)("p",null,"It exports a single object as default export: ",(0,i.kt)("inlineCode",{parentName:"p"},"logger"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"logger")," has the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some useful colors.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"red")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yellow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"green")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bold")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dim")))),(0,i.kt)("li",{parentName:"ul"},"Formatters. These functions all have the signature ",(0,i.kt)("inlineCode",{parentName:"li"},"(msg: unknown) => string"),". Note that their implementations are not guaranteed. You should only care about their semantics.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),": formats a file path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url"),": formats a URL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": formats an identifier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code"),": formats a code snippet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subdue"),": subdues the text."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num"),": formats a number."))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"interpolate")," function. It is a template literal tag. The syntax can be found below."),(0,i.kt)("li",{parentName:"ul"},"Logging functions. All logging functions can both be used as normal functions (similar to the ",(0,i.kt)("inlineCode",{parentName:"li"},"console.log")," family, but only accepts one parameter) or template literal tags.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"info"),": prints information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"warn"),": prints a warning that should be payed attention to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error"),": prints an error (not necessarily halting the program) that signals significant problems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"success"),": prints a success message.")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"A word on the ",(0,i.kt)("inlineCode",{parentName:"h5"},"error")," formatter")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Beware that an ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," message, even when it doesn't hang the program, is likely going to cause confusion. When users inspect logs and find an ",(0,i.kt)("inlineCode",{parentName:"p"},"[ERROR]"),", even when the build succeeds, they will assume something is going wrong. Use it sparingly."),(0,i.kt)("p",{parentName:"div"},"Docusaurus only uses ",(0,i.kt)("inlineCode",{parentName:"p"},"logger.error")," when printing messages immediately before throwing an error, or when user has set the reporting severity of ",(0,i.kt)("inlineCode",{parentName:"p"},"onBrokenLink"),", etc. to ",(0,i.kt)("inlineCode",{parentName:"p"},'"error"'),"."),(0,i.kt)("p",{parentName:"div"},"In addition, ",(0,i.kt)("inlineCode",{parentName:"p"},"warn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," will color the ",(0,i.kt)("strong",{parentName:"p"},"entire")," message for better attention. If you are printing large blocks of help text about an error, better use ",(0,i.kt)("inlineCode",{parentName:"p"},"logger.info"),"."))),(0,i.kt)("h3",{id:"using-the-template-literal-tag"},"Using the template literal tag"),(0,i.kt)("p",null,"The template literal tag evaluates the template and expressions embedded. ",(0,i.kt)("inlineCode",{parentName:"p"},"interpolate")," returns a new string, while other logging functions prints it. Below is a typical usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"logger.info`Hello name=${name}! You have number=${money} dollars. Here are the ${\n  items.length > 1 ? 'items' : 'item'\n} on the shelf: ${items}\nTo buy anything, enter code=${'buy x'} where code=${'x'} is the item's name; to quit, press code=${'Ctrl + C'}.`;\n")),(0,i.kt)("p",null,"An embedded expression is optionally preceded by a flag in the form ",(0,i.kt)("inlineCode",{parentName:"p"},"[a-z]+=")," (a few lowercase letters, followed by an equals sign, directly preceding the embedded expression). If the expression is not preceded by any flag, it's printed out as-is. Otherwise, it's formatted with one of the formatters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path="),": ",(0,i.kt)("inlineCode",{parentName:"li"},"path")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url="),": ",(0,i.kt)("inlineCode",{parentName:"li"},"url")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name="),": ",(0,i.kt)("inlineCode",{parentName:"li"},"name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code="),": ",(0,i.kt)("inlineCode",{parentName:"li"},"code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subdue="),": ",(0,i.kt)("inlineCode",{parentName:"li"},"subdue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number="),": ",(0,i.kt)("inlineCode",{parentName:"li"},"num"))),(0,i.kt)("p",null,"If the expression is an array, it's formatted by ",(0,i.kt)("inlineCode",{parentName:"p"},"`\\n- ${array.join('\\n- ')}\\n`")," (note it automatically gets a leading line end). Each member is formatted by itself and the bullet is not formatted. So you would see the above message printed as:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"demo",src:n(92543).Z,width:"1234",height:"150"})))}c.isMDXComponent=!0},92543:function(e,t,n){t.Z=n.p+"assets/images/demo-0e309a1a631b58ebe6d5f2d8014351e8.png"}}]);