(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3397],{69368:function(e,o,n){"use strict";n.d(o,{Z:function(){return S}});var r=n(63366),l=n(87462),a=n(67294),t=n(86010),c=n(94780),s=n(41796),i=n(21964),m=n(82066),d=n(85893),h=(0,m.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,m.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=(0,m.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=n(98216),p=n(71657),C=n(90948),k=n(1588),g=n(34867);function f(e){return(0,g.Z)("MuiCheckbox",e)}let j=(0,k.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),F=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Z=e=>{let{classes:o,indeterminate:n,color:r}=e,a={root:["root",n&&"indeterminate",`color${(0,u.Z)(r)}`]},t=(0,c.Z)(a,f,o);return(0,l.Z)({},o,t)},v=(0,C.ZP)(i.Z,{shouldForwardProp:e=>(0,C.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{let{ownerState:n}=e;return[o.root,n.indeterminate&&o.indeterminate,"default"!==n.color&&o[`color${(0,u.Z)(n.color)}`]]}})(({theme:e,ownerState:o})=>(0,l.Z)({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===o.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===o.color?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&{[`&.${j.checked}, &.${j.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${j.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),L=(0,d.jsx)(x,{}),w=(0,d.jsx)(h,{}),y=(0,d.jsx)(b,{}),I=a.forwardRef(function(e,o){var n,c;let s=(0,p.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:i=L,color:m="primary",icon:h=w,indeterminate:x=!1,indeterminateIcon:b=y,inputProps:u,size:C="medium",className:k}=s,g=(0,r.Z)(s,F),f=x?b:h,j=x?b:i,I=(0,l.Z)({},s,{color:m,indeterminate:x,size:C}),S=Z(I);return(0,d.jsx)(v,(0,l.Z)({type:"checkbox",inputProps:(0,l.Z)({"data-indeterminate":x},u),icon:a.cloneElement(f,{fontSize:null!=(n=f.props.fontSize)?n:C}),checkedIcon:a.cloneElement(j,{fontSize:null!=(c=j.props.fontSize)?c:C}),ownerState:I,ref:o,className:(0,t.Z)(S.root,k)},g,{classes:S}))});var S=I},66485:function(e){function o(){return new DOMException("The request is not allowed","NotAllowedError")}async function n(e){if(!navigator.clipboard)throw o();return navigator.clipboard.writeText(e)}async function r(e){let n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);let r=window.getSelection(),l=window.document.createRange();r.removeAllRanges(),l.selectNode(n),r.addRange(l);let a=!1;try{a=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(n)}if(!a)throw o()}async function l(e){try{await n(e)}catch(n){try{await r(e)}catch(e){throw e||n||o()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=l},53898:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/checkbox",function(){return n(67763)}])},92223:function(e,o,n){"use strict";n.d(o,{Z:function(){return L}});var r=n(85893),l=n(67294),a=n(87357),t=n(66242),c=n(34386),s=n(67720),i=n(57922),m=n(93946),d=n(78445),h=n(44267),x=n(96420),b=n(98396),u=n(33454),p=n(63730),C=n(15660),k=n.n(C),g=n(86501),f=n(66485),j=n.n(f);let F=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName);var Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,l.useRef)(null),n=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&F(o.current)&&o.current.select()},r=()=>{e.onError&&e.onError();let n=!1!==e.selectOnError;n&&F(o.current)&&o.current.select()},a=e=>{j()(e).then(n).catch(r)},t=(0,l.useCallback)(e=>{"string"==typeof e?a(e):o.current&&a(o.current.value)},[]);return{copy:t,target:o}};let v=e=>{let{id:o,sx:n,code:C,title:f,children:j,className:F}=e,[v,L]=(0,l.useState)(!1),[w,y]=(0,l.useState)(null!==C.tsx?"tsx":"jsx"),I=Z(),S=(0,b.Z)(e=>e.breakpoints.down("md"));(0,l.useEffect)(()=>{k().highlightAll()},[v,w]);let G=()=>null!==C.tsx&&"tsx"===w?C.tsx.props.children.props.children:null!==C.jsx&&"jsx"===w?C.jsx.props.children.props.children:"",z=()=>{I.copy(G()),g.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,r.jsxs)(t.Z,{className:F,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...n},id:o||"card-snippet--".concat(f.toLowerCase().replace(/ /g,"-")),children:[(0,r.jsx)(d.Z,{title:f,...S?{}:{action:(0,r.jsx)(m.Z,{onClick:()=>L(!v),children:(0,r.jsx)(p.Z,{icon:"tabler:code",fontSize:20})})}}),(0,r.jsx)(h.Z,{children:j}),S?null:(0,r.jsxs)(i.Z,{in:v,children:[(0,r.jsx)(s.Z,{sx:{my:"0 !important"}}),(0,r.jsxs)(h.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,r.jsx)(a.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,r.jsxs)(u.Z,{exclusive:!0,size:"small",color:"primary",value:w,onChange:(e,o)=>null!==o?y(o):null,children:[null!==C.tsx?(0,r.jsx)(x.Z,{value:"tsx",children:(0,r.jsx)(p.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==C.jsx?(0,r.jsx)(x.Z,{value:"jsx",children:(0,r.jsx)(p.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,r.jsx)(c.Z,{title:"Copy the source",placement:"top",children:(0,r.jsx)(m.Z,{onClick:z,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,r.jsx)(p.Z,{icon:"tabler:copy",fontSize:20})})}),(0,r.jsx)("div",{children:null!==C[w]?C[w]:null})]})]})]})};var L=v},67763:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return V}});var r=n(85893),l=n(86886),a=n(15861),t=n(92223),c=n(69368),s=n(53457),i=n(50480);let m=()=>(0,r.jsxs)(s.Z,{row:!0,children:[(0,r.jsx)(i.Z,{label:"Checked",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"basic-checked"})}),(0,r.jsx)(i.Z,{label:"Unchecked",control:(0,r.jsx)(c.Z,{name:"basic-unchecked"})}),(0,r.jsx)(i.Z,{disabled:!0,label:"Disabled Checked",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"basic-disabled-checked"})}),(0,r.jsx)(i.Z,{disabled:!0,label:"Disabled Unchecked",control:(0,r.jsx)(c.Z,{name:"basic-disabled-unchecked"})})]}),d=()=>(0,r.jsxs)(s.Z,{row:!0,children:[(0,r.jsx)(i.Z,{label:"Small",sx:{"& svg":{height:20,width:20}},control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"size-small"})}),(0,r.jsx)(i.Z,{label:"Default",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"size-default"})})]}),h=()=>(0,r.jsxs)(s.Z,{row:!0,children:[(0,r.jsx)(i.Z,{label:"Primary",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"color-primary"})}),(0,r.jsx)(i.Z,{label:"Secondary",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"color-secondary",color:"secondary"})}),(0,r.jsx)(i.Z,{label:"Success",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"color-success",color:"success"})}),(0,r.jsx)(i.Z,{label:"Error",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"color-error",color:"error"})}),(0,r.jsx)(i.Z,{label:"Warning",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"color-warning",color:"warning"})}),(0,r.jsx)(i.Z,{label:"Info",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"color-info",color:"info"})})]});var x=n(67294),b=n(87357),u=n(40476),p=n(94054),C=n(56815);let k=()=>{let[e,o]=(0,x.useState)({gilad:!0,jason:!1,antoine:!1}),{gilad:n,jason:l,antoine:a}=e,t=2!==[n,l,a].filter(e=>e).length,m=n=>{o({...e,[n.target.name]:n.target.checked})};return(0,r.jsxs)(b.Z,{sx:{display:"flex",flexWrap:"wrap"},children:[(0,r.jsxs)(p.Z,{sx:{mt:4,mr:4},children:[(0,r.jsx)(u.Z,{children:"Assign responsibility"}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{label:"Gilad Gray",control:(0,r.jsx)(c.Z,{checked:n,onChange:m,name:"gilad"})}),(0,r.jsx)(i.Z,{label:"Jason Killian",control:(0,r.jsx)(c.Z,{checked:l,onChange:m,name:"jason"})}),(0,r.jsx)(i.Z,{label:"Antoine Llorca",control:(0,r.jsx)(c.Z,{checked:a,onChange:m,name:"antoine"})})]}),(0,r.jsx)(C.Z,{sx:{mx:0,fontSize:e=>e.typography.body2.fontSize},children:"Be careful"})]}),(0,r.jsxs)(p.Z,{required:!0,error:t,sx:{mt:4},children:[(0,r.jsx)(u.Z,{children:"Pick two"}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{label:"Gilad Gray",control:(0,r.jsx)(c.Z,{checked:n,onChange:m,name:"gilad"})}),(0,r.jsx)(i.Z,{label:"Jason Killian",control:(0,r.jsx)(c.Z,{checked:l,onChange:m,name:"jason"})}),(0,r.jsx)(i.Z,{label:"Antoine Llorca",control:(0,r.jsx)(c.Z,{checked:a,onChange:m,name:"antoine"})})]}),(0,r.jsx)(C.Z,{sx:{mx:0,fontSize:e=>e.typography.body2.fontSize},children:"You can display an error"})]})]})};var g=n(90948);let f=(0,g.ZP)("span")(e=>{let{theme:o}=e;return{width:16,height:16,borderRadius:3,backgroundColor:"dark"===o.palette.mode?"#394b59":"#f5f8fa","input:hover ~ &":{backgroundColor:"dark"===o.palette.mode?"#30404d":"#ebf1f5"},".Mui-focusVisible &":{outlineOffset:2,outline:"2px auto rgba(19,124,189,.6)"},"input:disabled ~ &":{boxShadow:"none",background:"dark"===o.palette.mode?"rgba(57,75,89,.5)":"rgba(206,217,224,.5)"},boxShadow:"dark"===o.palette.mode?"0 0 0 1px rgb(16 22 26 / 40%)":"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundImage:"dark"===o.palette.mode?"linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))":"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))"}}),j=(0,g.ZP)(f)({backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","input:hover ~ &":{backgroundColor:"#106ba3"},"&:before":{width:16,height:16,content:'""',display:"block",backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")"}}),F=e=>(0,r.jsx)(c.Z,{...e,disableRipple:!0,color:"default",icon:(0,r.jsx)(f,{}),checkedIcon:(0,r.jsx)(j,{}),inputProps:{"aria-label":"Checkbox demo"},sx:{"&:hover":{backgroundColor:"transparent"}}}),Z=()=>(0,r.jsxs)("div",{children:[(0,r.jsx)(F,{}),(0,r.jsx)(F,{defaultChecked:!0}),(0,r.jsx)(F,{disabled:!0})]});var v=n(63730);let L=()=>(0,r.jsxs)(s.Z,{row:!0,children:[(0,r.jsx)(i.Z,{label:"Heart",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"size-small",checkedIcon:(0,r.jsx)(v.Z,{icon:"mdi:heart",fontSize:24}),icon:(0,r.jsx)(v.Z,{icon:"mdi:heart-outline",fontSize:24})})}),(0,r.jsx)(i.Z,{label:"Star",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"size-small",checkedIcon:(0,r.jsx)(v.Z,{icon:"mdi:star",fontSize:24}),icon:(0,r.jsx)(v.Z,{icon:"mdi:star-outline",fontSize:24})})})]}),w=()=>(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.Z,{row:!0,children:[(0,r.jsx)(i.Z,{value:"top",label:"Top",labelPlacement:"top",control:(0,r.jsx)(c.Z,{}),sx:{mr:9.2}}),(0,r.jsx)(i.Z,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:(0,r.jsx)(c.Z,{})})]}),(0,r.jsxs)(s.Z,{row:!0,sx:{mt:4},children:[(0,r.jsx)(i.Z,{value:"start",label:"Start",control:(0,r.jsx)(c.Z,{}),labelPlacement:"start",sx:{mr:4}}),(0,r.jsx)(i.Z,{value:"end",control:(0,r.jsx)(c.Z,{}),label:"End",labelPlacement:"end"})]})]}),y=()=>{let[e,o]=(0,x.useState)(!0),n=e=>{o(e.target.checked)};return(0,r.jsxs)(s.Z,{row:!0,children:[(0,r.jsx)(i.Z,{label:"Controlled",control:(0,r.jsx)(c.Z,{checked:e,onChange:n,name:"controlled"})}),(0,r.jsx)(i.Z,{label:"Uncontrolled",control:(0,r.jsx)(c.Z,{defaultChecked:!0,name:"uncontrolled"})})]})},I=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesColors = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel label='Primary' control={<Checkbox defaultChecked name='color-primary' />} />\n      <FormControlLabel\n        label='Secondary'\n        control={<Checkbox defaultChecked name='color-secondary' color='secondary' />}\n      />\n      <FormControlLabel label='Success' control={<Checkbox defaultChecked name='color-success' color='success' />} />\n      <FormControlLabel label='Error' control={<Checkbox defaultChecked name='color-error' color='error' />} />\n      <FormControlLabel label='Warning' control={<Checkbox defaultChecked name='color-warning' color='warning' />} />\n      <FormControlLabel label='Info' control={<Checkbox defaultChecked name='color-info' color='info' />} />\n    </FormGroup>\n  )\n}\n\nexport default CheckboxesColors\n"})}),S=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesBasic = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel label='Checked' control={<Checkbox defaultChecked name='basic-checked' />} />\n      <FormControlLabel label='Unchecked' control={<Checkbox name='basic-unchecked' />} />\n      <FormControlLabel\n        disabled\n        label='Disabled Checked'\n        control={<Checkbox defaultChecked name='basic-disabled-checked' />}\n      />\n      <FormControlLabel disabled label='Disabled Unchecked' control={<Checkbox name='basic-disabled-unchecked' />} />\n    </FormGroup>\n  )\n}\n\nexport default CheckboxesBasic\n"})}),G=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst CheckboxesCustomIcons = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        label='Heart'\n        control={\n          <Checkbox\n            defaultChecked\n            name='size-small'\n            checkedIcon={<Icon icon='mdi:heart' fontSize={24} />}\n            icon={<Icon icon='mdi:heart-outline' fontSize={24} />}\n          />\n        }\n      />\n      <FormControlLabel\n        label='Star'\n        control={\n          <Checkbox\n            defaultChecked\n            name='size-small'\n            checkedIcon={<Icon icon='mdi:star' fontSize={24} />}\n            icon={<Icon icon='mdi:star-outline' fontSize={24} />}\n          />\n        }\n      />\n    </FormGroup>\n  )\n}\n\nexport default CheckboxesCustomIcons\n"})}),z=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesControlledUncontrolled = () => {\n  // ** State\n  const [checked, setChecked] = useState(true)\n\n  const handleChange = event => {\n    setChecked(event.target.checked)\n  }\n\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        label='Controlled'\n        control={<Checkbox checked={checked} onChange={handleChange} name='controlled' />}\n      />\n      <FormControlLabel label='Uncontrolled' control={<Checkbox defaultChecked name='uncontrolled' />} />\n    </FormGroup>\n  )\n}\n\nexport default CheckboxesControlledUncontrolled\n"})}),P=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport { styled } from '@mui/material/styles'\nimport Checkbox from '@mui/material/Checkbox'\n\nconst BpIcon = styled('span')(({ theme }) => ({\n  width: 16,\n  height: 16,\n  borderRadius: 3,\n  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',\n  'input:hover ~ &': {\n    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5'\n  },\n  '.Mui-focusVisible &': {\n    outlineOffset: 2,\n    outline: '2px auto rgba(19,124,189,.6)'\n  },\n  'input:disabled ~ &': {\n    boxShadow: 'none',\n    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)'\n  },\n  boxShadow:\n    theme.palette.mode === 'dark'\n      ? '0 0 0 1px rgb(16 22 26 / 40%)'\n      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',\n  backgroundImage:\n    theme.palette.mode === 'dark'\n      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'\n      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))'\n}))\n\nconst BpCheckedIcon = styled(BpIcon)({\n  backgroundColor: '#137cbd',\n  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',\n  'input:hover ~ &': {\n    backgroundColor: '#106ba3'\n  },\n  '&:before': {\n    width: 16,\n    height: 16,\n    content: '\"\"',\n    display: 'block',\n    backgroundImage:\n      \"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath\" +\n      \" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 \" +\n      \"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")\"\n  }\n})\n\n// Inspired by blueprintjs\nconst BpCheckbox = props => {\n  return (\n    <Checkbox\n      {...props}\n      disableRipple\n      color='default'\n      icon={<BpIcon />}\n      checkedIcon={<BpCheckedIcon />}\n      inputProps={{ 'aria-label': 'Checkbox demo' }}\n      sx={{ '&:hover': { backgroundColor: 'transparent' } }}\n    />\n  )\n}\n\nconst CheckboxesCustomized = () => {\n  return (\n    <div>\n      <BpCheckbox />\n      <BpCheckbox defaultChecked />\n      <BpCheckbox disabled />\n    </div>\n  )\n}\n\nexport default CheckboxesCustomized\n"})}),N=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormLabel from '@mui/material/FormLabel'\nimport FormControl from '@mui/material/FormControl'\nimport FormHelperText from '@mui/material/FormHelperText'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesShowError = () => {\n  // ** State\n  const [state, setState] = useState({\n    gilad: true,\n    jason: false,\n    antoine: false\n  })\n\n  // ** Vars\n  const { gilad, jason, antoine } = state\n  const error = [gilad, jason, antoine].filter(v => v).length !== 2\n\n  const handleChange = event => {\n    setState({ ...state, [event.target.name]: event.target.checked })\n  }\n\n  return (\n    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>\n      <FormControl sx={{ mt: 4, mr: 4 }}>\n        <FormLabel>Assign responsibility</FormLabel>\n        <FormGroup>\n          <FormControlLabel\n            label='Gilad Gray'\n            control={<Checkbox checked={gilad} onChange={handleChange} name='gilad' />}\n          />\n          <FormControlLabel\n            label='Jason Killian'\n            control={<Checkbox checked={jason} onChange={handleChange} name='jason' />}\n          />\n          <FormControlLabel\n            label='Antoine Llorca'\n            control={<Checkbox checked={antoine} onChange={handleChange} name='antoine' />}\n          />\n        </FormGroup>\n        <FormHelperText sx={{ mx: 0, fontSize: theme => theme.typography.body2.fontSize }}>Be careful</FormHelperText>\n      </FormControl>\n      <FormControl required error={error} sx={{ mt: 4 }}>\n        <FormLabel>Pick two</FormLabel>\n        <FormGroup>\n          <FormControlLabel\n            label='Gilad Gray'\n            control={<Checkbox checked={gilad} onChange={handleChange} name='gilad' />}\n          />\n          <FormControlLabel\n            label='Jason Killian'\n            control={<Checkbox checked={jason} onChange={handleChange} name='jason' />}\n          />\n          <FormControlLabel\n            label='Antoine Llorca'\n            control={<Checkbox checked={antoine} onChange={handleChange} name='antoine' />}\n          />\n        </FormGroup>\n        <FormHelperText sx={{ mx: 0, fontSize: theme => theme.typography.body2.fontSize }}>\n          You can display an error\n        </FormHelperText>\n      </FormControl>\n    </Box>\n  )\n}\n\nexport default CheckboxesShowError\n"})}),B=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesLabelPlacement = () => {\n  return (\n    <div>\n      <FormGroup row>\n        <FormControlLabel value='top' label='Top' labelPlacement='top' control={<Checkbox />} sx={{ mr: 9.2 }} />\n        <FormControlLabel value='bottom' label='Bottom' labelPlacement='bottom' control={<Checkbox />} />\n      </FormGroup>\n      <FormGroup row sx={{ mt: 4 }}>\n        <FormControlLabel value='start' label='Start' control={<Checkbox />} labelPlacement='start' sx={{ mr: 4 }} />\n        <FormControlLabel value='end' control={<Checkbox />} label='End' labelPlacement='end' />\n      </FormGroup>\n    </div>\n  )\n}\n\nexport default CheckboxesLabelPlacement\n"})}),E=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesSizes = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        label='Small'\n        sx={{ '& svg': { height: 20, width: 20 } }}\n        control={<Checkbox defaultChecked name='size-small' />}\n      />\n      <FormControlLabel label='Default' control={<Checkbox defaultChecked name='size-default' />} />\n    </FormGroup>\n  )\n}\n\nexport default CheckboxesSizes\n"})}),U=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesBasic = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel label='Checked' control={<Checkbox defaultChecked name='basic-checked' />} />\n      <FormControlLabel label='Unchecked' control={<Checkbox name='basic-unchecked' />} />\n      <FormControlLabel\n        disabled\n        label='Disabled Checked'\n        control={<Checkbox defaultChecked name='basic-disabled-checked' />}\n      />\n      <FormControlLabel disabled label='Disabled Unchecked' control={<Checkbox name='basic-disabled-unchecked' />} />\n    </FormGroup>\n  )\n}\n\nexport default CheckboxesBasic\n"})}),M=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst CheckboxesCustomIcons = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        label='Heart'\n        control={\n          <Checkbox\n            defaultChecked\n            name='size-small'\n            checkedIcon={<Icon icon='mdi:heart' fontSize={24} />}\n            icon={<Icon icon='mdi:heart-outline' fontSize={24} />}\n          />\n        }\n      />\n      <FormControlLabel\n        label='Star'\n        control={\n          <Checkbox\n            defaultChecked\n            name='size-small'\n            checkedIcon={<Icon icon='mdi:star' fontSize={24} />}\n            icon={<Icon icon='mdi:star-outline' fontSize={24} />}\n          />\n        }\n      />\n    </FormGroup>\n  )\n}\n\nexport default CheckboxesCustomIcons\n"})}),T=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { ChangeEvent, useState } from 'react'\n\n// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesControlledUncontrolled = () => {\n  // ** State\n  const [checked, setChecked] = useState<boolean>(true)\n\n  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {\n    setChecked(event.target.checked)\n  }\n\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        label='Controlled'\n        control={<Checkbox checked={checked} onChange={handleChange} name='controlled' />}\n      />\n      <FormControlLabel label='Uncontrolled' control={<Checkbox defaultChecked name='uncontrolled' />} />\n    </FormGroup>\n  )\n}\n\nexport default CheckboxesControlledUncontrolled\n"})}),H=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesColors = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel label='Primary' control={<Checkbox defaultChecked name='color-primary' />} />\n      <FormControlLabel\n        label='Secondary'\n        control={<Checkbox defaultChecked name='color-secondary' color='secondary' />}\n      />\n      <FormControlLabel label='Success' control={<Checkbox defaultChecked name='color-success' color='success' />} />\n      <FormControlLabel label='Error' control={<Checkbox defaultChecked name='color-error' color='error' />} />\n      <FormControlLabel label='Warning' control={<Checkbox defaultChecked name='color-warning' color='warning' />} />\n      <FormControlLabel label='Info' control={<Checkbox defaultChecked name='color-info' color='info' />} />\n    </FormGroup>\n  )\n}\n\nexport default CheckboxesColors\n"})}),R=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesLabelPlacement = () => {\n  return (\n    <div>\n      <FormGroup row>\n        <FormControlLabel value='top' label='Top' labelPlacement='top' control={<Checkbox />} sx={{ mr: 9.2 }} />\n        <FormControlLabel value='bottom' label='Bottom' labelPlacement='bottom' control={<Checkbox />} />\n      </FormGroup>\n      <FormGroup row sx={{ mt: 4 }}>\n        <FormControlLabel value='start' label='Start' control={<Checkbox />} labelPlacement='start' sx={{ mr: 4 }} />\n        <FormControlLabel value='end' control={<Checkbox />} label='End' labelPlacement='end' />\n      </FormGroup>\n    </div>\n  )\n}\n\nexport default CheckboxesLabelPlacement\n"})}),A=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport { styled } from '@mui/material/styles'\nimport Checkbox, { CheckboxProps } from '@mui/material/Checkbox'\n\nconst BpIcon = styled('span')(({ theme }) => ({\n  width: 16,\n  height: 16,\n  borderRadius: 3,\n  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',\n  'input:hover ~ &': {\n    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5'\n  },\n  '.Mui-focusVisible &': {\n    outlineOffset: 2,\n    outline: '2px auto rgba(19,124,189,.6)'\n  },\n  'input:disabled ~ &': {\n    boxShadow: 'none',\n    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)'\n  },\n  boxShadow:\n    theme.palette.mode === 'dark'\n      ? '0 0 0 1px rgb(16 22 26 / 40%)'\n      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',\n  backgroundImage:\n    theme.palette.mode === 'dark'\n      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'\n      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))'\n}))\n\nconst BpCheckedIcon = styled(BpIcon)({\n  backgroundColor: '#137cbd',\n  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',\n  'input:hover ~ &': {\n    backgroundColor: '#106ba3'\n  },\n  '&:before': {\n    width: 16,\n    height: 16,\n    content: '\"\"',\n    display: 'block',\n    backgroundImage:\n      \"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath\" +\n      \" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 \" +\n      \"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")\"\n  }\n})\n\n// Inspired by blueprintjs\nconst BpCheckbox = (props: CheckboxProps) => {\n  return (\n    <Checkbox\n      {...props}\n      disableRipple\n      color='default'\n      icon={<BpIcon />}\n      checkedIcon={<BpCheckedIcon />}\n      inputProps={{ 'aria-label': 'Checkbox demo' }}\n      sx={{ '&:hover': { backgroundColor: 'transparent' } }}\n    />\n  )\n}\n\nconst CheckboxesCustomized = () => {\n  return (\n    <div>\n      <BpCheckbox />\n      <BpCheckbox defaultChecked />\n      <BpCheckbox disabled />\n    </div>\n  )\n}\n\nexport default CheckboxesCustomized\n"})}),O=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\nconst CheckboxesSizes = () => {\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        label='Small'\n        sx={{ '& svg': { height: 20, width: 20 } }}\n        control={<Checkbox defaultChecked name='size-small' />}\n      />\n      <FormControlLabel label='Default' control={<Checkbox defaultChecked name='size-default' />} />\n    </FormGroup>\n  )\n}\n\nexport default CheckboxesSizes\n"})}),_=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { ChangeEvent, useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Checkbox from '@mui/material/Checkbox'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormLabel from '@mui/material/FormLabel'\nimport FormControl from '@mui/material/FormControl'\nimport FormHelperText from '@mui/material/FormHelperText'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\ninterface StateType {\n  [key: string]: boolean\n}\n\nconst CheckboxesShowError = () => {\n  // ** State\n  const [state, setState] = useState<StateType>({\n    gilad: true,\n    jason: false,\n    antoine: false\n  })\n\n  // ** Vars\n  const { gilad, jason, antoine } = state\n  const error = [gilad, jason, antoine].filter(v => v).length !== 2\n\n  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {\n    setState({ ...state, [event.target.name]: event.target.checked })\n  }\n\n  return (\n    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>\n      <FormControl sx={{ mt: 4, mr: 4 }}>\n        <FormLabel>Assign responsibility</FormLabel>\n        <FormGroup>\n          <FormControlLabel\n            label='Gilad Gray'\n            control={<Checkbox checked={gilad} onChange={handleChange} name='gilad' />}\n          />\n          <FormControlLabel\n            label='Jason Killian'\n            control={<Checkbox checked={jason} onChange={handleChange} name='jason' />}\n          />\n          <FormControlLabel\n            label='Antoine Llorca'\n            control={<Checkbox checked={antoine} onChange={handleChange} name='antoine' />}\n          />\n        </FormGroup>\n        <FormHelperText sx={{ mx: 0, fontSize: theme => theme.typography.body2.fontSize }}>Be careful</FormHelperText>\n      </FormControl>\n      <FormControl required error={error} sx={{ mt: 4 }}>\n        <FormLabel>Pick two</FormLabel>\n        <FormGroup>\n          <FormControlLabel\n            label='Gilad Gray'\n            control={<Checkbox checked={gilad} onChange={handleChange} name='gilad' />}\n          />\n          <FormControlLabel\n            label='Jason Killian'\n            control={<Checkbox checked={jason} onChange={handleChange} name='jason' />}\n          />\n          <FormControlLabel\n            label='Antoine Llorca'\n            control={<Checkbox checked={antoine} onChange={handleChange} name='antoine' />}\n          />\n        </FormGroup>\n        <FormHelperText sx={{ mx: 0, fontSize: theme => theme.typography.body2.fontSize }}>\n          You can display an error\n        </FormHelperText>\n      </FormControl>\n    </Box>\n  )\n}\n\nexport default CheckboxesShowError\n"})}),D=()=>(0,r.jsxs)(l.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsx)(t.Z,{title:"Basic Checkboxes",code:{tsx:U,jsx:S},children:(0,r.jsx)(m,{})})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Controlled and Uncontrolled",code:{tsx:T,jsx:z},children:[(0,r.jsxs)(a.Z,{sx:{mb:2},children:["Manage ",(0,r.jsx)("code",{children:"checked"})," prop with the help of a state for controlled ",(0,r.jsx)("code",{children:"Checkbox"})," and"," ",(0,r.jsx)("code",{children:"defaultChecked"})," prop with for uncontrolled ",(0,r.jsx)("code",{children:"Checkbox"}),"."]}),(0,r.jsx)(y,{})]})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Colors",code:{tsx:H,jsx:I},children:[(0,r.jsxs)(a.Z,{sx:{mb:2},children:["Use ",(0,r.jsx)("code",{children:"color"})," prop for different colored checkbox."]}),(0,r.jsx)(h,{})]})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Customized",code:{tsx:A,jsx:P},children:[(0,r.jsxs)(a.Z,{sx:{mb:2},children:["Use ",(0,r.jsx)("code",{children:"styled"})," hook to customize your checkbox."]}),(0,r.jsx)(Z,{})]})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Custom Icons",code:{tsx:M,jsx:G},children:[(0,r.jsxs)(a.Z,{sx:{mb:2},children:["Use ",(0,r.jsx)("code",{children:"icon"})," and ",(0,r.jsx)("code",{children:"checkedIcon"})," props with ",(0,r.jsx)("code",{children:"Checkbox"})," component to change default checkbox icons."]}),(0,r.jsx)(L,{})]})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Label Placement",code:{tsx:R,jsx:B},children:[(0,r.jsxs)(a.Z,{sx:{mb:4},children:["Use ",(0,r.jsx)("code",{children:"labelPlacement"})," prop with ",(0,r.jsx)("code",{children:"FormControlLabel"})," component to change the placement of the label."]}),(0,r.jsx)(w,{})]})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(t.Z,{title:"Show Error",code:{tsx:_,jsx:N},children:[(0,r.jsxs)(a.Z,{children:["You can display error by managing ",(0,r.jsx)("code",{children:"error"})," prop with ",(0,r.jsx)("code",{children:"FormControl"})," component with the help of a state."]}),(0,r.jsx)(k,{})]})}),(0,r.jsx)(l.ZP,{item:!0,xs:12,children:(0,r.jsxs)(t.Z,{title:"Sizes",code:{tsx:O,jsx:E},children:[(0,r.jsxs)(a.Z,{sx:{mb:2},children:["Use ",(0,r.jsx)("code",{children:"icon"})," and ",(0,r.jsx)("code",{children:"checkedIcon"})," props with ",(0,r.jsx)("code",{children:"Checkbox"})," component and use"," ",(0,r.jsx)("code",{children:"fontSize='small'"})," prop with the former props for small checkbox."]}),(0,r.jsx)(d,{})]})})]});var V=D}},function(e){e.O(0,[5511,9774,2888,179],function(){return e(e.s=53898)}),_N_E=e.O()}]);