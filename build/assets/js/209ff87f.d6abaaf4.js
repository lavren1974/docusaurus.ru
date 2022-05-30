"use strict";(self.webpackChunkdocusaurus_ru=self.webpackChunkdocusaurus_ru||[]).push([[4152],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return c}});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),c=l,b=d["".concat(o,".").concat(c)]||d[c]||m[c]||s;return t?n.createElement(b,r(r({ref:a},p),{},{components:t})):n.createElement(b,r({ref:a},p))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var s=t.length,r=new Array(s);r[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<s;u++)r[u]=t[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18679:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(67294),l=t(86010),s="tabItem_Ymn6";function r(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,r),hidden:t},a)}},34259:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(87462),l=t(67294),s=t(86010),r=t(51048),i=t(33609),o=t(1943),u=t(72957),p="tabList__CuJ",m="tabItem_LNqP";function d(e){var a,t,r=e.lazy,d=e.block,c=e.defaultValue,b=e.values,T=e.groupId,h=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:v.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),f=(0,i.l)(g,(function(e,a){return e.value===a.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(a=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?a:v[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),w=y.tabGroupChoices,I=y.setTabGroupChoices,N=(0,l.useState)(k),x=N[0],C=N[1],O=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=T){var E=w[T];null!=E&&E!==x&&g.some((function(e){return e.value===E}))&&C(E)}var S=function(e){var a=e.currentTarget,t=O.indexOf(a),n=g[t].value;n!==x&&(Z(a),C(n),null!=T&&I(T,String(n)))},W=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n,l=O.indexOf(e.currentTarget)+1;t=null!=(n=O[l])?n:O[0];break;case"ArrowLeft":var s,r=O.indexOf(e.currentTarget)-1;t=null!=(s=O[r])?s:O[O.length-1]}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},h)},g.map((function(e){var a=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:function(e){return O.push(e)},onKeyDown:W,onFocus:S,onClick:S},r,{className:(0,s.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":x===a})}),null!=t?t:a)}))),r?(0,l.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==x})}))))}function c(e){var a=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(a)},e))}},45687:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(67294),l=t(86010),s="browserWindow_my1Q",r="browserWindowHeader_jXSR",i="buttons_uHc7",o="browserWindowAddressBar_Pd8y",u="dot_giz1",p="browserWindowMenuIcon_Vhuh",m="bar_rrRL",d="browserWindowBody_Idgs";function c(e){var a=e.children,t=e.minHeight,c=e.url,b=void 0===c?"http://localhost:3000":c;return n.createElement("div",{className:s,style:{minHeight:t}},n.createElement("div",{className:r},n.createElement("div",{className:i},n.createElement("span",{className:u,style:{background:"#f25f58"}}),n.createElement("span",{className:u,style:{background:"#fbbe3c"}}),n.createElement("span",{className:u,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,l.Z)(o,"text--truncate")},b),n.createElement("div",{className:p},n.createElement("div",null,n.createElement("span",{className:m}),n.createElement("span",{className:m}),n.createElement("span",{className:m})))),n.createElement("div",{className:d},a))}},21911:function(e,a,t){t.r(a),t.d(a,{assets:function(){return h},contentTitle:function(){return b},default:function(){return f},frontMatter:function(){return c},metadata:function(){return T},toc:function(){return v}});var n=t(87462),l=t(63366),s=(t(67294),t(3905)),r=t(45687),i=t(34259),o=t(18679),u="red_FE5X",p="orange_kp8w",m="yellow_uGry",d=["components"],c={id:"tabs",title:"Tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},b=void 0,T={unversionedId:"guides/markdown-features/tabs",id:"guides/markdown-features/tabs",title:"Tabs",description:"Using tabs inside Docusaurus Markdown",source:"@site/docs/guides/markdown-features/markdown-features-tabs.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/tabs",permalink:"/docs/markdown-features/tabs",draft:!1,tags:[],version:"current",frontMatter:{id:"tabs",title:"Tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},sidebar:"docs",previous:{title:"MDX and React",permalink:"/docs/markdown-features/react"},next:{title:"Code blocks",permalink:"/docs/markdown-features/code-blocks"}},h={},v=[{value:"Displaying a default tab",id:"displaying-a-default-tab",level:2},{value:"Syncing tab choices",id:"syncing-tab-choices",level:2},{value:"Customizing tabs",id:"customizing-tabs",level:2},{value:"Customizing tab headings",id:"customizing-tab-headings",level:3}],g={toc:v};function f(e){var a=e.components,t=(0,l.Z)(e,d);return(0,s.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Docusaurus provides the ",(0,s.kt)("inlineCode",{parentName:"p"},"<Tabs>")," component that you can use in Markdown thanks to ",(0,s.kt)("a",{parentName:"p",href:"/docs/markdown-features/react"},"MDX"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,s.kt)(r.Z,{mdxType:"BrowserWindow"},(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,s.kt)(o.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,s.kt)(o.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,s.kt)("hr",null),(0,s.kt)("p",null,"It is also possible to provide ",(0,s.kt)("inlineCode",{parentName:"p"},"values")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"defaultValue")," props to ",(0,s.kt)("inlineCode",{parentName:"p"},"Tabs"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n")),(0,s.kt)(r.Z,{mdxType:"BrowserWindow"},(0,s.kt)(i.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,s.kt)(o.Z,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,s.kt)(o.Z,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("code",null,"Tabs")," props take precedence over the ",(0,s.kt)("code",null,"TabItem")," props:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs\n  defaultValue="apple"\n  values={[\n    {label: \'Apple 1\', value: \'apple\'},\n    {label: \'Orange 1\', value: \'orange\'},\n    {label: \'Banana 1\', value: \'banana\'},\n  ]}>\n  <TabItem value="apple" label="Apple 2">\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange 2">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana 2" default>\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,s.kt)(r.Z,{mdxType:"BrowserWindow"},(0,s.kt)(i.Z,{defaultValue:"apple",values:[{label:"Apple 1",value:"apple"},{label:"Orange 1",value:"orange"},{label:"Banana 1",value:"banana"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"apple",label:"Apple 2",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,s.kt)(o.Z,{value:"orange",label:"Orange 2",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,s.kt)(o.Z,{value:"banana",label:"Banana 2",default:!0,mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"By default, all tabs are rendered eagerly during the build process, and search engines can index hidden tabs."),(0,s.kt)("p",{parentName:"div"},"It is possible to only render the default tab with ",(0,s.kt)("inlineCode",{parentName:"p"},"<Tabs lazy />"),"."))),(0,s.kt)("h2",{id:"displaying-a-default-tab"},"Displaying a default tab"),(0,s.kt)("p",null,"The first tab is displayed by default, and to override this behavior, you can specify a default tab by adding ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," to one of the tab items. You can also set the ",(0,s.kt)("inlineCode",{parentName:"p"},"defaultValue")," prop of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Tabs")," component to the label value of your choice. For example, in the example above, either setting ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," for the ",(0,s.kt)("inlineCode",{parentName:"p"},'value="apple"')," tab or setting ",(0,s.kt)("inlineCode",{parentName:"p"},'defaultValue="apple"'),' for the tabs forces the "Apple" tab to be open by default.'),(0,s.kt)("p",null,"Docusaurus will throw an error if a ",(0,s.kt)("inlineCode",{parentName:"p"},"defaultValue")," is provided for the ",(0,s.kt)("inlineCode",{parentName:"p"},"Tabs")," but it refers to a non-existing value. If you want none of the tabs to be shown by default, use ",(0,s.kt)("inlineCode",{parentName:"p"},"defaultValue={null}"),"."),(0,s.kt)("h2",{id:"syncing-tab-choices"},"Syncing tab choices"),(0,s.kt)("p",null,"You may want choices of the same kind of tabs to sync with each other. For example, you might want to provide different instructions for users on Windows vs users on macOS, and you want to change all OS-specific instructions tabs in one click. To achieve that, you can give all related tabs the same ",(0,s.kt)("inlineCode",{parentName:"p"},"groupId")," prop. Note that doing this will persist the choice in ",(0,s.kt)("inlineCode",{parentName:"p"},"localStorage")," and all ",(0,s.kt)("inlineCode",{parentName:"p"},"<Tab>")," instances with the same ",(0,s.kt)("inlineCode",{parentName:"p"},"groupId")," will update automatically when the value of one of them is changed. Note that group IDs are globally namespaced."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>\n</Tabs>\n')),(0,s.kt)(r.Z,{mdxType:"BrowserWindow"},(0,s.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + C to copy."),(0,s.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + C to copy.")),(0,s.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + V to paste."),(0,s.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + V to paste."))),(0,s.kt)("p",null,"For all tab groups that have the same ",(0,s.kt)("inlineCode",{parentName:"p"},"groupId"),", the possible values do not need to be the same. If one tab group is chosen a value that does not exist in another tab group with the same ",(0,s.kt)("inlineCode",{parentName:"p"},"groupId"),", the tab group with the missing value won't change its tab. You can see that from the following example. Try to select Linux, and the above tab groups don't change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">\n    I am Windows.\n  </TabItem>\n  <TabItem value="mac" label="macOS">\n    I am macOS.\n  </TabItem>\n  <TabItem value="linux" label="Linux">\n    I am Linux.\n  </TabItem>\n</Tabs>\n')),(0,s.kt)(r.Z,{mdxType:"BrowserWindow"},(0,s.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"I am Windows."),(0,s.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"I am macOS."),(0,s.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"I am Linux."))),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Tab choices with different group IDs will not interfere with each other:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Windows in windows.</TabItem>\n  <TabItem value="mac" label="macOS">macOS is macOS.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="non-mac-operating-systems">\n  <TabItem value="win" label="Windows">Windows is windows.</TabItem>\n  <TabItem value="unix" label="Unix">Unix is unix.</TabItem>\n</Tabs>\n')),(0,s.kt)(r.Z,{mdxType:"BrowserWindow"},(0,s.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Windows in windows."),(0,s.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"macOS is macOS.")),(0,s.kt)(i.Z,{groupId:"non-mac-operating-systems",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Windows is windows."),(0,s.kt)(o.Z,{value:"unix",label:"Unix",mdxType:"TabItem"},"Unix is unix."))),(0,s.kt)("h2",{id:"customizing-tabs"},"Customizing tabs"),(0,s.kt)("p",null,"You might want to customize the appearance of a certain set of tabs. You can pass the string in ",(0,s.kt)("inlineCode",{parentName:"p"},"className")," prop, and the specified CSS class will be added to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Tabs")," component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'// highlight-next-line\n<Tabs className="unique-tabs">\n  <TabItem value="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n')),(0,s.kt)(r.Z,{mdxType:"BrowserWindow"},(0,s.kt)(i.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,s.kt)(o.Z,{value:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,s.kt)(o.Z,{value:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,s.kt)("h3",{id:"customizing-tab-headings"},"Customizing tab headings"),(0,s.kt)("p",null,"You can also customize each tab heading independently by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"attributes")," field. The extra props can be passed to the headings either through the ",(0,s.kt)("inlineCode",{parentName:"p"},"values")," prop in ",(0,s.kt)("inlineCode",{parentName:"p"},"Tabs"),", or props of each ",(0,s.kt)("inlineCode",{parentName:"p"},"TabItem"),"\u2014in the same way as you declare ",(0,s.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="some-doc.mdx"',title:'"some-doc.mdx"'},'import styles from \'./styles.module.css\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" attributes={{className: styles.red}}>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange" attributes={{className: styles.orange}}>\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana" attributes={{className: styles.yellow}}>\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles.module.css"',title:'"styles.module.css"'},".red {\n  color: red;\n}\n.red[aria-selected='true'] {\n  border-bottom-color: red;\n}\n\n.orange {\n  color: orange;\n}\n.orange[aria-selected='true'] {\n  border-bottom-color: orange;\n}\n\n.yellow {\n  color: yellow;\n}\n.yellow[aria-selected='true'] {\n  border-bottom-color: yellow;\n}\n")),(0,s.kt)(r.Z,{mdxType:"BrowserWindow"},(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"apple",label:"Apple",attributes:{className:u},mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,s.kt)(o.Z,{value:"orange",label:"Orange",attributes:{className:p},mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,s.kt)(o.Z,{value:"banana",label:"Banana",attributes:{className:m},mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"className")," would be merged with other default class names. You may also use a custom ",(0,s.kt)("inlineCode",{parentName:"p"},"data-value")," field (",(0,s.kt)("inlineCode",{parentName:"p"},"{'data-value': 'apple'}"),") paired with CSS attribute selectors:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles.module.css"',title:'"styles.module.css"'},"li[role='tab'][data-value='apple'] {\n  color: red;\n}\n")))))}f.isMDXComponent=!0}}]);