(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{17:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var c,i,a,o,s=e(0),l=e.n(s),r=e(9),j=e.n(r),b=(e(17),e(3)),d=e(2),h=e(4),u=e(1),p="--------------------------------------------",x=function(){for(var n=Object(s.useState)("test"),t=Object(d.a)(n,2),e=t[0],c=t[1],i=Object(s.useState)(!1),a=Object(d.a)(i,2),o=a[0],l=a[1],r=Object(s.useState)(),j=Object(d.a)(r,2),b=j[0],h=j[1],x=Object(s.useState)(O()),w=Object(d.a)(x,2),S=w[0],k=w[1],m=Object(s.useState)(""),y=Object(d.a)(m,2),C=y[0],L=y[1],z=Object(s.useState)(""),F=Object(d.a)(z,2),D=F[0],B=F[1],I=Object(s.useState)(""),J=Object(d.a)(I,2),M=J[0],P=J[1],T=Object(s.useState)([]),_=Object(d.a)(T,2),E=_[0],Y=_[1],q=Object(s.useState)([]),A=Object(d.a)(q,2),G=A[0],H=A[1],K=Object(s.useState)([]),N=Object(d.a)(K,2),Q=N[0],R=N[1],U=[],V=0;V<E.length;V++)U.push(Object(u.jsx)("option",{children:E[V]}));for(var W=[],X=0;X<G.length;X++)W.push(Object(u.jsx)("option",{children:G[X]}));for(var Z=[],$=0;$<Q.length;$++)Z.push(Object(u.jsx)("option",{children:Q[$]}));var nn="";return nn=""!=C?"".concat(S," ").concat(C,")").concat(D,"\n\n").concat(b,"\n").concat(p,"\n"):"".concat(S," ").concat(D,"\n\n").concat(b,"\n").concat(p,"\n"),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{isDisplay:o,children:Object(u.jsxs)("dialog",{children:[Object(u.jsx)("span",{children:"\u25a0\u30d7\u30ec\u30d3\u30e5\u30fc"}),Object(u.jsx)("textarea",{readOnly:!0,value:nn}),Object(u.jsx)("span",{children:"\u25a0\u65e5\u4ed8"}),Object(u.jsx)("input",{type:"text",value:S,list:"dateList",onChange:function(n){k(n.target.value)}}),Object(u.jsx)("datalist",{id:"dateList",children:U}),Object(u.jsx)("span",{children:"\u25a0\u6240\u5c5e"}),Object(u.jsx)("input",{type:"text",value:C,placeholder:"\u4f8b\uff09CSC",list:"affiliationList",onChange:function(n){L(n.target.value)}}),Object(u.jsx)("datalist",{id:"affiliationList",children:W}),Object(u.jsx)("span",{children:"\u25a0\u540d\u524d"}),Object(u.jsx)("input",{type:"text",value:D,placeholder:"\u4f8b\uff09\u3007\u3007\u69d8",list:"nameList",onChange:function(n){B(n.target.value)}}),Object(u.jsx)("datalist",{id:"nameList",children:Z}),Object(u.jsx)("button",{onClick:function(n){l(!1),L(""),B("")},children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(u.jsx)("button",{onClick:function(n){P(""!=C?M+S+" "+C+")"+D+"\n\n"+b+"\n"+p+"\n":M+S+" "+D+"\n\n"+b+"\n"+p+"\n"),l(!1),E.includes(S)||(E.push(S),Y(E)),G.includes(C)||(G.push(C),H(G)),Q.includes(D)||(Q.push(D),R(Q)),L(""),B("")},children:"\u78ba\u5b9a"})]})}),Object(u.jsxs)(g,{children:[Object(u.jsx)("span",{children:"\u3000\u25a0\u30d9\u30fc\u30b9\u30c6\u30ad\u30b9\u30c8"}),Object(u.jsx)("textarea",{value:e,onChange:function(n){c(n.target.value)}})]}),Object(u.jsxs)(f,{children:[Object(u.jsx)("button",{onClick:function(){var n;l(!0),h(null===(n=window.getSelection())||void 0===n?void 0:n.toString())},children:"\u62bd\u51fa"}),Object(u.jsx)("button",{onClick:function(){P("")},children:"\u30ea\u30bb\u30c3\u30c8"})]}),Object(u.jsxs)(g,{children:[Object(u.jsx)("span",{children:"\u3000\u25a0\u62bd\u51fa\u7d50\u679c"}),Object(u.jsx)("textarea",{value:M})]})]})},O=function(){var n=new Date;return n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate()},g=(h.a.div(c||(c=Object(b.a)(["\n  color: #ffb700;\n  font-size: 30px;\n  font-weight: 600;\n"]))),h.a.div(i||(i=Object(b.a)(["\n  background-color: #b0ee97;\n  display: inline-block;\n  vertical-align: top;\n  width: calc(50% - 40px);\n  height: 100%;\n  & textarea {\n    resize:none;\n    margin-left: 10px;\n    margin-bottom: 10px;\n    width: calc(100% - 20px);\n    height: calc(100% - 30px);\n    box-sizing: border-box; \n  }\n  & span {\n    font-size: 15px;\n  }\n"])))),f=h.a.div(a||(a=Object(b.a)(["\n  background-color: #b0ee97;\n  display: inline-block;\n  vertical-align: top;\n  width: 80px;\n  height: 100%;\n  display: inline-flex;\n  flex-flow: column;\n  justify-content: center;\n  & button {\n    width: 100%;\n  }\n"]))),v=h.a.div(o||(o=Object(b.a)(["\n  display: ",";\n  background-color: #0000007f;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  & span {\n    font-size: 15px;\n  }\n  & dialog {\n    background-color: white;\n    display: inline-block;\n    width: 50%;\n    height: 300px;\n    top: 50%;\n    left: 50%;\n    padding: 2%;\n    transform: translate(-50%,-50%);\n  }\n  & textarea {\n    resize:none;\n    width: 100%;\n    height: 100px;\n  }\n  & input {\n    width: 100%;\n    height: 20px;\n  }\n  & button {\n    width: 100px;\n    height: 30px;\n    margin-top: 5px;\n    margin-right: 5px;\n    bottom: 10px;\n  }\n  \n"])),(function(n){return n.isDisplay?"block":"none"})),w=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),c(n),i(n),a(n),o(n)}))};j.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),w()}},[[23,1,2]]]);
//# sourceMappingURL=main.3b9593ab.chunk.js.map