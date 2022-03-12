/*! For license information please see 1be78505.55a9f5f5.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514],{1385:function(e,t,n){var r=n(2784),a=n(4612),i=Object.assign({React:r},r,{CardWindow:a.mu,range:a.w6,SampleCard:function(e){var t=e.index,n=e.style,a=e.row,i=e.col;return r.createElement("div",{className:"card",style:n},r.createElement("div",{className:"card__body"},r.createElement("h2",null,t),r.createElement("p",null,"row: ",a,", col: ",i)))},LoadingComponent:function(e){var t=e.style;return r.createElement("div",{className:"card",style:t},r.createElement("div",{className:"card__body"},r.createElement("h2",null,"Loading...")))},Navbar:function(e){var t=e.children;return r.createElement("nav",{className:"navbar"},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},t)))},useDropdown:function(e,t,n){void 0===n&&(n=0);var a=r.useState(n),i=a[0],o=a[1],c=r.createElement("div",{className:"navbar__item dropdown dropdown--hoverable"},r.createElement("p",{className:"navbar__link"},e+": "+t[i]),r.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){return r.createElement("li",{key:e},r.createElement("p",{className:"dropdown__link",onClick:function(){return o(t)}},e))}))));return[t[i],c]},useTabs:function(e,t){void 0===t&&(t="");var n=r.useState(0),a=n[0],i=n[1],o=r.createElement("ul",{class:"tabs tabs--block"},e.map((function(e,n){var o="tabs__item";return n===a&&(o+=" tabs__item--active"),r.createElement("li",{key:n,className:o,onClick:function(){return i(n)}},t+e)})));return[e[a],o]}});t.Z=i},4612:function(e,t,n){n.d(t,{mu:function(){return s},w6:function(){return i}});var r=n(2784),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=function(e,t){for(var n=null!=t?t:e,r=[],a=void 0===t?0:e;a<n;a+=1)r.push(a);return r},o=function(e,t,n){return 0===e?0:Math.ceil((e+t)/n)-1},c=function(e,t,n,r,a,i,c,l){var u=function(e,t,n,r){return Math.max(0,Math.floor((e-t)/(n.height+r.y)))}(r,a,c,l),d=function(e,t,n,r){var a=r.y,i=n.height+a;return Math.ceil((t+2*e+a)/i)}(a,i,c,l),s=function(e,t,n){return Math.min(e+t,n)}(u,d,o(e,t,n));return[u,s]},l=function(e,t){return e[0]===t[0]&&e[1]===t[1]},u=function(e,t,n,r,c,l,u,d){if(0===n)return[];if(e+t===0)return[];var s=r[0]*n,h=function(e,t,n,r,a){return"inherit"!==n?(e[1]+1)*t:Math.min(r+a,(e[1]+1)*t)}(r,n,d,e,t);return i(s,h).map((function(r){var i=function(e,t,n,r,a){var i=r.width,o=r.height,c=a.x,l=e%t;return{row:Math.floor(e/t),col:l,style:{width:i,flexGrow:"stretch"===n?1:void 0,height:o,marginLeft:0!==l&&["center","left","right","stretch"].includes(n)?c:void 0}}}(r,n,u,c,l),s=o(e,t,n)===i.row,f=function(e,t,n,r,a,i,o){if("right"!==a)return e<n?{type:"card",index:e}:e<n+r?{type:"loading"}:{type:"placeholder"};if(!i)return e<n?{type:"card",index:e}:{type:"loading"};var c=o-n-r;return t<c?{type:"placeholder"}:e-c<n?{type:"card",index:e-c}:{type:"loading"}}(r,i.col,e,t,d,s,h),v=f.type,m=f.index;return a({type:v,index:m},i)}))},d={x:8,y:8,top:8,bottom:8,left:8,right:8},s=function(e){var t=e.data,n=e.cardRect,i=e.children,o=e.getKey,s=void 0===o?function(e){return e}:o,h=e.overScanPx,f=void 0===h?200:h,v=e.spacing,m=e.maxCols,p=void 0===m?void 0:m,y=e.root,g=void 0===y?{}:y,w=e.container,E=void 0===w?{}:w,b=e.justifyContent,x=void 0===b?"space-evenly":b,M=e.lastRowAlign,_=void 0===M?"left":M,N=e.loading,C=a(a({},d),v),k=(0,r.useRef)(0),R=function(){var e=(0,r.useState)({width:void 0,height:void 0}),t=e[0],n=e[1],i=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=new ResizeObserver((function(e){var r=e[0].contentRect,a=r.width,i=r.height;a===t.width&&i===t.height||n({width:a,height:i})}));if(i.current){e.observe(i.current);var r=i.current.getBoundingClientRect(),a=r.width,o=r.height;a===t.width&&o===t.height||n({width:a,height:o})}return function(){return e.disconnect()}}),[]),(0,r.useMemo)((function(){return a({ref:i},t)}),[t])}(),S=R.ref,j=R.width,L=void 0===j?0:j,O=R.height,T=void 0===O?0:O,W=(0,r.useRef)(0),P=function(e,t,n,r,a){var i=n.x,o=e-n.left-n.right;if(o<t)return 0;if("space-evenly"===r){var c=Math.max(1,Math.floor((o-i)/(t+i)));return void 0!==a?Math.min(a,c):c}var l=Math.floor((o+i)/(t+i));return void 0!==a?Math.min(a,l):l}(L,n.width,C,x,p),z=t.length,A=function(e){var t;return"card"===(null==e?void 0:e.type)?null!==(t=e.count)&&void 0!==t?t:10:0}(N),B=function(e,t,n,r,a){if(0===e)return 0;var i=r.y,o=r.top,c=r.bottom;return"row"!==(null==a?void 0:a.type)?0===t?o+c:o+Math.ceil(t/e)*(n.height+i)-i+c:o+Math.ceil(t/e)*(n.height+i)+a.height+c}(P,z+A,n,C,N),D=a(a({width:"100%",minWidth:n.width,height:"100%"},g.style),{overflow:"auto"}),F=a(a({},E.style),{width:"100%",paddingLeft:C.left,paddingRight:C.right,height:B}),G=(0,r.useState)(c(z,A,P,k.current,f,T,n,C)),K=G[0],Z=G[1],q=function(e,t,n,r){var a=e*(t.height+n.y)+n.top;return{display:"flex",flexWrap:"wrap",justifyContent:r,transform:"translate(0, ".concat(a,"px)")}}(K[0],n,C,x),H=u(z,A,P,K,n,C,x,_);return(0,r.useEffect)((function(){W.current!==P&&0!==W.current&&0!==P&&S.current&&(S.current.scrollTop=function(e,t,n,r,a){var i=r.height+a.y,o=t*(Math.floor(e/i)+(t<n?1:0)),c=Math.floor(o/n);return Math.max(0,i*c+e%i)}(k.current,W.current,P,n,C)),W.current=P}),[P]),(0,r.useEffect)((function(){var e=c(z,A,P,k.current,f,T,n,C);l(K,e)||Z(e)}),[z,A,P,f,T,n,C]),(0,r.useEffect)((function(){0!==B&&(null==N?void 0:N.loadMore)&&(H.find((function(e){return"card"===e.type&&e.index===z-1}))&&N.loadMore())}),[B,null==N?void 0:N.loadMore,H]),r.createElement("div",{ref:S,className:g.className,style:D,onScroll:function(e){k.current=e.currentTarget.scrollTop;var t=c(z,A,P,k.current,f,T,n,C);l(K,t)||Z(t)}},r.createElement("div",{className:E.className,style:F},r.createElement("div",{style:q},H.map((function(e,n){var o="card"===e.type?s(e.index,t):"row:".concat(e.row,",col:").concat(e.col);return r.createElement(r.Fragment,{key:o},0!==n&&0===e.col&&r.createElement("div",{style:{width:"100%",height:C.y}}),"card"===e.type&&r.createElement(i,a({data:t},e)),"placeholder"===e.type&&r.createElement("div",{style:e.style}),"loading"===e.type&&"card"===(null==N?void 0:N.type)&&r.createElement(N.LoadingComponent,a({},e)))})),"row"===(null==N?void 0:N.type)&&r.createElement("div",{style:{width:"100%",paddingTop:C.y,display:"flex",justifyContent:"center"}},r.createElement(N.LoadingComponent,{style:{height:N.height}})))))}}}]);