(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5182],{95639:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-validation",function(){return a(57999)}])},56456:function(e,r,a){"use strict";var t=a(85893),i=a(67294),o=a(90948),s=a(50135);let l=(0,o.ZP)(s.Z)(e=>{let{theme:r}=e;return{alignItems:"flex-start","& .MuiInputLabel-root":{transform:"none",lineHeight:1.154,position:"relative",marginBottom:r.spacing(1),fontSize:r.typography.body2.fontSize,color:"".concat(r.palette.text.primary," !important")},"& .MuiInputBase-root":{borderRadius:8,backgroundColor:"transparent !important",border:"1px solid rgba(".concat(r.palette.customColors.main,", 0.2)"),transition:r.transitions.create(["border-color","box-shadow"],{duration:r.transitions.duration.shorter}),"&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover":{borderColor:"rgba(".concat(r.palette.customColors.main,", 0.28)")},"&:before, &:after":{display:"none"},"&.MuiInputBase-sizeSmall":{borderRadius:6},"&.Mui-error":{borderColor:r.palette.error.main},"&.Mui-focused":{boxShadow:r.shadows[2],"& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transform:"translateX(4px)"},"&.MuiInputBase-colorPrimary":{borderColor:r.palette.primary.main},"&.MuiInputBase-colorSecondary":{borderColor:r.palette.secondary.main},"&.MuiInputBase-colorInfo":{borderColor:r.palette.info.main},"&.MuiInputBase-colorSuccess":{borderColor:r.palette.success.main},"&.MuiInputBase-colorWarning":{borderColor:r.palette.warning.main},"&.MuiInputBase-colorError":{borderColor:r.palette.error.main},"&.Mui-error":{borderColor:r.palette.error.main}},"&.Mui-disabled":{backgroundColor:"".concat(r.palette.action.selected," !important")},"& .MuiInputAdornment-root":{marginTop:"0 !important"}},"& .MuiInputBase-input":{color:r.palette.text.secondary,"&:not(textarea)":{padding:"15.5px 13px"},"&:not(textarea).MuiInputBase-inputSizeSmall":{padding:"7.5px 13px"},"&:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transition:r.transitions.create(["opacity","transform"],{duration:r.transitions.duration.shorter})},"&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)":{paddingLeft:0},"&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)":{paddingRight:0}},"& .MuiFormHelperText-root":{lineHeight:1.154,margin:r.spacing(1,0,0),color:r.palette.text.secondary,fontSize:r.typography.body2.fontSize,"&.Mui-error":{color:r.palette.error.main}},"& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus":{backgroundColor:"transparent"},"& .MuiSelect-filled .MuiChip-root":{height:22},"& .MuiAutocomplete-input":{paddingLeft:"6px !important",paddingTop:"7.5px !important",paddingBottom:"7.5px !important","&.MuiInputBase-inputSizeSmall":{paddingLeft:"6px !important",paddingTop:"2.5px !important",paddingBottom:"2.5px !important"}},"& .MuiAutocomplete-inputRoot":{paddingTop:"8px !important",paddingLeft:"8px !important",paddingBottom:"8px !important","&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart":{paddingLeft:"13px !important"},"&.MuiInputBase-sizeSmall":{paddingTop:"5px !important",paddingLeft:"5px !important",paddingBottom:"5px !important","& .MuiAutocomplete-tag":{margin:2,height:22}}},"& .MuiInputBase-multiline":{padding:"15.25px 13px","&.MuiInputBase-sizeSmall":{padding:"7.25px 13px"},"& textarea.MuiInputBase-inputSizeSmall:placeholder-shown":{overflowX:"hidden"}},"& + .react-datepicker__close-icon":{top:11,"&:after":{fontSize:"1.6rem !important"}}}}),n=(0,i.forwardRef)((e,r)=>{let{size:a="small",InputLabelProps:i,...o}=e;return(0,t.jsx)(l,{size:a,inputRef:r,...o,variant:"filled",InputLabelProps:{...i,shrink:!0}})});r.Z=n},25358:function(e,r,a){"use strict";var t=a(85893),i=a(86886);let o=e=>{let{title:r,subtitle:a}=e;return(0,t.jsxs)(i.ZP,{item:!0,xs:12,children:[r,a||null]})};r.Z=o},57999:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return X}});var t=a(85893),i=a(41664),o=a.n(i),s=a(86886),l=a(90948),n=a(15861),d=a(25358),u=a(67294),c=a(66242),m=a(49033),p=a(11057),x=a(69368),h=a(18972),f=a(40476),b=a(78445),j=a(93946),Z=a(68061),g=a(94054),w=a(44267),v=a(56815),y=a(87109),P=a(50480),S=a(56456),M=a(86501),N=a(9198),C=a.n(N),T=a(87536),q=a(63730);let I={dob:null,email:"",radio:"",select:"",lastName:"",password:"",textarea:"",firstName:"",checkbox:!1},B=(0,u.forwardRef)((e,r)=>{let{...a}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,inputRef:r,...a,sx:{width:"100%"}})}),k=()=>{let[e,r]=(0,u.useState)({password:"",showPassword:!1}),{control:a,handleSubmit:i,formState:{errors:o}}=(0,T.cI)({defaultValues:I}),l=()=>{r({...e,showPassword:!e.showPassword})},n=()=>M.ZP.success("Form Submitted");return(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(b.Z,{title:"Basic"}),(0,t.jsx)(w.Z,{children:(0,t.jsx)("form",{onSubmit:i(n),children:(0,t.jsxs)(s.ZP,{container:!0,spacing:5,children:[(0,t.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(T.Qr,{name:"firstName",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,value:r,label:"First Name",onChange:a,placeholder:"Leonard",error:!!o.firstName,"aria-describedby":"validation-basic-first-name",...o.firstName&&{helperText:"This field is required"}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(T.Qr,{name:"lastName",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,value:r,label:"Last Name",onChange:a,placeholder:"Carter",error:!!o.lastName,"aria-describedby":"validation-basic-last-name",...o.lastName&&{helperText:"This field is required"}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(T.Qr,{name:"email",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,type:"email",value:r,label:"Email",onChange:a,error:!!o.email,placeholder:"carterleonard@gmail.com","aria-describedby":"validation-basic-email",...o.email&&{helperText:"This field is required"}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(T.Qr,{name:"password",control:a,rules:{required:!0},render:r=>{let{field:{value:a,onChange:i}}=r;return(0,t.jsx)(S.Z,{fullWidth:!0,value:a,label:"Password",onChange:i,id:"validation-basic-password",error:!!o.password,type:e.showPassword?"text":"password",...o.password&&{helperText:"This field is required"},InputProps:{endAdornment:(0,t.jsx)(y.Z,{position:"end",children:(0,t.jsx)(j.Z,{edge:"end",onClick:l,onMouseDown:e=>e.preventDefault(),"aria-label":"toggle password visibility",children:(0,t.jsx)(q.Z,{fontSize:"1.25rem",icon:e.showPassword?"tabler:eye":"tabler:eye-off"})})})}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(T.Qr,{name:"dob",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsx)(C(),{selected:r,showYearDropdown:!0,showMonthDropdown:!0,onChange:e=>a(e),placeholderText:"MM/DD/YYYY",customInput:(0,t.jsx)(B,{value:r,onChange:a,label:"Date of Birth",error:!!o.dob,"aria-describedby":"validation-basic-dob",...o.dob&&{helperText:"This field is required"}})})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,t.jsx)(T.Qr,{name:"select",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsxs)(S.Z,{select:!0,fullWidth:!0,defaultValue:"",label:"Country",SelectProps:{value:r,onChange:e=>a(e)},id:"validation-basic-select",error:!!o.select,"aria-describedby":"validation-basic-select",...o.select&&{helperText:"This field is required"},children:[(0,t.jsx)(h.Z,{value:"UK",children:"UK"}),(0,t.jsx)(h.Z,{value:"USA",children:"USA"}),(0,t.jsx)(h.Z,{value:"Australia",children:"Australia"}),(0,t.jsx)(h.Z,{value:"Germany",children:"Germany"})]})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(T.Qr,{name:"textarea",control:a,rules:{required:!0},render:e=>{let{field:r}=e;return(0,t.jsx)(S.Z,{rows:4,fullWidth:!0,multiline:!0,...r,label:"Bio",error:!!o.textarea,"aria-describedby":"validation-basic-textarea",...o.textarea&&{helperText:"This field is required"}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsxs)(g.Z,{error:!!o.radio,children:[(0,t.jsx)(f.Z,{children:"Gender"}),(0,t.jsx)(T.Qr,{name:"radio",control:a,rules:{required:!0},render:e=>{let{field:r}=e;return(0,t.jsxs)(Z.Z,{row:!0,...r,"aria-label":"gender",name:"validation-basic-radio",children:[(0,t.jsx)(P.Z,{value:"female",label:"Female",sx:o.radio?{color:"error.main"}:null,control:(0,t.jsx)(m.Z,{sx:o.radio?{color:"error.main"}:null})}),(0,t.jsx)(P.Z,{value:"male",label:"Male",sx:o.radio?{color:"error.main"}:null,control:(0,t.jsx)(m.Z,{sx:o.radio?{color:"error.main"}:null})}),(0,t.jsx)(P.Z,{value:"other",label:"Other",sx:o.radio?{color:"error.main"}:null,control:(0,t.jsx)(m.Z,{sx:o.radio?{color:"error.main"}:null})})]})}}),o.radio&&(0,t.jsx)(v.Z,{id:"validation-basic-radio",sx:{mx:0,color:"error.main",fontSize:e=>e.typography.body2.fontSize},children:"This field is required"})]})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,sx:{pt:e=>"".concat(e.spacing(2)," !important")},children:(0,t.jsxs)(g.Z,{children:[(0,t.jsx)(T.Qr,{name:"checkbox",control:a,rules:{required:!0},render:e=>{let{field:r}=e;return(0,t.jsx)(P.Z,{label:"Agree to our terms and conditions",sx:o.checkbox?{color:"error.main"}:null,control:(0,t.jsx)(x.Z,{...r,name:"validation-basic-checkbox",sx:o.checkbox?{color:"error.main"}:null})})}}),o.checkbox&&(0,t.jsx)(v.Z,{id:"validation-basic-checkbox",sx:{mx:0,color:"error.main",fontSize:e=>e.typography.body2.fontSize},children:"This field is required"})]})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(p.Z,{type:"submit",variant:"contained",children:"Submit"})})]})})})]})};var z=a(98456);let _={email:"",lastName:"",password:"",firstName:""},W=()=>{let[e,r]=(0,u.useState)(!1),[a,i]=(0,u.useState)({password:"",showPassword:!1}),{control:o,handleSubmit:l,formState:{errors:n}}=(0,T.cI)({defaultValues:_}),d=()=>{i({...a,showPassword:!a.showPassword})},m=async()=>{r(!0),await new Promise(e=>setTimeout(e,2e3)),r(!1),M.ZP.success("Form Submitted")};return(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(b.Z,{title:"Async Submit"}),(0,t.jsx)(w.Z,{children:(0,t.jsx)("form",{onSubmit:l(m),children:(0,t.jsxs)(s.ZP,{container:!0,spacing:5,children:[(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(T.Qr,{name:"firstName",control:o,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,value:r,label:"First Name",onChange:a,placeholder:"Leonard",error:!!n.firstName,"aria-describedby":"validation-async-first-name",...n.firstName&&{helperText:"This field is required"}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(T.Qr,{name:"lastName",control:o,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,value:r,label:"Last Name",onChange:a,placeholder:"Carter",error:!!n.lastName,"aria-describedby":"validation-async-last-name",...n.lastName&&{helperText:"This field is required"}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(T.Qr,{name:"email",control:o,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,type:"email",value:r,label:"Email",onChange:a,error:!!n.email,placeholder:"carterleonard@gmail.com","aria-describedby":"validation-async-email",...n.email&&{helperText:"This field is required"}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(T.Qr,{name:"password",control:o,rules:{required:!0},render:e=>{let{field:{value:r,onChange:i}}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,value:r,label:"Password",onChange:i,id:"validation-async-password",error:!!n.password,type:a.showPassword?"text":"password",...n.password&&{helperText:"This field is required"},InputProps:{endAdornment:(0,t.jsx)(y.Z,{position:"end",children:(0,t.jsx)(j.Z,{edge:"end",onClick:d,onMouseDown:e=>e.preventDefault(),"aria-label":"toggle password visibility",children:(0,t.jsx)(q.Z,{fontSize:"1.25rem",icon:a.showPassword?"tabler:eye":"tabler:eye-off"})})})}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsxs)(p.Z,{type:"submit",variant:"contained",children:[e?(0,t.jsx)(z.Z,{sx:{color:"common.white",width:"20px !important",height:"20px !important",mr:e=>e.spacing(2)}}):null,"Submit"]})})]})})})]})};var A=a(16310),Q=a(47533);let L={email:"",lastName:"",password:"",firstName:""},D=(e,r,a)=>0===r?"".concat(e," field is required"):r>0&&r<a?"".concat(e," must be at least ").concat(a," characters"):"",R=A.Ry().shape({email:A.Z_().email().required(),lastName:A.Z_().min(3,e=>D("lastName",e.value.length,e.min)).required(),password:A.Z_().min(8,e=>D("password",e.value.length,e.min)).required(),firstName:A.Z_().min(3,e=>D("firstName",e.value.length,e.min)).required()}),E=()=>{let[e,r]=(0,u.useState)({password:"",showPassword:!1}),{control:a,handleSubmit:i,formState:{errors:o}}=(0,T.cI)({defaultValues:L,mode:"onChange",resolver:(0,Q.X)(R)}),l=()=>{r({...e,showPassword:!e.showPassword})},n=()=>M.ZP.success("Form Submitted");return(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(b.Z,{title:"Validation Schema With OnChange"}),(0,t.jsx)(w.Z,{children:(0,t.jsx)("form",{onSubmit:i(n),children:(0,t.jsxs)(s.ZP,{container:!0,spacing:5,children:[(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(T.Qr,{name:"firstName",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,value:r,label:"First Name",onChange:a,placeholder:"Leonard",error:!!o.firstName,"aria-describedby":"validation-schema-first-name",...o.firstName&&{helperText:o.firstName.message}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(T.Qr,{name:"lastName",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,value:r,label:"Last Name",onChange:a,placeholder:"Carter",error:!!o.lastName,"aria-describedby":"validation-schema-last-name",...o.lastName&&{helperText:o.lastName.message}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(T.Qr,{name:"email",control:a,rules:{required:!0},render:e=>{let{field:{value:r,onChange:a}}=e;return(0,t.jsx)(S.Z,{fullWidth:!0,type:"email",value:r,label:"Email",onChange:a,error:!!o.email,placeholder:"carterleonard@gmail.com","aria-describedby":"validation-schema-email",...o.email&&{helperText:o.email.message}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(T.Qr,{name:"password",control:a,rules:{required:!0},render:r=>{let{field:{value:a,onChange:i}}=r;return(0,t.jsx)(S.Z,{fullWidth:!0,value:a,label:"Password",onChange:i,id:"validation-schema-password",error:!!o.password,type:e.showPassword?"text":"password",...o.password&&{helperText:o.password.message},InputProps:{endAdornment:(0,t.jsx)(y.Z,{position:"end",children:(0,t.jsx)(j.Z,{edge:"end",onClick:l,onMouseDown:e=>e.preventDefault(),"aria-label":"toggle password visibility",children:(0,t.jsx)(q.Z,{fontSize:"1.25rem",icon:e.showPassword?"tabler:eye":"tabler:eye-off"})})})}})}})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(p.Z,{type:"submit",variant:"contained",children:"Submit"})})]})})})]})};var F=a(82229);let O=(0,l.ZP)(o())(e=>{let{theme:r}=e;return{textDecoration:"none",color:r.palette.primary.main}}),H=()=>(0,t.jsx)(F.Z,{children:(0,t.jsxs)(s.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,t.jsx)(d.Z,{title:(0,t.jsx)(n.Z,{variant:"h4",children:(0,t.jsx)(O,{href:"https://github.com/react-hook-form/react-hook-form",target:"_blank",children:"React Hook Form"})}),subtitle:(0,t.jsx)(n.Z,{sx:{color:"text.secondary"},children:"React Hooks for forms validation (Web + React Native)"})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(k,{})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,t.jsx)(E,{})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,t.jsx)(W,{})})]})});var X=H}},function(e){e.O(0,[9198,7536,3863,2216,1121,2229,9774,2888,179],function(){return e(e.s=95639)}),_N_E=e.O()}]);