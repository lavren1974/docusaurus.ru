"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[6315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(67294),i=n(3905);function o(e){let{children:t="Boom!"}=e;const[n,a]=(0,r.useState)(!1);if(n)throw new Error("Boom!");return r.createElement("button",{type:"button",onClick:()=>a(!0)},t)}const l={id:"docusaurus-core",title:"Docusaurus Client API",sidebar_label:"Client API"},s=void 0,p={unversionedId:"docusaurus-core",id:"docusaurus-core",title:"Docusaurus Client API",description:"Docusaurus provides some APIs on the clients that can be helpful to you when building your site.",source:"@site/docs/docusaurus-core.md",sourceDirName:".",slug:"/docusaurus-core",permalink:"/docs/docusaurus-core",draft:!1,tags:[],version:"current",frontMatter:{id:"docusaurus-core",title:"Docusaurus Client API",sidebar_label:"Client API"},sidebar:"api",previous:{title:"CLI",permalink:"/docs/cli"},next:{title:"docusaurus.config.js",permalink:"/docs/api/docusaurus-config"}},u={},d=[{value:"Components",id:"components",level:2},{value:"<code>&lt;ErrorBoundary /&gt;</code>",id:"errorboundary",level:3},{value:"Props",id:"errorboundary-props",level:4},{value:"<code>&lt;Head/&gt;</code>",id:"head",level:3},{value:"<code>&lt;Link/&gt;</code>",id:"link",level:3},{value:"<code>to</code>: string",id:"to-string",level:4},{value:"<code>&lt;Redirect/&gt;</code>",id:"redirect",level:3},{value:"<code>&lt;BrowserOnly/&gt;</code>",id:"browseronly",level:3},{value:"Props",id:"browseronly-props",level:4},{value:"Example with code",id:"browseronly-example-code",level:4},{value:"Example with a library",id:"browseronly-example-library",level:4},{value:"<code>&lt;Interpolate/&gt;</code>",id:"interpolate",level:3},{value:"Props",id:"interpolate-props",level:4},{value:"<code>&lt;Translate/&gt;</code>",id:"translate",level:3},{value:"Props",id:"translate-props",level:4},{value:"Example",id:"example",level:4},{value:"Hooks",id:"hooks",level:2},{value:"<code>useDocusaurusContext</code>",id:"useDocusaurusContext",level:3},{value:"<code>useIsBrowser</code>",id:"useIsBrowser",level:3},{value:"<code>useBaseUrl</code>",id:"useBaseUrl",level:3},{value:"Options",id:"options",level:4},{value:"Example usage:",id:"example-usage",level:4},{value:"<code>useBaseUrlUtils</code>",id:"useBaseUrlUtils",level:3},{value:"<code>useGlobalData</code>",id:"useGlobalData",level:3},{value:"<code>usePluginData</code>",id:"usePluginData",level:3},{value:"<code>useAllPluginInstancesData</code>",id:"useAllPluginInstancesData",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>interpolate</code>",id:"interpolate-1",level:3},{value:"Signature",id:"signature",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>translate</code>",id:"translate-imperative",level:3},{value:"Signature",id:"signature-1",level:4},{value:"Example",id:"example-2",level:4},{value:"Modules",id:"modules",level:2},{value:"<code>ExecutionEnvironment</code>",id:"executionenvironment",level:3},{value:"<code>constants</code>",id:"constants",level:3}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docusaurus provides some APIs on the clients that can be helpful to you when building your site."),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("h3",{id:"errorboundary"},(0,i.kt)("inlineCode",{parentName:"h3"},"<ErrorBoundary />")),(0,i.kt)("p",null,"This component creates a ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"React error boundary"),"."),(0,i.kt)("p",null,"Use it to wrap components that might throw, and display a fallback when that happens instead of crashing the whole app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ErrorBoundary from '@docusaurus/ErrorBoundary';\n\nconst SafeComponent = () => (\n  <ErrorBoundary\n    fallback={({error, tryAgain}) => (\n      <div>\n        <p>This component crashed because of error: {error.message}.</p>\n        <button onClick={tryAgain}>Try Again!</button>\n      </div>\n    )}>\n    <SomeDangerousComponentThatMayThrow />\n  </ErrorBoundary>\n);\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To see it in action, click here: ",(0,i.kt)(o,{mdxType:"ErrorBoundaryTestButton"}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Docusaurus uses this component to catch errors within the theme's layout, and also within the entire app.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This component doesn't catch build-time errors and only protects against client-side render errors that can happen when using stateful React components.")),(0,i.kt)("h4",{id:"errorboundary-props"},"Props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fallback"),": a React component. The error boundary will render the component with two props: ",(0,i.kt)("inlineCode",{parentName:"li"},"error"),", the error that was caught, and ",(0,i.kt)("inlineCode",{parentName:"li"},"tryAgain"),", a function (",(0,i.kt)("inlineCode",{parentName:"li"},"() => void"),") callback to reset the error in the component and try rendering it again.")),(0,i.kt)("h3",{id:"head"},(0,i.kt)("inlineCode",{parentName:"h3"},"<Head/>")),(0,i.kt)("p",null,"This reusable React component will manage all of your changes to the document head. It takes plain HTML tags and outputs plain HTML tags and is beginner-friendly. It is a wrapper around ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nfl/react-helmet"},"React Helmet"),"."),(0,i.kt)("p",null,"Usage Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\n// highlight-next-line\nimport Head from \'@docusaurus/Head\';\n\nconst MySEO = () => (\n  // highlight-start\n  <Head>\n    <meta property="og:description" content="My custom description" />\n    <meta charSet="utf-8" />\n    <title>My Title</title>\n    <link rel="canonical" href="http://mysite.com/example" />\n  </Head>\n  // highlight-end\n);\n')),(0,i.kt)("p",null,"Nested or latter components will override duplicate usages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Parent>\n  {/* highlight-start */}\n  <Head>\n    <title>My Title</title>\n    <meta name="description" content="Helmet application" />\n  </Head>\n  {/* highlight-end */}\n  <Child>\n    {/* highlight-start */}\n    <Head>\n      <title>Nested Title</title>\n      <meta name="description" content="Nested component" />\n    </Head>\n    {/* highlight-end */}\n  </Child>\n</Parent>\n')),(0,i.kt)("p",null,"Outputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <title>Nested Title</title>\n  <meta name="description" content="Nested component" />\n</head>\n')),(0,i.kt)("h3",{id:"link"},(0,i.kt)("inlineCode",{parentName:"h3"},"<Link/>")),(0,i.kt)("p",null,"This component enables linking to internal pages as well as a powerful performance feature called preloading. Preloading is used to prefetch resources so that the resources are fetched by the time the user navigates with this component. We use an ",(0,i.kt)("inlineCode",{parentName:"p"},"IntersectionObserver")," to fetch a low-priority request when the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link>")," is in the viewport and then use an ",(0,i.kt)("inlineCode",{parentName:"p"},"onMouseOver")," event to trigger a high-priority request when it is likely that a user will navigate to the requested resource."),(0,i.kt)("p",null,"The component is a wrapper around react-router\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link>")," component that adds useful enhancements specific to Docusaurus. All props are passed through to react-router\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link>")," component."),(0,i.kt)("p",null,"External links also work, and automatically have these props: ",(0,i.kt)("inlineCode",{parentName:"p"},'target="_blank" rel="noopener noreferrer"'),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// highlight-next-line\nimport Link from '@docusaurus/Link';\n\nconst Page = () => (\n  <div>\n    <p>\n      {/* highlight-next-line */}\n      Check out my <Link to=\"/blog\">blog</Link>!\n    </p>\n    <p>\n      {/* highlight-next-line */}\n      Follow me on <Link to=\"https://twitter.com/docusaurus\">Twitter</Link>!\n    </p>\n  </div>\n);\n")),(0,i.kt)("h4",{id:"to-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"to"),": string"),(0,i.kt)("p",null,"The target location to navigate to. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs/introduction"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Link to="/courses" />\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Prefer this component to vanilla ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," tags because Docusaurus does a lot of optimizations (e.g. broken path detection, prefetching, applying base URL...) if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"<Link>"),".")),(0,i.kt)("h3",{id:"redirect"},(0,i.kt)("inlineCode",{parentName:"h3"},"<Redirect/>")),(0,i.kt)("p",null,"Rendering a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Redirect>")," will navigate to a new location. The new location will override the current location in the history stack like server-side redirects (HTTP 3xx) do. You can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://reacttraining.com/react-router/web/api/Redirect"},"React Router's Redirect documentation")," for more info on available props."),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// highlight-next-line\nimport {Redirect} from '@docusaurus/router';\n\nconst Home = () => {\n  // highlight-next-line\n  return <Redirect to=\"/docs/test\" />;\n};\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/router")," implements ",(0,i.kt)("a",{parentName:"p",href:"https://reacttraining.com/react-router/web/guides/quick-start"},"React Router")," and supports its features.")),(0,i.kt)("h3",{id:"browseronly"},(0,i.kt)("inlineCode",{parentName:"h3"},"<BrowserOnly/>")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<BrowserOnly>")," component permits to render React components only in the browser after the React app has hydrated."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use it for integrating with code that can't run in Node.js, because the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," objects are being accessed.")),(0,i.kt)("h4",{id:"browseronly-props"},"Props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"children"),": render function prop returning browser-only JSX. Will not be executed in Node.js"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fallback")," (optional): JSX to render on the server (Node.js) and until React hydration completes.")),(0,i.kt)("h4",{id:"browseronly-example-code"},"Example with code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// highlight-start\nimport BrowserOnly from '@docusaurus/BrowserOnly';\n// highlight-end\n\nconst MyComponent = () => {\n  return (\n    // highlight-start\n    <BrowserOnly>\n      {() => <span>page url = {window.location.href}</span>}\n    </BrowserOnly>\n    // highlight-end\n  );\n};\n")),(0,i.kt)("h4",{id:"browseronly-example-library"},"Example with a library"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// highlight-start\nimport BrowserOnly from '@docusaurus/BrowserOnly';\n// highlight-end\n\nconst MyComponent = (props) => {\n  return (\n    // highlight-start\n    <BrowserOnly fallback={<div>Loading...</div>}>\n      {() => {\n        const LibComponent = require('some-lib').LibComponent;\n        return <LibComponent {...props} />;\n      }}\n    </BrowserOnly>\n    // highlight-end\n  );\n};\n")),(0,i.kt)("h3",{id:"interpolate"},(0,i.kt)("inlineCode",{parentName:"h3"},"<Interpolate/>")),(0,i.kt)("p",null,"A simple interpolation component for text containing dynamic placeholders."),(0,i.kt)("p",null,"The placeholders will be replaced with the provided dynamic values and JSX elements of your choice (strings, links, styled elements...)."),(0,i.kt)("h4",{id:"interpolate-props"},"Props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"children"),": text containing interpolation placeholders like ",(0,i.kt)("inlineCode",{parentName:"li"},"{placeholderName}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values"),": object containing interpolation placeholder values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Link from '@docusaurus/Link';\nimport Interpolate from '@docusaurus/Interpolate';\n\nexport default function VisitMyWebsiteMessage() {\n  return (\n    // highlight-start\n    <Interpolate\n      values={{\n        firstName: 'S\xe9bastien',\n        website: (\n          <Link to=\"https://docusaurus.io\" className=\"my-website-class\">\n            website\n          </Link>\n        ),\n      }}>\n      {'Hello, {firstName}! How are you? Take a look at my {website}'}\n    </Interpolate>\n    // highlight-end\n  );\n}\n")),(0,i.kt)("h3",{id:"translate"},(0,i.kt)("inlineCode",{parentName:"h3"},"<Translate/>")),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"/docs/i18n/introduction"},"localizing your site"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Translate/>")," component will allow providing ",(0,i.kt)("strong",{parentName:"p"},"translation support to React components"),", such as your homepage. The ",(0,i.kt)("inlineCode",{parentName:"p"},"<Translate>")," component supports ",(0,i.kt)("a",{parentName:"p",href:"#interpolate"},"interpolation"),"."),(0,i.kt)("p",null,"The translation strings will statically extracted from your code with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli#docusaurus-write-translations-sitedir"},(0,i.kt)("inlineCode",{parentName:"a"},"docusaurus write-translations"))," CLI and a ",(0,i.kt)("inlineCode",{parentName:"p"},"code.json")," translation file will be created in ",(0,i.kt)("inlineCode",{parentName:"p"},"website/i18n/[locale]"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<Translate/>")," props ",(0,i.kt)("strong",{parentName:"p"},"must be hardcoded strings"),"."),(0,i.kt)("p",{parentName:"admonition"},"Apart from the ",(0,i.kt)("inlineCode",{parentName:"p"},"values")," prop used for interpolation, it is ",(0,i.kt)("strong",{parentName:"p"},"not possible to use variables"),", or the static extraction wouldn't work.")),(0,i.kt)("h4",{id:"translate-props"},"Props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"children"),": untranslated string in the default site locale (can contain ",(0,i.kt)("a",{parentName:"li",href:"#interpolate"},"interpolation placeholders"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": optional value to be used as the key in JSON translation files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": optional text to help the translator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values"),": optional object containing interpolation placeholder values")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/index.js"',title:'"src/pages/index.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\n// highlight-start\nimport Translate from '@docusaurus/Translate';\n// highlight-end\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1>\n        {/* highlight-start */}\n        <Translate\n          id=\"homepage.title\"\n          description=\"The homepage welcome message\">\n          Welcome to my website\n        </Translate>\n        {/* highlight-end */}\n      </h1>\n      <main>\n        {/* highlight-start */}\n        <Translate values={{firstName: 'S\xe9bastien'}}>\n          {'Welcome, {firstName}! How are you?'}\n        </Translate>\n        {/* highlight-end */}\n      </main>\n    </Layout>\n  );\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can even omit the children prop and specify a translation string in your ",(0,i.kt)("inlineCode",{parentName:"p"},"code.json")," file manually after running the ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus write-translations")," CLI command."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Translate id="homepage.title" />\n'))),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("h3",{id:"useDocusaurusContext"},(0,i.kt)("inlineCode",{parentName:"h3"},"useDocusaurusContext")),(0,i.kt)("p",null,"React hook to access Docusaurus Context. The context contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"siteConfig")," object from ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/docusaurus-config"},"docusaurus.config.js")," and some additional site metadata."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type PluginVersionInformation =\n  | {readonly type: 'package'; readonly version?: string}\n  | {readonly type: 'project'}\n  | {readonly type: 'local'}\n  | {readonly type: 'synthetic'};\n\ntype SiteMetadata = {\n  readonly docusaurusVersion: string;\n  readonly siteVersion?: string;\n  readonly pluginVersions: Record<string, PluginVersionInformation>;\n};\n\ntype I18nLocaleConfig = {\n  label: string;\n  direction: string;\n};\n\ntype I18n = {\n  defaultLocale: string;\n  locales: [string, ...string[]];\n  currentLocale: string;\n  localeConfigs: Record<string, I18nLocaleConfig>;\n};\n\ntype DocusaurusContext = {\n  siteConfig: DocusaurusConfig;\n  siteMetadata: SiteMetadata;\n  globalData: Record<string, unknown>;\n  i18n: I18n;\n  codeTranslations: Record<string, string>;\n};\n")),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst MyComponent = () => {\n  // highlight-next-line\n  const {siteConfig, siteMetadata} = useDocusaurusContext();\n  return (\n    <div>\n      {/* highlight-start */}\n      <h1>{siteConfig.title}</h1>\n      <div>{siteMetadata.siteVersion}</div>\n      <div>{siteMetadata.docusaurusVersion}</div>\n      {/* highlight-end */}\n    </div>\n  );\n};\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"siteConfig")," object only contains ",(0,i.kt)("strong",{parentName:"p"},"serializable values")," (values that are preserved after ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),"). Functions, regexes, etc. would be lost on the client side.")),(0,i.kt)("h3",{id:"useIsBrowser"},(0,i.kt)("inlineCode",{parentName:"h3"},"useIsBrowser")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," when the React app has successfully hydrated in the browser."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Use this hook instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof windows !== 'undefined'")," in React rendering logic."),(0,i.kt)("p",{parentName:"admonition"},"The first client-side render output (in the browser) ",(0,i.kt)("strong",{parentName:"p"},"must be exactly the same")," as the server-side render output (Node.js). Not following this rule can lead to unexpected hydration behaviors, as described in ",(0,i.kt)("a",{parentName:"p",href:"https://www.joshwcomeau.com/react/the-perils-of-rehydration/"},"The Perils of Rehydration"),".")),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport useIsBrowser from '@docusaurus/useIsBrowser';\n\nconst MyComponent = () => {\n  // highlight-start\n  const isBrowser = useIsBrowser();\n  // highlight-end\n  return <div>{isBrowser ? 'Client' : 'Server'}</div>;\n};\n")),(0,i.kt)("h3",{id:"useBaseUrl"},(0,i.kt)("inlineCode",{parentName:"h3"},"useBaseUrl")),(0,i.kt)("p",null,"React hook to prepend your site ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl")," to a string."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Don't use it for regular links!")),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/baseUrl/")," prefix is automatically added to all ",(0,i.kt)("strong",{parentName:"p"},"absolute paths")," by default:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Markdown: ",(0,i.kt)("inlineCode",{parentName:"li"},"[link](/my/path)")," will link to ",(0,i.kt)("inlineCode",{parentName:"li"},"/baseUrl/my/path")),(0,i.kt)("li",{parentName:"ul"},"React: ",(0,i.kt)("inlineCode",{parentName:"li"},'<Link to="/my/path/">link</Link>')," will link to ",(0,i.kt)("inlineCode",{parentName:"li"},"/baseUrl/my/path")))),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type BaseUrlOptions = {\n  forcePrependBaseUrl: boolean;\n  absolute: boolean;\n};\n")),(0,i.kt)("h4",{id:"example-usage"},"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\nconst SomeImage = () => {\n  // highlight-start\n  const imgSrc = useBaseUrl('/img/myImage.png');\n  // highlight-end\n  return <img src={imgSrc} />;\n};\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In most cases, you don't need ",(0,i.kt)("inlineCode",{parentName:"p"},"useBaseUrl"),"."),(0,i.kt)("p",{parentName:"admonition"},"Prefer a ",(0,i.kt)("inlineCode",{parentName:"p"},"require()")," call for ",(0,i.kt)("a",{parentName:"p",href:"/docs/markdown-features/assets"},"assets"),":"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<img src={require('@site/static/img/myImage.png').default} />\n"))),(0,i.kt)("h3",{id:"useBaseUrlUtils"},(0,i.kt)("inlineCode",{parentName:"h3"},"useBaseUrlUtils")),(0,i.kt)("p",null,"Sometimes ",(0,i.kt)("inlineCode",{parentName:"p"},"useBaseUrl")," is not good enough. This hook return additional utils related to your site's base url."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withBaseUrl"),": useful if you need to add base URLs to multiple URLs at once.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport {useBaseUrlUtils} from '@docusaurus/useBaseUrl';\n\nconst Component = () => {\n  const urls = ['/a', '/b'];\n  // highlight-start\n  const {withBaseUrl} = useBaseUrlUtils();\n  const urlsWithBaseUrl = urls.map(withBaseUrl);\n  // highlight-end\n  return <div>{/* ... */}</div>;\n};\n")),(0,i.kt)("h3",{id:"useGlobalData"},(0,i.kt)("inlineCode",{parentName:"h3"},"useGlobalData")),(0,i.kt)("p",null,"React hook to access Docusaurus global data created by all the plugins."),(0,i.kt)("p",null,"Global data is namespaced by plugin name then by plugin ID."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Plugin ID is only useful when a plugin is used multiple times on the same site. Each plugin instance is able to create its own global data.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'type GlobalData = Record<\n  PluginName,\n  Record<\n    PluginId, // "default" by default\n    any // plugin-specific data\n  >\n>;\n')),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// highlight-next-line\nimport useGlobalData from '@docusaurus/useGlobalData';\n\nconst MyComponent = () => {\n  // highlight-start\n  const globalData = useGlobalData();\n  const myPluginData = globalData['my-plugin']['default'];\n  return <div>{myPluginData.someAttribute}</div>;\n  // highlight-end\n};\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Inspect your site's global data at ",(0,i.kt)("inlineCode",{parentName:"p"},"./docusaurus/globalData.json"))),(0,i.kt)("h3",{id:"usePluginData"},(0,i.kt)("inlineCode",{parentName:"h3"},"usePluginData")),(0,i.kt)("p",null,"Access global data created by a specific plugin instance."),(0,i.kt)("p",null,"This is the most convenient hook to access plugin global data and should be used most of the time."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pluginId")," is optional if you don't use multi-instance plugins."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function usePluginData(\n  pluginName: string,\n  pluginId?: string,\n  options?: {failfast?: boolean},\n);\n")),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// highlight-next-line\nimport {usePluginData} from '@docusaurus/useGlobalData';\n\nconst MyComponent = () => {\n  // highlight-start\n  const myPluginData = usePluginData('my-plugin');\n  return <div>{myPluginData.someAttribute}</div>;\n  // highlight-end\n};\n")),(0,i.kt)("h3",{id:"useAllPluginInstancesData"},(0,i.kt)("inlineCode",{parentName:"h3"},"useAllPluginInstancesData")),(0,i.kt)("p",null,"Access global data created by a specific plugin. Given a plugin name, it returns the data of all the plugins instances of that name, by plugin id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function useAllPluginInstancesData(\n  pluginName: string,\n  options?: {failfast?: boolean},\n);\n")),(0,i.kt)("p",null,"Usage example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// highlight-next-line\nimport {useAllPluginInstancesData} from '@docusaurus/useGlobalData';\n\nconst MyComponent = () => {\n  // highlight-start\n  const allPluginInstancesData = useAllPluginInstancesData('my-plugin');\n  const myPluginData = allPluginInstancesData['default'];\n  return <div>{myPluginData.someAttribute}</div>;\n  // highlight-end\n};\n")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"interpolate-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"interpolate")),(0,i.kt)("p",null,"The imperative counterpart of the ",(0,i.kt)("a",{parentName:"p",href:"#interpolate"},(0,i.kt)("inlineCode",{parentName:"a"},"<Interpolate>"))," component."),(0,i.kt)("h4",{id:"signature"},"Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Simple string interpolation\nfunction interpolate(text: string, values: Record<string, string>): string;\n\n// JSX interpolation\nfunction interpolate(\n  text: string,\n  values: Record<string, ReactNode>,\n): ReactNode;\n")),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// highlight-next-line\nimport {interpolate} from '@docusaurus/Interpolate';\n\nconst message = interpolate('Welcome {firstName}', {firstName: 'S\xe9bastien'});\n")),(0,i.kt)("h3",{id:"translate-imperative"},(0,i.kt)("inlineCode",{parentName:"h3"},"translate")),(0,i.kt)("p",null,"The imperative counterpart of the ",(0,i.kt)("a",{parentName:"p",href:"#translate"},(0,i.kt)("inlineCode",{parentName:"a"},"<Translate>"))," component. Also supporting ",(0,i.kt)("a",{parentName:"p",href:"#interpolate"},"placeholders interpolation"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use the imperative API for the ",(0,i.kt)("strong",{parentName:"p"},"rare cases")," where a ",(0,i.kt)("strong",{parentName:"p"},"component cannot be used"),", such as:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"the page ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," metadata"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"placeholder")," props of form inputs"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-label")," props for accessibility"))),(0,i.kt)("h4",{id:"signature-1"},"Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function translate(\n  translation: {message: string; id?: string; description?: string},\n  values: Record<string, string>,\n): string;\n")),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/index.js"',title:'"src/pages/index.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\n// highlight-next-line\nimport {translate} from '@docusaurus/Translate';\n\nexport default function Home() {\n  return (\n    <Layout\n      // highlight-next-line\n      title={translate({message: 'My page meta title'})}>\n      <img\n        src={'https://docusaurus.io/logo.png'}\n        aria-label={\n          // highlight-start\n          translate(\n            {\n              message: 'The logo of site {siteName}',\n              // Optional\n              id: 'homepage.logo.ariaLabel',\n              description: 'The home page logo aria label',\n            },\n            {siteName: 'Docusaurus'},\n          )\n          // highlight-end\n        }\n      />\n    </Layout>\n  );\n}\n")),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("h3",{id:"executionenvironment"},(0,i.kt)("inlineCode",{parentName:"h3"},"ExecutionEnvironment")),(0,i.kt)("p",null,"A module that exposes a few boolean variables to check the current rendering environment."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"For React rendering logic, use ",(0,i.kt)("a",{parentName:"p",href:"#useIsBrowser"},(0,i.kt)("inlineCode",{parentName:"a"},"useIsBrowser()"))," or ",(0,i.kt)("a",{parentName:"p",href:"#browseronly"},(0,i.kt)("inlineCode",{parentName:"a"},"<BrowserOnly>"))," instead.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';\n\nif (ExecutionEnvironment.canUseDOM) {\n  require('lib-that-only-works-client-side');\n}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ExecutionEnvironment.canUseDOM")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if on client/browser, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," on Node.js/prerendering.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ExecutionEnvironment.canUseEventListeners")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if on client and has ",(0,i.kt)("inlineCode",{parentName:"td"},"window.addEventListener"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ExecutionEnvironment.canUseIntersectionObserver")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if on client and has ",(0,i.kt)("inlineCode",{parentName:"td"},"IntersectionObserver"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ExecutionEnvironment.canUseViewport")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if on client and has ",(0,i.kt)("inlineCode",{parentName:"td"},"window.screen"),".")))),(0,i.kt)("h3",{id:"constants"},(0,i.kt)("inlineCode",{parentName:"h3"},"constants")),(0,i.kt)("p",null,"A module exposing useful constants to client-side theme code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {DEFAULT_PLUGIN_ID} from '@docusaurus/constants';\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Named export"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DEFAULT_PLUGIN_ID")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"default"))))))}m.isMDXComponent=!0}}]);