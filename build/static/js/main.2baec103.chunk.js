(this.webpackJsonpecotrek=this.webpackJsonpecotrek||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(14),o=a.n(n),i=(a(69),a(31),a(32),a(33)),r=a(8),l=a(9),d=a(38),u=a(26),j=a(27),b=a(42),m=a(40),h=a(25),p={ori:{name:"",coords:"",latLng:{lat:"",lng:""}},dest:{name:"",coords:"",latLng:{lat:"",lng:""}},transport:{value:""},carbon:{value:""},saplings:{value:""}},g=c.a.createContext(p),O=a.p+"static/media/carbon.09db6546.png",v=a.p+"static/media/tree.d2f50b74.png",x=a(1),f=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var s;Object(u.a)(this,a),(s=t.call(this,e)).ref=c.a.createRef(),s.map=null;var n=s.props;n.geometry,n.setGeometry;return s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/ecotrek",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_HERE,t=this.context;if(this.setState({ori:t.ori,dest:t.dest,transport:t.transport,carbon:t.carbon,saplings:t.saplings}),!this.map){var a=new h.a.service.Platform({apikey:e}),s=a.createDefaultLayers(),c=new h.a.Map(this.ref.current,s.vector.normal.map,{pixelRatio:window.devicePixelRatio,padding:{top:100,left:100,bottom:100,right:100}});h.a.ui.UI.createDefault(c,s).getControl("zoom");var n={mode:"fastest;car;",waypoint0:"geo!".concat(t.ori.coords),waypoint1:"geo!".concat(t.dest.coords),representation:"display"};a.getRoutingService().calculateRoute(n,(function(e){var t,a,s,n,o;if(e.response.route){a=(t=e.response.route[0]).shape,o=new h.a.geo.LineString,a.forEach((function(e){var t=e.split(",");o.pushLatLngAlt(t[0],t[1])})),s=t.waypoint[0].mappedPosition,n=t.waypoint[1].mappedPosition;var i=new h.a.map.Polyline(o,{style:{strokeColor:"blue",lineWidth:3}}),r=new h.a.map.Marker({lat:s.latitude,lng:s.longitude}),l=new h.a.map.Marker({lat:n.latitude,lng:n.longitude});c.addObjects([i,r,l]),c.getViewModel().setLookAtData({bounds:i.getBoundingBox()})}}),(function(e){alert(e.message)})),this.map=c}}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("div",{className:"Background",children:Object(x.jsxs)("div",{className:"Background-image",children:[Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)("h1",{className:"title",children:"Ecotrek"})}),Object(x.jsxs)("div",{className:"page",children:[Object(x.jsx)("div",{className:"map",style:{width:"500px",height:"500px"},ref:this.ref}),Object(x.jsxs)("div",{className:"Route-details",style:{padding:""},children:[Object(x.jsx)("img",{src:O,className:"Route-images",alt:"carbon cloud"}),"Your journey to ",this.context.ori.name," from ",this.context.dest.name," by ",this.context.transport.value," will produce an estimated ",this.props.geometry[0].summary.co2Emission," kilograms of carbon. ",Object(x.jsx)("br",{}),Object(x.jsx)("img",{src:v,className:"Route-images",alt:"tree"}),"To offset this amount of carbon emissions, it would require ",this.context.saplings.value," tree seedlings to be planted and grown for 10 years."]})]})]})})})}}]),a}(c.a.Component);f.contextType=g;var y=a(6),N=a(2),k=a(43),w=a.n(k),C=a(64);function E(e){var t=e.setGeometry,a=Object({NODE_ENV:"production",PUBLIC_URL:"/ecotrek",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_HERE,c=Object(s.useContext)(g),n=c.ori,o=c.dest,i=c.transport,r=c.carbon,u=c.saplings,j={control:function(e){return Object(N.a)(Object(N.a)({},e),{},{backgroundColor:"white"})},option:function(e,t){var a=t.isDisabled,s=t.isFocused,c=t.isSelected;return Object(N.a)(Object(N.a)({},e),{},{color:"#000000",backgroundColor:a?void 0:c||s?"#8FC886":void 0,cursor:a?"not-allowed":"default",":active":Object(N.a)(Object(N.a)({},e[":active"]),{},{backgroundColor:a?void 0:s?"#76A86E":"#8FC886"})})},input:function(e){return Object(N.a)({},e)},placeholder:function(e){return Object(N.a)({},e)},singleValue:function(e){return Object(N.a)(Object(N.a)({},e),{},{color:"black"})}},b=Object(s.useState)({}),m=Object(l.a)(b,2),h=m[0],p=m[1];var O=function(e){var t=e.target,s=t.name,c=t.value;p((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(y.a)({},s,c))})),"origin"===s?function(e){n.name=e;var t="";w.a.get("https://geocode.search.hereapi.com/v1/geocode?apikey=".concat(a,"&q=").concat(e)).then((function(e){t=e.data.items[0].position.lat+","+e.data.items[0].position.lng,n.coords=t,n.latLng.lat=e.data.items[0].position.lat,n.latLng.lng=e.data.items[0].position.lng}))}(c):"destination"===s&&function(e){o.name=e;var t="";w.a.get("https://geocode.search.hereapi.com/v1/geocode?apikey=".concat(a,"&q=").concat(e)).then((function(e){t=e.data.items[0].position.lat+","+e.data.items[0].position.lng,o.coords=t,o.latLng.lat=e.data.items[0].position.lat,o.latLng.lng=e.data.items[0].position.lng}))}(c)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("div",{className:"Background",children:Object(x.jsxs)("div",{className:"Background-image",children:[Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h1",{className:"title",children:"Ecotrek"}),Object(x.jsxs)("h2",{className:"description",children:["Embark on an eco-conscious journey",Object(x.jsx)("br",{}),"by tracking your carbon emissions",Object(x.jsx)("br",{}),"from a start and end point!"]})]}),Object(x.jsxs)("div",{className:"menu",children:[Object(x.jsxs)("div",{className:"instructions",children:["Enter your travel details to view the",Object(x.jsx)("br",{}),"estimated carbon emissions for your route."]}),Object(x.jsx)("div",{className:"origin",children:Object(x.jsx)("input",{onBlur:O,name:"origin",type:"text",placeholder:"Origin"})}),Object(x.jsx)("div",{className:"destination",children:Object(x.jsx)("input",{onBlur:O,name:"destination",type:"text",placeholder:"Destination"})}),Object(x.jsx)("div",{className:"dropdown",children:Object(x.jsx)(C.a,{onChange:function(e){return p((function(t){return Object(N.a)(Object(N.a)({},t),{},{vehicle:e.value})}))},name:"transportMode",type:"text",styles:j,options:[{value:"pedestrian",label:"On Foot"},{value:"car",label:"Car"},{value:"van",label:"Light Truck/Van"},{value:"truck",label:"Truck"},{value:"motorcycle",label:"Motorcycle"},{value:"scooter",label:"Scooter"}],maxMenuHeight:220,placeholder:Object(x.jsx)("div",{children:"Transportation Mode"})})}),Object(x.jsx)("div",{className:"submit",children:Object(x.jsx)(d.a,{variant:"success",onClick:function(){!function(){var e,s,c;i.value=h.vehicle,"car"===h.vehicle?(e="gasoline",s=9.72):"truck"===h.vehicle?(e="diesel",s=36.19):"scooter"===h.vehicle?(e="gasoline",s=3.36):"motorcycle"===h.vehicle?(i.value="scooter",e="gasoline",s=5.35):"van"===h.vehicle?(i.value="car",e="gasoline",s=13.44):"pedestrian"===h.vehicle&&(e="electric",s=0),w.a.get("https://route.ls.hereapi.com/routing/7.2/calculateroute.json?waypoint0=".concat(n.coords,"&waypoint1=").concat(o.coords,"&mode=fastest;").concat(i.value,";traffic:enabled&departure=now&apiKey=").concat(a,"&vehicletype=").concat(e,",").concat(s,"&routesummarytype=Co2Emission")).then((function(e){c=e.data.response.route,r.total=c[0].summary.co2Emission,u.value=Math.round(.01654*c[0].summary.co2Emission),t(c)}))}()},type:"submit",children:"Submit"})})]})]})})})})}var R=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(g.Provider,{value:p,children:[!a&&Object(x.jsx)(E,{setGeometry:c}),a&&Object(x.jsxs)("div",{children:[Object(x.jsx)(f,{geometry:a,setGeometry:c}),Object(x.jsx)(d.a,{variant:"success",onClick:function(){c(null)},type:"submit",style:{position:"fixed",bottom:"5vh",left:"50%"},children:"Reset"})]})]})})},S=a.p+"static/media/transportation.eef9662b.jpg";var T=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("div",{className:"Background",children:Object(x.jsxs)("div",{className:"Background-image",children:[Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h1",{className:"title",children:"Ecotrek"}),Object(x.jsx)("h2",{className:"subtitle",children:"About"})]}),Object(x.jsxs)("div",{className:"page",children:[Object(x.jsx)("div",{className:"Body-text",children:"Transportation is a leading cause for global warming, worsening air quality and the diminishing ozone layer. Fossil fuel emissions from transportation contribute to an estimated 20% of global greenhouse gas emissions each year. Ecotrek's objective is to present users with the amount of carbon emitted in their travels. Users can shift their focus towards eco-friendly travel by comparing their emissions to the number of trees required to offset their carbon."}),Object(x.jsx)("img",{src:S,className:"About-image",alt:"transportation modes"})]})]})})})},_=a.p+"static/media/ourworldindata.af53cfc2.png",L=a.p+"static/media/depofenergy.48422c6e.jpg",A=a.p+"static/media/epa.9c8c8911.jpg";var P=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("div",{className:"Background",children:Object(x.jsxs)("div",{className:"Background-image",children:[Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h1",{className:"title",children:"Ecotrek"}),Object(x.jsx)("h2",{className:"subtitle",children:"Resources"})]}),Object(x.jsxs)("div",{className:"Resources-page",children:[Object(x.jsxs)("div",{className:"resource",style:{marginTop:"10vh"},children:[Object(x.jsx)("a",{href:"https://ourworldindata.org/grapher/co2-transport-mode?tab=table",target:"_blank",children:Object(x.jsx)("img",{src:_,className:"Resources-images"})}),Object(x.jsx)("div",{className:"Resources-text",children:"Carbon emission data organized by transportation mode."})]}),Object(x.jsxs)("div",{className:"resource",children:[Object(x.jsx)("a",{href:"https://afdc.energy.gov/data/10310",target:"_blank",children:Object(x.jsx)("img",{src:L,className:"Resources-images"})}),Object(x.jsx)("div",{className:"Resources-text",children:"Average fuel economy sorted by major vehicle categories."})]}),Object(x.jsxs)("div",{className:"resource",children:[Object(x.jsx)("a",{href:"https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references#seedlings",target:"_blank",children:Object(x.jsx)("img",{src:A,className:"Resources-images"})}),Object(x.jsx)("div",{className:"Resources-text",children:"Calculate number of seedlings to plant to offset a certain amount of carbon emissions."})]})]})]})})})},B=a(119),F=a(118),D=a(120),H=a(44),M=function(){return Object(x.jsx)(B.a,{className:"navibar",variant:"light",children:Object(x.jsxs)(F.a,{children:[Object(x.jsx)(B.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(B.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(D.a,{className:"mr-auto",children:[Object(x.jsx)(H.LinkContainer,{to:"/",children:Object(x.jsx)(D.a.Link,{children:"Home"})}),Object(x.jsx)(H.LinkContainer,{to:"/about",children:Object(x.jsx)(D.a.Link,{children:"About"})}),Object(x.jsx)(H.LinkContainer,{to:"/Resources",children:Object(x.jsx)(D.a.Link,{children:"Resources"})})]})})]})})};var K=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(i.HashRouter,{basename:"/ecotrek",children:[Object(x.jsx)(M,{}),Object(x.jsxs)(r.g,{children:[Object(x.jsx)(r.d,{exact:!0,path:"/",component:R}),Object(x.jsx)(r.d,{exact:!0,path:"/about",component:T}),Object(x.jsx)(r.d,{exact:!0,path:"/resources",component:P})]})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,121)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),s(e),c(e),n(e),o(e)}))};o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(K,{})}),document.getElementById("root")),W()},31:function(e,t,a){},69:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.2baec103.chunk.js.map