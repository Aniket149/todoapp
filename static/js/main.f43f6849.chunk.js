(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),a=n(8),i=n.n(a),r=(n(15),n(7)),d=n(3),u=n(1);var s=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(d.a)(e,2),c=n[0],a=n[1],i=Object(o.useRef)(null);Object(o.useEffect)((function(){i.current.focus()}));var r=function(t){a(t.target.value)};return Object(u.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),a("")},children:t.edit?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"text",placeholder:"Update Your Item",value:c,name:"text",className:"todo-input edit",onChange:r,ref:i}),Object(u.jsx)("button",{className:"todo-button edit",children:"Update"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"text",placeholder:"Add a todo",value:c,name:"text",className:"todo-input",onChange:r,ref:i}),Object(u.jsx)("button",{className:"todo-button",children:"Add todo"})]})})},l=n(9),j=n(10);var b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,a=t.updateTodo,i=Object(o.useState)({id:null,value:""}),r=Object(d.a)(i,2),b=r[0],f=r[1];return b.id?Object(u.jsx)(s,{edit:b,onSubmit:function(t){a(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(u.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(u.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(u.jsxs)("div",{className:"icon",children:[Object(u.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(u.jsx)(j.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"What's the Plan for today?"}),Object(u.jsx)(s,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(r.a)(n));c(e)}}}),Object(u.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(r.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var m=function(){return Object(u.jsx)("div",{className:"todo-app",children:Object(u.jsx)(f,{})})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f43f6849.chunk.js.map