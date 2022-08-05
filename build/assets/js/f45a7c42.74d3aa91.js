"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=r,g=c["".concat(l,".").concat(p)]||c[p]||m[p]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),i=n(86010),o=n(51048),s=n(33609),l=n(1943),d=n(72957);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n;const{lazy:o,block:c,defaultValue:p,values:g,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===p?p:null!=(t=null!=p?p:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==N&&!y.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.U)(),[x,C]=(0,r.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,d.o5)();if(null!=h){const e=v[h];null!=e&&e!==x&&y.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),a=y[n].value;a!==x&&(I(t),C(a),null!=h&&w(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},b)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},5629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(34259),o=n(18679);const s={slug:"/sidebar/autogenerated"},l="Autogenerated",d={unversionedId:"guides/docs/sidebar/autogenerated",id:"guides/docs/sidebar/autogenerated",title:"Autogenerated",description:"Docusaurus can create a sidebar automatically from your filesystem structure: each folder creates a sidebar category, and each file creates a doc link.",source:"@site/docs/guides/docs/sidebar/autogenerated.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/autogenerated",permalink:"/docs/sidebar/autogenerated",draft:!1,tags:[],version:"current",frontMatter:{slug:"/sidebar/autogenerated"},sidebar:"docs",previous:{title:"Sidebar items",permalink:"/docs/sidebar/items"},next:{title:"Using multiple sidebars",permalink:"/docs/sidebar/multiple-sidebars"}},u={},m=[{value:"Category index convention",id:"category-index-convention",level:2},{value:"Autogenerated sidebar metadata",id:"autogenerated-sidebar-metadata",level:2},{value:"Doc item metadata",id:"doc-item-metadata",level:3},{value:"Category item metadata",id:"category-item-metadata",level:3},{value:"Using number prefixes",id:"using-number-prefixes",level:2},{value:"Customize the sidebar items generator",id:"customize-the-sidebar-items-generator",level:2}],c={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"autogenerated"},"Autogenerated"),(0,r.kt)("p",null,"Docusaurus can ",(0,r.kt)("strong",{parentName:"p"},"create a sidebar automatically")," from your ",(0,r.kt)("strong",{parentName:"p"},"filesystem structure"),": each folder creates a sidebar category, and each file creates a doc link."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type SidebarItemAutogenerated = {\n  type: 'autogenerated';\n  dirName: string; // Source folder to generate the sidebar slice from (relative to docs)\n};\n")),(0,r.kt)("p",null,"Docusaurus can generate a full sidebar from your docs folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  myAutogeneratedSidebar: [\n    // highlight-start\n    {\n      type: 'autogenerated',\n      dirName: '.', // '.' means the current docs folder\n    },\n    // highlight-end\n  ],\n};\n")),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"autogenerated")," item is converted by Docusaurus to a ",(0,r.kt)("strong",{parentName:"p"},"sidebar slice")," (also discussed in ",(0,r.kt)("a",{parentName:"p",href:"/docs/sidebar/items#category-shorthand"},"category shorthands"),"): a list of items of type ",(0,r.kt)("inlineCode",{parentName:"p"},"doc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),", so you can splice ",(0,r.kt)("strong",{parentName:"p"},"multiple ",(0,r.kt)("inlineCode",{parentName:"strong"},"autogenerated")," items")," from multiple directories, interleaving them with regular sidebar items, in one sidebar level."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"A real-world example"),"Consider this file structure:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docs\n\u251c\u2500\u2500 api\n\u2502   \u251c\u2500\u2500 product1-api\n\u2502   \u2502   \u2514\u2500\u2500 api.md\n\u2502   \u2514\u2500\u2500 product2-api\n\u2502       \u251c\u2500\u2500 basic-api.md\n\u2502       \u2514\u2500\u2500 pro-api.md\n\u251c\u2500\u2500 intro.md\n\u2514\u2500\u2500 tutorials\n    \u251c\u2500\u2500 advanced\n    \u2502   \u251c\u2500\u2500 advanced1.md\n    \u2502   \u251c\u2500\u2500 advanced2.md\n    \u2502   \u2514\u2500\u2500 read-more\n    \u2502       \u251c\u2500\u2500 resource1.md\n    \u2502       \u2514\u2500\u2500 resource2.md\n    \u251c\u2500\u2500 easy\n    \u2502   \u251c\u2500\u2500 easy1.md\n    \u2502   \u2514\u2500\u2500 easy2.md\n    \u251c\u2500\u2500 tutorial-end.md\n    \u251c\u2500\u2500 tutorial-intro.md\n    \u2514\u2500\u2500 tutorial-medium.md\n")),(0,r.kt)("p",null,"And assume every doc's ID is just its file name. If you define an autogenerated sidebar like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  mySidebar: [\n    'intro',\n    {\n      type: 'category',\n      label: 'Tutorials',\n      items: [\n        'tutorial-intro',\n        // highlight-start\n        {\n          type: 'autogenerated',\n          dirName: 'tutorials/easy', // Generate sidebar slice from docs/tutorials/easy\n        },\n        // highlight-end\n        'tutorial-medium',\n        // highlight-start\n        {\n          type: 'autogenerated',\n          dirName: 'tutorials/advanced', // Generate sidebar slice from docs/tutorials/hard\n        },\n        // highlight-end\n        'tutorial-end',\n      ],\n    },\n    // highlight-start\n    {\n      type: 'autogenerated',\n      dirName: 'api', // Generate sidebar slice from docs/api\n    },\n    // highlight-end\n    {\n      type: 'category',\n      label: 'Community',\n      items: ['team', 'chat'],\n    },\n  ],\n};\n")),(0,r.kt)("p",null,"It would be resolved as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  mySidebar: [\n    'intro',\n    {\n      type: 'category',\n      label: 'Tutorials',\n      items: [\n        'tutorial-intro',\n        // highlight-start\n        // Two files in docs/tutorials/easy\n        'easy1',\n        'easy2',\n        // highlight-end\n        'tutorial-medium',\n        // highlight-start\n        // Two files and a folder in docs/tutorials/hard\n        'advanced1',\n        'advanced2',\n        {\n          type: 'category',\n          label: 'read-more',\n          items: ['resource1', 'resource2'],\n        },\n        // highlight-end\n        'tutorial-end',\n      ],\n    },\n    // highlight-start\n    // Two folders in docs/api\n    {\n      type: 'category',\n      label: 'product1-api',\n      items: ['api'],\n    },\n    {\n      type: 'category',\n      label: 'product2-api',\n      items: ['basic-api', 'pro-api'],\n    },\n    // highlight-end\n    {\n      type: 'category',\n      label: 'Community',\n      items: ['team', 'chat'],\n    },\n  ],\n};\n")),(0,r.kt)("p",null,'Note how the autogenerate source directories themselves don\'t become categories: only the items they contain do. This is what we mean by "sidebar slice".')),(0,r.kt)("h2",{id:"category-index-convention"},"Category index convention"),(0,r.kt)("p",null,"Docusaurus can automatically link a category to its index document."),(0,r.kt)("p",null,"A category index document is a document following one of those filename conventions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Named as ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," (case-insensitive): ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/Guides/index.md")),(0,r.kt)("li",{parentName:"ul"},"Named as ",(0,r.kt)("inlineCode",{parentName:"li"},"README")," (case-insensitive): ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/Guides/README.mdx")),(0,r.kt)("li",{parentName:"ul"},"Same name as parent folder: ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/Guides/Guides.md"))),(0,r.kt)("p",null,"This is equivalent to using a category with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/sidebar/items#category-doc-link"},"doc link"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: [\n    // highlight-start\n    {\n      type: 'category',\n      label: 'Guides',\n      link: {type: 'doc', id: 'Guides/index'},\n      items: [],\n    },\n    // highlight-end\n  ],\n};\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Naming your introductory document ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," makes it show up when browsing the folder using the GitHub interface, while using ",(0,r.kt)("inlineCode",{parentName:"p"},"index.md")," makes the behavior more in line with how HTML files are served.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If a folder only has one index page, it will be turned into a link instead of a category. This is useful for ",(0,r.kt)("strong",{parentName:"p"},"asset collocation"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"some-doc\n\u251c\u2500\u2500 index.md\n\u251c\u2500\u2500 img1.png\n\u2514\u2500\u2500 img2.png\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Customizing category index matching"),(0,r.kt)("p",null,"It is possible to opt out any of the category index conventions, or define even more conventions. You can inject your own ",(0,r.kt)("inlineCode",{parentName:"p"},"isCategoryIndex")," matcher through the ",(0,r.kt)("a",{parentName:"p",href:"#customize-the-sidebar-items-generator"},(0,r.kt)("inlineCode",{parentName:"a"},"sidebarItemsGenerator"))," callback. For example, you can also pick ",(0,r.kt)("inlineCode",{parentName:"p"},"intro")," as another file name eligible for automatically becoming the category index."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        async sidebarItemsGenerator({\n          ...args,\n          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below\n          defaultSidebarItemsGenerator,\n        }) {\n          return defaultSidebarItemsGenerator({\n            ...args,\n            // highlight-start\n            isCategoryIndex(doc) {\n              return (\n                // Also pick intro.md in addition to the default ones\n                doc.fileName.toLowerCase() === 'intro' ||\n                defaultCategoryIndexMatcher(doc)\n              );\n            },\n            // highlight-end\n          });\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",null,"Or choose to not have any category index convention."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        async sidebarItemsGenerator({\n          ...args,\n          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below\n          defaultSidebarItemsGenerator,\n        }) {\n          return defaultSidebarItemsGenerator({\n            ...args,\n            // highlight-start\n            isCategoryIndex() {\n              // No doc will be automatically picked as category index\n              return false;\n            },\n            // highlight-end\n          });\n        },\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isCategoryIndex")," matcher will be provided with three fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fileName"),", the file's name without extension and with casing preserved"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directories"),", the list of directory names ",(0,r.kt)("em",{parentName:"li"},"from the lowest level to the highest level"),", relative to the docs root directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extension"),", the file's extension, with a leading dot.")),(0,r.kt)("p",null,"For example, for a doc file at ",(0,r.kt)("inlineCode",{parentName:"p"},"guides/sidebar/autogenerated.md"),", the props the matcher receives are"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const props = {\n  fileName: 'autogenerated',\n  directories: ['sidebar', 'guides'],\n  extension: '.md',\n};\n")),(0,r.kt)("p",null,"The default implementation is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function isCategoryIndex({fileName, directories}) {\n  const eligibleDocIndexNames = [\n    'index',\n    'readme',\n    directories[0].toLowerCase(),\n  ];\n  return eligibleDocIndexNames.includes(fileName.toLowerCase());\n}\n"))),(0,r.kt)("h2",{id:"autogenerated-sidebar-metadata"},"Autogenerated sidebar metadata"),(0,r.kt)("p",null,"For handwritten sidebar definitions, you would provide metadata to sidebar items through ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebars.js"),"; for autogenerated, Docusaurus would read them from the item's respective file. In addition, you may want to adjust the relative position of each item because, by default, items within a sidebar slice will be generated in ",(0,r.kt)("strong",{parentName:"p"},"alphabetical order")," (using file and folder names)."),(0,r.kt)("h3",{id:"doc-item-metadata"},"Doc item metadata"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"className"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"customProps")," attributes are declared in front matter as ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_class_name"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_custom_props"),", respectively. Position can be specified in the same way, via ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar_position")," front matter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/tutorials/tutorial-easy.md"',title:'"docs/tutorials/tutorial-easy.md"'},"---\n# highlight-start\nsidebar_position: 2\nsidebar_label: Easy\nsidebar_class_name: green\n# highlight-end\n---\n\n# Easy Tutorial\n\nThis is the easy tutorial!\n")),(0,r.kt)("h3",{id:"category-item-metadata"},"Category item metadata"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"_category_.json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"_category_.yml")," file in the respective folder. You can specify any category metadata and also the ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," metadata. ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"className"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"position"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"customProps")," will default to the respective values of the category's linked doc, if there is one."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="docs/tutorials/_category_.json"',title:'"docs/tutorials/_category_.json"'},'{\n  "position": 2.5,\n  "label": "Tutorial",\n  "collapsible": true,\n  "collapsed": false,\n  "className": "red",\n  "link": {\n    "type": "generated-index",\n    "title": "Tutorial overview"\n  },\n  "customProps": {\n    "description": "This description can be used in the swizzled DocCard"\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"YAML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docs/tutorials/_category_.yml"',title:'"docs/tutorials/_category_.yml"'},"position: 2.5 # float position is supported\nlabel: 'Tutorial'\ncollapsible: true # make the category collapsible\ncollapsed: false # keep the category open by default\nclassName: red\nlink:\n  type: generated-index\n  title: Tutorial overview\ncustomProps:\n  description: This description can be used in the swizzled DocCard\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," is explicitly specified, Docusaurus will not apply any ",(0,r.kt)("a",{parentName:"p",href:"/docs/sidebar/items#category-index-convention"},"default conventions"),"."),(0,r.kt)("p",{parentName:"admonition"},"The doc links can be specified relatively, e.g. if the category is generated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"guides")," directory, ",(0,r.kt)("inlineCode",{parentName:"p"},'"link": {"type": "doc", "id": "intro"}')," will be resolved to the ID ",(0,r.kt)("inlineCode",{parentName:"p"},"guides/intro"),", only falling back to ",(0,r.kt)("inlineCode",{parentName:"p"},"intro")," if a doc with the former ID doesn't exist."),(0,r.kt)("p",{parentName:"admonition"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"link: null")," to opt out of default conventions and not generate any category index page.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The position metadata is only used ",(0,r.kt)("strong",{parentName:"p"},"within a sidebar slice"),": Docusaurus does not re-order other items of your sidebar.")),(0,r.kt)("h2",{id:"using-number-prefixes"},"Using number prefixes"),(0,r.kt)("p",null,"A simple way to order an autogenerated sidebar is to prefix docs and folders by number prefixes, which also makes them appear in the file system in the same order when sorted by file name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docs\n\u251c\u2500\u2500 01-Intro.md\n\u251c\u2500\u2500 02-Tutorial Easy\n\u2502   \u251c\u2500\u2500 01-First Part.md\n\u2502   \u251c\u2500\u2500 02-Second Part.md\n\u2502   \u2514\u2500\u2500 03-End.md\n\u251c\u2500\u2500 03-Tutorial Hard\n\u2502   \u251c\u2500\u2500 01-First Part.md\n\u2502   \u251c\u2500\u2500 02-Second Part.md\n\u2502   \u251c\u2500\u2500 03-Third Part.md\n\u2502   \u2514\u2500\u2500 04-End.md\n\u2514\u2500\u2500 04-End.md\n")),(0,r.kt)("p",null,"To make it ",(0,r.kt)("strong",{parentName:"p"},"easier to adopt"),", Docusaurus supports ",(0,r.kt)("strong",{parentName:"p"},"multiple number prefix patterns"),"."),(0,r.kt)("p",null,"By default, Docusaurus will ",(0,r.kt)("strong",{parentName:"p"},"remove the number prefix")," from the doc id, title, label, and URL paths."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Prefer using ",(0,r.kt)("a",{parentName:"strong",href:"#autogenerated-sidebar-metadata"},"additional metadata")),"."),(0,r.kt)("p",{parentName:"admonition"},"Updating a number prefix can be annoying, as it can require ",(0,r.kt)("strong",{parentName:"p"},"updating multiple existing markdown links"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="docs/02-Tutorial Easy/01-First Part.md"',title:'"docs/02-Tutorial',"Easy/01-First":!0,'Part.md"':!0},"- Check the [Tutorial End](../04-End.md);\n+ Check the [Tutorial End](../05-End.md);\n"))),(0,r.kt)("h2",{id:"customize-the-sidebar-items-generator"},"Customize the sidebar items generator"),(0,r.kt)("p",null,"You can provide a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebarItemsGenerator")," function in the docs plugin (or preset) config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        async sidebarItemsGenerator({\n          defaultSidebarItemsGenerator,\n          numberPrefixParser,\n          item,\n          version,\n          docs,\n          categoriesMetadata,\n          isCategoryIndex,\n        }) {\n          // Example: return an hardcoded list of static sidebar items\n          return [\n            {type: 'doc', id: 'doc1'},\n            {type: 'doc', id: 'doc2'},\n          ];\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Re-use and enhance the default generator")," instead of writing a generator from scratch: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-plugin-content-docs/src/sidebars/generator.ts"},"the default generator we provide")," is 250 lines long."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Add, update, filter, re-order")," the sidebar items according to your use case:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"// highlight-start\n// Reverse the sidebar items ordering (including nested category items)\nfunction reverseSidebarItems(items) {\n  // Reverse items in categories\n  const result = items.map((item) => {\n    if (item.type === 'category') {\n      return {...item, items: reverseSidebarItems(item.items)};\n    }\n    return item;\n  });\n  // Reverse items at current level\n  result.reverse();\n  return result;\n}\n// highlight-end\n\nmodule.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {\n          const sidebarItems = await defaultSidebarItemsGenerator(args);\n          return reverseSidebarItems(sidebarItems);\n        },\n        // highlight-end\n      },\n    ],\n  ],\n};\n"))))}p.isMDXComponent=!0}}]);