"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[5111,7918],{17661:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(67294),a=t(86010),i=t(54715),s=t(83699),o=t(2735),d=t(97325),l="cardContainer_fWXF",u="cardTitle_rnsV",c="cardDescription_PWke";function p(e){var n=e.href,t=e.children;return r.createElement(s.Z,{href:n,className:(0,a.Z)("card padding--lg",l)},t)}function m(e){var n=e.href,t=e.icon,i=e.title,s=e.description;return r.createElement(p,{href:n},r.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},t," ",i),s&&r.createElement("p",{className:(0,a.Z)("text--truncate",c),title:s},s))}function g(e){var n=e.item,t=(0,i.Wl)(n);return t?r.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function b(e){var n,t=e.item,a=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(null!=(n=t.docId)?n:void 0);return r.createElement(m,{href:t.href,icon:a,title:t.label,description:null==s?void 0:s.description})}function h(e){var n=e.item;switch(n.type){case"link":return r.createElement(b,{item:n});case"category":return r.createElement(g,{item:n});default:throw new Error("unknown item type "+JSON.stringify(n))}}function f(e){var n=e.items,t=e.className;return r.createElement("section",{className:(0,a.Z)("row",t)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(n).map((function(e,n){return r.createElement("article",{key:n,className:"col col--6 margin-bottom--lg"},r.createElement(h,{key:n,item:e}))})))}},14526:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(4575);function i(e){return r.createElement(a.Z,e)}},23330:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return g}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=t(17661),o=t(54715),d=t(14526),l=["components"],u={slug:"/sidebar"},c="Sidebar",p={unversionedId:"guides/docs/sidebar/index",id:"guides/docs/sidebar/index",title:"Sidebar",description:"Creating a sidebar is useful to:",source:"@site/docs/guides/docs/sidebar/index.md",sourceDirName:"guides/docs/sidebar",slug:"/sidebar",permalink:"/docs/sidebar",draft:!1,tags:[],version:"current",frontMatter:{slug:"/sidebar"},sidebar:"docs",previous:{title:"Create a doc",permalink:"/docs/create-doc"},next:{title:"Sidebar items",permalink:"/docs/sidebar/items"}},m={},g=[{value:"Default sidebar",id:"default-sidebar",level:2},{value:"Sidebar object",id:"sidebar-object",level:2},{value:"Theme configuration",id:"theme-configuration",level:2},{value:"Hideable sidebar",id:"hideable-sidebar",level:3},{value:"Auto-collapse sidebar categories",id:"auto-collapse-sidebar-categories",level:3},{value:"Passing custom props",id:"passing-custom-props",level:2},{value:"Sidebar Breadcrumbs",id:"sidebar-breadcrumbs",level:2},{value:"Complex sidebars example",id:"complex-sidebars-example",level:2}],b={toc:g};function h(e){var n=e.components,u=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},b,u,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sidebar"},"Sidebar"),(0,i.kt)("p",null,"Creating a sidebar is useful to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Group multiple ",(0,i.kt)("strong",{parentName:"li"},"related documents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Display a sidebar")," on each of those documents"),(0,i.kt)("li",{parentName:"ul"},"Provide ",(0,i.kt)("strong",{parentName:"li"},"paginated navigation"),", with next/previous button")),(0,i.kt)("p",null,"To use sidebars on your Docusaurus site:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define a file that exports a dictionary of ",(0,i.kt)("a",{parentName:"li",href:"#sidebar-object"},"sidebar objects"),"."),(0,i.kt)("li",{parentName:"ol"},"Pass this object into the ",(0,i.kt)("inlineCode",{parentName:"li"},"@docusaurus/plugin-docs")," plugin directly or via ",(0,i.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("p",null,"This section serves as an overview of miscellaneous features of the doc sidebar. In the following sections, we will more systematically introduce the following concepts:"),(0,i.kt)(s.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}),(0,i.kt)("h2",{id:"default-sidebar"},"Default sidebar"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebarPath")," is unspecified, Docusaurus ",(0,i.kt)("a",{parentName:"p",href:"/docs/sidebar/autogenerated"},"automatically generates a sidebar")," for you, by using the filesystem structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  mySidebar: [\n    {\n      type: 'autogenerated',\n      dirName: '.', // generate sidebar from the docs folder (or versioned_docs/<version>)\n    },\n  ],\n};\n")),(0,i.kt)("p",null,"You can also define your sidebars explicitly."),(0,i.kt)("h2",{id:"sidebar-object"},"Sidebar object"),(0,i.kt)("p",null,"A sidebar at its crux is a hierarchy of categories, doc links, and other hyperlinks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type Sidebar =\n  // Normal syntax\n  | SidebarItem[]\n  // Shorthand syntax\n  | {[categoryLabel: string]: SidebarItem[]};\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc1',\n        },\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc2',\n        },\n        {\n          type: 'doc',\n          id: 'doc3',\n        },\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n")),(0,i.kt)("p",null,"This is a sidebars file that exports one sidebar, called ",(0,i.kt)("inlineCode",{parentName:"p"},"mySidebar"),". It has three top-level items: two categories and one external link. Within each category, there are a few doc links."),(0,i.kt)("p",null,"A sidebars file can contain ",(0,i.kt)("a",{parentName:"p",href:"/docs/sidebar/multiple-sidebars"},(0,i.kt)("strong",{parentName:"a"},"multiple sidebar objects")),", identified by their object keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type SidebarsFile = {\n  [sidebarID: string]: Sidebar;\n};\n")),(0,i.kt)("h2",{id:"theme-configuration"},"Theme configuration"),(0,i.kt)("h3",{id:"hideable-sidebar"},"Hideable sidebar"),(0,i.kt)("p",null,"By enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig.docs.sidebar.hideable")," option, you can make the entire sidebar hideable, allowing users to better focus on the content. This is especially useful when content is consumed on medium-sized screens (e.g. tablets)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        hideable: true,\n      },\n    },\n    // highlight-end\n  },\n};\n")),(0,i.kt)("h3",{id:"auto-collapse-sidebar-categories"},"Auto-collapse sidebar categories"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig.docs.sidebar.autoCollapseCategories")," option would collapse all sibling categories when expanding one category. This saves the user from having too many categories open and helps them focus on the selected section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        autoCollapseCategories: true,\n      },\n    },\n    // highlight-end\n  },\n};\n")),(0,i.kt)("h2",{id:"passing-custom-props"},"Passing custom props"),(0,i.kt)("p",null,"To pass in custom props to a swizzled sidebar item, add the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"customProps")," object to any of the items:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  type: 'doc',\n  id: 'doc1',\n  customProps: {\n    /* props */\n  },\n};\n")),(0,i.kt)("h2",{id:"sidebar-breadcrumbs"},"Sidebar Breadcrumbs"),(0,i.kt)("p",null,'By default, breadcrumbs are rendered at the top, using the "sidebar path" of the current page.'),(0,i.kt)("p",null,"This behavior can be disabled with plugin options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          breadcrumbs: false,\n        },\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("h2",{id:"complex-sidebars-example"},"Complex sidebars example"),(0,i.kt)("p",null,"A real-world example from the Docusaurus site:"),(0,i.kt)(d.Z,{className:"language-js",title:"sidebars.js",mdxType:"CodeBlock"},t(76322).Z.split("\n").map((function(e){return!["//","/*","*"].some((function(n){return e.trim().startsWith(n)}))&&e})).filter(Boolean).join("\n")))}h.isMDXComponent=!0},76322:function(e,n){n.Z="/**\r\n * Copyright (c) Facebook, Inc. and its affiliates.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE file in the root directory of this source tree.\r\n */\r\n\r\n// @ts-check\r\n\r\n/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */\r\nconst sidebars = {\r\n  docs: [\r\n    'introduction',\r\n    {\r\n      type: 'category',\r\n      label: 'Getting Started',\r\n      link: {\r\n        type: 'generated-index',\r\n      },\r\n      collapsed: false,\r\n      items: [\r\n        'installation',\r\n        'configuration',\r\n        'playground',\r\n        'typescript-support',\r\n      ],\r\n    },\r\n    {\r\n      type: 'category',\r\n      label: 'Guides',\r\n      link: {\r\n        type: 'generated-index',\r\n        title: 'Docusaurus Guides',\r\n        description:\r\n          \"Let's learn about the most important Docusaurus concepts!\",\r\n        keywords: ['guides'],\r\n        image: '/img/docusaurus.png',\r\n      },\r\n      items: [\r\n        'guides/creating-pages',\r\n        {\r\n          type: 'category',\r\n          label: 'Docs',\r\n          link: {\r\n            type: 'doc',\r\n            id: 'guides/docs/introduction',\r\n          },\r\n          items: [\r\n            'guides/docs/create-doc',\r\n            {\r\n              type: 'category',\r\n              label: 'Sidebar',\r\n              link: {\r\n                type: 'doc',\r\n                id: 'guides/docs/sidebar/index',\r\n              },\r\n              items: [\r\n                'guides/docs/sidebar/items',\r\n                'guides/docs/sidebar/autogenerated',\r\n                'guides/docs/sidebar/multiple-sidebars',\r\n              ],\r\n            },\r\n            'guides/docs/versioning',\r\n            'guides/docs/multi-instance',\r\n          ],\r\n        },\r\n        'blog',\r\n        {\r\n          type: 'category',\r\n          label: 'Markdown Features',\r\n          link: {\r\n            type: 'doc',\r\n            id: 'guides/markdown-features/introduction',\r\n          },\r\n          items: [\r\n            'guides/markdown-features/react',\r\n            'guides/markdown-features/tabs',\r\n            'guides/markdown-features/code-blocks',\r\n            'guides/markdown-features/admonitions',\r\n            'guides/markdown-features/toc',\r\n            'guides/markdown-features/assets',\r\n            'guides/markdown-features/links',\r\n            'guides/markdown-features/plugins',\r\n            'guides/markdown-features/math-equations',\r\n            'guides/markdown-features/head-metadata',\r\n          ],\r\n        },\r\n        'styling-layout',\r\n        'swizzling',\r\n        'static-assets',\r\n        'search',\r\n        'browser-support',\r\n        'seo',\r\n        'using-plugins',\r\n        'deployment',\r\n        {\r\n          type: 'category',\r\n          label: 'Internationalization',\r\n          link: { type: 'doc', id: 'i18n/introduction' },\r\n          items: [\r\n            {\r\n              type: 'doc',\r\n              id: 'i18n/tutorial',\r\n              label: 'Tutorial',\r\n            },\r\n            {\r\n              type: 'doc',\r\n              id: 'i18n/git',\r\n              label: 'Using Git',\r\n            },\r\n            {\r\n              type: 'doc',\r\n              id: 'i18n/crowdin',\r\n              label: 'Using Crowdin',\r\n            },\r\n          ],\r\n        },\r\n        'guides/whats-next',\r\n      ],\r\n    },\r\n    {\r\n      type: 'category',\r\n      label: 'Advanced Guides',\r\n      link: { type: 'doc', id: 'advanced/index' },\r\n      items: [\r\n        'advanced/architecture',\r\n        'advanced/plugins',\r\n        'advanced/routing',\r\n        'advanced/ssg',\r\n        'advanced/client',\r\n      ],\r\n    },\r\n    {\r\n      type: 'category',\r\n      label: 'Migrating from v1 to v2',\r\n      items: [\r\n        'migration/migration-overview',\r\n        'migration/migration-automated',\r\n        'migration/migration-manual',\r\n        'migration/migration-versioned-sites',\r\n        'migration/migration-translated-sites',\r\n      ],\r\n    },\r\n  ],\r\n  api: [\r\n    'cli',\r\n    'docusaurus-core',\r\n    {\r\n      type: 'autogenerated',\r\n      dirName: 'api',\r\n    },\r\n  ],\r\n};\r\n\r\nmodule.exports = sidebars;\r\n"}}]);