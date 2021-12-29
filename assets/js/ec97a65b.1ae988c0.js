"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37],{876:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8607:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return y},default:function(){return x},frontMatter:function(){return b},metadata:function(){return g},toc:function(){return k}});var r=n(7896),a=n(1461),i=n(2784),l=n(876),o=n(9741),s=n(4253);var u=function(){var e=(0,i.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=n(2176),c=n(6277),p="tabItem_ngMb";function m(e){var t,n,a,l=e.lazy,o=e.block,s=e.defaultValue,m=e.values,f=e.groupId,v=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,d.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(t=null!=s?s:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),N=k.tabGroupChoices,x=k.setTabGroupChoices,w=(0,i.useState)(g),C=w[0],T=w[1],O=[],E=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=N[f];null!=j&&j!==C&&b.some((function(e){return e.value===j}))&&T(j)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==C&&(E(t),T(r),null!=f&&x(f,r))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},v)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:R,onFocus:P,onClick:P},a,{className:(0,c.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function f(e){var t=(0,o.Z)();return i.createElement(m,(0,r.Z)({key:String(t)},e))}var v=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},h=["components"],b={sidebar_position:1},y="Basic Examples",g={unversionedId:"examples/basic",id:"examples/basic",title:"Basic Examples",description:"Minimal usage",source:"@site/docs/examples/basic.mdx",sourceDirName:"examples",slug:"/examples/basic",permalink:"/card-window/docs/examples/basic",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/basic.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/card-window/docs/intro"},next:{title:"Loading Example",permalink:"/card-window/docs/examples/loading"}},k=[{value:"Minimal usage",id:"minimal-usage",children:[{value:"Play ground",id:"play-ground",children:[],level:3},{value:"Sample Card",id:"sample-card",children:[],level:3},{value:"Required roperties",id:"required-roperties",children:[],level:3}],level:2},{value:"Style",id:"style",children:[],level:2}],N={toc:k};function x(e){var t=e.components,n=(0,a.Z)(e,h);return(0,l.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"basic-examples"},"Basic Examples"),(0,l.kt)("h2",{id:"minimal-usage"},"Minimal usage"),(0,l.kt)("h3",{id:"play-ground"},"Play ground"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const items = [...Array(1000)].map((_, i) => i);\n  const cardRect = { width: 300, height: 200 };\n  return (\n    <div style={{ height: 400 }}>\n      <CardWindow data={items} cardRect={cardRect}>\n        {Card}\n      </CardWindow>\n    </div>\n  );\n}\n")),(0,l.kt)("h3",{id:"sample-card"},"Sample Card"),(0,l.kt)("p",null,"The CardProps definition is ",(0,l.kt)("a",{parentName:"p",href:"../api#cardprops"},"here"),"."),(0,l.kt)(f,{mdxType:"Tabs"},(0,l.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const Card = ({ data, index, style }) => (\n  <div style={{ ...style }}>\n    <h2>{data[index]}</h2>\n  </div>\n);\n"))),(0,l.kt)(v,{value:"py",label:"TypeScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const Card: React.FC<CardProps> = ({ data, index, style }) => (\n  <div style={{ ...style }}>\n    <h2>{data[index]}</h2>\n  </div>\n);\n")))),(0,l.kt)("h3",{id:"required-roperties"},"Required roperties"),(0,l.kt)("p",null,"CardWindow has 3 required properties. Type parameter is ",(0,l.kt)("inlineCode",{parentName:"p"},"T extends any[]"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"children")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../api#cardcomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"CardComponent")),"<",(0,l.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cardRect")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../api#rect"},(0,l.kt)("inlineCode",{parentName:"a"},"Rect")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"T"))))),(0,l.kt)("h2",{id:"style"},"Style"),(0,l.kt)("p",null,"By default, CardWindow has the style ",(0,l.kt)("inlineCode",{parentName:"p"},"{ width: '100%', height: '100%' }"),". These styles can be overridden."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function App() {\n  const items = [...Array(1000)].map((_, i) => i);\n  const cardRect = { width: 300, height: 200 };\n  const style = { height: 400 };\n  return (\n    <CardWindow data={items} cardRect={cardRect} style={style}>\n      {({ index, style }) => (\n        <div className="card" style={{ ...style, height: style.height - 16 }}>\n          <div style={{ padding: 16 }}>\n            <h2>{index}</h2>\n          </div>\n        </div>\n      )}\n    </CardWindow>\n  );\n}\n')))}x.isMDXComponent=!0}}]);