/*! For license information please see 1df93b7f.c09f0760.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{6945:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(2784),i=n(6277),a=n(6176),l=n(9817),o=n(7614),c="heroBanner_etFc",u="buttons_+YzY",d="features_n4mZ",s="demo_rm7z",h="featureSvg_d3xR",m=n(4612),f=[{title:"Easy to Use",image:"/card-window/img/undraw_docusaurus_mountain.svg",description:r.createElement(r.Fragment,null,"Card Window requires only 3 props.",r.createElement("br",null),"And it has simple option props.",r.createElement("br",null),"Check out the tutorial right away!")},{title:"Automatically Adjust Columns",image:"",description:r.createElement(r.Fragment,null,"The card window uses ",r.createElement("code",null,"ResizeObserver")," internally. Therefore, the column is automatically adjusted according to the element size specified by CSS.")},{title:'Inspired by "react-window"',image:"/card-window/img/undraw_docusaurus_react.svg",description:r.createElement(r.Fragment,null,"It works by only rendering part of a large data set (just enough to fill the viewport). It is very much inspired by Brian Vaughn's react-window.")}];function g(e){var t=e.title,n=e.description,a=r.useRef((0,m.w6)(1e3).map((function(e){return e%30*1.5})));return r.createElement("div",{className:(0,i.Z)("col col--4")},r.createElement("div",{className:s,style:{marginTop:20,marginBottom:20,marginLeft:"auto",marginRight:"auto"}},r.createElement(m.mu,{data:a.current,cardRect:{width:80,height:80},root:{style:{height:160}},container:{style:{background:"linear-gradient(65deg, #F13F79, #2196f3)"}},lastRowAlign:"left"},(function(e){var t=e.data,n=e.index,i=e.style;return r.createElement("div",{style:Object.assign({},i,{borderRadius:"var(--ifm-card-border-radius)",overflow:"hidden"})},r.createElement("img",{alt:"docusaurus",src:"https://picsum.photos/seed/"+t[n]+"/80/80"}))}))),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,t),r.createElement("p",null,n)))}function v(e){var t=e.title,n=e.image,a=e.description;return r.createElement("div",{className:(0,i.Z)("col col--4")},r.createElement("div",{className:"text--center"},r.createElement("img",{className:h,alt:t,src:n})),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,t),r.createElement("p",null,a)))}function p(){return r.createElement("section",{className:d},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement(v,f[0]),r.createElement(g,f[1]),r.createElement(v,f[2]))))}function y(){var e=(0,o.Z)().siteConfig;return r.createElement("header",{className:(0,i.Z)("hero hero--primary",c)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline),r.createElement("div",{className:u},r.createElement(l.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get started - 5min \u23f1\ufe0f"))))}function w(){var e=(0,o.Z)().siteConfig;return r.createElement(a.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},r.createElement(y,null),r.createElement("main",null,r.createElement(p,null)))}},4612:function(e,t,n){n.d(t,{mu:function(){return d},w6:function(){return a}});var r=n(2784),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},a=function(e,t){for(var n=null!=t?t:e,r=[],i=void 0===t?0:e;i<n;i+=1)r.push(i);return r},l=function(e,t,n){return 0===e?0:Math.ceil((e+t)/n)-1},o=function(e,t,n,r,i,a,o,c){var u=function(e,t,n,r){return Math.max(0,Math.floor((e-t)/(n.height+r.y)))}(r,i,o,c),d=function(e,t,n,r){var i=r.y,a=n.height+i;return Math.ceil((t.height+2*e+i)/a)}(i,a,o,c),s=function(e,t,n){return Math.min(e+t,n)}(u,d,l(e,t,n));return[u,s]},c=function(e,t,n,r,o,c,u,d){if(0===n)return[];if(e+t===0)return[];var s=r[0]*n,h=function(e,t,n,r,i){return"inherit"!==n?(e[1]+1)*t:Math.min(r+i,(e[1]+1)*t)}(r,n,d,e,t);return a(s,h).map((function(r){var a=function(e,t,n,r,i){var a=r.width,l=r.height,o=i.x,c=e%t;return{row:Math.floor(e/t),col:c,style:{width:a,flexGrow:"stretch"===n?1:void 0,height:l,marginLeft:0!==c&&["center","left","right","stretch"].includes(n)?o:void 0}}}(r,n,u,o,c),s=l(e,t,n)===a.row,m=function(e,t,n,r,i,a,l){if("right"!==i)return e<n?{type:"card",index:e}:e<n+r?{type:"loading"}:{type:"placeholder"};if(!a)return e<n?{type:"card",index:e}:{type:"loading"};var o=l-n-r;return t<o?{type:"placeholder"}:e-o<n?{type:"card",index:e-o}:{type:"loading"}}(r,a.col,e,t,d,s,h),f=m.type,g=m.index;return i({type:f,index:g},a)}))},u={x:8,y:8,top:8,bottom:8,left:8,right:8},d=function(e){var t=e.data,n=e.cardRect,a=e.children,l=e.getKey,d=void 0===l?function(e){return e}:l,s=e.overScanPx,h=void 0===s?200:s,m=e.spacing,f=e.maxCols,g=void 0===f?void 0:f,v=e.root,p=void 0===v?{}:v,y=e.container,w=void 0===y?{}:y,E=e.justifyContent,b=void 0===E?"space-evenly":E,x=e.lastRowAlign,M=void 0===x?"left":x,N=e.loading,C=i(i({},u),m),R=(0,r.useState)(0),_=R[0],j=R[1],k=function(){var e=(0,r.useState)({width:void 0,height:void 0}),t=e[0],n=e[1],a=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=new ResizeObserver((function(e){var t=e[0].contentRect,r=t.width,i=t.height;n({width:r,height:i})}));if(a.current){e.observe(a.current);var t=a.current.getBoundingClientRect(),r=t.width,i=t.height;n({width:r,height:i})}return function(){return e.disconnect()}}),[]),i({ref:a},t)}(),Z=k.ref,z=k.width,F=void 0===z?0:z,S=k.height,T={width:F,height:void 0===S?0:S},O=(0,r.useRef)(0),A=function(e,t,n,r,i){var a=n.x,l=e-n.left-n.right;if(l<t)return 0;if("space-evenly"===r){var o=Math.max(1,Math.floor((l-a)/(t+a)));return void 0!==i?Math.min(i,o):o}var c=Math.floor((l+a)/(t+a));return void 0!==i?Math.min(i,c):c}(T.width,n.width,C,b,g),L=function(e){var t;return"card"===(null==e?void 0:e.type)?null!==(t=e.count)&&void 0!==t?t:10:0}(N),B=function(e,t,n,r,i){if(0===e)return 0;var a=r.y,l=r.top,o=r.bottom;return"row"!==(null==i?void 0:i.type)?0===t?l+o:l+Math.ceil(t/e)*(n.height+a)-a+o:l+Math.ceil(t/e)*(n.height+a)+i.height+o}(A,t.length+L,n,C,N),I=i(i({width:"100%",minWidth:n.width,height:"100%"},p.style),{overflow:"auto"}),W=i(i({},w.style),{width:"100%",paddingLeft:C.left,paddingRight:C.right,height:B}),G=o(t.length,L,A,_,h,T,n,C),P=function(e,t,n,r){var i=e*(t.height+n.y)+n.top;return{display:"flex",flexWrap:"wrap",justifyContent:r,transform:"translate(0, ".concat(i,"px)")}}(G[0],n,C,b),Y=c(t.length,L,A,G,n,C,b,M);return(0,r.useEffect)((function(){O.current!==A&&0!==O.current&&0!==A&&Z.current&&(Z.current.scrollTop=function(e,t,n,r,i){var a=r.height+i.y,l=t*(Math.floor(e/a)+(t<n?1:0)),o=Math.floor(l/n);return Math.max(0,a*o+e%a)}(_,O.current,A,n,C)),O.current=A}),[A]),(0,r.useEffect)((function(){0!==B&&(null==N?void 0:N.loadMore)&&(Y.find((function(e){return"card"===e.type&&e.index===t.length-1}))&&N.loadMore())}),[B,null==N?void 0:N.loadMore,Y]),r.createElement("div",{ref:Z,className:p.className,style:I,onScroll:function(e){var t=e.currentTarget.scrollTop;Math.abs(_-t)>n.height+C.y&&j(t)}},r.createElement("div",{className:w.className,style:W},r.createElement("div",{style:P},Y.map((function(e,n){var l="card"===e.type?d(e.index,t):"row:".concat(e.row,",col:").concat(e.col);return r.createElement(r.Fragment,{key:l},0!==n&&0===e.col&&r.createElement("div",{style:{width:"100%",height:C.y}}),"card"===e.type&&r.createElement(a,i({data:t},e)),"placeholder"===e.type&&r.createElement("div",{style:e.style}),"loading"===e.type&&"card"===(null==N?void 0:N.type)&&r.createElement(N.LoadingComponent,i({},e)))})),"row"===(null==N?void 0:N.type)&&r.createElement("div",{style:{width:"100%",paddingTop:C.y,display:"flex",justifyContent:"center"}},r.createElement(N.LoadingComponent,{style:{height:N.height}})))))}}}]);