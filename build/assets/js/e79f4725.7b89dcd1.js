"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[4411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={id:"plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},o="MDX Plugins",s={unversionedId:"guides/markdown-features/plugins",id:"guides/markdown-features/plugins",title:"MDX Plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",source:"@site/docs/guides/markdown-features/markdown-features-plugins.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/plugins",permalink:"/docs/markdown-features/plugins",draft:!1,tags:[],version:"current",frontMatter:{id:"plugins",description:"Using MDX plugins to expand Docusaurus Markdown functionalities",slug:"/markdown-features/plugins"},sidebar:"docs",previous:{title:"Markdown links",permalink:"/docs/markdown-features/links"},next:{title:"Math Equations",permalink:"/docs/markdown-features/math-equations"}},l={},u=[{value:"Default plugins",id:"default-plugins",level:2},{value:"Installing plugins",id:"installing-plugins",level:2},{value:"Configuring plugins",id:"configuring-plugins",level:2},{value:"Creating new rehype/remark plugins",id:"creating-new-rehyperemark-plugins",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mdx-plugins"},"MDX Plugins"),(0,r.kt)("p",null,"Sometimes, you may want to extend or tweak your Markdown syntax. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How do I embed youtube videos using the image syntax (",(0,r.kt)("inlineCode",{parentName:"li"},"![](https://youtu.be/yKNxeF4KMsY)"),")?"),(0,r.kt)("li",{parentName:"ul"},"How do I style links that are on their own lines differently, e.g., as a social card?"),(0,r.kt)("li",{parentName:"ul"},"How do I make every page start with a copyright notice?")),(0,r.kt)("p",null,"And the answer is: create an MDX plugin! MDX has a built-in ",(0,r.kt)("a",{parentName:"p",href:"https://mdxjs.com/advanced/plugins/"},"plugin system")," that can be used to customize how the Markdown files will be parsed and transformed to JSX. There are three typical use-cases of MDX plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using existing ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins"},"remark plugins")," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins"},"rehype plugins"),";"),(0,r.kt)("li",{parentName:"ul"},"Creating remark/rehype plugins to transform the elements generated by existing MDX syntax;"),(0,r.kt)("li",{parentName:"ul"},"Creating remark/rehype plugins to introduce new syntaxes to MDX.")),(0,r.kt)("p",null,"If you play with the ",(0,r.kt)("a",{parentName:"p",href:"https://mdx-git-renovate-babel-monorepo-mdx.vercel.app/playground"},"MDX playground"),", you would notice that the MDX transpilation has two intermediate steps: Markdown AST (MDAST), and Hypertext AST (HAST), before arriving at the final JSX output. MDX plugins also come in two forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/remarkjs/remark/"},"Remark")),": processes the Markdown AST."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/rehypejs/rehype/"},"Rehype")),": processes the Hypertext AST.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/markdown-features/admonitions"},"admonition")," syntax that we offer is also generated by a Remark plugin, and you could do the same for your own use case.")),(0,r.kt)("h2",{id:"default-plugins"},"Default plugins"),(0,r.kt)("p",null,"Docusaurus injects ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-mdx-loader/src/remark"},"some default Remark plugins")," during Markdown processing. These plugins would:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate the table of contents;"),(0,r.kt)("li",{parentName:"ul"},"Add anchor links to each heading;"),(0,r.kt)("li",{parentName:"ul"},"Transform images and links to ",(0,r.kt)("inlineCode",{parentName:"li"},"require()")," calls."),(0,r.kt)("li",{parentName:"ul"},"\u2026")),(0,r.kt)("p",null,"These are all typical use-cases of Remark plugins, which can also be a source of inspiration if you want to implement your own plugin."),(0,r.kt)("h2",{id:"installing-plugins"},"Installing plugins"),(0,r.kt)("p",null,"An MDX plugin is usually an npm package, so you install them like other npm packages using npm. Take the ",(0,r.kt)("a",{parentName:"p",href:"/docs/markdown-features/math-equations"},"math plugins")," as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save remark-math@3 rehype-katex@4\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There's recently a trend in the Remark/Rehype ecosystem to migrate to ES Modules, a new JavaScript module system, which Docusaurus doesn't support yet. Please make sure your installed plugin version is CommonJS-compatible before we officially support ESM. Alternatively, you can read about using dynamic ",(0,r.kt)("inlineCode",{parentName:"p"},"import()")," as a workaround in the tutorial of installing ",(0,r.kt)("a",{parentName:"p",href:"/docs/markdown-features/math-equations#upgrading-rehype-katex-beyond-recommended-version"},(0,r.kt)("inlineCode",{parentName:"a"},"rehype-katex")),".")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How are ",(0,r.kt)("code",null,"remark-math")," and ",(0,r.kt)("code",null,"rehype-katex")," different?"),(0,r.kt)("p",null,"In case you are wondering how Remark and Rehype are different, here is a good example. ",(0,r.kt)("inlineCode",{parentName:"p"},"remark-math")," operates on the Markdown AST, where it sees text like ",(0,r.kt)("inlineCode",{parentName:"p"},"$...$"),", and all it does is transform that to the JSX ",(0,r.kt)("inlineCode",{parentName:"p"},'<span class="math math-inline">...</span>')," without doing too much with the content. This decouples the extraction of math formulae from their rendering, which means you can swap $\\KaTeX$ out with other math renderers, like MathJax (with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark-math/tree/main/packages/rehype-mathjax"},(0,r.kt)("inlineCode",{parentName:"a"},"rehype-mathjax")),"), just by replacing the Rehype plugin."),(0,r.kt)("p",null,"Next, the ",(0,r.kt)("inlineCode",{parentName:"p"},"rehype-katex")," operates on the Hypertext AST where everything has been converted to HTML-like tags already. It traverses all the elements with ",(0,r.kt)("inlineCode",{parentName:"p"},"math")," class and uses $\\KaTeX$ to parse and render the content to actual HTML.")),(0,r.kt)("p",null,"Next, add them to the plugin options through plugin or preset config in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"// highlight-start\nconst math = require('remark-math');\nconst katex = require('rehype-katex');\n// highlight-end\n\nmodule.exports = {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          remarkPlugins: [math],\n          rehypePlugins: [katex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("h2",{id:"configuring-plugins"},"Configuring plugins"),(0,r.kt)("p",null,"Some plugins can be configured and accept their own options. In that case, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"[plugin, pluginOptions]")," syntax, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          remarkPlugins: [math],\n          rehypePlugins: [\n            // highlight-next-line\n            [katex, {strict: false}],\n          ],\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",null,"You should check your plugin's documentation for the options it supports."),(0,r.kt)("h2",{id:"creating-new-rehyperemark-plugins"},"Creating new rehype/remark plugins"),(0,r.kt)("p",null,"If there isn't an existing package that satisfies your customization need, you can create your own MDX plugin."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The writeup below is ",(0,r.kt)("strong",{parentName:"p"},"not")," meant to be a comprehensive guide to creating a plugin, but just an illustration of how to make it work with Docusaurus. Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#creating-plugins"},"Remark")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#creating-plugins"},"Rehype")," documentation for a more in-depth explanation of how they work.")),(0,r.kt)("p",null,"For example, let's make a plugin that visits every ",(0,r.kt)("inlineCode",{parentName:"p"},"h2")," heading and adds a ",(0,r.kt)("inlineCode",{parentName:"p"},"Section X.")," prefix. First, create your plugin source file anywhere\u2014you can even publish it as a separate npm package and install it like explained above. We would put ours at ",(0,r.kt)("inlineCode",{parentName:"p"},"src/remark/section-prefix.js"),". A remark/rehype plugin is just a function that receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"transformer")," that operates on the AST."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'"src/remark/section-prefix.js"','"src/remark/section-prefix.js"':!0},"const visit = require('unist-util-visit');\n\nconst plugin = (options) => {\n  const transformer = async (ast) => {\n    let number = 1;\n    visit(ast, 'heading', (node) => {\n      if (node.depth === 2 && node.children.length > 0) {\n        node.children.unshift({\n          type: 'text',\n          value: `Section ${number}. `,\n        });\n        number++;\n      }\n    });\n  };\n  return transformer;\n};\n\nmodule.exports = plugin;\n")),(0,r.kt)("p",null,"You can now import your plugin in ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," and use it just like an installed plugin!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"// highlight-next-line\nconst sectionPrefix = require('./src/remark/section-prefix');\n\nmodule.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          remarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"transformer")," has a second parameter ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vfile/vfile"},(0,r.kt)("inlineCode",{parentName:"a"},"vfile"))," which is useful if you need to access the current Markdown file's path."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const plugin = (options) => {\n  const transformer = async (ast, vfile) => {\n    ast.children.unshift({\n      type: 'text',\n      value: `The current file path is ${vfile.path}`,\n    });\n  };\n  return transformer;\n};\n")),(0,r.kt)("p",{parentName:"admonition"},"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"transformImage")," plugin uses this parameter, for example, to transform relative image references to ",(0,r.kt)("inlineCode",{parentName:"p"},"require()")," calls.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The default plugins of Docusaurus would operate before the custom remark plugins, and that means the images or links have been converted to JSX with ",(0,r.kt)("inlineCode",{parentName:"p"},"require()")," calls already. For example, in the example above, the table of contents generated is still the same even when all ",(0,r.kt)("inlineCode",{parentName:"p"},"h2")," headings are now prefixed by ",(0,r.kt)("inlineCode",{parentName:"p"},"Section X."),", because the TOC-generating plugin is called before our custom plugin. If you need to process the MDAST before the default plugins do, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeDefaultRemarkPlugins")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeDefaultRehypePlugins"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          beforeDefaultRemarkPlugins: [sectionPrefix],\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",{parentName:"admonition"},"This would make the table of contents generated contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"Section X.")," prefix as well.")))}m.isMDXComponent=!0}}]);