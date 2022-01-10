/*! For license information please see 1be78505.12fdc00e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,489],{1385:function(e,t,n){var a=n(2784),r=n(4612),l=Object.assign({React:a},a,{CardWindow:r.mu,range:r.w6,SampleCard:function(e){var t=e.index,n=e.style;return a.createElement("div",{className:"card",style:n},a.createElement("div",{className:"card__body"},a.createElement("h2",null,t)))},LoadingComponent:function(e){var t=e.style;return a.createElement("div",{className:"card",style:t},a.createElement("div",{className:"card__body"},a.createElement("h2",null,"Loading...")))},Navbar:function(e){var t=e.children;return a.createElement("nav",{className:"navbar"},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},t)))},useDropdown:function(e,t,n){void 0===n&&(n=0);var r=a.useState(n),l=r[0],o=r[1],i=a.createElement("div",{className:"navbar__item dropdown dropdown--hoverable"},a.createElement("p",{className:"navbar__link"},e+": "+t[l]),a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){return a.createElement("li",{key:e},a.createElement("p",{className:"dropdown__link",onClick:function(){return o(t)}},e))}))));return[t[l],i]}});t.Z=l},9373:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(2784),r=n(876),l=n(7647),o=n(6176),i=n(6277),c=n(2176),d=n(1233),s=n(3578),u=n(7896);var m=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(1077),p=n(1461),f=n(9817),v=n(1344),b=n(1090),g="menuLinkText_NDe2",E="hasHref_krNk",y=n(9741),_=["items"],k=["item"],N=["item","onItemClick","activePath","level"],C=["item","onItemClick","activePath","level"],w=(0,a.memo)((function(e){var t=e.items,n=(0,p.Z)(e,_);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(M,(0,u.Z)({key:t,item:e},n))})))}));function M(e){var t=e.item,n=(0,p.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(S,(0,u.Z)({item:t},n)):a.createElement(Z,(0,u.Z)({item:t},n))}function S(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,o=e.level,d=(0,p.Z)(e,N),s=n.items,m=n.label,v=n.collapsible,b=n.className,_=n.href,k=function(e){var t=(0,y.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(n),C=(0,c._F)(n,l),M=(0,c.uR)({initialState:function(){return!!v&&(!C&&n.collapsed)}}),S=M.collapsed,Z=M.setCollapsed,T=M.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:C,collapsed:S,setCollapsed:Z}),a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":S},b)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(f.Z,(0,u.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":v&&!_,"menu__link--active":C},t[g]=!v,t[E]=!!k,t)),onClick:v?function(e){null==r||r(n),_?Z(!1):(e.preventDefault(),T())}:function(){null==r||r(n)},href:v?null!=k?k:"#":k},d),m),_&&v&&a.createElement("button",{"aria-label":(0,h.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),T()}})),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},a.createElement(w,{items:s,tabIndex:S?-1:0,onItemClick:r,activePath:l,level:o+1})))}function Z(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=(0,p.Z)(e,C),d=t.href,s=t.label,m=t.className,h=(0,c._F)(t,r);return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:s},a.createElement(f.Z,(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":h}),"aria-current":h?"page":void 0,to:d},(0,v.Z)(d)&&{onClick:n?function(){return n(t)}:void 0},o),(0,v.Z)(d)?s:a.createElement("span",null,s,a.createElement(b.Z,null))))}var T="sidebar_AypA",x="sidebarWithHideableNavbar_prCM",I="sidebarHidden_Yff9",A="sidebarLogo_2Z43",L="menu_y54V",R="menuWithAnnouncementBar_U-Wh",B="collapseSidebarButton_2giT",F="collapseSidebarButtonIcon_ps+2";function P(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",B),onClick:t},a.createElement(m,{className:F}))}function D(e){var t,n,r=e.path,l=e.sidebar,o=e.onCollapse,d=e.isHidden,u=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),h=m.navbar.hideOnScroll,p=m.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(T,(t={},t[x]=h,t[I]=d,t))},h&&a.createElement(s.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",L,(n={},n[R]=u,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(w,{items:l,activePath:r,level:1}))),p&&a.createElement(P,{onClick:o}))}var W=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(w,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function H(e){return a.createElement(c.Cv,{component:W,props:e})}var j=a.memo(D),O=a.memo(H);function q(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(j,e),r&&a.createElement(O,e))}var z=n(8594),Y=n(2489),U="backToTopButton_TxAF",K="backToTopButtonShow_0UMP";function V(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var X=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),o=V(),d=o.smoothScrollTop,s=o.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var o=n<a;if(o||s(),n<300)r(!1);else if(o){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,h.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,U,(e={},e[K]=n,e)),type:"button",onClick:function(){return d()}})},G=n(3181),J={docPage:"docPage_wTKs",docMainContainer:"docMainContainer_Xp3-",docSidebarContainer:"docSidebarContainer_dA-J",docMainContainerEnhanced:"docMainContainerEnhanced_m3x4",docSidebarContainerHidden:"docSidebarContainerHidden_XOjB",collapsedDocSidebar:"collapsedDocSidebar_Y5+V",expandSidebarButtonIcon:"expandSidebarButtonIcon_qrGM",docItemWrapperEnhanced:"docItemWrapperEnhanced_BqSJ"},Q=n(5195);function $(e){var t,n,l,d=e.currentDocRoute,s=e.versionMetadata,u=e.children,p=e.sidebarName,f=(0,c.Vq)(),v=s.pluginId,b=s.version,g=(0,a.useState)(!1),E=g[0],y=g[1],_=(0,a.useState)(!1),k=_[0],N=_[1],C=(0,a.useCallback)((function(){k&&N(!1),y((function(e){return!e}))}),[k]);return a.createElement(o.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:b,tag:(0,c.os)(v,b)}},a.createElement("div",{className:J.docPage},a.createElement(X,null),f&&a.createElement("aside",{className:(0,i.Z)(J.docSidebarContainer,(t={},t[J.docSidebarContainerHidden]=E,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J.docSidebarContainer)&&E&&N(!0)}},a.createElement(q,{key:p,sidebar:f,path:d.path,onCollapse:C,isHidden:k}),k&&a.createElement("div",{className:J.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:C,onClick:C},a.createElement(m,{className:J.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(J.docMainContainer,(n={},n[J.docMainContainerEnhanced]=E||!f,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",J.docItemWrapper,(l={},l[J.docItemWrapperEnhanced]=E,l))},a.createElement(r.Zo,{components:z.Z},u)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,G.LX)(r.pathname,e)}));if(!o)return a.createElement(Y.default,null);var i=o.sidebar,d=i?n.docsSidebars[i]:null;return a.createElement(a.Fragment,null,a.createElement(Q.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.qu,{version:n},a.createElement(c.bT,{sidebar:d},a.createElement($,{currentDocRoute:o,versionMetadata:n,sidebarName:i},(0,l.Z)(t,{versionMetadata:n})))))}},2489:function(e,t,n){n.r(t);var a=n(2784),r=n(6176),l=n(1077);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},4612:function(e,t,n){n.d(t,{mu:function(){return s},w6:function(){return l}});var a=n(2784),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},l=function(e,t){for(var n=null!=t?t:e,a=[],r=void 0===t?0:e;r<n;r+=1)a.push(r);return a},o=function(e,t,n){return 0===e?0:Math.ceil((e+(n?1:0))/t)-1},i=function(e,t,n,a,r,l,i,c){var d=function(e,t,n,a){return Math.max(0,Math.floor((e-t)/(n.height+a.y)))}(e,t,a,r),s=function(e,t,n,a){var r=a.y,l=n.height+r;return Math.ceil((t.height+2*e+r)/l)}(t,n,a,r),u=function(e,t,n){return Math.min(e+t,n)}(d,s,o(l,c,i));return[d,u]},c=function(e,t,n,a,l){var o=a.width,i=a.height,c=l.x,d=Math.floor(e/t),s=e%t,u=0!==s&&["center","left","right","stretch"].includes(n)?c:void 0;return{style:r(r({},"stretch"!==n?{width:o}:{width:o,flexGrow:1}),{height:i,marginLeft:u}),row:d,col:s}},d={x:8,y:8,top:8,bottom:8},s=function(e){var t=e.data,n=e.cardRect,s=e.children,u=e.getKey,m=void 0===u?function(e){return e}:u,h=e.overScanPx,p=void 0===h?200:h,f=e.spacing,v=e.root,b=void 0===v?{}:v,g=e.container,E=void 0===g?{}:g,y=e.justifyContent,_=void 0===y?"space-evenly":y,k=e.lastRowAlign,N=void 0===k?"left":k,C=e.loading,w=r(r({},d),f),M=(0,a.useState)(0),S=M[0],Z=M[1],T=function(e){void 0===e&&(e={width:0,height:0});var t=(0,a.useState)(e),n=t[0],r=t[1],l=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new ResizeObserver((function(e){var t=e[0].contentRect,n=t.width,a=t.height;r({width:n,height:a})}));if(l.current){e.observe(l.current);var t=l.current.getBoundingClientRect(),n=t.width,a=t.height;r({width:n,height:a})}return function(){return e.disconnect()}}),[]),[n,l]}(),x=T[0],I=T[1],A=(0,a.useRef)(0),L=function(e,t,n,a){var r=t.width,l=n.x;return e.width<r?0:"space-evenly"===a?Math.max(1,Math.floor((e.width-l)/(r+l))):Math.floor((e.width+l)/(r+l))}(x,n,w,_),R=function(e,t,n,a,r){if(0===e)return 0;var l=a.y,o=a.top,i=a.bottom;return r?"card"===r.type?o+Math.ceil((t+1)/e)*(n.height+l)-l+i:0===t?o+r.height+i:o+Math.ceil(t/e)*(n.height+l)-l+l+r.height+i:0===t?o+i:o+Math.ceil(t/e)*(n.height+l)-l+i}(L,t.length,n,w,C);(0,a.useEffect)((function(){A.current!==L&&0!==A.current&&0!==L&&I.current&&(I.current.scrollTop=function(e,t,n,a,r){var l=a.height+r.y,o=l-e%l,i=Math.ceil(e/l);return Math.round(i*t/n)*l-o}(S,A.current,L,n,w)),A.current=L}),[L]),(0,a.useEffect)((function(){if(null==C?void 0:C.loadMore){var e="card"===C.type?n.height:C.height,t=R-x.height-e;0!==R&&t<S&&C.loadMore()}}),[R,S,null==C?void 0:C.loadMore]);var B="card"===(null==C?void 0:C.type),F=r(r({width:"100%",minWidth:n.width,height:"100%"},b.style),{overflow:"auto"}),P=r(r({},E.style),{width:"100%",height:R}),D=i(S,p,x,n,w,t.length,B,L),W=function(e,t,n,a){var r=e*(t.height+n.y)+n.top;return{display:"flex",flexWrap:"wrap",justifyContent:a,transform:"translate(0, ".concat(r,"px)")}}(D[0],n,w,_),H=function(e,t,n,a,i,d,s,u){if(0===t)return[];if(0===n&&!u)return[];if("left"===s){var m=e[0]*t,h=(e[1]+1)*t,p=n%t,f=t-p-(u?1:0);return l(m,h).map((function(e){var l=c(e,t,d,a,i);return o(n,t,u)===l.row&&f!==t?l.col<p?r({type:"card",index:e},l):u&&l.col===p?r({type:"loading"},l):r({type:"placeholder"},l):r({type:"card",index:e},l)}))}if("right"===s){var v=e[0]*t,b=(e[1]+1)*t,g=n%t,E=t-g-(u?1:0);return l(v,b).map((function(e){var l=c(e,t,d,a,i);return o(n,t,u)===l.row?l.col<E?r({type:"placeholder"},l):l.col<E+g?r({type:"card",index:e-E},l):r({type:"loading"},l):r({type:"card",index:e},l)}))}var y=e[0]*t,_=Math.min(n+(u?1:0),(e[1]+1)*t);return l(y,_).map((function(e){var n=c(e,t,d,a,i);return r(u&&e===_-1?{type:"loading"}:{type:"card",index:e},n)}))}(D,L,t.length,n,w,_,N,B);return a.createElement("div",{ref:I,className:b.className,style:F,onScroll:function(e){return Z(e.currentTarget.scrollTop)}},a.createElement("div",{className:E.className,style:P},a.createElement("div",{style:W},H.map((function(e,n){var l="card"===e.type?m(e.index,t):"col:".concat(e.col);return a.createElement(a.Fragment,{key:l},0!==n&&0===e.col&&a.createElement("div",{style:{width:"100%",height:w.y}}),"card"===e.type&&a.createElement(s,r({data:t},e)),"placeholder"===e.type&&a.createElement("div",{style:e.style}),"loading"===e.type&&"card"===(null==C?void 0:C.type)&&a.createElement(C.Component,r({},e)))})),"row"===(null==C?void 0:C.type)&&a.createElement("div",{style:{width:"100%",paddingTop:w.y,display:"flex",justifyContent:"center"}},a.createElement(C.Component,{style:{height:C.height}})))))}}}]);