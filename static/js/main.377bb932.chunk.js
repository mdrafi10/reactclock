(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(22),s=c.n(n),i=c(5),r=c(16),l=c(14),j=c(20),d=c(3),b=["January","February","March","April","May","June","July","August","September","October","November","December"],m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=["00","01","02","03","04","05","06","07","08","09","10","11","24"],u=["00","13","14","15","16","17","18","19","20","21","22","23","12"],O=c.p+"static/media/music.cdee8fa3.mp3",h=c(0),x=function(e){var t=e.giveaway,c=e.deleteData,a=e.id,n=e.label;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"deadline",children:[Object(h.jsx)("div",{className:"icon_control",children:Object(h.jsx)("div",{className:"icon_delete",title:"stop alarm",children:Object(h.jsx)("i",{className:"fas fa-times-circle",onClick:function(){return c(a)}})})}),Object(h.jsxs)("div",{className:"deadline_info",children:[Object(h.jsxs)("div",{className:"alarm_tune",children:[Object(h.jsx)("h4",{className:"giveaway",children:t}),Object(h.jsx)("audio",{src:O,autoPlay:!0})]}),Object(h.jsx)("div",{className:"massage",style:{textAlign:"center"},children:Object(h.jsx)("h2",{children:n})})]})]})})},v=function(e){var t=e.giveaway,c=e.timerDay,a=e.timerHour,n=e.timerMinute,s=e.timerSec,i=e.deleteData,r=e.id,l=e.editTog;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"deadline",children:[l?null:Object(h.jsx)("div",{className:"icon_control",children:Object(h.jsx)("div",{className:"icon_delete",title:"delete",children:Object(h.jsx)("i",{className:"fas fa-times-circle",onClick:function(){return i(r)}})})}),Object(h.jsxs)("div",{className:"deadline_info",children:[Object(h.jsx)("div",{className:"alarm_tune",children:Object(h.jsx)("h4",{className:"giveaway",children:t})}),Object(h.jsxs)("div",{className:"deadline_inner",children:[Object(h.jsx)("div",{className:"deadline-format",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"days",children:c}),Object(h.jsx)("span",{children:"days"})]})}),Object(h.jsx)("div",{className:"deadline-format",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"hours",children:a}),Object(h.jsx)("span",{children:"hours"})]})}),Object(h.jsx)("div",{className:"deadline-format",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"minutes",children:n}),Object(h.jsx)("span",{children:"mins"})]})}),Object(h.jsx)("div",{className:"deadline-format",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{className:"seconds",children:s}),Object(h.jsx)("span",{children:"secs"})]})})]})]})]})})},p=function(e){var t=Object(a.useState)(""),c=Object(d.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),l=r[0],j=r[1],O=Object(a.useState)(""),p=Object(d.a)(O,2),N=p[0],f=p[1],g=Object(a.useState)(""),y=Object(d.a)(g,2),S=y[0],C=y[1],_=Object(a.useState)(!1),M=Object(d.a)(_,2),k=M[0],w=M[1],A=Object(a.useRef)(),D=Number(e.item1.hours),T=Number(e.item1.min),F=e.item1.amPM,E=e.item1.date,I=e.item1.month,P=Number((""===F&&(F="AM"),0===D&&(D=1),"AM"===F&&D<=12?o[D]:"PM"===F&&D<=12?u[D]:void 0)),J="Days"===E||""===E?(new Date).getDate():Number(E),B=(new Date).getFullYear(),H=(new Date).getSeconds(),R=new Date(B,function(){if("Months"===I||""===I)return(new Date).getMonth();for(var e=b.length,t=0;t<e;t++)if(b[t]===I)return t}(),J,P,T,H),L=R.getFullYear(),W=R.getHours(),Y=R.getMinutes(),U=R.getDate(),q=R.getMonth();q=b[q];var z=m[R.getDay()],G=Object(h.jsxs)(h.Fragment,{children:["Ends on"," ",Object(h.jsxs)("span",{children:[z,", ",U," ",q," ",L]}),Object(h.jsxs)("p",{children:[" ","Time:"," ",Object(h.jsxs)("span",{children:[function(e){return["00","01","02","03","04","05","06","07","08","09","10","11","12","01","02","03","04","05","06","07","08","09","10","11"][e]}(W),":",function(e){if(e<10){return["00","01","02","03","04","05","06","07","08","09"][e]}return R.getMinutes()}(Y)," ",F]})]})]});return Object(a.useEffect)((function(){!function(){var e=R.getTime();A=setInterval((function(){var t=(new Date).getTime(),c=e-t,a=864e5,n=36e5,i=Math.floor(c/a),r=Math.floor(c%a/n),l=Math.floor(c%n/6e4),d=Math.floor(c%6e4/1e3);c<1e3?(clearInterval(A),1===Math.sign(c)&&w(!0)):(w(!1),s(i),j(r),f(l),C(d))}),1e3)}()}),[]),Object(h.jsx)(h.Fragment,{children:k?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x,{giveaway:G,id:e.id,deleteData:e.deleteData,label:e.item1.label})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(v,{giveaway:G,timerDay:n,timerHour:l,timerMinute:N,timerSec:S,deleteData:e.deleteData,editData:e.editData,id:e.id,editTog:e.editTog})})})},N=function(e){var t=e.clickEvent,c=e.Edit,a=e.Alarm,n=e.Icon;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("header",{className:"header_alarm",children:[Object(h.jsx)("h4",{children:c}),Object(h.jsx)("h3",{children:a}),Object(h.jsx)("div",{className:"alarm_add_icon",children:Object(h.jsx)("button",{onClick:t,children:n})})]})})},f=c(43),g=c.n(f),y=c(39),S=c(40),C=c.n(S),_=c(41),M=c.n(_),k=c(42),w=c.n(k),A=c(21),D=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("footer",{className:"footer_timer",children:Object(h.jsxs)("div",{className:"alarm_type",children:[Object(h.jsxs)(A.b,{to:"/",exact:!0,activeClassName:"tin_color",className:"alarm","aria-current":"page",children:[Object(h.jsx)(C.a,{className:"alarmI"}),Object(h.jsx)("h5",{children:"Alarm"})]}),Object(h.jsxs)(A.b,{to:"/stopwatch",exact:!0,activeClassName:"tin_color",className:"alarm",children:[Object(h.jsx)(M.a,{className:"alarmI"}),Object(h.jsx)("h5",{children:"Stopwatch"})]}),Object(h.jsxs)(A.b,{to:"/timer",exact:!0,activeClassName:"tin_color",className:"alarm",children:[Object(h.jsx)(w.a,{className:"alarmI"}),Object(h.jsx)("h5",{children:"Timer"})]})]})})})},T=["Days",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((function(e,t){return Object(h.jsx)("option",{children:e},t)})),F=["Months","January","February","March","April","May","June","July","August","September","October","November","December"].map((function(e,t){return Object(h.jsx)("option",{children:e},t)})),E=["AM","PM"].map((function(e,t){return Object(h.jsx)("option",{children:e},t)})),I=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"].map((function(e,t){return Object(h.jsx)("option",{children:e},t)})),P=[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e,t){return Object(h.jsx)("option",{children:e},t)})),J=function(){var e=Object(a.useState)({hours:"",min:"",amPM:"",month:"",date:"",label:""}),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),i=Object(d.a)(s,2),b=i[0],m=i[1],o=Object(a.useState)(null),u=Object(d.a)(o,2),O=u[0],x=u[1],v=Object(a.useState)(!0),f=Object(d.a)(v,2),S=f[0],C=f[1],_=Object(a.useState)(!0),M=Object(d.a)(_,2),k=M[0],w=M[1],A=Object(a.useState)(!0),J=Object(d.a)(A,2),B=J[0],H=J[1],R=function(e){var t=e.target.value,c=e.target.name;n((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(l.a)({},c,t))}))},L=function(){w(!1)},W=function(e){m((function(t){return t.filter((function(t){return e!==t.id}))}))},Y=function(e){var t=b.find((function(t){return e===t.id}));C(!1),n(t.name),x(e)},U=Object(h.jsx)("h3",{className:"save",children:"Save"}),q=Object(h.jsx)("span",{onClick:function(){H(!1)},children:"Edit"}),z=Object(h.jsx)("span",{onClick:function(){H(!0)},children:"Save"}),G=Object(h.jsx)("span",{onClick:function(){w(!0)},children:"Cancel"});return Object(h.jsx)(h.Fragment,{children:k?Object(h.jsxs)(h.Fragment,{children:[B?Object(h.jsx)(N,{clickEvent:L,Edit:q,Alarm:"Alarm",Icon:Object(h.jsx)(g.a,{className:"add",titleAccess:"Add Alarm"})}):Object(h.jsx)(N,{clickEvent:L,Edit:z,Alarm:"Alarm",Icon:""}),Object(h.jsx)("div",{className:"timer_action",children:Object(h.jsx)(y.Scrollbars,{children:b.map((function(e){return Object(h.jsx)(p,{value:e.name,item1:e.name,id:e.id,deleteData:W,editData:Y,editTog:B},e.id)}))})}),Object(h.jsx)(D,{})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N,{clickEvent:function(){if(c&&!S)m(b.map((function(e){return e.id===O?Object(j.a)(Object(j.a)({},e),{},{name:c}):e}))),C(!0),x(null);else{var e={id:(new Date).getTime().toString(),name:c};m([].concat(Object(r.a)(b),[e]))}w(!0)},Edit:G,Alarm:"Add Alarm",Icon:U}),Object(h.jsx)("section",{className:"section_center",children:Object(h.jsx)("article",{className:"gift_info",children:Object(h.jsxs)("div",{className:"input_fild",children:[Object(h.jsxs)("div",{className:"select1",children:[Object(h.jsx)("select",{type:"number",name:"hours",value:c.hours,onChange:R,children:P}),Object(h.jsx)("select",{type:"number",name:"min",value:c.min,onChange:R,children:I}),Object(h.jsx)("select",{type:"text",name:"amPM",value:c.amPM,onChange:R,children:E})]}),Object(h.jsxs)("div",{className:"select2",children:[Object(h.jsx)("h4",{children:"* No need select for current day"}),Object(h.jsx)("select",{type:"text",name:"month",value:c.month,onChange:R,children:F}),Object(h.jsx)("select",{type:"number",name:"date",value:c.date,onChange:R,children:T})]}),Object(h.jsxs)("div",{className:"alarm_mgs",children:[Object(h.jsx)("h3",{children:"Alarm Mgs"}),Object(h.jsx)("input",{type:"text",placeholder:"label",name:"label",value:c.label,onChange:R})]})]})})})]})})},B=function(e){var t=e.start,c=e.status,a=e.stop,n=e.reset,s=e.lap,i=e.upArr,r=e.clearAll,l=e.clearA;return Object(h.jsxs)(h.Fragment,{children:[0===c?Object(h.jsxs)("div",{className:"button-wrapper",children:[Object(h.jsx)("button",{className:"button hidden"}),Object(h.jsx)("button",{className:"button",onClick:t,children:"Start"}),Object(h.jsx)("button",{className:"button hidden"})]}):"",1===c?Object(h.jsxs)("div",{className:"button-wrapper",children:[Object(h.jsx)("button",{className:"button",onClick:n,children:"Reset"}),Object(h.jsx)("button",{className:"button stop",onClick:a,style:{border:"3px solid red"},children:"Stop"}),Object(h.jsx)("button",{className:"button",onClick:s,children:"Lap"})]}):"",2===c?Object(h.jsxs)("div",{className:"button-wrapper",children:[Object(h.jsx)("button",{className:"button",onClick:n,children:"Reset"}),Object(h.jsx)("button",{className:"button",onClick:t,children:"Start"}),Object(h.jsx)("button",{className:"button",onClick:s,children:"Lap"})]}):"",Object(h.jsxs)("ul",{className:"laps",children:[l?Object(h.jsx)("button",{className:"lap-lear-button",onClick:r,children:"Clear All"}):null,i.map((function(e,t){return Object(h.jsxs)("li",{className:"lap-item",children:[Object(h.jsxs)("span",{className:"number",children:["#",t]}),Object(h.jsxs)("span",{className:"timeStamp",children:[" ",e.m," : ",e.s," : ",e.ms]})]},t)}))]})]})},H=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","00"],R=function(){var e=Object(a.useState)({ms:0,s:0,m:0}),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),i=Object(d.a)(s,2),l=i[0],j=i[1],b=Object(a.useState)(0),m=Object(d.a)(b,2),o=m[0],u=m[1],O=Object(a.useState)([]),x=Object(d.a)(O,2),v=x[0],p=x[1],N=Object(a.useState)(!1),f=Object(d.a)(N,2),g=f[0],y=f[1],S=Object(a.useState)(!1),C=Object(d.a)(S,2),_=C[0],M=C[1],k=H[c.ms],w=c.s,A=c.m,T=function(){return 60===w&&(A++,w=0),100===k&&(w++,k=0),60===A&&(A=0),k++,n({ms:k,s:w,m:A})};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Stopwatch"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"head_container",children:Object(h.jsxs)("div",{className:"watch",children:[_?Object(h.jsx)("div",{className:"outer-circle animation-bg",children:Object(h.jsxs)("div",{className:"inner-circle",children:[Object(h.jsxs)("span",{className:"text minute",children:[c.m>=10?c.m:"0"+c.m," :"]}),Object(h.jsxs)("span",{className:"text sec",children:["\xa0",c.s>=10?c.s:"0"+c.s," :"]}),Object(h.jsxs)("span",{className:"text msec",children:["\xa0",k]})]})}):Object(h.jsx)("div",{className:"outer-circle",children:Object(h.jsxs)("div",{className:"inner-circle",children:[Object(h.jsxs)("span",{className:"text minute",children:[c.m>=10?c.m:"0"+c.m," :"]}),Object(h.jsxs)("span",{className:"text sec",children:["\xa0",c.s>=10?c.s:"0"+c.s," :"]}),Object(h.jsxs)("span",{className:"text msec",children:["\xa0",k]})]})}),Object(h.jsx)("div",{className:"button_laps",children:Object(h.jsx)(B,{start:function(){T(),u(1),M(!0),j(setInterval(T,10))},status:o,stop:function(){clearInterval(l),u(2),M(!1)},reset:function(){clearInterval(l),u(0),n({ms:0,s:0,m:0}),p([]),y(!1),M(!1)},lap:function(){p((function(e){return[].concat(Object(r.a)(e),[c])})),y(!0)},upArr:v,clearAll:function(){p([]),y(!1)},clearA:g})})]})})}),Object(h.jsx)(D,{})]})},L=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"].map((function(e,t){return Object(h.jsx)("option",{children:e},t)})),W=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((function(e,t){return Object(h.jsx)("option",{children:e},t)})),Y=c(93),U=c(44),q=function(e){var t=e.children,c=e.showTime,a=e.updateTime,n=e.cancelEvent,s=e.pauseEvent,i=e.trueFalse,r=e.sartEvent,l=60*Number(a.hours)*60+60*Number(a.min);return Object(h.jsx)(h.Fragment,{children:c?Object(h.jsxs)("div",{className:"count",children:[Object(h.jsx)("div",{className:"time_wrapper",children:Object(h.jsx)(U.CountdownCircleTimer,{isPlaying:i,duration:l,strokeWidth:6,trailColor:"#020422",colors:[["#fe6f6b",.33]],onComplete:function(){},children:t})}),Object(h.jsxs)("div",{className:"btn-wrapper",children:[Object(h.jsx)(Y.a,{className:"but_c",onClick:n,children:"Cancel"}),i?Object(h.jsx)(Y.a,{className:"but_p",onClick:s,children:"Pause"}):Object(h.jsx)(Y.a,{className:"but_p",onClick:r,children:"start"})]})]}):null})},z=function(e){var t=e.timerTuneBtn;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("audio",{src:O,autoPlay:!0}),Object(h.jsxs)("div",{className:"mgsTune",children:[Object(h.jsx)("h2",{children:"Time is Up !!"}),Object(h.jsx)(Y.a,{className:"timerBtn",onClick:t,children:"stop Tune"})]}),Object(h.jsx)("div",{className:"backdrop"})]})},G=function(){var e=Object(a.useState)({hours:"",min:"",active:"hours"}),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({hours:"",min:"",active:"hours"}),i=Object(d.a)(s,2),r=i[0],b=i[1],m=Object(a.useState)(!1),o=Object(d.a)(m,2),u=o[0],O=o[1],x=Object(a.useState)(!0),v=Object(d.a)(x,2),p=v[0],N=v[1],f=Object(a.useState)(!1),g=Object(d.a)(f,2),y=g[0],S=g[1],C=function(e){var t=e.target.value,c=e.target.name;n((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(l.a)({},c,t))}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{style:{color:"white",textAlign:"center"},children:"Timer"}),u?null:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{className:"section_center sec_center",children:Object(h.jsx)("article",{className:"gift_info",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"input_fild",children:Object(h.jsxs)("div",{className:"select1 selectT",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Hours"}),Object(h.jsx)("select",{type:"number",name:"hours",value:c.hours,onChange:C,children:W})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Min"}),Object(h.jsx)("select",{type:"number",name:"min",value:c.min,onChange:C,children:L})]})]})}),Object(h.jsx)("div",{className:"button_Timer",children:Object(h.jsx)(Y.a,{className:"timer_btn",onClick:function(){b(c),O(!0)},children:"Set Timer"})})]})})})}),Object(h.jsx)(q,{updateTime:r,showTime:u,children:function(e){var t=e.remainingTime;0===t&&(O(!1),S(!0));var c=Math.floor(t/3600),a=Math.floor(t%3600/60),n=t%60;return"".concat(c,":").concat(a,":").concat(n)},pauseEvent:function(){N(!1)},cancelEvent:function(){O(!1),N(!0)},trueFalse:p,sartEvent:function(){N(!0)}}),y?Object(h.jsx)(z,{timerTuneBtn:function(){S(!1)}}):null,Object(h.jsx)(D,{})]})},K=(c(76),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"alarm_start",children:Object(h.jsx)("div",{className:"alarm_main",children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{exact:!0,path:"/",component:J}),Object(h.jsx)(i.b,{exact:!0,path:"/stopwatch",component:R}),Object(h.jsx)(i.b,{exact:!0,path:"/timer",component:G}),Object(h.jsx)(i.a,{to:"/"})]})})})})});c(77);s.a.render(Object(h.jsx)(A.a,{children:Object(h.jsx)(K,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.377bb932.chunk.js.map