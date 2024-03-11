(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4108],{66485:function(e){function t(){return new DOMException("The request is not allowed","NotAllowedError")}async function n(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}async function l(e){let n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);let l=window.getSelection(),a=window.document.createRange();l.removeAllRanges(),a.selectNode(n),l.addRange(a);let i=!1;try{i=window.document.execCommand("copy")}finally{l.removeAllRanges(),window.document.body.removeChild(n)}if(!i)throw t()}async function a(e){try{await n(e)}catch(n){try{await l(e)}catch(e){throw e||n||t()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=a},27371:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/textarea",function(){return n(44470)}])},92223:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var l=n(85893),a=n(67294),i=n(87357),o=n(66242),r=n(34386),d=n(67720),s=n(57922),u=n(93946),c=n(78445),m=n(44267),x=n(96420),p=n(98396),h=n(33454),f=n(63730),g=n(15660),v=n.n(g),b=n(86501),C=n(66485),M=n.n(C);let j=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName);var w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useRef)(null),n=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&j(t.current)&&t.current.select()},l=()=>{e.onError&&e.onError();let n=!1!==e.selectOnError;n&&j(t.current)&&t.current.select()},i=e=>{M()(e).then(n).catch(l)},o=(0,a.useCallback)(e=>{"string"==typeof e?i(e):t.current&&i(t.current.value)},[]);return{copy:o,target:t}};let T=e=>{let{id:t,sx:n,code:g,title:C,children:M,className:j}=e,[T,S]=(0,a.useState)(!1),[y,Z]=(0,a.useState)(null!==g.tsx?"tsx":"jsx"),V=w(),I=(0,p.Z)(e=>e.breakpoints.down("md"));(0,a.useEffect)(()=>{v().highlightAll()},[T,y]);let B=()=>null!==g.tsx&&"tsx"===y?g.tsx.props.children.props.children:null!==g.jsx&&"jsx"===y?g.jsx.props.children.props.children:"",F=()=>{V.copy(B()),b.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,l.jsxs)(o.Z,{className:j,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...n},id:t||"card-snippet--".concat(C.toLowerCase().replace(/ /g,"-")),children:[(0,l.jsx)(c.Z,{title:C,...I?{}:{action:(0,l.jsx)(u.Z,{onClick:()=>S(!T),children:(0,l.jsx)(f.Z,{icon:"tabler:code",fontSize:20})})}}),(0,l.jsx)(m.Z,{children:M}),I?null:(0,l.jsxs)(s.Z,{in:T,children:[(0,l.jsx)(d.Z,{sx:{my:"0 !important"}}),(0,l.jsxs)(m.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,l.jsx)(i.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,l.jsxs)(h.Z,{exclusive:!0,size:"small",color:"primary",value:y,onChange:(e,t)=>null!==t?Z(t):null,children:[null!==g.tsx?(0,l.jsx)(x.Z,{value:"tsx",children:(0,l.jsx)(f.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==g.jsx?(0,l.jsx)(x.Z,{value:"jsx",children:(0,l.jsx)(f.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,l.jsx)(r.Z,{title:"Copy the source",placement:"top",children:(0,l.jsx)(u.Z,{onClick:F,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,l.jsx)(f.Z,{icon:"tabler:copy",fontSize:20})})}),(0,l.jsx)("div",{children:null!==g[y]?g[y]:null})]})]})]})};var S=T},56456:function(e,t,n){"use strict";var l=n(85893),a=n(67294),i=n(90948),o=n(50135);let r=(0,i.ZP)(o.Z)(e=>{let{theme:t}=e;return{alignItems:"flex-start","& .MuiInputLabel-root":{transform:"none",lineHeight:1.154,position:"relative",marginBottom:t.spacing(1),fontSize:t.typography.body2.fontSize,color:"".concat(t.palette.text.primary," !important")},"& .MuiInputBase-root":{borderRadius:8,backgroundColor:"transparent !important",border:"1px solid rgba(".concat(t.palette.customColors.main,", 0.2)"),transition:t.transitions.create(["border-color","box-shadow"],{duration:t.transitions.duration.shorter}),"&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover":{borderColor:"rgba(".concat(t.palette.customColors.main,", 0.28)")},"&:before, &:after":{display:"none"},"&.MuiInputBase-sizeSmall":{borderRadius:6},"&.Mui-error":{borderColor:t.palette.error.main},"&.Mui-focused":{boxShadow:t.shadows[2],"& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transform:"translateX(4px)"},"&.MuiInputBase-colorPrimary":{borderColor:t.palette.primary.main},"&.MuiInputBase-colorSecondary":{borderColor:t.palette.secondary.main},"&.MuiInputBase-colorInfo":{borderColor:t.palette.info.main},"&.MuiInputBase-colorSuccess":{borderColor:t.palette.success.main},"&.MuiInputBase-colorWarning":{borderColor:t.palette.warning.main},"&.MuiInputBase-colorError":{borderColor:t.palette.error.main},"&.Mui-error":{borderColor:t.palette.error.main}},"&.Mui-disabled":{backgroundColor:"".concat(t.palette.action.selected," !important")},"& .MuiInputAdornment-root":{marginTop:"0 !important"}},"& .MuiInputBase-input":{color:t.palette.text.secondary,"&:not(textarea)":{padding:"15.5px 13px"},"&:not(textarea).MuiInputBase-inputSizeSmall":{padding:"7.5px 13px"},"&:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter})},"&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)":{paddingLeft:0},"&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)":{paddingRight:0}},"& .MuiFormHelperText-root":{lineHeight:1.154,margin:t.spacing(1,0,0),color:t.palette.text.secondary,fontSize:t.typography.body2.fontSize,"&.Mui-error":{color:t.palette.error.main}},"& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus":{backgroundColor:"transparent"},"& .MuiSelect-filled .MuiChip-root":{height:22},"& .MuiAutocomplete-input":{paddingLeft:"6px !important",paddingTop:"7.5px !important",paddingBottom:"7.5px !important","&.MuiInputBase-inputSizeSmall":{paddingLeft:"6px !important",paddingTop:"2.5px !important",paddingBottom:"2.5px !important"}},"& .MuiAutocomplete-inputRoot":{paddingTop:"8px !important",paddingLeft:"8px !important",paddingBottom:"8px !important","&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart":{paddingLeft:"13px !important"},"&.MuiInputBase-sizeSmall":{paddingTop:"5px !important",paddingLeft:"5px !important",paddingBottom:"5px !important","& .MuiAutocomplete-tag":{margin:2,height:22}}},"& .MuiInputBase-multiline":{padding:"15.25px 13px","&.MuiInputBase-sizeSmall":{padding:"7.25px 13px"},"& textarea.MuiInputBase-inputSizeSmall:placeholder-shown":{overflowX:"hidden"}},"& + .react-datepicker__close-icon":{top:11,"&:after":{fontSize:"1.6rem !important"}}}}),d=(0,a.forwardRef)((e,t)=>{let{size:n="small",InputLabelProps:a,...i}=e;return(0,l.jsx)(r,{size:n,inputRef:t,...i,variant:"filled",InputLabelProps:{...a,shrink:!0}})});t.Z=d},44470:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var l=n(85893),a=n(86886),i=n(15861),o=n(92223),r=n(67294),d=n(56456);let s=()=>{let[e,t]=(0,r.useState)("Controlled"),n=e=>{t(e.target.value)};return(0,l.jsxs)("form",{noValidate:!0,autoComplete:"off",className:"demo-space-x",children:[(0,l.jsx)(d.Z,{multiline:!0,maxRows:4,value:e,label:"Multiline",onChange:n,id:"textarea-outlined-controlled"}),(0,l.jsx)(d.Z,{multiline:!0,id:"textarea-outlined",placeholder:"Placeholder",label:"Multiline Placeholder"}),(0,l.jsx)(d.Z,{rows:4,multiline:!0,label:"Multiline",defaultValue:"Default Value",id:"textarea-outlined-static"})]})};var u=n(87357),c=n(50135);let m=()=>{let[e,t]=(0,r.useState)("Controlled"),n=e=>{t(e.target.value)};return(0,l.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[(0,l.jsxs)(u.Z,{className:"demo-space-x",sx:{mb:4},children:[(0,l.jsx)(c.Z,{multiline:!0,maxRows:4,value:e,label:"Multiline",onChange:n,id:"textarea-outlined-controlled"}),(0,l.jsx)(c.Z,{multiline:!0,id:"textarea-outlined",placeholder:"Placeholder",label:"Multiline Placeholder"}),(0,l.jsx)(c.Z,{rows:4,multiline:!0,label:"Multiline",defaultValue:"Default Value",id:"textarea-outlined-static"})]}),(0,l.jsxs)(u.Z,{className:"demo-space-x",sx:{mb:4},children:[(0,l.jsx)(c.Z,{multiline:!0,maxRows:4,value:e,variant:"filled",label:"Multiline",onChange:n,id:"textarea-filled-controlled"}),(0,l.jsx)(c.Z,{multiline:!0,variant:"filled",id:"textarea-filled",placeholder:"Placeholder",label:"Multiline Placeholder"}),(0,l.jsx)(c.Z,{rows:4,multiline:!0,variant:"filled",label:"Multiline",id:"textarea-filled-static",defaultValue:"Default Value"})]}),(0,l.jsxs)("div",{className:"demo-space-x",children:[(0,l.jsx)(c.Z,{multiline:!0,maxRows:4,value:e,label:"Multiline",variant:"standard",onChange:n,id:"textarea-standard-controlled"}),(0,l.jsx)(c.Z,{multiline:!0,variant:"standard",id:"textarea-standard",placeholder:"Placeholder",label:"Multiline Placeholder"}),(0,l.jsx)(c.Z,{rows:4,multiline:!0,label:"Multiline",variant:"standard",defaultValue:"Default Value",id:"textarea-standard-static"})]})]})},x=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport TextField from '@mui/material/TextField'\n\nconst TextareaVariant = () => {\n  // ** State\n  const [value, setValue] = useState('Controlled')\n\n  const handleChange = event => {\n    setValue(event.target.value)\n  }\n\n  return (\n    <form noValidate autoComplete='off'>\n      <Box className='demo-space-x' sx={{ mb: 4 }}>\n        <TextField\n          multiline\n          maxRows={4}\n          value={value}\n          label='Multiline'\n          onChange={handleChange}\n          id='textarea-outlined-controlled'\n        />\n        <TextField multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />\n        <TextField rows={4} multiline label='Multiline' defaultValue='Default Value' id='textarea-outlined-static' />\n      </Box>\n      <Box className='demo-space-x' sx={{ mb: 4 }}>\n        <TextField\n          multiline\n          maxRows={4}\n          value={value}\n          variant='filled'\n          label='Multiline'\n          onChange={handleChange}\n          id='textarea-filled-controlled'\n        />\n        <TextField\n          multiline\n          variant='filled'\n          id='textarea-filled'\n          placeholder='Placeholder'\n          label='Multiline Placeholder'\n        />\n        <TextField\n          rows={4}\n          multiline\n          variant='filled'\n          label='Multiline'\n          id='textarea-filled-static'\n          defaultValue='Default Value'\n        />\n      </Box>\n      <div className='demo-space-x'>\n        <TextField\n          multiline\n          maxRows={4}\n          value={value}\n          label='Multiline'\n          variant='standard'\n          onChange={handleChange}\n          id='textarea-standard-controlled'\n        />\n        <TextField\n          multiline\n          variant='standard'\n          id='textarea-standard'\n          placeholder='Placeholder'\n          label='Multiline Placeholder'\n        />\n        <TextField\n          rows={4}\n          multiline\n          label='Multiline'\n          variant='standard'\n          defaultValue='Default Value'\n          id='textarea-standard-static'\n        />\n      </div>\n    </form>\n  )\n}\n\nexport default TextareaVariant\n"})}),p=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** Custom Component Import\nimport CustomTextField from 'src/@core/components/mui/text-field'\n\nconst TextareaCustom = () => {\n  // ** State\n  const [value, setValue] = useState('Controlled')\n\n  const handleChange = event => {\n    setValue(event.target.value)\n  }\n\n  return (\n    <form noValidate autoComplete='off' className='demo-space-x'>\n      <CustomTextField\n        multiline\n        maxRows={4}\n        value={value}\n        label='Multiline'\n        onChange={handleChange}\n        id='textarea-outlined-controlled'\n      />\n      <CustomTextField multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />\n      <CustomTextField\n        rows={4}\n        multiline\n        label='Multiline'\n        defaultValue='Default Value'\n        id='textarea-outlined-static'\n      />\n    </form>\n  )\n}\n\nexport default TextareaCustom\n"})}),h=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { ChangeEvent, useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport TextField from '@mui/material/TextField'\n\nconst TextareaVariant = () => {\n  // ** State\n  const [value, setValue] = useState<string>('Controlled')\n\n  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value)\n  }\n\n  return (\n    <form noValidate autoComplete='off'>\n      <Box className='demo-space-x' sx={{ mb: 4 }}>\n        <TextField\n          multiline\n          maxRows={4}\n          value={value}\n          label='Multiline'\n          onChange={handleChange}\n          id='textarea-outlined-controlled'\n        />\n        <TextField multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />\n        <TextField rows={4} multiline label='Multiline' defaultValue='Default Value' id='textarea-outlined-static' />\n      </Box>\n      <Box className='demo-space-x' sx={{ mb: 4 }}>\n        <TextField\n          multiline\n          maxRows={4}\n          value={value}\n          variant='filled'\n          label='Multiline'\n          onChange={handleChange}\n          id='textarea-filled-controlled'\n        />\n        <TextField\n          multiline\n          variant='filled'\n          id='textarea-filled'\n          placeholder='Placeholder'\n          label='Multiline Placeholder'\n        />\n        <TextField\n          rows={4}\n          multiline\n          variant='filled'\n          label='Multiline'\n          id='textarea-filled-static'\n          defaultValue='Default Value'\n        />\n      </Box>\n      <div className='demo-space-x'>\n        <TextField\n          multiline\n          maxRows={4}\n          value={value}\n          label='Multiline'\n          variant='standard'\n          onChange={handleChange}\n          id='textarea-standard-controlled'\n        />\n        <TextField\n          multiline\n          variant='standard'\n          id='textarea-standard'\n          placeholder='Placeholder'\n          label='Multiline Placeholder'\n        />\n        <TextField\n          rows={4}\n          multiline\n          label='Multiline'\n          variant='standard'\n          defaultValue='Default Value'\n          id='textarea-standard-static'\n        />\n      </div>\n    </form>\n  )\n}\n\nexport default TextareaVariant\n"})}),f=(0,l.jsx)("pre",{className:"language-jsx",children:(0,l.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { ChangeEvent, useState } from 'react'\n\n// ** Custom Component Import\nimport CustomTextField from 'src/@core/components/mui/text-field'\n\nconst TextareaCustom = () => {\n  // ** State\n  const [value, setValue] = useState<string>('Controlled')\n\n  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value)\n  }\n\n  return (\n    <form noValidate autoComplete='off' className='demo-space-x'>\n      <CustomTextField\n        multiline\n        maxRows={4}\n        value={value}\n        label='Multiline'\n        onChange={handleChange}\n        id='textarea-outlined-controlled'\n      />\n      <CustomTextField multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />\n      <CustomTextField\n        rows={4}\n        multiline\n        label='Multiline'\n        defaultValue='Default Value'\n        id='textarea-outlined-static'\n      />\n    </form>\n  )\n}\n\nexport default TextareaCustom\n"})}),g=()=>(0,l.jsxs)(a.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,l.jsx)(a.ZP,{item:!0,xs:12,children:(0,l.jsxs)(o.Z,{title:"Custom",code:{tsx:f,jsx:p},children:[(0,l.jsxs)(i.Z,{children:["Use ",(0,l.jsx)("code",{children:"multiline"})," prop with ",(0,l.jsx)("code",{children:"CustomTextField"})," component to transform the custom text field into custom ",(0,l.jsx)("code",{children:"textarea"}),"."]}),(0,l.jsx)(s,{})]})}),(0,l.jsx)(a.ZP,{item:!0,xs:12,children:(0,l.jsxs)(o.Z,{title:"Variants",code:{tsx:h,jsx:x},children:[(0,l.jsxs)(i.Z,{children:["Use ",(0,l.jsx)("code",{children:"multiline"})," prop with ",(0,l.jsx)("code",{children:"TextField"})," component to transform the text field into"," ",(0,l.jsx)("code",{children:"textarea"}),". Use ",(0,l.jsx)("code",{children:"variant"})," prop with ",(0,l.jsx)("code",{children:"TextField"})," component for different variants of textarea."]}),(0,l.jsx)(m,{})]})})]});var v=g}},function(e){e.O(0,[5511,9774,2888,179],function(){return e(e.s=27371)}),_N_E=e.O()}]);