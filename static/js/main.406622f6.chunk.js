(this["webpackJsonpreact-password-generator"]=this["webpackJsonpreact-password-generator"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(9),s=n.n(a),u=(n(14),n(5)),o=n(8),i=n(3);function b(e){var t=[];return t.push(function(e){if(e.length<=5)return 40;if(e.length<=10)return 15;return 0}(e),function(e){return j(e,/[a-z]/g)}(e),function(e){return j(e,/[A-Z]/g)}(e),function(e){return j(e,/[0-9]/g)}(e),function(e){return j(e,/[^a-zA-Z0-9\s]/g)}(e),function(e){if((e.match(/(.)\1/g)||[]).length>0)return 10;return 0}(e)),function(e){var t=100;if(e.forEach((function(e){return t-=e})),t>=80)return{message:"Very Strong",strength:t};if(t>=60&&t<80)return{message:"Strong",strength:t};if(t>=40&&t<60)return{message:"OK",strength:t};if(t>=20&&t<40)return{message:"Weak",strength:t};return{message:"Very Weak",strength:t}}(t)}function j(e,t){var n=e.match(t)||[];return 0===n.length?20:n.length<=2?5:0}var l=n(2);var h=n(0);var d=function(){var e=Object(r.useState)(10),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("password"),s=Object(i.a)(a,2),j=s[0],d=s[1],g=Object(r.useState)({}),m=Object(i.a)(g,2),O=m[0],f=m[1],p=Object(r.useState)(!1),x=Object(i.a)(p,2),v=x[0],y=x[1],N=Object(r.useState)(!1),S=Object(i.a)(N,2),C=S[0],w=S[1],k=Object(r.useState)(b(j)),I=Object(i.a)(k,2),E=I[0],F=I[1],P=Object(r.useRef)(),M=function(e){f((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(u.a)({},e.target.id,e.target.checked))}))};return Object(r.useEffect)((function(){P.current.style.setProperty("--strength",E.strength)}),[E]),Object(r.useEffect)((function(){F(b(j))}),[j]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"Password Generator"}),Object(h.jsx)("h3",{className:"display-password",children:j}),E&&Object(h.jsx)("div",{ref:P,className:"password-meter",children:Object(h.jsxs)("span",{children:[E.message," (",E.strength,"/100)"]})}),Object(h.jsxs)("form",{className:"form-fields",onSubmit:function(e){e.preventDefault(),w(!0),y(!1);var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=function(e,t){for(var n=[],r=e;r<=t;r++)n.push(r);return n},a=c(97,122),s=c(65,90),u=c(48,57),o=[].concat(Object(l.a)(c(33,47)),Object(l.a)(c(58,64)),Object(l.a)(c(91,96)),Object(l.a)(c(123,126))),i=a;t&&(i=[].concat(Object(l.a)(i),Object(l.a)(s))),n&&(i=[].concat(Object(l.a)(i),Object(l.a)(u))),r&&(i=[].concat(Object(l.a)(i),Object(l.a)(o)));for(var b=[],j=0;j<e;j++)b.push(String.fromCharCode(i[Math.floor(Math.random()*i.length)]));return b.join("")}(n,O.uppercase,O.numbers,O.symbols);d(t)},children:[Object(h.jsx)("label",{htmlFor:"rangeNumber",children:"Number of Characters:"}),Object(h.jsxs)("div",{className:"input-range-number",children:[Object(h.jsx)("input",{type:"range",id:"rangeNumber",min:"1",max:"50",value:n,onChange:function(e){return c(parseInt(e.target.value))}}),Object(h.jsx)("input",{type:"number",id:"rangeNumber",min:"1",max:"50",value:n,onChange:function(e){return c(parseInt(e.target.value))},className:"number-input"})]}),Object(h.jsx)("label",{htmlFor:"uppercase",children:"Include Uppercase"}),Object(h.jsx)("input",{type:"checkbox",id:"uppercase",onChange:M}),Object(h.jsx)("label",{htmlFor:"numbers",children:"Include Numbers"}),Object(h.jsx)("input",{type:"checkbox",id:"numbers",onChange:M}),Object(h.jsx)("label",{htmlFor:"symbols",children:"Include Symbols"}),Object(h.jsx)("input",{type:"checkbox",id:"symbols",onChange:M}),Object(h.jsx)("button",{type:"submit",className:"btn",children:"Generate Secure Password \ud83d\udd12"}),C&&Object(h.jsx)("button",{type:"button",className:"btn",onClick:function(){navigator.clipboard.writeText(j),y(!0)},children:v?"Copied \u2714\ufe0f":"Copy Password To Clipboard \ud83d\udccb"})]})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.406622f6.chunk.js.map