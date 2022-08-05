"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[8519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"links",description:"Links to other pages in Markdown",slug:"/markdown-features/links"},i="Markdown links",l={unversionedId:"guides/markdown-features/links",id:"guides/markdown-features/links",title:"Markdown links",description:"Links to other pages in Markdown",source:"@site/docs/guides/markdown-features/markdown-features-links.md",sourceDirName:"guides/markdown-features",slug:"/markdown-features/links",permalink:"/docs/markdown-features/links",draft:!1,tags:[],version:"current",frontMatter:{id:"links",description:"Links to other pages in Markdown",slug:"/markdown-features/links"},sidebar:"docs",previous:{title:"Assets",permalink:"/docs/markdown-features/assets"},next:{title:"MDX Plugins",permalink:"/docs/markdown-features/plugins"}},s={},d=[],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"markdown-links"},"Markdown links"),(0,a.kt)("p",null,"There are two ways of adding a link to another page: through a ",(0,a.kt)("strong",{parentName:"p"},"URL path")," and a ",(0,a.kt)("strong",{parentName:"p"},"file path"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"- [URL path to another document](./installation)\n- [file path to another document](./installation.md)\n")),(0,a.kt)("p",null,"URL paths are unprocessed by Docusaurus, and you can see them as directly rendering to ",(0,a.kt)("inlineCode",{parentName:"p"},'<a href="./installation">'),", i.e. it will be resolved according to the page's URL location, rather than its file-system location."),(0,a.kt)("p",null,"If you want to reference another Markdown file ",(0,a.kt)("strong",{parentName:"p"},"included by the same plugin"),", you could use the relative path of the document you want to link to. Docusaurus' Markdown loader will convert the file path to the target file's URL path (and hence remove the ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," extension)."),(0,a.kt)("p",null,"For example, if you are in ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/folder/doc1.md")," and you want to reference ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/folder/doc2.md"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/folder/subfolder/doc3.md")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/otherFolder/doc4.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/folder/doc1.md"',title:'"docs/folder/doc1.md"'},"I am referencing a [document](doc2.md).\n\nReference to another [document in a subfolder](subfolder/doc3.md).\n\n[Relative document](../otherFolder/doc4.md) referencing works as well.\n")),(0,a.kt)("p",null,"Relative file paths are resolved against the current file's directory. Absolute file paths, on the other hand, are resolved relative to the ",(0,a.kt)("strong",{parentName:"p"},"content root"),", usually ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"blog/"),", or ",(0,a.kt)("a",{parentName:"p",href:"/docs/i18n/tutorial"},"localized ones")," like ",(0,a.kt)("inlineCode",{parentName:"p"},"i18n/zh-Hans/plugin-content-docs/current"),"."),(0,a.kt)("p",null,"Absolute file paths can also be relative to the site directory. However, beware that links that begin with ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs/")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/blog/")," are ",(0,a.kt)("strong",{parentName:"p"},"not portable")," as you would need to manually update them if you create new doc versions or localize them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"You can write [links](/otherFolder/doc4.md) relative to the content root (`/docs/`).\n\nYou can also write [links](/docs/otherFolder/doc4.md) relative to the site directory, but it's not recommended.\n")),(0,a.kt)("p",null,"Using relative ",(0,a.kt)("em",{parentName:"p"},"file")," paths (with ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," extensions) instead of relative ",(0,a.kt)("em",{parentName:"p"},"URL")," links provides the following benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Links will keep working on the GitHub interface and many Markdown editors"),(0,a.kt)("li",{parentName:"ul"},"You can customize the files' slugs without having to update all the links"),(0,a.kt)("li",{parentName:"ul"},"Moving files around the folders can be tracked by your editor, and some editors may automatically update file links"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"/docs/versioning"},"versioned doc")," will link to another doc of the exact same version"),(0,a.kt)("li",{parentName:"ul"},"Relative URL links are very likely to break if you update the ",(0,a.kt)("a",{parentName:"li",href:"/docs/api/docusaurus-config#trailingSlash"},(0,a.kt)("inlineCode",{parentName:"a"},"trailingSlash")," config"))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Markdown file references only work when the source and target files are processed by the same plugin instance. This is a technical limitation of our Markdown processing architecture and will be fixed in the future. If you are linking files between plugins (e.g. linking to a doc page from a blog post), you have to use URL links.")))}u.isMDXComponent=!0}}]);