"use strict";(self.webpackChunkkinosearch_v2=self.webpackChunkkinosearch_v2||[]).push([[335],{7423:function(e,r,n){n.d(r,{Z:function(){return s}});n(7313);var t=n(3964),o=n(9466),i=n(8831),a=(n(6804),n(6417));var s=function(e){var r=e.film,n=e.isSearch;return(0,a.jsx)(t.xu,{minW:n?"full":"140px",w:n?"full":"140px",maxW:n?"full":"140px",children:(0,a.jsx)(t.xu,{as:o.rU,to:"/film/".concat(r.kinopoiskId||r.filmId),children:(0,a.jsxs)(t.Kq,{direction:"column",spacing:"10px",children:[(0,a.jsx)(i.LazyLoadImage,{src:r.posterUrl,width:n?"auto":"140px",height:n?"auto":"210px",className:"poster_image",effect:"blur"}),(0,a.jsx)(t.X6,{size:"sm",maxW:n?"full":"140px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:n?"normal":"nowrap",children:r.nameRu||r.nameEn||r.nameOriginal})]})})})}},2920:function(e,r,n){n.r(r),n.d(r,{default:function(){return X}});var t=n(4165),o=n(5861),i=n(9439),a=n(7313),s=n(4390),c=n(3964),l=n(5098),u=n(4942),d=n(1413),p=n(4925),f=n(9244),h=n(8276),g=n(416),x=n(139),v=n(7872),m=n(1563),w=n(131),Z=n(8651),b=n(4959),j=n(87),k=["openDelay","closeDelay","closeOnClick","closeOnMouseDown","closeOnEsc","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset","direction"],C=["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps","background","backgroundColor","bgColor"],O={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}};var E=(0,g.m$)(w.E.div),_=(0,g.Gp)((function(e,r){var n,t,o=(0,g.mq)("Tooltip",e),i=(0,x.Lr)(e),s=(0,g.Fg)(),c=i.children,l=i.label,w=i.shouldWrapChildren,_=i["aria-label"],y=i.hasArrow,S=i.bg,P=i.portalProps,z=i.background,I=i.backgroundColor,T=i.bgColor,K=(0,p.Z)(i,C),D=null!==(n=null!==(t=null!==z&&void 0!==z?z:I)&&void 0!==t?t:S)&&void 0!==n?n:T;D&&(o.bg=D,o[f.j.arrowBg.var]=(0,v.K1)(s,"colors",D));var q,A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.openDelay,n=void 0===r?0:r,t=e.closeDelay,o=void 0===t?0:t,i=e.closeOnClick,s=void 0===i||i,c=e.closeOnMouseDown,l=e.closeOnEsc,h=void 0===l||l,g=e.onOpen,x=e.onClose,m=e.placement,w=e.id,Z=e.isOpen,C=e.defaultIsOpen,O=e.arrowSize,E=void 0===O?10:O,_=e.arrowShadowColor,y=e.arrowPadding,S=e.modifiers,P=e.isDisabled,z=e.gutter,I=e.offset,T=e.direction,K=(0,p.Z)(e,k),D=(0,b.qY)({isOpen:Z,defaultIsOpen:C,onOpen:g,onClose:x}),q=D.isOpen,A=D.onOpen,R=D.onClose,F=(0,f.D)({enabled:q,placement:m,arrowPadding:y,modifiers:S,gutter:z,offset:I,direction:T}),X=F.referenceRef,W=F.getPopperProps,M=F.getArrowInnerProps,Y=F.getArrowProps,B=(0,b.Me)(w,"tooltip"),U=(0,a.useRef)(null),$=(0,a.useRef)(),N=(0,a.useRef)(),L=(0,a.useCallback)((function(){P||$.current||($.current=window.setTimeout(A,n))}),[P,A,n]),G=(0,a.useCallback)((function(){$.current&&(clearTimeout($.current),$.current=void 0),N.current=window.setTimeout(R,o)}),[o,R]),H=(0,a.useCallback)((function(){q&&s&&G()}),[s,G,q]),J=(0,a.useCallback)((function(){q&&c&&G()}),[c,G,q]),Q=(0,a.useCallback)((function(e){q&&"Escape"===e.key&&G()}),[q,G]);(0,b.OR)("keydown",h?Q:void 0),(0,a.useEffect)((function(){return function(){clearTimeout($.current),clearTimeout(N.current)}}),[]),(0,b.OR)("mouseleave",G,(function(){return U.current}));var V=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,d.Z)((0,d.Z)({},e),{},{ref:(0,j.lq)(U,r,X),onMouseEnter:(0,v.v0)(e.onMouseEnter,L),onClick:(0,v.v0)(e.onClick,H),onMouseDown:(0,v.v0)(e.onMouseDown,J),onFocus:(0,v.v0)(e.onFocus,L),onBlur:(0,v.v0)(e.onBlur,G),"aria-describedby":q?B:void 0})}),[L,G,J,q,B,H,X]),ee=(0,a.useCallback)((function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return W((0,d.Z)((0,d.Z)({},r),{},{style:(0,d.Z)((0,d.Z)({},r.style),{},(e={},(0,u.Z)(e,f.j.arrowSize.var,E?(0,v.px)(E):void 0),(0,u.Z)(e,f.j.arrowShadowColor.var,_),e))}),n)}),[W,E,_]),re=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,d.Z)((0,d.Z)((0,d.Z)({ref:r},K),e),{},{id:B,role:"tooltip",style:(0,d.Z)((0,d.Z)({},e.style),{},{position:"relative",transformOrigin:f.j.transformOrigin.varRef})})}),[K,B]);return{isOpen:q,show:L,hide:G,getTriggerProps:V,getTooltipProps:re,getTooltipPositionerProps:ee,getArrowProps:Y,getArrowInnerProps:M}}((0,d.Z)((0,d.Z)({},K),{},{direction:s.direction}));if((0,v.HD)(c)||w)q=a.createElement(g.m$.span,(0,d.Z)({tabIndex:0},A.getTriggerProps()),c);else{var R=a.Children.only(c);q=(0,a.cloneElement)(R,A.getTriggerProps(R.props,R.ref))}var F=!!_,X=A.getTooltipProps({},r),W=F?(0,v.CE)(X,["role","id"]):X,M=(0,v.ei)(X,["role","id"]);return l?a.createElement(a.Fragment,null,q,a.createElement(Z.M,null,A.isOpen&&a.createElement(h.h_,(0,d.Z)({},P),a.createElement(g.m$.div,(0,d.Z)((0,d.Z)({},A.getTooltipPositionerProps()),{},{__css:{zIndex:o.zIndex,pointerEvents:"none"}}),a.createElement(E,(0,d.Z)((0,d.Z)({variants:O},W),{},{initial:"exit",animate:"enter",exit:"exit",__css:o}),l,F&&a.createElement(m.TX,(0,d.Z)({},M),_),y&&a.createElement(g.m$.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},a.createElement(g.m$.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:o.bg}}))))))):a.createElement(a.Fragment,null,c)}));v.Ts&&(_.displayName="Tooltip");var y=n(9748),S=n(7890),P=n(9466),z=n(1881),I=n.n(z),T=n(2335),K=n(1875),D=n(7423),q=n(222),A=n(7758),R=n(7519),F=n(6417);var X=function(){var e=(0,s.pm)(),r=(0,S.UO)().filmId,n=a.useState(!1),u=(0,i.Z)(n,2),d=u[0],p=u[1],f=a.useState(!0),h=(0,i.Z)(f,2),g=h[0],x=h[1],v=a.useState(null),m=(0,i.Z)(v,2),w=m[0],Z=m[1],b=a.useState(!1),j=(0,i.Z)(b,2),k=j[0],C=j[1],O=(0,R.uF)(),E=a.useState([]),z=(0,i.Z)(E,2),X=z[0],W=z[1],M=a.useState([]),Y=(0,i.Z)(M,2),B=Y[0],U=Y[1];a.useEffect((function(){var e=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I().get("".concat(T.Z.ks_api,"/favorite/check?filmId=").concat(r),{headers:{Authorization:"Bearer ".concat((0,R.YT)())}});case 3:n=e.sent,n.data.favorite?C(!0):C(!1),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){var n,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W([]),U([]),x(!0),e.prev=3,e.next=6,I().get("".concat(T.Z.api_url,"/films/").concat(r),{headers:{"X-API-KEY":T.Z.api_token}});case 6:n=e.sent,o=n.data,Z(o),p(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),p(!0);case 15:return e.prev=15,x(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[3,12,15,18]])})));return function(){return e.apply(this,arguments)}}();if(n(),!d){var i=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){var n,o,i,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I().get("".concat(T.Z.api_url,"/films/").concat(r,"/similars"),{headers:{"X-API-KEY":T.Z.api_token}});case 3:n=e.sent,o=n.data,W(o.items),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,e.next=13,I().get("".concat(T.Z.sequels_and_prequels_url,"/films/").concat(r,"/sequels_and_prequels"),{headers:{"X-API-KEY":T.Z.api_token}});case 13:i=e.sent,a=i.data,U(a),e.next=20;break;case 18:e.prev=18,e.t1=e.catch(10);case 20:case"end":return e.stop()}}),e,null,[[0,8],[10,18]])})));return function(){return e.apply(this,arguments)}}();i()}e()}),[r]);var $=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!k){n.next=7;break}return C(!1),n.next=5,I().post("".concat(T.Z.ks_api,"/favorite/remove"),{filmId:r},{headers:{Authorization:"Bearer ".concat((0,R.YT)())}});case 5:n.next=10;break;case 7:return C(!0),n.next=10,I().post("".concat(T.Z.ks_api,"/favorite/add"),{filmId:r},{headers:{Authorization:"Bearer ".concat((0,R.YT)())}});case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),e({title:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",description:"".concat(n.t0),status:"error",duration:3e3,isClosable:!0,variant:"left-accent",position:"bottom-left"});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();return(0,F.jsx)(F.Fragment,{children:g&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(q.D,{title:"KinoSearch"}),(0,F.jsx)(K.Z,{})]})||(0,F.jsx)(F.Fragment,{children:d&&(0,F.jsxs)(c.M5,{h:"80vh",children:[(0,F.jsx)(q.D,{title:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u2013 KinoSearch"}),(0,F.jsx)(c.X6,{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})]})||(0,F.jsxs)(c.Kq,{direction:"column",spacing:10,children:[(0,F.jsx)(q.D,{title:"".concat(w.nameRu||w.nameEn||w.nameOriginal," \u2013 KinoSearch")}),(0,F.jsxs)(c.Kq,{spacing:"50px",direction:["column","row"],paddingRight:[0,10],children:[(0,F.jsx)(l.Ee,{src:w.posterUrl,w:["auto","350px"],borderRadius:"20px"}),(0,F.jsxs)(c.Kq,{direction:"column",spacing:"20px",w:"100%",children:[(0,F.jsxs)(c.Kq,{direction:"row",justifyContent:"space-between",spacing:"15px",children:[(0,F.jsx)(c.X6,{size:"xl",fontWeight:"800",children:w.nameRu||w.nameEn||w.nameOriginal}),w.ratingKinopoisk||w.ratingImdb||w.ratingFilmCritics?(0,F.jsx)(_,{label:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0444\u0438\u043b\u044c\u043c\u0430",hasArrow:!0,bg:"#252525",color:"white",placement:"left",children:(0,F.jsx)(c.M5,{children:(0,F.jsx)(c.Ct,{colorScheme:"green",variant:"subtle",fontSize:"lg",children:w.ratingKinopoisk||w.ratingImdb||w.ratingFilmCritics})})}):null]}),(0,F.jsx)(c.xv,{fontWeight:"500",fontSize:"lg",children:w.shortDescription||w.slogan||w.description}),(0,F.jsxs)(c.Kq,{direction:"row",spacing:"10px",children:[(0,F.jsx)(y.zx,{colorScheme:"brand",variant:"outline",size:"lg",borderRadius:"30px",w:"100%",as:P.rU,to:"/watch/".concat(r),children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),O&&(0,F.jsx)(y.hU,{"aria-label":"Favorite",color:k?"brand.500":"white",icon:(0,F.jsx)(A.r7,{w:6,h:6}),size:"lg",onClick:$})]}),(0,F.jsx)(c.X6,{size:"xl",fontWeight:"800",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0444\u0438\u043b\u044c\u043c\u0435"}),(0,F.jsxs)(c.xv,{fontWeight:"500",fontSize:"lg",children:["\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430: ",w.year||"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e",(0,F.jsx)("br",{}),"\u0421\u0442\u0440\u0430\u043d\u0430: ",w.countries[0].country||"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e",(0,F.jsx)("br",{}),"\u0416\u0430\u043d\u0440: ",w.genres[0].genre||"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e"]})]})]}),0!==B.length&&(0,F.jsxs)(c.xu,{children:[(0,F.jsxs)(c.X6,{size:"md",fontWeight:"700",children:["\u0421\u0438\u043a\u0432\u0435\u043b\u044b \u0438 \u043f\u0440\u0438\u043a\u0432\u0435\u043b\u044b"," ",(0,F.jsx)(c.Ct,{ml:"1",fontSize:"md",children:B.length})]}),(0,F.jsx)(c.xu,{paddingTop:5,children:(0,F.jsx)(c.Kq,{direction:"row",overflow:"auto",overflowX:"auto",spacing:"20px",children:B.map((function(e){return(0,F.jsx)(D.Z,{film:e})}))})})]}),0!==X.length&&(0,F.jsxs)(c.xu,{children:[(0,F.jsxs)(c.X6,{size:"md",fontWeight:"700",children:["\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u044d\u0442\u043e\u0442 \u0444\u0438\u043b\u044c\u043c"," ",(0,F.jsx)(c.Ct,{ml:"1",fontSize:"md",children:X.length})]}),(0,F.jsx)(c.xu,{paddingTop:5,children:(0,F.jsx)(c.Kq,{direction:"row",overflow:"auto",overflowX:"auto",spacing:"20px",children:X.map((function(e){return(0,F.jsx)(D.Z,{film:e})}))})})]})]})})})}}}]);