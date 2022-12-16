"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[130],{2130:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(6015),a=n(4565),o=n(885),i=n(9434),s=n(3634),u=n(8928),c=n(4750),l=n(6592),m=n(2791),d=n(3329);function p(){var e=(0,i.I0)(),t=(0,m.useState)(""),n=(0,o.Z)(t,2),r=n[0],a=n[1],p=(0,m.useState)(""),x=(0,o.Z)(p,2),h=x[0],f=x[1],b=(0,m.useState)(null),g=(0,o.Z)(b,2),v=g[0],y=g[1],Z=(0,m.useState)(null),j=(0,o.Z)(Z,2),w=j[0],C=j[1],k=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":f(r);break;default:return}};return(0,d.jsxs)(u.Z,{component:"form",sx:{py:"35px",px:"30px",mx:"auto",mb:"30px",display:"flex",flexDirection:"column",gap:2,maxWidth:"350px",autoComplete:"off"},onSubmit:function(t){t.preventDefault(),t.target.elements.name.value.match(t.target.elements.name.pattern)||y(!0),t.target.elements.number.value.match(t.target.elements.number.pattern)||C(!0),e((0,s.uK)({name:r,number:h})),a(""),f(""),y(!1),C(!1)},children:[(0,d.jsx)(c.Z,{required:!0,error:v,label:"Name",type:"text",name:"name",value:r,onChange:k,variant:"standard",color:"primary",size:"small",inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"},autoComplete:"off",helperText:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,d.jsx)(c.Z,{required:!0,error:w,label:"Number",type:"tel",name:"number",value:h,variant:"standard",color:"primary",size:"small",onChange:k,inputProps:{pattern:"^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$"},helperText:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,d.jsx)(l.Z,{type:"submit",variant:"contained",children:"Add contact"})]})}var x=n(6916),h=function(e){return e.contacts.isLoading},f=function(e){return e.contacts.error},b=function(e){return e.filter},g=(0,x.P1)([function(e){return e.contacts.items},b],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),v=n(4808),y=function(){var e=(0,i.I0)(),t=(0,i.v9)(b);return(0,d.jsx)(c.Z,{sx:{width:"400px"},variant:"outlined",color:"primary",size:"small",label:"Find contacts by name",type:"text",name:"name",value:t,onChange:function(t){return e((0,v.M)(t.target.value.trim()))}})},Z=n(3120),j=n(4013),w=n(9604),C=n(7247),k=function(){var e=(0,i.v9)(h),t=(0,i.v9)(g),n=(0,i.v9)(f),a=(0,i.I0)();return(0,d.jsxs)(r.Z,{marginX:"auto",width:"400px",children:[(0,d.jsx)(y,{}),(0,d.jsxs)(Z.Z,{variant:"standard",sx:{bgcolor:"background.body",marginX:"auto",width:"100%",marginTop:"40px",maxWidth:400,borderRadius:"sm",boxShadow:"sm","--List-decorator-size":"48px","--List-item-paddingLeft":"1.5rem","--List-item-paddingRight":"1rem"},children:[e&&!n&&(0,d.jsx)("b",{children:"Request in progress..."}),n&&(0,d.jsx)("p",{children:n}),t.map((function(e){return(0,d.jsxs)(j.Z,{sx:{borderBottom:"1px solid grey",width:"100%",display:"flex",justifyContent:"space-between"},children:[e.name,": ",e.number,(0,d.jsx)(w.ZP,{"aria-label":"Delete",size:"sm",color:"primary",onClick:function(){return a((0,s.GK)(e.id))},children:(0,d.jsx)(C.Z,{color:"warning"})})]},e.id)}))]})]})},z=function(){var e=(0,i.I0)();return(0,m.useEffect)((function(){e((0,s.yF)())}),[e]),(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(a.Z,{component:"h1",color:"primary.light",variant:"h2",textAlign:"center",mb:"20px",children:"Phonebook"}),(0,d.jsx)(p,{}),(0,d.jsx)(a.Z,{component:"h2",variant:"h4",color:"grey.500",textAlign:"center",mb:"10px",children:"Contacts"}),(0,d.jsx)(k,{})]})}}}]);
//# sourceMappingURL=130.eb82b5ef.chunk.js.map