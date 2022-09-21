"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[503],{876:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1846:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(2784);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},7370:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7896),r=t(2784),o=t(9741),i=t(4862),l=t(6277),d="tabItem_yrY8";function s(e){var n,t,o,s=e.lazy,c=e.block,p=e.defaultValue,u=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=u?u:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,i.lx)(g,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.UB)(),y=w.tabGroupChoices,N=w.setTabGroupChoices,C=(0,r.useState)(k),b=C[0],x=C[1],R=[],D=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=y[m];null!=T&&T!==b&&g.some((function(e){return e.value===T}))&&x(T)}var j=function(e){var n=e.currentTarget,t=R.indexOf(n),a=g[t].value;a!==b&&(D(n),x(a),null!=m&&N(m,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=R.indexOf(e.currentTarget)+1;t=R[a]||R[0];break;case"ArrowLeft":var r=R.indexOf(e.currentTarget)-1;t=R[r]||R[R.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,key:n,ref:function(e){return R.push(e)},onKeyDown:O,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":b===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}function c(e){var n=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},2092:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=t(7896),r=t(1461),o=(t(2784),t(876)),i=(t(7370),t(1846),["components"]),l={sidebar_position:2},d="Examples",s={unversionedId:"examples",id:"examples",title:"Examples",description:"Examples use:",source:"@site/docs/examples.mdx",sourceDirName:".",slug:"/examples",permalink:"/card-window/docs/examples",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/card-window/docs/intro"},next:{title:"Example Utils",permalink:"/card-window/docs/example-utils"}},c={},p=[{value:"Minimal usage",id:"minimal-usage",level:2},{value:"Required properties",id:"required-properties",level:3},{value:"Styling",id:"styling",level:2},{value:"<code>root</code>",id:"root",level:3},{value:"<code>container</code>",id:"container",level:3},{value:"Card Positions",id:"card-positions",level:2},{value:"Columns",id:"columns",level:2},{value:"Automatically Adjust Columns",id:"automatically-adjust-columns",level:3},{value:"Max columns",id:"max-columns",level:3},{value:"Overscanning",id:"overscanning",level:2},{value:"OnScroll",id:"onscroll",level:2},{value:"Infinite loading",id:"infinite-loading",level:2},{value:"type: <code>card</code>",id:"type-card",level:3},{value:"type: <code>row</code>",id:"type-row",level:3}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Examples use:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../docs/example-utils#sample-card"},(0,o.kt)("inlineCode",{parentName:"a"},"SampleCard"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../docs/example-utils#navbar"},(0,o.kt)("inlineCode",{parentName:"a"},"Navbar"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../docs/example-utils#usedropdown"},(0,o.kt)("inlineCode",{parentName:"a"},"useDropdown")))),(0,o.kt)("h2",{id:"minimal-usage"},"Minimal usage"),(0,o.kt)("p",null,"Cardwindow works by only rendering part of a large data set (just enough to fill the viewport).\nThis helps address some common performance bottlenecks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It reduces the amount of work (and time) required to render the initial view and to process updates."),(0,o.kt)("li",{parentName:"ul"},"It reduces the memory footprint by avoiding over-allocation of DOM nodes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const data = range(10000);\n  const cardRect = { width: 200, height: 120 };\n  return (\n    <div style={{ height: 300 }}>\n      <CardWindow data={data} cardRect={cardRect}>\n        {SampleCard}\n      </CardWindow>\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"required-properties"},"Required properties"),(0,o.kt)("p",null,"CardWindow has three required properties. The Type parameter is ",(0,o.kt)("inlineCode",{parentName:"p"},"T extends any[]"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cardRect")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"./api/modules#rect"},(0,o.kt)("inlineCode",{parentName:"a"},"Rect"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cardRect")," is used to calculate the rendering of ",(0,o.kt)("inlineCode",{parentName:"td"},"CardWindow.children")," component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"children")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"React.ComponentType"),"<",(0,o.kt)("a",{parentName:"td",href:"./api/modules#cardprops"},(0,o.kt)("inlineCode",{parentName:"a"},"CardProps")),"<",(0,o.kt)("inlineCode",{parentName:"td"},"T"),">",">"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"children")," is a component that receives ",(0,o.kt)("inlineCode",{parentName:"td"},"CardProps<T>"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"data")," is an array. CardWindow passes data to ",(0,o.kt)("inlineCode",{parentName:"td"},"CardWindow.children")," component.")))),(0,o.kt)("h2",{id:"styling"},"Styling"),(0,o.kt)("h3",{id:"root"},(0,o.kt)("inlineCode",{parentName:"h3"},"root")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"root")," is passed to the root element of CardWindow. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"root.style")," has these attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"width: ",(0,o.kt)("inlineCode",{parentName:"li"},"100%")),(0,o.kt)("li",{parentName:"ul"},"height: ",(0,o.kt)("inlineCode",{parentName:"li"},"100%")),(0,o.kt)("li",{parentName:"ul"},"minWidth: ",(0,o.kt)("inlineCode",{parentName:"li"},"cardRect.width")),(0,o.kt)("li",{parentName:"ul"},"overflow: ",(0,o.kt)("inlineCode",{parentName:"li"},"auto"))),(0,o.kt)("p",null,"You can't override only ",(0,o.kt)("inlineCode",{parentName:"p"},"{ overflow: 'auto' }"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const data = range(100);\n  const cardRect = { width: 200, height: 120 };\n  const root = { style: { height: 300, border: '10px dashed #2196f3' } };\n  return (\n    <CardWindow data={data} cardRect={cardRect} root={root}>\n      {SampleCard}\n    </CardWindow>\n  );\n}\n")),(0,o.kt)("h3",{id:"container"},(0,o.kt)("inlineCode",{parentName:"h3"},"container")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"container")," is passed to the scrollable large container element. You can't override ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const data = range(100);\n  const cardRect = { width: 200, height: 120 };\n  const container = { style: { background: 'linear-gradient(65deg, #F13F79, #2196f3)' } };\n  return (\n    <div style={{ height: 300 }}>\n      <CardWindow data={data} cardRect={cardRect} container={container}>\n        {SampleCard}\n      </CardWindow>\n    </div>\n  );\n}\n")),(0,o.kt)("h2",{id:"card-positions"},"Card Positions"),(0,o.kt)("p",null,"For card positions, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"justifyContent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lastRowAlign")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"spacing"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const [justifyContent, JustifyContentDropdown] = useDropdown(\n    'justifyContent',\n    ['left', 'right', 'center', 'space-around', 'space-between', 'space-evenly', 'stretch'],\n    5\n  );\n  const [lastRowAlign, LastRowAlignDropdown] = useDropdown('lastRowAlign', ['left', 'right', 'inherit'], 0);\n  const spaceList = [0, 4, 8, 20, 50, 100];\n    const [x, XDropdown] = useDropdown('x', spaceList, 2);\n  const [y, YDropdown] = useDropdown('y', spaceList, 2);\n  const [top, TopDropdown] = useDropdown('top', spaceList, 2);\n  const [bottom, BottomDropdown] = useDropdown('bottom', spaceList, 2);\n  const [left, LeftDropdown] = useDropdown('left', spaceList, 2);\n  const [right, RightDropdown] = useDropdown('right', spaceList, 2);\n  const data = range(10);\n  const cardRect = { width: 200, height: 120 };\n  const spacing = { x, y, top, bottom, left, right };\n  const props = { data, cardRect, justifyContent, lastRowAlign, spacing };\n  return (\n    <div>\n      <Navbar>\n        {JustifyContentDropdown}\n        {LastRowAlignDropdown}\n      </Navbar>\n      <Navbar>\n        <p className=\"navbar__item\">spacing:</p>\n        {XDropdown}\n        {YDropdown}\n        {TopDropdown}\n        {BottomDropdown}\n        {LeftDropdown}\n        {RightDropdown}\n      </Navbar>\n      <div style={{ height: 400 }}>\n        <CardWindow {...props}>{SampleCard}</CardWindow>\n      </div>\n    </div>\n  );\n}\n")),(0,o.kt)("h2",{id:"columns"},"Columns"),(0,o.kt)("h3",{id:"automatically-adjust-columns"},"Automatically Adjust Columns"),(0,o.kt)("p",null,"The CardWindow uses ResizeObserver internally.\nTherefore, the column is automatically adjusted according to the element size specified by CSS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const [width, Tabs] = useTabs(['100%', '75%', '50%']);\n  const data = range(10000);\n  const cardRect = { width: 200, height: 120 };\n  return (\n    <div>\n      {Tabs}\n      <div style={{ display: 'flex', justifyContent: 'center' }}>\n        <div style={{ width, height: 300 }}>\n          <CardWindow data={data} cardRect={cardRect}>\n            {SampleCard}\n          </CardWindow>\n        </div>\n      </div>\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"max-columns"},"Max columns"),(0,o.kt)("p",null,"You can set the maximum number of columns.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"maxCols")," is a prop that goes well with ",(0,o.kt)("inlineCode",{parentName:"p"},'justifyContent="stretch"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const [maxCols, Dropdown] = useDropdown('Max columns', [1, 2, 3, 4, 5], 2);\n  const data = range(100);\n  const cardRect = { width: 200, height: 120 };\n  return (\n    <div>\n      <Navbar>{Dropdown}</Navbar>\n      <div style={{ height: 300 }}>\n        <CardWindow data={data} cardRect={cardRect} justifyContent=\"stretch\" maxCols={maxCols}>\n          {SampleCard}\n        </CardWindow>\n      </div>\n    </div>\n  );\n}\n")),(0,o.kt)("h2",{id:"overscanning"},"Overscanning"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"overScanPx")," to render outside of the visible area. This property can be important for two reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Overscanning by one row or column allows the tab key to focus on the next (not yet visible) item."),(0,o.kt)("li",{parentName:"ul"},"Overscanning slightly can reduce or prevent a flash of empty space when a user first starts scrolling.")),(0,o.kt)("p",null,"Note that overscanning too much can negatively impact performance. By default, CardWindow overscans by 200 px."),(0,o.kt)("p",null,"Please check the Elements in the browser console. By default, this sample render 24 or less cards."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const [overScanPx, OverScanPxDropdown] = useDropdown('overScanPx', [0, 200, 1000, 2000], 1);\n  const data = range(100);\n  const cardRect = { width: 200, height: 120 };\n  const props = { data, cardRect, overScanPx };\n  return (\n    <div>\n      <Navbar>{OverScanPxDropdown}</Navbar>\n      <div style={{ height: 200 }}>\n        <CardWindow {...props}>{SampleCard}</CardWindow>\n      </div>\n    </div>\n  );\n}\n")),(0,o.kt)("h2",{id:"onscroll"},"OnScroll"),(0,o.kt)("p",null,"Please scroll and check the logs in the browser console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const data = range(10000);\n  const cardRect = { width: 200, height: 120 };\n  const handleScroll = (e) => console.log(e);\n  return (\n    <div style={{ height: 300 }}>\n      <CardWindow data={data} cardRect={cardRect} onScroll={handleScroll}>\n        {SampleCard}\n      </CardWindow>\n    </div>\n  );\n}\n")),(0,o.kt)("h2",{id:"infinite-loading"},"Infinite loading"),(0,o.kt)("p",null,"You need to manage the pending status. Set the loadMore function only if you can call it."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"loading")," prop has 2 types, ",(0,o.kt)("inlineCode",{parentName:"p"},"card")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"row"),"."),(0,o.kt)("h3",{id:"type-card"},"type: ",(0,o.kt)("inlineCode",{parentName:"h3"},"card")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const [{ data, pending }, set] = React.useState({ data: range(10), pending: false });\n\n  React.useEffect(() => {\n    const loaded = () => set((state) => ({ data: range(state.data.length + 10), pending: false }));\n    let timer = undefined;\n    if (pending) {\n      timer = window.setTimeout(loaded, 2000);\n    }\n    return () => {\n      if (timer !== undefined) window.clearTimeout(timer);\n    };\n  }, [pending]);\n\n  const cardRect = { width: 200, height: 120 };\n  const next = data.length < 100;\n  // Set the loadMore function only if you can call it.\n  const loadMore = !pending ? () => set({ data, pending: true }) : undefined;\n  const loading = next ? { type: 'card', LoadingComponent, loadMore } : undefined;\n  return (\n    <div style={{ height: 300 }}>\n      <CardWindow data={data} cardRect={cardRect} loading={loading}>\n        {SampleCard}\n      </CardWindow>\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"type-row"},"type: ",(0,o.kt)("inlineCode",{parentName:"h3"},"row")),(0,o.kt)("p",null,"Component height is required for row type loading."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const [{ data, pending }, set] = React.useState({ data: range(10), pending: false });\n\n  React.useEffect(() => {\n    const loaded = () => set((state) => ({ data: range(state.data.length + 10), pending: false }));\n    let timer = undefined;\n    if (pending) {\n      timer = window.setTimeout(loaded, 2000);\n    }\n    return () => {\n      if (timer !== undefined) window.clearTimeout(timer);\n    };\n  }, [pending]);\n\n  const cardRect = { width: 200, height: 120 };\n  const next = data.length < 100;\n  // Set the loadMore function only if you can call it.\n  const loadMore = !pending ? () => set({ data, pending: true }) : undefined;\n  const loading = next ? { type: 'row', LoadingComponent, height: 80, loadMore } : undefined;\n  return (\n    <div style={{ height: 300 }}>\n      <CardWindow data={data} cardRect={cardRect} loading={loading}>\n        {SampleCard}\n      </CardWindow>\n    </div>\n  );\n}\n")))}m.isMDXComponent=!0}}]);