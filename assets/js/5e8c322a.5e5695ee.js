"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[597],{876:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,w=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return t?r.createElement(w,o(o({ref:n},p),{},{components:t})):r.createElement(w,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5574:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=t(7896),a=t(1461),i=(t(2784),t(876)),o=["components"],d={id:"index",title:"card-window",slug:"/api/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l="card-window",c={unversionedId:"api/index",id:"api/index",title:"card-window",description:"Card window works by only rendering part of a large data set (just enough to fill the viewport).",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/card-window/docs/api/",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"card-window",slug:"/api/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/card-window/docs/examples"},next:{title:"Exports",permalink:"/card-window/docs/api/modules"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],u={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"card-window"},"card-window"),(0,i.kt)("p",null,"Card window works by only rendering part of a large data set (just enough to fill the viewport).\nIt is very much inspired by Brian Vaughn's react-window."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"card-window is available as an npm package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"// with npm\nnpm install card-window\n\n// with yarn\nyarn add card-window\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Lean more at ",(0,i.kt)("a",{parentName:"p",href:"https://michiharu.github.io/card-window/?path=/docs/introduction--page"},"michiharu.github.io/card-window/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { CardWindow } from 'card-window';\n\nconst App: React.FC = () => {\n  const data = [...Array(10000)].map((_, i) => i);\n  return (\n    <div style={{ width: '50vw', height: '50vh' }}>\n      <CardWindow data={data} card={{ width: 200, height: 300 }}>\n        {({ index, style }) => (\n          <div style={{ ...style, height: 284, backgroundColor: '#0001'}}>\n            <div style={{ padding: 16 }}>\n              <h2>{index}</h2>\n            </div>\n          </div>\n        )}\n      </CardWindow>\n    </div>\n  );\n};\n\nReactDOM.render(<App />, document.querySelector('#app'));\n")),(0,i.kt)("p",null,"CardWindow Component fits the size of the parent element."))}s.isMDXComponent=!0}}]);