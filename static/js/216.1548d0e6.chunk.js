"use strict";(self.webpackChunkkinosearch_v2=self.webpackChunkkinosearch_v2||[]).push([[216],{5216:function(e,t,r){r.r(t);var n=r(1413),a=r(7762),s=r(4165),i=r(5861),o=r(9439),c=r(7313),l=r(4390),u=r(3964),d=r(720),m=r(3068),p=r(9748),f=r(5627),h=r(2335),v=r(1881),x=r.n(v),b=r(7890),g=r(9466),w=r(1875),j=r(7519),Z=r(6417);t.default=function(){var e=(0,l.pm)(),t=c.useState(!1),r=(0,o.Z)(t,2),v=r[0],k=r[1],y=c.useState(window.innerWidth),E=(0,o.Z)(y,2),_=E[0],C=E[1];c.useEffect((function(){var e=function(){C(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var S=_<=768,z=c.useState(null),I=(0,o.Z)(z,2),q=I[0],W=I[1],B=(0,b.s0)();c.useEffect((function(){var e=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x().get("".concat(h.Z.ks_api,"/user/info"),{headers:{Authorization:"Bearer ".concat((0,j.YT)())}});case 3:t=e.sent,r=t.data,W(r.user),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),B("/login");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var F=(0,f.cI)(),L=F.register,T=F.handleSubmit,A=F.formState.errors,D=F.setError,K=T(function(){var t=(0,i.Z)((0,s.Z)().mark((function t(r){var n,i,o,c,l,u,d,m,p,f;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(k(!0),t.prev=1,n=!1,/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(r.email)||(D("email",{type:"custom",message:"Email \u0432\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e"}),n=!0),!n){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,x().post("".concat(h.Z.ks_api,"/user/change_email"),r,{headers:{Authorization:"Bearer ".concat((0,j.YT)())}});case 8:if(i=t.sent,(o=i.data).errors){c=(0,a.Z)(o.errors);try{for(c.s();!(l=c.n()).done;)"Email \u0437\u0430\u043d\u044f\u0442"===(u=l.value).message&&D("email",{type:"custom",message:u.message})}catch(f){c.e(f)}finally{c.f()}}else e({title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b",status:"success",duration:3e3,isClosable:!0,variant:S?"top-accent":"left-accent",position:S?"top":"bottom-left"});t.next=16;break;case 13:if(t.prev=13,t.t0=t.catch(1),t.t0.response.data){d=t.t0.response.data;try{m=(0,a.Z)(d.errors);try{for(m.s();!(p=m.n()).done;)"Email \u0437\u0430\u043d\u044f\u0442"===(f=p.value).message&&D("email",{type:"custom",message:f.message})}catch(f){m.e(f)}finally{m.f()}}catch(s){e({title:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",description:"".concat(t.t0),status:"error",duration:3e3,isClosable:!0,variant:S?"top-accent":"left-accent",position:S?"top":"bottom-left"})}}else e({title:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",description:"".concat(t.t0),status:"error",duration:3e3,isClosable:!0,variant:S?"top-accent":"left-accent",position:S?"top":"bottom-left"});case 16:return t.prev=16,k(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])})));return function(e){return t.apply(this,arguments)}}());return(0,Z.jsx)(Z.Fragment,{children:!q&&(0,Z.jsx)(w.Z,{})||(0,Z.jsx)(u.xu,{w:"100%",paddingTop:[10,0],children:(0,Z.jsx)(u.M5,{children:(0,Z.jsx)(u.W2,{maxW:["full","sm"],children:(0,Z.jsx)("form",{onSubmit:K,children:(0,Z.jsxs)(u.Kq,{direction:"column",spacing:5,children:[(0,Z.jsx)(u.M5,{children:(0,Z.jsx)(u.X6,{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})}),(0,Z.jsxs)(u.Kq,{direction:"column",spacing:2,children:[(0,Z.jsxs)(d.NI,{isInvalid:!!A.email,children:[(0,Z.jsx)(m.II,(0,n.Z)({placeholder:"Email",borderColor:"#929292",defaultValue:q.email,isDisabled:v,focusBorderColor:"brand.500",_placeholder:{color:"white"}},L("email",{required:!0}))),A.email&&(0,Z.jsx)(d.J1,{children:"required"===A.email.type&&(0,Z.jsx)(Z.Fragment,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 Email"})||(0,Z.jsx)(Z.Fragment,{children:A.email.message})})]}),(0,Z.jsx)(u.rU,{color:"brand.500",_hover:{color:"brand.600",textDecoration:"none"},as:g.rU,to:"/settings/password_change",children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]}),(0,Z.jsx)(p.zx,{w:"100%",isLoading:v,type:"submit",colorScheme:"brand",size:"md",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})})})})})}}}]);