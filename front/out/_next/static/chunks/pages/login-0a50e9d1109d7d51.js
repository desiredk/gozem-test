(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{73700:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(73664)}])},56456:function(e,t,r){"use strict";var o=r(85893),n=r(67294),a=r(90948),i=r(50135);let s=(0,a.ZP)(i.Z)(e=>{let{theme:t}=e;return{alignItems:"flex-start","& .MuiInputLabel-root":{transform:"none",lineHeight:1.154,position:"relative",marginBottom:t.spacing(1),fontSize:t.typography.body2.fontSize,color:"".concat(t.palette.text.primary," !important")},"& .MuiInputBase-root":{borderRadius:8,backgroundColor:"transparent !important",border:"1px solid rgba(".concat(t.palette.customColors.main,", 0.2)"),transition:t.transitions.create(["border-color","box-shadow"],{duration:t.transitions.duration.shorter}),"&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover":{borderColor:"rgba(".concat(t.palette.customColors.main,", 0.28)")},"&:before, &:after":{display:"none"},"&.MuiInputBase-sizeSmall":{borderRadius:6},"&.Mui-error":{borderColor:t.palette.error.main},"&.Mui-focused":{boxShadow:t.shadows[2],"& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transform:"translateX(4px)"},"&.MuiInputBase-colorPrimary":{borderColor:t.palette.primary.main},"&.MuiInputBase-colorSecondary":{borderColor:t.palette.secondary.main},"&.MuiInputBase-colorInfo":{borderColor:t.palette.info.main},"&.MuiInputBase-colorSuccess":{borderColor:t.palette.success.main},"&.MuiInputBase-colorWarning":{borderColor:t.palette.warning.main},"&.MuiInputBase-colorError":{borderColor:t.palette.error.main},"&.Mui-error":{borderColor:t.palette.error.main}},"&.Mui-disabled":{backgroundColor:"".concat(t.palette.action.selected," !important")},"& .MuiInputAdornment-root":{marginTop:"0 !important"}},"& .MuiInputBase-input":{color:t.palette.text.secondary,"&:not(textarea)":{padding:"15.5px 13px"},"&:not(textarea).MuiInputBase-inputSizeSmall":{padding:"7.5px 13px"},"&:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter})},"&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)":{paddingLeft:0},"&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)":{paddingRight:0}},"& .MuiFormHelperText-root":{lineHeight:1.154,margin:t.spacing(1,0,0),color:t.palette.text.secondary,fontSize:t.typography.body2.fontSize,"&.Mui-error":{color:t.palette.error.main}},"& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus":{backgroundColor:"transparent"},"& .MuiSelect-filled .MuiChip-root":{height:22},"& .MuiAutocomplete-input":{paddingLeft:"6px !important",paddingTop:"7.5px !important",paddingBottom:"7.5px !important","&.MuiInputBase-inputSizeSmall":{paddingLeft:"6px !important",paddingTop:"2.5px !important",paddingBottom:"2.5px !important"}},"& .MuiAutocomplete-inputRoot":{paddingTop:"8px !important",paddingLeft:"8px !important",paddingBottom:"8px !important","&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart":{paddingLeft:"13px !important"},"&.MuiInputBase-sizeSmall":{paddingTop:"5px !important",paddingLeft:"5px !important",paddingBottom:"5px !important","& .MuiAutocomplete-tag":{margin:2,height:22}}},"& .MuiInputBase-multiline":{padding:"15.25px 13px","&.MuiInputBase-sizeSmall":{padding:"7.25px 13px"},"& textarea.MuiInputBase-inputSizeSmall:placeholder-shown":{overflowX:"hidden"}},"& + .react-datepicker__close-icon":{top:11,"&:after":{fontSize:"1.6rem !important"}}}}),l=(0,n.forwardRef)((e,t)=>{let{size:r="small",InputLabelProps:n,...a}=e;return(0,o.jsx)(s,{size:r,inputRef:t,...a,variant:"filled",InputLabelProps:{...n,shrink:!0}})});t.Z=l},73664:function(e,t,r){"use strict";r.r(t);var o=r(85893),n=r(67294),a=r(11057),i=r(15861),s=r(93946),l=r(87357),p=r(98396),d=r(90948),u=r(2734),m=r(87109),c=r(56456),g=r(63730),x=r(16310),h=r(87536),f=r(47533),b=r(67218),M=r(23918),y=r(66204),w=r(67340),B=r(42374),I=r(85946);let Z=(0,d.ZP)("img")(e=>{let{}=e;return{}}),j=(0,d.ZP)("img")(e=>{let{theme:t}=e;return{zIndex:2,maxHeight:680,marginTop:t.spacing(12),marginBottom:t.spacing(12),[t.breakpoints.down(1540)]:{maxHeight:550},[t.breakpoints.down("lg")]:{maxHeight:500}}}),C=(0,d.ZP)(l.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.up("md")]:{maxWidth:450},[t.breakpoints.up("lg")]:{maxWidth:600},[t.breakpoints.up("xl")]:{maxWidth:750}}}),S=x.Ry().shape({email:x.Z_().required(()=>"Username field is required"),password:x.Z_().required(()=>"The Password field is required")}),k={password:"DesiredKOMLAVI",email:"DesiredKOMLAVI"},v=()=>{let[e,t]=(0,n.useState)(!1),r=(0,b.a)(),d=(0,u.Z)(),{settings:x}=(0,M.r)(),w=(0,p.Z)(d.breakpoints.down("md")),{skin:v}=x,{control:_,setError:z,handleSubmit:P,formState:{errors:L}}=(0,h.cI)({defaultValues:k,mode:"onBlur",resolver:(0,f.X)(S)}),T=e=>{let{email:t,password:o}=e;r.login({email:t,password:o,rememberMe:!0},e=>{z("email",{type:"manual",message:"."}),z("password",{type:"manual",message:e.response.data.message})})};return(0,o.jsxs)(l.Z,{className:"content-right",sx:{backgroundColor:"background.paper"},children:[w?null:(0,o.jsxs)(l.Z,{sx:{flex:1,display:"flex",position:"relative",alignItems:"center",borderRadius:"20px",justifyContent:"center",backgroundColor:"customColors.bodyBg",margin:e=>e.spacing(8,0,8,8)},children:[(0,o.jsx)(j,{alt:"login-illustration",src:"/images/pages/".concat("bordered"===v?"auth-v2-login-illustration-bordered":"auth-v2-login-illustration","-").concat(d.palette.mode,".png")}),(0,o.jsx)(B.Z,{})]}),(0,o.jsx)(C,{children:(0,o.jsx)(l.Z,{sx:{p:[6,12],height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsxs)(l.Z,{sx:{width:"100%",maxWidth:400},children:[(0,o.jsx)(Z,{height:"80",alt:"error-illustration",src:"/images/main/logo-white.png"}),(0,o.jsxs)(l.Z,{sx:{my:6},children:[(0,o.jsx)(i.Z,{variant:"h3",sx:{mb:1.5},children:"Welcome to ".concat(y.Z.templateName,"! \uD83D\uDC4B\uD83C\uDFFB")}),(0,o.jsx)(i.Z,{sx:{color:"text.secondary"},children:"Please sign-in to your account and start the adventure"})]}),(0,o.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:P(T),children:[(0,o.jsx)(l.Z,{sx:{mb:4},children:(0,o.jsx)(h.Qr,{name:"email",control:_,rules:{required:!0},render:e=>{let{field:{value:t,onChange:r,onBlur:n}}=e;return(0,o.jsx)(c.Z,{fullWidth:!0,autoFocus:!0,label:"Username",value:t,onBlur:n,onChange:r,placeholder:"",error:!!L.email,...L.email&&{helperText:L.email.message}})}})}),(0,o.jsx)(l.Z,{sx:{mb:1.5},children:(0,o.jsx)(h.Qr,{name:"password",control:_,rules:{required:!0},render:r=>{let{field:{value:n,onChange:a,onBlur:i}}=r;return(0,o.jsx)(c.Z,{fullWidth:!0,value:n,onBlur:i,label:"Password",onChange:a,id:"auth-login-v2-password",error:!!L.password,...L.password&&{helperText:L.password.message},type:e?"text":"password",InputProps:{endAdornment:(0,o.jsx)(m.Z,{position:"end",children:(0,o.jsx)(s.Z,{edge:"end",onMouseDown:e=>e.preventDefault(),onClick:()=>t(!e),children:(0,o.jsx)(g.Z,{fontSize:"1.25rem",icon:e?"tabler:eye":"tabler:eye-off"})})})}})}})}),(0,o.jsx)(a.Z,{fullWidth:!0,type:"submit",variant:"contained",sx:{mb:4,mt:4},children:(0,I.t)("Login")})]})]})})})]})};v.getLayout=e=>(0,o.jsx)(w.Z,{children:e}),v.guestGuard=!0,t.default=v},42374:function(e,t,r){"use strict";var o=r(85893),n=r(98396),a=r(90948),i=r(2734);let s=(0,a.ZP)("img")(e=>{let{theme:t}=e;return{bottom:0,height:300,width:"100%",position:"absolute",[t.breakpoints.down(1540)]:{height:250}}}),l=e=>{let{image:t,height:r,className:a}=e,l=(0,i.Z)(),p=(0,n.Z)(l.breakpoints.down("md"));return p?null:(0,o.jsx)(o.Fragment,{children:t?"string"==typeof t?(0,o.jsx)(s,{alt:"mask",src:t,className:a,...r&&{height:r}}):t:(0,o.jsx)(s,{alt:"mask",className:a,...r&&{height:r},src:"/images/pages/auth-v2-mask-".concat(l.palette.mode,".png")})})};t.Z=l}},function(e){e.O(0,[7536,2216,9774,2888,179],function(){return e(e.s=73700)}),_N_E=e.O()}]);