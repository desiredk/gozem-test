(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2889],{12838:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui/cards/widgets",function(){return a(88509)}])},16456:function(e,t,a){"use strict";var r=a(5152),o=a.n(r);let s=o()(()=>Promise.all([a.e(4814),a.e(7229)]).then(a.bind(a,47229)),{loadableGenerated:{webpack:()=>[47229]},ssr:!1});t.Z=s},52686:function(e,t,a){"use strict";var r=a(90948);let o=(0,r.ZP)("div")(e=>{let{theme:t}=e;return{"& .apexcharts-canvas":{"& line[stroke='transparent']":{display:"none"},"& .apexcharts-tooltip":{boxShadow:t.shadows[3],borderColor:t.palette.divider,background:t.palette.background.paper,"& .apexcharts-tooltip-title":{fontWeight:600,borderColor:t.palette.divider,background:t.palette.background.paper},"&.apexcharts-theme-light":{color:t.palette.text.primary},"&.apexcharts-theme-dark":{color:t.palette.common.white},"& .apexcharts-tooltip-series-group:first-of-type":{paddingBottom:0},"& .bar-chart":{padding:t.spacing(2,2.5)}},"& .apexcharts-xaxistooltip":{borderColor:t.palette.divider,background:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg,"&:after":{borderBottomColor:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg},"&:before":{borderBottomColor:t.palette.divider}},"& .apexcharts-yaxistooltip":{borderColor:t.palette.divider,background:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg,"&:after":{borderLeftColor:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg},"&:before":{borderLeftColor:t.palette.divider}},"& .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text":{color:t.palette.text.primary},"& .apexcharts-yaxis .apexcharts-yaxis-texts-g .apexcharts-yaxis-label":{textAnchor:"rtl"===t.direction?"start":void 0},"& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel, & .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text, & .apexcharts-legend-text":{fontFamily:"".concat(t.typography.fontFamily," !important")},"& .apexcharts-pie-label":{filter:"none",fill:t.palette.common.white},"& .apexcharts-marker":{boxShadow:"none"}}}});t.Z=o},88509:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ee}});var r=a(85893),o=a(86886),s=a(66242),i=a(2734),n=a(78445),l=a(44267),d=a(81010),p=a(16456);let c=[{name:"Sales",data:[32,27,27,30,25,25]},{name:"Visits",data:[25,35,20,20,20,20]}],h=()=>{let e=(0,i.Z)(),t={chart:{parentHeightOffset:0,toolbar:{show:!1}},colors:[e.palette.primary.main,e.palette.info.main],plotOptions:{radar:{size:110,polygons:{strokeColors:e.palette.divider,connectorColors:e.palette.divider}}},stroke:{width:0},fill:{opacity:[1,.85]},labels:["Jan","Feb","Mar","Apr","May","Jun"],markers:{size:0},legend:{fontSize:"13px",fontFamily:e.typography.fontFamily,labels:{colors:e.palette.text.secondary},itemMargin:{vertical:4,horizontal:10},markers:{width:12,height:12,radius:10,offsetY:1,offsetX:"ltr"===e.direction?-4:5}},grid:{show:!1,padding:{top:10}},xaxis:{labels:{show:!0,style:{fontSize:e.typography.body2.fontSize,colors:[e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled]}}},yaxis:{show:!1}};return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(n.Z,{title:"Sales",subheader:"Last 6 Months",action:(0,r.jsx)(d.Z,{options:["Last Month","Last 6 months","Last Year"],iconButtonProps:{size:"small",sx:{color:"text.disabled"}}})}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(p.Z,{type:"radar",height:295,series:c,options:t})})]})};var x=a(87357),m=a(15861),b=a(63730),y=a(60155),g=a(25812);let f=[{name:"Earning",data:[15,10,20,8,12,18,12,5]},{name:"Expense",data:[-7,-10,-7,-12,-6,-9,-5,-8]}],u=[{amount:126,avatarColor:"error",title:"Total Revenue",subtitle:"Client Payment",avatarIcon:"tabler:brand-paypal"},{amount:98,subtitle:"Refund",title:"Total Sales",avatarColor:"primary",avatarIcon:"tabler:currency-dollar"}],j=()=>{let e=(0,i.Z)(),t={chart:{stacked:!0,parentHeightOffset:0,toolbar:{show:!1},sparkline:{enabled:!0}},legend:{show:!1},tooltip:{enabled:!1},dataLabels:{enabled:!1},stroke:{width:5,lineCap:"round",colors:[e.palette.background.paper]},colors:[(0,g.E)(e.palette.error.main,1),(0,g.E)(e.palette.primary.main,1)],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{bar:{borderRadius:8,columnWidth:"40%",endingShape:"rounded",startingShape:"rounded"}},grid:{borderColor:e.palette.divider,yaxis:{lines:{show:!1}},padding:{top:-20,left:-5,right:-2,bottom:-12}},xaxis:{axisTicks:{show:!1},crosshairs:{opacity:0},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:e.breakpoints.values.xl,options:{plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:e.breakpoints.values.lg,options:{plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:e.breakpoints.values.md,options:{plotOptions:{bar:{columnWidth:"25%"}}}},{breakpoint:e.breakpoints.values.sm,options:{plotOptions:{bar:{columnWidth:"42%"}}}}]};return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(n.Z,{title:"Total Earning",action:(0,r.jsx)(d.Z,{options:["Refresh","Share","Update"],iconButtonProps:{size:"small",sx:{color:"text.disabled"}}}),subheader:(0,r.jsxs)(x.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center","& svg":{mr:1,color:"success.main"}},children:[(0,r.jsx)(m.Z,{variant:"h1",sx:{mr:2},children:"87%"}),(0,r.jsx)(b.Z,{fontSize:"1.25rem",icon:"tabler:chevron-up"}),(0,r.jsx)(m.Z,{variant:"h6",sx:{color:"success.main"},children:"25.8%"})]})}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(p.Z,{type:"bar",height:178,series:f,options:t}),u.map((e,t)=>(0,r.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center",...0===t&&{mt:7},mb:t!==u.length-1?4:void 0},children:[(0,r.jsx)(y.Z,{skin:"light",variant:"rounded",color:e.avatarColor,sx:{mr:4,width:34,height:34},children:(0,r.jsx)(b.Z,{icon:e.avatarIcon})}),(0,r.jsxs)(x.Z,{sx:{rowGap:1,columnGap:4,width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsxs)(x.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,r.jsx)(m.Z,{variant:"h6",children:e.title}),(0,r.jsx)(m.Z,{variant:"body2",sx:{color:"text.disabled"},children:e.subtitle})]}),(0,r.jsx)(m.Z,{sx:{fontWeight:500,color:"negative"===e.amountDiff?"error.main":"success.main"},children:"".concat("negative"===e.amountDiff?"-":"+","$").concat(e.amount)})]})]},t))]})]})};var v=a(67294),Z=a(38333),k=a(11057),w=a(18972),C=a(90948),S=a(23918);let z=[new Date().getFullYear()-1,new Date().getFullYear()-2,new Date().getFullYear()-3],I=[{name:"Earning",data:[252,203,152,173,235,299,235,252,106]},{name:"Expense",data:[-128,-157,-190,-163,-89,-51,-89,-136,-190]}],P=[{name:"Last Month",data:[20,10,30,16,24,5,30,23,28,5,30]},{name:"This Month",data:[50,40,60,46,54,35,70,53,58,35,60]}],E=(0,C.ZP)(o.ZP)(e=>{let{theme:t}=e;return{[t.breakpoints.down("sm")]:{borderBottom:"1px solid ".concat(t.palette.divider)},[t.breakpoints.up("sm")]:{borderRight:"1px solid ".concat(t.palette.divider)}}}),W=()=>{let[e,t]=(0,v.useState)(null),a=(0,i.Z)(),{settings:d}=(0,S.r)(),{direction:c}=d,h=e=>{t(e.currentTarget)},y=()=>{t(null)},f={chart:{stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},tooltip:{enabled:!1},dataLabels:{enabled:!1},stroke:{width:6,lineCap:"round",colors:[a.palette.background.paper]},colors:[(0,g.E)(a.palette.primary.main,1),(0,g.E)(a.palette.warning.main,1)],legend:{offsetY:-5,offsetX:-30,position:"top",fontSize:"13px",horizontalAlign:"left",fontFamily:a.typography.fontFamily,labels:{colors:a.palette.text.secondary},itemMargin:{vertical:4,horizontal:10},markers:{width:12,height:12,radius:10,offsetY:1,offsetX:"ltr"===a.direction?-4:5}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{bar:{borderRadius:8,columnWidth:"40%",endingShape:"rounded",startingShape:"rounded"}},grid:{borderColor:a.palette.divider,yaxis:{lines:{show:!1}},padding:{left:-15,right:-10,bottom:-12}},xaxis:{axisTicks:{show:!1},crosshairs:{opacity:0},axisBorder:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{colors:a.palette.text.disabled,fontFamily:a.typography.fontFamily,fontSize:a.typography.body2.fontSize}}},yaxis:{labels:{offsetX:-15,style:{colors:a.palette.text.disabled,fontFamily:a.typography.fontFamily,fontSize:a.typography.body2.fontSize}}},responsive:[{breakpoint:a.breakpoints.values.xl,options:{plotOptions:{bar:{columnWidth:"45%"}}}},{breakpoint:1380,options:{plotOptions:{bar:{columnWidth:"55%"}}}},{breakpoint:a.breakpoints.values.md,options:{plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:680,options:{plotOptions:{bar:{columnWidth:"60%"}}}},{breakpoint:a.breakpoints.values.sm,options:{plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:450,options:{plotOptions:{bar:{columnWidth:"55%"}}}}]},u={chart:{parentHeightOffset:0,toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:[1,2],curve:"smooth",dashArray:[5,0]},colors:[a.palette.divider,(0,g.E)(a.palette.primary.main,1)],grid:{padding:{top:-5},yaxis:{lines:{show:!1}}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}}};return(0,r.jsx)(s.Z,{children:(0,r.jsxs)(o.ZP,{container:!0,children:[(0,r.jsxs)(E,{item:!0,sm:8,xs:12,sx:{'& .apexcharts-series[rel="1"]':{transform:"translateY(-6px)"},'& .apexcharts-series[rel="2"]':{transform:"translateY(-9px)"}},children:[(0,r.jsx)(n.Z,{title:"Revenue Report"}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(p.Z,{type:"bar",height:317,series:I,options:f})})]}),(0,r.jsx)(o.ZP,{item:!0,xs:12,sm:4,children:(0,r.jsxs)(l.Z,{sx:{height:"100%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},children:[(0,r.jsxs)(k.Z,{size:"small",variant:"outlined","aria-haspopup":"true",onClick:h,sx:{mb:9,"& svg":{ml:.5}},children:[new Date().getFullYear(),(0,r.jsx)(b.Z,{fontSize:"1rem",icon:"tabler:chevron-down"})]}),(0,r.jsx)(Z.Z,{keepMounted:!0,anchorEl:e,onClose:y,open:!!e,anchorOrigin:{vertical:"bottom",horizontal:"ltr"===c?"right":"left"},transformOrigin:{vertical:"top",horizontal:"ltr"===c?"right":"left"},children:z.map(e=>(0,r.jsx)(w.Z,{onClick:y,children:e},e))}),(0,r.jsx)(m.Z,{variant:"h3",children:"$25,825"}),(0,r.jsxs)(x.Z,{sx:{mb:8,gap:1,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(m.Z,{variant:"h6",children:"Budget:"}),(0,r.jsx)(m.Z,{sx:{color:"text.secondary"},children:"56,800"})]}),(0,r.jsx)(p.Z,{type:"line",height:80,series:P,options:u}),(0,r.jsx)(k.Z,{sx:{mt:8},variant:"contained",children:"Increase Budget"})]})})]})})},O=[{data:[2e3,2e3,4e3,4e3,3050,3050,2050,2050,3050,3050,4700,4700,2750,2750,5700,5700]}],T=[{title:"Donates",trend:"negative",amount:"$756.26",trendDiff:139.34},{title:"Podcasts",trendDiff:576.24,amount:"$2,207.03"}],F=()=>{let e=(0,i.Z)(),t={chart:{parentHeightOffset:0,toolbar:{show:!1},sparkline:{enabled:!0}},tooltip:{enabled:!1},dataLabels:{enabled:!1},stroke:{width:4,curve:"straight"},fill:{type:"gradient",gradient:{opacityTo:0,opacityFrom:1,shadeIntensity:1,stops:[0,100],colorStops:[[{offset:0,opacity:.4,color:e.palette.primary.main},{offset:100,opacity:.1,color:e.palette.background.paper}]]}},theme:{monochrome:{enabled:!0,shadeTo:"light",shadeIntensity:1,color:e.palette.primary.main}},grid:{show:!1,padding:{top:11,right:5,bottom:22}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1}};return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(n.Z,{title:"Project Status",action:(0,r.jsx)(d.Z,{options:["Share","Refresh","Update"],iconButtonProps:{size:"small",sx:{color:"text.disabled"}}})}),(0,r.jsxs)(l.Z,{sx:{pb:0},children:[(0,r.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"light",variant:"rounded",sx:{mr:3,width:34,height:34},children:(0,r.jsx)(b.Z,{icon:"tabler:currency-dollar"})}),(0,r.jsxs)(x.Z,{sx:{rowGap:1,columnGap:4,width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsxs)(x.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,r.jsx)(m.Z,{variant:"h6",children:"$4,3742"}),(0,r.jsx)(m.Z,{variant:"body2",sx:{color:"text.disabled"},children:"Your Earnings"})]}),(0,r.jsx)(m.Z,{sx:{fontWeight:500,color:"success.main"},children:"+10.2%"})]})]}),(0,r.jsx)(p.Z,{type:"area",height:269,series:O,options:t}),T.map((e,t)=>(0,r.jsxs)(x.Z,{sx:{rowGap:1,columnGap:4,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",mb:t!==T.length-1?4:void 0},children:[(0,r.jsx)(m.Z,{variant:"h6",children:e.title}),(0,r.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(m.Z,{sx:{mr:4,color:"text.secondary"},children:e.amount}),(0,r.jsx)(m.Z,{sx:{fontWeight:500,color:"".concat("negative"===e.trend?"error":"success",".main")},children:"".concat("negative"===e.trend?"-":"+").concat(e.trendDiff)})]})]},t))]})]})};var B=a(88441),L=a(50613);let M=[{data:[37,76,65,41,99,53,70]}],D=[{progress:64,stats:"$545.69",title:"Earnings",avatarIcon:"tabler:currency-dollar"},{progress:59,title:"Profit",stats:"$256.34",avatarColor:"info",progressColor:"info",avatarIcon:"tabler:chart-pie-2"},{progress:22,stats:"$74.19",title:"Expense",avatarColor:"error",progressColor:"error",avatarIcon:"tabler:brand-paypal"}],R=(0,C.ZP)(o.ZP)(e=>{let{theme:t}=e;return{[t.breakpoints.up("sm")]:{paddingTop:"0 !important"}}}),Y=()=>{let e=(0,i.Z)(),t={chart:{parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,distributed:!0,columnWidth:"42%",endingShape:"rounded",startingShape:"rounded"}},legend:{show:!1},tooltip:{enabled:!1},dataLabels:{enabled:!1},colors:[(0,g.E)(e.palette.primary.main,.16),(0,g.E)(e.palette.primary.main,.16),(0,g.E)(e.palette.primary.main,.16),(0,g.E)(e.palette.primary.main,.16),(0,g.E)(e.palette.primary.main,1),(0,g.E)(e.palette.primary.main,.16),(0,g.E)(e.palette.primary.main,.16)],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},grid:{show:!1,padding:{top:-28,left:-9,right:-10,bottom:-12}},xaxis:{axisTicks:{show:!1},axisBorder:{show:!1},categories:["Mo","Tu","We","Th","Fr","Sa","Su"],labels:{style:{colors:e.palette.text.disabled,fontFamily:e.typography.fontFamily,fontSize:e.typography.body2.fontSize}}},yaxis:{show:!1}};return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(n.Z,{sx:{pb:0},title:"Earning Reports",subheader:"Weekly Earnings Overview",action:(0,r.jsx)(d.Z,{options:["Last Week","Last Month","Last Year"],iconButtonProps:{size:"small",sx:{color:"text.disabled"}}})}),(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(o.ZP,{container:!0,spacing:6,children:[(0,r.jsxs)(R,{item:!0,sm:5,xs:12,sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end"},children:[(0,r.jsxs)(x.Z,{sx:{mb:3,rowGap:1,columnGap:2.5,display:"flex",flexWrap:"wrap",alignItems:"center"},children:[(0,r.jsx)(m.Z,{variant:"h1",children:"$468"}),(0,r.jsx)(L.Z,{rounded:!0,size:"small",skin:"light",color:"success",label:"+4.2%"})]}),(0,r.jsx)(m.Z,{variant:"body2",children:"You informed of this week compared to last week"})]}),(0,r.jsx)(R,{item:!0,xs:12,sm:7,children:(0,r.jsx)(p.Z,{type:"bar",height:163,series:M,options:t})})]}),(0,r.jsx)(x.Z,{sx:{mt:6,borderRadius:1,p:e.spacing(4,5),border:"1px solid ".concat(e.palette.divider)},children:(0,r.jsx)(o.ZP,{container:!0,spacing:6,children:D.map((e,t)=>(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:4,children:[(0,r.jsxs)(x.Z,{sx:{mb:2.5,display:"flex",alignItems:"center"},children:[(0,r.jsx)(y.Z,{skin:"light",variant:"rounded",color:e.avatarColor,sx:{mr:2,width:26,height:26},children:(0,r.jsx)(b.Z,{fontSize:"1.125rem",icon:e.avatarIcon})}),(0,r.jsx)(m.Z,{variant:"h6",children:e.title})]}),(0,r.jsx)(m.Z,{variant:"h4",sx:{mb:2.5},children:e.stats}),(0,r.jsx)(B.Z,{variant:"determinate",value:e.progress,color:e.progressColor,sx:{height:4}})]},t))})})]})]})},A=[{subtitle:"142",title:"New Tickets",avatarIcon:"tabler:ticket"},{subtitle:"28",avatarColor:"info",title:"Open Tickets",avatarIcon:"tabler:circle-check"},{subtitle:"1 Day",title:"Response Time",avatarColor:"warning",avatarIcon:"tabler:clock"}],_=()=>{let e=(0,i.Z)(),t={chart:{sparkline:{enabled:!0}},stroke:{dashArray:10},labels:["Completed Task"],colors:[(0,g.E)(e.palette.primary.main,1)],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},fill:{type:"gradient",gradient:{shade:"dark",opacityTo:.5,opacityFrom:1,shadeIntensity:.5,stops:[30,70,100],inverseColors:!1,gradientToColors:[e.palette.primary.main]}},plotOptions:{radialBar:{endAngle:130,startAngle:-140,hollow:{size:"60%"},track:{background:"transparent"},dataLabels:{name:{offsetY:-15,color:e.palette.text.disabled,fontFamily:e.typography.fontFamily,fontSize:e.typography.body2.fontSize},value:{offsetY:15,fontWeight:500,formatter:e=>"".concat(e,"%"),color:e.palette.text.primary,fontFamily:e.typography.fontFamily,fontSize:e.typography.h1.fontSize}}}},grid:{padding:{top:-30,bottom:12}},responsive:[{breakpoint:1300,options:{grid:{padding:{left:22}}}},{breakpoint:e.breakpoints.values.md,options:{grid:{padding:{left:0}}}}]};return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(n.Z,{title:"Support Tracker",subheader:"Last 7 Days",action:(0,r.jsx)(d.Z,{options:["Refresh","Edit","Share"],iconButtonProps:{size:"small",sx:{color:"text.disabled"}}})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(o.ZP,{container:!0,spacing:6,children:[(0,r.jsxs)(o.ZP,{item:!0,xs:12,sm:5,children:[(0,r.jsx)(m.Z,{variant:"h1",children:"164"}),(0,r.jsx)(m.Z,{sx:{mb:6,color:"text.secondary"},children:"Total Tickets"}),A.map((e,t)=>(0,r.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center",mb:t!==A.length-1?4:void 0},children:[(0,r.jsx)(y.Z,{skin:"light",variant:"rounded",color:e.avatarColor,sx:{mr:4,width:34,height:34},children:(0,r.jsx)(b.Z,{icon:e.avatarIcon})}),(0,r.jsxs)(x.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,r.jsx)(m.Z,{variant:"h6",children:e.title}),(0,r.jsx)(m.Z,{variant:"body2",sx:{color:"text.disabled"},children:e.subtitle})]})]},t))]}),(0,r.jsx)(o.ZP,{item:!0,xs:12,sm:7,sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(p.Z,{type:"radialBar",height:325,options:t,series:[85]})})]})})]})};var $=a(40044),G=a(30298),J=a(55050),H=a(87952),X=a(45670);let N=[{type:"orders",avatarIcon:"tabler:shopping-cart",series:[{data:[28,10,45,38,15,30,35,28,8]}]},{type:"sales",avatarIcon:"tabler:chart-bar",series:[{data:[35,25,15,40,42,25,48,8,30]}]},{type:"profit",avatarIcon:"tabler:currency-dollar",series:[{data:[10,22,27,33,42,32,27,22,8]}]},{type:"income",avatarIcon:"tabler:chart-pie-2",series:[{data:[5,9,12,18,20,25,30,36,48]}]}],U=(e,t)=>N.map((a,o)=>{let s=a.type===e?y.Z:H.Z;return(0,r.jsx)($.Z,{value:a.type,label:(0,r.jsxs)(x.Z,{sx:{width:110,height:94,borderWidth:1,display:"flex",alignItems:"center",borderRadius:"10px",flexDirection:"column",justifyContent:"center",borderStyle:a.type===e?"solid":"dashed",borderColor:a.type===e?t.palette.primary.main:t.palette.divider},children:[(0,r.jsx)(s,{variant:"rounded",...a.type===e&&{skin:"light"},sx:{mb:2,width:34,height:34,...a.type!==e&&{backgroundColor:"action.selected"}},children:(0,r.jsx)(b.Z,{icon:a.avatarIcon})}),(0,r.jsx)(m.Z,{sx:{fontWeight:500,color:"text.secondary",textTransform:"capitalize"},children:a.type})]})},o)}),V=(e,t,a,o)=>N.map((e,s)=>{let i=Math.max(...e.series[0].data),n=e.series[0].data.indexOf(i),l=o.map((e,a)=>n===a?(0,g.E)(t.palette.primary.main,1):e);return(0,r.jsx)(J.Z,{value:e.type,children:(0,r.jsx)(p.Z,{type:"bar",height:258,options:{...a,colors:l},series:e.series})},s)}),q=()=>{let[e,t]=(0,v.useState)("orders"),a=(0,i.Z)(),o=(e,a)=>{t(a)},p=Array(9).fill((0,g.E)(a.palette.primary.main,.16)),c={chart:{parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,distributed:!0,columnWidth:"35%",startingShape:"rounded",dataLabels:{position:"top"}}},legend:{show:!1},tooltip:{enabled:!1},dataLabels:{offsetY:-15,formatter:e=>"".concat(e,"k"),style:{fontWeight:500,colors:[a.palette.text.secondary],fontSize:a.typography.body1.fontSize}},colors:p,states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},grid:{show:!1,padding:{top:20,left:-5,right:-8,bottom:-12}},xaxis:{axisTicks:{show:!1},axisBorder:{color:a.palette.divider},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{colors:a.palette.text.disabled,fontFamily:a.typography.fontFamily,fontSize:a.typography.body2.fontSize}}},yaxis:{labels:{offsetX:-15,formatter:e=>"$".concat(e,"k"),style:{colors:a.palette.text.disabled,fontFamily:a.typography.fontFamily,fontSize:a.typography.body2.fontSize}}},responsive:[{breakpoint:a.breakpoints.values.sm,options:{plotOptions:{bar:{columnWidth:"60%"}}}}]};return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(n.Z,{title:"Earning Reports",subheader:"Yearly Earnings Overview",action:(0,r.jsx)(d.Z,{options:["Last Week","Last Month","Last Year"],iconButtonProps:{size:"small",sx:{color:"text.disabled"}}})}),(0,r.jsx)(l.Z,{sx:{"& .MuiTabPanel-root":{p:0}},children:(0,r.jsxs)(X.ZP,{value:e,children:[(0,r.jsxs)(G.Z,{variant:"scrollable",scrollButtons:"auto",onChange:o,"aria-label":"earning report tabs",sx:{border:"0 !important","& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{p:0,minWidth:0,borderRadius:"10px","&:not(:last-child)":{mr:4}}},children:[U(e,a),(0,r.jsx)($.Z,{disabled:!0,value:"add",label:(0,r.jsx)(x.Z,{sx:{width:110,height:94,display:"flex",alignItems:"center",borderRadius:"10px",flexDirection:"column",justifyContent:"center",border:"1px dashed ".concat(a.palette.divider)},children:(0,r.jsx)(H.Z,{variant:"rounded",sx:{width:34,height:34,backgroundColor:"action.selected"},children:(0,r.jsx)(b.Z,{icon:"tabler:plus"})})})})]}),V(e,a,c,p)]})})]})};var K=a(52686);let Q=()=>(0,r.jsx)(K.Z,{children:(0,r.jsxs)(o.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(Y,{})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,r.jsx)(_,{})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(h,{})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,r.jsx)(W,{})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(F,{})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,r.jsx)(q,{})}),(0,r.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,r.jsx)(j,{})})]})});var ee=Q}},function(e){e.O(0,[2569,1689,9774,2888,179],function(){return e(e.s=12838)}),_N_E=e.O()}]);