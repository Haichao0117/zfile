import{aL as y,aM as c,r as M}from"./base.197bc1e5.js";/* empty css                */import{Z as P,a as q}from"./ZFormItem.f4459b46.js";/* empty css               *//* empty css              */import{l as D,a as F}from"./admin-setting.fad9817e.js";import{E as k}from"./request.19cbe8c5.js";import{r as i,o as L,Q as R,u as o,a as h,b as z,e as r,h as a,J as f}from"./index.bbf7818f.js";import{b as w}from"./route-block.9b0645f8.js";import{r as B}from"./BadgeCheckIcon.fc085fd1.js";import{E as C}from"./index.9aca9b8e.js";import{v as U}from"./directive.b8a17520.js";import"./index.c92ded65.js";import"./event.776e7e11.js";const u=i({username:"",password:"",repassword:""}),Z=i({username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7BA1\u7406\u5458\u8D26\u53F7"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],repassword:[{required:!0,validator:(n,e,s)=>{e===""?s(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")):e!==u.value.password?s(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!")):s()}}]}),l=i();function I(){const n=e=>{e.value.validate(s=>{s&&(l.value=!0,F(u.value).then(()=>{k({message:"\u4FDD\u5B58\u6210\u529F",type:"success"}),l.value=!0}))})};return L(()=>{D().then(e=>{u.value.username=e.data.username})}),{passwordData:u,updateLoading:l,updatePassword:n,passwordDataRules:Z}}const N=f(" \u5BC6\u7801\u4FE1\u606F "),J=f(" \u6B64\u5904\u53EF\u4EE5\u4FEE\u6539\u60A8\u7684\u7BA1\u7406\u5458\u767B\u5F55\u8D26\u53F7\u5BC6\u7801\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1 "),Q=f("\u4FDD\u5B58\u8BBE\u7F6E"),T={__name:"update-password",setup(n){const{passwordData:e,updateLoading:s,updatePassword:v,passwordDataRules:V}=I();let _=i();const x=()=>{v(_)};return(j,t)=>{const m=C,p=P,g=M,b=q,E=U;return R((h(),z(b,{model:o(e),rules:o(V),ref_key:"updatePasswordForm",ref:_},{"form-title":r(()=>[N]),"form-sub-title":r(()=>[J]),footer:r(()=>[a(g,{type:"primary",size:"default",icon:o(B),onClick:x},{default:r(()=>[Q]),_:1},8,["icon"])]),default:r(()=>[a(p,{prop:"username",label:"\u7BA1\u7406\u5458\u8D26\u53F7"},{default:r(()=>[a(m,{id:"username","prefix-icon":o(y),modelValue:o(e).username,"onUpdate:modelValue":t[0]||(t[0]=d=>o(e).username=d),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),a(p,{prop:"password",label:"\u65B0\u5BC6\u7801"},{default:r(()=>[a(m,{id:"password","prefix-icon":o(c),modelValue:o(e).password,"onUpdate:modelValue":t[1]||(t[1]=d=>o(e).password=d),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),a(p,{prop:"repassword",label:"\u91CD\u590D\u65B0\u5BC6\u7801"},{default:r(()=>[a(m,{id:"repassword","prefix-icon":o(c),modelValue:o(e).repassword,"onUpdate:modelValue":t[2]||(t[2]=d=>o(e).repassword=d),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[E,o(s)]])}}};typeof w=="function"&&w(T);export{T as default};