(this["webpackJsonpshared-todos-web"]=this["webpackJsonpshared-todos-web"]||[]).push([[0],{39:function(e,t,n){e.exports=n(60)},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(34),u=n.n(c),i=n(9),l=n(4),o=n(18),s=n(35),p=n(13),d=(n(52),n(53),{apiHost:"https://us-central1-shared-todos-fb.cloudfunctions.net",firebaseConfig:{apiKey:"AIzaSyDXyJwQbD7bYdCj-AkXYLM80j3oVFHGIcw",authDomain:"shared-todos-fb.firebaseapp.com",databaseURL:"https://shared-todos-fb.firebaseio.com",projectId:"shared-todos-fb",storageBucket:"shared-todos-fb.appspot.com",messagingSenderId:"92468362104",appId:"1:92468362104:web:c66efaad8189915ebde68d"}});p.initializeApp(d.firebaseConfig);var f=p.auth(),m=p.firestore(),b=new p.auth.GoogleAuthProvider;m.enablePersistence().catch((function(e){"failed-precondition"===e.code||e.code,console.error(e)}));var h=n(2),v=n.n(h),E=n(7);var j=function(){function e(){return(e=Object(E.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.signInWithPopup(b);case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.apply(this,arguments)}},"Sign in with google"))},O=n(21);var w=function(e){var t=e.children,n=e.title,r=f.currentUser,c=r.name,u=r.photoURL;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",null,c),a.a.createElement("img",{width:48,height:48,src:u,alt:""}),a.a.createElement("button",{onClick:function(){f.signOut()}},"logout")),n&&a.a.createElement("div",null,a.a.createElement("strong",null,n)),a.a.createElement("div",null,t))};var k=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],u=Object(r.useState)(null),l=Object(i.a)(u,2),o=l[0],s=l[1];function p(){return(p=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(n),c(!0),t.abrupt("return",new Promise((function(t){e.current=t})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{isOpen:a,initialData:o,open:function(e){return p.apply(this,arguments)},close:function(t){s(null),c(!1),e.current&&e.current(t)}}};function y(e){var t=e.close,n=Object(r.useState)(""),c=Object(i.a)(n,2),u=c[0],l=c[1];return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:u,onChange:function(e){return l(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return t({title:u})}},"create"),a.a.createElement("button",{onClick:function(){return t()}},"close")))}var g=function(){var e=f.currentUser,t=e.uid,n=e.email,r=k(),c=m.collection("lists"),u=c.where("shared","array-contains",n),l=Object(O.a)(u,{idField:"id"}),s=Object(i.a)(l,1)[0];function d(){return(d=Object(E.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.open();case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,c.add({title:a.title,createdAt:p.firestore.FieldValue.serverTimestamp(),uid:t,shared:[n]});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.doc(t).delete();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement(w,{title:"lists overview"},a.a.createElement("button",{onClick:function(){return d.apply(this,arguments)}},"create list"),a.a.createElement("div",null,s&&s.map((function(e){return a.a.createElement("div",{key:e.id},a.a.createElement("span",null,e.id)," ",a.a.createElement(o.b,{to:"/".concat(e.id)},e.title),a.a.createElement("button",{onClick:function(){return function(e){return b.apply(this,arguments)}(e.id)}},"remove"))}))),r.isOpen&&a.a.createElement(y,r))},x=n(28);function C(e){var t=e.close,n=Object(r.useState)(""),c=Object(i.a)(n,2),u=c[0],l=c[1];return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:u,onChange:function(e){return l(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return t({title:u})}},"create"),a.a.createElement("button",{onClick:function(){return t()}},"close")))}function I(e){var t=e.listId,n=e.list,c=e.close,u=m.collection("lists"),l=Object(r.useState)(""),o=Object(i.a)(l,2),s=o[0],p=o[1];function d(){return(d=Object(E.a)(v.a.mark((function e(){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.shared||[],e.next=3,u.doc(t).update({shared:Object(x.a)(new Set([].concat(Object(x.a)(r),[s])))});case 3:c();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:s,onChange:function(e){return p(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return function(){return d.apply(this,arguments)}()}},"share"),a.a.createElement("button",{onClick:function(){return c()}},"close")))}var S=function(){var e=f.currentUser.uid,t=Object(l.f)().listId,n=k(),c=k(),u=Object(O.b)(m.doc("lists/".concat(t))),s=Object(i.a)(u,1)[0],d=s&&s.data(),b=m.collection("todos"),h=b.where("uid","==",e).where("listId","==",t),j=Object(O.a)(h,{idField:"id"}),y=Object(i.a)(j,1)[0];function g(){return(g=Object(E.a)(v.a.mark((function r(){var a;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.open();case 2:if(a=r.sent){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,b.add({listId:t,uid:e,title:a.title,isDone:!1,createdAt:p.firestore.FieldValue.serverTimestamp()});case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function x(){return(x=Object(E.a)(v.a.mark((function e(t,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.doc(t).update({isDone:!n});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.open();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement(w,{title:"todos"},a.a.createElement(o.b,{to:"/"},"<--"," back"),d&&a.a.createElement(r.Fragment,null,a.a.createElement("div",null,d.title),d.shared&&a.a.createElement("div",null,"shared with: ",a.a.createElement("i",null,d.shared.join(", ")))),a.a.createElement("button",{onClick:function(){return g.apply(this,arguments)}},"create todo"),a.a.createElement("button",{onClick:function(){return S.apply(this,arguments)}},"share"),a.a.createElement("div",null,y&&y.map((function(e){return a.a.createElement("div",{key:e.id},a.a.createElement("input",{type:"checkbox",checked:e.isDone,onChange:function(){return function(e,t){return x.apply(this,arguments)}(e.id,e.isDone)}}),a.a.createElement("span",null,e.id)," ",a.a.createElement("span",null,e.title))}))),n.isOpen&&a.a.createElement(C,n),c.isOpen&&a.a.createElement(I,Object.assign({},c,{listId:t,list:d})))};function D(){return a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/"},a.a.createElement(j,null)))}function A(){return a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/"},a.a.createElement(g,null)),a.a.createElement(l.a,{exact:!0,path:"/:listId"},a.a.createElement(S,null)))}var F=function(){var e=Object(s.a)(f),t=Object(i.a)(e,2),n=t[0];return t[1]?a.a.createElement("div",null,"loading..."):a.a.createElement(o.a,null,n?a.a.createElement(A,null):a.a.createElement(D,null))},U=n(38),P=function(e){var t={interceptors:{request:function(){var e=Object(E.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.options,t.url,t.path,t.route,n.headers["Content-Type"]="application/json",e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),response:function(){var e=Object(E.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.response,r=n,e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}};return a.a.createElement(U.b,Object.assign({url:d.apiHost,options:t},e))};function H(){return a.a.createElement(P,null,a.a.createElement(F,null))}n(59);u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(H,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9e04f56d.chunk.js.map