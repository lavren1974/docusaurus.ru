"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,g=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={id:"docs-sidebar",title:"Sidebar",slug:"/sidebar"},s=void 0,l={unversionedId:"docs-sidebar",id:"docs-sidebar",title:"Sidebar",description:"To generate a sidebar to your Docusaurus site:",source:"@site/docs/sidebar.md",sourceDirName:".",slug:"/sidebar",permalink:"/docs/sidebar",draft:!1,tags:[],version:"current",frontMatter:{id:"docs-sidebar",title:"Sidebar",slug:"/sidebar"}},o={},d=[{value:"Sidebar object",id:"sidebar-object",level:2},{value:"Using multiple sidebars",id:"using-multiple-sidebars",level:2},{value:"Understanding sidebar items",id:"understanding-sidebar-items",level:2},{value:"Linking to a doc page",id:"linking-to-a-doc-page",level:3},{value:"Creating a generic link",id:"creating-a-generic-link",level:3},{value:"Creating a link to page without sidebar",id:"creating-a-link-to-page-without-sidebar",level:3},{value:"Creating a hierachy",id:"creating-a-hierachy",level:3},{value:"Collapsible categories",id:"collapsible-categories",level:4},{value:"Expanded categories by default",id:"expanded-categories-by-default",level:4},{value:"Hideable sidebar",id:"hideable-sidebar",level:2},{value:"Passing custom props",id:"passing-custom-props",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To generate a sidebar to your Docusaurus site:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define a file that exports a ",(0,i.kt)("a",{parentName:"li",href:"#sidebar-object"},"sidebar object"),"."),(0,i.kt)("li",{parentName:"ol"},"Pass this object into the ",(0,i.kt)("inlineCode",{parentName:"li"},"@docusaurus/plugin-docs")," plugin directly or via ",(0,i.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{8-9} title="docusaurus.config.js"',"{8-9}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // Sidebars filepath relative to the site dir.\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        // ...\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("h2",{id:"sidebar-object"},"Sidebar object"),(0,i.kt)("p",null,"A sidebar object contains ",(0,i.kt)("a",{parentName:"p",href:"#understanding-sidebar-items"},"sidebar items")," and it is defined like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type Sidebar = {\n  [sidebarId: string]:\n    | {\n        [sidebarCategory: string]: SidebarItem[];\n      }\n    | SidebarItem[];\n};\n")),(0,i.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: ['greeting'],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: ['doc1'],\n    },\n  ],\n};\n")),(0,i.kt)("p",null,"In this example, notice the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The key ",(0,i.kt)("inlineCode",{parentName:"li"},"docs")," is the id of the sidebar. The id can be any value, not necessarily ",(0,i.kt)("inlineCode",{parentName:"li"},"docs"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Getting Started")," is a category within the sidebar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"greeting")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"doc1")," are both ",(0,i.kt)("a",{parentName:"li",href:"#sidebar-item"},"sidebar item"),".")),(0,i.kt)("p",null,"Shorthand notation can also be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: {\n    'Getting started': ['greeting'],\n    Docusaurus: ['doc1'],\n  },\n};\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Shorthand notation relies on the iteration order of JavaScript object keys for the category name. When using this notation, keep in mind that EcmaScript does not guarantee ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.keys({a,b}) === ['a','b']"),", yet this is generally true.")),(0,i.kt)("h2",{id:"using-multiple-sidebars"},"Using multiple sidebars"),(0,i.kt)("p",null,"You can have multiple sidebars for different Markdown files by adding more top-level keys to the exported object."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  firstSidebar: {\n    'Category A': ['doc1'],\n  },\n  secondSidebar: {\n    'Category A': ['doc2'],\n    'Category B': ['doc3'],\n  },\n};\n")),(0,i.kt)("p",null,"By default, the doc page the user is reading will display the sidebar that it is part of. This can be customized with the ",(0,i.kt)("a",{parentName:"p",href:"#understanding-sidebar-items"},"sidebar type"),"."),(0,i.kt)("p",null,"For example, with the above example, when displaying the ",(0,i.kt)("inlineCode",{parentName:"p"},"doc2")," page, the sidebar will contain the items of ",(0,i.kt)("inlineCode",{parentName:"p"},"secondSidebar")," only. Another example of multiple sidebars is the ",(0,i.kt)("inlineCode",{parentName:"p"},"API")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Docs")," sections on the Docusaurus website."),(0,i.kt)("p",null,"For more information about sidebars and how they relate to doc pages, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/themes/configuration#navbar-doc-link"},"Navbar doc link"),"."),(0,i.kt)("h2",{id:"understanding-sidebar-items"},"Understanding sidebar items"),(0,i.kt)("p",null,"As the name implies, ",(0,i.kt)("inlineCode",{parentName:"p"},"SidebarItem")," is an item defined in a Sidebar. A sibarItem as a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," that defines what the item links to."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"type")," supports the following values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#linking-to-a-doc-page"},"Doc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-generic-link"},"Link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-link-to-page-without-sidebar"},"Ref")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-hierachy"},"Category"))),(0,i.kt)("h3",{id:"linking-to-a-doc-page"},"Linking to a doc page"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"doc")," to link to a documentation page. This is the default type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type SidebarItemDoc =\n  | string\n  | {\n      type: 'doc';\n      id: string;\n    };\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  type: 'doc',\n  id: 'doc1', // string - document id\n}\n")),(0,i.kt)("p",null,"Using just the ",(0,i.kt)("a",{parentName:"p",href:"#document-id"},"Document ID")," is also valid, the following is equivalent to the above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"'doc1'; // string - document id\n")),(0,i.kt)("p",null,"Using this type will bind the linked doc to current sidebar. This means that if you access the ",(0,i.kt)("inlineCode",{parentName:"p"},"doc1")," page, the sidebar displayed will be the sidebar that contains this doc page."),(0,i.kt)("p",null,"In the example below, ",(0,i.kt)("inlineCode",{parentName:"p"},"doc1")," is bound to ",(0,i.kt)("inlineCode",{parentName:"p"},"firstSidebar"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  firstSidebar: {\n    'Category A': ['doc1'],\n  },\n  secondSidebar: {\n    'Category A': ['doc2'],\n    'Category B': ['doc3'],\n  },\n};\n")),(0,i.kt)("h3",{id:"creating-a-generic-link"},"Creating a generic link"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," to link to a non-documentation page. For example, to create an external link."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type SidebarItemLink = {\n  type: 'link';\n  label: string;\n  href: string;\n};\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  type: 'link',\n  label: 'Custom Label', // The label that should be displayed (string).\n  href: 'https://example.com' // The target URL (string).\n}\n")),(0,i.kt)("h3",{id:"creating-a-link-to-page-without-sidebar"},"Creating a link to page without sidebar"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," to link to a documentation page without binding it to a sidebar. This means the sidebar dissapears when the user displays the linked page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type SidebarItemRef = {\n  type: 'ref';\n  id: string;\n};\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  type: 'ref',\n  id: 'doc1', // Document id (string).\n}\n")),(0,i.kt)("h3",{id:"creating-a-hierachy"},"Creating a hierachy"),(0,i.kt)("p",null,"The Sidebar item type that creates a hierarchy in the sidebar. Set ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"category"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type SidebarItemCategory = {\n  type: 'category';\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n  collapsed: boolean; // Set the category to be collapsed or open by default\n};\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: [\n    {\n      ...\n    },\n    {\n      type: 'category',\n      label: 'Guides',\n      items: [\n        'guides/creating-pages',\n        {\n          Docs: ['docs-introduction', 'docs-sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": it's possible to use the shorthand syntax to create nested categories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        Docs: [\n          'docs-introduction',\n          'docs-sidebar',\n          'markdown-features',\n          'versioning',\n        ],\n      },\n    ],\n  },\n};\n")),(0,i.kt)("h4",{id:"collapsible-categories"},"Collapsible categories"),(0,i.kt)("p",null,"For sites with a sizable amount of content, we support the option to expand/collapse a category to toggle the display of its contents. Categories are collapsible by default. If you want them to be always expanded, set ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig.sidebarCollapsible")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{4} title="docusaurus.config.js"',"{4}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    sidebarCollapsible: false,\n    // ...\n  },\n};\n")),(0,i.kt)("h4",{id:"expanded-categories-by-default"},"Expanded categories by default"),(0,i.kt)("p",null,"For docs that have collapsible categories, you may want more fine-grain control over certain categories. If you want specific categories to be always expanded, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"collapsed")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        type: 'category',\n        label: 'Docs',\n        collapsed: false,\n        items: ['markdown-features', 'sidebar', 'versioning'],\n      },\n    ],\n  },\n};\n")),(0,i.kt)("h2",{id:"hideable-sidebar"},"Hideable sidebar"),(0,i.kt)("p",null,"Using the enabled ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig.hideableSidebar")," option, you can make the entire sidebar hidden, allowing you to better focus your users on the content. This is especially useful when content consumption on medium screens (e.g. on tablets)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{4} title="docusaurus.config.js"',"{4}":!0,title:'"docusaurus.config.js"'},"module.exports = {\n  // ...\n  themeConfig: {\n    hideableSidebar: true,\n    // ...\n  },\n};\n")),(0,i.kt)("h2",{id:"passing-custom-props"},"Passing custom props"),(0,i.kt)("p",null,"To pass in custom props to a swizzled sidebar item, add the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"customProps")," object to any of the items:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  type: 'doc';\n  id: 'doc1';\n  customProps: {\n    /* props */\n  }\n}\n")))}c.isMDXComponent=!0}}]);