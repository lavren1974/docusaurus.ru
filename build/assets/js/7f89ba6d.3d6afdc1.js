"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[3166],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),g=l,k=s["".concat(d,".").concat(g)]||s[g]||u[g]||r;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},19700:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:2,slug:"/api/plugins/@docusaurus/plugin-content-blog"},i="\ud83d\udce6 plugin-content-blog",o={unversionedId:"api/plugins/plugin-content-blog",id:"api/plugins/plugin-content-blog",title:"\ud83d\udce6 plugin-content-blog",description:"\u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c APITable \u0438\u0437 '@site/src/components/APITable';",source:"@site/docs/api/plugins/plugin-content-blog.md",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-content-blog",permalink:"/docs/api/plugins/@docusaurus/plugin-content-blog",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/api/plugins/@docusaurus/plugin-content-blog"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-docs",permalink:"/docs/api/plugins/@docusaurus/plugin-content-docs"},next:{title:"\ud83d\udce6 plugin-content-pages",permalink:"/docs/api/plugins/@docusaurus/plugin-content-pages"}},d={},p=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"installation",level:2},{value:"\u0424\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>EditUrlFn</code>",id:"EditUrlFn",level:4},{value:"<code>ReadingTimeFn</code>",id:"ReadingTimeFn",level:4},{value:"<code>FeedType</code>",id:"FeedType",level:4},{value:"Example configuration",id:"ex-config",level:3},{value:"Markdown front matter",id:"markdown-front-matter",level:2},{value:"i18n",id:"i18n",level:2},{value:"Translation files location",id:"translation-files-location",level:3},{value:"Example file-system structure",id:"example-file-system-structure",level:3}],m=(u="APITable",function(t){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)});var u;const s={toc:p};function g(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-plugin-content-blog"},"\ud83d\udce6 plugin-content-blog"),(0,l.kt)("p",null,"\u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c APITable \u0438\u0437 '@site/src/components/APITable';"),(0,l.kt)("p",null,"Provides the ",(0,l.kt)("a",{parentName:"p",href:"/docs/blog"},"Blog")," feature and is the default blog plugin for Docusaurus."),(0,l.kt)("admonition",{title:"some features production only",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("a",{parentName:"p",href:"/docs/blog#feed"},"feed feature")," works by extracting the build output, and is ",(0,l.kt)("strong",{parentName:"p"},"only active in production"),".")),(0,l.kt)("h2",{id:"installation"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/plugin-content-blog\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you use the preset ",(0,l.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,l.kt)("p",{parentName:"admonition"},"You can configure this plugin through the ",(0,l.kt)("a",{parentName:"p",href:"#ex-config-preset"},"preset options"),".")),(0,l.kt)("h2",{id:"configuration"},"\u0424\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"),(0,l.kt)("p",null,"Accepted fields:"),(0,l.kt)(m,{mdxType:"APITable"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'blog'")),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the blog content directory on the file system, relative to site dir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"editUrl")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," ",(0,l.kt)("a",{href:"#EditUrlFn"},"EditUrlFn"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Base URL to edit your site. The final URL is computed by ",(0,l.kt)("inlineCode",{parentName:"td"},"editUrl + relativePostPath"),". Using a function allows more nuanced control for each file. Omitting this variable entirely will disable edit links.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"editLocalizedFiles")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"The edit URL will target the localized file, instead of the original unlocalized file. Ignored when ",(0,l.kt)("inlineCode",{parentName:"td"},"editUrl")," is a function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blogTitle")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'Blog'")),(0,l.kt)("td",{parentName:"tr",align:null},"Blog page title for better SEO.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blogDescription")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'Blog'")),(0,l.kt)("td",{parentName:"tr",align:null},"Blog page meta description for better SEO.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blogSidebarCount")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number ","|"," 'ALL'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of blog post elements to show in the blog sidebar. ",(0,l.kt)("inlineCode",{parentName:"td"},"'ALL'")," to show all blog posts; ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," to disable.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blogSidebarTitle")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'Recent posts'")),(0,l.kt)("td",{parentName:"tr",align:null},"Title of the blog sidebar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"routeBasePath")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'blog'")),(0,l.kt)("td",{parentName:"tr",align:null},"URL route for the blog section of your site. ",(0,l.kt)("strong",{parentName:"td"},"DO NOT")," include a trailing slash. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"/")," to put the blog at root path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tagsBasePath")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'tags'")),(0,l.kt)("td",{parentName:"tr",align:null},"URL route for the tags section of your blog. Will be appended to ",(0,l.kt)("inlineCode",{parentName:"td"},"routeBasePath"),". ",(0,l.kt)("strong",{parentName:"td"},"DO NOT")," include a trailing slash.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"archiveBasePath")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," null")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'archive'")),(0,l.kt)("td",{parentName:"tr",align:null},"URL route for the archive section of your blog. Will be appended to ",(0,l.kt)("inlineCode",{parentName:"td"},"routeBasePath"),". ",(0,l.kt)("strong",{parentName:"td"},"DO NOT")," include a trailing slash. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," to disable generation of archive.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"include")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"['**/*.{md,mdx}']")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of glob patterns matching Markdown files to be built, relative to the content path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"exclude")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"See example configuration")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of glob patterns matching Markdown files to be excluded. Serves as refinement based on the ",(0,l.kt)("inlineCode",{parentName:"td"},"include")," option.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"postsPerPage")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number ","|"," 'ALL'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of posts to show per page in the listing page. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"'ALL'")," to display all posts on one listing page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blogListComponent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'@theme/BlogListPage'")),(0,l.kt)("td",{parentName:"tr",align:null},"Root component of the blog listing page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blogPostComponent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'@theme/BlogPostPage'")),(0,l.kt)("td",{parentName:"tr",align:null},"Root component of each blog post page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blogTagsListComponent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'@theme/BlogTagsListPage'")),(0,l.kt)("td",{parentName:"tr",align:null},"Root component of the tags list page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blogTagsPostsComponent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'@theme/BlogTagsPostsPage'")),(0,l.kt)("td",{parentName:"tr",align:null},'Root component of the "posts containing tag" page.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blogArchiveComponent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'@theme/BlogArchivePage'")),(0,l.kt)("td",{parentName:"tr",align:null},"Root component of the blog archive page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remarkPlugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Remark plugins passed to MDX.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rehypePlugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Rehype plugins passed to MDX.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"beforeDefaultRemarkPlugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom Remark plugins passed to MDX before the default Docusaurus Remark plugins.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"beforeDefaultRehypePlugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom Rehype plugins passed to MDX before the default Docusaurus Rehype plugins.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"truncateMarker")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RegExp")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/\x3c!--\\s*(truncate)\\s*--\x3e/")),(0,l.kt)("td",{parentName:"tr",align:null},"Truncate marker marking where the summary ends.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showReadingTime")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Show estimated reading time for the blog post.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"readingTime")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ReadingTimeFn")),(0,l.kt)("td",{parentName:"tr",align:null},"The default reading time"),(0,l.kt)("td",{parentName:"tr",align:null},"A callback to customize the reading time number displayed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"authorsMapPath")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'authors.yml'")),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the authors map file, relative to the blog content directory.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"feedOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"See below")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{type: ['rss', 'atom']}")),(0,l.kt)("td",{parentName:"tr",align:null},"Blog feed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"feedOptions.type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{href:"#FeedType"},"FeedType")," ","|"," ",(0,l.kt)("a",{href:"#FeedType"},"FeedType"),"[] ","|"," 'all' ","|"," null")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of feed to be generated. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," to disable generation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"feedOptions.title")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"siteConfig.title")),(0,l.kt)("td",{parentName:"tr",align:null},"Title of the feed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"feedOptions.description")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"`","${siteConfig.title} Blog","`")),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the feed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"feedOptions.copyright")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Copyright message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"feedOptions.language")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," (See ",(0,l.kt)("a",{parentName:"td",href:"http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes"},"documentation")," for possible values)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Language metadata of the feed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sortPosts")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"'descending' ","|"," 'ascending' ")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'descending'")),(0,l.kt)("td",{parentName:"tr",align:null},"Governs the direction of blog post sorting."))))),(0,l.kt)("h3",{id:"types"},"Types"),(0,l.kt)("h4",{id:"EditUrlFn"},(0,l.kt)("inlineCode",{parentName:"h4"},"EditUrlFn")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type EditUrlFunction = (params: {\n  blogDirPath: string;\n  blogPath: string;\n  permalink: string;\n  locale: string;\n}) => string | undefined;\n")),(0,l.kt)("h4",{id:"ReadingTimeFn"},(0,l.kt)("inlineCode",{parentName:"h4"},"ReadingTimeFn")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type ReadingTimeOptions = {\n  wordsPerMinute: number;\n  wordBound: (char: string) => boolean;\n};\n\ntype ReadingTimeCalculator = (params: {\n  content: string;\n  frontMatter?: BlogPostFrontMatter & Record<string, unknown>;\n  options?: ReadingTimeOptions;\n}) => number;\n\ntype ReadingTimeFn = (params: {\n  content: string;\n  frontMatter: BlogPostFrontMatter & Record<string, unknown>;\n  defaultReadingTime: ReadingTimeCalculator;\n}) => number | undefined;\n")),(0,l.kt)("h4",{id:"FeedType"},(0,l.kt)("inlineCode",{parentName:"h4"},"FeedType")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type FeedType = 'rss' | 'atom' | 'json';\n")),(0,l.kt)("h3",{id:"ex-config"},"Example configuration"),(0,l.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Most Docusaurus users configure this plugin through the preset options.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"config-tabs","config-tabs":!0},"// Preset Options: blog\n// Plugin Options: @docusaurus/plugin-content-blog\n\nconst config = {\n  path: 'blog',\n  // Simple use-case: string editUrl\n  // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',\n  // Advanced use-case: functional editUrl\n  editUrl: ({locale, blogDirPath, blogPath, permalink}) =>\n    `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`,\n  editLocalizedFiles: false,\n  blogTitle: 'Blog title',\n  blogDescription: 'Blog',\n  blogSidebarCount: 5,\n  blogSidebarTitle: 'All our posts',\n  routeBasePath: 'blog',\n  include: ['**/*.{md,mdx}'],\n  exclude: [\n    '**/_*.{js,jsx,ts,tsx,md,mdx}',\n    '**/_*/**',\n    '**/*.test.{js,jsx,ts,tsx}',\n    '**/__tests__/**',\n  ],\n  postsPerPage: 10,\n  blogListComponent: '@theme/BlogListPage',\n  blogPostComponent: '@theme/BlogPostPage',\n  blogTagsListComponent: '@theme/BlogTagsListPage',\n  blogTagsPostsComponent: '@theme/BlogTagsPostsPage',\n  remarkPlugins: [require('remark-math')],\n  rehypePlugins: [],\n  beforeDefaultRemarkPlugins: [],\n  beforeDefaultRehypePlugins: [],\n  truncateMarker: /\x3c!--\\s*(truncate)\\s*--\x3e/,\n  showReadingTime: true,\n  feedOptions: {\n    type: '',\n    title: '',\n    description: '',\n    copyright: '',\n    language: undefined,\n  },\n};\n")),(0,l.kt)("h2",{id:"markdown-front-matter"},"Markdown front matter"),(0,l.kt)("p",null,"Markdown documents can use the following Markdown front matter metadata fields, enclosed by a line ",(0,l.kt)("inlineCode",{parentName:"p"},"---")," on either side."),(0,l.kt)("p",null,"Accepted fields:"),(0,l.kt)(m,{mdxType:"APITable"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"authors")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Authors")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"List of blog post authors (or unique author). Read the ",(0,l.kt)("a",{parentName:"td",href:"/docs/blog#blog-post-authors"},(0,l.kt)("inlineCode",{parentName:"a"},"authors")," guide")," for more explanations. Prefer ",(0,l.kt)("inlineCode",{parentName:"td"},"authors")," over the ",(0,l.kt)("inlineCode",{parentName:"td"},"author_*")," front matter fields, even for single author blog posts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"author")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f Prefer using ",(0,l.kt)("inlineCode",{parentName:"td"},"authors"),". The blog post author's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"author_url")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f Prefer using ",(0,l.kt)("inlineCode",{parentName:"td"},"authors"),". The URL that the author's name will be linked to. This could be a GitHub, Twitter, Facebook profile URL, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"author_image_url")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f Prefer using ",(0,l.kt)("inlineCode",{parentName:"td"},"authors"),". The URL to the author's thumbnail image.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"author_title")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f Prefer using ",(0,l.kt)("inlineCode",{parentName:"td"},"authors"),". A description of the author.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Markdown title"),(0,l.kt)("td",{parentName:"tr",align:null},"The blog post title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"File name or file creation time"),(0,l.kt)("td",{parentName:"tr",align:null},"The blog post creation date. If not specified, this can be extracted from the file or folder name, e.g, ",(0,l.kt)("inlineCode",{parentName:"td"},"2021-04-15-blog-post.mdx"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"2021-04-15-blog-post/index.mdx"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"2021/04/15/blog-post.mdx"),". Otherwise, it is the Markdown file creation time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tags")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tag[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"A list of strings or objects of two string fields ",(0,l.kt)("inlineCode",{parentName:"td"},"label")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"permalink")," to tag to your post.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"draft")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean flag to indicate that the blog post is work-in-progress. Draft blog posts will only be displayed during development.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hide_table_of_contents")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to hide the table of contents to the right.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toc_min_heading_level")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum heading level shown in the table of contents. Must be between 2 and 6 and lower or equal to the max value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toc_max_heading_level")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3")),(0,l.kt)("td",{parentName:"tr",align:null},"The max heading level shown in the table of contents. Must be between 2 and 6.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keywords")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Keywords meta tag, which will become the ",(0,l.kt)("inlineCode",{parentName:"td"},'<meta name="keywords" content="keyword1,keyword2,..."/>')," in ",(0,l.kt)("inlineCode",{parentName:"td"},"<head>"),", used by search engines.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The first line of Markdown content"),(0,l.kt)("td",{parentName:"tr",align:null},"The description of your document, which will become the ",(0,l.kt)("inlineCode",{parentName:"td"},'<meta name="description" content="..."/>')," and ",(0,l.kt)("inlineCode",{parentName:"td"},'<meta property="og:description" content="..."/>')," in ",(0,l.kt)("inlineCode",{parentName:"td"},"<head>"),", used by search engines.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Cover or thumbnail image that will be used when displaying the link to your post.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"slug")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"File path"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to customize the blog post URL (",(0,l.kt)("inlineCode",{parentName:"td"},"/<routeBasePath>/<slug>"),"). Support multiple patterns: ",(0,l.kt)("inlineCode",{parentName:"td"},"slug: my-blog-post"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"slug: /my/path/to/blog/post"),", slug: ",(0,l.kt)("inlineCode",{parentName:"td"},"/"),"."))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type Tag = string | {label: string; permalink: string};\n\n// An author key references an author from the global plugin authors.yml file\ntype AuthorKey = string;\n\ntype Author = {\n  key?: AuthorKey;\n  name: string;\n  title?: string;\n  url?: string;\n  image_url?: string;\n};\n\n// The front matter authors field allows various possible shapes\ntype Authors = AuthorKey | Author | (AuthorKey | Author)[];\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"---\ntitle: Welcome Docusaurus v2\nauthors:\n  - slorber\n  - yangshun\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\ntags: [hello, docusaurus-v2]\ndescription: This is my first post on Docusaurus 2.\nimage: https://i.imgur.com/mErPwqL.png\nhide_table_of_contents: false\n---\n\nA Markdown blog post\n")),(0,l.kt)("h2",{id:"i18n"},"i18n"),(0,l.kt)("p",null,"Read the ",(0,l.kt)("a",{parentName:"p",href:"/docs/i18n/introduction"},"i18n introduction")," first."),(0,l.kt)("h3",{id:"translation-files-location"},"Translation files location"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Base path"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-blog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Multi-instance path"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-blog-[pluginId]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"JSON files"),": extracted with ",(0,l.kt)("a",{parentName:"li",href:"/docs/cli#docusaurus-write-translations-sitedir"},(0,l.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Markdown files"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"website/i18n/[locale]/docusaurus-plugin-content-blog"))),(0,l.kt)("h3",{id:"example-file-system-structure"},"Example file-system structure"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"website/i18n/[locale]/docusaurus-plugin-content-blog\n\u2502\n\u2502 # translations for website/blog\n\u251c\u2500\u2500 authors.yml\n\u251c\u2500\u2500 first-blog-post.md\n\u251c\u2500\u2500 second-blog-post.md\n\u2502\n\u2502 # translations for the plugin options that will be rendered\n\u2514\u2500\u2500 options.json\n")))}g.isMDXComponent=!0}}]);