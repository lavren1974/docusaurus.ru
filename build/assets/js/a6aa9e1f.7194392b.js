"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[3089],{9928:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var r=a(67294),n=a(86010),l=a(39962),o=a(35463),i=a(23702),c=a(92506),s=a(42568),m=a(33647),u=a(88389);function g(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.Z)(),{blogDescription:n,blogTitle:i,permalink:c}=t,s="/"===c?a:i;return r.createElement(r.Fragment,null,r.createElement(o.d,{title:s,description:n}),r.createElement(m.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:a,sidebar:n}=e;return r.createElement(c.Z,{sidebar:n},r.createElement(u.Z,{items:a}),r.createElement(s.Z,{metadata:t}))}function d(e){return r.createElement(o.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage)},r.createElement(g,e),r.createElement(p,e))}},42568:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(97325),l=a(23672);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&r.createElement(l.Z,{permalink:o,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},88389:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(79107),l=a(51116);function o(e){let{items:t,component:a=l.Z}=e;return r.createElement(r.Fragment,null,t.map((e=>{let{content:t}=e;return r.createElement(n.n,{key:t.metadata.permalink,content:t},r.createElement(a,null,r.createElement(t,null)))})))}},14526:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(73902);function l(e){return r.createElement(n.Z,e)}},86940:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(90923),n=a(67294);var l=a(86010);const o="tweetQuote_h8Rz",i="avatarImg_b51M";const c={...r.Z,highlight:function(e){let{children:t,color:a}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},TweetQuote:function(e){let{url:t,handle:a,name:r,job:c,children:s}=e;const m="https://unavatar.io/twitter/"+a,u="https://twitter.com/"+a;return n.createElement("figure",{className:o},n.createElement("blockquote",null,n.createElement("a",{href:t,target:"_blank",rel:"noreferrer nofollow"},s)),n.createElement("figcaption",null,n.createElement("a",{href:u,target:"_blank",rel:"noreferrer nofollow"},n.createElement("div",{className:"avatar"},n.createElement("img",{alt:r,className:(0,l.Z)("avatar__photo",i),src:m}),n.createElement("div",{className:(0,l.Z)("avatar__intro")},n.createElement("strong",{className:"avatar__name"},n.createElement("cite",null,r)),n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},c))))))}}}}]);