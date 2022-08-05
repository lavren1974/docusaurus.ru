"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[3485],{45687:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(67294),i=t(86010);const o="browserWindow_my1Q",l="browserWindowHeader_jXSR",r="buttons_uHc7",s="browserWindowAddressBar_Pd8y",p="dot_giz1",m="browserWindowMenuIcon_Vhuh",c="bar_rrRL",u="browserWindowBody_Idgs";function d(e){let{children:n,minHeight:t,url:d="http://localhost:3000"}=e;return a.createElement("div",{className:o,style:{minHeight:t}},a.createElement("div",{className:l},a.createElement("div",{className:r},a.createElement("span",{className:p,style:{background:"#f25f58"}}),a.createElement("span",{className:p,style:{background:"#fbbe3c"}}),a.createElement("span",{className:p,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,i.Z)(s,"text--truncate")},d),a.createElement("div",{className:m},a.createElement("div",null,a.createElement("span",{className:c}),a.createElement("span",{className:c}),a.createElement("span",{className:c})))),a.createElement("div",{className:u},n))}},14526:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),i=t(73902);function o(e){return a.createElement(i.Z,e)}},44276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=t(87462),i=(t(67294),t(3905)),o=t(45687),l=t(14526);const r={id:"code-blocks",title:"Code blocks",description:"Handling code blocks in Docusaurus Markdown",slug:"/markdown-features/code-blocks"},s=void 0,p={unversionedId:"guides/markdown-features/code-blocks",id:"guides/markdown-features/code-blocks",title:"Code blocks",description:"Handling code blocks in Docusaurus Markdown",source:"@site/docs/guides/markdown-features/markdown-features-code-blocks.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/code-blocks",permalink:"/docs/markdown-features/code-blocks",draft:!1,tags:[],version:"current",frontMatter:{id:"code-blocks",title:"Code blocks",description:"Handling code blocks in Docusaurus Markdown",slug:"/markdown-features/code-blocks"},sidebar:"docs",previous:{title:"Tabs",permalink:"/docs/markdown-features/tabs"},next:{title:"Admonitions",permalink:"/docs/markdown-features/admonitions"}},m={},c=[{value:"Code title",id:"code-title",level:2},{value:"Syntax highlighting",id:"syntax-highlighting",level:2},{value:"Theming",id:"theming",level:3},{value:"Supported Languages",id:"supported-languages",level:3},{value:"Line highlighting",id:"line-highlighting",level:2},{value:"Highlighting with comments",id:"highlighting-with-comments",level:3},{value:"Highlighting with metadata string",id:"highlighting-with-metadata-string",level:3},{value:"Custom magic comments",id:"custom-magic-comments",level:3},{value:"Line numbering",id:"line-numbering",level:2},{value:"Interactive code editor",id:"interactive-code-editor",level:2},{value:"Imports",id:"imports",level:3},{value:"Using JSX markup in code blocks",id:"using-jsx-markup",level:2},{value:"Multi-language support code blocks",id:"multi-language-support-code-blocks",level:2},{value:"Docusaurus npm2yarn remark plugin",id:"npm2yarn-remark-plugin",level:3},{value:"Usage in JSX",id:"usage-in-jsx",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},d=u("Tabs"),h=u("TabItem"),g={toc:c};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Code blocks within documentation are super-powered \ud83d\udcaa."),(0,i.kt)("h2",{id:"code-title"},"Code title"),(0,i.kt)("p",null,"You can add a title to the code block by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," key after the language (leave a space between them)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},'```jsx title="/src/components/HelloCodeTitle.js"\nfunction HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n')),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n"))),(0,i.kt)("h2",{id:"syntax-highlighting"},"Syntax highlighting"),(0,i.kt)("p",null,"Code blocks are text blocks wrapped around by strings of 3 backticks. You may check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mdx-js/specification"},"this reference")," for the specifications of MDX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"```js\nconsole.log('Every repo must come with a mascot.');\n```\n")),(0,i.kt)("p",null,"Use the matching language meta string for your code block, and Docusaurus will pick up syntax highlighting automatically, powered by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer"},"Prism React Renderer"),"."),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"console.log('Every repo must come with a mascot.');\n"))),(0,i.kt)("h3",{id:"theming"},"Theming"),(0,i.kt)("p",null,"By default, the Prism ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer#theming"},"syntax highlighting theme")," we use is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/palenight.js"},"Palenight"),". You can change this to another theme by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"prism")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig")," in your docusaurus.config.js."),(0,i.kt)("p",null,"For example, if you prefer to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dracula")," highlighting theme:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    prism: {\n      // highlight-next-line\n      theme: require('prism-react-renderer/themes/dracula'),\n    },\n  },\n};\n")),(0,i.kt)("p",null,"Because a Prism theme is just a JS object, you can also write your own theme if you are not satisfied with the default. Docusaurus enhances the ",(0,i.kt)("inlineCode",{parentName:"p"},"github")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vsDark")," themes to provide richer highlight, and you can check our implementations for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/blob/main/website/src/utils/prismLight.mjs"},"light")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/blob/main/website/src/utils/prismDark.mjs"},"dark")," code block themes."),(0,i.kt)("h3",{id:"supported-languages"},"Supported Languages"),(0,i.kt)("p",null,"By default, Docusaurus comes with a subset of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"},"commonly used languages"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Some popular languages like Java, C#, or PHP are not enabled by default.")),(0,i.kt)("p",null,"To add syntax highlighting for any of the other ",(0,i.kt)("a",{parentName:"p",href:"https://prismjs.com/#supported-languages"},"Prism-supported languages"),", define it in an array of additional languages."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each additional language has to be a valid Prism component name. For example, Prism would map the ",(0,i.kt)("em",{parentName:"p"},"language")," ",(0,i.kt)("inlineCode",{parentName:"p"},"cs")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"csharp"),", but only ",(0,i.kt)("inlineCode",{parentName:"p"},"prism-csharp.js")," exists as a ",(0,i.kt)("em",{parentName:"p"},"component"),", so you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalLanguages: ['csharp']"),". You can look into ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/prismjs/components")," to find all components (languages) available.")),(0,i.kt)("p",null,"For example, if you want to add highlighting for the PowerShell language:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    prism: {\n      // highlight-next-line\n      additionalLanguages: ['powershell'],\n    },\n    // ...\n  },\n};\n")),(0,i.kt)("p",null,"After adding ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalLanguages"),", restart Docusaurus."),(0,i.kt)("p",null,"If you want to add highlighting for languages not yet supported by Prism, you can swizzle ",(0,i.kt)("inlineCode",{parentName:"p"},"prism-include-languages"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm run swizzle @docusaurus/theme-classic prism-include-languages\n")),(0,i.kt)("p",null,"It will produce ",(0,i.kt)("inlineCode",{parentName:"p"},"prism-include-languages.js")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"src/theme")," folder. You can add highlighting support for custom languages by editing ",(0,i.kt)("inlineCode",{parentName:"p"},"prism-include-languages.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/theme/prism-include-languages.js"',title:'"src/theme/prism-include-languages.js"'},"const prismIncludeLanguages = (Prism) => {\n  // ...\n\n  additionalLanguages.forEach((lang) => {\n    require(`prismjs/components/prism-${lang}`);\n  });\n\n  // highlight-next-line\n  require('/path/to/your/prism-language-definition');\n\n  // ...\n};\n")),(0,i.kt)("p",null,"You can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PrismJS/prism/tree/master/components"},"Prism's official language definitions")," when you are writing your own language definitions."),(0,i.kt)("h2",{id:"line-highlighting"},"Line highlighting"),(0,i.kt)("h3",{id:"highlighting-with-comments"},"Highlighting with comments"),(0,i.kt)("p",null,"You can use comments with ",(0,i.kt)("inlineCode",{parentName:"p"},"highlight-next-line"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"highlight-start"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"highlight-end")," to select which lines are highlighted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"```js\nfunction HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return 'This text is highlighted!';\n  }\n\n  return 'Nothing highlighted';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return 'This range is highlighted!';\n  }\n  // highlight-end\n\n  return 'Nothing highlighted';\n}\n```\n")),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return 'This text is highlighted!';\n  }\n\n  return 'Nothing highlighted';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return 'This range is highlighted!';\n  }\n  // highlight-end\n\n  return 'Nothing highlighted';\n}\n"))),(0,i.kt)("p",null,"Supported commenting syntax:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Style"),(0,i.kt)("th",{parentName:"tr",align:null},"Syntax"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"C-style"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/* ... */")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"// ..."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JSX-style"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{/* ... */}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bash-style"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"# ..."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTML-style"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\x3c!-- ... --\x3e"))))),(0,i.kt)("p",null,"We will do our best to infer which set of comment styles to use based on the language, and default to allowing ",(0,i.kt)("em",{parentName:"p"},"all")," comment styles. If there's a comment style that is not currently supported, we are open to adding them! Pull requests welcome. Note that different comment styles have no semantic difference, only their content does."),(0,i.kt)("p",null,"You can set your own background color for highlighted code line in your ",(0,i.kt)("inlineCode",{parentName:"p"},"src/css/custom.css")," which will better fit to your selected syntax highlighting theme. The color given below works for the default highlighting theme (Palenight), so if you are using another theme, you will have to tweak the color accordingly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/src/css/custom.css"',title:'"/src/css/custom.css"'},":root {\n  --docusaurus-highlighted-code-line-bg: rgb(72, 77, 91);\n}\n\n/* If you have a different syntax highlighting theme for dark mode. */\n[data-theme='dark'] {\n  /* Color which works with dark mode syntax highlighting theme */\n  --docusaurus-highlighted-code-line-bg: rgb(100, 100, 100);\n}\n")),(0,i.kt)("p",null,"If you also need to style the highlighted code line in some other way, you can target on ",(0,i.kt)("inlineCode",{parentName:"p"},"theme-code-block-highlighted-line")," CSS class."),(0,i.kt)("h3",{id:"highlighting-with-metadata-string"},"Highlighting with metadata string"),(0,i.kt)("p",null,"You can also specify highlighted line ranges within the language meta string (leave a space after the language). To highlight multiple lines, separate the line numbers by commas or use the range syntax to select a chunk of lines. This feature uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"parse-number-range")," library and you can find ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/parse-numeric-range"},"more syntax")," on their project details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"```jsx {1,4-6,11}\nimport React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n```\n")),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11}","{1,4-6,11}":!0},"import React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n"))),(0,i.kt)("admonition",{title:"prefer comments",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Prefer highlighting with comments where you can. By inlining highlight in the code, you don't have to manually count the lines if your code block becomes long. If you add/remove lines, you also don't have to offset your line ranges."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"- ```jsx {3}\n+ ```jsx {4}\n  function HighlightSomeText(highlight) {\n    if (highlight) {\n+     console.log('Highlighted text found');\n      return 'This text is highlighted!';\n    }\n\n    return 'Nothing highlighted';\n  }\n  ```\n")),(0,i.kt)("p",{parentName:"admonition"},"Below, we will introduce how the magic comment system can be extended to define custom directives and their functionalities. The magic comments would only be parsed if a highlight metastring is not present.")),(0,i.kt)("h3",{id:"custom-magic-comments"},"Custom magic comments"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"// highlight-next-line")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"// highlight-start"),' etc. are called "magic comments", because they will be parsed and removed, and their purposes are to add metadata to the next line, or the section that the pair of start- and end-comments enclose.'),(0,i.kt)("p",null,"You can declare custom magic comments through theme config. For example, you can register another magic comment that adds a ",(0,i.kt)("inlineCode",{parentName:"p"},"code-block-error-line")," class name:"),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(h,{value:"docusaurus.config.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  themeConfig: {\n    prism: {\n      magicComments: [\n        // Remember to extend the default highlight class name as well!\n        {\n          className: 'theme-code-block-highlighted-line',\n          line: 'highlight-next-line',\n          block: {start: 'highlight-start', end: 'highlight-end'},\n        },\n        // highlight-start\n        {\n          className: 'code-block-error-line',\n          line: 'This will error',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"))),(0,i.kt)(h,{value:"src/css/custom.css",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".code-block-error-line {\n  background-color: #ff000020;\n  display: block;\n  margin: 0 calc(-1 * var(--ifm-pre-padding));\n  padding: 0 var(--ifm-pre-padding);\n  border-left: 3px solid #ff000080;\n}\n"))),(0,i.kt)(h,{value:"myDoc.md",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"In JavaScript, trying to access properties on `null` will error.\n\n```js\nconst name = null;\n// This will error\nconsole.log(name.toUpperCase());\n// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')\n```\n")))),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)("p",null,"In JavaScript, trying to access properties on ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," will error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const name = null;\n// This will error\nconsole.log(name.toUpperCase());\n// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')\n"))),(0,i.kt)("p",null,"If you use number ranges in metastring (the ",(0,i.kt)("inlineCode",{parentName:"p"},"{1,3-4}")," syntax), Docusaurus will apply the ",(0,i.kt)("strong",{parentName:"p"},"first ",(0,i.kt)("inlineCode",{parentName:"strong"},"magicComments")," entry"),"'s class name. This, by default, is ",(0,i.kt)("inlineCode",{parentName:"p"},"theme-code-block-highlighted-line"),", but if you change the ",(0,i.kt)("inlineCode",{parentName:"p"},"magicComments")," config and use a different entry as the first one, the meaning of the metastring range will change as well."),(0,i.kt)("p",null,"You can disable the default line highlighting comments with ",(0,i.kt)("inlineCode",{parentName:"p"},"magicComments: []"),". If there's no magic comment config, but Docusaurus encounters a code block containing a metastring range, it will error because there will be no class name to apply\u2014the highlighting class name, after all, is just a magic comment entry."),(0,i.kt)("p",null,"Every magic comment entry will contain three keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," (required), ",(0,i.kt)("inlineCode",{parentName:"p"},"line"),", which applies to the directly next line, or ",(0,i.kt)("inlineCode",{parentName:"p"},"block")," (containing ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end"),"), which applies to the entire block enclosed by the two comments."),(0,i.kt)("p",null,"Using CSS to target the class can already do a lot, but you can unlock the full potential of this feature through ",(0,i.kt)("a",{parentName:"p",href:"/docs/swizzling"},"swizzling"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm run swizzle @docusaurus/theme-classic CodeBlock/Line\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Line")," component will receive the list of class names, based on which you can conditionally render different markup."),(0,i.kt)("h2",{id:"line-numbering"},"Line numbering"),(0,i.kt)("p",null,"You can enable line numbering for your code block by using ",(0,i.kt)("inlineCode",{parentName:"p"},"showLineNumbers")," key within the language meta string (don't forget to add space directly before the key)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"```jsx {1,4-6,11} showLineNumbers\nimport React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n```\n")),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11} showLineNumbers","{1,4-6,11}":!0,showLineNumbers:!0},"import React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n"))),(0,i.kt)("h2",{id:"interactive-code-editor"},"Interactive code editor"),(0,i.kt)("p",null,"(Powered by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-live"},"React Live"),")"),(0,i.kt)("p",null,"You can create an interactive coding editor with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock")," plugin. First, add the plugin to your package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/theme-live-codeblock\n")),(0,i.kt)("p",null,"You will also need to add the plugin to your ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"module.exports = {\n  // ...\n  themes: ['@docusaurus/theme-live-codeblock'],\n  // ...\n};\n")),(0,i.kt)("p",null,"To use the plugin, create a code block with ",(0,i.kt)("inlineCode",{parentName:"p"},"live")," attached to the language meta string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"```jsx live\nfunction Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n```\n")),(0,i.kt)("p",null,"The code block will be rendered as an interactive editor. Changes to the code will reflect on the result panel live."),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n"))),(0,i.kt)("h3",{id:"imports"},"Imports"),(0,i.kt)("admonition",{title:"react-live and imports",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"It is not possible to import components directly from the react-live code editor, you have to define available imports upfront.")),(0,i.kt)("p",null,"By default, all React imports are available. If you need more imports available, swizzle the react-live scope:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm run swizzle @docusaurus/theme-live-codeblock ReactLiveScope\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/theme/ReactLiveScope/index.js"',title:'"src/theme/ReactLiveScope/index.js"'},"import React from 'react';\n\n// highlight-start\nconst ButtonExample = (props) => (\n  <button\n    {...props}\n    style={{\n      backgroundColor: 'white',\n      color: 'black',\n      border: 'solid red',\n      borderRadius: 20,\n      padding: 10,\n      cursor: 'pointer',\n      ...props.style,\n    }}\n  />\n);\n// highlight-end\n\n// Add react-live imports you need here\nconst ReactLiveScope = {\n  React,\n  ...React,\n  // highlight-next-line\n  ButtonExample,\n};\n\nexport default ReactLiveScope;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonExample")," component is now available to use:"),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function MyPlayground(props) {\n  return (\n    <div>\n      <ButtonExample onClick={() => alert('hey!')}>Click me</ButtonExample>\n    </div>\n  );\n}\n"))),(0,i.kt)("h2",{id:"using-jsx-markup"},"Using JSX markup in code blocks"),(0,i.kt)("p",null,"Code block in Markdown always preserves its content as plain text, meaning you can't do something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'type EditUrlFunction = (params: {\n  // This doesn\'t turn into a link (for good reason!)\n  version: <a href="/docs/versioning">Version</a>;\n  versionDocsDirPath: string;\n  docPath: string;\n  permalink: string;\n  locale: string;\n}) => string | undefined;\n')),(0,i.kt)("p",null,"If you want to embed HTML markup such as anchor links or bold type, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"<pre>")," tag, ",(0,i.kt)("inlineCode",{parentName:"p"},"<code>")," tag, or ",(0,i.kt)("inlineCode",{parentName:"p"},"<CodeBlock>")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<pre>\n  <b>Input: </b>1 2 3 4{'\\n'}\n  <b>Output: </b>\"366300745\"{'\\n'}\n</pre>\n")),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)("pre",null,(0,i.kt)("b",null,"Input: "),"1 2 3 4","\n",(0,i.kt)("b",null,"Output: "),'"366300745"',"\n")),(0,i.kt)("admonition",{title:"MDX is whitespace insensitive",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"MDX is in line with JSX behavior: line break characters, even when inside ",(0,i.kt)("inlineCode",{parentName:"p"},"<pre>"),", are turned into spaces. You have to explicitly write the new line character for it to be printed out.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Syntax highlighting only works on plain strings. Docusaurus will not attempt to parse code block content containing JSX children.")),(0,i.kt)("h2",{id:"multi-language-support-code-blocks"},"Multi-language support code blocks"),(0,i.kt)("p",null,"With MDX, you can easily create interactive components within your documentation, for example, to display code in multiple programming languages and switch between them using a tabs component."),(0,i.kt)("p",null,"Instead of implementing a dedicated component for multi-language support code blocks, we've implemented a general-purpose ",(0,i.kt)("a",{parentName:"p",href:"/docs/markdown-features/tabs"},(0,i.kt)("inlineCode",{parentName:"a"},"<Tabs>"))," component in the classic theme so that you can use it for other non-code scenarios as well."),(0,i.kt)("p",null,"The following example is how you can have multi-language code tabs in your docs. Note that the empty lines above and below each language block are ",(0,i.kt)("strong",{parentName:"p"},"intentional"),". This is a ",(0,i.kt)("a",{parentName:"p",href:"/docs/markdown-features/react#markdown-and-jsx-interoperability"},"current limitation of MDX"),": you have to leave empty lines around Markdown syntax for the MDX parser to know that it's Markdown syntax and not JSX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n<TabItem value="js" label="JavaScript">\n\n```js\nfunction helloWorld() {\n  console.log(\'Hello, world!\');\n}\n```\n\n</TabItem>\n<TabItem value="py" label="Python">\n\n```py\ndef hello_world():\n  print("Hello, world!")\n```\n\n</TabItem>\n<TabItem value="java" label="Java">\n\n```java\nclass HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n```\n\n</TabItem>\n</Tabs>\n')),(0,i.kt)("p",null,"And you will get the following:"),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,i.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'def hello_world():\n  print("Hello, world!")\n'))),(0,i.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n'))))),(0,i.kt)("p",null,"If you have multiple of these multi-language code tabs, and you want to sync the selection across the tab instances, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/markdown-features/tabs#syncing-tab-choices"},"Syncing tab choices section"),"."),(0,i.kt)("h3",{id:"npm2yarn-remark-plugin"},"Docusaurus npm2yarn remark plugin"),(0,i.kt)("p",null,"Displaying CLI commands in both npm and Yarn is a very common need, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install @docusaurus/remark-plugin-npm2yarn\n")),(0,i.kt)("p",null,"Docusaurus provides such a utility out of the box, freeing you from using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tabs")," component every time. To enable this feature, first install the ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/remark-plugin-npm2yarn")," package as above, and then in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),", for the plugins where you need this feature (doc, blog, pages, etc.), register it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"remarkPlugins")," option. (See ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-content-docs#ex-config"},"Docs configuration")," for more details on configuration format)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          remarkPlugins: [\n            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],\n          ],\n          // highlight-end\n        },\n        pages: {\n          // highlight-next-line\n          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],\n        },\n        blog: {\n          // ...\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("p",null,"And then use it by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm2yarn")," key to the code block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"```bash npm2yarn\nnpm install @docusaurus/remark-plugin-npm2yarn\n```\n")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"{sync: true}")," option would make all tab choices synced. Because the choice is stored under the same namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"npm2yarn"),", different ",(0,i.kt)("inlineCode",{parentName:"p"},"npm2yarn")," plugin instances would also sync their choices."),(0,i.kt)("h2",{id:"usage-in-jsx"},"Usage in JSX"),(0,i.kt)("p",null,"Outside of Markdown, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," component to get the same output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import CodeBlock from \'@theme/CodeBlock\';\n\nexport default function MyReactPage() {\n  return (\n    <div>\n      {/* highlight-start */}\n      <CodeBlock\n        language="jsx"\n        title="/src/components/HelloCodeTitle.js"\n        showLineNumbers>\n        {`function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}`}\n      </CodeBlock>\n      {/* highlight-end */}\n    </div>\n  );\n}\n')),(0,i.kt)(o.Z,{mdxType:"BrowserWindow"},(0,i.kt)(l.Z,{language:"jsx",title:"/src/components/HelloCodeTitle.js",showLineNumbers:!0,mdxType:"CodeBlock"},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}")),(0,i.kt)("p",null,"The props accepted are ",(0,i.kt)("inlineCode",{parentName:"p"},"language"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"showLineNumbers"),", in the same way as you write Markdown code blocks."),(0,i.kt)("p",null,"Although discouraged, you can also pass in a ",(0,i.kt)("inlineCode",{parentName:"p"},"metastring")," prop like ",(0,i.kt)("inlineCode",{parentName:"p"},"metastring='{1-2} title=\"/src/components/HelloCodeTitle.js\" showLineNumbers'"),", which is how Markdown code blocks are handled under the hood. However, we recommend you ",(0,i.kt)("a",{parentName:"p",href:"#highlighting-with-comments"},"use comments for highlighting lines"),"."),(0,i.kt)("p",null,"As ",(0,i.kt)("a",{parentName:"p",href:"#using-jsx-markup"},"previously stated"),", syntax highlighting is only applied when the children is a simple string."))}k.isMDXComponent=!0}}]);