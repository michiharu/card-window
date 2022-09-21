/*! For license information please see 17896441.a6f36f58.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{8593:function(e,t,n){n.d(t,{mu:function(){return h},w6:function(){return i}});var r=n(2784),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=function(e,t){for(var n=null!=t?t:e,r=[],a=void 0===t?0:e;a<n;a+=1)r.push(a);return r},o=function(e,t,n,r){return Math.max(0,Math.floor((e-t)/(n.height+r.y)))},c=function(e,t,n){return 0===e?0:Math.ceil((e+t)/n)-1},l=function(e,t,n,r,a,i,l,u){var d=o(r,a,l,u),s=Math.min(function(e,t,n,r,a){var i=a.y;return Math.floor((e+t+n)/(r.height+i))}(r,i,a,l,u),c(e,t,n));return[d,s]},u=function(e){return"card"===e.type},d=function(e,t,n,r,o,l,u,d){if(0===n)return[];if(e+t===0)return[];var s=r[0]*n,h=function(e,t,n,r,a){return"inherit"!==n?(e[1]+1)*t:Math.min(r+a,(e[1]+1)*t)}(r,n,d,e,t);return i(s,h).map((function(r){var i=function(e,t,n,r,a){var i=r.width,o=r.height,c=a.x,l=e%t;return{row:Math.floor(e/t),col:l,style:{width:i,flexGrow:"stretch"===n?1:void 0,height:o,marginLeft:0!==l&&["center","left","right","stretch"].includes(n)?c:void 0}}}(r,n,u,o,l),s=c(e,t,n)===i.row,f=function(e,t,n,r,a,i,o){if("right"!==a)return e<n?{type:"card",index:e}:e<n+r?{type:"loading"}:{type:"placeholder"};if(!i)return e<n?{type:"card",index:e}:{type:"loading"};var c=o-n-r;return t<c?{type:"placeholder"}:e-c<n?{type:"card",index:e-c}:{type:"loading"}}(r,i.col,e,t,d,s,h),v=f.type,m=f.index;return a({type:v,index:m},i)}))},s={x:8,y:8,top:8,bottom:8,left:8,right:8},h=r.forwardRef((function(e,t){var n=e.data,i=e.cardRect,c=e.children,h=e.getKey,f=void 0===h?function(e){return e}:h,v=e.overScanPx,m=void 0===v?200:v,p=e.spacing,y=e.maxCols,g=void 0===y?void 0:y,w=e.root,E=void 0===w?{}:w,b=e.container,x=void 0===b?{}:b,M=e.justifyContent,_=void 0===M?"space-evenly":M,N=e.lastRowAlign,C=void 0===N?"left":N,k=e.loading,R=e.onScroll,S=n.length,j=a(a({},s),p),L=(0,r.useRef)(0),O=(0,r.useReducer)((function(e){return e+1}),0)[1],T=function(){var e=(0,r.useState)({width:void 0,height:void 0}),t=e[0],n=e[1],i=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=new ResizeObserver((function(e){var r=e[0].contentRect,a=r.width,i=r.height;a===t.width&&i===t.height||n({width:a,height:i})}));if(i.current){e.observe(i.current);var r=i.current.getBoundingClientRect(),a=r.width,o=r.height;a===t.width&&o===t.height||n({width:a,height:o})}return function(){return e.disconnect()}}),[]),(0,r.useMemo)((function(){return a({ref:i},t)}),[t])}(),W=T.ref,I=T.width,P=void 0===I?0:I,q=T.height,z=void 0===q?0:q;r.useImperativeHandle(t,(function(){return function(){return W.current}}));var A=(0,r.useRef)(0),B=function(e,t,n,r,a){var i=n.x,o=e-n.left-n.right;if(o<t)return 0;if("space-evenly"===r){var c=Math.max(1,Math.floor((o-i)/(t+i)));return void 0!==a?Math.min(a,c):c}var l=Math.floor((o+i)/(t+i));return void 0!==a?Math.min(a,l):l}(P,i.width,j,_,g),D=function(e){var t;return"card"===(null==e?void 0:e.type)?null!==(t=e.count)&&void 0!==t?t:10:0}(k),F=function(e,t,n,r,a){if(0===e)return 0;var i=r.y,o=r.top,c=r.bottom;return"row"!==(null==a?void 0:a.type)?0===t?o+c:o+Math.ceil(t/e)*(n.height+i)-i+c:o+Math.ceil(t/e)*(n.height+i)+a.height+c}(B,S+D,i,j,k),G=a(a({width:"100%",minWidth:i.width,height:"100%"},E.style),{overflow:"auto"}),H=a(a({},x.style),{width:"100%",paddingLeft:j.left,paddingRight:j.right,height:F}),K=l(S,D,B,L.current,m,z,i,j),Z=d(S,D,B,K,i,j,_,C),J=function(e,t,n,r){var a=e*(t.height+n.y)+n.top;return{display:"flex",flexWrap:"wrap",justifyContent:r,transform:"translate(0, ".concat(a,"px)")}}(K[0],i,j,_);return(0,r.useEffect)((function(){A.current!==B&&0!==A.current&&0!==B&&W.current&&(W.current.scrollTop=function(e,t,n,r,a){var i=r.height+a.y,o=t*(Math.floor(e/i)+(t<n?1:0)),c=Math.floor(o/n);return Math.max(0,i*c+e%i)}(L.current,A.current,B,i,j)),A.current=B}),[B]),(0,r.useEffect)((function(){0!==F&&(null==k?void 0:k.loadMore)&&(Z.find((function(e){return"card"===e.type&&e.index===S-1}))&&k.loadMore())}),[F,null==k?void 0:k.loadMore,Z]),r.createElement("div",{ref:W,className:E.className,style:G,onScroll:function(e){var t=e.currentTarget.scrollTop,n=t<L.current?"backward":"forward";L.current=t;var r=o(L.current,m,i,j),a=K[0]!==r;if(a&&O(),R){var c=l(S,D,B,L.current,0,z,i,j),s=d(S,D,B,c,i,j,_,C).filter(u),h={direction:n,offset:t,updateWasRequested:a,visibleMinIndex:s.at(0).index,visibleMaxIndex:s.at(-1).index};R(h)}}},r.createElement("div",{className:x.className,style:H},r.createElement("div",{style:J},Z.map((function(e,t){var i="card"===e.type?f(e.index,n):"row:".concat(e.row,",col:").concat(e.col);return r.createElement(r.Fragment,{key:i},0!==t&&0===e.col&&r.createElement("div",{style:{width:"100%",height:j.y}}),"card"===e.type&&r.createElement(c,a({data:n},e)),"placeholder"===e.type&&r.createElement("div",{style:e.style}),"loading"===e.type&&"card"===(null==k?void 0:k.type)&&r.createElement(k.LoadingComponent,a({},e)))})),"row"===(null==k?void 0:k.type)&&r.createElement("div",{style:{width:"100%",paddingTop:j.y,display:"flex",justifyContent:"center"}},r.createElement(k.LoadingComponent,{style:{height:k.height}})))))}))},1385:function(e,t,n){var r=n(2784),a=n(8593),i=Object.assign({React:r},r,{CardWindow:a.mu,range:a.w6,SampleCard:function(e){var t=e.index,n=e.style,a=e.row,i=e.col;return r.createElement("div",{className:"card",style:n},r.createElement("div",{className:"card__body"},r.createElement("h2",null,t),r.createElement("p",null,"row: ",a,", col: ",i)))},LoadingComponent:function(e){var t=e.style;return r.createElement("div",{className:"card",style:t},r.createElement("div",{className:"card__body"},r.createElement("h2",null,"Loading...")))},Navbar:function(e){var t=e.children;return r.createElement("nav",{className:"navbar"},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},t)))},useDropdown:function(e,t,n){void 0===n&&(n=0);var a=r.useState(n),i=a[0],o=a[1],c=r.createElement("div",{className:"navbar__item dropdown dropdown--hoverable"},r.createElement("p",{className:"navbar__link"},e+": "+t[i]),r.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){return r.createElement("li",{key:e},r.createElement("p",{className:"dropdown__link",onClick:function(){return o(t)}},e))}))));return[t[i],c]},useTabs:function(e,t){void 0===t&&(t="");var n=r.useState(0),a=n[0],i=n[1],o=r.createElement("ul",{className:"tabs tabs--block"},e.map((function(e,n){var o="tabs__item";return n===a&&(o+=" tabs__item--active"),r.createElement("li",{key:n,className:o,onClick:function(){return i(n)}},t+e)})));return[e[a],o]}});t.Z=i}}]);