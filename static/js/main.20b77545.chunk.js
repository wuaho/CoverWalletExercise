(this["webpackJsonpcw-app"]=this["webpackJsonpcw-app"]||[]).push([[0],{12:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(3),s=a.n(c),i=a(4),r=a(5),o=a(7),u=a(6),l=a.p+"static/media/coverwalletlogo.c0c36f4a.png",p=(a(12),a(0)),d=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={n:"",res:""},n}return Object(r.a)(a,[{key:"updateFibonacci",value:function(){var t=this.state.n;t<0||""===t||null===t||isNaN(t)?this.setState({res:""}):(console.log(t),this.setState({res:this.fibonacci(t)}))}},{key:"fibonacci",value:function(t){for(var e=1,a=0;t>=1;)e=(a=e+a)-e,t--;return a}},{key:"render",value:function(){var t=this;return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(p.jsx)("input",{"data-testid":"input",className:"N-input",type:"number",min:"0",placeholder:"Enter a number",onChange:function(e){return t.setState({n:e.target.value})}}),Object(p.jsx)("button",{"data-testid":"button",className:"Calc-btn",onClick:function(){return t.updateFibonacci()},children:"Calculate"}),Object(p.jsxs)("div",{"data-testid":"result",className:"Res-div",id:"result",children:[" ",this.state.res]})]})})}}]),a}(n.Component);a(14),a(15);s.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.20b77545.chunk.js.map