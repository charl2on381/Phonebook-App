"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[566],{6566:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(1413),s=t(4420),a=t(1134),l=t(4695),i=t(9467),o=t(208),u=t(8007),c=u.Ry({name:u.Z_().required("Name is required").max(30,"Max length must be less than 30 chars"),number:u.Z_().required("Phone is required").min(10,"Min length must be more than 6 chars").max(18,"Max length must be less than 18 chars")}),m=t(184),d=function(){var e,n,t=(0,s.v9)(i.Af),u=(0,s.I0)(),d=(0,a.cI)({resolver:(0,l.X)(c)}),x=d.register,f=d.reset,h=d.handleSubmit,p=d.formState.errors,g=function(e){var n=e.toLowerCase(),r=t.find((function(e){return e.name.toLowerCase()===n}));return r&&alert("".concat(e," is already exist")),r};return(0,m.jsx)("div",{className:"container mx-auto",children:(0,m.jsxs)("form",{onSubmit:h((function(e){g(e.name)||(u((0,o.uK)(e)),f())})),className:"flex gap-4 justify-center",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("input",(0,r.Z)((0,r.Z)({},x("name")),{},{type:"text",placeholder:"Insert name",className:"appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow w-full focus:nm-inset-gray-300 focus:outline-none"})),(0,m.jsx)("p",{className:"pt-1 text-red-500 text-sm text-center",children:null===(e=p.name)||void 0===e?void 0:e.message})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("input",(0,r.Z)((0,r.Z)({},x("number")),{},{type:"text",placeholder:"Insert phone",className:"appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow w-full focus:nm-inset-gray-300 focus:outline-none"})),(0,m.jsx)("p",{className:"pt-1 text-red-500 text-sm text-center",children:null===(n=p.number)||void 0===n?void 0:n.message})]}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{type:"submit",className:"rounded-full nm-flat-gray-200 hover:nm-flat-gray-200-lg leading-5 px-8 py-4 text-gray-600 font-bold  transition duration-200 ease-in-out transform hover:scale-110",children:"Add contact"})})]})})},x=t(9439),f=t(2791),h=t(3791),p=t(9141),g=t(3553),y=t(6895),v=(0,g.P1)([i.Af,y.AD],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),j=t(2497),b=function(){var e=(0,s.v9)(v),n=(0,s.I0)(),t=(0,f.useState)(null),a=(0,x.Z)(t,2),l=a[0],i=a[1],u=(0,f.useState)({}),c=(0,x.Z)(u,2),d=c[0],g=c[1];(0,f.useEffect)((function(){n((0,o.yF)())}),[n]);var y={position:"absolute",top:"30%",left:"30%",transform:"translate(-50%, -50%) ",zIndex:10};return(0,m.jsx)(m.Fragment,{children:e.length?(0,m.jsx)(h.M,{children:(0,m.jsx)("ul",{className:"px-6 grid grid-cols-3 py-6 gap-6 container mx-auto",children:e.map((function(e){var t=e.id,s=e.name,a=e.number;return(0,m.jsxs)(p.E.li,{layout:!0,initial:{opacity:.9},animate:{scale:l===t?1.5:1,opacity:l===t?1:.9},exit:{opacity:0,scale:0},transition:{duration:.5},className:"nm-flat-gray-200-lg rounded-lg p-8 text-center max-w-sm w-full",style:l===t?y:{},children:[(0,m.jsxs)("div",{className:"p-2",children:[(0,m.jsx)("p",{children:"Name "}),l===t?(0,m.jsx)("input",{onChange:function(e){d.id===t&&g((function(n){return(0,r.Z)((0,r.Z)({},n),{},{name:e.target.value})}))},value:d.name,className:"appearance-none text-center rounded-full nm-inset-gray-200 leading-5 mx-2 px-2 py-2 flex-grow w-full focus:nm-inset-gray-300 focus:outline-none"}):(0,m.jsx)("span",{className:"font-bold w-full text-lg",children:s})]}),(0,m.jsxs)("div",{className:"p-2",children:[(0,m.jsx)("p",{children:"Phone "}),l===t?(0,m.jsx)("input",{value:d.number,onChange:function(e){return g((function(n){return(0,r.Z)((0,r.Z)({},n),{},{number:e.target.value})}))},className:"appearance-none text-center rounded-full nm-inset-gray-200 leading-5 mx-2 px-2 py-2 flex-grow w-full focus:nm-inset-gray-300 focus:outline-none"}):(0,m.jsx)("span",{className:"font-bold text-lg",children:a})]}),(0,m.jsxs)("div",{className:"card-actions justify-end py-2",children:[l===t?(0,m.jsx)("button",{onClick:function(){return n((0,o.mP)(d)),void i(null)},className:"w-12 h-12 flex justify-center items-center rounded-full nm-convex-gray-200-xs hover:nm-inset-gray-200-xs hover:font-semibold text-sm",children:"Save"}):(0,m.jsx)("button",{className:"w-12 h-12 flex justify-center items-center rounded-full nm-convex-gray-200-xs hover:nm-inset-gray-200-xs hover:font-semibold text-sm",onClick:function(){return function(e){var n=e.id,t=e.name,r=e.number;i(l===n?null:n),g({id:n,name:t,number:r})}({id:t,number:a,name:s})},children:"Edit"}),(0,m.jsx)("button",{onClick:function(){return n((0,o.GK)(t))},className:"w-12 h-12 flex justify-center items-center rounded-full nm-convex-gray-200-xs text-red-500 hover:nm-inset-gray-200-xs hover:font-semibold text-sm",children:"Delete"}),l===t&&(0,m.jsx)(p.E.button,{initial:{scale:0},animate:{scale:1},exit:{scale:0},onClick:function(){return i(null)},className:"w-12 h-12 flex justify-center items-center rounded-full nm-convex-gray-200-xs hover:nm-inset-gray-200-xs hover:font-semibold text-sm",children:"Close"})]})]},t)}))})}):(0,m.jsx)(j.Z,{message:"No contacts"})})},N=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{}),(0,m.jsx)("div",{className:"divider py-3 font-bold text-xl",children:"Contacts"}),(0,m.jsx)(b,{})]})}}}]);
//# sourceMappingURL=566.8967540c.chunk.js.map