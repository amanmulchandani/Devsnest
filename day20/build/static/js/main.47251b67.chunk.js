(this.webpackJsonpday20=this.webpackJsonpday20||[]).push([[0],[,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(3),s=n.n(i),r=n(4),o=(n(9),n(0)),d=function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"name",children:e.name}),Object(o.jsxs)("div",{className:"value",children:["Calories: ",e.value]}),Object(o.jsx)("button",{className:"delete-btn",onClick:function(t){var n=e.state.filter((function(t){return t.id!==e.id}));console.log(n),e.setState(n)},children:"Delete"})]})},u=(n(11),[{id:0,name:"Pizza",amount:"500"},{id:1,name:"Burger",amount:"300"},{id:2,name:"Lasagna",amount:"220"},{id:3,name:"Chowmein",amount:"146"},{id:4,name:"Biscuit",amount:"60"},{id:5,name:"Biryani",amount:"263"}]),m=function(){var e=Object(a.useState)(u),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsx)("div",{className:"content",children:Object(o.jsx)("div",{className:"content-box",children:n.length>0?n.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d,{state:n,setState:c,id:e.id,name:e.name,value:e.amount},t)})})):"No Objects Left"})})},j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(m,{})})};n(12);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.47251b67.chunk.js.map