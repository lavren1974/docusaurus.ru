"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[13],{4118:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(3366),n=a(7294),l=a(6010),i=a(8277),c=a(9960),s=a(5999),m="sidebar_TMXw",u="sidebarItemTitle_V4zb",o="sidebarItemList_uHd5",g="sidebarItem_spIe",d="sidebarItemLink_eqrF",b="sidebarItemLinkActive_XZSJ";function E(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(o,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:b},e.title))})))))}var p=a(3102);function v(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function f(e){return n.createElement(p.Zo,{component:v,props:e})}var h=a(7524);function _(e){var t=e.sidebar,a=(0,h.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(f,{sidebar:t}):n.createElement(E,{sidebar:t}):null}var k=["sidebar","toc","children"];function N(e){var t=e.sidebar,a=e.toc,c=e.children,s=(0,r.Z)(e,k),m=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(_,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&n.createElement("div",{className:"col col--2"},a))))}},3881:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a(7294),n=a(4118),l=a(7774),i=a(5999);var c="tag_Shcx";function s(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(l.Z,e))}))),r.createElement("hr",null))}function m(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],r=t[0];return a.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return r.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return r.createElement(s,{key:e.letter,letterEntry:e})})))}var u=a(1944),o=a(5281),g=a(4739),d=a(6010);function b(e){var t=e.tags,a=e.sidebar,l=(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return r.createElement(u.FG,{className:(0,d.Z)(o.k.wrapper.blogPages,o.k.page.blogTagsListPage)},r.createElement(u.d,{title:l}),r.createElement(g.Z,{tag:"blog_tags_list"}),r.createElement(n.Z,{sidebar:a},r.createElement("h1",null,l),r.createElement(m,{tags:t})))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(6010),l=a(9960),i="tag_hD8n",c="tagRegular_D6E_",s="tagWithCount_i0QQ";function m(e){var t=e.permalink,a=e.label,m=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(i,m?s:c)},a,m&&r.createElement("span",null,m))}}}]);