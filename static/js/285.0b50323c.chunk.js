"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[285],{285:function(e,a,t){t.r(a);var n=t(885),r=t(9434),s=t(9273),l=t(8928),o=t(4750),i=t(6592),p=t(2791),m=t(3329);a.default=function(){var e=(0,r.I0)(),a=(0,p.useState)(""),t=(0,n.Z)(a,2),u=t[0],d=t[1],c=(0,p.useState)(""),h=(0,n.Z)(c,2),Z=h[0],b=h[1],g=(0,p.useState)(""),x=(0,n.Z)(g,2),v=x[0],f=x[1],w=(0,p.useState)(null),z=(0,n.Z)(w,2),y=z[0],A=z[1],k=(0,p.useState)(null),_=(0,n.Z)(k,2),C=_[0],S=_[1],P=(0,p.useState)(null),j=(0,n.Z)(P,2),$=j[0],q=j[1],D=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"name":d(n);break;case"email":b(n);break;case"password":f(n);break;default:return}};return(0,m.jsxs)(l.Z,{component:"form",sx:{py:"35px",px:"30px",mx:"auto",mb:"30px",display:"flex",flexDirection:"column",gap:2,maxWidth:"350px",autoComplete:"off"},onSubmit:function(a){a.preventDefault(),a.target.elements.email.value.match(a.target.elements.email.pattern)||S(!0),a.target.elements.password.value.match(a.target.elements.password.pattern)||q(!0),a.target.elements.name.value.match(a.target.elements.name.pattern)||A(!0),e((0,s.z2)({name:u,email:Z,password:v})),d(""),b(""),f(""),q(!1),A(!1),S(!1)},children:[(0,m.jsx)(o.Z,{label:"Name",variant:"standard",color:"primary",size:"small",type:"text",name:"name",inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"},error:y,value:u,onChange:D,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,m.jsx)(o.Z,{label:"Email",variant:"standard",color:"primary",size:"small",type:"email",name:"email",error:C,inputProps:{pattern:"^([0-9a-zA-Zd_.-])+@(([a-zA-Zd-])+.)+([a-zA-Zd]{2,4})+$"},value:Z,onChange:D,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,m.jsx)(o.Z,{label:"Password",variant:"standard",type:"password",name:"password",value:v,onChange:D,error:$,inputProps:{pattern:"^.{4,8}$"},color:"primary",size:"small",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,m.jsx)(i.Z,{variant:"contained",type:"submit",children:"Register"})]})}}}]);
//# sourceMappingURL=285.0b50323c.chunk.js.map