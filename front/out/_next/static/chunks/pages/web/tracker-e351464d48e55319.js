(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8779],{4765:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/web/tracker",function(){return o(88401)}])},88401:function(e,n,o){"use strict";o.r(n);var i=o(85893),a=o(67294),l=o(66242),s=o(86886),r=o(78445),t=o(44267),c=o(11057),d=o(5909),x=o(56456),m=o(13034),p=o(50613),u=o(87357),h=o(15861),g=o(21933),v=o(73262);let b={open:"secondary","picked-up":"info","in-transit":"warning",delivered:"success",failed:"error"},k={open:"Open","picked-up":"Picked Up","in-transit":"In Transit",delivered:"Delivered",failed:"Failed"},j=new m.Z,Z=()=>{var e,n;let[o,m]=(0,a.useState)("65ede1920a29450099c75566"),[Z,f]=(0,a.useState)(),_=async e=>{let n=await j.get(e);f(n)},W=e=>{v.s.send(JSON.stringify({event:"location_changed",delivery_id:o,location:e}))},y=async()=>{try{v.s.onopen=()=>{console.log("WebSocket connection opened")},v.s.onmessage=e=>{let n=JSON.parse(e.data);f(n.delivery_object),console.log("Received message:",n)},v.s.onclose=()=>{console.log("WebSocket connection closed")},v.s.onerror=e=>{console.error("WebSocket error:",e)}}catch(e){console.error("WebSocket connection error:",e)}console.log(" Je suis dedans ..................... ")};return(0,a.useEffect)(()=>{y()},[]),(0,i.jsx)(s.ZP,{container:!0,spacing:6.5,children:(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{title:"Map"}),(0,i.jsxs)(t.Z,{children:[(0,i.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(s.ZP,{item:!0,lg:10,md:10,sm:10,xs:8,children:(0,i.jsx)(x.Z,{fullWidth:!0,value:o,sx:{mb:4},onChange:e=>{m(e.target.value)},placeholder:"Enter Delivery ID"})}),(0,i.jsx)(s.ZP,{item:!0,lg:2,md:2,sm:2,xs:4,children:(0,i.jsx)(c.Z,{variant:"contained",sx:{width:"100%"},color:"success",onClick:()=>{_(o)},children:"Submit"})})]}),(0,i.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(s.ZP,{item:!0,lg:4,md:4,sm:12,xs:12,children:(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsxs)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:[(0,i.jsx)(h.Z,{noWrap:!0,sx:{mb:3,fontWeight:900,textDecoration:"none",color:"black"},children:"Package Details"}),(0,i.jsxs)(h.Z,{noWrap:!0,sx:{mb:1,fontWeight:500,textDecoration:"none",color:"warning.main"},children:["To Name : ",null==Z?void 0:Z.package.to_name]}),(0,i.jsxs)(h.Z,{noWrap:!0,variant:"body2",sx:{mb:1,color:"secondary.main"},children:["To Address : ",null==Z?void 0:Z.package.to_address]}),(0,i.jsxs)(h.Z,{noWrap:!0,sx:{mb:1,fontWeight:500,textDecoration:"none",color:"warning.main"},children:["From Name : ",null==Z?void 0:Z.package.from_name]}),(0,i.jsxs)(h.Z,{noWrap:!0,variant:"body2",sx:{mb:1,color:"secondary.main"},children:["From Address : ",null==Z?void 0:Z.package.from_address]}),(0,i.jsxs)(h.Z,{noWrap:!0,variant:"body2",sx:{mb:1,color:"black"},children:["Weight : ",null==Z?void 0:Z.package.weight]}),(0,i.jsxs)(h.Z,{noWrap:!0,variant:"body2",sx:{mb:1,color:"black"},children:["Width : ",null==Z?void 0:Z.package.width]}),(0,i.jsxs)(h.Z,{noWrap:!0,variant:"body2",sx:{mb:1,color:"black"},children:["Height : ",null==Z?void 0:Z.package.height]}),(0,i.jsxs)(h.Z,{noWrap:!0,variant:"body2",sx:{mb:1,color:"black"},children:["Depth : ",null==Z?void 0:Z.package.depth]}),(0,i.jsxs)(h.Z,{noWrap:!0,variant:"body2",sx:{mb:1,color:"black"},children:["Description : ",null==Z?void 0:Z.package.description]}),(0,i.jsx)(h.Z,{noWrap:!0,sx:{mt:6,mb:3,fontWeight:900,textDecoration:"none",color:"black"},children:"Delivery Details"}),(0,i.jsxs)(h.Z,{noWrap:!0,sx:{fontWeight:500,textDecoration:"none",color:"primary.main"},children:["Status : :",(0,i.jsx)(p.Z,{rounded:!0,skin:"light",size:"small",label:k[null!==(e=null==Z?void 0:Z.status)&&void 0!==e?e:"open"],color:b[null!==(n=null==Z?void 0:Z.status)&&void 0!==n?n:"open"],sx:{textTransform:"capitalize"}})]}),(null==Z?void 0:Z.pickup_time)&&(0,i.jsxs)(h.Z,{noWrap:!0,variant:"body2",sx:{mb:1,color:"warning.main"},children:["Pickup time : ",(0,g.o0)(null==Z?void 0:Z.pickup_time)]}),(null==Z?void 0:Z.start_time)&&(0,i.jsxs)(h.Z,{noWrap:!0,variant:"body2",sx:{mb:1,color:"#00008b"},children:["Start time : ",(0,g.o0)(null==Z?void 0:Z.start_time)]}),(null==Z?void 0:Z.end_time)&&(0,i.jsxs)(h.Z,{noWrap:!0,variant:"body2",sx:{mb:1,color:"success.main"},children:["End time : ",(0,g.o0)(null==Z?void 0:Z.end_time)]})]})})}),(0,i.jsx)(s.ZP,{item:!0,lg:8,md:8,sm:12,xs:12,children:(null==Z?void 0:Z.package.from_location)&&(0,i.jsx)(d.Z,{position1:null==Z?void 0:Z.package.from_location,position2:null==Z?void 0:Z.package.to_location,changeLocation:W,canChangeLocation:!1,realTimeDriverPosition:null==Z?void 0:Z.location})})]})]})]})})})};n.default=Z}},function(e){e.O(0,[3539,3404,9774,2888,179],function(){return e(e.s=4765)}),_N_E=e.O()}]);