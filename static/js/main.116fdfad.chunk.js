(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"Statistics_list__1vw6F",item:"Statistics_item__11w2O"}},,function(e,t,n){e.exports={section:"Section_section__3POXE",title:"Section_title__1ed4l"}},function(e,t,n){e.exports={btnGroupe:"FeedbackOptions_btnGroupe__j6dL8",button:"FeedbackOptions_button__3-tAs"}},,,,,function(e,t,n){e.exports={notification:"Notification_notification__vXxCp"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),s=n.n(i),o=(n(17),n(7)),r=n(8),l=n(9),b=n(12),d=n(11),u=n(4),j=n.n(u),h=n(0),O=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:j.a.section,children:[Object(h.jsx)("h2",{className:j.a.title,children:t}),n]})},f=n(10),m=n.n(f),p=function(e){var t=e.message;return Object(h.jsx)("p",{className:m.a.notification,children:t})},x=n(5),v=n.n(x),k=function(e){var t=e.options,n=e.onLeaveFeedback,a=Object.keys(t);return Object(h.jsx)("ul",{className:v.a.btnGroupe,children:a.map((function(e,t){var a=e[0].toUpperCase()+e.slice(1);return Object(h.jsx)("li",{children:Object(h.jsx)("button",{type:"button",name:a,className:v.a.button,onClick:n,children:a})},t)}))})},_=n(2),g=n.n(_),N=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.percentage;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:g.a.list,children:[Object(h.jsxs)("li",{className:g.a.item,children:["Good: ",t]}),Object(h.jsxs)("li",{className:g.a.item,children:["Neutral: ",n]}),Object(h.jsxs)("li",{className:g.a.item,children:["Bad: ",a]}),Object(h.jsxs)("li",{className:g.a.item,children:["Total: ",c]}),Object(h.jsxs)("li",{className:g.a.item,children:["Positive feedback: ",t?i+"%":0]})]})})},F=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.feedbackIncrement=function(t){var n=t.target.textContent.toLowerCase();e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedbacks=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedbacks();return Math.round(e.state.good/t*100)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedbacks(),i=this.countPositiveFeedbackPercentage();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(k,{options:this.state,onLeaveFeedback:this.feedbackIncrement})}),Object(h.jsx)(O,{title:"Statistics",children:c>0?Object(h.jsx)(N,{good:t,neutral:n,bad:a,total:c,percentage:i}):Object(h.jsx)(p,{message:"No feedback given"})})]})}}]),n}(a.Component);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.116fdfad.chunk.js.map