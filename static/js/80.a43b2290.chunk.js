"use strict";(self.webpackChunkkinosearch_v2=self.webpackChunkkinosearch_v2||[]).push([[80],{730:function(e,r,n){n.d(r,{Z:function(){return s}});n(2791);var t=n(9712),i=n(3504),a=n(7087),c=(n(9713),n(184));var s=function(e){var r=e.film,n=e.isSearch;return(0,c.jsx)(t.xu,{minW:n?"full":"140px",w:n?"full":"140px",maxW:n?"full":"140px",children:(0,c.jsx)(t.xu,{as:i.rU,to:"/film/".concat(r.kinopoiskId||r.filmId),children:(0,c.jsxs)(t.Kq,{direction:"column",spacing:"10px",children:[(0,c.jsx)(a.LazyLoadImage,{src:r.posterUrl,width:n?"auto":"140px",height:n?"auto":"210px",className:"poster_image",effect:"blur"}),(0,c.jsx)(t.X6,{size:"sm",maxW:n?"full":"140px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:n?"normal":"nowrap",children:r.nameRu||r.nameEn})]})})})}},914:function(e,r,n){n.r(r),n.d(r,{default:function(){return _}});var t=n(4165),i=n(5861),a=n(9439),c=n(2791),s=n(9712),o=n(5777),l=n(1413),u=n(4925),d=n(3544),f=n(7697),h=n(1197),x=["htmlWidth","htmlHeight","alt"],g=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var p=(0,d.Gp)((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,i=e.alt,a=(0,u.Z)(e,x);return c.createElement("img",(0,l.Z)({width:n,height:t,ref:r,alt:i},a))}));f.Ts&&(p.displayName="NativeImage");var m=(0,d.Gp)((function(e,r){var n=e.fallbackSrc,t=e.fallback,i=e.src,s=e.srcSet,o=e.align,x=e.fit,m=e.loading,j=e.ignoreFallback,v=e.crossOrigin,b=e.fallbackStrategy,k=void 0===b?"beforeLoadOrError":b,Z=e.referrerPolicy,w=(0,u.Z)(e,g),S=null!=m||j||!(void 0!==n||void 0!==t),E=function(e){var r=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,s=e.onError,o=e.crossOrigin,l=e.sizes,u=e.ignoreFallback,d=(0,c.useState)("pending"),f=(0,a.Z)(d,2),x=f[0],g=f[1];(0,c.useEffect)((function(){g(n?"loading":"pending")}),[n]);var p=(0,c.useRef)(),m=(0,c.useCallback)((function(){if(n){j();var e=new Image;e.src=n,o&&(e.crossOrigin=o),t&&(e.srcset=t),l&&(e.sizes=l),r&&(e.loading=r),e.onload=function(e){j(),g("loaded"),null==i||i(e)},e.onerror=function(e){j(),g("failed"),null==s||s(e)},p.current=e}}),[n,o,t,l,i,s,r]),j=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,h.Gw)((function(){if(!u)return"loading"===x&&m(),function(){j()}}),[x,m,u]),u?"loaded":x}((0,l.Z)((0,l.Z)({},e),{},{ignoreFallback:S})),K=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(E,k),z=(0,l.Z)({ref:r,objectFit:x,objectPosition:o},S?w:(0,f.CE)(w,["onError","onLoad"]));return K?t||c.createElement(d.m$.img,(0,l.Z)({as:p,className:"chakra-image__placeholder",src:n},z)):c.createElement(d.m$.img,(0,l.Z)({as:p,src:i,srcSet:s,crossOrigin:v,loading:m,referrerPolicy:Z,className:"chakra-image"},z))}));(0,d.Gp)((function(e,r){return c.createElement(d.m$.img,(0,l.Z)({ref:r,as:p,className:"chakra-image"},e))}));f.Ts&&(m.displayName="Image");var j=n(6871),v=n(3504),b=n(4569),k=n.n(b),Z=n(9478),w=n(1605),S=n(730),E=n(4370),K=n(8699),z=n(184);var _=function(){var e=(0,j.UO)().filmId,r=c.useState(!1),n=(0,a.Z)(r,2),l=n[0],u=n[1],d=c.useState(!0),f=(0,a.Z)(d,2),h=f[0],x=f[1],g=c.useState(null),p=(0,a.Z)(g,2),b=p[0],_=p[1],y=c.useState([]),q=(0,a.Z)(y,2),I=q[0],C=q[1],F=c.useState([]),W=(0,a.Z)(F,2),X=W[0],O=W[1];return c.useEffect((function(){var r=function(){var r=(0,i.Z)((0,t.Z)().mark((function r(){var n,i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return C([]),O([]),x(!0),r.prev=3,r.next=6,k().get("".concat(Z.Z.api_url,"/films/").concat(e),{headers:{"X-API-KEY":Z.Z.api_token}});case 6:n=r.sent,i=n.data,_(i),u(!1),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(3),u(!0);case 15:return r.prev=15,x(!1),r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[3,12,15,18]])})));return function(){return r.apply(this,arguments)}}();if(r(),!l){var n=function(){var r=(0,i.Z)((0,t.Z)().mark((function r(){var n,i,a,c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,k().get("".concat(Z.Z.api_url,"/films/").concat(e,"/similars"),{headers:{"X-API-KEY":Z.Z.api_token}});case 3:n=r.sent,i=n.data,C(i.items),r.next=10;break;case 8:r.prev=8,r.t0=r.catch(0);case 10:return r.prev=10,r.next=13,k().get("".concat(Z.Z.sequels_and_prequels_url,"/films/").concat(e,"/sequels_and_prequels"),{headers:{"X-API-KEY":Z.Z.api_token}});case 13:a=r.sent,c=a.data,O(c),r.next=20;break;case 18:r.prev=18,r.t1=r.catch(10);case 20:case"end":return r.stop()}}),r,null,[[0,8],[10,18]])})));return function(){return r.apply(this,arguments)}}();n()}}),[e]),(0,z.jsx)(z.Fragment,{children:h&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(E.D,{title:"KinoSearch"}),(0,z.jsx)(w.Z,{})]})||(0,z.jsx)(z.Fragment,{children:l&&(0,z.jsxs)(s.M5,{h:"80vh",children:[(0,z.jsx)(E.D,{title:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u2013 KinoSearch"}),(0,z.jsx)(s.X6,{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})]})||(0,z.jsxs)(s.Kq,{direction:"column",spacing:10,children:[(0,z.jsx)(E.D,{title:"".concat(b.nameRu||b.nameEn," \u2013 KinoSearch")}),(0,z.jsxs)(s.Kq,{direction:"row",justifyContent:"space-between",children:[(0,z.jsx)(s.xu,{}),(0,z.jsx)(s.Kq,{direction:"row",spacing:"10px",children:(0,z.jsx)(o.hU,{"aria-label":"Favorite",icon:(0,z.jsx)(K.r7,{w:6,h:6})})})]}),(0,z.jsxs)(s.Kq,{spacing:"50px",direction:["column","row"],paddingRight:[0,10],children:[(0,z.jsx)(m,{src:b.posterUrl,w:["auto","350px"],borderRadius:"20px"}),(0,z.jsxs)(s.Kq,{direction:"column",spacing:"20px",children:[(0,z.jsxs)(s.Kq,{direction:"row",justifyContent:"space-between",spacing:"15px",children:[(0,z.jsx)(s.X6,{size:"xl",fontWeight:"800",children:b.nameRu||b.nameEn}),b.ratingKinopoisk||b.ratingImdb||b.ratingFilmCritics?(0,z.jsx)(s.M5,{children:(0,z.jsx)(s.Ct,{colorScheme:"green",variant:"subtle",fontSize:"lg",children:b.ratingKinopoisk||b.ratingImdb||b.ratingFilmCritics})}):null]}),(0,z.jsx)(s.xv,{fontWeight:"500",fontSize:"lg",children:b.shortDescription||b.slogan||b.description}),(0,z.jsx)(o.zx,{colorScheme:"brand",variant:"outline",size:"lg",borderRadius:"30px",as:v.rU,to:"/watch/".concat(e),children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),(0,z.jsx)(s.X6,{size:"xl",fontWeight:"800",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0444\u0438\u043b\u044c\u043c\u0435"}),(0,z.jsxs)(s.xv,{fontWeight:"500",fontSize:"lg",children:["\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430: ",b.year||"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e",(0,z.jsx)("br",{}),"\u0421\u0442\u0440\u0430\u043d\u0430: ",b.countries[0].country||"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e",(0,z.jsx)("br",{}),"\u0416\u0430\u043d\u0440: ",b.genres[0].genre||"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e"]})]})]}),0!==X.length&&(0,z.jsxs)(s.xu,{children:[(0,z.jsxs)(s.X6,{size:"md",fontWeight:"700",children:["\u0421\u0438\u043a\u0432\u0435\u043b\u044b \u0438 \u043f\u0440\u0438\u043a\u0432\u0435\u043b\u044b"," ",(0,z.jsx)(s.Ct,{ml:"1",fontSize:"md",children:X.length})]}),(0,z.jsx)(s.xu,{paddingTop:5,children:(0,z.jsx)(s.Kq,{direction:"row",overflow:"auto",overflowX:"auto",spacing:"20px",children:X.map((function(e){return(0,z.jsx)(S.Z,{film:e})}))})})]}),0!==I.length&&(0,z.jsxs)(s.xu,{children:[(0,z.jsxs)(s.X6,{size:"md",fontWeight:"700",children:["\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u044d\u0442\u043e\u0442 \u0444\u0438\u043b\u044c\u043c"," ",(0,z.jsx)(s.Ct,{ml:"1",fontSize:"md",children:I.length})]}),(0,z.jsx)(s.xu,{paddingTop:5,children:(0,z.jsx)(s.Kq,{direction:"row",overflow:"auto",overflowX:"auto",spacing:"20px",children:I.map((function(e){return(0,z.jsx)(S.Z,{film:e})}))})})]})]})})})}}}]);
//# sourceMappingURL=80.a43b2290.chunk.js.map