(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{24:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(9),i=n.n(c),s=n(11),o=n(4),u=n(5),l=n(7),b=n(6),d=n(1),h=n.n(d),m=n(10),j=(n(24),n(0)),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;console.log(a,r),t.setState(Object(m.a)({},a,r))},t.handleSubmit=function(e){var n=t.state,a=n.name,r=n.number;e.preventDefault(),t.props.submit(a,r),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",value:e,id:this.nameInputId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:this.handleInputChange,required:!0})]}),Object(j.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:n,id:this.numberInputId,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:this.handleInputChange,required:!0})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),p=(n(26),function(t){var e=t.children;return Object(j.jsx)("ul",{className:"Contact__list",children:e})}),O=(n(27),function(t){var e=t.filter,n=t.changeFilter;return Object(j.jsx)("div",{children:Object(j.jsxs)("label",{children:["Filter by name ","  ",Object(j.jsx)("input",{type:"text",name:"filter",value:e,title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u0430\u0431\u043e\u043d\u0435\u043d\u0442\u0430",onChange:n})]})})}),v=(n(28),function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("div",{children:e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(j.jsxs)("li",{className:"ContactList__item",children:[e,": ",a,Object(j.jsx)("button",{type:"button",onClick:function(){return n(r)},children:"Delete"})]},r)}))})}),g=(n(29),n(30),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:h.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:h.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:h.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:h.a.generate(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.addContact=function(e,n){var a=t.state.contacts,r={id:h.a.generate(),name:e,number:n};a.some((function(t){return t.name===e||t.number===n}))?alert("".concat(e," is already in contacts.")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h2",{className:"Title",children:"Phonebook"}),Object(j.jsx)(f,{submit:this.addContact,contacts:n}),Object(j.jsx)("h2",{className:"Title",children:"Contacts"}),Object(j.jsx)(O,{filter:e,changeFilter:this.changeFilter}),Object(j.jsx)(p,{children:Object(j.jsx)(v,{contacts:this.getVisibleContacts(),onDeleteContact:this.deleteContact})})]})}}]),n}(a.Component));n(31);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.51266aa0.chunk.js.map