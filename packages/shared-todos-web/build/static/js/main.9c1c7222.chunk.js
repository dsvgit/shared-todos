(this["webpackJsonpshared-todos-web"]=this["webpackJsonpshared-todos-web"]||[]).push([[0],{36:function(e,t,n){e.exports=n(57)},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(31),u=n.n(c),i=n(7),o=n(4),l=n(18),s=n(32),p=n(13),d=(n(49),n(50),{apiHost:"https://us-central1-shared-todos-fb.cloudfunctions.net",firebaseConfig:{apiKey:"AIzaSyDXyJwQbD7bYdCj-AkXYLM80j3oVFHGIcw",authDomain:"shared-todos-fb.firebaseapp.com",databaseURL:"https://shared-todos-fb.firebaseio.com",projectId:"shared-todos-fb",storageBucket:"shared-todos-fb.appspot.com",messagingSenderId:"92468362104",appId:"1:92468362104:web:c66efaad8189915ebde68d"}});p.initializeApp(d.firebaseConfig);var f=p.auth(),m=p.firestore(),h=new p.auth.GoogleAuthProvider;m.enablePersistence().catch((function(e){"failed-precondition"===e.code||e.code,console.error(e)}));var b=n(2),v=n.n(b),E=n(8);var O=function(){function e(){return(e=Object(E.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.signInWithPopup(h);case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.apply(this,arguments)}},"Sign in with google"))};var j=function(e){var t=e.children,n=e.title,r=f.currentUser,c=r.name,u=r.photoURL;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",null,c),a.a.createElement("img",{width:48,height:48,src:u,alt:""}),a.a.createElement("button",{onClick:function(){f.signOut()}},"logout")),n&&a.a.createElement("div",null,a.a.createElement("strong",null,n)),a.a.createElement("div",null,t))};var k=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],u=Object(r.useState)(null),o=Object(i.a)(u,2),l=o[0],s=o[1];function p(){return(p=Object(E.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(n),c(!0),t.abrupt("return",new Promise((function(t){e.current=t})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{isOpen:a,initialData:l,open:function(e){return p.apply(this,arguments)},close:function(t){s(null),c(!1),e.current&&e.current(t)}}};var w=function(e){var t=e.close,n=Object(r.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1];return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:u,onChange:function(e){return o(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return t({title:u})}},"create"),a.a.createElement("button",{onClick:function(){return t()}},"close")))},y=n(22);function x(){return m.collection("lists")}function g(){return m.collection("todos")}var C=function(){var e=f.currentUser,t=e.uid,n=e.email,r=k(),c=x(),u=function(e){var t=x().where("shared","array-contains",e);return Object(y.a)(t,{idField:"id"})}(n),o=Object(i.a)(u,1)[0];function s(){return(s=Object(E.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.open();case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,c.add({title:a.title,createdAt:p.firestore.FieldValue.serverTimestamp(),uid:t,shared:[n]});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.doc(t).delete();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement(j,{title:"lists overview"},a.a.createElement("button",{onClick:function(){return s.apply(this,arguments)}},"create list"),a.a.createElement("div",null,o&&o.map((function(e){return a.a.createElement("div",{key:e.id},a.a.createElement("span",null,e.id)," ",a.a.createElement(l.b,{to:"/".concat(e.id)},e.title),a.a.createElement("button",{onClick:function(){return function(e){return d.apply(this,arguments)}(e.id)}},"remove"))}))),r.isOpen&&a.a.createElement(w,r))};var I=function(e){var t=e.close,n=Object(r.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1];return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:u,onChange:function(e){return o(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return t({title:u})}},"create"),a.a.createElement("button",{onClick:function(){return t()}},"close")))};var S=function(e){var t=e.onShare,n=e.close,c=Object(r.useState)(""),u=Object(i.a)(c,2),o=u[0],l=u[1];return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:o,onChange:function(e){return l(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return t(o)}},"share"),a.a.createElement("button",{onClick:function(){return n()}},"close")))},D=p.firestore.FieldValue,U=D.serverTimestamp,A=D.arrayUnion,F=D.arrayRemove;var P=function(){var e=f.currentUser.uid,t=Object(o.f)().listId,n=k(),c=k(),u=x(),s=g(),p=function(e){var t=g().where("listId","==",e);return Object(y.a)(t,{idField:"id"})}(t),d=Object(i.a)(p,1)[0],h=function(e){var t=Object(y.b)(m.doc("lists/".concat(e))),n=Object(i.a)(t,1)[0];return n&&n.data()}(t);function b(){return(b=Object(E.a)(v.a.mark((function r(){var a;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.open();case 2:if(a=r.sent){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,s.add({listId:t,uid:e,title:a.title,isDone:!1,createdAt:U()});case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function O(){return(O=Object(E.a)(v.a.mark((function e(t,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.doc(t).update({isDone:!n});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.open();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(E.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.doc(t).update({shared:A(n)});case 2:c.close();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(E.a)(v.a.mark((function n(r){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(f.currentUser.email!==r&&h.uid===e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,u.doc(t).update({shared:F(r)});case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return a.a.createElement(j,{title:"todos"},a.a.createElement(l.b,{to:"/"},"<--"," back"),h&&a.a.createElement(r.Fragment,null,a.a.createElement("div",null,h.title),h.shared&&a.a.createElement("div",null,"shared with:"," ",a.a.createElement("i",null,h.shared.map((function(e){return a.a.createElement("span",{onClick:function(){return function(e){return D.apply(this,arguments)}(e)}}," ",e," ")}))))),a.a.createElement("button",{onClick:function(){return b.apply(this,arguments)}},"create todo"),a.a.createElement("button",{onClick:function(){return w.apply(this,arguments)}},"share"),a.a.createElement("div",null,d&&d.map((function(e){return a.a.createElement("div",{key:e.id},a.a.createElement("input",{type:"checkbox",checked:e.isDone,onChange:function(){return function(e,t){return O.apply(this,arguments)}(e.id,e.isDone)}}),a.a.createElement("span",null,e.id)," ",a.a.createElement("span",null,e.title))}))),n.isOpen&&a.a.createElement(I,n),c.isOpen&&a.a.createElement(S,Object.assign({},c,{onShare:function(e){return C.apply(this,arguments)}})))};function R(){return a.a.createElement(o.c,null,a.a.createElement(o.a,{path:"/"},a.a.createElement(O,null)))}function H(){return a.a.createElement(o.c,null,a.a.createElement(o.a,{exact:!0,path:"/"},a.a.createElement(C,null)),a.a.createElement(o.a,{exact:!0,path:"/:listId"},a.a.createElement(P,null)))}var J=function(){var e=Object(s.a)(f),t=Object(i.a)(e,2),n=t[0];return t[1]?a.a.createElement("div",null,"loading..."):a.a.createElement(l.a,null,n?a.a.createElement(H,null):a.a.createElement(R,null))},L=n(35),T=function(e){var t={interceptors:{request:function(){var e=Object(E.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.options,t.url,t.path,t.route,n.headers["Content-Type"]="application/json",e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),response:function(){var e=Object(E.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.response,r=n,e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}};return a.a.createElement(L.b,Object.assign({url:d.apiHost,options:t},e))};function V(){return a.a.createElement(T,null,a.a.createElement(J,null))}n(56);u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(V,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9c1c7222.chunk.js.map