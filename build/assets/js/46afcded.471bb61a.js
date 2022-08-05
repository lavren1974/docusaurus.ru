"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[9348],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,v=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?o.createElement(v,a(a({ref:n},u),{},{components:t})):o.createElement(v,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},16164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const i={id:"versioning",title:"Versioning"},a=void 0,s={unversionedId:"versioning",id:"versioning",title:"Versioning",description:"You can use the version script to create a new documentation version based on the latest content in the docs directory. That specific set of documentation will then be preserved and accessible even as the documentation in the docs directory changes moving forward.",source:"@site/docs/versioning.md",sourceDirName:".",slug:"/versioning",permalink:"/docs/versioning",draft:!1,tags:[],version:"current",frontMatter:{id:"versioning",title:"Versioning"}},l={},d=[{value:"Directory structure",id:"directory-structure",level:2},{value:"Tagging a new version",id:"tagging-a-new-version",level:3},{value:"Docs",id:"docs",level:2},{value:"Creating new docs",id:"creating-new-docs",level:3},{value:"Linking docs",id:"linking-docs",level:3},{value:"Versions",id:"versions",level:2},{value:"Updating an existing version",id:"updating-an-existing-version",level:3},{value:"Deleting an existing version",id:"deleting-an-existing-version",level:3},{value:"Recommended practices",id:"recommended-practices",level:2},{value:"Figure out the behavior for the &quot;current&quot; version",id:"figure-out-the-behavior-for-the-current-version",level:3},{value:"Version your documentation only when needed",id:"version-your-documentation-only-when-needed",level:3},{value:"Keep the number of versions small",id:"keep-the-number-of-versions-small",level:3},{value:"Use absolute import within the docs",id:"use-absolute-import-within-the-docs",level:3},{value:"Global or versioned colocated assets",id:"global-or-versioned-colocated-assets",level:3}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use the version script to create a new documentation version based on the latest content in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," directory. That specific set of documentation will then be preserved and accessible even as the documentation in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," directory changes moving forward."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Think about it before starting to version your documentation - it can become difficult for contributors to help improve it!")),(0,r.kt)("p",null,"Most of the time, you don't need versioning as it will just increase your build time, and introduce complexity to your codebase. Versioning is ",(0,r.kt)("strong",{parentName:"p"},"best suited for websites with high-traffic and rapid changes to documentation between versions"),". If your documentation rarely changes, don't add versioning to your documentation."),(0,r.kt)("p",null,"To better understand how versioning works and see if it suits your needs, you can read on below."),(0,r.kt)("h2",{id:"directory-structure"},"Directory structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"website\n\u251c\u2500\u2500 sidebars.json        # sidebar for master (next) version\n\u251c\u2500\u2500 docs                 # docs directory for master (next) version\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2514\u2500\u2500 bar.md       # https://mysite.com/docs/next/foo/bar\n\u2502   \u2514\u2500\u2500 hello.md         # https://mysite.com/docs/next/hello\n\u251c\u2500\u2500 versions.json        # file to indicate what versions are available\n\u251c\u2500\u2500 versioned_docs\n\u2502   \u251c\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/foo/bar\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251c\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/1.0.0/foo/bar\n\u2502       \u2514\u2500\u2500 hello.md\n\u251c\u2500\u2500 versioned_sidebars\n\u2502   \u251c\u2500\u2500 version-1.1.0-sidebars.json\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n\u251c\u2500\u2500 docusaurus.config.js\n\u2514\u2500\u2500 package.json\n")),(0,r.kt)("p",null,"The table below explains how a versioned file maps to its version and the generated URL."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.0.0/hello.md")),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"/docs/1.0.0/hello")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"versioned_docs/version-1.1.0/hello.md")),(0,r.kt)("td",{parentName:"tr",align:null},"1.1.0 (latest)"),(0,r.kt)("td",{parentName:"tr",align:null},"/docs/hello")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"docs/hello.md")),(0,r.kt)("td",{parentName:"tr",align:null},"next"),(0,r.kt)("td",{parentName:"tr",align:null},"/docs/next/hello")))),(0,r.kt)("h3",{id:"tagging-a-new-version"},"Tagging a new version"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, make sure your content in the ",(0,r.kt)("inlineCode",{parentName:"li"},"docs")," directory is ready to be frozen as a version. A version always should be based from master."),(0,r.kt)("li",{parentName:"ol"},"Enter a new version number.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm run docusaurus docs:version 1.1.0\n")),(0,r.kt)("p",null,"When tagging a new version, the document versioning mechanism will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the full ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/")," folder contents into a new ",(0,r.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-<version>/")," folder."),(0,r.kt)("li",{parentName:"ul"},"Create a versioned sidebars file based from your current ",(0,r.kt)("a",{parentName:"li",href:"/docs/docs-introduction#sidebar"},"sidebar")," configuration (if it exists) - saved as ",(0,r.kt)("inlineCode",{parentName:"li"},"versioned_sidebars/version-<version>-sidebars.json"),"."),(0,r.kt)("li",{parentName:"ul"},"Append the new version number to ",(0,r.kt)("inlineCode",{parentName:"li"},"versions.json"),".")),(0,r.kt)("h2",{id:"docs"},"Docs"),(0,r.kt)("h3",{id:"creating-new-docs"},"Creating new docs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Place the new file into the corresponding version folder."),(0,r.kt)("li",{parentName:"ol"},"Include the reference for the new file into the corresponding sidebar file, according to version number.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Master docs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# The new file.\ndocs/new.md\n\n# Edit the corresponding sidebar file.\nsidebar.js\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Older docs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# The new file.\nversioned_docs/version-1.0.0/new.md\n\n# Edit the corresponding sidebar file.\nversioned_sidebars/version-1.0.0-sidebars.json\n")),(0,r.kt)("h3",{id:"linking-docs"},"Linking docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remember to include the ",(0,r.kt)("inlineCode",{parentName:"li"},".md")," extension."),(0,r.kt)("li",{parentName:"ul"},"Files will be linked to correct corresponding version."),(0,r.kt)("li",{parentName:"ul"},"Relative paths work as well.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"The [@hello](hello.md#paginate) document is great!\n\nSee the [Tutorial](../getting-started/tutorial.md) for more info.\n")),(0,r.kt)("h2",{id:"versions"},"Versions"),(0,r.kt)("p",null,"Each directory in ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs/")," will represent a documentation version."),(0,r.kt)("h3",{id:"updating-an-existing-version"},"Updating an existing version"),(0,r.kt)("p",null,"You can update multiple docs versions at the same time because each directory in ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs/")," represents specific routes when published."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edit any file."),(0,r.kt)("li",{parentName:"ol"},"Commit and push changes."),(0,r.kt)("li",{parentName:"ol"},"It will be published to the version.")),(0,r.kt)("p",null,"Example: When you change any file in ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-2.6/"),", it will only affect the docs for version ",(0,r.kt)("inlineCode",{parentName:"p"},"2.6"),"."),(0,r.kt)("h3",{id:"deleting-an-existing-version"},"Deleting an existing version"),(0,r.kt)("p",null,"You can delete/remove versions as well."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove the version from ",(0,r.kt)("inlineCode",{parentName:"li"},"versions.json"),".")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"{4}","{4}":!0},'[\n  "2.0.0",\n  "1.9.0",\n- "1.8.0"\n]\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Delete the versioned docs directory. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.8.0"),"."),(0,r.kt)("li",{parentName:"ol"},"Delete the versioned sidebars file. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"versioned_sidebars/version-1.8.0-sidebars.json"),".")),(0,r.kt)("h2",{id:"recommended-practices"},"Recommended practices"),(0,r.kt)("h3",{id:"figure-out-the-behavior-for-the-current-version"},'Figure out the behavior for the "current" version'),(0,r.kt)("p",null,'The "current" version is the version name for the ',(0,r.kt)("inlineCode",{parentName:"p"},"./docs")," folder."),(0,r.kt)("p",null,"There are different ways to manage versioning, but two very common patterns are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You release v1, and start immediately working on v2 (including its docs)"),(0,r.kt)("li",{parentName:"ul"},"You release v1, and will maintain it for some time before thinking about v2.")),(0,r.kt)("p",null,"Docusaurus defaults work great for the first usecase."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For the 2nd usecase"),": if you release v1 and don't plan to work on v2 anytime soon, instead of versioning v1 and having to maintain the docs in 2 folders (",(0,r.kt)("inlineCode",{parentName:"p"},"./docs")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"./versioned_docs/version-1.0.0"),"), you may consider using the following configuration instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lastVersion": "current",\n  "versions": {\n    "current": {\n      "label": "1.0.0",\n      "path": "1.0.0"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The docs in ",(0,r.kt)("inlineCode",{parentName:"p"},"./docs")," will be served at ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/1.0.0")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/next"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0")," will become the default version we link to in the navbar dropdown, and you will only need to maintain a single ",(0,r.kt)("inlineCode",{parentName:"p"},"./docs")," folder."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-content-docs"},"docs plugin configuration")," for more details."),(0,r.kt)("h3",{id:"version-your-documentation-only-when-needed"},"Version your documentation only when needed"),(0,r.kt)("p",null,"For example, you are building a documentation for your npm package ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and you are currently in version 1.0.0. You then release a patch version for a minor bug fix and it's now 1.0.1."),(0,r.kt)("p",null,"Should you cut a new documentation version 1.0.1? ",(0,r.kt)("strong",{parentName:"p"},"You probably shouldn't"),". 1.0.1 and 1.0.0 docs shouldn't differ according to semver because there are no new features!. Cutting a new version for it will only just create unnecessary duplicated files."),(0,r.kt)("h3",{id:"keep-the-number-of-versions-small"},"Keep the number of versions small"),(0,r.kt)("p",null,"As a good rule of thumb, try to keep the number of your versions below 10. ",(0,r.kt)("strong",{parentName:"p"},"It is very likely")," that you will have a lot of obsolete versioned documentation that nobody even reads anymore. For example, ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/versions"},"Jest")," is currently in version ",(0,r.kt)("inlineCode",{parentName:"p"},"24.9"),", and only maintains several latest documentation version with the lowest being ",(0,r.kt)("inlineCode",{parentName:"p"},"22.X"),". Keep it small \ud83d\ude0a"),(0,r.kt)("h3",{id:"use-absolute-import-within-the-docs"},"Use absolute import within the docs"),(0,r.kt)("p",null,"Don't use relative paths import within the docs. Because when we cut a version the paths no longer work (the nesting level is different, among other reasons). You can utilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"@site")," alias provided by docusaurus, that points to the ",(0,r.kt)("inlineCode",{parentName:"p"},"website")," directory. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- import Foo from '../src/components/Foo';\n+ import Foo from '@site/src/components/Foo';\n")),(0,r.kt)("h3",{id:"global-or-versioned-colocated-assets"},"Global or versioned colocated assets"),(0,r.kt)("p",null,"You should decide if assets like images and files are per version or shared between versions"),(0,r.kt)("p",null,"If your assets should be versioned, put them in the docs version, and use relative paths:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"![img alt](./myImage.png)\n\n[download this file](./file.pdf)\n")),(0,r.kt)("p",null,"If your assets are global, put them in ",(0,r.kt)("inlineCode",{parentName:"p"},"/static")," and use absolute paths:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"![img alt](/myImage.png)\n\n[download this file](/file.pdf)\n")))}c.isMDXComponent=!0}}]);