(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6190],{51107:function(a,r,t){"use strict";t.d(r,{Z:function(){return y}});var e=t(63366),s=t(87462),n=t(67294);t(59864);var o=t(86010),i=t(94780),l=t(90948),c=t(71657),m=t(54801),p=t(87952),d=t(1588),v=t(34867);function x(a){return(0,v.Z)("MuiAvatarGroup",a)}let u=(0,d.Z)("MuiAvatarGroup",["root","avatar"]);var g=t(85893);let h=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],A={small:-16,medium:null},j=a=>{let{classes:r}=a;return(0,i.Z)({root:["root"],avatar:["avatar"]},x,r)},f=(0,l.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,r)=>(0,s.Z)({[`& .${u.avatar}`]:r.avatar},r.root)})(({theme:a})=>({[`& .${m.Z.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"})),Z=(0,l.ZP)(p.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(a,r)=>r.avatar})(({theme:a})=>({border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})),b=n.forwardRef(function(a,r){var t;let i=(0,c.Z)({props:a,name:"MuiAvatarGroup"}),{children:l,className:m,component:p="div",componentsProps:d={},max:v=5,slotProps:x={},spacing:u="medium",total:b,variant:y="circular"}=i,C=(0,e.Z)(i,h),N=v<2?2:v,I=(0,s.Z)({},i,{max:v,spacing:u,component:p,variant:y}),w=j(I),B=n.Children.toArray(l).filter(a=>n.isValidElement(a)),k=b||B.length;k===N&&(N+=1),N=Math.min(k+1,N);let G=Math.min(B.length,N-1),S=Math.max(k-N,k-G,0),H=u&&void 0!==A[u]?A[u]:-u,M=null!=(t=x.additionalAvatar)?t:d.additionalAvatar;return(0,g.jsxs)(f,(0,s.Z)({as:p,ownerState:I,className:(0,o.Z)(w.root,m),ref:r},C,{children:[S?(0,g.jsxs)(Z,(0,s.Z)({ownerState:I,variant:y},M,{className:(0,o.Z)(w.avatar,null==M?void 0:M.className),style:(0,s.Z)({marginLeft:H},null==M?void 0:M.style),children:["+",S]})):null,B.slice(0,G).reverse().map((a,r)=>n.cloneElement(a,{className:(0,o.Z)(a.props.className,w.avatar),style:(0,s.Z)({marginLeft:r===G-1?void 0:H},a.props.style),variant:a.props.variant||y}))]}))});var y=b},66485:function(a){function r(){return new DOMException("The request is not allowed","NotAllowedError")}async function t(a){if(!navigator.clipboard)throw r();return navigator.clipboard.writeText(a)}async function e(a){let t=document.createElement("span");t.textContent=a,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let e=window.getSelection(),s=window.document.createRange();e.removeAllRanges(),s.selectNode(t),e.addRange(s);let n=!1;try{n=window.document.execCommand("copy")}finally{e.removeAllRanges(),window.document.body.removeChild(t)}if(!n)throw r()}async function s(a){try{await t(a)}catch(t){try{await e(a)}catch(a){throw a||t||r()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */a.exports=s},99385:function(a,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/avatars",function(){return t(7487)}])},92223:function(a,r,t){"use strict";t.d(r,{Z:function(){return N}});var e=t(85893),s=t(67294),n=t(87357),o=t(66242),i=t(34386),l=t(67720),c=t(57922),m=t(93946),p=t(78445),d=t(44267),v=t(96420),x=t(98396),u=t(33454),g=t(63730),h=t(15660),A=t.n(h),j=t(86501),f=t(66485),Z=t.n(f);let b=a=>a&&("TEXTAREA"===a.nodeName||"INPUT"===a.nodeName);var y=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,s.useRef)(null),t=()=>{a.onSuccess&&a.onSuccess(),a.selectOnCopy&&b(r.current)&&r.current.select()},e=()=>{a.onError&&a.onError();let t=!1!==a.selectOnError;t&&b(r.current)&&r.current.select()},n=a=>{Z()(a).then(t).catch(e)},o=(0,s.useCallback)(a=>{"string"==typeof a?n(a):r.current&&n(r.current.value)},[]);return{copy:o,target:r}};let C=a=>{let{id:r,sx:t,code:h,title:f,children:Z,className:b}=a,[C,N]=(0,s.useState)(!1),[I,w]=(0,s.useState)(null!==h.tsx?"tsx":"jsx"),B=y(),k=(0,x.Z)(a=>a.breakpoints.down("md"));(0,s.useEffect)(()=>{A().highlightAll()},[C,I]);let G=()=>null!==h.tsx&&"tsx"===I?h.tsx.props.children.props.children:null!==h.jsx&&"jsx"===I?h.jsx.props.children.props.children:"",S=()=>{B.copy(G()),j.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,e.jsxs)(o.Z,{className:b,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...t},id:r||"card-snippet--".concat(f.toLowerCase().replace(/ /g,"-")),children:[(0,e.jsx)(p.Z,{title:f,...k?{}:{action:(0,e.jsx)(m.Z,{onClick:()=>N(!C),children:(0,e.jsx)(g.Z,{icon:"tabler:code",fontSize:20})})}}),(0,e.jsx)(d.Z,{children:Z}),k?null:(0,e.jsxs)(c.Z,{in:C,children:[(0,e.jsx)(l.Z,{sx:{my:"0 !important"}}),(0,e.jsxs)(d.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,e.jsx)(n.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,e.jsxs)(u.Z,{exclusive:!0,size:"small",color:"primary",value:I,onChange:(a,r)=>null!==r?w(r):null,children:[null!==h.tsx?(0,e.jsx)(v.Z,{value:"tsx",children:(0,e.jsx)(g.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==h.jsx?(0,e.jsx)(v.Z,{value:"jsx",children:(0,e.jsx)(g.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,e.jsx)(i.Z,{title:"Copy the source",placement:"top",children:(0,e.jsx)(m.Z,{onClick:S,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,e.jsx)(g.Z,{icon:"tabler:copy",fontSize:20})})}),(0,e.jsx)("div",{children:null!==h[I]?h[I]:null})]})]})]})};var N=C},7487:function(a,r,t){"use strict";t.r(r),t.d(r,{default:function(){return E}});var e=t(85893),s=t(86886),n=t(15861),o=t(92223),i=t(87357),l=t(87952),c=t(63730),m=t(60155);let p=()=>(0,e.jsxs)(i.Z,{className:"demo-space-x",sx:{display:"flex"},children:[(0,e.jsx)(l.Z,{children:(0,e.jsx)(c.Z,{icon:"tabler:folder"})}),(0,e.jsx)(m.Z,{color:"success",children:(0,e.jsx)(c.Z,{icon:"tabler:refresh"})}),(0,e.jsx)(m.Z,{skin:"light",color:"info",children:(0,e.jsx)(c.Z,{icon:"tabler:circle-check"})})]}),d=()=>(0,e.jsxs)(i.Z,{className:"demo-space-x",sx:{display:"flex"},children:[(0,e.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"Victor Anderson"}),(0,e.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"Alice Cobb"}),(0,e.jsx)(l.Z,{src:"/images/avatars/7.png",alt:"Jeffery Warner"})]}),v=()=>(0,e.jsxs)(i.Z,{className:"demo-space-x",sx:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(l.Z,{alt:"Victor Anderson",sx:{width:25,height:25},src:"/images/avatars/3.png"}),(0,e.jsx)(l.Z,{alt:"Victor Anderson",src:"/images/avatars/3.png"}),(0,e.jsx)(l.Z,{alt:"Victor Anderson",sx:{width:56,height:56},src:"/images/avatars/3.png"})]}),x=()=>(0,e.jsxs)(i.Z,{className:"demo-space-x",sx:{display:"flex"},children:[(0,e.jsx)(l.Z,{children:"H"}),(0,e.jsx)(m.Z,{children:"N"}),(0,e.jsx)(m.Z,{skin:"light",color:"error",children:"OP"}),(0,e.jsx)(m.Z,{skin:"light-static",color:"error",children:"AB"})]});var u=t(51107);let g=()=>(0,e.jsxs)("div",{className:"demo-space-y",children:[(0,e.jsxs)(u.Z,{max:4,children:[(0,e.jsx)(l.Z,{src:"/images/avatars/4.png",alt:"Olivia Sparks"}),(0,e.jsx)(l.Z,{src:"/images/avatars/5.png",alt:"Howard Lloyd"}),(0,e.jsx)(l.Z,{src:"/images/avatars/6.png",alt:"Hallie Richards"}),(0,e.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"Alice Cobb"}),(0,e.jsx)(l.Z,{src:"/images/avatars/7.png",alt:"Jeffery Warner"})]}),(0,e.jsxs)(u.Z,{max:4,sx:{justifyContent:"center"},children:[(0,e.jsx)(l.Z,{src:"/images/avatars/4.png",alt:"Olivia Sparks"}),(0,e.jsx)(l.Z,{src:"/images/avatars/5.png",alt:"Howard Lloyd"}),(0,e.jsx)(l.Z,{src:"/images/avatars/6.png",alt:"Hallie Richards"}),(0,e.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"Alice Cobb"}),(0,e.jsx)(l.Z,{src:"/images/avatars/7.png",alt:"Jeffery Warner"})]}),(0,e.jsxs)(u.Z,{max:4,sx:{justifyContent:"flex-start"},children:[(0,e.jsx)(l.Z,{src:"/images/avatars/4.png",alt:"Olivia Sparks"}),(0,e.jsx)(l.Z,{src:"/images/avatars/5.png",alt:"Howard Lloyd"}),(0,e.jsx)(l.Z,{src:"/images/avatars/6.png",alt:"Hallie Richards"}),(0,e.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"Alice Cobb"}),(0,e.jsx)(l.Z,{src:"/images/avatars/7.png",alt:"Jeffery Warner"})]})]}),h=()=>(0,e.jsxs)(i.Z,{className:"demo-space-x",sx:{display:"flex"},children:[(0,e.jsx)(m.Z,{variant:"square",children:(0,e.jsx)(c.Z,{icon:"tabler:bell"})}),(0,e.jsx)(m.Z,{color:"success",variant:"rounded",children:(0,e.jsx)(c.Z,{icon:"tabler:device-floppy"})}),(0,e.jsx)(m.Z,{skin:"light",variant:"square",children:(0,e.jsx)(c.Z,{icon:"tabler:bell"})}),(0,e.jsx)(m.Z,{skin:"light",color:"success",variant:"rounded",children:(0,e.jsx)(c.Z,{icon:"tabler:device-floppy"})})]});var A=t(90263),j=t(90948);let f=(0,j.ZP)("span")(a=>{let{theme:r}=a;return{width:8,height:8,borderRadius:"50%",backgroundColor:r.palette.success.main,boxShadow:"0 0 0 2px ".concat(r.palette.background.paper)}}),Z=()=>(0,e.jsxs)(i.Z,{className:"demo-space-x",sx:{display:"flex"},children:[(0,e.jsx)(A.Z,{overlap:"circular",badgeContent:(0,e.jsx)(f,{}),anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,e.jsx)(l.Z,{alt:"Marie Garza",src:"/images/avatars/2.png"})}),(0,e.jsx)(A.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,e.jsx)(l.Z,{alt:"Marie Garza",src:"/images/avatars/2.png",sx:{width:22,height:22,border:a=>"2px solid ".concat(a.palette.background.paper)}}),children:(0,e.jsx)(l.Z,{alt:"Olivia Sparks",src:"/images/avatars/4.png"})})]}),b=()=>(0,e.jsxs)(u.Z,{className:"pull-up",max:4,children:[(0,e.jsx)(l.Z,{src:"/images/avatars/4.png",alt:"Olivia Sparks"}),(0,e.jsx)(l.Z,{src:"/images/avatars/5.png",alt:"Howard Lloyd"}),(0,e.jsx)(l.Z,{src:"/images/avatars/6.png",alt:"Hallie Richards"}),(0,e.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"Alice Cobb"}),(0,e.jsx)(l.Z,{src:"/images/avatars/7.png",alt:"Jeffery Warner"})]});var y=t(34386);let C=()=>(0,e.jsxs)(u.Z,{className:"pull-up",max:4,children:[(0,e.jsx)(y.Z,{title:"Olivia Sparks",children:(0,e.jsx)(l.Z,{src:"/images/avatars/4.png",alt:"Olivia Sparks"})}),(0,e.jsx)(y.Z,{title:"Howard Lloyd",children:(0,e.jsx)(l.Z,{src:"/images/avatars/5.png",alt:"Howard Lloyd"})}),(0,e.jsx)(y.Z,{title:"Hallie Richards",children:(0,e.jsx)(l.Z,{src:"/images/avatars/6.png",alt:"Hallie Richards"})}),(0,e.jsx)(y.Z,{title:"Alice Cobb",children:(0,e.jsx)(l.Z,{src:"/images/avatars/8.png",alt:"Alice Cobb"})}),(0,e.jsx)(y.Z,{title:"Jeffery Warner",children:(0,e.jsx)(l.Z,{src:"/images/avatars/7.png",alt:"Jeffery Warner"})})]}),N=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Avatar from '@mui/material/Avatar'\nimport AvatarGroup from '@mui/material/AvatarGroup'\n\nconst AvatarsGrouped = () => {\n  return (\n    <div className='demo-space-y'>\n      <AvatarGroup max={4}>\n        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />\n        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />\n        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />\n        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n      </AvatarGroup>\n      <AvatarGroup max={4} sx={{ justifyContent: 'center' }}>\n        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />\n        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />\n        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />\n        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n      </AvatarGroup>\n      <AvatarGroup max={4} sx={{ justifyContent: 'flex-start' }}>\n        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />\n        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />\n        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />\n        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n      </AvatarGroup>\n    </div>\n  )\n}\n\nexport default AvatarsGrouped\n"})}),I=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Avatar from '@mui/material/Avatar'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\n// ** Custom Components Imports\nimport CustomAvatar from 'src/@core/components/mui/avatar'\n\nconst AvatarsIcon = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex' }}>\n      <Avatar>\n        <Icon icon='tabler:folder' />\n      </Avatar>\n      <CustomAvatar color='success'>\n        <Icon icon='tabler:refresh' />\n      </CustomAvatar>\n      <CustomAvatar skin='light' color='info'>\n        <Icon icon='tabler:circle-check' />\n      </CustomAvatar>\n    </Box>\n  )\n}\n\nexport default AvatarsIcon\n"})}),w=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Avatar from '@mui/material/Avatar'\nimport AvatarGroup from '@mui/material/AvatarGroup'\n\nconst AvatarsGroupedPullUp = () => {\n  return (\n    <AvatarGroup className='pull-up' max={4}>\n      <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />\n      <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />\n      <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />\n      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n    </AvatarGroup>\n  )\n}\n\nexport default AvatarsGroupedPullUp\n"})}),B=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Avatar from '@mui/material/Avatar'\nimport Tooltip from '@mui/material/Tooltip'\nimport AvatarGroup from '@mui/material/AvatarGroup'\n\nconst AvatarsGroupedPullUpWithTooltip = () => {\n  return (\n    <AvatarGroup className='pull-up' max={4}>\n      <Tooltip title='Olivia Sparks'>\n        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />\n      </Tooltip>\n      <Tooltip title='Howard Lloyd'>\n        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />\n      </Tooltip>\n      <Tooltip title='Hallie Richards'>\n        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />\n      </Tooltip>\n      <Tooltip title='Alice Cobb'>\n        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n      </Tooltip>\n      <Tooltip title='Jeffery Warner'>\n        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n      </Tooltip>\n    </AvatarGroup>\n  )\n}\n\nexport default AvatarsGroupedPullUpWithTooltip\n"})}),k=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Avatar from '@mui/material/Avatar'\n\nconst AvatarsImage = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex' }}>\n      <Avatar src='/images/avatars/1.png' alt='Victor Anderson' />\n      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n    </Box>\n  )\n}\n\nexport default AvatarsImage\n"})}),G=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Avatar from '@mui/material/Avatar'\n\nconst AvatarsSizes = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex', alignItems: 'center' }}>\n      <Avatar alt='Victor Anderson' sx={{ width: 25, height: 25 }} src='/images/avatars/3.png' />\n      <Avatar alt='Victor Anderson' src='/images/avatars/3.png' />\n      <Avatar alt='Victor Anderson' sx={{ width: 56, height: 56 }} src='/images/avatars/3.png' />\n    </Box>\n  )\n}\n\nexport default AvatarsSizes\n"})}),S=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\n// ** Custom Components Imports\nimport CustomAvatar from 'src/@core/components/mui/avatar'\n\nconst AvatarsVariants = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex' }}>\n      <CustomAvatar variant='square'>\n        <Icon icon='tabler:bell' />\n      </CustomAvatar>\n      <CustomAvatar color='success' variant='rounded'>\n        <Icon icon='tabler:device-floppy' />\n      </CustomAvatar>\n      <CustomAvatar skin='light' variant='square'>\n        <Icon icon='tabler:bell' />\n      </CustomAvatar>\n      <CustomAvatar skin='light' color='success' variant='rounded'>\n        <Icon icon='tabler:device-floppy' />\n      </CustomAvatar>\n    </Box>\n  )\n}\n\nexport default AvatarsVariants\n"})}),H=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport MuiAvatar from '@mui/material/Avatar'\n\n// ** Custom Components Imports\nimport CustomAvatar from 'src/@core/components/mui/avatar'\n\nconst AvatarsLetter = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex' }}>\n      <MuiAvatar>H</MuiAvatar>\n      <CustomAvatar>N</CustomAvatar>\n      <CustomAvatar skin='light' color='error'>\n        OP\n      </CustomAvatar>\n      <CustomAvatar skin='light-static' color='error'>\n        AB\n      </CustomAvatar>\n    </Box>\n  )\n}\n\nexport default AvatarsLetter\n"})}),M=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\nimport { styled } from '@mui/material/styles'\n\n// Styled component for badge content area\nconst BadgeContentSpan = styled('span')(({ theme }) => ({\n  width: 8,\n  height: 8,\n  borderRadius: '50%',\n  backgroundColor: theme.palette.success.main,\n  boxShadow: 0 0 0 2px {theme.palette.background.paper}\n}))\n\nconst AvatarsWithBadge = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex' }}>\n      <Badge\n        overlap='circular'\n        badgeContent={<BadgeContentSpan />}\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'right'\n        }}\n      >\n        <Avatar alt='Marie Garza' src='/images/avatars/2.png' />\n      </Badge>\n      <Badge\n        overlap='circular'\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'right'\n        }}\n        badgeContent={\n          <Avatar\n            alt='Marie Garza'\n            src='/images/avatars/2.png'\n            sx={{ width: 22, height: 22, border: theme => 2px solid {theme.palette.background.paper} }}\n          />\n        }\n      >\n        <Avatar alt='Olivia Sparks' src='/images/avatars/4.png' />\n      </Badge>\n    </Box>\n  )\n}\n\nexport default AvatarsWithBadge\n"})}),T=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Avatar from '@mui/material/Avatar'\nimport AvatarGroup from '@mui/material/AvatarGroup'\n\nconst AvatarsGrouped = () => {\n  return (\n    <div className='demo-space-y'>\n      <AvatarGroup max={4}>\n        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />\n        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />\n        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />\n        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n      </AvatarGroup>\n      <AvatarGroup max={4} sx={{ justifyContent: 'center' }}>\n        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />\n        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />\n        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />\n        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n      </AvatarGroup>\n      <AvatarGroup max={4} sx={{ justifyContent: 'flex-start' }}>\n        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />\n        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />\n        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />\n        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n      </AvatarGroup>\n    </div>\n  )\n}\n\nexport default AvatarsGrouped\n"})}),U=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Avatar from '@mui/material/Avatar'\nimport AvatarGroup from '@mui/material/AvatarGroup'\n\nconst AvatarsGroupedPullUp = () => {\n  return (\n    <AvatarGroup className='pull-up' max={4}>\n      <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />\n      <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />\n      <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />\n      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n    </AvatarGroup>\n  )\n}\n\nexport default AvatarsGroupedPullUp\n"})}),O=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Avatar from '@mui/material/Avatar'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\n// ** Custom Components Imports\nimport CustomAvatar from 'src/@core/components/mui/avatar'\n\nconst AvatarsIcon = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex' }}>\n      <Avatar>\n        <Icon icon='tabler:folder' />\n      </Avatar>\n      <CustomAvatar color='success'>\n        <Icon icon='tabler:refresh' />\n      </CustomAvatar>\n      <CustomAvatar skin='light' color='info'>\n        <Icon icon='tabler:circle-check' />\n      </CustomAvatar>\n    </Box>\n  )\n}\n\nexport default AvatarsIcon\n"})}),W=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Avatar from '@mui/material/Avatar'\n\nconst AvatarsImage = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex' }}>\n      <Avatar src='/images/avatars/1.png' alt='Victor Anderson' />\n      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n    </Box>\n  )\n}\n\nexport default AvatarsImage\n"})}),P=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Avatar from '@mui/material/Avatar'\nimport Tooltip from '@mui/material/Tooltip'\nimport AvatarGroup from '@mui/material/AvatarGroup'\n\nconst AvatarsGroupedPullUpWithTooltip = () => {\n  return (\n    <AvatarGroup className='pull-up' max={4}>\n      <Tooltip title='Olivia Sparks'>\n        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />\n      </Tooltip>\n      <Tooltip title='Howard Lloyd'>\n        <Avatar src='/images/avatars/5.png' alt='Howard Lloyd' />\n      </Tooltip>\n      <Tooltip title='Hallie Richards'>\n        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />\n      </Tooltip>\n      <Tooltip title='Alice Cobb'>\n        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />\n      </Tooltip>\n      <Tooltip title='Jeffery Warner'>\n        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />\n      </Tooltip>\n    </AvatarGroup>\n  )\n}\n\nexport default AvatarsGroupedPullUpWithTooltip\n"})}),R=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport MuiAvatar from '@mui/material/Avatar'\n\n// ** Custom Components Imports\nimport CustomAvatar from 'src/@core/components/mui/avatar'\n\nconst AvatarsLetter = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex' }}>\n      <MuiAvatar>H</MuiAvatar>\n      <CustomAvatar>N</CustomAvatar>\n      <CustomAvatar skin='light' color='error'>\n        OP\n      </CustomAvatar>\n      <CustomAvatar skin='light-static' color='error'>\n        AB\n      </CustomAvatar>\n    </Box>\n  )\n}\n\nexport default AvatarsLetter\n"})}),L=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Avatar from '@mui/material/Avatar'\n\nconst AvatarsSizes = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex', alignItems: 'center' }}>\n      <Avatar alt='Victor Anderson' sx={{ width: 25, height: 25 }} src='/images/avatars/3.png' />\n      <Avatar alt='Victor Anderson' src='/images/avatars/3.png' />\n      <Avatar alt='Victor Anderson' sx={{ width: 56, height: 56 }} src='/images/avatars/3.png' />\n    </Box>\n  )\n}\n\nexport default AvatarsSizes\n"})}),z=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\n// ** Custom Components Imports\nimport CustomAvatar from 'src/@core/components/mui/avatar'\n\nconst AvatarsVariants = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex' }}>\n      <CustomAvatar variant='square'>\n        <Icon icon='tabler:bell' />\n      </CustomAvatar>\n      <CustomAvatar color='success' variant='rounded'>\n        <Icon icon='tabler:device-floppy' />\n      </CustomAvatar>\n      <CustomAvatar skin='light' variant='square'>\n        <Icon icon='tabler:bell' />\n      </CustomAvatar>\n      <CustomAvatar skin='light' color='success' variant='rounded'>\n        <Icon icon='tabler:device-floppy' />\n      </CustomAvatar>\n    </Box>\n  )\n}\n\nexport default AvatarsVariants\n"})}),J=(0,e.jsx)("pre",{className:"language-jsx",children:(0,e.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\nimport { styled } from '@mui/material/styles'\n\n// Styled component for badge content area\nconst BadgeContentSpan = styled('span')(({ theme }) => ({\n  width: 8,\n  height: 8,\n  borderRadius: '50%',\n  backgroundColor: theme.palette.success.main,\n  boxShadow: 0 0 0 2px {theme.palette.background.paper}\n}))\n\nconst AvatarsWithBadge = () => {\n  return (\n    <Box className='demo-space-x' sx={{ display: 'flex' }}>\n      <Badge\n        overlap='circular'\n        badgeContent={<BadgeContentSpan />}\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'right'\n        }}\n      >\n        <Avatar alt='Marie Garza' src='/images/avatars/2.png' />\n      </Badge>\n      <Badge\n        overlap='circular'\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'right'\n        }}\n        badgeContent={\n          <Avatar\n            alt='Marie Garza'\n            src='/images/avatars/2.png'\n            sx={{ width: 22, height: 22, border: theme => 2px solid {theme.palette.background.paper} }}\n          />\n        }\n      >\n        <Avatar alt='Olivia Sparks' src='/images/avatars/4.png' />\n      </Badge>\n    </Box>\n  )\n}\n\nexport default AvatarsWithBadge\n"})}),V=()=>(0,e.jsxs)(s.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,e.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,e.jsxs)(o.Z,{title:"Image Avatars",code:{tsx:W,jsx:k},children:[(0,e.jsxs)(n.Z,{children:["Use ",(0,e.jsx)("code",{children:"src"})," and ",(0,e.jsx)("code",{children:"alt"})," props with ",(0,e.jsx)("code",{children:"Avatar"})," component for basic image avatar."]}),(0,e.jsx)(d,{})]})}),(0,e.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,e.jsxs)(o.Z,{title:"Letter Avatars",code:{tsx:R,jsx:H},children:[(0,e.jsxs)(n.Z,{children:["Write some letters inside ",(0,e.jsx)("code",{children:"Avatar"})," component to have letter avatar. Use our custom component for colored avatar and use ",(0,e.jsx)("code",{children:"skin='light'"})," prop for light variant with opacity and"," ",(0,e.jsx)("code",{children:"skin='light-static'"})," prop for light variant without opacity."]}),(0,e.jsx)(x,{})]})}),(0,e.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,e.jsxs)(o.Z,{title:"Sizes",code:{tsx:L,jsx:G},children:[(0,e.jsxs)(n.Z,{children:["You can set any size of an avatar using ",(0,e.jsx)("code",{children:"styled"})," hook."]}),(0,e.jsx)(v,{})]})}),(0,e.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,e.jsxs)(o.Z,{title:"Icon Avatars",code:{tsx:O,jsx:I},children:[(0,e.jsxs)(n.Z,{children:["Pass an icon as a child of ",(0,e.jsx)("code",{children:"Avatar"})," component to make an icon avatar."]}),(0,e.jsx)(p,{})]})}),(0,e.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,e.jsxs)(o.Z,{title:"Variants",code:{tsx:z,jsx:S},children:[(0,e.jsxs)(n.Z,{children:["Use ",(0,e.jsxs)("code",{children:["variant=","{'square' | 'rounded'}"]})," prop with ",(0,e.jsx)("code",{children:"Avatar"})," component for different variants."]}),(0,e.jsx)(h,{})]})}),(0,e.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,e.jsxs)(o.Z,{title:"Avatars With Badge",code:{tsx:J,jsx:M},children:[(0,e.jsxs)(n.Z,{children:["Use ",(0,e.jsx)("code",{children:"Avatar"})," component as a child of ",(0,e.jsx)("code",{children:"Badge"})," component."]}),(0,e.jsx)(Z,{})]})}),(0,e.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,e.jsxs)(o.Z,{title:"Grouped Avatars With PullUp",code:{tsx:U,jsx:w},children:[(0,e.jsxs)(n.Z,{sx:{mb:4},children:["Use class ",(0,e.jsx)("code",{children:"pull-up"})," with ",(0,e.jsx)("code",{children:"AvatarGroup"})," component for pull-up effect on hover of the avatar."]}),(0,e.jsx)(b,{})]})}),(0,e.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,e.jsxs)(o.Z,{title:"Grouped Avatars With PullUp & Tooltip",code:{tsx:P,jsx:B},children:[(0,e.jsxs)(n.Z,{sx:{mb:4},children:["Use class ",(0,e.jsx)("code",{children:"pull-up"})," with ",(0,e.jsx)("code",{children:"AvatarGroup"})," component and wrap your ",(0,e.jsx)("code",{children:"Avatar"})," ","with ",(0,e.jsx)("code",{children:"Tooltip"})," for pull-up effect & tooltip on hover of the avatar."]}),(0,e.jsx)(C,{})]})}),(0,e.jsx)(s.ZP,{item:!0,xs:12,children:(0,e.jsxs)(o.Z,{title:"Grouped Avatars Alignment",code:{tsx:T,jsx:N},children:[(0,e.jsxs)(n.Z,{sx:{mb:4},children:["Wrap all your avatars with ",(0,e.jsx)("code",{children:"AvatarGroup"})," component to have grouped avatars. Use ",(0,e.jsx)("code",{children:"max"})," ","prop with ",(0,e.jsx)("code",{children:"AvatarGroup"})," component to restrict maximum number of avatars shown."]}),(0,e.jsx)(g,{})]})})]});var E=V}},function(a){a.O(0,[5511,9774,2888,179],function(){return a(a.s=99385)}),_N_E=a.O()}]);