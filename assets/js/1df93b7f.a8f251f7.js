/*! For license information please see 1df93b7f.a8f251f7.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{8593:function(e,t,r){r.d(t,{mu:function(){return h},w6:function(){return a}});var n=r(2784),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},a=function(e,t){for(var r=null!=t?t:e,n=[],i=void 0===t?0:e;i<r;i+=1)n.push(i);return n},o=function(e,t,r,n){return Math.max(0,Math.floor((e-t)/(r.height+n.y)))},l=function(e,t,r){return 0===e?0:Math.ceil((e+t)/r)-1},c=function(e,t,r,n,i,a,c,u){var d=o(n,i,c,u),s=Math.min(function(e,t,r,n,i){var a=i.y;return Math.floor((e+t+r)/(n.height+a))}(n,a,i,c,u),l(e,t,r));return[d,s]},u=function(e){return"card"===e.type},d=function(e,t,r,n,o,c,u,d){if(0===r)return[];if(e+t===0)return[];var s=n[0]*r,h=function(e,t,r,n,i){return"inherit"!==r?(e[1]+1)*t:Math.min(n+i,(e[1]+1)*t)}(n,r,d,e,t);return a(s,h).map((function(n){var a=function(e,t,r,n,i){var a=n.width,o=n.height,l=i.x,c=e%t;return{row:Math.floor(e/t),col:c,style:{width:a,flexGrow:"stretch"===r?1:void 0,height:o,marginLeft:0!==c&&["center","left","right","stretch"].includes(r)?l:void 0}}}(n,r,u,o,c),s=l(e,t,r)===a.row,m=function(e,t,r,n,i,a,o){if("right"!==i)return e<r?{type:"card",index:e}:e<r+n?{type:"loading"}:{type:"placeholder"};if(!a)return e<r?{type:"card",index:e}:{type:"loading"};var l=o-r-n;return t<l?{type:"placeholder"}:e-l<r?{type:"card",index:e-l}:{type:"loading"}}(n,a.col,e,t,d,s,h),f=m.type,g=m.index;return i({type:f,index:g},a)}))},s={x:8,y:8,top:8,bottom:8,left:8,right:8},h=n.forwardRef((function(e,t){var r=e.data,a=e.cardRect,l=e.children,h=e.getKey,m=void 0===h?function(e){return e}:h,f=e.overScanPx,g=void 0===f?200:f,v=e.spacing,p=e.maxCols,y=void 0===p?void 0:p,w=e.root,E=void 0===w?{}:w,b=e.container,x=void 0===b?{}:b,M=e.justifyContent,N=void 0===M?"space-evenly":M,R=e.lastRowAlign,C=void 0===R?"left":R,_=e.loading,k=e.thresholdOfVisible,j=void 0===k?.5:k,O=e.onScroll,F=r.length,S=i(i({},s),v),T=(0,n.useRef)(0),Z=(0,n.useReducer)((function(e){return e+1}),0)[1],A=function(){var e=(0,n.useState)({width:void 0,height:void 0}),t=e[0],r=e[1],a=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e=new ResizeObserver((function(e){var n=e[0].contentRect,i=n.width,a=n.height;i===t.width&&a===t.height||r({width:i,height:a})}));if(a.current){e.observe(a.current);var n=a.current.getBoundingClientRect(),i=n.width,o=n.height;i===t.width&&o===t.height||r({width:i,height:o})}return function(){return e.disconnect()}}),[]),(0,n.useMemo)((function(){return i({ref:a},t)}),[t])}(),z=A.ref,L=A.width,W=void 0===L?0:L,B=A.height,I=void 0===B?0:B;n.useImperativeHandle(t,(function(){return function(){return z.current}}));var V=(0,n.useRef)(0),q=function(e,t,r,n,i){var a=r.x,o=e-r.left-r.right;if(o<t)return 0;if("space-evenly"===n){var l=Math.max(1,Math.floor((o-a)/(t+a)));return void 0!==i?Math.min(i,l):l}var c=Math.floor((o+a)/(t+a));return void 0!==i?Math.min(i,c):c}(W,a.width,S,N,y),G=function(e){var t;return"card"===(null==e?void 0:e.type)?null!==(t=e.count)&&void 0!==t?t:10:0}(_),H=function(e,t,r,n,i){if(0===e)return 0;var a=n.y,o=n.top,l=n.bottom;return"row"!==(null==i?void 0:i.type)?0===t?o+l:o+Math.ceil(t/e)*(r.height+a)-a+l:o+Math.ceil(t/e)*(r.height+a)+i.height+l}(q,F+G,a,S,_),P=i(i({width:"100%",minWidth:a.width,height:"100%"},E.style),{overflow:"auto"}),U=i(i({},x.style),{width:"100%",paddingLeft:S.left,paddingRight:S.right,height:H}),D=c(F,G,q,T.current,g,I,a,S),K=d(F,G,q,D,a,S,N,C),Y=function(e,t,r,n){var i=e*(t.height+r.y)+r.top;return{display:"flex",flexWrap:"wrap",justifyContent:n,transform:"translate(0, ".concat(i,"px)")}}(D[0],a,S,N);return(0,n.useEffect)((function(){V.current!==q&&0!==V.current&&0!==q&&z.current&&(z.current.scrollTop=function(e,t,r,n,i){var a=n.height+i.y,o=t*(Math.floor(e/a)+(t<r?1:0)),l=Math.floor(o/r);return Math.max(0,a*l+e%a)}(T.current,V.current,q,a,S)),V.current=q}),[q]),(0,n.useEffect)((function(){0!==H&&(null==_?void 0:_.loadMore)&&(K.find((function(e){return"card"===e.type&&e.index===F-1}))&&_.loadMore())}),[H,null==_?void 0:_.loadMore,K]),n.createElement("div",{ref:z,className:E.className,style:P,onScroll:function(e){var t=e.currentTarget.scrollTop,r=t<T.current?"backward":"forward";T.current=t;var n=o(T.current,g,a,S),i=D[0]!==n;if(i&&Z(),O){var l=-a.height*j,s=c(F,G,q,T.current,l,I,a,S),h={direction:r,offset:t,updateWasRequested:i,indexesOfVisible:d(F,G,q,s,a,S,N,C).filter(u).map((function(e){return e.index}))};O(h)}}},n.createElement("div",{className:x.className,style:U},n.createElement("div",{style:Y},K.map((function(e,t){var a="card"===e.type?m(e.index,r):"row:".concat(e.row,",col:").concat(e.col);return n.createElement(n.Fragment,{key:a},0!==t&&0===e.col&&n.createElement("div",{style:{width:"100%",height:S.y}}),"card"===e.type&&n.createElement(l,i({data:r},e)),"placeholder"===e.type&&n.createElement("div",{style:e.style}),"loading"===e.type&&"card"===(null==_?void 0:_.type)&&n.createElement(_.LoadingComponent,i({},e)))})),"row"===(null==_?void 0:_.type)&&n.createElement("div",{style:{width:"100%",paddingTop:S.y,display:"flex",justifyContent:"center"}},n.createElement(_.LoadingComponent,{style:{height:_.height}})))))}))},6945:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(2784),i=r(6277),a=r(8073),o=r(9817),l=r(7614),c="heroBanner_qdFl",u="buttons_AeoN",d="features_xdhU",s="demo_hxVk",h="featureSvg__8YW",m=r(8593),f=[{title:"Easy to Use",image:"/card-window/img/undraw_docusaurus_mountain.svg",description:n.createElement(n.Fragment,null,"Card Window requires only 3 props.",n.createElement("br",null),"And it has simple option props.",n.createElement("br",null),"Check out the tutorial right away!")},{title:"Automatically Adjust Columns",image:"",description:n.createElement(n.Fragment,null,"The card window uses ",n.createElement("code",null,"ResizeObserver")," internally. Therefore, the column is automatically adjusted according to the element size specified by CSS.")},{title:'Inspired by "react-window"',image:"/card-window/img/undraw_docusaurus_react.svg",description:n.createElement(n.Fragment,null,"It works by only rendering part of a large data set (just enough to fill the viewport). It is very much inspired by Brian Vaughn's react-window.")}];function g(e){var t=e.title,r=e.description,a=n.useRef((0,m.w6)(1e3).map((function(e){return e%30*1.5})));return n.createElement("div",{className:(0,i.Z)("col col--4")},n.createElement("div",{className:s,style:{marginTop:20,marginBottom:20,marginLeft:"auto",marginRight:"auto"}},n.createElement(m.mu,{data:a.current,cardRect:{width:80,height:80},root:{style:{height:160}},container:{style:{background:"linear-gradient(65deg, #F13F79, #2196f3)"}},lastRowAlign:"left"},(function(e){var t=e.data,r=e.index,i=e.style;return n.createElement("div",{style:Object.assign({},i,{borderRadius:"var(--ifm-card-border-radius)",overflow:"hidden"})},n.createElement("img",{alt:"docusaurus",src:"https://picsum.photos/seed/"+t[r]+"/80/80"}))}))),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,t),n.createElement("p",null,r)))}function v(e){var t=e.title,r=e.image,a=e.description;return n.createElement("div",{className:(0,i.Z)("col col--4")},n.createElement("div",{className:"text--center"},n.createElement("img",{className:h,alt:t,src:r})),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,t),n.createElement("p",null,a)))}function p(){return n.createElement("section",{className:d},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement(v,f[0]),n.createElement(g,f[1]),n.createElement(v,f[2]))))}function y(){var e=(0,l.Z)().siteConfig;return n.createElement("header",{className:(0,i.Z)("hero hero--primary",c)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:u},n.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get started - 5min \u23f1\ufe0f"))))}function w(){var e=(0,l.Z)().siteConfig;return n.createElement(a.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},n.createElement(y,null),n.createElement("main",null,n.createElement(p,null)))}}}]);