(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("../../node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("../../node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},previewTabs:{canvas:{hidden:!0}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("../../node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Demo.stories.tsx":"./src/stories/Demo.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./stories/Demo.stories.mdx":"./src/stories/Demo.stories.mdx","./stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/Demo.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_basic_",(function(){return _basic_}));__webpack_require__("../../node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/addon-docs/blocks.js"),_Demo_stories_tsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/Demo.stories.tsx"),_Demo__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/Demo.tsx");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.a,{title:"Demo",component:_Demo__WEBPACK_IMPORTED_MODULE_5__.a,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h1",{id:"basic-usage"},"Basic Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"The required Props are the data, the card size, and the children function that renders the card components."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.b,{story:_Demo_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.basic,name:"_basic_",mdxType:"Story"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("code",{parentName:"pre",className:"language-typescript"},"const BasicDemo: React.FC = () => {\n  const data = [...Array(10000)].map((_, i) => i);\n  return (\n    <div style={{ width: '90vw', height: '40vh' }}>\n      <CardWindow data={data} card={{ width: 200, height: 100 }} justifyContent={justifyContent}>\n        {({ index, style }) => (\n          <div style={{ ...style, height: 84, backgroundColor: '#0001' }}>\n            <div style={{ padding: 16 }}>\n              <h2>{index}</h2>\n            </div>\n          </div>\n        )}\n      </CardWindow>\n    </div>\n  );\n};\n")))}MDXContent.isMDXComponent=!0;const _basic_=_Demo_stories_tsx__WEBPACK_IMPORTED_MODULE_4__.basic,componentMeta={title:"Demo",component:_Demo__WEBPACK_IMPORTED_MODULE_5__.a,includeStories:["_basic_"]},mdxStoryNameToKey={_basic_:"_basic_"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))},__webpack_exports__.default=componentMeta},"./src/stories/Demo.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"basic",(function(){return basic}));var _Users_michiharu_projects_React_card_window_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Demo__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/stories/Demo.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),basic=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Demo__WEBPACK_IMPORTED_MODULE_2__.a,Object(_Users_michiharu_projects_React_card_window_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});basic.args={},basic.parameters=Object(_Users_michiharu_projects_React_card_window_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <CardWindowDemo {...args} />"}},basic.parameters)},"./src/stories/Demo.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var objectSpread2=__webpack_require__("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),toConsumableArray=__webpack_require__("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),react=__webpack_require__("../../node_modules/react/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},getCardStyle=function(index,cols,justifyContent,card,containerWidth){var row=Math.floor(index/cols),col=index%cols,common=__assign({position:"absolute",top:card.height*row},card);switch(justifyContent){case"start":var left=card.width*col;return __assign(__assign({},common),{left:left});case"center":var remain=containerWidth-card.width*cols;left=card.width*col+remain/2;return __assign(__assign({},common),{left:left});case"space-evenly":var space=(containerWidth-card.width*cols)/(cols+1);left=space+(card.width+space)*col;return __assign(__assign({},common),{left:left});case"space-around":var colWidth=containerWidth/cols;left=(colWidth-card.width)/2+colWidth*col;return __assign(__assign({},common),{left:left});default:throw new Error}},CardWindow=function(props){var card=props.card,data=props.data,_a=props.overScanPx,overScanPx=void 0===_a?100:_a,_b=props.justifyContent,justifyContent=void 0===_b?"space-evenly":_b,Children=props.children,_c=react.useState(0),offset=_c[0],setOffset=_c[1],_d=function(initial){void 0===initial&&(initial={width:0,height:0});var _a=react.useState(initial),rect=_a[0],set=_a[1],ref=react.useRef();return react.useEffect((function(){var resizeObserver=new ResizeObserver((function(entries){var _a=entries[0].contentRect,width=_a.width,height=_a.height;set({width:width,height:height})}));if(ref.current){resizeObserver.observe(ref.current);var _a=ref.current.getBoundingClientRect(),width=_a.width,height=_a.height;set({width:width,height:height})}return function(){return resizeObserver.disconnect()}}),[]),[rect,ref]}(),container=_d[0],ref=_d[1],handleScroll=react.useCallback((function(e){return setOffset(e.currentTarget.scrollTop)}),[]),colsRef=react.useRef(0),cols=Math.floor(container.width/card.width);react.useEffect((function(){colsRef.current!==cols&&0!==colsRef.current&&0!==cols&&ref.current&&(ref.current.scrollTop=function(offset,beforeCols,afterCols,cardHeight){var remainingOffset=cardHeight-offset%cardHeight,beforeRow=Math.ceil(offset/cardHeight);return Math.round(beforeRow*beforeCols/afterCols)*cardHeight-remainingOffset}(offset,colsRef.current,cols,card.height)),colsRef.current=cols}),[cols]);var containerStyle={width:"100%",minWidth:card.width,height:"100%",overflow:"auto"},scrollDivHeight=function(cols,itemSize,card){return 0===cols?0:Math.ceil(itemSize/cols)*card.height}(cols,data.length,card),items=function(cols,container,card,itemSize,offset,overScanPx,justifyContent){if(0===cols)return[];for(var startIndex=Math.max(0,Math.floor((offset-overScanPx)/card.height)*cols),stopIndex=Math.min(itemSize-1,Math.ceil((offset+container.height+overScanPx)/card.height)*cols),items=[],index=startIndex;index<=stopIndex;index+=1)items.push({index:index,style:getCardStyle(index,cols,justifyContent,card,container.width)});return items}(cols,container,card,data.length,offset,overScanPx,justifyContent);return Object(jsx_runtime.jsx)("div",__assign({ref:ref,style:containerStyle,onScroll:handleScroll},{children:Object(jsx_runtime.jsx)("div",__assign({style:{width:"100%",height:scrollDivHeight,position:"relative"}},{children:items.map((function(item){return Object(jsx_runtime.jsx)(Children,__assign({data:data},item),item.index)}))}),void 0)}),void 0)};__webpack_exports__.a=function CardWindowDemo(_ref){var justifyContent=_ref.justifyContent,data=Object(toConsumableArray.a)(Array(1e4)).map((function(_,i){return i}));return Object(jsx_runtime.jsx)("div",{style:{width:"100vw",maxWidth:1e3,height:"40vh"},children:Object(jsx_runtime.jsx)(CardWindow,{data:data,card:{width:180,height:100},justifyContent:justifyContent,children:function children(_ref2){var index=_ref2.index,style=_ref2.style;return Object(jsx_runtime.jsx)("div",{style:Object(objectSpread2.a)(Object(objectSpread2.a)({},style),{},{height:84,backgroundColor:"#0001"}),children:Object(jsx_runtime.jsx)("div",{style:{padding:16},children:Object(jsx_runtime.jsx)("h2",{children:index})})})}})})};try{Demo.displayName="Demo",Demo.__docgenInfo={description:"",displayName:"Demo",props:{overScanPx:{defaultValue:null,description:"",name:"overScanPx",required:!1,type:{name:"number"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"space-evenly"'},{value:'"space-around"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"Loading"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Demo.tsx#Demo"]={docgenInfo:Demo.__docgenInfo,name:"Demo",path:"src/stories/Demo.tsx#Demo"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js");__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p;function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(dist_esm.b,{title:"Introduction",mdxType:"Meta"}),Object(esm.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(esm.b)("h1",{id:"card-window"},"card-window"),Object(esm.b)("p",null,"Card window works by only rendering part of a large data set (just enough to fill the viewport).\nIt is very much inspired by Brian Vaughn's react-window."),Object(esm.b)("h2",{id:"installation"},"Installation"),Object(esm.b)("p",null,"card-window is available as an npm package."),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-bash"},"// with npm\nnpm install card-window\n\n// with yarn\nyarn add card-window\n")),Object(esm.b)("h2",{id:"usage"},"Usage"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-typescript"},"import * as React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { CardWindow } from 'card-window';\n\nconst App: React.FC = () => {\n  const data = [...Array(10000)].map((_, i) => i);\n  return (\n    <div style={{ width: '50vw', height: '50vh' }}>\n      <CardWindow data={data} card={{ width: 200, height: 300 }}>\n        {({ index, style }) => (\n          <div style={{ ...style, height: 284, backgroundColor: '#0001'}}>\n            <div style={{ padding: 16 }}>\n              <h2>{index}</h2>\n            </div>\n          </div>\n        )}\n      </CardWindow>\n    </div>\n  );\n};\n\nReactDOM.render(<App />, document.querySelector('#app'));\n")),Object(esm.b)("p",null,"CardWindow Component fits the size of the parent element."))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))};__webpack_exports__.default=componentMeta},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("../../node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("../../node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("../../node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);