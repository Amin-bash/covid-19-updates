(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=(a(92),a(6)),s=a.n(u),i=a(10),l=a(73),d=a(74),m=a(84),f=a(83),p=a(44),v=a.n(p),h=a(32),b=a.n(h),E="https://covid19.mathdro.id/api",g=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E,t&&(a="".concat(E,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2);case 13:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=a(31),_=a(45),w=a(76),O=a.n(w),j=function(e){var t=e.data,a=e.country,c=Object(n.useState)([]),o=Object(C.a)(c,2),u=o[0],l=o[1];Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,y();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(u),e()}),[]);var d=u.length?r.a.createElement(_.b,{data:{labels:u.map((function(e){return e.date})),datasets:[{data:u.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:u.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,m=t.confirmed?r.a.createElement(_.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return r.a.createElement("div",{className:O.a.container},a?m:d)},k=a(230),D=a(229),S=a(77),N=a.n(S),I=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(C.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,x();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(k.a,{className:N.a.formControl},r.a.createElement(D.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},B=a(226),U=a(231),V=a(227),A=a(228),M=a(33),z=a.n(M),G=a(13),J=a.n(G),P=a(34),Q=a.n(P),R=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:J.a.container},r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(B.a,{item:!0,component:U.a,xs:12,md:3,className:z()(J.a.card,J.a.infected)},r.a.createElement(V.a,null,r.a.createElement(A.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(A.a,{variant:"h5"},r.a.createElement(Q.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(A.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(A.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(B.a,{item:!0,component:U.a,xs:12,md:3,className:z()(J.a.card,J.a.recovered)},r.a.createElement(V.a,null,r.a.createElement(A.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(A.a,{variant:"h5"},r.a.createElement(Q.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(A.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(A.a,{variant:"body2"},"Number of recoveries of COVID-19"))),r.a.createElement(B.a,{item:!0,component:U.a,xs:12,md:3,className:z()(J.a.card,J.a.deaths)},r.a.createElement(V.a,null,r.a.createElement(A.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(A.a,{variant:"h5"},r.a.createElement(Q.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(A.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(A.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},W=a(82),q=a.n(W),L=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:v.a.container},r.a.createElement("img",{src:q.a,className:v.a.image,alt:""}),r.a.createElement(R,{data:t}),r.a.createElement(I,{handleCountryChange:this.handleCountryChange}),r.a.createElement(j,{data:t,country:a}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},76:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},77:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(208)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.2d8ac7c1.chunk.js.map