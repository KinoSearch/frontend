"use strict";(self.webpackChunkkinosearch_v2=self.webpackChunkkinosearch_v2||[]).push([[107],{7107:function(e,r,s){s.r(r);var t=s(1413),a=s(4165),n=s(7762),o=s(5861),i=s(9439),l=s(2791),c=s(2246),d=s(9712),u=s(5863),m=s(824),h=s(5777),p=s(1134),f=s(4569),x=s.n(f),j=s(9478),g=s(9555),b=s(3504),w=s(184);r.default=function(){var e=(0,c.pm)(),r=l.useState(!1),s=(0,i.Z)(r,2),f=s[0],v=s[1],y=(0,p.cI)(),k=y.register,I=y.handleSubmit,Z=y.formState.errors,C=y.setError,_=I(function(){var r=(0,o.Z)((0,a.Z)().mark((function r(s){var t,o,i,l,c,d,u,m,h,p;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(v(!0),r.prev=1,t=!1,/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(s.email)||(C("email",{type:"custom",message:"Email \u0432\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e"}),t=!0),!t){r.next=6;break}return r.abrupt("return");case 6:return r.next=8,x().post("".concat(j.Z.ks_api,"/auth/login"),s);case 8:if(o=r.sent,(i=o.data).errors){l=(0,n.Z)(i.errors);try{for(l.s();!(c=l.n()).done;)"auth"===(d=c.value).rule&&(C("email",{type:"custom",message:d.message}),C("password",{type:"custom",message:d.message}))}catch(p){l.e(p)}finally{l.f()}}else(0,g.D0)(i.auth.token),window.location.href="/";r.next=16;break;case 13:if(r.prev=13,r.t0=r.catch(1),r.t0.response.data){u=r.t0.response.data;try{m=(0,n.Z)(u.errors);try{for(m.s();!(h=m.n()).done;)"auth"===(p=h.value).rule&&(C("email",{type:"custom",message:p.message}),C("password",{type:"custom",message:p.message}))}catch(p){m.e(p)}finally{m.f()}}catch(a){e({title:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",description:"".concat(r.t0),status:"error",duration:3e3,isClosable:!0,variant:"left-accent",position:"bottom-left"})}}else e({title:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",description:"".concat(r.t0),status:"error",duration:3e3,isClosable:!0,variant:"left-accent",position:"bottom-left"});case 16:return r.prev=16,v(!1),r.finish(16);case 19:case"end":return r.stop()}}),r,null,[[1,13,16,19]])})));return function(e){return r.apply(this,arguments)}}());return(0,w.jsx)(d.xu,{w:"100%",children:(0,w.jsx)(d.M5,{children:(0,w.jsx)(d.W2,{maxW:["full","sm"],children:(0,w.jsx)("form",{onSubmit:_,children:(0,w.jsxs)(d.Kq,{direction:"column",spacing:5,children:[(0,w.jsx)(d.M5,{children:(0,w.jsx)(d.X6,{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})}),(0,w.jsxs)(u.NI,{isInvalid:!!Z.email,children:[(0,w.jsx)(m.II,(0,t.Z)({placeholder:"Email",borderColor:"#929292",focusBorderColor:"brand.500",_placeholder:{color:"white"}},k("email",{required:!0}))),Z.email&&(0,w.jsx)(u.J1,{children:"required"===Z.email.type&&(0,w.jsx)(w.Fragment,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 Email"})||(0,w.jsx)(w.Fragment,{children:Z.email.message})})]}),(0,w.jsxs)(u.NI,{isInvalid:!!Z.password,children:[(0,w.jsx)(m.II,(0,t.Z)({placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",borderColor:"#929292",focusBorderColor:"brand.500",type:"password",_placeholder:{color:"white"}},k("password",{required:!0}))),Z.password&&(0,w.jsx)(u.J1,{children:"required"===Z.password.type&&(0,w.jsx)(w.Fragment,{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})||(0,w.jsx)(w.Fragment,{children:Z.password.message})})]}),(0,w.jsx)(h.zx,{w:"100%",isLoading:f,type:"submit",colorScheme:"brand",size:"md",children:"\u0412\u043e\u0439\u0442\u0438"}),(0,w.jsx)(d.M5,{w:"100%",children:(0,w.jsxs)(d.xv,{children:["\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"," ",(0,w.jsx)(d.rU,{color:"brand.500",_hover:{color:"brand.600",textDecoration:"none"},as:b.rU,to:"/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})})]})})})})})}}}]);
//# sourceMappingURL=107.babf4709.chunk.js.map