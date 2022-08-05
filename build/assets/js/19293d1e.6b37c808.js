"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[7819],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(g,r(r({ref:n},c),{},{components:t})):o.createElement(g,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=t[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=t(87462),i=(t(67294),t(3905));const a={},r="Plugin Method References",s={unversionedId:"api/plugin-methods/README",id:"api/plugin-methods/README",title:"Plugin Method References",description:"This section is a work in progress. Anchor links or even URLs are not guaranteed to be stable.",source:"@site/docs/api/plugin-methods/README.md",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/",permalink:"/docs/api/plugin-methods/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"docusaurus.config.js",permalink:"/docs/api/docusaurus-config"},next:{title:"Lifecycle APIs",permalink:"/docs/api/plugin-methods/lifecycle-apis"}},l={},u=[{value:"Plugin module",id:"plugin-module",level:2},{value:"Plugin constructor",id:"plugin-constructor",level:2},{value:"<code>context</code>",id:"context",level:3},{value:"<code>options</code>",id:"options",level:3},{value:"Example",id:"example",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugin-method-references"},"Plugin Method References"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This section is a work in progress. Anchor links or even URLs are not guaranteed to be stable.")),(0,i.kt)("p",null,"Plugin APIs are shared by themes and plugins\u2014themes are loaded just like plugins."),(0,i.kt)("h2",{id:"plugin-module"},"Plugin module"),(0,i.kt)("p",null,"Every plugin is imported as a module. The module is expected to have the following members:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"default export"),": the constructor function for the plugin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Named exports"),": the ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/plugin-methods/static-methods"},"static methods")," called before plugins are initialized.")),(0,i.kt)("h2",{id:"plugin-constructor"},"Plugin constructor"),(0,i.kt)("p",null,"The plugin module's default export is a constructor function with the signature ",(0,i.kt)("inlineCode",{parentName:"p"},"(context: LoadContext, options: PluginOptions) => Plugin | Promise<Plugin>"),"."),(0,i.kt)("h3",{id:"context"},(0,i.kt)("inlineCode",{parentName:"h3"},"context")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"context")," is plugin-agnostic, and the same object will be passed into all plugins used for a Docusaurus website. The ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," object contains the following fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type LoadContext = {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n};\n")),(0,i.kt)("h3",{id:"options"},(0,i.kt)("inlineCode",{parentName:"h3"},"options")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"options")," are the ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-plugins#configuring-plugins"},"second optional parameter when the plugins are used"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," are plugin-specific and are specified by users when they use them in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". If there's a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/static-methods#validateOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"validateOptions"))," function exported, the ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," will be validated and normalized beforehand."),(0,i.kt)("p",null,"Alternatively, if a preset contains the plugin, the preset will then be in charge of passing the correct options into the plugin. It is up to the individual plugin to define what options it takes."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here's a mental model for a presumptuous plugin implementation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// A JavaScript function that returns an object.\n// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.\n// `opts` is the user-defined options.\nasync function myPlugin(context, opts) {\n  return {\n    // A compulsory field used as the namespace for directories to cache\n    // the intermediate data for each plugin.\n    // If you're writing your own local plugin, you will want it to\n    // be unique in order not to potentially conflict with imported plugins.\n    // A good way will be to add your own project name within.\n    name: 'docusaurus-my-project-cool-plugin',\n\n    async loadContent() {\n      // The loadContent hook is executed after siteConfig and env has been loaded.\n      // You can return a JavaScript object that will be passed to contentLoaded hook.\n    },\n\n    async contentLoaded({content, actions}) {\n      // The contentLoaded hook is done after loadContent hook is done.\n      // `actions` are set of functional API provided by Docusaurus (e.g. addRoute)\n    },\n\n    async postBuild(props) {\n      // After docusaurus <build> finish.\n    },\n\n    // TODO\n    async postStart(props) {\n      // docusaurus <start> finish\n    },\n\n    // TODO\n    afterDevServer(app, server) {\n      // https://webpack.js.org/configuration/dev-server/#devserverbefore\n    },\n\n    // TODO\n    beforeDevServer(app, server) {\n      // https://webpack.js.org/configuration/dev-server/#devserverafter\n    },\n\n    configureWebpack(config, isServer, utils, content) {\n      // Modify internal webpack config. If returned value is an Object, it\n      // will be merged into the final config using webpack-merge;\n      // If the returned value is a function, it will receive the config as the 1st argument and an isServer flag as the 2nd argument.\n    },\n\n    getPathsToWatch() {\n      // Paths to watch.\n    },\n\n    getThemePath() {\n      // Returns the path to the directory where the theme components can\n      // be found.\n    },\n\n    getClientModules() {\n      // Return an array of paths to the modules that are to be imported\n      // in the client bundle. These modules are imported globally before\n      // React even renders the initial UI.\n    },\n\n    extendCli(cli) {\n      // Register an extra command to enhance the CLI of Docusaurus\n    },\n\n    injectHtmlTags({content}) {\n      // Inject head and/or body HTML tags.\n    },\n\n    async getTranslationFiles({content}) {\n      // Return translation files\n    },\n\n    translateContent({content, translationFiles}) {\n      // translate the plugin content here\n    },\n\n    translateThemeConfig({themeConfig, translationFiles}) {\n      // translate the site themeConfig here\n    },\n\n    async getDefaultCodeTranslationMessages() {\n      // return default theme translations here\n    },\n  };\n}\n\nmyPlugin.validateOptions = ({options, validate}) => {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validationOptions;\n};\n\nmyPlugin.validateThemeConfig = ({themeConfig, validate}) => {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n};\n\nmodule.exports = myPlugin;\n")))}p.isMDXComponent=!0}}]);