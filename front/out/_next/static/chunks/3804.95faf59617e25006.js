(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3804],{85924:function(e,t,n){var r=n(5569)(Object.getPrototypeOf,Object);e.exports=r},68630:function(e,t,n){var r=n(44239),i=n(85924),o=n(37005),a=Object.prototype,s=Function.prototype.toString,c=a.hasOwnProperty,l=s.call(Object);e.exports=function(e){if(!o(e)||"[object Object]"!=r(e))return!1;var t=i(e);if(null===t)return!0;var n=c.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==l}},13804:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eo}});var r=n(85893),i=n(87357),o=n(66242),a=n(78445),s=n(15861),c=n(44267),l=n(9253),u=n(97112),p=n(39277),d=n(81508),f=n(40048),m=n(18446),h=n.n(m),y=n(27361),v=n.n(y),b=n(68630),A=n.n(b),g=n(23560),x=n.n(g),j=n(14293),S=n.n(j),O=n(67294),R=n(74524),P=n(94184),k=n.n(P),E=n(48710),I=n(45108),w=n(87747),F=n(88169),T=n(25048),Z=n(2763),L=n(43815),C=n(52017),D=n(47523),K=n(69055),N=n(75471),_=n(6213),M=n(79896);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(t){q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,G(r.key),r)}}function Y(e,t){return(Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function W(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t,n){return(t=G(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e){var t=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==B(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===B(t)?t:String(t)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Y(e,t)}(o,e);var t,n,r,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=U(o);if(t){var r=U(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return W(e)}(this,e)});function o(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,o),q(W(t=i.call(this,e)),"pieRef",null),q(W(t),"sectorRefs",[]),q(W(t),"id",(0,K.EL)("recharts-pie-")),q(W(t),"handleAnimationEnd",function(){var e=t.props.onAnimationEnd;t.setState({isAnimationFinished:!0}),x()(e)&&e()}),q(W(t),"handleAnimationStart",function(){var e=t.props.onAnimationStart;t.setState({isAnimationFinished:!1}),x()(e)&&e()}),t.state={isAnimationFinished:!e.isAnimationActive,prevIsAnimationActive:e.isAnimationActive,prevAnimationId:e.animationId,sectorToFocus:0},t}return n=[{key:"isActiveIndex",value:function(e){var t=this.props.activeIndex;return Array.isArray(t)?-1!==t.indexOf(e):e===t}},{key:"hasActiveIndex",value:function(){var e=this.props.activeIndex;return Array.isArray(e)?0!==e.length:e||0===e}},{key:"renderLabels",value:function(e){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var t=this.props,n=t.label,r=t.labelLine,i=t.dataKey,a=t.valueKey,s=(0,C.L6)(this.props),c=(0,C.L6)(n),l=(0,C.L6)(r),u=n&&n.offsetRadius||20,p=e.map(function(e,t){var p=(e.startAngle+e.endAngle)/2,d=(0,f.op)(e.cx,e.cy,e.outerRadius+u,p),m=H(H(H(H({},s),e),{},{stroke:"none"},c),{},{index:t,textAnchor:o.getTextAnchor(d.x,e.cx)},d),h=H(H(H(H({},s),e),{},{fill:"none",stroke:e.fill},l),{},{index:t,points:[(0,f.op)(e.cx,e.cy,e.outerRadius,p),d],key:"line"}),y=i;return S()(i)&&S()(a)?y="value":S()(i)&&(y=a),O.createElement(E.m,{key:"label-".concat(t)},r&&o.renderLabelLineItem(r,h),o.renderLabelItem(n,m,(0,N.F$)(e,y)))});return O.createElement(E.m,{className:"recharts-pie-labels"},p)}},{key:"renderSectorsStatically",value:function(e){var t=this,n=this.props,r=n.activeShape,i=n.blendStroke,a=n.inactiveShape;return e.map(function(e,n){var s=a&&t.hasActiveIndex()?a:null,c=t.isActiveIndex(n)?r:s,l=H(H({},e),{},{stroke:i?e.fill:e.stroke});return O.createElement(E.m,$({ref:function(e){e&&!t.sectorRefs.includes(e)&&t.sectorRefs.push(e)},tabIndex:-1,className:"recharts-pie-sector"},(0,M.bw)(t.props,e,n),{key:"sector-".concat(n)}),o.renderSectorItem(c,l))})}},{key:"renderSectorsWithAnimation",value:function(){var e=this,t=this.props,n=t.sectors,r=t.isAnimationActive,i=t.animationBegin,o=t.animationDuration,a=t.animationEasing,s=t.animationId,c=this.state,l=c.prevSectors,u=c.prevIsAnimationActive;return O.createElement(R.ZP,{begin:i,duration:o,isActive:r,easing:a,from:{t:0},to:{t:1},key:"pie-".concat(s,"-").concat(u),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(t){var r=t.t,i=[],o=(n&&n[0]).startAngle;return n.forEach(function(e,t){var n=l&&l[t],a=t>0?v()(e,"paddingAngle",0):0;if(n){var s=(0,K.k4)(n.endAngle-n.startAngle,e.endAngle-e.startAngle),c=H(H({},e),{},{startAngle:o+a,endAngle:o+s(r)+a});i.push(c),o=c.endAngle}else{var u=e.endAngle,p=e.startAngle,d=(0,K.k4)(0,u-p)(r),f=H(H({},e),{},{startAngle:o+a,endAngle:o+d+a});i.push(f),o=f.endAngle}}),O.createElement(E.m,null,e.renderSectorsStatically(i))})}},{key:"attachKeyboardHandlers",value:function(e){var t=this;e.onkeydown=function(e){if(!e.altKey)switch(e.key){case"ArrowLeft":var n=++t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[n].focus(),t.setState({sectorToFocus:n});break;case"ArrowRight":var r=--t.state.sectorToFocus<0?t.sectorRefs.length-1:t.state.sectorToFocus%t.sectorRefs.length;t.sectorRefs[r].focus(),t.setState({sectorToFocus:r});break;case"Escape":t.sectorRefs[t.state.sectorToFocus].blur(),t.setState({sectorToFocus:0})}}}},{key:"renderSectors",value:function(){var e=this.props,t=e.sectors,n=e.isAnimationActive,r=this.state.prevSectors;return n&&t&&t.length&&(!r||!h()(r,t))?this.renderSectorsWithAnimation():this.renderSectorsStatically(t)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var e=this,t=this.props,n=t.hide,r=t.sectors,i=t.className,o=t.label,a=t.cx,s=t.cy,c=t.innerRadius,l=t.outerRadius,u=t.isAnimationActive,p=this.state.isAnimationFinished;if(n||!r||!r.length||!(0,K.hj)(a)||!(0,K.hj)(s)||!(0,K.hj)(c)||!(0,K.hj)(l))return null;var d=k()("recharts-pie",i);return O.createElement(E.m,{tabIndex:0,className:d,ref:function(t){e.pieRef=t}},this.renderSectors(),o&&this.renderLabels(r),T._.renderCallByParent(this.props,null,!1),(!u||p)&&Z.e.renderCallByParent(this.props,r,!1))}}],r=[{key:"getDerivedStateFromProps",value:function(e,t){return t.prevIsAnimationActive!==e.isAnimationActive?{prevIsAnimationActive:e.isAnimationActive,prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:[],isAnimationFinished:!0}:e.isAnimationActive&&e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curSectors:e.sectors,prevSectors:t.curSectors,isAnimationFinished:!0}:e.sectors!==t.curSectors?{curSectors:e.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(e,t){return e>t?"start":e<t?"end":"middle"}},{key:"renderLabelLineItem",value:function(e,t){return O.isValidElement(e)?O.cloneElement(e,t):x()(e)?e(t):O.createElement(w.H,$({},t,{type:"linear",className:"recharts-pie-label-line"}))}},{key:"renderLabelItem",value:function(e,t,n){if(O.isValidElement(e))return O.cloneElement(e,t);var r=n;return x()(e)&&(r=e(t),O.isValidElement(r))?r:O.createElement(F.x,$({},t,{alignmentBaseline:"middle",className:"recharts-pie-label-text"}),r)}},{key:"renderSectorItem",value:function(e,t){return O.isValidElement(e)?O.cloneElement(e,t):x()(e)?e(t):A()(e)?O.createElement(I.L,$({tabIndex:-1},t,e)):O.createElement(I.L,$({tabIndex:-1},t))}}],n&&V(o.prototype,n),r&&V(o,r),Object.defineProperty(o,"prototype",{writable:!1}),o}(O.PureComponent);q(J,"displayName","Pie"),q(J,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!D.x.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1}),q(J,"parseDeltaAngle",function(e,t){return(0,K.uY)(t-e)*Math.min(Math.abs(t-e),360)}),q(J,"getRealPieData",function(e){var t=e.props,n=t.data,r=t.children,i=(0,C.L6)(e.props),o=(0,C.NN)(r,L.b);return n&&n.length?n.map(function(e,t){return H(H(H({payload:e},i),e),o&&o[t]&&o[t].props)}):o&&o.length?o.map(function(e){return H(H({},i),e.props)}):[]}),q(J,"parseCoordinateOfPie",function(e,t){var n=t.top,r=t.left,i=t.width,o=t.height,a=(0,f.$4)(i,o);return{cx:r+(0,K.h1)(e.props.cx,i,i/2),cy:n+(0,K.h1)(e.props.cy,o,o/2),innerRadius:(0,K.h1)(e.props.innerRadius,a,0),outerRadius:(0,K.h1)(e.props.outerRadius,a,.8*a),maxRadius:e.props.maxRadius||Math.sqrt(i*i+o*o)/2}}),q(J,"getComposedData",function(e){var t,n,r=e.item,i=e.offset,o=J.getRealPieData(r);if(!o||!o.length)return null;var a=r.props,s=a.cornerRadius,c=a.startAngle,l=a.endAngle,u=a.paddingAngle,p=a.dataKey,d=a.nameKey,m=a.valueKey,h=a.tooltipType,y=Math.abs(r.props.minAngle),v=J.parseCoordinateOfPie(r,i),b=J.parseDeltaAngle(c,l),A=Math.abs(b),g=p;S()(p)&&S()(m)?((0,_.Z)(!1,'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'),g="value"):S()(p)&&((0,_.Z)(!1,'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'),g=m);var x=o.filter(function(e){return 0!==(0,N.F$)(e,g,0)}).length,j=A-x*y-(A>=360?x:x-1)*u,O=o.reduce(function(e,t){var n=(0,N.F$)(t,g,0);return e+((0,K.hj)(n)?n:0)},0);return O>0&&(t=o.map(function(e,t){var r,i=(0,N.F$)(e,g,0),o=(0,N.F$)(e,d,t),a=((0,K.hj)(i)?i:0)/O,l=(r=t?n.endAngle+(0,K.uY)(b)*u*(0!==i?1:0):c)+(0,K.uY)(b)*((0!==i?y:0)+a*j),p=(r+l)/2,m=(v.innerRadius+v.outerRadius)/2,A=[{name:o,value:i,payload:e,dataKey:g,type:h}],x=(0,f.op)(v.cx,v.cy,m,p);return n=H(H(H({percent:a,cornerRadius:s,name:o,tooltipPayload:A,midAngle:p,middleRadius:m,tooltipPosition:x},e),v),{},{value:(0,N.F$)(e,g),startAngle:r,endAngle:l,payload:e,paddingAngle:(0,K.uY)(b)*u})})),H(H({},v),{},{sectors:t,data:o})});var Q=(0,u.z)({chartName:"PieChart",GraphicalChild:J,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:p.I},{axisType:"radiusAxis",AxisComp:d.S}],formatAxisMap:f.t9,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),X=n(14888),ee=n(63730);let et=[{name:"R&D",value:50,color:"#00d4bd"},{name:"Operational",value:85,color:"#ffe700"},{name:"Networking",value:16,color:"#FFA1A1"},{name:"Hiring",value:50,color:"#826bf8"}],en=Math.PI/180,er=e=>{let{cx:t,cy:n,midAngle:i,innerRadius:o,outerRadius:a,percent:s}=e,c=o+(a-o)*.5;return(0,r.jsx)("text",{x:t+c*Math.cos(-i*en),y:n+c*Math.sin(-i*en),fill:"#fff",textAnchor:"middle",dominantBaseline:"central",children:"".concat((100*s).toFixed(0),"%")})},ei=()=>(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{title:"Expense Ratio",subheader:"Spending on various categories",subheaderTypographyProps:{sx:{color:e=>"".concat(e.palette.text.disabled," !important")}}}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(i.Z,{sx:{height:350},children:(0,r.jsx)(l.h,{children:(0,r.jsxs)(Q,{height:350,style:{direction:"ltr"},children:[(0,r.jsx)(J,{data:et,innerRadius:80,dataKey:"value",label:er,labelLine:!1,children:et.map((e,t)=>(0,r.jsx)(L.b,{fill:e.color},"cell-".concat(t)))}),(0,r.jsx)(X.u,{})]})})}),(0,r.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",mb:4,justifyContent:"center"},children:[(0,r.jsxs)(i.Z,{sx:{mr:6,display:"flex",alignItems:"center","& svg":{mr:1.5,color:"#00d4bd"}},children:[(0,r.jsx)(ee.Z,{icon:"mdi:circle",fontSize:"0.75rem"}),(0,r.jsx)(s.Z,{variant:"body2",children:"R&D"})]}),(0,r.jsxs)(i.Z,{sx:{mr:6,display:"flex",alignItems:"center","& svg":{mr:1.5,color:"#ffe700"}},children:[(0,r.jsx)(ee.Z,{icon:"mdi:circle",fontSize:"0.75rem"}),(0,r.jsx)(s.Z,{variant:"body2",children:"Operational"})]}),(0,r.jsxs)(i.Z,{sx:{mr:6,display:"flex",alignItems:"center","& svg":{mr:1.5,color:"#FFA1A1"}},children:[(0,r.jsx)(ee.Z,{icon:"mdi:circle",fontSize:"0.75rem"}),(0,r.jsx)(s.Z,{variant:"body2",children:"Networking"})]}),(0,r.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center","& svg":{mr:1.5,color:"#826bf8"}},children:[(0,r.jsx)(ee.Z,{icon:"mdi:circle",fontSize:"0.75rem"}),(0,r.jsx)(s.Z,{variant:"body2",children:"Hiring"})]})]})]})]});var eo=ei}}]);