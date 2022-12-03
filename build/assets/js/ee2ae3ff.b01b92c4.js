"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[9923],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=i,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return a?r.createElement(m,n(n({ref:t},u),{},{components:a})):r.createElement(m,n({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},29752:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const o={title:"DocSearch migration",authors:[{name:"Cl\xe9ment Vannicatte",title:"Software Engineer @ Algolia",url:"https://github.com/shortcuts",image_url:"https://github.com/shortcuts.png",twitter:"sh0rtcts"},{key:"slorber"}],tags:["search"],image:"./img/social-card.png"},n=void 0,l={permalink:"/blog/2021/11/21/algolia-docsearch-migration",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-11-21-algolia-docsearch-migration/index.md",source:"@site/blog/2021-11-21-algolia-docsearch-migration/index.md",title:"DocSearch migration",description:"DocSearch is migrating to a new, more powerful system, which gives users their own Algolia application and new credentials.",date:"2021-11-21T00:00:00.000Z",formattedDate:"21 \u043d\u043e\u044f\u0431\u0440\u044f 2021 \u0433.",tags:[{label:"search",permalink:"/blog/tags/search"}],readingTime:2.695,hasTruncateMarker:!0,authors:[{name:"Cl\xe9ment Vannicatte",title:"Software Engineer @ Algolia",url:"https://github.com/shortcuts",image_url:"https://github.com/shortcuts.png",twitter:"sh0rtcts",imageURL:"https://github.com/shortcuts.png"},{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",twitter:"sebastienlorber",email:"lorber.sebastien@gmail.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"DocSearch migration",authors:[{name:"Cl\xe9ment Vannicatte",title:"Software Engineer @ Algolia",url:"https://github.com/shortcuts",image_url:"https://github.com/shortcuts.png",twitter:"sh0rtcts",imageURL:"https://github.com/shortcuts.png"},{key:"slorber"}],tags:["search"],image:"./img/social-card.png"},prevItem:{title:"Docusaurus 2021 Recap",permalink:"/blog/2022/01/24/docusaurus-2021-recap"},nextItem:{title:"Announcing Docusaurus 2 Beta",permalink:"/blog/2021/05/12/announcing-docusaurus-two-beta"}},s={image:a(30621).Z,authorsImageUrls:[void 0,void 0]},c=[{value:"Upgrading your Docusaurus site",id:"upgrading-your-docusaurus-site",level:2},{value:"DocSearch has a new home!",id:"docsearch-has-a-new-home",level:2},{value:"What is DocSearch?",id:"what-is-docsearch",level:3},{value:"What is this migration about?",id:"what-is-this-migration-about",level:2},{value:"Motivation",id:"motivation",level:3},{value:"What&#39;s new?",id:"whats-new",level:3},{value:"FAQ",id:"faq",level:2},{value:"I&#39;m using Docusaurus and DocSearch, can I migrate?",id:"im-using-docusaurus-and-docsearch-can-i-migrate",level:3},{value:"Where can I read more about this?",id:"where-can-i-read-more-about-this",level:3},{value:"I received the migration email but the invite expired",id:"i-received-the-migration-email-but-the-invite-expired",level:3},{value:"I have feedback!",id:"i-have-feedback",level:3},{value:"Can I still run my own DocSearch instance?",id:"can-i-still-run-my-own-docsearch-instance",level:3}],u={toc:c};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/"},"DocSearch")," is migrating to a new, more powerful system, which gives users their own Algolia application and new credentials."),(0,i.kt)("p",null,"Docusaurus site owners should upgrade their configuration with ",(0,i.kt)("a",{parentName:"p",href:"#im-using-docusaurus-and-docsearch-can-i-migrate"},"their new credentials")," ",(0,i.kt)("strong",{parentName:"p"},"by February 1, 2022"),", existing search indexes will be frozen and become read-only after this date."),(0,i.kt)("h2",{id:"upgrading-your-docusaurus-site"},"Upgrading your Docusaurus site"),(0,i.kt)("p",null,"In the next few weeks, Docusaurus site owners will receive an email inviting them to join their personal Algolia application."),(0,i.kt)("p",null,"This email will include a new ",(0,i.kt)("inlineCode",{parentName:"p"},"appId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey")," to use in your Docusaurus configuration."),(0,i.kt)("p",null,"The only things you have to do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join the Algolia application (eventually creating a new Algolia account)"),(0,i.kt)("li",{parentName:"ul"},"Update your site configuration.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n  themeConfig: {\n    algolia: {\n      // highlight-start\n      appId: '<NEW_APP_ID>',\n      apiKey: '<NEW_SEARCH_API_KEY>',\n      // highlight-end\n    },\n  },\n};\n\nmodule.exports = config;\n")),(0,i.kt)("admonition",{title:"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"appId")," is now ",(0,i.kt)("strong",{parentName:"p"},"required"),"."),(0,i.kt)("p",{parentName:"admonition"},"These keys are not secrets and can be added to your Git repository.")),(0,i.kt)("h2",{id:"docsearch-has-a-new-home"},"DocSearch has a new home!"),(0,i.kt)("h3",{id:"what-is-docsearch"},"What is DocSearch?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/"},"DocSearch")," is a program created by ",(0,i.kt)("a",{parentName:"p",href:"http://algolia.com/"},"Algolia"),", which offers search to technical documentation of Open Source projects and technical blogs ",(0,i.kt)("strong",{parentName:"p"},"for free"),"."),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/what-is-docsearch/"},"read more here"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/apply"},"apply")," if you'd like to give it a try!"),(0,i.kt)("h2",{id:"what-is-this-migration-about"},"What is this migration about?"),(0,i.kt)("h3",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"With the upcoming stable release of ",(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/DocSearch-v3"},"DocSearch UI"),", we wanted to go further and provide better tooling for our users to improve their search, but also leverage the full potential of Algolia."),(0,i.kt)("h3",{id:"whats-new"},"What's new?"),(0,i.kt)("p",null,"DocSearch now leverages the ",(0,i.kt)("a",{parentName:"p",href:"https://www.algolia.com/products/search-and-discovery/crawler/"},"Algolia Crawler"),", which includes a web interface that will allow you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start, schedule and monitor your crawls"),(0,i.kt)("li",{parentName:"ul"},"Edit your config file from a live editor"),(0,i.kt)("li",{parentName:"ul"},"Test your results with DocSearch v3")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Algolia crawler overview",src:a(66888).Z,width:"3832",height:"1882"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Algolia config editor",src:a(3006).Z,width:"3832",height:"1880"})),(0,i.kt)("p",null,"But also, more Algolia features in ",(0,i.kt)("strong",{parentName:"p"},"your own Algolia app"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Team management"),(0,i.kt)("li",{parentName:"ul"},"Browse and see how your records are indexed in Algolia"),(0,i.kt)("li",{parentName:"ul"},"Try other Algolia features with free trials")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Algolia index overview",src:a(18990).Z,width:"3834",height:"1882"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Algolia index analytics",src:a(71149).Z,width:"3810",height:"1876"})),(0,i.kt)("p",null,"And of course, ",(0,i.kt)("strong",{parentName:"p"},"a lot more, for free"),"."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"im-using-docusaurus-and-docsearch-can-i-migrate"},"I'm using Docusaurus and DocSearch, can I migrate?"),(0,i.kt)("p",null,"At the time we are writing this, we are still at an early stage of the migration. We are doing small batches every week but will increase the load shortly, so please be patient and keep an eye out in your mailbox, you'll be contacted as soon as your Algolia app is ready!"),(0,i.kt)("h3",{id:"where-can-i-read-more-about-this"},"Where can I read more about this?"),(0,i.kt)("p",null,"We wrote a small ",(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/migrating-from-legacy"},"migration guide")," but you'll have more detailed information in the migration email."),(0,i.kt)("h3",{id:"i-received-the-migration-email-but-the-invite-expired"},"I received the migration email but the invite expired"),(0,i.kt)("p",null,"Please contact us via either ",(0,i.kt)("a",{parentName:"p",href:"mailto:docsearch@algolia.com"},"email")," or ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/bRTacwYrfX"},"DocSearch's Discord")," or on ",(0,i.kt)("a",{parentName:"p",href:"https://discordapp.com/invite/docusaurus"},"Docusaurus's Discord #algolia channel")),(0,i.kt)("h3",{id:"i-have-feedback"},"I have feedback!"),(0,i.kt)("p",null,"For any feedback regarding our documentation or the DocSearch UI component, you can open an issue ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/algolia/docsearch/issues"},"on our GitHub repository"),", but also contact us via the methods above."),(0,i.kt)("h3",{id:"can-i-still-run-my-own-docsearch-instance"},"Can I still run my own DocSearch instance?"),(0,i.kt)("p",null,"In favor of the new infrastructure and DocSearch v3, we will no longer maintain our beloved ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/algolia/docsearch-scraper"},"DocSearch scraper")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/algolia/docsearch/tree/master"},"DocSearch v2"),", but the repositories will still be available and open to pull requests."),(0,i.kt)("p",null,"The previous documentation (now called ",(0,i.kt)("inlineCode",{parentName:"p"},"legacy"),") remains available as well as our ",(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/legacy/run-your-own"},(0,i.kt)("inlineCode",{parentName:"a"},"run your own"))," guide."))}h.isMDXComponent=!0},66888:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/crawler-overview-6224cc4c7b20511010652f3f4ed5904e.png"},3006:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/editor-823e50dbed8e508bd5a69c708bab8928.png"},71149:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/index-analytics-f9c27da3900de6206e949736b1cd8101.png"},18990:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/index-overview-ca216346e6eee6881443644b6d7d8fe8.png"},30621:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/social-card-99fd18bd61fee0f631b8c820ef873dd5.png"}}]);