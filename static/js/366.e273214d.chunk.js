"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[366],{599:function(t,r,n){n.d(r,{H:function(){return i}});var e,a=n(1087),u=n(7689),c=n(168),o=n(3237).default.li(e||(e=(0,c.Z)(["\n    display: flex;\n    margin-bottom: 8px;\n    font-size: 18px;\n    font-weight: 500;\n\n    :hover,\n    :focus{\n        color: red;\n    }\n    \n"]))),s=n(184),i=function(t){var r=t.title,n=t.id,e=(0,u.TH)(),c=e.pathname,i=e.search;return(0,s.jsx)(o,{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(n),state:{comeFromPage:c+i},children:r})})}},1256:function(t,r,n){n.d(r,{FL:function(){return s},JN:function(){return o},Pt:function(){return f},tx:function(){return p},zv:function(){return i}});var e=n(5861),a=n(4687),u=n.n(a),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"bfb089247bb1d6067836437ecb783621"};var o=function(){var t=(0,e.Z)(u().mark((function t(){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/trending/movie/week");case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",console.log("Something was wrong: ".concat(t.t0)));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/movie/".concat(r));case 3:return n=t.sent,e=n.data,t.abrupt("return",e);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",console.log("Something was wrong: ".concat(t.t0)));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/movie/".concat(r,"/credits"));case 3:return n=t.sent,e=n.data,t.abrupt("return",e);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",console.log("Something was wrong: ".concat(t.t0)));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/movie/".concat(r,"/reviews"));case 3:return n=t.sent,e=n.data,t.abrupt("return",e);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",console.log("Something was wrong: ".concat(t.t0)));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/search/movie",{params:{query:r}});case 3:return n=t.sent,e=n.data,t.abrupt("return",e);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",console.log("Something was wrong: ".concat(t.t0)));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}()},6366:function(t,r,n){n.r(r),n.d(r,{default:function(){return p}});var e=n(3433),a=n(9439),u=n(1256),c=n(2791),o=n(599),s=n(184),i=function(){var t=(0,c.useState)(null),r=(0,a.Z)(t,2),n=r[0],i=r[1];if((0,c.useEffect)((function(){(0,u.JN)().then((function(t){var r=t.results;return i((0,e.Z)(r))})).catch((function(t){return console.log("Error here:"+t)}))}),[]),n)return(0,s.jsx)("ul",{children:n.map((function(t){var r=t.id,n=t.title;return(0,s.jsx)(o.H,{id:r,title:n},r)}))})},p=function(){return(0,s.jsx)(i,{})}}}]);
//# sourceMappingURL=366.e273214d.chunk.js.map