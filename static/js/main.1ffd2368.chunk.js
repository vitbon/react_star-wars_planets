(this["webpackJsonpreact_star-wars_planets"]=this["webpackJsonpreact_star-wars_planets"]||[]).push([[0],{39:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),i=a(30),r=a.n(i),l=(a(39),a(33)),o=a(9),d=a(10),j=a(13),m=a(12),p=a(11),h=a(2),b=a(18),u=a.n(b),_=a(31),O=a(15),f=a.n(O),x=(a(58),function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).closeModal=function(){s.setState({isOpen:!1}),window.history.back()},s.state={isOpen:!0,config:{method:"GET",url:"https://swapi.dev/api/planets/",params:{page:"".concat(e.page)}},citizens:""},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.location.data.person.residents.map((function(t){f.a.get(t).then((function(t){e.state.citizens?e.setState({citizens:e.state.citizens+", "+t.data.name}):e.setState({citizens:t.data.name})})).catch((function(){return alert("\ud83d\ude31 Axios request failed")}))}))}},{key:"render",value:function(){var e=this.props.location.data.person;return Object(s.jsx)(s.Fragment,{children:this.state.isOpen&&Object(s.jsx)("div",{className:"modal_overlay",children:Object(s.jsxs)("div",{className:"modal_window",children:[Object(s.jsxs)("div",{className:"modal_header",children:[Object(s.jsx)("span",{className:"modal_title",children:"Detailed Information"}),Object(s.jsx)("span",{className:"modal_close",onClick:this.closeModal,children:"X"})]}),Object(s.jsxs)("div",{className:"modal_body",children:[e.name?Object(s.jsx)("div",{className:"modal_field_title",children:Object(s.jsxs)("b",{children:[" \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",e.name.toUpperCase()]})}):Object(s.jsx)("div",{className:"modal_field_title_error",children:Object(s.jsx)("b",{children:" \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639"})}),e.rotation_period?Object(s.jsxs)("div",{className:"modal_field_title",children:[" \u041f\u0435\u0440\u0438\u043e\u0434 \u043e\u0431\u043e\u0440\u043e\u0442\u0430: ",e.rotation_period," "]}):Object(s.jsx)("div",{className:"modal_field_title_error",children:" \u041f\u0435\u0440\u0438\u043e\u0434 \u043e\u0431\u043e\u0440\u043e\u0442\u0430: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639 "}),e.diameter?Object(s.jsxs)("div",{className:"modal_field_title",children:[" \u0414\u0438\u0430\u043c\u0435\u0442\u0440: ",e.diameter," "]}):Object(s.jsx)("div",{className:"modal_field_title_error",children:" \u0414\u0438\u0430\u043c\u0435\u0442\u0440: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639 "}),e.climate?Object(s.jsxs)("div",{className:"modal_field_title",children:[" \u041a\u043b\u0438\u043c\u0430\u0442: ",e.climate," "]}):Object(s.jsx)("div",{className:"modal_field_title_error",children:" \u041a\u043b\u0438\u043c\u0430\u0442: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639 "}),e.gravity?Object(s.jsxs)("div",{className:"modal_field_title",children:[" \u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044f: ",e.gravity," "]}):Object(s.jsx)("div",{className:"modal_field_title_error",children:" \u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044f: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639 "}),e.terrain?Object(s.jsxs)("div",{className:"modal_field_title",children:[" \u0422\u0438\u043f \u043c\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438: ",e.terrain," "]}):Object(s.jsx)("div",{className:"modal_field_title_error",children:" \u0422\u0438\u043f \u043c\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639 "}),e.population?Object(s.jsxs)("div",{className:"modal_field_title",children:[" \u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435: ",e.population," "]}):Object(s.jsx)("div",{className:"modal_field_title_error",children:" \u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639 "}),this.state.citizens?Object(s.jsxs)("div",{className:"modal_field_title",children:[" \u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u0436\u0438\u0442\u0435\u043b\u0438: ",this.state.citizens," "]}):Object(s.jsx)("div",{className:"modal_field_title_error",children:" \u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u0436\u0438\u0442\u0435\u043b\u0438: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639 "})]}),Object(s.jsx)("div",{className:"modal_footer",children:Object(s.jsx)("button",{className:"modal_button",onClick:this.closeModal,children:"OK"})})]})})})}}]),a}(c.Component)),v=(a(59),function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={config:{method:"GET",url:"https://swapi.dev/api/planets/",params:{page:"".concat(e.page)}},persons:[]},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(_.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(this.state.config).then((function(e){return t.setState({persons:e.data.results}),e.data.results})).catch((function(){return alert("\ud83d\ude31 Axios request failed")}));case 2:this.state.persons.map((function(e){for(var t in e)"unknown"!==e[t]&&"0"!==e[t]&&"N/A"!==e[t]||(e[t]="")})),this.setState({persons:this.state.persons});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"container",children:this.state.persons.map((function(t){return Object(s.jsx)(p.b,{to:{pathname:"/page".concat(e.props.page,"/modal"),data:{person:t}},children:Object(s.jsxs)("div",{className:"card",children:[t.name?Object(s.jsx)("span",{className:"card__name",children:Object(s.jsxs)("b",{children:[" \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",t.name.toUpperCase()]})}):Object(s.jsx)("span",{className:"card__name_error",children:Object(s.jsx)("b",{children:" \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639"})}),t.climate?Object(s.jsxs)("span",{className:"card__field",children:[" \u041a\u043b\u0438\u043c\u0430\u0442: ",t.climate," "]}):Object(s.jsx)("span",{className:"card__name_error",children:" \u041a\u043b\u0438\u043c\u0430\u0442: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639 "}),t.population?Object(s.jsxs)("span",{className:"card__field",children:[" \u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435: ",t.population," "]}):Object(s.jsx)("span",{className:"card__name_error",children:" \u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435: \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u2639 "})]})},e.props.page+t.name)}))})}}]),a}(c.Component)),N=(a(65),function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=[1,2,3,4,5,6];return Object(s.jsx)(p.a,{basename:"/react_star-wars_planets/",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("nav",{className:"navigator",children:Object(s.jsx)("span",{children:e.map((function(e){return Object(s.jsxs)(p.c,{className:"nav_button",to:"/page".concat(e),children:["Page ","".concat(e)]},e)}))})}),Object(s.jsxs)(h.c,{children:[e.map((function(e){return Object(s.jsx)(h.a,{exact:!0,path:"/page".concat(e),children:Object(s.jsx)(v,{page:e},e)},e)})),e.map((function(e){return Object(s.jsx)(h.a,{path:"/page".concat(e,"/modal"),render:function(e){return Object(s.jsx)(x,Object(l.a)({},e))}},"modal".concat(e))})),Object(s.jsx)(h.a,{exact:!0,path:"/",children:Object(s.jsx)(v,{page:"1"},"1")})]})]})})}}]),a}(c.Component));r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.1ffd2368.chunk.js.map