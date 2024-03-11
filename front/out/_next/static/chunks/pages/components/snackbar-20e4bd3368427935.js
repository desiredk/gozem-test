(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{19675:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/snackbar",function(){return t(33348)}])},92223:function(n,e,t){"use strict";t.d(e,{Z:function(){return T}});var a=t(85893),o=t(67294),s=t(87357),i=t(66242),r=t(34386),l=t(67720),c=t(57922),d=t(93946),u=t(78445),m=t(44267),p=t(96420),h=t(98396),k=t(33454),g=t(63730),x=t(15660),S=t.n(x),f=t(86501),C=t(66485),v=t.n(C);let j=n=>n&&("TEXTAREA"===n.nodeName||"INPUT"===n.nodeName);var b=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,o.useRef)(null),t=()=>{n.onSuccess&&n.onSuccess(),n.selectOnCopy&&j(e.current)&&e.current.select()},a=()=>{n.onError&&n.onError();let t=!1!==n.selectOnError;t&&j(e.current)&&e.current.select()},s=n=>{v()(n).then(t).catch(a)},i=(0,o.useCallback)(n=>{"string"==typeof n?s(n):e.current&&s(e.current.value)},[]);return{copy:i,target:e}};let B=n=>{let{id:e,sx:t,code:x,title:C,children:v,className:j}=n,[B,T]=(0,o.useState)(!1),[I,Z]=(0,o.useState)(null!==x.tsx?"tsx":"jsx"),y=b(),F=(0,h.Z)(n=>n.breakpoints.down("md"));(0,o.useEffect)(()=>{S().highlightAll()},[B,I]);let w=()=>null!==x.tsx&&"tsx"===I?x.tsx.props.children.props.children:null!==x.jsx&&"jsx"===I?x.jsx.props.children.props.children:"",P=()=>{y.copy(w()),f.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,a.jsxs)(i.Z,{className:j,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...t},id:e||"card-snippet--".concat(C.toLowerCase().replace(/ /g,"-")),children:[(0,a.jsx)(u.Z,{title:C,...F?{}:{action:(0,a.jsx)(d.Z,{onClick:()=>T(!B),children:(0,a.jsx)(g.Z,{icon:"tabler:code",fontSize:20})})}}),(0,a.jsx)(m.Z,{children:v}),F?null:(0,a.jsxs)(c.Z,{in:B,children:[(0,a.jsx)(l.Z,{sx:{my:"0 !important"}}),(0,a.jsxs)(m.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,a.jsx)(s.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,a.jsxs)(k.Z,{exclusive:!0,size:"small",color:"primary",value:I,onChange:(n,e)=>null!==e?Z(e):null,children:[null!==x.tsx?(0,a.jsx)(p.Z,{value:"tsx",children:(0,a.jsx)(g.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==x.jsx?(0,a.jsx)(p.Z,{value:"jsx",children:(0,a.jsx)(g.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,a.jsx)(r.Z,{title:"Copy the source",placement:"top",children:(0,a.jsx)(d.Z,{onClick:P,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,a.jsx)(g.Z,{icon:"tabler:copy",fontSize:20})})}),(0,a.jsx)("div",{children:null!==x[I]?x[I]:null})]})]})]})};var T=B},33348:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return G}});var a=t(85893),o=t(86886),s=t(15861),i=t(92223),r=t(67294),l=t(46901),c=t(11057),d=t(77651),u=t(23918);let m=()=>{let[n,e]=(0,r.useState)(!1),{settings:t}=(0,u.r)(),{skin:o}=t,s=()=>{e(!0)},i=(n,t)=>{"clickaway"!==t&&e(!1)};return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(c.Z,{variant:"outlined",onClick:s,children:"Open alert snackbar"}),(0,a.jsx)(d.Z,{open:n,onClose:i,autoHideDuration:3e3,children:(0,a.jsx)(l.Z,{variant:"filled",severity:"success",onClose:i,sx:{width:"100%"},elevation:"bordered"===o?0:3,children:"This is a success message!"})})]})};var p=t(93946),h=t(63730);let k=()=>{let[n,e]=(0,r.useState)(!1),t=()=>{e(!0)},o=(n,t)=>{"clickaway"!==t&&e(!1)};return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(c.Z,{variant:"outlined",onClick:t,children:"Open simple snackbar"}),(0,a.jsx)(d.Z,{open:n,onClose:o,message:"Note archived",autoHideDuration:3e3,action:(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(c.Z,{size:"small",onClick:o,children:"Undo"}),(0,a.jsx)(p.Z,{size:"small","aria-label":"close",color:"inherit",onClick:o,children:(0,a.jsx)(h.Z,{icon:"tabler:x",fontSize:20})})]})})]})},g=()=>{let[n,e]=(0,r.useState)({open:!1,vertical:"top",horizontal:"center"}),{vertical:t,horizontal:o,open:s}=n,i=n=>()=>{e({open:!0,...n})},l=()=>{e({...n,open:!1})};return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsxs)("div",{className:"demo-space-x",children:[(0,a.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"top",horizontal:"center"}),children:"Top Center"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"top",horizontal:"right"}),children:"Top Right"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"bottom",horizontal:"right"}),children:"Bottom Right"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"bottom",horizontal:"center"}),children:"Bottom Center"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"bottom",horizontal:"left"}),children:"Bottom Left"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"top",horizontal:"left"}),children:"Top Left"})]}),(0,a.jsx)(d.Z,{open:s,onClose:l,message:"I love snacks",autoHideDuration:3e3,anchorOrigin:{vertical:t,horizontal:o}},t+o)]})};var x=t(96514),S=t(16628),f=t(54776);let C=n=>(0,a.jsx)(x.Z,{...n}),v=n=>(0,a.jsx)(f.Z,{...n,direction:"up"}),j=()=>{let[n,e]=(0,r.useState)({open:!1,Transition:S.Z}),t=n=>()=>{e({open:!0,Transition:n})},o=()=>{e({...n,open:!1})};return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsxs)("div",{className:"demo-space-x",children:[(0,a.jsx)(c.Z,{variant:"outlined",onClick:t(C),children:"Grow Transition"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:t(S.Z),children:"Fade Transition"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:t(v),children:"Slide Transition"})]}),(0,a.jsx)(d.Z,{open:n.open,onClose:o,message:"I love snacks",autoHideDuration:3e3,TransitionComponent:n.Transition},n.Transition.name)]})},b=()=>{let[n,e]=(0,r.useState)(!1),[t,o]=(0,r.useState)([]),[s,i]=(0,r.useState)(void 0);(0,r.useEffect)(()=>{t.length&&!s?(e(!0),o(n=>n.slice(1)),i({...t[0]})):t.length&&s&&n&&e(!1)},[t,s,n]);let u=n=>()=>{o(e=>[...e,{message:n,key:new Date().getTime()}])},m=(n,t)=>{"clickaway"!==t&&e(!1)},p=()=>{i(void 0)};return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsxs)("div",{className:"demo-space-x",children:[(0,a.jsx)(c.Z,{variant:"outlined",onClick:u("success"),children:"Success Alert"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:u("error"),children:"Error Alert"})]}),(0,a.jsx)(d.Z,{open:n,onClose:m,autoHideDuration:3e3,TransitionProps:{onExited:p},message:s?s.message:void 0,children:(0,a.jsxs)(l.Z,{elevation:3,variant:"filled",onClose:m,sx:{width:"100%"},severity:(null==s?void 0:s.message)==="success"?"success":"error",children:["This is ",(null==s?void 0:s.message)==="success"?"a success":"an error"," message!"]})},s?s.key:void 0)]})},B=n=>(0,a.jsx)(f.Z,{...n,direction:"left"}),T=n=>(0,a.jsx)(f.Z,{...n,direction:"up"}),I=n=>(0,a.jsx)(f.Z,{...n,direction:"right"}),Z=n=>(0,a.jsx)(f.Z,{...n,direction:"down"}),y=()=>{let[n,e]=(0,r.useState)(!1),[t,o]=(0,r.useState)(void 0),s=n=>()=>{o(()=>n),e(!0)},i=()=>{e(!1)};return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsxs)("div",{className:"demo-space-x",children:[(0,a.jsx)(c.Z,{variant:"outlined",onClick:s(B),children:"Right"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:s(T),children:"Up"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:s(I),children:"Left"}),(0,a.jsx)(c.Z,{variant:"outlined",onClick:s(Z),children:"Down"})]}),(0,a.jsx)(d.Z,{open:n,onClose:i,message:"I love snacks",autoHideDuration:3e3,TransitionComponent:t},t?t.name:"")]})},F=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useEffect, useState } from 'react'\n\n// ** MUI Imports\nimport Alert from '@mui/material/Alert'\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\n\nconst SnackbarConsecutive = () => {\n  // ** States\n  const [open, setOpen] = useState(false)\n  const [snackPack, setSnackPack] = useState([])\n  const [messageInfo, setMessageInfo] = useState(undefined)\n  useEffect(() => {\n    if (snackPack.length && !messageInfo) {\n      setOpen(true)\n      setSnackPack(prev => prev.slice(1))\n      setMessageInfo({ ...snackPack[0] })\n    } else if (snackPack.length && messageInfo && open) {\n      setOpen(false)\n    }\n  }, [snackPack, messageInfo, open])\n\n  const handleClick = message => () => {\n    setSnackPack(prev => [...prev, { message, key: new Date().getTime() }])\n  }\n\n  const handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return\n    }\n    setOpen(false)\n  }\n\n  const handleExited = () => {\n    setMessageInfo(undefined)\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick('success')}>\n          Success Alert\n        </Button>\n        <Button variant='outlined' onClick={handleClick('error')}>\n          Error Alert\n        </Button>\n      </div>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        autoHideDuration={3000}\n        TransitionProps={{ onExited: handleExited }}\n        key={messageInfo ? messageInfo.key : undefined}\n        message={messageInfo ? messageInfo.message : undefined}\n      >\n        <Alert\n          elevation={3}\n          variant='filled'\n          onClose={handleClose}\n          sx={{ width: '100%' }}\n          severity={messageInfo?.message === 'success' ? 'success' : 'error'}\n        >\n          This is {messageInfo?.message === 'success' ? 'a success' : 'an error'} message!\n        </Alert>\n      </Snackbar>\n    </Fragment>\n  )\n}\n\nexport default SnackbarConsecutive\n"})}),w=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\nimport IconButton from '@mui/material/IconButton'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst SnackbarSimple = () => {\n  // ** State\n  const [open, setOpen] = useState(false)\n\n  const handleClick = () => {\n    setOpen(true)\n  }\n\n  const handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return\n    }\n    setOpen(false)\n  }\n\n  return (\n    <Fragment>\n      <Button variant='outlined' onClick={handleClick}>\n        Open simple snackbar\n      </Button>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        message='Note archived'\n        autoHideDuration={3000}\n        action={\n          <Fragment>\n            <Button size='small' onClick={handleClose}>\n              Undo\n            </Button>\n            <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>\n              <Icon icon='tabler:x' fontSize={20} />\n            </IconButton>\n          </Fragment>\n        }\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarSimple\n"})}),P=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\n\nconst SnackbarPositioned = () => {\n  // ** States\n  const [state, setState] = useState({\n    open: false,\n    vertical: 'top',\n    horizontal: 'center'\n  })\n  const { vertical, horizontal, open } = state\n\n  const handleClick = newState => () => {\n    setState({ open: true, ...newState })\n  }\n\n  const handleClose = () => {\n    setState({ ...state, open: false })\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>\n          Top Center\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>\n          Top Right\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>\n          Bottom Right\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>\n          Bottom Center\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>\n          Bottom Left\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>\n          Top Left\n        </Button>\n      </div>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        message='I love snacks'\n        autoHideDuration={3000}\n        key={vertical + horizontal}\n        anchorOrigin={{ vertical, horizontal }}\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarPositioned\n"})}),N=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Alert from '@mui/material/Alert'\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\n\n// ** Hook Import\nimport { useSettings } from 'src/@core/hooks/useSettings'\n\nconst SnackbarAlert = () => {\n  // ** State\n  const [open, setOpen] = useState(false)\n\n  // ** Hook & Var\n  const { settings } = useSettings()\n  const { skin } = settings\n\n  const handleClick = () => {\n    setOpen(true)\n  }\n\n  const handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return\n    }\n    setOpen(false)\n  }\n\n  return (\n    <Fragment>\n      <Button variant='outlined' onClick={handleClick}>\n        Open alert snackbar\n      </Button>\n      <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>\n        <Alert\n          variant='filled'\n          severity='success'\n          onClose={handleClose}\n          sx={{ width: '100%' }}\n          elevation={skin === 'bordered' ? 0 : 3}\n        >\n          This is a success message!\n        </Alert>\n      </Snackbar>\n    </Fragment>\n  )\n}\n\nexport default SnackbarAlert\n"})}),O=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\nimport Grow from '@mui/material/Grow'\nimport Fade from '@mui/material/Fade'\nimport Slide from '@mui/material/Slide'\n\nconst GrowTransition = props => {\n  return <Grow {...props} />\n}\n\nconst SlideTransition = props => {\n  return <Slide {...props} direction='up' />\n}\n\nconst SnackbarTransition = () => {\n  // ** State\n  const [state, setState] = useState({\n    open: false,\n    Transition: Fade\n  })\n\n  const handleClick = Transition => () => {\n    setState({\n      open: true,\n      Transition\n    })\n  }\n\n  const handleClose = () => {\n    setState({\n      ...state,\n      open: false\n    })\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick(GrowTransition)}>\n          Grow Transition\n        </Button>\n        <Button variant='outlined' onClick={handleClick(Fade)}>\n          Fade Transition\n        </Button>\n        <Button variant='outlined' onClick={handleClick(SlideTransition)}>\n          Slide Transition\n        </Button>\n      </div>\n      <Snackbar\n        open={state.open}\n        onClose={handleClose}\n        message='I love snacks'\n        autoHideDuration={3000}\n        key={state.Transition.name}\n        TransitionComponent={state.Transition}\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarTransition\n"})}),z=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\nimport Slide from '@mui/material/Slide'\n\nconst TransitionLeft = props => {\n  return <Slide {...props} direction='left' />\n}\n\nconst TransitionUp = props => {\n  return <Slide {...props} direction='up' />\n}\n\nconst TransitionRight = props => {\n  return <Slide {...props} direction='right' />\n}\n\nconst TransitionDown = props => {\n  return <Slide {...props} direction='down' />\n}\n\nconst SnackbarControlSlideDirection = () => {\n  // ** States\n  const [open, setOpen] = useState(false)\n  const [transition, setTransition] = useState(undefined)\n\n  const handleClick = Transition => () => {\n    setTransition(() => Transition)\n    setOpen(true)\n  }\n\n  const handleClose = () => {\n    setOpen(false)\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick(TransitionLeft)}>\n          Right\n        </Button>\n        <Button variant='outlined' onClick={handleClick(TransitionUp)}>\n          Up\n        </Button>\n        <Button variant='outlined' onClick={handleClick(TransitionRight)}>\n          Left\n        </Button>\n        <Button variant='outlined' onClick={handleClick(TransitionDown)}>\n          Down\n        </Button>\n      </div>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        message='I love snacks'\n        autoHideDuration={3000}\n        TransitionComponent={transition}\n        key={transition ? transition.name : ''}\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarControlSlideDirection\n"})}),E=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, SyntheticEvent, useState } from 'react'\n\n// ** MUI Imports\nimport Alert from '@mui/material/Alert'\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\n\n// ** Hook Import\nimport { useSettings } from 'src/@core/hooks/useSettings'\n\nconst SnackbarAlert = () => {\n  // ** State\n  const [open, setOpen] = useState<boolean>(false)\n\n  // ** Hook & Var\n  const { settings } = useSettings()\n  const { skin } = settings\n\n  const handleClick = () => {\n    setOpen(true)\n  }\n\n  const handleClose = (event?: Event | SyntheticEvent, reason?: string) => {\n    if (reason === 'clickaway') {\n      return\n    }\n    setOpen(false)\n  }\n\n  return (\n    <Fragment>\n      <Button variant='outlined' onClick={handleClick}>\n        Open alert snackbar\n      </Button>\n      <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>\n        <Alert\n          variant='filled'\n          severity='success'\n          onClose={handleClose}\n          sx={{ width: '100%' }}\n          elevation={skin === 'bordered' ? 0 : 3}\n        >\n          This is a success message!\n        </Alert>\n      </Snackbar>\n    </Fragment>\n  )\n}\n\nexport default SnackbarAlert\n"})}),D=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, SyntheticEvent, useEffect, useState } from 'react'\n\n// ** MUI Imports\nimport Alert from '@mui/material/Alert'\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\n\nexport interface SnackbarMessage {\n  key: number\n  message: string\n}\n\nconst SnackbarConsecutive = () => {\n  // ** States\n  const [open, setOpen] = useState<boolean>(false)\n  const [snackPack, setSnackPack] = useState<SnackbarMessage[]>([])\n  const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(undefined)\n\n  useEffect(() => {\n    if (snackPack.length && !messageInfo) {\n      setOpen(true)\n      setSnackPack(prev => prev.slice(1))\n      setMessageInfo({ ...snackPack[0] })\n    } else if (snackPack.length && messageInfo && open) {\n      setOpen(false)\n    }\n  }, [snackPack, messageInfo, open])\n\n  const handleClick = (message: string) => () => {\n    setSnackPack(prev => [...prev, { message, key: new Date().getTime() }])\n  }\n\n  const handleClose = (event: Event | SyntheticEvent, reason?: string) => {\n    if (reason === 'clickaway') {\n      return\n    }\n    setOpen(false)\n  }\n\n  const handleExited = () => {\n    setMessageInfo(undefined)\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick('success')}>\n          Success Alert\n        </Button>\n        <Button variant='outlined' onClick={handleClick('error')}>\n          Error Alert\n        </Button>\n      </div>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        autoHideDuration={3000}\n        TransitionProps={{ onExited: handleExited }}\n        key={messageInfo ? messageInfo.key : undefined}\n        message={messageInfo ? messageInfo.message : undefined}\n      >\n        <Alert\n          elevation={3}\n          variant='filled'\n          onClose={handleClose}\n          sx={{ width: '100%' }}\n          severity={messageInfo?.message === 'success' ? 'success' : 'error'}\n        >\n          This is {messageInfo?.message === 'success' ? 'a success' : 'an error'} message!\n        </Alert>\n      </Snackbar>\n    </Fragment>\n  )\n}\n\nexport default SnackbarConsecutive\n"})}),A=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, SyntheticEvent, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\nimport IconButton from '@mui/material/IconButton'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst SnackbarSimple = () => {\n  // ** State\n  const [open, setOpen] = useState<boolean>(false)\n\n  const handleClick = () => {\n    setOpen(true)\n  }\n\n  const handleClose = (event: Event | SyntheticEvent, reason?: string) => {\n    if (reason === 'clickaway') {\n      return\n    }\n    setOpen(false)\n  }\n\n  return (\n    <Fragment>\n      <Button variant='outlined' onClick={handleClick}>\n        Open simple snackbar\n      </Button>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        message='Note archived'\n        autoHideDuration={3000}\n        action={\n          <Fragment>\n            <Button size='small' onClick={handleClose}>\n              Undo\n            </Button>\n            <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>\n              <Icon icon='tabler:x' fontSize={20} />\n            </IconButton>\n          </Fragment>\n        }\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarSimple\n"})}),R=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { ComponentType, Fragment, ReactElement, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\nimport Grow, { GrowProps } from '@mui/material/Grow'\nimport Fade, { FadeProps } from '@mui/material/Fade'\nimport Slide, { SlideProps } from '@mui/material/Slide'\n\nconst GrowTransition = (props: GrowProps) => {\n  return <Grow {...props} />\n}\n\nconst SlideTransition = (props: SlideProps) => {\n  return <Slide {...props} direction='up' />\n}\n\nconst SnackbarTransition = () => {\n  // ** State\n  const [state, setState] = useState<{\n    open: boolean\n    Transition: ComponentType<\n      FadeProps & {\n        children?: ReactElement<any>\n      }\n    >\n  }>({\n    open: false,\n    Transition: Fade\n  })\n\n  const handleClick =\n    (\n      Transition: ComponentType<\n        FadeProps & {\n          children?: ReactElement<any>\n        }\n      >\n    ) =>\n    () => {\n      setState({\n        open: true,\n        Transition\n      })\n    }\n\n  const handleClose = () => {\n    setState({\n      ...state,\n      open: false\n    })\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick(GrowTransition)}>\n          Grow Transition\n        </Button>\n        <Button variant='outlined' onClick={handleClick(Fade)}>\n          Fade Transition\n        </Button>\n        <Button variant='outlined' onClick={handleClick(SlideTransition)}>\n          Slide Transition\n        </Button>\n      </div>\n      <Snackbar\n        open={state.open}\n        onClose={handleClose}\n        message='I love snacks'\n        autoHideDuration={3000}\n        key={state.Transition.name}\n        TransitionComponent={state.Transition}\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarTransition\n"})}),H=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { ComponentType, Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\nimport Slide, { SlideProps } from '@mui/material/Slide'\n\ntype TransitionProps = Omit<SlideProps, 'direction'>\n\nconst TransitionLeft = (props: TransitionProps) => {\n  return <Slide {...props} direction='left' />\n}\n\nconst TransitionUp = (props: TransitionProps) => {\n  return <Slide {...props} direction='up' />\n}\n\nconst TransitionRight = (props: TransitionProps) => {\n  return <Slide {...props} direction='right' />\n}\n\nconst TransitionDown = (props: TransitionProps) => {\n  return <Slide {...props} direction='down' />\n}\n\nconst SnackbarControlSlideDirection = () => {\n  // ** States\n  const [open, setOpen] = useState<boolean>(false)\n  const [transition, setTransition] = useState<ComponentType<TransitionProps> | undefined>(undefined)\n\n  const handleClick = (Transition: ComponentType<TransitionProps>) => () => {\n    setTransition(() => Transition)\n    setOpen(true)\n  }\n\n  const handleClose = () => {\n    setOpen(false)\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick(TransitionLeft)}>\n          Right\n        </Button>\n        <Button variant='outlined' onClick={handleClick(TransitionUp)}>\n          Up\n        </Button>\n        <Button variant='outlined' onClick={handleClick(TransitionRight)}>\n          Left\n        </Button>\n        <Button variant='outlined' onClick={handleClick(TransitionDown)}>\n          Down\n        </Button>\n      </div>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        message='I love snacks'\n        autoHideDuration={3000}\n        TransitionComponent={transition}\n        key={transition ? transition.name : ''}\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarControlSlideDirection\n"})}),U=(0,a.jsx)("pre",{className:"language-jsx",children:(0,a.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'\n\ninterface State extends SnackbarOrigin {\n  open: boolean\n}\n\nconst SnackbarPositioned = () => {\n  // ** States\n  const [state, setState] = useState<State>({\n    open: false,\n    vertical: 'top',\n    horizontal: 'center'\n  })\n  const { vertical, horizontal, open } = state\n\n  const handleClick = (newState: SnackbarOrigin) => () => {\n    setState({ open: true, ...newState })\n  }\n\n  const handleClose = () => {\n    setState({ ...state, open: false })\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>\n          Top Center\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>\n          Top Right\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>\n          Bottom Right\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>\n          Bottom Center\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>\n          Bottom Left\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>\n          Top Left\n        </Button>\n      </div>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        message='I love snacks'\n        autoHideDuration={3000}\n        key={vertical + horizontal}\n        anchorOrigin={{ vertical, horizontal }}\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarPositioned\n"})}),M=()=>(0,a.jsxs)(o.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,a.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(i.Z,{title:"Simple Snackbar",code:{tsx:A,jsx:w},children:[(0,a.jsxs)(s.Z,{sx:{mb:4},children:["Manage ",(0,a.jsx)("code",{children:"open"})," prop with ",(0,a.jsx)("code",{children:"Snackbar"})," component with the help of a state."]}),(0,a.jsx)(k,{})]})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(i.Z,{title:"Alert Snackbar",code:{tsx:E,jsx:N},children:[(0,a.jsxs)(s.Z,{sx:{mb:4},children:["Add ",(0,a.jsx)("code",{children:"Alert"})," component as a children of ",(0,a.jsx)("code",{children:"Snackbar"})," component."]}),(0,a.jsx)(m,{})]})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(i.Z,{title:"Positioned Snackbar",code:{tsx:U,jsx:P},children:[(0,a.jsxs)(s.Z,{children:["Use ",(0,a.jsx)("code",{children:"anchorOrigin"})," prop to change the position of the snackbar."]}),(0,a.jsx)(g,{})]})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(i.Z,{title:"Consecutive Snackbars",code:{tsx:D,jsx:F},children:[(0,a.jsx)(s.Z,{children:"When multiple snackbar updates are necessary, they should appear one at a time."}),(0,a.jsx)(b,{})]})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(i.Z,{title:"Change Transition",code:{tsx:R,jsx:O},children:[(0,a.jsx)(s.Z,{children:"When multiple snackbar updates are necessary, they should appear one at a time."}),(0,a.jsx)(j,{})]})}),(0,a.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(i.Z,{title:"Control Slide Direction",code:{tsx:H,jsx:z},children:[(0,a.jsxs)(s.Z,{children:["You can change the direction of the ",(0,a.jsx)("code",{children:"Slide"})," transition."]}),(0,a.jsx)(y,{})]})})]});var G=M}},function(n){n.O(0,[5511,1739,9774,2888,179],function(){return n(n.s=19675)}),_N_E=n.O()}]);