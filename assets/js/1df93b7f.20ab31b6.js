/*! For license information please see 1df93b7f.20ab31b6.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{6945:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(2784),a=n(6277),i=n(6176),l=n(9817),o=n(7614),c="heroBanner_etFc",u="buttons_+YzY",d="features_n4mZ",s="demo_rm7z",h="featureSvg_d3xR",m=n(4612),f=[{title:"Easy to Use",image:"/card-window/img/undraw_docusaurus_mountain.svg",description:r.createElement(r.Fragment,null,"Card Window requires only 3 props.",r.createElement("br",null),"And it has simple option props.",r.createElement("br",null),"Check out the tutorial right away!")},{title:"Automatically Adjust Columns",image:"",description:r.createElement(r.Fragment,null,"The card window uses ",r.createElement("code",null,"ResizeObserver")," internally. Therefore, the column is automatically adjusted according to the element size specified by CSS.")},{title:'Inspired by "react-window"',image:"/card-window/img/undraw_docusaurus_react.svg",description:r.createElement(r.Fragment,null,"It works by only rendering part of a large data set (just enough to fill the viewport). It is very much inspired by Brian Vaughn's react-window.")}];function g(e){var t=e.title,n=e.description,i=r.useRef((0,m.w6)(1001).map((function(){return e=100,Math.floor(Math.random()*e);var e})));return r.createElement("div",{className:(0,a.Z)("col col--4")},r.createElement("div",{className:s,style:{marginTop:20,marginBottom:20,marginLeft:"auto",marginRight:"auto"}},r.createElement(m.mu,{data:i.current,cardRect:{width:80,height:80},root:{style:{height:160}},container:{style:{background:"linear-gradient(65deg, #F13F79, #2196f3)"}},lastRowAlign:"left"},(function(e){var t=e.data,n=e.index,a=e.style;return r.createElement("div",{style:Object.assign({},a,{borderRadius:"var(--ifm-card-border-radius)",overflow:"hidden"})},r.createElement("img",{alt:"docusaurus",src:"https://picsum.photos/seed/"+t[n]+"/80/80"}))}))),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,t),r.createElement("p",null,n)))}function v(e){var t=e.title,n=e.image,i=e.description;return r.createElement("div",{className:(0,a.Z)("col col--4")},r.createElement("div",{className:"text--center"},r.createElement("img",{className:h,alt:t,src:n})),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,t),r.createElement("p",null,i)))}function p(){return r.createElement("section",{className:d},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement(v,f[0]),r.createElement(g,f[1]),r.createElement(v,f[2]))))}function y(){var e=(0,o.Z)().siteConfig;return r.createElement("header",{className:(0,a.Z)("hero hero--primary",c)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline),r.createElement("div",{className:u},r.createElement(l.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get started - 5min \u23f1\ufe0f"))))}function w(){var e=(0,o.Z)().siteConfig;return r.createElement(i.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},r.createElement(y,null),r.createElement("main",null,r.createElement(p,null)))}},4612:function(e,t,n){n.d(t,{mu:function(){return d},w6:function(){return i}});var r=n(2784),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=function(e,t){for(var n=null!=t?t:e,r=[],a=void 0===t?0:e;a<n;a+=1)r.push(a);return r},l=function(e,t,n){return 0===e?0:Math.ceil((e+(n?1:0))/t)-1},o=function(e,t,n,r,a,i,o,c){var u=function(e,t,n,r){return Math.max(0,Math.floor((e-t)/(n.height+r.y)))}(e,t,r,a),d=function(e,t,n,r){var a=r.y,i=n.height+a;return Math.ceil((t.height+2*e+a)/i)}(t,n,r,a),s=function(e,t,n){return Math.min(e+t,n)}(u,d,l(i,c,o));return[u,s]},c=function(e,t,n,r,i){var l=r.width,o=r.height,c=i.x,u=Math.floor(e/t),d=e%t,s=0!==d&&["center","left","right","stretch"].includes(n)?c:void 0;return{style:a(a({},"stretch"!==n?{width:l}:{width:l,flexGrow:1}),{height:o,marginLeft:s}),row:u,col:d}},u={x:8,y:8,top:8,bottom:8},d=function(e){var t=e.data,n=e.cardRect,d=e.children,s=e.getKey,h=void 0===s?function(e){return e}:s,m=e.overScanPx,f=void 0===m?200:m,g=e.spacing,v=e.maxCols,p=void 0===v?void 0:v,y=e.root,w=void 0===y?{}:y,E=e.container,b=void 0===E?{}:E,x=e.justifyContent,M=void 0===x?"space-evenly":x,N=e.lastRowAlign,C=void 0===N?"left":N,R=e.loading,_=a(a({},u),g),j=(0,r.useState)(0),k=j[0],Z=j[1],z=function(e){void 0===e&&(e={width:0,height:0});var t=(0,r.useState)(e),n=t[0],a=t[1],i=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=new ResizeObserver((function(e){var t=e[0].contentRect,n=t.width,r=t.height;a({width:n,height:r})}));if(i.current){e.observe(i.current);var t=i.current.getBoundingClientRect(),n=t.width,r=t.height;a({width:n,height:r})}return function(){return e.disconnect()}}),[]),[n,i]}(),F=z[0],S=z[1],T=(0,r.useRef)(0),O=function(e,t,n,r,a){if(e.width<t.width)return 0;if("space-evenly"===r){var i=Math.max(1,Math.floor((e.width-n.x)/(t.width+n.x)));return void 0!==a?Math.min(a,i):i}var l=Math.floor((e.width+n.x)/(t.width+n.x));return void 0!==a?Math.min(a,l):l}(F,n,_,M,p),A=function(e,t,n,r,a){if(0===e)return 0;var i=r.y,l=r.top,o=r.bottom;return a?"card"===a.type?l+Math.ceil((t+1)/e)*(n.height+i)-i+o:0===t?l+a.height+o:l+Math.ceil(t/e)*(n.height+i)-i+i+a.height+o:0===t?l+o:l+Math.ceil(t/e)*(n.height+i)-i+o}(O,t.length,n,_,R);(0,r.useEffect)((function(){T.current!==O&&0!==T.current&&0!==O&&S.current&&(S.current.scrollTop=function(e,t,n,r,a){var i=r.height+a.y,l=i-e%i,o=Math.ceil(e/i);return Math.round(o*t/n)*i-l}(k,T.current,O,n,_)),T.current=O}),[O]),(0,r.useEffect)((function(){if(null==R?void 0:R.loadMore){var e="card"===R.type?n.height:R.height,t=A-F.height-e;0!==A&&t<k&&R.loadMore()}}),[A,k,null==R?void 0:R.loadMore]);var B="card"===(null==R?void 0:R.type),L=a(a({width:"100%",minWidth:n.width,height:"100%"},w.style),{overflow:"auto"}),I=a(a({},b.style),{width:"100%",height:A}),W=o(k,f,F,n,_,t.length,B,O),G=function(e,t,n,r){var a=e*(t.height+n.y)+n.top;return{display:"flex",flexWrap:"wrap",justifyContent:r,transform:"translate(0, ".concat(a,"px)")}}(W[0],n,_,M),P=function(e,t,n,r,o,u,d,s){if(0===t)return[];if(0===n&&!s)return[];if("left"===d){var h=e[0]*t,m=(e[1]+1)*t,f=n%t,g=t-f-(s?1:0);return i(h,m).map((function(e){var i=c(e,t,u,r,o);return l(n,t,s)===i.row&&g!==t?i.col<f?a({type:"card",index:e},i):s&&i.col===f?a({type:"loading"},i):a({type:"placeholder"},i):a({type:"card",index:e},i)}))}if("right"===d){var v=e[0]*t,p=(e[1]+1)*t,y=n%t,w=t-y-(s?1:0);return i(v,p).map((function(e){var i=c(e,t,u,r,o);return l(n,t,s)===i.row?i.col<w?a({type:"placeholder"},i):i.col<w+y?a({type:"card",index:e-w},i):a({type:"loading"},i):a({type:"card",index:e},i)}))}var E=e[0]*t,b=Math.min(n+(s?1:0),(e[1]+1)*t);return i(E,b).map((function(e){var n=c(e,t,u,r,o);return a(s&&e===b-1?{type:"loading"}:{type:"card",index:e},n)}))}(W,O,t.length,n,_,M,C,B);return r.createElement("div",{ref:S,className:w.className,style:L,onScroll:function(e){return Z(e.currentTarget.scrollTop)}},r.createElement("div",{className:b.className,style:I},r.createElement("div",{style:G},P.map((function(e,n){var i="card"===e.type?h(e.index,t):"col:".concat(e.col);return r.createElement(r.Fragment,{key:i},0!==n&&0===e.col&&r.createElement("div",{style:{width:"100%",height:_.y}}),"card"===e.type&&r.createElement(d,a({data:t},e)),"placeholder"===e.type&&r.createElement("div",{style:e.style}),"loading"===e.type&&"card"===(null==R?void 0:R.type)&&r.createElement(R.LoadingComponent,a({},e)))})),"row"===(null==R?void 0:R.type)&&r.createElement("div",{style:{width:"100%",paddingTop:_.y,display:"flex",justifyContent:"center"}},r.createElement(R.LoadingComponent,{style:{height:R.height}})))))}}}]);