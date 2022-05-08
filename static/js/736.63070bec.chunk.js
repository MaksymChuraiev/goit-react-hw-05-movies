"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(A,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,e,a,i,c,u,s=t(885),o=t(2791),p=t(168),f=t(2499),x=f.Z.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin-top: -10px;\n  margin-left: -10px;\n  padding: 20px;\n"]))),d=f.Z.li(e||(e=(0,p.Z)(["\n  margin-left: 10px;\n  margin-top: 10px;\n  flex-basis: calc(20% - 10px);\n\n  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  padding-bottom: 10px;\n"]))),g=f.Z.img(a||(a=(0,p.Z)(["\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n"]))),m=f.Z.p(i||(i=(0,p.Z)(["\n  color: #3f51b5;\n  font-size: 20px;\n  margin-top: 10px;\n  text-align: center;\n"]))),l=f.Z.p(c||(c=(0,p.Z)(["\n  text-align: center;\n  margin-top: 10px;\n"]))),h=f.Z.img(u||(u=(0,p.Z)(["\n  width: 100%;\n"]))),v=t(4390),w=t(6871),b=t(804),M=t(6398),y=t(184),Z=function(){var A=(0,w.UO)().movieId,n=(0,o.useState)(null),t=(0,s.Z)(n,2),r=t[0],e=t[1];return(0,o.useEffect)((function(){(0,v.uV)(A).then((function(A){return e(A)}))}),[A]),(0,y.jsx)(y.Fragment,{children:r&&(0,y.jsx)(b.W2,{children:(0,y.jsx)(x,{children:r.map((function(A){var n=A.id,t=A.name,r=A.image,e=A.character;return(0,y.jsxs)(d,{children:[r?(0,y.jsx)(g,{alt:"title",src:"https://image.tmdb.org/t/p/w300/".concat(r)}):(0,y.jsx)(h,{src:M}),(0,y.jsx)(m,{children:t}),(0,y.jsx)(l,{children:e})]},n)}))})})})}},4390:function(A,n,t){t.d(n,{HW:function(){return s},Hx:function(){return x},bI:function(){return o},uV:function(){return f},zU:function(){return p}});var r=t(5861),e=t(7757),a=t.n(e),i=t(4569),c=t.n(i);c().defaults.baseURL="https://api.themoviedb.org/3/";var u="092a845a33f61eebb0542bc73fc3415f",s=function(){var A=(0,r.Z)(a().mark((function A(){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("trending/movie/day?api_key=".concat(u));case 2:return n=A.sent,A.abrupt("return",n.data.results.map((function(A){return{img:A.poster_path,id:A.id,title:A.title}})));case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),o=function(){var A=(0,r.Z)(a().mark((function A(n){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("search/movie?api_key=".concat(u,"&query=").concat(n));case 2:return t=A.sent,A.abrupt("return",t.data.results.map((function(A){return{img:A.poster_path,id:A.id,title:A.title}})));case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),p=function(){var A=(0,r.Z)(a().mark((function A(n){var t,r,e,i,s,o,p,f;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("movie/".concat(n,"?api_key=").concat(u));case 2:return t=A.sent,r=t.data,e=r.title,i=r.genres,s=r.overview,o=r.poster_path,p=r.vote_average,f={title:e,genres:i,overview:s,image:o,score:p},A.abrupt("return",f);case 6:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),f=function(){var A=(0,r.Z)(a().mark((function A(n){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("movie/".concat(n,"/credits?api_key=").concat(u));case 2:return t=A.sent,A.abrupt("return",t.data.cast.map((function(A){return{id:A.id,name:A.name,image:A.profile_path,character:A.character}})));case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),x=function(){var A=(0,r.Z)(a().mark((function A(n){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("movie/".concat(n,"/reviews?api_key=").concat(u));case 2:return t=A.sent,A.abrupt("return",t.data.results.map((function(A){return{id:A.id,author:A.author,content:A.content}})));case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}()},6398:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=736.63070bec.chunk.js.map