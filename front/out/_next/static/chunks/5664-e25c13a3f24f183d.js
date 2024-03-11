"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5664],{56456:function(e,t,n){var a=n(85893),o=n(67294),r=n(90948),i=n(50135);let l=(0,r.ZP)(i.Z)(e=>{let{theme:t}=e;return{alignItems:"flex-start","& .MuiInputLabel-root":{transform:"none",lineHeight:1.154,position:"relative",marginBottom:t.spacing(1),fontSize:t.typography.body2.fontSize,color:"".concat(t.palette.text.primary," !important")},"& .MuiInputBase-root":{borderRadius:8,backgroundColor:"transparent !important",border:"1px solid rgba(".concat(t.palette.customColors.main,", 0.2)"),transition:t.transitions.create(["border-color","box-shadow"],{duration:t.transitions.duration.shorter}),"&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover":{borderColor:"rgba(".concat(t.palette.customColors.main,", 0.28)")},"&:before, &:after":{display:"none"},"&.MuiInputBase-sizeSmall":{borderRadius:6},"&.Mui-error":{borderColor:t.palette.error.main},"&.Mui-focused":{boxShadow:t.shadows[2],"& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transform:"translateX(4px)"},"&.MuiInputBase-colorPrimary":{borderColor:t.palette.primary.main},"&.MuiInputBase-colorSecondary":{borderColor:t.palette.secondary.main},"&.MuiInputBase-colorInfo":{borderColor:t.palette.info.main},"&.MuiInputBase-colorSuccess":{borderColor:t.palette.success.main},"&.MuiInputBase-colorWarning":{borderColor:t.palette.warning.main},"&.MuiInputBase-colorError":{borderColor:t.palette.error.main},"&.Mui-error":{borderColor:t.palette.error.main}},"&.Mui-disabled":{backgroundColor:"".concat(t.palette.action.selected," !important")},"& .MuiInputAdornment-root":{marginTop:"0 !important"}},"& .MuiInputBase-input":{color:t.palette.text.secondary,"&:not(textarea)":{padding:"15.5px 13px"},"&:not(textarea).MuiInputBase-inputSizeSmall":{padding:"7.5px 13px"},"&:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter})},"&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)":{paddingLeft:0},"&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)":{paddingRight:0}},"& .MuiFormHelperText-root":{lineHeight:1.154,margin:t.spacing(1,0,0),color:t.palette.text.secondary,fontSize:t.typography.body2.fontSize,"&.Mui-error":{color:t.palette.error.main}},"& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus":{backgroundColor:"transparent"},"& .MuiSelect-filled .MuiChip-root":{height:22},"& .MuiAutocomplete-input":{paddingLeft:"6px !important",paddingTop:"7.5px !important",paddingBottom:"7.5px !important","&.MuiInputBase-inputSizeSmall":{paddingLeft:"6px !important",paddingTop:"2.5px !important",paddingBottom:"2.5px !important"}},"& .MuiAutocomplete-inputRoot":{paddingTop:"8px !important",paddingLeft:"8px !important",paddingBottom:"8px !important","&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart":{paddingLeft:"13px !important"},"&.MuiInputBase-sizeSmall":{paddingTop:"5px !important",paddingLeft:"5px !important",paddingBottom:"5px !important","& .MuiAutocomplete-tag":{margin:2,height:22}}},"& .MuiInputBase-multiline":{padding:"15.25px 13px","&.MuiInputBase-sizeSmall":{padding:"7.25px 13px"},"& textarea.MuiInputBase-inputSizeSmall:placeholder-shown":{overflowX:"hidden"}},"& + .react-datepicker__close-icon":{top:11,"&:after":{fontSize:"1.6rem !important"}}}}),s=(0,o.forwardRef)((e,t)=>{let{size:n="small",InputLabelProps:o,...r}=e;return(0,a.jsx)(l,{size:n,inputRef:t,...r,variant:"filled",InputLabelProps:{...o,shrink:!0}})});t.Z=s},97584:function(e,t,n){var a=n(85893),o=n(67294),r=n(58826),i=n(11057),l=n(90948),s=n(18972),d=n(93946),p=n(15861),u=n(87357),c=n(87109),m=n(56456),x=n(9198),h=n.n(x),b=n(63730),f=n(82229);let g=(0,o.forwardRef)((e,t)=>{let{...n}=e;return(0,a.jsx)(m.Z,{fullWidth:!0,inputRef:t,label:"Payment Date",...n})}),y=(0,l.ZP)(u.Z)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",padding:t.spacing(6),justifyContent:"space-between"}}),M=e=>{let{open:t,toggle:n}=e,[l,x]=(0,o.useState)(new Date);return(0,a.jsxs)(r.ZP,{open:t,anchor:"right",onClose:n,variant:"temporary",ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:[300,400]}},children:[(0,a.jsxs)(y,{children:[(0,a.jsx)(p.Z,{variant:"h5",children:"Add Payment"}),(0,a.jsx)(d.Z,{size:"small",onClick:n,sx:{p:"0.375rem",borderRadius:1,color:"text.primary",backgroundColor:"action.selected","&:hover":{backgroundColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.16)")}},children:(0,a.jsx)(b.Z,{icon:"tabler:x",fontSize:"1.25rem"})})]}),(0,a.jsxs)(u.Z,{sx:{p:e=>e.spacing(0,6,6)},children:[(0,a.jsx)(u.Z,{sx:{mb:5},children:(0,a.jsx)(m.Z,{fullWidth:!0,id:"invoice-balance",defaultValue:"5000.00",label:"Invoice Balance",InputProps:{disabled:!0}})}),(0,a.jsx)(u.Z,{sx:{mb:5},children:(0,a.jsx)(m.Z,{fullWidth:!0,type:"number",label:"Payment Amount",InputProps:{startAdornment:(0,a.jsx)(c.Z,{position:"start",children:"$"})}})}),(0,a.jsx)(u.Z,{sx:{mb:5},children:(0,a.jsx)(f.Z,{sx:{"& .MuiFormControl-root":{width:"100%"}},children:(0,a.jsx)(h(),{selected:l,id:"invoice-payment-date",customInput:(0,a.jsx)(g,{}),onChange:e=>x(e)})})}),(0,a.jsx)(u.Z,{sx:{mb:5},children:(0,a.jsxs)(m.Z,{select:!0,fullWidth:!0,label:"Payment Method",id:"payment-method-select",defaultValue:"select-method",children:[(0,a.jsx)(s.Z,{value:"select-method",disabled:!0,children:"Select Payment Method"}),(0,a.jsx)(s.Z,{value:"Cash",children:"Cash"}),(0,a.jsx)(s.Z,{value:"Bank Transfer",children:"Bank Transfer"}),(0,a.jsx)(s.Z,{value:"Credit",children:"Credit"}),(0,a.jsx)(s.Z,{value:"Debit",children:"Debit"}),(0,a.jsx)(s.Z,{value:"Paypal",children:"Paypal"})]})}),(0,a.jsx)(u.Z,{sx:{mb:6},children:(0,a.jsx)(m.Z,{rows:6,multiline:!0,fullWidth:!0,label:"Internal Payment Note",placeholder:"Internal Payment Note"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{variant:"contained",onClick:n,sx:{mr:4},children:"Send"}),(0,a.jsx)(i.Z,{variant:"tonal",color:"secondary",onClick:n,children:"Cancel"})]})]})]})};t.Z=M},27680:function(e,t,n){var a=n(85893),o=n(58826),r=n(11057),i=n(90948),l=n(93946),s=n(15861),d=n(87357),p=n(63730),u=n(50613),c=n(56456);let m=(0,i.ZP)(d.Z)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",padding:t.spacing(6),justifyContent:"space-between"}}),x=e=>{let{open:t,toggle:n}=e;return(0,a.jsxs)(o.ZP,{open:t,anchor:"right",variant:"temporary",onClose:n,sx:{"& .MuiDrawer-paper":{width:[300,400]}},ModalProps:{keepMounted:!0},children:[(0,a.jsxs)(m,{children:[(0,a.jsx)(s.Z,{variant:"h5",children:"Send Invoice"}),(0,a.jsx)(l.Z,{size:"small",onClick:n,sx:{p:"0.375rem",borderRadius:1,color:"text.primary",backgroundColor:"action.selected","&:hover":{backgroundColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.16)")}},children:(0,a.jsx)(p.Z,{icon:"tabler:x",fontSize:"1.25rem"})})]}),(0,a.jsxs)(d.Z,{sx:{p:e=>e.spacing(0,6,6)},children:[(0,a.jsx)(c.Z,{fullWidth:!0,type:"email",label:"From",sx:{mb:5},variant:"outlined",placeholder:"company@email.com",defaultValue:"shelbyComapny@email.com"}),(0,a.jsx)(c.Z,{fullWidth:!0,label:"To",type:"email",sx:{mb:5},variant:"outlined",placeholder:"company@email.com",defaultValue:"qConsolidated@email.com"}),(0,a.jsx)(c.Z,{fullWidth:!0,label:"Subject",sx:{mb:5},variant:"outlined",placeholder:"Invoice regarding goods",defaultValue:"Invoice of purchased Admin Templates"}),(0,a.jsx)(c.Z,{rows:10,fullWidth:!0,multiline:!0,sx:{mb:5},label:"Message",type:"textarea",variant:"outlined",defaultValue:"Dear Queen Consolidated,\n\nThank you for your business, always a pleasure to work with you!\n\nWe have generated a new invoice in the amount of $95.59\n\nWe would appreciate payment of this invoice by 05/11/2019"}),(0,a.jsx)(d.Z,{sx:{mb:6},children:(0,a.jsx)(u.Z,{rounded:!0,size:"small",skin:"light",color:"primary",label:"Invoice Attached",icon:(0,a.jsx)(p.Z,{icon:"tabler:link",fontSize:"1.25rem"})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Z,{variant:"contained",onClick:n,sx:{mr:4},children:"Send"}),(0,a.jsx)(r.Z,{variant:"tonal",color:"secondary",onClick:n,children:"Cancel"})]})]})]})};t.Z=x}}]);