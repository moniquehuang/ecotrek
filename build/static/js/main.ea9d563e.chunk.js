(this.webpackJsonpecotrek=this.webpackJsonpecotrek||[]).push([[0],{29:function(e,t,a){},52:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),i=a.n(o),r=(a(52),a(8)),s=(a(29),a(30),a(42)),l=a(43),u=a(47),d=a(46),j=a(15),b=a(17),p=a(14),h=a(20),m=a(1),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).ref=c.a.createRef(),n.map=null;n.props.geometry;return n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){if(!this.map){var e=new j.a.service.Platform({apikey:"oR-Y2b8w3WB90R-VHcC3toAQDIcKVMjuKKwtk73fcx4"}),t=e.createDefaultLayers(),a=new j.a.Map(this.ref.current,t.vector.normal.map,{pixelRatio:window.devicePixelRatio,zoom:2});j.a.ui.UI.createDefault(a,t).getControl("zoom");var n=this.props.geometry[0].waypoint;console.log(n);var c={mode:"fastest;car;",waypoint0:"geo!".concat(Object.values(n[0].mappedPosition).flat()),waypoint1:"geo!".concat(Object.values(n[1].mappedPosition).flat()),representation:"display"};e.getRoutingService().calculateRoute(c,(function(e){var t,n,c,o,i;if(e.response.route){n=(t=e.response.route[0]).shape,i=new j.a.geo.LineString,n.forEach((function(e){var t=e.split(",");i.pushLatLngAlt(t[0],t[1])})),c=t.waypoint[0].mappedPosition,o=t.waypoint[1].mappedPosition;var r=new j.a.map.Polyline(i,{style:{strokeColor:"blue",lineWidth:3}}),s=new j.a.map.Marker({lat:c.latitude,lng:c.longitude}),l=new j.a.map.Marker({lat:o.latitude,lng:o.longitude});a.addObjects([r,s,l]),a.getViewModel().setLookAtData({bounds:r.getBoundingBox()})}}),(function(e){alert(e.message)})),this.map=a}}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{className:"Background",children:Object(m.jsxs)("div",{className:"Background-image",children:[Object(m.jsx)(b.a,{className:"navbar",variant:"light",children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a.Brand,{href:"#home",children:"Ecotrek"}),Object(m.jsxs)(p.a,{className:"me-auto",children:[Object(m.jsx)(p.a.Link,{href:"#home",children:"Home"}),Object(m.jsx)(p.a.Link,{href:"#carbon",children:"Resources"})]})]})}),Object(m.jsx)("div",{style:{width:"600px",height:"600px"},ref:this.ref})]})})})}}]),a}(c.a.Component),g=a(7),v=a(3),f=a(28),x=a(23),y=a.n(x),k=a(45);function w(e){var t=e.setGeometry,a="oR-Y2b8w3WB90R-VHcC3toAQDIcKVMjuKKwtk73fcx4",c={control:function(e){return Object(v.a)(Object(v.a)({},e),{},{backgroundColor:"white"})},option:function(e,t){var a=t.isDisabled,n=t.isFocused,c=t.isSelected;return Object(v.a)(Object(v.a)({},e),{},{color:"#000000",backgroundColor:a?void 0:c||n?"#8FC886":void 0,cursor:a?"not-allowed":"default",":active":Object(v.a)(Object(v.a)({},e[":active"]),{},{backgroundColor:a?void 0:n?"#76A86E":"#8FC886"})})},input:function(e){return Object(v.a)({},e)},placeholder:function(e){return Object(v.a)({},e)},singleValue:function(e){return Object(v.a)(Object(v.a)({},e),{},{color:"black"})}},o=Object(n.useState)({}),i=Object(r.a)(o,2),s=i[0],l=i[1],u=Object(n.useState)(null),d=Object(r.a)(u,2),j=d[0],O=d[1],x=Object(n.useState)(null),w=Object(r.a)(x,2),C=w[0],N=w[1];Object(n.useEffect)((function(){j&&C&&(console.log(j),console.log(C))}),[j,C]);var B=function(e){var t=e.target;console.log(t.name);var n=t.name,c=t.value;l((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},n,c))})),"origin"===n?function(e){var t="";y.a.get("https://geocode.search.hereapi.com/v1/geocode?apikey=".concat(a,"&q=").concat(e)).then((function(e){t=e.data.items[0].position.lat+","+e.data.items[0].position.lng,O(t)}))}(c):"destination"===n&&function(e){var t="";y.a.get("https://geocode.search.hereapi.com/v1/geocode?apikey=".concat(a,"&q=").concat(e)).then((function(e){e.data,t=e.data.items[0].position.lat+","+e.data.items[0].position.lng,N(t)}))}(c)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{className:"Background",children:Object(m.jsxs)("div",{className:"Background-image",children:[Object(m.jsx)(b.a,{className:"navbar",variant:"light",children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a.Brand,{href:"#home",children:"Ecotrek"}),Object(m.jsxs)(p.a,{className:"me-auto",children:[Object(m.jsx)(p.a.Link,{href:"#home",children:"Home"}),Object(m.jsx)(p.a.Link,{href:"#carbon",children:"Resources"})]})]})}),Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("h1",{className:"title",children:"Ecotrek"}),Object(m.jsxs)("h2",{className:"description",children:["Embark on an eco-conscious journey",Object(m.jsx)("br",{}),"by tracking your carbon emissions",Object(m.jsx)("br",{}),"from a start and end point!"]}),Object(m.jsx)("div",{className:"origin",children:Object(m.jsx)("input",{onBlur:B,name:"origin",type:"text",placeholder:"Origin"})}),Object(m.jsx)("div",{className:"destination",children:Object(m.jsx)("input",{onBlur:B,name:"destination",type:"text",placeholder:"Destination"})}),Object(m.jsx)("div",{className:"dropdown",style:{marginTop:"20px"},children:Object(m.jsx)(k.a,{onChange:function(e){return l((function(t){return Object(v.a)(Object(v.a)({},t),{},{vehicle:e.value})}))},name:"transportMode",type:"text",styles:c,options:[{value:"pedestrian",label:"On Foot"},{value:"car",label:"Car"},{value:"truck",label:"Truck"},{value:"bicycle",label:"Bicycle"},{value:"scooter",label:"Scooter"}],placeholder:Object(m.jsx)("div",{children:"Transportation Mode"})})}),Object(m.jsx)("div",{className:"submit",children:Object(m.jsx)(f.a,{variant:"success",onClick:function(){!function(){var e;y.a.get("https://route.ls.hereapi.com/routing/7.2/calculateroute.json?waypoint0=".concat(j,"&waypoint1=").concat(C,"&mode=fastest;").concat(s.vehicle,";traffic:enabled&departure=now&apiKey=").concat(a,"&vehicletype=gasoline,5&routesummarytype=Co2Emission")).then((function(a){e=a.data.response.route,console.log(e),t(e)}))}()},type:"submit",children:"Submit"})})]})]})})})})}var C=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(m.jsxs)(m.Fragment,{children:[!a&&Object(m.jsx)(w,{setGeometry:c}),a&&Object(m.jsx)(O,{geometry:a})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,97)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),o(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),N()}},[[95,1,2]]]);
//# sourceMappingURL=main.ea9d563e.chunk.js.map